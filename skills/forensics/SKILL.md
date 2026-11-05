---
name: forensics
description: Use when a profile, trace, heap snapshot, log set or core dump must be interpreted into a cause; not for measuring an improvement (performance) or for reproducing a bug (debug).
tier: design
rigor: standard
status: stable
harness: [knowledge]
pairs-with: [performance, debug, evidence]
---

# forensics

Read the artifact the runtime produced and turn it into a ranked cause. The
artifact is the authority; your hypothesis is not.

## When to use

- A flame graph, trace or heap snapshot exists and nobody has read it.
- A production incident left logs, metrics or a core dump.
- Memory grows and the heap shows retained objects.
- A latency spike needs attribution to a span.
- A tool's output is large and the question is what matters in it.

Near misses:

- You need a number before and after → `performance`.
- You need to reproduce the failure → `debug`.
- You need to know how the code flows → `code-tour`.

## Modes

| Mode | Artifact |
|---|---|
| Profile | CPU or allocation profile |
| Trace | distributed trace, spans and timings |
| Postmortem | logs, metrics, events around an incident |

## Steps

1. **State the question the artifact should answer** ("what holds 2 GB after
   ten minutes?"). Artifact: `question`.
2. **Record provenance:** tool, version, sample rate, time window, commit.
   An artifact without provenance is an anecdote. Artifact: provenance block.
3. **Find the dominant share** — top frames, slowest span, largest retainer.
   Artifact: ranked list with percentages.
4. **Trace one instance to code** and cite `path:line`. Artifact: cause
   candidate.
5. **State what the artifact cannot show** (sampling bias, missing spans).
   Artifact: limits.
6. **Propose the confirming measurement** and hand to `performance` or
   `debug`; do not claim the fix from the profile alone. Artifact: next test.

## Output

A ranked cause list with the share each explains, the code citation, and the
one measurement that would confirm or kill it.

## Failure

- **The artifact is too coarse.** Say so; propose the instrumentation needed.
- **Sampling missed the hot path.** The absence is a finding about the tool.
- **Two causes explain the same share.** They may be the same cause at two
  layers; test the lower one first.

## Rationalizations

| Excuse | Reality |
|---|---|
| "The top frame is the bug." | It is where time is spent, not why. Follow one instance to code. |
| "The profile matches my theory." | Then check the share it explains; a 3% frame is not the cause of a 10× regression. |
| "Production data is too sensitive to share." | Aggregate and cite shape; the reasoning does not need payloads. |
| "One snapshot is enough." | Growth needs two points in time; a single heap is a still photo. |

## Tracking

- **OpenChamber present:** cause list on the delivery note; artifacts linked,
  not pasted.
- **OpenCode or files:** `docs/deliveries/<id>.md` under "Forensics", artifacts
  under `.vstack/deliveries/<id>/`.
- Ladder: `resources/tracking.md`.
