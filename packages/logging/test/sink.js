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
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var promisifed = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Sink') {
      promisifed = true;
    }
  }
});

describe.only('Sink', function() {
  var Sink;
  var sink;

  var LOGGING = {
    createSink: util.noop,
    projectId: 'project-id'
  };
  var SINK_NAME = 'sink-name';

  before(function() {
    Sink = proxyquire('../src/sink.js', {
      '@google-cloud/common': {
        util: fakeUtil
      }
    });
  });

  beforeEach(function() {
    sink = new Sink(LOGGING, SINK_NAME);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisifed);
    });

    it('should localize Logging instance', function() {
      assert.strictEqual(sink.logging, LOGGING);
    });

    it('should localize the name', function() {
      assert.strictEqual(sink.name, SINK_NAME);
    });

    it('should localize the formatted name', function() {
      assert.strictEqual(
        sink.formattedName_,
        'projects/' + LOGGING.projectId + '/sinks/' + SINK_NAME
      );
    });
  });

  describe('create', function() {
    it('should call parent createSink', function(done) {
      var config = {};

      sink.logging.createSink = function(name, config_, callback) {
        assert.strictEqual(name, sink.name);
        assert.strictEqual(config_, config);
        callback(); // done()
      };

      sink.create(config, done);
    });
  });

  describe('delete', function() {
    it('should accept gaxOptions', function(done) {
      sink.logging.request = function(config, callback) {
        assert.strictEqual(config.client, 'configServiceV2Client');
        assert.strictEqual(config.method, 'deleteSink');

        assert.deepEqual(config.reqOpts, {
          sinkName: sink.formattedName_
        });

        assert.deepEqual(config.gaxOpts, {});

        callback(); // done()
      };

      sink.delete(done);
    });

    it('should accept gaxOptions', function(done) {
      var gaxOptions = {};

      sink.logging.request = function(config) {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      sink.delete(gaxOptions, assert.ifError);
    });
  });

  describe('getMetadata', function() {
    it('should make correct request', function(done) {
      sink.logging.request = function(config) {
        assert.strictEqual(config.client, 'configServiceV2Client');
        assert.strictEqual(config.method, 'getSink');

        assert.deepEqual(config.reqOpts, {
          sinkName: sink.formattedName_
        });

        assert.deepEqual(config.gaxOpts, {});

        done();
      };

      sink.getMetadata(assert.ifError);
    });

    it('should accept gaxOptions', function(done) {
      var gaxOptions = {};

      sink.logging.request = function(config) {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      sink.delete(gaxOptions, assert.ifError);
    });

    it('should update metadata', function(done) {
      var metadata = {};

      sink.logging.request = function(config, callback) {
        callback(null, metadata);
      };

      sink.getMetadata(function() {
        assert.strictEqual(sink.metadata, metadata);
        done();
      });
    });

    it('should execute callback with original arguments', function(done) {
      var args = [{}, {}, {}];

      sink.logging.request = function(config, callback) {
        callback.apply(null, args);
      };

      sink.getMetadata(function() {
        assert.deepStrictEqual([].slice.call(arguments), args);
        done();
      });
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

    beforeEach(function() {
      sink.getMetadata = function(callback) {
        callback(null, METADATA);
      };
    });

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

      sink.logging.request = function(config) {
        assert.strictEqual(config.client, 'configServiceV2Client');
        assert.strictEqual(config.method, 'updateSink');

        assert.deepEqual(config.reqOpts, {
          sinkName: sink.formattedName_,
          sink: extend({}, currentMetadata, METADATA)
        });

        assert.strictEqual(config.gaxOpts, undefined);

        done();
      };

      sink.setMetadata(METADATA, assert.ifError);
    });

    it('should accept gaxOptions', function(done) {
      var metadata = extend({}, METADATA, {
        gaxOptions: {}
      });

      sink.logging.request = function(config) {
        assert.strictEqual(config.reqOpts.sink.gaxOptions, undefined);
        assert.strictEqual(config.gaxOpts, metadata.gaxOptions);
        done();
      };

      sink.setMetadata(metadata, assert.ifError);
    });

    it('should update metadata', function(done) {
      var metadata = {};

      sink.logging.request = function(config, callback) {
        callback(null, metadata);
      };

      sink.setMetadata(metadata, function() {
        assert.strictEqual(sink.metadata, metadata);
        done();
      });
    });

    it('should execute callback with original arguments', function(done) {
      var args = [{}, {}, {}];

      sink.logging.request = function(config, callback) {
        callback.apply(null, args);
      };

      sink.setMetadata(METADATA, function() {
        assert.deepStrictEqual([].slice.call(arguments), args);
        done();
      });
    });
  });
});
