# verify-setup

| Counterpart | Source | What it does better |
|---|---|---|
| verification-before-completion | superpowers: | defines what evidence means per project |
| pstack verification-skill | pstack: | generates a project-specific verification skill |

## What this keeps

vstack adds hermeticity and a clean-run proof.

## Decision

Take: Keep; borrow pstack's template structure.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
