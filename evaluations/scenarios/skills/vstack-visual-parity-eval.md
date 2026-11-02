# Evaluation Scenario: vstack-visual-parity

**Skill:** vstack-visual-parity
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Reference Definition (Tier 1 - Deterministic)

**Objective:** Verify reference defined with baselines, specs, and criteria.

**Input:**
```
UI change: button component update
```

**Expected Behavior:**
- Baseline screenshots (approved) defined
- Design specifications (Figma, Storybook) linked
- Acceptance criteria: pixel tolerance, content

**Acceptance Criteria:**
- [ ] Baseline screenshots approved
- [ ] Design specs referenced
- [ ] Tolerance criteria defined

---

## Scenario 2: Visual Tests Executed (Tier 1 - Deterministic)

**Objective:** Verify visual tests run correctly.

**Input:**
```
Target states defined
```

**Expected Behavior:**
- Navigates to target states
- Captures screenshots
- Compares against reference

**Acceptance Criteria:**
- [ ] Navigation to states
- [ ] Screenshots captured
- [ ] Comparison executed

---

## Scenario 3: Difference Analysis (Tier 1 - Deterministic)

**Objective:** Verify difference analysis complete.

**Input:**
```
Screenshots captured
```

**Expected Behavior:**
- Pixel diff (tolerance-based)
- Layout shift detection
- Content verification

**Acceptance Criteria:**
- [ ] Pixel diff with tolerance
- [ ] Layout shift detected
- [ ] Content verified

---

## Scenario 4: Difference Classification (Tier 1 - Deterministic)

**Objective:** Verify differences classified correctly.

**Test Cases:**
| Difference Type | Expected Classification |
|-----------------|------------------------|
| Intentional design change | Intentional -> update reference |
| Regression | Regression -> fix |
| Dynamic content | Flaky -> mask/stabilize |

**Acceptance Criteria:**
- [ ] Intentional = update reference
- [ ] Regression = fix
- [ ] Flaky = mask/stabilize

---

## Scenario 5: Update or Fix (Tier 1 - Deterministic)

**Objective:** Verify correct action per classification.

**Input:**
```
Intentional design change detected
```

**Expected Behavior:**
- Intentional: approve new baseline
- Regression: fix code, re-run
- Flaky: improve test stability

**Acceptance Criteria:**
- [ ] Intentional = approve new baseline
- [ ] Regression = fix + re-run
- [ ] Flaky = improve stability

---

## Scenario 6: Verification Complete (Tier 1 - Deterministic)

**Objective:** Verify verification completeness.

**Input:**
```
All visual tests pass
```

**Expected Behavior:**
- No unintended visual differences
- Intentional changes approved
- Tests stable (low flake)

**Acceptance Criteria:**
- [ ] No unintended differences
- [ ] Intentional approved
- [ ] Low flake rate

---

## Scenario 7: Escalation - Reference Outdated (Tier 1 - Deterministic)

**Objective:** Verify escalation when reference outdated.

**Input:**
```
Reference screenshots don't match current design
```

**Expected Behavior:**
- Updates reference with design approval
- Documents escalation

**Acceptance Criteria:**
- [ ] Updates with approval
- [ ] Escalation documented

---

## Scenario 8: Escalation - Flaky Tests (Tier 1 - Deterministic)

**Objective:** Verify escalation for flaky tests.

**Input:**
```
Tests flaky due to dynamic content
```

**Expected Behavior:**
- Improves test stability
- Documents flakiness
- Does not ignore

**Acceptance Criteria:**
- [ ] Improves stability
- [ ] Documents flakiness
- [ ] Does not ignore

---

## Scenario 9: Fallback Without Automation (Tier 1 - Deterministic)

**Objective:** Verify fallback to manual review.

**Input:**
```
No visual testing automation available
```

**Expected Behavior:**
- Manual visual review with checklist
- Documents fallback
- Does not skip visual verification

**Acceptance Criteria:**
- [ ] Manual review with checklist
- [ ] Fallback documented
- [ ] Not skipped

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Reference Definition | 1 |  |  |
| 2. Visual Tests Executed | 1 |  |  |
| 3. Difference Analysis | 1 |  |  |
| 4. Classification | 1 |  |  |
| 5. Update/Fix | 1 |  |  |
| 6. Verification Complete | 1 |  |  |
| 7. Reference Outdated | 1 |  |  |
| 8. Flaky Tests | 1 |  |  |
| 9. Manual Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/9 PASS
- **Skill Status:** ___