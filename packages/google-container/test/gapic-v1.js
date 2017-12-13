// Copyright 2017, Google LLC All rights reserved.
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

const containerModule = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('ClusterManagerClient', () => {
  describe('listClusters', () => {
    it('invokes listClusters without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var request = {
        projectId: projectId,
        zone: zone,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listClusters = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listClusters(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listClusters with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var request = {
        projectId: projectId,
        zone: zone,
      };

      // Mock Grpc layer
      client._innerApiCalls.listClusters = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listClusters(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getCluster', () => {
    it('invokes getCluster without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock response
      var name = 'name3373707';
      var description = 'description-1724546052';
      var initialNodeCount = 1682564205;
      var loggingService = 'loggingService-1700501035';
      var monitoringService = 'monitoringService1469270462';
      var network = 'network1843485230';
      var clusterIpv4Cidr = 'clusterIpv4Cidr-141875831';
      var subnetwork = 'subnetwork-1302785042';
      var enableKubernetesAlpha = false;
      var labelFingerprint = 'labelFingerprint714995737';
      var selfLink = 'selfLink-1691268851';
      var zone2 = 'zone2-696322977';
      var endpoint = 'endpoint1741102485';
      var initialClusterVersion = 'initialClusterVersion-276373352';
      var currentMasterVersion = 'currentMasterVersion-920953983';
      var currentNodeVersion = 'currentNodeVersion-407476063';
      var createTime = 'createTime-493574096';
      var statusMessage = 'statusMessage-239442758';
      var nodeIpv4CidrSize = 1181176815;
      var servicesIpv4Cidr = 'servicesIpv4Cidr1966438125';
      var currentNodeCount = 178977560;
      var expireTime = 'expireTime-96179731';
      var expectedResponse = {
        name: name,
        description: description,
        initialNodeCount: initialNodeCount,
        loggingService: loggingService,
        monitoringService: monitoringService,
        network: network,
        clusterIpv4Cidr: clusterIpv4Cidr,
        subnetwork: subnetwork,
        enableKubernetesAlpha: enableKubernetesAlpha,
        labelFingerprint: labelFingerprint,
        selfLink: selfLink,
        zone: zone2,
        endpoint: endpoint,
        initialClusterVersion: initialClusterVersion,
        currentMasterVersion: currentMasterVersion,
        currentNodeVersion: currentNodeVersion,
        createTime: createTime,
        statusMessage: statusMessage,
        nodeIpv4CidrSize: nodeIpv4CidrSize,
        servicesIpv4Cidr: servicesIpv4Cidr,
        currentNodeCount: currentNodeCount,
        expireTime: expireTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getCluster with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createCluster', () => {
    it('invokes createCluster without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var cluster = {};
      var request = {
        projectId: projectId,
        zone: zone,
        cluster: cluster,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createCluster with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var cluster = {};
      var request = {
        projectId: projectId,
        zone: zone,
        cluster: cluster,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateCluster', () => {
    it('invokes updateCluster without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var update = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        update: update,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateCluster with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var update = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        update: update,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateNodePool', () => {
    it('invokes updateNodePool without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePoolId = 'nodePoolId1043384033';
      var nodeVersion = 'nodeVersion1790136219';
      var imageType = 'imageType-1442758754';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
        nodeVersion: nodeVersion,
        imageType: imageType,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateNodePool with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePoolId = 'nodePoolId1043384033';
      var nodeVersion = 'nodeVersion1790136219';
      var imageType = 'imageType-1442758754';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
        nodeVersion: nodeVersion,
        imageType: imageType,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolAutoscaling', () => {
    it('invokes setNodePoolAutoscaling without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePoolId = 'nodePoolId1043384033';
      var autoscaling = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
        autoscaling: autoscaling,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolAutoscaling = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNodePoolAutoscaling(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNodePoolAutoscaling with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePoolId = 'nodePoolId1043384033';
      var autoscaling = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
        autoscaling: autoscaling,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolAutoscaling = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNodePoolAutoscaling(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLoggingService', () => {
    it('invokes setLoggingService without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var loggingService = 'loggingService-1700501035';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        loggingService: loggingService,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLoggingService = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLoggingService(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLoggingService with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var loggingService = 'loggingService-1700501035';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        loggingService: loggingService,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLoggingService = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLoggingService(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMonitoringService', () => {
    it('invokes setMonitoringService without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var monitoringService = 'monitoringService1469270462';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        monitoringService: monitoringService,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMonitoringService = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setMonitoringService(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setMonitoringService with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var monitoringService = 'monitoringService1469270462';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        monitoringService: monitoringService,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMonitoringService = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setMonitoringService(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setAddonsConfig', () => {
    it('invokes setAddonsConfig without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var addonsConfig = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        addonsConfig: addonsConfig,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setAddonsConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setAddonsConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setAddonsConfig with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var addonsConfig = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        addonsConfig: addonsConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.setAddonsConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setAddonsConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLocations', () => {
    it('invokes setLocations without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var locations = [];
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        locations: locations,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLocations = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLocations(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLocations with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var locations = [];
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        locations: locations,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLocations = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLocations(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateMaster', () => {
    it('invokes updateMaster without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var masterVersion = 'masterVersion-2139460613';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        masterVersion: masterVersion,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateMaster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateMaster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateMaster with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var masterVersion = 'masterVersion-2139460613';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        masterVersion: masterVersion,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateMaster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateMaster(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMasterAuth', () => {
    it('invokes setMasterAuth without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var action = 'UNKNOWN';
      var update = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        action: action,
        update: update,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMasterAuth = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setMasterAuth(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setMasterAuth with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var action = 'UNKNOWN';
      var update = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        action: action,
        update: update,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMasterAuth = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setMasterAuth(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteCluster', () => {
    it('invokes deleteCluster without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.deleteCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteCluster with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listOperations', () => {
    it('invokes listOperations without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var request = {
        projectId: projectId,
        zone: zone,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listOperations = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listOperations(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listOperations with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var request = {
        projectId: projectId,
        zone: zone,
      };

      // Mock Grpc layer
      client._innerApiCalls.listOperations = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listOperations(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getOperation', () => {
    it('invokes getOperation without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var operationId = 'operationId-274116877';
      var request = {
        projectId: projectId,
        zone: zone,
        operationId: operationId,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.getOperation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getOperation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getOperation with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var operationId = 'operationId-274116877';
      var request = {
        projectId: projectId,
        zone: zone,
        operationId: operationId,
      };

      // Mock Grpc layer
      client._innerApiCalls.getOperation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getOperation(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('cancelOperation', () => {
    it('invokes cancelOperation without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var operationId = 'operationId-274116877';
      var request = {
        projectId: projectId,
        zone: zone,
        operationId: operationId,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelOperation = mockSimpleGrpcMethod(request);

      client.cancelOperation(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes cancelOperation with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var operationId = 'operationId-274116877';
      var request = {
        projectId: projectId,
        zone: zone,
        operationId: operationId,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelOperation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.cancelOperation(request, err => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('getServerConfig', () => {
    it('invokes getServerConfig without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var request = {
        projectId: projectId,
        zone: zone,
      };

      // Mock response
      var defaultClusterVersion = 'defaultClusterVersion111003029';
      var defaultImageType = 'defaultImageType-918225828';
      var expectedResponse = {
        defaultClusterVersion: defaultClusterVersion,
        defaultImageType: defaultImageType,
      };

      // Mock Grpc layer
      client._innerApiCalls.getServerConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getServerConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getServerConfig with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var request = {
        projectId: projectId,
        zone: zone,
      };

      // Mock Grpc layer
      client._innerApiCalls.getServerConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getServerConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listNodePools', () => {
    it('invokes listNodePools without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listNodePools = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listNodePools(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listNodePools with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock Grpc layer
      client._innerApiCalls.listNodePools = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listNodePools(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getNodePool', () => {
    it('invokes getNodePool without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePoolId = 'nodePoolId1043384033';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
      };

      // Mock response
      var name = 'name3373707';
      var initialNodeCount = 1682564205;
      var selfLink = 'selfLink-1691268851';
      var version = 'version351608024';
      var statusMessage = 'statusMessage-239442758';
      var expectedResponse = {
        name: name,
        initialNodeCount: initialNodeCount,
        selfLink: selfLink,
        version: version,
        statusMessage: statusMessage,
      };

      // Mock Grpc layer
      client._innerApiCalls.getNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getNodePool with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePoolId = 'nodePoolId1043384033';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
      };

      // Mock Grpc layer
      client._innerApiCalls.getNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createNodePool', () => {
    it('invokes createNodePool without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePool = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePool: nodePool,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.createNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createNodePool with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePool = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePool: nodePool,
      };

      // Mock Grpc layer
      client._innerApiCalls.createNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteNodePool', () => {
    it('invokes deleteNodePool without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePoolId = 'nodePoolId1043384033';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteNodePool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.deleteNodePool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteNodePool with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePoolId = 'nodePoolId1043384033';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteNodePool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteNodePool(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('rollbackNodePoolUpgrade', () => {
    it('invokes rollbackNodePoolUpgrade without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePoolId = 'nodePoolId1043384033';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.rollbackNodePoolUpgrade = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.rollbackNodePoolUpgrade(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes rollbackNodePoolUpgrade with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePoolId = 'nodePoolId1043384033';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
      };

      // Mock Grpc layer
      client._innerApiCalls.rollbackNodePoolUpgrade = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.rollbackNodePoolUpgrade(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolManagement', () => {
    it('invokes setNodePoolManagement without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePoolId = 'nodePoolId1043384033';
      var management = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
        management: management,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolManagement = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNodePoolManagement(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNodePoolManagement with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePoolId = 'nodePoolId1043384033';
      var management = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
        management: management,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolManagement = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNodePoolManagement(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLabels', () => {
    it('invokes setLabels without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var resourceLabels = {};
      var labelFingerprint = 'labelFingerprint714995737';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        resourceLabels: resourceLabels,
        labelFingerprint: labelFingerprint,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLabels = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLabels(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLabels with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var resourceLabels = {};
      var labelFingerprint = 'labelFingerprint714995737';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        resourceLabels: resourceLabels,
        labelFingerprint: labelFingerprint,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLabels = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLabels(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLegacyAbac', () => {
    it('invokes setLegacyAbac without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var enabled = false;
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        enabled: enabled,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLegacyAbac = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setLegacyAbac(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setLegacyAbac with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var enabled = false;
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        enabled: enabled,
      };

      // Mock Grpc layer
      client._innerApiCalls.setLegacyAbac = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setLegacyAbac(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('startIPRotation', () => {
    it('invokes startIPRotation without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.startIPRotation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.startIPRotation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes startIPRotation with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock Grpc layer
      client._innerApiCalls.startIPRotation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.startIPRotation(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('completeIPRotation', () => {
    it('invokes completeIPRotation without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.completeIPRotation = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.completeIPRotation(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes completeIPRotation with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock Grpc layer
      client._innerApiCalls.completeIPRotation = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.completeIPRotation(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolSize', () => {
    it('invokes setNodePoolSize without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePoolId = 'nodePoolId1043384033';
      var nodeCount = 1539922066;
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
        nodeCount: nodeCount,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolSize = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNodePoolSize(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNodePoolSize with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var nodePoolId = 'nodePoolId1043384033';
      var nodeCount = 1539922066;
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
        nodeCount: nodeCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNodePoolSize = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNodePoolSize(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNetworkPolicy', () => {
    it('invokes setNetworkPolicy without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var networkPolicy = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        networkPolicy: networkPolicy,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNetworkPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setNetworkPolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setNetworkPolicy with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var networkPolicy = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        networkPolicy: networkPolicy,
      };

      // Mock Grpc layer
      client._innerApiCalls.setNetworkPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setNetworkPolicy(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMaintenancePolicy', () => {
    it('invokes setMaintenancePolicy without error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var maintenancePolicy = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        maintenancePolicy: maintenancePolicy,
      };

      // Mock response
      var name = 'name3373707';
      var zone2 = 'zone2-696322977';
      var detail = 'detail-1335224239';
      var statusMessage = 'statusMessage-239442758';
      var selfLink = 'selfLink-1691268851';
      var targetLink = 'targetLink-2084812312';
      var startTime = 'startTime-1573145462';
      var endTime = 'endTime1725551537';
      var expectedResponse = {
        name: name,
        zone: zone2,
        detail: detail,
        statusMessage: statusMessage,
        selfLink: selfLink,
        targetLink: targetLink,
        startTime: startTime,
        endTime: endTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMaintenancePolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setMaintenancePolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setMaintenancePolicy with error', done => {
      var client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var zone = 'zone3744684';
      var clusterId = 'clusterId240280960';
      var maintenancePolicy = {};
      var request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        maintenancePolicy: maintenancePolicy,
      };

      // Mock Grpc layer
      client._innerApiCalls.setMaintenancePolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setMaintenancePolicy(request, (err, response) => {
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
