# refactor

| Counterpart | Source | What it does better |
|---|---|---|
| test-driven-development | superpowers: | green baseline before change |
| code-review | superpowers: | flags behaviour changes hidden in refactors |

## What this keeps

vstack requires a surface diff and one move per commit.

## Decision

Take: Keep; add the 'stop after any commit' claim.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
