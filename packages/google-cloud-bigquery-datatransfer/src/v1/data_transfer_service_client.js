// Copyright 2017, Google LLC All rights reserved.
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

const gapicConfig = require('./data_transfer_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * The Google BigQuery Data Transfer Service API enables BigQuery users to
 * configure the transfer of their data from other Google Products into BigQuery.
 * This service contains methods that are end user exposed. It backs up the
 * frontend.
 *
 * @class
 * @memberof v1
 */
class DataTransferServiceClient {
  /**
   * Construct an instance of DataTransferServiceClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *   usaing a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option above is not necessary.
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
        'google/cloud/bigquery/datatransfer/v1/datatransfer.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
      locationPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}'
      ),
      locationDataSourcePathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/dataSources/{data_source}'
      ),
      locationTransferConfigPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/transferConfigs/{transfer_config}'
      ),
      locationRunPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/transferConfigs/{transfer_config}/runs/{run}'
      ),
      dataSourcePathTemplate: new gax.PathTemplate(
        'projects/{project}/dataSources/{data_source}'
      ),
      transferConfigPathTemplate: new gax.PathTemplate(
        'projects/{project}/transferConfigs/{transfer_config}'
      ),
      runPathTemplate: new gax.PathTemplate(
        'projects/{project}/transferConfigs/{transfer_config}/runs/{run}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listDataSources: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'dataSources'
      ),
      listTransferConfigs: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'transferConfigs'
      ),
      listTransferRuns: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'transferRuns'
      ),
      listTransferLogs: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'transferMessages'
      ),
    };

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
      'google.cloud.bigquery.datatransfer.v1.DataTransferService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.bigquery.datatransfer.v1.DataTransferService.
    var dataTransferServiceStub = gaxGrpc.createStub(
      protos.google.cloud.bigquery.datatransfer.v1.DataTransferService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var dataTransferServiceStubMethods = [
      'getDataSource',
      'listDataSources',
      'createTransferConfig',
      'updateTransferConfig',
      'deleteTransferConfig',
      'getTransferConfig',
      'listTransferConfigs',
      'scheduleTransferRuns',
      'getTransferRun',
      'deleteTransferRun',
      'listTransferRuns',
      'listTransferLogs',
      'checkValidCreds',
    ];
    for (let methodName of dataTransferServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        dataTransferServiceStub.then(
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
    return 'bigquerydatatransfer.googleapis.com';
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
      'https://www.googleapis.com/auth/bigquery',
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/cloud-platform.read-only',
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
   * Retrieves a supported data source and returns its settings,
   * which can be used for UI rendering.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The field will contain name of the resource requested, for example:
   *   `projects/{project_id}/dataSources/{data_source_id}`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DataSource]{@link google.cloud.bigquery.datatransfer.v1.DataSource}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DataSource]{@link google.cloud.bigquery.datatransfer.v1.DataSource}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.locationDataSourcePath('[PROJECT]', '[LOCATION]', '[DATA_SOURCE]');
   * client.getDataSource({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getDataSource(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getDataSource(request, options, callback);
  }

  /**
   * Lists supported data sources and returns their settings,
   * which can be used for UI rendering.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The BigQuery project id for which data sources should be returned.
   *   Must be in the form: `projects/{project_id}`
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
   *   The second parameter to the callback is Array of [DataSource]{@link google.cloud.bigquery.datatransfer.v1.DataSource}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListDataSourcesResponse]{@link google.cloud.bigquery.datatransfer.v1.ListDataSourcesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [DataSource]{@link google.cloud.bigquery.datatransfer.v1.DataSource}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [DataSource]{@link google.cloud.bigquery.datatransfer.v1.DataSource} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListDataSourcesResponse]{@link google.cloud.bigquery.datatransfer.v1.ListDataSourcesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listDataSources({parent: formattedParent})
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
   *     return client.listDataSources(nextRequest, options).then(callback);
   *   }
   * }
   * client.listDataSources({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listDataSources(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listDataSources(request, options, callback);
  }

  /**
   * Equivalent to {@link listDataSources}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listDataSources} continuously
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
   *   The BigQuery project id for which data sources should be returned.
   *   Must be in the form: `projects/{project_id}`
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
   *   An object stream which emits an object representing [DataSource]{@link google.cloud.bigquery.datatransfer.v1.DataSource} on 'data' event.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * client.listDataSourcesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listDataSourcesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listDataSources.createStream(
      this._innerApiCalls.listDataSources,
      request,
      options
    );
  }

  /**
   * Creates a new data transfer configuration.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The BigQuery project id where the transfer configuration should be created.
   *   Must be in the format /projects/{project_id}/locations/{location_id}
   *   or
   *   /projects/{project_id}/locations/-
   *   In case when '-' is specified as location_id, location is infered from
   *   the destination dataset region.
   * @param {Object} request.transferConfig
   *   Data transfer configuration to create.
   *
   *   This object should have the same structure as [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig}
   * @param {string} [request.authorizationCode]
   *   Optional OAuth2 authorization code to use with this transfer configuration.
   *   This is required if new credentials are needed, as indicated by
   *   `CheckValidCreds`.
   *   In order to obtain authorization_code, please make a
   *   request to
   *   https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
   *
   *   * client_id should be OAuth client_id of BigQuery DTS API for the given
   *     data source returned by ListDataSources method.
   *   * data_source_scopes are the scopes returned by ListDataSources method.
   *   * redirect_uri is an optional parameter. If not specified, then
   *     authorization code is posted to the opener of authorization flow window.
   *     Otherwise it will be sent to the redirect uri. A special value of
   *     urn:ietf:wg:oauth:2.0:oob means that authorization code should be
   *     returned in the title bar of the browser, with the page text prompting
   *     the user to copy the code and paste it in the application.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * var transferConfig = {};
   * var request = {
   *   parent: formattedParent,
   *   transferConfig: transferConfig,
   * };
   * client.createTransferConfig(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createTransferConfig(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createTransferConfig(request, options, callback);
  }

  /**
   * Updates a data transfer configuration.
   * All fields must be set, even if they are not updated.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.transferConfig
   *   Data transfer configuration to create.
   *
   *   This object should have the same structure as [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig}
   * @param {Object} request.updateMask
   *   Required list of fields to be updated in this request.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {string} [request.authorizationCode]
   *   Optional OAuth2 authorization code to use with this transfer configuration.
   *   If it is provided, the transfer configuration will be associated with the
   *   authorizing user.
   *   In order to obtain authorization_code, please make a
   *   request to
   *   https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
   *
   *   * client_id should be OAuth client_id of BigQuery DTS API for the given
   *     data source returned by ListDataSources method.
   *   * data_source_scopes are the scopes returned by ListDataSources method.
   *   * redirect_uri is an optional parameter. If not specified, then
   *     authorization code is posted to the opener of authorization flow window.
   *     Otherwise it will be sent to the redirect uri. A special value of
   *     urn:ietf:wg:oauth:2.0:oob means that authorization code should be
   *     returned in the title bar of the browser, with the page text prompting
   *     the user to copy the code and paste it in the application.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var transferConfig = {};
   * var updateMask = {};
   * var request = {
   *   transferConfig: transferConfig,
   *   updateMask: updateMask,
   * };
   * client.updateTransferConfig(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateTransferConfig(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateTransferConfig(request, options, callback);
  }

  /**
   * Deletes a data transfer configuration,
   * including any associated transfer runs and logs.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The field will contain name of the resource requested, for example:
   *   `projects/{project_id}/transferConfigs/{config_id}`
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
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.locationTransferConfigPath('[PROJECT]', '[LOCATION]', '[TRANSFER_CONFIG]');
   * client.deleteTransferConfig({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteTransferConfig(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteTransferConfig(request, options, callback);
  }

  /**
   * Returns information about a data transfer config.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The field will contain name of the resource requested, for example:
   *   `projects/{project_id}/transferConfigs/{config_id}`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.locationTransferConfigPath('[PROJECT]', '[LOCATION]', '[TRANSFER_CONFIG]');
   * client.getTransferConfig({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getTransferConfig(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getTransferConfig(request, options, callback);
  }

  /**
   * Returns information about all data transfers in the project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The BigQuery project id for which data sources
   *   should be returned: `projects/{project_id}`.
   * @param {string[]} [request.dataSourceIds]
   *   When specified, only configurations of requested data sources are returned.
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
   *   The second parameter to the callback is Array of [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListTransferConfigsResponse]{@link google.cloud.bigquery.datatransfer.v1.ListTransferConfigsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListTransferConfigsResponse]{@link google.cloud.bigquery.datatransfer.v1.ListTransferConfigsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listTransferConfigs({parent: formattedParent})
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
   *     return client.listTransferConfigs(nextRequest, options).then(callback);
   *   }
   * }
   * client.listTransferConfigs({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listTransferConfigs(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listTransferConfigs(request, options, callback);
  }

  /**
   * Equivalent to {@link listTransferConfigs}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listTransferConfigs} continuously
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
   *   The BigQuery project id for which data sources
   *   should be returned: `projects/{project_id}`.
   * @param {string[]} [request.dataSourceIds]
   *   When specified, only configurations of requested data sources are returned.
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
   *   An object stream which emits an object representing [TransferConfig]{@link google.cloud.bigquery.datatransfer.v1.TransferConfig} on 'data' event.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * client.listTransferConfigsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listTransferConfigsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listTransferConfigs.createStream(
      this._innerApiCalls.listTransferConfigs,
      request,
      options
    );
  }

  /**
   * Creates transfer runs for a time range [range_start_time, range_end_time].
   * For each date - or whatever granularity the data source supports - in the
   * range, one transfer run is created.
   * Note that runs are created per UTC time in the time range.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Transfer configuration name in the form:
   *   `projects/{project_id}/transferConfigs/{config_id}`.
   * @param {Object} request.startTime
   *   Start time of the range of transfer runs. For example,
   *   `"2017-05-25T00:00:00+00:00"`.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {Object} request.endTime
   *   End time of the range of transfer runs. For example,
   *   `"2017-05-30T00:00:00+00:00"`.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ScheduleTransferRunsResponse]{@link google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ScheduleTransferRunsResponse]{@link google.cloud.bigquery.datatransfer.v1.ScheduleTransferRunsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.locationTransferConfigPath('[PROJECT]', '[LOCATION]', '[TRANSFER_CONFIG]');
   * var startTime = {};
   * var endTime = {};
   * var request = {
   *   parent: formattedParent,
   *   startTime: startTime,
   *   endTime: endTime,
   * };
   * client.scheduleTransferRuns(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  scheduleTransferRuns(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.scheduleTransferRuns(request, options, callback);
  }

  /**
   * Returns information about the particular transfer run.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The field will contain name of the resource requested, for example:
   *   `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TransferRun]{@link google.cloud.bigquery.datatransfer.v1.TransferRun}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TransferRun]{@link google.cloud.bigquery.datatransfer.v1.TransferRun}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.locationRunPath('[PROJECT]', '[LOCATION]', '[TRANSFER_CONFIG]', '[RUN]');
   * client.getTransferRun({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getTransferRun(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getTransferRun(request, options, callback);
  }

  /**
   * Deletes the specified transfer run.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The field will contain name of the resource requested, for example:
   *   `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
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
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.locationRunPath('[PROJECT]', '[LOCATION]', '[TRANSFER_CONFIG]', '[RUN]');
   * client.deleteTransferRun({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteTransferRun(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteTransferRun(request, options, callback);
  }

  /**
   * Returns information about running and completed jobs.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Name of transfer configuration for which transfer runs should be retrieved.
   *   Format of transfer configuration resource name is:
   *   `projects/{project_id}/transferConfigs/{config_id}`.
   * @param {number[]} [request.states]
   *   When specified, only transfer runs with requested states are returned.
   *
   *   The number should be among the values of [TransferState]{@link google.cloud.bigquery.datatransfer.v1.TransferState}
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number} [request.runAttempt]
   *   Indicates how run attempts are to be pulled.
   *
   *   The number should be among the values of [RunAttempt]{@link google.cloud.bigquery.datatransfer.v1.RunAttempt}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [TransferRun]{@link google.cloud.bigquery.datatransfer.v1.TransferRun}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListTransferRunsResponse]{@link google.cloud.bigquery.datatransfer.v1.ListTransferRunsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [TransferRun]{@link google.cloud.bigquery.datatransfer.v1.TransferRun}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [TransferRun]{@link google.cloud.bigquery.datatransfer.v1.TransferRun} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListTransferRunsResponse]{@link google.cloud.bigquery.datatransfer.v1.ListTransferRunsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.locationTransferConfigPath('[PROJECT]', '[LOCATION]', '[TRANSFER_CONFIG]');
   *
   * client.listTransferRuns({parent: formattedParent})
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
   * var formattedParent = client.locationTransferConfigPath('[PROJECT]', '[LOCATION]', '[TRANSFER_CONFIG]');
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
   *     return client.listTransferRuns(nextRequest, options).then(callback);
   *   }
   * }
   * client.listTransferRuns({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listTransferRuns(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listTransferRuns(request, options, callback);
  }

  /**
   * Equivalent to {@link listTransferRuns}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listTransferRuns} continuously
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
   *   Name of transfer configuration for which transfer runs should be retrieved.
   *   Format of transfer configuration resource name is:
   *   `projects/{project_id}/transferConfigs/{config_id}`.
   * @param {number[]} [request.states]
   *   When specified, only transfer runs with requested states are returned.
   *
   *   The number should be among the values of [TransferState]{@link google.cloud.bigquery.datatransfer.v1.TransferState}
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number} [request.runAttempt]
   *   Indicates how run attempts are to be pulled.
   *
   *   The number should be among the values of [RunAttempt]{@link google.cloud.bigquery.datatransfer.v1.RunAttempt}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [TransferRun]{@link google.cloud.bigquery.datatransfer.v1.TransferRun} on 'data' event.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.locationTransferConfigPath('[PROJECT]', '[LOCATION]', '[TRANSFER_CONFIG]');
   * client.listTransferRunsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listTransferRunsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listTransferRuns.createStream(
      this._innerApiCalls.listTransferRuns,
      request,
      options
    );
  }

  /**
   * Returns user facing log messages for the data transfer run.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Transfer run name in the form:
   *   `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number[]} [request.messageTypes]
   *   Message types to return. If not populated - INFO, WARNING and ERROR
   *   messages are returned.
   *
   *   The number should be among the values of [MessageSeverity]{@link google.cloud.bigquery.datatransfer.v1.MessageSeverity}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [TransferMessage]{@link google.cloud.bigquery.datatransfer.v1.TransferMessage}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListTransferLogsResponse]{@link google.cloud.bigquery.datatransfer.v1.ListTransferLogsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [TransferMessage]{@link google.cloud.bigquery.datatransfer.v1.TransferMessage}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [TransferMessage]{@link google.cloud.bigquery.datatransfer.v1.TransferMessage} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListTransferLogsResponse]{@link google.cloud.bigquery.datatransfer.v1.ListTransferLogsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var formattedParent = client.locationRunPath('[PROJECT]', '[LOCATION]', '[TRANSFER_CONFIG]', '[RUN]');
   *
   * client.listTransferLogs({parent: formattedParent})
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
   * var formattedParent = client.locationRunPath('[PROJECT]', '[LOCATION]', '[TRANSFER_CONFIG]', '[RUN]');
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
   *     return client.listTransferLogs(nextRequest, options).then(callback);
   *   }
   * }
   * client.listTransferLogs({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listTransferLogs(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listTransferLogs(request, options, callback);
  }

  /**
   * Equivalent to {@link listTransferLogs}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listTransferLogs} continuously
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
   *   Transfer run name in the form:
   *   `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number[]} [request.messageTypes]
   *   Message types to return. If not populated - INFO, WARNING and ERROR
   *   messages are returned.
   *
   *   The number should be among the values of [MessageSeverity]{@link google.cloud.bigquery.datatransfer.v1.MessageSeverity}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [TransferMessage]{@link google.cloud.bigquery.datatransfer.v1.TransferMessage} on 'data' event.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.locationRunPath('[PROJECT]', '[LOCATION]', '[TRANSFER_CONFIG]', '[RUN]');
   * client.listTransferLogsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listTransferLogsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listTransferLogs.createStream(
      this._innerApiCalls.listTransferLogs,
      request,
      options
    );
  }

  /**
   * Returns true if valid credentials exist for the given data source and
   * requesting user.
   * Some data sources doesn't support service account, so we need to talk to
   * them on behalf of the end user. This API just checks whether we have OAuth
   * token for the particular user, which is a pre-requisite before user can
   * create a transfer config.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The data source in the form:
   *   `projects/{project_id}/dataSources/{data_source_id}`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [CheckValidCredsResponse]{@link google.cloud.bigquery.datatransfer.v1.CheckValidCredsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [CheckValidCredsResponse]{@link google.cloud.bigquery.datatransfer.v1.CheckValidCredsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
   *
   * var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.locationDataSourcePath('[PROJECT]', '[LOCATION]', '[DATA_SOURCE]');
   * client.checkValidCreds({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  checkValidCreds(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.checkValidCreds(request, options, callback);
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
   * Return a fully-qualified location_data_source resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} dataSource
   * @returns {String}
   */
  locationDataSourcePath(project, location, dataSource) {
    return this._pathTemplates.locationDataSourcePathTemplate.render({
      project: project,
      location: location,
      data_source: dataSource,
    });
  }

  /**
   * Return a fully-qualified location_transfer_config resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} transferConfig
   * @returns {String}
   */
  locationTransferConfigPath(project, location, transferConfig) {
    return this._pathTemplates.locationTransferConfigPathTemplate.render({
      project: project,
      location: location,
      transfer_config: transferConfig,
    });
  }

  /**
   * Return a fully-qualified location_run resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} transferConfig
   * @param {String} run
   * @returns {String}
   */
  locationRunPath(project, location, transferConfig, run) {
    return this._pathTemplates.locationRunPathTemplate.render({
      project: project,
      location: location,
      transfer_config: transferConfig,
      run: run,
    });
  }

  /**
   * Return a fully-qualified data_source resource name string.
   *
   * @param {String} project
   * @param {String} dataSource
   * @returns {String}
   */
  dataSourcePath(project, dataSource) {
    return this._pathTemplates.dataSourcePathTemplate.render({
      project: project,
      data_source: dataSource,
    });
  }

  /**
   * Return a fully-qualified transfer_config resource name string.
   *
   * @param {String} project
   * @param {String} transferConfig
   * @returns {String}
   */
  transferConfigPath(project, transferConfig) {
    return this._pathTemplates.transferConfigPathTemplate.render({
      project: project,
      transfer_config: transferConfig,
    });
  }

  /**
   * Return a fully-qualified run resource name string.
   *
   * @param {String} project
   * @param {String} transferConfig
   * @param {String} run
   * @returns {String}
   */
  runPath(project, transferConfig, run) {
    return this._pathTemplates.runPathTemplate.render({
      project: project,
      transfer_config: transferConfig,
      run: run,
    });
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
   * Parse the locationDataSourceName from a location_data_source resource.
   *
   * @param {String} locationDataSourceName
   *   A fully-qualified path representing a location_data_source resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromLocationDataSourceName(locationDataSourceName) {
    return this._pathTemplates.locationDataSourcePathTemplate.match(
      locationDataSourceName
    ).project;
  }

  /**
   * Parse the locationDataSourceName from a location_data_source resource.
   *
   * @param {String} locationDataSourceName
   *   A fully-qualified path representing a location_data_source resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromLocationDataSourceName(locationDataSourceName) {
    return this._pathTemplates.locationDataSourcePathTemplate.match(
      locationDataSourceName
    ).location;
  }

  /**
   * Parse the locationDataSourceName from a location_data_source resource.
   *
   * @param {String} locationDataSourceName
   *   A fully-qualified path representing a location_data_source resources.
   * @returns {String} - A string representing the data_source.
   */
  matchDataSourceFromLocationDataSourceName(locationDataSourceName) {
    return this._pathTemplates.locationDataSourcePathTemplate.match(
      locationDataSourceName
    ).data_source;
  }

  /**
   * Parse the locationTransferConfigName from a location_transfer_config resource.
   *
   * @param {String} locationTransferConfigName
   *   A fully-qualified path representing a location_transfer_config resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromLocationTransferConfigName(locationTransferConfigName) {
    return this._pathTemplates.locationTransferConfigPathTemplate.match(
      locationTransferConfigName
    ).project;
  }

  /**
   * Parse the locationTransferConfigName from a location_transfer_config resource.
   *
   * @param {String} locationTransferConfigName
   *   A fully-qualified path representing a location_transfer_config resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromLocationTransferConfigName(locationTransferConfigName) {
    return this._pathTemplates.locationTransferConfigPathTemplate.match(
      locationTransferConfigName
    ).location;
  }

  /**
   * Parse the locationTransferConfigName from a location_transfer_config resource.
   *
   * @param {String} locationTransferConfigName
   *   A fully-qualified path representing a location_transfer_config resources.
   * @returns {String} - A string representing the transfer_config.
   */
  matchTransferConfigFromLocationTransferConfigName(
    locationTransferConfigName
  ) {
    return this._pathTemplates.locationTransferConfigPathTemplate.match(
      locationTransferConfigName
    ).transfer_config;
  }

  /**
   * Parse the locationRunName from a location_run resource.
   *
   * @param {String} locationRunName
   *   A fully-qualified path representing a location_run resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromLocationRunName(locationRunName) {
    return this._pathTemplates.locationRunPathTemplate.match(locationRunName)
      .project;
  }

  /**
   * Parse the locationRunName from a location_run resource.
   *
   * @param {String} locationRunName
   *   A fully-qualified path representing a location_run resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromLocationRunName(locationRunName) {
    return this._pathTemplates.locationRunPathTemplate.match(locationRunName)
      .location;
  }

  /**
   * Parse the locationRunName from a location_run resource.
   *
   * @param {String} locationRunName
   *   A fully-qualified path representing a location_run resources.
   * @returns {String} - A string representing the transfer_config.
   */
  matchTransferConfigFromLocationRunName(locationRunName) {
    return this._pathTemplates.locationRunPathTemplate.match(locationRunName)
      .transfer_config;
  }

  /**
   * Parse the locationRunName from a location_run resource.
   *
   * @param {String} locationRunName
   *   A fully-qualified path representing a location_run resources.
   * @returns {String} - A string representing the run.
   */
  matchRunFromLocationRunName(locationRunName) {
    return this._pathTemplates.locationRunPathTemplate.match(locationRunName)
      .run;
  }

  /**
   * Parse the dataSourceName from a data_source resource.
   *
   * @param {String} dataSourceName
   *   A fully-qualified path representing a data_source resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromDataSourceName(dataSourceName) {
    return this._pathTemplates.dataSourcePathTemplate.match(dataSourceName)
      .project;
  }

  /**
   * Parse the dataSourceName from a data_source resource.
   *
   * @param {String} dataSourceName
   *   A fully-qualified path representing a data_source resources.
   * @returns {String} - A string representing the data_source.
   */
  matchDataSourceFromDataSourceName(dataSourceName) {
    return this._pathTemplates.dataSourcePathTemplate.match(dataSourceName)
      .data_source;
  }

  /**
   * Parse the transferConfigName from a transfer_config resource.
   *
   * @param {String} transferConfigName
   *   A fully-qualified path representing a transfer_config resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromTransferConfigName(transferConfigName) {
    return this._pathTemplates.transferConfigPathTemplate.match(
      transferConfigName
    ).project;
  }

  /**
   * Parse the transferConfigName from a transfer_config resource.
   *
   * @param {String} transferConfigName
   *   A fully-qualified path representing a transfer_config resources.
   * @returns {String} - A string representing the transfer_config.
   */
  matchTransferConfigFromTransferConfigName(transferConfigName) {
    return this._pathTemplates.transferConfigPathTemplate.match(
      transferConfigName
    ).transfer_config;
  }

  /**
   * Parse the runName from a run resource.
   *
   * @param {String} runName
   *   A fully-qualified path representing a run resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromRunName(runName) {
    return this._pathTemplates.runPathTemplate.match(runName).project;
  }

  /**
   * Parse the runName from a run resource.
   *
   * @param {String} runName
   *   A fully-qualified path representing a run resources.
   * @returns {String} - A string representing the transfer_config.
   */
  matchTransferConfigFromRunName(runName) {
    return this._pathTemplates.runPathTemplate.match(runName).transfer_config;
  }

  /**
   * Parse the runName from a run resource.
   *
   * @param {String} runName
   *   A fully-qualified path representing a run resources.
   * @returns {String} - A string representing the run.
   */
  matchRunFromRunName(runName) {
    return this._pathTemplates.runPathTemplate.match(runName).run;
  }
}

module.exports = DataTransferServiceClient;
