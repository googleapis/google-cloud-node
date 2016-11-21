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
const entity = { description: `Buy milk` };
const kind = `Task`;
const name = `sampletask1`;
const key = datastore.key([kind, name]);

describe(`datastore:quickstart`, () => {
  before(() => datastore.delete(key).catch(() => {}));
  after(() => datastore.delete(key).catch(() => {}));

  it(`should get a task from Datastore`, (done) => {
    const datastoreMock = {
      key: (...args) => datastore.key(...args),

      save: (_task) => {
        assert.equal(_task.key.kind, kind);
        assert.equal(_task.key.name, name);
        assert.deepEqual(_task.data, entity);

        return datastore.save(_task)
          .then(() => {
            setTimeout(() => {
              datastore.get(key)
                .then((results) => {
                  const task = results[0];
                  assert.deepEqual(task, entity);
                  assert.equal(console.log.calledWith(`Saved ${name}: ${entity.description}`), true);
                  done();
                })
                .catch(done);
            }, 200);
          }, done);
      }
    };

    proxyquire(`../quickstart`, {
      '@google-cloud/datastore': sinon.stub().returns(datastoreMock)
    });
  });
});
