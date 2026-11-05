# Evaluation Scenario: resume

**Skill:** resume
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Valid Checkpoint with Matching Git State (Tier 1 - Deterministic)

**Objective:** Verify valid checkpoint with matching git state.

**Input:**
```
PROGRESS.md: plan = feature-delivery, tasks 1-3 complete, task 4 in progress
Git: commits for tasks 1-3 present, BASE matches ledger
```

**Expected Behavior:**
- Checkpoint status: VALID
- Plan name identified
- Completed tasks have matching commits
- BASE commits match ledger

**Acceptance Criteria:**
- [ ] Status = VALID
- [ ] Plan name from PROGRESS.md first line
- [ ] Completed tasks have commits
- [ ] BASE commits match ledger
- [ ] No uncommitted work from completed tasks

---

## Scenario 2: Revalidation Passes for Completed Tasks (Tier 1 - Deterministic)

**Objective:** Verify revalidation runs tests for completed tasks.

**Input:**
```
Completed tasks: 1-3 (auth, registration, logout)
Test command: npm test -- --grep "auth|registration|logout"
```

**Expected Behavior:**
- Runs project tests for completed task scope
- All tests pass
- Records: REVALIDATED

**Acceptance Criteria:**
- [ ] Tests run for completed scope
- [ ] All pass
- [ ] Status = REVALIDATED

---

## Scenario 3: Regression Detected (Tier 1 - Deterministic)

**Objective:** Verify regression detection.

**Input:**
```
Completed task 2 test now fails (external dep update)
```

**Expected Behavior:**
- Test run for task 2 fails
- Records: REGRESSION_DETECTED
- Does not proceed to next action
- Debug before continuing

**Acceptance Criteria:**
- [ ] Status = REGRESSION_DETECTED
- [ ] Does not continue to next action
- [ ] Debugs before continuing

---

## Scenario 4: Next Action Correctly Identified (Tier 1 - Deterministic)

**Objective:** Verify next action correctly identified from checkpoint.

**Input:**
```
PROGRESS.md: task 4 IN_PROGRESS (implement login endpoint)
```

**Expected Behavior:**
- Identifies task 4 as in progress
- Next action: continue task 4
- Specific, actionable, ordered

**Acceptance Criteria:**
- [ ] In-progress task identified
- [ ] Next action specific and actionable
- [ ] Ordered correctly

---

## Scenario 5: Context Compaction Handled (Tier 1 - Deterministic)

**Objective:** Verify trust ledger + git log over memory.

**Input:**
```
Context was compacted
Ledger has decisions, PROGRESS.md has state
```

**Expected Behavior:**
- Trusts ledger + git log over memory
- Re-reads key decisions from ledger if needed
- Does NOT rely on compacted context

**Acceptance Criteria:**
- [ ] Trusts ledger/git over memory
- [ ] Re-reads from ledger if needed
- [ ] Does not assume memory accurate

---

## Scenario 6: Orphaned Checkpoint Handled (Tier 1 - Deterministic)

**Objective:** Verify orphaned checkpoint investigated.

**Input:**
```
PROGRESS.md exists but no matching git commits
```

**Expected Behavior:**
- Status: INVESTIGATING
- Checks git log for recent work
- Checks ledger
- Asks user if needed

**Acceptance Criteria:**
- [ ] Status = INVESTIGATING
- [ ] Checks git log
- [ ] Checks ledger
- [ ] Asks user if unresolved

---

## Scenario 7: No PROGRESS.md (Tier 1 - Deterministic)

**Objective:** Verify handling of missing checkpoint.

**Input:**
```
No PROGRESS.md file
```

**Expected Behavior:**
- Status: INVESTIGATING
- Checks git log for recent work
- Does not assume

**Acceptance Criteria:**
- [ ] Status = INVESTIGATING
- [ ] Checks git log
- [ ] Does not assume

---

## Scenario 8: Re-invokes route (Tier 1 - Deterministic)

**Objective:** Verify re-invokes route for next phase.

**Input:**
```
Checkpoint validated, next action confirmed
```

**Expected Behavior:**
- Re-invokes route
- Continues from Step 6 (checklist) or Step 7 (execution)
- Does not re-run Phase 1-5

**Acceptance Criteria:**
- [ ] route re-invoked
- [ ] Continues from Step 6 or 7
- [ ] Does not re-run earlier phases

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Valid Checkpoint | 1 |  |  |
| 2. Revalidation Passes | 1 |  |  |
| 3. Regression Detected | 1 |  |  |
| 4. Next Action | 1 |  |  |
| 5. Context Compaction | 1 |  |  |
| 6. Orphaned Checkpoint | 1 |  |  |
| 7. No PROGRESS.md | 1 |  |  |
| 8. Re-invokes Mode | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/8 PASS
- **Skill Status:** ___