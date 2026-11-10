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
import {spawnSync} from 'child_process';
import {EventEmitter} from 'events';
import * as path from 'path';
import {Writable} from 'stream';
import {pathToFileURL} from 'url';
import * as grpc from '@grpc/grpc-js';
import {
  context,
  ROOT_CONTEXT,
  Span,
  trace,
  TraceFlags,
} from '@opentelemetry/api';
import {GoogleAuth, PassThroughClient} from 'google-auth-library';
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as sinon from 'sinon';
import * as loggingUtils from 'google-logging-utils';
import {
  buildLogAttributes,
  GaxLogFields,
  getGaxLogger,
  logCall,
  logNetworkAttempt,
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
  fields: GaxLogFields;
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
    this.logs.push({namespace, fields: fields as GaxLogFields, args});
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
        {
          severity: warnSeverity,
          'rpc.system.name': 'grpc',
        } as loggingUtils.LogFields,
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

      // Explicit setBackend(null) disables output both when GOOGLE_SDK_NODE_LOGGING is set and unset.
      stderrStub.resetHistory();
      process.env.GOOGLE_SDK_NODE_LOGGING = '*';
      loggingUtils.setBackend(null);
      getGaxLogger('storage')({severity: warnSeverity}, 'silenced msg');
      delete process.env.GOOGLE_SDK_NODE_LOGGING;
      getGaxLogger('storage')({severity: warnSeverity}, 'silenced unset msg');
      assert.strictEqual(stderrStub.callCount, 0);
    });

    it('never mutates backend prototypes and handles reentrant nested logging safely', () => {
      const stderrStub = sinon.stub(console, 'error');
      const warnSeverity = 'WARNING' as loggingUtils.LogSeverity;

      const nodeProto = Object.getPrototypeOf(
        loggingUtils.getNodeBackend(),
      ) as Record<string, unknown>;
      const structuredProto = Object.getPrototypeOf(
        loggingUtils.getStructuredBackend(),
      ) as Record<string, unknown>;
      const baseProto = Object.getPrototypeOf(nodeProto) as Record<
        string,
        unknown
      >;
      const origBaseLog = baseProto.log;

      process.env.GOOGLE_SDK_NODE_LOGGING = 'spanner';
      loggingUtils.setBackend(undefined);

      // Attach a synchronous `.on('log')` listener on `storage` that inspects
      // backend prototypes mid-dispatch and re-enters `getGaxLogger('bigquery')`.
      const storageUnderlying = loggingUtils.log('storage');
      let nestedTriggered = false;
      const onStorageLog = () => {
        assert.strictEqual(
          Object.prototype.hasOwnProperty.call(nodeProto, 'log'),
          false,
        );
        assert.strictEqual(
          Object.prototype.hasOwnProperty.call(structuredProto, 'log'),
          false,
        );
        assert.strictEqual(nodeProto.log, origBaseLog);
        assert.strictEqual(structuredProto.log, origBaseLog);
        assert.strictEqual(baseProto.log, origBaseLog);

        if (!nestedTriggered) {
          nestedTriggered = true;
          getGaxLogger('bigquery')(
            {severity: warnSeverity},
            'nested bigquery msg',
          );
        }
      };
      storageUnderlying.on('log', onStorageLog);

      try {
        getGaxLogger('storage')({severity: warnSeverity}, 'outer storage msg');
      } finally {
        storageUnderlying.instance.removeListener('log', onStorageLog);
      }

      assert.strictEqual(nestedTriggered, true);
      assert.strictEqual(
        stderrStub.callCount,
        2,
        'both outer storage and nested bigquery logs must be rescued once without prototype mutation',
      );
      assert.strictEqual(typeof loggingUtils.getBackend, 'function');
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
      assert.strictEqual(entry.fields.trace_id, undefined);
      assert.strictEqual(entry.fields.span_id, undefined);
      assert.strictEqual(entry.fields.trace_sampled, undefined);
      assert.strictEqual(entry.fields.other, undefined);
      assert.deepStrictEqual(entry.args, [
        'Client API call failed: %s',
        'Permission denied',
      ]);
      const {severity: _severity, ...attributes} = entry.fields;
      assert.strictEqual(_severity, 'WARNING');
      assert.deepStrictEqual(attributes, {
        'gcp.client.service': 'storage',
        'gcp.client.version': '1.2.3',
        'gcp.client.repo': DEFAULT_GCP_REPO,
        'gcp.client.artifact': '@google-cloud/storage',
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
      assert.strictEqual('response.payload' in entry.fields, false);

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
      assert.strictEqual(sink.logs[0].fields.other, undefined);
      assert.deepStrictEqual(sink.logs[0].args, [
        'Client API call failed: %s',
        'sync failure',
      ]);
      assert.strictEqual(sink.logs[0].fields['exception.type'], 'TypeError');
      assert.strictEqual(
        sink.logs[0].fields['exception.message'],
        'sync failure',
      );
      assert.strictEqual(
        sink.logs[0].fields['exception.stacktrace'],
        syncErr.stack,
      );

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
      assert.strictEqual(sink.logs[0].fields.other, undefined);
      assert.strictEqual(sink.logs[0].fields['exception.type'], 'Error');
      assert.strictEqual(
        sink.logs[0].fields['exception.message'],
        'bad name throw',
      );
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

    it('attaches the T3 client request span trace_id, span_id, and trace_sampled when active', async () => {
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
      assert.strictEqual(sink.logs[0].fields.other, undefined);
      assert.strictEqual(
        sink.logs[0].fields.trace_id,
        clientRequestSpan.spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.span_id,
        clientRequestSpan.spanContext().spanId,
      );
      assert.strictEqual(sink.logs[0].fields.trace_sampled, true);
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
      assert.strictEqual(sink.logs[0].fields.other, undefined);
      assert.strictEqual(
        sink.logs[0].fields.trace_id,
        outerSpan.spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.span_id,
        outerSpan.spanContext().spanId,
      );
      assert.strictEqual(sink.logs[0].fields.trace_sampled, true);

      // Emits trace_sampled: false when active span is unsampled (TraceFlags.NONE).
      sink.reset();
      const unsampledSpan = trace.wrapSpanContext({
        traceId: '11111111111111111111111111111111',
        spanId: '2222222222222222',
        traceFlags: TraceFlags.NONE,
      });
      await assert.rejects(async () => {
        await context.with(trace.setSpan(ROOT_CONTEXT, unsampledSpan), () =>
          logCall(dynamicArgs, staticArgs, async () => {
            throw err;
          }),
        );
      });
      assert.strictEqual(sink.logs.length, 1);
      assert.strictEqual(
        sink.logs[0].fields.trace_id,
        '11111111111111111111111111111111',
      );
      assert.strictEqual(sink.logs[0].fields.span_id, '2222222222222222');
      assert.strictEqual(sink.logs[0].fields.trace_sampled, false);

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
        sink.logs[0].fields.trace_id,
        initialOuterSpan.spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.span_id,
        initialOuterSpan.spanContext().spanId,
      );
      assert.strictEqual(sink.logs[0].fields.trace_sampled, true);
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
      assert.strictEqual(entry.fields.other, undefined);
      assert.deepStrictEqual(entry.args, [
        'RPC attempt failed: %s',
        'Unavailable',
      ]);
      const {severity: _severity, ...attributes} = entry.fields;
      assert.strictEqual(_severity, 'DEBUG');
      assert.deepStrictEqual(attributes, {
        'gcp.client.service': 'storage',
        'gcp.client.version': '1.2.3',
        'gcp.client.repo': DEFAULT_GCP_REPO,
        'gcp.client.artifact': '@google-cloud/storage',
        'rpc.system.name': 'grpc',
        'rpc.method': 'google.storage.v2.Storage/GetObject',
        'url.domain': 'storage.googleapis.com',
        'server.address': 'storage.googleapis.com',
        'rpc.response.status_code': 'UNAVAILABLE',
        'error.type': 'UNAVAILABLE',
        'response.payload':
          '{"x-goog-request-id":"req-123","trace-bin":"YWJj"}',
      });
      assert.strictEqual('exception.type' in entry.fields, false);
      assert.strictEqual('exception.message' in entry.fields, false);
      assert.strictEqual('exception.stacktrace' in entry.fields, false);

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
      const preConnectFields = sink.logs[0].fields;
      assert.strictEqual(preConnectFields.other, undefined);
      assert.strictEqual('response.payload' in preConnectFields, false);
      assert.strictEqual(
        preConnectFields['error.type'],
        'CLIENT_CONNECTION_ERROR',
      );
      assert.strictEqual('exception.type' in preConnectFields, false);
      assert.strictEqual('exception.message' in preConnectFields, false);
      assert.strictEqual('exception.stacktrace' in preConnectFields, false);

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
      assert.strictEqual(sink.logs[0].fields.other, undefined);
      assert.deepStrictEqual(sink.logs[0].args, [
        'RPC attempt failed: %s',
        'client error',
      ]);
      const fieldsWithoutMeta = sink.logs[0].fields;
      assert.strictEqual('response.payload' in fieldsWithoutMeta, false);
      assert.strictEqual('server.address' in fieldsWithoutMeta, false);
      assert.strictEqual('exception.type' in fieldsWithoutMeta, false);
      assert.strictEqual('exception.message' in fieldsWithoutMeta, false);
      assert.strictEqual('exception.stacktrace' in fieldsWithoutMeta, false);
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
      const fields503 = sink.logs[0].fields;
      assert.strictEqual(fields503.other, undefined);
      assert.strictEqual(fields503['http.response.status_code'], 503);
      assert.strictEqual(fields503['rpc.response.status_code'], 'UNAVAILABLE');
      assert.strictEqual(fields503['response.payload'], json503Body);
      assert.strictEqual('exception.type' in fields503, false);
      assert.strictEqual('exception.message' in fields503, false);
      assert.strictEqual('exception.stacktrace' in fields503, false);

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
      const fields403 = sink.logs[0].fields;
      assert.strictEqual(fields403.other, undefined);
      assert.strictEqual(fields403['http.response.status_code'], 403);
      assert.strictEqual(
        fields403['rpc.response.status_code'],
        'PERMISSION_DENIED',
      );
      assert.strictEqual(fields403['response.payload'], json403Body);

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
      const fieldsHtml502 = sink.logs[0].fields;
      assert.strictEqual(fieldsHtml502.other, undefined);
      assert.strictEqual(fieldsHtml502['response.payload'], longHtml502);

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
        const fieldsEmpty = sink.logs[0].fields;
        assert.strictEqual(fieldsEmpty.other, undefined);
        assert.strictEqual('response.payload' in fieldsEmpty, false);
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
      assert.strictEqual(sink.logs[0].fields.other, undefined);
      assert.strictEqual(
        sink.logs[0].fields.trace_id,
        attemptSpan.spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.span_id,
        attemptSpan.spanContext().spanId,
      );
      assert.strictEqual(sink.logs[0].fields.trace_sampled, true);
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
      assert.strictEqual(sink.logs[0].fields.other, undefined);
      assert.strictEqual(
        sink.logs[0].fields.trace_id,
        streamSpans[0].spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.span_id,
        streamSpans[0].spanContext().spanId,
      );
      assert.strictEqual(sink.logs[0].fields.trace_sampled, true);
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
      assert.strictEqual(sink.logs[0].fields.other, undefined);
      assert.strictEqual(
        sink.logs[0].fields.trace_id,
        outerSpan.spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.span_id,
        outerSpan.spanContext().spanId,
      );
      assert.strictEqual(sink.logs[0].fields.trace_sampled, true);

      // Emits trace_sampled: false when active span is unsampled (TraceFlags.NONE).
      sink.reset();
      const unsampledSpan = trace.wrapSpanContext({
        traceId: '33333333333333333333333333333333',
        spanId: '4444444444444444',
        traceFlags: TraceFlags.NONE,
      });
      await assert.rejects(async () => {
        await context.with(trace.setSpan(ROOT_CONTEXT, unsampledSpan), () =>
          logNetworkAttempt(dynamicArgs, staticArgs, async () => {
            throw err;
          }),
        );
      });
      assert.strictEqual(sink.logs.length, 1);
      assert.strictEqual(
        sink.logs[0].fields.trace_id,
        '33333333333333333333333333333333',
      );
      assert.strictEqual(sink.logs[0].fields.span_id, '4444444444444444');
      assert.strictEqual(sink.logs[0].fields.trace_sampled, false);

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
        sink.logs[0].fields.trace_id,
        initialOuterSpan.spanContext().traceId,
      );
      assert.strictEqual(
        sink.logs[0].fields.span_id,
        initialOuterSpan.spanContext().spanId,
      );
      assert.strictEqual(sink.logs[0].fields.trace_sampled, true);
    });

    it('fails open in logNetworkAttempt and setRawHttpResponsePayload when error mutation or attribute extraction throws', async () => {
      const {
        getRawHttpResponsePayload,
        setRawHttpResponsePayload,
      } = require('../../src/googleError');
      const contextUtilModule = require('../../src/observability/contextUtil');

      // Frozen / non-extensible GoogleError and throwing Proxy fail open in setRawHttpResponsePayload / getRawHttpResponsePayload.
      const frozenErr = Object.freeze(new GoogleError('frozen'));
      assert.doesNotThrow(() =>
        setRawHttpResponsePayload(frozenErr, '{"error":"frozen"}'),
      );
      assert.strictEqual(getRawHttpResponsePayload(frozenErr), undefined);

      const hostileProxy = new Proxy(new GoogleError('proxy'), {
        defineProperty() {
          throw new Error('defineProperty boom');
        },
        get() {
          throw new Error('get boom');
        },
      });
      assert.doesNotThrow(() =>
        setRawHttpResponsePayload(hostileProxy, '{"error":"proxy"}'),
      );
      assert.strictEqual(getRawHttpResponsePayload(hostileProxy), undefined);

      // Throwing getActiveTraceContext or response getter inside logNetworkAttempt never masks the attempt error.
      const attemptErr = Object.assign(new GoogleError('Unavailable'), {
        code: Status.UNAVAILABLE,
      });
      sinon
        .stub(contextUtilModule, 'getActiveTraceContext')
        .throws(new Error('otel context exploded'));
      await assert.rejects(
        () =>
          logNetworkAttempt(dynamicArgs, staticArgs, async () => {
            throw attemptErr;
          }),
        (caught: unknown) => caught === attemptErr,
      );
      sinon.restore();

      const hostileResponseErr = new GoogleError('hostile response');
      Object.defineProperty(hostileResponseErr, 'response', {
        get() {
          throw new Error('response getter boom');
        },
      });
      await assert.rejects(
        () =>
          logNetworkAttempt(dynamicArgs, staticArgs, async () => {
            throw hostileResponseErr;
          }),
        (caught: unknown) => caught === hostileResponseErr,
      );
    });
  });

  describe('integration with default NodeBackend (no custom setBackend or .on("log"))', () => {
    interface ParsedStderrLog {
      namespace: string;
      severity: string;
      message: string;
      fields: GaxLogFields;
    }

    // eslint-disable-next-line no-control-regex
    const ANSI_ESCAPE_RE = /\u001b\[[0-9;]*m/g;
    function stripAnsi(value: string): string {
      return value.replace(ANSI_ESCAPE_RE, '');
    }

    function parseStderrLogs(stderrStub: sinon.SinonStub): ParsedStderrLog[] {
      return stderrStub.getCalls().map(call => {
        assert.strictEqual(call.args[0], '%s [%s|%s] %s%s');
        const namespace = stripAnsi(String(call.args[2]));
        const severity = stripAnsi(String(call.args[3]));
        const message = stripAnsi(String(call.args[4]));
        const rawFields = stripAnsi(String(call.args[5] ?? '')).trim();
        const fields = (rawFields ? JSON.parse(rawFields) : {}) as GaxLogFields;
        return {namespace, severity, message, fields};
      });
    }

    beforeEach(() => {
      // Clear TestLogSink so google-logging-utils instantiates and runs its real default NodeBackend.
      loggingUtils.setBackend(undefined);
    });

    it('delivers logCall and logNetworkAttempt records through NodeBackend across unset, matching, and mismatched GOOGLE_SDK_NODE_LOGGING', async () => {
      const stderrStub = sinon.stub(console, 'error');
      const json503Body = JSON.stringify({
        error: {
          code: 503,
          message: 'Backend unavailable',
          status: 'UNAVAILABLE',
        },
      });
      const gaxGrpc = new FallbackGrpcClient({
        auth: new GoogleAuth({authClient: new PassThroughClient()}),
        fallback: 'rest',
      });
      const protos = gaxGrpc.loadProto(echoProtoJson);
      const echoService = protos.lookupService('Echo');
      setMockFallbackHttpResponse(
        gaxGrpc,
        new Response(json503Body, {status: 503}),
      );
      const echoStub = await gaxGrpc.createStub(echoService, {
        servicePath: 'storage.googleapis.com',
        port: 443,
      });
      const restErr = await new Promise<GoogleError>((resolve, reject) => {
        echoStub.echo({content: 'test'}, {}, {}, (err?: Error) => {
          if (err instanceof GoogleError) {
            resolve(err);
          } else {
            reject(new Error(`Expected GoogleError, got ${err}`));
          }
        });
      });

      const httpArgs: AttemptTraceContext = {
        ...dynamicArgs,
        rpcType: 'http',
      };

      for (const envValue of [
        undefined,
        'storage',
        'auth,STORAGE',
        '*',
        'all',
        'true',
        'spanner',
        'false',
      ]) {
        stderrStub.resetHistory();
        harness.reset();
        loggingUtils.setBackend(undefined);
        if (envValue === undefined) {
          delete process.env.GOOGLE_SDK_NODE_LOGGING;
        } else {
          process.env.GOOGLE_SDK_NODE_LOGGING = envValue;
        }
        // Pre-warm namespace logger like generated GAPIC constructors (`this._log = logging.log(ns)`).
        loggingUtils.log('storage');

        await assert.rejects(() =>
          traceCall(httpArgs, staticArgs, () =>
            logCall(httpArgs, staticArgs, () =>
              traceAttempt(httpArgs, staticArgs, () =>
                logNetworkAttempt(httpArgs, staticArgs, async () => {
                  throw restErr;
                }),
              ),
            ),
          ),
        );

        const spans = harness.getSpans('google-gax');
        assert.strictEqual(spans.length, 2);
        const attemptSpan = spans[0];
        const clientSpan = spans[1];

        const records = parseStderrLogs(stderrStub);
        assert.strictEqual(
          records.length,
          2,
          `expected L4 + L3 stderr logs when GOOGLE_SDK_NODE_LOGGING=${String(envValue)}`,
        );

        const [attemptLog, callLog] = records;
        assert.strictEqual(attemptLog.namespace, 'storage');
        assert.strictEqual(attemptLog.severity, 'DEBUG');
        assert.ok(attemptLog.message.startsWith('RPC attempt failed: '));
        assert.strictEqual(attemptLog.fields.other, undefined);
        assert.strictEqual(
          attemptLog.fields.trace_id,
          attemptSpan.spanContext().traceId,
        );
        assert.strictEqual(
          attemptLog.fields.span_id,
          attemptSpan.spanContext().spanId,
        );
        assert.strictEqual(attemptLog.fields.trace_sampled, true);
        assert.strictEqual(attemptLog.fields['rpc.system.name'], 'http');
        assert.strictEqual(
          attemptLog.fields['rpc.method'],
          'google.storage.v2.Storage/GetObject',
        );
        assert.strictEqual(attemptLog.fields['http.response.status_code'], 503);
        assert.strictEqual(
          attemptLog.fields['rpc.response.status_code'],
          'UNAVAILABLE',
        );
        assert.strictEqual(attemptLog.fields['response.payload'], json503Body);
        assert.strictEqual('exception.type' in attemptLog.fields, false);
        assert.strictEqual('exception.message' in attemptLog.fields, false);
        assert.strictEqual('exception.stacktrace' in attemptLog.fields, false);

        assert.strictEqual(callLog.namespace, 'storage');
        assert.strictEqual(callLog.severity, 'WARNING');
        assert.ok(callLog.message.startsWith('Client API call failed: '));
        assert.strictEqual(callLog.fields.other, undefined);
        assert.strictEqual(
          callLog.fields.trace_id,
          clientSpan.spanContext().traceId,
        );
        assert.strictEqual(
          callLog.fields.span_id,
          clientSpan.spanContext().spanId,
        );
        assert.strictEqual(callLog.fields.trace_sampled, true);
        assert.strictEqual(callLog.fields['rpc.system.name'], 'http');
        assert.strictEqual(callLog.fields['http.response.status_code'], 503);
        assert.strictEqual('response.payload' in callLog.fields, false);
        assert.strictEqual(callLog.fields['exception.type'], 'GoogleError');
        assert.strictEqual(
          typeof callLog.fields['exception.message'],
          'string',
        );
        assert.strictEqual(
          typeof callLog.fields['exception.stacktrace'],
          'string',
        );
      }
    });
  });

  describe('integration with StructuredBackend', () => {
    const {createApiCall} =
      require('../../src/createApiCall') as typeof import('../../src/createApiCall');
    let savedGoogleCloudProject: string | undefined;

    beforeEach(() => {
      savedGoogleCloudProject = process.env.GOOGLE_CLOUD_PROJECT;
      delete process.env.GOOGLE_CLOUD_PROJECT;
    });

    afterEach(() => {
      if (savedGoogleCloudProject === undefined) {
        delete process.env.GOOGLE_CLOUD_PROJECT;
      } else {
        process.env.GOOGLE_CLOUD_PROJECT = savedGoogleCloudProject;
      }
    });

    it('emits secretmanager logs as structured JSON with Cloud Logging trace fields while suppressing unmatched non-opted namespaces when GOOGLE_SDK_NODE_LOGGING=secretmanager', async () => {
      const stdoutLines: string[] = [];
      sinon.stub(console, 'log').callsFake((_fmt: string, payload: string) => {
        stdoutLines.push(payload);
      });
      const stderrStub = sinon.stub(console, 'error');

      process.env.GOOGLE_CLOUD_PROJECT = 'my-cloud-project';
      process.env.GOOGLE_SDK_NODE_LOGGING = 'secretmanager';
      loggingUtils.setBackend(loggingUtils.getStructuredBackend());

      // Non-opted non-GAX and unmatched GAX client namespaces must be suppressed.
      loggingUtils.log('auth').debug('oauth token payload');
      loggingUtils.log('gcp-metadata').debug('metadata response');

      const storageCall = createApiCall(
        (_arg, _meta, _opts, cb) => {
          const err = new GoogleError('storage denied');
          err.code = Status.PERMISSION_DENIED;
          cb(err);
          return {cancel: () => {}};
        },
        new CallSettings({
          apiName: 'google.storage.v2.Storage',
          otherArgs: {
            internalMethodName: 'GetObject',
            servicePath: 'storage.googleapis.com',
          },
        }),
      );
      await assert.rejects(async () => {
        await storageCall({}, undefined);
      });
      assert.strictEqual(stdoutLines.length, 0);
      assert.strictEqual(stderrStub.callCount, 0);

      // Matched `secretmanager` namespace emits L4 DEBUG + L3 WARNING as structured JSON with Rule F-1 trace correlation.
      const secretManagerCall = createApiCall(
        (_arg, _meta, _opts, cb) => {
          const err = new GoogleError('secret not found');
          err.code = Status.NOT_FOUND;
          cb(err);
          return {cancel: () => {}};
        },
        new CallSettings({
          apiName: 'google.cloud.secretmanager.v1.SecretManagerService',
          enableTelemetryTracing: true,
          otherArgs: {
            internalMethodName: 'AccessSecretVersion',
            servicePath: 'secretmanager.googleapis.com',
          },
        }),
      );
      await assert.rejects(async () => {
        await secretManagerCall({}, undefined);
      });

      assert.strictEqual(stderrStub.callCount, 0);
      assert.strictEqual(stdoutLines.length, 2);
      const [attemptJson, callJson] = stdoutLines.map(
        line => JSON.parse(line) as Record<string, unknown>,
      );
      assert.strictEqual(attemptJson.severity, 'DEBUG');
      assert.strictEqual(
        attemptJson['rpc.method'],
        'google.cloud.secretmanager.v1.SecretManagerService/AccessSecretVersion',
      );
      assert.match(
        String(attemptJson['logging.googleapis.com/trace']),
        /^projects\/my-cloud-project\/traces\/[0-9a-f]{32}$/,
      );
      assert.match(
        String(attemptJson['logging.googleapis.com/spanId']),
        /^[0-9a-f]{16}$/,
      );
      assert.strictEqual(
        attemptJson['logging.googleapis.com/trace_sampled'],
        true,
      );
      assert.strictEqual('trace_id' in attemptJson, false);
      assert.strictEqual('span_id' in attemptJson, false);
      assert.strictEqual('trace_sampled' in attemptJson, false);

      assert.strictEqual(callJson.severity, 'WARNING');
      assert.strictEqual(
        callJson['rpc.method'],
        'google.cloud.secretmanager.v1.SecretManagerService/AccessSecretVersion',
      );
      assert.strictEqual(
        callJson['logging.googleapis.com/trace'],
        attemptJson['logging.googleapis.com/trace'],
      );
      assert.strictEqual('trace_id' in callJson, false);
    });

    it('delivers opted-in {enableTelemetryLogging: true} calls as structured JSON when GOOGLE_SDK_NODE_LOGGING=spanner without leaking non-opted namespaces or falling back to plain-text stderr', async () => {
      const stdoutLines: string[] = [];
      sinon.stub(console, 'log').callsFake((_fmt: string, payload: string) => {
        stdoutLines.push(payload);
      });
      const stderrStub = sinon.stub(console, 'error');

      process.env.GOOGLE_SDK_NODE_LOGGING = 'spanner';
      loggingUtils.setBackend(loggingUtils.getStructuredBackend());

      // Non-opted namespaces remain suppressed.
      loggingUtils.log('auth').debug('oauth token payload');
      loggingUtils.log('gcp-metadata').debug('metadata response');
      assert.strictEqual(stdoutLines.length, 0);
      assert.strictEqual(stderrStub.callCount, 0);

      // Opted-in `secretmanager` call emits structured JSON to stdout (not plain-text stderr).
      const optedInSecretManagerCall = createApiCall(
        (_arg, _meta, _opts, cb) => {
          const err = new GoogleError('permission denied');
          err.code = Status.PERMISSION_DENIED;
          cb(err);
          return {cancel: () => {}};
        },
        new CallSettings({
          apiName: 'google.cloud.secretmanager.v1.SecretManagerService',
          enableTelemetryLogging: true,
          otherArgs: {
            internalMethodName: 'GetSecret',
            servicePath: 'secretmanager.googleapis.com',
          },
        }),
      );
      await assert.rejects(async () => {
        await optedInSecretManagerCall({}, undefined);
      });

      assert.strictEqual(
        stderrStub.callCount,
        0,
        'must not fall back to plain-text NodeBackend stderr when StructuredBackend is active',
      );
      assert.strictEqual(stdoutLines.length, 2);
      const [attemptJson, callJson] = stdoutLines.map(
        line => JSON.parse(line) as Record<string, unknown>,
      );
      assert.strictEqual(attemptJson.severity, 'DEBUG');
      assert.strictEqual(
        attemptJson['rpc.method'],
        'google.cloud.secretmanager.v1.SecretManagerService/GetSecret',
      );
      assert.strictEqual(callJson.severity, 'WARNING');
      assert.strictEqual(
        callJson['rpc.method'],
        'google.cloud.secretmanager.v1.SecretManagerService/GetSecret',
      );

      // Also forwards to a plain `DebugLogBackend` upstream (without `makeLogger`) passed to `getStructuredBackend(upstream)`.
      stdoutLines.length = 0;
      const upstreamPayloads: string[] = [];
      const plainUpstream: loggingUtils.DebugLogBackend = {
        log(_ns: string, _fields: loggingUtils.LogFields, ...args: unknown[]) {
          upstreamPayloads.push(String(args[0]));
        },
        setFilters() {},
      };
      process.env.GOOGLE_SDK_NODE_LOGGING = 'spanner';
      loggingUtils.setBackend(loggingUtils.getStructuredBackend(plainUpstream));
      loggingUtils.log('auth').debug('dropped auth');
      await assert.rejects(async () => {
        await optedInSecretManagerCall({}, undefined);
      });

      assert.strictEqual(stdoutLines.length, 0);
      assert.strictEqual(stderrStub.callCount, 0);
      assert.strictEqual(upstreamPayloads.length, 2);
      assert.strictEqual(JSON.parse(upstreamPayloads[0]).severity, 'DEBUG');
      assert.strictEqual(JSON.parse(upstreamPayloads[1]).severity, 'WARNING');

      // Rescues cleanly without throwing Object.getPrototypeOf(null) or WeakMap key TypeErrors
      // even if StructuredBackend.upstream is null or a primitive value.
      for (const invalidUpstream of [null, 'bad', 123, false]) {
        stdoutLines.length = 0;
        process.env.GOOGLE_SDK_NODE_LOGGING = 'spanner';
        const sb = loggingUtils.getStructuredBackend(
          invalidUpstream as unknown as loggingUtils.DebugLogBackend,
        );
        // Also force `.upstream` directly in case logging-utils already normalized it in constructor.
        (sb as {upstream?: unknown}).upstream = invalidUpstream;
        loggingUtils.setBackend(sb);

        await assert.rejects(async () => {
          await optedInSecretManagerCall({}, undefined);
        });

        assert.strictEqual(
          stdoutLines.length,
          2,
          `expected L4 + L3 rescued structured stdout logs for upstream=${String(invalidUpstream)}`,
        );
        assert.strictEqual(JSON.parse(stdoutLines[0]).severity, 'DEBUG');
        assert.strictEqual(JSON.parse(stdoutLines[1]).severity, 'WARNING');
      }
    });

    it('handles pre-registered setBackend (StructuredBackend, custom sink, and null), ESM imports, and mutated GOOGLE_SDK_NODE_LOGGING via getBackend()', () => {
      // 1. In-process: mutating GOOGLE_SDK_NODE_LOGGING after default NodeBackend froze its filter neither drops nor duplicates logs.
      const stderrStub = sinon.stub(console, 'error');
      const warnSeverity = loggingUtils.LogSeverity.WARNING;

      process.env.GOOGLE_SDK_NODE_LOGGING = 'spanner';
      loggingUtils.setBackend(undefined);
      loggingUtils.log('spanner').info('initialize frozen spanner filter');
      stderrStub.resetHistory();

      process.env.GOOGLE_SDK_NODE_LOGGING = 'secretmanager';
      getGaxLogger('secretmanager')(
        {severity: warnSeverity},
        'rescued despite mutated env',
      );
      assert.strictEqual(
        stderrStub.callCount,
        1,
        'must not drop log when cachedBackend froze spanner before env mutated to secretmanager',
      );

      process.env.GOOGLE_SDK_NODE_LOGGING = 'secretmanager';
      loggingUtils.setBackend(undefined);
      loggingUtils
        .log('secretmanager')
        .info('initialize frozen secretmanager filter');
      stderrStub.resetHistory();

      process.env.GOOGLE_SDK_NODE_LOGGING = 'spanner';
      getGaxLogger('secretmanager')(
        {severity: warnSeverity},
        'not duplicated despite mutated env',
      );
      assert.strictEqual(
        stderrStub.callCount,
        1,
        'must not duplicate log when cachedBackend froze secretmanager before env mutated to spanner',
      );
      stderrStub.restore();

      const compiledEntry = path.resolve(
        __dirname,
        __filename.endsWith('.js')
          ? '../../src/index.js'
          : '../../build/src/index.js',
      );
      const compiledOtelHarness = path.resolve(
        __dirname,
        __filename.endsWith('.js')
          ? './otelHarness.js'
          : '../../build/test/unit/otelHarness.js',
      );
      const compiledEntryUrl = pathToFileURL(compiledEntry).href;
      const gaxPackageRoot = path.resolve(
        __dirname,
        __filename.endsWith('.js') ? '../../..' : '../..',
      );

      // 2. Child process: pre-registered setBackend(getStructuredBackend()) BEFORE lazy-requiring google-gax.
      const preStructuredScript = `
        const logging = require('google-logging-utils');
        process.env.GOOGLE_CLOUD_PROJECT = 'child-proj';
        process.env.GOOGLE_SDK_NODE_LOGGING = 'spanner';
        const sb = logging.getStructuredBackend();
        logging.setBackend(sb);
        // StructuredBackend@2.3.0 suppresses unmatched namespaces natively even before google-gax is loaded.
        logging.log('auth').debug('early pre-import auth log');

        const gaxPkg = require(${JSON.stringify(compiledEntry)});
        logging.log('auth').debug('must be suppressed after gax import');

        const {OtelHarness} = require(${JSON.stringify(compiledOtelHarness)});
        const childHarness = new OtelHarness();
        childHarness.setup();
        const call = gaxPkg.createApiCall(
          (_arg, _meta, _opts, cb) => {
            const err = new gaxPkg.GoogleError('pre-structured failure');
            err.code = gaxPkg.Status.PERMISSION_DENIED;
            cb(err);
            return {cancel: () => {}};
          },
          new gaxPkg.CallSettings({
            apiName: 'google.cloud.secretmanager.v1.SecretManagerService',
            enableTelemetryTracing: true,
            enableTelemetryLogging: true,
            otherArgs: {
              internalMethodName: 'GetSecret',
              servicePath: 'secretmanager.googleapis.com',
            },
          }),
        );
        call({}, undefined).catch(() => {
          childHarness.teardown();
        });
      `;
      const structuredRes = spawnSync(
        process.execPath,
        ['-e', preStructuredScript],
        {encoding: 'utf8', cwd: gaxPackageRoot},
      );
      assert.strictEqual(structuredRes.status, 0, structuredRes.stderr);
      assert.strictEqual(
        structuredRes.stderr,
        '',
        `expected empty stderr for pre-registered StructuredBackend, got: ${structuredRes.stderr}`,
      );
      const structuredLines = structuredRes.stdout
        .trim()
        .split(/\r?\n/)
        .filter(Boolean)
        .map(line => JSON.parse(line) as Record<string, unknown>);
      assert.strictEqual(structuredLines.length, 2);
      assert.strictEqual(structuredLines[0].severity, 'DEBUG');
      assert.strictEqual(structuredLines[1].severity, 'WARNING');
      assert.match(
        String(structuredLines[0]['logging.googleapis.com/trace']),
        /^projects\/child-proj\/traces\/[0-9a-f]{32}$/,
      );
      assert.match(
        String(structuredLines[0]['logging.googleapis.com/spanId']),
        /^[0-9a-f]{16}$/,
      );
      assert.strictEqual(
        structuredLines[0]['logging.googleapis.com/trace_sampled'],
        true,
      );
      assert.strictEqual('trace_id' in structuredLines[0], false);

      // 3. ESM child process: pre-registered setBackend(customSink) BEFORE dynamic import of google-gax.
      const esmCustomSinkScript = `
        import * as logging from 'google-logging-utils';
        process.env.GOOGLE_SDK_NODE_LOGGING = 'spanner';
        const captured = [];
        logging.setBackend({
          log(namespace, fields, ...args) {
            captured.push({namespace, severity: fields.severity, msg: String(args[0])});
          },
          setFilters() {},
        });
        const gaxMod = await import(${JSON.stringify(compiledEntryUrl)});
        const gaxPkg = gaxMod.default ?? gaxMod;
        const call = gaxPkg.createApiCall(
          (_arg, _meta, _opts, cb) => {
            const err = new gaxPkg.GoogleError('esm custom sink failure');
            err.code = gaxPkg.Status.UNAVAILABLE;
            cb(err);
            return {cancel: () => {}};
          },
          new gaxPkg.CallSettings({
            apiName: 'google.cloud.secretmanager.v1.SecretManagerService',
            enableTelemetryLogging: true,
            otherArgs: {
              internalMethodName: 'GetSecret',
              servicePath: 'secretmanager.googleapis.com',
            },
          }),
        );
        await call({}, undefined).catch(() => {});
        process.stdout.write(JSON.stringify(captured));
      `;
      const esmSinkRes = spawnSync(
        process.execPath,
        ['--input-type=module', '-e', esmCustomSinkScript],
        {encoding: 'utf8', cwd: gaxPackageRoot},
      );
      assert.strictEqual(esmSinkRes.status, 0, esmSinkRes.stderr);
      assert.strictEqual(
        esmSinkRes.stderr,
        '',
        `expected zero duplicate stderr logs for ESM custom sink, got: ${esmSinkRes.stderr}`,
      );
      const sinkCaptured = JSON.parse(esmSinkRes.stdout) as Array<{
        namespace: string;
        severity: string;
      }>;
      assert.strictEqual(sinkCaptured.length, 2);
      assert.strictEqual(sinkCaptured[0].namespace, 'secretmanager');
      assert.strictEqual(sinkCaptured[0].severity, 'DEBUG');
      assert.strictEqual(sinkCaptured[1].severity, 'WARNING');

      // 4. ESM child process: pre-registered setBackend(null) with unset GOOGLE_SDK_NODE_LOGGING BEFORE dynamic import of google-gax.
      const esmNullScript = `
        import * as logging from 'google-logging-utils';
        delete process.env.GOOGLE_SDK_NODE_LOGGING;
        logging.setBackend(null);
        const gaxMod = await import(${JSON.stringify(compiledEntryUrl)});
        const gaxPkg = gaxMod.default ?? gaxMod;
        const call = gaxPkg.createApiCall(
          (_arg, _meta, _opts, cb) => {
            const err = new gaxPkg.GoogleError('esm null backend failure');
            err.code = gaxPkg.Status.INTERNAL;
            cb(err);
            return {cancel: () => {}};
          },
          new gaxPkg.CallSettings({
            apiName: 'google.storage.v2.Storage',
            enableTelemetryLogging: true,
            otherArgs: {
              internalMethodName: 'GetObject',
              servicePath: 'storage.googleapis.com',
            },
          }),
        );
        await call({}, undefined).catch(() => {});
        if (logging.log('storage') !== logging.placeholder) {
          throw new Error('setBackend(null) state was mutated');
        }
      `;
      const esmNullRes = spawnSync(
        process.execPath,
        ['--input-type=module', '-e', esmNullScript],
        {encoding: 'utf8', cwd: gaxPackageRoot},
      );
      assert.strictEqual(esmNullRes.status, 0, esmNullRes.stderr);
      assert.strictEqual(
        esmNullRes.stderr,
        '',
        `expected zero stderr logs when setBackend(null) was pre-registered in ESM, got: ${esmNullRes.stderr}`,
      );
      assert.strictEqual(esmNullRes.stdout, '');
    });
  });
});
