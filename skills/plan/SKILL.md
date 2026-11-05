---
name: plan
description: Create, challenge and refine an actionable plan
lifecycle: draft
---

# plan

## Purpose / Outcome

Creates, challenges, and refines an actionable implementation plan: breaks work into verifiable tasks with acceptance criteria, identifies dependencies, assigns task types, estimates risk, and validates with Lead.

---

## When to Use (Positive Triggers)

- After code-tour/why/blast-radius (and blueprint if architectural)
- Before any implementation with multiple steps or dependencies
- When Lead needs to coordinate multiple tasks/agents

---

## When Not to Use (Negative Triggers)

- For single-step trivial changes
- When plan already exists and is validated

---

## Required Context / Inputs

- Sharpened problem and acceptance criteria
- Discovery summary
- Blueprint (if architectural)
- Project conventions and constraints

---

## Preconditions

- Discovery complete (how/why/blast-radius)
- Architecture decision recorded (if applicable)

---

## Procedure

### Step 1: Draft Initial Plan

- Break into tasks with clear boundaries
- Define acceptance criteria per task
- Identify dependencies between tasks
- Assign task types (discovery, implementation, test, review, etc.)
- Estimate risk per task

### Step 2: Challenge the Plan

- Are tasks truly independent where parallel?
- Are acceptance criteria testable?
- Are dependencies correctly identified?
- Is risk appropriately addressed (review, evidence, parallelism)?
- Does it degrade gracefully without advanced harness features?

### Step 3: Refine

- Incorporate challenges
- Split/merge tasks
- Adjust criteria

### Step 4: Validate

- Lead confirms plan enables coordination and evidence

### Step 5: Record

- Plan with tasks, dependencies, criteria, risk levels

---

## Expected Outputs

- Task list with: title, description, acceptance criteria, dependencies, type, risk
- Dependency graph
- Risk assessment per task
- Coordination notes for Lead

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- All tasks have testable acceptance criteria
- Dependencies form a DAG (no cycles)
- High-risk tasks have review/evidence requirements specified
- Plan works sequentially if parallel unavailable

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Plan cannot be validated | Return to code-tour/why/blast-radius or blueprint |
| Fundamental disagreement on approach | Lead decides, documents rationale |
| Cyclic dependencies detected | Redesign task boundaries |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Plan challenged, refined, and validated
- Ready for task execution

---

## Escalation

- Plan cannot be validated → return to discovery or blueprint
- Fundamental disagreement on approach → Lead decides, documents rationale

---

## Skill / Role / Tool Routing

- **Skills invoked:** code-tour (discovery), impact (risk assessment), blueprint (design), tdd (implementation tasks), review (review tasks)
- **Roles:** Lead (creates, validates), Builder (executes), Reviewer (challenges)
- **Tools:** Plan document, dependency graph
- **References:** None

---

## Examples

### Example: Auth Feature Plan

**Discovery:** Need login, register, logout, protected routes
**Blueprint:** JWT with refresh tokens, strategy pattern for providers
**Plan:**
1. Types/interfaces (discovery, low risk)
2. JWT utility (implementation, medium risk, TDD)
3. Login endpoint (implementation, high risk, TDD + review)
4. Register endpoint (implementation, high risk, TDD + review)
5. Protected routes middleware (implementation, high risk, TDD + review)
6. Integration tests (test, medium risk)
7. Review (review, low risk)

---

## Dependencies / References

- **Templates:** `templates/delivery-plan.md`, `templates/task.md`

- **Principles:** Procedures Over Vague Instructions, Verifiable Increments, Flexible Workflows, Degrade Gracefully
- **Skills:** code-tour, impact, blueprint, tdd, review
- **References:** None

