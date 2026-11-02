# Evaluation Scenario: vstack-unstick

**Skill:** vstack-unstick
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Trigger After 3 Failures (Tier 1 - Deterministic)

**Objective:** Verify unstick triggers only after 3+ failures.

**Input:**
```
2 failed fix attempts
```

**Expected Behavior:**
- Does NOT invoke unstick
- Continues normal debug/tdd cycle

**Acceptance Criteria:**
- [ ] Does not trigger at 2 failures
- [ ] Normal cycle continues

---

## Scenario 2: Trigger at 3+ Failures (Tier 1 - Deterministic)

**Objective:** Verify unstick triggers at 3+ failures.

**Input:**
```
3 failed fix attempts on same task
```

**Expected Behavior:**
- Invokes unstick
- Stops editing
- Acknowledges wrong belief likely

**Acceptance Criteria:**
- [ ] Triggers at 3+ failures
- [ ] Stops editing
- [ ] Acknowledges assumption issue

---

## Scenario 3: Failed Attempts Documented (Tier 1 - Deterministic)

**Objective:** Verify failed attempts documented with exact errors.

**Input:**
```
3 failed attempts
```

**Expected Behavior:**
- Each attempt documented: change + result + exact error
- List kept for final report

**Acceptance Criteria:**
- [ ] All 3 attempts documented
- [ ] Exact error text included
- [ ] List maintained

---

## Scenario 4: Shared Assumption Named (Tier 1 - Deterministic)

**Objective:** Verify shared assumption named in one sentence.

**Input:**
```
3 failed attempts: all assumed cache was the issue
```

**Expected Behavior:**
- Writes: "The cache is the source of stale data"
- One sentence
- All attempts shared this assumption

**Acceptance Criteria:**
- [ ] One sentence
- [ ] Captures shared assumption
- [ ] Matches all failed attempts

---

## Scenario 5: Cheapest Probe Tests Assumption (Tier 1 - Deterministic)

**Objective:** Verify probe tests assumption directly.

**Input:**
```
Assumption: "The cache is the source of stale data"
```

**Expected Behavior:**
- Uses cheapest probe: grep, print, which, minimal script
- Pastes result
- Yes/no answer

**Acceptance Criteria:**
- [ ] Probe is cheapest possible
- [ ] Tests assumption directly
- [ ] Result pasted

---

## Scenario 6: Assumption False - New Fact (Tier 1 - Deterministic)

**Objective:** Verify plan from new fact when assumption false.

**Input:**
```
Probe: grep shows data comes from localStorage, not cache
```

**Expected Behavior:**
- Assumption FALSE
- Plans fix from new fact (clear localStorage)
- Returns to debug/tdd with corrected understanding

**Acceptance Criteria:**
- [ ] Assumption marked false
- [ ] Fix planned from new fact
- [ ] Returns to normal cycle

---

## Scenario 7: Assumption Holds - 3 Different Approaches (Tier 1 - Deterministic)

**Objective:** Verify 3 materially different approaches listed.

**Input:**
```
Assumption holds: cache IS the source
```

**Expected Behavior:**
- Lists 3 approaches: different mechanism/library/layer/data path
- Not variations of same approach
- Picks one, says why in one sentence

**Acceptance Criteria:**
- [ ] 3 approaches listed
- [ ] Materially different (mechanism/layer/data path)
- [ ] One chosen with reason
- [ ] Not variations of same

---

## Scenario 8: Clean Restart Before New Approach (Tier 1 - Deterministic)

**Objective:** Verify clean restart before new approach.

**Input:**
```
New approach chosen
```

**Expected Behavior:**
- Git stash/checkout if debris
- Records false assumption/chosen approach
- Returns to verify-loop with new approach

**Acceptance Criteria:**
- [ ] Clean state before new approach
- [ ] Checkpoint recorded
- [ ] Returns to verify-loop

---

## Scenario 9: Two-Round Limit (Tier 1 - Deterministic)

**Objective:** Verify two-round limit enforced.

**Input:**
```
2 rounds of unstick failed
```

**Expected Behavior:**
- Reports to user with: attempts, assumptions, evidence, approaches tried, recommendation
- Does not attempt 3rd round

**Acceptance Criteria:**
- [ ] Reports to user
- [ ] Includes: attempts, assumptions, evidence, approaches, recommendation
- [ ] No 3rd round

---

## Scenario 10: Rules Enforced (Tier 1 - Deterministic)

**Objective:** Verify unstick rules enforced.

**Test Cases:**
| Rule | Expected |
|------|----------|
| No repeat failed fix | Enforced |
| Evidence beats reasoning | Enforced |
| Keep failed-attempt list | Enforced |
| Clean state before new approach | Enforced |
| Two-round max | Enforced |

**Acceptance Criteria:**
- [ ] All 5 rules enforced
- [ ] Violations caught

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Trigger at 3+ | 1 |  |  |
| 2. Not at 2 | 1 |  |  |
| 3. Attempts Documented | 1 |  |  |
| 4. Assumption Named | 1 |  |  |
| 5. Probe Tests Assumption | 1 |  |  |
| 6. False Assumption | 1 |  |  |
| 7. 3 Different Approaches | 1 |  |  |
| 8. Clean Restart | 1 |  |  |
| 9. Two-Round Limit | 1 |  |  |
| 10. Rules Enforced | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/10 PASS
- **Skill Status:** ___