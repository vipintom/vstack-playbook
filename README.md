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
npx skills add @vipintom/vstack --skill tdd verify debug --agent opencode
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
4. **Apply skills** → Use `help` to find relevant skills

## Skills (55)

### Foundation (7)
| Skill | Purpose |
|---|---|
| `skill-authoring` | Skill creation guidelines |
| `skill-eval` | Skill evaluation methodology |
| `route` | Establish working method |
| `shipinciples` | Core rules reference |
| `help` | Find relevant skills |
| `sharpen` | Clarify request |
| `figure-it-out` | Bespoke playbook design |

### Discovery (6)
| Skill | Purpose |
|---|---|
| `code-tour` | Code walkthroughs |
| `rationale` | Design rationale |
| `impact` | Analyze impact |
| `report` | Code explanation |
| `resume` | Context retrieval |
| `blueprint` | Technical specifications |

### Architecture (5)
| Skill | Purpose |
|---|---|
| `design` | System architecture decisions |
| `red-team` | Design comparison |
| `audit` | Design review |
| `shipototype` | Prototyping |
| `red-team` | Best-of-N evaluation |

### Planning (5)
| Skill | Purpose |
|---|---|
| `plan` | Create & validate plan |
| `plan` | Fresh-context plan validation |
| `plan` | Incremental delivery |
| `refactor` | Safe refactoring |
| `unslop` | AI tell removal |

### Implementation (1)
| Skill | Purpose |
|---|---|
| `tdd` | Test-driven development |

### Verification (4)
| Skill | Purpose |
|---|---|
| `verify` | Execute checks, iterate |
| `verify-setup` | Project verification skill creation |
| `verify-maintain` | Verification maintenance |
| `coverage` | Verification quality audit |

### Debug/Recovery (4)
| Skill | Purpose |
|---|---|
| `debug` | Systematic debugging |
| `recovery` | Failure recovery |
| `unstick` | Change approach when stuck |
| `forensics` | Runtime analysis |

### Collaboration (5)
| Skill | Purpose |
|---|---|
| `red-team` | Parallel execution |
| `handoff` | Context handoff |
| `worktree` | Worktree management |
| `red-team` | Deep code review |
| `red-team` | Jury evaluation |

### Review (4)
| Skill | Purpose |
|---|---|
| `rubrics` | Review criteria |
| `review` | Independent review |
| `ship` | PR preparation |
| `watch-pr` | PR monitoring |

### Continuity (5)
| Skill | Purpose |
|---|---|
| `decisions` | Decision/lesson tracking |
| `handoff` | Safe interruption |
| `resume` | Session resumption |
| `ready` | Readiness check |
| `ship` | Release execution |

### Extended (4)
| Skill | Purpose |
|---|---|
| `performance` | Performance optimization |
| `forensics` | Trace analysis |
| `visual-parity` | Visual regression |
| `lessons` | Pattern-to-improvement |

### Utils (3)
| Skill | Purpose |
|---|---|
| `docker` | Docker & Docker Compose patterns |
| `makefile` | Modern Makefile automation |
| `gitignore` | .gitignore templates |

**Retired (v1 legacy):** `vstack-discovery`, `debugging` — superseded

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