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
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);
const fileName = `test.txt`;
const movedFileName = `test2.txt`;
const copiedFileName = `test3.txt`;
const kmsKeyName = process.env.GOOGLE_CLOUD_KMS_KEY_US;
const filePath = path.join(__dirname, `../resources`, fileName);
const downloadFilePath = path.join(__dirname, `../resources/downloaded.txt`);
const cmd = `node files.js`;

before(tools.checkCredentials);
before(async () => {
  await bucket.create();
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

beforeEach(tools.stubConsole);
afterEach(tools.restoreConsole);

it(`should upload a file`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} upload ${bucketName} ${filePath}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `${filePath} uploaded to ${bucketName}.`
    ),
    true
  );
  const [exists] = await bucket.file(fileName).exists();
  assert.strictEqual(exists, true);
});

it(`should upload a file with a kms key`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} upload-with-kms-key ${bucketName} ${filePath} ${kmsKeyName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `${filePath} uploaded to ${bucketName} using ${kmsKeyName}.`
    ),
    true
  );
  const [exists] = await bucket.file(fileName).exists();
  assert.strictEqual(exists, true);
});

it(`should download a file`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} download ${bucketName} ${fileName} ${downloadFilePath}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `gs://${bucketName}/${fileName} downloaded to ${downloadFilePath}.`
    ),
    true
  );
  fs.statSync(downloadFilePath);
});

it(`should move a file`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} move ${bucketName} ${fileName} ${movedFileName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `gs://${bucketName}/${fileName} moved to gs://${bucketName}/${movedFileName}.`
    ),
    true
  );
  const [exists] = await bucket.file(movedFileName).exists();
  assert.strictEqual(exists, true);
});

it(`should copy a file`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} copy ${bucketName} ${movedFileName} ${bucketName} ${copiedFileName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `gs://${bucketName}/${movedFileName} copied to gs://${bucketName}/${copiedFileName}.`
    ),
    true
  );
  const [exists] = await bucket.file(copiedFileName).exists();
  assert.strictEqual(exists, true);
});

it(`should list files`, async () => {
  await tools
    .tryTest(async assert => {
      const results = await tools.runAsyncWithIO(
        `${cmd} list ${bucketName}`,
        cwd
      );
      const output = results.stdout + results.stderr;
      assert(output.includes(`Files:`), `"${output}" should include "Files:"`);
      assert(
        output.includes(movedFileName),
        `"${output}" should include "${movedFileName}"`
      );
      assert(
        output.includes(copiedFileName),
        `"${output}" should include "${copiedFileName}"`
      );
    })
    .start();
});

it(`should list files by a prefix`, async () => {
  let results = await tools.runAsyncWithIO(
    `${cmd} list ${bucketName} test "/"`,
    cwd
  );
  let output = results.stdout + results.stderr;
  assert.strictEqual(output.includes(`Files:`), true);
  assert.strictEqual(output.includes(movedFileName), true);
  assert.strictEqual(output.includes(copiedFileName), true);
  results = await tools.runAsyncWithIO(`${cmd} list ${bucketName} foo`, cwd);
  output = results.stdout + results.stderr;
  assert.strictEqual(output.includes(`Files:`), true);
  assert.strictEqual(output.includes(movedFileName), false);
  assert.strictEqual(output.includes(copiedFileName), false);
});

it(`should make a file public`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} make-public ${bucketName} ${copiedFileName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `gs://${bucketName}/${copiedFileName} is now public.`
    ),
    true
  );
});

it(`should generate a signed URL for a file`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} generate-signed-url ${bucketName} ${copiedFileName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `The signed url for ${copiedFileName} is `
    ),
    true
  );
});

it(`should get metadata for a file`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} get-metadata ${bucketName} ${copiedFileName}`,
    cwd
  );
  const output = results.stdout + results.stderr;
  assert.strictEqual(output.includes(`File: ${copiedFileName}`), true);
  assert.strictEqual(output.includes(`Bucket: ${bucketName}`), true);
});

it(`should delete a file`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} delete ${bucketName} ${copiedFileName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `gs://${bucketName}/${copiedFileName} deleted.`
    ),
    true
  );
  const [exists] = await bucket.file(copiedFileName).exists();
  assert.strictEqual(exists, false);
});
