---
name: rubrics
description: Use when a review needs explicit, checkable criteria instead of taste, or a pack artefact needs scoring against a fixed lens; not for performing the review itself (review) or judging whether gates pass (verify).
tier: design
rigor: standard
status: stable
pairs-with: [review, audit, coverage]
---

# rubrics

A rubric turns "looks good" into a list of checks with a pass condition. Pick
the lens, apply every line, record the evidence for each verdict.

## When to use

- A review keeps producing opinion instead of findings.
- Two reviewers disagree and the disagreement is about criteria.
- A design, skill, playbook or doc must be scored consistently over time.
- An audit needs a fixed definition of good before it starts.
- A team is calibrating what "done" means.

Near misses:

- The review is ready to run → `review` applies the lens.
- The question is whether tests pass → `verify`.
- The question is what to build → `design`.

## Modes

| Mode | Coverage |
|---|---|
| Single lens | one rubric, all lines |
| Full review | every applicable lens, one finding list |
| Calibration | two reviewers score independently, then reconcile |

## Steps

1. **Name the artifact and the lens.** Read the rubric file before applying
   it. Lenses: `rubrics/architecture-design.md`, `rubrics/correctness-regression.md`,
   `rubrics/documentation-migration.md`, `rubrics/maintainability-style.md`,
   `rubrics/performance-resources.md`, `rubrics/security-data.md`,
   `rubrics/test-adequacy.md`. Artifact: lens name.
2. **Mark lines that do not apply** and say why. A skipped line is recorded,
   not silently dropped. Artifact: applicability table.
3. **For each applicable line, record the verdict and the evidence**: command,
   file, screenshot or quote. Artifact: scored table.
4. **Treat any `fail` as a finding**, with the smallest fix. Artifact: findings.
5. **Compute the score only if the lens defines one**; otherwise report the
   verdicts. A percentage with no definition is invented precision. Artifact:
   summary.
6. **Hand the findings to `review` or `audit`** for resolution. Artifact: handoff.

## Output

| Line | Applicable | Verdict | Evidence |
|---|---|---|---|
| Boundaries named | yes | pass | design record §2 |
| Failure paths covered | yes | fail | retry path absent in `src/jobs/run.ts:88` |

## Failure

- **The lens does not fit the artifact.** Say so and stop; forcing a rubric
  produces false findings.
- **A line is unanswerable without running something.** Run it or mark
  `unverified`, never `pass`.
- **Reviewers disagree on a verdict.** The evidence decides; if it does not,
  the line is ambiguous and gets rewritten for the next review.

## Rationalizations

| Excuse | Reality |
|---|---|
| "Rubrics make reviews mechanical." | They make them checkable; judgement enters at the line definitions, not the verdicts. |
| "I can score from memory." | Then the evidence column is empty and the score is taste. |
| "A failed line can be waived informally." | Waivers are recorded with a name, or they are not waivers. |
| "Every lens must be applied." | Applicability is the first judgement; say why a lens does not apply. |

## Tracking

- **OpenChamber present:** the scored table on the delivery note; the panel
  shows which lens produced which finding.
- **OpenCode or files:** `docs/deliveries/<id>.md` under "Review".
- Ladder: `resources/tracking.md`.
