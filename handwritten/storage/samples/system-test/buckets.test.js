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

const {Storage} = require(`@google-cloud/storage`);
const {assert} = require('chai');
const execa = require('execa');
const uuid = require('uuid');

const storage = new Storage();
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const defaultKmsKeyName = process.env.GOOGLE_CLOUD_KMS_KEY_ASIA;
const bucket = storage.bucket(bucketName);
const cmd = 'node buckets.js';
const exec = async cmd => (await execa.shell(cmd)).stdout;

after(async () => {
  return bucket.delete().catch(console.error);
});

it('should create a bucket', async () => {
  const output = await exec(`${cmd} create ${bucketName}`);
  assert.match(output, new RegExp(`Bucket ${bucketName} created.`));
  const [exists] = await bucket.exists();
  assert.strictEqual(exists, true);
});

it('should list buckets', async () => {
  const output = await exec(`${cmd} list`);
  assert.match(output, /Buckets:/);
  assert.match(output, new RegExp(bucketName));
});

it('should set a buckets default KMS key', async () => {
  const output = await exec(
    `${cmd} enable-default-kms-key ${bucketName} ${defaultKmsKeyName}`
  );
  assert.match(
    output,
    new RegExp(
      `Default KMS key for ${bucketName} was set to ${defaultKmsKeyName}.`
    )
  );
  const metadata = await bucket.getMetadata();
  assert.strictEqual(
    metadata[0].encryption.defaultKmsKeyName,
    defaultKmsKeyName
  );
});

it('should delete a bucket', async () => {
  const output = await exec(`${cmd} delete ${bucketName}`);
  assert.match(output, new RegExp(`Bucket ${bucketName} deleted.`));
  const [exists] = await bucket.exists();
  assert.strictEqual(exists, false);
});
