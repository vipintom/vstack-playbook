# Evaluation Scenario: shipototype

**Skill:** shipototype
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Question Definition Clarity (Tier 1 - Deterministic)

**Objective:** Verify question defined with clear answer criteria.

**Input:**
```
Uncertainty: Redis vs in-memory for session cache
```

**Expected Behavior:**
- Defines: what specific uncertainty (cache backend choice)
- Defines: clear answer (latency < 5ms, hit rate > 90%)
- Defines: failure conditions

**Acceptance Criteria:**
- [ ] Uncertainty specific
- [ ] Answer criteria measurable
- [ ] Failure conditions defined

---

## Scenario 2: Minimal Experiment Design (Tier 1 - Deterministic)

**Objective:** Verify experiment is minimal and disposable.

**Input:**
```
Question: Redis vs in-memory
```

**Expected Behavior:**
- Smallest code to answer question
- Disposable (not production quality)
- Isolated from production systems

**Acceptance Criteria:**
- [ ] Code minimal
- [ ] Not production quality
- [ ] Isolated from prod

---

## Scenario 3: Success Criteria Measurable (Tier 1 - Deterministic)

**Objective:** Verify success criteria are quantitative/qualitative.

**Expected Criteria:**
- Quantitative: latency < X, throughput > Y
- Qualitative: API feels right, integration works
- Failure conditions defined

**Acceptance Criteria:**
- [ ] Quantitative criteria
- [ ] Qualitative criteria
- [ ] Failure conditions

---

## Scenario 4: Build and Run Instrumented (Tier 1 - Deterministic)

**Objective:** Verify build runs with measurement.

**Input:**
```
Experiment: minimal app with both backends
```

**Expected Behavior:**
- Time-boxed implementation
- Instrumented for measurement
- Run in representative environment

**Acceptance Criteria:**
- [ ] Time-boxed
- [ ] Instrumented
- [ ] Representative environment

---

## Scenario 5: Results Analyzed Against Criteria (Tier 1 - Deterministic)

**Objective:** Verify results compared against success criteria.

**Input:**
```
Results: in-memory 2ms, Redis 5ms, both hit rate > 95%
```

**Expected Behavior:**
- Compares against success criteria
- Notes unexpected behaviors
- Documents learnings

**Acceptance Criteria:**
- [ ] Compared against criteria
- [ ] Unexpected behaviors noted
- [ ] Learnings documented

---

## Scenario 6: Decision and Cleanup (Tier 1 - Deterministic)

**Objective:** Verify decision made and prototype discarded.

**Input:**
```
Results analyzed
```

**Expected Behavior:**
- Answers the question
- Discards prototype code
- Records findings in decisions or project memory

**Acceptance Criteria:**
- [ ] Question answered
- [ ] Prototype code discarded
- [ ] Findings recorded

---

## Scenario 7: Stop Conditions - Question Answered (Tier 1 - Deterministic)

**Objective:** Verify stops when question answered.

**Input:**
```
Clear winner: in-memory for single-instance
```

**Expected Behavior:**
- Stops (question answered)
- Does not continue experimenting

**Acceptance Criteria:**
- [ ] Stops when answered
- [ ] No continued experimentation

---

## Scenario 8: Stop Conditions - Budget Exhausted (Tier 1 - Deterministic)

**Objective:** Verify stops when budget exhausted.

**Input:**
```
Time budget: 4 hours used
```

**Expected Behavior:**
- Stops (budget exhausted)
- Escalates to Lead if no answer

**Acceptance Criteria:**
- [ ] Stops at budget
- [ ] Escalates if no answer

---

## Scenario 9: Escalation - Budget Exceeded (Tier 1 - Deterministic)

**Objective:** Verify escalation when budget exceeded without answer.

**Input:**
```
4 hours used, no clear answer
```

**Expected Behavior:**
- Escalates to Lead
- Documents uncertainty

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Uncertainty documented

---

## Scenario 10: Escalation - New Uncertainties (Tier 1 - Deterministic)

**Objective:** Verify escalation/iteration when new uncertainties found.

**Input:**
```
Prototype reveals: connection pooling also matters
```

**Expected Behavior:**
- Iterates or escalates
- Does not silently continue

**Acceptance Criteria:**
- [ ] Iterates or escalates
- [ ] Does not silently continue

---

## Scenario 11: Fallback Without Prototyping (Tier 1 - Deterministic)

**Objective:** Verify fallback when prototyping not possible.

**Input:**
```
Cannot prototype (no env, no time)
```

**Expected Behavior:**
- Documents uncertainty as risk in plan
- Does not fake prototype

**Acceptance Criteria:**
- [ ] Risk documented in plan
- [ ] No fake prototype

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Question Definition | 1 |  |  |
| 2. Minimal Experiment | 1 |  |  |
| 3. Success Criteria | 1 |  |  |
| 4. Instrumented Run | 1 |  |  |
| 5. Results Analysis | 1 |  |  |
| 6. Decision + Cleanup | 1 |  |  |
| 7. Answered Stop | 1 |  |  |
| 8. Budget Stop | 1 |  |  |
| 9. Budget Escalation | 1 |  |  |
| 10. New Uncertainty | 1 |  |  |
| 11. No Prototype Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/11 PASS
- **Skill Status:** ___