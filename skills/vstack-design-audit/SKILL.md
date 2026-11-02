---
name: vstack-design-audit
description: Audit an existing design or implementation against relevant quality attributes
lifecycle: draft
---

# vstack-design-audit

## Purpose / Outcome

Performs structured audit of a design or implementation against defined quality attributes (correctness, security, performance, maintainability, scalability, observability, operability), scoring each attribute and producing prioritized findings with actionable recommendations.

---

## When to Use (Positive Triggers)

- Before major changes to assess current state
- After implementation to validate against design
- When inheriting unfamiliar code
- As part of vstack-review-loop for high-risk changes

---

## When Not to Use (Negative Triggers)

- For routine changes with clear scope
- When design is already validated

---

## Required Context / Inputs

- Target design or implementation
- Quality attributes relevant to context
- Access to code and documentation

---

## Preconditions

- Quality attributes defined for audit scope

---

## Procedure

### Step 1: Define Audit Scope and Attributes

- Attributes: correctness, security, performance, maintainability, scalability, observability, operability
- Select relevant subset for context
- Define pass/fail criteria per attribute

### Step 2: Inspect Against Each Attribute

- **Correctness**: invariants, edge cases, error handling, state consistency
- **Security**: authorization, input validation, secrets, data exposure, attack surface
- **Performance**: complexity, resource usage, bottlenecks, scalability limits
- **Maintainability**: coupling, cohesion, naming, documentation, test coverage
- **Scalability**: horizontal/vertical limits, partition strategy, state management
- **Observability**: logging, metrics, tracing, alerting coverage
- **Operability**: deployment, rollback, config, debugging support

### Step 3: Collect Evidence

- Code references for each finding
- Metrics/benchmarks where available
- Test coverage gaps

### Step 4: Score and Summarize

- Per-attribute: PASS / CONCERN / FAIL
- Overall: acceptable / needs improvement / blocking
- Prioritize findings by risk

### Step 5: Report Findings

- Structured findings with location, severity, evidence, recommendation
- Recommendations per finding
- Risk of not addressing

---

## Expected Outputs

- Audit report with per-attribute scores
- Structured findings (location, severity, evidence, recommendation)
- Prioritized improvement list

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- All scoped attributes evaluated
- Findings grounded in code evidence
- Recommendations actionable

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Blocking finding | Escalate to Lead, do not proceed without mitigation |
| Scope creep | Return to defined scope |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Audit complete for scoped attributes
- Time-boxed (default: 1-2 hours)

---

## Escalation

- Blocking finding → escalate to Lead, do not proceed without mitigation
- Scope creep → return to defined scope

---

## Fallback

- Without formal audit: document key concerns in review brief

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-how (current behaviour), vstack-why (design rationale), vstack-review-loop (consumer), vstack-interrogate (adversarial audit)
- **Roles:** Auditor (executes), Lead (receives)
- **Tools:** Code analysis, metrics, benchmarks
- **References:** None

---

## Examples

### Example: API Service Audit

**Scope:** Payment service before migration
**Attributes:** Correctness, Security, Performance, Operability
**Findings:**
- Correctness: CONCERN — missing idempotency key validation
- Security: FAIL — hardcoded API key in config
- Performance: PASS — latency within limits
- Operability: CONCERN — no rollback procedure for migration
**Recommendations:** Add idempotency, rotate key, document rollback

---

## Dependencies / References

- **Principles:** Evidence Before Assertions, Model Domain Explicitly, Procedures Over Vague Instructions
- **Skills:** vstack-how, vstack-why, vstack-review-loop, vstack-interrogate
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-design-audit/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 5-step procedure, 7 quality attributes, PASS/CONCERN/FAIL scoring, evidence collection, prioritized findings
- **Procedures rewritten:** Explicit step structure, attribute definitions, scoring, escalation
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-design-audit.md