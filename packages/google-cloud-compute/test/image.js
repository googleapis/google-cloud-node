/**
 * Copyright 2018 Google Inc. All Rights Reserved.
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

let assert = require('assert');
let extend = require('extend');
let nodeutil = require('util');
let proxyquire = require('proxyquire');
let ServiceObject = require('@google-cloud/common').ServiceObject;
let util = require('@google-cloud/common').util;

let promisified = false;
let fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Image') {
      promisified = true;
    }
  },
});

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Image', function() {
  let Image;
  let image;

  let COMPUTE = {
    projectId: 'project-id',
    createImage: util.noop,
    operation: util.noop,
  };
  let IMAGE_NAME = 'image-name';

  before(function() {
    Image = proxyquire('../src/image.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
    });
  });

  beforeEach(function() {
    image = new Image(COMPUTE, IMAGE_NAME);
    image.parent = COMPUTE;
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should inherit from ServiceObject', function() {
      var computeInstance = extend({}, COMPUTE, {
        createImage: {
          bind: function(context) {
            assert.strictEqual(context, computeInstance);
          },
        },
      });

      let image = new Image(computeInstance, IMAGE_NAME);
      assert(image instanceof ServiceObject);

      let calledWith = image.calledWith_[0];

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

  describe('delete', function() {
    it('should call ServiceObject.delete', function(done) {
      FakeServiceObject.prototype.delete = function() {
        assert.strictEqual(this, image);
        done();
      };

      image.delete();
    });

    describe('error', function() {
      let error = new Error('Error.');
      let apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        image.delete(function(err, operation, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          image.delete();
        });
      });
    });

    describe('success', function() {
      let apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', function(done) {
        let operation = {};

        image.parent.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        image.delete(function(err, operation_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          image.delete();
        });
      });
    });
  });
});
