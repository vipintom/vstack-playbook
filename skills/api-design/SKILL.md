---
name: api-design
description: Use when a request/response contract, event payload or error shape must be designed or changed for consumers; not for internal module boundaries (design) or type-level mechanics (typescript).
---

# api-design

A contract is a promise with a cost. Name the consumer, the failure modes and
the versioning rule before writing the shape.

## When to use

- A new endpoint, event or RPC is added.
- A field changes type, meaning or nullability.
- Errors need a consistent shape for clients.
- Pagination, filtering or idempotency must be specified.
- A consumer asks for a guarantee the API does not make.

Near misses:

- The boundary is internal → `design`.
- The change must be rolled out → `migration`.
- The question is TypeScript mechanics → `typescript`.

## Steps

1. **Name the consumer and the promise** they need. Artifact: consumer list.
2. **Write the shape** in the transport's language (JSON schema, OpenAPI,
   protobuf) with nullability and units explicit. Artifact: schema.
3. **Specify errors** as a closed set with codes, meanings and retry guidance.
   Artifact: error table.
4. **Decide idempotency and pagination** where writes or lists exist. Artifact:
   decisions.
5. **Check compatibility** against current consumers with `impact`. Artifact:
   compatibility note.
6. **Generate or validate types from the schema**; hand-written duplicates
   drift. Artifact: type output.
7. **Record the contract** next to the spec and date its version. Artifact:
   contract record.

## Output

A schema, an error table, and versioning rule, with types generated from the
schema. A consumer can implement without asking a question.

## Failure

- **A breaking change is needed.** Version it or stage it through `migration`;
  never change meaning in place.
- **The consumer needs a guarantee the system cannot keep.** Say no and offer
  the closest honest guarantee.
- **Errors are unmodelled.** That is the design; a 500 with a string is not an
  error contract.
