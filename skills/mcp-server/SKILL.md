---
name: mcp-server
description: Use when building or changing a Model Context Protocol server so an agent can call external capabilities safely; not for plain HTTP APIs (api-design) or agent instructions (skill-authoring).
tier: stack
rigor: standard
status: stable
pairs-with: [api-design, typescript, ci]
---

# mcp-server

Tools are the interface an agent improvises against. Name them for the task,
describe them for selection, and make every failure legible.

## When to use

- A new MCP server or a new tool on an existing one.
- Tool descriptions or schemas cause wrong calls.
- A tool touches files, network or credentials.
- Transport, lifecycle or capability negotiation changes.
- The server must be tested without a live agent.

Near misses:

- The interface is for humans or other services → `api-design`.
- The question is agent behaviour → `skill-authoring`.
- Packaging and release → `ci`.

## Modes

| Mode | Scope |
|---|---|
| Tool | one tool with schema and tests |
| Server | tools, resources, prompts, errors |
| Distribution | stdio/HTTP transport, install, versioning |

## Steps

1. **Write the tool contract**: name, description, input schema with constraints,
   output shape, error codes. Artifact: tool spec.
2. **Make descriptions selection-grade**: when to use it, when not, what it
   returns. A vague description is a wrong call. Artifact: descriptions.
3. **Implement idempotently** where the operation allows; return structured
   errors, never stack traces. Artifact: implementation.
4. **Test the protocol directly** with an inspector or a client harness, not
   through an agent. Artifact: test output.
5. **Bound side effects**: paths, size limits, timeouts, and an explicit refusal
   for anything outside scope. Artifact: limits list.
6. **Document install and transport** for at least one harness. Artifact: README.

## Output

A tool spec, schema-validated inputs, structured errors, and a protocol-level
test that runs without an agent. Descriptions answer when and when not.

## Failure

- **The agent calls the tool wrongly.** Fix the description and schema before
  blaming the model.
- **A tool needs broad permissions.** Narrow it; a tool that can do anything is
  unsafe and unselectable.
- **Transport differs between harnesses.** Document each, and test the one you
  ship.

## Rationalizations

| Excuse | Reality |
|---|---|
| "The model will figure it out." | It figures out the description you gave it. |
| "Errors can be plain strings." | Structured errors let the agent recover. |
| "Testing through the agent is enough." | It tests the model, not the server. |
| "Permissions are fine for now." | Tools outlive the experiment that created them. |

## Tracking

- **OpenChamber present:** protocol test output on the delivery note.
- **OpenCode or files:** server repo README plus evidence lines.
- Ladder: `resources/tracking.md`.

## Verification

```bash
npx @modelcontextprotocol/inspector --cli node dist/server.js --method tools/list
```
