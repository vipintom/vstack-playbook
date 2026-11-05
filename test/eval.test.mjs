import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { runTriggerEval } from "../tools/eval-triggers.js";
import { runPackEval } from "../tools/eval-pack.js";

const fixture = {
  verify: { positive: ["run every gate", "check the branch"], negative: ["record one claim"], expected: { skill: "verify" } },
};

test("trigger runner reports accuracy against a stub classifier", () => {
  const r = runTriggerEval({
    fixtures: fixture,
    classify: (p) => (p === "record one claim" ? "evidence" : "verify"),
  });
  assert.equal(r.accuracy, 1);
  assert.equal(r.failures.length, 0);
});

test("trigger runner names every miss", () => {
  const r = runTriggerEval({
    fixtures: fixture,
    classify: (p) => (p === "record one claim" ? "verify" : "debug"),
  });
  assert.ok(r.accuracy < 1);
  assert.equal(r.failures.length, 3);
  assert.equal(r.failures[0].expected, "verify");
  assert.equal(r.failures[0].got, "debug");
});

function minimalPack() {
  const root = mkdtempSync(join(tmpdir(), "vstack-pack-"));
  mkdirSync(join(root, "skills", "verify"), { recursive: true });
  writeFileSync(join(root, "skills", "verify", "SKILL.md"), "---\nname: verify\n---\n");
  mkdirSync(join(root, "evaluations", "triggers"), { recursive: true });
  writeFileSync(join(root, "evaluations", "triggers", "verify.json"), "{}");
  mkdirSync(join(root, "playbooks"), { recursive: true });
  writeFileSync(join(root, "manifest.json"), JSON.stringify({
    schemaVersion: 2,
    counts: { skills: 1, playbooks: 0 },
    skills: [{ name: "verify", path: "skills/verify/SKILL.md" }],
    playbooks: [],
    resources: { rubrics: [], templates: [] },
  }));
  return root;
}

test("pack runner passes on a consistent tree", () => {
  const root = minimalPack();
  assert.deepEqual(runPackEval(root), { ok: true, failures: [] });
  rmSync(root, { recursive: true, force: true });
});

test("pack runner fails when a manifest path is missing", () => {
  const root = minimalPack();
  rmSync(join(root, "skills", "verify", "SKILL.md"));
  const r = runPackEval(root);
  assert.equal(r.ok, false);
  assert.match(r.failures.join("\n"), /verify/);
  rmSync(root, { recursive: true, force: true });
});

test("pack runner fails when counts drift from disk", () => {
  const root = minimalPack();
  writeFileSync(join(root, "manifest.json"), JSON.stringify({
    schemaVersion: 2, counts: { skills: 5, playbooks: 0 },
    skills: [{ name: "verify", path: "skills/verify/SKILL.md" }], playbooks: [],
    resources: { rubrics: [], templates: [] },
  }));
  const r = runPackEval(root);
  assert.equal(r.ok, false);
  assert.match(r.failures.join("\n"), /skills/);
  rmSync(root, { recursive: true, force: true });
});
