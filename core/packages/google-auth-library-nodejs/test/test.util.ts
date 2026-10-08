// Copyright 2023 Google LLC
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

import {strict as assert} from 'assert';
import {Gaxios, GaxiosOptions} from 'gaxios';
import * as sinon from 'sinon';
import {Readable} from 'stream';

import {
  ensureBunGaxiosFetch,
  isValidFile,
  LRUCache,
  removeUndefinedValuesInObject,
} from '../src/util';
import {TestUtils} from './utils';

describe('util', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('LRUCache', () => {
    it('should set and get a cached item', () => {
      const expected = 'value';
      const lru = new LRUCache({capacity: 5});
      lru.set('sample', expected);

      assert.equal(lru.get('sample'), expected);
    });

    it('should evict oldest items when over capacity', () => {
      const capacity = 5;
      const overCapacity = 2;

      const lru = new LRUCache({capacity});

      for (let i = 0; i < capacity + overCapacity; i++) {
        lru.set(`${i}`, i);
      }

      // the first few shouldn't be there
      for (let i = 0; i < overCapacity; i++) {
        assert.equal(lru.get(`${i}`), undefined);
      }

      // the rest should be there
      for (let i = overCapacity; i < capacity + overCapacity; i++) {
        assert.equal(lru.get(`${i}`), i);
      }
    });

    it('should evict items older than a supplied `maxAge`', async () => {
      const maxAge = 50;

      sandbox.clock = TestUtils.useFakeTimers(sandbox);

      const lru = new LRUCache({capacity: 5, maxAge});

      lru.set('first', 1);
      lru.set('second', 2);

      // back to the future 🏎️
      sandbox.clock.tick(maxAge + 1);

      // just set, so should be fine
      lru.set('third', 3);
      assert.equal(lru.get('third'), 3);

      // these are too old
      assert.equal(lru.get('first'), undefined);
      assert.equal(lru.get('second'), undefined);
    });
  });

  describe('isValidFilePath', () => {
    it('should return true when valid file path', async () => {
      const isValidPath = await isValidFile('./test/fixtures/empty.json');
      assert.equal(isValidPath, true);
    });

    it('should return false when invalid file path', async () => {
      const isValidPath = await isValidFile('abc/pqr');
      assert.equal(isValidPath, false);
    });
  });
});

describe('util removeUndefinedValuesInObject', () => {
  it('remove undefined type values in object', () => {
    const object: {[key: string]: unknown} = {
      undefined: undefined,
      number: 1,
    };
    assert.deepEqual(removeUndefinedValuesInObject(object), {
      number: 1,
    });
  });
  it('remove undefined string values in object', () => {
    const object: {[key: string]: unknown} = {
      undefined: 'undefined',
      number: 1,
    };
    assert.deepEqual(removeUndefinedValuesInObject(object), {
      number: 1,
    });
  });
});

describe('ensureBunGaxiosFetch', () => {
  it('patches Gaxios _defaultAdapter under Bun and wraps streams/options', async () => {
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
        defaults: GaxiosOptions = {};
        async _defaultAdapter(config: GaxiosOptions) {
          const fetchImpl = config.fetchImplementation!;
          return fetchImpl(
            config.url as string,
            {...config} as unknown as RequestInit,
          );
        }
      }

      ensureBunGaxiosFetch(FakeGaxios as unknown as typeof Gaxios);
      ensureBunGaxiosFetch(FakeGaxios as unknown as typeof Gaxios);
      assert.equal(
        (FakeGaxios as unknown as {__bunPatched?: boolean}).__bunPatched,
        true,
      );

      const client = new FakeGaxios();
      const config = {
        url: 'https://example.com',
        agent: {proxy: new URL('http://proxy.local:8080')},
        cert: 'cert-pem',
        key: 'key-pem',
        body: Readable.from(['hello']),
      } as unknown as GaxiosOptions;

      const res = (await client._defaultAdapter(config)) as Response;
      assert.equal(config.fetchImplementation, undefined);
      assert.equal(capturedInit?.proxy, 'http://proxy.local:8080/');
      assert.deepEqual(capturedInit?.tls, {cert: 'cert-pem', key: 'key-pem'});
      assert.ok(capturedInit?.body instanceof ReadableStream);
      assert.ok(res.body instanceof Readable);
      assert.deepEqual(await res.json(), {ok: true});

      const byteReadable = new Readable({
        read() {
          this.push(Buffer.from('raw'));
          this.push(null);
        },
      });
      const res2 = (await client._defaultAdapter({
        url: 'https://example.com',
        body: byteReadable,
      } as unknown as GaxiosOptions)) as Response;
      assert.ok(res2.body instanceof Readable);
      assert.equal((await res2.arrayBuffer()).byteLength > 0, true);

      const res3 = (await client._defaultAdapter({
        url: 'https://example.com',
      })) as Response;
      assert.ok(res3.body instanceof Readable);
      assert.equal((await res3.blob()).size > 0, true);

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
        },
      );

      globalThis.fetch = (async () => {
        throw Object.assign(new Error('The operation was aborted.'), {
          name: 'AbortError',
        });
      }) as typeof fetch;
      await assert.rejects(
        client._defaultAdapter({url: 'https://example.com'}),
        {
          name: 'AbortError',
          message: 'The user aborted a request.',
        },
      );

      globalThis.fetch = (async () => {
        throw {code: 'ECONNRESET', message: 'socket hang up'};
      }) as typeof fetch;
      await assert.rejects(
        client._defaultAdapter({url: 'https://example.com'}),
        {
          code: 'ECONNRESET',
          message: 'socket hang up',
        },
      );
    } finally {
      globalThis.fetch = origFetch;
      if (!hadBun) {
        delete g.Bun;
      }
    }
  });
});
