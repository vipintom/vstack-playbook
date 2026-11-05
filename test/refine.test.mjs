import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { parseFrontMatter } from "../tools/lib/frontmatter.js";

const ROOT = resolve(import.meta.dirname, "..");
const skills = readdirSync(join(ROOT, "skills"));
const body = (name) => readFileSync(join(ROOT, "skills", name, "SKILL.md"), "utf-8");

test("every skill keeps a file fallback in its Tracking section", () => {
  const missing = [];
  for (const name of skills) {
    const text = body(name);
    const section = text.split("## Tracking")[1]?.split("\n## ")[0] ?? "";
    if (!/\.vstack\/|docs\/|decisions\/|AGENTS\.md|delivery\s+(record|note)/.test(section)) missing.push(name);
  }
  assert.deepEqual(missing, []);
});

test("every declared capability is used by the procedure", () => {
  const missing = [];
  for (const name of skills) {
    const { data } = parseFrontMatter(body(name));
    for (const capability of data.harness) {
      if (!new RegExp(capability, "i").test(body(name))) missing.push(`${name}: ${capability}`);
    }
  }
  assert.deepEqual(missing, []);
});

test("no skill writes through the read-only panel", () => {
  for (const name of skills) {
    assert.doesNotMatch(body(name), /write (to|through) the panel|update the panel/i, name);
  }
});

test("skills that declare gate or evidence name the adapter and the command", () => {
  for (const name of skills) {
    const { data } = parseFrontMatter(body(name));
    const text = body(name);
    if (data.harness.includes("gate")) assert.match(text, /vstack_gate|gate run/, `${name}: gate`);
    if (data.harness.includes("evidence")) assert.match(text, /vstack_evidence|evidence\.jsonl/, `${name}: evidence`);
  }
});
