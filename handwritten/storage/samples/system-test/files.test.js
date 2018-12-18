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
const cwd = path.join(__dirname, '..');
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);
const fileName = 'test.txt';
const movedFileName = 'test2.txt';
const copiedFileName = 'test3.txt';
const kmsKeyName = process.env.GOOGLE_CLOUD_KMS_KEY_US;
const filePath = path.join(cwd, 'resources', fileName);
const downloadFilePath = path.join(cwd, 'downloaded.txt');
const cmd = `node files.js`;

before(async () => {
  await bucket.create();
});

after(async () => {
  await promisify(fs.unlink)(downloadFilePath).catch(console.error);
  // Try deleting all files twice, just to make sure
  await bucket.deleteFiles({force: true}).catch(console.error);
  await bucket.deleteFiles({force: true}).catch(console.error);
  await bucket.delete().catch(console.error);
});

it('should upload a file', async () => {
  const output = await exec(`${cmd} upload ${bucketName} ${filePath}`);
  assert.match(output, new RegExp(`${filePath} uploaded to ${bucketName}.`));
  const [exists] = await bucket.file(fileName).exists();
  assert.strictEqual(exists, true);
});

it('should upload a file with a kms key', async () => {
  const output = await exec(
    `${cmd} upload-with-kms-key ${bucketName} ${filePath} ${kmsKeyName}`
  );
  assert.match(
    output,
    new RegExp(`${filePath} uploaded to ${bucketName} using ${kmsKeyName}.`)
  );
  const [exists] = await bucket.file(fileName).exists();
  assert.strictEqual(exists, true);
});

it('should download a file', async () => {
  const output = await exec(
    `${cmd} download ${bucketName} ${fileName} ${downloadFilePath}`
  );
  assert.match(
    output,
    new RegExp(
      `gs://${bucketName}/${fileName} downloaded to ${downloadFilePath}.`
    )
  );
  fs.statSync(downloadFilePath);
});

it('should move a file', async () => {
  const output = await exec(
    `${cmd} move ${bucketName} ${fileName} ${movedFileName}`
  );
  assert.match(
    output,
    new RegExp(
      `gs://${bucketName}/${fileName} moved to gs://${bucketName}/${movedFileName}.`
    )
  );
  const [exists] = await bucket.file(movedFileName).exists();
  assert.strictEqual(exists, true);
});

it('should copy a file', async () => {
  const output = await exec(
    `${cmd} copy ${bucketName} ${movedFileName} ${bucketName} ${copiedFileName}`
  );
  assert.match(
    output,
    new RegExp(
      `gs://${bucketName}/${movedFileName} copied to gs://${bucketName}/${copiedFileName}.`
    )
  );
  const [exists] = await bucket.file(copiedFileName).exists();
  assert.strictEqual(exists, true);
});

it('should list files', async () => {
  const output = await exec(`${cmd} list ${bucketName}`);
  assert.match(output, /Files:/);
  assert.match(output, new RegExp(movedFileName));
  assert.match(output, new RegExp(copiedFileName));
});

it('should list files by a prefix', async () => {
  let output = await exec(`${cmd} list ${bucketName} test "/"`);
  assert.match(output, /Files:/);
  assert.match(output, new RegExp(movedFileName));
  assert.match(output, new RegExp(copiedFileName));

  output = await exec(`${cmd} list ${bucketName} foo`);
  assert.match(output, /Files:/);
  assert.notMatch(output, new RegExp(movedFileName));
  assert.notMatch(output, new RegExp(copiedFileName));
});

it('should make a file public', async () => {
  const output = await exec(
    `${cmd} make-public ${bucketName} ${copiedFileName}`
  );
  assert.match(
    output,
    new RegExp(`gs://${bucketName}/${copiedFileName} is now public.`)
  );
});

it('should generate a signed URL for a file', async () => {
  const output = await exec(
    `${cmd} generate-signed-url ${bucketName} ${copiedFileName}`
  );
  assert.match(output, new RegExp(`The signed url for ${copiedFileName} is `));
});

it('should get metadata for a file', async () => {
  const output = await exec(
    `${cmd} get-metadata ${bucketName} ${copiedFileName}`
  );
  assert.match(output, new RegExp(`File: ${copiedFileName}`));
  assert.match(output, new RegExp(`Bucket: ${bucketName}`));
});

it('should delete a file', async () => {
  const output = await exec(`${cmd} delete ${bucketName} ${copiedFileName}`);
  assert.match(
    output,
    new RegExp(`gs://${bucketName}/${copiedFileName} deleted.`)
  );
  const [exists] = await bucket.file(copiedFileName).exists();
  assert.strictEqual(exists, false);
});
