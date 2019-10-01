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

const gapicConfig = require('./auto_ml_client_config.json');
const gax = require('google-gax');
const path = require('path');

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
 * Currently the only supported `location_id` is "us-central1".
 *
 * On any input that is documented to expect a string parameter in
 * snake_case or kebab-case, either of those cases is accepted.
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
      annotationSpecPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/datasets/{dataset}/annotationSpecs/{annotation_spec}'
      ),
      columnSpecPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/datasets/{dataset}/tableSpecs/{table_spec}/columnSpecs/{column_spec}'
      ),
      datasetPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/datasets/{dataset}'
      ),
      locationPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}'
      ),
      modelPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/models/{model}'
      ),
      modelEvaluationPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/models/{model}/modelEvaluations/{model_evaluation}'
      ),
      tableSpecPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/datasets/{dataset}/tableSpecs/{table_spec}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listDatasets: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'datasets'
      ),
      listModels: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'model'
      ),
      listModelEvaluations: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'modelEvaluation'
      ),
      listTableSpecs: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'tableSpecs'
      ),
      listColumnSpecs: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'columnSpecs'
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

    const deleteDatasetResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    const deleteDatasetMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );
    const importDataResponse = protoFilesRoot.lookup('google.protobuf.Empty');
    const importDataMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );
    const exportDataResponse = protoFilesRoot.lookup('google.protobuf.Empty');
    const exportDataMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );
    const createModelResponse = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.Model'
    );
    const createModelMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );
    const deleteModelResponse = protoFilesRoot.lookup('google.protobuf.Empty');
    const deleteModelMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );
    const deployModelResponse = protoFilesRoot.lookup('google.protobuf.Empty');
    const deployModelMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );
    const undeployModelResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    const undeployModelMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );
    const exportModelResponse = protoFilesRoot.lookup('google.protobuf.Empty');
    const exportModelMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );
    const exportEvaluatedExamplesResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    const exportEvaluatedExamplesMetadata = protoFilesRoot.lookup(
      'google.cloud.automl.v1beta1.OperationMetadata'
    );

    this._descriptors.longrunning = {
      deleteDataset: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        deleteDatasetResponse.decode.bind(deleteDatasetResponse),
        deleteDatasetMetadata.decode.bind(deleteDatasetMetadata)
      ),
      importData: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        importDataResponse.decode.bind(importDataResponse),
        importDataMetadata.decode.bind(importDataMetadata)
      ),
      exportData: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        exportDataResponse.decode.bind(exportDataResponse),
        exportDataMetadata.decode.bind(exportDataMetadata)
      ),
      createModel: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        createModelResponse.decode.bind(createModelResponse),
        createModelMetadata.decode.bind(createModelMetadata)
      ),
      deleteModel: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        deleteModelResponse.decode.bind(deleteModelResponse),
        deleteModelMetadata.decode.bind(deleteModelMetadata)
      ),
      deployModel: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        deployModelResponse.decode.bind(deployModelResponse),
        deployModelMetadata.decode.bind(deployModelMetadata)
      ),
      undeployModel: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        undeployModelResponse.decode.bind(undeployModelResponse),
        undeployModelMetadata.decode.bind(undeployModelMetadata)
      ),
      exportModel: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        exportModelResponse.decode.bind(exportModelResponse),
        exportModelMetadata.decode.bind(exportModelMetadata)
      ),
      exportEvaluatedExamples: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        exportEvaluatedExamplesResponse.decode.bind(
          exportEvaluatedExamplesResponse
        ),
        exportEvaluatedExamplesMetadata.decode.bind(
          exportEvaluatedExamplesMetadata
        )
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
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
    const autoMlStub = gaxGrpc.createStub(
      opts.fallback
        ? protos.lookupService('google.cloud.automl.v1beta1.AutoMl')
        : protos.google.cloud.automl.v1beta1.AutoMl,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const autoMlStubMethods = [
      'createDataset',
      'updateDataset',
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
      'exportModel',
      'exportEvaluatedExamples',
      'listModelEvaluations',
      'getAnnotationSpec',
      'getTableSpec',
      'listTableSpecs',
      'updateTableSpec',
      'getColumnSpec',
      'listColumnSpecs',
      'updateColumnSpec',
    ];
    for (const methodName of autoMlStubMethods) {
      const innerCallPromise = autoMlStub.then(
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
    return 'automl.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
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
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const dataset = {};
   * const request = {
   *   parent: formattedParent,
   *   dataset: dataset,
   * };
   * client.createDataset(request)
   *   .then(responses => {
   *     const response = responses[0];
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.createDataset(request, options, callback);
  }

  /**
   * Updates a dataset.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.dataset
   *   The dataset which replaces the resource on the server.
   *
   *   This object should have the same structure as [Dataset]{@link google.cloud.automl.v1beta1.Dataset}
   * @param {Object} [request.updateMask]
   *   The update mask applies to the resource.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const dataset = {};
   * client.updateDataset({dataset: dataset})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateDataset(request, options, callback) {
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
      'dataset.name': request.dataset.name,
    });

    return this._innerApiCalls.updateDataset(request, options, callback);
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
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   * client.getDataset({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

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
   *     * `dataset_metadata` - for existence of the case (e.g.
   *               image_classification_dataset_metadata:*). Some examples of using the filter are:
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
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listDatasets({parent: formattedParent})
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

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
   *     * `dataset_metadata` - for existence of the case (e.g.
   *               image_classification_dataset_metadata:*). Some examples of using the filter are:
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
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Dataset]{@link google.cloud.automl.v1beta1.Dataset} on 'data' event.
   *
   * @example
   *
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   *
   * // Handle the operation using the promise pattern.
   * client.deleteDataset({name: formattedName})
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
   * const formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.deleteDataset({name: formattedName})
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
   * const formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.deleteDataset({name: formattedName});
   *
   * const [response] = await operation.promise();
   */
  deleteDataset(request, options, callback) {
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

    return this._innerApiCalls.deleteDataset(request, options, callback);
  }

  /**
   * Imports data into a dataset.
   * For Tables this method can only be called on an empty Dataset.
   *
   * For Tables:
   * *   A
   * schema_inference_version
   *     parameter must be explicitly set.
   * Returns an empty response in the
   * response field when it completes.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Dataset name. Dataset must already exist. All imported
   *   annotations and examples will be added.
   * @param {Object} request.inputConfig
   *   Required. The desired input location and its domain specific semantics,
   *   if any.
   *
   *   This object should have the same structure as [InputConfig]{@link google.cloud.automl.v1beta1.InputConfig}
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   * const inputConfig = {};
   * const request = {
   *   name: formattedName,
   *   inputConfig: inputConfig,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.importData(request)
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
   * const formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   * const inputConfig = {};
   * const request = {
   *   name: formattedName,
   *   inputConfig: inputConfig,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.importData(request)
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
   * const formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   * const inputConfig = {};
   * const request = {
   *   name: formattedName,
   *   inputConfig: inputConfig,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.importData(request);
   *
   * const [response] = await operation.promise();
   */
  importData(request, options, callback) {
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

    return this._innerApiCalls.importData(request, options, callback);
  }

  /**
   * Exports dataset's data to the provided output location.
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.exportData(request)
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
   * const formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.exportData(request)
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
   * const formattedName = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.exportData(request);
   *
   * const [response] = await operation.promise();
   */
  exportData(request, options, callback) {
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const model = {};
   * const request = {
   *   parent: formattedParent,
   *   model: model,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.createModel(request)
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
   * const model = {};
   * const request = {
   *   parent: formattedParent,
   *   model: model,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.createModel(request)
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
   * const model = {};
   * const request = {
   *   parent: formattedParent,
   *   model: model,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.createModel(request);
   *
   * const [response] = await operation.promise();
   */
  createModel(request, options, callback) {
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
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * client.getModel({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

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
   *     * `model_metadata` - for existence of the case (e.g.
   *               video_classification_model_metadata:*).
   *     * `dataset_id` - for = or !=. Some examples of using the filter are:
   *
   *     * `image_classification_model_metadata:*` --> The model has
   *                                          image_classification_model_metadata.
   *     * `dataset_id=5` --> The model was created from a dataset with ID 5.
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listModels({parent: formattedParent})
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

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
   *     * `model_metadata` - for existence of the case (e.g.
   *               video_classification_model_metadata:*).
   *     * `dataset_id` - for = or !=. Some examples of using the filter are:
   *
   *     * `image_classification_model_metadata:*` --> The model has
   *                                          image_classification_model_metadata.
   *     * `dataset_id=5` --> The model was created from a dataset with ID 5.
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
   *   An object stream which emits an object representing [Model]{@link google.cloud.automl.v1beta1.Model} on 'data' event.
   *
   * @example
   *
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   *
   * // Handle the operation using the promise pattern.
   * client.deleteModel({name: formattedName})
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
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.deleteModel({name: formattedName})
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
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.deleteModel({name: formattedName});
   *
   * const [response] = await operation.promise();
   */
  deleteModel(request, options, callback) {
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

    return this._innerApiCalls.deleteModel(request, options, callback);
  }

  /**
   * Deploys a model. If a model is already deployed, deploying it with the
   * same parameters has no effect. Deploying with different parametrs
   * (as e.g. changing
   *
   * node_number)
   *  will reset the deployment state without pausing the model's availability.
   *
   * Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically.
   *
   * Returns an empty response in the
   * response field when it completes.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the model to deploy.
   * @param {Object} [request.imageObjectDetectionModelDeploymentMetadata]
   *   Model deployment metadata specific to Image Object Detection.
   *
   *   This object should have the same structure as [ImageObjectDetectionModelDeploymentMetadata]{@link google.cloud.automl.v1beta1.ImageObjectDetectionModelDeploymentMetadata}
   * @param {Object} [request.imageClassificationModelDeploymentMetadata]
   *   Model deployment metadata specific to Image Classification.
   *
   *   This object should have the same structure as [ImageClassificationModelDeploymentMetadata]{@link google.cloud.automl.v1beta1.ImageClassificationModelDeploymentMetadata}
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   *
   * // Handle the operation using the promise pattern.
   * client.deployModel({name: formattedName})
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
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.deployModel({name: formattedName})
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
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.deployModel({name: formattedName});
   *
   * const [response] = await operation.promise();
   */
  deployModel(request, options, callback) {
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

    return this._innerApiCalls.deployModel(request, options, callback);
  }

  /**
   * Undeploys a model. If the model is not deployed this method has no effect.
   *
   * Only applicable for Text Classification, Image Object Detection and Tables;
   * all other domains manage deployment automatically.
   *
   * Returns an empty response in the
   * response field when it completes.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the model to undeploy.
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   *
   * // Handle the operation using the promise pattern.
   * client.undeployModel({name: formattedName})
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
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.undeployModel({name: formattedName})
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
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.undeployModel({name: formattedName});
   *
   * const [response] = await operation.promise();
   */
  undeployModel(request, options, callback) {
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
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.modelEvaluationPath('[PROJECT]', '[LOCATION]', '[MODEL]', '[MODEL_EVALUATION]');
   * client.getModelEvaluation({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.getModelEvaluation(request, options, callback);
  }

  /**
   * Exports a trained, "export-able", model to a user specified Google Cloud
   * Storage location. A model is considered export-able if and only if it has
   * an export format defined for it in
   *
   * ModelExportOutputConfig.
   *
   * Returns an empty response in the
   * response field when it completes.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the model to export.
   * @param {Object} request.outputConfig
   *   Required. The desired output location and configuration.
   *
   *   This object should have the same structure as [ModelExportOutputConfig]{@link google.cloud.automl.v1beta1.ModelExportOutputConfig}
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.exportModel(request)
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
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.exportModel(request)
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
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.exportModel(request);
   *
   * const [response] = await operation.promise();
   */
  exportModel(request, options, callback) {
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

    return this._innerApiCalls.exportModel(request, options, callback);
  }

  /**
   * Exports examples on which the model was evaluated (i.e. which were in the
   * TEST set of the dataset the model was created from), together with their
   * ground truth annotations and the annotations created (predicted) by the
   * model.
   * The examples, ground truth and predictions are exported in the state
   * they were at the moment the model was evaluated.
   *
   * This export is available only for 30 days since the model evaluation is
   * created.
   *
   * Currently only available for Tables.
   *
   * Returns an empty response in the
   * response field when it completes.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The resource name of the model whose evaluated examples are to
   *   be exported.
   * @param {Object} request.outputConfig
   *   Required. The desired output location and configuration.
   *
   *   This object should have the same structure as [ExportEvaluatedExamplesOutputConfig]{@link google.cloud.automl.v1beta1.ExportEvaluatedExamplesOutputConfig}
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.exportEvaluatedExamples(request)
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
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.exportEvaluatedExamples(request)
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
   * const formattedName = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.exportEvaluatedExamples(request);
   *
   * const [response] = await operation.promise();
   */
  exportEvaluatedExamples(request, options, callback) {
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

    return this._innerApiCalls.exportEvaluatedExamples(
      request,
      options,
      callback
    );
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
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
   *
   * client.listModelEvaluations({parent: formattedParent})
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
   * const formattedParent = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

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
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [ModelEvaluation]{@link google.cloud.automl.v1beta1.ModelEvaluation} on 'data' event.
   *
   * @example
   *
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.modelPath('[PROJECT]', '[LOCATION]', '[MODEL]');
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

  /**
   * Gets an annotation spec.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The resource name of the annotation spec to retrieve.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [AnnotationSpec]{@link google.cloud.automl.v1beta1.AnnotationSpec}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [AnnotationSpec]{@link google.cloud.automl.v1beta1.AnnotationSpec}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.annotationSpecPath('[PROJECT]', '[LOCATION]', '[DATASET]', '[ANNOTATION_SPEC]');
   * client.getAnnotationSpec({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getAnnotationSpec(request, options, callback) {
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

    return this._innerApiCalls.getAnnotationSpec(request, options, callback);
  }

  /**
   * Gets a table spec.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The resource name of the table spec to retrieve.
   * @param {Object} [request.fieldMask]
   *   Mask specifying which fields to read.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TableSpec]{@link google.cloud.automl.v1beta1.TableSpec}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TableSpec]{@link google.cloud.automl.v1beta1.TableSpec}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.tableSpecPath('[PROJECT]', '[LOCATION]', '[DATASET]', '[TABLE_SPEC]');
   * client.getTableSpec({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getTableSpec(request, options, callback) {
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

    return this._innerApiCalls.getTableSpec(request, options, callback);
  }

  /**
   * Lists table specs in a dataset.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the dataset to list table specs from.
   * @param {Object} [request.fieldMask]
   *   Mask specifying which fields to read.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {string} [request.filter]
   *   Filter expression, see go/filtering.
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
   *   The second parameter to the callback is Array of [TableSpec]{@link google.cloud.automl.v1beta1.TableSpec}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListTableSpecsResponse]{@link google.cloud.automl.v1beta1.ListTableSpecsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [TableSpec]{@link google.cloud.automl.v1beta1.TableSpec}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [TableSpec]{@link google.cloud.automl.v1beta1.TableSpec} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListTableSpecsResponse]{@link google.cloud.automl.v1beta1.ListTableSpecsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   *
   * client.listTableSpecs({parent: formattedParent})
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
   * const formattedParent = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
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
   *     return client.listTableSpecs(nextRequest, options).then(callback);
   *   }
   * }
   * client.listTableSpecs({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listTableSpecs(request, options, callback) {
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

    return this._innerApiCalls.listTableSpecs(request, options, callback);
  }

  /**
   * Equivalent to {@link listTableSpecs}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listTableSpecs} continuously
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
   *   The resource name of the dataset to list table specs from.
   * @param {Object} [request.fieldMask]
   *   Mask specifying which fields to read.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {string} [request.filter]
   *   Filter expression, see go/filtering.
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
   *   An object stream which emits an object representing [TableSpec]{@link google.cloud.automl.v1beta1.TableSpec} on 'data' event.
   *
   * @example
   *
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.datasetPath('[PROJECT]', '[LOCATION]', '[DATASET]');
   * client.listTableSpecsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listTableSpecsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listTableSpecs.createStream(
      this._innerApiCalls.listTableSpecs,
      request,
      options
    );
  }

  /**
   * Updates a table spec.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.tableSpec
   *   The table spec which replaces the resource on the server.
   *
   *   This object should have the same structure as [TableSpec]{@link google.cloud.automl.v1beta1.TableSpec}
   * @param {Object} [request.updateMask]
   *   The update mask applies to the resource.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TableSpec]{@link google.cloud.automl.v1beta1.TableSpec}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TableSpec]{@link google.cloud.automl.v1beta1.TableSpec}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const tableSpec = {};
   * client.updateTableSpec({tableSpec: tableSpec})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateTableSpec(request, options, callback) {
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
      'table_spec.name': request.tableSpec.name,
    });

    return this._innerApiCalls.updateTableSpec(request, options, callback);
  }

  /**
   * Gets a column spec.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The resource name of the column spec to retrieve.
   * @param {Object} [request.fieldMask]
   *   Mask specifying which fields to read.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ColumnSpec]{@link google.cloud.automl.v1beta1.ColumnSpec}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ColumnSpec]{@link google.cloud.automl.v1beta1.ColumnSpec}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.columnSpecPath('[PROJECT]', '[LOCATION]', '[DATASET]', '[TABLE_SPEC]', '[COLUMN_SPEC]');
   * client.getColumnSpec({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getColumnSpec(request, options, callback) {
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

    return this._innerApiCalls.getColumnSpec(request, options, callback);
  }

  /**
   * Lists column specs in a table spec.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The resource name of the table spec to list column specs from.
   * @param {Object} [request.fieldMask]
   *   Mask specifying which fields to read.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {string} [request.filter]
   *   Filter expression, see go/filtering.
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
   *   The second parameter to the callback is Array of [ColumnSpec]{@link google.cloud.automl.v1beta1.ColumnSpec}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListColumnSpecsResponse]{@link google.cloud.automl.v1beta1.ListColumnSpecsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [ColumnSpec]{@link google.cloud.automl.v1beta1.ColumnSpec}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [ColumnSpec]{@link google.cloud.automl.v1beta1.ColumnSpec} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListColumnSpecsResponse]{@link google.cloud.automl.v1beta1.ListColumnSpecsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.tableSpecPath('[PROJECT]', '[LOCATION]', '[DATASET]', '[TABLE_SPEC]');
   *
   * client.listColumnSpecs({parent: formattedParent})
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
   * const formattedParent = client.tableSpecPath('[PROJECT]', '[LOCATION]', '[DATASET]', '[TABLE_SPEC]');
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
   *     return client.listColumnSpecs(nextRequest, options).then(callback);
   *   }
   * }
   * client.listColumnSpecs({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listColumnSpecs(request, options, callback) {
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

    return this._innerApiCalls.listColumnSpecs(request, options, callback);
  }

  /**
   * Equivalent to {@link listColumnSpecs}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listColumnSpecs} continuously
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
   *   The resource name of the table spec to list column specs from.
   * @param {Object} [request.fieldMask]
   *   Mask specifying which fields to read.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {string} [request.filter]
   *   Filter expression, see go/filtering.
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
   *   An object stream which emits an object representing [ColumnSpec]{@link google.cloud.automl.v1beta1.ColumnSpec} on 'data' event.
   *
   * @example
   *
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.tableSpecPath('[PROJECT]', '[LOCATION]', '[DATASET]', '[TABLE_SPEC]');
   * client.listColumnSpecsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listColumnSpecsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listColumnSpecs.createStream(
      this._innerApiCalls.listColumnSpecs,
      request,
      options
    );
  }

  /**
   * Updates a column spec.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.columnSpec
   *   The column spec which replaces the resource on the server.
   *
   *   This object should have the same structure as [ColumnSpec]{@link google.cloud.automl.v1beta1.ColumnSpec}
   * @param {Object} [request.updateMask]
   *   The update mask applies to the resource.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ColumnSpec]{@link google.cloud.automl.v1beta1.ColumnSpec}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ColumnSpec]{@link google.cloud.automl.v1beta1.ColumnSpec}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const automl = require('@google-cloud/automl');
   *
   * const client = new automl.v1beta1.AutoMlClient({
   *   // optional auth parameters.
   * });
   *
   * const columnSpec = {};
   * client.updateColumnSpec({columnSpec: columnSpec})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateColumnSpec(request, options, callback) {
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
      'column_spec.name': request.columnSpec.name,
    });

    return this._innerApiCalls.updateColumnSpec(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified annotation_spec resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} dataset
   * @param {String} annotationSpec
   * @returns {String}
   */
  annotationSpecPath(project, location, dataset, annotationSpec) {
    return this._pathTemplates.annotationSpecPathTemplate.render({
      project: project,
      location: location,
      dataset: dataset,
      annotation_spec: annotationSpec,
    });
  }

  /**
   * Return a fully-qualified column_spec resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} dataset
   * @param {String} tableSpec
   * @param {String} columnSpec
   * @returns {String}
   */
  columnSpecPath(project, location, dataset, tableSpec, columnSpec) {
    return this._pathTemplates.columnSpecPathTemplate.render({
      project: project,
      location: location,
      dataset: dataset,
      table_spec: tableSpec,
      column_spec: columnSpec,
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
   * Return a fully-qualified table_spec resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} dataset
   * @param {String} tableSpec
   * @returns {String}
   */
  tableSpecPath(project, location, dataset, tableSpec) {
    return this._pathTemplates.tableSpecPathTemplate.render({
      project: project,
      location: location,
      dataset: dataset,
      table_spec: tableSpec,
    });
  }

  /**
   * Parse the annotationSpecName from a annotation_spec resource.
   *
   * @param {String} annotationSpecName
   *   A fully-qualified path representing a annotation_spec resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromAnnotationSpecName(annotationSpecName) {
    return this._pathTemplates.annotationSpecPathTemplate.match(
      annotationSpecName
    ).project;
  }

  /**
   * Parse the annotationSpecName from a annotation_spec resource.
   *
   * @param {String} annotationSpecName
   *   A fully-qualified path representing a annotation_spec resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromAnnotationSpecName(annotationSpecName) {
    return this._pathTemplates.annotationSpecPathTemplate.match(
      annotationSpecName
    ).location;
  }

  /**
   * Parse the annotationSpecName from a annotation_spec resource.
   *
   * @param {String} annotationSpecName
   *   A fully-qualified path representing a annotation_spec resources.
   * @returns {String} - A string representing the dataset.
   */
  matchDatasetFromAnnotationSpecName(annotationSpecName) {
    return this._pathTemplates.annotationSpecPathTemplate.match(
      annotationSpecName
    ).dataset;
  }

  /**
   * Parse the annotationSpecName from a annotation_spec resource.
   *
   * @param {String} annotationSpecName
   *   A fully-qualified path representing a annotation_spec resources.
   * @returns {String} - A string representing the annotation_spec.
   */
  matchAnnotationSpecFromAnnotationSpecName(annotationSpecName) {
    return this._pathTemplates.annotationSpecPathTemplate.match(
      annotationSpecName
    ).annotation_spec;
  }

  /**
   * Parse the columnSpecName from a column_spec resource.
   *
   * @param {String} columnSpecName
   *   A fully-qualified path representing a column_spec resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromColumnSpecName(columnSpecName) {
    return this._pathTemplates.columnSpecPathTemplate.match(columnSpecName)
      .project;
  }

  /**
   * Parse the columnSpecName from a column_spec resource.
   *
   * @param {String} columnSpecName
   *   A fully-qualified path representing a column_spec resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromColumnSpecName(columnSpecName) {
    return this._pathTemplates.columnSpecPathTemplate.match(columnSpecName)
      .location;
  }

  /**
   * Parse the columnSpecName from a column_spec resource.
   *
   * @param {String} columnSpecName
   *   A fully-qualified path representing a column_spec resources.
   * @returns {String} - A string representing the dataset.
   */
  matchDatasetFromColumnSpecName(columnSpecName) {
    return this._pathTemplates.columnSpecPathTemplate.match(columnSpecName)
      .dataset;
  }

  /**
   * Parse the columnSpecName from a column_spec resource.
   *
   * @param {String} columnSpecName
   *   A fully-qualified path representing a column_spec resources.
   * @returns {String} - A string representing the table_spec.
   */
  matchTableSpecFromColumnSpecName(columnSpecName) {
    return this._pathTemplates.columnSpecPathTemplate.match(columnSpecName)
      .table_spec;
  }

  /**
   * Parse the columnSpecName from a column_spec resource.
   *
   * @param {String} columnSpecName
   *   A fully-qualified path representing a column_spec resources.
   * @returns {String} - A string representing the column_spec.
   */
  matchColumnSpecFromColumnSpecName(columnSpecName) {
    return this._pathTemplates.columnSpecPathTemplate.match(columnSpecName)
      .column_spec;
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

  /**
   * Parse the tableSpecName from a table_spec resource.
   *
   * @param {String} tableSpecName
   *   A fully-qualified path representing a table_spec resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromTableSpecName(tableSpecName) {
    return this._pathTemplates.tableSpecPathTemplate.match(tableSpecName)
      .project;
  }

  /**
   * Parse the tableSpecName from a table_spec resource.
   *
   * @param {String} tableSpecName
   *   A fully-qualified path representing a table_spec resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromTableSpecName(tableSpecName) {
    return this._pathTemplates.tableSpecPathTemplate.match(tableSpecName)
      .location;
  }

  /**
   * Parse the tableSpecName from a table_spec resource.
   *
   * @param {String} tableSpecName
   *   A fully-qualified path representing a table_spec resources.
   * @returns {String} - A string representing the dataset.
   */
  matchDatasetFromTableSpecName(tableSpecName) {
    return this._pathTemplates.tableSpecPathTemplate.match(tableSpecName)
      .dataset;
  }

  /**
   * Parse the tableSpecName from a table_spec resource.
   *
   * @param {String} tableSpecName
   *   A fully-qualified path representing a table_spec resources.
   * @returns {String} - A string representing the table_spec.
   */
  matchTableSpecFromTableSpecName(tableSpecName) {
    return this._pathTemplates.tableSpecPathTemplate.match(tableSpecName)
      .table_spec;
  }
}

module.exports = AutoMlClient;
