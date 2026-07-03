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
import {describe, it} from 'mocha';
import proxyquire from 'proxyquire';

const error = Error('not implemented');

interface Request {
  headers: {
    [key: string]: string;
  };
}

describe('headers', () => {
  const requests: Request[] = [];
  const {Storage} = proxyquire('../src', {
    'google-auth-library': {
      GoogleAuth: class {
        async getProjectId() {
          return 'foo-project';
        }
        async getClient() {
          return class {
            async request() {
              return {};
            }
          };
        }
        getCredentials() {
          return {};
        }
        async authorizeRequest(req: Request) {
          requests.push(req);
          throw error;
        }
      },
      '@global': true,
    },
  });

  afterEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    globalThis.Deno = undefined;
  });

  it('populates x-goog-api-client header (node)', async () => {
    const storage = new Storage();
    const bucket = storage.bucket('foo-bucket');
    try {
      await bucket.create();
    } catch (err) {
      if (err !== error) throw err;
    }
    const apiClientHeader = requests[0].headers['x-goog-api-client'];
    const match =
      /^gl-node\/(?<nodeVersion>[^W]+) gccl\/(?<gccl>[^W]+) gccl-invocation-id\/(?<gcclInvocationId>[^W]+)$/.exec(
        apiClientHeader
      );
    assert.ok(match);
    const invocationId = match.groups!.gcclInvocationId;
    const idempotencyToken = requests[0].headers['x-goog-gcs-idempotency-token'];
    assert.strictEqual(idempotencyToken, invocationId);
  });

  it('populates x-goog-api-client header (deno)', async () => {
    const storage = new Storage();
    const bucket = storage.bucket('foo-bucket');
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
    const apiClientHeader = requests[1].headers['x-goog-api-client'];
    const match =
      /^gl-deno\/0.00.0 gccl\/(?<gccl>[^W]+) gccl-invocation-id\/(?<gcclInvocationId>[^W]+)$/.exec(
        apiClientHeader
      );
    assert.ok(match);
    const invocationId = match.groups!.gcclInvocationId;
    const idempotencyToken = requests[1].headers['x-goog-gcs-idempotency-token'];
    assert.strictEqual(idempotencyToken, invocationId);
  });

  it('generates unique tokens for different requests', async () => {
    const storage = new Storage();
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
    const token1 = requests[requests.length - 2].headers['x-goog-gcs-idempotency-token'];
    const token2 = requests[requests.length - 1].headers['x-goog-gcs-idempotency-token'];
    assert.ok(token1);
    assert.ok(token2);
    assert.notStrictEqual(token1, token2);
  });
});
