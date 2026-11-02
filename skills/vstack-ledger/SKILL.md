---
name: vstack-ledger
description: Record important decisions, pivots, failed approaches and evidence references
lifecycle: draft
---

# vstack-ledger

## Purpose / Outcome

Maintains an append-only decision trail recording consequential decisions, pivots, failed approaches, and evidence references with cross-links to artifacts.

---

## When to Use (Positive Triggers)

- For consequential decisions (architecture, design, process)
- When vstack-unstick changes approach
- When vstack-recovery restores state
- For Extended execution profile

---

## When Not to Use (Negative Triggers)

- For routine minor actions
- For decisions already in ADRs or project memory

---

## Required Context / Inputs

- Decision or pivot to record
- Evidence and rationale
- Related task/delivery

---

## Preconditions

- Decision is consequential (affects architecture, risk, scope, timeline)

---

## Procedure

### Step 1: Identify Decision Point

- What choice was made?
- What alternatives considered?
- What triggered the decision?

### Step 2: Record Concisely

- Timestamp
- Workflow phase
- Decision summary
- Alternatives (brief)
- Chosen option
- Rationale summary
- Evidence references
- Related task/delivery
- Outcome (if known)

### Step 3: Append, Don't Edit

- Ledger is append-only
- Supersede with new entry, don't delete old
- Mark superseded entries explicitly

### Step 4: Link to Artifacts

- ADR reference
- Commit/diff
- Evidence records
- PROGRESS.md checkpoint

---

## Expected Outputs

- Ledger entry (append to ledger file)
- Cross-references to evidence/ADRs

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Decision recorded with rationale
- Evidence references valid
- Supersession explicit

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Decision requires authorization | Record as pending, escalate |
| Evidence reference invalid | Mark as unverified, investigate |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Decision recorded
- Time-boxed (default: 5-10 min)

---

## Escalation

- Decision requires authorization → record as pending, escalate

---

## Fallback

- Without ledger: record in PROGRESS.md Decisions section

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-unstick (triggers), vstack-recovery (triggers), vstack-context-reset (checkpoint link), vstack-session-pickup (consumer)
- **Roles:** Builder (records), Lead (authorizes)
- **Tools:** Ledger file, git, evidence artifacts
- **References:** None

---

## Examples

### Example: Architecture Pivot

**Trigger:** vstack-unstick revealed wrong assumption about cache layer
**Entry:** 2026-11-02T14:30:00Z | Phase: Implementation | Decision: Switch from Redis to in-memory cache | Alternatives: Redis (current), in-memory (chosen), external service | Chosen: in-memory | Rationale: Assumption "cache is shared" was false; single-instance deployment | Evidence: vstack-unstick probe result, commit a1b2c3d | Task: auth refactor | Outcome: Simplified, faster tests

---

## Dependencies / References

- **Principles:** Evidence Before Assertions, Attack the Premise, Clear Source of Responsibility
- **Skills:** vstack-unstick, vstack-recovery, vstack-context-reset, vstack-session-pickup
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-ledger/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Append-only, 9-field entry, supersession marking, artifact linking, trigger conditions
- **Procedures rewritten:** Explicit 4-step procedure, supersession requirement, fallback
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-ledger.md