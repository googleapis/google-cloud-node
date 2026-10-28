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
import {Writable} from 'stream';
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as loggingUtils from 'google-logging-utils';
import {
  buildLogAttributes,
  getGaxLogger,
  logCall,
  LogPayload,
} from '../../src/observability/LoggerHelper';
import {traceAttempt, traceCall} from '../../src/observability/TracerHelper';
import {
  AttemptTraceContext,
  DEFAULT_GCP_REPO,
  StaticTraceContext,
} from '../../src/observability/contextUtil';
import {
  APICallback,
  NextPageRequestType,
  RawResponseType,
  ResponseType,
  ResultTuple,
} from '../../src/apitypes';
import {OngoingCallPromise} from '../../src/call';
import {GoogleError} from '../../src/googleError';
import {Status} from '../../src/status';
import {OtelHarness} from './otelHarness';

interface CapturedLog {
  namespace: string;
  fields: loggingUtils.LogFields;
  args: unknown[];
}

class TestLogSink implements loggingUtils.DebugLogBackend {
  logs: CapturedLog[] = [];
  filters: string[] = [];

  log(
    namespace: string,
    fields: loggingUtils.LogFields,
    ...args: unknown[]
  ): void {
    this.logs.push({namespace, fields, args});
  }

  setFilters(filters: string[]): void {
    this.filters = filters;
  }

  reset(): void {
    this.filters = [];
    this.logs = [];
  }
}

describe('LoggerHelper', () => {
  let sink: TestLogSink;
  let harness: OtelHarness;

  const dynamicArgs: AttemptTraceContext = {
    clientName: 'StorageClient',
    methodName: 'GetObject',
    apiName: 'google.storage.v2.Storage',
    rpcType: 'grpc',
  };

  const staticArgs: StaticTraceContext = {
    gcpClientService: 'storage',
    gcpVersion: '1.2.3',
    gcpRepo: DEFAULT_GCP_REPO,
    gcpArtifact: '@google-cloud/storage',
  };

  beforeEach(() => {
    sink = new TestLogSink();
    loggingUtils.setBackend(sink);
    harness = new OtelHarness();
    harness.setup();
  });

  afterEach(() => {
    loggingUtils.setBackend(null);
    harness.teardown();
  });

  describe('getGaxLogger', () => {
    it('uses the provided service name or defaults to google-gax', () => {
      const infoSeverity = 'INFO' as loggingUtils.LogSeverity;
      getGaxLogger('storage')({severity: infoSeverity}, 'msg');
      getGaxLogger()({severity: infoSeverity}, 'fallback');
      getGaxLogger('')({severity: infoSeverity}, 'empty');

      assert.strictEqual(sink.logs.length, 3);
      assert.strictEqual(sink.logs[0].namespace, 'storage');
      assert.strictEqual(sink.logs[1].namespace, 'google-gax');
      assert.strictEqual(sink.logs[2].namespace, 'google-gax');
    });
  });

  describe('buildLogAttributes', () => {
    it('populates client, RPC, error, and ErrorInfo attributes for gRPC errors', () => {
      const err = Object.assign(
        new GoogleError('3 INVALID_ARGUMENT: wrapper'),
        {
          code: Status.INVALID_ARGUMENT,
          details: 'Field name is invalid',
          reason: 'INVALID_FIELD',
          domain: 'googleapis.com',
          errorInfoMetadata: {
            service: 'storage.googleapis.com',
            field: 'bucket',
          },
          statusDetails: [{field: 'bucket'}],
        },
      );

      const attributes = buildLogAttributes(err, dynamicArgs, staticArgs);

      assert.deepStrictEqual(attributes, {
        'gcp.client.service': 'storage',
        'gcp.client.version': '1.2.3',
        'gcp.client.repo': DEFAULT_GCP_REPO,
        'gcp.client.artifact': '@google-cloud/storage',
        'gcp.client.language': 'node',
        'rpc.system.name': 'grpc',
        'rpc.method': 'google.storage.v2.Storage/GetObject',
        'url.domain': 'storage.googleapis.com',
        'rpc.response.status_code': 'INVALID_ARGUMENT',
        'error.type': 'INVALID_FIELD',
        'gcp.errors.domain': 'googleapis.com',
        'gcp.errors.metadata.service': 'storage.googleapis.com',
        'gcp.errors.metadata.field': 'bucket',
      });
    });

    it('populates HTTP status code and omits undefined optional attributes', () => {
      const httpErr = Object.assign(new GoogleError('Not Found'), {
        httpStatusCode: 404,
      });

      const attributes = buildLogAttributes(
        httpErr,
        {
          clientName: 'StorageClient',
          methodName: '',
          rpcType: 'http',
        },
        {},
      );

      assert.deepStrictEqual(attributes, {
        'gcp.client.language': 'node',
        'rpc.system.name': 'http',
        'http.response.status_code': 404,
        'error.type': '404',
      });
      assert.strictEqual('gcp.client.service' in attributes, false);
      assert.strictEqual('rpc.method' in attributes, false);
      assert.strictEqual('rpc.response.status_code' in attributes, false);
      assert.strictEqual('gcp.errors.domain' in attributes, false);
      assert.strictEqual('exception.type' in attributes, false);
      assert.strictEqual('exception.message' in attributes, false);
      assert.strictEqual('exception.stacktrace' in attributes, false);
    });

    it('handles client-side errors and non-Error throws safely', () => {
      const clientErr = new TypeError('invalid argument');
      const clientAttrs = buildLogAttributes(
        clientErr,
        dynamicArgs,
        staticArgs,
      );
      assert.strictEqual(clientAttrs['error.type'], 'TypeError');
      assert.strictEqual('rpc.response.status_code' in clientAttrs, false);

      const primitiveAttrs = buildLogAttributes(
        'string failure',
        dynamicArgs,
        staticArgs,
      );
      assert.strictEqual(primitiveAttrs['error.type'], 'INTERNAL');
    });
  });

  describe('logCall', () => {
    it('does not log when a promise, callback, stream, or synchronous call succeeds', async () => {
      const asyncResult = await logCall(dynamicArgs, staticArgs, async () => ({
        ok: true,
      }));
      assert.deepStrictEqual(asyncResult, {ok: true});

      const syncResult = logCall(dynamicArgs, staticArgs, () => 42);
      assert.strictEqual(syncResult, 42);

      let callbackResult: unknown;
      logCall(
        dynamicArgs,
        staticArgs,
        loggedCallback => {
          loggedCallback!(null, {cb: true});
          return undefined as unknown as ResultTuple;
        },
        false,
        (_err, res) => {
          callbackResult = res;
        },
      );
      assert.deepStrictEqual(callbackResult, {cb: true});

      const stream = new EventEmitter();
      logCall(dynamicArgs, staticArgs, () => stream, true);
      stream.emit('end');

      const writable = new Writable({
        objectMode: true,
        write(_chunk, _enc, cb) {
          cb();
        },
      });
      logCall(dynamicArgs, staticArgs, () => writable, true);
      writable.end();
      await new Promise<void>(resolve => setImmediate(resolve));

      assert.strictEqual(sink.logs.length, 0);
    });

    it('emits a single WARNING log with only the expected attributes when a promise or OngoingCallPromise rejects', async () => {
      const err = Object.assign(new GoogleError('Permission denied'), {
        code: Status.PERMISSION_DENIED,
        details: 'Permission denied',
        reason: 'IAM_PERMISSION_DENIED',
        domain: 'googleapis.com',
        errorInfoMetadata: {
          permission: 'storage.objects.get',
        },
        statusDetails: [{permission: 'storage.objects.get'}],
        metadata: {'x-request-id': 'req-123'},
      });

      await assert.rejects(
        async () => {
          await logCall(dynamicArgs, staticArgs, async () => {
            throw err;
          });
        },
        (caught: unknown) => caught === err,
      );

      assert.strictEqual(sink.logs.length, 1);
      const entry = sink.logs[0];
      assert.strictEqual(entry.namespace, 'storage');
      assert.strictEqual(entry.fields.severity, 'WARNING');
      assert.strictEqual(entry.fields.telemetryTraceId, undefined);
      assert.strictEqual(entry.fields.telemetrySpanId, undefined);
      assert.deepStrictEqual(entry.args, [
        'Client API call failed: %s',
        'Permission denied',
      ]);
      const other = entry.fields.other as LogPayload;
      assert.deepStrictEqual(other, {
        'gcp.client.service': 'storage',
        'gcp.client.version': '1.2.3',
        'gcp.client.repo': DEFAULT_GCP_REPO,
        'gcp.client.artifact': '@google-cloud/storage',
        'gcp.client.language': 'node',
        'rpc.system.name': 'grpc',
        'rpc.method': 'google.storage.v2.Storage/GetObject',
        'url.domain': 'storage.googleapis.com',
        'rpc.response.status_code': 'PERMISSION_DENIED',
        'error.type': 'IAM_PERMISSION_DENIED',
        'gcp.errors.domain': 'googleapis.com',
        'gcp.errors.metadata.permission': 'storage.objects.get',
        'exception.type': 'GoogleError',
        'exception.message': 'Permission denied',
        'exception.stacktrace':
          'status_details: [{"permission":"storage.objects.get"}]\nmetadata: {"x-request-id":"req-123"}',
      });
      assert.strictEqual('response.payload' in other, false);

      // Also supports OngoingCallPromise wrappers.
      sink.reset();
      const ongoing = new OngoingCallPromise();
      logCall(dynamicArgs, staticArgs, () => ongoing);
      ongoing.callback(err);
      await assert.rejects(() => ongoing.promise);
      assert.strictEqual(sink.logs.length, 1);
    });

    it('emits a single WARNING log and rethrows when fn throws synchronously', () => {
      const syncErr = new TypeError('sync failure');
      assert.throws(
        () =>
          logCall(dynamicArgs, staticArgs, () => {
            throw syncErr;
          }),
        syncErr,
      );

      assert.strictEqual(sink.logs.length, 1);
      assert.strictEqual(sink.logs[0].fields.severity, 'WARNING');
      assert.deepStrictEqual(sink.logs[0].args, [
        'Client API call failed: %s',
        'sync failure',
      ]);
      const other = sink.logs[0].fields.other as LogPayload;
      assert.strictEqual(other['exception.type'], 'TypeError');
      assert.strictEqual(other['exception.message'], 'sync failure');
      assert.strictEqual(other['exception.stacktrace'], syncErr.stack);
    });

    it('emits a single WARNING log on callback error and preserves this and arguments', done => {
      const err = new GoogleError('callback failure');
      let invokedCallback: APICallback | undefined;
      const holder = {
        marker: 'ctx',
        handler(
          this: unknown,
          receivedErr: GoogleError | null | undefined,
          response?: ResponseType,
          next?: NextPageRequestType,
          rawResponse?: RawResponseType,
        ) {
          assert.strictEqual(this, holder);
          assert.strictEqual(receivedErr, err);
          assert.deepStrictEqual(response, {partial: true});
          assert.strictEqual(next, 'NEXT');
          assert.strictEqual(rawResponse, 'RAW');

          assert.strictEqual(sink.logs.length, 1);
          assert.strictEqual(sink.logs[0].fields.severity, 'WARNING');
          assert.deepStrictEqual(sink.logs[0].args, [
            'Client API call failed: %s',
            'callback failure',
          ]);
          done();
        },
      };

      logCall(
        dynamicArgs,
        staticArgs,
        loggedCallback => {
          invokedCallback = loggedCallback;
          return undefined as unknown as ResultTuple;
        },
        false,
        holder.handler,
      );

      setImmediate(() => {
        invokedCallback!.call(
          holder,
          err,
          {partial: true} as ResponseType,
          'NEXT' as unknown as NextPageRequestType,
          'RAW' as unknown as RawResponseType,
        );
      });
    });

    it('does not log user callback exceptions thrown after a successful RPC', () => {
      const userBug = new Error('user callback bug');
      assert.throws(
        () =>
          logCall(
            dynamicArgs,
            staticArgs,
            loggedCallback => {
              loggedCallback!(null, {ok: true});
              return undefined as unknown as ResultTuple;
            },
            false,
            () => {
              throw userBug;
            },
          ),
        userBug,
      );

      assert.strictEqual(sink.logs.length, 0);
    });

    it('emits a single WARNING log on stream error and cleans up stream listeners', () => {
      const stream = new EventEmitter();
      const returned = logCall(dynamicArgs, staticArgs, () => stream, true);
      assert.strictEqual(returned, stream);

      const streamErr = new GoogleError('stream broken');
      stream.emit('error', streamErr);

      assert.strictEqual(sink.logs.length, 1);
      assert.deepStrictEqual(sink.logs[0].args, [
        'Client API call failed: %s',
        'stream broken',
      ]);
      assert.strictEqual(stream.listenerCount('error'), 0);
      assert.strictEqual(stream.listenerCount('end'), 0);
      assert.strictEqual(stream.listenerCount('close'), 0);
    });

    it('enforces the one-time latch when multiple error signals fire for the same call', () => {
      const stream = new EventEmitter();
      let receivedCallback: APICallback | undefined;
      let userCallbackCalls = 0;

      logCall(
        dynamicArgs,
        staticArgs,
        loggedCallback => {
          receivedCallback = loggedCallback;
          return stream;
        },
        true,
        () => {
          userCallbackCalls++;
        },
      );

      const firstErr = new GoogleError('first error');
      const secondErr = new GoogleError('second error');

      receivedCallback!(firstErr);
      receivedCallback!(secondErr);
      stream.emit('error', secondErr);

      assert.strictEqual(userCallbackCalls, 2);
      assert.strictEqual(sink.logs.length, 1);
      assert.deepStrictEqual(sink.logs[0].args, [
        'Client API call failed: %s',
        'first error',
      ]);
    });

    it('attaches telemetryTraceId and telemetrySpanId when an OpenTelemetry span is active', async () => {
      const err = new GoogleError('traced failure');

      await assert.rejects(async () => {
        await traceCall(dynamicArgs, staticArgs, () =>
          traceAttempt(dynamicArgs, staticArgs, () =>
            logCall(dynamicArgs, staticArgs, async () => {
              throw err;
            }),
          ),
        );
      });

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      const attemptSpan = spans[0];

      assert.strictEqual(sink.logs.length, 1);
      assert.strictEqual(
        sink.logs[0].fields.telemetryTraceId,
        attemptSpan.spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.telemetrySpanId,
        attemptSpan.spanContext().spanId,
      );
    });
  });
});
