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

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('DataTransferServiceClient', () => {
  describe('getDataSource', () => {
    it('invokes getDataSource without error', done => {
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectDataSourcePath(
        '[PROJECT]',
        '[DATA_SOURCE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var dataSourceId = 'dataSourceId-1015796374';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var clientId = 'clientId-1904089585';
      var supportsMultipleTransfers = true;
      var updateDeadlineSeconds = 991471694;
      var defaultSchedule = 'defaultSchedule-800168235';
      var supportsCustomSchedule = true;
      var helpUrl = 'helpUrl-789431439';
      var defaultDataRefreshWindowDays = 1804935157;
      var manualRunsDisabled = true;
      var expectedResponse = {
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
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectDataSourcePath(
        '[PROJECT]',
        '[DATA_SOURCE]'
      );
      var request = {
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
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listDataSources', () => {
    it('invokes listDataSources without error', done => {
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var nextPageToken = '';
      var dataSourcesElement = {};
      var dataSources = [dataSourcesElement];
      var expectedResponse = {
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
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
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
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createTransferConfig', () => {
    it('invokes createTransferConfig without error', done => {
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var transferConfig = {};
      var request = {
        parent: formattedParent,
        transferConfig: transferConfig,
      };

      // Mock response
      var name = 'name3373707';
      var destinationDatasetId = 'destinationDatasetId1541564179';
      var displayName = 'displayName1615086568';
      var dataSourceId = 'dataSourceId-1015796374';
      var schedule = 'schedule-697920873';
      var dataRefreshWindowDays = 327632845;
      var disabled = true;
      var userId = 147132913;
      var datasetRegion = 'datasetRegion959248539';
      var expectedResponse = {
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
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var transferConfig = {};
      var request = {
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
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateTransferConfig', () => {
    it('invokes updateTransferConfig without error', done => {
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var transferConfig = {};
      var updateMask = {};
      var request = {
        transferConfig: transferConfig,
        updateMask: updateMask,
      };

      // Mock response
      var name = 'name3373707';
      var destinationDatasetId = 'destinationDatasetId1541564179';
      var displayName = 'displayName1615086568';
      var dataSourceId = 'dataSourceId-1015796374';
      var schedule = 'schedule-697920873';
      var dataRefreshWindowDays = 327632845;
      var disabled = true;
      var userId = 147132913;
      var datasetRegion = 'datasetRegion959248539';
      var expectedResponse = {
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
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var transferConfig = {};
      var updateMask = {};
      var request = {
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
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteTransferConfig', () => {
    it('invokes deleteTransferConfig without error', done => {
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      var request = {
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
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      var request = {
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
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('getTransferConfig', () => {
    it('invokes getTransferConfig without error', done => {
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var destinationDatasetId = 'destinationDatasetId1541564179';
      var displayName = 'displayName1615086568';
      var dataSourceId = 'dataSourceId-1015796374';
      var schedule = 'schedule-697920873';
      var dataRefreshWindowDays = 327632845;
      var disabled = true;
      var userId = 147132913;
      var datasetRegion = 'datasetRegion959248539';
      var expectedResponse = {
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
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      var request = {
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
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listTransferConfigs', () => {
    it('invokes listTransferConfigs without error', done => {
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var nextPageToken = '';
      var transferConfigsElement = {};
      var transferConfigs = [transferConfigsElement];
      var expectedResponse = {
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
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
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
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('scheduleTransferRuns', () => {
    it('invokes scheduleTransferRuns without error', done => {
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      var startTime = {};
      var endTime = {};
      var request = {
        parent: formattedParent,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock response
      var expectedResponse = {};

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
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      var startTime = {};
      var endTime = {};
      var request = {
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
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getTransferRun', () => {
    it('invokes getTransferRun without error', done => {
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectRunPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]',
        '[RUN]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var destinationDatasetId = 'destinationDatasetId1541564179';
      var dataSourceId = 'dataSourceId-1015796374';
      var userId = 147132913;
      var schedule = 'schedule-697920873';
      var expectedResponse = {
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
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectRunPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]',
        '[RUN]'
      );
      var request = {
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
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteTransferRun', () => {
    it('invokes deleteTransferRun without error', done => {
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectRunPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]',
        '[RUN]'
      );
      var request = {
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
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectRunPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]',
        '[RUN]'
      );
      var request = {
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
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listTransferRuns', () => {
    it('invokes listTransferRuns without error', done => {
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var nextPageToken = '';
      var transferRunsElement = {};
      var transferRuns = [transferRunsElement];
      var expectedResponse = {
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
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectTransferConfigPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]'
      );
      var request = {
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
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listTransferLogs', () => {
    it('invokes listTransferLogs without error', done => {
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectRunPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]',
        '[RUN]'
      );
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var nextPageToken = '';
      var transferMessagesElement = {};
      var transferMessages = [transferMessagesElement];
      var expectedResponse = {
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
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectRunPath(
        '[PROJECT]',
        '[TRANSFER_CONFIG]',
        '[RUN]'
      );
      var request = {
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
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('checkValidCreds', () => {
    it('invokes checkValidCreds without error', done => {
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectDataSourcePath(
        '[PROJECT]',
        '[DATA_SOURCE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var hasValidCreds = false;
      var expectedResponse = {
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
      var client = new bigqueryDataTransferModule.v1.DataTransferServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectDataSourcePath(
        '[PROJECT]',
        '[DATA_SOURCE]'
      );
      var request = {
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
        assert.equal(err.code, FAKE_STATUS_CODE);
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
