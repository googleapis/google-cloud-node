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

const gapicConfig = require('./key_management_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Google Cloud Key Management Service
 *
 * Manages cryptographic keys and operations using those keys. Implements a REST
 * model with the following objects:
 *
 * * KeyRing
 * * CryptoKey
 * * CryptoKeyVersion
 *
 * If you are using manual gRPC libraries, see
 * [Using gRPC with Cloud KMS](https://cloud.google.com/kms/docs/grpc).
 *
 * @class
 * @memberof v1
 */
class KeyManagementServiceClient {
  /**
   * Construct an instance of KeyManagementServiceClient.
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
        'google/cloud/kms/v1/service.proto'
      ),
      gaxGrpc.loadProto(
        path.join(__dirname, '..', '..', 'protos'),
        'google/iam/v1/iam_policy.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      keyRingPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/keyRings/{key_ring}'
      ),
      cryptoKeyPathPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key_path=**}'
      ),
      locationPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}'
      ),
      cryptoKeyPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'
      ),
      cryptoKeyVersionPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listKeyRings: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'keyRings'
      ),
      listCryptoKeys: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'cryptoKeys'
      ),
      listCryptoKeyVersions: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'cryptoKeyVersions'
      ),
    };

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
      'google.cloud.kms.v1.KeyManagementService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.kms.v1.KeyManagementService.
    var keyManagementServiceStub = gaxGrpc.createStub(
      protos.google.cloud.kms.v1.KeyManagementService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var keyManagementServiceStubMethods = [
      'listKeyRings',
      'listCryptoKeys',
      'listCryptoKeyVersions',
      'getKeyRing',
      'getCryptoKey',
      'getCryptoKeyVersion',
      'createKeyRing',
      'createCryptoKey',
      'createCryptoKeyVersion',
      'updateCryptoKey',
      'updateCryptoKeyVersion',
      'encrypt',
      'decrypt',
      'updateCryptoKeyPrimaryVersion',
      'destroyCryptoKeyVersion',
      'restoreCryptoKeyVersion',
    ];
    for (let methodName of keyManagementServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        keyManagementServiceStub.then(
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

    // Put together the "service stub" for
    // google.iam.v1.IAMPolicy.
    var iamPolicyStub = gaxGrpc.createStub(
      protos.google.iam.v1.IAMPolicy,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var iamPolicyStubMethods = [
      'setIamPolicy',
      'getIamPolicy',
      'testIamPermissions',
    ];
    for (let methodName of iamPolicyStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        iamPolicyStub.then(
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
    return 'cloudkms.googleapis.com';
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
   * Lists KeyRings.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The resource name of the location associated with the
   *   KeyRings, in the format `projects/* /locations/*`.
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
   *   The second parameter to the callback is Array of [KeyRing]{@link google.cloud.kms.v1.KeyRing}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListKeyRingsResponse]{@link google.cloud.kms.v1.ListKeyRingsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [KeyRing]{@link google.cloud.kms.v1.KeyRing}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [KeyRing]{@link google.cloud.kms.v1.KeyRing} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListKeyRingsResponse]{@link google.cloud.kms.v1.ListKeyRingsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listKeyRings({parent: formattedParent})
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
   *     return client.listKeyRings(nextRequest, options).then(callback);
   *   }
   * }
   * client.listKeyRings({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listKeyRings(request, options, callback) {
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

    return this._innerApiCalls.listKeyRings(request, options, callback);
  }

  /**
   * Equivalent to {@link listKeyRings}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listKeyRings} continuously
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
   *   Required. The resource name of the location associated with the
   *   KeyRings, in the format `projects/* /locations/*`.
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
   *   An object stream which emits an object representing [KeyRing]{@link google.cloud.kms.v1.KeyRing} on 'data' event.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * client.listKeyRingsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listKeyRingsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listKeyRings.createStream(
      this._innerApiCalls.listKeyRings,
      request,
      options
    );
  }

  /**
   * Lists CryptoKeys.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The resource name of the KeyRing to list, in the format
   *   `projects/* /locations/* /keyRings/*`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number} [request.versionView]
   *   The fields of the primary version to include in the response.
   *
   *   The number should be among the values of [CryptoKeyVersionView]{@link google.cloud.kms.v1.CryptoKeyVersionView}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListCryptoKeysResponse]{@link google.cloud.kms.v1.ListCryptoKeysResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [CryptoKey]{@link google.cloud.kms.v1.CryptoKey} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListCryptoKeysResponse]{@link google.cloud.kms.v1.ListCryptoKeysResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.keyRingPath('[PROJECT]', '[LOCATION]', '[KEY_RING]');
   *
   * client.listCryptoKeys({parent: formattedParent})
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
   * var formattedParent = client.keyRingPath('[PROJECT]', '[LOCATION]', '[KEY_RING]');
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
   *     return client.listCryptoKeys(nextRequest, options).then(callback);
   *   }
   * }
   * client.listCryptoKeys({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listCryptoKeys(request, options, callback) {
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

    return this._innerApiCalls.listCryptoKeys(request, options, callback);
  }

  /**
   * Equivalent to {@link listCryptoKeys}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listCryptoKeys} continuously
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
   *   Required. The resource name of the KeyRing to list, in the format
   *   `projects/* /locations/* /keyRings/*`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number} [request.versionView]
   *   The fields of the primary version to include in the response.
   *
   *   The number should be among the values of [CryptoKeyVersionView]{@link google.cloud.kms.v1.CryptoKeyVersionView}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [CryptoKey]{@link google.cloud.kms.v1.CryptoKey} on 'data' event.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.keyRingPath('[PROJECT]', '[LOCATION]', '[KEY_RING]');
   * client.listCryptoKeysStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listCryptoKeysStream(request, options) {
    options = options || {};

    return this._descriptors.page.listCryptoKeys.createStream(
      this._innerApiCalls.listCryptoKeys,
      request,
      options
    );
  }

  /**
   * Lists CryptoKeyVersions.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The resource name of the CryptoKey to list, in the format
   *   `projects/* /locations/* /keyRings/* /cryptoKeys/*`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number} [request.view]
   *   The fields to include in the response.
   *
   *   The number should be among the values of [CryptoKeyVersionView]{@link google.cloud.kms.v1.CryptoKeyVersionView}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListCryptoKeyVersionsResponse]{@link google.cloud.kms.v1.ListCryptoKeyVersionsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListCryptoKeyVersionsResponse]{@link google.cloud.kms.v1.ListCryptoKeyVersionsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.cryptoKeyPath('[PROJECT]', '[LOCATION]', '[KEY_RING]', '[CRYPTO_KEY]');
   *
   * client.listCryptoKeyVersions({parent: formattedParent})
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
   * var formattedParent = client.cryptoKeyPath('[PROJECT]', '[LOCATION]', '[KEY_RING]', '[CRYPTO_KEY]');
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
   *     return client.listCryptoKeyVersions(nextRequest, options).then(callback);
   *   }
   * }
   * client.listCryptoKeyVersions({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listCryptoKeyVersions(request, options, callback) {
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

    return this._innerApiCalls.listCryptoKeyVersions(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to {@link listCryptoKeyVersions}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listCryptoKeyVersions} continuously
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
   *   Required. The resource name of the CryptoKey to list, in the format
   *   `projects/* /locations/* /keyRings/* /cryptoKeys/*`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number} [request.view]
   *   The fields to include in the response.
   *
   *   The number should be among the values of [CryptoKeyVersionView]{@link google.cloud.kms.v1.CryptoKeyVersionView}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion} on 'data' event.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.cryptoKeyPath('[PROJECT]', '[LOCATION]', '[KEY_RING]', '[CRYPTO_KEY]');
   * client.listCryptoKeyVersionsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listCryptoKeyVersionsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listCryptoKeyVersions.createStream(
      this._innerApiCalls.listCryptoKeyVersions,
      request,
      options
    );
  }

  /**
   * Returns metadata for a given KeyRing.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the KeyRing to get.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [KeyRing]{@link google.cloud.kms.v1.KeyRing}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [KeyRing]{@link google.cloud.kms.v1.KeyRing}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.keyRingPath('[PROJECT]', '[LOCATION]', '[KEY_RING]');
   * client.getKeyRing({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getKeyRing(request, options, callback) {
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

    return this._innerApiCalls.getKeyRing(request, options, callback);
  }

  /**
   * Returns metadata for a given CryptoKey, as well as its
   * primary CryptoKeyVersion.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the CryptoKey to get.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.cryptoKeyPath('[PROJECT]', '[LOCATION]', '[KEY_RING]', '[CRYPTO_KEY]');
   * client.getCryptoKey({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getCryptoKey(request, options, callback) {
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

    return this._innerApiCalls.getCryptoKey(request, options, callback);
  }

  /**
   * Returns metadata for a given CryptoKeyVersion.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the CryptoKeyVersion to get.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.cryptoKeyVersionPath('[PROJECT]', '[LOCATION]', '[KEY_RING]', '[CRYPTO_KEY]', '[CRYPTO_KEY_VERSION]');
   * client.getCryptoKeyVersion({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getCryptoKeyVersion(request, options, callback) {
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

    return this._innerApiCalls.getCryptoKeyVersion(request, options, callback);
  }

  /**
   * Create a new KeyRing in a given Project and Location.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The resource name of the location associated with the
   *   KeyRings, in the format `projects/* /locations/*`.
   * @param {string} request.keyRingId
   *   Required. It must be unique within a location and match the regular
   *   expression `[a-zA-Z0-9_-]{1,63}`
   * @param {Object} request.keyRing
   *   A KeyRing with initial field values.
   *
   *   This object should have the same structure as [KeyRing]{@link google.cloud.kms.v1.KeyRing}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [KeyRing]{@link google.cloud.kms.v1.KeyRing}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [KeyRing]{@link google.cloud.kms.v1.KeyRing}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * var keyRingId = '';
   * var keyRing = {};
   * var request = {
   *   parent: formattedParent,
   *   keyRingId: keyRingId,
   *   keyRing: keyRing,
   * };
   * client.createKeyRing(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createKeyRing(request, options, callback) {
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

    return this._innerApiCalls.createKeyRing(request, options, callback);
  }

  /**
   * Create a new CryptoKey within a KeyRing.
   *
   * CryptoKey.purpose and
   * CryptoKey.version_template.algorithm
   * are required.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the KeyRing associated with the
   *   CryptoKeys.
   * @param {string} request.cryptoKeyId
   *   Required. It must be unique within a KeyRing and match the regular
   *   expression `[a-zA-Z0-9_-]{1,63}`
   * @param {Object} request.cryptoKey
   *   A CryptoKey with initial field values.
   *
   *   This object should have the same structure as [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.keyRingPath('[PROJECT]', '[LOCATION]', '[KEY_RING]');
   * var cryptoKeyId = 'my-app-key';
   * var purpose = 'ENCRYPT_DECRYPT';
   * var seconds = 2147483647;
   * var nextRotationTime = {
   *   seconds: seconds,
   * };
   * var seconds2 = 604800;
   * var rotationPeriod = {
   *   seconds: seconds2,
   * };
   * var cryptoKey = {
   *   purpose: purpose,
   *   nextRotationTime: nextRotationTime,
   *   rotationPeriod: rotationPeriod,
   * };
   * var request = {
   *   parent: formattedParent,
   *   cryptoKeyId: cryptoKeyId,
   *   cryptoKey: cryptoKey,
   * };
   * client.createCryptoKey(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createCryptoKey(request, options, callback) {
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

    return this._innerApiCalls.createCryptoKey(request, options, callback);
  }

  /**
   * Create a new CryptoKeyVersion in a CryptoKey.
   *
   * The server will assign the next sequential id. If unset,
   * state will be set to
   * ENABLED.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the CryptoKey associated with
   *   the CryptoKeyVersions.
   * @param {Object} request.cryptoKeyVersion
   *   A CryptoKeyVersion with initial field values.
   *
   *   This object should have the same structure as [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.cryptoKeyPath('[PROJECT]', '[LOCATION]', '[KEY_RING]', '[CRYPTO_KEY]');
   * var cryptoKeyVersion = {};
   * var request = {
   *   parent: formattedParent,
   *   cryptoKeyVersion: cryptoKeyVersion,
   * };
   * client.createCryptoKeyVersion(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createCryptoKeyVersion(request, options, callback) {
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

    return this._innerApiCalls.createCryptoKeyVersion(
      request,
      options,
      callback
    );
  }

  /**
   * Update a CryptoKey.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.cryptoKey
   *   CryptoKey with updated values.
   *
   *   This object should have the same structure as [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}
   * @param {Object} request.updateMask
   *   Required list of fields to be updated in this request.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var cryptoKey = {};
   * var updateMask = {};
   * var request = {
   *   cryptoKey: cryptoKey,
   *   updateMask: updateMask,
   * };
   * client.updateCryptoKey(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateCryptoKey(request, options, callback) {
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
      'crypto_key.name': request.cryptoKey.name,
    });

    return this._innerApiCalls.updateCryptoKey(request, options, callback);
  }

  /**
   * Update a CryptoKeyVersion's metadata.
   *
   * state may be changed between
   * ENABLED and
   * DISABLED using this
   * method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to
   * move between other states.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.cryptoKeyVersion
   *   CryptoKeyVersion with updated values.
   *
   *   This object should have the same structure as [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}
   * @param {Object} request.updateMask
   *   Required list of fields to be updated in this request.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var cryptoKeyVersion = {};
   * var updateMask = {};
   * var request = {
   *   cryptoKeyVersion: cryptoKeyVersion,
   *   updateMask: updateMask,
   * };
   * client.updateCryptoKeyVersion(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateCryptoKeyVersion(request, options, callback) {
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
      'crypto_key_version.name': request.cryptoKeyVersion.name,
    });

    return this._innerApiCalls.updateCryptoKeyVersion(
      request,
      options,
      callback
    );
  }

  /**
   * Encrypts data, so that it can only be recovered by a call to Decrypt.
   * The CryptoKey.purpose must be
   * ENCRYPT_DECRYPT.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the CryptoKey or CryptoKeyVersion
   *   to use for encryption.
   *
   *   If a CryptoKey is specified, the server will use its
   *   primary version.
   * @param {string} request.plaintext
   *   Required. The data to encrypt. Must be no larger than 64KiB.
   *
   *   The maximum size depends on the key version's
   *   protection_level. For
   *   SOFTWARE keys, the plaintext must be no larger
   *   than 64KiB. For HSM keys, the combined length of the
   *   plaintext and additional_authenticated_data fields must be no larger than
   *   8KiB.
   * @param {string} [request.additionalAuthenticatedData]
   *   Optional data that, if specified, must also be provided during decryption
   *   through DecryptRequest.additional_authenticated_data.
   *
   *   The maximum size depends on the key version's
   *   protection_level. For
   *   SOFTWARE keys, the AAD must be no larger than
   *   64KiB. For HSM keys, the combined length of the
   *   plaintext and additional_authenticated_data fields must be no larger than
   *   8KiB.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [EncryptResponse]{@link google.cloud.kms.v1.EncryptResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [EncryptResponse]{@link google.cloud.kms.v1.EncryptResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.cryptoKeyPathPath('[PROJECT]', '[LOCATION]', '[KEY_RING]', '[CRYPTO_KEY_PATH]');
   * var plaintext = '';
   * var request = {
   *   name: formattedName,
   *   plaintext: plaintext,
   * };
   * client.encrypt(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  encrypt(request, options, callback) {
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

    return this._innerApiCalls.encrypt(request, options, callback);
  }

  /**
   * Decrypts data that was protected by Encrypt. The CryptoKey.purpose
   * must be ENCRYPT_DECRYPT.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the CryptoKey to use for decryption.
   *   The server will choose the appropriate version.
   * @param {string} request.ciphertext
   *   Required. The encrypted data originally returned in
   *   EncryptResponse.ciphertext.
   * @param {string} [request.additionalAuthenticatedData]
   *   Optional data that must match the data originally supplied in
   *   EncryptRequest.additional_authenticated_data.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DecryptResponse]{@link google.cloud.kms.v1.DecryptResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DecryptResponse]{@link google.cloud.kms.v1.DecryptResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.cryptoKeyPath('[PROJECT]', '[LOCATION]', '[KEY_RING]', '[CRYPTO_KEY]');
   * var ciphertext = '';
   * var request = {
   *   name: formattedName,
   *   ciphertext: ciphertext,
   * };
   * client.decrypt(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  decrypt(request, options, callback) {
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

    return this._innerApiCalls.decrypt(request, options, callback);
  }

  /**
   * Update the version of a CryptoKey that will be used in Encrypt.
   *
   * Returns an error if called on an asymmetric key.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The resource name of the CryptoKey to update.
   * @param {string} request.cryptoKeyVersionId
   *   The id of the child CryptoKeyVersion to use as primary.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [CryptoKey]{@link google.cloud.kms.v1.CryptoKey}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.cryptoKeyPath('[PROJECT]', '[LOCATION]', '[KEY_RING]', '[CRYPTO_KEY]');
   * var cryptoKeyVersionId = '';
   * var request = {
   *   name: formattedName,
   *   cryptoKeyVersionId: cryptoKeyVersionId,
   * };
   * client.updateCryptoKeyPrimaryVersion(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateCryptoKeyPrimaryVersion(request, options, callback) {
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

    return this._innerApiCalls.updateCryptoKeyPrimaryVersion(
      request,
      options,
      callback
    );
  }

  /**
   * Schedule a CryptoKeyVersion for destruction.
   *
   * Upon calling this method, CryptoKeyVersion.state will be set to
   * DESTROY_SCHEDULED
   * and destroy_time will be set to a time 24
   * hours in the future, at which point the state
   * will be changed to
   * DESTROYED, and the key
   * material will be irrevocably destroyed.
   *
   * Before the destroy_time is reached,
   * RestoreCryptoKeyVersion may be called to reverse the process.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The resource name of the CryptoKeyVersion to destroy.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.cryptoKeyVersionPath('[PROJECT]', '[LOCATION]', '[KEY_RING]', '[CRYPTO_KEY]', '[CRYPTO_KEY_VERSION]');
   * client.destroyCryptoKeyVersion({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  destroyCryptoKeyVersion(request, options, callback) {
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

    return this._innerApiCalls.destroyCryptoKeyVersion(
      request,
      options,
      callback
    );
  }

  /**
   * Restore a CryptoKeyVersion in the
   * DESTROY_SCHEDULED
   * state.
   *
   * Upon restoration of the CryptoKeyVersion, state
   * will be set to DISABLED,
   * and destroy_time will be cleared.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The resource name of the CryptoKeyVersion to restore.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [CryptoKeyVersion]{@link google.cloud.kms.v1.CryptoKeyVersion}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.cryptoKeyVersionPath('[PROJECT]', '[LOCATION]', '[KEY_RING]', '[CRYPTO_KEY]', '[CRYPTO_KEY_VERSION]');
   * client.restoreCryptoKeyVersion({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  restoreCryptoKeyVersion(request, options, callback) {
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

    return this._innerApiCalls.restoreCryptoKeyVersion(
      request,
      options,
      callback
    );
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
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedResource = client.keyRingPath('[PROJECT]', '[LOCATION]', '[KEY_RING]');
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
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedResource = client.keyRingPath('[PROJECT]', '[LOCATION]', '[KEY_RING]');
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
   * const kms = require('@google-cloud/kms');
   *
   * var client = new kms.v1.KeyManagementServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedResource = client.keyRingPath('[PROJECT]', '[LOCATION]', '[KEY_RING]');
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

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified key_ring resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} keyRing
   * @returns {String}
   */
  keyRingPath(project, location, keyRing) {
    return this._pathTemplates.keyRingPathTemplate.render({
      project: project,
      location: location,
      key_ring: keyRing,
    });
  }

  /**
   * Return a fully-qualified crypto_key_path resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} keyRing
   * @param {String} cryptoKeyPath
   * @returns {String}
   */
  cryptoKeyPathPath(project, location, keyRing, cryptoKeyPath) {
    return this._pathTemplates.cryptoKeyPathPathTemplate.render({
      project: project,
      location: location,
      key_ring: keyRing,
      crypto_key_path: cryptoKeyPath,
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
   * Return a fully-qualified crypto_key resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} keyRing
   * @param {String} cryptoKey
   * @returns {String}
   */
  cryptoKeyPath(project, location, keyRing, cryptoKey) {
    return this._pathTemplates.cryptoKeyPathTemplate.render({
      project: project,
      location: location,
      key_ring: keyRing,
      crypto_key: cryptoKey,
    });
  }

  /**
   * Return a fully-qualified crypto_key_version resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} keyRing
   * @param {String} cryptoKey
   * @param {String} cryptoKeyVersion
   * @returns {String}
   */
  cryptoKeyVersionPath(
    project,
    location,
    keyRing,
    cryptoKey,
    cryptoKeyVersion
  ) {
    return this._pathTemplates.cryptoKeyVersionPathTemplate.render({
      project: project,
      location: location,
      key_ring: keyRing,
      crypto_key: cryptoKey,
      crypto_key_version: cryptoKeyVersion,
    });
  }

  /**
   * Parse the keyRingName from a key_ring resource.
   *
   * @param {String} keyRingName
   *   A fully-qualified path representing a key_ring resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromKeyRingName(keyRingName) {
    return this._pathTemplates.keyRingPathTemplate.match(keyRingName).project;
  }

  /**
   * Parse the keyRingName from a key_ring resource.
   *
   * @param {String} keyRingName
   *   A fully-qualified path representing a key_ring resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromKeyRingName(keyRingName) {
    return this._pathTemplates.keyRingPathTemplate.match(keyRingName).location;
  }

  /**
   * Parse the keyRingName from a key_ring resource.
   *
   * @param {String} keyRingName
   *   A fully-qualified path representing a key_ring resources.
   * @returns {String} - A string representing the key_ring.
   */
  matchKeyRingFromKeyRingName(keyRingName) {
    return this._pathTemplates.keyRingPathTemplate.match(keyRingName).key_ring;
  }

  /**
   * Parse the cryptoKeyPathName from a crypto_key_path resource.
   *
   * @param {String} cryptoKeyPathName
   *   A fully-qualified path representing a crypto_key_path resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromCryptoKeyPathName(cryptoKeyPathName) {
    return this._pathTemplates.cryptoKeyPathPathTemplate.match(
      cryptoKeyPathName
    ).project;
  }

  /**
   * Parse the cryptoKeyPathName from a crypto_key_path resource.
   *
   * @param {String} cryptoKeyPathName
   *   A fully-qualified path representing a crypto_key_path resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromCryptoKeyPathName(cryptoKeyPathName) {
    return this._pathTemplates.cryptoKeyPathPathTemplate.match(
      cryptoKeyPathName
    ).location;
  }

  /**
   * Parse the cryptoKeyPathName from a crypto_key_path resource.
   *
   * @param {String} cryptoKeyPathName
   *   A fully-qualified path representing a crypto_key_path resources.
   * @returns {String} - A string representing the key_ring.
   */
  matchKeyRingFromCryptoKeyPathName(cryptoKeyPathName) {
    return this._pathTemplates.cryptoKeyPathPathTemplate.match(
      cryptoKeyPathName
    ).key_ring;
  }

  /**
   * Parse the cryptoKeyPathName from a crypto_key_path resource.
   *
   * @param {String} cryptoKeyPathName
   *   A fully-qualified path representing a crypto_key_path resources.
   * @returns {String} - A string representing the crypto_key_path.
   */
  matchCryptoKeyPathFromCryptoKeyPathName(cryptoKeyPathName) {
    return this._pathTemplates.cryptoKeyPathPathTemplate.match(
      cryptoKeyPathName
    ).crypto_key_path;
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
   * Parse the cryptoKeyName from a crypto_key resource.
   *
   * @param {String} cryptoKeyName
   *   A fully-qualified path representing a crypto_key resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromCryptoKeyName(cryptoKeyName) {
    return this._pathTemplates.cryptoKeyPathTemplate.match(cryptoKeyName)
      .project;
  }

  /**
   * Parse the cryptoKeyName from a crypto_key resource.
   *
   * @param {String} cryptoKeyName
   *   A fully-qualified path representing a crypto_key resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromCryptoKeyName(cryptoKeyName) {
    return this._pathTemplates.cryptoKeyPathTemplate.match(cryptoKeyName)
      .location;
  }

  /**
   * Parse the cryptoKeyName from a crypto_key resource.
   *
   * @param {String} cryptoKeyName
   *   A fully-qualified path representing a crypto_key resources.
   * @returns {String} - A string representing the key_ring.
   */
  matchKeyRingFromCryptoKeyName(cryptoKeyName) {
    return this._pathTemplates.cryptoKeyPathTemplate.match(cryptoKeyName)
      .key_ring;
  }

  /**
   * Parse the cryptoKeyName from a crypto_key resource.
   *
   * @param {String} cryptoKeyName
   *   A fully-qualified path representing a crypto_key resources.
   * @returns {String} - A string representing the crypto_key.
   */
  matchCryptoKeyFromCryptoKeyName(cryptoKeyName) {
    return this._pathTemplates.cryptoKeyPathTemplate.match(cryptoKeyName)
      .crypto_key;
  }

  /**
   * Parse the cryptoKeyVersionName from a crypto_key_version resource.
   *
   * @param {String} cryptoKeyVersionName
   *   A fully-qualified path representing a crypto_key_version resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromCryptoKeyVersionName(cryptoKeyVersionName) {
    return this._pathTemplates.cryptoKeyVersionPathTemplate.match(
      cryptoKeyVersionName
    ).project;
  }

  /**
   * Parse the cryptoKeyVersionName from a crypto_key_version resource.
   *
   * @param {String} cryptoKeyVersionName
   *   A fully-qualified path representing a crypto_key_version resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromCryptoKeyVersionName(cryptoKeyVersionName) {
    return this._pathTemplates.cryptoKeyVersionPathTemplate.match(
      cryptoKeyVersionName
    ).location;
  }

  /**
   * Parse the cryptoKeyVersionName from a crypto_key_version resource.
   *
   * @param {String} cryptoKeyVersionName
   *   A fully-qualified path representing a crypto_key_version resources.
   * @returns {String} - A string representing the key_ring.
   */
  matchKeyRingFromCryptoKeyVersionName(cryptoKeyVersionName) {
    return this._pathTemplates.cryptoKeyVersionPathTemplate.match(
      cryptoKeyVersionName
    ).key_ring;
  }

  /**
   * Parse the cryptoKeyVersionName from a crypto_key_version resource.
   *
   * @param {String} cryptoKeyVersionName
   *   A fully-qualified path representing a crypto_key_version resources.
   * @returns {String} - A string representing the crypto_key.
   */
  matchCryptoKeyFromCryptoKeyVersionName(cryptoKeyVersionName) {
    return this._pathTemplates.cryptoKeyVersionPathTemplate.match(
      cryptoKeyVersionName
    ).crypto_key;
  }

  /**
   * Parse the cryptoKeyVersionName from a crypto_key_version resource.
   *
   * @param {String} cryptoKeyVersionName
   *   A fully-qualified path representing a crypto_key_version resources.
   * @returns {String} - A string representing the crypto_key_version.
   */
  matchCryptoKeyVersionFromCryptoKeyVersionName(cryptoKeyVersionName) {
    return this._pathTemplates.cryptoKeyVersionPathTemplate.match(
      cryptoKeyVersionName
    ).crypto_key_version;
  }
}

module.exports = KeyManagementServiceClient;
