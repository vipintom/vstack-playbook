# watch-pr

| Counterpart | Source | What it does better |
|---|---|---|
| dispatching-parallel-agents | superpowers: | bounded parallel observation |
| verification-before-completion | superpowers: | reports only verified state |

## What this keeps

vstack adds failure classification and flake rate.

## Decision

Take: Keep; add a deadline to every watch.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
