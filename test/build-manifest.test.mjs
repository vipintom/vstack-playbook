import { test } from "node:test";
import assert from "node:assert/strict";
import { cpSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { buildManifest } from "../tools/build-manifest.js";

const ROOT = process.cwd();
const STACK = [
  "typescript",
  "api-design",
  "frontend-design",
  "browser-testing",
  "fastapi",
  "docker",
  "makefile",
  "gitignore",
  "ci",
  "mcp-server",
  "technical-writing",
];

test("manifest counts equal what is on disk", () => {
  const m = buildManifest(ROOT);
  assert.equal(m.counts.skills, readdirSync(join(ROOT, "skills")).length);
  assert.equal(m.counts.playbooks, readdirSync(join(ROOT, "playbooks")).filter((f) => f.endsWith(".md")).length);
});

test("manifest is deterministic", () => {
  assert.deepEqual(buildManifest(ROOT), buildManifest(ROOT));
});

test("content hash changes when a skill body changes", () => {
  const copy = mkdtempSync(join(tmpdir(), "vstack-manifest-"));
  try {
    cpSync(join(ROOT, "skills"), join(copy, "skills"), { recursive: true });
    cpSync(join(ROOT, "playbooks"), join(copy, "playbooks"), { recursive: true });
    cpSync(join(ROOT, "principles"), join(copy, "principles"), { recursive: true });
    cpSync(join(ROOT, "roles"), join(copy, "roles"), { recursive: true });
    cpSync(join(ROOT, "rubrics"), join(copy, "rubrics"), { recursive: true });
    cpSync(join(ROOT, "templates"), join(copy, "templates"), { recursive: true });
    const before = buildManifest(copy).contentHash;
    const first = readdirSync(join(copy, "skills")).sort()[0];
    writeFileSync(join(copy, "skills", first, "SKILL.md"), "\nchanged\n", { flag: "a" });
    assert.notEqual(buildManifest(copy).contentHash, before);
  } finally {
    rmSync(copy, { recursive: true, force: true });
  }
});

test("profiles count core plus stack", () => {
  const m = buildManifest(ROOT);
  assert.equal(m.profiles.full, m.profiles.core + m.profiles.stack);
  assert.deepEqual(
    m.skills.filter((s) => s.tier === "stack").map((s) => s.name),
    m.profiles.lists.stack,
  );
  assert.equal(m.profiles.full, m.skills.length);
});

test("every skill in the manifest carries its front-matter fields", () => {
  const m = buildManifest(ROOT);
  for (const skill of m.skills) {
    assert.ok(skill.name, "name");
    assert.ok(skill.path.endsWith("/SKILL.md"), skill.path);
    assert.ok("tier" in skill && "rigor" in skill && "status" in skill, skill.name);
  }
});

test("published manifest file matches the generator", () => {
  const onDisk = JSON.parse(readFileSync(join(ROOT, "manifest.json"), "utf-8"));
  assert.deepEqual(onDisk, buildManifest(ROOT));
});
