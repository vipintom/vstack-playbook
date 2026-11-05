---
name: skill-eval
description: Evaluate skill trigger accuracy, procedure quality, outputs and failure handling through scenario-based testing
lifecycle: draft
---

# skill-eval

## Purpose / Outcome

Evaluates skill quality through static validation, behavioural scenario testing (trigger accuracy, procedure quality, failure handling, harness fallbacks), cross-harness evaluation, and regression evaluation.

---

## When to Use (Positive Triggers)

- Before promoting a skill to Stable
- After modifying a skill's trigger, procedure, output, safety rule, or stop condition
- When adding a new skill to the playbook
- Periodic regression evaluation of Stable skills

---

## When Not to Use (Negative Triggers)

- For skills in Draft state (use informal testing)
- For one-off procedure validation

---

## Required Context / Inputs

- Skill under evaluation
- Evaluation fixtures and scenarios
- Access to supported harnesses for cross-harness testing

---

## Preconditions

- Skill has valid frontmatter and all contract sections
- Static validation passes
- Evaluation fixtures available for the skill's domain

---

## Procedure

1. **Static validation: run validator, verify structure, check for unbounded loops and proprietary APIs**
   - **Action:** Run `pnpm --filter @vstack/playbook validate`; verify frontmatter, required sections, unique IDs, link resolution; check for unbounded loops, missing stop/escalation conditions; verify no proprietary OpenCode APIs
   - **Evidence:** Validator output (0 errors), frontmatter valid, all links resolve
   - **Decision:** If validation fails → BLOCKED until fixed

2. **Behavioural scenario testing: trigger accuracy, procedure quality, failure handling, harness fallbacks**
   - **Action:** Run positive trigger cases, negative trigger cases, edge cases; verify steps actionable with expected outputs, evidence requirements met, stop conditions fire; test retry bounds, escalation thresholds, fallback behaviour; test subagents/worktrees/plugin fallbacks
   - **Evidence:** Per-scenario PASS/FAIL, trigger accuracy metrics, procedure quality evidence, fallback documentation
   - **Decision:** If any Tier 1 scenario FAIL → BLOCKED until fixed

3. **Cross-harness evaluation: install and test in OpenCode, Codex, Claude Code**
   - **Action:** Install skill via Skills CLI in clean profiles; verify loads, invokes, produces expected outputs; test selective installation
   - **Evidence:** Per-harness load/invoke/output results, selective install test
   - **Decision:** If primary harness fails → BLOCKED; if secondary fails → document gap

4. **Regression evaluation: compare with baseline, identify regressions/false positives, update status**
   - **Action:** Compare current results with previous baseline; identify regressions and false positives; update evaluation status and changelog
   - **Evidence:** Regression comparison report, updated status/changelog
   - **Decision:** If regression in Stable skill → BLOCK release, investigate

5. **Record results: store with full provenance in evals/results/**
   - **Action:** Write JSON with scenario ID, fixture version, model/harness/version, date, prompts, actual evidence, deterministic PASS/FAIL, qualitative rubric scores, evaluator, limitations
   - **Evidence:** Result file with complete provenance
   - **Decision:** If recording fails → BLOCKED

---

## Expected Outputs

- Evaluation report with deterministic PASS/FAIL for each scenario
- Qualitative assessment with rubric scores
- Regression comparison with previous version
- Updated skill evaluation status (Draft/Experimental/Stable/Deprecated)

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- All Tier 1 (deterministic) assertions PASS
- Tier 2 (qualitative) assessments documented
- No regressions from previous evaluation
- Results stored with full provenance

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Critical regression in Stable skill | Block release, investigate |
| Missing evaluation fixtures | Create fixtures before evaluation |
| Harness capability gap | Document in compatibility matrix |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- All required scenarios executed
- Results recorded with evidence
- Skill status updated

---

## Escalation

- Critical regression in Stable skill → block release, investigate
- Missing evaluation fixtures → create fixtures before evaluation
- Harness capability gap → document in compatibility matrix

---

## Fallback

- Without automated evaluation: human-reviewed rubric assessment
- Without cross-harness: test primary harness, document gaps

---

## Examples

### Example: Evaluating debug Skill

**Context:** New debugging skill written, needs evaluation before Stable promotion.

**Execution:**
1. Static validation: 0 errors, 3 warnings (procedure format)
2. Trigger accuracy: 8/8 positive cases PASS, 6/6 negative cases PASS, 3/3 edge cases PASS
3. Procedure quality: 16/16 steps actionable, 16/16 evidence requirements met, 4/4 stop conditions fire
4. Failure handling: 3/3 retry bounds respected, 2/2 escalation thresholds correct, 3/3 fallbacks work
5. Cross-harness: OpenCode PASS, Codex PASS, selective install PASS
6. Regression: No regressions from v1 baseline
7. Results recorded: evals/results/debug-...json

**Outcome:** All Tier 1 PASS, Tier 2 scores documented, promoted to Stable

---

## Skill / Role / Tool Routing

- **Skills invoked:** skill-authoring (structure validation), review (content review)
- **Roles:** Evaluator (executes), Lead (status update)
- **Tools:** Validator, harness CLI, evaluation fixtures
- **References:** evals/ fixtures and rubrics

---

## Dependencies / References

- **Principles:** Evidence Before Completion, Loops Are First-Class, Independent Challenge, Degrade Gracefully
- **Skills:** skill-authoring (structure validation), review (content review)
- **Tools:** Validator (`tools/validate.js`), harness CLIs, evaluation fixtures
- **References:** evals/ fixtures and rubrics, playbook/evaluations/regression-policy.md

---

## Skill Lifecycle

- State: Draft → Experimental → Stable → Deprecated
- Owner: Playbook maintainer
- Evaluation: Required for Stable promotion; re-run on any contract change

