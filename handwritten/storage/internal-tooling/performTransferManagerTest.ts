/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
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

// eslint-disable-next-line node/no-unsupported-features/node-builtins
import {parentPort} from 'worker_threads';
import yargs from 'yargs';
import {Bucket, TransferManager} from '../src';
import {TRANSFER_MANAGER_TEST_TYPES} from './performanceTest';
import {
  BLOCK_SIZE_IN_BYTES,
  cleanupFile,
  DEFAULT_LARGE_FILE_SIZE_BYTES,
  DEFAULT_PROJECT_ID,
  DEFAULT_SMALL_FILE_SIZE_BYTES,
  generateRandomDirectoryStructure,
  generateRandomFile,
  generateRandomFileName,
  getValidationType,
  NODE_DEFAULT_HIGHWATER_MARK_BYTES,
  DEFAULT_NUMBER_OF_OBJECTS,
  performanceTestSetup,
  TestResult,
} from './performanceUtils';
import {performance} from 'perf_hooks';
import {rmSync} from 'fs';
import * as path from 'path';

const TEST_NAME_STRING = 'tm-perf-metrics';
const DEFAULT_BUCKET_NAME = 'nodejs-transfer-manager-perf-metrics';
const DEFAULT_NUMBER_OF_PROMISES = 2;
const DEFAULT_CHUNK_SIZE_BYTES = 16 * 1024 * 1024;
const DIRECTORY_PROBABILITY = 0.1;

let bucket: Bucket;
let transferManager: TransferManager;
const checkType = getValidationType();

const argv = yargs(process.argv.slice(2))
  .options({
    bucket: {type: 'string', default: DEFAULT_BUCKET_NAME},
    small: {type: 'number', default: DEFAULT_SMALL_FILE_SIZE_BYTES},
    large: {type: 'number', default: DEFAULT_LARGE_FILE_SIZE_BYTES},
    numpromises: {type: 'number', default: DEFAULT_NUMBER_OF_PROMISES},
    numobjects: {type: 'number', default: DEFAULT_NUMBER_OF_OBJECTS},
    chunksize: {type: 'number', default: DEFAULT_CHUNK_SIZE_BYTES},
    projectid: {type: 'string', default: DEFAULT_PROJECT_ID},
    testtype: {
      type: 'string',
      choices: [
        TRANSFER_MANAGER_TEST_TYPES.TRANSFER_MANAGER_UPLOAD_MANY_FILES,
        TRANSFER_MANAGER_TEST_TYPES.TRANSFER_MANAGER_DOWNLOAD_MANY_FILES,
        TRANSFER_MANAGER_TEST_TYPES.TRANSFER_MANAGER_CHUNKED_FILE_DOWNLOAD,
      ],
    },
  })
  .parseSync();

/**
 * Main entry point. This function performs a test iteration and posts the message back
 * to the parent thread.
 */
async function main() {
  let result: TestResult = {
    op: '',
    objectSize: 0,
    appBufferSize: 0,
    libBufferSize: 0,
    crc32Enabled: false,
    md5Enabled: false,
    apiName: 'JSON',
    elapsedTimeUs: 0,
    cpuTimeUs: 0,
    status: '[OK]',
    chunkSize: 0,
  };

  ({bucket, transferManager} = await performanceTestSetup(
    argv.projectid,
    argv.bucket
  ));

  switch (argv.testtype) {
    case TRANSFER_MANAGER_TEST_TYPES.TRANSFER_MANAGER_UPLOAD_MANY_FILES:
      result = await performUploadManyFilesTest();
      break;
    case TRANSFER_MANAGER_TEST_TYPES.TRANSFER_MANAGER_DOWNLOAD_MANY_FILES:
      result = await performDownloadManyFilesTest();
      break;
    case TRANSFER_MANAGER_TEST_TYPES.TRANSFER_MANAGER_CHUNKED_FILE_DOWNLOAD:
      result = await performDownloadFileInChunksTest();
      break;
    default:
      break;
  }
  parentPort?.postMessage(result);
  await performTestCleanup();
}

/**
 * Cleans up after a test is complete by removing all files from the bucket
 */
async function performTestCleanup() {
  await bucket.deleteFiles();
}

/**
 * Performs a test where multiple objects are uploaded in parallel to a bucket.
 *
 * @returns {Promise<TestResult>} A promise that resolves containing information about the test results.
 */
async function performUploadManyFilesTest(): Promise<TestResult> {
  const creationInfo = generateRandomDirectoryStructure(
    argv.numobjects,
    TEST_NAME_STRING,
    argv.small,
    argv.large,
    DIRECTORY_PROBABILITY
  );

  const start = performance.now();
  await transferManager.uploadManyFiles(creationInfo.paths, {
    concurrencyLimit: argv.numpromises,
    passthroughOptions: {
      validation: checkType,
    },
  });
  const end = performance.now();

  rmSync(TEST_NAME_STRING, {recursive: true, force: true});

  const result: TestResult = {
    op: 'WRITE',
    objectSize: creationInfo.totalSizeInBytes,
    appBufferSize: BLOCK_SIZE_IN_BYTES,
    libBufferSize: NODE_DEFAULT_HIGHWATER_MARK_BYTES,
    crc32Enabled: checkType === 'crc32c',
    md5Enabled: checkType === 'md5',
    apiName: 'JSON',
    elapsedTimeUs: Math.round((end - start) * 1000),
    cpuTimeUs: -1,
    status: '[OK]',
    chunkSize: creationInfo.totalSizeInBytes,
  };

  return result;
}

/**
 * Performs a test where multiple objects are downloaded in parallel from a bucket.
 *
 * @returns {Promise<TestResult>} A promise that resolves containing information about the test results.
 */
async function performDownloadManyFilesTest(): Promise<TestResult> {
  const creationInfo = generateRandomDirectoryStructure(
    argv.numobjects,
    TEST_NAME_STRING,
    argv.small,
    argv.large,
    DIRECTORY_PROBABILITY
  );

  await transferManager.uploadManyFiles(creationInfo.paths, {
    concurrencyLimit: argv.numpromises,
    passthroughOptions: {
      validation: checkType,
    },
  });
  const start = performance.now();
  await transferManager.downloadManyFiles(TEST_NAME_STRING, {
    prefix: path.join(__dirname, '..', '..'),
    concurrencyLimit: argv.numpromises,
    passthroughOptions: {
      validation: checkType,
    },
  });
  const end = performance.now();

  rmSync(TEST_NAME_STRING, {recursive: true, force: true});

  const result: TestResult = {
    op: 'READ',
    objectSize: creationInfo.totalSizeInBytes,
    appBufferSize: BLOCK_SIZE_IN_BYTES,
    libBufferSize: NODE_DEFAULT_HIGHWATER_MARK_BYTES,
    crc32Enabled: checkType === 'crc32c',
    md5Enabled: checkType === 'md5',
    apiName: 'JSON',
    elapsedTimeUs: Math.round((end - start) * 1000),
    cpuTimeUs: -1,
    status: '[OK]',
    chunkSize: creationInfo.totalSizeInBytes,
  };
  return result;
}

/**
 * Performs a test where a large file is downloaded as chunks in parallel.
 *
 * @returns {Promise<TestResult>} A promise that resolves containing information about the test results.
 */
async function performDownloadFileInChunksTest(): Promise<TestResult> {
  const fileName = generateRandomFileName(TEST_NAME_STRING);
  const sizeInBytes = generateRandomFile(
    fileName,
    argv.small,
    argv.large,
    __dirname
  );
  const file = bucket.file(`${fileName}`);

  await bucket.upload(`${__dirname}/${fileName}`);
  cleanupFile(fileName);
  const start = performance.now();
  await transferManager.downloadFileInChunks(file, {
    concurrencyLimit: argv.numpromises,
    chunkSizeBytes: argv.chunksize,
    destination: path.join(__dirname, fileName),
    validation: checkType === 'crc32c' ? checkType : false,
  });
  const end = performance.now();

  cleanupFile(fileName);

  const result: TestResult = {
    op: 'READ',
    objectSize: sizeInBytes,
    appBufferSize: BLOCK_SIZE_IN_BYTES,
    libBufferSize: NODE_DEFAULT_HIGHWATER_MARK_BYTES,
    crc32Enabled: checkType === 'crc32c',
    md5Enabled: false,
    apiName: 'JSON',
    elapsedTimeUs: Math.round((end - start) * 1000),
    cpuTimeUs: -1,
    status: '[OK]',
    chunkSize: argv.chunksize,
  };

  return result;
}

main();
