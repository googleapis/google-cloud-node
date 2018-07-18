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

const osLoginModule = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('OsLoginServiceClient', () => {
  describe('deletePosixAccount', () => {
    it('invokes deletePosixAccount without error', done => {
      var client = new osLoginModule.v1beta.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[USER]', '[PROJECT]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deletePosixAccount = mockSimpleGrpcMethod(request);

      client.deletePosixAccount(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deletePosixAccount with error', done => {
      var client = new osLoginModule.v1beta.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.projectPath('[USER]', '[PROJECT]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deletePosixAccount = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deletePosixAccount(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('deleteSshPublicKey', () => {
    it('invokes deleteSshPublicKey without error', done => {
      var client = new osLoginModule.v1beta.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.fingerprintPath('[USER]', '[FINGERPRINT]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteSshPublicKey = mockSimpleGrpcMethod(request);

      client.deleteSshPublicKey(request, err => {
        assert.ifError(err);
        done();
      });
    });

    it('invokes deleteSshPublicKey with error', done => {
      var client = new osLoginModule.v1beta.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.fingerprintPath('[USER]', '[FINGERPRINT]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteSshPublicKey = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deleteSshPublicKey(request, err => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('getLoginProfile', () => {
    it('invokes getLoginProfile without error', done => {
      var client = new osLoginModule.v1beta.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.userPath('[USER]');
      var request = {
        name: formattedName,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var suspended = false;
      var expectedResponse = {
        name: name2,
        suspended: suspended,
      };

      // Mock Grpc layer
      client._innerApiCalls.getLoginProfile = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getLoginProfile(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getLoginProfile with error', done => {
      var client = new osLoginModule.v1beta.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.userPath('[USER]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getLoginProfile = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getLoginProfile(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getSshPublicKey', () => {
    it('invokes getSshPublicKey without error', done => {
      var client = new osLoginModule.v1beta.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.fingerprintPath('[USER]', '[FINGERPRINT]');
      var request = {
        name: formattedName,
      };

      // Mock response
      var key = 'key106079';
      var expirationTimeUsec = 2058878882;
      var fingerprint = 'fingerprint-1375934236';
      var expectedResponse = {
        key: key,
        expirationTimeUsec: expirationTimeUsec,
        fingerprint: fingerprint,
      };

      // Mock Grpc layer
      client._innerApiCalls.getSshPublicKey = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getSshPublicKey(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getSshPublicKey with error', done => {
      var client = new osLoginModule.v1beta.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.fingerprintPath('[USER]', '[FINGERPRINT]');
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getSshPublicKey = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getSshPublicKey(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('importSshPublicKey', () => {
    it('invokes importSshPublicKey without error', done => {
      var client = new osLoginModule.v1beta.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.userPath('[USER]');
      var sshPublicKey = {};
      var request = {
        parent: formattedParent,
        sshPublicKey: sshPublicKey,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.importSshPublicKey = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.importSshPublicKey(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes importSshPublicKey with error', done => {
      var client = new osLoginModule.v1beta.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedParent = client.userPath('[USER]');
      var sshPublicKey = {};
      var request = {
        parent: formattedParent,
        sshPublicKey: sshPublicKey,
      };

      // Mock Grpc layer
      client._innerApiCalls.importSshPublicKey = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.importSshPublicKey(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateSshPublicKey', () => {
    it('invokes updateSshPublicKey without error', done => {
      var client = new osLoginModule.v1beta.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.fingerprintPath('[USER]', '[FINGERPRINT]');
      var sshPublicKey = {};
      var request = {
        name: formattedName,
        sshPublicKey: sshPublicKey,
      };

      // Mock response
      var key = 'key106079';
      var expirationTimeUsec = 2058878882;
      var fingerprint = 'fingerprint-1375934236';
      var expectedResponse = {
        key: key,
        expirationTimeUsec: expirationTimeUsec,
        fingerprint: fingerprint,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateSshPublicKey = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateSshPublicKey(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateSshPublicKey with error', done => {
      var client = new osLoginModule.v1beta.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var formattedName = client.fingerprintPath('[USER]', '[FINGERPRINT]');
      var sshPublicKey = {};
      var request = {
        name: formattedName,
        sshPublicKey: sshPublicKey,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateSshPublicKey = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateSshPublicKey(request, (err, response) => {
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
