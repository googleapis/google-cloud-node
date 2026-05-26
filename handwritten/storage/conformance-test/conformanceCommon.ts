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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as jsonToNodeApiMapping from './test-data/retryInvocationMap.json';
import * as libraryMethods from './libraryMethods';
import {Bucket, File, Gaxios, HmacKey, Notification, Storage} from '../src';
import * as uuid from 'uuid';
import * as assert from 'assert';
import {
  StorageRequestOptions,
  StorageTransport,
  StorageTransportCallback,
} from '../src/storage-transport';
import {getDirName} from '../src/util';
import path from 'path';
import {GoogleAuth} from 'google-auth-library';
interface RetryCase {
  instructions: String[];
}

interface Method {
  name: String;
  resources: String[];
  group?: String;
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
  Object.entries(jsonToNodeApiMapping),
);

const DURATION_SECONDS = 600; // 10 mins.
const TESTS_PREFIX = `storage.retry.tests.${shortUUID()}.`;
const TESTBENCH_HOST =
  process.env.STORAGE_EMULATOR_HOST || 'http://localhost:9000/';
const CONF_TEST_PROJECT_ID = 'my-project-id';
const TIMEOUT_FOR_INDIVIDUAL_TEST = 20000;
const RETRY_MULTIPLIER_FOR_CONFORMANCE_TESTS = 0.01;
const SERVICE_ACCOUNT = path.join(
  getDirName(),
  '../../../conformance-test/fixtures/signing-service-account.json',
);

const authClient = new GoogleAuth({
  keyFilename: SERVICE_ACCOUNT,
  scopes: ['https://www.googleapis.com/auth/devstorage.full_control'],
}).fromJSON(require(SERVICE_ACCOUNT));

authClient.getAccessToken = async () => ({token: 'unauthenticated-test-token'});
authClient.request = async opts => {
  const gaxios = new Gaxios();
  return gaxios.request(opts);
};

export function executeScenario(testCase: RetryTestCase) {
  for (
    let instructionNumber = 0;
    instructionNumber < testCase.cases.length;
    instructionNumber++
  ) {
    const instructionSet: RetryCase = testCase.cases[instructionNumber];
    testCase.methods.forEach(async jsonMethod => {
      const functionList =
        jsonMethod?.group !== undefined
          ? methodMap.get(jsonMethod?.group)
          : methodMap.get(jsonMethod?.name);
      functionList?.forEach(storageMethodString => {
        const storageMethodObject =
          libraryMethods[storageMethodString as keyof LibraryMethodsModuleType];
        let bucket: Bucket;
        let file: File;
        let notification: Notification;
        let creationResult: ConformanceTestCreationResult;
        let storage: Storage;
        let hmacKey: HmacKey;
        let storageTransport: StorageTransport;

        describe(`${storageMethodString}`, async () => {
          beforeEach(async () => {
            const rawTransport = new StorageTransport({
              apiEndpoint: TESTBENCH_HOST,
              authClient: authClient,
              keyFilename: SERVICE_ACCOUNT,
              baseUrl: TESTBENCH_HOST,
              packageJson: {name: 'test-package', version: '1.0.0'},
              retryOptions: {
                retryDelayMultiplier: RETRY_MULTIPLIER_FOR_CONFORMANCE_TESTS,
                maxRetries: 3,
                maxRetryDelay: 32,
                totalTimeout: TIMEOUT_FOR_INDIVIDUAL_TEST,
              },
              scopes: [
                'http://www.googleapis.com/auth/devstorage.full_control',
              ],
              projectId: CONF_TEST_PROJECT_ID,
              userAgent: 'retry-test',
              useAuthWithCustomEndpoint: true,
              customEndpoint: true,
              timeout: DURATION_SECONDS,
            });

            creationResult = await createTestBenchRetryTest(
              instructionSet.instructions,
              jsonMethod?.name.toString(),
              rawTransport,
            );

            // Create a Proxy around rawStorageTransport to intercept makeRequest
            storageTransport = createRetryProxy(
              rawTransport,
              creationResult.id,
            );

            storage = new Storage({
              apiEndpoint: TESTBENCH_HOST,
              projectId: CONF_TEST_PROJECT_ID,
              keyFilename: SERVICE_ACCOUNT,
              authClient: authClient,
              retryOptions: {
                retryDelayMultiplier: RETRY_MULTIPLIER_FOR_CONFORMANCE_TESTS,
              },
            });

            bucket = await createBucketForTest(
              storage,
              testCase.preconditionProvided &&
                !storageMethodString.includes('combine'),
              storageMethodString,
            );
            file = await createFileForTest(
              testCase.preconditionProvided,
              storageMethodString,
              bucket,
            );
            notification = bucket.notification(TESTS_PREFIX);
            await notification.create();

            [hmacKey] = await storage.createHmacKey(
              `${TESTS_PREFIX}@email.com`,
            );
          });

          it(`${instructionNumber}`, async () => {
            const methodParameters: libraryMethods.ConformanceTestOptions = {
              storage,
              bucket,
              file,
              storageTransport,
              notification,
              hmacKey,
              projectId: CONF_TEST_PROJECT_ID,
              preconditionRequired: testCase.preconditionProvided,
            };

            if (testCase.expectSuccess) {
              await storageMethodObject(methodParameters);
              const testBenchResult = await getTestBenchRetryTest(
                creationResult.id,
                storageTransport,
              );
              assert.strictEqual(testBenchResult.completed, true);
            } else {
              await assert.rejects(async () => {
                await storageMethodObject(methodParameters);
              }, undefined);
            }
          }).timeout(TIMEOUT_FOR_INDIVIDUAL_TEST);
        });
      });
    });
  }
}

/**
 * Creates a Proxy to automatically inject x-retry-test-id into all requests
 */
function createRetryProxy(
  transport: StorageTransport,
  retryId: string,
): StorageTransport {
  return new Proxy(transport, {
    get(target, prop, receiver) {
      const original = Reflect.get(target, prop, receiver);
      if (prop === 'makeRequest' && typeof original === 'function') {
        return async (
          reqOpts: StorageRequestOptions,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          callback?: StorageTransportCallback<any>,
        ) => {
          reqOpts.headers = reqOpts.headers || {};

          if (reqOpts.headers instanceof Headers) {
            reqOpts.headers.set('x-retry-test-id', retryId);
          } else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (reqOpts.headers as any)['x-retry-test-id'] = retryId;
          }

          return original.apply(target, [reqOpts, callback]);
        };
      }
      return original;
    },
  });
}

async function createBucketForTest(
  storage: Storage,
  withPrecondition: boolean,
  method: String,
) {
  const bucket = storage.bucket(generateName(method, 'bucket'));
  const [metadata] = await bucket.create();
  await bucket.setRetentionPeriod(DURATION_SECONDS);
  if (withPrecondition) {
    return new Bucket(storage, bucket.name, {
      preconditionOpts: {
        ifMetagenerationMatch: metadata.metageneration,
      },
    });
  }
  return bucket;
}

async function createFileForTest(
  withPrecondition: boolean,
  method: String,
  bucket: Bucket,
) {
  const file = bucket.file(generateName(method, 'file'));
  await file.save('test-content');
  if (withPrecondition) {
    const [metadata] = await file.getMetadata();
    return new File(bucket, file.name, {
      preconditionOpts: {
        ifMetagenerationMatch: metadata.metageneration,
        ifGenerationMatch: metadata.generation,
      },
    });
  }
  return file;
}

async function createTestBenchRetryTest(
  instructions: String[],
  methodName: string,
  transport: StorageTransport,
): Promise<ConformanceTestCreationResult> {
  const response = await transport.makeRequest({
    method: 'POST',
    url: 'retry_test',
    body: JSON.stringify({instructions: {[methodName]: instructions}}),
    headers: {'Content-Type': 'application/json'},
  });
  return response.data as ConformanceTestCreationResult;
}

async function getTestBenchRetryTest(
  testId: string,
  transport: StorageTransport,
): Promise<ConformanceTestResult> {
  const response = await transport.makeRequest({
    url: `retry_test/${testId}`,
    method: 'GET',
    headers: {'x-retry-test-id': testId},
  });
  return response.data as ConformanceTestResult;
}

function generateName(method: String, type: string) {
  return `${TESTS_PREFIX}${method.toLowerCase()}${type}.${shortUUID()}`;
}

function shortUUID() {
  return uuid.v4().split('-').shift();
}
