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
 * https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto,
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

var configData = require('./image_annotator_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'vision.googleapis.com';

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
 * Service that performs Cloud Vision API detection tasks, such as face,
 * landmark, logo, label, and text detection, over client images, and returns
 * detected entities from the images.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link imageAnnotatorClient}
 *
 * @example
 * var visionV1 = require('@google-cloud/vision').v1({
 *   // optional auth parameters.
 * });
 * var client = visionV1.imageAnnotatorClient();
 *
 * @class
 */
function ImageAnnotatorClient(gaxGrpc, grpcClients, opts) {
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
      'google.cloud.vision.v1.ImageAnnotator',
      configData,
      clientConfig,
      {'x-goog-api-client': googleApiClient});

  var imageAnnotatorStub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClients.imageAnnotatorClient.google.cloud.vision.v1.ImageAnnotator,
      {sslCreds: sslCreds});
  var imageAnnotatorStubMethods = [
    'batchAnnotateImages'
  ];
  imageAnnotatorStubMethods.forEach(function(methodName) {
    this['_' + methodName] = gax.createApiCall(
      imageAnnotatorStub.then(function(imageAnnotatorStub) {
        return imageAnnotatorStub[methodName].bind(imageAnnotatorStub);
      }),
      defaults[methodName],
      null);
  }.bind(this));
}

// Service calls

/**
 * Run image detection and annotation for a batch of images.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Object[]} request.requests
 *   Individual image annotation requests for this batch.
 *
 *   This object should have the same structure as [AnnotateImageRequest]{@link AnnotateImageRequest}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = visionV1.imageAnnotatorClient();
 * var requests = [];
 * client.batchAnnotateImages({requests: requests}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
ImageAnnotatorClient.prototype.batchAnnotateImages = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._batchAnnotateImages(request, options, callback);
};

function ImageAnnotatorClientBuilder(gaxGrpc) {
  if (!(this instanceof ImageAnnotatorClientBuilder)) {
    return new ImageAnnotatorClientBuilder(gaxGrpc);
  }

  var imageAnnotatorClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/cloud/vision/v1/image_annotator.proto'
  }]);
  extend(this, imageAnnotatorClient.google.cloud.vision.v1);

  var grpcClients = {
    imageAnnotatorClient: imageAnnotatorClient
  };

  /**
   * Build a new instance of {@link ImageAnnotatorClient}.
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
  this.imageAnnotatorClient = function(opts) {
    return new ImageAnnotatorClient(gaxGrpc, grpcClients, opts);
  };
  extend(this.imageAnnotatorClient, ImageAnnotatorClient);
}
module.exports = ImageAnnotatorClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;