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

const kmsModule = require('../src');

let FAKE_STATUS_CODE = 1;
let error = new Error();
error.code = FAKE_STATUS_CODE;

describe('KeyManagementServiceClient', () => {
  describe('listKeyRings', () => {
    it('invokes listKeyRings without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      let request = {
        parent: formattedParent,
      };

      // Mock response
      let nextPageToken = '';
      let totalSize = 705419236;
      let keyRingsElement = {};
      let keyRings = [keyRingsElement];
      let expectedResponse = {
        nextPageToken: nextPageToken,
        totalSize: totalSize,
        keyRings: keyRings,
      };

      // Mock Grpc layer
      client._innerApiCalls.listKeyRings = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.keyRings);
      };

      client.listKeyRings(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.keyRings);
        done();
      });
    });

    it('invokes listKeyRings with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      let request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listKeyRings = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listKeyRings(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listCryptoKeys', () => {
    it('invokes listCryptoKeys without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedParent = client.keyRingPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]'
      );
      let request = {
        parent: formattedParent,
      };

      // Mock response
      let nextPageToken = '';
      let totalSize = 705419236;
      let cryptoKeysElement = {};
      let cryptoKeys = [cryptoKeysElement];
      let expectedResponse = {
        nextPageToken: nextPageToken,
        totalSize: totalSize,
        cryptoKeys: cryptoKeys,
      };

      // Mock Grpc layer
      client._innerApiCalls.listCryptoKeys = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.cryptoKeys);
      };

      client.listCryptoKeys(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.cryptoKeys);
        done();
      });
    });

    it('invokes listCryptoKeys with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedParent = client.keyRingPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]'
      );
      let request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listCryptoKeys = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listCryptoKeys(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listCryptoKeyVersions', () => {
    it('invokes listCryptoKeyVersions without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedParent = client.cryptoKeyPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]'
      );
      let request = {
        parent: formattedParent,
      };

      // Mock response
      let nextPageToken = '';
      let totalSize = 705419236;
      let cryptoKeyVersionsElement = {};
      let cryptoKeyVersions = [cryptoKeyVersionsElement];
      let expectedResponse = {
        nextPageToken: nextPageToken,
        totalSize: totalSize,
        cryptoKeyVersions: cryptoKeyVersions,
      };

      // Mock Grpc layer
      client._innerApiCalls.listCryptoKeyVersions = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.cryptoKeyVersions);
      };

      client.listCryptoKeyVersions(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.cryptoKeyVersions);
        done();
      });
    });

    it('invokes listCryptoKeyVersions with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedParent = client.cryptoKeyPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]'
      );
      let request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listCryptoKeyVersions = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listCryptoKeyVersions(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getKeyRing', () => {
    it('invokes getKeyRing without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.keyRingPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]'
      );
      let request = {
        name: formattedName,
      };

      // Mock response
      let name2 = 'name2-1052831874';
      let expectedResponse = {
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.getKeyRing = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getKeyRing(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getKeyRing with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.keyRingPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]'
      );
      let request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getKeyRing = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getKeyRing(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getCryptoKey', () => {
    it('invokes getCryptoKey without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.cryptoKeyPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]'
      );
      let request = {
        name: formattedName,
      };

      // Mock response
      let name2 = 'name2-1052831874';
      let expectedResponse = {
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCryptoKey = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getCryptoKey(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getCryptoKey with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.cryptoKeyPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]'
      );
      let request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCryptoKey = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getCryptoKey(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getCryptoKeyVersion', () => {
    it('invokes getCryptoKeyVersion without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.cryptoKeyVersionPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]',
        '[CRYPTO_KEY_VERSION]'
      );
      let request = {
        name: formattedName,
      };

      // Mock response
      let name2 = 'name2-1052831874';
      let expectedResponse = {
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCryptoKeyVersion = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getCryptoKeyVersion(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getCryptoKeyVersion with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.cryptoKeyVersionPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]',
        '[CRYPTO_KEY_VERSION]'
      );
      let request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getCryptoKeyVersion = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getCryptoKeyVersion(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createKeyRing', () => {
    it('invokes createKeyRing without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      let keyRingId = 'keyRingId-2056646742';
      let keyRing = {};
      let request = {
        parent: formattedParent,
        keyRingId: keyRingId,
        keyRing: keyRing,
      };

      // Mock response
      let name = 'name3373707';
      let expectedResponse = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.createKeyRing = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createKeyRing(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createKeyRing with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      let keyRingId = 'keyRingId-2056646742';
      let keyRing = {};
      let request = {
        parent: formattedParent,
        keyRingId: keyRingId,
        keyRing: keyRing,
      };

      // Mock Grpc layer
      client._innerApiCalls.createKeyRing = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createKeyRing(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createCryptoKey', () => {
    it('invokes createCryptoKey without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedParent = client.keyRingPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]'
      );
      let cryptoKeyId = 'my-app-key';
      let purpose = 'ENCRYPT_DECRYPT';
      let seconds = 2147483647;
      let nextRotationTime = {
        seconds: seconds,
      };
      let seconds2 = 604800;
      let rotationPeriod = {
        seconds: seconds2,
      };
      let cryptoKey = {
        purpose: purpose,
        nextRotationTime: nextRotationTime,
        rotationPeriod: rotationPeriod,
      };
      let request = {
        parent: formattedParent,
        cryptoKeyId: cryptoKeyId,
        cryptoKey: cryptoKey,
      };

      // Mock response
      let name = 'name3373707';
      let expectedResponse = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCryptoKey = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createCryptoKey(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createCryptoKey with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedParent = client.keyRingPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]'
      );
      let cryptoKeyId = 'my-app-key';
      let purpose = 'ENCRYPT_DECRYPT';
      let seconds = 2147483647;
      let nextRotationTime = {
        seconds: seconds,
      };
      let seconds2 = 604800;
      let rotationPeriod = {
        seconds: seconds2,
      };
      let cryptoKey = {
        purpose: purpose,
        nextRotationTime: nextRotationTime,
        rotationPeriod: rotationPeriod,
      };
      let request = {
        parent: formattedParent,
        cryptoKeyId: cryptoKeyId,
        cryptoKey: cryptoKey,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCryptoKey = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createCryptoKey(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createCryptoKeyVersion', () => {
    it('invokes createCryptoKeyVersion without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedParent = client.cryptoKeyPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]'
      );
      let cryptoKeyVersion = {};
      let request = {
        parent: formattedParent,
        cryptoKeyVersion: cryptoKeyVersion,
      };

      // Mock response
      let name = 'name3373707';
      let expectedResponse = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCryptoKeyVersion = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.createCryptoKeyVersion(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createCryptoKeyVersion with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedParent = client.cryptoKeyPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]'
      );
      let cryptoKeyVersion = {};
      let request = {
        parent: formattedParent,
        cryptoKeyVersion: cryptoKeyVersion,
      };

      // Mock Grpc layer
      client._innerApiCalls.createCryptoKeyVersion = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.createCryptoKeyVersion(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateCryptoKey', () => {
    it('invokes updateCryptoKey without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let cryptoKey = {};
      let updateMask = {};
      let request = {
        cryptoKey: cryptoKey,
        updateMask: updateMask,
      };

      // Mock response
      let name = 'name3373707';
      let expectedResponse = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCryptoKey = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateCryptoKey(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateCryptoKey with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let cryptoKey = {};
      let updateMask = {};
      let request = {
        cryptoKey: cryptoKey,
        updateMask: updateMask,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCryptoKey = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateCryptoKey(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateCryptoKeyVersion', () => {
    it('invokes updateCryptoKeyVersion without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let cryptoKeyVersion = {};
      let updateMask = {};
      let request = {
        cryptoKeyVersion: cryptoKeyVersion,
        updateMask: updateMask,
      };

      // Mock response
      let name = 'name3373707';
      let expectedResponse = {
        name: name,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCryptoKeyVersion = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateCryptoKeyVersion(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateCryptoKeyVersion with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let cryptoKeyVersion = {};
      let updateMask = {};
      let request = {
        cryptoKeyVersion: cryptoKeyVersion,
        updateMask: updateMask,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCryptoKeyVersion = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateCryptoKeyVersion(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('encrypt', () => {
    it('invokes encrypt without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.cryptoKeyPathPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY_PATH]'
      );
      let plaintext = '-9';
      let request = {
        name: formattedName,
        plaintext: plaintext,
      };

      // Mock response
      let name2 = 'name2-1052831874';
      let ciphertext = '-72';
      let expectedResponse = {
        name: name2,
        ciphertext: ciphertext,
      };

      // Mock Grpc layer
      client._innerApiCalls.encrypt = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.encrypt(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes encrypt with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.cryptoKeyPathPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY_PATH]'
      );
      let plaintext = '-9';
      let request = {
        name: formattedName,
        plaintext: plaintext,
      };

      // Mock Grpc layer
      client._innerApiCalls.encrypt = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.encrypt(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('decrypt', () => {
    it('invokes decrypt without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.cryptoKeyPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]'
      );
      let ciphertext = '-72';
      let request = {
        name: formattedName,
        ciphertext: ciphertext,
      };

      // Mock response
      let plaintext = '-9';
      let expectedResponse = {
        plaintext: plaintext,
      };

      // Mock Grpc layer
      client._innerApiCalls.decrypt = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.decrypt(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes decrypt with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.cryptoKeyPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]'
      );
      let ciphertext = '-72';
      let request = {
        name: formattedName,
        ciphertext: ciphertext,
      };

      // Mock Grpc layer
      client._innerApiCalls.decrypt = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.decrypt(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('updateCryptoKeyPrimaryVersion', () => {
    it('invokes updateCryptoKeyPrimaryVersion without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.cryptoKeyPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]'
      );
      let cryptoKeyVersionId = 'cryptoKeyVersionId729489152';
      let request = {
        name: formattedName,
        cryptoKeyVersionId: cryptoKeyVersionId,
      };

      // Mock response
      let name2 = 'name2-1052831874';
      let expectedResponse = {
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCryptoKeyPrimaryVersion = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.updateCryptoKeyPrimaryVersion(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateCryptoKeyPrimaryVersion with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.cryptoKeyPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]'
      );
      let cryptoKeyVersionId = 'cryptoKeyVersionId729489152';
      let request = {
        name: formattedName,
        cryptoKeyVersionId: cryptoKeyVersionId,
      };

      // Mock Grpc layer
      client._innerApiCalls.updateCryptoKeyPrimaryVersion = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.updateCryptoKeyPrimaryVersion(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('destroyCryptoKeyVersion', () => {
    it('invokes destroyCryptoKeyVersion without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.cryptoKeyVersionPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]',
        '[CRYPTO_KEY_VERSION]'
      );
      let request = {
        name: formattedName,
      };

      // Mock response
      let name2 = 'name2-1052831874';
      let expectedResponse = {
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.destroyCryptoKeyVersion = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.destroyCryptoKeyVersion(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes destroyCryptoKeyVersion with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.cryptoKeyVersionPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]',
        '[CRYPTO_KEY_VERSION]'
      );
      let request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.destroyCryptoKeyVersion = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.destroyCryptoKeyVersion(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('restoreCryptoKeyVersion', () => {
    it('invokes restoreCryptoKeyVersion without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.cryptoKeyVersionPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]',
        '[CRYPTO_KEY_VERSION]'
      );
      let request = {
        name: formattedName,
      };

      // Mock response
      let name2 = 'name2-1052831874';
      let expectedResponse = {
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.restoreCryptoKeyVersion = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.restoreCryptoKeyVersion(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes restoreCryptoKeyVersion with error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedName = client.cryptoKeyVersionPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]',
        '[CRYPTO_KEY]',
        '[CRYPTO_KEY_VERSION]'
      );
      let request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.restoreCryptoKeyVersion = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.restoreCryptoKeyVersion(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('setIamPolicy', () => {
    it('invokes setIamPolicy without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedResource = client.keyRingPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]'
      );
      let policy = {};
      let request = {
        resource: formattedResource,
        policy: policy,
      };

      // Mock response
      let version = 351608024;
      let etag = '21';
      let expectedResponse = {
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
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedResource = client.keyRingPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]'
      );
      let policy = {};
      let request = {
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

  describe('getIamPolicy', () => {
    it('invokes getIamPolicy without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedResource = client.keyRingPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]'
      );
      let request = {
        resource: formattedResource,
      };

      // Mock response
      let version = 351608024;
      let etag = '21';
      let expectedResponse = {
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
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedResource = client.keyRingPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]'
      );
      let request = {
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

  describe('testIamPermissions', () => {
    it('invokes testIamPermissions without error', done => {
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedResource = client.keyRingPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]'
      );
      let permissions = [];
      let request = {
        resource: formattedResource,
        permissions: permissions,
      };

      // Mock response
      let expectedResponse = {};

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
      let client = new kmsModule.v1.KeyManagementServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      let formattedResource = client.keyRingPath(
        '[PROJECT]',
        '[LOCATION]',
        '[KEY_RING]'
      );
      let permissions = [];
      let request = {
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
