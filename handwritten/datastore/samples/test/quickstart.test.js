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

describe(`datastore:quickstart`, () => {
  let datastoreMock, DatastoreMock;
  const error = new Error(`error`);
  const mockKey = {};

  before(() => {
    datastoreMock = {
      save: sinon.stub().yields(error),
      key: sinon.stub().returns(mockKey)
    };
    DatastoreMock = sinon.stub().returns(datastoreMock);
  });

  it(`should handle error`, () => {
    proxyquire(`../quickstart`, {
      '@google-cloud/datastore': DatastoreMock
    });

    assert.equal(DatastoreMock.calledOnce, true);
    assert.deepEqual(DatastoreMock.firstCall.args, [{ projectId: 'YOUR_PROJECT_ID' }]);
    assert.equal(datastoreMock.save.calledOnce, true);
    assert.deepEqual(datastoreMock.save.firstCall.args.slice(0, -1), [{
      key: mockKey,
      data: {
        description: 'Buy milk'
      }
    }]);
    assert.equal(console.error.calledOnce, true);
    assert.deepEqual(console.error.firstCall.args, [error]);
  });
});
