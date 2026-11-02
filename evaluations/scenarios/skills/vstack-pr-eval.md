# Evaluation Scenario: vstack-pr

**Skill:** vstack-pr
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Readiness Confirmation (Tier 1 - Deterministic)

**Objective:** Verify all readiness checks pass before PR creation.

**Input:**
```
All tasks PASS, evidence recorded, review dispositioned
```

**Expected Behavior:**
- Checks all tasks PASS
- Evidence recorded for acceptance criteria
- Review findings dispositioned
- Does NOT create PR if any check fails

**Acceptance Criteria:**
- [ ] All tasks PASS
- [ ] Evidence recorded
- [ ] Review findings dispositioned
- [ ] No PR if checks fail

---

## Scenario 2: PR Preparation (Tier 1 - Deterministic)

**Objective:** Verify PR prepared with correct structure.

**Input:**
```
Verified implementation ready
```

**Expected Behavior:**
- Focused scope (single delivery)
- Clear title and description
- Links to delivery/task records
- Includes evidence summary

**Acceptance Criteria:**
- [ ] Single delivery scope
- [ ] Clear title/description
- [ ] Delivery/task links
- [ ] Evidence summary included

---

## Scenario 3: Evidence Summary (Tier 1 - Deterministic)

**Objective:** Verify evidence summary completeness.

**Expected Summary Contents:**
- Verification results (pass/fail/skipped)
- Review findings and dispositions
- Known limitations and risks

**Acceptance Criteria:**
- [ ] Verification results
- [ ] Review dispositions
- [ ] Limitations/risks

---

## Scenario 4: Submit PR (Tier 1 - Deterministic)

**Objective:** Verify PR submitted with reviewers assigned.

**Input:**
```
PR created/updated
```

**Expected Behavior:**
- Creates or updates PR
- Requests reviewers per project policy
- Links in delivery/task records

**Acceptance Criteria:**
- [ ] PR created/updated
- [ ] Reviewers requested
- [ ] Links in records

---

## Scenario 4: Verification - CI Passes (Tier 1 - Deterministic)

**Objective:** Verify PR passes CI.

**Input:**
```
PR submitted
```

**Expected Behavior:**
- Runs CI
- If CI fails: fixes and reverifies before PR
- Does not submit failing PR

**Acceptance Criteria:**
- [ ] CI runs
- [ ] CI passes before PR
- [ ] No failing PR submitted

---

## Scenario 5: Verification - Reviewers Can Verify Evidence (Tier 1 - Deterministic)

**Objective:** Verify reviewers can verify evidence.

**Input:**
```
PR with evidence summary
```

**Expected Behavior:**
- Reviewers can access evidence
- Evidence traceable to records
- Reviewers confirm verifiability

**Acceptance Criteria:**
- [ ] Evidence accessible
- [ ] Traceable to records
- [ ] Reviewers confirm

---

## Scenario 5: Scope Matches Delivery (Tier 1 - Deterministic)

**Objective:** Verify PR scope matches single delivery.

**Input:**
```
PR created
```

**Expected Behavior:**
- Single delivery scope
- No unrelated changes
- Scope documented

**Acceptance Criteria:**
- [ ] Single delivery
- [ ] No unrelated changes
- [ ] Scope documented

---

## Scenario 6: Escalation - CI Fails (Tier 1 - Deterministic)

**Objective:** Verify CI failure handling.

**Input:**
```
CI fails on PR
```

**Expected Behavior:**
- Diagnoses failure
- Fixes and reverify
- Does not ignore failure

**Acceptance Criteria:**
- [ ] Diagnoses
- [ ] Fixes and reverifies
- [ ] Does not ignore

---

## Scenario 7: Escalation - Reviewers Unavailable (Tier 1 - Deterministic)

**Objective:** Verify escalation when reviewers unavailable.

**Input:**
```
Reviewers not available
```

**Expected Behavior:**
- Escalates to Lead
- Does not submit without reviewers
- Documents unavailability

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] No PR without reviewers
- [ ] Documents unavailability

---

## Scenario 7: Fallback - No PR Workflow (Tier 1 - Deterministic)

**Objective:** Verify fallback when no PR workflow.

**Input:**
```
Project uses direct-to-main
```

**Expected Behavior:**
- Delivers via project convention
- Does not force PR
- Documents delivery method

**Acceptance Criteria:**
- [ ] Uses project convention
- [ ] No forced PR
- [ ] Method documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Readiness Confirmation | 1 |  |  |
| 2. PR Preparation | 1 |  |  |
| 3. Evidence Summary | 1 |  |  |
| 4. Submit PR | 1 |  |  |
| 4. CI Passes | 1 |  |  |
| 5. Reviewers Verify Evidence | 1 |  |  |
| 5. Scope Matches Delivery | 1 |  |  |
| 6. CI Failure | 1 |  |  |
| 7. Reviewers Unavailable | 1 |  |  |
| 7. No PR Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/10 PASS
- **Skill Status:** ___