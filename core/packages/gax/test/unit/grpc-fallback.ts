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
import {ClientStubOptions, GoogleAuth, GoogleError} from '../../src';
import {PassThroughClient} from 'google-auth-library';
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
  });

  it('should make a request', done => {
    const requestObject = {content: 'test-content'};
    const responseType = protos.lookupType('EchoResponse');
    const response = responseType.create(requestObject); // request === response for EchoService

    setMockFallbackResponse(
      gaxGrpc,
      new Response(Buffer.from(JSON.stringify(response))),
    );

    void gaxGrpc.createStub(echoService, stubOptions).then(echoStub => {
      echoStub.echo(requestObject, {}, {}, (err?: Error, result?: {}) => {
        try {
          assert.strictEqual(err, null);
          assert.strictEqual(
            requestObject.content,
            (result as {content: string}).content,
          );
          done();
        } catch (err) {
          done(err);
        }
      });
    });
  });

  it('should handle an API error', done => {
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

    void gaxGrpc.createStub(echoService, stubOptions).then(echoStub => {
      echoStub.echo(requestObject, {}, {}, (err?: Error) => {
        try {
          assert(err instanceof GoogleError);
          assert.strictEqual(err.message, expectedMessage);
          assert.strictEqual(err.code, expectedError.code);
          assert.strictEqual(
            JSON.stringify(err.statusDetails),
            JSON.stringify(expectedError.details),
          );
          done();
        } catch (e) {
          done(e);
        }
      });
    });
  });

  it('service stub should handle a null response from the API with a 204 ', done => {
    const requestObject = {content: 'test-content'};

    const emptyResponse = {
      content: '',
    };
    setMockFallbackResponse(gaxGrpc, new Response(null, {status: 204}));

    void gaxGrpc.createStub(echoService, stubOptions).then(echoStub => {
      echoStub.echo(requestObject, {}, {}, (err?: Error, resp?: {}) => {
        try {
          assert.strictEqual(err, null);
          assert.strictEqual(
            JSON.stringify(resp),
            JSON.stringify(emptyResponse),
          );
          done();
        } catch (err) {
          done(err);
        }
      });
    });
  });
  it('should handle a null response from the API ', done => {
    const requestObject = {content: 'test-content'};
    const expectedMessage = 'Received null response from RPC Echo';

    setMockFallbackResponse(gaxGrpc, new Response(Buffer.from('')));

    void gaxGrpc.createStub(echoService, stubOptions).then(echoStub => {
      echoStub.echo(requestObject, {}, {}, (err?: Error) => {
        try {
          assert(err instanceof Error);
          assert.strictEqual(err.message, expectedMessage);
          done();
        } catch (err) {
          done(err);
        }
      });
    });
  });

  it('should handle a fetch error', done => {
    const requestObject = {content: 'test-content'};

    setMockFallbackResponse(
      gaxGrpc,
      new Response(JSON.stringify({error: {message: 'fetch error'}}), {
        status: 500,
      }),
    );

    void gaxGrpc.createStub(echoService, stubOptions).then(echoStub => {
      echoStub.echo(requestObject, {}, {}, (err?: Error) => {
        try {
          assert.strictEqual(err?.message, 'fetch error');
          done();
        } catch (err) {
          done(err);
        }
      });
    });
  });

  it('should promote ErrorInfo if exist in fallback-rest error', done => {
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

    void gaxGrpc.createStub(echoService, stubOptions).then(echoStub => {
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
          done();
        } catch (err) {
          done(err);
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

  it('should have close method', done => {
    setMockFallbackResponse(gaxGrpc, new Response(JSON.stringify({})));

    void gaxGrpc.createStub(echoService, stubOptions).then(stub => {
      stub.close({}, {}, {}, () => {});
      done();
    });
  });
});
