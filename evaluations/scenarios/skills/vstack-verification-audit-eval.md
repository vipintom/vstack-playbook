# Evaluation Scenario: vstack-verification-audit

**Skill:** vstack-verification-audit
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Acceptance Criteria to Verification Mapping (Tier 1 - Deterministic)

**Objective:** Verify all acceptance criteria mapped to verification.

**Input:**
```
Delivery: User authentication (login, register, logout, protected routes)
Acceptance criteria: 5 criteria
```

**Expected Behavior:**
- For each delivery: lists acceptance criteria
- For each criterion: identifies verifying check(s)
- Notes criteria with no verification

**Acceptance Criteria:**
- [ ] All criteria listed
- [ ] Each has verifying check(s)
- [ ] Unverified criteria noted

---

## Scenario 2: Check Quality Evaluation (Tier 1 - Deterministic)

**Objective:** Verify 5 quality dimensions assessed.

**Input:**
```
Existing checks for auth delivery
```

**Expected Behavior:**
- Focused: tests specific criterion
- Real app: drives actual app, not mocks
- Observability: actionable diagnostics
- Speed: fast enough for incremental
- Reliability: low flake, deterministic

**Acceptance Criteria:**
- [ ] All 5 dimensions assessed
- [ ] Each check scored

---

## Scenario 3: Gap Identification Complete (Tier 1 - Deterministic)

**Objective:** Verify all gap types identified.

**Input:**
```
Mixed verification coverage
```

**Expected Behavior:**
- Identifies: untested criteria
- Identifies: unit-only (need integration)
- Identifies: mock-only (need real app)
- Identifies: flaky/unreliable
- Identifies: slow blocking incremental

**Acceptance Criteria:**
- [ ] All 5 gap types checked
- [ ] Specific gaps listed

---

## Scenario 4: Real Behaviour Comparison (Tier 1 - Deterministic)

**Objective:** Verify tests vs real behaviour compared.

**Input:**
```
Verification runs
```

**Expected Behavior:**
- Runs verification, observes actual app
- Compares test assertions with manual
- Notes discrepancies

**Acceptance Criteria:**
- [ ] Verification run
- [ ] Manual comparison done
- [ ] Discrepancies noted

---

## Scenario 5: Prioritization Correct (Tier 1 - Deterministic)

**Objective:** Verify severity prioritization.

**Input:**
```
Identified gaps: 1 untested, 2 mock-only, 1 flaky, 1 slow
```

**Expected Behavior:**
- Blocker: zero verification
- Major: weak/mock-only
- Minor: flaky/slow
- Note: low-risk gap

**Acceptance Criteria:**
- [ ] Blocker for zero verification
- [ ] Major for weak/mock-only
- [ ] Minor for flaky/slow
- [ ] Note for low-risk

---

## Scenario 6: Report Complete (Tier 1 - Deterministic)

**Objective:** Verify report includes all required elements.

**Expected Output:**
- Gap list with severity
- Recommended improvements
- Effort estimates

**Acceptance Criteria:**
- [ ] Gap list with severity
- [ ] Recommendations actionable
- [ ] Effort estimates provided

---

## Scenario 7: Fallback Without Acceptance Criteria (Tier 1 - Deterministic)

**Objective:** Verify fallback when no acceptance criteria.

**Input:**
```
No formal acceptance criteria
```

**Expected Behavior:**
- Audits against recent delivery requirements
- Documents fallback used

**Acceptance Criteria:**
- [ ] Falls back to delivery requirements
- [ ] Fallback documented

---

## Scenario 8: Blocker Gap Escalation (Tier 1 - Deterministic)

**Objective:** Verify blocker gaps escalated.

**Input:**
```
Blocker gap found
```

**Expected Behavior:**
- Escalates to Lead
- Prioritizes fixes
- Does not proceed without mitigation

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Fixes prioritized

---

## Scenario 9: Fundamental Strategy Issue (Tier 1 - Deterministic)

**Objective:** Verify fundamental issues trigger re-visit.

**Input:**
```
Systemic verification strategy problem
```

**Expected Behavior:**
- Triggers vstack-create-verification revisit
- Documents fundamental issue

**Acceptance Criteria:**
- [ ] Triggers create-verification revisit
- [ ] Documents issue

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Criteria Mapping | 1 |  |  |
| 2. Check Quality | 1 |  |  |
| 3. Gap Identification | 1 |  |  |
| 4. Real Behaviour | 1 |  |  |
| 5. Prioritization | 1 |  |  |
| 6. Report Complete | 1 |  |  |
| 7. Fallback No Criteria | 1 |  |  |
| 8. Blocker Escalation | 1 |  |  |
| 9. Strategy Issue | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/9 PASS
- **Skill Status:** ___