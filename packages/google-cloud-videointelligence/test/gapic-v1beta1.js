// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const assert = require('assert');

const videointelligenceModule = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('VideoIntelligenceServiceClient', () => {
  describe('annotateVideo', function() {
    it('invokes annotateVideo without error', done => {
      var client = new videointelligenceModule.v1beta1.VideoIntelligenceServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      var inputUri = 'gs://demomaker/cat.mp4';
      var featuresElement = 'LABEL_DETECTION';
      var features = [featuresElement];
      var request = {
        inputUri: inputUri,
        features: features,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.annotateVideo = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .annotateVideo(request)
        .then(responses => {
          var operation = responses[0];
          return operation.promise();
        })
        .then(responses => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it('invokes annotateVideo with error', done => {
      var client = new videointelligenceModule.v1beta1.VideoIntelligenceServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      var inputUri = 'gs://demomaker/cat.mp4';
      var featuresElement = 'LABEL_DETECTION';
      var features = [featuresElement];
      var request = {
        inputUri: inputUri,
        features: features,
      };

      // Mock Grpc layer
      client._innerApiCalls.annotateVideo = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .annotateVideo(request)
        .then(responses => {
          var operation = responses[0];
          return operation.promise();
        })
        .then(() => {
          assert.fail();
        })
        .catch(err => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });

    it('has longrunning decoder functions', () => {
      var client = new videointelligenceModule.v1beta1.VideoIntelligenceServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      assert(
        client._descriptors.longrunning.annotateVideo.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.annotateVideo.metadataDecoder instanceof
          Function
      );
    });
  });
});

function mockLongRunningGrpcMethod(expectedRequest, response, error) {
  return request => {
    assert.deepStrictEqual(request, expectedRequest);
    var mockOperation = {
      promise: function() {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error);
          } else {
            resolve([response]);
          }
        });
      },
    };
    return Promise.resolve([mockOperation]);
  };
}
