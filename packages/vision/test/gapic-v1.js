/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var assert = require('assert');
var vision = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('ImageAnnotatorClient', function() {
  describe('batchAnnotateImages', function() {
    it('invokes batchAnnotateImages without error', function(done) {
      var client = vision.v1();

      // Mock request
      var requests = [];
      var request = {
          requests : requests
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._batchAnnotateImages = mockSimpleGrpcMethod(request, expectedResponse);

      client.batchAnnotateImages(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes batchAnnotateImages with error', function(done) {
      var client = vision.v1();

      // Mock request
      var requests = [];
      var request = {
          requests : requests
      };

      // Mock Grpc layer
      client._batchAnnotateImages = mockSimpleGrpcMethod(request, null, error);

      client.batchAnnotateImages(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

});

function mockSimpleGrpcMethod(expectedRequest, response, error) {
  return function(actualRequest, options, callback) {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
