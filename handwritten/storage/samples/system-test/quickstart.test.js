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

const proxyquire = require(`proxyquire`).noPreserveCache();
const assert = require('assert');
const tools = require(`@google-cloud/nodejs-repo-tools`);
const uuid = require(`uuid`);

const {Storage} = proxyquire(`@google-cloud/storage`, {});

const storage = new Storage();
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);

before(tools.stubConsole);
after(async () => {
  tools.restoreConsole();
  try {
    await bucket.delete();
  } catch (err) {} // ignore error
});

it(`should create a bucket`, async () => {
  const expectedBucketName = `my-new-bucket`;

  const StorageMock = class {
    createBucket(_bucketName) {
      assert.strictEqual(_bucketName, expectedBucketName);

      return bucket.create().then(([bucket]) => {
        assert.notStrictEqual(bucket, undefined);
        assert.strictEqual(bucket.name, bucketName);

        setTimeout(() => {
          assert.strictEqual(console.log.calledOnce, true);
          assert.deepStrictEqual(console.log.firstCall.args, [
            `Bucket ${expectedBucketName} created.`,
          ]);
        }, 200);

        return [bucket];
      });
    }
  };

  proxyquire(`../quickstart`, {
    '@google-cloud/storage': {
      Storage: StorageMock,
    },
  });
});
