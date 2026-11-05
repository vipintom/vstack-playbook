---
name: help
description: Select the smallest relevant set of skills
lifecycle: draft
---

# help

## Purpose / Outcome

Navigates the skill catalog by mapping problems to skill families, selecting 1-3 relevant skills, confirming fit via "When to Use", and ordering application.

---

## When to Use (Positive Triggers)

- When starting a new task or delivery
- When stuck and unsure which skill applies
- When a skill references "related skills" you don't know

---

## When Not to Use (Negative Triggers)

- When you already know the exact skill needed

---

## Required Context / Inputs

- Current problem or task description
- Access to skill catalog (`skills/` directory)

---

## Preconditions

- Skill catalog accessible

---

## Procedure

### Step 1: State the Problem

In one sentence

### Step 2: Map to Skill Families

- Foundation & operation → route, shipinciples, help
- Understanding & discovery → sharpen, code-tour, rationale, impact, report, resume
- Architecture & design → design, blueprint, red-team
- Planning → plan, plan
- Implementation → tdd, plan, refactor, unslop
- Verification → verify, verify-setup, verify-maintain
- Debugging & recovery → debug, unstick, recovery
- Review → review, red-team, red-team, rubrics
- Continuity → resume, handoff, resume, decisions, lessons
- Delivery/PR → ship, watch-pr, ready, ship
- Specialist → performance, forensics, forensics, visual-parity
- Isolation → worktree, red-team

### Step 3: Select 1-3 Skills

That directly address the problem

### Step 4: Confirm Fit

Read each skill's "When to Use"

### Step 5: Apply in Sequence

Complete one before starting the next

---

## Expected Outputs

- Minimal set of relevant skills (1-3)
- Order of application

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Each selected skill's "When to Use" matches the problem
- No skill selected "just in case"

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| No skill matches | Use sharpen to clarify problem |
| Too many skills seem relevant | Pick the most specific; others wait |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Relevant skills identified and ordered

---

## Escalation

- No skill matches → use sharpen to clarify problem
- Too many skills seem relevant → pick the most specific; others wait

---

## Skill / Role / Tool Routing

- **Skills invoked:** route (establishes context), sharpen (clarifies underspecified problems)
- **Roles:** Builder (selects), Lead (validates)
- **Tools:** Skill catalog
- **References:** None

---

## Examples

### Example: Debugging a Flaky Test

**Problem:** "Test fails intermittently"
**Families:** Debugging & recovery → debug, unstick
**Selection:** debug (first), then unstick if 3+ failures
**Order:** Debug → Unstick if needed

---

## Dependencies / References

- **Principles:** Procedures Over Vague Instructions, Smallest Complete Change, Harness Independence
- **Skills:** route, sharpen
- **References:** None

