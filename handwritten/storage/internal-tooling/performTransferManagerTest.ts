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

const yargs = require('yargs');
// eslint-disable-next-line node/no-unsupported-features/node-builtins
import {parentPort} from 'worker_threads';
import {Bucket, TransferManager} from '../src';
import {
  cleanupFile,
  generateRandomDirectoryStructure,
  generateRandomFile,
  generateRandomFileName,
  getValidationType,
  NODE_DEFAULT_HIGHWATER_MARK_BYTES,
  performanceTestSetup,
  TestResult,
  performanceTestCommand,
  getLowHighFileSize,
  PERFORMANCE_TEST_TYPES,
} from './performanceUtils';
import {performance} from 'perf_hooks';
import {rmSync} from 'fs';
import * as path from 'path';

const TEST_NAME_STRING = 'tm-perf-metrics';
const DIRECTORY_PROBABILITY = 0.1;

let bucket: Bucket;
let transferManager: TransferManager;
const checkType = getValidationType();

const argv = yargs(process.argv.slice(2))
  .command(performanceTestCommand)
  .parseSync();

/**
 * Main entry point. This function performs a test iteration and posts the message back
 * to the parent thread.
 */
async function main() {
  let result: TestResult | undefined = undefined;

  ({bucket, transferManager} = await performanceTestSetup(
    argv.project!,
    argv.bucket!
  ));

  switch (argv.test_type) {
    case PERFORMANCE_TEST_TYPES.TRANSFER_MANAGER_UPLOAD_MANY_FILES:
      result = await performUploadManyFilesTest();
      break;
    case PERFORMANCE_TEST_TYPES.TRANSFER_MANAGER_DOWNLOAD_MANY_FILES:
      result = await performDownloadManyFilesTest();
      break;
    case PERFORMANCE_TEST_TYPES.TRANSFER_MANAGER_CHUNKED_FILE_DOWNLOAD:
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
  await bucket.deleteFiles({force: true});
}

/**
 * Performs a test where multiple objects are uploaded in parallel to a bucket.
 *
 * @returns {Promise<TestResult>} A promise that resolves containing information about the test results.
 */
async function performUploadManyFilesTest(): Promise<TestResult> {
  const fileSizeRange = getLowHighFileSize(argv.object_size);
  const creationInfo = generateRandomDirectoryStructure(
    argv.num_objects,
    TEST_NAME_STRING,
    fileSizeRange.low,
    fileSizeRange.high,
    DIRECTORY_PROBABILITY
  );

  const start = performance.now();
  await transferManager.uploadManyFiles(creationInfo.paths, {
    concurrencyLimit: argv.workers,
    passthroughOptions: {
      validation: checkType,
    },
  });
  const end = performance.now();

  rmSync(TEST_NAME_STRING, {recursive: true, force: true});

  const result: TestResult = {
    op: 'WRITE',
    objectSize: creationInfo.totalSizeInBytes,
    appBufferSize: NODE_DEFAULT_HIGHWATER_MARK_BYTES,
    crc32cEnabled: checkType === 'crc32c',
    md5Enabled: checkType === 'md5',
    api: 'JSON',
    elapsedTimeUs: Math.round((end - start) * 1000),
    cpuTimeUs: -1,
    status: 'OK',
    chunkSize: creationInfo.totalSizeInBytes,
    workers: argv.workers,
    library: 'nodejs',
    transferSize: creationInfo.totalSizeInBytes,
    transferOffset: 0,
    bucketName: bucket.name,
  };

  return result;
}

/**
 * Performs a test where multiple objects are downloaded in parallel from a bucket.
 *
 * @returns {Promise<TestResult>} A promise that resolves containing information about the test results.
 */
async function performDownloadManyFilesTest(): Promise<TestResult> {
  const fileSizeRange = getLowHighFileSize(argv.object_size);
  const creationInfo = generateRandomDirectoryStructure(
    argv.num_objects,
    TEST_NAME_STRING,
    fileSizeRange.low,
    fileSizeRange.high,
    DIRECTORY_PROBABILITY
  );

  await transferManager.uploadManyFiles(creationInfo.paths, {
    concurrencyLimit: argv.workers,
    passthroughOptions: {
      validation: checkType,
    },
  });
  const start = performance.now();
  await transferManager.downloadManyFiles(TEST_NAME_STRING, {
    prefix: path.join(__dirname, '..', '..'),
    concurrencyLimit: argv.workers,
    passthroughOptions: {
      validation: checkType,
    },
  });
  const end = performance.now();

  rmSync(TEST_NAME_STRING, {recursive: true, force: true});

  const result: TestResult = {
    op: 'READ[0]',
    objectSize: creationInfo.totalSizeInBytes,
    appBufferSize: NODE_DEFAULT_HIGHWATER_MARK_BYTES,
    crc32cEnabled: checkType === 'crc32c',
    md5Enabled: checkType === 'md5',
    api: 'JSON',
    elapsedTimeUs: Math.round((end - start) * 1000),
    cpuTimeUs: -1,
    status: 'OK',
    chunkSize: creationInfo.totalSizeInBytes,
    workers: argv.workers,
    library: 'nodejs',
    transferSize: creationInfo.totalSizeInBytes,
    transferOffset: 0,
    bucketName: bucket.name,
  };
  return result;
}

/**
 * Performs a test where a large file is downloaded as chunks in parallel.
 *
 * @returns {Promise<TestResult>} A promise that resolves containing information about the test results.
 */
async function performDownloadFileInChunksTest(): Promise<TestResult> {
  const fileSizeRange = getLowHighFileSize(argv.object_size);
  const fileName = generateRandomFileName(TEST_NAME_STRING);
  const sizeInBytes = generateRandomFile(
    fileName,
    fileSizeRange.low,
    fileSizeRange.high,
    __dirname
  );
  const file = bucket.file(`${fileName}`);

  await bucket.upload(`${__dirname}/${fileName}`);
  cleanupFile(fileName);
  const start = performance.now();
  await transferManager.downloadFileInChunks(file, {
    concurrencyLimit: argv.workers,
    chunkSizeBytes: argv.range_read_size,
    destination: path.join(__dirname, fileName),
    validation: checkType === 'crc32c' ? checkType : false,
  });
  const end = performance.now();

  cleanupFile(fileName);

  const result: TestResult = {
    op: 'READ[0]',
    objectSize: sizeInBytes,
    appBufferSize: NODE_DEFAULT_HIGHWATER_MARK_BYTES,
    crc32cEnabled: checkType === 'crc32c',
    md5Enabled: false,
    api: 'JSON',
    elapsedTimeUs: Math.round((end - start) * 1000),
    cpuTimeUs: -1,
    status: 'OK',
    chunkSize: argv.range_read_size,
    workers: argv.workers,
    library: 'nodejs',
    transferSize: sizeInBytes,
    transferOffset: 0,
    bucketName: bucket.name,
  };

  return result;
}

main();
