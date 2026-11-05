# coverage

| Counterpart | Source | What it does better |
|---|---|---|
| test-driven-development | superpowers: | tests must be able to fail |
| code-review | superpowers: | looks for untested behaviour |

## What this keeps

vstack maps criteria to tests and mutation-checks weak ones.

## Decision

Take: Adopt the mutation check as a standard step.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
