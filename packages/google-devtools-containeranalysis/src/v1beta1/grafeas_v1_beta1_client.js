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

const gapicConfig = require('./grafeas_v1_beta1_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * [Grafeas](https://grafeas.io) API.
 *
 * Retrieves analysis results of Cloud components such as Docker container
 * images.
 *
 * Analysis results are stored as a series of occurrences. An `Occurrence`
 * contains information about a specific analysis instance on a resource. An
 * occurrence refers to a `Note`. A note contains details describing the
 * analysis and is generally stored in a separate project, called a `Provider`.
 * Multiple occurrences can refer to the same note.
 *
 * For example, an SSL vulnerability could affect multiple images. In this case,
 * there would be one note for the vulnerability and an occurrence for each
 * image with the vulnerability referring to that note.
 *
 * @class
 * @memberof v1beta1
 */
class GrafeasV1Beta1Client {
  /**
   * Construct an instance of GrafeasV1Beta1Client.
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
      ['google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto']
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      notePathTemplate: new gax.PathTemplate('projects/{project}/notes/{note}'),
      occurrencePathTemplate: new gax.PathTemplate(
        'projects/{project}/occurrences/{occurrence}'
      ),
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listOccurrences: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'occurrences'
      ),
      listNotes: new gax.PageDescriptor('pageToken', 'nextPageToken', 'notes'),
      listNoteOccurrences: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'occurrences'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'grafeas.v1beta1.GrafeasV1Beta1',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // grafeas.v1beta1.GrafeasV1Beta1.
    const grafeasV1Beta1Stub = gaxGrpc.createStub(
      protos.grafeas.v1beta1.GrafeasV1Beta1,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const grafeasV1Beta1StubMethods = [
      'getOccurrence',
      'listOccurrences',
      'deleteOccurrence',
      'createOccurrence',
      'batchCreateOccurrences',
      'updateOccurrence',
      'getOccurrenceNote',
      'getNote',
      'listNotes',
      'deleteNote',
      'createNote',
      'batchCreateNotes',
      'updateNote',
      'listNoteOccurrences',
      'getVulnerabilityOccurrencesSummary',
    ];
    for (const methodName of grafeasV1Beta1StubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        grafeasV1Beta1Stub.then(
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
        this._descriptors.page[methodName]
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'containeranalysis.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'containeranalysis.googleapis.com';
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
   * Gets the specified occurrence.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the occurrence in the form of
   *   `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Occurrence]{@link grafeas.v1beta1.Occurrence}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Occurrence]{@link grafeas.v1beta1.Occurrence}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.occurrencePath('[PROJECT]', '[OCCURRENCE]');
   * client.getOccurrence({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getOccurrence(request, options, callback) {
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

    return this._innerApiCalls.getOccurrence(request, options, callback);
  }

  /**
   * Lists occurrences for the specified project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The name of the project to list occurrences for in the form of
   *   `projects/[PROJECT_ID]`.
   * @param {string} [request.filter]
   *   The filter expression.
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
   *   The second parameter to the callback is Array of [Occurrence]{@link grafeas.v1beta1.Occurrence}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListOccurrencesResponse]{@link grafeas.v1beta1.ListOccurrencesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Occurrence]{@link grafeas.v1beta1.Occurrence}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Occurrence]{@link grafeas.v1beta1.Occurrence} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListOccurrencesResponse]{@link grafeas.v1beta1.ListOccurrencesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * client.listOccurrences({parent: formattedParent})
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
   *     return client.listOccurrences(nextRequest, options).then(callback);
   *   }
   * }
   * client.listOccurrences({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listOccurrences(request, options, callback) {
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

    return this._innerApiCalls.listOccurrences(request, options, callback);
  }

  /**
   * Equivalent to {@link listOccurrences}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listOccurrences} continuously
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
   *   The name of the project to list occurrences for in the form of
   *   `projects/[PROJECT_ID]`.
   * @param {string} [request.filter]
   *   The filter expression.
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
   *   An object stream which emits an object representing [Occurrence]{@link grafeas.v1beta1.Occurrence} on 'data' event.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.listOccurrencesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listOccurrencesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listOccurrences.createStream(
      this._innerApiCalls.listOccurrences,
      request,
      options
    );
  }

  /**
   * Deletes the specified occurrence. For example, use this method to delete an
   * occurrence when the occurrence is no longer applicable for the given
   * resource.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the occurrence in the form of
   *   `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
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
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.occurrencePath('[PROJECT]', '[OCCURRENCE]');
   * client.deleteOccurrence({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteOccurrence(request, options, callback) {
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

    return this._innerApiCalls.deleteOccurrence(request, options, callback);
  }

  /**
   * Creates a new occurrence.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The name of the project in the form of `projects/[PROJECT_ID]`, under which
   *   the occurrence is to be created.
   * @param {Object} request.occurrence
   *   The occurrence to create.
   *
   *   This object should have the same structure as [Occurrence]{@link grafeas.v1beta1.Occurrence}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Occurrence]{@link grafeas.v1beta1.Occurrence}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Occurrence]{@link grafeas.v1beta1.Occurrence}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const occurrence = {};
   * const request = {
   *   parent: formattedParent,
   *   occurrence: occurrence,
   * };
   * client.createOccurrence(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createOccurrence(request, options, callback) {
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

    return this._innerApiCalls.createOccurrence(request, options, callback);
  }

  /**
   * Creates new occurrences in batch.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The name of the project in the form of `projects/[PROJECT_ID]`, under which
   *   the occurrences are to be created.
   * @param {Object[]} request.occurrences
   *   The occurrences to create.
   *
   *   This object should have the same structure as [Occurrence]{@link grafeas.v1beta1.Occurrence}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [BatchCreateOccurrencesResponse]{@link grafeas.v1beta1.BatchCreateOccurrencesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [BatchCreateOccurrencesResponse]{@link grafeas.v1beta1.BatchCreateOccurrencesResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const occurrences = [];
   * const request = {
   *   parent: formattedParent,
   *   occurrences: occurrences,
   * };
   * client.batchCreateOccurrences(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  batchCreateOccurrences(request, options, callback) {
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

    return this._innerApiCalls.batchCreateOccurrences(
      request,
      options,
      callback
    );
  }

  /**
   * Updates the specified occurrence.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the occurrence in the form of
   *   `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
   * @param {Object} request.occurrence
   *   The updated occurrence.
   *
   *   This object should have the same structure as [Occurrence]{@link grafeas.v1beta1.Occurrence}
   * @param {Object} [request.updateMask]
   *   The fields to update.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Occurrence]{@link grafeas.v1beta1.Occurrence}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Occurrence]{@link grafeas.v1beta1.Occurrence}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.occurrencePath('[PROJECT]', '[OCCURRENCE]');
   * const occurrence = {};
   * const request = {
   *   name: formattedName,
   *   occurrence: occurrence,
   * };
   * client.updateOccurrence(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateOccurrence(request, options, callback) {
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

    return this._innerApiCalls.updateOccurrence(request, options, callback);
  }

  /**
   * Gets the note attached to the specified occurrence. Consumer projects can
   * use this method to get a note that belongs to a provider project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the occurrence in the form of
   *   `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Note]{@link grafeas.v1beta1.Note}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Note]{@link grafeas.v1beta1.Note}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.occurrencePath('[PROJECT]', '[OCCURRENCE]');
   * client.getOccurrenceNote({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getOccurrenceNote(request, options, callback) {
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

    return this._innerApiCalls.getOccurrenceNote(request, options, callback);
  }

  /**
   * Gets the specified note.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the note in the form of
   *   `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Note]{@link grafeas.v1beta1.Note}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Note]{@link grafeas.v1beta1.Note}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.notePath('[PROJECT]', '[NOTE]');
   * client.getNote({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getNote(request, options, callback) {
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

    return this._innerApiCalls.getNote(request, options, callback);
  }

  /**
   * Lists notes for the specified project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The name of the project to list notes for in the form of
   *   `projects/[PROJECT_ID]`.
   * @param {string} [request.filter]
   *   The filter expression.
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
   *   The second parameter to the callback is Array of [Note]{@link grafeas.v1beta1.Note}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListNotesResponse]{@link grafeas.v1beta1.ListNotesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Note]{@link grafeas.v1beta1.Note}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Note]{@link grafeas.v1beta1.Note} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListNotesResponse]{@link grafeas.v1beta1.ListNotesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * client.listNotes({parent: formattedParent})
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
   *     return client.listNotes(nextRequest, options).then(callback);
   *   }
   * }
   * client.listNotes({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listNotes(request, options, callback) {
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

    return this._innerApiCalls.listNotes(request, options, callback);
  }

  /**
   * Equivalent to {@link listNotes}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listNotes} continuously
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
   *   The name of the project to list notes for in the form of
   *   `projects/[PROJECT_ID]`.
   * @param {string} [request.filter]
   *   The filter expression.
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
   *   An object stream which emits an object representing [Note]{@link grafeas.v1beta1.Note} on 'data' event.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.listNotesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listNotesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listNotes.createStream(
      this._innerApiCalls.listNotes,
      request,
      options
    );
  }

  /**
   * Deletes the specified note.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the note in the form of
   *   `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
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
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.notePath('[PROJECT]', '[NOTE]');
   * client.deleteNote({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteNote(request, options, callback) {
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

    return this._innerApiCalls.deleteNote(request, options, callback);
  }

  /**
   * Creates a new note.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The name of the project in the form of `projects/[PROJECT_ID]`, under which
   *   the note is to be created.
   * @param {string} request.noteId
   *   The ID to use for this note.
   * @param {Object} request.note
   *   The note to create.
   *
   *   This object should have the same structure as [Note]{@link grafeas.v1beta1.Note}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Note]{@link grafeas.v1beta1.Note}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Note]{@link grafeas.v1beta1.Note}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const noteId = '';
   * const note = {};
   * const request = {
   *   parent: formattedParent,
   *   noteId: noteId,
   *   note: note,
   * };
   * client.createNote(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createNote(request, options, callback) {
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

    return this._innerApiCalls.createNote(request, options, callback);
  }

  /**
   * Creates new notes in batch.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The name of the project in the form of `projects/[PROJECT_ID]`, under which
   *   the notes are to be created.
   * @param {Object.<string, Object>} request.notes
   *   The notes to create.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [BatchCreateNotesResponse]{@link grafeas.v1beta1.BatchCreateNotesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [BatchCreateNotesResponse]{@link grafeas.v1beta1.BatchCreateNotesResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const notes = {};
   * const request = {
   *   parent: formattedParent,
   *   notes: notes,
   * };
   * client.batchCreateNotes(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  batchCreateNotes(request, options, callback) {
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

    return this._innerApiCalls.batchCreateNotes(request, options, callback);
  }

  /**
   * Updates the specified note.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the note in the form of
   *   `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
   * @param {Object} request.note
   *   The updated note.
   *
   *   This object should have the same structure as [Note]{@link grafeas.v1beta1.Note}
   * @param {Object} [request.updateMask]
   *   The fields to update.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Note]{@link grafeas.v1beta1.Note}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Note]{@link grafeas.v1beta1.Note}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.notePath('[PROJECT]', '[NOTE]');
   * const note = {};
   * const request = {
   *   name: formattedName,
   *   note: note,
   * };
   * client.updateNote(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateNote(request, options, callback) {
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

    return this._innerApiCalls.updateNote(request, options, callback);
  }

  /**
   * Lists occurrences referencing the specified note. Provider projects can use
   * this method to get all occurrences across consumer projects referencing the
   * specified note.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the note to list occurrences for in the form of
   *   `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
   * @param {string} [request.filter]
   *   The filter expression.
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
   *   The second parameter to the callback is Array of [Occurrence]{@link grafeas.v1beta1.Occurrence}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListNoteOccurrencesResponse]{@link grafeas.v1beta1.ListNoteOccurrencesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Occurrence]{@link grafeas.v1beta1.Occurrence}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Occurrence]{@link grafeas.v1beta1.Occurrence} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListNoteOccurrencesResponse]{@link grafeas.v1beta1.ListNoteOccurrencesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedName = client.notePath('[PROJECT]', '[NOTE]');
   *
   * client.listNoteOccurrences({name: formattedName})
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
   * const formattedName = client.notePath('[PROJECT]', '[NOTE]');
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
   *     return client.listNoteOccurrences(nextRequest, options).then(callback);
   *   }
   * }
   * client.listNoteOccurrences({name: formattedName}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listNoteOccurrences(request, options, callback) {
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

    return this._innerApiCalls.listNoteOccurrences(request, options, callback);
  }

  /**
   * Equivalent to {@link listNoteOccurrences}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listNoteOccurrences} continuously
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
   * @param {string} request.name
   *   The name of the note to list occurrences for in the form of
   *   `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
   * @param {string} [request.filter]
   *   The filter expression.
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
   *   An object stream which emits an object representing [Occurrence]{@link grafeas.v1beta1.Occurrence} on 'data' event.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.notePath('[PROJECT]', '[NOTE]');
   * client.listNoteOccurrencesStream({name: formattedName})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listNoteOccurrencesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listNoteOccurrences.createStream(
      this._innerApiCalls.listNoteOccurrences,
      request,
      options
    );
  }

  /**
   * Gets a summary of the number and severity of occurrences.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The name of the project to get a vulnerability summary for in the form of
   *   `projects/[PROJECT_ID]`.
   * @param {string} [request.filter]
   *   The filter expression.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [VulnerabilityOccurrencesSummary]{@link grafeas.v1beta1.VulnerabilityOccurrencesSummary}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [VulnerabilityOccurrencesSummary]{@link grafeas.v1beta1.VulnerabilityOccurrencesSummary}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const containeranalysis = require('@google-cloud/containeranalysis');
   *
   * const client = new containeranalysis.v1beta1.GrafeasV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.getVulnerabilityOccurrencesSummary({parent: formattedParent})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getVulnerabilityOccurrencesSummary(request, options, callback) {
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

    return this._innerApiCalls.getVulnerabilityOccurrencesSummary(
      request,
      options,
      callback
    );
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified note resource name string.
   *
   * @param {String} project
   * @param {String} note
   * @returns {String}
   */
  notePath(project, note) {
    return this._pathTemplates.notePathTemplate.render({
      project: project,
      note: note,
    });
  }

  /**
   * Return a fully-qualified occurrence resource name string.
   *
   * @param {String} project
   * @param {String} occurrence
   * @returns {String}
   */
  occurrencePath(project, occurrence) {
    return this._pathTemplates.occurrencePathTemplate.render({
      project: project,
      occurrence: occurrence,
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
   * Parse the noteName from a note resource.
   *
   * @param {String} noteName
   *   A fully-qualified path representing a note resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromNoteName(noteName) {
    return this._pathTemplates.notePathTemplate.match(noteName).project;
  }

  /**
   * Parse the noteName from a note resource.
   *
   * @param {String} noteName
   *   A fully-qualified path representing a note resources.
   * @returns {String} - A string representing the note.
   */
  matchNoteFromNoteName(noteName) {
    return this._pathTemplates.notePathTemplate.match(noteName).note;
  }

  /**
   * Parse the occurrenceName from a occurrence resource.
   *
   * @param {String} occurrenceName
   *   A fully-qualified path representing a occurrence resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromOccurrenceName(occurrenceName) {
    return this._pathTemplates.occurrencePathTemplate.match(occurrenceName)
      .project;
  }

  /**
   * Parse the occurrenceName from a occurrence resource.
   *
   * @param {String} occurrenceName
   *   A fully-qualified path representing a occurrence resources.
   * @returns {String} - A string representing the occurrence.
   */
  matchOccurrenceFromOccurrenceName(occurrenceName) {
    return this._pathTemplates.occurrencePathTemplate.match(occurrenceName)
      .occurrence;
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

module.exports = GrafeasV1Beta1Client;
