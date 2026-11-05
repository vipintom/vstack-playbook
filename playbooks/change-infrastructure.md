# change-infrastructure

**Applies when:** deploys, CI, containers, secrets or cloud resources change.
**Not for:** application code (`build-feature`); a one-off manual server fix.
**Budget:** 6 skill loads.

## Steps

| # | Skill | Artifact |
|---|---|---|
| 1 | `shape` | environment, blast radius, rollback requirement |
| 2 | `design` | the change and its rejected alternative |
| 3 | `migration` | staged apply when state or traffic is involved |
| 4 | `verify` | build from the source of truth, smoke test, rollback rehearsal |
| 5 | `ship` | applied commit or image digest, with the command log |
| 6 | `watch-pr` | rollout outcome or the failed step |

## Exit criteria

- The change is applied from a reviewed source of truth, never by hand.
- Rollback is rehearsed once and its command is recorded.
- Secrets are referenced, never printed or committed.

## Without subagents

Apply and observe in one session with a terminal open on the health signals.
Never apply a second change while the first is unobserved.
