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

const path = require(`path`);
const {Storage} = require(`@google-cloud/storage`);
const assert = require('assert');
const tools = require(`@google-cloud/nodejs-repo-tools`);
const uuid = require(`uuid`);

const storage = new Storage();
const cwd = path.join(__dirname, `..`);
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);
const userEmail = `test@example.com`;
const cmd = `node iam.js`;
const roleName = `roles/storage.objectViewer`;

before(tools.checkCredentials);
before(async () => {
  await bucket.create();
});

after(async () => {
  try {
    await bucket.delete();
  } catch (err) {} // ignore error
});

it(`should add multiple members to a role on a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} add-members ${bucketName} ${roleName} "user:${userEmail}"`,
    cwd
  );
  const output = results.stdout + results.stderr;
  assert.strictEqual(
    output.includes(
      `Added the following member(s) with role ${roleName} to ${bucketName}:`
    ),
    true
  );
  assert.strictEqual(output.includes(`user:${userEmail}`), true);
});

it(`should list members of a role on a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} view-members ${bucketName} "user:${userEmail}"`,
    cwd
  );
  const output = results.stdout + results.stderr;
  assert.strictEqual(output.includes(`Roles for bucket ${bucketName}:`), true);
  assert.strictEqual(output.includes(`Role: ${roleName}`), true);
  assert.strictEqual(output.includes(`Members:`), true);
  assert.strictEqual(output.includes(`user:${userEmail}`), true);
});

it(`should remove multiple members from a role on a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} remove-members ${bucketName} ${roleName} "user:${userEmail}"`,
    cwd
  );
  const output = results.stdout + results.stderr;
  assert.strictEqual(
    output.includes(
      `Removed the following member(s) with role ${roleName} from ${bucketName}:`
    ),
    true
  );
  assert.strictEqual(output.includes(`user:${userEmail}`), true);
});
