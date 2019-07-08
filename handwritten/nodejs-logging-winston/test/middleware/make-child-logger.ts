import * as assert from 'assert';
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
    // tslint:disable-next-line:no-any
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
    // tslint:disable-next-line:no-any
    (LOGGER.write as any) = (info: winston.LogEntry) => {
      trace = info[LOGGING_TRACE_KEY];
    };
    child.debug('hello world');
    assert.strictEqual(trace, FAKE_TRACE);
  });

  it('should not overwrite existing LOGGING_TRACE_KEY value', () => {
    const child = makeChildLogger(LOGGER, FAKE_TRACE);
    let trace;
    // tslint:disable-next-line:no-any
    (LOGGER.write as any) = (info: winston.LogEntry) => {
      trace = info[LOGGING_TRACE_KEY];
    };
    child.debug('hello world', {[LOGGING_TRACE_KEY]: 'to-be-clobbered'});
    assert.notStrictEqual(trace, FAKE_TRACE);
  });
});
