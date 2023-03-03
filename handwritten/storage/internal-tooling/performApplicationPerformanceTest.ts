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

import yargs from 'yargs';
import {promises as fsp, rmSync} from 'fs';
import {
  Bucket,
  DownloadOptions,
  DownloadResponse,
  UploadOptions,
  UploadResponse,
} from '../src';
import {performance} from 'perf_hooks';
// eslint-disable-next-line node/no-unsupported-features/node-builtins
import {parentPort} from 'worker_threads';
import {
  BLOCK_SIZE_IN_BYTES,
  DEFAULT_PROJECT_ID,
  DEFAULT_NUMBER_OF_OBJECTS,
  DEFAULT_SMALL_FILE_SIZE_BYTES,
  DEFAULT_LARGE_FILE_SIZE_BYTES,
  NODE_DEFAULT_HIGHWATER_MARK_BYTES,
  generateRandomDirectoryStructure,
  getValidationType,
  performanceTestSetup,
  TestResult,
} from './performanceUtils';
import {TRANSFER_MANAGER_TEST_TYPES} from './performanceTest';

const TEST_NAME_STRING = 'nodejs-perf-metrics-application';
const DEFAULT_BUCKET_NAME = 'nodejs-perf-metrics-shaffeeullah';

let bucket: Bucket;

const checkType = getValidationType();

const argv = yargs(process.argv.slice(2))
  .options({
    bucket: {type: 'string', default: DEFAULT_BUCKET_NAME},
    small: {type: 'number', default: DEFAULT_SMALL_FILE_SIZE_BYTES},
    large: {type: 'number', default: DEFAULT_LARGE_FILE_SIZE_BYTES},
    projectid: {type: 'string', default: DEFAULT_PROJECT_ID},
    numobjects: {type: 'number', default: DEFAULT_NUMBER_OF_OBJECTS},
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

  ({bucket} = await performanceTestSetup(argv.projectid, argv.bucket));

  switch (argv.testtype) {
    case TRANSFER_MANAGER_TEST_TYPES.APPLICATION_UPLOAD_MULTIPLE_OBJECTS:
      result = await performWriteTest();
      break;
    case TRANSFER_MANAGER_TEST_TYPES.APPLICATION_DOWNLOAD_MULTIPLE_OBJECTS:
      result = await performReadTest();
      break;
    // case TRANSFER_MANAGER_TEST_TYPES.APPLICATION_LARGE_FILE_DOWNLOAD:
    //   result = await performLargeReadTest();
    //   break;
    default:
      break;
  }
  parentPort?.postMessage(result);
}

async function uploadInParallel(
  bucket: Bucket,
  paths: string[],
  options: UploadOptions
) {
  const promises: Promise<UploadResponse>[] = [];
  for (const index in paths) {
    const path = paths[index];
    const stat = await fsp.lstat(path);
    if (stat.isDirectory()) {
      continue;
    }
    options.destination = path;
    promises.push(bucket.upload(path, options));
  }
  await Promise.all(promises).catch(console.error);
}

async function downloadInParallel(bucket: Bucket, options: DownloadOptions) {
  const promises: Promise<DownloadResponse>[] = [];
  const [files] = await bucket.getFiles();
  files.forEach(file => {
    promises.push(file.download(options));
  });
  await Promise.all(promises).catch(console.error);
}

/**
 * Performs an iteration of the Write multiple objects test.
 *
 * @returns {Promise<TestResult>} Promise that resolves to a test result of an iteration.
 */
async function performWriteTest(): Promise<TestResult> {
  await bucket.deleteFiles(); //start clean

  const creationInfo = generateRandomDirectoryStructure(
    argv.numobjects,
    TEST_NAME_STRING,
    argv.small,
    argv.large
  );

  const start = performance.now();
  await uploadInParallel(bucket, creationInfo.paths, {validation: checkType});
  const end = performance.now();

  await bucket.deleteFiles(); //cleanup files
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
 * Performs an iteration of the read multiple objects test.
 *
 * @returns {Promise<TestResult>} Promise that resolves to an array of test results for the iteration.
 */
async function performReadTest(): Promise<TestResult> {
  await bucket.deleteFiles(); // start clean
  const creationInfo = generateRandomDirectoryStructure(
    argv.numobjects,
    TEST_NAME_STRING,
    argv.small,
    argv.large
  );
  await uploadInParallel(bucket, creationInfo.paths, {validation: checkType});

  const start = performance.now();
  await downloadInParallel(bucket, {validation: checkType});
  const end = performance.now();

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

  rmSync(TEST_NAME_STRING, {recursive: true, force: true});
  await bucket.deleteFiles(); //cleanup
  return result;
}

main();
