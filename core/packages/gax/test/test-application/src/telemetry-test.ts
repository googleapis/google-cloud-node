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
import {
  trace,
  context,
  SpanStatusCode,
  HrTime,
} from '@opentelemetry/api';
import {
  BasicTracerProvider,
  InMemorySpanExporter,
  SimpleSpanProcessor,
  ReadableSpan,
} from '@opentelemetry/sdk-trace-base';
import {NodeTracerProvider} from '@opentelemetry/sdk-trace-node';
import {AsyncLocalStorageContextManager} from '@opentelemetry/context-async-hooks';
import {EchoClient, SequenceServiceClient, protos} from 'showcase-echo-client';
import {ShowcaseServer} from 'showcase-server';
import {
  grpc,
  GoogleAuth,
  googleAuthLibrary,
  Status,
  createBackoffSettings,
  RetryOptions,
} from 'google-gax';

/**
 * Converts an OpenTelemetry HrTime [seconds, nanoseconds] tuple to milliseconds.
 */
function hrTimeToMs(time: HrTime): number {
  return time[0] * 1000 + time[1] / 1e6;
}

export type TracerProviderKind = 'basic' | 'node';

/**
 * In-memory OpenTelemetry test harness configuring InMemorySpanExporter and
 * either NodeTracerProvider or BasicTracerProvider.
 */
export class ShowcaseOtelHarness {
  readonly exporter: InMemorySpanExporter;
  readonly provider: BasicTracerProvider | NodeTracerProvider;
  readonly providerKind: TracerProviderKind;
  readonly contextManager: AsyncLocalStorageContextManager;

  constructor(kind: TracerProviderKind = 'basic') {
    this.providerKind = kind;
    this.exporter = new InMemorySpanExporter();
    this.contextManager = new AsyncLocalStorageContextManager();
    this.contextManager.enable();
    context.setGlobalContextManager(this.contextManager);

    const processor = new SimpleSpanProcessor(this.exporter);
    if (kind === 'node') {
      this.provider = new NodeTracerProvider({
        spanProcessors: [processor],
      });
    } else {
      this.provider = new BasicTracerProvider({
        spanProcessors: [processor],
      });
    }
  }

  setup(): void {
    trace.setGlobalTracerProvider(this.provider);
  }

  teardown(): void {
    trace.disable();
    this.contextManager.disable();
    context.disable();
    this.reset();
  }

  reset(): void {
    this.exporter.reset();
  }

  getSpans(tracerName = 'google-gax'): ReadableSpan[] {
    const spans = this.exporter.getFinishedSpans();
    if (tracerName) {
      return spans.filter(span =>
        span.instrumentationScope?.name?.startsWith(tracerName),
      );
    }
    return spans;
  }

  requireSingleSpan(tracerName = 'google-gax'): ReadableSpan {
    const spans = this.getSpans(tracerName);
    assert.strictEqual(
      spans.length,
      1,
      `Expected exactly 1 span for tracer '${tracerName}', got ${spans.length}: ` +
        JSON.stringify(spans.map(s => ({name: s.name, status: s.status}))),
    );
    return spans[0];
  }

  durationMs(span: ReadableSpan): number {
    return hrTimeToMs(span.duration);
  }

  assertMinDurationMs(minMs: number, span?: ReadableSpan): void {
    const target = span ?? this.requireSingleSpan();
    const duration = this.durationMs(target);
    assert.ok(
      duration >= minMs,
      `Expected span '${target.name}' duration to be at least ${minMs}ms, got ${duration.toFixed(2)}ms`,
    );
  }
}

function createSequenceRequestFactory(
  statusCodeList: Status[],
  delayList: number[],
) {
  const request = new protos.google.showcase.v1beta1.CreateSequenceRequest();
  const sequence = new protos.google.showcase.v1beta1.Sequence();

  for (let i = 0; i < statusCodeList.length; i++) {
    const delay = new protos.google.protobuf.Duration();
    delay.seconds = delayList[i];

    const status = new protos.google.rpc.Status();
    status.code = statusCodeList[i];
    status.message = statusCodeList[i].toString();

    const response = new protos.google.showcase.v1beta1.Sequence.Response();
    response.delay = delay;
    response.status = status;

    sequence.responses.push(response);
  }

  request.sequence = sequence;
  return request;
}

/**
 * Runs telemetry tracing integration tests validating that the client request span (T3)
 * properly wraps unary calls, stream calls, and retry attempts against the local
 * gapic-showcase server using both gRPC and HTTP/REST fallback transports.
 */
export async function runTelemetryTests(
  providerKind: TracerProviderKind = 'basic',
): Promise<void> {
  console.log(`\n--- Running T3 Telemetry Tracing Tests (Provider: ${providerKind}) ---`);

  // Ensure telemetry environment variables are active
  process.env.GOOGLE_SDK_NODE_EXPERIMENTAL_O11Y_ENABLED = 'true';
  process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';

  const harness = new ShowcaseOtelHarness(providerKind);
  harness.setup();

  const grpcClientOpts = {
    grpc,
    sslCreds: grpc.credentials.createInsecure(),
    enableTelemetryTracing: true,
  };

  const restClientOpts = {
    fallback: true,
    protocol: 'http' as const,
    port: 7469,
    auth: new GoogleAuth({
      authClient: new googleAuthLibrary.PassThroughClient(),
    }),
    enableTelemetryTracing: true,
  };

  const grpcEchoClient = new EchoClient(grpcClientOpts);
  const restEchoClient = new EchoClient(restClientOpts);
  const grpcSequenceClient = new SequenceServiceClient(grpcClientOpts);
  const restSequenceClient = new SequenceServiceClient(restClientOpts);

  try {
    // =========================================================================
    // 1. UNARY CALLS
    // =========================================================================
    console.log('Testing Unary Calls: gRPC (Success)...');
    harness.reset();
    const [grpcEchoResponse] = await grpcEchoClient.echo({content: 'hello-grpc'});
    assert.strictEqual(grpcEchoResponse.content, 'hello-grpc');
    const grpcSpan = harness.requireSingleSpan();
    assert.strictEqual(grpcSpan.name, 'EchoClient.Echo');
    assert.strictEqual(grpcSpan.status.code, SpanStatusCode.OK);
    assert.strictEqual(grpcSpan.attributes['gcp.method.type'], 'grpc');
    assert.strictEqual(grpcSpan.attributes['gcp.method.name'], 'Echo');
    assert.strictEqual(grpcSpan.attributes['gcp.client.service'], 'showcase');
    assert.strictEqual(grpcSpan.attributes['gcp.client.version'], 'v1beta1');
    assert.strictEqual(grpcSpan.attributes['gcp.repo'], 'googleapis/google-cloud-node');
    assert.strictEqual(grpcSpan.attributes['gcp.artifact'], 'showcase-echo-client');
    assert.strictEqual(grpcSpan.attributes['rpc.response.status_code'], 'OK');
    assert.strictEqual(grpcSpan.attributes['grpc.response.status_code'], 'OK');
    assert.strictEqual(grpcSpan.attributes['http.response.status_code'], undefined);
    assert.ok(harness.durationMs(grpcSpan) >= 0);

    console.log('Testing Unary Calls: gRPC (Error)...');
    harness.reset();
    await assert.rejects(
      () =>
        grpcEchoClient.echo({
          error: {code: Status.INVALID_ARGUMENT, message: 'Invalid argument test'},
        }),
      (err: Error) => {
        assert.ok(err.message.includes('Invalid argument test'));
        return true;
      },
    );
    const grpcErrorSpan = harness.requireSingleSpan();
    assert.strictEqual(grpcErrorSpan.name, 'EchoClient.Echo');
    assert.strictEqual(grpcErrorSpan.status.code, SpanStatusCode.ERROR);
    assert.ok(grpcErrorSpan.status.message?.includes('Invalid argument test'));
    assert.strictEqual(grpcErrorSpan.attributes['gcp.method.type'], 'grpc');
    assert.strictEqual(grpcErrorSpan.attributes['rpc.response.status_code'], 'INVALID_ARGUMENT');
    assert.strictEqual(grpcErrorSpan.attributes['grpc.response.status_code'], 'INVALID_ARGUMENT');
    assert.strictEqual(grpcErrorSpan.attributes['error.type'], 'INVALID_ARGUMENT');
    assert.ok(
      String(grpcErrorSpan.attributes['error.message']).includes('Invalid argument test'),
    );
    assert.ok(grpcErrorSpan.events.some(e => e.name === 'exception'));

    console.log('Testing Unary Calls: HTTP/REST Fallback (Success)...');
    harness.reset();
    const [restEchoResponse] = await restEchoClient.echo({content: 'hello-rest'});
    assert.strictEqual(restEchoResponse.content, 'hello-rest');
    const restSpan = harness.requireSingleSpan();
    assert.strictEqual(restSpan.name, 'EchoClient.Echo');
    assert.strictEqual(restSpan.status.code, SpanStatusCode.OK);
    assert.strictEqual(restSpan.attributes['gcp.method.type'], 'http');
    assert.strictEqual(restSpan.attributes['gcp.method.name'], 'Echo');
    assert.strictEqual(restSpan.attributes['gcp.client.service'], 'showcase');
    assert.strictEqual(restSpan.attributes['gcp.client.version'], 'v1beta1');
    assert.strictEqual(restSpan.attributes['gcp.repo'], 'googleapis/google-cloud-node');
    assert.strictEqual(restSpan.attributes['gcp.artifact'], 'showcase-echo-client');
    assert.strictEqual(restSpan.attributes['rpc.response.status_code'], 'OK');
    assert.strictEqual(restSpan.attributes['http.response.status_code'], 200);
    assert.strictEqual(restSpan.attributes['grpc.response.status_code'], undefined);

    console.log('Testing Unary Calls: HTTP/REST Fallback (Error)...');
    harness.reset();
    await assert.rejects(
      () =>
        restEchoClient.echo({
          error: {code: Status.INVALID_ARGUMENT, message: 'Invalid argument rest'},
        }),
      (err: Error) => {
        assert.ok(err.message.includes('Invalid argument rest') || (err as any).code === 3);
        return true;
      },
    );
    const restErrorSpan = harness.requireSingleSpan();
    assert.strictEqual(restErrorSpan.name, 'EchoClient.Echo');
    assert.strictEqual(restErrorSpan.status.code, SpanStatusCode.ERROR);
    assert.strictEqual(restErrorSpan.attributes['gcp.method.type'], 'http');
    assert.strictEqual(restErrorSpan.attributes['rpc.response.status_code'], 'INVALID_ARGUMENT');
    assert.strictEqual(restErrorSpan.attributes['http.response.status_code'], 400);
    assert.strictEqual(restErrorSpan.attributes['grpc.response.status_code'], undefined);
    assert.strictEqual(restErrorSpan.attributes['error.type'], 'INVALID_ARGUMENT');
    assert.ok(
      String(restErrorSpan.attributes['error.message']).includes('Invalid argument rest'),
    );
    assert.ok(restErrorSpan.events.some(e => e.name === 'exception'));

    // =========================================================================
    // 2. STREAM CALLS
    // =========================================================================
    console.log('Testing Stream Calls: Server Streaming gRPC (Expand)...');
    harness.reset();
    const grpcExpandWords: string[] = [];
    await new Promise<void>((resolve, reject) => {
      const stream = grpcEchoClient.expand({content: 'the quick brown fox'});
      // Verify that span has NOT ended prematurely while stream is active
      assert.strictEqual(harness.getSpans().length, 0);

      stream.on('data', (response: protos.google.showcase.v1beta1.EchoResponse) => {
        grpcExpandWords.push(response.content || '');
      });
      stream.on('error', reject);
      stream.on('end', () => {
        // Stream completed
        resolve();
      });
    });
    assert.deepStrictEqual(grpcExpandWords, ['the', 'quick', 'brown', 'fox']);
    const grpcStreamSpan = harness.requireSingleSpan();
    assert.strictEqual(grpcStreamSpan.name, 'EchoClient.Expand');
    assert.strictEqual(grpcStreamSpan.status.code, SpanStatusCode.OK);
    assert.strictEqual(grpcStreamSpan.attributes['gcp.method.type'], 'grpc');
    assert.strictEqual(grpcStreamSpan.attributes['gcp.method.name'], 'Expand');
    assert.strictEqual(grpcStreamSpan.attributes['rpc.response.status_code'], 'OK');
    assert.strictEqual(grpcStreamSpan.attributes['grpc.response.status_code'], 'OK');

    console.log('Testing Stream Calls: Server Streaming HTTP/REST Fallback (Expand)...');
    harness.reset();
    const restExpandWords: string[] = [];
    await new Promise<void>((resolve, reject) => {
      const stream = restEchoClient.expand({content: 'rest server stream test'});
      assert.strictEqual(harness.getSpans().length, 0);

      stream.on('data', (response: protos.google.showcase.v1beta1.EchoResponse) => {
        restExpandWords.push(response.content || '');
      });
      stream.on('error', reject);
      stream.on('end', () => {
        resolve();
      });
    });
    assert.deepStrictEqual(restExpandWords, ['rest', 'server', 'stream', 'test']);
    const restStreamSpan = harness.requireSingleSpan();
    assert.strictEqual(restStreamSpan.name, 'EchoClient.Expand');
    assert.strictEqual(restStreamSpan.status.code, SpanStatusCode.OK);
    assert.strictEqual(restStreamSpan.attributes['gcp.method.type'], 'http');
    assert.strictEqual(restStreamSpan.attributes['gcp.method.name'], 'Expand');
    assert.strictEqual(restStreamSpan.attributes['rpc.response.status_code'], 'OK');
    assert.strictEqual(restStreamSpan.attributes['http.response.status_code'], 200);

    console.log('Testing Stream Calls: Client Streaming gRPC (Collect)...');
    harness.reset();
    const collectResult = await new Promise<string>((resolve, reject) => {
      const stream = grpcEchoClient.collect((err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response?.content || '');
        }
      });
      // Verify span has not ended before client finishes streaming
      assert.strictEqual(harness.getSpans().length, 0);
      stream.write({content: 'first'});
      stream.write({content: 'second'});
      stream.write({content: 'third'});
      stream.end();
    });
    assert.strictEqual(collectResult, 'first second third');
    const collectSpan = harness.requireSingleSpan();
    assert.strictEqual(collectSpan.name, 'EchoClient.Collect');
    assert.strictEqual(collectSpan.status.code, SpanStatusCode.OK);
    assert.strictEqual(collectSpan.attributes['gcp.method.type'], 'grpc');
    assert.strictEqual(collectSpan.attributes['gcp.method.name'], 'Collect');
    assert.strictEqual(collectSpan.attributes['rpc.response.status_code'], 'OK');

    console.log('Testing Stream Calls: Bidi Streaming gRPC (Chat)...');
    harness.reset();
    const chatResponses: string[] = [];
    await new Promise<void>((resolve, reject) => {
      const stream = grpcEchoClient.chat();
      assert.strictEqual(harness.getSpans().length, 0);

      stream.on('data', (response: protos.google.showcase.v1beta1.EchoResponse) => {
        chatResponses.push(response.content || '');
        if (chatResponses.length === 2) {
          stream.end();
        }
      });
      stream.on('error', reject);
      stream.on('end', () => {
        resolve();
      });

      stream.write({content: 'ping1'});
      stream.write({content: 'ping2'});
    });
    assert.deepStrictEqual(chatResponses, ['ping1', 'ping2']);
    const chatSpan = harness.requireSingleSpan();
    assert.strictEqual(chatSpan.name, 'EchoClient.Chat');
    assert.strictEqual(chatSpan.status.code, SpanStatusCode.OK);
    assert.strictEqual(chatSpan.attributes['gcp.method.type'], 'grpc');
    assert.strictEqual(chatSpan.attributes['gcp.method.name'], 'Chat');
    assert.strictEqual(chatSpan.attributes['rpc.response.status_code'], 'OK');

    // =========================================================================
    // 3. RETRY ATTEMPTS
    // =========================================================================
    console.log('Testing Retry Attempts: gRPC Success after Retry...');
    {
      grpcSequenceClient.initialize();
      // Configure sequence: 1 transient UNAVAILABLE error, then OK
      const seqRequest = createSequenceRequestFactory(
        [Status.UNAVAILABLE],
        [0.05],
      );
      const [sequence] = await grpcSequenceClient.createSequence(seqRequest);

      // Now reset harness so we only capture the attemptSequence span
      harness.reset();

      const backoffSettings = createBackoffSettings(
        50, // initialRetryDelayMillis
        1.5, // retryDelayMultiplier
        1000, // maxRetryDelayMillis
        null,
        1.5,
        5000,
        null,
      );
      backoffSettings.maxRetries = 3;
      const retryOptions = new RetryOptions([Status.UNAVAILABLE], backoffSettings);

      const attemptRequest = new protos.google.showcase.v1beta1.AttemptSequenceRequest();
      attemptRequest.name = sequence.name!;

      await grpcSequenceClient.attemptSequence(attemptRequest, {retry: retryOptions});

      // Crucial T3 validation: exactly ONE span wrapping the entire retry sequence!
      const retrySpan = harness.requireSingleSpan();
      assert.strictEqual(retrySpan.name, 'SequenceServiceClient.AttemptSequence');
      assert.strictEqual(retrySpan.status.code, SpanStatusCode.OK);
      assert.strictEqual(retrySpan.attributes['gcp.method.type'], 'grpc');
      assert.strictEqual(retrySpan.attributes['gcp.method.name'], 'AttemptSequence');
      assert.strictEqual(retrySpan.attributes['rpc.response.status_code'], 'OK');
      assert.strictEqual(retrySpan.attributes['grpc.response.status_code'], 'OK');
      // The span duration must cover the initial attempt + backoff + retry attempt
      harness.assertMinDurationMs(1, retrySpan);
    }

    console.log('Testing Retry Attempts: gRPC Exhausted Retries...');
    {
      grpcSequenceClient.initialize();
      // Configure sequence: 3 UNAVAILABLE errors
      const seqRequest = createSequenceRequestFactory(
        [Status.UNAVAILABLE, Status.UNAVAILABLE, Status.UNAVAILABLE],
        [0.05, 0.05, 0.05],
      );
      const [sequence] = await grpcSequenceClient.createSequence(seqRequest);

      harness.reset();

      const backoffSettings = createBackoffSettings(
        50,
        1.5,
        500,
        null,
        1.5,
        3000,
        null,
      );
      backoffSettings.maxRetries = 1; // Only 1 retry attempt allowed, so it will exhaust
      const retryOptions = new RetryOptions([Status.UNAVAILABLE], backoffSettings);

      const attemptRequest = new protos.google.showcase.v1beta1.AttemptSequenceRequest();
      attemptRequest.name = sequence.name!;

      await assert.rejects(
        () => grpcSequenceClient.attemptSequence(attemptRequest, {retry: retryOptions}),
        (err: any) => {
          assert.ok(
            String(err.code) === '4' || // DEADLINE_EXCEEDED after max retries
              String(err.code) === '14' ||
              err.message.includes('Exceeded maximum number of retries'),
          );
          return true;
        },
      );

      // Crucial T3 validation: exactly ONE span wrapping all retry attempts
      const failedRetrySpan = harness.requireSingleSpan();
      assert.strictEqual(failedRetrySpan.name, 'SequenceServiceClient.AttemptSequence');
      assert.strictEqual(failedRetrySpan.status.code, SpanStatusCode.ERROR);
      assert.strictEqual(failedRetrySpan.attributes['gcp.method.type'], 'grpc');
      assert.strictEqual(failedRetrySpan.attributes['gcp.method.name'], 'AttemptSequence');
      assert.strictEqual(failedRetrySpan.attributes['rpc.response.status_code'], 'DEADLINE_EXCEEDED');
      assert.strictEqual(failedRetrySpan.attributes['grpc.response.status_code'], 'DEADLINE_EXCEEDED');
      assert.strictEqual(failedRetrySpan.attributes['error.type'], 'DEADLINE_EXCEEDED');
      assert.ok(failedRetrySpan.attributes['error.message'] !== undefined);
      assert.ok(failedRetrySpan.events.some(e => e.name === 'exception'));
      harness.assertMinDurationMs(1, failedRetrySpan);
    }

    console.log('Testing Retry Attempts: HTTP/REST Fallback Success after Retry...');
    {
      restSequenceClient.initialize();
      const seqRequest = createSequenceRequestFactory(
        [Status.UNAVAILABLE],
        [0.05],
      );
      const [sequence] = await restSequenceClient.createSequence(seqRequest);

      harness.reset();

      const backoffSettings = createBackoffSettings(
        50,
        1.5,
        500,
        null,
        1.5,
        3000,
        null,
      );
      backoffSettings.maxRetries = 3;
      const retryOptions = new RetryOptions([Status.UNAVAILABLE], backoffSettings);

      const attemptRequest = new protos.google.showcase.v1beta1.AttemptSequenceRequest();
      attemptRequest.name = sequence.name!;

      await restSequenceClient.attemptSequence(attemptRequest, {retry: retryOptions});

      // T3 span wrapping check for fallback
      const restRetrySpan = harness.requireSingleSpan();
      assert.strictEqual(restRetrySpan.name, 'SequenceServiceClient.AttemptSequence');
      assert.strictEqual(restRetrySpan.status.code, SpanStatusCode.OK);
      assert.strictEqual(restRetrySpan.attributes['gcp.method.type'], 'http');
      assert.strictEqual(restRetrySpan.attributes['gcp.method.name'], 'AttemptSequence');
      assert.strictEqual(restRetrySpan.attributes['rpc.response.status_code'], 'OK');
      assert.strictEqual(restRetrySpan.attributes['http.response.status_code'], 200);
      assert.strictEqual(restRetrySpan.attributes['grpc.response.status_code'], undefined);
      harness.assertMinDurationMs(1, restRetrySpan);
    }

    console.log('Testing Retry Attempts: HTTP/REST Fallback Exhausted Retries...');
    {
      restSequenceClient.initialize();
      const seqRequest = createSequenceRequestFactory(
        [Status.UNAVAILABLE, Status.UNAVAILABLE, Status.UNAVAILABLE],
        [0.05, 0.05, 0.05],
      );
      const [sequence] = await restSequenceClient.createSequence(seqRequest);

      harness.reset();

      const backoffSettings = createBackoffSettings(
        50,
        1.5,
        500,
        null,
        1.5,
        3000,
        null,
      );
      backoffSettings.maxRetries = 1;
      const retryOptions = new RetryOptions([Status.UNAVAILABLE], backoffSettings);

      const attemptRequest = new protos.google.showcase.v1beta1.AttemptSequenceRequest();
      attemptRequest.name = sequence.name!;

      await assert.rejects(
        () => restSequenceClient.attemptSequence(attemptRequest, {retry: retryOptions}),
        (err: any) => {
          assert.ok(
            String(err.code) === '4' ||
              String(err.code) === '14' ||
              err.message.includes('Exceeded maximum number of retries'),
          );
          return true;
        },
      );

      const failedRestRetrySpan = harness.requireSingleSpan();
      assert.strictEqual(failedRestRetrySpan.name, 'SequenceServiceClient.AttemptSequence');
      assert.strictEqual(failedRestRetrySpan.status.code, SpanStatusCode.ERROR);
      assert.strictEqual(failedRestRetrySpan.attributes['gcp.method.type'], 'http');
      assert.strictEqual(failedRestRetrySpan.attributes['gcp.method.name'], 'AttemptSequence');
      assert.strictEqual(failedRestRetrySpan.attributes['rpc.response.status_code'], 'DEADLINE_EXCEEDED');
      assert.strictEqual(failedRestRetrySpan.attributes['error.type'], 'DEADLINE_EXCEEDED');
      assert.ok(failedRestRetrySpan.attributes['error.message'] !== undefined);
      assert.ok(failedRestRetrySpan.events.some(e => e.name === 'exception'));
      harness.assertMinDurationMs(1, failedRestRetrySpan);
    }

    // =========================================================================
    // =========================================================================
    // 4. TRACE CONTEXT PROPAGATION & TRACE HIERARCHY (T4 -> T3)
    // =========================================================================
    console.log('Testing Trace Context Propagation & Hierarchy (T4 -> T3): gRPC Unary...');
    {
      harness.reset();
      // Instrumentation tracer (T4) represents the outer tracing layer (e.g. higher-level SDK / instrumentation library)
      const instrumentationTracer = trace.getTracer('@google-cloud/instrumentation-echo', '1.0.0');
      let t4SpanId: string | undefined;
      let t4TraceId: string | undefined;

      await instrumentationTracer.startActiveSpan('EchoOperation.Execute', async (t4Span) => {
        try {
          const t4Context = t4Span.spanContext();
          t4SpanId = t4Context.spanId;
          t4TraceId = t4Context.traceId;

          const [response] = await grpcEchoClient.echo({content: 'hierarchy-grpc'});
          assert.strictEqual(response.content, 'hierarchy-grpc');
        } finally {
          t4Span.end();
        }
      });

      // Verify trace hierarchy: 2 spans finished (T4 instrumentation span and T3 client request span)
      const allSpans = harness.exporter.getFinishedSpans();
      assert.strictEqual(allSpans.length, 2, `Expected 2 spans (T4 + T3), got ${allSpans.length}`);

      const t3Span = harness.requireSingleSpan('google-gax');
      const t4Span = allSpans.find(s => s.name === 'EchoOperation.Execute');
      assert.ok(t4Span, 'T4 instrumentation span should exist in finished spans');

      // Assert T4 is the parent of T3
      assert.strictEqual(t3Span.name, 'EchoClient.Echo');
      assert.strictEqual(t3Span.spanContext().traceId, t4TraceId, 'T3 span should share traceId with T4 parent span');
      assert.strictEqual(t3Span.parentSpanContext?.spanId, t4SpanId, 'T4 span must be the direct parent of T3 span');
      assert.strictEqual(t4Span?.parentSpanContext, undefined, 'Root T4 span has no parent');
    }

    console.log('Testing Trace Context Propagation & Hierarchy (T4 -> T3): HTTP/REST Fallback Unary...');
    {
      harness.reset();
      const instrumentationTracer = trace.getTracer('@google-cloud/instrumentation-echo', '1.0.0');
      let t4SpanId: string | undefined;
      let t4TraceId: string | undefined;

      await instrumentationTracer.startActiveSpan('EchoOperation.ExecuteRest', async (t4Span) => {
        try {
          const t4Context = t4Span.spanContext();
          t4SpanId = t4Context.spanId;
          t4TraceId = t4Context.traceId;

          const [response] = await restEchoClient.echo({content: 'hierarchy-rest'});
          assert.strictEqual(response.content, 'hierarchy-rest');
        } finally {
          t4Span.end();
        }
      });

      const allSpans = harness.exporter.getFinishedSpans();
      assert.strictEqual(allSpans.length, 2, `Expected 2 spans (T4 + T3), got ${allSpans.length}`);

      const t3Span = harness.requireSingleSpan('google-gax');
      const t4Span = allSpans.find(s => s.name === 'EchoOperation.ExecuteRest');
      assert.ok(t4Span, 'T4 instrumentation span should exist in finished spans');

      assert.strictEqual(t3Span.name, 'EchoClient.Echo');
      assert.strictEqual(t3Span.spanContext().traceId, t4TraceId, 'T3 span should share traceId with T4 parent span');
      assert.strictEqual(t3Span.parentSpanContext?.spanId, t4SpanId, 'T4 span must be the direct parent of T3 span');
    }

    console.log('Testing Trace Hierarchy: Multiple T3 Child Spans under Single T4 Parent...');
    {
      harness.reset();
      const instrumentationTracer = trace.getTracer('@google-cloud/instrumentation-workflow', '1.0.0');
      let t4SpanId: string | undefined;
      let t4TraceId: string | undefined;

      await instrumentationTracer.startActiveSpan('Workflow.ExecuteSteps', async (t4Span) => {
        try {
          const t4Context = t4Span.spanContext();
          t4SpanId = t4Context.spanId;
          t4TraceId = t4Context.traceId;

          // Step 1: gRPC Unary call
          const [res1] = await grpcEchoClient.echo({content: 'step-1'});
          assert.strictEqual(res1.content, 'step-1');

          // Step 2: HTTP/REST Fallback Unary call
          const [res2] = await restEchoClient.echo({content: 'step-2'});
          assert.strictEqual(res2.content, 'step-2');
        } finally {
          t4Span.end();
        }
      });

      // We expect 3 spans: 1 T4 parent span + 2 T3 children spans
      const allSpans = harness.exporter.getFinishedSpans();
      assert.strictEqual(allSpans.length, 3, `Expected 3 spans (1 T4 + 2 T3 children), got ${allSpans.length}`);

      const t3Spans = harness.getSpans('google-gax');
      assert.strictEqual(t3Spans.length, 2, `Expected 2 T3 spans, got ${t3Spans.length}`);

      for (const t3Child of t3Spans) {
        assert.strictEqual(
          t3Child.spanContext().traceId,
          t4TraceId,
          `Child span ${t3Child.name} should share traceId with T4 parent`,
        );
        assert.strictEqual(
          t3Child.parentSpanContext?.spanId,
          t4SpanId,
          `Child span ${t3Child.name} should have T4 parentSpanId`,
        );
      }
    }

    console.log('Testing Trace Hierarchy: T4 Parent with Streaming and Retry T3 Children...');
    {
      harness.reset();
      const instrumentationTracer = trace.getTracer('@google-cloud/instrumentation-sequence', '1.0.0');
      let t4SpanId: string | undefined;
      let t4TraceId: string | undefined;

      await instrumentationTracer.startActiveSpan('Sequence.ExecuteWithRetry', async (t4Span) => {
        try {
          const t4Context = t4Span.spanContext();
          t4SpanId = t4Context.spanId;
          t4TraceId = t4Context.traceId;

          // Configure sequence: 1 transient UNAVAILABLE, then OK
          const seqRequest = createSequenceRequestFactory(
            [Status.UNAVAILABLE],
            [0.05],
          );
          const [sequence] = await grpcSequenceClient.createSequence(seqRequest);

          const backoffSettings = createBackoffSettings(50, 1.5, 500, null, 1.5, 3000, null);
          backoffSettings.maxRetries = 2;
          const retryOptions = new RetryOptions([Status.UNAVAILABLE], backoffSettings);

          const attemptRequest = new protos.google.showcase.v1beta1.AttemptSequenceRequest();
          attemptRequest.name = sequence.name!;

          await grpcSequenceClient.attemptSequence(attemptRequest, {retry: retryOptions});
        } finally {
          t4Span.end();
        }
      });

      // Finished spans: 1 T4 parent + 1 CreateSequence T3 child + 1 AttemptSequence T3 child
      const allSpans = harness.exporter.getFinishedSpans();
      assert.strictEqual(allSpans.length, 3, `Expected 3 spans (1 T4 + 2 T3 children), got ${allSpans.length}`);

      const t3Spans = harness.getSpans('google-gax');
      assert.strictEqual(t3Spans.length, 2);

      const createSeqSpan = t3Spans.find(s => s.name === 'SequenceServiceClient.CreateSequence');
      const attemptSeqSpan = t3Spans.find(s => s.name === 'SequenceServiceClient.AttemptSequence');

      assert.ok(createSeqSpan, 'CreateSequence span must exist');
      assert.ok(attemptSeqSpan, 'AttemptSequence span must exist');

      assert.strictEqual(createSeqSpan?.spanContext().traceId, t4TraceId);
      assert.strictEqual(createSeqSpan?.parentSpanContext?.spanId, t4SpanId);

      assert.strictEqual(attemptSeqSpan?.spanContext().traceId, t4TraceId);
      assert.strictEqual(attemptSeqSpan?.parentSpanContext?.spanId, t4SpanId);
    }

    console.log(`\n✔ All T3 Telemetry Tracing Tests passed successfully with ${providerKind} provider!`);
  } finally {
    harness.teardown();
  }
}

if (require.main === module) {
  const showcaseServer = new ShowcaseServer();
  (async () => {
    try {
      await showcaseServer.start();
      await runTelemetryTests('basic');
      await runTelemetryTests('node');
    } finally {
      showcaseServer.stop();
    }
  })().catch(err => {
    console.error(err);
    process.exit(1);
  });
}
