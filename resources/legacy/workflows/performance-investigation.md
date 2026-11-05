# Workflow: Performance Investigation

## Trigger & Suitability
- Performance regression detected (metrics, user reports, CI benchmarks)
- Optimization need (latency, throughput, resource usage, cost)
- Capacity planning (will it scale?)
- Not a clear bug with known fix (that's `bug-fixing`)
- Risk: medium to high (production impact possible)

## Roles & Responsibilities

| Phase | Lead | Builder | Reviewer |
|---|---|---|---|
| Sharpen | Owns | — | — |
| Discovery | Coordinates | Executes | — |
| Hypothesis | Decides | Proposes | Challenges |
| Experiment | Coordinates | Executes | — |
| Verify | Validates | Tests | — |
| Report | Owns | Contributes | — |

## Skill Sequence

### 1. Sharpen (`vstack-sharpen`)
- Define: regression vs optimization, target metric, baseline, environment
- Identify constraints: prod access, data volume, timebox
- **Required:** Always — clear metric and baseline

### 2. Discovery (`vstack-how`, `vstack-why`, `vstack-blast-radius`, `vstack-performance`, `vstack-trace-forensics`)
- `vstack-how` — code paths for target operation
- `vstack-why` — design decisions affecting performance
- `vstack-blast-radius` — related operations, shared resources
- `vstack-performance` — profiling methodology
- `vstack-trace-forensics` — distributed tracing, flame graphs
- **Output:** Profile data, bottleneck candidates

### 3. Hypothesis Formation (`vstack-figure-it-out`)
- Generate 2-3 hypotheses ranked by impact × likelihood
- Each: expected improvement, test method, risk
- **Required:** Written before experiments

### 4. Experiment Loop (`vstack-performance`, `vstack-prototype`, `vstack-verify-loop`)
- For each hypothesis: implement minimal change, measure, compare
- `vstack-prototype` — throwaway implementation for validation
- `vstack-verify-loop` — benchmark run with statistical rigor
- **Bounded:** Max 3 experiments before escalation
- **Escalation:** `vstack-unstick` if no improvement

### 5. Verification (`vstack-verify-loop`, `vstack-performance`)
- Sustained load test (not single run)
- Regression suite: ensure no functional regressions
- Compare: baseline vs optimized across percentiles (p50, p95, p99)
- **Required:** Statistical significance, not single measurement

### 6. Report (`vstack-lessons`, `vstack-ledger`)
- Document: baseline, hypotheses, experiments, results, recommended change
- If optimization → hand off to `feature-delivery` or `refactoring`
- If regression → hand off to `bug-fixing` with root cause

## Risk Adaptation

| Risk | Discovery | Experiments | Verification |
|---|---|---|---|
| Low (dev, non-critical) | Light | 1-2 | Quick bench |
| Medium (staging, user-facing) | Standard | 2-3 | Load test |
| High (prod, revenue-critical) | Deep + prod trace | 3+ | Sustained + canary |

## Parallel Work
- Independent hypotheses → parallel Builders
- Shared infrastructure (test env) → coordinate
- Lead synthesizes results

## Without Plugin
- Manual profiling, benchmark scripts
- Results in PERF_INVESTIGATION.md

## With Plugin
- `vstack_delivery` type: performance
- `vstack_task` per hypothesis/experiment
- `vstack_check` runs benchmarks, records metrics
- `vstack_memory` persists profiles, flame graphs
- `vstack_agent` for parallel experiment execution