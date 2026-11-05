---
name: typescript
description: Use when TypeScript types, module boundaries or build configuration decide whether a change is safe; not for runtime behaviour tests (tdd) or API contract shape (api-design).
tier: stack
rigor: standard
status: stable
harness: [gate]
pairs-with: [tdd, review, api-design]
---

# typescript

Make the compiler the cheapest reviewer. Types describe what the code promises;
the build proves the promise still holds.

## When to use

- Adding or changing a public type, generic or overload.
- A change crosses package or module boundaries.
- `any` is spreading, or a cast hides a real mismatch.
- Build configuration changes (`tsconfig`, project references, module format).
- A refactor needs the compiler to catch integration mistakes.

Near misses:

- The question is what the API should expose → `api-design`.
- The question is whether behaviour works → `tdd`.
- The question is style → `review`.

## Modes

| Mode | Check |
|---|---|
| Local | `tsc --noEmit` on the package |
| Boundary | build all references, check emitted declarations |
| Migration | dual types during a transition, then remove the old |

## Steps

1. **Write the type before the implementation**, or change the type first if
   one exists. Artifact: type diff.
2. **Remove the escape hatch**: replace `any`/`as` with a narrowed type, a
   discriminated union or a runtime check. Artifact: diff.
3. **Run the compiler** with the project's strict settings. Artifact: output.
4. **Check the emitted surface** for libraries: `.d.ts` diff. Artifact:
   declaration diff.
5. **Run the tests** that exercise the behaviour. Artifact: green output.

## Output

A type diff plus `tsc --noEmit` output, and for published packages the
declaration diff. No new `any` without a comment naming the reason.

## Failure

- **The type is hard to express.** Model the states as a union; if it still
  resists, the runtime data has an unstated shape — add a parser.
- **A dependency's types are wrong.** Isolate the lie in one adapter with a
  runtime check; do not scatter casts.
- **Strict mode is off.** Turning it on is its own change; record the count of
  new errors before deciding.

## Rationalizations

| Excuse | Reality |
|---|---|
| "`any` is faster." | It moves the failure to runtime, where it costs more. |
| "The cast is obviously safe." | Then a type guard or a parser can prove it. |
| "Types are documentation." | They are a build-time gate; documentation does not fail builds. |
| "Strict mode breaks too much." | Record the count; the number is the debt, not the argument. |

## Tracking

- **OpenChamber present:** compiler output on the delivery note.
- **OpenCode or files:** evidence line with the command and digest.
- Ladder: `resources/tracking.md`.
- **vstack adapter present:** `vstack_gate run typecheck` proves the surface;
  otherwise the `tsc --noEmit` log is the artifact.

## Verification

```bash
npx tsc --noEmit
```
