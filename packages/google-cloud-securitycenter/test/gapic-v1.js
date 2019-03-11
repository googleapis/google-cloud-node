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

const securityCenterModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('SecurityCenterClient', () => {
  describe('createSource', () => {
    it('invokes createSource without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.organizationPath('[ORGANIZATION]');
      const source = {};
      const request = {
        parent: formattedParent,
        source: source,
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
      client._innerApiCalls.createSource = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createSource(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createSource with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.organizationPath('[ORGANIZATION]');
      const source = {};
      const request = {
        parent: formattedParent,
        source: source,
      };

      // Mock Grpc layer
      client._innerApiCalls.createSource = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createSource(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createFinding', () => {
    it('invokes createFinding without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
      const findingId = 'findingId728776081';
      const finding = {};
      const request = {
        parent: formattedParent,
        findingId: findingId,
        finding: finding,
      };

      // Mock response
      const name = 'name3373707';
      const parent2 = 'parent21175163357';
      const resourceName = 'resourceName979421212';
      const category = 'category50511102';
      const externalUri = 'externalUri-1385596168';
      const expectedResponse = {
        name: name,
        parent: parent2,
        resourceName: resourceName,
        category: category,
        externalUri: externalUri,
      };

      // Mock Grpc layer
      client._innerApiCalls.createFinding = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createFinding(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createFinding with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
      const findingId = 'findingId728776081';
      const finding = {};
      const request = {
        parent: formattedParent,
        findingId: findingId,
        finding: finding,
      };

      // Mock Grpc layer
      client._innerApiCalls.createFinding = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createFinding(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getIamPolicy', () => {
    it('invokes getIamPolicy without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
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
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
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

  describe('getOrganizationSettings', () => {
    it('invokes getOrganizationSettings without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.organizationSettingsPath('[ORGANIZATION]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const enableAssetDiscovery = false;
      const expectedResponse = {
        name: name2,
        enableAssetDiscovery: enableAssetDiscovery,
      };

      // Mock Grpc layer
      client._innerApiCalls.getOrganizationSettings = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getOrganizationSettings(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getOrganizationSettings with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.organizationSettingsPath('[ORGANIZATION]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getOrganizationSettings = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getOrganizationSettings(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getSource', () => {
    it('invokes getSource without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
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
      client._innerApiCalls.getSource = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getSource(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getSource with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getSource = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getSource(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('groupAssets', () => {
    it('invokes groupAssets without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.organizationPath('[ORGANIZATION]');
      const groupBy = 'groupBy506361367';
      const request = {
        parent: formattedParent,
        groupBy: groupBy,
      };

      // Mock response
      const nextPageToken = '';
      const totalSize = 705419236;
      const groupByResultsElement = {};
      const groupByResults = [groupByResultsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        totalSize: totalSize,
        groupByResults: groupByResults,
      };

      // Mock Grpc layer
      client._innerApiCalls.groupAssets = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.groupByResults);
      };

      client.groupAssets(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.groupByResults);
        done();
      });
    });

    it('invokes groupAssets with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.organizationPath('[ORGANIZATION]');
      const groupBy = 'groupBy506361367';
      const request = {
        parent: formattedParent,
        groupBy: groupBy,
      };

      // Mock Grpc layer
      client._innerApiCalls.groupAssets = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.groupAssets(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('groupFindings', () => {
    it('invokes groupFindings without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
      const groupBy = 'groupBy506361367';
      const request = {
        parent: formattedParent,
        groupBy: groupBy,
      };

      // Mock response
      const nextPageToken = '';
      const totalSize = 705419236;
      const groupByResultsElement = {};
      const groupByResults = [groupByResultsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        totalSize: totalSize,
        groupByResults: groupByResults,
      };

      // Mock Grpc layer
      client._innerApiCalls.groupFindings = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.groupByResults);
      };

      client.groupFindings(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.groupByResults);
        done();
      });
    });

    it('invokes groupFindings with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
      const groupBy = 'groupBy506361367';
      const request = {
        parent: formattedParent,
        groupBy: groupBy,
      };

      // Mock Grpc layer
      client._innerApiCalls.groupFindings = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.groupFindings(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listAssets', () => {
    it('invokes listAssets without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.organizationPath('[ORGANIZATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const totalSize = 705419236;
      const listAssetsResultsElement = {};
      const listAssetsResults = [listAssetsResultsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        totalSize: totalSize,
        listAssetsResults: listAssetsResults,
      };

      // Mock Grpc layer
      client._innerApiCalls.listAssets = (actualRequest, options, callback) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.listAssetsResults);
      };

      client.listAssets(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.listAssetsResults);
        done();
      });
    });

    it('invokes listAssets with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.organizationPath('[ORGANIZATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listAssets = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listAssets(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listFindings', () => {
    it('invokes listFindings without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const totalSize = 705419236;
      const listFindingsResultsElement = {};
      const listFindingsResults = [listFindingsResultsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        totalSize: totalSize,
        listFindingsResults: listFindingsResults,
      };

      // Mock Grpc layer
      client._innerApiCalls.listFindings = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.listFindingsResults);
      };

      client.listFindings(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.listFindingsResults);
        done();
      });
    });

    it('invokes listFindings with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listFindings = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listFindings(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listSources', () => {
    it('invokes listSources without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.organizationPath('[ORGANIZATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const sourcesElement = {};
      const sources = [sourcesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        sources: sources,
      };

      // Mock Grpc layer
      client._innerApiCalls.listSources = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.sources);
      };

      client.listSources(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.sources);
        done();
      });
    });

    it('invokes listSources with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.organizationPath('[ORGANIZATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listSources = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listSources(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('runAssetDiscovery', function() {
    it('invokes runAssetDiscovery without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.organizationPath('[ORGANIZATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.runAssetDiscovery = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .runAssetDiscovery(request)
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

    it('invokes runAssetDiscovery with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.organizationPath('[ORGANIZATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.runAssetDiscovery = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .runAssetDiscovery(request)
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
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.runAssetDiscovery
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.runAssetDiscovery
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('setFindingState', () => {
    it('invokes setFindingState without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.findingPath(
        '[ORGANIZATION]',
        '[SOURCE]',
        '[FINDING]'
      );
      const state = 'STATE_UNSPECIFIED';
      const startTime = {};
      const request = {
        name: formattedName,
        state: state,
        startTime: startTime,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const parent = 'parent-995424086';
      const resourceName = 'resourceName979421212';
      const category = 'category50511102';
      const externalUri = 'externalUri-1385596168';
      const expectedResponse = {
        name: name2,
        parent: parent,
        resourceName: resourceName,
        category: category,
        externalUri: externalUri,
      };

      // Mock Grpc layer
      client._innerApiCalls.setFindingState = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.setFindingState(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setFindingState with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.findingPath(
        '[ORGANIZATION]',
        '[SOURCE]',
        '[FINDING]'
      );
      const state = 'STATE_UNSPECIFIED';
      const startTime = {};
      const request = {
        name: formattedName,
        state: state,
        startTime: startTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.setFindingState = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.setFindingState(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setIamPolicy', () => {
    it('invokes setIamPolicy without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
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
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
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

  describe('testIamPermissions', () => {
    it('invokes testIamPermissions without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
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
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
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

  describe('updateFinding', () => {
    it('invokes updateFinding without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const finding = {};
      const request = {
        finding: finding,
      };

      // Mock response
      const name = 'name3373707';
      const parent = 'parent-995424086';
      const resourceName = 'resourceName979421212';
      const category = 'category50511102';
      const externalUri = 'externalUri-1385596168';
      const expectedResponse = {
        name: name,
        parent: parent,
        resourceName: resourceName,
        category: category,
        externalUri: externalUri,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateFinding = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateFinding(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateFinding with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const finding = {};
      const request = {
        finding: finding,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateFinding = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateFinding(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateOrganizationSettings', () => {
    it('invokes updateOrganizationSettings without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const organizationSettings = {};
      const request = {
        organizationSettings: organizationSettings,
      };

      // Mock response
      const name = 'name3373707';
      const enableAssetDiscovery = false;
      const expectedResponse = {
        name: name,
        enableAssetDiscovery: enableAssetDiscovery,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateOrganizationSettings = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateOrganizationSettings(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateOrganizationSettings with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const organizationSettings = {};
      const request = {
        organizationSettings: organizationSettings,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateOrganizationSettings = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateOrganizationSettings(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateSource', () => {
    it('invokes updateSource without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const source = {};
      const request = {
        source: source,
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
      client._innerApiCalls.updateSource = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateSource(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateSource with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const source = {};
      const request = {
        source: source,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateSource = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateSource(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateSecurityMarks', () => {
    it('invokes updateSecurityMarks without error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const securityMarks = {};
      const request = {
        securityMarks: securityMarks,
      };

      // Mock response
      const name = 'name3373707';
      const expectedResponse = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateSecurityMarks = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateSecurityMarks(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateSecurityMarks with error', done => {
      const client = new securityCenterModule.v1.SecurityCenterClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const securityMarks = {};
      const request = {
        securityMarks: securityMarks,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateSecurityMarks = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateSecurityMarks(request, (err, response) => {
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
