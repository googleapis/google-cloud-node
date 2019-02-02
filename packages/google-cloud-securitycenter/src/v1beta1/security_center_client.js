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

const gapicConfig = require('./security_center_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');
const protobuf = require('protobufjs');

const VERSION = require('../../package.json').version;

/**
 * V1 Beta APIs for Security Center service.
 *
 * @class
 * @memberof v1beta1
 */
class SecurityCenterClient {
  /**
   * Construct an instance of SecurityCenterClient.
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
        'google/cloud/securitycenter/v1beta1/securitycenter_service.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      organizationPathTemplate: new gax.PathTemplate(
        'organizations/{organization}'
      ),
      sourcePathTemplate: new gax.PathTemplate(
        'organizations/{organization}/sources/{source}'
      ),
      organizationSettingsPathTemplate: new gax.PathTemplate(
        'organizations/{organization}/organizationSettings'
      ),
      findingPathTemplate: new gax.PathTemplate(
        'organizations/{organization}/sources/{source}/findings/{finding}'
      ),
      assetSecurityMarksPathTemplate: new gax.PathTemplate(
        'organizations/{organization}/assets/{asset}/securityMarks'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      groupAssets: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'groupByResults'
      ),
      groupFindings: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'groupByResults'
      ),
      listAssets: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'listAssetsResults'
      ),
      listFindings: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'findings'
      ),
      listSources: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'sources'
      ),
    };
    let protoFilesRoot = new gax.GoogleProtoFilesRoot();
    protoFilesRoot = protobuf.loadSync(
      path.join(
        __dirname,
        '..',
        '..',
        'protos',
        'google/cloud/securitycenter/v1beta1/securitycenter_service.proto'
      ),
      protoFilesRoot
    );

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    this.operationsClient = new gax.lro({
      auth: gaxGrpc.auth,
      grpc: gaxGrpc.grpc,
    }).operationsClient(opts);

    const runAssetDiscoveryResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    const runAssetDiscoveryMetadata = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );

    this._descriptors.longrunning = {
      runAssetDiscovery: new gax.LongrunningDescriptor(
        this.operationsClient,
        runAssetDiscoveryResponse.decode.bind(runAssetDiscoveryResponse),
        runAssetDiscoveryMetadata.decode.bind(runAssetDiscoveryMetadata)
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.securitycenter.v1beta1.SecurityCenter',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.securitycenter.v1beta1.SecurityCenter.
    const securityCenterStub = gaxGrpc.createStub(
      protos.google.cloud.securitycenter.v1beta1.SecurityCenter,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const securityCenterStubMethods = [
      'createSource',
      'createFinding',
      'getIamPolicy',
      'getOrganizationSettings',
      'getSource',
      'groupAssets',
      'groupFindings',
      'listAssets',
      'listFindings',
      'listSources',
      'runAssetDiscovery',
      'setFindingState',
      'setIamPolicy',
      'testIamPermissions',
      'updateFinding',
      'updateOrganizationSettings',
      'updateSource',
      'updateSecurityMarks',
    ];
    for (const methodName of securityCenterStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        securityCenterStub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            }
        ),
        defaults[methodName],
        this._descriptors.page[methodName] ||
          this._descriptors.longrunning[methodName]
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'securitycenter.googleapis.com';
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
   * Creates a source.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the new source's parent. Its format should be
   *   "organizations/[organization_id]".
   * @param {Object} request.source
   *   The Source being created, only the display_name and description will be
   *   used. All other fields will be ignored.
   *
   *   This object should have the same structure as [Source]{@link google.cloud.securitycenter.v1beta1.Source}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Source]{@link google.cloud.securitycenter.v1beta1.Source}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Source]{@link google.cloud.securitycenter.v1beta1.Source}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   * const source = {};
   * const request = {
   *   parent: formattedParent,
   *   source: source,
   * };
   * client.createSource(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createSource(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createSource(request, options, callback);
  }

  /**
   * Creates a finding. The corresponding source must exist for finding creation
   * to succeed.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the new finding's parent. Its format should be
   *   "organizations/[organization_id]/sources/[source_id]".
   * @param {string} request.findingId
   *   Unique identifier provided by the client within the parent scope.
   *   It must be alphanumeric and less than or equal to 32 characters and
   *   greater than 0 characters in length.
   * @param {Object} request.finding
   *   The Finding being created. The name and security_marks will be ignored as
   *   they are both output only fields on this resource.
   *
   *   This object should have the same structure as [Finding]{@link google.cloud.securitycenter.v1beta1.Finding}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Finding]{@link google.cloud.securitycenter.v1beta1.Finding}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Finding]{@link google.cloud.securitycenter.v1beta1.Finding}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
   * const findingId = '';
   * const finding = {};
   * const request = {
   *   parent: formattedParent,
   *   findingId: findingId,
   *   finding: finding,
   * };
   * client.createFinding(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createFinding(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createFinding(request, options, callback);
  }

  /**
   * Gets the access control policy on the specified Source.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.resource
   *   REQUIRED: The resource for which the policy is being requested.
   *   `resource` is usually specified as a path. For example, a Project
   *   resource is specified as `projects/{project}`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Policy]{@link google.iam.v1.Policy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Policy]{@link google.iam.v1.Policy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
   * client.getIamPolicy({resource: formattedResource})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getIamPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getIamPolicy(request, options, callback);
  }

  /**
   * Gets the settings for an organization.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Name of the organization to get organization settings for. Its format is
   *   "organizations/[organization_id]/organizationSettings".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [OrganizationSettings]{@link google.cloud.securitycenter.v1beta1.OrganizationSettings}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [OrganizationSettings]{@link google.cloud.securitycenter.v1beta1.OrganizationSettings}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.organizationSettingsPath('[ORGANIZATION]');
   * client.getOrganizationSettings({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getOrganizationSettings(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getOrganizationSettings(
      request,
      options,
      callback
    );
  }

  /**
   * Gets a source.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Relative resource name of the source. Its format is
   *   "organizations/[organization_id]/source/[source_id]".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Source]{@link google.cloud.securitycenter.v1beta1.Source}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Source]{@link google.cloud.securitycenter.v1beta1.Source}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
   * client.getSource({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getSource(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getSource(request, options, callback);
  }

  /**
   * Filters an organization's assets and  groups them by their specified
   * properties.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Name of the organization to groupBy. Its format is
   *   "organizations/[organization_id]".
   * @param {string} request.groupBy
   *   Expression that defines what assets fields to use for grouping. The string
   *   value should follow SQL syntax: comma separated list of fields. For
   *   example:
   *   "security_center_properties.resource_project,security_center_properties.project".
   *
   *   The following fields are supported when compare_duration is not set:
   *
   *   * security_center_properties.resource_project
   *   * security_center_properties.resource_type
   *   * security_center_properties.resource_parent
   *
   *   The following fields are supported when compare_duration is set:
   *
   *   * security_center_properties.resource_type
   * @param {string} [request.filter]
   *   Expression that defines the filter to apply across assets.
   *   The expression is a list of zero or more restrictions combined via logical
   *   operators `AND` and `OR`.
   *   Parentheses are not supported, and `OR` has higher precedence than `AND`.
   *
   *   Restrictions have the form `<field> <operator> <value>` and may have a `-`
   *   character in front of them to indicate negation. The fields map to those
   *   defined in the Asset resource. Examples include:
   *
   *   * name
   *   * security_center_properties.resource_name
   *   * resource_properties.a_property
   *   * security_marks.marks.marka
   *
   *   The supported operators are:
   *
   *   * `=` for all value types.
   *   * `>`, `<`, `>=`, `<=` for integer values.
   *   * `:`, meaning substring matching, for strings.
   *
   *   The supported value types are:
   *
   *   * string literals in quotes.
   *   * integer literals without quotes.
   *   * boolean literals `true` and `false` without quotes.
   *
   *   For example, `resource_properties.size = 100` is a valid filter string.
   * @param {Object} [request.compareDuration]
   *   When compare_duration is set, the Asset's "state" property is updated to
   *   indicate whether the asset was added, removed, or remained present during
   *   the compare_duration period of time that precedes the read_time. This is
   *   the time between (read_time - compare_duration) and read_time.
   *
   *   The state value is derived based on the presence of the asset at the two
   *   points in time. Intermediate state changes between the two times don't
   *   affect the result. For example, the results aren't affected if the asset is
   *   removed and re-created again.
   *
   *   Possible "state" values when compare_duration is specified:
   *
   *   * "ADDED": indicates that the asset was not present before
   *                compare_duration, but present at reference_time.
   *   * "REMOVED": indicates that the asset was present at the start of
   *                compare_duration, but not present at reference_time.
   *   * "ACTIVE": indicates that the asset was present at both the
   *                start and the end of the time period defined by
   *                compare_duration and reference_time.
   *
   *   This field is ignored if `state` is not a field in `group_by`.
   *
   *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
   * @param {Object} [request.readTime]
   *   Time used as a reference point when filtering assets. The filter is limited
   *   to assets existing at the supplied time and their values are those at that
   *   specific time. Absence of this field will default to the API's version of
   *   NOW.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [GroupResult]{@link google.cloud.securitycenter.v1beta1.GroupResult}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [GroupAssetsResponse]{@link google.cloud.securitycenter.v1beta1.GroupAssetsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [GroupResult]{@link google.cloud.securitycenter.v1beta1.GroupResult}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [GroupResult]{@link google.cloud.securitycenter.v1beta1.GroupResult} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [GroupAssetsResponse]{@link google.cloud.securitycenter.v1beta1.GroupAssetsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   * const groupBy = '';
   * const request = {
   *   parent: formattedParent,
   *   groupBy: groupBy,
   * };
   *
   * client.groupAssets(request)
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   * const groupBy = '';
   * const request = {
   *   parent: formattedParent,
   *   groupBy: groupBy,
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
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.groupAssets(nextRequest, options).then(callback);
   *   }
   * }
   * client.groupAssets(request, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  groupAssets(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.groupAssets(request, options, callback);
  }

  /**
   * Equivalent to {@link groupAssets}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link groupAssets} continuously
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
   *   Name of the organization to groupBy. Its format is
   *   "organizations/[organization_id]".
   * @param {string} request.groupBy
   *   Expression that defines what assets fields to use for grouping. The string
   *   value should follow SQL syntax: comma separated list of fields. For
   *   example:
   *   "security_center_properties.resource_project,security_center_properties.project".
   *
   *   The following fields are supported when compare_duration is not set:
   *
   *   * security_center_properties.resource_project
   *   * security_center_properties.resource_type
   *   * security_center_properties.resource_parent
   *
   *   The following fields are supported when compare_duration is set:
   *
   *   * security_center_properties.resource_type
   * @param {string} [request.filter]
   *   Expression that defines the filter to apply across assets.
   *   The expression is a list of zero or more restrictions combined via logical
   *   operators `AND` and `OR`.
   *   Parentheses are not supported, and `OR` has higher precedence than `AND`.
   *
   *   Restrictions have the form `<field> <operator> <value>` and may have a `-`
   *   character in front of them to indicate negation. The fields map to those
   *   defined in the Asset resource. Examples include:
   *
   *   * name
   *   * security_center_properties.resource_name
   *   * resource_properties.a_property
   *   * security_marks.marks.marka
   *
   *   The supported operators are:
   *
   *   * `=` for all value types.
   *   * `>`, `<`, `>=`, `<=` for integer values.
   *   * `:`, meaning substring matching, for strings.
   *
   *   The supported value types are:
   *
   *   * string literals in quotes.
   *   * integer literals without quotes.
   *   * boolean literals `true` and `false` without quotes.
   *
   *   For example, `resource_properties.size = 100` is a valid filter string.
   * @param {Object} [request.compareDuration]
   *   When compare_duration is set, the Asset's "state" property is updated to
   *   indicate whether the asset was added, removed, or remained present during
   *   the compare_duration period of time that precedes the read_time. This is
   *   the time between (read_time - compare_duration) and read_time.
   *
   *   The state value is derived based on the presence of the asset at the two
   *   points in time. Intermediate state changes between the two times don't
   *   affect the result. For example, the results aren't affected if the asset is
   *   removed and re-created again.
   *
   *   Possible "state" values when compare_duration is specified:
   *
   *   * "ADDED": indicates that the asset was not present before
   *                compare_duration, but present at reference_time.
   *   * "REMOVED": indicates that the asset was present at the start of
   *                compare_duration, but not present at reference_time.
   *   * "ACTIVE": indicates that the asset was present at both the
   *                start and the end of the time period defined by
   *                compare_duration and reference_time.
   *
   *   This field is ignored if `state` is not a field in `group_by`.
   *
   *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
   * @param {Object} [request.readTime]
   *   Time used as a reference point when filtering assets. The filter is limited
   *   to assets existing at the supplied time and their values are those at that
   *   specific time. Absence of this field will default to the API's version of
   *   NOW.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [GroupResult]{@link google.cloud.securitycenter.v1beta1.GroupResult} on 'data' event.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   * const groupBy = '';
   * const request = {
   *   parent: formattedParent,
   *   groupBy: groupBy,
   * };
   * client.groupAssetsStream(request)
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  groupAssetsStream(request, options) {
    options = options || {};

    return this._descriptors.page.groupAssets.createStream(
      this._innerApiCalls.groupAssets,
      request,
      options
    );
  }

  /**
   * Filters an organization or source's findings and  groups them by their
   * specified properties.
   *
   * To group across all sources provide a `-` as the source id.
   * Example: /v1beta1/organizations/123/sources/-/findings
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Name of the source to groupBy. Its format is
   *   "organizations/[organization_id]/sources/[source_id]". To groupBy across
   *   all sources provide a source_id of `-`. For example:
   *   organizations/123/sources/-
   * @param {string} request.groupBy
   *   Expression that defines what assets fields to use for grouping (including
   *   `state`). The string value should follow SQL syntax: comma separated list
   *   of fields. For example:
   *   "parent,resource_name".
   *
   *   The following fields are supported:
   *
   *   * resource_name
   *   * category
   *   * state
   *   * parent
   * @param {string} [request.filter]
   *   Expression that defines the filter to apply across findings.
   *   The expression is a list of one or more restrictions combined via logical
   *   operators `AND` and `OR`.
   *   Parentheses are not supported, and `OR` has higher precedence than `AND`.
   *
   *   Restrictions have the form `<field> <operator> <value>` and may have a `-`
   *   character in front of them to indicate negation. Examples include:
   *
   *    * name
   *    * source_properties.a_property
   *    * security_marks.marks.marka
   *
   *   The supported operators are:
   *
   *   * `=` for all value types.
   *   * `>`, `<`, `>=`, `<=` for integer values.
   *   * `:`, meaning substring matching, for strings.
   *
   *   The supported value types are:
   *
   *   * string literals in quotes.
   *   * integer literals without quotes.
   *   * boolean literals `true` and `false` without quotes.
   *
   *   For example, `source_properties.size = 100` is a valid filter string.
   * @param {Object} [request.readTime]
   *   Time used as a reference point when filtering findings. The filter is
   *   limited to findings existing at the supplied time and their values are
   *   those at that specific time. Absence of this field will default to the
   *   API's version of NOW.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [GroupResult]{@link google.cloud.securitycenter.v1beta1.GroupResult}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [GroupFindingsResponse]{@link google.cloud.securitycenter.v1beta1.GroupFindingsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [GroupResult]{@link google.cloud.securitycenter.v1beta1.GroupResult}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [GroupResult]{@link google.cloud.securitycenter.v1beta1.GroupResult} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [GroupFindingsResponse]{@link google.cloud.securitycenter.v1beta1.GroupFindingsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
   * const groupBy = '';
   * const request = {
   *   parent: formattedParent,
   *   groupBy: groupBy,
   * };
   *
   * client.groupFindings(request)
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
   * const groupBy = '';
   * const request = {
   *   parent: formattedParent,
   *   groupBy: groupBy,
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
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.groupFindings(nextRequest, options).then(callback);
   *   }
   * }
   * client.groupFindings(request, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  groupFindings(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.groupFindings(request, options, callback);
  }

  /**
   * Equivalent to {@link groupFindings}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link groupFindings} continuously
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
   *   Name of the source to groupBy. Its format is
   *   "organizations/[organization_id]/sources/[source_id]". To groupBy across
   *   all sources provide a source_id of `-`. For example:
   *   organizations/123/sources/-
   * @param {string} request.groupBy
   *   Expression that defines what assets fields to use for grouping (including
   *   `state`). The string value should follow SQL syntax: comma separated list
   *   of fields. For example:
   *   "parent,resource_name".
   *
   *   The following fields are supported:
   *
   *   * resource_name
   *   * category
   *   * state
   *   * parent
   * @param {string} [request.filter]
   *   Expression that defines the filter to apply across findings.
   *   The expression is a list of one or more restrictions combined via logical
   *   operators `AND` and `OR`.
   *   Parentheses are not supported, and `OR` has higher precedence than `AND`.
   *
   *   Restrictions have the form `<field> <operator> <value>` and may have a `-`
   *   character in front of them to indicate negation. Examples include:
   *
   *    * name
   *    * source_properties.a_property
   *    * security_marks.marks.marka
   *
   *   The supported operators are:
   *
   *   * `=` for all value types.
   *   * `>`, `<`, `>=`, `<=` for integer values.
   *   * `:`, meaning substring matching, for strings.
   *
   *   The supported value types are:
   *
   *   * string literals in quotes.
   *   * integer literals without quotes.
   *   * boolean literals `true` and `false` without quotes.
   *
   *   For example, `source_properties.size = 100` is a valid filter string.
   * @param {Object} [request.readTime]
   *   Time used as a reference point when filtering findings. The filter is
   *   limited to findings existing at the supplied time and their values are
   *   those at that specific time. Absence of this field will default to the
   *   API's version of NOW.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [GroupResult]{@link google.cloud.securitycenter.v1beta1.GroupResult} on 'data' event.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
   * const groupBy = '';
   * const request = {
   *   parent: formattedParent,
   *   groupBy: groupBy,
   * };
   * client.groupFindingsStream(request)
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  groupFindingsStream(request, options) {
    options = options || {};

    return this._descriptors.page.groupFindings.createStream(
      this._innerApiCalls.groupFindings,
      request,
      options
    );
  }

  /**
   * Lists an organization's assets.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Name of the organization assets should belong to. Its format is
   *   "organizations/[organization_id]".
   * @param {string} [request.filter]
   *   Expression that defines the filter to apply across assets.
   *   The expression is a list of zero or more restrictions combined via logical
   *   operators `AND` and `OR`.
   *   Parentheses are not supported, and `OR` has higher precedence than `AND`.
   *
   *   Restrictions have the form `<field> <operator> <value>` and may have a `-`
   *   character in front of them to indicate negation. The fields map to those
   *   defined in the Asset resource. Examples include:
   *
   *   * name
   *   * security_center_properties.resource_name
   *   * resource_properties.a_property
   *   * security_marks.marks.marka
   *
   *   The supported operators are:
   *
   *   * `=` for all value types.
   *   * `>`, `<`, `>=`, `<=` for integer values.
   *   * `:`, meaning substring matching, for strings.
   *
   *   The supported value types are:
   *
   *   * string literals in quotes.
   *   * integer literals without quotes.
   *   * boolean literals `true` and `false` without quotes.
   *
   *   For example, `resource_properties.size = 100` is a valid filter string.
   * @param {string} [request.orderBy]
   *   Expression that defines what fields and order to use for sorting. The
   *   string value should follow SQL syntax: comma separated list of fields. For
   *   example: "name,resource_properties.a_property". The default sorting order
   *   is ascending. To specify descending order for a field, a suffix " desc"
   *   should be appended to the field name. For example: "name
   *   desc,resource_properties.a_property". Redundant space characters in the
   *   syntax are insignificant. "name desc,resource_properties.a_property" and "
   *   name     desc  ,   resource_properties.a_property  " are equivalent.
   * @param {Object} [request.readTime]
   *   Time used as a reference point when filtering assets. The filter is limited
   *   to assets existing at the supplied time and their values are those at that
   *   specific time. Absence of this field will default to the API's version of
   *   NOW.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {Object} [request.compareDuration]
   *   When compare_duration is set, the ListAssetResult's "state" attribute is
   *   updated to indicate whether the asset was added, removed, or remained
   *   present during the compare_duration period of time that precedes the
   *   read_time. This is the time between (read_time -
   *   compare_duration) and read_time.
   *
   *   The state value is derived based on the presence of the asset at the two
   *   points in time. Intermediate state changes between the two times don't
   *   affect the result. For example, the results aren't affected if the asset is
   *   removed and re-created again.
   *
   *   Possible "state" values when compare_duration is specified:
   *
   *   * "ADDED": indicates that the asset was not present before
   *                compare_duration, but present at read_time.
   *   * "REMOVED": indicates that the asset was present at the start of
   *                compare_duration, but not present at read_time.
   *   * "ACTIVE": indicates that the asset was present at both the
   *                start and the end of the time period defined by
   *                compare_duration and read_time.
   *
   *   If compare_duration is not specified, then the only possible state is
   *   "UNUSED", which indicates that the asset is present at read_time.
   *
   *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
   * @param {Object} [request.fieldMask]
   *   Optional.
   *
   *   A field mask to specify the ListAssetsResult fields to be listed in the
   *   response.
   *   An empty field mask will list all fields.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [ListAssetsResult]{@link google.cloud.securitycenter.v1beta1.ListAssetsResult}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListAssetsResponse]{@link google.cloud.securitycenter.v1beta1.ListAssetsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [ListAssetsResult]{@link google.cloud.securitycenter.v1beta1.ListAssetsResult}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [ListAssetsResult]{@link google.cloud.securitycenter.v1beta1.ListAssetsResult} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListAssetsResponse]{@link google.cloud.securitycenter.v1beta1.ListAssetsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   *
   * client.listAssets({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
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
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listAssets(nextRequest, options).then(callback);
   *   }
   * }
   * client.listAssets({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listAssets(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listAssets(request, options, callback);
  }

  /**
   * Equivalent to {@link listAssets}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listAssets} continuously
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
   *   Name of the organization assets should belong to. Its format is
   *   "organizations/[organization_id]".
   * @param {string} [request.filter]
   *   Expression that defines the filter to apply across assets.
   *   The expression is a list of zero or more restrictions combined via logical
   *   operators `AND` and `OR`.
   *   Parentheses are not supported, and `OR` has higher precedence than `AND`.
   *
   *   Restrictions have the form `<field> <operator> <value>` and may have a `-`
   *   character in front of them to indicate negation. The fields map to those
   *   defined in the Asset resource. Examples include:
   *
   *   * name
   *   * security_center_properties.resource_name
   *   * resource_properties.a_property
   *   * security_marks.marks.marka
   *
   *   The supported operators are:
   *
   *   * `=` for all value types.
   *   * `>`, `<`, `>=`, `<=` for integer values.
   *   * `:`, meaning substring matching, for strings.
   *
   *   The supported value types are:
   *
   *   * string literals in quotes.
   *   * integer literals without quotes.
   *   * boolean literals `true` and `false` without quotes.
   *
   *   For example, `resource_properties.size = 100` is a valid filter string.
   * @param {string} [request.orderBy]
   *   Expression that defines what fields and order to use for sorting. The
   *   string value should follow SQL syntax: comma separated list of fields. For
   *   example: "name,resource_properties.a_property". The default sorting order
   *   is ascending. To specify descending order for a field, a suffix " desc"
   *   should be appended to the field name. For example: "name
   *   desc,resource_properties.a_property". Redundant space characters in the
   *   syntax are insignificant. "name desc,resource_properties.a_property" and "
   *   name     desc  ,   resource_properties.a_property  " are equivalent.
   * @param {Object} [request.readTime]
   *   Time used as a reference point when filtering assets. The filter is limited
   *   to assets existing at the supplied time and their values are those at that
   *   specific time. Absence of this field will default to the API's version of
   *   NOW.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {Object} [request.compareDuration]
   *   When compare_duration is set, the ListAssetResult's "state" attribute is
   *   updated to indicate whether the asset was added, removed, or remained
   *   present during the compare_duration period of time that precedes the
   *   read_time. This is the time between (read_time -
   *   compare_duration) and read_time.
   *
   *   The state value is derived based on the presence of the asset at the two
   *   points in time. Intermediate state changes between the two times don't
   *   affect the result. For example, the results aren't affected if the asset is
   *   removed and re-created again.
   *
   *   Possible "state" values when compare_duration is specified:
   *
   *   * "ADDED": indicates that the asset was not present before
   *                compare_duration, but present at read_time.
   *   * "REMOVED": indicates that the asset was present at the start of
   *                compare_duration, but not present at read_time.
   *   * "ACTIVE": indicates that the asset was present at both the
   *                start and the end of the time period defined by
   *                compare_duration and read_time.
   *
   *   If compare_duration is not specified, then the only possible state is
   *   "UNUSED", which indicates that the asset is present at read_time.
   *
   *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
   * @param {Object} [request.fieldMask]
   *   Optional.
   *
   *   A field mask to specify the ListAssetsResult fields to be listed in the
   *   response.
   *   An empty field mask will list all fields.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [ListAssetsResult]{@link google.cloud.securitycenter.v1beta1.ListAssetsResult} on 'data' event.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   * client.listAssetsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listAssetsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listAssets.createStream(
      this._innerApiCalls.listAssets,
      request,
      options
    );
  }

  /**
   * Lists an organization or source's findings.
   *
   * To list across all sources provide a `-` as the source id.
   * Example: /v1beta1/organizations/123/sources/-/findings
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Name of the source the findings belong to. Its format is
   *   "organizations/[organization_id]/sources/[source_id]". To list across all
   *   sources provide a source_id of `-`. For example:
   *   organizations/123/sources/-
   * @param {string} [request.filter]
   *   Expression that defines the filter to apply across findings.
   *   The expression is a list of one or more restrictions combined via logical
   *   operators `AND` and `OR`.
   *   Parentheses are not supported, and `OR` has higher precedence than `AND`.
   *
   *   Restrictions have the form `<field> <operator> <value>` and may have a `-`
   *   character in front of them to indicate negation. Examples include:
   *
   *    * name
   *    * source_properties.a_property
   *    * security_marks.marks.marka
   *
   *   The supported operators are:
   *
   *   * `=` for all value types.
   *   * `>`, `<`, `>=`, `<=` for integer values.
   *   * `:`, meaning substring matching, for strings.
   *
   *   The supported value types are:
   *
   *   * string literals in quotes.
   *   * integer literals without quotes.
   *   * boolean literals `true` and `false` without quotes.
   *
   *   For example, `source_properties.size = 100` is a valid filter string.
   * @param {string} [request.orderBy]
   *   Expression that defines what fields and order to use for sorting. The
   *   string value should follow SQL syntax: comma separated list of fields. For
   *   example: "name,resource_properties.a_property". The default sorting order
   *   is ascending. To specify descending order for a field, a suffix " desc"
   *   should be appended to the field name. For example: "name
   *   desc,source_properties.a_property". Redundant space characters in the
   *   syntax are insignificant. "name desc,source_properties.a_property" and "
   *   name     desc  ,   source_properties.a_property  " are equivalent.
   * @param {Object} [request.readTime]
   *   Time used as a reference point when filtering findings. The filter is
   *   limited to findings existing at the supplied time and their values are
   *   those at that specific time. Absence of this field will default to the
   *   API's version of NOW.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {Object} [request.fieldMask]
   *   Optional.
   *
   *   A field mask to specify the Finding fields to be listed in the response.
   *   An empty field mask will list all fields.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Finding]{@link google.cloud.securitycenter.v1beta1.Finding}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListFindingsResponse]{@link google.cloud.securitycenter.v1beta1.ListFindingsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Finding]{@link google.cloud.securitycenter.v1beta1.Finding}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Finding]{@link google.cloud.securitycenter.v1beta1.Finding} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListFindingsResponse]{@link google.cloud.securitycenter.v1beta1.ListFindingsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
   *
   * client.listFindings({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
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
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listFindings(nextRequest, options).then(callback);
   *   }
   * }
   * client.listFindings({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listFindings(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listFindings(request, options, callback);
  }

  /**
   * Equivalent to {@link listFindings}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listFindings} continuously
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
   *   Name of the source the findings belong to. Its format is
   *   "organizations/[organization_id]/sources/[source_id]". To list across all
   *   sources provide a source_id of `-`. For example:
   *   organizations/123/sources/-
   * @param {string} [request.filter]
   *   Expression that defines the filter to apply across findings.
   *   The expression is a list of one or more restrictions combined via logical
   *   operators `AND` and `OR`.
   *   Parentheses are not supported, and `OR` has higher precedence than `AND`.
   *
   *   Restrictions have the form `<field> <operator> <value>` and may have a `-`
   *   character in front of them to indicate negation. Examples include:
   *
   *    * name
   *    * source_properties.a_property
   *    * security_marks.marks.marka
   *
   *   The supported operators are:
   *
   *   * `=` for all value types.
   *   * `>`, `<`, `>=`, `<=` for integer values.
   *   * `:`, meaning substring matching, for strings.
   *
   *   The supported value types are:
   *
   *   * string literals in quotes.
   *   * integer literals without quotes.
   *   * boolean literals `true` and `false` without quotes.
   *
   *   For example, `source_properties.size = 100` is a valid filter string.
   * @param {string} [request.orderBy]
   *   Expression that defines what fields and order to use for sorting. The
   *   string value should follow SQL syntax: comma separated list of fields. For
   *   example: "name,resource_properties.a_property". The default sorting order
   *   is ascending. To specify descending order for a field, a suffix " desc"
   *   should be appended to the field name. For example: "name
   *   desc,source_properties.a_property". Redundant space characters in the
   *   syntax are insignificant. "name desc,source_properties.a_property" and "
   *   name     desc  ,   source_properties.a_property  " are equivalent.
   * @param {Object} [request.readTime]
   *   Time used as a reference point when filtering findings. The filter is
   *   limited to findings existing at the supplied time and their values are
   *   those at that specific time. Absence of this field will default to the
   *   API's version of NOW.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {Object} [request.fieldMask]
   *   Optional.
   *
   *   A field mask to specify the Finding fields to be listed in the response.
   *   An empty field mask will list all fields.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Finding]{@link google.cloud.securitycenter.v1beta1.Finding} on 'data' event.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
   * client.listFindingsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listFindingsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listFindings.createStream(
      this._innerApiCalls.listFindings,
      request,
      options
    );
  }

  /**
   * Lists all sources belonging to an organization.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the parent of sources to list. Its format should be
   *   "organizations/[organization_id]".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Source]{@link google.cloud.securitycenter.v1beta1.Source}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListSourcesResponse]{@link google.cloud.securitycenter.v1beta1.ListSourcesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Source]{@link google.cloud.securitycenter.v1beta1.Source}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Source]{@link google.cloud.securitycenter.v1beta1.Source} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListSourcesResponse]{@link google.cloud.securitycenter.v1beta1.ListSourcesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   *
   * client.listSources({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
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
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listSources(nextRequest, options).then(callback);
   *   }
   * }
   * client.listSources({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listSources(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listSources(request, options, callback);
  }

  /**
   * Equivalent to {@link listSources}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listSources} continuously
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
   *   Resource name of the parent of sources to list. Its format should be
   *   "organizations/[organization_id]".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Source]{@link google.cloud.securitycenter.v1beta1.Source} on 'data' event.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   * client.listSourcesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listSourcesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listSources.createStream(
      this._innerApiCalls.listSources,
      request,
      options
    );
  }

  /**
   * Runs asset discovery. The discovery is tracked with a long-running
   * operation.
   *
   * This API can only be called with limited frequency for an organization. If
   * it is called too frequently the caller will receive a TOO_MANY_REQUESTS
   * error.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Name of the organization to run asset discovery for. Its format is
   *   "organizations/[organization_id]".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   *
   * // Handle the operation using the promise pattern.
   * client.runAssetDiscovery({parent: formattedParent})
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     const result = responses[0];
   *     const metadata = responses[1];
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.runAssetDiscovery({parent: formattedParent})
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Adding a listener for the "complete" event starts polling for the
   *     // completion of the operation.
   *     operation.on('complete', (result, metadata, finalApiResponse) => {
   *       // doSomethingWith(result);
   *     });
   *
   *     // Adding a listener for the "progress" event causes the callback to be
   *     // called on any change in metadata when the operation is polled.
   *     operation.on('progress', (metadata, apiResponse) => {
   *       // doSomethingWith(metadata)
   *     });
   *
   *     // Adding a listener for the "error" event handles any errors found during polling.
   *     operation.on('error', err => {
   *       // throw(err);
   *     });
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  runAssetDiscovery(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.runAssetDiscovery(request, options, callback);
  }

  /**
   * Updates the state of a finding.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The relative resource name of the finding. See:
   *   https://cloud.google.com/apis/design/resource_names#relative_resource_name
   *   Example:
   *   "organizations/123/sources/456/finding/789".
   * @param {number} request.state
   *   The desired State of the finding.
   *
   *   The number should be among the values of [State]{@link google.cloud.securitycenter.v1beta1.State}
   * @param {Object} request.startTime
   *   The time at which the updated state takes effect.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Finding]{@link google.cloud.securitycenter.v1beta1.Finding}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Finding]{@link google.cloud.securitycenter.v1beta1.Finding}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.findingPath('[ORGANIZATION]', '[SOURCE]', '[FINDING]');
   * const state = 'STATE_UNSPECIFIED';
   * const startTime = {};
   * const request = {
   *   name: formattedName,
   *   state: state,
   *   startTime: startTime,
   * };
   * client.setFindingState(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setFindingState(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.setFindingState(request, options, callback);
  }

  /**
   * Sets the access control policy on the specified Source.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.resource
   *   REQUIRED: The resource for which the policy is being specified.
   *   `resource` is usually specified as a path. For example, a Project
   *   resource is specified as `projects/{project}`.
   * @param {Object} request.policy
   *   REQUIRED: The complete policy to be applied to the `resource`. The size of
   *   the policy is limited to a few 10s of KB. An empty policy is a
   *   valid policy but certain Cloud Platform services (such as Projects)
   *   might reject them.
   *
   *   This object should have the same structure as [Policy]{@link google.iam.v1.Policy}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Policy]{@link google.iam.v1.Policy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Policy]{@link google.iam.v1.Policy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
   * const policy = {};
   * const request = {
   *   resource: formattedResource,
   *   policy: policy,
   * };
   * client.setIamPolicy(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setIamPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.setIamPolicy(request, options, callback);
  }

  /**
   * Returns the permissions that a caller has on the specified source.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.resource
   *   REQUIRED: The resource for which the policy detail is being requested.
   *   `resource` is usually specified as a path. For example, a Project
   *   resource is specified as `projects/{project}`.
   * @param {string[]} request.permissions
   *   The set of permissions to check for the `resource`. Permissions with
   *   wildcards (such as '*' or 'storage.*') are not allowed. For more
   *   information see
   *   [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TestIamPermissionsResponse]{@link google.iam.v1.TestIamPermissionsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TestIamPermissionsResponse]{@link google.iam.v1.TestIamPermissionsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.sourcePath('[ORGANIZATION]', '[SOURCE]');
   * const permissions = [];
   * const request = {
   *   resource: formattedResource,
   *   permissions: permissions,
   * };
   * client.testIamPermissions(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  testIamPermissions(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.testIamPermissions(request, options, callback);
  }

  /**
   * Creates or updates a finding. The corresponding source must exist for a
   * finding creation to succeed.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.finding
   *   The finding resource to update or create if it does not already exist.
   *   parent, security_marks, and update_time will be ignored.
   *
   *   In the case of creation, the finding id portion of the name must
   *   alphanumeric and less than or equal to 32 characters and greater than 0
   *   characters in length.
   *
   *   This object should have the same structure as [Finding]{@link google.cloud.securitycenter.v1beta1.Finding}
   * @param {Object} [request.updateMask]
   *   The FieldMask to use when updating the finding resource. This field should
   *   not be specified when creating a finding.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Finding]{@link google.cloud.securitycenter.v1beta1.Finding}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Finding]{@link google.cloud.securitycenter.v1beta1.Finding}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const finding = {};
   * client.updateFinding({finding: finding})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateFinding(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateFinding(request, options, callback);
  }

  /**
   * Updates an organization's settings.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.organizationSettings
   *   The organization settings resource to update.
   *
   *   This object should have the same structure as [OrganizationSettings]{@link google.cloud.securitycenter.v1beta1.OrganizationSettings}
   * @param {Object} [request.updateMask]
   *   The FieldMask to use when updating the settings resource.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [OrganizationSettings]{@link google.cloud.securitycenter.v1beta1.OrganizationSettings}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [OrganizationSettings]{@link google.cloud.securitycenter.v1beta1.OrganizationSettings}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const organizationSettings = {};
   * client.updateOrganizationSettings({organizationSettings: organizationSettings})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateOrganizationSettings(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateOrganizationSettings(
      request,
      options,
      callback
    );
  }

  /**
   * Updates a source.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.source
   *   The source resource to update.
   *
   *   This object should have the same structure as [Source]{@link google.cloud.securitycenter.v1beta1.Source}
   * @param {Object} [request.updateMask]
   *   The FieldMask to use when updating the source resource.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Source]{@link google.cloud.securitycenter.v1beta1.Source}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Source]{@link google.cloud.securitycenter.v1beta1.Source}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const source = {};
   * client.updateSource({source: source})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateSource(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateSource(request, options, callback);
  }

  /**
   * Updates security marks.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.securityMarks
   *   The security marks resource to update.
   *
   *   This object should have the same structure as [SecurityMarks]{@link google.cloud.securitycenter.v1beta1.SecurityMarks}
   * @param {Object} [request.updateMask]
   *   The FieldMask to use when updating the security marks resource.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [request.startTime]
   *   The time at which the updated SecurityMarks take effect.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [SecurityMarks]{@link google.cloud.securitycenter.v1beta1.SecurityMarks}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [SecurityMarks]{@link google.cloud.securitycenter.v1beta1.SecurityMarks}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const securityCenter = require('@google-cloud/security-center');
   *
   * const client = new securityCenter.v1beta1.SecurityCenterClient({
   *   // optional auth parameters.
   * });
   *
   * const securityMarks = {};
   * client.updateSecurityMarks({securityMarks: securityMarks})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateSecurityMarks(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateSecurityMarks(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified organization resource name string.
   *
   * @param {String} organization
   * @returns {String}
   */
  organizationPath(organization) {
    return this._pathTemplates.organizationPathTemplate.render({
      organization: organization,
    });
  }

  /**
   * Return a fully-qualified source resource name string.
   *
   * @param {String} organization
   * @param {String} source
   * @returns {String}
   */
  sourcePath(organization, source) {
    return this._pathTemplates.sourcePathTemplate.render({
      organization: organization,
      source: source,
    });
  }

  /**
   * Return a fully-qualified organization_settings resource name string.
   *
   * @param {String} organization
   * @returns {String}
   */
  organizationSettingsPath(organization) {
    return this._pathTemplates.organizationSettingsPathTemplate.render({
      organization: organization,
    });
  }

  /**
   * Return a fully-qualified finding resource name string.
   *
   * @param {String} organization
   * @param {String} source
   * @param {String} finding
   * @returns {String}
   */
  findingPath(organization, source, finding) {
    return this._pathTemplates.findingPathTemplate.render({
      organization: organization,
      source: source,
      finding: finding,
    });
  }

  /**
   * Return a fully-qualified asset_security_marks resource name string.
   *
   * @param {String} organization
   * @param {String} asset
   * @returns {String}
   */
  assetSecurityMarksPath(organization, asset) {
    return this._pathTemplates.assetSecurityMarksPathTemplate.render({
      organization: organization,
      asset: asset,
    });
  }

  /**
   * Parse the organizationName from a organization resource.
   *
   * @param {String} organizationName
   *   A fully-qualified path representing a organization resources.
   * @returns {String} - A string representing the organization.
   */
  matchOrganizationFromOrganizationName(organizationName) {
    return this._pathTemplates.organizationPathTemplate.match(organizationName)
      .organization;
  }

  /**
   * Parse the sourceName from a source resource.
   *
   * @param {String} sourceName
   *   A fully-qualified path representing a source resources.
   * @returns {String} - A string representing the organization.
   */
  matchOrganizationFromSourceName(sourceName) {
    return this._pathTemplates.sourcePathTemplate.match(sourceName)
      .organization;
  }

  /**
   * Parse the sourceName from a source resource.
   *
   * @param {String} sourceName
   *   A fully-qualified path representing a source resources.
   * @returns {String} - A string representing the source.
   */
  matchSourceFromSourceName(sourceName) {
    return this._pathTemplates.sourcePathTemplate.match(sourceName).source;
  }

  /**
   * Parse the organizationSettingsName from a organization_settings resource.
   *
   * @param {String} organizationSettingsName
   *   A fully-qualified path representing a organization_settings resources.
   * @returns {String} - A string representing the organization.
   */
  matchOrganizationFromOrganizationSettingsName(organizationSettingsName) {
    return this._pathTemplates.organizationSettingsPathTemplate.match(
      organizationSettingsName
    ).organization;
  }

  /**
   * Parse the findingName from a finding resource.
   *
   * @param {String} findingName
   *   A fully-qualified path representing a finding resources.
   * @returns {String} - A string representing the organization.
   */
  matchOrganizationFromFindingName(findingName) {
    return this._pathTemplates.findingPathTemplate.match(findingName)
      .organization;
  }

  /**
   * Parse the findingName from a finding resource.
   *
   * @param {String} findingName
   *   A fully-qualified path representing a finding resources.
   * @returns {String} - A string representing the source.
   */
  matchSourceFromFindingName(findingName) {
    return this._pathTemplates.findingPathTemplate.match(findingName).source;
  }

  /**
   * Parse the findingName from a finding resource.
   *
   * @param {String} findingName
   *   A fully-qualified path representing a finding resources.
   * @returns {String} - A string representing the finding.
   */
  matchFindingFromFindingName(findingName) {
    return this._pathTemplates.findingPathTemplate.match(findingName).finding;
  }

  /**
   * Parse the assetSecurityMarksName from a asset_security_marks resource.
   *
   * @param {String} assetSecurityMarksName
   *   A fully-qualified path representing a asset_security_marks resources.
   * @returns {String} - A string representing the organization.
   */
  matchOrganizationFromAssetSecurityMarksName(assetSecurityMarksName) {
    return this._pathTemplates.assetSecurityMarksPathTemplate.match(
      assetSecurityMarksName
    ).organization;
  }

  /**
   * Parse the assetSecurityMarksName from a asset_security_marks resource.
   *
   * @param {String} assetSecurityMarksName
   *   A fully-qualified path representing a asset_security_marks resources.
   * @returns {String} - A string representing the asset.
   */
  matchAssetFromAssetSecurityMarksName(assetSecurityMarksName) {
    return this._pathTemplates.assetSecurityMarksPathTemplate.match(
      assetSecurityMarksName
    ).asset;
  }
}

module.exports = SecurityCenterClient;
