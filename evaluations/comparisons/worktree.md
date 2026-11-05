# worktree

| Counterpart | Source | What it does better |
|---|---|---|
| using-git-worktrees | superpowers: | detect-isolation-first sequence |
| dispatching-parallel-agents | superpowers: | worktrees for parallel work |

## What this keeps

vstack adds cleanup conditions and ignore checks.

## Decision

Take: Adopt the detection order verbatim in intent.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
