---
name: route
description: Use when a request arrives with no playbook open and the approach must be chosen before skills load; not for a one-file edit, a question a single read answers, or work whose route is already recorded.
tier: entry
rigor: standard
status: stable
harness: [focus, knowledge, ledger]
pairs-with: [plan, figure-it-out, sharpen]
---

# route

Pick the playbook, the rigour tier and the first skill. Record the choice so
the next session does not repeat it. Do not do the work here.

## When to use

- A new request starts work that will produce more than one artifact.
- The request names a goal, not a skill ("make the build stop flaking").
- Work resumes and the delivery record does not say what comes next.
- Two skills could apply and the choice changes what gets produced.
- A delivery crosses a gate — design agreed, build done — and needs its next phase.

Near misses, and where they belong instead:

- One file changes and the fix is obvious → edit it; no route, no record.
- The user names the skill ("trace this with code-tour") → run that skill.
- The question is answered by reading one file → read it and answer.

## Modes

| Mode | Trigger | What changes |
|---|---|---|
| Quick | one file, reversible, no gate | playbook `fix-bug` or none; one skill; record one line |
| Standard | default for features, defects, refactors | playbook + tier + tracking record; skills capped at three |
| Deep | irreversible, public, security or data | Standard plus `design` gate, `red-team`, independent `verify` |

Quick is a decision, not a shortcut: say "Quick" and why, then proceed. If the
work grows past one file, re-route at Standard — do not stretch Quick.

## Steps

1. **State the outcome.** One sentence for what exists afterwards, and the
   check that proves it. Artifact: `outcome` and `done-when` on the focus card,
   or in `.vstack/focus.md` when no card exists.
2. **Decide triviality.** If one edit, one file, reversible — write the Quick
   line and stop routing. Artifact: `tier: quick`.
3. **Choose the playbook.** Read `references/playbooks.md`. If nothing fits
   after one pass, route to `figure-it-out` and say what made the situation
   unrecognisable. Artifact: playbook name and one line of why.
4. **Choose the tier.** Read `references/tiers.md`. Artifact: `tier`.
5. **Cap the load.** Name the first two skills — three at Deep — and the skills
   you deliberately skip, with the reason. Artifact: `skills` and `skipped`.
6. **Record the route.** Focus card when present (`focus_set`, then
   `focus_add` for the first action); otherwise `.vstack/focus.md`. Artifact:
   the routing record below.
7. **Hand off.** Invoke the first skill with `outcome`, `done-when` and the
   artifact paths. Do not restate that skill's steps.

## Output

```json
{"playbook": "fix-bug", "tier": "standard", "skills": ["debug", "tdd"],
 "skipped": ["red-team"], "done-when": "the flaky case fails 0/50 runs",
 "recorded": "focus card + docs/deliveries/2026-11-05-build-flake.md"}
```

A reader must be able to answer "what was chosen, what was skipped and why"
from the record alone. No record, no route.

## Failure

- **No playbook fits.** Use `figure-it-out`; never invent a fourteenth.
- **Scope unknown.** Use `sharpen` first. Routing on a guess produces the wrong
  tier, and the tier is expensive to change later.
- **The user overrides the route.** Keep their choice, record the override and
  the reason in the same record. Never silently re-route mid-delivery.
- **No focus card and no `.vstack/`.** Write `.vstack/focus.md` before step 7;
  a route that exists only in the conversation is not a route.
- **Two playbooks tie.** Take the one whose exit criteria are checkable now.

## Rationalizations

| Excuse | Reality |
|---|---|
| "The request is clear, routing is ceremony." | Clear requests still need a done-predicate; without one, completion is an opinion. |
| "I'll pick the playbook once I see the code." | Then you are already exploring under the wrong tier. Route in one minute, re-route once. |
| "Three skills are all relevant." | More relevant skills means a later first artifact. Pick two, name the rest as deferred. |
| "Deep tier is safer, I'll use it everywhere." | Deep adds a design gate and an independent verifier; on a one-file fix that is cost without evidence. |
| "I'll record the route at the end." | At the end the reasoning is gone and the record becomes a summary of what happened, not a decision. |

## Tracking

- **OpenChamber present:** `focus_set` with the outcome, `focus_add` for step 1,
  `focus_status` as the tier begins. Project knowledge for anything the next
  session must read.
- **OpenCode only:** session todos in the same order as the routing record.
- **Neither:** `.vstack/focus.md`, then `docs/deliveries/<id>.md` once the
  delivery is named. Full ladder: `resources/tracking.md`.

## Verification

```bash
docker compose run --rm pack node tools/validate.js
```
