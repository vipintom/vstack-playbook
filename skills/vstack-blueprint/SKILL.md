---
name: vstack-blueprint
description: Turn an accepted design into interfaces, components, data flows and implementation boundaries
lifecycle: draft
---

# vstack-blueprint

## Purpose / Outcome

Produces detailed design specification from an accepted architecture: component interfaces, data flows, implementation boundaries, migration strategy, and verification approach. Consumed by vstack-plan-loop for task planning.

---

## When to Use (Positive Triggers)

- "Blueprint this" / "Specify interfaces for..."
- After vstack-architect selects a design
- Before vstack-plan-loop for implementation planning
- When decomposing a feature into implementable units

---

## When Not to Use (Negative Triggers)

- Architectural exploration → vstack-architect
- Trivial changes with obvious implementation
- No accepted architecture decision

---

## Required Context / Inputs

- Accepted architecture decision (from vstack-architect)
- Current system boundaries (from vstack-how)

---

## Preconditions

- Architecture decision recorded
- Component boundaries defined at high level

---

## Procedure

### Step 1: Define Component Interfaces

- Public APIs (signatures, contracts, schemas)
- Internal module boundaries
- Error and event contracts

### Step 2: Design Data Flows

- Input validation and transformation
- State transitions and persistence
- Inter-component communication
- Serialization boundaries

### Step 3: Specify Implementation Boundaries

- Files/modules to create or modify
- Ownership per component
- Shared utilities vs component-specific code

### Step 4: Plan Implementation Sequence

- Dependency order (what must be built first)
- Integration points
- Test boundaries

### Step 5: Define Migration Strategy (if applicable)

- Schema migrations
- Data migration scripts
- Backward compatibility
- Rollback procedure

### Step 6: Identify Verification Approach

- Unit test boundaries
- Integration test scenarios
- Contract tests
- Performance baselines

---

## Expected Outputs

- Component interface specifications
- Data flow descriptions
- Implementation task breakdown
- Migration plan (if applicable)
- Verification strategy

---

## Verification

**Evidence recording:** VERIFIED / NOT_VERIFIED / INCONCLUSIVE / BLOCKED / NOT RUN / UNAVAILABLE


- All components have defined interfaces
- Dependencies are acyclic
- Migration plan addresses all breaking changes
- Verification strategy covers acceptance criteria

---

## Failure Handling

| Failure Mode | Response |
|---|---|
| Interface design conflicts | vstack-arena or escalate to Lead |
| Migration complexity high | Escalate to Lead |
| Cyclic dependencies detected | Redesign boundaries, re-run blueprint |

---

## Stop Conditions
- Work complete or goal achieved
- Blocked by external dependency or missing criteria
- Inconclusive - evidence gaps or ambiguous state
- Safe pause - interrupted with clean checkpoint


- Blueprint complete enough for task planning
- Time-boxed (default: 30-60 min)

---

## Escalation

- Interface design conflicts → vstack-arena or escalate
- Migration complexity high → escalate to Lead

---

## Fallback

- Without formal blueprint: document key interfaces in plan

---

## Skill / Role / Tool Routing

- **Skills invoked:** vstack-architect (accepted design), vstack-how (current boundaries), vstack-plan-loop (consumer)
- **Roles:** Architect (produces), Builder (consumes for planning)
- **Tools:** Architecture decision records, interface definition tools
- **References:** None

---

## Examples

### Example: Payment Module Blueprint

**Architecture decision:** Strategy pattern with Stripe/PayPal providers
**Blueprint:**
1. Interfaces: PaymentProvider (charge, refund, webhook), PaymentFactory
2. Data flows: Request → validate → provider.charge() → persist → response
3. Boundaries: providers/stripe/, providers/paypal/, factory/, types/
4. Sequence: types → factory → stripe provider → paypal provider → integration tests
5. Migration: New providers added without changing factory
6. Verification: Unit per provider, contract tests for factory, integration for webhooks

---

## Dependencies / References

- **Principles:** Interface Depth, Model Domain Explicitly, Procedures Over Vague Instructions
- **Skills:** vstack-architect, vstack-how, vstack-plan-loop
- **References:** None

---

## Migration Record

- **Previous name/path:** skills/vstack-blueprint/SKILL.md
- **Previous audit rating:** Adequate (historical input only)
- **Valuable concepts preserved:** 6-step procedure, interfaces first, data flows, implementation boundaries, migration strategy, verification approach
- **Procedures rewritten:** Explicit step structure, acyclic dependency verification, migration plan requirement
- **Disposition:** rewrite
- **Research record:** docs/research/records/vstack-blueprint.md