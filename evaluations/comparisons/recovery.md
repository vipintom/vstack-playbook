# recovery

| Counterpart | Source | What it does better |
|---|---|---|
| systematic-debugging | superpowers: | stops guessing and gathers evidence |
| using-git-worktrees | superpowers: | isolates work so recovery is cheap |

## What this keeps

vstack names the target state before acting.

## Decision

Take: Adopt evidence preservation before reversal.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
