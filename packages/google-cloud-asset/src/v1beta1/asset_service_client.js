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

const gapicConfig = require('./asset_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');
const protobuf = require('protobufjs');

const VERSION = require('../../package.json').version;

/**
 * Asset service definition.
 *
 * @class
 * @memberof v1beta1
 */
class AssetServiceClient {
  /**
   * Construct an instance of AssetServiceClient.
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
        'google/cloud/asset/v1beta1/asset_service.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
    };
    let protoFilesRoot = new gax.GoogleProtoFilesRoot();
    protoFilesRoot = protobuf.loadSync(
      path.join(
        __dirname,
        '..',
        '..',
        'protos',
        'google/cloud/asset/v1beta1/asset_service.proto'
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

    const exportAssetsResponse = protoFilesRoot.lookup(
      'google.cloud.asset.v1beta1.ExportAssetsResponse'
    );
    const exportAssetsMetadata = protoFilesRoot.lookup(
      'google.cloud.asset.v1beta1.ExportAssetsRequest'
    );

    this._descriptors.longrunning = {
      exportAssets: new gax.LongrunningDescriptor(
        this.operationsClient,
        exportAssetsResponse.decode.bind(exportAssetsResponse),
        exportAssetsMetadata.decode.bind(exportAssetsMetadata)
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.asset.v1beta1.AssetService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.asset.v1beta1.AssetService.
    const assetServiceStub = gaxGrpc.createStub(
      protos.google.cloud.asset.v1beta1.AssetService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const assetServiceStubMethods = ['exportAssets', 'batchGetAssetsHistory'];
    for (const methodName of assetServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        assetServiceStub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
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
    return 'cloudasset.googleapis.com';
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
   * Exports assets with time and resource types to a given Google Cloud Storage
   * location. The output format is newline-delimited JSON.
   * This API implements the google.longrunning.Operation API allowing users
   * to keep track of the export.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The relative name of the root asset. Can only be an organization
   *   number (such as "organizations/123"), or a project id (such as
   *   "projects/my-project-id") or a project number (such as "projects/12345").
   * @param {Object} request.outputConfig
   *   Required. Output configuration indicating where the results will be output
   *   to. All results will be in newline delimited JSON format.
   *
   *   This object should have the same structure as [OutputConfig]{@link google.cloud.asset.v1beta1.OutputConfig}
   * @param {Object} [request.readTime]
   *   Timestamp to take an asset snapshot. This can only be set to a timestamp in
   *   the past or of the current time. If not specified, the current time will be
   *   used. Due to delays in resource data collection and indexing, there is a
   *   volatile window during which running the same query may get different
   *   results.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   * @param {string[]} [request.assetTypes]
   *   A list of asset types of which to take a snapshot for. Example:
   *   "google.compute.disk". If specified, only matching assets will be returned.
   * @param {number} [request.contentType]
   *   Asset content type. If not specified, no content but the asset name will be
   *   returned.
   *
   *   The number should be among the values of [ContentType]{@link google.cloud.asset.v1beta1.ContentType}
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
   * const asset = require('asset.v1beta1');
   *
   * const client = new asset.v1beta1.AssetServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const outputConfig = {};
   * const request = {
   *   parent: formattedParent,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.exportAssets(request)
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     const result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     const metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const outputConfig = {};
   * const request = {
   *   parent: formattedParent,
   *   outputConfig: outputConfig,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.exportAssets(request)
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
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
  exportAssets(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.exportAssets(request, options, callback);
  }

  /**
   * Batch gets assets update history that overlaps a time window.
   * For RESOURCE content, this API outputs history with asset in both
   * non-delete or deleted status.
   * For IAM_POLICY content, this API only outputs history when asset and its
   * attached IAM POLICY both exist. So there may be gaps in the output history.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The relative name of the root asset. It can only be an
   *   organization number (such as "organizations/123"), or a project id (such as
   *   "projects/my-project-id")"or a project number (such as "projects/12345").
   * @param {number} request.contentType
   *   Required. The content type.
   *
   *   The number should be among the values of [ContentType]{@link google.cloud.asset.v1beta1.ContentType}
   * @param {Object} request.readTimeWindow
   *   Required. The time window for the asset history. The start time is
   *   required. The returned results contain all temporal assets whose time
   *   window overlap with read_time_window.
   *
   *   This object should have the same structure as [TimeWindow]{@link google.cloud.asset.v1beta1.TimeWindow}
   * @param {string[]} [request.assetNames]
   *   A list of the full names of the assets. See:
   *   https://cloud.google.com/apis/design/resource_names#full_resource_name
   *   Example:
   *   "//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1".
   *
   *   The request becomes a no-op if the asset name list is empty, and the max
   *   size of the asset name list is 100 in one request.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [BatchGetAssetsHistoryResponse]{@link google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [BatchGetAssetsHistoryResponse]{@link google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const asset = require('asset.v1beta1');
   *
   * const client = new asset.v1beta1.AssetServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const contentType = 'CONTENT_TYPE_UNSPECIFIED';
   * const readTimeWindow = {};
   * const request = {
   *   parent: formattedParent,
   *   contentType: contentType,
   *   readTimeWindow: readTimeWindow,
   * };
   * client.batchGetAssetsHistory(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  batchGetAssetsHistory(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.batchGetAssetsHistory(
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

module.exports = AssetServiceClient;
