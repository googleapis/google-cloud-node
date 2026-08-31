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
import * as libraryMethods from './libraryMethods.js';
import {Bucket, File, HmacKey, Notification, Storage} from '../src';
import * as gaxios from 'gaxios';
import * as crypto from 'crypto';
import * as assert from 'assert';
import {StorageTransport} from '../src/storage-transport.js';
import {getDirName} from '../src/util.js';
import path from 'path';
import * as fs from 'fs';
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
}).fromJSON(JSON.parse(fs.readFileSync(SERVICE_ACCOUNT, 'utf8')));

authClient.getAccessToken = async () => ({token: 'unauthenticated-test-token'});
authClient.request = async (opts: unknown) => {
  const options = opts as gaxios.GaxiosOptions & {
    adapter?: (opts: unknown) => Promise<unknown>;
  };
  if (typeof options.adapter === 'function') {
    return options.adapter(opts) as Promise<gaxios.GaxiosResponse>;
  }
  const defaultGaxios = gaxios as unknown as {instance: gaxios.Gaxios};
  return defaultGaxios.instance.request(options);
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
            const defaultGaxios = gaxios as unknown as {
              instance?: gaxios.Gaxios;
            };
            defaultGaxios.instance?.interceptors?.request?.clear();

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
            if (
              storageMethodString !== 'createNotification' &&
              storageMethodString !== 'notificationCreate'
            ) {
              notification = bucket.notification(TESTS_PREFIX);
              await notification.create();
            }

            if (
              storageMethodString === 'deleteHMAC' ||
              storageMethodString === 'getHMAC' ||
              storageMethodString === 'getMetadataHMAC' ||
              storageMethodString === 'setMetadataHMAC'
            ) {
              [hmacKey] = await storage.createHmacKey(
                `${TESTS_PREFIX}@email.com`,
              );
            }

            storageTransport = storage.storageTransport;
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

            const injectHeader = async (
              reqOpts: gaxios.GaxiosOptionsPrepared,
            ) => {
              const url = reqOpts.url?.toString() || '';
              if (url.includes('retry_test') || !creationResult?.id) {
                return reqOpts;
              }
              reqOpts.headers = reqOpts.headers || {};
              if (typeof (reqOpts.headers as Headers).set === 'function') {
                (reqOpts.headers as Headers).set(
                  'x-retry-test-id',
                  creationResult.id,
                );
              }
              try {
                (reqOpts.headers as unknown as Record<string, unknown>)[
                  'x-retry-test-id'
                ] = creationResult.id;
              } catch (e) {
                /* empty */
              }
              return reqOpts;
            };

            const interceptor = {
              resolved: injectHeader,
              request: injectHeader,
            };

            const transportWithInstance =
              storage.storageTransport as unknown as {
                gaxiosInstance: gaxios.Gaxios;
              };
            const defaultGaxios = gaxios as unknown as {
              instance: gaxios.Gaxios;
            };

            transportWithInstance.gaxiosInstance?.interceptors?.request?.clear();
            defaultGaxios.instance?.interceptors?.request?.clear();

            transportWithInstance.gaxiosInstance.interceptors.request.add(
              interceptor,
            );
            defaultGaxios.instance.interceptors.request.add(interceptor);

            try {
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
            } finally {
              transportWithInstance.gaxiosInstance?.interceptors?.request?.clear();
              defaultGaxios.instance?.interceptors?.request?.clear();
            }
          }).timeout(TIMEOUT_FOR_INDIVIDUAL_TEST);
        });
      });
    });
  }
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
  if (method === 'deleteBucket') {
    return file;
  }
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
  return crypto.randomUUID().split('-').shift();
}
