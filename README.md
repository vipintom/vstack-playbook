# vstack Playbook

Portable engineering playbook for AI-assisted software development.

## Contents

- **principles/** — 17 core operating principles
- **agents/roles/** — Canonical role definitions (Lead, Builder, Reviewer)
- **agents/adapters/** — Harness-specific adapters (OpenCode, Codex, Claude Code)
- **skills/** — 55 reusable procedures
- **workflows/** — 18 recipes for common engineering outcomes
- **resources/** — Rubrics, templates, references

## Installation

### All Skills (All Agents)

```bash
# From npm (after publish)
npx skills add @vipintom/vstack --skill '*' --agent '*'

# From GitHub (no npm needed)
npx skills add github:vipintom/vstack-playbook --skill '*' --agent '*'
```

### Selective Skills

```bash
npx skills add @vipintom/vstack --skill vstack-tdd vstack-verify-loop vstack-debug --agent opencode
```

### For Specific Harnesses

```bash
# OpenCode
npx skills add @vipintom/vstack --agent opencode
# Or from GitHub
npx skills add github:vipintom/vstack-playbook --agent opencode

# Claude Code
npx skills add @vipintom/vstack --agent claude-code

# Codex
npx skills add @vipintom/vstack --agent codex
```

## Quick Start

1. **Read principles** → `principles/index.md`
2. **Identify your role** → `agents/roles/lead.md` | `builder.md` | `reviewer.md`
3. **Select workflow** → `workflows/feature-delivery.md` | `bug-fixing.md` | `refactoring.md`
4. **Apply skills** → Use `vstack-help` to find relevant skills

## Skills (55)

### Foundation (7)
| Skill | Purpose |
|---|---|
| `vstack-skill-authoring` | Skill creation guidelines |
| `vstack-skill-evaluation` | Skill evaluation methodology |
| `vstack-mode` | Establish working method |
| `vstack-principles` | Core rules reference |
| `vstack-help` | Find relevant skills |
| `vstack-sharpen` | Clarify request |
| `vstack-figure-it-out` | Bespoke playbook design |

### Discovery (6)
| Skill | Purpose |
|---|---|
| `vstack-how` | Code walkthroughs |
| `vstack-why` | Design rationale |
| `vstack-blast-radius` | Analyze impact |
| `vstack-explain` | Code explanation |
| `vstack-recall` | Context retrieval |
| `vstack-blueprint` | Technical specifications |

### Architecture (5)
| Skill | Purpose |
|---|---|
| `vstack-architect` | System architecture decisions |
| `vstack-arena` | Design comparison |
| `vstack-design-audit` | Design review |
| `vstack-prototype` | Prototyping |
| `vstack-best-of-n` | Best-of-N evaluation |

### Planning (5)
| Skill | Purpose |
|---|---|
| `vstack-plan-loop` | Create & validate plan |
| `vstack-plan-review` | Fresh-context plan validation |
| `vstack-incremental-build` | Incremental delivery |
| `vstack-refactor` | Safe refactoring |
| `vstack-unslop` | AI tell removal |

### Implementation (1)
| Skill | Purpose |
|---|---|
| `vstack-tdd` | Test-driven development |

### Verification (4)
| Skill | Purpose |
|---|---|
| `vstack-verify-loop` | Execute checks, iterate |
| `vstack-create-verification` | Project verification skill creation |
| `vstack-maintain-verification` | Verification maintenance |
| `vstack-verification-audit` | Verification quality audit |

### Debug/Recovery (4)
| Skill | Purpose |
|---|---|
| `vstack-debug` | Systematic debugging |
| `vstack-recovery` | Failure recovery |
| `vstack-unstick` | Change approach when stuck |
| `vstack-runtime-forensics` | Runtime analysis |

### Collaboration (5)
| Skill | Purpose |
|---|---|
| `vstack-swarm` | Parallel execution |
| `vstack-handoff` | Context handoff |
| `vstack-worktree` | Worktree management |
| `vstack-interrogate` | Deep code review |
| `vstack-jury` | Jury evaluation |

### Review (4)
| Skill | Purpose |
|---|---|
| `vstack-review-rubrics` | Review criteria |
| `vstack-review-loop` | Independent review |
| `vstack-pr` | PR preparation |
| `vstack-watch-pr` | PR monitoring |

### Continuity (5)
| Skill | Purpose |
|---|---|
| `vstack-ledger` | Decision/lesson tracking |
| `vstack-safe-pause` | Safe interruption |
| `vstack-session-pickup` | Session resumption |
| `vstack-ready` | Readiness check |
| `vstack-ship` | Release execution |

### Extended (4)
| Skill | Purpose |
|---|---|
| `vstack-performance` | Performance optimization |
| `vstack-trace-forensics` | Trace analysis |
| `vstack-visual-parity` | Visual regression |
| `vstack-lessons` | Pattern-to-improvement |

### Utils (3)
| Skill | Purpose |
|---|---|
| `docker-compose` | Docker & Docker Compose patterns |
| `makefile` | Modern Makefile automation |
| `gitignore` | .gitignore templates |

**Retired (v1 legacy):** `vstack-discovery`, `vstack-debugging` — superseded

## Workflows (18)

| Workflow | Category | Use For |
|---|---|---|
| `investigation` | Core Must | Deep codebase investigation |
| `architecture-change` | Core Must | Architectural decisions |
| `infrastructure-change` | Core Must | Infrastructure modifications |
| `documentation` | Core Must | Documentation updates |
| `skill-maintenance` | Core Must | Skill updates/validation |
| `feature-delivery` | Should/Could | Multi-step new functionality |
| `bug-fixing` | Should/Could | Defect repair with regression test |
| `refactoring` | Should/Could | Structure improvement, behavior preserved |
| `performance-investigation` | Should/Could | Performance analysis |
| `prototype` | Should/Could | Prototyping |
| `multi-phase-delivery` | Should/Could | Multi-phase features |
| `autonomous-execution` | Should/Could | Autonomous delivery |
| `pr-preparation` | Should/Could | PR readiness |
| `pr-monitoring` | Should/Could | PR tracking |
| `worktree-cleanup` | Should/Could | Worktree management |
| `runtime-forensics` | Should/Could | Runtime investigation |
| `trace-forensics` | Should/Could | Trace analysis |
| `visual-parity` | Should/Could | Visual regression |

## Validation

```bash
node scripts/validate-content.js
```

## Requirements

- Compatible with Agent Skills CLI (`npx skills`)
- Works with OpenCode, Codex, Claude Code
- No runtime dependencies — pure Markdown content

## License

MIT