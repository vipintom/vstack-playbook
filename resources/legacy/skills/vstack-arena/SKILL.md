---
name: vstack-arena
description: Parallel candidate generation, cross-judgment, base selection, grafting. Produces ONE synthesized artifact from N parallel candidates
lifecycle: draft
---

# vstack-arena

## Purpose / Outcome

Runs a design or code bakeoff: spawns N parallel candidates, cross-judges them against a rubric, picks a base, grafts the strongest parts of losers into it, verifies the synthesized artifact. Returns the synthesized artifact + synthesis note.

---

## When to Use (Positive Triggers)

- "Arena this" / "Throw it in the arena"
- Design or code bakeoff needed
- When one attempt would lock in wrong shape
- Explicit user request for parallel candidates
- Invoked by design for design alternatives

---

## When Not to Use (Negative Triggers)

- Straightforward implementation (no alternatives) → skip
- Single clear approach → skip
- Coverage matrices / races / exploration → vstack-swarm
- Adversarial review → red-team
- Prototype comparison only → vstack-best-of-n (special case)

---

## Required Context / Inputs

- Clear artifact specification (what each candidate produces)
- 3-6 gradeable rubric criteria (defined upfront, candidates don't see rubric)
- Runner model capabilities: judgment model + fast model from different families
- Isolation mechanism for candidates (worktree or directory)
- Cross-judge from different model family than runners

---

## Preconditions

- Artifact and rubric defined before spawning
- Host supports parallel agent dispatch with isolation
- Host provides model capability tiers (judgment, fast, cross-judge)

---

## Procedure

### Phase A: Frame

1. **State the artifact** each candidate produces (file, interface, component, etc.)
2. **Derive the rubric** — 3-6 concrete, gradeable criteria for success on THIS task
   - Criteria must be specific enough for cross-judge to score
   - Candidates do NOT see the rubric (prevents gaming)
3. **Pick the runners** — at minimum: one judgment model, one fast model, from DIFFERENT families
   - Families: claude-*, grok-*, gpt-*, gemini-*, etc.
   - If host config missing: default to available distinct families
4. **Isolation** — each candidate gets own workspace (worktree preferred, directory fallback)

### Phase B: Fan Out

- Spawn all N candidates in ONE message (parallel dispatch)
- Each candidate receives: task only (artifact spec, no rubric)
- Each candidate writes to own output path in isolation
- Run in background (harness-dependent)

### Phase C: Cross-Judge

- Spawn cross-judge from DIFFERENT model family than any runner
- Cross-judge receives: all candidate outputs, rubric, task
- Cross-judge scores each candidate against each criterion
- Cross-judge recommends base candidate with reasoning

### Phase D: Pick Base

- **Criterion-by-criterion scoring** — compare candidates on each rubric item
- **Agreement confirms** — if cross-judge and picker agree on base, confirmed
- **Disagreement** — signals bias or rubric issue; resolve explicitly, document

### Phase E: Graft

- Walk each loser for 1-2 specific things to steal
- **Fold by hand** — not mechanical paste
- Each graft: what, from which loser, why it improves base
- Rejects documented with reason

### Phase F: Verify

- **Prove-it-works** on synthesized artifact
- Run verification appropriate to artifact type (tests, typecheck, lint, manual)
- If verification fails: diagnose, iterate, or report BLOCKED

---

## Expected Outputs

- **Synthesized artifact** — the final merged result
- **Synthesis note** — base candidate, why chosen, judge verdict, grafts (what/from/why), rejections (what/why), convergence notes, verification result

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Rubric defined before candidates spawn (candidates don't see it)
- Runners from different model families
- Cross-judge from different family than runners
- Criterion-by-criterion base selection
- Grafts are specific (not mechanical paste)
- Verification runs on synthesized artifact
- Synthesis note complete

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| <2 distinct candidates | Re-frame task, clearer rubric, re-run |
| Cross-judge unavailable | Use available; note limitation in synthesis note |
| Verification fails on synthesized | Diagnose: if graft caused failure, revert that graft; if base flawed, re-run arena |
| Isolation not available | Directory isolation fallback; document |
| Host cannot dispatch parallel | Sequential fallback; document |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Synthesized artifact produced
- Verification passes
- Synthesis note complete

---

## Escalation

- User decision required: rubric ambiguity, base disagreement
- Lead decision required: fundamental design conflict

---

## Skill / Role / Tool Routing

- **Skills invoked:** verify (Phase F)
- **Roles:** Runners (generate candidates), Cross-judge (scores), Picker (selects base, grafts)
- **Tools:** Host parallel dispatch, isolation, model capability tiers
- **References:** None bundled (rubric is task-specific)

---

## Examples

### Example: API Design Bakeoff

**Task:** Design the UserPreferences API

**Frame:**
- Artifact: OpenAPI spec + handler signatures
- Rubric: 1) REST conventions, 2) Extensibility, 3) Type safety, 4) Migration path, 5) Documentation clarity
- Runners: claude (judgment), grok (fast)
- Isolation: worktrees

**Fan out:** 2 candidates produce specs

**Cross-judge:** gpt scores, recommends candidate 1 (better extensibility)

**Pick base:** Candidate 1 confirmed

**Graft:** Steal validation patterns from candidate 2

**Verify:** Typecheck + lint pass

---

## Dependencies / References

- **Principles:** Harness Independence, Procedures Over Vague, Prove It Works
- **Skills:** verify
- **References:** None (rubric is task-specific)

---

## Migration Record

- **Previous name/path:** skills/vstack-arena/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Frame → Fan out → Cross-judge → Pick → Graft → Verify, rubric hidden from candidates, cross-judge from different family, grafting not mechanical paste
- **Procedures rewritten:** Explicit rubric criteria count, model family separation, criterion-by-criterion scoring, verification on synthesized artifact, synthesis note format
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-arena.md