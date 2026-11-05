---
name: audit
description: Use when an existing design, implementation or repository must be judged against stated quality attributes with evidence, rather than reviewed as a diff; not for reviewing a change (review) or for improving a measured metric (performance).
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
