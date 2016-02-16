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

var assert = require('assert');
var extend = require('extend');
var mockery = require('mockery-next');
var nodeutil = require('util');

var ServiceObject = require('../../lib/common/service-object.js');
var util = require('../../lib/common/util.js');

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Sink', function() {
  var Sink;
  var sink;

  var LOGGING = {
    createSink: util.noop
  };
  var SINK_NAME = 'sink-name';

  before(function() {
    mockery.registerMock(
      '../../lib/common/service-object.js',
      FakeServiceObject
    );

    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Sink = require('../../lib/logging/sink.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    sink = new Sink(LOGGING, SINK_NAME);
  });

  describe('instantiation', function() {
    it('should inherit from ServiceObject', function(done) {
      var loggingInstance = extend({}, LOGGING, {
        createSink: {
          bind: function(context) {
            assert.strictEqual(context, loggingInstance);
            done();
          }
        }
      });

      var sink = new Sink(loggingInstance, SINK_NAME);
      assert(sink instanceof ServiceObject);

      var calledWith = sink.calledWith_[0];

      assert.strictEqual(calledWith.parent, loggingInstance);
      assert.strictEqual(calledWith.baseUrl, '/sinks');
      assert.strictEqual(calledWith.id, SINK_NAME);
      assert.deepEqual(calledWith.methods, {
        create: true,
        delete: true,
        getMetadata: true
      });
    });

    it('should localize the name', function() {
      assert.strictEqual(sink.name, SINK_NAME);
    });
  });

  describe('setFilter', function() {
    var FILTER = 'filter';

    it('should call set metadata', function(done) {
      sink.setMetadata = function(metadata, callback) {
        assert.strictEqual(metadata.filter, FILTER);
        callback(); // done()
      };

      sink.setFilter(FILTER, done);
    });
  });

  describe('setMetadata', function() {
    var METADATA = { a: 'b', c: 'd' };

    it('should refresh the metadata', function(done) {
      sink.getMetadata = function() {
        done();
      };

      sink.setMetadata(METADATA, assert.ifError);
    });

    it('should exec callback with error from refresh', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      sink.getMetadata = function(callback) {
        callback(error, null, apiResponse);
      };

      sink.setMetadata(METADATA, function(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should make the correct request', function(done) {
      var currentMetadata = { a: 'a', e: 'e' };

      sink.getMetadata = function(callback) {
        callback(null, currentMetadata);
      };

      sink.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '');
        assert.strictEqual(reqOpts.method, 'PUT');

        var expectedMetadata = extend({}, currentMetadata, METADATA);
        assert.deepEqual(reqOpts.json, expectedMetadata);

        done();
      };

      sink.setMetadata(METADATA, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        sink.getMetadata = function(callback) {
          callback();
        };

        sink.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        sink.setMetadata(METADATA, function(err, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {};

      beforeEach(function() {
        sink.getMetadata = function(callback) {
          callback();
        };

        sink.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with API resp', function(done) {
        sink.setMetadata(METADATA, function(err, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });
  });
});
