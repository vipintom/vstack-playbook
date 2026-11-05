# Regression Policy

**Date:** 2026-11-02
**Version:** 1.0
**Status:** Active

---

## Purpose

Define how regressions in skills, playbooks, and the playbook validator are detected, reported, and resolved.

---

## Scope

Applies to:
- All 53 skills in `playbook/skills/`
- All 18 playbooks in `playbook/workflows/`
- Structural validator (`playbook/scripts/validate-content.js`)
- OpenCode plugin tests
- OpenChamber build

---

## Regression Categories

### 1. Structural Regression (Validator Errors)
- **Definition:** Previously passing validator now reports errors
- **Detection:** CI run of `pnpm --filter @vstack/playbook validate`
- **Severity:** Blocker
- **Resolution:** Fix content or validator (whichever is correct)

### 2. Behavioural Regression (Evaluation Failures)
- **Definition:** Previously passing evaluation scenario now fails
- **Detection:** Evaluation suite run against skill/playbook
- **Severity:** Blocker for Stable skills, Major for Experimental
- **Resolution:** Fix skill/playbook or update evaluation (if intentional change)

### 3. Functional Regression (Plugin Tests)
- **Definition:** Previously passing OpenCode/OpenChamber tests now fail
- **Detection:** CI run of `pnpm test` in `opencode/vstack/` and `openchamber/vstack-panel/`
- **Severity:** Blocker
- **Resolution:** Fix code or test

### 4. Cross-Harness Regression
- **Definition:** Skill fails to load/invoke in Codex or Claude Code when previously worked
- **Detection:** Manual cross-harness validation per release
- **Severity:** Major
- **Resolution:** Fix adapter or skill content

---

## Detection Mechanisms

### Automated (CI/CD)
| Check | Frequency | Tool |
|-------|-----------|------|
| Structural validation | Every commit | `validate-content.js` |
| OpenCode tests | Every commit | `vitest` |
| OpenChamber build | Every commit | `bun build` |
| TypeScript typecheck | Every commit | `tsc --noEmit` |

### Manual (Release Gates)
| Check | Frequency | Responsible |
|-------|-----------|-------------|
| Behavioural evaluation | Per release | Evaluator |
| Cross-harness validation | Per release | Lead |
| Duplication audit | Per release | Evaluator |

---

## Regression Testing Protocol

### For Skill Changes
1. Run structural validator
2. Run behavioural evaluation scenarios for that skill
3. Run full OpenCode test suite
3. If Stable: run cross-harness validation (OpenCode, Codex, Claude Code)
4. If evaluation modified: run full evaluation suite to catch false positives

### For Playbook Changes
1. Run structural validator
2. Run behavioural evaluation scenarios for that playbook
3. Run full OpenCode test suite
4. Verify all skill references still resolve

### For Validator Changes
1. Run validator on all content
2. Compare warning/error counts with baseline
3. Investigate any new errors
4. Run evaluation suite to ensure behavioural checks still work

---

## Baseline Management

### Structural Baseline
- **Location:** `playbook/scripts/validate-content.js` output
- **Stored:** CI artifacts, release notes
- **Updated:** When validator intentionally changed

### Behavioural Baseline
- **Location:** `playbook/evaluations/scenarios/skills/*.md` results
- **Stored:** Evaluation reports in `evals/results/`
- **Updated:** When skill intentionally changed

### Test Baseline
- **Location:** OpenCode test results
- **Stored:** CI artifacts
- **Updated:** When tests intentionally changed

---

## Regression Response Procedure

### Blocker (Structural/Functional)
1. **Immediate:** Block merge/release
2. **Investigate:** Determine root cause (content vs tool)
3. **Fix:** Correct content or tool
4. **Verify:** All automated checks pass
5. **Document:** Record in regression log

### Major (Behavioural/Cross-Harness)
1. **Investigate:** Root cause analysis
2. **Assess:** Intentional change vs regression
3. **If regression:** Fix content
4. **If intentional:** Update evaluation/baseline, document rationale
5. **Verify:** All checks pass

### Minor (Warning Changes)
1. **Review:** New warnings introduced
2. **Assess:** Actionable vs noise
3. **Fix or suppress** with justification
4. **Verify:** No errors introduced

---

## Regression Log

| Date | Type | Component | Description | Resolution | Status |
|------|------|-----------|-------------|------------|--------|
| 2026-11-02 | Structural | resume | Missing lifecycle, sections | Documented as v1 legacy (to retire) | OPEN |
| 2026-11-02 | Structural | debugging | Missing lifecycle, sections | Documented as v1 legacy (to retire) | OPEN |
| 2026-11-02 | Structural | vstack-discovery | Missing lifecycle, sections | Documented as v1 legacy (to retire) | OPEN |
| 2026-11-02 | Structural | figure-it-out | Missing Failure Handling, Routing | Added sections | FIXED |
| 2026-11-02 | Structural | shipinciples | Step structure warnings | Documented as principle skill (different format) | OPEN |

---

## False Positive Management

### Definition
A test/evaluation failure that reflects intentional improvement, not regression.

### Handling
1. **Identify:** Change is intentional (new requirement, better approach)
2. **Update:** Evaluation scenario or validator rule
3. **Document:** Rationale in regression log
3. **Verify:** No unintended regressions introduced

### Example
- **Change:** New required section added to skill template
- **Validator:** Now warns on old skills missing section
- **Resolution:** Update old skills OR add exception for legacy
- **Decision:** Update old skills (no grandfathering per ADR-0014)

---

## Release Gate Criteria

### For Any Release
- [ ] Structural validation: 0 errors
- [ ] OpenCode tests: 100% pass
- [ ] OpenChamber build: passes
- [ ] TypeScript typecheck: passes

### For Stable Skill Promotion
- [ ] All Tier 1 evaluation scenarios PASS
- [ ] Tier 2 scenarios documented
- [ ] Cross-harness validation (OpenCode, Codex, Claude Code)
- [ ] No behavioural regressions from baseline

### For Major Version
- [ ] All Stable skills pass regression suite
- [ ] Full evaluation suite passes
- [ ] Cross-harness validation complete
- [ ] Duplication audit: 0 warnings
- [ ] Documentation updated

---

## Tools

### Structural Validator
```bash
cd playbook && node scripts/validate-content.js
```

### Evaluation Runner
```bash
# Manual per skill
# Future: automated evaluation runner
```

### Full Test Suite
```bash
cd opencode/vstack && pnpm test
cd openchamber/vstack-panel && pnpm build
```

---

## Escalation

| Severity | Escalation |
|----------|------------|
| Blocker | Lead + Evaluator immediate |
| Major | Lead next business day |
| Minor | Next release planning |

---

## Review

This policy reviewed quarterly or when:
- New evaluation category added
- New harness supported
- Validator significantly changed
- Release process changed

**Next Review:** 2027-02-02