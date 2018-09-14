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

const iotModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('DeviceManagerClient', () => {
  describe('createDeviceRegistry', () => {
    it('invokes createDeviceRegistry without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const deviceRegistry = {};
      const request = {
        parent: formattedParent,
        deviceRegistry: deviceRegistry,
      };

      // Mock response
      const id = 'id3355';
      const name = 'name3373707';
      const expectedResponse = {
        id: id,
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.createDeviceRegistry = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createDeviceRegistry(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createDeviceRegistry with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const deviceRegistry = {};
      const request = {
        parent: formattedParent,
        deviceRegistry: deviceRegistry,
      };

      // Mock Grpc layer
      client._innerApiCalls.createDeviceRegistry = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createDeviceRegistry(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getDeviceRegistry', () => {
    it('invokes getDeviceRegistry without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.registryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const id = 'id3355';
      const name2 = 'name2-1052831874';
      const expectedResponse = {
        id: id,
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.getDeviceRegistry = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getDeviceRegistry(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getDeviceRegistry with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.registryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getDeviceRegistry = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getDeviceRegistry(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateDeviceRegistry', () => {
    it('invokes updateDeviceRegistry without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const deviceRegistry = {};
      const updateMask = {};
      const request = {
        deviceRegistry: deviceRegistry,
        updateMask: updateMask,
      };

      // Mock response
      const id = 'id3355';
      const name = 'name3373707';
      const expectedResponse = {
        id: id,
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateDeviceRegistry = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateDeviceRegistry(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateDeviceRegistry with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const deviceRegistry = {};
      const updateMask = {};
      const request = {
        deviceRegistry: deviceRegistry,
        updateMask: updateMask,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateDeviceRegistry = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateDeviceRegistry(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteDeviceRegistry', () => {
    it('invokes deleteDeviceRegistry without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.registryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteDeviceRegistry = mockSimpleGrpcMethod(
        request
      );

      client.deleteDeviceRegistry(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteDeviceRegistry with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.registryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteDeviceRegistry = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteDeviceRegistry(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listDeviceRegistries', () => {
    it('invokes listDeviceRegistries without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
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
      const deviceRegistriesElement = {};
      const deviceRegistries = [deviceRegistriesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        deviceRegistries: deviceRegistries,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDeviceRegistries = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.deviceRegistries);
      };

      client.listDeviceRegistries(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.deviceRegistries);
        done();
      });
    });

    it('invokes listDeviceRegistries with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDeviceRegistries = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listDeviceRegistries(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createDevice', () => {
    it('invokes createDevice without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.registryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]'
      );
      const device = {};
      const request = {
        parent: formattedParent,
        device: device,
      };

      // Mock response
      const id = 'id3355';
      const name = 'name3373707';
      const numId = 1034366860;
      const blocked = true;
      const expectedResponse = {
        id: id,
        name: name,
        numId: numId,
        blocked: blocked,
      };

      // Mock Grpc layer
      client._innerApiCalls.createDevice = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createDevice(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createDevice with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.registryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]'
      );
      const device = {};
      const request = {
        parent: formattedParent,
        device: device,
      };

      // Mock Grpc layer
      client._innerApiCalls.createDevice = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createDevice(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getDevice', () => {
    it('invokes getDevice without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.devicePath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]',
        '[DEVICE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const id = 'id3355';
      const name2 = 'name2-1052831874';
      const numId = 1034366860;
      const blocked = true;
      const expectedResponse = {
        id: id,
        name: name2,
        numId: numId,
        blocked: blocked,
      };

      // Mock Grpc layer
      client._innerApiCalls.getDevice = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getDevice(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getDevice with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.devicePath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]',
        '[DEVICE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getDevice = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getDevice(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateDevice', () => {
    it('invokes updateDevice without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const device = {};
      const updateMask = {};
      const request = {
        device: device,
        updateMask: updateMask,
      };

      // Mock response
      const id = 'id3355';
      const name = 'name3373707';
      const numId = 1034366860;
      const blocked = true;
      const expectedResponse = {
        id: id,
        name: name,
        numId: numId,
        blocked: blocked,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateDevice = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateDevice(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateDevice with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const device = {};
      const updateMask = {};
      const request = {
        device: device,
        updateMask: updateMask,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateDevice = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateDevice(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteDevice', () => {
    it('invokes deleteDevice without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.devicePath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]',
        '[DEVICE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteDevice = mockSimpleGrpcMethod(request);

      client.deleteDevice(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteDevice with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.devicePath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]',
        '[DEVICE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteDevice = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteDevice(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listDevices', () => {
    it('invokes listDevices without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.registryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const devicesElement = {};
      const devices = [devicesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        devices: devices,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDevices = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.devices);
      };

      client.listDevices(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.devices);
        done();
      });
    });

    it('invokes listDevices with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.registryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDevices = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listDevices(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('modifyCloudToDeviceConfig', () => {
    it('invokes modifyCloudToDeviceConfig without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.devicePath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]',
        '[DEVICE]'
      );
      const binaryData = '40';
      const request = {
        name: formattedName,
        binaryData: binaryData,
      };

      // Mock response
      const version = 351608024;
      const binaryData2 = '-37';
      const expectedResponse = {
        version: version,
        binaryData: binaryData2,
      };

      // Mock Grpc layer
      client._innerApiCalls.modifyCloudToDeviceConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.modifyCloudToDeviceConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes modifyCloudToDeviceConfig with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.devicePath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]',
        '[DEVICE]'
      );
      const binaryData = '40';
      const request = {
        name: formattedName,
        binaryData: binaryData,
      };

      // Mock Grpc layer
      client._innerApiCalls.modifyCloudToDeviceConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.modifyCloudToDeviceConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listDeviceConfigVersions', () => {
    it('invokes listDeviceConfigVersions without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.devicePath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]',
        '[DEVICE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listDeviceConfigVersions = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listDeviceConfigVersions(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listDeviceConfigVersions with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.devicePath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]',
        '[DEVICE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDeviceConfigVersions = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listDeviceConfigVersions(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listDeviceStates', () => {
    it('invokes listDeviceStates without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.devicePath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]',
        '[DEVICE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listDeviceStates = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listDeviceStates(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listDeviceStates with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.devicePath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]',
        '[DEVICE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDeviceStates = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listDeviceStates(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setIamPolicy', () => {
    it('invokes setIamPolicy without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.registryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]'
      );
      const policy = {};
      const request = {
        resource: formattedResource,
        policy: policy,
      };

      // Mock response
      const version = 351608024;
      const etag = '21';
      const expectedResponse = {
        version: version,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.setIamPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setIamPolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setIamPolicy with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.registryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]'
      );
      const policy = {};
      const request = {
        resource: formattedResource,
        policy: policy,
      };

      // Mock Grpc layer
      client._innerApiCalls.setIamPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setIamPolicy(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getIamPolicy', () => {
    it('invokes getIamPolicy without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.registryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]'
      );
      const request = {
        resource: formattedResource,
      };

      // Mock response
      const version = 351608024;
      const etag = '21';
      const expectedResponse = {
        version: version,
        etag: etag,
      };

      // Mock Grpc layer
      client._innerApiCalls.getIamPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getIamPolicy(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getIamPolicy with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.registryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]'
      );
      const request = {
        resource: formattedResource,
      };

      // Mock Grpc layer
      client._innerApiCalls.getIamPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getIamPolicy(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('testIamPermissions', () => {
    it('invokes testIamPermissions without error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.registryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]'
      );
      const permissions = [];
      const request = {
        resource: formattedResource,
        permissions: permissions,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.testIamPermissions = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.testIamPermissions(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes testIamPermissions with error', done => {
      const client = new iotModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.registryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[REGISTRY]'
      );
      const permissions = [];
      const request = {
        resource: formattedResource,
        permissions: permissions,
      };

      // Mock Grpc layer
      client._innerApiCalls.testIamPermissions = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.testIamPermissions(request, (err, response) => {
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
