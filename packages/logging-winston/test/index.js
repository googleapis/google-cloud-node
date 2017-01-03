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
var proxyquire = require('proxyquire');
var util = require('util');

describe('logging-winston', function() {
  var fakeLogEntry_;
  var fakeLogLevel_;

  var fakeLogInstance = {
    entry: function(metadata, message) {
      return {metadata: metadata, message: message}
    },
  };

  ['emergency', 'alert', 'critical', 'error', 'warning', 'notice', 'info',
   'debug']
      .forEach(function(level) {
        fakeLogInstance[level] = function(entry, cb) {
          fakeLogLevel_ = level;
          fakeLogEntry_ = entry;
          setImmediate(cb);
        }
      });

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
    level: 'levelThree',
    levels: {levelOne: 1, levelTwo: 2, levelThree: 3, levelFour: 4},
    logName: 'log-name',
    resource: {}
  };

  before(function() {
    LoggingWinston = proxyquire('../src/index.js', {
      '@google-cloud/logging': fakeLogging,
      winston: fakeWinston
    });
  });

  beforeEach(function() {
    fakeLogEntry_ = null;
    fakeLogLevel_ = null;
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
      delete optionsWithoutLevels.level;

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

    it('should throw on invalid options.level', function() {
      var optionsWithoutLevels = extend({}, OPTIONS);
      delete optionsWithoutLevels.levels;

      assert.throws(function () {
        new LoggingWinston(optionsWithoutLevels);
      }, /invalid options\.level: levelThree/);

      assert.throws(function () {
        new LoggingWinston(extend({}, OPTIONS, {level: 'err'}));
      }, /invalid options\.level: err/);

    });

    it('should throw on invalid options.levels', function() {
      assert.throws(function() {
        new LoggingWinston(
            extend({}, OPTIONS, {levels: {a: 0, b: 1, c: 3, d: 6, e: 9}}));
      }, /invalid options\.levels: e:9/);
      assert.throws(function() {
        new LoggingWinston(
            extend({}, OPTIONS, {levels: {9: 0, 7: 1, 8: 3, 1: 'foo', 0: 6}}));
      }, /invalid options\.levels: 1:foo/);
    });
  });

  describe('log', function() {
    it('should throw on a bad log level', function() {
      assert.throws(function() {
        loggingWinston.log('non-existent-level', 'test log message');
      }, /Unknown log level/);
    });

    it('should call back once completed', function(done) {
      loggingWinston.log('levelOne', 'level one message', function(err) {
        assert.ifError(err);
        done();
      });
    });

    it('should call into stackdriver logging properly formatted entry',
       function(done) {
         var message = 'a message to be logged';
         loggingWinston.log('levelOne', message, function(err) {
           assert.strictEqual(fakeLogLevel_, 'alert');
           assert.deepEqual(fakeLogEntry_, {
             message: message,
             metadata: {resource: OPTIONS.resource, labels: {}}
           });
           done();
         });
       });

    it('should convert metadata values using util.inspect', function(done) {
      var message = 'test message with labels';
      var metadata = {
        testDate: new Date(1),
        testFunction: function foo() { return 'some value'; },
        deepObject: {a: {b: {c: {d: {e: 1}}}}},
        testNumber: 5
      };
      loggingWinston.log('levelTwo', message, metadata, function(err) {
        assert.strictEqual(fakeLogLevel_, 'critical');
        var expectedLabels = {};
        for (var key in metadata) {
          expectedLabels[key] = util.inspect(metadata[key]);
        }
        assert.deepEqual(fakeLogEntry_, {
          message: message,
          metadata: {resource: OPTIONS.resource, labels: expectedLabels}
        });
        done();
      });
    });

  });
});