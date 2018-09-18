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

const gapicConfig = require('./alert_policy_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * The AlertPolicyService API is used to manage (list, create, delete,
 * edit) alert policies in Stackdriver Monitoring. An alerting policy is
 * a description of the conditions under which some aspect of your
 * system is considered to be "unhealthy" and the ways to notify
 * people or services about this state. In addition to using this API, alert
 * policies can also be managed through
 * [Stackdriver Monitoring](https://cloud.google.com/monitoring/docs/),
 * which can be reached by clicking the "Monitoring" tab in
 * [Cloud Console](https://console.cloud.google.com/).
 *
 * @class
 * @memberof v3
 */
class AlertPolicyServiceClient {
  /**
   * Construct an instance of AlertPolicyServiceClient.
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
    let gaxGrpc = new gax.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    let clientHeader = [
      `gl-node/${process.version}`,
      `grpc/${gaxGrpc.grpcVersion}`,
      `gax/${gax.version}`,
      `gapic/${VERSION}`,
    ];
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    let protos = merge(
      {},
      gaxGrpc.loadProto(
        path.join(__dirname, '..', '..', 'protos'),
        'google/monitoring/v3/alert_service.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
      alertPolicyPathTemplate: new gax.PathTemplate(
        'projects/{project}/alertPolicies/{alert_policy}'
      ),
      alertPolicyConditionPathTemplate: new gax.PathTemplate(
        'projects/{project}/alertPolicies/{alert_policy}/conditions/{condition}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listAlertPolicies: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'alertPolicies'
      ),
    };

    // Put together the default options sent with requests.
    let defaults = gaxGrpc.constructSettings(
      'google.monitoring.v3.AlertPolicyService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.monitoring.v3.AlertPolicyService.
    let alertPolicyServiceStub = gaxGrpc.createStub(
      protos.google.monitoring.v3.AlertPolicyService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    let alertPolicyServiceStubMethods = [
      'listAlertPolicies',
      'getAlertPolicy',
      'createAlertPolicy',
      'deleteAlertPolicy',
      'updateAlertPolicy',
    ];
    for (let methodName of alertPolicyServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        alertPolicyServiceStub.then(
          stub =>
            function() {
              let args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
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
    return 'monitoring.googleapis.com';
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
      'https://www.googleapis.com/auth/monitoring',
      'https://www.googleapis.com/auth/monitoring.read',
      'https://www.googleapis.com/auth/monitoring.write',
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
   * Lists the existing alerting policies for the project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The project whose alert policies are to be listed. The format is
   *
   *       projects/[PROJECT_ID]
   *
   *   Note that this field names the parent container in which the alerting
   *   policies to be listed are stored. To retrieve a single alerting policy
   *   by name, use the
   *   GetAlertPolicy
   *   operation, instead.
   * @param {string} [request.filter]
   *   If provided, this field specifies the criteria that must be met by
   *   alert policies to be included in the response.
   *
   *   For more details, see [sorting and
   *   filtering](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
   * @param {string} [request.orderBy]
   *   A comma-separated list of fields by which to sort the result. Supports
   *   the same set of field references as the `filter` field. Entries can be
   *   prefixed with a minus sign to sort by the field in descending order.
   *
   *   For more details, see [sorting and
   *   filtering](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
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
   *   The second parameter to the callback is Array of [AlertPolicy]{@link google.monitoring.v3.AlertPolicy}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListAlertPoliciesResponse]{@link google.monitoring.v3.ListAlertPoliciesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [AlertPolicy]{@link google.monitoring.v3.AlertPolicy}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [AlertPolicy]{@link google.monitoring.v3.AlertPolicy} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListAlertPoliciesResponse]{@link google.monitoring.v3.ListAlertPoliciesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.AlertPolicyServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedName = client.projectPath('[PROJECT]');
   *
   * client.listAlertPolicies({name: formattedName})
   *   .then(responses => {
   *     var resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * var formattedName = client.projectPath('[PROJECT]');
   *
   *
   * var options = {autoPaginate: false};
   * var callback = responses => {
   *   // The actual resources in a response.
   *   var resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   var nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // var rawResponse = responses[2];
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listAlertPolicies(nextRequest, options).then(callback);
   *   }
   * }
   * client.listAlertPolicies({name: formattedName}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listAlertPolicies(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listAlertPolicies(request, options, callback);
  }

  /**
   * Equivalent to {@link listAlertPolicies}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listAlertPolicies} continuously
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
   *   The project whose alert policies are to be listed. The format is
   *
   *       projects/[PROJECT_ID]
   *
   *   Note that this field names the parent container in which the alerting
   *   policies to be listed are stored. To retrieve a single alerting policy
   *   by name, use the
   *   GetAlertPolicy
   *   operation, instead.
   * @param {string} [request.filter]
   *   If provided, this field specifies the criteria that must be met by
   *   alert policies to be included in the response.
   *
   *   For more details, see [sorting and
   *   filtering](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
   * @param {string} [request.orderBy]
   *   A comma-separated list of fields by which to sort the result. Supports
   *   the same set of field references as the `filter` field. Entries can be
   *   prefixed with a minus sign to sort by the field in descending order.
   *
   *   For more details, see [sorting and
   *   filtering](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
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
   *   An object stream which emits an object representing [AlertPolicy]{@link google.monitoring.v3.AlertPolicy} on 'data' event.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.AlertPolicyServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.projectPath('[PROJECT]');
   * client.listAlertPoliciesStream({name: formattedName})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listAlertPoliciesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listAlertPolicies.createStream(
      this._innerApiCalls.listAlertPolicies,
      request,
      options
    );
  }

  /**
   * Gets a single alerting policy.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The alerting policy to retrieve. The format is
   *
   *       projects/[PROJECT_ID]/alertPolicies/[ALERT_POLICY_ID]
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [AlertPolicy]{@link google.monitoring.v3.AlertPolicy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [AlertPolicy]{@link google.monitoring.v3.AlertPolicy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.AlertPolicyServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.alertPolicyPath('[PROJECT]', '[ALERT_POLICY]');
   * client.getAlertPolicy({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getAlertPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getAlertPolicy(request, options, callback);
  }

  /**
   * Creates a new alerting policy.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The project in which to create the alerting policy. The format is
   *   `projects/[PROJECT_ID]`.
   *
   *   Note that this field names the parent container in which the alerting
   *   policy will be written, not the name of the created policy. The alerting
   *   policy that is returned will have a name that contains a normalized
   *   representation of this name as a prefix but adds a suffix of the form
   *   `/alertPolicies/[POLICY_ID]`, identifying the policy in the container.
   * @param {Object} request.alertPolicy
   *   The requested alerting policy. You should omit the `name` field in this
   *   policy. The name will be returned in the new policy, including
   *   a new [ALERT_POLICY_ID] value.
   *
   *   This object should have the same structure as [AlertPolicy]{@link google.monitoring.v3.AlertPolicy}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [AlertPolicy]{@link google.monitoring.v3.AlertPolicy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [AlertPolicy]{@link google.monitoring.v3.AlertPolicy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.AlertPolicyServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.projectPath('[PROJECT]');
   * var alertPolicy = {};
   * var request = {
   *   name: formattedName,
   *   alertPolicy: alertPolicy,
   * };
   * client.createAlertPolicy(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createAlertPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createAlertPolicy(request, options, callback);
  }

  /**
   * Deletes an alerting policy.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The alerting policy to delete. The format is:
   *
   *       projects/[PROJECT_ID]/alertPolicies/[ALERT_POLICY_ID]
   *
   *   For more information, see AlertPolicy.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.AlertPolicyServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.alertPolicyPath('[PROJECT]', '[ALERT_POLICY]');
   * client.deleteAlertPolicy({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteAlertPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteAlertPolicy(request, options, callback);
  }

  /**
   * Updates an alerting policy. You can either replace the entire policy with
   * a new one or replace only certain fields in the current alerting policy by
   * specifying the fields to be updated via `updateMask`. Returns the
   * updated alerting policy.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.alertPolicy
   *   Required. The updated alerting policy or the updated values for the
   *   fields listed in `update_mask`.
   *   If `update_mask` is not empty, any fields in this policy that are
   *   not in `update_mask` are ignored.
   *
   *   This object should have the same structure as [AlertPolicy]{@link google.monitoring.v3.AlertPolicy}
   * @param {Object} [request.updateMask]
   *   Optional. A list of alerting policy field names. If this field is not
   *   empty, each listed field in the existing alerting policy is set to the
   *   value of the corresponding field in the supplied policy (`alert_policy`),
   *   or to the field's default value if the field is not in the supplied
   *   alerting policy.  Fields not listed retain their previous value.
   *
   *   Examples of valid field masks include `display_name`, `documentation`,
   *   `documentation.content`, `documentation.mime_type`, `user_labels`,
   *   `user_label.nameofkey`, `enabled`, `conditions`, `combiner`, etc.
   *
   *   If this field is empty, then the supplied alerting policy replaces the
   *   existing policy. It is the same as deleting the existing policy and
   *   adding the supplied policy, except for the following:
   *
   *   +   The new policy will have the same `[ALERT_POLICY_ID]` as the former
   *       policy. This gives you continuity with the former policy in your
   *       notifications and incidents.
   *   +   Conditions in the new policy will keep their former `[CONDITION_ID]` if
   *       the supplied condition includes the `name` field with that
   *       `[CONDITION_ID]`. If the supplied condition omits the `name` field,
   *       then a new `[CONDITION_ID]` is created.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [AlertPolicy]{@link google.monitoring.v3.AlertPolicy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [AlertPolicy]{@link google.monitoring.v3.AlertPolicy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.AlertPolicyServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var alertPolicy = {};
   * client.updateAlertPolicy({alertPolicy: alertPolicy})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateAlertPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateAlertPolicy(request, options, callback);
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
   * Return a fully-qualified alert_policy resource name string.
   *
   * @param {String} project
   * @param {String} alertPolicy
   * @returns {String}
   */
  alertPolicyPath(project, alertPolicy) {
    return this._pathTemplates.alertPolicyPathTemplate.render({
      project: project,
      alert_policy: alertPolicy,
    });
  }

  /**
   * Return a fully-qualified alert_policy_condition resource name string.
   *
   * @param {String} project
   * @param {String} alertPolicy
   * @param {String} condition
   * @returns {String}
   */
  alertPolicyConditionPath(project, alertPolicy, condition) {
    return this._pathTemplates.alertPolicyConditionPathTemplate.render({
      project: project,
      alert_policy: alertPolicy,
      condition: condition,
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

  /**
   * Parse the alertPolicyName from a alert_policy resource.
   *
   * @param {String} alertPolicyName
   *   A fully-qualified path representing a alert_policy resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromAlertPolicyName(alertPolicyName) {
    return this._pathTemplates.alertPolicyPathTemplate.match(alertPolicyName)
      .project;
  }

  /**
   * Parse the alertPolicyName from a alert_policy resource.
   *
   * @param {String} alertPolicyName
   *   A fully-qualified path representing a alert_policy resources.
   * @returns {String} - A string representing the alert_policy.
   */
  matchAlertPolicyFromAlertPolicyName(alertPolicyName) {
    return this._pathTemplates.alertPolicyPathTemplate.match(alertPolicyName)
      .alert_policy;
  }

  /**
   * Parse the alertPolicyConditionName from a alert_policy_condition resource.
   *
   * @param {String} alertPolicyConditionName
   *   A fully-qualified path representing a alert_policy_condition resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromAlertPolicyConditionName(alertPolicyConditionName) {
    return this._pathTemplates.alertPolicyConditionPathTemplate.match(
      alertPolicyConditionName
    ).project;
  }

  /**
   * Parse the alertPolicyConditionName from a alert_policy_condition resource.
   *
   * @param {String} alertPolicyConditionName
   *   A fully-qualified path representing a alert_policy_condition resources.
   * @returns {String} - A string representing the alert_policy.
   */
  matchAlertPolicyFromAlertPolicyConditionName(alertPolicyConditionName) {
    return this._pathTemplates.alertPolicyConditionPathTemplate.match(
      alertPolicyConditionName
    ).alert_policy;
  }

  /**
   * Parse the alertPolicyConditionName from a alert_policy_condition resource.
   *
   * @param {String} alertPolicyConditionName
   *   A fully-qualified path representing a alert_policy_condition resources.
   * @returns {String} - A string representing the condition.
   */
  matchConditionFromAlertPolicyConditionName(alertPolicyConditionName) {
    return this._pathTemplates.alertPolicyConditionPathTemplate.match(
      alertPolicyConditionName
    ).condition;
  }
}

module.exports = AlertPolicyServiceClient;
