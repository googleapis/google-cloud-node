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
import {SpanKind, SpanStatusCode} from '@opentelemetry/api';
import {status} from '@grpc/grpc-js';
import {createApiCall} from '../../src/createApiCall';
import * as gax from '../../src/gax';
import {GoogleError} from '../../src/googleError';
import {GrpcClient, Metadata} from '../../src/grpc';
import {GrpcClient as FallbackGrpcClient} from '../../src/fallback';
import {
  traceCall,
  traceAttempt,
  AttemptTraceContext,
  StaticTraceContext,
} from '../../src/observability/TracerHelper';
import {clearMetadataCache} from '../../src/observability/metadataResolver';
import {OtelHarness} from './otelHarness';
import {GRPCCall, GRPCCallResult} from '../../src/apitypes';

describe('T4 per-attempt spans via TracerHelper and createApiCall', () => {
  let harness: OtelHarness;

  const telemetryInfo: StaticTraceContext = {
    gcpClientService: 'echo.googleapis.com',
    gcpVersion: '1.2.3',
    gcpRepo: 'googleapis/google-cloud-node',
    gcpArtifact: '@google-cloud/echo',
  };

  beforeEach(() => {
    clearMetadataCache();
    process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';
    harness = new OtelHarness();
    harness.setup();
  });

  afterEach(() => {
    clearMetadataCache();
    delete process.env.GOOGLE_SDK_NODE_ENABLE_TRACING;
    harness.teardown();
  });

  it('creates a CLIENT T4 span in traceAttempt with url.domain, server.address, server.port, and status_code', async () => {
    const attemptArgs: AttemptTraceContext = {
      apiName: 'google.example.v1.Echo',
      clientName: 'EchoClient',
      methodName: 'Echo',
      rpcType: 'grpc',
    };

    await traceAttempt(attemptArgs, telemetryInfo, async () => {
      return [{echo: 'ok'}, undefined, undefined];
    });

    const span = harness.requireSingleSpan('google-gax');
    assert.strictEqual(span.name, 'google.example.v1.Echo/Echo');
    assert.strictEqual(span.kind, SpanKind.CLIENT);
    assert.strictEqual(span.attributes['url.domain'], 'echo.googleapis.com');
    assert.strictEqual(
      span.attributes['server.address'],
      'echo.googleapis.com',
    );
    assert.strictEqual(span.attributes['server.port'], 443);
    assert.strictEqual(span.attributes['rpc.system'], 'grpc');
    assert.strictEqual(span.attributes['rpc.response.status_code'], 'OK');
    assert.strictEqual(span.attributes['grpc.response.status_code'], 'OK');
  });

  it('omits server.address and server.port on T4 span for pre-connection failures while preserving url.domain', async () => {
    const attemptArgs: AttemptTraceContext = {
      apiName: 'google.example.v1.Echo',
      clientName: 'EchoClient',
      methodName: 'Echo',
      rpcType: 'grpc',
    };

    const dnsError = Object.assign(new Error('getaddrinfo ENOTFOUND'), {
      code: 'ENOTFOUND',
    });

    await assert.rejects(async () => {
      await traceAttempt(attemptArgs, telemetryInfo, async () => {
        throw dnsError;
      });
    });

    const span = harness.requireSingleSpan('google-gax');
    assert.strictEqual(span.name, 'google.example.v1.Echo/Echo');
    assert.strictEqual(span.kind, SpanKind.CLIENT);
    assert.strictEqual(span.attributes['url.domain'], 'echo.googleapis.com');
    assert.strictEqual(span.attributes['server.address'], undefined);
    assert.strictEqual(span.attributes['server.port'], undefined);
    assert.strictEqual(
      span.attributes['error.type'],
      'CLIENT_CONNECTION_ERROR',
    );
  });

  it('does not inject traceparent headers into gRPC or HTTP metadata', async () => {
    const grpcClient = new GrpcClient();
    const grpcBuilder = grpcClient.metadataBuilder({
      'x-goog-api-client': 'test',
    });

    const receivedGrpcMetadata: Metadata[] = [];
    const receivedHttpMetadata: Record<string, unknown>[] = [];

    const grpcStub = (
      arg: {},
      meta: {},
      opt: {},
      cb: Function,
    ): GRPCCallResult => {
      receivedGrpcMetadata.push(meta as Metadata);
      cb(null, {});
      return {cancel: () => {}};
    };

    const httpStub = (
      arg: {},
      meta: {},
      opt: {},
      cb: Function,
    ): GRPCCallResult => {
      receivedHttpMetadata.push(meta as Record<string, unknown>);
      cb(null, {});
      return {cancel: () => {}};
    };

    const grpcCall = createApiCall(
      grpcStub as unknown as GRPCCall,
      new gax.CallSettings({
        apiName: 'google.example.v1.Echo',
        enableTelemetryTracing: true,
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
        enableTelemetryTracing: true,
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

    assert.strictEqual(receivedGrpcMetadata.length, 1);
    assert.strictEqual(
      (receivedGrpcMetadata[0].get('traceparent') as unknown[]).length,
      0,
    );
    assert.strictEqual(receivedHttpMetadata.length, 1);
    assert.strictEqual(receivedHttpMetadata[0]['traceparent'], undefined);
  });

  describe('T3 client request span to T4 per-attempt span correlation', () => {
    it('emits a T4 gRPC attempt span parented to its T3 client request span', async () => {
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

      const apiCall = createApiCall(
        stubFunc as unknown as GRPCCall,
        defaults.echo,
      );
      await apiCall({message: 'hello'}, undefined);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);

      const t4Span = spans.find(s => s.name === 'google.example.v1.Echo/Echo')!;
      const t3Span = spans.find(s => s.name === 'EchoClient.Echo')!;
      assert.ok(t4Span);
      assert.ok(t3Span);

      assert.strictEqual(t3Span.kind, SpanKind.INTERNAL);
      assert.strictEqual(t4Span.kind, SpanKind.CLIENT);
      assert.strictEqual(
        t4Span.spanContext().traceId,
        t3Span.spanContext().traceId,
      );
      assert.strictEqual(
        t4Span.parentSpanContext?.spanId,
        t3Span.spanContext().spanId,
      );
      assert.strictEqual(
        t4Span.attributes['url.domain'],
        'echo.googleapis.com',
      );
      assert.strictEqual(
        t4Span.attributes['server.address'],
        'echo.googleapis.com',
      );
      assert.strictEqual(t4Span.attributes['server.port'], 443);
      assert.strictEqual(t4Span.attributes['rpc.response.status_code'], 'OK');
      assert.strictEqual(t4Span.attributes['grpc.response.status_code'], 'OK');
    });

    it('emits a T4 HTTP/REST attempt span parented to its T3 client request span', async () => {
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

      const apiCall = createApiCall(
        stubFunc as unknown as GRPCCall,
        defaults.echo,
        undefined,
        'rest',
      );
      await apiCall({message: 'hello'}, undefined);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);

      const t4Span = spans.find(s => s.name === 'google.example.v1.Echo/Echo')!;
      const t3Span = spans.find(s => s.name === 'EchoClient.Echo')!;
      assert.ok(t4Span);
      assert.ok(t3Span);

      assert.strictEqual(t3Span.kind, SpanKind.INTERNAL);
      assert.strictEqual(t4Span.kind, SpanKind.CLIENT);
      assert.strictEqual(
        t4Span.spanContext().traceId,
        t3Span.spanContext().traceId,
      );
      assert.strictEqual(
        t4Span.parentSpanContext?.spanId,
        t3Span.spanContext().spanId,
      );
      assert.strictEqual(
        t4Span.attributes['url.domain'],
        'echo.googleapis.com',
      );
      assert.strictEqual(
        t4Span.attributes['server.address'],
        'echo.googleapis.com',
      );
      assert.strictEqual(t4Span.attributes['server.port'], 443);
      assert.strictEqual(t4Span.attributes['rpc.response.status_code'], 'OK');
      assert.strictEqual(t4Span.attributes['http.response.status_code'], 200);
    });

    it('ties concurrent T4 attempt spans to their respective T3 client request spans without cross-talk', async () => {
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

      const echoCall = createApiCall(makeStub(15), echoSettings);
      const expandCall = createApiCall(makeStub(5), expandSettings);

      await Promise.all([
        echoCall({id: 1}, undefined),
        expandCall({id: 2}, undefined),
      ]);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 4);

      const t3Echo = spans.find(s => s.name === 'EchoClient.Echo')!;
      const t3Expand = spans.find(s => s.name === 'EchoClient.Expand')!;
      const t4Echo = spans.find(s => s.name === 'google.example.v1.Echo/Echo')!;
      const t4Expand = spans.find(
        s => s.name === 'google.example.v1.Echo/Expand',
      )!;

      assert.ok(t3Echo && t3Expand && t4Echo && t4Expand);
      assert.notStrictEqual(
        t3Echo.spanContext().spanId,
        t3Expand.spanContext().spanId,
      );

      assert.strictEqual(
        t4Echo.spanContext().traceId,
        t3Echo.spanContext().traceId,
      );
      assert.strictEqual(
        t4Echo.parentSpanContext?.spanId,
        t3Echo.spanContext().spanId,
      );

      assert.strictEqual(
        t4Expand.spanContext().traceId,
        t3Expand.spanContext().traceId,
      );
      assert.strictEqual(
        t4Expand.parentSpanContext?.spanId,
        t3Expand.spanContext().spanId,
      );
    });

    it('emits one T4 attempt span per retry attempt, all parented to the single T3 client request span', async () => {
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

      const apiCall = createApiCall(stubFunc as unknown as GRPCCall, settings);
      await apiCall({message: 'retry-me'}, undefined);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 3);

      const t3Span = spans.find(s => s.name === 'EchoClient.Echo')!;
      const t4Spans = spans.filter(
        s => s.name === 'google.example.v1.Echo/Echo',
      );
      assert.ok(t3Span);
      assert.strictEqual(t4Spans.length, 2);

      // First attempt failed with UNAVAILABLE
      assert.strictEqual(t4Spans[0].kind, SpanKind.CLIENT);
      assert.strictEqual(t4Spans[0].status.code, SpanStatusCode.ERROR);
      assert.strictEqual(
        t4Spans[0].attributes['rpc.response.status_code'],
        'UNAVAILABLE',
      );
      assert.strictEqual(
        t4Spans[0].attributes['grpc.response.status_code'],
        'UNAVAILABLE',
      );
      assert.strictEqual(
        t4Spans[0].parentSpanContext?.spanId,
        t3Span.spanContext().spanId,
      );

      // Second attempt succeeded with OK
      assert.strictEqual(t4Spans[1].kind, SpanKind.CLIENT);
      assert.strictEqual(t4Spans[1].status.code, SpanStatusCode.UNSET);
      assert.strictEqual(
        t4Spans[1].attributes['rpc.response.status_code'],
        'OK',
      );
      assert.strictEqual(
        t4Spans[1].attributes['grpc.response.status_code'],
        'OK',
      );
      assert.strictEqual(
        t4Spans[1].parentSpanContext?.spanId,
        t3Span.spanContext().spanId,
      );

      // Overall T3 call span succeeded with resend_count = 1
      assert.strictEqual(t3Span.kind, SpanKind.INTERNAL);
      assert.strictEqual(t3Span.status.code, SpanStatusCode.UNSET);
      assert.strictEqual(t3Span.attributes['gcp.grpc.resend_count'], 1);
      assert.strictEqual(t3Span.attributes['rpc.response.status_code'], 'OK');

      // traceCall export remains exercised
      assert.strictEqual(typeof traceCall, 'function');
    });
  });
});
