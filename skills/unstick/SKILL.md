---
name: unstick
description: Use when the same failure has survived several fixes or the work keeps circling one assumption; not for a first debugging attempt (debug) or for a missing playbook (figure-it-out).
tier: build
rigor: standard
status: stable
harness: [focus, memory]
pairs-with: [debug, figure-it-out, lessons]
---

# unstick

Name the shared assumption, test it directly, list genuinely different
approaches, pick one, restart clean. More effort on the same path is not a new
attempt.

## When to use

- Three fixes in a row failed the same way.
- The work keeps returning to one file or one hypothesis.
- A test passes alone and fails together, and nobody knows why.
- The agent is looping: same commands, same output, new wording.
- A reviewer says "you are assuming X" and X was never checked.

Near misses:

- First attempt at a cause → `debug`.
- No approach exists at all → `figure-it-out`.
- The failure is flaky infrastructure → `verify`'s flake policy.

## Modes

| Mode | Use |
|---|---|
| Assumption test | one belief, one cheap experiment |
| Path reset | abandon the current branch, restart from the repro |
| Approach survey | three different strategies, pick by cost |

## Steps

1. **Write the loop as a sequence:** what was tried, what happened, what was
   concluded. Artifact: attempt table.
2. **Name the shared assumption** every attempt relied on. If none is visible,
   the loop is environmental — check versions and state. Artifact:
   `assumption`.
3. **Test the assumption directly**, not the symptom. Artifact: result.
4. **List three approaches that do not share it**, with cost and first step.
   Artifact: option list.
5. **Pick one and restart clean**: fresh branch or fresh context, repro first.
   Artifact: chosen approach and clean baseline.
6. **Record what the loop taught** so the next attempt does not repeat it.
   Artifact: lessons entry.

## Output

The broken assumption, the evidence against it, the chosen new approach, and
the clean baseline you restarted from. The old branch is abandoned or labelled.

## Failure

- **The assumption is true.** Then the loop is in the diagnosis, not the
  belief: gather a new observation rather than a new fix.
- **No alternative approach exists.** The problem may be unsolvable as framed;
  return to `shape` and change the outcome, not the effort.
- **The environment is the variable.** Reproduce on a clean machine before
  another code change.

## Rationalizations

| Excuse | Reality |
|---|---|
| "One more attempt will work." | That is the definition of the loop. Count attempts; at three, stop. |
| "Restarting loses progress." | Progress is the attempt table; the branch is not. |
| "The assumption is obviously true." | Obvious assumptions are the ones nobody tests. |
| "A different approach means starting over." | It means starting from the repro, which is the only reusable part. |

## Tracking

- **OpenChamber present:** the attempt table is the record; `focus_status`
  stays "blocked" until the assumption is tested.
- **OpenCode or files:** `docs/deliveries/<id>.md` under "Unstick".
- Ladder: `resources/tracking.md`.
