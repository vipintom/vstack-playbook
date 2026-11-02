---
name: vstack-runtime-forensics
description: Diagnose live runtime symptoms using available instrumentation
lifecycle: draft
---

# vstack-runtime-forensics

## Purpose / Outcome

Diagnoses live runtime symptoms by characterizing the symptom, gathering live data (logs, metrics, traces), correlating, hypothesizing and probing safely, diagnosing root cause, and applying immediate mitigation.

---

## When to Use (Positive Triggers)

- Live system showing symptoms (errors, latency, crashes)
- When vstack-debug needs runtime context
- When vstack-performance needs live data

---

## When Not to Use (Negative Triggers)

- For code-level bugs reproducible in test
- Without runtime access

---

## Required Context / Inputs

- Access to running system
- Instrumentation (logs, metrics, traces)
- Symptom description

---

## Preconditions

- System accessible for diagnosis
- Instrumentation available

---

## Procedure

### Step 1: Characterize Symptom

- What, when, frequency, scope
- Error messages, stack traces
- Affected users/requests

### Step 2: Gather Live Data

- Logs (recent, correlated)
- Metrics (latency, error rate, saturation)
- Traces (request flows)
- System state (memory, CPU, connections)

### Step 3: Correlate

- Time-correlate logs, metrics, traces
- Identify pattern: sudden/gradual, constant/intermittent
- Narrow to component/dependency

### Step 4: Hypothesize and Probe

- Form hypothesis
- Safe probe: increase log level, add metric, test request
- Observe effect

### Step 5: Diagnose and Mitigate

- Root cause identified
- Immediate mitigation (config, restart, scale)
- Long-term fix via vstack-debug/vstack-performance

---

## Expected Outputs

- Root cause or narrowed hypothesis
- Immediate mitigation
- Long-term fix plan

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Symptom mitigated
- Root cause plausible
- No new symptoms from mitigation

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Cannot diagnose | Escalate to on-call/Lead |
| Mitigation risks | Escalate |
| No instrumentation | Add temporary logging, restart |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Diagnosis complete or mitigation applied
- Time-boxed (default: 1-2 hours for live incident)

---

## Escalation

- Cannot diagnose → escalate to on-call/Lead
- Mitigation risks → escalate

---

## Fallback

- Without instrumentation: add temporary logging, restart

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-debug (code-level), vstack-performance (optimization), vstack-trace-forensics (trace analysis)
- **Roles:** Builder (diagnoses), Lead/On-call (escalation)
- **Tools:** Logging, metrics, tracing systems
- **References:** None

---

## Examples

### Example: Sudden Error Spike

**Symptom:** 500 errors spike to 15% at 14:32
**Data:** Logs show DB connection pool exhausted, metrics confirm saturation, traces show new query path
**Correlate:** New code deploy at 14:30 introduced N+1 query
**Hypothesis:** Connection pool too small for new query pattern
**Probe:** Increase pool size → errors drop to 0.1%
**Mitigate:** Scale pool, long-term: fix N+1 in vstack-debug

---

## Dependencies / References

- **Principles:** Fix Root Causes, Attack the Premise, Prove It Works
- **Skills:** vstack-debug, vstack-performance, vstack-trace-forensics
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-runtime-forensics/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 5-step procedure, symptom characterization, live data gathering, correlation, safe probing, mitigation
- **Procedures rewritten:** Explicit step structure, data sources, correlation methods, escalation
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-runtime-forensics.md