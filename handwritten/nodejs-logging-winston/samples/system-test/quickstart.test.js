/**
 * Copyright 2016, Google, Inc.
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
const logging = proxyquire(`@google-cloud/logging`, {})();
const uuid = require(`node-uuid`);

const logName = `nodejs-docs-samples-test-${uuid.v4()}`;

describe(`logging:quickstart`, () => {
  let logMock, loggingMock, LoggingMock;

  after((done) => {
    logging.log(logName).delete(() => {
      // Ignore any error, the topic might not have been created
      done();
    });
  });

  it(`should log an entry`, (done) => {
    const expectedlogName = `my-log`;

    logMock = {
      entry: sinon.stub().returns({}),
      write: (_entry, _callback) => {
        assert.deepEqual(_entry, {});
        assert.equal(typeof _callback, 'function');

        const log = logging.log(logName);
        const text = `Hello, world!`;
        const entry = log.entry({ type: `global` }, text);
        log.write(entry, (err, apiResponse) => {
          _callback(err, apiResponse);
          assert.ifError(err);
          assert.notEqual(apiResponse, undefined);
          assert.equal(console.log.calledOnce, true);
          assert.deepEqual(console.log.firstCall.args, [`Logged: ${text}`]);
          done();
        });
      }
    };
    loggingMock = {
      log: (_logName) => {
        assert.equal(_logName, expectedlogName);
        return logMock;
      }
    };
    LoggingMock = sinon.stub().returns(loggingMock);

    proxyquire(`../quickstart`, {
      '@google-cloud/logging': LoggingMock
    });
  });
});
