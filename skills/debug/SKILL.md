---
name: debug
description: Use when a failure is reproducible but its cause is unknown, and evidence must narrow it before any fix; not for interpreting a profile (forensics) or for fixing a known cause (tdd).
tier: build
rigor: rigid
status: stable
harness: [ledger, evidence]
pairs-with: [tdd, forensics, unstick]
---

# debug

Reproduce, narrow, explain, then fix. A fix without a cause is a guess that
happens to pass the test you chose.

## When to use

- A test, request or job fails intermittently or reproducibly.
- Behaviour differs between environments or versions.
- A fix was attempted and the failure returned.
- An error message points at a symptom, not a cause.
- Something worked yesterday and does not today.

Near misses:

- No reproduction exists → gather one first; `understand` if necessary.
- A profile or dump needs reading → `forensics`.
- The same failure keeps returning after fixes → `unstick`.

## Modes

| Mode | Method |
|---|---|
| Bisect | narrow by commit, input or configuration |
| Instrument | logs, traces, assertions at boundaries |
| Differential | working vs failing environment, one variable at a time |

`rigor: rigid` — reproduce before changing code, and confirm the cause before
fixing. Steps 1 and 3 are load-bearing.

## Steps

1. **Reproduce in one command** and record it with its failure output.
   Artifact: repro command and log.
2. **State the smallest difference** between working and failing (input,
   version, flag, data). Artifact: difference list.
3. **Form one hypothesis with a prediction** ("if the cache key omits tenant,
   two tenants collide; adding tenant makes the repro pass"). Artifact:
   hypothesis + prediction.
4. **Test the prediction cheaply**, one variable at a time. Artifact: result.
5. **Explain the full symptom** with the cause; a partial explanation means a
   second cause. Artifact: cause statement.
6. **Write the failing test from step 1**, fix under `tdd`, re-run the repro.
   Artifact: test and green run.
7. **Record the cause** in the commit message and the delivery. Artifact:
   evidence line.

## Output

Repro command, cause statement, the test that captures it, and the fix. The
commit message names the cause, not the symptom.

## Failure

- **Cannot reproduce.** Stop and say what you need: data, environment, timing.
  Debugging an unreproduced report produces churn.
- **The hypothesis is wrong.** Say so, record what it rules out, form the next
  one. Ruled-out causes are progress.
- **The cause is external** (dependency, platform). Record the version and the
  evidence; fix by containment and open the upstream report.
- **The fix works but the explanation does not.** Keep digging; an unexplained
  fix will regress.

## Rationalizations

| Excuse | Reality |
|---|---|
| "I know what it is, let me just fix it." | Then the repro is quick and the fix is proven. Otherwise it is a guess. |
| "It only happens in production." | Then production data or conditions are part of the cause. Model them. |
| "Adding logs is slower than reading code." | Reading code finds plausible causes, not the actual one. |
| "The fix works, the cause can wait." | It will return, and next time with less context. |

## Tracking

- **OpenChamber present:** `focus_status` "implementing"; the cause goes on the
  delivery note so the panel shows why the change exists.
- **OpenCode or files:** repro log under `.vstack/deliveries/<id>/`.
- Ladder: `resources/tracking.md`.
- **vstack adapter present:** `vstack_evidence` records the cause and the
  green run; otherwise `evidence.jsonl` next to the repro log.
