---
name: sharpen
description: Use when a request's wording is ambiguous, its acceptance criteria are missing, or its scope is stated as a feeling; not for framing a request that is already clear (shape) or ordering agreed work (plan).
tier: frame
rigor: standard
status: stable
pairs-with: [shape, plan]
---

# sharpen

Replace vague words with claims you could test. Keep the user's intent; change
only what makes it unactionable. Never widen the request while clarifying it.

## When to use

- The request contains a judgement word: faster, cleaner, better, stable, safe.
- No acceptance criterion exists, so "done" is whoever says it first.
- Scope is a gesture: "around the API", "the whole dashboard".
- Two readings of the request would produce different work.
- A previous attempt was rejected with "that is not what I asked".

Near misses:

- The request is precise but not framed → `shape`.
- The request is framed and needs ordering → `plan`.
- The user wants a question answered, not work defined → answer it.

## Modes

| Mode | Output |
|---|---|
| Restate | one paragraph in your words, no questions |
| Sharpen | restate + ambiguities + proposed criteria |
| Interrogate | Sharpen plus at most three questions that change the work |

## Steps

1. **Restate the request in your own words**, one paragraph, no jargon added.
   Artifact: `restatement`.
2. **List the ambiguities as choices.** Each is a fork with two named readings,
   not an open question. Artifact: ambiguity list.
3. **Propose acceptance criteria** that are falsifiable and scoped to this
   request. Artifact: `acceptance`.
4. **Ask only questions whose answer changes the work.** Maximum three; each
   with a recommended default and the cost of being wrong. Artifact: questions
   asked, or the defaults taken.
5. **Confirm the sharpened version** with the user in one block, or proceed on
   the stated defaults when they are away — and mark it as assumed. Artifact:
   `sharpened` block.
6. **Hand the block to `shape` or `plan`.** Do not continue into work.

## Output

```markdown
You asked: make the export fast enough.
Sharpened: CSV export of 100k rows completes in <10 s on the reference machine.
Criteria: p95 <10 s over 5 runs; memory <512 MB; no schema change.
Fork taken: "fast" = upload latency, not download (default; wrong cost: 1 day).
```

## Failure

- **The user is unavailable.** Take the least surprising reading, state it as
  an assumption with its cost, and start only reversible work.
- **A fork is genuinely 50/50.** Stop and ask; do not average the readings.
- **The request hides a constraint** ("without a migration"). Surface it as a
  boundary before planning.
- **The user resists sharpening.** Record their words verbatim, note the risk
  of an untestable criterion, and proceed at the tier they choose.

## Rationalizations

| Excuse | Reality |
|---|---|
| "I know what they meant." | Then writing it down takes one minute and prevents a week of rework. |
| "Asking questions wastes their time." | Three good questions cost less than one wrong delivery. |
| "I'll keep the criteria loose so I can deliver sooner." | Loose criteria move the judgement to the reviewer, later, with less context. |
| "More scope is safer than less." | Unrequested scope is the most common cause of rejection. |

## Tracking

- **OpenChamber present:** `focus_set` with the sharpened outcome; the block
  goes on the delivery note.
- **OpenCode or files:** `.vstack/frame.md` under a `sharpened` heading.
- Ladder: `resources/tracking.md`.
