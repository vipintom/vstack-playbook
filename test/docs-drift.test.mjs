import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("regenerating docs produces no diff", () => {
  execFileSync("node", ["tools/gen-docs.js"], { stdio: "pipe" });
  execFileSync("git", ["diff", "--exit-code", "--", "docs", "manifest.json"], { stdio: "pipe" });
});
