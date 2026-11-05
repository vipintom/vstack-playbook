---
name: skill-eval
description: Use when it is unclear whether a skill fires on the right requests or its procedure produces the claimed output; not for writing the skill (skill-authoring) or for scoring a delivery (rubrics).
---

# skill-eval

Measure two things separately: does the skill get chosen, and does following it
work. A skill can win routing and still be useless.

## When to use

- A new skill is about to be published.
- A description changed and siblings may now compete.
- People report a skill never fires, or always fires wrongly.
- A procedure's output is disputed.
- A pack change needs a before-and-after comparison.

Near misses:

- The skill does not exist yet → `skill-authoring`.
- The question is whether a delivery passed → `verify`.
- The question is whether the skill follows the pack format → read
  `README.md` and the file itself.

## Steps

1. **Write the request set.** Five requests that should fire the skill, three
   near misses that should reach a named sibling. Keep the file; it is the
   fixture. Artifact: request set.
2. **Run the route.** Give only the descriptions to a fresh context, or ask a
   person who has not read the skill. Record which skill was chosen for each
   request. Artifact: routing table.
3. **Inspect every miss.** Wrong sibling, no fire, or genuinely ambiguous
   request. Fix the description or the request set, not the procedure.
   Artifact: miss list.
4. **Run the procedure** on one realistic task. Check the artifacts the steps
   name exist and are usable; compare with a run without the skill. Artifact:
   run log and comparison.
5. **Change one thing** — description, step or boundary — and re-run both.
   Artifact: before/after table.
6. **Record the result** with date, model and harness. A small self-written set
   is a smoke test, not an accuracy claim. Artifact: evaluation note.

## Output

| Request | Expected | Chosen | Result |
|---|---|---|---|
| flaky test | `debug` | `debug` | hit |
| why this design | `rationale` | `code-tour` | miss — boundary unclear |

Plus one procedure run: task, artifacts produced, and whether it beat the run
without the skill.

## Failure

- **The request set is tiny or self-written.** Say so; the number is a smoke
  test, not accuracy.
- **A skill fires for everything.** The description is a subject summary;
  return to `skill-authoring`.
- **The procedure run fails.** The skill needs a step or a reference, not a
  better description.
- **No fresh context is available.** Say the routing test was not independent;
  do not present the result as unbiased.
