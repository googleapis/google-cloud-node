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
var util = require('util');
var winston = require('winston');

var env = require('../../../system-test/env.js');

var logging = require('@google-cloud/logging')(env);
var LoggingWinston = require('../');

describe('LoggingWinston', function() {
  var WRITE_CONSISTENCY_DELAY_MS = 20000;

  var logger = new winston.Logger({
    transports: [
      new LoggingWinston(env)
    ]
  });

  describe('log', function() {
    var testTimestamp = new Date();

    var testData = [
      {
        args: ['first'],
        level: 'info',
        verify: function(entry) {
          assert.deepStrictEqual(entry.data, {message: 'first'});
        }
      },

      {
        args: ['second'],
        level: 'info',
        verify: function(entry) {
          assert.deepStrictEqual(entry.data, {message: 'second'});
        }
      },

      {
        args: ['third', {testTimestamp: testTimestamp}],
        level: 'info',
        verify: function(entry) {
          assert.deepStrictEqual(entry.data, {message: 'third'});

          assert.strictEqual(
            entry.metadata.labels.testTimestamp,
            util.inspect(testTimestamp)
          );
        }
      },

      {
        args: [new Error('forth')],
        level: 'error',
        verify: function(entry) {
          assert(entry.data.message.startsWith('Error: forth'));
        }
      },

      {
        args: ['fifth message', new Error('fifth')],
        level: 'error',
        verify: function(entry) {
          assert(entry.data.message.startsWith('fifth message Error: fifth'));
        }
      },
    ];

    it('should properly write log entries', function(done) {
      testData.forEach(function(test) {
        logger[test.level].apply(logger, test.args);
      });

      setTimeout(function() {
        logging.log('winston_log').getEntries({
          pageSize: testData.length
        }, function(err, entries) {
          assert.ifError(err);

          assert.strictEqual(entries.length, testData.length);

          entries
            .reverse()
            .forEach(function(entry, index) {
              var test = testData[index];
              test.verify(entry);
            });

          done();
        });
      }, WRITE_CONSISTENCY_DELAY_MS);
    });
  });
});
