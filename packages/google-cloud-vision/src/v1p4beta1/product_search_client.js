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

const gapicConfig = require('./product_search_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Manages Products and ProductSets of reference images for use in product
 * search. It uses the following resource model:
 *
 * - The API has a collection of
 * ProductSet resources, named
 * `projects/* /locations/* /productSets/*`, which acts as a way to put different
 * products into groups to limit identification.
 *
 * In parallel,
 *
 * - The API has a collection of
 * Product resources, named
 *   `projects/* /locations/* /products/*`
 *
 * - Each Product has a collection of
 * ReferenceImage resources,
 * named
 *   `projects/* /locations/* /products/* /referenceImages/*`
 *
 * @class
 * @memberof v1p4beta1
 */
class ProductSearchClient {
  /**
   * Construct an instance of ProductSearchClient.
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
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   */
  constructor(opts) {
    opts = opts || {};
    this._descriptors = {};

    if (global.isBrowser) {
      // If we're in browser, we use gRPC fallback.
      opts.fallback = true;
    }

    // If we are in browser, we are already using fallback because of the
    // "browser" field in package.json.
    // But if we were explicitly requested to use fallback, let's do it now.
    const gaxModule = !global.isBrowser && opts.fallback ? gax.fallback : gax;

    const servicePath =
      opts.servicePath || opts.apiEndpoint || this.constructor.servicePath;

    // Ensure that options include the service address and port.
    opts = Object.assign(
      {
        clientConfig: {},
        port: this.constructor.port,
        servicePath,
      },
      opts
    );

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = this.constructor.scopes;
    const gaxGrpc = new gaxModule.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    const clientHeader = [];

    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    }
    clientHeader.push(`gax/${gaxModule.version}`);
    if (opts.fallback) {
      clientHeader.push(`gl-web/${gaxModule.version}`);
    } else {
      clientHeader.push(`grpc/${gaxGrpc.grpcVersion}`);
    }
    clientHeader.push(`gapic/${VERSION}`);
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(
      __dirname,
      '..',
      '..',
      'protos',
      'protos.json'
    );
    const protos = gaxGrpc.loadProto(
      opts.fallback ? require('../../protos/protos.json') : nodejsProtoPath
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      locationPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}'
      ),
      productPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/products/{product}'
      ),
      productSetPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/productSets/{product_set}'
      ),
      referenceImagePathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/products/{product}/referenceImages/{reference_image}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listProductSets: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'productSets'
      ),
      listProducts: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'products'
      ),
      listReferenceImages: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'referenceImages'
      ),
      listProductsInProductSet: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'products'
      ),
    };

    const protoFilesRoot = opts.fallback
      ? gaxModule.protobuf.Root.fromJSON(require('../../protos/protos.json'))
      : gaxModule.protobuf.loadSync(nodejsProtoPath);

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    this.operationsClient = new gaxModule.lro({
      auth: gaxGrpc.auth,
      grpc: gaxGrpc.grpc,
    }).operationsClient(opts);

    const importProductSetsResponse = protoFilesRoot.lookup(
      'google.cloud.vision.v1p4beta1.ImportProductSetsResponse'
    );
    const importProductSetsMetadata = protoFilesRoot.lookup(
      'google.cloud.vision.v1p4beta1.BatchOperationMetadata'
    );

    this._descriptors.longrunning = {
      importProductSets: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        importProductSetsResponse.decode.bind(importProductSetsResponse),
        importProductSetsMetadata.decode.bind(importProductSetsMetadata)
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.vision.v1p4beta1.ProductSearch',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.vision.v1p4beta1.ProductSearch.
    const productSearchStub = gaxGrpc.createStub(
      opts.fallback
        ? protos.lookupService('google.cloud.vision.v1p4beta1.ProductSearch')
        : protos.google.cloud.vision.v1p4beta1.ProductSearch,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const productSearchStubMethods = [
      'createProductSet',
      'listProductSets',
      'getProductSet',
      'updateProductSet',
      'deleteProductSet',
      'createProduct',
      'listProducts',
      'getProduct',
      'updateProduct',
      'deleteProduct',
      'createReferenceImage',
      'deleteReferenceImage',
      'listReferenceImages',
      'getReferenceImage',
      'addProductToProductSet',
      'removeProductFromProductSet',
      'listProductsInProductSet',
      'importProductSets',
      'purgeProducts',
    ];
    for (const methodName of productSearchStubMethods) {
      const innerCallPromise = productSearchStub.then(
        stub => (...args) => {
          return stub[methodName].apply(stub, args);
        },
        err => () => {
          throw err;
        }
      );
      this._innerApiCalls[methodName] = gaxModule.createApiCall(
        innerCallPromise,
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
    return 'vision.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'vision.googleapis.com';
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
      'https://www.googleapis.com/auth/cloud-vision',
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
   * Creates and returns a new ProductSet resource.
   *
   * Possible errors:
   *
   * * Returns INVALID_ARGUMENT if display_name is missing, or is longer than
   *   4096 characters.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The project in which the ProductSet should be created.
   *
   *   Format is `projects/PROJECT_ID/locations/LOC_ID`.
   * @param {Object} request.productSet
   *   Required. The ProductSet to create.
   *
   *   This object should have the same structure as [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet}
   * @param {string} request.productSetId
   *   A user-supplied resource id for this ProductSet. If set, the server will
   *   attempt to use this value as the resource id. If it is already in use, an
   *   error is returned with code ALREADY_EXISTS. Must be at most 128 characters
   *   long. It cannot contain the character `/`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const productSet = {};
   * const productSetId = '';
   * const request = {
   *   parent: formattedParent,
   *   productSet: productSet,
   *   productSetId: productSetId,
   * };
   * client.createProductSet(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createProductSet(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.createProductSet(request, options, callback);
  }

  /**
   * Lists ProductSets in an unspecified order.
   *
   * Possible errors:
   *
   * * Returns INVALID_ARGUMENT if page_size is greater than 100, or less
   *   than 1.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The project from which ProductSets should be listed.
   *
   *   Format is `projects/PROJECT_ID/locations/LOC_ID`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListProductSetsResponse]{@link google.cloud.vision.v1p4beta1.ListProductSetsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListProductSetsResponse]{@link google.cloud.vision.v1p4beta1.ListProductSetsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listProductSets({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resource)
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
   *   for (const resource of resources) {
   *     // doThingsWith(resource);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listProductSets(nextRequest, options).then(callback);
   *   }
   * }
   * client.listProductSets({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listProductSets(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.listProductSets(request, options, callback);
  }

  /**
   * Equivalent to {@link listProductSets}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listProductSets} continuously
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
   *   Required. The project from which ProductSets should be listed.
   *
   *   Format is `projects/PROJECT_ID/locations/LOC_ID`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet} on 'data' event.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * client.listProductSetsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listProductSetsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listProductSets.createStream(
      this._innerApiCalls.listProductSets,
      request,
      options
    );
  }

  /**
   * Gets information associated with a ProductSet.
   *
   * Possible errors:
   *
   * * Returns NOT_FOUND if the ProductSet does not exist.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Resource name of the ProductSet to get.
   *
   *   Format is:
   *   `projects/PROJECT_ID/locations/LOG_ID/productSets/PRODUCT_SET_ID`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.productSetPath('[PROJECT]', '[LOCATION]', '[PRODUCT_SET]');
   * client.getProductSet({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getProductSet(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.getProductSet(request, options, callback);
  }

  /**
   * Makes changes to a ProductSet resource.
   * Only display_name can be updated currently.
   *
   * Possible errors:
   *
   * * Returns NOT_FOUND if the ProductSet does not exist.
   * * Returns INVALID_ARGUMENT if display_name is present in update_mask but
   *   missing from the request or longer than 4096 characters.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.productSet
   *   Required. The ProductSet resource which replaces the one on the server.
   *
   *   This object should have the same structure as [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet}
   * @param {Object} request.updateMask
   *   The FieldMask that specifies which fields to
   *   update.
   *   If update_mask isn't specified, all mutable fields are to be updated.
   *   Valid mask path is `display_name`.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const productSet = {};
   * const updateMask = {};
   * const request = {
   *   productSet: productSet,
   *   updateMask: updateMask,
   * };
   * client.updateProductSet(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateProductSet(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'product_set.name': request.productSet.name,
    });

    return this._innerApiCalls.updateProductSet(request, options, callback);
  }

  /**
   * Permanently deletes a ProductSet. Products and ReferenceImages in the
   * ProductSet are not deleted.
   *
   * The actual image files are not deleted from Google Cloud Storage.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Resource name of the ProductSet to delete.
   *
   *   Format is:
   *   `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.productSetPath('[PROJECT]', '[LOCATION]', '[PRODUCT_SET]');
   * client.deleteProductSet({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteProductSet(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.deleteProductSet(request, options, callback);
  }

  /**
   * Creates and returns a new product resource.
   *
   * Possible errors:
   *
   * * Returns INVALID_ARGUMENT if display_name is missing or longer than 4096
   *   characters.
   * * Returns INVALID_ARGUMENT if description is longer than 4096 characters.
   * * Returns INVALID_ARGUMENT if product_category is missing or invalid.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The project in which the Product should be created.
   *
   *   Format is
   *   `projects/PROJECT_ID/locations/LOC_ID`.
   * @param {Object} request.product
   *   Required. The product to create.
   *
   *   This object should have the same structure as [Product]{@link google.cloud.vision.v1p4beta1.Product}
   * @param {string} request.productId
   *   A user-supplied resource id for this Product. If set, the server will
   *   attempt to use this value as the resource id. If it is already in use, an
   *   error is returned with code ALREADY_EXISTS. Must be at most 128 characters
   *   long. It cannot contain the character `/`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Product]{@link google.cloud.vision.v1p4beta1.Product}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Product]{@link google.cloud.vision.v1p4beta1.Product}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const product = {};
   * const productId = '';
   * const request = {
   *   parent: formattedParent,
   *   product: product,
   *   productId: productId,
   * };
   * client.createProduct(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createProduct(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.createProduct(request, options, callback);
  }

  /**
   * Lists products in an unspecified order.
   *
   * Possible errors:
   *
   * * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The project OR ProductSet from which Products should be listed.
   *
   *   Format:
   *   `projects/PROJECT_ID/locations/LOC_ID`
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Product]{@link google.cloud.vision.v1p4beta1.Product}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListProductsResponse]{@link google.cloud.vision.v1p4beta1.ListProductsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Product]{@link google.cloud.vision.v1p4beta1.Product}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Product]{@link google.cloud.vision.v1p4beta1.Product} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListProductsResponse]{@link google.cloud.vision.v1p4beta1.ListProductsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listProducts({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resource)
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
   *   for (const resource of resources) {
   *     // doThingsWith(resource);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listProducts(nextRequest, options).then(callback);
   *   }
   * }
   * client.listProducts({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listProducts(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.listProducts(request, options, callback);
  }

  /**
   * Equivalent to {@link listProducts}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listProducts} continuously
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
   *   Required. The project OR ProductSet from which Products should be listed.
   *
   *   Format:
   *   `projects/PROJECT_ID/locations/LOC_ID`
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Product]{@link google.cloud.vision.v1p4beta1.Product} on 'data' event.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * client.listProductsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listProductsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listProducts.createStream(
      this._innerApiCalls.listProducts,
      request,
      options
    );
  }

  /**
   * Gets information associated with a Product.
   *
   * Possible errors:
   *
   * * Returns NOT_FOUND if the Product does not exist.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Resource name of the Product to get.
   *
   *   Format is:
   *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Product]{@link google.cloud.vision.v1p4beta1.Product}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Product]{@link google.cloud.vision.v1p4beta1.Product}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.productPath('[PROJECT]', '[LOCATION]', '[PRODUCT]');
   * client.getProduct({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getProduct(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.getProduct(request, options, callback);
  }

  /**
   * Makes changes to a Product resource.
   * Only the `display_name`, `description`, and `labels` fields can be updated
   * right now.
   *
   * If labels are updated, the change will not be reflected in queries until
   * the next index time.
   *
   * Possible errors:
   *
   * * Returns NOT_FOUND if the Product does not exist.
   * * Returns INVALID_ARGUMENT if display_name is present in update_mask but is
   *   missing from the request or longer than 4096 characters.
   * * Returns INVALID_ARGUMENT if description is present in update_mask but is
   *   longer than 4096 characters.
   * * Returns INVALID_ARGUMENT if product_category is present in update_mask.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.product
   *   Required. The Product resource which replaces the one on the server.
   *   product.name is immutable.
   *
   *   This object should have the same structure as [Product]{@link google.cloud.vision.v1p4beta1.Product}
   * @param {Object} request.updateMask
   *   The FieldMask that specifies which fields
   *   to update.
   *   If update_mask isn't specified, all mutable fields are to be updated.
   *   Valid mask paths include `product_labels`, `display_name`, and
   *   `description`.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Product]{@link google.cloud.vision.v1p4beta1.Product}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Product]{@link google.cloud.vision.v1p4beta1.Product}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const product = {};
   * const updateMask = {};
   * const request = {
   *   product: product,
   *   updateMask: updateMask,
   * };
   * client.updateProduct(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateProduct(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'product.name': request.product.name,
    });

    return this._innerApiCalls.updateProduct(request, options, callback);
  }

  /**
   * Permanently deletes a product and its reference images.
   *
   * Metadata of the product and all its images will be deleted right away, but
   * search queries against ProductSets containing the product may still work
   * until all related caches are refreshed.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Resource name of product to delete.
   *
   *   Format is:
   *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.productPath('[PROJECT]', '[LOCATION]', '[PRODUCT]');
   * client.deleteProduct({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteProduct(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.deleteProduct(request, options, callback);
  }

  /**
   * Creates and returns a new ReferenceImage resource.
   *
   * The `bounding_poly` field is optional. If `bounding_poly` is not specified,
   * the system will try to detect regions of interest in the image that are
   * compatible with the product_category on the parent product. If it is
   * specified, detection is ALWAYS skipped. The system converts polygons into
   * non-rotated rectangles.
   *
   * Note that the pipeline will resize the image if the image resolution is too
   * large to process (above 50MP).
   *
   * Possible errors:
   *
   * * Returns INVALID_ARGUMENT if the image_uri is missing or longer than 4096
   *   characters.
   * * Returns INVALID_ARGUMENT if the product does not exist.
   * * Returns INVALID_ARGUMENT if bounding_poly is not provided, and nothing
   *   compatible with the parent product's product_category is detected.
   * * Returns INVALID_ARGUMENT if bounding_poly contains more than 10 polygons.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of the product in which to create the reference
   *   image.
   *
   *   Format is
   *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
   * @param {Object} request.referenceImage
   *   Required. The reference image to create.
   *   If an image ID is specified, it is ignored.
   *
   *   This object should have the same structure as [ReferenceImage]{@link google.cloud.vision.v1p4beta1.ReferenceImage}
   * @param {string} request.referenceImageId
   *   A user-supplied resource id for the ReferenceImage to be added. If set,
   *   the server will attempt to use this value as the resource id. If it is
   *   already in use, an error is returned with code ALREADY_EXISTS. Must be at
   *   most 128 characters long. It cannot contain the character `/`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ReferenceImage]{@link google.cloud.vision.v1p4beta1.ReferenceImage}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ReferenceImage]{@link google.cloud.vision.v1p4beta1.ReferenceImage}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.productPath('[PROJECT]', '[LOCATION]', '[PRODUCT]');
   * const referenceImage = {};
   * const referenceImageId = '';
   * const request = {
   *   parent: formattedParent,
   *   referenceImage: referenceImage,
   *   referenceImageId: referenceImageId,
   * };
   * client.createReferenceImage(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createReferenceImage(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.createReferenceImage(request, options, callback);
  }

  /**
   * Permanently deletes a reference image.
   *
   * The image metadata will be deleted right away, but search queries
   * against ProductSets containing the image may still work until all related
   * caches are refreshed.
   *
   * The actual image files are not deleted from Google Cloud Storage.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the reference image to delete.
   *
   *   Format is:
   *
   *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.referenceImagePath('[PROJECT]', '[LOCATION]', '[PRODUCT]', '[REFERENCE_IMAGE]');
   * client.deleteReferenceImage({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteReferenceImage(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.deleteReferenceImage(request, options, callback);
  }

  /**
   * Lists reference images.
   *
   * Possible errors:
   *
   * * Returns NOT_FOUND if the parent product does not exist.
   * * Returns INVALID_ARGUMENT if the page_size is greater than 100, or less
   *   than 1.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of the product containing the reference images.
   *
   *   Format is
   *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [ReferenceImage]{@link google.cloud.vision.v1p4beta1.ReferenceImage}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListReferenceImagesResponse]{@link google.cloud.vision.v1p4beta1.ListReferenceImagesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [ReferenceImage]{@link google.cloud.vision.v1p4beta1.ReferenceImage}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [ReferenceImage]{@link google.cloud.vision.v1p4beta1.ReferenceImage} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListReferenceImagesResponse]{@link google.cloud.vision.v1p4beta1.ListReferenceImagesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.productPath('[PROJECT]', '[LOCATION]', '[PRODUCT]');
   *
   * client.listReferenceImages({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resource)
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.productPath('[PROJECT]', '[LOCATION]', '[PRODUCT]');
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
   *     // doThingsWith(resource);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listReferenceImages(nextRequest, options).then(callback);
   *   }
   * }
   * client.listReferenceImages({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listReferenceImages(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.listReferenceImages(request, options, callback);
  }

  /**
   * Equivalent to {@link listReferenceImages}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listReferenceImages} continuously
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
   *   Required. Resource name of the product containing the reference images.
   *
   *   Format is
   *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [ReferenceImage]{@link google.cloud.vision.v1p4beta1.ReferenceImage} on 'data' event.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.productPath('[PROJECT]', '[LOCATION]', '[PRODUCT]');
   * client.listReferenceImagesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listReferenceImagesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listReferenceImages.createStream(
      this._innerApiCalls.listReferenceImages,
      request,
      options
    );
  }

  /**
   * Gets information associated with a ReferenceImage.
   *
   * Possible errors:
   *
   * * Returns NOT_FOUND if the specified image does not exist.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the ReferenceImage to get.
   *
   *   Format is:
   *
   *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ReferenceImage]{@link google.cloud.vision.v1p4beta1.ReferenceImage}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ReferenceImage]{@link google.cloud.vision.v1p4beta1.ReferenceImage}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.referenceImagePath('[PROJECT]', '[LOCATION]', '[PRODUCT]', '[REFERENCE_IMAGE]');
   * client.getReferenceImage({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getReferenceImage(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.getReferenceImage(request, options, callback);
  }

  /**
   * Adds a Product to the specified ProductSet. If the Product is already
   * present, no change is made.
   *
   * One Product can be added to at most 100 ProductSets.
   *
   * Possible errors:
   *
   * * Returns NOT_FOUND if the Product or the ProductSet doesn't exist.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name for the ProductSet to modify.
   *
   *   Format is:
   *   `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
   * @param {string} request.product
   *   Required. The resource name for the Product to be added to this ProductSet.
   *
   *   Format is:
   *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.productSetPath('[PROJECT]', '[LOCATION]', '[PRODUCT_SET]');
   * const product = '';
   * const request = {
   *   name: formattedName,
   *   product: product,
   * };
   * client.addProductToProductSet(request).catch(err => {
   *   console.error(err);
   * });
   */
  addProductToProductSet(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.addProductToProductSet(
      request,
      options,
      callback
    );
  }

  /**
   * Removes a Product from the specified ProductSet.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name for the ProductSet to modify.
   *
   *   Format is:
   *   `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
   * @param {string} request.product
   *   Required. The resource name for the Product to be removed from this
   *   ProductSet.
   *
   *   Format is:
   *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.productSetPath('[PROJECT]', '[LOCATION]', '[PRODUCT_SET]');
   * const product = '';
   * const request = {
   *   name: formattedName,
   *   product: product,
   * };
   * client.removeProductFromProductSet(request).catch(err => {
   *   console.error(err);
   * });
   */
  removeProductFromProductSet(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.removeProductFromProductSet(
      request,
      options,
      callback
    );
  }

  /**
   * Lists the Products in a ProductSet, in an unspecified order. If the
   * ProductSet does not exist, the products field of the response will be
   * empty.
   *
   * Possible errors:
   *
   * * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The ProductSet resource for which to retrieve Products.
   *
   *   Format is:
   *   `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Product]{@link google.cloud.vision.v1p4beta1.Product}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListProductsInProductSetResponse]{@link google.cloud.vision.v1p4beta1.ListProductsInProductSetResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Product]{@link google.cloud.vision.v1p4beta1.Product}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Product]{@link google.cloud.vision.v1p4beta1.Product} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListProductsInProductSetResponse]{@link google.cloud.vision.v1p4beta1.ListProductsInProductSetResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedName = client.productSetPath('[PROJECT]', '[LOCATION]', '[PRODUCT_SET]');
   *
   * client.listProductsInProductSet({name: formattedName})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resource)
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedName = client.productSetPath('[PROJECT]', '[LOCATION]', '[PRODUCT_SET]');
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
   *     // doThingsWith(resource);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listProductsInProductSet(nextRequest, options).then(callback);
   *   }
   * }
   * client.listProductsInProductSet({name: formattedName}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listProductsInProductSet(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.listProductsInProductSet(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to {@link listProductsInProductSet}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listProductsInProductSet} continuously
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
   *   Required. The ProductSet resource for which to retrieve Products.
   *
   *   Format is:
   *   `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Product]{@link google.cloud.vision.v1p4beta1.Product} on 'data' event.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.productSetPath('[PROJECT]', '[LOCATION]', '[PRODUCT_SET]');
   * client.listProductsInProductSetStream({name: formattedName})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listProductsInProductSetStream(request, options) {
    options = options || {};

    return this._descriptors.page.listProductsInProductSet.createStream(
      this._innerApiCalls.listProductsInProductSet,
      request,
      options
    );
  }

  /**
   * Asynchronous API that imports a list of reference images to specified
   * product sets based on a list of image information.
   *
   * The google.longrunning.Operation API can be
   * used to keep track of the progress and results of the request.
   * `Operation.metadata` contains `BatchOperationMetadata`. (progress)
   * `Operation.response` contains `ImportProductSetsResponse`. (results)
   *
   * The input source of this method is a csv file on Google Cloud Storage.
   * For the format of the csv file please see
   * ImportProductSetsGcsSource.csv_file_uri.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The project in which the ProductSets should be imported.
   *
   *   Format is `projects/PROJECT_ID/locations/LOC_ID`.
   * @param {Object} request.inputConfig
   *   Required. The input content for the list of requests.
   *
   *   This object should have the same structure as [ImportProductSetsInputConfig]{@link google.cloud.vision.v1p4beta1.ImportProductSetsInputConfig}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const inputConfig = {};
   * const request = {
   *   parent: formattedParent,
   *   inputConfig: inputConfig,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.importProductSets(request)
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
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const inputConfig = {};
   * const request = {
   *   parent: formattedParent,
   *   inputConfig: inputConfig,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.importProductSets(request)
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
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const inputConfig = {};
   * const request = {
   *   parent: formattedParent,
   *   inputConfig: inputConfig,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.importProductSets(request);
   *
   * const [response] = await operation.promise();
   */
  importProductSets(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.importProductSets(request, options, callback);
  }

  /**
   * Asynchronous API to delete all Products in a ProductSet or all Products
   * that are in no ProductSet.
   *
   * If a Product is a member of the specified ProductSet in addition to other
   * ProductSets, the Product will still be deleted.
   *
   * It is recommended to not delete the specified ProductSet until after this
   * operation has completed. It is also recommended to not add any of the
   * Products involved in the batch delete to a new ProductSet while this
   * operation is running because those Products may still end up deleted.
   *
   * It's not possible to undo the PurgeProducts operation. Therefore, it is
   * recommended to keep the csv files used in ImportProductSets (if that was
   * how you originally built the Product Set) before starting PurgeProducts, in
   * case you need to re-import the data after deletion.
   *
   * If the plan is to purge all of the Products from a ProductSet and then
   * re-use the empty ProductSet to re-import new Products into the empty
   * ProductSet, you must wait until the PurgeProducts operation has finished
   * for that ProductSet.
   *
   * The google.longrunning.Operation API can be
   * used to keep track of the progress and results of the request.
   * `Operation.metadata` contains `BatchOperationMetadata`. (progress)
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} [request.productSetPurgeConfig]
   *   Specify which ProductSet contains the Products to be deleted.
   *
   *   This object should have the same structure as [ProductSetPurgeConfig]{@link google.cloud.vision.v1p4beta1.ProductSetPurgeConfig}
   * @param {boolean} [request.deleteOrphanProducts]
   *   If delete_orphan_products is true, all Products that are not in any
   *   ProductSet will be deleted.
   * @param {string} [request.parent]
   *   Required. The project and location in which the Products should be deleted.
   *
   *   Format is `projects/PROJECT_ID/locations/LOC_ID`.
   * @param {boolean} [request.force]
   *   The default value is false. Override this value to true to actually perform
   *   the purge.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.longrunning.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.longrunning.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const vision = require('vision.v1p4beta1');
   *
   * const client = new vision.v1p4beta1.ProductSearchClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.purgeProducts({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  purgeProducts(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.purgeProducts(request, options, callback);
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
   * Return a fully-qualified product resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} product
   * @returns {String}
   */
  productPath(project, location, product) {
    return this._pathTemplates.productPathTemplate.render({
      project: project,
      location: location,
      product: product,
    });
  }

  /**
   * Return a fully-qualified product_set resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} productSet
   * @returns {String}
   */
  productSetPath(project, location, productSet) {
    return this._pathTemplates.productSetPathTemplate.render({
      project: project,
      location: location,
      product_set: productSet,
    });
  }

  /**
   * Return a fully-qualified reference_image resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} product
   * @param {String} referenceImage
   * @returns {String}
   */
  referenceImagePath(project, location, product, referenceImage) {
    return this._pathTemplates.referenceImagePathTemplate.render({
      project: project,
      location: location,
      product: product,
      reference_image: referenceImage,
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
   * Parse the productName from a product resource.
   *
   * @param {String} productName
   *   A fully-qualified path representing a product resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromProductName(productName) {
    return this._pathTemplates.productPathTemplate.match(productName).project;
  }

  /**
   * Parse the productName from a product resource.
   *
   * @param {String} productName
   *   A fully-qualified path representing a product resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromProductName(productName) {
    return this._pathTemplates.productPathTemplate.match(productName).location;
  }

  /**
   * Parse the productName from a product resource.
   *
   * @param {String} productName
   *   A fully-qualified path representing a product resources.
   * @returns {String} - A string representing the product.
   */
  matchProductFromProductName(productName) {
    return this._pathTemplates.productPathTemplate.match(productName).product;
  }

  /**
   * Parse the productSetName from a product_set resource.
   *
   * @param {String} productSetName
   *   A fully-qualified path representing a product_set resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromProductSetName(productSetName) {
    return this._pathTemplates.productSetPathTemplate.match(productSetName)
      .project;
  }

  /**
   * Parse the productSetName from a product_set resource.
   *
   * @param {String} productSetName
   *   A fully-qualified path representing a product_set resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromProductSetName(productSetName) {
    return this._pathTemplates.productSetPathTemplate.match(productSetName)
      .location;
  }

  /**
   * Parse the productSetName from a product_set resource.
   *
   * @param {String} productSetName
   *   A fully-qualified path representing a product_set resources.
   * @returns {String} - A string representing the product_set.
   */
  matchProductSetFromProductSetName(productSetName) {
    return this._pathTemplates.productSetPathTemplate.match(productSetName)
      .product_set;
  }

  /**
   * Parse the referenceImageName from a reference_image resource.
   *
   * @param {String} referenceImageName
   *   A fully-qualified path representing a reference_image resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromReferenceImageName(referenceImageName) {
    return this._pathTemplates.referenceImagePathTemplate.match(
      referenceImageName
    ).project;
  }

  /**
   * Parse the referenceImageName from a reference_image resource.
   *
   * @param {String} referenceImageName
   *   A fully-qualified path representing a reference_image resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromReferenceImageName(referenceImageName) {
    return this._pathTemplates.referenceImagePathTemplate.match(
      referenceImageName
    ).location;
  }

  /**
   * Parse the referenceImageName from a reference_image resource.
   *
   * @param {String} referenceImageName
   *   A fully-qualified path representing a reference_image resources.
   * @returns {String} - A string representing the product.
   */
  matchProductFromReferenceImageName(referenceImageName) {
    return this._pathTemplates.referenceImagePathTemplate.match(
      referenceImageName
    ).product;
  }

  /**
   * Parse the referenceImageName from a reference_image resource.
   *
   * @param {String} referenceImageName
   *   A fully-qualified path representing a reference_image resources.
   * @returns {String} - A string representing the reference_image.
   */
  matchReferenceImageFromReferenceImageName(referenceImageName) {
    return this._pathTemplates.referenceImagePathTemplate.match(
      referenceImageName
    ).reference_image;
  }
}

module.exports = ProductSearchClient;
