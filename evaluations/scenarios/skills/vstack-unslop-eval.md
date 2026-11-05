# Evaluation Scenario: unslop

**Skill:** unslop
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Slop Pattern Identification (Tier 1 - Deterministic)

**Objective:** Verify slop patterns correctly identified.

**Input:**
```
New auth feature with generated boilerplate
```

**Expected Patterns Detected:**
- Generated boilerplate not adapted to context
- Duplicated logic (DRY violations)
- Over-engineered abstractions (YAGNI)
- Dead code (unused imports, functions, parameters)
- Inconsistent naming/conventions
- Excessive nesting/conditionals

**Acceptance Criteria:**
- [ ] Boilerplate detected
- [ ] Duplication detected
- [ ] Over-abstraction detected
- [ ] Dead code detected
- [ ] Inconsistency detected
- [ ] Excessive nesting detected

---

## Scenario 2: Impact Prioritization (Tier 1 - Deterministic)

**Objective:** Verify prioritization by impact.

**Input:**
```
Multiple slop patterns found
```

**Expected Priority:**
- High: duplicated logic, dead code, inconsistency
- Medium: over-abstraction, boilerplate
- Low: style nits (handled by linter)

**Acceptance Criteria:**
- [ ] High: duplication, dead code, inconsistency
- [ ] Medium: over-abstraction, boilerplate
- [ ] Low: style nits (linter)

---

## Scenario 3: Incremental Cleanup with Verification (Tier 1 - Deterministic)

**Objective:** Verify cleanup done incrementally with verification.

**Input:**
```
Slop: unused imports, duplicated validation logic
```

**Expected Behavior:**
- One pattern at a time
- Verify after each cleanup
- Commit separately from feature work

**Acceptance Criteria:**
- [ ] One pattern at a time
- [ ] Verifies after each
- [ ] Separate commits

---

## Scenario 4: Verify No Regression (Tier 1 - Deterministic)

**Objective:** Verify no behavioural changes after cleanup.

**Input:**
```
Cleanup completed
```

**Expected Behavior:**
- Runs full verification suite
- Checks for behavioural changes
- Ensures linting passes

**Acceptance Criteria:**
- [ ] All verifications pass
- [ ] No behavioural changes
- [ ] Linting passes

---

## Scenario 5: Escalation - Cleanup Breaks Verification (Tier 1 - Deterministic)

**Objective:** Verify escalation when cleanup breaks verification.

**Input:**
```
Cleanup causes test failure
```

**Expected Behavior:**
- Reverts cleanup
- Diagnoses cause
- Does not proceed with broken code

**Acceptance Criteria:**
- [ ] Reverts
- [ ] Diagnoses
- [ ] Does not proceed broken

---

## Scenario 6: Escalation - Uncertain Behavioural Impact (Tier 1 - Deterministic)

**Objective:** Verify escalation when behavioural impact uncertain.

**Input:**
```
Uncertain if cleanup changes behaviour
```

**Expected Behavior:**
- Invokes refactor with full verification
- Does not guess
- Documents uncertainty

**Acceptance Criteria:**
- [ ] Invokes refactor with full verification
- [ ] Does not guess
- [ ] Uncertainty documented

---

## Scenario 6: Fallback Without Time (Tier 1 - Deterministic)

**Objective:** Verify fallback when no time for cleanup.

**Input:**
```
No time for cleanup
```

**Expected Behavior:**
- Documents slop as tech debt in decisions
- Does not skip cleanup entirely
- Schedules for later

**Acceptance Criteria:**
- [ ] Documents as tech debt
- [ ] Does not skip
- [ ] Schedules for later

---

## Scenario 7: Verification - All Verifications Pass (Tier 1 - Deterministic)

**Objective:** Verify all verifications pass after cleanup.

**Input:**
```
Cleanup completed
```

**Expected Behavior:**
- All verifications pass
- No behavioural changes
- Measurable improvement (lines, complexity, duplication)

**Acceptance Criteria:**
- [ ] All verifications pass
- [ ] No behavioural changes
- [ ] Measurable improvement

---

## Scenario 7: Verification - No Behavioural Changes (Tier 1 - Deterministic)

**Objective:** Verify no behavioural changes.

**Verification Method:**
- Runs full test suite
- Compares outputs with baseline
- No functional changes

**Acceptance Criteria:**
- [ ] Full test suite passes
- [ ] Outputs match baseline
- [ ] No functional changes

---

## Scenario 8: Verification - Measurable Improvement (Tier 1 - Deterministic)

**Objective:** Verify measurable improvement.

**Verification Method:**
- Lines of code reduced
- Cyclomatic complexity reduced
- Duplication reduced

**Acceptance Criteria:**
- [ ] Lines reduced
- [ ] Complexity reduced
- [ ] Duplication reduced

---

## Scenario 9: Separate Cleanup Commits (Tier 1 - Deterministic)

**Objective:** Verify cleanup commits separate from feature work.

**Input:**
```
Cleanup completed
```

**Expected Behavior:**
- Cleanup commits separate from feature commits
- Each commit: one pattern cleanup
- Clear commit messages

**Acceptance Criteria:**
- [ ] Separate commits
- [ ] One pattern per commit
- [ ] Clear messages

---

## Scenario 10: Escalation - Cleanup Breaks Verification (Tier 1 - Deterministic)

**Objective:** Verify escalation when cleanup breaks verification.

**Input:**
```
Cleanup causes test failure
```

**Expected Behavior:**
- Reverts cleanup
- Diagnoses cause
- Does not proceed with broken code

**Acceptance Criteria:**
- [ ] Reverts
- [ ] Diagnoses
- [ ] Does not proceed broken

---

## Scenario 11: Escalation - Uncertain Behavioural Impact (Tier 1 - Deterministic)

**Objective:** Verify escalation when behavioural impact uncertain.

**Input:**
```
Uncertain if cleanup changes behaviour
```

**Expected Behavior:**
- Invokes refactor with full verification
- Does not guess
- Documents uncertainty

**Acceptance Criteria:**
- [ ] Invokes refactor with full verification
- [ ] Does not guess
- [ ] Uncertainty documented

---

## Scenario 12: Fallback Without Time (Tier 1 - Deterministic)

**Objective:** Verify fallback when no time for cleanup.

**Input:**
```
No time for cleanup
```

**Expected Behavior:**
- Documents slop as tech debt in decisions
- Does not skip cleanup entirely
- Schedules for later

**Acceptance Criteria:**
- [ ] Documents as tech debt
- [ ] Does not skip
- [ ] Schedules for later

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Slop Pattern Identification | 1 |  |  |
| 2. Impact Prioritization | 1 |  |  |
| 3. Incremental Cleanup | 1 |  |  |
| 4. No Regression | 1 |  |  |
| 5. Escalation: Breaks Verification | 1 |  |  |
| 6. Escalation: Uncertain Impact | 1 |  |  |
| 6. Fallback Without Time | 1 |  |  |
| 7. All Verifications Pass | 1 |  |  |
| 7. No Behavioural Changes | 1 |  |  |
| 8. Measurable Improvement | 1 |  |  |
| 9. Separate Commits | 1 |  |  |
| 10. Escalation: Breaks Verification | 1 |  |  |
| 11. Escalation: Uncertain Impact | 1 |  |  |
| 12. Fallback Without Time | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/14 PASS
- **Skill Status:** ___