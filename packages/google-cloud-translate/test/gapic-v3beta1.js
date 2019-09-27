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

const translateModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('TranslationServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      translateModule.v3beta1.TranslationServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      translateModule.v3beta1.TranslationServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = translateModule.v3beta1.TranslationServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new translateModule.v3beta1.TranslationServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new translateModule.v3beta1.TranslationServiceClient({
      fallback: true,
    });
    assert(client);
  });

  describe('translateText', () => {
    it('invokes translateText without error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const contents = [];
      const targetLanguageCode = 'targetLanguageCode1323228230';
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        contents: contents,
        targetLanguageCode: targetLanguageCode,
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.translateText = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.translateText(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes translateText with error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const contents = [];
      const targetLanguageCode = 'targetLanguageCode1323228230';
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        contents: contents,
        targetLanguageCode: targetLanguageCode,
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.translateText = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.translateText(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('detectLanguage', () => {
    it('invokes detectLanguage without error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.detectLanguage = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.detectLanguage(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes detectLanguage with error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.detectLanguage = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.detectLanguage(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getSupportedLanguages', () => {
    it('invokes getSupportedLanguages without error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.getSupportedLanguages = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getSupportedLanguages(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getSupportedLanguages with error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.getSupportedLanguages = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getSupportedLanguages(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('batchTranslateText', function() {
    it('invokes batchTranslateText without error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const sourceLanguageCode = 'sourceLanguageCode1687263568';
      const targetLanguageCodes = [];
      const inputConfigs = [];
      const outputConfig = {};
      const request = {
        parent: formattedParent,
        sourceLanguageCode: sourceLanguageCode,
        targetLanguageCodes: targetLanguageCodes,
        inputConfigs: inputConfigs,
        outputConfig: outputConfig,
      };

      // Mock response
      const totalCharacters = 1368640955;
      const translatedCharacters = 1337326221;
      const failedCharacters = 1723028396;
      const expectedResponse = {
        totalCharacters: totalCharacters,
        translatedCharacters: translatedCharacters,
        failedCharacters: failedCharacters,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchTranslateText = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .batchTranslateText(request)
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

    it('invokes batchTranslateText with error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const sourceLanguageCode = 'sourceLanguageCode1687263568';
      const targetLanguageCodes = [];
      const inputConfigs = [];
      const outputConfig = {};
      const request = {
        parent: formattedParent,
        sourceLanguageCode: sourceLanguageCode,
        targetLanguageCodes: targetLanguageCodes,
        inputConfigs: inputConfigs,
        outputConfig: outputConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchTranslateText = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .batchTranslateText(request)
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
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.batchTranslateText
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.batchTranslateText
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('createGlossary', function() {
    it('invokes createGlossary without error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const glossary = {};
      const request = {
        parent: formattedParent,
        glossary: glossary,
      };

      // Mock response
      const name = 'name3373707';
      const entryCount = 811131134;
      const expectedResponse = {
        name: name,
        entryCount: entryCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.createGlossary = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .createGlossary(request)
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

    it('invokes createGlossary with error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const glossary = {};
      const request = {
        parent: formattedParent,
        glossary: glossary,
      };

      // Mock Grpc layer
      client._innerApiCalls.createGlossary = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .createGlossary(request)
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
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.createGlossary
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.createGlossary
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('listGlossaries', () => {
    it('invokes listGlossaries without error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
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
      const glossariesElement = {};
      const glossaries = [glossariesElement];
      const expectedResponse = {
        nextPageToken: nextPageToken,
        glossaries: glossaries,
      };

      // Mock Grpc layer
      client._innerApiCalls.listGlossaries = (
        actualRequest,
        options,
        callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.glossaries);
      };

      client.listGlossaries(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse.glossaries);
        done();
      });
    });

    it('invokes listGlossaries with error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
      const request = {
        parent: formattedParent,
      };

      // Mock Grpc layer
      client._innerApiCalls.listGlossaries = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listGlossaries(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('getGlossary', () => {
    it('invokes getGlossary without error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.glossaryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[GLOSSARY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const entryCount = 811131134;
      const expectedResponse = {
        name: name2,
        entryCount: entryCount,
      };

      // Mock Grpc layer
      client._innerApiCalls.getGlossary = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.getGlossary(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getGlossary with error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.glossaryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[GLOSSARY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.getGlossary = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.getGlossary(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('deleteGlossary', function() {
    it('invokes deleteGlossary without error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.glossaryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[GLOSSARY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock response
      const name2 = 'name2-1052831874';
      const expectedResponse = {
        name: name2,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteGlossary = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .deleteGlossary(request)
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

    it('invokes deleteGlossary with error', done => {
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const formattedName = client.glossaryPath(
        '[PROJECT]',
        '[LOCATION]',
        '[GLOSSARY]'
      );
      const request = {
        name: formattedName,
      };

      // Mock Grpc layer
      client._innerApiCalls.deleteGlossary = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .deleteGlossary(request)
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
      const client = new translateModule.v3beta1.TranslationServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.deleteGlossary
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.deleteGlossary
          .metadataDecoder instanceof Function
      );
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
