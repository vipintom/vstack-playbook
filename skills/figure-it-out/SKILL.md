---
name: figure-it-out
description: Use when no playbook fits and the situation needs a bespoke sequence built from skills, with the same guarantees as a playbook; not for work that matches an existing playbook (route) or a cause that is simply unknown (debug).
---

# figure-it-out

Build a small playbook for a situation the pack has not met. Same guarantees,
fewer assumptions: ordered steps, one artifact per step, an exit check, and a
record of why the known playbooks did not fit.

## When to use

- Two playbooks half-fit and neither covers the outcome.
- The work crosses domains in an unusual order (a migration inside a UI change).
- The request is a one-off whose shape will not recur.
- A known playbook's exit criteria cannot be checked in this environment.
- The team is improvising and the improvisation needs to become inspectable.

Near misses:

- A playbook fits but is uncomfortable → use it and say why.
- The cause is unknown → `debug` or the `understand` playbook.
- The scope is unclear → `shape`.

## Steps

1. **Name why the thirteen do not fit**, against
   `skills/route/references/playbooks.md`. One sentence per near miss.
   Artifact: rejection note.
2. **Inventory what is known and unknown.** Knowns with sources; unknowns with
   the cheapest probe. Artifact: known/unknown table.
3. **Choose skills per step.** Name the skill and the artifact it produces. If
   no skill covers a step, say what judgement fills the gap. Artifact: step
   list.
4. **Define the exit check.** A command or a named observation that would fail
   today. Artifact: `done-when`.
5. **Set a budget.** Maximum steps and maximum skill loads; abandon at the
   budget rather than extend it. Artifact: budget.
6. **Record and run it.** Put the sequence in the delivery file; execute in
   order; update the record as probes resolve. Artifact: bespoke playbook.

## Output

A six-to-ten-line playbook: steps, skill per step, artifact per step, exit
check, budget, and the rejection note. A reader should be able to run it
without asking what was meant.

## Failure

- **The probes are inconclusive.** Report the unknown. Do not invent a step to
  fill the silence.
- **The sequence grows past the budget.** Stop. What grew is probably a real
  playbook; propose it instead of quietly expanding.
- **A step needs a skill that does not exist.** Write the judgement down; that
  gap is evidence for a future skill, not a reason to improvise silently.
- **The situation recurs.** After the third occurrence, propose the playbook
  with this record as the draft.
