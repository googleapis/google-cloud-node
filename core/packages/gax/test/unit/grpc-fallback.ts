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
import echoProtoJson = require('../fixtures/echo.json');
import {GrpcClient} from '../../src/fallback';
import {ClientStubOptions, GoogleAuth, GoogleError, Status} from '../../src';
import {StreamArrayParser} from '../../src/streamArrayParser';
import {rpcCodeFromHttpStatusCode} from '../../src/status';
import {PassThroughClient} from 'google-auth-library';
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

    it('should use UNKNOWN for an unrecognized transport error', async () => {
      setMockFallbackError(gaxGrpc, new Error('something unexpected'));

      const err = await callEcho();

      assert.strictEqual(err.code, Status.UNKNOWN);
      assert.strictEqual(err.message, 'something unexpected');
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
  });

  describe('transport parity', () => {
    // A client must observe the same canonical error code regardless of which
    // transport carried the call: retry configuration is expressed in gRPC
    // status codes, and user code branches on them. The gRPC transport reports
    // the server's canonical code directly, so the fallback transport has to
    // arrive at the same value from the HTTP response.
    interface ParityCase {
      name: string;
      httpStatus: number;
      status?: string;
      expected: Status;
    }

    const cases: ParityCase[] = [
      {
        name: 'contention',
        httpStatus: 409,
        status: 'ABORTED',
        expected: Status.ABORTED,
      },
      {
        name: 'bad request',
        httpStatus: 400,
        status: 'INVALID_ARGUMENT',
        expected: Status.INVALID_ARGUMENT,
      },
      {
        name: 'missing resource',
        httpStatus: 404,
        status: 'NOT_FOUND',
        expected: Status.NOT_FOUND,
      },
      {
        name: 'quota',
        httpStatus: 429,
        status: 'RESOURCE_EXHAUSTED',
        expected: Status.RESOURCE_EXHAUSTED,
      },
      {
        name: 'backend unavailable',
        httpStatus: 503,
        status: 'UNAVAILABLE',
        expected: Status.UNAVAILABLE,
      },
      // No `status` field: the code must still be derived from the HTTP status
      // rather than passed through as an HTTP number.
      {
        name: 'unavailable without a status field',
        httpStatus: 503,
        expected: Status.UNAVAILABLE,
      },
      {
        name: 'conflict without a status field',
        httpStatus: 409,
        expected: Status.ABORTED,
      },
    ];

    for (const testCase of cases) {
      it(`should surface ${Status[testCase.expected]} for ${testCase.name}`, async () => {
        const body: {error: {code: number; message: string; status?: string}} =
          {
            error: {
              code: testCase.httpStatus,
              message: `${testCase.name} (test)`,
            },
          };
        if (testCase.status) {
          body.error.status = testCase.status;
        }

        setMockFallbackHttpResponse(
          gaxGrpc,
          new Response(Buffer.from(JSON.stringify(body)), {
            status: testCase.httpStatus,
          }),
        );

        const echoStub = await gaxGrpc.createStub(echoService, stubOptions);
        const err = await new Promise<GoogleError>(resolve => {
          echoStub.echo({content: 'test'}, {}, {}, (e?: Error) =>
            resolve(e as GoogleError),
          );
        });

        assert(err instanceof GoogleError);
        assert.strictEqual(err.code, testCase.expected);
        // The HTTP status must not leak through as the error code.
        assert.notStrictEqual(err.code as number, testCase.httpStatus);
      });
    }

    it('should produce codes consistent with the shared HTTP-to-gRPC mapping', () => {
      // The fallback transport and the mapping table used elsewhere in gax must
      // not drift apart.
      for (const testCase of cases) {
        assert.strictEqual(
          rpcCodeFromHttpStatusCode(testCase.httpStatus),
          testCase.expected,
          `HTTP ${testCase.httpStatus} should map to ${Status[testCase.expected]}`,
        );
      }
    });
  });
});
