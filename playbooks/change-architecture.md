# change-architecture

**Applies when:** a boundary, contract or ownership moves.
**Not for:** local restructuring (`refactor`); stored data changes (`migrate`).
**Budget:** 8 skill loads.

## Steps

| # | Skill | Artifact |
|---|---|---|
| 1 | `shape` | outcome, constraints, what must not move |
| 2 | `design` | component map, contracts, rejected alternative |
| 3 | `impact` | callers, consumers, irreversible parts |
| 4 | `blueprint` | files, signatures, seams, invariants |
| 5 | `migration` | staged rollout when callers cannot move at once |
| 6 | `red-team` | attacks on the new boundary |
| 7 | `verify` | gates, including the migrated callers |
| 8 | `decisions` | the record and what it now constrains |

## Exit criteria

- Every caller is migrated or a compatibility window is recorded with a date.
- The old path is deleted or has a dated removal task.
- The decision record names the rejected alternative.

## Without subagents

Run the design pass before any code. The red-team step is a deliberate second
pass over the same design; schedule it after a break so it is not a reread.
