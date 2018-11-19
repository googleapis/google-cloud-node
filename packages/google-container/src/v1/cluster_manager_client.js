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

const gapicConfig = require('./cluster_manager_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Google Kubernetes Engine Cluster Manager v1
 *
 * @class
 * @memberof v1
 */
class ClusterManagerClient {
  /**
   * Construct an instance of ClusterManagerClient.
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
        'google/container/v1/cluster_service.proto'
      )
    );

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.container.v1.ClusterManager',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.container.v1.ClusterManager.
    const clusterManagerStub = gaxGrpc.createStub(
      protos.google.container.v1.ClusterManager,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const clusterManagerStubMethods = [
      'listClusters',
      'getCluster',
      'createCluster',
      'updateCluster',
      'updateNodePool',
      'setNodePoolAutoscaling',
      'setLoggingService',
      'setMonitoringService',
      'setAddonsConfig',
      'setLocations',
      'updateMaster',
      'setMasterAuth',
      'deleteCluster',
      'listOperations',
      'getOperation',
      'cancelOperation',
      'getServerConfig',
      'listNodePools',
      'getNodePool',
      'createNodePool',
      'deleteNodePool',
      'rollbackNodePoolUpgrade',
      'setNodePoolManagement',
      'setLabels',
      'setLegacyAbac',
      'startIPRotation',
      'completeIPRotation',
      'setNodePoolSize',
      'setNetworkPolicy',
      'setMaintenancePolicy',
    ];
    for (const methodName of clusterManagerStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        clusterManagerStub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            }
        ),
        defaults[methodName],
        null
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'container.googleapis.com';
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
   * Lists all clusters owned by a project in either the specified zone or all
   * zones.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides, or "-" for all zones.
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} [request.parent]
   *   The parent (project and location) where the clusters will be listed.
   *   Specified in the format 'projects/* /locations/*'.
   *   Location "-" matches all zones and all regions.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ListClustersResponse]{@link google.container.v1.ListClustersResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ListClustersResponse]{@link google.container.v1.ListClustersResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   * };
   * client.listClusters(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
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
   * Gets the details of a specific cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to retrieve.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to retrieve.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Cluster]{@link google.container.v1.Cluster}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Cluster]{@link google.container.v1.Cluster}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   * };
   * client.getCluster(request)
   *   .then(responses => {
   *     const response = responses[0];
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
   * Creates a cluster, consisting of the specified number and type of Google
   * Compute Engine instances.
   *
   * By default, the cluster is created in the project's
   * [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks).
   *
   * One firewall is added for the cluster. After cluster creation,
   * the cluster creates routes for each node to allow the containers
   * on that node to communicate with all other instances in the
   * cluster.
   *
   * Finally, an entry is added to the project's global metadata indicating
   * which CIDR range is being used by the cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the parent field.
   * @param {Object} request.cluster
   *   A [cluster
   *   resource](https://cloud.google.com/container-engine/reference/rest/v1/projects.zones.clusters)
   *
   *   This object should have the same structure as [Cluster]{@link google.container.v1.Cluster}
   * @param {string} [request.parent]
   *   The parent (project and location) where the cluster will be created.
   *   Specified in the format 'projects/* /locations/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const cluster = {};
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   cluster: cluster,
   * };
   * client.createCluster(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
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
   * Updates the settings of a specific cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {Object} request.update
   *   A description of the update.
   *
   *   This object should have the same structure as [ClusterUpdate]{@link google.container.v1.ClusterUpdate}
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to update.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const update = {};
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   update: update,
   * };
   * client.updateCluster(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
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
   * Updates the version and/or image type for a specific node pool.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodePoolId
   *   Deprecated. The name of the node pool to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodeVersion
   *   The Kubernetes version to change the nodes to (typically an
   *   upgrade).
   *
   *   Users may specify either explicit versions offered by Kubernetes Engine or
   *   version aliases, which have the following behavior:
   *
   *   - "latest": picks the highest valid Kubernetes version
   *   - "1.X": picks the highest valid patch+gke.N patch in the 1.X version
   *   - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
   *   - "1.X.Y-gke.N": picks an explicit Kubernetes version
   *   - "-": picks the Kubernetes master version
   * @param {string} request.imageType
   *   The desired image type for the node pool.
   * @param {string} [request.name]
   *   The name (project, location, cluster, node pool) of the node pool to
   *   update. Specified in the format
   *   'projects/* /locations/* /clusters/* /nodePools/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const nodePoolId = '';
   * const nodeVersion = '';
   * const imageType = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   nodePoolId: nodePoolId,
   *   nodeVersion: nodeVersion,
   *   imageType: imageType,
   * };
   * client.updateNodePool(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateNodePool(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateNodePool(request, options, callback);
  }

  /**
   * Sets the autoscaling settings for a specific node pool.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodePoolId
   *   Deprecated. The name of the node pool to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {Object} request.autoscaling
   *   Autoscaling configuration for the node pool.
   *
   *   This object should have the same structure as [NodePoolAutoscaling]{@link google.container.v1.NodePoolAutoscaling}
   * @param {string} [request.name]
   *   The name (project, location, cluster, node pool) of the node pool to set
   *   autoscaler settings. Specified in the format
   *   'projects/* /locations/* /clusters/* /nodePools/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const nodePoolId = '';
   * const autoscaling = {};
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   nodePoolId: nodePoolId,
   *   autoscaling: autoscaling,
   * };
   * client.setNodePoolAutoscaling(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setNodePoolAutoscaling(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.setNodePoolAutoscaling(
      request,
      options,
      callback
    );
  }

  /**
   * Sets the logging service for a specific cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.loggingService
   *   The logging service the cluster should use to write metrics.
   *   Currently available options:
   *
   *   * "logging.googleapis.com" - the Google Cloud Logging service
   *   * "none" - no metrics will be exported from the cluster
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to set logging.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const loggingService = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   loggingService: loggingService,
   * };
   * client.setLoggingService(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setLoggingService(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.setLoggingService(request, options, callback);
  }

  /**
   * Sets the monitoring service for a specific cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.monitoringService
   *   The monitoring service the cluster should use to write metrics.
   *   Currently available options:
   *
   *   * "monitoring.googleapis.com" - the Google Cloud Monitoring service
   *   * "none" - no metrics will be exported from the cluster
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to set monitoring.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const monitoringService = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   monitoringService: monitoringService,
   * };
   * client.setMonitoringService(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setMonitoringService(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.setMonitoringService(request, options, callback);
  }

  /**
   * Sets the addons for a specific cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {Object} request.addonsConfig
   *   The desired configurations for the various addons available to run in the
   *   cluster.
   *
   *   This object should have the same structure as [AddonsConfig]{@link google.container.v1.AddonsConfig}
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to set addons.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const addonsConfig = {};
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   addonsConfig: addonsConfig,
   * };
   * client.setAddonsConfig(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setAddonsConfig(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.setAddonsConfig(request, options, callback);
  }

  /**
   * Sets the locations for a specific cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {string[]} request.locations
   *   The desired list of Google Compute Engine
   *   [locations](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes
   *   should be located. Changing the locations a cluster is in will result
   *   in nodes being either created or removed from the cluster, depending on
   *   whether locations are being added or removed.
   *
   *   This list must always include the cluster's primary zone.
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to set locations.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const locations = [];
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   locations: locations,
   * };
   * client.setLocations(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setLocations(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.setLocations(request, options, callback);
  }

  /**
   * Updates the master for a specific cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.masterVersion
   *   The Kubernetes version to change the master to.
   *
   *   Users may specify either explicit versions offered by Kubernetes Engine or
   *   version aliases, which have the following behavior:
   *
   *   - "latest": picks the highest valid Kubernetes version
   *   - "1.X": picks the highest valid patch+gke.N patch in the 1.X version
   *   - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
   *   - "1.X.Y-gke.N": picks an explicit Kubernetes version
   *   - "-": picks the default Kubernetes version
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to update.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const masterVersion = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   masterVersion: masterVersion,
   * };
   * client.updateMaster(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateMaster(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateMaster(request, options, callback);
  }

  /**
   * Used to set master auth materials. Currently supports :-
   * Changing the admin password for a specific cluster.
   * This can be either via password generation or explicitly set the password.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {number} request.action
   *   The exact form of action to be taken on the master auth.
   *
   *   The number should be among the values of [Action]{@link google.container.v1.Action}
   * @param {Object} request.update
   *   A description of the update.
   *
   *   This object should have the same structure as [MasterAuth]{@link google.container.v1.MasterAuth}
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to set auth.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const action = 'UNKNOWN';
   * const update = {};
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   action: action,
   *   update: update,
   * };
   * client.setMasterAuth(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setMasterAuth(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.setMasterAuth(request, options, callback);
  }

  /**
   * Deletes the cluster, including the Kubernetes endpoint and all worker
   * nodes.
   *
   * Firewalls and routes that were configured during cluster creation
   * are also deleted.
   *
   * Other Google Compute Engine resources that might be in use by the cluster
   * (e.g. load balancer resources) will not be deleted if they weren't present
   * at the initial create time.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to delete.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to delete.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   * };
   * client.deleteCluster(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
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
   * Lists all operations in a project in a specific zone or all zones.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for
   *   all zones. This field has been deprecated and replaced by the parent field.
   * @param {string} [request.parent]
   *   The parent (project and location) where the operations will be listed.
   *   Specified in the format 'projects/* /locations/*'.
   *   Location "-" matches all zones and all regions.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ListOperationsResponse]{@link google.container.v1.ListOperationsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ListOperationsResponse]{@link google.container.v1.ListOperationsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   * };
   * client.listOperations(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listOperations(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listOperations(request, options, callback);
  }

  /**
   * Gets the specified operation.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.operationId
   *   Deprecated. The server-assigned `name` of the operation.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, operation id) of the operation to get.
   *   Specified in the format 'projects/* /locations/* /operations/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const operationId = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   operationId: operationId,
   * };
   * client.getOperation(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getOperation(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getOperation(request, options, callback);
  }

  /**
   * Cancels the specified operation.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.operationId
   *   Deprecated. The server-assigned `name` of the operation.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, operation id) of the operation to cancel.
   *   Specified in the format 'projects/* /locations/* /operations/*'.
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
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const operationId = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   operationId: operationId,
   * };
   * client.cancelOperation(request).catch(err => {
   *   console.error(err);
   * });
   */
  cancelOperation(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.cancelOperation(request, options, callback);
  }

  /**
   * Returns configuration info about the Kubernetes Engine service.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project and location) of the server config to get
   *   Specified in the format 'projects/* /locations/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ServerConfig]{@link google.container.v1.ServerConfig}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ServerConfig]{@link google.container.v1.ServerConfig}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   * };
   * client.getServerConfig(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getServerConfig(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getServerConfig(request, options, callback);
  }

  /**
   * Lists the node pools for a cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} [request.parent]
   *   The parent (project, location, cluster id) where the node pools will be
   *   listed. Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ListNodePoolsResponse]{@link google.container.v1.ListNodePoolsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ListNodePoolsResponse]{@link google.container.v1.ListNodePoolsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   * };
   * client.listNodePools(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listNodePools(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listNodePools(request, options, callback);
  }

  /**
   * Retrieves the node pool requested.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodePoolId
   *   Deprecated. The name of the node pool.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, cluster, node pool id) of the node pool to
   *   get. Specified in the format
   *   'projects/* /locations/* /clusters/* /nodePools/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [NodePool]{@link google.container.v1.NodePool}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [NodePool]{@link google.container.v1.NodePool}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const nodePoolId = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   nodePoolId: nodePoolId,
   * };
   * client.getNodePool(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getNodePool(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getNodePool(request, options, callback);
  }

  /**
   * Creates a node pool for a cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the parent field.
   * @param {Object} request.nodePool
   *   The node pool to create.
   *
   *   This object should have the same structure as [NodePool]{@link google.container.v1.NodePool}
   * @param {string} [request.parent]
   *   The parent (project, location, cluster id) where the node pool will be
   *   created. Specified in the format
   *   'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const nodePool = {};
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   nodePool: nodePool,
   * };
   * client.createNodePool(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createNodePool(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createNodePool(request, options, callback);
  }

  /**
   * Deletes a node pool from a cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodePoolId
   *   Deprecated. The name of the node pool to delete.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, cluster, node pool id) of the node pool to
   *   delete. Specified in the format
   *   'projects/* /locations/* /clusters/* /nodePools/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const nodePoolId = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   nodePoolId: nodePoolId,
   * };
   * client.deleteNodePool(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  deleteNodePool(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteNodePool(request, options, callback);
  }

  /**
   * Roll back the previously Aborted or Failed NodePool upgrade.
   * This will be an no-op if the last upgrade successfully completed.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to rollback.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodePoolId
   *   Deprecated. The name of the node pool to rollback.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, cluster, node pool id) of the node poll to
   *   rollback upgrade.
   *   Specified in the format 'projects/* /locations/* /clusters/* /nodePools/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const nodePoolId = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   nodePoolId: nodePoolId,
   * };
   * client.rollbackNodePoolUpgrade(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  rollbackNodePoolUpgrade(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.rollbackNodePoolUpgrade(
      request,
      options,
      callback
    );
  }

  /**
   * Sets the NodeManagement options for a node pool.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to update.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodePoolId
   *   Deprecated. The name of the node pool to update.
   *   This field has been deprecated and replaced by the name field.
   * @param {Object} request.management
   *   NodeManagement configuration for the node pool.
   *
   *   This object should have the same structure as [NodeManagement]{@link google.container.v1.NodeManagement}
   * @param {string} [request.name]
   *   The name (project, location, cluster, node pool id) of the node pool to set
   *   management properties. Specified in the format
   *   'projects/* /locations/* /clusters/* /nodePools/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const nodePoolId = '';
   * const management = {};
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   nodePoolId: nodePoolId,
   *   management: management,
   * };
   * client.setNodePoolManagement(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setNodePoolManagement(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.setNodePoolManagement(
      request,
      options,
      callback
    );
  }

  /**
   * Sets labels on a cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the name field.
   * @param {Object.<string, string>} request.resourceLabels
   *   The labels to set for that cluster.
   * @param {string} request.labelFingerprint
   *   The fingerprint of the previous set of labels for this resource,
   *   used to detect conflicts. The fingerprint is initially generated by
   *   Kubernetes Engine and changes after every request to modify or update
   *   labels. You must always provide an up-to-date fingerprint hash when
   *   updating or changing labels. Make a <code>get()</code> request to the
   *   resource to get the latest fingerprint.
   * @param {string} [request.name]
   *   The name (project, location, cluster id) of the cluster to set labels.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const resourceLabels = {};
   * const labelFingerprint = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   resourceLabels: resourceLabels,
   *   labelFingerprint: labelFingerprint,
   * };
   * client.setLabels(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setLabels(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.setLabels(request, options, callback);
  }

  /**
   * Enables or disables the ABAC authorization mechanism on a cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to update.
   *   This field has been deprecated and replaced by the name field.
   * @param {boolean} request.enabled
   *   Whether ABAC authorization will be enabled in the cluster.
   * @param {string} [request.name]
   *   The name (project, location, cluster id) of the cluster to set legacy abac.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const enabled = false;
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   enabled: enabled,
   * };
   * client.setLegacyAbac(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setLegacyAbac(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.setLegacyAbac(request, options, callback);
  }

  /**
   * Start master IP rotation.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, cluster id) of the cluster to start IP
   *   rotation. Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {boolean} [request.rotateCredentials]
   *   Whether to rotate credentials during IP rotation.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   * };
   * client.startIPRotation(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  startIPRotation(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.startIPRotation(request, options, callback);
  }

  /**
   * Completes master IP rotation.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, cluster id) of the cluster to complete IP
   *   rotation. Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   * };
   * client.completeIPRotation(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  completeIPRotation(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.completeIPRotation(request, options, callback);
  }

  /**
   * Sets the size for a specific node pool.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster to update.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodePoolId
   *   Deprecated. The name of the node pool to update.
   *   This field has been deprecated and replaced by the name field.
   * @param {number} request.nodeCount
   *   The desired node count for the pool.
   * @param {string} [request.name]
   *   The name (project, location, cluster, node pool id) of the node pool to set
   *   size.
   *   Specified in the format 'projects/* /locations/* /clusters/* /nodePools/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const nodePoolId = '';
   * const nodeCount = 0;
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   nodePoolId: nodePoolId,
   *   nodeCount: nodeCount,
   * };
   * client.setNodePoolSize(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setNodePoolSize(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.setNodePoolSize(request, options, callback);
  }

  /**
   * Enables/Disables Network Policy for a cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the name field.
   * @param {Object} request.networkPolicy
   *   Configuration options for the NetworkPolicy feature.
   *
   *   This object should have the same structure as [NetworkPolicy]{@link google.container.v1.NetworkPolicy}
   * @param {string} [request.name]
   *   The name (project, location, cluster id) of the cluster to set networking
   *   policy. Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const networkPolicy = {};
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   networkPolicy: networkPolicy,
   * };
   * client.setNetworkPolicy(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setNetworkPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.setNetworkPolicy(request, options, callback);
  }

  /**
   * Sets the maintenance policy for a cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   * @param {string} request.zone
   *   The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   * @param {string} request.clusterId
   *   The name of the cluster to update.
   * @param {Object} request.maintenancePolicy
   *   The maintenance policy to be set for the cluster. An empty field
   *   clears the existing maintenance policy.
   *
   *   This object should have the same structure as [MaintenancePolicy]{@link google.container.v1.MaintenancePolicy}
   * @param {string} [request.name]
   *   The name (project, location, cluster id) of the cluster to set maintenance
   *   policy.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Operation]{@link google.container.v1.Operation}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.container.v1.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const zone = '';
   * const clusterId = '';
   * const maintenancePolicy = {};
   * const request = {
   *   projectId: projectId,
   *   zone: zone,
   *   clusterId: clusterId,
   *   maintenancePolicy: maintenancePolicy,
   * };
   * client.setMaintenancePolicy(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setMaintenancePolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.setMaintenancePolicy(request, options, callback);
  }
}

module.exports = ClusterManagerClient;
