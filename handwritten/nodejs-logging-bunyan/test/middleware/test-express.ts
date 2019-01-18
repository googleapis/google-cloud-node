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
import * as proxyquire from 'proxyquire';

// FIXME(ofrobots): use a proper export once the following is released:
// https://github.com/googleapis/google-auth-library-nodejs/pull/569.
import envDetect = require('google-auth-library/build/src/auth/envDetect');

// types-only import. Actual require is done through proxyquire below.
import {MiddlewareOptions} from '../../src/middleware/express';

const FAKE_PROJECT_ID = 'project-🦄';
const FAKE_GENERATED_MIDDLEWARE = () => {};

const FAKE_ENVIRONMENT = 'FAKE_ENVIRONMENT';

let authEnvironment: string;
let passedOptions: Array<MiddlewareOptions|undefined>;

class FakeLoggingBunyan {
  // tslint:disable-next-line:no-any Doing "just enough" faking.
  stackdriverLog: any;
  constructor(options: MiddlewareOptions) {
    passedOptions.push(options);
    this.stackdriverLog = {
      logging: {
        auth: {
          async getProjectId() {
            return FAKE_PROJECT_ID;
          },
          async getEnv() {
            return authEnvironment;
          }
        }
      }
    };
  }

  // tslint:disable-next-line:no-any Doing "just enough" faking.
  stream(level: any) {
    return {level, type: 'raw', stream: this};
  }
}

let passedProjectId: string|undefined;
let passedEmitRequestLog: Function|undefined;
function fakeMakeMiddleware(
    projectId: string, makeChildLogger: Function,
    emitRequestLog: Function): Function {
  passedProjectId = projectId;
  passedEmitRequestLog = emitRequestLog;
  return FAKE_GENERATED_MIDDLEWARE;
}

const {middleware, APP_LOG_SUFFIX} =
    proxyquire('../../src/middleware/express', {
      '../../src/index': {LoggingBunyan: FakeLoggingBunyan},
      '@google-cloud/logging':
          {middleware: {express: {makeMiddleware: fakeMakeMiddleware}}}
    });

describe('middleware/express', () => {
  beforeEach(() => {
    passedOptions = [];
    passedProjectId = undefined;
    passedEmitRequestLog = undefined;
    authEnvironment = FAKE_ENVIRONMENT;
  });

  it('should create and return a middleware', async () => {
    const {mw} = await middleware();
    assert.strictEqual(mw, FAKE_GENERATED_MIDDLEWARE);
  });

  it('should generate two loggers with default logName and level', async () => {
    await middleware();
    // Should generate two loggers with the expected names.
    assert.ok(passedOptions);
    assert.strictEqual(passedOptions.length, 2);
    assert.ok(passedOptions.some(
        option => option!.logName === `bunyan_log_${APP_LOG_SUFFIX}`));
    assert.ok(passedOptions.some(option => option!.logName === `bunyan_log`));
    assert.ok(passedOptions.every(option => option!.level === 'info'));
  });

  it('should prefer user-provided logName and level', async () => {
    const LOGNAME = '㏒';
    const LEVEL = 'fatal';
    const OPTIONS = {logName: LOGNAME, level: LEVEL};
    await middleware(OPTIONS);
    assert.ok(passedOptions);
    assert.strictEqual(passedOptions.length, 2);
    assert.ok(passedOptions.some(
        option => option!.logName === `${LOGNAME}_${APP_LOG_SUFFIX}`));
    assert.ok(passedOptions.some(option => option!.logName === LOGNAME));
    assert.ok(passedOptions.every(option => option!.level === LEVEL));
  });

  it('should acquire the projectId and pass to makeMiddleware', async () => {
    await middleware();
    assert.strictEqual(passedProjectId, FAKE_PROJECT_ID);
  });

  [envDetect.GCPEnv.APP_ENGINE, envDetect.GCPEnv.CLOUD_FUNCTIONS].forEach(
      env => {
        it(`should not generate the request logger on ${env}`, async () => {
          authEnvironment = env;
          await middleware();
          assert.ok(passedOptions);
          assert.strictEqual(passedOptions.length, 1);
          // emitRequestLog parameter to makeChildLogger should be undefined.
          assert.strictEqual(passedEmitRequestLog, undefined);
        });
      });
});