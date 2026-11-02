# Evaluation Scenario: vstack-catchup

**Skill:** vstack-catchup
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Checkpoint Reading (Tier 1 - Deterministic)

**Objective:** Verify PROGRESS.md read and parsed.

**Input:**
```
PROGRESS.md with plan, completed tasks, in-progress task
```

**Expected Behavior:**
- Reads PROGRESS.md
- Identifies goal, acceptance criteria, next action, open questions, key facts, decisions, failed approaches, verification status

**Acceptance Criteria:**
- [ ] PROGRESS.md read
- [ ] All fields extracted

---

## Scenario 2: Repository State Validation (Tier 1 - Deterministic)

**Objective:** Verify git status matches checkpoint.

**Input:**
```
Git branch: feature/auth, commit abc123, 2 uncommitted files
Checkpoint: branch feature/auth, commit abc123, 1 uncommitted
```

**Expected Behavior:**
- Runs git status
- Compares with checkpoint
- Notes discrepancies (1 extra uncommitted file)

**Acceptance Criteria:**
- [ ] git status run
- [ ] Branch matches
- [ ] Commit matches
- [ ] Discrepancies noted

---

## Scenario 3: Runtime State Check (Tier 1 - Deterministic)

**Objective:** Verify runtime state checked if plugin available.

**Input:**
```
Plugin available with active deliveries
```

**Expected Behavior:**
- Checks active deliveries and tasks
- Checks current task assignments
- Checks recent evidence/verification
- Checks recent decisions/recovery attempts

**Acceptance Criteria:**
- [ ] Active deliveries checked
- [ ] Task assignments checked
- [ ] Evidence/verification checked
- [ ] Decisions/recovery checked

---

## Scenario 4: Reconcile Checkpoint vs Reality (Tier 1 - Deterministic)

**Objective:** Verify reconciliation logic.

**Test Cases:**
| Checkpoint | Reality | Expected |
|------------|---------|----------|
| Matches | Matches | Proceed from next action |
| Differs | Differs | Investigate discrepancies |
| Stale | Stale | Investigate stale records |

**Acceptance Criteria:**
- [ ] Match = proceed
- [ ] Diff = investigate
- [ ] Stale = investigate

---

## Scenario 5: Update Checkpoint (Tier 1 - Deterministic)

**Objective:** Verify checkpoint updated if discrepancies found.

**Input:**
```
Discrepancy: task completed externally
```

**Expected Behavior:**
- Records stale information
- Updates next action if work completed
- Notes new blockers/decisions

**Acceptance Criteria:**
- [ ] Stale info recorded
- [ ] Next action updated
- [ ] New blockers/decisions noted

---

## Scenario 6: Current State Summary (Tier 1 - Deterministic)

**Objective:** Verify complete state summary produced.

**Expected Output:**
- Goal
- Exact next action
- Open questions/blockers
- Key facts still relevant

**Acceptance Criteria:**
- [ ] Goal stated
- [ ] Next action exact
- [ ] Questions/blockers listed
- [ ] Key facts listed

---

## Scenario 6: Verification (Tier 1 - Deterministic)

**Objective:** Verify checkpoint accuracy and next action validity.

**Expected Checks:**
- Checkpoint accurately reflects repo state
- Next action specific and actionable
- No stale work reported as completed

**Acceptance Criteria:**
- [ ] Checkpoint accuracy verified
- [ ] Next action specific
- [ ] No stale work

---

## Scenario 7: Escalation - Major Discrepancy (Tier 1 - Deterministic)

**Objective:** Verify escalation on major discrepancy.

**Input:**
```
Major mismatch between checkpoint and reality
```

**Expected Behavior:**
- Escalates to Lead
- Does not proceed

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Does not proceed

---

## Scenario 8: Escalation - Cannot Determine State (Tier 1 - Deterministic)

**Objective:** Verify escalation when state unclear.

**Input:**
```
Cannot determine current state from evidence
```

**Expected Behavior:**
- Escalates to Lead
- Does not guess

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Does not guess

---

## Scenario 8: Fallback Without Plugin (Tier 1 - Deterministic)

**Objective:** Verify fallback without plugin.

**Input:**
```
No plugin available
```

**Expected Behavior:**
- Relies on PROGRESS.md and git only
- Documents fallback

**Acceptance Criteria:**
- [ ] Uses PROGRESS.md and git
- [ ] Fallback documented

---

## Scenario 9: Fallback Without Checkpoint (Tier 1 - Deterministic)

**Objective:** Verify reconstruction from git history.

**Input:**
```
No PROGRESS.md
```

**Expected Behavior:**
- Reconstructs from git history and memory
- Documents reconstruction

**Acceptance Criteria:**
- [ ] Reconstructs from git
- [ ] Documents reconstruction

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Checkpoint Reading | 1 |  |  |
| 2. Repo State Validation | 1 |  |  |
| 3. Runtime State | 1 |  |  |
| 4. Reconcile | 1 |  |  |
| 5. Update Checkpoint | 1 |  |  |
| 6. State Summary | 1 |  |  |
| 7. Verification | 1 |  |  |
| 7. Escalation Discrepancy | 1 |  |  |
| 8. Escalation Unknown | 1 |  |  |
| 8. Plugin Fallback | 1 |  |  |
| 9. Checkpoint Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/11 PASS
- **Skill Status:** ___