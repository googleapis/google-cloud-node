/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var assert = require('assert');
var language = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('LanguageServiceClient', function() {
  describe('analyzeSentiment', function() {
    it('invokes analyzeSentiment without error', function(done) {
      var client = language.v1beta2();

      // Mock request
      var document = {};
      var request = {
          document : document
      };

      // Mock response
      var language_ = 'language-1613589672';
      var expectedResponse = {
          language : language_
      };

      // Mock Grpc layer
      client._analyzeSentiment = mockSimpleGrpcMethod(request, expectedResponse);

      client.analyzeSentiment(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes analyzeSentiment with error', function(done) {
      var client = language.v1beta2();

      // Mock request
      var document = {};
      var request = {
          document : document
      };

      // Mock Grpc layer
      client._analyzeSentiment = mockSimpleGrpcMethod(request, null, error);

      client.analyzeSentiment(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('analyzeEntities', function() {
    it('invokes analyzeEntities without error', function(done) {
      var client = language.v1beta2();

      // Mock request
      var document = {};
      var request = {
          document : document
      };

      // Mock response
      var language_ = 'language-1613589672';
      var expectedResponse = {
          language : language_
      };

      // Mock Grpc layer
      client._analyzeEntities = mockSimpleGrpcMethod(request, expectedResponse);

      client.analyzeEntities(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes analyzeEntities with error', function(done) {
      var client = language.v1beta2();

      // Mock request
      var document = {};
      var request = {
          document : document
      };

      // Mock Grpc layer
      client._analyzeEntities = mockSimpleGrpcMethod(request, null, error);

      client.analyzeEntities(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('analyzeEntitySentiment', function() {
    it('invokes analyzeEntitySentiment without error', function(done) {
      var client = language.v1beta2();

      // Mock request
      var document = {};
      var request = {
          document : document
      };

      // Mock response
      var language_ = 'language-1613589672';
      var expectedResponse = {
          language : language_
      };

      // Mock Grpc layer
      client._analyzeEntitySentiment = mockSimpleGrpcMethod(request, expectedResponse);

      client.analyzeEntitySentiment(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes analyzeEntitySentiment with error', function(done) {
      var client = language.v1beta2();

      // Mock request
      var document = {};
      var request = {
          document : document
      };

      // Mock Grpc layer
      client._analyzeEntitySentiment = mockSimpleGrpcMethod(request, null, error);

      client.analyzeEntitySentiment(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('analyzeSyntax', function() {
    it('invokes analyzeSyntax without error', function(done) {
      var client = language.v1beta2();

      // Mock request
      var document = {};
      var request = {
          document : document
      };

      // Mock response
      var language_ = 'language-1613589672';
      var expectedResponse = {
          language : language_
      };

      // Mock Grpc layer
      client._analyzeSyntax = mockSimpleGrpcMethod(request, expectedResponse);

      client.analyzeSyntax(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes analyzeSyntax with error', function(done) {
      var client = language.v1beta2();

      // Mock request
      var document = {};
      var request = {
          document : document
      };

      // Mock Grpc layer
      client._analyzeSyntax = mockSimpleGrpcMethod(request, null, error);

      client.analyzeSyntax(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('classifyText', function() {
    it('invokes classifyText without error', function(done) {
      var client = language.v1beta2();

      // Mock request
      var document = {};
      var request = {
          document : document
      };

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._classifyText = mockSimpleGrpcMethod(request, expectedResponse);

      client.classifyText(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes classifyText with error', function(done) {
      var client = language.v1beta2();

      // Mock request
      var document = {};
      var request = {
          document : document
      };

      // Mock Grpc layer
      client._classifyText = mockSimpleGrpcMethod(request, null, error);

      client.classifyText(request, function(err, response) {
        assert(err instanceof Error);
        assert.equal(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('annotateText', function() {
    it('invokes annotateText without error', function(done) {
      var client = language.v1beta2();

      // Mock request
      var document = {};
      var features = {};
      var request = {
          document : document,
          features : features
      };

      // Mock response
      var language_ = 'language-1613589672';
      var expectedResponse = {
          language : language_
      };

      // Mock Grpc layer
      client._annotateText = mockSimpleGrpcMethod(request, expectedResponse);

      client.annotateText(request, function(err, response) {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes annotateText with error', function(done) {
      var client = language.v1beta2();

      // Mock request
      var document = {};
      var features = {};
      var request = {
          document : document,
          features : features
      };

      // Mock Grpc layer
      client._annotateText = mockSimpleGrpcMethod(request, null, error);

      client.annotateText(request, function(err, response) {
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
