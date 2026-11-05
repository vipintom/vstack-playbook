# Workflow: Visual Parity

## Trigger & Suitability
- UI change requiring visual verification (design system, component library, redesign)
- Cross-browser/device consistency validation
- Regression detection for visual changes
- Accessibility visual validation (contrast, focus states, zoom)
- Not for functional testing (use `feature-delivery` / `bug-fixing`)
- Risk: medium (visual regressions affect user trust)

## Roles & Responsibilities

| Phase | Lead | Builder | Reviewer |
|---|---|---|---|
| Sharpen | Owns | — | — |
| Baseline | Coordinates | Executes | — |
| Implement | Coordinates | Executes | — |
| Compare | Validates | Runs | Challenges |
| Review | Requests | Provides | Owns (visual) |
| Complete | Validates | — | Confirms |

## Skill Sequence

### 1. Sharpen (`vstack-sharpen`, `vstack-design-audit`)
- Define: target components, pages, viewports, browsers, devices
- Identify: design tokens, component library, Figma/spec reference
- Define acceptance: pixel tolerance, content tolerance, motion tolerance
- **Required:** Always — visual parity needs explicit criteria

### 2. Baseline (`vstack-visual-parity`, `vstack-create-verification`)
- `vstack-visual-parity` — capture baseline screenshots:
  - All target states (default, hover, focus, disabled, loading, error)
  - All viewports (mobile, tablet, desktop, wide)
  - All browsers (Chrome, Firefox, Safari, Edge)
  - All themes (light, dark, high-contrast)
- `vstack-create-verification` — define comparison config (thresholds, ignore regions)
- **Required:** Baseline committed/versioned

### 3. Implementation (`vstack-incremental-build`, `vstack-tdd`)
- Implement UI changes per `feature-delivery` or `bug-fixing`
- `vstack-tdd` — visual tests as part of test suite
- Component stories updated (Storybook, etc.)

### 4. Comparison (`vstack-visual-parity`, `vstack-verify-loop`)
- `vstack-visual-parity` — run comparison:
  - New screenshots vs baseline
  - Per-component, per-viewport, per-browser, per-theme
  - Generate diff images, highlight changes
- `vstack-verify-loop` — evaluate results:
  - **Intentional changes:** Approve, update baseline
  - **Unintentional changes:** Fail, require fix
  - **Flaky:** Quarantine, investigate

### 5. Review (`vstack-review-loop`, `vstack-design-audit`)
- **Visual review:** Designer/stakeholder approves intentional changes
- `vstack-design-audit` — accessibility lens: contrast, focus, motion, zoom
- **Required:** For design system changes, redesigns

### 6. Complete
- Baseline updated for intentional changes
- All unintentional changes fixed
- `vstack-lessons` — visual testing patterns

## Risk Adaptation

| Risk | Viewports | Browsers | Review |
|---|---|---|---|
| Low (internal tool) | 2 | 1 | Quick |
| Medium (user-facing) | 4 | 2 | Standard |
| High (design system, public) | 6+ | 4 | Full + designer |

## Parallel Work
- Independent components → parallel capture/compare
- Viewports/browsers → parallel (CI matrix)
- Lead coordinates baseline updates

## Without Plugin
- Manual Storybook + Chromatic / Percy / Playwright visual testing
- Baseline in version control
- Diff review in PR

## With Plugin
- `vstack_delivery` type: visual-parity
- `vstack_task` per component/viewport
- `vstack_visual_parity` captures, compares, diffs
- `vstack_check` records visual test results
- `vstack_memory` persists baselines, diffs
- `vstack_agent` for parallel browser/viewport execution