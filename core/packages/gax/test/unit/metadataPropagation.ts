/**
 * Copyright 2026 Google LLC
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

import * as assert from 'assert';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {
  context,
  propagation,
  trace,
  ROOT_CONTEXT,
  TextMapPropagator,
} from '@opentelemetry/api';
import {status} from '@grpc/grpc-js';
import {addTimeoutArg} from '../../src/normalCalls/timeout';
import {createApiCall} from '../../src/createApiCall';
import * as gax from '../../src/gax';
import {GoogleError} from '../../src/googleError';
import {GrpcClient, Metadata} from '../../src/grpc';
import {StaticTraceContext} from '../../src/observability/TracerHelper';
import {OtelHarness} from './otelHarness';
import {GRPCCall, GRPCCallOtherArgs, GRPCCallResult} from '../../src/apitypes';

describe('metadata propagation (gRPC and HTTP)', () => {
  let harness: OtelHarness;

  // Custom propagator to simulate W3C traceparent injection and extraction
  const testPropagator: TextMapPropagator = {
    inject(ctx, carrier, setter) {
      const spanContext = trace.getSpanContext(ctx);
      if (spanContext && trace.isSpanContextValid(spanContext)) {
        setter.set(
          carrier,
          'traceparent',
          `00-${spanContext.traceId}-${spanContext.spanId}-0${spanContext.traceFlags}`,
        );
      }
    },
    extract(ctx, carrier, getter) {
      const raw = getter.get(carrier, 'traceparent');
      const value = Array.isArray(raw) ? raw[0] : raw;
      if (typeof value === 'string') {
        const parts = value.split('-');
        if (parts.length === 4) {
          return trace.setSpanContext(ctx, {
            traceId: parts[1],
            spanId: parts[2],
            traceFlags: parseInt(parts[3], 16),
            isRemote: true,
          });
        }
      }
      return ctx;
    },
    fields() {
      return ['traceparent'];
    },
  };

  beforeEach(() => {
    process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';
    harness = new OtelHarness();
    harness.setup();
    propagation.setGlobalPropagator(testPropagator);
  });

  afterEach(() => {
    delete process.env.GOOGLE_SDK_NODE_ENABLE_TRACING;
    propagation.disable();
    harness.teardown();
  });

  it('injects active span context into gRPC metadata', done => {
    const grpcClient = new GrpcClient();
    const builder = grpcClient.metadataBuilder({'x-goog-api-client': 'test'});

    const tracer = trace.getTracer('test-tracer');
    const span = tracer.startSpan('test-rpc');

    let receivedMetadata: Metadata | null = null;
    const stubFunc = (
      argument: {},
      metadata: {},
      options: {},
      callback: Function,
    ): GRPCCallResult => {
      receivedMetadata = metadata as Metadata;
      callback(null, {success: true});
      return {} as GRPCCallResult;
    };

    const otherArgs: GRPCCallOtherArgs = {
      metadataBuilder: builder,
    };

    const callHandler = addTimeoutArg(
      stubFunc as unknown as GRPCCall,
      1000,
      otherArgs,
    );

    context.with(trace.setSpan(context.active(), span), () => {
      callHandler({}, (err: unknown) => {
        span.end();
        assert.ifError(err);
        assert.ok(receivedMetadata);
        const traceparent = (receivedMetadata as Metadata).get(
          'traceparent',
        ) as unknown[];
        assert.ok(traceparent && traceparent.length > 0);
        const spanContext = span.spanContext();
        assert.strictEqual(
          traceparent[0],
          `00-${spanContext.traceId}-${spanContext.spanId}-0${spanContext.traceFlags}`,
        );
        done();
      });
    });
  });

  it('does not mutate baseMetadata across multiple gRPC calls', done => {
    const grpcClient = new GrpcClient();
    const builder = grpcClient.metadataBuilder({'x-goog-api-client': 'test'});

    // Capture the baseMetadata returned initially
    const baseMetadata = builder() as unknown as Metadata;
    assert.strictEqual(
      (baseMetadata.get('traceparent') as unknown[]).length,
      0,
    );

    const tracer = trace.getTracer('test-tracer');
    const span1 = tracer.startSpan('rpc-1');
    const span2 = tracer.startSpan('rpc-2');

    let metadataCall1: Metadata | null = null;
    let metadataCall2: Metadata | null = null;

    const stubFunc1 = (
      arg: {},
      meta: {},
      opt: {},
      cb: Function,
    ): GRPCCallResult => {
      metadataCall1 = meta as Metadata;
      cb(null, {});
      return {} as GRPCCallResult;
    };

    const stubFunc2 = (
      arg: {},
      meta: {},
      opt: {},
      cb: Function,
    ): GRPCCallResult => {
      metadataCall2 = meta as Metadata;
      cb(null, {});
      return {} as GRPCCallResult;
    };

    const otherArgs: GRPCCallOtherArgs = {
      metadataBuilder: builder,
    };

    const handler1 = addTimeoutArg(
      stubFunc1 as unknown as GRPCCall,
      1000,
      otherArgs,
    );
    const handler2 = addTimeoutArg(
      stubFunc2 as unknown as GRPCCall,
      1000,
      otherArgs,
    );

    context.with(trace.setSpan(context.active(), span1), () => {
      handler1({}, () => {
        span1.end();

        context.with(trace.setSpan(context.active(), span2), () => {
          handler2({}, () => {
            span2.end();

            // Check metadata from Call 1
            const spanCtx1 = span1.spanContext();
            const traceparent1 = metadataCall1!.get(
              'traceparent',
            ) as unknown[];
            assert.strictEqual(
              traceparent1[0],
              `00-${spanCtx1.traceId}-${spanCtx1.spanId}-0${spanCtx1.traceFlags}`,
            );

            // Check metadata from Call 2
            const spanCtx2 = span2.spanContext();
            const traceparent2 = metadataCall2!.get(
              'traceparent',
            ) as unknown[];
            assert.strictEqual(
              traceparent2[0],
              `00-${spanCtx2.traceId}-${spanCtx2.spanId}-0${spanCtx2.traceFlags}`,
            );

            // Crucial: baseMetadata must NOT contain traceparent!
            assert.strictEqual(
              (baseMetadata.get('traceparent') as unknown[]).length,
              0,
            );
            done();
          });
        });
      });
    });
  });

  it('injects active span context into HTTP/REST plain object metadata', done => {
    const tracer = trace.getTracer('test-tracer');
    const span = tracer.startSpan('http-rpc');

    let receivedMetadata: Record<string, unknown> | null = null;
    const stubFunc = (
      argument: {},
      metadata: {},
      options: {},
      callback: Function,
    ): GRPCCallResult => {
      receivedMetadata = metadata as Record<string, unknown>;
      callback(null, {});
      return {} as GRPCCallResult;
    };

    const otherArgs: GRPCCallOtherArgs = {
      metadataBuilder: () => ({'x-goog-api-client': ['grpc-web/1.0']}),
    };

    const handler = addTimeoutArg(
      stubFunc as unknown as GRPCCall,
      1000,
      otherArgs,
    );

    context.with(trace.setSpan(context.active(), span), () => {
      handler({}, (err: unknown) => {
        span.end();
        assert.ifError(err);
        assert.ok(receivedMetadata);
        const spanContext = span.spanContext();
        assert.strictEqual(
          receivedMetadata!['traceparent'],
          `00-${spanContext.traceId}-${spanContext.spanId}-0${spanContext.traceFlags}`,
        );
        assert.deepStrictEqual(receivedMetadata!['x-goog-api-client'], [
          'grpc-web/1.0',
        ]);
        done();
      });
    });
  });

  it('does not inject into gRPC or HTTP metadata when telemetry is disabled', done => {
    delete process.env.GOOGLE_SDK_NODE_ENABLE_TRACING;

    const grpcClient = new GrpcClient();
    const grpcBuilder = grpcClient.metadataBuilder({
      'x-goog-api-client': 'test',
    });

    const tracer = trace.getTracer('test-tracer');
    const span = tracer.startSpan('disabled-rpc');

    let receivedGrpcMetadata: Metadata | null = null;
    let receivedHttpMetadata: Record<string, unknown> | null = null;

    const grpcStub = (
      arg: {},
      meta: {},
      opt: {},
      cb: Function,
    ): GRPCCallResult => {
      receivedGrpcMetadata = meta as Metadata;
      cb(null, {});
      return {} as GRPCCallResult;
    };

    const httpStub = (
      arg: {},
      meta: {},
      opt: {},
      cb: Function,
    ): GRPCCallResult => {
      receivedHttpMetadata = meta as Record<string, unknown>;
      cb(null, {});
      return {} as GRPCCallResult;
    };

    const grpcHandler = addTimeoutArg(grpcStub as unknown as GRPCCall, 1000, {
      metadataBuilder: grpcBuilder,
    });
    const httpHandler = addTimeoutArg(httpStub as unknown as GRPCCall, 1000, {
      metadataBuilder: () => ({'x-goog-api-client': ['grpc-web/1.0']}),
    });

    context.with(trace.setSpan(context.active(), span), () => {
      grpcHandler({}, (err1: unknown) => {
        assert.ifError(err1);
        httpHandler({}, (err2: unknown) => {
          span.end();
          assert.ifError(err2);
          assert.ok(receivedGrpcMetadata);
          assert.strictEqual(
            (receivedGrpcMetadata!.get('traceparent') as unknown[]).length,
            0,
          );
          assert.ok(receivedHttpMetadata);
          assert.strictEqual(receivedHttpMetadata!['traceparent'], undefined);
          done();
        });
      });
    });
  });

  it('handles null or missing metadata gracefully', done => {
    let called = false;
    const stubFunc = (
      argument: {},
      metadata: {},
      options: {},
      callback: Function,
    ): GRPCCallResult => {
      called = true;
      assert.strictEqual(metadata, null);
      callback(null, {});
      return {} as GRPCCallResult;
    };

    const otherArgs: GRPCCallOtherArgs = {
      metadataBuilder: (() => null) as unknown as GRPCCallOtherArgs['metadataBuilder'],
    };

    const handler = addTimeoutArg(
      stubFunc as unknown as GRPCCall,
      1000,
      otherArgs,
    );
    handler({}, () => {
      assert.ok(called);
      done();
    });
  });

  describe('T3 client request trace to low-level unary trace correlation', () => {
    const telemetryInfo: StaticTraceContext = {
      gcpClientService: 'echo.googleapis.com',
      gcpVersion: '1.2.3',
      gcpRepo: 'googleapis/google-cloud-node',
      gcpArtifact: '@google-cloud/echo',
    };

    const grpcMetadataGetter = {
      get(carrier: Metadata, key: string) {
        return carrier.get(key) as string[];
      },
      keys() {
        return ['traceparent'];
      },
    };

    it('ties a low-level gRPC unary trace to its parent T3 client request trace', async () => {
      const grpcClient = new GrpcClient();
      const builder = grpcClient.metadataBuilder({'x-goog-api-client': 'test'});

      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          metadataBuilder: builder,
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      let extractedTraceparent: string | undefined;
      const stubFunc = (
        argument: {},
        metadata: {},
        options: {},
        callback: Function,
      ): GRPCCallResult => {
        const grpcMeta = metadata as Metadata;
        const tp = grpcMeta.get('traceparent') as string[];
        extractedTraceparent = tp?.[0];

        // Simulate low-level unary gRPC span started using the propagated context
        const parentCtx = propagation.extract(
          ROOT_CONTEXT,
          grpcMeta,
          grpcMetadataGetter,
        );
        const unaryTracer = trace.getTracer('grpc-unary-transport');
        const unarySpan = unaryTracer.startSpan(
          'grpc.google.example.v1.Echo/Echo',
          undefined,
          parentCtx,
        );
        unarySpan.end();

        callback(null, {echo: 'ok'});
        return {cancel: () => {}};
      };

      const apiCall = createApiCall(stubFunc as unknown as GRPCCall, settings);
      await apiCall({message: 'hello'}, undefined);

      const t3Span = harness.requireSingleSpan('google-gax');
      const unarySpan = harness.requireSingleSpan('grpc-unary-transport');

      assert.strictEqual(t3Span.name, 'EchoClient.Echo');
      assert.strictEqual(
        extractedTraceparent,
        `00-${t3Span.spanContext().traceId}-${t3Span.spanContext().spanId}-0${t3Span.spanContext().traceFlags}`,
      );
      assert.strictEqual(
        unarySpan.spanContext().traceId,
        t3Span.spanContext().traceId,
      );
      assert.strictEqual(
        unarySpan.parentSpanContext?.spanId,
        t3Span.spanContext().spanId,
      );
    });

    it('ties a low-level HTTP/REST unary trace to its parent T3 client request trace', async () => {
      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          metadataBuilder: () => ({'x-goog-api-client': ['grpc-web/1.0']}),
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      let extractedTraceparent: string | undefined;
      const stubFunc = (
        argument: {},
        metadata: {},
        options: {},
        callback: Function,
      ): GRPCCallResult => {
        const httpMeta = metadata as Record<string, string>;
        extractedTraceparent = httpMeta['traceparent'];

        // Simulate low-level unary HTTP span started using the propagated headers
        const parentCtx = propagation.extract(ROOT_CONTEXT, httpMeta);
        const unaryTracer = trace.getTracer('http-unary-transport');
        const unarySpan = unaryTracer.startSpan(
          'HTTP POST /v1/echo',
          undefined,
          parentCtx,
        );
        unarySpan.end();

        callback(null, {echo: 'ok'});
        return {cancel: () => {}};
      };

      const apiCall = createApiCall(
        stubFunc as unknown as GRPCCall,
        settings,
        undefined,
        'rest',
      );
      await apiCall({message: 'hello'}, undefined);

      const t3Span = harness.requireSingleSpan('google-gax');
      const unarySpan = harness.requireSingleSpan('http-unary-transport');

      assert.strictEqual(t3Span.name, 'EchoClient.Echo');
      assert.strictEqual(
        extractedTraceparent,
        `00-${t3Span.spanContext().traceId}-${t3Span.spanContext().spanId}-0${t3Span.spanContext().traceFlags}`,
      );
      assert.strictEqual(
        unarySpan.spanContext().traceId,
        t3Span.spanContext().traceId,
      );
      assert.strictEqual(
        unarySpan.parentSpanContext?.spanId,
        t3Span.spanContext().spanId,
      );
    });

    it('ties concurrent low-level unary traces to their respective T3 client request traces without cross-talk', async () => {
      const grpcClient = new GrpcClient();
      const builder = grpcClient.metadataBuilder({'x-goog-api-client': 'test'});

      const echoSettings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          metadataBuilder: builder,
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      });

      const expandSettings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
        otherArgs: {
          metadataBuilder: builder,
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Expand',
        },
      });

      const makeStub = (unarySpanName: string, delayMs: number): GRPCCall => {
        return ((
          argument: {},
          metadata: {},
          options: {},
          callback: Function,
        ): GRPCCallResult => {
          const grpcMeta = metadata as Metadata;
          const parentCtx = propagation.extract(
            ROOT_CONTEXT,
            grpcMeta,
            grpcMetadataGetter,
          );
          const unaryTracer = trace.getTracer('grpc-unary-transport');
          const unarySpan = unaryTracer.startSpan(
            unarySpanName,
            undefined,
            parentCtx,
          );
          setTimeout(() => {
            unarySpan.end();
            callback(null, {ok: true});
          }, delayMs);
          return {cancel: () => {}};
        }) as unknown as GRPCCall;
      };

      const echoCall = createApiCall(makeStub('unary.Echo', 15), echoSettings);
      const expandCall = createApiCall(
        makeStub('unary.Expand', 5),
        expandSettings,
      );

      await Promise.all([
        echoCall({id: 1}, undefined),
        expandCall({id: 2}, undefined),
      ]);

      const t3Spans = harness.getSpans('google-gax');
      const unarySpans = harness.getSpans('grpc-unary-transport');
      assert.strictEqual(t3Spans.length, 2);
      assert.strictEqual(unarySpans.length, 2);

      const t3Echo = t3Spans.find(s => s.name === 'EchoClient.Echo')!;
      const t3Expand = t3Spans.find(s => s.name === 'EchoClient.Expand')!;
      const unaryEcho = unarySpans.find(s => s.name === 'unary.Echo')!;
      const unaryExpand = unarySpans.find(s => s.name === 'unary.Expand')!;

      assert.ok(t3Echo && t3Expand && unaryEcho && unaryExpand);
      assert.notStrictEqual(
        t3Echo.spanContext().spanId,
        t3Expand.spanContext().spanId,
      );

      // unary.Echo must be tied to EchoClient.Echo
      assert.strictEqual(
        unaryEcho.spanContext().traceId,
        t3Echo.spanContext().traceId,
      );
      assert.strictEqual(
        unaryEcho.parentSpanContext?.spanId,
        t3Echo.spanContext().spanId,
      );

      // unary.Expand must be tied to EchoClient.Expand
      assert.strictEqual(
        unaryExpand.spanContext().traceId,
        t3Expand.spanContext().traceId,
      );
      assert.strictEqual(
        unaryExpand.parentSpanContext?.spanId,
        t3Expand.spanContext().spanId,
      );
    });

    it('ties all retried low-level unary attempt traces to the single parent T3 client request trace', async () => {
      const grpcClient = new GrpcClient();
      const builder = grpcClient.metadataBuilder({'x-goog-api-client': 'test'});

      const retryOptions = gax.createRetryOptions(
        [status.UNAVAILABLE],
        gax.createBackoffSettings(1, 1.1, 5, 100, 1.0, 100, 1000),
      );

      const settings = new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        retry: retryOptions,
        enableTelemetryTracing: true,
        otherArgs: {
          metadataBuilder: builder,
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
        const grpcMeta = metadata as Metadata;
        const parentCtx = propagation.extract(
          ROOT_CONTEXT,
          grpcMeta,
          grpcMetadataGetter,
        );
        const unaryTracer = trace.getTracer('grpc-unary-transport');
        const unarySpan = unaryTracer.startSpan(
          `unary.Echo.attempt.${attempt}`,
          undefined,
          parentCtx,
        );
        unarySpan.end();

        if (attempt === 1) {
          const err = new GoogleError('transient failure');
          err.code = status.UNAVAILABLE;
          callback(err);
        } else {
          callback(null, {echo: 'recovered'});
        }
        return {cancel: () => {}};
      };

      const apiCall = createApiCall(stubFunc as unknown as GRPCCall, settings);
      await apiCall({message: 'retry-me'}, undefined);

      const t3Span = harness.requireSingleSpan('google-gax');
      const unarySpans = harness.getSpans('grpc-unary-transport');
      assert.strictEqual(unarySpans.length, 2);

      for (const unarySpan of unarySpans) {
        assert.strictEqual(
          unarySpan.spanContext().traceId,
          t3Span.spanContext().traceId,
        );
        assert.strictEqual(
          unarySpan.parentSpanContext?.spanId,
          t3Span.spanContext().spanId,
        );
      }
    });
  });
});
