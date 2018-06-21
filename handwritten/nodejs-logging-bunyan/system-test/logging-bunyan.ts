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

import assert from 'assert';
import * as bunyan from 'bunyan';

import * as types from '../src/types/core';

const logging = require('@google-cloud/logging')();
import {LoggingBunyan} from '../src/index';

describe('LoggingBunyan', () => {
  const WRITE_CONSISTENCY_DELAY_MS = 90000;

  const loggingBunyan = new LoggingBunyan();
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
      const log = logging.log('bunyan_log');

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
});
