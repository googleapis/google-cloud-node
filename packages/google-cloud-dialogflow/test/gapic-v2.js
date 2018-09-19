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
const through2 = require('through2');

const dialogflowModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('AgentsClient', () => {
  describe('getAgent', () => {
    it('invokes getAgent without error', done => {
      const client = new dialogflowModule.v2.AgentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const parent2 = 'parent21175163357';
      const displayName = 'displayName1615086568';
      const defaultLanguageCode = 'defaultLanguageCode856575222';
      const timeZone = 'timeZone36848094';
      const description = 'description-1724546052';
      const avatarUri = 'avatarUri-402824826';
      const enableLogging = false;
      const classificationThreshold = 1.11581064e8;
      const expectedResponse = {
        parent: parent2,
        displayName: displayName,
        defaultLanguageCode: defaultLanguageCode,
        timeZone: timeZone,
        description: description,
        avatarUri: avatarUri,
        enableLogging: enableLogging,
        classificationThreshold: classificationThreshold,
      };

      // Mock Grpc layer
      client._innerApiCalls.getAgent = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getAgent(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getAgent with error', done => {
      const client = new dialogflowModule.v2.AgentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.getAgent = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getAgent(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('searchAgents', () => {
    it('invokes searchAgents without error', done => {
      const client = new dialogflowModule.v2.AgentsClient({
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
      const agentsElement = {};
      const agents = [agentsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        agents: agents,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchAgents = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.agents);
      };

      client.searchAgents(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.agents);
        done();
      });
    });

    it('invokes searchAgents with error', done => {
      const client = new dialogflowModule.v2.AgentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchAgents = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.searchAgents(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('trainAgent', function() {
    it('invokes trainAgent without error', done => {
      const client = new dialogflowModule.v2.AgentsClient({
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
      client._innerApiCalls.trainAgent = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .trainAgent(request)
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

    it('invokes trainAgent with error', done => {
      const client = new dialogflowModule.v2.AgentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.trainAgent = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .trainAgent(request)
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
      const client = new dialogflowModule.v2.AgentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.trainAgent.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.trainAgent.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('exportAgent', function() {
    it('invokes exportAgent without error', done => {
      const client = new dialogflowModule.v2.AgentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const agentUri = 'agentUri-1700713166';
      const expectedResponse = {
        agentUri: agentUri,
      };

      // Mock Grpc layer
      client._innerApiCalls.exportAgent = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .exportAgent(request)
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

    it('invokes exportAgent with error', done => {
      const client = new dialogflowModule.v2.AgentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.exportAgent = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .exportAgent(request)
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
      const client = new dialogflowModule.v2.AgentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.exportAgent.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.exportAgent.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('importAgent', function() {
    it('invokes importAgent without error', done => {
      const client = new dialogflowModule.v2.AgentsClient({
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
      client._innerApiCalls.importAgent = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .importAgent(request)
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

    it('invokes importAgent with error', done => {
      const client = new dialogflowModule.v2.AgentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.importAgent = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .importAgent(request)
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
      const client = new dialogflowModule.v2.AgentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.importAgent.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.importAgent.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('restoreAgent', function() {
    it('invokes restoreAgent without error', done => {
      const client = new dialogflowModule.v2.AgentsClient({
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
      client._innerApiCalls.restoreAgent = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .restoreAgent(request)
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

    it('invokes restoreAgent with error', done => {
      const client = new dialogflowModule.v2.AgentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.restoreAgent = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .restoreAgent(request)
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
      const client = new dialogflowModule.v2.AgentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.restoreAgent.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.restoreAgent.metadataDecoder instanceof
          Function
      );
    });
  });
});
describe('ContextsClient', () => {
  describe('listContexts', () => {
    it('invokes listContexts without error', done => {
      const client = new dialogflowModule.v2.ContextsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const contextsElement = {};
      const contexts = [contextsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        contexts: contexts,
      };

      // Mock Grpc layer
      client._innerApiCalls.listContexts = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.contexts);
      };

      client.listContexts(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.contexts);
        done();
      });
    });

    it('invokes listContexts with error', done => {
      const client = new dialogflowModule.v2.ContextsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listContexts = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listContexts(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getContext', () => {
    it('invokes getContext without error', done => {
      const client = new dialogflowModule.v2.ContextsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.contextPath(
        '[PROJECT]',
        '[SESSION]',
        '[CONTEXT]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const lifespanCount = 1178775510;
      const expectedResponse = {
        name: name2,
        lifespanCount: lifespanCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.getContext = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getContext(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getContext with error', done => {
      const client = new dialogflowModule.v2.ContextsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.contextPath(
        '[PROJECT]',
        '[SESSION]',
        '[CONTEXT]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getContext = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getContext(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createContext', () => {
    it('invokes createContext without error', done => {
      const client = new dialogflowModule.v2.ContextsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
      const context = {};
      const request = {
        parent: formattedParent,
        context: context,
      };

      // Mock response
      const name = 'name3373707';
      const lifespanCount = 1178775510;
      const expectedResponse = {
        name: name,
        lifespanCount: lifespanCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.createContext = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createContext(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createContext with error', done => {
      const client = new dialogflowModule.v2.ContextsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
      const context = {};
      const request = {
        parent: formattedParent,
        context: context,
      };

      // Mock Grpc layer
      client._innerApiCalls.createContext = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createContext(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateContext', () => {
    it('invokes updateContext without error', done => {
      const client = new dialogflowModule.v2.ContextsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const context = {};
      const request = {
        context: context,
      };

      // Mock response
      const name = 'name3373707';
      const lifespanCount = 1178775510;
      const expectedResponse = {
        name: name,
        lifespanCount: lifespanCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateContext = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateContext(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateContext with error', done => {
      const client = new dialogflowModule.v2.ContextsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const context = {};
      const request = {
        context: context,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateContext = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateContext(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteContext', () => {
    it('invokes deleteContext without error', done => {
      const client = new dialogflowModule.v2.ContextsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.contextPath(
        '[PROJECT]',
        '[SESSION]',
        '[CONTEXT]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteContext = mockSimpleGrpcMethod(request);

      client.deleteContext(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteContext with error', done => {
      const client = new dialogflowModule.v2.ContextsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.contextPath(
        '[PROJECT]',
        '[SESSION]',
        '[CONTEXT]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteContext = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteContext(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('deleteAllContexts', () => {
    it('invokes deleteAllContexts without error', done => {
      const client = new dialogflowModule.v2.ContextsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteAllContexts = mockSimpleGrpcMethod(request);

      client.deleteAllContexts(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteAllContexts with error', done => {
      const client = new dialogflowModule.v2.ContextsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteAllContexts = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteAllContexts(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });
});
describe('EntityTypesClient', () => {
  describe('listEntityTypes', () => {
    it('invokes listEntityTypes without error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const entityTypesElement = {};
      const entityTypes = [entityTypesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        entityTypes: entityTypes,
      };

      // Mock Grpc layer
      client._innerApiCalls.listEntityTypes = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.entityTypes);
      };

      client.listEntityTypes(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.entityTypes);
        done();
      });
    });

    it('invokes listEntityTypes with error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listEntityTypes = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listEntityTypes(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getEntityType', () => {
    it('invokes getEntityType without error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.entityTypePath('[PROJECT]', '[ENTITY_TYPE]');
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
      client._innerApiCalls.getEntityType = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getEntityType(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getEntityType with error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.entityTypePath('[PROJECT]', '[ENTITY_TYPE]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getEntityType = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getEntityType(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createEntityType', () => {
    it('invokes createEntityType without error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const entityType = {};
      const request = {
        parent: formattedParent,
        entityType: entityType,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
        name: name,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.createEntityType = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createEntityType(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createEntityType with error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const entityType = {};
      const request = {
        parent: formattedParent,
        entityType: entityType,
      };

      // Mock Grpc layer
      client._innerApiCalls.createEntityType = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createEntityType(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateEntityType', () => {
    it('invokes updateEntityType without error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const entityType = {};
      const request = {
        entityType: entityType,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const expectedResponse = {
        name: name,
        displayName: displayName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateEntityType = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateEntityType(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateEntityType with error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const entityType = {};
      const request = {
        entityType: entityType,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateEntityType = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateEntityType(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteEntityType', () => {
    it('invokes deleteEntityType without error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.entityTypePath('[PROJECT]', '[ENTITY_TYPE]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteEntityType = mockSimpleGrpcMethod(request);

      client.deleteEntityType(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteEntityType with error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.entityTypePath('[PROJECT]', '[ENTITY_TYPE]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteEntityType = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteEntityType(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('batchUpdateEntityTypes', function() {
    it('invokes batchUpdateEntityTypes without error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchUpdateEntityTypes = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .batchUpdateEntityTypes(request)
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

    it('invokes batchUpdateEntityTypes with error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchUpdateEntityTypes = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .batchUpdateEntityTypes(request)
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
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.batchUpdateEntityTypes
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.batchUpdateEntityTypes
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('batchDeleteEntityTypes', function() {
    it('invokes batchDeleteEntityTypes without error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const entityTypeNames = [];
      const request = {
        parent: formattedParent,
        entityTypeNames: entityTypeNames,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchDeleteEntityTypes = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .batchDeleteEntityTypes(request)
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

    it('invokes batchDeleteEntityTypes with error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const entityTypeNames = [];
      const request = {
        parent: formattedParent,
        entityTypeNames: entityTypeNames,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchDeleteEntityTypes = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .batchDeleteEntityTypes(request)
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
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.batchDeleteEntityTypes
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.batchDeleteEntityTypes
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('batchCreateEntities', function() {
    it('invokes batchCreateEntities without error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.entityTypePath(
        '[PROJECT]',
        '[ENTITY_TYPE]'
      );
      const entities = [];
      const request = {
        parent: formattedParent,
        entities: entities,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchCreateEntities = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .batchCreateEntities(request)
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

    it('invokes batchCreateEntities with error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.entityTypePath(
        '[PROJECT]',
        '[ENTITY_TYPE]'
      );
      const entities = [];
      const request = {
        parent: formattedParent,
        entities: entities,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchCreateEntities = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .batchCreateEntities(request)
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
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.batchCreateEntities
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.batchCreateEntities
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('batchUpdateEntities', function() {
    it('invokes batchUpdateEntities without error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.entityTypePath(
        '[PROJECT]',
        '[ENTITY_TYPE]'
      );
      const entities = [];
      const request = {
        parent: formattedParent,
        entities: entities,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchUpdateEntities = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .batchUpdateEntities(request)
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

    it('invokes batchUpdateEntities with error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.entityTypePath(
        '[PROJECT]',
        '[ENTITY_TYPE]'
      );
      const entities = [];
      const request = {
        parent: formattedParent,
        entities: entities,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchUpdateEntities = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .batchUpdateEntities(request)
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
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.batchUpdateEntities
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.batchUpdateEntities
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('batchDeleteEntities', function() {
    it('invokes batchDeleteEntities without error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.entityTypePath(
        '[PROJECT]',
        '[ENTITY_TYPE]'
      );
      const entityValues = [];
      const request = {
        parent: formattedParent,
        entityValues: entityValues,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchDeleteEntities = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .batchDeleteEntities(request)
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

    it('invokes batchDeleteEntities with error', done => {
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.entityTypePath(
        '[PROJECT]',
        '[ENTITY_TYPE]'
      );
      const entityValues = [];
      const request = {
        parent: formattedParent,
        entityValues: entityValues,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchDeleteEntities = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .batchDeleteEntities(request)
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
      const client = new dialogflowModule.v2.EntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.batchDeleteEntities
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.batchDeleteEntities
          .metadataDecoder instanceof Function
      );
    });
  });
});
describe('IntentsClient', () => {
  describe('listIntents', () => {
    it('invokes listIntents without error', done => {
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const intentsElement = {};
      const intents = [intentsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        intents: intents,
      };

      // Mock Grpc layer
      client._innerApiCalls.listIntents = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.intents);
      };

      client.listIntents(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.intents);
        done();
      });
    });

    it('invokes listIntents with error', done => {
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listIntents = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listIntents(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getIntent', () => {
    it('invokes getIntent without error', done => {
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.intentPath('[PROJECT]', '[INTENT]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const displayName = 'displayName1615086568';
      const priority = 1165461084;
      const isFallback = false;
      const mlDisabled = true;
      const action = 'action-1422950858';
      const resetContexts = true;
      const rootFollowupIntentName = 'rootFollowupIntentName402253784';
      const parentFollowupIntentName = 'parentFollowupIntentName-1131901680';
      const expectedResponse = {
        name: name2,
        displayName: displayName,
        priority: priority,
        isFallback: isFallback,
        mlDisabled: mlDisabled,
        action: action,
        resetContexts: resetContexts,
        rootFollowupIntentName: rootFollowupIntentName,
        parentFollowupIntentName: parentFollowupIntentName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getIntent = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getIntent(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getIntent with error', done => {
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.intentPath('[PROJECT]', '[INTENT]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getIntent = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getIntent(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createIntent', () => {
    it('invokes createIntent without error', done => {
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const intent = {};
      const request = {
        parent: formattedParent,
        intent: intent,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const priority = 1165461084;
      const isFallback = false;
      const mlDisabled = true;
      const action = 'action-1422950858';
      const resetContexts = true;
      const rootFollowupIntentName = 'rootFollowupIntentName402253784';
      const parentFollowupIntentName = 'parentFollowupIntentName-1131901680';
      const expectedResponse = {
        name: name,
        displayName: displayName,
        priority: priority,
        isFallback: isFallback,
        mlDisabled: mlDisabled,
        action: action,
        resetContexts: resetContexts,
        rootFollowupIntentName: rootFollowupIntentName,
        parentFollowupIntentName: parentFollowupIntentName,
      };

      // Mock Grpc layer
      client._innerApiCalls.createIntent = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createIntent(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createIntent with error', done => {
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const intent = {};
      const request = {
        parent: formattedParent,
        intent: intent,
      };

      // Mock Grpc layer
      client._innerApiCalls.createIntent = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createIntent(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateIntent', () => {
    it('invokes updateIntent without error', done => {
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const intent = {};
      const languageCode = 'languageCode-412800396';
      const request = {
        intent: intent,
        languageCode: languageCode,
      };

      // Mock response
      const name = 'name3373707';
      const displayName = 'displayName1615086568';
      const priority = 1165461084;
      const isFallback = false;
      const mlDisabled = true;
      const action = 'action-1422950858';
      const resetContexts = true;
      const rootFollowupIntentName = 'rootFollowupIntentName402253784';
      const parentFollowupIntentName = 'parentFollowupIntentName-1131901680';
      const expectedResponse = {
        name: name,
        displayName: displayName,
        priority: priority,
        isFallback: isFallback,
        mlDisabled: mlDisabled,
        action: action,
        resetContexts: resetContexts,
        rootFollowupIntentName: rootFollowupIntentName,
        parentFollowupIntentName: parentFollowupIntentName,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateIntent = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateIntent(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateIntent with error', done => {
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const intent = {};
      const languageCode = 'languageCode-412800396';
      const request = {
        intent: intent,
        languageCode: languageCode,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateIntent = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateIntent(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteIntent', () => {
    it('invokes deleteIntent without error', done => {
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.intentPath('[PROJECT]', '[INTENT]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteIntent = mockSimpleGrpcMethod(request);

      client.deleteIntent(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteIntent with error', done => {
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.intentPath('[PROJECT]', '[INTENT]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteIntent = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteIntent(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('batchUpdateIntents', function() {
    it('invokes batchUpdateIntents without error', done => {
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const languageCode = 'languageCode-412800396';
      const request = {
        parent: formattedParent,
        languageCode: languageCode,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchUpdateIntents = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .batchUpdateIntents(request)
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

    it('invokes batchUpdateIntents with error', done => {
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const languageCode = 'languageCode-412800396';
      const request = {
        parent: formattedParent,
        languageCode: languageCode,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchUpdateIntents = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .batchUpdateIntents(request)
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
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.batchUpdateIntents
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.batchUpdateIntents
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('batchDeleteIntents', function() {
    it('invokes batchDeleteIntents without error', done => {
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const intents = [];
      const request = {
        parent: formattedParent,
        intents: intents,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchDeleteIntents = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .batchDeleteIntents(request)
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

    it('invokes batchDeleteIntents with error', done => {
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.projectAgentPath('[PROJECT]');
      const intents = [];
      const request = {
        parent: formattedParent,
        intents: intents,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchDeleteIntents = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .batchDeleteIntents(request)
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
      const client = new dialogflowModule.v2.IntentsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.batchDeleteIntents
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.batchDeleteIntents
          .metadataDecoder instanceof Function
      );
    });
  });
});
describe('SessionEntityTypesClient', () => {
  describe('listSessionEntityTypes', () => {
    it('invokes listSessionEntityTypes without error', done => {
      const client = new dialogflowModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const sessionEntityTypesElement = {};
      const sessionEntityTypes = [sessionEntityTypesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        sessionEntityTypes: sessionEntityTypes,
      };

      // Mock Grpc layer
      client._innerApiCalls.listSessionEntityTypes = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.sessionEntityTypes);
      };

      client.listSessionEntityTypes(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.sessionEntityTypes);
        done();
      });
    });

    it('invokes listSessionEntityTypes with error', done => {
      const client = new dialogflowModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listSessionEntityTypes = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listSessionEntityTypes(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getSessionEntityType', () => {
    it('invokes getSessionEntityType without error', done => {
      const client = new dialogflowModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.sessionEntityTypePath(
        '[PROJECT]',
        '[SESSION]',
        '[ENTITY_TYPE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const expectedResponse = {
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.getSessionEntityType = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getSessionEntityType(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getSessionEntityType with error', done => {
      const client = new dialogflowModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.sessionEntityTypePath(
        '[PROJECT]',
        '[SESSION]',
        '[ENTITY_TYPE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getSessionEntityType = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getSessionEntityType(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createSessionEntityType', () => {
    it('invokes createSessionEntityType without error', done => {
      const client = new dialogflowModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
      const sessionEntityType = {};
      const request = {
        parent: formattedParent,
        sessionEntityType: sessionEntityType,
      };

      // Mock response
      const name = 'name3373707';
      const expectedResponse = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.createSessionEntityType = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createSessionEntityType(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createSessionEntityType with error', done => {
      const client = new dialogflowModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.sessionPath('[PROJECT]', '[SESSION]');
      const sessionEntityType = {};
      const request = {
        parent: formattedParent,
        sessionEntityType: sessionEntityType,
      };

      // Mock Grpc layer
      client._innerApiCalls.createSessionEntityType = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createSessionEntityType(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateSessionEntityType', () => {
    it('invokes updateSessionEntityType without error', done => {
      const client = new dialogflowModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const sessionEntityType = {};
      const request = {
        sessionEntityType: sessionEntityType,
      };

      // Mock response
      const name = 'name3373707';
      const expectedResponse = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateSessionEntityType = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateSessionEntityType(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateSessionEntityType with error', done => {
      const client = new dialogflowModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const sessionEntityType = {};
      const request = {
        sessionEntityType: sessionEntityType,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateSessionEntityType = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateSessionEntityType(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteSessionEntityType', () => {
    it('invokes deleteSessionEntityType without error', done => {
      const client = new dialogflowModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.sessionEntityTypePath(
        '[PROJECT]',
        '[SESSION]',
        '[ENTITY_TYPE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteSessionEntityType = mockSimpleGrpcMethod(
        request
      );

      client.deleteSessionEntityType(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteSessionEntityType with error', done => {
      const client = new dialogflowModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.sessionEntityTypePath(
        '[PROJECT]',
        '[SESSION]',
        '[ENTITY_TYPE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteSessionEntityType = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteSessionEntityType(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });
});
describe('SessionsClient', () => {
  describe('detectIntent', () => {
    it('invokes detectIntent without error', done => {
      const client = new dialogflowModule.v2.SessionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedSession = client.sessionPath('[PROJECT]', '[SESSION]');
      const queryInput = {};
      const request = {
        session: formattedSession,
        queryInput: queryInput,
      };

      // Mock response
      const responseId = 'responseId1847552473';
      const expectedResponse = {
        responseId: responseId,
      };

      // Mock Grpc layer
      client._innerApiCalls.detectIntent = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.detectIntent(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes detectIntent with error', done => {
      const client = new dialogflowModule.v2.SessionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedSession = client.sessionPath('[PROJECT]', '[SESSION]');
      const queryInput = {};
      const request = {
        session: formattedSession,
        queryInput: queryInput,
      };

      // Mock Grpc layer
      client._innerApiCalls.detectIntent = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.detectIntent(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('streamingDetectIntent', () => {
    it('invokes streamingDetectIntent without error', done => {
      const client = new dialogflowModule.v2.SessionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const session = 'session1984987798';
      const queryInput = {};
      const request = {
        session: session,
        queryInput: queryInput,
      };

      // Mock response
      const responseId = 'responseId1847552473';
      const expectedResponse = {
        responseId: responseId,
      };

      // Mock Grpc layer
      client._innerApiCalls.streamingDetectIntent = mockBidiStreamingGrpcMethod(
        request,
        expectedResponse
      );

      const stream = client
        .streamingDetectIntent()
        .on('data', response => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', err => {
          done(err);
        });

      stream.write(request);
    });

    it('invokes streamingDetectIntent with error', done => {
      const client = new dialogflowModule.v2.SessionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const session = 'session1984987798';
      const queryInput = {};
      const request = {
        session: session,
        queryInput: queryInput,
      };

      // Mock Grpc layer
      client._innerApiCalls.streamingDetectIntent = mockBidiStreamingGrpcMethod(
        request,
        null,
        error
      );

      const stream = client
        .streamingDetectIntent()
        .on('data', () => {
          assert.fail();
        })
        .on('error', err => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });

      stream.write(request);
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

function mockBidiStreamingGrpcMethod(expectedRequest, response, error) {
  return () => {
    const mockStream = through2.obj((chunk, enc, callback) => {
      assert.deepStrictEqual(chunk, expectedRequest);
      if (error) {
        callback(error);
      } else {
        callback(null, response);
      }
    });
    return mockStream;
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
