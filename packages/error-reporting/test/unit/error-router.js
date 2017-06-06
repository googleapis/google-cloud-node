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

var ErrorMessage = require('../../src/classes/error-message.js');
var errorHandlerRouter = require('../../src/error-router.js');

var TEST_USER_INVALID = 12;
var TEST_MESSAGE = 'This is a test';
var TEST_SERVICE_DEFAULT = {service: 'node', version: undefined};
var TEST_STACK_DEFAULT = {
      filePath: '',
      lineNumber: 0,
      functionName: ''
    };

describe('error-router', function() {
  var em;
  var adversarialObjectInput = {
    stack: {}
  };
  var adversarialObjectInputTwo = {
    stack: []
  };
  beforeEach(function() {
    em = new ErrorMessage();
  });

  it('Should not throw given undefined', function() {
    assert.doesNotThrow(errorHandlerRouter.bind(null, undefined, em));
  });

  it('Should not throw given null', function() {
    assert.doesNotThrow(errorHandlerRouter.bind(null, null, em));
  });

  it('Should not throw given a string', function() {
    assert.doesNotThrow(errorHandlerRouter.bind(null, 'string_test', em));
  });

  it('Should not throw given a number', function() {
    assert.doesNotThrow(errorHandlerRouter.bind(null, 1.2, em));
  });

  it('Should not throw given an array', function() {
    assert.doesNotThrow(errorHandlerRouter.bind(null, [], em));
  });

  it('Should not throw given an object', function() {
    assert.doesNotThrow(errorHandlerRouter.bind(null, {}, em));
  });

  it('Should not throw given an instance of Error', function() {
    assert.doesNotThrow(errorHandlerRouter.bind(null, new Error(), em));
  });

  it('Should not throw given an object of invalid form', function() {
    assert.doesNotThrow(
      errorHandlerRouter.bind(null, adversarialObjectInput, em));
    assert.doesNotThrow(
      errorHandlerRouter.bind(null, adversarialObjectInputTwo, em));
  });

  it('Message field: Should set the message as the stack of the given error', function() {
    var err = new Error(TEST_MESSAGE);
    errorHandlerRouter(err, em);
    assert.deepEqual(em.message, err.stack, 'Given a valid message the ' +
      'error message should absorb the error stack as the message'
   );
  });

  it('User field: Should set the user field if given valid input', function() {
    var err = new Error();
    var TEST_USER_VALID = 'TEST_USER';
    err.user = TEST_USER_VALID;
    errorHandlerRouter(err, em);
    assert.strictEqual(em.context.user, TEST_USER_VALID);
  });

  it('User field: Should default the user field if given invalid input', function() {
    var err = new Error();
    err.user = TEST_USER_INVALID;
    errorHandlerRouter(err, em);
    assert.strictEqual(em.context.user, '');
  });

  it('Service field: Should set the field if given valid input', function() {
    var err = new Error();
    var TEST_SERVICE_VALID = {service: 'test', version: 'test'};
    err.serviceContext = TEST_SERVICE_VALID;
    errorHandlerRouter(err, em);
    assert.deepEqual(err.serviceContext, TEST_SERVICE_VALID);
  });

  it('Service field: Should default the field if given invalid input', function() {
    var err = new Error();
    var TEST_SERVICE_INVALID = 12;
    err.serviceContext = TEST_SERVICE_INVALID;
    errorHandlerRouter(err, em);
    assert.deepEqual(em.serviceContext, TEST_SERVICE_DEFAULT);
  });

  it('Service field: Should default the field if not given input', function() {
    var err = new Error();
    errorHandlerRouter(err, em);
    assert.deepEqual(em.serviceContext, TEST_SERVICE_DEFAULT);
  });

  it('Report location field: Should default the field if given invalid input', function() {
    var TEST_STACK_INVALID_CONTENTS = {
      filePath: null,
      lineNumber: '2',
      functionName: {}
    };
    var err = new Error();
    err.stack = TEST_STACK_INVALID_CONTENTS;
    errorHandlerRouter(err, em);
    assert.deepEqual(em.context.reportLocation, TEST_STACK_DEFAULT);
  });

  it('Report location field: Should default field if not given a valid type', function() {
    var err = new Error();
    var TEST_STACK_INVALID_TYPE = [];
    err.stack = TEST_STACK_INVALID_TYPE;
    errorHandlerRouter(err, em);
    assert.deepEqual(em.context.reportLocation, TEST_STACK_DEFAULT);
  });

  it('Message Field: Should write to the field given valid input', function() {
    var err = {};
    var MESSAGE = 'test';
    err = {message: MESSAGE};
    errorHandlerRouter(err, em);
    assert.strictEqual(em.message, MESSAGE);
  });

  it('Message Field: Should default the field given lack-of input', function() {
    var err = {};
    errorHandlerRouter(err, em);
    assert.strictEqual(em.message, '');
  });

  it('User field: Should write to the field given valid input', function() {
    var err = {};
    var USER = 'test';
    err.user = USER;
    errorHandlerRouter(err, em);
    assert.strictEqual(em.context.user, USER);
  });

  it('User field: Should default the field given lack-of input', function() {
    var err = {};
    errorHandlerRouter(err, em);
    assert.strictEqual(em.context.user, '');
  });

  it('FilePath Field: Should write to the field given valid input', function() {
    var err = {};
    var PATH = 'test';
    err.filePath = PATH;
    errorHandlerRouter(err, em);
    assert.strictEqual(em.context.reportLocation.filePath, PATH);
  });

  it('FilePath Field: Should default the field given lack-of input', function() {
    var err = {};
    errorHandlerRouter(err, em);
    assert.strictEqual(em.context.reportLocation.filePath, '');
  });

  it('LineNumber Field: Should write to the field given valid input', function() {
    var err = {};
    var LINE_NUMBER = 10;
    err.lineNumber = LINE_NUMBER;
    errorHandlerRouter(err, em);
    assert.strictEqual(em.context.reportLocation.lineNumber, LINE_NUMBER);
  });

  it('LineNumber Field: Should default the field given lack-of input', function() {
    var err = {};
    errorHandlerRouter(err, em);
    assert.strictEqual(em.context.reportLocation.lineNumber, 0);
  });

  it('FunctionName Field: Should write to the field given valid input', function() {
    var err = {};
    var FUNCTION_NAME = 'test';
    err.functionName = FUNCTION_NAME;
    errorHandlerRouter(err, em);
    assert.strictEqual(em.context.reportLocation.functionName, FUNCTION_NAME);
  });

  it('FunctionName Field: Should default the field given lack-of input', function() {
    var err = {};
    errorHandlerRouter(err, em);
    assert.strictEqual(em.context.reportLocation.functionName, '');
  });

  it('ServiceContext Field: Should write to the field given valid input', function() {
    var err = {};
    var TEST_SERVICE_VALID = {service: 'test', version: 'test'};
    err.serviceContext = TEST_SERVICE_VALID;
    errorHandlerRouter(err, em);
    assert.deepEqual(em.serviceContext, TEST_SERVICE_VALID);
  });

  it('ServiceContext Field: Should default the field given invalid input', function() {
    var err = {};
    var TEST_SERVICE_INVALID = 12;
    err.serviceContext = TEST_SERVICE_INVALID;
    errorHandlerRouter(err, em);
    assert.deepEqual(em.serviceContext, TEST_SERVICE_DEFAULT);
  });

  it('ServiceContext Field: Should default the field given lack-of input', function() {
    var err = {};
    errorHandlerRouter(err, em);
    assert.deepEqual(em.serviceContext, TEST_SERVICE_DEFAULT);
  });
});
