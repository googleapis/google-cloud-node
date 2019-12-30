/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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
import {describe, it} from 'mocha';
import * as bunyan from 'bunyan';
import * as uuid from 'uuid';
import * as types from '../src/types/core';
import {ErrorsApiTransport} from './errors-transport';

const {Logging} = require('@google-cloud/logging');
const logging = new Logging();
import {LoggingBunyan} from '../src/index';
import delay from 'delay';

const WRITE_CONSISTENCY_DELAY_MS = 90000;

const UUID = uuid.v4();
function logName(name: string) {
  return `${UUID}_${name}`;
}

describe('LoggingBunyan', function() {
  this.timeout(WRITE_CONSISTENCY_DELAY_MS);

  const SERVICE = `logging-bunyan-system-test-${UUID}`;
  const LOG_NAME = logName('logging-bunyan-system-test');
  const loggingBunyan = new LoggingBunyan({
    logName: LOG_NAME,
    serviceContext: {service: SERVICE, version: 'none'},
  });
  const logger = bunyan.createLogger({
    name: 'google-cloud-node-system-test',
    streams: [loggingBunyan.stream('info')],
  });

  it('should properly write log entries', async () => {
    const timestamp = new Date();
    const start = Date.now();

    // Type of circular.circular cannot be determined..
    // tslint:disable-next-line:no-any
    const circular: {circular?: any} = {};
    circular.circular = circular;

    const testData = [
      {
        args: ['first'],
        level: 'info',
        verify: (entry: types.StackdriverEntry) => {
          assert.strictEqual(
            (entry.data as types.StackdriverData).message,
            'first'
          );
          assert.strictEqual(
            (entry.data as types.StackdriverData).pid,
            process.pid
          );
        },
      },

      {
        args: [new Error('second')],
        level: 'error',
        verify: (entry: types.StackdriverEntry) => {
          assert(
            ((entry.data as types.StackdriverData)
              .message as string).startsWith('Error: second')
          );
          assert.strictEqual(
            (entry.data as types.StackdriverData).pid,
            process.pid
          );
        },
      },

      {
        args: [
          {
            test: circular,
          },
          'third',
        ],
        level: 'info',
        verify: (entry: types.StackdriverEntry) => {
          assert.strictEqual(
            (entry.data as types.StackdriverData).message,
            'third'
          );
          assert.strictEqual(
            (entry.data as types.StackdriverData).pid,
            process.pid
          );
          assert.deepStrictEqual((entry.data as types.StackdriverData).test, {
            circular: '[Circular]',
          });
        },
      },
    ];

    const earliest = {
      args: [
        {
          time: timestamp,
        },
        'earliest',
      ],
      level: 'info',
      verify: (entry: types.StackdriverEntry) => {
        assert.strictEqual(
          (entry.data as types.StackdriverData).message,
          'earliest'
        );
        assert.strictEqual(
          (entry.data as types.StackdriverData).pid,
          process.pid
        );
        assert.strictEqual(
          ((entry.metadata as types.StackdriverEntryMetadata)
            .timestamp as Date).toString(),
          timestamp.toString()
        );
      },
    };

    // Forcibly insert a delay to cause 'third' to have a deterministically
    // earlier timestamp.
    await delay(10);

    testData.forEach(test => {
      // logger does not have index signature.
      // tslint:disable-next-line:no-any
      (logger as any)[test.level].apply(logger, test.args);
    });
    // `earliest` is sent last, but it should show up as the earliest entry.
    // logger does not have index signature.
    // tslint:disable-next-line:no-any
    (logger as any)[earliest.level].apply(logger, earliest.args);
    // insert into list as the earliest entry.
    // TODO: identify the correct type for testData and earliest
    // tslint:disable-next-line:no-any
    testData.unshift(earliest as any);

    const entries = await pollLogs(
      LOG_NAME,
      start,
      testData.length,
      WRITE_CONSISTENCY_DELAY_MS
    );
    assert.strictEqual(entries.length, testData.length);
    entries.reverse().forEach((entry, index) => {
      const test = testData[index];
      test.verify(entry);
    });
  });

  describe('ErrorReporting', () => {
    const ERROR_REPORTING_POLL_TIMEOUT = WRITE_CONSISTENCY_DELAY_MS;
    const errorsTransport = new ErrorsApiTransport();

    it('reports errors when logging errors', async () => {
      const start = Date.now();

      const message = `an error at ${Date.now()}`;
      logger.error(new Error(message));

      const errors = await errorsTransport.pollForNewEvents(
        SERVICE,
        start,
        ERROR_REPORTING_POLL_TIMEOUT
      );

      assert.strictEqual(
        errors.length,
        1,
        `expected 1 error but got ${require('util').inspect(errors)}`
      );
      const errEvent = errors[0];

      assert.strictEqual(errEvent.serviceContext.service, SERVICE);
      assert(errEvent.message.startsWith(`Error: ${message}`));
    });
  });
});

// polls for the entire array of entries to be greater than logTime.
function pollLogs(
  logName: string,
  logTime: number,
  size: number,
  timeout: number
) {
  const p = new Promise<types.StackdriverEntry[]>((resolve, reject) => {
    const end = Date.now() + timeout;
    loop();

    function loop() {
      setTimeout(() => {
        logging.log(logName).getEntries(
          {
            pageSize: size,
          },
          (err: Error, entries: types.StackdriverEntry[]) => {
            if (!entries || entries.length < size) return loop();

            const {receiveTimestamp} = (entries[entries.length - 1].metadata ||
              {}) as {receiveTimestamp: {seconds: number; nanos: number}};
            const timeMilliseconds =
              receiveTimestamp.seconds * 1000 + receiveTimestamp.nanos * 1e-6;

            if (timeMilliseconds >= logTime) {
              return resolve(entries);
            }

            if (Date.now() > end) {
              return reject(new Error('timeout'));
            }
            loop();
          }
        );
      }, 500);
    }
  });

  return p;
}
