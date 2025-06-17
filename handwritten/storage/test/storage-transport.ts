// Copyright 2025 Google LLC
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

import {describe} from 'mocha';
import {
  StorageRequestOptions,
  StorageTransport,
} from '../src/storage-transport';
import {GoogleAuth} from 'google-auth-library';
import sinon from 'sinon';
import assert from 'assert';
import {GCCL_GCS_CMD_KEY} from '../src/nodejs-common/util';
import {Gaxios} from 'gaxios';

describe('Storage Transport', () => {
  let sandbox: sinon.SinonSandbox;
  let transport: StorageTransport;
  let authClientStub: GoogleAuth;
  const baseUrl = 'https://storage.googleapis.com';

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    authClientStub = new GoogleAuth();
    sandbox.stub(authClientStub, 'request');
    sandbox.stub(authClientStub, 'getProjectId').resolves('project-id');

    transport = new StorageTransport({
      apiEndpoint: baseUrl,
      baseUrl,
      authClient: authClientStub,
      projectId: 'project-id',
      retryOptions: {
        maxRetries: 3,
        retryDelayMultiplier: 2,
        maxRetryDelay: 100,
        totalTimeout: 1000,
        retryableErrorFn: () => true,
      },
      scopes: ['https://www.googleapis.com/auth/could-platform'],
      packageJson: {name: 'test-package', version: '1.0.0'},
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should make a request with the correct parameters', async () => {
    const response = {data: {success: true}};
    const requestStub = authClientStub.request as sinon.SinonStub;
    requestStub.resolves(response);

    const reqOpts: StorageRequestOptions = {
      url: '/bucket/object',
      queryParameters: {alt: 'json', userProject: 'user-project'},
      headers: {'content-encoding': 'gzip'},
    };
    const _response = await transport.makeRequest(reqOpts);

    assert.strictEqual(requestStub.calledOnce, true);
    const calledWith = requestStub.getCall(0).args[0];
    assert.strictEqual(
      calledWith.url.href,
      `${baseUrl}/bucket/object?alt=json&userProject=user-project`,
    );
    assert.strictEqual(calledWith.headers.get('content-encoding'), 'gzip');
    assert.ok(
      calledWith.headers.get('User-Agent').includes('gcloud-node-storage/'),
    );
    assert.deepStrictEqual(_response, response.data);
  });

  it('should handle retry options correctly', async () => {
    const requestStub = authClientStub.request as sinon.SinonStub;
    requestStub.resolves({});
    const reqOpts: StorageRequestOptions = {
      url: '/bucket/object',
    };
    await transport.makeRequest(reqOpts);

    const calledWith = requestStub.getCall(0).args[0];

    assert.strictEqual(calledWith.retryConfig.retry, 3);
    assert.strictEqual(calledWith.retryConfig.retryDelayMultiplier, 2);
    assert.strictEqual(calledWith.retryConfig.maxRetryDelay, 100);
    assert.strictEqual(calledWith.retryConfig.totalTimeout, 1000);
  });

  it('should append GCCL_GCS_CMD_KEY to x-goog-api-client header if present', async () => {
    const reqOpts: StorageRequestOptions = {
      url: '/bucket/object',
      headers: {'x-goog-api-client': 'base-client'},
      [GCCL_GCS_CMD_KEY]: 'test-key',
    };

    (authClientStub.request as sinon.SinonStub).resolves({data: {}});

    await transport.makeRequest(reqOpts);

    const calledWith = (authClientStub.request as sinon.SinonStub).getCall(0)
      .args[0];

    assert.ok(
      calledWith.headers
        .get('x-goog-api-client')
        .includes('gccl-gcs-cmd/test-key'),
    );
  });

  // TODO: Undo this skip once the gaxios interceptor issue is resolved.
  it.skip('should clear and add interceptors if provided', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const interceptorStub: any = sandbox.stub();
    const reqOpts: StorageRequestOptions = {
      url: '/bucket/object',
      interceptors: [interceptorStub],
    };

    const clearStub = sandbox.stub();
    const addStub = sandbox.stub();
    (authClientStub.request as sinon.SinonStub).resolves({data: {}});
    const transportInstance = new Gaxios();
    transportInstance.interceptors.request.clear = clearStub;
    transportInstance.interceptors.request.add = addStub;

    await transport.makeRequest(reqOpts);

    assert.strictEqual(clearStub.calledOnce, true);
    assert.strictEqual(addStub.calledOnce, true);
    assert.strictEqual(addStub.calledWith(interceptorStub), true);
  });

  it('should initialize a new GoogleAuth instance when authClient is not an instance of GoogleAuth', async () => {
    const mockAuthClient = undefined;

    const options = {
      apiEndpoint: baseUrl,
      baseUrl,
      authClient: mockAuthClient,
      retryOptions: {
        maxRetries: 3,
        retryDelayMultiplier: 2,
        maxRetryDelay: 100,
        totalTimeout: 1000,
        retryableErrorFn: () => true,
      },
      scopes: ['https://www.googleapis.com/auth/could-platform'],
      packageJson: {name: 'test-package', version: '1.0.0'},
      clientOptions: {keyFile: 'path/to/key.json'},
      userAgent: 'custom-agent',
      url: 'http://example..com',
    };
    sandbox.stub(GoogleAuth.prototype, 'request');

    const transport = new StorageTransport(options);
    assert.ok(transport.authClient instanceof GoogleAuth);
  });
});
