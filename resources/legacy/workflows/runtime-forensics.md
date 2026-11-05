# Workflow: Runtime Forensics

## Trigger & Suitability
- Production incident: crash, hang, memory leak, data corruption, security event
- Need to analyze runtime state post-mortem (logs, memory, traces, metrics)
- Not for performance optimization (use `performance-investigation`)
- Not for bug with clear reproduction (use `bug-fixing`)
- Risk: critical (production impact, data sensitivity)

## Roles & Responsibilities

| Phase | Lead | Builder | Reviewer |
|---|---|---|---|
| Sharpen | Owns | — | — |
| Collect | Coordinates | Executes | — |
| Analyze | Decides | Executes | Challenges |
| Hypothesis | Decides | Proposes | Challenges |
| Verify | Validates | Tests | — |
| Report | Owns | Contributes | Validates |

## Skill Sequence

### 1. Sharpen (`vstack-sharpen`)
- Define incident: symptoms, onset, scope, impact, severity
- Identify available artifacts: logs, metrics, traces, dumps, core files
- Define constraints: data retention, PII, access, timebox
- **Required:** Always — forensics needs clear scope

### 2. Collection (`vstack-runtime-forensics`, `vstack-trace-forensics`)
- `vstack-runtime-forensics` — collect:
  - Application logs (structured, correlated by request ID)
  - Infrastructure logs (container, network, disk, memory)
  - Metrics (time-series, percentiles, anomalies)
  - Traces (distributed, span attributes)
  - Memory dumps / core files (if crash)
  - Deployment context (version, config, feature flags)
- **Chain of custody:** Hash artifacts, record collection time/actor

### 3. Analysis (`vstack-how`, `vstack-why`, `vstack-runtime-forensics`, `vstack-trace-forensics`)
- `vstack-how` — code paths for observed failure mode
- `vstack-why` — recent changes, deployments, config changes
- `vstack-runtime-forensics` — analyze dumps, logs, traces
- `vstack-trace-forensics` — trace analysis: latency, errors, dependencies
- **Output:** Timeline, anomaly clusters, candidate root causes

### 4. Hypothesis (`vstack-figure-it-out`, `vstack-debug`)
- Generate hypotheses ranked by evidence strength
- Each: explanation, supporting evidence, falsification test
- **Bounded:** Max 3 hypotheses before escalation

### 5. Verification (`vstack-verify-loop`, `vstack-debug`, `vstack-prototype`)
- Test hypotheses against collected artifacts
- `vstack-debug` — reproduce in staging if possible
- `vstack-prototype` — minimal reproduction if needed
- **Required:** At least one hypothesis confirmed or all falsified

### 6. Report (`vstack-lessons`, `vstack-ledger`, `vstack-review-loop`)
- Incident report: timeline, root cause, impact, resolution, prevention
- `vstack-lessons` — systemic patterns, tooling gaps
- `vstack-review-loop` — independent review of report (security lens if applicable)
- **Required:** Action items with owners, deadlines

## Risk Adaptation

| Risk | Collection | Analysis | Review |
|---|---|---|---|
| High (prod, data loss) | Full + legal | Deep + expert | Full + security |
| Critical (security, outage) | Full + forensic | Deep + external | Jury + legal |

## Parallel Work
- Artifact collection parallel (logs, metrics, traces, dumps)
- Hypothesis testing parallel (multiple Builders)
- Lead coordinates, synthesizes

## Without Plugin
- Manual artifact collection from observability stack
- Analysis in local environment
- Report in INCIDENT.md

## With Plugin
- `vstack_delivery` type: forensics
- `vstack_task` per artifact type / hypothesis
- `vstack_runtime_forensics` tool collects/analyzes
- `vstack_trace_forensics` analyzes traces
- `vstack_check` records evidence chain
- `vstack_memory` persists artifacts, timeline
- `vstack_agent` for parallel hypothesis testing