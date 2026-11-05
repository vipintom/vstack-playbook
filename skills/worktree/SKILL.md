---
name: worktree
description: Use when work needs isolation from the main checkout — a parallel task, risky change or another's branch — and the workspace must be created, inspected or removed safely; not for handoff (handoff) or checkout repair (recovery).
---

# worktree

Isolate before editing. Detect existing isolation first, then use the native
tool, then fall back to git. Never fight the harness.

## When to use

- A second task must proceed while another branch is checked out.
- A risky change should not touch the main working tree.
- A review requires checking out someone else's branch.
- A build or test pollutes the working directory.
- A session was moved into an isolated workspace and needs verifying.

Near misses:

- Work is complete and must be integrated → `ship`.
- The checkout is broken → `recovery`.
- Work must pause and transfer → `handoff`.

## Steps

1. **Detect existing isolation**: compare git dir and common dir; check for a
   submodule. Artifact: isolation state.
2. **Prefer the harness's native workspace tool** when one exists. Artifact:
   workspace path.
3. **Otherwise create a worktree** from the default branch, in an ignored
   directory. Artifact: worktree path and branch.
4. **Set up dependencies and run the baseline suite** before editing. Artifact:
   baseline result.
5. **Record the path and branch** where the next session will look. Artifact:
   handoff or focus detail.
6. **Clean up only after merge or explicit abandonment**, never while work is
   in flight. Artifact: removal record with the branch state.

## Output

Workspace path, branch, baseline result, and the cleanup condition. A reader
can tell which tree holds which work.

## Failure

- **The directory is not ignored.** Add it to `.gitignore` and commit before
  creating; an unignored worktree commits itself.
- **Creation is denied by the sandbox.** Say so and work in place; do not
  simulate isolation.
- **Cleanup would discard unmerged work.** Refuse and show the unmerged
  commits; force-removal needs the owner.
