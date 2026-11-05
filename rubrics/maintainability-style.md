# Maintainability and style

**Question.** Can the next person change this safely?

Apply every line; a line that does not apply is recorded as not applicable with
a reason. Each verdict needs evidence: a command, a file, a screenshot or a
quote.

| Line | Pass condition |
|---|---|
| Names | domain terms, one name per concept |
| Duplication | no third copy of the same logic |
| Dead code | no unreachable branches or unused options introduced |
| Boundaries | no module reaches into another's storage |
| Size | the diff is reviewable in one sitting, or split with a reason |
| Comments | explain why, not what; no commented-out code |

## Verdicts

- **pass** — evidence exists and the condition holds.
- **fail** — the condition does not hold; becomes a finding with the smallest fix.
- **not applicable** — with a reason.
- **unverified** — cannot be checked here; never counts as pass.

## Scoring

No score is computed. A percentage over six lines invites arguments about
weights; the verdicts are the result.
