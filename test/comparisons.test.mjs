import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const skills = readdirSync(join(ROOT, "skills"));

test("every skill has a comparison record with sources and a decision", () => {
  const errors = [];
  for (const name of skills) {
    const file = join(ROOT, "evaluations/comparisons", `${name}.md`);
    if (!existsSync(file)) { errors.push(`${name}: no record`); continue; }
    const text = readFileSync(file, "utf-8");
    const sources = (text.match(/^\| [^|]+ \| (superpowers|pstack|anthropics-skills|mattpocock-skills|addyosmani-agent-skills)/gm) ?? []).length;
    if (sources < 2) errors.push(`${name}: ${sources} sources`);
    if (!/^## Decision$/m.test(text)) errors.push(`${name}: no Decision section`);
    if (!/^Take: /m.test(text)) errors.push(`${name}: Decision names no change`);
  }
  assert.deepEqual(errors, []);
});

test("every comparison source is pinned and licensed", () => {
  const index = JSON.parse(readFileSync(join(ROOT, "evaluations/comparisons/index.json"), "utf-8"));
  assert.ok(index.length >= 5);
  for (const source of index) {
    assert.match(source.commit, /^[a-f0-9]{7,40}$/);
    assert.ok(source.license && source.name && source.url, source.name);
  }
});
