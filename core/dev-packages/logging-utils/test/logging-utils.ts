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

import * as al from '../src/logging-utils';

interface TestLog {
  namespace: string;
  fields: al.LogFields;
  args: unknown[];
}

class TestSink extends al.DebugLogBackendBase {
  logs: TestLog[] = [];

  makeLogger(namespace: string): al.AdhocDebugLogCallable {
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
      al.setBackend(sink);
      sink.reset();

      process.env[al.env.nodeEnables] = 'all';
      const logger = al.log(system);
      logger({}, 'foo');
      assert.deepStrictEqual(sink.logs, [
        {
          namespace: system,
          fields: {},
          args: ['foo'],
        },
      ]);
    });
  });

  describe('Manually enabled', () => {
    let logger: al.AdhocDebugLogFunction;
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
    let logger: al.AdhocDebugLogFunction;
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
      logger({severity: al.LogSeverity.INFO}, 'test log', 5, {other: 'foo'});
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
    let logger: al.AdhocDebugLogFunction;
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

    let logger: al.AdhocDebugLogFunction;
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
    let logger: al.AdhocDebugLogFunction;
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
});
