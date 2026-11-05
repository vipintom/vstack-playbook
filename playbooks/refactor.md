# refactor

**Applies when:** structure changes and behaviour must not.
**Not for:** any behaviour change (`build-feature` or `fix-bug`).
**Budget:** 5 skill loads.

## Steps

| # | Skill | Artifact |
|---|---|---|
| 1 | `coverage` | characterisation tests where coverage is thin |
| 2 | `verify` | baseline gate table on the frozen tree |
| 3 | `refactor` | one mechanical move per commit |
| 4 | `verify` | final gate table, compared to baseline |
| 5 | `review` | findings on the surface and the commit series |

## Exit criteria

- Baseline and final gate tables match; no test was deleted or skipped.
- The public surface diff is empty or explained.
- Each commit is one mechanical move and green on its own.

## Without subagents

Do the moves serially; the suite is the second pair of eyes. If the diff grows
past review size, split it into two deliveries rather than pushing on.
