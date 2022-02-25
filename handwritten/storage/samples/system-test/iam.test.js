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

const {Storage} = require('@google-cloud/storage');
const {assert} = require('chai');
const {before, after, it} = require('mocha');
const cp = require('child_process');
const uuid = require('uuid');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const storage = new Storage();
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);
const userEmail = 'test@example.com';
const roleName = 'roles/storage.objectViewer';

// Condition
const title = 'match-prefix';
const description = 'Applies to objects matching a prefix';
const expression =
  'resource.name.startsWith("projects/_/buckets/bucket-name/objects/prefix-a-")';

before(async () => {
  await bucket.create();
  // UniformBucketLevelAccess must be enabled to add a conditional binding.
  await bucket.setMetadata({
    iamConfiguration: {
      uniformBucketLevelAccess: {
        enabled: true,
      },
    },
  });
});

after(async () => {
  await bucket.delete().catch(console.error);
});

it('should add multiple members to a role on a bucket', async () => {
  const output = execSync(
    `node addBucketIamMember.js ${bucketName} ${roleName} "user:${userEmail}"`
  );
  assert.include(
    output,
    `Added the following member(s) with role ${roleName} to ${bucketName}:`
  );
  assert.match(output, new RegExp(`user:${userEmail}`));
});

it('should add conditional binding to a bucket', async () => {
  const output = execSync(
    `node addBucketConditionalBinding.js ${bucketName} ${roleName} '${title}' '${description}' '${expression}' "user:${userEmail}"`
  );
  assert.include(
    output,
    `Added the following member(s) with role ${roleName} to ${bucketName}:`
  );
  assert.include(output, 'with condition:');
  assert.include(output, `Title: ${title}`);
  assert.include(output, `Description: ${description}`);
  assert.include(output, `Expression: ${expression}`);
});

it('should list members of a role on a bucket', async () => {
  const output = execSync(`node viewBucketIamMembers.js ${bucketName}`);
  assert.match(output, new RegExp(`Bindings for bucket ${bucketName}:`));
  assert.match(output, new RegExp(`Role: ${roleName}`));
  assert.match(output, new RegExp('Members:'));
  assert.match(output, new RegExp(`user:${userEmail}`));
});

it('should remove multiple members from a role on a bucket', async () => {
  const output = execSync(
    `node removeBucketIamMember.js ${bucketName} ${roleName} "user:${userEmail}"`
  );
  assert.ok(
    output.includes(
      `Removed the following member(s) with role ${roleName} from ${bucketName}:`
    )
  );
  assert.match(output, new RegExp(`user:${userEmail}`));
});

it('should remove conditional binding to a bucket', async () => {
  const output = execSync(
    `node removeBucketConditionalBinding.js ${bucketName} ${roleName} '${title}' '${description}' '${expression}'`
  );
  assert.include(output, 'Conditional Binding was removed');
});
