// Copyright 2021 Google LLC
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

import {Bucket, File, Notification, Storage, HmacKey} from '../src';
import * as path from 'path';
import {ApiError} from '@google-cloud/common';

/////////////////////////////////////////////////
//////////////////// BUCKET /////////////////////
/////////////////////////////////////////////////

export async function addLifecycleRule(bucket: Bucket) {
  await bucket.addLifecycleRule({
    action: 'delete',
    condition: {
      age: 365 * 3, // Specified in days.
    },
  });
}

export async function combine(bucket: Bucket) {
  bucket = new Bucket(bucket.storage, bucket.name, {
    preconditionOpts: {
      ifMetagenerationMatch: 1,
    },
  });
  const file1 = bucket.file('file1.txt');
  const file2 = bucket.file('file2.txt');
  await file1.save('file1 contents');
  await file2.save('file2 contents');
  const f1WithPrecondition = new File(file1.bucket, file1.name, {
    preconditionOpts: {
      ifGenerationMatch: file1.metadata.generation,
    },
  });
  const f2WithPrecondition = new File(file2.bucket, file2.name, {
    preconditionOpts: {
      ifGenerationMatch: file2.metadata.generation,
    },
  });
  const sources = [f1WithPrecondition, f2WithPrecondition];
  const allFiles = bucket.file('all-files.txt');
  // If we are using a precondition we must make sure the file exists and the metageneration matches that provided as a query parameter
  await allFiles.save('allfiles contents');
  await bucket.combine(sources, allFiles);
}

export async function create(bucket: Bucket) {
  const [bucketExists] = await bucket.exists();
  if (bucketExists) {
    await bucket.deleteFiles();
    await bucket.delete({
      ignoreNotFound: true,
    });
  }
  await bucket.create();
}

export async function createNotification(bucket: Bucket) {
  await bucket.createNotification('my-topic');
}

export async function deleteBucket(bucket: Bucket) {
  await bucket.deleteFiles();
  await bucket.delete();
}

export async function deleteFiles(bucket: Bucket) {
  await bucket.deleteFiles();
}

export async function deleteLabels(bucket: Bucket) {
  await bucket.deleteLabels();
}

export async function disableRequesterPays(bucket: Bucket) {
  await bucket.disableRequesterPays();
}

export async function enableLogging(bucket: Bucket) {
  const config = {
    prefix: 'log',
  };
  await bucket.enableLogging(config);
}

export async function enableRequesterPays(bucket: Bucket) {
  await bucket.enableRequesterPays();
}

export async function bucketExists(bucket: Bucket) {
  await bucket.exists();
}

export async function bucketGet(bucket: Bucket) {
  await bucket.get();
}

export async function getFilesStream(bucket: Bucket) {
  return new Promise((resolve, reject) => {
    bucket
      .getFilesStream()
      .on('data', () => {})
      .on('end', () => resolve(undefined))
      .on('error', (err: ApiError) => reject(err));
  });
}

export async function getLabels(bucket: Bucket) {
  await bucket.getLabels();
}

export async function bucketGetMetadata(bucket: Bucket) {
  await bucket.getMetadata();
}

export async function getNotifications(bucket: Bucket) {
  await bucket.getNotifications();
}

export async function lock(bucket: Bucket) {
  const metageneration = 0;
  await bucket.lock(metageneration);
}

export async function bucketMakePrivate(bucket: Bucket) {
  await bucket.makePrivate();
}

export async function bucketMakePublic(bucket: Bucket) {
  await bucket.makePublic();
}

export async function removeRetentionPeriod(bucket: Bucket) {
  await bucket.removeRetentionPeriod();
}

export async function setCorsConfiguration(bucket: Bucket) {
  const corsConfiguration = [{maxAgeSeconds: 3600}]; // 1 hour
  await bucket.setCorsConfiguration(corsConfiguration);
}

export async function setLabels(bucket: Bucket) {
  const labels = {
    labelone: 'labelonevalue',
    labeltwo: 'labeltwovalue',
  };
  await bucket.setLabels(labels);
}

export async function bucketSetMetadata(bucket: Bucket) {
  const metadata = {
    website: {
      mainPageSuffix: 'http://example.com',
      notFoundPage: 'http://example.com/404.html',
    },
  };
  await bucket.setMetadata(metadata);
}

export async function setRetentionPeriod(bucket: Bucket) {
  const DURATION_SECONDS = 15780000; // 6 months.
  await bucket.setRetentionPeriod(DURATION_SECONDS);
}

export async function bucketSetStorageClass(bucket: Bucket) {
  await bucket.setStorageClass('nearline');
}

export async function bucketUploadResumable(bucket: Bucket) {
  await bucket.upload(
    path.join(
      __dirname,
      '../../conformance-test/test-data/retryStrategyTestData.json'
    ),
    {resumable: true}
  );
}

export async function bucketUploadMultipart(bucket: Bucket) {
  // If we are using a precondition we must make sure the file exists and the metageneration matches that provided as a query parameter
  bucket = new Bucket(bucket.storage, bucket.name, {
    preconditionOpts: {
      ifMetagenerationMatch: 1,
    },
  });
  const fileToSave = bucket.file('retryStrategyTestData.json');
  await fileToSave.save('fileToSave contents');
  await bucket.upload(
    path.join(
      __dirname,
      '../../conformance-test/test-data/retryStrategyTestData.json'
    ),
    {resumable: false}
  );
}

/////////////////////////////////////////////////
//////////////////// FILE /////////////////////
/////////////////////////////////////////////////

export async function copy(_bucket: Bucket, file: File) {
  await file.copy('a-different-file.png');
}

export async function createReadStream(_bucket: Bucket, file: File) {
  return new Promise((resolve, reject) => {
    file
      .createReadStream()
      .on('data', () => {})
      .on('end', () => resolve(undefined))
      .on('error', (err: ApiError) => reject(err));
  });
}

export async function createResumableUpload(_bucket: Bucket, file: File) {
  await file.createResumableUpload();
}

export async function fileDelete(_bucket: Bucket, file: File) {
  await file.delete();
}

export async function download(_bucket: Bucket, file: File) {
  await file.download();
}

export async function exists(_bucket: Bucket, file: File) {
  await file.exists();
}

export async function get(_bucket: Bucket, file: File) {
  await file.get();
}

export async function getExpirationDate(bucket: Bucket, file: File) {
  await file.getExpirationDate();
}

export async function getMetadata(_bucket: Bucket, file: File) {
  await file.getMetadata();
}

export async function isPublic(_bucket: Bucket, file: File) {
  await file.isPublic();
}

export async function fileMakePrivate(_bucket: Bucket, file: File) {
  await file.makePrivate();
}

export async function fileMakePublic(_bucket: Bucket, file: File) {
  await file.makePublic();
}

export async function move(_bucket: Bucket, file: File) {
  await file.move('new-file');
}

export async function rename(_bucket: Bucket, file: File) {
  await file.rename('new-name');
}

export async function rotateEncryptionKey(_bucket: Bucket, file: File) {
  const crypto = require('crypto');
  const buffer = crypto.randomBytes(32);
  const newKey = buffer.toString('base64');
  await file.rotateEncryptionKey({
    encryptionKey: Buffer.from(newKey, 'base64'),
  });
}

export async function saveResumable(_bucket: Bucket, file: File) {
  await file.save('testdata', {resumable: true});
}

export async function saveMultipart(_bucket: Bucket, file: File) {
  await file.save('testdata', {resumable: false});
}

export async function setMetadata(_bucket: Bucket, file: File) {
  const metadata = {
    contentType: 'application/x-font-ttf',
    metadata: {
      my: 'custom',
      properties: 'go here',
    },
  };
  await file.setMetadata(metadata);
}

export async function setStorageClass(_bucket: Bucket, file: File) {
  const result = await file.setStorageClass('nearline');
  if (!result) {
    throw Error();
  }
}

// /////////////////////////////////////////////////
// /////////////////// HMAC KEY ////////////////////
// /////////////////////////////////////////////////

export async function deleteHMAC(
  _bucket: Bucket,
  file: File,
  _notification: Notification,
  _storage: Storage,
  hmacKey: HmacKey
) {
  const metadata = {
    state: 'INACTIVE',
  };
  hmacKey.setMetadata(metadata);
  await hmacKey.delete();
}

export async function getHMAC(
  _bucket: Bucket,
  file: File,
  _notification: Notification,
  _storage: Storage,
  hmacKey: HmacKey
) {
  await hmacKey.get();
}

export async function getMetadataHMAC(
  _bucket: Bucket,
  file: File,
  _notification: Notification,
  _storage: Storage,
  hmacKey: HmacKey
) {
  await hmacKey.getMetadata();
}

export async function setMetadataHMAC(
  _bucket: Bucket,
  file: File,
  _notification: Notification,
  _storage: Storage,
  hmacKey: HmacKey
) {
  const metadata = {
    state: 'INACTIVE',
  };
  await hmacKey.setMetadata(metadata);
}

/////////////////////////////////////////////////
////////////////////// IAM //////////////////////
/////////////////////////////////////////////////

export async function iamGetPolicy(bucket: Bucket) {
  await bucket.iam.getPolicy({requestedPolicyVersion: 1});
}

export async function iamSetPolicy(bucket: Bucket) {
  const testPolicy = {
    bindings: [
      {
        role: 'roles/storage.admin',
        members: ['serviceAccount:myotherproject@appspot.gserviceaccount.com'],
      },
    ],
  };
  await bucket.iam.setPolicy(testPolicy);
}

export async function iamTestPermissions(bucket: Bucket) {
  const permissionToTest = 'storage.buckets.delete';
  await bucket.iam.testPermissions(permissionToTest);
}

/////////////////////////////////////////////////
///////////////// NOTIFICATION //////////////////
/////////////////////////////////////////////////

export async function notificationDelete(
  _bucket: Bucket,
  _file: File,
  notification: Notification
) {
  await notification.delete();
}

export async function notificationCreate(
  _bucket: Bucket,
  _file: File,
  notification: Notification
) {
  await notification.create();
}

export async function notificationExists(
  _bucket: Bucket,
  _file: File,
  notification: Notification
) {
  await notification.exists();
}

export async function notificationGet(
  _bucket: Bucket,
  _file: File,
  notification: Notification
) {
  await notification.get();
}

export async function notificationGetMetadata(
  _bucket: Bucket,
  _file: File,
  notification: Notification
) {
  await notification.getMetadata();
}

/////////////////////////////////////////////////
/////////////////// STORAGE /////////////////////
/////////////////////////////////////////////////

export async function createBucket(
  _bucket: Bucket,
  _file: File,
  _notification: Notification,
  storage: Storage
) {
  const bucket = storage.bucket('test-creating-bucket');
  const [exists] = await bucket.exists();
  if (exists) {
    bucket.delete();
  }
  await storage.createBucket('test-creating-bucket');
}

export async function createHMACKey(
  _bucket: Bucket,
  _file: File,
  _notification: Notification,
  storage: Storage
) {
  const serviceAccountEmail = 'my-service-account@appspot.gserviceaccount.com';
  await storage.createHmacKey(serviceAccountEmail);
}

export async function getBuckets(
  _bucket: Bucket,
  _file: File,
  _notification: Notification,
  storage: Storage
) {
  await storage.getBuckets();
}

export async function getBucketsStream(
  _bucket: Bucket,
  _file: File,
  _notification: Notification,
  storage: Storage
) {
  return new Promise((resolve, reject) => {
    storage
      .getBucketsStream()
      .on('data', () => {})
      .on('end', () => resolve(undefined))
      .on('error', err => reject(err));
  });
}

export function getHMACKeyStream(
  _bucket: Bucket,
  _file: File,
  _notification: Notification,
  storage: Storage
) {
  return new Promise((resolve, reject) => {
    storage
      .getHmacKeysStream()
      .on('data', () => {})
      .on('end', () => resolve(undefined))
      .on('error', err => reject(err));
  });
}

export async function getServiceAccount(
  _bucket: Bucket,
  _file: File,
  _notification: Notification,
  storage: Storage
) {
  await storage.getServiceAccount();
}
