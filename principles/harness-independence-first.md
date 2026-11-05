# Principle: Harness Independence First

## Summary
The playbook must work without OpenCode, OpenChamber, or any specific agent platform. Core principles, skills, and workflows must not depend on proprietary tool names, APIs, or runtime behavior. Harness-specific adaptations are allowed but must preserve the same underlying methodology.

## Trigger
You are designing or authoring a skill, workflow, or principle that could reference a specific harness capability (e.g., "use OpenCode's task dispatch," "call OpenChamber API").

## Decision Rule
**Default to harness-agnostic language and fallback procedures.** If a capability is harness-specific:
1. Describe the *intent* and *outcome* in harness-agnostic terms
2. Provide a "Without Plugin" / "Manual" fallback that achieves the same outcome
3. Only then document the harness-specific optimization as an optional enhancement

## Observable Effect
- Any skill or workflow runs correctly when executed by a human following the procedure manually
- No step assumes a specific tool's API, CLI, or runtime behavior without a documented alternative
- Harness-specific content is clearly marked as optional optimization

## Concrete Example

### ❌ Violates Principle
> "Dispatch a Builder agent using `vstack_agent` to implement the feature."

### ✅ Follows Principle
> "Implement the feature using test-driven development. **With plugin:** Dispatch a Builder via `vstack_agent`. **Without plugin:** Work through each task sequentially yourself, recording test results in TODO.md."

## Informs
- All skills (especially those with plugin-specific tooling like `vstack_agent`, `vstack_memory`, `vstack_check`)
- All workflows (in "Without Plugin" / "With Plugin" sections)
- Role definitions (Lead/Builder/Reviewer must be operable without plugin)

## Related Skills
- `route` — documents harness adaptation patterns
- `figure-it-out` — works without any harness
- `resume` — manual handoff protocol

## Escalation
If a procedure fundamentally cannot work without a specific harness capability, document it as a **known limitation** in the skill/workflow and flag for architecture review (ADR required).