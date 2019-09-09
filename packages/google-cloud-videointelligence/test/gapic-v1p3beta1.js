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
const {PassThrough} = require('stream');

const videoIntelligenceModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('VideoIntelligenceServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      videoIntelligenceModule.v1p3beta1.VideoIntelligenceServiceClient
        .servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      videoIntelligenceModule.v1p3beta1.VideoIntelligenceServiceClient
        .apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port =
      videoIntelligenceModule.v1p3beta1.VideoIntelligenceServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new videoIntelligenceModule.v1p3beta1.VideoIntelligenceServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new videoIntelligenceModule.v1p3beta1.VideoIntelligenceServiceClient(
      {fallback: true}
    );
    assert(client);
  });

  describe('annotateVideo', function() {
    it('invokes annotateVideo without error', done => {
      const client = new videoIntelligenceModule.v1p3beta1.VideoIntelligenceServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const inputUri = 'gs://cloud-samples-data/video/cat.mp4';
      const featuresElement = 'LABEL_DETECTION';
      const features = [featuresElement];
      const request = {
        inputUri: inputUri,
        features: features,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.annotateVideo = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .annotateVideo(request)
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

    it('invokes annotateVideo with error', done => {
      const client = new videoIntelligenceModule.v1p3beta1.VideoIntelligenceServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const inputUri = 'gs://cloud-samples-data/video/cat.mp4';
      const featuresElement = 'LABEL_DETECTION';
      const features = [featuresElement];
      const request = {
        inputUri: inputUri,
        features: features,
      };

      // Mock Grpc layer
      client._innerApiCalls.annotateVideo = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .annotateVideo(request)
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
      const client = new videoIntelligenceModule.v1p3beta1.VideoIntelligenceServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      assert(
        client._descriptors.longrunning.annotateVideo.responseDecoder instanceof
          Function
      );
      assert(
        client._descriptors.longrunning.annotateVideo.metadataDecoder instanceof
          Function
      );
    });
  });
});
describe('StreamingVideoIntelligenceServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      videoIntelligenceModule.v1p3beta1.StreamingVideoIntelligenceServiceClient
        .servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      videoIntelligenceModule.v1p3beta1.StreamingVideoIntelligenceServiceClient
        .apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port =
      videoIntelligenceModule.v1p3beta1.StreamingVideoIntelligenceServiceClient
        .port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new videoIntelligenceModule.v1p3beta1.StreamingVideoIntelligenceServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new videoIntelligenceModule.v1p3beta1.StreamingVideoIntelligenceServiceClient(
      {fallback: true}
    );
    assert(client);
  });

  describe('streamingAnnotateVideo', () => {
    it('invokes streamingAnnotateVideo without error', done => {
      const client = new videoIntelligenceModule.v1p3beta1.StreamingVideoIntelligenceServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const request = {};

      // Mock response
      const annotationResultsUri = 'annotationResultsUri-238075757';
      const expectedResponse = {
        annotationResultsUri: annotationResultsUri,
      };

      // Mock Grpc layer
      client._innerApiCalls.streamingAnnotateVideo = mockBidiStreamingGrpcMethod(
        request,
        expectedResponse
      );

      const stream = client
        .streamingAnnotateVideo()
        .on('data', response => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', err => {
          done(err);
        });

      stream.write(request);
    });

    it('invokes streamingAnnotateVideo with error', done => {
      const client = new videoIntelligenceModule.v1p3beta1.StreamingVideoIntelligenceServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const request = {};

      // Mock Grpc layer
      client._innerApiCalls.streamingAnnotateVideo = mockBidiStreamingGrpcMethod(
        request,
        null,
        error
      );

      const stream = client
        .streamingAnnotateVideo()
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

function mockBidiStreamingGrpcMethod(expectedRequest, response, error) {
  return () => {
    const mockStream = new PassThrough({
      objectMode: true,
      transform: (chunk, enc, callback) => {
        assert.deepStrictEqual(chunk, expectedRequest);
        if (error) {
          callback(error);
        } else {
          callback(null, response);
        }
      },
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
