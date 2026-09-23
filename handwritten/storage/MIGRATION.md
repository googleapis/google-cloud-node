# Storage v7 to v8 Migration Guide - Gaxios Update

This guide helps you migrate your application from `@google-cloud/storage` v7 to v8, focusing on the architectural and API changes introduced by migrating from `teeny-request`, `retry-request`, and `form-data` to `gaxios` v7 (`StorageTransport`) and native Node.js Web APIs.

---

## Key Breaking Changes for Storage Users

### 1. Minimum Node.js Version (`>=22`) & Dual ESM/CJS Exports

`@google-cloud/storage` v8 requires **Node.js 22 or higher** and ships as a dual ESM and CommonJS package (`"type": "module"` with `exports` conditions for both `import` and `require`).

---

### 2. Response Headers are now `Headers` objects

When you receive a full API response from Storage methods (e.g., via callbacks or promise resolutions that include the response object), the `headers` property of the response is now a standard Web `Headers` instance rather than a plain JavaScript object.

**Before (Storage v7):**

```js
const [retrievedFile, apiResponse] = await file.get();
const contentType = apiResponse.headers['content-type'];
```

**After (Storage v8):**

```js
const [retrievedFile, apiResponse] = await file.get();
// Accessing headers requires the .get() method
const contentType = apiResponse.headers.get('content-type');
```

---

### 3. Passing and Reading Request Headers in Options

If you pass custom headers in options to Storage methods (which extend `GaxiosOptions`), you can still pass plain objects, as the Storage library will convert them to standard `Headers` internally for the request. However, if you read them back from the prepared options or response (`apiResponse.config.headers`), they will be `Headers` objects.

**Before (Storage v7):**

```js
// Reading request headers back from response metadata returned a plain object
const customHeader = apiResponse.config.headers['x-custom-header'];
```

**After (Storage v8):**

```js
// Reading request headers back from response metadata requires .get()
const customHeader = apiResponse.config.headers.get('x-custom-header');
```

> [!WARNING]
> **Header Value Stringification:** Plain JavaScript objects allow passing non-string values (such as arrays or numbers) which are implicitly processed. However, the native `Headers` constructor strictly converts all values to standard string representations. For example, passing an array of values (e.g., `['val1', 'val2']`) will result in a single comma-separated string (e.g., `'val1, val2'`). Ensure you pre-format or verify your header values before passing them to custom options.

---

### 4. URL Resolution (`baseURL` and Native `URL` Objects)

If you are using custom `baseURL` options or passing relative URLs to methods that accept them, resolution now strictly follows the standard native `URL` constructor spec (`new URL(url, baseURL)`). Additionally, `config.url` on prepared request configurations (`GaxiosOptionsPrepared`) is now a native `URL` instance instead of a string.

**Before (Storage v7):**

Using standard path-joining custom resolution:

- `baseURL`: `https://storage.googleapis.com/storage/v1`
- `url`: `/b/my-bucket`
- Resolved URL: `https://storage.googleapis.com/storage/v1/b/my-bucket`

**After (Storage v8):**

Strictly resolved via the standard native `URL` constructor rules (where a leading slash resolves relative to the root of the host):

- `baseURL`: `https://storage.googleapis.com/storage/v1`
- `url`: `/b/my-bucket`
- Resolved URL: `https://storage.googleapis.com/b/my-bucket` (resolves relative to host root, stripping `storage/v1`)

---

### 5. Request Interceptors (`interceptors_` / `interceptors`)

The legacy `teeny-request` interceptor format (`{ request: (reqOpts) => reqOpts }`) has been replaced by Gaxios request interceptors (`GaxiosInterceptor<GaxiosOptionsPrepared>`).

**Before (Storage v7):**

```js
const storage = new Storage({
  interceptors_: [
    {
      request: reqOpts => {
        reqOpts.headers['x-custom'] = 'value';
        return reqOpts;
      },
    },
  ],
});
```

**After (Storage v8):**

```js
const storage = new Storage({
  interceptors_: [
    {
      resolved: async config => {
        config.headers.set('x-custom', 'value');
        return config;
      },
    },
  ],
});
```

---

### 6. Error Objects & Custom Retry Functions (`retryOptions.retryableErrorFn`)

The legacy `retry-request` library and `ApiError` class have been replaced by Gaxios's retry mechanism and `GaxiosError`.

- **Error structure**: Errors passed to `retryOptions.retryableErrorFn(err)` are `GaxiosError` instances where HTTP status is available at `err.response?.status` (or `err.status` / `err.code`), the parsed error body is at `err.response?.data`, and the request configuration is at `err.config`.
- **Idempotency requirement in default retry function**: `RETRYABLE_ERR_FN_DEFAULT(err)` now inspects `err.config` (`isRequestIdempotent(err.config) && isTransientError(err)`). Calling `RETRYABLE_ERR_FN_DEFAULT(err)` without an `err.config` object will return `false`.
- **Retry configuration mapping**: `StorageOptions.retryOptions` (`maxRetries`, `retryDelayMultiplier`, `maxRetryDelay`, `totalTimeout`, `retryableErrorFn`) maps directly to Gaxios `retryConfig` (`retry`, `noResponseRetries`, `retryDelayMultiplier`, `maxRetryDelay`, `totalTimeout`, `shouldRetry`).

**Before (Storage v7):**

```js
const storage = new Storage({
  retryOptions: {
    retryableErrorFn: err => {
      // Legacy ApiError used err.code and err.errors
      return err.code === 502 || err.errors?.some(e => e.reason === 'rateLimitExceeded');
    },
  },
});
```

**After (Storage v8):**

```js
const storage = new Storage({
  retryOptions: {
    retryableErrorFn: err => {
      // GaxiosError provides err.response?.status, err.response?.data, and err.config
      const status = err.response?.status;
      const errors = err.response?.data?.error?.errors || [];
      return status === 502 || errors.some(e => e.reason === 'rateLimitExceeded');
    },
  },
});
```

---

### 7. Multipart Uploads & `FormData` (`form-data` Dependency Removed)

The external `form-data` and `node-fetch` dependencies have been removed in favor of Node.js native Web APIs (`FormData`, `Blob`, `fetch`) and Gaxios multipart options (`GaxiosMultipartOptions`).

1. **V4 Signed POST Policy Uploads (`generateSignedPostPolicyV4`)**:
   Use global `FormData` and `Blob` with native `fetch` instead of the `form-data` npm package.

   **Before (Storage v7):**

   ```js
   const FormData = require('form-data');
   const fetch = require('node-fetch');

   const [policy] = await file.generateSignedPostPolicyV4(options);
   const form = new FormData();
   for (const [k, v] of Object.entries(policy.fields)) form.append(k, v);
   form.append('file', Buffer.from('my-content'));
   await fetch(policy.url, {method: 'POST', body: form, headers: form.getHeaders()});
   ```

   **After (Storage v8):**

   ```js
   const [policy] = await file.generateSignedPostPolicyV4(options);
   const form = new FormData();
   for (const [k, v] of Object.entries(policy.fields)) form.append(k, v);
   form.append('file', new Blob(['my-content']), file.name);
   await fetch(policy.url, {method: 'POST', body: form});
   ```

2. **Low-Level `multipart` Request Option (`StorageRequestOptions.multipart`)**:
   If calling `storageTransport.makeRequest` directly with `multipart`, each part must use `{ headers, content }` (`GaxiosMultipartOptions`) instead of `{ 'Content-Type', body }`.

   **Before (Storage v7):**

   ```js
   multipart: [
     {'Content-Type': 'application/json', body: JSON.stringify(metadata)},
     {'Content-Type': 'text/plain', body: contentStream},
   ]
   ```

   **After (Storage v8):**

   ```js
   multipart: [
     {headers: new Headers({'Content-Type': 'application/json'}), content: JSON.stringify(metadata)},
     {headers: new Headers({'Content-Type': 'text/plain'}), content: contentStream},
   ]
   ```

---

### 8. Custom HTTP Agents (`http.Agent` / `https.Agent`) & Proxies

Legacy `teeny-request` connection pool options (`forever: true`, `pool: { maxSockets }`) are no longer used. In v8, custom HTTP/HTTPS agents and proxies are configured through Gaxios options:

- **Environment variables**: `HTTPS_PROXY`, `HTTP_PROXY`, and `NO_PROXY` are automatically respected by Gaxios.
- **Per-request or custom transport**: Pass `agent` (`http.Agent` / `https.Agent`), `proxy` (`string | URL`), or `noProxy` (`(string | URL | RegExp)[]`) in `StorageRequestOptions`, or provide a pre-configured `gaxiosInstance` (`new Gaxios({ agent, proxy, noProxy })`) to `StorageTransport`.

---

### 9. Low-Level Request Option Renames (`Service` / `ServiceObject` -> `StorageTransport`)

The internal `Service` class (`src/nodejs-common/service.ts`) has been removed and replaced by `StorageTransport`. If your integration calls low-level `request()` or `storageTransport.makeRequest()` directly:

- `uri` is now `url`.
- `qs` is now `queryParameters` (or `params`).
- `json` request body objects should now be passed via `body` (serialized JSON string) or `data`.

---

## Upgrade Instructions

Update your `@google-cloud/storage` dependency to version 8:

```sh
npm install @google-cloud/storage@latest
```

## Troubleshooting

- **`TypeError: apiResponse.headers.get is not a function` or `undefined` header values**: Ensure you use `apiResponse.headers.get('header-name')` instead of bracket notation (`apiResponse.headers['header-name']`).
- **Custom `retryableErrorFn` not triggering**: Check `err.response?.status` instead of `err.code` for HTTP status codes, and ensure `err.config` is preserved when delegating to `RETRYABLE_ERR_FN_DEFAULT(err)`.
- **Signed POST Policy (`FormData`) upload errors**: Ensure you pass a native `FormData` instance without manually overriding the `Content-Type` header so `fetch` / `Gaxios` can append the multipart boundary automatically.
