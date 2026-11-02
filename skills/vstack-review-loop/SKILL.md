---
name: vstack-review-loop
description: Obtain fresh-context review and resolve findings
lifecycle: draft
---

# vstack-review-loop

## Purpose / Outcome

Obtains independent fresh-context review of implementation against acceptance criteria using structured lenses. Resolves findings through fix/defer/reject cycle with re-review confirmation.

---

## When to Use (Positive Triggers)

- "Review this" / "Independent review for..."
- After implementation and verification complete
- When vstack-plan-loop assigns review tasks
- When Lead requests independent assessment
- For high-risk changes (always)

---

## When Not to Use (Negative Triggers)

- During implementation → vstack-verify-loop
- Trivial changes with low risk (Lead judgment)
- Multi-reviewer needed → vstack-jury

---

## Required Context / Inputs

- Objective and acceptance criteria
- Changes under review (diffs, files)
- Verification evidence (test results, check outputs)
- Project conventions and rubrics
- Specific review lenses requested

---

## Preconditions

- Implementation complete with evidence
- Independent reviewer available

---

## Procedure

### Phase A: Lead — Request Review

1. Prepare review package: objective, criteria, changes, evidence, lenses
2. Dispatch Reviewer with fresh context (new session, no implementation history)
3. Specify lenses from `resources/rubrics/`

### Phase B: Reviewer — Conduct Review

1. **Read only the review package** — no implementation context
2. **Apply each lens systematically:**
   - Correctness & Regression
   - Architecture & Design
   - Security & Data
   - Performance & Resources
   - Maintainability & Style
   - Test Adequacy
   - Documentation & Migration
3. **Record findings per lens:**
   - Severity: critical/high/medium/low/informational
   - Category: lens name
   - Description with file:line reference
   - Evidence reference (what supports this)
   - Recommendation (concrete, testable)
4. **Overall assessment** — accept / accept with fixes / reject

### Phase C: Lead — Resolve Findings

1. Review each finding with Builder
2. **Fix** — Builder addresses, provides evidence
3. **Defer** — document reason, track for later
4. **Reject** — document rationale (rare, requires evidence)
5. **Re-review** — Reviewer confirms fixes address root cause

---

## Expected Outputs

- Review report with findings
- Resolved findings with fix evidence
- Final assessment

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Reviewer had no implementation context
- Each finding has severity, location, evidence, recommendation
- Critical/high findings resolved or explicitly waived
- Re-review confirms fixes

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Reviewer cannot assess without missing evidence | Lead provides |
| Fundamental disagreement on severity | Lead decides, documents both positions |
| Multiple independent reviews needed | vstack-jury |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- All critical/high findings resolved
- Reviewer accepts (or Lead accepts with documented waivers)

---

## Escalation

- Reviewer cannot assess without missing evidence → Lead provides
- Fundamental disagreement on severity → Lead decides, documents both positions
- Multiple independent reviews needed → vstack-jury

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-verify-loop (provides evidence), vstack-jury (multiple reviewers), vstack-review-rubrics (lenses)
- **Roles:** Lead (requests, resolves), Reviewer (assesses), Builder (fixes)
- **Tools:** Review dispatch, finding tracking
- **References:** resources/rubrics/

---

## Examples

### Example: Auth Refactor Review

**Package:** Objective, diff, test results, 7 lenses
**Reviewer findings:** 3 critical (token validation), 2 high (error handling), 4 medium
**Resolution:** Builder fixes critical/high, provides evidence, reviewer re-reviews, accepts
**Final:** Accept with fixes

---

## Dependencies / References

- **Principles:** Independent Challenge, Evidence Before Assertions, Prove It Works
- **Skills:** vstack-verify-loop, vstack-jury, vstack-review-rubrics
- **References:** resources/rubrics/

---

## Migration Record

- **Previous name/path:** skills/vstack-review-loop/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Fresh context, 7 lenses, structured findings, fix/defer/reject/resolve cycle, re-review
- **Procedures rewritten:** Explicit 3-phase structure, fresh context enforcement, finding format, re-review requirement
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-review-loop.md