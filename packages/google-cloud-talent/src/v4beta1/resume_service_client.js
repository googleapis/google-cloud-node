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

const gapicConfig = require('./resume_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * A service that handles resume parsing.
 *
 * @class
 * @memberof v4beta1
 */
class ResumeServiceClient {
  /**
   * Construct an instance of ResumeServiceClient.
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
        'google/cloud/talent/v4beta1/resume_service.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.talent.v4beta1.ResumeService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.talent.v4beta1.ResumeService.
    const resumeServiceStub = gaxGrpc.createStub(
      protos.google.cloud.talent.v4beta1.ResumeService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const resumeServiceStubMethods = ['parseResume'];
    for (const methodName of resumeServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        resumeServiceStub.then(
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
    return 'jobs.googleapis.com';
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
      'https://www.googleapis.com/auth/jobs',
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
   * Parses a resume into a Profile. The
   * API attempts to fill out the following profile fields if present within the
   * resume:
   *
   * * personNames
   * * addresses
   * * emailAddress
   * * phoneNumbers
   * * personalUris
   * * employmentRecords
   * * educationRecords
   * * skills
   *
   * Note that some attributes in these fields may not be populated if they're
   * not present within the resume or unrecognizable by the resume parser.
   *
   * This API does not save the resume or profile. To create a profile from this
   * resume, clients need to call the CreateProfile method again with the
   * profile returned.
   *
   * The following list of formats are supported:
   *
   * * PDF
   * * TXT
   * * DOC
   * * RTF
   * * DOCX
   * * PNG (only when ParseResumeRequest.enable_ocr is set to `true`,
   * otherwise an error is thrown)
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The resource name of the project.
   *
   *   The format is "projects/{project_id}", for example,
   *   "projects/api-test-project".
   * @param {string} request.resume
   *   Required.
   *
   *   The bytes of the resume file in common format, for example, PDF, TXT.
   *   UTF-8 encoding is required if the resume is text-based, otherwise an error
   *   is thrown.
   * @param {string} [request.regionCode]
   *   Optional.
   *
   *   The region code indicating where the resume is from. Values
   *   are as per the ISO-3166-2 format. For example, US, FR, DE.
   *
   *   This value is optional, but providing this value improves the resume
   *   parsing quality and performance.
   *
   *   An error is thrown if the regionCode is invalid.
   * @param {string} [request.languageCode]
   *   Optional.
   *
   *   The language code of contents in the resume.
   *
   *   Language codes must be in BCP-47 format, such as "en-US" or "sr-Latn".
   *   For more information, see
   *   [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47){:
   *   class="external" target="_blank" }.
   * @param {Object} [request.options]
   *   Optional.
   *
   *   Options that change how the resume parse is performed.
   *
   *   This object should have the same structure as [ParseResumeOptions]{@link google.cloud.talent.v4beta1.ParseResumeOptions}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ParseResumeResponse]{@link google.cloud.talent.v4beta1.ParseResumeResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ParseResumeResponse]{@link google.cloud.talent.v4beta1.ParseResumeResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.ResumeServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const resume = '';
   * const request = {
   *   parent: formattedParent,
   *   resume: resume,
   * };
   * client.parseResume(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  parseResume(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.parseResume(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

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

module.exports = ResumeServiceClient;
