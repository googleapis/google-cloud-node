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
import {GoogleAuth, OAuth2Client, PassThroughClient} from 'google-auth-library';
import {Readable} from 'stream';
import sinon, {createSandbox} from 'sinon';
import assert from 'assert';
import {GCCL_GCS_CMD_KEY} from '../src/nodejs-common/util.js';
import {RETRYABLE_ERR_FN_DEFAULT} from '../src/storage.js';
import {
  Gaxios,
  GaxiosError,
  GaxiosInterceptor,
  GaxiosOptions,
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
    sandbox.stub(authClientStub, 'getClient').resolves();
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

  describe('universe domain', () => {
    const OTHER_UNIVERSE = 'example-universe.test';
    const credentials = {
      type: 'service_account',
      client_email: 'test@example.iam.gserviceaccount.com',
      private_key: 'not-a-real-key',
      universe_domain: OTHER_UNIVERSE,
    };

    function createTransport(authClient: GoogleAuth, universeDomain?: string) {
      return new StorageTransport({
        apiEndpoint: baseUrl,
        baseUrl,
        authClient,
        universeDomain,
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
    }

    function createAuth() {
      const auth = new GoogleAuth({credentials});
      const requestStub = sandbox.stub(auth, 'request') as sinon.SinonStub;
      requestStub.resolves({data: {}, headers: new Map()});
      const projectIdStub = sandbox
        .stub(auth, 'getProjectId')
        .resolves('project-id');
      return {auth, requestStub, projectIdStub};
    }

    it('should not use credentials of another universe domain', async () => {
      const {auth, requestStub, projectIdStub} = createAuth();

      await assert.rejects(
        createTransport(auth).makeRequest({url: '/bucket/object'}),
        /The configured universe domain \(googleapis\.com\) does not match the universe domain found in the credentials \(example-universe\.test\)/,
      );
      assert.strictEqual(projectIdStub.called, false);
      assert.strictEqual(requestStub.called, false);
    });

    it('should send a request with credentials of the configured universe domain', async () => {
      const {auth, requestStub} = createAuth();

      await createTransport(auth, OTHER_UNIVERSE).makeRequest({
        url: '/bucket/object',
      });

      assert.strictEqual(requestStub.calledOnce, true);
    });

    it('should verify the credentials on every request', async () => {
      const {auth, requestStub} = createAuth();
      const transport = createTransport(auth, OTHER_UNIVERSE);
      await transport.makeRequest({url: '/bucket/object'});

      transport.authClient = new GoogleAuth({
        credentials: {...credentials, universe_domain: 'googleapis.com'},
      });

      await assert.rejects(
        transport.makeRequest({url: '/bucket/object'}),
        /does not match the universe domain found in the credentials/,
      );
      assert.strictEqual(requestStub.calledOnce, true);
    });
  });

  describe('custom endpoint authentication', () => {
    const CUSTOM_ENDPOINT = 'http://localhost:4443';
    const OTHER_UNIVERSE = 'example-universe.test';
    const OTHER_UNIVERSE_CREDENTIALS = {
      type: 'service_account',
      client_email: 'test@example.iam.gserviceaccount.com',
      private_key: 'not-a-real-key',
      universe_domain: OTHER_UNIVERSE,
    };

    const defaultRetryOptions = {
      maxRetries: 3,
      retryDelayMultiplier: 2,
      maxRetryDelay: 100,
      totalTimeout: 1000,
      retryableErrorFn: RETRYABLE_ERR_FN_DEFAULT,
    };

    function createNoAdcAuth() {
      const auth = new GoogleAuth();
      const adcError = new Error('Could not load the default credentials');
      const requestStub = sandbox.stub(auth, 'request').rejects(adcError);
      const getClientStub = sandbox.stub(auth, 'getClient').rejects(adcError);
      const getProjectIdStub = sandbox
        .stub(auth, 'getProjectId')
        .rejects(adcError);
      return {auth, requestStub, getClientStub, getProjectIdStub};
    }

    for (const useAuthWithCustomEndpoint of [undefined, false]) {
      it(`should use plain Gaxios and skip authClient when customEndpoint is true and useAuthWithCustomEndpoint is ${String(useAuthWithCustomEndpoint)}`, async () => {
        const {auth, requestStub, getClientStub, getProjectIdStub} =
          createNoAdcAuth();
        const gaxios = new Gaxios();
        const gaxiosRequestStub = sandbox.stub(gaxios, 'request').resolves({
          data: {ok: true},
          headers: new Headers(),
          status: 200,
          statusText: 'OK',
        } as unknown as GaxiosResponse);

        const customTransport = new StorageTransport({
          apiEndpoint: CUSTOM_ENDPOINT,
          baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
          authClient: auth,
          customEndpoint: true,
          useAuthWithCustomEndpoint,
          gaxiosInstance: gaxios,
          retryOptions: defaultRetryOptions,
          scopes: ['https://www.googleapis.com/auth/cloud-platform'],
          packageJson: {name: 'test-package', version: '1.0.0'},
        });

        const res = await customTransport.makeRequest({
          method: 'GET',
          url: '/storage/v1/b/test-bucket/o/test-file',
        });

        assert.deepStrictEqual(res.data, {ok: true});
        assert.strictEqual(requestStub.called, false);
        assert.strictEqual(getClientStub.called, false);
        assert.strictEqual(getProjectIdStub.called, false);
        assert.strictEqual(gaxiosRequestStub.calledOnce, true);

        const calledOpts = gaxiosRequestStub.firstCall.args[0] as GaxiosOptions;
        assert.strictEqual(
          calledOpts.url,
          `${CUSTOM_ENDPOINT}/storage/v1/b/test-bucket/o/test-file`,
        );
        assert.strictEqual(calledOpts.adapter, undefined);
        assert.strictEqual(
          new Headers(calledOpts.headers).get('authorization'),
          null,
        );
      });
    }

    it('should not send Authorization headers even when credentials are available on unauthenticated custom endpoint', async () => {
      const oauthClient = new OAuth2Client();
      oauthClient.setCredentials({
        access_token: 'secret-token',
        expiry_date: Date.now() + 3_600_000,
      });
      const getRequestHeadersSpy = sandbox.spy(
        oauthClient,
        'getRequestHeaders',
      );
      const auth = new GoogleAuth({authClient: oauthClient});
      const authRequestSpy = sandbox.spy(auth, 'request');

      let capturedHeaders: Headers | undefined;
      const mockFetch: GaxiosOptions['fetchImplementation'] = async (
        _url,
        init,
      ) => {
        capturedHeaders = new Headers(init?.headers);
        return new Response(JSON.stringify({name: 'my-obj'}), {
          status: 200,
          headers: {'content-type': 'application/json'},
        });
      };
      const gaxios = new Gaxios({fetchImplementation: mockFetch});

      const customTransport = new StorageTransport({
        apiEndpoint: CUSTOM_ENDPOINT,
        baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
        authClient: auth,
        customEndpoint: true,
        useAuthWithCustomEndpoint: false,
        gaxiosInstance: gaxios,
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      const res = await customTransport.makeRequest({
        method: 'GET',
        url: '/storage/v1/b/my-bucket/o/my-obj',
        responseType: 'json',
      });

      assert.deepStrictEqual(res.data, {name: 'my-obj'});
      assert.strictEqual(authRequestSpy.called, false);
      assert.strictEqual(getRequestHeadersSpy.called, false);
      assert.ok(capturedHeaders);
      assert.strictEqual(capturedHeaders.get('authorization'), null);
    });

    it('should preserve interceptors, timeout, retryConfig, error decoration, and streaming when bypassing auth', async () => {
      const {auth, requestStub, getProjectIdStub} = createNoAdcAuth();
      let capturedTimeout: number | undefined;
      const sharedInterceptorCalled = sandbox.spy(
        async (config: GaxiosOptionsPrepared) => {
          config.headers.set('x-shared-interceptor', 'yes');
          capturedTimeout = config.timeout;
          return config;
        },
      );
      const reqInterceptorCalled = sandbox.spy(
        async (config: GaxiosOptionsPrepared) => {
          config.headers.set('x-request-interceptor', 'yes');
          return config;
        },
      );

      let capturedHeaders: Headers | undefined;
      let capturedSignal: AbortSignal | null | undefined;
      const mockFetch: GaxiosOptions['fetchImplementation'] = async (
        _url,
        init,
      ) => {
        capturedHeaders = new Headers(init?.headers);
        capturedSignal = init?.signal;
        return new Response(JSON.stringify({ok: true}), {
          status: 200,
          headers: {'content-type': 'application/json'},
        });
      };
      const gaxios = new Gaxios({fetchImplementation: mockFetch});

      const customTransport = new StorageTransport({
        apiEndpoint: CUSTOM_ENDPOINT,
        baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
        authClient: auth,
        customEndpoint: true,
        timeout: 12345,
        gaxiosInstance: gaxios,
        interceptors: [{resolved: sharedInterceptorCalled}],
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      await customTransport.makeRequest({
        method: 'GET',
        url: '/storage/v1/b/test-bucket',
        interceptors: [{resolved: reqInterceptorCalled}],
      });

      assert.strictEqual(sharedInterceptorCalled.calledOnce, true);
      assert.strictEqual(reqInterceptorCalled.calledOnce, true);
      assert.strictEqual(capturedTimeout, 12345);
      assert.ok(capturedSignal);
      assert.strictEqual(capturedHeaders?.get('x-shared-interceptor'), 'yes');
      assert.strictEqual(capturedHeaders?.get('x-request-interceptor'), 'yes');
      assert.strictEqual(capturedHeaders?.get('authorization'), null);
      assert.strictEqual(requestStub.called, false);
      assert.strictEqual(getProjectIdStub.called, false);

      // Verify per-request timeout overrides transport default timeout
      await customTransport.makeRequest({
        method: 'GET',
        url: '/storage/v1/b/test-bucket',
        timeout: 4567,
      });
      assert.strictEqual(capturedTimeout, 4567);

      // Verify retries run via plain Gaxios when bypassing auth
      let attemptCount = 0;
      const retryFetch: GaxiosOptions['fetchImplementation'] = async () => {
        attemptCount++;
        if (attemptCount === 1) {
          return new Response('Service Unavailable', {status: 503});
        }
        return new Response(JSON.stringify({retried: true}), {
          status: 200,
          headers: {'content-type': 'application/json'},
        });
      };
      const retryGaxios = new Gaxios({fetchImplementation: retryFetch});
      const retryTransport = new StorageTransport({
        apiEndpoint: CUSTOM_ENDPOINT,
        baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
        authClient: auth,
        customEndpoint: true,
        gaxiosInstance: retryGaxios,
        retryOptions: {
          ...defaultRetryOptions,
          maxRetries: 2,
          maxRetryDelay: 1,
          retryDelayMultiplier: 1,
        },
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });
      const retryRes = await retryTransport.makeRequest({
        method: 'GET',
        url: '/storage/v1/b/test-bucket',
        responseType: 'json',
      });
      assert.strictEqual(attemptCount, 2);
      assert.deepStrictEqual(retryRes.data, {retried: true});

      // Verify error decoration on plain Gaxios path
      const errorGaxios = new Gaxios();
      sandbox.stub(errorGaxios, 'request').rejects({
        response: {
          status: 404,
          data: {
            error: {
              message: 'No such object',
              errors: [{reason: 'notFound'}],
            },
          },
        },
        message: 'Request failed',
      });
      const errorTransport = new StorageTransport({
        apiEndpoint: CUSTOM_ENDPOINT,
        baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
        authClient: auth,
        customEndpoint: true,
        gaxiosInstance: errorGaxios,
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      await assert.rejects(
        errorTransport.makeRequest({url: '/storage/v1/b/b/o/missing'}),
        (err: Error & {code?: number; errors?: Array<{reason: string}>}) => {
          assert.strictEqual(err.code, 404);
          assert.strictEqual(err.message, 'No such object');
          assert.deepStrictEqual(err.errors, [{reason: 'notFound'}]);
          return true;
        },
      );

      // Verify streaming support on plain Gaxios path
      const streamGaxios = new Gaxios();
      const bodyStream = Readable.from(['hello stream']);
      sandbox.stub(streamGaxios, 'request').resolves({
        data: bodyStream,
        headers: new Headers(),
        status: 200,
        statusText: 'OK',
      } as unknown as GaxiosResponse);
      const streamTransport = new StorageTransport({
        apiEndpoint: CUSTOM_ENDPOINT,
        baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
        authClient: auth,
        customEndpoint: true,
        gaxiosInstance: streamGaxios,
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      const streamResult = await new Promise<Readable>((resolve, reject) => {
        streamTransport
          .makeRequest<Readable>(
            {url: '/storage/v1/b/b/o/f', responseType: 'stream'},
            (err, data) => {
              if (err) {
                reject(err);
                return;
              }
              resolve(data!);
            },
          )
          .catch(reject);
      });
      assert.strictEqual(streamResult, bodyStream);
    });

    it('should replace {{projectId}} tokens and handle project query params cleanly without calling getProjectId on unauthenticated custom endpoint', async () => {
      const {auth, getProjectIdStub} = createNoAdcAuth();
      const gaxios = new Gaxios();
      const gaxiosRequestStub = sandbox.stub(gaxios, 'request').resolves({
        data: {},
        headers: new Headers(),
        status: 200,
      } as unknown as GaxiosResponse);

      // Explicit projectId in transport options (replaces URL, project param, and query param tokens)
      const withProjectTransport = new StorageTransport({
        apiEndpoint: CUSTOM_ENDPOINT,
        baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
        authClient: auth,
        customEndpoint: true,
        projectId: 'explicit-project',
        gaxiosInstance: gaxios,
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      await withProjectTransport.makeRequest({
        url: '/storage/v1/projects/{{projectId}}/hmacKeys',
        queryParameters: {
          project: undefined,
          userProject: '{{projectId}}',
          scope: 'projects/{{projectId}}/buckets',
        },
      });
      let calledOpts = gaxiosRequestStub.firstCall.args[0] as GaxiosOptions;
      assert.strictEqual(
        calledOpts.url,
        `${CUSTOM_ENDPOINT}/storage/v1/projects/explicit-project/hmacKeys`,
      );
      assert.deepStrictEqual(calledOpts.params, {
        project: 'explicit-project',
        userProject: 'explicit-project',
        scope: 'projects/explicit-project/buckets',
      });
      assert.strictEqual(getProjectIdStub.called, false);

      // URL instance containing percent-encoded {{projectId}}
      await withProjectTransport.makeRequest({
        url: new URL(`${CUSTOM_ENDPOINT}/storage/v1/projects/{{projectId}}/b`),
      });
      calledOpts = gaxiosRequestStub.secondCall.args[0] as GaxiosOptions;
      assert.strictEqual(
        calledOpts.url,
        `${CUSTOM_ENDPOINT}/storage/v1/projects/explicit-project/b`,
      );

      // No projectId configured; explicit project query parameter must be preserved
      const withoutProjectTransport = new StorageTransport({
        apiEndpoint: CUSTOM_ENDPOINT,
        baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
        authClient: auth,
        customEndpoint: true,
        projectIdRequired: false,
        gaxiosInstance: gaxios,
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      await withoutProjectTransport.makeRequest({
        url: '/storage/v1/b',
        queryParameters: {project: 'query-project'},
      });
      calledOpts = gaxiosRequestStub.thirdCall.args[0] as GaxiosOptions;
      assert.deepStrictEqual(calledOpts.params, {project: 'query-project'});

      // No projectId configured and queryParameters.project is undefined or placeholder -> omitted cleanly
      await withoutProjectTransport.makeRequest({
        url: '/storage/v1/b',
        queryParameters: {project: undefined},
      });
      calledOpts = gaxiosRequestStub.getCall(3).args[0] as GaxiosOptions;
      assert.strictEqual(calledOpts.params, undefined);

      await withoutProjectTransport.makeRequest({
        url: '/storage/v1/b',
        queryParameters: {project: '{{projectId}}'},
      });
      calledOpts = gaxiosRequestStub.getCall(4).args[0] as GaxiosOptions;
      assert.strictEqual(calledOpts.params, undefined);
      assert.strictEqual(getProjectIdStub.called, false);

      // Per-request projectId replaces {{projectId}} without calling getProjectId
      await withoutProjectTransport.makeRequest({
        url: '/storage/v1/projects/{{projectId}}/serviceAccount',
        projectId: 'per-req-project',
      });
      calledOpts = gaxiosRequestStub.getCall(5).args[0] as GaxiosOptions;
      assert.strictEqual(
        calledOpts.url,
        `${CUSTOM_ENDPOINT}/storage/v1/projects/per-req-project/serviceAccount`,
      );
      assert.strictEqual(getProjectIdStub.called, false);
    });

    it('should lazily call authClient.getProjectId only when needed when authenticated with projectIdRequired false', async () => {
      const auth = new GoogleAuth();
      sandbox.stub(auth, 'getClient').resolves();
      const authRequestStub = sandbox.stub(auth, 'request').resolves({
        data: {},
        headers: new Headers(),
        status: 200,
      } as unknown as GaxiosResponse);
      const getProjectIdStub = sandbox
        .stub(auth, 'getProjectId')
        .resolves('detected-project');

      const authTransport = new StorageTransport({
        apiEndpoint: baseUrl,
        baseUrl,
        authClient: auth,
        customEndpoint: false,
        projectIdRequired: false,
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      // Request without project param or token should not trigger getProjectId
      await authTransport.makeRequest({
        url: '/storage/v1/b/my-bucket/o/my-file',
      });
      assert.strictEqual(getProjectIdStub.called, false);

      // Request with project placeholder should lazily resolve projectId via authClient
      await authTransport.makeRequest({
        url: '/storage/v1/b',
        queryParameters: {project: undefined},
      });
      assert.strictEqual(getProjectIdStub.calledOnce, true);
      const secondCallOpts = authRequestStub.secondCall
        .args[0] as GaxiosOptions;
      assert.deepStrictEqual(secondCallOpts.params, {
        project: 'detected-project',
      });
    });

    it('should invoke authClient.request and send Authorization header when customEndpoint is true and useAuthWithCustomEndpoint is true', async () => {
      const oauthClient = new OAuth2Client();
      oauthClient.setCredentials({
        access_token: 'custom-token',
        expiry_date: Date.now() + 3_600_000,
      });
      const auth = new GoogleAuth({authClient: oauthClient});
      const authRequestSpy = sandbox.spy(auth, 'request');

      let capturedHeaders: Headers | undefined;
      const mockFetch: GaxiosOptions['fetchImplementation'] = async (
        _url,
        init,
      ) => {
        capturedHeaders = new Headers(init?.headers);
        return new Response(JSON.stringify({ok: true}), {
          status: 200,
          headers: {'content-type': 'application/json'},
        });
      };
      const gaxios = new Gaxios({fetchImplementation: mockFetch});

      const customTransport = new StorageTransport({
        apiEndpoint: CUSTOM_ENDPOINT,
        baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
        authClient: auth,
        customEndpoint: true,
        useAuthWithCustomEndpoint: true,
        projectIdRequired: false,
        gaxiosInstance: gaxios,
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      const res = await customTransport.makeRequest({
        method: 'GET',
        url: '/storage/v1/b/my-bucket',
        responseType: 'json',
      });

      assert.deepStrictEqual(res.data, {ok: true});
      assert.strictEqual(authRequestSpy.calledOnce, true);
      assert.strictEqual(
        capturedHeaders?.get('authorization'),
        'Bearer custom-token',
      );
    });

    it('should skip universe domain validation when customEndpoint is true and useAuthWithCustomEndpoint is false', async () => {
      const auth = new GoogleAuth({credentials: OTHER_UNIVERSE_CREDENTIALS});
      const authRequestStub = sandbox.stub(auth, 'request');
      const gaxios = new Gaxios();
      const gaxiosRequestStub = sandbox.stub(gaxios, 'request').resolves({
        data: {ok: true},
        headers: new Headers(),
        status: 200,
      } as unknown as GaxiosResponse);

      const customTransport = new StorageTransport({
        apiEndpoint: CUSTOM_ENDPOINT,
        baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
        authClient: auth,
        customEndpoint: true,
        useAuthWithCustomEndpoint: false,
        gaxiosInstance: gaxios,
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      await customTransport.makeRequest({url: '/storage/v1/b/my-bucket'});
      assert.strictEqual(authRequestStub.called, false);
      assert.strictEqual(gaxiosRequestStub.calledOnce, true);
    });

    it('should enforce universe domain validation when customEndpoint is true and useAuthWithCustomEndpoint is true', async () => {
      const auth = new GoogleAuth({credentials: OTHER_UNIVERSE_CREDENTIALS});
      const authRequestStub = sandbox.stub(auth, 'request');

      const customTransport = new StorageTransport({
        apiEndpoint: CUSTOM_ENDPOINT,
        baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
        authClient: auth,
        customEndpoint: true,
        useAuthWithCustomEndpoint: true,
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      await assert.rejects(
        customTransport.makeRequest({url: '/storage/v1/b/my-bucket'}),
        /The configured universe domain \(googleapis\.com\) does not match the universe domain found in the credentials \(example-universe\.test\)/,
      );
      assert.strictEqual(authRequestStub.called, false);
    });

    it('should support PassThroughClient with projectIdRequired false without triggering getProjectId or universe domain errors', async () => {
      const auth = new GoogleAuth({authClient: new PassThroughClient()});
      const getProjectIdStub = sandbox
        .stub(auth, 'getProjectId')
        .rejects(new Error('Could not load the default credentials'));
      const mockFetch: GaxiosOptions['fetchImplementation'] = async () =>
        new Response(JSON.stringify({ok: true}), {
          status: 200,
          headers: {'content-type': 'application/json'},
        });
      const gaxios = new Gaxios({fetchImplementation: mockFetch});

      const customTransport = new StorageTransport({
        apiEndpoint: CUSTOM_ENDPOINT,
        baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
        authClient: auth,
        customEndpoint: true,
        useAuthWithCustomEndpoint: true,
        projectIdRequired: false,
        universeDomain: OTHER_UNIVERSE,
        gaxiosInstance: gaxios,
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      const res = await customTransport.makeRequest({
        url: '/storage/v1/b/my-bucket',
        responseType: 'json',
      });
      assert.deepStrictEqual(res.data, {ok: true});
      assert.strictEqual(getProjectIdStub.called, false);
    });

    it('should strip exact {{projectId}} query placeholders and reject unresolved path/embedded placeholders without calling getProjectId', async () => {
      const {auth, getProjectIdStub} = createNoAdcAuth();
      const capturedUrls: string[] = [];
      const mockFetch: GaxiosOptions['fetchImplementation'] = async url => {
        capturedUrls.push(String(url));
        return new Response(JSON.stringify({ok: true}), {
          status: 200,
          headers: {'content-type': 'application/json'},
        });
      };
      const gaxios = new Gaxios({fetchImplementation: mockFetch});

      const transportWithoutProject = new StorageTransport({
        apiEndpoint: CUSTOM_ENDPOINT,
        baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
        authClient: auth,
        customEndpoint: true,
        projectIdRequired: false,
        gaxiosInstance: gaxios,
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      // Exact {{projectId}} placeholders in non-project query params and arrays are stripped cleanly
      await transportWithoutProject.makeRequest({
        url: '/storage/v1/b',
        queryParameters: {
          project: '{{projectId}}',
          userProject: '{{projectId}}',
          prefix: 'logs/',
          tags: ['{{projectId}}', 'keep'] as unknown as string,
          onlyToken: ['{{projectId}}'] as unknown as string,
        },
      });
      assert.strictEqual(
        capturedUrls[0],
        `${CUSTOM_ENDPOINT}/storage/v1/b?prefix=logs%2F&tags=keep`,
      );

      // URL-embedded exact query param placeholder (raw and encoded) is stripped cleanly
      await transportWithoutProject.makeRequest({
        url: '/storage/v1/b?project={{projectId}}&prefix=foo',
      });
      assert.strictEqual(
        capturedUrls[1],
        `${CUSTOM_ENDPOINT}/storage/v1/b?prefix=foo`,
      );

      await transportWithoutProject.makeRequest({
        url: new URL(`${CUSTOM_ENDPOINT}/storage/v1/b?project={{projectId}}`),
      });
      assert.strictEqual(capturedUrls[2], `${CUSTOM_ENDPOINT}/storage/v1/b`);

      // Path or embedded {{projectId}} placeholders reject before any HTTP request is sent
      const callCountBeforeReject = capturedUrls.length;
      await assert.rejects(
        transportWithoutProject.makeRequest({
          url: '/storage/v1/projects/{{projectId}}/hmacKeys',
        }),
        /projectId is required/,
      );
      await assert.rejects(
        transportWithoutProject.makeRequest({
          url: new URL(
            `${CUSTOM_ENDPOINT}/storage/v1/projects/{{projectId}}/b`,
          ),
        }),
        /projectId is required/,
      );
      await assert.rejects(
        transportWithoutProject.makeRequest({
          url: '/storage/v1/b',
          queryParameters: {
            scope: 'projects/{{projectId}}/buckets',
          },
        }),
        /projectId is required/,
      );
      await assert.rejects(
        transportWithoutProject.makeRequest({
          url: '/storage/v1/b',
          queryParameters: {
            scopes: ['projects/{{projectId}}/buckets'] as unknown as string,
          },
        }),
        /projectId is required/,
      );

      assert.strictEqual(capturedUrls.length, callCountBeforeReject);
      for (const sentUrl of capturedUrls) {
        assert.strictEqual(sentUrl.includes('{{projectId}}'), false);
        assert.strictEqual(
          sentUrl.includes(encodeURIComponent('{{projectId}}')),
          false,
        );
      }
      assert.strictEqual(getProjectIdStub.called, false);
    });

    it('should preserve gaxiosInstance defaults, response interceptors, maxRetries cap, retry:false, and error decoration with per-request interceptors', async () => {
      const {auth, requestStub, getProjectIdStub} = createNoAdcAuth();
      let attempts = 0;
      const seenDefaultHeaders: Array<string | null> = [];
      const seenReqHeaders: Array<string | null> = [];
      const seenTimeouts: Array<number | undefined> = [];

      const mockFetch: GaxiosOptions['fetchImplementation'] = async (
        _url,
        init,
      ) => {
        attempts++;
        const hdrs = new Headers(init?.headers);
        seenDefaultHeaders.push(hdrs.get('x-gaxios-default'));
        seenReqHeaders.push(hdrs.get('x-per-request'));
        if (attempts <= 3) {
          return new Response(
            JSON.stringify({
              error: {
                message: 'Backend unavailable',
                errors: [{reason: 'backendError'}],
              },
            }),
            {
              status: 503,
              headers: {'content-type': 'application/json'},
            },
          );
        }
        return new Response(JSON.stringify({ok: true}), {
          status: 200,
          headers: {'content-type': 'application/json'},
        });
      };

      const gaxios = new Gaxios({
        fetchImplementation: mockFetch,
        headers: {'x-gaxios-default': 'from-defaults'},
        timeout: 7777,
      });
      const responseInterceptorSpy = sandbox.spy(
        async (res: GaxiosResponse) => res,
      );
      gaxios.interceptors.response.add({resolved: responseInterceptorSpy});

      const transport = new StorageTransport({
        apiEndpoint: CUSTOM_ENDPOINT,
        baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
        authClient: auth,
        customEndpoint: true,
        gaxiosInstance: gaxios,
        retryOptions: {
          ...defaultRetryOptions,
          maxRetries: 2,
          maxRetryDelay: 1,
          retryDelayMultiplier: 1,
        },
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      const reqInterceptor = sandbox.spy(
        async (config: GaxiosOptionsPrepared) => {
          seenTimeouts.push(config.timeout);
          config.headers.set('x-per-request', 'per-req-value');
          return config;
        },
      );

      // Exhausts 1 initial + 2 retries = 3 total attempts and decorates the final error
      await assert.rejects(
        transport.makeRequest({
          method: 'GET',
          url: '/storage/v1/b/retry-exhaust',
          responseType: 'json',
          interceptors: [{resolved: reqInterceptor}],
        }),
        (err: Error & {code?: number; errors?: Array<{reason: string}>}) => {
          assert.strictEqual(err.code, 503);
          assert.strictEqual(err.message, 'Backend unavailable');
          assert.deepStrictEqual(err.errors, [{reason: 'backendError'}]);
          return true;
        },
      );
      assert.strictEqual(attempts, 3);
      assert.deepStrictEqual(seenDefaultHeaders, [
        'from-defaults',
        'from-defaults',
        'from-defaults',
      ]);
      assert.deepStrictEqual(seenReqHeaders, [
        'per-req-value',
        'per-req-value',
        'per-req-value',
      ]);
      assert.strictEqual(seenTimeouts[0], 7777);

      // Next request succeeds and invokes the copied gaxiosInstance response interceptor
      const okRes = await transport.makeRequest({
        method: 'GET',
        url: '/storage/v1/b/ok',
        responseType: 'json',
        interceptors: [{resolved: reqInterceptor}],
      });
      assert.deepStrictEqual(okRes.data, {ok: true});
      assert.strictEqual(responseInterceptorSpy.calledOnce, true);

      // reqOpts.retry: false disables retries even for retryable 503 responses
      attempts = 0;
      await assert.rejects(
        transport.makeRequest({
          method: 'POST',
          url: '/storage/v1/b/no-retry',
          retry: false,
          responseType: 'json',
        }),
        (err: Error & {code?: number}) => {
          assert.strictEqual(err.code, 503);
          return true;
        },
      );
      assert.strictEqual(attempts, 1);
      assert.strictEqual(requestStub.called, false);
      assert.strictEqual(getProjectIdStub.called, false);
    });

    it('should omit empty query parameter objects while preserving falsy primitive values (0, false, empty string)', async () => {
      const {auth} = createNoAdcAuth();
      const capturedUrls: string[] = [];
      const mockFetch: GaxiosOptions['fetchImplementation'] = async url => {
        capturedUrls.push(String(url));
        return new Response(JSON.stringify({}), {
          status: 200,
          headers: {'content-type': 'application/json'},
        });
      };
      const gaxios = new Gaxios({fetchImplementation: mockFetch});

      const customTransport = new StorageTransport({
        apiEndpoint: CUSTOM_ENDPOINT,
        baseUrl: `${CUSTOM_ENDPOINT}/storage/v1`,
        authClient: auth,
        customEndpoint: true,
        projectIdRequired: false,
        gaxiosInstance: gaxios,
        retryOptions: defaultRetryOptions,
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      await customTransport.makeRequest({
        url: '/storage/v1/b',
        queryParameters: {},
      });
      await customTransport.makeRequest({
        url: '/storage/v1/b',
        queryParameters: {project: undefined},
      });
      await customTransport.makeRequest({
        url: '/storage/v1/b',
        queryParameters: {permissions: [] as unknown as string},
      });
      await customTransport.makeRequest({
        url: '/storage/v1/b',
        queryParameters: {
          project: undefined,
          maxResults: 0,
          versions: false,
          prefix: '',
          ifGenerationMatch: 0,
        },
      });

      assert.strictEqual(capturedUrls[0], `${CUSTOM_ENDPOINT}/storage/v1/b`);
      assert.strictEqual(capturedUrls[1], `${CUSTOM_ENDPOINT}/storage/v1/b`);
      assert.strictEqual(capturedUrls[2], `${CUSTOM_ENDPOINT}/storage/v1/b`);

      const falsyUrl = new URL(capturedUrls[3]);
      assert.strictEqual(falsyUrl.searchParams.has('project'), false);
      assert.strictEqual(falsyUrl.searchParams.get('maxResults'), '0');
      assert.strictEqual(falsyUrl.searchParams.get('versions'), 'false');
      assert.strictEqual(falsyUrl.searchParams.get('prefix'), '');
      assert.strictEqual(falsyUrl.searchParams.get('ifGenerationMatch'), '0');
    });
  });
});
