# Evaluation Scenario: performance

**Skill:** performance
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Baseline Establishment (Tier 1 - Deterministic)

**Objective:** Verify baseline established with metrics and environment.

**Input:**
```
Performance requirement: P99 < 200ms
```

**Expected Behavior:**
- Defines metrics: latency, throughput, memory, CPU
- Runs benchmark with current code
- Records baseline with environment details (OS, hardware, versions)

**Acceptance Criteria:**
- [ ] Metrics defined (latency, throughput, memory, CPU)
- [ ] Benchmark run
- [ ] Environment details recorded

---

## Scenario 2: Bottleneck Identification (Tier 1 - Deterministic)

**Objective:** Verify profiling identifies hot paths.

**Input:**
```
Baseline: P99 = 450ms (exceeds 200ms target)
```

**Expected Behavior:**
- Profiles under load
- Analyzes: CPU, memory, I/O, lock contention, GC
- Locates hot paths

**Acceptance Criteria:**
- [ ] Profiling runs under load
- [ ] All 5 dimensions analyzed
- [ ] Hot paths located

---

## Scenario 3: Hypothesis and Test (Tier 1 - Deterministic)

**Objective:** Verify hypothesis-driven optimization.

**Input:**
```
Hot path: JSON serialization
Hypothesis: binary serializer faster
```

**Expected Behavior:**
- Forms optimization hypothesis
- Implements minimal change
- Benchmarks and compares

**Acceptance Criteria:**
- [ ] Hypothesis formed
- [ ] Minimal change implemented
- [ ] Benchmark comparison

---

## Scenario 4: Verification - Improvement Meets Criteria (Tier 1 - Deterministic)

**Objective:** Verify improvement verified against criteria.

**Input:**
```
Optimization: binary serializer
Result: P99 = 150ms
```

**Expected Behavior:**
- Confirms improvement meets criteria (P99 < 200ms)
- Runs functional verification
- Checks for regressions

**Acceptance Criteria:**
- [ ] Improvement meets criteria
- [ ] Functional verification passes
- [ ] No regressions

---

## Scenario 5: Documentation Complete (Tier 1 - Deterministic)

**Objective:** Verify documentation captures baseline vs optimized, changes, trade-offs.

**Expected Output:**
- Baseline vs optimized metrics
- Changes made
- Trade-offs (complexity, maintainability)

**Acceptance Criteria:**
- [ ] Baseline vs optimized metrics
- [ ] Changes documented
- [ ] Trade-offs documented (complexity, maintainability)

---

## Scenario 6: Stop Conditions - Target Met (Tier 1 - Deterministic)

**Objective:** Verify stops when target met.

**Input:**
```
P99 = 150ms (target 200ms)
```

**Expected Behavior:**
- Stops (target met)
- Records final state

**Acceptance Criteria:**
- [ ] Stops when target met
- [ ] Final state recorded

---

## Scenario 7: Stop Conditions - Diminishing Returns (Tier 1 - Deterministic)

**Objective:** Verify stops when diminishing returns.

**Input:**
```
Optimizations: 150ms → 140ms → 138ms (marginal gains)
```

**Expected Behavior:**
- Stops (diminishing returns)
- Documents diminishing returns

**Acceptance Criteria:**
- [ ] Stops on diminishing returns
- [ ] Documents diminishing returns

---

## Scenario 8: Escalation - Architectural Change (Tier 1 - Deterministic)

**Objective:** Verify escalation when bottleneck requires architectural change.

**Input:**
```
Bottleneck: database schema design
```

**Expected Behavior:**
- Escalates to design
- Does not attempt code-only fix

**Acceptance Criteria:**
- [ ] Escalates to architect
- [ ] No code-only fix attempt

---

## Scenario 9: Escalation - No Measurable Improvement (Tier 1 - Deterministic)

**Objective:** Verify escalation when no improvement possible.

**Input:**
```
All optimizations tried, no improvement
```

**Expected Behavior:**
- Escalates to Lead
- Documents no improvement

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Documents no improvement

---

## Scenario 10: Fallback Without Profiling Tools (Tier 1 - Deterministic)

**Objective:** Verify fallback when profiling tools unavailable.

**Input:**
```
No profiling tools available
```

**Expected Behavior:**
- Uses manual timing, logging
- Documents fallback used

**Acceptance Criteria:**
- [ ] Manual timing/logging used
- [ ] Fallback documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Baseline | 1 |  |  |
| 2. Bottleneck | 1 |  |  |
| 3. Hypothesis | 1 |  |  |
| 4. Verification | 1 |  |  |
| 5. Documentation | 1 |  |  |
| 6. Target Met | 1 |  |  |
| 7. Diminishing Returns | 1 |  |  |
| 8. Architectural Escalation | 1 |  |  |
| 9. No Improvement Escalation | 1 |  |  |
| 10. Tooling Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/10 PASS
- **Skill Status:** ___