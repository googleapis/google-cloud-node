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
import {GaxiosResponse} from 'gaxios';
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

  before(() => {
    sandbox = sinon.createSandbox();
    storage = new Storage();
    authClient = sandbox.createStubInstance(GoogleAuth);
    gaxiosResponse = {
      config: {},
      data: {},
      status: 200,
      statusText: 'OK',
      headers: [],
      request: {
        responseURL: '',
      },
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

  it('populates x-goog-api-client header (node)', async () => {
    const bucket = storage.bucket('foo-bucket');
    authClient.request = opts => {
      assert.ok(
        /^gl-node\/(?<nodeVersion>[^W]+) gccl\/(?<gccl>[^W]+) gccl-invocation-id\/(?<gcclInvocationId>[^W]+)$/.test(
          opts.headers!['x-goog-api-client'],
        ),
      );
      return Promise.resolve(gaxiosResponse);
    };

    try {
      await bucket.create();
    } catch (err) {
      if (err !== error) throw err;
    }
  });

  it('populates x-goog-api-client header (deno)', async () => {
    const bucket = storage.bucket('foo-bucket');
    authClient.request = opts => {
      assert.ok(
        /^gl-deno\/0.00.0 gccl\/(?<gccl>[^W]+) gccl-invocation-id\/(?<gcclInvocationId>[^W]+)$/.test(
          opts.headers!['x-goog-api-client'],
        ),
      );
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
  });
});
