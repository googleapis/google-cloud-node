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

const containeranalysisModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('ContainerAnalysisV1Beta1Client', () => {
  it('has servicePath', () => {
    const servicePath =
      containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client
        .servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client
        .apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port =
      containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client(
      {fallback: true}
    );
    assert(client);
  });

  describe('setIamPolicy', () => {
    it('invokes setIamPolicy without error', done => {
      const client = new containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedResource = client.notePath('[PROJECT]', '[NOTE]');
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
      const client = new containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedResource = client.notePath('[PROJECT]', '[NOTE]');
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
      const client = new containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedResource = client.notePath('[PROJECT]', '[NOTE]');
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
      const client = new containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedResource = client.notePath('[PROJECT]', '[NOTE]');
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
      const client = new containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedResource = client.notePath('[PROJECT]', '[NOTE]');
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
      const client = new containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedResource = client.notePath('[PROJECT]', '[NOTE]');
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

  describe('getScanConfig', () => {
    it('invokes getScanConfig without error', done => {
      const client = new containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.scanConfigPath('[PROJECT]', '[SCAN_CONFIG]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const description = 'description-1724546052';
      const enabled = false;
      const expectedResponse = {
        name: name2,
        description: description,
        enabled: enabled,
      };

      // Mock Grpc layer
      client._innerApiCalls.getScanConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getScanConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getScanConfig with error', done => {
      const client = new containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.scanConfigPath('[PROJECT]', '[SCAN_CONFIG]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getScanConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getScanConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listScanConfigs', () => {
    it('invokes listScanConfigs without error', done => {
      const client = new containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client(
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
      const scanConfigsElement = {};
      const scanConfigs = [scanConfigsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        scanConfigs: scanConfigs,
      };

      // Mock Grpc layer
      client._innerApiCalls.listScanConfigs = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.scanConfigs);
      };

      client.listScanConfigs(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.scanConfigs);
        done();
      });
    });

    it('invokes listScanConfigs with error', done => {
      const client = new containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client(
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
      client._innerApiCalls.listScanConfigs = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listScanConfigs(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateScanConfig', () => {
    it('invokes updateScanConfig without error', done => {
      const client = new containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.scanConfigPath('[PROJECT]', '[SCAN_CONFIG]');
      const scanConfig = {};
      const request = {
        name: formattedName,
        scanConfig: scanConfig,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const description = 'description-1724546052';
      const enabled = false;
      const expectedResponse = {
        name: name2,
        description: description,
        enabled: enabled,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateScanConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateScanConfig(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateScanConfig with error', done => {
      const client = new containeranalysisModule.v1beta1.ContainerAnalysisV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const formattedName = client.scanConfigPath('[PROJECT]', '[SCAN_CONFIG]');
      const scanConfig = {};
      const request = {
        name: formattedName,
        scanConfig: scanConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateScanConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateScanConfig(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});
describe('GrafeasV1Beta1Client', () => {
  it('has servicePath', () => {
    const servicePath =
      containeranalysisModule.v1beta1.GrafeasV1Beta1Client.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      containeranalysisModule.v1beta1.GrafeasV1Beta1Client.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = containeranalysisModule.v1beta1.GrafeasV1Beta1Client.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
      fallback: true,
    });
    assert(client);
  });

  describe('getOccurrence', () => {
    it('invokes getOccurrence without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.occurrencePath('[PROJECT]', '[OCCURRENCE]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const noteName = 'noteName1780787896';
      const remediation = 'remediation779381797';
      const expectedResponse = {
        name: name2,
        noteName: noteName,
        remediation: remediation,
      };

      // Mock Grpc layer
      client._innerApiCalls.getOccurrence = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getOccurrence(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getOccurrence with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.occurrencePath('[PROJECT]', '[OCCURRENCE]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getOccurrence = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getOccurrence(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listOccurrences', () => {
    it('invokes listOccurrences without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
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
      const occurrencesElement = {};
      const occurrences = [occurrencesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        occurrences: occurrences,
      };

      // Mock Grpc layer
      client._innerApiCalls.listOccurrences = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.occurrences);
      };

      client.listOccurrences(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.occurrences);
        done();
      });
    });

    it('invokes listOccurrences with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listOccurrences = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listOccurrences(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteOccurrence', () => {
    it('invokes deleteOccurrence without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.occurrencePath('[PROJECT]', '[OCCURRENCE]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteOccurrence = mockSimpleGrpcMethod(request);

      client.deleteOccurrence(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteOccurrence with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.occurrencePath('[PROJECT]', '[OCCURRENCE]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteOccurrence = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteOccurrence(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createOccurrence', () => {
    it('invokes createOccurrence without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const occurrence = {};
      const request = {
        parent: formattedParent,
        occurrence: occurrence,
      };

      // Mock response
      const name = 'name3373707';
      const noteName = 'noteName1780787896';
      const remediation = 'remediation779381797';
      const expectedResponse = {
        name: name,
        noteName: noteName,
        remediation: remediation,
      };

      // Mock Grpc layer
      client._innerApiCalls.createOccurrence = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createOccurrence(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createOccurrence with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const occurrence = {};
      const request = {
        parent: formattedParent,
        occurrence: occurrence,
      };

      // Mock Grpc layer
      client._innerApiCalls.createOccurrence = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createOccurrence(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('batchCreateOccurrences', () => {
    it('invokes batchCreateOccurrences without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const occurrences = [];
      const request = {
        parent: formattedParent,
        occurrences: occurrences,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchCreateOccurrences = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.batchCreateOccurrences(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes batchCreateOccurrences with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const occurrences = [];
      const request = {
        parent: formattedParent,
        occurrences: occurrences,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchCreateOccurrences = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.batchCreateOccurrences(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateOccurrence', () => {
    it('invokes updateOccurrence without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.occurrencePath('[PROJECT]', '[OCCURRENCE]');
      const occurrence = {};
      const request = {
        name: formattedName,
        occurrence: occurrence,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const noteName = 'noteName1780787896';
      const remediation = 'remediation779381797';
      const expectedResponse = {
        name: name2,
        noteName: noteName,
        remediation: remediation,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateOccurrence = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateOccurrence(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateOccurrence with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.occurrencePath('[PROJECT]', '[OCCURRENCE]');
      const occurrence = {};
      const request = {
        name: formattedName,
        occurrence: occurrence,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateOccurrence = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateOccurrence(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getOccurrenceNote', () => {
    it('invokes getOccurrenceNote without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.occurrencePath('[PROJECT]', '[OCCURRENCE]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const shortDescription = 'shortDescription-235369287';
      const longDescription = 'longDescription-1747792199';
      const expectedResponse = {
        name: name2,
        shortDescription: shortDescription,
        longDescription: longDescription,
      };

      // Mock Grpc layer
      client._innerApiCalls.getOccurrenceNote = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getOccurrenceNote(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getOccurrenceNote with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.occurrencePath('[PROJECT]', '[OCCURRENCE]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getOccurrenceNote = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getOccurrenceNote(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getNote', () => {
    it('invokes getNote without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.notePath('[PROJECT]', '[NOTE]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const shortDescription = 'shortDescription-235369287';
      const longDescription = 'longDescription-1747792199';
      const expectedResponse = {
        name: name2,
        shortDescription: shortDescription,
        longDescription: longDescription,
      };

      // Mock Grpc layer
      client._innerApiCalls.getNote = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getNote(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getNote with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.notePath('[PROJECT]', '[NOTE]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getNote = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getNote(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listNotes', () => {
    it('invokes listNotes without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
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
      const notesElement = {};
      const notes = [notesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        notes: notes,
      };

      // Mock Grpc layer
      client._innerApiCalls.listNotes = (actualRequest, options, callback) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.notes);
      };

      client.listNotes(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.notes);
        done();
      });
    });

    it('invokes listNotes with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listNotes = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listNotes(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteNote', () => {
    it('invokes deleteNote without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.notePath('[PROJECT]', '[NOTE]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteNote = mockSimpleGrpcMethod(request);

      client.deleteNote(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteNote with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.notePath('[PROJECT]', '[NOTE]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteNote = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteNote(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createNote', () => {
    it('invokes createNote without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const noteId = 'noteId2129224840';
      const note = {};
      const request = {
        parent: formattedParent,
        noteId: noteId,
        note: note,
      };

      // Mock response
      const name = 'name3373707';
      const shortDescription = 'shortDescription-235369287';
      const longDescription = 'longDescription-1747792199';
      const expectedResponse = {
        name: name,
        shortDescription: shortDescription,
        longDescription: longDescription,
      };

      // Mock Grpc layer
      client._innerApiCalls.createNote = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createNote(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createNote with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const noteId = 'noteId2129224840';
      const note = {};
      const request = {
        parent: formattedParent,
        noteId: noteId,
        note: note,
      };

      // Mock Grpc layer
      client._innerApiCalls.createNote = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createNote(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('batchCreateNotes', () => {
    it('invokes batchCreateNotes without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const notes = {};
      const request = {
        parent: formattedParent,
        notes: notes,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchCreateNotes = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.batchCreateNotes(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes batchCreateNotes with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const notes = {};
      const request = {
        parent: formattedParent,
        notes: notes,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchCreateNotes = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.batchCreateNotes(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateNote', () => {
    it('invokes updateNote without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.notePath('[PROJECT]', '[NOTE]');
      const note = {};
      const request = {
        name: formattedName,
        note: note,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const shortDescription = 'shortDescription-235369287';
      const longDescription = 'longDescription-1747792199';
      const expectedResponse = {
        name: name2,
        shortDescription: shortDescription,
        longDescription: longDescription,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateNote = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateNote(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateNote with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.notePath('[PROJECT]', '[NOTE]');
      const note = {};
      const request = {
        name: formattedName,
        note: note,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateNote = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateNote(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listNoteOccurrences', () => {
    it('invokes listNoteOccurrences without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.notePath('[PROJECT]', '[NOTE]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const nextPageToken = '';
      const occurrencesElement = {};
      const occurrences = [occurrencesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        occurrences: occurrences,
      };

      // Mock Grpc layer
      client._innerApiCalls.listNoteOccurrences = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.occurrences);
      };

      client.listNoteOccurrences(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.occurrences);
        done();
      });
    });

    it('invokes listNoteOccurrences with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.notePath('[PROJECT]', '[NOTE]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.listNoteOccurrences = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listNoteOccurrences(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getVulnerabilityOccurrencesSummary', () => {
    it('invokes getVulnerabilityOccurrencesSummary without error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.getVulnerabilityOccurrencesSummary = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getVulnerabilityOccurrencesSummary(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getVulnerabilityOccurrencesSummary with error', done => {
      const client = new containeranalysisModule.v1beta1.GrafeasV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.getVulnerabilityOccurrencesSummary = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getVulnerabilityOccurrencesSummary(request, (err, response) => {
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
