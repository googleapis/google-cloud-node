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

import {execSync} from 'child_process';
import {mkdirSync, mkdtempSync, unlinkSync} from 'fs';
import * as path from 'path';
import * as yargs from 'yargs';
import {Bucket, Storage, TransferManager} from '../src/index.js';
import {getDirName} from '../src/util.js';

export const NODE_DEFAULT_HIGHWATER_MARK_BYTES = 16384;
export const DEFAULT_DIRECTORY_PROBABILITY = 0.1;
export const DEFAULT_NUMBER_OF_OBJECTS = 1000;

export const OUTPUT_FORMATS = {
  CLOUD_MONITORING: 'cloud-monitoring',
} as const;

export const PERFORMANCE_TEST_TYPES = {
  WRITE_ONE_READ_THREE: 'w1r3',
  RANGE_READ: 'range-read',
  TRANSFER_MANAGER_UPLOAD_MANY_FILES: 'tm-upload',
  TRANSFER_MANAGER_DOWNLOAD_MANY_FILES: 'tm-download',
  TRANSFER_MANAGER_CHUNKED_FILE_DOWNLOAD: 'tm-chunked',
  APPLICATION_LARGE_FILE_DOWNLOAD: 'application-large',
  APPLICATION_UPLOAD_MULTIPLE_OBJECTS: 'application-upload',
  APPLICATION_DOWNLOAD_MULTIPLE_OBJECTS: 'application-download',
} as const;

const APIS = {
  JSON: 'json',
} as const;

const DEFAULT_SAMPLES = 8000;
const DEFAULT_WORKERS = 16;
const SSB_SIZE_THRESHOLD_BYTES = 1048576;
const DEFAULT_OBJECT_RANGE_SIZE_BYTES = '1048576..1048576';
const DEFAULT_RANGE_READ_SIZE_BYTES = 0; //0 means read the full object
const DEFAULT_MINIMUM_READ_OFFSET_BYTES = 0;
const DEFAULT_MAXIMUM_READ_OFFSET_BYTES = 0;

export interface TestResult {
  library: 'nodejs';
  op: 'WRITE' | 'READ[0]' | 'READ[1]' | 'READ[2]';
  objectSize: number;
  transferSize: number;
  transferOffset: number;
  appBufferSize: number;
  crc32cEnabled: boolean;
  md5Enabled: boolean;
  api: 'JSON' | 'XML' | 'GRPC' | 'DirectPath';
  cpuTimeUs: number;
  status: 'OK' | 'FAIL' | 'TIMEOUT';
  chunkSize: number;
  workers: number;
  bucketName: string;
  elapsedTimeUs: number;
}

export interface Arguments {
  project?: string;
  bucket?: string;
  output_type: string;
  samples: number;
  workers: number;
  api: string;
  object_size: string;
  range_read_size: number;
  minimum_read_offset: number;
  maximum_read_offset: number;
  debug: boolean;
  file_name: string | undefined;
  num_objects: number;
  test_type: string;
}

export const performanceTestCommand: yargs.CommandModule<{}, Arguments> = {
  command: 'performance-test',
  builder(yargs) {
    return yargs
      .option('project', {type: 'string', demand: true})
      .option('bucket', {type: 'string', demand: true})
      .option('output_type', {
        type: 'string',
        choices: [OUTPUT_FORMATS.CLOUD_MONITORING],
        default: OUTPUT_FORMATS.CLOUD_MONITORING,
      })
      .option('samples', {type: 'number', default: DEFAULT_SAMPLES})
      .option('workers', {type: 'number', default: DEFAULT_WORKERS})
      .option('api', {
        type: 'string',
        choices: [APIS.JSON],
        default: APIS.JSON,
      })
      .option('object_size', {
        type: 'string',
        default: DEFAULT_OBJECT_RANGE_SIZE_BYTES,
      })
      .option('range_read_size', {
        type: 'number',
        default: DEFAULT_RANGE_READ_SIZE_BYTES,
      })
      .option('minimum_read_offset', {
        type: 'number',
        default: DEFAULT_MINIMUM_READ_OFFSET_BYTES,
      })
      .option('maximum_read_offset', {
        type: 'number',
        default: DEFAULT_MAXIMUM_READ_OFFSET_BYTES,
      })
      .option('debug', {type: 'boolean', default: false})
      .option('file_name', {type: 'string'})
      .option('num_objects', {
        type: 'number',
        default: DEFAULT_NUMBER_OF_OBJECTS,
      })
      .option('test_type', {
        type: 'string',
        choices: [
          PERFORMANCE_TEST_TYPES.WRITE_ONE_READ_THREE,
          PERFORMANCE_TEST_TYPES.TRANSFER_MANAGER_UPLOAD_MANY_FILES,
          PERFORMANCE_TEST_TYPES.TRANSFER_MANAGER_DOWNLOAD_MANY_FILES,
          PERFORMANCE_TEST_TYPES.TRANSFER_MANAGER_CHUNKED_FILE_DOWNLOAD,
          PERFORMANCE_TEST_TYPES.APPLICATION_DOWNLOAD_MULTIPLE_OBJECTS,
          PERFORMANCE_TEST_TYPES.APPLICATION_LARGE_FILE_DOWNLOAD,
          PERFORMANCE_TEST_TYPES.APPLICATION_UPLOAD_MULTIPLE_OBJECTS,
        ],
        default: PERFORMANCE_TEST_TYPES.WRITE_ONE_READ_THREE,
      });
  },
  async handler() {},
};

export interface RandomDirectoryCreationInformation {
  paths: string[];
  totalSizeInBytes: number;
}

export interface PerformanceTestSetupResults {
  storage: Storage;
  bucket: Bucket;
  transferManager: TransferManager;
}

/**
 * Create a uniformly distributed random integer beween the inclusive min and max provided.
 *
 * @param {number} minInclusive lower bound (inclusive) of the range of random integer to return.
 * @param {number} maxInclusive upper bound (inclusive) of the range of random integer to return.
 * @returns {number} returns a random integer between minInclusive and maxInclusive
 */
export function randomInteger(minInclusive: number, maxInclusive: number) {
  // Utilizing Math.random will generate uniformly distributed random numbers.
  return (
    Math.floor(Math.random() * (maxInclusive - minInclusive + 1)) + minInclusive
  );
}

/**
 * Returns a boolean value with the provided probability
 *
 * @param {number} trueProbablity the probability the value will be true
 *
 * @returns {boolean} a boolean value with the probablity provided.
 */
export function weightedRandomBoolean(trueProbablity: number): boolean {
  return Math.random() <= trueProbablity ? true : false;
}

/**
 * Return a string of 6 random characters
 *
 * @returns {string} a random string value with length of 6
 */
export function randomString(): string {
  return Math.random().toString(36).slice(-6);
}

/**
 * Creates a random file name by appending a UUID to the baseName.
 *
 * @param {string} baseName the base file name. A random uuid will be appended to this value.
 *
 * @returns {string} random file name that was generated.
 */
export function generateRandomFileName(baseName: string): string {
  return `${baseName}.${randomString()}`;
}

/**
 * Creates a file with a size between the small (default 5120 bytes) and large (2.147e9 bytes) parameters.
 * The file is filled with random data.
 *
 * @param {string} fileName name of the file to generate.
 * @param {number} fileSizeLowerBoundBytes minimum size of file to generate.
 * @param {number} fileSizeUpperBoundBytes maximum size of file to generate.
 * @param {string} currentDirectory the directory in which to generate the file.
 *
 * @returns {number} the size of the file generated.
 */
export function generateRandomFile(
  fileName: string,
  fileSizeLowerBoundBytes: number = getLowHighFileSize(
    DEFAULT_OBJECT_RANGE_SIZE_BYTES
  ).low,
  fileSizeUpperBoundBytes: number = getLowHighFileSize(
    DEFAULT_OBJECT_RANGE_SIZE_BYTES
  ).high,
  currentDirectory: string = mkdtempSync(randomString())
): number {
  const fileSizeBytes = randomInteger(
    fileSizeLowerBoundBytes,
    fileSizeUpperBoundBytes
  );

  execSync(
    `head --bytes=${fileSizeBytes} /dev/urandom > ${currentDirectory}/${fileName}`
  );

  return fileSizeBytes;
}

/**
 * Creates a random directory structure consisting of subdirectories and random files.
 *
 * @param {number} maxObjects the total number of subdirectories and files to generate.
 * @param {string} baseName the starting directory under which everything else is added. File names will have this value prepended.
 * @param {number} fileSizeLowerBoundBytes minimum size of file to generate.
 * @param {number} fileSizeUpperBoundBytes maximum size of file to generate.
 *
 * @returns {array} an array of all the generated paths
 */
export function generateRandomDirectoryStructure(
  maxObjects: number,
  baseName: string,
  fileSizeLowerBoundBytes: number = getLowHighFileSize(
    DEFAULT_OBJECT_RANGE_SIZE_BYTES
  ).low,
  fileSizeUpperBoundBytes: number = getLowHighFileSize(
    DEFAULT_OBJECT_RANGE_SIZE_BYTES
  ).high,
  directoryProbability: number = DEFAULT_DIRECTORY_PROBABILITY
): RandomDirectoryCreationInformation {
  let curPath = baseName;
  const creationInfo: RandomDirectoryCreationInformation = {
    paths: [],
    totalSizeInBytes: 0,
  };

  mkdirSync(curPath);
  for (let i = 0; i < maxObjects; i++) {
    if (weightedRandomBoolean(directoryProbability)) {
      curPath = path.join(curPath, randomString());
      mkdirSync(curPath, {recursive: true});
      creationInfo.paths.push(curPath);
    } else {
      const randomName = randomString();
      creationInfo.totalSizeInBytes += generateRandomFile(
        randomName,
        fileSizeLowerBoundBytes,
        fileSizeUpperBoundBytes,
        curPath
      );
      creationInfo.paths.push(path.join(curPath, randomName));
    }
  }

  return creationInfo;
}

/**
 * Deletes the file specified by the fileName parameter.
 *
 * @param {string} fileName name of the file to delete.
 */
export function cleanupFile(
  fileName: string,
  directoryName: string = getDirName()
): void {
  unlinkSync(`${directoryName}/${fileName}`);
}

/**
 * Creates the necessary structures for performing a performance test.
 *
 * @param {string} projectId the project ID to use.
 * @param {string} bucketName the name of the bucket to use.
 * @returns {object} object containing the created storage, bucket, and transfer manager instance.
 */
export async function performanceTestSetup(
  projectId: string,
  bucketName: string
): Promise<PerformanceTestSetupResults> {
  const storage = new Storage({projectId});
  const bucket = storage.bucket(bucketName, {
    preconditionOpts: {
      ifGenerationMatch: 0,
    },
  });
  if (!(await bucket.exists())[0]) {
    await bucket.create();
  }
  const transferManager = new TransferManager(bucket);
  return {
    storage,
    bucket,
    transferManager,
  };
}

/**
 * Randomly returns the type of validation check to run on upload / download
 *
 * @returns {string | boolean | undefined} the type of validation to run (crc32c, md5, or none).
 */
export function getValidationType(): 'md5' | 'crc32c' | boolean | undefined {
  const checkType = randomInteger(0, 2);
  if (checkType === 0) {
    return false;
  } else if (checkType === 1) {
    return 'crc32c';
  } else {
    return 'md5';
  }
}

/**
 * Converts the supplied test results from javascript objects to a cloud monitoring formatted string.
 *
 * @param {TestResult[]} results An array of test iteration result objects that will be converted to cloud monitoring format.
 * @param {string} bucket The bucket name used for the test.
 *
 * @returns {AsyncGenerator<string>} A string containing the results of the conversion to cloud monitoring format.
 */
export async function* convertToCloudMonitoringFormat(
  results: TestResult[]
): AsyncGenerator<string> {
  for (const curResult of results) {
    const throughput =
      // If the object size is greater than the defined threshold, report in MiB/s, otherwise report in KiB/s.
      curResult.objectSize >= SSB_SIZE_THRESHOLD_BYTES
        ? curResult.objectSize /
          1024 /
          1024 /
          (curResult.elapsedTimeUs / 1000000)
        : curResult.objectSize / 1024 / (curResult.elapsedTimeUs / 1000000);
    yield `throughput{\
    library="${curResult.library}",\
    api="${curResult.api}",\
    op="${curResult.op}",\
    object_size="${curResult.objectSize}",\
    transfer_offset="${curResult.transferOffset}",\
    transfer_size="${curResult.chunkSize}",\
    app_buffer_size="${curResult.appBufferSize}",\
    crc32c_enabled="${curResult.crc32cEnabled}",\
    md5_enabled="${curResult.md5Enabled}",\
    cpu_time_us="${curResult.cpuTimeUs}",\
    bucket_name="${curResult.bucketName}",\
    workers="${curResult.workers}",\
    status_code="${curResult.status}"} ${throughput}`;
  }
}

/**
 * Logs the provided message if debugging is enabled.
 *
 * @param {string | error} messageOrError the message or error object to be printed utilizing console.debug.
 * @param {boolean} shouldLog flag indicating whether or not the message should be logged to stdout or stderr.
 * @param {boolean} isError if set to true and shouldLog is true, write the output to stderr instead of stdout.
 */
export function log(
  messageOrError: string | Error,
  shouldLog: boolean,
  isError = false
): void {
  if (shouldLog) {
    isError ? console.error(messageOrError) : console.log(messageOrError);
  }
}

/**
 * Converts the provided rangeSize from string format to an object containing the low and high size values.
 *
 * @param {string} rangeSize a string in the format low..high.
 *
 * @returns {object} An object containing integers low and high.
 */
export function getLowHighFileSize(rangeSize: string): {
  low: number;
  high: number;
} {
  const split = rangeSize.split('..');
  return {
    low: parseInt(split[0]),
    high: parseInt(split[1]),
  };
}
