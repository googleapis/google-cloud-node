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

const containerModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('ClusterManagerClient', () => {
  describe('listClusters', () => {
    it('invokes listClusters without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const request = {
        projectId: projectId,
        zone: zone,
      };

      // Mock response
      const expectedResponse = {};

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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getCluster', () => {
    it('invokes getCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock response
      const name = 'name3373707';
      const description = 'description-1724546052';
      const initialNodeCount = 1682564205;
      const loggingService = 'loggingService-1700501035';
      const monitoringService = 'monitoringService1469270462';
      const network = 'network1843485230';
      const clusterIpv4Cidr = 'clusterIpv4Cidr-141875831';
      const subnetwork = 'subnetwork-1302785042';
      const enableKubernetesAlpha = false;
      const labelFingerprint = 'labelFingerprint714995737';
      const selfLink = 'selfLink-1691268851';
      const zone2 = 'zone2-696322977';
      const endpoint = 'endpoint1741102485';
      const initialClusterVersion = 'initialClusterVersion-276373352';
      const currentMasterVersion = 'currentMasterVersion-920953983';
      const currentNodeVersion = 'currentNodeVersion-407476063';
      const createTime = 'createTime-493574096';
      const statusMessage = 'statusMessage-239442758';
      const nodeIpv4CidrSize = 1181176815;
      const servicesIpv4Cidr = 'servicesIpv4Cidr1966438125';
      const currentNodeCount = 178977560;
      const expireTime = 'expireTime-96179731';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createCluster', () => {
    it('invokes createCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const cluster = {};
      const request = {
        projectId: projectId,
        zone: zone,
        cluster: cluster,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const cluster = {};
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateCluster', () => {
    it('invokes updateCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const update = {};
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        update: update,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const update = {};
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateNodePool', () => {
    it('invokes updateNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePoolId = 'nodePoolId1043384033';
      const nodeVersion = 'nodeVersion1790136219';
      const imageType = 'imageType-1442758754';
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
        nodeVersion: nodeVersion,
        imageType: imageType,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePoolId = 'nodePoolId1043384033';
      const nodeVersion = 'nodeVersion1790136219';
      const imageType = 'imageType-1442758754';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolAutoscaling', () => {
    it('invokes setNodePoolAutoscaling without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePoolId = 'nodePoolId1043384033';
      const autoscaling = {};
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
        autoscaling: autoscaling,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePoolId = 'nodePoolId1043384033';
      const autoscaling = {};
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLoggingService', () => {
    it('invokes setLoggingService without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const loggingService = 'loggingService-1700501035';
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        loggingService: loggingService,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const loggingService = 'loggingService-1700501035';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMonitoringService', () => {
    it('invokes setMonitoringService without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const monitoringService = 'monitoringService1469270462';
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        monitoringService: monitoringService,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const monitoringService = 'monitoringService1469270462';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setAddonsConfig', () => {
    it('invokes setAddonsConfig without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const addonsConfig = {};
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        addonsConfig: addonsConfig,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const addonsConfig = {};
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLocations', () => {
    it('invokes setLocations without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const locations = [];
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        locations: locations,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const locations = [];
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateMaster', () => {
    it('invokes updateMaster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const masterVersion = 'masterVersion-2139460613';
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        masterVersion: masterVersion,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const masterVersion = 'masterVersion-2139460613';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMasterAuth', () => {
    it('invokes setMasterAuth without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const action = 'UNKNOWN';
      const update = {};
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        action: action,
        update: update,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const action = 'UNKNOWN';
      const update = {};
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteCluster', () => {
    it('invokes deleteCluster without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listOperations', () => {
    it('invokes listOperations without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const request = {
        projectId: projectId,
        zone: zone,
      };

      // Mock response
      const expectedResponse = {};

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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getOperation', () => {
    it('invokes getOperation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const operationId = 'operationId-274116877';
      const request = {
        projectId: projectId,
        zone: zone,
        operationId: operationId,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const operationId = 'operationId-274116877';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('cancelOperation', () => {
    it('invokes cancelOperation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const operationId = 'operationId-274116877';
      const request = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const operationId = 'operationId-274116877';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('getServerConfig', () => {
    it('invokes getServerConfig without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const request = {
        projectId: projectId,
        zone: zone,
      };

      // Mock response
      const defaultClusterVersion = 'defaultClusterVersion111003029';
      const defaultImageType = 'defaultImageType-918225828';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listNodePools', () => {
    it('invokes listNodePools without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock response
      const expectedResponse = {};

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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getNodePool', () => {
    it('invokes getNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePoolId = 'nodePoolId1043384033';
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
      };

      // Mock response
      const name = 'name3373707';
      const initialNodeCount = 1682564205;
      const selfLink = 'selfLink-1691268851';
      const version = 'version351608024';
      const statusMessage = 'statusMessage-239442758';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePoolId = 'nodePoolId1043384033';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createNodePool', () => {
    it('invokes createNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePool = {};
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePool: nodePool,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePool = {};
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteNodePool', () => {
    it('invokes deleteNodePool without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePoolId = 'nodePoolId1043384033';
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePoolId = 'nodePoolId1043384033';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('rollbackNodePoolUpgrade', () => {
    it('invokes rollbackNodePoolUpgrade without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePoolId = 'nodePoolId1043384033';
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePoolId = 'nodePoolId1043384033';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolManagement', () => {
    it('invokes setNodePoolManagement without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePoolId = 'nodePoolId1043384033';
      const management = {};
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
        management: management,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePoolId = 'nodePoolId1043384033';
      const management = {};
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLabels', () => {
    it('invokes setLabels without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const resourceLabels = {};
      const labelFingerprint = 'labelFingerprint714995737';
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        resourceLabels: resourceLabels,
        labelFingerprint: labelFingerprint,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const resourceLabels = {};
      const labelFingerprint = 'labelFingerprint714995737';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setLegacyAbac', () => {
    it('invokes setLegacyAbac without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const enabled = false;
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        enabled: enabled,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const enabled = false;
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('startIPRotation', () => {
    it('invokes startIPRotation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('completeIPRotation', () => {
    it('invokes completeIPRotation without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNodePoolSize', () => {
    it('invokes setNodePoolSize without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePoolId = 'nodePoolId1043384033';
      const nodeCount = 1539922066;
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        nodePoolId: nodePoolId,
        nodeCount: nodeCount,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const nodePoolId = 'nodePoolId1043384033';
      const nodeCount = 1539922066;
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setNetworkPolicy', () => {
    it('invokes setNetworkPolicy without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const networkPolicy = {};
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        networkPolicy: networkPolicy,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const networkPolicy = {};
      const request = {
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
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setMaintenancePolicy', () => {
    it('invokes setMaintenancePolicy without error', done => {
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const maintenancePolicy = {};
      const request = {
        projectId: projectId,
        zone: zone,
        clusterId: clusterId,
        maintenancePolicy: maintenancePolicy,
      };

      // Mock response
      const name = 'name3373707';
      const zone2 = 'zone2-696322977';
      const detail = 'detail-1335224239';
      const statusMessage = 'statusMessage-239442758';
      const selfLink = 'selfLink-1691268851';
      const targetLink = 'targetLink-2084812312';
      const startTime = 'startTime-1573145462';
      const endTime = 'endTime1725551537';
      const expectedResponse = {
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
      const client = new containerModule.v1.ClusterManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const zone = 'zone3744684';
      const clusterId = 'clusterId240280960';
      const maintenancePolicy = {};
      const request = {
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
