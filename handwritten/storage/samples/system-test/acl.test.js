/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const {Storage} = require('@google-cloud/storage');
const {assert} = require('chai');
const cp = require('child_process');
const uuid = require('uuid');
const path = require('path');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const storage = new Storage();
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);
const userEmail = 'jdobry@google.com';
const fileName = 'test.txt';
const filePath = path.join(__dirname, '..', 'resources', fileName);
const cmd = 'node acl.js';

before(async () => {
  await bucket.create();
  await bucket.upload(filePath);
});

after(async () => {
  try {
    await bucket.deleteFiles({force: true});
  } catch (err) {
    // ignore error
  }
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

it('should print acl for a bucket', () => {
  const out = execSync(`${cmd} print-bucket-acl ${bucketName}`);
  assert.match(out, /OWNER: project-editors-/);
  assert.match(out, /OWNER: project-owners-/);
  assert.match(out, /READER: project-viewers-/);
});

it('should print acl for a file', () => {
  const out = execSync(`${cmd} print-file-acl ${bucketName} ${fileName}`);
  assert.match(out, /OWNER: project-editors-/);
  assert.match(out, /OWNER: project-owners-/);
  assert.match(out, /READER: project-viewers-/);
});

it('should print a users acl for a bucket', async () => {
  await bucket.acl.readers.addUser(userEmail);
  const out = execSync(
    `${cmd} print-bucket-acl-for-user ${bucketName} ${userEmail}`
  );
  assert.match(out, new RegExp(`READER: user-${userEmail}`));
  await bucket.acl.readers.deleteUser(userEmail);
});

it('should add a user as an owner on a bucket', () => {
  const out = execSync(`${cmd} add-bucket-owner ${bucketName} ${userEmail}`);
  assert.match(
    out,
    new RegExp(`Added user ${userEmail} as an owner on bucket ${bucketName}.`)
  );
});

it('should remove a user from a bucket', () => {
  const out = execSync(`${cmd} remove-bucket-owner ${bucketName} ${userEmail}`);
  assert.match(
    out,
    new RegExp(`Removed user ${userEmail} from bucket ${bucketName}.`)
  );
});

it('should add a user as a default owner on a bucket', () => {
  const out = execSync(
    `${cmd} add-bucket-default-owner ${bucketName} ${userEmail}`
  );
  assert.match(
    out,
    new RegExp(`Added user ${userEmail} as an owner on bucket ${bucketName}.`)
  );
});

it('should remove a default user from a bucket', () => {
  const out = execSync(
    `${cmd} remove-bucket-default-owner ${bucketName} ${userEmail}`
  );
  assert.match(
    out,
    new RegExp(`Removed user ${userEmail} from bucket ${bucketName}.`)
  );
});

it('should print a users acl for a file', async () => {
  await bucket.file(fileName).acl.readers.addUser(userEmail);
  const out = execSync(
    `${cmd} print-file-acl-for-user ${bucketName} ${fileName} ${userEmail}`
  );
  assert.match(out, new RegExp(`READER: user-${userEmail}`));
  await bucket.file(fileName).acl.readers.deleteUser(userEmail);
});

it('should add a user as an owner on a bucket', () => {
  const out = execSync(
    `${cmd} add-file-owner ${bucketName} ${fileName} ${userEmail}`
  );
  assert.match(
    out,
    new RegExp(`Added user ${userEmail} as an owner on file ${fileName}.`)
  );
});

it('should remove a user from a bucket', () => {
  const out = execSync(
    `${cmd} remove-file-owner ${bucketName} ${fileName} ${userEmail}`
  );
  assert.match(
    out,
    new RegExp(`Removed user ${userEmail} from file ${fileName}.`)
  );
});
