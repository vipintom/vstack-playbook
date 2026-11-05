FROM node:22-bookworm-slim

ENV VSTACK_TEST_ENV=docker \
    PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH \
    COREPACK_ENABLE_DOWNLOAD_PROMPT=0 \
    CI=1

RUN apt-get update \
 && apt-get install -y --no-install-recommends git ca-certificates curl \
 && rm -rf /var/lib/apt/lists/* \
 && npm install -g pnpm@9 \
 && mkdir -p /pnpm && chown -R node:node /pnpm

RUN useradd -m -s /bin/bash tester || true

WORKDIR /work

USER tester

CMD ["sleep", "infinity"]
