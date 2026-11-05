# Security and data

**Question.** Can this leak, lose or corrupt data?

Apply every line; a line that does not apply is recorded as not applicable with
a reason. Each verdict needs evidence: a command, a file, a screenshot or a
quote.

| Line | Pass condition |
|---|---|
| Authorization | every read and write checks the actor's right to it |
| Input bounds | size, shape and rate limits are enforced |
| Secrets | no secret in code, logs, images or fixtures |
| Personal data | minimised, scoped and not logged in clear |
| Destructive operations | guarded, confirmed and reversible or explicitly accepted |
| Dependencies | new packages are pinned and audited |

## Verdicts

- **pass** — evidence exists and the condition holds.
- **fail** — the condition does not hold; becomes a finding with the smallest fix.
- **not applicable** — with a reason.
- **unverified** — cannot be checked here; never counts as pass.

## Scoring

No score is computed. A percentage over six lines invites arguments about
weights; the verdicts are the result.
