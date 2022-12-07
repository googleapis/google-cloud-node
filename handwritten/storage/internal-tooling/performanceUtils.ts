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
import path = require('path');
import {Bucket, Storage, TransferManager} from '../src';

export const BLOCK_SIZE_IN_BYTES = 1024;
export const DEFAULT_SMALL_FILE_SIZE_BYTES = 5120;
export const DEFAULT_LARGE_FILE_SIZE_BYTES = 2.147e9;
export const NODE_DEFAULT_HIGHWATER_MARK_BYTES = 16384;
export const DEFAULT_DIRECTORY_PROBABILITY = 0.1;
export const DEFAULT_PROJECT_ID = 'GCS_NODE_PERFORMANCE_METRICS';
export const DEFAULT_NUMBER_OF_OBJECTS = 1000;

export interface TestResult {
  op: string;
  objectSize: number;
  appBufferSize: number;
  libBufferSize: number;
  crc32Enabled: boolean;
  md5Enabled: boolean;
  apiName: 'JSON' | 'XML';
  elapsedTimeUs: number;
  cpuTimeUs: number;
  status: '[OK]';
}

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
  fileSizeLowerBoundBytes: number = DEFAULT_SMALL_FILE_SIZE_BYTES,
  fileSizeUpperBoundBytes: number = DEFAULT_LARGE_FILE_SIZE_BYTES,
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
  fileSizeLowerBoundBytes: number = DEFAULT_SMALL_FILE_SIZE_BYTES,
  fileSizeUpperBoundBytes: number = DEFAULT_LARGE_FILE_SIZE_BYTES,
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
  directoryName: string = __dirname
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
