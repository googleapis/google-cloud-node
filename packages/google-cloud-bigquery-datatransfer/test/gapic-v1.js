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

const bigqueryDataTransferModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('DataTransferServiceClient', () => {
  describe('getDataSource', () => {
    it('invokes getDataSource without error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.projectDataSourcePath(
        '[PROJECT]',
        '[DATA_SOURCE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const dataSourceId = 'dataSourceId-1015796374';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const clientId = 'clientId-1904089585';
      const supportsMultipleTransfers = true;
      const updateDeadlineSeconds = 991471694;
      const defaultSchedule = 'defaultSchedule-800168235';
      const supportsCustomSchedule = true;
      const helpUrl = 'helpUrl-789431439';
      const defaultDataRefreshWindowDays = 1804935157;
      const manualRunsDisabled = true;
      const expectedResponse = {
        name: name2,
        dataSourceId: dataSourceId,
        displayName: displayName,
        description: description,
        clientId: clientId,
        supportsMultipleTransfers: supportsMultipleTransfers,
        updateDeadlineSeconds: updateDeadlineSeconds,
        defaultSchedule: defaultSchedule,
        supportsCustomSchedule: supportsCustomSchedule,
        helpUrl: helpUrl,
        defaultDataRefreshWindowDays: defaultDataRefreshWindowDays,
        manualRunsDisabled: manualRunsDisabled,
      };

      // Mock Grpc layer
      client._innerApiCalls.getDataSource = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getDataSource(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getDataSource with error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.projectDataSourcePath(
        '[PROJECT]',
        '[DATA_SOURCE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getDataSource = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getDataSource(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listDataSources', () => {
    it('invokes listDataSources without error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const dataSourcesElement = {};
      const dataSources = [dataSourcesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        dataSources: dataSources,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDataSources = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.dataSources);
      };

      client.listDataSources(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.dataSources);
        done();
      });
    });

    it('invokes listDataSources with error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDataSources = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listDataSources(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createTransferConfig', () => {
    it('invokes createTransferConfig without error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const transferConfig = {};
      const request = {
        parent: formattedParent,
        transferConfig: transferConfig,
      };

      // Mock response
      const name = 'name3373707';
      const destinationDatasetId = 'destinationDatasetId1541564179';
      const displayName = 'displayName1615086568';
      const dataSourceId = 'dataSourceId-1015796374';
      const schedule = 'schedule-697920873';
      const dataRefreshWindowDays = 327632845;
      const disabled = true;
      const userId = 147132913;
      const datasetRegion = 'datasetRegion959248539';
      const expectedResponse = {
        name: name,
        destinationDatasetId: destinationDatasetId,
        displayName: displayName,
        dataSourceId: dataSourceId,
        schedule: schedule,
        dataRefreshWindowDays: dataRefreshWindowDays,
        disabled: disabled,
        userId: userId,
        datasetRegion: datasetRegion,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTransferConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createTransferConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createTransferConfig with error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const transferConfig = {};
      const request = {
        parent: formattedParent,
        transferConfig: transferConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTransferConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createTransferConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateTransferConfig', () => {
    it('invokes updateTransferConfig without error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const transferConfig = {};
      const updateMask = {};
      const request = {
        transferConfig: transferConfig,
        updateMask: updateMask,
      };

      // Mock response
      const name = 'name3373707';
      const destinationDatasetId = 'destinationDatasetId1541564179';
      const displayName = 'displayName1615086568';
      const dataSourceId = 'dataSourceId-1015796374';
      const schedule = 'schedule-697920873';
      const dataRefreshWindowDays = 327632845;
      const disabled = true;
      const userId = 147132913;
      const datasetRegion = 'datasetRegion959248539';
      const expectedResponse = {
        name: name,
        destinationDatasetId: destinationDatasetId,
        displayName: displayName,
        dataSourceId: dataSourceId,
        schedule: schedule,
        dataRefreshWindowDays: dataRefreshWindowDays,
        disabled: disabled,
        userId: userId,
        datasetRegion: datasetRegion,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateTransferConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateTransferConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateTransferConfig with error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const transferConfig = {};
      const updateMask = {};
      const request = {
        transferConfig: transferConfig,
        updateMask: updateMask,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateTransferConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateTransferConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteTransferConfig', () => {
    it('invokes deleteTransferConfig without error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTransferConfig = mockSimpleGrpcMethod(
        request
      );

      client.deleteTransferConfig(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteTransferConfig with error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTransferConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteTransferConfig(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('getTransferConfig', () => {
    it('invokes getTransferConfig without error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const destinationDatasetId = 'destinationDatasetId1541564179';
      const displayName = 'displayName1615086568';
      const dataSourceId = 'dataSourceId-1015796374';
      const schedule = 'schedule-697920873';
      const dataRefreshWindowDays = 327632845;
      const disabled = true;
      const userId = 147132913;
      const datasetRegion = 'datasetRegion959248539';
      const expectedResponse = {
        name: name2,
        destinationDatasetId: destinationDatasetId,
        displayName: displayName,
        dataSourceId: dataSourceId,
        schedule: schedule,
        dataRefreshWindowDays: dataRefreshWindowDays,
        disabled: disabled,
        userId: userId,
        datasetRegion: datasetRegion,
      };

      // Mock Grpc layer
      client._innerApiCalls.getTransferConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getTransferConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getTransferConfig with error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getTransferConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getTransferConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listTransferConfigs', () => {
    it('invokes listTransferConfigs without error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const transferConfigsElement = {};
      const transferConfigs = [transferConfigsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        transferConfigs: transferConfigs,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTransferConfigs = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.transferConfigs);
      };

      client.listTransferConfigs(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.transferConfigs);
        done();
      });
    });

    it('invokes listTransferConfigs with error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTransferConfigs = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listTransferConfigs(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('scheduleTransferRuns', () => {
    it('invokes scheduleTransferRuns without error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedParent = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      const startTime = {};
      const endTime = {};
      const request = {
        parent: formattedParent,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.scheduleTransferRuns = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.scheduleTransferRuns(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes scheduleTransferRuns with error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedParent = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      const startTime = {};
      const endTime = {};
      const request = {
        parent: formattedParent,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.scheduleTransferRuns = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.scheduleTransferRuns(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getTransferRun', () => {
    it('invokes getTransferRun without error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.projectRunPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]',
        '[RUN]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const destinationDatasetId = 'destinationDatasetId1541564179';
      const dataSourceId = 'dataSourceId-1015796374';
      const userId = 147132913;
      const schedule = 'schedule-697920873';
      const expectedResponse = {
        name: name2,
        destinationDatasetId: destinationDatasetId,
        dataSourceId: dataSourceId,
        userId: userId,
        schedule: schedule,
      };

      // Mock Grpc layer
      client._innerApiCalls.getTransferRun = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getTransferRun(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getTransferRun with error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.projectRunPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]',
        '[RUN]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getTransferRun = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getTransferRun(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteTransferRun', () => {
    it('invokes deleteTransferRun without error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.projectRunPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]',
        '[RUN]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTransferRun = mockSimpleGrpcMethod(request);

      client.deleteTransferRun(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteTransferRun with error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.projectRunPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]',
        '[RUN]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTransferRun = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteTransferRun(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listTransferRuns', () => {
    it('invokes listTransferRuns without error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedParent = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const transferRunsElement = {};
      const transferRuns = [transferRunsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        transferRuns: transferRuns,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTransferRuns = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.transferRuns);
      };

      client.listTransferRuns(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.transferRuns);
        done();
      });
    });

    it('invokes listTransferRuns with error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedParent = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTransferRuns = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listTransferRuns(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listTransferLogs', () => {
    it('invokes listTransferLogs without error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedParent = client.projectRunPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]',
        '[RUN]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const transferMessagesElement = {};
      const transferMessages = [transferMessagesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        transferMessages: transferMessages,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTransferLogs = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.transferMessages);
      };

      client.listTransferLogs(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.transferMessages);
        done();
      });
    });

    it('invokes listTransferLogs with error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedParent = client.projectRunPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]',
        '[RUN]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTransferLogs = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listTransferLogs(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('checkValidCreds', () => {
    it('invokes checkValidCreds without error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.projectDataSourcePath(
        '[PROJECT]',
        '[DATA_SOURCE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const hasValidCreds = false;
      const expectedResponse = {
        hasValidCreds: hasValidCreds,
      };

      // Mock Grpc layer
      client._innerApiCalls.checkValidCreds = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.checkValidCreds(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes checkValidCreds with error', done => {
      const client = new bigqueryDataTransferModule.v1.DataTransferServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.projectDataSourcePath(
        '[PROJECT]',
        '[DATA_SOURCE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.checkValidCreds = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.checkValidCreds(request, (err, response) => {
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
