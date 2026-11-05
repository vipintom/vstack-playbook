# fix-bug

**Applies when:** a defect reproduces and the expected behaviour is known.
**Not for:** unexplained behaviour (`understand` first); a feature gap (`build-feature`).
**Budget:** 4 skill loads.

## Steps

| # | Skill | Artifact |
|---|---|---|
| 1 | `debug` | repro command, cause statement, ruled-out causes |
| 2 | `tdd` | failing test from the repro, then the fix |
| 3 | `verify` | gates on the frozen tree, including the repro |
| 4 | `evidence` | cause and proof line for the commit and delivery |

## Exit criteria

- A test fails on the previous commit and passes on the fix.
- The commit message names the cause, not the symptom.
- The repro command from step 1 exits 0.

## Without subagents

Debug and fix in one context, but run the repro from a clean checkout before
declaring the cause. A fix that only works in the working tree is not a fix.
