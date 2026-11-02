---
name: vstack-verification-audit
description: Identify untested acceptance criteria, weak checks and gaps between tests and real application behaviour
lifecycle: draft
---

# vstack-verification-audit

## Purpose / Outcome

Systematically audits verification coverage by mapping acceptance criteria to checks, evaluating check quality, identifying gaps, comparing against real behaviour, and prioritizing improvements.

---

## When to Use (Positive Triggers)

- Periodic verification health check
- Before major releases
- When vstack-lessons suggests verification gaps
- When inheriting a project

---

## When Not to Use (Negative Triggers)

- For routine verification runs
- When verification is known current and comprehensive

---

## Required Context / Inputs

- Project verification skill (if exists)
- Acceptance criteria for recent deliveries
- Test suite and verification history

---

## Preconditions

- Acceptance criteria documented
- Test/verification history available

---

## Procedure

### Step 1: Map Acceptance Criteria to Verification

- For each delivery: list acceptance criteria
- For each criterion: identify verifying check(s)
- Note criteria with no verification

### Step 2: Evaluate Check Quality

- **Focused checks**: test the specific criterion, not incidental behaviour
- **Real application**: checks drive actual app, not mocks/stubs
- **Observability**: failures produce actionable diagnostics
- **Speed**: fast enough for incremental verification
- **Reliability**: low flake rate, deterministic

### Step 3: Identify Gaps

- Untested acceptance criteria
- Criteria tested only at unit level (need integration)
- Criteria tested only with mocks (need real app)
- Flaky/unreliable checks
- Slow checks blocking incremental flow

### Step 4: Check vs Real Behaviour

- Run verification and observe actual app
- Compare test assertions with manual verification
- Note discrepancies

### Step 5: Prioritize Improvements

- **Blocker**: criterion with zero verification
- **Major**: criterion with weak/mock-only verification
- **Minor**: flaky or slow checks
- **Note**: gap in low-risk area

### Step 6: Report

- Gap list with severity
- Recommended improvements
- Effort estimates

---

## Expected Outputs

- Verification gap report
- Prioritized improvement list
- Effort estimates

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- All acceptance criteria mapped
- Gaps identified with evidence
- Recommendations actionable

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| No acceptance criteria | Audit against recent delivery requirements |
| No verification skill | Recommend vstack-create-verification |
| Blocker gaps found | Escalate to Lead, prioritize fixes |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Audit complete for scoped deliveries
- Time-boxed (default: 1-2 hours)

---

## Escalation

- Blocker gaps → escalate to Lead, prioritize fixes
- Fundamental verification strategy issue → vstack-create-verification revisit

---

## Fallback

- Without acceptance criteria: audit against recent delivery requirements
- Without verification skill: document as gap

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-create-verification (baseline), vstack-maintain-verification (ongoing), vstack-lessons (gap patterns)
- **Roles:** Auditor (executes), Lead (prioritizes)
- **Tools:** Project commands, test runners, verification skill
- **References:** None

---

## Examples

### Example: Auth Feature Audit

**Deliveries:** Login, register, logout, protected routes
**Mapping:** 5 criteria → 3 unit tests, 1 integration, 1 missing
**Gaps:** Logout criterion untested (Blocker), register only unit (Major), login mock-only (Major)
**Recommendations:** Add integration test for logout, upgrade register/login to real app

---

## Dependencies / References

- **Principles:** Prove It Works, Evidence Before Assertions, Procedures Over Vague Instructions
- **Skills:** vstack-create-verification, vstack-maintain-verification, vstack-lessons
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-verification-audit/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 6-step procedure, criteria-to-verification mapping, 5 quality dimensions, 4 severity levels, real behaviour comparison
- **Procedures rewritten:** Explicit step structure, quality dimensions, severity classification, escalation
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-verification-audit.md