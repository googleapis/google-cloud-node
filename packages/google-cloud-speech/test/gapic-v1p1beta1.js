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
const through2 = require('through2');

const speechModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('SpeechClient', () => {
  describe('recognize', () => {
    it('invokes recognize without error', done => {
      const client = new speechModule.v1p1beta1.SpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const encoding = 'FLAC';
      const sampleRateHertz = 44100;
      const languageCode = 'en-US';
      const config = {
        encoding: encoding,
        sampleRateHertz: sampleRateHertz,
        languageCode: languageCode,
      };
      const uri = 'gs://bucket_name/file_name.flac';
      const audio = {
        uri: uri,
      };
      const request = {
        config: config,
        audio: audio,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.recognize = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      client.recognize(request, (err, response) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes recognize with error', done => {
      const client = new speechModule.v1p1beta1.SpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const encoding = 'FLAC';
      const sampleRateHertz = 44100;
      const languageCode = 'en-US';
      const config = {
        encoding: encoding,
        sampleRateHertz: sampleRateHertz,
        languageCode: languageCode,
      };
      const uri = 'gs://bucket_name/file_name.flac';
      const audio = {
        uri: uri,
      };
      const request = {
        config: config,
        audio: audio,
      };

      // Mock Grpc layer
      client._innerApiCalls.recognize = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      client.recognize(request, (err, response) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });

  describe('longRunningRecognize', function() {
    it('invokes longRunningRecognize without error', done => {
      const client = new speechModule.v1p1beta1.SpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const encoding = 'FLAC';
      const sampleRateHertz = 44100;
      const languageCode = 'en-US';
      const config = {
        encoding: encoding,
        sampleRateHertz: sampleRateHertz,
        languageCode: languageCode,
      };
      const uri = 'gs://bucket_name/file_name.flac';
      const audio = {
        uri: uri,
      };
      const request = {
        config: config,
        audio: audio,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.longRunningRecognize = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .longRunningRecognize(request)
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

    it('invokes longRunningRecognize with error', done => {
      const client = new speechModule.v1p1beta1.SpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const encoding = 'FLAC';
      const sampleRateHertz = 44100;
      const languageCode = 'en-US';
      const config = {
        encoding: encoding,
        sampleRateHertz: sampleRateHertz,
        languageCode: languageCode,
      };
      const uri = 'gs://bucket_name/file_name.flac';
      const audio = {
        uri: uri,
      };
      const request = {
        config: config,
        audio: audio,
      };

      // Mock Grpc layer
      client._innerApiCalls.longRunningRecognize = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .longRunningRecognize(request)
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
      const client = new speechModule.v1p1beta1.SpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client._descriptors.longrunning.longRunningRecognize
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.longRunningRecognize
          .metadataDecoder instanceof Function
      );
    });
  });

  describe('streamingRecognize', () => {
    it('invokes streamingRecognize without error', done => {
      const client = new speechModule.v1p1beta1.SpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.streamingRecognize = mockBidiStreamingGrpcMethod(
        request,
        expectedResponse
      );

      const stream = client
        .streamingRecognize()
        .on('data', response => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', err => {
          done(err);
        });

      stream.write(request);
    });

    it('invokes streamingRecognize with error', done => {
      const client = new speechModule.v1p1beta1.SpeechClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.streamingRecognize = mockBidiStreamingGrpcMethod(
        request,
        null,
        error
      );

      const stream = client
        .streamingRecognize()
        .on('data', () => {
          assert.fail();
        })
        .on('error', err => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });

      stream.write(request);
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

function mockBidiStreamingGrpcMethod(expectedRequest, response, error) {
  return () => {
    const mockStream = through2.obj((chunk, enc, callback) => {
      assert.deepStrictEqual(chunk, expectedRequest);
      if (error) {
        callback(error);
      } else {
        callback(null, response);
      }
    });
    return mockStream;
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
