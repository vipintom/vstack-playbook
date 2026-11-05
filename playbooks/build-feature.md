# build-feature

**Applies when:** new behaviour with acceptance criteria is requested.
**Not for:** changing existing behaviour (`fix-bug`); moving a boundary (`change-architecture`).
**Budget:** 7 skill loads.

## Steps

| # | Skill | Artifact |
|---|---|---|
| 1 | `shape` | outcome, done-when, non-goals, unknowns |
| 2 | `plan` | task list, one artifact and one check each |
| 3 | `design` | boundaries and contracts when the change crosses a seam |
| 4 | `tdd` | failing test per behaviour, then the smallest implementation |
| 5 | `verify` | gate table on the frozen tree |
| 6 | `review` | findings with locations and consequences |
| 7 | `ready` | verdict with proven, unproven and open findings |

## Exit criteria

- Acceptance criteria each map to a test that fails without the change.
- The suite is green on the delivered commit; the gate table is recorded.
- Review findings are resolved or accepted with a name.

## Without subagents

Run steps in order in one context. The independent review is replaced by
re-reading the diff against the done predicate; record that it was self-review,
not independent verification.
