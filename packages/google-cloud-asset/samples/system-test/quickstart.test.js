/**
 * Copyright 2018, Google, LLC.
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

const {assert} = require('chai');
const path = require('path');
const uuid = require('uuid');
const execa = require('execa');
const {Storage} = require('@google-cloud/storage');

const cwd = path.join(__dirname, '..');
const cmd = 'node quickstart.js';

const storage = new Storage();
const bucketName = `asset-nodejs-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);

describe('quickstart sample tests', () => {
  before(async () => {
    await bucket.create();
  });

  after(async () => {
    await bucket.delete();
  });

  it('should export assets to specified path', async () => {
    const dumpFilePath = `gs://${bucketName}/my-assets.txt`;
    await execa.shell(`${cmd} export-assets ${dumpFilePath}`, {cwd});
    const file = await bucket.file('my-assets.txt');
    const exists = await file.exists();
    assert.ok(exists);
    await file.delete();
  });

  it('should get assets history successfully', async () => {
    const assetName = `//storage.googleapis.com/${bucketName}`;
    const {stdout} = await execa.shell(
      `${cmd} batch-get-history ${assetName}`,
      {cwd}
    );
    assert.match(stdout, new RegExp(assetName));
  });
});
