# Principle: Understand Before Changing

## Summary
Before modifying any system, you must understand its current behavior, boundaries, and constraints. Changing without understanding causes regressions, missed edge cases, and architectural drift.

## Trigger
You are about to edit code, change configuration, modify a schema, or alter a process without first investigating the existing implementation.

## Decision Rule
**Mandatory understanding phase before any change.** Minimum understanding steps:
1. **Locate** — Find all relevant code, config, docs, tests (`code-tour`, `rationale`, `grep`/`glob`)
2. **Read** — Read the actual implementation, not just summaries
3. **Trace** — Understand runtime flow, data dependencies, call chains
4. **Test** — Run existing tests to confirm current behavior
5. **Document** — Record findings in `decisions` or `vstack-memory`

**Only then** propose the change with:
- What you're changing and why
- What you expect to happen
- What could break (blast radius)
- How you'll verify

## Observable Effect
- No "drive-by" fixes that break unrelated behavior
- Change proposals reference specific files/functions/tests
- Blast radius analysis precedes implementation
- Existing tests pass before and after change

## Concrete Example

### ❌ Violates Principle
> "Fix the login timeout" — changes auth middleware without reading session handling, breaks token refresh.

### ✅ Follows Principle
> 1. `code-tour` "login flow" → finds `auth/middleware.ts`, `session/refresh.ts`
> 2. Reads both files, traces request flow
> 3. Runs existing auth tests — all pass
> 4. Identifies timeout config in `config/auth.ts`, not middleware
> 5. Proposes: "Increase `session.idleTimeout` from 15m to 30m in config. Blast radius: only session expiry. Verify: existing tests + manual login test."

## Informs
- `code-tour` — codebase understanding
- `rationale` — design rationale discovery
- `impact` — impact analysis
- `debug` — systematic diagnosis before fix
- All workflows — Discovery/Blueprint phases before Implement

## Related Skills
- `code-tour` — codebase walkthrough
- `rationale` — decision rationale
- `impact` — impact analysis
- `debug` — systematic debugging
- `vstack-investigation` workflow — structured understanding

## Escalation
If understanding takes >50% of estimated task time, that's expected — not a delay. If the system is genuinely incomprehensible, escalate to `architecture-change` workflow with `design` to address technical debt.