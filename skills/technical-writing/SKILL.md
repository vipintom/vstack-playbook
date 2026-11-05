---
name: technical-writing
description: Use when prose must let a reader complete a task — README, guide, reference, runbook — and accuracy, order and scannability decide whether it works; not for reporting results to a stakeholder (report) or recording decisions (decisions).
---

# technical-writing

Write for the reader's task, in the order they will do it. Every command is
run, every claim is checked, and nothing is included because it felt thorough.

## When to use

- A README, runbook, guide or reference is created or restructured.
- Support questions repeat what the docs should answer.
- A command in the docs fails when followed.
- A release changes how something is installed or used.
- Onboarding takes too long because the path is undocumented.

Near misses:

- The reader needs a result summary → `report`.
- The reader needs the reason behind a choice → `rationale`.
- The artifact is code → `tdd`.

## Steps

1. **Name the reader and the task** they must complete. Artifact: reader and
   task sentence.
2. **Write the shortest path to first success**, commands included. Artifact:
   quickstart.
3. **Run every command from a clean environment** and paste the real output.
   Artifact: run log.
4. **Order by the reader's sequence**, not by system architecture. Artifact:
   outline.
5. **Cut anything that does not change what the reader does.** Artifact:
   trimmed draft.
6. **Add failure notes** where a step commonly fails, with the fix. Artifact:
   troubleshooting section.
7. **Have someone follow it without help**, or follow it yourself later from a
   clean shell. Artifact: test-reader result.

## Output

A document where every command has been run, the order matches the task, and a
newcomer reaches first success without asking a question.

## Failure

- **A command depends on hidden state.** Document the prerequisite or
  containerise it.
- **The feature is too complex to document simply.** The docs are revealing a
  design problem; say so.
- **Output differs between machines.** Document the supported environment
  explicitly.
