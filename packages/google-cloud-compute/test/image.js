// Copyright 2018 Google LLC
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
const proxyquire = require('proxyquire');
const {ServiceObject, util} = require('@google-cloud/common');
const promisify = require('@google-cloud/promisify');

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  promisifyAll: function(Class) {
    if (Class.name === 'Image') {
      promisified = true;
    }
  },
});

class FakeServiceObject extends ServiceObject {
  constructor(config) {
    super(config);
    this.calledWith_ = arguments;
  }
}

describe('Image', () => {
  let Image;
  let image;

  const COMPUTE = {
    projectId: 'project-id',
    createImage: util.noop,
    operation: util.noop,
  };
  const IMAGE_NAME = 'image-name';

  before(() => {
    Image = proxyquire('../src/image.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/promisify': fakePromisify,
    });
  });

  beforeEach(() => {
    image = new Image(COMPUTE, IMAGE_NAME);
    image.parent = COMPUTE;
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should inherit from ServiceObject', () => {
      const computeInstance = Object.assign({}, COMPUTE, {
        createImage: {
          bind: function(context) {
            assert.strictEqual(context, computeInstance);
          },
        },
      });

      const image = new Image(computeInstance, IMAGE_NAME);
      assert(image instanceof ServiceObject);

      const calledWith = image.calledWith_[0];

      assert.strictEqual(calledWith.parent, computeInstance);
      assert.strictEqual(calledWith.baseUrl, '/global/images');
      assert.strictEqual(calledWith.id, IMAGE_NAME);
      assert.deepStrictEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true,
        getMetadata: true,
      });
    });
  });

  describe('delete', () => {
    it('should call ServiceObject.delete', done => {
      FakeServiceObject.prototype.delete = function() {
        assert.strictEqual(this, image);
        done();
      };

      image.delete();
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', done => {
        image.delete((err, operation, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          image.delete();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(() => {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', done => {
        const operation = {};

        image.parent.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        image.delete((err, operation_, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          image.delete();
        });
      });
    });
  });
});
