---
name: handoff
description: Use when work pauses and the next session or person must continue without re-reading the history, or when work must stop in a state that is safe and honestly described; not for explaining results to a stakeholder (report) or for restoring a broken state (recovery).
tier: continuity
rigor: rigid
status: stable
harness: [focus, knowledge, ledger]
pairs-with: [resume, report, recovery]
---

# handoff

Leave pointers, not summaries. The next agent should reach the first useful
action in one read, and should know exactly what is unfinished.

## When to use

- A session ends with work in flight.
- A different person or agent takes over.
- Context is about to be compacted and detail would be lost.
- Work must pause for an external dependency.
- Work must stop because it is unsafe to continue.

Near misses:

- The work is finished → `report`.
- A broken state must be restored → `recovery`.
- The next step is unclear because routing was never done → `route`.

## Modes

| Mode | Handoff |
|---|---|
| Checkpoint | state, next action, blockers — 10 lines |
| Session | plus decisions and evidence locations |
| Safe pause | plus the exact reversal of any half-applied change |

`rigor: rigid` — the handoff names the last verified state and the next action.
A handoff without a next action is a diary entry.

## Steps

1. **State the last verified state** with its evidence link. Artifact:
   `verified at`.
2. **State the next action**, one action, with the file or command to start
   from. Artifact: `next`.
3. **List blockers** with what unblocks each and who owns it. Artifact:
   blockers.
4. **Name decisions made** and link the records, not the reasoning. Artifact:
   decision links.
5. **Describe anything half-applied** and the exact reversal. Artifact:
   rollback note.
6. **Write it where the next session reads first**: focus card detail, project
   knowledge, or `.vstack/handoff.md`. Artifact: handoff record.

## Output

```markdown
Verified: migration step 2 of 5 applied, checksum matches (log).
Next: run backfill batch 3 — `<script> orders 3000`.
Blocked: staging DB locked by ops until 14:00 (owner: @ops).
Half-applied: column added, not backfilled; reversal: `ALTER TABLE ... DROP COLUMN`.
Decisions: expand/contract chosen — link.
```

## Failure

- **The state is unknown.** Say unknown and how to establish it; do not
  reconstruct a state you did not observe.
- **A step is half-applied and the reversal is unknown.** That is `recovery`,
  not a handoff; do not hand over an unsafe state silently.
- **The next action depends on a decision.** Name the decision and the options;
  the next session should not re-derive it.

## Rationalizations

| Excuse | Reality |
|---|---|
| "The chat history is the handoff." | The next session cannot read it, or reads it at full cost. |
| "I will summarise the whole session." | Pointers beat summaries; summaries drift. |
| "Nothing is half-applied." | Then one line says so; the check is cheap. |
| "The next step is obvious." | Obvious to you. Write it. |

## Tracking

- **OpenChamber present:** focus card carries state and next action; project
  knowledge for facts that outlive the session.
- **OpenCode or files:** `.vstack/handoff.md`, linked from the delivery.
- Ladder: `resources/tracking.md`.

## Verification

```bash
docker compose run --rm pack node tools/validate.js
```
