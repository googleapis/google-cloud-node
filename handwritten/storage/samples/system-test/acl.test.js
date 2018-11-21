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
const userEmail = `jdobry@google.com`;
const fileName = `test.txt`;
const filePath = path.join(__dirname, `../resources`, fileName);
const cmd = `node acl.js`;

before(tools.checkCredentials);
before(async () => {
  await bucket.create();
  await bucket.upload(filePath);
});

after(async () => {
  // Try deleting all files twice
  try {
    await bucket.deleteFiles({force: true});
  } catch (err) {} // ignore error
  try {
    await bucket.deleteFiles({force: true});
  } catch (err) {} // ignore error
  try {
    await bucket.delete();
  } catch (err) {} // ignore error
});

it(`should print acl for a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} print-bucket-acl ${bucketName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(`OWNER: project-editors-`),
    true
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(`OWNER: project-owners-`),
    true
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(`READER: project-viewers-`),
    true
  );
});

it(`should print acl for a file`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} print-file-acl ${bucketName} ${fileName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(`OWNER: project-editors-`),
    true
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(`OWNER: project-owners-`),
    true
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(`READER: project-viewers-`),
    true
  );
});

it(`should print a user's acl for a bucket`, async () => {
  await bucket.acl.readers.addUser(userEmail);
  const results = await tools.runAsyncWithIO(
    `${cmd} print-bucket-acl-for-user ${bucketName} ${userEmail}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(`READER: user-${userEmail}`),
    true
  );
  await bucket.acl.readers.deleteUser(userEmail);
});

it(`should add a user as an owner on a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} add-bucket-owner ${bucketName} ${userEmail}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Added user ${userEmail} as an owner on bucket ${bucketName}.`
    ),
    true
  );
});

it(`should remove a user from a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} remove-bucket-owner ${bucketName} ${userEmail}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Removed user ${userEmail} from bucket ${bucketName}.`
    ),
    true
  );
});

it(`should add a user as a default owner on a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} add-bucket-default-owner ${bucketName} ${userEmail}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Added user ${userEmail} as an owner on bucket ${bucketName}.`
    ),
    true
  );
});

it(`should remove a default user from a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} remove-bucket-default-owner ${bucketName} ${userEmail}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Removed user ${userEmail} from bucket ${bucketName}.`
    ),
    true
  );
});

it(`should print a user's acl for a file`, async () => {
  await bucket.file(fileName).acl.readers.addUser(userEmail);
  const results = await tools.runAsyncWithIO(
    `${cmd} print-file-acl-for-user ${bucketName} ${fileName} ${userEmail}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(`READER: user-${userEmail}`),
    true
  );
  await bucket.file(fileName).acl.readers.deleteUser(userEmail);
});

it(`should add a user as an owner on a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} add-file-owner ${bucketName} ${fileName} ${userEmail}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Added user ${userEmail} as an owner on file ${fileName}.`
    ),
    true
  );
});

it(`should remove a user from a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} remove-file-owner ${bucketName} ${fileName} ${userEmail}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Removed user ${userEmail} from file ${fileName}.`
    ),
    true
  );
});
