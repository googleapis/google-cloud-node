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

const webRiskModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('WebRiskServiceV1Beta1Client', () => {
  it('has servicePath', () => {
    const servicePath =
      webRiskModule.v1beta1.WebRiskServiceV1Beta1Client.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      webRiskModule.v1beta1.WebRiskServiceV1Beta1Client.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = webRiskModule.v1beta1.WebRiskServiceV1Beta1Client.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new webRiskModule.v1beta1.WebRiskServiceV1Beta1Client();
    assert(client);
  });

  describe('computeThreatListDiff', () => {
    it('invokes computeThreatListDiff without error', done => {
      const client = new webRiskModule.v1beta1.WebRiskServiceV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const threatType = 'THREAT_TYPE_UNSPECIFIED';
      const constraints = {};
      const request = {
        threatType: threatType,
        constraints: constraints,
      };

      // Mock response
      const newVersionToken = '115';
      const expectedResponse = {
        newVersionToken: newVersionToken,
      };

      // Mock Grpc layer
      client._innerApiCalls.computeThreatListDiff = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.computeThreatListDiff(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes computeThreatListDiff with error', done => {
      const client = new webRiskModule.v1beta1.WebRiskServiceV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const threatType = 'THREAT_TYPE_UNSPECIFIED';
      const constraints = {};
      const request = {
        threatType: threatType,
        constraints: constraints,
      };

      // Mock Grpc layer
      client._innerApiCalls.computeThreatListDiff = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.computeThreatListDiff(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('searchUris', () => {
    it('invokes searchUris without error', done => {
      const client = new webRiskModule.v1beta1.WebRiskServiceV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const uri = 'uri116076';
      const threatTypes = [];
      const request = {
        uri: uri,
        threatTypes: threatTypes,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.searchUris = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.searchUris(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes searchUris with error', done => {
      const client = new webRiskModule.v1beta1.WebRiskServiceV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const uri = 'uri116076';
      const threatTypes = [];
      const request = {
        uri: uri,
        threatTypes: threatTypes,
      };

      // Mock Grpc layer
      client._innerApiCalls.searchUris = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.searchUris(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('searchHashes', () => {
    it('invokes searchHashes without error', done => {
      const client = new webRiskModule.v1beta1.WebRiskServiceV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.searchHashes = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.searchHashes(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes searchHashes with error', done => {
      const client = new webRiskModule.v1beta1.WebRiskServiceV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.searchHashes = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.searchHashes(request, (err, response) => {
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
