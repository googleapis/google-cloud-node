// Copyright 2020 Google LLC
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

const {Storage} = require('@google-cloud/storage');
const {assert} = require('chai');
const {before, beforeEach, after, describe, it} = require('mocha');
const cp = require('child_process');
const uuid = require('uuid');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const storage = new Storage();
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);

describe('Bucket lifecycle management', () => {
  before(async () => {
    await bucket.create();
  });

  beforeEach(async () => {
    await bucket.setMetadata({lifecycle: null});
  });

  after(async () => {
    await bucket.delete().catch(console.error);
  });

  it('should add a lifecycle delete rule', async () => {
    const output = execSync(
      `node enableBucketLifecycleManagement.js ${bucketName}`
    );
    assert.include(
      output,
      `Lifecycle management is enabled for bucket ${bucketName} and the rules are:`
    );
    const [metadata] = await bucket.getMetadata();
    assert.deepStrictEqual(metadata.lifecycle.rule[0], {
      action: {type: 'Delete'},
      condition: {age: 100},
    });
  });

  it('should disable all lifecycle rules', async () => {
    // Add a lifecycle rule in order for the sample to delete.
    await bucket.addLifecycleRule({
      action: 'delete',
      condition: {age: 100},
    });

    const [metadata] = await bucket.getMetadata();
    assert.deepStrictEqual(metadata.lifecycle.rule[0], {
      action: {type: 'Delete'},
      condition: {age: 100},
    });

    const output = execSync(
      `node disableBucketLifecycleManagement.js ${bucketName}`
    );
    assert.include(
      output,
      `Lifecycle management is disabled for bucket ${bucketName}`
    );
    const [newMetadata] = await bucket.getMetadata();
    assert.isUndefined(newMetadata.lifecycle);
  });
});
