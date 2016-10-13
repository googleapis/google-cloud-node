/**
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
const proxyquire = require('proxyquire');
const sinon = require('sinon');
const util = require('@google-cloud/common').util;

describe('Functions', () => {
  let Functions, functions;
  let fakeStorageFactory, fakeStorage, fakeBucket, fakeFile, fakeStream;
  let fakeArchiver, fakeArchive, fakeV1Beta2Override;
  const OPTIONS = {};

  const PROJECT_ID = process.env.GCLOUD_TESTS_PROJECT_ID;
  const REGION = 'us-central1';
  const FUNCTION_NAME = `projects/${PROJECT_ID}/locations/${REGION}/functions/testFunc`; // jscs:disable
  const FUNCTION_SHORT_NAME = FUNCTION_NAME.split('/').pop();
  const LOCATION = `projects/${PROJECT_ID}/locations/${REGION}`;
  const ARCHIVE_URL = 'gs://test/test.zip';

  const fakeUtil = extend(true, {}, util);
  const fakeFunctions = {
    functionPath: sinon.stub().returns(FUNCTION_NAME),
    locationPath: sinon.stub().returns(LOCATION)
  };

  function fakeV1Beta2() {
    if (fakeV1Beta2Override) {
      return fakeV1Beta2Override.apply(null, arguments);
    }

    return {
      cloudFunctionsServiceClient: sinon.stub().returns(fakeFunctions)
    };
  }

  beforeEach(() => {
    fakeArchive = {};
    fakeArchive.pipe = sinon.stub().returns(fakeArchive);
    fakeArchive.directory = sinon.stub().returns(fakeArchive);
    fakeArchive.finalize = sinon.stub().returns(fakeArchive);
    fakeArchive.on = sinon.stub().returns(fakeArchive);
    fakeArchiver = {
      create: sinon.stub().returns(fakeArchive)
    };
    fakeStream = {};
    fakeStream.on = sinon.stub().returns(fakeStream);
    fakeFile = {
      createWriteStream: sinon.stub().returns(fakeStream)
    };
    fakeBucket = {
      file: sinon.stub().returns(fakeFile)
    };
    fakeStorage = {
      bucket: sinon.stub().returns(fakeBucket)
    };
    fakeStorageFactory = sinon.stub().returns(fakeStorage);

    Functions = proxyquire('../src/index.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      '@google-cloud/storage': fakeStorageFactory,
      './v1beta2': fakeV1Beta2,
      archiver: fakeArchiver,
      'events-intercept': {
        patch: sinon.stub()
      },
      'google-gax': {
        operation: sinon.stub().returns({ name: 'operations/1234' })
      }
    });

    fakeV1Beta2Override = null;
    functions = new Functions(OPTIONS);
  });

  describe('instantiation', () => {
    it('should normalize the arguments', () => {
      const options = {
        projectId: 'project-id',
        credentials: 'credentials',
        email: 'email',
        keyFilename: 'keyFile'
      };

      const normalizeArguments = fakeUtil.normalizeArguments;
      let normalizeArgumentsCalled = false;

      fakeUtil.normalizeArguments = (context, options_) => {
        normalizeArgumentsCalled = true;
        assert.strictEqual(options, options_);
        return options_;
      };

      Functions.call(null, options);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should create a gax api client', () => {
      const expectedFunctionsService = {};
      const expectedOptions = {
        projectId: process.env.GCLOUD_TESTS_PROJECT_ID,
        interceptors_: undefined
      };

      fakeV1Beta2Override = (options) => {
        assert.deepEqual(options, expectedOptions);

        return {
          cloudFunctionsServiceClient: (options) => {
            assert.deepEqual(options, expectedOptions);
            return expectedFunctionsService;
          }
        };
      };

      const functions = new Functions(OPTIONS);

      assert.deepEqual(functions.api, {
        Functions: expectedFunctionsService
      });
    });
  });

  describe('_formatFunctionBody', () => {
    it('should check gcsTrigger', () => {
      const body = {
        gcsTrigger: 'test'
      };

      functions._formatFunctionBody(FUNCTION_SHORT_NAME, body);

      assert.equal(body.gcsTrigger, 'gs://test/');

      body.gcsTrigger = '';
      functions._formatFunctionBody(FUNCTION_SHORT_NAME, body);

      assert.equal(body.hasOwnProperty('gcsTrigger'), false);
    });

    it('should check pubsubTrigger', () => {
      const body = {
        pubsubTrigger: 'test'
      };

      functions._formatFunctionBody(FUNCTION_SHORT_NAME, body);

      assert.equal(body.pubsubTrigger, `projects/${PROJECT_ID}/topics/test`);

      body.pubsubTrigger = '';
      functions._formatFunctionBody(FUNCTION_SHORT_NAME, body);

      assert.equal(body.hasOwnProperty('pubsubTrigger'), false);
    });

    it('should check httpsTrigger', () => {
      const body = {
        httpsTrigger: true
      };
      const url = 'http://test/';

      functions._formatFunctionBody(FUNCTION_SHORT_NAME, body);

      assert.deepEqual(body.httpsTrigger, {});
      body.httpsTrigger.url = url;

      functions._formatFunctionBody(FUNCTION_SHORT_NAME, body);

      assert.deepEqual(body.httpsTrigger, {
        url: url
      });
    });

    it('should check timeout', () => {
      const body = {
        timeout: 300
      };

      functions._formatFunctionBody(FUNCTION_SHORT_NAME, body);

      assert.deepEqual(body.timeout, {
        seconds: 300
      });
      body.timeout = {
        seconds: 40
      };

      functions._formatFunctionBody(FUNCTION_SHORT_NAME, body);

      assert.deepEqual(body.timeout, {
        seconds: 40
      });
    });
  });

  describe('_formatGcsTrigger', () => {
    it('should check format', () => {
      const expected = 'gs://test/';
      assert.equal(functions._formatGcsTrigger('test'), expected);
      assert.equal(functions._formatGcsTrigger('gs://test'), expected);
      assert.equal(functions._formatGcsTrigger('gs://test/'), expected);
    });
  });

  describe('_formatPubsubTrigger', () => {
    it('should check format', () => {
      const expected = `projects/${PROJECT_ID}/topics/test`;
      assert.equal(
        functions._formatPubsubTrigger(PROJECT_ID, 'test'),
        expected
      );
      assert.equal(
        functions._formatPubsubTrigger(PROJECT_ID, expected),
        expected
      );
    });
  });

  describe('_uploadLocalPath', () => {
    it('should check localPath', () => {
      const expected = 'A localPath string must be provided.';
      const callback = sinon.stub();
      functions._uploadLocalPath(FUNCTION_SHORT_NAME, {
        region: REGION,
        projectId: PROJECT_ID
      }, callback);
      assert.equal(callback.callCount, 1);
      assert.equal(callback.getCall(0).args[0].message, expected);
    });

    it('should check stageBucket', () => {
      const expected = 'A stageBucket string must be provided.';
      const callback = sinon.stub();
      functions._uploadLocalPath(FUNCTION_SHORT_NAME, {
        region: REGION,
        projectId: PROJECT_ID,
        localPath: 'dir'
      }, callback);
      assert.equal(callback.callCount, 1);
      assert.equal(callback.getCall(0).args[0].message, expected);
    });

    it('should archive and upload a directory', () => {
      const callback = sinon.stub();
      fakeStream.on.withArgs('finish').yields();
      functions._uploadLocalPath(FUNCTION_SHORT_NAME, {
        region: REGION,
        projectId: PROJECT_ID,
        localPath: 'dir',
        stageBucket: 'test'
      }, callback);
      assert.equal(callback.callCount, 1);
      assert.equal(
        callback.getCall(0).args[1].includes('gs://test/us-central1-testFunc-'),
        true
      );
    });
  });

  describe('cloudfunction', () => {
    it('should return an instance of CloudFunction', () => {
      const cloudfunction = functions.cloudfunction(FUNCTION_SHORT_NAME);
      assert.equal(cloudfunction.name, FUNCTION_SHORT_NAME);
      assert.equal(cloudfunction instanceof Functions.CloudFunction, true);
      assert.strictEqual(cloudfunction.functions, functions);
    });
  });

  describe('createFunction', () => {
    it('should create a function', () => {
      const body = {
        name: FUNCTION_NAME,
        localPath: 'dir'
      };
      let interceptHandler;
      const mockOperation = {
        on: sinon.stub().returns(this),
        emit: sinon.stub().returns(this),
        intercept: (event, handler) => {
          interceptHandler = handler;
        }
      };
      mockOperation.toPromise = () => {
        return new Promise((resolve) => {
          interceptHandler(
            body,
            {},
            {},
            (err, cloudfunction) => {
              resolve([cloudfunction]);
            }
          );
        });
      };
      functions._uploadLocalPath = sinon.stub().yields(null, ARCHIVE_URL);
      functions.api.Functions.createFunction = sinon.stub()
        .yields(null, mockOperation);
      return functions.createFunction(FUNCTION_SHORT_NAME, body)
        .then((results) => {
          const operation = results[0];
          return operation.toPromise();
        })
        .then((results) => {
          const cloudfunction = results[0];
          assert.equal(cloudfunction instanceof Functions.CloudFunction, true);
          assert.equal(functions.api.Functions.createFunction.callCount, 1);
          assert.deepEqual(
            functions.api.Functions.createFunction.getCall(0).args.slice(0, -1),
            [
              {
                location: LOCATION,
                function: {
                  name: FUNCTION_NAME,
                  localPath: 'dir',
                  sourceArchiveUrl: ARCHIVE_URL
                }
              },
              {}
            ]
          );
          assert.deepEqual(cloudfunction.metadata, {
            name: FUNCTION_NAME,
            localPath: 'dir'
          });
        });
    });

    it('should create from source repository', () => {
      const body = {
        name: FUNCTION_NAME,
        sourceRepository: {}
      };
      functions.api.Functions.createFunction = sinon.stub();

      functions.createFunction(FUNCTION_SHORT_NAME, body);

      assert.deepEqual(
        functions.api.Functions.createFunction.getCall(0).args.slice(0, -1),
        [
          {
            location: LOCATION,
            function: {
              name: FUNCTION_NAME,
              sourceRepository: {}
            }
          },
          {}
        ]
      );
    });

    it('should fallback to gcsUrl', () => {
      const body = {
        name: FUNCTION_NAME,
        gcsUrl: ARCHIVE_URL
      };
      functions.api.Functions.createFunction = sinon.stub();

      functions.createFunction(FUNCTION_SHORT_NAME, body);

      assert.deepEqual(
        functions.api.Functions.createFunction.getCall(0).args.slice(0, -1),
        [
          {
            location: LOCATION,
            function: {
              name: FUNCTION_NAME,
              sourceArchiveUrl: ARCHIVE_URL
            }
          },
          {}
        ]
      );
    });

    it('should pass call options', () => {
      const body = {
        name: FUNCTION_NAME,
        sourceArchiveUrl: ARCHIVE_URL
      };
      const callOpts = { longrunning: {} };

      functions.api.Functions.createFunction = sinon.stub();

      functions.createFunction(FUNCTION_SHORT_NAME, body, callOpts);

      assert.deepEqual(
        functions.api.Functions.createFunction.getCall(0).args.slice(0, -1),
        [
          {
            location: LOCATION,
            function: body
          },
          callOpts
        ]
      );
    });

    it('should handle upload error', () => {
      const error = new Error('error');
      const body = {
        name: FUNCTION_NAME,
        localPath: 'dir'
      };
      functions._uploadLocalPath = sinon.stub().yields(error);

      return functions.createFunction(FUNCTION_SHORT_NAME, body)
        .then(() => assert.fail('Should have failed!'))
        .catch((err) => {
          assert.strictEqual(err, error);
        });
    });

    it('should handle call error', () => {
      const error = new Error('error');
      const body = {
        name: FUNCTION_NAME,
        sourceArchiveUrl: ARCHIVE_URL
      };
      functions.api.Functions.createFunction = sinon.stub().yields(error);

      return functions.createFunction(FUNCTION_SHORT_NAME, body)
        .then(() => assert.fail('Should have failed!'))
        .catch((err) => {
          assert.strictEqual(err, error);
        });
    });
  });

  describe('getFunctions', () => {
    const cloudfunctions = [
      {
        name: FUNCTION_NAME
      }
    ];

    it('should list functions', () => {
      functions.api.Functions.listFunctions = sinon.stub()
        .yields(null, cloudfunctions);
      return functions.getFunctions()
        .then((results) => {
          const _cloudfunctions = results[0];
          assert.equal(functions.api.Functions.listFunctions.callCount, 1);
          assert.deepEqual(_cloudfunctions, cloudfunctions.map((func) => {
            return functions.cloudfunction(func.name, func);
          }));
        });
    });

    it('should accept a location string', () => {
      functions.api.Functions.listFunctions = sinon.stub()
        .yields(null, cloudfunctions);
      return functions.getFunctions(LOCATION)
        .then(() => {
          assert.equal(functions.api.Functions.listFunctions.callCount, 1);
        });
    });

    it('should return next query', () => {
      const pageToken = '1234';
      functions.api.Functions.listFunctions = sinon.stub()
        .yields(null, cloudfunctions, pageToken);
      return functions.getFunctions({ autoPaginate: false })
        .then((results) => {
          const _cloudfunctions = results[0];
          const nextQuery = results[1];
          assert.equal(functions.api.Functions.listFunctions.callCount, 1);
          assert.deepEqual(_cloudfunctions, cloudfunctions.map((func) => {
            return functions.cloudfunction(func.name, func);
          }));
          assert.deepEqual(nextQuery, {
            pageToken: pageToken,
            location: LOCATION,
            autoPaginate: false
          });
        });
    });

    it('should require a location string', () => {
      return functions.getFunctions({ location: 1234 })
        .then(() => assert.fail('Should have failed!'))
        .catch((err) => {
          assert.equal(
            err.message,
            'A location must be specified for the request.'
          );
        });
    });

    it('should handle call error', () => {
      const error = new Error('error');
      functions.api.Functions.listFunctions = sinon.stub().yields(error);
      return functions.getFunctions()
        .then(() => assert.fail('Should have failed!'))
        .catch((err) => {
          assert.strictEqual(err, error);
        });
    });
  });

  describe('operation', () => {
    it('should return an operation', () => {
      const operation = functions.operation('1234');
      assert.deepEqual(operation, { name: 'operations/1234' });
    });

    it('should return an operation with full name', () => {
      const operation = functions.operation('operations/1234');
      assert.deepEqual(operation, { name: 'operations/1234' });
    });

    it('should take a config object', () => {
      const operation = functions.operation({ name: 'operations/1234' });
      assert.deepEqual(operation, { name: 'operations/1234' });
    });

    it('should require config', () => {
      assert.throws(() => {
        functions.operation();
      }, (err) => {
        if (err.message === 'A name must be specified for an operation.') {
          return true;
        }
      });
    });
  });
});
