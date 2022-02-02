/*!
 * Copyright 2021 Google LLC. All Rights Reserved.
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
import * as jsonToNodeApiMapping from './test-data/retryInvocationMap.json';
import * as libraryMethods from './libraryMethods';
import {Bucket, File, HmacKey, Notification, Storage} from '../src/';
import * as uuid from 'uuid';
import * as assert from 'assert';
import {DecorateRequestOptions} from '@google-cloud/common';
import fetch from 'node-fetch';

interface RetryCase {
  instructions: String[];
}

interface Method {
  name: String;
  resources: String[];
}

export interface RetryTestCase {
  id: number;
  description: String;
  cases: RetryCase[];
  methods: Method[];
  preconditionProvided: boolean;
  expectSuccess: boolean;
}

interface ConformanceTestCreationResult {
  id: string;
}

interface ConformanceTestResult {
  completed: boolean;
}

type LibraryMethodsModuleType = typeof import('./libraryMethods');
const methodMap: Map<String, String[]> = new Map(
  Object.entries(jsonToNodeApiMapping)
);

const DURATION_SECONDS = 600; // 10 mins.
const TESTS_PREFIX = `storage.retry.tests.${shortUUID()}.`;
const TESTBENCH_HOST =
  process.env.STORAGE_EMULATOR_HOST || 'http://localhost:9000/';
const CONF_TEST_PROJECT_ID = 'my-project-id';
const TIMEOUT_FOR_INDIVIDUAL_TEST = 20000;
const RETRY_MULTIPLIER_FOR_CONFORMANCE_TESTS = 0.01;

export function executeScenario(testCase: RetryTestCase) {
  for (
    let instructionNumber = 0;
    instructionNumber < testCase.cases.length;
    instructionNumber++
  ) {
    const instructionSet: RetryCase = testCase.cases[instructionNumber];
    testCase.methods.forEach(async jsonMethod => {
      const functionList = methodMap.get(jsonMethod?.name);
      functionList?.forEach(storageMethodString => {
        const storageMethodObject =
          libraryMethods[storageMethodString as keyof LibraryMethodsModuleType];
        let bucket: Bucket;
        let file: File;
        let notification: Notification;
        let creationResult: {id: string};
        let storage: Storage;
        let hmacKey: HmacKey;

        describe(`${storageMethodString}`, async () => {
          beforeEach(async () => {
            storage = new Storage({
              apiEndpoint: TESTBENCH_HOST,
              projectId: CONF_TEST_PROJECT_ID,
              retryOptions: {
                retryDelayMultiplier: RETRY_MULTIPLIER_FOR_CONFORMANCE_TESTS,
              },
            });
            creationResult = await createTestBenchRetryTest(
              instructionSet.instructions,
              jsonMethod?.name.toString()
            );
            bucket = await createBucketForTest(
              storage,
              testCase.preconditionProvided,
              storageMethodString
            );
            file = await createFileForTest(
              testCase.preconditionProvided,
              storageMethodString,
              bucket
            );
            notification = bucket.notification(`${TESTS_PREFIX}`);
            await notification.create();

            [hmacKey] = await storage.createHmacKey(
              `${TESTS_PREFIX}@email.com`
            );

            storage.interceptors.push({
              request: requestConfig => {
                requestConfig.headers = requestConfig.headers || {};
                Object.assign(requestConfig.headers, {
                  'x-retry-test-id': creationResult.id,
                });
                return requestConfig as DecorateRequestOptions;
              },
            });
          });

          it(`${instructionNumber}`, async () => {
            if (testCase.expectSuccess) {
              assert.ifError(
                await storageMethodObject(
                  bucket,
                  file,
                  notification,
                  storage,
                  hmacKey
                )
              );
            } else {
              try {
                await storageMethodObject(
                  bucket,
                  file,
                  notification,
                  storage,
                  hmacKey
                );
                throw Error(`${storageMethodString} was supposed to throw.`);
              } catch (e) {
                assert.notStrictEqual(e, undefined);
              }
            }
            const testBenchResult = await getTestBenchRetryTest(
              creationResult.id
            );
            assert.strictEqual(testBenchResult.completed, true);
          }).timeout(TIMEOUT_FOR_INDIVIDUAL_TEST);
        });
      });
    });
  }
}

async function createBucketForTest(
  storage: Storage,
  preconditionProvided: boolean,
  storageMethodString: String
) {
  const name = generateName(storageMethodString, 'bucket');
  const bucket = storage.bucket(name);
  await bucket.create();
  await bucket.setRetentionPeriod(DURATION_SECONDS);

  if (preconditionProvided) {
    return new Bucket(storage, bucket.name, {
      preconditionOpts: {
        ifMetagenerationMatch: 2,
      },
    });
  }
  return bucket;
}

async function createFileForTest(
  preconditionProvided: boolean,
  storageMethodString: String,
  bucket: Bucket
) {
  const name = generateName(storageMethodString, 'file');
  const file = bucket.file(name);
  await file.save(name);
  if (preconditionProvided) {
    return new File(bucket, file.name, {
      preconditionOpts: {
        ifMetagenerationMatch: file.metadata.metageneration,
        ifGenerationMatch: file.metadata.generation,
      },
    });
  }
  return file;
}

function generateName(storageMethodString: String, bucketOrFile: string) {
  return `${TESTS_PREFIX}${storageMethodString.toLowerCase()}${bucketOrFile}.${shortUUID()}`;
}

async function createTestBenchRetryTest(
  instructions: String[],
  methodName: string
): Promise<ConformanceTestCreationResult> {
  const requestBody = {instructions: {[methodName]: instructions}};
  const response = await fetch(`${TESTBENCH_HOST}retry_test`, {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {'Content-Type': 'application/json'},
  });
  return response.json() as Promise<ConformanceTestCreationResult>;
}

async function getTestBenchRetryTest(
  testId: string
): Promise<ConformanceTestResult> {
  const response = await fetch(`${TESTBENCH_HOST}retry_test/${testId}`, {
    method: 'GET',
  });

  return response.json() as Promise<ConformanceTestResult>;
}

function shortUUID() {
  return uuid.v1().split('-').shift();
}
