/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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
const Functions = require('../');
const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('CloudFunction', () => {
  let CloudFunction, cloudfunction;

  const PROJECT_ID = process.env.GCLOUD_TESTS_PROJECT_ID;
  const REGION = 'us-central1';
  const FUNCTION_NAME = `projects/${PROJECT_ID}/locations/${REGION}/functions/testFunc`; // jscs:disable
  const FUNCTION_SHORT_NAME = FUNCTION_NAME.split('/').pop();

  const functions = new Functions({
    projectId: PROJECT_ID,
    region: REGION
  });

  before(() => {
    CloudFunction = proxyquire('../src/cloudfunction.js', {
      'events-intercept': {
        patch: sinon.stub()
      }
    });
  });

  beforeEach(() => {
    cloudfunction = new CloudFunction(functions, FUNCTION_SHORT_NAME);
  });

  describe('initialization', () => {
    it('should validate arguments', () => {
      assert.throws(() => {
        cloudfunction = new CloudFunction();
      }, (err) => {
        const expected = 'A functions service object name must be provided.';
        if (err.message === expected) {
          return true;
        }
      });
      assert.throws(() => {
        cloudfunction = new CloudFunction(functions);
      }, (err) => {
        if (err.message === 'A function name must be provided.') {
          return true;
        }
      });
      assert.throws(() => {
        cloudfunction = new CloudFunction(functions, FUNCTION_NAME, 123);
      }, (err) => {
        const expected = 'A function configuration object must be provided.';
        if (err.message === expected) {
          return true;
        }
      });
      assert.throws(() => {
        cloudfunction = new CloudFunction(functions, FUNCTION_SHORT_NAME, {
          projectId: 123
        });
      }, (err) => {
        if (err.message === 'A project string must be provided.') {
          return true;
        }
      });
      assert.throws(() => {
        cloudfunction = new CloudFunction(functions, FUNCTION_SHORT_NAME, {
          region: 123
        });
      }, (err) => {
        if (err.message === 'A region string must be provided.') {
          return true;
        }
      });
    });

    it('should format name from Functions defaults', () => {
      assert.equal(cloudfunction.name, FUNCTION_SHORT_NAME);
      assert.equal(cloudfunction.metadata.name, FUNCTION_NAME);
    });

    it('should format name from config argument', () => {
      cloudfunction = new CloudFunction(functions, FUNCTION_SHORT_NAME, {
        projectId: 'test',
        region: 'test2'
      });
      assert.equal(cloudfunction.name, FUNCTION_SHORT_NAME);
      assert.equal(
        cloudfunction.metadata.name,
        `projects/test/locations/test2/functions/${FUNCTION_SHORT_NAME}`
      );
    });

    it('should use provided formatted name', () => {
      cloudfunction = new CloudFunction(functions, FUNCTION_NAME);
      assert.equal(cloudfunction.name, FUNCTION_SHORT_NAME);
      assert.equal(cloudfunction.metadata.name, FUNCTION_NAME);
    });

    it('should assign functions object to `this`', () => {
      assert.deepEqual(cloudfunction.functions, functions);
    });
  });

  describe('call', () => {
    it('should check arguments', () => {
      const callback = sinon.stub();
      functions.api.Functions.callFunction = sinon.stub().yields();

      cloudfunction.call(callback);

      assert.deepEqual(
        functions.api.Functions.callFunction.getCall(0).args.slice(0, -1),
        [
          {
            name: FUNCTION_NAME,
            data: '{}'
          },
          {}
        ]
      );

      cloudfunction.call({}, callback);

      assert.deepEqual(
        functions.api.Functions.callFunction.getCall(0).args.slice(0, -1),
        [
          {
            name: FUNCTION_NAME,
            data: '{}'
          },
          {}
        ]
      );

      assert.throws(() => {
        cloudfunction.call(false, callback);
      }, (err) => {
        if (err.message === 'A data value must be provided.') {
          return true;
        }
      });

      assert.throws(() => {
        cloudfunction.call({}, 123, callback);
      }, (err) => {
        if (err.message === 'A configuration object must be provided.') {
          return true;
        }
      });
    });

    it('should call the function', () => {
      functions.api.Functions.callFunction = sinon.stub().yields(null, {});

      cloudfunction.call();
    });

    it('should handle a call error', () => {
      const error = new Error('error');
      functions.api.Functions.callFunction = sinon.stub().yields(error);

      return cloudfunction.call()
        .then(() => assert.fail('Should have failed!'))
        .catch((err) => {
          assert.strictEqual(err, error);
        });
    });
  });

  describe('create', () => {
    it('should call Functions#createFunction', () => {
      const callback = sinon.stub();
      functions.createFunction = sinon.stub();

      cloudfunction.create(callback);

      assert.deepEqual(
        functions.createFunction.getCall(0).args.slice(0, -1),
        [
          cloudfunction.name,
          {
            name: FUNCTION_NAME
          },
          {}
        ]
      );
    });

    it('should call Functions#createFunction and merge provided config', () => {
      const sourceArchiveUrl = 'gs://test/test.zip';
      const callback = sinon.stub();
      functions.createFunction = sinon.stub();

      cloudfunction.create({
        sourceArchiveUrl: sourceArchiveUrl
      }, callback);

      assert.deepEqual(
        functions.createFunction.getCall(0).args.slice(0, -1),
        [
          cloudfunction.name,
          {
            name: FUNCTION_NAME,
            sourceArchiveUrl: sourceArchiveUrl
          },
          {}
        ]
      );
    });

    it('should call Functions#createFunction and pass call options', () => {
      const sourceArchiveUrl = 'gs://test/test.zip';
      const callOpts = { retry: {} };
      const callback = sinon.stub();
      functions.createFunction = sinon.stub();

      cloudfunction.create({
        sourceArchiveUrl: sourceArchiveUrl
      }, callOpts, callback);

      assert.deepEqual(
        functions.createFunction.getCall(0).args.slice(0, -1),
        [
          cloudfunction.name,
          {
            name: FUNCTION_NAME,
            sourceArchiveUrl: sourceArchiveUrl
          },
          callOpts
        ]
      );
    });
  });

  describe('delete', () => {
    it('should delete the function', () => {
      const callback = sinon.stub();
      functions.api.Functions.deleteFunction = sinon.stub();

      cloudfunction.delete(callback);

      assert.deepEqual(
        functions.api.Functions.deleteFunction.getCall(0).args.slice(0, -1),
        [
          {
            name: FUNCTION_NAME
          },
          {}
        ]
      );
    });

    it('should delete the function and pass call options', () => {
      const callOpts = { longrunning: {} };
      const callback = sinon.stub();
      functions.api.Functions.deleteFunction = sinon.stub();

      cloudfunction.delete(callOpts, callback);

      assert.deepEqual(
        functions.api.Functions.deleteFunction.getCall(0).args.slice(0, -1),
        [
          {
            name: FUNCTION_NAME
          },
          callOpts
        ]
      );
    });
  });

  describe('exists', () => {
    it('should call CloudFunction#get to see if the function exists', () => {
      cloudfunction.get = sinon.stub().returns(Promise.resolve());

      return cloudfunction.exists()
        .then((results) => {
          const exists = results[0];
          assert.equal(exists, true);
          assert.equal(cloudfunction.get.callCount, 1);
          assert.deepEqual(cloudfunction.get.getCall(0).args, [{}]);
        });
    });

    it('should call CloudFunction#get and pass call options', () => {
      const callOpts = { retry: {} };
      const callback = sinon.stub();
      cloudfunction.get = sinon.stub().returns(Promise.resolve());

      cloudfunction.exists(callOpts, callback);

      assert.equal(cloudfunction.get.callCount, 1);
      assert.deepEqual(cloudfunction.get.getCall(0).args, [callOpts]);
    });

    it('should handle regular call error', () => {
      const error = new Error('error');
      cloudfunction.get = sinon.stub().returns(Promise.reject(error));

      return cloudfunction.exists()
        .then(() => assert.fail('Should have failed!'))
        .catch((err) => {
          assert.strictEqual(err, error);
          assert.equal(cloudfunction.get.callCount, 1);
          assert.deepEqual(cloudfunction.get.getCall(0).args, [{}]);
        });
    });

    it('should function not found call error', () => {
      const error = new Error('error');
      error.code = 404;
      cloudfunction.get = sinon.stub().returns(Promise.reject(error));

      return cloudfunction.exists()
        .then((results) => {
          const exists = results[0];
          assert.equal(exists, false);
          assert.equal(cloudfunction.get.callCount, 1);
          assert.deepEqual(cloudfunction.get.getCall(0).args, [{}]);

          error.code = 5;

          return cloudfunction.exists();
        })
        .then((results) => {
          const exists = results[0];
          assert.equal(exists, false);
          assert.equal(cloudfunction.get.callCount, 2);
          assert.deepEqual(cloudfunction.get.getCall(1).args, [{}]);
        })
        .catch(() => {
          assert.fail('Should not have failed!');
        });
    });
  });

  describe('get', () => {
    it('should get a function', () => {
      const metadata = {
        sourceArchiveUrl: 'gs://test/test.zip'
      };
      functions.api.Functions.getFunction = sinon.stub().yields(null, metadata);

      return cloudfunction.get()
        .then((results) => {
          const _cloudfunction = results[0];
          assert.strictEqual(_cloudfunction, cloudfunction);
          assert.equal(functions.api.Functions.getFunction.callCount, 1);
          assert.deepEqual(
            functions.api.Functions.getFunction.getCall(0).args.slice(0, -1),
            [
              {
                name: FUNCTION_NAME
              },
              {}
            ]
          );
          assert.deepEqual(cloudfunction.metadata, {
            name: FUNCTION_NAME,
            sourceArchiveUrl: metadata.sourceArchiveUrl
          });
        });
    });

    it('should get a function and pass callOpts', () => {
      const callback = sinon.stub();
      const callOpts = { retry: {} };
      functions.api.Functions.getFunction = sinon.stub();

      cloudfunction.get(callOpts, callback);
      assert.equal(functions.api.Functions.getFunction.callCount, 1);
      assert.deepEqual(
        functions.api.Functions.getFunction.getCall(0).args.slice(0, -1),
        [
          {
            name: FUNCTION_NAME
          },
          callOpts
        ]
      );
    });

    it('should handle call error', () => {
      const error = new Error('error');
      functions.api.Functions.getFunction = sinon.stub().yields(error);

      return cloudfunction.get()
        .then(() => assert.fail('Should have failed!'))
        .catch((err) => {
          assert.strictEqual(err, error);
        });
    });
  });

  describe('setMetadata', () => {
    it('should update a function', () => {
      const metadata = {
        timeout: {
          seconds: 30
        }
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
          interceptHandler(cloudfunction, metadata, {}, (err, metadata) => {
            resolve([metadata]);
          });
        });
      };
      functions.api.Functions.updateFunction = sinon.stub().yields(
        null,
        mockOperation
      );

      return cloudfunction.setMetadata(metadata)
        .then((results) => {
          const operation = results[0];
          return operation.toPromise();
        })
        .then((results) => {
          const _metadata = results[0];
          assert.strictEqual(_metadata, cloudfunction.metadata);
          assert.equal(functions.api.Functions.updateFunction.callCount, 1);
          assert.deepEqual(
            functions.api.Functions.updateFunction.getCall(0).args.slice(0, -1),
            [
              {
                name: FUNCTION_NAME,
                function: extend(true, {
                  name: FUNCTION_NAME
                }, metadata)
              },
              {}
            ]
          );
          assert.deepEqual(cloudfunction.metadata, {
            name: FUNCTION_NAME,
            timeout: metadata.timeout
          });
        });
    });

    it('should update a function and pass callOpts', () => {
      const callback = sinon.stub();
      const callOpts = { retry: {} };
      functions.api.Functions.updateFunction = sinon.stub();

      cloudfunction.setMetadata({}, callOpts, callback);
      assert.equal(functions.api.Functions.updateFunction.callCount, 1);
      assert.deepEqual(
        functions.api.Functions.updateFunction.getCall(0).args.slice(0, -1),
        [
          {
            name: FUNCTION_NAME,
            function: {
              name: FUNCTION_NAME
            }
          },
          callOpts
        ]
      );
    });

    it('should validate metadata', () => {
      const expected = 'A function configuration object must be provided.';
      assert.throws(() => {
        cloudfunction.setMetadata(null, sinon.stub());
      }, (err) => {
        if (err.message === expected) {
          return true;
        }
      });
    });

    it('should handle call error', () => {
      const error = new Error('error');
      functions.api.Functions.updateFunction = sinon.stub().yields(error);

      return cloudfunction.setMetadata({})
        .then(() => assert.fail('Should have failed!'))
        .catch((err) => {
          assert.strictEqual(err, error);
        });
    });
  });
});
