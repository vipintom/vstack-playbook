---
name: vstack-blast-radius
description: Identify affected callers, components, data contracts, external behaviour and failure paths for a proposed change
lifecycle: draft
---

# vstack-blast-radius

## Purpose / Outcome

Analyzes the impact radius of a proposed change: affected modules, callers, data contracts, external integrations, failure paths, security boundaries, performance implications, and rollout requirements. Scales depth to risk level.

---

## When to Use (Positive Triggers)

- "What breaks if I change X?" / "Blast radius of..."
- Before any change with meaningful scope or risk
- Planning migrations or breaking changes
- When vstack-how reveals complex dependencies
- As input to vstack-plan-loop for risk assessment

---

## When Not to Use (Negative Triggers)

- Trivial/local changes (one-line fixes, typo corrections)
- When blast radius is obviously minimal and documented
- Current behaviour questions → vstack-how

---

## Required Context / Inputs

- Target change identified
- vstack-how completed for target area
- Repository access

---

## Preconditions

- Current behaviour understood (vstack-how)
- Change scope defined

---

## Procedure

### Step 1: Identify Directly Affected Modules

- Files that will be modified
- Modules that import/depend on modified code
- Public APIs that will change

### Step 2: Trace Callers and Dependents

- Use grep/IDE to find all callers of modified functions/classes
- Trace transitive dependencies (callers of callers)
- Note test files that will need updates

### Step 3: Analyze Data Contracts

- Schema changes (database, API, config, messages)
- Migration requirements (backward/forward compatibility)
- Persisted state that may be affected

### Step 4: Identify External Integrations

- Downstream services consuming changed APIs
- Upstream providers with contract changes
- CI/CD pipelines affected

### Step 5: Map Failure and Retry Paths

- Error handling that may be affected
- Retry logic that may behave differently
- Timeout and circuit breaker configurations

### Step 6: Assess Permissions and Security Boundaries

- Authorization checks in affected paths
- Data access patterns that may change
- Audit/logging implications

### Step 7: Evaluate Performance and Resource Implications

- Complexity changes (algorithmic, memory, CPU)
- Database query plan changes
- Cache behavior changes

### Step 8: Determine Rollout Requirements

- Canary/feature flag needed?
- Rollback procedure
- Monitoring/alerting updates

### Step 9: Scale Depth to Risk

- **Low risk:** Direct callers only
- **Medium risk:** Transitive dependencies + contracts
- **High risk:** Full transitive closure + external + performance

---

## Expected Outputs

- Affected modules list (direct + transitive)
- Public API changes
- Data contract changes + migration needs
- External integration impacts
- Failure path changes
- Security/permission implications
- Performance/resource impact assessment
- Rollout/rollback requirements

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- All direct callers identified
- No unknown external dependencies
- Migration plan exists for contract changes
- Rollback procedure documented

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Cannot trace all callers | Document known, mark unknowns |
| External system access unavailable | Note as assumption, escalate if critical |
| Migration path unclear for contract change | Escalate to Lead, do not proceed |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Blast radius understood proportional to risk
- Time-boxed (default: 15-30 min medium, 1-2 hours high)
- Sufficient for planning and risk assessment

---

## Escalation

- Unknown external dependencies → escalate to Lead
- Breaking change without migration path → escalate, do not proceed
- Cross-team impact → coordinate with affected teams

---

## Fallback

- Without full code search: document known impacts, mark unknowns
- Without external system access: note as assumption

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-how (prerequisite), vstack-why (migration rationale), vstack-plan-loop (consumer)
- **Roles:** Builder (executes), Lead (escalation)
- **Tools:** grep/IDE, git, dependency analysis tools
- **References:** None

---

## Examples

### Example: Medium Risk API Change

**Change:** Modify UserService.getUser() signature
**Execution:**
1. Direct: user-service.ts, 3 callers in auth, 2 in billing
2. Transitive: 5 more via auth/billing
3. Contracts: API response schema changes, needs versioning
4. External: mobile app consumes /users, web dashboard
5. Failure: 404 handling in callers
6. Security: No authz change
7. Performance: Same complexity
8. Rollout: API version v2, canary 10%, rollback to v1
9. Depth: Medium → transitive + contracts

---

## Dependencies / References

- **Principles:** Model Domain Explicitly, Procedures Over Vague Instructions, Evidence Before Assertions
- **Skills:** vstack-how, vstack-why, vstack-plan-loop
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-blast-radius/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 9-step procedure, risk-based depth scaling, data contracts, external integrations, rollout requirements
- **Procedures rewritten:** Explicit step structure, risk tiers, verification criteria, escalation triggers
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-blast-radius.md