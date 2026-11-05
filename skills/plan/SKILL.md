---
name: plan
description: Use when the work is framed and must be ordered into tasks with an artifact and a check each before coding starts; not for discovering what the problem is (shape) or for a situation with no known approach (figure-it-out).
tier: frame
rigor: rigid
status: stable
harness: [todo, plan, focus]
pairs-with: [shape, route, tdd]
---

# plan

A task is a unit of work with an artifact and a check. If it has neither, it is
a wish. Plans are ordered by dependency, not by comfort.

## When to use

- Outcome and done predicate exist; the steps do not.
- Work spans more than one file, commit or session.
- Another agent or person will execute the plan without you.
- A change needs sequencing because later steps depend on earlier ones.
- A delivery needs a task list the ledger can gate.

Near misses:

- The problem is not framed → `shape` first.
- The approach is unknown → `figure-it-out`.
- One edit will do → no plan; do it.

## Modes

| Mode | Task count | Record |
|---|---|---|
| Inline | 2–4 | one list in the delivery record |
| Written | 5–20 | `docs/deliveries/<id>.md` task table |
| Delegated | any | each task self-contained with its check |

`rigor: rigid` — every task names an artifact and a check. A task without a
check cannot be completed, only abandoned.

## Steps

1. **Read the frame.** Outcome, done predicate, non-goals. If any is missing,
   stop and `shape`. Artifact: referenced frame.
2. **Decompose by artifact.** Each task produces something a reviewer can
   open: a file, a schema, a test, a diff. Artifact: task list.
3. **Write each task's check before its steps.** The check is a command or a
   named observation that fails now. Artifact: check per task.
4. **Order by dependency, then by risk.** Risky unknowns first, so the plan can
   change before sunk cost. Artifact: ordered list.
5. **Assign tier and gates per task**, using `route`'s tier table. Artifact:
   tier per task.
6. **Check the plan against the non-goals.** Remove any task that serves
   nothing in the outcome. Artifact: removed tasks named.
7. **Write it down** in the chosen surface: adapter (`vstack_task`), project
   plan, or the delivery file. Artifact: the plan record.

## Output

| # | Task | Artifact | Check | Depends on |
|---|---|---|---|---|
| 1 | schema for evidence lines | `<schema path>` | `node --test <schema test path>` | — |
| 2 | append-only writer | `<writer path>` | same test, new case | 1 |

Task template: `templates/task.md`. A plan a stranger cannot start from is a summary of intent.

## Failure

- **A task has no check.** It is not a task: split it until a check exists, or
  insert an investigation task first.
- **Two tasks are circular.** One of them is hiding a design decision; run
  `design` on the boundary.
- **The plan exceeds 20 tasks.** Group by artifact; a plan nobody reads is
  not a plan.
- **A task discovers new scope.** Stop, return to `shape`, re-plan. Never
  extend the plan silently mid-execution.

## Rationalizations

| Excuse | Reality |
|---|---|
| "The plan is obvious, I'll keep it in my head." | The next agent has no head. Write it or re-derive it. |
| "Checks slow the plan down." | Checks are the plan; without them "done" is an opinion. |
| "I'll order by what's easiest first." | Easy first hides the risky unknown until it is expensive. |
| "More tasks means more rigour." | More tasks means more handoffs. One artifact per task, no finer. |

## Tracking

- **vstack adapter present:** `vstack_task` per task; `vstack_deliver` opens the
  record.
- **OpenChamber present:** project plan, one step per task; `focus_add` for the
  first three.
- **Neither:** `.vstack/plan.md` plus `docs/deliveries/<id>.md`.
- Ladder: `resources/tracking.md`.

## Verification

```bash
docker compose run --rm pack node tools/validate.js
```
