# Principle: Clear Source of Responsibility

## Summary
- **Playbook** defines methods and expectations
- **OpenCode plugin** owns runtime information and enforcement it provides
- **OpenChamber** presents information without independently managing it

## Trigger
Confusion about who owns a decision, record, or enforcement point — e.g., "Does the plugin decide if a check passes?" "Does OpenChamber update task status?"

## Decision Rule
**Consult the responsibility matrix:**

| Concern | Owner | Non-Owners Do Not |
|---------|-------|-------------------|
| Skill procedures, workflow recipes, role missions, principles | **Playbook** | Plugin/OpenChamber reimplement or override |
| Delivery/task/check/agent/memory records, event log, required-checks gate | **Plugin** | Playbook assumes specific storage; OpenChamber mutates |
| Dashboard views, charts, search, drill-down, export | **OpenChamber** | Plugin serves UI; Playbook defines presentation |

**Key boundaries:**
- Plugin records **what happened** (facts); Playbook defines **what should happen** (methods)
- OpenChamber reads **plugin's projection**; never writes to plugin's store
- Required checks config (`.vstack/required-checks.json`) is plugin-enforced, playbook-defined

## Observable Effect
- No component duplicates another's responsibility
- Clear escalation when boundaries blur (ADR required)
- Each component replaceable without breaking others' core function

## Concrete Example

### ❌ Violates Principle
> OpenChamber adds "Approve Task" button that writes to plugin's task store.

### ✅ Follows Principle
> OpenChamber shows task status from plugin projection. Approval happens via plugin's `vstack_approval` tool or Lead's manual record. OpenChamber displays approval status from projection.

## Informs
- Plugin services (persistence, event log, approvals)
- OpenChamber API (read-only projection consumption)
- Playbook roles (Lead owns decisions, Builder owns execution, Reviewer owns challenge)

## Related Skills
- `vstack-mode` — documents harness boundaries
- `vstack-check` — plugin-owned check recording
- `vstack-delivery` — plugin-owned delivery lifecycle

## Escalation
If a feature request blurs boundaries, file an ADR. Default: keep responsibility with current owner, extend interface if needed.