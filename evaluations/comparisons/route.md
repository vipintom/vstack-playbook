# route

| Counterpart | Source | What it does better |
|---|---|---|
| using-superpowers | superpowers: | one hard rule: invoke a skill before anything else; nothing to remember |
| poteto-mode | pstack: | copies playbook steps into a live todolist, so the route survives the session |

## What this keeps

vstack records tier, skipped skills and a done predicate.

## Decision

Take: Adopt the todolist handoff after routing; keep the record.
Reject: copying their structure wholesale; the pack's sections and harness
ladder stay, only the described behaviour changes.

## Provenance

Read at the commits pinned in `evaluations/comparisons/index.json`. No text was
copied; the `NOTICE` file records influence where it exists.
