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
var path = require('path');
var buildStackTrace = require('../../src/build-stack-trace.js');

const SRC_ROOT = path.join(__dirname, '..', '..', 'src');

describe('build-stack-trace', function() {
  it('Should not have a message attached if none is given', function() {
    assert(buildStackTrace().startsWith('    at'));
    assert(!buildStackTrace(undefined).startsWith('undefined'));
    assert(!buildStackTrace(null).startsWith('null'));
  });

  it('Should attach a message if given', function() {
    assert(buildStackTrace('Some Message').startsWith('Some Message\n'));
  });

  it('Should not contain error-reporting specific frames', function() {
    (function functionA() {
      (function functionB() {
        (function functionC() {
          var stackTrace = buildStackTrace();
          assert(stackTrace);
          assert.strictEqual(stackTrace.indexOf(SRC_ROOT), -1);
        })();
      })();
    })();
  });

  it('Should return the stack trace', function() {
    (function functionA() {
      (function functionB() {
        (function functionC() {
          var stackTrace = buildStackTrace();
          assert(stackTrace);
          assert.notStrictEqual(stackTrace.indexOf('functionA'), -1);
          assert.notStrictEqual(stackTrace.indexOf('functionB'), -1);
          assert.notStrictEqual(stackTrace.indexOf('functionC'), -1);
        })();
      })();
    })();
  });
});
