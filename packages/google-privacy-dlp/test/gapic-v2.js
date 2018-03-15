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

const dlpModule = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('DlpServiceClient', () => {
  describe('inspectContent', () => {
    it('invokes inspectContent without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.inspectContent = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.inspectContent(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes inspectContent with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.inspectContent = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.inspectContent(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('redactImage', () => {
    it('invokes redactImage without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var redactedImage = '28';
      var extractedText = 'extractedText998260012';
      var expectedResponse = {
        redactedImage: redactedImage,
        extractedText: extractedText,
      };

      // Mock Grpc layer
      client._innerApiCalls.redactImage = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.redactImage(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes redactImage with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.redactImage = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.redactImage(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deidentifyContent', () => {
    it('invokes deidentifyContent without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.deidentifyContent = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.deidentifyContent(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deidentifyContent with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.deidentifyContent = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deidentifyContent(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('reidentifyContent', () => {
    it('invokes reidentifyContent without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.reidentifyContent = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.reidentifyContent(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes reidentifyContent with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.reidentifyContent = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.reidentifyContent(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listInfoTypes', () => {
    it('invokes listInfoTypes without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var request = {};

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listInfoTypes = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listInfoTypes(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listInfoTypes with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var request = {};

      // Mock Grpc layer
      client._innerApiCalls.listInfoTypes = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listInfoTypes(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createInspectTemplate', () => {
    it('invokes createInspectTemplate without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.organizationPath('[ORGANIZATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var name = 'name3373707';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.createInspectTemplate = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createInspectTemplate(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createInspectTemplate with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.organizationPath('[ORGANIZATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.createInspectTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createInspectTemplate(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateInspectTemplate', () => {
    it('invokes updateInspectTemplate without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.organizationInspectTemplatePath(
        '[ORGANIZATION]',
        '[INSPECT_TEMPLATE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var expectedResponse = {
        name: name2,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateInspectTemplate = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateInspectTemplate(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateInspectTemplate with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.organizationInspectTemplatePath(
        '[ORGANIZATION]',
        '[INSPECT_TEMPLATE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateInspectTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateInspectTemplate(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getInspectTemplate', () => {
    it('invokes getInspectTemplate without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var request = {};

      // Mock response
      var name = 'name3373707';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.getInspectTemplate = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getInspectTemplate(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getInspectTemplate with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var request = {};

      // Mock Grpc layer
      client._innerApiCalls.getInspectTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getInspectTemplate(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listInspectTemplates', () => {
    it('invokes listInspectTemplates without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.organizationPath('[ORGANIZATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var nextPageToken = '';
      var inspectTemplatesElement = {};
      var inspectTemplates = [inspectTemplatesElement];
      var expectedResponse = {
        nextPageToken: nextPageToken,
        inspectTemplates: inspectTemplates,
      };

      // Mock Grpc layer
      client._innerApiCalls.listInspectTemplates = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.inspectTemplates);
      };

      client.listInspectTemplates(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.inspectTemplates);
        done();
      });
    });

    it('invokes listInspectTemplates with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.organizationPath('[ORGANIZATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listInspectTemplates = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listInspectTemplates(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteInspectTemplate', () => {
    it('invokes deleteInspectTemplate without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.organizationInspectTemplatePath(
        '[ORGANIZATION]',
        '[INSPECT_TEMPLATE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteInspectTemplate = mockSimpleGrpcMethod(
        request
      );

      client.deleteInspectTemplate(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteInspectTemplate with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.organizationInspectTemplatePath(
        '[ORGANIZATION]',
        '[INSPECT_TEMPLATE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteInspectTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteInspectTemplate(request, err => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createDeidentifyTemplate', () => {
    it('invokes createDeidentifyTemplate without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.organizationPath('[ORGANIZATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var name = 'name3373707';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.createDeidentifyTemplate = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createDeidentifyTemplate(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createDeidentifyTemplate with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.organizationPath('[ORGANIZATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.createDeidentifyTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createDeidentifyTemplate(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateDeidentifyTemplate', () => {
    it('invokes updateDeidentifyTemplate without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.organizationDeidentifyTemplatePath(
        '[ORGANIZATION]',
        '[DEIDENTIFY_TEMPLATE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var expectedResponse = {
        name: name2,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateDeidentifyTemplate = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateDeidentifyTemplate(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateDeidentifyTemplate with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.organizationDeidentifyTemplatePath(
        '[ORGANIZATION]',
        '[DEIDENTIFY_TEMPLATE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateDeidentifyTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateDeidentifyTemplate(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getDeidentifyTemplate', () => {
    it('invokes getDeidentifyTemplate without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.organizationDeidentifyTemplatePath(
        '[ORGANIZATION]',
        '[DEIDENTIFY_TEMPLATE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var expectedResponse = {
        name: name2,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.getDeidentifyTemplate = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getDeidentifyTemplate(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getDeidentifyTemplate with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.organizationDeidentifyTemplatePath(
        '[ORGANIZATION]',
        '[DEIDENTIFY_TEMPLATE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getDeidentifyTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getDeidentifyTemplate(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listDeidentifyTemplates', () => {
    it('invokes listDeidentifyTemplates without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.organizationPath('[ORGANIZATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var nextPageToken = '';
      var deidentifyTemplatesElement = {};
      var deidentifyTemplates = [deidentifyTemplatesElement];
      var expectedResponse = {
        nextPageToken: nextPageToken,
        deidentifyTemplates: deidentifyTemplates,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDeidentifyTemplates = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.deidentifyTemplates);
      };

      client.listDeidentifyTemplates(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.deidentifyTemplates);
        done();
      });
    });

    it('invokes listDeidentifyTemplates with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.organizationPath('[ORGANIZATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDeidentifyTemplates = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listDeidentifyTemplates(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteDeidentifyTemplate', () => {
    it('invokes deleteDeidentifyTemplate without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.organizationDeidentifyTemplatePath(
        '[ORGANIZATION]',
        '[DEIDENTIFY_TEMPLATE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteDeidentifyTemplate = mockSimpleGrpcMethod(
        request
      );

      client.deleteDeidentifyTemplate(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteDeidentifyTemplate with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.organizationDeidentifyTemplatePath(
        '[ORGANIZATION]',
        '[DEIDENTIFY_TEMPLATE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteDeidentifyTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteDeidentifyTemplate(request, err => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createDlpJob', () => {
    it('invokes createDlpJob without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var name = 'name3373707';
      var jobTriggerName = 'jobTriggerName1819490804';
      var expectedResponse = {
        name: name,
        jobTriggerName: jobTriggerName,
      };

      // Mock Grpc layer
      client._innerApiCalls.createDlpJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createDlpJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createDlpJob with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.createDlpJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createDlpJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listDlpJobs', () => {
    it('invokes listDlpJobs without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
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
      var jobsElement = {};
      var jobs = [jobsElement];
      var expectedResponse = {
        nextPageToken: nextPageToken,
        jobs: jobs,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDlpJobs = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.jobs);
      };

      client.listDlpJobs(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.jobs);
        done();
      });
    });

    it('invokes listDlpJobs with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listDlpJobs = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listDlpJobs(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getDlpJob', () => {
    it('invokes getDlpJob without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.dlpJobPath('[PROJECT]', '[DLP_JOB]');
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var jobTriggerName = 'jobTriggerName1819490804';
      var expectedResponse = {
        name: name2,
        jobTriggerName: jobTriggerName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getDlpJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getDlpJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getDlpJob with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.dlpJobPath('[PROJECT]', '[DLP_JOB]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getDlpJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getDlpJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteDlpJob', () => {
    it('invokes deleteDlpJob without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.dlpJobPath('[PROJECT]', '[DLP_JOB]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteDlpJob = mockSimpleGrpcMethod(request);

      client.deleteDlpJob(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteDlpJob with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.dlpJobPath('[PROJECT]', '[DLP_JOB]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteDlpJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteDlpJob(request, err => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('cancelDlpJob', () => {
    it('invokes cancelDlpJob without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.dlpJobPath('[PROJECT]', '[DLP_JOB]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelDlpJob = mockSimpleGrpcMethod(request);

      client.cancelDlpJob(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes cancelDlpJob with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.dlpJobPath('[PROJECT]', '[DLP_JOB]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelDlpJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.cancelDlpJob(request, err => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listJobTriggers', () => {
    it('invokes listJobTriggers without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
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
      var jobTriggersElement = {};
      var jobTriggers = [jobTriggersElement];
      var expectedResponse = {
        nextPageToken: nextPageToken,
        jobTriggers: jobTriggers,
      };

      // Mock Grpc layer
      client._innerApiCalls.listJobTriggers = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.jobTriggers);
      };

      client.listJobTriggers(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.jobTriggers);
        done();
      });
    });

    it('invokes listJobTriggers with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listJobTriggers = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listJobTriggers(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getJobTrigger', () => {
    it('invokes getJobTrigger without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectJobTriggerPath(
        '[PROJECT]',
        '[JOB_TRIGGER]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var expectedResponse = {
        name: name2,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.getJobTrigger = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getJobTrigger(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getJobTrigger with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectJobTriggerPath(
        '[PROJECT]',
        '[JOB_TRIGGER]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getJobTrigger = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getJobTrigger(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteJobTrigger', () => {
    it('invokes deleteJobTrigger without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var name = 'name3373707';
      var request = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteJobTrigger = mockSimpleGrpcMethod(request);

      client.deleteJobTrigger(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteJobTrigger with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var name = 'name3373707';
      var request = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteJobTrigger = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteJobTrigger(request, err => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('updateJobTrigger', () => {
    it('invokes updateJobTrigger without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectJobTriggerPath(
        '[PROJECT]',
        '[JOB_TRIGGER]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var expectedResponse = {
        name: name2,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateJobTrigger = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateJobTrigger(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateJobTrigger with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectJobTriggerPath(
        '[PROJECT]',
        '[JOB_TRIGGER]'
      );
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateJobTrigger = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateJobTrigger(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createJobTrigger', () => {
    it('invokes createJobTrigger without error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var name = 'name3373707';
      var displayName = 'displayName1615086568';
      var description = 'description-1724546052';
      var expectedResponse = {
        name: name,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.createJobTrigger = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createJobTrigger(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createJobTrigger with error', done => {
      var client = new dlpModule.v2.DlpServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.projectPath('[PROJECT]');
      var request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.createJobTrigger = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createJobTrigger(request, (err, response) => {
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
