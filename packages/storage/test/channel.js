/*!
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

/*!
 * @module storage/channel
 */

'use strict';

var assert = require('assert');
var extend = require('extend');
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var ServiceObject = require('@google-cloud/common').ServiceObject;
var util = require('@google-cloud/common').util;

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Channel') {
      promisified = true;
    }
  }
});

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Channel', function() {
  var STORAGE = {};
  var ID = 'channel-id';
  var RESOURCE_ID = 'resource-id';

  var Channel;
  var channel;

  before(function() {
    Channel = proxyquire('../src/channel.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil
      }
    });
  });

  beforeEach(function() {
    channel = new Channel(STORAGE, ID, RESOURCE_ID);
  });

  describe('initialization', function() {
    it('should inherit from ServiceObject', function() {
      assert(channel instanceof ServiceObject);

      var calledWith = channel.calledWith_[0];

      assert.strictEqual(calledWith.parent, STORAGE);
      assert.strictEqual(calledWith.baseUrl, '/channels');
      assert.strictEqual(calledWith.id, '');
      assert.deepEqual(calledWith.methods, {});
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should set the default metadata', function() {
      assert.deepEqual(channel.metadata, {
        id: ID,
        resourceId: RESOURCE_ID
      });
    });
  });

  describe('stop', function() {
    it('should make the correct request', function(done) {
      channel.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/stop');
        assert.strictEqual(reqOpts.json, channel.metadata);

        done();
      };

      channel.stop(assert.ifError);
    });

    it('should execute callback with error & API response', function(done) {
      var error = {};
      var apiResponse = {};

      channel.request = function(reqOpts, callback) {
        callback(error, apiResponse);
      };

      channel.stop(function(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should not require a callback', function(done) {
      channel.request = function(reqOpts, callback) {
        assert.doesNotThrow(callback);
        done();
      };

      channel.stop();
    });
  });
});
