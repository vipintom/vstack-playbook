# Tracking surface

Where a skill, playbook or delivery records state so the next agent can see it.
Use the richest surface available, in this order. Never skip to the bottom rung
while a richer one is present.

## 1. OpenChamber (primary)

The panel is a read-only projection. The tools that write are OpenChamber's
chat tools:

| Tool | Use |
|---|---|
| `focus_set` | Replace the task sentence when the task or approach changes |
| `focus_status` | Move through `planning`, `implementing`, `testing`, `reviewing`, `waiting-decision`, `waiting-manual`, `waiting-external`, `blocked`, `idle`, `done` |
| `focus_add` | Add an agreed action before starting it |
| `focus_begin` / `focus_complete` / `focus_drop` | Keep exactly one action in flight; mark done when verified |
| `focus_link` | Attach the issue, ADR or PR as soon as it exists |
| `openchamber_knowledge` | Notes, todos and the plan; tick plan steps as they land |
| `openchamber_memory` | A preference or a hard-won pointer that must outlive the session |
| `openchamber_notify` | Only when blocked on the human or a long run finishes |

## 2. OpenCode (when the harness exposes it)

Use the session's todo and plan facilities, and the vstack adapter tools when
installed: `vstack_status`, `vstack_deliver`, `vstack_task`, `vstack_gate`,
`vstack_evidence`. The adapter writes the ledger; the ledger is the source of
truth the panel projects.

## 3. Files (fallback)

With no harness tools, write the same facts to:

- `.vstack/ledger/progress.md` — one line per task, including rulings;
- the delivery's task list — one action in flight, artifacts linked;
- `docs/deliveries/<id>.md` at close.

## What counts as tracked

A step is tracked when a different agent can answer, without this conversation:

1. What is the current task and approach?
2. What is in flight, and what is next?
3. Which artifacts prove what was done?

A claim that only exists in the chat is not tracked.
