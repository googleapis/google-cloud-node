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

const tasksModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('CloudTasksClient', () => {
  describe('listQueues', () => {
    it('invokes listQueues without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
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
      const queuesElement = {};
      const queues = [queuesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        queues: queues,
      };

      // Mock Grpc layer
      client._innerApiCalls.listQueues = (actualRequest, options, callback) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.queues);
      };

      client.listQueues(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.queues);
        done();
      });
    });

    it('invokes listQueues with error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listQueues = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listQueues(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getQueue', () => {
    it('invokes getQueue without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
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
      client._innerApiCalls.getQueue = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getQueue(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getQueue with error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getQueue = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getQueue(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createQueue', () => {
    it('invokes createQueue without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const queue = {};
      const request = {
        parent: formattedParent,
        queue: queue,
      };

      // Mock response
      const name = 'name3373707';
      const expectedResponse = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.createQueue = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createQueue(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createQueue with error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const queue = {};
      const request = {
        parent: formattedParent,
        queue: queue,
      };

      // Mock Grpc layer
      client._innerApiCalls.createQueue = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createQueue(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateQueue', () => {
    it('invokes updateQueue without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const queue = {};
      const request = {
        queue: queue,
      };

      // Mock response
      const name = 'name3373707';
      const expectedResponse = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateQueue = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateQueue(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateQueue with error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const queue = {};
      const request = {
        queue: queue,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateQueue = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateQueue(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteQueue', () => {
    it('invokes deleteQueue without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteQueue = mockSimpleGrpcMethod(request);

      client.deleteQueue(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteQueue with error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteQueue = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteQueue(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('purgeQueue', () => {
    it('invokes purgeQueue without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
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
      client._innerApiCalls.purgeQueue = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.purgeQueue(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes purgeQueue with error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.purgeQueue = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.purgeQueue(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('pauseQueue', () => {
    it('invokes pauseQueue without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
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
      client._innerApiCalls.pauseQueue = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.pauseQueue(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes pauseQueue with error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.pauseQueue = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.pauseQueue(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('resumeQueue', () => {
    it('invokes resumeQueue without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
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
      client._innerApiCalls.resumeQueue = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.resumeQueue(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes resumeQueue with error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.resumeQueue = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.resumeQueue(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getIamPolicy', () => {
    it('invokes getIamPolicy without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
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
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
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

  describe('setIamPolicy', () => {
    it('invokes setIamPolicy without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
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
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
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

  describe('testIamPermissions', () => {
    it('invokes testIamPermissions without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
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
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedResource = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
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

  describe('listTasks', () => {
    it('invokes listTasks without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const tasksElement = {};
      const tasks = [tasksElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        tasks: tasks,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTasks = (actualRequest, options, callback) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.tasks);
      };

      client.listTasks(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.tasks);
        done();
      });
    });

    it('invokes listTasks with error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listTasks = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listTasks(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getTask', () => {
    it('invokes getTask without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const dispatchCount = 1217252086;
      const responseCount = 424727441;
      const expectedResponse = {
        name: name2,
        dispatchCount: dispatchCount,
        responseCount: responseCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.getTask = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getTask(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getTask with error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getTask = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getTask(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createTask', () => {
    it('invokes createTask without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      const task = {};
      const request = {
        parent: formattedParent,
        task: task,
      };

      // Mock response
      const name = 'name3373707';
      const dispatchCount = 1217252086;
      const responseCount = 424727441;
      const expectedResponse = {
        name: name,
        dispatchCount: dispatchCount,
        responseCount: responseCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTask = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createTask(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createTask with error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      const task = {};
      const request = {
        parent: formattedParent,
        task: task,
      };

      // Mock Grpc layer
      client._innerApiCalls.createTask = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createTask(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteTask', () => {
    it('invokes deleteTask without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTask = mockSimpleGrpcMethod(request);

      client.deleteTask(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteTask with error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteTask = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteTask(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('runTask', () => {
    it('invokes runTask without error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const dispatchCount = 1217252086;
      const responseCount = 424727441;
      const expectedResponse = {
        name: name2,
        dispatchCount: dispatchCount,
        responseCount: responseCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.runTask = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.runTask(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes runTask with error', done => {
      const client = new tasksModule.v2beta3.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.runTask = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.runTask(request, (err, response) => {
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
