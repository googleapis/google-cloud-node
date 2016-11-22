/*!
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
var env = require('../../../system-test/env.js');
var winston = require('winston');
var StackdriverTransport = require('../');
var util = require('util');

describe('Logging-winston', function() {
  var WRITE_CONSISTENCY_DELAY_MS = 20000;

  var transport = new StackdriverTransport(env);
  var logger = new winston.Logger({transports: [transport]});


  describe('log', function() {

    var testData = [
      {
        args: ['first'],
        verify: function(entry) { assert.strictEqual(entry.data, 'first'); }
      },

      {
        args: ['second'],
        verify: function(entry) { assert.strictEqual(entry.data, 'second'); }
      },

      {
        args: ['third', {test_timestamp: new Date(5)}],
        verify: function(entry) {
          assert.strictEqual(entry.data, 'third');
          assert.ok(entry.metadata && entry.metadata.labels);
        }
      }

    ];

    it('should properly write log entries to the service', function(done) {
      testData.forEach(function(test) {
        logger.info.apply(logger, test.args);
      });

      setTimeout(function() {
        transport.logger_.getEntries(
            {pageSize: testData.length}, function(err, entries) {
              assert.ifError(err);
              assert.strictEqual(entries.length, testData.length);

              entries.reverse();

              entries.forEach(function(entry, index) {
                var test = testData[index];
                test.verify(entry);
              });
              done();
            });
      }, WRITE_CONSISTENCY_DELAY_MS);
    });

  });
});
