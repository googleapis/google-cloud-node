/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var assert = require('assert');
var dlpV2beta1 = require('../src/v2beta1')();

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('DlpServiceClient', function() {
  describe('inspectContent', function() {
    it('invokes inspectContent without error', function(done) {
      var client = dlpV2beta1.dlpServiceClient();
      // Mock request
      var inspectConfig = {};
      var items = [];
      var request = {
          inspectConfig : inspectConfig,
          items : items
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._inspectContent = mockSimpleGrpcMethod(request, expectedResponse);

      client.inspectContent(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes inspectContent with error', function(done) {
      var client = dlpV2beta1.dlpServiceClient();
      // Mock request
      var inspectConfig = {};
      var items = [];
      var request = {
          inspectConfig : inspectConfig,
          items : items
      };

      // Mock Grpc layer
      client._inspectContent = mockSimpleGrpcMethod(request, null, error);

      client.inspectContent(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('redactContent', function() {
    it('invokes redactContent without error', function(done) {
      var client = dlpV2beta1.dlpServiceClient();
      // Mock request
      var inspectConfig = {};
      var items = [];
      var replaceConfigs = [];
      var request = {
          inspectConfig : inspectConfig,
          items : items,
          replaceConfigs : replaceConfigs
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._redactContent = mockSimpleGrpcMethod(request, expectedResponse);

      client.redactContent(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes redactContent with error', function(done) {
      var client = dlpV2beta1.dlpServiceClient();
      // Mock request
      var inspectConfig = {};
      var items = [];
      var replaceConfigs = [];
      var request = {
          inspectConfig : inspectConfig,
          items : items,
          replaceConfigs : replaceConfigs
      };

      // Mock Grpc layer
      client._redactContent = mockSimpleGrpcMethod(request, null, error);

      client.redactContent(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('createInspectOperation', function() {
    it('invokes createInspectOperation without error', function(done) {
      var client = dlpV2beta1.dlpServiceClient();
      // Mock request
      var inspectConfig = {};
      var storageConfig = {};
      var outputConfig = {};
      var request = {
          inspectConfig : inspectConfig,
          storageConfig : storageConfig,
          outputConfig : outputConfig
      };

      // Mock response
      var name = 'name3373707';
      var done = true;
      var expectedResponse = {
          name : name,
          done : done
      };

      // Mock Grpc layer
      client._createInspectOperation = mockSimpleGrpcMethod(request, expectedResponse);

      client.createInspectOperation(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createInspectOperation with error', function(done) {
      var client = dlpV2beta1.dlpServiceClient();
      // Mock request
      var inspectConfig = {};
      var storageConfig = {};
      var outputConfig = {};
      var request = {
          inspectConfig : inspectConfig,
          storageConfig : storageConfig,
          outputConfig : outputConfig
      };

      // Mock Grpc layer
      client._createInspectOperation = mockSimpleGrpcMethod(request, null, error);

      client.createInspectOperation(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listInspectFindings', function() {
    it('invokes listInspectFindings without error', function(done) {
      var client = dlpV2beta1.dlpServiceClient();
      // Mock request
      var formattedName = client.resultPath("[RESULT]");
      var request = {
          name : formattedName
      };

      // Mock response
      var nextPageToken = 'nextPageToken-1530815211';
      var expectedResponse = {
          nextPageToken : nextPageToken
      };

      // Mock Grpc layer
      client._listInspectFindings = mockSimpleGrpcMethod(request, expectedResponse);

      client.listInspectFindings(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listInspectFindings with error', function(done) {
      var client = dlpV2beta1.dlpServiceClient();
      // Mock request
      var formattedName = client.resultPath("[RESULT]");
      var request = {
          name : formattedName
      };

      // Mock Grpc layer
      client._listInspectFindings = mockSimpleGrpcMethod(request, null, error);

      client.listInspectFindings(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listInfoTypes', function() {
    it('invokes listInfoTypes without error', function(done) {
      var client = dlpV2beta1.dlpServiceClient();
      // Mock request
      var category = 'category50511102';
      var languageCode = 'languageCode-412800396';
      var request = {
          category : category,
          languageCode : languageCode
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._listInfoTypes = mockSimpleGrpcMethod(request, expectedResponse);

      client.listInfoTypes(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listInfoTypes with error', function(done) {
      var client = dlpV2beta1.dlpServiceClient();
      // Mock request
      var category = 'category50511102';
      var languageCode = 'languageCode-412800396';
      var request = {
          category : category,
          languageCode : languageCode
      };

      // Mock Grpc layer
      client._listInfoTypes = mockSimpleGrpcMethod(request, null, error);

      client.listInfoTypes(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('listRootCategories', function() {
    it('invokes listRootCategories without error', function(done) {
      var client = dlpV2beta1.dlpServiceClient();
      // Mock request
      var languageCode = 'languageCode-412800396';
      var request = {
          languageCode : languageCode
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._listRootCategories = mockSimpleGrpcMethod(request, expectedResponse);

      client.listRootCategories(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listRootCategories with error', function(done) {
      var client = dlpV2beta1.dlpServiceClient();
      // Mock request
      var languageCode = 'languageCode-412800396';
      var request = {
          languageCode : languageCode
      };

      // Mock Grpc layer
      client._listRootCategories = mockSimpleGrpcMethod(request, null, error);

      client.listRootCategories(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
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
