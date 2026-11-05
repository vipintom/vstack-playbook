# write-docs

**Applies when:** the artifact is explanation — README, guide, reference, decision record.
**Not for:** code with docs as a side effect (`build-feature`); release notes (`ship`).
**Budget:** 5 skill loads.

## Steps

| # | Skill | Artifact |
|---|---|---|
| 1 | `shape` | reader, task, what they must be able to do afterwards |
| 2 | `report` | the structure: result first, evidence, limits |
| 3 | `rationale` | decisions and constraints the reader must know |
| 4 | `verify` | every command in the doc run from a clean checkout |
| 5 | `review` | a reader completes the task without asking |

## Exit criteria

- Every command in the document has been run as written.
- The reader can complete the task using only the document.
- No fabricated numbers, versions or capabilities.

## Without subagents

Write, then follow your own document from a clean shell. The author is the
worst test reader; if there is another person or agent available, prefer them.
