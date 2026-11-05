import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { CONTENT_ROOTS, rewriteNames } from "../tools/rewrite-names.js";

const ROOT = process.cwd();
const RENAMES = JSON.parse(readFileSync(join(ROOT, "tools/renames.json"), "utf-8"));

function textFiles(root) {
  const out = [];
  for (const entry of CONTENT_ROOTS) {
    const full = join(root, entry);
    let stat;
    try {
      stat = statSync(full);
    } catch {
      continue;
    }
    if (stat.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out.filter((f) => /\.(md|json|ya?ml|hbs)$/.test(f) && !f.includes("/resources/legacy/"));
}

function walk(dir, out) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
}

test("no content file still uses a 0.1.0 skill name", () => {
  const hits = [];
  for (const file of textFiles(ROOT)) {
    const text = readFileSync(file, "utf-8");
    for (const oldName of Object.keys(RENAMES)) {
      if (oldName === RENAMES[oldName]) continue;
      if (text.includes(oldName)) hits.push(`${file}: ${oldName}`);
    }
  }
  assert.deepEqual(hits, []);
});

test("rewrite replaces old names and reports names it cannot map", () => {
  const dir = mkdtempSync(join(tmpdir(), "vstack-renames-"));
  try {
    mkdirSync(join(dir, "skills/foo"), { recursive: true });
    writeFileSync(join(dir, "skills/foo/SKILL.md"), "Use `vstack-tdd`, then `vstack-mystery`.\n");
    const result = rewriteNames(dir, RENAMES);
    const text = readFileSync(join(dir, "skills/foo/SKILL.md"), "utf-8");
    assert.match(text, /`tdd`/);
    assert.deepEqual(result.unmapped, ["vstack-mystery"]);
    assert.deepEqual(result.changed, ["skills/foo/SKILL.md"]);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("rewrite is idempotent", () => {
  const dir = mkdtempSync(join(tmpdir(), "vstack-renames-"));
  try {
    mkdirSync(join(dir, "skills/foo"), { recursive: true });
    writeFileSync(join(dir, "skills/foo/SKILL.md"), "Invoke `vstack-verify-loop` now.\n");
    rewriteNames(dir, RENAMES);
    const second = rewriteNames(dir, RENAMES);
    assert.deepEqual(second.changed, []);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
