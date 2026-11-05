import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { validateSkill } from "../tools/lib/validate-skill.js";
import { parseFrontMatter } from "../tools/lib/frontmatter.js";

const ROOT = resolve(import.meta.dirname, "..");

export function assertStandard(names) {
  for (const name of names) {
    const { errors } = validateSkill(join(ROOT, "skills", name));
    assert.deepEqual(errors.map((e) => e.code), [], name);

    const { data, body } = parseFrontMatter(readFileSync(join(ROOT, "skills", name, "SKILL.md"), "utf-8"));
    assert.ok(data.description.startsWith("Use when "), `${name} description is not a trigger`);
    assert.ok(data.description.includes("; not for "), `${name} names no near miss`);
    assert.ok(data.description.length <= 500, `${name} description is too long`);
    assert.ok(body.split("\n").length <= 150, `${name} is over budget`);

    const table = body.split("## Rationalizations")[1].split("\n## ")[0];
    const rows = table
      .split("\n")
      .filter((line) => line.startsWith("| ") && !line.startsWith("| Excuse") && !/^\|\s*-+/.test(line));
    assert.ok(rows.length >= 4, `${name} has ${rows.length} rationalization rows`);
    assert.match(body, /resources\/tracking\.md/, `${name} does not point at the tracking ladder`);
  }
}

test("entry and frame tiers meet the standard", () => {
  assertStandard(["route", "help", "principles", "shape", "sharpen", "plan", "figure-it-out", "code-tour", "rationale", "prototype"]);
});

const DESIGN = ["design", "blueprint", "impact", "red-team", "rubrics", "audit", "performance", "forensics", "migration"];
const BUILD = ["tdd", "debug", "refactor", "unstick", "evidence", "verify", "coverage", "verify-setup", "verify-maintain", "visual-parity"];

test("design tier meets the standard", () => assertStandard(DESIGN));
test("build tier meets the standard", () => assertStandard(BUILD));
