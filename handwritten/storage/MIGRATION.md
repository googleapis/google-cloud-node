# Storage v7 to v8 Migration Guide - Gaxios Update

This guide helps you migrate your application from `@google-cloud/storage` v7 to v8, focusing on the changes introduced by updating the underlying HTTP client, `gaxios`, to version 7.

## Key Breaking Changes for Storage Users

### 1. Response Headers are now `Headers` objects

When you receive a full API response from Storage methods (e.g., via callbacks or promise resolutions that include the response object), the `headers` property of the response is now a standard `Headers` object rather than a plain JavaScript object.

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

### 2. Passing Headers in Options

If you pass custom headers in options to Storage methods (which extend `GaxiosOptions`), you can still pass plain objects, as the Storage library will convert them to standard `Headers` internally for the request. However, if you read them back from the prepared options or response, they will be `Headers` objects.

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


### 3. URL Resolution (`baseURL`)

If you are using custom `baseURL` options or passing relative URLs to methods that accept them, be aware that resolution now strictly follows the standard native `URL` constructor spec (`new URL(url, baseURL)`). This can affect how leading slashes in paths resolve.

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


## Upgrade Instructions

Update your `@google-cloud/storage` dependency to version 8:

```sh
npm install @google-cloud/storage@latest
```

## Troubleshooting

- If you encounter `undefined` when accessing headers on the response object, ensure you are using `apiResponse.headers.get('header-name')`.
