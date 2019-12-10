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
      assessmentPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/assessments/{assessment}'
      ),
      keyPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/keys/{key}'
      ),
      projectPathTemplate: new gaxModule.PathTemplate('projects/{project}'),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listKeys: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'keys'
      ),
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
      opts.fallback
        ? protos.lookupService(
            'google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1'
          )
        : protos.google.cloud.recaptchaenterprise.v1beta1
            .RecaptchaEnterpriseServiceV1Beta1,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const recaptchaEnterpriseServiceV1Beta1StubMethods = [
      'createAssessment',
      'annotateAssessment',
      'createKey',
      'listKeys',
      'getKey',
      'updateKey',
      'deleteKey',
    ];
    for (const methodName of recaptchaEnterpriseServiceV1Beta1StubMethods) {
      const innerCallPromise = recaptchaEnterpriseServiceV1Beta1Stub.then(
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
        this._descriptors.page[methodName]
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
   *   Required. The assessment details.
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
    request = request || {};
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
   *   Required. The annotation that will be assigned to the Event.
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
    request = request || {};
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

  /**
   * Creates a new reCAPTCHA Enterprise key.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the project in which the key will be created, in the
   *   format "projects/{project_number}".
   * @param {Object} request.key
   *   Required. Information to create a reCAPTCHA Enterprise key.
   *
   *   This object should have the same structure as [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key}.
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
   * const key = {};
   * const request = {
   *   parent: formattedParent,
   *   key: key,
   * };
   * client.createKey(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createKey(request, options, callback) {
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

    return this._innerApiCalls.createKey(request, options, callback);
  }

  /**
   * Returns the list of all keys that belong to a project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the project that contains the keys that will be
   *   listed, in the format "projects/{project_number}".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListKeysResponse]{@link google.cloud.recaptchaenterprise.v1beta1.ListKeysResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListKeysResponse]{@link google.cloud.recaptchaenterprise.v1beta1.ListKeysResponse}.
   *
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
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * client.listKeys({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resource)
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (const resource of resources) {
   *     // doThingsWith(resource);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listKeys(nextRequest, options).then(callback);
   *   }
   * }
   * client.listKeys({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listKeys(request, options, callback) {
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

    return this._innerApiCalls.listKeys(request, options, callback);
  }

  /**
   * Equivalent to {@link listKeys}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listKeys} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the project that contains the keys that will be
   *   listed, in the format "projects/{project_number}".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key} on 'data' event.
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
   * client.listKeysStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listKeysStream(request, options) {
    options = options || {};

    return this._descriptors.page.listKeys.createStream(
      this._innerApiCalls.listKeys,
      request,
      options
    );
  }

  /**
   * Returns the specified key.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the requested key, in the format
   *   "projects/{project_number}/keys/{key_id}".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key}.
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
   * const formattedName = client.keyPath('[PROJECT]', '[KEY]');
   * client.getKey({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getKey(request, options, callback) {
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

    return this._innerApiCalls.getKey(request, options, callback);
  }

  /**
   * Updates the specified key.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.key
   *   Required. The key to update.
   *
   *   This object should have the same structure as [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key}
   * @param {Object} [request.updateMask]
   *   Optional. The mask to control which field of the key get updated. If the mask is not
   *   present, all fields will be updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key}.
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
   * const key = {};
   * client.updateKey({key: key})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateKey(request, options, callback) {
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
      'key.name': request.key.name,
    });

    return this._innerApiCalls.updateKey(request, options, callback);
  }

  /**
   * Deletes the specified key.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the key to be deleted, in the format
   *   "projects/{project_number}/keys/{key_id}".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
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
   * const formattedName = client.keyPath('[PROJECT]', '[KEY]');
   * client.deleteKey({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteKey(request, options, callback) {
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

    return this._innerApiCalls.deleteKey(request, options, callback);
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
   * Return a fully-qualified key resource name string.
   *
   * @param {String} project
   * @param {String} key
   * @returns {String}
   */
  keyPath(project, key) {
    return this._pathTemplates.keyPathTemplate.render({
      project: project,
      key: key,
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
   * Parse the keyName from a key resource.
   *
   * @param {String} keyName
   *   A fully-qualified path representing a key resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromKeyName(keyName) {
    return this._pathTemplates.keyPathTemplate.match(keyName).project;
  }

  /**
   * Parse the keyName from a key resource.
   *
   * @param {String} keyName
   *   A fully-qualified path representing a key resources.
   * @returns {String} - A string representing the key.
   */
  matchKeyFromKeyName(keyName) {
    return this._pathTemplates.keyPathTemplate.match(keyName).key;
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
