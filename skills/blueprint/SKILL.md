---
name: blueprint
description: Use when an accepted design must become concrete interfaces, files and signatures that an implementer can follow without re-deciding; not for choosing the design (design) or for ordering the work (plan).
tier: design
rigor: standard
status: stable
harness: [knowledge]
pairs-with: [design, plan, tdd]
---

# blueprint

Expand a design into the shapes code will take: modules, exported names,
signatures, data types, files touched. The implementer should never have to
invent an interface that the design already implies.

## When to use

- Design is agreed and someone else will implement it.
- The change introduces new modules or public types.
- Multiple implementers must agree on names and signatures.
- A type or schema change ripples through several files.
- You want the compiler to catch integration mistakes early.

Near misses:

- The boundaries are still open → `design`.
- The work is a single-file change → write the signature inline and start.
- The task is to test an existing interface → `coverage` or `tdd`.

## Modes

| Mode | Output |
|---|---|
| Sketch | exported names and signatures only |
| Full | file map, types, signatures, error paths, test seams |
| Contract | Full plus generated types or a schema that enforces it |

## Steps

1. **Read the design record.** If a boundary is missing, stop and resolve it
   in `design`; do not invent it here. Artifact: referenced design.
2. **List files and owners.** New, modified, deleted; one line each. Artifact:
   file map.
3. **Write the exported surface.** Names, parameters, return types, thrown or
   returned errors. Artifact: interface block.
4. **Write the internal seams** that tests will need: injectable clock, client
   or store. Artifact: seam list.
5. **Name the invariants** the implementation must preserve, as assertions or
   types rather than comments. Artifact: invariant list.
6. **Check it compiles as a sketch** — types only, bodies throwing. Artifact:
   type-check output.
7. **Hand to `plan`.** Each blueprint surface becomes one task. Artifact:
   blueprint record.

## Output

```ts
// files: src/session/{store.ts,create.ts,index.ts}
export interface SessionStore { put(s: Session): Promise<void>; get(id: string): Promise<Session | null>; }
export function createSession(deps: { store: SessionStore; now: () => Date }, userId: string): Promise<Session>;
// invariant: expiresAt = now + 30m, never mutated after issue
```

## Failure

- **The design is too vague to type.** Return to `design`; naming the missing
  decision is the deliverable.
- **The types need a decision the design did not make.** Record it as a design
  amendment, not a silent choice.
- **The sketch cannot type-check.** Fix it now; the compiler is the cheapest
  reviewer available.

## Rationalizations

| Excuse | Reality |
|---|---|
| "The implementer can choose names." | Then two modules will disagree and someone writes an adapter. |
| "Types are bureaucracy." | Types are the only contract that fails at build time. |
| "I'll design it while coding." | That is how interfaces become accidental. |
| "The sketch is throwaway." | It is the cheapest artifact in the delivery; keep it. |

## Tracking

- **OpenChamber present:** blueprint on the delivery note; tasks added with
  `focus_add` for the first three.
- **OpenCode or files:** `docs/deliveries/<id>.md` under "Blueprint".
- Ladder: `resources/tracking.md`.
