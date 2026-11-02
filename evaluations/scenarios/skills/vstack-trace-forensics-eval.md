# Evaluation Scenario: vstack-trace-forensics

**Skill:** vstack-trace-forensics
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Analysis Target Identified (Tier 1 - Deterministic)

**Objective:** Verify analysis target correctly identified.

**Input:**
```
Trace files: Jaeger traces from 14:30-14:35
Profile: CPU profile from 14:32
Memory: heap dump at 14:35
```

**Expected Behavior:**
- Identifies: specific request trace
- Identifies: profile time range
- Identifies: memory snapshot

**Acceptance Criteria:**
- [ ] Request trace identified
- [ ] Profile time range identified
- [ ] Memory snapshot identified

---

## Scenario 2: Trace Analysis Complete (Tier 1 - Deterministic)

**Objective:** Verify all 4 trace analysis dimensions.

**Input:**
```
Jaeger traces from incident
```

**Expected Behavior:**
- Service map and dependencies
- Latency breakdown per span
- Error spans and causes
- Critical path identification

**Acceptance Criteria:**
- [ ] Service map + dependencies
- [ ] Latency breakdown per span
- [ ] Error spans + causes
- [ ] Critical path identified

---

## Scenario 3: Profile Analysis Complete (Tier 1 - Deterministic)

**Objective:** Verify all 3 profile analysis dimensions.

**Input:**
```
CPU profile from incident
```

**Expected Behavior:**
- CPU: hot functions, lock contention
- Memory: allocation sites, retention, leaks
- GC: frequency, pause times, promotion rate

**Acceptance Criteria:**
- [ ] CPU: hot functions + lock contention
- [ ] Memory: allocation + retention + leaks
- [ ] GC: frequency + pause times + promotion rate

---

## Scenario 4: Memory Analysis Complete (Tier 1 - Deterministic)

**Objective:** Verify all 3 memory analysis dimensions.

**Input:**
```
Heap dump from 4hr runtime
```

**Expected Behavior:**
- Heap: retained objects, dominator tree
- Leaks: growing objects, root references
- Fragmentation

**Acceptance Criteria:**
- [ ] Heap: retained + dominator tree
- [ ] Leaks: growing objects + root refs
- [ ] Fragmentation analyzed

---

## Scenario 5: Findings Synthesized (Tier 1 - Deterministic)

**Objective:** Verify cross-correlation and synthesis.

**Input:**
```
Trace + profile + memory data
```

**Expected Behavior:**
- Correlates trace + profile + memory
- Identifies root cause
- Quantifies impact

**Acceptance Criteria:**
- [ ] Cross-correlation done
- [ ] Root cause identified
- [ ] Impact quantified

---

## Scenario 6: Recommendations Actionable (Tier 1 - Deterministic)

**Objective:** Verify recommendations specific and testable.

**Input:**
```
Root cause: session cache leak
```

**Expected Behavior:**
- Code changes (specific)
- Config changes (specific)
- Architecture changes (if needed)

**Acceptance Criteria:**
- [ ] Code changes specific
- [ ] Config changes specific
- [ ] Architecture changes if needed

---

## Scenario 7: Verification - Findings Grounded (Tier 1 - Deterministic)

**Objective:** Verify findings grounded in data.

**Expected Behavior:**
- All findings reference trace/profile/memory data
- No speculative claims

**Acceptance Criteria:**
- [ ] All findings grounded
- [ ] No unsupported claims

---

## Scenario 8: Verification - Recommendations Testable (Tier 1 - Deterministic)

**Objective:** Verify recommendations specific and testable.

**Input:**
```
Recommendation: fix session cache cleanup
```

**Expected Behavior:**
- Recommendation: add cleanup hook in session manager
- Test: verify cache size stabilizes over 4hr
- Metric: cache size < threshold

**Acceptance Criteria:**
- [ ] Recommendations specific
- [ ] Testable criteria provided

---

## Scenario 9: Escalation - Architectural Change (Tier 1 - Deterministic)

**Objective:** Verify escalation when root cause requires architecture change.

**Input:**
```
Root cause: distributed cache architecture
```

**Expected Behavior:**
- Escalates to vstack-architect
- Does not attempt code-only fix

**Acceptance Criteria:**
- [ ] Escalates to architect
- [ ] No code-only fix attempt

---

## Scenario 10: Escalation - Tooling Unavailable (Tier 1 - Deterministic)

**Objective:** Verify escalation when tooling unavailable.

**Input:**
```
No trace analysis tools available
```

**Expected Behavior:**
- Escalates to Lead
- Documents tooling gap

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] Documents tooling gap

---

## Scenario 11: Fallback Without Traces (Tier 1 - Deterministic)

**Objective:** Verify fallback to runtime forensics.

**Input:**
```
No trace/profiling data available
```

**Expected Behavior:**
- Falls back to vstack-runtime-forensics live diagnosis
- Documents fallback

**Acceptance Criteria:**
- [ ] Falls back to runtime-forensics
- [ ] Fallback documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Target Identified | 1 |  |  |
| 2. Trace Analysis | 1 |  |  |
| 3. Profile Analysis | 1 |  |  |
| 4. Memory Analysis | 1 |  |  |
| 5. Synthesis | 1 |  |  |
| 6. Recommendations | 1 |  |  |
| 7. Findings Grounded | 1 |  |  |
| 8. Recs Testable | 1 |  |  |
| 9. Architectural Escalation | 1 |  |  |
| 10. Tooling Escalation | 1 |  |  |
| 11. Runtime Forensics Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/11 PASS
- **Skill Status:** ___