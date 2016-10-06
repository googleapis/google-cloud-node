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
const datastore = proxyquire(`@google-cloud/datastore`, {})();
const kind = `Task`;
const name = `sampletask1`;
const key = datastore.key(kind, name);

describe(`datastore:quickstart`, () => {
  let datastoreMock, DatastoreMock;

  after((done) => {
    datastore.delete(key, () => {
      // Ignore any error, the entity might not have been created
      done();
    });
  });

  it(`should get a task from Datastore`, (done) => {
    datastoreMock = {
      key (...args) {
        return datastore.key(...args);
      },

      save (_task, _callback) {
        assert.equal(_task.key.kind, kind);
        assert.equal(_task.key.name, name);
        assert.deepEqual(_task.data, {
          description: `Buy milk`
        });
        assert.equal(typeof _callback, 'function');

        datastore.save(_task, (err) => {
          _callback(err);
          assert.ifError(err);
          assert.equal(console.log.calledOnce, true);
          assert.deepEqual(console.log.firstCall.args, [`Saved ${_task.key.name}: ${_task.data.description}`]);
          done();
        });
      }
    };
    DatastoreMock = sinon.stub().returns(datastoreMock);

    proxyquire(`../quickstart`, {
      '@google-cloud/datastore': DatastoreMock
    });
  });
});
