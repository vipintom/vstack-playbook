# Evaluation Scenario: vstack-refactor

**Skill:** vstack-refactor
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Behaviour Baseline Established (Tier 1 - Deterministic)

**Objective:** Verify behaviour baseline established before refactoring.

**Input:**
```
Target code identified for refactoring
```

**Expected Behavior:**
- Runs full verification suite
- Records current outputs/behaviour
- Identifies behaviour that must be preserved

**Acceptance Criteria:**
- [ ] Full verification suite run
- [ ] Current outputs recorded
- [ ] Behaviour to preserve identified

---

## Scenario 2: Refactoring Steps Planned (Tier 1 - Deterministic)

**Objective:** Verify refactoring steps planned as small, safe transformations.

**Input:**
```
Refactoring goal: extract service layer
```

**Expected Behavior:**
- Decomposes into small, safe transformations
- Each step: one structural change, same verification
- Order: extract -> rename -> reorganize -> generalize

**Acceptance Criteria:**
- [ ] Small, safe transformations
- [ ] One structural change per step
- [ ] Order: extract -> rename -> reorganize -> generalize
- [ ] Same verification each step

---

## Scenario 3: Incremental Execution with Verification (Tier 1 - Deterministic)

**Objective:** Verify incremental execution with verification at each step.

**Input:**
```
Step 1: Extract service class
```

**Expected Behavior:**
- For each step: change -> verify -> commit
- If verification fails: revert, diagnose, retry
- Never weakens verification to pass

**Acceptance Criteria:**
- [ ] Change -> verify -> commit per step
- [ ] Revert on failure
- [ ] Diagnoses and retries
- [ ] Never weakens verification

---

## Scenario 4: Equivalence Verification (Tier 1 - Deterministic)

**Objective:** Verify equivalence verified after each commit.

**Input:**
```
After each refactoring step
```

**Expected Behavior:**
- Runs full verification suite after each commit
- Runs broader regression tests
- Compares outputs with baseline where applicable

**Acceptance Criteria:**
- [ ] Full suite after each commit
- [ ] Broader regression tests
- [ ] Outputs compared with baseline

---

## Scenario 5: Documentation of Changes (Tier 1 - Deterministic)

**Objective:** Verify changes documented.

**Input:**
```
Refactoring completed
```

**Expected Behavior:**
- Documents what restructured and why
- Evidence of behavioural equivalence
- Any edge cases discovered

**Acceptance Criteria:**
- [ ] What restructured and why
- [ ] Equivalence evidence
- [ ] Edge cases documented

---

## Scenario 6: Verification - All Original Verifications Pass (Tier 1 - Deterministic)

**Objective:** Verify all original verifications pass.

**Input:**
```
Refactoring complete
```

**Expected Behavior:**
- All original verifications pass
- No behavioural changes
- Code structure improved (measurable: complexity, duplication, coupling)

**Acceptance Criteria:**
- [ ] All original verifications pass
- [ ] No behavioural changes
- [ ] Structure improved measurably

---

## Scenario 7: Stop Conditions (Tier 1 - Deterministic)

**Objective:** Verify stop conditions respected.

**Test Cases:**
| Condition | Expected |
|-----------|----------|
| Goal achieved | Stops |
| All verifications pass | Stops |
| Time-boxed (1-2 hrs/session) | Stops |

**Acceptance Criteria:**
- [ ] Stops when goal achieved
- [ ] Stops when verifications pass
- [ ] Stops at time-box

---

## Scenario 8: Escalation - Verification Fails Repeatedly (Tier 1 - Deterministic)

**Objective:** Verify escalation on repeated verification failures.

**Input:**
```
3 verification failures on same step
```

**Expected Behavior:**
- Reverts
- Diagnoses
- Invokes vstack-unstick

**Acceptance Criteria:**
- [ ] Reverts
- [ ] Diagnoses
- [ ] Invokes unstick

---

## Scenario 9: Escalation - Behavioural Difference Found (Tier 1 - Deterministic)

**Objective:** Verify escalation on behavioural difference.

**Input:**
```
Behavioural difference found after refactor
```

**Expected Behavior:**
- Reverts
- Analyzes difference
- Decides: continue/abort

**Acceptance Criteria:**
- [ ] Reverts
- [ ] Analyzes
- [ ] Decides continue/abort

---

## Scenario 10: Fallback Without Full Verification (Tier 1 - Deterministic)

**Objective:** Verify fallback without full verification.

**Input:**
```
No full verification suite available
```

**Expected Behavior:**
- Manual equivalence testing with documented evidence
- Documents fallback
- Does not skip verification

**Acceptance Criteria:**
- [ ] Manual equivalence testing
- [ ] Evidence documented
- [ ] Fallback documented

---

## Scenario 11: Dependencies - vstack-verify-loop, vstack-incremental-build, vstack-unslop (Tier 1 - Deterministic)

**Objective:** Verify correct dependency routing.

**Expected Behavior:**
- vstack-verify-loop for verification discipline
- vstack-incremental-build for step size
- vstack-unslop for cleanup identification

**Acceptance Criteria:**
- [ ] Verify-loop referenced
- [ ] Incremental-build referenced
- [ ] Unslop referenced

---

## Scenario 12: Related Skills - vstack-incremental-build, vstack-unslop, vstack-verify-loop (Tier 1 - Deterministic)

**Objective:** Verify related skill references.

**Expected Behavior:**
- References vstack-incremental-build (implementation discipline)
- References vstack-unslop (cleanup)
- References vstack-verify-loop (evidence)

**Acceptance Criteria:**
- [ ] Incremental-build referenced
- [ ] Unslop referenced
- [ ] Verify-loop referenced

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Baseline Established | 1 |  |  |
| 2. Steps Planned | 1 |  |  |
| 3. Incremental + Verify | 1 |  |  |
| 4. Equivalence Verified | 1 |  |  |
| 5. Documentation | 1 |  |  |
| 6. All Verifications Pass | 1 |  |  |
| 7. Stop Conditions | 1 |  |  |
| 8. Verification Failures Escalation | 1 |  |  |
| 9. Behavioural Difference Escalation | 1 |  |  |
| 10. Fallback Without Verification | 1 |  |  |
| 11. Dependencies | 1 |  |  |
| 12. Related Skills | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/12 PASS
- **Skill Status:** ___