/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var assert = require('assert');
var CustomStackTrace = require('../../../src/classes/custom-stack-trace.js');

describe('Fuzzing the CustomStackTrace class', function() {
  var testFunction = function testFunction() {
    return '';
  };
  var cs;
  beforeEach(function() { cs = new CustomStackTrace(); });
  it('Should accept value for file path', function() {
    cs.setFilePath('test');
    assert(
      cs.filePath === 'test',
      'Setting a valid string on the CustomStackTrace.filePath instance ' +
      'should result in assignment'
   );
  });
  it('Should reject invalid type for file path', function() {
    cs.setFilePath(null);
    assert(
      cs.filePath === '',
      'Setting an invalid type on the CustomStackTrace.filePath instance ' +
      'should result in default value of an empty string'
   );
  });
  it('Should accept value for line number', function() {
    cs.setLineNumber(10);
    assert(
      cs.lineNumber === 10,
      'Setting a valid number on the CustomStackTrace.lineNumber instance ' +
      'should result in assignment'
   );
  });
  it('Should reject invalid type for line number', function() {
    cs.setLineNumber('10');
    assert(
      cs.lineNumber === 0,
      'Setting an invalid type on the CustomStackTrace.lineNumber instance ' +
      'should result in default value of number 0'
   );
  });
  it('Should accept value for call list', function() {
    cs.setStringifyStructuredCallList(testFunction);
    assert.strictEqual(
      cs.stringifyStucturedCallList,
      testFunction,
      'Setting a valid function on the CustomStackTrace. ' +
      'setStringifyStructuredCallList should result in assignment'
   );
  });
  it('Should reject incalid value for call list', function() {
    cs.setStringifyStructuredCallList(null);
    assert(
      ((typeof cs.setStringifyStructuredCallList) === 'function'),
      'Setting an invalid setStringifyStructuredCallList on the ' +
      'CustomStackTrace. setStringifyStructuredCallList should result in a ' +
      'default value of a function'
   );
  });
});
