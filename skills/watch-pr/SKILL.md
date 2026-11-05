---
name: watch-pr
description: Use when a change is published and CI, review comments or a rollout must be observed until a definite outcome; not for performing the merge (ship) or for re-verifying after local changes (verify).
---

# watch-pr

Observe until there is an outcome. Do not poll in a loop, do not guess from a
half-finished pipeline, and do not call a flaky job green.

## When to use

- A pull request is open and checks or reviews are pending.
- A deployment is rolling out and needs observation.
- A release job must be confirmed before announcing.
- A reviewer left comments that must be addressed and rechecked.
- A failure appeared and its cause is not yet known.

Near misses:

- The merge is still to be performed → `ship`.
- Local changes need checking → `verify`.
- The rollout failed and state must be restored → `recovery`.

## Steps

1. **Record what is being watched and the success condition.** Artifact:
   `watch target`.
2. **Subscribe rather than poll** where the harness supports it; otherwise set
   a bounded schedule and stop when it ends. Artifact: watch link or schedule.
3. **On failure, read the failing job's log** before changing code. Artifact:
   failing step and message.
4. **Classify the failure:** caused by the change, pre-existing, or
   infrastructure. Artifact: classification with evidence.
5. **Fix caused failures under `tdd`; re-run the specific job** before the
   whole pipeline. Artifact: new run.
6. **Report the outcome** with the final state and links. Artifact: delivery
   note update.

## Output

The final state — merged, deployed, failed with cause, or still pending with
the exact condition that will end the watch. No "should be fine".

## Failure

- **A check is flaky.** Before calling it flake, check the base is current
  (`git merge-base --is-ancestor origin/main HEAD`). A stale base or an
  identical second failure is a real failure; rerun once and record both.
- **The watch has no end condition.** Set a deadline and report what is still
  pending at it.
- **The pipeline is red for unrelated reasons.** Name the pre-existing failure
  and its evidence; do not "fix" it inside this change.
