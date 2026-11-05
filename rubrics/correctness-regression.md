# Correctness and regression

**Question.** Does it do what it claims without breaking what exists?

Apply every line; a line that does not apply is recorded as not applicable with
a reason. Each verdict needs evidence: a command, a file, a screenshot or a
quote.

| Line | Pass condition |
|---|---|
| Claim to test | each acceptance criterion maps to a test that can fail |
| Negative control | the new test fails on the previous commit |
| Edge inputs | empty, null, maximum, duplicate and hostile inputs are covered |
| Existing suite | no test deleted, skipped or weakened to reach green |
| Error behaviour | errors return the specified shape, not a stack trace |
| Idempotence | repeated identical operations are safe where claimed |

## Verdicts

- **pass** — evidence exists and the condition holds.
- **fail** — the condition does not hold; becomes a finding with the smallest fix.
- **not applicable** — with a reason.
- **unverified** — cannot be checked here; never counts as pass.

## Scoring

No score is computed. A percentage over six lines invites arguments about
weights; the verdicts are the result.
