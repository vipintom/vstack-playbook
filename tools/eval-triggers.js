#!/usr/bin/env node
/**
 * Skill-trigger evaluation.
 *
 * The classifier is injected: CI passes one backed by the harness under test,
 * tests pass a stub. A runner that invents its own classifier measures itself.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

export function runTriggerEval({ fixtures, classify }) {
  const failures = [];
  let total = 0;
  let hits = 0;

  for (const [file, fixture] of Object.entries(fixtures)) {
    const expected = fixture.expected?.skill ?? file;
    for (const prompt of fixture.positive ?? []) {
      total += 1;
      const got = classify(prompt);
      if (got === expected) hits += 1;
      else failures.push({ skill: expected, kind: "positive", prompt, expected, got });
    }
    for (const prompt of fixture.negative ?? []) {
      total += 1;
      const got = classify(prompt);
      if (got !== expected) hits += 1;
      else failures.push({ skill: expected, kind: "negative", prompt, expected: `<not ${expected}>`, got });
    }
  }

  return { accuracy: total === 0 ? 1 : hits / total, hits, total, failures };
}

export function loadFixtures(root) {
  const dir = join(root, "evaluations/triggers");
  const fixtures = {};
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".json"))) {
    fixtures[file.replace(/\.json$/, "")] = JSON.parse(readFileSync(join(dir, file), "utf-8"));
  }
  return fixtures;
}

/**
 * Lexical smoke classifier. It is NOT an accuracy measurement: it exists so the
 * runner can be exercised offline. CI supplies a real classifier.
 */
export function stubClassifier(prompt) {
  const text = prompt.toLowerCase();
  const rules = [
    ["verify", /\b(run|every|gate|independently|re-?verify|table)\b/],
    ["evidence", /\b(record|prove|digest|claim|capture|auditable)\b/],
    ["tdd", /\b(failing test|test first|red)\b/],
    ["debug", /\b(cause|reproduce|intermittent|bisect)\b/],
    ["design", /\b(boundar|interface|shape|decide the)\b/],
    ["route", /\b(where do we begin|approach|playbook|tier)\b/],
    ["review", /\b(findings|review|maintain it)\b/],
    ["migration", /\b(migrat|backfill|cutover|rollback)\b/],
    ["performance", /\b(p95|benchmark|slow|latency)\b/],
    ["code-tour", /\b(trace|walk me through|cite)\b/],
  ];
  for (const [skill, re] of rules) if (re.test(text)) return skill;
  return "none";
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const root = resolve(process.argv[2] ?? process.cwd());
  const fixtures = loadFixtures(root);
  const result = runTriggerEval({ fixtures, classify: stubClassifier });
  console.log(`trigger smoke (stub classifier): ${(result.accuracy * 100).toFixed(1)}% on ${result.total} requests`);
  for (const f of result.failures.slice(0, 20)) console.log(`  ${f.skill}/${f.kind}: got ${f.got} — ${f.prompt}`);
  if (process.env.VSTACK_REQUIRE_ACCURACY === "1" && result.accuracy < 0.9) process.exit(1);
}
