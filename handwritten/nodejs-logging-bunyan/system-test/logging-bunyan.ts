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
import * as bunyan from 'bunyan';
import delay from 'delay';

import * as types from '../src/types/core';
import {ErrorsApiTransport} from './errors-transport';

const logging = require('@google-cloud/logging')();
import {LoggingBunyan} from '../src/index';

const LOG_NAME = 'bunyan_log_system_tests';

describe('LoggingBunyan', () => {
  const WRITE_CONSISTENCY_DELAY_MS = 90000;

  const loggingBunyan = new LoggingBunyan({
    logName: LOG_NAME,
    serviceContext: {service: 'logging-bunyan-system-test', version: 'none'}
  });
  const logger = bunyan.createLogger({
    name: 'google-cloud-node-system-test',
    streams: [loggingBunyan.stream('info')],
  });

  it('should properly write log entries', (done) => {
    const timestamp = new Date();
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
              (entry.data as types.StackdriverData).message, 'first');
          assert.strictEqual(
              (entry.data as types.StackdriverData).pid, process.pid);
        },
      },

      {
        args: [new Error('second')],
        level: 'error',
        verify: (entry: types.StackdriverEntry) => {
          assert(((entry.data as types.StackdriverData).message as string)
                     .startsWith('Error: second'));
          assert.strictEqual(
              (entry.data as types.StackdriverData).pid, process.pid);
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
              (entry.data as types.StackdriverData).message, 'third');
          assert.strictEqual(
              (entry.data as types.StackdriverData).pid, process.pid);
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
            (entry.data as types.StackdriverData).message, 'earliest');
        assert.strictEqual(
            (entry.data as types.StackdriverData).pid, process.pid);
        assert.strictEqual(
            ((entry.metadata as types.StackdriverEntryMetadata).timestamp as
             Date)
                .toString(),
            timestamp.toString());
      },
    };

    // Forcibly insert a delay to cause 'third' to have a deterministically
    // earlier timestamp.
    setTimeout(() => {
      testData.forEach((test) => {
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
    }, 10);

    setTimeout(() => {
      const log = logging.log(LOG_NAME);

      log.getEntries(
          {
            pageSize: testData.length,
          },
          (err: Error, entries: types.StackdriverEntry[]) => {
            assert.ifError(err);
            assert.strictEqual(entries.length, testData.length);

            // Make sure entries are valid and are in the correct order.
            entries.reverse().forEach((entry, index) => {
              const test = testData[index];
              test.verify(entry);
            });

            done();
          });
    }, WRITE_CONSISTENCY_DELAY_MS);
  });

  describe.only('ErrorReporting', () => {
    const ERROR_REPORTING_DELAY_MS = 20 * 1000;
    const errorsTransport = new ErrorsApiTransport();

    beforeEach(async function() {
      this.timeout(2 * ERROR_REPORTING_DELAY_MS);
      await errorsTransport.deleteAllEvents();
      await new Promise((resolve, reject) => {
        setTimeout(resolve, ERROR_REPORTING_DELAY_MS);
      });
    });

    afterEach(async () => {
      await errorsTransport.deleteAllEvents();
    });

    it('reports errors when logging errors', async function() {
      this.timeout(2 * ERROR_REPORTING_DELAY_MS);
      const message = `an error at ${Date.now()}`;
      // logger does not have index signature.
      // tslint:disable-next-line:no-any
      (logger as any)['error'].call(logger, new Error(message));
      await delay(ERROR_REPORTING_DELAY_MS);
      const errors = await errorsTransport.getAllGroups();
      assert.strictEqual(errors.length, 1);
      const errEvent = errors[0];
      assert.strictEqual(errEvent.count, '1');
      assert.strictEqual(
          errEvent.representative.serviceContext.service,
          'logging-bunyan-system-test');
      assert(errEvent.representative.message.startsWith(`Error: ${message}`));
    });
  });
});
