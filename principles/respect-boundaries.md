# Principle: Respect Boundaries

## Summary
Components, modules, services, and teams have defined boundaries. Crossing boundaries without explicit contracts creates coupling, fragility, and ownership ambiguity. Respect boundaries; change them deliberately.

## Trigger
You are about to: import internal types from another package, call private methods, access another team's database directly, modify shared config without coordination, or skip an API boundary.

## Decision Rule
**Default to public contracts.** Boundary crossing protocol:
1. **Identify the boundary** — Package, module, service, team, repo
2. **Check for public contract** — Public API, exported types, documented interface, RFC
3. **If contract exists** — Use it. Do not reach behind it.
4. **If no contract exists** — Propose one (RFC, ADR, API design). Do not bypass.
5. **If urgent and no contract** — Document as **explicit boundary violation** with: reason, risk, mitigation, follow-up task to establish contract

**Boundary types:**
| Boundary | Public Contract | Violation Example |
|----------|-----------------|-------------------|
| Package | Exported API, types | Importing `internal/*` or private fields |
| Module | Public functions, types | Calling unexported functions |
| Service | API schema (OpenAPI/gRPC) | Direct DB access, internal gRPC |
| Team | RFC, ADR, API review | Changing shared infra without review |
| Repo | Git tags, releases, manifests | Depending on main branch, unpinned |

## Observable Effect
- Imports only use public exports
- Service communication via defined APIs
- Cross-team changes go through RFC/review
- Dependency pins are explicit (tags, versions)
- `vstack-blast-radius` catches boundary violations

## Concrete Example

### ❌ Violates Principle
> Frontend imports `backend/internal/database.ts` to get User type. Backend renames field → frontend breaks silently.

### ✅ Follows Principle
> Backend exports `User` type from `backend/api/types.ts`. Frontend imports from `@backend/api`. Backend changes internal DB schema → API type unchanged → frontend unaffected.

## Informs
- `vstack-blast-radius` — identifies boundary crossings
- `vstack-architect` — defines module/service boundaries
- `vstack-blueprint` — compares designs by boundary clarity
- `vstack-migration` — boundary changes require migration plan

## Related Skills
- `vstack-blast-radius` — boundary impact analysis
- `vstack-architect` — boundary design
- `vstack-migration` — safe boundary evolution
- `vstack-review-rubrics` — maintainability lens checks boundaries

## Escalation
If a boundary violation is genuinely necessary (legacy, performance, no alternative), Lead must approve with recorded rationale, risk assessment, and a follow-up task to establish the proper contract. Never violate silently.