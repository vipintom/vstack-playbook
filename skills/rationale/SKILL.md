---
name: rationale
description: Use when a decision's history must be reconstructed — what was chosen, what was rejected and on what evidence; not for how the code works now (code-tour) or for making a new decision (principles).
tier: frame
rigor: flexible
status: stable
harness: [knowledge, memory]
pairs-with: [code-tour, decisions, principles]
---

# rationale

Reconstruct intent from evidence. Rank sources, cite them, and separate what
the record says from what you infer. The answer is a short account, not a
history of the repository.

## When to use

- Before changing a design whose reasons are not written down.
- A reviewer asks "why is it done this way?".
- Two implementations disagree and history explains the split.
- A postmortem needs the decisions that led to the failure.
- A deprecated path is about to be deleted and its constraints must survive.

Near misses:

- The question is about current behaviour → `code-tour`.
- The question is a new decision → `principles`.
- The question is what to do next → `plan`.

## Modes

| Mode | Evidence |
|---|---|
| Quick | commit messages and the diff |
| Standard | plus issues, PR discussion, docs |
| Deep | plus chat, incident records, older ADRs, release notes |

## Steps

1. **State the decision being explained.** One sentence, falsifiable against
   the record: "retries were moved from cron to the queue". Artifact:
   `decision`.
2. **Search the evidence sources in rank order:** commit messages, diffs and
   tests; PR and issue threads; ADRs and docs; chat and incident notes.
   Artifact: source list with links or hashes.
3. **Extract claims, not vibes.** Each claim gets a source and a date.
   Artifact: claim table.
4. **Mark inference.** Anything not stated in a source is labelled
   `inferred`, with the basis. Artifact: labelled account.
5. **Name what changed since.** Constraints that no longer hold, and what that
   permits now. Artifact: `still-binding` list.
6. **Write the account**: decision, alternatives rejected, evidence, what still
   binds. Artifact: rationale note.

## Output

```
Decision: retries moved from cron to the queue (2024-08, PR #318).
Rejected: cron — lost retries on deploy (issue #301).
Binding: queue must stay replayable; event id dedupe is required.
Inferred: the 60 s backoff came from the vendor limit; no source states it.
```

## Failure

- **No record exists.** Say so. Reconstructing intent from code alone produces
  a plausible story, not history — label it as such and keep it short.
- **Sources conflict.** Report both with dates; the later one usually governs,
  but say which you would ask about.
- **The person who decided is available.** Ask them; their answer is evidence
  with a name attached.
- **The history is irrelevant now.** Say that too: a constraint that expired
  should not keep governing the code.

## Rationalizations

| Excuse | Reality |
|---|---|
| "The code speaks for itself." | Code says what, never what was rejected or at what cost. |
| "I remember the discussion." | Memory is not a citation; the next reader cannot check it. |
| "A long history is a thorough answer." | The reader needs the binding constraints, not the timeline. |
| "Inference and evidence can be mixed." | Mixed, they cannot be audited; labelled, they inform. |

## Tracking

- **OpenChamber present:** project knowledge for a decision that outlives the
  delivery; memory only for a preference.
- **OpenCode or files:** `decisions/<date>-<slug>.md`, referenced by the
  delivery.
- Ladder: `resources/tracking.md`.
