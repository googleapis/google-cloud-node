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

const gapicConfig = require('./cloud_redis_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');
const protobuf = require('protobufjs');

const VERSION = require('../../package.json').version;

/**
 * Configures and manages Cloud Memorystore for Redis instances
 *
 * Google Cloud Memorystore for Redis v1beta1
 *
 * The `redis.googleapis.com` service implements the Google Cloud Memorystore
 * for Redis API and defines the following resource model for managing Redis
 * instances:
 * * The service works with a collection of cloud projects, named: `/projects/*`
 * * Each project has a collection of available locations, named: `/locations/*`
 * * Each location has a collection of Redis instances, named: `/instances/*`
 * * As such, Redis instances are resources of the form:
 *   `/projects/{project_id}/locations/{location_id}/instances/{instance_id}`
 *
 * Note that location_id must be refering to a GCP `region`; for example:
 * * `projects/redpepper-1290/locations/us-central1/instances/my-redis`
 *
 * @class
 * @memberof v1beta1
 */
class CloudRedisClient {
  /**
   * Construct an instance of CloudRedisClient.
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
        'google/cloud/redis/v1beta1/cloud_redis.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      locationPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}'
      ),
      instancePathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/instances/{instance}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listInstances: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'instances'
      ),
    };
    let protoFilesRoot = new gax.GoogleProtoFilesRoot();
    protoFilesRoot = protobuf.loadSync(
      path.join(
        __dirname,
        '..',
        '..',
        'protos',
        'google/cloud/redis/v1beta1/cloud_redis.proto'
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

    const createInstanceResponse = protoFilesRoot.lookup(
      'google.cloud.redis.v1beta1.Instance'
    );
    const createInstanceMetadata = protoFilesRoot.lookup('google.protobuf.Any');
    const updateInstanceResponse = protoFilesRoot.lookup(
      'google.cloud.redis.v1beta1.Instance'
    );
    const updateInstanceMetadata = protoFilesRoot.lookup('google.protobuf.Any');
    const deleteInstanceResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    const deleteInstanceMetadata = protoFilesRoot.lookup('google.protobuf.Any');

    this._descriptors.longrunning = {
      createInstance: new gax.LongrunningDescriptor(
        this.operationsClient,
        createInstanceResponse.decode.bind(createInstanceResponse),
        createInstanceMetadata.decode.bind(createInstanceMetadata)
      ),
      updateInstance: new gax.LongrunningDescriptor(
        this.operationsClient,
        updateInstanceResponse.decode.bind(updateInstanceResponse),
        updateInstanceMetadata.decode.bind(updateInstanceMetadata)
      ),
      deleteInstance: new gax.LongrunningDescriptor(
        this.operationsClient,
        deleteInstanceResponse.decode.bind(deleteInstanceResponse),
        deleteInstanceMetadata.decode.bind(deleteInstanceMetadata)
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.redis.v1beta1.CloudRedis',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.redis.v1beta1.CloudRedis.
    const cloudRedisStub = gaxGrpc.createStub(
      protos.google.cloud.redis.v1beta1.CloudRedis,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const cloudRedisStubMethods = [
      'listInstances',
      'getInstance',
      'createInstance',
      'updateInstance',
      'deleteInstance',
    ];
    for (let methodName of cloudRedisStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        cloudRedisStub.then(
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
    return 'redis.googleapis.com';
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
   * Lists all Redis instances owned by a project in either the specified
   * location (region) or all locations.
   *
   * The location should have the following format:
   * * `projects/{project_id}/locations/{location_id}`
   *
   * If `location_id` is specified as `-` (wildcard), then all regions
   * available to the project are queried, and the results are aggregated.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The resource name of the instance location using the form:
   *       `projects/{project_id}/locations/{location_id}`
   *   where `location_id` refers to a GCP region
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
   *   The second parameter to the callback is Array of [Instance]{@link google.cloud.redis.v1beta1.Instance}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListInstancesResponse]{@link google.cloud.redis.v1beta1.ListInstancesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Instance]{@link google.cloud.redis.v1beta1.Instance}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Instance]{@link google.cloud.redis.v1beta1.Instance} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListInstancesResponse]{@link google.cloud.redis.v1beta1.ListInstancesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const redis = require('redis.v1beta1');
   *
   * const client = new redis.v1beta1.CloudRedisClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listInstances({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
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
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listInstances(nextRequest, options).then(callback);
   *   }
   * }
   * client.listInstances({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listInstances(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listInstances(request, options, callback);
  }

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
   *   Required. The resource name of the instance location using the form:
   *       `projects/{project_id}/locations/{location_id}`
   *   where `location_id` refers to a GCP region
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
   *   An object stream which emits an object representing [Instance]{@link google.cloud.redis.v1beta1.Instance} on 'data' event.
   *
   * @example
   *
   * const redis = require('redis.v1beta1');
   *
   * const client = new redis.v1beta1.CloudRedisClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * client.listInstancesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listInstancesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listInstances.createStream(
      this._innerApiCalls.listInstances,
      request,
      options
    );
  }

  /**
   * Gets the details of a specific Redis instance.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Redis instance resource name using the form:
   *       `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
   *   where `location_id` refers to a GCP region
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Instance]{@link google.cloud.redis.v1beta1.Instance}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Instance]{@link google.cloud.redis.v1beta1.Instance}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const redis = require('redis.v1beta1');
   *
   * const client = new redis.v1beta1.CloudRedisClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.instancePath('[PROJECT]', '[LOCATION]', '[INSTANCE]');
   * client.getInstance({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getInstance(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getInstance(request, options, callback);
  }

  /**
   * Creates a Redis instance based on the specified tier and memory size.
   *
   * By default, the instance is peered to the project's
   * [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks).
   *
   * The creation is executed asynchronously and callers may check the returned
   * operation to track its progress. Once the operation is completed the Redis
   * instance will be fully functional. Completed longrunning.Operation will
   * contain the new instance object in the response field.
   *
   * The returned operation is automatically deleted after a few hours, so there
   * is no need to call DeleteOperation.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The resource name of the instance location using the form:
   *       `projects/{project_id}/locations/{location_id}`
   *   where `location_id` refers to a GCP region
   * @param {string} request.instanceId
   *   Required. The logical name of the Redis instance in the customer project
   *   with the following restrictions:
   *
   *   * Must contain only lowercase letters, numbers, and hyphens.
   *   * Must start with a letter.
   *   * Must be between 1-40 characters.
   *   * Must end with a number or a letter.
   *   * Must be unique within the customer project / location
   * @param {Object} request.instance
   *   Required. A Redis [Instance] resource
   *
   *   This object should have the same structure as [Instance]{@link google.cloud.redis.v1beta1.Instance}
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
   * const redis = require('redis.v1beta1');
   *
   * const client = new redis.v1beta1.CloudRedisClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const instanceId = 'test_instance';
   * const tier = 'BASIC';
   * const memorySizeGb = 1;
   * const instance = {
   *   tier: tier,
   *   memorySizeGb: memorySizeGb,
   * };
   * const request = {
   *   parent: formattedParent,
   *   instanceId: instanceId,
   *   instance: instance,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.createInstance(request)
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     const result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     const metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const instanceId = 'test_instance';
   * const tier = 'BASIC';
   * const memorySizeGb = 1;
   * const instance = {
   *   tier: tier,
   *   memorySizeGb: memorySizeGb,
   * };
   * const request = {
   *   parent: formattedParent,
   *   instanceId: instanceId,
   *   instance: instance,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.createInstance(request)
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
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
  createInstance(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createInstance(request, options, callback);
  }

  /**
   * Updates the metadata and configuration of a specific Redis instance.
   *
   * Completed longrunning.Operation will contain the new instance object
   * in the response field. The returned operation is automatically deleted
   * after a few hours, so there is no need to call DeleteOperation.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.updateMask
   *   Required. Mask of fields to update. At least one path must be supplied in
   *   this field. The elements of the repeated paths field may only include these
   *   fields from Instance:
   *   * `display_name`
   *   * `labels`
   *   * `memory_size_gb`
   *   * `redis_config`
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} request.instance
   *   Required. Update description.
   *   Only fields specified in update_mask are updated.
   *
   *   This object should have the same structure as [Instance]{@link google.cloud.redis.v1beta1.Instance}
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
   * const redis = require('redis.v1beta1');
   *
   * const client = new redis.v1beta1.CloudRedisClient({
   *   // optional auth parameters.
   * });
   *
   * const pathsElement = 'display_name';
   * const pathsElement2 = 'memory_size_gb';
   * const paths = [pathsElement, pathsElement2];
   * const updateMask = {
   *   paths: paths,
   * };
   * const displayName = 'UpdatedDisplayName';
   * const memorySizeGb = 4;
   * const instance = {
   *   displayName: displayName,
   *   memorySizeGb: memorySizeGb,
   * };
   * const request = {
   *   updateMask: updateMask,
   *   instance: instance,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.updateInstance(request)
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     const result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     const metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const pathsElement = 'display_name';
   * const pathsElement2 = 'memory_size_gb';
   * const paths = [pathsElement, pathsElement2];
   * const updateMask = {
   *   paths: paths,
   * };
   * const displayName = 'UpdatedDisplayName';
   * const memorySizeGb = 4;
   * const instance = {
   *   displayName: displayName,
   *   memorySizeGb: memorySizeGb,
   * };
   * const request = {
   *   updateMask: updateMask,
   *   instance: instance,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.updateInstance(request)
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
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
  updateInstance(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateInstance(request, options, callback);
  }

  /**
   * Deletes a specific Redis instance.  Instance stops serving and data is
   * deleted.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Redis instance resource name using the form:
   *       `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
   *   where `location_id` refers to a GCP region
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
   * const redis = require('redis.v1beta1');
   *
   * const client = new redis.v1beta1.CloudRedisClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.instancePath('[PROJECT]', '[LOCATION]', '[INSTANCE]');
   *
   * // Handle the operation using the promise pattern.
   * client.deleteInstance({name: formattedName})
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     const result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     const metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedName = client.instancePath('[PROJECT]', '[LOCATION]', '[INSTANCE]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.deleteInstance({name: formattedName})
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
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
  deleteInstance(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteInstance(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

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
   * Return a fully-qualified instance resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} instance
   * @returns {String}
   */
  instancePath(project, location, instance) {
    return this._pathTemplates.instancePathTemplate.render({
      project: project,
      location: location,
      instance: instance,
    });
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
   * Parse the instanceName from a instance resource.
   *
   * @param {String} instanceName
   *   A fully-qualified path representing a instance resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromInstanceName(instanceName) {
    return this._pathTemplates.instancePathTemplate.match(instanceName).project;
  }

  /**
   * Parse the instanceName from a instance resource.
   *
   * @param {String} instanceName
   *   A fully-qualified path representing a instance resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromInstanceName(instanceName) {
    return this._pathTemplates.instancePathTemplate.match(instanceName)
      .location;
  }

  /**
   * Parse the instanceName from a instance resource.
   *
   * @param {String} instanceName
   *   A fully-qualified path representing a instance resources.
   * @returns {String} - A string representing the instance.
   */
  matchInstanceFromInstanceName(instanceName) {
    return this._pathTemplates.instancePathTemplate.match(instanceName)
      .instance;
  }
}

module.exports = CloudRedisClient;
