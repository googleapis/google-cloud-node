// Copyright 2017, Google Inc. All rights reserved.
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

const dlpModule = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('DlpServiceClient', () => {
  describe('deidentifyContent', () => {
    it('invokes deidentifyContent without error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var deidentifyConfig = {};
      var inspectConfig = {};
      var items = [];
      var request = {
        deidentifyConfig: deidentifyConfig,
        inspectConfig: inspectConfig,
        items: items,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.deidentifyContent = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.deidentifyContent(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deidentifyContent with error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var deidentifyConfig = {};
      var inspectConfig = {};
      var items = [];
      var request = {
        deidentifyConfig: deidentifyConfig,
        inspectConfig: inspectConfig,
        items: items,
      };

      // Mock Grpc layer
      client._innerApiCalls.deidentifyContent = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.deidentifyContent(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('analyzeDataSourceRisk', function() {
    it('invokes analyzeDataSourceRisk without error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var privacyMetric = {};
      var sourceTable = {};
      var request = {
        privacyMetric: privacyMetric,
        sourceTable: sourceTable,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.analyzeDataSourceRisk = mockLongRunningGrpcMethod(request, expectedResponse);

      client.analyzeDataSourceRisk(request).then(responses => {
        var operation = responses[0];
        return operation.promise();
      }).then(responses => {
        assert.deepStrictEqual(responses[0], expectedResponse);
        done();
      }).catch(err => {
        done(err);
      });
    });

    it('invokes analyzeDataSourceRisk with error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var privacyMetric = {};
      var sourceTable = {};
      var request = {
        privacyMetric: privacyMetric,
        sourceTable: sourceTable,
      };

      // Mock Grpc layer
      client._innerApiCalls.analyzeDataSourceRisk = mockLongRunningGrpcMethod(request, null, error);

      client.analyzeDataSourceRisk(request).then(responses => {
        var operation = responses[0];
        return operation.promise();
      }).then(responses => {
        assert.fail();
      }).catch(err => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });

    it('has longrunning decoder functions', () => {
      var client = new dlpModule.v2beta1.DlpServiceClient();
      assert(client._descriptors.longrunning.analyzeDataSourceRisk.responseDecoder instanceof Function);
      assert(client._descriptors.longrunning.analyzeDataSourceRisk.metadataDecoder instanceof Function);
    });
  });

  describe('inspectContent', () => {
    it('invokes inspectContent without error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var name = 'EMAIL_ADDRESS';
      var infoTypesElement = {
        name: name,
      };
      var infoTypes = [infoTypesElement];
      var inspectConfig = {
        infoTypes: infoTypes,
      };
      var type = 'text/plain';
      var value = 'My email is example@example.com.';
      var itemsElement = {
        type: type,
        value: value,
      };
      var items = [itemsElement];
      var request = {
        inspectConfig: inspectConfig,
        items: items,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.inspectContent = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.inspectContent(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes inspectContent with error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var name = 'EMAIL_ADDRESS';
      var infoTypesElement = {
        name: name,
      };
      var infoTypes = [infoTypesElement];
      var inspectConfig = {
        infoTypes: infoTypes,
      };
      var type = 'text/plain';
      var value = 'My email is example@example.com.';
      var itemsElement = {
        type: type,
        value: value,
      };
      var items = [itemsElement];
      var request = {
        inspectConfig: inspectConfig,
        items: items,
      };

      // Mock Grpc layer
      client._innerApiCalls.inspectContent = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.inspectContent(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('redactContent', () => {
    it('invokes redactContent without error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var name = 'EMAIL_ADDRESS';
      var infoTypesElement = {
        name: name,
      };
      var infoTypes = [infoTypesElement];
      var inspectConfig = {
        infoTypes: infoTypes,
      };
      var type = 'text/plain';
      var value = 'My email is example@example.com.';
      var itemsElement = {
        type: type,
        value: value,
      };
      var items = [itemsElement];
      var name2 = 'EMAIL_ADDRESS';
      var infoType = {
        name: name2,
      };
      var replaceWith = 'REDACTED';
      var replaceConfigsElement = {
        infoType: infoType,
        replaceWith: replaceWith,
      };
      var replaceConfigs = [replaceConfigsElement];
      var request = {
        inspectConfig: inspectConfig,
        items: items,
        replaceConfigs: replaceConfigs,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.redactContent = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.redactContent(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes redactContent with error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var name = 'EMAIL_ADDRESS';
      var infoTypesElement = {
        name: name,
      };
      var infoTypes = [infoTypesElement];
      var inspectConfig = {
        infoTypes: infoTypes,
      };
      var type = 'text/plain';
      var value = 'My email is example@example.com.';
      var itemsElement = {
        type: type,
        value: value,
      };
      var items = [itemsElement];
      var name2 = 'EMAIL_ADDRESS';
      var infoType = {
        name: name2,
      };
      var replaceWith = 'REDACTED';
      var replaceConfigsElement = {
        infoType: infoType,
        replaceWith: replaceWith,
      };
      var replaceConfigs = [replaceConfigsElement];
      var request = {
        inspectConfig: inspectConfig,
        items: items,
        replaceConfigs: replaceConfigs,
      };

      // Mock Grpc layer
      client._innerApiCalls.redactContent = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.redactContent(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('createInspectOperation', function() {
    it('invokes createInspectOperation without error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var name = 'EMAIL_ADDRESS';
      var infoTypesElement = {
        name: name,
      };
      var infoTypes = [infoTypesElement];
      var inspectConfig = {
        infoTypes: infoTypes,
      };
      var url = 'gs://example_bucket/example_file.png';
      var fileSet = {
        url: url,
      };
      var cloudStorageOptions = {
        fileSet: fileSet,
      };
      var storageConfig = {
        cloudStorageOptions: cloudStorageOptions,
      };
      var outputConfig = {};
      var request = {
        inspectConfig: inspectConfig,
        storageConfig: storageConfig,
        outputConfig: outputConfig,
      };

      // Mock response
      var name2 = 'name2-1052831874';
      var expectedResponse = {
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.createInspectOperation = mockLongRunningGrpcMethod(request, expectedResponse);

      client.createInspectOperation(request).then(responses => {
        var operation = responses[0];
        return operation.promise();
      }).then(responses => {
        assert.deepStrictEqual(responses[0], expectedResponse);
        done();
      }).catch(err => {
        done(err);
      });
    });

    it('invokes createInspectOperation with error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var name = 'EMAIL_ADDRESS';
      var infoTypesElement = {
        name: name,
      };
      var infoTypes = [infoTypesElement];
      var inspectConfig = {
        infoTypes: infoTypes,
      };
      var url = 'gs://example_bucket/example_file.png';
      var fileSet = {
        url: url,
      };
      var cloudStorageOptions = {
        fileSet: fileSet,
      };
      var storageConfig = {
        cloudStorageOptions: cloudStorageOptions,
      };
      var outputConfig = {};
      var request = {
        inspectConfig: inspectConfig,
        storageConfig: storageConfig,
        outputConfig: outputConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.createInspectOperation = mockLongRunningGrpcMethod(request, null, error);

      client.createInspectOperation(request).then(responses => {
        var operation = responses[0];
        return operation.promise();
      }).then(responses => {
        assert.fail();
      }).catch(err => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });

    it('has longrunning decoder functions', () => {
      var client = new dlpModule.v2beta1.DlpServiceClient();
      assert(client._descriptors.longrunning.createInspectOperation.responseDecoder instanceof Function);
      assert(client._descriptors.longrunning.createInspectOperation.metadataDecoder instanceof Function);
    });
  });

  describe('listInspectFindings', () => {
    it('invokes listInspectFindings without error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var formattedName = client.resultPath("[RESULT]");
      var request = {
        name: formattedName,
      };

      // Mock response
      var nextPageToken = 'nextPageToken-1530815211';
      var expectedResponse = {
        nextPageToken: nextPageToken,
      };

      // Mock Grpc layer
      client._innerApiCalls.listInspectFindings = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listInspectFindings(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listInspectFindings with error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var formattedName = client.resultPath("[RESULT]");
      var request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.listInspectFindings = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listInspectFindings(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listInfoTypes', () => {
    it('invokes listInfoTypes without error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var category = 'PII';
      var languageCode = 'en';
      var request = {
        category: category,
        languageCode: languageCode,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listInfoTypes = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listInfoTypes(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listInfoTypes with error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var category = 'PII';
      var languageCode = 'en';
      var request = {
        category: category,
        languageCode: languageCode,
      };

      // Mock Grpc layer
      client._innerApiCalls.listInfoTypes = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listInfoTypes(request, (err, response) => {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('listRootCategories', () => {
    it('invokes listRootCategories without error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var languageCode = 'en';
      var request = {
        languageCode: languageCode,
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listRootCategories = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listRootCategories(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listRootCategories with error', done => {
      var client = new dlpModule.v2beta1.DlpServiceClient();

      // Mock request
      var languageCode = 'en';
      var request = {
        languageCode: languageCode,
      };

      // Mock Grpc layer
      client._innerApiCalls.listRootCategories = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listRootCategories(request, (err, response) => {
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

function mockLongRunningGrpcMethod(expectedRequest, response, error) {
  return request => {
    assert.deepStrictEqual(request, expectedRequest);
    var mockOperation = {
      promise: function() {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error);
          }
          else {
            resolve([response]);
          }
        });
      }
    };
    return Promise.resolve([mockOperation]);
  };
}
