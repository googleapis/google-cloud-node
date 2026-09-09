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
import {describe, it, beforeEach, afterEach} from 'mocha';
import {
  getGaxTracer,
  traceAttempt,
  handlePromise,
  handleStream,
  DynamicTraceContext,
  StaticTraceContext,
} from '../../src/observability/TracerHelper';
import {
  GaxCallResult,
  CancellableStream,
  ResultTuple,
} from '../../src/apitypes';
import {OtelHarness} from './otelHarness';

describe('TracerHelper', () => {
  let harness: OtelHarness;

  beforeEach(() => {
    harness = new OtelHarness();
    harness.setup();
  });

  afterEach(() => {
    harness.teardown();
  });

  describe('getGaxTracer', () => {
    it('returns a tracer for google-gax', () => {
      const tracer = getGaxTracer();
      assert.ok(tracer);
    });
  });

  describe('traceAttempt', () => {
    const dynamicArgs: DynamicTraceContext = {
      clientName: 'StorageClient',
      methodName: 'GetObject',
      rpcType: 'grpc',
    };

    const staticArgs: StaticTraceContext = {
      gcpClientService: 'storage.googleapis.com',
      gcpVersion: '1.2.3',
      gcpRepo: 'googleapis/google-cloud-node',
      gcpArtifact: '@google-cloud/storage',
    };

    it('creates and ends a span with correct name and attributes on success', async () => {
      const expectedResult = {data: 'test'};
      const result = await traceAttempt(dynamicArgs, staticArgs, async () => {
        return expectedResult;
      });

      assert.deepStrictEqual(result, expectedResult);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);

      const span = spans[0];
      assert.strictEqual(span.name, 'StorageClient.GetObject');
      assert.strictEqual(span.ended, true);
      assert.strictEqual(
        span.attributes['gcp.client.service'],
        'storage.googleapis.com',
      );
      assert.strictEqual(span.attributes['gcp.client.version'], '1.2.3');
      assert.strictEqual(
        span.attributes['gcp.repo'],
        'googleapis/google-cloud-node',
      );
      assert.strictEqual(
        span.attributes['gcp.artifact'],
        '@google-cloud/storage',
      );
      assert.strictEqual(span.attributes['gcp.method.name'], 'GetObject');
      assert.strictEqual(span.attributes['gcp.method.type'], 'grpc');
      assert.strictEqual(span.events.length, 0);
    });

    it('records error attributes, exceptions, and rethrows when fn throws an Error', async () => {
      const error = new Error('RPC Failed');
      error.name = 'CustomRpcError';

      await assert.rejects(
        async () => {
          await traceAttempt(dynamicArgs, staticArgs, async () => {
            throw error;
          });
        },
        (err: Error) => {
          assert.strictEqual(err.message, 'RPC Failed');
          return true;
        },
      );

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);

      const span = spans[0];
      assert.strictEqual(span.name, 'StorageClient.GetObject');
      assert.strictEqual(span.ended, true);
      assert.strictEqual(span.attributes['error.message'], 'RPC Failed');
      assert.strictEqual(span.attributes['error.type'], 'Error');
      assert.strictEqual(span.attributes['exception.type'], 'CustomRpcError');
      assert.strictEqual(span.events.length, 1);
      assert.strictEqual(span.events[0].name, 'exception');
      assert.strictEqual(
        span.events[0].attributes?.['exception.message'],
        'RPC Failed',
      );
    });

    it('handles missing optional static arguments gracefully', async () => {
      const emptyStaticArgs: StaticTraceContext = {};
      const result = await traceAttempt(
        dynamicArgs,
        emptyStaticArgs,
        async () => {
          return 42;
        },
      );

      assert.strictEqual(result, 42);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);

      const span = spans[0];
      assert.strictEqual(span.name, 'StorageClient.GetObject');
      assert.strictEqual(span.ended, true);
      assert.strictEqual(span.attributes['gcp.client.service'], undefined);
      assert.strictEqual(span.attributes['gcp.client.version'], undefined);
      assert.strictEqual(span.attributes['gcp.repo'], undefined);
      assert.strictEqual(span.attributes['gcp.artifact'], undefined);
      assert.strictEqual(span.attributes['gcp.method.name'], 'GetObject');
      assert.strictEqual(span.attributes['gcp.method.type'], 'grpc');
    });

    it('supports http rpcType', async () => {
      const httpDynamicArgs: DynamicTraceContext = {
        clientName: 'ComputeClient',
        methodName: 'InsertInstance',
        rpcType: 'http',
      };

      await traceAttempt(httpDynamicArgs, staticArgs, async () => {
        return 'ok';
      });

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].attributes['gcp.method.type'], 'http');
    });

    it('manages span lifetime for resolved promises', async () => {
      const result = await traceAttempt(dynamicArgs, staticArgs, () =>
        Promise.resolve('async-result'),
      );
      assert.strictEqual(result, 'async-result');

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
      assert.strictEqual(spans[0].events.length, 0);
    });

    it('does not end span prematurely for pending asynchronous promises', async () => {
      let resolvePromise: (val: string) => void;
      const asyncPromise = new Promise<string>(resolve => {
        resolvePromise = resolve;
      });

      const resultPromise = traceAttempt(
        dynamicArgs,
        staticArgs,
        () => asyncPromise,
      );

      // Verify the span is NOT closed while the promise is pending
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      resolvePromise!('success');
      const result = await resultPromise;
      assert.strictEqual(result, 'success');

      // Span should only be ended after resolution
      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
    });

    it('supports Promise subclasses', async () => {
      class CustomPromise<T> extends Promise<T> {}
      const customPromise = new CustomPromise<string>(resolve => {
        setTimeout(() => {
          resolve('custom-result');
        }, 10);
      });

      const result = traceAttempt(dynamicArgs, staticArgs, () => customPromise);
      assert.strictEqual(result, customPromise);

      const initialSpans = harness.getSpans('google-gax');
      assert.strictEqual(initialSpans.length, 0);

      await new Promise(resolve => setTimeout(resolve, 25));

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
    });

    it('ends span synchronously if result is not a Promise', () => {
      const syncResult = {data: 'sync-data'};

      const result = traceAttempt(dynamicArgs, staticArgs, () => syncResult);
      assert.strictEqual(result, syncResult);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
    });

    it('does not end span prematurely until asynchronous promise rejects', async () => {
      let rejectPromise: (err: Error) => void;
      const asyncPromise = new Promise((_resolve, reject) => {
        rejectPromise = reject;
      });

      const error = new Error('async promise failure');
      void traceAttempt(dynamicArgs, staticArgs, () => asyncPromise);

      // Verify the span is NOT closed while the promise is pending
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      rejectPromise!(error);
      await new Promise(resolve => setTimeout(resolve, 15));

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
      assert.strictEqual(
        spans[0].attributes['error.message'],
        'async promise failure',
      );
      assert.strictEqual(spans[0].events.length, 1);
    });

    it('does not end span prematurely while stream is active and emitting data', () => {
      const emitter = new EventEmitter();
      const result = traceAttempt(dynamicArgs, staticArgs, () => emitter, true);
      assert.strictEqual(result, emitter);

      // Span must not be finished when stream is created
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      // Emitting data chunks should not close the span
      emitter.emit('data', 'chunk 1');
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      emitter.emit('data', 'chunk 2');
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      // Only when the stream finishes does the span end
      emitter.emit('end');
      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
      assert.strictEqual(spans[0].events.length, 0);
    });

    it('does not end span prematurely until stream emits error event', () => {
      const emitter = new EventEmitter();
      traceAttempt(dynamicArgs, staticArgs, () => emitter, true);

      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      emitter.emit('data', 'chunk');
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      const error = new Error('stream failure');
      emitter.emit('error', error);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
      assert.strictEqual(
        spans[0].attributes['error.message'],
        'stream failure',
      );
      assert.strictEqual(spans[0].events.length, 1);
      assert.strictEqual(spans[0].events[0].name, 'exception');
    });

    it('does not end span prematurely until stream emits close event', () => {
      const emitter = new EventEmitter();
      traceAttempt(dynamicArgs, staticArgs, () => emitter, true);

      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      emitter.emit('data', 'chunk');
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      emitter.emit('close');
      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
    });

    it('supports isStreamCall explicitly set to false', async () => {
      const result = await traceAttempt(
        dynamicArgs,
        staticArgs,
        () => Promise.resolve('explicit-false'),
        false,
      );
      assert.strictEqual(result, 'explicit-false');
      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
    });

    it('ends span synchronously if isStreamCall is true but result is not an EventEmitter', () => {
      const nonEmitter = {data: 'not-an-emitter'};
      const result = traceAttempt(
        dynamicArgs,
        staticArgs,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        () => nonEmitter as any,
        true,
      );
      assert.strictEqual(result, nonEmitter);
      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
    });

    it('supports GaxCallResult promise operations', async () => {
      const cancellablePromise = Object.assign(
        Promise.resolve([{}, undefined, undefined] as ResultTuple),
        {
          cancel: () => {},
        },
      ) as GaxCallResult;

      const result = traceAttempt(
        dynamicArgs,
        staticArgs,
        () => cancellablePromise,
      );
      assert.strictEqual(result, cancellablePromise);
      await result;

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
    });

    it('supports GaxCallResult stream operations', () => {
      const stream = Object.assign(new EventEmitter(), {
        cancel: () => {},
      }) as unknown as CancellableStream;

      const result = traceAttempt(dynamicArgs, staticArgs, () => stream, true);
      assert.strictEqual(result, stream);

      assert.strictEqual(harness.getSpans('google-gax').length, 0);
      stream.emit('end');

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
    });
  });

  describe('handlePromise', () => {
    it('waits for promise resolution before ending span', async () => {
      let ended = false;
      let resolvePromise: () => void;
      const promise = new Promise<void>(resolve => {
        resolvePromise = resolve;
      });

      handlePromise(
        promise,
        () => {},
        () => {
          ended = true;
        },
      );
      assert.strictEqual(ended, false);

      resolvePromise!();
      await new Promise(resolve => setTimeout(resolve, 15));
      assert.strictEqual(ended, true);
    });

    it('records error and ends span when promise rejects', async () => {
      let ended = false;
      let recordedError: unknown;
      const error = new Error('promise error');

      handlePromise(
        Promise.reject(error),
        err => {
          recordedError = err;
        },
        () => {
          ended = true;
        },
      );

      await new Promise(resolve => setTimeout(resolve, 15));
      assert.strictEqual(ended, true);
      assert.strictEqual(recordedError, error);
    });

    it('supports custom thenables', async () => {
      let ended = false;
      const thenable = {
        then(onfulfilled?: (val?: unknown) => unknown) {
          setTimeout(() => {
            onfulfilled?.();
          }, 10);
        },
      };

      handlePromise(
        thenable,
        () => {},
        () => {
          ended = true;
        },
      );
      assert.strictEqual(ended, false);

      await new Promise(resolve => setTimeout(resolve, 20));
      assert.strictEqual(ended, true);
    });
  });

  describe('handleStream', () => {
    it('manages stream events, ends span, and cleans up listeners on end', () => {
      let ended = false;
      const emitter = new EventEmitter();
      handleStream(
        emitter,
        () => {},
        () => {
          ended = true;
        },
      );

      assert.strictEqual(ended, false);
      assert.strictEqual(emitter.listenerCount('end'), 1);
      assert.strictEqual(emitter.listenerCount('close'), 1);
      assert.strictEqual(emitter.listenerCount('error'), 1);

      emitter.emit('data', 'chunk');
      assert.strictEqual(ended, false);

      emitter.emit('end');
      assert.strictEqual(ended, true);
      assert.strictEqual(emitter.listenerCount('end'), 0);
      assert.strictEqual(emitter.listenerCount('close'), 0);
      assert.strictEqual(emitter.listenerCount('error'), 0);
    });

    it('ends span and cleans up listeners on stream close', () => {
      let ended = false;
      const emitter = new EventEmitter();
      handleStream(
        emitter,
        () => {},
        () => {
          ended = true;
        },
      );

      assert.strictEqual(ended, false);
      assert.strictEqual(emitter.listenerCount('close'), 1);

      emitter.emit('close');
      assert.strictEqual(ended, true);
      assert.strictEqual(emitter.listenerCount('end'), 0);
      assert.strictEqual(emitter.listenerCount('close'), 0);
      assert.strictEqual(emitter.listenerCount('error'), 0);
    });

    it('records error, ends span, and cleans up listeners on stream error', () => {
      let ended = false;
      let recordedError: unknown;
      const order: string[] = [];
      const error = new Error('stream failure');
      const emitter = new EventEmitter();

      handleStream(
        emitter,
        err => {
          order.push('recordError');
          recordedError = err;
        },
        () => {
          order.push('endSpan');
          ended = true;
        },
      );

      assert.strictEqual(ended, false);
      assert.strictEqual(emitter.listenerCount('error'), 1);

      emitter.emit('error', error);
      assert.strictEqual(ended, true);
      assert.strictEqual(recordedError, error);
      assert.deepStrictEqual(order, ['recordError', 'endSpan']);
      assert.strictEqual(emitter.listenerCount('end'), 0);
      assert.strictEqual(emitter.listenerCount('close'), 0);
      assert.strictEqual(emitter.listenerCount('error'), 0);
    });
  });
});
