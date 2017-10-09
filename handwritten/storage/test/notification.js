/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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

var assert = require('assert');
var common = require('@google-cloud/common');
var extend = require('extend');
var proxyquire = require('proxyquire');
var util = require('util');

function FakeServiceObject() {
  this.calledWith_ = arguments;
  common.ServiceObject.apply(this, arguments);
}

util.inherits(FakeServiceObject, common.ServiceObject);

var promisified = false;
var fakeUtil = extend({}, common.util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Notification') {
      promisified = true;
    }
  },
});

describe('Notification', function() {
  var Notification;
  var notification;

  var BUCKET = {
    createNotification: fakeUtil.noop,
  };

  var ID = '123';

  before(function() {
    Notification = proxyquire('../src/notification.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
    });
  });

  beforeEach(function() {
    BUCKET.createNotification = fakeUtil.noop = function() {};
    notification = new Notification(BUCKET, ID);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should inherit from ServiceObject', function() {
      assert(notification instanceof FakeServiceObject);

      var calledWith = notification.calledWith_[0];

      assert.strictEqual(calledWith.parent, BUCKET);
      assert.strictEqual(calledWith.baseUrl, '/notificationConfigs');
      assert.strictEqual(calledWith.id, ID);

      assert.deepEqual(calledWith.methods, {
        create: true,
        exists: true,
      });
    });

    it('should use Bucket#createNotification for the createMethod', function() {
      var bound = function() {};

      BUCKET.createNotification = {
        bind: function(context) {
          assert.strictEqual(context, BUCKET);
          return bound;
        },
      };

      var notification = new Notification(BUCKET, ID);
      var calledWith = notification.calledWith_[0];

      assert.strictEqual(calledWith.createMethod, bound);
    });

    it('should convert number IDs to strings', function() {
      var notification = new Notification(BUCKET, 1);
      var calledWith = notification.calledWith_[0];

      assert.strictEqual(calledWith.id, '1');
    });
  });

  describe('delete', function() {
    it('should make the correct request', function(done) {
      var options = {};

      notification.request = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'DELETE');
        assert.strictEqual(reqOpts.uri, '');
        assert.strictEqual(reqOpts.qs, options);
        callback(); // the done fn
      };

      notification.delete(options, done);
    });

    it('should optionally accept options', function(done) {
      notification.request = function(reqOpts, callback) {
        assert.deepEqual(reqOpts.qs, {});
        callback(); // the done fn
      };

      notification.delete(done);
    });

    it('should optionally accept a callback', function(done) {
      fakeUtil.noop = done;

      notification.request = function(reqOpts, callback) {
        callback(); // the done fn
      };

      notification.delete();
    });
  });

  describe('get', function() {
    it('should get the metadata', function(done) {
      notification.getMetadata = function() {
        done();
      };

      notification.get(assert.ifError);
    });

    it('should accept an options object', function(done) {
      var options = {};

      notification.getMetadata = function(options_) {
        assert.strictEqual(options_, options);
        done();
      };

      notification.get(options, assert.ifError);
    });

    it('should execute callback with error & metadata', function(done) {
      var error = new Error('Error.');
      var metadata = {};

      notification.getMetadata = function(options, callback) {
        callback(error, metadata);
      };

      notification.get(function(err, instance, metadata_) {
        assert.strictEqual(err, error);
        assert.strictEqual(instance, null);
        assert.strictEqual(metadata_, metadata);

        done();
      });
    });

    it('should execute callback with instance & metadata', function(done) {
      var metadata = {};

      notification.getMetadata = function(options, callback) {
        callback(null, metadata);
      };

      notification.get(function(err, instance, metadata_) {
        assert.ifError(err);

        assert.strictEqual(instance, notification);
        assert.strictEqual(metadata_, metadata);

        done();
      });
    });

    describe('autoCreate', function() {
      var AUTO_CREATE_CONFIG;

      var ERROR = {code: 404};
      var METADATA = {};

      beforeEach(function() {
        AUTO_CREATE_CONFIG = {
          autoCreate: true,
        };

        notification.getMetadata = function(options, callback) {
          callback(ERROR, METADATA);
        };
      });

      it('should pass config to create if it was provided', function(done) {
        var config = extend({}, AUTO_CREATE_CONFIG, {
          maxResults: 5,
        });

        notification.create = function(config_) {
          assert.strictEqual(config_, config);
          done();
        };

        notification.get(config, assert.ifError);
      });

      it('should pass only a callback to create if no config', function(done) {
        notification.create = function(callback) {
          callback(); // done()
        };

        notification.get(AUTO_CREATE_CONFIG, done);
      });

      describe('error', function() {
        it('should execute callback with error & API response', function(done) {
          var error = new Error('Error.');
          var apiResponse = {};

          notification.create = function(callback) {
            notification.get = function(config, callback) {
              assert.deepEqual(config, {});
              callback(); // done()
            };

            callback(error, null, apiResponse);
          };

          notification.get(AUTO_CREATE_CONFIG, function(err, instance, resp) {
            assert.strictEqual(err, error);
            assert.strictEqual(instance, null);
            assert.strictEqual(resp, apiResponse);
            done();
          });
        });

        it('should refresh the metadata after a 409', function(done) {
          var error = {
            code: 409,
          };

          notification.create = function(callback) {
            notification.get = function(config, callback) {
              assert.deepEqual(config, {});
              callback(); // done()
            };

            callback(error);
          };

          notification.get(AUTO_CREATE_CONFIG, done);
        });
      });
    });
  });

  describe('getMetadata', function() {
    it('should make the correct request', function(done) {
      var options = {};

      notification.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      notification.getMetadata(options, assert.ifError);
    });

    it('should optionally accept options', function(done) {
      notification.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      notification.getMetadata(assert.ifError);
    });

    it('should return any errors to the callback', function(done) {
      var error = new Error('err');
      var response = {};

      notification.request = function(reqOpts, callback) {
        callback(error, response);
      };

      notification.getMetadata(function(err, metadata, resp) {
        assert.strictEqual(err, error);
        assert.strictEqual(metadata, null);
        assert.strictEqual(resp, response);
        done();
      });
    });

    it('should set and return the metadata', function(done) {
      var response = {};

      notification.request = function(reqOpts, callback) {
        callback(null, response);
      };

      notification.getMetadata(function(err, metadata, resp) {
        assert.ifError(err);
        assert.strictEqual(metadata, response);
        assert.strictEqual(notification.metadata, response);
        assert.strictEqual(resp, response);
        done();
      });
    });
  });
});
