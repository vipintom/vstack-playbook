# Evaluation Scenario: review

**Skill:** review
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Fresh Context Enforcement (Tier 1 - Deterministic)

**Objective:** Verify reviewer has no implementation context.

**Input:**
```
Review package prepared
```

**Expected Behavior:**
- Reviewer gets fresh context (new session)
- No implementation history
- Reads only review package

**Acceptance Criteria:**
- [ ] Fresh context (new session)
- [ ] No implementation history
- [ ] Reads only review package

---

## Scenario 2: 7 Lenses Applied (Tier 1 - Deterministic)

**Objective:** Verify all 7 lenses applied systematically.

**Input:**
```
Changes under review
```

**Expected Lenses:**
1. Correctness & Regression
2. Architecture & Design
3. Security & Data
4. Performance & Resources
5. Maintainability & Style
6. Test Adequacy
7. Documentation & Migration

**Acceptance Criteria:**
- [ ] All 7 lenses applied
- [ ] Each lens independent
- [ ] Systematic application

---

## Scenario 3: Structured Findings (Tier 1 - Deterministic)

**Objective:** Verify findings recorded with required structure.

**Expected Finding Format:**
- Severity: critical/high/medium/low/informational
- Category: lens name
- Description with file:line reference
- Evidence reference
- Recommendation (concrete, testable)

**Acceptance Criteria:**
- [ ] Severity present
- [ ] Category (lens) present
- [ ] Description + file:line
- [ ] Evidence reference
- [ ] Concrete recommendation

---

## Scenario 4: Overall Assessment (Tier 1 - Deterministic)

**Objective:** Verify overall assessment produced.

**Expected Assessment:**
- accept / accept with fixes / reject

**Acceptance Criteria:**
- [ ] One of three options
- [ ] Justified by findings

---

## Scenario 5: Lead Resolves Findings (Tier 1 - Deterministic)

**Objective:** Verify Lead resolves each finding.

**Input:**
```
Review findings from Reviewer
```

**Expected Resolution Options:**
- Fix: Builder addresses, provides evidence
- Defer: documents reason, tracks for later
- Reject: documents rationale (rare, requires evidence)
- Re-review: Reviewer confirms fixes address root cause

**Acceptance Criteria:**
- [ ] Each finding resolved
- [ ] Fix/defer/reject/re-review
- [ ] Evidence for fixes
- [ ] Rationale for defer/reject

---

## Scenario 6: Re-review Confirms Root Cause (Tier 1 - Deterministic)

**Objective:** Verify re-review confirms root cause fix.

**Input:**
```
Builder fixed critical finding
```

**Expected Behavior:**
- Reviewer re-reviews
- Confirms fix addresses root cause
- Not just surface fix

**Acceptance Criteria:**
- [ ] Re-review conducted
- [ ] Root cause confirmed fixed
- [ ] Not just surface fix

---

## Scenario 7: Escalation - Missing Evidence (Tier 1 - Deterministic)

**Objective:** Verify escalation when reviewer needs more evidence.

**Input:**
```
Reviewer cannot assess without missing evidence
```

**Expected Behavior:**
- Lead provides missing evidence
- Does not proceed without

**Acceptance Criteria:**
- [ ] Lead provides evidence
- [ ] Does not proceed without

---

## Scenario 8: Escalation - Disagreement on Severity (Tier 1 - Deterministic)

**Objective:** Verify Lead decides on severity disagreement.

**Input:**
```
Fundamental disagreement on severity
```

**Expected Behavior:**
- Lead decides
- Documents both positions
- Records rationale

**Acceptance Criteria:**
- [ ] Lead decides
- [ ] Both positions documented
- [ ] Rationale recorded

---

## Scenario 9: Escalation - Multiple Reviews Needed (Tier 1 - Deterministic)

**Objective:** Verify escalation to jury for multiple reviews.

**Input:**
```
High-risk change requiring multiple reviewers
```

**Expected Behavior:**
- Escalates to red-team
- Documents why jury needed

**Acceptance Criteria:**
- [ ] Escalates to jury
- [ ] Reason documented

---

## Scenario 10: Verification - Fresh Context (Tier 1 - Deterministic)

**Objective:** Verify reviewer had no implementation context.

**Verification Method:**
- Confirms new session
- Confirms no implementation history

**Acceptance Criteria:**
- [ ] New session confirmed
- [ ] No implementation history
- [ ] Fresh context verified

---

## Scenario 11: Verification - Finding Structure (Tier 1 - Deterministic)

**Objective:** Verify each finding has required structure.

**Verification Method:**
- Checks: severity, location, evidence, recommendation
- All present per finding

**Acceptance Criteria:**
- [ ] Severity present
- [ ] Location present
- [ ] Evidence present
- [ ] Recommendation present

---

## Scenario 12: Verification - Critical/High Resolved (Tier 1 - Deterministic)

**Objective:** Verify critical/high findings resolved or waived.

**Verification Method:**
- All critical/high resolved or waived
- Waivers documented with rationale

**Acceptance Criteria:**
- [ ] All critical/high resolved
- [ ] Waivers documented
- [ ] Rationale for waivers

---

## Scenario 13: Verification - Re-review Confirms Fixes (Tier 1 - Deterministic)

**Objective:** Verify re-review confirms fixes address root cause.

**Verification Method:**
- Reviewer re-reviews fixes
- Confirms root cause addressed
- Not just surface fix

**Acceptance Criteria:**
- [ ] Re-review done
- [ ] Root cause confirmed
- [ ] Not surface fix

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Fresh Context | 1 |  |  |
| 2. 7 Lenses | 1 |  |  |
| 3. Structured Findings | 1 |  |  |
| 4. Overall Assessment | 1 |  |  |
| 5. Lead Resolution | 1 |  |  |
| 6. Re-review Root Cause | 1 |  |  |
| 7. Missing Evidence Escalation | 1 |  |  |
| 8. Severity Disagreement | 1 |  |  |
| 9. Jury Escalation | 1 |  |  |
| 10. Fresh Context Verified | 1 |  |  |
| 11. Finding Structure | 1 |  |  |
| 12. Critical/High Resolved | 1 |  |  |
| 13. Re-review Root Cause | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/13 PASS
- **Skill Status:** ___