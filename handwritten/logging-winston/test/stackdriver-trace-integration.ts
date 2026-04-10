// Copyright 2019 Google LLC
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

import * as assert from 'assert';
import {describe, it, before, beforeEach, after} from 'mocha';
import * as proxyquire from 'proxyquire';
import * as winston from 'winston';
import * as loggingWinstonLibTypes from '../src/index';

declare const global: {[index: string]: {} | null};

/**
 * Tests that ensure that getDefaultMetadataForTracing can be used for
 * trace-log correlation when Cloud Trace Agent is present. See
 * src/default-metadata.ts for an explanation on why this to exist.
 */
describe('Cloud Trace Log Correlation', () => {
  // Trace context IDs seen in logs so far in a test.
  const seenContextIds: string[] = [];
  // Set a trace context ID for all succeeding Winston logs.
  let setCurrentContextId: (id: string) => void;
  // The Cloud Logging Winston transport library.
  let loggingWinstonLib: typeof loggingWinstonLibTypes;
  // The flag indicating if callback was called or not
  let isCallbackCalled: boolean;

  class FakeLogging {
    constructor() {}
    log(data: never, callback: () => void) {
      if (typeof callback === 'function') setImmediate(callback);
      return this;
    }
    // Stub entry to record the incoming trace context ID.
    entry(metadata: {trace: string}) {
      if (metadata.trace) {
        const traceId = metadata.trace.split('/')[3];
        assert.ok(traceId);
        seenContextIds.push(traceId);
      } else {
        seenContextIds.push('');
      }
      return {};
    }
    info(data: never, callback: () => void) {
      return this.log(data, callback);
    }
  }

  before(() => {
    loggingWinstonLib = proxyquire('../src/index', {
      '@google-cloud/logging': {'@global': true, Logging: FakeLogging},
    });
  });

  beforeEach(() => {
    seenContextIds.length = 0;
    isCallbackCalled = false;
    setCurrentContextId = (() => {
      let currentContextId: string;
      global._google_trace_agent = {
        getCurrentContextId: () => {
          return currentContextId;
        },
        getWriterProjectId: () => {
          return 'project1';
        },
      };
      return (id: string) => {
        currentContextId = id;
      };
    })();
  });

  after(() => {
    delete global._google_trace_agent;
  });

  it('Works when using supporting default metadata', done => {
    const transport = new loggingWinstonLib.LoggingWinston();
    const logger = winston.createLogger({
      transports: [transport],
      defaultMeta: loggingWinstonLib.getDefaultMetadataForTracing(),
    });
    setCurrentContextId('1');
    logger.log({level: 'info', message: 'hello'});
    setCurrentContextId('2');
    logger.log({level: 'info', message: 'hello'});
    setCurrentContextId('3');
    setImmediate(() => {
      assert.strictEqual(seenContextIds.length, 3);
      assert.deepStrictEqual(seenContextIds, ['1', '', '2']);
      done();
    });
  });

  /**
   * This test is just like the previous one, but without using
   * getDefaultMetadataForTracing. The expected seen context IDs are ['1', '3'],
   * which are wrong.
   * If this test ever fails, that signals that getDefaultMetadataForTracing
   * may no longer be a necessary API, as Winston 3 has fixed its context
   * propagation issue.
   */
  it('Does not work without using supporting default metadata', done => {
    const transport = new loggingWinstonLib.LoggingWinston();
    const logger = winston.createLogger({
      transports: [transport],
    });
    setCurrentContextId('1');
    logger.log({level: 'info', message: 'hello'});
    setCurrentContextId('2');
    logger.log({level: 'info', message: 'hello'});
    setCurrentContextId('3');
    setImmediate(() => {
      assert.strictEqual(seenContextIds.length, 2);
      assert.throws(() => {
        assert.deepStrictEqual(seenContextIds, ['1', '2']);
      });
      done();
    });
  });

  it('Calls default callback when present', done => {
    const transport = new loggingWinstonLib.LoggingWinston({
      defaultCallback: () => {
        isCallbackCalled = true;
      },
    });
    const logger = winston.createLogger({
      transports: [transport],
    });
    logger.log({level: 'info', message: 'hello'});
    setImmediate(() => {
      assert.strictEqual(isCallbackCalled, true);
      done();
    });
  });

  [null, {}, {getWriterProjectId: () => 'project1'}].forEach(testCase => {
    it(`Doesn't crash when a non-compatible Trace Agent is present: ${testCase}`, done => {
      global._google_trace_agent = testCase;
      const transport = new loggingWinstonLib.LoggingWinston();
      const logger = winston.createLogger({
        transports: [transport],
        defaultMeta: loggingWinstonLib.getDefaultMetadataForTracing(),
      });
      setCurrentContextId('1');
      logger.log({level: 'info', message: 'hello'});
      setCurrentContextId('2');
      logger.log({level: 'info', message: 'hello'});
      setCurrentContextId('3');
      setImmediate(() => {
        assert.strictEqual(seenContextIds.length, 2);
        done();
      });
    });
  });

  [
    {
      getCurrentContextId: () => 'trace1',
      getWriterProjectId: () => null,
    },
    {
      getCurrentContextId: () => null,
      getWriterProjectId: () => 'project1',
    },
  ].forEach(testCase => {
    it(`Doesn't crash when a Trace Agent field is not present: ${testCase}`, done => {
      global._google_trace_agent = testCase;
      const transport = new loggingWinstonLib.LoggingWinston();
      const logger = winston.createLogger({
        transports: [transport],
        defaultMeta: loggingWinstonLib.getDefaultMetadataForTracing(),
      });
      setCurrentContextId('1');
      logger.log({level: 'info', message: 'hello'});
      setCurrentContextId('2');
      logger.log({level: 'info', message: 'hello'});
      setCurrentContextId('3');
      setImmediate(() => {
        assert.strictEqual(seenContextIds.length, 2);
        done();
      });
    });
  });
});
