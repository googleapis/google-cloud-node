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

const gapicConfig = require('./recaptcha_enterprise_service_v1_beta1_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Service to determine the likelihood an event is legitimate.
 *
 * @class
 * @memberof v1beta1
 */
class RecaptchaEnterpriseServiceV1Beta1Client {
  /**
   * Construct an instance of RecaptchaEnterpriseServiceV1Beta1Client.
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
    const protos = gaxGrpc.loadProto(
      path.join(__dirname, '..', '..', 'protos'),
      ['google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto']
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      assessmentPathTemplate: new gax.PathTemplate(
        'projects/{project}/assessments/{assessment}'
      ),
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.
    const recaptchaEnterpriseServiceV1Beta1Stub = gaxGrpc.createStub(
      protos.google.cloud.recaptchaenterprise.v1beta1
        .RecaptchaEnterpriseServiceV1Beta1,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const recaptchaEnterpriseServiceV1Beta1StubMethods = [
      'createAssessment',
      'annotateAssessment',
    ];
    for (const methodName of recaptchaEnterpriseServiceV1Beta1StubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        recaptchaEnterpriseServiceV1Beta1Stub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            },
          err =>
            function() {
              throw err;
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
    return 'recaptchaenterprise.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'recaptchaenterprise.googleapis.com';
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
   * Creates an Assessment of the likelihood an event is legitimate.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the project in which the assessment will be created,
   *   in the format "projects/{project_number}".
   * @param {Object} request.assessment
   *   The asessment details.
   *
   *   This object should have the same structure as [Assessment]{@link google.cloud.recaptchaenterprise.v1beta1.Assessment}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Assessment]{@link google.cloud.recaptchaenterprise.v1beta1.Assessment}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Assessment]{@link google.cloud.recaptchaenterprise.v1beta1.Assessment}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const recaptchaenterprise = require('@google-cloud/recaptchaenterprise');
   *
   * const client = new recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const assessment = {};
   * const request = {
   *   parent: formattedParent,
   *   assessment: assessment,
   * };
   * client.createAssessment(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createAssessment(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.createAssessment(request, options, callback);
  }

  /**
   * Annotates a previously created Assessment to provide additional information
   * on whether the event turned out to be authentic or fradulent.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the Assessment, in the format
   *   "projects/{project_number}/assessments/{assessment_id}".
   * @param {number} request.annotation
   *   The annotation that will be assigned to the Event.
   *
   *   The number should be among the values of [Annotation]{@link google.cloud.recaptchaenterprise.v1beta1.Annotation}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [AnnotateAssessmentResponse]{@link google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [AnnotateAssessmentResponse]{@link google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const recaptchaenterprise = require('@google-cloud/recaptchaenterprise');
   *
   * const client = new recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.assessmentPath('[PROJECT]', '[ASSESSMENT]');
   * const annotation = 'ANNOTATION_UNSPECIFIED';
   * const request = {
   *   name: formattedName,
   *   annotation: annotation,
   * };
   * client.annotateAssessment(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  annotateAssessment(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.annotateAssessment(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified assessment resource name string.
   *
   * @param {String} project
   * @param {String} assessment
   * @returns {String}
   */
  assessmentPath(project, assessment) {
    return this._pathTemplates.assessmentPathTemplate.render({
      project: project,
      assessment: assessment,
    });
  }

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {String} project
   * @returns {String}
   */
  projectPath(project) {
    return this._pathTemplates.projectPathTemplate.render({
      project: project,
    });
  }

  /**
   * Parse the assessmentName from a assessment resource.
   *
   * @param {String} assessmentName
   *   A fully-qualified path representing a assessment resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromAssessmentName(assessmentName) {
    return this._pathTemplates.assessmentPathTemplate.match(assessmentName)
      .project;
  }

  /**
   * Parse the assessmentName from a assessment resource.
   *
   * @param {String} assessmentName
   *   A fully-qualified path representing a assessment resources.
   * @returns {String} - A string representing the assessment.
   */
  matchAssessmentFromAssessmentName(assessmentName) {
    return this._pathTemplates.assessmentPathTemplate.match(assessmentName)
      .assessment;
  }

  /**
   * Parse the projectName from a project resource.
   *
   * @param {String} projectName
   *   A fully-qualified path representing a project resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromProjectName(projectName) {
    return this._pathTemplates.projectPathTemplate.match(projectName).project;
  }
}

module.exports = RecaptchaEnterpriseServiceV1Beta1Client;
