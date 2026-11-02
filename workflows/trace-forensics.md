# Workflow: Trace Forensics

## Trigger & Suitability
- Distributed trace analysis needed: latency spikes, error propagation, dependency failures
- Service mesh / microservices debugging
- Request flow understanding across service boundaries
- Not for single-service profiling (use `performance-investigation`)
- Not for crash analysis (use `runtime-forensics`)
- Risk: medium (production trace data)

## Roles & Responsibilities

| Phase | Lead | Builder | Reviewer |
|---|---|---|---|
| Sharpen | Owns | — | — |
| Collect | Coordinates | Executes | — |
| Analyze | Decides | Executes | Challenges |
| Correlate | Coordinates | Executes | — |
| Report | Owns | Contributes | — |

## Skill Sequence

### 1. Sharpen (`vstack-sharpen`)
- Define question: "Why is request X slow?" "Where does error Y originate?" "What calls service Z?"
- Identify: trace system (Jaeger, Zipkin, Tempo, X-Ray), time window, service scope
- Define: sampling rate, retention, PII constraints
- **Required:** Always — trace analysis needs focused question

### 2. Collection (`vstack-trace-forensics`, `vstack-how`)
- `vstack-trace-forensics` — query trace backend:
  - Service map (dependencies, call graph)
  - Latency distribution (p50, p95, p99 per service/operation)
  - Error rates and types per service
  - Span attributes (db queries, HTTP status, queue depth)
  - Trace comparison (baseline vs incident window)
- `vstack-how` — understand service contracts, expected call patterns

### 3. Analysis (`vstack-trace-forensics`, `vstack-debug`, `vstack-why`)
- `vstack-trace-forensics` — deep trace inspection:
  - Critical path identification (longest spans)
  - Error propagation (upstream → downstream)
  - Resource saturation signals (queue time, thread pool, connection pool)
  - Retry storms, cascade failures
- `vstack-debug` — correlate with code: find span → find code
- `vstack-why` — recent changes to affected services

### 4. Correlation (`vstack-trace-forensics`, `vstack-runtime-forensics`)
- Correlate traces with:
  - Metrics (CPU, memory, network, GC at trace timestamps)
  - Logs (structured logs linked by trace ID)
  - Deployments (version changes at incident time)
  - Config changes (feature flags, timeouts, circuit breakers)
- **Output:** Annotated trace with root cause indicators

### 5. Report (`vstack-lessons`, `vstack-ledger`)
- Trace analysis report: question, method, findings, root cause, fix recommendation
- If fix clear → hand off to `bug-fixing` or `performance-investigation`
- If systemic → hand off to `architecture-change` or `infrastructure-change`
- `vstack-lessons` — trace instrumentation gaps, observation patterns

## Risk Adaptation

| Risk | Collection | Analysis | Correlation |
|---|---|---|---|
| Low (dev/staging) | Sampled | Focused | Logs only |
| Medium (prod, non-critical) | Full window | Standard | Metrics + logs |
| High (prod, revenue) | Full + export | Deep + expert | All sources |

## Parallel Work
- Multiple trace queries parallel (different services, time windows)
- Lead synthesizes service-map view

## Without Plugin
- Manual trace UI queries
- Export traces for local analysis
- Report in TRACE_ANALYSIS.md

## With Plugin
- `vstack_delivery` type: trace-forensics
- `vstack_task` per query/analysis
- `vstack_trace_forensics` queries backend, analyzes
- `vstack_check` records trace evidence
- `vstack_memory` persists trace data, annotations
- `vstack_agent` for parallel trace queries