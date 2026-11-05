---
name: skill-eval
description: Use when it is unclear whether a skill fires on the right requests or its procedure produces the claimed output; not for writing the skill (skill-authoring) or for scoring a delivery (rubrics).
tier: meta
rigor: standard
status: stable
harness: [evidence]
pairs-with: [skill-authoring, evidence, coverage]
---

# skill-eval

Measure two things separately: does the skill get chosen, and does following it
work. A skill can win routing and still be useless.

## When to use

- A new skill is about to be published.
- A description changed and siblings may now compete.
- Users report a skill never fires, or always fires wrongly.
- A procedure's output is disputed.
- A pack release needs accuracy numbers.

Near misses:

- The skill does not exist yet → `skill-authoring`.
- The question is whether a delivery passed → `verify`.
- The question is whether a skill matches the standard → the validator.

## Modes

| Mode | Measure |
|---|---|
| Trigger | fixture accuracy: chosen skill vs expected |
| Procedure | run the skill on a task, check artifacts |
| Pack | whole-corpus routing and cost |

## Steps

1. **Fix the corpus**: hand-written positives and near-miss negatives per
   skill; record the version. Artifact: fixture hash.
2. **Run the trigger suite** and record per-skill precision and recall, not
   only the total. Artifact: results table.
3. **Inspect every miss**: wrong sibling, no fire, or ambiguous request.
   Artifact: miss list with the failing request.
4. **Run the procedure** on at least one realistic task; check the named
   artifacts exist and are usable. Artifact: run log.
5. **Change one thing** (description, step, boundary) and re-run. Artifact:
   before/after table.
6. **Record the evaluation** with corpus hash, model, harness and date; numbers
   without those are not comparable. Artifact: evaluation record.

## Output

| Skill | Precision | Recall | Misses | Procedure run |
|---|---|---|---|---|
| verify | 0.94 | 0.90 | 1 (chose evidence) | passed |

## Failure

- **The corpus is tiny or self-written by the same model.** Say so; the number
  is a smoke test, not accuracy.
- **A skill fires for everything.** The description is a subject summary;
  return to `skill-authoring`.
- **The procedure run fails.** The skill needs a step or a reference, not a
  better description.

## Rationalizations

| Excuse | Reality |
|---|---|
| "Total accuracy is 90%, good enough." | One skill at 40% is hidden by the total and fires every day. |
| "The model is the same one that wrote it." | Then the test measures agreement, not accuracy. |
| "Trigger tests are enough." | Routing without a working procedure is a confident detour. |
| "Numbers speak for themselves." | Only with corpus, model, harness and date attached. |

## Tracking

- **OpenChamber present:** results table on the delivery note; regressions as
  project todos.
- **OpenCode or files:** `evaluations/results/<date>-<corpus>.json`.
- Ladder: `resources/tracking.md`.
