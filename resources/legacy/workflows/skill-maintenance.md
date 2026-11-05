# Workflow: Skill Maintenance

## Trigger & Suitability
- Existing skill needs update (procedure change, new version, bug in skill)
- New skill creation (authoring from scratch)
- Skill evaluation/retirement (deprecation, consolidation)
- Skill adaptation for new harness (Codex, Claude Code, etc.)
- Risk: low to medium (affects skill users)

## Roles & Responsibilities

| Phase | Lead | Builder | Reviewer |
|---|---|---|---|
| Sharpen | Owns | — | — |
| Discovery | Coordinates | Executes | — |
| Author/Eval | Decides | Executes | Challenges |
| Validate | Checks evidence | Executes checks | — |
| Review | Requests | Provides | Owns |
| Complete | Validates | — | Confirms |

## Skill Sequence

### 1. Sharpen (`vstack-sharpen`)
- Define: new skill, update, evaluation, or retirement
- For new: problem, audience, outcome, trigger
- For update: what changed, why, migration needed
- For eval: criteria, test scenarios
- **Required:** Always

### 2. Discovery (`vstack-how`, `vstack-why`, `vstack-recall`, `vstack-skill-authoring`)
- `vstack-how` — find similar skills, patterns, conventions
- `vstack-why` — understand existing skill design rationale
- `vstack-recall` — team experience with skill
- `vstack-skill-authoring` — reference authoring standards
- **External research:** Cursor pstack + 1 independent pack per skill

### 3. Author / Evaluate (`vstack-skill-authoring`, `vstack-skill-evaluation`, `vstack-figure-it-out`)
- **New/Update:** Draft SKILL.md per v2 contract:
  - Frontmatter: name, description, version
  - When to Use (trigger, non-trigger)
  - Procedure (numbered, imperative, conditional steps)
  - Expected Outputs (artifacts, evidence)
  - Verification (how to prove it worked)
  - Stop Conditions (bounded retries, escalation)
  - Evaluation Cases (positive, negative, failure, fidelity)
- **Evaluation:** Run `vstack-skill-evaluation` against test scenarios
- **Harness adapters:** Generate/update adapters for each target harness

### 4. Validation (`vstack-verify-loop`, `validate-content.js`)
- Structural validation: `node scripts/validate-content.js` → 0 errors, 0 warnings
- Behavioral evaluation: run evaluation cases
- Adapter validation: test in actual harness (Codex, Claude Code, OpenCode)
- **Required:** All validations pass before review

### 5. Review (`vstack-review-loop`)
- **Procedure fidelity:** Does skill produce intended outcome?
- **Overlap check:** Distinct from existing skills? (per `canonical-ownership`)
- **Progressive disclosure:** Core procedure + references, not everything
- **Harness independence:** Works without specific harness?

### 6. Complete
- Skill file committed, adapters generated
- Manifest updated if new skill
- `vstack-lessons` — authoring patterns

## Risk Adaptation

| Risk | Discovery | Authoring | Validation | Review |
|---|---|---|---|---|
| Low (typo, clarity) | Light | Direct | Quick validate | Light |
| Medium (procedure change) | Standard | Full draft | Full validate | Standard |
| High (new core skill) | Deep + research | Full + external review | Full + harness test | Full + jury |

## Parallel Work
- Independent skills → parallel
- Adapter generation per harness → parallel
- Lead coordinates manifest updates

## Without Plugin
- Manual validation script run
- Adapter files created manually
- Harness testing via manual install

## With Plugin
- `vstack_delivery` type: skill-maintenance
- `vstack_task` per skill/adaptor
- `vstack_check` runs validate-content.js, evaluation cases
- `vstack_memory` persists research, overlap analysis