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

const workflowsModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('WorkflowsClient', () => {
  it('has servicePath', () => {
    const servicePath = workflowsModule.v1alpha1.WorkflowsClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = workflowsModule.v1alpha1.WorkflowsClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = workflowsModule.v1alpha1.WorkflowsClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new workflowsModule.v1alpha1.WorkflowsClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new workflowsModule.v1alpha1.WorkflowsClient({fallback: true});
    assert(client);
  });

  describe('listWorkflows', () => {
    it('invokes listWorkflows without error', done => {
      const client = new workflowsModule.v1alpha1.WorkflowsClient({
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
      const workflowsElement = {};
      const workflows = [workflowsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        workflows: workflows,
      };

      // Mock Grpc layer
      client._innerApiCalls.listWorkflows = (actualRequest, options, callback) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.workflows);
      };

      client.listWorkflows(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.workflows);
        done();
      });
    });

    it('invokes listWorkflows with error', done => {
      const client = new workflowsModule.v1alpha1.WorkflowsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listWorkflows = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listWorkflows(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getWorkflow', () => {
    it('invokes getWorkflow without error', done => {
      const client = new workflowsModule.v1alpha1.WorkflowsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.workflowPath('[PROJECT]', '[LOCATION]', '[WORKFLOW]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const description = 'description-1724546052';
      const sourceContents = 'sourceContents-1799875906';
      const versionId = 670497310;
      const expectedResponse = {
        name: name2,
        description: description,
        sourceContents: sourceContents,
        versionId: versionId,
      };

      // Mock Grpc layer
      client._innerApiCalls.getWorkflow = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getWorkflow(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getWorkflow with error', done => {
      const client = new workflowsModule.v1alpha1.WorkflowsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.workflowPath('[PROJECT]', '[LOCATION]', '[WORKFLOW]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getWorkflow = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getWorkflow(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createWorkflow', function() {
    it('invokes createWorkflow without error', done => {
      const client = new workflowsModule.v1alpha1.WorkflowsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const workflow = {};
      const workflowId = 'workflowId1712917915';
      const request = {
        parent: formattedParent,
        workflow: workflow,
        workflowId: workflowId,
      };

      // Mock response
      const name = 'name3373707';
      const description = 'description-1724546052';
      const sourceContents = 'sourceContents-1799875906';
      const versionId = 670497310;
      const expectedResponse = {
        name: name,
        description: description,
        sourceContents: sourceContents,
        versionId: versionId,
      };

      // Mock Grpc layer
      client._innerApiCalls.createWorkflow = mockLongRunningGrpcMethod(request, expectedResponse);

      client.createWorkflow(request).then(responses => {
        const operation = responses[0];
        return operation.promise();
      }).then(responses => {
        assert.deepStrictEqual(responses[0], expectedResponse);
        done();
      }).catch(err => {
        done(err);
      });
    });

    it('invokes createWorkflow with error', done => {
      const client = new workflowsModule.v1alpha1.WorkflowsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const workflow = {};
      const workflowId = 'workflowId1712917915';
      const request = {
        parent: formattedParent,
        workflow: workflow,
        workflowId: workflowId,
      };

      // Mock Grpc layer
      client._innerApiCalls.createWorkflow = mockLongRunningGrpcMethod(request, null, error);

      client.createWorkflow(request).then(responses => {
        const operation = responses[0];
        return operation.promise();
      }).then(() => {
        assert.fail();
      }).catch(err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });

    it('has longrunning decoder functions', () => {
      const client = new workflowsModule.v1alpha1.WorkflowsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(client._descriptors.longrunning.createWorkflow.responseDecoder instanceof Function);
      assert(client._descriptors.longrunning.createWorkflow.metadataDecoder instanceof Function);
    });
  });

  describe('deleteWorkflow', function() {
    it('invokes deleteWorkflow without error', done => {
      const client = new workflowsModule.v1alpha1.WorkflowsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.workflowPath('[PROJECT]', '[LOCATION]', '[WORKFLOW]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.deleteWorkflow = mockLongRunningGrpcMethod(request, expectedResponse);

      client.deleteWorkflow(request).then(responses => {
        const operation = responses[0];
        return operation.promise();
      }).then(responses => {
        assert.deepStrictEqual(responses[0], expectedResponse);
        done();
      }).catch(err => {
        done(err);
      });
    });

    it('invokes deleteWorkflow with error', done => {
      const client = new workflowsModule.v1alpha1.WorkflowsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.workflowPath('[PROJECT]', '[LOCATION]', '[WORKFLOW]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteWorkflow = mockLongRunningGrpcMethod(request, null, error);

      client.deleteWorkflow(request).then(responses => {
        const operation = responses[0];
        return operation.promise();
      }).then(() => {
        assert.fail();
      }).catch(err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });

    it('has longrunning decoder functions', () => {
      const client = new workflowsModule.v1alpha1.WorkflowsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(client._descriptors.longrunning.deleteWorkflow.responseDecoder instanceof Function);
      assert(client._descriptors.longrunning.deleteWorkflow.metadataDecoder instanceof Function);
    });
  });

  describe('updateWorkflow', function() {
    it('invokes updateWorkflow without error', done => {
      const client = new workflowsModule.v1alpha1.WorkflowsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const workflow = {};
      const request = {
        workflow: workflow,
      };

      // Mock response
      const name = 'name3373707';
      const description = 'description-1724546052';
      const sourceContents = 'sourceContents-1799875906';
      const versionId = 670497310;
      const expectedResponse = {
        name: name,
        description: description,
        sourceContents: sourceContents,
        versionId: versionId,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateWorkflow = mockLongRunningGrpcMethod(request, expectedResponse);

      client.updateWorkflow(request).then(responses => {
        const operation = responses[0];
        return operation.promise();
      }).then(responses => {
        assert.deepStrictEqual(responses[0], expectedResponse);
        done();
      }).catch(err => {
        done(err);
      });
    });

    it('invokes updateWorkflow with error', done => {
      const client = new workflowsModule.v1alpha1.WorkflowsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const workflow = {};
      const request = {
        workflow: workflow,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateWorkflow = mockLongRunningGrpcMethod(request, null, error);

      client.updateWorkflow(request).then(responses => {
        const operation = responses[0];
        return operation.promise();
      }).then(() => {
        assert.fail();
      }).catch(err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });

    it('has longrunning decoder functions', () => {
      const client = new workflowsModule.v1alpha1.WorkflowsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(client._descriptors.longrunning.updateWorkflow.responseDecoder instanceof Function);
      assert(client._descriptors.longrunning.updateWorkflow.metadataDecoder instanceof Function);
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
          }
          else {
            resolve([response]);
          }
        });
      }
    };
    return Promise.resolve([mockOperation]);
  };
}
