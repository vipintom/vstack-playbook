# Architecture and design

**Question.** Is this the right shape for the problem?

Apply every line; a line that does not apply is recorded as not applicable with
a reason. Each verdict needs evidence: a command, a file, a screenshot or a
quote.

| Line | Pass condition |
|---|---|
| Boundaries named | each component's ownership of state is stated |
| Contracts explicit | inputs, outputs and errors are typed or specified |
| Rejected alternative | one alternative with its cost is recorded |
| Failure paths | retry, timeout and partial failure are designed, not implied |
| Reversibility | the change can be undone, or the irreversibility is accepted by name |
| Migration path | callers move in stages, or the break is justified |

## Verdicts

- **pass** — evidence exists and the condition holds.
- **fail** — the condition does not hold; becomes a finding with the smallest fix.
- **not applicable** — with a reason.
- **unverified** — cannot be checked here; never counts as pass.

## Scoring

No score is computed. A percentage over six lines invites arguments about
weights; the verdicts are the result.
