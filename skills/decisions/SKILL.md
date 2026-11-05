---
name: decisions
description: Record important decisions, pivots, failed approaches and evidence references
lifecycle: draft
---

# decisions

## Purpose / Outcome

Maintains an append-only decision trail recording consequential decisions, pivots, failed approaches, and evidence references with cross-links to artifacts.

---

## When to Use (Positive Triggers)

- For consequential decisions (architecture, design, process)
- When unstick changes approach
- When recovery restores state
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

- **Skills invoked:** unstick (triggers), recovery (triggers), resume (checkpoint link), resume (consumer)
- **Roles:** Builder (records), Lead (authorizes)
- **Tools:** Ledger file, git, evidence artifacts
- **References:** None

---

## Examples

### Example: Architecture Pivot

**Trigger:** unstick revealed wrong assumption about cache layer
**Entry:** 2026-11-02T14:30:00Z | Phase: Implementation | Decision: Switch from Redis to in-memory cache | Alternatives: Redis (current), in-memory (chosen), external service | Chosen: in-memory | Rationale: Assumption "cache is shared" was false; single-instance deployment | Evidence: unstick probe result, commit a1b2c3d | Task: auth refactor | Outcome: Simplified, faster tests

---

## Dependencies / References

- **Principles:** Evidence Before Assertions, Attack the Premise, Clear Source of Responsibility
- **Skills:** unstick, recovery, resume, resume
- **References:** None

