// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as protos from '../../protos/locations';
import assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {afterEach, beforeEach, describe, it} from 'mocha';
import {LocationsClient} from '../../src/locationService';
import {GrpcClient as OriginalGrpcClient} from '../../src/grpc';

import * as protobuf from 'protobufjs';
import {GoogleAuth, PassThroughClient} from 'google-auth-library';
import {clearMetadataCache, fallback, loggingUtils} from '../../src';
import {OtelHarness} from './otelHarness';
import {setMockFallbackResponse} from './utils';
import type {LogPayload} from '../../src/observability/LoggerHelper';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject,
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error,
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error,
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

/**
 * The tests in this file do not require end-to-end auth functionality (including ADC)
 */
class GrpcClient extends OriginalGrpcClient {
  auth = new GoogleAuth({authClient: new PassThroughClient()});
}

describe('LocationsClient', () => {
  describe('getLocation', () => {
    it('invokes getLocation without error', async () => {
      const grpcClient = new GrpcClient();
      const client = new LocationsClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      await client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.location.GetLocationRequest(),
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.location.Location(),
      );
      client.innerApiCalls.getLocation = stubSimpleCall(expectedResponse);
      const response = await client.getLocation(request, expectedOptions);
      assert.deepStrictEqual(response, [expectedResponse]);
      assert(
        (client.innerApiCalls.getLocation as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined),
      );
    });

    it('invokes getLocation without error using callback', async () => {
      const grpcClient = new GrpcClient();
      const client = new LocationsClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      await client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.location.GetLocationRequest(),
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.location.Location(),
      );
      client.innerApiCalls.getLocation =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client
          .getLocation(
            request,
            (
              err?: Error | null,
              result?: protos.google.cloud.location.ILocation | null,
            ) => {
              if (err) {
                reject(err);
              } else {
                resolve(result);
              }
            },
          )
          .catch(reject);
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getLocation as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */),
      );
    });

    it('invokes getLocation with error', async () => {
      const grpcClient = new GrpcClient();
      const client = new LocationsClient(grpcClient, {
        projectId: 'bogus',
      });
      await client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.location.GetLocationRequest(),
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.getLocation = stubSimpleCall(
        undefined,
        expectedError,
      );
      await assert.rejects(
        client.getLocation(request, expectedOptions),
        expectedError,
      );
      assert(
        (client.innerApiCalls.getLocation as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined),
      );
    });
  });

  describe('listLocations', () => {
    it('invokes listLocations without error', async () => {
      const grpcClient = new GrpcClient();
      const client = new LocationsClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      await client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.location.ListLocationsRequest(),
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.location.Location()),
        generateSampleMessage(new protos.google.cloud.location.Location()),
        generateSampleMessage(new protos.google.cloud.location.Location()),
      ];
      client.innerApiCalls.listLocations = stubSimpleCall(expectedResponse);
      const [response] = await client.listLocations(request, expectedOptions);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listLocations as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined),
      );
    });

    it('invokes listLocations without error using callback', async () => {
      const grpcClient = new GrpcClient();
      const client = new LocationsClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      await client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.location.ListLocationsRequest(),
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.location.Location()),
        generateSampleMessage(new protos.google.cloud.location.Location()),
        generateSampleMessage(new protos.google.cloud.location.Location()),
      ];
      client.innerApiCalls.listLocations =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listLocations(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.location.ILocation[] | null,
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          },
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listLocations as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */),
      );
    });

    it('invokes listLocations with error', async () => {
      const grpcClient = new GrpcClient();
      const client = new LocationsClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      await client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.location.ListLocationsRequest(),
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.listLocations = stubSimpleCall(
        undefined,
        expectedError,
      );
      await assert.rejects(
        client.listLocations(request, expectedOptions),
        expectedError,
      );
      assert(
        (client.innerApiCalls.listLocations as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined),
      );
    });

    it('uses async iteration with listLocations without error', async () => {
      const grpcClient = new GrpcClient();
      const client = new LocationsClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      await client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.location.ListLocationsRequest(),
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.location.Location()),
        generateSampleMessage(new protos.google.cloud.location.Location()),
        generateSampleMessage(new protos.google.cloud.location.Location()),
      ];
      client.descriptors.page.listLocations.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.location.ILocation[] = [];
      const iterable = client.listLocationsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.listLocations.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request,
      );
      assert.strictEqual(
        (
          client.descriptors.page.listLocations.asyncIterate as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams,
      );
    });

    it('uses async iteration with listLocations with error', async () => {
      const grpcClient = new GrpcClient();
      const client = new LocationsClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      await client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.location.ListLocationsRequest(),
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedError = new Error('expected');
      client.descriptors.page.listLocations.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.listLocationsAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.location.ILocation[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.listLocations.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request,
      );
      assert.strictEqual(
        (
          client.descriptors.page.listLocations.asyncIterate as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams,
      );
    });
  });

  describe('telemetry propagation', () => {
    class TestLogSink implements loggingUtils.DebugLogBackend {
      logs: Array<{namespace: string; fields: loggingUtils.LogFields}> = [];
      filters: string[] = [];
      log(namespace: string, fields: loggingUtils.LogFields): void {
        this.logs.push({namespace, fields});
      }
      setFilters(filters: string[]): void {
        this.filters = filters;
      }
    }

    let harness: OtelHarness;
    let sink: TestLogSink;

    beforeEach(() => {
      clearMetadataCache();
      sink = new TestLogSink();
      loggingUtils.setBackend(sink);
      harness = new OtelHarness();
      harness.setup();
    });

    afterEach(() => {
      clearMetadataCache();
      loggingUtils.setBackend(undefined);
      harness.teardown();
      delete process.env.GOOGLE_SDK_NODE_LOGGING;
      delete process.env.GOOGLE_SDK_NODE_ENABLE_TRACING;
    });

    it('propagates tracing, logging, servicePath, port, and REST fallback in LocationsClient', async () => {
      const errorJson = {
        error: {code: 404, message: 'location not found', status: 'NOT_FOUND'},
      };
      const fallbackGrpc = new fallback.GrpcClient({fallback: 'rest'});
      setMockFallbackResponse(
        fallbackGrpc,
        new Response(Buffer.from(JSON.stringify(errorJson)), {status: 404}),
      );
      (
        fallbackGrpc.auth as unknown as {defaultServicePath: string}
      ).defaultServicePath = 'secretmanager.googleapis.com';

      const client = new LocationsClient(fallbackGrpc, {
        servicePath: '127.0.0.1',
        port: 8080,
        fallback: 'rest',
        enableTelemetryTracing: true,
        enableTelemetryLogging: true,
      });

      await assert.rejects(
        client.getLocation({name: 'projects/p/locations/us-central1'}, {}),
      );

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      const attemptSpan = spans.find(
        s => s.name === 'GET /v1/{name=projects/*/locations/*}',
      )!;
      const clientSpan = spans.find(
        s => s.name === 'LocationsClient.GetLocation',
      )!;
      assert.ok(attemptSpan);
      assert.ok(clientSpan);
      assert.strictEqual(
        clientSpan.attributes['rpc.method'],
        'google.cloud.location.Locations/GetLocation',
      );
      assert.strictEqual(attemptSpan.attributes['rpc.system.name'], 'http');
      assert.strictEqual(clientSpan.attributes['rpc.system.name'], 'http');
      assert.strictEqual(attemptSpan.attributes['http.request.method'], 'GET');
      assert.strictEqual(
        attemptSpan.attributes['url.template'],
        '/v1/{name=projects/*/locations/*}',
      );
      assert.strictEqual(
        attemptSpan.attributes['http.response.status_code'],
        404,
      );
      assert.strictEqual(attemptSpan.attributes['server.address'], '127.0.0.1');
      assert.strictEqual(attemptSpan.attributes['server.port'], 8080);
      assert.strictEqual(
        attemptSpan.attributes['url.domain'],
        'secretmanager.googleapis.com',
      );
      assert.strictEqual(clientSpan.attributes['server.address'], '127.0.0.1');
      assert.strictEqual(clientSpan.attributes['server.port'], 8080);
      assert.strictEqual(
        clientSpan.attributes['url.domain'],
        'secretmanager.googleapis.com',
      );

      assert.strictEqual(sink.logs.length, 2);
      const [attemptLog, callLog] = sink.logs;
      const attemptOther = attemptLog.fields.other as LogPayload;
      const callOther = callLog.fields.other as LogPayload;
      assert.strictEqual(attemptOther['rpc.system.name'], 'http');
      assert.strictEqual(callOther['rpc.system.name'], 'http');
      assert.strictEqual(
        attemptOther['rpc.method'],
        'google.cloud.location.Locations/GetLocation',
      );
      assert.strictEqual(
        callOther['rpc.method'],
        'google.cloud.location.Locations/GetLocation',
      );
      assert.strictEqual(attemptOther['http.response.status_code'], 404);
      assert.strictEqual(callOther['http.response.status_code'], 404);
      assert.strictEqual(attemptOther['error.type'], '404');
      assert.strictEqual(callOther['error.type'], '404');
      assert.strictEqual(attemptOther['server.address'], '127.0.0.1');
      assert.strictEqual(
        attemptOther['url.domain'],
        'secretmanager.googleapis.com',
      );
      assert.strictEqual(callOther['server.address'], '127.0.0.1');
      assert.strictEqual(
        callOther['url.domain'],
        'secretmanager.googleapis.com',
      );
    });
  });
});
