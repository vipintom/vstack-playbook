# Evaluation Scenario: skill-authoring

**Skill:** skill-authoring
**Lifecycle:** draft
**Evaluation Date:** 2026-11-02
**Evaluator:** Phase 5 automated

---

## Scenario 1: Sharpen Phase (Tier 1 - Deterministic)

**Objective:** Verify skill purpose, trigger, scope, change type identified.

**Input:**
```
Request: "Create skill for database migration planning"
```

**Expected Behavior:**
- Defines purpose: plan migrations
- Defines triggers: "migrate db"
- Defines non-triggers: "run migration"
- Identifies ownership boundaries
- Distinguishes from adjacent skills

**Acceptance Criteria:**
- [ ] Purpose defined
- [ ] Triggers defined
- [ ] Non-triggers defined
- [ ] Ownership boundaries identified
- [ ] Distinguished from adjacent

---

## Scenario 2: External Research (Tier 1 - Deterministic)

**Objective:** Verify mandatory external research for new skills.

**Input:**
```
New skill: database migration planning
```

**Expected Research:**
- Cursor pstack analogue (primary)
- At least 1 independent pack (superpowers, deepseek-stack, Anthropic, t3dotgg/tstack, TStack)
- Research record in docs/research/records/<skill-id>.md
- Source URLs, commits, dates, key findings
- Patterns adopted/rejected with rationale
- Host-specific mechanics rejected
- Overlap implications for neighbouring skills
- Licence/attribution checked

**Acceptance Criteria:**
- [ ] Cursor pstack analogue researched
- [ ] 1+ independent pack researched
- [ ] Research record created
- [ ] Patterns adopted/rejected documented
- [ ] Host-specific rejected
- [ ] Overlap implications analyzed
- [ ] Licence checked

---

## Scenario 3: Author to v2 Template (Tier 1 - Deterministic)

**Objective:** Verify all required v2 template sections written.

**Required Sections:**
- Frontmatter (name, description, lifecycle)
- Purpose / Outcome
- When to Use (Positive Triggers)
- When Not to Use (Negative Triggers)
- Required Context / Inputs
- Preconditions
- Procedure (with Action/Evidence/Decision/Skill routing/Principle/Role)
- Expected Outputs
- Verification
- Failure Handling
- Stop Conditions
- Escalation
- Skill / Role / Tool Routing
- Examples
- Dependencies / References
- Migration Record

**Acceptance Criteria:**
- [ ] All 16 sections present
- [ ] N/A with explicit reason if not applicable
- [ ] Progressive disclosure (main file focused, refs in references/)

---

## Scenario 4: Static Validation (Tier 1 - Deterministic)

**Objective:** Verify validation script passes.

**Input:**
```
New skill written
```

**Expected Behavior:**
- Runs: node playbook/scripts/validate-content.js
- Checks: frontmatter, required sections, links resolve, no proprietary APIs
- Fixes all errors before proceeding

**Acceptance Criteria:**
- [ ] Validation runs
- [ ] 0 errors
- [ ] All links resolve
- [ ] No proprietary APIs

---

## Scenario 5: Evaluation (Tier 1 - Deterministic)

**Objective:** Verify evaluation scenarios pass.

**Required Evaluations:**
- Trigger precision: positive triggers fire, negative block
- Procedure fidelity: steps produce expected outputs, decisions route
- Cross-harness install test: OpenCode (live), Codex, Claude Code
- Regression check: existing behaviors preserved or intentionally changed

**Acceptance Criteria:**
- [ ] Trigger precision passes
- [ ] Procedure fidelity passes
- [ ] Cross-harness install works
- [ ] Regression check clean

---

## Scenario 5: Review (Tier 1 - Deterministic)

**Objective:** Verify independent review passed.

**Review Checks:**
- Contract compliance (all sections, format)
- Trigger accuracy (precision/recall on test cases)
- Fallback completeness (host capability fallbacks)
- Independent reviewer (not author)

**Acceptance Criteria:**
- [ ] Contract compliance
- [ ] Trigger accuracy
- [ ] Fallback completeness
- [ ] Independent reviewer

---

## Scenario 6: Release - Lifecycle Gates (Tier 1 - Deterministic)

**Objective:** Verify lifecycle gate enforcement.

**Lifecycle Gates:**
- Draft: Written, static validation passed
- Experimental: Evaluation scenarios pass, 1+ harness tested
- Stable: Cross-harness validated, review passed, regression clean
- Deprecated: Replacement defined, migration tested, removal target

**Expected Behavior:**
- Cannot promote without meeting gate criteria
- Records status changes

**Acceptance Criteria:**
- [ ] Gates enforced
- [ ] Status changes recorded

---

## Scenario 7: Maintain - Regression Evaluation (Tier 1 - Deterministic)

**Objective:** Verify regression eval on changes.

**Input:**
```
Skill updated: added new trigger
```

**Expected Behavior:**
- Runs regression eval
- Fixes regression or documents intentional change

**Acceptance Criteria:**
- [ ] Regression eval runs
- [ ] Fixes or documents change

---

## Scenario 8: Maintain - Deprecation with Migration (Tier 1 - Deterministic)

**Objective:** Verify deprecation with migration path.

**Input:**
```
Skill deprecated: vstack-old-skill
```

**Expected Behavior:**
- Replacement defined
- Migration tested
- Removal target set
- Documents deprecation

**Acceptance Criteria:**
- [ ] Replacement defined
- [ ] Migration tested
- [ ] Removal target set
- [ ] Deprecation documented

---

## Evaluation Results

| Scenario | Tier | Result | Notes |
|----------|------|--------|-------|
| 1. Sharpen | 1 |  |  |
| 2. External Research | 1 |  |  |
| 3. Author to Template | 1 |  |  |
| 4. Static Validation | 1 |  |  |
| 5. Evaluation | 1 |  |  |
| 5. Review | 1 |  |  |
| 6. Lifecycle Gates | 1 |  |  |
| 7. Regression Eval | 1 |  |  |
| 8. Deprecation Migration | 1 |  |  |

**Overall Status:** 
- Tier 1: ___/9 PASS
- **Skill Status:** ___