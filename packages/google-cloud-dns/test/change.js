/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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
const nodeutil = require('util');
const proxyquire = require('proxyquire');
const ServiceObject = require('@google-cloud/common').ServiceObject;
const util = require('@google-cloud/common').util;

let promisified = false;
const fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Change') {
      promisified = true;
    }
  },
});

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Change', function() {
  let Change;
  let change;

  const ZONE = {
    name: 'zone-name',
    createChange: util.noop,
  };

  const CHANGE_ID = 'change-id';

  before(function() {
    Change = proxyquire('../src/change.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
    });
  });

  beforeEach(function() {
    change = new Change(ZONE, CHANGE_ID);
  });

  describe('instantiation', function() {
    it('should inherit from ServiceObject', function() {
      assert(change instanceof ServiceObject);

      const calledWith = change.calledWith_[0];

      assert.strictEqual(calledWith.parent, ZONE);
      assert.strictEqual(calledWith.baseUrl, '/changes');
      assert.strictEqual(calledWith.id, CHANGE_ID);
      assert.deepEqual(calledWith.methods, {
        exists: true,
        get: true,
        getMetadata: true,
      });
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });
  });

  describe('change', function() {
    it('should call the parent change method', function(done) {
      const config = {};

      change.parent.createChange = function(config_) {
        assert.strictEqual(config, config_);
        done();
      };

      change.create(config, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {};

      beforeEach(function() {
        change.parent.createChange = function(config, callback) {
          callback(error, null, apiResponse);
        };
      });

      it('should execute callback with error & apiResponse', function(done) {
        change.create({}, function(err, change, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(change, null);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const changeInstance = {
        id: 'id',
        metadata: {},
      };
      const apiResponse = {};

      beforeEach(function() {
        change.parent.createChange = function(config, callback) {
          callback(null, changeInstance, apiResponse);
        };
      });

      it('should execute callback with self & API response', function(done) {
        change.create({}, function(err, change_, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(change_, change);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });

      it('should assign the ID and metadata from the change', function(done) {
        change.create({}, function(err, change_) {
          assert.ifError(err);

          assert.strictEqual(change_.id, changeInstance.id);
          assert.strictEqual(change_.metadata, changeInstance.metadata);

          done();
        });
      });
    });
  });
});
