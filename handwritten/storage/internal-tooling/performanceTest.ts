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
import {appendFile} from 'fs/promises';
// eslint-disable-next-line node/no-unsupported-features/node-builtins
import {Worker} from 'worker_threads';
import {
  convertToCSVFormat,
  convertToCloudMonitoringFormat,
  TestResult,
  log,
  performanceTestCommand,
  OUTPUT_FORMATS,
  PERFORMANCE_TEST_TYPES,
} from './performanceUtils';
import {existsSync} from 'fs';
import {writeFile} from 'fs/promises';

const CSV_HEADERS =
  'Op,ObjectSize,AppBufferSize,LibBufferSize,Crc32cEnabled,MD5Enabled,ApiName,ElapsedTimeUs,CpuTimeUs,Status\n';

const argv = yargs(process.argv.slice(2))
  .command(performanceTestCommand)
  .parseSync();

let iterationsRemaining = argv.samples;

/**
 * Main entry point for performing a Write 1 Read 3 performance measurement test.
 * This function will create the number of threads supplied in the numthreads argument or
 * default to 1 if no argument is provided. The test will be run for the number of iterations
 * specified by the iterations parameter or 100 if not specified.
 */
function main() {
  let numThreads = argv.workers;
  if (numThreads > iterationsRemaining) {
    log(
      `${numThreads} is greater than number of iterations (${iterationsRemaining}). Using ${iterationsRemaining} threads instead.`,
      argv.debug
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
  iterationsRemaining--;
  log(
    `Starting new iteration. Current iterations remaining: ${iterationsRemaining}`,
    argv.debug
  );
  let testPath = '';
  if (
    argv.test_type === PERFORMANCE_TEST_TYPES.WRITE_ONE_READ_THREE ||
    argv.test_type === PERFORMANCE_TEST_TYPES.RANGE_READ
  ) {
    testPath = `${__dirname}/performPerformanceTest.js`;
  } else if (
    argv.test_type ===
      PERFORMANCE_TEST_TYPES.TRANSFER_MANAGER_UPLOAD_MANY_FILES ||
    argv.test_type ===
      PERFORMANCE_TEST_TYPES.TRANSFER_MANAGER_CHUNKED_FILE_DOWNLOAD ||
    argv.test_type ===
      PERFORMANCE_TEST_TYPES.TRANSFER_MANAGER_DOWNLOAD_MANY_FILES
  ) {
    testPath = `${__dirname}/performTransferManagerTest.js`;
  } else if (
    argv.test_type ===
      PERFORMANCE_TEST_TYPES.APPLICATION_UPLOAD_MULTIPLE_OBJECTS ||
    argv.test_type === PERFORMANCE_TEST_TYPES.APPLICATION_LARGE_FILE_DOWNLOAD ||
    argv.test_type ===
      PERFORMANCE_TEST_TYPES.APPLICATION_DOWNLOAD_MULTIPLE_OBJECTS
  ) {
    testPath = `${__dirname}/performApplicationPerformanceTest.js`;
  }

  const w = new Worker(testPath, {
    argv: process.argv.slice(2),
  });

  w.on('message', data => {
    log('Successfully completed iteration.', argv.debug);
    recordResult(data);
    if (iterationsRemaining > 0) {
      createWorker();
    }
  });
  w.on('error', e => {
    log(e, true, true);
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
  if (
    argv.file_name &&
    argv.output_type === OUTPUT_FORMATS.CSV &&
    !existsSync(argv.file_name)
  ) {
    await writeFile(argv.file_name, CSV_HEADERS);
  }

  if (argv.output_type === OUTPUT_FORMATS.CSV) {
    argv.file_name
      ? await appendFile(
          argv.file_name,
          `${convertToCSVFormat(resultsToAppend)}\n`
        )
      : log(convertToCSVFormat(resultsToAppend), true);
  } else if (argv.output_type === OUTPUT_FORMATS.CLOUD_MONITORING) {
    for await (const outputString of convertToCloudMonitoringFormat(
      resultsToAppend,
      argv.bucket!
    )) {
      argv.file_name
        ? await appendFile(argv.file_name, `${outputString}\n`)
        : log(outputString, true);
    }
  }
}

main();
