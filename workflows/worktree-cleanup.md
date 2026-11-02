# Workflow: Worktree Cleanup

## Trigger & Suitability
- Git worktrees accumulated (completed, abandoned, or stale deliveries)
- Disk space pressure from worktrees
- Need to recover worktree state before removal
- Regular hygiene (weekly/monthly)
- Risk: low (cleanup), but potential loss of uncommitted work

## Roles & Responsibilities

| Phase | Lead | Builder | Reviewer |
|---|---|---|---|
| Audit | Owns | Executes | — |
| Recover | Decides | Executes | — |
| Clean | Coordinates | Executes | — |
| Complete | Validates | — | — |

## Skill Sequence

### 1. Audit (`vstack-worktree`)
- `vstack-worktree list` — all worktrees with: path, branch, commit, age, status (clean/dirty)
- **With Plugin:** `vstack_status` — aggregate dashboard for team/lead
- Identify:
  - **Active:** Current delivery, uncommitted changes
  - **Completed:** Delivery done, merged, no uncommitted
  - **Stale:** >7 days no activity, no delivery reference
  - **Orphaned:** No corresponding delivery, unknown origin
- **Output:** Worktree audit report

### 2. Recover (`vstack-session-pickup`, `vstack-recovery`, `vstack-ledger`)
- For each worktree with uncommitted changes:
  - `vstack-session-pickup` — attempt to recover context
  - `vstack-recovery` — extract salvageable work (patches, notes)
  - `vstack-ledger` — record recovery outcome
- **Decision per worktree:** Keep, recover & remove, or abandon

### 3. Clean (`vstack-worktree`, `vstack-recovery`)
- **Active:** Keep (document why)
- **Completed:** Remove via `vstack-worktree remove`
- **Stale:** 
  - If recoverable → recover first, then remove
  - If not → force remove (document loss)
- **Orphaned:** Force remove after 48h grace (document)
- **Force remove:** Only with Lead approval, documented in `vstack-ledger`

### 4. Complete
- Updated worktree list
- Recovery artifacts archived
- `vstack-lessons` — worktree management patterns

## Risk Adaptation

| Risk | Audit Depth | Recovery Effort | Force Remove |
|---|---|---|---|
| Low (routine) | Full | Best effort | After 48h grace |
| Medium (active project) | Full | Full recovery | Lead approval only |
| High (prod incident) | Minimal | Priority recovery | Never auto |

## Parallel Work
- Independent worktrees → parallel audit/recovery
- Lead coordinates recovery priorities

## Without Plugin
- `git worktree list` manual audit
- Manual patch extraction
- `git worktree remove` manual

## With Plugin
- `vstack_delivery` type: worktree-cleanup
- `vstack_worktree` lists, removes, recovers
- `vstack_check` records audit results
- `vstack_memory` persists recovery artifacts
- `vstack_recovery` extracts uncommitted work