# ci

| Counterpart | Source | What it does better |
|---|---|---|
| dispatching-parallel-agents | superpowers: | bounded parallel jobs |
| no direct counterpart | addyosmani-agent-skills: | CI checklists |

## What this keeps

vstack adds honest skipped-job handling.

## Decision

Take: Keep; add deliberate-failure proof.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
