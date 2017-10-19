// Copyright 2017, Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const gapicConfig = require('./dlp_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');
const protobuf = require('protobufjs');

const VERSION = require('../../package.json').version;

/**
 * The DLP API is a service that allows clients
 * to detect the presence of Personally Identifiable Information (PII) and other
 * privacy-sensitive data in user-supplied, unstructured data streams, like text
 * blocks or images.
 * The service also includes methods for sensitive data redaction and
 * scheduling of data scans on Google Cloud Platform based data sets.
 *
 * @class
 * @memberof v2beta1
 */
class DlpServiceClient {
  /**
   * Construct an instance of DlpServiceClient.
   *
   * @param {object=} options - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object=} options.credentials - Credentials object.
   * @param {string=} options.credentials.client_email
   * @param {string=} options.credentials.private_key
   * @param {string=} options.email - Account email address. Required when
   *   usaing a .pem or .p12 keyFilename.
   * @param {string=} options.keyFilename - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option above is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number=} options.port - The port on which to connect to
   *     the remote host.
   * @param {string=} options.projectId - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {function=} options.promise - Custom promise module to use instead
   *     of native Promises.
   * @param {string=} options.servicePath - The domain name of the
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
      `gl-node/${process.version.node}`,
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
        'google/privacy/dlp/v2beta1/dlp.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      resultPathTemplate: new gax.PathTemplate(
        'inspect/results/{result}'
      ),
    };
    var protoFilesRoot = new gax.grpc.GoogleProtoFilesRoot();
    protoFilesRoot = protobuf.loadSync(
      path.join(__dirname, '..', '..', 'protos', 'google/privacy/dlp/v2beta1/dlp.proto'),
      protoFilesRoot
    );


    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    this.operationsClient = new gax.lro({
      auth: gaxGrpc.auth,
      grpc: gaxGrpc.grpc,
    }).operationsClient(opts);

    var analyzeDataSourceRiskResponse = protoFilesRoot.lookup(
      'google.privacy.dlp.v2beta1.RiskAnalysisOperationResult'
    );
    var analyzeDataSourceRiskMetadata = protoFilesRoot.lookup(
      'google.privacy.dlp.v2beta1.RiskAnalysisOperationMetadata'
    );
    var createInspectOperationResponse = protoFilesRoot.lookup(
      'google.privacy.dlp.v2beta1.InspectOperationResult'
    );
    var createInspectOperationMetadata = protoFilesRoot.lookup(
      'google.privacy.dlp.v2beta1.InspectOperationMetadata'
    );

    this._descriptors.longrunning = {
      analyzeDataSourceRisk: new gax.LongrunningDescriptor(
        this.operationsClient,
        analyzeDataSourceRiskResponse.decode.bind(analyzeDataSourceRiskResponse),
        analyzeDataSourceRiskMetadata.decode.bind(analyzeDataSourceRiskMetadata)
      ),
      createInspectOperation: new gax.LongrunningDescriptor(
        this.operationsClient,
        createInspectOperationResponse.decode.bind(createInspectOperationResponse),
        createInspectOperationMetadata.decode.bind(createInspectOperationMetadata)
      ),
    };

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
      'google.privacy.dlp.v2beta1.DlpService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.privacy.dlp.v2beta1.DlpService.
    var dlpServiceStub = gaxGrpc.createStub(
      protos.google.privacy.dlp.v2beta1.DlpService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var dlpServiceStubMethods = [
      'deidentifyContent',
      'analyzeDataSourceRisk',
      'inspectContent',
      'redactContent',
      'createInspectOperation',
      'listInspectFindings',
      'listInfoTypes',
      'listRootCategories',
    ];
    for (let methodName of dlpServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        dlpServiceStub.then(
          stub =>
            function() {
              var args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            }
        ),
        defaults[methodName],
        this._descriptors.longrunning[methodName]
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'dlp.googleapis.com';
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
   * De-identifies potentially sensitive info from a list of strings.
   * This method has limits on input size and output size.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.deidentifyConfig
   *   Configuration for the de-identification of the list of content items.
   *
   *   This object should have the same structure as [DeidentifyConfig]{@link google.privacy.dlp.v2beta1.DeidentifyConfig}
   * @param {Object} request.inspectConfig
   *   Configuration for the inspector.
   *
   *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2beta1.InspectConfig}
   * @param {Object[]} request.items
   *   The list of items to inspect. Up to 100 are allowed per request.
   *   All items will be treated as text/*.
   *
   *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2beta1.ContentItem}
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)=} callback
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DeidentifyContentResponse]{@link google.privacy.dlp.v2beta1.DeidentifyContentResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DeidentifyContentResponse]{@link google.privacy.dlp.v2beta1.DeidentifyContentResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * var client = new dlp.v2beta1.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var deidentifyConfig = {};
   * var inspectConfig = {};
   * var items = [];
   * var request = {
   *   deidentifyConfig: deidentifyConfig,
   *   inspectConfig: inspectConfig,
   *   items: items,
   * };
   * client.deidentifyContent(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  deidentifyContent(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deidentifyContent(request, options, callback);
  }

  /**
   * Schedules a job to compute risk analysis metrics over content in a Google
   * Cloud Platform repository.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.privacyMetric
   *   Privacy metric to compute.
   *
   *   This object should have the same structure as [PrivacyMetric]{@link google.privacy.dlp.v2beta1.PrivacyMetric}
   * @param {Object} request.sourceTable
   *   Input dataset to compute metrics over.
   *
   *   This object should have the same structure as [BigQueryTable]{@link google.privacy.dlp.v2beta1.BigQueryTable}
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)=} callback
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * var client = new dlp.v2beta1.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var privacyMetric = {};
   * var sourceTable = {};
   * var request = {
   *   privacyMetric: privacyMetric,
   *   sourceTable: sourceTable,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.analyzeDataSourceRisk(request)
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
   * var privacyMetric = {};
   * var sourceTable = {};
   * var request = {
   *   privacyMetric: privacyMetric,
   *   sourceTable: sourceTable,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.analyzeDataSourceRisk(request)
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
  analyzeDataSourceRisk(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.analyzeDataSourceRisk(request, options, callback);
  }

  /**
   * Finds potentially sensitive info in a list of strings.
   * This method has limits on input size, processing time, and output size.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.inspectConfig
   *   Configuration for the inspector.
   *
   *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2beta1.InspectConfig}
   * @param {Object[]} request.items
   *   The list of items to inspect. Items in a single request are
   *   considered "related" unless inspect_config.independent_inputs is true.
   *   Up to 100 are allowed per request.
   *
   *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2beta1.ContentItem}
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)=} callback
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [InspectContentResponse]{@link google.privacy.dlp.v2beta1.InspectContentResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [InspectContentResponse]{@link google.privacy.dlp.v2beta1.InspectContentResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * var client = new dlp.v2beta1.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var name = 'EMAIL_ADDRESS';
   * var infoTypesElement = {
   *   name: name,
   * };
   * var infoTypes = [infoTypesElement];
   * var inspectConfig = {
   *   infoTypes: infoTypes,
   * };
   * var type = 'text/plain';
   * var value = 'My email is example@example.com.';
   * var itemsElement = {
   *   type: type,
   *   value: value,
   * };
   * var items = [itemsElement];
   * var request = {
   *   inspectConfig: inspectConfig,
   *   items: items,
   * };
   * client.inspectContent(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  inspectContent(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.inspectContent(request, options, callback);
  }

  /**
   * Redacts potentially sensitive info from a list of strings.
   * This method has limits on input size, processing time, and output size.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.inspectConfig
   *   Configuration for the inspector.
   *
   *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2beta1.InspectConfig}
   * @param {Object[]} request.items
   *   The list of items to inspect. Up to 100 are allowed per request.
   *
   *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2beta1.ContentItem}
   * @param {Object[]} request.replaceConfigs
   *   The strings to replace findings text findings with. Must specify at least
   *   one of these or one ImageRedactionConfig if redacting images.
   *
   *   This object should have the same structure as [ReplaceConfig]{@link google.privacy.dlp.v2beta1.ReplaceConfig}
   * @param {Object[]=} request.imageRedactionConfigs
   *   The configuration for specifying what content to redact from images.
   *
   *   This object should have the same structure as [ImageRedactionConfig]{@link google.privacy.dlp.v2beta1.ImageRedactionConfig}
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)=} callback
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [RedactContentResponse]{@link google.privacy.dlp.v2beta1.RedactContentResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [RedactContentResponse]{@link google.privacy.dlp.v2beta1.RedactContentResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * var client = new dlp.v2beta1.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var name = 'EMAIL_ADDRESS';
   * var infoTypesElement = {
   *   name: name,
   * };
   * var infoTypes = [infoTypesElement];
   * var inspectConfig = {
   *   infoTypes: infoTypes,
   * };
   * var type = 'text/plain';
   * var value = 'My email is example@example.com.';
   * var itemsElement = {
   *   type: type,
   *   value: value,
   * };
   * var items = [itemsElement];
   * var name2 = 'EMAIL_ADDRESS';
   * var infoType = {
   *   name: name2,
   * };
   * var replaceWith = 'REDACTED';
   * var replaceConfigsElement = {
   *   infoType: infoType,
   *   replaceWith: replaceWith,
   * };
   * var replaceConfigs = [replaceConfigsElement];
   * var request = {
   *   inspectConfig: inspectConfig,
   *   items: items,
   *   replaceConfigs: replaceConfigs,
   * };
   * client.redactContent(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  redactContent(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.redactContent(request, options, callback);
  }

  /**
   * Schedules a job scanning content in a Google Cloud Platform data
   * repository.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.inspectConfig
   *   Configuration for the inspector.
   *
   *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2beta1.InspectConfig}
   * @param {Object} request.storageConfig
   *   Specification of the data set to process.
   *
   *   This object should have the same structure as [StorageConfig]{@link google.privacy.dlp.v2beta1.StorageConfig}
   * @param {Object} request.outputConfig
   *   Optional location to store findings.
   *
   *   This object should have the same structure as [OutputStorageConfig]{@link google.privacy.dlp.v2beta1.OutputStorageConfig}
   * @param {Object=} request.operationConfig
   *   Additional configuration settings for long running operations.
   *
   *   This object should have the same structure as [OperationConfig]{@link google.privacy.dlp.v2beta1.OperationConfig}
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)=} callback
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * var client = new dlp.v2beta1.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var name = 'EMAIL_ADDRESS';
   * var infoTypesElement = {
   *   name: name,
   * };
   * var infoTypes = [infoTypesElement];
   * var inspectConfig = {
   *   infoTypes: infoTypes,
   * };
   * var url = 'gs://example_bucket/example_file.png';
   * var fileSet = {
   *   url: url,
   * };
   * var cloudStorageOptions = {
   *   fileSet: fileSet,
   * };
   * var storageConfig = {
   *   cloudStorageOptions: cloudStorageOptions,
   * };
   * var outputConfig = {};
   * var request = {
   *   inspectConfig: inspectConfig,
   *   storageConfig: storageConfig,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.createInspectOperation(request)
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
   * var name = 'EMAIL_ADDRESS';
   * var infoTypesElement = {
   *   name: name,
   * };
   * var infoTypes = [infoTypesElement];
   * var inspectConfig = {
   *   infoTypes: infoTypes,
   * };
   * var url = 'gs://example_bucket/example_file.png';
   * var fileSet = {
   *   url: url,
   * };
   * var cloudStorageOptions = {
   *   fileSet: fileSet,
   * };
   * var storageConfig = {
   *   cloudStorageOptions: cloudStorageOptions,
   * };
   * var outputConfig = {};
   * var request = {
   *   inspectConfig: inspectConfig,
   *   storageConfig: storageConfig,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.createInspectOperation(request)
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
  createInspectOperation(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createInspectOperation(request, options, callback);
  }

  /**
   * Returns list of results for given inspect operation result set id.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Identifier of the results set returned as metadata of
   *   the longrunning operation created by a call to InspectDataSource.
   *   Should be in the format of `inspect/results/{id}`.
   * @param {number=} request.pageSize
   *   Maximum number of results to return.
   *   If 0, the implementation selects a reasonable value.
   * @param {string=} request.pageToken
   *   The value returned by the last `ListInspectFindingsResponse`; indicates
   *   that this is a continuation of a prior `ListInspectFindings` call, and that
   *   the system should return the next page of data.
   * @param {string=} request.filter
   *   Restricts findings to items that match. Supports info_type and likelihood.
   *
   *   Examples:
   *
   *   - info_type=EMAIL_ADDRESS
   *   - info_type=PHONE_NUMBER,EMAIL_ADDRESS
   *   - likelihood=VERY_LIKELY
   *   - likelihood=VERY_LIKELY,LIKELY
   *   - info_type=EMAIL_ADDRESS,likelihood=VERY_LIKELY,LIKELY
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)=} callback
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ListInspectFindingsResponse]{@link google.privacy.dlp.v2beta1.ListInspectFindingsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ListInspectFindingsResponse]{@link google.privacy.dlp.v2beta1.ListInspectFindingsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * var client = new dlp.v2beta1.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.resultPath("[RESULT]");
   * client.listInspectFindings({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listInspectFindings(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listInspectFindings(request, options, callback);
  }

  /**
   * Returns sensitive information types for given category.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.category
   *   Category name as returned by ListRootCategories.
   * @param {string} request.languageCode
   *   Optional BCP-47 language code for localized info type friendly
   *   names. If omitted, or if localized strings are not available,
   *   en-US strings will be returned.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)=} callback
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ListInfoTypesResponse]{@link google.privacy.dlp.v2beta1.ListInfoTypesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ListInfoTypesResponse]{@link google.privacy.dlp.v2beta1.ListInfoTypesResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * var client = new dlp.v2beta1.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var category = 'PII';
   * var languageCode = 'en';
   * var request = {
   *   category: category,
   *   languageCode: languageCode,
   * };
   * client.listInfoTypes(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listInfoTypes(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listInfoTypes(request, options, callback);
  }

  /**
   * Returns the list of root categories of sensitive information.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.languageCode
   *   Optional language code for localized friendly category names.
   *   If omitted or if localized strings are not available,
   *   en-US strings will be returned.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)=} callback
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ListRootCategoriesResponse]{@link google.privacy.dlp.v2beta1.ListRootCategoriesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ListRootCategoriesResponse]{@link google.privacy.dlp.v2beta1.ListRootCategoriesResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * var client = new dlp.v2beta1.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var languageCode = 'en';
   * client.listRootCategories({languageCode: languageCode})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listRootCategories(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listRootCategories(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified result resource name string.
   *
   * @param {String} result
   * @returns {String}
   */
  resultPath(result) {
    return this._pathTemplates.resultPathTemplate.render({
      result: result,
    });
  }

  /**
   * Parse the resultName from a result resource.
   *
   * @param {String} resultName
   *   A fully-qualified path representing a result resources.
   * @returns {String} - A string representing the result.
   */
  matchResultFromResultName(resultName) {
    return resultPathTemplate.match(resultName).result;
  }
}


module.exports = DlpServiceClient;
