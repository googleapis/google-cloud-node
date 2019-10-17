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

const cloudbuildModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('CloudBuildClient', () => {
  it('has servicePath', () => {
    const servicePath = cloudbuildModule.v1.CloudBuildClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = cloudbuildModule.v1.CloudBuildClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = cloudbuildModule.v1.CloudBuildClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new cloudbuildModule.v1.CloudBuildClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new cloudbuildModule.v1.CloudBuildClient({fallback: true});
    assert(client);
  });

  describe('createBuild', () => {
    it('invokes createBuild without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const build = {};
      const request = {
        projectId: projectId,
        build: build,
      };

      // Mock response
      const name = 'name3373707';
      const done_ = true;
      const expectedResponse = {
        name: name,
        done: done_,
      };

      // Mock Grpc layer
      client._innerApiCalls.createBuild = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createBuild(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createBuild with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const build = {};
      const request = {
        projectId: projectId,
        build: build,
      };

      // Mock Grpc layer
      client._innerApiCalls.createBuild = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createBuild(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getBuild', () => {
    it('invokes getBuild without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const id = 'id3355';
      const request = {
        projectId: projectId,
        id: id,
      };

      // Mock response
      const id2 = 'id23227150';
      const projectId2 = 'projectId2939242356';
      const statusDetail = 'statusDetail2089931070';
      const logsBucket = 'logsBucket1565363834';
      const buildTriggerId = 'buildTriggerId1105559411';
      const logUrl = 'logUrl342054388';
      const expectedResponse = {
        id: id2,
        projectId: projectId2,
        statusDetail: statusDetail,
        logsBucket: logsBucket,
        buildTriggerId: buildTriggerId,
        logUrl: logUrl,
      };

      // Mock Grpc layer
      client._innerApiCalls.getBuild = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getBuild(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getBuild with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const id = 'id3355';
      const request = {
        projectId: projectId,
        id: id,
      };

      // Mock Grpc layer
      client._innerApiCalls.getBuild = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getBuild(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listBuilds', () => {
    it('invokes listBuilds without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const request = {
        projectId: projectId,
      };

      // Mock response
      const nextPageToken = '';
      const buildsElement = {};
      const builds = [buildsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        builds: builds,
      };

      // Mock Grpc layer
      client._innerApiCalls.listBuilds = (actualRequest, options, callback) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.builds);
      };

      client.listBuilds(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.builds);
        done();
      });
    });

    it('invokes listBuilds with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const request = {
        projectId: projectId,
      };

      // Mock Grpc layer
      client._innerApiCalls.listBuilds = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listBuilds(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('cancelBuild', () => {
    it('invokes cancelBuild without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const id = 'id3355';
      const request = {
        projectId: projectId,
        id: id,
      };

      // Mock response
      const id2 = 'id23227150';
      const projectId2 = 'projectId2939242356';
      const statusDetail = 'statusDetail2089931070';
      const logsBucket = 'logsBucket1565363834';
      const buildTriggerId = 'buildTriggerId1105559411';
      const logUrl = 'logUrl342054388';
      const expectedResponse = {
        id: id2,
        projectId: projectId2,
        statusDetail: statusDetail,
        logsBucket: logsBucket,
        buildTriggerId: buildTriggerId,
        logUrl: logUrl,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelBuild = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.cancelBuild(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes cancelBuild with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const id = 'id3355';
      const request = {
        projectId: projectId,
        id: id,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelBuild = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.cancelBuild(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createBuildTrigger', () => {
    it('invokes createBuildTrigger without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const trigger = {};
      const request = {
        projectId: projectId,
        trigger: trigger,
      };

      // Mock response
      const id = 'id3355';
      const description = 'description-1724546052';
      const name = 'name3373707';
      const filename = 'filename-734768633';
      const disabled = true;
      const expectedResponse = {
        id: id,
        description: description,
        name: name,
        filename: filename,
        disabled: disabled,
      };

      // Mock Grpc layer
      client._innerApiCalls.createBuildTrigger = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createBuildTrigger(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createBuildTrigger with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const trigger = {};
      const request = {
        projectId: projectId,
        trigger: trigger,
      };

      // Mock Grpc layer
      client._innerApiCalls.createBuildTrigger = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createBuildTrigger(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getBuildTrigger', () => {
    it('invokes getBuildTrigger without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const triggerId = 'triggerId1363517698';
      const request = {
        projectId: projectId,
        triggerId: triggerId,
      };

      // Mock response
      const id = 'id3355';
      const description = 'description-1724546052';
      const name = 'name3373707';
      const filename = 'filename-734768633';
      const disabled = true;
      const expectedResponse = {
        id: id,
        description: description,
        name: name,
        filename: filename,
        disabled: disabled,
      };

      // Mock Grpc layer
      client._innerApiCalls.getBuildTrigger = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getBuildTrigger(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getBuildTrigger with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const triggerId = 'triggerId1363517698';
      const request = {
        projectId: projectId,
        triggerId: triggerId,
      };

      // Mock Grpc layer
      client._innerApiCalls.getBuildTrigger = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getBuildTrigger(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listBuildTriggers', () => {
    it('invokes listBuildTriggers without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const request = {
        projectId: projectId,
      };

      // Mock response
      const nextPageToken = 'nextPageToken-1530815211';
      const expectedResponse = {
        nextPageToken: nextPageToken,
      };

      // Mock Grpc layer
      client._innerApiCalls.listBuildTriggers = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listBuildTriggers(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listBuildTriggers with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const request = {
        projectId: projectId,
      };

      // Mock Grpc layer
      client._innerApiCalls.listBuildTriggers = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listBuildTriggers(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteBuildTrigger', () => {
    it('invokes deleteBuildTrigger without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const triggerId = 'triggerId1363517698';
      const request = {
        projectId: projectId,
        triggerId: triggerId,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteBuildTrigger = mockSimpleGrpcMethod(request);

      client.deleteBuildTrigger(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteBuildTrigger with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const triggerId = 'triggerId1363517698';
      const request = {
        projectId: projectId,
        triggerId: triggerId,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteBuildTrigger = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteBuildTrigger(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('updateBuildTrigger', () => {
    it('invokes updateBuildTrigger without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const triggerId = 'triggerId1363517698';
      const trigger = {};
      const request = {
        projectId: projectId,
        triggerId: triggerId,
        trigger: trigger,
      };

      // Mock response
      const id = 'id3355';
      const description = 'description-1724546052';
      const name = 'name3373707';
      const filename = 'filename-734768633';
      const disabled = true;
      const expectedResponse = {
        id: id,
        description: description,
        name: name,
        filename: filename,
        disabled: disabled,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateBuildTrigger = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateBuildTrigger(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateBuildTrigger with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const triggerId = 'triggerId1363517698';
      const trigger = {};
      const request = {
        projectId: projectId,
        triggerId: triggerId,
        trigger: trigger,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateBuildTrigger = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateBuildTrigger(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('runBuildTrigger', () => {
    it('invokes runBuildTrigger without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const triggerId = 'triggerId1363517698';
      const source = {};
      const request = {
        projectId: projectId,
        triggerId: triggerId,
        source: source,
      };

      // Mock response
      const name = 'name3373707';
      const done_ = true;
      const expectedResponse = {
        name: name,
        done: done_,
      };

      // Mock Grpc layer
      client._innerApiCalls.runBuildTrigger = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.runBuildTrigger(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes runBuildTrigger with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const triggerId = 'triggerId1363517698';
      const source = {};
      const request = {
        projectId: projectId,
        triggerId: triggerId,
        source: source,
      };

      // Mock Grpc layer
      client._innerApiCalls.runBuildTrigger = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.runBuildTrigger(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('retryBuild', () => {
    it('invokes retryBuild without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const id = 'id3355';
      const request = {
        projectId: projectId,
        id: id,
      };

      // Mock response
      const name = 'name3373707';
      const done_ = true;
      const expectedResponse = {
        name: name,
        done: done_,
      };

      // Mock Grpc layer
      client._innerApiCalls.retryBuild = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.retryBuild(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes retryBuild with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const id = 'id3355';
      const request = {
        projectId: projectId,
        id: id,
      };

      // Mock Grpc layer
      client._innerApiCalls.retryBuild = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.retryBuild(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createWorkerPool', () => {
    it('invokes createWorkerPool without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const name = 'name3373707';
      const projectId = 'projectId-1969970175';
      const serviceAccountEmail = 'serviceAccountEmail-1300473088';
      const workerCount = 372044046;
      const expectedResponse = {
        name: name,
        projectId: projectId,
        serviceAccountEmail: serviceAccountEmail,
        workerCount: workerCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.createWorkerPool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createWorkerPool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createWorkerPool with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.createWorkerPool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createWorkerPool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getWorkerPool', () => {
    it('invokes getWorkerPool without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const name = 'name3373707';
      const projectId = 'projectId-1969970175';
      const serviceAccountEmail = 'serviceAccountEmail-1300473088';
      const workerCount = 372044046;
      const expectedResponse = {
        name: name,
        projectId: projectId,
        serviceAccountEmail: serviceAccountEmail,
        workerCount: workerCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.getWorkerPool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getWorkerPool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getWorkerPool with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.getWorkerPool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getWorkerPool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteWorkerPool', () => {
    it('invokes deleteWorkerPool without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.deleteWorkerPool = mockSimpleGrpcMethod(request);

      client.deleteWorkerPool(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteWorkerPool with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.deleteWorkerPool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteWorkerPool(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('updateWorkerPool', () => {
    it('invokes updateWorkerPool without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const name = 'name3373707';
      const projectId = 'projectId-1969970175';
      const serviceAccountEmail = 'serviceAccountEmail-1300473088';
      const workerCount = 372044046;
      const expectedResponse = {
        name: name,
        projectId: projectId,
        serviceAccountEmail: serviceAccountEmail,
        workerCount: workerCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateWorkerPool = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateWorkerPool(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateWorkerPool with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.updateWorkerPool = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateWorkerPool(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listWorkerPools', () => {
    it('invokes listWorkerPools without error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listWorkerPools = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listWorkerPools(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listWorkerPools with error', done => {
      const client = new cloudbuildModule.v1.CloudBuildClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.listWorkerPools = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listWorkerPools(request, (err, response) => {
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
