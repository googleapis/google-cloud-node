/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const proxyquire = require(`proxyquire`).noPreserveCache();
const sinon = require(`sinon`);
const test = require(`ava`);
const tools = require(`@google-cloud/nodejs-repo-tools`);
const uuid = require(`uuid`);

const logging = proxyquire(`@google-cloud/logging`, {})();

const logName = `nodejs-docs-samples-test-${uuid.v4()}`;

test.after.always(async () => {
  try {
    await logging.log(logName).delete();
  } catch (err) {} // ignore error
});

test.beforeEach(tools.stubConsole);
test.afterEach.always(tools.restoreConsole);

test.cb(`should log an entry`, (t) => {
  const expectedlogName = `my-log`;

  const logMock = {
    entry: sinon.stub().returns({}),
    write: (_entry) => {
      t.deepEqual(_entry, {});

      const log = logging.log(logName);
      const text = `Hello, world!`;
      const entry = log.entry({ resource: { type: `global` } }, text);

      return log.write(entry)
        .then((results) => {
          setTimeout(() => {
            try {
              t.true(console.log.calledOnce);
              t.deepEqual(console.log.firstCall.args, [`Logged: ${text}`]);
              t.end();
            } catch (err) {
              t.end(err);
            }
          }, 200);

          return results;
        });
    }
  };
  const loggingMock = {
    log: (_logName) => {
      t.is(_logName, expectedlogName);
      return logMock;
    }
  };

  proxyquire(`../quickstart`, {
    '@google-cloud/logging': sinon.stub().returns(loggingMock)
  });
});
