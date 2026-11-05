# Evaluation Scenario: worktree

**Skill:** worktree
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Worktree Creation (Tier 1 - Deterministic)

**Objective:** Verify worktree created correctly.

**Input:**
```
Base commit: HEAD, purpose: swarm worker
```

**Expected Behavior:**
- `git worktree add <path> <base-commit>`
- Verifies clean state
- Records worktree path and purpose

**Acceptance Criteria:**
- [ ] Worktree created at path
- [ ] Clean state verified
- [ ] Path and purpose recorded

---

## Scenario 2: Workspace Configuration (Tier 1 - Deterministic)

**Objective:** Verify workspace configured correctly.

**Input:**
```
Fresh worktree at ../worker-1
```

**Expected Behavior:**
- Installs dependencies if needed
- Applies project config
- Sets up tooling

**Acceptance Criteria:**
- [ ] Dependencies installed
- [ ] Config applied
- [ ] Tooling ready

---

## Scenario 3: Work Execution in Isolation (Tier 1 - Deterministic)

**Objective:** Verify work executes in isolation.

**Input:**
```
Worker operates in worktree
```

**Expected Behavior:**
- Changes isolated to worktree
- Commits within worktree
- No cross-worktree writes

**Acceptance Criteria:**
- [ ] Changes isolated
- [ ] Commits in worktree
- [ ] No cross-contamination

---

## Scenario 4: Inspection and Validation (Tier 1 - Deterministic)

**Objective:** Verify worktree changes inspected and validated.

**Input:**
```
Worker completed work
```

**Expected Behavior:**
- Reviews changes in worktree
- Runs verification
- Confirms isolation (no cross-worktree writes)

**Acceptance Criteria:**
- [ ] Changes reviewed
- [ ] Verification run
- [ ] Isolation confirmed

---

## Scenario 5: Integration or Discard (Tier 1 - Deterministic)

**Objective:** Verify correct integration or discard decision.

**Test Cases:**
| Result | Action |
|--------|--------|
| PASS | Merge or cherry-pick to main |
| DISCARD | Remove worktree |

**Acceptance Criteria:**
- [ ] PASS = merge/cherry-pick
- [ ] DISCARD = remove worktree
- [ ] Correct action per result

---

## Scenario 6: Clean Up (Tier 1 - Deterministic)

**Objective:** Verify clean removal.

**Input:**
```
Worktree no longer needed
```

**Expected Behavior:**
- `git worktree remove <path>`
- Verifies no orphaned worktrees
- Cleans build artifacts

**Acceptance Criteria:**
- [ ] Worktree removed
- [ ] No orphans
- [ ] Artifacts cleaned

---

## Scenario 7: Fallback - Worktree Creation Fails (Tier 1 - Deterministic)

**Objective:** Verify fallback when worktree creation fails.

**Input:**
```
git worktree add fails
```

**Expected Behavior:**
- Falls back to branch/directory isolation
- Documents fallback

**Acceptance Criteria:**
- [ ] Falls back to branch/directory
- [ ] Fallback documented

---

## Scenario 8: Fallback - Merge Conflicts (Tier 1 - Deterministic)

**Objective:** Verify merge conflict handling.

**Input:**
```
Merge conflicts on integration
```

**Expected Behavior:**
- Resolves in main worktree
- Documents resolution

**Acceptance Criteria:**
- [ ] Resolved in main
- [ ] Resolution documented

---

## Scenario 9: Fallback - Without Worktree Support (Tier 1 - Deterministic)

**Objective:** Verify fallback without git worktree support.

**Input:**
```
No worktree support (e.g., bare repo)
```

**Expected Behavior:**
- Branch + directory isolation
- Separate working directories
- Documents fallback

**Acceptance Criteria:**
- [ ] Branch + directory isolation
- [ ] Separate working directories
- [ ] Fallback documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Worktree Creation | 1 |  |  |
| 2. Workspace Config | 1 |  |  |
| 3. Isolation | 1 |  |  |
| 4. Inspection | 1 |  |  |
| 5. Integrate/Discard | 1 |  |  |
| 6. Clean Up | 1 |  |  |
| 7. Creation Fallback | 1 |  |  |
| 8. Merge Conflicts | 1 |  |  |
| 9. No Worktree Fallback | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/9 PASS
- **Skill Status:** ___