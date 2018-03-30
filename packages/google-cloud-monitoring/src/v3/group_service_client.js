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

const gapicConfig = require('./group_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * The Group API lets you inspect and manage your
 * [groups](https://cloud.google.comgoogle.monitoring.v3.Group).
 *
 * A group is a named filter that is used to identify
 * a collection of monitored resources. Groups are typically used to
 * mirror the physical and/or logical topology of the environment.
 * Because group membership is computed dynamically, monitored
 * resources that are started in the future are automatically placed
 * in matching groups. By using a group to name monitored resources in,
 * for example, an alert policy, the target of that alert policy is
 * updated automatically as monitored resources are added and removed
 * from the infrastructure.
 *
 * @class
 * @memberof v3
 */
class GroupServiceClient {
  /**
   * Construct an instance of GroupServiceClient.
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
    var gaxGrpc = gax.grpc(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    var clientHeader = [
      `gl-node/${process.version.node}`,
      `grpc/${gaxGrpc.grpcVersion}`,
      `gax/${gax.version}`,
      `gapic/${VERSION}`,
    ];
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    var protos = merge(
      {},
      gaxGrpc.loadProto(
        path.join(__dirname, '..', '..', 'protos'),
        'google/monitoring/v3/group_service.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
      groupPathTemplate: new gax.PathTemplate(
        'projects/{project}/groups/{group}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listGroups: new gax.PageDescriptor('pageToken', 'nextPageToken', 'group'),
      listGroupMembers: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'members'
      ),
    };

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
      'google.monitoring.v3.GroupService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.monitoring.v3.GroupService.
    var groupServiceStub = gaxGrpc.createStub(
      protos.google.monitoring.v3.GroupService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var groupServiceStubMethods = [
      'listGroups',
      'getGroup',
      'createGroup',
      'updateGroup',
      'deleteGroup',
      'listGroupMembers',
    ];
    for (let methodName of groupServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        groupServiceStub.then(
          stub =>
            function() {
              var args = Array.prototype.slice.call(arguments, 0);
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
   * Lists the existing groups.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The project whose groups are to be listed. The format is
   *   `"projects/{project_id_or_number}"`.
   * @param {string} [request.childrenOfGroup]
   *   A group name: `"projects/{project_id_or_number}/groups/{group_id}"`.
   *   Returns groups whose `parentName` field contains the group
   *   name.  If no groups have this parent, the results are empty.
   * @param {string} [request.ancestorsOfGroup]
   *   A group name: `"projects/{project_id_or_number}/groups/{group_id}"`.
   *   Returns groups that are ancestors of the specified group.
   *   The groups are returned in order, starting with the immediate parent and
   *   ending with the most distant ancestor.  If the specified group has no
   *   immediate parent, the results are empty.
   * @param {string} [request.descendantsOfGroup]
   *   A group name: `"projects/{project_id_or_number}/groups/{group_id}"`.
   *   Returns the descendants of the specified group.  This is a superset of
   *   the results returned by the `childrenOfGroup` filter, and includes
   *   children-of-children, and so forth.
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
   *   The second parameter to the callback is Array of [Group]{@link google.monitoring.v3.Group}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListGroupsResponse]{@link google.monitoring.v3.ListGroupsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Group]{@link google.monitoring.v3.Group}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Group]{@link google.monitoring.v3.Group} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListGroupsResponse]{@link google.monitoring.v3.ListGroupsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.GroupServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedName = client.projectPath('[PROJECT]');
   *
   * client.listGroups({name: formattedName})
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
   *     return client.listGroups(nextRequest, options).then(callback);
   *   }
   * }
   * client.listGroups({name: formattedName}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listGroups(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listGroups(request, options, callback);
  }

  /**
   * Equivalent to {@link listGroups}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listGroups} continuously
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
   *   The project whose groups are to be listed. The format is
   *   `"projects/{project_id_or_number}"`.
   * @param {string} [request.childrenOfGroup]
   *   A group name: `"projects/{project_id_or_number}/groups/{group_id}"`.
   *   Returns groups whose `parentName` field contains the group
   *   name.  If no groups have this parent, the results are empty.
   * @param {string} [request.ancestorsOfGroup]
   *   A group name: `"projects/{project_id_or_number}/groups/{group_id}"`.
   *   Returns groups that are ancestors of the specified group.
   *   The groups are returned in order, starting with the immediate parent and
   *   ending with the most distant ancestor.  If the specified group has no
   *   immediate parent, the results are empty.
   * @param {string} [request.descendantsOfGroup]
   *   A group name: `"projects/{project_id_or_number}/groups/{group_id}"`.
   *   Returns the descendants of the specified group.  This is a superset of
   *   the results returned by the `childrenOfGroup` filter, and includes
   *   children-of-children, and so forth.
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
   *   An object stream which emits an object representing [Group]{@link google.monitoring.v3.Group} on 'data' event.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.GroupServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.projectPath('[PROJECT]');
   * client.listGroupsStream({name: formattedName})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listGroupsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listGroups.createStream(
      this._innerApiCalls.listGroups,
      request,
      options
    );
  }

  /**
   * Gets a single group.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The group to retrieve. The format is
   *   `"projects/{project_id_or_number}/groups/{group_id}"`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Group]{@link google.monitoring.v3.Group}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Group]{@link google.monitoring.v3.Group}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.GroupServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.groupPath('[PROJECT]', '[GROUP]');
   * client.getGroup({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getGroup(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getGroup(request, options, callback);
  }

  /**
   * Creates a new group.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The project in which to create the group. The format is
   *   `"projects/{project_id_or_number}"`.
   * @param {Object} request.group
   *   A group definition. It is an error to define the `name` field because
   *   the system assigns the name.
   *
   *   This object should have the same structure as [Group]{@link google.monitoring.v3.Group}
   * @param {boolean} [request.validateOnly]
   *   If true, validate this request but do not create the group.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Group]{@link google.monitoring.v3.Group}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Group]{@link google.monitoring.v3.Group}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.GroupServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.projectPath('[PROJECT]');
   * var group = {};
   * var request = {
   *   name: formattedName,
   *   group: group,
   * };
   * client.createGroup(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createGroup(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createGroup(request, options, callback);
  }

  /**
   * Updates an existing group.
   * You can change any group attributes except `name`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.group
   *   The new definition of the group.  All fields of the existing group,
   *   excepting `name`, are replaced with the corresponding fields of this group.
   *
   *   This object should have the same structure as [Group]{@link google.monitoring.v3.Group}
   * @param {boolean} [request.validateOnly]
   *   If true, validate this request but do not update the existing group.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Group]{@link google.monitoring.v3.Group}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Group]{@link google.monitoring.v3.Group}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.GroupServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var group = {};
   * client.updateGroup({group: group})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateGroup(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateGroup(request, options, callback);
  }

  /**
   * Deletes an existing group.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The group to delete. The format is
   *   `"projects/{project_id_or_number}/groups/{group_id}"`.
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
   * var client = new monitoring.v3.GroupServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.groupPath('[PROJECT]', '[GROUP]');
   * client.deleteGroup({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteGroup(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteGroup(request, options, callback);
  }

  /**
   * Lists the monitored resources that are members of a group.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The group whose members are listed. The format is
   *   `"projects/{project_id_or_number}/groups/{group_id}"`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.filter]
   *   An optional [list filter](https://cloud.google.com/monitoring/api/learn_more#filtering) describing
   *   the members to be returned.  The filter may reference the type, labels, and
   *   metadata of monitored resources that comprise the group.
   *   For example, to return only resources representing Compute Engine VM
   *   instances, use this filter:
   *
   *       resource.type = "gce_instance"
   * @param {Object} [request.interval]
   *   An optional time interval for which results should be returned. Only
   *   members that were part of the group during the specified interval are
   *   included in the response.  If no interval is provided then the group
   *   membership over the last minute is returned.
   *
   *   This object should have the same structure as [TimeInterval]{@link google.monitoring.v3.TimeInterval}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [MonitoredResource]{@link google.api.MonitoredResource}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListGroupMembersResponse]{@link google.monitoring.v3.ListGroupMembersResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [MonitoredResource]{@link google.api.MonitoredResource}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [MonitoredResource]{@link google.api.MonitoredResource} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListGroupMembersResponse]{@link google.monitoring.v3.ListGroupMembersResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.GroupServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedName = client.groupPath('[PROJECT]', '[GROUP]');
   *
   * client.listGroupMembers({name: formattedName})
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
   * var formattedName = client.groupPath('[PROJECT]', '[GROUP]');
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
   *     return client.listGroupMembers(nextRequest, options).then(callback);
   *   }
   * }
   * client.listGroupMembers({name: formattedName}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listGroupMembers(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listGroupMembers(request, options, callback);
  }

  /**
   * Equivalent to {@link listGroupMembers}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listGroupMembers} continuously
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
   *   The group whose members are listed. The format is
   *   `"projects/{project_id_or_number}/groups/{group_id}"`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.filter]
   *   An optional [list filter](https://cloud.google.com/monitoring/api/learn_more#filtering) describing
   *   the members to be returned.  The filter may reference the type, labels, and
   *   metadata of monitored resources that comprise the group.
   *   For example, to return only resources representing Compute Engine VM
   *   instances, use this filter:
   *
   *       resource.type = "gce_instance"
   * @param {Object} [request.interval]
   *   An optional time interval for which results should be returned. Only
   *   members that were part of the group during the specified interval are
   *   included in the response.  If no interval is provided then the group
   *   membership over the last minute is returned.
   *
   *   This object should have the same structure as [TimeInterval]{@link google.monitoring.v3.TimeInterval}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [MonitoredResource]{@link google.api.MonitoredResource} on 'data' event.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * var client = new monitoring.v3.GroupServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.groupPath('[PROJECT]', '[GROUP]');
   * client.listGroupMembersStream({name: formattedName})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listGroupMembersStream(request, options) {
    options = options || {};

    return this._descriptors.page.listGroupMembers.createStream(
      this._innerApiCalls.listGroupMembers,
      request,
      options
    );
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
   * Return a fully-qualified group resource name string.
   *
   * @param {String} project
   * @param {String} group
   * @returns {String}
   */
  groupPath(project, group) {
    return this._pathTemplates.groupPathTemplate.render({
      project: project,
      group: group,
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
   * Parse the groupName from a group resource.
   *
   * @param {String} groupName
   *   A fully-qualified path representing a group resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromGroupName(groupName) {
    return this._pathTemplates.groupPathTemplate.match(groupName).project;
  }

  /**
   * Parse the groupName from a group resource.
   *
   * @param {String} groupName
   *   A fully-qualified path representing a group resources.
   * @returns {String} - A string representing the group.
   */
  matchGroupFromGroupName(groupName) {
    return this._pathTemplates.groupPathTemplate.match(groupName).group;
  }
}

module.exports = GroupServiceClient;
