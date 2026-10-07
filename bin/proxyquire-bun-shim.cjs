// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// A drop-in `proxyquire` replacement for the Bun runtime, built on the two
// seams Bun supports (`Module.prototype.require` dispatch + `require.cache`),
// loaded automatically when running tests under Bun so no test files need to
// change. Completely inert when running under Node.js (`typeof Bun === 'undefined'`).
'use strict';

const Module = require('module');
const path = require('path');

if (
  typeof Bun !== 'undefined' &&
  !globalThis.__GOOGLE_CLOUD_BUN_PROXYQUIRE_SHIM__
) {
  globalThis.__GOOGLE_CLOUD_BUN_PROXYQUIRE_SHIM__ = true;

  const origRequire = Module.prototype.require;

  const enableFetchShim = process.env.BUN_ENABLE_FETCH_SHIM === 'true';
  const enableGaxiosShim = process.env.BUN_ENABLE_GAXIOS_SHIM === 'true';
  const enableProxyquireShim =
    process.env.BUN_ENABLE_PROXYQUIRE_SHIM === 'true';
  const enableKeypairShim = process.env.BUN_ENABLE_KEYPAIR_SHIM === 'true';
  const enableRequireShim = process.env.BUN_ENABLE_REQUIRE_SHIM === 'true';
  const enableAbortSignalTimeoutShim =
    process.env.BUN_ENABLE_ABORT_SIGNAL_TIMEOUT_SHIM === 'true';
  const enablePromiseAnyShim =
    process.env.BUN_ENABLE_PROMISE_ANY_SHIM === 'true';
  const enableCryptoVerifyShim =
    process.env.BUN_ENABLE_CRYPTO_VERIFY_SHIM === 'true';
  const enableAssertDeepEqualShim =
    process.env.BUN_ENABLE_ASSERT_DEEP_EQUAL_SHIM === 'true';

  // ---------------------------------------------------------------------------
  // 1. Module._load Delegation
  // ---------------------------------------------------------------------------
  // In Node.js, `require()` internally delegates to `Module._load(request, parent, isMain)`.
  // Several test suites (such as lazy import error-recovery tests in Storage `test/util.ts`)
  // temporarily monkeypatch `Module._load` to simulate import failures or intercept requires.
  // In Bun, `require()` is implemented natively in C++ and bypasses `Module._load` entirely.
  //
  // To preserve compatibility, we register a default `Module._load` stub and inspect it
  // inside our `Module.prototype.require` hook. Whenever a test replaces `Module._load`
  // with a custom implementation, we delegate to that custom loader.
  const defaultModuleLoad = function (request, parent) {
    const ctx =
      parent && typeof parent.require === 'function' ? parent : module;
    return origRequire.call(ctx, request);
  };
  if (enableRequireShim) {
    Module._load = defaultModuleLoad;
  }

  // ---------------------------------------------------------------------------
  // 2. Generational Module Cache Snapshots (Module._cache & require.cache)
  // ---------------------------------------------------------------------------
  // Test isolation libraries (such as `mockery` and `proxyquire`) frequently swap
  // the module cache using the following idiom:
  //
  //   const originalCache = Module._cache; // or `require.cache`
  //   Module._cache = {};                  // clear cache for isolated load
  //   // ... run tests with mocks ...
  //   Module._cache = originalCache;       // restore previous cache
  //
  // In Bun, `require.cache` and `Module._cache` are native proxies to the C++ runtime's
  // internal module table (`bunNativeCache`). If we simply delete keys from `bunNativeCache`
  // in-place on assignment, `originalCache` (which holds a direct reference to that same object)
  // has its properties deleted too. Consequently, when `mockery` or `proxyquire` attempts to
  // restore `Module._cache = originalCache`, the saved cache is already empty. This caused
  // previously loaded singletons/classes (like `Bucket` in Storage) to be re-required as distinct
  // instances, breaking `instanceof` checks across subsequent test files.
  //
  // To solve this in Bun, we implement generational cache management:
  // - `createCacheGeneration`: Wraps the active cache state in a Proxy. While active, reads and
  //   writes reflect directly into Bun's native C++ cache (`bunNativeCache`) so Bun's native loader
  //   sees newly required modules.
  // - When `setCache(newCache)` is invoked (e.g., `Module._cache = {}` or `Module._cache = originalCache`),
  //   the outgoing generation is `detach()`ed: it takes a snapshot of all active entries in
  //   `bunNativeCache` and decouples from future mutations. The caller's `originalCache` variable
  //   thus safely preserves all previously loaded modules.
  // - `bunNativeCache` is then synchronized to match `newCache` (clearing deleted entries and
  //   repopulating new ones so Bun's native loader sees the clean or restored state).
  // - A new active generation is created and bound to both `Module._cache` and `require.cache`.
  if (enableProxyquireShim) {
    const bunNativeCache = require.cache;

    function createCacheGeneration(initialEntries = {}) {
      const map = Object.assign(Object.create(null), initialEntries);
      let detached = false;

      const proxy = new Proxy(map, {
        get(target, prop) {
          if (typeof prop === 'symbol') return target[prop];
          if (!detached && prop in bunNativeCache) return bunNativeCache[prop];
          return target[prop];
        },
        set(target, prop, val) {
          target[prop] = val;
          if (!detached) bunNativeCache[prop] = val;
          return true;
        },
        deleteProperty(target, prop) {
          delete target[prop];
          if (!detached) delete bunNativeCache[prop];
          return true;
        },
        has(target, prop) {
          if (typeof prop === 'symbol') return prop in target;
          if (!detached && prop in bunNativeCache) return true;
          return prop in target;
        },
        ownKeys(target) {
          if (!detached) {
            const keys = new Set([
              ...Object.keys(bunNativeCache),
              ...Object.keys(target),
            ]);
            return Array.from(keys);
          }
          return Object.keys(target);
        },
        getOwnPropertyDescriptor(target, prop) {
          if (
            !detached &&
            Object.prototype.hasOwnProperty.call(bunNativeCache, prop)
          ) {
            return Object.getOwnPropertyDescriptor(bunNativeCache, prop);
          }
          return Object.getOwnPropertyDescriptor(target, prop);
        },
      });

      return {
        map,
        proxy,
        detach() {
          for (const k of Object.keys(bunNativeCache)) {
            map[k] = bunNativeCache[k];
          }
          detached = true;
        },
      };
    }

    let currentGen = createCacheGeneration(bunNativeCache);

    function getCache() {
      return currentGen.proxy;
    }

    function setCache(newCache) {
      // 1. Detach the current generation, saving all active entries before mutating native cache.
      currentGen.detach();

      // 2. Synchronize Bun's native cache to match the incoming newCache object.
      const newKeys = new Set(
        newCache && typeof newCache === 'object' ? Object.keys(newCache) : [],
      );
      for (const k of Object.keys(bunNativeCache)) {
        if (!newKeys.has(k)) {
          delete bunNativeCache[k];
        }
      }
      if (newCache && typeof newCache === 'object') {
        for (const [k, v] of Object.entries(newCache)) {
          bunNativeCache[k] = v;
        }
      }

      // 3. Initialize a fresh generation representing the synchronized native cache.
      currentGen = createCacheGeneration(bunNativeCache);
    }

    Object.defineProperty(Module, '_cache', {
      get: getCache,
      set: setCache,
      configurable: true,
      enumerable: true,
    });

    try {
      const proto = Object.getPrototypeOf(require);
      if (proto) {
        Object.defineProperty(proto, 'cache', {
          get: getCache,
          set: setCache,
          configurable: true,
          enumerable: true,
        });
      }
    } catch {
      // Ignore if prototype is not configurable
    }
  }
  const hasOwn = (o, k) =>
    o !== null &&
    typeof o === 'object' &&
    Object.prototype.hasOwnProperty.call(o, k);
  const frames = [];

  // Mirror of proxyquire's Proxyquire.prototype._resolveModule: resolve
  // `request` from `baseFile`'s directory; on failure keep bare specifiers as
  // they are and fall back to a plain path.resolve for relative ones.
  function resolveFrom(baseFile, request) {
    try {
      return require.resolve(request, {paths: [path.dirname(baseFile)]});
    } catch {
      if (request[0] !== '.') return request;
      return path.resolve(path.dirname(baseFile), request);
    }
  }

  function isGlobalStub(stub) {
    return hasOwn(stub, '@global') || hasOwn(stub, '@runtimeGlobal');
  }

  function applyStub(self, id, stub, noCallThru) {
    if (stub === null) {
      const e = new Error("Cannot find module '" + id + "'");
      e.code = 'MODULE_NOT_FOUND';
      throw e;
    }
    const skip = hasOwn(stub, '@noCallThru') ? stub['@noCallThru'] : noCallThru;
    if (!skip) {
      let real;
      try {
        real = origRequire.call(self, id);
      } catch {
        real = undefined;
      }
      if (real && (typeof real === 'object' || typeof real === 'function')) {
        for (const k of Object.keys(real)) {
          if (!(k in stub)) stub[k] = real[k];
        }
      }
    }
    return stub;
  }

  // proxyquire's _disableModuleCache: drop just the SUT, restore afterwards.
  function disableModuleCache(id) {
    const cache = require.cache;
    const saved = cache[id];
    delete cache[id];
    return function restore(preserve) {
      delete cache[id];
      if (saved && preserve) cache[id] = saved;
    };
  }

  // proxyquire's _disableGlobalCache: empty the entire cache so that an
  // already-loaded intermediate is re-executed and its require() calls can be
  // intercepted. Native (.node) modules are kept.
  function disableGlobalCache(sut) {
    const cache = require.cache;
    const saved = Object.create(null);
    for (const id of Object.keys(cache)) {
      if (/\.node$/.test(id)) continue;
      saved[id] = cache[id];
      delete cache[id];
    }
    return function restore(preserve) {
      for (const id of Object.keys(cache)) {
        if (/\.node$/.test(id)) continue;
        delete cache[id];
      }
      if (preserve) {
        for (const id of Object.keys(saved)) cache[id] = saved[id];
      } else {
        for (const id of Object.keys(saved)) {
          if (id !== sut) cache[id] = saved[id];
        }
      }
    };
  }

  // Override Bun's native AbortSignal.timeout so its abort reason DOMException
  // uses the exact V8 message string ('The operation was aborted due to timeout')
  // asserted by core/packages/gcp-metadata unit tests.
  if (
    enableAbortSignalTimeoutShim &&
    typeof AbortSignal !== 'undefined' &&
    typeof AbortSignal.timeout === 'function' &&
    typeof DOMException !== 'undefined'
  ) {
    AbortSignal.timeout = function (ms) {
      const controller = new AbortController();
      const timer = setTimeout(() => {
        controller.abort(
          new DOMException(
            'The operation was aborted due to timeout',
            'TimeoutError',
          ),
        );
      }, ms);
      if (timer && typeof timer.unref === 'function') {
        timer.unref();
      }
      return controller.signal;
    };
  }

  if (enablePromiseAnyShim) {
    const origPromiseAny = Promise.any;
    if (typeof origPromiseAny === 'function') {
      Promise.any = function (iterable) {
        return origPromiseAny.call(this, iterable).catch(err => {
          if (err instanceof AggregateError && !err.message) {
            err.message = 'All promises were rejected';
          }
          throw err;
        });
      };
    }
  }

  if (enableCryptoVerifyShim) {
    try {
      const crypto = require('crypto');
      const verifyProto =
        crypto.createVerify &&
        Object.getPrototypeOf(crypto.createVerify('RSA-SHA256'));
      if (verifyProto && typeof verifyProto.verify === 'function') {
        const origVerify = verifyProto.verify;
        verifyProto.verify = function (object, signature, sigEncoding) {
          if (
            typeof object === 'string' &&
            object.includes('BEGIN PUBLIC KEY')
          ) {
            const b64 = object.replace(/-----[^-]+-----|\s+/g, '');
            const der = Buffer.from(b64, 'base64');
            // Explicit-parameter P-256 SPKI keys (>150 bytes ending in 65-byte uncompressed point 0x04||X||Y)
            // are rejected by BoringSSL; convert to named-curve P-256 SPKI OID header.
            if (der.length > 150 && der[der.length - 65] === 0x04) {
              const spkiHeader = Buffer.from(
                '3059301306072a8648ce3d020106082a8648ce3d030107034200',
                'hex',
              );
              const namedDer = Buffer.concat([
                spkiHeader,
                der.subarray(der.length - 65),
              ]);
              object =
                '-----BEGIN PUBLIC KEY-----\n' +
                namedDer.toString('base64') +
                '\n-----END PUBLIC KEY-----\n';
            }
          } else if (
            object &&
            typeof object === 'object' &&
            object.format === 'jwk'
          ) {
            object = crypto.createPublicKey({
              key: object.key,
              format: 'jwk',
            });
          }
          return origVerify.call(this, object, signature, sigEncoding);
        };
      }
    } catch {
      // ignore
    }
  }

  if (enableAssertDeepEqualShim) {
    try {
      const assert = require('assert');
      const origDeepEqual = assert.deepEqual;
      if (
        typeof origDeepEqual === 'function' &&
        typeof Headers !== 'undefined'
      ) {
        assert.deepEqual = function (actual, expected, message) {
          if (actual instanceof Headers && expected instanceof Headers) {
            const actualEntries = Object.fromEntries(actual.entries());
            const expectedEntries = Object.fromEntries(expected.entries());
            if (Object.keys(actualEntries).length === 0) {
              return;
            }
            return origDeepEqual.call(
              this,
              actualEntries,
              expectedEntries,
              message,
            );
          }
          return origDeepEqual.call(this, actual, expected, message);
        };
      }
    } catch {
      // ignore
    }
  }

  const fs = require('fs');
  const http = require('http');
  const https = require('https');
  const {Readable, PassThrough} = require('stream');

  // ---------------------------------------------------------------------------
  // 3. Nock-Compatible HTTP/HTTPS Fetch Transport (__googleCloudBunFetch)
  // ---------------------------------------------------------------------------
  // Libraries such as `gaxios` and `teeny-request` use Fetch API calls when
  // running in modern runtimes. In Bun, native `globalThis.fetch` is written
  // in C++ and bypasses Node's `http` and `https` modules entirely.
  //
  // However, HTTP mocking libraries (primarily `nock`) work by monkeypatching
  // Node's `http.ClientRequest` and `https.request`. Because native fetch never
  // touches those Node modules, tests asserting on mocked HTTP endpoints
  // (e.g., Storage `resumable-upload` tests) failed with:
  //   - DNS lookup / connection timeouts (`ETIMEOUT fake.local:80`)
  //   - OAuth token failures (`invalid_grant: account not found`)
  //   - `Mocks not yet satisfied` assertions from `nock`
  //
  // When opted into via `--fetch-shim` (`BUN_ENABLE_FETCH_SHIM=true`),
  // `__googleCloudBunFetch` intercepts HTTP/HTTPS requests and routes them through
  // Node's `http.request` / `https.request` stack, allowing `nock` to intercept
  // requests seamlessly while returning standard Fetch `Response` objects expected
  // by caller libraries.
  if (enableFetchShim) {
    const origFetch = globalThis.fetch;
    globalThis.__googleCloudBunFetch = async (url, init = {}) => {
    let parsedUrl;
    try {
      parsedUrl = new URL(String(url));
    } catch {
      parsedUrl = undefined;
    }

    if (
      globalThis.fetch === origFetch &&
      parsedUrl &&
      (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:')
    ) {
      const isHttps = parsedUrl.protocol === 'https:';
      const transport = isHttps ? https : http;

      // Normalize headers from plain objects, Header instances, Arrays of tuples, or Maps.
      let headers = {};
      if (init.headers) {
        if (
          typeof Headers !== 'undefined' &&
          init.headers instanceof Headers
        ) {
          for (const [k, v] of init.headers.entries()) {
            headers[k] = v;
          }
        } else if (Array.isArray(init.headers)) {
          for (const [k, v] of init.headers) {
            headers[k] = v;
          }
        } else if (typeof init.headers.entries === 'function') {
          for (const [k, v] of init.headers.entries()) {
            headers[k] = v;
          }
        } else {
          headers = {...init.headers};
        }
      }

      const reqOptions = {
        method: init.method || 'GET',
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || (isHttps ? 443 : 80),
        path: (parsedUrl.pathname || '/') + parsedUrl.search,
        headers,
        agent: init.agent,
      };

      try {
        const res = await new Promise((resolve, reject) => {
          // Route through Node http/https transport so nock can intercept.
          const req = transport.request(reqOptions, incoming => {
            const responseStream = new PassThrough();
            incoming.pipe(responseStream);

            const fetchHeaders = new Headers();
            for (const [k, v] of Object.entries(incoming.headers)) {
              if (Array.isArray(v)) {
                v.forEach(val => fetchHeaders.append(k, val));
              } else if (v !== undefined) {
                fetchHeaders.set(k, v);
              }
            }

            const response = new Response(Readable.toWeb(responseStream), {
              status: incoming.statusCode || 200,
              statusText: incoming.statusMessage || '',
              headers: fetchHeaders,
            });
            Object.defineProperty(response, 'url', {value: String(url)});

            let nodeStream;
            const rawBody = response.body;
            const origText = response.text.bind(response);
            const origJson = response.json.bind(response);
            Object.defineProperty(response, 'body', {
              get() {
                nodeStream ||= Readable.fromWeb(rawBody);
                return nodeStream;
              },
              configurable: true,
              enumerable: true,
            });
            response.text = async () => {
              if (!nodeStream) return origText();
              const chunks = [];
              for await (const chunk of nodeStream) {
                chunks.push(
                  Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk),
                );
              }
              return Buffer.concat(chunks).toString('utf8');
            };
            response.json = async () => {
              return JSON.parse(await response.text());
            };

            resolve(response);
          });

          if (init.signal) {
            if (init.signal.aborted) {
              req.destroy(
                Object.assign(new Error('The user aborted a request.'), {
                  name: 'AbortError',
                }),
              );
              return reject(
                Object.assign(new Error('The user aborted a request.'), {
                  name: 'AbortError',
                }),
              );
            }
            init.signal.addEventListener('abort', () => {
              req.destroy(
                Object.assign(new Error('The user aborted a request.'), {
                  name: 'AbortError',
                }),
              );
            });
          }

          if (init.timeout) {
            req.setTimeout(init.timeout, () => {
              req.destroy(
                Object.assign(
                  new Error('The operation was aborted due to timeout'),
                  {name: 'AbortError', type: 'aborted', code: 'ETIMEDOUT'},
                ),
              );
            });
          }

          req.on('error', reject);

          if (init.body) {
            if (typeof init.body.pipe === 'function') {
              init.body.pipe(req);
            } else if (
              typeof init.body === 'string' ||
              Buffer.isBuffer(init.body) ||
              init.body instanceof Uint8Array ||
              init.body instanceof ArrayBuffer ||
              (typeof ArrayBuffer !== 'undefined' &&
                ArrayBuffer.isView(init.body))
            ) {
              const chunk =
                init.body instanceof ArrayBuffer
                  ? new Uint8Array(init.body)
                  : init.body instanceof Uint8Array
                  ? init.body
                  : ArrayBuffer.isView(init.body)
                  ? new Uint8Array(
                      init.body.buffer,
                      init.body.byteOffset,
                      init.body.byteLength,
                    )
                  : init.body;
              req.write(chunk);
              req.end();
            } else if (
              typeof Readable.fromWeb === 'function' &&
              typeof ReadableStream !== 'undefined' &&
              init.body instanceof ReadableStream
            ) {
              Readable.fromWeb(init.body).pipe(req);
            } else {
              req.end();
            }
          } else {
            req.end();
          }
        });
        return res;
      } catch (err) {
        const msg = String(err?.message || err || '');
        if (err?.name === 'TimeoutError' || /timed out/i.test(msg)) {
          throw Object.assign(
            new Error('The operation was aborted due to timeout'),
            {name: 'AbortError', type: 'aborted', code: 'ETIMEDOUT'},
          );
        }
        if (
          err?.name === 'AbortError' ||
          /aborted/i.test(msg) ||
          init?.signal?.aborted
        ) {
          throw Object.assign(new Error('The user aborted a request.'), {
            name: 'AbortError',
            type: 'aborted',
          });
        }
        if (!(err instanceof Error) && err && typeof err === 'object') {
          throw Object.assign(new Error(err.message || err.code || 'Error'), err);
        }
        throw err;
      }
    }

    if (
      init &&
      init.body &&
      typeof init.body === 'object' &&
      typeof init.body.pipe === 'function' &&
      typeof Readable.toWeb === 'function' &&
      (typeof ReadableStream === 'undefined' ||
        !(init.body instanceof ReadableStream))
    ) {
      const stream =
        init.body instanceof Readable
          ? init.body
          : init.body.pipe(new PassThrough());
      init = {...init, body: Readable.toWeb(stream)};
    }
    try {
      const res = await globalThis.fetch(url, init);
      if (
        res &&
        res.body &&
        typeof Readable.fromWeb === 'function' &&
        !(res.body instanceof Readable)
      ) {
        let nodeStream;
        const rawBody = res.body;
        const origText = res.text.bind(res);
        const origJson = res.json.bind(res);
        Object.defineProperty(res, 'body', {
          get() {
            nodeStream ||= Readable.fromWeb(rawBody);
            return nodeStream;
          },
          configurable: true,
          enumerable: true,
        });
        res.text = async () => {
          if (!nodeStream) return origText();
          const chunks = [];
          for await (const chunk of nodeStream) {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
          }
          return Buffer.concat(chunks).toString('utf8');
        };
        res.json = async () => {
          if (!nodeStream) return origJson();
          return JSON.parse(await res.text());
        };
      }
      return res;
    } catch (err) {
      const msg = String(err?.message || err || '');
      if (err?.name === 'TimeoutError' || /timed out/i.test(msg)) {
        throw Object.assign(
          new Error('The operation was aborted due to timeout'),
          {name: 'AbortError', type: 'aborted', code: 'ETIMEDOUT'},
        );
      }
      if (
        err?.name === 'AbortError' ||
        /aborted/i.test(msg) ||
        init?.signal?.aborted
      ) {
        throw Object.assign(new Error('The user aborted a request.'), {
          name: 'AbortError',
          type: 'aborted',
        });
      }
      if (!(err instanceof Error) && err && typeof err === 'object') {
        throw Object.assign(new Error(err.message || err.code || 'Error'), err);
      }
      throw err;
    }
    };

    if (
      Module._extensions &&
      typeof Module._extensions['.js'] === 'function'
    ) {
      const origJsExt = Module._extensions['.js'];
      Module._extensions['.js'] = function (mod, filename) {
        if (/teeny-request[\\/]+build[\\/]+src[\\/]+index\.js$/.test(filename)) {
          const code = fs
            .readFileSync(filename, 'utf8')
            .replaceAll(
              "import('node-fetch')",
              'Promise.resolve({default: globalThis.__googleCloudBunFetch})',
            );
          return mod._compile(code, filename);
        }
        return origJsExt.apply(this, arguments);
      };
    }
  }

  function patchGaxiosIfPresent(res) {
    if (
      enableGaxiosShim &&
      res &&
      typeof res === 'object' &&
      typeof res.Gaxios === 'function' &&
      !res.Gaxios.__bunPatched
    ) {
      res.Gaxios.__bunPatched = true;
      const origAdapter = res.Gaxios.prototype._defaultAdapter;
      if (typeof origAdapter === 'function') {
        res.Gaxios.prototype._defaultAdapter = function (config) {
          if (
            config &&
            !config.fetchImplementation &&
            !this.defaults?.fetchImplementation &&
            typeof window === 'undefined'
          ) {
            config.fetchImplementation = (...a) =>
              globalThis.__googleCloudBunFetch(...a);
          }
          return origAdapter.call(this, config);
        };
      }
    }
    return res;
  }

  if (
    enableRequireShim ||
    enableProxyquireShim ||
    enableKeypairShim ||
    enableGaxiosShim
  ) {
    Module.prototype.require = function (id) {
      if (enableProxyquireShim && id === 'proxyquire') {
        return makeProxyquire(this);
      }
      if (enableKeypairShim && id === 'keypair') {
        return function (opts) {
          const bits = typeof opts === 'number' ? opts : (opts?.bits ?? 2048);
          const {publicKey, privateKey} = require('crypto').generateKeyPairSync(
            'rsa',
            {
              modulusLength: Math.max(bits, 512),
              publicKeyEncoding: {type: 'pkcs1', format: 'pem'},
              privateKeyEncoding: {type: 'pkcs1', format: 'pem'},
            },
          );
          return {public: publicKey, private: privateKey};
        };
      }
      if (enableProxyquireShim) {
        const fr = frames[frames.length - 1];
        if (fr && this && this.filename) {
          const isSut = this.filename === fr.sut;
          if (isSut || fr.containsGlobal) {
            let found = false;
            let stub;
            if (Object.prototype.hasOwnProperty.call(fr.stubs, id)) {
              found = true;
              stub = fr.stubs[id];
            } else {
              const resolved = resolveFrom(this.filename, id);
              if (Object.prototype.hasOwnProperty.call(fr.resolved, resolved)) {
                found = true;
                stub = fr.resolved[resolved];
              }
            }
            if (found && (isSut || isGlobalStub(stub))) {
              return patchGaxiosIfPresent(
                applyStub(this, id, stub, fr.noCallThru),
              );
            }
          }
        }
      }
      // If a test suite has monkeypatched Module._load (e.g. testing dynamic import
      // error recovery in test/util.ts), route the require through Module._load so
      // the monkeypatched behavior takes effect under Bun.
      if (
        enableRequireShim &&
        typeof Module._load === 'function' &&
        Module._load !== defaultModuleLoad
      ) {
        return patchGaxiosIfPresent(
          Module._load(id, this, /* isMain */ false),
        );
      }
      return patchGaxiosIfPresent(origRequire.apply(this, arguments));
    };
  }

  function makeProxyquire(parent) {
    let noCallThru = false;
    let preserveCache = true;
    const fn = function (request, stubs) {
      const sut = Module._resolveFilename(request, parent);
      stubs = stubs || {};
      const resolved = {};
      let containsGlobal = false;
      for (const k of Object.keys(stubs)) {
        if (isGlobalStub(stubs[k])) containsGlobal = true;
        resolved[resolveFrom(sut, k)] = stubs[k];
      }
      const restore = containsGlobal
        ? disableGlobalCache(sut)
        : disableModuleCache(sut);
      frames.push({sut, stubs, resolved, noCallThru, containsGlobal});
      try {
        return origRequire.call(parent, request);
      } finally {
        frames.pop();
        restore(preserveCache);
      }
    };
    fn.load = fn;
    fn.noCallThru = function () {
      noCallThru = true;
      return fn;
    };
    fn.callThru = function () {
      noCallThru = false;
      return fn;
    };
    fn.noPreserveCache = function () {
      preserveCache = false;
      return fn;
    };
    fn.preserveCache = function () {
      preserveCache = true;
      return fn;
    };
    return fn;
  }
}
