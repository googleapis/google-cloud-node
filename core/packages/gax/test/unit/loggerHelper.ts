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
import * as grpc from '@grpc/grpc-js';
import {context, ROOT_CONTEXT, Span, trace} from '@opentelemetry/api';
import {GoogleAuth, PassThroughClient} from 'google-auth-library';
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as sinon from 'sinon';
import * as loggingUtils from 'google-logging-utils';
import {
  buildLogAttributes,
  getGaxLogger,
  logCall,
  logNetworkAttempt,
  LogPayload,
} from '../../src/observability/LoggerHelper';
import {traceAttempt, traceCall} from '../../src/observability/TracerHelper';
import {
  AttemptTraceContext,
  DEFAULT_GCP_REPO,
  resolveStaticTraceContext,
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
import {GrpcClient as FallbackGrpcClient} from '../../src/fallback';
import {CallSettings} from '../../src/gax';
import {GoogleError} from '../../src/googleError';
import {Status} from '../../src/status';
import echoProtoJson = require('../fixtures/echo.json');
import {OtelHarness} from './otelHarness';
import {setMockFallbackError, setMockFallbackHttpResponse} from './utils';

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
    serverAddress: 'storage.googleapis.com',
  };

  beforeEach(() => {
    sink = new TestLogSink();
    loggingUtils.setBackend(sink);
    harness = new OtelHarness();
    harness.setup();
  });

  afterEach(() => {
    delete process.env.GOOGLE_SDK_NODE_LOGGING;
    sinon.restore();
    loggingUtils.setBackend(undefined);
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
      assert.strictEqual(getGaxLogger('storage'), getGaxLogger('storage'));
    });

    it('delivers logs via fallback NodeBackend when no backend is cached and GOOGLE_SDK_NODE_LOGGING is unset', () => {
      loggingUtils.setBackend(undefined);
      delete process.env.GOOGLE_SDK_NODE_LOGGING;
      assert.strictEqual(
        loggingUtils.log('storage'),
        loggingUtils.placeholder,
        'precondition: bare loggingUtils.log hits no-op placeholder',
      );

      const stderrStub = sinon.stub(console, 'error');
      const warnSeverity = 'WARNING' as loggingUtils.LogSeverity;
      getGaxLogger('storage')(
        {severity: warnSeverity, other: {'rpc.system.name': 'grpc'}},
        'Client API call failed: %s',
        'boom',
      );

      assert.strictEqual(stderrStub.callCount, 1);
      // Does not enable logging globally for other non-GAX namespaces.
      assert.strictEqual(loggingUtils.log('auth'), loggingUtils.placeholder);
    });

    it('delivers logs without duplication when GOOGLE_SDK_NODE_LOGGING is unmatched, false, or wildcard', () => {
      const stderrStub = sinon.stub(console, 'error');
      const warnSeverity = 'WARNING' as loggingUtils.LogSeverity;

      for (const envValue of [
        'spanner',
        'false',
        'true',
        '1',
        '*',
        'storage',
      ]) {
        stderrStub.resetHistory();
        loggingUtils.setBackend(undefined);
        process.env.GOOGLE_SDK_NODE_LOGGING = envValue;
        // Simulate GAPIC client field initialization (`this._log = logging.log(service)`)
        // populating logging-utils's default NodeBackend before GAX logs.
        loggingUtils.log('storage');

        getGaxLogger('storage')(
          {severity: warnSeverity},
          'Client API call failed: %s',
          `err-${envValue}`,
        );
        assert.strictEqual(
          stderrStub.callCount,
          1,
          `expected exactly 1 stderr log when GOOGLE_SDK_NODE_LOGGING=${envValue}`,
        );
      }

      // Custom setBackend(sink) receives the log once with zero stderr fallback even when env filter mismatches.
      stderrStub.resetHistory();
      sink.reset();
      process.env.GOOGLE_SDK_NODE_LOGGING = 'spanner';
      loggingUtils.setBackend(sink);
      getGaxLogger('storage')({severity: warnSeverity}, 'custom sink msg');
      assert.strictEqual(sink.logs.length, 1);
      assert.strictEqual(stderrStub.callCount, 0);

      // Explicit setBackend(null) disables output when GOOGLE_SDK_NODE_LOGGING is set.
      stderrStub.resetHistory();
      process.env.GOOGLE_SDK_NODE_LOGGING = '*';
      loggingUtils.setBackend(null);
      getGaxLogger('storage')({severity: warnSeverity}, 'silenced msg');
      assert.strictEqual(stderrStub.callCount, 0);
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
        'server.address': 'storage.googleapis.com',
        'rpc.response.status_code': 'INVALID_ARGUMENT',
        'error.type': 'INVALID_FIELD',
        'gcp.errors.domain': 'googleapis.com',
        'gcp.errors.metadata.service': 'storage.googleapis.com',
        'gcp.errors.metadata.field': 'bucket',
        'exception.type': 'GoogleError',
        'exception.message': 'Field name is invalid',
        'exception.stacktrace': err.stack,
      });
    });

    it('populates HTTP and normalized gRPC status codes and omits undefined optional attributes', () => {
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
        'rpc.response.status_code': 'NOT_FOUND',
        'http.response.status_code': 404,
        'error.type': '404',
        'exception.type': 'GoogleError',
        'exception.message': 'Not Found',
        'exception.stacktrace': httpErr.stack,
      });
      assert.strictEqual('gcp.client.service' in attributes, false);
      assert.strictEqual('rpc.method' in attributes, false);
      assert.strictEqual('server.address' in attributes, false);
      assert.strictEqual('gcp.errors.domain' in attributes, false);

      // Prefers explicit gRPC status code parsed from Google HTTP error body over generic HTTP bucket.
      const specificHttpErr = Object.assign(
        new GoogleError('Failed precondition'),
        {
          httpStatusCode: 400,
          code: Status.FAILED_PRECONDITION,
        },
      );
      const specificAttrs = buildLogAttributes(
        specificHttpErr,
        {
          clientName: 'StorageClient',
          methodName: 'GetObject',
          rpcType: 'http',
          serverAddress: 'custom.storage.googleapis.com:8443',
        },
        {},
      );
      assert.strictEqual(
        specificAttrs['rpc.response.status_code'],
        'FAILED_PRECONDITION',
      );
      assert.strictEqual(specificAttrs['http.response.status_code'], 400);
      assert.strictEqual(
        specificAttrs['server.address'],
        'custom.storage.googleapis.com',
      );

      // Omits rpc.response.status_code on HTTP timeouts and pre-response transport
      // errors where fallbackServiceStub sets a synthetic retry Status code without httpStatusCode.
      const httpTimeoutErr = Object.assign(
        new GoogleError(
          'Deadline exceeded: GetObject did not respond within 1000 milliseconds.',
        ),
        {
          code: Status.DEADLINE_EXCEEDED,
        },
      );
      const timeoutAttrs = buildLogAttributes(
        httpTimeoutErr,
        {
          clientName: 'StorageClient',
          methodName: 'GetObject',
          rpcType: 'http',
        },
        staticArgs,
      );
      assert.strictEqual(timeoutAttrs['error.type'], 'CLIENT_TIMEOUT');
      assert.strictEqual('rpc.response.status_code' in timeoutAttrs, false);
      assert.strictEqual('http.response.status_code' in timeoutAttrs, false);

      const econnRefusedCause = Object.assign(
        new Error('connect ECONNREFUSED'),
        {
          code: 'ECONNREFUSED',
        },
      );
      const httpTransportErr = Object.assign(
        new GoogleError('connect ECONNREFUSED', {cause: econnRefusedCause}),
        {
          code: Status.UNAVAILABLE,
        },
      );
      const transportAttrs = buildLogAttributes(
        httpTransportErr,
        {
          clientName: 'StorageClient',
          methodName: 'GetObject',
          rpcType: 'http',
        },
        staticArgs,
      );
      assert.strictEqual(
        transportAttrs['error.type'],
        'CLIENT_CONNECTION_ERROR',
      );
      assert.strictEqual('rpc.response.status_code' in transportAttrs, false);
      assert.strictEqual('http.response.status_code' in transportAttrs, false);
    });

    it('handles client-side errors and non-Error throws safely', () => {
      const clientErr = new TypeError('invalid argument');
      const clientAttrs = buildLogAttributes(
        clientErr,
        dynamicArgs,
        staticArgs,
      );
      assert.strictEqual(clientAttrs['error.type'], 'TypeError');
      assert.strictEqual(clientAttrs['exception.type'], 'TypeError');
      assert.strictEqual(clientAttrs['exception.message'], 'invalid argument');
      assert.strictEqual(clientAttrs['exception.stacktrace'], clientErr.stack);
      assert.strictEqual(clientAttrs['url.domain'], 'storage.googleapis.com');
      assert.strictEqual('server.address' in clientAttrs, false);
      assert.strictEqual('rpc.response.status_code' in clientAttrs, false);

      const dnsErr = Object.assign(new Error('getaddrinfo ENOTFOUND'), {
        code: 'ENOTFOUND',
      });
      const dnsAttrs = buildLogAttributes(dnsErr, dynamicArgs, staticArgs);
      assert.strictEqual(dnsAttrs['error.type'], 'CLIENT_CONNECTION_ERROR');
      assert.strictEqual(dnsAttrs['url.domain'], 'storage.googleapis.com');
      assert.strictEqual('server.address' in dnsAttrs, false);

      const httpClientAttrs = buildLogAttributes(
        clientErr,
        {...dynamicArgs, rpcType: 'http'},
        staticArgs,
      );
      assert.strictEqual(httpClientAttrs['error.type'], 'TypeError');
      assert.strictEqual('rpc.response.status_code' in httpClientAttrs, false);
      assert.strictEqual('http.response.status_code' in httpClientAttrs, false);

      const primitiveAttrs = buildLogAttributes(
        'string failure',
        dynamicArgs,
        staticArgs,
      );
      assert.strictEqual(primitiveAttrs['error.type'], 'INTERNAL');
      assert.strictEqual(primitiveAttrs['exception.type'], 'Error');
      assert.strictEqual(primitiveAttrs['exception.message'], 'string failure');
      assert.strictEqual('exception.stacktrace' in primitiveAttrs, false);
      assert.strictEqual('server.address' in primitiveAttrs, false);
    });

    it('uses real servicePath for cloud*.googleapis.com APIs and never fabricates url.domain or server.address when servicePath is unset', () => {
      const serverErr = Object.assign(new GoogleError('Unavailable'), {
        code: Status.UNAVAILABLE,
      });
      const kmsDynamic: AttemptTraceContext = {
        clientName: 'KeyManagementServiceClient',
        methodName: 'GetKeyRing',
        apiName: 'google.cloud.kms.v1.KeyManagementService',
        rpcType: 'grpc',
      };

      // With servicePath set, emits canonical cloudkms.googleapis.com (never bogus kms.googleapis.com).
      const withEndpoint = buildLogAttributes(
        serverErr,
        kmsDynamic,
        resolveStaticTraceContext(
          new CallSettings({
            apiName: kmsDynamic.apiName,
            otherArgs: {servicePath: 'cloudkms.googleapis.com'},
          }),
        ),
      );
      assert.strictEqual(withEndpoint['gcp.client.service'], 'kms');
      assert.strictEqual(withEndpoint['url.domain'], 'cloudkms.googleapis.com');
      assert.strictEqual(
        withEndpoint['server.address'],
        'cloudkms.googleapis.com',
      );

      // Without servicePath, omits both url.domain and server.address cleanly.
      const withoutEndpoint = buildLogAttributes(
        serverErr,
        kmsDynamic,
        resolveStaticTraceContext(
          new CallSettings({apiName: kmsDynamic.apiName}),
        ),
      );
      assert.strictEqual(withoutEndpoint['gcp.client.service'], 'kms');
      assert.strictEqual('url.domain' in withoutEndpoint, false);
      assert.strictEqual('server.address' in withoutEndpoint, false);

      // Even when urlDomain is set explicitly without serverAddress, server.address is not fabricated in logs.
      const domainOnly = buildLogAttributes(serverErr, kmsDynamic, {
        gcpClientService: 'kms',
        urlDomain: 'cloudkms.googleapis.com',
      });
      assert.strictEqual(domainOnly['url.domain'], 'cloudkms.googleapis.com');
      assert.strictEqual('server.address' in domainOnly, false);
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
        'server.address': 'storage.googleapis.com',
        'rpc.response.status_code': 'PERMISSION_DENIED',
        'error.type': 'IAM_PERMISSION_DENIED',
        'gcp.errors.domain': 'googleapis.com',
        'gcp.errors.metadata.permission': 'storage.objects.get',
        'exception.type': 'GoogleError',
        'exception.message': 'Permission denied',
        'exception.stacktrace': err.stack,
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

      sink.reset();
      const nonErrorObj = {name: 123, message: 'bad name throw'};
      assert.throws(
        () =>
          logCall(dynamicArgs, staticArgs, () => {
            throw nonErrorObj;
          }),
        (caught: unknown) => caught === nonErrorObj,
      );
      assert.strictEqual(sink.logs.length, 1);
      const nonErrorOther = sink.logs[0].fields.other as LogPayload;
      assert.strictEqual(nonErrorOther['exception.type'], 'Error');
      assert.strictEqual(nonErrorOther['exception.message'], 'bad name throw');
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

    it('attaches the T3 client request span telemetryTraceId and telemetrySpanId when active', async () => {
      const err = new GoogleError('traced failure');

      await assert.rejects(async () => {
        await traceCall(dynamicArgs, staticArgs, () =>
          logCall(dynamicArgs, staticArgs, () =>
            traceAttempt(dynamicArgs, staticArgs, async () => {
              throw err;
            }),
          ),
        );
      });

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      const attemptSpan = spans[0];
      const clientRequestSpan = spans[1];
      assert.notStrictEqual(
        clientRequestSpan.spanContext().spanId,
        attemptSpan.spanContext().spanId,
      );

      assert.strictEqual(sink.logs.length, 1);
      assert.strictEqual(
        sink.logs[0].fields.telemetryTraceId,
        clientRequestSpan.spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.telemetrySpanId,
        clientRequestSpan.spanContext().spanId,
      );
    });

    it('falls back to the active outer OpenTelemetry span when GAX tracing is disabled', async () => {
      const tracer = trace.getTracer('customer-app');
      const err = new GoogleError('app-traced failure');
      let outerSpan: Span | undefined;

      await assert.rejects(async () => {
        await tracer.startActiveSpan('http-handler', async span => {
          outerSpan = span;
          try {
            await logCall(dynamicArgs, staticArgs, async () => {
              throw err;
            });
          } finally {
            span.end();
          }
        });
      });

      assert.ok(outerSpan);
      assert.strictEqual(sink.logs.length, 1);
      assert.strictEqual(
        sink.logs[0].fields.telemetryTraceId,
        outerSpan.spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.telemetrySpanId,
        outerSpan.spanContext().spanId,
      );

      // Also preserves initialContext outer span when async callback loses active context.
      sink.reset();
      let capturedCallback: APICallback | undefined;
      let initialOuterSpan: Span | undefined;
      tracer.startActiveSpan('lost-context-handler', span => {
        initialOuterSpan = span;
        logCall(
          dynamicArgs,
          staticArgs,
          loggedCallback => {
            capturedCallback = loggedCallback;
            return undefined as unknown as ResultTuple;
          },
          false,
          () => {},
        );
        span.end();
      });

      assert.ok(initialOuterSpan);
      context.with(ROOT_CONTEXT, () => {
        capturedCallback!(err);
      });

      assert.strictEqual(sink.logs.length, 1);
      assert.strictEqual(
        sink.logs[0].fields.telemetryTraceId,
        initialOuterSpan.spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.telemetrySpanId,
        initialOuterSpan.spanContext().spanId,
      );
    });

    it('fails open inside logOnce without masking or altering application errors when trace or attribute resolution throws', async () => {
      const contextUtilModule = require('../../src/observability/contextUtil');
      const appErr = Object.assign(new GoogleError('Original failure'), {
        code: Status.UNAVAILABLE,
      });

      // 1. Throwing getActiveTraceContext across promise, callback, stream, and sync boundaries.
      sinon
        .stub(contextUtilModule, 'getActiveTraceContext')
        .throws(new Error('otel context exploded'));

      await assert.rejects(
        () =>
          logCall(dynamicArgs, staticArgs, async () => {
            throw appErr;
          }),
        (caught: unknown) => caught === appErr,
      );

      let cbErr: unknown;
      logCall(
        dynamicArgs,
        staticArgs,
        loggedCb => {
          loggedCb!(appErr);
          return undefined as unknown as ResultTuple;
        },
        false,
        err => {
          cbErr = err;
        },
      );
      assert.strictEqual(cbErr, appErr);

      const stream = new EventEmitter();
      let streamErr: unknown;
      stream.on('error', err => {
        streamErr = err;
      });
      logCall(dynamicArgs, staticArgs, () => stream, true);
      stream.emit('error', appErr);
      assert.strictEqual(streamErr, appErr);

      assert.throws(
        () =>
          logCall(dynamicArgs, staticArgs, () => {
            throw appErr;
          }),
        (caught: unknown) => caught === appErr,
      );

      sinon.restore();

      // 2. Hostile error getter causing buildLogAttributes to throw never masks the error.
      const hostileErr = new Error('hostile');
      Object.defineProperty(hostileErr, 'stack', {
        get() {
          throw new Error('stack getter boom');
        },
      });
      await assert.rejects(
        () =>
          logCall(dynamicArgs, staticArgs, async () => {
            throw hostileErr;
          }),
        (caught: unknown) => caught === hostileErr,
      );
    });
  });

  describe('logNetworkAttempt', () => {
    it('does not log when an attempt succeeds across promise, callback, stream, or sync boundaries', async () => {
      const asyncResult = await logNetworkAttempt(
        dynamicArgs,
        staticArgs,
        async () => ({ok: true}),
      );
      assert.deepStrictEqual(asyncResult, {ok: true});

      const syncResult = logNetworkAttempt(dynamicArgs, staticArgs, () => 42);
      assert.strictEqual(syncResult, 42);

      let callbackResult: unknown;
      logNetworkAttempt(
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
      logNetworkAttempt(dynamicArgs, staticArgs, () => stream, true);
      stream.emit('end');

      assert.strictEqual(sink.logs.length, 0);
    });

    it('serializes populated grpc.Metadata via getMap and omits empty Metadata on pre-connection failures', async () => {
      const metadata = new grpc.Metadata();
      metadata.set('x-goog-request-id', 'req-123');
      metadata.set('trace-bin', Buffer.from('abc'));
      const errWithMeta = Object.assign(new GoogleError('Unavailable'), {
        code: Status.UNAVAILABLE,
        metadata,
      });

      await assert.rejects(
        async () => {
          await logNetworkAttempt(dynamicArgs, staticArgs, async () => {
            throw errWithMeta;
          });
        },
        (caught: unknown) => caught === errWithMeta,
      );

      assert.strictEqual(sink.logs.length, 1);
      const entry = sink.logs[0];
      assert.strictEqual(entry.namespace, 'storage');
      assert.strictEqual(entry.fields.severity, 'DEBUG');
      assert.deepStrictEqual(entry.args, [
        'RPC attempt failed: %s',
        'Unavailable',
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
        'server.address': 'storage.googleapis.com',
        'rpc.response.status_code': 'UNAVAILABLE',
        'error.type': 'UNAVAILABLE',
        'exception.type': 'GoogleError',
        'exception.message': 'Unavailable',
        'exception.stacktrace': errWithMeta.stack,
        'response.payload':
          '{"x-goog-request-id":"req-123","trace-bin":"YWJj"}',
      });

      sink.reset();
      const preConnectGrpcErr = Object.assign(
        new GoogleError('14 UNAVAILABLE: No connection established'),
        {
          code: Status.UNAVAILABLE,
          metadata: new grpc.Metadata(),
          cause: Object.assign(new Error('connect ECONNREFUSED 127.0.0.1'), {
            code: 'ECONNREFUSED',
          }),
        },
      );
      await assert.rejects(
        async () => {
          await logNetworkAttempt(dynamicArgs, staticArgs, async () => {
            throw preConnectGrpcErr;
          });
        },
        (caught: unknown) => caught === preConnectGrpcErr,
      );

      assert.strictEqual(sink.logs.length, 1);
      const preConnectOther = sink.logs[0].fields.other as LogPayload;
      assert.strictEqual('response.payload' in preConnectOther, false);
      assert.strictEqual(
        preConnectOther['error.type'],
        'CLIENT_CONNECTION_ERROR',
      );

      sink.reset();
      const errWithoutMeta = new TypeError('client error');
      assert.throws(
        () =>
          logNetworkAttempt(dynamicArgs, staticArgs, () => {
            throw errWithoutMeta;
          }),
        errWithoutMeta,
      );

      assert.strictEqual(sink.logs.length, 1);
      assert.strictEqual(sink.logs[0].fields.severity, 'DEBUG');
      assert.deepStrictEqual(sink.logs[0].args, [
        'RPC attempt failed: %s',
        'client error',
      ]);
      const otherWithoutMeta = sink.logs[0].fields.other as LogPayload;
      assert.strictEqual('response.payload' in otherWithoutMeta, false);
      assert.strictEqual('server.address' in otherWithoutMeta, false);
      assert.strictEqual(otherWithoutMeta['exception.type'], 'TypeError');
      assert.strictEqual(otherWithoutMeta['exception.message'], 'client error');
      assert.strictEqual(
        otherWithoutMeta['exception.stacktrace'],
        errWithoutMeta.stack,
      );
    });

    it('emits response.payload on HTTP REST error responses and omits it on empty or transport failures', async () => {
      const httpArgs: AttemptTraceContext = {
        ...dynamicArgs,
        rpcType: 'http',
      };
      const invokeEchoFallback = async (
        configure: (gaxGrpc: FallbackGrpcClient) => void,
      ): Promise<GoogleError> => {
        const gaxGrpc = new FallbackGrpcClient({
          auth: new GoogleAuth({authClient: new PassThroughClient()}),
          fallback: 'rest',
        });
        const protos = gaxGrpc.loadProto(echoProtoJson);
        const echoService = protos.lookupService('Echo');
        configure(gaxGrpc);
        const echoStub = await gaxGrpc.createStub(echoService, {
          servicePath: 'foo.example.com',
          port: 443,
        });
        return new Promise<GoogleError>((resolve, reject) => {
          echoStub.echo({content: 'test'}, {}, {}, (err?: Error) => {
            if (err instanceof GoogleError) {
              resolve(err);
            } else {
              reject(new Error(`Expected GoogleError, got ${err}`));
            }
          });
        });
      };

      const json503Body = JSON.stringify({
        error: {
          code: 503,
          message: 'Backend unavailable',
          status: 'UNAVAILABLE',
        },
      });
      const err503 = await invokeEchoFallback(gaxGrpc =>
        setMockFallbackHttpResponse(
          gaxGrpc,
          new Response(json503Body, {status: 503}),
        ),
      );
      await assert.rejects(() =>
        logNetworkAttempt(httpArgs, staticArgs, async () => {
          throw err503;
        }),
      );
      assert.strictEqual(sink.logs.length, 1);
      const other503 = sink.logs[0].fields.other as LogPayload;
      assert.strictEqual(other503['http.response.status_code'], 503);
      assert.strictEqual(other503['rpc.response.status_code'], 'UNAVAILABLE');
      assert.strictEqual(other503['response.payload'], json503Body);

      sink.reset();
      const json403Body = JSON.stringify({
        error: {
          code: 403,
          message: 'Permission denied reading secret projects/p/secrets/s',
          status: 'PERMISSION_DENIED',
        },
      });
      const err403 = await invokeEchoFallback(gaxGrpc =>
        setMockFallbackError(
          gaxGrpc,
          Object.assign(new Error(json403Body), {
            status: 403,
            response: {
              status: 403,
              data: '<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.',
            },
          }),
        ),
      );
      await assert.rejects(() =>
        logNetworkAttempt(httpArgs, staticArgs, async () => {
          throw err403;
        }),
      );
      const other403 = sink.logs[0].fields.other as LogPayload;
      assert.strictEqual(other403['http.response.status_code'], 403);
      assert.strictEqual(
        other403['rpc.response.status_code'],
        'PERMISSION_DENIED',
      );
      assert.strictEqual(other403['response.payload'], json403Body);

      sink.reset();
      const longHtml502 = `<html>${'x'.repeat(2048)}</html>`;
      const errHtml502 = await invokeEchoFallback(gaxGrpc =>
        setMockFallbackHttpResponse(
          gaxGrpc,
          new Response(longHtml502, {status: 502}),
        ),
      );
      await assert.rejects(() =>
        logNetworkAttempt(httpArgs, staticArgs, async () => {
          throw errHtml502;
        }),
      );
      const otherHtml502 = sink.logs[0].fields.other as LogPayload;
      assert.strictEqual(otherHtml502['response.payload'], longHtml502);

      sink.reset();
      const errEmpty502 = await invokeEchoFallback(gaxGrpc =>
        setMockFallbackHttpResponse(gaxGrpc, new Response(null, {status: 502})),
      );
      const errEmpty403 = await invokeEchoFallback(gaxGrpc =>
        setMockFallbackHttpResponse(gaxGrpc, new Response(null, {status: 403})),
      );
      const errTransport = await invokeEchoFallback(gaxGrpc =>
        setMockFallbackError(
          gaxGrpc,
          Object.assign(new Error('connect ECONNREFUSED'), {
            code: 'ECONNREFUSED',
          }),
        ),
      );
      for (const emptyErr of [errEmpty502, errEmpty403, errTransport]) {
        sink.reset();
        await assert.rejects(() =>
          logNetworkAttempt(httpArgs, staticArgs, async () => {
            throw emptyErr;
          }),
        );
        const otherEmpty = sink.logs[0].fields.other as LogPayload;
        assert.strictEqual('response.payload' in otherEmpty, false);
      }
    });

    it('captures the attempt span context and logs at most once across callback and stream failures', () => {
      const stream = new EventEmitter();
      let receivedCallback: APICallback | undefined;

      traceCall(dynamicArgs, staticArgs, () =>
        traceAttempt(dynamicArgs, staticArgs, () =>
          logNetworkAttempt(
            dynamicArgs,
            staticArgs,
            loggedCallback => {
              receivedCallback = loggedCallback;
              return stream;
            },
            true,
            () => {},
          ),
        ),
      );

      const attemptErr = new GoogleError('attempt failed');
      // Simulates HTTP streaming fallback invoking both callback(err) and stream.emit('error', err).
      receivedCallback!(attemptErr);
      stream.emit('error', attemptErr);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      const attemptSpan = spans[0];

      assert.strictEqual(sink.logs.length, 1);
      assert.strictEqual(sink.logs[0].fields.severity, 'DEBUG');
      assert.strictEqual(
        sink.logs[0].fields.telemetryTraceId,
        attemptSpan.spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.telemetrySpanId,
        attemptSpan.spanContext().spanId,
      );
      assert.deepStrictEqual(sink.logs[0].args, [
        'RPC attempt failed: %s',
        'attempt failed',
      ]);

      sink.reset();
      harness.reset();
      const streamOnly = new EventEmitter();
      streamOnly.on('error', () => {});
      traceCall(dynamicArgs, staticArgs, () =>
        traceAttempt(dynamicArgs, staticArgs, () =>
          logNetworkAttempt(dynamicArgs, staticArgs, () => streamOnly, true),
        ),
      );
      const streamErr = new GoogleError('stream attempt failed');
      streamOnly.emit('error', streamErr);
      streamOnly.emit('error', new GoogleError('duplicate stream error'));

      const streamSpans = harness.getSpans('google-gax');
      assert.strictEqual(streamSpans.length, 2);
      assert.strictEqual(sink.logs.length, 1);
      assert.strictEqual(
        sink.logs[0].fields.telemetryTraceId,
        streamSpans[0].spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.telemetrySpanId,
        streamSpans[0].spanContext().spanId,
      );
      assert.deepStrictEqual(sink.logs[0].args, [
        'RPC attempt failed: %s',
        'stream attempt failed',
      ]);
    });

    it('falls back to the active outer OpenTelemetry span when GAX tracing is disabled', async () => {
      const err = Object.assign(new GoogleError('Unavailable'), {
        code: Status.UNAVAILABLE,
      });
      const tracer = trace.getTracer('external-app');
      let outerSpan: Span | undefined;

      await assert.rejects(async () => {
        await tracer.startActiveSpan('http-handler', async span => {
          outerSpan = span;
          try {
            await logNetworkAttempt(dynamicArgs, staticArgs, async () => {
              throw err;
            });
          } finally {
            span.end();
          }
        });
      });

      assert.ok(outerSpan);
      assert.strictEqual(sink.logs.length, 1);
      assert.strictEqual(
        sink.logs[0].fields.telemetryTraceId,
        outerSpan.spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.telemetrySpanId,
        outerSpan.spanContext().spanId,
      );

      // Also preserves initialContext outer span when async callback loses active context.
      sink.reset();
      let capturedCallback: APICallback | undefined;
      let initialOuterSpan: Span | undefined;
      tracer.startActiveSpan('lost-context-attempt', span => {
        initialOuterSpan = span;
        logNetworkAttempt(
          dynamicArgs,
          staticArgs,
          loggedCallback => {
            capturedCallback = loggedCallback;
            return undefined as unknown as ResultTuple;
          },
          false,
          () => {},
        );
        span.end();
      });

      assert.ok(initialOuterSpan);
      context.with(ROOT_CONTEXT, () => {
        capturedCallback!(err);
      });

      assert.strictEqual(sink.logs.length, 1);
      assert.strictEqual(
        sink.logs[0].fields.telemetryTraceId,
        initialOuterSpan.spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.telemetrySpanId,
        initialOuterSpan.spanContext().spanId,
      );
    });
  });
});
