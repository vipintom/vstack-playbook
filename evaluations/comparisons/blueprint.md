# blueprint

| Counterpart | Source | What it does better |
|---|---|---|
| writing-plans | superpowers: | exact signatures and file paths in the plan |
| poteto-mode | pstack: | implementation steps reference concrete files |

## What this keeps

vstack separates the interface sketch from the plan.

## Decision

Take: Adopt the 'types only, bodies throwing' checkpoint.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
