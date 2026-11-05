---
name: worktree
description: Establish, inspect and safely clean isolated workspaces
lifecycle: draft
---

# worktree

## Purpose / Outcome

Manages git worktrees for parallel work isolation: creates, configures, executes in, inspects, integrates or discards, and cleans up worktrees.

---

## When to Use (Positive Triggers)

- For red-team worker isolation
- For red-team candidate isolation
- When concurrent writers need separation

---

## When Not to Use (Negative Triggers)

- When sequential execution is simpler
- When harness doesn't support worktrees
- For single-threaded work

---

## Required Context / Inputs

- Base commit/branch
- Workspace purpose (swarm task, best-of-n candidate)
- Isolation requirements

---

## Preconditions

- Git repository
- Harness supports worktree operations (or fallback available)

---

## Procedure

### Step 1: Create Worktree

- `git worktree add <path> <base-commit>`
- Verify clean state
- Record worktree path and purpose

### Step 2: Configure Workspace

- Install dependencies if needed
- Apply project config
- Set up tooling

### Step 3: Execute Work

- Worker operates in worktree
- Changes isolated to worktree
- Commit within worktree

### Step 4: Inspect and Validate

- Review changes in worktree
- Run verification
- Confirm isolation (no cross-worktree writes)

### Step 5: Integrate or Discard

- If PASS: merge or cherry-pick to main
- If DISCARD: remove worktree

### Step 6: Clean Up

- `git worktree remove <path>`
- Verify no orphaned worktrees
- Clean build artifacts

---

## Expected Outputs

- Isolated workspace for work
- Clean integration or clean removal
- No cross-contamination

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Worktree changes don't affect other worktrees
- Integration passes verification
- Clean removal leaves no artifacts

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Worktree creation fails | Fallback to branch/directory isolation |
| Merge conflicts | Resolve in main worktree |
| Orphaned worktrees | Clean up with force |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Work complete and integrated/discarded
- Time-boxed per worktree

---

## Escalation

- Worktree creation fails → fallback to branch/directory isolation
- Merge conflicts → resolve in main worktree

---

## Fallback

- Without worktree support: branch + directory isolation
- Without Git: separate working directories

---

## Skill / Role / Tool Routing

- **Skills invoked:** red-team (worker isolation), red-team (candidate isolation), handoff (sequential fallback)
- **Roles:** Worker (executes), Lead (integrates)
- **Tools:** git, build tools
- **References:** None

---

## Examples

### Example: Parallel Test Execution

**Purpose:** red-team worker for package testing
**Create:** `git worktree add ../test-pkg-1 HEAD`
**Config:** npm ci
**Execute:** npm test
**Validate:** Tests pass, no cross-worktree changes
**Integrate:** No changes to integrate (test only)
**Cleanup:** git worktree remove ../test-pkg-1

---

## Dependencies / References

- **Principles:** Harness Independence, Evidence Before Assertions, Clear Source of Responsibility
- **Skills:** red-team, red-team, handoff
- **References:** None

