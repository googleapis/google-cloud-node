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
 * https://github.com/googleapis/googleapis/blob/master/library.proto,
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

var arguejs = require('arguejs');
var configData = require('./language_service_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'language.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';

var DEFAULT_TIMEOUT = 30;

/**
 * The scopes needed to make gRPC calls to all of the methods defined in
 * this service.
 */
var ALL_SCOPES = [
  'https://www.googleapis.com/auth/cloud-platform'
];

/**
 * Provides text analysis operations such as sentiment analysis and entity
 * recognition.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 *
 * @example
 *   var languageV1beta1 = require('@google-cloud/language').v1beta1({
 *     // optional auth parameters.
 *   });
 *   var api = languageV1beta1.languageServiceApi();
 *
 * @class
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
 * @param {number=} opts.timeout
 *   The default timeout, in seconds, for calls made through this client.
 * @param {number=} opts.appName
 *   The codename of the calling service.
 * @param {String=} opts.appVersion
 *   The version of the calling service.
 */
function LanguageServiceApi(gaxGrpc, grpcClient, opts) {
  opts = opts || {};
  var servicePath = opts.servicePath || SERVICE_ADDRESS;
  var port = opts.port || DEFAULT_SERVICE_PORT;
  var sslCreds = opts.sslCreds || null;
  var clientConfig = opts.clientConfig || {};
  var timeout = opts.timeout || DEFAULT_TIMEOUT;
  var appName = opts.appName || 'gax';
  var appVersion = opts.appVersion || gax.Version;

  var googleApiClient = [
    appName + '/' + appVersion,
    CODE_GEN_NAME_VERSION,
    'nodejs/' + process.version].join(' ');

  var defaults = gaxGrpc.constructSettings(
      'google.cloud.language.v1beta1.LanguageService',
      configData,
      clientConfig,
      timeout,
      null,
      null,
      {'x-goog-api-client': googleApiClient});

  var stub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClient.google.cloud.language.v1beta1.LanguageService,
      {sslCreds: sslCreds});
  var methods = [
    'analyzeSentiment',
    'analyzeEntities',
    'annotateText'
  ];
  methods.forEach(function(methodName) {
    this['_' + methodName] = gax.createApiCall(
        stub.then(function(stub) { return stub[methodName].bind(stub); }),
        defaults[methodName]);
  }.bind(this));
}

// Callback types

/**
 * @callback APICallback
 * @param {?Error} error - the error object if something goes wrong.
 *   Null if API succeeds.
 * @param {?T} response
 *   The response object when API succeeds.
 * @template T
 */

/**
 * @callback EmptyCallback
 * @param {?Error} error - the error object if something goes wrong.
 *   Null if API succeeds.
 */

// Service calls

/**
 * Analyzes the sentiment of the provided text.
 *
 * @param {google.cloud.language.v1beta1.Document} document
 *   Input document. Currently, `analyzeSentiment` only supports English text
 *   ({@link Document.language}="EN").
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {APICallback<google.cloud.language.v1beta1.AnalyzeSentimentResponse>=} callback
 *   The function which will be called with the result of the API call.
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 * @throws an error if the RPC is aborted.
 */
LanguageServiceApi.prototype.analyzeSentiment = function analyzeSentiment() {
  var args = arguejs({
    document: Object,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    document: args.document
  };
  return this._analyzeSentiment(req, args.options, args.callback);
};

/**
 * Finds named entities (currently finds proper names) in the text,
 * entity types, salience, mentions for each entity, and other properties.
 *
 * @param {google.cloud.language.v1beta1.Document} document
 *   Input document.
 * @param {google.cloud.language.v1beta1.EncodingType} encodingType
 *   The encoding type used by the API to calculate offsets.
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {APICallback<google.cloud.language.v1beta1.AnalyzeEntitiesResponse>=} callback
 *   The function which will be called with the result of the API call.
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 * @throws an error if the RPC is aborted.
 */
LanguageServiceApi.prototype.analyzeEntities = function analyzeEntities() {
  var args = arguejs({
    document: Object,
    encodingType: Number,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    document: args.document,
    encoding_type: args.encodingType
  };
  return this._analyzeEntities(req, args.options, args.callback);
};

/**
 * Advanced API that analyzes the document and provides a full set of text
 * annotations, including semantic, syntactic, and sentiment information. This
 * API is intended for users who are familiar with machine learning and need
 * in-depth text features to build upon.
 *
 * @param {google.cloud.language.v1beta1.Document} document
 *   Input document.
 * @param {google.cloud.language.v1beta1.AnnotateTextRequest.Features} features
 *   The enabled features.
 * @param {google.cloud.language.v1beta1.EncodingType} encodingType
 *   The encoding type used by the API to calculate offsets.
 * @param {gax.CallOptions=} options
 *   Overrides the default settings for this call, e.g, timeout,
 *   retries, etc.
 * @param {APICallback<google.cloud.language.v1beta1.AnnotateTextResponse>=} callback
 *   The function which will be called with the result of the API call.
 * @returns {gax.EventEmitter} - the event emitter to handle the call
 *   status.
 * @throws an error if the RPC is aborted.
 */
LanguageServiceApi.prototype.annotateText = function annotateText() {
  var args = arguejs({
    document: Object,
    features: Object,
    encodingType: Number,
    options: [gax.CallOptions],
    callback: [Function]
  }, arguments);
  var req = {
    document: args.document,
    features: args.features,
    encoding_type: args.encodingType
  };
  return this._annotateText(req, args.options, args.callback);
};

module.exports = function build(gaxGrpc) {
  var grpcClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/cloud/language/v1beta1/language_service.proto'
  }]);
  var built = grpcClient.google.cloud.language.v1beta1;

  built.languageServiceApi = function(opts) {
    return new LanguageServiceApi(gaxGrpc, grpcClient, opts);
  };
  extend(built.languageServiceApi, LanguageServiceApi);
  return built;
};
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;