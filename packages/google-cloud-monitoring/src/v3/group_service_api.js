/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * EDITING INSTRUCTIONS
 * This file was generated from the file
 * https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/group_service.proto,
 * and updates to that file get reflected here through a refresh process.
 * For the short term, the refresh process will only be runnable by Google
 * engineers.
 *
 * The only allowed edits are to method and file documentation. A 3-way
 * merge preserves those additions if the generated source changes.
 */
/* TODO: introduce line-wrapping so that it never exceeds the limit. */
/* jscs: disable maximumLineLength */
'use strict';

var configData = require('./group_service_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'monitoring.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';


var PAGE_DESCRIPTORS = {
  listGroups: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'group'),
  listGroupMembers: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'members')
};

/**
 * The scopes needed to make gRPC calls to all of the methods defined in
 * this service.
 */
var ALL_SCOPES = [
];

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
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link groupServiceApi}
 *
 * @example
 * var monitoringV3 = require('@google-cloud/monitoring').v3({
 *   // optional auth parameters.
 * });
 * var api = monitoringV3.groupServiceApi();
 *
 * @class
 */
function GroupServiceApi(gaxGrpc, grpcClients, opts) {
  opts = opts || {};
  var servicePath = opts.servicePath || SERVICE_ADDRESS;
  var port = opts.port || DEFAULT_SERVICE_PORT;
  var sslCreds = opts.sslCreds || null;
  var clientConfig = opts.clientConfig || {};
  var appName = opts.appName || 'gax';
  var appVersion = opts.appVersion || gax.version;

  var googleApiClient = [
    appName + '/' + appVersion,
    CODE_GEN_NAME_VERSION,
    'gax/' + gax.version,
    'nodejs/' + process.version].join(' ');

  var defaults = gaxGrpc.constructSettings(
      'google.monitoring.v3.GroupService',
      configData,
      clientConfig,
      PAGE_DESCRIPTORS,
      null,
      {'x-goog-api-client': googleApiClient});

  var groupServiceStub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClients.groupServiceClient.google.monitoring.v3.GroupService,
      {sslCreds: sslCreds});
  var groupServiceStubMethods = [
    'listGroups',
    'getGroup',
    'createGroup',
    'updateGroup',
    'deleteGroup',
    'listGroupMembers'
  ];
  groupServiceStubMethods.forEach(function(methodName) {
    this['_' + methodName] = gax.createApiCall(
      groupServiceStub.then(function(groupServiceStub) {
        return groupServiceStub[methodName].bind(groupServiceStub);
      }),
      defaults[methodName]);
  }.bind(this));
}

// Path templates

var PROJECT_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}');

var GROUP_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/groups/{group}');

/**
 * Returns a fully-qualified project resource name string.
 * @param {String} project
 * @returns {String}
 */
GroupServiceApi.prototype.projectPath = function(project) {
  return PROJECT_PATH_TEMPLATE.render({
    project: project
  });
};

/**
 * Parses the projectName from a project resource.
 * @param {String} projectName
 *   A fully-qualified path representing a project resources.
 * @returns {String} - A string representing the project.
 */
GroupServiceApi.prototype.matchProjectFromProjectName = function(projectName) {
  return PROJECT_PATH_TEMPLATE.match(projectName).project;
};

/**
 * Returns a fully-qualified group resource name string.
 * @param {String} project
 * @param {String} group
 * @returns {String}
 */
GroupServiceApi.prototype.groupPath = function(project, group) {
  return GROUP_PATH_TEMPLATE.render({
    project: project,
    group: group
  });
};

/**
 * Parses the groupName from a group resource.
 * @param {String} groupName
 *   A fully-qualified path representing a group resources.
 * @returns {String} - A string representing the project.
 */
GroupServiceApi.prototype.matchProjectFromGroupName = function(groupName) {
  return GROUP_PATH_TEMPLATE.match(groupName).project;
};

/**
 * Parses the groupName from a group resource.
 * @param {String} groupName
 *   A fully-qualified path representing a group resources.
 * @returns {String} - A string representing the group.
 */
GroupServiceApi.prototype.matchGroupFromGroupName = function(groupName) {
  return GROUP_PATH_TEMPLATE.match(groupName).group;
};

// Service calls

/**
 * Lists the existing groups.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The project whose groups are to be listed. The format is
 *   `"projects/{project_id_or_number}"`.
 * @param {string=} request.childrenOfGroup
 *   A group name: `"projects/{project_id_or_number}/groups/{group_id}"`.
 *   Returns groups whose `parentName` field contains the group
 *   name.  If no groups have this parent, the results are empty.
 * @param {string=} request.ancestorsOfGroup
 *   A group name: `"projects/{project_id_or_number}/groups/{group_id}"`.
 *   Returns groups that are ancestors of the specified group.
 *   The groups are returned in order, starting with the immediate parent and
 *   ending with the most distant ancestor.  If the specified group has no
 *   immediate parent, the results are empty.
 * @param {string=} request.descendantsOfGroup
 *   A group name: `"projects/{project_id_or_number}/groups/{group_id}"`.
 *   Returns the descendants of the specified group.  This is a superset of
 *   the results returned by the `childrenOfGroup` filter, and includes
 *   children-of-children, and so forth.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object, ?string)=} callback
 *   When specified, the results are not streamed but this callback
 *   will be called with the response object representing [ListGroupsResponse]{@link ListGroupsResponse}.
 *   The third item will be set if the response contains the token for the further results
 *   and can be reused to `pageToken` field in the options in the next request.
 * @returns {Stream|Promise}
 *   An object stream which emits an object representing
 *   [Group]{@link Group} on 'data' event.
 *   When the callback is specified or streaming is suppressed through options,
 *   it will return a promise that resolves to the response object. The promise
 *   has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = monitoringV3.groupServiceApi();
 * var formattedName = api.projectPath("[PROJECT]");
 * // Iterate over all elements.
 * api.listGroups({name: formattedName}).on('data', function(element) {
 *     // doThingsWith(element)
 * });
 *
 * // Or obtain the paged response through the callback.
 * function callback(err, response, nextPageToken) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 *     if (nextPageToken) {
 *         // fetch the next page.
 *         api.listGroups({name: formattedName}, {pageToken: nextPageToken}, callback);
 *     }
 * }
 * api.listGroups({name: formattedName}, {flattenPages: false}, callback);
 */
GroupServiceApi.prototype.listGroups = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._listGroups(request, options, callback);
};

/**
 * Gets a single group.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The group to retrieve. The format is
 *   `"projects/{project_id_or_number}/groups/{group_id}"`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Group]{@link Group}
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = monitoringV3.groupServiceApi();
 * var formattedName = api.groupPath("[PROJECT]", "[GROUP]");
 * api.getGroup({name: formattedName}).then(function(response) {
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
GroupServiceApi.prototype.getGroup = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._getGroup(request, options, callback);
};

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
 *   This object should have the same structure as [Group]{@link Group}
 * @param {boolean=} request.validateOnly
 *   If true, validate this request but do not create the group.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Group]{@link Group}
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = monitoringV3.groupServiceApi();
 * var formattedName = api.projectPath("[PROJECT]");
 * var group = {};
 * var request = {
 *     name: formattedName,
 *     group: group
 * };
 * api.createGroup(request).then(function(response) {
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
GroupServiceApi.prototype.createGroup = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._createGroup(request, options, callback);
};

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
 *   This object should have the same structure as [Group]{@link Group}
 * @param {boolean=} request.validateOnly
 *   If true, validate this request but do not update the existing group.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Group]{@link Group}
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = monitoringV3.groupServiceApi();
 * var group = {};
 * api.updateGroup({group: group}).then(function(response) {
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
GroupServiceApi.prototype.updateGroup = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._updateGroup(request, options, callback);
};

/**
 * Deletes an existing group.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The group to delete. The format is
 *   `"projects/{project_id_or_number}/groups/{group_id}"`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error)=} callback
 *   The function which will be called with the result of the API call.
 * @returns {Promise} - The promise which resolves to the response object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = monitoringV3.groupServiceApi();
 * var formattedName = api.groupPath("[PROJECT]", "[GROUP]");
 * api.deleteGroup({name: formattedName}).catch(function(err) {
 *     console.error(err);
 * });
 */
GroupServiceApi.prototype.deleteGroup = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._deleteGroup(request, options, callback);
};

/**
 * Lists the monitored resources that are members of a group.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The group whose members are listed. The format is
 *   `"projects/{project_id_or_number}/groups/{group_id}"`.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {string=} request.filter
 *   An optional [list filter](https://cloud.google.com/monitoring/api/learn_more#filtering) describing
 *   the members to be returned.  The filter may reference the type, labels, and
 *   metadata of monitored resources that comprise the group.
 *   For example, to return only resources representing Compute Engine VM
 *   instances, use this filter:
 *
 *       resource.type = "gce_instance"
 * @param {Object=} request.interval
 *   An optional time interval for which results should be returned. Only
 *   members that were part of the group during the specified interval are
 *   included in the response.  If no interval is provided then the group
 *   membership over the last minute is returned.
 *
 *   This object should have the same structure as [TimeInterval]{@link TimeInterval}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object, ?string)=} callback
 *   When specified, the results are not streamed but this callback
 *   will be called with the response object representing [ListGroupMembersResponse]{@link ListGroupMembersResponse}.
 *   The third item will be set if the response contains the token for the further results
 *   and can be reused to `pageToken` field in the options in the next request.
 * @returns {Stream|Promise}
 *   An object stream which emits an object representing
 *   [google.api.MonitoredResource]{@link external:"google.api.MonitoredResource"} on 'data' event.
 *   When the callback is specified or streaming is suppressed through options,
 *   it will return a promise that resolves to the response object. The promise
 *   has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var api = monitoringV3.groupServiceApi();
 * var formattedName = api.groupPath("[PROJECT]", "[GROUP]");
 * // Iterate over all elements.
 * api.listGroupMembers({name: formattedName}).on('data', function(element) {
 *     // doThingsWith(element)
 * });
 *
 * // Or obtain the paged response through the callback.
 * function callback(err, response, nextPageToken) {
 *     if (err) {
 *         console.error(err);
 *         return;
 *     }
 *     // doThingsWith(response)
 *     if (nextPageToken) {
 *         // fetch the next page.
 *         api.listGroupMembers({name: formattedName}, {pageToken: nextPageToken}, callback);
 *     }
 * }
 * api.listGroupMembers({name: formattedName}, {flattenPages: false}, callback);
 */
GroupServiceApi.prototype.listGroupMembers = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }
  return this._listGroupMembers(request, options, callback);
};

function GroupServiceApiBuilder(gaxGrpc) {
  if (!(this instanceof GroupServiceApiBuilder)) {
    return new GroupServiceApiBuilder(gaxGrpc);
  }

  var groupServiceClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/monitoring/v3/group_service.proto'
  }]);
  extend(this, groupServiceClient.google.monitoring.v3);

  var grpcClients = {
    groupServiceClient: groupServiceClient
  };

  /**
   * Build a new instance of {@link GroupServiceApi}.
   *
   * @param {Object=} opts - The optional parameters.
   * @param {String=} opts.servicePath
   *   The domain name of the API remote host.
   * @param {number=} opts.port
   *   The port on which to connect to the remote host.
   * @param {grpc.ClientCredentials=} opts.sslCreds
   *   A ClientCredentials for use with an SSL-enabled channel.
   * @param {Object=} opts.clientConfig
   *   The customized config to build the call settings. See
   *   {@link gax.constructSettings} for the format.
   * @param {number=} opts.appName
   *   The codename of the calling service.
   * @param {String=} opts.appVersion
   *   The version of the calling service.
   */
  this.groupServiceApi = function(opts) {
    return new GroupServiceApi(gaxGrpc, grpcClients, opts);
  };
  extend(this.groupServiceApi, GroupServiceApi);
}
module.exports = GroupServiceApiBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;
