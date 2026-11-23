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
} from '../src/storage-transport.js';
import {
  Compute,
  ExternalAccountClient,
  gcpMetadata,
  GoogleAuth,
  JWT,
  PassThroughClient,
} from 'google-auth-library';
import sinon, {createSandbox} from 'sinon';
import assert from 'assert';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import {GCCL_GCS_CMD_KEY} from '../src/nodejs-common/util.js';
import {RETRYABLE_ERR_FN_DEFAULT} from '../src/storage.js';
import {
  Gaxios,
  GaxiosError,
  GaxiosInterceptor,
  GaxiosOptionsPrepared,
  GaxiosResponse,
} from 'gaxios';

describe('Storage Transport', () => {
  let sandbox: sinon.SinonSandbox;
  let transport: StorageTransport;
  let authClientStub: GoogleAuth;
  const baseUrl = 'https://storage.googleapis.com';

  beforeEach(() => {
    sandbox = createSandbox();

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
    const interceptorStub: GaxiosInterceptor<GaxiosOptionsPrepared> = {
      resolved: sandbox.stub(),
      rejected: sandbox.stub(),
    };
    const reqOpts: StorageRequestOptions = {
      url: '/bucket/object',
      interceptors: [interceptorStub],
    };

    const gaxiosRequestStub = sandbox
      .stub(Gaxios.prototype, 'request')
      .resolves({data: {}} as GaxiosResponse);

    const requestStub = authClientStub.request as sinon.SinonStub;
    requestStub.resolves({data: {}});

    await transport.makeRequest(reqOpts);

    assert.strictEqual(requestStub.calledOnce, true);
    const calledWith = requestStub.getCall(0).args[0];
    assert.ok(calledWith.adapter);

    // Manually call the adapter (simulating what the real authClient request does)
    await calledWith.adapter({headers: {}});

    assert.strictEqual(gaxiosRequestStub.calledOnce, true);
    const capturedGaxiosInstance = gaxiosRequestStub.getCall(0)
      .thisValue as Gaxios;
    assert.ok(capturedGaxiosInstance);
    const interceptorSet = capturedGaxiosInstance.interceptors
      .request as unknown as Set<GaxiosInterceptor<GaxiosOptionsPrepared>>;
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

    const headers = requestStub.firstCall.args[0].headers as Record<
      string,
      string
    >;
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
    const headers = requestStub.firstCall.args[0].headers as Record<
      string,
      string
    >;
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
      } as unknown as GaxiosError;

      assert.strictEqual(retryConfig.shouldRetry(error503), true);
    });

    it('should retry on malformed JSON responses (SyntaxError)', async () => {
      const requestStub = authClientStub.request as sinon.SinonStub;
      requestStub.resolves({data: {}, headers: new Map()});

      await transport.makeRequest({url: '/test'});

      const retryConfig = requestStub.getCall(0).args[0].retryConfig;

      const malformedError = new Error(
        'Unexpected token < in JSON at position 0',
      ) as unknown as GaxiosError & {stack: string};
      malformedError.stack = 'SyntaxError: Unexpected token <';
      malformedError.config = {
        method: 'GET',
        url: new URL('https://storage.googleapis.com/test'),
      } as unknown as GaxiosOptionsPrepared;

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
      } as unknown as GaxiosError;

      assert.strictEqual(retryConfig.shouldRetry(error503), true);
    });

    it('should NOT retry on 401 Unauthorized', async () => {
      const requestStub = authClientStub.request as sinon.SinonStub;
      requestStub.resolves({data: {}, headers: new Map()});

      await transport.makeRequest({url: '/test'});

      const retryConfig = requestStub.getCall(0).args[0].retryConfig;

      const error401 = {
        response: {status: 401},
      } as unknown as GaxiosError;

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
      } as unknown as GaxiosError;

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
      } as unknown as GaxiosError;
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

    it('should retain query parameters in adapter if url was not modified', async () => {
      const gaxios = new Gaxios();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let capturedOpts: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sandbox.stub(gaxios, 'request').callsFake(async (opts: any) => {
        capturedOpts = opts;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return {data: {}, headers: new Map(), status: 200} as any;
      });
      const customTransport = new StorageTransport({
        apiEndpoint: baseUrl,
        baseUrl,
        authClient: authClientStub,
        gaxiosInstance: gaxios,
        projectId: 'project-id',
        retryOptions: {
          maxRetries: 3,
          retryDelayMultiplier: 2,
          maxRetryDelay: 100,
          totalTimeout: 1000,
          retryableErrorFn: RETRYABLE_ERR_FN_DEFAULT,
        },
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      const requestStub = authClientStub.request as sinon.SinonStub;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      requestStub.callsFake(async (opts: any) => {
        return opts.adapter(opts);
      });

      await customTransport.makeRequest({
        method: 'GET',
        url: '/test',
        queryParameters: {foo: 'bar'},
      });

      assert.deepStrictEqual(capturedOpts.params, {foo: 'bar'});
    });

    it('should clear params in adapter if url already has params serialized', async () => {
      const gaxios = new Gaxios();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let capturedOpts: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sandbox.stub(gaxios, 'request').callsFake(async (opts: any) => {
        capturedOpts = opts;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return {data: {}, headers: new Map(), status: 200} as any;
      });
      const customTransport = new StorageTransport({
        apiEndpoint: baseUrl,
        baseUrl,
        authClient: authClientStub,
        gaxiosInstance: gaxios,
        projectId: 'project-id',
        retryOptions: {
          maxRetries: 3,
          retryDelayMultiplier: 2,
          maxRetryDelay: 100,
          totalTimeout: 1000,
          retryableErrorFn: RETRYABLE_ERR_FN_DEFAULT,
        },
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      const requestStub = authClientStub.request as sinon.SinonStub;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      requestStub.callsFake(async (opts: any) => {
        const preparedOpts = {
          ...opts,
          url: `${opts.url}?foo=bar`,
        };
        return opts.adapter(preparedOpts);
      });

      await customTransport.makeRequest({
        method: 'GET',
        url: '/test',
        queryParameters: {foo: 'bar'},
      });

      assert.strictEqual(capturedOpts.params, undefined);
      assert.strictEqual(capturedOpts.url, `${baseUrl}/test?foo=bar`);
    });

    it('should safely handle error with object message in RETRYABLE_ERR_FN_DEFAULT', () => {
      const err = {
        config: {method: 'GET', url: 'http://test'},
        response: {status: 503},
        message: {error: {message: 'Retry Test: Caused a 503'}},
      } as unknown as GaxiosError;

      assert.doesNotThrow(() => {
        const result = RETRYABLE_ERR_FN_DEFAULT(err);
        assert.strictEqual(result, true);
      });
    });

    it('should enrich GaxiosError with string message when apiError message is nested object', async () => {
      const requestStub = authClientStub.request as sinon.SinonStub;
      const apiErrorData = {
        error: {
          code: '400',
          message: {
            error: {
              message: 'Retry Test: Caused a 400',
            },
          },
        },
      };
      const gaxiosError = {
        response: {
          status: 400,
          data: apiErrorData,
        },
        message: '[object Object]',
      };
      requestStub.rejects(gaxiosError);

      await assert.rejects(
        transport.makeRequest({url: '/test'}),
        (err: Error) => {
          assert.strictEqual(err.message, 'Retry Test: Caused a 400');
          return true;
        },
      );
    });
  });

  describe('universe domain validation', () => {
    const customUniverse = 'example-universe.invalid';
    const customBaseUrl = `https://storage.${customUniverse}`;
    const defaultRetryOptions = {
      maxRetries: 0,
      retryDelayMultiplier: 2,
      maxRetryDelay: 100,
      totalTimeout: 1000,
      retryableErrorFn: RETRYABLE_ERR_FN_DEFAULT,
    };
    const originalEnvUniverse = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
    const originalMetadataDetection = process.env['METADATA_SERVER_DETECTION'];
    const originalAdcEnv = process.env['GOOGLE_APPLICATION_CREDENTIALS'];
    const originalAdcEnvLower = process.env['google_application_credentials'];
    const originalCloudSdkConfig = process.env['CLOUDSDK_CONFIG'];
    let tempDir: string;

    beforeEach(async () => {
      tempDir = await fs.promises.mkdtemp(
        path.join(os.tmpdir(), 'storage-universe-test-'),
      );
      delete process.env['GOOGLE_APPLICATION_CREDENTIALS'];
      delete process.env['google_application_credentials'];
      process.env['CLOUDSDK_CONFIG'] = path.join(tempDir, 'empty-gcloud');
    });

    afterEach(async () => {
      if (originalEnvUniverse === undefined) {
        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
      } else {
        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = originalEnvUniverse;
      }
      if (originalMetadataDetection === undefined) {
        delete process.env['METADATA_SERVER_DETECTION'];
      } else {
        process.env['METADATA_SERVER_DETECTION'] = originalMetadataDetection;
      }
      if (originalAdcEnv === undefined) {
        delete process.env['GOOGLE_APPLICATION_CREDENTIALS'];
      } else {
        process.env['GOOGLE_APPLICATION_CREDENTIALS'] = originalAdcEnv;
      }
      if (originalAdcEnvLower === undefined) {
        delete process.env['google_application_credentials'];
      } else {
        process.env['google_application_credentials'] = originalAdcEnvLower;
      }
      if (originalCloudSdkConfig === undefined) {
        delete process.env['CLOUDSDK_CONFIG'];
      } else {
        process.env['CLOUDSDK_CONFIG'] = originalCloudSdkConfig;
      }
      gcpMetadata.resetIsAvailableCache();
      await fs.promises.rm(tempDir, {recursive: true, force: true});
    });

    it('should reject makeRequest with zero HTTP calls when GoogleAuth universe mismatches configured universeDomain', async () => {
      const gaxiosSpy = sandbox
        .stub(Gaxios.prototype, 'request')
        .rejects(new Error('Unexpected HTTP request'));
      const mismatchedAuth = new GoogleAuth({
        authClient: new JWT({
          email: 'sa@project.iam.gserviceaccount.com',
          key: 'fake-key',
          universeDomain: 'googleapis.com',
        }),
      });
      const requestSpy = sandbox.spy(mismatchedAuth, 'request');

      const customTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        authClient: mismatchedAuth,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      await assert.rejects(
        customTransport.makeRequest({url: '/storage/v1/b'}),
        {
          message:
            'The configured universe domain (example-universe.invalid) does not match the universe domain found in the credentials (googleapis.com). Please check your universe domain configuration.',
        },
      );
      assert.strictEqual(requestSpy.called, false);
      assert.strictEqual(gaxiosSpy.called, false);
    });

    it('should reject makeRequest with zero HTTP calls when raw JWT AuthClient universe mismatches configured universeDomain', async () => {
      const gaxiosSpy = sandbox
        .stub(Gaxios.prototype, 'request')
        .rejects(new Error('Unexpected HTTP request'));
      const rawJwt = new JWT({
        email: 'sa@project.iam.gserviceaccount.com',
        key: 'fake-key',
        universeDomain: customUniverse,
      });
      const jwtRequestSpy = sandbox.spy(rawJwt, 'request');

      const defaultTransport = new StorageTransport({
        apiEndpoint: baseUrl,
        baseUrl,
        authClient: rawJwt,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      await assert.rejects(
        defaultTransport.makeRequest({url: '/storage/v1/b'}),
        {
          message:
            'The configured universe domain (googleapis.com) does not match the universe domain found in the credentials (example-universe.invalid). Please check your universe domain configuration.',
        },
      );
      assert.strictEqual(jwtRequestSpy.called, false);
      assert.strictEqual(gaxiosSpy.called, false);
    });

    it('should preserve clientOptions.universeDomain on GoogleAuth while rejecting mismatched JSON and impersonated credentials', async () => {
      const gaxiosSpy = sandbox
        .stub(Gaxios.prototype, 'request')
        .rejects(new Error('Unexpected HTTP request'));

      const customTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        clientOptions: {universeDomain: customUniverse},
        credentials: {
          type: 'service_account',
          project_id: 'test-project',
          private_key_id: 'key-id',
          private_key:
            '-----BEGIN PRIVATE KEY-----\nfake\n-----END PRIVATE KEY-----\n',
          client_email: 'sa@test-project.iam.gserviceaccount.com',
          // Omit universe_domain -> defaults to 'googleapis.com'
        },
        projectId: 'test-project',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      // Public GoogleAuth construction and clientOptions.universeDomain remain untouched
      assert.strictEqual(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (customTransport.authClient as any).clientOptions.universeDomain,
        customUniverse,
      );

      await assert.rejects(
        customTransport.makeRequest({url: '/storage/v1/b'}),
        {
          message:
            'The configured universe domain (example-universe.invalid) does not match the universe domain found in the credentials (googleapis.com). Please check your universe domain configuration.',
        },
      );

      // Impersonated service account credentials inherit universe_domain from source_credentials when omitted at top level
      const impersonatedTransport = new StorageTransport({
        apiEndpoint: baseUrl,
        baseUrl,
        universeDomain: 'googleapis.com',
        credentials: {
          type: 'impersonated_service_account',
          service_account_impersonation_url:
            'https://iamcredentials.example-universe.invalid/v1/projects/-/serviceAccounts/target@test.iam.gserviceaccount.com:generateAccessToken',
          source_credentials: {
            type: 'authorized_user',
            client_id: 'cid',
            client_secret: 'csec',
            refresh_token: 'rtok',
            universe_domain: customUniverse,
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
        projectId: 'test-project',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      await assert.rejects(
        impersonatedTransport.makeRequest({url: '/storage/v1/b'}),
        {
          message:
            'The configured universe domain (googleapis.com) does not match the universe domain found in the credentials (example-universe.invalid). Please check your universe domain configuration.',
        },
      );
      assert.strictEqual(gaxiosSpy.called, false);
    });

    it('should validate keyFilename credentials, cache keyfile reads across requests, skip apiKey, and handle ENOENT keyFilename cleanly', async () => {
      const matchingKeyFile = path.join(tempDir, 'matching-key.json');
      const mismatchedKeyFile = path.join(tempDir, 'mismatched-key.json');
      await fs.promises.writeFile(
        matchingKeyFile,
        JSON.stringify({
          type: 'service_account',
          project_id: 'test-project',
          private_key_id: 'key-id',
          private_key:
            '-----BEGIN PRIVATE KEY-----\nfake\n-----END PRIVATE KEY-----\n',
          client_email: 'sa@test-project.iam.gserviceaccount.com',
          universe_domain: customUniverse,
        }),
      );
      await fs.promises.writeFile(
        mismatchedKeyFile,
        JSON.stringify({
          type: 'service_account',
          project_id: 'test-project',
          private_key_id: 'key-id',
          private_key:
            '-----BEGIN PRIVATE KEY-----\nfake\n-----END PRIVATE KEY-----\n',
          client_email: 'sa@test-project.iam.gserviceaccount.com',
        }),
      );

      // 1. Mismatched keyFilename rejects before making any HTTP calls
      const mismatchKeyTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        keyFilename: mismatchedKeyFile,
        projectId: 'test-project',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      await assert.rejects(
        mismatchKeyTransport.makeRequest({url: '/storage/v1/b'}),
        {
          message:
            'The configured universe domain (example-universe.invalid) does not match the universe domain found in the credentials (googleapis.com). Please check your universe domain configuration.',
        },
      );

      // 2. Matching keyFilename reads the file only once across concurrent and sequential makeRequest calls
      const matchingKeyTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        keyFilename: matchingKeyFile,
        projectId: 'test-project',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      const requestStub = sandbox
        .stub(matchingKeyTransport.authClient, 'request')
        .resolves({
          data: {items: []},
          headers: new Headers(),
          status: 200,
          statusText: 'OK',
        } as unknown as GaxiosResponse);
      const readFileSpy = sandbox.spy(fs.promises, 'readFile');

      await Promise.all([
        matchingKeyTransport.makeRequest({url: '/storage/v1/b'}),
        matchingKeyTransport.makeRequest({url: '/storage/v1/b'}),
      ]);
      await matchingKeyTransport.makeRequest({url: '/storage/v1/b'});

      assert.strictEqual(requestStub.callCount, 3);
      assert.strictEqual(readFileSpy.callCount, 1);
      readFileSpy.restore();

      // 3. API key has no credential universe -> skips validation
      const apiKeyTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        apiKey: 'fake-api-key',
        projectId: 'test-project',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      const apiKeyRequestStub = sandbox
        .stub(apiKeyTransport.authClient, 'request')
        .resolves({
          data: {items: []},
          headers: new Headers(),
          status: 200,
          statusText: 'OK',
        } as unknown as GaxiosResponse);
      await apiKeyTransport.makeRequest({url: '/storage/v1/b'});
      assert.strictEqual(apiKeyRequestStub.calledOnce, true);

      // 4. Non-existent keyFilename with stubbed request does not throw bogus universe mismatch
      const enoentTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        keyFilename: path.join(tempDir, 'does-not-exist.json'),
        projectId: 'test-project',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      const enoentRequestStub = sandbox
        .stub(enoentTransport.authClient, 'request')
        .resolves({
          data: {items: []},
          headers: new Headers(),
          status: 200,
          statusText: 'OK',
        } as unknown as GaxiosResponse);
      await enoentTransport.makeRequest({url: '/storage/v1/b'});
      assert.strictEqual(enoentRequestStub.calledOnce, true);
    });

    it('should resolve ADC universe from GOOGLE_APPLICATION_CREDENTIALS, well-known gcloud ADC file, GCE metadata, and surface NO_ADC_FOUND when missing', async () => {
      // 1. GOOGLE_APPLICATION_CREDENTIALS mismatch
      const envAdcFile = path.join(tempDir, 'env-adc.json');
      await fs.promises.writeFile(
        envAdcFile,
        JSON.stringify({
          type: 'authorized_user',
          client_id: 'cid',
          client_secret: 'csec',
          refresh_token: 'rtok',
          universe_domain: 'googleapis.com',
        }),
      );
      process.env['GOOGLE_APPLICATION_CREDENTIALS'] = envAdcFile;

      const envAdcTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        projectId: 'test-project',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      await assert.rejects(
        envAdcTransport.makeRequest({url: '/storage/v1/b'}),
        {
          message:
            'The configured universe domain (example-universe.invalid) does not match the universe domain found in the credentials (googleapis.com). Please check your universe domain configuration.',
        },
      );
      delete process.env['GOOGLE_APPLICATION_CREDENTIALS'];

      // 2. Well-known gcloud ADC file ($CLOUDSDK_CONFIG/application_default_credentials.json)
      const gcloudDir = path.join(tempDir, 'gcloud-config');
      await fs.promises.mkdir(gcloudDir, {recursive: true});
      await fs.promises.writeFile(
        path.join(gcloudDir, 'application_default_credentials.json'),
        JSON.stringify({
          type: 'authorized_user',
          client_id: 'cid',
          client_secret: 'csec',
          refresh_token: 'rtok',
          universe_domain: customUniverse,
        }),
      );
      process.env['CLOUDSDK_CONFIG'] = gcloudDir;

      const wellKnownMismatchTransport = new StorageTransport({
        apiEndpoint: baseUrl,
        baseUrl,
        universeDomain: 'googleapis.com',
        projectId: 'test-project',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      await assert.rejects(
        wellKnownMismatchTransport.makeRequest({url: '/storage/v1/b'}),
        {
          message:
            'The configured universe domain (googleapis.com) does not match the universe domain found in the credentials (example-universe.invalid). Please check your universe domain configuration.',
        },
      );

      // 3. Bare GoogleAuth ADC falling through to GCE metadata server
      process.env['CLOUDSDK_CONFIG'] = path.join(tempDir, 'empty-gcloud');
      const isAvailableStub = sandbox
        .stub(gcpMetadata, 'isAvailable')
        .resolves(true);
      const universeStub = sandbox
        .stub(gcpMetadata, 'universe')
        .resolves(customUniverse);

      const gceAdcMismatchTransport = new StorageTransport({
        apiEndpoint: baseUrl,
        baseUrl,
        universeDomain: 'googleapis.com',
        projectId: 'test-project',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      await assert.rejects(
        gceAdcMismatchTransport.makeRequest({url: '/storage/v1/b'}),
        {
          message:
            'The configured universe domain (googleapis.com) does not match the universe domain found in the credentials (example-universe.invalid). Please check your universe domain configuration.',
        },
      );
      assert.strictEqual(universeStub.calledOnceWith('universe-domain'), true);

      // 4. Missing ADC everywhere -> surfaces GoogleAuth's standard NO_ADC_FOUND error instead of universe mismatch
      isAvailableStub.resolves(false);
      sandbox.stub(gcpMetadata, 'getGCPResidency').returns(false);
      const noAdcTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        projectId: 'test-project',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      await assert.rejects(
        noAdcTransport.makeRequest({url: '/storage/v1/b'}),
        /Could not load the default credentials/,
      );
    });

    it('should reject before authClient.getProjectId() with zero HTTP calls on universe mismatch', async () => {
      const gaxiosSpy = sandbox
        .stub(Gaxios.prototype, 'request')
        .rejects(new Error('Unexpected HTTP request'));
      const externalClient = ExternalAccountClient.fromJSON({
        type: 'external_account',
        audience:
          '//iam.googleapis.com/projects/123/locations/global/workloadIdentityPools/pool/providers/provider',
        subject_token_type: 'urn:ietf:params:oauth:token-type:id_token',
        token_url: 'https://sts.googleapis.com/v1/token',
        credential_source: {
          file: '/nonexistent/token/file',
        },
        universe_domain: 'googleapis.com',
      })!;
      const getProjectIdSpy = sandbox.spy(externalClient, 'getProjectId');

      const auth = new GoogleAuth({authClient: externalClient});
      const authGetProjectIdSpy = sandbox.spy(auth, 'getProjectId');

      const customTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        authClient: auth,
        // Intentionally omit projectId so makeRequest attempts projectId resolution
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      await assert.rejects(
        customTransport.makeRequest({url: '/storage/v1/b'}),
        {
          message:
            'The configured universe domain (example-universe.invalid) does not match the universe domain found in the credentials (googleapis.com). Please check your universe domain configuration.',
        },
      );
      assert.strictEqual(authGetProjectIdSpy.called, false);
      assert.strictEqual(getProjectIdSpy.called, false);
      assert.strictEqual(gaxiosSpy.called, false);
    });

    it('should fall back to GOOGLE_CLOUD_UNIVERSE_DOMAIN env var and reject mismatched credentials', async () => {
      process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = customUniverse;
      const gaxiosSpy = sandbox
        .stub(Gaxios.prototype, 'request')
        .rejects(new Error('Unexpected HTTP request'));

      const envTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        authClient: new JWT({
          email: 'sa@project.iam.gserviceaccount.com',
          key: 'fake-key',
          universeDomain: 'googleapis.com',
        }),
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      assert.strictEqual(envTransport.universeDomain, customUniverse);
      await assert.rejects(envTransport.makeRequest({url: '/storage/v1/b'}), {
        message:
          'The configured universe domain (example-universe.invalid) does not match the universe domain found in the credentials (googleapis.com). Please check your universe domain configuration.',
      });
      assert.strictEqual(gaxiosSpy.called, false);
    });

    it('should allow PassThroughClient when configured universeDomain is non-default', async () => {
      const gaxiosInstance = new Gaxios();
      const gaxiosStub = sandbox.stub(gaxiosInstance, 'request').resolves({
        data: {items: []},
        headers: new Headers(),
        status: 200,
        statusText: 'OK',
      } as unknown as GaxiosResponse);

      const passThroughTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        authClient: new PassThroughClient(),
        gaxiosInstance,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      const resp = await passThroughTransport.makeRequest({
        url: '/storage/v1/b',
      });
      assert.strictEqual(resp.status, 200);
      assert.strictEqual(gaxiosStub.calledOnce, true);
    });

    it('should resolve GCE Compute universe via metadata server for both non-default and default universe VMs', async () => {
      sandbox.stub(gcpMetadata, 'isAvailable').resolves(true);
      const gcpUniverseStub = sandbox
        .stub(gcpMetadata, 'universe')
        .resolves(customUniverse);

      // 1. Non-default-universe GCE VM ('example-universe.invalid')
      const computeOnTpc = new Compute();
      const computeRequestStub = sandbox
        .stub(computeOnTpc, 'request')
        .resolves({
          data: {items: []},
          headers: new Headers(),
          status: 200,
          statusText: 'OK',
        } as unknown as GaxiosResponse);

      const tpcGoogleAuth = new GoogleAuth({authClient: computeOnTpc});

      // Matching configured universeDomain -> succeeds
      const matchingTpcTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        authClient: tpcGoogleAuth,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      await matchingTpcTransport.makeRequest({url: '/storage/v1/b'});
      assert.strictEqual(
        gcpUniverseStub.calledOnceWith('universe-domain'),
        true,
      );
      assert.strictEqual(computeRequestStub.calledOnce, true);

      // Mismatched configured universeDomain ('googleapis.com') -> rejects with zero request calls
      computeRequestStub.resetHistory();
      const mismatchedDefaultTransport = new StorageTransport({
        apiEndpoint: baseUrl,
        baseUrl,
        universeDomain: 'googleapis.com',
        authClient: tpcGoogleAuth,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      await assert.rejects(
        mismatchedDefaultTransport.makeRequest({url: '/storage/v1/b'}),
        {
          message:
            'The configured universe domain (googleapis.com) does not match the universe domain found in the credentials (example-universe.invalid). Please check your universe domain configuration.',
        },
      );
      assert.strictEqual(computeRequestStub.called, false);
      assert.strictEqual(gcpUniverseStub.callCount, 1);

      // 2. Default-universe GCE VM (metadata returns 'googleapis.com')
      gcpUniverseStub.resolves('googleapis.com');
      const computeOnDefault = new Compute();
      const defaultComputeRequestStub = sandbox
        .stub(computeOnDefault, 'request')
        .resolves({
          data: {items: []},
          headers: new Headers(),
          status: 200,
          statusText: 'OK',
        } as unknown as GaxiosResponse);
      const defaultGoogleAuth = new GoogleAuth({authClient: computeOnDefault});

      const mismatchedTpcTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        authClient: defaultGoogleAuth,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      await assert.rejects(
        mismatchedTpcTransport.makeRequest({url: '/storage/v1/b'}),
        {
          message:
            'The configured universe domain (example-universe.invalid) does not match the universe domain found in the credentials (googleapis.com). Please check your universe domain configuration.',
        },
      );
      assert.strictEqual(defaultComputeRequestStub.called, false);

      const matchingDefaultTransport = new StorageTransport({
        apiEndpoint: baseUrl,
        baseUrl,
        universeDomain: 'googleapis.com',
        authClient: defaultGoogleAuth,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      await matchingDefaultTransport.makeRequest({url: '/storage/v1/b'});
      assert.strictEqual(defaultComputeRequestStub.calledOnce, true);
      assert.strictEqual(gcpUniverseStub.callCount, 2);

      // 3. Standalone Compute client via gcpMetadata.universe: 404 falls back to 'googleapis.com'
      const err404 = Object.assign(new Error('Not Found'), {
        response: {status: 404},
      });
      gcpUniverseStub.rejects(err404);
      const compute404 = new Compute();
      const compute404RequestStub = sandbox
        .stub(compute404, 'request')
        .resolves({
          data: {items: []},
          headers: new Headers(),
          status: 200,
          statusText: 'OK',
        } as unknown as GaxiosResponse);

      const compute404MismatchTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        authClient: compute404,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      await assert.rejects(
        compute404MismatchTransport.makeRequest({url: '/storage/v1/b'}),
        {
          message:
            'The configured universe domain (example-universe.invalid) does not match the universe domain found in the credentials (googleapis.com). Please check your universe domain configuration.',
        },
      );
      assert.strictEqual(compute404RequestStub.called, false);

      // 4. Non-404 metadata server error (e.g. 500) rethrows (fails closed) and evicts rejected cache entry so retry can succeed
      const err500 = Object.assign(new Error('Metadata Server 500'), {
        response: {status: 500},
      });
      gcpUniverseStub.rejects(err500);
      const compute500 = new Compute();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sandbox.stub(compute500 as any, 'getRequestMetadataAsync').resolves({
        headers: new Headers({Authorization: 'Bearer compute-token'}),
      });
      const gaxiosInstance = new Gaxios();
      const gaxiosStub = sandbox.stub(gaxiosInstance, 'request').resolves({
        data: {items: []},
        headers: new Headers(),
        status: 200,
        statusText: 'OK',
      } as unknown as GaxiosResponse);

      const compute500Transport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        authClient: compute500,
        gaxiosInstance,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      await assert.rejects(
        compute500Transport.makeRequest({url: '/storage/v1/b'}),
        {
          message: 'Metadata Server 500',
        },
      );
      assert.strictEqual(gaxiosStub.called, false);

      // Subsequent call after transient metadata failure recovers and succeeds
      gcpUniverseStub.resolves(customUniverse);
      const recoveredResp = await compute500Transport.makeRequest({
        url: '/storage/v1/b',
      });
      assert.strictEqual(recoveredResp.status, 200);
      assert.strictEqual(gaxiosStub.calledOnce, true);
    });

    it('should cache GCE Compute metadata universe lookup across concurrent and sequential makeRequest calls', async () => {
      const isAvailableStub = sandbox
        .stub(gcpMetadata, 'isAvailable')
        .resolves(true);
      const metaStub = sandbox
        .stub(gcpMetadata, 'universe')
        .callsFake(async () => {
          await new Promise(resolve => setImmediate(resolve));
          return customUniverse;
        });
      const compute = new Compute();
      const computeRequestStub = sandbox.stub(compute, 'request').resolves({
        data: {items: []},
        headers: new Headers(),
        status: 200,
        statusText: 'OK',
      } as unknown as GaxiosResponse);
      const googleAuth = new GoogleAuth({authClient: compute});

      const cachedTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        authClient: googleAuth,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      // Concurrent in-flight calls share a single metadata lookup
      await Promise.all([
        cachedTransport.makeRequest({url: '/storage/v1/b'}),
        cachedTransport.makeRequest({url: '/storage/v1/b'}),
        cachedTransport.makeRequest({url: '/storage/v1/b'}),
      ]);
      assert.strictEqual(computeRequestStub.callCount, 3);
      assert.strictEqual(isAvailableStub.callCount, 1);
      assert.strictEqual(metaStub.callCount, 1);

      // Subsequent sequential calls continue reusing the cached promise
      await cachedTransport.makeRequest({url: '/storage/v1/b'});
      await cachedTransport.makeRequest({url: '/storage/v1/b'});

      assert.strictEqual(computeRequestStub.callCount, 5);
      assert.strictEqual(isAvailableStub.callCount, 1);
      assert.strictEqual(metaStub.callCount, 1);
    });

    it('should cover explicit Compute universe, METADATA_SERVER_DETECTION=none, and gcpMetadata.isAvailable()=false branches', async () => {
      // Branch A: Compute with explicit custom universeDomain does not query metadata server
      const isAvailableSpy = sandbox.spy(gcpMetadata, 'isAvailable');
      const explicitCompute = new Compute({universeDomain: customUniverse});
      const explicitRequestStub = sandbox
        .stub(explicitCompute, 'request')
        .resolves({
          data: {items: []},
          headers: new Headers(),
          status: 200,
          statusText: 'OK',
        } as unknown as GaxiosResponse);

      const explicitTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        authClient: explicitCompute,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      await explicitTransport.makeRequest({url: '/storage/v1/b'});
      assert.strictEqual(isAvailableSpy.called, false);
      assert.strictEqual(explicitRequestStub.calledOnce, true);
      isAvailableSpy.restore();

      // Branch B: METADATA_SERVER_DETECTION=none causes gcpMetadata.isAvailable() to resolve false and default to 'googleapis.com'
      process.env['METADATA_SERVER_DETECTION'] = 'none';
      gcpMetadata.resetIsAvailableCache();
      const noneCompute = new Compute();
      const noneRequestStub = sandbox.stub(noneCompute, 'request').resolves({
        data: {items: []},
        headers: new Headers(),
        status: 200,
        statusText: 'OK',
      } as unknown as GaxiosResponse);
      const noneMismatchTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        authClient: noneCompute,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      await assert.rejects(
        noneMismatchTransport.makeRequest({url: '/storage/v1/b'}),
        /does not match the universe domain found in the credentials \(googleapis\.com\)/,
      );
      assert.strictEqual(noneRequestStub.called, false);
      delete process.env['METADATA_SERVER_DETECTION'];
      gcpMetadata.resetIsAvailableCache();

      // Branch C: gcpMetadata.isAvailable() === false falls back to 'googleapis.com' without calling gcpMetadata.universe
      const isAvailableStub = sandbox
        .stub(gcpMetadata, 'isAvailable')
        .resolves(false);
      const universeSpy = sandbox.spy(gcpMetadata, 'universe');
      const unavailCompute = new Compute();
      const unavailGoogleAuth = new GoogleAuth({authClient: unavailCompute});
      const unavailTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        authClient: unavailGoogleAuth,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      await assert.rejects(
        unavailTransport.makeRequest({url: '/storage/v1/b'}),
        /does not match the universe domain found in the credentials \(googleapis\.com\)/,
      );
      assert.strictEqual(isAvailableStub.calledOnce, true);
      assert.strictEqual(universeSpy.called, false);
    });

    it('should succeed when custom universe_domain on credentials matches and reject when transport is configured for default universe', async () => {
      const gaxiosInstance = new Gaxios();
      const gaxiosStub = sandbox.stub(gaxiosInstance, 'request').resolves({
        data: {items: []},
        headers: new Headers(),
        status: 200,
        statusText: 'OK',
      } as unknown as GaxiosResponse);

      const matchingJwt = new JWT({
        email: 'sa@test-project.iam.gserviceaccount.com',
        key: 'fake-key',
        universeDomain: customUniverse,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sandbox.stub(matchingJwt as any, 'getRequestMetadataAsync').resolves({
        headers: new Headers({Authorization: 'Bearer custom-token'}),
      });

      // Prefer explicit options.universeDomain over GOOGLE_CLOUD_UNIVERSE_DOMAIN
      process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] =
        'other-env-universe.invalid';
      const matchingTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        authClient: matchingJwt,
        gaxiosInstance,
        projectId: 'test-project',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      const resp = await matchingTransport.makeRequest({url: '/storage/v1/b'});
      assert.strictEqual(resp.status, 200);
      assert.strictEqual(gaxiosStub.calledOnce, true);

      // JSON credentials with custom universe_domain must reject when transport is configured for default universe
      const reverseMismatchTransport = new StorageTransport({
        apiEndpoint: baseUrl,
        baseUrl,
        universeDomain: 'googleapis.com',
        credentials: {
          type: 'service_account',
          project_id: 'test-project',
          private_key_id: 'key-id',
          private_key:
            '-----BEGIN PRIVATE KEY-----\nfake\n-----END PRIVATE KEY-----\n',
          client_email: 'sa@test-project.iam.gserviceaccount.com',
          universe_domain: customUniverse,
        },
        gaxiosInstance,
        projectId: 'test-project',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      await assert.rejects(
        reverseMismatchTransport.makeRequest({url: '/storage/v1/b'}),
        {
          message:
            'The configured universe domain (googleapis.com) does not match the universe domain found in the credentials (example-universe.invalid). Please check your universe domain configuration.',
        },
      );
      assert.strictEqual(gaxiosStub.calledOnce, true);
    });

    it('should fail closed when authClient has empty string or undefined universeDomain while expected universe is non-default', async () => {
      const gaxiosSpy = sandbox
        .stub(Gaxios.prototype, 'request')
        .rejects(new Error('Unexpected HTTP request'));

      // JWT with explicit empty string universeDomain: ''
      const emptyJwt = new JWT({
        email: 'sa@project.iam.gserviceaccount.com',
        key: 'fake-key',
        universeDomain: '',
      });
      const emptyTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        authClient: emptyJwt,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      await assert.rejects(emptyTransport.makeRequest({url: '/storage/v1/b'}), {
        message:
          'The configured universe domain (example-universe.invalid) does not match the universe domain found in the credentials (googleapis.com). Please check your universe domain configuration.',
      });

      // Custom/legacy AuthClient object whose universeDomain is undefined (wrapped in GoogleAuth)
      const legacyAuthClient = {
        request: sandbox.stub().resolves({status: 200}),
        getRequestHeaders: sandbox.stub().resolves({}),
      };
      const legacyTransport = new StorageTransport({
        apiEndpoint: customBaseUrl,
        baseUrl: customBaseUrl,
        universeDomain: customUniverse,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        authClient: legacyAuthClient as any,
        projectId: 'project-id',
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      await assert.rejects(
        legacyTransport.makeRequest({url: '/storage/v1/b'}),
        {
          message:
            'The configured universe domain (example-universe.invalid) does not match the universe domain found in the credentials (googleapis.com). Please check your universe domain configuration.',
        },
      );
      assert.strictEqual(legacyAuthClient.request.called, false);
      assert.strictEqual(gaxiosSpy.called, false);
    });
  });
});
