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

const gapicConfig = require('./prediction_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * AutoML Prediction API.
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
    var gaxGrpc = gax.grpc(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    var clientHeader = [
      `gl-node/${process.version}`,
      `grpc/${gaxGrpc.grpcVersion}`,
      `gax/${gax.version}`,
      `gapic/${VERSION}`,
    ];
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    var protos = merge(
      {},
      gaxGrpc.loadProto(
        path.join(__dirname, '..', '..', 'protos'),
        'google/cloud/automl/v1beta1/prediction_service.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      modelPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/models/{model}'
      ),
    };

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
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
    var predictionServiceStub = gaxGrpc.createStub(
      protos.google.cloud.automl.v1beta1.PredictionService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var predictionServiceStubMethods = ['predict'];
    for (let methodName of predictionServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        predictionServiceStub.then(
          stub =>
            function() {
              var args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            }
        ),
        defaults[methodName],
        null
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
   * Perform a prediction.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Name of the model requested to serve the prediction.
   * @param {Object} request.payload
   *   Required.
   *   Payload to perform a prediction on. The payload must match the
   *   problem type that the model was trained to solve.
   *
   *   This object should have the same structure as [ExamplePayload]{@link google.cloud.automl.v1beta1.ExamplePayload}
   * @param {Object.<string, string>} [request.params]
   *   Additional domain-specific parameters, any string must be up to 25000
   *   characters long.
   *
   *   *  For Translation:
   *
   *      `translation_allow_fallback` - If specified, AutoML will fallback to
   *      use a Google translation model for translation requests if the
   *      the specified AutoML translation model cannot serve the request.
   *      The PredictResponse.metadata field provides additional data to the
   *      caller.
   *
   *   *  For Image Classification:
   *
   *      `score_threshold` - (float) A value from 0.0 to 1.0. When the model
   *       makes predictions for an
   *       image, it will only produce results that have at least this confidence
   *       score threshold. The default is 0.5.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
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
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.PredictionServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * var payload = {};
   * var request = {
   *   name: formattedName,
   *   payload: payload,
   * };
   * client.predict(request)
   *   .then(responses => {
   *     var response = responses[0];
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
    options = options || {};

    return this._innerApiCalls.predict(request, options, callback);
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
