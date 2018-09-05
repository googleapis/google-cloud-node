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

const assetModule = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('AssetServiceClient', () => {
  describe('exportAssets', function() {
    it('invokes exportAssets without error', done => {
      var client = new assetModule.v1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var outputConfig = {};
      var request = {
        parent: formattedParent,
        outputConfig: outputConfig,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.exportAssets = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .exportAssets(request)
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

    it('invokes exportAssets with error', done => {
      var client = new assetModule.v1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var outputConfig = {};
      var request = {
        parent: formattedParent,
        outputConfig: outputConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.exportAssets = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .exportAssets(request)
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
      var client = new assetModule.v1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.exportAssets.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.exportAssets.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('batchGetAssetsHistory', () => {
    it('invokes batchGetAssetsHistory without error', done => {
      var client = new assetModule.v1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var contentType = 'CONTENT_TYPE_UNSPECIFIED';
      var readTimeWindow = {};
      var request = {
        parent: formattedParent,
        contentType: contentType,
        readTimeWindow: readTimeWindow,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchGetAssetsHistory = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.batchGetAssetsHistory(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes batchGetAssetsHistory with error', done => {
      var client = new assetModule.v1beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var contentType = 'CONTENT_TYPE_UNSPECIFIED';
      var readTimeWindow = {};
      var request = {
        parent: formattedParent,
        contentType: contentType,
        readTimeWindow: readTimeWindow,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchGetAssetsHistory = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.batchGetAssetsHistory(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
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
