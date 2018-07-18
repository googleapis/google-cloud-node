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

const dataprocModule = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('ClusterControllerClient', () => {
  describe('createCluster', function() {
    it('invokes createCluster without error', done => {
      var client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var cluster = {};
      var request = {
        projectId: projectId,
        region: region,
        cluster: cluster,
      };

      // Mock response
      var projectId2 = 'projectId2939242356';
      var clusterName = 'clusterName-1018081872';
      var clusterUuid = 'clusterUuid-1017854240';
      var expectedResponse = {
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
          var operation = responses[0];
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
      var client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var cluster = {};
      var request = {
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
          var operation = responses[0];
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
      var client = new dataprocModule.v1.ClusterControllerClient({
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
      var client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var clusterName = 'clusterName-1018081872';
      var cluster = {};
      var updateMask = {};
      var request = {
        projectId: projectId,
        region: region,
        clusterName: clusterName,
        cluster: cluster,
        updateMask: updateMask,
      };

      // Mock response
      var projectId2 = 'projectId2939242356';
      var clusterName2 = 'clusterName2875867491';
      var clusterUuid = 'clusterUuid-1017854240';
      var expectedResponse = {
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
          var operation = responses[0];
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
      var client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var clusterName = 'clusterName-1018081872';
      var cluster = {};
      var updateMask = {};
      var request = {
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
          var operation = responses[0];
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
      var client = new dataprocModule.v1.ClusterControllerClient({
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
      var client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var clusterName = 'clusterName-1018081872';
      var request = {
        projectId: projectId,
        region: region,
        clusterName: clusterName,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.deleteCluster = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .deleteCluster(request)
        .then(responses => {
          var operation = responses[0];
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
      var client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var clusterName = 'clusterName-1018081872';
      var request = {
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
          var operation = responses[0];
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
      var client = new dataprocModule.v1.ClusterControllerClient({
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
      var client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var clusterName = 'clusterName-1018081872';
      var request = {
        projectId: projectId,
        region: region,
        clusterName: clusterName,
      };

      // Mock response
      var projectId2 = 'projectId2939242356';
      var clusterName2 = 'clusterName2875867491';
      var clusterUuid = 'clusterUuid-1017854240';
      var expectedResponse = {
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
      var client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var clusterName = 'clusterName-1018081872';
      var request = {
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
      var client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var request = {
        projectId: projectId,
        region: region,
      };

      // Mock response
      var nextPageToken = '';
      var clustersElement = {};
      var clusters = [clustersElement];
      var expectedResponse = {
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
      var client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var request = {
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
      var client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var clusterName = 'clusterName-1018081872';
      var request = {
        projectId: projectId,
        region: region,
        clusterName: clusterName,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.diagnoseCluster = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .diagnoseCluster(request)
        .then(responses => {
          var operation = responses[0];
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
      var client = new dataprocModule.v1.ClusterControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var clusterName = 'clusterName-1018081872';
      var request = {
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
          var operation = responses[0];
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
      var client = new dataprocModule.v1.ClusterControllerClient({
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
  describe('submitJob', () => {
    it('invokes submitJob without error', done => {
      var client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var job = {};
      var request = {
        projectId: projectId,
        region: region,
        job: job,
      };

      // Mock response
      var driverOutputResourceUri = 'driverOutputResourceUri-542229086';
      var driverControlFilesUri = 'driverControlFilesUri207057643';
      var expectedResponse = {
        driverOutputResourceUri: driverOutputResourceUri,
        driverControlFilesUri: driverControlFilesUri,
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
      var client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var job = {};
      var request = {
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
      var client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var jobId = 'jobId-1154752291';
      var request = {
        projectId: projectId,
        region: region,
        jobId: jobId,
      };

      // Mock response
      var driverOutputResourceUri = 'driverOutputResourceUri-542229086';
      var driverControlFilesUri = 'driverControlFilesUri207057643';
      var expectedResponse = {
        driverOutputResourceUri: driverOutputResourceUri,
        driverControlFilesUri: driverControlFilesUri,
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
      var client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var jobId = 'jobId-1154752291';
      var request = {
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
      var client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var request = {
        projectId: projectId,
        region: region,
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
      var client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var request = {
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
      var client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var jobId = 'jobId-1154752291';
      var job = {};
      var updateMask = {};
      var request = {
        projectId: projectId,
        region: region,
        jobId: jobId,
        job: job,
        updateMask: updateMask,
      };

      // Mock response
      var driverOutputResourceUri = 'driverOutputResourceUri-542229086';
      var driverControlFilesUri = 'driverControlFilesUri207057643';
      var expectedResponse = {
        driverOutputResourceUri: driverOutputResourceUri,
        driverControlFilesUri: driverControlFilesUri,
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
      var client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var jobId = 'jobId-1154752291';
      var job = {};
      var updateMask = {};
      var request = {
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
      var client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var jobId = 'jobId-1154752291';
      var request = {
        projectId: projectId,
        region: region,
        jobId: jobId,
      };

      // Mock response
      var driverOutputResourceUri = 'driverOutputResourceUri-542229086';
      var driverControlFilesUri = 'driverControlFilesUri207057643';
      var expectedResponse = {
        driverOutputResourceUri: driverOutputResourceUri,
        driverControlFilesUri: driverControlFilesUri,
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
      var client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var jobId = 'jobId-1154752291';
      var request = {
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
      var client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var jobId = 'jobId-1154752291';
      var request = {
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
      var client = new dataprocModule.v1.JobControllerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var region = 'region-934795532';
      var jobId = 'jobId-1154752291';
      var request = {
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
    var mockOperation = {
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
