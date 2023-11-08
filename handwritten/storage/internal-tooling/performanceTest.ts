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
import {appendFile} from 'fs/promises';
import {Worker} from 'worker_threads';
import {
  convertToCloudMonitoringFormat,
  TestResult,
  log,
  performanceTestCommand,
  PERFORMANCE_TEST_TYPES,
} from './performanceUtils.js';
import {getDirName} from '../src/util.js';

const argv = yargs(process.argv.slice(2))
  .command(performanceTestCommand)
  .parseSync();

let iterationsRemaining: number = argv.samples as number;

/**
 * Main entry point for performing a Write 1 Read 3 performance measurement test.
 * This function will create the number of threads supplied in the numthreads argument or
 * default to 1 if no argument is provided. The test will be run for the number of iterations
 * specified by the iterations parameter or 100 if not specified.
 */
function main() {
  let numThreads: number = argv.workers as number;
  if (numThreads > iterationsRemaining) {
    log(
      `${numThreads} is greater than number of iterations (${iterationsRemaining}). Using ${iterationsRemaining} threads instead.`,
      argv.debug as boolean
    );
    numThreads = iterationsRemaining;
  }
  if (argv.test_type !== PERFORMANCE_TEST_TYPES.WRITE_ONE_READ_THREE) {
    numThreads = 1;
  }
  for (let i = 0; i < numThreads; i++) {
    createWorker();
  }
}

/**
 * Creates a new worker thread and performs a test iteration in that worker.
 * When the worker passes back the results, they are appended to the results file.
 */
function createWorker() {
  const dirName = getDirName().replace('/src', '/internal-tooling');
  iterationsRemaining--;
  log(
    `Starting new iteration. Current iterations remaining: ${iterationsRemaining}`,
    argv.debug as boolean
  );
  let testPath = '';
  if (
    argv.test_type === PERFORMANCE_TEST_TYPES.WRITE_ONE_READ_THREE ||
    argv.test_type === PERFORMANCE_TEST_TYPES.RANGE_READ
  ) {
    testPath = `${dirName}/performPerformanceTest.js`;
  } else if (
    argv.test_type ===
      PERFORMANCE_TEST_TYPES.TRANSFER_MANAGER_UPLOAD_MANY_FILES ||
    argv.test_type ===
      PERFORMANCE_TEST_TYPES.TRANSFER_MANAGER_CHUNKED_FILE_DOWNLOAD ||
    argv.test_type ===
      PERFORMANCE_TEST_TYPES.TRANSFER_MANAGER_DOWNLOAD_MANY_FILES
  ) {
    testPath = `${dirName}/performTransferManagerTest.js`;
  } else if (
    argv.test_type ===
      PERFORMANCE_TEST_TYPES.APPLICATION_UPLOAD_MULTIPLE_OBJECTS ||
    argv.test_type === PERFORMANCE_TEST_TYPES.APPLICATION_LARGE_FILE_DOWNLOAD ||
    argv.test_type ===
      PERFORMANCE_TEST_TYPES.APPLICATION_DOWNLOAD_MULTIPLE_OBJECTS
  ) {
    testPath = `${dirName}/performApplicationPerformanceTest.js`;
  }

  const w = new Worker(testPath, {
    argv: process.argv.slice(2),
  });

  w.on('message', data => {
    log('Successfully completed iteration.', argv.debug as boolean);
    recordResult(data);
    if (iterationsRemaining > 0) {
      createWorker();
    }
  });
  w.on('error', e => {
    log(e, true, true);
    // BBMC will not report errors unless the process is terminated with a non zero code.
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  });
}

/**
 * Records the test result to the appropriate place based on specified command line arguments.
 *
 * @param {TestResult[]} results result of a test iteration.
 */
async function recordResult(results: TestResult[] | TestResult) {
  const resultsToAppend: TestResult[] = Array.isArray(results)
    ? results
    : [results];

  for await (const outputString of convertToCloudMonitoringFormat(
    resultsToAppend
  )) {
    argv.file_name
      ? await appendFile(argv.file_name as string, `${outputString}\n`)
      : log(outputString, true);
  }
}

main();
