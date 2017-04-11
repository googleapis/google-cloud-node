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
 * https://github.com/googleapis/googleapis/blob/master/google/spanner/admin/instance/v1/spanner_instance_admin.proto,
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

var configData = require('./instance_admin_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'spanner.googleapis.com.';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.7.1';

var PAGE_DESCRIPTORS = {
  listInstanceConfigs: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'instanceConfigs'),
  listInstances: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'instances')
};

/**
 * The scopes needed to make gRPC calls to all of the methods defined in
 * this service.
 */
var ALL_SCOPES = [
  'https://www.googleapis.com/auth/cloud-platform',
  'https://www.googleapis.com/auth/spanner.admin'
];

/**
 * Cloud Spanner Instance Admin API
 *
 * The Cloud Spanner Instance Admin API can be used to create, delete,
 * modify and list instances. Instances are dedicated Cloud Spanner serving
 * and storage resources to be used by Cloud Spanner databases.
 *
 * Each instance has a "configuration", which dictates where the
 * serving resources for the Cloud Spanner instance are located (e.g.,
 * US-central, Europe). Configurations are created by Google based on
 * resource availability.
 *
 * Cloud Spanner billing is based on the instances that exist and their
 * sizes. After an instance exists, there are no additional
 * per-database or per-operation charges for use of the instance
 * (though there may be additional network bandwidth charges).
 * Instances offer isolation: problems with databases in one instance
 * will not affect other instances. However, within an instance
 * databases can affect each other. For example, if one database in an
 * instance receives a lot of requests and consumes most of the
 * instance resources, fewer resources are available for other
 * databases in that instance, and their performance may suffer.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link instanceAdminClient}
 *
 * @example
 * var spannerV1 = require('@google-cloud/spanner').admin.instance.v1({
 *   // optional auth parameters.
 * });
 * var client = spannerV1.instanceAdminClient();
 *
 * @class
 */
function InstanceAdminClient(gaxGrpc, grpcClients, opts) {
  opts = extend({
    servicePath: SERVICE_ADDRESS,
    port: DEFAULT_SERVICE_PORT,
    clientConfig: {}
  }, opts);

  var googleApiClient = [
    'gl-node/' + process.versions.node
  ];
  if (opts.libName && opts.libVersion) {
    googleApiClient.push(opts.libName + '/' + opts.libVersion);
  }
  googleApiClient.push(
    CODE_GEN_NAME_VERSION,
    'gax/' + gax.version,
    'grpc/' + gaxGrpc.grpcVersion
  );


  this.operationsClient = new gax.lro({
    auth: gaxGrpc.auth,
    grpc: gaxGrpc.grpc
  }).operationsClient(opts);

  this.longrunningDescriptors = {
    createInstance: new gax.LongrunningDescriptor(
      this.operationsClient,
      grpcClients.google.spanner.admin.instance.v1.Instance.decode,
      grpcClients.google.spanner.admin.instance.v1.CreateInstanceMetadata.decode),
    updateInstance: new gax.LongrunningDescriptor(
      this.operationsClient,
      grpcClients.google.spanner.admin.instance.v1.Instance.decode,
      grpcClients.google.spanner.admin.instance.v1.UpdateInstanceMetadata.decode)
  };

  var defaults = gaxGrpc.constructSettings(
      'google.spanner.admin.instance.v1.InstanceAdmin',
      configData,
      opts.clientConfig,
      {'x-goog-api-client': googleApiClient.join(' ')});

  var self = this;

  this.auth = gaxGrpc.auth;
  var instanceAdminStub = gaxGrpc.createStub(
      grpcClients.google.spanner.admin.instance.v1.InstanceAdmin,
      opts);
  var instanceAdminStubMethods = [
    'listInstanceConfigs',
    'getInstanceConfig',
    'listInstances',
    'getInstance',
    'createInstance',
    'updateInstance',
    'deleteInstance',
    'setIamPolicy',
    'getIamPolicy',
    'testIamPermissions'
  ];
  instanceAdminStubMethods.forEach(function(methodName) {
    self['_' + methodName] = gax.createApiCall(
      instanceAdminStub.then(function(instanceAdminStub) {
        return function() {
          var args = Array.prototype.slice.call(arguments, 0);
          return instanceAdminStub[methodName].apply(instanceAdminStub, args);
        };
      }),
      defaults[methodName],
      PAGE_DESCRIPTORS[methodName] || self.longrunningDescriptors[methodName]);
  });
}

// Path templates

var PROJECT_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}');

var INSTANCE_CONFIG_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/instanceConfigs/{instance_config}');

var INSTANCE_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/instances/{instance}');

/**
 * Returns a fully-qualified project resource name string.
 * @param {String} project
 * @returns {String}
 */
InstanceAdminClient.prototype.projectPath = function(project) {
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
InstanceAdminClient.prototype.matchProjectFromProjectName = function(projectName) {
  return PROJECT_PATH_TEMPLATE.match(projectName).project;
};

/**
 * Returns a fully-qualified instance_config resource name string.
 * @param {String} project
 * @param {String} instanceConfig
 * @returns {String}
 */
InstanceAdminClient.prototype.instanceConfigPath = function(project, instanceConfig) {
  return INSTANCE_CONFIG_PATH_TEMPLATE.render({
    project: project,
    instance_config: instanceConfig
  });
};

/**
 * Parses the instanceConfigName from a instance_config resource.
 * @param {String} instanceConfigName
 *   A fully-qualified path representing a instance_config resources.
 * @returns {String} - A string representing the project.
 */
InstanceAdminClient.prototype.matchProjectFromInstanceConfigName = function(instanceConfigName) {
  return INSTANCE_CONFIG_PATH_TEMPLATE.match(instanceConfigName).project;
};

/**
 * Parses the instanceConfigName from a instance_config resource.
 * @param {String} instanceConfigName
 *   A fully-qualified path representing a instance_config resources.
 * @returns {String} - A string representing the instance_config.
 */
InstanceAdminClient.prototype.matchInstanceConfigFromInstanceConfigName = function(instanceConfigName) {
  return INSTANCE_CONFIG_PATH_TEMPLATE.match(instanceConfigName).instance_config;
};

/**
 * Returns a fully-qualified instance resource name string.
 * @param {String} project
 * @param {String} instance
 * @returns {String}
 */
InstanceAdminClient.prototype.instancePath = function(project, instance) {
  return INSTANCE_PATH_TEMPLATE.render({
    project: project,
    instance: instance
  });
};

/**
 * Parses the instanceName from a instance resource.
 * @param {String} instanceName
 *   A fully-qualified path representing a instance resources.
 * @returns {String} - A string representing the project.
 */
InstanceAdminClient.prototype.matchProjectFromInstanceName = function(instanceName) {
  return INSTANCE_PATH_TEMPLATE.match(instanceName).project;
};

/**
 * Parses the instanceName from a instance resource.
 * @param {String} instanceName
 *   A fully-qualified path representing a instance resources.
 * @returns {String} - A string representing the instance.
 */
InstanceAdminClient.prototype.matchInstanceFromInstanceName = function(instanceName) {
  return INSTANCE_PATH_TEMPLATE.match(instanceName).instance;
};

/**
 * Get the project ID used by this class.
 * @aram {function(Error, string)} callback - the callback to be called with
 *   the current project Id.
 */
InstanceAdminClient.prototype.getProjectId = function(callback) {
  return this.auth.getProjectId(callback);
};

// Service calls

/**
 * Lists the supported instance configurations for a given project.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The name of the project for which a list of supported instance
 *   configurations is requested. Values are of the form
 *   `projects/<project>`.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Array, ?Object, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is Array of [InstanceConfig]{@link InstanceConfig}.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListInstanceConfigsResponse]{@link ListInstanceConfigsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [InstanceConfig]{@link InstanceConfig}.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of [InstanceConfig]{@link InstanceConfig} in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListInstanceConfigsResponse]{@link ListInstanceConfigsResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.instanceAdminClient();
 * var formattedParent = client.projectPath("[PROJECT]");
 * // Iterate over all elements.
 * client.listInstanceConfigs({parent: formattedParent}).then(function(responses) {
 *     var resources = responses[0];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i])
 *     }
 * }).catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Or obtain the paged response.
 * var options = {autoPaginate: false};
 * function callback(responses) {
 *     // The actual resources in a response.
 *     var resources = responses[0];
 *     // The next request if the response shows there's more responses.
 *     var nextRequest = responses[1];
 *     // The actual response object, if necessary.
 *     // var rawResponse = responses[2];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i]);
 *     }
 *     if (nextRequest) {
 *         // Fetch the next page.
 *         return client.listInstanceConfigs(nextRequest, options).then(callback);
 *     }
 * }
 * client.listInstanceConfigs({parent: formattedParent}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
InstanceAdminClient.prototype.listInstanceConfigs = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listInstanceConfigs(request, options, callback);
};

/**
 * Equivalent to {@link listInstanceConfigs}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listInstanceConfigs} continuously
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
 *   Required. The name of the project for which a list of supported instance
 *   configurations is requested. Values are of the form
 *   `projects/<project>`.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @return {Stream}
 *   An object stream which emits an object representing [InstanceConfig]{@link InstanceConfig} on 'data' event.
 *
 * @example
 *
 * var client = spannerV1.instanceAdminClient();
 * var formattedParent = client.projectPath("[PROJECT]");
 * client.listInstanceConfigsStream({parent: formattedParent}).on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.error(err);
 * });
 */
InstanceAdminClient.prototype.listInstanceConfigsStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listInstanceConfigs.createStream(this._listInstanceConfigs, request, options);
};

/**
 * Gets information about a particular instance configuration.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The name of the requested instance configuration. Values are of
 *   the form `projects/<project>/instanceConfigs/<config>`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [InstanceConfig]{@link InstanceConfig}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [InstanceConfig]{@link InstanceConfig}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.instanceAdminClient();
 * var formattedName = client.instanceConfigPath("[PROJECT]", "[INSTANCE_CONFIG]");
 * client.getInstanceConfig({name: formattedName}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
InstanceAdminClient.prototype.getInstanceConfig = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._getInstanceConfig(request, options, callback);
};

/**
 * Lists all instances in the given project.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The name of the project for which a list of instances is
 *   requested. Values are of the form `projects/<project>`.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {string=} request.filter
 *   An expression for filtering the results of the request. Filter rules are
 *   case insensitive. The fields eligible for filtering are:
 *
 *     * name
 *     * display_name
 *     * labels.key where key is the name of a label
 *
 *   Some examples of using filters are:
 *
 *     * name:* --> The instance has a name.
 *     * name:Howl --> The instance's name contains the string "howl".
 *     * name:HOWL --> Equivalent to above.
 *     * NAME:howl --> Equivalent to above.
 *     * labels.env:* --> The instance has the label "env".
 *     * labels.env:dev --> The instance has the label "env" and the value of
 *                          the label contains the string "dev".
 *     * name:howl labels.env:dev --> The instance's name contains "howl" and
 *                                    it has the label "env" with its value
 *                                    containing "dev".
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Array, ?Object, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is Array of [Instance]{@link Instance}.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListInstancesResponse]{@link ListInstancesResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [Instance]{@link Instance}.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of [Instance]{@link Instance} in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListInstancesResponse]{@link ListInstancesResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.instanceAdminClient();
 * var formattedParent = client.projectPath("[PROJECT]");
 * // Iterate over all elements.
 * client.listInstances({parent: formattedParent}).then(function(responses) {
 *     var resources = responses[0];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i])
 *     }
 * }).catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Or obtain the paged response.
 * var options = {autoPaginate: false};
 * function callback(responses) {
 *     // The actual resources in a response.
 *     var resources = responses[0];
 *     // The next request if the response shows there's more responses.
 *     var nextRequest = responses[1];
 *     // The actual response object, if necessary.
 *     // var rawResponse = responses[2];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i]);
 *     }
 *     if (nextRequest) {
 *         // Fetch the next page.
 *         return client.listInstances(nextRequest, options).then(callback);
 *     }
 * }
 * client.listInstances({parent: formattedParent}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
InstanceAdminClient.prototype.listInstances = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listInstances(request, options, callback);
};

/**
 * Equivalent to {@link listInstances}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listInstances} continuously
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
 *   Required. The name of the project for which a list of instances is
 *   requested. Values are of the form `projects/<project>`.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {string=} request.filter
 *   An expression for filtering the results of the request. Filter rules are
 *   case insensitive. The fields eligible for filtering are:
 *
 *     * name
 *     * display_name
 *     * labels.key where key is the name of a label
 *
 *   Some examples of using filters are:
 *
 *     * name:* --> The instance has a name.
 *     * name:Howl --> The instance's name contains the string "howl".
 *     * name:HOWL --> Equivalent to above.
 *     * NAME:howl --> Equivalent to above.
 *     * labels.env:* --> The instance has the label "env".
 *     * labels.env:dev --> The instance has the label "env" and the value of
 *                          the label contains the string "dev".
 *     * name:howl labels.env:dev --> The instance's name contains "howl" and
 *                                    it has the label "env" with its value
 *                                    containing "dev".
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @return {Stream}
 *   An object stream which emits an object representing [Instance]{@link Instance} on 'data' event.
 *
 * @example
 *
 * var client = spannerV1.instanceAdminClient();
 * var formattedParent = client.projectPath("[PROJECT]");
 * client.listInstancesStream({parent: formattedParent}).on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.error(err);
 * });
 */
InstanceAdminClient.prototype.listInstancesStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listInstances.createStream(this._listInstances, request, options);
};

/**
 * Gets information about a particular instance.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The name of the requested instance. Values are of the form
 *   `projects/<project>/instances/<instance>`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Instance]{@link Instance}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Instance]{@link Instance}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.instanceAdminClient();
 * var formattedName = client.instancePath("[PROJECT]", "[INSTANCE]");
 * client.getInstance({name: formattedName}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
InstanceAdminClient.prototype.getInstance = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._getInstance(request, options, callback);
};

/**
 * Creates an instance and begins preparing it to begin serving. The
 * returned {@link long-running operation}
 * can be used to track the progress of preparing the new
 * instance. The instance name is assigned by the caller. If the
 * named instance already exists, `CreateInstance` returns
 * `ALREADY_EXISTS`.
 *
 * Immediately upon completion of this request:
 *
 *   * The instance is readable via the API, with all requested attributes
 *     but no allocated resources. Its state is `CREATING`.
 *
 * Until completion of the returned operation:
 *
 *   * Cancelling the operation renders the instance immediately unreadable
 *     via the API.
 *   * The instance can be deleted.
 *   * All other attempts to modify the instance are rejected.
 *
 * Upon completion of the returned operation:
 *
 *   * Billing for all successfully-allocated resources begins (some types
 *     may have lower than the requested levels).
 *   * Databases can be created in the instance.
 *   * The instance's allocated resource levels are readable via the API.
 *   * The instance's state becomes `READY`.
 *
 * The returned {@link long-running operation} will
 * have a name of the format `<instance_name>/operations/<operation_id>` and
 * can be used to track creation of the instance.  The
 * {@link metadata} field type is
 * {@link CreateInstanceMetadata}.
 * The {@link response} field type is
 * {@link Instance}, if successful.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The name of the project in which to create the instance. Values
 *   are of the form `projects/<project>`.
 * @param {string} request.instanceId
 *   Required. The ID of the instance to create.  Valid identifiers are of the
 *   form `[a-z][-a-z0-9]*[a-z0-9]` and must be between 6 and 30 characters in
 *   length.
 * @param {Object} request.instance
 *   Required. The instance to create.  The name may be omitted, but if
 *   specified must be `<parent>/instances/<instance_id>`.
 *
 *   This object should have the same structure as [Instance]{@link Instance}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.instanceAdminClient();
 * var formattedParent = client.projectPath("[PROJECT]");
 * var instanceId = '';
 * var instance = {};
 * var request = {
 *     parent: formattedParent,
 *     instanceId: instanceId,
 *     instance: instance
 * };
 *
 * // Handle the operation using the promise pattern.
 * client.createInstance(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Operation#promise starts polling for the completion of the LRO.
 *     return operation.promise();
 * }).then(function(responses) {
 *     // The final result of the operation.
 *     var result = responses[0];
 *
 *     // The metadata value of the completed operation.
 *     var metadata = responses[1];
 *
 *     // The response of the api call returning the complete operation.
 *     var finalApiResponse = responses[2];
 * }).catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Handle the operation using the event emitter pattern.
 * client.createInstance(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Adding a listener for the "complete" event starts polling for the
 *     // completion of the operation.
 *     operation.on('complete', function(result, metadata, finalApiResponse) {
 *       // doSomethingWith(result);
 *     });
 *
 *     // Adding a listener for the "progress" event causes the callback to be
 *     // called on any change in metadata when the operation is polled.
 *     operation.on('progress', function(metadata, apiResponse) {
 *       // doSomethingWith(metadata)
 *     })
 *
 *     // Adding a listener for the "error" event handles any errors found during polling.
 *     operation.on('error', function(err) {
 *       // throw(err);
 *     })
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
InstanceAdminClient.prototype.createInstance = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._createInstance(request, options, callback);
};

/**
 * Updates an instance, and begins allocating or releasing resources
 * as requested. The returned {@link long-running
 * operation} can be used to track the
 * progress of updating the instance. If the named instance does not
 * exist, returns `NOT_FOUND`.
 *
 * Immediately upon completion of this request:
 *
 *   * For resource types for which a decrease in the instance's allocation
 *     has been requested, billing is based on the newly-requested level.
 *
 * Until completion of the returned operation:
 *
 *   * Cancelling the operation sets its metadata's
 *     {@link cancel_time}, and begins
 *     restoring resources to their pre-request values. The operation
 *     is guaranteed to succeed at undoing all resource changes,
 *     after which point it terminates with a `CANCELLED` status.
 *   * All other attempts to modify the instance are rejected.
 *   * Reading the instance via the API continues to give the pre-request
 *     resource levels.
 *
 * Upon completion of the returned operation:
 *
 *   * Billing begins for all successfully-allocated resources (some types
 *     may have lower than the requested levels).
 *   * All newly-reserved resources are available for serving the instance's
 *     tables.
 *   * The instance's new resource levels are readable via the API.
 *
 * The returned {@link long-running operation} will
 * have a name of the format `<instance_name>/operations/<operation_id>` and
 * can be used to track the instance modification.  The
 * {@link metadata} field type is
 * {@link UpdateInstanceMetadata}.
 * The {@link response} field type is
 * {@link Instance}, if successful.
 *
 * Authorization requires `spanner.instances.update` permission on
 * resource {@link name}.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Object} request.instance
 *   Required. The instance to update, which must always include the instance
 *   name.  Otherwise, only fields mentioned in [][google.spanner.admin.instance.v1.UpdateInstanceRequest.field_mask] need be included.
 *
 *   This object should have the same structure as [Instance]{@link Instance}
 * @param {Object} request.fieldMask
 *   Required. A mask specifying which fields in [][google.spanner.admin.instance.v1.UpdateInstanceRequest.instance] should be updated.
 *   The field mask must always be specified; this prevents any future fields in
 *   [][google.spanner.admin.instance.v1.Instance] from being erased accidentally by clients that do not know
 *   about them.
 *
 *   This object should have the same structure as [google.protobuf.FieldMask]{@link external:"google.protobuf.FieldMask"}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.instanceAdminClient();
 * var instance = {};
 * var fieldMask = {};
 * var request = {
 *     instance: instance,
 *     fieldMask: fieldMask
 * };
 *
 * // Handle the operation using the promise pattern.
 * client.updateInstance(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Operation#promise starts polling for the completion of the LRO.
 *     return operation.promise();
 * }).then(function(responses) {
 *     // The final result of the operation.
 *     var result = responses[0];
 *
 *     // The metadata value of the completed operation.
 *     var metadata = responses[1];
 *
 *     // The response of the api call returning the complete operation.
 *     var finalApiResponse = responses[2];
 * }).catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Handle the operation using the event emitter pattern.
 * client.updateInstance(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Adding a listener for the "complete" event starts polling for the
 *     // completion of the operation.
 *     operation.on('complete', function(result, metadata, finalApiResponse) {
 *       // doSomethingWith(result);
 *     });
 *
 *     // Adding a listener for the "progress" event causes the callback to be
 *     // called on any change in metadata when the operation is polled.
 *     operation.on('progress', function(metadata, apiResponse) {
 *       // doSomethingWith(metadata)
 *     })
 *
 *     // Adding a listener for the "error" event handles any errors found during polling.
 *     operation.on('error', function(err) {
 *       // throw(err);
 *     })
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
InstanceAdminClient.prototype.updateInstance = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._updateInstance(request, options, callback);
};

/**
 * Deletes an instance.
 *
 * Immediately upon completion of the request:
 *
 *   * Billing ceases for all of the instance's reserved resources.
 *
 * Soon afterward:
 *
 *   * The instance and *all of its databases* immediately and
 *     irrevocably disappear from the API. All data in the databases
 *     is permanently deleted.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The name of the instance to be deleted. Values are of the form
 *   `projects/<project>/instances/<instance>`
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error)=} callback
 *   The function which will be called with the result of the API call.
 * @return {Promise} - The promise which resolves when API call finishes.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.instanceAdminClient();
 * var formattedName = client.instancePath("[PROJECT]", "[INSTANCE]");
 * client.deleteInstance({name: formattedName}).catch(function(err) {
 *     console.error(err);
 * });
 */
InstanceAdminClient.prototype.deleteInstance = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._deleteInstance(request, options, callback);
};

/**
 * Sets the access control policy on an instance resource. Replaces any
 * existing policy.
 *
 * Authorization requires `spanner.instances.setIamPolicy` on
 * {@link resource}.
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
 *   This object should have the same structure as [Policy]{@link Policy}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Policy]{@link Policy}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Policy]{@link Policy}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.instanceAdminClient();
 * var formattedResource = client.instancePath("[PROJECT]", "[INSTANCE]");
 * var policy = {};
 * var request = {
 *     resource: formattedResource,
 *     policy: policy
 * };
 * client.setIamPolicy(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
InstanceAdminClient.prototype.setIamPolicy = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._setIamPolicy(request, options, callback);
};

/**
 * Gets the access control policy for an instance resource. Returns an empty
 * policy if an instance exists but does not have a policy set.
 *
 * Authorization requires `spanner.instances.getIamPolicy` on
 * {@link resource}.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.resource
 *   REQUIRED: The resource for which the policy is being requested.
 *   `resource` is usually specified as a path. For example, a Project
 *   resource is specified as `projects/{project}`.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [Policy]{@link Policy}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Policy]{@link Policy}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.instanceAdminClient();
 * var formattedResource = client.instancePath("[PROJECT]", "[INSTANCE]");
 * client.getIamPolicy({resource: formattedResource}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
InstanceAdminClient.prototype.getIamPolicy = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._getIamPolicy(request, options, callback);
};

/**
 * Returns permissions that the caller has on the specified instance resource.
 *
 * Attempting this RPC on a non-existent Cloud Spanner instance resource will
 * result in a NOT_FOUND error if the user has `spanner.instances.list`
 * permission on the containing Google Cloud Project. Otherwise returns an
 * empty set of permissions.
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
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [TestIamPermissionsResponse]{@link TestIamPermissionsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [TestIamPermissionsResponse]{@link TestIamPermissionsResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = spannerV1.instanceAdminClient();
 * var formattedResource = client.instancePath("[PROJECT]", "[INSTANCE]");
 * var permissions = [];
 * var request = {
 *     resource: formattedResource,
 *     permissions: permissions
 * };
 * client.testIamPermissions(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
InstanceAdminClient.prototype.testIamPermissions = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._testIamPermissions(request, options, callback);
};

function InstanceAdminClientBuilder(gaxGrpc) {
  if (!(this instanceof InstanceAdminClientBuilder)) {
    return new InstanceAdminClientBuilder(gaxGrpc);
  }

  var instanceAdminClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/spanner/admin/instance/v1/spanner_instance_admin.proto'
  }]);
  extend(this, instanceAdminClient.google.spanner.admin.instance.v1);


  /**
   * Build a new instance of {@link InstanceAdminClient}.
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
   */
  this.instanceAdminClient = function(opts) {
    return new InstanceAdminClient(gaxGrpc, instanceAdminClient, opts);
  };
  extend(this.instanceAdminClient, InstanceAdminClient);
}
module.exports = InstanceAdminClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;
