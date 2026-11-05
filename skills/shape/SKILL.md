---
name: shape
description: Use when the request is understood but the problem is not framed — outcome, boundaries, unknowns and proof are still unstated; not for clarifying ambiguous wording (sharpen) or ordering known work (plan).
tier: frame
rigor: rigid
status: stable
pairs-with: [sharpen, plan, design]
---

# shape

Turn a request into a framed problem: an outcome with a done predicate, the
boundaries, the unknowns, and how the result will be proven. Nothing is built
at this stage.

## When to use

- The goal is clear enough to restate but no done predicate exists.
- Scope is open: nobody has said what is out of bounds.
- The work has unknowns that change the approach if they resolve differently.
- Two stakeholders describe the same request differently.
- A previous delivery was rejected as "not what I meant".

Near misses:

- The words are ambiguous ("make it faster") → `sharpen` first.
- The work is already framed and needs ordering → `plan`.
- The cause is unknown → `understand` playbook, not framing.

## Modes

| Mode | Depth |
|---|---|
| Quick | outcome, done-when, out of scope — three lines |
| Standard | adds unknowns, risk class, proof strategy |
| Deep | adds a design gate before any build step |

`rigor: rigid` — steps 1 and 2 are load-bearing. A frame without an outcome
and a done predicate is a wish.

## Steps

1. **Write the outcome as a state of the world.** "Users can reset a password
   by email" — not "implement password reset". Artifact: `outcome`.
2. **Write the done predicate.** One check a stranger can run or read, with a
   threshold where a number is involved. Artifact: `done-when`.
3. **List boundaries.** In scope, out of scope, and the things that look in
   scope but are not. Artifact: `non-goals` — at least two.
4. **Name the unknowns and resolve or price them.** For each: how it will be
   answered, by when, and what changes if it lands the other way. Artifact:
   unknown table.
5. **Classify risk and pick the proof.** Risk from reach and reversibility;
   proof from `route`'s tier table. Artifact: `risk`, `proof`.
6. **Write the frame down** where the next session will read it: focus card
   detail, delivery record or `.vstack/frame.md`. Artifact: frame record.

## Output

```markdown
Outcome: a locked account can be recovered without support involvement.
Done-when: a test locks an account, completes reset, logs in — 1 run, exit 0.
In: reset link, expiry, rate limit. Out: MFA reset, admin unlock.
Unknowns: email provider limits (probe: send 50 today) — if capped, add queue.
Risk: auth path, irreversible emails — Deep. Proof: design gate + verify.
```

## Failure

- **The outcome cannot be stated without a design choice.** That choice is an
  unknown: run a `spike`, then return.
- **The done predicate needs a number nobody has.** Measure first; a guessed
  threshold is a future argument.
- **Stakeholders disagree on the outcome.** Stop. Present both frames with
  their costs; only the user picks.
- **The unknown cannot be resolved now.** Record it as an assumption, name the
  cost if wrong, and keep the work reversible.

## Rationalizations

| Excuse | Reality |
|---|---|
| "The request is clear, framing is overhead." | Clear requests still hide non-goals; those are where scope creep lives. |
| "I'll define done when I see the code." | Then every stopping point is negotiable mid-flight. |
| "Unknowns will surface during build." | They surface as rework. Name them now, price them now. |
| "One done predicate is enough for everything." | One for the outcome; each task carries its own check in `plan`. |

## Tracking

- **OpenChamber present:** the frame goes on the focus card detail and the
  delivery note; project knowledge only if it outlives the delivery.
- **OpenCode or files:** `.vstack/frame.md`, then `docs/deliveries/<id>.md`.
- Ladder: `resources/tracking.md`.

## Verification

```bash
docker compose run --rm pack node tools/validate.js
```
