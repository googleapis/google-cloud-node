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
import {AsyncLocalStorage} from 'async_hooks';
import {
  trace,
  context,
  Context,
  ContextManager,
  ROOT_CONTEXT,
} from '@opentelemetry/api';
import {
  BasicTracerProvider,
  InMemorySpanExporter,
  SimpleSpanProcessor,
  ReadableSpan,
} from '@opentelemetry/sdk-trace-base';

/**
 * In-memory OpenTelemetry `ContextManager` backed by Node's `AsyncLocalStorage`
 * for propagating active span contexts across asynchronous operations in tests.
 */
class AsyncLocalStorageContextManager implements ContextManager {
  private _storage = new AsyncLocalStorage<Context>();

  active(): Context {
    return this._storage.getStore() ?? ROOT_CONTEXT;
  }

  with<A extends unknown[], F extends (...args: A) => ReturnType<F>>(
    context: Context,
    fn: F,
    thisArg?: ThisParameterType<F>,
    ...args: A
  ): ReturnType<F> {
    return this._storage.run(context, () => fn.apply(thisArg, args));
  }

  bind<T>(_context: Context, target: T): T {
    return target;
  }

  enable(): this {
    return this;
  }

  disable(): this {
    this._storage.disable();
    return this;
  }
}

/** The resend count attribute on a gRPC span. */
const GRPC_RESEND_COUNT = 'gcp.grpc.resend_count';

/** The resend count attribute on a fallback span. */
const HTTP_RESEND_COUNT = 'http.request.resend_count';

/**
 * Test harness for configuring an in-memory OpenTelemetry tracer provider
 * and asserting exported span attributes, status, events, and lifetimes.
 */
export class OtelHarness {
  readonly exporter: InMemorySpanExporter;
  readonly provider: BasicTracerProvider;
  private contextManager?: AsyncLocalStorageContextManager;

  constructor() {
    this.exporter = new InMemorySpanExporter();
    this.provider = new BasicTracerProvider({
      spanProcessors: [new SimpleSpanProcessor(this.exporter)],
    });
  }

  /**
   * Registers the in-memory tracer provider and `AsyncLocalStorage` context manager globally.
   */
  setup(): void {
    this.contextManager = new AsyncLocalStorageContextManager();
    this.contextManager.enable();
    context.setGlobalContextManager(this.contextManager);
    trace.setGlobalTracerProvider(this.provider);
  }

  /**
   * Disables the global tracer provider and context manager and clears exported spans.
   */
  teardown(): void {
    trace.disable();
    this.contextManager?.disable();
    context.disable();
    this.reset();
  }

  /**
   * Clears all finished spans from the in-memory exporter.
   */
  reset(): void {
    this.exporter.reset();
  }

  /**
   * Returns all finished spans, optionally filtered by instrumentation scope name prefix.
   *
   * @param {string} [tracerName] - Optional instrumentation scope name prefix (e.g. 'google-gax').
   * @returns {ReadableSpan[]} The matching finished spans.
   */
  getSpans(tracerName?: string): ReadableSpan[] {
    const spans = this.exporter.getFinishedSpans();
    if (tracerName) {
      return spans.filter(span =>
        span.instrumentationScope?.name?.startsWith(tracerName),
      );
    }
    return spans;
  }

  /**
   * Number of spans that have been *exported*.
   *
   * Only ended spans are exported, so this is the single check that catches
   * both halves of the span-lifetime problem: a leaked span (never ended)
   * reports 0, and a span ended more than once reports more than expected.
   *
   * @param {string} [tracerName] - Restrict the count to one instrumentation scope.
   * @returns {number} The exported span count.
   */
  spanCount(tracerName?: string): number {
    return this.getSpans(tracerName).length;
  }

  /**
   * Asserts the exact number of exported spans.
   *
   * @param {number} expected - Spans expected for the call under test.
   * @param {string} [tracerName] - Restrict the count to one instrumentation scope.
   * @param {string} [message] - Optional context for the failure output.
   */
  assertSpanCount(
    expected: number,
    tracerName?: string,
    message?: string,
  ): void {
    const actual = this.spanCount(tracerName);
    assert.strictEqual(
      actual,
      expected,
      message ??
        `expected ${expected} exported span(s), got ${actual}. ` +
          '0 means the span was never ended (leaked); more than expected ' +
          'means it was ended more than once.',
    );
  }

  /**
   * Returns the exported span, asserting that exactly one exists.
   *
   * @param {string} [tracerName] - Restrict the lookup to one instrumentation scope.
   * @returns {ReadableSpan} The single exported span.
   */
  requireSingleSpan(tracerName?: string): ReadableSpan {
    this.assertSpanCount(1, tracerName);
    return this.getSpans(tracerName)[0];
  }

  /**
   * Reads the response status attributes (`rpc.response.status_code`,
   * `http.response.status_code`, and legacy `grpc.response.status_code`) from a span.
   *
   * @param {ReadableSpan} span - The span to read.
   * @returns {ResponseStatusAttributes} The attributes, each undefined if absent.
   */
  responseStatus(span: ReadableSpan): ResponseStatusAttributes {
    return {
      rpc: span.attributes['rpc.response.status_code'] as string | undefined,
      grpc: span.attributes['grpc.response.status_code'] as string | undefined,
      http: span.attributes['http.response.status_code'] as number | undefined,
    };
  }

  /**
   * Asserts the response status attributes of a traced call or attempt.
   *
   * The transport-specific attribute is not named by the caller. It is derived
   * from the span's own `rpc.system.name`, so a test cannot assert a
   * combination the tracer is not supposed to produce — such as an HTTP status
   * on a gRPC span. Both the presence of the attribute that applies and the
   * absence of the one that does not are checked, because the second half is
   * what catches an attribute leaking onto the wrong transport.
   *
   * `httpStatus` is only meaningful on a fallback span. Omitting it there
   * asserts that no HTTP status was reported, which is the expected result for
   * a failure that never received a response, such as an expired deadline.
   *
   * @param {object} expected - Expected status and optional server endpoint values.
   * @param {string} [expected.rpcStatus] - gRPC status name, e.g. 'OK' or 'NOT_FOUND'. Undefined if no response arrived.
   * @param {number} [expected.httpStatus] - HTTP status expected on a fallback span.
   * @param {string} [expected.serverAddress] - Optional expected server.address (delegates to assertServerAddressAndPort).
   * @param {number} [expected.serverPort] - Optional expected server.port (delegates to assertServerAddressAndPort).
   * @param {object} [options] - Span selection.
   * @param {string} [options.tracerName] - Restrict the lookup to one instrumentation scope.
   * @param {ReadableSpan} [options.span] - Span to check; defaults to the only exported span.
   */
  assertResponseStatus(
    expected: {
      rpcStatus?: string;
      httpStatus?: number;
      serverAddress?: string;
      serverPort?: number;
    },
    options: {tracerName?: string; span?: ReadableSpan} = {},
  ): void {
    const target = options.span ?? this.requireSingleSpan(options.tracerName);
    const actual = this.responseStatus(target);
    const transport = target.attributes['rpc.system.name'];
    const where = `span '${target.name}'`;

    if ('serverAddress' in expected || 'serverPort' in expected) {
      this.assertServerAddressAndPort(
        {address: expected.serverAddress, port: expected.serverPort},
        options,
      );
    }

    assert.ok(
      transport === 'grpc' || transport === 'http',
      `${where} has rpc.system.name ${JSON.stringify(transport)}; the ` +
        'transport-specific status attribute cannot be checked without it. ' +
        'Was this span produced by traceCall or traceAttempt?',
    );

    assert.strictEqual(
      actual.grpc,
      undefined,
      `${where} reported grpc.response.status_code ${JSON.stringify(actual.grpc)}; ` +
        'only rpc.response.status_code or http.response.status_code should be set.',
    );

    if (transport === 'grpc') {
      assert.strictEqual(
        actual.rpc,
        expected.rpcStatus,
        expected.rpcStatus === undefined
          ? `expected ${where} to report no rpc.response.status_code, got ` +
              `${JSON.stringify(actual.rpc)}. Response status is omitted when there is no server response.`
          : `expected ${where} to report rpc.response.status_code ` +
              `${JSON.stringify(expected.rpcStatus)}, got ${JSON.stringify(actual.rpc)}.`,
      );
      assert.strictEqual(
        actual.http,
        undefined,
        `${where} is a gRPC span but reported http.response.status_code ` +
          `${JSON.stringify(actual.http)}. A gRPC call has no HTTP status, ` +
          'not even a synthesized one.',
      );
      assert.strictEqual(
        expected.httpStatus,
        undefined,
        'assertResponseStatus was given an expected httpStatus for a gRPC ' +
          'span, which can never hold one. Drop it, or assert against a ' +
          'fallback span.',
      );
      return;
    }

    assert.strictEqual(
      actual.rpc,
      undefined,
      `${where} is a fallback span but reported rpc.response.status_code ` +
        `${JSON.stringify(actual.rpc)}. HTTP spans only report http.response.status_code.`,
    );
    assert.strictEqual(
      expected.rpcStatus,
      undefined,
      'assertResponseStatus was given an expected rpcStatus for an HTTP ' +
        'span, which can never hold one. Use httpStatus instead.',
    );
    assert.strictEqual(
      actual.http,
      expected.httpStatus,
      expected.httpStatus === undefined
        ? `expected ${where} to report no http.response.status_code, got ` +
            `${JSON.stringify(actual.http)}. It is only reported when a ` +
            'response was actually received.'
        : `expected ${where} to report http.response.status_code ` +
            `${expected.httpStatus}, got ${JSON.stringify(actual.http)}. ` +
            'This is the status the transport received, which is not ' +
            'recoverable from the gRPC status it was mapped to.',
    );
  }

  /**
   * Asserts the `server.address` and `server.port` attributes on a span.
   *
   * Per OpenTelemetry semantic conventions, `server.address` and `server.port`
   * may be absent if it's a client side failure that occurred before DNS resolution
   * or connection establishment, but are present if it's a server side error.
   *
   * @param {object} expected - Expected server address and port.
   * @param {string} [expected.address] - Expected server.address; undefined if asserted absent.
   * @param {number} [expected.port] - Expected server.port; undefined if asserted absent.
   * @param {object} [options] - Span selection.
   * @param {string} [options.tracerName] - Restrict the lookup to one instrumentation scope.
   * @param {ReadableSpan} [options.span] - Span to check; defaults to the only exported span.
   */
  assertServerAddressAndPort(
    expected: {address?: string; port?: number},
    options: {tracerName?: string; span?: ReadableSpan} = {},
  ): void {
    const target = options.span ?? this.requireSingleSpan(options.tracerName);
    const where = `span '${target.name}'`;

    assert.strictEqual(
      target.attributes['server.address'],
      expected.address,
      expected.address === undefined
        ? `expected ${where} to omit server.address, got ${JSON.stringify(target.attributes['server.address'])}.`
        : `expected ${where} to report server.address ${JSON.stringify(expected.address)}, got ${JSON.stringify(target.attributes['server.address'])}.`,
    );

    assert.strictEqual(
      target.attributes['server.port'],
      expected.port,
      expected.port === undefined
        ? `expected ${where} to omit server.port, got ${JSON.stringify(target.attributes['server.port'])}.`
        : `expected ${where} to report server.port ${JSON.stringify(expected.port)}, got ${JSON.stringify(target.attributes['server.port'])}.`,
    );
  }

  /**
   * Asserts the resend count reported on a span, under the attribute name its
   * transport should be using.
   *
   * The count is recorded on low level network attempt spans when `resendCount > 0` and named
   * per transport: `gcp.grpc.resend_count` on a gRPC span and
   * `http.request.resend_count` on a fallback span. When expected is 0 (such as
   * on initial attempts or client request spans), the attribute is asserted
   * to be absent. The name that does not apply is asserted absent as well, so a
   * span that reports the count under the wrong one fails here instead of
   * passing quietly.
   *
   * @param {number} expected - Expected number of resends; 0 if never retried or on a client request span (attribute omitted).
   * @param {object} [options] - Span selection.
   * @param {string} [options.tracerName] - Restrict the lookup to one instrumentation scope.
   * @param {ReadableSpan} [options.span] - Span to check; defaults to the only exported span.
   */
  assertResendCount(
    expected: number,
    options: {tracerName?: string; span?: ReadableSpan} = {},
  ): void {
    const target = options.span ?? this.requireSingleSpan(options.tracerName);
    const transport = target.attributes['rpc.system.name'];
    const where = `span '${target.name}'`;

    assert.ok(
      transport === 'grpc' || transport === 'http',
      `${where} has rpc.system.name ${JSON.stringify(transport)}; the ` +
        'transport-specific resend count cannot be checked without it. ' +
        'Was this span produced by traceCall or traceAttempt?',
    );

    const isGrpc = transport === 'grpc';
    const expectedKey = isGrpc ? GRPC_RESEND_COUNT : HTTP_RESEND_COUNT;
    const otherKey = isGrpc ? HTTP_RESEND_COUNT : GRPC_RESEND_COUNT;

    const expectedValue = expected === 0 ? undefined : expected;
    assert.strictEqual(
      target.attributes[expectedKey],
      expectedValue,
      expected === 0
        ? `expected ${where} to omit ${expectedKey} when resend count is 0, got ` +
            `${JSON.stringify(target.attributes[expectedKey])}.`
        : `expected ${where} to report ${expectedKey} ${expected}, got ` +
            `${JSON.stringify(target.attributes[expectedKey])}.`,
    );
    assert.strictEqual(
      target.attributes[otherKey],
      undefined,
      `${where} is a ${transport} span but reported ${otherKey} ` +
        `${JSON.stringify(target.attributes[otherKey])}. The resend count ` +
        `belongs under ${expectedKey} there.`,
    );
  }
}

/**
 * The response status attributes read off a traced span.
 */
export interface ResponseStatusAttributes {
  /** `rpc.response.status_code`: gRPC status name, reported on gRPC spans. */
  rpc: string | undefined;
  /** `grpc.response.status_code`: legacy attribute asserted absent on all spans. */
  grpc: string | undefined;
  /** `http.response.status_code`: HTTP status code, reported on fallback spans that received a response. */
  http: number | undefined;
}
