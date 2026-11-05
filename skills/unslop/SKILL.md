---
name: unslop
description: Use when generated or accumulated code has become more complex than the problem — duplication, dead paths, speculative abstraction — and must be reduced without changing behaviour; not for improving structure with tests as the goal (refactor) or for reviewing correctness (review).
tier: meta
rigor: standard
status: stable
harness: [ledger]
pairs-with: [refactor, review, coverage]
---

# unslop

Delete more than you add. The target is the smallest diff that keeps behaviour
and removes a class of future error, not a rewrite with a nicer shape.

## When to use

- A generated change carries options nobody uses.
- The same helper exists three times with different names.
- Abstractions were built for a second caller that never arrived.
- Comments explain code that should be deleted.
- A review says "this is more complicated than the problem".

Near misses:

- Structure is the goal and behaviour is covered → `refactor`.
- Correctness is in question → `review`.
- The code is new and needs a failing test → `tdd`.

## Modes

| Mode | Cut |
|---|---|
| Local | dead branches, unused options, duplicate helpers |
| Module | collapse layers that only forward calls |
| Repository | delete abandoned paths and their tests |

## Steps

1. **Prove the behaviour baseline** with the suite; record counts. Artifact:
   baseline.
2. **List what to delete and why**, each with a reference count or a caller
   search. Artifact: cut list.
3. **Delete in small steps**, suite green after each. Artifact: diffs.
4. **Collapse duplication at the third occurrence**, not the second. Artifact:
   merged helper.
5. **Remove speculative generality** (flags with one value, interfaces with one
   implementation) only when the second use is not funded. Artifact: removal
   list.
6. **Compare the public surface** before and after; it should shrink or stay
   equal. Artifact: surface diff.
7. **Record the reduction**: lines, files, dependencies removed. Artifact:
   delivery note.

## Output

A negative diff with a green suite at every step and a surface that did not
grow. Numbers: lines removed, files removed, dependencies dropped.

## Failure

- **A "dead" path is reachable from configuration.** Restore it and add a test
  that shows the reachability.
- **Deletion breaks an external consumer.** That is a compatibility change →
  `migration`.
- **The code is complex for a good reason.** Name the reason; if it holds, the
  finding is documentation, not deletion.

## Rationalizations

| Excuse | Reality |
|---|---|
| "It might be useful later." | Later pays interest; delete and re-add when the use exists. |
| "The abstraction is cleaner." | Cleaner than what? Count callers and options. |
| "Rewriting is faster than deleting." | Rewrites carry the same bugs plus new ones. |
| "Tests will catch it." | Only if they cover the deleted path; check first. |

## Tracking

- **OpenChamber present:** reduction numbers on the delivery note.
- **OpenCode or files:** commit series and the delivery record.
- Ladder: `resources/tracking.md`.
