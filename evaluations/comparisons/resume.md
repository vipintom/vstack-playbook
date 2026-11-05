# resume

| Counterpart | Source | What it does better |
|---|---|---|
| executing-plans | superpowers: | resumes from the written plan |
| session-pickup | pstack: | validates the checkpoint before continuing |

## What this keeps

vstack reconciles record against the tree.

## Decision

Take: Keep; add the smallest-gate re-run.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
