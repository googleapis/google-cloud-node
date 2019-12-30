// Copyright 2019 Google LLC
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

const datalabelingModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('DataLabelingServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      datalabelingModule.v1beta1.DataLabelingServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      datalabelingModule.v1beta1.DataLabelingServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = datalabelingModule.v1beta1.DataLabelingServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new datalabelingModule.v1beta1.DataLabelingServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
      fallback: true,
    });
    assert(client);
  });

  describe('createDataset', () => {
    it('invokes createDataset without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const dataset = {};
      const request = {
        parent: formattedParent,
        dataset: dataset,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const dataItemCount = 2014260376;
      const expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
        dataItemCount: dataItemCount,
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
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
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

  describe('getDataset', () => {
    it('invokes getDataset without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const dataItemCount = 2014260376;
      const expectedResponse = {
        name: name2,
        displayName: displayName,
        description: description,
        dataItemCount: dataItemCount,
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
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
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
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
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
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
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

  describe('deleteDataset', () => {
    it('invokes deleteDataset without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteDataset = mockSimpleGrpcMethod(request);

      client.deleteDataset(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteDataset with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteDataset = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteDataset(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('importData', function() {
    it('invokes importData without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
      const inputConfig = {};
      const request = {
        name: formattedName,
        inputConfig: inputConfig,
      };

      // Mock response
      const dataset = 'dataset1443214456';
      const totalCount = 407761836;
      const importCount = 1721296907;
      const expectedResponse = {
        dataset: dataset,
        totalCount: totalCount,
        importCount: importCount,
      };

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
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
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
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
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
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
      const annotatedDataset = 'annotatedDataset-1407812655';
      const outputConfig = {};
      const request = {
        name: formattedName,
        annotatedDataset: annotatedDataset,
        outputConfig: outputConfig,
      };

      // Mock response
      const dataset = 'dataset1443214456';
      const totalCount = 407761836;
      const exportCount = 529256252;
      const expectedResponse = {
        dataset: dataset,
        totalCount: totalCount,
        exportCount: exportCount,
      };

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
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
      const annotatedDataset = 'annotatedDataset-1407812655';
      const outputConfig = {};
      const request = {
        name: formattedName,
        annotatedDataset: annotatedDataset,
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
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
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

  describe('getDataItem', () => {
    it('invokes getDataItem without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.dataItemPath(
        '[PROJECT]',
        '[DATASET]',
        '[DATA_ITEM]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const expectedResponse = {
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.getDataItem = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getDataItem(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getDataItem with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.dataItemPath(
        '[PROJECT]',
        '[DATASET]',
        '[DATA_ITEM]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getDataItem = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getDataItem(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listDataItems', () => {
    it('invokes listDataItems without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const dataItemsElement = {};
      const dataItems = [dataItemsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        dataItems: dataItems,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDataItems = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.dataItems);
      };

      client.listDataItems(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.dataItems);
        done();
      });
    });

    it('invokes listDataItems with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDataItems = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listDataItems(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getAnnotatedDataset', () => {
    it('invokes getAnnotatedDataset without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.annotatedDatasetPath(
        '[PROJECT]',
        '[DATASET]',
        '[ANNOTATED_DATASET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const exampleCount = 1517063674;
      const completedExampleCount = 612567290;
      const expectedResponse = {
        name: name2,
        displayName: displayName,
        description: description,
        exampleCount: exampleCount,
        completedExampleCount: completedExampleCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.getAnnotatedDataset = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getAnnotatedDataset(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getAnnotatedDataset with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.annotatedDatasetPath(
        '[PROJECT]',
        '[DATASET]',
        '[ANNOTATED_DATASET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getAnnotatedDataset = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getAnnotatedDataset(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listAnnotatedDatasets', () => {
    it('invokes listAnnotatedDatasets without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const annotatedDatasetsElement = {};
      const annotatedDatasets = [annotatedDatasetsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        annotatedDatasets: annotatedDatasets,
      };

      // Mock Grpc layer
      client._innerApiCalls.listAnnotatedDatasets = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.annotatedDatasets);
      };

      client.listAnnotatedDatasets(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.annotatedDatasets);
        done();
      });
    });

    it('invokes listAnnotatedDatasets with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listAnnotatedDatasets = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listAnnotatedDatasets(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('labelImage', function() {
    it('invokes labelImage without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
      const basicConfig = {};
      const feature = 'FEATURE_UNSPECIFIED';
      const request = {
        parent: formattedParent,
        basicConfig: basicConfig,
        feature: feature,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const exampleCount = 1517063674;
      const completedExampleCount = 612567290;
      const expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
        exampleCount: exampleCount,
        completedExampleCount: completedExampleCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.labelImage = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .labelImage(request)
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

    it('invokes labelImage with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
      const basicConfig = {};
      const feature = 'FEATURE_UNSPECIFIED';
      const request = {
        parent: formattedParent,
        basicConfig: basicConfig,
        feature: feature,
      };

      // Mock Grpc layer
      client._innerApiCalls.labelImage = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .labelImage(request)
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
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.labelImage.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.labelImage.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('labelVideo', function() {
    it('invokes labelVideo without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
      const basicConfig = {};
      const feature = 'FEATURE_UNSPECIFIED';
      const request = {
        parent: formattedParent,
        basicConfig: basicConfig,
        feature: feature,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const exampleCount = 1517063674;
      const completedExampleCount = 612567290;
      const expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
        exampleCount: exampleCount,
        completedExampleCount: completedExampleCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.labelVideo = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .labelVideo(request)
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

    it('invokes labelVideo with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
      const basicConfig = {};
      const feature = 'FEATURE_UNSPECIFIED';
      const request = {
        parent: formattedParent,
        basicConfig: basicConfig,
        feature: feature,
      };

      // Mock Grpc layer
      client._innerApiCalls.labelVideo = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .labelVideo(request)
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
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.labelVideo.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.labelVideo.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('labelText', function() {
    it('invokes labelText without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
      const basicConfig = {};
      const feature = 'FEATURE_UNSPECIFIED';
      const request = {
        parent: formattedParent,
        basicConfig: basicConfig,
        feature: feature,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const exampleCount = 1517063674;
      const completedExampleCount = 612567290;
      const expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
        exampleCount: exampleCount,
        completedExampleCount: completedExampleCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.labelText = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .labelText(request)
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

    it('invokes labelText with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
      const basicConfig = {};
      const feature = 'FEATURE_UNSPECIFIED';
      const request = {
        parent: formattedParent,
        basicConfig: basicConfig,
        feature: feature,
      };

      // Mock Grpc layer
      client._innerApiCalls.labelText = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .labelText(request)
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
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.labelText.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.labelText.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('getExample', () => {
    it('invokes getExample without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.examplePath(
        '[PROJECT]',
        '[DATASET]',
        '[ANNOTATED_DATASET]',
        '[EXAMPLE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const expectedResponse = {
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.getExample = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getExample(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getExample with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.examplePath(
        '[PROJECT]',
        '[DATASET]',
        '[ANNOTATED_DATASET]',
        '[EXAMPLE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getExample = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getExample(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listExamples', () => {
    it('invokes listExamples without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.annotatedDatasetPath(
        '[PROJECT]',
        '[DATASET]',
        '[ANNOTATED_DATASET]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const examplesElement = {};
      const examples = [examplesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        examples: examples,
      };

      // Mock Grpc layer
      client._innerApiCalls.listExamples = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.examples);
      };

      client.listExamples(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.examples);
        done();
      });
    });

    it('invokes listExamples with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.annotatedDatasetPath(
        '[PROJECT]',
        '[DATASET]',
        '[ANNOTATED_DATASET]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listExamples = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listExamples(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createAnnotationSpecSet', () => {
    it('invokes createAnnotationSpecSet without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const annotationSpecSet = {};
      const request = {
        parent: formattedParent,
        annotationSpecSet: annotationSpecSet,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.createAnnotationSpecSet = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createAnnotationSpecSet(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createAnnotationSpecSet with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const annotationSpecSet = {};
      const request = {
        parent: formattedParent,
        annotationSpecSet: annotationSpecSet,
      };

      // Mock Grpc layer
      client._innerApiCalls.createAnnotationSpecSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createAnnotationSpecSet(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getAnnotationSpecSet', () => {
    it('invokes getAnnotationSpecSet without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.annotationSpecSetPath(
        '[PROJECT]',
        '[ANNOTATION_SPEC_SET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const expectedResponse = {
        name: name2,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.getAnnotationSpecSet = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getAnnotationSpecSet(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getAnnotationSpecSet with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.annotationSpecSetPath(
        '[PROJECT]',
        '[ANNOTATION_SPEC_SET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getAnnotationSpecSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getAnnotationSpecSet(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listAnnotationSpecSets', () => {
    it('invokes listAnnotationSpecSets without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const annotationSpecSetsElement = {};
      const annotationSpecSets = [annotationSpecSetsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        annotationSpecSets: annotationSpecSets,
      };

      // Mock Grpc layer
      client._innerApiCalls.listAnnotationSpecSets = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.annotationSpecSets);
      };

      client.listAnnotationSpecSets(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.annotationSpecSets);
        done();
      });
    });

    it('invokes listAnnotationSpecSets with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listAnnotationSpecSets = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listAnnotationSpecSets(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteAnnotationSpecSet', () => {
    it('invokes deleteAnnotationSpecSet without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.annotationSpecSetPath(
        '[PROJECT]',
        '[ANNOTATION_SPEC_SET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteAnnotationSpecSet = mockSimpleGrpcMethod(
        request
      );

      client.deleteAnnotationSpecSet(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteAnnotationSpecSet with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.annotationSpecSetPath(
        '[PROJECT]',
        '[ANNOTATION_SPEC_SET]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteAnnotationSpecSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteAnnotationSpecSet(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createInstruction', function() {
    it('invokes createInstruction without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const instruction = {};
      const request = {
        parent: formattedParent,
        instruction: instruction,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.createInstruction = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .createInstruction(request)
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

    it('invokes createInstruction with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const instruction = {};
      const request = {
        parent: formattedParent,
        instruction: instruction,
      };

      // Mock Grpc layer
      client._innerApiCalls.createInstruction = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .createInstruction(request)
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
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.createInstruction
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.createInstruction
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('getInstruction', () => {
    it('invokes getInstruction without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.instructionPath(
        '[PROJECT]',
        '[INSTRUCTION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const expectedResponse = {
        name: name2,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.getInstruction = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getInstruction(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getInstruction with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.instructionPath(
        '[PROJECT]',
        '[INSTRUCTION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getInstruction = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getInstruction(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listInstructions', () => {
    it('invokes listInstructions without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const instructionsElement = {};
      const instructions = [instructionsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        instructions: instructions,
      };

      // Mock Grpc layer
      client._innerApiCalls.listInstructions = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.instructions);
      };

      client.listInstructions(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.instructions);
        done();
      });
    });

    it('invokes listInstructions with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listInstructions = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listInstructions(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteInstruction', () => {
    it('invokes deleteInstruction without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.instructionPath(
        '[PROJECT]',
        '[INSTRUCTION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteInstruction = mockSimpleGrpcMethod(request);

      client.deleteInstruction(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteInstruction with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.instructionPath(
        '[PROJECT]',
        '[INSTRUCTION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteInstruction = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteInstruction(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('getEvaluation', () => {
    it('invokes getEvaluation without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.evaluationPath(
        '[PROJECT]',
        '[DATASET]',
        '[EVALUATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const evaluatedItemCount = 358077111;
      const expectedResponse = {
        name: name2,
        evaluatedItemCount: evaluatedItemCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.getEvaluation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getEvaluation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getEvaluation with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.evaluationPath(
        '[PROJECT]',
        '[DATASET]',
        '[EVALUATION]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getEvaluation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getEvaluation(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('searchEvaluations', () => {
    it('invokes searchEvaluations without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const filter = 'filter-1274492040';
      const request = {
        parent: formattedParent,
        filter: filter,
      };

      // Mock response
      const nextPageToken = '';
      const evaluationsElement = {};
      const evaluations = [evaluationsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        evaluations: evaluations,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchEvaluations = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.evaluations);
      };

      client.searchEvaluations(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.evaluations);
        done();
      });
    });

    it('invokes searchEvaluations with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const filter = 'filter-1274492040';
      const request = {
        parent: formattedParent,
        filter: filter,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchEvaluations = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.searchEvaluations(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('searchExampleComparisons', () => {
    it('invokes searchExampleComparisons without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.evaluationPath(
        '[PROJECT]',
        '[DATASET]',
        '[EVALUATION]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const exampleComparisonsElement = {};
      const exampleComparisons = [exampleComparisonsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        exampleComparisons: exampleComparisons,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchExampleComparisons = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.exampleComparisons);
      };

      client.searchExampleComparisons(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.exampleComparisons);
        done();
      });
    });

    it('invokes searchExampleComparisons with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.evaluationPath(
        '[PROJECT]',
        '[DATASET]',
        '[EVALUATION]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchExampleComparisons = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.searchExampleComparisons(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createEvaluationJob', () => {
    it('invokes createEvaluationJob without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const job = {};
      const request = {
        parent: formattedParent,
        job: job,
      };

      // Mock response
      const name = 'name3373707';
      const description = 'description-1724546052';
      const schedule = 'schedule-697920873';
      const modelVersion = 'modelVersion-1669102142';
      const annotationSpecSet = 'annotationSpecSet1881405678';
      const labelMissingGroundTruth = false;
      const expectedResponse = {
        name: name,
        description: description,
        schedule: schedule,
        modelVersion: modelVersion,
        annotationSpecSet: annotationSpecSet,
        labelMissingGroundTruth: labelMissingGroundTruth,
      };

      // Mock Grpc layer
      client._innerApiCalls.createEvaluationJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createEvaluationJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createEvaluationJob with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const job = {};
      const request = {
        parent: formattedParent,
        job: job,
      };

      // Mock Grpc layer
      client._innerApiCalls.createEvaluationJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createEvaluationJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateEvaluationJob', () => {
    it('invokes updateEvaluationJob without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const evaluationJob = {};
      const updateMask = {};
      const request = {
        evaluationJob: evaluationJob,
        updateMask: updateMask,
      };

      // Mock response
      const name = 'name3373707';
      const description = 'description-1724546052';
      const schedule = 'schedule-697920873';
      const modelVersion = 'modelVersion-1669102142';
      const annotationSpecSet = 'annotationSpecSet1881405678';
      const labelMissingGroundTruth = false;
      const expectedResponse = {
        name: name,
        description: description,
        schedule: schedule,
        modelVersion: modelVersion,
        annotationSpecSet: annotationSpecSet,
        labelMissingGroundTruth: labelMissingGroundTruth,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateEvaluationJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateEvaluationJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateEvaluationJob with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const evaluationJob = {};
      const updateMask = {};
      const request = {
        evaluationJob: evaluationJob,
        updateMask: updateMask,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateEvaluationJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateEvaluationJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getEvaluationJob', () => {
    it('invokes getEvaluationJob without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.evaluationJobPath(
        '[PROJECT]',
        '[EVALUATION_JOB]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const description = 'description-1724546052';
      const schedule = 'schedule-697920873';
      const modelVersion = 'modelVersion-1669102142';
      const annotationSpecSet = 'annotationSpecSet1881405678';
      const labelMissingGroundTruth = false;
      const expectedResponse = {
        name: name2,
        description: description,
        schedule: schedule,
        modelVersion: modelVersion,
        annotationSpecSet: annotationSpecSet,
        labelMissingGroundTruth: labelMissingGroundTruth,
      };

      // Mock Grpc layer
      client._innerApiCalls.getEvaluationJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getEvaluationJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getEvaluationJob with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.evaluationJobPath(
        '[PROJECT]',
        '[EVALUATION_JOB]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getEvaluationJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getEvaluationJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('pauseEvaluationJob', () => {
    it('invokes pauseEvaluationJob without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.evaluationJobPath(
        '[PROJECT]',
        '[EVALUATION_JOB]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.pauseEvaluationJob = mockSimpleGrpcMethod(request);

      client.pauseEvaluationJob(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes pauseEvaluationJob with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.evaluationJobPath(
        '[PROJECT]',
        '[EVALUATION_JOB]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.pauseEvaluationJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.pauseEvaluationJob(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('resumeEvaluationJob', () => {
    it('invokes resumeEvaluationJob without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.evaluationJobPath(
        '[PROJECT]',
        '[EVALUATION_JOB]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.resumeEvaluationJob = mockSimpleGrpcMethod(request);

      client.resumeEvaluationJob(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes resumeEvaluationJob with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.evaluationJobPath(
        '[PROJECT]',
        '[EVALUATION_JOB]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.resumeEvaluationJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.resumeEvaluationJob(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('deleteEvaluationJob', () => {
    it('invokes deleteEvaluationJob without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.evaluationJobPath(
        '[PROJECT]',
        '[EVALUATION_JOB]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteEvaluationJob = mockSimpleGrpcMethod(request);

      client.deleteEvaluationJob(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteEvaluationJob with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.evaluationJobPath(
        '[PROJECT]',
        '[EVALUATION_JOB]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteEvaluationJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteEvaluationJob(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listEvaluationJobs', () => {
    it('invokes listEvaluationJobs without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const filter = 'filter-1274492040';
      const request = {
        parent: formattedParent,
        filter: filter,
      };

      // Mock response
      const nextPageToken = '';
      const evaluationJobsElement = {};
      const evaluationJobs = [evaluationJobsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        evaluationJobs: evaluationJobs,
      };

      // Mock Grpc layer
      client._innerApiCalls.listEvaluationJobs = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.evaluationJobs);
      };

      client.listEvaluationJobs(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.evaluationJobs);
        done();
      });
    });

    it('invokes listEvaluationJobs with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const filter = 'filter-1274492040';
      const request = {
        parent: formattedParent,
        filter: filter,
      };

      // Mock Grpc layer
      client._innerApiCalls.listEvaluationJobs = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listEvaluationJobs(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteAnnotatedDataset', () => {
    it('invokes deleteAnnotatedDataset without error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.deleteAnnotatedDataset = mockSimpleGrpcMethod(
        request
      );

      client.deleteAnnotatedDataset(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteAnnotatedDataset with error', done => {
      const client = new datalabelingModule.v1beta1.DataLabelingServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.deleteAnnotatedDataset = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteAnnotatedDataset(request, err => {
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
