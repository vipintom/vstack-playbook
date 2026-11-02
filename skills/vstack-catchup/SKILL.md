---
name: vstack-catchup
description: Reconstruct current task or project context after interruption
lifecycle: draft
---

# vstack-catchup

## When to Use
- Starting a new session after interruption
- Switching between tasks/deliveries
- Onboarding to an existing delivery
- After context window reset

## When Not to Use
- For initial task setup (use `vstack-mode` → `vstack-sharpen`)
- When no prior context exists (fresh task)

## Required Context
- Access to project memory (if plugin available)
- Access to `.vstack/` runtime state (if plugin available)
- PROGRESS.md or equivalent checkpoint
- Git status (branch, commit, uncommitted changes)

## Preconditions
- Prior work was checkpointed or has runtime state

## Procedure

1. **Read checkpoint**
   - **Action:** Read `PROGRESS.md` or project-equivalent checkpoint
   - **Evidence:** Goal, acceptance criteria, next action, open questions, key facts, decisions, failed approaches, verification status documented
   - **Decision:** If no checkpoint exists → proceed to fallback reconstruction

2. **Validate repository state**
   - **Action:** Run `git status` — check branch, commit, uncommitted changes
   - **Evidence:** Current branch, commit hash, list of uncommitted files
   - **Decision:** If branch/commit matches checkpoint → proceed; if differs → investigate discrepancies

3. **Check runtime state** (if plugin available)
   - **Action:** Query active deliveries, task assignments, evidence, decisions, recovery attempts
   - **Evidence:** Runtime state snapshot
   - **Decision:** If plugin unavailable → skip to fallback

4. **Reconcile checkpoint vs reality**
   - **Action:** Compare repository and runtime state with checkpoint
   - **Evidence:** List of discrepancies (if any)
   - **Decision:** If matches → proceed from next action; if differs → investigate discrepancies

5. **Update checkpoint if needed**
   - **Action:** Record stale information, update next action if work completed externally, note new blockers/decisions
   - **Evidence:** Updated checkpoint with reconciliation notes
   - **Decision:** If no discrepancies → no update needed

6. **Summarize current state**
   - **Action:** Produce validated state summary
   - **Evidence:** Goal, exact next action, open questions/blockers, key facts
   - **Decision:** If next action unclear → escalate to Lead

## Expected Outputs
- Validated current state summary
- Updated checkpoint (if discrepancies found)
- Clear next action
- List of reconciled discrepancies

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE

- Checkpoint accurately reflects repository state
- Next action is specific and actionable
- No stale work reported as completed

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint
- Current state understood and validated
- Ready to proceed with next action
- Time-boxed (default: 10-15 min)

## Failure Handling

| Failure Mode | Response |
|---|---|
| No checkpoint available | Reconstruct from git history and memory, document reconstruction |
| Major checkpoint/reality mismatch | Escalate to Lead, do not proceed |
| Cannot determine current state | Escalate to Lead, do not guess |
| Plugin unavailable | Fallback to PROGRESS.md + git only, document fallback |
| Runtime state unavailable | Fallback to PROGRESS.md + git only, document fallback |

## Escalation
- Major discrepancy between checkpoint and reality → escalate to Lead
- Cannot determine current state → escalate, do not guess

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-context-reset (creates checkpoint), vstack-session-pickup (uses catchup output)
- **Roles:** Lead (owns reconciliation), Builder (executes validation)
- **Tools:** git, project memory plugin (if available), PROGRESS.md
- **References:** vstack-session-pickup, vstack-safe-pause, vstack-ledger

## Examples

### Example: Session Resume After Weekend
**Context:** Developer returns after 2 days, needs to resume feature-delivery work.

**Execution:**
1. Read PROGRESS.md: goal = "Add user profile API", next action = "Implement GET /profile endpoint"
2. Git status: on branch feature/profile, commit abc123, 2 uncommitted files (matches checkpoint)
3. Runtime state: delivery active, task "GET /profile" assigned
4. Reconcile: all matches, proceed from next action
5. No checkpoint update needed
6. Summary: goal clear, next action exact, ready to proceed

### Example: Task Switch with Discrepancy
**Context:** Switching from bug-fixing to feature-delivery, checkpoint shows different branch.

**Execution:**
1. Read PROGRESS.md: goal = "Fix null pointer in auth", branch = bugfix/auth
2. Git status: on branch feature/profile, commit def456 (differs from checkpoint)
3. Investigate: work was switched externally, bugfix branch has uncommitted fix
4. Update checkpoint: record branch switch, note auth fix in progress
5. Summarize: goal = profile API, next action = implement endpoint, blocker = auth fix pending

## Dependencies / References
- vstack-context-reset (creates checkpoint)
- vstack-session-pickup (uses catchup output)
- vstack-safe-pause (creates checkpoint)
- vstack-ledger (decision history)

## Migration Record

- **Previous name/path:** skills/vstack-catchup/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 6-step reconciliation (checkpoint → validate → check runtime → reconcile → update → summarize), fallback to git/PROGRESS.md, escalation on mismatch
- **Procedures rewritten:** Explicit Action/Evidence/Decision per step, failure handling table, fallback documentation, time-boxed stop condition
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-catchup.md