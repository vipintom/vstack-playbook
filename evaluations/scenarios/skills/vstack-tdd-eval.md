# Evaluation Scenario: vstack-tdd

**Skill:** vstack-tdd
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Red Phase - Test Fails for Expected Reason (Tier 1 - Deterministic)

**Objective:** Verify test fails for correct reason before implementation.

**Input:**
```
Bug: Off-by-one in pagination (page 2 returns page 1 data)
Test path: pagination.test.ts
```

**Expected Behavior:**
- Test written: "page 2 returns correct offset"
- Test run: FAILS (returns page 1 data)
- Failure reason: offset calculation wrong
- Does NOT pass immediately

**Acceptance Criteria:**
- [ ] Test written before implementation
- [ ] Test fails (RED)
- [ ] Failure reason matches expected bug
- [ ] Does NOT pass immediately

---

## Scenario 2: Green Phase - Minimal Code to Pass (Tier 1 - Deterministic)

**Objective:** Verify minimal implementation makes test pass.

**Input:**
```
Same bug as Scenario 1
```

**Expected Behavior:**
- Implementation: fix offset = (page - 1) * limit
- Test run: PASSES
- No test changes
- No assertion weakening

**Acceptance Criteria:**
- [ ] Test passes (GREEN)
- [ ] Implementation minimal
- [ ] Test unchanged
- [ ] Assertions not weakened

---

## Scenario 3: Verify GREEN - Suite Green (Tier 1 - Deterministic)

**Objective:** Verify full suite green before refactor.

**Input:**
```
Same bug
```

**Expected Behavior:**
- Single test passes
- Related test suite runs: all pass
- No regressions introduced

**Acceptance Criteria:**
- [ ] Target test passes
- [ ] Related suite passes
- [ ] No regressions

---

## Scenario 4: Refactor - Tests Stay Green (Tier 1 - Deterministic)

**Objective:** Verify refactoring preserves test passes.

**Input:**
```
After GREEN, refactor: extract offset helper
```

**Expected Behavior:**
- Refactor applied
- Tests re-run: all pass
- No behavior change

**Acceptance Criteria:**
- [ ] Refactor complete
- [ ] All tests pass
- [ ] Behavior unchanged

---

## Scenario 5: Guardrail - Never Change Tests to Match Wrong Implementation (Tier 1 - Deterministic)

**Objective:** Verify guardrail prevents test modification.

**Input:**
```
Implementation wrong, test would pass if changed
```

**Expected Behavior:**
- STOPs implementation
- Does NOT modify test
- Reports: "wrong test or bug already fixed"

**Acceptance Criteria:**
- [ ] Test not modified
- [ ] Implementation stopped
- [ ] Correct error reported

---

## Scenario 6: Guardrail - Never Weaken Assertions (Tier 1 - Deterministic)

**Objective:** Verify guardrail prevents assertion weakening.

**Input:**
```
Test failing, could weaken assertion to pass
```

**Expected Behavior:**
- Does NOT weaken assertion
- Fixes implementation instead
- Or reports impractical test path

**Acceptance Criteria:**
- [ ] Assertion unchanged
- [ ] Implementation fixed OR impractical documented

---

## Scenario 7: Impractical Test Path - Closest Executable Check (Tier 1 - Deterministic)

**Objective:** Verify fallback when test impractical.

**Input:**
```
Bug in distributed system timing, requires complex harness
```

**Expected Behavior:**
- States why no failing test written
- Uses closest executable check (script, manual, snapshot, log)
- Applies RED/GREEN/REFACTOR to the check

**Acceptance Criteria:**
- [ ] Reason documented
- [ ] Closest check identified
- [ ] Discipline applied to check

---

## Scenario 8: Full Suite Green After (Tier 1 - Deterministic)

**Objective:** Verify full test suite green after all behaviors.

**Input:**
```
Multiple bug behaviors fixed
```

**Expected Behavior:**
- Each behavior has failing-first test
- All tests pass
- Full suite green

**Acceptance Criteria:**
- [ ] All behaviors covered
- [ ] All tests pass
- [ ] Full suite green

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Red Phase | 1 |  |  |
| 2. Green Phase | 1 |  |  |
| 3. Verify Green | 1 |  |  |
| 4. Refactor Green | 1 |  |  |
| 5. Guardrail: Test Change | 1 |  |  |
| 6. Guardrail: Weaken Assertion | 1 |  |  |
| 7. Impractical Test Path | 1 |  |  |
| 8. Full Suite Green | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/8 PASS
- **Skill Status:** ___