---
name: help
description: Use when someone asks what the pack contains, which skill fits a task, or how to start using vstack; not for routing live work (route) or for a skill's own procedure.
tier: entry
rigor: flexible
status: stable
pairs-with: [route, principles]
---

# help

Answer the question about the pack, then hand real work to `route`. Help never
performs the work and never restates a skill's steps.

## When to use

- "What can vstack do?", "what is in this pack?", "how do I install it?".
- "Which skill should I use for X?" where X is not yet work in progress.
- A reader is learning the method and needs the map, not a procedure.
- A skill's description did not make its boundary clear.

Near misses:

- The user wants work done now → `route` picks the playbook.
- The question is about the repository's code → `code-tour`.
- The question is about a past decision → `rationale`.

## Modes

| Mode | Answer shape |
|---|---|
| Lookup | one skill, one line, its `not for` boundary |
| Map | the tier table plus the three entry points |
| Onboarding | install, first route, where state is recorded |

## Steps

1. **Classify the question.** Pack capability, skill selection, install, or
   method. Artifact: one line naming the class.
2. **Read the generated catalog.** `docs/index.md` and `manifest.json` are
   generated; never answer counts from memory. Artifact: quoted names.
3. **Answer with the nearest three skills.** Give each one line: what it does
   and what it refuses. Artifact: the shortlist.
4. **Hand off if it is work.** Say "this is work; route it" and name `route`.
   Artifact: the handoff sentence.
5. **Record nothing** unless the user asks for the map, in which case point at
   `docs/index.md`. Help leaves no delivery state.

## Output

A short answer: the class, the shortlist with boundaries, and either a
catalog link or a handoff to `route`. No procedure, no task list.

## Failure

- **The pack is mid-rewrite.** Say which parts are stable and which are
  stubs; point at `docs/skill-quality-audit.md`. Never present a stub as done.
- **No skill fits.** Say so and offer `figure-it-out`.
- **The question is about a private setup.** Answer from `resources/tracking.md`
  rather than guessing what the user has installed.

## Rationalizations

| Excuse | Reality |
|---|---|
| "I'll just do the task, it's small." | Help that starts working is routing without a record. Hand off. |
| "I remember the counts." | Counts drift with every commit. Read the generated catalog. |
| "More skills listed means a better answer." | A shortlist of three with boundaries is usable; twelve is a catalog dump. |
| "The user asked which skill, so I'll explain all of them." | Answer the question asked, then offer the map as a link. |

## Tracking

- **OpenChamber present:** nothing is recorded for a lookup; use project
  knowledge only when the user asks to keep the answer.
- **OpenCode or files:** point at `docs/index.md`; the catalog is the record.
- Ladder: `resources/tracking.md`.
