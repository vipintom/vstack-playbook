---
name: ready
description: Produce a merge-readiness assessment without merging
lifecycle: draft
---

# ready

## Purpose / Outcome

Produces a merge-readiness assessment (READY / NOT READY) without merging. Final gate before authorized delivery via ship.

---

## When to Use (Positive Triggers)

- "Ready to merge?" / "Assess readiness"
- After watch-pr confirms CI and reviews clean
- Before any merge/delivery action
- As final gate before ship

---

## When Not to Use (Negative Triggers)

- When PR not ready
- When merge not intended

---

## Required Context / Inputs

- PR with passing CI
- Dispositioned review findings
- Complete evidence

---

## Preconditions

- All required verifications pass
- No open blocking findings
- Acceptance criteria met

---

## Procedure

### Step 1: Verify Completeness

- All acceptance criteria met with evidence
- All required verifications pass
- All review findings dispositioned
- No open blockers

### Step 2: Assess Risks

- Residual risks (accepted, deferred)
- Rollback complexity
- Monitoring needs post-merge

### Step 3: Produce Readiness Report

- Delivery objective
- Acceptance criteria status
- Verification summary
- Review disposition summary
- Residual risks
- Rollback plan
- Recommendation: READY / NOT READY

### Step 4: Stop Before Merge

- Do not merge unless separately authorized
- Report to Lead/user for decision

---

## Expected Outputs

- Merge-readiness assessment
- Evidence summary
- Residual risks documented
- Explicit recommendation

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- All criteria checked
- Evidence traceable
- Recommendation justified

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Incomplete criteria | NOT READY, address gaps |
| Unresolved blocker | NOT READY, escalate |
| Evidence gaps | NOT READY, collect evidence |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Assessment complete
- Time-boxed (default: 15-30 min)

---

## Escalation

- NOT READY → do not proceed, address gaps
- Disagreement on readiness → escalate to Lead

---

## Fallback

- Without formal PR: verbal/written readiness confirmation

---

## Skill / Role / Tool Routing

- **Skills invoked:** watch-pr (monitoring), verify (verification), review (review), ship (delivery)
- **Roles:** Lead (assesses), Builder (provides evidence)
- **Tools:** PR, CI, verification records
- **References:** None

---

## Examples

### Example: Feature Ready Assessment

**Delivery:** Auth feature
**Check:** All 5 acceptance criteria VERIFIED, 3 review findings fixed, CI passing
**Risks:** None residual, rollback = revert PR, monitoring = standard
**Recommendation:** READY

---

## Dependencies / References

- **Principles:** Evidence Before Assertions, Verifiable Increments, Degrade Gracefully
- **Skills:** watch-pr, verify, review, ship
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/ready/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Completeness verification, risk assessment, explicit recommendation, gate enforcement
- **Procedures rewritten:** Explicit 4-step procedure, risk assessment categories, evidence traceability
- **Disposition:** rewrite
- **Research record:** docs/research/records/ready.md