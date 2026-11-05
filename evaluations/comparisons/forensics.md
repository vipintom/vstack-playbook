# forensics

| Counterpart | Source | What it does better |
|---|---|---|
| systematic-debugging | superpowers: | hypothesis-and-test loop, no guess fixes |
| trace-forensics | pstack: | artifact-first reading of profiles |

## What this keeps

vstack adds provenance and 'what the artifact cannot show'.

## Decision

Take: Adopt the hypothesis table from systematic-debugging.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
