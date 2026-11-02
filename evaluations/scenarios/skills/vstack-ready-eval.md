# Evaluation Scenario: vstack-ready

**Skill:** vstack-ready
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Completeness Verification (Tier 1 - Deterministic)

**Objective:** Verify all acceptance criteria met with evidence.

**Input:**
```
PR with 5 acceptance criteria
```

**Expected Behavior:**
- Checks each criterion met with evidence
- Verifies all required verifications pass
- Checks all review findings dispositioned
- Confirms no open blockers

**Acceptance Criteria:**
- [ ] All criteria met with evidence
- [ ] All verifications pass
- [ ] Review findings dispositioned
- [ ] No open blockers

---

## Scenario 2: Risk Assessment (Tier 1 - Deterministic)

**Objective:** Verify risk assessment completeness.

**Input:**
```
Ready PR with residual risks
```

**Expected Behavior:**
- Identifies residual risks (accepted, deferred)
- Assesses rollback complexity
- Identifies monitoring needs post-merge

**Acceptance Criteria:**
- [ ] Residual risks documented
- [ ] Rollback complexity assessed
- [ ] Monitoring needs identified

---

## Scenario 3: Readiness Report Production (Tier 1 - Deterministic)

**Objective:** Verify complete readiness report produced.

**Expected Report Sections:**
- Delivery objective
- Acceptance criteria status
- Verification summary
- Review disposition summary
- Residual risks
- Rollback plan
- Recommendation: READY / NOT READY

**Acceptance Criteria:**
- [ ] All 7 sections present
- [ ] Each section complete
- [ ] Clear recommendation

---

## Scenario 4: Explicit Recommendation (Tier 1 - Deterministic)

**Objective:** Verify explicit READY/NOT READY recommendation.

**Test Cases:**
| State | Expected Recommendation |
|-------|------------------------|
| All criteria met, no risks | READY |
| One criterion unmet | NOT READY |
| Criteria met but high risk | NOT READY (or READY with caveats) |

**Acceptance Criteria:**
- [ ] Explicit READY/NOT READY
- [ ] Matches criteria state
- [ ] Justified

---

## Scenario 4: Stop Before Merge (Tier 1 - Deterministic)

**Objective:** Verify does not merge, only reports.

**Input:**
```
READY assessment
```

**Expected Behavior:**
- Does not merge
- Reports to Lead/user for decision
- Stops before merge action

**Acceptance Criteria:**
- [ ] Does not merge
- [ ] Reports to decision-maker
- [ ] Stops before merge

---

## Scenario 5: Verification - All Criteria Checked (Tier 1 - Deterministic)

**Objective:** Verify all criteria checked.

**Verification Method:**
- Confirms each criterion individually checked
- No criterion skipped

**Acceptance Criteria:**
- [ ] Each criterion checked
- [ ] No skipped criteria

---

## Scenario 6: Verification - Evidence Traceable (Tier 1 - Deterministic)

**Objective:** Verify all evidence traceable.

**Verification Method:**
- Each claim links to evidence
- Evidence accessible

**Acceptance Criteria:**
- [ ] Each claim has evidence link
- [ ] Evidence accessible

---

## Scenario 7: Verification - Recommendation Justified (Tier 1 - Deterministic)

**Objective:** Verify recommendation justified by evidence.

**Verification Method:**
- READY recommendation backed by all criteria
- NOT READY backed by specific gaps

**Acceptance Criteria:**
- [ ] READY = all criteria met
- [ ] NOT READY = specific gaps cited
- [ ] Justification clear

---

## Scenario 8: Fallback - Without Formal PR (Tier 1 - Deterministic)

**Objective:** Verify fallback without formal PR.

**Input:**
```
Direct-to-main workflow
```

**Expected Behavior:**
- Verbal/written readiness confirmation
- Same criteria applied
- Documents fallback

**Acceptance Criteria:**
- [ ] Verbal/written confirmation
- [ ] Same criteria
- [ ] Fallback documented

---

## Scenario 9: Escalation - NOT READY (Tier 1 - Deterministic)

**Objective:** Verify NOT READY escalates correctly.

**Input:**
```
NOT READY assessment
```

**Expected Behavior:**
- Does not proceed
- Addresses gaps
- Escalates to Lead if needed

**Acceptance Criteria:**
- [ ] Does not proceed
- [ ] Gaps addressed
- [ ] Escalates if needed

---

## Scenario 10: Escalation - Disagreement (Tier 1 - Deterministic)

**Objective:** Verify escalation on readiness disagreement.

**Input:**
```
Disagreement on READY/NOT READY
```

**Expected Behavior:**
- Escalates to Lead
- Does not proceed
- Documents disagreement

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Does not proceed
- [ ] Disagreement documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Completeness Verification | 1 |  |  |
| 2. Risk Assessment | 1 |  |  |
| 3. Report Production | 1 |  |  |
| 4. Explicit Recommendation | 1 |  |  |
| 4. Stop Before Merge | 1 |  |  |
| 5. All Criteria Checked | 1 |  |  |
| 6. Evidence Traceable | 1 |  |  |
| 7. Recommendation Justified | 1 |  |  |
| 8. No PR Fallback | 1 |  |  |
| 9. NOT READY Escalation | 1 |  |  |
| 10. Disagreement Escalation | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/10 PASS
- **Skill Status:** ___