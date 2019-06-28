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

const gapicConfig = require('./profile_service_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * A service that handles profile management, including profile CRUD,
 * enumeration and search.
 *
 * @class
 * @memberof v4beta1
 */
class ProfileServiceClient {
  /**
   * Construct an instance of ProfileServiceClient.
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
      ['google/cloud/talent/v4beta1/profile_service.proto']
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      profilePathTemplate: new gax.PathTemplate(
        'projects/{project}/tenants/{tenant}/profiles/{profile}'
      ),
      tenantPathTemplate: new gax.PathTemplate(
        'projects/{project}/tenants/{tenant}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listProfiles: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'profiles'
      ),
      searchProfiles: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'summarizedProfiles'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.talent.v4beta1.ProfileService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.talent.v4beta1.ProfileService.
    const profileServiceStub = gaxGrpc.createStub(
      protos.google.cloud.talent.v4beta1.ProfileService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const profileServiceStubMethods = [
      'listProfiles',
      'createProfile',
      'getProfile',
      'updateProfile',
      'deleteProfile',
      'searchProfiles',
    ];
    for (const methodName of profileServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        profileServiceStub.then(
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
    return 'jobs.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
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
   * Lists profiles by filter. The order is unspecified.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The resource name of the tenant under which the job is created.
   *
   *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *   "projects/api-test-project/tenants/foo".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [request.readMask]
   *   Optional.
   *
   *   A field mask to specify the profile fields to be listed in response.
   *   All fields are listed if it is unset.
   *
   *   Valid values are:
   *
   *   * name
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Profile]{@link google.cloud.talent.v4beta1.Profile}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListProfilesResponse]{@link google.cloud.talent.v4beta1.ListProfilesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Profile]{@link google.cloud.talent.v4beta1.Profile}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Profile]{@link google.cloud.talent.v4beta1.Profile} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListProfilesResponse]{@link google.cloud.talent.v4beta1.ListProfilesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.ProfileServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.tenantPath('[PROJECT]', '[TENANT]');
   *
   * client.listProfiles({parent: formattedParent})
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
   * const formattedParent = client.tenantPath('[PROJECT]', '[TENANT]');
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
   *     return client.listProfiles(nextRequest, options).then(callback);
   *   }
   * }
   * client.listProfiles({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listProfiles(request, options, callback) {
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

    return this._innerApiCalls.listProfiles(request, options, callback);
  }

  /**
   * Equivalent to {@link listProfiles}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listProfiles} continuously
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
   *   Required.
   *
   *   The resource name of the tenant under which the job is created.
   *
   *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *   "projects/api-test-project/tenants/foo".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [request.readMask]
   *   Optional.
   *
   *   A field mask to specify the profile fields to be listed in response.
   *   All fields are listed if it is unset.
   *
   *   Valid values are:
   *
   *   * name
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Profile]{@link google.cloud.talent.v4beta1.Profile} on 'data' event.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.ProfileServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.tenantPath('[PROJECT]', '[TENANT]');
   * client.listProfilesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listProfilesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listProfiles.createStream(
      this._innerApiCalls.listProfiles,
      request,
      options
    );
  }

  /**
   * Creates and returns a new profile.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The name of the tenant this profile belongs to.
   *
   *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *   "projects/api-test-project/tenants/foo".
   * @param {Object} request.profile
   *   Required.
   *
   *   The profile to be created.
   *
   *   This object should have the same structure as [Profile]{@link google.cloud.talent.v4beta1.Profile}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Profile]{@link google.cloud.talent.v4beta1.Profile}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Profile]{@link google.cloud.talent.v4beta1.Profile}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.ProfileServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.tenantPath('[PROJECT]', '[TENANT]');
   * const profile = {};
   * const request = {
   *   parent: formattedParent,
   *   profile: profile,
   * };
   * client.createProfile(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createProfile(request, options, callback) {
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

    return this._innerApiCalls.createProfile(request, options, callback);
  }

  /**
   * Gets the specified profile.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   Resource name of the profile to get.
   *
   *   The format is
   *   "projects/{project_id}/tenants/{tenant_id}/profiles/{profile_id}",
   *   for example, "projects/api-test-project/tenants/foo/profiles/bar".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Profile]{@link google.cloud.talent.v4beta1.Profile}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Profile]{@link google.cloud.talent.v4beta1.Profile}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.ProfileServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.profilePath('[PROJECT]', '[TENANT]', '[PROFILE]');
   * client.getProfile({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getProfile(request, options, callback) {
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

    return this._innerApiCalls.getProfile(request, options, callback);
  }

  /**
   * Updates the specified profile and returns the updated result.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.profile
   *   Required.
   *
   *   Profile to be updated.
   *
   *   This object should have the same structure as [Profile]{@link google.cloud.talent.v4beta1.Profile}
   * @param {Object} [request.updateMask]
   *   Optional.
   *
   *   A field mask to specify the profile fields to update.
   *
   *   A full update is performed if it is unset.
   *
   *   Valid values are:
   *
   *   * externalId
   *   * source
   *   * uri
   *   * isHirable
   *   * createTime
   *   * updateTime
   *   * resumeHrxml
   *   * personNames
   *   * addresses
   *   * emailAddresses
   *   * phoneNumbers
   *   * personalUris
   *   * additionalContactInfo
   *   * employmentRecords
   *   * educationRecords
   *   * skills
   *   * projects
   *   * publications
   *   * patents
   *   * certifications
   *   * recruitingNotes
   *   * customAttributes
   *   * groupId
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Profile]{@link google.cloud.talent.v4beta1.Profile}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Profile]{@link google.cloud.talent.v4beta1.Profile}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.ProfileServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const profile = {};
   * client.updateProfile({profile: profile})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateProfile(request, options, callback) {
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
      'profile.name': request.profile.name,
    });

    return this._innerApiCalls.updateProfile(request, options, callback);
  }

  /**
   * Deletes the specified profile.
   * Prerequisite: The profile has no associated applications or assignments
   * associated.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   Resource name of the profile to be deleted.
   *
   *   The format is
   *   "projects/{project_id}/tenants/{tenant_id}/profiles/{profile_id}",
   *   for example, "projects/api-test-project/tenants/foo/profiles/bar".
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
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.ProfileServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.profilePath('[PROJECT]', '[TENANT]', '[PROFILE]');
   * client.deleteProfile({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteProfile(request, options, callback) {
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

    return this._innerApiCalls.deleteProfile(request, options, callback);
  }

  /**
   * Searches for profiles within a tenant.
   *
   * For example, search by raw queries "software engineer in Mountain View" or
   * search by structured filters (location filter, education filter, etc.).
   *
   * See
   * SearchProfilesRequest
   * for more information.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The resource name of the tenant to search within.
   *
   *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *   "projects/api-test-project/tenants/foo".
   * @param {Object} request.requestMetadata
   *   Required.
   *
   *   The meta information collected about the profile search user. This is used
   *   to improve the search quality of the service. These values are provided by
   *   users, and must be precise and consistent.
   *
   *   This object should have the same structure as [RequestMetadata]{@link google.cloud.talent.v4beta1.RequestMetadata}
   * @param {Object} [request.profileQuery]
   *   Optional.
   *
   *   Search query to execute. See
   *   ProfileQuery for more details.
   *
   *   This object should have the same structure as [ProfileQuery]{@link google.cloud.talent.v4beta1.ProfileQuery}
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number} [request.offset]
   *   Optional.
   *
   *   An integer that specifies the current offset (that is, starting result) in
   *   search results. This field is only considered if
   *   page_token
   *   is unset.
   *
   *   The maximum allowed value is 5000. Otherwise an error is thrown.
   *
   *   For example, 0 means to search from the first profile, and 10 means to
   *   search from the 11th profile. This can be used for pagination, for example
   *   pageSize = 10 and offset = 10 means to search from the second page.
   * @param {boolean} [request.disableSpellCheck]
   *   Optional.
   *
   *   This flag controls the spell-check feature. If `false`, the
   *   service attempts to correct a misspelled query.
   *
   *   For example, "enginee" is corrected to "engineer".
   * @param {string} [request.orderBy]
   *   Optional.
   *
   *   The criteria that determines how search results are sorted.
   *   Defaults is "relevance desc" if no value is specified.
   *
   *   Supported options are:
   *
   *   * "relevance desc": By descending relevance, as determined by the API
   *      algorithms.
   *   * "update_time desc": Sort by
   *   Profile.update_time in
   *   descending order
   *     (recently updated profiles first).
   *   * "create_time desc": Sort by
   *   Profile.create_time in
   *   descending order
   *     (recently created profiles first).
   *   * "first_name": Sort by
   *   PersonName.PersonStructuredName.given_name
   *   in
   *     ascending order.
   *   * "first_name desc": Sort by
   *   PersonName.PersonStructuredName.given_name
   *     in descending order.
   *   * "last_name": Sort by
   *   PersonName.PersonStructuredName.family_name
   *   in
   *     ascending order.
   *   * "last_name desc": Sort by
   *   PersonName.PersonStructuredName.family_name
   *     in ascending order.
   * @param {boolean} [request.caseSensitiveSort]
   *   Optional.
   *
   *   When sort by field is based on alphabetical order, sort values case
   *   sensitively (based on ASCII) when the value is set to true. Default value
   *   is case in-sensitive sort (false).
   * @param {Object[]} [request.histogramQueries]
   *   Optional.
   *
   *   A list of expressions specifies histogram requests against matching
   *   profiles for
   *   SearchProfilesRequest.
   *
   *   The expression syntax looks like a function definition with optional
   *   parameters.
   *
   *   Function syntax: function_name(histogram_facet[, list of buckets])
   *
   *   Data types:
   *
   *   * Histogram facet: facet names with format [a-zA-Z][a-zA-Z0-9_]+.
   *   * String: string like "any string with backslash escape for quote(\")."
   *   * Number: whole number and floating point number like 10, -1 and -0.01.
   *   * List: list of elements with comma(,) separator surrounded by square
   *   brackets. For example, [1, 2, 3] and ["one", "two", "three"].
   *
   *   Built-in constants:
   *
   *   * MIN (minimum number similar to java Double.MIN_VALUE)
   *   * MAX (maximum number similar to java Double.MAX_VALUE)
   *
   *   Built-in functions:
   *
   *   * bucket(start, end[, label])
   *   Bucket build-in function creates a bucket with range of start, end). Note
   *   that the end is exclusive.
   *   For example, bucket(1, MAX, "positive number") or bucket(1, 10).
   *
   *   Histogram Facets:
   *
   *   * admin1: Admin1 is a global placeholder for referring to state, province,
   *   or the particular term a country uses to define the geographic structure
   *   below the country level. Examples include states codes such as "CA", "IL",
   *   "NY", and provinces, such as "BC".
   *   * locality: Locality is a global placeholder for referring to city, town,
   *   or the particular term a country uses to define the geographic structure
   *   below the admin1 level. Examples include city names such as
   *   "Mountain View" and "New York".
   *   * extended_locality: Extended locality is concatenated version of admin1
   *   and locality with comma separator. For example, "Mountain View, CA" and
   *   "New York, NY".
   *   * postal_code: Postal code of profile which follows locale code.
   *   * country: Country code (ISO-3166-1 alpha-2 code) of profile, such as US,
   *    JP, GB.
   *   * job_title: Normalized job titles specified in EmploymentHistory.
   *   * company_name: Normalized company name of profiles to match on.
   *   * institution: The school name. For example, "MIT",
   *   "University of California, Berkeley"
   *   * degree: Highest education degree in ISCED code. Each value in degree
   *   covers a specific level of education, without any expansion to upper nor
   *   lower levels of education degree.
   *   * experience_in_months: experience in months. 0 means 0 month to 1 month
   *   (exclusive).
   *   * application_date: The application date specifies application start dates.
   *   See
   *   [ApplicationDateFilter
   *   for more details.
   *   * application_outcome_notes: The application outcome reason specifies the
   *   reasons behind the outcome of the job application.
   *   See
   *   ApplicationOutcomeNotesFilter
   *   for more details.
   *   * application_job_title: The application job title specifies the job
   *   applied for in the application.
   *   See
   *   ApplicationJobFilter
   *   for more details.
   *   * hirable_status: Hirable status specifies the profile's hirable status.
   *   * string_custom_attribute: String custom attributes. Values can be accessed
   *   via square bracket notation like string_custom_attribute["key1"].
   *   * numeric_custom_attribute: Numeric custom attributes. Values can be
   *   accessed via square bracket notation like numeric_custom_attribute["key1"].
   *
   *   Example expressions:
   *
   *   * count(admin1)
   *   * count(experience_in_months, [bucket(0, 12, "1 year"),
   *   bucket(12, 36, "1-3 years"), bucket(36, MAX, "3+ years")])
   *   * count(string_custom_attribute["assigned_recruiter"])
   *   * count(numeric_custom_attribute["favorite_number"],
   *   [bucket(MIN, 0, "negative"), bucket(0, MAX, "non-negative")])
   *
   *   This object should have the same structure as [HistogramQuery]{@link google.cloud.talent.v4beta1.HistogramQuery}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [SummarizedProfile]{@link google.cloud.talent.v4beta1.SummarizedProfile}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [SearchProfilesResponse]{@link google.cloud.talent.v4beta1.SearchProfilesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [SummarizedProfile]{@link google.cloud.talent.v4beta1.SummarizedProfile}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [SummarizedProfile]{@link google.cloud.talent.v4beta1.SummarizedProfile} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [SearchProfilesResponse]{@link google.cloud.talent.v4beta1.SearchProfilesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.ProfileServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.tenantPath('[PROJECT]', '[TENANT]');
   * const requestMetadata = {};
   * const request = {
   *   parent: formattedParent,
   *   requestMetadata: requestMetadata,
   * };
   *
   * client.searchProfiles(request)
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
   * const formattedParent = client.tenantPath('[PROJECT]', '[TENANT]');
   * const requestMetadata = {};
   * const request = {
   *   parent: formattedParent,
   *   requestMetadata: requestMetadata,
   * };
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
   *     return client.searchProfiles(nextRequest, options).then(callback);
   *   }
   * }
   * client.searchProfiles(request, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  searchProfiles(request, options, callback) {
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

    return this._innerApiCalls.searchProfiles(request, options, callback);
  }

  /**
   * Equivalent to {@link searchProfiles}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link searchProfiles} continuously
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
   *   Required.
   *
   *   The resource name of the tenant to search within.
   *
   *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *   "projects/api-test-project/tenants/foo".
   * @param {Object} request.requestMetadata
   *   Required.
   *
   *   The meta information collected about the profile search user. This is used
   *   to improve the search quality of the service. These values are provided by
   *   users, and must be precise and consistent.
   *
   *   This object should have the same structure as [RequestMetadata]{@link google.cloud.talent.v4beta1.RequestMetadata}
   * @param {Object} [request.profileQuery]
   *   Optional.
   *
   *   Search query to execute. See
   *   ProfileQuery for more details.
   *
   *   This object should have the same structure as [ProfileQuery]{@link google.cloud.talent.v4beta1.ProfileQuery}
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number} [request.offset]
   *   Optional.
   *
   *   An integer that specifies the current offset (that is, starting result) in
   *   search results. This field is only considered if
   *   page_token
   *   is unset.
   *
   *   The maximum allowed value is 5000. Otherwise an error is thrown.
   *
   *   For example, 0 means to search from the first profile, and 10 means to
   *   search from the 11th profile. This can be used for pagination, for example
   *   pageSize = 10 and offset = 10 means to search from the second page.
   * @param {boolean} [request.disableSpellCheck]
   *   Optional.
   *
   *   This flag controls the spell-check feature. If `false`, the
   *   service attempts to correct a misspelled query.
   *
   *   For example, "enginee" is corrected to "engineer".
   * @param {string} [request.orderBy]
   *   Optional.
   *
   *   The criteria that determines how search results are sorted.
   *   Defaults is "relevance desc" if no value is specified.
   *
   *   Supported options are:
   *
   *   * "relevance desc": By descending relevance, as determined by the API
   *      algorithms.
   *   * "update_time desc": Sort by
   *   Profile.update_time in
   *   descending order
   *     (recently updated profiles first).
   *   * "create_time desc": Sort by
   *   Profile.create_time in
   *   descending order
   *     (recently created profiles first).
   *   * "first_name": Sort by
   *   PersonName.PersonStructuredName.given_name
   *   in
   *     ascending order.
   *   * "first_name desc": Sort by
   *   PersonName.PersonStructuredName.given_name
   *     in descending order.
   *   * "last_name": Sort by
   *   PersonName.PersonStructuredName.family_name
   *   in
   *     ascending order.
   *   * "last_name desc": Sort by
   *   PersonName.PersonStructuredName.family_name
   *     in ascending order.
   * @param {boolean} [request.caseSensitiveSort]
   *   Optional.
   *
   *   When sort by field is based on alphabetical order, sort values case
   *   sensitively (based on ASCII) when the value is set to true. Default value
   *   is case in-sensitive sort (false).
   * @param {Object[]} [request.histogramQueries]
   *   Optional.
   *
   *   A list of expressions specifies histogram requests against matching
   *   profiles for
   *   SearchProfilesRequest.
   *
   *   The expression syntax looks like a function definition with optional
   *   parameters.
   *
   *   Function syntax: function_name(histogram_facet[, list of buckets])
   *
   *   Data types:
   *
   *   * Histogram facet: facet names with format [a-zA-Z][a-zA-Z0-9_]+.
   *   * String: string like "any string with backslash escape for quote(\")."
   *   * Number: whole number and floating point number like 10, -1 and -0.01.
   *   * List: list of elements with comma(,) separator surrounded by square
   *   brackets. For example, [1, 2, 3] and ["one", "two", "three"].
   *
   *   Built-in constants:
   *
   *   * MIN (minimum number similar to java Double.MIN_VALUE)
   *   * MAX (maximum number similar to java Double.MAX_VALUE)
   *
   *   Built-in functions:
   *
   *   * bucket(start, end[, label])
   *   Bucket build-in function creates a bucket with range of start, end). Note
   *   that the end is exclusive.
   *   For example, bucket(1, MAX, "positive number") or bucket(1, 10).
   *
   *   Histogram Facets:
   *
   *   * admin1: Admin1 is a global placeholder for referring to state, province,
   *   or the particular term a country uses to define the geographic structure
   *   below the country level. Examples include states codes such as "CA", "IL",
   *   "NY", and provinces, such as "BC".
   *   * locality: Locality is a global placeholder for referring to city, town,
   *   or the particular term a country uses to define the geographic structure
   *   below the admin1 level. Examples include city names such as
   *   "Mountain View" and "New York".
   *   * extended_locality: Extended locality is concatenated version of admin1
   *   and locality with comma separator. For example, "Mountain View, CA" and
   *   "New York, NY".
   *   * postal_code: Postal code of profile which follows locale code.
   *   * country: Country code (ISO-3166-1 alpha-2 code) of profile, such as US,
   *    JP, GB.
   *   * job_title: Normalized job titles specified in EmploymentHistory.
   *   * company_name: Normalized company name of profiles to match on.
   *   * institution: The school name. For example, "MIT",
   *   "University of California, Berkeley"
   *   * degree: Highest education degree in ISCED code. Each value in degree
   *   covers a specific level of education, without any expansion to upper nor
   *   lower levels of education degree.
   *   * experience_in_months: experience in months. 0 means 0 month to 1 month
   *   (exclusive).
   *   * application_date: The application date specifies application start dates.
   *   See
   *   [ApplicationDateFilter
   *   for more details.
   *   * application_outcome_notes: The application outcome reason specifies the
   *   reasons behind the outcome of the job application.
   *   See
   *   ApplicationOutcomeNotesFilter
   *   for more details.
   *   * application_job_title: The application job title specifies the job
   *   applied for in the application.
   *   See
   *   ApplicationJobFilter
   *   for more details.
   *   * hirable_status: Hirable status specifies the profile's hirable status.
   *   * string_custom_attribute: String custom attributes. Values can be accessed
   *   via square bracket notation like string_custom_attribute["key1"].
   *   * numeric_custom_attribute: Numeric custom attributes. Values can be
   *   accessed via square bracket notation like numeric_custom_attribute["key1"].
   *
   *   Example expressions:
   *
   *   * count(admin1)
   *   * count(experience_in_months, [bucket(0, 12, "1 year"),
   *   bucket(12, 36, "1-3 years"), bucket(36, MAX, "3+ years")])
   *   * count(string_custom_attribute["assigned_recruiter"])
   *   * count(numeric_custom_attribute["favorite_number"],
   *   [bucket(MIN, 0, "negative"), bucket(0, MAX, "non-negative")])
   *
   *   This object should have the same structure as [HistogramQuery]{@link google.cloud.talent.v4beta1.HistogramQuery}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [SummarizedProfile]{@link google.cloud.talent.v4beta1.SummarizedProfile} on 'data' event.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.ProfileServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.tenantPath('[PROJECT]', '[TENANT]');
   * const requestMetadata = {};
   * const request = {
   *   parent: formattedParent,
   *   requestMetadata: requestMetadata,
   * };
   * client.searchProfilesStream(request)
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  searchProfilesStream(request, options) {
    options = options || {};

    return this._descriptors.page.searchProfiles.createStream(
      this._innerApiCalls.searchProfiles,
      request,
      options
    );
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified profile resource name string.
   *
   * @param {String} project
   * @param {String} tenant
   * @param {String} profile
   * @returns {String}
   */
  profilePath(project, tenant, profile) {
    return this._pathTemplates.profilePathTemplate.render({
      project: project,
      tenant: tenant,
      profile: profile,
    });
  }

  /**
   * Return a fully-qualified tenant resource name string.
   *
   * @param {String} project
   * @param {String} tenant
   * @returns {String}
   */
  tenantPath(project, tenant) {
    return this._pathTemplates.tenantPathTemplate.render({
      project: project,
      tenant: tenant,
    });
  }

  /**
   * Parse the profileName from a profile resource.
   *
   * @param {String} profileName
   *   A fully-qualified path representing a profile resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromProfileName(profileName) {
    return this._pathTemplates.profilePathTemplate.match(profileName).project;
  }

  /**
   * Parse the profileName from a profile resource.
   *
   * @param {String} profileName
   *   A fully-qualified path representing a profile resources.
   * @returns {String} - A string representing the tenant.
   */
  matchTenantFromProfileName(profileName) {
    return this._pathTemplates.profilePathTemplate.match(profileName).tenant;
  }

  /**
   * Parse the profileName from a profile resource.
   *
   * @param {String} profileName
   *   A fully-qualified path representing a profile resources.
   * @returns {String} - A string representing the profile.
   */
  matchProfileFromProfileName(profileName) {
    return this._pathTemplates.profilePathTemplate.match(profileName).profile;
  }

  /**
   * Parse the tenantName from a tenant resource.
   *
   * @param {String} tenantName
   *   A fully-qualified path representing a tenant resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromTenantName(tenantName) {
    return this._pathTemplates.tenantPathTemplate.match(tenantName).project;
  }

  /**
   * Parse the tenantName from a tenant resource.
   *
   * @param {String} tenantName
   *   A fully-qualified path representing a tenant resources.
   * @returns {String} - A string representing the tenant.
   */
  matchTenantFromTenantName(tenantName) {
    return this._pathTemplates.tenantPathTemplate.match(tenantName).tenant;
  }
}

module.exports = ProfileServiceClient;
