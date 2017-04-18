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
var extend = require('extend');
var proxyquire = require('proxyquire');
var through = require('through2');
var util = require('@google-cloud/common').util;

var replaceProjectIdTokenOverride;
var fakeUtil = extend({}, util, {
  replaceProjectIdToken: function(reqOpts) {
    if (replaceProjectIdTokenOverride) {
      return replaceProjectIdTokenOverride.apply(null, arguments);
    }

    return reqOpts;
  }
});

function FakeService() {
  this.calledWith_ = arguments;
}

describe('GaxService', function() {
  var GaxService;
  var gaxService;

  var MODULE = {
    ALL_SCOPES: ['scope1, scope2']
  };
  var CONFIG = {
    module: MODULE
  };
  var OPTIONS = {};

  before(function() {
    GaxService = proxyquire('../src/service.js', {
      '@google-cloud/common': {
        Service: FakeService,
        util: fakeUtil
      }
    });
  });

  beforeEach(function() {
    replaceProjectIdTokenOverride = null;

    gaxService = new GaxService(CONFIG, OPTIONS);
  });

  describe('instantiation', function() {
    it('should initialize the API object', function() {
      assert.deepEqual(gaxService.api, {});
    });

    it('should localize the GAX modules', function() {
      assert.strictEqual(gaxService.module, MODULE);
    });

    it('should localize the options', function() {
      assert.strictEqual(gaxService.options, OPTIONS);
    });

    it('should inherit from Service', function() {
      assert(gaxService instanceof FakeService);

      assert.deepEqual(gaxService.calledWith_[0], extend({
        scopes: MODULE.ALL_SCOPES
      }, CONFIG));
      assert.strictEqual(gaxService.calledWith_[1], OPTIONS);
    });
  });

  describe('request', function() {
    var REQ_CONFIG = {};

    it('should return if in snippet sandbox', function(done) {
      gaxService.prepareRequest_ = function() {
        done(new Error('Should not have gotten project ID.'));
      };

      global.GCLOUD_SANDBOX_ENV = true;
      var returnValue = gaxService.request(REQ_CONFIG, assert.ifError);
      delete global.GCLOUD_SANDBOX_ENV;

      assert.strictEqual(returnValue, undefined);
      done();
    });

    it('should prepare the request', function(done) {
      gaxService.prepareRequest_ = function(config) {
        assert.strictEqual(config, REQ_CONFIG);
        done();
      };

      gaxService.request(REQ_CONFIG, assert.ifError);
    });

    it('should execute callback with error', function(done) {
      var error = new Error('Error.');

      gaxService.prepareRequest_ = function(config, callback) {
        callback(error);
      };

      gaxService.request(REQ_CONFIG, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should execute the returned request function', function(done) {
      gaxService.prepareRequest_ = function(config, callback) {
        function preparedRequestFn(cb) {
          cb(); // done()
        }

        callback(null, preparedRequestFn);
      };

      gaxService.request(REQ_CONFIG, done);
    });
  });

  describe('requestStream', function() {
    var REQ_CONFIG = {};
    var GAX_STREAM;

    beforeEach(function() {
      GAX_STREAM = through();

      gaxService.prepareRequest_ = function(config, callback) {
        function preparedRequestFn() {
          return GAX_STREAM;
        }

        callback(null, preparedRequestFn);
      };
    });

    it('should return if in snippet sandbox', function(done) {
      gaxService.prepareRequest_ = function() {
        done(new Error('Should not have gotten project ID.'));
      };

      global.GCLOUD_SANDBOX_ENV = true;
      var returnValue = gaxService.requestStream(REQ_CONFIG);
      returnValue.emit('reading');
      delete global.GCLOUD_SANDBOX_ENV;

      assert(returnValue instanceof require('stream'));
      done();
    });

    it('should expose an abort function', function(done) {
      GAX_STREAM.cancel = done;

      var requestStream = gaxService.requestStream(REQ_CONFIG);
      requestStream.emit('reading');
      requestStream.abort();
    });

    it('should prepare the request once reading', function(done) {
      gaxService.prepareRequest_ = function(config) {
        assert.strictEqual(config, REQ_CONFIG);
        done();
      };

      var requestStream = gaxService.requestStream(REQ_CONFIG);
      requestStream.emit('reading');
    });

    it('should destroy the stream with prepare error', function(done) {
      var error = new Error('Error.');

      gaxService.prepareRequest_ = function(config, callback) {
        callback(error);
      };

      var requestStream = gaxService.requestStream(CONFIG);
      requestStream.emit('reading');

      requestStream.on('error', function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should destroy the stream with GAX error', function(done) {
      var error = new Error('Error.');

      var requestStream = gaxService.requestStream(CONFIG);
      requestStream.emit('reading');

      requestStream.on('error', function(err) {
        assert.strictEqual(err, error);
        done();
      });

      GAX_STREAM.emit('error', error);
    });
  });

  describe('prepareRequest_', function() {
    var CONFIG = {
      client: 'client',
      method: 'method',
      reqOpts: {
        a: 'b',
        c: 'd'
      },
      gaxOpts: {}
    };

    var PROJECT_ID = 'project-id';

    beforeEach(function() {
      gaxService.getProjectId = function(callback) {
        callback(null, PROJECT_ID);
      };

      gaxService.api[CONFIG.client] = {
        [CONFIG.method]: util.noop
      };
    });

    it('should get the project ID', function(done) {
      gaxService.getProjectId = function() {
        done();
      };

      gaxService.prepareRequest_(CONFIG, assert.ifError);
    });

    it('should return error if getting project ID failed', function(done) {
      var error = new Error('Error.');

      gaxService.getProjectId = function(callback) {
        callback(error);
      };

      gaxService.prepareRequest_(CONFIG, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should initiate and cache the client', function() {
      var fakeClient = {
        [CONFIG.method]: util.noop
      };

      gaxService.module = function(options) {
        assert.strictEqual(options, gaxService.options);

        return {
          [CONFIG.client]: function(options) {
            assert.strictEqual(options, gaxService.options);
            return fakeClient;
          }
        };
      };

      gaxService.api = {};

      gaxService.prepareRequest_(CONFIG, assert.ifError);

      assert.strictEqual(gaxService.api[CONFIG.client], fakeClient);
    });

    it('should use the cached client', function() {
      gaxService.module = function() {
        throw new Error('Should not re-instantiate a GAX client.');
      };

      gaxService.prepareRequest_(CONFIG, assert.ifError);
    });

    it('should replace the project ID token', function(done) {
      var replacedReqOpts = {};

      replaceProjectIdTokenOverride = function(reqOpts, projectId) {
        assert.notStrictEqual(reqOpts, CONFIG.reqOpts);
        assert.deepEqual(reqOpts, CONFIG.reqOpts);
        assert.strictEqual(projectId, PROJECT_ID);

        return replacedReqOpts;
      };

      gaxService.api[CONFIG.client][CONFIG.method] = {
        bind: function(gaxClient, reqOpts) {
          assert.strictEqual(reqOpts, replacedReqOpts);

          setImmediate(done);

          return util.noop;
        }
      };

      gaxService.prepareRequest_(CONFIG, assert.ifError);
    });
  });
});
