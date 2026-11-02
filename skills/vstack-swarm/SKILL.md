---
name: vstack-swarm
description: Fan out N parallel workers for coverage matrices, races, gauntlets, exploration partitions. Returns ONE consolidated report
lifecycle: draft
---

# vstack-swarm

## Purpose / Outcome

Executes parallel work for coverage, races, or exploration. Returns a single consolidated report with result table, issues, gaps, and race rule outcome.

---

## When to Use (Positive Triggers)

- "Swarm this" / "Check all packages against..."
- Coverage matrices (test every package/module)
- Races (N workers on identical brief)
- Exploration partitions (divide and conquer)
- Gauntlets (stress test with variations)

---

## When Not to Use (Negative Triggers)

- Design/code bakeoffs with rubric → vstack-arena
- Adversarial review → vstack-interrogate
- Single task → feature-delivery / bug-fixing playbook
- Prototype comparison only → vstack-best-of-n (special case)

---

## Required Context / Inputs

- Done predicate (what constitutes completion)
- Shape: slices / race / mixed (declared upfront)
- Worker model capability (fast worker tier)
- Isolation per worker
- For races: race rule (first pass / rank all / best-of) declared upfront

---

## Preconditions

- Done predicate falsifiable
- Shape and race rule declared before spawn
- Host supports parallel dispatch with isolation

---

## Procedure

### Phase A: Frame

1. **State the done predicate** — what the swarm must return
2. **Choose the shape:**
   - **Slices** — partition work (e.g., one package per worker)
   - **Race** — N workers on identical brief (declare: first pass / rank all / best-of)
   - **Mixed** — combination of slices and race
3. **Pick worker model** — fast worker capability tier
4. **Isolation** — each worker gets own workspace (worktree preferred, directory fallback)

### Phase B: Fan Out

- Spawn all N workers in ONE message (parallel dispatch)
- Each worker receives its slice or the race brief
- Each worker has own writable output path
- Run in background (harness-dependent)

### Phase C: Aggregate

- Read all worker outputs
- **Drop incomplete** — missing SHAs, missing method, no output
- **Respawn once** for dropped workers (same brief, fresh isolation)
- **Track gaps** — workers that failed both attempts, missing coverage

### Phase D: Report

- **Consolidated report** with:
  - **Result table** — worker, status (PASS/ISSUES/BLOCKED), key metrics
  - **Issue one-liners** — per worker: title, command, output, severity
  - **Gaps** — missing workers, missing coverage, respawn outcomes
  - **Race rule outcome** — if race shape: winner (first pass) / ranking / best-of selection

---

## Expected Outputs

- Consolidated report (result table, issues, gaps, race rule outcome)
- Per-worker outputs preserved for inspection

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Done predicate defined and met
- Shape declared upfront
- Race rule declared for race shape
- Dropouts handled (respawn once, gaps tracked)
- Consolidated report format complete

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| All workers drop out | Report BLOCKED, investigate systemic issue |
| Race shape with no winner | Report INCONCLUSIVE, document why |
| Respawn also fails | Gap tracked, reported in consolidated report |
| Host cannot dispatch parallel | Sequential fallback; document |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Done predicate satisfied
- Consolidated report produced
- All workers completed or gaps documented

---

## Escalation

- User decision required: shape ambiguity, race rule choice
- Lead decision required: systemic worker failures

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-verify-loop (per-worker if needed)
- **Roles:** Workers (execute slices/race), Aggregator (consolidates)
- **Tools:** Host parallel dispatch, isolation
- **References:** None

---

## Examples

### Example: Test Coverage Matrix

**Task:** Run tests for all 12 packages

**Frame:**
- Done predicate: all packages tested, results captured
- Shape: slices (1 package per worker, 4 workers × 3 packages)
- Worker model: fast
- Isolation: directory per worker

**Fan out:** 4 workers × 3 packages each

**Aggregate:** 11 PASS, 1 BLOCKED (missing dep), respawn → still BLOCKED

**Report:** Result table, gap on package-7, respawn failed

### Example: Prototype Race

**Task:** Build two prototypes of markdown renderer, compare

**Frame:**
- Done predicate: both prototypes render test corpus, metrics captured
- Shape: race (2 workers, identical brief)
- Race rule: rank all (metrics: speed, accuracy, bundle size)
- Worker model: fast

**Fan out:** 2 workers build prototypes

**Aggregate:** Both complete, metrics captured

**Report:** Ranking table, winner declared

---

## Dependencies / References

- **Principles:** Harness Independence, Procedures Over Vague, Prove It Works
- **Skills:** vstack-verify-loop (optional per-worker)
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-swarm/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Frame → Fan out → Aggregate → Report, three shapes (slices/race/mixed), race rules, respawn once, gap tracking
- **Procedures rewritten:** Explicit done predicate, shape declaration, race rule upfront, consolidated report format, respawn logic
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-swarm.md