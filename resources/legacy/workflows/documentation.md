# Workflow: Documentation

## Trigger & Suitability
- New feature needs user-facing docs (README, guides, API reference)
- Existing docs outdated, incorrect, or missing
- Architecture decisions need ADR
- Onboarding/knowledge transfer documentation
- Risk: low (documentation-only changes)

## Roles & Responsibilities

| Phase | Lead | Builder | Reviewer |
|---|---|---|---|
| Sharpen | Owns | — | — |
| Discovery | Coordinates | Executes | — |
| Plan | Owns | Reviews | — |
| Write | Coordinates | Executes | — |
| Review | Requests | Provides | Owns (accuracy) |
| Complete | Validates | — | Confirms |

## Skill Sequence

### 1. Sharpen (`vstack-sharpen`)
- Define audience: users, contributors, operators, stakeholders
- Define scope: what docs, what format, where published
- Identify source of truth: code, specs, ADRs, team knowledge
- **Required:** Always — docs need clear audience and scope

### 2. Discovery (`vstack-how`, `vstack-why`, `vstack-recall`, `vstack-explain`)
- `vstack-how` — find existing docs, code patterns, examples
- `vstack-why` — understand design decisions for accuracy
- `vstack-recall` — team knowledge, prior docs, FAQ
- `vstack-explain` — extract explanations from experts
- **Output:** Doc outline with sources for each section

### 3. Plan Loop (`vstack-plan-loop`)
- Tasks per doc artifact: outline → draft → review → publish
- Define review criteria: accuracy, completeness, clarity, style
- **Lightweight:** Usually 2-4 tasks

### 4. Writing (`vstack-explain`, `vstack-unslop`)
- Draft following project style guide
- `vstack-explain` — ensure technical accuracy
- `vstack-unslop` — remove AI tells, passive voice, fluff
- Code examples tested (copy-paste verify)
- **Required:** All code examples executable

### 5. Review (`vstack-review-loop`)
- **Accuracy lens:** Technical correctness vs implementation
- **Clarity lens:** Audience-appropriate, scannable, examples work
- **Completeness lens:** Covers all trigger cases, non-triggers, troubleshooting
- **Style lens:** Consistent with project voice

### 6. Complete
- Docs published to correct location (README, docs/, wiki)
- Cross-references updated
- `vstack-lessons` — doc patterns for future

## Risk Adaptation

| Risk | Discovery | Plan | Review |
|---|---|---|---|
| Low (internal, minor) | Light | Simple | Quick (accuracy) |
| Medium (user-facing) | Standard | Full | Full (accuracy + clarity) |
| High (public API, compliance) | Deep + SME | Full + legal | Full + compliance |

## Parallel Work
- Independent doc artifacts → parallel Builders
- Shared examples/reference → coordinate
- Lead ensures consistent voice and cross-refs

## Without Plugin
- Draft in PR, review via comments
- Publish via merge
- Style check via lint (markdownlint, vale)

## With Plugin
- `vstack_delivery` type: documentation
- `vstack_task` per doc artifact
- `vstack_check` runs markdownlint, link check, example tests
- `vstack_memory` persists style decisions, glossary