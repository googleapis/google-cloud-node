# Google Cloud Node.js Client Libraries — Bun Runtime Guide

Google Cloud Node.js client libraries (`@google-cloud/*`, `google-gax`, `google-auth-library`, `gaxios`, and `gcp-metadata`) support the **[Bun](https://bun.sh/) runtime** (`Bun >= 1.3.x`, verified on `Bun 1.4.2`) across Google Cloud Run, Google Kubernetes Engine (GKE), Google Compute Engine (GCE), Firebase Hosting + Cloud Run, and local developer workstations.

---

## 1. Minimum Required Package Versions for Bun

Ensure your `bun.lock` / `package.json` resolves at least the following minimum versions so all Bun-specific fetch, stream, timeout, socket error, and TypeScript declaration fixes are active:

| Package | Minimum Version | Key Bun Compatibility Fixes Included |
| :--- | :--- | :--- |
| `gaxios` | `>= 8.3.1` | Preserves Node `http.Agent`/`https.Agent`, proxy routing, Node `stream.Readable` request/response streams (`node:http`/`node:https` adapter), `AbortSignal.timeout()` (`TimeoutError`), and narrows `FetchCompliance` for `@types/bun` |
| `gcp-metadata` | `>= 9.2.2` | Backfills `Promise.any` empty `AggregateError.message` in JavaScriptCore and suppresses spurious `MetadataLookupWarning` for Bun's `ConnectionRefused` / `FailedToOpenSocket` codes outside GCP |
| `google-auth-library` | `>= 11.3.1` | Preserves custom `transporter` agents/streams and requires `gcp-metadata >= 9.2.2` and `gaxios >= 8.3.1` |
| `teeny-request` | `>= 11.1.1` | Converts Web `ReadableStream` bodies under Bun and honours custom `http.Agent` / proxy options |
| `googleapis-common` | `>= 7.2.0` | Compatible with `gaxios` stream and fetch compliance types |
| `google-gax` | `>= 6.13.0` | gRPC (`@grpc/grpc-js`) over HTTP/2 and HTTP/1.1 REST fallback (`fallback: 'rest'`), including `StreamArrayParser._destroy` cancellation error suppression |
| `@google-cloud/storage` | `>= 8.4.0` | Streaming uploads (`createWriteStream`) and downloads (`createReadStream`) with `teeny-request >= 11.1.1` and `gaxios >= 8.3.1` |
| `@google-cloud/spanner` | `>= 9.1.1` | Uses `AsyncLocalStorageContextManager` instead of `AsyncHooksContextManager` so OpenTelemetry active span context propagates across `async`/`await` in Bun |
| `@google-cloud/bigtable` | `>= 7.5.1` | Uses `ReadonlyMap` for `EncodedKeyMap` so TypeScript compilation succeeds alongside `@types/bun` (`ESNext` `Map.prototype.getOrInsert`) |

---

## 2. Client Library Compatibility Matrix

| Category | Package(s) | Bun Support Status | Notes |
| :--- | :--- | :--- | :--- |
| **GAPIC Generated Libraries** | All `packages/*` (`@google-cloud/secret-manager`, `@google-cloud/kms`, `@google-cloud/run`, `@google-cloud/aiplatform`, etc.) | **Supported** | Both default gRPC (`@grpc/grpc-js`) and HTTP/1.1 REST (`fallback: 'rest'`) transports are supported |
| **Handwritten Libraries (Pure JS/TS)** | `@google-cloud/bigquery`, `@google-cloud/bigquery-storage`, `@google-cloud/bigtable`, `@google-cloud/datastore`, `@google-cloud/dns`, `@google-cloud/error-reporting`, `@google-cloud/firestore`, `@google-cloud/logging`, `@google-cloud/logging-bunyan`, `@google-cloud/logging-winston`, `@google-cloud/pubsub`, `@google-cloud/spanner`, `@google-cloud/storage` | **Supported** | Deterministic `bun install` resolution; use `@google-cloud/spanner >= 9.1.1` for OpenTelemetry tracing |
| **Handwritten Libraries (V8 Native Addon)** | `@google-cloud/profiler` | **Unsupported on Bun** | Depends on native C++ addon `pprof` compiled against V8's `v8::CpuProfiler` and `v8::HeapProfiler` C++ APIs (`v8-profiler.h`), which do not exist in Bun's JavaScriptCore (JSC) engine. Use OpenTelemetry exporters instead |

---

## 3. Cloud Run Quickstart (`oven/bun:1`)

### `Dockerfile`

```dockerfile
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

COPY src ./src

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["bun", "run", "src/index.ts"]
```

### `src/index.ts`

> **Important:** `Bun.serve()` defaults to `idleTimeout: 10` (10 seconds). Always configure `idleTimeout: 120` on Cloud Run so cold starts, CPU throttling, or multi-RPC operations taking >10s do not cause `Bun.serve()` to abort the socket and return `502 Bad Gateway` / `ECONNRESET`.

```typescript
import {SecretManagerServiceClient} from '@google-cloud/secret-manager';

const client = new SecretManagerServiceClient();

const server = Bun.serve({
  port: Number(process.env.PORT) || 8080,
  idleTimeout: 120,
  async fetch(req: Request): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === '/healthz') {
      const projectId = await client.getProjectId();
      return Response.json({
        status: 'ok',
        projectId,
        runtime: `Bun ${Bun.version}`,
      });
    }
    return new Response('Not Found', {status: 404});
  },
});

process.on('SIGTERM', () => {
  server.stop();
});
```

### Deploy Command

```bash
gcloud run deploy bun-cloud-service \
  --source . \
  --region us-central1 \
  --no-cpu-throttling \
  --timeout 300
```

---

## 4. Environment-Specific Guides

- **[Google Cloud Run (`Bun.serve()` `idleTimeout` & CPU Throttling)](cloud-run-bun.md)**
- **[Firebase (`oven/bun` on Cloud Run + Firebase Hosting `rewrites`)](firebase-bun.md)**
- **Non-GCP Environments (Local Workstations, On-Premises, External CI):** Upgrade to `gcp-metadata >= 9.2.2` to avoid `MetadataLookupWarning` process warnings, or set `METADATA_SERVER_DETECTION=none` to skip GCE metadata server probing entirely.
