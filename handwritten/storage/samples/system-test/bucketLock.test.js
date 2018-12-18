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

const path = require('path');
const {Storage} = require('@google-cloud/storage');
const {assert} = require('chai');
const execa = require('execa');
const uuid = require('uuid');

const storage = new Storage();
const cwd = path.join(__dirname, '..');
const cmd = 'node bucketLock.js';
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);
const fileName = 'test.txt';

const uploadFilePath = path.join(cwd, 'resources', fileName);
const exec = async cmd => (await execa.shell(cmd)).stdout;

before(async () => {
  await bucket.create();
  await bucket.upload(uploadFilePath);
});

after(async () => {
  try {
    await bucket.deleteFiles({force: true});
  } catch (err) {
    // ignore error
  }
  try {
    await bucket.delete();
  } catch (err) {
    // ignore error
  }
});

it('should set a retention policy on a bucket', async () => {
  const retentionPeriod = 5;
  const output = await exec(
    `${cmd} set-retention-policy ${bucketName} ${retentionPeriod}`
  );
  assert.match(
    output,
    new RegExp(
      `Bucket ${bucketName} retention period set for ${retentionPeriod} seconds.`
    )
  );
});

it('should get a retention policy on a bucket', async () => {
  const output = await exec(`${cmd} get-retention-policy ${bucketName}`);
  assert.match(output, /A retention policy exists!/);
});

it('should enable default event-based hold on a bucket', async () => {
  const output = await exec(
    `${cmd} enable-default-event-based-hold ${bucketName}`
  );
  assert.match(
    output,
    new RegExp(`Default event-based hold was enabled for ${bucketName}.`)
  );
});

it('should get default event-based hold on a bucket', async () => {
  const output = await exec(
    `${cmd} get-default-event-based-hold ${bucketName}`
  );
  assert.match(output, /Default event-based hold: true./);
});

it('should disable default event-based hold on a bucket', async () => {
  const output = await exec(
    `${cmd} disable-default-event-based-hold ${bucketName}`
  );
  assert.match(
    output,
    new RegExp(`Default event-based hold was disabled for ${bucketName}.`)
  );
});

it('should set an event-based hold on a file', async () => {
  const output = await exec(
    `${cmd} set-event-based-hold ${bucketName} ${fileName}`
  );
  assert.match(output, new RegExp(`Event-based hold was set for ${fileName}.`));
});

it('should release an event-based hold on a file', async () => {
  const output = await exec(
    `${cmd} release-event-based-hold ${bucketName} ${fileName}`
  );
  assert.match(
    output,
    new RegExp(`Event-based hold was released for ${fileName}.`)
  );
});

it('should remove a retention policy on a bucket', async () => {
  const output = await exec(`${cmd} remove-retention-policy ${bucketName}`);
  assert.match(
    output,
    new RegExp(`Removed bucket ${bucketName} retention policy.`)
  );
});

it('should set an temporary hold on a file', async () => {
  const output = await exec(
    `${cmd} set-temporary-hold ${bucketName} ${fileName}`
  );
  assert.match(output, new RegExp(`Temporary hold was set for ${fileName}.`));
});

it('should release an temporary hold on a file', async () => {
  const output = await exec(
    `${cmd} release-temporary-hold ${bucketName} ${fileName}`
  );
  assert.match(
    output,
    new RegExp(`Temporary hold was released for ${fileName}.`)
  );
});

it('should lock a bucket with a retention policy', async () => {
  const retentionPeriod = 5;
  await exec(`${cmd} set-retention-policy ${bucketName} ${retentionPeriod}`);
  const output = await exec(`${cmd} lock-retention-policy ${bucketName}`);
  assert.match(
    output,
    new RegExp(`Retention policy for ${bucketName} is now locked.`)
  );
});
