# Evaluation Scenario: recovery

**Skill:** recovery
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: State Assessment (Tier 1 - Deterministic)

**Objective:** Verify current state assessed correctly.

**Input:**
```
Interrupted session, partial changes
```

**Expected Behavior:**
- git status (uncommitted changes)
- git diff (what changed)
- Compares with checkpoint/runtime state
- Identifies partial/failed changes

**Acceptance Criteria:**
- [ ] git status run
- [ ] git diff analyzed
- [ ] Compared with checkpoint
- [ ] Partial/failed changes identified

---

## Scenario 2: Safe Baseline Determination (Tier 1 - Deterministic)

**Objective:** Verify safe baseline determined correctly.

**Input:**
```
Checkpoint: commit abc123, clean state
```

**Expected Behavior:**
- Identifies last known good commit (from checkpoint or evidence)
- Or: clean main branch
- Documents baseline

**Acceptance Criteria:**
- [ ] Baseline from checkpoint/evidence
- [ ] Or clean main branch
- [ ] Baseline documented

---

## Scenario 3: Recovery Plan (Tier 1 - Deterministic)

**Objective:** Verify recovery plan options evaluated.

**Input:**
```
Partial changes: 3 files modified, 1 partial commit
```

**Expected Options:**
- Option A: Revert to baseline (git checkout, git reset)
- Option B: Selectively undo failed changes
- Option C: Complete partial changes if viable
- Chooses safest option

**Acceptance Criteria:**
- [ ] All 3 options considered
- [ ] Safest option chosen
- [ ] Choice documented

---

## Scenario 4: Recovery Execution (Tier 1 - Deterministic)

**Objective:** Verify recovery executed and verified.

**Input:**
```
Chosen: Option A - revert to baseline
```

**Expected Behavior:**
- Applies chosen recovery action
- Cleans build artifacts, caches
- Restores config if modified

**Acceptance Criteria:**
- [ ] Recovery action applied
- [ ] Artifacts/caches cleaned
- [ ] Config restored

---

## Scenario 5: Safe State Verification (Tier 1 - Deterministic)

**Objective:** Verify safe state restored and verified.

**Input:**
```
Recovery executed
```

**Expected Behavior:**
- Runs baseline verification
- Confirms no residual broken state
- Updates checkpoint if needed

**Acceptance Criteria:**
- [ ] Baseline verification passes
- [ ] No residual broken state
- [ ] Checkpoint updated

---

## Scenario 5: Recovery Recorded (Tier 1 - Deterministic)

**Objective:** Verify recovery recorded in ledger.

**Input:**
```
Recovery completed
```

**Expected Record:**
- What failed
- Recovery action taken
- Baseline restored to
- Lessons for prevention

**Acceptance Criteria:**
- [ ] What failed recorded
- [ ] Recovery action recorded
- [ ] Baseline restored documented
- [ ] Lessons recorded

---

## Scenario 6: Escalation - No Safe Baseline (Tier 1 - Deterministic)

**Objective:** Verify escalation when baseline unknown.

**Input:**
```
Cannot determine safe baseline
```

**Expected Behavior:**
- Escalates to Lead
- Does not guess

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Does not guess

---

## Scenario 7: Escalation - Recovery Loses Significant Work (Tier 1 - Deterministic)

**Objective:** Verify escalation when recovery loses work.

**Input:**
```
Recovery would lose 2 days of work
```

**Expected Behavior:**
- Escalates to Lead
- Does not auto-recover

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Does not auto-recover

---

## Scenario 8: Fallback Without Checkpoint (Tier 1 - Deterministic)

**Objective:** Verify fallback using git log.

**Input:**
```
No checkpoint available
```

**Expected Behavior:**
- Uses git log to find last clean commit
- Manual recovery with documented steps
- Documents fallback

**Acceptance Criteria:**
- [ ] Uses git log
- [ ] Manual recovery documented
- [ ] Fallback documented

---

## Scenario 8: Fallback Without Plugin (Tier 1 - Deterministic)

**Objective:** Verify manual recovery without plugin.

**Input:**
```
No plugin available
```

**Expected Behavior:**
- Manual recovery with documented steps
- Documents fallback

**Acceptance Criteria:**
- [ ] Manual recovery with docs
- [ ] Fallback documented

---

## Scenario 9: Dependencies - unstick, resume, resume, decisions (Tier 1 - Deterministic)

**Objective:** Verify correct dependency routing.

**Expected Behavior:**
- unstick triggers recovery
- resume detects unsafe state
- resume provides checkpoint
- decisions records recovery

**Acceptance Criteria:**
- [ ] Unstick triggers recovery
- [ ] Session-pickup detects
- [ ] Context-reset provides checkpoint
- [ ] Ledger records recovery

---

## Scenario 10: Related Skills - unstick, resume, handoff, decisions (Tier 1 - Deterministic)

**Objective:** Verify related skill references.

**Expected Behavior:**
- References unstick (triggers)
- References resume (resume)
- References handoff (prevents)
- References decisions (records)

**Acceptance Criteria:**
- [ ] Unstick referenced
- [ ] Session-pickup referenced
- [ ] Safe-pause referenced
- [ ] Ledger referenced

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. State Assessment | 1 |  |  |
| 2. Safe Baseline | 1 |  |  |
| 3. Recovery Plan | 1 |  |  |
| 4. Recovery Execution | 1 |  |  |
| 5. Safe State Verification | 1 |  |  |
| 5. Recovery Record | 1 |  |  |
| 6. No Baseline Escalation | 1 |  |  |
| 7. Work Loss Escalation | 1 |  |  |
| 7. Fallback No Checkpoint | 1 |  |  |
| 8. Plugin Fallback | 1 |  |  |
| 8. Dependencies | 1 |  |  |
| 9. Related Skills | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/11 PASS
- **Skill Status:** ___