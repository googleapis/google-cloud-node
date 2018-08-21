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
const test = require(`ava`);
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

test.before(async () => {
  tools.checkCredentials();
  await bucket.create();

  // Upload a test file (to download later)
  await bucket.upload(uploadFilePath);
});
test.after.always(async () => {
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

test.serial.skip(
  `should error on requester-pays requests if they are disabled`,
  async t => {
    const result = await tools.runAsyncWithIO(
      `${cmd} download ${bucketName} ${fileName} ${downloadFilePath}`,
      cwd
    );
    console.log(result);
    t.truthy(result.stderr);
    t.regex(
      result.stderr,
      /User project prohibited for non requester pays bucket/
    );
  }
);

test.serial(
  `should fetch requester-pays status on a default bucket`,
  async t => {
    const output = await tools.runAsync(`${cmd} get-status ${bucketName}`, cwd);
    t.is(
      output,
      `Requester-pays requests are disabled for bucket ${bucketName}.`
    );
  }
);

test.serial(`should enable requester-pays requests`, async t => {
  const output = await tools.runAsync(`${cmd} enable ${bucketName}`, cwd);
  t.is(
    output,
    `Requester-pays requests have been enabled for bucket ${bucketName}.`
  );
});

test.serial(
  `should fetch requester-pays status on a modified bucket`,
  async t => {
    const output = await tools.runAsync(`${cmd} get-status ${bucketName}`, cwd);
    t.is(
      output,
      `Requester-pays requests are enabled for bucket ${bucketName}.`
    );
  }
);

test.serial(`should download a file using requester-pays requests`, async t => {
  const output = await tools.runAsync(
    `${cmd} download ${bucketName} ${fileName} ${downloadFilePath}`,
    cwd
  );
  t.is(
    output,
    `gs://${bucketName}/${fileName} downloaded to ${downloadFilePath} using requester-pays requests.`
  );
  await t.notThrows(() => fs.statSync(downloadFilePath));
});

test.serial(`should disable requester-pays requests`, async t => {
  const output = await tools.runAsync(`${cmd} disable ${bucketName}`, cwd);
  t.is(
    output,
    `Requester-pays requests have been disabled for bucket ${bucketName}.`
  );
});
