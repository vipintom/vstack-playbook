# vstack Principles

These principles guide all engineering work done with vstack. They are harness-independent and apply whether or not you use the OpenCode plugin or OpenChamber.

---

## 1. Harness Independence First

The playbook must work without OpenCode, OpenChamber, or any specific agent platform. Core principles, skills, and workflows must not depend on proprietary tool names, APIs, or runtime behavior. Harness-specific adaptations are allowed but must preserve the same underlying methodology.

## 2. Procedures Over Vague Instructions

Skills describe actionable procedures, not encouragements to "be careful" or "be thorough." Important procedures make clear:
- When they apply
- What they require
- What steps to follow
- What outcome is expected
- When to stop or escalate

## 3. Flexible Workflows, Not Mandatory Ceremony

Workflows guide common engineering outcomes without forcing every task through the same sequence. A small bug fix should not require the same process as a large architectural change. The applicable level of investigation, planning, parallelism, review, and verification reflects task size and risk.

## 4. Loops Are First-Class Practices

Planning, implementation, verification, debugging, and review are often iterative. vstack defines reusable feedback loops with bounded retries, clear outcomes, and escalation when progress stalls.

## 5. Small, Purposeful Agent Team

The default team remains small: **Lead**, **Builder**, **Reviewer**. Specialization comes primarily from skills and task context rather than an ever-growing collection of permanent agents. Security, performance, accessibility, UI, documentation, and test strategy are delivered through skills and review lenses.

## 6. Evidence Before Completion

A claim that work is complete, tested, or reviewed must be supported by appropriate evidence. An agent's assertion alone is not equivalent to an executed check or an independent review.

## 7. Independent Challenge

Important work should be open to review by an agent operating with sufficiently independent context. Review identifies risks and defects, not merely confirms the implementer's conclusions.

## 8. Runtime Simplicity

The OpenCode plugin (when used) is a prototype runtime, not a general-purpose orchestration platform. It provides persistence, coordination, history, and selected enforcement with minimal friction. It does not duplicate the playbook's reasoning.

## 9. Clear Source of Responsibility

- **Playbook** defines methods and expectations
- **OpenCode plugin** owns runtime information and enforcement it provides
- **OpenChamber** presents information without independently managing it

## 10. Degrade Gracefully

When a harness lacks subagents, parallel execution, worktrees, or other advanced capabilities, the playbook still works. Sequential execution or fresh-context handoffs substitute where parallel or specialized execution is unavailable.

## 11. Understand Before Changing

Before modifying any system, you must understand its current behavior, boundaries, and constraints. Changing without understanding causes regressions, missed edge cases, and architectural drift.

---

## Principle Leaf Files

Each principle has a detailed leaf file with trigger, decision rule, observable effect, concrete example, related skills, and escalation guidance:

1. [`harness-independence-first.md`](harness-independence-first.md)
2. [`procedures-over-vague-instructions.md`](procedures-over-vague-instructions.md)
3. [`flexible-workflows-not-mandatory-ceremony.md`](flexible-workflows-not-mandatory-ceremony.md)
4. [`loops-are-first-class.md`](loops-are-first-class.md)
5. [`small-purposeful-agent-team.md`](small-purposeful-agent-team.md)
6. [`evidence-before-completion.md`](evidence-before-completion.md)
7. [`independent-challenge.md`](independent-challenge.md)
8. [`runtime-simplicity.md`](runtime-simplicity.md)
9. [`clear-source-of-responsibility.md`](clear-source-of-responsibility.md)
10. [`degrade-gracefully.md`](degrade-gracefully.md)
11. [`understand-before-changing.md`](understand-before-changing.md)
12. [`route-before-loading.md`](route-before-loading.md)
13. [`smallest-complete-change.md`](smallest-complete-change.md)
14. [`challenge-assumptions.md`](challenge-assumptions.md)
15. [`model-domain-explicitly.md`](model-domain-explicitly.md)
16. [`respect-boundaries.md`](respect-boundaries.md)
17. [`verifiable-increments.md`](verifiable-increments.md)

---

*These principles are the foundation. All skills, roles, and workflows derive from them.*