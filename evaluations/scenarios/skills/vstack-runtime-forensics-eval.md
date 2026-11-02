# Evaluation Scenario: vstack-runtime-forensics

**Skill:** vstack-runtime-forensics
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Symptom Characterization Complete (Tier 1 - Deterministic)

**Objective:** Verify symptom fully characterized.

**Input:**
```
Live system: 500 errors spike to 15% at 14:32
```

**Expected Behavior:**
- What: 500 errors
- When: 14:32
- Frequency: spike
- Scope: affected users/requests
- Error messages captured
- Stack traces captured
- Affected users/requests identified

**Acceptance Criteria:**
- [ ] What/when/frequency/scope
- [ ] Error messages captured
- [ ] Stack traces captured
- [ ] Affected users/requests

---

## Scenario 2: Live Data Gathering Complete (Tier 1 - Deterministic)

**Objective:** Verify all 4 data sources gathered.

**Expected Data Sources:**
- Logs (recent, correlated)
- Metrics (latency, error rate, saturation)
- Traces (request flows)
- System state (memory, CPU, connections)

**Acceptance Criteria:**
- [ ] Logs gathered
- [ ] Metrics gathered
- [ ] Traces gathered
- [ ] System state gathered

---

## Scenario 3: Correlation Accurate (Tier 1 - Deterministic)

**Objective:** Verify time-correlation identifies pattern.

**Input:**
```
Deploy at 14:30, errors spike at 14:32
```

**Expected Behavior:**
- Time-correlates logs/metrics/traces
- Identifies pattern: sudden (not gradual)
- Identifies: constant (not intermittent)
- Narrows to: component/dependency

**Acceptance Criteria:**
- [ ] Time-correlation done
- [ ] Pattern identified (sudden/gradual, constant/intermittent)
- [ ] Component narrowed

---

## Scenario 4: Hypothesis and Safe Probe (Tier 1 - Deterministic)

**Objective:** Verify hypothesis formed and probed safely.

**Input:**
```
Hypothesis: new deploy introduced N+1 query
```

**Expected Behavior:**
- Forms hypothesis
- Safe probe: increase log level, add metric, test request
- Observes effect
- Does NOT make unsafe changes

**Acceptance Criteria:**
- [ ] Hypothesis formed
- [ ] Safe probe executed
- [ ] Effect observed
- [ ] No unsafe changes

---

## Scenario 5: Diagnosis and Mitigation (Tier 1 - Deterministic)

**Objective:** Verify root cause identified and mitigated.

**Input:**
```
Probe confirms: N+1 query from new deploy
```

**Expected Behavior:**
- Root cause identified
- Immediate mitigation: config change, restart, scale
- Long-term fix plan via vstack-debug/vstack-performance

**Acceptance Criteria:**
- [ ] Root cause identified
- [ ] Immediate mitigation applied
- [ ] Long-term fix planned via debug/performance

---

## Scenario 6: Verification - Symptom Mitigated (Tier 1 - Deterministic)

**Objective:** Verify mitigation effectiveness verified.

**Input:**
```
Mitigation: increased connection pool
```

**Expected Behavior:**
- Symptom mitigated (errors drop to 0.1%)
- Root cause plausible
- No new symptoms from mitigation

**Acceptance Criteria:**
- [ ] Symptom mitigated
- [ ] Root cause plausible
- [ ] No new symptoms

---

## Scenario 7: Escalation - Cannot Diagnose (Tier 1 - Deterministic)

**Objective:** Verify escalation when diagnosis fails.

**Input:**
```
All probes inconclusive
```

**Expected Behavior:**
- Escalates to on-call/Lead
- Documents inconclusive

**Acceptance Criteria:**
- [ ] Escalates to on-call/Lead
- [ ] Documents inconclusive

---

## Scenario 8: Escalation - Mitigation Risks (Tier 1 - Deterministic)

**Objective:** Verify escalation when mitigation has risks.

**Input:**
```
Mitigation: restart service (may drop connections)
```

**Expected Behavior:**
- Escalates to Lead
- Does not apply risky mitigation unilaterally

**Acceptance Criteria:**
- [ ] Escalates to Lead
- [ ] No unilateral risky mitigation

---

## Scenario 9: Fallback Without Instrumentation (Tier 1 - Deterministic)

**Objective:** Verify fallback when no instrumentation.

**Input:**
```
No logs, metrics, traces available
```

**Expected Behavior:**
- Adds temporary logging
- Restarts service
- Documents fallback

**Acceptance Criteria:**
- [ ] Temporary logging added
- [ ] Service restarted
- [ ] Fallback documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Symptom Characterization | 1 |  |  |
| 2. Live Data Gathering | 1 |  |  |
| 3. Correlation | 1 |  |  |
| 4. Hypothesis + Safe Probe | 1 |  |  |
| 5. Diagnosis + Mitigation | 1 |  |  |
| 6. Mitigation Verification | 1 |  |  |
| 7. Diagnosis Failure Escalation | 1 |  |  |
| 8. Mitigation Risk Escalation | 1 |  |  |
| 9. Instrumentation Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/9 PASS
- **Skill Status:** ___