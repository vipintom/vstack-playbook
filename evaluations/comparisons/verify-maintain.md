# verify-maintain

| Counterpart | Source | What it does better |
|---|---|---|
| verification-before-completion | superpowers: | re-verifies rather than trusting history |
| pstack verification-skill | pstack: | maintains the generated verification skill |

## What this keeps

vstack adds the CI-vs-doc drift check.

## Decision

Take: Keep; require the drift list.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
