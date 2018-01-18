/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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
import * as winston from 'winston';

import * as types from '../src/types/core';

const logging = require('@google-cloud/logging')();
const LoggingWinston = require('../src/index').LoggingWinston;

describe('LoggingWinston', () => {
  const WRITE_CONSISTENCY_DELAY_MS = 90000;

  const logger = new winston.Logger({
    transports: [new LoggingWinston()],
  });

  describe('log', () => {
    const testTimestamp = new Date();

    const testData = [
      {
        args: ['first'],
        level: 'info',
        verify: (entry: types.StackdriverEntry) => {
          assert.deepStrictEqual(entry.data, {
            message: 'first',
            metadata: {},
          });
        },
      },

      {
        args: ['second'],
        level: 'info',
        verify: (entry: types.StackdriverEntry) => {
          assert.deepStrictEqual(entry.data, {
            message: 'second',
            metadata: {},
          });
        },
      },

      {
        args: ['third', {testTimestamp}],
        level: 'info',
        verify: (entry: types.StackdriverEntry) => {
          assert.deepStrictEqual(entry.data, {
            message: 'third',
            metadata: {
              testTimestamp: String(testTimestamp),
            },
          });
        },
      },

      {
        args: [new Error('forth')],
        level: 'error',
        verify: (entry: types.StackdriverEntry) => {
          assert((entry.data as {
                   message: string
                 }).message.startsWith('Error: forth'));
        },
      },

      {
        args: ['fifth message', new Error('fifth')],
        level: 'error',
        verify: (entry: types.StackdriverEntry) => {
          assert((entry.data as {
                   message: string
                 }).message.startsWith('fifth message Error: fifth'));
        },
      },
    ];

    it('should properly write log entries', (done) => {
      testData.forEach((test) => {
        // logger does not have index signature.
        // tslint:disable-next-line:no-any
        (logger as any)[test.level].apply(logger, test.args);
      });
      setTimeout(() => {
        logging.log('winston_log')
            .getEntries(
                {
                  pageSize: testData.length,
                },
                (err: Error, entries: types.StackdriverEntry[]) => {
                  assert.ifError(err);
                  assert.strictEqual(entries.length, testData.length);
                  entries.reverse().forEach((entry, index) => {
                    const test = testData[index];
                    test.verify(entry);
                  });

                  done();
                });
      }, WRITE_CONSISTENCY_DELAY_MS);
    });
  });
});
