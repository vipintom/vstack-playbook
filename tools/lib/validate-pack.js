import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { validateSkill } from "./validate-skill.js";

const CONTENT_DIRS = ["skills", "playbooks", "principles", "roles", "rubrics", "templates"];
const PATH_PREFIX = /^(docs|skills|playbooks|principles|roles|rubrics|templates|resources|harnesses|evaluations|tools|schema|scripts)\/[^\s`)"']+/;
const REFERENCEABLE = ["rubrics", "templates"];

export function validatePack(packRoot) {
  const root = resolve(packRoot);
  const errors = [];
  const warnings = [];
  const countsDrift = [];

  const skillsRoot = join(root, "skills");
  const skillDirs = existsSync(skillsRoot)
    ? readdirSync(skillsRoot).filter((entry) => statSync(join(skillsRoot, entry)).isDirectory())
    : [];

  for (const dir of skillDirs.sort()) {
    const result = validateSkill(join(skillsRoot, dir), { skillsRoot });
    errors.push(...result.errors);
    warnings.push(...result.warnings);
    const evalPath = join(root, "evaluations/triggers", `${dir}.json`);
    if (!existsSync(evalPath)) {
      errors.push({
        code: "MISSING_EVAL",
        path: `skills/${dir}/SKILL.md`,
        message: `no trigger fixture at evaluations/triggers/${dir}.json`,
      });
    }
  }

  const contentFiles = collectContent(root);
  errors.push(...findDanglingPaths(root, contentFiles));
  errors.push(...findUnreferencedResources(root, contentFiles));

  const counts = {
    skills: skillDirs.length,
    playbooks: countFiles(join(root, "playbooks"), ".md"),
    principles: countFiles(join(root, "principles"), ".md", ["index.md"]),
    roles: countFiles(join(root, "roles"), ".md"),
    rubrics: countFiles(join(root, "rubrics"), ".md"),
    templates: countFiles(join(root, "templates"), ".md"),
  };

  const manifestPath = join(root, "manifest.json");
  if (existsSync(manifestPath)) {
    const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
    const published = manifest.counts ?? {};
    for (const [key, actual] of Object.entries(counts)) {
      if (published[key] !== undefined && published[key] !== actual) {
        countsDrift.push(`${key}: manifest says ${published[key]}, disk has ${actual}`);
      }
    }
  }

  return { errors, warnings, counts, countsDrift };
}

function findDanglingPaths(root, files) {
  const issues = [];
  for (const file of files) {
    const text = readFileSync(file, "utf-8");
    for (const token of backtickedAndLinked(text)) {
      if (!PATH_PREFIX.test(token)) continue;
      const clean = token.replace(/[#?].*$/, "").replace(/\/+$/, "");
      if (clean === "") continue;
      if (!existsSync(join(root, clean))) {
        issues.push({
          code: "DANGLING_PATH",
          path: rel(root, file),
          message: `references \`${clean}\`, which does not exist`,
        });
      }
    }
  }
  return issues;
}

function findUnreferencedResources(root, files) {
  const issues = [];
  const others = files.filter((file) => {
    const relPath = rel(root, file);
    return !REFERENCEABLE.some((dir) => relPath.startsWith(`${dir}/`));
  });
  const corpus = others.map((file) => readFileSync(file, "utf-8")).join("\n");

  for (const dir of REFERENCEABLE) {
    const full = join(root, dir);
    if (!existsSync(full)) continue;
    for (const entry of readdirSync(full).filter((file) => file.endsWith(".md"))) {
      const stem = basename(entry, ".md");
      if (corpus.includes(entry) || corpus.includes(`${dir}/${stem}`)) continue;
      issues.push({
        code: "UNREFERENCED_RESOURCE",
        path: `${dir}/${entry}`,
        message: "no skill or playbook references this file",
      });
    }
  }
  return issues;
}

function collectContent(root) {
  const files = [];
  for (const dir of CONTENT_DIRS) {
    const full = join(root, dir);
    if (!existsSync(full)) continue;
    walk(full, files);
  }
  return files.filter((file) => file.endsWith(".md"));
}

function walk(dir, out) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
}

function backtickedAndLinked(text) {
  const tokens = [];
  for (const match of text.matchAll(/`([^`\n]+)`/g)) tokens.push(match[1].trim());
  for (const match of text.matchAll(/\]\(([^)\s]+)\)/g)) tokens.push(match[1].trim());
  return tokens;
}

function rel(root, file) {
  return file.startsWith(`${root}/`) ? file.slice(root.length + 1) : file;
}

function countFiles(dir, extension, exclude = []) {
  if (!existsSync(dir)) return 0;
  return readdirSync(dir).filter((f) => f.endsWith(extension) && !exclude.includes(f)).length;
}
