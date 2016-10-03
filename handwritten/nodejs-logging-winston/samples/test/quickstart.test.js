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

const proxyquire = require(`proxyquire`).noCallThru();

describe(`logging:quickstart`, () => {
  let logMock, loggingMock, LoggingMock;
  const error = new Error(`error`);
  const expectedLogName = `my-log`;
  const expectedResource = { type: `global` };
  const expectedMessage = `Hello, world!`;

  before(() => {
    logMock = {
      entry: sinon.stub().returns({}),
      write: sinon.stub().yields(error)
    };
    loggingMock = {
      log: sinon.stub().returns(logMock)
    };
    LoggingMock = sinon.stub().returns(loggingMock);
  });

  it(`should log an entry`, () => {
    proxyquire(`../quickstart`, {
      '@google-cloud/logging': LoggingMock
    });

    assert.equal(LoggingMock.calledOnce, true);
    assert.deepEqual(LoggingMock.firstCall.args, [{ projectId: 'YOUR_PROJECT_ID' }]);
    assert.equal(loggingMock.log.calledOnce, true);
    assert.deepEqual(loggingMock.log.firstCall.args, [expectedLogName]);
    assert.equal(logMock.entry.calledOnce, true);
    assert.deepEqual(logMock.entry.firstCall.args, [expectedResource, expectedMessage]);
    assert.equal(logMock.write.calledOnce, true);
    assert.deepEqual(logMock.write.firstCall.args.slice(0, -1), [{}]);
    assert.equal(console.error.calledOnce, true);
    assert.deepEqual(console.error.firstCall.args, [error]);
  });
});
