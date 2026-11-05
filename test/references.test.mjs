import { test } from "node:test";
import assert from "node:assert/strict";
import { validatePack } from "../tools/lib/validate-pack.js";

const ROOT = process.cwd();
const report = validatePack(ROOT);
const codes = (code) => report.errors.filter((e) => e.code === code);

test("no content references a path that does not exist", () => {
  assert.deepEqual(codes("DANGLING_PATH"), []);
});

test("every rubric and template is referenced by a skill or playbook", () => {
  assert.deepEqual(codes("UNREFERENCED_RESOURCE"), []);
});

test("every skill ships a trigger fixture", () => {
  assert.deepEqual(codes("MISSING_EVAL"), []);
});
