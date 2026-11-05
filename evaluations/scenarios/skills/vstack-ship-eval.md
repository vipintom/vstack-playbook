# Evaluation Scenario: ship

**Skill:** ship
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Authorization Verification (Tier 1 - Deterministic)

**Objective:** Verify authorization recorded and scoped correctly.

**Input:**
```
Authorization: "Merge PR #234" from Lead
Scope: merge PR #234
```

**Expected Behavior:**
- Checks authorization recorded for specific action
- Verifies scope matches intended action
- Verifies approver has authority

**Acceptance Criteria:**
- [ ] Authorization recorded
- [ ] Scope matches action
- [ ] Approver has authority

---

## Scenario 2: Authorization Missing (Tier 1 - Deterministic)

**Objective:** Verify refuses to execute without authorization.

**Input:**
```
No authorization for merge
```

**Expected Behavior:**
- Does not execute
- Reports missing authorization
- Does not proceed

**Acceptance Criteria:**
- [ ] Does not execute
- [ ] Reports missing auth
- [ ] Does not proceed

---

## Scenario 3: Authorization Scope Mismatch (Tier 1 - Deterministic)

**Objective:** Verify scope matching prevents overreach.

**Input:**
```
Authorization: "Deploy to staging"
Requested: "Deploy to production"
```

**Expected Behavior:**
- Detects scope mismatch
- Does not execute
- Reports mismatch

**Acceptance Criteria:**
- [ ] Scope mismatch detected
- [ ] Does not execute
- [ ] Mismatch reported

---

## Scenario 4: External Gates Satisfied (Tier 1 - Deterministic)

**Objective:** Verify external gates checked before execution.

**Input:**
```
PR #234 with passing CI, branch protection
```

**Expected Behavior:**
- Checks CI passes
- Checks branch protection satisfied
- Checks external approvals
- Only proceeds if all satisfied

**Acceptance Criteria:**
- [ ] CI passes checked
- [ ] Branch protection checked
- [ ] External approvals checked
- [ ] Proceeds only if all satisfied

---

## Scenario 5: Execute Authorized Action (Tier 1 - Deterministic)

**Objective:** Verify correct action execution.

**Test Cases:**
| Authorization | Action | Expected |
|---------------|--------|----------|
| Merge PR #234 | Merge | Merges PR #234 |
| Deploy to staging | Deploy | Triggers staging deploy |
| Create release v1.0 | Release | Creates release v1.0 |

**Acceptance Criteria:**
- [ ] Correct action for authorization
- [ ] Action completed
- [ ] Outcome recorded

---

## Scenario 6: Post-Action Verification (Tier 1 - Deterministic)

**Objective:** Verify post-action checks.

**Input:**
```
Action: Merge PR #234
```

**Expected Behavior:**
- Confirms action completed
- Runs smoke checks if applicable
- Updates delivery/task status

**Acceptance Criteria:**
- [ ] Action completion confirmed
- [ ] Smoke checks run (if applicable)
- [ ] Status updated

---

## Scenario 7: Recording (Tier 1 - Deterministic)

**Objective:** Verify audit trail recorded.

**Expected Record:**
- Action taken
- Authorization reference
- Outcome
- Post-action verification

**Acceptance Criteria:**
- [ ] Action recorded
- [ ] Auth reference recorded
- [ ] Outcome recorded
- [ ] Post-action verification recorded

---

## Scenario 8: Escalation - Authorization Missing (Tier 1 - Deterministic)

**Objective:** Verify escalation on missing authorization.

**Input:**
```
No authorization for action
```

**Expected Behavior:**
- Does not execute
- Escalates to Lead
- Does not proceed

**Acceptance Criteria:**
- [ ] Does not execute
- [ ] Escalates to Lead
- [ ] Does not proceed

---

## Scenario 9: Escalation - Action Fails (Tier 1 - Deterministic)

**Objective:** Verify recovery escalation on failure.

**Input:**
```
Merge fails due to conflict
```

**Expected Behavior:**
- Invokes recovery
- Escalates to Lead
- Documents failure

**Acceptance Criteria:**
- [ ] Invokes recovery
- [ ] Escalates to Lead
- [ ] Failure documented

---

## Scenario 10: Fallback - Without Authorization (Tier 1 - Deterministic)

**Objective:** Verify fallback to manual execution.

**Input:**
```
No authorization available
```

**Expected Behavior:**
- Manual execution by authorized human
- Documents manual execution
- Does not auto-execute

**Acceptance Criteria:**
- [ ] Manual by authorized human
- [ ] Documents manual execution
- [ ] No auto-execute

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Authorization Verification | 1 |  |  |
| 2. Missing Authorization | 1 |  |  |
| 3. Scope Mismatch | 1 |  |  |
| 4. External Gates | 1 |  |  |
| 5. Action Execution | 1 |  |  |
| 6. Post-Action Verification | 1 |  |  |
| 7. Recording | 1 |  |  |
| 8. Missing Auth Escalation | 1 |  |  |
| 9. Action Failure Escalation | 1 |  |  |
| 10. Manual Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/10 PASS
- **Skill Status:** ___