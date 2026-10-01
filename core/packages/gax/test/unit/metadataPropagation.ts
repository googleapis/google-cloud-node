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
  propagation,
  trace,
  ROOT_CONTEXT,
  TextMapPropagator,
} from '@opentelemetry/api';
import {status} from '@grpc/grpc-js';
import {createApiCall} from '../../src/createApiCall';
import * as gax from '../../src/gax';
import {GoogleError} from '../../src/googleError';
import {GrpcClient, Metadata} from '../../src/grpc';
import {
  traceCall,
  DynamicTraceContext,
  StaticTraceContext,
} from '../../src/observability/TracerHelper';
import {OtelHarness} from './otelHarness';
import {GRPCCall, GRPCCallResult} from '../../src/apitypes';

describe('metadata propagation via TracerHelper and createApiCall', () => {
  let harness: OtelHarness;

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

  it('injects active span context into injectedHeaders in traceCall', async () => {
    const dynamicArgs: DynamicTraceContext = {
      clientName: 'EchoClient',
      methodName: 'Echo',
      rpcType: 'grpc',
    };

    let capturedHeaders: Record<string, string> | undefined;
    await traceCall(
      dynamicArgs,
      telemetryInfo,
      async (_tracedCallback, _recordResend, injectedHeaders) => {
        capturedHeaders = injectedHeaders;
        return [{echo: 'ok'}, undefined, undefined];
      },
    );

    const span = harness.requireSingleSpan('google-gax');
    const spanCtx = span.spanContext();
    assert.ok(capturedHeaders);
    assert.strictEqual(
      capturedHeaders!['traceparent'],
      `00-${spanCtx.traceId}-${spanCtx.spanId}-0${spanCtx.traceFlags}`,
    );
  });

  it('does not mutate baseMetadata or user headers across multiple gRPC calls', async () => {
    const grpcClient = new GrpcClient();
    const builder = grpcClient.metadataBuilder({'x-goog-api-client': 'test'});

    const baseMetadata = builder() as unknown as Metadata;
    assert.strictEqual(
      (baseMetadata.get('traceparent') as unknown[]).length,
      0,
    );

    const settings = new gax.CallSettings({
      apiName: 'google.example.v1.Echo',
      enableTelemetryTracing: true,
      otherArgs: {
        metadataBuilder: builder,
        internalTelemetryInfo: telemetryInfo,
        internalMethodName: 'Echo',
      },
    });

    const receivedMetadata: Metadata[] = [];
    const stubFunc = (
      arg: {},
      meta: {},
      opt: {},
      cb: Function,
    ): GRPCCallResult => {
      receivedMetadata.push(meta as Metadata);
      cb(null, {});
      return {cancel: () => {}};
    };

    const apiCall = createApiCall(stubFunc as unknown as GRPCCall, settings);
    const userHeaders = {'x-goog-request-params': 'parent=projects/test'};

    await apiCall({}, {otherArgs: {headers: userHeaders}});
    await apiCall({}, {otherArgs: {headers: userHeaders}});

    const spans = harness.getSpans('google-gax');
    assert.strictEqual(spans.length, 2);
    assert.strictEqual(receivedMetadata.length, 2);

    const spanCtx1 = spans[0].spanContext();
    const traceparent1 = receivedMetadata[0].get('traceparent') as unknown[];
    assert.strictEqual(
      traceparent1[0],
      `00-${spanCtx1.traceId}-${spanCtx1.spanId}-0${spanCtx1.traceFlags}`,
    );

    const spanCtx2 = spans[1].spanContext();
    const traceparent2 = receivedMetadata[1].get('traceparent') as unknown[];
    assert.strictEqual(
      traceparent2[0],
      `00-${spanCtx2.traceId}-${spanCtx2.spanId}-0${spanCtx2.traceFlags}`,
    );

    // Crucial: neither baseMetadata nor userHeaders was mutated
    assert.strictEqual(
      (baseMetadata.get('traceparent') as unknown[]).length,
      0,
    );
    assert.strictEqual(
      (userHeaders as Record<string, unknown>)['traceparent'],
      undefined,
    );
  });

  it('does not inject into gRPC or HTTP metadata when telemetry is disabled', async () => {
    delete process.env.GOOGLE_SDK_NODE_ENABLE_TRACING;

    const grpcClient = new GrpcClient();
    const grpcBuilder = grpcClient.metadataBuilder({
      'x-goog-api-client': 'test',
    });

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
      return {cancel: () => {}};
    };

    const httpStub = (
      arg: {},
      meta: {},
      opt: {},
      cb: Function,
    ): GRPCCallResult => {
      receivedHttpMetadata = meta as Record<string, unknown>;
      cb(null, {});
      return {cancel: () => {}};
    };

    const grpcCall = createApiCall(
      grpcStub as unknown as GRPCCall,
      new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: false,
        otherArgs: {
          metadataBuilder: grpcBuilder,
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      }),
    );

    const httpCall = createApiCall(
      httpStub as unknown as GRPCCall,
      new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: false,
        otherArgs: {
          metadataBuilder: (_abTests?: {}, moreHeaders?: {}) => ({
            'x-goog-api-client': ['grpc-web/1.0'],
            ...moreHeaders,
          }),
          internalTelemetryInfo: telemetryInfo,
          internalMethodName: 'Echo',
        },
      }),
      undefined,
      'rest',
    );

    await grpcCall({}, undefined);
    await httpCall({}, undefined);

    assert.ok(receivedGrpcMetadata);
    assert.strictEqual(
      (receivedGrpcMetadata!.get('traceparent') as unknown[]).length,
      0,
    );
    assert.ok(receivedHttpMetadata);
    assert.strictEqual(receivedHttpMetadata!['traceparent'], undefined);
  });

  describe('T3 client request trace to low-level unary trace correlation', () => {
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
          metadataBuilder: (_abTests?: {}, moreHeaders?: {}) => ({
            'x-goog-api-client': ['grpc-web/1.0'],
            ...moreHeaders,
          }),
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
