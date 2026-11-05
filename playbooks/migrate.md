# migrate

**Applies when:** stored data, a public contract or a running system changes shape.
**Not for:** fresh implementation with no data (`build-feature`); same-shape moves (`refactor`).
**Budget:** 6 skill loads.

## Steps

| # | Skill | Artifact |
|---|---|---|
| 1 | `impact` | consumers of the old shape, stored data inventory |
| 2 | `migration` | expand/contract step table with reversal per step |
| 3 | `verify` | rollback rehearsal before the first production step |
| 4 | `migration` | expand, backfill, dual-read, cut over, remove |
| 5 | `evidence` | counts, comparisons and digests per step |
| 6 | `decisions` | compatibility window and its end date |

## Exit criteria

- Each step is safe to stop at, and its reversal is recorded.
- The old path is removed only after the window closes.
- Backfill is idempotent and resumable, proven by a second run.

## Without subagents

Run steps one at a time with a checkpoint after each. The window between
dual-write and cutover is spent observing, not building the next step.
