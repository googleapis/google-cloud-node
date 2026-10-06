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

import assert from 'assert';
import {PassThrough} from 'stream';
import {status} from '@grpc/grpc-js';
import {SpanKind, SpanStatusCode} from '@opentelemetry/api';
import {GoogleAuth, PassThroughClient} from 'google-auth-library';
import {afterEach, beforeEach, describe, it} from 'mocha';
import * as sinon from 'sinon';
import echoProtoJson = require('../fixtures/echo.json');

import {
  CancellableStream,
  GRPCCall,
  GRPCCallResult,
  RequestType,
  ResultTuple,
} from '../../src/apitypes';
import {createApiCall as gaxCreateApiCall} from '../../src/createApiCall';
import {
  createApiCall as fallbackCreateApiCall,
  GrpcClient as FallbackGrpcClient,
} from '../../src/fallback';
import {GrpcClient} from '../../src/grpc';
import {PageDescriptor, StreamDescriptor} from '../../src/descriptor';
import {StreamType} from '../../src/streamingCalls/streaming';
import * as gax from '../../src/gax';
import {GoogleError} from '../../src/googleError';
import {OtelHarness} from './otelHarness';
import * as tracerHelper from '../../src/observability/TracerHelper';
import {StaticTraceContext} from '../../src/observability/TracerHelper';
import {clearMetadataCache} from '../../src/observability/metadataResolver';
import * as utils from './utils';
import * as retries from '../../src/normalCalls/retries';

const fail = utils.fail;
const createApiCall = utils.createApiCall;
const FAKE_STATUS_CODE_1 = utils.FAKE_STATUS_CODE_1;
const FAKE_STATUS_CODE_2 = utils.FAKE_STATUS_CODE_1 + 1;

describe('createApiCall', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('calls api call', done => {
    let deadlineArg: {};
    function func(
      argument: {},
      metadata: {},
      options: {deadline: string},
      callback: Function,
    ) {
      deadlineArg = options.deadline;
      callback(null, argument);
    }
    const apiCall = createApiCall(func);
    void apiCall(42, undefined, (err, resp) => {
      try {
        assert.strictEqual(err, null);
        assert.strictEqual(resp, 42);
        assert.ok(deadlineArg);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('is customized by call options', done => {
    function func(
      argument: {},
      metadata: {},
      options: {deadline: {getTime: Function}},
      callback: Function,
    ) {
      callback(null, options.deadline.getTime());
    }
    const apiCall = createApiCall(func, {settings: {timeout: 100}});
    void apiCall({}, {timeout: 200}, (err, resp) => {
      const now = new Date();
      const originalDeadline = now.getTime() + 100;
      const expectedDeadline = now.getTime() + 200;
      try {
        assert.strictEqual(err, null);
        assert((resp as unknown as number)! > originalDeadline);
        assert((resp as unknown as number)! <= expectedDeadline);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('chooses the proper timeout', done => {
    function func(
      argument: {},
      metadata: {},
      options: {deadline: {getTime: Function}},
      callback: Function,
    ) {
      callback(null, options.deadline.getTime());
    }

    // The settings originally from the 'config_service_v2_client_config.json'
    // in @google-cloud/logging library.
    // See https://github.com/googleapis/gax-nodejs/issues/136
    const apiCall = createApiCall(func, {
      settings: {
        timeout: 30000,
        retry: gax.createRetryOptions(
          [],
          gax.createBackoffSettings(100, 1.2, 1000, 2000, 1.5, 30000, 45000),
        ),
      },
    });

    const start = new Date().getTime();
    void apiCall({}, undefined, (err, resp) => {
      try {
        assert.strictEqual(err, null);
        // The verifying value is slightly bigger than the expected number
        // 2000 / 30000, because sometimes runtime can consume some time before
        // the call starts.
        assert(Number(resp) - start > 2100);
        assert(Number(resp) - start <= 30100);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('default to `timeout` for idempotent API calls', done => {
    function func(
      argument: {},
      metadata: {},
      options: {deadline: {getTime: Function}},
      callback: Function,
    ) {
      callback(null, options.deadline.getTime());
    }

    const apiCall = createApiCall(func, {
      settings: {
        retry: gax.createRetryOptions([1], {
          initialRetryDelayMillis: 100,
          retryDelayMultiplier: 1.2,
          maxRetryDelayMillis: 1000,
          rpcTimeoutMultiplier: 1.5,
          maxRpcTimeoutMillis: 3000,
          totalTimeoutMillis: 4500,
        }),
      },
    });

    const start = new Date().getTime();
    void apiCall({}, undefined, (err, resp) => {
      try {
        assert.strictEqual(err, null);
        // The verifying value is slightly bigger than the expected number
        // 2000 / 30000, because sometimes runtime can consume some time before
        // the call starts.
        assert(Number(resp) - start > 2100);
        assert(Number(resp) - start <= 30100);
        done();
      } catch (err) {
        done(err);
      }
    });
  });
  it('override just custom retry.retryCodes with retry codes', done => {
    const initialRetryCodes = [1];
    const overrideRetryCodes = [1, 2, 3];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sinon.stub(retries, 'retryable').callsFake((func, retry): any => {
      try {
        assert.strictEqual(retry.retryCodes, overrideRetryCodes);
        return func;
      } catch (err) {
        done(err);
      }
      return func;
    });

    function func() {
      done();
    }
    const apiCall = createApiCall(func, {
      settings: {
        retry: gax.createRetryOptions(initialRetryCodes, {
          initialRetryDelayMillis: 100,
          retryDelayMultiplier: 1.2,
          maxRetryDelayMillis: 1000,
          rpcTimeoutMultiplier: 1.5,
          maxRpcTimeoutMillis: 3000,
          totalTimeoutMillis: 4500,
        }),
      },
    });

    void apiCall(
      {},
      {
        retry: {
          retryCodes: overrideRetryCodes,
        },
      },
    );
  });
  it('errors when you override custom retry.shouldRetryFn with a function on a non streaming call', async () => {
    function neverRetry() {
      return false;
    }
    const initialRetryCodes = [1];
    const overrideRetryCodes = neverRetry;

    function func() {
      return Promise.resolve();
    }

    const apiCall = createApiCall(func, {
      settings: {
        retry: gax.createRetryOptions(initialRetryCodes, {
          initialRetryDelayMillis: 100,
          retryDelayMultiplier: 1.2,
          maxRetryDelayMillis: 1000,
          rpcTimeoutMultiplier: 1.5,
          maxRpcTimeoutMillis: 3000,
          totalTimeoutMillis: 4500,
        }),
      },
    });
    try {
      await apiCall(
        {},
        {
          retry: {
            shouldRetryFn: overrideRetryCodes,
          },
        },
      );
    } catch (err) {
      assert(err instanceof Error);
      assert.strictEqual(
        err.message,
        'Using a function to determine retry eligibility is only supported with server streaming calls',
      );
    }
  });

  it('override just custom retry.backoffSettings', done => {
    const initialBackoffSettings = gax.createDefaultBackoffSettings();
    const overriBackoffSettings = gax.createBackoffSettings(
      100,
      1.2,
      1000,
      null,
      1.5,
      3000, // added 2 zeroes
      4500,
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sinon.stub(retries, 'retryable').callsFake((func, retry): any => {
      try {
        assert.strictEqual(retry.backoffSettings, overriBackoffSettings);

        return func;
      } catch (err) {
        done(err);
      }
    });

    function func() {
      done();
    }

    const apiCall = createApiCall(func, {
      settings: {
        retry: gax.createRetryOptions([1], initialBackoffSettings),
      },
    });

    void apiCall(
      {},
      {
        retry: {
          backoffSettings: overriBackoffSettings,
        },
      },
    );
  });

  it('errors when a resumption strategy is passed for a non streaming call', async () => {
    const initialBackoffSettings = gax.createDefaultBackoffSettings();
    const overriBackoffSettings = gax.createBackoffSettings(
      100,
      1.2,
      1000,
      null,
      1.5,
      3000,
      4500,
    );
    // "resumption" strategy is to just return the original request
    const getResumptionRequestFn = (originalRequest: RequestType) => {
      return originalRequest;
    };

    function func() {
      return Promise.resolve();
    }
    const apiCall = createApiCall(func, {
      settings: {
        retry: gax.createRetryOptions(
          [1],
          initialBackoffSettings,
          undefined,
          getResumptionRequestFn,
        ),
      },
    });

    try {
      await apiCall(
        {},
        {
          retry: {
            backoffSettings: overriBackoffSettings,
          },
        },
      );
    } catch (err) {
      assert(err instanceof Error);
      assert.strictEqual(
        err.message,
        'Resumption strategy can only be used with server streaming retries',
      );
    }
  });

  describe('in regards to OpenTelemetry Tracing', () => {
    let harness: OtelHarness;

    const telemetryInfo: StaticTraceContext = {
      gcpClientService: 'echo.googleapis.com',
      gcpVersion: '1.2.3',
      gcpRepo: 'googleapis/google-cloud-node',
      gcpArtifact: '@google-cloud/echo',
    };

    beforeEach(() => {
      clearMetadataCache();
      harness = new OtelHarness();
      harness.setup();
    });

    afterEach(() => {
      clearMetadataCache();
      harness.teardown();
      delete process.env.GOOGLE_SDK_NODE_ENABLE_TRACING;
      delete process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_O11Y_ENABLED;
      delete process.env.GOOGLE_SDK_NODE_CLIENT_SERVICE;
      delete process.env.GOOGLE_SDK_NODE_CLIENT_VERSION;
      delete process.env.GOOGLE_SDK_NODE_ARTIFACT;
    });

    it('calls traceCall with dynamicArgs, staticArgs, and isStreamingCall when tracing is enabled', async () => {
      const traceCallSpy = sinon.spy(tracerHelper, 'traceCall');

      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {cancel: () => {}};
      }

      const apiCall = gaxCreateApiCall(func, settings);
      await apiCall({param: 'test'}, undefined);

      assert.strictEqual(traceCallSpy.calledOnce, true);
      const [dynamicArgs, staticArgs, fn, isStreamingCall] =
        traceCallSpy.firstCall.args;

      assert.deepStrictEqual(dynamicArgs, {
        clientName: 'EchoClient',
        methodName: 'Echo',
        rpcType: 'grpc',
      });
      assert.deepStrictEqual(staticArgs, telemetryInfo);
      assert.strictEqual(typeof fn, 'function');
      assert.strictEqual(isStreamingCall, false);
    });

    it('calls traceCall when tracing is enabled via GOOGLE_SDK_NODE_ENABLE_TRACING environment variable', async () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';
      const traceCallSpy = sinon.spy(tracerHelper, 'traceCall');

      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {cancel: () => {}};
      }

      const apiCall = gaxCreateApiCall(func, settings);
      await apiCall({param: 'test'}, undefined);

      assert.strictEqual(traceCallSpy.calledOnce, true);
    });

    it('still calls traceCall when GOOGLE_SDK_NODE_EXPERIMENTAL_O11Y_ENABLED is false', async () => {
      process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_O11Y_ENABLED = 'false';
      const traceCallSpy = sinon.spy(tracerHelper, 'traceCall');

      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {cancel: () => {}};
      }

      const apiCall = gaxCreateApiCall(func, settings);
      await apiCall({param: 'test'}, undefined);

      assert.strictEqual(traceCallSpy.calledOnce, true);
    });

    it('passes isStreamingCall as true to traceCall for streaming calls when tracing is enabled', () => {
      const traceCallSpy = sinon.spy(tracerHelper, 'traceCall');

      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      const spy = sinon.spy(() => {
        const s = new PassThrough({objectMode: true});
        s.push(null);
        return Object.assign(s, {cancel: () => {}});
      });

      const apiCall = gaxCreateApiCall(
        spy as unknown as GRPCCall,
        settings,
        new StreamDescriptor(StreamType.SERVER_STREAMING, true),
      );
      void apiCall({}, undefined);

      assert.strictEqual(traceCallSpy.calledOnce, true);
      const [, , , isStreamingCall] = traceCallSpy.firstCall.args;
      assert.strictEqual(isStreamingCall, true);
    });

    it('gracefully handles missing apiName and internalMethodName when tracing is enabled', async () => {
      const traceCallSpy = sinon.spy(tracerHelper, 'traceCall');

      const settings = new gax.CallSettings({
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {cancel: () => {}};
      }

      const apiCall = gaxCreateApiCall(func, settings);
      await apiCall({}, undefined);

      assert.strictEqual(traceCallSpy.calledOnce, true);
      const [dynamicArgs] = traceCallSpy.firstCall.args;
      assert.deepStrictEqual(dynamicArgs, {
        clientName: '',
        methodName: '',
        rpcType: 'grpc',
      });
    });

    it('returns invokeCall directly without calling traceCall when tracing is disabled', async () => {
      const traceCallSpy = sinon.spy(tracerHelper, 'traceCall');

      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: false,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {cancel: () => {}};
      }

      const apiCall = gaxCreateApiCall(func, settings);
      await apiCall({}, undefined);

      assert.strictEqual(traceCallSpy.called, false);
      assert.strictEqual(harness.getSpans('google-gax').length, 0);
    });

    it('correctly pipes telemetry information into the active span for gRPC calls', async () => {
      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {
          cancel: () => {},
        };
      }

      const apiCall = gaxCreateApiCall(func, settings);
      const [response] = (await apiCall({}, undefined)) as [
        {data: string},
        unknown,
        unknown,
      ];
      assert.deepStrictEqual(response, {data: 'hello'});

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      const attemptSpan = spans[0];
      const span = spans[1];
      assert.strictEqual(attemptSpan.name, 'google.example.v1.Echo/Echo');
      assert.strictEqual(attemptSpan.kind, SpanKind.CLIENT);
      assert.strictEqual(
        attemptSpan.parentSpanContext?.spanId,
        span.spanContext().spanId,
      );
      assert.strictEqual(span.name, 'EchoClient.Echo');
      assert.strictEqual(span.kind, SpanKind.INTERNAL);
      assert.strictEqual(span.ended, true);
      assert.strictEqual(
        span.attributes['gcp.client.service'],
        'echo.googleapis.com',
      );
      assert.strictEqual(span.attributes['gcp.client.version'], '1.2.3');
      assert.strictEqual(
        span.attributes['gcp.repo'],
        'googleapis/google-cloud-node',
      );
      assert.strictEqual(span.attributes['gcp.artifact'], '@google-cloud/echo');
      assert.strictEqual(span.attributes['gcp.method.name'], 'Echo');
      assert.strictEqual(span.attributes['gcp.method.type'], 'grpc');
      assert.strictEqual(span.attributes['url.domain'], 'echo.googleapis.com');
    });

    it('enables tracing purely through GOOGLE_SDK_NODE_ENABLE_TRACING and resolves static metadata dynamically at runtime', async () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';
      const settings = new gax.CallSettings({
        apiName: 'google.cloud.redis.v1.CloudRedis',
        otherArgs: {
          internalMethodName: 'GetInstance',
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {
          cancel: () => {},
        };
      }

      const apiCall = gaxCreateApiCall(func, settings);
      const [response] = (await apiCall({}, undefined)) as [
        {data: string},
        unknown,
        unknown,
      ];
      assert.deepStrictEqual(response, {data: 'hello'});

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      const attemptSpan = spans[0];
      const span = spans[1];
      assert.strictEqual(
        attemptSpan.name,
        'google.cloud.redis.v1.CloudRedis/GetInstance',
      );
      assert.strictEqual(attemptSpan.kind, SpanKind.CLIENT);
      assert.strictEqual(span.name, 'CloudRedisClient.GetInstance');
      assert.strictEqual(span.ended, true);
      assert.strictEqual(span.attributes['gcp.client.service'], 'redis');
      assert.ok(span.attributes['gcp.client.version']);
      assert.ok(span.attributes['gcp.repo']);
      assert.ok(span.attributes['gcp.artifact']);
      assert.strictEqual(span.attributes['gcp.method.name'], 'GetInstance');
      assert.strictEqual(span.attributes['gcp.method.type'], 'grpc');
    });

    it('resolves static metadata from environment variables when configured', async () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';
      process.env.GOOGLE_SDK_NODE_CLIENT_SERVICE = 'env-service';
      process.env.GOOGLE_SDK_NODE_CLIENT_VERSION = '9.9.9';
      process.env.GOOGLE_SDK_NODE_ARTIFACT = '@custom/env-pkg';

      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        otherArgs: {
          internalMethodName: 'Echo',
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {
          cancel: () => {},
        };
      }

      const apiCall = gaxCreateApiCall(func, settings);
      await apiCall({}, undefined);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      const span = spans[1];
      assert.strictEqual(span.attributes['gcp.client.service'], 'env-service');
      assert.strictEqual(span.attributes['gcp.client.version'], '9.9.9');
      assert.strictEqual(
        span.attributes['gcp.repo'],
        'googleapis/google-cloud-node',
      );
      assert.strictEqual(span.attributes['gcp.artifact'], '@custom/env-pkg');
    });

    it('correctly pipes telemetry information for HTTP fallback calls', async () => {
      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {
          cancel: () => {},
        };
      }

      const apiCall = gaxCreateApiCall(func, settings, undefined, true);
      await apiCall({}, undefined);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      const attemptSpan = spans[0];
      const span = spans[1];
      assert.strictEqual(attemptSpan.name, 'POST');
      assert.strictEqual(attemptSpan.kind, SpanKind.CLIENT);
      assert.strictEqual(attemptSpan.attributes['rpc.system'], 'http');
      assert.strictEqual(attemptSpan.attributes['gcp.method.type'], undefined);
      assert.strictEqual(span.name, 'EchoClient.Echo');
      assert.strictEqual(span.ended, true);
      assert.strictEqual(span.attributes['gcp.method.type'], 'http');
    });

    it('passes fallback flag through when using fallback createApiCall with default options', async () => {
      const traceCallSpy = sinon.spy(tracerHelper, 'traceCall');

      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {
          cancel: () => {},
        };
      }

      const apiCall = fallbackCreateApiCall(func, settings);
      await apiCall({}, undefined);

      assert.strictEqual(traceCallSpy.calledOnce, true);
      const [dynamicArgs] = traceCallSpy.firstCall.args;
      assert.strictEqual(dynamicArgs.rpcType, 'http');

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      const attemptSpan = spans[0];
      const span = spans[1];
      assert.strictEqual(attemptSpan.name, 'POST');
      assert.strictEqual(attemptSpan.attributes['rpc.system'], 'http');
      assert.strictEqual(span.name, 'EchoClient.Echo');
      assert.strictEqual(span.ended, true);
      assert.strictEqual(span.attributes['gcp.method.type'], 'http');
    });

    it('overrides an explicit _fallback argument, since the call is a fallback call by definition', async () => {
      const traceCallSpy = sinon.spy(tracerHelper, 'traceCall');

      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {
          cancel: () => {},
        };
      }

      // `_fallback` is documented as "unused; for compatibility only" and is
      // never read. Reaching this function at all means the call is going over
      // the fallback transport, so `false` must not be able to mislabel it.
      const apiCall = fallbackCreateApiCall(func, settings, undefined, false);
      await apiCall({}, undefined);

      assert.strictEqual(traceCallSpy.calledOnce, true);
      const [dynamicArgs] = traceCallSpy.firstCall.args;
      assert.strictEqual(dynamicArgs.rpcType, 'http');

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      const span = spans[1];
      assert.strictEqual(span.attributes['gcp.method.type'], 'http');
    });

    it('ends the span and labels it DEADLINE_EXCEEDED when a fallback call times out', async () => {
      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      // The error the REST transport produces when a call exceeds its
      // deadline: a GoogleError carrying the numeric gRPC status, so that
      // retryCodes, caller `err.code` checks and telemetry all agree across
      // transports. An unenforced deadline is what leaves a span open
      // forever, which is the failure this tracing work has to surface
      // rather than hide.
      function timingOutFunc(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        const error = new GoogleError(
          'Deadline exceeded: Echo did not respond within 100 milliseconds.',
        );
        error.code = status.DEADLINE_EXCEEDED;
        setImmediate(() => callback(error));
        return {
          cancel: () => {},
        };
      }

      const apiCall = fallbackCreateApiCall(timingOutFunc, settings);
      const promise = apiCall({}, undefined);

      // The span must not be closed while the call is still outstanding; a
      // fabricated end time would report a duration the RPC never took.
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      await assert.rejects(
        async () => {
          await promise;
        },
        (err: GoogleError) => {
          assert.strictEqual(err.code, status.DEADLINE_EXCEEDED);
          return true;
        },
      );

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      assert.strictEqual(spans[0].attributes['rpc.system'], 'http');
      assert.strictEqual(spans[1].attributes['gcp.method.type'], 'http');
      for (const span of spans) {
        assert.strictEqual(span.ended, true);
        // On the fallback transport error.type reports the HTTP status the
        // server sent. A deadline expires before any response arrives, so there
        // is none, and the attribute resolves to CLIENT_TIMEOUT per Tier 3.
        assert.strictEqual(span.attributes['error.type'], 'CLIENT_TIMEOUT');
        assert.strictEqual(
          span.attributes['rpc.response.status_code'],
          undefined,
        );
        assert.strictEqual(
          span.attributes['http.response.status_code'],
          undefined,
        );
        assert.strictEqual(span.events.length, 1);
        assert.strictEqual(span.events[0].name, 'exception');
      }
    });

    it('ends the span and preserves system error codes like ECONNREFUSED on a fallback call', async () => {
      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function connectionRefusedFunc(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        const fetchError = Object.assign(
          new Error('connect ECONNREFUSED 127.0.0.1:443'),
          {
            code: 'ECONNREFUSED',
          },
        );
        const error = new GoogleError(fetchError.message);
        error.code = status.UNAVAILABLE;
        error.cause = fetchError;
        setImmediate(() => callback(error));
        return {
          cancel: () => {},
        };
      }

      const apiCall = fallbackCreateApiCall(connectionRefusedFunc, settings);
      const promise = apiCall({}, undefined);

      await assert.rejects(
        async () => {
          await promise;
        },
        (err: GoogleError) => {
          assert.strictEqual(err.code, status.UNAVAILABLE);
          return true;
        },
      );

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      assert.strictEqual(spans[0].attributes['rpc.system'], 'http');
      assert.strictEqual(spans[1].attributes['gcp.method.type'], 'http');
      for (const span of spans) {
        assert.strictEqual(span.ended, true);
        assert.strictEqual(
          span.attributes['error.type'],
          'CLIENT_CONNECTION_ERROR',
        );
        assert.strictEqual(
          span.attributes['rpc.response.status_code'],
          undefined,
        );
        assert.strictEqual(
          span.attributes['http.response.status_code'],
          undefined,
        );
        assert.strictEqual(span.events.length, 1);
        assert.strictEqual(span.events[0].name, 'exception');
        assert.strictEqual(
          span.events[0].attributes?.['exception.type'],
          'GoogleError',
        );
      }
    });

    it('passes fallback flag and isStreamingCall as true for server-streaming fallback calls', () => {
      const traceCallSpy = sinon.spy(tracerHelper, 'traceCall');

      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      const spy = sinon.spy(() => {
        const s = new PassThrough({objectMode: true});
        s.push(null);
        return Object.assign(s, {cancel: () => {}});
      });

      const apiCall = fallbackCreateApiCall(
        spy as unknown as GRPCCall,
        settings,
        new StreamDescriptor(StreamType.SERVER_STREAMING, true),
      );
      void apiCall({}, undefined);

      assert.strictEqual(traceCallSpy.calledOnce, true);
      const [dynamicArgs, , , isStreamingCall] = traceCallSpy.firstCall.args;
      assert.strictEqual(dynamicArgs.rpcType, 'http');
      assert.strictEqual(isStreamingCall, true);
    });

    it('sets rpcType to grpc when _fallback is boolean false', async () => {
      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {
          cancel: () => {},
        };
      }

      const apiCall = gaxCreateApiCall(func, settings, undefined, false);
      await apiCall({}, undefined);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      assert.strictEqual(spans[0].attributes['rpc.system'], 'grpc');
      assert.strictEqual(spans[1].attributes['gcp.method.type'], 'grpc');
    });

    it('sets rpcType to http when _fallback is "rest"', async () => {
      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {
          cancel: () => {},
        };
      }

      const apiCall = gaxCreateApiCall(func, settings, undefined, 'rest');
      await apiCall({}, undefined);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      assert.strictEqual(spans[0].attributes['rpc.system'], 'http');
      assert.strictEqual(spans[1].attributes['gcp.method.type'], 'http');
    });

    it('sets rpcType to http when _fallback is "proto"', async () => {
      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {
          cancel: () => {},
        };
      }

      const apiCall = gaxCreateApiCall(func, settings, undefined, 'proto');
      await apiCall({}, undefined);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      assert.strictEqual(spans[0].attributes['rpc.system'], 'http');
      assert.strictEqual(spans[1].attributes['gcp.method.type'], 'http');
    });

    it('pipes telemetry information configured via constructSettings', async () => {
      const serviceName = 'google.example.v1.Echo';
      const defaults = gax.constructSettings(
        serviceName,
        {
          interfaces: {
            [serviceName]: {
              methods: {
                Echo: {},
              },
            },
          },
        },
        {},
        {},
        undefined,
        true,
        telemetryInfo,
      );

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {
          cancel: () => {},
        };
      }

      const apiCall = gaxCreateApiCall(func, defaults.echo);
      await apiCall({}, undefined);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      const attemptSpan = spans[0];
      const span = spans[1];
      assert.strictEqual(attemptSpan.name, 'google.example.v1.Echo/Echo');
      assert.strictEqual(attemptSpan.kind, SpanKind.CLIENT);
      assert.strictEqual(span.name, 'EchoClient.Echo');
      assert.strictEqual(span.ended, true);
      assert.strictEqual(
        span.attributes['gcp.client.service'],
        'echo.googleapis.com',
      );
      assert.strictEqual(span.attributes['gcp.client.version'], '1.2.3');
      assert.strictEqual(
        span.attributes['gcp.repo'],
        'googleapis/google-cloud-node',
      );
      assert.strictEqual(span.attributes['gcp.artifact'], '@google-cloud/echo');
      assert.strictEqual(span.attributes['gcp.method.name'], 'Echo');
      assert.strictEqual(span.attributes['gcp.method.type'], 'grpc');
    });

    it('records error details on the span when the API call fails', async () => {
      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function failingFunc(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        const error = new GoogleError('RPC test failure');
        setImmediate(() => {
          callback(error);
        });
        return {
          cancel: () => {},
        };
      }

      const apiCall = gaxCreateApiCall(failingFunc, settings);
      const promise = apiCall({}, undefined);
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      await assert.rejects(
        async () => {
          await promise;
        },
        (err: GoogleError) => {
          assert.strictEqual(err.message, 'RPC test failure');
          return true;
        },
      );

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      for (const span of spans) {
        assert.strictEqual(span.ended, true);
        assert.strictEqual(span.status.message, 'RPC test failure');
        assert.strictEqual(
          span.attributes['status.message'],
          'RPC test failure',
        );
        assert.strictEqual(span.events.length, 1);
        assert.strictEqual(span.events[0].name, 'exception');
      }
    });

    it('does not end span prematurely for successful asynchronous API calls', async () => {
      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function asyncFunc(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        setImmediate(() => {
          callback(null, {data: 'hello'});
        });
        return {
          cancel: () => {},
        };
      }

      const apiCall = gaxCreateApiCall(asyncFunc, settings);
      const promise = apiCall({}, undefined);

      // Verify the span is not ended prematurely while the call is in flight
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      const [response] = (await promise) as [{data: string}, unknown, unknown];
      assert.deepStrictEqual(response, {data: 'hello'});

      // Spans must only be ended after completion
      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      assert.strictEqual(spans[0].ended, true);
      assert.strictEqual(spans[0].name, 'google.example.v1.Echo/Echo');
      const span = spans[1];
      assert.strictEqual(span.ended, true);
      assert.strictEqual(span.name, 'EchoClient.Echo');
    });

    it('cancels the call and ends the span', async () => {
      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function cancellableFunc(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        const timeoutId = setTimeout(() => {
          callback(null, {data: 'done'});
        }, 5000);
        return {
          cancel: () => {
            clearTimeout(timeoutId);
            const err = new GoogleError('cancelled');
            err.code = status.CANCELLED;
            callback(err);
          },
        };
      }

      const apiCall = gaxCreateApiCall(cancellableFunc, settings);
      const promise = apiCall({}, undefined);
      assert.strictEqual(typeof promise.cancel, 'function');
      promise.cancel();

      await assert.rejects(async () => {
        await promise;
      });

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      const span = spans[0];
      assert.strictEqual(span.ended, true);
    });

    it('does not create any spans when tracing is disabled', async () => {
      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: false,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      function func(
        argument: {},
        metadata: {},
        options: {},
        callback: (err: GoogleError | null, resp?: unknown) => void,
      ) {
        callback(null, {data: 'hello'});
        return {
          cancel: () => {},
        };
      }

      const apiCall = gaxCreateApiCall(func, settings);
      await apiCall({}, undefined);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 0);
    });

    it('manages span lifetime for streaming API calls until stream ends', done => {
      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      const spy = sinon.spy(() => {
        const s = new PassThrough({
          objectMode: true,
        });
        s.push({data: 'chunk1'});
        s.push({data: 'chunk2'});
        s.push(null);
        return Object.assign(s, {cancel: () => {}});
      });

      const apiCall = gaxCreateApiCall(
        spy as unknown as GRPCCall,
        settings,
        new StreamDescriptor(StreamType.SERVER_STREAMING, true),
      );
      const stream = apiCall({}, undefined) as CancellableStream;
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      const received: unknown[] = [];
      stream.on('data', chunk => {
        received.push(chunk);
        // Span must remain active while streaming chunks
        assert.strictEqual(harness.getSpans('google-gax').length, 0);
      });
      stream.on('end', () => {
        try {
          assert.strictEqual(received.length, 2);
          const spans = harness.getSpans('google-gax');
          assert.strictEqual(spans.length, 2);
          const attemptSpan = spans[0];
          const span = spans[1];
          assert.strictEqual(attemptSpan.ended, true);
          assert.strictEqual(attemptSpan.name, 'google.example.v1.Echo/Echo');
          assert.strictEqual(attemptSpan.kind, SpanKind.CLIENT);
          assert.strictEqual(span.ended, true);
          assert.strictEqual(span.name, 'EchoClient.Echo');
          assert.strictEqual(span.attributes['gcp.method.type'], 'grpc');
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    it('records error details on the span when a streaming API call errors', done => {
      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      const spy = sinon.spy(() => {
        const s = new PassThrough({
          objectMode: true,
        });
        setImmediate(() => {
          s.emit('error', new GoogleError('streaming test failure'));
        });
        return Object.assign(s, {cancel: () => {}});
      });

      const apiCall = gaxCreateApiCall(
        spy as unknown as GRPCCall,
        settings,
        new StreamDescriptor(StreamType.SERVER_STREAMING, true),
      );
      const stream = apiCall({}, undefined) as CancellableStream;
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      stream.on('error', (err: GoogleError) => {
        try {
          assert.strictEqual(err.message, 'streaming test failure');
          const spans = harness.getSpans('google-gax');
          assert.strictEqual(spans.length, 2);
          for (const span of spans) {
            assert.strictEqual(span.ended, true);
            assert.strictEqual(span.status.message, 'streaming test failure');
            assert.strictEqual(
              span.attributes['status.message'],
              'streaming test failure',
            );
            assert.strictEqual(span.events.length, 1);
            assert.strictEqual(span.events[0].name, 'exception');
          }
          done();
        } catch (e) {
          done(e);
        }
      });
    });

    describe('resend count', () => {
      // The unary retry loop is shared by both transports, and the only thing
      // that distinguishes them on the span is `gcp.method.type` and the name
      // the count is reported under. Running the same cases through both entry
      // points is what stops the count from being reported on one transport
      // only, or from being reported under the other transport's name.
      const transports = [
        {
          name: 'gRPC',
          rpcType: 'grpc',
          createApiCall: gaxCreateApiCall,
        },
        {
          name: 'HTTP fallback',
          rpcType: 'http',
          createApiCall: fallbackCreateApiCall,
        },
      ] as const;

      const retryingSettings = () =>
        new gax.CallSettings({
          apiName: 'google.example.v1.Echo',
          enableTelemetryTracing: true,
          timeout: 0,
          retry: utils.createRetryOptions(0, 0, 0, 0, 0, 0, 100),
          otherArgs: {
            internalTelemetryInfo: telemetryInfo,
            internalMethodName: 'Echo',
          },
        });

      for (const transport of transports) {
        const expectedAttemptSpanName =
          transport.rpcType === 'http' ? 'POST' : 'google.example.v1.Echo/Echo';
        describe(`over ${transport.name}`, () => {
          it('omits resend count when the call succeeds on the first attempt', async () => {
            let attempts = 0;
            function func(
              argument: {},
              metadata: {},
              options: {},
              callback: (err: GoogleError | null, resp?: unknown) => void,
            ) {
              attempts++;
              callback(null, {data: 'hello'});
              return {cancel: () => {}};
            }

            const apiCall = transport.createApiCall(func, retryingSettings());
            await apiCall({}, undefined);

            assert.strictEqual(attempts, 1);
            const spans = harness.getSpans('google-gax');
            assert.strictEqual(spans.length, 1 + attempts);
            const span = spans.find(s => s.name === 'EchoClient.Echo')!;
            assert.ok(span);
            // Asserting the transport too, so that a span accidentally
            // produced by the other one cannot satisfy this test.
            assert.strictEqual(
              span.attributes['gcp.method.type'],
              transport.rpcType,
            );
            harness.assertResendCount(0, {span});
            const attemptSpans = spans.filter(
              s => s.name === expectedAttemptSpanName,
            );
            assert.strictEqual(attemptSpans.length, attempts);
            harness.assertResendCount(0, {span: attemptSpans[0]});
          });

          it('reports one resend per retry', async () => {
            let attempts = 0;
            function func(
              argument: {},
              metadata: {},
              options: {},
              callback: (err: GoogleError | null, resp?: unknown) => void,
            ) {
              attempts++;
              if (attempts < 3) {
                const error = new GoogleError();
                error.code = FAKE_STATUS_CODE_1;
                callback(error);
              } else {
                callback(null, {data: 'hello'});
              }
              return {cancel: () => {}};
            }

            const apiCall = transport.createApiCall(func, retryingSettings());
            await apiCall({}, undefined);

            assert.strictEqual(attempts, 3);
            const spans = harness.getSpans('google-gax');
            assert.strictEqual(spans.length, 1 + attempts);
            const span = spans.find(s => s.name === 'EchoClient.Echo')!;
            assert.ok(span);
            assert.strictEqual(
              span.attributes['gcp.method.type'],
              transport.rpcType,
            );
            // Resend count is only set on T4 attempt spans, not T3 client request spans.
            harness.assertResendCount(0, {span});
            const attemptSpans = spans.filter(
              s => s.name === expectedAttemptSpanName,
            );
            assert.strictEqual(attemptSpans.length, attempts);
            attemptSpans.forEach((attemptSpan, idx) => {
              harness.assertResendCount(idx, {span: attemptSpan});
            });
            harness.assertResponseStatus(
              transport.rpcType === 'http'
                ? {httpStatus: 200}
                : {rpcStatus: 'OK'},
              {span},
            );
          });

          it('reports resends correctly when retries are exhausted by maxRetries', async () => {
            let attempts = 0;
            function func(
              argument: {},
              metadata: {},
              options: {},
              callback: (err: GoogleError | null, resp?: unknown) => void,
            ) {
              attempts++;
              const error = new GoogleError('retryable');
              error.code = FAKE_STATUS_CODE_1;
              callback(error);
              return {cancel: () => {}};
            }

            const settings = new gax.CallSettings({
              apiName: 'google.example.v1.Echo',
              enableTelemetryTracing: true,
              timeout: 0,
              maxRetries: 2,
              retry: gax.createRetryOptions([FAKE_STATUS_CODE_1], {
                initialRetryDelayMillis: 1,
                retryDelayMultiplier: 1,
                maxRetryDelayMillis: 1,
                initialRpcTimeoutMillis: 0,
                rpcTimeoutMultiplier: 1,
                maxRpcTimeoutMillis: 0,
                maxRetries: 2,
              }),
              otherArgs: {
                internalTelemetryInfo: telemetryInfo,
                internalMethodName: 'Echo',
              },
            });

            const apiCall = transport.createApiCall(func, settings);
            await assert.rejects(async () => {
              await apiCall({}, undefined);
            });

            assert.strictEqual(attempts, 2);
            const spans = harness.getSpans('google-gax');
            assert.strictEqual(spans.length, 1 + attempts);
            const span = spans.find(s => s.name === 'EchoClient.Echo')!;
            assert.ok(span);
            assert.strictEqual(
              span.attributes['gcp.method.type'],
              transport.rpcType,
            );
            // 2 attempts made: initial send + 1 resend. The 2nd retry was not sent because maxRetries was reached.
            harness.assertResendCount(0, {span});
            const attemptSpans = spans.filter(
              s => s.name === expectedAttemptSpanName,
            );
            assert.strictEqual(attemptSpans.length, attempts);
            attemptSpans.forEach((attemptSpan, idx) => {
              harness.assertResendCount(idx, {span: attemptSpan});
            });
          });

          it('reports resends correctly when retries are exhausted by totalTimeoutMillis', async () => {
            let attempts = 0;
            function func(
              argument: {},
              metadata: {},
              options: {},
              callback: (err: GoogleError | null, resp?: unknown) => void,
            ) {
              attempts++;
              const error = new GoogleError('retryable');
              error.code = FAKE_STATUS_CODE_1;
              callback(error);
              return {cancel: () => {}};
            }

            const settings = new gax.CallSettings({
              apiName: 'google.example.v1.Echo',
              enableTelemetryTracing: true,
              timeout: 0,
              retry: gax.createRetryOptions([FAKE_STATUS_CODE_1], {
                initialRetryDelayMillis: 20,
                retryDelayMultiplier: 1,
                maxRetryDelayMillis: 20,
                initialRpcTimeoutMillis: 0,
                rpcTimeoutMultiplier: 1,
                maxRpcTimeoutMillis: 0,
                totalTimeoutMillis: 10,
              }),
              otherArgs: {
                internalTelemetryInfo: telemetryInfo,
                internalMethodName: 'Echo',
              },
            });

            const apiCall = transport.createApiCall(func, settings);
            await assert.rejects(async () => {
              await apiCall({}, undefined);
            });

            const spans = harness.getSpans('google-gax');
            assert.strictEqual(spans.length, 1 + attempts);
            const span = spans.find(s => s.name === 'EchoClient.Echo')!;
            assert.ok(span);
            assert.strictEqual(
              span.attributes['gcp.method.type'],
              transport.rpcType,
            );
            harness.assertResendCount(0, {span});
            const attemptSpans = spans.filter(
              s => s.name === expectedAttemptSpanName,
            );
            assert.strictEqual(attemptSpans.length, attempts);
            attemptSpans.forEach((attemptSpan, idx) => {
              harness.assertResendCount(idx, {span: attemptSpan});
            });
          });

          it('omits resend count across multiple pages of an auto-paginated call when no retries occur', async () => {
            const pageDescriptor = new PageDescriptor(
              'pageToken',
              'nextPageToken',
              'secrets',
            );
            let pageRequests = 0;
            function func(
              argument: {pageToken?: string},
              metadata: {},
              options: {},
              callback: (err: GoogleError | null, resp?: unknown) => void,
            ) {
              pageRequests++;
              if (!argument.pageToken) {
                callback(null, {
                  secrets: [{name: 's1'}],
                  nextPageToken: 'page-2',
                });
              } else if (argument.pageToken === 'page-2') {
                callback(null, {
                  secrets: [{name: 's2'}],
                  nextPageToken: 'page-3',
                });
              } else {
                callback(null, {
                  secrets: [{name: 's3'}],
                  nextPageToken: '',
                });
              }
              return {cancel: () => {}};
            }

            const apiCall = transport.createApiCall(
              func,
              retryingSettings(),
              pageDescriptor,
            );
            const [resources] = (await apiCall({}, undefined)) as ResultTuple;

            assert.strictEqual(pageRequests, 3);
            assert.deepStrictEqual(resources, [
              {name: 's1'},
              {name: 's2'},
              {name: 's3'},
            ]);
            const spans = harness.getSpans('google-gax');
            assert.strictEqual(spans.length, 1 + pageRequests);
            const span = spans.find(s => s.name === 'EchoClient.Echo')!;
            assert.ok(span);
            harness.assertResendCount(0, {span});
            const attemptSpans = spans.filter(
              s => s.name === expectedAttemptSpanName,
            );
            assert.strictEqual(attemptSpans.length, pageRequests);
            for (const attemptSpan of attemptSpans) {
              harness.assertResendCount(0, {span: attemptSpan});
            }
          });

          it('resets per-attempt resend count on subsequent pages after an earlier page retries', async () => {
            const pageDescriptor = new PageDescriptor(
              'pageToken',
              'nextPageToken',
              'secrets',
            );
            let totalCalls = 0;
            function func(
              argument: {pageToken?: string},
              metadata: {},
              options: {},
              callback: (err: GoogleError | null, resp?: unknown) => void,
            ) {
              totalCalls++;
              if (!argument.pageToken && totalCalls === 1) {
                const error = new GoogleError('transient');
                error.code = FAKE_STATUS_CODE_1;
                callback(error);
              } else if (!argument.pageToken) {
                callback(null, {
                  secrets: [{name: 's1'}],
                  nextPageToken: 'page-2',
                });
              } else {
                callback(null, {
                  secrets: [{name: 's2'}],
                  nextPageToken: '',
                });
              }
              return {cancel: () => {}};
            }

            const apiCall = transport.createApiCall(
              func,
              retryingSettings(),
              pageDescriptor,
            );
            await apiCall({}, undefined);

            assert.strictEqual(totalCalls, 3);
            const spans = harness.getSpans('google-gax');
            assert.strictEqual(spans.length, 1 + totalCalls);
            const span = spans.find(s => s.name === 'EchoClient.Echo')!;
            assert.ok(span);
            harness.assertResendCount(0, {span});
            const attemptSpans = spans.filter(
              s => s.name === expectedAttemptSpanName,
            );
            assert.strictEqual(attemptSpans.length, 3);
            // Page 1 initial attempt: 0, Page 1 retry: 1, Page 2 initial attempt: 0
            harness.assertResendCount(0, {span: attemptSpans[0]});
            harness.assertResendCount(1, {span: attemptSpans[1]});
            harness.assertResendCount(0, {span: attemptSpans[2]});
          });
        });
      }

      // Server-streaming is gRPC-only here by construction: the fallback
      // serves server-streaming through the `rest` branch of `setStream`,
      // which has no retry loop at all, so there is no resend to count.
      it('reports resends for a retried server-streaming gRPC call', done => {
        const settings = new gax.CallSettings({
          apiName: 'google.example.v1.Echo',
          enableTelemetryTracing: true,
          otherArgs: {
            internalTelemetryInfo: telemetryInfo,
            internalMethodName: 'Echo',
          },
        });

        const retryableError = Object.assign(new GoogleError('UNAVAILABLE'), {
          code: status.UNAVAILABLE,
        });

        let attempts = 0;
        const spy = sinon.spy(() => {
          attempts++;
          const s = new PassThrough({objectMode: true});
          setImmediate(() => {
            s.emit('error', retryableError);
          });
          return Object.assign(s, {cancel: () => {}});
        });

        const apiCall = gaxCreateApiCall(
          spy as unknown as GRPCCall,
          settings,
          new StreamDescriptor(StreamType.SERVER_STREAMING, false, true),
        );

        // Server-streaming calls retry inside the stream rather than through
        // `retryable`, so this covers the other half of the wiring. The budget
        // is capped with maxRetries so the call terminates deterministically
        // instead of racing a wall-clock timeout.
        const stream = apiCall(
          {},
          {
            retry: gax.createRetryOptions([status.UNAVAILABLE], {
              initialRetryDelayMillis: 1,
              retryDelayMultiplier: 1,
              maxRetryDelayMillis: 1,
              initialRpcTimeoutMillis: 0,
              rpcTimeoutMultiplier: 1,
              maxRpcTimeoutMillis: 0,
              maxRetries: 2,
            }),
          },
        ) as CancellableStream;

        stream.on('error', () => {
          try {
            // Three attempts: the initial send plus the two allowed resends.
            assert.strictEqual(attempts, 3);
            const spans = harness.getSpans('google-gax');
            assert.strictEqual(spans.length, 1 + attempts);
            const span = spans.find(s => s.name === 'EchoClient.Echo')!;
            assert.ok(span);
            assert.strictEqual(span.attributes['gcp.method.type'], 'grpc');
            harness.assertResendCount(0, {span});
            const attemptSpans = spans.filter(
              s => s.name === 'google.example.v1.Echo/Echo',
            );
            assert.strictEqual(attemptSpans.length, attempts);
            attemptSpans.forEach((attemptSpan, idx) => {
              harness.assertResendCount(idx, {span: attemptSpan});
            });
            done();
          } catch (e) {
            done(e);
          }
        });
      });

      it('reports resends for a default retry-request server-streaming gRPC call', done => {
        const settings = new gax.CallSettings({
          apiName: 'google.example.v1.Echo',
          enableTelemetryTracing: true,
          otherArgs: {
            internalTelemetryInfo: telemetryInfo,
            internalMethodName: 'Echo',
          },
        });

        const retryableError = Object.assign(new GoogleError('UNAVAILABLE'), {
          code: status.UNAVAILABLE,
        });

        let attempts = 0;
        const spy = sinon.spy(() => {
          attempts++;
          const s = new PassThrough({objectMode: true});
          setImmediate(() => {
            s.emit('error', retryableError);
          });
          return Object.assign(s, {cancel: () => {}});
        });

        const apiCall = gaxCreateApiCall(
          spy as unknown as GRPCCall,
          settings,
          new StreamDescriptor(StreamType.SERVER_STREAMING),
        );

        const stream = apiCall(
          {},
          {
            retryRequestOptions: {
              retries: 2,
              shouldRetryFn: () => true,
            },
          },
        ) as CancellableStream;

        stream.on('error', () => {
          try {
            assert.strictEqual(attempts, 3);
            const spans = harness.getSpans('google-gax');
            assert.strictEqual(spans.length, 1 + attempts);
            const span = spans.find(s => s.name === 'EchoClient.Echo')!;
            assert.ok(span);
            assert.strictEqual(span.attributes['gcp.method.type'], 'grpc');
            harness.assertResendCount(0, {span});
            const attemptSpans = spans.filter(
              s => s.name === 'google.example.v1.Echo/Echo',
            );
            assert.strictEqual(attemptSpans.length, attempts);
            attemptSpans.forEach((attemptSpan, idx) => {
              harness.assertResendCount(idx, {span: attemptSpan});
            });
            done();
          } catch (e) {
            done(e);
          }
        });
      });
    });

    describe('client request span to low level network per-attempt span correlation', () => {
      it('emits a low level network gRPC attempt span parented to its client request span', async () => {
        const grpcClient = new GrpcClient({
          servicePath: 'echo.googleapis.com',
          port: 443,
        });
        const defaults = grpcClient.constructSettings(
          'google.example.v1.Echo',
          {
            interfaces: {
              'google.example.v1.Echo': {
                methods: {
                  Echo: {timeout_millis: 5000},
                },
              },
            },
          },
          {},
          {'x-goog-api-client': 'test'},
          true,
          telemetryInfo,
        );

        const stubFunc = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ): GRPCCallResult => {
          callback(null, {echo: 'ok'});
          return {cancel: () => {}};
        };

        const apiCall = gaxCreateApiCall(
          stubFunc as unknown as GRPCCall,
          defaults.echo,
        );
        await apiCall({message: 'hello'}, undefined);

        const spans = harness.getSpans('google-gax');
        assert.strictEqual(spans.length, 2);

        const networkSpan = spans.find(
          s => s.name === 'google.example.v1.Echo/Echo',
        )!;
        const clientRequestSpan = spans.find(
          s => s.name === 'EchoClient.Echo',
        )!;
        assert.ok(networkSpan);
        assert.ok(clientRequestSpan);

        assert.strictEqual(clientRequestSpan.kind, SpanKind.INTERNAL);
        assert.strictEqual(networkSpan.kind, SpanKind.CLIENT);
        assert.strictEqual(
          networkSpan.spanContext().traceId,
          clientRequestSpan.spanContext().traceId,
        );
        assert.strictEqual(
          networkSpan.parentSpanContext?.spanId,
          clientRequestSpan.spanContext().spanId,
        );
        assert.strictEqual(
          networkSpan.attributes['url.domain'],
          'echo.googleapis.com',
        );
        assert.strictEqual(
          networkSpan.attributes['server.address'],
          'echo.googleapis.com',
        );
        assert.strictEqual(networkSpan.attributes['server.port'], 443);
        assert.strictEqual(
          networkSpan.attributes['rpc.method'],
          'google.example.v1.Echo/Echo',
        );
        assert.strictEqual(
          clientRequestSpan.attributes['rpc.method'],
          'google.example.v1.Echo/Echo',
        );
        assert.strictEqual(
          networkSpan.attributes['http.request.method'],
          undefined,
        );
        assert.strictEqual(
          networkSpan.attributes['rpc.response.status_code'],
          'OK',
        );
        assert.strictEqual(
          networkSpan.attributes['grpc.response.status_code'],
          undefined,
        );
        assert.strictEqual(
          networkSpan.attributes['http.response.status_code'],
          undefined,
        );
      });

      it('emits a low level network HTTP/REST attempt span parented to its client request span', async () => {
        const fallbackClient = new FallbackGrpcClient({
          servicePath: 'echo.googleapis.com',
          port: 443,
        });
        const defaults = fallbackClient.constructSettings(
          'google.example.v1.Echo',
          {
            interfaces: {
              'google.example.v1.Echo': {
                methods: {
                  Echo: {timeout_millis: 5000},
                },
              },
            },
          },
          {},
          {'x-goog-api-client': 'test'},
          true,
          telemetryInfo,
        );

        const stubFunc = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ): GRPCCallResult => {
          callback(null, {echo: 'ok'});
          return {cancel: () => {}};
        };

        const apiCall = gaxCreateApiCall(
          stubFunc as unknown as GRPCCall,
          defaults.echo,
          undefined,
          'rest',
        );
        await apiCall({message: 'hello'}, undefined);

        const spans = harness.getSpans('google-gax');
        assert.strictEqual(spans.length, 2);

        const networkSpan = spans.find(s => s.name === 'POST')!;
        const clientRequestSpan = spans.find(
          s => s.name === 'EchoClient.Echo',
        )!;
        assert.ok(networkSpan);
        assert.ok(clientRequestSpan);

        assert.strictEqual(clientRequestSpan.kind, SpanKind.INTERNAL);
        assert.strictEqual(networkSpan.kind, SpanKind.CLIENT);
        assert.strictEqual(
          networkSpan.spanContext().traceId,
          clientRequestSpan.spanContext().traceId,
        );
        assert.strictEqual(
          networkSpan.parentSpanContext?.spanId,
          clientRequestSpan.spanContext().spanId,
        );
        assert.strictEqual(
          networkSpan.attributes['url.domain'],
          'echo.googleapis.com',
        );
        assert.strictEqual(
          networkSpan.attributes['server.address'],
          'echo.googleapis.com',
        );
        assert.strictEqual(networkSpan.attributes['server.port'], 443);
        assert.strictEqual(
          networkSpan.attributes['http.request.method'],
          'POST',
        );
        assert.strictEqual(networkSpan.attributes['rpc.method'], undefined);
        assert.strictEqual(
          clientRequestSpan.attributes['rpc.method'],
          'google.example.v1.Echo/Echo',
        );
        assert.strictEqual(
          networkSpan.attributes['rpc.response.status_code'],
          undefined,
        );
        assert.strictEqual(
          networkSpan.attributes['http.response.status_code'],
          200,
        );
        assert.strictEqual(
          clientRequestSpan.attributes['rpc.response.status_code'],
          undefined,
        );
        assert.strictEqual(
          clientRequestSpan.attributes['http.response.status_code'],
          200,
        );
      });

      it('populates url.template and updates low level network span name when using a real REST fallback stub', async () => {
        const authClient = new PassThroughClient();
        const fallbackClient = new FallbackGrpcClient({
          auth: new GoogleAuth({authClient}),
          servicePath: 'echo.googleapis.com',
          port: 443,
        });
        const protos = fallbackClient.loadProto(echoProtoJson);
        const echoService = protos.lookupService('Echo');
        utils.setMockFallbackResponse(
          fallbackClient,
          new Response(Buffer.from(JSON.stringify({content: 'hello'}))),
        );

        const defaults = fallbackClient.constructSettings(
          'google.showcase.v1beta1.Echo',
          {
            interfaces: {
              'google.showcase.v1beta1.Echo': {
                methods: {
                  Echo: {timeout_millis: 5000},
                },
              },
            },
          },
          {},
          {'x-goog-api-client': 'test'},
          true,
          telemetryInfo,
        );

        const stubPromise = fallbackClient
          .createStub(echoService, {
            servicePath: 'echo.googleapis.com',
            port: 443,
          })
          .then(stub => stub.echo.bind(stub) as unknown as GRPCCall);

        const apiCall = fallbackCreateApiCall(stubPromise, defaults.echo);
        await apiCall({content: 'hello'}, undefined);

        const spans = harness.getSpans('google-gax');
        assert.strictEqual(spans.length, 2);

        const networkSpan = spans.find(
          s => s.name === 'POST /v1beta1/echo:echo',
        )!;
        const clientRequestSpan = spans.find(
          s => s.name === 'EchoClient.Echo',
        )!;
        assert.ok(networkSpan);
        assert.ok(clientRequestSpan);
        assert.strictEqual(
          networkSpan.attributes['http.request.method'],
          'POST',
        );
        assert.strictEqual(
          networkSpan.attributes['url.template'],
          '/v1beta1/echo:echo',
        );
      });

      it('ties concurrent low level network attempt spans to their respective client request spans without cross-talk', async () => {
        const echoSettings = new gax.CallSettings({
          apiName: 'google.example.v1.Echo',
          enableTelemetryTracing: true,
          otherArgs: {
            internalTelemetryInfo: telemetryInfo,
            internalMethodName: 'Echo',
          },
        });

        const expandSettings = new gax.CallSettings({
          apiName: 'google.example.v1.Echo',
          enableTelemetryTracing: true,
          otherArgs: {
            internalTelemetryInfo: telemetryInfo,
            internalMethodName: 'Expand',
          },
        });

        const makeStub = (delayMs: number): GRPCCall => {
          return ((
            argument: {},
            metadata: {},
            options: {},
            callback: Function,
          ): GRPCCallResult => {
            setTimeout(() => {
              callback(null, {ok: true});
            }, delayMs);
            return {cancel: () => {}};
          }) as unknown as GRPCCall;
        };

        const echoCall = gaxCreateApiCall(makeStub(15), echoSettings);
        const expandCall = gaxCreateApiCall(makeStub(5), expandSettings);

        await Promise.all([
          echoCall({id: 1}, undefined),
          expandCall({id: 2}, undefined),
        ]);

        const spans = harness.getSpans('google-gax');
        assert.strictEqual(spans.length, 4);

        const clientRequestEcho = spans.find(
          s => s.name === 'EchoClient.Echo',
        )!;
        const clientRequestExpand = spans.find(
          s => s.name === 'EchoClient.Expand',
        )!;
        const networkEcho = spans.find(
          s => s.name === 'google.example.v1.Echo/Echo',
        )!;
        const networkExpand = spans.find(
          s => s.name === 'google.example.v1.Echo/Expand',
        )!;

        assert.ok(
          clientRequestEcho &&
            clientRequestExpand &&
            networkEcho &&
            networkExpand,
        );
        assert.notStrictEqual(
          clientRequestEcho.spanContext().spanId,
          clientRequestExpand.spanContext().spanId,
        );

        assert.strictEqual(
          networkEcho.spanContext().traceId,
          clientRequestEcho.spanContext().traceId,
        );
        assert.strictEqual(
          networkEcho.parentSpanContext?.spanId,
          clientRequestEcho.spanContext().spanId,
        );

        assert.strictEqual(
          networkExpand.spanContext().traceId,
          clientRequestExpand.spanContext().traceId,
        );
        assert.strictEqual(
          networkExpand.parentSpanContext?.spanId,
          clientRequestExpand.spanContext().spanId,
        );
      });

      it('emits one low level network attempt span per retry attempt, all parented to the single client request span', async () => {
        const retryOptions = gax.createRetryOptions(
          [status.UNAVAILABLE],
          gax.createBackoffSettings(1, 1.1, 5, 100, 1.0, 100, 1000),
        );

        const settings = new gax.CallSettings({
          apiName: 'google.example.v1.Echo',
          retry: retryOptions,
          enableTelemetryTracing: true,
          otherArgs: {
            internalTelemetryInfo: telemetryInfo,
            internalMethodName: 'Echo',
          },
        });

        let attempt = 0;
        const stubFunc = (
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ): GRPCCallResult => {
          attempt++;
          if (attempt === 1) {
            const err = new GoogleError('transient failure');
            err.code = status.UNAVAILABLE;
            callback(err);
          } else {
            callback(null, {echo: 'recovered'});
          }
          return {cancel: () => {}};
        };

        const apiCall = gaxCreateApiCall(
          stubFunc as unknown as GRPCCall,
          settings,
        );
        await apiCall({message: 'retry-me'}, undefined);

        const spans = harness.getSpans('google-gax');
        assert.strictEqual(spans.length, 3);

        const clientRequestSpan = spans.find(
          s => s.name === 'EchoClient.Echo',
        )!;
        const networkSpans = spans.filter(
          s => s.name === 'google.example.v1.Echo/Echo',
        );
        assert.ok(clientRequestSpan);
        assert.strictEqual(networkSpans.length, 2);

        // First attempt failed with UNAVAILABLE (resend_count omitted on initial attempt)
        assert.strictEqual(networkSpans[0].kind, SpanKind.CLIENT);
        assert.strictEqual(networkSpans[0].status.code, SpanStatusCode.ERROR);
        assert.strictEqual(networkSpans[0].status.message, 'transient failure');
        assert.strictEqual(
          networkSpans[0].attributes['status.message'],
          'transient failure',
        );
        assert.strictEqual(
          networkSpans[0].attributes['gcp.grpc.resend_count'],
          undefined,
        );
        assert.strictEqual(
          networkSpans[0].attributes['error.type'],
          'UNAVAILABLE',
        );
        assert.strictEqual(
          networkSpans[0].attributes['rpc.response.status_code'],
          'UNAVAILABLE',
        );
        assert.strictEqual(
          networkSpans[0].attributes['grpc.response.status_code'],
          undefined,
        );
        assert.strictEqual(networkSpans[0].events.length, 1);
        assert.strictEqual(networkSpans[0].events[0].name, 'exception');
        assert.strictEqual(
          networkSpans[0].events[0].attributes?.['exception.type'],
          'GoogleError',
        );
        assert.strictEqual(
          networkSpans[0].parentSpanContext?.spanId,
          clientRequestSpan.spanContext().spanId,
        );

        // Second attempt succeeded with OK (resend_count = 1)
        assert.strictEqual(networkSpans[1].kind, SpanKind.CLIENT);
        assert.strictEqual(networkSpans[1].status.code, SpanStatusCode.UNSET);
        assert.strictEqual(
          networkSpans[1].attributes['gcp.grpc.resend_count'],
          1,
        );
        assert.strictEqual(
          networkSpans[1].attributes['rpc.response.status_code'],
          'OK',
        );
        assert.strictEqual(
          networkSpans[1].attributes['grpc.response.status_code'],
          undefined,
        );
        assert.strictEqual(
          networkSpans[1].parentSpanContext?.spanId,
          clientRequestSpan.spanContext().spanId,
        );

        // Overall client request span succeeded (resend_count omitted on T3 span)
        assert.strictEqual(clientRequestSpan.kind, SpanKind.INTERNAL);
        assert.strictEqual(clientRequestSpan.status.code, SpanStatusCode.UNSET);
        assert.strictEqual(
          clientRequestSpan.attributes['gcp.grpc.resend_count'],
          undefined,
        );
        assert.strictEqual(
          clientRequestSpan.attributes['rpc.response.status_code'],
          'OK',
        );
        assert.strictEqual(
          clientRequestSpan.attributes['grpc.response.status_code'],
          undefined,
        );
      });
    });
  });
});

describe('Promise', () => {
  it('calls api call', done => {
    let deadlineArg: string;
    function func(
      argument: {},
      metadata: {},
      options: {deadline: string},
      callback: Function,
    ) {
      deadlineArg = options.deadline;
      callback(null, 42);
    }
    const apiCall = createApiCall(func);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (apiCall as any)(null)
      .then((response: number[]) => {
        assert.ok(Array.isArray(response));
        assert.strictEqual(response[0], 42);
        assert.ok(deadlineArg);
        return done();
      })
      .catch(done);
  });

  it('emits error on rejected promise', async () => {
    const reason = 'reject reason';
    function func() {
      return Promise.reject(reason);
    }
    const apiCall = createApiCall(func);
    await assert.rejects(apiCall({}, undefined), new Error(reason));
  });

  it('emits error on failure', async () => {
    const apiCall = createApiCall(fail);
    await assert.rejects(apiCall({}, undefined));
  });

  it('has cancel method', done => {
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      setTimeout(() => {
        callback(null, 42);
      }, 0);
    }
    const apiCall = createApiCall(func, {cancel: done});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const promise = (apiCall as any)(null);
    promise
      .then(() => {
        return done(new Error('should not reach'));
      })
      .catch((err: {code: number}) => {
        assert(err instanceof GoogleError);
        assert.strictEqual(err.code, status.CANCELLED);
        done();
      });
    promise.cancel();
  });

  it('cancels retrying call', done => {
    const retryOptions = utils.createRetryOptions(0, 0, 0, 0, 0, 0, 100);

    let callCount = 0;
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      callCount++;
      let err: GoogleError;
      let response: number;
      if (callCount <= 3) {
        err = new GoogleError();
        err.code = FAKE_STATUS_CODE_1;
      } else {
        response = 42;
      }
      const timeoutId = setTimeout(() => {
        callback(err, response);
      }, 10);
      return function cancelFunc() {
        clearTimeout(timeoutId);
        callback(new Error('canceled'));
      };
    }
    const apiCall = createApiCall(func, {
      settings: {retry: retryOptions},
      returnCancelFunc: true,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const promise = (apiCall as any)(null);
    promise
      .then(() => {
        return done(new Error('should not reach'));
      })
      .catch(() => {
        assert(callCount < 4);
        done();
      })
      .catch(done);
    setTimeout(() => {
      promise.cancel();
    }, 15);
  });

  it('does not return promise when callback is supplied', done => {
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      callback(null, 42);
    }
    const apiCall = createApiCall(func);
    assert.strictEqual(
      apiCall({}, undefined, (err, response) => {
        assert.strictEqual(err, null);
        assert.strictEqual(response, 42);
        done();
      }),
      undefined,
    );
  });
});

describe('retryable', () => {
  const retryOptions = utils.createRetryOptions(0, 0, 0, 0, 0, 0, 100);
  const settings = {
    settings: {timeout: 0, retry: retryOptions, apiName: 'TestApi'},
  };

  it('retries the API call', done => {
    let toAttempt = 3;
    let deadlineArg: string;
    function func(
      argument: {},
      metadata: {},
      options: {deadline: string},
      callback: Function,
    ) {
      deadlineArg = options.deadline;
      toAttempt--;
      if (toAttempt > 0) {
        fail(argument, metadata, options, callback);
        return;
      }
      callback(null, 1729);
    }
    const apiCall = createApiCall(func, settings);
    void apiCall({}, undefined, (err, resp) => {
      try {
        assert.strictEqual(err, null);
        assert.strictEqual(resp, 1729);
        assert.strictEqual(toAttempt, 0);
        assert(deadlineArg);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('retries the API call with promise', done => {
    let toAttempt = 3;
    let deadlineArg: string;
    function func(
      argument: {},
      metadata: {},
      options: {deadline: string},
      callback: Function,
    ) {
      deadlineArg = options.deadline;
      toAttempt--;
      if (toAttempt > 0) {
        fail(argument, metadata, options, callback);
        return;
      }
      callback(null, 1729);
    }
    const apiCall = createApiCall(func, settings);
    apiCall({}, undefined)
      .then(resp => {
        assert.ok(Array.isArray(resp));
        assert.strictEqual(resp[0], 1729);
        assert.strictEqual(toAttempt, 0);
        assert.ok(deadlineArg);
        return done();
      })
      .catch(done);
  });

  it('cancels in the middle of retries', done => {
    let callCount = 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      callCount++;
      if (callCount <= 2) {
        fail(argument, metadata, options, callback);
        return;
      }
      setTimeout(() => {
        promise.cancel();
      }, 0);
      setTimeout(() => {
        callback(null, null, 1729);
      }, 10);
    }
    const apiCall = createApiCall(func, settings);
    const promise = apiCall({}, undefined);
    promise
      .then(() => {
        return done(new Error('should not reach'));
      })
      .catch((err: Error) => {
        assert(err instanceof Error);
        done();
      });
  });

  it("doesn't retry if no codes", done => {
    const retryOptions = gax.createRetryOptions(
      [],
      gax.createBackoffSettings(1, 2, 3, 4, 5, 6, 7),
    );
    const settings = {settings: {timeout: 0, retry: retryOptions}};
    const spy = sinon.spy(fail);
    const apiCall = createApiCall(spy, settings);
    void apiCall({}, undefined, err => {
      try {
        assert.ok(err instanceof Error);
        assert.strictEqual(err!.code, FAKE_STATUS_CODE_1);
        assert.strictEqual(err!.note, undefined);
        assert.strictEqual(spy.callCount, 1);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('aborts retries', done => {
    const apiCall = createApiCall(fail, settings);
    void apiCall({}, undefined, err => {
      try {
        assert(err instanceof GoogleError);
        assert.strictEqual(err!.code, status.DEADLINE_EXCEEDED);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it.skip('times out', done => {
    const toAttempt = 3;
    const spy = sinon.spy(fail);
    const apiCall = createApiCall(spy, settings);
    void apiCall({}, undefined, err => {
      assert(err instanceof Error);
      assert.strictEqual(err!.code, FAKE_STATUS_CODE_1);
      assert(err!.note);
      assert.strictEqual(spy.callCount, toAttempt);
      done();
    });
  });

  it('errors on maxRetries and surfaces original error', done => {
    const toAttempt = 5;
    const backoff = gax.createMaxRetriesBackoffSettings(
      0,
      0,
      0,
      0,
      0,
      0,
      toAttempt,
    );
    const maxRetriesRetryOptions = utils.createRetryOptions(backoff);

    const maxRetrySettings = {
      settings: {timeout: 0, retry: maxRetriesRetryOptions},
    };
    const spy = sinon.spy(fail);
    const apiCall = createApiCall(spy, maxRetrySettings);
    void apiCall({}, undefined, err => {
      try {
        assert.ok(err instanceof GoogleError);
        assert.strictEqual(err!.code, status.DEADLINE_EXCEEDED);
        assert.strictEqual(spy.callCount, toAttempt);
        assert.match(
          err.message,
          /Exceeded maximum number of retries retrying error Error before any response was received/,
        );
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('retry fails for exceeding total timeout, surfacing original error', done => {
    const spy = sinon.spy(fail);
    const apiCall = createApiCall(spy, settings);
    void apiCall({}, undefined, err => {
      try {
        assert.ok(err instanceof GoogleError);
        assert.match(
          err.message,
          /Total timeout of API TestApi exceeded 100 milliseconds retrying error Error {2}before any response was received/,
        );
        assert.strictEqual(err!.code, status.DEADLINE_EXCEEDED);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('retry fails for exceeding total timeout, surfacing original error and previous errors', done => {
    const spy = sinon.spy(fail);
    const apiCall = createApiCall(spy, settings);
    void apiCall({}, undefined, err => {
      try {
        assert.ok(err instanceof GoogleError);
        assert.match(err.message, /Previous errors/);
        assert.strictEqual(err!.code, status.DEADLINE_EXCEEDED);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  // maxRetries is unsupported, and intended for internal use only or
  // use with retry-request backwards compatibility
  it('errors when totalTimeoutMillis and maxRetries set', done => {
    const maxRetries = 5;
    const backoff = gax.createMaxRetriesBackoffSettings(
      0,
      0,
      0,
      0,
      0,
      0,
      maxRetries,
    );
    const maxRetriesRetryOptions = utils.createRetryOptions(backoff);
    maxRetriesRetryOptions.backoffSettings.totalTimeoutMillis = 100;
    const maxRetrySettings = {
      settings: {timeout: 0, retry: maxRetriesRetryOptions},
    };
    const spy = sinon.spy(fail);
    const apiCall = createApiCall(spy, maxRetrySettings);
    void apiCall({}, undefined, err => {
      try {
        assert(err instanceof GoogleError);
        assert.strictEqual(err!.code, status.INVALID_ARGUMENT);
        assert.strictEqual(spy.callCount, 0);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('aborts on unexpected exception', done => {
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      const error = new GoogleError();
      error.code = FAKE_STATUS_CODE_2;
      callback(error);
    }
    const spy = sinon.spy(func);
    const apiCall = createApiCall(spy, settings);
    void apiCall({}, undefined, err => {
      try {
        assert(err instanceof Error);
        assert.strictEqual(err!.code, FAKE_STATUS_CODE_2);
        assert(err!.note);
        assert.strictEqual(spy.callCount, 1);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('does not retry even when no responses', done => {
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      callback(null, null);
    }
    const apiCall = createApiCall(func, settings);
    void apiCall({}, undefined, (err, resp) => {
      try {
        assert.strictEqual(err, null);
        assert.strictEqual(resp, null);
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it.skip('retries with exponential backoff', done => {
    const startTime = new Date();
    const spy = sinon.spy(fail);

    const backoff = gax.createBackoffSettings(3, 2, 24, 5, 2, 80, 2500);
    const retryOptions = new gax.RetryOptions([FAKE_STATUS_CODE_1], backoff);
    const apiCall = createApiCall(spy, {
      settings: {timeout: 0, retry: retryOptions},
    });

    void apiCall({}, undefined, err => {
      assert(err instanceof Error);
      assert.strictEqual(err!.code, FAKE_STATUS_CODE_1);
      assert(err!.note);
      const now = new Date();
      assert(
        now.getTime() - startTime.getTime() >= backoff.totalTimeoutMillis!,
      );
      const callsLowerBound =
        backoff.totalTimeoutMillis! /
        (backoff.maxRetryDelayMillis + backoff.maxRpcTimeoutMillis!);
      const callsUpperBound =
        backoff.totalTimeoutMillis! / backoff.initialRetryDelayMillis;
      assert(spy.callCount > callsLowerBound);
      assert(spy.callCount < callsUpperBound);
      done();
    }).catch(done);
  });

  it.skip('reports A/B testing', () => {
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      callback(null, argument);
    }
    const mockBuilder = sinon.mock();
    const settings = {
      settings: {
        timeout: 0,
        retry: retryOptions,
        otherArgs: {metadataBuilder: mockBuilder},
      },
    };
    const apiCall = createApiCall(func, settings);
    mockBuilder.withExactArgs({retry: '2'});
    return apiCall({}, undefined)
      .then(() => {
        mockBuilder.verify();
        mockBuilder.reset();
        const backoff = gax.createMaxRetriesBackoffSettings(
          0,
          0,
          0,
          0,
          0,
          0,
          5,
        );
        mockBuilder.withExactArgs({retry: '1'});
        return apiCall({}, {retry: utils.createRetryOptions(backoff)});
      })
      .then(() => {
        mockBuilder.verify();
        mockBuilder.reset();
        mockBuilder.withExactArgs({retry: '2'});
        const options = {
          retry: utils.createRetryOptions(0, 0, 0, 0, 0, 0, 200),
        };
        return apiCall({}, options);
      })
      .then(() => {
        mockBuilder.verify();
        return;
      });
  });

  it('forwards metadata to builder', done => {
    function func(argument: {}, metadata: {}, options: {}, callback: Function) {
      callback(null, {});
    }

    let gotHeaders: {h1?: string; h2?: string};
    const mockBuilder = (abTest: {}, headers: {}) => {
      gotHeaders = headers;
    };
    const settings = {
      settings: {
        otherArgs: {metadataBuilder: mockBuilder},
      },
    };
    const apiCall = createApiCall(func, settings);
    const headers = {
      h1: 'val1',
      h2: 'val2',
    };
    void apiCall({}, {otherArgs: {headers}}).then(() => {
      try {
        assert.strictEqual(gotHeaders.h1, 'val1');
        assert.strictEqual(gotHeaders.h2, 'val2');
        return done();
      } catch (err) {
        return done(err);
      }
    });
  });
});
