---
name: resume
description: Retrieve relevant project knowledge and previous decisions without treating old context as current truth
lifecycle: draft
---

# resume

## Purpose / Outcome

Retrieves relevant project knowledge — conventions, decisions, past failures, constraints — with explicit currency tagging. Prevents stale context from being treated as current truth.

---

## When to Use (Positive Triggers)

- "What are the conventions for X?" / "Recall project context"
- Before starting work to understand project context
- When code-tour/rationale need historical background
- When planning to avoid past mistakes
- When lessons suggests relevant patterns

---

## When Not to Use (Negative Triggers)

- Current runtime behaviour → code-tour
- Design rationale → rationale
- Session resumption → resume
- Fresh project (no accumulated knowledge)

---

## Required Context / Inputs

- Project memory access (if plugin available)
- Decision ledger / ADRs
- PROGRESS.md checkpoints
- Git history

---

## Preconditions

- Project has accumulated knowledge (not fresh project)

---

## Procedure

### Step 1: Identify Relevant Knowledge Categories

- Architecture decisions and constraints
- Conventions and patterns
- Known issues and workarounds
- Verification procedures
- Past failures and lessons

### Step 2: Query Project Memory (if plugin available)

- Search by category, tags, keywords
- Filter by validation date (prefer recent)
- Note superseded/stale markers

### Step 3: Check Decision Ledger / ADRs

- Relevant architectural decisions
- Past pivots and their rationale
- Superseded decisions

### Step 4: Review Recent Checkpoints

- PROGRESS.md for active deliveries
- Failed approaches from recent work
- Open questions from prior sessions

### Step 5: Distinguish Current vs Historical

- Mark each finding with: `current` | `historical` | `superseded` | `unknown`
- Do not treat historical context as current truth
- Validate conventions against current code

### Step 6: Synthesize Relevant Context

- What conventions must be followed?
- What constraints exist?
- What past mistakes to avoid?
- What verification is expected?

---

## Expected Outputs

- Relevant project knowledge summary
- Each finding tagged with currency status
- Conventions and constraints for current work
- Past failures/lessons applicable to current task

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- No stale convention presented as current
- Superseded decisions clearly marked
- Validation dates noted for memory items

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| No plugin available | Fallback: search ADRs, PROGRESS.md, git log manually |
| Conflicting memory items | Escalate to Lead |
| Critical convention unverified | Validate against current code |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Sufficient context for current task
- Time-boxed (default: 10-15 min)

---

## Escalation

- Critical convention unverified → validate against current code
- Conflicting memory items → escalate to Lead

---

## Fallback

- Without plugin: search ADRs, PROGRESS.md, git log manually
- Without project memory: rely on team knowledge and code inspection

---

## Skill / Role / Tool Routing

- **Skills invoked:** code-tour (validates conventions), rationale (validates rationale), lessons (provides failure patterns)
- **Roles:** Builder (retrieves), Lead (escalation)
- **Tools:** Project memory plugin, git, ADRs, PROGRESS.md
- **References:** None

---

## Examples

### Example: Convention Recall

**Task:** Implement new API endpoint
**Recall:**
- Query memory: "API conventions" → REST, JSON, plural nouns (current, validated 2026-10-15)
- ADR-012: "Use RFC 7807 for errors" (current)
- PROGRESS.md: "Auth middleware pattern in api/middleware/auth.ts" (current)
- Old convention: "XML responses" (superseded by ADR-003, 2025-03-01)
- Synthesis: Follow REST/JSON, RFC 7807 errors, use auth middleware pattern

---

## Dependencies / References

- **Principles:** Attack the Premise, Evidence Before Assertions, Respect Boundaries
- **Skills:** code-tour, rationale, lessons
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/resume/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Currency tagging (current/historical/superseded/unknown), multi-source retrieval (memory/ADRs/checkpoints), convention validation
- **Procedures rewritten:** Explicit 6-step procedure, mandatory convention validation, fallback without plugin
- **Disposition:** rewrite
- **Research record:** docs/research/records/resume.md