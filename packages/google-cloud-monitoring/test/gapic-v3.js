// Copyright 2017, Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const assert = require('assert');

const monitoringModule = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('GroupServiceClient', () => {
  describe('listGroups', () => {
    it('invokes listGroups without error', done => {
      var client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[PROJECT]');
      var request = {
        name: formattedName,
      };

      // Mock response
      var nextPageToken = '';
      var groupElement = {};
      var group = [groupElement];
      var expectedResponse = {
        nextPageToken: nextPageToken,
        group: group,
      };

      // Mock Grpc layer
      client._innerApiCalls.listGroups = (actualRequest, options, callback) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.group);
      };

      client.listGroups(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.group);
        done();
      });
    });

    it('invokes listGroups with error', done => {
      var client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[PROJECT]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.listGroups = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listGroups(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getGroup', () => {
    it('invokes getGroup without error', done => {
      var client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.groupPath('[PROJECT]', '[GROUP]');
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var parentName = 'parentName1015022848';
      var filter = 'filter-1274492040';
      var isCluster = false;
      var expectedResponse = {
        name: name2,
        displayName: displayName,
        parentName: parentName,
        filter: filter,
        isCluster: isCluster,
      };

      // Mock Grpc layer
      client._innerApiCalls.getGroup = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getGroup(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getGroup with error', done => {
      var client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.groupPath('[PROJECT]', '[GROUP]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getGroup = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getGroup(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createGroup', () => {
    it('invokes createGroup without error', done => {
      var client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[PROJECT]');
      var group = {};
      var request = {
        name: formattedName,
        group: group,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var parentName = 'parentName1015022848';
      var filter = 'filter-1274492040';
      var isCluster = false;
      var expectedResponse = {
        name: name2,
        displayName: displayName,
        parentName: parentName,
        filter: filter,
        isCluster: isCluster,
      };

      // Mock Grpc layer
      client._innerApiCalls.createGroup = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createGroup(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createGroup with error', done => {
      var client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[PROJECT]');
      var group = {};
      var request = {
        name: formattedName,
        group: group,
      };

      // Mock Grpc layer
      client._innerApiCalls.createGroup = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createGroup(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateGroup', () => {
    it('invokes updateGroup without error', done => {
      var client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var group = {};
      var request = {
        group: group,
      };

      // Mock response
      var name = 'name3373707';
      var displayName = 'displayName1615086568';
      var parentName = 'parentName1015022848';
      var filter = 'filter-1274492040';
      var isCluster = false;
      var expectedResponse = {
        name: name,
        displayName: displayName,
        parentName: parentName,
        filter: filter,
        isCluster: isCluster,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateGroup = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateGroup(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateGroup with error', done => {
      var client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var group = {};
      var request = {
        group: group,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateGroup = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateGroup(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteGroup', () => {
    it('invokes deleteGroup without error', done => {
      var client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.groupPath('[PROJECT]', '[GROUP]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteGroup = mockSimpleGrpcMethod(request);

      client.deleteGroup(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteGroup with error', done => {
      var client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.groupPath('[PROJECT]', '[GROUP]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteGroup = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteGroup(request, err => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listGroupMembers', () => {
    it('invokes listGroupMembers without error', done => {
      var client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.groupPath('[PROJECT]', '[GROUP]');
      var request = {
        name: formattedName,
      };

      // Mock response
      var nextPageToken = '';
      var totalSize = -705419236;
      var membersElement = {};
      var members = [membersElement];
      var expectedResponse = {
        nextPageToken: nextPageToken,
        totalSize: totalSize,
        members: members,
      };

      // Mock Grpc layer
      client._innerApiCalls.listGroupMembers = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.members);
      };

      client.listGroupMembers(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.members);
        done();
      });
    });

    it('invokes listGroupMembers with error', done => {
      var client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.groupPath('[PROJECT]', '[GROUP]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.listGroupMembers = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listGroupMembers(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});
describe('MetricServiceClient', () => {
  describe('listMonitoredResourceDescriptors', () => {
    it('invokes listMonitoredResourceDescriptors without error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[PROJECT]');
      var request = {
        name: formattedName,
      };

      // Mock response
      var nextPageToken = '';
      var resourceDescriptorsElement = {};
      var resourceDescriptors = [resourceDescriptorsElement];
      var expectedResponse = {
        nextPageToken: nextPageToken,
        resourceDescriptors: resourceDescriptors,
      };

      // Mock Grpc layer
      client._innerApiCalls.listMonitoredResourceDescriptors = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.resourceDescriptors);
      };

      client.listMonitoredResourceDescriptors(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.resourceDescriptors);
        done();
      });
    });

    it('invokes listMonitoredResourceDescriptors with error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[PROJECT]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.listMonitoredResourceDescriptors = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listMonitoredResourceDescriptors(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getMonitoredResourceDescriptor', () => {
    it('invokes getMonitoredResourceDescriptor without error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.monitoredResourceDescriptorPath(
        '[PROJECT]',
        '[MONITORED_RESOURCE_DESCRIPTOR]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var type = 'type3575610';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var expectedResponse = {
        name: name2,
        type: type,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.getMonitoredResourceDescriptor = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getMonitoredResourceDescriptor(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getMonitoredResourceDescriptor with error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.monitoredResourceDescriptorPath(
        '[PROJECT]',
        '[MONITORED_RESOURCE_DESCRIPTOR]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getMonitoredResourceDescriptor = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getMonitoredResourceDescriptor(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listMetricDescriptors', () => {
    it('invokes listMetricDescriptors without error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[PROJECT]');
      var request = {
        name: formattedName,
      };

      // Mock response
      var nextPageToken = '';
      var metricDescriptorsElement = {};
      var metricDescriptors = [metricDescriptorsElement];
      var expectedResponse = {
        nextPageToken: nextPageToken,
        metricDescriptors: metricDescriptors,
      };

      // Mock Grpc layer
      client._innerApiCalls.listMetricDescriptors = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.metricDescriptors);
      };

      client.listMetricDescriptors(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.metricDescriptors);
        done();
      });
    });

    it('invokes listMetricDescriptors with error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[PROJECT]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.listMetricDescriptors = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listMetricDescriptors(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getMetricDescriptor', () => {
    it('invokes getMetricDescriptor without error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.metricDescriptorPath(
        '[PROJECT]',
        '[METRIC_DESCRIPTOR]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var type = 'type3575610';
      var unit = 'unit3594628';
      var description = 'description-1724546052';
      var displayName = 'displayName1615086568';
      var expectedResponse = {
        name: name2,
        type: type,
        unit: unit,
        description: description,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getMetricDescriptor = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getMetricDescriptor(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getMetricDescriptor with error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.metricDescriptorPath(
        '[PROJECT]',
        '[METRIC_DESCRIPTOR]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getMetricDescriptor = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getMetricDescriptor(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createMetricDescriptor', () => {
    it('invokes createMetricDescriptor without error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[PROJECT]');
      var metricDescriptor = {};
      var request = {
        name: formattedName,
        metricDescriptor: metricDescriptor,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var type = 'type3575610';
      var unit = 'unit3594628';
      var description = 'description-1724546052';
      var displayName = 'displayName1615086568';
      var expectedResponse = {
        name: name2,
        type: type,
        unit: unit,
        description: description,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.createMetricDescriptor = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createMetricDescriptor(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createMetricDescriptor with error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[PROJECT]');
      var metricDescriptor = {};
      var request = {
        name: formattedName,
        metricDescriptor: metricDescriptor,
      };

      // Mock Grpc layer
      client._innerApiCalls.createMetricDescriptor = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createMetricDescriptor(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteMetricDescriptor', () => {
    it('invokes deleteMetricDescriptor without error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.metricDescriptorPath(
        '[PROJECT]',
        '[METRIC_DESCRIPTOR]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteMetricDescriptor = mockSimpleGrpcMethod(
        request
      );

      client.deleteMetricDescriptor(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteMetricDescriptor with error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.metricDescriptorPath(
        '[PROJECT]',
        '[METRIC_DESCRIPTOR]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteMetricDescriptor = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteMetricDescriptor(request, err => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listTimeSeries', () => {
    it('invokes listTimeSeries without error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[PROJECT]');
      var filter = 'filter-1274492040';
      var interval = {};
      var view = 'FULL';
      var request = {
        name: formattedName,
        filter: filter,
        interval: interval,
        view: view,
      };

      // Mock response
      var nextPageToken = '';
      var timeSeriesElement = {};
      var timeSeries = [timeSeriesElement];
      var expectedResponse = {
        nextPageToken: nextPageToken,
        timeSeries: timeSeries,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTimeSeries = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.timeSeries);
      };

      client.listTimeSeries(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.timeSeries);
        done();
      });
    });

    it('invokes listTimeSeries with error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[PROJECT]');
      var filter = 'filter-1274492040';
      var interval = {};
      var view = 'FULL';
      var request = {
        name: formattedName,
        filter: filter,
        interval: interval,
        view: view,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTimeSeries = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listTimeSeries(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createTimeSeries', () => {
    it('invokes createTimeSeries without error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[PROJECT]');
      var timeSeries = [];
      var request = {
        name: formattedName,
        timeSeries: timeSeries,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTimeSeries = mockSimpleGrpcMethod(request);

      client.createTimeSeries(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes createTimeSeries with error', done => {
      var client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[PROJECT]');
      var timeSeries = [];
      var request = {
        name: formattedName,
        timeSeries: timeSeries,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTimeSeries = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createTimeSeries(request, err => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });
});
describe('UptimeCheckServiceClient', () => {
  describe('listUptimeCheckConfigs', () => {
    it('invokes listUptimeCheckConfigs without error', done => {
      var client = new monitoringModule.v3.UptimeCheckServiceClient({
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
      var uptimeCheckConfigsElement = {};
      var uptimeCheckConfigs = [uptimeCheckConfigsElement];
      var expectedResponse = {
        nextPageToken: nextPageToken,
        uptimeCheckConfigs: uptimeCheckConfigs,
      };

      // Mock Grpc layer
      client._innerApiCalls.listUptimeCheckConfigs = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.uptimeCheckConfigs);
      };

      client.listUptimeCheckConfigs(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.uptimeCheckConfigs);
        done();
      });
    });

    it('invokes listUptimeCheckConfigs with error', done => {
      var client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listUptimeCheckConfigs = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listUptimeCheckConfigs(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getUptimeCheckConfig', () => {
    it('invokes getUptimeCheckConfig without error', done => {
      var client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.uptimeCheckConfigPath(
        '[PROJECT]',
        '[UPTIME_CHECK_CONFIG]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var expectedResponse = {
        name: name2,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getUptimeCheckConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getUptimeCheckConfig with error', done => {
      var client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.uptimeCheckConfigPath(
        '[PROJECT]',
        '[UPTIME_CHECK_CONFIG]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getUptimeCheckConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createUptimeCheckConfig', () => {
    it('invokes createUptimeCheckConfig without error', done => {
      var client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var uptimeCheckConfig = {};
      var request = {
        parent: formattedParent,
        uptimeCheckConfig: uptimeCheckConfig,
      };

      // Mock response
      var name = 'name3373707';
      var displayName = 'displayName1615086568';
      var expectedResponse = {
        name: name,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.createUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createUptimeCheckConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createUptimeCheckConfig with error', done => {
      var client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var uptimeCheckConfig = {};
      var request = {
        parent: formattedParent,
        uptimeCheckConfig: uptimeCheckConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.createUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createUptimeCheckConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateUptimeCheckConfig', () => {
    it('invokes updateUptimeCheckConfig without error', done => {
      var client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var name = 'name3373707';
      var uptimeCheckConfig = {};
      var request = {
        name: name,
        uptimeCheckConfig: uptimeCheckConfig,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var expectedResponse = {
        name: name2,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateUptimeCheckConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateUptimeCheckConfig with error', done => {
      var client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var name = 'name3373707';
      var uptimeCheckConfig = {};
      var request = {
        name: name,
        uptimeCheckConfig: uptimeCheckConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateUptimeCheckConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteUptimeCheckConfig', () => {
    it('invokes deleteUptimeCheckConfig without error', done => {
      var client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.uptimeCheckConfigPath(
        '[PROJECT]',
        '[UPTIME_CHECK_CONFIG]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteUptimeCheckConfig = mockSimpleGrpcMethod(
        request
      );

      client.deleteUptimeCheckConfig(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteUptimeCheckConfig with error', done => {
      var client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.uptimeCheckConfigPath(
        '[PROJECT]',
        '[UPTIME_CHECK_CONFIG]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteUptimeCheckConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteUptimeCheckConfig(request, err => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listUptimeCheckIps', () => {
    it('invokes listUptimeCheckIps without error', done => {
      var client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var request = {};

      // Mock response
      var nextPageToken = '';
      var uptimeCheckIpsElement = {};
      var uptimeCheckIps = [uptimeCheckIpsElement];
      var expectedResponse = {
        nextPageToken: nextPageToken,
        uptimeCheckIps: uptimeCheckIps,
      };

      // Mock Grpc layer
      client._innerApiCalls.listUptimeCheckIps = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.uptimeCheckIps);
      };

      client.listUptimeCheckIps(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.uptimeCheckIps);
        done();
      });
    });

    it('invokes listUptimeCheckIps with error', done => {
      var client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var request = {};

      // Mock Grpc layer
      client._innerApiCalls.listUptimeCheckIps = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listUptimeCheckIps(request, (err, response) => {
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
