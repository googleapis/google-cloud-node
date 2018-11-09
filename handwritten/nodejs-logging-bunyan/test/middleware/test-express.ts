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

// types-only import. Actual require is done through proxyquire below.
import {MiddlewareOptions} from '../../src/middleware/express';

const FAKE_PROJECT_ID = 'project-🦄';
const FAKE_GENERATED_MIDDLEWARE = () => {};

let passedOptions: MiddlewareOptions|undefined;

class FakeLoggingBunyan {
  // tslint:disable-next-line:no-any Doing "just enough" faking.
  stackdriverLog: any;
  constructor(options: MiddlewareOptions) {
    passedOptions = options;
    this.stackdriverLog = {
      logging: {
        auth: {
          async getProjectId() {
            return FAKE_PROJECT_ID;
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
function fakeMakeMiddleware(
    projectId: string, makeChildLogger: Function): Function {
  passedProjectId = projectId;
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
    passedOptions = undefined;
    passedProjectId = undefined;
  });

  it('should create and return a middleware', async () => {
    const {mw} = await middleware();
    assert.strictEqual(mw, FAKE_GENERATED_MIDDLEWARE);
  });

  it('should use default logName and level', async () => {
    await middleware();
    assert.ok(passedOptions);
    assert.strictEqual(passedOptions!.logName, `bunyan_log_${APP_LOG_SUFFIX}`);
    assert.strictEqual(passedOptions!.level, 'info');
  });

  it('should prefer user-provided logName and level', async () => {
    const LOGNAME = '㏒';
    const LEVEL = 'fatal';
    const OPTIONS = {logName: LOGNAME, level: LEVEL};
    await middleware(OPTIONS);
    assert.ok(passedOptions);
    assert.strictEqual(passedOptions!.logName, `${LOGNAME}_${APP_LOG_SUFFIX}`);
    assert.strictEqual(passedOptions!.level, LEVEL);
  });

  it('should acquire the projectId and pass to makeMiddleware', async () => {
    await middleware();
    assert.strictEqual(passedProjectId, FAKE_PROJECT_ID);
  });
});