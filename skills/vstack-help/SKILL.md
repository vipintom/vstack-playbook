---
name: vstack-help
description: Select the smallest relevant set of skills
lifecycle: draft
---

# vstack-help

## Purpose / Outcome

Navigates the skill catalog by mapping problems to skill families, selecting 1-3 relevant skills, confirming fit via "When to Use", and ordering application.

---

## When to Use (Positive Triggers)

- When starting a new task or delivery
- When stuck and unsure which skill applies
- When a skill references "related skills" you don't know

---

## When Not to Use (Negative Triggers)

- When you already know the exact skill needed

---

## Required Context / Inputs

- Current problem or task description
- Access to skill catalog (`skills/` directory)

---

## Preconditions

- Skill catalog accessible

---

## Procedure

### Step 1: State the Problem

In one sentence

### Step 2: Map to Skill Families

- Foundation & operation → vstack-mode, vstack-principles, vstack-help
- Understanding & discovery → vstack-sharpen, vstack-how, vstack-why, vstack-blast-radius, vstack-explain, vstack-recall
- Architecture & design → vstack-architect, vstack-blueprint, vstack-arena
- Planning → vstack-plan-loop, vstack-plan-review
- Implementation → vstack-tdd, vstack-incremental-build, vstack-refactor, vstack-unslop
- Verification → vstack-verify-loop, vstack-create-verification, vstack-maintain-verification
- Debugging & recovery → vstack-debug, vstack-unstick, vstack-recovery
- Review → vstack-review-loop, vstack-jury, vstack-interrogate, vstack-review-rubrics
- Continuity → vstack-context-reset, vstack-safe-pause, vstack-session-pickup, vstack-ledger, vstack-lessons
- Delivery/PR → vstack-pr, vstack-watch-pr, vstack-ready, vstack-ship
- Specialist → vstack-performance, vstack-runtime-forensics, vstack-trace-forensics, vstack-visual-parity
- Isolation → vstack-worktree, vstack-best-of-n

### Step 3: Select 1-3 Skills

That directly address the problem

### Step 4: Confirm Fit

Read each skill's "When to Use"

### Step 5: Apply in Sequence

Complete one before starting the next

---

## Expected Outputs

- Minimal set of relevant skills (1-3)
- Order of application

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Each selected skill's "When to Use" matches the problem
- No skill selected "just in case"

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| No skill matches | Use vstack-sharpen to clarify problem |
| Too many skills seem relevant | Pick the most specific; others wait |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Relevant skills identified and ordered

---

## Escalation

- No skill matches → use vstack-sharpen to clarify problem
- Too many skills seem relevant → pick the most specific; others wait

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-mode (establishes context), vstack-sharpen (clarifies underspecified problems)
- **Roles:** Builder (selects), Lead (validates)
- **Tools:** Skill catalog
- **References:** None

---

## Examples

### Example: Debugging a Flaky Test

**Problem:** "Test fails intermittently"
**Families:** Debugging & recovery → vstack-debug, vstack-unstick
**Selection:** vstack-debug (first), then vstack-unstick if 3+ failures
**Order:** Debug → Unstick if needed

---

## Dependencies / References

- **Principles:** Procedures Over Vague Instructions, Smallest Complete Change, Harness Independence
- **Skills:** vstack-mode, vstack-sharpen
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-help/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Skill family taxonomy, 5-step procedure, 1-3 skill selection, "When to Use" confirmation, sequential application
- **Procedures rewritten:** Explicit family mapping, updated skill references, failure handling
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-help.md