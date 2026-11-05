---
name: evidence
description: Use when a claim is about to be reported, committed or handed over and needs a recorded artifact behind it; not for producing the proof of a whole delivery (verify) or for writing the failing test (tdd).
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
5. **Record it.** With the recorder installed, call `vstack_evidence` with
   claim, check, exit, digest and path. Without it, add the same fields to the
   delivery record (`docs/deliveries/<id>.md`) or the commit message; the
   fields are in `references/record.md`. Artifact: the evidence line.
6. **Downgrade what did not run.** Any claim missing steps 1–4 is recorded as
   `not_verified` with the reason. Never delete a failed line — append.

## Output

```json
{"ts":"2026-11-05T10:22:31Z","claim":"flaky test passes 0/50","check":"node --test --test-name-pattern flaky ×50","exit":0,"digest":"sha256:8c1f…","artifact":"logs/flaky-50.log"}
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
