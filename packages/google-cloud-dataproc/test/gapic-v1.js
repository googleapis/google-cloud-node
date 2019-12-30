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

const dataprocModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('ClusterControllerClient', () => {
  it('has servicePath', () => {
    const servicePath = dataprocModule.v1.ClusterControllerClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = dataprocModule.v1.ClusterControllerClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = dataprocModule.v1.ClusterControllerClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new dataprocModule.v1.ClusterControllerClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new dataprocModule.v1.ClusterControllerClient({
      fallback: true,
    });
    assert(client);
  });

  describe('createCluster', function() {
    it('invokes createCluster without error', done => {
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const cluster = {};
      const request = {
        projectId: projectId,
        region: region,
        cluster: cluster,
      };

      // Mock response
      const projectId2 = 'projectId2939242356';
      const clusterName = 'clusterName-1018081872';
      const clusterUuid = 'clusterUuid-1017854240';
      const expectedResponse = {
        projectId: projectId2,
        clusterName: clusterName,
        clusterUuid: clusterUuid,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCluster = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .createCluster(request)
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

    it('invokes createCluster with error', done => {
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const cluster = {};
      const request = {
        projectId: projectId,
        region: region,
        cluster: cluster,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCluster = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .createCluster(request)
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
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.createCluster.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.createCluster.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('updateCluster', function() {
    it('invokes updateCluster without error', done => {
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const clusterName = 'clusterName-1018081872';
      const cluster = {};
      const updateMask = {};
      const request = {
        projectId: projectId,
        region: region,
        clusterName: clusterName,
        cluster: cluster,
        updateMask: updateMask,
      };

      // Mock response
      const projectId2 = 'projectId2939242356';
      const clusterName2 = 'clusterName2875867491';
      const clusterUuid = 'clusterUuid-1017854240';
      const expectedResponse = {
        projectId: projectId2,
        clusterName: clusterName2,
        clusterUuid: clusterUuid,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCluster = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .updateCluster(request)
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

    it('invokes updateCluster with error', done => {
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const clusterName = 'clusterName-1018081872';
      const cluster = {};
      const updateMask = {};
      const request = {
        projectId: projectId,
        region: region,
        clusterName: clusterName,
        cluster: cluster,
        updateMask: updateMask,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCluster = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .updateCluster(request)
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
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.updateCluster.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.updateCluster.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('deleteCluster', function() {
    it('invokes deleteCluster without error', done => {
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const clusterName = 'clusterName-1018081872';
      const request = {
        projectId: projectId,
        region: region,
        clusterName: clusterName,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.deleteCluster = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .deleteCluster(request)
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

    it('invokes deleteCluster with error', done => {
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const clusterName = 'clusterName-1018081872';
      const request = {
        projectId: projectId,
        region: region,
        clusterName: clusterName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteCluster = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .deleteCluster(request)
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
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.deleteCluster.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.deleteCluster.metadataDecoder instanceof
          Function
      );
    });
  });

  describe('getCluster', () => {
    it('invokes getCluster without error', done => {
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const clusterName = 'clusterName-1018081872';
      const request = {
        projectId: projectId,
        region: region,
        clusterName: clusterName,
      };

      // Mock response
      const projectId2 = 'projectId2939242356';
      const clusterName2 = 'clusterName2875867491';
      const clusterUuid = 'clusterUuid-1017854240';
      const expectedResponse = {
        projectId: projectId2,
        clusterName: clusterName2,
        clusterUuid: clusterUuid,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCluster = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getCluster(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getCluster with error', done => {
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const clusterName = 'clusterName-1018081872';
      const request = {
        projectId: projectId,
        region: region,
        clusterName: clusterName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCluster = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getCluster(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listClusters', () => {
    it('invokes listClusters without error', done => {
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const request = {
        projectId: projectId,
        region: region,
      };

      // Mock response
      const nextPageToken = '';
      const clustersElement = {};
      const clusters = [clustersElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        clusters: clusters,
      };

      // Mock Grpc layer
      client._innerApiCalls.listClusters = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.clusters);
      };

      client.listClusters(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.clusters);
        done();
      });
    });

    it('invokes listClusters with error', done => {
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const request = {
        projectId: projectId,
        region: region,
      };

      // Mock Grpc layer
      client._innerApiCalls.listClusters = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listClusters(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('diagnoseCluster', function() {
    it('invokes diagnoseCluster without error', done => {
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const clusterName = 'clusterName-1018081872';
      const request = {
        projectId: projectId,
        region: region,
        clusterName: clusterName,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.diagnoseCluster = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .diagnoseCluster(request)
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

    it('invokes diagnoseCluster with error', done => {
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const clusterName = 'clusterName-1018081872';
      const request = {
        projectId: projectId,
        region: region,
        clusterName: clusterName,
      };

      // Mock Grpc layer
      client._innerApiCalls.diagnoseCluster = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .diagnoseCluster(request)
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
      const client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.diagnoseCluster
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.diagnoseCluster
          .metadataDecoder instanceof Function
      );
    });
  });
});
describe('JobControllerClient', () => {
  it('has servicePath', () => {
    const servicePath = dataprocModule.v1.JobControllerClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = dataprocModule.v1.JobControllerClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = dataprocModule.v1.JobControllerClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new dataprocModule.v1.JobControllerClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new dataprocModule.v1.JobControllerClient({fallback: true});
    assert(client);
  });

  describe('submitJob', () => {
    it('invokes submitJob without error', done => {
      const client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const job = {};
      const request = {
        projectId: projectId,
        region: region,
        job: job,
      };

      // Mock response
      const driverOutputResourceUri = 'driverOutputResourceUri-542229086';
      const driverControlFilesUri = 'driverControlFilesUri207057643';
      const jobUuid = 'jobUuid-1615012099';
      const expectedResponse = {
        driverOutputResourceUri: driverOutputResourceUri,
        driverControlFilesUri: driverControlFilesUri,
        jobUuid: jobUuid,
      };

      // Mock Grpc layer
      client._innerApiCalls.submitJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.submitJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes submitJob with error', done => {
      const client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const job = {};
      const request = {
        projectId: projectId,
        region: region,
        job: job,
      };

      // Mock Grpc layer
      client._innerApiCalls.submitJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.submitJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getJob', () => {
    it('invokes getJob without error', done => {
      const client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const jobId = 'jobId-1154752291';
      const request = {
        projectId: projectId,
        region: region,
        jobId: jobId,
      };

      // Mock response
      const driverOutputResourceUri = 'driverOutputResourceUri-542229086';
      const driverControlFilesUri = 'driverControlFilesUri207057643';
      const jobUuid = 'jobUuid-1615012099';
      const expectedResponse = {
        driverOutputResourceUri: driverOutputResourceUri,
        driverControlFilesUri: driverControlFilesUri,
        jobUuid: jobUuid,
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
      const client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const jobId = 'jobId-1154752291';
      const request = {
        projectId: projectId,
        region: region,
        jobId: jobId,
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

  describe('listJobs', () => {
    it('invokes listJobs without error', done => {
      const client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const request = {
        projectId: projectId,
        region: region,
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
      const client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const request = {
        projectId: projectId,
        region: region,
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

  describe('updateJob', () => {
    it('invokes updateJob without error', done => {
      const client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const jobId = 'jobId-1154752291';
      const job = {};
      const updateMask = {};
      const request = {
        projectId: projectId,
        region: region,
        jobId: jobId,
        job: job,
        updateMask: updateMask,
      };

      // Mock response
      const driverOutputResourceUri = 'driverOutputResourceUri-542229086';
      const driverControlFilesUri = 'driverControlFilesUri207057643';
      const jobUuid = 'jobUuid-1615012099';
      const expectedResponse = {
        driverOutputResourceUri: driverOutputResourceUri,
        driverControlFilesUri: driverControlFilesUri,
        jobUuid: jobUuid,
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
      const client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const jobId = 'jobId-1154752291';
      const job = {};
      const updateMask = {};
      const request = {
        projectId: projectId,
        region: region,
        jobId: jobId,
        job: job,
        updateMask: updateMask,
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

  describe('cancelJob', () => {
    it('invokes cancelJob without error', done => {
      const client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const jobId = 'jobId-1154752291';
      const request = {
        projectId: projectId,
        region: region,
        jobId: jobId,
      };

      // Mock response
      const driverOutputResourceUri = 'driverOutputResourceUri-542229086';
      const driverControlFilesUri = 'driverControlFilesUri207057643';
      const jobUuid = 'jobUuid-1615012099';
      const expectedResponse = {
        driverOutputResourceUri: driverOutputResourceUri,
        driverControlFilesUri: driverControlFilesUri,
        jobUuid: jobUuid,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelJob = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.cancelJob(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes cancelJob with error', done => {
      const client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const jobId = 'jobId-1154752291';
      const request = {
        projectId: projectId,
        region: region,
        jobId: jobId,
      };

      // Mock Grpc layer
      client._innerApiCalls.cancelJob = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.cancelJob(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteJob', () => {
    it('invokes deleteJob without error', done => {
      const client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const jobId = 'jobId-1154752291';
      const request = {
        projectId: projectId,
        region: region,
        jobId: jobId,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteJob = mockSimpleGrpcMethod(request);

      client.deleteJob(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteJob with error', done => {
      const client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const projectId = 'projectId-1969970175';
      const region = 'region-934795532';
      const jobId = 'jobId-1154752291';
      const request = {
        projectId: projectId,
        region: region,
        jobId: jobId,
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
});
describe('WorkflowTemplateServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      dataprocModule.v1.WorkflowTemplateServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      dataprocModule.v1.WorkflowTemplateServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = dataprocModule.v1.WorkflowTemplateServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new dataprocModule.v1.WorkflowTemplateServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
      fallback: true,
    });
    assert(client);
  });

  describe('createWorkflowTemplate', () => {
    it('invokes createWorkflowTemplate without error', done => {
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
      const template = {};
      const request = {
        parent: formattedParent,
        template: template,
      };

      // Mock response
      const id = 'id3355';
      const name = 'name3373707';
      const version = 351608024;
      const expectedResponse = {
        id: id,
        name: name,
        version: version,
      };

      // Mock Grpc layer
      client._innerApiCalls.createWorkflowTemplate = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createWorkflowTemplate(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createWorkflowTemplate with error', done => {
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
      const template = {};
      const request = {
        parent: formattedParent,
        template: template,
      };

      // Mock Grpc layer
      client._innerApiCalls.createWorkflowTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createWorkflowTemplate(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getWorkflowTemplate', () => {
    it('invokes getWorkflowTemplate without error', done => {
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.workflowTemplatePath(
        '[PROJECT]',
        '[REGION]',
        '[WORKFLOW_TEMPLATE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const id = 'id3355';
      const name2 = 'name2-1052831874';
      const version = 351608024;
      const expectedResponse = {
        id: id,
        name: name2,
        version: version,
      };

      // Mock Grpc layer
      client._innerApiCalls.getWorkflowTemplate = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getWorkflowTemplate(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getWorkflowTemplate with error', done => {
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.workflowTemplatePath(
        '[PROJECT]',
        '[REGION]',
        '[WORKFLOW_TEMPLATE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getWorkflowTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getWorkflowTemplate(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('instantiateWorkflowTemplate', function() {
    it('invokes instantiateWorkflowTemplate without error', done => {
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.workflowTemplatePath(
        '[PROJECT]',
        '[REGION]',
        '[WORKFLOW_TEMPLATE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.instantiateWorkflowTemplate = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .instantiateWorkflowTemplate(request)
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

    it('invokes instantiateWorkflowTemplate with error', done => {
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.workflowTemplatePath(
        '[PROJECT]',
        '[REGION]',
        '[WORKFLOW_TEMPLATE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.instantiateWorkflowTemplate = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .instantiateWorkflowTemplate(request)
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
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.instantiateWorkflowTemplate
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.instantiateWorkflowTemplate
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('instantiateInlineWorkflowTemplate', function() {
    it('invokes instantiateInlineWorkflowTemplate without error', done => {
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
      const template = {};
      const request = {
        parent: formattedParent,
        template: template,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.instantiateInlineWorkflowTemplate = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .instantiateInlineWorkflowTemplate(request)
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

    it('invokes instantiateInlineWorkflowTemplate with error', done => {
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
      const template = {};
      const request = {
        parent: formattedParent,
        template: template,
      };

      // Mock Grpc layer
      client._innerApiCalls.instantiateInlineWorkflowTemplate = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .instantiateInlineWorkflowTemplate(request)
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
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.instantiateInlineWorkflowTemplate
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.instantiateInlineWorkflowTemplate
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('updateWorkflowTemplate', () => {
    it('invokes updateWorkflowTemplate without error', done => {
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const template = {};
      const request = {
        template: template,
      };

      // Mock response
      const id = 'id3355';
      const name = 'name3373707';
      const version = 351608024;
      const expectedResponse = {
        id: id,
        name: name,
        version: version,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateWorkflowTemplate = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateWorkflowTemplate(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateWorkflowTemplate with error', done => {
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const template = {};
      const request = {
        template: template,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateWorkflowTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateWorkflowTemplate(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listWorkflowTemplates', () => {
    it('invokes listWorkflowTemplates without error', done => {
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const nextPageToken = '';
      const templatesElement = {};
      const templates = [templatesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        templates: templates,
      };

      // Mock Grpc layer
      client._innerApiCalls.listWorkflowTemplates = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.templates);
      };

      client.listWorkflowTemplates(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.templates);
        done();
      });
    });

    it('invokes listWorkflowTemplates with error', done => {
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listWorkflowTemplates = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listWorkflowTemplates(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteWorkflowTemplate', () => {
    it('invokes deleteWorkflowTemplate without error', done => {
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.workflowTemplatePath(
        '[PROJECT]',
        '[REGION]',
        '[WORKFLOW_TEMPLATE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteWorkflowTemplate = mockSimpleGrpcMethod(
        request
      );

      client.deleteWorkflowTemplate(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteWorkflowTemplate with error', done => {
      const client = new dataprocModule.v1.WorkflowTemplateServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.workflowTemplatePath(
        '[PROJECT]',
        '[REGION]',
        '[WORKFLOW_TEMPLATE]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteWorkflowTemplate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteWorkflowTemplate(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
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
