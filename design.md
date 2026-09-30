# Design Doc: Opt-In Bun Fetch Transport for `@google-cloud/storage`

**Context:** [PR #9458 (bun-runtime/1-test-runner-handwritten-libraries-4)](https://github.com/googleapis/google-cloud-node/pull/9458)  
**Target:** `@google-cloud/storage`, `gaxios`, `teeny-request`

---

## Objective

Provide an opt-in HTTP fetch transport shim in the Bun test runner so `@google-cloud/storage` unit tests can use legacy `nock` mocks while system tests run directly against live Google Cloud endpoints using Bun's native `fetch`.

---

## Background

`@google-cloud/storage` is an HTTP/REST client that executes network operations via `gaxios` and `teeny-request`. In Bun, these libraries default to `globalThis.fetch`, a native C++/Zig implementation that connects directly to OS sockets and bypasses Node's `http` and `https` modules. 

Because our unit test suites rely on `nock` (which monkeypatches Node's `http.ClientRequest`), running Storage unit tests under Bun bypasses `nock` entirely, triggering connection timeouts (`ETIMEOUT fake.local:80`), authentication errors (`invalid_grant`), and failed mock assertions. Conversely, system tests run against live Google Cloud endpoints, where customer applications in production will execute Bun's native `fetch` without shims. Masking native `fetch` during system tests would prevent us from verifying critical production behaviors like chunked streaming uploads, download streams, and TLS negotiation.

---

## Overview

The test runner will run unshimmed using Bun's native `globalThis.fetch` by default. We introduce an explicit `--fetch-shim` flag in `bin/run-test.cjs` that activates `__googleCloudBunFetch` to route `fetch` calls through Node's `http.request` stack specifically for test suites requiring `nock`. This allows Storage unit tests to pass without rewriting legacy mocks, while ensuring system tests validate authentic Bun native `fetch` execution against live services.

---

## Detailed Design

### 1. Test Runner Opt-In Flag (`bin/run-test.cjs`)

`bin/run-test.cjs` inspects CLI arguments for `--fetch-shim` (or `BUN_FETCH_SHIM=true`). By default, the fetch shim is **disabled**:

```javascript
// bin/run-test.cjs
const enableFetchShim = rawArgs.includes('--fetch-shim') || process.env.BUN_FETCH_SHIM === 'true';
const args = rawArgs.filter(a => a !== '--fetch-shim');

if (wantsBunRuntime) {
  process.env.BUN_ENABLE_FETCH_SHIM = enableFetchShim ? 'true' : 'false';
  // ...
}
```

### 2. Transport Shim Gating (`bin/proxyquire-bun-shim.cjs`)

Module cache snapshots (Sections 1 & 2) and `proxyquire` emulation (Section 4) remain active unconditionally for module stubbing. Section 3 (`__googleCloudBunFetch`) is gated behind `BUN_ENABLE_FETCH_SHIM`:

```javascript
// bin/proxyquire-bun-shim.cjs
const enableFetchShim = process.env.BUN_ENABLE_FETCH_SHIM === 'true';

if (enableFetchShim) {
  // ---------------------------------------------------------------------------
  // 3. Nock-Compatible HTTP/HTTPS Fetch Transport (__googleCloudBunFetch)
  // ---------------------------------------------------------------------------
  globalThis.__googleCloudBunFetch = async (url, init = {}) => { ... };

  // Register Bun.plugin for ESM gaxios, Module._extensions for teeny-request,
  // and hook Gaxios.prototype._defaultAdapter
}
```

### 3. Package Script Updates (`handwritten/storage/package.json`)

Unit tests opt into the shim; system tests run untouched:

```json
{
  "scripts": {
    "test": "node ../../bin/run-test.cjs --fetch-shim build/cjs/test",
    "system-test": "node ../../bin/run-test.cjs build/cjs/system-test --timeout 600000 --exit"
  }
}
```

### 4. Storage System Test Gotcha: Kokoro GCE Metadata Mock

`handwritten/storage/system-test/storage.ts` currently uses `nock` to block connections to `http://metadata.google.internal` so Kokoro GCE workers do not use the host VM's service account. Because system tests will run without the fetch shim, native `fetch` will bypass this mock.

**Resolution:** Replace the `nock` call with runtime environment variables:

```typescript
// handwritten/storage/system-test/storage.ts
process.env.GCE_METADATA_HOST = '169.254.169.254.invalid';
process.env.DETECT_GCP_RETRIES = '0';
```

---

## Comparison Matrix

| Aspect | Unit Tests (`pnpm test`) | System Tests (`pnpm system-test`) |
| :--- | :--- | :--- |
| **Command** | `run-test.cjs --fetch-shim` | `run-test.cjs` |
| **HTTP Transport** | `http.request` / `https.request` bridge | Native Bun `globalThis.fetch` |
| **Nock Compatibility** | Supported (`nock` intercepts traffic) | Unsupported (not used in real system tests) |
| **Production Parity** | Tests library logic & Node compatibility | Tests live Bun C++ networking against GCP |

---

## Alternatives Considered

1. **Unconditional Fetch Shim (PR #9458 as written)**: Route all Bun HTTP calls through `http.request`.  
   *Rejected*: Completely masks Bun's native `fetch` in system tests, leaving production networking behavior unverified.
2. **Opt-Out Flag (`--no-fetch-shim`)**: Enable the shim by default and pass an opt-out flag in system tests.  
   *Rejected*: Violates the principle of being native and safe by default; forces system test commands to carry negative flags.
3. **Rewrite Unit Tests to MSW / Fetch Mocks**: Replace `nock` across all test files with a fetch-compatible interceptor.  
   *Rejected*: High implementation cost; requires touching hundreds of test files across multiple repositories.

