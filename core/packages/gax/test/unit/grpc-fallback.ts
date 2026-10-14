/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-undef */

import assert from 'assert';
import {describe, it, beforeEach, afterEach, after} from 'mocha';
import * as protobuf from 'protobufjs';
import * as sinon from 'sinon';
import * as stream from 'stream';
import echoProtoJson = require('../fixtures/echo.json');
import {GrpcClient} from '../../src/fallback';
import {
  CallSettings,
  ClientStubOptions,
  GoogleAuth,
  GoogleError,
  Status,
  createApiCall,
} from '../../src';
import {GRPCCall} from '../../src/apitypes';
import {StreamArrayParser} from '../../src/streamArrayParser';
import {gaxios, PassThroughClient} from 'google-auth-library';
import {
  setMockFallbackError,
  setMockFallbackHttpResponse,
  setMockFallbackResponse,
} from './utils';

let authClient = new PassThroughClient();
let opts = {
  auth: new GoogleAuth({authClient}),
};

beforeEach(() => {
  authClient = new PassThroughClient();
  opts = {
    auth: new GoogleAuth({authClient}),
  };
});

describe('loadProto', () => {
  it('should create a root object', () => {
    // @ts-ignore incomplete options
    const gaxGrpc = new GrpcClient(opts);
    const protos = gaxGrpc.loadProto(echoProtoJson);

    assert(protos instanceof protobuf.Root);
    assert(protos.lookupService('Echo') instanceof protobuf.Service);
    assert(protos.lookupType('EchoRequest') instanceof protobuf.Type);
  });

  it('should create a root object using loadProtoJSON', () => {
    // @ts-ignore incomplete options
    const gaxGrpc = new GrpcClient(opts);
    const protos = gaxGrpc.loadProtoJSON(echoProtoJson);

    assert(protos instanceof protobuf.Root);
    assert(protos.lookupService('Echo') instanceof protobuf.Service);
    assert(protos.lookupType('EchoRequest') instanceof protobuf.Type);
  });

  it('should cache root object using loadProtoJSON', () => {
    // @ts-ignore incomplete options
    const gaxGrpc = new GrpcClient(opts);
    const protos1 = gaxGrpc.loadProtoJSON(echoProtoJson);
    const protos2 = gaxGrpc.loadProtoJSON(echoProtoJson);

    assert.strictEqual(protos1, protos2);
  });

  it('should not cache root object using loadProtoJSON when asked', () => {
    // @ts-ignore incomplete options
    const gaxGrpc = new GrpcClient(opts);
    const protos1 = gaxGrpc.loadProtoJSON(echoProtoJson, /*ignoreCache:*/ true);
    const protos2 = gaxGrpc.loadProtoJSON(echoProtoJson, /*ignoreCache:*/ true);

    assert.notStrictEqual(protos1, protos2);
  });

  it('should be able to load no files', () => {
    // @ts-ignore incomplete options
    const gaxGrpc = new GrpcClient(opts);
    const protos = gaxGrpc.loadProto({});
    assert(protos instanceof protobuf.Root);

    assert(protos.nested === undefined);
    assert.strictEqual(protos.nested, undefined);
  });
});

describe('createStub', () => {
  let gaxGrpc: GrpcClient,
    protos,
    echoService: protobuf.Service,
    stubOptions: {},
    stubExtraOptions: {};

  beforeEach(() => {
    gaxGrpc = new GrpcClient(opts);
    protos = gaxGrpc.loadProto(echoProtoJson);
    echoService = protos.lookupService('Echo');
    stubOptions = {
      servicePath: 'foo.example.com',
      port: 443,
    };
    stubExtraOptions = {
      servicePath: 'foo.example.com',
      port: 443,
      other_dummy_options: 'test',
    };
  });

  it('should create a stub', async () => {
    const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

    // The stub should consist of service methods
    assert.strictEqual(typeof echoStub.echo, 'function');
    assert.strictEqual(typeof echoStub.pagedExpand, 'function');
    assert.strictEqual(typeof echoStub.wait, 'function');
    assert.strictEqual(typeof echoStub.close, 'function');

    // There should be 7 methods for the echo service + 1 close method.
    assert.strictEqual(Object.keys(echoStub).length, 8);

    // Each of the service methods should take 4 arguments (so that it works with createApiCall)
    assert.strictEqual(echoStub.echo.length, 4);
  });

  it('validates universe domain if set', async () => {
    const opts = {...stubOptions, universeDomain: 'example.com'};
    await assert.rejects(
      gaxGrpc.createStub(echoService, opts),
      /configured universe domain/,
    );
  });

  it('validates universe domain if unset', async () => {
    authClient.universeDomain = 'example.com';
    await assert.rejects(
      gaxGrpc.createStub(echoService, stubOptions),
      /configured universe domain/,
    );
    // reset to default value
    authClient.universeDomain = 'googleapis.com';
  });

  it('should support optional parameters', async () => {
    const echoStub = await gaxGrpc.createStub(echoService, stubExtraOptions);

    // The stub should consist of methods
    assert.strictEqual(typeof echoStub.echo, 'function');
    assert.strictEqual(typeof echoStub.collect, 'function');
    assert.strictEqual(typeof echoStub.chat, 'function');
    assert.strictEqual(typeof echoStub.close, 'function');

    // There should be 7 methods for the echo service + 1 close method.
    assert.strictEqual(Object.keys(echoStub).length, 8);

    // Each of the service methods should take 4 arguments (so that it works with createApiCall)
    assert.strictEqual(echoStub.echo.length, 4);
  });
});

describe('grpc-fallback', () => {
  let gaxGrpc: GrpcClient,
    protos: protobuf.NamespaceBase,
    echoService: protobuf.Service,
    stubOptions: ClientStubOptions;
  const createdAbortControllers: AbortController[] = [];
  const savedAbortController = AbortController;

  beforeEach(() => {
    stubOptions = {
      servicePath: 'foo.example.com',
      port: 443,
    };

    gaxGrpc = new GrpcClient(opts);
    protos = gaxGrpc.loadProto(echoProtoJson);
    echoService = protos.lookupService('Echo');
    stubOptions = {
      servicePath: 'foo.example.com',
      port: 443,
    };

    class FakeAbortController extends savedAbortController {
      abortCalled = false;

      constructor() {
        super();
        createdAbortControllers.push(this);
      }
      abort(reason?: unknown) {
        super.abort(reason);
        this.abortCalled = true;
      }
    }

    // eslint-disable-next-line no-global-assign
    AbortController = FakeAbortController;
  });

  beforeEach(() => {
    createdAbortControllers.splice(0);
  });

  afterEach(() => {
    sinon.restore();
  });

  after(() => {
    // eslint-disable-next-line no-global-assign
    AbortController = savedAbortController;
  });

  it('should send grpc-web version in the header', () => {
    const gapicConfig = {
      interfaces: {
        'google.showcase.v1beta1.Echo': {
          retry_codes: {
            idempotent: ['DEADLINE_EXCEEDED', 'UNAVAILABLE'],
            non_idempotent: [],
          },
          retry_params: {
            default: {
              initial_retry_delay_millis: 100,
              retry_delay_multiplier: 1.3,
              max_retry_delay_millis: 60000,
              initial_rpc_timeout_millis: 20000,
              rpc_timeout_multiplier: 1.0,
              max_rpc_timeout_millis: 20000,
              total_timeout_millis: 600000,
            },
          },
          methods: {
            Echo: {
              timeout_millis: 60000,
              retry_codes_name: 'idempotent',
              retry_params_name: 'default',
            },
          },
        },
      },
    };

    const settings = gaxGrpc.constructSettings(
      'google.showcase.v1beta1.Echo',
      gapicConfig,
      {},
      {},
    );
    const metadataBuilder = settings.echo.otherArgs.metadataBuilder;
    const headers = metadataBuilder();
    assert(headers['x-goog-api-client'][0].match('grpc-web/'));
    assert.strictEqual(settings.echo.otherArgs.internalMethodName, undefined);
  });

  it('constructSettings should accept enableTelemetryTracing and internalTelemetryInfo', () => {
    const gapicConfig = {
      interfaces: {
        'google.showcase.v1beta1.Echo': {
          retry_codes: {},
          retry_params: {},
          methods: {
            Echo: {
              timeout_millis: 60000,
            },
          },
        },
      },
    };
    const telemetryInfo = {
      gcpClientService: 'fake',
      gcpVersion: 'v1',
      gcpRepo: 'googleapis/google-cloud-node',
      gcpArtifact: '@google-cloud/fake',
    };
    const settings = gaxGrpc.constructSettings(
      'google.showcase.v1beta1.Echo',
      gapicConfig,
      {},
      {},
      true,
      telemetryInfo,
    );
    assert.strictEqual(settings.echo.enableTelemetryTracing, true);
    assert.deepStrictEqual(
      settings.echo.otherArgs.internalTelemetryInfo,
      telemetryInfo,
    );
    assert.strictEqual(settings.echo.otherArgs.internalMethodName, 'Echo');
  });

  it('should make a request', async () => {
    const requestObject = {content: 'test-content'};
    const responseType = protos.lookupType('EchoResponse');
    const response = responseType.create(requestObject); // request === response for EchoService

    setMockFallbackResponse(
      gaxGrpc,
      new Response(Buffer.from(JSON.stringify(response))),
    );

    const echoStub = await gaxGrpc.createStub(echoService, stubOptions);
    await new Promise<void>((resolve, reject) => {
      echoStub.echo(requestObject, {}, {}, (err?: Error, result?: {}) => {
        try {
          assert.strictEqual(err, null);
          assert.strictEqual(
            requestObject.content,
            (result as {content: string}).content,
          );
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });

  it('should handle an API error', async () => {
    const requestObject = {content: 'test-content'};
    // example of an actual google.rpc.Status error message returned by Language API
    const expectedMessage =
      '3 INVALID_ARGUMENT: One of content, or gcs_content_uri must be set.';
    const jsonError = {
      code: 400, // Bad request
      message: expectedMessage,
      details: [
        {
          '@type': 'type.googleapis.com/google.rpc.BadRequest',
          fieldViolations: [
            {
              field: 'document.content',
              description: 'Must have some text content to annotate.',
            },
          ],
        },
      ],
    };
    const expectedError = {
      code: 3,
      details: [
        {
          fieldViolations: [
            {
              field: 'document.content',
              description: 'Must have some text content to annotate.',
            },
          ],
        },
      ],
    };

    setMockFallbackResponse(
      gaxGrpc,
      new Response(Buffer.from(JSON.stringify(jsonError)), {status: 400}),
    );

    const echoStub = await gaxGrpc.createStub(echoService, stubOptions);
    await new Promise<void>((resolve, reject) => {
      echoStub.echo(requestObject, {}, {}, (err?: Error) => {
        try {
          assert(err instanceof GoogleError);
          assert.strictEqual(err.message, expectedMessage);
          assert.strictEqual(err.code, expectedError.code);
          assert.strictEqual(
            JSON.stringify(err.statusDetails),
            JSON.stringify(expectedError.details),
          );
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });

  it('service stub should handle a null response from the API with a 204 ', async () => {
    const requestObject = {content: 'test-content'};

    const emptyResponse = {
      content: '',
    };
    setMockFallbackResponse(gaxGrpc, new Response(null, {status: 204}));

    const echoStub = await gaxGrpc.createStub(echoService, stubOptions);
    await new Promise<void>((resolve, reject) => {
      echoStub.echo(requestObject, {}, {}, (err?: Error, resp?: {}) => {
        try {
          assert.strictEqual(err, null);
          assert.strictEqual(
            JSON.stringify(resp),
            JSON.stringify(emptyResponse),
          );
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });
  it('should handle a null response from the API ', async () => {
    const requestObject = {content: 'test-content'};
    const expectedMessage = 'Received null response from RPC Echo';

    setMockFallbackResponse(gaxGrpc, new Response(Buffer.from('')));

    const echoStub = await gaxGrpc.createStub(echoService, stubOptions);
    await new Promise<void>((resolve, reject) => {
      echoStub.echo(requestObject, {}, {}, (err?: Error) => {
        try {
          assert(err instanceof Error);
          assert.strictEqual(err.message, expectedMessage);
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });

  it('should handle a fetch error', async () => {
    const requestObject = {content: 'test-content'};

    setMockFallbackResponse(
      gaxGrpc,
      new Response(JSON.stringify({error: {message: 'fetch error'}}), {
        status: 500,
      }),
    );

    const echoStub = await gaxGrpc.createStub(echoService, stubOptions);
    await new Promise<void>((resolve, reject) => {
      echoStub.echo(requestObject, {}, {}, (err?: Error) => {
        try {
          assert.strictEqual(err?.message, 'fetch error');
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });

  it('should record the received http status on the error', async () => {
    const requestObject = {content: 'test-content'};

    // The body reports 400 while the response itself is a 503. `code` is
    // derived from the body, so a status read back off the error can only be
    // the received one if the two differ.
    setMockFallbackHttpResponse(
      gaxGrpc,
      new Response(
        JSON.stringify({error: {code: 400, message: 'mismatched status'}}),
        {status: 503},
      ),
    );

    const echoStub = await gaxGrpc.createStub(echoService, stubOptions);
    await new Promise<void>((resolve, reject) => {
      echoStub.echo(requestObject, {}, {}, (err?: Error) => {
        try {
          assert(err instanceof GoogleError);
          assert.strictEqual(err.code, Status.INVALID_ARGUMENT);
          assert.strictEqual(err.httpStatusCode, 503);
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });

  it('should promote ErrorInfo if exist in fallback-rest error', async () => {
    const requestObject = {content: 'test-content'};
    // example of an actual google.rpc.Status error message returned by Translate API
    const errorInfo = {
      '@type': 'type.googleapis.com/google.rpc.ErrorInfo',
      reason: 'SERVICE_DISABLED',
      domain: 'googleapis.com',
      metadata: {
        service: 'translate.googleapis.com',
        consumer: 'projects/123',
      },
    };
    const serverError = {
      error: {
        code: 403,
        message:
          'Cloud Translation API has not been used in project 123 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/translate.googleapis.com/overview?project=455411330361 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.',
        status: 'PERMISSION_DENIED',
        details: [
          {
            '@type': 'type.googleapis.com/google.rpc.Help',
            links: [
              {
                description: 'Google developers console API activation',
                url: 'https://console.developers.google.com/apis/api/translate.googleapis.com/overview?project=455411330361',
              },
            ],
          },
          errorInfo,
        ],
      },
    };
    const opts = {
      auth: new GoogleAuth({authClient: new PassThroughClient()}),
      fallback: 'rest',
    };

    gaxGrpc = new GrpcClient(opts);

    setMockFallbackResponse(
      gaxGrpc,
      new Response(Buffer.from(JSON.stringify(serverError)), {
        status: 403,
      }),
    );

    const echoStub = await gaxGrpc.createStub(echoService, stubOptions);
    await new Promise<void>((resolve, reject) => {
      echoStub.echo(requestObject, {}, {}, (err?: Error) => {
        try {
          assert(err instanceof GoogleError);
          assert.strictEqual(
            JSON.stringify(err.statusDetails?.length),
            JSON.stringify(serverError['error']['details'].length),
          );
          assert.strictEqual(err.code, 7);
          assert.strictEqual(err.message, serverError['error']['message']);
          assert.strictEqual(err.reason, errorInfo.reason);
          assert.strictEqual(err.domain, errorInfo.domain);
          assert.strictEqual(
            JSON.stringify(err.errorInfoMetadata),
            JSON.stringify(errorInfo.metadata),
          );
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    });
  });

  it('should be able to cancel an API call using AbortController', async () => {
    setMockFallbackResponse(
      gaxGrpc,
      new Response(JSON.stringify({}), {
        status: 403,
      }),
    );

    const echoStub = await gaxGrpc.createStub(echoService, stubOptions);
    const request = {content: 'content' + new Date().toString()};
    const call = echoStub.echo(request, {}, {}, () => {});

    call.cancel();

    // @ts-ignore
    assert.strictEqual(createdAbortControllers[0].abortCalled, true);
  });

  it('should have close method', async () => {
    setMockFallbackResponse(gaxGrpc, new Response(JSON.stringify({})));

    const stub = await gaxGrpc.createStub(echoService, stubOptions);
    stub.close({}, {}, {}, () => {});
  });

  // `setMockFallbackResponse` discards the options it is handed, but the
  // deadline and metadata handling under test are only observable there, so
  // record them.
  function recordRequests(
    client: GrpcClient,
    response: Response,
  ): gaxios.GaxiosOptions[] {
    const requests: gaxios.GaxiosOptions[] = [];
    class RecordingAuthClient extends PassThroughClient {
      async request<T>(
        opts: gaxios.GaxiosOptions,
      ): Promise<gaxios.GaxiosResponse<T>> {
        requests.push(opts);
        return Object.assign(response, {
          config: {
            headers: response.headers,
            url: new URL(opts.url || 'https://example.com'),
          },
          data: response.body as T,
        });
      }
    }
    client.auth = new GoogleAuth({authClient: new RecordingAuthClient()});
    return requests;
  }

  function signalOf(request: gaxios.GaxiosOptions): AbortSignal | undefined {
    return request.signal as AbortSignal | undefined;
  }

  // Resolves true if the signal aborts within the budget, false if it does
  // not. A budget rather than a bare `aborted` read, because the abort is
  // asynchronous and a test that only sampled it would pass for the wrong
  // reason.
  function abortedWithin(
    signal: AbortSignal | undefined,
    ms: number,
  ): Promise<boolean> {
    if (!signal) {
      return Promise.resolve(false);
    }
    if (signal.aborted) {
      return Promise.resolve(true);
    }
    return new Promise<boolean>(resolve => {
      const timer = setTimeout(() => resolve(false), ms);
      signal.addEventListener(
        'abort',
        () => {
          clearTimeout(timer);
          resolve(true);
        },
        {once: true},
      );
    });
  }

  describe('call metadata', () => {
    async function headersSentFor(metadata: {
      [name: string]: string | string[];
    }): Promise<Headers> {
      const requests = recordRequests(
        gaxGrpc,
        new Response(Buffer.from(JSON.stringify({content: 'test'}))),
      );
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      await new Promise<void>(resolve => {
        echoStub.echo({content: 'test'}, metadata, {}, () => resolve());
      });

      return requests[0].headers as Headers;
    }

    it('should send every value of a multi-valued header', async () => {
      const headers = await headersSentFor({'x-multi': ['a', 'b', 'c']});

      // gRPC metadata is multi-valued and `buildMetadata` normalizes every
      // value to an array precisely because of that. Reading index 0 silently
      // dropped the rest. The Headers API joins repeated values with ', '.
      assert.strictEqual(headers.get('x-multi'), 'a, b, c');
    });

    it('should send a single-valued header as its only value', async () => {
      const headers = await headersSentFor({'x-single': ['one']});

      assert.strictEqual(headers.get('x-single'), 'one');
    });

    it('should send a plain string value whole', async () => {
      const headers = await headersSentFor({'x-plain': 'hello'});

      // Indexing a string yields its first character, so this used to arrive
      // as 'h'. The declared parameter type said the values were strings while
      // the code indexed them as arrays; both could not be right.
      assert.strictEqual(headers.get('x-plain'), 'hello');
    });

    it('should let metadata replace a header set by the request encoder', async () => {
      const headers = await headersSentFor({
        'content-type': ['application/x-custom'],
      });

      // The previous `headers.set` replaced rather than appended, so keeping
      // every value must not turn an override into an accumulation.
      assert.strictEqual(headers.get('content-type'), 'application/x-custom');
    });
  });

  describe('call deadline', () => {
    // The error an aborted request actually produces, measured end to end
    // against a server that accepts the connection and never replies:
    // node-fetch discards `signal.reason` and throws its own AbortError,
    // gaxios wraps that without setting `name` (so it stays the inherited
    // 'Error') and only copies `code` from a DOMException cause, which this is
    // not. A `cancel()` produces a byte-identical error. Earlier versions of
    // these tests fabricated a `TimeoutError` that never occurs in production
    // and so passed against a translation that was dead code.
    function abortError(): Error {
      const cause = new Error('The operation was aborted.');
      cause.name = 'AbortError';
      return new Error('The operation was aborted.', {cause});
    }

    // Rejects as soon as the request is aborted. `cancel()` can run before the
    // asynchronous auth chain ever reaches the transport, and a listener added
    // to an already-aborted signal never fires, so check the state first.
    function rejectWhenAborted(
      signal: AbortSignal | undefined,
    ): Promise<never> {
      return new Promise<never>((_resolve, reject) => {
        if (!signal) {
          return;
        }
        if (signal.aborted) {
          reject(abortError());
        } else {
          signal.addEventListener('abort', () => reject(abortError()), {
            once: true,
          });
        }
      });
    }

    // A transport that is actually bound by the signal: it stays pending until
    // the request is aborted, then rejects the way the real one does.
    function rejectOnAbort(client: GrpcClient): gaxios.GaxiosOptions[] {
      const requests: gaxios.GaxiosOptions[] = [];
      class AbortingAuthClient extends PassThroughClient {
        async request<T>(
          opts: gaxios.GaxiosOptions,
        ): Promise<gaxios.GaxiosResponse<T>> {
          requests.push(opts);
          return rejectWhenAborted(signalOf(opts));
        }
      }
      client.auth = new GoogleAuth({authClient: new AbortingAuthClient()});
      return requests;
    }

    // Aborts after the response headers arrive but before the body is read,
    // which rejects in the stub's inner handler rather than the outer one.
    function rejectDuringBodyRead(client: GrpcClient) {
      class BodyAbortingAuthClient extends PassThroughClient {
        async request<T>(
          opts: gaxios.GaxiosOptions,
        ): Promise<gaxios.GaxiosResponse<T>> {
          const signal = signalOf(opts);
          return {
            ok: true,
            status: 200,
            headers: new Headers(),
            arrayBuffer: () => rejectWhenAborted(signal),
          } as unknown as gaxios.GaxiosResponse<T>;
        }
      }
      client.auth = new GoogleAuth({authClient: new BodyAbortingAuthClient()});
    }

    it('should abort the in-flight request when the deadline expires', async () => {
      const requests = rejectOnAbort(gaxGrpc);
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      await new Promise<void>(resolve => {
        echoStub.echo(
          {content: 'test'},
          {},
          {deadline: new Date(Date.now() + 50)},
          () => resolve(),
        );
      });

      // The transport never answered. Before this, nothing read the deadline,
      // so the request and the callback waiting on it stayed outstanding.
      assert.strictEqual(signalOf(requests[0])?.aborted, true);
    });

    it('should carry CallSettings.timeout through to the transport', async () => {
      rejectOnAbort(gaxGrpc);
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      // Every other test here hands the stub a deadline directly, which only
      // exercises the stub itself. This one goes through `createApiCall`, the
      // path a generated client takes, so `addTimeoutArg` is what produces the
      // deadline. That hand-off is the seam where the deadline used to be
      // dropped, and no direct call to the stub can see it.
      const apiCall = createApiCall(
        Promise.resolve(echoStub.echo as unknown as GRPCCall),
        new CallSettings({timeout: 50}),
      );

      await assert.rejects(
        apiCall({content: 'test'}, {}) as unknown as Promise<unknown>,
        (err: unknown) => {
          assert(err instanceof GoogleError);
          assert.strictEqual(err.code, Status.DEADLINE_EXCEEDED);
          return true;
        },
      );
    });

    it('should not abort a call that has no deadline', async () => {
      const requests = recordRequests(
        gaxGrpc,
        new Response(Buffer.from(JSON.stringify({content: 'test'}))),
      );
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      await new Promise<void>(resolve => {
        echoStub.echo({content: 'test'}, {}, {}, () => resolve());
      });

      assert.strictEqual(
        await abortedWithin(signalOf(requests[0]), 100),
        false,
      );
    });

    it('should abort promptly, and not throw, for an already-expired deadline', async () => {
      const requests = recordRequests(
        gaxGrpc,
        new Response(Buffer.from(JSON.stringify({content: 'test'}))),
      );
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      // `AbortSignal.timeout` rejects a negative delay with a RangeError, so
      // an expired deadline that was not clamped would throw out of the stub
      // before the request was ever made. Zero is the right clamp: the call
      // has no time left, so it should abort on the next tick.
      await new Promise<void>(resolve => {
        echoStub.echo(
          {content: 'test'},
          {},
          {deadline: new Date(Date.now() - 60000)},
          () => resolve(),
        );
      });

      assert.strictEqual(await abortedWithin(signalOf(requests[0]), 100), true);
    });

    it('should ignore a deadline that is not a valid date', async () => {
      const requests = recordRequests(
        gaxGrpc,
        new Response(Buffer.from(JSON.stringify({content: 'test'}))),
      );
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      // `new Date('nonsense').getTime()` is NaN, and NaN survives both the
      // subtraction and `Math.max`. `AbortSignal.timeout(NaN)` does not
      // coerce it to zero: it throws a RangeError, synchronously, out of the
      // stub and past the callback, so a caller that mistyped a date got an
      // exception from a layer it never called instead of an RPC result.
      const err = await new Promise<unknown>(resolve => {
        echoStub.echo(
          {content: 'test'},
          {},
          {deadline: new Date('not a date')},
          (callErr?: unknown) => resolve(callErr),
        );
      });

      // A deadline we cannot read is no deadline: the call runs to completion
      // rather than being aborted on an arbitrary schedule.
      assert.strictEqual(err, null);
      assert.strictEqual(
        await abortedWithin(signalOf(requests[0]), 100),
        false,
      );
    });

    it('should honour a deadline given as epoch milliseconds', async () => {
      const requests = recordRequests(
        gaxGrpc,
        new Response(Buffer.from(JSON.stringify({content: 'test'}))),
      );
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      // The stub types `deadline` as a `Date`, but the value is whatever the
      // caller put in `CallOptions` and nothing checks that at runtime. gRPC
      // expresses deadlines as epoch milliseconds, so a number is an easy
      // thing to arrive with, and `.getTime()` is not a function on one:
      // reaching for it directly threw a TypeError out of the stub instead of
      // honouring a deadline that is perfectly readable.
      await new Promise<void>(resolve => {
        echoStub.echo(
          {content: 'test'},
          {},
          {deadline: Date.now() + 50} as unknown as {deadline: Date},
          () => resolve(),
        );
      });

      assert.strictEqual(
        await abortedWithin(signalOf(requests[0]), 1000),
        true,
      );
    });

    it('should not bound server-streaming calls by the deadline', async () => {
      const responseStream = new stream.Readable();
      responseStream.push(JSON.stringify([{content: 'test'}]));
      responseStream.push(null);
      const requests = recordRequests(
        gaxGrpc,
        new Response(responseStream as unknown as BodyInit),
      );
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      const responses = echoStub.expand(
        {content: 'test'},
        {},
        {deadline: new Date(Date.now() + 50)},
        () => {},
      ) as StreamArrayParser;
      await new Promise<void>((resolve, reject) => {
        responses.on('data', () => {});
        responses.on('error', reject);
        responses.on('end', resolve);
      });

      // A server stream is long-lived by design; the signal would stay armed
      // once the body starts flowing and abort a healthy read.
      assert.strictEqual(
        await abortedWithin(signalOf(requests[0]), 100),
        false,
      );
    });

    it('should report an expired deadline as DEADLINE_EXCEEDED', async () => {
      rejectOnAbort(gaxGrpc);
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      const err = await new Promise<Error | undefined>(resolve => {
        echoStub.echo(
          {content: 'test'},
          {},
          {deadline: new Date(Date.now() + 50)},
          (err?: Error) => resolve(err),
        );
      });

      // gRPC reports this condition with a numeric status, and retryCodes,
      // caller `err.code` checks and telemetry all key off that, so the REST
      // path must not leak the transport's own error shape.
      assert(err instanceof GoogleError);
      assert.strictEqual(err.code, Status.DEADLINE_EXCEEDED);
      assert.match(err.message, /Deadline exceeded/);
    });

    it('should report a deadline that expires while the body is being read', async () => {
      rejectDuringBodyRead(gaxGrpc);
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      const err = await new Promise<Error | undefined>(resolve => {
        echoStub.echo(
          {content: 'test'},
          {},
          {deadline: new Date(Date.now() + 50)},
          (err?: Error) => resolve(err),
        );
      });

      // Headers arriving in time does not mean the call met its deadline.
      assert(err instanceof GoogleError);
      assert.strictEqual(err.code, Status.DEADLINE_EXCEEDED);
    });

    it('should report a cancelled call as CANCELLED, not DEADLINE_EXCEEDED', async () => {
      rejectOnAbort(gaxGrpc);
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      const err = await new Promise<Error | undefined>(resolve => {
        const call = echoStub.echo(
          {content: 'test'},
          {},
          {deadline: new Date(Date.now() + 5000)},
          (err?: Error) => resolve(err),
        );
        (call as {cancel: () => void}).cancel();
      });

      // A deadline was armed here but never expired; the caller gave up first.
      // This is the case no amount of error inspection can get right, because
      // the abort a cancel produces is byte-identical to the one a timeout
      // produces. Only the stub, which armed the timer, knows which fired.
      assert(err instanceof GoogleError);
      assert.strictEqual(err.code, Status.CANCELLED);
    });

    it('should report a cancel as CANCELLED when no deadline was forwarded', async () => {
      rejectOnAbort(gaxGrpc);
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      const err = await new Promise<Error | undefined>(resolve => {
        const call = echoStub.echo({content: 'test'}, {}, {}, (err?: Error) =>
          resolve(err),
        );
        (call as {cancel: () => void}).cancel();
      });

      // Nothing armed a deadline, so reporting one would be a fabrication. The
      // error is byte-identical to a timeout's, which is why the distinction is
      // drawn from the flags the stub records rather than from anything read
      // back off the error. The original is kept as `cause`.
      assert(err instanceof GoogleError);
      assert.strictEqual(err.code, Status.CANCELLED);
      // The whole chain is preserved: the mapper's cause is the transport
      // error, whose own cause is the abort that node-fetch raised.
      const transportErr = err.cause as Error | undefined;
      assert.strictEqual(transportErr?.message, 'The operation was aborted.');
      assert.strictEqual(
        (transportErr?.cause as Error | undefined)?.name,
        'AbortError',
      );
    });

    it('should settle a cancelled unary call as CANCELLED', async () => {
      rejectDuringBodyRead(gaxGrpc);
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      const settled = new Promise<Error | undefined>(resolve => {
        const call = echoStub.echo({content: 'test'}, {}, {}, (err?: Error) =>
          resolve(err),
        );
        (call as {cancel: () => void}).cancel();
      });

      const timedOut = Symbol('timed out');
      const result = await Promise.race([
        settled,
        new Promise(resolve => setTimeout(() => resolve(timedOut), 100)),
      ]);

      // A unary call has to be settled even when the caller is the one who
      // ended it. `OngoingCall.cancel()` only invokes the canceller once one is
      // registered; nothing else resolves the promise, so a transport that
      // stays silent here leaves `OngoingCallPromise.promise` — and the
      // OpenTelemetry span the traced callback ends — pending forever. This
      // handler used to skip the callback entirely for a cancelled call.
      assert.notStrictEqual(
        result,
        timedOut,
        'cancelling a unary call left it unsettled',
      );
      assert(result instanceof GoogleError);
      // The same status `OngoingCall.cancel()` reports when it has no canceller
      // to defer to, so both paths look identical to the caller.
      assert.strictEqual(result.code, Status.CANCELLED);
    });
  });

  describe('server stream cancellation', () => {
    // A response whose body stays open, so the call is still in flight when
    // cancel() lands and the teardown is actually observable.
    function openStream(): gaxios.GaxiosOptions[] {
      const body = new stream.Readable({read() {}});
      // A valid JSON array that has begun but not finished.
      body.push('[{"content":"one"}');
      return recordRequests(gaxGrpc, new Response(body as unknown as BodyInit));
    }

    it('should abort the underlying request when the stream is cancelled', async () => {
      const requests = openStream();
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      const parser = echoStub.expand(
        {content: 'test'},
        {},
        {},
        () => {},
      ) as StreamArrayParser;
      parser.on('data', () => {});
      parser.on('error', () => {});

      await new Promise<void>(resolve => setTimeout(resolve, 50));
      assert.strictEqual(signalOf(requests[0])?.aborted, false);

      parser.cancel();

      // `StreamArrayParser` has always aborted a cancel controller of its own,
      // but nothing was listening to it, so the request outlived the stream
      // the caller had already given up on.
      assert.strictEqual(
        await abortedWithin(signalOf(requests[0]), 100),
        true,
        'cancelling the stream did not abort the request',
      );
    });

    // `new Response(body)` converts a Node Readable into a web ReadableStream,
    // and `pipeline` tears one of those down silently. node-fetch hands back
    // the Node Readable itself, and `pipeline` reports 'Premature close' when
    // the parser ends early. Only the latter reaches the guard under test, so
    // this mock delivers the body unconverted.
    function openNodeStream(): stream.Readable {
      const body = new stream.Readable({read() {}});
      body.push('[{"content":"one"}');
      class NodeBodyAuthClient extends PassThroughClient {
        async request<T>(): Promise<gaxios.GaxiosResponse<T>> {
          return {
            ok: true,
            status: 200,
            headers: new Headers(),
            body,
            data: body,
          } as unknown as gaxios.GaxiosResponse<T>;
        }
      }
      gaxGrpc.auth = new GoogleAuth({authClient: new NodeBodyAuthClient()});
      return body;
    }

    it('should not report an error when the stream is cancelled', async () => {
      openNodeStream();
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      const reported: string[] = [];
      const received: {}[] = [];
      const parser = echoStub.expand({content: 'test'}, {}, {}, (err?: Error) =>
        reported.push(`callback:${err?.message}`),
      ) as StreamArrayParser;
      parser.on('data', d => received.push(d));
      parser.on('error', err =>
        reported.push(`error:${(err as Error).message}`),
      );

      await new Promise<void>(resolve => setTimeout(resolve, 50));
      // Without this the cancel could land before the pipeline was ever wired
      // up, and the test would pass without exercising the teardown at all.
      assert.deepStrictEqual(
        received,
        [{content: 'one'}],
        'the stream was not flowing when it was cancelled',
      );

      parser.cancel();
      await new Promise<void>(resolve => setTimeout(resolve, 100));

      // Ending the parser makes `pipeline` destroy the response body and
      // report 'Premature close'. The guard meant to swallow that tested
      // `err.name !== 'AbortError'`, which a 'Premature close' Error never
      // matches, so a clean cancel used to surface an error on both the
      // callback and the stream.
      assert.deepStrictEqual(
        reported,
        [],
        `a cancelled stream reported: ${reported.join(', ')}`,
      );
    });
  });

  describe('transport error translation', () => {
    // Errors surfaced by the transport must carry a numeric gRPC status code:
    // retry logic in normalCalls/retries.ts matches `err.code` against the
    // numeric retry codes from the service config, and client libraries branch
    // on the same codes.
    function callEcho(): Promise<GoogleError> {
      return gaxGrpc.createStub(echoService, stubOptions).then(
        echoStub =>
          new Promise<GoogleError>(resolve => {
            echoStub.echo({content: 'test-content'}, {}, {}, (err?: Error) =>
              resolve(err as GoogleError),
            );
          }),
      );
    }

    it('should translate a connection failure into UNAVAILABLE', async () => {
      // e.g. a "socket hang up" when the server closes a keep-alive socket.
      const fetchError = Object.assign(
        new Error(
          'request to https://foo.example.com failed, reason: socket hang up',
        ),
        {code: 'ECONNRESET'},
      );
      setMockFallbackError(gaxGrpc, fetchError);

      const err = await callEcho();

      assert(err instanceof GoogleError);
      assert.strictEqual(err.code, Status.UNAVAILABLE);
      assert.strictEqual(err.cause, fetchError);
    });

    it('should translate a timeout into DEADLINE_EXCEEDED', async () => {
      // Native fetch rejects with a DOMException whose `code` is the numeric
      // DOMException value (23), not a string, so the name is what identifies it.
      setMockFallbackError(
        gaxGrpc,
        new DOMException(
          'The operation was aborted due to timeout',
          'TimeoutError',
        ),
      );

      const err = await callEcho();

      assert.strictEqual(err.code, Status.DEADLINE_EXCEEDED);
    });

    it('should translate a timeout reported only by code into DEADLINE_EXCEEDED', async () => {
      setMockFallbackError(
        gaxGrpc,
        Object.assign(new Error('The operation was aborted due to timeout'), {
          code: 'TimeoutError',
        }),
      );

      const err = await callEcho();

      assert.strictEqual(err.code, Status.DEADLINE_EXCEEDED);
    });

    it('should translate an aborted request into CANCELLED', async () => {
      // As above: native fetch reports abort as DOMException code 20.
      setMockFallbackError(
        gaxGrpc,
        new DOMException('This operation was aborted', 'AbortError'),
      );

      const err = await callEcho();

      assert.strictEqual(err.code, Status.CANCELLED);
    });

    it('should translate an abort reported only by code into CANCELLED', async () => {
      setMockFallbackError(
        gaxGrpc,
        Object.assign(new Error('This operation was aborted'), {
          code: 'AbortError',
        }),
      );

      const err = await callEcho();

      assert.strictEqual(err.code, Status.CANCELLED);
    });

    it('should use UNAVAILABLE for an unrecognized transport error', async () => {
      // An error that rejected before a response was produced is a transport
      // failure, which gRPC reports as UNAVAILABLE whatever the cause. Codes
      // left off a list would otherwise be classified as non-retryable.
      setMockFallbackError(gaxGrpc, new Error('something unexpected'));

      const err = await callEcho();

      assert.strictEqual(err.code, Status.UNAVAILABLE);
      assert.strictEqual(err.message, 'something unexpected');
    });

    it('should translate a socket timeout into UNAVAILABLE', async () => {
      // @grpc/grpc-js maps ETIMEDOUT to UNAVAILABLE, not DEADLINE_EXCEEDED,
      // which is reserved for an elapsed call deadline.
      setMockFallbackError(
        gaxGrpc,
        Object.assign(new Error('socket timeout'), {code: 'ETIMEDOUT'}),
      );

      const err = await callEcho();

      assert.strictEqual(err.code, Status.UNAVAILABLE);
    });

    it('should map a rejection carrying an HTTP status onto a gRPC status', async () => {
      // 401 and 403 responses are rejected by the transport on purpose, so that
      // the auth client can refresh credentials and retry.
      setMockFallbackError(
        gaxGrpc,
        Object.assign(
          new Error('Request had invalid authentication credentials'),
          {
            status: 401,
          },
        ),
      );

      const err = await callEcho();

      assert.strictEqual(err.code, Status.UNAUTHENTICATED);
    });

    it('should not rewrap an error that is already a GoogleError', async () => {
      const googleError = new GoogleError('already translated');
      googleError.code = Status.FAILED_PRECONDITION;
      setMockFallbackError(gaxGrpc, googleError);

      const err = await callEcho();

      assert.strictEqual(err, googleError);
      assert.strictEqual(err.code, Status.FAILED_PRECONDITION);
    });

    it('should translate transport errors on server streaming calls', async () => {
      setMockFallbackError(
        gaxGrpc,
        Object.assign(new Error('socket hang up'), {code: 'ECONNRESET'}),
      );

      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);
      const stream = echoStub.expand(
        {content: 'test content'},
        {},
        {},
        () => {},
      );

      const err = await new Promise<GoogleError>(resolve => {
        (stream as StreamArrayParser).on('error', resolve);
      });

      assert.strictEqual(err.code, Status.UNAVAILABLE);
    });

    it('should let the auth client handle 401 and 403, and decode every other status', async () => {
      const requestOptions = setMockFallbackError(gaxGrpc, new Error('unused'));

      await callEcho();

      const validateStatus = requestOptions[0].validateStatus;
      assert(validateStatus, 'the transport must set validateStatus');
      // Rejected, so that AuthClient can refresh credentials and retry.
      assert.strictEqual(validateStatus(401), false);
      assert.strictEqual(validateStatus(403), false);
      // Resolved, so that the response is decoded into a GoogleError with a
      // gRPC status code rather than surfacing as a raw transport error.
      assert.strictEqual(validateStatus(404), true);
      assert.strictEqual(validateStatus(429), true);
      assert.strictEqual(validateStatus(503), true);
      assert.strictEqual(validateStatus(200), true);
    });

    it('should decode a non-2xx response into its canonical gRPC status', async () => {
      // The primary half of the fix: validateStatus lets this response resolve,
      // so it reaches decodeResponse and is parsed rather than surfacing as a
      // raw transport rejection. parseHttpError prefers the canonical status
      // name in the body.
      setMockFallbackHttpResponse(
        gaxGrpc,
        new Response(
          Buffer.from(
            JSON.stringify({
              error: {
                code: 409,
                message: 'Too much contention on these documents.',
                status: 'ABORTED',
              },
            }),
          ),
          {status: 409},
        ),
      );

      const err = await callEcho();

      assert(err instanceof GoogleError);
      assert.strictEqual(err.code, Status.ABORTED);
      // The code must denote the status the server named, which is the same
      // value the gRPC transport reports for this condition.
      assert.strictEqual(Status[err.code!], 'ABORTED');
      // The HTTP status must not leak through as the error code.
      assert.notStrictEqual(err.code as number, 409);
    });

    it('should derive a code from the HTTP status when the body has none', async () => {
      setMockFallbackHttpResponse(
        gaxGrpc,
        new Response(
          Buffer.from(
            JSON.stringify({
              error: {code: 503, message: 'The service is currently down.'},
            }),
          ),
          {status: 503},
        ),
      );

      const err = await callEcho();

      assert(err instanceof GoogleError);
      assert.strictEqual(err.code, Status.UNAVAILABLE);
      assert.notStrictEqual(err.code as number, 503);
    });

    it('should decode a resolved error response and record its http status', async () => {
      // 500 now passes `validateStatus`, so it resolves and is decoded, which
      // is what lets the received HTTP status be recorded alongside the
      // gRPC code the body maps to.
      setMockFallbackHttpResponse(
        gaxGrpc,
        new Response(
          JSON.stringify({
            error: {code: 500, message: 'server blew up', status: 'INTERNAL'},
          }),
          {status: 500, headers: {'Content-Type': 'application/json'}},
        ),
      );

      const err = await callEcho();

      assert(err instanceof GoogleError);
      assert.strictEqual(err.code, Status.INTERNAL);
      assert.strictEqual(err.httpStatusCode, 500);
    });

    it('should record the http status of a rejected 401', async () => {
      // 401 and 403 are rejected on purpose so the auth client can refresh
      // credentials, so they never reach the decoder. The status has to be
      // recorded off the rejection instead, or telemetry reports none at all
      // for precisely the two statuses an auth problem produces.
      setMockFallbackHttpResponse(
        gaxGrpc,
        new Response(
          JSON.stringify({
            error: {code: 401, message: 'Invalid authentication credentials'},
          }),
          {status: 401},
        ),
      );

      const err = await callEcho();

      assert(err instanceof GoogleError);
      assert.strictEqual(err.code, Status.UNAUTHENTICATED);
      assert.strictEqual(err.httpStatusCode, 401);
    });

    it('should record the http status of a rejected 403', async () => {
      setMockFallbackHttpResponse(
        gaxGrpc,
        new Response(
          JSON.stringify({error: {code: 403, message: 'Permission denied'}}),
          {status: 403},
        ),
      );

      const err = await callEcho();

      assert(err instanceof GoogleError);
      assert.strictEqual(err.code, Status.PERMISSION_DENIED);
      assert.strictEqual(err.httpStatusCode, 403);
    });

    it('should classify an HTML error response by its http status', async () => {
      // A 404 from a GFE or a proxy, rather than from the API, comes back as an
      // HTML page. Parsing it threw a SyntaxError before any status was
      // recorded, so the error reported no HTTP status and was classified as an
      // UNAVAILABLE transport failure instead of NOT_FOUND.
      setMockFallbackHttpResponse(
        gaxGrpc,
        new Response(
          '<!DOCTYPE html><html><title>Error 404 (Not Found)</title></html>',
          {status: 404, headers: {'Content-Type': 'text/html'}},
        ),
      );

      const err = await callEcho();

      assert(err instanceof GoogleError);
      assert.strictEqual(err.code, Status.NOT_FOUND);
      assert.strictEqual(err.httpStatusCode, 404);
      assert.notStrictEqual(err.code, Status.UNAVAILABLE);
      // The body identifies who answered, so it is kept for diagnosis.
      assert.match(err.message, /Error 404 \(Not Found\)/);
      assert(err.cause instanceof SyntaxError);
    });

    it('should classify an HTML 502 as INTERNAL rather than a transport failure', async () => {
      setMockFallbackHttpResponse(
        gaxGrpc,
        new Response('<html><title>502 Bad Gateway</title></html>', {
          status: 502,
          headers: {'Content-Type': 'text/html'},
        }),
      );

      const err = await callEcho();

      assert(err instanceof GoogleError);
      assert.strictEqual(err.code, Status.INTERNAL);
      assert.strictEqual(err.httpStatusCode, 502);
    });

    it('should truncate a long undecodable error body', async () => {
      setMockFallbackHttpResponse(
        gaxGrpc,
        new Response(`<html>${'x'.repeat(5000)}</html>`, {status: 502}),
      );

      const err = await callEcho();

      assert(err instanceof GoogleError);
      assert.strictEqual(err.httpStatusCode, 502);
      assert.match(err.message, /truncated/);
      // The page must not be pasted into the message in full.
      assert(
        err.message.length < 2000,
        `message was ${err.message.length} characters long`,
      );
    });

    it('should record the http status of an empty error response', async () => {
      setMockFallbackHttpResponse(gaxGrpc, new Response(null, {status: 502}));

      const err = await callEcho();

      assert(err instanceof GoogleError);
      assert.strictEqual(err.code, Status.INTERNAL);
      assert.strictEqual(err.httpStatusCode, 502);
    });

    it('should record the http status when the error body is not a JSON object', async () => {
      // `null` parses, so it gets past JSON.parse and fails where the body is
      // indexed instead. The status must survive that too.
      setMockFallbackHttpResponse(gaxGrpc, new Response('null', {status: 500}));

      const err = await callEcho();

      assert(err instanceof GoogleError);
      assert.strictEqual(err.code, Status.INTERNAL);
      assert.strictEqual(err.httpStatusCode, 500);
    });
  });
});
