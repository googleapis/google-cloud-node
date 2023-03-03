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
import {performance} from 'perf_hooks';
// eslint-disable-next-line node/no-unsupported-features/node-builtins
import {parentPort} from 'worker_threads';
import * as path from 'path';
import {
  BLOCK_SIZE_IN_BYTES,
  cleanupFile,
  DEFAULT_LARGE_FILE_SIZE_BYTES,
  DEFAULT_PROJECT_ID,
  DEFAULT_SMALL_FILE_SIZE_BYTES,
  generateRandomFile,
  generateRandomFileName,
  getValidationType,
  NODE_DEFAULT_HIGHWATER_MARK_BYTES,
  performanceTestSetup,
  TestResult,
} from './performanceUtils';
import {Bucket} from '../src';

const TEST_NAME_STRING = 'nodejs-perf-metrics';
const DEFAULT_NUMBER_OF_WRITES = 1;
const DEFAULT_NUMBER_OF_READS = 3;
const DEFAULT_BUCKET_NAME = 'nodejs-perf-metrics';

let bucket: Bucket;
const checkType = getValidationType();

const argv = yargs(process.argv.slice(2))
  .options({
    bucket: {type: 'string', default: DEFAULT_BUCKET_NAME},
    small: {type: 'number', default: DEFAULT_SMALL_FILE_SIZE_BYTES},
    large: {type: 'number', default: DEFAULT_LARGE_FILE_SIZE_BYTES},
    projectid: {type: 'string', default: DEFAULT_PROJECT_ID},
  })
  .parseSync();

/**
 * Main entry point. This function performs a test iteration and posts the message back
 * to the parent thread.
 */
async function main() {
  const results = await performWriteReadTest();
  parentPort?.postMessage(results);
}

/**
 * Performs an iteration of the Write 1 / Read 3 performance measuring test.
 *
 * @returns {Promise<TestResult[]>} Promise that resolves to an array of test results for the iteration.
 */
async function performWriteReadTest(): Promise<TestResult[]> {
  const results: TestResult[] = [];
  const fileName = generateRandomFileName(TEST_NAME_STRING);
  const sizeInBytes = generateRandomFile(fileName, argv.small, argv.large);

  ({bucket} = await performanceTestSetup(argv.projectid, argv.bucket));

  for (let j = 0; j < DEFAULT_NUMBER_OF_WRITES; j++) {
    let start = 0;
    let end = 0;

    const iterationResult: TestResult = {
      op: 'WRITE',
      objectSize: sizeInBytes,
      appBufferSize: BLOCK_SIZE_IN_BYTES,
      libBufferSize: NODE_DEFAULT_HIGHWATER_MARK_BYTES,
      crc32Enabled: checkType === 'crc32c',
      md5Enabled: checkType === 'md5',
      apiName: 'JSON',
      elapsedTimeUs: 0,
      cpuTimeUs: -1,
      status: '[OK]',
      chunkSize: sizeInBytes,
    };

    start = performance.now();
    await bucket.upload(`${__dirname}/${fileName}`, {validation: checkType});
    end = performance.now();

    iterationResult.elapsedTimeUs = Math.round((end - start) * 1000);
    results.push(iterationResult);
  }

  for (let j = 0; j < DEFAULT_NUMBER_OF_READS; j++) {
    let start = 0;
    let end = 0;
    const file = bucket.file(`${fileName}`);
    const iterationResult: TestResult = {
      op: `READ[${j}]`,
      objectSize: sizeInBytes,
      appBufferSize: BLOCK_SIZE_IN_BYTES,
      libBufferSize: NODE_DEFAULT_HIGHWATER_MARK_BYTES,
      crc32Enabled: checkType === 'crc32c',
      md5Enabled: checkType === 'md5',
      apiName: 'JSON',
      elapsedTimeUs: 0,
      cpuTimeUs: -1,
      status: '[OK]',
      chunkSize: sizeInBytes,
    };

    const destinationFileName = generateRandomFileName(TEST_NAME_STRING);
    const destination = path.join(__dirname, destinationFileName);

    start = performance.now();
    await file.download({validation: checkType, destination});
    end = performance.now();

    cleanupFile(destinationFileName);
    iterationResult.elapsedTimeUs = Math.round((end - start) * 1000);
    results.push(iterationResult);
  }

  cleanupFile(fileName);

  return results;
}

main();
