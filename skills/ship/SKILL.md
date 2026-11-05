---
name: ship
description: Use when a readiness decision is made and the change must be published — merge, tag, release, deploy — with the record written as part of the act; not for deciding readiness (ready) or for watching the result afterwards (watch-pr).
---

# ship

Publish exactly what was verified. The shipped commit is named before the
action, and the record is written in the same step, not after.

## When to use

- `ready` returned ready and the owner asked to publish.
- A version tag, release note or deployment is due.
- A pull request is approved and must be merged.
- A hotfix must go out with a recorded reason.
- A package must be published to a registry.

Near misses:

- Readiness is undecided → `ready`.
- The result must be observed → `watch-pr`.
- The work is not complete → back to the delivery.

## Steps

1. **Name the artefact:** commit hash, tag or image digest. Artifact: `shipped`.
2. **Confirm the gate table is for that artefact**, not an earlier tree.
   Artifact: gate table reference.
3. **Run the release steps from the project's documented path**, not from
   memory. If merge is the act, confirm branch protection or the merge queue is
   in force; never bypass it to save a step. Artifact: command log.
4. **Write the record as you go**: what shipped, where, by which command, with
   links and evidence. Artifact: delivery note and evidence lines.
5. **Publish the note**: changelog or release description that states what
   changed and what to do about it. Artifact: release note.
6. **Hand to `watch-pr`** when a pipeline or rollout must be observed. Artifact:
   watch link.

## Output

`shipped <hash> to <environment> via <command>` plus the release note and the
monitoring link. A reader can tell whether what they have is what was verified.

## Failure

- **The tree changed after verification.** Stop and re-`verify`; never ship an
  unverified delta.
- **The release step fails halfway.** Record the state, do not retry blindly;
  follow the rollback from the delivery's rollout plan.
- **The owner asks to skip the record.** Ship, then write it immediately in the
  same session; an unrecorded ship becomes an unexplained incident.
