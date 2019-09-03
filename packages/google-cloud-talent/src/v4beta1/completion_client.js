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

const gapicConfig = require('./completion_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * A service handles auto completion.
 *
 * @class
 * @memberof v4beta1
 */
class CompletionClient {
  /**
   * Construct an instance of CompletionClient.
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
      companyPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}/companies/{company}'
      ),
      companyWithoutTenantPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/companies/{company}'
      ),
      projectPathTemplate: new gaxModule.PathTemplate('projects/{project}'),
      tenantPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/tenants/{tenant}'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.talent.v4beta1.Completion',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.talent.v4beta1.Completion.
    const completionStub = gaxGrpc.createStub(
      opts.fallback
        ? protos.lookupService('google.cloud.talent.v4beta1.Completion')
        : protos.google.cloud.talent.v4beta1.Completion,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const completionStubMethods = ['completeQuery'];
    for (const methodName of completionStubMethods) {
      const innerCallPromise = completionStub.then(
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
   * Completes the specified prefix with keyword suggestions.
   * Intended for use by a job search auto-complete search box.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of tenant the completion is performed within.
   *
   *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *   "projects/api-test-project/tenant/foo".
   *
   *   Tenant id is optional and the default tenant is used if unspecified, for
   *   example, "projects/api-test-project".
   * @param {string} request.query
   *   Required. The query used to generate suggestions.
   *
   *   The maximum number of allowed characters is 255.
   * @param {number} request.pageSize
   *   Required. Completion result count.
   *
   *   The maximum allowed page size is 10.
   * @param {string[]} [request.languageCodes]
   *   Optional. The list of languages of the query. This is
   *   the BCP-47 language code, such as "en-US" or "sr-Latn".
   *   For more information, see
   *   [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).
   *
   *   For
   *   CompletionType.JOB_TITLE
   *   type, only open jobs with the same
   *   language_codes
   *   are returned.
   *
   *   For
   *   CompletionType.COMPANY_NAME
   *   type, only companies having open jobs with the same
   *   language_codes
   *   are returned.
   *
   *   For
   *   CompletionType.COMBINED
   *   type, only open jobs with the same
   *   language_codes
   *   or companies having open jobs with the same
   *   language_codes
   *   are returned.
   *
   *   The maximum number of allowed characters is 255.
   * @param {string} [request.company]
   *   Optional. If provided, restricts completion to specified company.
   *
   *   The format is
   *   "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for
   *   example, "projects/api-test-project/tenants/foo/companies/bar".
   *
   *   Tenant id is optional and the default tenant is used if unspecified, for
   *   example, "projects/api-test-project/companies/bar".
   * @param {number} [request.scope]
   *   Optional. The scope of the completion. The defaults is
   *   CompletionScope.PUBLIC.
   *
   *   The number should be among the values of [CompletionScope]{@link google.cloud.talent.v4beta1.CompletionScope}
   * @param {number} [request.type]
   *   Optional. The completion topic. The default is
   *   CompletionType.COMBINED.
   *
   *   The number should be among the values of [CompletionType]{@link google.cloud.talent.v4beta1.CompletionType}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [CompleteQueryResponse]{@link google.cloud.talent.v4beta1.CompleteQueryResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [CompleteQueryResponse]{@link google.cloud.talent.v4beta1.CompleteQueryResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.CompletionClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.tenantPath('[PROJECT]', '[TENANT]');
   * const query = '';
   * const pageSize = 0;
   * const request = {
   *   parent: formattedParent,
   *   query: query,
   *   pageSize: pageSize,
   * };
   * client.completeQuery(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  completeQuery(request, options, callback) {
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

    return this._innerApiCalls.completeQuery(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified company resource name string.
   *
   * @param {String} project
   * @param {String} tenant
   * @param {String} company
   * @returns {String}
   */
  companyPath(project, tenant, company) {
    return this._pathTemplates.companyPathTemplate.render({
      project: project,
      tenant: tenant,
      company: company,
    });
  }

  /**
   * Return a fully-qualified company_without_tenant resource name string.
   *
   * @param {String} project
   * @param {String} company
   * @returns {String}
   */
  companyWithoutTenantPath(project, company) {
    return this._pathTemplates.companyWithoutTenantPathTemplate.render({
      project: project,
      company: company,
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
   * Parse the companyName from a company resource.
   *
   * @param {String} companyName
   *   A fully-qualified path representing a company resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromCompanyName(companyName) {
    return this._pathTemplates.companyPathTemplate.match(companyName).project;
  }

  /**
   * Parse the companyName from a company resource.
   *
   * @param {String} companyName
   *   A fully-qualified path representing a company resources.
   * @returns {String} - A string representing the tenant.
   */
  matchTenantFromCompanyName(companyName) {
    return this._pathTemplates.companyPathTemplate.match(companyName).tenant;
  }

  /**
   * Parse the companyName from a company resource.
   *
   * @param {String} companyName
   *   A fully-qualified path representing a company resources.
   * @returns {String} - A string representing the company.
   */
  matchCompanyFromCompanyName(companyName) {
    return this._pathTemplates.companyPathTemplate.match(companyName).company;
  }

  /**
   * Parse the companyWithoutTenantName from a company_without_tenant resource.
   *
   * @param {String} companyWithoutTenantName
   *   A fully-qualified path representing a company_without_tenant resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromCompanyWithoutTenantName(companyWithoutTenantName) {
    return this._pathTemplates.companyWithoutTenantPathTemplate.match(
      companyWithoutTenantName
    ).project;
  }

  /**
   * Parse the companyWithoutTenantName from a company_without_tenant resource.
   *
   * @param {String} companyWithoutTenantName
   *   A fully-qualified path representing a company_without_tenant resources.
   * @returns {String} - A string representing the company.
   */
  matchCompanyFromCompanyWithoutTenantName(companyWithoutTenantName) {
    return this._pathTemplates.companyWithoutTenantPathTemplate.match(
      companyWithoutTenantName
    ).company;
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

module.exports = CompletionClient;
