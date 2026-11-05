---
name: code-tour
description: Use when someone needs to understand how existing code works — entry points, call path, state ownership — without changing it; not for explaining why a design was chosen (rationale) or for fixing it (debug).
---

# code-tour

Explain how the code works today, with citations. Read-only: no edits, no
refactors, no "while I was there" fixes. Every claim carries `path:line`.

## When to use

- Onboarding to an unfamiliar area before changing it.
- A question about control flow, data ownership or configuration.
- A review needs the reader to see the path, not the opinion.
- A bug report needs a map of the code before a cause is guessed.
- Someone asks "where does X come from?".

Near misses:

- The question is about intent or history → `rationale`.
- The code is known and wrong → `debug`.
- The task is to change behaviour → `plan`, then `tdd`.

## Steps

1. **Write the question as one sentence.** "How does a webhook reach the
   worker?" A tour without a question becomes a directory listing. Artifact:
   `question`.
2. **Find the entry point** with a symbol search, not by guessing files.
   Artifact: entry `path:line`.
3. **Follow the path**, quoting each hop: call, queue, handler, state write.
   Stop at boundaries you only need to name. Artifact: hop list with citations.
4. **Name state ownership.** Who writes, who reads, what is the source of
   truth, what is derived. Artifact: state table.
5. **Name the gaps.** Anything you could not confirm from the code, and what
   would confirm it (a log, a test, an instrument). Artifact: gaps list.
6. **Write the tour** as prose plus citations, at the requested depth.
   Artifact: the answer in the thread or the delivery note.

## Output

```markdown
Question: how does a Stripe webhook reach the worker?
1. POST /webhooks/stripe — `src/http/webhooks.ts:24` verifies the signature.
2. Enqueue — `src/queue/producer.ts:41`, job name `stripe.event`.
3. Consume — `src/queue/worker.ts:88`, one job per event id.
State: events table is the source of truth; the queue is derived and replayable.
Gap: retry count is not persisted — confirm via `worker.ts:91` log line.
```

## Failure

- **No entry point found.** Say so and name the search terms tried; propose an
  instrument rather than guessing.
- **The path branches beyond the question.** Follow one branch, list the others
  as out of scope.
- **The code contradicts the docs.** Report both with citations; do not decide
  which is right without running it.
- **The reader needs intent, not flow.** Hand off to `rationale`.
