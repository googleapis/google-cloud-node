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

const automlModule = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('PredictionServiceClient', () => {
  describe('predict', () => {
    it('invokes predict without error', done => {
      var client = new automlModule.v1beta1.PredictionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      var payload = {};
      var request = {
        name: formattedName,
        payload: payload,
      };

      // Mock response
      var expectedResponse = {};

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
      var client = new automlModule.v1beta1.PredictionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      var payload = {};
      var request = {
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
});
describe('AutoMlClient', () => {
  describe('createDataset', () => {
    it('invokes createDataset without error', done => {
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var dataset = {};
      var request = {
        parent: formattedParent,
        dataset: dataset,
      };

      // Mock response
      var name = 'name3373707';
      var displayName = 'displayName1615086568';
      var exampleCount = 1517063674;
      var expectedResponse = {
        name: name,
        displayName: displayName,
        exampleCount: exampleCount,
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var dataset = {};
      var request = {
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

  describe('getDataset', () => {
    it('invokes getDataset without error', done => {
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var exampleCount = 1517063674;
      var expectedResponse = {
        name: name2,
        displayName: displayName,
        exampleCount: exampleCount,
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      var request = {
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var nextPageToken = '';
      var datasetsElement = {};
      var datasets = [datasetsElement];
      var expectedResponse = {
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var request = {
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.deleteDataset = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .deleteDataset(request)
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

    it('invokes deleteDataset with error', done => {
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      var request = {
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
      var client = new automlModule.v1beta1.AutoMlClient({
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      var inputConfig = {};
      var request = {
        name: formattedName,
        inputConfig: inputConfig,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.importData = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .importData(request)
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

    it('invokes importData with error', done => {
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      var inputConfig = {};
      var request = {
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
      var client = new automlModule.v1beta1.AutoMlClient({
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      var outputConfig = {};
      var request = {
        name: formattedName,
        outputConfig: outputConfig,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.exportData = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .exportData(request)
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

    it('invokes exportData with error', done => {
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.datasetPath(
        '[PROJECT]',
        '[LOCATION]',
        '[DATASET]'
      );
      var outputConfig = {};
      var request = {
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
      var client = new automlModule.v1beta1.AutoMlClient({
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var model = {};
      var request = {
        parent: formattedParent,
        model: model,
      };

      // Mock response
      var name = 'name3373707';
      var displayName = 'displayName1615086568';
      var datasetId = 'datasetId-2115646910';
      var expectedResponse = {
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

    it('invokes createModel with error', done => {
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var model = {};
      var request = {
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
      var client = new automlModule.v1beta1.AutoMlClient({
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var datasetId = 'datasetId-2115646910';
      var expectedResponse = {
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      var request = {
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var nextPageToken = '';
      var modelElement = {};
      var model = [modelElement];
      var expectedResponse = {
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var request = {
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.deleteModel = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .deleteModel(request)
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

    it('invokes deleteModel with error', done => {
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      var request = {
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
      var client = new automlModule.v1beta1.AutoMlClient({
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

  describe('deployModel', () => {
    it('invokes deployModel without error', done => {
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var done_ = true;
      var expectedResponse = {
        name: name2,
        done: done_,
      };

      // Mock Grpc layer
      client._innerApiCalls.deployModel = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.deployModel(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deployModel with error', done => {
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deployModel = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deployModel(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('undeployModel', () => {
    it('invokes undeployModel without error', done => {
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var done_ = true;
      var expectedResponse = {
        name: name2,
        done: done_,
      };

      // Mock Grpc layer
      client._innerApiCalls.undeployModel = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.undeployModel(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes undeployModel with error', done => {
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.undeployModel = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.undeployModel(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getModelEvaluation', () => {
    it('invokes getModelEvaluation without error', done => {
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.modelEvaluationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]',
        '[MODEL_EVALUATION]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var annotationSpecId = 'annotationSpecId60690191';
      var evaluatedExampleCount = 277565350;
      var expectedResponse = {
        name: name2,
        annotationSpecId: annotationSpecId,
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.modelEvaluationPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]',
        '[MODEL_EVALUATION]'
      );
      var request = {
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

  describe('listModelEvaluations', () => {
    it('invokes listModelEvaluations without error', done => {
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var nextPageToken = '';
      var modelEvaluationElement = {};
      var modelEvaluation = [modelEvaluationElement];
      var expectedResponse = {
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
      var client = new automlModule.v1beta1.AutoMlClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.modelPath(
        '[PROJECT]',
        '[LOCATION]',
        '[MODEL]'
      );
      var request = {
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
