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

const gapicConfig = require('./cloud_tasks_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Cloud Tasks allows developers to manage the execution of background
 * work in their applications.
 *
 * @class
 * @memberof v2beta2
 */
class CloudTasksClient {
  /**
   * Construct an instance of CloudTasksClient.
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
    var gaxGrpc = new gax.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    var clientHeader = [
      `gl-node/${process.version}`,
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
        'google/cloud/tasks/v2beta2/cloudtasks.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
      locationPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}'
      ),
      queuePathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/queues/{queue}'
      ),
      taskPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/queues/{queue}/tasks/{task}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listQueues: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'queues'
      ),
      listTasks: new gax.PageDescriptor('pageToken', 'nextPageToken', 'tasks'),
    };

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
      'google.cloud.tasks.v2beta2.CloudTasks',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.tasks.v2beta2.CloudTasks.
    var cloudTasksStub = gaxGrpc.createStub(
      protos.google.cloud.tasks.v2beta2.CloudTasks,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var cloudTasksStubMethods = [
      'listQueues',
      'getQueue',
      'createQueue',
      'updateQueue',
      'deleteQueue',
      'purgeQueue',
      'pauseQueue',
      'resumeQueue',
      'getIamPolicy',
      'setIamPolicy',
      'testIamPermissions',
      'listTasks',
      'getTask',
      'createTask',
      'deleteTask',
      'leaseTasks',
      'acknowledgeTask',
      'renewLease',
      'cancelLease',
      'runTask',
    ];
    for (let methodName of cloudTasksStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        cloudTasksStub.then(
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
    return 'cloudtasks.googleapis.com';
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
   * Lists queues.
   *
   * Queues are returned in lexicographical order.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The location name.
   *   For example: `projects/PROJECT_ID/locations/LOCATION_ID`
   * @param {string} [request.filter]
   *   `filter` can be used to specify a subset of queues. Any Queue
   *   field can be used as a filter and several operators as supported.
   *   For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as
   *   described in
   *   [Stackdriver's Advanced Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
   *
   *   Sample filter "app_engine_http_target: *".
   *
   *   Note that using filters might cause fewer queues than the
   *   requested_page size to be returned.
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
   *   The second parameter to the callback is Array of [Queue]{@link google.cloud.tasks.v2beta2.Queue}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListQueuesResponse]{@link google.cloud.tasks.v2beta2.ListQueuesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Queue]{@link google.cloud.tasks.v2beta2.Queue}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Queue]{@link google.cloud.tasks.v2beta2.Queue} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListQueuesResponse]{@link google.cloud.tasks.v2beta2.ListQueuesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listQueues({parent: formattedParent})
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
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
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
   *     return client.listQueues(nextRequest, options).then(callback);
   *   }
   * }
   * client.listQueues({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listQueues(request, options, callback) {
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

    return this._innerApiCalls.listQueues(request, options, callback);
  }

  /**
   * Equivalent to {@link listQueues}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listQueues} continuously
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
   *   The location name.
   *   For example: `projects/PROJECT_ID/locations/LOCATION_ID`
   * @param {string} [request.filter]
   *   `filter` can be used to specify a subset of queues. Any Queue
   *   field can be used as a filter and several operators as supported.
   *   For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as
   *   described in
   *   [Stackdriver's Advanced Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
   *
   *   Sample filter "app_engine_http_target: *".
   *
   *   Note that using filters might cause fewer queues than the
   *   requested_page size to be returned.
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
   *   An object stream which emits an object representing [Queue]{@link google.cloud.tasks.v2beta2.Queue} on 'data' event.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * client.listQueuesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listQueuesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listQueues.createStream(
      this._innerApiCalls.listQueues,
      request,
      options
    );
  }

  /**
   * Gets a queue.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The resource name of the queue. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Queue]{@link google.cloud.tasks.v2beta2.Queue}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Queue]{@link google.cloud.tasks.v2beta2.Queue}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * client.getQueue({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getQueue(request, options, callback) {
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

    return this._innerApiCalls.getQueue(request, options, callback);
  }

  /**
   * Creates a queue.
   *
   * Queues created with this method allow tasks to live for a maximum of 31
   * days. After a task is 31 days old, the task will be deleted regardless of whether
   * it was dispatched or not.
   *
   * WARNING: Using this method may have unintended side effects if you are
   * using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
   * Read
   * [Overview of Queue Management and queue.yaml](https://cloud.google.com/cloud-tasks/docs/queue-yaml)
   * before using this method.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The location name in which the queue will be created.
   *   For example: `projects/PROJECT_ID/locations/LOCATION_ID`
   *
   *   The list of allowed locations can be obtained by calling Cloud
   *   Tasks' implementation of
   *   ListLocations.
   * @param {Object} request.queue
   *   Required.
   *
   *   The queue to create.
   *
   *   Queue's name cannot be the same as an existing queue.
   *
   *   This object should have the same structure as [Queue]{@link google.cloud.tasks.v2beta2.Queue}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Queue]{@link google.cloud.tasks.v2beta2.Queue}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Queue]{@link google.cloud.tasks.v2beta2.Queue}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * var queue = {};
   * var request = {
   *   parent: formattedParent,
   *   queue: queue,
   * };
   * client.createQueue(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createQueue(request, options, callback) {
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

    return this._innerApiCalls.createQueue(request, options, callback);
  }

  /**
   * Updates a queue.
   *
   * This method creates the queue if it does not exist and updates
   * the queue if it does exist.
   *
   * Queues created with this method allow tasks to live for a maximum of 31
   * days. After a task is 31 days old, the task will be deleted regardless of whether
   * it was dispatched or not.
   *
   * WARNING: Using this method may have unintended side effects if you are
   * using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
   * Read
   * [Overview of Queue Management and queue.yaml](https://cloud.google.com/cloud-tasks/docs/queue-yaml)
   * before using this method.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.queue
   *   Required.
   *
   *   The queue to create or update.
   *
   *   The queue's name must be specified.
   *
   *   Output only fields cannot be modified using UpdateQueue.
   *   Any value specified for an output only field will be ignored.
   *   The queue's name cannot be changed.
   *
   *   This object should have the same structure as [Queue]{@link google.cloud.tasks.v2beta2.Queue}
   * @param {Object} [request.updateMask]
   *   A mask used to specify which fields of the queue are being updated.
   *
   *   If empty, then all fields will be updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Queue]{@link google.cloud.tasks.v2beta2.Queue}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Queue]{@link google.cloud.tasks.v2beta2.Queue}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var queue = {};
   * client.updateQueue({queue: queue})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateQueue(request, options, callback) {
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
      'queue.name': request.queue.name,
    });

    return this._innerApiCalls.updateQueue(request, options, callback);
  }

  /**
   * Deletes a queue.
   *
   * This command will delete the queue even if it has tasks in it.
   *
   * Note: If you delete a queue, a queue with the same name can't be created
   * for 7 days.
   *
   * WARNING: Using this method may have unintended side effects if you are
   * using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
   * Read
   * [Overview of Queue Management and queue.yaml](https://cloud.google.com/cloud-tasks/docs/queue-yaml)
   * before using this method.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The queue name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
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
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * client.deleteQueue({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteQueue(request, options, callback) {
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

    return this._innerApiCalls.deleteQueue(request, options, callback);
  }

  /**
   * Purges a queue by deleting all of its tasks.
   *
   * All tasks created before this method is called are permanently deleted.
   *
   * Purge operations can take up to one minute to take effect. Tasks
   * might be dispatched before the purge takes effect. A purge is irreversible.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The queue name. For example:
   *   `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Queue]{@link google.cloud.tasks.v2beta2.Queue}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Queue]{@link google.cloud.tasks.v2beta2.Queue}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * client.purgeQueue({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  purgeQueue(request, options, callback) {
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

    return this._innerApiCalls.purgeQueue(request, options, callback);
  }

  /**
   * Pauses the queue.
   *
   * If a queue is paused then the system will stop dispatching tasks
   * until the queue is resumed via
   * ResumeQueue. Tasks can still be added
   * when the queue is paused. A queue is paused if its
   * state is PAUSED.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The queue name. For example:
   *   `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Queue]{@link google.cloud.tasks.v2beta2.Queue}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Queue]{@link google.cloud.tasks.v2beta2.Queue}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * client.pauseQueue({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  pauseQueue(request, options, callback) {
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

    return this._innerApiCalls.pauseQueue(request, options, callback);
  }

  /**
   * Resume a queue.
   *
   * This method resumes a queue after it has been
   * PAUSED or
   * DISABLED. The state of a queue is stored
   * in the queue's state; after calling this method it
   * will be set to RUNNING.
   *
   * WARNING: Resuming many high-QPS queues at the same time can
   * lead to target overloading. If you are resuming high-QPS
   * queues, follow the 500/50/5 pattern described in
   * [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/cloud-tasks/pdfs/managing-cloud-tasks-scaling-risks-2017-06-05.pdf).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The queue name. For example:
   *   `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Queue]{@link google.cloud.tasks.v2beta2.Queue}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Queue]{@link google.cloud.tasks.v2beta2.Queue}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * client.resumeQueue({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  resumeQueue(request, options, callback) {
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

    return this._innerApiCalls.resumeQueue(request, options, callback);
  }

  /**
   * Gets the access control policy for a Queue.
   * Returns an empty policy if the resource exists and does not have a policy
   * set.
   *
   * Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the
   * specified resource parent:
   *
   * * `cloudtasks.queues.getIamPolicy`
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
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedResource = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * client.getIamPolicy({resource: formattedResource})
   *   .then(responses => {
   *     var response = responses[0];
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
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      resource: request.resource,
    });

    return this._innerApiCalls.getIamPolicy(request, options, callback);
  }

  /**
   * Sets the access control policy for a Queue. Replaces any existing
   * policy.
   *
   * Note: The Cloud Console does not check queue-level IAM permissions yet.
   * Project-level permissions are required to use the Cloud Console.
   *
   * Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the
   * specified resource parent:
   *
   * * `cloudtasks.queues.setIamPolicy`
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
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedResource = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * var policy = {};
   * var request = {
   *   resource: formattedResource,
   *   policy: policy,
   * };
   * client.setIamPolicy(request)
   *   .then(responses => {
   *     var response = responses[0];
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
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      resource: request.resource,
    });

    return this._innerApiCalls.setIamPolicy(request, options, callback);
  }

  /**
   * Returns permissions that a caller has on a Queue.
   * If the resource does not exist, this will return an empty set of
   * permissions, not a NOT_FOUND error.
   *
   * Note: This operation is designed to be used for building permission-aware
   * UIs and command-line tools, not for authorization checking. This operation
   * may "fail open" without warning.
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
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedResource = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * var permissions = [];
   * var request = {
   *   resource: formattedResource,
   *   permissions: permissions,
   * };
   * client.testIamPermissions(request)
   *   .then(responses => {
   *     var response = responses[0];
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
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      resource: request.resource,
    });

    return this._innerApiCalls.testIamPermissions(request, options, callback);
  }

  /**
   * Lists the tasks in a queue.
   *
   * By default, only the BASIC view is retrieved
   * due to performance considerations;
   * response_view controls the
   * subset of information which is returned.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The queue name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   * @param {number} [request.responseView]
   *   The response_view specifies which subset of the Task will be
   *   returned.
   *
   *   By default response_view is BASIC; not all
   *   information is retrieved by default because some data, such as
   *   payloads, might be desirable to return only when needed because
   *   of its large size or because of the sensitivity of data that it
   *   contains.
   *
   *   Authorization for FULL requires
   *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the
   *   Task resource.
   *
   *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta2.View}
   * @param {string} [request.orderBy]
   *   Sort order used for the query. The only fields supported for sorting
   *   are `schedule_time` and `pull_message.tag`. All results will be
   *   returned in approximately ascending order. The default ordering is by
   *   `schedule_time`.
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
   *   The second parameter to the callback is Array of [Task]{@link google.cloud.tasks.v2beta2.Task}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListTasksResponse]{@link google.cloud.tasks.v2beta2.ListTasksResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Task]{@link google.cloud.tasks.v2beta2.Task}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Task]{@link google.cloud.tasks.v2beta2.Task} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListTasksResponse]{@link google.cloud.tasks.v2beta2.ListTasksResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   *
   * client.listTasks({parent: formattedParent})
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
   * var formattedParent = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
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
   *     return client.listTasks(nextRequest, options).then(callback);
   *   }
   * }
   * client.listTasks({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listTasks(request, options, callback) {
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

    return this._innerApiCalls.listTasks(request, options, callback);
  }

  /**
   * Equivalent to {@link listTasks}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listTasks} continuously
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
   *   The queue name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   * @param {number} [request.responseView]
   *   The response_view specifies which subset of the Task will be
   *   returned.
   *
   *   By default response_view is BASIC; not all
   *   information is retrieved by default because some data, such as
   *   payloads, might be desirable to return only when needed because
   *   of its large size or because of the sensitivity of data that it
   *   contains.
   *
   *   Authorization for FULL requires
   *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the
   *   Task resource.
   *
   *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta2.View}
   * @param {string} [request.orderBy]
   *   Sort order used for the query. The only fields supported for sorting
   *   are `schedule_time` and `pull_message.tag`. All results will be
   *   returned in approximately ascending order. The default ordering is by
   *   `schedule_time`.
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
   *   An object stream which emits an object representing [Task]{@link google.cloud.tasks.v2beta2.Task} on 'data' event.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * client.listTasksStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listTasksStream(request, options) {
    options = options || {};

    return this._descriptors.page.listTasks.createStream(
      this._innerApiCalls.listTasks,
      request,
      options
    );
  }

  /**
   * Gets a task.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The task name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   * @param {number} [request.responseView]
   *   The response_view specifies which subset of the Task will be
   *   returned.
   *
   *   By default response_view is BASIC; not all
   *   information is retrieved by default because some data, such as
   *   payloads, might be desirable to return only when needed because
   *   of its large size or because of the sensitivity of data that it
   *   contains.
   *
   *   Authorization for FULL requires
   *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the
   *   Task resource.
   *
   *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta2.View}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Task]{@link google.cloud.tasks.v2beta2.Task}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Task]{@link google.cloud.tasks.v2beta2.Task}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.taskPath('[PROJECT]', '[LOCATION]', '[QUEUE]', '[TASK]');
   * client.getTask({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getTask(request, options, callback) {
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

    return this._innerApiCalls.getTask(request, options, callback);
  }

  /**
   * Creates a task and adds it to a queue.
   *
   * Tasks cannot be updated after creation; there is no UpdateTask command.
   *
   * * For [App Engine queues](https://cloud.google.comgoogle.cloud.tasks.v2beta2.AppEngineHttpTarget),
   *   the maximum task size is 100KB.
   * * For [pull queues](https://cloud.google.comgoogle.cloud.tasks.v2beta2.PullTarget), this
   *   the maximum task size is 1MB.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The queue name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   *
   *   The queue must already exist.
   * @param {Object} request.task
   *   Required.
   *
   *   The task to add.
   *
   *   Task names have the following format:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`.
   *   The user can optionally specify a task name. If a
   *   name is not specified then the system will generate a random
   *   unique task id, which will be set in the task returned in the
   *   response.
   *
   *   If schedule_time is not set or is in the
   *   past then Cloud Tasks will set it to the current time.
   *
   *   Task De-duplication:
   *
   *   Explicitly specifying a task ID enables task de-duplication.  If
   *   a task's ID is identical to that of an existing task or a task
   *   that was deleted or completed recently then the call will fail
   *   with ALREADY_EXISTS.
   *   If the task's queue was created using Cloud Tasks, then another task with
   *   the same name can't be created for ~1hour after the original task was
   *   deleted or completed. If the task's queue was created using queue.yaml or
   *   queue.xml, then another task with the same name can't be created
   *   for ~9days after the original task was deleted or completed.
   *
   *   Because there is an extra lookup cost to identify duplicate task
   *   names, these CreateTask calls have significantly
   *   increased latency. Using hashed strings for the task id or for
   *   the prefix of the task id is recommended. Choosing task ids that
   *   are sequential or have sequential prefixes, for example using a
   *   timestamp, causes an increase in latency and error rates in all
   *   task commands. The infrastructure relies on an approximately
   *   uniform distribution of task ids to store and serve tasks
   *   efficiently.
   *
   *   This object should have the same structure as [Task]{@link google.cloud.tasks.v2beta2.Task}
   * @param {number} [request.responseView]
   *   The response_view specifies which subset of the Task will be
   *   returned.
   *
   *   By default response_view is BASIC; not all
   *   information is retrieved by default because some data, such as
   *   payloads, might be desirable to return only when needed because
   *   of its large size or because of the sensitivity of data that it
   *   contains.
   *
   *   Authorization for FULL requires
   *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the
   *   Task resource.
   *
   *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta2.View}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Task]{@link google.cloud.tasks.v2beta2.Task}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Task]{@link google.cloud.tasks.v2beta2.Task}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * var task = {};
   * var request = {
   *   parent: formattedParent,
   *   task: task,
   * };
   * client.createTask(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createTask(request, options, callback) {
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

    return this._innerApiCalls.createTask(request, options, callback);
  }

  /**
   * Deletes a task.
   *
   * A task can be deleted if it is scheduled or dispatched. A task
   * cannot be deleted if it has completed successfully or permanently
   * failed.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The task name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
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
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.taskPath('[PROJECT]', '[LOCATION]', '[QUEUE]', '[TASK]');
   * client.deleteTask({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteTask(request, options, callback) {
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

    return this._innerApiCalls.deleteTask(request, options, callback);
  }

  /**
   * Leases tasks from a pull queue for
   * lease_duration.
   *
   * This method is invoked by the worker to obtain a lease. The
   * worker must acknowledge the task via
   * AcknowledgeTask after they have
   * performed the work associated with the task.
   *
   * The payload is intended to store data that
   * the worker needs to perform the work associated with the task. To
   * return the payloads in the response, set
   * response_view to
   * FULL.
   *
   * A maximum of 10 qps of LeaseTasks
   * requests are allowed per
   * queue. RESOURCE_EXHAUSTED
   * is returned when this limit is
   * exceeded. RESOURCE_EXHAUSTED
   * is also returned when
   * max_tasks_dispatched_per_second
   * is exceeded.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The queue name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   * @param {Object} request.leaseDuration
   *   After the worker has successfully finished the work associated
   *   with the task, the worker must call via
   *   AcknowledgeTask before the
   *   schedule_time. Otherwise the task will be
   *   returned to a later LeaseTasks call so
   *   that another worker can retry it.
   *
   *   The maximum lease duration is 1 week.
   *   `lease_duration` will be truncated to the nearest second.
   *
   *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
   * @param {number} [request.maxTasks]
   *   The maximum number of tasks to lease.
   *
   *   The system will make a best effort to return as close to as
   *   `max_tasks` as possible.
   *
   *   The largest that `max_tasks` can be is 1000.
   * @param {number} [request.responseView]
   *   The response_view specifies which subset of the Task will be
   *   returned.
   *
   *   By default response_view is BASIC; not all
   *   information is retrieved by default because some data, such as
   *   payloads, might be desirable to return only when needed because
   *   of its large size or because of the sensitivity of data that it
   *   contains.
   *
   *   Authorization for FULL requires
   *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the
   *   Task resource.
   *
   *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta2.View}
   * @param {string} [request.filter]
   *   `filter` can be used to specify a subset of tasks to lease.
   *
   *   When `filter` is set to `tag=<my-tag>` then the
   *   response will contain only tasks whose
   *   tag is equal to `<my-tag>`. `<my-tag>` must be
   *   less than 500 characters.
   *
   *   When `filter` is set to `tag_function=oldest_tag()`, only tasks which have
   *   the same tag as the task with the oldest
   *   schedule_time will be returned.
   *
   *   Grammar Syntax:
   *
   *   * `filter = "tag=" tag | "tag_function=" function`
   *
   *   * `tag = string`
   *
   *   * `function = "oldest_tag()"`
   *
   *   The `oldest_tag()` function returns tasks which have the same tag as the
   *   oldest task (ordered by schedule time).
   *
   *   SDK compatibility: Although the SDK allows tags to be either
   *   string or
   *   [bytes](https://cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/taskqueue/TaskOptions.html#tag-byte:A-),
   *   only UTF-8 encoded tags can be used in Cloud Tasks. Tag which
   *   aren't UTF-8 encoded can't be used in the
   *   filter and the task's
   *   tag will be displayed as empty in Cloud Tasks.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [LeaseTasksResponse]{@link google.cloud.tasks.v2beta2.LeaseTasksResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [LeaseTasksResponse]{@link google.cloud.tasks.v2beta2.LeaseTasksResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * var leaseDuration = {};
   * var request = {
   *   parent: formattedParent,
   *   leaseDuration: leaseDuration,
   * };
   * client.leaseTasks(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  leaseTasks(request, options, callback) {
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

    return this._innerApiCalls.leaseTasks(request, options, callback);
  }

  /**
   * Acknowledges a pull task.
   *
   * The worker, that is, the entity that
   * leased this task must call this method
   * to indicate that the work associated with the task has finished.
   *
   * The worker must acknowledge a task within the
   * lease_duration or the lease
   * will expire and the task will become available to be leased
   * again. After the task is acknowledged, it will not be returned
   * by a later LeaseTasks,
   * GetTask, or
   * ListTasks.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The task name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   * @param {Object} request.scheduleTime
   *   Required.
   *
   *   The task's current schedule time, available in the
   *   schedule_time returned by
   *   LeaseTasks response or
   *   RenewLease response. This restriction is
   *   to ensure that your worker currently holds the lease.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
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
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.taskPath('[PROJECT]', '[LOCATION]', '[QUEUE]', '[TASK]');
   * var scheduleTime = {};
   * var request = {
   *   name: formattedName,
   *   scheduleTime: scheduleTime,
   * };
   * client.acknowledgeTask(request).catch(err => {
   *   console.error(err);
   * });
   */
  acknowledgeTask(request, options, callback) {
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

    return this._innerApiCalls.acknowledgeTask(request, options, callback);
  }

  /**
   * Renew the current lease of a pull task.
   *
   * The worker can use this method to extend the lease by a new
   * duration, starting from now. The new task lease will be
   * returned in the task's schedule_time.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The task name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   * @param {Object} request.scheduleTime
   *   Required.
   *
   *   The task's current schedule time, available in the
   *   schedule_time returned by
   *   LeaseTasks response or
   *   RenewLease response. This restriction is
   *   to ensure that your worker currently holds the lease.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {Object} request.leaseDuration
   *   Required.
   *
   *   The desired new lease duration, starting from now.
   *
   *
   *   The maximum lease duration is 1 week.
   *   `lease_duration` will be truncated to the nearest second.
   *
   *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
   * @param {number} [request.responseView]
   *   The response_view specifies which subset of the Task will be
   *   returned.
   *
   *   By default response_view is BASIC; not all
   *   information is retrieved by default because some data, such as
   *   payloads, might be desirable to return only when needed because
   *   of its large size or because of the sensitivity of data that it
   *   contains.
   *
   *   Authorization for FULL requires
   *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the
   *   Task resource.
   *
   *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta2.View}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Task]{@link google.cloud.tasks.v2beta2.Task}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Task]{@link google.cloud.tasks.v2beta2.Task}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.taskPath('[PROJECT]', '[LOCATION]', '[QUEUE]', '[TASK]');
   * var scheduleTime = {};
   * var leaseDuration = {};
   * var request = {
   *   name: formattedName,
   *   scheduleTime: scheduleTime,
   *   leaseDuration: leaseDuration,
   * };
   * client.renewLease(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  renewLease(request, options, callback) {
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

    return this._innerApiCalls.renewLease(request, options, callback);
  }

  /**
   * Cancel a pull task's lease.
   *
   * The worker can use this method to cancel a task's lease by
   * setting its schedule_time to now. This will
   * make the task available to be leased to the next caller of
   * LeaseTasks.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The task name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   * @param {Object} request.scheduleTime
   *   Required.
   *
   *   The task's current schedule time, available in the
   *   schedule_time returned by
   *   LeaseTasks response or
   *   RenewLease response. This restriction is
   *   to ensure that your worker currently holds the lease.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {number} [request.responseView]
   *   The response_view specifies which subset of the Task will be
   *   returned.
   *
   *   By default response_view is BASIC; not all
   *   information is retrieved by default because some data, such as
   *   payloads, might be desirable to return only when needed because
   *   of its large size or because of the sensitivity of data that it
   *   contains.
   *
   *   Authorization for FULL requires
   *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the
   *   Task resource.
   *
   *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta2.View}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Task]{@link google.cloud.tasks.v2beta2.Task}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Task]{@link google.cloud.tasks.v2beta2.Task}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.taskPath('[PROJECT]', '[LOCATION]', '[QUEUE]', '[TASK]');
   * var scheduleTime = {};
   * var request = {
   *   name: formattedName,
   *   scheduleTime: scheduleTime,
   * };
   * client.cancelLease(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  cancelLease(request, options, callback) {
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

    return this._innerApiCalls.cancelLease(request, options, callback);
  }

  /**
   * Forces a task to run now.
   *
   * When this method is called, Cloud Tasks will dispatch the task, even if
   * the task is already running, the queue has reached its RateLimits or
   * is PAUSED.
   *
   * This command is meant to be used for manual debugging. For
   * example, RunTask can be used to retry a failed
   * task after a fix has been made or to manually force a task to be
   * dispatched now.
   *
   * The dispatched task is returned. That is, the task that is returned
   * contains the status after the task is dispatched but
   * before the task is received by its target.
   *
   * If Cloud Tasks receives a successful response from the task's
   * target, then the task will be deleted; otherwise the task's
   * schedule_time will be reset to the time that
   * RunTask was called plus the retry delay specified
   * in the queue's RetryConfig.
   *
   * RunTask returns
   * NOT_FOUND when it is called on a
   * task that has already succeeded or permanently failed.
   *
   * RunTask cannot be called on a
   * pull task.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The task name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   * @param {number} [request.responseView]
   *   The response_view specifies which subset of the Task will be
   *   returned.
   *
   *   By default response_view is BASIC; not all
   *   information is retrieved by default because some data, such as
   *   payloads, might be desirable to return only when needed because
   *   of its large size or because of the sensitivity of data that it
   *   contains.
   *
   *   Authorization for FULL requires
   *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the
   *   Task resource.
   *
   *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta2.View}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Task]{@link google.cloud.tasks.v2beta2.Task}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Task]{@link google.cloud.tasks.v2beta2.Task}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const tasks = require('tasks.v2beta2');
   *
   * var client = new tasks.v2beta2.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.taskPath('[PROJECT]', '[LOCATION]', '[QUEUE]', '[TASK]');
   * client.runTask({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  runTask(request, options, callback) {
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

    return this._innerApiCalls.runTask(request, options, callback);
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
   * Return a fully-qualified location resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @returns {String}
   */
  locationPath(project, location) {
    return this._pathTemplates.locationPathTemplate.render({
      project: project,
      location: location,
    });
  }

  /**
   * Return a fully-qualified queue resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} queue
   * @returns {String}
   */
  queuePath(project, location, queue) {
    return this._pathTemplates.queuePathTemplate.render({
      project: project,
      location: location,
      queue: queue,
    });
  }

  /**
   * Return a fully-qualified task resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} queue
   * @param {String} task
   * @returns {String}
   */
  taskPath(project, location, queue, task) {
    return this._pathTemplates.taskPathTemplate.render({
      project: project,
      location: location,
      queue: queue,
      task: task,
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
   * Parse the locationName from a location resource.
   *
   * @param {String} locationName
   *   A fully-qualified path representing a location resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromLocationName(locationName) {
    return this._pathTemplates.locationPathTemplate.match(locationName).project;
  }

  /**
   * Parse the locationName from a location resource.
   *
   * @param {String} locationName
   *   A fully-qualified path representing a location resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromLocationName(locationName) {
    return this._pathTemplates.locationPathTemplate.match(locationName)
      .location;
  }

  /**
   * Parse the queueName from a queue resource.
   *
   * @param {String} queueName
   *   A fully-qualified path representing a queue resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromQueueName(queueName) {
    return this._pathTemplates.queuePathTemplate.match(queueName).project;
  }

  /**
   * Parse the queueName from a queue resource.
   *
   * @param {String} queueName
   *   A fully-qualified path representing a queue resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromQueueName(queueName) {
    return this._pathTemplates.queuePathTemplate.match(queueName).location;
  }

  /**
   * Parse the queueName from a queue resource.
   *
   * @param {String} queueName
   *   A fully-qualified path representing a queue resources.
   * @returns {String} - A string representing the queue.
   */
  matchQueueFromQueueName(queueName) {
    return this._pathTemplates.queuePathTemplate.match(queueName).queue;
  }

  /**
   * Parse the taskName from a task resource.
   *
   * @param {String} taskName
   *   A fully-qualified path representing a task resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromTaskName(taskName) {
    return this._pathTemplates.taskPathTemplate.match(taskName).project;
  }

  /**
   * Parse the taskName from a task resource.
   *
   * @param {String} taskName
   *   A fully-qualified path representing a task resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromTaskName(taskName) {
    return this._pathTemplates.taskPathTemplate.match(taskName).location;
  }

  /**
   * Parse the taskName from a task resource.
   *
   * @param {String} taskName
   *   A fully-qualified path representing a task resources.
   * @returns {String} - A string representing the queue.
   */
  matchQueueFromTaskName(taskName) {
    return this._pathTemplates.taskPathTemplate.match(taskName).queue;
  }

  /**
   * Parse the taskName from a task resource.
   *
   * @param {String} taskName
   *   A fully-qualified path representing a task resources.
   * @returns {String} - A string representing the task.
   */
  matchTaskFromTaskName(taskName) {
    return this._pathTemplates.taskPathTemplate.match(taskName).task;
  }
}

module.exports = CloudTasksClient;
