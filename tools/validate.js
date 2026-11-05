#!/usr/bin/env node
/**
 * Pack validator. Exits 1 when any skill, playbook or resource breaks its
 * contract, or when a published count differs from what is on disk.
 */
import { resolve } from "node:path";
import { validatePack } from "./lib/validate-pack.js";

const root = resolve(process.argv[2] ?? process.cwd());
const report = validatePack(root);

for (const e of report.errors) console.error(`${e.code} ${e.path}: ${e.message}`);
for (const w of report.warnings) console.warn(`${w.code} ${w.path}: ${w.message}`);
console.log(
  `skills ${report.counts.skills}, errors ${report.errors.length}, warnings ${report.warnings.length}`,
);

if (report.errors.length > 0 || report.countsDrift.length > 0) {
  for (const drift of report.countsDrift) console.error(`COUNT_DRIFT ${drift}`);
  process.exit(1);
}

export { validatePack };
