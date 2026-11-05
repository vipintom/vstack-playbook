# evidence

| Counterpart | Source | What it does better |
|---|---|---|
| verification-before-completion | superpowers: | completion requires running the command |
| pstack verification-skill | pstack: | project-specific verification doc |

## What this keeps

vstack records claim, exit, digest and artifact per line.

## Decision

Take: Adopt the digest step; keep append-only.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
