# Documentation and migration

**Question.** Can someone else use, upgrade and undo this?

Apply every line; a line that does not apply is recorded as not applicable with
a reason. Each verdict needs evidence: a command, a file, a screenshot or a
quote.

| Line | Pass condition |
|---|---|
| Commands run | every documented command was executed as written |
| Counts generated | no hand-typed numbers, versions or lists |
| Breaking changes | each one names the affected consumer and the migration step |
| Deprecation | old paths have an owner, a date and a removal task |
| Rollback documented | the reversal exists and was rehearsed once |
| Changelog | user-visible changes are described in user terms |

## Verdicts

- **pass** — evidence exists and the condition holds.
- **fail** — the condition does not hold; becomes a finding with the smallest fix.
- **not applicable** — with a reason.
- **unverified** — cannot be checked here; never counts as pass.

## Scoring

No score is computed. A percentage over six lines invites arguments about
weights; the verdicts are the result.
