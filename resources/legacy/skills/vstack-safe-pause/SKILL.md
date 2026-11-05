---
name: handoff
description: Leave work in a clean, resumable and non-misleading state
lifecycle: draft
---

# handoff

## Purpose / Outcome

Executes a planned, clean work suspension: completes current verification, updates checkpoint, cleans workspace, records pause with metadata, verifies resumability.

---

## When to Use (Positive Triggers)

- Ending a session with work in progress
- Before context window reset
- When Extended execution profile active

---

## When Not to Use (Negative Triggers)

- When work is complete and verified
- For Quick mode tasks (no pause needed)

---

## Required Context / Inputs

- Current work state
- Checkpoint (PROGRESS.md)
- Runtime state (if plugin available)

---

## Preconditions

- Meaningful progress made
- Verification status known

---

## Procedure

### Step 1: Complete Current Verification Cycle

- Don't pause mid-check
- Finish current step or revert to last clean state

### Step 2: Update Checkpoint

- Run resume to update PROGRESS.md
- Include: exact next action, verified work, open questions, blockers
- Record: branch, commit, uncommitted changes

### Step 3: Clean Workspace

- Stash or commit uncommitted changes with clear message
- Clean build artifacts, temp files
- Note any intentional dirty state

### Step 4: Record Pause

- Timestamp
- Reason for pause
- Expected resume time (if known)
- Any external side effects (running services, test data)

### Step 5: Verify Resumability

- Next action is specific and actionable
- No ambiguous state
- Checkpoint matches repository state

---

## Expected Outputs

- Updated PROGRESS.md
- Clean or documented workspace
- Pause record in ledger/runtime

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- resume would resume cleanly
- No partial/failed changes left ambiguous
- Next action unambiguous

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Cannot reach clean state | recovery before pause |
| External side effects unmanageable | Escalate to Lead |
| Verification mid-cycle | Complete or revert, then pause |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Work paused cleanly
- Time-boxed (default: 10-15 min)

---

## Escalation

- Cannot reach clean state → recovery before pause
- External side effects unmanageable → escalate to Lead

---

## Fallback

- Without plugin: manual PROGRESS.md update
- Without checkpoint: detailed git commit message

---

## Skill / Role / Tool Routing

- **Skills invoked:** resume (checkpoint update), decisions (pause record), resume (resume)
- **Roles:** Builder (pauses), Lead (if escalation)
- **Tools:** git, PROGRESS.md, runtime state
- **References:** None

---

## Examples

### Example: End-of-Day Pause

**State:** Mid-implementation of user profile feature
**Pause:** Verification cycle complete, PROGRESS.md updated with next action (add avatar upload), git stash with message "WIP: profile feature - avatar upload next", pause recorded with expected resume tomorrow

---

## Dependencies / References

- **Principles:** Evidence Before Assertions, Clear Source of Responsibility, Degrade Gracefully
- **Skills:** resume, decisions, resume, recovery
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/handoff/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 5-step procedure, verification completion before pause, checkpoint update, workspace cleaning, pause metadata, resumability verification
- **Procedures rewritten:** Explicit step structure, external side effects tracking, fallback procedures
- **Disposition:** rewrite
- **Research record:** docs/research/records/handoff.md