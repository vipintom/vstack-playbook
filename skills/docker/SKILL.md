---
name: docker
description: Use when an application or service must be built, run or shipped in containers — images, compose stacks, secrets, health checks; not for local build commands (makefile) or pipeline wiring (ci).
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
