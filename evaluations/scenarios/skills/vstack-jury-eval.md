# Evaluation Scenario: red-team

**Skill:** red-team
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Reviewer Selection (Tier 1 - Deterministic)

**Objective:** Verify 2-3 reviewers with separated context and domain expertise.

**Input:**
```
High-risk security migration
```

**Expected Behavior:**
- Selects 2 or 3 reviewers
- Sufficiently separated context (different sessions, ideally different models)
- Domain expertise for risk areas (security, backend, infra)

**Acceptance Criteria:**
- [ ] 2 or 3 reviewers
- [ ] Separated context
- [ ] Domain expertise matched

---

## Scenario 2: Identical Brief for All (Tier 1 - Deterministic)

**Objective:** Verify identical brief provided to all reviewers.

**Input:**
```
Review package prepared
```

**Expected Behavior:**
- Objective and acceptance criteria
- Out-of-scope areas
- Base commit and diff reference
- Architecture constraints
- Verification evidence
- Pre-defined rubric
- SAME brief for all reviewers

**Acceptance Criteria:**
- [ ] All 6 brief elements present
- [ ] Identical for all reviewers
- [ ] No communication during review

---

## Scenario 3: Independent Reviews (Tier 1 - Deterministic)

**Objective:** Verify independent fresh-context reviews.

**Input:**
```
3 reviewers, identical brief
```

**Expected Behavior:**
- Each works independently
- Fresh context for each
- No communication between reviewers during review
- Structured findings per lens

**Acceptance Criteria:**
- [ ] Independent work
- [ ] Fresh context
- [ ] No communication during
- [ ] Structured findings

---

## Scenario 4: Structured Findings (Tier 1 - Deterministic)

**Objective:** Verify findings have required structure.

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

**Expected Output:**
- accept / accept with fixes / reject

**Acceptance Criteria:**
- [ ] Overall assessment given
- [ ] One of three options
- [ ] Justified by findings

---

## Scenario 5: Comparison and Synthesis (Tier 1 - Deterministic)

**Objective:** Verify consensus vs disagreement identified.

**Input:**
```
3 reviewers, findings collected
```

**Expected Behavior:**
- Identifies consensus findings
- Identifies disagreements
- Validates findings against actual code

**Acceptance Criteria:**
- [ ] Consensus identified
- [ ] Disagreements identified
- [ ] Validated against code

---

## Scenario 5: Resolution (Tier 1 - Deterministic)

**Objective:** Verify resolution process.

**Expected Behavior:**
- Consensus findings: must address
- Disagreements: Lead validates, decides
- Missing/timed-out reviewer: not an approval

**Acceptance Criteria:**
- [ ] Consensus = must address
- [ ] Disagreements = Lead decides
- [ ] Missing reviewer ≠ approval

---

## Scenario 6: Report Complete (Tier 1 - Deterministic)

**Objective:** Verify complete report produced.

**Expected Output:**
- Consolidated findings
- Consensus vs disagreement analysis
- Independence status per reviewer
- Lead disposition

**Acceptance Criteria:**
- [ ] Consolidated findings
- [ ] Consensus vs disagreement
- [ ] Independence status
- [ ] Lead disposition

---

## Scenario 6: Verification - Identical Brief (Tier 1 - Deterministic)

**Objective:** Verify all reviewers received identical brief.

**Verification Method:**
- Compares briefs sent to each reviewer
- Confirms identical

**Acceptance Criteria:**
- [ ] All briefs identical
- [ ] No variations

---

## Scenario 7: Verification - Findings Against Source Code (Tier 1 - Deterministic)

**Objective:** Verify findings validated against actual code.

**Verification Method:**
- Each finding checked against source
- Invalid findings rejected

**Acceptance Criteria:**
- [ ] All findings checked
- [ ] Invalid rejected

---

## Scenario 8: Verification - No Missing Reviewer as Approval (Tier 1 - Deterministic)

**Objective:** Verify missing reviewer not treated as approval.

**Input:**
```
1 of 3 reviewers timed out
```

**Expected Behavior:**
- Does not count as approval
- Reports missing reviewer
- Proceeds with available reviews

**Acceptance Criteria:**
- [ ] Timeout ≠ approval
- [ ] Missing reported
- [ ] Proceeds with available

---

## Scenario 9: Escalation - Reviewer Timeout (Tier 1 - Deterministic)

**Objective:** Verify timeout escalation.

**Input:**
```
Reviewer exceeds time limit
```

**Expected Behavior:**
- Escalates to Lead
- Not treated as approval
- Lead decides with available input

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Not approval
- [ ] Lead decides

---

## Scenario 10: Escalation - Unresolvable Disagreement (Tier 1 - Deterministic)

**Objective:** Verify Lead decides with rationale.

**Input:**
```
Fundamental disagreement between reviewers
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

## Scenario 10: Fallback - Without Multiple Reviewers (Tier 1 - Deterministic)

**Objective:** Verify fallback to single review with interrogate.

**Input:**
```
Only 1 reviewer available
```

**Expected Behavior:**
- Uses red-team instead
- Documents fallback

**Acceptance Criteria:**
- [ ] Uses red-team
- [ ] Fallback documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Reviewer Selection | 1 |  |  |
| 2. Identical Brief | 1 |  |  |
| 3. Independent Reviews | 1 |  |  |
| 4. Structured Findings | 1 |  |  |
| 4. Overall Assessment | 1 |  |  |
| 5. Consensus/Disagreement | 1 |  |  |
| 5. Resolution | 1 |  |  |
| 6. Complete Report | 1 |  |  |
| 6. Identical Brief Verified | 1 |  |  |
| 7. Findings vs Code | 1 |  |  |
| 8. No Missing as Approval | 1 |  |  |
| 9. Timeout Escalation | 1 |  |  |
| 10. Disagreement Escalation | 1 |  |  |
| 10. Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/12 PASS
- **Skill Status:** ___