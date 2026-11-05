# red-team

| Counterpart | Source | What it does better |
|---|---|---|
| requesting-code-review | superpowers: | structured review request with context |
| interrogate | pstack: | adversarial findings must survive a run |

## What this keeps

vstack requires a reproduction per finding.

## Decision

Take: Adopt the 'findings must be proven' gate verbatim.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
