---
name: verify-setup
description: Inspect a project and create a project-specific application verification skill
lifecycle: draft
---

# verify-setup

## Purpose / Outcome

Generates a project-specific verification skill that can drive the real application: inspects project structure, classifies application surface, establishes run commands, defines health checks, application driving, observation channels, isolation, and cleanup.

---

## When to Use (Positive Triggers)

- First time using vstack on a project
- When no project verification skill exists
- When project changes require new verification approach

---

## When Not to Use (Negative Triggers)

- When project verification skill exists and is current
- For projects without runnable application (libraries only)

---

## Required Context / Inputs

- Project repository access
- Project documentation (README, package.json, etc.)
- Ability to run project commands

---

## Preconditions

- Project can be built and run locally
- Test identities/fixtures available or creatable

---

## Procedure

### Step 1: Inspect Project Structure

- `package.json` / `pyproject.toml` / `Cargo.toml` / `go.mod` — scripts, dependencies
- Build/test configuration
- Application entry points
- Existing tests and test utilities

### Step 2: Classify Application Surface

- Web (browser, API)
- Mobile (iOS/Android)
- CLI
- Desktop
- Service/Library

### Step 3: Determine Prerequisites

- Required services (DB, Redis, etc.)
- Configuration (env vars, config files)
- Test data/fixtures

### Step 4: Establish Run Commands

- Install: `npm ci`, `pip install`, `cargo build`, `go mod download`
- Build: `npm run build`, `cargo build --release`, `go build`
- Start dev: `npm run dev`, `python manage.py runserver`
- Start test: `npm run test`, `pytest`, `cargo test`, `go test`

### Step 5: Verify Health Checks

- How to confirm correct instance running
- Health endpoint / ready signal
- Port/URL for access

### Step 6: Define Application Driving

- Browser automation (Playwright, Cypress, Selenium)
- API client (curl, HTTPie, generated client)
- CLI invocation
- Test identities and safe test data

### Step 7: Define Observation Channels

- Expected responses/assertions
- Logs to check
- Screenshots/traces/metrics
- Database state verification

### Step 8: Define Isolation

- Separate test database/schema
- Ephemeral ports
- Test-specific config
- No production data access

### Step 9: Define Cleanup

- Stop test processes
- Clean test data
- Reset config

### Step 10: Identify Gaps

- What cannot be automated
- Manual verification needed
- Known flaky areas

### Step 11: Generate Skill

- Create `SKILL.md` in project's harness skill directory (e.g., `.opencode/skills/<project>-verification/`)
- Use template from `playbook/project-templates/verification-skill/`
- Include all sections above

### Step 12: Validate

- Run skill against representative scenario
- Have Lead/Reviewer inspect correctness

---

## Expected Outputs

- Project verification skill at harness-specific location
- Skill includes: setup, run, health, drive, observe, cleanup, gaps
- Validation evidence

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- Skill executes setup → run → health → drive → observe → cleanup
- At least one representative journey verified
- Lead/Reviewer approval

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Project cannot be run locally | Escalate to Lead |
| Critical gap unaddressable | Document in skill |
| Harness skill dir unavailable | Create in project root `.vstack-verification/` |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Skill created and validated
- Time-boxed (default: 1-2 hours)

---

## Escalation

- Project cannot be run locally → escalate to Lead
- Critical gap unaddressable → document in skill

---

## Fallback

- Without harness skill dir: create in project root `.vstack-verification/`
- Without full automation: document manual steps clearly

---

## Skill / Role / Tool Routing

- **Skills invoked:** verify-maintain (ongoing), verify (uses project verification), coverage (gap analysis)
- **Roles:** Builder (creates), Lead (validates)
- **Tools:** Project commands, harness skill installation
- **References:** playbook/project-templates/verification-skill/

---

## Examples

### Example: Web Application Verification Skill

**Project:** React + Node.js API
**Surface:** Web (browser + API)
**Generated skill:** Setup (npm ci), Run (npm run dev), Health (GET /health), Drive (Playwright for UI, curl for API), Observe (screenshots, API responses, logs), Cleanup (stop processes, reset DB), Gaps (mobile testing manual)

---

## Dependencies / References

- **Templates:** `templates/verification-skill.md.hbs`

- **Principles:** Harness Independence, Procedures Over Vague Instructions, Prove It Works
- **Skills:** verify-maintain, verify, coverage
- **References:** playbook/project-templates/verification-skill/

