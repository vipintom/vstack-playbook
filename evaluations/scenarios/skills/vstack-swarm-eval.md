# Evaluation Scenario: red-team

**Skill:** red-team
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Slice Shape with Coverage (Tier 1 - Deterministic)

**Objective:** Verify slice shape partitions work and tracks coverage.

**Input:**
```
Task: Run tests for all 12 packages
Shape: Slices (1 package per worker, 4 workers × 3 packages)
```

**Expected Behavior:**
- Done predicate: all packages tested, results captured
- Shape declared: slices (partition)
- Workers: 4, each gets 3 packages
- Isolation: directory per worker

**Acceptance Criteria:**
- [ ] Done predicate defined
- [ ] Shape = slices
- [ ] 4 workers × 3 packages
- [ ] Isolation per worker

---

## Scenario 2: Race Shape with Declared Rule (Tier 1 - Deterministic)

**Objective:** Verify race shape with declared race rule.

**Input:**
```
Task: Build two prototypes, compare
Shape: Race (2 workers, identical brief)
Race rule: rank all (metrics: speed, accuracy, bundle size)
```

**Expected Behavior:**
- Shape: race
- Race rule declared UPFRONT: rank all
- 2 workers, identical brief
- Metrics captured for ranking

**Acceptance Criteria:**
- [ ] Shape = race
- [ ] Race rule declared before spawn
- [ ] Metrics captured
- [ ] Ranking produced

---

## Scenario 3: Gap Handling - Dropout and Respawn (Tier 1 - Deterministic)

**Objective:** Verify dropouts handled with one respawn.

**Input:**
```
4 workers, 1 drops out (missing SHA)
```

**Expected Behavior:**
- Reads all outputs
- Drops incomplete (missing SHA, missing method, no output)
- Respawns ONCE for dropped workers
- Tracks gaps in report

**Acceptance Criteria:**
- [ ] Incomplete dropped
- [ ] Respawn once
- [ ] Gaps tracked
- [ ] Report includes gaps

---

## Scenario 4: Consolidated Report Format (Tier 1 - Deterministic)

**Objective:** Verify consolidated report has all required sections.

**Expected Report Sections:**
- Result table (worker, status, key metrics)
- Issue one-liners (title, command, output, severity)
- Gaps (missing workers, coverage, respawn outcomes)
- Race rule outcome (if race: winner/ranking/best-of)

**Acceptance Criteria:**
- [ ] Result table with PASS/ISSUES/BLOCKED
- [ ] Issue one-liners with details
- [ ] Gaps documented
- [ ] Race rule outcome (if applicable)

---

## Scenario 5: Result Table Statuses (Tier 1 - Deterministic)

**Objective:** Verify result table uses correct status values.

**Expected Statuses:**
- PASS: all checks pass
- ISSUES: some issues found
- BLOCKED: cannot complete

**Acceptance Criteria:**
- [ ] Only PASS/ISSUES/BLOCKED used
- [ ] Key metrics per worker
- [ ] Status accurate

---

## Scenario 6: Host Cannot Dispatch Parallel (Tier 1 - Deterministic)

**Objective:** Verify sequential fallback documented.

**Input:**
```
Host cannot spawn parallel workers
```

**Expected Behavior:**
- Sequential fallback
- Documents fallback
- Still produces consolidated report

**Acceptance Criteria:**
- [ ] Sequential fallback used
- [ ] Fallback documented
- [ ] Report produced

---

## Scenario 7: All Workers Drop Out (Tier 1 - Deterministic)

**Objective:** Verify systemic failure handling.

**Input:**
```
All workers fail to produce output
```

**Expected Behavior:**
- Reports BLOCKED
- Investigates systemic issue
- Documents in report

**Acceptance Criteria:**
- [ ] Result = BLOCKED
- [ ] Systemic issue investigated
- [ ] Documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Slice Shape | 1 |  |  |
| 2. Race Shape | 1 |  |  |
| 3. Gap Handling | 1 |  |  |
| 4. Report Format | 1 |  |  |
| 5. Result Table | 1 |  |  |
| 6. Sequential Fallback | 1 |  |  |
| 7. All Dropout | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/7 PASS
- **Skill Status:** ___