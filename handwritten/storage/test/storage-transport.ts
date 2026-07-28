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
import {RETRYABLE_ERR_FN_DEFAULT} from '../src/storage';
import {Gaxios, GaxiosResponse} from 'gaxios';

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
        retryableErrorFn: RETRYABLE_ERR_FN_DEFAULT,
      },
      scopes: ['https://www.googleapis.com/auth/could-platform'],
      packageJson: {name: 'test-package', version: '1.0.0'},
    });
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should make a request with the correct parameters', async () => {
    const response = {
      data: {success: true},
      headers: new Map(),
      status: 200,
      statusText: 'OK',
    };
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
    assert.strictEqual(calledWith.headers['content-encoding'], 'gzip');
    const headers = calledWith.headers;
    const userAgent = headers['User-Agent'] || headers['user-agent'];
    assert.ok(userAgent.includes('gcloud-node-storage/'));
    assert.deepStrictEqual(_response, response);
  });

  it('should handle retry options correctly', async () => {
    const requestStub = authClientStub.request as sinon.SinonStub;
    requestStub.resolves({
      data: {},
      headers: new Map(),
    });
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

    (authClientStub.request as sinon.SinonStub).resolves({
      data: {},
      headers: new Map(),
    });

    await transport.makeRequest(reqOpts);

    const calledWith = (authClientStub.request as sinon.SinonStub).getCall(0)
      .args[0];

    assert.ok(
      calledWith.headers['x-goog-api-client'].includes('gccl-gcs-cmd/test-key'),
    );
  });

  it('should clear and add interceptors if provided', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const interceptorStub: any = {
      resolved: sandbox.stub(),
      rejected: sandbox.stub(),
    };
    const reqOpts: StorageRequestOptions = {
      url: '/bucket/object',
      interceptors: [interceptorStub],
    };

    let capturedGaxiosInstance: Gaxios | undefined;
    const gaxiosRequestStub = sandbox.stub(Gaxios.prototype, 'request').callsFake(function(this: Gaxios, opts: any) {
      capturedGaxiosInstance = this;
      return Promise.resolve({ data: {} } as any);
    });

    const requestStub = authClientStub.request as sinon.SinonStub;
    requestStub.resolves({data: {}});

    await transport.makeRequest(reqOpts);

    assert.strictEqual(requestStub.calledOnce, true);
    const calledWith = requestStub.getCall(0).args[0];
    assert.ok(calledWith.adapter);

    // Manually call the adapter (simulating what the real authClient request does)
    await calledWith.adapter({ headers: {} });

    assert.strictEqual(gaxiosRequestStub.calledOnce, true);
    assert.ok(capturedGaxiosInstance);
    const interceptorSet = capturedGaxiosInstance.interceptors.request as any as Set<any>;
    assert.strictEqual(interceptorSet.size, 1);
    const handlers = Array.from(interceptorSet);
    assert.strictEqual(handlers[0].resolved, interceptorStub.resolved);
    assert.strictEqual(handlers[0].rejected, interceptorStub.rejected);
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

  it('should use the provided invocationId in x-goog-api-client header', async () => {
    const invocationId = 'manual-id-5678';
    const mockResponse = {
      config: {},
      data: {},
      headers: {},
      status: 200,
      statusText: 'OK',
      request: {},
    } as unknown as GaxiosResponse;

    const requestStub = transport.authClient.request as sinon.SinonStub;
    requestStub.resolves(mockResponse);

    await transport.makeRequest({
      url: 'http://test',
      invocationId: invocationId,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const headers = requestStub.firstCall.args[0].headers as any;
    const apiClientHeader = headers['x-goog-api-client'];

    assert.ok(apiClientHeader.includes(`gccl-invocation-id/${invocationId}`));
  });

  it('should generate a new random ID if none is provided', async () => {
    const mockResponse = {
      config: {},
      data: {},
      headers: {},
      status: 200,
      statusText: 'OK',
    } as GaxiosResponse;
    const requestStub = transport.authClient.request as sinon.SinonStub;
    requestStub.resolves(mockResponse);

    await transport.makeRequest({url: 'http://test'});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const headers = requestStub.firstCall.args[0].headers as any;
    const apiClientHeader = headers['x-goog-api-client'];

    assert.ok(apiClientHeader.includes('gccl-invocation-id/'));
    const id = apiClientHeader.split('gccl-invocation-id/')[1];
    assert.strictEqual(id.length, 36);
  });

  it('should handle absolute URLs and project validation', async () => {
    const requestStub = authClientStub.request as sinon.SinonStub;
    requestStub.resolves({data: {}, headers: new Map()});

    await transport.makeRequest({url: 'https://my-custom-endpoint.com/v1/b'});
    assert.strictEqual(
      requestStub.getCall(0).args[0].url,
      'https://my-custom-endpoint.com/v1/b',
    );
  });

  describe('Storage Transport shouldRetry logic', () => {
    it('should retry POST if preconditions are present', async () => {
      const requestStub = authClientStub.request as sinon.SinonStub;
      requestStub.resolves({data: {}, headers: new Map()});

      await transport.makeRequest({
        method: 'POST',
        url: '/b/bucket/o',
        queryParameters: {ifGenerationMatch: 123},
      });

      const retryConfig = requestStub.getCall(0).args[0].retryConfig;
      const error503 = {
        response: {status: 503},
        config: {
          method: 'POST',
          url: '/b/bucket/o',
          params: {ifGenerationMatch: 123},
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;

      assert.strictEqual(retryConfig.shouldRetry(error503), true);
    });

    it('should retry on malformed JSON responses (SyntaxError)', async () => {
      const requestStub = authClientStub.request as sinon.SinonStub;
      requestStub.resolves({data: {}, headers: new Map()});

      await transport.makeRequest({url: '/test'});

      const retryConfig = requestStub.getCall(0).args[0].retryConfig;

      const malformedError = new Error(
        'Unexpected token < in JSON at position 0',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ) as any;
      malformedError.stack = 'SyntaxError: Unexpected token <';
      malformedError.config = {method: 'GET', url: '/test'};

      assert.strictEqual(retryConfig.shouldRetry(malformedError), true);
    });

    it('should retry on 503 for idempotent PUT requests', async () => {
      const requestStub = authClientStub.request as sinon.SinonStub;
      requestStub.resolves({data: {}, headers: new Map()});

      await transport.makeRequest({
        method: 'PUT',
        url: '/bucket/object',
      });

      const retryConfig = requestStub.getCall(0).args[0].retryConfig;

      const error503 = {
        response: {status: 503},
        config: {url: '/bucket/object'},
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;

      assert.strictEqual(retryConfig.shouldRetry(error503), true);
    });

    it('should NOT retry on 401 Unauthorized', async () => {
      const requestStub = authClientStub.request as sinon.SinonStub;
      requestStub.resolves({data: {}, headers: new Map()});

      await transport.makeRequest({url: '/test'});

      const retryConfig = requestStub.getCall(0).args[0].retryConfig;

      const error401 = {
        response: {status: 401},
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;

      assert.strictEqual(retryConfig.shouldRetry(error401), false);
    });

    it('should treat 308 as a valid status for resumable uploads', async () => {
      const requestStub = authClientStub.request as sinon.SinonStub;
      requestStub.resolves({data: '308-metadata', headers: new Map()});

      await transport.makeRequest({
        url: '/upload/storage/v1/b/bucket/o?uploadType=resumable',
        queryParameters: {uploadType: 'resumable'},
      });

      const callArgs = requestStub.getCall(0).args[0];

      assert.strictEqual(callArgs.validateStatus(308), true);
    });

    it('should retry when GCS reason is rateLimitExceeded', async () => {
      const requestStub = authClientStub.request as sinon.SinonStub;
      requestStub.resolves({data: {}, headers: new Map()});

      await transport.makeRequest({url: '/test'});
      const retryConfig = requestStub.getCall(0).args[0].retryConfig;

      const rateLimitError = {
        response: {
          status: 429,
          data: {
            error: {
              errors: [{reason: 'rateLimitExceeded'}],
            },
          },
        },
        config: {method: 'GET', url: '/test'},
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;

      assert.strictEqual(retryConfig.shouldRetry(rateLimitError), true);
    });

    it('should retry on transient network errors (no response)', async () => {
      const requestStub = authClientStub.request as sinon.SinonStub;
      requestStub.resolves({data: {}, headers: new Map()});

      await transport.makeRequest({url: '/test'});
      const retryConfig = requestStub.getCall(0).args[0].retryConfig;

      const connReset = {
        code: 'ECONNRESET',
        config: {method: 'GET', url: '/test'},
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;
      assert.strictEqual(retryConfig.shouldRetry(connReset), true);
    });

    it('should allow retries for bucket creation and safe deletes', async () => {
      const requestStub = authClientStub.request as sinon.SinonStub;
      requestStub.resolves({data: {}, headers: new Map()});

      await transport.makeRequest({method: 'POST', url: '/v1/b'});
      const retryConfig = requestStub.getCall(0).args[0].retryConfig;

      // No status code (network error) on bucket create should retry
      assert.strictEqual(
        retryConfig.shouldRetry({
          code: 'ECONNRESET',
          config: {method: 'POST', url: '/v1/b'},
        }),
        true,
      );
    });

    it('should handle HMAC and IAM retry logic', async () => {
      const requestStub = authClientStub.request as sinon.SinonStub;
      requestStub.resolves({data: {}, headers: new Map()});

      // Test HMAC PUT without ETag (should NOT retry)
      await transport.makeRequest({
        method: 'PUT',
        url: '/hmacKeys/test',
        body: JSON.stringify({noEtag: true}),
      });
      let retryConfig = requestStub.getCall(0).args[0].retryConfig;
      assert.strictEqual(
        retryConfig.shouldRetry({
          response: {status: 503},
          config: {
            method: 'PUT',
            url: '/hmacKeys/test',
            data: JSON.stringify({noEtag: true}),
          },
        }),
        false,
      );

      // Test IAM PUT with ETag (should retry)
      await transport.makeRequest({
        method: 'PUT',
        url: '/iam/test',
        body: JSON.stringify({etag: '123'}),
      });
      retryConfig = requestStub.getCall(1).args[0].retryConfig;
      assert.strictEqual(
        retryConfig.shouldRetry({
          response: {status: 503},
          config: {
            method: 'PUT',
            url: '/iam/test',
            data: JSON.stringify({etag: '123'}),
          },
        }),
        true,
      );
    });
  });
});
