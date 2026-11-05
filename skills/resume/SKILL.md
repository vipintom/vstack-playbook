---
name: resume
description: Use when picking up work from a previous session, another agent or a recorded handoff, and the current state must be validated before continuing; not for starting new work (route) or for restoring a broken state (recovery).
---

# resume

Read the handoff, check it against reality, then continue. Old context is a
claim, not a fact.

## When to use

- A session starts with a delivery already in flight.
- Another agent left a handoff or a task list.
- Work resumes after days away.
- Context was compacted and the summary may be stale.
- A branch exists with unclear status.

Near misses:

- The work is new → `route`.
- The state is broken and must be restored → `recovery`.
- The session ended cleanly with results → read the `report`.

## Steps

1. **Read the handoff or delivery record** and quote its "verified at" and
   "next". Artifact: quoted state.
2. **Check the tree**: branch, commit, dirty files, running services. Artifact:
   actual state.
3. **Compare and reconcile.** Any difference means the record is stale; update
   it before continuing. Artifact: reconciliation note.
4. **Re-run the smallest gate** that proves the last verified state still
   holds. Artifact: gate result.
5. **Confirm the next action still makes sense** in this session's context.
   Artifact: confirmed or revised next action.
6. **Take the action** or route it if the situation changed. Artifact: first
   step of the new work.

## Output

A reconciliation: recorded state, actual state, what still holds, the next
action. Then continue; do not re-plan work that is already agreed.

## Failure

- **No handoff exists.** Say so and reconstruct from git and the delivery file;
  mark the reconstruction as inferred.
- **The tree is mid-operation** (rebase, half migration) → `recovery`.
- **The next action is blocked.** Record the blocker and pick the next
  unblocked action from the plan, not an invented one.
