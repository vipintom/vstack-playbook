---
name: vstack-plan-review
description: Independently challenge assumptions, omissions, dependencies and unnecessary steps in a plan
lifecycle: draft
---

# vstack-plan-review

## Purpose / Outcome

Provides independent fresh-context challenge of a plan: identifies unverified assumptions, omissions, dependency issues, unnecessary steps, and simpler alternatives. Produces severity-ranked findings and revised plan.

---

## When to Use (Positive Triggers)

- After vstack-plan-loop creates a plan
- Before implementing Standard or Advanced mode tasks
- When plan has high risk or uncertainty

---

## When Not to Use (Negative Triggers)

- For Quick mode tasks (no formal plan)
- For plans with trivial, obvious steps

---

## Required Context / Inputs

- Plan from vstack-plan-loop
- Discovery findings (vstack-how, vstack-blast-radius)
- Architecture decision (if applicable)

---

## Preconditions

- Plan has verifiable steps with acceptance criteria
- Fresh context available (different session or explicit reset)

---

## Procedure

### Step 1: Use Fresh Context

- Start new session or explicitly reset context
- Do not carry implementation reasoning into review

### Step 2: Challenge Each Plan Element

- **Assumptions**: What must be true for each step to work? Are they verified?
- **Omissions**: What steps are missing? (integration, cleanup, migration, rollback, config, docs)
- **Dependencies**: Are dependencies correctly ordered? Any circular deps?
- **Unnecessary steps**: Can any step be removed or simplified?
- **Alternatives**: Is there a simpler approach?

### Step 3: Verify Risky Assumptions

- For each unverified assumption: can it be tested before implementation?
- Mark assumptions that must be validated first

### Step 4: Check Acceptance Criteria

- Does each step have a meaningful verification?
- Are criteria observable and specific?
- Do criteria collectively satisfy delivery acceptance?

### Step 5: Assess Scope and Risk

- Does plan match workflow mode (Quick/Standard/Advanced)?
- Are high-risk steps identified with extra verification?

### Step 6: Produce Review Findings

- Findings: missing steps, unverified assumptions, unnecessary complexity, simpler alternatives
- Severity: Blocker / Major / Minor / Note
- Proposed revisions

---

## Expected Outputs

- Review findings with severity
- Revised plan (or confirmation)
- List of assumptions to verify before implementation

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Review conducted in fresh context
- All assumptions explicitly addressed
- No unverified critical assumptions remain

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Plan fundamentally flawed | Return to vstack-plan-loop |
| Blocker finding | Cannot proceed without resolution |
| Same-context review (weaker) | Label explicitly, document limitation |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Plan validated or revised
- Time-boxed (default: 15-30 min)

---

## Escalation

- Blocker finding → cannot proceed without resolution
- Fundamental disagreement → escalate to Lead

---

## Fallback

- Without fresh context: same-context review with explicit "same-context" label (weaker)

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-plan-loop (produces plan), vstack-how (discovery), vstack-blast-radius (risk assessment)
- **Roles:** Reviewer (challenges), Lead (validates)
- **Tools:** Plan document, discovery artifacts
- **References:** None

---

## Examples

### Example: Auth Plan Review

**Plan:** 7 steps as above
**Findings:**
- Blocker: Step 3 assumes auth library v2, but v1 in package.json (unverified)
- Major: Missing rollback step for DB migration
- Minor: Step 6 integration tests could be parallel
- Note: Consider extracting JWT utility to shared package

---

## Dependencies / References

- **Principles:** Independent Challenge, Evidence Before Assertions, Flexible Workflows
- **Skills:** vstack-plan-loop, vstack-how, vstack-blast-radius
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-plan-review/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Fresh context requirement, 5 challenge categories, assumption verification, acceptance criteria check, severity levels, fallback
- **Procedures rewritten:** Explicit 6-step procedure, fresh context enforcement, challenge categories, escalation
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-plan-review.md