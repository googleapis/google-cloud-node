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
var proxyquire = require('proxyquire');

var fakeOperation = {};
var fakeService = {};
var fakeServiceObject = {};
var fakeGrpc = {};

describe('grpc-common', function() {
  var grpcCommon;

  before(function() {
    grpcCommon = proxyquire('../src/index.js', {
      './operation.js': fakeOperation,
      './service.js': fakeService,
      './service-object.js': fakeServiceObject,
      grpc: fakeGrpc
    });
  });

  it('should correctly export the common modules', function() {
    assert.deepEqual(grpcCommon, {
      Operation: fakeOperation,
      Service: fakeService,
      ServiceObject: fakeServiceObject,
      grpc: fakeGrpc
    });
  });
});
