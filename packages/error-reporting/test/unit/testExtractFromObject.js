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
var extractFromObject = require('../../src/error-extractors/object.js');
var ErrorMessage = require('../../src/classes/error-message.js');

describe('Object value extraction as error message', function() {
  var em, err;
  beforeEach(function() {
    em = new ErrorMessage();
    err = {};
  });
  describe('Message field', function() {
    it('Should write to the field given valid input', function() {
      var MESSAGE = 'test';
      err = {message: MESSAGE};
      extractFromObject(err, em);
      assert.strictEqual(em.message, MESSAGE);
    });
    it('Should default the field given lack-of input', function() {
      extractFromObject(err, em);
      assert.strictEqual(em.message, '');
    });
  });
  describe('User field', function() {
    it('Should write to the field given valid input', function() {
      var USER = 'test';
      err.user = USER;
      extractFromObject(err, em);
      assert.strictEqual(em.context.user, USER);
    });
    it('Should default the field given lack-of input', function() {
      extractFromObject(err, em);
      assert.strictEqual(em.context.user, '');
    });
  });
  describe('filePath field', function() {
    it('Should write to the field given valid input', function() {
      var PATH = 'test';
      err.filePath = PATH;
      extractFromObject(err, em);
      assert.strictEqual(em.context.reportLocation.filePath, PATH);
    });
    it('Should default the field given lack-of input', function() {
      extractFromObject(err, em);
      assert.strictEqual(em.context.reportLocation.filePath, '');
    });
  });
  describe('lineNumber field', function() {
    it('Should write to the field given valid input', function() {
      var LINE_NUMBER = 10;
      err.lineNumber = LINE_NUMBER;
      extractFromObject(err, em);
      assert.strictEqual(em.context.reportLocation.lineNumber, LINE_NUMBER);
    });
    it('Should default the field given lack-of input', function() {
      extractFromObject(err, em);
      assert.strictEqual(em.context.reportLocation.lineNumber, 0);
    });
  });
  describe('functionName field', function() {
    it('Should write to the field given valid input', function() {
      var FUNCTION_NAME = 'test';
      err.functionName = FUNCTION_NAME;
      extractFromObject(err, em);
      assert.strictEqual(em.context.reportLocation.functionName, FUNCTION_NAME);
    });
    it('Should default the field given lack-of input', function() {
      extractFromObject(err, em);
      assert.strictEqual(em.context.reportLocation.functionName, '');
    });
  });
  describe('serviceContext field', function() {
    var TEST_SERVICE_DEFAULT = {service: 'node', version: undefined};
    it('Should write to the field given valid input', function() {
      var TEST_SERVICE_VALID = {service: 'test', version: 'test'};
      err.serviceContext = TEST_SERVICE_VALID;
      extractFromObject(err, em);
      assert.deepEqual(em.serviceContext, TEST_SERVICE_VALID);
    });
    it('Should default the field given invalid input', function() {
      var TEST_SERVICE_INVALID = 12;
      err.serviceContext = TEST_SERVICE_INVALID;
      extractFromObject(err, em);
      assert.deepEqual(em.serviceContext, TEST_SERVICE_DEFAULT);
    });
    it('Should default the field given lack-of input', function() {
      extractFromObject(err, em);
      assert.deepEqual(em.serviceContext, TEST_SERVICE_DEFAULT);
    });
  });
});
