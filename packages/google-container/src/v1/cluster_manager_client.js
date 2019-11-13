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

const gapicConfig = require('./cluster_manager_client_config.json');
const gax = require('google-gax');
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

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listUsableSubnetworks: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'subnetworks'
      ),
    };

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
      opts.fallback
        ? protos.lookupService('google.container.v1.ClusterManager')
        : protos.google.container.v1.ClusterManager,
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
      'listUsableSubnetworks',
    ];
    for (const methodName of clusterManagerStubMethods) {
      const innerCallPromise = clusterManagerStub.then(
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
        this._descriptors.page[methodName]
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
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
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
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides, or "-" for all zones.
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} [request.parent]
   *   The parent (project and location) where the clusters will be listed.
   *   Specified in the format 'projects/* /locations/*'.
   *   Location "-" matches all zones and all regions.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.listClusters(request, options, callback);
  }

  /**
   * Gets the details of a specific cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to retrieve.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to retrieve.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

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
   * the Kubelet creates routes for each node to allow the containers
   * on that node to communicate with all other instances in the
   * cluster.
   *
   * Finally, an entry is added to the project's global metadata indicating
   * which CIDR range the cluster is using.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the parent field.
   * @param {Object} request.cluster
   *   Required. A [cluster
   *   resource](https://cloud.google.com/container-engine/reference/rest/v1/projects.zones.clusters)
   *
   *   This object should have the same structure as [Cluster]{@link google.container.v1.Cluster}
   * @param {string} [request.parent]
   *   The parent (project and location) where the cluster will be created.
   *   Specified in the format 'projects/* /locations/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.createCluster(request, options, callback);
  }

  /**
   * Updates the settings of a specific cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {Object} request.update
   *   Required. A description of the update.
   *
   *   This object should have the same structure as [ClusterUpdate]{@link google.container.v1.ClusterUpdate}
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to update.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.updateCluster(request, options, callback);
  }

  /**
   * Updates the version and/or image type for the specified node pool.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodePoolId
   *   Required. Deprecated. The name of the node pool to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodeVersion
   *   Required. The Kubernetes version to change the nodes to (typically an
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
   *   Required. The desired image type for the node pool.
   * @param {string} [request.name]
   *   The name (project, location, cluster, node pool) of the node pool to
   *   update. Specified in the format
   *   'projects/* /locations/* /clusters/* /nodePools/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.updateNodePool(request, options, callback);
  }

  /**
   * Sets the autoscaling settings for the specified node pool.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodePoolId
   *   Required. Deprecated. The name of the node pool to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {Object} request.autoscaling
   *   Required. Autoscaling configuration for the node pool.
   *
   *   This object should have the same structure as [NodePoolAutoscaling]{@link google.container.v1.NodePoolAutoscaling}
   * @param {string} [request.name]
   *   The name (project, location, cluster, node pool) of the node pool to set
   *   autoscaler settings. Specified in the format
   *   'projects/* /locations/* /clusters/* /nodePools/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

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
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.loggingService
   *   Required. The logging service the cluster should use to write metrics.
   *   Currently available options:
   *
   *   * "logging.googleapis.com" - the Google Cloud Logging service
   *   * "none" - no metrics will be exported from the cluster
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to set logging.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.setLoggingService(request, options, callback);
  }

  /**
   * Sets the monitoring service for a specific cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.monitoringService
   *   Required. The monitoring service the cluster should use to write metrics.
   *   Currently available options:
   *
   *   * "monitoring.googleapis.com/kubernetes" - the Google Cloud Monitoring
   *   service with Kubernetes-native resource model
   *   * "monitoring.googleapis.com" - the Google Cloud Monitoring service
   *   * "none" - no metrics will be exported from the cluster
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to set monitoring.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.setMonitoringService(request, options, callback);
  }

  /**
   * Sets the addons for a specific cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {Object} request.addonsConfig
   *   Required. The desired configurations for the various addons available to run in the
   *   cluster.
   *
   *   This object should have the same structure as [AddonsConfig]{@link google.container.v1.AddonsConfig}
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to set addons.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.setAddonsConfig(request, options, callback);
  }

  /**
   * Sets the locations for a specific cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {string[]} request.locations
   *   Required. The desired list of Google Compute Engine
   *   [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes
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
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.setLocations(request, options, callback);
  }

  /**
   * Updates the master for a specific cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.masterVersion
   *   Required. The Kubernetes version to change the master to.
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
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.updateMaster(request, options, callback);
  }

  /**
   * Sets master auth materials. Currently supports changing the admin password
   * or a specific cluster, either via password generation or explicitly setting
   * the password.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to upgrade.
   *   This field has been deprecated and replaced by the name field.
   * @param {number} request.action
   *   Required. The exact form of action to be taken on the master auth.
   *
   *   The number should be among the values of [Action]{@link google.container.v1.Action}
   * @param {Object} request.update
   *   Required. A description of the update.
   *
   *   This object should have the same structure as [MasterAuth]{@link google.container.v1.MasterAuth}
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to set auth.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.setMasterAuth(request, options, callback);
  }

  /**
   * Deletes the cluster, including the Kubernetes endpoint and all worker
   * nodes.
   *
   * Firewalls and routes that were configured during cluster creation
   * are also deleted.
   *
   * Other Google Compute Engine resources that might be in use by the cluster,
   * such as load balancer resources, are not deleted if they weren't present
   * when the cluster was initially created.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to delete.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, cluster) of the cluster to delete.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.deleteCluster(request, options, callback);
  }

  /**
   * Lists all operations in a project in a specific zone or all zones.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for
   *   all zones. This field has been deprecated and replaced by the parent field.
   * @param {string} [request.parent]
   *   The parent (project and location) where the operations will be listed.
   *   Specified in the format 'projects/* /locations/*'.
   *   Location "-" matches all zones and all regions.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.listOperations(request, options, callback);
  }

  /**
   * Gets the specified operation.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.operationId
   *   Required. Deprecated. The server-assigned `name` of the operation.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, operation id) of the operation to get.
   *   Specified in the format 'projects/* /locations/* /operations/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.getOperation(request, options, callback);
  }

  /**
   * Cancels the specified operation.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.operationId
   *   Required. Deprecated. The server-assigned `name` of the operation.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, operation id) of the operation to cancel.
   *   Specified in the format 'projects/* /locations/* /operations/*'.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.cancelOperation(request, options, callback);
  }

  /**
   * Returns configuration info about the Google Kubernetes Engine service.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project and location) of the server config to get,
   *   specified in the format 'projects/* /locations/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.getServerConfig(request, options, callback);
  }

  /**
   * Lists the node pools for a cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} [request.parent]
   *   The parent (project, location, cluster id) where the node pools will be
   *   listed. Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.listNodePools(request, options, callback);
  }

  /**
   * Retrieves the requested node pool.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodePoolId
   *   Required. Deprecated. The name of the node pool.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, cluster, node pool id) of the node pool to
   *   get. Specified in the format
   *   'projects/* /locations/* /clusters/* /nodePools/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.getNodePool(request, options, callback);
  }

  /**
   * Creates a node pool for a cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the parent field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the parent field.
   * @param {Object} request.nodePool
   *   Required. The node pool to create.
   *
   *   This object should have the same structure as [NodePool]{@link google.container.v1.NodePool}
   * @param {string} [request.parent]
   *   The parent (project, location, cluster id) where the node pool will be
   *   created. Specified in the format
   *   'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.createNodePool(request, options, callback);
  }

  /**
   * Deletes a node pool from a cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodePoolId
   *   Required. Deprecated. The name of the node pool to delete.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, cluster, node pool id) of the node pool to
   *   delete. Specified in the format
   *   'projects/* /locations/* /clusters/* /nodePools/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.deleteNodePool(request, options, callback);
  }

  /**
   * Rolls back a previously Aborted or Failed NodePool upgrade.
   * This makes no changes if the last upgrade successfully completed.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to rollback.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodePoolId
   *   Required. Deprecated. The name of the node pool to rollback.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, cluster, node pool id) of the node poll to
   *   rollback upgrade.
   *   Specified in the format 'projects/* /locations/* /clusters/* /nodePools/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

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
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to update.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodePoolId
   *   Required. Deprecated. The name of the node pool to update.
   *   This field has been deprecated and replaced by the name field.
   * @param {Object} request.management
   *   Required. NodeManagement configuration for the node pool.
   *
   *   This object should have the same structure as [NodeManagement]{@link google.container.v1.NodeManagement}
   * @param {string} [request.name]
   *   The name (project, location, cluster, node pool id) of the node pool to set
   *   management properties. Specified in the format
   *   'projects/* /locations/* /clusters/* /nodePools/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

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
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the name field.
   * @param {Object.<string, string>} request.resourceLabels
   *   Required. The labels to set for that cluster.
   * @param {string} request.labelFingerprint
   *   Required. The fingerprint of the previous set of labels for this resource,
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
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.setLabels(request, options, callback);
  }

  /**
   * Enables or disables the ABAC authorization mechanism on a cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to update.
   *   This field has been deprecated and replaced by the name field.
   * @param {boolean} request.enabled
   *   Required. Whether ABAC authorization will be enabled in the cluster.
   * @param {string} [request.name]
   *   The name (project, location, cluster id) of the cluster to set legacy abac.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.setLegacyAbac(request, options, callback);
  }

  /**
   * Starts master IP rotation.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, cluster id) of the cluster to start IP
   *   rotation. Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {boolean} [request.rotateCredentials]
   *   Whether to rotate credentials during IP rotation.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.startIPRotation(request, options, callback);
  }

  /**
   * Completes master IP rotation.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} [request.name]
   *   The name (project, location, cluster id) of the cluster to complete IP
   *   rotation. Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.completeIPRotation(request, options, callback);
  }

  /**
   * Sets the size for a specific node pool.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster to update.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.nodePoolId
   *   Required. Deprecated. The name of the node pool to update.
   *   This field has been deprecated and replaced by the name field.
   * @param {number} request.nodeCount
   *   Required. The desired node count for the pool.
   * @param {string} [request.name]
   *   The name (project, location, cluster, node pool id) of the node pool to set
   *   size.
   *   Specified in the format 'projects/* /locations/* /clusters/* /nodePools/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.setNodePoolSize(request, options, callback);
  }

  /**
   * Enables or disables Network Policy for a cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. Deprecated. The Google Developers Console [project ID or project
   *   number](https://developers.google.com/console/help/new/#projectnumber).
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.zone
   *   Required. Deprecated. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   *   This field has been deprecated and replaced by the name field.
   * @param {string} request.clusterId
   *   Required. Deprecated. The name of the cluster.
   *   This field has been deprecated and replaced by the name field.
   * @param {Object} request.networkPolicy
   *   Required. Configuration options for the NetworkPolicy feature.
   *
   *   This object should have the same structure as [NetworkPolicy]{@link google.container.v1.NetworkPolicy}
   * @param {string} [request.name]
   *   The name (project, location, cluster id) of the cluster to set networking
   *   policy. Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.setNetworkPolicy(request, options, callback);
  }

  /**
   * Sets the maintenance policy for a cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The Google Developers Console [project ID or project
   *   number](https://support.google.com/cloud/answer/6158840).
   * @param {string} request.zone
   *   Required. The name of the Google Compute Engine
   *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
   *   resides.
   * @param {string} request.clusterId
   *   Required. The name of the cluster to update.
   * @param {Object} request.maintenancePolicy
   *   Required. The maintenance policy to be set for the cluster. An empty field
   *   clears the existing maintenance policy.
   *
   *   This object should have the same structure as [MaintenancePolicy]{@link google.container.v1.MaintenancePolicy}
   * @param {string} [request.name]
   *   The name (project, location, cluster id) of the cluster to set maintenance
   *   policy.
   *   Specified in the format 'projects/* /locations/* /clusters/*'.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
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
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.setMaintenancePolicy(request, options, callback);
  }

  /**
   * Lists subnetworks that are usable for creating clusters in a project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.parent]
   *   The parent project where subnetworks are usable.
   *   Specified in the format 'projects/*'.
   * @param {string} [request.filter]
   *   Filtering currently only supports equality on the networkProjectId and must
   *   be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId`
   *   is the project which owns the listed subnetworks. This defaults to the
   *   parent project ID.
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
   *   The second parameter to the callback is Array of [UsableSubnetwork]{@link google.container.v1.UsableSubnetwork}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListUsableSubnetworksResponse]{@link google.container.v1.ListUsableSubnetworksResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [UsableSubnetwork]{@link google.container.v1.UsableSubnetwork}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [UsableSubnetwork]{@link google.container.v1.UsableSubnetwork} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListUsableSubnetworksResponse]{@link google.container.v1.ListUsableSubnetworksResponse}.
   *
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
   * // Iterate over all elements.
   * client.listUsableSubnetworks({})
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
   *     return client.listUsableSubnetworks(nextRequest, options).then(callback);
   *   }
   * }
   * client.listUsableSubnetworks({}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listUsableSubnetworks(request, options, callback) {
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

    return this._innerApiCalls.listUsableSubnetworks(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to {@link listUsableSubnetworks}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listUsableSubnetworks} continuously
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
   * @param {string} [request.parent]
   *   The parent project where subnetworks are usable.
   *   Specified in the format 'projects/*'.
   * @param {string} [request.filter]
   *   Filtering currently only supports equality on the networkProjectId and must
   *   be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId`
   *   is the project which owns the listed subnetworks. This defaults to the
   *   parent project ID.
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
   *   An object stream which emits an object representing [UsableSubnetwork]{@link google.container.v1.UsableSubnetwork} on 'data' event.
   *
   * @example
   *
   * const container = require('@google-cloud/container');
   *
   * const client = new container.v1.ClusterManagerClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.listUsableSubnetworksStream({})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listUsableSubnetworksStream(request, options) {
    options = options || {};

    return this._descriptors.page.listUsableSubnetworks.createStream(
      this._innerApiCalls.listUsableSubnetworks,
      request,
      options
    );
  }
}

module.exports = ClusterManagerClient;
