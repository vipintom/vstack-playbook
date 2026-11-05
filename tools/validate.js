#!/usr/bin/env node
/**
 * Pack validator. Exits 1 when any skill, playbook or resource breaks its
 * contract, or when a published count differs from what is on disk.
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { validateSkill } from "./lib/validate-skill.js";

const root = resolve(process.argv[2] ?? process.cwd());

const report = validatePack(root);
for (const e of report.errors) console.error(`${e.code} ${e.path}: ${e.message}`);
for (const w of report.warnings) console.warn(`${w.code} ${w.path}: ${w.message}`);
console.log(
  `skills ${report.counts.skills}, errors ${report.errors.length}, warnings ${report.warnings.length}`,
);
if (report.errors.length > 0 || report.countsDrift.length > 0) {
  for (const drift of report.countsDrift) console.error(`COUNT_DRIFT ${drift}`);
  process.exit(1);
}

export function validatePack(packRoot) {
  const errors = [];
  const warnings = [];
  const countsDrift = [];

  const skillsRoot = join(packRoot, "skills");
  const skillDirs = existsSync(skillsRoot)
    ? readdirSync(skillsRoot).filter((entry) => statSync(join(skillsRoot, entry)).isDirectory())
    : [];

  for (const dir of skillDirs.sort()) {
    const result = validateSkill(join(skillsRoot, dir), { skillsRoot });
    errors.push(...result.errors);
    warnings.push(...result.warnings);
  }

  const counts = {
    skills: skillDirs.length,
    playbooks: countFiles(join(packRoot, "playbooks"), ".md"),
    principles: countFiles(join(packRoot, "principles"), ".md", ["index.md"]),
    roles: countFiles(join(packRoot, "roles"), ".md"),
    rubrics: countFiles(join(packRoot, "rubrics"), ".md"),
    templates: countFiles(join(packRoot, "templates"), ".md"),
  };

  const manifestPath = join(packRoot, "manifest.json");
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

function countFiles(dir, extension, exclude = []) {
  if (!existsSync(dir)) return 0;
  return readdirSync(dir).filter((f) => f.endsWith(extension) && !exclude.includes(f)).length;
}
