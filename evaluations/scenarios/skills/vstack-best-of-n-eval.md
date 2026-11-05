# Evaluation Scenario: red-team

**Skill:** red-team
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Rubric Defined Before Generation (Tier 1 - Deterministic)

**Objective:** Verify rubric is defined before candidates are generated.

**Input:**
```
Task: Implement deduplication for 10M records
```

**Expected Behavior:**
- Defines common task with acceptance criteria
- Defines comparison rubric (correctness, simplicity, performance, maintainability, testability)
- Defines weights per criterion
- Defines PASS/FAIL thresholds
- Rubric defined BEFORE candidate generation

**Acceptance Criteria:**
- [ ] Common task defined
- [ ] Rubric with 5 criteria
- [ ] Weights per criterion
- [ ] PASS/FAIL thresholds
- [ ] Rubric before candidates

---

## Scenario 2: Candidate Generation Isolation (Tier 1 - Deterministic)

**Objective:** Verify candidates generated in isolated workspaces.

**Input:**
```
3 candidates for deduplication task
```

**Expected Behavior:**
- Default: 3 independent attempts
- Each in isolated workspace
- Same base commit, same constraints
- Same brief for all

**Acceptance Criteria:**
- [ ] 3 candidates generated
- [ ] Each isolated
- [ ] Same base commit
- [ ] Same constraints

---

## Scenario 3: Evidence-Based Evaluation (Tier 1 - Deterministic)

**Objective:** Verify evaluation based on evidence, not descriptions.

**Input:**
```
3 candidates produced
```

**Expected Behavior:**
- Runs equivalent verification on each
- Scores against rubric
- Compares actual code and evidence (not just descriptions)

**Acceptance Criteria:**
- [ ] Equivalent verification run
- [ ] Scores against rubric
- [ ] Code/evidence compared

---

## Scenario 4: Selection and Integration (Tier 1 - Deterministic)

**Objective:** Verify selection chooses strongest or combines improvements.

**Input:**
```
Candidate 1: Hash-based (PASS, 2.3s, simple)
Candidate 2: Sort-based (PASS, 4.1s, moderate)
Candidate 3: Bloom filter (FAIL correctness)
```

**Expected Behavior:**
- Chooses strongest or combines improvements
- Re-runs full verification on final result
- Records selection rationale

**Acceptance Criteria:**
- [ ] Selects strongest or combines
- [ ] Full verification re-run
- [ ] Rationale recorded

---

## Scenario 5: Clean Up Non-Selected (Tier 1 - Deterministic)

**Objective:** Verify non-selected candidates discarded.

**Input:**
```
Selection made
```

**Expected Behavior:**
- Discards non-selected candidate workspaces
- Keeps selected candidate's changes

**Acceptance Criteria:**
- [ ] Non-selected discarded
- [ ] Selected kept

---

## Scenario 5: Fallback Without Isolation (Tier 1 - Deterministic)

**Objective:** Verify fallback when isolation unavailable.

**Input:**
```
No worktree support
```

**Expected Behavior:**
- Sequential candidate generation
- Documents fallback used

**Acceptance Criteria:**
- [ ] Sequential fallback
- [ ] Fallback documented

---

## Scenario 6: No Candidate Meets Threshold (Tier 1 - Deterministic)

**Objective:** Verify return to architect when no candidate passes.

**Input:**
```
All candidates FAIL rubric thresholds
```

**Expected Behavior:**
- Returns to design
- Does not force selection

**Acceptance Criteria:**
- [ ] Returns to architect
- [ ] No forced selection

---

## Scenario 7: All Candidates Fail (Tier 1 - Deterministic)

**Objective:** Verify escalation when all fail.

**Input:**
```
All candidates fail verification
```

**Expected Behavior:**
- Escalates to Lead
- Documents failure

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Failure documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Rubric Before Generation | 1 |  |  |
| 2. Candidate Isolation | 1 |  |  |
| 3. Evidence-Based Evaluation | 1 |  |  |
| 4. Selection + Integration | 1 |  |  |
| 5. Clean Up | 1 |  |  |
| 5. Isolation Fallback | 1 |  |  |
| 6. No Candidate Passes | 1 |  |  |
| 7. All Fail | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/8 PASS
- **Skill Status:** ___