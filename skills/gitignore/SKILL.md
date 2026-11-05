---
name: gitignore
description: Use when a repository's ignore rules must keep secrets, build output and local state out of history, or a file is tracked that should not be; not for cleaning a repository that already committed a secret (recovery).
tier: stack
rigor: standard
status: stable
harness: [gate]
pairs-with: [docker, makefile, ci]
---

# gitignore

Ignore rules are a safety boundary. They must be checked, not assumed: an
unignored secret is a leak, and an over-broad rule hides source.

## When to use

- A new repository or a new language/toolchain in an existing one.
- Build output, caches, editor state or OS files appear in `git status`.
- A secret, `.env` or credential file is about to be committed.
- A worktree or local database directory must stay out of history.
- A file is tracked that the rules say to ignore.

Near misses:

- The secret is already committed → `recovery` and rotation, not a rule.
- The file is build output that should be shipped → packaging, not ignore.
- The question is container context size → `docker`.

## Modes

| Mode | Scope |
|---|---|
| Minimal | secrets, dependencies, build output |
| Project | plus toolchain caches and local state |
| Monorepo | per-package rules with a root baseline |

## Steps

1. **List what must never be committed**: secrets, keys, local databases,
   logs with payloads. Artifact: never-commit list.
2. **Add rules by category** from `references/patterns.md`, one block per tool
   with a comment. Artifact: `.gitignore` diff.
3. **Verify each rule** with `git check-ignore -v <path>`, not by reading it.
   Artifact: check output.
4. **Check for tracked files that match** (`git ls-files -ci --exclude-standard`)
   and untrack them. Artifact: untracked list.
5. **Test the worktree case** if the repo uses one. Artifact: check output.
6. **Record the policy** in the repo docs: secrets are never committed, rotate
   on suspicion. Artifact: one line in the README.

## Output

A `.gitignore` with commented blocks, each verified by `git check-ignore`, and
no tracked file that the rules exclude. Patterns: `references/patterns.md`.

## Failure

- **A secret was committed.** Removal from history is not enough: rotate the
  secret, then clean history under `recovery`.
- **A rule hides source.** Narrow it to the specific path; broad globs hide
  files people later need.
- **Negation does not work** (`!file` after a directory rule). Re-include the
  parent directory first.

## Rationalizations

| Excuse | Reality |
|---|---|
| "Everyone knows `.env` is ignored." | Check it; assumptions leak credentials. |
| "I can add it in the next commit." | One commit is enough for a secret to spread. |
| "Deleting the file removes it." | History keeps it; rotate before cleaning. |
| "A broad glob is tidier." | It hides source, and the next person debugs why. |

## Tracking

- **OpenChamber present:** `git check-ignore` output on the delivery note.
- **OpenCode or files:** evidence line with the command and result.
- Ladder: `resources/tracking.md`.

## Verification

```bash
git check-ignore -v .env node_modules dist .worktrees
```
