---
name: red-team
description: Use when a design or change needs an adversary that tries to break it before users or attackers do; not for checking it meets its spec (review) or for running the gates (verify).
tier: design
rigor: standard
status: stable
harness: [knowledge]
pairs-with: [design, audit, verify]
---

# red-team

Attack the change on purpose. A finding survives only with a reproduction:
a command, a request, an input, a sequence that shows the failure.

## When to use

- Deep tier, security, money, personal data or a public interface.
- A design looks clean and everyone agrees too quickly.
- A change introduces a boundary, a parser, a retry or a permission check.
- Before a release that cannot be rolled back.
- After an incident, to find the sibling bug.

Near misses:

- The question is whether the code meets its spec → `review`.
- The gates must be run → `verify`.
- The concern is performance under load → `performance`.

## Modes

| Mode | Attack surfaces |
|---|---|
| Focused | one boundary: auth, input, retry |
| Broad | design plus implementation plus operations |
| Post-incident | the failed path and everything shaped like it |

## Steps

1. **List the claims the change makes** ("only owners can read", "retries are
   safe", "input is bounded"). Artifact: claim list.
2. **For each claim, write the attack**: the input, sequence or condition that
   would falsify it. Artifact: attack list.
3. **Try the cheapest attack first**, in a scratch branch or fixture. Artifact:
   reproduction per finding.
4. **Record findings in severity order** with impact, reproduction and the
   smallest fix. Artifact: findings table.
5. **Separate confirmed from suspected.** Suspected goes in the report with
   what would confirm it; never inflate it to confirmed. Artifact: confidence
   column.
6. **Re-run the reproduction after the fix.** Artifact: before/after results.

## Output

| Severity | Claim broken | Reproduction | Fix |
|---|---|---|---|
| high | "only owners can read" | `GET /orders/9` as user 3 returns 200 | check owner in `orders.get` |
| medium | "retries are safe" | duplicate POST creates two charges | idempotency key |

## Failure

- **No attack lands.** Say so and list what was tried; a clean red-team is a
  result, not a failure.
- **An attack needs production data.** Stop; propose a fixture that models it.
- **A finding is disputed.** Keep the reproduction; whoever disagrees runs it.

## Rationalizations

| Excuse | Reality |
|---|---|
| "The author already thought about this." | Then the attacks are quick to write and quicker to dismiss. |
| "Our users are trusted." | Errors, not attackers, cause most incidents. |
| "A finding without reproduction is still a concern." | It is a hypothesis; label it and move on. |
| "Security is a separate team." | They will find it after release at ten times the cost. |

## Tracking

- **OpenChamber present:** findings on the delivery note; high severity also
  as a project note so it is not lost in the thread.
- **OpenCode or files:** `docs/deliveries/<id>.md` under "Red team".
- Ladder: `resources/tracking.md`.
