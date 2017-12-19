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

const gapicConfig = require('./cluster_controller_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');
const protobuf = require('protobufjs');

const VERSION = require('../../package.json').version;

/**
 * The ClusterControllerService provides methods to manage clusters
 * of Google Compute Engine instances.
 *
 * @class
 * @memberof v1
 */
class ClusterControllerClient {
  /**
   * Construct an instance of ClusterControllerClient.
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
        'google/cloud/dataproc/v1/clusters.proto'
      )
    );

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listClusters: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'clusters'
      ),
    };
    var protoFilesRoot = new gax.grpc.GoogleProtoFilesRoot();
    protoFilesRoot = protobuf.loadSync(
      path.join(__dirname, '..', '..', 'protos', 'google/cloud/dataproc/v1/clusters.proto'),
      protoFilesRoot
    );


    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    this.operationsClient = new gax.lro({
      auth: gaxGrpc.auth,
      grpc: gaxGrpc.grpc,
    }).operationsClient(opts);

    var createClusterResponse = protoFilesRoot.lookup(
      'google.cloud.dataproc.v1.Cluster'
    );
    var createClusterMetadata = protoFilesRoot.lookup(
      'google.cloud.dataproc.v1.ClusterOperationMetadata'
    );
    var updateClusterResponse = protoFilesRoot.lookup(
      'google.cloud.dataproc.v1.Cluster'
    );
    var updateClusterMetadata = protoFilesRoot.lookup(
      'google.cloud.dataproc.v1.ClusterOperationMetadata'
    );
    var deleteClusterResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    var deleteClusterMetadata = protoFilesRoot.lookup(
      'google.cloud.dataproc.v1.ClusterOperationMetadata'
    );
    var diagnoseClusterResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    var diagnoseClusterMetadata = protoFilesRoot.lookup(
      'google.cloud.dataproc.v1.DiagnoseClusterResults'
    );

    this._descriptors.longrunning = {
      createCluster: new gax.LongrunningDescriptor(
        this.operationsClient,
        createClusterResponse.decode.bind(createClusterResponse),
        createClusterMetadata.decode.bind(createClusterMetadata)
      ),
      updateCluster: new gax.LongrunningDescriptor(
        this.operationsClient,
        updateClusterResponse.decode.bind(updateClusterResponse),
        updateClusterMetadata.decode.bind(updateClusterMetadata)
      ),
      deleteCluster: new gax.LongrunningDescriptor(
        this.operationsClient,
        deleteClusterResponse.decode.bind(deleteClusterResponse),
        deleteClusterMetadata.decode.bind(deleteClusterMetadata)
      ),
      diagnoseCluster: new gax.LongrunningDescriptor(
        this.operationsClient,
        diagnoseClusterResponse.decode.bind(diagnoseClusterResponse),
        diagnoseClusterMetadata.decode.bind(diagnoseClusterMetadata)
      ),
    };

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
      'google.cloud.dataproc.v1.ClusterController',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.dataproc.v1.ClusterController.
    var clusterControllerStub = gaxGrpc.createStub(
      protos.google.cloud.dataproc.v1.ClusterController,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var clusterControllerStubMethods = [
      'createCluster',
      'updateCluster',
      'deleteCluster',
      'getCluster',
      'listClusters',
      'diagnoseCluster',
    ];
    for (let methodName of clusterControllerStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        clusterControllerStub.then(
          stub =>
            function() {
              var args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            }
        ),
        defaults[methodName],
        this._descriptors.page[methodName] || this._descriptors.longrunning[methodName]
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'dataproc.googleapis.com';
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
   * Creates a cluster in a project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the cluster
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {Object} request.cluster
   *   Required. The cluster to create.
   *
   *   This object should have the same structure as [Cluster]{@link google.cloud.dataproc.v1.Cluster}
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
   * const dataproc = require('@google-cloud/dataproc');
   *
   * var client = new dataproc.v1.ClusterControllerClient({
   *   // optional auth parameters.
   * });
   *
   * var projectId = '';
   * var region = '';
   * var cluster = {};
   * var request = {
   *   projectId: projectId,
   *   region: region,
   *   cluster: cluster,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.createCluster(request)
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
   * var projectId = '';
   * var region = '';
   * var cluster = {};
   * var request = {
   *   projectId: projectId,
   *   region: region,
   *   cluster: cluster,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.createCluster(request)
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
  createCluster(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createCluster(request, options, callback);
  }

  /**
   * Updates a cluster in a project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project the
   *   cluster belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} request.clusterName
   *   Required. The cluster name.
   * @param {Object} request.cluster
   *   Required. The changes to the cluster.
   *
   *   This object should have the same structure as [Cluster]{@link google.cloud.dataproc.v1.Cluster}
   * @param {Object} request.updateMask
   *   Required. Specifies the path, relative to `Cluster`, of
   *   the field to update. For example, to change the number of workers
   *   in a cluster to 5, the `update_mask` parameter would be
   *   specified as `config.worker_config.num_instances`,
   *   and the `PATCH` request body would specify the new value, as follows:
   *
   *       {
   *         "config":{
   *           "workerConfig":{
   *             "numInstances":"5"
   *           }
   *         }
   *       }
   *   Similarly, to change the number of preemptible workers in a cluster to 5,
   *   the `update_mask` parameter would be
   *   `config.secondary_worker_config.num_instances`, and the `PATCH` request
   *   body would be set as follows:
   *
   *       {
   *         "config":{
   *           "secondaryWorkerConfig":{
   *             "numInstances":"5"
   *           }
   *         }
   *       }
   *   <strong>Note:</strong> Currently, only the following fields can be updated:
   *
   *    <table>
   *    <tbody>
   *    <tr>
   *    <td><strong>Mask</strong></td>
   *    <td><strong>Purpose</strong></td>
   *    </tr>
   *    <tr>
   *    <td><strong><em>labels</em></strong></td>
   *    <td>Update labels</td>
   *    </tr>
   *    <tr>
   *    <td><strong><em>config.worker_config.num_instances</em></strong></td>
   *    <td>Resize primary worker group</td>
   *    </tr>
   *    <tr>
   *    <td><strong><em>config.secondary_worker_config.num_instances</em></strong></td>
   *    <td>Resize secondary worker group</td>
   *    </tr>
   *    </tbody>
   *    </table>
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
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
   * const dataproc = require('@google-cloud/dataproc');
   *
   * var client = new dataproc.v1.ClusterControllerClient({
   *   // optional auth parameters.
   * });
   *
   * var projectId = '';
   * var region = '';
   * var clusterName = '';
   * var cluster = {};
   * var updateMask = {};
   * var request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   *   cluster: cluster,
   *   updateMask: updateMask,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.updateCluster(request)
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
   * var projectId = '';
   * var region = '';
   * var clusterName = '';
   * var cluster = {};
   * var updateMask = {};
   * var request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   *   cluster: cluster,
   *   updateMask: updateMask,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.updateCluster(request)
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
  updateCluster(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateCluster(request, options, callback);
  }

  /**
   * Deletes a cluster in a project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the cluster
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} request.clusterName
   *   Required. The cluster name.
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
   * const dataproc = require('@google-cloud/dataproc');
   *
   * var client = new dataproc.v1.ClusterControllerClient({
   *   // optional auth parameters.
   * });
   *
   * var projectId = '';
   * var region = '';
   * var clusterName = '';
   * var request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.deleteCluster(request)
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
   * var projectId = '';
   * var region = '';
   * var clusterName = '';
   * var request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.deleteCluster(request)
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
  deleteCluster(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteCluster(request, options, callback);
  }

  /**
   * Gets the resource representation for a cluster in a project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the cluster
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} request.clusterName
   *   Required. The cluster name.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Cluster]{@link google.cloud.dataproc.v1.Cluster}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Cluster]{@link google.cloud.dataproc.v1.Cluster}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * var client = new dataproc.v1.ClusterControllerClient({
   *   // optional auth parameters.
   * });
   *
   * var projectId = '';
   * var region = '';
   * var clusterName = '';
   * var request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   * };
   * client.getCluster(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getCluster(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getCluster(request, options, callback);
  }

  /**
   * Lists all regions/{region}/clusters in a project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the cluster
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} [request.filter]
   *   Optional. A filter constraining the clusters to list. Filters are
   *   case-sensitive and have the following syntax:
   *
   *   field = value [AND [field = value]] ...
   *
   *   where **field** is one of `status.state`, `clusterName`, or `labels.[KEY]`,
   *   and `[KEY]` is a label key. **value** can be `*` to match all values.
   *   `status.state` can be one of the following: `ACTIVE`, `INACTIVE`,
   *   `CREATING`, `RUNNING`, `ERROR`, `DELETING`, or `UPDATING`. `ACTIVE`
   *   contains the `CREATING`, `UPDATING`, and `RUNNING` states. `INACTIVE`
   *   contains the `DELETING` and `ERROR` states.
   *   `clusterName` is the name of the cluster provided at creation time.
   *   Only the logical `AND` operator is supported; space-separated items are
   *   treated as having an implicit `AND` operator.
   *
   *   Example filter:
   *
   *   status.state = ACTIVE AND clusterName = mycluster
   *   AND labels.env = staging AND labels.starred = *
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
   *   The second parameter to the callback is Array of [Cluster]{@link google.cloud.dataproc.v1.Cluster}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListClustersResponse]{@link google.cloud.dataproc.v1.ListClustersResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Cluster]{@link google.cloud.dataproc.v1.Cluster}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Cluster]{@link google.cloud.dataproc.v1.Cluster} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListClustersResponse]{@link google.cloud.dataproc.v1.ListClustersResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * var client = new dataproc.v1.ClusterControllerClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * var projectId = '';
   * var region = '';
   * var request = {
   *   projectId: projectId,
   *   region: region,
   * };
   *
   * client.listClusters(request)
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
   * var projectId = '';
   * var region = '';
   * var request = {
   *   projectId: projectId,
   *   region: region,
   * };
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
   *     return client.listClusters(nextRequest, options).then(callback);
   *   }
   * }
   * client.listClusters(request, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listClusters(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listClusters(request, options, callback);
  }

  /**
   * Equivalent to {@link listClusters}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listClusters} continuously
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
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the cluster
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} [request.filter]
   *   Optional. A filter constraining the clusters to list. Filters are
   *   case-sensitive and have the following syntax:
   *
   *   field = value [AND [field = value]] ...
   *
   *   where **field** is one of `status.state`, `clusterName`, or `labels.[KEY]`,
   *   and `[KEY]` is a label key. **value** can be `*` to match all values.
   *   `status.state` can be one of the following: `ACTIVE`, `INACTIVE`,
   *   `CREATING`, `RUNNING`, `ERROR`, `DELETING`, or `UPDATING`. `ACTIVE`
   *   contains the `CREATING`, `UPDATING`, and `RUNNING` states. `INACTIVE`
   *   contains the `DELETING` and `ERROR` states.
   *   `clusterName` is the name of the cluster provided at creation time.
   *   Only the logical `AND` operator is supported; space-separated items are
   *   treated as having an implicit `AND` operator.
   *
   *   Example filter:
   *
   *   status.state = ACTIVE AND clusterName = mycluster
   *   AND labels.env = staging AND labels.starred = *
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
   *   An object stream which emits an object representing [Cluster]{@link google.cloud.dataproc.v1.Cluster} on 'data' event.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * var client = new dataproc.v1.ClusterControllerClient({
   *   // optional auth parameters.
   * });
   *
   * var projectId = '';
   * var region = '';
   * var request = {
   *   projectId: projectId,
   *   region: region,
   * };
   * client.listClustersStream(request)
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listClustersStream(request, options) {
    options = options || {};

    return this._descriptors.page.listClusters.createStream(
      this._innerApiCalls.listClusters,
      request,
      options
    );
  };

  /**
   * Gets cluster diagnostic information.
   * After the operation completes, the Operation.response field
   * contains `DiagnoseClusterOutputLocation`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the cluster
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} request.clusterName
   *   Required. The cluster name.
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
   * const dataproc = require('@google-cloud/dataproc');
   *
   * var client = new dataproc.v1.ClusterControllerClient({
   *   // optional auth parameters.
   * });
   *
   * var projectId = '';
   * var region = '';
   * var clusterName = '';
   * var request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.diagnoseCluster(request)
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
   * var projectId = '';
   * var region = '';
   * var clusterName = '';
   * var request = {
   *   projectId: projectId,
   *   region: region,
   *   clusterName: clusterName,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.diagnoseCluster(request)
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
  diagnoseCluster(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.diagnoseCluster(request, options, callback);
  }
}


module.exports = ClusterControllerClient;
