# unslop

| Counterpart | Source | What it does better |
|---|---|---|
| code-review | superpowers: | flags unnecessary abstraction |
| test-driven-development | superpowers: | deletion is safe when tests are green |

## What this keeps

vstack requires a negative diff and a shrinking surface.

## Decision

Take: Adopt the third-occurrence rule.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
