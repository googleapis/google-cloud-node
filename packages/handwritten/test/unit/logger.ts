// Copyright 2016 Google LLC
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
import {describe, it, before, after, beforeEach, afterEach} from 'mocha';
import {createLogger} from '../../src/logger';

describe('logger', () => {
  describe('Initialization', () => {
    let oldEnv: string | undefined;
    before(() => {
      oldEnv = process.env.GCLOUD_ERRORS_LOGLEVEL;
      delete process.env.GCLOUD_ERRORS_LOGLEVEL;
    });
    after(() => {
      process.env.GCLOUD_ERRORS_LOGLEVEL = oldEnv;
    });
    describe('Exception handling', () => {
      it('Should not throw given undefined', () => {
        assert.doesNotThrow(
          createLogger,
          (createLogger() as {}) as (err: Error) => boolean
        );
      });
      it('Should not throw given an empty object', () => {
        assert.doesNotThrow(
          createLogger.bind(null, {}),
          (createLogger() as {}) as (err: Error) => boolean
        );
      });
      it('Should not throw given logLevel as a number', () => {
        assert.doesNotThrow(
          createLogger.bind(null, {logLevel: 3}),
          (createLogger({logLevel: 3}) as {}) as (err: Error) => boolean
        );
      });
      it('Should not throw given logLevel as a string', () => {
        assert.doesNotThrow(
          createLogger.bind(null, {logLevel: '3'}),
          (createLogger({logLevel: 3}) as {}) as (err: Error) => boolean
        );
      });
      it('Should not throw given an env variable to use', () => {
        process.env.GCLOUD_ERRORS_LOGLEVEL = '4';
        assert.doesNotThrow(
          createLogger,
          (createLogger({
            logLevel: 4,
          }) as {}) as (err: Error) => boolean
        );
        delete process.env.GCLOUD_ERRORS_LOGLEVEL;
      });
      it('Should thow given logLevel as null', () => {
        assert.throws(createLogger.bind(null, {logLevel: null!}), undefined);
      });
    });
    describe('Default log level', () => {
      let oldLog: (text: any, args: string[]) => void;
      let text: string | undefined;
      beforeEach(() => {
        // eslint-disable-next-line no-console
        oldLog = console.error;
        text = '';
        // eslint-disable-next-line no-console
        console.error = function(this, ...args: string[]) {
          oldLog(this, args);
          for (let i = 0; i < args.length; i++) {
            text += args[i];
          }
        };
      });
      afterEach(() => {
        text = undefined;
        // eslint-disable-next-line no-console
        console.error = oldLog;
      });
      it('Should print WARN logs by default', () => {
        const logger = createLogger();
        logger.warn('test warning message');
        assert.strictEqual(
          text,
          'WARN:@google-cloud/error-reporting: test warning message'
        );
      });
      it('Should print ERROR logs by default', () => {
        const logger = createLogger();
        logger.error('test error message');
        assert.strictEqual(
          text,
          'ERROR:@google-cloud/error-reporting: test error message'
        );
      });
    });
  });
});
