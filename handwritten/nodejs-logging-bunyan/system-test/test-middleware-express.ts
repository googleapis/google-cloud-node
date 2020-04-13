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

/* AN EXAMPLE RATHER THAN A TEST AT THIS POINT */

import * as assert from 'assert';
import {describe, it, before} from 'mocha';
import delay from 'delay';
import * as uuid from 'uuid';
import {express as elb} from '../src/index';
import {Logging} from '@google-cloud/logging';

const logging = new Logging();

const WRITE_CONSISTENCY_DELAY_MS = 20 * 1000;
const TEST_TIMEOUT = WRITE_CONSISTENCY_DELAY_MS + 10 * 1000;
const LOG_NAME = `bunyan-system-test-${uuid.v4()}`;

describe('express middleware', () => {
  let logger: elb.MiddlewareReturnType['logger'];
  let mw: elb.MiddlewareReturnType['mw'];

  before(async () => {
    ({logger, mw} = await elb.middleware({logName: LOG_NAME, level: 'info'}));
  });

  describe('global logger', () => {
    it('should properly write log entries', async () => {
      const LOG_MESSAGE = `unique log message ${uuid.v4()}`;
      logger.info(LOG_MESSAGE);

      await delay(WRITE_CONSISTENCY_DELAY_MS);

      const log = logging.log(`${LOG_NAME}_applog`);
      const entries = (await log.getEntries({pageSize: 1}))[0];
      assert.strictEqual(entries.length, 1);
      assert.strictEqual(LOG_MESSAGE, entries[0].data.message);
    }).timeout(TEST_TIMEOUT);
  });

  describe('request logging middleware', () => {
    it('should write request correlated log entries', done => {
      const LOG_MESSAGE = `correlated log message ${uuid.v4()}`;
      const fakeRequest = {headers: {fake: 'header'}};
      const fakeResponse = {};
      const next = async () => {
        // At this point fakeRequest.log should have been installed.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (fakeRequest as any).log.info(LOG_MESSAGE);

        await delay(WRITE_CONSISTENCY_DELAY_MS);

        const log = logging.log(`${LOG_NAME}_applog`);
        const entries = (await log.getEntries({pageSize: 1}))[0];
        assert.strictEqual(entries.length, 1);
        const entry = entries[0];
        assert.strictEqual(LOG_MESSAGE, entry.data.message);
        assert(entry.metadata.trace, 'should have a trace property');
        assert(entry.metadata.trace!.match(/projects\/.*\/traces\/.*/));
        done();
      };

      // Call middleware with mocks.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mw(fakeRequest as any, fakeResponse as any, next);
    }).timeout(TEST_TIMEOUT);
  });
});
