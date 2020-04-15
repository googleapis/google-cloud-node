// Copyright 2015 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const assert = require('assert');
const proxyquire = require('proxyquire').noPreserveCache();
const {util} = require('@google-cloud/common');
const promisify = require('@google-cloud/promisify');

class FakeOperation {
  constructor() {
    this.calledWith_ = arguments;
  }
}

class FakeServiceObject {
  constructor() {
    this.calledWith_ = arguments;
  }
}

let parseHttpRespBodyOverride = null;
let promisified = false;
const fakeUtil = Object.assign({}, util, {
  parseHttpRespBody: function() {
    if (parseHttpRespBodyOverride) {
      return parseHttpRespBodyOverride.apply(null, arguments);
    }
    return util.parseHttpRespBody.apply(this, arguments);
  },
});

const fakePromisify = Object.assign({}, promisify, {
  promisifyAll: function(Class) {
    if (Class.name === 'Operation') {
      promisified = true;
    }
  },
});

describe('Operation', () => {
  let Operation;
  let operation;

  const SCOPE = {
    Promise: Promise,
    compute: {},
  };
  const OPERATION_NAME = 'operation-name';

  before(() => {
    Operation = proxyquire('../src/operation.js', {
      '@google-cloud/common': {
        Operation: FakeOperation,
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
      '@google-cloud/promisify': fakePromisify,
    });
  });

  beforeEach(() => {
    parseHttpRespBodyOverride = null;
    operation = new Operation(SCOPE, OPERATION_NAME);
  });

  describe('instantiation', () => {
    it('should localize the name', () => {
      assert.strictEqual(operation.name, OPERATION_NAME);
    });

    it('should inherit from Operation', () => {
      assert(operation instanceof FakeOperation);

      const calledWith = operation.calledWith_[0];

      assert.strictEqual(calledWith.parent, SCOPE);
      assert.strictEqual(calledWith.baseUrl, '/operations');
      assert.strictEqual(calledWith.id, OPERATION_NAME);
      assert.deepStrictEqual(calledWith.methods, {
        delete: true,
        exists: true,
        get: true,
      });
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should give the right baseUrl for a global Operation', () => {
      const operation = new Operation(
        {
          constructor: {
            name: 'Compute',
          },
        },
        OPERATION_NAME
      );

      const calledWith = operation.calledWith_[0];
      assert.strictEqual(calledWith.baseUrl, '/global/operations');
    });
  });

  describe('getMetadata', () => {
    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        FakeServiceObject.prototype.getMetadata = function(callback) {
          callback(error, apiResponse);
        };
      });

      it.skip('should ignore false errors', done => {
        const apiResponse = {
          name: operation.name,
          error: {
            errors: [],
          },
        };

        operation.getMetadata = function(callback) {
          callback(apiResponse.error, apiResponse);
        };

        operation.getMetadata((err, metadata, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it.skip('should execute callback with error and API response', done => {
        operation.getMetadata((err, metadata, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(metadata, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it.skip('should not require a callback', () => {
        assert.doesNotThrow(() => {
          operation.getMetadata();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        FakeServiceObject.prototype.getMetadata = function(callback) {
          callback(null, apiResponse);
        };
      });

      it.skip('should update the metadata to the API response', done => {
        operation.getMetadata(err => {
          assert.ifError(err);
          assert.strictEqual(operation.metadata, apiResponse);
          done();
        });
      });

      it.skip('should exec callback with metadata and API response', done => {
        operation.getMetadata((err, metadata, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it.skip('should not require a callback', () => {
        assert.doesNotThrow(() => {
          operation.getMetadata();
        });
      });
    });
  });

  describe('poll_', () => {
    beforeEach(() => {
      operation.emit = util.noop;
    });

    it('should call getMetadata', done => {
      operation.getMetadata = function() {
        done();
      };

      operation.poll_(assert.ifError);
    });

    describe('API error', () => {
      const error = new Error('Error.');

      beforeEach(() => {
        operation.getMetadata = function(callback) {
          callback(error);
        };
      });

      it('should emit the error', done => {
        operation.poll_(err => {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('operation failure', () => {
      const error = new Error('Error.');
      const apiResponse = {error: error};

      beforeEach(() => {
        operation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      it('should parse and return the response body', done => {
        const parsedHttpRespBody = {err: {}};

        parseHttpRespBodyOverride = function(body) {
          assert.strictEqual(body, apiResponse);
          return parsedHttpRespBody;
        };

        operation.poll_(err => {
          assert.strictEqual(err, parsedHttpRespBody.err);
          done();
        });
      });
    });

    describe('operation running', () => {
      const apiResponse = {status: 'RUNNING'};

      beforeEach(() => {
        operation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      it('should update status', done => {
        delete operation.status;

        operation.poll_(err => {
          assert.ifError(err);
          assert.strictEqual(operation.status, apiResponse.status);
          done();
        });
      });

      it('should emit the running event', done => {
        operation.emit = function(eventName, metadata) {
          assert.strictEqual(eventName, 'running');
          assert.strictEqual(metadata, apiResponse);
          done();
        };

        operation.poll_(assert.ifError);
      });

      it('should not emit running if already running', done => {
        operation.emit = function(eventName) {
          assert.strictEqual(eventName, 'running');

          operation.emit = done; // will fail test if called
          operation.poll_(done);
        };

        operation.poll_(assert.ifError);
      });
    });

    describe('operation complete', () => {
      const apiResponse = {status: 'DONE'};

      beforeEach(() => {
        operation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      it('should update status', done => {
        operation.status = 'PENDING';

        operation.poll_(err => {
          assert.ifError(err);
          assert.strictEqual(operation.status, apiResponse.status);
          done();
        });
      });

      it('should execute callback with metadata', done => {
        operation.poll_((err, metadata) => {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          done();
        });
      });
    });
  });
});
