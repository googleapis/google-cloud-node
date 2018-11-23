/**
 * Copyright 2018, Google, Inc.
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

const proxyquire = require('proxyquire').noPreserveCache();
const sinon = require('sinon');
const assert = require('assert');
const tools = require('@google-cloud/nodejs-repo-tools');

const {Datastore} = proxyquire('@google-cloud/datastore', {});
const datastore = new Datastore();

const entity = {description: 'Buy milk'};
const kind = 'Task';
const name = 'sampletask1';
const key = datastore.key([kind, name]);
const datastoreEntity = Object.assign({}, entity);
datastoreEntity[datastore.KEY] = key;

before(async () => {
  try {
    await datastore.delete(key);
  } catch (err) {} // ignore error
});
after(async () => {
  try {
    await datastore.delete(key);
  } catch (err) {} // ignore error
});

beforeEach(tools.stubConsole);
afterEach(tools.restoreConsole);

it('should get a task from Datastore', () => {
  const datastoreMock = {
    key: (...args) => datastore.key(...args),

    save: async _task => {
      assert.strictEqual(_task.key.kind, kind);
      assert.strictEqual(_task.key.name, name);
      assert.deepStrictEqual(_task.data, entity);

      return await datastore.save(_task).then(async () => {
        await new Promise(r => setTimeout(r, 200));
        await datastore
          .get(key)
          .then(([task]) => {
            assert.deepStrictEqual(task, datastoreEntity);
            assert.strictEqual(
              console.log.calledWith(`Saved ${name}: ${entity.description}`),
              true
            );
          })
          .catch();
      });
    },
  };

  proxyquire('../quickstart', {
    '@google-cloud/datastore': {
      Datastore: sinon.stub().returns(datastoreMock),
    },
  });
});
