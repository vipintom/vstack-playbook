---
name: handoff
description: Create a complete worker-to-Lead or session-to-session handoff
lifecycle: draft
---

# handoff

## Purpose / Outcome

Produces a complete context transfer package enabling seamless continuation by another worker, Lead, or session. Includes objective, scope, completed work with evidence, incomplete items, exact next action, blockers, key facts, decisions, failed approaches, and verification status.

---

## When to Use (Positive Triggers)

- Worker completing a task (→ Lead)
- Session ending with work in progress (→ next session)
- Switching roles (Builder → Reviewer)

---

## When Not to Use (Negative Triggers)

- For routine check-ins (use tool updates)
- When no context transfer needed

---

## Required Context / Inputs

- Completed or in-progress work
- Checkpoint or runtime state

---

## Preconditions

- Work has verifiable progress
- Next recipient identified

---

## Procedure

### Step 1: Prepare Handoff Package

- **Objective**: What was the goal?
- **Scope**: What was included/excluded?
- **Completed**: What was done with evidence?
- **Incomplete**: What remains?
- **Next action**: Exact next step
- **Blockers**: Dependencies, decisions needed
- **Key facts**: Paths, commands, versions, constraints
- **Decisions**: Important choices made
- **Failed approaches**: What failed and why
- **Verification status**: Checks run, results, remaining

### Step 2: Validate Completeness

- All contract items addressed
- Evidence referenced
- No ambiguous next steps

### Step 3: Transfer Context

- Update `PROGRESS.md` (for session handoff)
- Update runtime task state (if plugin available)
- Brief recipient (async or sync)

### Step 4: Recipient Validates

- resume or resume
- Confirms understanding
- Begins from exact next action

---

## Expected Outputs

- Complete handoff document/checkpoint
- Updated `PROGRESS.md` or task state
- Recipient ready to proceed

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Recipient can articulate next action
- No information loss
- Evidence traceable

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Incomplete evidence | Do not handoff, complete verification |
| Recipient cannot validate | Escalate to Lead |
| Ambiguous next action | Clarify before handoff |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Handoff complete and validated
- Time-boxed (default: 10-15 min)

---

## Escalation

- Recipient cannot validate → escalate to Lead
- Critical information missing → reconstruct before handoff

---

## Fallback

- Without plugin: `PROGRESS.md` + verbal/written brief
- Without `PROGRESS.md`: detailed commit messages + git log

---

## Skill / Role / Tool Routing

- **Skills invoked:** red-team (worker completion), resume (checkpoint), resume (resume), resume (reconstruction)
- **Roles:** Worker (prepares), Lead/Next Session (receives)
- **Tools:** PROGRESS.md, runtime state, git
- **References:** None

---

## Examples

### Example: Worker-to-Lead Handoff

**Worker:** Completed login endpoint implementation
**Package:** Objective, 3 tests passing (evidence), 1 test pending (mock auth), next action: implement register, blocker: auth library version, key fact: JWT secret in env, decision: use refresh tokens

---

## Dependencies / References

- **Principles:** Evidence Before Assertions, Clear Source of Responsibility, Procedures Over Vague Instructions
- **Skills:** resume, resume, handoff, resume
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/handoff/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 10-item handoff package, completeness validation, PROGRESS.md update, recipient validation, fallback
- **Procedures rewritten:** Explicit 4-step procedure, evidence requirement, fallback procedures
- **Disposition:** rewrite
- **Research record:** docs/research/records/handoff.md