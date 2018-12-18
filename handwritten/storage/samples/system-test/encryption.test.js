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
const {assert} = require('chai');
const execa = require('execa');
const uuid = require('uuid');
const {promisify} = require('util');

const exec = async cmd => (await execa.shell(cmd)).stdout;
const storage = new Storage();
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);
const cmd = `node encryption.js`;

const fileName = `test.txt`;
const filePath = path.join(__dirname, `../resources`, fileName);
const downloadFilePath = path.join(__dirname, `../resources/downloaded.txt`);

let key;

before(async () => {
  await bucket.create(bucketName);
});

after(async () => {
  promisify(fs.unlink)(downloadFilePath).catch(console.error);
  // Try deleting all files twice, just to make sure
  await bucket.deleteFiles({force: true}).catch(console.error);
  await bucket.deleteFiles({force: true}).catch(console.error);
  await bucket.delete().catch(console.error);
});

it('should generate a key', async () => {
  const output = await exec(`${cmd} generate-encryption-key`);
  assert.match(output, /Base 64 encoded encryption key:/);
  const test = /^Base 64 encoded encryption key: (.+)$/;
  key = output.match(test)[1];
});

it('should upload a file', async () => {
  const output = await exec(
    `${cmd} upload ${bucketName} ${filePath} ${fileName} ${key}`
  );
  assert.match(
    output,
    new RegExp(`File ${filePath} uploaded to gs://${bucketName}/${fileName}.`)
  );
  const [exists] = await bucket.file(fileName).exists();
  assert.strictEqual(exists, true);
});

it('should download a file', async () => {
  const output = await exec(
    `${cmd} download ${bucketName} ${fileName} ${downloadFilePath} ${key}`
  );
  assert.match(
    output,
    new RegExp(`File ${fileName} downloaded to ${downloadFilePath}.`)
  );
  fs.statSync(downloadFilePath);
});

it('should rotate keys', async () => {
  // Generate a new key
  let output = await exec(`${cmd} generate-encryption-key`);
  assert.match(output, /Base 64 encoded encryption key:/);
  const test = /^Base 64 encoded encryption key: (.+)$/;
  const newKey = output.match(test)[1];
  output = await exec(
    `${cmd} rotate ${bucketName} ${fileName} ${key} ${newKey}`
  );
  assert.strictEqual(output, 'Encryption key rotated successfully.');
});
