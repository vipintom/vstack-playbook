---
name: prototype
description: Use when a design question can only be answered by building something disposable and looking at it; not for answering a factual question (understand) or for production code (tdd).
---

# prototype

Build the thinnest thing that answers the question, look at it, write down what
you learned, then decide: delete it or park it behind a label. A prototype is
not a first draft of production code.

## When to use

- The question is about feel, feasibility or shape: "would this interaction work?".
- An estimate depends on a measurement only a build can give.
- Two architectures need a fair comparison on the same fixture.
- The team cannot agree because nobody has seen the thing.
- A vendor or library's real behaviour matters more than its docs.

Near misses:

- The question is factual and reading answers it → `understand`.
- The answer must ship → `tdd` with production constraints.
- The design is decided and needs a plan → `plan`.

## Steps

1. **Write the question and the decision it informs.** "Should the editor be
   canvas or DOM for 5k nodes?" — the decision is the architecture. Artifact:
   `question`, `decision`.
2. **Set the timebox and the stop rule.** When time is up, stop and report,
   even mid-build. Artifact: `timebox`.
3. **Build the thinnest path** that exercises the risky part. No auth, no
   polish, no error handling beyond what hides the answer. Artifact: the build.
4. **Measure or observe against the fixture.** Same input for both options.
   Artifact: numbers or recording.
5. **Write findings** as answers to the question, with what surprised you.
   Artifact: findings note.
6. **Decide the artifact's fate:** delete, or park under
   `prototypes/<date>-<slug>/` with a README saying it is not production.
   Artifact: deletion or parking record.

## Output

A findings note of at most 20 lines: question, method, result, recommendation,
artifact fate. The prototype itself is evidence, never a deliverable.

## Failure

- **The timebox ends before an answer.** Report the partial result and what
  would finish it. A half answer is data; an overrun is a project.
- **The build needs production quality to be meaningful.** The question is
  badly framed; narrow it until the thin path suffices.
- **The result is ambiguous.** Say so; do not pick the option you prefer.
- **Someone wants to ship it.** Refuse: prototypes have no tests, no error
  handling and no owner. Rebuild under `tdd` if the decision is yes.
