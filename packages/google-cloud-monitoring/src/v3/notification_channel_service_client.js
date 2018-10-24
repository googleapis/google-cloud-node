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

const gapicConfig = require('./notification_channel_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * The Notification Channel API provides access to configuration that
 * controls how messages related to incidents are sent.
 *
 * @class
 * @memberof v3
 */
class NotificationChannelServiceClient {
  /**
   * Construct an instance of NotificationChannelServiceClient.
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
        'google/monitoring/v3/notification_service.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
      notificationChannelPathTemplate: new gax.PathTemplate(
        'projects/{project}/notificationChannels/{notification_channel}'
      ),
      notificationChannelDescriptorPathTemplate: new gax.PathTemplate(
        'projects/{project}/notificationChannelDescriptors/{channel_descriptor}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listNotificationChannelDescriptors: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'channelDescriptors'
      ),
      listNotificationChannels: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'notificationChannels'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.monitoring.v3.NotificationChannelService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.monitoring.v3.NotificationChannelService.
    const notificationChannelServiceStub = gaxGrpc.createStub(
      protos.google.monitoring.v3.NotificationChannelService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const notificationChannelServiceStubMethods = [
      'listNotificationChannelDescriptors',
      'getNotificationChannelDescriptor',
      'listNotificationChannels',
      'getNotificationChannel',
      'createNotificationChannel',
      'updateNotificationChannel',
      'deleteNotificationChannel',
    ];
    for (const methodName of notificationChannelServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        notificationChannelServiceStub.then(
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
   * Lists the descriptors for supported channel types. The use of descriptors
   * makes it possible for new channel types to be dynamically added.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The REST resource name of the parent from which to retrieve
   *   the notification channel descriptors. The expected syntax is:
   *
   *       projects/[PROJECT_ID]
   *
   *   Note that this names the parent container in which to look for the
   *   descriptors; to retrieve a single descriptor by name, use the
   *   GetNotificationChannelDescriptor
   *   operation, instead.
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
   *   The second parameter to the callback is Array of [NotificationChannelDescriptor]{@link google.monitoring.v3.NotificationChannelDescriptor}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListNotificationChannelDescriptorsResponse]{@link google.monitoring.v3.ListNotificationChannelDescriptorsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [NotificationChannelDescriptor]{@link google.monitoring.v3.NotificationChannelDescriptor}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [NotificationChannelDescriptor]{@link google.monitoring.v3.NotificationChannelDescriptor} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListNotificationChannelDescriptorsResponse]{@link google.monitoring.v3.ListNotificationChannelDescriptorsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.NotificationChannelServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedName = client.projectPath('[PROJECT]');
   *
   * client.listNotificationChannelDescriptors({name: formattedName})
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
   * const formattedName = client.projectPath('[PROJECT]');
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
   *     return client.listNotificationChannelDescriptors(nextRequest, options).then(callback);
   *   }
   * }
   * client.listNotificationChannelDescriptors({name: formattedName}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listNotificationChannelDescriptors(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listNotificationChannelDescriptors(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to {@link listNotificationChannelDescriptors}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listNotificationChannelDescriptors} continuously
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
   *   The REST resource name of the parent from which to retrieve
   *   the notification channel descriptors. The expected syntax is:
   *
   *       projects/[PROJECT_ID]
   *
   *   Note that this names the parent container in which to look for the
   *   descriptors; to retrieve a single descriptor by name, use the
   *   GetNotificationChannelDescriptor
   *   operation, instead.
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
   *   An object stream which emits an object representing [NotificationChannelDescriptor]{@link google.monitoring.v3.NotificationChannelDescriptor} on 'data' event.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.NotificationChannelServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.projectPath('[PROJECT]');
   * client.listNotificationChannelDescriptorsStream({name: formattedName})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listNotificationChannelDescriptorsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listNotificationChannelDescriptors.createStream(
      this._innerApiCalls.listNotificationChannelDescriptors,
      request,
      options
    );
  }

  /**
   * Gets a single channel descriptor. The descriptor indicates which fields
   * are expected / permitted for a notification channel of the given type.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The channel type for which to execute the request. The format is
   *   `projects/[PROJECT_ID]/notificationChannelDescriptors/{channel_type}`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [NotificationChannelDescriptor]{@link google.monitoring.v3.NotificationChannelDescriptor}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [NotificationChannelDescriptor]{@link google.monitoring.v3.NotificationChannelDescriptor}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.NotificationChannelServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.notificationChannelDescriptorPath('[PROJECT]', '[CHANNEL_DESCRIPTOR]');
   * client.getNotificationChannelDescriptor({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getNotificationChannelDescriptor(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getNotificationChannelDescriptor(
      request,
      options,
      callback
    );
  }

  /**
   * Lists the notification channels that have been created for the project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The project on which to execute the request. The format is
   *   `projects/[PROJECT_ID]`. That is, this names the container
   *   in which to look for the notification channels; it does not name a
   *   specific channel. To query a specific channel by REST resource name, use
   *   the
   *   `GetNotificationChannel` operation.
   * @param {string} [request.filter]
   *   If provided, this field specifies the criteria that must be met by
   *   notification channels to be included in the response.
   *
   *   For more details, see [sorting and
   *   filtering](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
   * @param {string} [request.orderBy]
   *   A comma-separated list of fields by which to sort the result. Supports
   *   the same set of fields as in `filter`. Entries can be prefixed with
   *   a minus sign to sort in descending rather than ascending order.
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
   *   The second parameter to the callback is Array of [NotificationChannel]{@link google.monitoring.v3.NotificationChannel}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListNotificationChannelsResponse]{@link google.monitoring.v3.ListNotificationChannelsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [NotificationChannel]{@link google.monitoring.v3.NotificationChannel}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [NotificationChannel]{@link google.monitoring.v3.NotificationChannel} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListNotificationChannelsResponse]{@link google.monitoring.v3.ListNotificationChannelsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.NotificationChannelServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedName = client.projectPath('[PROJECT]');
   *
   * client.listNotificationChannels({name: formattedName})
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
   * const formattedName = client.projectPath('[PROJECT]');
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
   *     return client.listNotificationChannels(nextRequest, options).then(callback);
   *   }
   * }
   * client.listNotificationChannels({name: formattedName}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listNotificationChannels(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listNotificationChannels(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to {@link listNotificationChannels}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listNotificationChannels} continuously
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
   *   The project on which to execute the request. The format is
   *   `projects/[PROJECT_ID]`. That is, this names the container
   *   in which to look for the notification channels; it does not name a
   *   specific channel. To query a specific channel by REST resource name, use
   *   the
   *   `GetNotificationChannel` operation.
   * @param {string} [request.filter]
   *   If provided, this field specifies the criteria that must be met by
   *   notification channels to be included in the response.
   *
   *   For more details, see [sorting and
   *   filtering](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
   * @param {string} [request.orderBy]
   *   A comma-separated list of fields by which to sort the result. Supports
   *   the same set of fields as in `filter`. Entries can be prefixed with
   *   a minus sign to sort in descending rather than ascending order.
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
   *   An object stream which emits an object representing [NotificationChannel]{@link google.monitoring.v3.NotificationChannel} on 'data' event.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.NotificationChannelServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.projectPath('[PROJECT]');
   * client.listNotificationChannelsStream({name: formattedName})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listNotificationChannelsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listNotificationChannels.createStream(
      this._innerApiCalls.listNotificationChannels,
      request,
      options
    );
  }

  /**
   * Gets a single notification channel. The channel includes the relevant
   * configuration details with which the channel was created. However, the
   * response may truncate or omit passwords, API keys, or other private key
   * matter and thus the response may not be 100% identical to the information
   * that was supplied in the call to the create method.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The channel for which to execute the request. The format is
   *   `projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [NotificationChannel]{@link google.monitoring.v3.NotificationChannel}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [NotificationChannel]{@link google.monitoring.v3.NotificationChannel}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.NotificationChannelServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.notificationChannelPath('[PROJECT]', '[NOTIFICATION_CHANNEL]');
   * client.getNotificationChannel({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getNotificationChannel(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getNotificationChannel(
      request,
      options,
      callback
    );
  }

  /**
   * Creates a new notification channel, representing a single notification
   * endpoint such as an email address, SMS number, or pagerduty service.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The project on which to execute the request. The format is:
   *
   *       projects/[PROJECT_ID]
   *
   *   Note that this names the container into which the channel will be
   *   written. This does not name the newly created channel. The resulting
   *   channel's name will have a normalized version of this field as a prefix,
   *   but will add `/notificationChannels/[CHANNEL_ID]` to identify the channel.
   * @param {Object} request.notificationChannel
   *   The definition of the `NotificationChannel` to create.
   *
   *   This object should have the same structure as [NotificationChannel]{@link google.monitoring.v3.NotificationChannel}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [NotificationChannel]{@link google.monitoring.v3.NotificationChannel}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [NotificationChannel]{@link google.monitoring.v3.NotificationChannel}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.NotificationChannelServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.projectPath('[PROJECT]');
   * const notificationChannel = {};
   * const request = {
   *   name: formattedName,
   *   notificationChannel: notificationChannel,
   * };
   * client.createNotificationChannel(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createNotificationChannel(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createNotificationChannel(
      request,
      options,
      callback
    );
  }

  /**
   * Updates a notification channel. Fields not specified in the field mask
   * remain unchanged.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.notificationChannel
   *   A description of the changes to be applied to the specified
   *   notification channel. The description must provide a definition for
   *   fields to be updated; the names of these fields should also be
   *   included in the `update_mask`.
   *
   *   This object should have the same structure as [NotificationChannel]{@link google.monitoring.v3.NotificationChannel}
   * @param {Object} [request.updateMask]
   *   The fields to update.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [NotificationChannel]{@link google.monitoring.v3.NotificationChannel}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [NotificationChannel]{@link google.monitoring.v3.NotificationChannel}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const monitoring = require('@google-cloud/monitoring');
   *
   * const client = new monitoring.v3.NotificationChannelServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const notificationChannel = {};
   * client.updateNotificationChannel({notificationChannel: notificationChannel})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateNotificationChannel(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateNotificationChannel(
      request,
      options,
      callback
    );
  }

  /**
   * Deletes a notification channel.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The channel for which to execute the request. The format is
   *   `projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]`.
   * @param {boolean} [request.force]
   *   If true, the notification channel will be deleted regardless of its
   *   use in alert policies (the policies will be updated to remove the
   *   channel). If false, channels that are still referenced by an existing
   *   alerting policy will fail to be deleted in a delete operation.
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
   * const client = new monitoring.v3.NotificationChannelServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.notificationChannelPath('[PROJECT]', '[NOTIFICATION_CHANNEL]');
   * client.deleteNotificationChannel({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteNotificationChannel(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteNotificationChannel(
      request,
      options,
      callback
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
   * Return a fully-qualified notification_channel resource name string.
   *
   * @param {String} project
   * @param {String} notificationChannel
   * @returns {String}
   */
  notificationChannelPath(project, notificationChannel) {
    return this._pathTemplates.notificationChannelPathTemplate.render({
      project: project,
      notification_channel: notificationChannel,
    });
  }

  /**
   * Return a fully-qualified notification_channel_descriptor resource name string.
   *
   * @param {String} project
   * @param {String} channelDescriptor
   * @returns {String}
   */
  notificationChannelDescriptorPath(project, channelDescriptor) {
    return this._pathTemplates.notificationChannelDescriptorPathTemplate.render(
      {
        project: project,
        channel_descriptor: channelDescriptor,
      }
    );
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
   * Parse the notificationChannelName from a notification_channel resource.
   *
   * @param {String} notificationChannelName
   *   A fully-qualified path representing a notification_channel resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromNotificationChannelName(notificationChannelName) {
    return this._pathTemplates.notificationChannelPathTemplate.match(
      notificationChannelName
    ).project;
  }

  /**
   * Parse the notificationChannelName from a notification_channel resource.
   *
   * @param {String} notificationChannelName
   *   A fully-qualified path representing a notification_channel resources.
   * @returns {String} - A string representing the notification_channel.
   */
  matchNotificationChannelFromNotificationChannelName(notificationChannelName) {
    return this._pathTemplates.notificationChannelPathTemplate.match(
      notificationChannelName
    ).notification_channel;
  }

  /**
   * Parse the notificationChannelDescriptorName from a notification_channel_descriptor resource.
   *
   * @param {String} notificationChannelDescriptorName
   *   A fully-qualified path representing a notification_channel_descriptor resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromNotificationChannelDescriptorName(
    notificationChannelDescriptorName
  ) {
    return this._pathTemplates.notificationChannelDescriptorPathTemplate.match(
      notificationChannelDescriptorName
    ).project;
  }

  /**
   * Parse the notificationChannelDescriptorName from a notification_channel_descriptor resource.
   *
   * @param {String} notificationChannelDescriptorName
   *   A fully-qualified path representing a notification_channel_descriptor resources.
   * @returns {String} - A string representing the channel_descriptor.
   */
  matchChannelDescriptorFromNotificationChannelDescriptorName(
    notificationChannelDescriptorName
  ) {
    return this._pathTemplates.notificationChannelDescriptorPathTemplate.match(
      notificationChannelDescriptorName
    ).channel_descriptor;
  }
}

module.exports = NotificationChannelServiceClient;
