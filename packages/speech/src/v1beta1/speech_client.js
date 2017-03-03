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
 *
 * EDITING INSTRUCTIONS
 * This file was generated from the file
 * https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1beta1/cloud_speech.proto,
 * and updates to that file get reflected here through a refresh process.
 * For the short term, the refresh process will only be runnable by Google
 * engineers.
 *
 * The only allowed edits are to method and file documentation. A 3-way
 * merge preserves those additions if the generated source changes.
 */
/* TODO: introduce line-wrapping so that it never exceeds the limit. */
/* jscs: disable maximumLineLength */
'use strict';

var configData = require('./speech_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'speech.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';

var STREAM_DESCRIPTORS = {
  streamingRecognize: new gax.StreamDescriptor(gax.StreamType.BIDI_STREAMING)
};

/**
 * The scopes needed to make gRPC calls to all of the methods defined in
 * this service.
 */
var ALL_SCOPES = [
  'https://www.googleapis.com/auth/cloud-platform'
];

/**
 * Service that implements Cloud Speech API.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link speechClient}
 *
 * @example
 * var speechV1beta1 = require('@google-cloud/speech').v1beta1({
 *   // optional auth parameters.
 * });
 * var client = speechV1beta1.speechClient();
 *
 * @class
 */
function SpeechClient(gaxGrpc, grpcClients, opts) {
  opts = extend({
    servicePath: SERVICE_ADDRESS,
    port: DEFAULT_SERVICE_PORT,
    clientConfig: {}
  }, opts);

  var googleApiClient = [
    'gl-node/' + process.versions.node
  ];
  if (opts.libName && opts.libVersion) {
    googleApiClient.push(opts.libName + '/' + opts.libVersion);
  }
  googleApiClient.push(
    CODE_GEN_NAME_VERSION,
    'gax/' + gax.version,
    'grpc/' + gaxGrpc.grpcVersion
  );


  this.operationsClient = new gax.lro({
    auth: gaxGrpc.auth,
    grpc: gaxGrpc.grpc
  }).operationsClient(opts);

  this.longrunningDescriptors = {
    asyncRecognize: new gax.LongrunningDescriptor(
      this.operationsClient,
      grpcClients.google.cloud.speech.v1beta1.AsyncRecognizeResponse.decode,
      grpcClients.google.cloud.speech.v1beta1.AsyncRecognizeMetadata.decode)
  };

  var defaults = gaxGrpc.constructSettings(
      'google.cloud.speech.v1beta1.Speech',
      configData,
      opts.clientConfig,
      {'x-goog-api-client': googleApiClient.join(' ')});

  var self = this;

  this.auth = gaxGrpc.auth;
  var speechStub = gaxGrpc.createStub(
      grpcClients.google.cloud.speech.v1beta1.Speech,
      opts);
  var speechStubMethods = [
    'syncRecognize',
    'asyncRecognize',
    'streamingRecognize'
  ];
  speechStubMethods.forEach(function(methodName) {
    self['_' + methodName] = gax.createApiCall(
      speechStub.then(function(speechStub) {
        return function() {
          var args = Array.prototype.slice.call(arguments, 0);
          return speechStub[methodName].apply(speechStub, args);
        };
      }),
      defaults[methodName],
      STREAM_DESCRIPTORS[methodName] || self.longrunningDescriptors[methodName]);
  });
}

/**
 * Get the project ID used by this class.
 * @aram {function(Error, string)} callback - the callback to be called with
 *   the current project Id.
 */
SpeechClient.prototype.getProjectId = function(callback) {
  return this.auth.getProjectId(callback);
};

// Service calls

/**
 * Perform synchronous speech-recognition: receive results after all audio
 * has been sent and processed.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Object} request.config
 *   [Required] The `config` message provides information to the recognizer
 *   that specifies how to process the request.
 *
 *   This object should have the same structure as [RecognitionConfig]{@link RecognitionConfig}
 * @param {Object} request.audio
 *   [Required] The audio data to be recognized.
 *
 *   This object should have the same structure as [RecognitionAudio]{@link RecognitionAudio}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [SyncRecognizeResponse]{@link SyncRecognizeResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [SyncRecognizeResponse]{@link SyncRecognizeResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = speechV1beta1.speechClient();
 * var encoding = speechV1beta1.RecognitionConfig.AudioEncoding.FLAC;
 * var sampleRate = 44100;
 * var config = {
 *     encoding : encoding,
 *     sampleRate : sampleRate
 * };
 * var uri = 'gs://bucket_name/file_name.flac';
 * var audio = {
 *     uri : uri
 * };
 * var request = {
 *     config: config,
 *     audio: audio
 * };
 * client.syncRecognize(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
SpeechClient.prototype.syncRecognize = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._syncRecognize(request, options, callback);
};

/**
 * Perform asynchronous speech-recognition: receive results via the
 * google.longrunning.Operations interface. Returns either an
 * `Operation.error` or an `Operation.response` which contains
 * an `AsyncRecognizeResponse` message.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Object} request.config
 *   [Required] The `config` message provides information to the recognizer
 *   that specifies how to process the request.
 *
 *   This object should have the same structure as [RecognitionConfig]{@link RecognitionConfig}
 * @param {Object} request.audio
 *   [Required] The audio data to be recognized.
 *
 *   This object should have the same structure as [RecognitionAudio]{@link RecognitionAudio}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = speechV1beta1.speechClient();
 * var encoding = speechV1beta1.RecognitionConfig.AudioEncoding.FLAC;
 * var sampleRate = 44100;
 * var config = {
 *     encoding : encoding,
 *     sampleRate : sampleRate
 * };
 * var uri = 'gs://bucket_name/file_name.flac';
 * var audio = {
 *     uri : uri
 * };
 * var request = {
 *     config: config,
 *     audio: audio
 * };
 *
 * // Handle the operation using the promise pattern.
 * client.asyncRecognize(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Operation#promise starts polling for the completion of the LRO.
 *     return operation.promise();
 * }).then(function(responses) {
 *     // The final result of the operation.
 *     var result = responses[0];
 *
 *     // The metadata value of the completed operation.
 *     var metadata = responses[1];
 *
 *     // The response of the api call returning the complete operation.
 *     var finalApiResponse = responses[2];
 * }).catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Handle the operation using the event emitter pattern.
 * client.asyncRecognize(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Adding a listener for the "complete" event starts polling for the
 *     // completion of the operation.
 *     operation.on('complete', function(result, metadata, finalApiResponse) {
 *       // doSomethingWith(result);
 *     });
 *
 *     // Adding a listener for the "progress" event causes the callback to be
 *     // called on any change in metadata when the operation is polled.
 *     operation.on('progress', function(metadata, apiResponse) {
 *       // doSomethingWith(metadata)
 *     })
 *
 *     // Adding a listener for the "error" event handles any errors found during polling.
 *     operation.on('error', function(err) {
 *       // throw(err);
 *     })
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
SpeechClient.prototype.asyncRecognize = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._asyncRecognize(request, options, callback);
};

/**
 * Perform bidirectional streaming speech-recognition: receive results while
 * sending audio. This method is only available via the gRPC API (not REST).
 *
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @returns {Stream}
 *   An object stream which is both readable and writable. It accepts objects
 *   representing [StreamingRecognizeRequest]{@link StreamingRecognizeRequest} for write() method, and
 *   will emit objects representing [StreamingRecognizeResponse]{@link StreamingRecognizeResponse} on 'data' event asynchronously.
 *
 * @example
 *
 * var client = speechV1beta1.speechClient();
 * var stream = client.streamingRecognize().on('data', function(response) {
 *     // doThingsWith(response);
 * });
 * var request = {};
 * // Write request objects.
 * stream.write(request);
 */
SpeechClient.prototype.streamingRecognize = function(options) {
  if (options === undefined) {
    options = {};
  }

  return this._streamingRecognize(options);
};

function SpeechClientBuilder(gaxGrpc) {
  if (!(this instanceof SpeechClientBuilder)) {
    return new SpeechClientBuilder(gaxGrpc);
  }

  var speechClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/cloud/speech/v1beta1/cloud_speech.proto'
  }]);
  extend(this, speechClient.google.cloud.speech.v1beta1);


  /**
   * Build a new instance of {@link SpeechClient}.
   *
   * @param {Object=} opts - The optional parameters.
   * @param {String=} opts.servicePath
   *   The domain name of the API remote host.
   * @param {number=} opts.port
   *   The port on which to connect to the remote host.
   * @param {grpc.ClientCredentials=} opts.sslCreds
   *   A ClientCredentials for use with an SSL-enabled channel.
   * @param {Object=} opts.clientConfig
   *   The customized config to build the call settings. See
   *   {@link gax.constructSettings} for the format.
   */
  this.speechClient = function(opts) {
    return new SpeechClient(gaxGrpc, speechClient, opts);
  };
  extend(this.speechClient, SpeechClient);
}
module.exports = SpeechClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;