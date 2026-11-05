# Workflow: PR Preparation

## Trigger & Suitability
- Delivery complete, ready for code review and merge
- Need to prepare PR with description, tests, evidence, reviewers
- Not for drafting PR during development (that's part of implementation workflow)
- Risk: low (process step)

## Roles & Responsibilities

| Phase | Lead | Builder | Reviewer |
|---|---|---|---|
| Sharpen | Owns | — | — |
| Prepare | Coordinates | Executes | — |
| Review | Requests | Provides | Owns |
| Complete | Validates | — | Confirms |

## Skill Sequence

### 1. Sharpen (`vstack-sharpen`)
- Confirm: all acceptance criteria met, evidence recorded
- Identify: target branch, required reviewers, labels
- **Required:** Delivery complete per `evidence-before-completion`

### 2. Prepare (`vstack-pr`, `vstack-ready`, `vstack-lessons`)
- `vstack-pr` — create PR with:
  - Title: conventional commit format
  - Description: what, why, how tested, evidence links
  - Checklist: criteria, tests, docs, migration notes
  - Linked issues/deliveries
- `vstack-ready` — verify PR readiness:
  - All checks passing
  - No merge conflicts
  - Description complete
  - Reviewers assigned
- `vstack-lessons` — attach relevant lessons if applicable

### 3. Review Setup (`vstack-review-loop`)
- Request review with specific lenses based on risk
- Provide context: design doc, ADR, test plan
- **Required:** Reviewers have access to evidence

### 4. Complete
- PR approved, checks passing, merged
- Delivery marked complete
- `vstack-lessons` — capture PR patterns

## Risk Adaptation

| Risk | PR Description | Reviewers | Checks |
|---|---|---|---|
| Low | Standard | 1 | Required only |
| Medium | Full + test evidence | 2-3 | Required + optional |
| High | Full + ADR link + blast radius | 3+ + domain expert | All + manual verification |

## Parallel Work
- N/A — sequential process

## Without Plugin
- Manual PR creation via GitHub/GitLab UI
- Checklist in PR description
- Review assignment manual

## With Plugin
- `vstack_delivery` type: pr-prep (sub-delivery)
- `vstack_pr` creates/updates PR
- `vstack_ready` validates readiness
- `vstack_check` links evidence to PR
- `vstack_review_loop` tracks review progress