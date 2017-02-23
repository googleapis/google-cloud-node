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

var assert = require('assert');
var extractFromErrorClass = require('../../src/error-extractors/error.js');
var ErrorMessage = require('../../src/classes/error-message.js');


describe('Writing and reading ErrorMessage properties', function () {
  describe('Message field', function () {
    it('Should set the message as the stack of the given error', function () {
      var TEST_MESSAGE = "This is a test";
      var em = new ErrorMessage();
      var err = new Error(TEST_MESSAGE);
      extractFromErrorClass(err, em);
      assert.deepEqual(em.message, err.stack, 'Given a valid message the ' +
        'error message should absorb the error stack as the message'
      );
    });
  });
  describe('User field', function () { 
    var em, err;
    var TEST_USER_INVALID = 12;
    beforeEach(function () {
      em = new ErrorMessage();
      err = new Error();
    });
    it('Should set the user field if given valid input', function () {
      var TEST_USER_VALID = "TEST_USER";
      err.user = TEST_USER_VALID;
      extractFromErrorClass(err, em);
      assert.strictEqual(em.context.user, TEST_USER_VALID);
    });
    it('Should default the user field if given invalid input', function () {
      err.user = TEST_USER_INVALID;
      extractFromErrorClass(err, em);
      assert.strictEqual(em.context.user, '');
    });
  });
  describe('Service field', function () {
    var em, err;
    var TEST_SERVICE_DEFAULT = {service: 'node', version: undefined};
    beforeEach(function () {
      em = new ErrorMessage();
      err = new Error();
    });
    it('Should set the field if given valid input', function () {
      var TEST_SERVICE_VALID = {service: 'test', version: 'test'};
      err.serviceContext = TEST_SERVICE_VALID;
      extractFromErrorClass(err, em);
      assert.deepEqual(err.serviceContext, TEST_SERVICE_VALID);
    });
    it('Should default the field if given invalid input', function () {
      var TEST_SERVICE_INVALID = 12;
      err.serviceContext = TEST_SERVICE_INVALID;
      extractFromErrorClass(err, em);
      assert.deepEqual(em.serviceContext, TEST_SERVICE_DEFAULT);
    });
    it('Should default the field if not given input', function () {
      extractFromErrorClass(err, em);
      assert.deepEqual(em.serviceContext, TEST_SERVICE_DEFAULT);
    });
  });
  describe('Report location field', function () {
    var em, err;
    var TEST_STACK_DEFAULT = {
      filePath: ""
      , lineNumber: 0
      , functionName: ""
    };
    beforeEach(function () {
      em = new ErrorMessage();
      err = new Error();
    })
    it('Should default the field if given invalid input', function () {
      var TEST_STACK_INVALID_CONTENTS = {
        filePath: null
        , lineNumber: "2"
        , functionName: {}
      };
      err.stack = TEST_STACK_INVALID_CONTENTS;
      extractFromErrorClass(err, em);
      assert.deepEqual(em.context.reportLocation, TEST_STACK_DEFAULT);
    });
    it('Should default field if not given a valid type', function () {
      var TEST_STACK_INVALID_TYPE = [];
      err.stack = TEST_STACK_INVALID_TYPE;
      extractFromErrorClass(err, em);
      assert.deepEqual(em.context.reportLocation, TEST_STACK_DEFAULT);
    });
  });
});
