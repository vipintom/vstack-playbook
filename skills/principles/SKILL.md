---
name: principles
description: Use when a decision needs the rule behind it, or two reasonable approaches must be adjudicated before work continues; not for a skill's procedure (help) or a project's local conventions.
tier: entry
rigor: standard
status: stable
harness: [knowledge, memory]
pairs-with: [plan, design]
---

# principles

Twelve rules. Each has a trigger, a test and a failure mode. Apply the test,
record the outcome, move on. Principles do not replace judgement; they make
judgement checkable.

## When to use

- Two approaches both look correct and the choice must be defended.
- A review finding cites a principle and the author disagrees.
- A plan step feels wrong but the reason is not yet a sentence.
- A shortcut is tempting and the cost is unclear.
- A decision will be revisited later by someone without context.

Near misses:

- The question is "how does this code work" → `code-tour`.
- The question is "why was this chosen" → `rationale`.
- The question is "what should the steps be" → `plan`.

## Modes

| Mode | Use |
|---|---|
| Cite | name the principle, state its test, apply it to this decision |
| Adjudicate | two principles conflict; use the precedence below |
| Teach | explain the rule with one example from this repository |

## Steps

1. **State the decision in one sentence**, including the alternatives.
   Artifact: `decision`.
2. **Find the principle that governs it.** Read
   `principles/index.md` — the rule text, not a summary. Artifact: principle
   id and its test.
3. **Run the test against each alternative.** The test is written to be
   answerable yes or no. Artifact: test result per alternative.
4. **Apply precedence when tests conflict:** truth before safety, safety before
   reversibility, reversibility before speed, speed before elegance. Artifact:
   the winning rule and the one it beat.
5. **Record the decision** in the delivery record or `decisions` skill.
   Artifact: `decisions/<id>.md` or the delivery's decision section.
6. **Stop.** A principle does not authorise more work; it settles the current
   choice.

## Output

```
Decision: retry with idempotency keys, not blind retries.
Principle: P4 — a side effect must be safe to repeat (test: does a second identical call change state?).
Result: blind retries fail the test; idempotency keys pass.
Precedence: safety (P4) beat speed (P9).
```

## Failure

- **No principle fits.** The decision is genuinely new. Record it as a
  precedent with its own test; it may become a principle after three uses.
- **The test is unanswerable here.** Say which fact is missing and do not
  pretend the principle applied.
- **The user overrides a principle.** Record the override, the reason and who
  accepted the risk. An unrecorded override is how a method rots.

## Rationalizations

| Excuse | Reality |
|---|---|
| "Everyone knows this rule." | Knowing is not applying. State the test and the result. |
| "The principle supports my choice, obviously." | Then the test takes ten seconds to write down. Do it. |
| "Principles are for big decisions." | Most rot comes from small unrecorded ones; big ones get reviewed anyway. |
| "Two principles conflict, so neither applies." | Precedence exists precisely for that. Pick and record which won. |

## Tracking

- **OpenChamber present:** a durable preference goes to project knowledge; a
  delivery-local decision goes in the delivery note.
- **OpenCode or files:** `decisions/<date>-<slug>.md` next to the delivery.
- Ladder: `resources/tracking.md`.
