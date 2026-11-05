# Skill quality audit — 0.1.0 bodies vs superpowers / pstack

Date: 2026-11-05. Scope: the 43 skill bodies present after the 0.2.0 rename,
which are still 0.1.0 prose. Purpose: set the bar for the rewrites in Tasks
7–13, not to grade the old release for its own sake.

## Method

Counted from the files, not from the docs: line counts, fenced blocks per
skill, sections present, description shape, verbatim repetition across
skills, and whether a `## Verification` section contains a command that can
be run. Baselines: the 14 core superpowers skills installed on this machine,
and pstack's published structure (44 skills, 23 playbooks, 21 principle
leaves, trigger-style descriptions, router that copies playbook steps into a
todolist).

## Numbers

| Measure | vstack (43) | superpowers (14 core) |
|---|---|---|
| Median body lines | 172 | 225 |
| Bodies over 150 lines | 40 / 43 | 11 / 14 |
| Descriptions starting `Use when` | 0 / 43 | 15 / 68 (all packs on disk) |
| Skills containing any fenced block | 3 / 43 | 12 / 14 |
| `## Verification` with a runnable command | 0 / 43 | n/a (they use checklists) |
| Total fenced blocks | 90 (88 in 3 imported stack skills) | 150 |
| Rationalization / red-flag sections | 0 / 43 | 10 / 14 |
| `references/` directories | 0 | several |
| Trigger fixtures | 0 (43 stubs added in Task 6) | 0 |
| Identical boilerplate lines | 43 × "Evidence recording: …" | — |

pstack for reference: trigger-style descriptions ("Use for …"), a router
that copies the chosen playbook's steps into a todolist before touching
code, principle leaves every decision traces back to, a blinded eval skill,
and a decision-trail skill for autonomous runs.

## Scores (1 = absent, 5 = best in class)

| Dimension | vstack | superpowers | pstack |
|---|---|---|---|
| Trigger-shaped descriptions | 1 | 4 | 5 |
| Step actionability | 3 | 4 | 4 |
| Executable evidence | 1 | 4 | 3 |
| Failure and stop conditions | 3 | 4 | 4 |
| Anti-rationalization | 1 | 5 | 4 |
| Progressive disclosure | 1 | 3 | 4 |
| Token economy | 2 | 3 | 4 |
| Evaluation | 1 | 3 | 2 |
| Originality and licensing | 3 | 5 | 5 |
| Method coherence | 4 | 4 | 5 |

## Verdict

The 0.1.0 skill bodies are **documentation about engineering practice**, not
practice encoded as procedure. They read well and cover the right subjects,
but four properties that make superpowers and pstack load-bearing are
missing:

1. **Descriptions describe a topic, not a moment.** "Broad verification
   execution: runs test suites, integration checks…" tells the router what
   the skill is about. It does not tell it when to fire. Every one of the 43
   fails the trigger test, and there is no near-miss boundary, so sibling
   collisions (verify vs evidence vs ready) are unresolved.
2. **Evidence is asserted, never executable.** 40 of 43 skills name a
   verification step; none contains a command that produces it. This is the
   same defect the 0.2.0 PRD opened with — the pack that says "no claim
   without an artifact" shipped zero artifacts.
3. **No defence against agent shortcuts.** Superpowers spends 10 of 14 core
   skills on a rationalization table and 7 on red flags; pstack returns to
   principle leaves. vstack has 43 identical "Evidence recording" lines
   instead. An agent under pressure will shortcut regardless; only the
   table stops it.
4. **Template bloat instead of judgement.** Sixteen mandatory headings
   ×43, including Preconditions, Required Context, Escalation and
   Skill/Route/Tool Routing. The result is a 172-line median where the
   procedure is half the body; superpowers carries more judgement in fewer
   words because the sections that remain earn their place.

Two further findings:

- **Progressive disclosure is absent.** Zero `references/` directories. Long
  checklists either bloat the body or are dropped. The three imported stack
  skills (docker 1182 lines, gitignore 942, makefile 469) are the symptom:
  they cannot fit the standard, so they were imported whole.
- **Mechanical rename damage is visible.** `route`'s routing table names
  five playbooks that do not exist and repeats `red-team` three times in one
  row. A rename is not a rewrite; this is why Tasks 8–13 rewrite bodies.

Original prose is not the problem: similarity to other packs is negligible.
The problem is form.

## Standard for Tasks 7–13

`docs/skill-standard.md` is the binding version. In short:

1. Description: `Use when <concrete situation>; not for <nearest wrong
   skill>.` Trigger only, ≤ 500 characters.
2. Body ≤ 150 lines, six sections only: `When to use`, `Modes`, `Steps`,
   `Output`, `Failure`, `Rationalizations` (+ `Tracking`, `Verification`
   when it carries a command).
3. `Steps` are numbered, each ends in a named artifact and says where it is
   recorded.
4. `Rationalizations`: 4–6 rows, the excuses an agent actually makes, each
   answered by what the skill does instead.
5. Anything long — checklists, command sets, language rules — lives in
   `references/<topic>.md`, loaded on demand.
6. `Verification` holds a runnable command, or states "no command: <the
   evidence that counts>".
7. One worked example, ≤ 15 lines. No case studies.
8. No history, migration or audit sections. Git holds history.
9. No text from another pack without a `NOTICE` entry.
10. Trigger fixtures are hand-written: five positives, three negatives that
    are near-misses to sibling skills — not excerpts of the skill's own
    bullet list.

Three tests should enforce this from Task 14 on: description shape, body
budget and required sections; at least one fenced command or an explicit
no-command statement; no line repeated verbatim in more than five skills.

## What changes in the plan

- Task 7's pilot gains the `Rationalizations` section and a `references/`
  file for `route`'s tier table, so the pilot proves progressive disclosure
  before 51 skills copy the pattern.
- Task 13 rewrites the three imported stack skills to the budget; their
  current bodies are reference material, not shippable text, and the foreign
  authorship visible in them (for example `author: https://github.com/…`)
  must be credited in `NOTICE` or removed.
- Task 14's trigger runner scores the hand-written fixtures, not the
  mechanical stubs created in Task 6.
