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

const gapicConfig = require('./auto_ml_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');
const protobuf = require('protobufjs');

const VERSION = require('../../package.json').version;

/**
 * AutoML Server API.
 *
 * The resource names are assigned by the server.
 * The server never reuses names that it has created after the resources with
 * those names are deleted.
 *
 * An ID of a resource is the last element of the item's resource name. For
 * `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`, then
 * the id for the item is `{dataset_id}`.
 *
 * @class
 * @memberof v1beta1
 */
class AutoMlClient {
  /**
   * Construct an instance of AutoMlClient.
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
        'google/cloud/automl/v1beta1/service.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      locationPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}'
      ),
      datasetPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/datasets/{dataset}'
      ),
      modelPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/models/{model}'
      ),
      modelEvaluationPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/models/{model}/modelEvaluations/{model_evaluation}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listDatasets: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'datasets'
      ),
      listModels: new gax.PageDescriptor('pageToken', 'nextPageToken', 'model'),
      listModelEvaluations: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'modelEvaluation'
      ),
    };
    var protoFilesRoot = new gax.grpc.GoogleProtoFilesRoot();
    protoFilesRoot = protobuf.loadSync(
      path.join(
        __dirname,
        '..',
        '..',
        'protos',
        'google/cloud/automl/v1beta1/service.proto'
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

    var deleteDatasetResponse = protoFilesRoot.lookup('google.protobuf.Empty');
    var deleteDatasetMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );
    var importDataResponse = protoFilesRoot.lookup('google.protobuf.Empty');
    var importDataMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );
    var exportDataResponse = protoFilesRoot.lookup('google.protobuf.Empty');
    var exportDataMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );
    var createModelResponse = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.Model'
    );
    var createModelMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );
    var deleteModelResponse = protoFilesRoot.lookup('google.protobuf.Empty');
    var deleteModelMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );

    this._descriptors.longrunning = {
      deleteDataset: new gax.LongrunningDescriptor(
        this.operationsClient,
        deleteDatasetResponse.decode.bind(deleteDatasetResponse),
        deleteDatasetMetadata.decode.bind(deleteDatasetMetadata)
      ),
      importData: new gax.LongrunningDescriptor(
        this.operationsClient,
        importDataResponse.decode.bind(importDataResponse),
        importDataMetadata.decode.bind(importDataMetadata)
      ),
      exportData: new gax.LongrunningDescriptor(
        this.operationsClient,
        exportDataResponse.decode.bind(exportDataResponse),
        exportDataMetadata.decode.bind(exportDataMetadata)
      ),
      createModel: new gax.LongrunningDescriptor(
        this.operationsClient,
        createModelResponse.decode.bind(createModelResponse),
        createModelMetadata.decode.bind(createModelMetadata)
      ),
      deleteModel: new gax.LongrunningDescriptor(
        this.operationsClient,
        deleteModelResponse.decode.bind(deleteModelResponse),
        deleteModelMetadata.decode.bind(deleteModelMetadata)
      ),
    };

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
      'google.cloud.automl.v1beta1.AutoMl',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.automl.v1beta1.AutoMl.
    var autoMlStub = gaxGrpc.createStub(
      protos.google.cloud.automl.v1beta1.AutoMl,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var autoMlStubMethods = [
      'createDataset',
      'getDataset',
      'listDatasets',
      'deleteDataset',
      'importData',
      'exportData',
      'createModel',
      'getModel',
      'listModels',
      'deleteModel',
      'deployModel',
      'undeployModel',
      'getModelEvaluation',
      'listModelEvaluations',
    ];
    for (let methodName of autoMlStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        autoMlStub.then(
          stub =>
            function() {
              var args = Array.prototype.slice.call(arguments, 0);
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
    return 'automl.googleapis.com';
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
   * Creates a dataset.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the project to create the dataset for.
   * @param {Object} request.dataset
   *   The dataset to create.
   *
   *   This object should have the same structure as [Dataset]{@link google.cloud.automl.v1beta1.Dataset}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Dataset]{@link google.cloud.automl.v1beta1.Dataset}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Dataset]{@link google.cloud.automl.v1beta1.Dataset}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * var dataset = {};
   * var request = {
   *   parent: formattedParent,
   *   dataset: dataset,
   * };
   * client.createDataset(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createDataset(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createDataset(request, options, callback);
  }

  /**
   * Gets a dataset.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The resource name of the dataset to retrieve.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Dataset]{@link google.cloud.automl.v1beta1.Dataset}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Dataset]{@link google.cloud.automl.v1beta1.Dataset}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   * client.getDataset({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getDataset(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getDataset(request, options, callback);
  }

  /**
   * Lists datasets in a project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the project from which to list datasets.
   * @param {string} [request.filter]
   *   An expression for filtering the results of the request.
   *
   *     * `dataset_metadata` - for existence of the case.
   *
   *   An example of using the filter is:
   *
   *     * `translation_dataset_metadata:*` --> The dataset has
   *                                            translation_dataset_metadata.
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
   *   The second parameter to the callback is Array of [Dataset]{@link google.cloud.automl.v1beta1.Dataset}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListDatasetsResponse]{@link google.cloud.automl.v1beta1.ListDatasetsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Dataset]{@link google.cloud.automl.v1beta1.Dataset}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Dataset]{@link google.cloud.automl.v1beta1.Dataset} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListDatasetsResponse]{@link google.cloud.automl.v1beta1.ListDatasetsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listDatasets({parent: formattedParent})
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
   *     return client.listDatasets(nextRequest, options).then(callback);
   *   }
   * }
   * client.listDatasets({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listDatasets(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listDatasets(request, options, callback);
  }

  /**
   * Equivalent to {@link listDatasets}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listDatasets} continuously
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
   *   The resource name of the project from which to list datasets.
   * @param {string} [request.filter]
   *   An expression for filtering the results of the request.
   *
   *     * `dataset_metadata` - for existence of the case.
   *
   *   An example of using the filter is:
   *
   *     * `translation_dataset_metadata:*` --> The dataset has
   *                                            translation_dataset_metadata.
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
   *   An object stream which emits an object representing [Dataset]{@link google.cloud.automl.v1beta1.Dataset} on 'data' event.
   *
   * @example
   *
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * client.listDatasetsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listDatasetsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listDatasets.createStream(
      this._innerApiCalls.listDatasets,
      request,
      options
    );
  }

  /**
   * Deletes a dataset and all of its contents.
   * Returns empty response in the
   * response field when it completes,
   * and `delete_details` in the
   * metadata field.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The resource name of the dataset to delete.
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
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   *
   * // Handle the operation using the promise pattern.
   * client.deleteDataset({name: formattedName})
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     var result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     var metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     var finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * var formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.deleteDataset({name: formattedName})
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
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
  deleteDataset(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteDataset(request, options, callback);
  }

  /**
   * Imports data into a dataset.
   * Returns an empty response in the
   * response field when it completes.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Dataset name. Dataset must already exist. All imported
   *   annotations and examples will be added.
   * @param {Object} request.inputConfig
   *   Required. The desired input location.
   *
   *   This object should have the same structure as [InputConfig]{@link google.cloud.automl.v1beta1.InputConfig}
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
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   * var inputConfig = {};
   * var request = {
   *   name: formattedName,
   *   inputConfig: inputConfig,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.importData(request)
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     var result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     var metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     var finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * var formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   * var inputConfig = {};
   * var request = {
   *   name: formattedName,
   *   inputConfig: inputConfig,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.importData(request)
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
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
  importData(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.importData(request, options, callback);
  }

  /**
   * Exports dataset's data to a Google Cloud Storage bucket.
   * Returns an empty response in the
   * response field when it completes.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the dataset.
   * @param {Object} request.outputConfig
   *   Required. The desired output location.
   *
   *   This object should have the same structure as [OutputConfig]{@link google.cloud.automl.v1beta1.OutputConfig}
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
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   * var outputConfig = {};
   * var request = {
   *   name: formattedName,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.exportData(request)
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     var result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     var metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     var finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * var formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   * var outputConfig = {};
   * var request = {
   *   name: formattedName,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.exportData(request)
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
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
  exportData(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.exportData(request, options, callback);
  }

  /**
   * Creates a model.
   * Returns a Model in the response
   * field when it completes.
   * When you create a model, several model evaluations are created for it:
   * a global evaluation, and one evaluation for each annotation spec.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the parent project where the model is being created.
   * @param {Object} request.model
   *   The model to create.
   *
   *   This object should have the same structure as [Model]{@link google.cloud.automl.v1beta1.Model}
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
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * var model = {};
   * var request = {
   *   parent: formattedParent,
   *   model: model,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.createModel(request)
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     var result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     var metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     var finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * var model = {};
   * var request = {
   *   parent: formattedParent,
   *   model: model,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.createModel(request)
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
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
  createModel(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createModel(request, options, callback);
  }

  /**
   * Gets a model.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the model.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Model]{@link google.cloud.automl.v1beta1.Model}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Model]{@link google.cloud.automl.v1beta1.Model}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * client.getModel({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getModel(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getModel(request, options, callback);
  }

  /**
   * Lists models.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the project, from which to list the models.
   * @param {string} [request.filter]
   *   An expression for filtering the results of the request.
   *
   *     * `model_metadata` - for existence of the case.
   *     * `dataset_id` - for = or !=.
   *
   *   Some examples of using the filter are:
   *
   *     * `image_classification_model_metadata:*` --> The model has
   *                                          image_classification_model_metadata.
   *     * `dataset_id=5` --> The model was created from a sibling dataset with
   *                      ID 5.
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
   *   The second parameter to the callback is Array of [Model]{@link google.cloud.automl.v1beta1.Model}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListModelsResponse]{@link google.cloud.automl.v1beta1.ListModelsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Model]{@link google.cloud.automl.v1beta1.Model}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Model]{@link google.cloud.automl.v1beta1.Model} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListModelsResponse]{@link google.cloud.automl.v1beta1.ListModelsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listModels({parent: formattedParent})
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
   *     return client.listModels(nextRequest, options).then(callback);
   *   }
   * }
   * client.listModels({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listModels(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listModels(request, options, callback);
  }

  /**
   * Equivalent to {@link listModels}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listModels} continuously
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
   *   Resource name of the project, from which to list the models.
   * @param {string} [request.filter]
   *   An expression for filtering the results of the request.
   *
   *     * `model_metadata` - for existence of the case.
   *     * `dataset_id` - for = or !=.
   *
   *   Some examples of using the filter are:
   *
   *     * `image_classification_model_metadata:*` --> The model has
   *                                          image_classification_model_metadata.
   *     * `dataset_id=5` --> The model was created from a sibling dataset with
   *                      ID 5.
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
   *   An object stream which emits an object representing [Model]{@link google.cloud.automl.v1beta1.Model} on 'data' event.
   *
   * @example
   *
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * client.listModelsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listModelsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listModels.createStream(
      this._innerApiCalls.listModels,
      request,
      options
    );
  }

  /**
   * Deletes a model.
   * If a model is already deployed, this only deletes the model in AutoML BE,
   * and does not change the status of the deployed model in the production
   * environment.
   * Returns `google.protobuf.Empty` in the
   * response field when it completes,
   * and `delete_details` in the
   * metadata field.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the model being deleted.
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
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   *
   * // Handle the operation using the promise pattern.
   * client.deleteModel({name: formattedName})
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     var result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     var metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     var finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * var formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.deleteModel({name: formattedName})
   *   .then(responses => {
   *     var operation = responses[0];
   *     var initialApiResponse = responses[1];
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
  deleteModel(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteModel(request, options, callback);
  }

  /**
   * Deploys model.
   * Returns a DeployModelResponse in the
   * response field when it completes.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the model to deploy.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
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
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * client.deployModel({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  deployModel(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deployModel(request, options, callback);
  }

  /**
   * Undeploys model.
   * Returns an `UndeployModelResponse` in the
   * response field when it completes.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the model to undeploy.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
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
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * client.undeployModel({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  undeployModel(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.undeployModel(request, options, callback);
  }

  /**
   * Gets a model evaluation.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name for the model evaluation.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ModelEvaluation]{@link google.cloud.automl.v1beta1.ModelEvaluation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ModelEvaluation]{@link google.cloud.automl.v1beta1.ModelEvaluation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.modelEvaluationPath('[PROJECT]', '[LOCATION]', '[MODEL]', '[MODEL_EVALUATION]');
   * client.getModelEvaluation({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getModelEvaluation(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getModelEvaluation(request, options, callback);
  }

  /**
   * Lists model evaluations.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Resource name of the model to list the model evaluations for.
   *   If modelId is set as "-", this will list model evaluations from across all
   *   models of the parent location.
   * @param {string} [request.filter]
   *   An expression for filtering the results of the request.
   *
   *     * `annotation_spec_id` - for =, !=  or existence. See example below for
   *                            the last.
   *
   *   Some examples of using the filter are:
   *
   *     * `annotation_spec_id!=4` --> The model evaluation was done for
   *                               annotation spec with ID different than 4.
   *     * `NOT annotation_spec_id:*` --> The model evaluation was done for
   *                                  aggregate of all annotation specs.
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
   *   The second parameter to the callback is Array of [ModelEvaluation]{@link google.cloud.automl.v1beta1.ModelEvaluation}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListModelEvaluationsResponse]{@link google.cloud.automl.v1beta1.ListModelEvaluationsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [ModelEvaluation]{@link google.cloud.automl.v1beta1.ModelEvaluation}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [ModelEvaluation]{@link google.cloud.automl.v1beta1.ModelEvaluation} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListModelEvaluationsResponse]{@link google.cloud.automl.v1beta1.ListModelEvaluationsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   *
   * client.listModelEvaluations({parent: formattedParent})
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
   * var formattedParent = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
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
   *     return client.listModelEvaluations(nextRequest, options).then(callback);
   *   }
   * }
   * client.listModelEvaluations({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listModelEvaluations(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listModelEvaluations(request, options, callback);
  }

  /**
   * Equivalent to {@link listModelEvaluations}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listModelEvaluations} continuously
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
   *   Resource name of the model to list the model evaluations for.
   *   If modelId is set as "-", this will list model evaluations from across all
   *   models of the parent location.
   * @param {string} [request.filter]
   *   An expression for filtering the results of the request.
   *
   *     * `annotation_spec_id` - for =, !=  or existence. See example below for
   *                            the last.
   *
   *   Some examples of using the filter are:
   *
   *     * `annotation_spec_id!=4` --> The model evaluation was done for
   *                               annotation spec with ID different than 4.
   *     * `NOT annotation_spec_id:*` --> The model evaluation was done for
   *                                  aggregate of all annotation specs.
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
   *   An object stream which emits an object representing [ModelEvaluation]{@link google.cloud.automl.v1beta1.ModelEvaluation} on 'data' event.
   *
   * @example
   *
   * const automl = require('automl.v1beta1');
   *
   * var client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * client.listModelEvaluationsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listModelEvaluationsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listModelEvaluations.createStream(
      this._innerApiCalls.listModelEvaluations,
      request,
      options
    );
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
   * Return a fully-qualified dataset resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} dataset
   * @returns {String}
   */
  datasetPath(project, location, dataset) {
    return this._pathTemplates.datasetPathTemplate.render({
      project: project,
      location: location,
      dataset: dataset,
    });
  }

  /**
   * Return a fully-qualified model resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} model
   * @returns {String}
   */
  modelPath(project, location, model) {
    return this._pathTemplates.modelPathTemplate.render({
      project: project,
      location: location,
      model: model,
    });
  }

  /**
   * Return a fully-qualified model_evaluation resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} model
   * @param {String} modelEvaluation
   * @returns {String}
   */
  modelEvaluationPath(project, location, model, modelEvaluation) {
    return this._pathTemplates.modelEvaluationPathTemplate.render({
      project: project,
      location: location,
      model: model,
      model_evaluation: modelEvaluation,
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
   * Parse the datasetName from a dataset resource.
   *
   * @param {String} datasetName
   *   A fully-qualified path representing a dataset resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromDatasetName(datasetName) {
    return this._pathTemplates.datasetPathTemplate.match(datasetName).project;
  }

  /**
   * Parse the datasetName from a dataset resource.
   *
   * @param {String} datasetName
   *   A fully-qualified path representing a dataset resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromDatasetName(datasetName) {
    return this._pathTemplates.datasetPathTemplate.match(datasetName).location;
  }

  /**
   * Parse the datasetName from a dataset resource.
   *
   * @param {String} datasetName
   *   A fully-qualified path representing a dataset resources.
   * @returns {String} - A string representing the dataset.
   */
  matchDatasetFromDatasetName(datasetName) {
    return this._pathTemplates.datasetPathTemplate.match(datasetName).dataset;
  }

  /**
   * Parse the modelName from a model resource.
   *
   * @param {String} modelName
   *   A fully-qualified path representing a model resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromModelName(modelName) {
    return this._pathTemplates.modelPathTemplate.match(modelName).project;
  }

  /**
   * Parse the modelName from a model resource.
   *
   * @param {String} modelName
   *   A fully-qualified path representing a model resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromModelName(modelName) {
    return this._pathTemplates.modelPathTemplate.match(modelName).location;
  }

  /**
   * Parse the modelName from a model resource.
   *
   * @param {String} modelName
   *   A fully-qualified path representing a model resources.
   * @returns {String} - A string representing the model.
   */
  matchModelFromModelName(modelName) {
    return this._pathTemplates.modelPathTemplate.match(modelName).model;
  }

  /**
   * Parse the modelEvaluationName from a model_evaluation resource.
   *
   * @param {String} modelEvaluationName
   *   A fully-qualified path representing a model_evaluation resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromModelEvaluationName(modelEvaluationName) {
    return this._pathTemplates.modelEvaluationPathTemplate.match(
      modelEvaluationName
    ).project;
  }

  /**
   * Parse the modelEvaluationName from a model_evaluation resource.
   *
   * @param {String} modelEvaluationName
   *   A fully-qualified path representing a model_evaluation resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromModelEvaluationName(modelEvaluationName) {
    return this._pathTemplates.modelEvaluationPathTemplate.match(
      modelEvaluationName
    ).location;
  }

  /**
   * Parse the modelEvaluationName from a model_evaluation resource.
   *
   * @param {String} modelEvaluationName
   *   A fully-qualified path representing a model_evaluation resources.
   * @returns {String} - A string representing the model.
   */
  matchModelFromModelEvaluationName(modelEvaluationName) {
    return this._pathTemplates.modelEvaluationPathTemplate.match(
      modelEvaluationName
    ).model;
  }

  /**
   * Parse the modelEvaluationName from a model_evaluation resource.
   *
   * @param {String} modelEvaluationName
   *   A fully-qualified path representing a model_evaluation resources.
   * @returns {String} - A string representing the model_evaluation.
   */
  matchModelEvaluationFromModelEvaluationName(modelEvaluationName) {
    return this._pathTemplates.modelEvaluationPathTemplate.match(
      modelEvaluationName
    ).model_evaluation;
  }
}

module.exports = AutoMlClient;
