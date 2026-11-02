# Principle: Runtime Simplicity

## Summary
The OpenCode plugin (when used) is a prototype runtime, not a general-purpose orchestration platform. It provides persistence, coordination, history, and selected enforcement with minimal friction. It does not duplicate the playbook's reasoning.

## Trigger
You are designing a plugin feature, considering adding orchestration logic, or tempted to move playbook logic into the runtime.

## Decision Rule
**Plugin owns only what requires durable state or deterministic enforcement.** The plugin provides:
- **Persistence** — delivery, task, check, agent, memory records (file-based)
- **Coordination** — agent dispatch, task assignment, status aggregation
- **History** — immutable event log, check evidence, decision ledger
- **Enforcement** — required checks gate, role boundaries, approval recording

The plugin does **not** provide:
- Workflow interpretation (workflows are Markdown recipes, not state machines)
- Decision logic (skills describe procedures; agents execute them)
- Planning/scheduling (Lead/Builder own planning via `vstack-plan-loop`)
- Policy engine (enforcement is explicit gates, not rules)

## Observable Effect
- Plugin codebase stays small (~23 tools, 7 services)
- Playbook works without plugin (manual fallback documented)
- No "runtime logic" that duplicates or conflicts with skill procedures

## Concrete Example

### ❌ Violates Principle
> Plugin adds `vstack_plan_execute` that reads a workflow, auto-dispatches agents, tracks phase transitions, and decides next steps.

### ✅ Follows Principle
> Lead reads workflow, invokes `vstack_delivery` to create delivery, `vstack_task` to create tasks, `vstack_agent` to dispatch Builders. Lead decides next phase based on evidence. Plugin only records state and enforces required checks.

## Informs
- OpenCode plugin architecture (tools vs services)
- `vstack-mode` — documents plugin as optional runtime
- All workflows — "With Plugin" sections use plugin for recording/coordination only

## Related Skills
- `vstack-mode` — plugin as optional runtime
- `vstack-figure-it-out` — Lead decides workflow execution
- `vstack-plan-loop` — Lead owns planning

## Escalation
If a plugin feature request crosses into "orchestration logic" or "decision automation," reject or defer. Document as "playbook responsibility" with manual/plugin-assisted procedure.