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

const datastore = require(`@google-cloud/datastore`)();
const path = require(`path`);
const test = require(`ava`);
const tools = require(`@google-cloud/nodejs-repo-tools`);

const cmd = `node tasks.js`;
const cwd = path.join(__dirname, `..`);

const description = `description`;
let key;

test.after.always(async () => {
  try {
    await datastore.delete(key);
  } catch (err) {} // ignore error
});

test.before(tools.checkCredentials);
test.beforeEach(tools.stubConsole);
test.afterEach.always(tools.restoreConsole);

test.serial(`should add a task`, async (t) => {
  t.plan(2);
  const expected = /^Task (\d+) created successfully.$/;
  const parts = tools.run(`${cmd} new "${description}"`, cwd).match(expected);
  t.true(expected.test(parts[0]));
  const [task] = await datastore.get(datastore.key([`Task`, parseInt(parts[1], 10)]));
  key = task[datastore.KEY];
  t.is(task.description, description);
});

test.serial(`should mark a task as done`, async (t) => {
  t.plan(2);
  const expected = `Task ${key.id} updated successfully.`;
  const output = await tools.runAsync(`${cmd} done ${key.id}`, cwd);
  t.is(output, expected);
  const [task] = await datastore.get(key);
  t.true(task.done);
});

test.serial(`should list tasks`, async (t) => {
  t.plan(0);
  await tools.tryTest(async (assert) => {
    const output = await tools.runAsync(`${cmd} list`, cwd);
    assert(output.includes(key.id));
  }).start();
});

test.serial(`should delete a task`, async (t) => {
  t.plan(2);
  const expected = `Task ${key.id} deleted successfully.`;
  const output = await tools.runAsync(`${cmd} delete ${key.id}`, cwd);
  t.is(output, expected);
  const [task] = await datastore.get(key);
  t.is(task, undefined);
});
