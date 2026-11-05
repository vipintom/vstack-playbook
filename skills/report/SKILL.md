---
name: report
description: Use when work must be explained to someone who did not do it — reviewer, stakeholder or future session — grounded in artifacts rather than narrative; not for compressing a session for continuation (handoff) or for publishing a release (ship).
tier: review
rigor: standard
status: stable
harness: [ledger, panel]
pairs-with: [evidence, handoff, verify]
---

# report

Write for the reader who has the code and not the context. Lead with the
result, then the evidence, then what remains. No journey.

## When to use

- A delivery, incident or investigation needs a written account.
- A stakeholder asks what changed and what it means.
- A review or audit needs a summary with citations.
- A session ends and the next person needs the outcome, not the transcript.
- A claim must be summarised without losing its scope.

Near misses:

- The next session needs pointers to continue → `handoff`.
- The work must be published → `ship` writes the release note.
- The question is why a choice was made → `rationale`.

## Modes

| Mode | Length |
|---|---|
| Result | 5 lines: outcome, evidence, gaps |
| Delivery | structured record with gate table and findings |
| Stakeholder | result plus impact and next decision |

## Steps

1. **Write the result in one sentence** with its scope (what was and was not
   checked). Artifact: `result`.
2. **Attach the evidence**: commands, digests, links, gate table. Artifact:
   evidence references.
3. **List what is still open** with owner or next step. Artifact: open list.
4. **State the limits** — environment, sample, unverified claims. Artifact:
   limits.
5. **Cut everything that is process narration.** If a sentence describes what
   you did rather than what is true, delete it. Artifact: final draft.
6. **Record** in the delivery file and link from the thread. Artifact: report.

## Output

```markdown
Result: retries are idempotent by event id (verified locally, 12/12 tests).
Evidence: `test/queue.test.ts`, run log, digest 41aa…
Open: production replay not tested — needs staging.
Limit: single-process fixture; concurrency untested.
```

## Failure

- **No evidence exists for a claim.** Remove the claim or mark it unverified;
  a report is not a place to hope.
- **The reader needs a decision.** Give options with costs, not a narrative.
- **The account is long because the work was long.** Length is not evidence;
  cut to result, evidence, gaps.

## Rationalizations

| Excuse | Reality |
|---|---|
| "More detail shows the work." | Readers want the result; the code shows the work. |
| "The reader will trust a confident tone." | Confidence without evidence is the thing reports exist to replace. |
| "I will omit the failed attempts." | Then the next session repeats them. One line each. |
| "Stakeholders need the technical detail." | They need impact and decision; link the detail. |

## Tracking

- **OpenChamber present:** the report is the delivery note; project knowledge
  only for what outlives it.
- **OpenCode or files:** `docs/deliveries/<id>.md`.
- Ladder: `resources/tracking.md`.
