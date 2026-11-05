---
name: performance
description: Establish a baseline and investigate measured performance issues
lifecycle: draft
---

# performance

## Purpose / Outcome

Establishes performance baselines, identifies bottlenecks through profiling, hypothesizes and tests optimizations, verifies improvements against criteria while maintaining functional correctness.

---

## When to Use (Positive Triggers)

- When performance requirements exist
- When verify reveals performance regression
- When lessons identifies performance patterns

---

## When Not to Use (Negative Triggers)

- For functional correctness issues
- Without measurable performance criteria

---

## Required Context / Inputs

- Performance requirements or baseline
- Access to profiling/benchmarking tools
- Representative workload

---

## Preconditions

- Functional correctness verified
- Performance criteria defined

---

## Procedure

### Step 1: Establish Baseline

- Define metrics (latency, throughput, memory, CPU)
- Run benchmark with current code
- Record baseline with environment details

### Step 2: Identify Bottleneck

- Profile under load
- Analyze: CPU, memory, I/O, lock contention, GC
- Locate hot paths

### Step 3: Hypothesize and Test

- Form optimization hypothesis
- Implement minimal change
- Benchmark and compare

### Step 4: Verify

- Confirm improvement meets criteria
- Run functional verification
- Check for regressions

### Step 5: Document

- Baseline vs optimized metrics
- Changes made
- Trade-offs (complexity, maintainability)

---

## Expected Outputs

- Baseline and optimized metrics
- Bottleneck analysis
- Optimized code with verification

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Metrics improve per criteria
- Functional correctness maintained
- No unexpected regressions

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| No profiling tools available | Manual timing, logging |
| Bottleneck requires architectural change | design |
| No measurable improvement | Escalate to Lead |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Target met or diminishing returns
- Time-boxed (default: half-day per iteration)

---

## Escalation

- Bottleneck requires architectural change → design
- No measurable improvement → escalate to Lead

---

## Fallback

- Without profiling tools: manual timing, logging

---

## Skill / Role / Tool Routing

- **Skills invoked:** verify (functional verification), forensics (live diagnosis), forensics (trace analysis)
- **Roles:** Builder (optimizes), Lead (escalation)
- **Tools:** Profiling tools, benchmarking harness
- **References:** None

---

## Examples

### Example: API Latency Optimization

**Requirement:** P99 < 200ms
**Baseline:** P99 = 450ms
**Profile:** CPU hot path in serialization
**Hypothesis:** Replace JSON serializer with binary
**Test:** Benchmark shows P99 = 150ms
**Verify:** Functional tests pass, no regressions
**Document:** 67% improvement, added dependency trade-off

---

## Dependencies / References

- **Principles:** Prove It Works, Model Domain Explicitly, Evidence Before Assertions
- **Skills:** verify, forensics, forensics
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/performance/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 5-step procedure, baseline establishment, profiling, hypothesis testing, trade-off documentation
- **Procedures rewritten:** Explicit step structure, verification integration, escalation paths
- **Disposition:** rewrite
- **Research record:** docs/research/records/performance.md