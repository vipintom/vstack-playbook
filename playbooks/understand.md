# understand

**Applies when:** behaviour or cause is unknown and reading the system is the work.
**Not for:** a defect with a known repro (use `fix-bug`); a design decision (`change-architecture`).
**Budget:** 4 skill loads.

## Steps

| # | Skill | Artifact |
|---|---|---|
| 1 | `code-tour` | entry points and call path with `path:line` |
| 2 | `code-tour` | state ownership table: writer, reader, source of truth |
| 3 | `rationale` | the decisions that shaped this path, with sources |
| 4 | `report` | the answer, its limits and the gaps |

Load `forensics` only when a profile or trace already exists. Stop reading when
the question is answered; extra reading is not thoroughness.

## Exit criteria

- The original question is answered in one paragraph with citations.
- Each claim has a `path:line` or a source link.
- Gaps are named, with what would close them.

## Without subagents

Read serially in the order above; keep notes in the delivery file so the reading
is not repeated. No parallelism is needed for a question this small.
