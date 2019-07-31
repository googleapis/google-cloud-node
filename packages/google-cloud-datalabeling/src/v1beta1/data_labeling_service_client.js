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

const gapicConfig = require('./data_labeling_service_client_config.json');
const gax = require('google-gax');
const path = require('path');
const protobuf = require('protobufjs');

const VERSION = require('../../package.json').version;

/**
 * @class
 * @memberof v1beta1
 */
class DataLabelingServiceClient {
  /**
   * Construct an instance of DataLabelingServiceClient.
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
    const protos = gaxGrpc.loadProto(
      path.join(__dirname, '..', '..', 'protos'),
      ['google/cloud/datalabeling/v1beta1/data_labeling_service.proto']
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      annotatedDatasetPathTemplate: new gax.PathTemplate(
        'projects/{project}/datasets/{dataset}/annotatedDatasets/{annotated_dataset}'
      ),
      annotationSpecSetPathTemplate: new gax.PathTemplate(
        'projects/{project}/annotationSpecSets/{annotation_spec_set}'
      ),
      dataItemPathTemplate: new gax.PathTemplate(
        'projects/{project}/datasets/{dataset}/dataItems/{data_item}'
      ),
      datasetPathTemplate: new gax.PathTemplate(
        'projects/{project}/datasets/{dataset}'
      ),
      examplePathTemplate: new gax.PathTemplate(
        'projects/{project}/datasets/{dataset}/annotatedDatasets/{annotated_dataset}/examples/{example}'
      ),
      instructionPathTemplate: new gax.PathTemplate(
        'projects/{project}/instructions/{instruction}'
      ),
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
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
      listDataItems: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'dataItems'
      ),
      listAnnotatedDatasets: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'annotatedDatasets'
      ),
      listExamples: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'examples'
      ),
      listAnnotationSpecSets: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'annotationSpecSets'
      ),
      listInstructions: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'instructions'
      ),
    };
    let protoFilesRoot = new gax.GoogleProtoFilesRoot();
    protoFilesRoot = protobuf.loadSync(
      path.join(
        __dirname,
        '..',
        '..',
        'protos',
        'google/cloud/datalabeling/v1beta1/data_labeling_service.proto'
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

    const importDataResponse = protoFilesRoot.lookup(
      'google.cloud.datalabeling.v1beta1.ImportDataOperationResponse'
    );
    const importDataMetadata = protoFilesRoot.lookup(
      'google.cloud.datalabeling.v1beta1.ImportDataOperationMetadata'
    );
    const exportDataResponse = protoFilesRoot.lookup(
      'google.cloud.datalabeling.v1beta1.ExportDataOperationResponse'
    );
    const exportDataMetadata = protoFilesRoot.lookup(
      'google.cloud.datalabeling.v1beta1.ExportDataOperationMetadata'
    );
    const labelImageResponse = protoFilesRoot.lookup(
      'google.cloud.datalabeling.v1beta1.AnnotatedDataset'
    );
    const labelImageMetadata = protoFilesRoot.lookup(
      'google.cloud.datalabeling.v1beta1.LabelOperationMetadata'
    );
    const labelVideoResponse = protoFilesRoot.lookup(
      'google.cloud.datalabeling.v1beta1.AnnotatedDataset'
    );
    const labelVideoMetadata = protoFilesRoot.lookup(
      'google.cloud.datalabeling.v1beta1.LabelOperationMetadata'
    );
    const labelTextResponse = protoFilesRoot.lookup(
      'google.cloud.datalabeling.v1beta1.AnnotatedDataset'
    );
    const labelTextMetadata = protoFilesRoot.lookup(
      'google.cloud.datalabeling.v1beta1.LabelOperationMetadata'
    );
    const labelAudioResponse = protoFilesRoot.lookup(
      'google.cloud.datalabeling.v1beta1.AnnotatedDataset'
    );
    const labelAudioMetadata = protoFilesRoot.lookup(
      'google.cloud.datalabeling.v1beta1.LabelOperationMetadata'
    );
    const createInstructionResponse = protoFilesRoot.lookup(
      'google.cloud.datalabeling.v1beta1.Instruction'
    );
    const createInstructionMetadata = protoFilesRoot.lookup(
      'google.cloud.datalabeling.v1beta1.CreateInstructionMetadata'
    );

    this._descriptors.longrunning = {
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
      labelImage: new gax.LongrunningDescriptor(
        this.operationsClient,
        labelImageResponse.decode.bind(labelImageResponse),
        labelImageMetadata.decode.bind(labelImageMetadata)
      ),
      labelVideo: new gax.LongrunningDescriptor(
        this.operationsClient,
        labelVideoResponse.decode.bind(labelVideoResponse),
        labelVideoMetadata.decode.bind(labelVideoMetadata)
      ),
      labelText: new gax.LongrunningDescriptor(
        this.operationsClient,
        labelTextResponse.decode.bind(labelTextResponse),
        labelTextMetadata.decode.bind(labelTextMetadata)
      ),
      labelAudio: new gax.LongrunningDescriptor(
        this.operationsClient,
        labelAudioResponse.decode.bind(labelAudioResponse),
        labelAudioMetadata.decode.bind(labelAudioMetadata)
      ),
      createInstruction: new gax.LongrunningDescriptor(
        this.operationsClient,
        createInstructionResponse.decode.bind(createInstructionResponse),
        createInstructionMetadata.decode.bind(createInstructionMetadata)
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.datalabeling.v1beta1.DataLabelingService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.datalabeling.v1beta1.DataLabelingService.
    const dataLabelingServiceStub = gaxGrpc.createStub(
      protos.google.cloud.datalabeling.v1beta1.DataLabelingService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const dataLabelingServiceStubMethods = [
      'createDataset',
      'getDataset',
      'listDatasets',
      'deleteDataset',
      'importData',
      'exportData',
      'getDataItem',
      'listDataItems',
      'getAnnotatedDataset',
      'listAnnotatedDatasets',
      'labelImage',
      'labelVideo',
      'labelText',
      'labelAudio',
      'getExample',
      'listExamples',
      'createAnnotationSpecSet',
      'getAnnotationSpecSet',
      'listAnnotationSpecSets',
      'deleteAnnotationSpecSet',
      'createInstruction',
      'getInstruction',
      'listInstructions',
      'deleteInstruction',
      'deleteAnnotatedDataset',
    ];
    for (const methodName of dataLabelingServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        dataLabelingServiceStub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            },
          err =>
            function() {
              throw err;
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
    return 'datalabeling.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'datalabeling.googleapis.com';
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
   * Creates dataset. If success return a Dataset resource.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Dataset resource parent, format:
   *   projects/{project_id}
   * @param {Object} request.dataset
   *   Required. The dataset to be created.
   *
   *   This object should have the same structure as [Dataset]{@link google.cloud.datalabeling.v1beta1.Dataset}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Dataset]{@link google.cloud.datalabeling.v1beta1.Dataset}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Dataset]{@link google.cloud.datalabeling.v1beta1.Dataset}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
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
   * Gets dataset by resource name.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Dataset resource name, format:
   *   projects/{project_id}/datasets/{dataset_id}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Dataset]{@link google.cloud.datalabeling.v1beta1.Dataset}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Dataset]{@link google.cloud.datalabeling.v1beta1.Dataset}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
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
   * Lists datasets under a project. Pagination is supported.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Dataset resource parent, format:
   *   projects/{project_id}
   * @param {string} [request.filter]
   *   Optional. Filter on dataset is not supported at this moment.
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
   *   The second parameter to the callback is Array of [Dataset]{@link google.cloud.datalabeling.v1beta1.Dataset}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListDatasetsResponse]{@link google.cloud.datalabeling.v1beta1.ListDatasetsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Dataset]{@link google.cloud.datalabeling.v1beta1.Dataset}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Dataset]{@link google.cloud.datalabeling.v1beta1.Dataset} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListDatasetsResponse]{@link google.cloud.datalabeling.v1beta1.ListDatasetsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
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
   * const formattedParent = client.projectPath('[PROJECT]');
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
   *   Required. Dataset resource parent, format:
   *   projects/{project_id}
   * @param {string} [request.filter]
   *   Optional. Filter on dataset is not supported at this moment.
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
   *   An object stream which emits an object representing [Dataset]{@link google.cloud.datalabeling.v1beta1.Dataset} on 'data' event.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
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
   * Deletes a dataset by resource name.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Dataset resource name, format:
   *   projects/{project_id}/datasets/{dataset_id}
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
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
   * client.deleteDataset({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteDataset(request, options, callback) {
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

    return this._innerApiCalls.deleteDataset(request, options, callback);
  }

  /**
   * Imports data into dataset based on source locations defined in request.
   * It can be called multiple times for the same dataset. Each dataset can
   * only have one long running operation running on it. For example, no
   * labeling task (also long running operation) can be started while
   * importing is still ongoing. Vice versa.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Dataset resource name, format:
   *   projects/{project_id}/datasets/{dataset_id}
   * @param {Object} request.inputConfig
   *   Required. Specify the input source of the data.
   *
   *   This object should have the same structure as [InputConfig]{@link google.cloud.datalabeling.v1beta1.InputConfig}
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
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
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
   * const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
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
   * const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
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
   * Exports data and annotations from dataset.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Dataset resource name, format:
   *   projects/{project_id}/datasets/{dataset_id}
   * @param {string} request.annotatedDataset
   *   Required. Annotated dataset resource name. DataItem in
   *   Dataset and their annotations in specified annotated dataset will be
   *   exported. It's in format of
   *   projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/
   *   {annotated_dataset_id}
   * @param {Object} request.outputConfig
   *   Required. Specify the output destination.
   *
   *   This object should have the same structure as [OutputConfig]{@link google.cloud.datalabeling.v1beta1.OutputConfig}
   * @param {string} [request.filter]
   *   Optional. Filter is not supported at this moment.
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
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
   * const annotatedDataset = '';
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   annotatedDataset: annotatedDataset,
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
   * const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
   * const annotatedDataset = '';
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   annotatedDataset: annotatedDataset,
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
   * const formattedName = client.datasetPath('[PROJECT]', '[DATASET]');
   * const annotatedDataset = '';
   * const outputConfig = {};
   * const request = {
   *   name: formattedName,
   *   annotatedDataset: annotatedDataset,
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
   * Gets a data item in a dataset by resource name. This API can be
   * called after data are imported into dataset.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the data item to get, format:
   *   projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DataItem]{@link google.cloud.datalabeling.v1beta1.DataItem}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DataItem]{@link google.cloud.datalabeling.v1beta1.DataItem}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.dataItemPath('[PROJECT]', '[DATASET]', '[DATA_ITEM]');
   * client.getDataItem({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getDataItem(request, options, callback) {
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

    return this._innerApiCalls.getDataItem(request, options, callback);
  }

  /**
   * Lists data items in a dataset. This API can be called after data
   * are imported into dataset. Pagination is supported.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Name of the dataset to list data items, format:
   *   projects/{project_id}/datasets/{dataset_id}
   * @param {string} [request.filter]
   *   Optional. Filter is not supported at this moment.
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
   *   The second parameter to the callback is Array of [DataItem]{@link google.cloud.datalabeling.v1beta1.DataItem}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListDataItemsResponse]{@link google.cloud.datalabeling.v1beta1.ListDataItemsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [DataItem]{@link google.cloud.datalabeling.v1beta1.DataItem}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [DataItem]{@link google.cloud.datalabeling.v1beta1.DataItem} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListDataItemsResponse]{@link google.cloud.datalabeling.v1beta1.ListDataItemsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   *
   * client.listDataItems({parent: formattedParent})
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
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
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
   *     return client.listDataItems(nextRequest, options).then(callback);
   *   }
   * }
   * client.listDataItems({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listDataItems(request, options, callback) {
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

    return this._innerApiCalls.listDataItems(request, options, callback);
  }

  /**
   * Equivalent to {@link listDataItems}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listDataItems} continuously
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
   *   Required. Name of the dataset to list data items, format:
   *   projects/{project_id}/datasets/{dataset_id}
   * @param {string} [request.filter]
   *   Optional. Filter is not supported at this moment.
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
   *   An object stream which emits an object representing [DataItem]{@link google.cloud.datalabeling.v1beta1.DataItem} on 'data' event.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   * client.listDataItemsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listDataItemsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listDataItems.createStream(
      this._innerApiCalls.listDataItems,
      request,
      options
    );
  }

  /**
   * Gets an annotated dataset by resource name.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Name of the annotated dataset to get, format:
   *   projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/
   *   {annotated_dataset_id}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [AnnotatedDataset]{@link google.cloud.datalabeling.v1beta1.AnnotatedDataset}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [AnnotatedDataset]{@link google.cloud.datalabeling.v1beta1.AnnotatedDataset}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.annotatedDatasetPath('[PROJECT]', '[DATASET]', '[ANNOTATED_DATASET]');
   * client.getAnnotatedDataset({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getAnnotatedDataset(request, options, callback) {
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

    return this._innerApiCalls.getAnnotatedDataset(request, options, callback);
  }

  /**
   * Lists annotated datasets for a dataset. Pagination is supported.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Name of the dataset to list annotated datasets, format:
   *   projects/{project_id}/datasets/{dataset_id}
   * @param {string} [request.filter]
   *   Optional. Filter is not supported at this moment.
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
   *   The second parameter to the callback is Array of [AnnotatedDataset]{@link google.cloud.datalabeling.v1beta1.AnnotatedDataset}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListAnnotatedDatasetsResponse]{@link google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [AnnotatedDataset]{@link google.cloud.datalabeling.v1beta1.AnnotatedDataset}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [AnnotatedDataset]{@link google.cloud.datalabeling.v1beta1.AnnotatedDataset} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListAnnotatedDatasetsResponse]{@link google.cloud.datalabeling.v1beta1.ListAnnotatedDatasetsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   *
   * client.listAnnotatedDatasets({parent: formattedParent})
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
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
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
   *     return client.listAnnotatedDatasets(nextRequest, options).then(callback);
   *   }
   * }
   * client.listAnnotatedDatasets({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listAnnotatedDatasets(request, options, callback) {
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

    return this._innerApiCalls.listAnnotatedDatasets(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to {@link listAnnotatedDatasets}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listAnnotatedDatasets} continuously
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
   *   Required. Name of the dataset to list annotated datasets, format:
   *   projects/{project_id}/datasets/{dataset_id}
   * @param {string} [request.filter]
   *   Optional. Filter is not supported at this moment.
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
   *   An object stream which emits an object representing [AnnotatedDataset]{@link google.cloud.datalabeling.v1beta1.AnnotatedDataset} on 'data' event.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   * client.listAnnotatedDatasetsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listAnnotatedDatasetsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listAnnotatedDatasets.createStream(
      this._innerApiCalls.listAnnotatedDatasets,
      request,
      options
    );
  }

  /**
   * Starts a labeling task for image. The type of image labeling task is
   * configured by feature in the request.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Name of the dataset to request labeling task, format:
   *   projects/{project_id}/datasets/{dataset_id}
   * @param {Object} request.basicConfig
   *   Required. Basic human annotation config.
   *
   *   This object should have the same structure as [HumanAnnotationConfig]{@link google.cloud.datalabeling.v1beta1.HumanAnnotationConfig}
   * @param {number} request.feature
   *   Required. The type of image labeling task.
   *
   *   The number should be among the values of [Feature]{@link google.cloud.datalabeling.v1beta1.Feature}
   * @param {Object} [request.imageClassificationConfig]
   *   Configuration for image classification task.
   *   One of image_classification_config, bounding_poly_config,
   *   polyline_config and segmentation_config is required.
   *
   *   This object should have the same structure as [ImageClassificationConfig]{@link google.cloud.datalabeling.v1beta1.ImageClassificationConfig}
   * @param {Object} [request.boundingPolyConfig]
   *   Configuration for bounding box and bounding poly task.
   *   One of image_classification_config, bounding_poly_config,
   *   polyline_config and segmentation_config is required.
   *
   *   This object should have the same structure as [BoundingPolyConfig]{@link google.cloud.datalabeling.v1beta1.BoundingPolyConfig}
   * @param {Object} [request.polylineConfig]
   *   Configuration for polyline task.
   *   One of image_classification_config, bounding_poly_config,
   *   polyline_config and segmentation_config is required.
   *
   *   This object should have the same structure as [PolylineConfig]{@link google.cloud.datalabeling.v1beta1.PolylineConfig}
   * @param {Object} [request.segmentationConfig]
   *   Configuration for segmentation task.
   *   One of image_classification_config, bounding_poly_config,
   *   polyline_config and segmentation_config is required.
   *
   *   This object should have the same structure as [SegmentationConfig]{@link google.cloud.datalabeling.v1beta1.SegmentationConfig}
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
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   * const basicConfig = {};
   * const feature = 'FEATURE_UNSPECIFIED';
   * const request = {
   *   parent: formattedParent,
   *   basicConfig: basicConfig,
   *   feature: feature,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.labelImage(request)
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
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   * const basicConfig = {};
   * const feature = 'FEATURE_UNSPECIFIED';
   * const request = {
   *   parent: formattedParent,
   *   basicConfig: basicConfig,
   *   feature: feature,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.labelImage(request)
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
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   * const basicConfig = {};
   * const feature = 'FEATURE_UNSPECIFIED';
   * const request = {
   *   parent: formattedParent,
   *   basicConfig: basicConfig,
   *   feature: feature,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.labelImage(request);
   *
   * const [response] = await operation.promise();
   */
  labelImage(request, options, callback) {
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

    return this._innerApiCalls.labelImage(request, options, callback);
  }

  /**
   * Starts a labeling task for video. The type of video labeling task is
   * configured by feature in the request.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Name of the dataset to request labeling task, format:
   *   projects/{project_id}/datasets/{dataset_id}
   * @param {Object} request.basicConfig
   *   Required. Basic human annotation config.
   *
   *   This object should have the same structure as [HumanAnnotationConfig]{@link google.cloud.datalabeling.v1beta1.HumanAnnotationConfig}
   * @param {number} request.feature
   *   Required. The type of video labeling task.
   *
   *   The number should be among the values of [Feature]{@link google.cloud.datalabeling.v1beta1.Feature}
   * @param {Object} [request.videoClassificationConfig]
   *   Configuration for video classification task.
   *   One of video_classification_config, object_detection_config,
   *   object_tracking_config and event_config is required.
   *
   *   This object should have the same structure as [VideoClassificationConfig]{@link google.cloud.datalabeling.v1beta1.VideoClassificationConfig}
   * @param {Object} [request.objectDetectionConfig]
   *   Configuration for video object detection task.
   *   One of video_classification_config, object_detection_config,
   *   object_tracking_config and event_config is required.
   *
   *   This object should have the same structure as [ObjectDetectionConfig]{@link google.cloud.datalabeling.v1beta1.ObjectDetectionConfig}
   * @param {Object} [request.objectTrackingConfig]
   *   Configuration for video object tracking task.
   *   One of video_classification_config, object_detection_config,
   *   object_tracking_config and event_config is required.
   *
   *   This object should have the same structure as [ObjectTrackingConfig]{@link google.cloud.datalabeling.v1beta1.ObjectTrackingConfig}
   * @param {Object} [request.eventConfig]
   *   Configuration for video event task.
   *   One of video_classification_config, object_detection_config,
   *   object_tracking_config and event_config is required.
   *
   *   This object should have the same structure as [EventConfig]{@link google.cloud.datalabeling.v1beta1.EventConfig}
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
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   * const basicConfig = {};
   * const feature = 'FEATURE_UNSPECIFIED';
   * const request = {
   *   parent: formattedParent,
   *   basicConfig: basicConfig,
   *   feature: feature,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.labelVideo(request)
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
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   * const basicConfig = {};
   * const feature = 'FEATURE_UNSPECIFIED';
   * const request = {
   *   parent: formattedParent,
   *   basicConfig: basicConfig,
   *   feature: feature,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.labelVideo(request)
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
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   * const basicConfig = {};
   * const feature = 'FEATURE_UNSPECIFIED';
   * const request = {
   *   parent: formattedParent,
   *   basicConfig: basicConfig,
   *   feature: feature,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.labelVideo(request);
   *
   * const [response] = await operation.promise();
   */
  labelVideo(request, options, callback) {
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

    return this._innerApiCalls.labelVideo(request, options, callback);
  }

  /**
   * Starts a labeling task for text. The type of text labeling task is
   * configured by feature in the request.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Name of the data set to request labeling task, format:
   *   projects/{project_id}/datasets/{dataset_id}
   * @param {Object} request.basicConfig
   *   Required. Basic human annotation config.
   *
   *   This object should have the same structure as [HumanAnnotationConfig]{@link google.cloud.datalabeling.v1beta1.HumanAnnotationConfig}
   * @param {number} request.feature
   *   Required. The type of text labeling task.
   *
   *   The number should be among the values of [Feature]{@link google.cloud.datalabeling.v1beta1.Feature}
   * @param {Object} [request.textClassificationConfig]
   *   Configuration for text classification task.
   *   One of text_classification_config and text_entity_extraction_config
   *   is required.
   *
   *   This object should have the same structure as [TextClassificationConfig]{@link google.cloud.datalabeling.v1beta1.TextClassificationConfig}
   * @param {Object} [request.textEntityExtractionConfig]
   *   Configuration for entity extraction task.
   *   One of text_classification_config and text_entity_extraction_config
   *   is required.
   *
   *   This object should have the same structure as [TextEntityExtractionConfig]{@link google.cloud.datalabeling.v1beta1.TextEntityExtractionConfig}
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
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   * const basicConfig = {};
   * const feature = 'FEATURE_UNSPECIFIED';
   * const request = {
   *   parent: formattedParent,
   *   basicConfig: basicConfig,
   *   feature: feature,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.labelText(request)
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
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   * const basicConfig = {};
   * const feature = 'FEATURE_UNSPECIFIED';
   * const request = {
   *   parent: formattedParent,
   *   basicConfig: basicConfig,
   *   feature: feature,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.labelText(request)
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
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   * const basicConfig = {};
   * const feature = 'FEATURE_UNSPECIFIED';
   * const request = {
   *   parent: formattedParent,
   *   basicConfig: basicConfig,
   *   feature: feature,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.labelText(request);
   *
   * const [response] = await operation.promise();
   */
  labelText(request, options, callback) {
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

    return this._innerApiCalls.labelText(request, options, callback);
  }

  /**
   * Starts a labeling task for audio. The type of audio labeling task is
   * configured by feature in the request.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Name of the dataset to request labeling task, format:
   *   projects/{project_id}/datasets/{dataset_id}
   * @param {Object} request.basicConfig
   *   Required. Basic human annotation config.
   *
   *   This object should have the same structure as [HumanAnnotationConfig]{@link google.cloud.datalabeling.v1beta1.HumanAnnotationConfig}
   * @param {number} request.feature
   *   Required. The type of audio labeling task.
   *
   *   The number should be among the values of [Feature]{@link google.cloud.datalabeling.v1beta1.Feature}
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
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   * const basicConfig = {};
   * const feature = 'FEATURE_UNSPECIFIED';
   * const request = {
   *   parent: formattedParent,
   *   basicConfig: basicConfig,
   *   feature: feature,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.labelAudio(request)
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
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   * const basicConfig = {};
   * const feature = 'FEATURE_UNSPECIFIED';
   * const request = {
   *   parent: formattedParent,
   *   basicConfig: basicConfig,
   *   feature: feature,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.labelAudio(request)
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
   * const formattedParent = client.datasetPath('[PROJECT]', '[DATASET]');
   * const basicConfig = {};
   * const feature = 'FEATURE_UNSPECIFIED';
   * const request = {
   *   parent: formattedParent,
   *   basicConfig: basicConfig,
   *   feature: feature,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.labelAudio(request);
   *
   * const [response] = await operation.promise();
   */
  labelAudio(request, options, callback) {
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

    return this._innerApiCalls.labelAudio(request, options, callback);
  }

  /**
   * Gets an example by resource name, including both data and annotation.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Name of example, format:
   *   projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/
   *   {annotated_dataset_id}/examples/{example_id}
   * @param {string} [request.filter]
   *   Optional. An expression for filtering Examples. Filter by
   *   annotation_spec.display_name is supported. Format
   *   "annotation_spec.display_name = {display_name}"
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Example]{@link google.cloud.datalabeling.v1beta1.Example}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Example]{@link google.cloud.datalabeling.v1beta1.Example}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.examplePath('[PROJECT]', '[DATASET]', '[ANNOTATED_DATASET]', '[EXAMPLE]');
   * client.getExample({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getExample(request, options, callback) {
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

    return this._innerApiCalls.getExample(request, options, callback);
  }

  /**
   * Lists examples in an annotated dataset. Pagination is supported.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Example resource parent.
   * @param {string} [request.filter]
   *   Optional. An expression for filtering Examples. For annotated datasets that
   *   have annotation spec set, filter by
   *   annotation_spec.display_name is supported. Format
   *   "annotation_spec.display_name = {display_name}"
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
   *   The second parameter to the callback is Array of [Example]{@link google.cloud.datalabeling.v1beta1.Example}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListExamplesResponse]{@link google.cloud.datalabeling.v1beta1.ListExamplesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Example]{@link google.cloud.datalabeling.v1beta1.Example}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Example]{@link google.cloud.datalabeling.v1beta1.Example} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListExamplesResponse]{@link google.cloud.datalabeling.v1beta1.ListExamplesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.annotatedDatasetPath('[PROJECT]', '[DATASET]', '[ANNOTATED_DATASET]');
   *
   * client.listExamples({parent: formattedParent})
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
   * const formattedParent = client.annotatedDatasetPath('[PROJECT]', '[DATASET]', '[ANNOTATED_DATASET]');
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
   *     return client.listExamples(nextRequest, options).then(callback);
   *   }
   * }
   * client.listExamples({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listExamples(request, options, callback) {
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

    return this._innerApiCalls.listExamples(request, options, callback);
  }

  /**
   * Equivalent to {@link listExamples}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listExamples} continuously
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
   *   Required. Example resource parent.
   * @param {string} [request.filter]
   *   Optional. An expression for filtering Examples. For annotated datasets that
   *   have annotation spec set, filter by
   *   annotation_spec.display_name is supported. Format
   *   "annotation_spec.display_name = {display_name}"
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
   *   An object stream which emits an object representing [Example]{@link google.cloud.datalabeling.v1beta1.Example} on 'data' event.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.annotatedDatasetPath('[PROJECT]', '[DATASET]', '[ANNOTATED_DATASET]');
   * client.listExamplesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listExamplesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listExamples.createStream(
      this._innerApiCalls.listExamples,
      request,
      options
    );
  }

  /**
   * Creates an annotation spec set by providing a set of labels.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. AnnotationSpecSet resource parent, format:
   *   projects/{project_id}
   * @param {Object} request.annotationSpecSet
   *   Required. Annotation spec set to create. Annotation specs must be included.
   *   Only one annotation spec will be accepted for annotation specs with same
   *   display_name.
   *
   *   This object should have the same structure as [AnnotationSpecSet]{@link google.cloud.datalabeling.v1beta1.AnnotationSpecSet}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [AnnotationSpecSet]{@link google.cloud.datalabeling.v1beta1.AnnotationSpecSet}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [AnnotationSpecSet]{@link google.cloud.datalabeling.v1beta1.AnnotationSpecSet}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const annotationSpecSet = {};
   * const request = {
   *   parent: formattedParent,
   *   annotationSpecSet: annotationSpecSet,
   * };
   * client.createAnnotationSpecSet(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createAnnotationSpecSet(request, options, callback) {
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

    return this._innerApiCalls.createAnnotationSpecSet(
      request,
      options,
      callback
    );
  }

  /**
   * Gets an annotation spec set by resource name.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. AnnotationSpecSet resource name, format:
   *   projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [AnnotationSpecSet]{@link google.cloud.datalabeling.v1beta1.AnnotationSpecSet}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [AnnotationSpecSet]{@link google.cloud.datalabeling.v1beta1.AnnotationSpecSet}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.annotationSpecSetPath('[PROJECT]', '[ANNOTATION_SPEC_SET]');
   * client.getAnnotationSpecSet({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getAnnotationSpecSet(request, options, callback) {
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

    return this._innerApiCalls.getAnnotationSpecSet(request, options, callback);
  }

  /**
   * Lists annotation spec sets for a project. Pagination is supported.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Parent of AnnotationSpecSet resource, format:
   *   projects/{project_id}
   * @param {string} [request.filter]
   *   Optional. Filter is not supported at this moment.
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
   *   The second parameter to the callback is Array of [AnnotationSpecSet]{@link google.cloud.datalabeling.v1beta1.AnnotationSpecSet}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListAnnotationSpecSetsResponse]{@link google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [AnnotationSpecSet]{@link google.cloud.datalabeling.v1beta1.AnnotationSpecSet}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [AnnotationSpecSet]{@link google.cloud.datalabeling.v1beta1.AnnotationSpecSet} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListAnnotationSpecSetsResponse]{@link google.cloud.datalabeling.v1beta1.ListAnnotationSpecSetsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * client.listAnnotationSpecSets({parent: formattedParent})
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
   * const formattedParent = client.projectPath('[PROJECT]');
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
   *     return client.listAnnotationSpecSets(nextRequest, options).then(callback);
   *   }
   * }
   * client.listAnnotationSpecSets({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listAnnotationSpecSets(request, options, callback) {
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

    return this._innerApiCalls.listAnnotationSpecSets(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to {@link listAnnotationSpecSets}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listAnnotationSpecSets} continuously
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
   *   Required. Parent of AnnotationSpecSet resource, format:
   *   projects/{project_id}
   * @param {string} [request.filter]
   *   Optional. Filter is not supported at this moment.
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
   *   An object stream which emits an object representing [AnnotationSpecSet]{@link google.cloud.datalabeling.v1beta1.AnnotationSpecSet} on 'data' event.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.listAnnotationSpecSetsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listAnnotationSpecSetsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listAnnotationSpecSets.createStream(
      this._innerApiCalls.listAnnotationSpecSets,
      request,
      options
    );
  }

  /**
   * Deletes an annotation spec set by resource name.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. AnnotationSpec resource name, format:
   *   `projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}`.
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
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.annotationSpecSetPath('[PROJECT]', '[ANNOTATION_SPEC_SET]');
   * client.deleteAnnotationSpecSet({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteAnnotationSpecSet(request, options, callback) {
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

    return this._innerApiCalls.deleteAnnotationSpecSet(
      request,
      options,
      callback
    );
  }

  /**
   * Creates an instruction for how data should be labeled.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Instruction resource parent, format:
   *   projects/{project_id}
   * @param {Object} request.instruction
   *   Required. Instruction of how to perform the labeling task.
   *
   *   This object should have the same structure as [Instruction]{@link google.cloud.datalabeling.v1beta1.Instruction}
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
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const instruction = {};
   * const request = {
   *   parent: formattedParent,
   *   instruction: instruction,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.createInstruction(request)
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
   * const formattedParent = client.projectPath('[PROJECT]');
   * const instruction = {};
   * const request = {
   *   parent: formattedParent,
   *   instruction: instruction,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.createInstruction(request)
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
   * const formattedParent = client.projectPath('[PROJECT]');
   * const instruction = {};
   * const request = {
   *   parent: formattedParent,
   *   instruction: instruction,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.createInstruction(request);
   *
   * const [response] = await operation.promise();
   */
  createInstruction(request, options, callback) {
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

    return this._innerApiCalls.createInstruction(request, options, callback);
  }

  /**
   * Gets an instruction by resource name.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Instruction resource name, format:
   *   projects/{project_id}/instructions/{instruction_id}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Instruction]{@link google.cloud.datalabeling.v1beta1.Instruction}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Instruction]{@link google.cloud.datalabeling.v1beta1.Instruction}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.instructionPath('[PROJECT]', '[INSTRUCTION]');
   * client.getInstruction({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getInstruction(request, options, callback) {
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

    return this._innerApiCalls.getInstruction(request, options, callback);
  }

  /**
   * Lists instructions for a project. Pagination is supported.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Instruction resource parent, format:
   *   projects/{project_id}
   * @param {string} [request.filter]
   *   Optional. Filter is not supported at this moment.
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
   *   The second parameter to the callback is Array of [Instruction]{@link google.cloud.datalabeling.v1beta1.Instruction}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListInstructionsResponse]{@link google.cloud.datalabeling.v1beta1.ListInstructionsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Instruction]{@link google.cloud.datalabeling.v1beta1.Instruction}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Instruction]{@link google.cloud.datalabeling.v1beta1.Instruction} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListInstructionsResponse]{@link google.cloud.datalabeling.v1beta1.ListInstructionsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * client.listInstructions({parent: formattedParent})
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
   * const formattedParent = client.projectPath('[PROJECT]');
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
   *     return client.listInstructions(nextRequest, options).then(callback);
   *   }
   * }
   * client.listInstructions({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listInstructions(request, options, callback) {
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

    return this._innerApiCalls.listInstructions(request, options, callback);
  }

  /**
   * Equivalent to {@link listInstructions}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listInstructions} continuously
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
   *   Required. Instruction resource parent, format:
   *   projects/{project_id}
   * @param {string} [request.filter]
   *   Optional. Filter is not supported at this moment.
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
   *   An object stream which emits an object representing [Instruction]{@link google.cloud.datalabeling.v1beta1.Instruction} on 'data' event.
   *
   * @example
   *
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.listInstructionsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listInstructionsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listInstructions.createStream(
      this._innerApiCalls.listInstructions,
      request,
      options
    );
  }

  /**
   * Deletes an instruction object by resource name.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Instruction resource name, format:
   *   projects/{project_id}/instructions/{instruction_id}
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
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.instructionPath('[PROJECT]', '[INSTRUCTION]');
   * client.deleteInstruction({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteInstruction(request, options, callback) {
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

    return this._innerApiCalls.deleteInstruction(request, options, callback);
  }

  /**
   * Deletes an annotated dataset by resource name.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.name]
   *   Required. Name of the annotated dataset to delete, format:
   *   projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/
   *   {annotated_dataset_id}
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
   * const datalabeling = require('@google-cloud/datalabeling');
   *
   * const client = new datalabeling.v1beta1.DataLabelingServiceClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.deleteAnnotatedDataset({}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteAnnotatedDataset(request, options, callback) {
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

    return this._innerApiCalls.deleteAnnotatedDataset(
      request,
      options,
      callback
    );
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified annotated_dataset resource name string.
   *
   * @param {String} project
   * @param {String} dataset
   * @param {String} annotatedDataset
   * @returns {String}
   */
  annotatedDatasetPath(project, dataset, annotatedDataset) {
    return this._pathTemplates.annotatedDatasetPathTemplate.render({
      project: project,
      dataset: dataset,
      annotated_dataset: annotatedDataset,
    });
  }

  /**
   * Return a fully-qualified annotation_spec_set resource name string.
   *
   * @param {String} project
   * @param {String} annotationSpecSet
   * @returns {String}
   */
  annotationSpecSetPath(project, annotationSpecSet) {
    return this._pathTemplates.annotationSpecSetPathTemplate.render({
      project: project,
      annotation_spec_set: annotationSpecSet,
    });
  }

  /**
   * Return a fully-qualified data_item resource name string.
   *
   * @param {String} project
   * @param {String} dataset
   * @param {String} dataItem
   * @returns {String}
   */
  dataItemPath(project, dataset, dataItem) {
    return this._pathTemplates.dataItemPathTemplate.render({
      project: project,
      dataset: dataset,
      data_item: dataItem,
    });
  }

  /**
   * Return a fully-qualified dataset resource name string.
   *
   * @param {String} project
   * @param {String} dataset
   * @returns {String}
   */
  datasetPath(project, dataset) {
    return this._pathTemplates.datasetPathTemplate.render({
      project: project,
      dataset: dataset,
    });
  }

  /**
   * Return a fully-qualified example resource name string.
   *
   * @param {String} project
   * @param {String} dataset
   * @param {String} annotatedDataset
   * @param {String} example
   * @returns {String}
   */
  examplePath(project, dataset, annotatedDataset, example) {
    return this._pathTemplates.examplePathTemplate.render({
      project: project,
      dataset: dataset,
      annotated_dataset: annotatedDataset,
      example: example,
    });
  }

  /**
   * Return a fully-qualified instruction resource name string.
   *
   * @param {String} project
   * @param {String} instruction
   * @returns {String}
   */
  instructionPath(project, instruction) {
    return this._pathTemplates.instructionPathTemplate.render({
      project: project,
      instruction: instruction,
    });
  }

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
   * Parse the annotatedDatasetName from a annotated_dataset resource.
   *
   * @param {String} annotatedDatasetName
   *   A fully-qualified path representing a annotated_dataset resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromAnnotatedDatasetName(annotatedDatasetName) {
    return this._pathTemplates.annotatedDatasetPathTemplate.match(
      annotatedDatasetName
    ).project;
  }

  /**
   * Parse the annotatedDatasetName from a annotated_dataset resource.
   *
   * @param {String} annotatedDatasetName
   *   A fully-qualified path representing a annotated_dataset resources.
   * @returns {String} - A string representing the dataset.
   */
  matchDatasetFromAnnotatedDatasetName(annotatedDatasetName) {
    return this._pathTemplates.annotatedDatasetPathTemplate.match(
      annotatedDatasetName
    ).dataset;
  }

  /**
   * Parse the annotatedDatasetName from a annotated_dataset resource.
   *
   * @param {String} annotatedDatasetName
   *   A fully-qualified path representing a annotated_dataset resources.
   * @returns {String} - A string representing the annotated_dataset.
   */
  matchAnnotatedDatasetFromAnnotatedDatasetName(annotatedDatasetName) {
    return this._pathTemplates.annotatedDatasetPathTemplate.match(
      annotatedDatasetName
    ).annotated_dataset;
  }

  /**
   * Parse the annotationSpecSetName from a annotation_spec_set resource.
   *
   * @param {String} annotationSpecSetName
   *   A fully-qualified path representing a annotation_spec_set resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromAnnotationSpecSetName(annotationSpecSetName) {
    return this._pathTemplates.annotationSpecSetPathTemplate.match(
      annotationSpecSetName
    ).project;
  }

  /**
   * Parse the annotationSpecSetName from a annotation_spec_set resource.
   *
   * @param {String} annotationSpecSetName
   *   A fully-qualified path representing a annotation_spec_set resources.
   * @returns {String} - A string representing the annotation_spec_set.
   */
  matchAnnotationSpecSetFromAnnotationSpecSetName(annotationSpecSetName) {
    return this._pathTemplates.annotationSpecSetPathTemplate.match(
      annotationSpecSetName
    ).annotation_spec_set;
  }

  /**
   * Parse the dataItemName from a data_item resource.
   *
   * @param {String} dataItemName
   *   A fully-qualified path representing a data_item resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromDataItemName(dataItemName) {
    return this._pathTemplates.dataItemPathTemplate.match(dataItemName).project;
  }

  /**
   * Parse the dataItemName from a data_item resource.
   *
   * @param {String} dataItemName
   *   A fully-qualified path representing a data_item resources.
   * @returns {String} - A string representing the dataset.
   */
  matchDatasetFromDataItemName(dataItemName) {
    return this._pathTemplates.dataItemPathTemplate.match(dataItemName).dataset;
  }

  /**
   * Parse the dataItemName from a data_item resource.
   *
   * @param {String} dataItemName
   *   A fully-qualified path representing a data_item resources.
   * @returns {String} - A string representing the data_item.
   */
  matchDataItemFromDataItemName(dataItemName) {
    return this._pathTemplates.dataItemPathTemplate.match(dataItemName)
      .data_item;
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
   * @returns {String} - A string representing the dataset.
   */
  matchDatasetFromDatasetName(datasetName) {
    return this._pathTemplates.datasetPathTemplate.match(datasetName).dataset;
  }

  /**
   * Parse the exampleName from a example resource.
   *
   * @param {String} exampleName
   *   A fully-qualified path representing a example resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromExampleName(exampleName) {
    return this._pathTemplates.examplePathTemplate.match(exampleName).project;
  }

  /**
   * Parse the exampleName from a example resource.
   *
   * @param {String} exampleName
   *   A fully-qualified path representing a example resources.
   * @returns {String} - A string representing the dataset.
   */
  matchDatasetFromExampleName(exampleName) {
    return this._pathTemplates.examplePathTemplate.match(exampleName).dataset;
  }

  /**
   * Parse the exampleName from a example resource.
   *
   * @param {String} exampleName
   *   A fully-qualified path representing a example resources.
   * @returns {String} - A string representing the annotated_dataset.
   */
  matchAnnotatedDatasetFromExampleName(exampleName) {
    return this._pathTemplates.examplePathTemplate.match(exampleName)
      .annotated_dataset;
  }

  /**
   * Parse the exampleName from a example resource.
   *
   * @param {String} exampleName
   *   A fully-qualified path representing a example resources.
   * @returns {String} - A string representing the example.
   */
  matchExampleFromExampleName(exampleName) {
    return this._pathTemplates.examplePathTemplate.match(exampleName).example;
  }

  /**
   * Parse the instructionName from a instruction resource.
   *
   * @param {String} instructionName
   *   A fully-qualified path representing a instruction resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromInstructionName(instructionName) {
    return this._pathTemplates.instructionPathTemplate.match(instructionName)
      .project;
  }

  /**
   * Parse the instructionName from a instruction resource.
   *
   * @param {String} instructionName
   *   A fully-qualified path representing a instruction resources.
   * @returns {String} - A string representing the instruction.
   */
  matchInstructionFromInstructionName(instructionName) {
    return this._pathTemplates.instructionPathTemplate.match(instructionName)
      .instruction;
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
}

module.exports = DataLabelingServiceClient;
