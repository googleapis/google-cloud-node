/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

describe('logging-winston', function() {
  var fakeLogInstance = {};
  var fakeLoggingOptions_;
  var fakeLogName_;

  function fakeLogging(options) {
    fakeLoggingOptions_ = options;
    return {
      log: function(logName) {
        fakeLogName_ = logName;
        return fakeLogInstance;
      }
    };
  }

  function FakeTransport() {
    this.transportCalledWith_ = arguments;
  }

  var fakeWinston = {
    transports: {},
    Transport: FakeTransport
  };

  var LoggingWinston;
  var loggingWinston;

  var OPTIONS = {
    logName: 'log-name',
    levels: {
      one: 1
    },
    resource: {}
  };

  before(function() {
    LoggingWinston = proxyquire('../src/index.js', {
      '@google-cloud/logging': fakeLogging,
      winston: fakeWinston
    });
  });

  beforeEach(function() {
    fakeLogInstance = {};
    fakeLoggingOptions_ = null;
    fakeLogName_ = null;
    loggingWinston = new LoggingWinston(OPTIONS);
  });

  describe('instantiation', function() {
    it('should create a new instance of LoggingWinston', function() {
      // jshint newcap:false
      var loggingWinston = LoggingWinston(OPTIONS);
      assert(loggingWinston instanceof LoggingWinston);
    });

    it('should inherit from winston.Transport', function() {
      assert.deepEqual(loggingWinston.transportCalledWith_[0], {
        level: OPTIONS.level,
        name: OPTIONS.logName
      });
    });

    it('should assign itself to winston.transports', function() {
      assert.strictEqual(
        fakeWinston.transports.StackdriverLogging,
        LoggingWinston
      );
    });

    it('should localize provided levels', function() {
      assert.strictEqual(loggingWinston.levels_, OPTIONS.levels);
    });

    it('should default to npm levels', function() {
      var optionsWithoutLevels = extend({}, OPTIONS);
      delete optionsWithoutLevels.levels;

      var loggingWinston = new LoggingWinston(optionsWithoutLevels);
      assert.deepEqual(loggingWinston.levels_, {
        error: 3,
        warn: 4,
        info: 6,
        verbose: 7,
        debug: 7,
        silly: 7
      });
    });

    it('should localize Log instance using provided name', function() {
      var logName = 'log-name-override';

      var optionsWithLogName = extend({}, OPTIONS);
      optionsWithLogName.logName = logName;

      new LoggingWinston(optionsWithLogName);

      assert.strictEqual(fakeLoggingOptions_, optionsWithLogName);
      assert.strictEqual(fakeLogName_, logName);
    });

    it('should localize Log instance using default name', function() {
      assert.strictEqual(fakeLoggingOptions_, OPTIONS);
      assert.strictEqual(fakeLogName_, OPTIONS.logName);
    });

    it('should localize the provided resource', function() {
      assert.strictEqual(loggingWinston.resource_, OPTIONS.resource);
    });
  });

  describe('log', function() {
    var LEVEL = Object.keys(OPTIONS.levels)[0];
    var STACKDRIVER_LEVEL = 'alert'; // (code 1)
    var MESSAGE = 'message';
    var METADATA = {
      value: function() {}
    };

    beforeEach(function() {
      fakeLogInstance.entry = util.noop;
      loggingWinston.log_[STACKDRIVER_LEVEL] = util.noop;
    });

    it('should throw on a bad log level', function() {
      assert.throws(function() {
        loggingWinston.log(
          'non-existent-level',
          MESSAGE,
          METADATA,
          assert.ifError
        );
      }, /Unknown log level: non-existent-level/);
    });

    it('should properly create an entry', function(done) {
      loggingWinston.log_.entry = function(entryMetadata, message) {
        var expectedLabels = {};
        for (var prop in METADATA) {
          expectedLabels[prop] = nodeutil.inspect(METADATA[prop]);
        }
        assert.deepEqual(entryMetadata, {
          resource: loggingWinston.resource_,
          labels: expectedLabels
        });
        assert.strictEqual(message, MESSAGE);
        done();
      };

      loggingWinston.log(LEVEL, MESSAGE, METADATA, assert.ifError);
    });

    it('should not require metadata', function(done) {
      loggingWinston.log_.entry = function(entryMetadata, message) {
        assert.deepEqual(entryMetadata, {
          resource: loggingWinston.resource_,
          labels: {}
        });
        assert.strictEqual(message, MESSAGE);
        done();
      };

      loggingWinston.log(LEVEL, MESSAGE, assert.ifError);
    });

    it('should write to the log', function(done) {
      var entry = {};

      loggingWinston.log_.entry = function() {
        return entry;
      };

      loggingWinston.log_[STACKDRIVER_LEVEL] = function(entry_, callback) {
        assert.strictEqual(entry_, entry);
        callback(); // done()
      };

      loggingWinston.log(LEVEL, MESSAGE, METADATA, done);
    });
  });
});