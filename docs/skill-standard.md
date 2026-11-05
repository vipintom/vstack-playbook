# vstack skill standard (0.2.0)

Every skill file is judged against this list. `tools/validate.js` enforces
the mechanical parts; a reviewer enforces the rest.

## Front matter

```yaml
---
name: verify                  # equals the directory name, kebab-case
description: Use when …; not for …   # trigger only, ≤ 500 chars
tier: build                   # entry|frame|design|build|review|continuity|meta|stack
rigor: rigid                  # rigid|standard|flexible
status: stable                # stable|experimental|deprecated
pairs-with: [evidence]
---
```

The description names a **moment**, not a subject. It says when to fire and
when not to. It never describes the steps; a router that can read the steps
does not need the skill.

## Body

At most **150 lines**. Six required sections, in this order:

| Section | Holds |
|---|---|
| `## When to use` | 5 concrete triggers, and 3 near-miss situations that belong to another skill |
| `## Modes` | Quick / Standard / Deep — what changes, what is skipped |
| `## Steps` | Numbered. Each step ends in a named artifact and says where it is recorded |
| `## Output` | The artifact a consumer can inspect, not a summary of feelings |
| `## Failure` | What to do when a step cannot complete; "unknown" is an allowed answer |
| `## Rationalizations` | 4–6 rows: the excuse an agent makes → what this skill does instead |

Plus:

- `## Tracking` — required. The harness surface: OpenChamber focus card and
  project knowledge, then OpenCode todos and adapter tools, then the ledger
  file. `resources/tracking.md` defines the ladder.
- `## Verification` — only when it contains a runnable command. If the check
  is not a command, say so in `## Output` instead of writing a fake section.

## Rules

1. **A claim is an artifact.** If a step asserts something happened, the
   step names the file, digest or command that shows it.
2. **Progressive disclosure.** Long checklists, command sets and language
   rules live in `references/<topic>.md` and are loaded on demand. A skill
   that needs more than 150 lines is two skills or one skill plus a
   reference.
3. **One worked example**, ≤ 15 lines. No case studies, no transcripts.
4. **No history.** No migration record, audit rating or research-record
   section. Git holds history.
5. **No boilerplate.** A sentence repeated across more than five skills
   carries no information; delete it and point at the reference instead.
6. **No borrowed text** without a `NOTICE` entry naming author, source and
   licence.
7. **Stop conditions are explicit.** A step that must not proceed says so,
   and names what the agent does instead.
8. **Rigid means rigid.** `rigor: rigid` skills do not allow reordering or
   skipping; the skill says which steps are the load-bearing ones.
9. **Trigger fixtures are written, not extracted.** `evaluations/triggers/
   <skill>.json` carries five positives and three negatives that are
   near-misses to sibling skills.
10. **Harness-neutral prose.** Name OpenChamber, OpenCode or a file path by
    role, and let `resources/tracking.md` resolve it. The pack must work
    with no runtime installed.
