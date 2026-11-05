---
name: evidence
description: Use when a claim is about to be reported, committed or handed over and needs a recorded artifact behind it; not for producing the proof of a whole delivery (verify) or for writing the failing test (tdd).
tier: build
rigor: rigid
status: stable
harness: [evidence, ledger]
pairs-with: [verify, tdd]
---

# evidence

One claim, one artifact, one record. If the artifact is missing, the claim is
not verified — it is a sentence.

## When to use

- About to say "fixed", "passes", "faster", "safe" or "done" in a report,
  commit message or handoff.
- About to paste a number into docs, a PR or a release note.
- A reviewer asks "how do you know?".
- A step in another skill asserts an outcome and the artifact is not obvious.
- Finishing a task in a delivery and the completion gate needs results.

Near misses, and where they belong instead:

- Proving a whole delivery is complete → `verify` runs the gates.
- Writing the failing test that will prove the fix → `tdd`.
- Exploring to find out what is true → `understand`; evidence records a claim
  you already decided to make.

## Modes

| Mode | Scope | Record |
|---|---|---|
| Claim | one sentence | one JSONL line |
| Task | every acceptance criterion of a task | one line per criterion |
| Delivery | all claims in a delivery, including the ones that failed | append-only file linked from the delivery record |

`rigor: rigid` — steps 1, 2 and 3 cannot be reordered or skipped. Step 5 may
use any surface; the fields are fixed.

## Steps

1. **Write the claim as falsifiable.** One sentence with a subject, a
   condition and a check. "The flaky test passed 0/50 runs" is falsifiable;
   "the build is stable now" is not. Artifact: `claim`.
   Forms: `references/claim-forms.md`.
2. **Name the observation that would prove it wrong.** A command, a file to
   read, or a measurement — plus the threshold. Artifact: `check`.
3. **Run the check in the environment the claim is about.** If the claim is
   about CI, run in CI; a local run does not carry it. Capture stdout,
   stderr and exit code to a file. Artifact: `run.log`, `exit`.
4. **Digest the artifact.** `sha256sum run.log` so the record cannot drift
   from what was observed. Artifact: `digest`.
5. **Record it.** With the vstack adapter: `vstack_evidence` with claim,
   check, exit, digest, path. Otherwise append one JSONL line to
   `.vstack/deliveries/<id>/evidence.jsonl` — fields in
   `references/ledger-format.md`. Artifact: the evidence line.
6. **Downgrade what did not run.** Any claim missing steps 1–4 is recorded as
   `not_verified` with the reason. Never delete a failed line — append.

## Output

```json
{"ts":"2026-11-05T10:22:31Z","claim":"flaky test passes 0/50","check":"node --test --test-name-pattern flaky ×50","exit":0,"digest":"sha256:8c1f…","artifact":".vstack/deliveries/7/run.log"}
```

A reader can re-run `check`, hash the output and compare. If they cannot, the
line is not evidence.

## Failure

- **The check cannot run here.** Record `blocked` and what is missing. Blocked
  is not passed, and never becomes passed by waiting.
- **The check ran but proves something narrower.** Record the narrower claim,
  not the one you wanted.
- **No artifact can exist** (a design judgement, a preference). Say so in the
  delivery record as `judgement`, with the reason. Do not fabricate a digest.
- **The claim already failed once.** Keep the failing line; add the passing
  line after it. The pair is the evidence.

## Rationalizations

| Excuse | Reality |
|---|---|
| "I ran it a minute ago, that counts." | A minute ago was a different tree. Digest the output from the tree being claimed. |
| "CI will prove it anyway." | CI proves the CI run, after the claim was made. Record it when it exists, or say pending. |
| "It is obviously correct." | Obvious is the state of mind that produces the bug report. One command settles it. |
| "The reviewer trusts me." | Trust is what the record replaces. The next agent has no memory of you. |
| "Recording it will take longer than the fix." | The fix without a record is a rumour; a rumour gets re-diagnosed at full cost. |
| "The output is long, I'll summarise." | Summaries drift. Keep the file, digest it, quote one line. |

## Tracking

- **OpenChamber present:** `focus_status` "testing" while the check runs, and a
  project note only if the claim constrains future work.
- **vstack adapter present:** `vstack_evidence` writes the line and returns the
  digest; `vstack_status` shows what is still unverified.
- **Neither:** `.vstack/deliveries/<id>/evidence.jsonl`, plus the `run.log`
  beside it. Ladder: `resources/tracking.md`.

## Verification

```bash
tail -n 5 .vstack/deliveries/<id>/evidence.jsonl
```
