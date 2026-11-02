---
name: vstack-recovery
description: Restore a safe state after failed, interrupted or partially applied work
lifecycle: draft
---

# vstack-recovery

## Purpose / Outcome

Restores repository to a verified safe state after failed, interrupted, or partially applied work by assessing current state, determining safe baseline, planning and executing recovery, and verifying.

---

## When to Use (Positive Triggers)

- After vstack-unstick when changes need cleanup
- After interrupted session with partial changes
- When verification reveals broken state
- When vstack-session-pickup detects unsafe state

---

## When Not to Use (Negative Triggers)

- For routine cleanup (use vstack-unslop)
- When state is already safe

---

## Required Context / Inputs

- Current repository state
- Checkpoint or runtime state (if available)
- Failed changes to clean up

---

## Preconditions

- Unsafe state identified
- Safe baseline known (checkpoint commit or clean state)

---

## Procedure

### Step 1: Assess Current State

- `git status` — uncommitted changes
- `git diff` — what changed
- Compare with checkpoint/runtime state
- Identify partial/failed changes

### Step 2: Determine Safe Baseline

- Last known good commit (from checkpoint or evidence)
- Or: clean main branch
- Document baseline

### Step 3: Plan Recovery

- Option A: Revert to baseline (`git checkout`, `git reset`)
- Option B: Selectively undo failed changes
- Option C: Complete partial changes if viable
- Choose safest option

### Step 4: Execute Recovery

- Apply chosen recovery action
- Clean build artifacts, caches
- Restore config if modified

### Step 5: Verify Safe State

- Run baseline verification
- Confirm no residual broken state
- Update checkpoint if needed

### Step 6: Record Recovery

- What failed
- Recovery action taken
- Baseline restored to
- Lessons for prevention

---

## Expected Outputs

- Repository in verified safe state
- Recovery record (in vstack-ledger or plugin)
- Updated checkpoint

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Baseline verification passes
- No partial/failed changes remain
- Clean `git status` (or documented exceptions)

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Cannot determine safe baseline | Escalate to Lead |
| Recovery would lose significant work | Escalate |
| Multiple recovery options | Choose safest, document rationale |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Safe state restored and verified
- Time-boxed (default: 30 min)

---

## Escalation

- Cannot determine safe baseline → escalate to Lead
- Recovery would lose significant work → escalate

---

## Fallback

- Without checkpoint: use `git log` to find last clean commit
- Without plugin: manual recovery with documented steps

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-unstick (triggers recovery), vstack-session-pickup (detects unsafe state), vstack-context-reset (checkpoint), vstack-ledger (recovery record)
- **Roles:** Builder (recovers), Lead (escalation)
- **Tools:** git, PROGRESS.md, runtime state
- **References:** None

---

## Examples

### Example: Interrupted Refactor

**State:** Mid-refactor, tests failing, partial commits
**Assessment:** 3 uncommitted files, 2 partial commits
**Baseline:** Commit abc123 (last green)
**Recovery:** `git reset --hard abc123`, clean artifacts
**Verify:** Full test suite passes
**Record:** Refactor interrupted, reset to baseline, lesson: commit incrementally

---

## Dependencies / References

- **Principles:** Fix Root Causes, Evidence Before Assertions, Clear Source of Responsibility
- **Skills:** vstack-unstick, vstack-session-pickup, vstack-context-reset, vstack-ledger
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-recovery/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 6-step procedure, state assessment, baseline determination, recovery options, verification, recording
- **Procedures rewritten:** Explicit step structure, recovery option selection, escalation paths
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-recovery.md