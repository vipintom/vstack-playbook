---
name: docker
description: Use when an application or service must be built, run or shipped in containers — images, compose stacks, secrets, health checks; not for local build commands (makefile) or pipeline wiring (ci).
tier: stack
rigor: standard
status: stable
pairs-with: [ci, makefile, verify]
---

# docker

Containers make the environment explicit. The image is the artifact; if it does
not build from a clean context and start under a health check, nothing else
about it matters.

## When to use

- A new service needs a Dockerfile or a compose service.
- Local development should match the deployed runtime.
- Builds are slow or non-reproducible.
- Secrets, environment variables or config files enter the image.
- A container starts but fails health checks or cannot reach a dependency.

Near misses:

- The command already exists locally → `makefile`.
- Pipeline jobs and caching → `ci`.
- The failure is application logic → `debug`.

## Modes

| Mode | Artifact |
|---|---|
| Image | multi-stage Dockerfile, non-root, pinned base |
| Compose | services, networks, volumes, health checks, overrides |
| Ship | image built once, digest-pinned, secrets injected at run |

## Steps

1. **Pin the base image** by tag and digest; record the platform. Artifact:
   `Dockerfile` header.
2. **Split build and runtime stages**; copy only artifacts into the final
   stage. Artifact: stage list.
3. **Run as non-root** with an explicit user and workdir. Artifact: `USER`.
4. **Declare a health check** that fails when the service cannot serve.
   Artifact: `HEALTHCHECK`.
5. **Compose the stack**: services, dependency order, volumes, one network,
   `.env` for non-secrets only. Artifact: `compose.yaml`.
6. **Keep secrets out of layers**: pass at run time or mount; never `COPY .env`.
   Artifact: secret wiring note.
7. **Build from a clean context** and start the stack; record the digest.
   Artifact: build log and `docker compose ps`.

## Output

A Dockerfile and compose file that build from a clean checkout, run as
non-root, declare health, and hold no secrets. Patterns and full examples:
`references/patterns.md`.

## Failure

- **The build needs the network at run time.** Fetch at build into a stage, or
  document the runtime dependency.
- **The image works only on the author's machine.** Check platform and base
  digest; build with `--platform` explicitly.
- **A secret is baked into a layer.** Rebuild without it; a deleted layer is
  still in history.
- **Health check passes but the app is broken.** Check what it proves;
  liveness is not readiness.

## Rationalizations

| Excuse | Reality |
|---|---|
| "The image is only for dev." | Dev images become deployment images by accident. |
| "Root is simpler in containers." | It is one line and one CVE class to fix now. |
| "Rebuilding is slow, cache is fine." | A poisoned cache ships a stale artifact. Digest it. |
| "Secrets in the image are temporary." | Layers are forever; rotate the secret. |

## Tracking

- **OpenChamber present:** build digest and `compose ps` on the delivery note.
- **OpenCode or files:** evidence lines with the build command and digest.
- Ladder: `resources/tracking.md`.

## Verification

```bash
docker build -t app:test . && docker run --rm app:test true
```
