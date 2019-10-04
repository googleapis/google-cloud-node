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
 * @memberof v1
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

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.automl.v1.PredictionService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.automl.v1.PredictionService.
    const predictionServiceStub = gaxGrpc.createStub(
      opts.fallback
        ? protos.lookupService('google.cloud.automl.v1.PredictionService')
        : protos.google.cloud.automl.v1.PredictionService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const predictionServiceStubMethods = ['predict'];
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
   * * Translation - TextSnippet, content up to 25,000 characters, UTF-8
   *                 encoded.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Name of the model requested to serve the prediction.
   * @param {Object} request.payload
   *   Required. Payload to perform a prediction on. The payload must match the
   *   problem type that the model was trained to solve.
   *
   *   This object should have the same structure as [ExamplePayload]{@link google.cloud.automl.v1.ExamplePayload}
   * @param {Object.<string, string>} [request.params]
   *   Additional domain-specific parameters, any string must be up to 25000
   *   characters long.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [PredictResponse]{@link google.cloud.automl.v1.PredictResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [PredictResponse]{@link google.cloud.automl.v1.PredictResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('automl.v1');
   *
   * const client = new automl.v1.PredictionServiceClient({
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
