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

const gapicConfig = require('./sessions_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * A session represents an interaction with a user. You retrieve user input
 * and pass it to the DetectIntent (or
 * StreamingDetectIntent) method to determine
 * user intent and respond.
 *
 * @class
 * @memberof v2beta1
 */
class SessionsClient {
  /**
   * Construct an instance of SessionsClient.
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
        'google/cloud/dialogflow/v2beta1/session.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      sessionPathTemplate: new gax.PathTemplate(
        'projects/{project}/agent/sessions/{session}'
      ),
      environmentSessionPathTemplate: new gax.PathTemplate(
        'projects/{project}/agent/environments/{environment}/users/{user}/sessions/{session}'
      ),
    };

    // Some of the methods on this service provide streaming responses.
    // Provide descriptors for these.
    this._descriptors.stream = {
      streamingDetectIntent: new gax.StreamDescriptor(
        gax.StreamType.BIDI_STREAMING
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.dialogflow.v2beta1.Sessions',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.dialogflow.v2beta1.Sessions.
    const sessionsStub = gaxGrpc.createStub(
      protos.google.cloud.dialogflow.v2beta1.Sessions,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const sessionsStubMethods = ['detectIntent', 'streamingDetectIntent'];
    for (const methodName of sessionsStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        sessionsStub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            }
        ),
        defaults[methodName],
        this._descriptors.stream[methodName]
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'dialogflow.googleapis.com';
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
   * Processes a natural language query and returns structured, actionable data
   * as a result. This method is not idempotent, because it may cause contexts
   * and session entity types to be updated, which in turn might affect
   * results of future queries.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.session
   *   Required. The name of the session this query is sent to. Format:
   *   `projects/<Project ID>/agent/sessions/<Session ID>`, or
   *   `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
   *   ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume
   *   default 'draft' environment. If `User ID` is not specified, we are using
   *   "-". It’s up to the API caller to choose an appropriate `Session ID` and
   *   `User Id`. They can be a random numbers or some type of user and session
   *   identifiers (preferably hashed). The length of the `Session ID` and
   *   `User ID` must not exceed 36 characters.
   * @param {Object} request.queryInput
   *   Required. The input specification. It can be set to:
   *
   *   1.  an audio config
   *       which instructs the speech recognizer how to process the speech audio,
   *
   *   2.  a conversational query in the form of text, or
   *
   *   3.  an event that specifies which intent to trigger.
   *
   *   This object should have the same structure as [QueryInput]{@link google.cloud.dialogflow.v2beta1.QueryInput}
   * @param {Object} [request.queryParams]
   *   Optional. The parameters of this query.
   *
   *   This object should have the same structure as [QueryParameters]{@link google.cloud.dialogflow.v2beta1.QueryParameters}
   * @param {Object} [request.outputAudioConfig]
   *   Optional. Instructs the speech synthesizer how to generate the output
   *   audio. If this field is not set and agent-level speech synthesizer is not
   *   configured, no output audio is generated.
   *
   *   This object should have the same structure as [OutputAudioConfig]{@link google.cloud.dialogflow.v2beta1.OutputAudioConfig}
   * @param {string} [request.inputAudio]
   *   Optional. The natural language speech audio to be processed. This field
   *   should be populated iff `query_input` is set to an input audio config.
   *   A single request can contain up to 1 minute of speech audio data.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DetectIntentResponse]{@link google.cloud.dialogflow.v2beta1.DetectIntentResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DetectIntentResponse]{@link google.cloud.dialogflow.v2beta1.DetectIntentResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * const client = new dialogflow.v2beta1.SessionsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedSession = client.sessionPath('[PROJECT]', '[SESSION]');
   * const queryInput = {};
   * const request = {
   *   session: formattedSession,
   *   queryInput: queryInput,
   * };
   * client.detectIntent(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  detectIntent(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.detectIntent(request, options, callback);
  }

  /**
   * Processes a natural language query in audio format in a streaming fashion
   * and returns structured, actionable data as a result. This method is only
   * available via the gRPC API (not REST).
   *
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which is both readable and writable. It accepts objects
   *   representing [StreamingDetectIntentRequest]{@link google.cloud.dialogflow.v2beta1.StreamingDetectIntentRequest} for write() method, and
   *   will emit objects representing [StreamingDetectIntentResponse]{@link google.cloud.dialogflow.v2beta1.StreamingDetectIntentResponse} on 'data' event asynchronously.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2beta1');
   *
   * const client = new dialogflow.v2beta1.SessionsClient({
   *   // optional auth parameters.
   * });
   *
   * const stream = client.streamingDetectIntent().on('data', response => {
   *   // doThingsWith(response)
   * });
   * const session = '';
   * const queryInput = {};
   * const request = {
   *   session: session,
   *   queryInput: queryInput,
   * };
   * // Write request objects.
   * stream.write(request);
   */
  streamingDetectIntent(options) {
    options = options || {};

    return this._innerApiCalls.streamingDetectIntent(options);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified session resource name string.
   *
   * @param {String} project
   * @param {String} session
   * @returns {String}
   */
  sessionPath(project, session) {
    return this._pathTemplates.sessionPathTemplate.render({
      project: project,
      session: session,
    });
  }

  /**
   * Return a fully-qualified environment_session resource name string.
   *
   * @param {String} project
   * @param {String} environment
   * @param {String} user
   * @param {String} session
   * @returns {String}
   */
  environmentSessionPath(project, environment, user, session) {
    return this._pathTemplates.environmentSessionPathTemplate.render({
      project: project,
      environment: environment,
      user: user,
      session: session,
    });
  }

  /**
   * Parse the sessionName from a session resource.
   *
   * @param {String} sessionName
   *   A fully-qualified path representing a session resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromSessionName(sessionName) {
    return this._pathTemplates.sessionPathTemplate.match(sessionName).project;
  }

  /**
   * Parse the sessionName from a session resource.
   *
   * @param {String} sessionName
   *   A fully-qualified path representing a session resources.
   * @returns {String} - A string representing the session.
   */
  matchSessionFromSessionName(sessionName) {
    return this._pathTemplates.sessionPathTemplate.match(sessionName).session;
  }

  /**
   * Parse the environmentSessionName from a environment_session resource.
   *
   * @param {String} environmentSessionName
   *   A fully-qualified path representing a environment_session resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromEnvironmentSessionName(environmentSessionName) {
    return this._pathTemplates.environmentSessionPathTemplate.match(
      environmentSessionName
    ).project;
  }

  /**
   * Parse the environmentSessionName from a environment_session resource.
   *
   * @param {String} environmentSessionName
   *   A fully-qualified path representing a environment_session resources.
   * @returns {String} - A string representing the environment.
   */
  matchEnvironmentFromEnvironmentSessionName(environmentSessionName) {
    return this._pathTemplates.environmentSessionPathTemplate.match(
      environmentSessionName
    ).environment;
  }

  /**
   * Parse the environmentSessionName from a environment_session resource.
   *
   * @param {String} environmentSessionName
   *   A fully-qualified path representing a environment_session resources.
   * @returns {String} - A string representing the user.
   */
  matchUserFromEnvironmentSessionName(environmentSessionName) {
    return this._pathTemplates.environmentSessionPathTemplate.match(
      environmentSessionName
    ).user;
  }

  /**
   * Parse the environmentSessionName from a environment_session resource.
   *
   * @param {String} environmentSessionName
   *   A fully-qualified path representing a environment_session resources.
   * @returns {String} - A string representing the session.
   */
  matchSessionFromEnvironmentSessionName(environmentSessionName) {
    return this._pathTemplates.environmentSessionPathTemplate.match(
      environmentSessionName
    ).session;
  }
}

module.exports = SessionsClient;
