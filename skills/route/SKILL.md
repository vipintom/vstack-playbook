---
name: route
description: Use when a request arrives with no playbook open and the approach must be chosen before skills load; not for a one-file edit, a question a single read answers, or work whose route is already recorded.
---

# route

Pick the playbook, the rigour tier and the first skill. Record the choice so
the next session does not repeat it. Do not do the work here.

The recorder is optional. When installed it exposes six tools: `vstack_route`,
`vstack_task`, `vstack_evidence`, `vstack_decision`, `vstack_handoff` and
`vstack_close`. Every step below also completes with files alone.

## When to use

- A new request starts work that will produce more than one artifact.
- The request names a goal, not a skill ("make the build stop flaking").
- Work resumes and the delivery record does not say what comes next.
- Two skills could apply and the choice changes what gets produced.
- A delivery crosses a gate — design agreed, build done — and needs its next phase.

Near misses, and where they belong instead:

- One file changes and the fix is obvious → edit it; no route, no record.
- The user names the skill ("trace this with code-tour") → run that skill.
- The question is answered by reading one file → read it and answer.

## Steps

1. **State the outcome.** One sentence for what exists afterwards, and the
   check that proves it. Artifact: `outcome` and `done-when` in the delivery
   record.
2. **Decide triviality.** If one edit, one file, reversible — write the Quick
   line and stop routing. Artifact: `tier: quick`.
3. **Choose the playbook.** Read `references/playbooks.md`. If nothing fits
   after one pass, route to `figure-it-out` and say what made the situation
   unrecognisable. Artifact: playbook name and one line of why.
4. **Choose the tier.** Read `references/tiers.md`. Artifact: `tier`.
5. **Cap the load.** Name the first two skills — three at Deep — and the skills
   you deliberately skip, with the reason. Artifact: `skills` and `skipped`.
6. **Record the route.** With the recorder installed, call `vstack_route` with
   the playbook, tier, skills and skipped. Without it, write the same fields at
   the project plan or a delivery note in the repository. Artifact: the
   routing record below.
7. **Hand off.** Invoke the first skill with `outcome`, `done-when` and the
   artifact paths. Do not restate that skill's steps.

## Output

```json
{"playbook": "fix-bug", "tier": "standard", "skills": ["debug", "tdd"],
 "skipped": ["red-team"], "done-when": "the flaky case fails 0/50 runs",
 "recorded": "plan.md#route"}
```

A reader must be able to answer "what was chosen, what was skipped and why"
from the record alone. No record, no route.

## Failure

- **No playbook fits.** Use `figure-it-out`; never invent a fourteenth.
- **Scope unknown.** Use `sharpen` first. Routing on a guess produces the wrong
  tier, and the tier is expensive to change later.
- **The user overrides the route.** Keep their choice, record the override and
  the reason in the same record. Never silently re-route mid-delivery.
- **No delivery record yet.** Write the route into the project plan before
  step 7; a route that exists only in the conversation is not a route.
- **Two playbooks tie.** Take the one whose exit criteria are checkable now.
