---
name: red-team
description: Coordinate two or three independent reviewers for high-risk work
lifecycle: draft
---

# red-team

## Purpose / Outcome

Coordinates 2-3 independent reviewers for high-risk changes. Provides identical brief and rubric to all reviewers, synthesizes findings, identifies consensus vs disagreement, produces Lead disposition.

---

## When to Use (Positive Triggers)

- "Jury review this" / "Multiple reviewers for..."
- High-risk changes (security, data integrity, production, migration)
- When single reviewer insufficient
- When stakeholder confidence requires multiple independent opinions

---

## When Not to Use (Negative Triggers)

- Routine changes
- When single independent reviewer sufficient
- When time/budget doesn't justify

---

## Required Context / Inputs

- Review brief (objective, criteria, diff, evidence)
- Identified reviewers (2 or 3)
- Pre-defined rubric (from rubrics)

---

## Preconditions

- Reviewers have sufficiently separated context
- Same brief and rubric for all

---

## Procedure

### Step 1: Select Reviewers

- 2 or 3 reviewers
- Sufficiently separated context (different sessions, ideally different models)
- Domain expertise for risk areas

### Step 2: Provide Identical Brief

- Objective and acceptance criteria
- Out-of-scope areas
- Base commit and diff reference
- Architecture constraints
- Verification evidence
- Pre-defined rubric

### Step 3: Conduct Independent Reviews

- Each reviewer works independently
- Fresh context for each
- No communication between reviewers during review

### Step 4: Collect Findings

- Structured findings from each reviewer
- Severity, location, evidence, reasoning
- Track reviewer independence status

### Step 5: Compare and Synthesize

- Identify consensus findings
- Identify disagreements
- Validate findings against actual code

### Step 6: Resolve

- Consensus findings: must address
- Disagreements: Lead validates, decides
- Missing/timed-out reviewer: not an approval

### Step 7: Report

- Consolidated findings
- Consensus vs disagreement
- Reviewer independence status
- Lead disposition

---

## Expected Outputs

- Consolidated findings from all reviewers
- Consensus/disagreement analysis
- Independence status per reviewer
- Lead disposition

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- All reviewers received identical brief
- Findings compared against source code
- No missing reviewer treated as approval

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Reviewer timeout | Escalate to Lead, not approval |
| Unresolvable disagreement | Lead decides with rationale |
| Independence compromised | Re-run with fresh reviewer |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- All reviews complete or timed out
- Time-boxed (default: 2-4 hours for review period)

---

## Escalation

- Reviewer timeout → escalate to Lead, not approval
- Unresolvable disagreement → Lead decides with rationale

---

## Fallback

- Without multiple reviewers: single review with red-team

---

## Skill / Role / Tool Routing

- **Skills invoked:** review (single reviewer baseline), red-team (adversarial lens), rubrics (shared rubric)
- **Roles:** Reviewers (independent), Lead (disposition)
- **Tools:** Review dispatch, finding collection
- **References:** None

---

## Examples

### Example: Security Migration

**Risk:** High (data encryption migration)
**Reviewers:** 3 (security, backend, infrastructure expertise)
**Consensus:** 5 findings (key rotation, migration script, rollback)
**Disagreement:** 1 (performance impact — Lead validates, accepts with monitoring)
**Result:** Consensus addressed, disagreement resolved with monitoring requirement

---

## Dependencies / References

- **Principles:** Independent Challenge, Evidence Before Assertions, Respect Boundaries
- **Skills:** review, red-team, rubrics
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/red-team/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Identical brief, independent reviews, consensus/disagreement, independence tracking, Lead disposition
- **Procedures rewritten:** Explicit 7-step procedure, reviewer selection criteria, synthesis process, fallback
- **Disposition:** rewrite
- **Research record:** docs/research/records/red-team.md