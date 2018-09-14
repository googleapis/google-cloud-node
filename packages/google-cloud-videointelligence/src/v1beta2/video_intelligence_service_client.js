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

const gapicConfig = require('./video_intelligence_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');
const protobuf = require('protobufjs');

const VERSION = require('../../package.json').version;

/**
 * Service that implements Google Cloud Video Intelligence API.
 *
 * @class
 * @memberof v1beta2
 */
class VideoIntelligenceServiceClient {
  /**
   * Construct an instance of VideoIntelligenceServiceClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {function} [options.promise] - Custom promise module to use instead
   *     of native Promises.
   * @param {string} [options.servicePath] - The domain name of the
   *     API remote host.
   */
  constructor(opts) {
    this._descriptors = {};

    // Ensure that options include the service address and port.
    opts = Object.assign(
      {
        clientConfig: {},
        port: this.constructor.port,
        servicePath: this.constructor.servicePath,
      },
      opts
    );

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = this.constructor.scopes;
    const gaxGrpc = new gax.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    const clientHeader = [
      `gl-node/${process.version}`,
      `grpc/${gaxGrpc.grpcVersion}`,
      `gax/${gax.version}`,
      `gapic/${VERSION}`,
    ];
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    const protos = merge(
      {},
      gaxGrpc.loadProto(
        path.join(__dirname, '..', '..', 'protos'),
        'google/cloud/videointelligence/v1beta2/video_intelligence.proto'
      )
    );
    let protoFilesRoot = new gax.GoogleProtoFilesRoot();
    protoFilesRoot = protobuf.loadSync(
      path.join(
        __dirname,
        '..',
        '..',
        'protos',
        'google/cloud/videointelligence/v1beta2/video_intelligence.proto'
      ),
      protoFilesRoot
    );

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    this.operationsClient = new gax.lro({
      auth: gaxGrpc.auth,
      grpc: gaxGrpc.grpc,
    }).operationsClient(opts);

    const annotateVideoResponse = protoFilesRoot.lookup(
      'google.cloud.videointelligence.v1beta2.AnnotateVideoResponse'
    );
    const annotateVideoMetadata = protoFilesRoot.lookup(
      'google.cloud.videointelligence.v1beta2.AnnotateVideoProgress'
    );

    this._descriptors.longrunning = {
      annotateVideo: new gax.LongrunningDescriptor(
        this.operationsClient,
        annotateVideoResponse.decode.bind(annotateVideoResponse),
        annotateVideoMetadata.decode.bind(annotateVideoMetadata)
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.videointelligence.v1beta2.VideoIntelligenceService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.videointelligence.v1beta2.VideoIntelligenceService.
    const videoIntelligenceServiceStub = gaxGrpc.createStub(
      protos.google.cloud.videointelligence.v1beta2.VideoIntelligenceService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const videoIntelligenceServiceStubMethods = ['annotateVideo'];
    for (let methodName of videoIntelligenceServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        videoIntelligenceServiceStub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            }
        ),
        defaults[methodName],
        this._descriptors.longrunning[methodName]
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'videointelligence.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return ['https://www.googleapis.com/auth/cloud-platform'];
  }

  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(callback) {
    return this.auth.getProjectId(callback);
  }

  // -------------------
  // -- Service calls --
  // -------------------

  /**
   * Performs asynchronous video annotation. Progress and results can be
   * retrieved through the `google.longrunning.Operations` interface.
   * `Operation.metadata` contains `AnnotateVideoProgress` (progress).
   * `Operation.response` contains `AnnotateVideoResponse` (results).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.inputUri]
   *   Input video location. Currently, only
   *   [Google Cloud Storage](https://cloud.google.com/storage/) URIs are
   *   supported, which must be specified in the following format:
   *   `gs://bucket-id/object-id` (other URI formats return
   *   google.rpc.Code.INVALID_ARGUMENT). For more information, see
   *   [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
   *   A video URI may include wildcards in `object-id`, and thus identify
   *   multiple videos. Supported wildcards: '*' to match 0 or more characters;
   *   '?' to match 1 character. If unset, the input video should be embedded
   *   in the request as `input_content`. If set, `input_content` should be unset.
   * @param {string} [request.inputContent]
   *   The video data bytes.
   *   If unset, the input video(s) should be specified via `input_uri`.
   *   If set, `input_uri` should be unset.
   * @param {number[]} [request.features]
   *   Requested video annotation features.
   *
   *   The number should be among the values of [Feature]{@link google.cloud.videointelligence.v1beta2.Feature}
   * @param {Object} [request.videoContext]
   *   Additional video context and/or feature-specific parameters.
   *
   *   This object should have the same structure as [VideoContext]{@link google.cloud.videointelligence.v1beta2.VideoContext}
   * @param {string} [request.outputUri]
   *   Optional location where the output (in JSON format) should be stored.
   *   Currently, only [Google Cloud Storage](https://cloud.google.com/storage/)
   *   URIs are supported, which must be specified in the following format:
   *   `gs://bucket-id/object-id` (other URI formats return
   *   google.rpc.Code.INVALID_ARGUMENT). For more information, see
   *   [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
   * @param {string} [request.locationId]
   *   Optional cloud region where annotation should take place. Supported cloud
   *   regions: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region
   *   is specified, a region will be determined based on video file location.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const videoIntelligence = require('@google-cloud/video-intelligence');
   *
   * const client = new videoIntelligence.v1beta2.VideoIntelligenceServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const inputUri = 'gs://demomaker/cat.mp4';
   * const featuresElement = 'LABEL_DETECTION';
   * const features = [featuresElement];
   * const request = {
   *   inputUri: inputUri,
   *   features: features,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.annotateVideo(request)
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     const result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     const metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const inputUri = 'gs://demomaker/cat.mp4';
   * const featuresElement = 'LABEL_DETECTION';
   * const features = [featuresElement];
   * const request = {
   *   inputUri: inputUri,
   *   features: features,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.annotateVideo(request)
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
   *
   *     // Adding a listener for the "complete" event starts polling for the
   *     // completion of the operation.
   *     operation.on('complete', (result, metadata, finalApiResponse) => {
   *       // doSomethingWith(result);
   *     });
   *
   *     // Adding a listener for the "progress" event causes the callback to be
   *     // called on any change in metadata when the operation is polled.
   *     operation.on('progress', (metadata, apiResponse) => {
   *       // doSomethingWith(metadata)
   *     });
   *
   *     // Adding a listener for the "error" event handles any errors found during polling.
   *     operation.on('error', err => {
   *       // throw(err);
   *     });
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  annotateVideo(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.annotateVideo(request, options, callback);
  }
}

module.exports = VideoIntelligenceServiceClient;
