import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { validateSkill } from "../tools/lib/validate-skill.js";
import { parseFrontMatter } from "../tools/lib/frontmatter.js";

const ROOT = resolve(import.meta.dirname, "..");
const PILOTS = ["route", "evidence", "verify"];
const read = (path) => readFileSync(join(ROOT, path), "utf-8");

test("pilot skills pass the full validator", () => {
  for (const name of PILOTS) {
    const { errors } = validateSkill(join(ROOT, "skills", name));
    assert.deepEqual(errors.map((e) => e.code), [], name);
  }
});

test("pilot descriptions name a moment and a near miss", () => {
  for (const name of PILOTS) {
    const { data } = parseFrontMatter(read(`skills/${name}/SKILL.md`));
    assert.ok(data.description.startsWith("Use when "), name);
    assert.ok(data.description.includes("; not for "), name);
    assert.ok(data.description.length <= 500, name);
  }
});

test("pilot bodies fit the budget and carry anti-rationalization rows", () => {
  for (const name of PILOTS) {
    const { body } = parseFrontMatter(read(`skills/${name}/SKILL.md`));
    assert.ok(body.split("\n").length <= 150, `${name} is over budget`);
    const table = body.split("## Rationalizations")[1].split("\n## ")[0];
    const rows = table
      .split("\n")
      .filter((line) => line.startsWith("| ") && !line.startsWith("| Excuse") && !/^\|\s*-+/.test(line));
    assert.ok(rows.length >= 4, `${name} has ${rows.length} rationalization rows`);
  }
});

test("long material is disclosed through references the body loads", () => {
  for (const name of PILOTS) {
    const dir = join(ROOT, "skills", name, "references");
    const files = existsSync(dir) ? readdirSync(dir) : [];
    assert.ok(files.length > 0, `${name} has no references/`);
    const body = read(`skills/${name}/SKILL.md`);
    for (const file of files) {
      assert.ok(body.includes(`references/${file}`), `${name} never loads references/${file}`);
    }
  }
});

test("trigger fixtures are hand-written, five positives and three near misses", () => {
  for (const name of PILOTS) {
    const fixture = JSON.parse(read(`evaluations/triggers/${name}.json`));
    assert.equal(fixture.positive.length, 5, name);
    assert.equal(fixture.negative.length, 3, name);
    assert.equal(fixture.expected.skill, name);
    for (const request of fixture.positive) {
      assert.ok(request.length > 40, `${name} positive is a label, not a request: ${request}`);
    }
    for (const request of fixture.negative) {
      assert.ok(request.length > 40, `${name} negative is a label, not a request: ${request}`);
    }
  }
});
