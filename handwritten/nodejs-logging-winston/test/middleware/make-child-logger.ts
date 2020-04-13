// Copyright 2018 Google LLC
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
import {describe, it, afterEach} from 'mocha';
import * as winston from 'winston';
import {LOGGING_TRACE_KEY} from '../../src/common';

import {makeChildLogger} from '../../src/middleware/make-child-logger';

describe('makeChildLogger', () => {
  const FAKE_TRACE = '🤥';
  const LOGGER = winston.createLogger({
    transports: [new winston.transports.Console({silent: true})],
  });
  const origWrite = LOGGER.write;

  afterEach(() => {
    LOGGER.write = origWrite;
  });

  it('should return a winston-like logger', () => {
    const child = makeChildLogger(LOGGER, FAKE_TRACE);
    let logEntry: winston.LogEntry;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (LOGGER.write as any) = (logEntry_: winston.LogEntry) => {
      logEntry = logEntry_;
    };

    child.info('hello');
    assert.strictEqual(logEntry!.message, 'hello');
    assert.strictEqual(logEntry!.level, 'info');

    child.error('👾', {key: '🎃'});
    assert.strictEqual(logEntry!.message, '👾');
    assert.strictEqual(logEntry!.level, 'error');
    assert.strictEqual(logEntry!.key, '🎃');

    child.warn('hello %d', 56, {key: 'value'});
    assert.strictEqual(logEntry!.message, 'hello %d');
    assert.strictEqual(logEntry!.level, 'warn');
    assert.strictEqual(logEntry!.key, undefined);

    child.log('silly', '🎈');
    assert.strictEqual(logEntry!.message, '🎈');
    assert.strictEqual(logEntry!.level, 'silly');
  });

  it('should override only the write function', () => {
    const child = makeChildLogger(LOGGER, FAKE_TRACE);
    assert.strictEqual(child.warn, LOGGER.warn);
    assert.notStrictEqual(child.write, LOGGER.write);
  });

  it('should inject the LOGGING_TRACE_KEY into the metadata', () => {
    const child = makeChildLogger(LOGGER, FAKE_TRACE);
    let trace;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (LOGGER.write as any) = (info: winston.LogEntry) => {
      trace = info[LOGGING_TRACE_KEY];
    };
    child.debug('hello world');
    assert.strictEqual(trace, FAKE_TRACE);
  });

  it('should not overwrite existing LOGGING_TRACE_KEY value', () => {
    const child = makeChildLogger(LOGGER, FAKE_TRACE);
    let trace;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (LOGGER.write as any) = (info: winston.LogEntry) => {
      trace = info[LOGGING_TRACE_KEY];
    };
    child.debug('hello world', {[LOGGING_TRACE_KEY]: 'to-be-clobbered'});
    assert.notStrictEqual(trace, FAKE_TRACE);
  });
});
