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

import {describe, it} from 'mocha';
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

    let logger: any;
    beforeEach(() => {
      al.setBackend(structured);
      sink.reset();

      process.env[al.env.nodeEnables] = system;

      logger = al.log(system);
    });

    it('logs to console.log by default', () => {
      al.setBackend(al.getStructuredBackend());
      logger = al.log(system);
      const sandbox = sinon.createSandbox();
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
      assert.strictEqual(typeof al.getNodeBackend, 'function');
      assert.strictEqual(typeof al.getDebugBackend, 'function');
      assert.strictEqual(typeof al.getStructuredBackend, 'function');
      assert.strictEqual(typeof al.AdhocDebugLogger, 'function');
      assert.strictEqual(typeof al.DebugLogBackendBase, 'function');
      assert.strictEqual(typeof al.env, 'object');
      assert.strictEqual(al.env.nodeEnables, 'GOOGLE_SDK_NODE_LOGGING');
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
        fn({severity: al.LogSeverity.DEBUG, other: {key: 'val'}}, 'noop');
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
        telemetryTraceId: 'trace-123',
        telemetrySpanId: 'span-456',
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
