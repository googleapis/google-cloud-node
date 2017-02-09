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
var bunyan = require('bunyan');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

describe('logging-bunyan', function() {
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

  var LoggingBunyan;
  var loggingBunyan;

  var OPTIONS = {logName: 'log-name', resource: {}};

  before(function() {
    LoggingBunyan =
        proxyquire('../src/index.js', {'@google-cloud/logging': fakeLogging});
  });

  beforeEach(function() {
    fakeLogInstance = {};
    fakeLoggingOptions_ = null;
    fakeLogName_ = null;
    loggingBunyan = new LoggingBunyan(OPTIONS);
  });

  describe('instantiation', function() {
    it('should create a new instance of LoggingBunyan', function() {
      // jshint newcap:false
      var loggingBunyan = LoggingBunyan(OPTIONS);
      assert(loggingBunyan instanceof LoggingBunyan);
    });

    it('should localize Log instance using default name', function() {
      assert.strictEqual(fakeLoggingOptions_, OPTIONS);
      assert.strictEqual(fakeLogName_, OPTIONS.logName);
    });

    it('should localize the provided resource', function() {
      assert.strictEqual(loggingBunyan.resource_, OPTIONS.resource);
    });
  });

  describe('stream', function() {
    it('should return a properly formatted object', function() {
      var LEVEL = 'info';
      var stream = loggingBunyan.stream(LEVEL);
      assert.deepStrictEqual(
          stream, {level: LEVEL, type: 'raw', stream: loggingBunyan});
    });
  });

  describe('write', function() {
    var STACKDRIVER_LEVEL = 'info';
    var RECORD = {
      level: 30,
      name: 'foo',
      pid: '5666',
      msg: 'hello',
      time: '2012-06-19T21:34:19.906Z'
    };

    beforeEach(function() {
      fakeLogInstance.entry = util.noop;
      loggingBunyan.log_[STACKDRIVER_LEVEL] = util.noop;
    });

    it('should properly create an entry', function(done) {
      loggingBunyan.log_.entry = function(entryMetadata, message) {
        assert.deepEqual(entryMetadata, {
          resource: loggingBunyan.resource_,
          // record.time should be transported to metadata.timestamp
          timestamp: RECORD.time
        });
        assert.deepEqual(message, RECORD);
        done();
      };

      loggingBunyan.write(RECORD);
    });

    it('should write to the log', function(done) {
      var entry = {};

      loggingBunyan.log_.entry = function() { return entry; };

      loggingBunyan.log_[STACKDRIVER_LEVEL] = function(entry_, callback) {
        assert.strictEqual(entry_, entry);
        callback();
        done();
      };

      loggingBunyan.write(RECORD);
    });

  });

  describe('level translation', function() {
    var STACKDRIVER_LEVELS = {
      emergency: 0,
      alert: 1,
      critical: 2,
      error: 3,
      warning: 4,
      notice: 5,
      info: 6,
      debug: 7
    };

    // Bunyan to stackdriver mapping.
    var LEVEL_MAP = {
      'fatal': 'critical',
      'error': 'error',
      'warn': 'warning',
      'info': 'info',
      'debug': 'debug',
      'trace': 'debug'
    };

    var buffer;
    var logger;

    before(function() {
      // Add mock functions for each log level.
      Object.keys(STACKDRIVER_LEVELS)
          .forEach(function(level) {
            loggingBunyan.log_[level] = function(entry, cb) {
              buffer.push({level: level, entry: entry});
              setImmediate(function() { cb(null, true); });
            };
          });

      // Use a logger at the highest level so that everything gets logged.
      logger = bunyan.createLogger(
          {name: 'testLog', streams: [loggingBunyan.stream('trace')]});
    });

    // Clear buffer before each test.
    beforeEach(function() { buffer = []; });

    Object.keys(LEVEL_MAP).forEach(function(bunyanLevel) {
      var stackdriverLevel = LEVEL_MAP[bunyanLevel];

      it('should use correct logging level for bunyan level ' + bunyanLevel,
         function(done) {
           logger[bunyanLevel]('hello');
           setTimeout(function() {
             assert.strictEqual(buffer[0].level, stackdriverLevel);
             done();
           }, 10);
         });

    });
  });

  describe('multiple loggers', function() {
    var buffer;

    beforeEach(function() {
      buffer = [];
      loggingBunyan.log_.entry = function(meta, data) {
        return {meta: meta, data: data};
      };
      loggingBunyan.log_.info = function(entry, cb) {
        buffer.push(entry);
        setImmediate(function() { cb(null, true); });
      };
    });

    it('should function for multiple loggers', function(done) {
      var logs = ['logA', 'logA', 'logB'];
      var loggers = logs.map(function(logName) {
        return bunyan.createLogger(
            {name: logName, streams: [loggingBunyan.stream('trace')]});
      });


      // For each logger, write a message
      for (var i = 0; i < logs.length; i++) {
        loggers[i].info(logs[i]);
      }

      setTimeout(function() {
        assert.equal(buffer.length, loggers.length);
        var logA = buffer.filter(function(payload) {
          return payload.data.msg === 'logA';
        });
        var logB = buffer.filter(function(payload) {
          return payload.data.msg === 'logB';
        });
        assert.equal(logA.length, 2);
        assert.equal(logB.length, 1);
        done();
      }, 10);
    });
  });
});