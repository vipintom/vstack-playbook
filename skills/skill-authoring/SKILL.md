---
name: skill-authoring
description: Use when a new skill must be written or an existing one reshaped to the pack's standard — trigger description, procedure, evidence; not for scoring whether a skill fires (skill-eval) or editing playbooks (maintain-playbook).
---

# skill-authoring

A skill is a procedure with a trigger and a test. Write the trigger first, the
failure it prevents second, the steps third. Prose that cannot be followed is
an essay.

## When to use

- A method gap has appeared in three deliveries.
- An existing skill is too long, too vague or never fires.
- A skill must be split because it carries two procedures.
- A borrowed idea needs rewriting in this pack's voice.
- A skill competes with a sibling for the same request.

Near misses:

- The question is whether a skill fires → `skill-eval`.
- The change is to a playbook or principle → `maintain-playbook`.
- The skill exists and needs applying → use it.

## Steps

1. **Run one task without the skill.** Pick a realistic request the skill
   should cover; record what the agent misses, in its own words. Artifact:
   baseline note with the failing output.
2. **Write the trigger set.** Five requests that should fire it, three near
   misses that should reach a named sibling. Artifact: trigger table.
3. **Write the description.** `Use when <moment>; not for <near miss>.` State
   the moment, not the subject; name the sibling it must not steal. Artifact:
   front matter.
4. **Write four sections**: When to use, Steps, Output, Failure. Every step
   names the artifact it leaves; the failure section says what to do when the
   step cannot run. Artifact: `SKILL.md`.
5. **Keep it short.** 60–90 lines, 120 maximum. Move tables, examples and long
   command lists to `references/` and load them from the step that needs them.
   Artifact: reference files.
6. **Test the route.** Give the trigger set to a fresh context with only the
   descriptions; every positive must reach this skill and every near miss its
   sibling. Artifact: routing result.
7. **Test the procedure.** Run the realistic task with the skill; compare with
   the baseline. The named artifacts must exist and be usable. Artifact: run
   log and comparison.
8. **Record it.** Commit the skill, the baseline and the run. If an idea was
   borrowed, add the source to `NOTICE`. Artifact: commit.

## Output

A skill that fires on its moment, refuses its siblings, and leaves the
artifacts its steps name. A reader can run it without asking a question.

## Failure

- **The description cannot exclude a sibling.** The boundary is real; write
  both descriptions together.
- **The steps exceed the budget.** It is two skills or one skill plus a
  reference; split deliberately.
- **No failure can be named.** The skill is probably a principle or a checklist
  line, not a procedure.
- **The procedure run adds nothing to the baseline.** Delete the skill; a
  skill that does not change the outcome is ceremony.
