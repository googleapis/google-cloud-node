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
import {Duplex, Writable} from 'stream';
import {SpanStatusCode} from '@opentelemetry/api';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {
  getGaxTracer,
  traceCall,
  handlePromise,
  handleStream,
  DynamicTraceContext,
  StaticTraceContext,
} from '../../src/observability/TracerHelper';
import {
  GaxCallResult,
  CancellableStream,
  ResultTuple,
  APICallback,
  ResponseType,
  NextPageRequestType,
  RawResponseType,
} from '../../src/apitypes';
import {GoogleError} from '../../src/googleError';
import {OngoingCallPromise} from '../../src/call';
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

  describe('traceCall', () => {
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
      const result = await traceCall(dynamicArgs, staticArgs, async () => {
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
          await traceCall(dynamicArgs, staticArgs, async () => {
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
      const result = await traceCall(dynamicArgs, emptyStaticArgs, async () => {
        return 42;
      });

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

      await traceCall(httpDynamicArgs, staticArgs, async () => {
        return 'ok';
      });

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].attributes['gcp.method.type'], 'http');
    });

    it('manages span lifetime for resolved promises', async () => {
      const result = await traceCall(dynamicArgs, staticArgs, () =>
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

      const resultPromise = traceCall(
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

      const result = traceCall(dynamicArgs, staticArgs, () => customPromise);
      assert.strictEqual(result, customPromise);

      const initialSpans = harness.getSpans('google-gax');
      assert.strictEqual(initialSpans.length, 0);

      await new Promise(resolve => setTimeout(resolve, 25));

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
    });

    it('supports custom thenables implementing CancellablePromise without inheriting from Promise', async () => {
      class CustomCancellablePromise {
        private readonly promise: Promise<string>;
        constructor(executor: (resolve: (val: string) => void) => void) {
          this.promise = new Promise(executor);
        }
        cancel(): void {}
        then<TResult1 = string, TResult2 = never>(
          onfulfilled?:
            ((value: string) => TResult1 | PromiseLike<TResult1>) | null,
          onrejected?:
            ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | null,
        ): Promise<TResult1 | TResult2> {
          return this.promise.then(onfulfilled, onrejected);
        }
        catch<TResult = never>(
          onrejected?:
            ((reason: unknown) => TResult | PromiseLike<TResult>) | null,
        ): Promise<string | TResult> {
          return this.promise.catch(onrejected);
        }
      }

      let resolvePromise: (val: string) => void;
      const customPromise = new CustomCancellablePromise(resolve => {
        resolvePromise = resolve;
      });

      // Verify it is NOT an instance of native Promise
      assert.strictEqual(customPromise instanceof Promise, false);

      const result = traceCall(dynamicArgs, staticArgs, () => customPromise);
      assert.strictEqual(result, customPromise);

      // Verify the span is NOT closed while the custom promise is pending
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      resolvePromise!('custom-success');
      await new Promise(resolve => setTimeout(resolve, 20));

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
    });

    it('supports OngoingCallPromise objects whose promise property resolves', async () => {
      const ongoingCall = new OngoingCallPromise();
      assert.strictEqual(ongoingCall instanceof Promise, false);

      const result = traceCall(dynamicArgs, staticArgs, () => ongoingCall);
      assert.strictEqual(result, ongoingCall);

      // Verify the span is NOT closed while ongoingCall is in flight
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      // Complete the call via callback
      ongoingCall.callback!(null, {data: 'result'});
      await new Promise(resolve => setTimeout(resolve, 20));

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
    });

    it('supports OngoingCallPromise objects whose promise property rejects', async () => {
      const ongoingCall = new OngoingCallPromise();
      assert.strictEqual(ongoingCall instanceof Promise, false);

      const error = new Error('ongoing call failed');
      const result = traceCall(dynamicArgs, staticArgs, () => ongoingCall);
      assert.strictEqual(result, ongoingCall);

      // Verify the span is NOT closed while ongoingCall is in flight
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      // Fail the call via callback
      ongoingCall.callback!(error);
      await new Promise(resolve => setTimeout(resolve, 20));

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
      assert.strictEqual(
        spans[0].attributes['error.message'],
        'ongoing call failed',
      );
    });

    it('ends span synchronously if result is not a Promise', () => {
      const syncResult = {data: 'sync-data'};

      const result = traceCall(dynamicArgs, staticArgs, () => syncResult);
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
      void traceCall(dynamicArgs, staticArgs, () => asyncPromise);

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
      const result = traceCall(dynamicArgs, staticArgs, () => emitter, true);
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
      traceCall(dynamicArgs, staticArgs, () => emitter, true);

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
      traceCall(dynamicArgs, staticArgs, () => emitter, true);

      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      emitter.emit('data', 'chunk');
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      emitter.emit('close');
      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
    });

    it('supports isStreamCall explicitly set to false', async () => {
      const result = await traceCall(
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
      const result = traceCall(
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

      const result = traceCall(
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

      const result = traceCall(dynamicArgs, staticArgs, () => stream, true);
      assert.strictEqual(result, stream);

      assert.strictEqual(harness.getSpans('google-gax').length, 0);
      stream.emit('end');

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
    });

    it('correctly creates separate spans and cleans up listeners across retried stream attempts', () => {
      const attempt1Stream = new EventEmitter();
      const attempt2Stream = new EventEmitter();
      const retryableError = new Error('transient stream failure');

      let attempt = 0;
      const executeStreamingCall = () => {
        attempt++;
        const currentStream = attempt === 1 ? attempt1Stream : attempt2Stream;
        return traceCall(dynamicArgs, staticArgs, () => currentStream, true);
      };

      // Attempt 1
      const stream1 = executeStreamingCall();
      assert.strictEqual(stream1, attempt1Stream);
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      // Attempt 1 fails with transient error
      attempt1Stream.emit('error', retryableError);

      const spansAfterAttempt1 = harness.getSpans('google-gax');
      assert.strictEqual(spansAfterAttempt1.length, 1);
      assert.strictEqual(spansAfterAttempt1[0].ended, true);
      assert.strictEqual(
        spansAfterAttempt1[0].attributes['error.message'],
        'transient stream failure',
      );
      assert.strictEqual(spansAfterAttempt1[0].events.length, 1);
      assert.strictEqual(attempt1Stream.listenerCount('error'), 0);

      // Attempt 2 (retry)
      const stream2 = executeStreamingCall();
      assert.strictEqual(stream2, attempt2Stream);
      assert.strictEqual(harness.getSpans('google-gax').length, 1);

      // Data chunks received on attempt 2
      attempt2Stream.emit('data', 'retry chunk 1');
      assert.strictEqual(harness.getSpans('google-gax').length, 1);

      // Attempt 2 completes successfully
      attempt2Stream.emit('end');

      const spansAfterAttempt2 = harness.getSpans('google-gax');
      assert.strictEqual(spansAfterAttempt2.length, 2);
      assert.strictEqual(spansAfterAttempt2[1].ended, true);
      assert.strictEqual(spansAfterAttempt2[1].events.length, 0);
      assert.strictEqual(attempt2Stream.listenerCount('end'), 0);
    });

    it('keeps span active when a stream handles retries internally before completing', () => {
      const outerStream = new EventEmitter();
      const result = traceCall(
        dynamicArgs,
        staticArgs,
        () => outerStream,
        true,
      );
      assert.strictEqual(result, outerStream);

      // Initial chunk before internal retry
      outerStream.emit('data', 'chunk-before-retry');
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      // Internal retry transparently recovers and delivers more data
      outerStream.emit('data', 'chunk-after-retry');
      assert.strictEqual(harness.getSpans('google-gax').length, 0);

      // Final completion
      outerStream.emit('end');
      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].ended, true);
      assert.strictEqual(spans[0].events.length, 0);
    });

    describe('callback-style invocations', () => {
      it('keeps the span open until the callback fires', done => {
        let invokedCallback: APICallback | undefined;

        // Mimics an API caller that returns OngoingCall (no `.promise`), so
        // fn() yields undefined and there is nothing to await.
        const returned = traceCall(
          dynamicArgs,
          staticArgs,
          tracedCallback => {
            invokedCallback = tracedCallback;
            return undefined as unknown as ResultTuple;
          },
          false,
          () => {
            // Span must be ended by the time the user callback runs.
            const spans = harness.getSpans('google-gax');
            assert.strictEqual(spans.length, 1);
            assert.strictEqual(spans[0].ended, true);
            done();
          },
        );

        assert.strictEqual(returned, undefined);
        assert.ok(invokedCallback, 'fn should receive a traced callback');
        // Critically: the span must NOT have closed synchronously.
        assert.strictEqual(harness.getSpans('google-gax').length, 0);

        // The RPC completes later.
        setImmediate(() => invokedCallback!(null, {data: 'ok'}));
      });

      it('records the error on the span when the callback reports failure', done => {
        const error = new GoogleError('RPC Failed');
        error.name = 'CustomRpcError';
        let invokedCallback: APICallback | undefined;

        traceCall(
          dynamicArgs,
          staticArgs,
          tracedCallback => {
            invokedCallback = tracedCallback;
            return undefined as unknown as ResultTuple;
          },
          false,
          err => {
            assert.strictEqual(err, error);

            const spans = harness.getSpans('google-gax');
            assert.strictEqual(spans.length, 1);
            assert.strictEqual(spans[0].ended, true);
            assert.strictEqual(
              spans[0].attributes['error.message'],
              'RPC Failed',
            );
            assert.strictEqual(
              spans[0].attributes['exception.type'],
              'CustomRpcError',
            );
            assert.strictEqual(spans[0].events.length, 1);
            assert.strictEqual(spans[0].events[0].name, 'exception');
            done();
          },
        );

        assert.strictEqual(harness.getSpans('google-gax').length, 0);
        setImmediate(() => invokedCallback!(error));
      });

      it('preserves `this` and the full argument list', done => {
        let invokedCallback: APICallback | undefined;

        const holder = {
          marker: 'holder',
          handler: function (
            this: unknown,
            err: GoogleError | null,
            response?: ResponseType,
            next?: NextPageRequestType,
            rawResponse?: RawResponseType,
          ) {
            assert.strictEqual(this, holder);
            assert.strictEqual(err, null);
            assert.deepStrictEqual(response, {value: 42});
            assert.strictEqual(next, 'NEXT');
            assert.strictEqual(rawResponse, 'RAW');
            done();
          },
        };

        traceCall(
          dynamicArgs,
          staticArgs,
          tracedCallback => {
            invokedCallback = tracedCallback;
            return undefined as unknown as ResultTuple;
          },
          false,
          holder.handler,
        );

        setImmediate(() =>
          invokedCallback!.call(
            holder,
            null,
            {value: 42} as ResponseType,
            'NEXT' as unknown as NextPageRequestType,
            'RAW' as unknown as RawResponseType,
          ),
        );
      });

      it('ends the span only once if the callback fires more than once', done => {
        let invokedCallback: APICallback | undefined;
        let userCallbackCount = 0;

        traceCall(
          dynamicArgs,
          staticArgs,
          tracedCallback => {
            invokedCallback = tracedCallback;
            return undefined as unknown as ResultTuple;
          },
          false,
          () => {
            userCallbackCount++;
          },
        );

        setImmediate(() => {
          invokedCallback!(null, {first: true});
          invokedCallback!(null, {second: true});

          const spans = harness.getSpans('google-gax');
          assert.strictEqual(spans.length, 1);
          // The user callback is still forwarded every time.
          assert.strictEqual(userCallbackCount, 2);
          done();
        });
      });

      it('still ends the span synchronously when no callback is supplied', () => {
        const syncResult = {data: 'sync'};
        const result = traceCall(
          dynamicArgs,
          staticArgs,
          () => syncResult as unknown as ResultTuple,
        );

        assert.strictEqual(result, syncResult as unknown as ResultTuple);
        const spans = harness.getSpans('google-gax');
        assert.strictEqual(spans.length, 1);
        assert.strictEqual(spans[0].ended, true);
      });

      it('does not wrap the callback for stream calls', () => {
        const emitter = new EventEmitter();
        let received: APICallback | undefined = (() => {}) as APICallback;

        traceCall(
          dynamicArgs,
          staticArgs,
          tracedCallback => {
            received = tracedCallback;
            return emitter;
          },
          true,
          () => {},
        );

        // Stream calls manage span lifetime via handleStream, not the callback.
        assert.strictEqual(received, undefined);
        assert.strictEqual(harness.getSpans('google-gax').length, 0);

        emitter.emit('end');
        assert.strictEqual(harness.getSpans('google-gax').length, 1);
      });
    });

    describe('maxDurationMs backstop', () => {
      it('leaks the span by default when the callback never fires', async () => {
        traceCall(
          dynamicArgs,
          staticArgs,
          () => undefined as unknown as ResultTuple,
          false,
          () => {},
        );

        await new Promise<void>(resolve => setTimeout(resolve, 50));

        // No backstop requested, so the span intentionally stays open.
        assert.strictEqual(harness.getSpans('google-gax').length, 0);
      });

      it('ends and marks the span abandoned when the callback never fires', async () => {
        traceCall(
          dynamicArgs,
          staticArgs,
          () => undefined as unknown as ResultTuple,
          false,
          () => {},
          20,
        );

        assert.strictEqual(harness.getSpans('google-gax').length, 0);

        await new Promise<void>(resolve => setTimeout(resolve, 60));

        const spans = harness.getSpans('google-gax');
        assert.strictEqual(spans.length, 1);
        assert.strictEqual(spans[0].ended, true);
        assert.strictEqual(spans[0].attributes['gcp.span.abandoned'], true);
        assert.strictEqual(
          spans[0].attributes['error.message'],
          'Callback did not fire within 20ms; span abandoned.',
        );
      });

      it('does not fire the backstop when the callback arrives in time', async () => {
        let invokedCallback: APICallback | undefined;
        let userCallbackCount = 0;

        traceCall(
          dynamicArgs,
          staticArgs,
          tracedCallback => {
            invokedCallback = tracedCallback;
            return undefined as unknown as ResultTuple;
          },
          false,
          () => {
            userCallbackCount++;
          },
          50,
        );

        invokedCallback!(null, {ok: true});

        const spans = harness.getSpans('google-gax');
        assert.strictEqual(spans.length, 1);
        assert.strictEqual(
          spans[0].attributes['gcp.span.abandoned'],
          undefined,
        );

        // Wait past the backstop deadline: it must have been cleared, so no
        // second span and no further mutation.
        await new Promise<void>(resolve => setTimeout(resolve, 80));
        assert.strictEqual(harness.getSpans('google-gax').length, 1);
        assert.strictEqual(userCallbackCount, 1);
      });

      it('still forwards a callback that arrives after the backstop fired', async () => {
        let invokedCallback: APICallback | undefined;
        let receivedResponse: unknown;

        traceCall(
          dynamicArgs,
          staticArgs,
          tracedCallback => {
            invokedCallback = tracedCallback;
            return undefined as unknown as ResultTuple;
          },
          false,
          (_err, response) => {
            receivedResponse = response;
          },
          20,
        );

        await new Promise<void>(resolve => setTimeout(resolve, 60));
        assert.strictEqual(harness.getSpans('google-gax').length, 1);

        // The RPC finally responds, long after the span was abandoned.
        invokedCallback!(null, {late: true});

        assert.deepStrictEqual(receivedResponse, {late: true});
        // The abandoned span is not duplicated or re-ended.
        const spans = harness.getSpans('google-gax');
        assert.strictEqual(spans.length, 1);
        assert.strictEqual(spans[0].attributes['gcp.span.abandoned'], true);
      });

      it('does not apply the backstop to stream calls', async () => {
        const emitter = new EventEmitter();

        traceCall(
          dynamicArgs,
          staticArgs,
          () => emitter,
          true,
          () => {},
          20,
        );

        await new Promise<void>(resolve => setTimeout(resolve, 60));

        // Stream lifetime is governed by handleStream, not the backstop.
        assert.strictEqual(harness.getSpans('google-gax').length, 0);

        emitter.emit('end');
        const spans = harness.getSpans('google-gax');
        assert.strictEqual(spans.length, 1);
        assert.strictEqual(
          spans[0].attributes['gcp.span.abandoned'],
          undefined,
        );
      });

      it('ignores a non-positive maxDurationMs', async () => {
        traceCall(
          dynamicArgs,
          staticArgs,
          () => undefined as unknown as ResultTuple,
          false,
          () => {},
          0,
        );

        await new Promise<void>(resolve => setTimeout(resolve, 40));
        assert.strictEqual(harness.getSpans('google-gax').length, 0);
      });
    });

    describe('span status', () => {
      const lastStatus = () => {
        const spans = harness.getSpans('google-gax');
        assert.strictEqual(spans.length, 1);
        return spans[0].status;
      };

      it('sets OK for a synchronous non-promise result', () => {
        traceCall(
          dynamicArgs,
          staticArgs,
          () => ({data: 1}) as unknown as ResultTuple,
        );
        assert.strictEqual(lastStatus().code, SpanStatusCode.OK);
      });

      it('sets OK when the promise resolves', async () => {
        await traceCall(dynamicArgs, staticArgs, async () => ({data: 1}));
        assert.strictEqual(lastStatus().code, SpanStatusCode.OK);
      });

      it('sets ERROR when the promise rejects', async () => {
        await assert.rejects(async () => {
          await traceCall(dynamicArgs, staticArgs, async () => {
            throw new Error('promise boom');
          });
        });
        const status = lastStatus();
        assert.strictEqual(status.code, SpanStatusCode.ERROR);
        assert.strictEqual(status.message, 'promise boom');
      });

      it('sets ERROR when fn throws synchronously', () => {
        assert.throws(() =>
          traceCall(dynamicArgs, staticArgs, () => {
            throw new Error('sync boom');
          }),
        );
        const status = lastStatus();
        assert.strictEqual(status.code, SpanStatusCode.ERROR);
        assert.strictEqual(status.message, 'sync boom');
      });

      it('sets OK when the stream ends cleanly', () => {
        const emitter = new EventEmitter();
        traceCall(dynamicArgs, staticArgs, () => emitter, true);
        emitter.emit('end');
        assert.strictEqual(lastStatus().code, SpanStatusCode.OK);
      });

      it('sets ERROR when the stream errors', () => {
        const emitter = new EventEmitter();
        traceCall(dynamicArgs, staticArgs, () => emitter, true);
        emitter.emit('error', new Error('stream boom'));
        const status = lastStatus();
        assert.strictEqual(status.code, SpanStatusCode.ERROR);
        assert.strictEqual(status.message, 'stream boom');
      });

      it('sets OK when a client-streaming call finishes', async () => {
        const writable = new Writable({
          objectMode: true,
          write(_chunk, _enc, cb) {
            cb();
          },
        });
        traceCall(dynamicArgs, staticArgs, () => writable, true);
        writable.end();

        await new Promise<void>(resolve => setImmediate(resolve));
        assert.strictEqual(lastStatus().code, SpanStatusCode.OK);
      });

      it('sets OK when the callback reports success', () => {
        let invokedCallback: APICallback | undefined;
        traceCall(
          dynamicArgs,
          staticArgs,
          tracedCallback => {
            invokedCallback = tracedCallback;
            return undefined as unknown as ResultTuple;
          },
          false,
          () => {},
        );
        invokedCallback!(null, {ok: true});
        assert.strictEqual(lastStatus().code, SpanStatusCode.OK);
      });

      it('sets ERROR when the callback reports failure', () => {
        let invokedCallback: APICallback | undefined;
        traceCall(
          dynamicArgs,
          staticArgs,
          tracedCallback => {
            invokedCallback = tracedCallback;
            return undefined as unknown as ResultTuple;
          },
          false,
          () => {},
        );
        invokedCallback!(new GoogleError('callback boom'));
        const status = lastStatus();
        assert.strictEqual(status.code, SpanStatusCode.ERROR);
        assert.strictEqual(status.message, 'callback boom');
      });

      it('sets ERROR when the backstop abandons the span', async () => {
        traceCall(
          dynamicArgs,
          staticArgs,
          () => undefined as unknown as ResultTuple,
          false,
          () => {},
          20,
        );

        await new Promise<void>(resolve => setTimeout(resolve, 60));
        const status = lastStatus();
        assert.strictEqual(status.code, SpanStatusCode.ERROR);
        assert.strictEqual(
          status.message,
          'Callback did not fire within 20ms; span abandoned.',
        );
      });

      it('does not downgrade an ERROR status to OK when the span ends', () => {
        // endSpan resolves the status centrally; a recorded error must win.
        const emitter = new EventEmitter();
        traceCall(dynamicArgs, staticArgs, () => emitter, true);
        emitter.emit('error', new Error('stream boom'));
        emitter.emit('end');
        emitter.emit('close');

        const status = lastStatus();
        assert.strictEqual(status.code, SpanStatusCode.ERROR);
        assert.strictEqual(status.message, 'stream boom');
      });
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

    it('supports OngoingCallPromise wrappers in handlePromise', async () => {
      let ended = false;
      const ongoingCall = new OngoingCallPromise();

      handlePromise(
        ongoingCall,
        () => {},
        () => {
          ended = true;
        },
      );
      assert.strictEqual(ended, false);

      ongoingCall.callback!(null, {data: 'hello'});
      await new Promise(resolve => setTimeout(resolve, 20));
      assert.strictEqual(ended, true);
    });

    it('ensures endSpan is called only once even with thenables that trigger both resolve and reject', async () => {
      let endSpanCount = 0;
      const buggyThenable = {
        then(
          onfulfilled?: (val?: unknown) => unknown,
          onrejected?: (err: unknown) => unknown,
        ) {
          onfulfilled?.();
          onrejected?.(new Error('buggy error'));
        },
      };

      handlePromise(
        buggyThenable,
        () => {},
        () => {
          endSpanCount++;
        },
      );

      await new Promise(resolve => setTimeout(resolve, 20));
      assert.strictEqual(endSpanCount, 1);
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

    it('ensures endSpan is called only once if stream emits error followed by close', () => {
      let endSpanCount = 0;
      let recordedError: unknown;
      const error = new Error('stream error');
      const emitter = new EventEmitter();

      handleStream(
        emitter,
        err => {
          recordedError = err;
        },
        () => {
          endSpanCount++;
        },
      );

      assert.strictEqual(endSpanCount, 0);
      emitter.emit('error', error);
      emitter.emit('close');

      assert.strictEqual(endSpanCount, 1);
      assert.strictEqual(recordedError, error);
      assert.strictEqual(emitter.listenerCount('end'), 0);
      assert.strictEqual(emitter.listenerCount('close'), 0);
      assert.strictEqual(emitter.listenerCount('error'), 0);
    });

    it('ensures endSpan is called only once if stream emits end followed by close', () => {
      let endSpanCount = 0;
      const emitter = new EventEmitter();

      handleStream(
        emitter,
        () => {},
        () => {
          endSpanCount++;
        },
      );

      assert.strictEqual(endSpanCount, 0);
      emitter.emit('end');
      emitter.emit('close');

      assert.strictEqual(endSpanCount, 1);
      assert.strictEqual(emitter.listenerCount('end'), 0);
      assert.strictEqual(emitter.listenerCount('close'), 0);
      assert.strictEqual(emitter.listenerCount('error'), 0);
    });

    it('ensures endSpan is called only once if stream emits close followed by end', () => {
      let endSpanCount = 0;
      const emitter = new EventEmitter();

      handleStream(
        emitter,
        () => {},
        () => {
          endSpanCount++;
        },
      );

      assert.strictEqual(endSpanCount, 0);
      emitter.emit('close');
      emitter.emit('end');

      assert.strictEqual(endSpanCount, 1);
      assert.strictEqual(emitter.listenerCount('end'), 0);
      assert.strictEqual(emitter.listenerCount('close'), 0);
      assert.strictEqual(emitter.listenerCount('error'), 0);
    });

    it('does not remove other error or event listeners (such as retry handlers) on cleanup', () => {
      let ended = false;
      let otherErrorHandled = false;
      const error = new Error('retryable error');
      const emitter = new EventEmitter();

      // Simulate an external retry handler or middleware attached to the stream
      emitter.on('error', err => {
        assert.strictEqual(err, error);
        otherErrorHandled = true;
      });

      handleStream(
        emitter,
        () => {},
        () => {
          ended = true;
        },
      );

      // Verify two error listeners are present (external retry listener and handleStream listener)
      assert.strictEqual(emitter.listenerCount('error'), 2);

      emitter.emit('error', error);

      assert.strictEqual(ended, true);
      assert.strictEqual(otherErrorHandled, true);
      // handleStream removed its own listener, but the external retry listener is preserved
      assert.strictEqual(emitter.listenerCount('error'), 1);
    });

    it('ends span on finish for a write-only (client-streaming) stream', async () => {
      let endSpanCount = 0;
      // A client-streaming call yields a write-only stream: the readable side
      // never opens, so 'end'/'close' never fire and only 'finish' does.
      const writable = new Writable({
        objectMode: true,
        write(_chunk, _enc, cb) {
          cb();
        },
      });

      handleStream(
        writable,
        () => {},
        () => {
          endSpanCount++;
        },
      );

      assert.strictEqual(writable.listenerCount('finish'), 1);

      writable.write('foo');
      writable.end();

      await new Promise<void>(resolve => setImmediate(resolve));

      // Without the 'finish' listener this span would leak forever.
      assert.strictEqual(endSpanCount, 1);
      assert.strictEqual(writable.listenerCount('finish'), 0);
      assert.strictEqual(writable.listenerCount('end'), 0);
      assert.strictEqual(writable.listenerCount('close'), 0);
      assert.strictEqual(writable.listenerCount('error'), 0);
    });

    it('does not end a bidi span on finish while responses are still streaming', async () => {
      let endSpanCount = 0;
      const received: string[] = [];
      let sawFinish = false;

      // Bidi: the read side is driven independently of the write side, so the
      // server can keep responding after the client has stopped writing.
      const bidi = new Duplex({
        objectMode: true,
        write(_chunk, _enc, cb) {
          cb();
        },
        read() {},
      });

      handleStream(
        bidi,
        () => {},
        () => {
          endSpanCount++;
        },
      );

      // Readable streams must not subscribe to 'finish'.
      assert.strictEqual(bidi.listenerCount('finish'), 0);

      bidi.on('finish', () => {
        sawFinish = true;
      });
      bidi.on('data', (d: string) => received.push(d));

      // Client finishes writing immediately; this is when 'finish' fires.
      bidi.write('req1');
      bidi.end();

      await new Promise<void>(resolve => setImmediate(resolve));

      // Guard against a vacuous pass: 'finish' must really have fired here.
      assert.strictEqual(sawFinish, true);
      // The span must still be open: the server has not responded yet.
      assert.strictEqual(endSpanCount, 0);

      // Server now streams its responses back.
      const ended = new Promise<void>(resolve => bidi.once('end', resolve));
      bidi.push('late-response-1');
      bidi.push('late-response-2');
      bidi.push(null);
      await ended;

      assert.deepStrictEqual(received, ['late-response-1', 'late-response-2']);
      // Exactly once, even though both 'finish' and 'end' fired.
      assert.strictEqual(endSpanCount, 1);
    });

    it('ends a bidi span exactly once when an error follows finish', async () => {
      let endSpanCount = 0;
      let recordErrorCount = 0;
      const error = new Error('server failed after client finished writing');

      const bidi = new Duplex({
        objectMode: true,
        write(_chunk, _enc, cb) {
          cb();
        },
        read() {},
      });
      // Keep the default error handler from throwing once we remove ours.
      bidi.on('error', () => {});

      handleStream(
        bidi,
        () => {
          recordErrorCount++;
        },
        () => {
          endSpanCount++;
        },
      );

      bidi.write('req1');
      bidi.end();
      await new Promise<void>(resolve => setImmediate(resolve));

      // 'finish' has fired but must not have ended the span.
      assert.strictEqual(endSpanCount, 0);

      bidi.emit('error', error);
      bidi.emit('close');

      assert.strictEqual(recordErrorCount, 1);
      assert.strictEqual(endSpanCount, 1);
    });
  });
});
