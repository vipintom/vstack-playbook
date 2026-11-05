---
name: resume
description: Preserve progress and resume after context interruption
lifecycle: draft
---

# resume

## Purpose / Outcome

Creates and restores checkpoints at natural boundaries. Preserves completed work, decisions, open questions, and next actions. Enables clean resumption by fresh agents or sessions.

---

## When to Use (Positive Triggers)

- At natural boundaries (task complete, before review, end of session)
- When context window is filling
- When handing off to another agent/session
- When resuming interrupted work

---

## When Not to Use (Negative Triggers)

- Mid-implementation without a boundary
- When context is still sufficient

---

## Required Context / Inputs

- Current delivery/task state
- Completed work and evidence
- Decisions made and rationale
- Open questions and blockers
- Next actions

---

## Preconditions

- Meaningful progress made
- Work has verifiable state

---

## Procedure

### Phase A: At Boundary (Preserve)

1. **Summarize completed work** — what was done, evidence, decisions
2. **Record current state** — task status, blockers, partial progress
3. **Document decisions** — what was chosen, why, alternatives rejected
4. **List open questions** — unknowns, pending decisions, risks
5. **Define next actions** — specific, actionable, ordered
6. **Store in project memory** (if plugin) or handoff document

### Phase B: At Resumption (Restore)

1. **Read handoff/memory** — objective, completed, decisions, open items
2. **Verify current state** — check actual code vs recorded state
3. **Validate assumptions** — run quick checks if needed
4. **Confirm next action** — proceed from documented next step

---

## Expected Outputs

- Handoff summary (objective, completed, decisions, open, next)
- Or: verified resumption with confirmed state

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Handoff enables fresh agent to continue without re-discovery
- Resumption verifies actual state matches recorded state
- No completed work re-done

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| State mismatch on resumption | Investigate, don't assume |
| Critical decision undocumented | Escalate to Lead |
| No handoff available | Reconstruct from git log and evidence |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Handoff documented, or resumption verified

---

## Escalation

- State mismatch on resumption → investigate, don't assume
- Critical decision undocumented → escalate to Lead

---

## Skill / Role / Tool Routing

- **Skills invoked:** resume (resume), handoff (planned pause), decisions (decision trail), handoff (transfer)
- **Roles:** Builder (preserves), Lead (validates), next Builder (restores)
- **Tools:** Project memory, git, PROGRESS.md
- **References:** None

---

## Examples

### Example: Task Boundary Preservation

**Context:** Completed authentication implementation, moving to review
**Preserve:** Objective, 3 tasks done with evidence, decision to use JWT, open question on refresh token rotation, next action: request review
**Restore:** Next session reads handoff, verifies tests pass, confirms next action, requests review

---

## Dependencies / References

- **Principles:** Evidence Before Assertions, Procedures Over Vague Instructions, Clear Source of Responsibility
- **Skills:** resume, handoff, decisions, handoff
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/resume/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Two-phase (preserve/restore), decision documentation, next action specificity, state verification
- **Procedures rewritten:** Explicit phase structure, project memory integration, verification criteria
- **Disposition:** rewrite
- **Research record:** docs/research/records/resume.md