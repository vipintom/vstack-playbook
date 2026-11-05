---
name: visual-parity
description: Verify UI behaviour and visual appearance against a defined reference
lifecycle: draft
---

# visual-parity

## Purpose / Outcome

Executes visual regression testing by defining references, running visual tests, analyzing differences, classifying changes, and updating or fixing.

---

## When to Use (Positive Triggers)

- For UI changes (web, mobile, desktop)
- When visual regression testing needed
- When design system compliance required

---

## When Not to Use (Negative Triggers)

- For non-UI changes
- Without defined visual reference

---

## Required Context / Inputs

- Visual reference (screenshots, design specs, Storybook)
- Browser/device automation (Playwright, Cypress, etc.)
- Test environment

---

## Preconditions

- Reference images/specs available
- Automation configured

---

## Procedure

### Step 1: Define Reference

- Baseline screenshots (approved)
- Design specifications (Figma, Storybook)
- Acceptance criteria (pixel tolerance, content)

### Step 2: Run Visual Tests

- Navigate to target states
- Capture screenshots
- Compare against reference

### Step 3: Analyze Differences

- Pixel diff (tolerance-based)
- Layout shift detection
- Content verification

### Step 4: Classify Differences

- Intentional (design change) → update reference
- Regression → fix
- Flaky (dynamic content) → mask or stabilize

### Step 5: Update or Fix

- Intentional: approve new baseline
- Regression: fix code, re-run
- Flaky: improve test stability

---

## Expected Outputs

- Visual test results (pass/fail/diff)
- Updated baselines (for intentional changes)
- Fixed regressions

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- No unintended visual differences
- Intentional changes approved
- Tests stable (low flake)

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Reference outdated | Update with design approval |
| Flaky tests | Improve or document |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- All visual tests pass
- Time-boxed (default: per CI run)

---

## Escalation

- Reference outdated → update with design approval
- Flaky tests → improve or document

---

## Fallback

- Without automation: manual visual review with checklist

---

## Skill / Role / Tool Routing

- **Skills invoked:** verify (verification discipline), verify-setup (project setup), verify-maintain (reference updates)
- **Roles:** Builder (executes), Lead (approves baselines)
- **Tools:** Visual testing automation, design specs
- **References:** None

---

## Examples

### Example: Button Component Update

**Reference:** Approved button screenshots
**Change:** Border radius 4px → 8px
**Test:** Pixel diff shows intentional change
**Action:** Approve new baseline, update reference

---

## Dependencies / References

- **Principles:** Prove It Works, Evidence Before Assertions, Smallest Complete Change
- **Skills:** verify, verify-setup, verify-maintain
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/visual-parity/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 5-step procedure, reference definition, visual test execution, difference classification, baseline update
- **Procedures rewritten:** Explicit step structure, tolerance-based diff, flaky handling, fallback
- **Disposition:** rewrite
- **Research record:** docs/research/records/visual-parity.md