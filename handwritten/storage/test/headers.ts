// Copyright 2019 Google LLC
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

import * as assert from 'assert';
import {GoogleAuth} from 'google-auth-library';
import {describe, it} from 'mocha';
import * as sinon from 'sinon';
import {StorageTransport} from '../src/storage-transport.js';
import {Storage} from '../src/storage.js';
import {GaxiosOptionsPrepared, GaxiosResponse} from 'gaxios';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {getPackageJSON} from '../src/package-json-helper.cjs';

const error = Error('not implemented');

describe('headers', () => {
  let authClient: GoogleAuth;
  let sandbox: sinon.SinonSandbox;
  let storage: Storage;
  let storageTransport: StorageTransport;
  let gaxiosResponse: GaxiosResponse;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    storage = new Storage();
    authClient = sandbox.createStubInstance(GoogleAuth);
    gaxiosResponse = {
      config: {} as GaxiosOptionsPrepared,
      data: {id: 'foo-bucket', name: 'foo-bucket'},
      status: 200,
      statusText: 'OK',
      headers: [] as unknown as Headers,
      ok: true,
      type: 'default',
      url: 'your-api-url',
      redirected: false,
      body: null,
      bodyUsed: false,
      arrayBuffer: async () => new ArrayBuffer(0),
      text: async () => '',
      json: async () => ({}),
      clone: () => gaxiosResponse,
      blob: async () => new Blob([]),
      bytes: async () => new Uint8Array(),
      formData: async () => new FormData(),
    };
    storageTransport = new StorageTransport({
      authClient,
      apiEndpoint: 'test',
      baseUrl: 'https://base-url.com',
      scopes: 'scope',
      retryOptions: {},
      packageJson: getPackageJSON(),
    });
    storage.storageTransport = storageTransport;
  });

  afterEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    globalThis.Deno = undefined;
    sandbox.restore();
  });

  function getHeader(headers: unknown, name: string): string | null {
    if (!headers) return null;
    if (typeof (headers as Headers).get === 'function') {
      return (headers as Headers).get(name);
    }
    return (headers as Record<string, string>)[name] || null;
  }

  it('populates x-goog-api-client header (node)', async () => {
    const bucket = storage.bucket('foo-bucket');
    let capturedHeaders: unknown;
    authClient.request = opts => {
      capturedHeaders = opts.headers;
      return Promise.resolve(gaxiosResponse);
    };

    try {
      await bucket.create();
    } catch (err) {
      if (err !== error) throw err;
    }
    const apiClientHeader = getHeader(capturedHeaders, 'x-goog-api-client');
    assert.ok(apiClientHeader);
    const match =
      /^gl-node\/(?<nodeVersion>\S+) gccl\/(?<gccl>\S+) gccl-invocation-id\/(?<gcclInvocationId>\S+)(?: gccl-gcs-cmd\/(?<gcclGcsCmd>\S+))?$/.exec(
        apiClientHeader,
      );
    assert.ok(match);
    const invocationId = match.groups!.gcclInvocationId;
    const idempotencyToken = getHeader(
      capturedHeaders,
      'x-goog-gcs-idempotency-token',
    );
    assert.strictEqual(idempotencyToken, invocationId);
  });

  it('populates x-goog-api-client header (deno)', async () => {
    const bucket = storage.bucket('foo-bucket');
    let capturedHeaders: unknown;
    authClient.request = opts => {
      capturedHeaders = opts.headers;
      return Promise.resolve(gaxiosResponse);
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    globalThis.Deno = {
      version: {
        deno: '0.00.0',
      },
    };
    try {
      await bucket.create();
    } catch (err) {
      if (err !== error) throw err;
    }
    const apiClientHeader = getHeader(capturedHeaders, 'x-goog-api-client');
    assert.ok(apiClientHeader);
    const match =
      /^gl-deno\/0.00.0 gccl\/(?<gccl>\S+) gccl-invocation-id\/(?<gcclInvocationId>\S+)(?: gccl-gcs-cmd\/(?<gcclGcsCmd>\S+))?$/.exec(
        apiClientHeader,
      );
    assert.ok(match);
    const invocationId = match.groups!.gcclInvocationId;
    const idempotencyToken = getHeader(
      capturedHeaders,
      'x-goog-gcs-idempotency-token',
    );
    assert.strictEqual(idempotencyToken, invocationId);
  });

  it('generates unique tokens for different requests', async () => {
    const capturedTokens: string[] = [];
    authClient.request = opts => {
      const token = getHeader(opts.headers, 'x-goog-gcs-idempotency-token');
      if (token) {
        capturedTokens.push(token);
      }
      return Promise.resolve(gaxiosResponse);
    };
    const bucket = storage.bucket('foo-bucket');
    try {
      await bucket.create();
    } catch (err) {
      if (err !== error) throw err;
    }
    try {
      await bucket.create();
    } catch (err) {
      if (err !== error) throw err;
    }
    const token1 = capturedTokens[0];
    const token2 = capturedTokens[1];
    assert.ok(token1);
    assert.ok(token2);
    assert.notStrictEqual(token1, token2);
  });
});
