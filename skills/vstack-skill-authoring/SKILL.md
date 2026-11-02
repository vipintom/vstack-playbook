---
name: vstack-skill-authoring
description: "Write skills to v2 contract standard: draft, static validation, external research, evaluation, lifecycle management"
lifecycle: draft
---

# vstack-skill-authoring

## Purpose / Outcome

Creates and maintains skills to v2 contract standard. Handles: draft, external research, static validation, evaluation, lifecycle (Draft → Experimental → Stable → Deprecated).

---

## When to Use (Positive Triggers)

- "Create skill for X" / "Write skill"
- "Update skill X"
- "Author skill to v2 contract"
- Skill maintenance work

---

## When Not to Use (Negative Triggers)

- "Use skill X" → direct invocation or playbook
- "Evaluate skill X" → vstack-skill-evaluation
- "How does skill X work?" → vstack-how / vstack-why

---

## Required Context / Inputs

- Skill purpose, trigger, scope
- Change type: new / update / evaluate / deprecate
- Access to v2 template and validation script
- Access to research packs (Cursor pstack + 1 independent)

---

## Preconditions

- v2 template available (playbook/resources/templates/skill-template.md)
- Validation script available (playbook/scripts/validate-content.js)
- Research packs accessible

---

## Procedure

### Step 1: Sharpen

- Define purpose, trigger, scope, change type
- Identify what this skill owns and explicitly does NOT own
- Distinguish from adjacent skills (positive + negative triggers)
- Record: skill name, purpose, triggers, non-triggers, ownership boundaries

### Step 2: External Research (New Skills)

- **Mandatory for new skills:**
  - Cursor pstack analogue (primary) — inspect SKILL.md + playbooks + rubrics
  - At least 1 independent pack (superpowers, deepseek-stack, Anthropic, t3dotgg/tstack, TStack)
  - Research record in docs/research/records/<skill-id>.md
  - Source URLs, commits, dates, key findings
- **For updates:** Research only if triggers/scope/procedure changing significantly

### Step 3: Author to v2 Template

- Write all required sections (N/A with explicit reason if not applicable):
  - Frontmatter (name, description, lifecycle)
  - Purpose / Outcome
  - When to Use (Positive Triggers)
  - When Not to Use (Negative Triggers)
  - Required Context / Inputs
  - Preconditions
  - Procedure (steps with Action/Evidence/Decision/Skill routing/Principle/Role)
  - Expected Outputs
  - Verification
  - Failure Handling
  - Stop Conditions
  - Escalation
  - Skill / Role / Tool Routing
  - Examples
  - Dependencies / References
  - Migration Record
- **Progressive disclosure:** main file focused; extended rubrics/examples → references/

### Step 4: Static Validation

- Run validation script: `node playbook/scripts/validate-content.js`
- Checks: frontmatter, required sections, links resolve, no proprietary APIs
- Fix all errors before proceeding

### Step 5: Evaluate

- **Trigger precision:** positive triggers fire correctly, negative triggers block correctly
- **Procedure fidelity:** steps produce expected outputs, decisions route correctly
- **Cross-harness install test:** OpenCode (live), Codex, Claude Code (via adapters)
- **Regression check:** existing skill behaviors preserved or intentionally changed

### Step 6: Review

- Contract compliance (all sections, format)
- Trigger accuracy (precision/recall on test cases)
- Fallback completeness (host capability fallbacks documented)
- Independent review (not the author)

### Step 7: Release (Lifecycle Gates)

- **Draft:** Written, static validation passed
- **Experimental:** Evaluation scenarios pass, at least 1 harness tested
- **Stable:** Cross-harness validated, review passed, regression eval clean
- **Deprecated:** Replacement defined, migration tested, removal target

### Step 8: Maintain

- Regression eval on changes
- Deprecation with migration path

---

## v2 Template Sections (Required)

- Frontmatter (name, description, lifecycle)
- Purpose / Outcome
- When to Use (Positive Triggers)
- When Not to Use (Negative Triggers)
- Required Context / Inputs
- Preconditions
- Procedure
- Expected Outputs
- Verification
- Failure Handling
- Stop Conditions
- Escalation
- Skill / Role / Tool Routing
- Examples
- Dependencies / References
- Migration Record

---

## External Research Requirements

- **Cursor pstack analogue** (primary) — URL, commit, date, files read
- **At least 1 independent pack** — pack name, skill, URL, commit, date, files read
- **Research record** in docs/research/records/<skill-id>.md
- **Patterns adopted/rejected** with rationale
- **Host-specific mechanics rejected** with rationale
- **Overlap implications** for neighbouring vstack skills
- **Licence/attribution** checked

---

## Lifecycle Gates (Enforced)

| Stage | Entry Criteria | Exit to Next |
|---|---|---|
| Draft | Written, static validation pass | Evaluation pass + 1 harness |
| Experimental | Eval pass, 1 harness tested | Cross-harness validated, review pass, regression clean |
| Stable | Cross-harness, review, regression | Deprecated when replacement ready |
| Deprecated | Replacement defined, migration tested | Removed after removal target |

---

## Expected Outputs

- Skill file at playbook/skills/<name>/SKILL.md
- Research record at docs/research/records/<skill-id>.md
- Evaluation results
- Validation results
- Lifecycle status

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Static validation: 0 errors
- Trigger precision: test cases pass
- Procedure fidelity: steps work as documented
- Cross-harness: install + basic invocation works
- Review: independent, contract compliance
- Lifecycle gate: criteria met before promotion

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Static validation fails | Fix errors, re-run |
| Trigger test fails | Adjust triggers, re-test |
| Cross-harness fails | Fix adapter/harness issue, re-test |
| Review finds contract gaps | Fix gaps, re-review |
| Regression eval fails | Fix regression or document intentional change |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Skill at target lifecycle stage
- All validation/evaluation/review gates passed
- Migration record complete

---

## Escalation

- User decision required: scope ambiguity, deprecation timeline
- Lead decision required: overlapping skill boundaries

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-skill-evaluation (Step 5), vstack-review-loop (Step 6), vstack-help (templates)
- **Roles:** Author (writes), Reviewer (independent review), Lead (lifecycle approval)
- **Tools:** validation script, host test commands, adapter install
- **References:** skill-template.md, design-red-flags.md, rationale-template.md

---

## Examples

### Example: New Skill Creation

**Request:** "Create skill for database migration planning"

**Execution:**
1. Sharpen: purpose = plan migrations, triggers = "migrate db", non-triggers = "run migration"
2. Research: pstack (no direct analogue), superpowers (writing-plans for structure)
3. Author: write to template, negative triggers explicit
4. Validate: 0 errors
5. Evaluate: trigger test cases, cross-harness install
6. Review: independent reviewer
7. Release: Draft → Experimental (OpenCode tested)

### Example: Skill Update

**Request:** "Update vstack-debug to handle async errors"

**Execution:**
1. Sharpen: change type = update, scope = async error handling
2. Research: not needed (triggers unchanged)
3. Author: update Procedure Phase 1, add async evidence gathering
4. Validate: 0 errors
5. Evaluate: regression check on sync errors, new async cases
6. Review: independent
7. Release: Stable (already Stable, regression clean)

---

## Dependencies / References

- **Principles:** Procedures Over Vague, Prove It Works, Encode Lessons in Structure
- **Skills:** vstack-skill-evaluation, vstack-review-loop, vstack-help
- **References:** skill-template.md, design-red-flags.md, rationale-template.md

---

## Migration Record

- **Previous name/path:** skills/vstack-skill-authoring/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** v2 template, external research mandate, static validation, lifecycle gates, progressive disclosure, migration record
- **Procedures rewritten:** Explicit sharpen step, research requirements per skill, evaluation criteria, lifecycle gate enforcement, cross-harness validation, review independence
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-skill-authoring.md