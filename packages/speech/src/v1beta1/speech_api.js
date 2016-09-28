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


/**
 * The scopes needed to make gRPC calls to all of the methods defined in
 * this service.
 */
var ALL_SCOPES = [
  'https://www.googleapis.com/auth/cloud-platform'
];

/**
 * Service that implements Google Cloud Speech API.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link speechApi}
 *
 * @example
 * var speechV1beta1 = require('@google-cloud/speech').v1beta1({
 *   // optional auth parameters.
 * });
 * var api = speechV1beta1.speechApi();
 *
 * @class
 */
function SpeechApi(gaxGrpc, grpcClients, opts) {
  opts = opts || {};
  var servicePath = opts.servicePath || SERVICE_ADDRESS;
  var port = opts.port || DEFAULT_SERVICE_PORT;
  var sslCreds = opts.sslCreds || null;
  var clientConfig = opts.clientConfig || {};
  var appName = opts.appName || 'gax';
  var appVersion = opts.appVersion || gax.version;

  var googleApiClient = [
    appName + '/' + appVersion,
    CODE_GEN_NAME_VERSION,
    'gax/' + gax.version,
    'nodejs/' + process.version].join(' ');

  var defaults = gaxGrpc.constructSettings(
      'google.cloud.speech.v1beta1.Speech',
      configData,
      clientConfig,
      null,
      null,
      {'x-goog-api-client': googleApiClient});

  var speechStub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClients.speechClient.google.cloud.speech.v1beta1.Speech,
      {sslCreds: sslCreds});
  var speechStubMethods = [
    'syncRecognize',
    'asyncRecognize'
  ];
  speechStubMethods.forEach(function(methodName) {
    this['_' + methodName] = gax.createApiCall(
      speechStub.then(function(speechStub) {
        return speechStub[methodName].bind(speechStub);
      }),
      defaults[methodName]);
  }.bind(this));
}

// Service calls

/**
 * Perform synchronous speech-recognition: receive results after all audio
 * has been sent and processed.
 *
 * @param {Object} config
 *   [Required] The `config` message provides information to the recognizer
 *   that specifies how to process the request.
 *
 *   This object should have the same structure as [RecognitionConfig]{@link RecognitionConfig}
 * @param {Object} audio
 *   [Required] The audio data to be recognized.
 *
 *   This object should have the same structure as [RecognitionAudio]{@link RecognitionAudio}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [SyncRecognizeResponse]{@link SyncRecognizeResponse}
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = speechV1beta1.speechApi();
 * var config = {};
 * var audio = {};
 * api.syncRecognize(config, audio, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
SpeechApi.prototype.syncRecognize = function syncRecognize(
    config,
    audio,
    options,
    callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  var req = {
    config: config,
    audio: audio
  };
  return this._syncRecognize(req, options, callback);
};

/**
 * Perform asynchronous speech-recognition: receive results via the
 * google.longrunning.Operations interface. Returns either an
 * `Operation.error` or an `Operation.response` which contains
 * an `AsyncRecognizeResponse` message.
 *
 * @param {Object} config
 *   [Required] The `config` message provides information to the recognizer
 *   that specifies how to process the request.
 *
 *   This object should have the same structure as [RecognitionConfig]{@link RecognitionConfig}
 * @param {Object} audio
 *   [Required] The audio data to be recognized.
 *
 *   This object should have the same structure as [RecognitionAudio]{@link RecognitionAudio}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [google.longrunning.Operation]{@link external:"google.longrunning.Operation"}
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 *
 * @example
 *
 * var api = speechV1beta1.speechApi();
 * var config = {};
 * var audio = {};
 * api.asyncRecognize(config, audio, function(err, response) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 * });
 */
SpeechApi.prototype.asyncRecognize = function asyncRecognize(
    config,
    audio,
    options,
    callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  var req = {
    config: config,
    audio: audio
  };
  return this._asyncRecognize(req, options, callback);
};

function SpeechApiBuilder(gaxGrpc) {
  if (!(this instanceof SpeechApiBuilder)) {
    return new SpeechApiBuilder(gaxGrpc);
  }

  var speechClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/cloud/speech/v1beta1/cloud_speech.proto'
  }]);
  extend(this, speechClient.google.cloud.speech.v1beta1);

  var grpcClients = {
    speechClient: speechClient
  };

  /**
   * Build a new instance of {@link SpeechApi}.
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
   * @param {number=} opts.appName
   *   The codename of the calling service.
   * @param {String=} opts.appVersion
   *   The version of the calling service.
   */
  this.speechApi = function(opts) {
    return new SpeechApi(gaxGrpc, grpcClients, opts);
  };
  extend(this.speechApi, SpeechApi);
}
module.exports = SpeechApiBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;