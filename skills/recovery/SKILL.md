---
name: recovery
description: Use when work was interrupted mid-operation or a change must be undone, and the system must return to a known-good state before anything else; not for pausing safely (handoff) or for re-verifying finished work (verify).
tier: continuity
rigor: rigid
status: stable
pairs-with: [handoff, verify, migration]
---

# recovery

Return to a state you can name. Restore first, diagnose second, re-plan third.
No new features during recovery.

## When to use

- A migration, deploy or rebase stopped halfway.
- A change broke production and must be reverted.
- The working tree is in an unknown state after a crash.
- A script ran twice and wrote partial data.
- Tests fail everywhere and the cause is unknown.

Near misses:

- The state is known-good and work pauses → `handoff`.
- The state is known-good and work finished → `verify`.
- The cause must be found → `debug` after recovery.

## Modes

| Mode | Scope |
|---|---|
| Revert | undo one change to the last good commit |
| Restore | data or environment from backup or snapshot |
| Isolation | stop the bleeding, keep the system up, then restore |

`rigor: rigid` — name the target state before acting, and prove you reached it.
Recovery without a target is more change.

## Steps

1. **Name the target state** — commit, snapshot, version or row count — and how
   it will be proven. Artifact: `target`.
2. **Stop the source of change**: pause the job, disable the flag, halt the
   deploy. Artifact: stopped evidence.
3. **Preserve evidence** before overwriting: logs, dumps, the failing commit.
   Artifact: evidence archive path.
4. **Apply the reversal** by the documented path; if none exists, the smallest
   reversible step. Artifact: command log.
5. **Prove the target state** with the check from step 1. Artifact: proof.
6. **Record the incident**: timeline, cause (if known), and what was restored.
   Artifact: incident note.
7. **Hand back** to `handoff` or `debug`; recovery does not fix the cause.

## Output

The target state, proof of reaching it, preserved evidence, and the incident
note. A reader can tell what was lost, if anything.

## Failure

- **No target state is known.** Stop and ask; guessing a restore point is how
  one incident becomes two.
- **Reversal would lose data.** Preserve first, then choose between restore
  and forward-fix with the owner.
- **The reversal fails.** Escalate with the evidence and the exact step that
  failed; do not iterate on production state alone.

## Rationalizations

| Excuse | Reality |
|---|---|
| "Let me just fix forward quickly." | Forward-fix is a choice; make it after preserving evidence. |
| "Backups are probably fine." | Prove the restore point before relying on it. |
| "No time to record, we are down." | One line now saves the postmortem; recording is not the delay. |
| "The revert will be clean." | Prove the target state; clean reverts are the exception. |

## Tracking

- **OpenChamber present:** `focus_status` "blocked" until the target is reached;
  incident note on the delivery.
- **OpenCode or files:** `docs/incidents/<date>-<slug>.md`.
- Ladder: `resources/tracking.md`.

## Verification

```bash
docker compose run --rm pack node tools/validate.js
```
