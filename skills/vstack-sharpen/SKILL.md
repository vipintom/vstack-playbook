---
name: vstack-sharpen
description: Clarify and improve an underspecified request
lifecycle: draft
---

# vstack-sharpen

## Purpose / Outcome

Clarifies vague or ambiguous requests by restating in own words, identifying missing pieces (problem, done criteria, constraints, scope), proposing a sharpened version with testable acceptance criteria, and confirming with user.

---

## When to Use (Positive Triggers)

- User request is vague, ambiguous, or missing acceptance criteria
- Before vstack-how/why or vstack-plan-loop
- When Lead cannot form a clear task breakdown

---

## When Not to Use (Negative Triggers)

- Request already has clear problem statement and acceptance criteria

---

## Required Context / Inputs

- Initial user request or problem statement
- Access to user for clarification (or ability to make reasonable assumptions)

---

## Preconditions

- Request available for clarification

---

## Procedure

### Step 1: Restate the Request

In your own words

### Step 2: Identify Missing Pieces

- What is the specific problem?
- What does "done" look like? (acceptance criteria)
- What are the constraints? (time, scope, risk, compatibility)
- What is out of scope?

### Step 3: Propose Sharpened Version

- Clear problem statement
- 3-5 testable acceptance criteria
- Explicit scope boundaries
- Risk level (low/medium/high/critical)

### Step 4: Confirm with User

- Or document assumptions if user unavailable

### Step 5: Record Sharpened Request

As the delivery objective

---

## Expected Outputs

- Sharpened problem statement
- Acceptance criteria (testable, specific)
- Scope boundaries
- Risk assessment

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Acceptance criteria are testable (pass/fail determinable)
- Scope boundaries exclude known out-of-scope items
- Risk level matches potential blast radius

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| User cannot clarify | Document assumptions, proceed with discovery |
| Fundamental ambiguity remains | Escalate to human decision |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- User confirms sharpened request, or assumptions documented

---

## Escalation

- User cannot clarify → document assumptions, proceed with vstack-how/why
- Fundamental ambiguity remains → escalate to human decision

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-how (follows sharpening), vstack-plan-loop (uses sharpened request), vstack-mode (invokes sharpening)
- **Roles:** Lead (sharpens), Builder (executes)
- **Tools:** None specific
- **References:** None

---

## Examples

### Example: Vague Feature Request

**Request:** "Make the dashboard faster"
**Sharpened:** Problem: Dashboard load > 3s | Criteria: 1) Initial paint < 1s, 2) Data fetch < 500ms, 3) Interactions < 100ms | Scope: Dashboard only, not API | Risk: Medium

---

## Dependencies / References

- **Principles:** Procedures Over Vague Instructions, Evidence Before Assertions, Smallest Complete Change
- **Skills:** vstack-how, vstack-plan-loop, vstack-mode
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-sharpen/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 5-step procedure, restatement, missing pieces identification, testable criteria, risk assessment
- **Procedures rewritten:** Explicit step structure, assumption documentation, escalation paths
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-sharpen.md