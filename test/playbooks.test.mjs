import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const EXPECTED = [
  "understand", "spike", "build-feature", "fix-bug", "refactor",
  "change-architecture", "change-infrastructure", "improve-performance",
  "migrate", "prove-ui", "deliver", "write-docs", "maintain-playbook",
];
const skills = new Set(readdirSync(join(ROOT, "skills")));

test("thirteen playbooks exist, named for situations", () => {
  const found = readdirSync(join(ROOT, "playbooks")).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
  assert.deepEqual(found.sort(), [...EXPECTED].sort());
});

test("every playbook declares applicability, budget, steps and exits", () => {
  for (const name of EXPECTED) {
    const text = readFileSync(join(ROOT, "playbooks", `${name}.md`), "utf-8");
    for (const required of ["**Applies when:**", "**Not for:**", "**Budget:**", "## Steps", "## Exit criteria", "## Without subagents"]) {
      assert.ok(text.includes(required), `${name} is missing ${required}`);
    }
    const budget = Number(text.match(/\*\*Budget:\*\* (\d+)/)?.[1]);
    assert.ok(budget >= 3 && budget <= 8, `${name} budget is not a real limit`);
  }
});

test("every skill a playbook names exists", () => {
  for (const name of EXPECTED) {
    const text = readFileSync(join(ROOT, "playbooks", `${name}.md`), "utf-8");
    for (const match of text.matchAll(/`([a-z][a-z0-9-]+)`/g)) {
      const token = match[1];
      if (EXPECTED.includes(token) || token.includes("/") || token.length < 3) continue;
      assert.ok(skills.has(token), `${name} names unknown skill ${token}`);
    }
  }
});

test("each playbook declares enough capacity for its steps", () => {
  for (const name of EXPECTED) {
    const text = readFileSync(join(ROOT, "playbooks", `${name}.md`), "utf-8");
    const budget = Number(text.match(/\*\*Budget:\*\* (\d+)/)?.[1]);
    const rows = text.split("## Steps")[1].split("## Exit criteria")[0].split("\n").filter((l) => /^\| \d+ \|/.test(l));
    assert.ok(rows.length <= budget, `${name} lists ${rows.length} steps for a budget of ${budget}`);
    assert.ok(rows.length > 0, `${name} has no steps`);
  }
});
