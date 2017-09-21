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
var videoIntelligence = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('VideoIntelligenceServiceClient', function() {
  describe('annotateVideo', function() {
    it('invokes annotateVideo without error', function(done) {
      var client = videoIntelligence.v1beta2();

      // Mock request
      var inputUri = 'inputUri1707300727';
      var features = [];
      var request = {
          inputUri : inputUri,
          features : features
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._annotateVideo = mockLongRunningGrpcMethod(request, expectedResponse);

      client.annotateVideo(request).then(function(responses) {
        var operation = responses[0];
        return operation.promise();
      }).then(function(responses) {
        assert.deepStrictEqual(responses[0], expectedResponse);
        done();
      }).catch(function(err) {
        done(err);
      });
    });

    it('invokes annotateVideo with error', function(done) {
      var client = videoIntelligence.v1beta2();

      // Mock request
      var inputUri = 'inputUri1707300727';
      var features = [];
      var request = {
          inputUri : inputUri,
          features : features
      };

      // Mock Grpc layer
      client._annotateVideo = mockLongRunningGrpcMethod(request, null, error);

      client.annotateVideo(request).then(function(responses) {
        var operation = responses[0];
        return operation.promise();
      }).then(function(responses) {
        assert.fail();
      }).catch(function(err) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });

    it('ensures longrunning descriptors are set', function() {
      var client = videoIntelligence.v1beta2();
      assert(client.longrunningDescriptors.annotateVideo.responseDecoder instanceof Function);
      assert(client.longrunningDescriptors.annotateVideo.metadataDecoder instanceof Function);
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

function mockLongRunningGrpcMethod(expectedRequest, response, error) {
  return function(request) {
    assert.deepStrictEqual(request, expectedRequest);
    var mockOperation = {
      promise: function() {
        return new Promise(function(resolve, reject) {
          if (error) {
            reject(error);
          } else {
            resolve([response]);
          }
        });
      }
    };
    return Promise.resolve([mockOperation]);
  };
}
