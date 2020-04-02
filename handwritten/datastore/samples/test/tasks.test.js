// Copyright 2018 Google LLC
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

'use strict';

const {Datastore} = require('@google-cloud/datastore');
const {assert} = require('chai');
const {describe, it, after} = require('mocha');
const {execSync} = require('child_process');

const exec = cmd => execSync(cmd, {encoding: 'utf8'});
const datastore = new Datastore();
const description = 'description';
let key;

describe('task samples', () => {
  after(() => datastore.delete(key).catch());

  it('should add a task', async () => {
    const expected = /^Task (\d+) created successfully.$/;
    const output = exec(`node tasks.add.js "${description}"`).trim();
    const parts = output.match(expected);
    assert.match(parts[0], expected);
    const keyId = Number(parts[1]);
    const [task] = await datastore.get(datastore.key(['Task', keyId]));
    key = task[datastore.KEY];
    assert.strictEqual(task.description, description);
  });

  it('should mark a task as done', async () => {
    const expected = `Task ${key.id} updated successfully.`;
    const output = exec(`node tasks.markdone.js ${key.id}`);
    assert.include(output, expected);
    const [task] = await datastore.get(key);
    assert.strictEqual(task.done, true);
  });

  it('should list tasks', () => {
    const output = exec('node tasks.list.js');
    assert.include(output, key.id);
  });

  it('should delete a task', async () => {
    const expected = `Task ${key.id} deleted successfully.`;
    const output = exec(`node tasks.delete.js ${key.id}`);
    assert.include(output, expected);
    const [task] = await datastore.get(key);
    assert.strictEqual(task, undefined);
  });
});
