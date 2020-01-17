// Copyright 2020 Google LLC
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
const {describe, it} = require('mocha');

const assetModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('AssetServiceClient', () => {
  it('has servicePath', () => {
    const servicePath = assetModule.v1p2beta1.AssetServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = assetModule.v1p2beta1.AssetServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = assetModule.v1p2beta1.AssetServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new assetModule.v1p2beta1.AssetServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new assetModule.v1p2beta1.AssetServiceClient({
      fallback: true,
    });
    assert(client);
  });

  describe('exportAssets', function() {
    it('invokes exportAssets without error', done => {
      const client = new assetModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const outputConfig = {};
      const request = {
        parent: parent,
        outputConfig: outputConfig,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.exportAssets = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .exportAssets(request)
        .then(responses => {
          const operation = responses[0];
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
      const client = new assetModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const outputConfig = {};
      const request = {
        parent: parent,
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
          const operation = responses[0];
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
      const client = new assetModule.v1p2beta1.AssetServiceClient({
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
      const client = new assetModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const assetNames = [];
      const contentType = 'CONTENT_TYPE_UNSPECIFIED';
      const request = {
        parent: parent,
        assetNames: assetNames,
        contentType: contentType,
      };

      // Mock response
      const expectedResponse = {};

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
      const client = new assetModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const assetNames = [];
      const contentType = 'CONTENT_TYPE_UNSPECIFIED';
      const request = {
        parent: parent,
        assetNames: assetNames,
        contentType: contentType,
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

  describe('createFeed', () => {
    it('invokes createFeed without error', done => {
      const client = new assetModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const feedId = 'feedId-976011428';
      const feed = {};
      const request = {
        parent: parent,
        feedId: feedId,
        feed: feed,
      };

      // Mock response
      const name = 'name3373707';
      const expectedResponse = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.createFeed = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createFeed(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createFeed with error', done => {
      const client = new assetModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const feedId = 'feedId-976011428';
      const feed = {};
      const request = {
        parent: parent,
        feedId: feedId,
        feed: feed,
      };

      // Mock Grpc layer
      client._innerApiCalls.createFeed = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createFeed(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getFeed', () => {
    it('invokes getFeed without error', done => {
      const client = new assetModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.feedPath('[PROJECT]', '[FEED]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const expectedResponse = {
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.getFeed = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getFeed(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getFeed with error', done => {
      const client = new assetModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.feedPath('[PROJECT]', '[FEED]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getFeed = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getFeed(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listFeeds', () => {
    it('invokes listFeeds without error', done => {
      const client = new assetModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const request = {
        parent: parent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listFeeds = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listFeeds(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listFeeds with error', done => {
      const client = new assetModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const parent = 'parent-995424086';
      const request = {
        parent: parent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listFeeds = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listFeeds(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateFeed', () => {
    it('invokes updateFeed without error', done => {
      const client = new assetModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const feed = {};
      const updateMask = {};
      const request = {
        feed: feed,
        updateMask: updateMask,
      };

      // Mock response
      const name = 'name3373707';
      const expectedResponse = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateFeed = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateFeed(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateFeed with error', done => {
      const client = new assetModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const feed = {};
      const updateMask = {};
      const request = {
        feed: feed,
        updateMask: updateMask,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateFeed = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateFeed(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteFeed', () => {
    it('invokes deleteFeed without error', done => {
      const client = new assetModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.feedPath('[PROJECT]', '[FEED]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteFeed = mockSimpleGrpcMethod(request);

      client.deleteFeed(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteFeed with error', done => {
      const client = new assetModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.feedPath('[PROJECT]', '[FEED]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteFeed = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteFeed(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
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
    const mockOperation = {
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
