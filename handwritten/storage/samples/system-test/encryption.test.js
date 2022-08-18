// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const {Storage} = require('@google-cloud/storage');
const {assert} = require('chai');
const {before, after, it} = require('mocha');
const cp = require('child_process');
const uuid = require('uuid');
const {promisify} = require('util');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const storage = new Storage();
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);
const kmsKeyName = process.env.GOOGLE_CLOUD_KMS_KEY_US;

const fileName = 'test.txt';
const filePath = path.join(__dirname, '../resources', fileName);
const downloadFilePath = path.join(__dirname, '../resources/downloaded.txt');
const doesNotExistPrecondition = 0;

const key = crypto.randomBytes(32).toString('base64');

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

it('should generate a key', () => {
  const output = execSync('node generateEncryptionKey.js');
  assert.match(output, /Base 64 encoded encryption key:/);
});

it('should upload a file', async () => {
  const output = execSync(
    `node uploadEncryptedFile.js ${bucketName} ${filePath} ${fileName} ${key} ${doesNotExistPrecondition}`
  );
  assert.match(
    output,
    new RegExp(`File ${filePath} uploaded to gs://${bucketName}/${fileName}`)
  );
  const [exists] = await bucket.file(fileName).exists();
  assert.strictEqual(exists, true);
});

it('should download a file', () => {
  const output = execSync(
    `node downloadEncryptedFile.js ${bucketName} ${fileName} ${downloadFilePath} ${key}`
  );
  assert.match(
    output,
    new RegExp(`File ${fileName} downloaded to ${downloadFilePath}`)
  );
  fs.statSync(downloadFilePath);
});

it('should rotate keys', async () => {
  const newKey = crypto.randomBytes(32).toString('base64');
  const [metadata] = await storage
    .bucket(bucketName)
    .file(fileName)
    .getMetadata();
  const output = execSync(
    `node rotateEncryptionKey.js ${bucketName} ${fileName} ${key} ${newKey} ${metadata.generation}`
  );
  assert.include(output, 'Encryption key rotated successfully');
});

it('should convert CSEK to KMS key', async () => {
  const encryptedFileName = 'encrypted-file';
  const file = bucket.file(encryptedFileName, {
    encryptionKey: Buffer.from(key, 'base64'),
  });
  const [metadata] = await storage
    .bucket(bucketName)
    .file(fileName)
    .getMetadata();
  await file.save('secret data', {resumable: false});
  const output = execSync(
    `node changeFileCSEKToCMEK.js ${bucketName} ${encryptedFileName} ${key} ${kmsKeyName} ${metadata.generation}`
  );
  assert.include(
    output,
    `file ${encryptedFileName} in bucket ${bucketName} is now managed by KMS key ${kmsKeyName} instead of customer-supplied encryption key`
  );
});
