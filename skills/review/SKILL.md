---
name: review
description: Use when a diff, design or document must be examined for defects before it is accepted, and findings must be specific enough to act on; not for judging a whole repository (audit) or for running the gates (verify).
tier: review
rigor: standard
status: stable
pairs-with: [rubrics, verify, ready]
---

# review

Read the change as a stranger who must maintain it. Findings carry a location, a
consequence and a smallest fix. Taste without a consequence is not a finding.

## When to use

- A branch is ready for merge and needs a second reader.
- A design or plan must be accepted before work starts.
- Someone asks "does this look right?" with a diff attached.
- A previous review produced opinions and the author is stuck.
- A skill, playbook or principle changes.

Near misses:

- The question is whether the whole repo is sound → `audit`.
- The gates must be run → `verify`.
- The question is readiness to ship → `ready` after review.

## Modes

| Mode | Depth |
|---|---|
| Diff | correctness, tests, boundaries in one pass |
| Design | boundaries, failure modes, alternatives |
| Pack | standard compliance, trigger quality, references |

## Steps

1. **Read the stated intent first** — the delivery's outcome and done
   predicate. Artifact: quoted intent.
2. **Read the diff, not only the summary.** Note files skipped. Artifact: files
   reviewed.
3. **Check the three questions:** does it do what it claims, does it break what
   it touches, can the next person change it? Artifact: answers with evidence.
4. **Write findings** with location, consequence and smallest fix; severity
   high/medium/low, one entry per `templates/review-finding.md`. Artifact:
   findings table.
5. **Verify each high finding** by running or reading the cited line; drop the
   ones you cannot substantiate. Artifact: confirmed list.
6. **State what was not reviewed** — generated files, vendor code, areas out
   of scope. Artifact: coverage note.
7. **Hand to `ready` or back to the author.** Artifact: verdict.

## Output

| Severity | Location | Consequence | Fix |
|---|---|---|---|
| high | `src/auth.ts:88` | session survives logout | delete row on revoke |
| low | `README.md:12` | stale command | regenerate |

Verdict: approve, approve with findings, or request changes.

## Failure

- **The diff is too large to review.** Ask for it split; reviewing 2000 lines
  produces approval, not review.
- **A finding is disputed.** Keep the location and the consequence; let the
  author rebut with evidence, not preference.
- **The intent is unclear.** Stop; review against a stated done predicate or it
  becomes a style debate.

## Rationalizations

| Excuse | Reality |
|---|---|
| "Tests pass, so it is fine." | Tests prove what they assert, not what the diff forgot. |
| "I skimmed it." | Then say which files were skimmed; silence implies coverage. |
| "This is a nit, I will not mention it." | Nits with consequences are findings; nits without are noise. |
| "The author knows the codebase." | The next maintainer does not. |

## Tracking

- **OpenChamber present:** findings on the delivery note; request-changes
  verdict sets `focus_status` back to implementing.
- **OpenCode or files:** `docs/deliveries/<id>.md` under "Review".
- Ladder: `resources/tracking.md`.
