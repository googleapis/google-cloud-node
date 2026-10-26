# Running Google Cloud Node.js Client Libraries on Cloud Run with Bun

## Why `Bun.serve()` Default `idleTimeout: 10` Causes `502 Bad Gateway` on Cloud Run

By default, `Bun.serve()` configures `idleTimeout: 10` (10 seconds). On Google Cloud Run:

1. **Cold Starts & Initial gRPC/Auth Handshakes:** Initializing Application Default Credentials (`google-auth-library`), establishing HTTP/2 gRPC channels (`@grpc/grpc-js`), or executing multi-service RPCs can take longer than 10 seconds before the first HTTP response byte is written—especially under Cloud Run's default request-based CPU allocation when CPU is throttled between or during bursts.
2. **Symptom:** When a request handler takes more than 10 seconds before writing response bytes, `Bun.serve()` aborts the socket and logs:
   ```text
   warn: Bun.serve() timed out a request after 10 seconds. Pass idleTimeout to configure.
   ```
   Cloud Run's frontend proxy observes the closed upstream socket (`ECONNRESET`) and returns **`502 Bad Gateway`** to the caller, even if Cloud Run's service `--timeout` is set to 300 seconds.

---

## Recommended Mitigation

### 1. Configure `idleTimeout: 120` (or up to `255`) and `SIGTERM` Draining in `Bun.serve()`

Always set `idleTimeout: 120` (seconds) explicitly in `Bun.serve()` and register a `SIGTERM` handler so in-flight Google Cloud RPCs drain cleanly during Cloud Run instance scale-down:

```typescript
import {SecretManagerServiceClient} from '@google-cloud/secret-manager';

const secretManager = new SecretManagerServiceClient();

const server = Bun.serve({
  port: Number(process.env.PORT) || 8080,
  // Increase from the 10s default to prevent 502 Bad Gateway / ECONNRESET
  // during cold starts or multi-RPC Google Cloud operations.
  idleTimeout: 120,
  async fetch(req: Request): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === '/healthz') {
      return Response.json({status: 'ok', runtime: `Bun ${Bun.version}`});
    }
    return new Response('OK', {status: 200});
  },
});

process.on('SIGTERM', () => {
  server.stop();
});
```

### 2. Deploy with `--no-cpu-throttling` When Using Background Batching or Async Telemetry

Many Google Cloud client libraries (`@google-cloud/pubsub`, `@google-cloud/logging`, `@google-cloud/spanner`, and OpenTelemetry exporters) flush batches or maintain background gRPC keepalives asynchronously. Pass `--no-cpu-throttling` (CPU always allocated) when deploying to Cloud Run so background timers and gRPC streams are not frozen outside active HTTP request lifecycles:

```bash
gcloud run deploy my-bun-service \
  --image "gcr.io/${PROJECT_ID}/my-bun-service" \
  --region us-central1 \
  --no-cpu-throttling \
  --timeout 300
```
