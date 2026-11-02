---
name: vstack-session-pickup
description: "Resume or take over in-flight work from prior session: validate checkpoint, revalidate completed work, confirm next action"
lifecycle: draft
---

# vstack-session-pickup

## Purpose / Outcome

Validates and resumes work from a prior session. Reads PROGRESS.md, verifies git state matches, re-runs tests for completed tasks, confirms next action, re-invokes vstack-mode.

---

## When to Use (Positive Triggers)

- "Continue from yesterday" / "Resume work"
- "Pick up where we left off"
- New session after vstack-safe-pause
- Taking over another agent's in-flight work

---

## When Not to Use (Negative Triggers)

- Starting fresh work → vstack-mode
- Creating checkpoint → vstack-safe-pause
- Debugging → vstack-debug

---

## Required Context / Inputs

- PROGRESS.md checkpoint file
- Git repository access
- Project test commands
- vstack-ledger for decision trail (if available)

---

## Preconditions

- PROGRESS.md exists and names current plan
- Git history available for validation

---

## Procedure

### Step 1: Validate Checkpoint

- Read PROGRESS.md — first line names current plan
- Verify git state matches:
  - Tasks marked "complete" have commits in git
  - BASE commits match ledger (if vstack-ledger used)
  - No uncommitted work from completed tasks
- If mismatch: investigate, document, do not assume

### Step 2: Revalidate Completed Work

- Run project tests for completed task scope
- Evidence from completed tasks still valid
- No regression from external changes (deps, env, parallel work)
- Record: REVALIDATED / REGRESSION_DETECTED / INCONCLUSIVE

### Step 3: Confirm Next Action

- Identify what was in progress (last IN_PROGRESS or BLOCKED task)
- Identify what's next in playbook sequence
- Check for blockers recorded in checkpoint
- Confirm: next action is specific, actionable, ordered

### Step 4: Handle Context Compaction

- Trust ledger + git log over memory
- If context was compacted: ledger is source of truth
- Re-read key decisions from ledger if needed

### Step 5: Re-invoke vstack-mode

- With validated state and confirmed next action
- vstack-mode continues from Step 6 (checklist) or Step 7 (execution)

---

## Expected Outputs

- Validated checkpoint status (VALID / MISMATCH / INVESTIGATING)
- Revalidation results per completed task
- Confirmed next action
- vstack-mode re-invocation

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- PROGRESS.md first line names plan
- Completed tasks have matching commits
- BASE commits match ledger
- Revalidation passes for completed tasks
- Next action correctly identified
- Context compaction handled (trust ledger/git)

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| No PROGRESS.md | Report INVESTIGATING, check git log for recent work |
| Git state mismatch | Document mismatch, investigate before proceeding |
| Revalidation fails | REGRESSION_DETECTED — debug before continuing |
| Next action unclear | BLOCKED — ask user or re-run vstack-figure-it-out |
| Orphaned checkpoint | INVESTIGATING — check git log, ledger, ask user |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Checkpoint validated
- Completed work revalidated
- Next action confirmed
- vstack-mode re-invoked

---

## Escalation

- User decision required: checkpoint mismatch, regression, orphaned checkpoint
- Lead decision required: playbook selection after pickup

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-ledger (read), vstack-mode (re-invoke), vstack-verify-loop (revalidation)
- **Roles:** Builder (resumes), Lead (if escalation needed)
- **Tools:** git, test commands, PROGRESS.md, ledger
- **References:** None

---

## Examples

### Example: Normal Resume

**Previous session:** Completed tasks 1-3 of feature-delivery, task 4 IN_PROGRESS

**Pickup:**
1. PROGRESS.md: plan = feature-delivery, tasks 1-3 complete, task 4 in progress
2. Git: commits for tasks 1-3 present, BASE matches
3. Revalidate: `npm test -- --grep "task-1|task-2|task-3"` → all pass
4. Next action: continue task 4 (implement login endpoint)
5. Re-invoke vstack-mode → continues from checklist

### Example: Regression Detected

**Pickup:**
1. Checkpoint valid
2. Revalidate: task 2 test now fails (external dep update)
3. Record: REGRESSION_DETECTED
4. Debug regression before continuing task 4

---

## Dependencies / References

- **Principles:** Prove It Works, Procedures Over Vague
- **Skills:** vstack-ledger, vstack-mode, vstack-verify-loop, vstack-safe-pause
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-session-pickup/SKILL.md (was playbook)
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** PROGRESS.md validation, git state matching, revalidation, catchup as subroutine (merged), next action confirmation, context compaction handling
- **Procedures rewritten:** Explicit validation steps, revalidation with test commands, context compaction rule, re-invocation point
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-session-pickup.md