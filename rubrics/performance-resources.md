# Performance and resources

**Question.** Does it meet its budget under realistic load?

Apply every line; a line that does not apply is recorded as not applicable with
a reason. Each verdict needs evidence: a command, a file, a screenshot or a
quote.

| Line | Pass condition |
|---|---|
| Baseline | a before number from the same harness exists |
| Threshold | the target is numeric and stated before measuring |
| Variance | the delta exceeds measured noise |
| Resource limits | memory, connections and file handles are bounded |
| Hot path | the change is justified by a profile, not a guess |
| Cost | the added infrastructure or dependency is recorded |

## Verdicts

- **pass** — evidence exists and the condition holds.
- **fail** — the condition does not hold; becomes a finding with the smallest fix.
- **not applicable** — with a reason.
- **unverified** — cannot be checked here; never counts as pass.

## Scoring

No score is computed. A percentage over six lines invites arguments about
weights; the verdicts are the result.
