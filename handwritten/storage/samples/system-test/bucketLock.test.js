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
const cmd = `node bucketLock.js`;
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);
const fileName = `test.txt`;

const uploadFilePath = path.join(cwd, `resources`, fileName);

before(tools.checkCredentials);
before(async () => {
  await bucket.create();
});
before(async () => {
  await bucket.upload(uploadFilePath);
});

after(async () => {
  try {
    await bucket.deleteFiles({force: true});
  } catch (err) {} // ignore error
  try {
    await bucket.delete();
  } catch (err) {} // ignore error
});

beforeEach(tools.stubConsole);
afterEach(tools.restoreConsole);

it(`should set a retention policy on a bucket`, async () => {
  const retentionPeriod = 5;
  const results = await tools.runAsyncWithIO(
    `${cmd} set-retention-policy ${bucketName} ${retentionPeriod}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Bucket ${bucketName} retention period set for ${retentionPeriod} seconds.`
    ),
    true
  );
});

it(`should get a retention policy on a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} get-retention-policy ${bucketName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(`A retention policy exists!`),
    true
  );
});

it(`should enable default event-based hold on a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} enable-default-event-based-hold ${bucketName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Default event-based hold was enabled for ${bucketName}.`
    ),
    true
  );
});

it(`should get default event-based hold on a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} get-default-event-based-hold ${bucketName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Default event-based hold: true.`
    ),
    true
  );
});

it(`should disable default event-based hold on a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} disable-default-event-based-hold ${bucketName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Default event-based hold was disabled for ${bucketName}.`
    ),
    true
  );
});

it(`should set an event-based hold on a file`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} set-event-based-hold ${bucketName} ${fileName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Event-based hold was set for ${fileName}.`
    ),
    true
  );
});

it(`should release an event-based hold on a file`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} release-event-based-hold ${bucketName} ${fileName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Event-based hold was released for ${fileName}.`
    ),
    true
  );
});

it(`should remove a retention policy on a bucket`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} remove-retention-policy ${bucketName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Removed bucket ${bucketName} retention policy.`
    ),
    true
  );
});

it(`should set an temporary hold on a file`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} set-temporary-hold ${bucketName} ${fileName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Temporary hold was set for ${fileName}.`
    ),
    true
  );
});

it(`should release an temporary hold on a file`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} release-temporary-hold ${bucketName} ${fileName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Temporary hold was released for ${fileName}.`
    ),
    true
  );
});

it(`should lock a bucket with a retention policy`, async () => {
  const retentionPeriod = 5;
  await tools.runAsyncWithIO(
    `${cmd} set-retention-policy ${bucketName} ${retentionPeriod}`,
    cwd
  );
  const results = await tools.runAsyncWithIO(
    `${cmd} lock-retention-policy ${bucketName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Retention policy for ${bucketName} is now locked.`
    ),
    true
  );
});
