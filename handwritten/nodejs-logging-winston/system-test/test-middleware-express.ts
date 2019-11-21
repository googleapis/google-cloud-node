/*!
 * Copyright 2018 Google LLC
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
import delay from 'delay';
import * as uuid from 'uuid';
import {express as elb} from '../src/index';
import * as winston from 'winston';
import {REQUEST_LOG_SUFFIX} from '../src/middleware/express';

const {Logging} = require('@google-cloud/logging');
const logging = new Logging();

const WRITE_CONSISTENCY_DELAY_MS = 20 * 1000;
const TEST_TIMEOUT = WRITE_CONSISTENCY_DELAY_MS + 10 * 1000;
const LOG_NAME = `winston-system-test-${uuid.v4()}`;

describe(__filename, () => {
  describe('global logger', () => {
    it('should properly write log entries', async () => {
      const logger = winston.createLogger();
      const mw = await elb.makeMiddleware(logger, {
        logName: LOG_NAME,
        level: 'info',
      });

      const LOG_MESSAGE = `unique log message ${uuid.v4()}`;
      logger.info(LOG_MESSAGE);

      await delay(WRITE_CONSISTENCY_DELAY_MS);

      const log = logging.log(LOG_NAME);
      const entries = (await log.getEntries({pageSize: 1}))[0];
      assert.strictEqual(entries.length, 1);
      assert.strictEqual(LOG_MESSAGE, entries[0].data.message);
    }).timeout(TEST_TIMEOUT);
  });

  describe('request logging middleware', () => {
    it('should write request correlated log entries', () => {
      return new Promise(async resolve => {
        const logger = winston.createLogger();
        const mw = await elb.makeMiddleware(logger, {
          logName: LOG_NAME,
          level: 'info',
        });

        const LOG_MESSAGE = `correlated log message ${uuid.v4()}`;
        const fakeRequest = {
          headers: {
            'user-agent': 'Mocha/test-case',
          },
          statusCode: 200,
          originalUrl: '/foo/bar',
          method: 'PUSH',
        };
        const fakeResponse = {
          getHeader: (name: string) => {
            return name === 'Content-Length'
              ? 4104
              : `header-value-for-${name}`;
          },
        };

        const next = async () => {
          // At this point fakeRequest.log should have been installed.
          // tslint:disable-next-line:no-any
          (fakeRequest as any).log.info(LOG_MESSAGE);

          await delay(WRITE_CONSISTENCY_DELAY_MS);

          const appLog = logging.log(LOG_NAME);
          const appLogEntries = (await appLog.getEntries({pageSize: 1}))[0];
          assert.strictEqual(appLogEntries.length, 1);
          const [appLogEntry] = appLogEntries;
          assert.strictEqual(LOG_MESSAGE, appLogEntry.data.message);
          assert(appLogEntry.metadata.trace, 'should have a trace property');
          assert(appLogEntry.metadata.trace.match(/projects\/.*\/traces\/.*/));
          assert.strictEqual(appLogEntry.metadata.severity, 'INFO');

          const requestLog = logging.log(`${LOG_NAME}${REQUEST_LOG_SUFFIX}`);
          const requestLogEntries = (
            await requestLog.getEntries({
              pageSize: 1,
            })
          )[0];
          assert.strictEqual(requestLogEntries.length, 1);
          const [requestLogEntry] = requestLogEntries;
          assert.strictEqual(
            requestLogEntry.metadata.trace,
            appLogEntry.metadata.trace
          );

          resolve();
        };

        // Call middleware with mocks.
        // tslint:disable-next-line:no-any
        mw(fakeRequest as any, fakeResponse as any, next);
      });
    }).timeout(TEST_TIMEOUT);
  });
});
