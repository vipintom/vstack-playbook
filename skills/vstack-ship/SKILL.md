---
name: vstack-ship
description: Execute explicitly authorized delivery actions within a narrow approval scope
lifecycle: draft
---

# vstack-ship

## Purpose / Outcome

Executes explicitly authorized delivery actions (merge, deploy, release) within a narrow approval scope. Requires vstack-ready READY assessment and explicit authorization.

---

## When to Use (Positive Triggers)

- "Ship this" / "Merge this" / "Deploy this"
- After vstack-ready confirms READY
- When explicit user/Lead authorization given
- For authorized merge, deploy, release actions

---

## When Not to Use (Negative Triggers)

- Without explicit authorization
- As default workflow (always opt-in)
- To bypass CI, branch protection, or external approval

---

## Required Context / Inputs

- READY assessment from vstack-ready
- Explicit authorization record
- Narrow scope (specific action, target)

---

## Preconditions

- vstack-ready = READY
- Authorization recorded with scope
- External gates (CI, branch protection) satisfied

---

## Procedure

### Step 1: Verify Authorization

- Authorization recorded for specific action
- Scope matches intended action
- Approver has authority

### Step 2: Execute Authorized Action

- Merge PR (if authorized)
- Trigger deploy (if authorized)
- Create release (if authorized)
- Record action and outcome

### Step 3: Verify Post-Action

- Confirm action completed
- Run smoke checks if applicable
- Update delivery/task status

### Step 4: Record

- Action taken
- Authorization reference
- Outcome
- Any post-action verification

---

## Expected Outputs

- Authorized action executed
- Delivery/task status updated
- Audit trail

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Authorization valid and scoped
- Action completed successfully
- Post-action checks pass

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Authorization missing | Do not execute |
| Action fails | vstack-recovery, escalate |
| Post-action check fails | Investigate, don't ignore |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Action complete and verified
- Time-boxed per action

---

## Escalation

- Authorization missing → do not execute
- Action fails → vstack-recovery, escalate

---

## Fallback

- Without authorization: manual execution by authorized human

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-ready (readiness gate), vstack-pr (PR creation), vstack-watch-pr (monitoring), vstack-recovery (failure handling)
- **Roles:** Lead (authorizes), Builder (executes)
- **Tools:** Git, deploy system, release system
- **References:** None

---

## Examples

### Example: Authorized Merge

**Authorization:** "Merge PR #234" from Lead
**Ready:** vstack-ready = READY
**Action:** Merge PR #234
**Post-action:** Smoke check passes, delivery status = SHIPPED
**Record:** Merge executed, auth ref, outcome SUCCESS

---

## Dependencies / References

- **Principles:** Evidence Before Assertions, Clear Source of Responsibility, Verifiable Increments
- **Skills:** vstack-ready, vstack-pr, vstack-watch-pr, vstack-recovery
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-ship/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Authorization verification, narrow scope, external gates, post-action verification, audit trail
- **Procedures rewritten:** Explicit 4-step procedure, authorization validation, scope matching, fallback
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-ship.md