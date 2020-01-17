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

const automlModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('AutoMlClient', () => {
  it('has servicePath', () => {
    const servicePath = automlModule.v1beta1.AutoMlClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = automlModule.v1beta1.AutoMlClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = automlModule.v1beta1.AutoMlClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new automlModule.v1beta1.AutoMlClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new automlModule.v1beta1.AutoMlClient({fallback: true});
    assert(client);
  });

  describe('createDataset', () => {
    it('invokes createDataset without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const dataset = {};
      const request = {
        parent: formattedParent,
        dataset: dataset,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const exampleCount = 1517063674;
      const etag = 'etag3123477';
      const expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
        exampleCount: exampleCount,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.createDataset = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createDataset(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createDataset with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const dataset = {};
      const request = {
        parent: formattedParent,
        dataset: dataset,
      };

      // Mock Grpc layer
      client._innerApiCalls.createDataset = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createDataset(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateDataset', () => {
    it('invokes updateDataset without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const dataset = {};
      const request = {
        dataset: dataset,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const exampleCount = 1517063674;
      const etag = 'etag3123477';
      const expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
        exampleCount: exampleCount,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateDataset = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateDataset(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateDataset with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const dataset = {};
      const request = {
        dataset: dataset,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateDataset = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateDataset(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getDataset', () => {
    it('invokes getDataset without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const exampleCount = 1517063674;
      const etag = 'etag3123477';
      const expectedResponse = {
        name: name2,
        displayName: displayName,
        description: description,
        exampleCount: exampleCount,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.getDataset = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getDataset(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getDataset with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getDataset = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getDataset(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listDatasets', () => {
    it('invokes listDatasets without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const datasetsElement = {};
      const datasets = [datasetsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        datasets: datasets,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDatasets = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.datasets);
      };

      client.listDatasets(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.datasets);
        done();
      });
    });

    it('invokes listDatasets with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDatasets = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listDatasets(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteDataset', function() {
    it('invokes deleteDataset without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.deleteDataset = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .deleteDataset(request)
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

    it('invokes deleteDataset with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteDataset = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .deleteDataset(request)
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
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.deleteDataset.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.deleteDataset.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('importData', function() {
    it('invokes importData without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      const inputConfig = {};
      const request = {
        name: formattedName,
        inputConfig: inputConfig,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.importData = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .importData(request)
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

    it('invokes importData with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      const inputConfig = {};
      const request = {
        name: formattedName,
        inputConfig: inputConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.importData = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .importData(request)
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
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.importData.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.importData.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('exportData', function() {
    it('invokes exportData without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      const outputConfig = {};
      const request = {
        name: formattedName,
        outputConfig: outputConfig,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.exportData = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .exportData(request)
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

    it('invokes exportData with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      const outputConfig = {};
      const request = {
        name: formattedName,
        outputConfig: outputConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.exportData = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .exportData(request)
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
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.exportData.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.exportData.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('createModel', function() {
    it('invokes createModel without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const model = {};
      const request = {
        parent: formattedParent,
        model: model,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const datasetId = 'datasetId-2115646910';
      const expectedResponse = {
        name: name,
        displayName: displayName,
        datasetId: datasetId,
      };

      // Mock Grpc layer
      client._innerApiCalls.createModel = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .createModel(request)
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

    it('invokes createModel with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const model = {};
      const request = {
        parent: formattedParent,
        model: model,
      };

      // Mock Grpc layer
      client._innerApiCalls.createModel = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .createModel(request)
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
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.createModel.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.createModel.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('getModel', () => {
    it('invokes getModel without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const datasetId = 'datasetId-2115646910';
      const expectedResponse = {
        name: name2,
        displayName: displayName,
        datasetId: datasetId,
      };

      // Mock Grpc layer
      client._innerApiCalls.getModel = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getModel(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getModel with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getModel = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getModel(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listModels', () => {
    it('invokes listModels without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const modelElement = {};
      const model = [modelElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        model: model,
      };

      // Mock Grpc layer
      client._innerApiCalls.listModels = (actualRequest, options, callback) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.model);
      };

      client.listModels(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.model);
        done();
      });
    });

    it('invokes listModels with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listModels = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listModels(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteModel', function() {
    it('invokes deleteModel without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.deleteModel = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .deleteModel(request)
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

    it('invokes deleteModel with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteModel = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .deleteModel(request)
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
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.deleteModel.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.deleteModel.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('deployModel', function() {
    it('invokes deployModel without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.deployModel = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .deployModel(request)
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

    it('invokes deployModel with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deployModel = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .deployModel(request)
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
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.deployModel.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.deployModel.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('undeployModel', function() {
    it('invokes undeployModel without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.undeployModel = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .undeployModel(request)
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

    it('invokes undeployModel with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.undeployModel = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .undeployModel(request)
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
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.undeployModel.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.undeployModel.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('getModelEvaluation', () => {
    it('invokes getModelEvaluation without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelEvaluationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]',
        '[MODEL_EVALUATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const annotationSpecId = 'annotationSpecId60690191';
      const displayName = 'displayName1615086568';
      const evaluatedExampleCount = 277565350;
      const expectedResponse = {
        name: name2,
        annotationSpecId: annotationSpecId,
        displayName: displayName,
        evaluatedExampleCount: evaluatedExampleCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.getModelEvaluation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getModelEvaluation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getModelEvaluation with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelEvaluationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]',
        '[MODEL_EVALUATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getModelEvaluation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getModelEvaluation(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('exportModel', function() {
    it('invokes exportModel without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const outputConfig = {};
      const request = {
        name: formattedName,
        outputConfig: outputConfig,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.exportModel = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .exportModel(request)
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

    it('invokes exportModel with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const outputConfig = {};
      const request = {
        name: formattedName,
        outputConfig: outputConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.exportModel = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .exportModel(request)
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
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.exportModel.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.exportModel.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('exportEvaluatedExamples', function() {
    it('invokes exportEvaluatedExamples without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const outputConfig = {};
      const request = {
        name: formattedName,
        outputConfig: outputConfig,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.exportEvaluatedExamples = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .exportEvaluatedExamples(request)
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

    it('invokes exportEvaluatedExamples with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const outputConfig = {};
      const request = {
        name: formattedName,
        outputConfig: outputConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.exportEvaluatedExamples = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .exportEvaluatedExamples(request)
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
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.exportEvaluatedExamples
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.exportEvaluatedExamples
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('listModelEvaluations', () => {
    it('invokes listModelEvaluations without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const modelEvaluationElement = {};
      const modelEvaluation = [modelEvaluationElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        modelEvaluation: modelEvaluation,
      };

      // Mock Grpc layer
      client._innerApiCalls.listModelEvaluations = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.modelEvaluation);
      };

      client.listModelEvaluations(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.modelEvaluation);
        done();
      });
    });

    it('invokes listModelEvaluations with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listModelEvaluations = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listModelEvaluations(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getAnnotationSpec', () => {
    it('invokes getAnnotationSpec without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.annotationSpecPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]',
        '[ANNOTATION_SPEC]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const exampleCount = 1517063674;
      const expectedResponse = {
        name: name2,
        displayName: displayName,
        exampleCount: exampleCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.getAnnotationSpec = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getAnnotationSpec(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getAnnotationSpec with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.annotationSpecPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]',
        '[ANNOTATION_SPEC]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getAnnotationSpec = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getAnnotationSpec(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getTableSpec', () => {
    it('invokes getTableSpec without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.tableSpecPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]',
        '[TABLE_SPEC]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const timeColumnSpecId = 'timeColumnSpecId1558734824';
      const rowCount = 1340416618;
      const validRowCount = 406068761;
      const columnCount = 122671386;
      const etag = 'etag3123477';
      const expectedResponse = {
        name: name2,
        timeColumnSpecId: timeColumnSpecId,
        rowCount: rowCount,
        validRowCount: validRowCount,
        columnCount: columnCount,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.getTableSpec = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getTableSpec(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getTableSpec with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.tableSpecPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]',
        '[TABLE_SPEC]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getTableSpec = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getTableSpec(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listTableSpecs', () => {
    it('invokes listTableSpecs without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const tableSpecsElement = {};
      const tableSpecs = [tableSpecsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        tableSpecs: tableSpecs,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTableSpecs = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.tableSpecs);
      };

      client.listTableSpecs(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.tableSpecs);
        done();
      });
    });

    it('invokes listTableSpecs with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTableSpecs = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listTableSpecs(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateTableSpec', () => {
    it('invokes updateTableSpec without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const tableSpec = {};
      const request = {
        tableSpec: tableSpec,
      };

      // Mock response
      const name = 'name3373707';
      const timeColumnSpecId = 'timeColumnSpecId1558734824';
      const rowCount = 1340416618;
      const validRowCount = 406068761;
      const columnCount = 122671386;
      const etag = 'etag3123477';
      const expectedResponse = {
        name: name,
        timeColumnSpecId: timeColumnSpecId,
        rowCount: rowCount,
        validRowCount: validRowCount,
        columnCount: columnCount,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateTableSpec = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateTableSpec(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateTableSpec with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const tableSpec = {};
      const request = {
        tableSpec: tableSpec,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateTableSpec = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateTableSpec(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getColumnSpec', () => {
    it('invokes getColumnSpec without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.columnSpecPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]',
        '[TABLE_SPEC]',
        '[COLUMN_SPEC]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const etag = 'etag3123477';
      const expectedResponse = {
        name: name2,
        displayName: displayName,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.getColumnSpec = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getColumnSpec(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getColumnSpec with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.columnSpecPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]',
        '[TABLE_SPEC]',
        '[COLUMN_SPEC]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getColumnSpec = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getColumnSpec(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listColumnSpecs', () => {
    it('invokes listColumnSpecs without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.tableSpecPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]',
        '[TABLE_SPEC]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const columnSpecsElement = {};
      const columnSpecs = [columnSpecsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        columnSpecs: columnSpecs,
      };

      // Mock Grpc layer
      client._innerApiCalls.listColumnSpecs = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.columnSpecs);
      };

      client.listColumnSpecs(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.columnSpecs);
        done();
      });
    });

    it('invokes listColumnSpecs with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.tableSpecPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]',
        '[TABLE_SPEC]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listColumnSpecs = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listColumnSpecs(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateColumnSpec', () => {
    it('invokes updateColumnSpec without error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const columnSpec = {};
      const request = {
        columnSpec: columnSpec,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const etag = 'etag3123477';
      const expectedResponse = {
        name: name,
        displayName: displayName,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateColumnSpec = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateColumnSpec(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateColumnSpec with error', done => {
      const client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const columnSpec = {};
      const request = {
        columnSpec: columnSpec,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateColumnSpec = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateColumnSpec(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});
describe('PredictionServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      automlModule.v1beta1.PredictionServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      automlModule.v1beta1.PredictionServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = automlModule.v1beta1.PredictionServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new automlModule.v1beta1.PredictionServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new automlModule.v1beta1.PredictionServiceClient({
      fallback: true,
    });
    assert(client);
  });

  describe('predict', () => {
    it('invokes predict without error', done => {
      const client = new automlModule.v1beta1.PredictionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const payload = {};
      const request = {
        name: formattedName,
        payload: payload,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.predict = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.predict(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes predict with error', done => {
      const client = new automlModule.v1beta1.PredictionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const payload = {};
      const request = {
        name: formattedName,
        payload: payload,
      };

      // Mock Grpc layer
      client._innerApiCalls.predict = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.predict(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('batchPredict', function() {
    it('invokes batchPredict without error', done => {
      const client = new automlModule.v1beta1.PredictionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const inputConfig = {};
      const outputConfig = {};
      const request = {
        name: formattedName,
        inputConfig: inputConfig,
        outputConfig: outputConfig,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchPredict = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .batchPredict(request)
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

    it('invokes batchPredict with error', done => {
      const client = new automlModule.v1beta1.PredictionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      const inputConfig = {};
      const outputConfig = {};
      const request = {
        name: formattedName,
        inputConfig: inputConfig,
        outputConfig: outputConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchPredict = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .batchPredict(request)
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
      const client = new automlModule.v1beta1.PredictionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.batchPredict.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.batchPredict.metadataDecoder instanceof
          Function
      );
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
