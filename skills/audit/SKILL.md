---
name: audit
description: Use when an existing design, implementation or repository must be judged against stated quality attributes with evidence, rather than reviewed as a diff; not for reviewing a change (review) or for improving a measured metric (performance).
tier: design
rigor: standard
status: stable
harness: [knowledge, panel, todo]
pairs-with: [rubrics, review, impact]
---

# audit

Judge what exists, not what was intended. Every finding names a file and line,
a reproduction where possible, and a severity. Withdraw claims you cannot
support.

## When to use

- Taking over a codebase and needing a truthful baseline.
- Deciding whether to extend, refactor or replace a subsystem.
- A release claim needs checking against the code.
- Security, licensing or dependency posture must be assessed.
- A previous audit's findings need re-verification.

Near misses:

- The object is an unmerged diff → `review`.
- The goal is a faster number → `performance`.
- The goal is to understand behaviour → `code-tour`.

## Modes

| Mode | Scope |
|---|---|
| Targeted | one attribute across the repository |
| Full | correctness, security, maintainability, tests, packaging |
| Claim check | verify published claims against reality |

## Steps

1. **Write the attributes and their tests** before reading code. Artifact:
   attribute list.
2. **Gather ground truth:** build, tests, type check, dependency audit, entry
   points. Record failures as data. Artifact: command results.
3. **Sample the code along the riskiest paths**, not uniformly. Artifact: paths
   examined with citations.
4. **Write findings with severity and evidence.** No evidence, no finding —
   demote it to a question. Artifact: findings table.
5. **Separate blockers from majors from drift.** A blocker prevents use; drift
   is documentation disagreeing with code. Artifact: ranked list.
6. **Withdraw unsupported claims** and say what would settle each. Artifact:
   withdrawn list.
7. **Record the audit** with date, scope and commit. Artifact: audit record.

## Output

A ranked findings table: id, severity, evidence (`path:line`, command output),
impact, and the smallest credible fix. Plus what was not examined.

## Failure

- **The code does not build.** That is the first finding; everything else is
  conditional on it.
- **A claim cannot be checked offline.** Mark `unverified`; do not infer.
- **The audit becomes a rewrite proposal.** Stop; that is `design`.

## Rationalizations

| Excuse | Reality |
|---|---|
| "The tests pass, so the code is sound." | Tests can bypass the failing path; check what they exercise. |
| "I reviewed the main files." | Then say which files were not reviewed; silence reads as coverage. |
| "Severity is obvious." | It is not, and the reader needs the ranking to act. |
| "One bad file means the whole repo is bad." | Audits report distribution, not impressions. |

## Tracking

- **OpenChamber present:** findings on the delivery note; blockers also as
  project todos so they are not lost.
- **OpenCode or files:** `docs/audits/<date>-<scope>.md`.
- Ladder: `resources/tracking.md`.
