import { test } from "node:test";
import assert from "node:assert/strict";

test("tests run inside the container image", () => {
  assert.equal((process.env.VSTACK_TEST_ENV ?? "host").trim(), "docker");
});
