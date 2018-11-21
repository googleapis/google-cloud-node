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

const fs = require(`fs`);
const path = require(`path`);
const {Storage} = require(`@google-cloud/storage`);
const assert = require('assert');
const tools = require(`@google-cloud/nodejs-repo-tools`);
const uuid = require(`uuid`);

const storage = new Storage();
const cwd = path.join(__dirname, `..`);
const cmd = `node requesterPays.js`;
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const fileName = `test.txt`;
const bucket = storage.bucket(bucketName);

const uploadFilePath = path.join(cwd, `resources`, fileName);
const downloadFilePath = path.join(__dirname, `test_${uuid.v4()}.txt`);

before(async () => {
  tools.checkCredentials();
  await bucket.create();

  // Upload a test file (to download later)
  await bucket.upload(uploadFilePath);
});
after(async () => {
  try {
    fs.unlinkSync(downloadFilePath);
  } catch (err) {
    console.log(err);
  }
  // Try deleting all files twice, just to make sure
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

it.skip(`should error on requester-pays requests if they are disabled`, async () => {
  const result = await tools.runAsyncWithIO(
    `${cmd} download ${bucketName} ${fileName} ${downloadFilePath}`,
    cwd
  );
  console.log(result);
  assert.ok(result.stderr);
  assert.strictEqual(
    result.stderr.includes(
      `User project prohibited for non requester pays bucket`
    ),
    true
  );
});

it(`should fetch requester-pays status on a default bucket`, async () => {
  const output = await tools.runAsync(`${cmd} get-status ${bucketName}`, cwd);
  assert.strictEqual(
    output,
    `Requester-pays requests are disabled for bucket ${bucketName}.`
  );
});

it(`should enable requester-pays requests`, async () => {
  const output = await tools.runAsync(`${cmd} enable ${bucketName}`, cwd);
  assert.strictEqual(
    output,
    `Requester-pays requests have been enabled for bucket ${bucketName}.`
  );
});

it(`should fetch requester-pays status on a modified bucket`, async () => {
  const output = await tools.runAsync(`${cmd} get-status ${bucketName}`, cwd);
  assert.strictEqual(
    output,
    `Requester-pays requests are enabled for bucket ${bucketName}.`
  );
});

it(`should download a file using requester-pays requests`, async () => {
  const output = await tools.runAsync(
    `${cmd} download ${bucketName} ${fileName} ${downloadFilePath}`,
    cwd
  );
  assert.strictEqual(
    output,
    `gs://${bucketName}/${fileName} downloaded to ${downloadFilePath} using requester-pays requests.`
  );
  fs.statSync(downloadFilePath);
});

it(`should disable requester-pays requests`, async () => {
  const output = await tools.runAsync(`${cmd} disable ${bucketName}`, cwd);
  assert.strictEqual(
    output,
    `Requester-pays requests have been disabled for bucket ${bucketName}.`
  );
});
