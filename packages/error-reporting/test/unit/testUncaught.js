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
var isString = require('is').string;
var uncaughtSetup = require('../../src/interfaces/uncaught.js');
var Configuration = require('../fixtures/configuration.js');
var createLogger = require('../../src/logger.js');
var originalHandlers = process.listeners('uncaughtException');
var spawn = require('child_process').spawn;

function reattachOriginalListeners () {
  for (var i = 0; i < originalHandlers.length; i++) {
    process.on('uncaughtException', originalHandlers[i]);
  }
}

// Returns a Configuration object with given value for reportUncaughtExceptions,
// and dummy logger
function getConfig(reportUncaughtExceptions) {
  var c = new Configuration({
    reportUncaughtExceptions: reportUncaughtExceptions
  }, createLogger({logLevel: 4}));
  c.lacksCredentials = function() {
    return false;
  };
  return c;
}

describe('Uncaught exception handler behvaiour', function() {
  var UNCAUGHT  = 'uncaughtException';
  describe('Instantiation', function() {
    beforeEach(function() {process.removeAllListeners(UNCAUGHT);});
    it('Should throw without a configuration', function() {
      assert.throws(uncaughtSetup);
    });
    it('Should not throw given a valid configuration', function() {
      assert.doesNotThrow(uncaughtSetup.bind(null, {}, getConfig(false)));
      assert.doesNotThrow(uncaughtSetup.bind(null, {}, getConfig(true)));
    });
    it('Should return the process object after instantiation', function() {
      assert.strictEqual(process, uncaughtSetup({}, getConfig(true)));
    });
    it('Should not attach a listener to the uncaughtException event if ' +
      'reportUncaughtExceptions is false', function() {
        uncaughtSetup({}, getConfig(false));
        assert.strictEqual(process.listeners(UNCAUGHT).length, 0);
    });
    it('Should attach a listener to the uncaughtException event if ' +
      'reportUncaughtExceptions is true', function() {
        uncaughtSetup({}, getConfig(true));
        assert.strictEqual(process.listeners(UNCAUGHT).length, 1);
    });
  });
  describe('Uncaught exception handling shutdown behaviour', function() {
    before(function() {
      if (!isString(process.env.GOOGLE_APPLICATION_CREDENTIALS) ||
        !isString(process.env.GCLOUD_PROJECT)) {
        return this.skip();
      }
    });
    after(function() {
      reattachOriginalListeners();
    });
    it('Should terminate before 2500ms', function(done) {
      var TERMINATE_MSG = 'Should terminate before 2500ms';
      this.timeout(3500);
      var isolate = spawn('./node_modules/mocha/bin/mocha',
        ['../../test/fixtures/uncaughtExitBehaviour.js'], {env: process.env});
      isolate.on('close', function() {
        done();
      });
      isolate.on('error', function() {
        console.log('Test isolate encountered error:', '\n', arguments);
        assert(false, TERMINATE_MSG);
        done();
      });
    });
  });
});
