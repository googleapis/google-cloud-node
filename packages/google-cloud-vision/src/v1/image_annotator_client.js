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

const gapicConfig = require('./image_annotator_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Service that performs Google Cloud Vision API detection tasks over client
 * images, such as face, landmark, logo, label, and text detection. The
 * ImageAnnotator service returns detected entities from the images.
 *
 * @class
 * @memberof v1
 */
class ImageAnnotatorClient {
  /**
   * Construct an instance of ImageAnnotatorClient.
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
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   */
  constructor(opts) {
    opts = opts || {};
    this._descriptors = {};

    if (global.isBrowser) {
      // If we're in browser, we use gRPC fallback.
      opts.fallback = true;
    }

    // If we are in browser, we are already using fallback because of the
    // "browser" field in package.json.
    // But if we were explicitly requested to use fallback, let's do it now.
    const gaxModule = !global.isBrowser && opts.fallback ? gax.fallback : gax;

    const servicePath =
      opts.servicePath || opts.apiEndpoint || this.constructor.servicePath;

    // Ensure that options include the service address and port.
    opts = Object.assign(
      {
        clientConfig: {},
        port: this.constructor.port,
        servicePath,
      },
      opts
    );

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = this.constructor.scopes;
    const gaxGrpc = new gaxModule.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    const clientHeader = [];

    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    }
    clientHeader.push(`gax/${gaxModule.version}`);
    if (opts.fallback) {
      clientHeader.push(`gl-web/${gaxModule.version}`);
    } else {
      clientHeader.push(`grpc/${gaxGrpc.grpcVersion}`);
    }
    clientHeader.push(`gapic/${VERSION}`);
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(
      __dirname,
      '..',
      '..',
      'protos',
      'protos.json'
    );
    const protos = gaxGrpc.loadProto(
      opts.fallback ? require('../../protos/protos.json') : nodejsProtoPath
    );

    const protoFilesRoot = opts.fallback
      ? gaxModule.protobuf.Root.fromJSON(require('../../protos/protos.json'))
      : gaxModule.protobuf.loadSync(nodejsProtoPath);

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    this.operationsClient = new gaxModule.lro({
      auth: gaxGrpc.auth,
      grpc: gaxGrpc.grpc,
    }).operationsClient(opts);

    const asyncBatchAnnotateImagesResponse = protoFilesRoot.lookup(
      'google.cloud.vision.v1.AsyncBatchAnnotateImagesResponse'
    );
    const asyncBatchAnnotateImagesMetadata = protoFilesRoot.lookup(
      'google.cloud.vision.v1.OperationMetadata'
    );
    const asyncBatchAnnotateFilesResponse = protoFilesRoot.lookup(
      'google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse'
    );
    const asyncBatchAnnotateFilesMetadata = protoFilesRoot.lookup(
      'google.cloud.vision.v1.OperationMetadata'
    );

    this._descriptors.longrunning = {
      asyncBatchAnnotateImages: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        asyncBatchAnnotateImagesResponse.decode.bind(
          asyncBatchAnnotateImagesResponse
        ),
        asyncBatchAnnotateImagesMetadata.decode.bind(
          asyncBatchAnnotateImagesMetadata
        )
      ),
      asyncBatchAnnotateFiles: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        asyncBatchAnnotateFilesResponse.decode.bind(
          asyncBatchAnnotateFilesResponse
        ),
        asyncBatchAnnotateFilesMetadata.decode.bind(
          asyncBatchAnnotateFilesMetadata
        )
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.vision.v1.ImageAnnotator',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.vision.v1.ImageAnnotator.
    const imageAnnotatorStub = gaxGrpc.createStub(
      opts.fallback
        ? protos.lookupService('google.cloud.vision.v1.ImageAnnotator')
        : protos.google.cloud.vision.v1.ImageAnnotator,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const imageAnnotatorStubMethods = [
      'batchAnnotateImages',
      'batchAnnotateFiles',
      'asyncBatchAnnotateImages',
      'asyncBatchAnnotateFiles',
    ];
    for (const methodName of imageAnnotatorStubMethods) {
      const innerCallPromise = imageAnnotatorStub.then(
        stub => (...args) => {
          return stub[methodName].apply(stub, args);
        },
        err => () => {
          throw err;
        }
      );
      this._innerApiCalls[methodName] = gaxModule.createApiCall(
        innerCallPromise,
        defaults[methodName],
        this._descriptors.longrunning[methodName]
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'vision.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'vision.googleapis.com';
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
    return [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/cloud-vision',
    ];
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
   * Run image detection and annotation for a batch of images.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object[]} request.requests
   *   Required. Individual image annotation requests for this batch.
   *
   *   This object should have the same structure as [AnnotateImageRequest]{@link google.cloud.vision.v1.AnnotateImageRequest}
   * @param {string} [request.parent]
   *   Optional. Target project and location to make a call.
   *
   *   Format: `projects/{project-id}/locations/{location-id}`.
   *
   *   If no parent is specified, a region will be chosen automatically.
   *
   *   Supported location-ids:
   *       `us`: USA country only,
   *       `asia`: East asia areas, like Japan, Taiwan,
   *       `eu`: The European Union.
   *
   *   Example: `projects/project-A/locations/eu`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [BatchAnnotateImagesResponse]{@link google.cloud.vision.v1.BatchAnnotateImagesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [BatchAnnotateImagesResponse]{@link google.cloud.vision.v1.BatchAnnotateImagesResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('@google-cloud/vision');
   *
   * const client = new vision.v1.ImageAnnotatorClient({
   *   // optional auth parameters.
   * });
   *
   * const requests = [];
   * client.batchAnnotateImages({requests: requests})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  batchAnnotateImages(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.batchAnnotateImages(request, options, callback);
  }

  /**
   * Service that performs image detection and annotation for a batch of files.
   * Now only "application/pdf", "image/tiff" and "image/gif" are supported.
   *
   * This service will extract at most 5 (customers can specify which 5 in
   * AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each
   * file provided and perform detection and annotation for each image
   * extracted.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object[]} request.requests
   *   Required. The list of file annotation requests. Right now we support only one
   *   AnnotateFileRequest in BatchAnnotateFilesRequest.
   *
   *   This object should have the same structure as [AnnotateFileRequest]{@link google.cloud.vision.v1.AnnotateFileRequest}
   * @param {string} [request.parent]
   *   Optional. Target project and location to make a call.
   *
   *   Format: `projects/{project-id}/locations/{location-id}`.
   *
   *   If no parent is specified, a region will be chosen automatically.
   *
   *   Supported location-ids:
   *       `us`: USA country only,
   *       `asia`: East asia areas, like Japan, Taiwan,
   *       `eu`: The European Union.
   *
   *   Example: `projects/project-A/locations/eu`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [BatchAnnotateFilesResponse]{@link google.cloud.vision.v1.BatchAnnotateFilesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [BatchAnnotateFilesResponse]{@link google.cloud.vision.v1.BatchAnnotateFilesResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('@google-cloud/vision');
   *
   * const client = new vision.v1.ImageAnnotatorClient({
   *   // optional auth parameters.
   * });
   *
   * const requests = [];
   * client.batchAnnotateFiles({requests: requests})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  batchAnnotateFiles(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.batchAnnotateFiles(request, options, callback);
  }

  /**
   * Run asynchronous image detection and annotation for a list of images.
   *
   * Progress and results can be retrieved through the
   * `google.longrunning.Operations` interface.
   * `Operation.metadata` contains `OperationMetadata` (metadata).
   * `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results).
   *
   * This service will write image annotation outputs to json files in customer
   * GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object[]} request.requests
   *   Required. Individual image annotation requests for this batch.
   *
   *   This object should have the same structure as [AnnotateImageRequest]{@link google.cloud.vision.v1.AnnotateImageRequest}
   * @param {Object} request.outputConfig
   *   Required. The desired output location and metadata (e.g. format).
   *
   *   This object should have the same structure as [OutputConfig]{@link google.cloud.vision.v1.OutputConfig}
   * @param {string} [request.parent]
   *   Optional. Target project and location to make a call.
   *
   *   Format: `projects/{project-id}/locations/{location-id}`.
   *
   *   If no parent is specified, a region will be chosen automatically.
   *
   *   Supported location-ids:
   *       `us`: USA country only,
   *       `asia`: East asia areas, like Japan, Taiwan,
   *       `eu`: The European Union.
   *
   *   Example: `projects/project-A/locations/eu`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('@google-cloud/vision');
   *
   * const client = new vision.v1.ImageAnnotatorClient({
   *   // optional auth parameters.
   * });
   *
   * const requests = [];
   * const outputConfig = {};
   * const request = {
   *   requests: requests,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.asyncBatchAnnotateImages(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     const result = responses[0];
   *     const metadata = responses[1];
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const requests = [];
   * const outputConfig = {};
   * const request = {
   *   requests: requests,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.asyncBatchAnnotateImages(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
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
   *
   * const requests = [];
   * const outputConfig = {};
   * const request = {
   *   requests: requests,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.asyncBatchAnnotateImages(request);
   *
   * const [response] = await operation.promise();
   */
  asyncBatchAnnotateImages(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.asyncBatchAnnotateImages(
      request,
      options,
      callback
    );
  }

  /**
   * Run asynchronous image detection and annotation for a list of generic
   * files, such as PDF files, which may contain multiple pages and multiple
   * images per page. Progress and results can be retrieved through the
   * `google.longrunning.Operations` interface.
   * `Operation.metadata` contains `OperationMetadata` (metadata).
   * `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object[]} request.requests
   *   Required. Individual async file annotation requests for this batch.
   *
   *   This object should have the same structure as [AsyncAnnotateFileRequest]{@link google.cloud.vision.v1.AsyncAnnotateFileRequest}
   * @param {string} [request.parent]
   *   Optional. Target project and location to make a call.
   *
   *   Format: `projects/{project-id}/locations/{location-id}`.
   *
   *   If no parent is specified, a region will be chosen automatically.
   *
   *   Supported location-ids:
   *       `us`: USA country only,
   *       `asia`: East asia areas, like Japan, Taiwan,
   *       `eu`: The European Union.
   *
   *   Example: `projects/project-A/locations/eu`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('@google-cloud/vision');
   *
   * const client = new vision.v1.ImageAnnotatorClient({
   *   // optional auth parameters.
   * });
   *
   * const requests = [];
   *
   * // Handle the operation using the promise pattern.
   * client.asyncBatchAnnotateFiles({requests: requests})
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     const result = responses[0];
   *     const metadata = responses[1];
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const requests = [];
   *
   * // Handle the operation using the event emitter pattern.
   * client.asyncBatchAnnotateFiles({requests: requests})
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
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
   *
   * const requests = [];
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.asyncBatchAnnotateFiles({requests: requests});
   *
   * const [response] = await operation.promise();
   */
  asyncBatchAnnotateFiles(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.asyncBatchAnnotateFiles(
      request,
      options,
      callback
    );
  }
}

module.exports = ImageAnnotatorClient;
