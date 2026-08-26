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

import {trace, context} from '@opentelemetry/api';
import {
  BasicTracerProvider,
  InMemorySpanExporter,
  SimpleSpanProcessor,
  ReadableSpan,
} from '@opentelemetry/sdk-trace-base';

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
}
