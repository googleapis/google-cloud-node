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

const textToSpeechModule = require('../src');

var FAKE_STATUS_CODE = 1;
var error = new Error();
error.code = FAKE_STATUS_CODE;

describe('TextToSpeechClient', () => {
  describe('listVoices', () => {
    it('invokes listVoices without error', done => {
      var client = new textToSpeechModule.v1beta1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var request = {};

      // Mock response
      var expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.listVoices = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.listVoices(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listVoices with error', done => {
      var client = new textToSpeechModule.v1beta1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var request = {};

      // Mock Grpc layer
      client._innerApiCalls.listVoices = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.listVoices(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('synthesizeSpeech', () => {
    it('invokes synthesizeSpeech without error', done => {
      var client = new textToSpeechModule.v1beta1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var input = {};
      var voice = {};
      var audioConfig = {};
      var request = {
        input: input,
        voice: voice,
        audioConfig: audioConfig,
      };

      // Mock response
      var audioContent = '16';
      var expectedResponse = {
        audioContent: audioContent,
      };

      // Mock Grpc layer
      client._innerApiCalls.synthesizeSpeech = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.synthesizeSpeech(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes synthesizeSpeech with error', done => {
      var client = new textToSpeechModule.v1beta1.TextToSpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      var input = {};
      var voice = {};
      var audioConfig = {};
      var request = {
        input: input,
        voice: voice,
        audioConfig: audioConfig,
      };

      // Mock Grpc layer
      client._innerApiCalls.synthesizeSpeech = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.synthesizeSpeech(request, (err, response) => {
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
