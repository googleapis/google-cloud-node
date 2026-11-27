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

import * as http from 'http';
import {AddressInfo} from 'net';
import {PassThrough, Readable} from 'stream';
import {describe} from 'mocha';
import nock from 'nock';
import {
  StorageRequestOptions,
  StorageTransport,
} from '../src/storage-transport.js';
import {GoogleAuth, OAuth2Client} from 'google-auth-library';
import sinon, {createSandbox} from 'sinon';
import assert from 'assert';
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

  describe('multipart streaming', () => {
    const UUID_BOUNDARY_REGEX =
      /^multipart\/related; boundary="([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})"$/;

    beforeEach(() => {
      nock.enableNetConnect('127.0.0.1');
    });

    afterEach(() => {
      nock.disableNetConnect();
    });

    function createLiveTransport(endpoint: string) {
      const oauthClient = new OAuth2Client();
      oauthClient.setCredentials({
        access_token: 'test-secret-token',
        expiry_date: Date.now() + 600_000,
      });
      return new StorageTransport({
        apiEndpoint: endpoint,
        baseUrl: endpoint,
        authClient: oauthClient,
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
    }

    async function startServer(
      handler: (req: http.IncomingMessage, res: http.ServerResponse) => void,
    ): Promise<{server: http.Server; endpoint: string}> {
      const server = http.createServer(handler);
      await new Promise<void>(resolve =>
        server.listen(0, '127.0.0.1', resolve),
      );
      const {port} = server.address() as AddressInfo;
      return {server, endpoint: `http://127.0.0.1:${port}`};
    }

    async function closeServer(server: http.Server): Promise<void> {
      server.closeAllConnections?.();
      await new Promise<void>(resolve => server.close(() => resolve()));
    }

    function parseMultipartParts(
      body: Buffer,
      boundary: string,
    ): Array<{headers: string; body: Buffer}> {
      const delimiter = Buffer.from(`--${boundary}`);
      const closing = Buffer.from(`--${boundary}--`);
      const parts: Array<{headers: string; body: Buffer}> = [];
      let offset = body.indexOf(delimiter);
      while (offset !== -1) {
        if (body.subarray(offset, offset + closing.length).equals(closing)) {
          break;
        }
        const headerStart = offset + delimiter.length + 2; // skip \r\n
        const headerEnd = body.indexOf(Buffer.from('\r\n\r\n'), headerStart);
        assert.notStrictEqual(headerEnd, -1, 'Expected part header separator');
        const nextBoundary = body.indexOf(
          Buffer.from(`\r\n--${boundary}`),
          headerEnd + 4,
        );
        assert.notStrictEqual(nextBoundary, -1, 'Expected next boundary');
        parts.push({
          headers: body.subarray(headerStart, headerEnd).toString('utf8'),
          body: body.subarray(headerEnd + 4, nextBoundary),
        });
        offset = nextBoundary + 2; // point at --boundary
      }
      return parts;
    }

    it('should stream multipart chunks incrementally before the source stream finishes', async () => {
      let resolveFirstChunk!: () => void;
      const firstChunkReceived = new Promise<void>(resolve => {
        resolveFirstChunk = resolve;
      });
      let receivedHeaders: http.IncomingHttpHeaders = {};
      const chunks: Buffer[] = [];
      let accumulated = '';

      const {server, endpoint} = await startServer((req, res) => {
        receivedHeaders = req.headers;
        req.on('data', (chunk: Buffer) => {
          chunks.push(chunk);
          accumulated += chunk.toString('utf8');
          if (accumulated.includes('first-chunk-payload')) {
            resolveFirstChunk();
          }
        });
        req.on('end', () => {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify({name: 'streamed.txt'}));
        });
      });

      try {
        const liveTransport = createLiveTransport(endpoint);
        const media = new PassThrough();

        const reqPromise = liveTransport.makeRequest<{name: string}>({
          url: '/upload/storage/v1/b/test-bucket/o',
          method: 'POST',
          queryParameters: {name: 'streamed.txt', uploadType: 'multipart'},
          responseType: 'json',
          multipart: [
            {
              headers: new Headers({'Content-Type': 'application/json'}),
              content: JSON.stringify({name: 'streamed.txt'}),
            },
            {
              headers: new Headers({'Content-Type': 'text/plain'}),
              content: media,
            },
          ],
        });

        media.write(Buffer.from('first-chunk-payload-'));
        // Proves streaming: server must receive the first chunk before media ends.
        await Promise.race([
          firstChunkReceived,
          reqPromise.then(() => {
            throw new Error('Request resolved before first chunk arrived');
          }),
        ]);
        media.end(Buffer.from('second-chunk-payload'));

        const resp = await reqPromise;
        assert.strictEqual(resp.status, 200);
        assert.strictEqual(resp.data.name, 'streamed.txt');
        assert.strictEqual(receivedHeaders['transfer-encoding'], 'chunked');
        assert.strictEqual(receivedHeaders['content-length'], undefined);

        const ctMatch =
          receivedHeaders['content-type']?.match(UUID_BOUNDARY_REGEX);
        assert.ok(
          ctMatch,
          `Unexpected Content-Type: ${receivedHeaders['content-type']}`,
        );
        const parts = parseMultipartParts(Buffer.concat(chunks), ctMatch[1]);
        assert.strictEqual(parts.length, 2);
        assert.strictEqual(
          parts[0].body.toString('utf8'),
          '{"name":"streamed.txt"}',
        );
        assert.strictEqual(
          parts[1].body.toString('utf8'),
          'first-chunk-payload-second-chunk-payload',
        );
        assert.strictEqual(media.listenerCount('error'), 0);
        assert.strictEqual(media.listenerCount('close'), 0);
        assert.strictEqual(media.listenerCount('end'), 0);
      } finally {
        await closeServer(server);
      }
    });

    it('should generate unique random boundaries per request and preserve payloads containing the legacy boundary', async () => {
      const boundaries: string[] = [];
      const extractedPayloads: string[] = [];
      const trickyPayload =
        'prefix\r\n--===============storage_multipart_boundary==\r\n' +
        'Content-Type: text/plain\r\n\r\n' +
        '===============storage_multipart_boundary==--\r\nsuffix';

      const {server, endpoint} = await startServer((req, res) => {
        const chunks: Buffer[] = [];
        req.on('data', (chunk: Buffer) => chunks.push(chunk));
        req.on('end', () => {
          const ctMatch =
            req.headers['content-type']?.match(UUID_BOUNDARY_REGEX);
          assert.ok(
            ctMatch,
            `Expected UUID boundary in ${req.headers['content-type']}`,
          );
          boundaries.push(ctMatch[1]);
          const parts = parseMultipartParts(Buffer.concat(chunks), ctMatch[1]);
          assert.strictEqual(parts.length, 2);
          extractedPayloads.push(parts[1].body.toString('utf8'));
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify({ok: true}));
        });
      });

      try {
        const liveTransport = createLiveTransport(endpoint);
        for (let i = 0; i < 2; i++) {
          const media = Readable.from([Buffer.from(trickyPayload)]);
          const resp = await liveTransport.makeRequest({
            url: '/upload/storage/v1/b/test-bucket/o',
            method: 'POST',
            responseType: 'json',
            multipart: [
              {
                headers: new Headers({'Content-Type': 'application/json'}),
                content: JSON.stringify({attempt: i}),
              },
              {
                headers: new Headers({
                  'Content-Type': 'application/octet-stream',
                }),
                content: media,
              },
            ],
          });
          assert.strictEqual(resp.status, 200);
        }

        assert.strictEqual(boundaries.length, 2);
        assert.notStrictEqual(boundaries[0], boundaries[1]);
        assert.deepStrictEqual(extractedPayloads, [
          trickyPayload,
          trickyPayload,
        ]);
      } finally {
        await closeServer(server);
      }
    });

    it('should support plain-object part headers, Buffer/Uint8Array parts, empty streams, and strip stale Content-Length', async () => {
      let receivedHeaders: http.IncomingHttpHeaders = {};
      let parsedParts: Array<{headers: string; body: Buffer}> = [];

      const {server, endpoint} = await startServer((req, res) => {
        receivedHeaders = req.headers;
        const chunks: Buffer[] = [];
        req.on('data', (chunk: Buffer) => chunks.push(chunk));
        req.on('end', () => {
          const ctMatch =
            req.headers['content-type']?.match(UUID_BOUNDARY_REGEX);
          assert.ok(ctMatch);
          parsedParts = parseMultipartParts(Buffer.concat(chunks), ctMatch[1]);
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify({ok: true}));
        });
      });

      try {
        const liveTransport = createLiveTransport(endpoint);
        const resp = await liveTransport.makeRequest({
          url: '/upload',
          method: 'POST',
          headers: {'Content-Length': '999999'},
          responseType: 'json',
          multipart: [
            {
              headers: {
                'content-type': 'application/json',
              } as unknown as Headers,
              content: '{"meta":true}',
            },
            {
              headers: new Headers({
                'Content-Type': 'application/octet-stream',
              }),
              content: Buffer.from('buf-part') as unknown as Readable,
            },
            {
              headers: new Headers({
                'Content-Type': 'application/octet-stream',
              }),
              content: new Uint8Array([65, 66, 67]) as unknown as Readable,
            },
            {
              headers: new Headers({'Content-Type': 'text/plain'}),
              content: Readable.from([]),
            },
          ],
        });

        assert.strictEqual(resp.status, 200);
        assert.strictEqual(receivedHeaders['content-length'], undefined);
        assert.strictEqual(receivedHeaders['transfer-encoding'], 'chunked');
        assert.strictEqual(parsedParts.length, 4);
        assert.strictEqual(
          parsedParts[0].headers,
          'Content-Type: application/json',
        );
        assert.strictEqual(
          parsedParts[0].body.toString('utf8'),
          '{"meta":true}',
        );
        assert.strictEqual(parsedParts[1].body.toString('utf8'), 'buf-part');
        assert.strictEqual(parsedParts[2].body.toString('utf8'), 'ABC');
        assert.strictEqual(parsedParts[3].body.length, 0);
      } finally {
        await closeServer(server);
      }
    });

    it('should reject cleanly and abort the HTTP upload when a stream part errors mid-upload', async () => {
      let resolveFirstChunk!: () => void;
      const firstChunkReceived = new Promise<void>(resolve => {
        resolveFirstChunk = resolve;
      });
      let serverSawEnd = false;
      let serverBody = '';

      const {server, endpoint} = await startServer((req, res) => {
        req.on('data', (chunk: Buffer) => {
          serverBody += chunk.toString('utf8');
          if (serverBody.includes('partial-payload')) {
            resolveFirstChunk();
          }
        });
        req.on('end', () => {
          serverSawEnd = true;
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end('{}');
        });
      });

      try {
        const liveTransport = createLiveTransport(endpoint);
        const media = new PassThrough();

        const reqPromise = liveTransport.makeRequest({
          url: '/upload',
          method: 'POST',
          responseType: 'json',
          multipart: [
            {
              headers: new Headers({'Content-Type': 'application/json'}),
              content: '{}',
            },
            {
              headers: new Headers({
                'Content-Type': 'application/octet-stream',
              }),
              content: media,
            },
          ],
        });

        media.write(Buffer.from('partial-payload'));
        await firstChunkReceived;
        media.destroy(new Error('stream boom'));

        await assert.rejects(reqPromise, (err: Error) => {
          assert.ok(err instanceof Error);
          return true;
        });

        assert.strictEqual(serverSawEnd, false);
        assert.strictEqual(
          media.listeners('error').filter(fn => fn.name === 'onError').length,
          0,
        );
        assert.strictEqual(
          media.listeners('close').filter(fn => fn.name === 'onClose').length,
          0,
        );
      } finally {
        await closeServer(server);
      }
    });

    it('should reject cleanly when a stream part is destroyed prematurely without an error argument', async () => {
      let resolveFirstChunk!: () => void;
      const firstChunkReceived = new Promise<void>(resolve => {
        resolveFirstChunk = resolve;
      });
      let serverSawEnd = false;
      let serverBody = '';

      const {server, endpoint} = await startServer((req, res) => {
        req.on('data', (chunk: Buffer) => {
          serverBody += chunk.toString('utf8');
          if (serverBody.includes('partial-destroy')) {
            resolveFirstChunk();
          }
        });
        req.on('end', () => {
          serverSawEnd = true;
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end('{}');
        });
      });

      try {
        const liveTransport = createLiveTransport(endpoint);
        const media = new PassThrough();

        const reqPromise = liveTransport.makeRequest({
          url: '/upload',
          method: 'POST',
          responseType: 'json',
          multipart: [
            {
              headers: new Headers({'Content-Type': 'application/json'}),
              content: '{}',
            },
            {
              headers: new Headers({
                'Content-Type': 'application/octet-stream',
              }),
              content: media,
            },
          ],
        });

        media.write(Buffer.from('partial-destroy'));
        await firstChunkReceived;
        media.destroy();

        await assert.rejects(reqPromise, (err: Error) => {
          assert.ok(err instanceof Error);
          return true;
        });
        assert.strictEqual(serverSawEnd, false);
      } finally {
        await closeServer(server);
      }
    });

    it('should reject without calling authClient.request if a stream part errors during pre-request awaits', async () => {
      const auth = new GoogleAuth();
      const requestStub = sandbox.stub(auth, 'request').resolves({
        data: {},
        headers: new Map(),
      } as unknown as GaxiosResponse);
      sandbox.stub(auth, 'getClient').resolves();
      sandbox.stub(auth, 'getProjectId').callsFake(async () => {
        await new Promise(resolve => setTimeout(resolve, 20));
        return 'project-id';
      });

      const delayedTransport = new StorageTransport({
        apiEndpoint: baseUrl,
        baseUrl,
        authClient: auth,
        retryOptions: {
          maxRetries: 3,
          retryableErrorFn: RETRYABLE_ERR_FN_DEFAULT,
        },
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        packageJson: {name: 'test-package', version: '1.0.0'},
      });

      const media = new PassThrough();
      const reqPromise = delayedTransport.makeRequest({
        url: '/upload',
        method: 'POST',
        multipart: [
          {
            headers: new Headers({'Content-Type': 'application/json'}),
            content: '{}',
          },
          {
            headers: new Headers({'Content-Type': 'application/octet-stream'}),
            content: media,
          },
        ],
      });

      media.destroy(new Error('early stream failure'));

      await assert.rejects(reqPromise, /early stream failure/);
      assert.strictEqual(requestStub.called, false);
      assert.strictEqual(media.listenerCount('error'), 0);
    });

    it('should disable gaxios retries on stream bodies while preserving hasPrecondition and setting byte-mode Readable', async () => {
      const requestStub = authClientStub.request as sinon.SinonStub;
      requestStub.resolves({data: {}, headers: new Map()});

      const media = new PassThrough();
      media.end('hello');

      const originalMultipart = [
        {
          headers: new Headers({'Content-Type': 'application/json'}),
          content: '{}',
        },
        {
          headers: new Headers({'Content-Type': 'text/plain'}),
          content: media,
        },
      ];
      const reqOpts: StorageRequestOptions = {
        url: '/upload/storage/v1/b/bucket/o',
        method: 'POST',
        queryParameters: {uploadType: 'multipart', ifGenerationMatch: 0},
        multipart: originalMultipart,
      };

      await transport.makeRequest(reqOpts);

      assert.strictEqual(requestStub.calledOnce, true);
      const calledWith = requestStub.getCall(0).args[0];
      assert.strictEqual(calledWith.multipart, undefined);
      assert.ok(calledWith.body instanceof Readable);
      assert.strictEqual(calledWith.body.readableObjectMode, false);
      assert.strictEqual(calledWith.data, calledWith.body);
      assert.strictEqual(calledWith.hasPrecondition, true);
      assert.strictEqual(calledWith.retryConfig.retry, 0);
      assert.strictEqual(calledWith.retryConfig.noResponseRetries, 0);
      assert.strictEqual(
        calledWith.retryConfig.shouldRetry({
          response: {status: 503},
          config: {method: 'POST', url: '/upload', hasPrecondition: true},
        } as unknown as GaxiosError),
        false,
      );
      // Verify caller's reqOpts was not mutated.
      assert.strictEqual(reqOpts.multipart, originalMultipart);
    });

    it('should redact sensitive headers without blocking the event loop on large binary or streaming error paths', async () => {
      const {server, endpoint} = await startServer((req, res) => {
        req.once('data', () => {
          res.writeHead(403, {'Content-Type': 'application/json'});
          res.end(
            JSON.stringify({error: {code: 403, message: 'Access Denied'}}),
          );
        });
      });

      try {
        const liveTransport = createLiveTransport(endpoint);

        // 1. Streaming multipart early 403 error redacts Authorization header cleanly.
        const media = new PassThrough();
        const streamReq = liveTransport.makeRequest({
          url: '/upload?token=secret-query-token',
          method: 'POST',
          responseType: 'json',
          multipart: [
            {
              headers: new Headers({'Content-Type': 'application/json'}),
              content: '{}',
            },
            {
              headers: new Headers({
                'Content-Type': 'application/octet-stream',
              }),
              content: media,
            },
          ],
        });
        media.write(Buffer.alloc(32 * 1024, 0x61));

        await assert.rejects(streamReq, (err: GaxiosError) => {
          assert.strictEqual(err.code, 403);
          assert.strictEqual(err.message, 'Access Denied');
          const authHeader = err.config?.headers?.get('authorization');
          assert.ok(authHeader && authHeader.includes('REDACTED'));
          assert.ok(
            err.config?.url?.searchParams.get('token')?.includes('REDACTED'),
          );
          return true;
        });

        // 2. Large 64 MiB Buffer body error redaction completes in O(1) without stalling event loop.
        const largeBuf = Buffer.alloc(64 * 1024 * 1024);
        const start = Date.now();
        await assert.rejects(
          liveTransport.makeRequest({
            url: '/upload?token=secret-buf-token',
            method: 'POST',
            body: largeBuf,
            maxRetries: 0,
            responseType: 'json',
          }),
          (err: GaxiosError) => {
            assert.strictEqual(err.code, 403);
            const authHeader = err.config?.headers?.get('authorization');
            assert.ok(authHeader && authHeader.includes('REDACTED'));
            assert.ok(
              err.config?.url?.searchParams.get('token')?.includes('REDACTED'),
            );
            return true;
          },
        );
        const elapsedMs = Date.now() - start;
        assert.ok(
          elapsedMs < 1500,
          `Expected O(1) error redaction without event-loop stall, took ${elapsedMs}ms`,
        );
      } finally {
        await closeServer(server);
      }
    });
  });
});
