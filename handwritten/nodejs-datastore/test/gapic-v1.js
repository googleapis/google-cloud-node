// Copyright 2017, Google LLC All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const assert = require('assert');

const datastoreModule = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('DatastoreClient', () => {
  describe('lookup', () => {
    it('invokes lookup without error', done => {
      var client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var keys = [];
      var request = {
        projectId: projectId,
        keys: keys,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.lookup = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.lookup(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes lookup with error', done => {
      var client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var keys = [];
      var request = {
        projectId: projectId,
        keys: keys,
      };

      // Mock Grpc layer
      client._innerApiCalls.lookup = mockSimpleGrpcMethod(request, null, error);

      client.lookup(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('runQuery', () => {
    it('invokes runQuery without error', done => {
      var client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var partitionId = {};
      var request = {
        projectId: projectId,
        partitionId: partitionId,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.runQuery = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.runQuery(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes runQuery with error', done => {
      var client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var partitionId = {};
      var request = {
        projectId: projectId,
        partitionId: partitionId,
      };

      // Mock Grpc layer
      client._innerApiCalls.runQuery = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.runQuery(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('beginTransaction', () => {
    it('invokes beginTransaction without error', done => {
      var client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var request = {
        projectId: projectId,
      };

      // Mock response
      var transaction = '-34';
      var expectedResponse = {
        transaction: transaction,
      };

      // Mock Grpc layer
      client._innerApiCalls.beginTransaction = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.beginTransaction(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes beginTransaction with error', done => {
      var client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var request = {
        projectId: projectId,
      };

      // Mock Grpc layer
      client._innerApiCalls.beginTransaction = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.beginTransaction(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('commit', () => {
    it('invokes commit without error', done => {
      var client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var mode = 'MODE_UNSPECIFIED';
      var mutations = [];
      var request = {
        projectId: projectId,
        mode: mode,
        mutations: mutations,
      };

      // Mock response
      var indexUpdates = -1425228195;
      var expectedResponse = {
        indexUpdates: indexUpdates,
      };

      // Mock Grpc layer
      client._innerApiCalls.commit = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.commit(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes commit with error', done => {
      var client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var mode = 'MODE_UNSPECIFIED';
      var mutations = [];
      var request = {
        projectId: projectId,
        mode: mode,
        mutations: mutations,
      };

      // Mock Grpc layer
      client._innerApiCalls.commit = mockSimpleGrpcMethod(request, null, error);

      client.commit(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('rollback', () => {
    it('invokes rollback without error', done => {
      var client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var transaction = '-34';
      var request = {
        projectId: projectId,
        transaction: transaction,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.rollback = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.rollback(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes rollback with error', done => {
      var client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var transaction = '-34';
      var request = {
        projectId: projectId,
        transaction: transaction,
      };

      // Mock Grpc layer
      client._innerApiCalls.rollback = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.rollback(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('allocateIds', () => {
    it('invokes allocateIds without error', done => {
      var client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var keys = [];
      var request = {
        projectId: projectId,
        keys: keys,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.allocateIds = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.allocateIds(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes allocateIds with error', done => {
      var client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var keys = [];
      var request = {
        projectId: projectId,
        keys: keys,
      };

      // Mock Grpc layer
      client._innerApiCalls.allocateIds = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.allocateIds(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('reserveIds', () => {
    it('invokes reserveIds without error', done => {
      var client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var keys = [];
      var request = {
        projectId: projectId,
        keys: keys,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.reserveIds = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.reserveIds(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes reserveIds with error', done => {
      var client = new datastoreModule.v1.DatastoreClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var projectId = 'projectId-1969970175';
      var keys = [];
      var request = {
        projectId: projectId,
        keys: keys,
      };

      // Mock Grpc layer
      client._innerApiCalls.reserveIds = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.reserveIds(request, (err, response) => {
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
