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
const test = require(`ava`);
const tools = require(`@google-cloud/nodejs-repo-tools`);
const uuid = require(`uuid`);

const storage = new Storage();
const cwd = path.join(__dirname, `..`);
const cmd = `node bucketLock.js`;
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);
const fileName = `test.txt`;

const uploadFilePath = path.join(cwd, `resources`, fileName);

test.before(tools.checkCredentials);
test.before(async () => {
  await bucket.create();
});
test.before(async () => {
  await bucket.upload(uploadFilePath);
});

test.after.always(async () => {
  try {
    await bucket.deleteFiles({force: true});
  } catch (err) {} // ignore error
  try {
    await bucket.delete();
  } catch (err) {} // ignore error
});

test.beforeEach(tools.stubConsole);
test.afterEach.always(tools.restoreConsole);

test.serial(`should set a retention policy on a bucket`, async t => {
  const retentionPeriod = 5;
  const results = await tools.runAsyncWithIO(
    `${cmd} set-retention-policy ${bucketName} ${retentionPeriod}`,
    cwd
  );
  t.regex(
    results.stdout + results.stderr,
    new RegExp(
      `Bucket ${bucketName} retention period set for ${retentionPeriod} seconds.`
    )
  );
});

test.serial(`should get a retention policy on a bucket`, async t => {
  const results = await tools.runAsyncWithIO(
    `${cmd} get-retention-policy ${bucketName}`,
    cwd
  );
  t.regex(
    results.stdout + results.stderr,
    new RegExp(`A retention policy exists!`)
  );
});

test.serial(`should enable default event-based hold on a bucket`, async t => {
  const results = await tools.runAsyncWithIO(
    `${cmd} enable-default-event-based-hold ${bucketName}`,
    cwd
  );
  t.regex(
    results.stdout + results.stderr,
    new RegExp(`Default event-based hold was enabled for ${bucketName}.`)
  );
});

test.serial(`should get default event-based hold on a bucket`, async t => {
  const results = await tools.runAsyncWithIO(
    `${cmd} get-default-event-based-hold ${bucketName}`,
    cwd
  );
  t.regex(
    results.stdout + results.stderr,
    new RegExp(`Default event-based hold: true.`)
  );
});

test.serial(`should disable default event-based hold on a bucket`, async t => {
  const results = await tools.runAsyncWithIO(
    `${cmd} disable-default-event-based-hold ${bucketName}`,
    cwd
  );
  t.regex(
    results.stdout + results.stderr,
    new RegExp(`Default event-based hold was disabled for ${bucketName}.`)
  );
});

test.serial(`should set an event-based hold on a file`, async t => {
  const results = await tools.runAsyncWithIO(
    `${cmd} set-event-based-hold ${bucketName} ${fileName}`,
    cwd
  );
  t.regex(
    results.stdout + results.stderr,
    new RegExp(`Event-based hold was set for ${fileName}.`)
  );
});

test.serial(`should release an event-based hold on a file`, async t => {
  const results = await tools.runAsyncWithIO(
    `${cmd} release-event-based-hold ${bucketName} ${fileName}`,
    cwd
  );
  t.regex(
    results.stdout + results.stderr,
    new RegExp(`Event-based hold was released for ${fileName}.`)
  );
});

test.serial(`should remove a retention policy on a bucket`, async t => {
  const results = await tools.runAsyncWithIO(
    `${cmd} remove-retention-policy ${bucketName}`,
    cwd
  );
  t.regex(
    results.stdout + results.stderr,
    new RegExp(`Removed bucket ${bucketName} retention policy.`)
  );
});

test.serial(`should set an temporary hold on a file`, async t => {
  const results = await tools.runAsyncWithIO(
    `${cmd} set-temporary-hold ${bucketName} ${fileName}`,
    cwd
  );
  t.regex(
    results.stdout + results.stderr,
    new RegExp(`Temporary hold was set for ${fileName}.`)
  );
});

test.serial(`should release an temporary hold on a file`, async t => {
  const results = await tools.runAsyncWithIO(
    `${cmd} release-temporary-hold ${bucketName} ${fileName}`,
    cwd
  );
  t.regex(
    results.stdout + results.stderr,
    new RegExp(`Temporary hold was released for ${fileName}.`)
  );
});

test.serial(`should lock a bucket with a retention policy`, async t => {
  const retentionPeriod = 5;
  await tools.runAsyncWithIO(
    `${cmd} set-retention-policy ${bucketName} ${retentionPeriod}`,
    cwd
  );
  const results = await tools.runAsyncWithIO(
    `${cmd} lock-retention-policy ${bucketName}`,
    cwd
  );
  t.regex(
    results.stdout + results.stderr,
    new RegExp(`Retention policy for ${bucketName} is now locked.`)
  );
});
