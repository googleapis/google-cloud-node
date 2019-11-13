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

const datacatalogModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('DataCatalogClient', () => {
  it('has servicePath', () => {
    const servicePath = datacatalogModule.v1beta1.DataCatalogClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = datacatalogModule.v1beta1.DataCatalogClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = datacatalogModule.v1beta1.DataCatalogClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new datacatalogModule.v1beta1.DataCatalogClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new datacatalogModule.v1beta1.DataCatalogClient({
      fallback: true,
    });
    assert(client);
  });

  describe('searchCatalog', () => {
    it('invokes searchCatalog without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const scope = {};
      const query = 'query107944136';
      const request = {
        scope: scope,
        query: query,
      };

      // Mock response
      const nextPageToken = '';
      const resultsElement = {};
      const results = [resultsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        results: results,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchCatalog = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.results);
      };

      client.searchCatalog(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.results);
        done();
      });
    });

    it('invokes searchCatalog with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const scope = {};
      const query = 'query107944136';
      const request = {
        scope: scope,
        query: query,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchCatalog = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.searchCatalog(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createEntryGroup', () => {
    it('invokes createEntryGroup without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const entryGroupId = 'entryGroupId-43122680';
      const entryGroup = {};
      const request = {
        parent: formattedParent,
        entryGroupId: entryGroupId,
        entryGroup: entryGroup,
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
      client._innerApiCalls.createEntryGroup = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createEntryGroup(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createEntryGroup with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const entryGroupId = 'entryGroupId-43122680';
      const entryGroup = {};
      const request = {
        parent: formattedParent,
        entryGroupId: entryGroupId,
        entryGroup: entryGroup,
      };

      // Mock Grpc layer
      client._innerApiCalls.createEntryGroup = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createEntryGroup(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getEntryGroup', () => {
    it('invokes getEntryGroup without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.entryGroupPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]'
      );
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
      client._innerApiCalls.getEntryGroup = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getEntryGroup(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getEntryGroup with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.entryGroupPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getEntryGroup = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getEntryGroup(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteEntryGroup', () => {
    it('invokes deleteEntryGroup without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.entryGroupPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteEntryGroup = mockSimpleGrpcMethod(request);

      client.deleteEntryGroup(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteEntryGroup with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.entryGroupPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteEntryGroup = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteEntryGroup(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createEntry', () => {
    it('invokes createEntry without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.entryGroupPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]'
      );
      const entryId = 'entryId-2093663224';
      const entry = {};
      const request = {
        parent: formattedParent,
        entryId: entryId,
        entry: entry,
      };

      // Mock response
      const name = 'name3373707';
      const linkedResource = 'linkedResource1544625012';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const expectedResponse = {
        name: name,
        linkedResource: linkedResource,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.createEntry = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createEntry(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createEntry with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.entryGroupPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]'
      );
      const entryId = 'entryId-2093663224';
      const entry = {};
      const request = {
        parent: formattedParent,
        entryId: entryId,
        entry: entry,
      };

      // Mock Grpc layer
      client._innerApiCalls.createEntry = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createEntry(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateEntry', () => {
    it('invokes updateEntry without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const entry = {};
      const request = {
        entry: entry,
      };

      // Mock response
      const name = 'name3373707';
      const linkedResource = 'linkedResource1544625012';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const expectedResponse = {
        name: name,
        linkedResource: linkedResource,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateEntry = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateEntry(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateEntry with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const entry = {};
      const request = {
        entry: entry,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateEntry = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateEntry(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteEntry', () => {
    it('invokes deleteEntry without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.entryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]',
        '[ENTRY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteEntry = mockSimpleGrpcMethod(request);

      client.deleteEntry(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteEntry with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.entryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]',
        '[ENTRY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteEntry = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteEntry(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('getEntry', () => {
    it('invokes getEntry without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.entryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]',
        '[ENTRY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const linkedResource = 'linkedResource1544625012';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const expectedResponse = {
        name: name2,
        linkedResource: linkedResource,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.getEntry = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getEntry(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getEntry with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.entryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]',
        '[ENTRY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getEntry = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getEntry(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('lookupEntry', () => {
    it('invokes lookupEntry without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const name = 'name3373707';
      const linkedResource = 'linkedResource1544625012';
      const displayName = 'displayName1615086568';
      const description = 'description-1724546052';
      const expectedResponse = {
        name: name,
        linkedResource: linkedResource,
        displayName: displayName,
        description: description,
      };

      // Mock Grpc layer
      client._innerApiCalls.lookupEntry = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.lookupEntry(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes lookupEntry with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.lookupEntry = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.lookupEntry(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createTagTemplate', () => {
    it('invokes createTagTemplate without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const tagTemplateId = 'tagTemplateId-2020335141';
      const tagTemplate = {};
      const request = {
        parent: formattedParent,
        tagTemplateId: tagTemplateId,
        tagTemplate: tagTemplate,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
        name: name,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTagTemplate = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createTagTemplate(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createTagTemplate with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const tagTemplateId = 'tagTemplateId-2020335141';
      const tagTemplate = {};
      const request = {
        parent: formattedParent,
        tagTemplateId: tagTemplateId,
        tagTemplate: tagTemplate,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTagTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createTagTemplate(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getTagTemplate', () => {
    it('invokes getTagTemplate without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.tagTemplatePath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]'
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
      client._innerApiCalls.getTagTemplate = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getTagTemplate(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getTagTemplate with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.tagTemplatePath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getTagTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getTagTemplate(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateTagTemplate', () => {
    it('invokes updateTagTemplate without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const tagTemplate = {};
      const request = {
        tagTemplate: tagTemplate,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
        name: name,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateTagTemplate = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateTagTemplate(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateTagTemplate with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const tagTemplate = {};
      const request = {
        tagTemplate: tagTemplate,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateTagTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateTagTemplate(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteTagTemplate', () => {
    it('invokes deleteTagTemplate without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.tagTemplatePath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]'
      );
      const force = false;
      const request = {
        name: formattedName,
        force: force,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTagTemplate = mockSimpleGrpcMethod(request);

      client.deleteTagTemplate(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteTagTemplate with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.tagTemplatePath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]'
      );
      const force = false;
      const request = {
        name: formattedName,
        force: force,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTagTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteTagTemplate(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createTagTemplateField', () => {
    it('invokes createTagTemplateField without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.tagTemplatePath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]'
      );
      const tagTemplateFieldId = 'tagTemplateFieldId-92144832';
      const tagTemplateField = {};
      const request = {
        parent: formattedParent,
        tagTemplateFieldId: tagTemplateFieldId,
        tagTemplateField: tagTemplateField,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
        name: name,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTagTemplateField = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createTagTemplateField(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createTagTemplateField with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.tagTemplatePath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]'
      );
      const tagTemplateFieldId = 'tagTemplateFieldId-92144832';
      const tagTemplateField = {};
      const request = {
        parent: formattedParent,
        tagTemplateFieldId: tagTemplateFieldId,
        tagTemplateField: tagTemplateField,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTagTemplateField = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createTagTemplateField(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateTagTemplateField', () => {
    it('invokes updateTagTemplateField without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.fieldPath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]',
        '[FIELD]'
      );
      const tagTemplateField = {};
      const request = {
        name: formattedName,
        tagTemplateField: tagTemplateField,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
        name: name2,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateTagTemplateField = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateTagTemplateField(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateTagTemplateField with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.fieldPath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]',
        '[FIELD]'
      );
      const tagTemplateField = {};
      const request = {
        name: formattedName,
        tagTemplateField: tagTemplateField,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateTagTemplateField = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateTagTemplateField(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('renameTagTemplateField', () => {
    it('invokes renameTagTemplateField without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.fieldPath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]',
        '[FIELD]'
      );
      const newTagTemplateFieldId = 'newTagTemplateFieldId-1668354591';
      const request = {
        name: formattedName,
        newTagTemplateFieldId: newTagTemplateFieldId,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
        name: name2,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.renameTagTemplateField = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.renameTagTemplateField(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes renameTagTemplateField with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.fieldPath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]',
        '[FIELD]'
      );
      const newTagTemplateFieldId = 'newTagTemplateFieldId-1668354591';
      const request = {
        name: formattedName,
        newTagTemplateFieldId: newTagTemplateFieldId,
      };

      // Mock Grpc layer
      client._innerApiCalls.renameTagTemplateField = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.renameTagTemplateField(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteTagTemplateField', () => {
    it('invokes deleteTagTemplateField without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.fieldPath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]',
        '[FIELD]'
      );
      const force = false;
      const request = {
        name: formattedName,
        force: force,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTagTemplateField = mockSimpleGrpcMethod(
        request
      );

      client.deleteTagTemplateField(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteTagTemplateField with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.fieldPath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]',
        '[FIELD]'
      );
      const force = false;
      const request = {
        name: formattedName,
        force: force,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTagTemplateField = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteTagTemplateField(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createTag', () => {
    it('invokes createTag without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.entryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]',
        '[ENTRY]'
      );
      const tag = {};
      const request = {
        parent: formattedParent,
        tag: tag,
      };

      // Mock response
      const name = 'name3373707';
      const template = 'template-1321546630';
      const templateDisplayName = 'templateDisplayName-532252787';
      const column = 'column-1354837162';
      const expectedResponse = {
        name: name,
        template: template,
        templateDisplayName: templateDisplayName,
        column: column,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTag = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createTag(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createTag with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.entryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]',
        '[ENTRY]'
      );
      const tag = {};
      const request = {
        parent: formattedParent,
        tag: tag,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTag = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createTag(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateTag', () => {
    it('invokes updateTag without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const tag = {};
      const request = {
        tag: tag,
      };

      // Mock response
      const name = 'name3373707';
      const template = 'template-1321546630';
      const templateDisplayName = 'templateDisplayName-532252787';
      const column = 'column-1354837162';
      const expectedResponse = {
        name: name,
        template: template,
        templateDisplayName: templateDisplayName,
        column: column,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateTag = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateTag(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateTag with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const tag = {};
      const request = {
        tag: tag,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateTag = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateTag(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteTag', () => {
    it('invokes deleteTag without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.tagPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]',
        '[ENTRY]',
        '[TAG]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTag = mockSimpleGrpcMethod(request);

      client.deleteTag(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteTag with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.tagPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]',
        '[ENTRY]',
        '[TAG]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTag = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteTag(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listTags', () => {
    it('invokes listTags without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.entryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]',
        '[ENTRY]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const tagsElement = {};
      const tags = [tagsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        tags: tags,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTags = (actualRequest, options, callback) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.tags);
      };

      client.listTags(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.tags);
        done();
      });
    });

    it('invokes listTags with error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.entryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[ENTRY_GROUP]',
        '[ENTRY]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTags = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listTags(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setIamPolicy', () => {
    it('invokes setIamPolicy without error', done => {
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.tagTemplatePath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]'
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
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.tagTemplatePath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]'
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
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.tagTemplatePath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]'
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
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.tagTemplatePath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]'
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
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.tagTemplatePath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]'
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
      const client = new datacatalogModule.v1beta1.DataCatalogClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.tagTemplatePath(
        '[PROJECT]',
        '[LOCATION]',
        '[TAG_TEMPLATE]'
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
