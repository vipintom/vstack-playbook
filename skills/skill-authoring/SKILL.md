---
name: skill-authoring
description: Use when a new skill must be written or an existing one reshaped to the pack's standard, with a trigger description, a procedure and an evaluation; not for scoring whether a skill fires (skill-eval) or for editing playbooks (maintain-playbook).
tier: meta
rigor: rigid
status: stable
harness: [knowledge]
pairs-with: [skill-eval, principles, tdd]
---

# skill-authoring

A skill is a procedure with a trigger and a test. Write the trigger first, the
failure modes second, the steps third. Prose that cannot be followed is an
essay.

## When to use

- A method gap has appeared in three deliveries.
- An existing skill is too long, too vague or never fires.
- A skill must be split because it carries two procedures.
- A borrowed idea needs rewriting in this pack's voice.
- A skill's evaluation shows it competing with a sibling.

Near misses:

- The question is whether a skill fires → `skill-eval`.
- The change is to a playbook or principle → `maintain-playbook`.
- The skill exists and needs applying → use it.

## Modes

| Mode | Work |
|---|---|
| New | description, trigger fixtures, body, evaluation |
| Revise | one section, re-run evaluation |
| Split | two triggers, two fixtures, cross-links |

`rigor: rigid` — no body before a failing trigger fixture. The fixture is the
skill's RED.

## Steps

1. **Write the trigger fixture first**: five requests that should fire it,
   three near misses that should reach a sibling. Artifact:
   `evaluations/triggers/<skill>.json`.
2. **Write the description**: `Use when <moment>; not for <near miss>.` No
   procedure, no subject summary. Artifact: front matter.
3. **Pick tier and rigour.** Rigid means steps cannot be skipped; say which.
   Artifact: `tier`, `rigor`.
4. **Write the six sections** per `docs/skill-standard.md`: when, modes, steps,
   output, failure, rationalizations. Each step names an artifact. Artifact:
   `SKILL.md`.
5. **Move long material to `references/`** and load it from the body. Artifact:
   reference files.
6. **Run the validator and the trigger evaluation**; fix until both pass.
   Artifact: results.
7. **Record the change** in the pack's history and the comparison record.
   Artifact: commit and `evaluations/comparisons/<skill>.md`.

## Output

A skill directory whose validator result is clean, whose fixture fires
correctly, and whose body fits the budget. The description alone tells a router
when to pick it.

## Failure

- **The description cannot exclude a sibling.** The boundary is real; write
  both descriptions together.
- **The steps exceed the budget.** It is two skills or one skill plus a
  reference; split deliberately.
- **No failure mode can be named.** The skill is probably a principle or a
  checklist line, not a procedure.

## Rationalizations

| Excuse | Reality |
|---|---|
| "The skill is obvious, it needs no test." | Then a fixture is trivial to write and proves the trigger. |
| "More detail makes it better." | Detail belongs in references; the body is a procedure. |
| "Borrowing text is fine with attribution." | Attribution does not make it this pack's procedure; rewrite it. |
| "Evaluation can come later." | Then nobody knows whether it fires until users complain. |

## Tracking

- **OpenChamber present:** the new skill's validation result on the delivery
  note; the prompt or spec that motivated it in project knowledge.
- **OpenCode or files:** validator output plus
  `evaluations/comparisons/<skill>.md`.
- Ladder: `resources/tracking.md`.
