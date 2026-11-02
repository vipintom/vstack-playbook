# Evaluation Scenario: vstack-plan-review

**Skill:** vstack-plan-review
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Fresh Context Enforcement (Tier 1 - Deterministic)

**Objective:** Verify review conducted in fresh context.

**Input:**
```
Plan from vstack-plan-loop
```

**Expected Behavior:**
- Starts new session or explicitly resets context
- Does not carry implementation reasoning into review
- Labels "same-context" if fallback used (weaker)

**Acceptance Criteria:**
- [ ] New session or explicit reset
- [ ] No implementation reasoning carried
- [ ] Same-context labeled if used

---

## Scenario 2: Assumption Challenge (Tier 1 - Deterministic)

**Objective:** Verify assumptions challenged.

**Input:**
```
Plan with 5 tasks, several assumptions
```

**Expected Behavior:**
- For each step: what must be true? Verified?
- Documents unverified assumptions
- Marks assumptions needing validation first

**Acceptance Criteria:**
- [ ] Each step's assumptions listed
- [ ] Verification status noted
- [ ] Unverified marked for validation

---

## Scenario 3: Omission Detection (Tier 1 - Deterministic)

**Objective:** Verify missing steps identified.

**Input:**
```
Plan missing: integration step, rollback, config, docs
```

**Expected Behavior:**
- Identifies missing: integration, cleanup, migration, rollback, config, docs
- Documents omissions

**Acceptance Criteria:**
- [ ] Integration missing detected
- [ ] Cleanup missing detected
- [ ] Migration missing detected
- [ ] Rollback missing detected
- [ ] Config missing detected
- [ ] Docs missing detected

---

## Scenario 4: Dependency Validation (Tier 1 - Deterministic)

**Objective:** Verify dependencies correctly ordered and no circular deps.

**Input:**
```
Plan with 5 tasks and dependencies
```

**Expected Behavior:**
- Dependencies correctly ordered
- No circular dependencies
- Validates DAG

**Acceptance Criteria:**
- [ ] Dependencies ordered correctly
- [ ] No circular deps
- [ ] DAG validated

---

## Scenario 4: Unnecessary Steps (Tier 1 - Deterministic)

**Objective:** Verify unnecessary steps identified.

**Input:**
```
Plan with "prep" commit that doesn't pass verification
```

**Expected Behavior:**
- Identifies steps that can be removed
- Identifies steps that can be simplified
- Proposes revisions

**Acceptance Criteria:**
- [ ] Unnecessary steps found
- [ ] Simplification proposed
- [ ] Revisions documented

---

## Scenario 5: Alternative Approaches (Tier 1 - Deterministic)

**Objective:** Verify simpler alternatives considered.

**Input:**
```
Plan uses complex approach
```

**Expected Behavior:**
- Asks: is there a simpler approach?
- Documents alternative if found
- Recommends simpler if equivalent

**Acceptance Criteria:**
- [ ] Alternative considered
- [ ] Documented if found
- [ ] Recommended if equivalent

---

## Scenario 5: Risky Assumptions Verification (Tier 1 - Deterministic)

**Objective:** Verify risky assumptions marked for validation.

**Input:**
```
Plan with unverified assumption: "library v2 compatible"
```

**Expected Behavior:**
- Identifies unverified assumptions
- Marks: must validate before implementation
- Proposes test for validation

**Acceptance Criteria:**
- [ ] Unverified assumptions marked
- [ ] Validation required before impl
- [ ] Validation test proposed

---

## Scenario 6: Acceptance Criteria Check (Tier 1 - Deterministic)

**Objective:** Verify each step has meaningful verification.

**Input:**
```
Plan with 5 steps
```

**Expected Behavior:**
- Each step has meaningful verification
- Criteria observable and specific
- Criteria collectively satisfy delivery acceptance

**Acceptance Criteria:**
- [ ] Each step has verification
- [ ] Criteria observable/specific
- [ ] Collectively satisfies delivery

---

## Scenario 6: Scope and Risk Assessment (Tier 1 - Deterministic)

**Objective:** Verify plan matches workflow mode and high-risk steps identified.

**Input:**
```
Plan for Standard mode delivery
```

**Expected Behavior:**
- Matches workflow mode (Quick/Standard/Advanced)
- High-risk steps identified
- Extra verification for high-risk

**Acceptance Criteria:**
- [ ] Mode matched
- [ ] High-risk identified
- [ ] Extra verification for high-risk

---

## Scenario 7: Review Findings Produced (Tier 1 - Deterministic)

**Objective:** Verify structured findings output.

**Expected Output:**
- Findings: missing steps, unverified assumptions, unnecessary complexity, simpler alternatives
- Severity: Blocker / Major / Minor / Note
- Proposed revisions

**Acceptance Criteria:**
- [ ] Findings categorized
- [ ] Severity assigned
- [ ] Revisions proposed

---

## Scenario 8: Fresh Context Enforcement (Tier 1 - Deterministic)

**Objective:** Verify fresh context actually used.

**Input:**
```
Reviewer starts review
```

**Expected Behavior:**
- New session or explicit reset
- No implementation context
- Explicit "same-context" label if fallback

**Acceptance Criteria:**
- [ ] New session or reset
- [ ] No implementation context
- [ ] Same-context labeled if fallback

---

## Scenario 9: Same-Context Fallback (Tier 1 - Deterministic)

**Objective:** Verify same-context fallback documented as weaker.

**Input:**
```
Fresh context unavailable
```

**Expected Behavior:**
- Uses same-context with explicit label
- Documents limitation
- Proceeds with weaker review

**Acceptance Criteria:**
- [ ] Same-context labeled
- [ ] Limitation documented
- [ ] Proceeds with weaker review

---

## Scenario 10: Escalation - Blocker Finding (Tier 1 - Deterministic)

**Objective:** Verify blocker escalation.

**Input:**
```
Blocker finding: missing critical integration step
```

**Expected Behavior:**
- Cannot proceed without resolution
- Escalates to Lead
- Documents blocker

**Acceptance Criteria:**
- [ ] Cannot proceed
- [ ] Escalates to Lead
- [ ] Blocker documented

---

## Scenario 11: Escalation - Fundamental Disagreement (Tier 1 - Deterministic)

**Objective:** Verify Lead decides with both positions documented.

**Input:**
```
Fundamental disagreement on approach
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

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Fresh Context | 1 |  |  |
| 2. Assumption Challenge | 1 |  |  |
| 3. Omission Detection | 1 |  |  |
| 4. Dependency Validation | 1 |  |  |
| 4. Unnecessary Steps | 1 |  |  |
| 5. Alternative Approaches | 1 |  |  |
| 5. Risky Assumptions | 1 |  |  |
| 6. Acceptance Criteria | 1 |  |  |
| 6. Scope and Risk | 1 |  |  |
| 7. Findings Produced | 1 |  |  |
| 8. Fresh Context Enforcement | 1 |  |  |
| 9. Same-Context Fallback | 1 |  |  |
| 10. Blocker Escalation | 1 |  |  |
| 11. Disagreement Escalation | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/13 PASS
- **Skill Status:** ___