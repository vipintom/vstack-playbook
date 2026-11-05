---
name: lessons
description: Use when the same mistake has happened twice, or an incident or delivery revealed a rule that should change the method itself; not for recording what happened (report) or for a one-off fix (debug).
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

## Steps

1. **Name the recurrence with evidence**: two instances, links to both.
   Artifact: instances.
2. **Find the shared cause** — a missing step, an unchecked assumption, an
   ambiguous rule. Artifact: cause.
3. **Choose the smallest durable change**: prefer an executable check (test,
   lint or type rule), then a principle, then a checklist line. Prose is the
   weakest enforcement. Artifact: chosen change.
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
