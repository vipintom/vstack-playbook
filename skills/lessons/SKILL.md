---
name: lessons
description: Use when the same mistake has happened twice, or an incident or delivery revealed a rule that should change the method itself; not for recording what happened (report) or for a one-off fix (debug).
tier: continuity
rigor: standard
status: stable
harness: [memory, knowledge]
pairs-with: [unstick, decisions, principles]
---

# lessons

Turn a repeated mistake into a durable change: a checklist line, a test, a
principle edit or a skill edit. A lesson that changes nothing is a story.

## When to use

- The same failure appeared in two deliveries.
- An incident had a cause the method could have caught.
- A review finding keeps recurring across authors.
- A shortcut worked and should become the default.
- A skill's step was skipped and the outcome suffered.

Near misses:

- One incident needs an account → `report`.
- The immediate cause is unknown → `debug`.
- The rule is already written and needs applying → `principles`.

## Modes

| Mode | Change |
|---|---|
| Checklist | one line in the relevant skill |
| Test | a regression or pack evaluation |
| Principle | new or amended rule with its test |

## Steps

1. **Name the recurrence with evidence**: two instances, links to both.
   Artifact: instances.
2. **Find the shared cause** — a missing step, an unchecked assumption, an
   ambiguous rule. Artifact: cause.
3. **Choose the smallest durable change**: checklist line, test, or principle.
   Artifact: chosen change.
4. **Write the change in the method**, not in a retrospective document.
   Artifact: diff to skill, principle or test.
5. **Prove it would have caught the instance**: run the new test against the
   old behaviour or walk the checklist against the incident. Artifact: proof.
6. **Record the lesson** briefly, linking the change. Artifact: lesson entry.

## Output

The method diff plus the proof it addresses the recurrence. The lesson text is
one paragraph, not an essay.

## Failure

- **The instances share no cause.** They are two lessons or none; do not force
  a narrative.
- **The change is too large to make now.** Record it as a proposed principle
  change with the evidence; do not let it evaporate.
- **The same lesson already exists.** Strengthen the existing line or test;
  duplication weakens both.

## Rationalizations

| Excuse | Reality |
|---|---|
| "We learned, no doc needed." | Learning that lives in heads is lost at the next handoff. |
| "A retrospective doc is the deliverable." | Documents do not run; checklists and tests do. |
| "One occurrence is not a pattern." | Then record it; the second occurrence is the trigger. |
| "The method is fine, people erred." | The method's job is to make the error hard. |

## Tracking

- **OpenChamber present:** project knowledge entry linking the method change.
- **OpenCode or files:** `<repo>/docs/lessons.md`, one line per lesson with a link to the diff.
- Ladder: `resources/tracking.md`.
