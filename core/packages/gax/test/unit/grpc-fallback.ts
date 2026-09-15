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
import {setMockFallbackResponse} from './utils';

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

  describe('call deadline', () => {
    // `setMockFallbackResponse` discards the options it is handed, but the
    // deadline handling under test is only observable there, so record them.
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

    it('should not report a cancelled call as DEADLINE_EXCEEDED', async () => {
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
      assert(!(err instanceof GoogleError));
    });

    it('should leave an abort error alone when no deadline was forwarded', async () => {
      rejectOnAbort(gaxGrpc);
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      const err = await new Promise<Error | undefined>(resolve => {
        const call = echoStub.echo({content: 'test'}, {}, {}, (err?: Error) =>
          resolve(err),
        );
        (call as {cancel: () => void}).cancel();
      });

      // Nothing armed a deadline, so this abort came from the caller, and
      // reporting a deadline that was never set would be a fabrication. The
      // error itself is byte-identical to a timeout's, which is why the
      // translation is gated on the flag the stub records rather than on
      // anything read back off the error.
      assert(!(err instanceof GoogleError));
      assert.strictEqual((err?.cause as Error | undefined)?.name, 'AbortError');
    });

    it('should not report an error when the caller cancelled', async () => {
      rejectDuringBodyRead(gaxGrpc);
      const echoStub = await gaxGrpc.createStub(echoService, stubOptions);

      let callbackErr: unknown;
      let callbackCalled = false;
      const call = echoStub.echo(
        {content: 'test'},
        {},
        {},
        (err?: Error, resp?: {}) => {
          callbackCalled = true;
          callbackErr = err ?? resp;
        },
      );
      (call as {cancel: () => void}).cancel();

      await new Promise<void>(resolve => setTimeout(resolve, 100));

      // A caller that cancelled does not need the resulting abort reported
      // back to it. The guard here used to test `err.name !== 'AbortError'`,
      // but gaxios wraps node-fetch's AbortError and never sets its own
      // `name`, leaving the inherited 'Error', so the check never matched and
      // cancelled calls reported an error anyway.
      assert.strictEqual(
        callbackCalled,
        false,
        `callback was invoked with ${callbackErr}`,
      );
    });
  });
});
