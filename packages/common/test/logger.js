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
var proxyquire = require('proxyquire');

function fakeLogDriver(config) {
  return config;
}

describe('logger base-functionality', function() {
  var logger;

  before(function() {
    logger = proxyquire('../src/logger.js', {
      'log-driver': fakeLogDriver
    });
  });

  it('should create a logger with the correct levels', function() {
    assert.deepEqual(logger().levels, [
      'error',
      'warn',
      'info',
      'debug',
      'silly'
    ]);
  });

  it('should use a specified level', function() {
    var level = 'level';
    assert.strictEqual(logger({ level: level }).level, level);
  });

  it('should treat a single arguments as the level', function() {
    var level = 'level';
    assert.strictEqual(logger(level).level, level);
  });

  it('should default level to error', function() {
    assert.strictEqual(logger().level, 'error');
  });

  describe('formatting', function() {
    var LEVEL = 'level-name';
    var TAG = 'tag-name';
    var MESSAGES = [
      'message-1',
      'message-2'
    ];

    it('should correctly format without a tag', function() {
      var formatted = logger().format(LEVEL, MESSAGES[0], MESSAGES[1]);

      assert.strictEqual(formatted, 'LEVEL-NAME message-1 message-2');
    });

    it('should correctly format with a tag', function() {
      var formatted = logger({
        tag: TAG
      }).format(LEVEL, MESSAGES[0], MESSAGES[1]);

      assert.strictEqual(formatted, 'LEVEL-NAME:tag-name: message-1 message-2');
    });
  });
});
