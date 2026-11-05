#!/usr/bin/env node
/**
 * Pack integrity evaluation.
 *
 * Checks the generated manifest against the tree it describes: every listed
 * path exists, every count matches, every skill carries its trigger fixture.
 * The mutation test in test/eval.test.mjs proves this runner can fail.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const countSkillDirs = (dir) =>
  existsSync(dir)
    ? readdirSync(dir).filter((entry) => existsSync(join(dir, entry, "SKILL.md"))).length
    : 0;

export function runPackEval(root) {
  const failures = [];
  const manifestPath = join(root, "manifest.json");
  if (!existsSync(manifestPath)) return { ok: false, failures: ["manifest.json is missing"] };

  const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
  const skills = manifest.skills ?? [];
  const playbooks = manifest.playbooks ?? [];

  for (const skill of skills) {
    const file = skill.path ?? `skills/${skill.name}/SKILL.md`;
    if (!existsSync(join(root, file))) failures.push(`missing skill file ${file}`);
    if (!existsSync(join(root, "evaluations/triggers", `${skill.name}.json`))) {
      failures.push(`missing trigger fixture for ${skill.name}`);
    }
  }
  for (const playbook of playbooks) {
    const file = playbook.path ?? `playbooks/${playbook.name}.md`;
    if (!existsSync(join(root, file))) failures.push(`missing playbook ${file}`);
  }
  for (const [kind, files] of Object.entries(manifest.resources ?? {})) {
    for (const entry of files) {
      const name = typeof entry === "string" ? entry : entry.name;
      const file = `${kind}/${name}${name.endsWith(".md") || name.endsWith(".hbs") ? "" : ".md"}`;
      if (!existsSync(join(root, file))) failures.push(`missing resource ${file}`);
    }
  }

  const onDisk = { skills: countSkillDirs(join(root, "skills")) };
  const declared = manifest.counts ?? {};
  if (declared.skills !== undefined && declared.skills !== skills.length) {
    failures.push(`skills count ${declared.skills} does not match manifest list ${skills.length}`);
  }
  if (declared.skills !== undefined && declared.skills !== onDisk.skills) {
    failures.push(`skills count ${declared.skills} does not match ${onDisk.skills} on disk`);
  }

  return { ok: failures.length === 0, failures };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const result = runPackEval(resolve(process.argv[2] ?? process.cwd()));
  for (const f of result.failures) console.error(f);
  console.log(result.ok ? "pack integrity: ok" : `pack integrity: ${result.failures.length} failures`);
  if (!result.ok) process.exit(1);
}
