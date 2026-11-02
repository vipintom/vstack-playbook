# Evaluation Scenario: vstack-plan-loop

**Skill:** vstack-plan-loop
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Draft Initial Plan (Tier 1 - Deterministic)

**Objective:** Verify plan draft includes all required elements.

**Input:**
```
Sharpened problem, discovery summary, blueprint (if architectural)
```

**Expected Plan Elements:**
- Tasks with clear boundaries
- Acceptance criteria per task
- Dependencies between tasks
- Task types (discovery, implementation, test, review, etc.)
- Risk estimate per task

**Acceptance Criteria:**
- [ ] Tasks with boundaries
- [ ] Acceptance criteria per task
- [ ] Dependencies identified
- [ ] Task types assigned
- [ ] Risk per task

---

## Scenario 2: Challenge Plan (Tier 1 - Deterministic)

**Objective:** Verify independent challenge of plan.

**Input:**
```
Draft plan with 5 tasks
```

**Expected Challenges:**
- Are tasks truly independent where parallel?
- Are acceptance criteria testable?
- Are dependencies correctly identified?
- Is risk appropriately addressed (review, evidence, parallelism)?
- Does it degrade gracefully without advanced harness features?

**Acceptance Criteria:**
- [ ] Independence checked
- [ ] Criteria testable
- [ ] Dependencies correct
- [ ] Risk addressed
- [ ] Graceful degradation verified

---

## Scenario 3: Refine Plan (Tier 1 - Deterministic)

**Objective:** Verify plan refinement incorporates challenges.

**Input:**
```
Challenge: Task 3 not independent, missing integration step
```

**Expected Behavior:**
- Incorporates challenges
- Splits/merges tasks
- Adjusts criteria

**Acceptance Criteria:**
- [ ] Challenges incorporated
- [ ] Tasks split/merged
- [ ] Criteria adjusted

---

## Scenario 4: Validate Plan (Tier 1 - Deterministic)

**Objective:** Verify Lead validates plan.

**Input:**
```
Refined plan
```

**Expected Behavior:**
- Lead confirms plan enables coordination and evidence
- Plan recorded with tasks, dependencies, criteria, risk levels

**Acceptance Criteria:**
- [ ] Lead validates
- [ ] Coordination enabled
- [ ] Evidence enabled
- [ ] Plan recorded

---

## Scenario 5: Output Completeness (Tier 1 - Deterministic)

**Objective:** Verify all required outputs produced.

**Expected Outputs:**
- Task list: title, description, acceptance criteria, dependencies, type, risk
- Dependency graph
- Risk assessment per task
- Coordination notes for Lead

**Acceptance Criteria:**
- [ ] Task list complete
- [ ] Dependency graph
- [ ] Risk assessment per task
- [ ] Coordination notes

---

## Scenario 6: Verification - Testable Criteria (Tier 1 - Deterministic)

**Objective:** Verify all tasks have testable acceptance criteria.

**Input:**
```
Plan with 5 tasks
```

**Expected Behavior:**
- Each task has testable criteria
- Pass/fail determinable
- No vague criteria

**Acceptance Criteria:**
- [ ] All tasks have testable criteria
- [ ] Pass/fail determinable
- [ ] No vague criteria

---

## Scenario 7: Verification - DAG Dependencies (Tier 1 - Deterministic)

**Objective:** Verify dependencies form a DAG (no cycles).

**Input:**
```
Plan with task dependencies
```

**Expected Behavior:**
- Dependencies form DAG
- No circular dependencies
- If cycles: redesign

**Acceptance Criteria:**
- [ ] Dependencies form DAG
- [ ] No cycles
- [ ] Cycles = redesign

---

## Scenario 8: Verification - High-Risk Tasks Have Review (Tier 1 - Deterministic)

**Objective:** Verify high-risk tasks have review/evidence requirements.

**Input:**
```
Plan with high-risk tasks
```

**Expected Behavior:**
- High-risk tasks identified
- Review/evidence requirements specified
- Parallelism appropriate

**Acceptance Criteria:**
- [ ] High-risk identified
- [ ] Review/evidence specified
- [ ] Parallelism appropriate

---

## Scenario 9: Graceful Degradation (Tier 1 - Deterministic)

**Objective:** Verify plan works sequentially if parallel unavailable.

**Input:**
```
Plan with parallel tasks
```

**Expected Behavior:**
- Plan works sequentially if parallel unavailable
- No hard dependency on advanced harness features
- Degrades gracefully

**Acceptance Criteria:**
- [ ] Sequential execution works
- [ ] No hard parallel dependency
- [ ] Graceful degradation

---

## Scenario 10: Escalation - Plan Cannot Be Validated (Tier 1 - Deterministic)

**Objective:** Verify escalation when plan invalid.

**Input:**
```
Plan cannot be validated by Lead
```

**Expected Behavior:**
- Returns to vstack-how/why/blast-radius or vstack-blueprint
- Does not proceed with invalid plan

**Acceptance Criteria:**
- [ ] Returns to discovery/blueprint
- [ ] Does not proceed

---

## Scenario 11: Escalation - Fundamental Disagreement (Tier 1 - Deterministic)

**Objective:** Verify Lead decides on fundamental disagreement.

**Input:**
```
Fundamental disagreement on approach
```

**Expected Behavior:**
- Lead decides
- Documents rationale
- Proceeds with Lead decision

**Acceptance Criteria:**
- [ ] Lead decides
- [ ] Rationale documented
- [ ] Proceeds with decision

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Draft Initial Plan | 1 |  |  |
| 2. Challenge Plan | 1 |  |  |
| 3. Refine Plan | 1 |  |  |
| 4. Validate Plan | 1 |  |  |
| 5. Output Completeness | 1 |  |  |
| 6. Testable Criteria | 1 |  |  |
| 7. DAG Dependencies | 1 |  |  |
| 8. High-Risk Review | 1 |  |  |
| 9. Graceful Degradation | 1 |  |  |
| 10. Validation Failure Escalation | 1 |  |  |
| 11. Disagreement Escalation | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/11 PASS
- **Skill Status:** ___