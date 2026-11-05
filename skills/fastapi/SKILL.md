---
name: fastapi
description: Use when an asynchronous Python HTTP service is built or changed with FastAPI, SQLAlchemy or background workers; not for transport-agnostic contract design (api-design) or container packaging (docker).
tier: stack
rigor: standard
status: stable
harness: [gate]
pairs-with: [api-design, tdd, docker]
---

# fastapi

Async end to end or not at all. Sessions, transactions and background work are
the places FastAPI services fail; design them explicitly.

## When to use

- A new endpoint, dependency or background task.
- Database sessions or transactions are involved.
- Authentication, authorization or request validation changes.
- Response models or error handlers need consistency.
- Tests need an async client and a real database.

Near misses:

- The contract shape is the question → `api-design`.
- Packaging and runtime image → `docker`.
- Pure logic → `tdd`.

## Modes

| Mode | Scope |
|---|---|
| Endpoint | one route with dependencies and tests |
| Resource | router plus models, schemas, migrations |
| Service | lifespan, pools, workers, health checks |

## Steps

1. **Write the request and response models** first, with validation and
   examples. Artifact: Pydantic models.
2. **Declare dependencies** (session, current user, settings) so tests can
   override them. Artifact: dependency tree.
3. **Keep transactions at the boundary**: one commit per request, no session
   shared across tasks. Artifact: session wiring.
4. **Write a failing test** with `httpx.AsyncClient` against a real test
   database. Artifact: failing test.
5. **Implement** until it passes; no blocking calls in async paths. Artifact:
   implementation.
6. **Add a health endpoint** and structured logging. Artifact: routes.

## Output

Models, dependency wiring, and a test that runs against a real database. No
`time.sleep`, no synchronous client in an async handler.

## Failure

- **A dependency blocks.** Move it to a thread pool explicitly or use an async
  client; do not hide it in `async def`.
- **Tests need the production database.** Use a containerised test database;
  record the fixture.
- **Background tasks must survive restarts.** On-demand tasks are not durable;
  use a queue and say so.

## Rationalizations

| Excuse | Reality |
|---|---|
| "Async is faster by default." | It is faster only when nothing blocks the loop. |
| "Tests can use SQLite." | SQLite hides the concurrency and type behaviour you ship. |
| "One global session is simpler." | It is simpler until two requests share it. |
| "Background tasks are good enough." | Until the process restarts mid-task. |

## Tracking

- **OpenChamber present:** test command and result on the delivery.
- **OpenCode or files:** evidence line per endpoint test run.
- Ladder: `resources/tracking.md`.

## Verification

```bash
pytest -q
```
