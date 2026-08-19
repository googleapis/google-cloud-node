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

import {
  trace,
  context,
  Tracer,
  TracerProvider,
  Span,
  SpanContext,
  SpanAttributes,
  SpanAttributeValue,
  SpanStatus,
  Exception,
  TimeInput,
  TraceFlags,
} from '@opentelemetry/api';

export class MockSpan implements Span {
  name: string;
  attributes: Record<string, SpanAttributeValue | undefined> = {};
  exceptions: Exception[] = [];
  events: Array<{name: string; attributes?: SpanAttributes; time?: TimeInput}> = [];
  status?: SpanStatus;
  ended = false;
  endTime?: TimeInput;

  constructor(name: string) {
    this.name = name;
  }

  spanContext(): SpanContext {
    return {
      traceId: '00000000000000000000000000000001',
      spanId: '0000000000000001',
      traceFlags: TraceFlags.SAMPLED,
    };
  }

  setAttribute(key: string, value: SpanAttributeValue): this {
    this.attributes[key] = value;
    return this;
  }

  setAttributes(attributes: SpanAttributes): this {
    Object.assign(this.attributes, attributes);
    return this;
  }

  addEvent(
    name: string,
    attributesOrStartTime?: SpanAttributes | TimeInput,
    startTime?: TimeInput
  ): this {
    this.events.push({
      name,
      attributes:
        typeof attributesOrStartTime === 'object'
          ? (attributesOrStartTime as SpanAttributes)
          : undefined,
      time:
        typeof attributesOrStartTime === 'number'
          ? attributesOrStartTime
          : startTime,
    });
    return this;
  }

  addLink(): this {
    return this;
  }

  addLinks(): this {
    return this;
  }

  setStatus(status: SpanStatus): this {
    this.status = status;
    return this;
  }

  updateName(name: string): this {
    this.name = name;
    return this;
  }

  end(endTime?: TimeInput): void {
    this.ended = true;
    this.endTime = endTime;
  }

  isRecording(): boolean {
    return !this.ended;
  }

  recordException(exception: Exception, _time?: TimeInput): void {
    this.exceptions.push(exception);
  }
}

export class MockTracer implements Tracer {
  name: string;
  version?: string;
  readonly spans: MockSpan[] = [];

  constructor(name: string, version?: string) {
    this.name = name;
    this.version = version;
  }

  startSpan(name: string): Span {
    const span = new MockSpan(name);
    this.spans.push(span);
    return span;
  }

  startActiveSpan<F extends (span: Span) => unknown>(name: string, fn: F): ReturnType<F>;
  startActiveSpan<F extends (span: Span) => unknown>(
    name: string,
    options: any,
    fn: F
  ): ReturnType<F>;
  startActiveSpan<F extends (span: Span) => unknown>(
    name: string,
    options: any,
    context: any,
    fn: F
  ): ReturnType<F>;
  startActiveSpan<F extends (span: Span) => unknown>(
    name: string,
    arg2?: any,
    arg3?: any,
    arg4?: any
  ): ReturnType<F> {
    const fn =
      typeof arg2 === 'function'
        ? arg2
        : typeof arg3 === 'function'
          ? arg3
          : arg4;
    const span = new MockSpan(name);
    this.spans.push(span);
    return fn(span);
  }
}

export class OtelHarness implements TracerProvider {
  private tracers: Map<string, MockTracer> = new Map();

  getTracer(name: string, version?: string): Tracer {
    const key = `${name}@${version ?? ''}`;
    let tracer = this.tracers.get(key);
    if (!tracer) {
      tracer = new MockTracer(name, version);
      this.tracers.set(key, tracer);
    }
    return tracer;
  }

  setup(): void {
    trace.setGlobalTracerProvider(this);
  }

  teardown(): void {
    trace.disable();
    context.disable();
    this.reset();
  }

  reset(): void {
    this.tracers.clear();
  }

  getSpans(tracerName = 'google-gax'): MockSpan[] {
    const tracer = Array.from(this.tracers.entries()).find(([key]) =>
      key.startsWith(tracerName)
    )?.[1];
    return tracer ? tracer.spans : [];
  }

  getLastSpan(tracerName = 'google-gax'): MockSpan | undefined {
    const spans = this.getSpans(tracerName);
    return spans[spans.length - 1];
  }
}
