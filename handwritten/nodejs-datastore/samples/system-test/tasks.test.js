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

const path = require(`path`);
const datastore = require(`@google-cloud/datastore`)();
const run = require(`../../utils`).run;

const cmd = `node tasks.js`;
const cwd = path.join(__dirname, `..`);

describe(`datastore:tasks`, () => {
  const description = `description`;
  let key;

  after(() => datastore.delete(key).catch(() => {}));

  it(`should add a task`, () => {
    const expected = /^Task (\d+) created successfully.$/;
    const parts = run(`${cmd} new "${description}"`, cwd).match(expected);
    assert.equal(expected.test(parts[0]), true);
    return datastore.get(datastore.key([`Task`, parseInt(parts[1], 10)]))
      .then((results) => {
        const task = results[0];
        key = task[datastore.KEY];
        assert.equal(task.description, description);
      });
  });

  it(`should mark a task as done`, () => {
    const expected = `Task ${key.id} updated successfully.`;
    assert.equal(run(`${cmd} done ${key.id}`, cwd), expected);
    return datastore.get(key)
      .then((results) => {
        assert.equal(results[0].done, true);
      });
  });

  it(`should list tasks`, (done) => {
    setTimeout(() => {
      const output = run(`${cmd} list`, cwd);
      assert.equal(output.includes(key.id), true);
      done();
    }, 5000);
  });

  it(`should delete a task`, () => {
    const expected = `Task ${key.id} deleted successfully.`;
    assert.equal(run(`${cmd} delete ${key.id}`, cwd), expected);
    return datastore.get(key)
      .then((results) => {
        assert.equal(results[0], undefined);
      });
  });
});
