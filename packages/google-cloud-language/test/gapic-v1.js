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

const languageModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('LanguageServiceClient', () => {
  describe('analyzeSentiment', () => {
    it('invokes analyzeSentiment without error', done => {
      const client = new languageModule.v1.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const document = {};
      const request = {
        document: document,
      };

      // Mock response
      const language = 'language-1613589672';
      const expectedResponse = {
        language: language,
      };

      // Mock Grpc layer
      client._innerApiCalls.analyzeSentiment = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.analyzeSentiment(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes analyzeSentiment with error', done => {
      const client = new languageModule.v1.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const document = {};
      const request = {
        document: document,
      };

      // Mock Grpc layer
      client._innerApiCalls.analyzeSentiment = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.analyzeSentiment(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('analyzeEntities', () => {
    it('invokes analyzeEntities without error', done => {
      const client = new languageModule.v1.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const document = {};
      const request = {
        document: document,
      };

      // Mock response
      const language = 'language-1613589672';
      const expectedResponse = {
        language: language,
      };

      // Mock Grpc layer
      client._innerApiCalls.analyzeEntities = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.analyzeEntities(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes analyzeEntities with error', done => {
      const client = new languageModule.v1.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const document = {};
      const request = {
        document: document,
      };

      // Mock Grpc layer
      client._innerApiCalls.analyzeEntities = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.analyzeEntities(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('analyzeEntitySentiment', () => {
    it('invokes analyzeEntitySentiment without error', done => {
      const client = new languageModule.v1.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const document = {};
      const request = {
        document: document,
      };

      // Mock response
      const language = 'language-1613589672';
      const expectedResponse = {
        language: language,
      };

      // Mock Grpc layer
      client._innerApiCalls.analyzeEntitySentiment = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.analyzeEntitySentiment(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes analyzeEntitySentiment with error', done => {
      const client = new languageModule.v1.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const document = {};
      const request = {
        document: document,
      };

      // Mock Grpc layer
      client._innerApiCalls.analyzeEntitySentiment = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.analyzeEntitySentiment(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('analyzeSyntax', () => {
    it('invokes analyzeSyntax without error', done => {
      const client = new languageModule.v1.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const document = {};
      const request = {
        document: document,
      };

      // Mock response
      const language = 'language-1613589672';
      const expectedResponse = {
        language: language,
      };

      // Mock Grpc layer
      client._innerApiCalls.analyzeSyntax = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.analyzeSyntax(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes analyzeSyntax with error', done => {
      const client = new languageModule.v1.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const document = {};
      const request = {
        document: document,
      };

      // Mock Grpc layer
      client._innerApiCalls.analyzeSyntax = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.analyzeSyntax(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('classifyText', () => {
    it('invokes classifyText without error', done => {
      const client = new languageModule.v1.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const document = {};
      const request = {
        document: document,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.classifyText = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.classifyText(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes classifyText with error', done => {
      const client = new languageModule.v1.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const document = {};
      const request = {
        document: document,
      };

      // Mock Grpc layer
      client._innerApiCalls.classifyText = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.classifyText(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('annotateText', () => {
    it('invokes annotateText without error', done => {
      const client = new languageModule.v1.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const document = {};
      const features = {};
      const request = {
        document: document,
        features: features,
      };

      // Mock response
      const language = 'language-1613589672';
      const expectedResponse = {
        language: language,
      };

      // Mock Grpc layer
      client._innerApiCalls.annotateText = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.annotateText(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes annotateText with error', done => {
      const client = new languageModule.v1.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const document = {};
      const features = {};
      const request = {
        document: document,
        features: features,
      };

      // Mock Grpc layer
      client._innerApiCalls.annotateText = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.annotateText(request, (err, response) => {
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
