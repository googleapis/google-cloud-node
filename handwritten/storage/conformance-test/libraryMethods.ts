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

import {Bucket, File, Notification, Storage, HmacKey, Policy} from '../src';
import * as path from 'path';
import {ApiError} from '../src/nodejs-common';
import {
  createTestBuffer,
  createTestFileFromBuffer,
  deleteTestFile,
} from './testBenchUtil';
import * as uuid from 'uuid';

const FILE_SIZE_BYTES = 9 * 1024 * 1024;
const CHUNK_SIZE_BYTES = 2 * 1024 * 1024;

export interface ConformanceTestOptions {
  bucket?: Bucket;
  file?: File;
  notification?: Notification;
  storage?: Storage;
  hmacKey?: HmacKey;
  preconditionRequired?: boolean;
}

/////////////////////////////////////////////////
//////////////////// BUCKET /////////////////////
/////////////////////////////////////////////////

export async function addLifecycleRuleInstancePrecondition(
  options: ConformanceTestOptions
) {
  await options.bucket!.addLifecycleRule({
    action: 'delete',
    condition: {
      age: 365 * 3, // Specified in days.
    },
  });
}

export async function addLifecycleRule(options: ConformanceTestOptions) {
  if (options.preconditionRequired) {
    await options.bucket!.addLifecycleRule(
      {
        action: 'delete',
        condition: {
          age: 365 * 3, // Specified in days.
        },
      },
      {
        ifMetagenerationMatch: 2,
      }
    );
  } else {
    await options.bucket!.addLifecycleRule({
      action: 'delete',
      condition: {
        age: 365 * 3, // Specified in days.
      },
    });
  }
}

export async function combineInstancePrecondition(
  options: ConformanceTestOptions
) {
  const file1 = options.bucket!.file('file1.txt');
  const file2 = options.bucket!.file('file2.txt');
  await file1.save('file1 contents');
  await file2.save('file2 contents');
  let allFiles;
  const sources = [file1, file2];
  if (options.preconditionRequired) {
    allFiles = options.bucket!.file('all-files.txt', {
      preconditionOpts: {
        ifGenerationMatch: 0,
      },
    });
  } else {
    allFiles = options.bucket!.file('all-files.txt');
  }

  await options.bucket!.combine(sources, allFiles);
}

export async function combine(options: ConformanceTestOptions) {
  const file1 = options.bucket!.file('file1.txt');
  const file2 = options.bucket!.file('file2.txt');
  await file1.save('file1 contents');
  await file2.save('file2 contents');
  const sources = [file1, file2];
  const allFiles = options.bucket!.file('all-files.txt');
  await allFiles.save('allfiles contents');
  if (options.preconditionRequired) {
    await options.bucket!.combine(sources, allFiles, {
      ifGenerationMatch: allFiles.metadata.generation,
    });
  } else {
    await options.bucket!.combine(sources, allFiles);
  }
}

export async function create(options: ConformanceTestOptions) {
  const [bucketExists] = await options.bucket!.exists();
  if (bucketExists) {
    await options.bucket!.deleteFiles();
    await options.bucket!.delete({
      ignoreNotFound: true,
    });
  }
  await options.bucket!.create();
}

export async function createNotification(options: ConformanceTestOptions) {
  await options.bucket!.createNotification('my-topic');
}

export async function deleteBucket(options: ConformanceTestOptions) {
  await options.bucket!.deleteFiles();
  await options.bucket!.delete();
}

// Note: bucket.deleteFiles is missing from these tests
// Preconditions cannot be implemented with current setup.

export async function deleteLabelsInstancePrecondition(
  options: ConformanceTestOptions
) {
  await options.bucket!.deleteLabels();
}

export async function deleteLabels(options: ConformanceTestOptions) {
  if (options.preconditionRequired) {
    await options.bucket!.deleteLabels({
      ifMetagenerationMatch: 2,
    });
  } else {
    await options.bucket!.deleteLabels();
  }
}

export async function disableRequesterPaysInstancePrecondition(
  options: ConformanceTestOptions
) {
  await options.bucket!.disableRequesterPays();
}

export async function disableRequesterPays(options: ConformanceTestOptions) {
  if (options.preconditionRequired) {
    await options.bucket!.disableRequesterPays({
      ifMetagenerationMatch: 2,
    });
  } else {
    await options.bucket!.disableRequesterPays();
  }
}

export async function enableLoggingInstancePrecondition(
  options: ConformanceTestOptions
) {
  const config = {
    prefix: 'log',
  };
  await options.bucket!.enableLogging(config);
}

export async function enableLogging(options: ConformanceTestOptions) {
  let config;
  if (options.preconditionRequired) {
    config = {
      prefix: 'log',
      ifMetagenerationMatch: 2,
    };
  } else {
    config = {
      prefix: 'log',
    };
  }
  await options.bucket!.enableLogging(config);
}

export async function enableRequesterPaysInstancePrecondition(
  options: ConformanceTestOptions
) {
  await options.bucket!.enableRequesterPays();
}

export async function enableRequesterPays(options: ConformanceTestOptions) {
  if (options.preconditionRequired) {
    await options.bucket!.enableRequesterPays({
      ifMetagenerationMatch: 2,
    });
  } else {
    await options.bucket!.enableRequesterPays();
  }
}

export async function bucketExists(options: ConformanceTestOptions) {
  await options.bucket!.exists();
}

export async function bucketGet(options: ConformanceTestOptions) {
  await options.bucket!.get();
}

export async function getFilesStream(options: ConformanceTestOptions) {
  return new Promise((resolve, reject) => {
    options
      .bucket!.getFilesStream()
      .on('data', () => {})
      .on('end', () => resolve(undefined))
      .on('error', (err: ApiError) => reject(err));
  });
}

export async function getLabels(options: ConformanceTestOptions) {
  await options.bucket!.getLabels();
}

export async function bucketGetMetadata(options: ConformanceTestOptions) {
  await options.bucket!.getMetadata();
}

export async function getNotifications(options: ConformanceTestOptions) {
  await options.bucket!.getNotifications();
}

export async function lock(options: ConformanceTestOptions) {
  const metageneration = 0;
  await options.bucket!.lock(metageneration);
}

export async function bucketMakePrivateInstancePrecondition(
  options: ConformanceTestOptions
) {
  await options.bucket!.makePrivate();
}

export async function bucketMakePrivate(options: ConformanceTestOptions) {
  if (options.preconditionRequired) {
    await options.bucket!.makePrivate({
      preconditionOpts: {ifMetagenerationMatch: 2},
    });
  } else {
    await options.bucket!.makePrivate();
  }
}

export async function bucketMakePublic(options: ConformanceTestOptions) {
  await options.bucket!.makePublic();
}

export async function removeRetentionPeriodInstancePrecondition(
  options: ConformanceTestOptions
) {
  await options.bucket!.removeRetentionPeriod();
}

export async function removeRetentionPeriod(options: ConformanceTestOptions) {
  if (options.preconditionRequired) {
    await options.bucket!.removeRetentionPeriod({
      ifMetagenerationMatch: 2,
    });
  } else {
    await options.bucket!.removeRetentionPeriod();
  }
}

export async function setCorsConfigurationInstancePrecondition(
  options: ConformanceTestOptions
) {
  const corsConfiguration = [{maxAgeSeconds: 3600}]; // 1 hour
  await options.bucket!.setCorsConfiguration(corsConfiguration);
}

export async function setCorsConfiguration(options: ConformanceTestOptions) {
  const corsConfiguration = [{maxAgeSeconds: 3600}]; // 1 hour
  if (options.preconditionRequired) {
    await options.bucket!.setCorsConfiguration(corsConfiguration, {
      ifMetagenerationMatch: 2,
    });
  } else {
    await options.bucket!.setCorsConfiguration(corsConfiguration);
  }
}

export async function setLabelsInstancePrecondition(
  options: ConformanceTestOptions
) {
  const labels = {
    labelone: 'labelonevalue',
    labeltwo: 'labeltwovalue',
  };
  await options.bucket!.setLabels(labels);
}

export async function setLabels(options: ConformanceTestOptions) {
  const labels = {
    labelone: 'labelonevalue',
    labeltwo: 'labeltwovalue',
  };
  if (options.preconditionRequired) {
    await options.bucket!.setLabels(labels, {
      ifMetagenerationMatch: 2,
    });
  } else {
    await options.bucket!.setLabels(labels);
  }
}

export async function bucketSetMetadataInstancePrecondition(
  options: ConformanceTestOptions
) {
  const metadata = {
    website: {
      mainPageSuffix: 'http://example.com',
      notFoundPage: 'http://example.com/404.html',
    },
  };
  await options.bucket!.setMetadata(metadata);
}

export async function bucketSetMetadata(options: ConformanceTestOptions) {
  const metadata = {
    website: {
      mainPageSuffix: 'http://example.com',
      notFoundPage: 'http://example.com/404.html',
    },
  };
  if (options.preconditionRequired) {
    await options.bucket!.setMetadata(metadata, {
      ifMetagenerationMatch: 2,
    });
  } else {
    await options.bucket!.setMetadata(metadata);
  }
}

export async function setRetentionPeriodInstancePrecondition(
  options: ConformanceTestOptions
) {
  const DURATION_SECONDS = 15780000; // 6 months.
  await options.bucket!.setRetentionPeriod(DURATION_SECONDS);
}

export async function setRetentionPeriod(options: ConformanceTestOptions) {
  const DURATION_SECONDS = 15780000; // 6 months.
  if (options.preconditionRequired) {
    await options.bucket!.setRetentionPeriod(DURATION_SECONDS, {
      ifMetagenerationMatch: 2,
    });
  } else {
    await options.bucket!.setRetentionPeriod(DURATION_SECONDS);
  }
}

export async function bucketSetStorageClassInstancePrecondition(
  options: ConformanceTestOptions
) {
  await options.bucket!.setStorageClass('nearline');
}

export async function bucketSetStorageClass(options: ConformanceTestOptions) {
  if (options.preconditionRequired) {
    await options.bucket!.setStorageClass('nearline', {
      ifMetagenerationMatch: 2,
    });
  } else {
    await options.bucket!.setStorageClass('nearline');
  }
}

export async function bucketUploadResumableInstancePrecondition(
  options: ConformanceTestOptions
) {
  const filePath = path.join(__dirname, `test-data/tmp-${uuid.v4()}.txt`);
  createTestFileFromBuffer(FILE_SIZE_BYTES, filePath);
  if (options.bucket!.instancePreconditionOpts) {
    options.bucket!.instancePreconditionOpts.ifGenerationMatch = 0;
    delete options.bucket!.instancePreconditionOpts.ifMetagenerationMatch;
  }
  await options.bucket!.upload(filePath, {
    resumable: true,
    chunkSize: CHUNK_SIZE_BYTES,
    metadata: {contentLength: FILE_SIZE_BYTES},
  });
  deleteTestFile(filePath);
}

export async function bucketUploadResumable(options: ConformanceTestOptions) {
  const filePath = path.join(__dirname, `test-data/tmp-${uuid.v4()}.txt`);
  createTestFileFromBuffer(FILE_SIZE_BYTES, filePath);
  if (options.preconditionRequired) {
    await options.bucket!.upload(filePath, {
      resumable: true,
      chunkSize: CHUNK_SIZE_BYTES,
      metadata: {contentLength: FILE_SIZE_BYTES},
      preconditionOpts: {ifGenerationMatch: 0},
    });
  } else {
    await options.bucket!.upload(filePath, {
      resumable: true,
      chunkSize: CHUNK_SIZE_BYTES,
      metadata: {contentLength: FILE_SIZE_BYTES},
    });
  }
  deleteTestFile(filePath);
}

export async function bucketUploadMultipartInstancePrecondition(
  options: ConformanceTestOptions
) {
  if (options.bucket!.instancePreconditionOpts) {
    delete options.bucket!.instancePreconditionOpts.ifMetagenerationMatch;
    options.bucket!.instancePreconditionOpts.ifGenerationMatch = 0;
  }
  await options.bucket!.upload(
    path.join(
      __dirname,
      '../../conformance-test/test-data/retryStrategyTestData.json'
    ),
    {resumable: false}
  );
}

export async function bucketUploadMultipart(options: ConformanceTestOptions) {
  if (options.bucket!.instancePreconditionOpts) {
    delete options.bucket!.instancePreconditionOpts.ifMetagenerationMatch;
  }

  if (options.preconditionRequired) {
    await options.bucket!.upload(
      path.join(
        __dirname,
        '../../conformance-test/test-data/retryStrategyTestData.json'
      ),
      {resumable: false, preconditionOpts: {ifGenerationMatch: 0}}
    );
  } else {
    await options.bucket!.upload(
      path.join(
        __dirname,
        '../../conformance-test/test-data/retryStrategyTestData.json'
      ),
      {resumable: false}
    );
  }
}

/////////////////////////////////////////////////
//////////////////// FILE /////////////////////
/////////////////////////////////////////////////

export async function copy(options: ConformanceTestOptions) {
  const newFile = new File(options.bucket!, 'a-different-file.png');
  await newFile.save('a-different-file.png');

  if (options.preconditionRequired) {
    await options.file!.copy('a-different-file.png', {
      preconditionOpts: {ifGenerationMatch: newFile.metadata.generation},
    });
  } else {
    await options.file!.copy('a-different-file.png');
  }
}

export async function createReadStream(options: ConformanceTestOptions) {
  return new Promise((resolve, reject) => {
    options
      .file!.createReadStream()
      .on('data', () => {})
      .on('end', () => resolve(undefined))
      .on('error', (err: ApiError) => reject(err));
  });
}

export async function createResumableUploadInstancePrecondition(
  options: ConformanceTestOptions
) {
  await options.file!.createResumableUpload();
}

export async function createResumableUpload(options: ConformanceTestOptions) {
  if (options.preconditionRequired) {
    await options.file!.createResumableUpload({
      preconditionOpts: {ifGenerationMatch: 0},
    });
  } else {
    await options.file!.createResumableUpload();
  }
}

export async function fileDeleteInstancePrecondition(
  options: ConformanceTestOptions
) {
  await options.file!.delete();
}

export async function fileDelete(options: ConformanceTestOptions) {
  if (options.preconditionRequired) {
    await options.file!.delete({
      ifGenerationMatch: options.file!.metadata.generation,
    });
  } else {
    await options.file!.delete();
  }
}

export async function download(options: ConformanceTestOptions) {
  await options.file!.download();
}

export async function exists(options: ConformanceTestOptions) {
  await options.file!.exists();
}

export async function get(options: ConformanceTestOptions) {
  await options.file!.get();
}

export async function getExpirationDate(options: ConformanceTestOptions) {
  await options.file!.getExpirationDate();
}

export async function getMetadata(options: ConformanceTestOptions) {
  await options.file!.getMetadata();
}

export async function isPublic(options: ConformanceTestOptions) {
  await options.file!.isPublic();
}

export async function fileMakePrivateInstancePrecondition(
  options: ConformanceTestOptions
) {
  await options.file!.makePrivate();
}

export async function fileMakePrivate(options: ConformanceTestOptions) {
  if (options.preconditionRequired) {
    await options.file!.makePrivate({
      preconditionOpts: {
        ifGenerationMatch: options.file!.metadata.generation,
      },
    });
  } else {
    await options.file!.makePrivate();
  }
}

export async function fileMakePublic(options: ConformanceTestOptions) {
  await options.file!.makePublic();
}

export async function move(options: ConformanceTestOptions) {
  if (options.preconditionRequired) {
    await options.file!.move('new-file', {
      preconditionOpts: {ifGenerationMatch: 0},
    });
  } else {
    await options.file!.move('new-file');
  }
}

export async function rename(options: ConformanceTestOptions) {
  if (options.preconditionRequired) {
    await options.file!.rename('new-name', {
      preconditionOpts: {ifGenerationMatch: 0},
    });
  } else {
    await options.file!.rename('new-name');
  }
}

export async function rotateEncryptionKey(options: ConformanceTestOptions) {
  const crypto = require('crypto');
  const buffer = crypto.randomBytes(32);
  const newKey = buffer.toString('base64');
  if (options.preconditionRequired) {
    await options.file!.rotateEncryptionKey({
      encryptionKey: Buffer.from(newKey, 'base64'),
      preconditionOpts: {ifGenerationMatch: options.file!.metadata.generation},
    });
  } else {
    await options.file!.rotateEncryptionKey({
      encryptionKey: Buffer.from(newKey, 'base64'),
    });
  }
}

export async function saveResumableInstancePrecondition(
  options: ConformanceTestOptions
) {
  const buf = createTestBuffer(FILE_SIZE_BYTES);
  await options.file!.save(buf, {
    resumable: true,
    chunkSize: CHUNK_SIZE_BYTES,
    metadata: {contentLength: FILE_SIZE_BYTES},
  });
}

export async function saveResumable(options: ConformanceTestOptions) {
  const buf = createTestBuffer(FILE_SIZE_BYTES);
  if (options.preconditionRequired) {
    await options.file!.save(buf, {
      resumable: true,
      chunkSize: CHUNK_SIZE_BYTES,
      metadata: {contentLength: FILE_SIZE_BYTES},
      preconditionOpts: {
        ifGenerationMatch: options.file!.metadata.generation,
        ifMetagenerationMatch: options.file!.metadata.metageneration,
      },
    });
  } else {
    await options.file!.save(buf, {
      resumable: true,
      chunkSize: CHUNK_SIZE_BYTES,
      metadata: {contentLength: FILE_SIZE_BYTES},
    });
  }
}

export async function saveMultipartInstancePrecondition(
  options: ConformanceTestOptions
) {
  await options.file!.save('testdata', {resumable: false});
}

export async function saveMultipart(options: ConformanceTestOptions) {
  if (options.preconditionRequired) {
    await options.file!.save('testdata', {
      resumable: false,
      preconditionOpts: {
        ifGenerationMatch: options.file!.metadata.generation,
      },
    });
  } else {
    await options.file!.save('testdata', {
      resumable: false,
    });
  }
}

export async function setMetadataInstancePrecondition(
  options: ConformanceTestOptions
) {
  const metadata = {
    contentType: 'application/x-font-ttf',
    metadata: {
      my: 'custom',
      properties: 'go here',
    },
  };
  await options.file!.setMetadata(metadata);
}

export async function setMetadata(options: ConformanceTestOptions) {
  const metadata = {
    contentType: 'application/x-font-ttf',
    metadata: {
      my: 'custom',
      properties: 'go here',
    },
  };
  if (options.preconditionRequired) {
    await options.file!.setMetadata(metadata, {
      ifGenerationMatch: options.file!.metadata.generation,
    });
  } else {
    await options.file!.setMetadata(metadata);
  }
}

export async function setStorageClass(options: ConformanceTestOptions) {
  if (options.preconditionRequired) {
    await options.file!.setStorageClass('nearline', {
      preconditionOpts: {
        ifGenerationMatch: options.file!.metadata.generation,
      },
    });
  } else {
    await options.file!.setStorageClass('nearline');
  }
}

// /////////////////////////////////////////////////
// /////////////////// HMAC KEY ////////////////////
// /////////////////////////////////////////////////

export async function deleteHMAC(options: ConformanceTestOptions) {
  const metadata = {
    state: 'INACTIVE',
  };
  await options.hmacKey!.setMetadata(metadata);
  await options.hmacKey!.delete();
}

export async function getHMAC(options: ConformanceTestOptions) {
  await options.hmacKey!.get();
}

export async function getMetadataHMAC(options: ConformanceTestOptions) {
  await options.hmacKey!.getMetadata();
}

export async function setMetadataHMAC(options: ConformanceTestOptions) {
  const metadata = {
    state: 'INACTIVE',
  };
  await options.hmacKey!.setMetadata(metadata);
}

/////////////////////////////////////////////////
////////////////////// IAM //////////////////////
/////////////////////////////////////////////////

export async function iamGetPolicy(options: ConformanceTestOptions) {
  await options.bucket!.iam.getPolicy({requestedPolicyVersion: 1});
}

export async function iamSetPolicy(options: ConformanceTestOptions) {
  const testPolicy: Policy = {
    bindings: [
      {
        role: 'roles/storage.admin',
        members: ['serviceAccount:myotherproject@appspot.gserviceaccount.com'],
      },
    ],
  };
  if (options.preconditionRequired) {
    const currentPolicy = await options.bucket!.iam.getPolicy();
    testPolicy.etag = currentPolicy[0].etag;
  }
  await options.bucket!.iam.setPolicy(testPolicy);
}

export async function iamTestPermissions(options: ConformanceTestOptions) {
  const permissionToTest = 'storage.buckets.delete';
  await options.bucket!.iam.testPermissions(permissionToTest);
}

/////////////////////////////////////////////////
///////////////// NOTIFICATION //////////////////
/////////////////////////////////////////////////

export async function notificationDelete(options: ConformanceTestOptions) {
  await options.notification!.delete();
}

export async function notificationCreate(options: ConformanceTestOptions) {
  await options.notification!.create();
}

export async function notificationExists(options: ConformanceTestOptions) {
  await options.notification!.exists();
}

export async function notificationGet(options: ConformanceTestOptions) {
  await options.notification!.get();
}

export async function notificationGetMetadata(options: ConformanceTestOptions) {
  await options.notification!.getMetadata();
}

/////////////////////////////////////////////////
/////////////////// STORAGE /////////////////////
/////////////////////////////////////////////////

export async function createBucket(options: ConformanceTestOptions) {
  const bucket = options.storage!.bucket('test-creating-bucket');
  const [exists] = await bucket.exists();
  if (exists) {
    bucket.delete();
  }
  await options.storage!.createBucket('test-creating-bucket');
}

export async function createHMACKey(options: ConformanceTestOptions) {
  const serviceAccountEmail = 'my-service-account@appspot.gserviceaccount.com';
  await options.storage!.createHmacKey(serviceAccountEmail);
}

export async function getBuckets(options: ConformanceTestOptions) {
  await options.storage!.getBuckets();
}

export async function getBucketsStream(options: ConformanceTestOptions) {
  return new Promise((resolve, reject) => {
    options
      .storage!.getBucketsStream()
      .on('data', () => {})
      .on('end', () => resolve(undefined))
      .on('error', err => reject(err));
  });
}

export function getHMACKeyStream(options: ConformanceTestOptions) {
  return new Promise((resolve, reject) => {
    options
      .storage!.getHmacKeysStream()
      .on('data', () => {})
      .on('end', () => resolve(undefined))
      .on('error', err => reject(err));
  });
}

export async function getServiceAccount(options: ConformanceTestOptions) {
  await options.storage!.getServiceAccount();
}
