---
name: help
description: Use when someone asks what the pack contains, which skill fits a task, or how to start using vstack; not for routing live work (route) or for a skill's own procedure.
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

## Steps

1. **Classify the question.** Pack capability, skill selection, install or
   method. Artifact: one line naming the class.
2. **Read the pack, do not recall it.** List `skills/*/SKILL.md` and read the
   descriptions; read `playbooks/` and `principles/index.md` when the question
   is about the method. Never quote a count you have not counted. Artifact:
   quoted names.
3. **Answer with the nearest three skills.** Give each one line: what it does
   and what it refuses. Artifact: the shortlist.
4. **Hand off if it is work.** Say "this is work; route it" and name `route`.
   Artifact: the handoff sentence.
5. **Leave no delivery state.** Help answers; it does not open a record.

## Output

A short answer: the class, the shortlist with boundaries, and either a pointer
to `README.md` or `playbooks/` for the map, or a handoff to `route` for work.
No procedure, no task list.

## Failure

- **No skill fits.** Say so and offer `figure-it-out`.
- **The question is about installation.** Point at `README.md`; the pack is
  Markdown, and the recorder is optional.
- **The question is about a private setup.** Ask what is installed rather than
  guessing; answer for the pack files you can read.
- **The pack is mid-change.** Say which part you verified and which you did
  not. Never present an unread file as current.
