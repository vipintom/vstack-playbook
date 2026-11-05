---
name: verify-maintain
description: Keep project verification instructions aligned with actual code, commands and behaviour
lifecycle: draft
---

# verify-maintain

## Purpose / Outcome

Maintains project verification skill currency by detecting changes between skill and reality, updating affected sections, and validating the updated skill.

---

## When to Use (Positive Triggers)

- After project changes that may affect verification
- Periodic review of verification skill
- When coverage finds gaps
- When verification fails unexpectedly

---

## When Not to Use (Negative Triggers)

- When verification skill is current and working
- For one-off verification failures (debug instead)

---

## Required Context / Inputs

- Existing project verification skill
- Access to project code and config
- Recent verification failures or changes

---

## Preconditions

- Project verification skill exists
- Project can be run for validation

---

## Procedure

### Step 1: Identify Maintenance Triggers

- Changed: scripts, entry points, routes, APIs, UI surfaces
- Changed: test framework, config, feature flags
- Observed: verification failures, discrepancies
- Stale: validation timestamp exceeded threshold

### Step 2: Compare Skill vs Reality

- Setup commands vs package.json/scripts
- Run commands vs actual dev/test commands
- Health checks vs actual endpoints
- Drive steps vs current app surfaces
- Observe channels vs actual logging/metrics
- Cleanup vs actual process management

### Step 3: Detect Changes

- Command/artifact hash changes (package-lock, config hashes)
- Semantic changes (new routes, changed APIs, new UI)
- Tool/framework upgrades

### Step 4: Update Skill

- Modify affected sections
- Update version/timestamp
- Mark unresolved gaps explicitly

### Step 5: Validate

- Run smoke test through updated skill
- Execute representative journey
- Verify all steps work

### Step 6: Record

- Update `lastValidated` timestamp
- Update content hash
- Note changes in skill changelog

---

## Expected Outputs

- Updated project verification skill
- Validation evidence
- Updated metadata (version, hash, timestamp)

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Skill executes without errors
- Representative journey passes
- No stale commands/references

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Validation fails repeatedly | debug verification itself |
| Unresolvable gap | Document in skill, escalate to Lead |
| Skill directory unavailable | Update in project fallback location |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Skill current and validated
- Time-boxed (default: 30-60 min)

---

## Escalation

- Validation fails repeatedly → debug verification itself
- Unresolvable gap → document in skill, escalate to Lead

---

## Fallback

- Without full validation: update known changes, mark rest for review
- Without harness skill dir: update project fallback location

---

## Skill / Role / Tool Routing

- **Skills invoked:** verify-setup (initial creation), coverage (gap detection), verify (uses verification)
- **Roles:** Builder (maintains), Lead (validates)
- **Tools:** Project commands, diff/hash tools
- **References:** None

---

## Examples

### Example: API Route Addition

**Trigger:** New `/api/v2/users` route added
**Detection:** Semantic change in routes vs skill drive steps
**Update:** Add drive step for new endpoint, update observation channels
**Validate:** Run skill, verify new endpoint reachable
**Record:** Update timestamp, hash, changelog entry

---

## Dependencies / References

- **Principles:** Harness Independence, Procedures Over Vague Instructions, Evidence Before Assertions
- **Skills:** verify-setup, coverage, verify
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/verify-maintain/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** Trigger detection, skill vs reality comparison, change detection (hash + semantic), validation, metadata recording
- **Procedures rewritten:** Explicit 6-step procedure, trigger categories, hash/semantic detection, fallback
- **Disposition:** rewrite
- **Research record:** docs/research/records/verify-maintain.md