import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { validateSkill } from "../tools/lib/validate-skill.js";
import { parseFrontMatter } from "../tools/lib/frontmatter.js";

const ROOT = resolve(import.meta.dirname, "..");
const capabilities = JSON.parse(readFileSync(join(ROOT, "schema/harness-capabilities.json"), "utf-8")).capabilities;

test("a skill may only declare capabilities that exist", () => {
  const r = validateSkill(join(ROOT, "test/fixtures/skills/invalid/capability"));
  assert.ok(r.errors.some((e) => e.code === "UNKNOWN_CAPABILITY"));
});

test("every capability resolves to a file fallback", () => {
  for (const [name, spec] of Object.entries(capabilities)) {
    assert.ok(spec.fallback, `${name} has no fallback`);
    assert.ok(spec.purpose, `${name} has no purpose`);
  }
});

test("every shipped skill declares harness affordances", () => {
  for (const name of readdirSync(join(ROOT, "skills"))) {
    const { data } = parseFrontMatter(readFileSync(join(ROOT, "skills", name, "SKILL.md"), "utf-8"));
    assert.ok(Array.isArray(data.harness) && data.harness.length > 0, `${name} declares no harness`);
    for (const capability of data.harness) {
      assert.ok(capabilities[capability], `${name} declares unknown capability ${capability}`);
    }
  }
});

test("the harness map resolves every capability to every rung", () => {
  const map = readFileSync(join(ROOT, "resources/harness-map.md"), "utf-8");
  for (const name of Object.keys(capabilities)) {
    assert.ok(map.includes(`\`${name}\``), `${name} is missing from the map`);
  }
  assert.match(map, /panel is read-only/i);
});
