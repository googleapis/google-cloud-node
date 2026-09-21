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
import {EventEmitter} from 'events';
import {trace, context, HrTime, SpanStatusCode} from '@opentelemetry/api';
import {
  BasicTracerProvider,
  InMemorySpanExporter,
  SimpleSpanProcessor,
  ReadableSpan,
} from '@opentelemetry/sdk-trace-base';

/**
 * Converts an OpenTelemetry `HrTime` tuple to milliseconds.
 *
 * @param {HrTime} time - `[seconds, nanoseconds]` tuple.
 * @returns {number} The equivalent value in milliseconds.
 */
export function hrTimeToMs(time: HrTime): number {
  return time[0] * 1000 + time[1] / 1e6;
}

export class OtelHarness {
  readonly exporter: InMemorySpanExporter;
  readonly provider: BasicTracerProvider;

  constructor() {
    this.exporter = new InMemorySpanExporter();
    this.provider = new BasicTracerProvider({
      spanProcessors: [new SimpleSpanProcessor(this.exporter)],
    });
  }

  setup(): void {
    trace.setGlobalTracerProvider(this.provider);
  }

  teardown(): void {
    trace.disable();
    context.disable();
    this.reset();
  }

  reset(): void {
    this.exporter.reset();
  }

  getSpans(tracerName?: string): ReadableSpan[] {
    const spans = this.exporter.getFinishedSpans();
    if (tracerName) {
      return spans.filter(span =>
        span.instrumentationScope?.name?.startsWith(tracerName),
      );
    }
    return spans;
  }

  getLastSpan(tracerName?: string): ReadableSpan | undefined {
    const spans = this.getSpans(tracerName);
    return spans[spans.length - 1];
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
   * Duration of an exported span, in milliseconds.
   *
   * @param {ReadableSpan} span - The span to measure.
   * @returns {number} The span duration in milliseconds.
   */
  durationMs(span: ReadableSpan): number {
    return hrTimeToMs(span.duration);
  }

  /**
   * Asserts that a span's duration covers at least `minMs`.
   *
   * This is how a prematurely-ended span is caught. A span that is closed
   * before the RPC completes — the callback-style failure mode, where the span
   * is ended synchronously at call time rather than when the callback fires —
   * reports a duration of roughly zero. Have the call under test delay its
   * completion signal by a known amount, then assert the span covers it.
   *
   * Note: assert against a bound comfortably below the delay you introduced.
   * Timer granularity makes an exact comparison flaky, and asserting merely
   * `> 0` is useless for operations that complete synchronously.
   *
   * @param {number} minMs - Lower bound, in milliseconds.
   * @param {string} [tracerName] - Restrict the lookup to one instrumentation scope.
   * @param {ReadableSpan} [span] - Span to check; defaults to the only exported span.
   */
  assertMinDurationMs(
    minMs: number,
    tracerName?: string,
    span?: ReadableSpan,
  ): void {
    const target = span ?? this.requireSingleSpan(tracerName);
    const actual = this.durationMs(target);
    assert.ok(
      actual >= minMs,
      `expected span '${target.name}' to cover at least ${minMs}ms, got ` +
        `${actual.toFixed(3)}ms. A near-zero duration means the span was ` +
        'ended before the operation it is supposed to measure completed.',
    );
  }

  /**
   * Asserts a span's status code, and optionally that its status message
   * contains a given substring.
   *
   * @param {SpanStatusCode} code - Expected status code.
   * @param {object} [options] - Additional assertions.
   * @param {string} [options.messageIncludes] - Substring expected in the status message.
   * @param {string} [options.tracerName] - Restrict the lookup to one instrumentation scope.
   * @param {ReadableSpan} [options.span] - Span to check; defaults to the only exported span.
   */
  assertStatus(
    code: SpanStatusCode,
    options: {
      messageIncludes?: string;
      tracerName?: string;
      span?: ReadableSpan;
    } = {},
  ): void {
    const target = options.span ?? this.requireSingleSpan(options.tracerName);
    assert.strictEqual(
      target.status.code,
      code,
      `expected span '${target.name}' to have status ${SpanStatusCode[code]}, ` +
        `got ${SpanStatusCode[target.status.code]} ` +
        `(message: ${JSON.stringify(target.status.message)})`,
    );
    if (options.messageIncludes !== undefined) {
      assert.ok(
        target.status.message?.includes(options.messageIncludes),
        `expected status message to include ${JSON.stringify(
          options.messageIncludes,
        )}, got ${JSON.stringify(target.status.message)}`,
      );
    }
  }
}

/**
 * A record of how many listeners an emitter had per event, captured before a
 * traced operation runs.
 */
export interface ListenerSnapshot {
  emitter: EventEmitter;
  counts: Map<string | symbol, number>;
}

/**
 * Captures the current per-event listener counts of an emitter.
 *
 * @param {EventEmitter} emitter - The emitter to snapshot.
 * @returns {ListenerSnapshot} The baseline to compare against later.
 */
export function snapshotListeners(emitter: EventEmitter): ListenerSnapshot {
  const counts = new Map<string | symbol, number>();
  for (const name of emitter.eventNames()) {
    counts.set(name, emitter.listenerCount(name));
  }
  return {emitter, counts};
}

/**
 * Asserts that every event's listener count has returned to its baseline.
 *
 * Checks both directions, which matters because the two failure modes are
 * opposites: a count above baseline means the tracer leaked listeners onto a
 * stream it no longer tracks, and a count below baseline means cleanup was too
 * aggressive and tore off a listener belonging to someone else, such as a
 * retry handler.
 *
 * @param {ListenerSnapshot} snapshot - Baseline from {@link snapshotListeners}.
 * @param {string} [context] - Optional label for the failure output.
 */
export function assertListenersRestored(
  snapshot: ListenerSnapshot,
  context?: string,
): void {
  const {emitter, counts} = snapshot;
  const events = new Set<string | symbol>([
    ...counts.keys(),
    ...emitter.eventNames(),
  ]);
  const label = context ? `${context}: ` : '';
  for (const name of events) {
    const before = counts.get(name) ?? 0;
    const after = emitter.listenerCount(name);
    assert.strictEqual(
      after,
      before,
      `${label}listener count for '${String(name)}' did not return to ` +
        `baseline: expected ${before}, got ${after}. ` +
        (after > before
          ? 'Listeners were leaked.'
          : 'Cleanup removed a listener it did not own.'),
    );
  }
}
