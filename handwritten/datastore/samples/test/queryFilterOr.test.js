// Copyright 2023 Google LLC
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

/* eslint-disable */

'use strict';

const path = require('path');
const {assert} = require('chai');
const {describe, it, after, before} = require('mocha');
const sinon = require('sinon');
const {Datastore, PropertyFilter, or} = require('@google-cloud/datastore');
const datastore = new Datastore();

const cp = require('child_process');
let taskKey1, taskKey2;

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

describe('Creating a union query', () => {
  const stubConsole = function () {
    sinon.stub(console, 'error');
    sinon.stub(console, 'log');
  };

  const restoreConsole = function () {
    console.log.restore();
    console.error.restore();
  };

  beforeEach(stubConsole);
  afterEach(restoreConsole);

  before(async () => {
    taskKey1 = datastore.key('Task');
    const entity1 = {
      key: taskKey1,
      data: {
        description: 'Buy milk',
      },
    };

    taskKey2 = datastore.key('Task');
    const entity2 = {
      key: taskKey2,
      data: {
        description: 'Feed cats',
      },
    };

    // Ensure the datastore database has no existing data for the task keys.
    const query = datastore
      .createQuery('Task')
      .filter(
        or([
          new PropertyFilter('description', '=', 'Buy milk'),
          new PropertyFilter('description', '=', 'Feed cats'),
        ])
      );
    const [entities] = await datastore.runQuery(query);
    await datastore.delete(entities.map(entity => entity[datastore.KEY]));

    await datastore.upsert(entity1);
    await datastore.upsert(entity2);
  });

  after(async () => {
    await datastore.delete(taskKey1);
    await datastore.delete(taskKey2);
  });

  it('should get a combination of items from the Datastore', async () => {
    assert.strictEqual(execSync(`node ./queryFilterOr.js`), 'Entity found: Feed cats\nEntity found: Buy milk\n');
  });
});
