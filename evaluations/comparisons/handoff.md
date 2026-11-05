# handoff

| Counterpart | Source | What it does better |
|---|---|---|
| executing-plans | superpowers: | plan file lets a fresh session continue |
| context-reset | pstack: | explicit state handoff for interruptions |

## What this keeps

vstack requires verified-at, next action and rollback note.

## Decision

Take: Adopt the plan-file pointer; keep the rollback note.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
