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

const fs = require('fs');
const path = require('path');
const {Storage} = require('@google-cloud/storage');
const assert = require('assert');
const tools = require(`@google-cloud/nodejs-repo-tools`);
const uuid = require('uuid');

const storage = new Storage();
const cwd = path.join(__dirname, `..`);
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);
const cmd = `node encryption.js`;

const fileName = `test.txt`;
const filePath = path.join(__dirname, `../resources`, fileName);
const downloadFilePath = path.join(__dirname, `../resources/downloaded.txt`);

let key;

before(tools.checkCredentials);
before(async () => {
  await bucket.create(bucketName);
});

after(async () => {
  try {
    // Delete the downloaded file
    fs.unlinkSync(downloadFilePath);
  } catch (err) {
    // Swallow error
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

it(`should generate a key`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} generate-encryption-key`,
    cwd
  );
  const output = results.stdout + results.stderr;
  assert.strictEqual(output.includes(`Base 64 encoded encryption key:`), true);
  const test = /^Base 64 encoded encryption key: (.+)$/;
  key = output.match(test)[1];
});

it(`should upload a file`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} upload ${bucketName} ${filePath} ${fileName} ${key}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `File ${filePath} uploaded to gs://${bucketName}/${fileName}.`
    ),
    true
  );
  const [exists] = await bucket.file(fileName).exists();
  assert.strictEqual(exists, true);
});

it(`should download a file`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} download ${bucketName} ${fileName} ${downloadFilePath} ${key}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `File ${fileName} downloaded to ${downloadFilePath}.`
    ),
    true
  );
  fs.statSync(downloadFilePath);
});

it(`should rotate keys`, async () => {
  // Generate a new key
  const generateKeyResults = await tools.runAsyncWithIO(
    `${cmd} generate-encryption-key`,
    cwd
  );
  const output = generateKeyResults.stdout + generateKeyResults.stderr;
  assert.strictEqual(output.includes(`Base 64 encoded encryption key:`), true);
  const test = /^Base 64 encoded encryption key: (.+)$/;
  const newKey = output.match(test)[1];

  const results = await tools.runAsyncWithIO(
    `${cmd} rotate ${bucketName} ${fileName} ${key} ${newKey}`,
    cwd
  );
  assert.strictEqual(results.stdout, 'Encryption key rotated successfully.');
});
