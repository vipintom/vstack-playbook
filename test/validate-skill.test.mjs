import { test } from "node:test";
import assert from "node:assert/strict";
import { validateSkill } from "../tools/lib/validate-skill.js";

const FIX = "test/fixtures/skills";

test("rejects a description that does not start with Use when", () => {
  const r = validateSkill(`${FIX}/invalid/description`);
  assert.ok(r.errors.some((e) => e.code === "DESCRIPTION_TRIGGER"));
});

test("rejects an unknown pairs-with target", () => {
  const r = validateSkill(`${FIX}/invalid/pairs-with`);
  assert.ok(r.errors.some((e) => e.code === "UNKNOWN_SKILL_REF"));
});

test("rejects a missing required section", () => {
  const r = validateSkill(`${FIX}/invalid/sections`);
  assert.ok(r.errors.some((e) => e.code === "MISSING_SECTION"));
});

test("rejects a body over the line budget", () => {
  const r = validateSkill(`${FIX}/invalid/too-long`);
  assert.ok(r.errors.some((e) => e.code === "BODY_TOO_LONG"));
});

test("rejects a skill that does not say how to track its work", () => {
  const r = validateSkill(`${FIX}/invalid/tracking`);
  assert.ok(r.errors.some((e) => e.code === "MISSING_SECTION" && /Tracking/.test(e.message)));
});

test("accepts the valid fixture", () => {
  assert.deepEqual(validateSkill(`${FIX}/valid/verify`).errors, []);
});
