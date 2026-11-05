---
name: forensics
description: Interpret profiling, tracing or memory artifacts
lifecycle: draft
---

# forensics

## Purpose / Outcome

Analyzes profiling, tracing, or memory artifacts to identify root causes, quantify impact, and recommend actionable improvements.

---

## When to Use (Positive Triggers)

- When forensics or performance produces traces
- When memory/CPU profiling available
- For post-mortem analysis

---

## When Not to Use (Negative Triggers)

- For live diagnosis (use forensics)
- Without trace/profiling data

---

## Required Context / Inputs

- Trace files (Jaeger, Zipkin, OpenTelemetry, etc.)
- Profile data (pprof, perf, async-profiler, etc.)
- Memory snapshots (heap dumps, etc.)

---

## Preconditions

- Trace/profiling data collected
- Analysis tools available

---

## Procedure

### Step 1: Identify Analysis Target

- Specific request trace
- Profile time range
- Memory snapshot

### Step 2: Analyze Traces

- Service map and dependencies
- Latency breakdown per span
- Error spans and causes
- Critical path identification

### Step 3: Analyze Profiles

- CPU: hot functions, lock contention
- Memory: allocation sites, retention, leaks
- GC: frequency, pause times, promotion rate

### Step 4: Analyze Memory

- Heap: retained objects, dominator tree
- Leaks: growing objects, root references
- Fragmentation

### Step 5: Synthesize Findings

- Correlate trace + profile + memory
- Identify root cause
- Quantify impact

### Step 6: Recommend Actions

- Code changes
- Config changes
- Architecture changes

---

## Expected Outputs

- Analysis report with findings
- Quantified impact
- Actionable recommendations

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Findings grounded in trace/profile data
- Recommendations specific and testable

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Root cause requires architectural change | design |
| Tooling unavailable | Escalate to Lead |
| No trace data | forensics live diagnosis |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Analysis complete
- Time-boxed (default: 1-2 hours)

---

## Escalation

- Root cause requires architectural change → design
- Tooling unavailable → escalate to Lead

---

## Fallback

- Without traces: forensics live diagnosis

---

## Skill / Role / Tool Routing

- **Skills invoked:** forensics (live), performance (optimization), debug (code-level)
- **Roles:** Analyst (executes), Lead (escalation)
- **Tools:** Trace analysis tools, profilers, memory analyzers
- **References:** None

---

## Examples

### Example: Memory Leak Analysis

**Artifact:** Heap dump after 4h runtime
**Analysis:** Dominator tree shows growing array in session manager
**Root cause:** Sessions not cleaned up on logout
**Impact:** 200MB/hour growth
**Recommendation:** Add cleanup hook, fix in debug

---

## Dependencies / References

- **Principles:** Fix Root Causes, Model Domain Explicitly, Evidence Before Assertions
- **Skills:** forensics, performance, debug
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/forensics/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 6-step procedure, trace/profile/memory analysis, cross-correlation, quantified impact, actionable recommendations
- **Procedures rewritten:** Explicit step structure, analysis dimensions, synthesis, escalation
- **Disposition:** rewrite
- **Research record:** docs/research/records/forensics.md