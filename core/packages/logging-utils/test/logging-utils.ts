// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {afterEach, beforeEach, describe, it} from 'mocha';
import * as assert from 'assert';
import * as sinon from 'sinon';

import * as al from '../src/index';

interface TestLog {
  namespace: string;
  fields: al.LogFields;
  args: unknown[];
}

class TestSink extends al.DebugLogBackendBase {
  logs: TestLog[] = [];

  makeLogger(namespace: string): any {
    return (fields: al.LogFields, ...args: unknown[]) => {
      this.logs.push({namespace, fields, args});
    };
  }

  setFilters(): void {}

  reset() {
    this.filters = [];
    this.logs = [];
  }
}

describe('adhoc-logging', () => {
  const sink: TestSink = new TestSink();

  describe('Disabled', () => {
    const system = 'disabled';

    it('obeys a lack of global enable', () => {
      al.setBackend(undefined);
      delete process.env[al.env.nodeEnables];
      const logger = al.log(system);
      logger({}, 'foo');
      assert.deepStrictEqual(sink.logs, []);
    });

    it('obeys "all" as an alias for "*"', () => {
      process.env[al.env.nodeEnables] = 'all';
      const backend = new TestSink();
      al.setBackend(backend);
      assert.deepStrictEqual(backend.filters, ['*']);
      const logger = al.log(system);
      logger({}, 'foo');
      assert.deepStrictEqual(backend.logs, [
        {
          namespace: system,
          fields: {},
          args: ['foo'],
        },
      ]);
    });

    it('obeys "true" as an alias for "*"', () => {
      process.env[al.env.nodeEnables] = 'true';
      const backend = new TestSink();
      al.setBackend(backend);
      assert.deepStrictEqual(backend.filters, ['*']);
      const logger = al.log(system);
      logger({}, 'foo');
      assert.deepStrictEqual(backend.logs, [
        {
          namespace: system,
          fields: {},
          args: ['foo'],
        },
      ]);
    });
  });

  describe('Manually enabled', () => {
    let logger: any;
    const system = 'basic';

    beforeEach(() => {
      al.setBackend(sink);
      sink.reset();

      delete process.env[al.env.nodeEnables];
      logger = al.log(system);
    });

    it('logs in spite of no environment variable', () => {
      logger({}, 'test log', 5, {other: 'foo'});
      assert.deepStrictEqual(sink.logs, [
        {
          namespace: system,
          fields: {},
          args: ['test log', 5, {other: 'foo'}],
        },
      ]);
    });
  });

  describe('Basic enabled', () => {
    let logger: any;
    const system = 'basic';

    beforeEach(() => {
      al.setBackend(sink);
      sink.reset();

      process.env[al.env.nodeEnables] = '*';
      logger = al.log(system);
    });

    it('logs with empty fields', () => {
      logger({}, 'test log', 5, {other: 'foo'});
      assert.deepStrictEqual(sink.logs, [
        {
          namespace: system,
          fields: {},
          args: ['test log', 5, {other: 'foo'}],
        },
      ]);
    });

    it('logs with fields', () => {
      logger({severity: al.LogSeverity.INFO}, 'test log', 5, {
        other: 'foo',
      });
      assert.deepStrictEqual(sink.logs, [
        {
          namespace: system,
          fields: {severity: al.LogSeverity.INFO},
          args: ['test log', 5, {other: 'foo'}],
        },
      ]);
    });

    it('logs with severity', () => {
      logger.info('test info');
      logger.warn('test warn');
      logger.debug('test debug');
      logger.error('test error');
      assert.deepStrictEqual(sink.logs, [
        {
          namespace: system,
          fields: {severity: al.LogSeverity.INFO},
          args: ['test info'],
        },
        {
          namespace: system,
          fields: {severity: al.LogSeverity.WARNING},
          args: ['test warn'],
        },
        {
          namespace: system,
          fields: {severity: al.LogSeverity.DEBUG},
          args: ['test debug'],
        },
        {
          namespace: system,
          fields: {severity: al.LogSeverity.ERROR},
          args: ['test error'],
        },
      ]);
    });
  });

  describe('Caching', () => {
    const cached = 'cached';

    it('saves logger with the same system/namespace', () => {
      const logger = al.log(cached);
      const logger2 = al.log(cached);
      assert.strictEqual(logger, logger2);
    });

    it('deals with the backend being replaced', () => {});
  });

  describe('Tap', () => {
    let logger: any;
    const system = 'taps';

    beforeEach(() => {
      al.setBackend(sink);
      sink.reset();

      process.env[al.env.nodeEnables] = system;
      logger = al.log(system);
    });

    it('allows receiving logs', () => {
      const received = [{fields: {}, args: [] as unknown[]}];
      received.pop();
      logger.on('log', (fields: al.LogFields, args: unknown[]) => {
        received.push({fields, args});
      });
      logger.info('cool cool');
      assert.deepStrictEqual(received, [
        {
          fields: {severity: al.LogSeverity.INFO},
          args: ['cool cool'],
        },
      ]);
    });
  });

  describe('Structured log', () => {
    const system = 'structured';
    const structured = al.getStructuredBackend(sink);
    let savedGoogleCloudProject: string | undefined;
    let savedGcloudProject: string | undefined;

    let logger: any;
    beforeEach(() => {
      savedGoogleCloudProject = process.env.GOOGLE_CLOUD_PROJECT;
      savedGcloudProject = process.env.GCLOUD_PROJECT;
      delete process.env.GOOGLE_CLOUD_PROJECT;
      delete process.env.GCLOUD_PROJECT;

      al.setBackend(structured);
      sink.reset();

      process.env[al.env.nodeEnables] = system;

      logger = al.log(system);
    });

    afterEach(() => {
      sinon.restore();
      if (savedGoogleCloudProject === undefined) {
        delete process.env.GOOGLE_CLOUD_PROJECT;
      } else {
        process.env.GOOGLE_CLOUD_PROJECT = savedGoogleCloudProject;
      }
      if (savedGcloudProject === undefined) {
        delete process.env.GCLOUD_PROJECT;
      } else {
        process.env.GCLOUD_PROJECT = savedGcloudProject;
      }
    });

    it('logs to console.log by default', () => {
      al.setBackend(al.getStructuredBackend());
      logger = al.log(system);
      const sandbox = sinon.createSandbox();
      try {
        let called = false;
        sandbox.stub(console, 'log').callsFake((message, ...params) => {
          assert.strictEqual(message, '%s');
          assert.deepStrictEqual(params, [
            '{"severity":"INFO","message":"test info"}',
          ]);
          called = true;
        });
        logger.info('test info');
        assert.strictEqual(called, true);
      } finally {
        sandbox.restore();
      }
    });

    it('logs with severity', () => {
      logger.info('test info');
      logger.warn('test warn');
      logger.debug('test debug');
      logger.error('test error');

      assert.deepStrictEqual(sink.logs, [
        {
          args: ['{"severity":"INFO","message":"test info"}'],
          fields: {
            severity: 'INFO',
          },
          namespace: 'structured',
        },
        {
          args: ['{"severity":"WARNING","message":"test warn"}'],
          fields: {
            severity: 'WARNING',
          },
          namespace: 'structured',
        },
        {
          args: ['{"severity":"DEBUG","message":"test debug"}'],
          fields: {
            severity: 'DEBUG',
          },
          namespace: 'structured',
        },
        {
          args: ['{"severity":"ERROR","message":"test error"}'],
          fields: {
            severity: 'ERROR',
          },
          namespace: 'structured',
        },
      ]);
    });

    it('emits top-level OpenTelemetry attributes directly on JSON output and protects severity and message', () => {
      logger(
        {
          severity: al.LogSeverity.WARNING,
          'rpc.system.name': 'grpc',
          'rpc.method': 'google.storage.v2.Storage/GetObject',
          'error.type': 'PERMISSION_DENIED',
          'gcp.errors.domain': 'googleapis.com',
          'gcp.errors.metadata.permission': 'storage.objects.get',
          'exception.type': 'GoogleError',
          'exception.message': 'Permission denied',
          message: 'should-not-overwrite-formatted-message',
        },
        'Client API call failed: %s',
        'Permission denied',
      );

      assert.strictEqual(sink.logs.length, 1);
      const parsed = JSON.parse(sink.logs[0].args[0] as string);
      assert.deepStrictEqual(parsed, {
        severity: 'WARNING',
        message: 'Client API call failed: Permission denied',
        'rpc.system.name': 'grpc',
        'rpc.method': 'google.storage.v2.Storage/GetObject',
        'error.type': 'PERMISSION_DENIED',
        'gcp.errors.domain': 'googleapis.com',
        'gcp.errors.metadata.permission': 'storage.objects.get',
        'exception.type': 'GoogleError',
        'exception.message': 'Permission denied',
      });
      assert.strictEqual('other' in parsed, false);
    });

    it('maps trace_id, span_id, and trace_sampled to Cloud Logging Special JSON Fields with and without project env vars', () => {
      const traceId = '4bf92f3577b34da6a3ce929d0e0e4736';
      const spanId = '00f067aa0ba902b7';

      // 1. Without GOOGLE_CLOUD_PROJECT / GCLOUD_PROJECT: emits bare traceId.
      logger(
        {
          severity: al.LogSeverity.WARNING,
          trace_id: traceId,
          span_id: spanId,
          trace_sampled: true,
          'error.type': 'UNAVAILABLE',
        },
        'failed without project',
      );

      // 2. With GOOGLE_CLOUD_PROJECT: formats as projects/{projectId}/traces/{traceId}.
      process.env.GOOGLE_CLOUD_PROJECT = 'my-cloud-project';
      logger(
        {
          severity: al.LogSeverity.DEBUG,
          trace_id: traceId,
          span_id: spanId,
          trace_sampled: false,
        },
        'failed with GOOGLE_CLOUD_PROJECT',
      );

      // 3. With GCLOUD_PROJECT fallback when GOOGLE_CLOUD_PROJECT is unset.
      delete process.env.GOOGLE_CLOUD_PROJECT;
      process.env.GCLOUD_PROJECT = 'my-gcloud-project';
      logger(
        {
          trace_id: traceId,
          span_id: spanId,
        },
        'failed with GCLOUD_PROJECT',
      );

      // 4. Does not double-prefix when trace_id already starts with 'projects/'.
      process.env.GOOGLE_CLOUD_PROJECT = 'ignored-project';
      logger(
        {
          trace_id: `projects/existing-project/traces/${traceId}`,
          span_id: spanId,
        },
        'already prefixed',
      );

      // 5. Preserves explicit logging.googleapis.com/* fields if already provided.
      logger(
        {
          trace_id: traceId,
          span_id: spanId,
          trace_sampled: false,
          'logging.googleapis.com/trace': 'projects/custom/traces/explicit',
          'logging.googleapis.com/spanId': 'explicit-span',
          'logging.googleapis.com/trace_sampled': true,
        },
        'explicit cloud logging fields',
      );

      assert.strictEqual(sink.logs.length, 5);
      const parsed = sink.logs.map(l => JSON.parse(l.args[0] as string));

      assert.deepStrictEqual(parsed[0], {
        severity: 'WARNING',
        message: 'failed without project',
        'error.type': 'UNAVAILABLE',
        'logging.googleapis.com/trace': traceId,
        'logging.googleapis.com/spanId': spanId,
        'logging.googleapis.com/trace_sampled': true,
      });

      assert.deepStrictEqual(parsed[1], {
        severity: 'DEBUG',
        message: 'failed with GOOGLE_CLOUD_PROJECT',
        'logging.googleapis.com/trace': `projects/my-cloud-project/traces/${traceId}`,
        'logging.googleapis.com/spanId': spanId,
        'logging.googleapis.com/trace_sampled': false,
      });

      assert.deepStrictEqual(parsed[2], {
        severity: 'INFO',
        message: 'failed with GCLOUD_PROJECT',
        'logging.googleapis.com/trace': `projects/my-gcloud-project/traces/${traceId}`,
        'logging.googleapis.com/spanId': spanId,
      });

      assert.deepStrictEqual(parsed[3], {
        severity: 'INFO',
        message: 'already prefixed',
        'logging.googleapis.com/trace': `projects/existing-project/traces/${traceId}`,
        'logging.googleapis.com/spanId': spanId,
      });

      assert.deepStrictEqual(parsed[4], {
        severity: 'INFO',
        message: 'explicit cloud logging fields',
        'logging.googleapis.com/trace': 'projects/custom/traces/explicit',
        'logging.googleapis.com/spanId': 'explicit-span',
        'logging.googleapis.com/trace_sampled': true,
      });

      for (const entry of parsed) {
        assert.strictEqual('trace_id' in entry, false);
        assert.strictEqual('span_id' in entry, false);
        assert.strictEqual('trace_sampled' in entry, false);
      }
    });

    it('flattens legacy fields.other and maps telemetryTraceId and telemetrySpanId for backwards compatibility', () => {
      process.env.GOOGLE_CLOUD_PROJECT = 'legacy-project';

      logger(
        {
          severity: al.LogSeverity.WARNING,
          telemetryTraceId: 'legacy-trace-123',
          telemetrySpanId: 'legacy-span-456',
          other: {
            'rpc.system.name': 'grpc',
            'error.type': 'INTERNAL',
            severity: 'DEBUG',
            message: 'ignored-override',
          },
          'error.type': 'DEADLINE_EXCEEDED',
        },
        'legacy structured log',
      );

      // Non-plain-object `other` (array or primitive) omits the `other` wrapper without spreading indices.
      logger(
        {
          other: ['not', 'plain'],
          'rpc.method': 'Echo/Echo',
        },
        'array other',
      );

      assert.strictEqual(sink.logs.length, 2);
      const legacyParsed = JSON.parse(sink.logs[0].args[0] as string);
      assert.deepStrictEqual(legacyParsed, {
        severity: 'WARNING',
        message: 'legacy structured log',
        'rpc.system.name': 'grpc',
        'error.type': 'DEADLINE_EXCEEDED',
        'logging.googleapis.com/trace':
          'projects/legacy-project/traces/legacy-trace-123',
        'logging.googleapis.com/spanId': 'legacy-span-456',
      });
      assert.strictEqual('other' in legacyParsed, false);
      assert.strictEqual('telemetryTraceId' in legacyParsed, false);
      assert.strictEqual('telemetrySpanId' in legacyParsed, false);

      const arrayOtherParsed = JSON.parse(sink.logs[1].args[0] as string);
      assert.deepStrictEqual(arrayOtherParsed, {
        severity: 'INFO',
        message: 'array other',
        'rpc.method': 'Echo/Echo',
      });
      assert.strictEqual('other' in arrayOtherParsed, false);
    });

    it('filters namespaces via GOOGLE_SDK_NODE_LOGGING without and with an upstream backend', () => {
      const stdoutLines: string[] = [];
      sinon.stub(console, 'log').callsFake((_fmt: string, payload: string) => {
        stdoutLines.push(payload);
      });

      // 1. Standalone getStructuredBackend() with GOOGLE_SDK_NODE_LOGGING=secretmanager.
      process.env[al.env.nodeEnables] = 'secretmanager';
      al.setBackend(al.getStructuredBackend());

      al.log('auth').debug('oauth token payload');
      al.log('gcp-metadata').debug('metadata server response');
      al.log('storage').warn('storage call failed');
      al.log('secretmanager')(
        {
          severity: al.LogSeverity.WARNING,
          'error.type': 'PERMISSION_DENIED',
        },
        'secretmanager call failed',
      );

      assert.strictEqual(stdoutLines.length, 1);
      assert.deepStrictEqual(JSON.parse(stdoutLines[0]), {
        severity: 'WARNING',
        message: 'secretmanager call failed',
        'error.type': 'PERMISSION_DENIED',
      });

      // 2. getStructuredBackend(upstream) with GOOGLE_SDK_NODE_LOGGING=secretmanager.
      const upstreamSink = new TestSink();
      process.env[al.env.nodeEnables] = 'secretmanager';
      al.setBackend(al.getStructuredBackend(upstreamSink));

      al.log('auth').info('auth info');
      al.log('gcp-metadata').info('metadata info');
      al.log('storage').info('storage info');
      al.log('secretmanager').info('secretmanager info');

      assert.strictEqual(upstreamSink.logs.length, 1);
      assert.strictEqual(upstreamSink.logs[0].namespace, 'secretmanager');
      assert.deepStrictEqual(
        JSON.parse(upstreamSink.logs[0].args[0] as string),
        {
          severity: 'INFO',
          message: 'secretmanager info',
        },
      );
    });

    it('supports wildcard patterns, comma-separated lists with spaces, and setting GOOGLE_SDK_NODE_LOGGING after setBackend()', () => {
      const stdoutLines: string[] = [];
      sinon.stub(console, 'log').callsFake((_fmt: string, payload: string) => {
        stdoutLines.push(payload);
      });

      // 1. Wildcard pattern (`pubsub:*`).
      process.env[al.env.nodeEnables] = 'pubsub:*';
      al.setBackend(al.getStructuredBackend());

      const pubsubRoot = al.log('pubsub');
      const pubsubLeasing = pubsubRoot.sublog('leasing');
      pubsubRoot.info('root pubsub ignored');
      al.log('auth').info('auth ignored');
      pubsubLeasing.info('lease renewed');

      assert.strictEqual(stdoutLines.length, 1);
      assert.deepStrictEqual(JSON.parse(stdoutLines[0]), {
        severity: 'INFO',
        message: 'lease renewed',
      });

      // 2. Comma-separated list with spaces (`secretmanager, storage`).
      stdoutLines.length = 0;
      process.env[al.env.nodeEnables] = 'secretmanager, storage';
      al.setBackend(al.getStructuredBackend());

      al.log('auth').debug('auth dropped');
      al.log('secretmanager').warn('sm warn');
      al.log('storage').warn('storage warn');

      assert.strictEqual(stdoutLines.length, 2);
      assert.deepStrictEqual(
        stdoutLines.map(line => JSON.parse(line).message),
        ['sm warn', 'storage warn'],
      );

      // 3. Setting GOOGLE_SDK_NODE_LOGGING AFTER calling setBackend(getStructuredBackend()).
      stdoutLines.length = 0;
      delete process.env[al.env.nodeEnables];
      const lateBackend = al.getStructuredBackend();
      al.setBackend(lateBackend);
      process.env[al.env.nodeEnables] = 'secretmanager';

      al.log('auth').debug('auth dropped after late env');
      al.log('gcp-metadata').debug('metadata dropped after late env');
      al.log('secretmanager').warn('sm logged after late env');

      assert.strictEqual(stdoutLines.length, 1);
      assert.deepStrictEqual(JSON.parse(stdoutLines[0]), {
        severity: 'WARNING',
        message: 'sm logged after late env',
      });

      // 4. Manual override on `backend.filters` is preserved even if env changes later.
      stdoutLines.length = 0;
      process.env[al.env.nodeEnables] = 'spanner';
      const manualBackend = al.getStructuredBackend() as al.DebugLogBackendBase;
      manualBackend.filters = ['*'];
      al.setBackend(manualBackend);
      process.env[al.env.nodeEnables] = 'bigquery';

      al.log('secretmanager').info('manual wildcard override');
      assert.strictEqual(stdoutLines.length, 1);
      assert.deepStrictEqual(JSON.parse(stdoutLines[0]), {
        severity: 'INFO',
        message: 'manual wildcard override',
      });
    });

    it('supports a plain DebugLogBackend upstream without DebugLogBackendBase.makeLogger', () => {
      const stderrStub = sinon.stub(console, 'error');
      const stdoutStub = sinon.stub(console, 'log');
      const capturedLogs: TestLog[] = [];
      const capturedFilters: string[][] = [];
      const plainUpstream: al.DebugLogBackend = {
        log(namespace: string, fields: al.LogFields, ...args: unknown[]) {
          capturedLogs.push({namespace, fields, args});
        },
        setFilters(filters: string[]) {
          capturedFilters.push(filters);
        },
      };

      process.env[al.env.nodeEnables] = 'secretmanager';
      al.setBackend(al.getStructuredBackend(plainUpstream));

      al.log('auth').debug('auth dropped');
      al.log('storage').warn('storage dropped');
      al.log('secretmanager')(
        {
          severity: al.LogSeverity.WARNING,
          'error.type': 'NOT_FOUND',
        },
        'secret failed',
      );

      assert.strictEqual(stderrStub.callCount, 0);
      assert.strictEqual(stdoutStub.callCount, 0);
      assert.deepStrictEqual(capturedFilters, [['secretmanager']]);
      assert.strictEqual(capturedLogs.length, 1);
      assert.strictEqual(capturedLogs[0].namespace, 'secretmanager');
      assert.deepStrictEqual(capturedLogs[0].fields, {
        severity: al.LogSeverity.WARNING,
        'error.type': 'NOT_FOUND',
      });
      assert.deepStrictEqual(JSON.parse(capturedLogs[0].args[0] as string), {
        severity: 'WARNING',
        message: 'secret failed',
        'error.type': 'NOT_FOUND',
      });
    });

    it('propagates manual filters overrides from StructuredBackend to an upstream NodeBackend', () => {
      const stderrMessages: string[] = [];
      sinon
        .stub(console, 'error')
        .callsFake((_fmt: unknown, ...params: unknown[]) => {
          stderrMessages.push(String(params[3] ?? ''));
        });

      // 1. Direct `.filters = ['*']` override when GOOGLE_SDK_NODE_LOGGING='spanner'.
      process.env[al.env.nodeEnables] = 'spanner';
      const structuredWithNode = al.getStructuredBackend(
        al.getNodeBackend(),
      ) as al.DebugLogBackendBase;
      structuredWithNode.filters = ['*'];
      al.setBackend(structuredWithNode);
      process.env[al.env.nodeEnables] = 'bigquery';

      al.log('secretmanager').info('manual wildcard override with NodeBackend');
      assert.strictEqual(stderrMessages.length, 1);
      assert.deepStrictEqual(JSON.parse(stderrMessages[0]), {
        severity: 'INFO',
        message: 'manual wildcard override with NodeBackend',
      });

      // 2. Public `setFilters(['storage'])` override on `getStructuredBackend(getNodeBackend())`.
      stderrMessages.length = 0;
      process.env[al.env.nodeEnables] = 'spanner';
      const publicBackend = al.getStructuredBackend(al.getNodeBackend());
      publicBackend.setFilters(['storage']);
      al.setBackend(publicBackend);

      al.log('secretmanager').info('dropped by storage filter');
      al.log('storage').warn('allowed by storage filter');
      assert.strictEqual(stderrMessages.length, 1);
      assert.deepStrictEqual(JSON.parse(stderrMessages[0]), {
        severity: 'WARNING',
        message: 'allowed by storage filter',
      });
    });
  });

  describe('sub-logs', () => {
    let logger: any;
    const system = 'sublogs';
    const subsystem = 'subsys';

    beforeEach(() => {
      al.setBackend(sink);
      sink.reset();

      process.env[al.env.nodeEnables] = system;
      logger = al.log(system);
    });

    it('create with the log sub-function ', () => {
      const sublogger = logger.sublog(subsystem);
      sublogger({}, 'test log', 5, {other: 'foo'});
      assert.deepStrictEqual(sink.logs, [
        {
          namespace: `${system}:${subsystem}`,
          fields: {},
          args: ['test log', 5, {other: 'foo'}],
        },
      ]);
    });
  });

  describe('Public entrypoint contract (src/index.ts)', () => {
    it('exports LogSeverity as a runtime enum from index', () => {
      assert.strictEqual(al.LogSeverity.DEFAULT, 'DEFAULT');
      assert.strictEqual(al.LogSeverity.DEBUG, 'DEBUG');
      assert.strictEqual(al.LogSeverity.INFO, 'INFO');
      assert.strictEqual(al.LogSeverity.WARNING, 'WARNING');
      assert.strictEqual(al.LogSeverity.ERROR, 'ERROR');
    });

    it('exports required functions, classes, and constants on the public entrypoint', () => {
      assert.strictEqual(typeof al.log, 'function');
      assert.strictEqual(typeof al.placeholder, 'function');
      assert.strictEqual(typeof al.setBackend, 'function');
      assert.strictEqual(typeof al.getBackend, 'function');
      assert.strictEqual(typeof al.getNodeBackend, 'function');
      assert.strictEqual(typeof al.getDebugBackend, 'function');
      assert.strictEqual(typeof al.getStructuredBackend, 'function');
      assert.strictEqual(typeof al.AdhocDebugLogger, 'function');
      assert.strictEqual(typeof al.DebugLogBackendBase, 'function');
      assert.strictEqual(typeof al.env, 'object');
      assert.strictEqual(al.env.nodeEnables, 'GOOGLE_SDK_NODE_LOGGING');
    });

    it('returns the active backend from getBackend() across undefined, lazy default, custom, and null states', () => {
      al.setBackend(undefined);
      delete process.env[al.env.nodeEnables];
      assert.strictEqual(al.getBackend(), undefined);
      assert.strictEqual(al.log('storage'), al.placeholder);
      assert.strictEqual(al.getBackend(), undefined);

      process.env[al.env.nodeEnables] = 'spanner';
      al.log('storage');
      const lazyBackend = al.getBackend();
      assert.ok(lazyBackend instanceof al.DebugLogBackendBase);

      al.setBackend(sink);
      assert.strictEqual(al.getBackend(), sink);

      const structured = al.getStructuredBackend();
      al.setBackend(structured);
      assert.strictEqual(al.getBackend(), structured);

      al.setBackend(null);
      assert.strictEqual(al.getBackend(), null);
    });

    it('exports placeholder conforming to AdhocDebugLogFunction contract', () => {
      const fn: al.AdhocDebugLogFunction = al.placeholder;
      assert.strictEqual(typeof fn.debug, 'function');
      assert.strictEqual(typeof fn.info, 'function');
      assert.strictEqual(typeof fn.warn, 'function');
      assert.strictEqual(typeof fn.error, 'function');
      assert.strictEqual(typeof fn.sublog, 'function');
      assert.strictEqual(typeof fn.on, 'function');
      assert.ok(fn.instance instanceof al.AdhocDebugLogger);

      // Invoking placeholder methods when disabled is a safe no-op.
      al.setBackend(null);
      assert.doesNotThrow(() => {
        fn({severity: al.LogSeverity.DEBUG, key: 'val'}, 'noop');
        fn.debug('noop');
        fn.info('noop');
        fn.warn('noop');
        fn.error('noop');
        assert.strictEqual(fn.sublog('child'), al.placeholder);
      });
    });

    it('preserves AdhocDebugLogFunction, LogFields, and DebugLogBackend contracts via log()', () => {
      al.setBackend(sink);
      sink.reset();
      process.env[al.env.nodeEnables] = '*';

      const logger: al.AdhocDebugLogFunction = al.log('contract-system');
      assert.strictEqual(typeof logger, 'function');
      assert.strictEqual(typeof logger.debug, 'function');
      assert.strictEqual(typeof logger.info, 'function');
      assert.strictEqual(typeof logger.warn, 'function');
      assert.strictEqual(typeof logger.error, 'function');
      assert.strictEqual(typeof logger.sublog, 'function');
      assert.strictEqual(typeof logger.on, 'function');
      assert.ok(logger.instance instanceof al.AdhocDebugLogger);

      const fields: al.LogFields = {
        severity: al.LogSeverity.INFO,
        trace_id: 'trace-123',
        span_id: 'span-456',
        trace_sampled: true,
        'rpc.system.name': 'grpc',
        telemetryTraceId: 'legacy-trace-123',
        telemetrySpanId: 'legacy-span-456',
        other: {'rpc.system': 'grpc'},
      };
      logger(fields, 'contract message %s', 'arg1');

      assert.deepStrictEqual(sink.logs, [
        {
          namespace: 'contract-system',
          fields,
          args: ['contract message %s', 'arg1'],
        },
      ]);

      const nodeBackend: al.DebugLogBackend = al.getNodeBackend();
      assert.strictEqual(typeof nodeBackend.log, 'function');
      assert.strictEqual(typeof nodeBackend.setFilters, 'function');

      const structuredBackend: al.DebugLogBackend =
        al.getStructuredBackend(nodeBackend);
      assert.strictEqual(typeof structuredBackend.log, 'function');
      assert.strictEqual(typeof structuredBackend.setFilters, 'function');
    });
  });
});
