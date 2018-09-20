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

const gapicConfig = require('./device_manager_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Internet of things (IoT) service. Allows to manipulate device registry
 * instances and the registration of devices (Things) to the cloud.
 *
 * @class
 * @memberof v1
 */
class DeviceManagerClient {
  /**
   * Construct an instance of DeviceManagerClient.
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
        'google/cloud/iot/v1/device_manager.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      locationPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}'
      ),
      registryPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/registries/{registry}'
      ),
      devicePathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/registries/{registry}/devices/{device}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listDeviceRegistries: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'deviceRegistries'
      ),
      listDevices: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'devices'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.iot.v1.DeviceManager',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.iot.v1.DeviceManager.
    const deviceManagerStub = gaxGrpc.createStub(
      protos.google.cloud.iot.v1.DeviceManager,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const deviceManagerStubMethods = [
      'createDeviceRegistry',
      'getDeviceRegistry',
      'updateDeviceRegistry',
      'deleteDeviceRegistry',
      'listDeviceRegistries',
      'createDevice',
      'getDevice',
      'updateDevice',
      'deleteDevice',
      'listDevices',
      'modifyCloudToDeviceConfig',
      'listDeviceConfigVersions',
      'listDeviceStates',
      'setIamPolicy',
      'getIamPolicy',
      'testIamPermissions',
    ];
    for (const methodName of deviceManagerStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        deviceManagerStub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
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
    return 'cloudiot.googleapis.com';
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
      'https://www.googleapis.com/auth/cloudiot',
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
   * Creates a device registry that contains devices.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The project and cloud region where this device registry must be created.
   *   For example, `projects/example-project/locations/us-central1`.
   * @param {Object} request.deviceRegistry
   *   The device registry. The field `name` must be empty. The server will
   *   generate that field from the device registry `id` provided and the
   *   `parent` field.
   *
   *   This object should have the same structure as [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const deviceRegistry = {};
   * const request = {
   *   parent: formattedParent,
   *   deviceRegistry: deviceRegistry,
   * };
   * client.createDeviceRegistry(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createDeviceRegistry(request, options, callback) {
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

    return this._innerApiCalls.createDeviceRegistry(request, options, callback);
  }

  /**
   * Gets a device registry configuration.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the device registry. For example,
   *   `projects/example-project/locations/us-central1/registries/my-registry`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.registryPath('[PROJECT]', '[LOCATION]', '[REGISTRY]');
   * client.getDeviceRegistry({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getDeviceRegistry(request, options, callback) {
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

    return this._innerApiCalls.getDeviceRegistry(request, options, callback);
  }

  /**
   * Updates a device registry configuration.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.deviceRegistry
   *   The new values for the device registry. The `id` field must be empty, and
   *   the `name` field must indicate the path of the resource. For example,
   *   `projects/example-project/locations/us-central1/registries/my-registry`.
   *
   *   This object should have the same structure as [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry}
   * @param {Object} request.updateMask
   *   Only updates the `device_registry` fields indicated by this mask.
   *   The field mask must not be empty, and it must not contain fields that
   *   are immutable or only set by the server.
   *   Mutable top-level fields: `event_notification_config`, `http_config`,
   *   `mqtt_config`, and `state_notification_config`.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const deviceRegistry = {};
   * const updateMask = {};
   * const request = {
   *   deviceRegistry: deviceRegistry,
   *   updateMask: updateMask,
   * };
   * client.updateDeviceRegistry(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateDeviceRegistry(request, options, callback) {
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
      'device_registry.name': request.deviceRegistry.name,
    });

    return this._innerApiCalls.updateDeviceRegistry(request, options, callback);
  }

  /**
   * Deletes a device registry configuration.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the device registry. For example,
   *   `projects/example-project/locations/us-central1/registries/my-registry`.
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
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.registryPath('[PROJECT]', '[LOCATION]', '[REGISTRY]');
   * client.deleteDeviceRegistry({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteDeviceRegistry(request, options, callback) {
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

    return this._innerApiCalls.deleteDeviceRegistry(request, options, callback);
  }

  /**
   * Lists device registries.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The project and cloud region path. For example,
   *   `projects/example-project/locations/us-central1`.
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
   *   The second parameter to the callback is Array of [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListDeviceRegistriesResponse]{@link google.cloud.iot.v1.ListDeviceRegistriesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListDeviceRegistriesResponse]{@link google.cloud.iot.v1.ListDeviceRegistriesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listDeviceRegistries({parent: formattedParent})
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
   *     return client.listDeviceRegistries(nextRequest, options).then(callback);
   *   }
   * }
   * client.listDeviceRegistries({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listDeviceRegistries(request, options, callback) {
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

    return this._innerApiCalls.listDeviceRegistries(request, options, callback);
  }

  /**
   * Equivalent to {@link listDeviceRegistries}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listDeviceRegistries} continuously
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
   *   The project and cloud region path. For example,
   *   `projects/example-project/locations/us-central1`.
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
   *   An object stream which emits an object representing [DeviceRegistry]{@link google.cloud.iot.v1.DeviceRegistry} on 'data' event.
   *
   * @example
   *
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * client.listDeviceRegistriesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listDeviceRegistriesStream(request, options) {
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._descriptors.page.listDeviceRegistries.createStream(
      this._innerApiCalls.listDeviceRegistries,
      request,
      options
    );
  }

  /**
   * Creates a device in a device registry.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The name of the device registry where this device should be created.
   *   For example,
   *   `projects/example-project/locations/us-central1/registries/my-registry`.
   * @param {Object} request.device
   *   The device registration details. The field `name` must be empty. The server
   *   will generate that field from the device registry `id` provided and the
   *   `parent` field.
   *
   *   This object should have the same structure as [Device]{@link google.cloud.iot.v1.Device}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Device]{@link google.cloud.iot.v1.Device}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Device]{@link google.cloud.iot.v1.Device}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.registryPath('[PROJECT]', '[LOCATION]', '[REGISTRY]');
   * const device = {};
   * const request = {
   *   parent: formattedParent,
   *   device: device,
   * };
   * client.createDevice(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createDevice(request, options, callback) {
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

    return this._innerApiCalls.createDevice(request, options, callback);
  }

  /**
   * Gets details about a device.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the device. For example,
   *   `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
   *   `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
   * @param {Object} [request.fieldMask]
   *   The fields of the `Device` resource to be returned in the response. If the
   *   field mask is unset or empty, all fields are returned.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Device]{@link google.cloud.iot.v1.Device}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Device]{@link google.cloud.iot.v1.Device}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.devicePath('[PROJECT]', '[LOCATION]', '[REGISTRY]', '[DEVICE]');
   * client.getDevice({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getDevice(request, options, callback) {
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

    return this._innerApiCalls.getDevice(request, options, callback);
  }

  /**
   * Updates a device.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.device
   *   The new values for the device registry. The `id` and `num_id` fields must
   *   be empty, and the field `name` must specify the name path. For example,
   *   `projects/p0/locations/us-central1/registries/registry0/devices/device0`or
   *   `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
   *
   *   This object should have the same structure as [Device]{@link google.cloud.iot.v1.Device}
   * @param {Object} request.updateMask
   *   Only updates the `device` fields indicated by this mask.
   *   The field mask must not be empty, and it must not contain fields that
   *   are immutable or only set by the server.
   *   Mutable top-level fields: `credentials`, `blocked`, and `metadata`
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Device]{@link google.cloud.iot.v1.Device}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Device]{@link google.cloud.iot.v1.Device}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const device = {};
   * const updateMask = {};
   * const request = {
   *   device: device,
   *   updateMask: updateMask,
   * };
   * client.updateDevice(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateDevice(request, options, callback) {
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
      'device.name': request.device.name,
    });

    return this._innerApiCalls.updateDevice(request, options, callback);
  }

  /**
   * Deletes a device.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the device. For example,
   *   `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
   *   `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
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
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.devicePath('[PROJECT]', '[LOCATION]', '[REGISTRY]', '[DEVICE]');
   * client.deleteDevice({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteDevice(request, options, callback) {
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

    return this._innerApiCalls.deleteDevice(request, options, callback);
  }

  /**
   * List devices in a device registry.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The device registry path. Required. For example,
   *   `projects/my-project/locations/us-central1/registries/my-registry`.
   * @param {number[]} [request.deviceNumIds]
   *   A list of device numerical ids. If empty, it will ignore this field. This
   *   field cannot hold more than 10,000 entries.
   * @param {string[]} [request.deviceIds]
   *   A list of device string identifiers. If empty, it will ignore this field.
   *   For example, `['device0', 'device12']`. This field cannot hold more than
   *   10,000 entries.
   * @param {Object} [request.fieldMask]
   *   The fields of the `Device` resource to be returned in the response. The
   *   fields `id`, and `num_id` are always returned by default, along with any
   *   other fields specified.
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
   *   The second parameter to the callback is Array of [Device]{@link google.cloud.iot.v1.Device}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListDevicesResponse]{@link google.cloud.iot.v1.ListDevicesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Device]{@link google.cloud.iot.v1.Device}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Device]{@link google.cloud.iot.v1.Device} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListDevicesResponse]{@link google.cloud.iot.v1.ListDevicesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.registryPath('[PROJECT]', '[LOCATION]', '[REGISTRY]');
   *
   * client.listDevices({parent: formattedParent})
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
   * const formattedParent = client.registryPath('[PROJECT]', '[LOCATION]', '[REGISTRY]');
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
   *     return client.listDevices(nextRequest, options).then(callback);
   *   }
   * }
   * client.listDevices({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listDevices(request, options, callback) {
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

    return this._innerApiCalls.listDevices(request, options, callback);
  }

  /**
   * Equivalent to {@link listDevices}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listDevices} continuously
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
   *   The device registry path. Required. For example,
   *   `projects/my-project/locations/us-central1/registries/my-registry`.
   * @param {number[]} [request.deviceNumIds]
   *   A list of device numerical ids. If empty, it will ignore this field. This
   *   field cannot hold more than 10,000 entries.
   * @param {string[]} [request.deviceIds]
   *   A list of device string identifiers. If empty, it will ignore this field.
   *   For example, `['device0', 'device12']`. This field cannot hold more than
   *   10,000 entries.
   * @param {Object} [request.fieldMask]
   *   The fields of the `Device` resource to be returned in the response. The
   *   fields `id`, and `num_id` are always returned by default, along with any
   *   other fields specified.
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
   *   An object stream which emits an object representing [Device]{@link google.cloud.iot.v1.Device} on 'data' event.
   *
   * @example
   *
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.registryPath('[PROJECT]', '[LOCATION]', '[REGISTRY]');
   * client.listDevicesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listDevicesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listDevices.createStream(
      this._innerApiCalls.listDevices,
      request,
      options
    );
  }

  /**
   * Modifies the configuration for the device, which is eventually sent from
   * the Cloud IoT Core servers. Returns the modified configuration version and
   * its metadata.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the device. For example,
   *   `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
   *   `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
   * @param {string} request.binaryData
   *   The configuration data for the device.
   * @param {number} [request.versionToUpdate]
   *   The version number to update. If this value is zero, it will not check the
   *   version number of the server and will always update the current version;
   *   otherwise, this update will fail if the version number found on the server
   *   does not match this version number. This is used to support multiple
   *   simultaneous updates without losing data.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DeviceConfig]{@link google.cloud.iot.v1.DeviceConfig}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DeviceConfig]{@link google.cloud.iot.v1.DeviceConfig}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.devicePath('[PROJECT]', '[LOCATION]', '[REGISTRY]', '[DEVICE]');
   * const binaryData = '';
   * const request = {
   *   name: formattedName,
   *   binaryData: binaryData,
   * };
   * client.modifyCloudToDeviceConfig(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  modifyCloudToDeviceConfig(request, options, callback) {
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

    return this._innerApiCalls.modifyCloudToDeviceConfig(
      request,
      options,
      callback
    );
  }

  /**
   * Lists the last few versions of the device configuration in descending
   * order (i.e.: newest first).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the device. For example,
   *   `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
   *   `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
   * @param {number} [request.numVersions]
   *   The number of versions to list. Versions are listed in decreasing order of
   *   the version number. The maximum number of versions retained is 10. If this
   *   value is zero, it will return all the versions available.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ListDeviceConfigVersionsResponse]{@link google.cloud.iot.v1.ListDeviceConfigVersionsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ListDeviceConfigVersionsResponse]{@link google.cloud.iot.v1.ListDeviceConfigVersionsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.devicePath('[PROJECT]', '[LOCATION]', '[REGISTRY]', '[DEVICE]');
   * client.listDeviceConfigVersions({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listDeviceConfigVersions(request, options, callback) {
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

    return this._innerApiCalls.listDeviceConfigVersions(
      request,
      options,
      callback
    );
  }

  /**
   * Lists the last few versions of the device state in descending order (i.e.:
   * newest first).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the device. For example,
   *   `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
   *   `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
   * @param {number} [request.numStates]
   *   The number of states to list. States are listed in descending order of
   *   update time. The maximum number of states retained is 10. If this
   *   value is zero, it will return all the states available.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ListDeviceStatesResponse]{@link google.cloud.iot.v1.ListDeviceStatesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ListDeviceStatesResponse]{@link google.cloud.iot.v1.ListDeviceStatesResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.devicePath('[PROJECT]', '[LOCATION]', '[REGISTRY]', '[DEVICE]');
   * client.listDeviceStates({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listDeviceStates(request, options, callback) {
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

    return this._innerApiCalls.listDeviceStates(request, options, callback);
  }

  /**
   * Sets the access control policy on the specified resource. Replaces any
   * existing policy.
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
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.registryPath('[PROJECT]', '[LOCATION]', '[REGISTRY]');
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
   * Gets the access control policy for a resource.
   * Returns an empty policy if the resource exists and does not have a policy
   * set.
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
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.registryPath('[PROJECT]', '[LOCATION]', '[REGISTRY]');
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
   * Returns permissions that a caller has on the specified resource.
   * If the resource does not exist, this will return an empty set of
   * permissions, not a NOT_FOUND error.
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
   * const iot = require('@google-cloud/iot');
   *
   * const client = new iot.v1.DeviceManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.registryPath('[PROJECT]', '[LOCATION]', '[REGISTRY]');
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
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      resource: request.resource,
    });

    return this._innerApiCalls.testIamPermissions(request, options, callback);
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
   * Return a fully-qualified registry resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} registry
   * @returns {String}
   */
  registryPath(project, location, registry) {
    return this._pathTemplates.registryPathTemplate.render({
      project: project,
      location: location,
      registry: registry,
    });
  }

  /**
   * Return a fully-qualified device resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} registry
   * @param {String} device
   * @returns {String}
   */
  devicePath(project, location, registry, device) {
    return this._pathTemplates.devicePathTemplate.render({
      project: project,
      location: location,
      registry: registry,
      device: device,
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
   * Parse the registryName from a registry resource.
   *
   * @param {String} registryName
   *   A fully-qualified path representing a registry resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromRegistryName(registryName) {
    return this._pathTemplates.registryPathTemplate.match(registryName).project;
  }

  /**
   * Parse the registryName from a registry resource.
   *
   * @param {String} registryName
   *   A fully-qualified path representing a registry resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromRegistryName(registryName) {
    return this._pathTemplates.registryPathTemplate.match(registryName)
      .location;
  }

  /**
   * Parse the registryName from a registry resource.
   *
   * @param {String} registryName
   *   A fully-qualified path representing a registry resources.
   * @returns {String} - A string representing the registry.
   */
  matchRegistryFromRegistryName(registryName) {
    return this._pathTemplates.registryPathTemplate.match(registryName)
      .registry;
  }

  /**
   * Parse the deviceName from a device resource.
   *
   * @param {String} deviceName
   *   A fully-qualified path representing a device resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromDeviceName(deviceName) {
    return this._pathTemplates.devicePathTemplate.match(deviceName).project;
  }

  /**
   * Parse the deviceName from a device resource.
   *
   * @param {String} deviceName
   *   A fully-qualified path representing a device resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromDeviceName(deviceName) {
    return this._pathTemplates.devicePathTemplate.match(deviceName).location;
  }

  /**
   * Parse the deviceName from a device resource.
   *
   * @param {String} deviceName
   *   A fully-qualified path representing a device resources.
   * @returns {String} - A string representing the registry.
   */
  matchRegistryFromDeviceName(deviceName) {
    return this._pathTemplates.devicePathTemplate.match(deviceName).registry;
  }

  /**
   * Parse the deviceName from a device resource.
   *
   * @param {String} deviceName
   *   A fully-qualified path representing a device resources.
   * @returns {String} - A string representing the device.
   */
  matchDeviceFromDeviceName(deviceName) {
    return this._pathTemplates.devicePathTemplate.match(deviceName).device;
  }
}

module.exports = DeviceManagerClient;
