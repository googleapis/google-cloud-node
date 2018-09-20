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

const monitoringModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('AlertPolicyServiceClient', () => {
  describe('listAlertPolicies', () => {
    it('invokes listAlertPolicies without error', done => {
      const client = new monitoringModule.v3.AlertPolicyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const nextPageToken = '';
      const alertPoliciesElement = {};
      const alertPolicies = [alertPoliciesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        alertPolicies: alertPolicies,
      };

      // Mock Grpc layer
      client._innerApiCalls.listAlertPolicies = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.alertPolicies);
      };

      client.listAlertPolicies(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.alertPolicies);
        done();
      });
    });

    it('invokes listAlertPolicies with error', done => {
      const client = new monitoringModule.v3.AlertPolicyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.listAlertPolicies = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listAlertPolicies(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getAlertPolicy', () => {
    it('invokes getAlertPolicy without error', done => {
      const client = new monitoringModule.v3.AlertPolicyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.alertPolicyPath(
        '[PROJECT]',
        '[ALERT_POLICY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
        name: name2,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getAlertPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getAlertPolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getAlertPolicy with error', done => {
      const client = new monitoringModule.v3.AlertPolicyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.alertPolicyPath(
        '[PROJECT]',
        '[ALERT_POLICY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getAlertPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getAlertPolicy(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createAlertPolicy', () => {
    it('invokes createAlertPolicy without error', done => {
      const client = new monitoringModule.v3.AlertPolicyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const alertPolicy = {};
      const request = {
        name: formattedName,
        alertPolicy: alertPolicy,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
        name: name2,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.createAlertPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createAlertPolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createAlertPolicy with error', done => {
      const client = new monitoringModule.v3.AlertPolicyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const alertPolicy = {};
      const request = {
        name: formattedName,
        alertPolicy: alertPolicy,
      };

      // Mock Grpc layer
      client._innerApiCalls.createAlertPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createAlertPolicy(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteAlertPolicy', () => {
    it('invokes deleteAlertPolicy without error', done => {
      const client = new monitoringModule.v3.AlertPolicyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.alertPolicyPath(
        '[PROJECT]',
        '[ALERT_POLICY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteAlertPolicy = mockSimpleGrpcMethod(request);

      client.deleteAlertPolicy(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteAlertPolicy with error', done => {
      const client = new monitoringModule.v3.AlertPolicyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.alertPolicyPath(
        '[PROJECT]',
        '[ALERT_POLICY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteAlertPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteAlertPolicy(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('updateAlertPolicy', () => {
    it('invokes updateAlertPolicy without error', done => {
      const client = new monitoringModule.v3.AlertPolicyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const alertPolicy = {};
      const request = {
        alertPolicy: alertPolicy,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
        name: name,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateAlertPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateAlertPolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateAlertPolicy with error', done => {
      const client = new monitoringModule.v3.AlertPolicyServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const alertPolicy = {};
      const request = {
        alertPolicy: alertPolicy,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateAlertPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateAlertPolicy(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});
describe('GroupServiceClient', () => {
  describe('listGroups', () => {
    it('invokes listGroups without error', done => {
      const client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const nextPageToken = '';
      const groupElement = {};
      const group = [groupElement];
      const expectedResponse = {
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
      const client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getGroup', () => {
    it('invokes getGroup without error', done => {
      const client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.groupPath('[PROJECT]', '[GROUP]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const parentName = 'parentName1015022848';
      const filter = 'filter-1274492040';
      const isCluster = false;
      const expectedResponse = {
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
      const client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.groupPath('[PROJECT]', '[GROUP]');
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createGroup', () => {
    it('invokes createGroup without error', done => {
      const client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const group = {};
      const request = {
        name: formattedName,
        group: group,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const parentName = 'parentName1015022848';
      const filter = 'filter-1274492040';
      const isCluster = false;
      const expectedResponse = {
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
      const client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const group = {};
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateGroup', () => {
    it('invokes updateGroup without error', done => {
      const client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const group = {};
      const request = {
        group: group,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const parentName = 'parentName1015022848';
      const filter = 'filter-1274492040';
      const isCluster = false;
      const expectedResponse = {
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
      const client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const group = {};
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteGroup', () => {
    it('invokes deleteGroup without error', done => {
      const client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.groupPath('[PROJECT]', '[GROUP]');
      const request = {
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
      const client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.groupPath('[PROJECT]', '[GROUP]');
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listGroupMembers', () => {
    it('invokes listGroupMembers without error', done => {
      const client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.groupPath('[PROJECT]', '[GROUP]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const nextPageToken = '';
      const totalSize = 705419236;
      const membersElement = {};
      const members = [membersElement];
      const expectedResponse = {
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
      const client = new monitoringModule.v3.GroupServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.groupPath('[PROJECT]', '[GROUP]');
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});
describe('MetricServiceClient', () => {
  describe('listMonitoredResourceDescriptors', () => {
    it('invokes listMonitoredResourceDescriptors without error', done => {
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const nextPageToken = '';
      const resourceDescriptorsElement = {};
      const resourceDescriptors = [resourceDescriptorsElement];
      const expectedResponse = {
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
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getMonitoredResourceDescriptor', () => {
    it('invokes getMonitoredResourceDescriptor without error', done => {
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.monitoredResourceDescriptorPath(
        '[PROJECT]',
        '[MONITORED_RESOURCE_DESCRIPTOR]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const type = 'type3575610';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const expectedResponse = {
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
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.monitoredResourceDescriptorPath(
        '[PROJECT]',
        '[MONITORED_RESOURCE_DESCRIPTOR]'
      );
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listMetricDescriptors', () => {
    it('invokes listMetricDescriptors without error', done => {
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const nextPageToken = '';
      const metricDescriptorsElement = {};
      const metricDescriptors = [metricDescriptorsElement];
      const expectedResponse = {
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
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getMetricDescriptor', () => {
    it('invokes getMetricDescriptor without error', done => {
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.metricDescriptorPath(
        '[PROJECT]',
        '[METRIC_DESCRIPTOR]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const type = 'type3575610';
      const unit = 'unit3594628';
      const description = 'description-1724546052';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
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
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.metricDescriptorPath(
        '[PROJECT]',
        '[METRIC_DESCRIPTOR]'
      );
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createMetricDescriptor', () => {
    it('invokes createMetricDescriptor without error', done => {
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const metricDescriptor = {};
      const request = {
        name: formattedName,
        metricDescriptor: metricDescriptor,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const type = 'type3575610';
      const unit = 'unit3594628';
      const description = 'description-1724546052';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
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
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const metricDescriptor = {};
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteMetricDescriptor', () => {
    it('invokes deleteMetricDescriptor without error', done => {
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.metricDescriptorPath(
        '[PROJECT]',
        '[METRIC_DESCRIPTOR]'
      );
      const request = {
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
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.metricDescriptorPath(
        '[PROJECT]',
        '[METRIC_DESCRIPTOR]'
      );
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listTimeSeries', () => {
    it('invokes listTimeSeries without error', done => {
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const filter = 'filter-1274492040';
      const interval = {};
      const view = 'FULL';
      const request = {
        name: formattedName,
        filter: filter,
        interval: interval,
        view: view,
      };

      // Mock response
      const nextPageToken = '';
      const timeSeriesElement = {};
      const timeSeries = [timeSeriesElement];
      const expectedResponse = {
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
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const filter = 'filter-1274492040';
      const interval = {};
      const view = 'FULL';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createTimeSeries', () => {
    it('invokes createTimeSeries without error', done => {
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const timeSeries = [];
      const request = {
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
      const client = new monitoringModule.v3.MetricServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const timeSeries = [];
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });
});
describe('NotificationChannelServiceClient', () => {
  describe('listNotificationChannelDescriptors', () => {
    it('invokes listNotificationChannelDescriptors without error', done => {
      const client = new monitoringModule.v3.NotificationChannelServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const nextPageToken = '';
      const channelDescriptorsElement = {};
      const channelDescriptors = [channelDescriptorsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        channelDescriptors: channelDescriptors,
      };

      // Mock Grpc layer
      client._innerApiCalls.listNotificationChannelDescriptors = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.channelDescriptors);
      };

      client.listNotificationChannelDescriptors(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.channelDescriptors);
        done();
      });
    });

    it('invokes listNotificationChannelDescriptors with error', done => {
      const client = new monitoringModule.v3.NotificationChannelServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.listNotificationChannelDescriptors = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listNotificationChannelDescriptors(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getNotificationChannelDescriptor', () => {
    it('invokes getNotificationChannelDescriptor without error', done => {
      const client = new monitoringModule.v3.NotificationChannelServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.notificationChannelDescriptorPath(
        '[PROJECT]',
        '[CHANNEL_DESCRIPTOR]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const type = 'type3575610';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const expectedResponse = {
        name: name2,
        type: type,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.getNotificationChannelDescriptor = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getNotificationChannelDescriptor(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getNotificationChannelDescriptor with error', done => {
      const client = new monitoringModule.v3.NotificationChannelServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.notificationChannelDescriptorPath(
        '[PROJECT]',
        '[CHANNEL_DESCRIPTOR]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getNotificationChannelDescriptor = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getNotificationChannelDescriptor(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listNotificationChannels', () => {
    it('invokes listNotificationChannels without error', done => {
      const client = new monitoringModule.v3.NotificationChannelServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const nextPageToken = '';
      const notificationChannelsElement = {};
      const notificationChannels = [notificationChannelsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        notificationChannels: notificationChannels,
      };

      // Mock Grpc layer
      client._innerApiCalls.listNotificationChannels = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.notificationChannels);
      };

      client.listNotificationChannels(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.notificationChannels);
        done();
      });
    });

    it('invokes listNotificationChannels with error', done => {
      const client = new monitoringModule.v3.NotificationChannelServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.listNotificationChannels = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listNotificationChannels(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getNotificationChannel', () => {
    it('invokes getNotificationChannel without error', done => {
      const client = new monitoringModule.v3.NotificationChannelServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.notificationChannelPath(
        '[PROJECT]',
        '[NOTIFICATION_CHANNEL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const type = 'type3575610';
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const expectedResponse = {
        type: type,
        name: name2,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.getNotificationChannel = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getNotificationChannel(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getNotificationChannel with error', done => {
      const client = new monitoringModule.v3.NotificationChannelServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.notificationChannelPath(
        '[PROJECT]',
        '[NOTIFICATION_CHANNEL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getNotificationChannel = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getNotificationChannel(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createNotificationChannel', () => {
    it('invokes createNotificationChannel without error', done => {
      const client = new monitoringModule.v3.NotificationChannelServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const notificationChannel = {};
      const request = {
        name: formattedName,
        notificationChannel: notificationChannel,
      };

      // Mock response
      const type = 'type3575610';
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const expectedResponse = {
        type: type,
        name: name2,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.createNotificationChannel = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createNotificationChannel(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createNotificationChannel with error', done => {
      const client = new monitoringModule.v3.NotificationChannelServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.projectPath('[PROJECT]');
      const notificationChannel = {};
      const request = {
        name: formattedName,
        notificationChannel: notificationChannel,
      };

      // Mock Grpc layer
      client._innerApiCalls.createNotificationChannel = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createNotificationChannel(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateNotificationChannel', () => {
    it('invokes updateNotificationChannel without error', done => {
      const client = new monitoringModule.v3.NotificationChannelServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const notificationChannel = {};
      const request = {
        notificationChannel: notificationChannel,
      };

      // Mock response
      const type = 'type3575610';
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const expectedResponse = {
        type: type,
        name: name,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateNotificationChannel = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateNotificationChannel(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateNotificationChannel with error', done => {
      const client = new monitoringModule.v3.NotificationChannelServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const notificationChannel = {};
      const request = {
        notificationChannel: notificationChannel,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateNotificationChannel = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateNotificationChannel(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteNotificationChannel', () => {
    it('invokes deleteNotificationChannel without error', done => {
      const client = new monitoringModule.v3.NotificationChannelServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.notificationChannelPath(
        '[PROJECT]',
        '[NOTIFICATION_CHANNEL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteNotificationChannel = mockSimpleGrpcMethod(
        request
      );

      client.deleteNotificationChannel(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteNotificationChannel with error', done => {
      const client = new monitoringModule.v3.NotificationChannelServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.notificationChannelPath(
        '[PROJECT]',
        '[NOTIFICATION_CHANNEL]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteNotificationChannel = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteNotificationChannel(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });
});
describe('UptimeCheckServiceClient', () => {
  describe('listUptimeCheckConfigs', () => {
    it('invokes listUptimeCheckConfigs without error', done => {
      const client = new monitoringModule.v3.UptimeCheckServiceClient({
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
      const totalSize = 705419236;
      const uptimeCheckConfigsElement = {};
      const uptimeCheckConfigs = [uptimeCheckConfigsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        totalSize: totalSize,
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
      const client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getUptimeCheckConfig', () => {
    it('invokes getUptimeCheckConfig without error', done => {
      const client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.uptimeCheckConfigPath(
        '[PROJECT]',
        '[UPTIME_CHECK_CONFIG]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const isInternal = true;
      const expectedResponse = {
        name: name2,
        displayName: displayName,
        isInternal: isInternal,
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
      const client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.uptimeCheckConfigPath(
        '[PROJECT]',
        '[UPTIME_CHECK_CONFIG]'
      );
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createUptimeCheckConfig', () => {
    it('invokes createUptimeCheckConfig without error', done => {
      const client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const uptimeCheckConfig = {};
      const request = {
        parent: formattedParent,
        uptimeCheckConfig: uptimeCheckConfig,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const isInternal = true;
      const expectedResponse = {
        name: name,
        displayName: displayName,
        isInternal: isInternal,
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
      const client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const uptimeCheckConfig = {};
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateUptimeCheckConfig', () => {
    it('invokes updateUptimeCheckConfig without error', done => {
      const client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const uptimeCheckConfig = {};
      const request = {
        uptimeCheckConfig: uptimeCheckConfig,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const isInternal = true;
      const expectedResponse = {
        name: name,
        displayName: displayName,
        isInternal: isInternal,
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
      const client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const uptimeCheckConfig = {};
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteUptimeCheckConfig', () => {
    it('invokes deleteUptimeCheckConfig without error', done => {
      const client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.uptimeCheckConfigPath(
        '[PROJECT]',
        '[UPTIME_CHECK_CONFIG]'
      );
      const request = {
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
      const client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.uptimeCheckConfigPath(
        '[PROJECT]',
        '[UPTIME_CHECK_CONFIG]'
      );
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listUptimeCheckIps', () => {
    it('invokes listUptimeCheckIps without error', done => {
      const client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const nextPageToken = '';
      const uptimeCheckIpsElement = {};
      const uptimeCheckIps = [uptimeCheckIpsElement];
      const expectedResponse = {
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
      const client = new monitoringModule.v3.UptimeCheckServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.listUptimeCheckIps = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listUptimeCheckIps(request, (err, response) => {
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
