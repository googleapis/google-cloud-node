/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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

'use strict';

const assert = require('assert');
const extend = require('extend');
const path = require('path');
const uuid = require('uuid');

const CloudFunction = require('../src/cloudfunction.js');
const env = require('../../../system-test/env.js');
const Functions = require('../');
const storage = require('@google-cloud/storage')(env);

const STAGE_BUCKET_NAME = `gcloud-test-bucket-temp-${uuid.v4()}`;
const HTTP_FUNC = 'gcloudTestHelloHttp';
const TEST_FUNC_DIR = path.join(__dirname, './test-function');

const projectId = process.env.GCLOUD_TESTS_PROJECT_ID;
const region = 'us-central1';

extend(env, {
  projectId: projectId,
  region: region
});

function deleteFunction(functions, name) {
  return functions.cloudfunction(name).delete()
    .then((results) => results[0].promise())
    .catch((err) => {
      // Ignore error when the function can't be found, it may have already been
      // deleted by the test
      if (err.code !== 5 && err.code !== 404) {
        return Promise.reject(err);
      }
    });
}

describe('Functions', () => {
  const functions = new Functions(env);
  const stageBucket = storage.bucket(STAGE_BUCKET_NAME);

  before(() => {
    return Promise.all([
      deleteFunction(functions, HTTP_FUNC),
      deleteFunction(functions, `${HTTP_FUNC}2`),
      stageBucket.create()
    ]);
  });

  after(() => {
    return Promise.all([
      deleteFunction(functions, HTTP_FUNC),
      deleteFunction(functions, `${HTTP_FUNC}2`),
      // Deleting all files is very flaky, so call it twice to avoid an error
      // when deleting the bucket
      stageBucket.deleteFiles({ force: true })
        .then(() => stageBucket.deleteFiles({ force: true }))
        .then(() => stageBucket.delete())
    ]);
  });

  describe('cloudfunction', () => {
    it('should get and set name', () => {
      const name = 'helloWorld';
      const cloudfunction = functions.cloudfunction(name, {
        projectId: projectId,
        region: region
      });

      assert.equal(cloudfunction.name, name);
      assert.equal(
        cloudfunction.metadata.name,
        functions.api.Functions.functionPath(
          projectId,
          region,
          name
        )
      );
    });
  });

  describe('createFunction', () => {
    let sourceArchiveUrl;

    function testCreateFunction(name, options) {
      return functions.createFunction(name, options, {
        longrunning: {
          initialRetryDelayMillis: 500, // Start with a longer delay
          retryDelayMultiplier: 1.5, // Slightly increased multiplier
          maxRetryDelayMillis: 60000, // Default
          initialRpcTimeoutMillis: null, // Default
          rpcTimeoutMultiplier: null, // Default
          maxRpcTimeoutMillis: null, // Default
          totalTimeoutMillis: 600000 // Default
        }
      })
        .then((results) => results[0].promise())
        .then((results) => {
          const cloudfunction = results[0];
          const metadata = results[1];
          const apiResponse = results[2];
          assert.equal(cloudfunction instanceof CloudFunction, true);
          sourceArchiveUrl = cloudfunction.metadata.sourceArchiveUrl;
          assert.equal(cloudfunction.name, name);
          assert.equal(
            cloudfunction.metadata.name,
            functions.api.Functions.functionPath(
              projectId,
              region,
              name
            )
          );
          assert.equal(
            metadata.type,
            functions.builders.Functions.OperationType.CREATE_FUNCTION
          );
          assert.equal(apiResponse.done, true);

          return cloudfunction.exists();
        })
        .then((results) => {
          const exists = results[0];
          assert.equal(exists, true);
        });
    }

    it('creates a function from a local path', () => {
      return testCreateFunction(HTTP_FUNC, {
        localPath: TEST_FUNC_DIR,
        httpsTrigger: {},
        stageBucket: STAGE_BUCKET_NAME
      });
    });

    it('creates a function from a sourceArchiveUrl', () => {
      return testCreateFunction(`${HTTP_FUNC}2`, {
        httpsTrigger: {},
        sourceArchiveUrl: sourceArchiveUrl,
        entryPoint: HTTP_FUNC
      });
    });
  });

  describe('getFunctions', () => {
    it('lists all functions', () => {
      return functions.getFunctions()
        .then((results) => {
          const cloudfunctions = results[0];
          const nextQuery = results[1];
          assert.equal(Array.isArray(cloudfunctions), true);
          assert.equal(!!nextQuery, false);
          assert.equal(
            cloudfunctions.every((func) => func instanceof CloudFunction),
            true
          );
          assert.equal(
            cloudfunctions.some((func) => func.name === HTTP_FUNC),
            true
          );
          assert.equal(
            cloudfunctions.some((func) => func.name === `${HTTP_FUNC}2`),
            true
          );
        });
    });

    // The Cloud Functions API currently does not honor the pageSize option
    it.skip('lists paginated functions', () => {
      const query = {
        location: functions.formatLocation(projectId, region),
        pageSize: 1,
        autoPaginate: false
      };
      return functions.getFunctions(query)
        .then((results) => {
          const cloudfunctions = results[0];
          const nextQuery = results[1];
          assert.equal(cloudfunctions.length, 1);
          assert.equal(Array.isArray(cloudfunctions), true);
          assert.equal(!!nextQuery, true);
          assert.equal(typeof nextQuery.pageToken, 'string');
          assert.equal(
            cloudfunctions.every((func) => func instanceof CloudFunction),
            true
          );
        });
    });
  });

  describe('getFunctionsStream', () => {
    it('streams all functions', (done) => {
      functions.getFunctionsStream()
        .on('error', done)
        .on('data', (cloudfunction) => {
          assert.equal(cloudfunction instanceof CloudFunction, true);
        })
        .on('end', done);
    });
  });

  describe('CloudFunction', () => {
    describe('call', () => {
      it('calls a function', () => {
        return functions.cloudfunction(HTTP_FUNC).call()
          .then((results) => {
            const response = results[0];
            assert.equal(typeof response.executionId, 'string');
            assert.equal(response.result, 'Hello World!');
            assert(!response.error);
          });
      });

      it('calls a function with data', () => {
        const name = 'Bob';
        const cloudfunction = functions.cloudfunction(HTTP_FUNC);
        return cloudfunction.call({ name: name })
          .then((results) => {
            const response = results[0];
            assert.equal(typeof response.executionId, 'string');
            assert.equal(response.result, `Hello ${name}!`);
            assert(!response.error);
          });
      });
    });

    describe('exists', () => {
      it('returns whether a function exists', () => {
        return functions.cloudfunction(HTTP_FUNC).exists()
          .then((results) => {
            const exists = results[0];
            assert.equal(exists, true);
          });
      });
    });

    describe('get', () => {
      it('gets a function', () => {
        const formattedName = functions.api.Functions.functionPath(
          projectId,
          region,
          HTTP_FUNC
        );
        const cloudfunction = functions.cloudfunction(HTTP_FUNC);
        return cloudfunction.get()
          .then((results) => {
            assert.equal(results.length, 2);
            const _cloudfunction = results[0];
            const apiResponse = results[1];
            assert.strictEqual(_cloudfunction, cloudfunction);
            assert.equal(_cloudfunction.name, HTTP_FUNC);
            assert.equal(_cloudfunction.metadata.name, formattedName);
            assert(_cloudfunction instanceof CloudFunction);
            assert.equal(apiResponse.name, formattedName);
          });
      });
    });

    describe('delete', () => {
      it('deletes the function', () => {
        const cloudfunction = functions.cloudfunction(HTTP_FUNC);
        return cloudfunction.delete()
          .then((results) => {
            const operation = results[0];
            const apiResponse = results[1];
            assert(operation);
            assert(apiResponse);
            assert(operation.currentOperation);
            assert(operation.currentOperation.name, apiResponse.name);
            return operation.promise();
          })
          .then(() => cloudfunction.exists())
          .then((results) => {
            const exists = results[0];
            assert.equal(exists, false);
          });
      });
    });
  });
});
