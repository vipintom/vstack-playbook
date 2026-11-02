---
name: vstack-lessons
description: Convert recurring mistakes into durable improvements
lifecycle: draft
---

# vstack-lessons

## Purpose / Outcome

Converts recurring mistakes into durable improvements by identifying patterns, analyzing root causes, designing improvements (checks, conventions, templates, skills, memory entries), implementing, verifying against history, and recording in project memory.

---

## When to Use (Positive Triggers)

- After completing a delivery
- When a pattern of failures/bugs/rework emerges
- During retrospective or review
- When vstack-debug reveals systemic issue

---

## When Not to Use (Negative Triggers)

- For one-off incidents
- During active implementation (use vstack-debug)

---

## Required Context / Inputs

- Completed delivery with evidence
- History of similar issues (from project memory or history)
- Team/project conventions

---

## Preconditions

- Pattern identified with multiple occurrences

---

## Procedure

### Step 1: Identify the Pattern

- What keeps happening?
- Same bug type? Same review finding? Same debug cycle?

### Step 2: Analyze Root Cause

- Why does it recur?
- Missing check? Unclear convention? Bad default? Knowledge gap?

### Step 3: Design Improvement

- What prevents recurrence?
- New check/assertion?
- Convention update?
- Template/pattern?
- Skill update?
- Project memory entry?

### Step 4: Implement Improvement

- Add check, update doc, create template

### Step 5: Verify

- Would this have caught the last 3 occurrences?

### Step 6: Record in Project Memory

- Lesson, improvement, validation

---

## Expected Outputs

- Pattern description with examples
- Root cause analysis
- Implemented improvement (check, doc, template, skill)
- Project memory entry

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Improvement addresses root cause, not symptom
- Improvement would have caught historical occurrences
- Improvement is enforceable/checkable (not just documentation)

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Pattern requires architectural change | vstack-blueprint, Lead decision |
| Pattern external to project | Document workaround, monitor |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Improvement implemented and validated against history

---

## Escalation

- Pattern requires architectural change → vstack-blueprint, Lead decision
- Pattern external to project → document workaround, monitor

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-debug (reveals patterns), vstack-review-loop (findings may reveal patterns), vstack-context-reset (preserves lessons at boundaries), vstack-skill-authoring (skill updates)
- **Roles:** Builder (identifies), Lead (approves improvement)
- **Tools:** Project memory, git history
- **References:** None

---

## Examples

### Example: Recurring Null Pointer

**Pattern:** 4 null pointer bugs in auth module in 2 months
**Root cause:** Optional chaining not enforced, no lint rule
**Improvement:** Add ESLint rule for strict null checks
**Verify:** Rule catches all 4 historical patterns
**Record:** Lesson added to project memory

---

## Dependencies / References

- **Principles:** Encode Lessons in Structure, Procedures Over Vague Instructions, Evidence Before Assertions
- **Skills:** vstack-debug, vstack-review-loop, vstack-context-reset, vstack-skill-authoring
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-lessons/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 6-step procedure, pattern identification, root cause analysis, improvement types, historical validation, project memory recording
- **Procedures rewritten:** Explicit step structure, improvement categories, verification against history
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-lessons.md