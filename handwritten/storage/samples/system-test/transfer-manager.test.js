// Copyright 2022 Google LLC
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

const path = require('path');
const {Storage} = require('@google-cloud/storage');
const {before, after, it, describe} = require('mocha');
const uuid = require('uuid');
const cp = require('child_process');
const {assert} = require('chai');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});
const storage = new Storage();
const cwd = path.join(__dirname, '..');
const bucketName = generateName();
const bucket = storage.bucket(bucketName);
const firstFileName = 'test.txt';
const secondFileName = 'test2.txt';
const firstFilePath = path.join(cwd, 'resources', firstFileName);
const secondFilePath = path.join(cwd, 'resources', secondFileName);
const downloadFilePath = path.join(cwd, 'downloaded.txt');
const chunkSize = 1024;

describe('transfer manager', () => {
  before(async () => {
    await bucket.create();
  });

  after(async () => {
    await bucket.deleteFiles({force: true}).catch(console.error);
    await bucket.delete().catch(console.error);
  });

  it('should upload multiple files', async () => {
    const output = execSync(
      `node uploadManyFilesWithTransferManager.js ${bucketName} ${firstFilePath} ${secondFilePath}`
    );
    assert.match(
      output,
      new RegExp(
        `${firstFilePath} uploaded to ${bucketName}.\n${secondFilePath} uploaded to ${bucketName}`
      )
    );
  });

  it('should download mulitple files', async () => {
    const output = execSync(
      `node downloadManyFilesWithTransferManager.js ${bucketName} ${firstFilePath} ${secondFilePath}`
    );
    assert.match(
      output,
      new RegExp(
        `gs://${bucketName}/${firstFilePath} downloaded to ${firstFilePath}.\ngs://${bucketName}/${secondFilePath} downloaded to ${secondFilePath}.`
      )
    );
  });

  it('should download a file utilizing chunked download', async () => {
    const output = execSync(
      `node downloadFileInChunksWithTransferManager.js ${bucketName} ${firstFilePath} ${downloadFilePath} ${chunkSize}`
    );
    assert.match(
      output,
      new RegExp(
        `gs://${bucketName}/${firstFilePath} downloaded to ${downloadFilePath}.`
      )
    );
  });
});

function generateName() {
  return `nodejs-storage-samples-${uuid.v4()}`;
}
