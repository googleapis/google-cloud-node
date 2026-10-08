// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import assert from 'assert';
import {describe, it, afterEach} from 'mocha';
import Module from 'module';

interface ModuleWithLoad {
  _load: (this: unknown, request: string, ...args: unknown[]) => unknown;
}

const moduleWithLoad = Module as unknown as ModuleWithLoad;

function loadFreshUtil(): typeof import('../src/util.js') {
  const utilPath = require.resolve('../src/util.js');
  delete require.cache[utilPath];
  return module.require(utilPath);
}

describe('util lazy imports', () => {
  const originalLoad = moduleWithLoad._load;

  afterEach(() => {
    moduleWithLoad._load = originalLoad;
  });

  describe('getMime', () => {
    describe('Promise caching', () => {
      it('should return the identical promise instance for concurrent calls', async () => {
        const util = loadFreshUtil();
        const p1 = util.getMime();
        const p2 = util.getMime();
        assert.strictEqual(p1, p2);

        const [mime1, mime2] = await Promise.all([p1, p2]);
        assert.strictEqual(mime1, mime2);
      });

      it('should return the identical promise instance for sequential calls after resolution', async () => {
        const util = loadFreshUtil();
        const p1 = util.getMime();
        const mime1 = await p1;

        const p2 = util.getMime();
        assert.strictEqual(p2, p1);

        const mime2 = await p2;
        assert.strictEqual(mime2, mime1);
      });

      it('should resolve to a functional mime module with expected methods', async () => {
        const util = loadFreshUtil();
        const mime = await util.getMime();

        assert.ok(mime);
        assert.strictEqual(typeof mime.getType, 'function');
        assert.strictEqual(mime.getType('file.txt'), 'text/plain');
        assert.strictEqual(mime.getType('photo.png'), 'image/png');
        assert.strictEqual(mime.getType('archive.zip'), 'application/zip');
        assert.strictEqual(
          mime.getType('unknown.nonexistentextension123'),
          null
        );
      });
    });

    describe('Error recovery', () => {
      it('should reset the cached promise and allow recovery on subsequent call if import fails', async () => {
        const util = loadFreshUtil();
        let shouldFail = true;

        moduleWithLoad._load = function (
          this: unknown,
          request: string,
          ...args: unknown[]
        ) {
          if (request === 'mime' && shouldFail) {
            throw new Error('Simulated mime import failure');
          }
          return originalLoad.call(this, request, ...args);
        };

        await assert.rejects(
          async () => {
            await util.getMime();
          },
          {
            message: 'Simulated mime import failure',
          }
        );

        // Verify recovery: after error is resolved, next call creates a new promise and succeeds
        shouldFail = false;
        const pRecovered = util.getMime();
        const mimeRecovered = await pRecovered;

        assert.ok(mimeRecovered);
        assert.strictEqual(typeof mimeRecovered.getType, 'function');
        assert.strictEqual(
          mimeRecovered.getType('test.json'),
          'application/json'
        );

        // Subsequent call should now cache and return the recovered promise
        assert.strictEqual(util.getMime(), pRecovered);
      });
    });
  });

  describe('getPLimit', () => {
    describe('Promise caching', () => {
      it('should return the identical promise instance for concurrent calls', async () => {
        const util = loadFreshUtil();
        const p1 = util.getPLimit();
        const p2 = util.getPLimit();
        assert.strictEqual(p1, p2);

        const [pLimit1, pLimit2] = await Promise.all([p1, p2]);
        assert.strictEqual(pLimit1, pLimit2);
      });

      it('should return the identical promise instance for sequential calls after resolution', async () => {
        const util = loadFreshUtil();
        const p1 = util.getPLimit();
        const pLimit1 = await p1;

        const p2 = util.getPLimit();
        assert.strictEqual(p2, p1);

        const pLimit2 = await p2;
        assert.strictEqual(pLimit2, pLimit1);
      });

      it('should resolve to a functional p-limit function that throttles concurrency', async () => {
        const util = loadFreshUtil();
        const pLimit = await util.getPLimit();

        assert.ok(pLimit);
        assert.strictEqual(typeof pLimit, 'function');

        const concurrency = 2;
        const limit = pLimit(concurrency);
        let active = 0;
        let maxActive = 0;

        const runTask = async (durationMs: number) => {
          return limit(async () => {
            active++;
            maxActive = Math.max(maxActive, active);
            await new Promise(resolve => setTimeout(resolve, durationMs));
            active--;
          });
        };

        await Promise.all([
          runTask(20),
          runTask(20),
          runTask(20),
          runTask(20),
          runTask(20),
        ]);

        assert.strictEqual(maxActive, concurrency);
      });
    });

    describe('Error recovery', () => {
      it('should reset the cached promise and allow recovery on subsequent call if import fails', async () => {
        const util = loadFreshUtil();
        let shouldFail = true;

        moduleWithLoad._load = function (
          this: unknown,
          request: string,
          ...args: unknown[]
        ) {
          if (request === 'p-limit' && shouldFail) {
            throw new Error('Simulated p-limit import failure');
          }
          return originalLoad.call(this, request, ...args);
        };

        await assert.rejects(
          async () => {
            await util.getPLimit();
          },
          {
            message: 'Simulated p-limit import failure',
          }
        );

        // Verify recovery: after error is resolved, next call creates a new promise and succeeds
        shouldFail = false;
        const pRecovered = util.getPLimit();
        const pLimitRecovered = await pRecovered;

        assert.ok(pLimitRecovered);
        assert.strictEqual(typeof pLimitRecovered, 'function');

        const limit = pLimitRecovered(1);
        const result = await limit(() => Promise.resolve('recovered'));
        assert.strictEqual(result, 'recovered');

        // Subsequent call should now cache and return the recovered promise
        assert.strictEqual(util.getPLimit(), pRecovered);
      });
    });
  });

  describe('ensureBunGaxiosFetch', () => {
    it('should patch Gaxios _defaultAdapter under Bun and wrap streams/options', async () => {
      const {Readable} = await import('stream');
      const utilModule = loadFreshUtil();
      const hadBun = 'Bun' in globalThis;
      const origFetch = globalThis.fetch;
      const g = globalThis as {Bun?: unknown};
      if (!hadBun) {
        Object.defineProperty(globalThis, 'Bun', {
          value: {},
          configurable: true,
          writable: true,
        });
      }

      try {
        let capturedInit: Record<string, unknown> | undefined;
        globalThis.fetch = (async (_input: unknown, init?: RequestInit) => {
          capturedInit = init as Record<string, unknown> | undefined;
          return new Response(JSON.stringify({ok: true}), {
            status: 200,
            headers: {'content-type': 'application/json'},
          });
        }) as typeof fetch;

        class FakeGaxios {
          defaults: Record<string, unknown> = {};
          async _defaultAdapter(config: Record<string, unknown>) {
            const fetchImpl = config.fetchImplementation as typeof fetch;
            return fetchImpl(
              config.url as string,
              {...config} as unknown as RequestInit
            );
          }
        }

        utilModule.ensureBunGaxiosFetch(
          FakeGaxios as unknown as Parameters<
            typeof utilModule.ensureBunGaxiosFetch
          >[0]
        );
        utilModule.ensureBunGaxiosFetch(
          FakeGaxios as unknown as Parameters<
            typeof utilModule.ensureBunGaxiosFetch
          >[0]
        );
        assert.strictEqual(
          (FakeGaxios as unknown as {__bunPatched?: boolean}).__bunPatched,
          true
        );

        const client = new FakeGaxios();
        const config: Record<string, unknown> = {
          url: 'https://example.com',
          agent: {proxy: new URL('http://proxy.local:8080')},
          cert: 'cert-pem',
          key: 'key-pem',
          body: Readable.from(['hello']),
        };

        const res = (await client._defaultAdapter(config)) as Response;
        assert.strictEqual(config.fetchImplementation, undefined);
        assert.strictEqual(capturedInit?.proxy, 'http://proxy.local:8080/');
        assert.deepStrictEqual(capturedInit?.tls, {
          cert: 'cert-pem',
          key: 'key-pem',
        });
        assert.ok(capturedInit?.body instanceof ReadableStream);
        assert.ok(res.body instanceof Readable);
        assert.deepStrictEqual(await res.json(), {ok: true});

        globalThis.fetch = origFetch;
        const nock = (await import('nock')).default;
        const scope = nock('https://example.com')
          .post('/upload', 'payload')
          .reply(200, {uploaded: true}, {'content-type': 'application/json'});
        const httpRes = (await client._defaultAdapter({
          url: 'https://example.com/upload',
          method: 'POST',
          headers: new Headers({'content-type': 'text/plain'}),
          body: 'payload',
        })) as Response;
        scope.done();
        assert.ok(httpRes.body instanceof Readable);
        assert.deepStrictEqual(await httpRes.json(), {uploaded: true});

        const scope2 = nock('https://example.com')
          .post('/stream', 'stream-data')
          .reply(200, 'raw-bytes', {
            'content-type': 'application/octet-stream',
          });
        const httpRes2 = (await client._defaultAdapter({
          url: new URL('https://example.com/stream'),
          method: 'POST',
          headers: [['content-type', 'text/plain']],
          body: Readable.from(['stream-data']),
        })) as Response;
        scope2.done();
        assert.ok(httpRes2.body instanceof Readable);
        assert.strictEqual((await httpRes2.arrayBuffer()).byteLength, 9);

        const scope3 = nock('https://example.com', {
          reqheaders: {'x-custom-entry': '1'},
        })
          .post('/params', 'a=1')
          .reply(204);
        const polyfillHeaders = {
          entries: () =>
            [
              ['content-type', 'application/x-www-form-urlencoded'],
              ['x-custom-entry', '1'],
            ][Symbol.iterator](),
        };
        const httpRes3 = (await client._defaultAdapter({
          url: 'https://example.com/params',
          method: 'POST',
          headers: polyfillHeaders,
          body: new URLSearchParams({a: '1'}),
        })) as Response;
        scope3.done();
        assert.strictEqual(httpRes3.status, 204);

        const ac = new AbortController();
        ac.abort();
        await assert.rejects(
          client._defaultAdapter({
            url: 'https://example.com/aborted',
            signal: ac.signal,
          }),
          {
            name: 'AbortError',
            message: 'The user aborted a request.',
          }
        );

        globalThis.fetch = (async () => {
          throw Object.assign(new Error('The operation timed out.'), {
            name: 'TimeoutError',
          });
        }) as typeof fetch;
        await assert.rejects(
          client._defaultAdapter({url: 'https://example.com'}),
          {
            name: 'AbortError',
            code: 'ETIMEDOUT',
          }
        );

        globalThis.fetch = (async () => {
          throw {code: 'ECONNRESET', message: 'socket hang up'};
        }) as typeof fetch;
        await assert.rejects(
          client._defaultAdapter({url: 'https://example.com'}),
          {
            code: 'ECONNRESET',
            message: 'socket hang up',
          }
        );
      } finally {
        globalThis.fetch = origFetch;
        if (!hadBun) {
          delete g.Bun;
        }
      }
    });
  });
});
