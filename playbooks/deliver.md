# deliver

**Applies when:** work is complete and must be proven and shipped.
**Not for:** unfinished work; discovery (`understand`); a release with no change.
**Budget:** 6 skill loads.

## Steps

| # | Skill | Artifact |
|---|---|---|
| 1 | `verify` | gate table on the frozen commit |
| 2 | `review` | findings with severity and locations |
| 3 | `ready` | verdict: proven, unproven, open findings |
| 4 | `ship` | artefact hash, command log, release note |
| 5 | `watch-pr` | pipeline or rollout outcome |
| 6 | `report` | delivery record and handoff pointers |

## Exit criteria

- The gate table belongs to the shipped artefact, not an earlier tree.
- Every published claim has an evidence line.
- The delivery record names what is still open.

## Without subagents

Verify, review and ship serially. The reviewer role is played by a second pass
over the diff with the done predicate in hand; record it as self-review.
