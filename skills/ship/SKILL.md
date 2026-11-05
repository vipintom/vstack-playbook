---
name: ship
description: Prepare a focused, reviewable pull request with evidence
lifecycle: draft
---

# ship

## Purpose / Outcome

Creates a focused, reviewable pull request with evidence summary after implementation and verification complete. Links to delivery/task records, requests reviewers per project policy.

---

## When to Use (Positive Triggers)

- "Create PR for..." / "Prepare pull request"
- After implementation and verification complete
- When project workflow requires PR
- Before watch-pr and ready

---

## When Not to Use (Negative Triggers)

- Direct-to-main workflows
- When changes not ready for review
- Before verification complete

---

## Required Context / Inputs

- Verified implementation
- Evidence records
- Independent review complete (if warranted)

---

## Preconditions

- All required verifications pass
- Blocking review findings resolved
- Delivery acceptance criteria met

---

## Procedure

### Step 1: Confirm Readiness

- All tasks PASS
- Evidence recorded for acceptance criteria
- Review findings dispositioned

### Step 2: Prepare PR

- Focused scope (single delivery)
- Clear title and description
- Link to delivery/task records
- Include evidence summary

### Step 3: Evidence Summary

- Verification results (pass/fail/skipped)
- Review findings and dispositions
- Known limitations and risks

### Step 4: Submit

- Create or update PR
- Request reviewers per project policy
- Link in delivery/task records

---

## Expected Outputs

- PR with evidence summary
- Linked delivery/task references
- Reviewers assigned

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- PR passes CI (if configured)
- Reviewers can verify evidence
- Scope matches delivery

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| CI fails | Fix and reverify before PR |
| Reviewers unavailable | Escalate to Lead |
| Evidence incomplete | Do not create PR, address gaps |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- PR created and review requested
- Time-boxed (default: 15-30 min)

---

## Escalation

- CI fails → fix and reverify before PR
- Reviewers unavailable → escalate to Lead

---

## Fallback

- Without PR workflow: deliver via project convention

---

## Skill / Role / Tool Routing

- **Skills invoked:** verify (verification), review (review), watch-pr (monitoring), ready (readiness)
- **Roles:** Builder (prepares), Lead (reviewers)
- **Tools:** Git, PR platform API
- **References:** None

---

## Examples

### Example: Feature Delivery PR

**Delivery:** User authentication (login, register, logout)
**PR:** Title "feat(auth): add JWT authentication", description with evidence summary, links to delivery record, reviewers assigned

---

## Dependencies / References

- **Templates:** `templates/delivery-plan.md`

- **Principles:** Evidence Before Assertions, Smallest Complete Change
- **Skills:** verify, review, watch-pr, ready
- **References:** None

