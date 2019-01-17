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

const schedulerModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('CloudSchedulerClient', () => {
  describe('listJobs', () => {
    it('invokes listJobs without error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
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
      const jobsElement = {};
      const jobs = [jobsElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        jobs: jobs,
      };

      // Mock Grpc layer
      client._innerApiCalls.listJobs = (actualRequest, options, callback) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.jobs);
      };

      client.listJobs(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.jobs);
        done();
      });
    });

    it('invokes listJobs with error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listJobs = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listJobs(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getJob', () => {
    it('invokes getJob without error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const description = 'description-1724546052';
      const schedule = 'schedule-697920873';
      const timeZone = 'timeZone36848094';
      const expectedResponse = {
        name: name2,
        description: description,
        schedule: schedule,
        timeZone: timeZone,
      };

      // Mock Grpc layer
      client._innerApiCalls.getJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getJob with error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getJob = mockSimpleGrpcMethod(request, null, error);

      client.getJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createJob', () => {
    it('invokes createJob without error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const job = {};
      const request = {
        parent: formattedParent,
        job: job,
      };

      // Mock response
      const name = 'name3373707';
      const description = 'description-1724546052';
      const schedule = 'schedule-697920873';
      const timeZone = 'timeZone36848094';
      const expectedResponse = {
        name: name,
        description: description,
        schedule: schedule,
        timeZone: timeZone,
      };

      // Mock Grpc layer
      client._innerApiCalls.createJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createJob with error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const job = {};
      const request = {
        parent: formattedParent,
        job: job,
      };

      // Mock Grpc layer
      client._innerApiCalls.createJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateJob', () => {
    it('invokes updateJob without error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const job = {};
      const request = {
        job: job,
      };

      // Mock response
      const name = 'name3373707';
      const description = 'description-1724546052';
      const schedule = 'schedule-697920873';
      const timeZone = 'timeZone36848094';
      const expectedResponse = {
        name: name,
        description: description,
        schedule: schedule,
        timeZone: timeZone,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateJob with error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const job = {};
      const request = {
        job: job,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteJob', () => {
    it('invokes deleteJob without error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteJob = mockSimpleGrpcMethod(request);

      client.deleteJob(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteJob with error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteJob(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('pauseJob', () => {
    it('invokes pauseJob without error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const description = 'description-1724546052';
      const schedule = 'schedule-697920873';
      const timeZone = 'timeZone36848094';
      const expectedResponse = {
        name: name2,
        description: description,
        schedule: schedule,
        timeZone: timeZone,
      };

      // Mock Grpc layer
      client._innerApiCalls.pauseJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.pauseJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes pauseJob with error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.pauseJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.pauseJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('resumeJob', () => {
    it('invokes resumeJob without error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const description = 'description-1724546052';
      const schedule = 'schedule-697920873';
      const timeZone = 'timeZone36848094';
      const expectedResponse = {
        name: name2,
        description: description,
        schedule: schedule,
        timeZone: timeZone,
      };

      // Mock Grpc layer
      client._innerApiCalls.resumeJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.resumeJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes resumeJob with error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.resumeJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.resumeJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('runJob', () => {
    it('invokes runJob without error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const description = 'description-1724546052';
      const schedule = 'schedule-697920873';
      const timeZone = 'timeZone36848094';
      const expectedResponse = {
        name: name2,
        description: description,
        schedule: schedule,
        timeZone: timeZone,
      };

      // Mock Grpc layer
      client._innerApiCalls.runJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.runJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes runJob with error', done => {
      const client = new schedulerModule.v1beta1.CloudSchedulerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.runJob = mockSimpleGrpcMethod(request, null, error);

      client.runJob(request, (err, response) => {
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
