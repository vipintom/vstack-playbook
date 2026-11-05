---
name: plan
description: Use when the work is framed and must be ordered into tasks with an artifact and a check each before coding starts; not for discovering what the problem is (shape) or for a situation with no known approach (figure-it-out).
---

# plan

A task is a unit of work with an artifact and a check. If it has neither, it is
a wish. Plans are ordered by dependency, not by comfort.

## When to use

- Outcome and done predicate exist; the steps do not.
- Work spans more than one file, commit or session.
- Another agent or person will execute the plan without you.
- A change needs sequencing because later steps depend on earlier ones.
- A delivery needs a task list someone else can execute and check.

Near misses:

- The problem is not framed → `shape` first.
- The approach is unknown → `figure-it-out`.
- One edit will do → no plan; do it.

## Steps

1. **Read the frame.** Outcome, done predicate, non-goals. If any is missing,
   stop and `shape`. Artifact: referenced frame.
2. **Decompose by artifact.** Each task produces something a reviewer can
   open: a file, a schema, a test, a diff. Artifact: task list.
3. **Write each task's check before its steps.** The check is a command or a
   named observation that fails now. Artifact: check per task.
4. **Order by dependency, then by risk.** Risky unknowns first, so the plan can
   change before sunk cost. Artifact: ordered list.
5. **Assign a tier and a check per task**, using `route`'s tier table.
   Artifact: tier per task.
6. **Check the plan against the non-goals.** Remove any task that serves
   nothing in the outcome. Artifact: removed tasks named.
7. **Write it down.** With the recorder installed, add each task with
   `vstack_task`, including its check. Without it, write the same table in the
   project plan or a handoff note. Artifact: the plan record.
8. **Execute in order.** Start one task, do the work, run its check, record the
   result. Complete it only when the check passes and the artifact exists.
   With the recorder installed, completion without evidence is refused: the
   task imports its evidence line id (`evidenceId`) on close. Without it,
   write the same task-to-evidence link in the plan table. Artifact: task
   result per task.
9. **Rule on a failed check**: fix, re-plan, or stop. Record which and why; do
   not mark the task done and continue. Artifact: ruling.
10. **Stop when the done predicate is proven.** New scope returns to `shape`;
   it never extends the current plan silently. Artifact: final plan state.

## Output

| # | Task | Artifact | Check | Evidence | Depends on |
|---|---|---|---|---|---|
| 1 | schema for evidence lines | `<schema path>` | `node --test <schema test path>` | evidence line id | — |
| 2 | append-only writer | `<writer path>` | same test, new case | evidence line id | 1 |

A plan a stranger cannot start from is a summary of intent.

## Failure

- **A task has no check.** It is not a task: split it until a check exists, or
  insert an investigation task first.
- **Two tasks are circular.** One of them is hiding a design decision; run
  `design` on the boundary.
- **The plan exceeds 20 tasks.** Group by artifact; a plan nobody reads is
  not a plan.
- **A task discovers new scope.** Stop, return to `shape`, re-plan. Never
  extend the plan silently mid-execution.
