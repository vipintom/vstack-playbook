---
name: vstack-watch-pr
description: Monitor CI and review findings, then address and reverify valid issues
lifecycle: draft
---

# vstack-watch-pr

## Purpose / Outcome

Monitors PR for CI completion and review findings, addresses valid issues, re-verifies, repeats until clean state for vstack-ready assessment.

---

## When to Use (Positive Triggers)

- "Watch PR" / "Monitor CI and reviews"
- After vstack-pr creates PR
- When CI/review feedback arrives
- Until vstack-ready confirms readiness

---

## When Not to Use (Negative Triggers)

- PRs not requiring monitoring
- When no CI/review integration

---

## Required Context / Inputs

- Open PR
- CI/review system access (if available)

---

## Preconditions

- PR exists with evidence summary

---

## Procedure

### Phase 1: Monitor CI

- Watch for CI completion
- On failure: diagnose, fix, reverify, push
- Record evidence

### Phase 2: Monitor Reviews

- Watch for review findings
- For each finding: validate, fix if valid, reverify
- Disposition: fixed / dismissed / deferred / accepted risk
- Record disposition rationale

### Phase 3: Reverify After Fixes

- Run affected verifications
- Update evidence
- Push updates

### Phase 4: Repeat Until Clean

- CI passes
- No unresolved blocking findings
- All findings dispositioned

---

## Expected Outputs

- Passing CI
- All findings dispositioned
- Updated evidence

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- CI passes
- No open blocking findings
- All findings have valid disposition

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Unresolvable finding | Escalate to Lead |
| CI flakiness | Investigate, don't ignore |
| Reviewer conflict | Escalate to Lead |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- PR ready for vstack-ready
- Time-boxed per cycle (default: per CI run + review cycle)

---

## Escalation

- Unresolvable finding → escalate to Lead
- CI flakiness → investigate, don't ignore

---

## Fallback

- Without CI/review monitoring: manual check before vstack-ready

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-pr (PR creation), vstack-verify-loop (reverification), vstack-review-loop (review findings), vstack-ready (readiness gate)
- **Roles:** Builder (monitors/fixes), Lead (escalation)
- **Tools:** CI system, PR platform, verification harness
- **References:** None

---

## Examples

### Example: CI Failure Cycle

**PR:** Auth feature
**CI fails:** Test timeout in integration test
**Action:** Diagnose (flaky DB), fix (increase timeout), reverify (local pass), push, CI passes
**Review finding:** Missing error handling
**Action:** Validate (valid), fix, reverify, disposition: fixed

---

## Dependencies / References

- **Principles:** Prove It Works, Evidence Before Assertions, Fix Root Causes
- **Skills:** vstack-pr, vstack-verify-loop, vstack-review-loop, vstack-ready
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-watch-pr/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** CI monitoring loop, finding validation, disposition categories, re-verification, repeat until clean
- **Procedures rewritten:** Explicit 4-phase structure, disposition categories with rationale, fallback
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-watch-pr.md