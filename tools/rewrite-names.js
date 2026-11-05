#!/usr/bin/env node
/**
 * Mechanical 0.1.0 -> 0.2.0 name rewrite.
 *
 * Content pass only: every mapped old name in a text file becomes its 0.2.0
 * name. Names mapped to null are left for prose review and reported. Directory
 * renames are applied by `--apply-dirs`, which never overwrites an existing
 * target: a second old skill mapping to the same new name is parked under
 * `resources/legacy/skills/<old>/` for the tier rewrite to merge.
 */
import { existsSync, readFileSync, readdirSync, renameSync, statSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";

export const CONTENT_ROOTS = [
  "skills",
  "playbooks",
  "principles",
  "roles",
  "rubrics",
  "templates",
  "evaluations",
  "harnesses",
  "docs",
  "README.md",
  "AGENTS.md",
  "CONTRIBUTING.md",
];

const TEXT = /\.(md|json|ya?ml|hbs)$/;
const SKIP = new Set(["resources/legacy"]);

export function rewriteNames(root, map) {
  const packRoot = resolve(root);
  const changed = [];
  const unmapped = new Set();
  const dropped = new Set();

  for (const file of collect(packRoot)) {
    const original = readFileSync(file, "utf-8");
    let next = original;

    for (const [oldName, target] of Object.entries(map)) {
      if (!next.includes(oldName)) continue;
      if (target === null) {
        dropped.add(oldName);
        continue;
      }
      next = next.split(oldName).join(target);
    }

    for (const token of next.match(/\bvstack-[a-z0-9][a-z0-9-]*/g) ?? []) {
      if (!(token in map)) unmapped.add(token);
    }

    if (next !== original) {
      writeFileSync(file, next);
      changed.push(relative(packRoot, file));
    }
  }

  return { changed, unmapped: [...unmapped].sort(), dropped: [...dropped].sort() };
}

export function planDirRenames(root, map) {
  const packRoot = resolve(root);
  const skillsRoot = join(packRoot, "skills");
  const renames = [];
  const parked = [];
  const taken = new Set();

  for (const entry of readdirSync(skillsRoot).sort()) {
    if (!statSync(join(skillsRoot, entry)).isDirectory()) continue;
    const target = map[entry];
    if (target === undefined) continue;
    if (target === entry) continue;
    if (target === null) {
      parked.push(entry);
      continue;
    }
    if (taken.has(target) || existsSync(join(skillsRoot, target))) {
      parked.push(entry);
      continue;
    }
    taken.add(target);
    renames.push({ from: entry, to: target });
  }

  return { renames, parked };
}

export function applyDirRenames(root, plan) {
  const packRoot = resolve(root);
  const skillsRoot = join(packRoot, "skills");
  const legacyRoot = join(packRoot, "resources/legacy/skills");

  for (const { from, to } of plan.renames) {
    renameSync(join(skillsRoot, from), join(skillsRoot, to));
  }
  for (const name of plan.parked) {
    if (!existsSync(join(skillsRoot, name))) continue;
    const target = join(legacyRoot, name);
    if (existsSync(target)) continue;
    renameSync(join(skillsRoot, name), target);
  }
}

function collect(packRoot) {
  const files = [];
  for (const entry of CONTENT_ROOTS) {
    const full = join(packRoot, entry);
    if (!existsSync(full)) continue;
    if (SKIP.has(entry)) continue;
    if (statSync(full).isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files.filter((file) => TEXT.test(file) && !file.includes("/resources/legacy/"));
}

function walk(dir, out) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
  const root = resolve(args[0] ?? process.cwd());
  const map = JSON.parse(readFileSync(join(root, "tools/renames.json"), "utf-8"));

  if (process.argv.includes("--apply-dirs")) {
    const plan = planDirRenames(root, map);
    applyDirRenames(root, plan);
    console.log(`renamed ${plan.renames.length} directories, parked ${plan.parked.length}`);
    if (plan.parked.length > 0) console.log(`parked: ${plan.parked.join(", ")}`);
  } else {
    const result = rewriteNames(root, map);
    console.log(`rewrote ${result.changed.length} files`);
    if (result.unmapped.length > 0) console.log(`unmapped: ${result.unmapped.join(", ")}`);
    if (result.dropped.length > 0) console.log(`dropped names left for prose review: ${result.dropped.join(", ")}`);
  }
}
