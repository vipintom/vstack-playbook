# Test adequacy

**Question.** Do the tests prove the claim, or only execute lines?

Apply every line; a line that does not apply is recorded as not applicable with
a reason. Each verdict needs evidence: a command, a file, a screenshot or a
quote.

| Line | Pass condition |
|---|---|
| Criterion map | every acceptance criterion has a named test |
| Can fail | each new test was seen red without the change |
| Isolation | tests do not depend on order, network or wall clock |
| Realism | the test exercises real code, not its own mock |
| Failure output | a failure names the behaviour, not a line number |
| Budget | the suite runs in the time the project promises |

## Verdicts

- **pass** — evidence exists and the condition holds.
- **fail** — the condition does not hold; becomes a finding with the smallest fix.
- **not applicable** — with a reason.
- **unverified** — cannot be checked here; never counts as pass.

## Scoring

No score is computed. A percentage over six lines invites arguments about
weights; the verdicts are the result.
