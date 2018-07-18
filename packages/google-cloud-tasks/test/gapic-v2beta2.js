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

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('CloudTasksClient', () => {
  describe('listQueues', () => {
    it('invokes listQueues without error', done => {
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var nextPageToken = '';
      var queuesElement = {};
      var queues = [queuesElement];
      var expectedResponse = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var expectedResponse = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var queue = {};
      var request = {
        parent: formattedParent,
        queue: queue,
      };

      // Mock response
      var name = 'name3373707';
      var expectedResponse = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      var queue = {};
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var queue = {};
      var request = {
        queue: queue,
      };

      // Mock response
      var name = 'name3373707';
      var expectedResponse = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var queue = {};
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var expectedResponse = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var expectedResponse = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var expectedResponse = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedResource = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var request = {
        resource: formattedResource,
      };

      // Mock response
      var version = 351608024;
      var etag = '21';
      var expectedResponse = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedResource = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedResource = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var policy = {};
      var request = {
        resource: formattedResource,
        policy: policy,
      };

      // Mock response
      var version = 351608024;
      var etag = '21';
      var expectedResponse = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedResource = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var policy = {};
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedResource = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var permissions = [];
      var request = {
        resource: formattedResource,
        permissions: permissions,
      };

      // Mock response
      var expectedResponse = {};

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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedResource = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var permissions = [];
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var request = {
        parent: formattedParent,
      };

      // Mock response
      var nextPageToken = '';
      var tasksElement = {};
      var tasks = [tasksElement];
      var expectedResponse = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var expectedResponse = {
        name: name2,
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var task = {};
      var request = {
        parent: formattedParent,
        task: task,
      };

      // Mock response
      var name = 'name3373707';
      var expectedResponse = {
        name: name,
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var task = {};
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      var request = {
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      var request = {
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

  describe('leaseTasks', () => {
    it('invokes leaseTasks without error', done => {
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var leaseDuration = {};
      var request = {
        parent: formattedParent,
        leaseDuration: leaseDuration,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.leaseTasks = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.leaseTasks(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes leaseTasks with error', done => {
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.queuePath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]'
      );
      var leaseDuration = {};
      var request = {
        parent: formattedParent,
        leaseDuration: leaseDuration,
      };

      // Mock Grpc layer
      client._innerApiCalls.leaseTasks = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.leaseTasks(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('acknowledgeTask', () => {
    it('invokes acknowledgeTask without error', done => {
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      var scheduleTime = {};
      var request = {
        name: formattedName,
        scheduleTime: scheduleTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.acknowledgeTask = mockSimpleGrpcMethod(request);

      client.acknowledgeTask(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes acknowledgeTask with error', done => {
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      var scheduleTime = {};
      var request = {
        name: formattedName,
        scheduleTime: scheduleTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.acknowledgeTask = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.acknowledgeTask(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('renewLease', () => {
    it('invokes renewLease without error', done => {
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      var scheduleTime = {};
      var leaseDuration = {};
      var request = {
        name: formattedName,
        scheduleTime: scheduleTime,
        leaseDuration: leaseDuration,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var expectedResponse = {
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.renewLease = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.renewLease(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes renewLease with error', done => {
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      var scheduleTime = {};
      var leaseDuration = {};
      var request = {
        name: formattedName,
        scheduleTime: scheduleTime,
        leaseDuration: leaseDuration,
      };

      // Mock Grpc layer
      client._innerApiCalls.renewLease = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.renewLease(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('cancelLease', () => {
    it('invokes cancelLease without error', done => {
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      var scheduleTime = {};
      var request = {
        name: formattedName,
        scheduleTime: scheduleTime,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var expectedResponse = {
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelLease = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.cancelLease(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes cancelLease with error', done => {
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      var scheduleTime = {};
      var request = {
        name: formattedName,
        scheduleTime: scheduleTime,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelLease = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.cancelLease(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('runTask', () => {
    it('invokes runTask without error', done => {
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var expectedResponse = {
        name: name2,
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
      var client = new tasksModule.v2beta2.CloudTasksClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.taskPath(
        '[PROJECT]',
        '[LOCATION]',
        '[QUEUE]',
        '[TASK]'
      );
      var request = {
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
