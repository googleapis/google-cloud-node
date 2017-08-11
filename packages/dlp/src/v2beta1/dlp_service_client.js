/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * EDITING INSTRUCTIONS
 * This file was generated from the file
 * https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto,
 * and updates to that file get reflected here through a refresh process.
 * For the short term, the refresh process will only be runnable by Google
 * engineers.
 *
 * The only allowed edits are to method and file documentation. A 3-way
 * merge preserves those additions if the generated source changes.
 */
/* TODO: introduce line-wrapping so that it never exceeds the limit. */
/* jscs: disable maximumLineLength */
'use strict';

var configData = require('./dlp_service_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'dlp.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.0.5';

/**
 * The scopes needed to make gRPC calls to all of the methods defined in
 * this service.
 */
var ALL_SCOPES = [
  'https://www.googleapis.com/auth/cloud-platform'
];

/**
 * The DLP API is a service that allows clients
 * to detect the presence of Personally Identifiable Information (PII) and other
 * privacy-sensitive data in user-supplied, unstructured data streams, like text
 * blocks or images.
 * The service also includes methods for sensitive data redaction and
 * scheduling of data scans on Google Cloud Platform based data sets.
 *
 *
 * @class
 */
function DlpServiceClient(gaxGrpc, grpcClients, opts) {
  opts = extend({
    servicePath: SERVICE_ADDRESS,
    port: DEFAULT_SERVICE_PORT,
    clientConfig: {}
  }, opts);

  var googleApiClient = [
    'gl-node/' + process.versions.node
  ];
  if (opts.libName && opts.libVersion) {
    googleApiClient.push(opts.libName + '/' + opts.libVersion);
  }
  googleApiClient.push(
    CODE_GEN_NAME_VERSION,
    'gax/' + gax.version,
    'grpc/' + gaxGrpc.grpcVersion
  );

  this.operationsClient = new gax.lro({
    auth: gaxGrpc.auth,
    grpc: gaxGrpc.grpc
  }).operationsClient(opts);

  this.longrunningDescriptors = {
    createInspectOperation: new gax.LongrunningDescriptor(
      this.operationsClient,
      grpcClients.google.privacy.dlp.v2beta1.InspectOperationResult.decode,
      grpcClients.google.privacy.dlp.v2beta1.InspectOperationMetadata.decode)
  };

  var defaults = gaxGrpc.constructSettings(
      'google.privacy.dlp.v2beta1.DlpService',
      configData,
      opts.clientConfig,
      {'x-goog-api-client': googleApiClient.join(' ')});

  var self = this;

  this.auth = gaxGrpc.auth;
  var dlpServiceStub = gaxGrpc.createStub(
      grpcClients.google.privacy.dlp.v2beta1.DlpService,
      opts);
  var dlpServiceStubMethods = [
    'inspectContent',
    'redactContent',
    'createInspectOperation',
    'listInspectFindings',
    'listInfoTypes',
    'listRootCategories'
  ];
  dlpServiceStubMethods.forEach(function(methodName) {
    self['_' + methodName] = gax.createApiCall(
      dlpServiceStub.then(function(dlpServiceStub) {
        return function() {
          var args = Array.prototype.slice.call(arguments, 0);
          return dlpServiceStub[methodName].apply(dlpServiceStub, args);
        };
      }),
      defaults[methodName],
      self.longrunningDescriptors[methodName]);
  });
}

// Path templates

var RESULT_PATH_TEMPLATE = new gax.PathTemplate(
    'inspect/results/{result}');

/**
 * Returns a fully-qualified result resource name string.
 * @param {String} result
 * @returns {String}
 */
DlpServiceClient.prototype.resultPath = function(result) {
  return RESULT_PATH_TEMPLATE.render({
    result: result
  });
};

/**
 * Parses the resultName from a result resource.
 * @param {String} resultName
 *   A fully-qualified path representing a result resources.
 * @returns {String} - A string representing the result.
 */
DlpServiceClient.prototype.matchResultFromResultName = function(resultName) {
  return RESULT_PATH_TEMPLATE.match(resultName).result;
};

/**
 * Get the project ID used by this class.
 * @param {function(Error, string)} callback - the callback to be called with
 *   the current project Id.
 */
DlpServiceClient.prototype.getProjectId = function(callback) {
  return this.auth.getProjectId(callback);
};

// Service calls

/**
 * Finds potentially sensitive info in a list of strings.
 * This method has limits on input size, processing time, and output size.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Object} request.inspectConfig
 *   Configuration for the inspector.
 *
 *   This object should have the same structure as [InspectConfig]{@link InspectConfig}
 * @param {Object[]} request.items
 *   The list of items to inspect. Items in a single request are
 *   considered "related" unless inspect_config.independent_inputs is true.
 *   Up to 100 are allowed per request.
 *
 *   This object should have the same structure as [ContentItem]{@link ContentItem}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [InspectContentResponse]{@link InspectContentResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [InspectContentResponse]{@link InspectContentResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var dlp = require('@google-cloud/dlp');
 *
 * var client = dlp.v2beta1({
 *   // optional auth parameters.
 * });
 *
 * var inspectConfig = {};
 * var items = [];
 * var request = {
 *     inspectConfig: inspectConfig,
 *     items: items
 * };
 * client.inspectContent(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
DlpServiceClient.prototype.inspectContent = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._inspectContent(request, options, callback);
};

/**
 * Redacts potentially sensitive info from a list of strings.
 * This method has limits on input size, processing time, and output size.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Object} request.inspectConfig
 *   Configuration for the inspector.
 *
 *   This object should have the same structure as [InspectConfig]{@link InspectConfig}
 * @param {Object[]} request.items
 *   The list of items to inspect. Up to 100 are allowed per request.
 *
 *   This object should have the same structure as [ContentItem]{@link ContentItem}
 * @param {Object[]} request.replaceConfigs
 *   The strings to replace findings text findings with. Must specify at least
 *   one of these or one ImageRedactionConfig if redacting images.
 *
 *   This object should have the same structure as [ReplaceConfig]{@link ReplaceConfig}
 * @param {Object[]=} request.imageRedactionConfigs
 *   The configuration for specifying what content to redact from images.
 *
 *   This object should have the same structure as [ImageRedactionConfig]{@link ImageRedactionConfig}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [RedactContentResponse]{@link RedactContentResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [RedactContentResponse]{@link RedactContentResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var dlp = require('@google-cloud/dlp');
 *
 * var client = dlp.v2beta1({
 *   // optional auth parameters.
 * });
 *
 * var inspectConfig = {};
 * var items = [];
 * var replaceConfigs = [];
 * var request = {
 *     inspectConfig: inspectConfig,
 *     items: items,
 *     replaceConfigs: replaceConfigs
 * };
 * client.redactContent(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
DlpServiceClient.prototype.redactContent = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._redactContent(request, options, callback);
};

/**
 * Schedules a job scanning content in a Google Cloud Platform data
 * repository.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Object} request.inspectConfig
 *   Configuration for the inspector.
 *
 *   This object should have the same structure as [InspectConfig]{@link InspectConfig}
 * @param {Object} request.storageConfig
 *   Specification of the data set to process.
 *
 *   This object should have the same structure as [StorageConfig]{@link StorageConfig}
 * @param {Object} request.outputConfig
 *   Optional location to store findings. The bucket must already exist and
 *   the Google APIs service account for DLP must have write permission to
 *   write to the given bucket.
 *   <p>Results are split over multiple csv files with each file name matching
 *   the pattern "[operation_id]_[count].csv", for example
 *   `3094877188788974909_1.csv`. The `operation_id` matches the
 *   identifier for the Operation, and the `count` is a counter used for
 *   tracking the number of files written. <p>The CSV file(s) contain the
 *   following columns regardless of storage type scanned: <li>id <li>info_type
 *   <li>likelihood <li>byte size of finding <li>quote <li>timestamp<br/>
 *   <p>For Cloud Storage the next columns are: <li>file_path
 *   <li>start_offset<br/>
 *   <p>For Cloud Datastore the next columns are: <li>project_id
 *   <li>namespace_id <li>path <li>column_name <li>offset<br/>
 *   <p>For BigQuery the next columns are: <li>row_number <li>project_id
 *   <li>dataset_id <li>table_id
 *
 *   This object should have the same structure as [OutputStorageConfig]{@link OutputStorageConfig}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var dlp = require('@google-cloud/dlp');
 *
 * var client = dlp.v2beta1({
 *   // optional auth parameters.
 * });
 *
 * var inspectConfig = {};
 * var storageConfig = {};
 * var outputConfig = {};
 * var request = {
 *     inspectConfig: inspectConfig,
 *     storageConfig: storageConfig,
 *     outputConfig: outputConfig
 * };
 *
 * // Handle the operation using the promise pattern.
 * client.createInspectOperation(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Operation#promise starts polling for the completion of the LRO.
 *     return operation.promise();
 * }).then(function(responses) {
 *     // The final result of the operation.
 *     var result = responses[0];
 *
 *     // The metadata value of the completed operation.
 *     var metadata = responses[1];
 *
 *     // The response of the api call returning the complete operation.
 *     var finalApiResponse = responses[2];
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 *
 * var inspectConfig = {};
 * var storageConfig = {};
 * var outputConfig = {};
 * var request = {
 *     inspectConfig: inspectConfig,
 *     storageConfig: storageConfig,
 *     outputConfig: outputConfig
 * };
 *
 * // Handle the operation using the event emitter pattern.
 * client.createInspectOperation(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Adding a listener for the "complete" event starts polling for the
 *     // completion of the operation.
 *     operation.on('complete', function(result, metadata, finalApiResponse) {
 *       // doSomethingWith(result);
 *     });
 *
 *     // Adding a listener for the "progress" event causes the callback to be
 *     // called on any change in metadata when the operation is polled.
 *     operation.on('progress', function(metadata, apiResponse) {
 *       // doSomethingWith(metadata)
 *     })
 *
 *     // Adding a listener for the "error" event handles any errors found during polling.
 *     operation.on('error', function(err) {
 *       // throw(err);
 *     })
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
DlpServiceClient.prototype.createInspectOperation = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._createInspectOperation(request, options, callback);
};

/**
 * Returns list of results for given inspect operation result set id.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Identifier of the results set returned as metadata of
 *   the longrunning operation created by a call to CreateInspectOperation.
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
 *   <p>Examples:<br/>
 *   <li>info_type=EMAIL_ADDRESS
 *   <li>info_type=PHONE_NUMBER,EMAIL_ADDRESS
 *   <li>likelihood=VERY_LIKELY
 *   <li>likelihood=VERY_LIKELY,LIKELY
 *   <li>info_type=EMAIL_ADDRESS,likelihood=VERY_LIKELY,LIKELY
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [ListInspectFindingsResponse]{@link ListInspectFindingsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [ListInspectFindingsResponse]{@link ListInspectFindingsResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var dlp = require('@google-cloud/dlp');
 *
 * var client = dlp.v2beta1({
 *   // optional auth parameters.
 * });
 *
 * var formattedName = client.resultPath("[RESULT]");
 * client.listInspectFindings({name: formattedName}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
DlpServiceClient.prototype.listInspectFindings = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listInspectFindings(request, options, callback);
};

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
 *   The second parameter to the callback is an object representing [ListInfoTypesResponse]{@link ListInfoTypesResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [ListInfoTypesResponse]{@link ListInfoTypesResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var dlp = require('@google-cloud/dlp');
 *
 * var client = dlp.v2beta1({
 *   // optional auth parameters.
 * });
 *
 * var category = '';
 * var languageCode = '';
 * var request = {
 *     category: category,
 *     languageCode: languageCode
 * };
 * client.listInfoTypes(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
DlpServiceClient.prototype.listInfoTypes = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listInfoTypes(request, options, callback);
};

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
 *   The second parameter to the callback is an object representing [ListRootCategoriesResponse]{@link ListRootCategoriesResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [ListRootCategoriesResponse]{@link ListRootCategoriesResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var dlp = require('@google-cloud/dlp');
 *
 * var client = dlp.v2beta1({
 *   // optional auth parameters.
 * });
 *
 * var languageCode = '';
 * client.listRootCategories({languageCode: languageCode}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * })
 * .catch(function(err) {
 *     console.error(err);
 * });
 */
DlpServiceClient.prototype.listRootCategories = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listRootCategories(request, options, callback);
};

function DlpServiceClientBuilder(gaxGrpc) {
  if (!(this instanceof DlpServiceClientBuilder)) {
    return new DlpServiceClientBuilder(gaxGrpc);
  }

  var dlpServiceClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/privacy/dlp/v2beta1/dlp.proto'
  }]);
  extend(this, dlpServiceClient.google.privacy.dlp.v2beta1);


  /**
   * Build a new instance of {@link DlpServiceClient}.
   *
   * @param {Object=} opts - The optional parameters.
   * @param {String=} opts.servicePath
   *   The domain name of the API remote host.
   * @param {number=} opts.port
   *   The port on which to connect to the remote host.
   * @param {grpc.ClientCredentials=} opts.sslCreds
   *   A ClientCredentials for use with an SSL-enabled channel.
   * @param {Object=} opts.clientConfig
   *   The customized config to build the call settings. See
   *   {@link gax.constructSettings} for the format.
   */
  this.dlpServiceClient = function(opts) {
    return new DlpServiceClient(gaxGrpc, dlpServiceClient, opts);
  };
  extend(this.dlpServiceClient, DlpServiceClient);
}
module.exports = DlpServiceClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;