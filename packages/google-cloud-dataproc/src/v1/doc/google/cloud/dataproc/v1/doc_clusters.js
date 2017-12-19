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

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Describes the identifying information, config, and status of
 * a cluster of Google Compute Engine instances.
 *
 * @property {string} projectId
 *   Required. The Google Cloud Platform project ID that the cluster belongs to.
 *
 * @property {string} clusterName
 *   Required. The cluster name. Cluster names within a project must be
 *   unique. Names of deleted clusters can be reused.
 *
 * @property {Object} config
 *   Required. The cluster config. Note that Cloud Dataproc may set
 *   default values, and values may change when clusters are updated.
 *
 *   This object should have the same structure as [ClusterConfig]{@link google.cloud.dataproc.v1.ClusterConfig}
 *
 * @property {Object.<string, string>} labels
 *   Optional. The labels to associate with this cluster.
 *   Label **keys** must contain 1 to 63 characters, and must conform to
 *   [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).
 *   Label **values** may be empty, but, if present, must contain 1 to 63
 *   characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).
 *   No more than 32 labels can be associated with a cluster.
 *
 * @property {Object} status
 *   Output-only. Cluster status.
 *
 *   This object should have the same structure as [ClusterStatus]{@link google.cloud.dataproc.v1.ClusterStatus}
 *
 * @property {Object[]} statusHistory
 *   Output-only. The previous cluster status.
 *
 *   This object should have the same structure as [ClusterStatus]{@link google.cloud.dataproc.v1.ClusterStatus}
 *
 * @property {string} clusterUuid
 *   Output-only. A cluster UUID (Unique Universal Identifier). Cloud Dataproc
 *   generates this value when it creates the cluster.
 *
 * @property {Object} metrics
 *   Contains cluster daemon metrics such as HDFS and YARN stats.
 *
 *   **Beta Feature**: This report is available for testing purposes only. It may
 *   be changed before final release.
 *
 *   This object should have the same structure as [ClusterMetrics]{@link google.cloud.dataproc.v1.ClusterMetrics}
 *
 * @typedef Cluster
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.Cluster definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var Cluster = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The cluster config.
 *
 * @property {string} configBucket
 *   Optional. A Google Cloud Storage staging bucket used for sharing generated
 *   SSH keys and config. If you do not specify a staging bucket, Cloud
 *   Dataproc will determine an appropriate Cloud Storage location (US,
 *   ASIA, or EU) for your cluster's staging bucket according to the Google
 *   Compute Engine zone where your cluster is deployed, and then it will create
 *   and manage this project-level, per-location bucket for you.
 *
 * @property {Object} gceClusterConfig
 *   Required. The shared Google Compute Engine config settings for
 *   all instances in a cluster.
 *
 *   This object should have the same structure as [GceClusterConfig]{@link google.cloud.dataproc.v1.GceClusterConfig}
 *
 * @property {Object} masterConfig
 *   Optional. The Google Compute Engine config settings for
 *   the master instance in a cluster.
 *
 *   This object should have the same structure as [InstanceGroupConfig]{@link google.cloud.dataproc.v1.InstanceGroupConfig}
 *
 * @property {Object} workerConfig
 *   Optional. The Google Compute Engine config settings for
 *   worker instances in a cluster.
 *
 *   This object should have the same structure as [InstanceGroupConfig]{@link google.cloud.dataproc.v1.InstanceGroupConfig}
 *
 * @property {Object} secondaryWorkerConfig
 *   Optional. The Google Compute Engine config settings for
 *   additional worker instances in a cluster.
 *
 *   This object should have the same structure as [InstanceGroupConfig]{@link google.cloud.dataproc.v1.InstanceGroupConfig}
 *
 * @property {Object} softwareConfig
 *   Optional. The config settings for software inside the cluster.
 *
 *   This object should have the same structure as [SoftwareConfig]{@link google.cloud.dataproc.v1.SoftwareConfig}
 *
 * @property {Object[]} initializationActions
 *   Optional. Commands to execute on each node after config is
 *   completed. By default, executables are run on master and all worker nodes.
 *   You can test a node's `role` metadata to run an executable on
 *   a master or worker node, as shown below using `curl` (you can also use `wget`):
 *
 *       ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role)
 *       if [[ "${ROLE}" == 'Master' ]]; then
 *         ... master specific actions ...
 *       else
 *         ... worker specific actions ...
 *       fi
 *
 *   This object should have the same structure as [NodeInitializationAction]{@link google.cloud.dataproc.v1.NodeInitializationAction}
 *
 * @typedef ClusterConfig
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ClusterConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var ClusterConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Common config settings for resources of Google Compute Engine cluster
 * instances, applicable to all instances in the cluster.
 *
 * @property {string} zoneUri
 *   Optional. The zone where the Google Compute Engine cluster will be located.
 *   On a create request, it is required in the "global" region. If omitted
 *   in a non-global Cloud Dataproc region, the service will pick a zone in the
 *   corresponding Compute Engine region. On a get request, zone will
 *   always be present.
 *
 *   A full URL, partial URI, or short name are valid. Examples:
 *
 *   * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]`
 *   * `projects/[project_id]/zones/[zone]`
 *   * `us-central1-f`
 *
 * @property {string} networkUri
 *   Optional. The Google Compute Engine network to be used for machine
 *   communications. Cannot be specified with subnetwork_uri. If neither
 *   `network_uri` nor `subnetwork_uri` is specified, the "default" network of
 *   the project is used, if it exists. Cannot be a "Custom Subnet Network" (see
 *   [Using Subnetworks](https://cloud.google.com/compute/docs/subnetworks) for more information).
 *
 *   A full URL, partial URI, or short name are valid. Examples:
 *
 *   * `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default`
 *   * `projects/[project_id]/regions/global/default`
 *   * `default`
 *
 * @property {string} subnetworkUri
 *   Optional. The Google Compute Engine subnetwork to be used for machine
 *   communications. Cannot be specified with network_uri.
 *
 *   A full URL, partial URI, or short name are valid. Examples:
 *
 *   * `https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/sub0`
 *   * `projects/[project_id]/regions/us-east1/sub0`
 *   * `sub0`
 *
 * @property {boolean} internalIpOnly
 *   Optional. If true, all instances in the cluster will only have internal IP
 *   addresses. By default, clusters are not restricted to internal IP addresses,
 *   and will have ephemeral external IP addresses assigned to each instance.
 *   This `internal_ip_only` restriction can only be enabled for subnetwork
 *   enabled networks, and all off-cluster dependencies must be configured to be
 *   accessible without external IP addresses.
 *
 * @property {string} serviceAccount
 *   Optional. The service account of the instances. Defaults to the default
 *   Google Compute Engine service account. Custom service accounts need
 *   permissions equivalent to the folloing IAM roles:
 *
 *   * roles/logging.logWriter
 *   * roles/storage.objectAdmin
 *
 *   (see https://cloud.google.com/compute/docs/access/service-accounts#custom_service_accounts
 *   for more information).
 *   Example: `[account_id]@[project_id].iam.gserviceaccount.com`
 *
 * @property {string[]} serviceAccountScopes
 *   Optional. The URIs of service account scopes to be included in Google
 *   Compute Engine instances. The following base set of scopes is always
 *   included:
 *
 *   * https://www.googleapis.com/auth/cloud.useraccounts.readonly
 *   * https://www.googleapis.com/auth/devstorage.read_write
 *   * https://www.googleapis.com/auth/logging.write
 *
 *   If no scopes are specified, the following defaults are also provided:
 *
 *   * https://www.googleapis.com/auth/bigquery
 *   * https://www.googleapis.com/auth/bigtable.admin.table
 *   * https://www.googleapis.com/auth/bigtable.data
 *   * https://www.googleapis.com/auth/devstorage.full_control
 *
 * @property {string[]} tags
 *   The Google Compute Engine tags to add to all instances (see
 *   [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
 *
 * @property {Object.<string, string>} metadata
 *   The Google Compute Engine metadata entries to add to all instances (see
 *   [Project and instance metadata](https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
 *
 * @typedef GceClusterConfig
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.GceClusterConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var GceClusterConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Optional. The config settings for Google Compute Engine resources in
 * an instance group, such as a master or worker group.
 *
 * @property {number} numInstances
 *   Optional. The number of VM instances in the instance group.
 *   For master instance groups, must be set to 1.
 *
 * @property {string[]} instanceNames
 *   Optional. The list of instance names. Cloud Dataproc derives the names from
 *   `cluster_name`, `num_instances`, and the instance group if not set by user
 *   (recommended practice is to let Cloud Dataproc derive the name).
 *
 * @property {string} imageUri
 *   Output-only. The Google Compute Engine image resource used for cluster
 *   instances. Inferred from `SoftwareConfig.image_version`.
 *
 * @property {string} machineTypeUri
 *   Optional. The Google Compute Engine machine type used for cluster instances.
 *
 *   A full URL, partial URI, or short name are valid. Examples:
 *
 *   * `https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2`
 *   * `projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2`
 *   * `n1-standard-2`
 *
 * @property {Object} diskConfig
 *   Optional. Disk option config settings.
 *
 *   This object should have the same structure as [DiskConfig]{@link google.cloud.dataproc.v1.DiskConfig}
 *
 * @property {boolean} isPreemptible
 *   Optional. Specifies that this instance group contains preemptible instances.
 *
 * @property {Object} managedGroupConfig
 *   Output-only. The config for Google Compute Engine Instance Group
 *   Manager that manages this group.
 *   This is only used for preemptible instance groups.
 *
 *   This object should have the same structure as [ManagedGroupConfig]{@link google.cloud.dataproc.v1.ManagedGroupConfig}
 *
 * @property {Object[]} accelerators
 *   Optional. The Google Compute Engine accelerator configuration for these
 *   instances.
 *
 *   **Beta Feature**: This feature is still under development. It may be
 *   changed before final release.
 *
 *   This object should have the same structure as [AcceleratorConfig]{@link google.cloud.dataproc.v1.AcceleratorConfig}
 *
 * @typedef InstanceGroupConfig
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.InstanceGroupConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var InstanceGroupConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Specifies the resources used to actively manage an instance group.
 *
 * @property {string} instanceTemplateName
 *   Output-only. The name of the Instance Template used for the Managed
 *   Instance Group.
 *
 * @property {string} instanceGroupManagerName
 *   Output-only. The name of the Instance Group Manager for this group.
 *
 * @typedef ManagedGroupConfig
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ManagedGroupConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var ManagedGroupConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Specifies the type and number of accelerator cards attached to the instances
 * of an instance group (see [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus/)).
 *
 * @property {string} acceleratorTypeUri
 *   Full URL, partial URI, or short name of the accelerator type resource to
 *   expose to this instance. See [Google Compute Engine AcceleratorTypes](https://cloud.google.com
 *   /compute/docs/reference/beta/acceleratorTypes)
 *
 *   Examples
 *   * `https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80`
 *   * `projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80`
 *   * `nvidia-tesla-k80`
 *
 * @property {number} acceleratorCount
 *   The number of the accelerator cards of this type exposed to this instance.
 *
 * @typedef AcceleratorConfig
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.AcceleratorConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var AcceleratorConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Specifies the config of disk options for a group of VM instances.
 *
 * @property {number} bootDiskSizeGb
 *   Optional. Size in GB of the boot disk (default is 500GB).
 *
 * @property {number} numLocalSsds
 *   Optional. Number of attached SSDs, from 0 to 4 (default is 0).
 *   If SSDs are not attached, the boot disk is used to store runtime logs and
 *   [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data.
 *   If one or more SSDs are attached, this runtime bulk
 *   data is spread across them, and the boot disk contains only basic
 *   config and installed binaries.
 *
 * @typedef DiskConfig
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.DiskConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var DiskConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Specifies an executable to run on a fully configured node and a
 * timeout period for executable completion.
 *
 * @property {string} executableFile
 *   Required. Google Cloud Storage URI of executable file.
 *
 * @property {Object} executionTimeout
 *   Optional. Amount of time executable has to complete. Default is
 *   10 minutes. Cluster creation fails with an explanatory error message (the
 *   name of the executable that caused the error and the exceeded timeout
 *   period) if the executable is not completed at end of the timeout period.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @typedef NodeInitializationAction
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.NodeInitializationAction definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var NodeInitializationAction = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The status of a cluster and its instances.
 *
 * @property {number} state
 *   Output-only. The cluster's state.
 *
 *   The number should be among the values of [State]{@link google.cloud.dataproc.v1.State}
 *
 * @property {string} detail
 *   Output-only. Optional details of cluster's state.
 *
 * @property {Object} stateStartTime
 *   Output-only. Time when this state was entered.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} substate
 *   Output-only. Additional state information that includes
 *   status reported by the agent.
 *
 *   The number should be among the values of [Substate]{@link google.cloud.dataproc.v1.Substate}
 *
 * @typedef ClusterStatus
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ClusterStatus definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var ClusterStatus = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The cluster state.
   *
   * @enum {number}
   * @memberof google.cloud.dataproc.v1
   */
  State: {

    /**
     * The cluster state is unknown.
     */
    UNKNOWN: 0,

    /**
     * The cluster is being created and set up. It is not ready for use.
     */
    CREATING: 1,

    /**
     * The cluster is currently running and healthy. It is ready for use.
     */
    RUNNING: 2,

    /**
     * The cluster encountered an error. It is not ready for use.
     */
    ERROR: 3,

    /**
     * The cluster is being deleted. It cannot be used.
     */
    DELETING: 4,

    /**
     * The cluster is being updated. It continues to accept and process jobs.
     */
    UPDATING: 5
  },

  /**
   * @enum {number}
   * @memberof google.cloud.dataproc.v1
   */
  Substate: {
    UNSPECIFIED: 0,

    /**
     * The cluster is known to be in an unhealthy state
     * (for example, critical daemons are not running or HDFS capacity is
     * exhausted).
     *
     * Applies to RUNNING state.
     */
    UNHEALTHY: 1,

    /**
     * The agent-reported status is out of date (may occur if
     * Cloud Dataproc loses communication with Agent).
     *
     * Applies to RUNNING state.
     */
    STALE_STATUS: 2
  }
};

/**
 * Specifies the selection and config of software inside the cluster.
 *
 * @property {string} imageVersion
 *   Optional. The version of software inside the cluster. It must match the
 *   regular expression `[0-9]+\.[0-9]+`. If unspecified, it defaults to the
 *   latest version (see [Cloud Dataproc Versioning](https://cloud.google.com/dataproc/versioning)).
 *
 * @property {Object.<string, string>} properties
 *   Optional. The properties to set on daemon config files.
 *
 *   Property keys are specified in `prefix:property` format, such as
 *   `core:fs.defaultFS`. The following are supported prefixes
 *   and their mappings:
 *
 *   * capacity-scheduler: `capacity-scheduler.xml`
 *   * core:   `core-site.xml`
 *   * distcp: `distcp-default.xml`
 *   * hdfs:   `hdfs-site.xml`
 *   * hive:   `hive-site.xml`
 *   * mapred: `mapred-site.xml`
 *   * pig:    `pig.properties`
 *   * spark:  `spark-defaults.conf`
 *   * yarn:   `yarn-site.xml`
 *
 *   For more information, see
 *   [Cluster properties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties).
 *
 * @typedef SoftwareConfig
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.SoftwareConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var SoftwareConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains cluster daemon metrics, such as HDFS and YARN stats.
 *
 * **Beta Feature**: This report is available for testing purposes only. It may
 * be changed before final release.
 *
 * @property {Object.<string, number>} hdfsMetrics
 *   The HDFS metrics.
 *
 * @property {Object.<string, number>} yarnMetrics
 *   The YARN metrics.
 *
 * @typedef ClusterMetrics
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ClusterMetrics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var ClusterMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to create a cluster.
 *
 * @property {string} projectId
 *   Required. The ID of the Google Cloud Platform project that the cluster
 *   belongs to.
 *
 * @property {string} region
 *   Required. The Cloud Dataproc region in which to handle the request.
 *
 * @property {Object} cluster
 *   Required. The cluster to create.
 *
 *   This object should have the same structure as [Cluster]{@link google.cloud.dataproc.v1.Cluster}
 *
 * @typedef CreateClusterRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.CreateClusterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var CreateClusterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to update a cluster.
 *
 * @property {string} projectId
 *   Required. The ID of the Google Cloud Platform project the
 *   cluster belongs to.
 *
 * @property {string} region
 *   Required. The Cloud Dataproc region in which to handle the request.
 *
 * @property {string} clusterName
 *   Required. The cluster name.
 *
 * @property {Object} cluster
 *   Required. The changes to the cluster.
 *
 *   This object should have the same structure as [Cluster]{@link google.cloud.dataproc.v1.Cluster}
 *
 * @property {Object} updateMask
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
 *
 * @typedef UpdateClusterRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.UpdateClusterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var UpdateClusterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to delete a cluster.
 *
 * @property {string} projectId
 *   Required. The ID of the Google Cloud Platform project that the cluster
 *   belongs to.
 *
 * @property {string} region
 *   Required. The Cloud Dataproc region in which to handle the request.
 *
 * @property {string} clusterName
 *   Required. The cluster name.
 *
 * @typedef DeleteClusterRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.DeleteClusterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var DeleteClusterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to get the resource representation for a cluster in a project.
 *
 * @property {string} projectId
 *   Required. The ID of the Google Cloud Platform project that the cluster
 *   belongs to.
 *
 * @property {string} region
 *   Required. The Cloud Dataproc region in which to handle the request.
 *
 * @property {string} clusterName
 *   Required. The cluster name.
 *
 * @typedef GetClusterRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.GetClusterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var GetClusterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to list the clusters in a project.
 *
 * @property {string} projectId
 *   Required. The ID of the Google Cloud Platform project that the cluster
 *   belongs to.
 *
 * @property {string} region
 *   Required. The Cloud Dataproc region in which to handle the request.
 *
 * @property {string} filter
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
 *
 * @property {number} pageSize
 *   Optional. The standard List page size.
 *
 * @property {string} pageToken
 *   Optional. The standard List page token.
 *
 * @typedef ListClustersRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ListClustersRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var ListClustersRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The list of all clusters in a project.
 *
 * @property {Object[]} clusters
 *   Output-only. The clusters in the project.
 *
 *   This object should have the same structure as [Cluster]{@link google.cloud.dataproc.v1.Cluster}
 *
 * @property {string} nextPageToken
 *   Output-only. This token is included in the response if there are more
 *   results to fetch. To fetch additional results, provide this value as the
 *   `page_token` in a subsequent `ListClustersRequest`.
 *
 * @typedef ListClustersResponse
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ListClustersResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var ListClustersResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to collect cluster diagnostic information.
 *
 * @property {string} projectId
 *   Required. The ID of the Google Cloud Platform project that the cluster
 *   belongs to.
 *
 * @property {string} region
 *   Required. The Cloud Dataproc region in which to handle the request.
 *
 * @property {string} clusterName
 *   Required. The cluster name.
 *
 * @typedef DiagnoseClusterRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.DiagnoseClusterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var DiagnoseClusterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The location of diagnostic output.
 *
 * @property {string} outputUri
 *   Output-only. The Google Cloud Storage URI of the diagnostic output.
 *   The output report is a plain text file with a summary of collected
 *   diagnostics.
 *
 * @typedef DiagnoseClusterResults
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.DiagnoseClusterResults definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/clusters.proto}
 */
var DiagnoseClusterResults = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};