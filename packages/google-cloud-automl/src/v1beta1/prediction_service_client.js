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

const gapicConfig = require('./prediction_service_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * AutoML Prediction API.
 *
 * On any input that is documented to expect a string parameter in
 * snake_case or kebab-case, either of those cases is accepted.
 *
 * @class
 * @memberof v1beta1
 */
class PredictionServiceClient {
  /**
   * Construct an instance of PredictionServiceClient.
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

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      modelPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/models/{model}'
      ),
    };

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

    const batchPredictResponse = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.BatchPredictResult'
    );
    const batchPredictMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );

    this._descriptors.longrunning = {
      batchPredict: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        batchPredictResponse.decode.bind(batchPredictResponse),
        batchPredictMetadata.decode.bind(batchPredictMetadata)
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.automl.v1beta1.PredictionService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.automl.v1beta1.PredictionService.
    const predictionServiceStub = gaxGrpc.createStub(
      opts.fallback
        ? protos.lookupService('google.cloud.automl.v1beta1.PredictionService')
        : protos.google.cloud.automl.v1beta1.PredictionService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const predictionServiceStubMethods = ['predict', 'batchPredict'];
    for (const methodName of predictionServiceStubMethods) {
      const innerCallPromise = predictionServiceStub.then(
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
    return 'automl.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'automl.googleapis.com';
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
   * Perform an online prediction. The prediction result will be directly
   * returned in the response.
   * Available for following ML problems, and their expected request payloads:
   * * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes
   *                          up to 30MB.
   * * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes
   *                            up to 30MB.
   * * Text Classification - TextSnippet, content up to 60,000 characters,
   *                         UTF-8 encoded.
   * * Text Extraction - TextSnippet, content up to 30,000 characters,
   *                     UTF-8 NFC encoded.
   * * Translation - TextSnippet, content up to 25,000 characters, UTF-8
   *                 encoded.
   * * Tables - Row, with column values matching the columns of the model,
   *            up to 5MB. Not available for FORECASTING
   *
   * prediction_type.
   * * Text Sentiment - TextSnippet, content up 500 characters, UTF-8
   *                     encoded.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Name of the model requested to serve the prediction.
   * @param {Object} request.payload
   *   Required. Payload to perform a prediction on. The payload must match the
   *   problem type that the model was trained to solve.
   *
   *   This object should have the same structure as [ExamplePayload]{@link google.cloud.automl.v1beta1.ExamplePayload}
   * @param {Object.<string, string>} [request.params]
   *   Additional domain-specific parameters, any string must be up to 25000
   *   characters long.
   *
   *   *  For Image Classification:
   *
   *      `score_threshold` - (float) A value from 0.0 to 1.0. When the model
   *       makes predictions for an image, it will only produce results that have
   *       at least this confidence score. The default is 0.5.
   *
   *    *  For Image Object Detection:
   *      `score_threshold` - (float) When Model detects objects on the image,
   *          it will only produce bounding boxes which have at least this
   *          confidence score. Value in 0 to 1 range, default is 0.5.
   *      `max_bounding_box_count` - (int64) No more than this number of bounding
   *          boxes will be returned in the response. Default is 100, the
   *          requested value may be limited by server.
   *   *  For Tables:
   *      `feature_importance` - (boolean) Whether
   *
   *   [feature_importance][[google.cloud.automl.v1beta1.TablesModelColumnInfo.feature_importance]
   *          should be populated in the returned
   *
   *   [TablesAnnotation(-s)][[google.cloud.automl.v1beta1.TablesAnnotation].
   *          The default is false.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [PredictResponse]{@link google.cloud.automl.v1beta1.PredictResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [PredictResponse]{@link google.cloud.automl.v1beta1.PredictResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.PredictionServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * const payload = {};
   * const request = {
   *   name: formattedName,
   *   payload: payload,
   * };
   * client.predict(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  predict(request, options, callback) {
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
      name: request.name,
    });

    return this._innerApiCalls.predict(request, options, callback);
  }

  /**
   * Perform a batch prediction. Unlike the online
   * Predict, batch
   * prediction result won't be immediately available in the response. Instead,
   * a long running operation object is returned. User can poll the operation
   * result via GetOperation
   * method. Once the operation is done,
   * BatchPredictResult is
   * returned in the response field.
   * Available for following ML problems:
   * * Image Classification
   * * Image Object Detection
   * * Video Classification
   * * Video Object Tracking * Text Extraction
   * * Tables
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Name of the model requested to serve the batch prediction.
   * @param {Object} request.inputConfig
   *   Required. The input configuration for batch prediction.
   *
   *   This object should have the same structure as [BatchPredictInputConfig]{@link google.cloud.automl.v1beta1.BatchPredictInputConfig}
   * @param {Object} request.outputConfig
   *   Required. The Configuration specifying where output predictions should
   *   be written.
   *
   *   This object should have the same structure as [BatchPredictOutputConfig]{@link google.cloud.automl.v1beta1.BatchPredictOutputConfig}
   * @param {Object.<string, string>} [request.params]
   *   Additional domain-specific parameters for the predictions, any string must
   *   be up to 25000 characters long.
   *
   *   *  For Text Classification:
   *
   *      `score_threshold` - (float) A value from 0.0 to 1.0. When the model
   *           makes predictions for a text snippet, it will only produce results
   *           that have at least this confidence score. The default is 0.5.
   *
   *   *  For Image Classification:
   *
   *      `score_threshold` - (float) A value from 0.0 to 1.0. When the model
   *           makes predictions for an image, it will only produce results that
   *           have at least this confidence score. The default is 0.5.
   *
   *   *  For Image Object Detection:
   *
   *      `score_threshold` - (float) When Model detects objects on the image,
   *          it will only produce bounding boxes which have at least this
   *          confidence score. Value in 0 to 1 range, default is 0.5.
   *      `max_bounding_box_count` - (int64) No more than this number of bounding
   *          boxes will be produced per image. Default is 100, the
   *          requested value may be limited by server.
   *
   *   *  For Video Classification :
   *      `score_threshold` - (float) A value from 0.0 to 1.0. When the model
   *          makes predictions for a video, it will only produce results that
   *          have at least this confidence score. The default is 0.5.
   *      `segment_classification` - (boolean) Set to true to request
   *          segment-level classification. AutoML Video Intelligence returns
   *          labels and their confidence scores for the entire segment of the
   *          video that user specified in the request configuration.
   *          The default is "true".
   *      `shot_classification` - (boolean) Set to true to request shot-level
   *          classification. AutoML Video Intelligence determines the boundaries
   *          for each camera shot in the entire segment of the video that user
   *          specified in the request configuration. AutoML Video Intelligence
   *          then returns labels and their confidence scores for each detected
   *          shot, along with the start and end time of the shot.
   *          WARNING: Model evaluation is not done for this classification type,
   *          the quality of it depends on training data, but there are no metrics
   *          provided to describe that quality. The default is "false".
   *      `1s_interval_classification` - (boolean) Set to true to request
   *          classification for a video at one-second intervals. AutoML Video
   *          Intelligence returns labels and their confidence scores for each
   *          second of the entire segment of the video that user specified in the
   *          request configuration.
   *          WARNING: Model evaluation is not done for this classification
   *          type, the quality of it depends on training data, but there are no
   *          metrics provided to describe that quality. The default is
   *          "false".
   *
   *   *  For Video Object Tracking:
   *      `score_threshold` - (float) When Model detects objects on video frames,
   *          it will only produce bounding boxes which have at least this
   *          confidence score. Value in 0 to 1 range, default is 0.5.
   *      `max_bounding_box_count` - (int64) No more than this number of bounding
   *          boxes will be returned per frame. Default is 100, the requested
   *          value may be limited by server.
   *      `min_bounding_box_size` - (float) Only bounding boxes with shortest edge
   *        at least that long as a relative value of video frame size will be
   *        returned. Value in 0 to 1 range. Default is 0.
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.PredictionServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * const inputConfig = {};
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   inputConfig: inputConfig,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.batchPredict(request)
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
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * const inputConfig = {};
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   inputConfig: inputConfig,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.batchPredict(request)
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
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * const inputConfig = {};
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   inputConfig: inputConfig,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.batchPredict(request);
   *
   * const [response] = await operation.promise();
   */
  batchPredict(request, options, callback) {
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
      name: request.name,
    });

    return this._innerApiCalls.batchPredict(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified model resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} model
   * @returns {String}
   */
  modelPath(project, location, model) {
    return this._pathTemplates.modelPathTemplate.render({
      project: project,
      location: location,
      model: model,
    });
  }

  /**
   * Parse the modelName from a model resource.
   *
   * @param {String} modelName
   *   A fully-qualified path representing a model resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromModelName(modelName) {
    return this._pathTemplates.modelPathTemplate.match(modelName).project;
  }

  /**
   * Parse the modelName from a model resource.
   *
   * @param {String} modelName
   *   A fully-qualified path representing a model resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromModelName(modelName) {
    return this._pathTemplates.modelPathTemplate.match(modelName).location;
  }

  /**
   * Parse the modelName from a model resource.
   *
   * @param {String} modelName
   *   A fully-qualified path representing a model resources.
   * @returns {String} - A string representing the model.
   */
  matchModelFromModelName(modelName) {
    return this._pathTemplates.modelPathTemplate.match(modelName).model;
  }
}

module.exports = PredictionServiceClient;
