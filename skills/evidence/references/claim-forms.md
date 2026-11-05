# Claim forms

A claim is falsifiable when a stranger can run the check without asking a
question. Rewrite the left column until it reads like the right one.

| Unfalsifiable | Falsifiable |
|---|---|
| "the bug is fixed" | "issue #412's repro exits 0; before the change it exited 1" |
| "performance improved" | "p95 on the same fixture fell from 480 ms to 210 ms, same command both runs" |
| "tests pass" | "`pnpm test` exits 0 on commit abc1234, 214 passed, 0 failed" |
| "docs are correct" | "every command in README runs from a clean container" |
| "no regressions" | "the previous suite's 214 tests still pass; no test was deleted or skipped" |
| "it is secure" | "the secret is not in `git log -p`; the endpoint returns 401 without a token" |
| "the migration is safe" | "restore from the pre-migration dump succeeds and the app starts on the restored schema" |
| "the UI is fixed" | "screenshot at 390×844 shows the button inside the viewport" |

## Patterns that carry

- **Before/after pair.** One command, run twice, two outputs. The diff is the
  proof.
- **Negative control.** Show the check fails without the change. A test that
  cannot fail proves nothing.
- **Count, not adjective.** "0/50 runs", "214 passed", "3 requests".
- **Scoped environment.** Name the image, commit, branch or viewport. A claim
  inherits the scope of where it was checked.

## Thresholds

Decide the number before running. After seeing 47/50 you will want the bar at
45; that is how a claim becomes a story. Write `done-when: 50/50` first.

## Digests

```bash
cmd > run.log 2>&1; echo "exit $?" >> run.log
sha256sum run.log
```

Feed the digest and the exit code into the evidence line. If a later run
differs, the digest is what tells you whether the tree changed or the answer
did.
