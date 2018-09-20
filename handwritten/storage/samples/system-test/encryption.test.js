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
const test = require(`ava`);
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

test.before(tools.checkCredentials);
test.before(async () => {
  await bucket.create(bucketName);
});

test.after.always(async () => {
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

test.beforeEach(tools.stubConsole);
test.afterEach.always(tools.restoreConsole);

test.serial(`should generate a key`, async t => {
  const results = await tools.runAsyncWithIO(
    `${cmd} generate-encryption-key`,
    cwd
  );
  const output = results.stdout + results.stderr;
  t.regex(output, new RegExp(`Base 64 encoded encryption key:`));
  const test = /^Base 64 encoded encryption key: (.+)$/;
  key = output.match(test)[1];
});

test.serial(`should upload a file`, async t => {
  const results = await tools.runAsyncWithIO(
    `${cmd} upload ${bucketName} ${filePath} ${fileName} ${key}`,
    cwd
  );
  t.regex(
    results.stdout + results.stderr,
    new RegExp(`File ${filePath} uploaded to gs://${bucketName}/${fileName}.`)
  );
  const [exists] = await bucket.file(fileName).exists();
  t.true(exists);
});

test.serial(`should download a file`, async t => {
  const results = await tools.runAsyncWithIO(
    `${cmd} download ${bucketName} ${fileName} ${downloadFilePath} ${key}`,
    cwd
  );
  t.regex(
    results.stdout + results.stderr,
    new RegExp(`File ${fileName} downloaded to ${downloadFilePath}.`)
  );
  t.notThrows(() => {
    fs.statSync(downloadFilePath);
  });
});

test.serial(`should rotate keys`, async t => {
  // Generate a new key
  const generateKeyResults = await tools.runAsyncWithIO(
    `${cmd} generate-encryption-key`,
    cwd
  );
  const output = generateKeyResults.stdout + generateKeyResults.stderr;
  t.regex(output, new RegExp(`Base 64 encoded encryption key:`));
  const test = /^Base 64 encoded encryption key: (.+)$/;
  const newKey = output.match(test)[1];

  const results = await tools.runAsyncWithIO(
    `${cmd} rotate ${bucketName} ${fileName} ${key} ${newKey}`,
    cwd
  );
  t.is(results.stdout, 'Encryption key rotated successfully.');
});
