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
 *
 * EDITING INSTRUCTIONS
 * This file was generated from the file
 * https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta2/video_intelligence.proto,
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

var configData = require('./video_intelligence_service_client_config');
var extend = require('extend');
var gax = require('google-gax');
var googleProtoFiles = require('google-proto-files');
var path = require('path');
var protobuf = require('protobufjs');

var SERVICE_ADDRESS = 'videointelligence.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.0.5';

/**
 * The scopes needed to make gRPC calls to all of the methods defined in
 * this service.
 */
var ALL_SCOPES = [
  'https://www.googleapis.com/auth/cloud-platform'
];

/**
 * Service that implements Google Cloud Video Intelligence API.
 *
 *
 * @class
 */
function VideoIntelligenceServiceClient(gaxGrpc, loadedProtos, opts) {
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

  var protoFilesRoot = new gax.grpc.GoogleProtoFilesRoot();
  protoFilesRoot = protobuf.loadSync(
    path.join(__dirname, '..', '..', 'protos', 'google/cloud/videointelligence/v1beta2/video_intelligence.proto'),
    protoFilesRoot);

  var annotateVideoResponse = protoFilesRoot.lookup('google.cloud.videointelligence.v1beta2.AnnotateVideoResponse');
  var annotateVideoMetadata = protoFilesRoot.lookup('google.cloud.videointelligence.v1beta2.AnnotateVideoProgress');

  this.longrunningDescriptors = {
    annotateVideo: new gax.LongrunningDescriptor(
      this.operationsClient,
      annotateVideoResponse.decode.bind(annotateVideoResponse),
      annotateVideoMetadata.decode.bind(annotateVideoMetadata))
  };

  var defaults = gaxGrpc.constructSettings(
      'google.cloud.videointelligence.v1beta2.VideoIntelligenceService',
      configData,
      opts.clientConfig,
      {'x-goog-api-client': googleApiClient.join(' ')});

  var self = this;

  this.auth = gaxGrpc.auth;
  var videoIntelligenceServiceStub = gaxGrpc.createStub(
      loadedProtos.google.cloud.videointelligence.v1beta2.VideoIntelligenceService,
      opts);
  var videoIntelligenceServiceStubMethods = [
    'annotateVideo'
  ];
  videoIntelligenceServiceStubMethods.forEach(function(methodName) {
    self['_' + methodName] = gax.createApiCall(
      videoIntelligenceServiceStub.then(function(videoIntelligenceServiceStub) {
        return function() {
          var args = Array.prototype.slice.call(arguments, 0);
          return videoIntelligenceServiceStub[methodName].apply(videoIntelligenceServiceStub, args);
        };
      }),
      defaults[methodName],
      self.longrunningDescriptors[methodName]);
  });
}


/**
 * Get the project ID used by this class.
 * @param {function(Error, string)} callback - the callback to be called with
 *   the current project Id.
 */
VideoIntelligenceServiceClient.prototype.getProjectId = function(callback) {
  return this.auth.getProjectId(callback);
};

// Service calls

/**
 * Performs asynchronous video annotation. Progress and results can be
 * retrieved through the `google.longrunning.Operations` interface.
 * `Operation.metadata` contains `AnnotateVideoProgress` (progress).
 * `Operation.response` contains `AnnotateVideoResponse` (results).
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string=} request.inputUri
 *   Input video location. Currently, only
 *   [Google Cloud Storage](https://cloud.google.com/storage/) URIs are
 *   supported, which must be specified in the following format:
 *   `gs://bucket-id/object-id` (other URI formats return
 *   {@link google.rpc.Code.INVALID_ARGUMENT}). For more information, see
 *   [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
 *   A video URI may include wildcards in `object-id`, and thus identify
 *   multiple videos. Supported wildcards: '*' to match 0 or more characters;
 *   '?' to match 1 character. If unset, the input video should be embedded
 *   in the request as `input_content`. If set, `input_content` should be unset.
 * @param {string=} request.inputContent
 *   The video data bytes. Encoding: base64. If unset, the input video(s)
 *   should be specified via `input_uri`. If set, `input_uri` should be unset.
 * @param {number[]=} request.features
 *   Requested video annotation features.
 *
 *   The number should be among the values of [Feature]{@link Feature}
 * @param {Object=} request.videoContext
 *   Additional video context and/or feature-specific parameters.
 *
 *   This object should have the same structure as [VideoContext]{@link VideoContext}
 * @param {string=} request.outputUri
 *   Optional location where the output (in JSON format) should be stored.
 *   Currently, only [Google Cloud Storage](https://cloud.google.com/storage/)
 *   URIs are supported, which must be specified in the following format:
 *   `gs://bucket-id/object-id` (other URI formats return
 *   {@link google.rpc.Code.INVALID_ARGUMENT}). For more information, see
 *   [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
 * @param {string=} request.locationId
 *   Optional cloud region where annotation should take place. Supported cloud
 *   regions: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region
 *   is specified, a region will be determined based on video file location.
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
 * var videoIntelligence = require('@google-cloud/video-intelligence');
 *
 * var client = videoIntelligence.v1beta2({
 *   // optional auth parameters.
 * });
 *
 *
 *
 * // Handle the operation using the promise pattern.
 * client.annotateVideo({}).then(function(responses) {
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
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 *
 *
 *
 * // Handle the operation using the event emitter pattern.
 * client.annotateVideo({}).then(function(responses) {
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
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
VideoIntelligenceServiceClient.prototype.annotateVideo = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._annotateVideo(request, options, callback);
};

function VideoIntelligenceServiceClientBuilder(gaxGrpc) {
  if (!(this instanceof VideoIntelligenceServiceClientBuilder)) {
    return new VideoIntelligenceServiceClientBuilder(gaxGrpc);
  }

  var videoIntelligenceServiceStubProtos = gaxGrpc.loadProto(
    path.join(__dirname, '..', '..', 'protos'), 'google/cloud/videointelligence/v1beta2/video_intelligence.proto');
  extend(this, videoIntelligenceServiceStubProtos.google.cloud.videointelligence.v1beta2);


  /**
   * Build a new instance of {@link VideoIntelligenceServiceClient}.
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
  this.videoIntelligenceServiceClient = function(opts) {
    return new VideoIntelligenceServiceClient(gaxGrpc, videoIntelligenceServiceStubProtos, opts);
  };
  extend(this.videoIntelligenceServiceClient, VideoIntelligenceServiceClient);
}
module.exports = VideoIntelligenceServiceClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;