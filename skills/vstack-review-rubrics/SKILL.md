---
name: vstack-review-rubrics
description: Supply reusable review lenses for security, performance, maintainability, accessibility and data integrity
lifecycle: draft
---

# vstack-review-rubrics

## Purpose / Outcome

Provides reusable review lenses/criteria for systematic quality assessment. Supplies 5 rubric categories covering security, performance, maintainability, accessibility, and data integrity for use in vstack-review-loop, vstack-jury, and vstack-interrogate.

---

## When to Use (Positive Triggers)

- "Apply rubrics for..." / "Review lenses for..."
- For every vstack-review-loop
- For vstack-jury shared rubric
- For vstack-interrogate systematic challenge
- As reference for self-review

---

## When Not to Use (Negative Triggers)

- As substitute for domain expertise
- For domains not covered by available rubrics

---

## Required Context / Inputs

- Review target and scope
- Applicable quality attributes

---

## Preconditions

- Rubric selected for review scope

---

## Procedure

### Step 1: Select Applicable Rubrics

Choose from 5 categories based on review scope

### Step 2: Apply Systematically

Each lens independently, then consolidate

### Step 3: Generate Findings Per Lens

Tag findings by rubric/lens

### Step 4: Consolidate

Deduplicate, prioritize

---

## Available Rubrics

### Security & Data Integrity

- Authorization: every endpoint/data access checked
- Input validation: all untrusted input validated at boundaries
- Secrets: no hardcoded secrets, proper rotation
- Encryption: data at rest/in transit
- Audit: sensitive operations logged
- Injection: SQL, command, XSS, path traversal prevented

### Performance & Resources

- Complexity: algorithmic bounds appropriate
- Database: queries indexed, N+1 avoided
- Memory: no leaks, bounded caches
- Concurrency: no deadlocks, proper pooling
- Scaling: horizontal/vertical limits known

### Maintainability & Style

- Coupling: low between modules, high cohesion
- Naming: consistent, intention-revealing
- Duplication: DRY, no copy-paste
- Abstraction: appropriate level, not over-engineered
- Documentation: public APIs documented, decisions recorded

### Accessibility & UX

- Semantic HTML, ARIA where needed
- Keyboard navigation
- Color contrast
- Error messages actionable
- Loading states

### Data Integrity & Correctness

- Invariants: encoded in types/schemas
- Transactions: ACID where required
- Idempotency: retryable operations safe
- Migrations: backward compatible, tested
- Edge cases: null, empty, boundary, concurrent

---

## Expected Outputs

- Findings tagged by rubric/lens
- Coverage across applicable quality attributes

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- All applicable rubrics applied
- Findings reference specific rubric criteria
- No quality attribute silently ignored

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Rubric reveals Blocker | Escalate per review process |
| Domain not covered | Document gap, use ad-hoc review |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Rubrics applied for scoped attributes
- Time-boxed (default: included in review time)

---

## Escalation

- Rubric reveals Blocker → escalate per review process

---

## Fallback

- Without formal rubrics: ad-hoc review with documented focus areas

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-review-loop (consumer), vstack-jury (shared rubric), vstack-interrogate (adversarial lenses)
- **Roles:** Reviewer (applies), Lead (selects applicable)
- **Tools:** Rubric criteria lists
- **References:** None

---

## Examples

### Example: API Security Review

**Scope:** New payment endpoint
**Selected:** Security & Data Integrity, Data Integrity & Correctness
**Findings:** Missing authorization check (critical), unvalidated input (high), no audit log (medium)

---

## Dependencies / References

- **Principles:** Evidence Before Assertions, Procedures Over Vague Instructions
- **Skills:** vstack-review-loop, vstack-jury, vstack-interrogate
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-review-rubrics/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 5 rubric categories, systematic application, finding tagging, consolidation
- **Procedures rewritten:** Explicit 4-step procedure, rubric criteria per category, verification criteria
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-review-rubrics.md