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

const {Datastore} = require('@google-cloud/datastore');
const datastore = new Datastore();
const path = require('path');
const assert = require('assert');
const tools = require('@google-cloud/nodejs-repo-tools');

const cmd = 'node tasks.js';
const cwd = path.join(__dirname, '..');

const description = 'description';
let key;

after(async () => {
  try {
    await datastore.delete(key);
  } catch (err) {} // ignore error
});

before(tools.checkCredentials);
beforeEach(tools.stubConsole);
afterEach(tools.restoreConsole);

it('should add a task', async () => {
  const expected = /^Task (\d+) created successfully.$/;
  const parts = tools.run(`${cmd} new "${description}"`, cwd).match(expected);
  assert.strictEqual(expected.test(parts[0]), true);
  const [task] = await datastore.get(
    datastore.key([`Task`, parseInt(parts[1], 10)])
  );
  key = task[datastore.KEY];
  assert.strictEqual(task.description, description);
});

it('should mark a task as done', async () => {
  const expected = `Task ${key.id} updated successfully.`;
  const output = await tools.runAsync(`${cmd} done ${key.id}`, cwd);
  assert.strictEqual(output, expected);
  const [task] = await datastore.get(key);
  assert.strictEqual(task.done, true);
});

it('should list tasks', async () =>
  await tools
    .tryTest(async assert => {
      const output = await tools.runAsync(`${cmd} list`, cwd);
      assert(output.includes(key.id));
    })
    .start());

it('should delete a task', async () => {
  const expected = `Task ${key.id} deleted successfully.`;
  const output = await tools.runAsync(`${cmd} delete ${key.id}`, cwd);
  assert.strictEqual(output, expected);
  const [task] = await datastore.get(key);
  assert.strictEqual(task, undefined);
});
