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

const gapicConfig = require('./application_service_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * A service that handles application management, including CRUD and
 * enumeration.
 *
 * @class
 * @memberof v4beta1
 */
class ApplicationServiceClient {
  /**
   * Construct an instance of ApplicationServiceClient.
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
      applicationPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}/profiles/{profile}/applications/{application}'
      ),
      profilePathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}/profiles/{profile}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listApplications: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'applications'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.talent.v4beta1.ApplicationService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.talent.v4beta1.ApplicationService.
    const applicationServiceStub = gaxGrpc.createStub(
      opts.fallback
        ? protos.lookupService('google.cloud.talent.v4beta1.ApplicationService')
        : protos.google.cloud.talent.v4beta1.ApplicationService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const applicationServiceStubMethods = [
      'createApplication',
      'getApplication',
      'updateApplication',
      'deleteApplication',
      'listApplications',
    ];
    for (const methodName of applicationServiceStubMethods) {
      const innerCallPromise = applicationServiceStub.then(
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
   * Creates a new application entity.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of the profile under which the application is
   *   created.
   *
   *   The format is
   *   "projects/{project_id}/tenants/{tenant_id}/profiles/{profile_id}", for
   *   example, "projects/test-project/tenants/test-tenant/profiles/test-profile".
   * @param {Object} request.application
   *   Required. The application to be created.
   *
   *   This object should have the same structure as [Application]{@link google.cloud.talent.v4beta1.Application}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Application]{@link google.cloud.talent.v4beta1.Application}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Application]{@link google.cloud.talent.v4beta1.Application}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.ApplicationServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.profilePath('[PROJECT]', '[TENANT]', '[PROFILE]');
   * const application = {};
   * const request = {
   *   parent: formattedParent,
   *   application: application,
   * };
   * client.createApplication(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createApplication(request, options, callback) {
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

    return this._innerApiCalls.createApplication(request, options, callback);
  }

  /**
   * Retrieves specified application.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the application to be retrieved.
   *
   *   The format is
   *   "projects/{project_id}/tenants/{tenant_id}/profiles/{profile_id}/applications/{application_id}",
   *   for example,
   *   "projects/test-project/tenants/test-tenant/profiles/test-profile/applications/test-application".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Application]{@link google.cloud.talent.v4beta1.Application}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Application]{@link google.cloud.talent.v4beta1.Application}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.ApplicationServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.applicationPath('[PROJECT]', '[TENANT]', '[PROFILE]', '[APPLICATION]');
   * client.getApplication({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getApplication(request, options, callback) {
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

    return this._innerApiCalls.getApplication(request, options, callback);
  }

  /**
   * Updates specified application.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.application
   *   Required. The application resource to replace the current resource in the
   *   system.
   *
   *   This object should have the same structure as [Application]{@link google.cloud.talent.v4beta1.Application}
   * @param {Object} [request.updateMask]
   *   Optional but strongly recommended for the best service
   *   experience.
   *
   *   If
   *   update_mask
   *   is provided, only the specified fields in
   *   application
   *   are updated. Otherwise all the fields are updated.
   *
   *   A field mask to specify the application fields to be updated. Only
   *   top level fields of Application
   *   are supported.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Application]{@link google.cloud.talent.v4beta1.Application}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Application]{@link google.cloud.talent.v4beta1.Application}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.ApplicationServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const application = {};
   * client.updateApplication({application: application})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateApplication(request, options, callback) {
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
      'application.name': request.application.name,
    });

    return this._innerApiCalls.updateApplication(request, options, callback);
  }

  /**
   * Deletes specified application.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the application to be deleted.
   *
   *   The format is
   *   "projects/{project_id}/tenants/{tenant_id}/profiles/{profile_id}/applications/{application_id}",
   *   for example,
   *   "projects/test-project/tenants/test-tenant/profiles/test-profile/applications/test-application".
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
   * const client = new talent.v4beta1.ApplicationServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.applicationPath('[PROJECT]', '[TENANT]', '[PROFILE]', '[APPLICATION]');
   * client.deleteApplication({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteApplication(request, options, callback) {
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

    return this._innerApiCalls.deleteApplication(request, options, callback);
  }

  /**
   * Lists all applications associated with the profile.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of the profile under which the application is
   *   created.
   *
   *   The format is
   *   "projects/{project_id}/tenants/{tenant_id}/profiles/{profile_id}", for
   *   example, "projects/test-project/tenants/test-tenant/profiles/test-profile".
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
   *   The second parameter to the callback is Array of [Application]{@link google.cloud.talent.v4beta1.Application}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListApplicationsResponse]{@link google.cloud.talent.v4beta1.ListApplicationsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Application]{@link google.cloud.talent.v4beta1.Application}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Application]{@link google.cloud.talent.v4beta1.Application} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListApplicationsResponse]{@link google.cloud.talent.v4beta1.ListApplicationsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.ApplicationServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.profilePath('[PROJECT]', '[TENANT]', '[PROFILE]');
   *
   * client.listApplications({parent: formattedParent})
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
   * const formattedParent = client.profilePath('[PROJECT]', '[TENANT]', '[PROFILE]');
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
   *     return client.listApplications(nextRequest, options).then(callback);
   *   }
   * }
   * client.listApplications({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listApplications(request, options, callback) {
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

    return this._innerApiCalls.listApplications(request, options, callback);
  }

  /**
   * Equivalent to {@link listApplications}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listApplications} continuously
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
   *   Required. Resource name of the profile under which the application is
   *   created.
   *
   *   The format is
   *   "projects/{project_id}/tenants/{tenant_id}/profiles/{profile_id}", for
   *   example, "projects/test-project/tenants/test-tenant/profiles/test-profile".
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
   *   An object stream which emits an object representing [Application]{@link google.cloud.talent.v4beta1.Application} on 'data' event.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.ApplicationServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.profilePath('[PROJECT]', '[TENANT]', '[PROFILE]');
   * client.listApplicationsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listApplicationsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listApplications.createStream(
      this._innerApiCalls.listApplications,
      request,
      options
    );
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified application resource name string.
   *
   * @param {String} project
   * @param {String} tenant
   * @param {String} profile
   * @param {String} application
   * @returns {String}
   */
  applicationPath(project, tenant, profile, application) {
    return this._pathTemplates.applicationPathTemplate.render({
      project: project,
      tenant: tenant,
      profile: profile,
      application: application,
    });
  }

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
   * Parse the applicationName from a application resource.
   *
   * @param {String} applicationName
   *   A fully-qualified path representing a application resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromApplicationName(applicationName) {
    return this._pathTemplates.applicationPathTemplate.match(applicationName)
      .project;
  }

  /**
   * Parse the applicationName from a application resource.
   *
   * @param {String} applicationName
   *   A fully-qualified path representing a application resources.
   * @returns {String} - A string representing the tenant.
   */
  matchTenantFromApplicationName(applicationName) {
    return this._pathTemplates.applicationPathTemplate.match(applicationName)
      .tenant;
  }

  /**
   * Parse the applicationName from a application resource.
   *
   * @param {String} applicationName
   *   A fully-qualified path representing a application resources.
   * @returns {String} - A string representing the profile.
   */
  matchProfileFromApplicationName(applicationName) {
    return this._pathTemplates.applicationPathTemplate.match(applicationName)
      .profile;
  }

  /**
   * Parse the applicationName from a application resource.
   *
   * @param {String} applicationName
   *   A fully-qualified path representing a application resources.
   * @returns {String} - A string representing the application.
   */
  matchApplicationFromApplicationName(applicationName) {
    return this._pathTemplates.applicationPathTemplate.match(applicationName)
      .application;
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
}

module.exports = ApplicationServiceClient;
