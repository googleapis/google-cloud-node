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
 * Parameters that describe the nodes in a cluster.
 *
 * @property {string} machineType
 *   The name of a Google Compute Engine [machine
 *   type](https://cloud.google.com/compute/docs/machine-types) (e.g.
 *   `n1-standard-1`).
 *
 *   If unspecified, the default machine type is
 *   `n1-standard-1`.
 *
 * @property {number} diskSizeGb
 *   Size of the disk attached to each node, specified in GB.
 *   The smallest allowed disk size is 10GB.
 *
 *   If unspecified, the default disk size is 100GB.
 *
 * @property {string[]} oauthScopes
 *   The set of Google API scopes to be made available on all of the
 *   node VMs under the "default" service account.
 *
 *   The following scopes are recommended, but not required, and by default are
 *   not included:
 *
 *   * `https://www.googleapis.com/auth/compute` is required for mounting
 *   persistent storage on your nodes.
 *   * `https://www.googleapis.com/auth/devstorage.read_only` is required for
 *   communicating with **gcr.io**
 *   (the [Google Container Registry](https://cloud.google.com/container-registry/)).
 *
 *   If unspecified, no scopes are added, unless Cloud Logging or Cloud
 *   Monitoring are enabled, in which case their required scopes will be added.
 *
 * @property {string} serviceAccount
 *   The Google Cloud Platform Service Account to be used by the node VMs. If
 *   no Service Account is specified, the "default" service account is used.
 *
 * @property {Object.<string, string>} metadata
 *   The metadata key/value pairs assigned to instances in the cluster.
 *
 *   Keys must conform to the regexp [a-zA-Z0-9-_]+ and be less than 128 bytes
 *   in length. These are reflected as part of a URL in the metadata server.
 *   Additionally, to avoid ambiguity, keys must not conflict with any other
 *   metadata keys for the project or be one of the four reserved keys:
 *   "instance-template", "kube-env", "startup-script", and "user-data"
 *
 *   Values are free-form strings, and only have meaning as interpreted by
 *   the image running in the instance. The only restriction placed on them is
 *   that each value's size must be less than or equal to 32 KB.
 *
 *   The total size of all keys and values must be less than 512 KB.
 *
 * @property {string} imageType
 *   The image type to use for this node. Note that for a given image type,
 *   the latest version of it will be used.
 *
 * @property {Object.<string, string>} labels
 *   The map of Kubernetes labels (key/value pairs) to be applied to each node.
 *   These will added in addition to any default label(s) that
 *   Kubernetes may apply to the node.
 *   In case of conflict in label keys, the applied set may differ depending on
 *   the Kubernetes version -- it's best to assume the behavior is undefined
 *   and conflicts should be avoided.
 *   For more information, including usage and the valid values, see:
 *   https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
 *
 * @property {number} localSsdCount
 *   The number of local SSD disks to be attached to the node.
 *
 *   The limit for this value is dependant upon the maximum number of
 *   disks available on a machine per zone. See:
 *   https://cloud.google.com/compute/docs/disks/local-ssd#local_ssd_limits
 *   for more information.
 *
 * @property {string[]} tags
 *   The list of instance tags applied to all nodes. Tags are used to identify
 *   valid sources or targets for network firewalls and are specified by
 *   the client during cluster or node pool creation. Each tag within the list
 *   must comply with RFC1035.
 *
 * @property {boolean} preemptible
 *   Whether the nodes are created as preemptible VM instances. See:
 *   https://cloud.google.com/compute/docs/instances/preemptible for more
 *   information about preemptible VM instances.
 *
 * @property {Object[]} accelerators
 *   A list of hardware accelerators to be attached to each node.
 *   See https://cloud.google.com/compute/docs/gpus for more information about
 *   support for GPUs.
 *
 *   This object should have the same structure as [AcceleratorConfig]{@link google.container.v1.AcceleratorConfig}
 *
 * @property {string} minCpuPlatform
 *   Minimum CPU platform to be used by this instance. The instance may be
 *   scheduled on the specified or newer CPU platform. Applicable values are the
 *   friendly names of CPU platforms, such as
 *   <code>minCpuPlatform: &quot;Intel Haswell&quot;</code> or
 *   <code>minCpuPlatform: &quot;Intel Sandy Bridge&quot;</code>. For more
 *   information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
 *
 * @typedef NodeConfig
 * @memberof google.container.v1
 * @see [google.container.v1.NodeConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var NodeConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The authentication information for accessing the master endpoint.
 * Authentication can be done using HTTP basic auth or using client
 * certificates.
 *
 * @property {string} username
 *   The username to use for HTTP basic authentication to the master endpoint.
 *   For clusters v1.6.0 and later, you can disable basic authentication by
 *   providing an empty username.
 *
 * @property {string} password
 *   The password to use for HTTP basic authentication to the master endpoint.
 *   Because the master endpoint is open to the Internet, you should create a
 *   strong password.  If a password is provided for cluster creation, username
 *   must be non-empty.
 *
 * @property {Object} clientCertificateConfig
 *   Configuration for client certificate authentication on the cluster.  If no
 *   configuration is specified, a client certificate is issued.
 *
 *   This object should have the same structure as [ClientCertificateConfig]{@link google.container.v1.ClientCertificateConfig}
 *
 * @property {string} clusterCaCertificate
 *   [Output only] Base64-encoded public certificate that is the root of
 *   trust for the cluster.
 *
 * @property {string} clientCertificate
 *   [Output only] Base64-encoded public certificate used by clients to
 *   authenticate to the cluster endpoint.
 *
 * @property {string} clientKey
 *   [Output only] Base64-encoded private key used by clients to authenticate
 *   to the cluster endpoint.
 *
 * @typedef MasterAuth
 * @memberof google.container.v1
 * @see [google.container.v1.MasterAuth definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var MasterAuth = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration for client certificates on the cluster.
 *
 * @property {boolean} issueClientCertificate
 *   Issue a client certificate.
 *
 * @typedef ClientCertificateConfig
 * @memberof google.container.v1
 * @see [google.container.v1.ClientCertificateConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var ClientCertificateConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration for the addons that can be automatically spun up in the
 * cluster, enabling additional functionality.
 *
 * @property {Object} httpLoadBalancing
 *   Configuration for the HTTP (L7) load balancing controller addon, which
 *   makes it easy to set up HTTP load balancers for services in a cluster.
 *
 *   This object should have the same structure as [HttpLoadBalancing]{@link google.container.v1.HttpLoadBalancing}
 *
 * @property {Object} horizontalPodAutoscaling
 *   Configuration for the horizontal pod autoscaling feature, which
 *   increases or decreases the number of replica pods a replication controller
 *   has based on the resource usage of the existing pods.
 *
 *   This object should have the same structure as [HorizontalPodAutoscaling]{@link google.container.v1.HorizontalPodAutoscaling}
 *
 * @property {Object} kubernetesDashboard
 *   Configuration for the Kubernetes Dashboard.
 *
 *   This object should have the same structure as [KubernetesDashboard]{@link google.container.v1.KubernetesDashboard}
 *
 * @property {Object} networkPolicyConfig
 *   Configuration for NetworkPolicy. This only tracks whether the addon
 *   is enabled or not on the Master, it does not track whether network policy
 *   is enabled for the nodes.
 *
 *   This object should have the same structure as [NetworkPolicyConfig]{@link google.container.v1.NetworkPolicyConfig}
 *
 * @typedef AddonsConfig
 * @memberof google.container.v1
 * @see [google.container.v1.AddonsConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var AddonsConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration options for the HTTP (L7) load balancing controller addon,
 * which makes it easy to set up HTTP load balancers for services in a cluster.
 *
 * @property {boolean} disabled
 *   Whether the HTTP Load Balancing controller is enabled in the cluster.
 *   When enabled, it runs a small pod in the cluster that manages the load
 *   balancers.
 *
 * @typedef HttpLoadBalancing
 * @memberof google.container.v1
 * @see [google.container.v1.HttpLoadBalancing definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var HttpLoadBalancing = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration options for the horizontal pod autoscaling feature, which
 * increases or decreases the number of replica pods a replication controller
 * has based on the resource usage of the existing pods.
 *
 * @property {boolean} disabled
 *   Whether the Horizontal Pod Autoscaling feature is enabled in the cluster.
 *   When enabled, it ensures that a Heapster pod is running in the cluster,
 *   which is also used by the Cloud Monitoring service.
 *
 * @typedef HorizontalPodAutoscaling
 * @memberof google.container.v1
 * @see [google.container.v1.HorizontalPodAutoscaling definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var HorizontalPodAutoscaling = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration for the Kubernetes Dashboard.
 *
 * @property {boolean} disabled
 *   Whether the Kubernetes Dashboard is enabled for this cluster.
 *
 * @typedef KubernetesDashboard
 * @memberof google.container.v1
 * @see [google.container.v1.KubernetesDashboard definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var KubernetesDashboard = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration for NetworkPolicy. This only tracks whether the addon
 * is enabled or not on the Master, it does not track whether network policy
 * is enabled for the nodes.
 *
 * @property {boolean} disabled
 *   Whether NetworkPolicy is enabled for this cluster.
 *
 * @typedef NetworkPolicyConfig
 * @memberof google.container.v1
 * @see [google.container.v1.NetworkPolicyConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var NetworkPolicyConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Master authorized networks is a Beta feature.
 * Configuration options for the master authorized networks feature. Enabled
 * master authorized networks will disallow all external traffic to access
 * Kubernetes master through HTTPS except traffic from the given CIDR blocks,
 * Google Compute Engine Public IPs and Google Prod IPs.
 *
 * @property {boolean} enabled
 *   Whether or not master authorized networks is enabled.
 *
 * @property {Object[]} cidrBlocks
 *   cidr_blocks define up to 10 external networks that could access
 *   Kubernetes master through HTTPS.
 *
 *   This object should have the same structure as [CidrBlock]{@link google.container.v1.CidrBlock}
 *
 * @typedef MasterAuthorizedNetworksConfig
 * @memberof google.container.v1
 * @see [google.container.v1.MasterAuthorizedNetworksConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var MasterAuthorizedNetworksConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * CidrBlock contains an optional name and one CIDR block.
   *
   * @property {string} displayName
   *   display_name is an optional field for users to identify CIDR blocks.
   *
   * @property {string} cidrBlock
   *   cidr_block must be specified in CIDR notation.
   *
   * @typedef CidrBlock
   * @memberof google.container.v1
   * @see [google.container.v1.MasterAuthorizedNetworksConfig.CidrBlock definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
   */
  CidrBlock: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Configuration for the legacy Attribute Based Access Control authorization
 * mode.
 *
 * @property {boolean} enabled
 *   Whether the ABAC authorizer is enabled for this cluster. When enabled,
 *   identities in the system, including service accounts, nodes, and
 *   controllers, will have statically granted permissions beyond those
 *   provided by the RBAC configuration or IAM.
 *
 * @typedef LegacyAbac
 * @memberof google.container.v1
 * @see [google.container.v1.LegacyAbac definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var LegacyAbac = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration options for the NetworkPolicy feature.
 * https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
 *
 * @property {number} provider
 *   The selected network policy provider.
 *
 *   The number should be among the values of [Provider]{@link google.container.v1.Provider}
 *
 * @property {boolean} enabled
 *   Whether network policy is enabled on the cluster.
 *
 * @typedef NetworkPolicy
 * @memberof google.container.v1
 * @see [google.container.v1.NetworkPolicy definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var NetworkPolicy = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Allowed Network Policy providers.
   *
   * @enum {number}
   * @memberof google.container.v1
   */
  Provider: {

    /**
     * Not set
     */
    PROVIDER_UNSPECIFIED: 0,

    /**
     * Tigera (Calico Felix).
     */
    CALICO: 1
  }
};

/**
 * Configuration for controlling how IPs are allocated in the cluster.
 *
 * @property {boolean} useIpAliases
 *   Whether alias IPs will be used for pod IPs in the cluster.
 *
 * @property {boolean} createSubnetwork
 *   Whether a new subnetwork will be created automatically for the cluster.
 *
 *   This field is only applicable when `use_ip_aliases` is true.
 *
 * @property {string} subnetworkName
 *   A custom subnetwork name to be used if `create_subnetwork` is true.  If
 *   this field is empty, then an automatic name will be chosen for the new
 *   subnetwork.
 *
 * @property {string} clusterIpv4Cidr
 *   This field is deprecated, use cluster_ipv4_cidr_block.
 *
 * @property {string} nodeIpv4Cidr
 *   This field is deprecated, use node_ipv4_cidr_block.
 *
 * @property {string} servicesIpv4Cidr
 *   This field is deprecated, use services_ipv4_cidr_block.
 *
 * @property {string} clusterSecondaryRangeName
 *   The name of the secondary range to be used for the cluster CIDR
 *   block.  The secondary range will be used for pod IP
 *   addresses. This must be an existing secondary range associated
 *   with the cluster subnetwork.
 *
 *   This field is only applicable with use_ip_aliases is true and
 *   create_subnetwork is false.
 *
 * @property {string} servicesSecondaryRangeName
 *   The name of the secondary range to be used as for the services
 *   CIDR block.  The secondary range will be used for service
 *   ClusterIPs. This must be an existing secondary range associated
 *   with the cluster subnetwork.
 *
 *   This field is only applicable with use_ip_aliases is true and
 *   create_subnetwork is false.
 *
 * @property {string} clusterIpv4CidrBlock
 *   The IP address range for the cluster pod IPs. If this field is set, then
 *   `cluster.cluster_ipv4_cidr` must be left blank.
 *
 *   This field is only applicable when `use_ip_aliases` is true.
 *
 *   Set to blank to have a range chosen with the default size.
 *
 *   Set to /netmask (e.g. `/14`) to have a range chosen with a specific
 *   netmask.
 *
 *   Set to a
 *   [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
 *   notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
 *   `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
 *   to use.
 *
 * @property {string} nodeIpv4CidrBlock
 *   The IP address range of the instance IPs in this cluster.
 *
 *   This is applicable only if `create_subnetwork` is true.
 *
 *   Set to blank to have a range chosen with the default size.
 *
 *   Set to /netmask (e.g. `/14`) to have a range chosen with a specific
 *   netmask.
 *
 *   Set to a
 *   [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
 *   notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
 *   `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
 *   to use.
 *
 * @property {string} servicesIpv4CidrBlock
 *   The IP address range of the services IPs in this cluster. If blank, a range
 *   will be automatically chosen with the default size.
 *
 *   This field is only applicable when `use_ip_aliases` is true.
 *
 *   Set to blank to have a range chosen with the default size.
 *
 *   Set to /netmask (e.g. `/14`) to have a range chosen with a specific
 *   netmask.
 *
 *   Set to a
 *   [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
 *   notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
 *   `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
 *   to use.
 *
 * @typedef IPAllocationPolicy
 * @memberof google.container.v1
 * @see [google.container.v1.IPAllocationPolicy definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var IPAllocationPolicy = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A Google Container Engine cluster.
 *
 * @property {string} name
 *   The name of this cluster. The name must be unique within this project
 *   and zone, and can be up to 40 characters with the following restrictions:
 *
 *   * Lowercase letters, numbers, and hyphens only.
 *   * Must start with a letter.
 *   * Must end with a number or a letter.
 *
 * @property {string} description
 *   An optional description of this cluster.
 *
 * @property {number} initialNodeCount
 *   The number of nodes to create in this cluster. You must ensure that your
 *   Compute Engine <a href="/compute/docs/resource-quotas">resource quota</a>
 *   is sufficient for this number of instances. You must also have available
 *   firewall and routes quota.
 *   For requests, this field should only be used in lieu of a
 *   "node_pool" object, since this configuration (along with the
 *   "node_config") will be used to create a "NodePool" object with an
 *   auto-generated name. Do not use this and a node_pool at the same time.
 *
 * @property {Object} nodeConfig
 *   Parameters used in creating the cluster's nodes.
 *   See `nodeConfig` for the description of its properties.
 *   For requests, this field should only be used in lieu of a
 *   "node_pool" object, since this configuration (along with the
 *   "initial_node_count") will be used to create a "NodePool" object with an
 *   auto-generated name. Do not use this and a node_pool at the same time.
 *   For responses, this field will be populated with the node configuration of
 *   the first node pool.
 *
 *   If unspecified, the defaults are used.
 *
 *   This object should have the same structure as [NodeConfig]{@link google.container.v1.NodeConfig}
 *
 * @property {Object} masterAuth
 *   The authentication information for accessing the master endpoint.
 *
 *   This object should have the same structure as [MasterAuth]{@link google.container.v1.MasterAuth}
 *
 * @property {string} loggingService
 *   The logging service the cluster should use to write logs.
 *   Currently available options:
 *
 *   * `logging.googleapis.com` - the Google Cloud Logging service.
 *   * `none` - no logs will be exported from the cluster.
 *   * if left as an empty string,`logging.googleapis.com` will be used.
 *
 * @property {string} monitoringService
 *   The monitoring service the cluster should use to write metrics.
 *   Currently available options:
 *
 *   * `monitoring.googleapis.com` - the Google Cloud Monitoring service.
 *   * `none` - no metrics will be exported from the cluster.
 *   * if left as an empty string, `monitoring.googleapis.com` will be used.
 *
 * @property {string} network
 *   The name of the Google Compute Engine
 *   [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the
 *   cluster is connected. If left unspecified, the `default` network
 *   will be used.
 *
 * @property {string} clusterIpv4Cidr
 *   The IP address range of the container pods in this cluster, in
 *   [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
 *   notation (e.g. `10.96.0.0/14`). Leave blank to have
 *   one automatically chosen or specify a `/14` block in `10.0.0.0/8`.
 *
 * @property {Object} addonsConfig
 *   Configurations for the various addons available to run in the cluster.
 *
 *   This object should have the same structure as [AddonsConfig]{@link google.container.v1.AddonsConfig}
 *
 * @property {string} subnetwork
 *   The name of the Google Compute Engine
 *   [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the
 *   cluster is connected.
 *
 * @property {Object[]} nodePools
 *   The node pools associated with this cluster.
 *   This field should not be set if "node_config" or "initial_node_count" are
 *   specified.
 *
 *   This object should have the same structure as [NodePool]{@link google.container.v1.NodePool}
 *
 * @property {string[]} locations
 *   The list of Google Compute Engine
 *   [locations](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes
 *   should be located.
 *
 * @property {boolean} enableKubernetesAlpha
 *   Kubernetes alpha features are enabled on this cluster. This includes alpha
 *   API groups (e.g. v1alpha1) and features that may not be production ready in
 *   the kubernetes version of the master and nodes.
 *   The cluster has no SLA for uptime and master/node upgrades are disabled.
 *   Alpha enabled clusters are automatically deleted thirty days after
 *   creation.
 *
 * @property {Object.<string, string>} resourceLabels
 *   The resource labels for the cluster to use to annotate any related
 *   Google Compute Engine resources.
 *
 * @property {string} labelFingerprint
 *   The fingerprint of the set of labels for this cluster.
 *
 * @property {Object} legacyAbac
 *   Configuration for the legacy ABAC authorization mode.
 *
 *   This object should have the same structure as [LegacyAbac]{@link google.container.v1.LegacyAbac}
 *
 * @property {Object} networkPolicy
 *   Configuration options for the NetworkPolicy feature.
 *
 *   This object should have the same structure as [NetworkPolicy]{@link google.container.v1.NetworkPolicy}
 *
 * @property {Object} ipAllocationPolicy
 *   Configuration for cluster IP allocation.
 *
 *   This object should have the same structure as [IPAllocationPolicy]{@link google.container.v1.IPAllocationPolicy}
 *
 * @property {Object} masterAuthorizedNetworksConfig
 *   Master authorized networks is a Beta feature.
 *   The configuration options for master authorized networks feature.
 *
 *   This object should have the same structure as [MasterAuthorizedNetworksConfig]{@link google.container.v1.MasterAuthorizedNetworksConfig}
 *
 * @property {Object} maintenancePolicy
 *   Configure the maintenance policy for this cluster.
 *
 *   This object should have the same structure as [MaintenancePolicy]{@link google.container.v1.MaintenancePolicy}
 *
 * @property {string} selfLink
 *   [Output only] Server-defined URL for the resource.
 *
 * @property {string} zone
 *   [Output only] The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} endpoint
 *   [Output only] The IP address of this cluster's master endpoint.
 *   The endpoint can be accessed from the internet at
 *   `https://username:password@endpoint/`.
 *
 *   See the `masterAuth` property of this resource for username and
 *   password information.
 *
 * @property {string} initialClusterVersion
 *   The initial Kubernetes version for this cluster.  Valid versions are those
 *   found in validMasterVersions returned by getServerConfig.  The version can
 *   be upgraded over time; such upgrades are reflected in
 *   currentMasterVersion and currentNodeVersion.
 *
 * @property {string} currentMasterVersion
 *   [Output only] The current software version of the master endpoint.
 *
 * @property {string} currentNodeVersion
 *   [Output only] The current version of the node software components.
 *   If they are currently at multiple versions because they're in the process
 *   of being upgraded, this reflects the minimum version of all nodes.
 *
 * @property {string} createTime
 *   [Output only] The time the cluster was created, in
 *   [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
 *
 * @property {number} status
 *   [Output only] The current status of this cluster.
 *
 *   The number should be among the values of [Status]{@link google.container.v1.Status}
 *
 * @property {string} statusMessage
 *   [Output only] Additional information about the current status of this
 *   cluster, if available.
 *
 * @property {number} nodeIpv4CidrSize
 *   [Output only] The size of the address space on each node for hosting
 *   containers. This is provisioned from within the `container_ipv4_cidr`
 *   range.
 *
 * @property {string} servicesIpv4Cidr
 *   [Output only] The IP address range of the Kubernetes services in
 *   this cluster, in
 *   [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
 *   notation (e.g. `1.2.3.4/29`). Service addresses are
 *   typically put in the last `/16` from the container CIDR.
 *
 * @property {string[]} instanceGroupUrls
 *   Deprecated. Use node_pools.instance_group_urls.
 *
 * @property {number} currentNodeCount
 *   [Output only] The number of nodes currently in the cluster.
 *
 * @property {string} expireTime
 *   [Output only] The time the cluster will be automatically
 *   deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
 *
 * @typedef Cluster
 * @memberof google.container.v1
 * @see [google.container.v1.Cluster definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var Cluster = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The current status of the cluster.
   *
   * @enum {number}
   * @memberof google.container.v1
   */
  Status: {

    /**
     * Not set.
     */
    STATUS_UNSPECIFIED: 0,

    /**
     * The PROVISIONING state indicates the cluster is being created.
     */
    PROVISIONING: 1,

    /**
     * The RUNNING state indicates the cluster has been created and is fully
     * usable.
     */
    RUNNING: 2,

    /**
     * The RECONCILING state indicates that some work is actively being done on
     * the cluster, such as upgrading the master or node software. Details can
     * be found in the `statusMessage` field.
     */
    RECONCILING: 3,

    /**
     * The STOPPING state indicates the cluster is being deleted.
     */
    STOPPING: 4,

    /**
     * The ERROR state indicates the cluster may be unusable. Details
     * can be found in the `statusMessage` field.
     */
    ERROR: 5
  }
};

/**
 * ClusterUpdate describes an update to the cluster. Exactly one update can
 * be applied to a cluster with each request, so at most one field can be
 * provided.
 *
 * @property {string} desiredNodeVersion
 *   The Kubernetes version to change the nodes to (typically an
 *   upgrade). Use `-` to upgrade to the latest version supported by
 *   the server.
 *
 * @property {string} desiredMonitoringService
 *   The monitoring service the cluster should use to write metrics.
 *   Currently available options:
 *
 *   * "monitoring.googleapis.com" - the Google Cloud Monitoring service
 *   * "none" - no metrics will be exported from the cluster
 *
 * @property {Object} desiredAddonsConfig
 *   Configurations for the various addons available to run in the cluster.
 *
 *   This object should have the same structure as [AddonsConfig]{@link google.container.v1.AddonsConfig}
 *
 * @property {string} desiredNodePoolId
 *   The node pool to be upgraded. This field is mandatory if
 *   "desired_node_version", "desired_image_family" or
 *   "desired_node_pool_autoscaling" is specified and there is more than one
 *   node pool on the cluster.
 *
 * @property {string} desiredImageType
 *   The desired image type for the node pool.
 *   NOTE: Set the "desired_node_pool" field as well.
 *
 * @property {Object} desiredNodePoolAutoscaling
 *   Autoscaler configuration for the node pool specified in
 *   desired_node_pool_id. If there is only one pool in the
 *   cluster and desired_node_pool_id is not provided then
 *   the change applies to that single node pool.
 *
 *   This object should have the same structure as [NodePoolAutoscaling]{@link google.container.v1.NodePoolAutoscaling}
 *
 * @property {string[]} desiredLocations
 *   The desired list of Google Compute Engine
 *   [locations](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes
 *   should be located. Changing the locations a cluster is in will result
 *   in nodes being either created or removed from the cluster, depending on
 *   whether locations are being added or removed.
 *
 *   This list must always include the cluster's primary zone.
 *
 * @property {Object} desiredMasterAuthorizedNetworksConfig
 *   Master authorized networks is a Beta feature.
 *   The desired configuration options for master authorized networks feature.
 *
 *   This object should have the same structure as [MasterAuthorizedNetworksConfig]{@link google.container.v1.MasterAuthorizedNetworksConfig}
 *
 * @property {string} desiredMasterVersion
 *   The Kubernetes version to change the master to. The only valid value is the
 *   latest supported version. Use "-" to have the server automatically select
 *   the latest version.
 *
 * @typedef ClusterUpdate
 * @memberof google.container.v1
 * @see [google.container.v1.ClusterUpdate definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var ClusterUpdate = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * This operation resource represents operations that may have happened or are
 * happening on the cluster. All fields are output only.
 *
 * @property {string} name
 *   The server-assigned ID for the operation.
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation
 *   is taking place.
 *
 * @property {number} operationType
 *   The operation type.
 *
 *   The number should be among the values of [Type]{@link google.container.v1.Type}
 *
 * @property {number} status
 *   The current status of the operation.
 *
 *   The number should be among the values of [Status]{@link google.container.v1.Status}
 *
 * @property {string} detail
 *   Detailed operation progress, if available.
 *
 * @property {string} statusMessage
 *   If an error has occurred, a textual description of the error.
 *
 * @property {string} selfLink
 *   Server-defined URL for the resource.
 *
 * @property {string} targetLink
 *   Server-defined URL for the target of the operation.
 *
 * @property {string} startTime
 *   [Output only] The time the operation started, in
 *   [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
 *
 * @property {string} endTime
 *   [Output only] The time the operation completed, in
 *   [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
 *
 * @typedef Operation
 * @memberof google.container.v1
 * @see [google.container.v1.Operation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var Operation = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Current status of the operation.
   *
   * @enum {number}
   * @memberof google.container.v1
   */
  Status: {

    /**
     * Not set.
     */
    STATUS_UNSPECIFIED: 0,

    /**
     * The operation has been created.
     */
    PENDING: 1,

    /**
     * The operation is currently running.
     */
    RUNNING: 2,

    /**
     * The operation is done, either cancelled or completed.
     */
    DONE: 3,

    /**
     * The operation is aborting.
     */
    ABORTING: 4
  },

  /**
   * Operation type.
   *
   * @enum {number}
   * @memberof google.container.v1
   */
  Type: {

    /**
     * Not set.
     */
    TYPE_UNSPECIFIED: 0,

    /**
     * Cluster create.
     */
    CREATE_CLUSTER: 1,

    /**
     * Cluster delete.
     */
    DELETE_CLUSTER: 2,

    /**
     * A master upgrade.
     */
    UPGRADE_MASTER: 3,

    /**
     * A node upgrade.
     */
    UPGRADE_NODES: 4,

    /**
     * Cluster repair.
     */
    REPAIR_CLUSTER: 5,

    /**
     * Cluster update.
     */
    UPDATE_CLUSTER: 6,

    /**
     * Node pool create.
     */
    CREATE_NODE_POOL: 7,

    /**
     * Node pool delete.
     */
    DELETE_NODE_POOL: 8,

    /**
     * Set node pool management.
     */
    SET_NODE_POOL_MANAGEMENT: 9,

    /**
     * Automatic node pool repair.
     */
    AUTO_REPAIR_NODES: 10,

    /**
     * Automatic node upgrade.
     */
    AUTO_UPGRADE_NODES: 11,

    /**
     * Set labels.
     */
    SET_LABELS: 12,

    /**
     * Set/generate master auth materials
     */
    SET_MASTER_AUTH: 13,

    /**
     * Set node pool size.
     */
    SET_NODE_POOL_SIZE: 14,

    /**
     * Updates network policy for a cluster.
     */
    SET_NETWORK_POLICY: 15,

    /**
     * Set the maintenance policy.
     */
    SET_MAINTENANCE_POLICY: 16
  }
};

/**
 * CreateClusterRequest creates a cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {Object} cluster
 *   A [cluster
 *   resource](https://cloud.google.com/container-engine/reference/rest/v1/projects.zones.clusters)
 *
 *   This object should have the same structure as [Cluster]{@link google.container.v1.Cluster}
 *
 * @typedef CreateClusterRequest
 * @memberof google.container.v1
 * @see [google.container.v1.CreateClusterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var CreateClusterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * GetClusterRequest gets the settings of a cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to retrieve.
 *
 * @typedef GetClusterRequest
 * @memberof google.container.v1
 * @see [google.container.v1.GetClusterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var GetClusterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * UpdateClusterRequest updates the settings of a cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to upgrade.
 *
 * @property {Object} update
 *   A description of the update.
 *
 *   This object should have the same structure as [ClusterUpdate]{@link google.container.v1.ClusterUpdate}
 *
 * @typedef UpdateClusterRequest
 * @memberof google.container.v1
 * @see [google.container.v1.UpdateClusterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var UpdateClusterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * UpdateNodePoolRequests update a node pool's image and/or version.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to upgrade.
 *
 * @property {string} nodePoolId
 *   The name of the node pool to upgrade.
 *
 * @property {string} nodeVersion
 *   The Kubernetes version to change the nodes to (typically an
 *   upgrade). Use `-` to upgrade to the latest version supported by
 *   the server.
 *
 * @property {string} imageType
 *   The desired image type for the node pool.
 *
 * @typedef UpdateNodePoolRequest
 * @memberof google.container.v1
 * @see [google.container.v1.UpdateNodePoolRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var UpdateNodePoolRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to upgrade.
 *
 * @property {string} nodePoolId
 *   The name of the node pool to upgrade.
 *
 * @property {Object} autoscaling
 *   Autoscaling configuration for the node pool.
 *
 *   This object should have the same structure as [NodePoolAutoscaling]{@link google.container.v1.NodePoolAutoscaling}
 *
 * @typedef SetNodePoolAutoscalingRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetNodePoolAutoscalingRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var SetNodePoolAutoscalingRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetLoggingServiceRequest sets the logging service of a cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to upgrade.
 *
 * @property {string} loggingService
 *   The logging service the cluster should use to write metrics.
 *   Currently available options:
 *
 *   * "logging.googleapis.com" - the Google Cloud Logging service
 *   * "none" - no metrics will be exported from the cluster
 *
 * @typedef SetLoggingServiceRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetLoggingServiceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var SetLoggingServiceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetMonitoringServiceRequest sets the monitoring service of a cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to upgrade.
 *
 * @property {string} monitoringService
 *   The monitoring service the cluster should use to write metrics.
 *   Currently available options:
 *
 *   * "monitoring.googleapis.com" - the Google Cloud Monitoring service
 *   * "none" - no metrics will be exported from the cluster
 *
 * @typedef SetMonitoringServiceRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetMonitoringServiceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var SetMonitoringServiceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetAddonsConfigRequest sets the addons associated with the cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to upgrade.
 *
 * @property {Object} addonsConfig
 *   The desired configurations for the various addons available to run in the
 *   cluster.
 *
 *   This object should have the same structure as [AddonsConfig]{@link google.container.v1.AddonsConfig}
 *
 * @typedef SetAddonsConfigRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetAddonsConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var SetAddonsConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetLocationsRequest sets the locations of the cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to upgrade.
 *
 * @property {string[]} locations
 *   The desired list of Google Compute Engine
 *   [locations](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes
 *   should be located. Changing the locations a cluster is in will result
 *   in nodes being either created or removed from the cluster, depending on
 *   whether locations are being added or removed.
 *
 *   This list must always include the cluster's primary zone.
 *
 * @typedef SetLocationsRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetLocationsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var SetLocationsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * UpdateMasterRequest updates the master of the cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to upgrade.
 *
 * @property {string} masterVersion
 *   The Kubernetes version to change the master to. The only valid value is the
 *   latest supported version. Use "-" to have the server automatically select
 *   the latest version.
 *
 * @typedef UpdateMasterRequest
 * @memberof google.container.v1
 * @see [google.container.v1.UpdateMasterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var UpdateMasterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetMasterAuthRequest updates the admin password of a cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to upgrade.
 *
 * @property {number} action
 *   The exact form of action to be taken on the master auth.
 *
 *   The number should be among the values of [Action]{@link google.container.v1.Action}
 *
 * @property {Object} update
 *   A description of the update.
 *
 *   This object should have the same structure as [MasterAuth]{@link google.container.v1.MasterAuth}
 *
 * @typedef SetMasterAuthRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetMasterAuthRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var SetMasterAuthRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Operation type: what type update to perform.
   *
   * @enum {number}
   * @memberof google.container.v1
   */
  Action: {

    /**
     * Operation is unknown and will error out.
     */
    UNKNOWN: 0,

    /**
     * Set the password to a user generated value.
     */
    SET_PASSWORD: 1,

    /**
     * Generate a new password and set it to that.
     */
    GENERATE_PASSWORD: 2,

    /**
     * Set the username.  If an empty username is provided, basic authentication
     * is disabled for the cluster.  If a non-empty username is provided, basic
     * authentication is enabled, with either a provided password or a generated
     * one.
     */
    SET_USERNAME: 3
  }
};

/**
 * DeleteClusterRequest deletes a cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to delete.
 *
 * @typedef DeleteClusterRequest
 * @memberof google.container.v1
 * @see [google.container.v1.DeleteClusterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var DeleteClusterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * ListClustersRequest lists clusters.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides, or "-" for all zones.
 *
 * @typedef ListClustersRequest
 * @memberof google.container.v1
 * @see [google.container.v1.ListClustersRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var ListClustersRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * ListClustersResponse is the result of ListClustersRequest.
 *
 * @property {Object[]} clusters
 *   A list of clusters in the project in the specified zone, or
 *   across all ones.
 *
 *   This object should have the same structure as [Cluster]{@link google.container.v1.Cluster}
 *
 * @property {string[]} missingZones
 *   If any zones are listed here, the list of clusters returned
 *   may be missing those zones.
 *
 * @typedef ListClustersResponse
 * @memberof google.container.v1
 * @see [google.container.v1.ListClustersResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var ListClustersResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * GetOperationRequest gets a single operation.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} operationId
 *   The server-assigned `name` of the operation.
 *
 * @typedef GetOperationRequest
 * @memberof google.container.v1
 * @see [google.container.v1.GetOperationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var GetOperationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * ListOperationsRequest lists operations.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available)
 *   to return operations for, or `-` for all zones.
 *
 * @typedef ListOperationsRequest
 * @memberof google.container.v1
 * @see [google.container.v1.ListOperationsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var ListOperationsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * CancelOperationRequest cancels a single operation.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides.
 *
 * @property {string} operationId
 *   The server-assigned `name` of the operation.
 *
 * @typedef CancelOperationRequest
 * @memberof google.container.v1
 * @see [google.container.v1.CancelOperationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var CancelOperationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * ListOperationsResponse is the result of ListOperationsRequest.
 *
 * @property {Object[]} operations
 *   A list of operations in the project in the specified zone.
 *
 *   This object should have the same structure as [Operation]{@link google.container.v1.Operation}
 *
 * @property {string[]} missingZones
 *   If any zones are listed here, the list of operations returned
 *   may be missing the operations from those zones.
 *
 * @typedef ListOperationsResponse
 * @memberof google.container.v1
 * @see [google.container.v1.ListOperationsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var ListOperationsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Gets the current Container Engine service configuration.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available)
 *   to return operations for.
 *
 * @typedef GetServerConfigRequest
 * @memberof google.container.v1
 * @see [google.container.v1.GetServerConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var GetServerConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Container Engine service configuration.
 *
 * @property {string} defaultClusterVersion
 *   Version of Kubernetes the service deploys by default.
 *
 * @property {string[]} validNodeVersions
 *   List of valid node upgrade target versions.
 *
 * @property {string} defaultImageType
 *   Default image type.
 *
 * @property {string[]} validImageTypes
 *   List of valid image types.
 *
 * @property {string[]} validMasterVersions
 *   List of valid master versions.
 *
 * @typedef ServerConfig
 * @memberof google.container.v1
 * @see [google.container.v1.ServerConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var ServerConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * CreateNodePoolRequest creates a node pool for a cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster.
 *
 * @property {Object} nodePool
 *   The node pool to create.
 *
 *   This object should have the same structure as [NodePool]{@link google.container.v1.NodePool}
 *
 * @typedef CreateNodePoolRequest
 * @memberof google.container.v1
 * @see [google.container.v1.CreateNodePoolRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var CreateNodePoolRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * DeleteNodePoolRequest deletes a node pool for a cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster.
 *
 * @property {string} nodePoolId
 *   The name of the node pool to delete.
 *
 * @typedef DeleteNodePoolRequest
 * @memberof google.container.v1
 * @see [google.container.v1.DeleteNodePoolRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var DeleteNodePoolRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * ListNodePoolsRequest lists the node pool(s) for a cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster.
 *
 * @typedef ListNodePoolsRequest
 * @memberof google.container.v1
 * @see [google.container.v1.ListNodePoolsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var ListNodePoolsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * GetNodePoolRequest retrieves a node pool for a cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster.
 *
 * @property {string} nodePoolId
 *   The name of the node pool.
 *
 * @typedef GetNodePoolRequest
 * @memberof google.container.v1
 * @see [google.container.v1.GetNodePoolRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var GetNodePoolRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * NodePool contains the name and configuration for a cluster's node pool.
 * Node pools are a set of nodes (i.e. VM's), with a common configuration and
 * specification, under the control of the cluster master. They may have a set
 * of Kubernetes labels applied to them, which may be used to reference them
 * during pod scheduling. They may also be resized up or down, to accommodate
 * the workload.
 *
 * @property {string} name
 *   The name of the node pool.
 *
 * @property {Object} config
 *   The node configuration of the pool.
 *
 *   This object should have the same structure as [NodeConfig]{@link google.container.v1.NodeConfig}
 *
 * @property {number} initialNodeCount
 *   The initial node count for the pool. You must ensure that your
 *   Compute Engine <a href="/compute/docs/resource-quotas">resource quota</a>
 *   is sufficient for this number of instances. You must also have available
 *   firewall and routes quota.
 *
 * @property {string} selfLink
 *   [Output only] Server-defined URL for the resource.
 *
 * @property {string} version
 *   The version of the Kubernetes of this node.
 *
 * @property {string[]} instanceGroupUrls
 *   [Output only] The resource URLs of the [managed instance
 *   groups](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)
 *   associated with this node pool.
 *
 * @property {number} status
 *   [Output only] The status of the nodes in this pool instance.
 *
 *   The number should be among the values of [Status]{@link google.container.v1.Status}
 *
 * @property {string} statusMessage
 *   [Output only] Additional information about the current status of this
 *   node pool instance, if available.
 *
 * @property {Object} autoscaling
 *   Autoscaler configuration for this NodePool. Autoscaler is enabled
 *   only if a valid configuration is present.
 *
 *   This object should have the same structure as [NodePoolAutoscaling]{@link google.container.v1.NodePoolAutoscaling}
 *
 * @property {Object} management
 *   NodeManagement configuration for this NodePool.
 *
 *   This object should have the same structure as [NodeManagement]{@link google.container.v1.NodeManagement}
 *
 * @typedef NodePool
 * @memberof google.container.v1
 * @see [google.container.v1.NodePool definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var NodePool = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The current status of the node pool instance.
   *
   * @enum {number}
   * @memberof google.container.v1
   */
  Status: {

    /**
     * Not set.
     */
    STATUS_UNSPECIFIED: 0,

    /**
     * The PROVISIONING state indicates the node pool is being created.
     */
    PROVISIONING: 1,

    /**
     * The RUNNING state indicates the node pool has been created
     * and is fully usable.
     */
    RUNNING: 2,

    /**
     * The RUNNING_WITH_ERROR state indicates the node pool has been created
     * and is partially usable. Some error state has occurred and some
     * functionality may be impaired. Customer may need to reissue a request
     * or trigger a new update.
     */
    RUNNING_WITH_ERROR: 3,

    /**
     * The RECONCILING state indicates that some work is actively being done on
     * the node pool, such as upgrading node software. Details can
     * be found in the `statusMessage` field.
     */
    RECONCILING: 4,

    /**
     * The STOPPING state indicates the node pool is being deleted.
     */
    STOPPING: 5,

    /**
     * The ERROR state indicates the node pool may be unusable. Details
     * can be found in the `statusMessage` field.
     */
    ERROR: 6
  }
};

/**
 * NodeManagement defines the set of node management services turned on for the
 * node pool.
 *
 * @property {boolean} autoUpgrade
 *   A flag that specifies whether node auto-upgrade is enabled for the node
 *   pool. If enabled, node auto-upgrade helps keep the nodes in your node pool
 *   up to date with the latest release version of Kubernetes.
 *
 * @property {boolean} autoRepair
 *   A flag that specifies whether the node auto-repair is enabled for the node
 *   pool. If enabled, the nodes in this node pool will be monitored and, if
 *   they fail health checks too many times, an automatic repair action will be
 *   triggered.
 *
 * @property {Object} upgradeOptions
 *   Specifies the Auto Upgrade knobs for the node pool.
 *
 *   This object should have the same structure as [AutoUpgradeOptions]{@link google.container.v1.AutoUpgradeOptions}
 *
 * @typedef NodeManagement
 * @memberof google.container.v1
 * @see [google.container.v1.NodeManagement definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var NodeManagement = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * AutoUpgradeOptions defines the set of options for the user to control how
 * the Auto Upgrades will proceed.
 *
 * @property {string} autoUpgradeStartTime
 *   [Output only] This field is set when upgrades are about to commence
 *   with the approximate start time for the upgrades, in
 *   [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
 *
 * @property {string} description
 *   [Output only] This field is set when upgrades are about to commence
 *   with the description of the upgrade.
 *
 * @typedef AutoUpgradeOptions
 * @memberof google.container.v1
 * @see [google.container.v1.AutoUpgradeOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var AutoUpgradeOptions = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * MaintenancePolicy defines the maintenance policy to be used for the cluster.
 *
 * @property {Object} window
 *   Specifies the maintenance window in which maintenance may be performed.
 *
 *   This object should have the same structure as [MaintenanceWindow]{@link google.container.v1.MaintenanceWindow}
 *
 * @typedef MaintenancePolicy
 * @memberof google.container.v1
 * @see [google.container.v1.MaintenancePolicy definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var MaintenancePolicy = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * MaintenanceWindow defines the maintenance window to be used for the cluster.
 *
 * @property {Object} dailyMaintenanceWindow
 *   DailyMaintenanceWindow specifies a daily maintenance operation window.
 *
 *   This object should have the same structure as [DailyMaintenanceWindow]{@link google.container.v1.DailyMaintenanceWindow}
 *
 * @typedef MaintenanceWindow
 * @memberof google.container.v1
 * @see [google.container.v1.MaintenanceWindow definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var MaintenanceWindow = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Time window specified for daily maintenance operations.
 *
 * @property {string} startTime
 *   Time within the maintenance window to start the maintenance operations.
 *   Time format should be in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt)
 *   format "HH:MM”, where HH : [00-23] and MM : [00-59] GMT.
 *
 * @property {string} duration
 *   [Output only] Duration of the time window, automatically chosen to be
 *   smallest possible in the given scenario.
 *   Duration will be in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt)
 *   format "PTnHnMnS".
 *
 * @typedef DailyMaintenanceWindow
 * @memberof google.container.v1
 * @see [google.container.v1.DailyMaintenanceWindow definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var DailyMaintenanceWindow = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetNodePoolManagementRequest sets the node management properties of a node
 * pool.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to update.
 *
 * @property {string} nodePoolId
 *   The name of the node pool to update.
 *
 * @property {Object} management
 *   NodeManagement configuration for the node pool.
 *
 *   This object should have the same structure as [NodeManagement]{@link google.container.v1.NodeManagement}
 *
 * @typedef SetNodePoolManagementRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetNodePoolManagementRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var SetNodePoolManagementRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetNodePoolSizeRequest sets the size a node
 * pool.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to update.
 *
 * @property {string} nodePoolId
 *   The name of the node pool to update.
 *
 * @property {number} nodeCount
 *   The desired node count for the pool.
 *
 * @typedef SetNodePoolSizeRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetNodePoolSizeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var SetNodePoolSizeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed
 * NodePool upgrade. This will be an no-op if the last upgrade successfully
 * completed.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to rollback.
 *
 * @property {string} nodePoolId
 *   The name of the node pool to rollback.
 *
 * @typedef RollbackNodePoolUpgradeRequest
 * @memberof google.container.v1
 * @see [google.container.v1.RollbackNodePoolUpgradeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var RollbackNodePoolUpgradeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * ListNodePoolsResponse is the result of ListNodePoolsRequest.
 *
 * @property {Object[]} nodePools
 *   A list of node pools for a cluster.
 *
 *   This object should have the same structure as [NodePool]{@link google.container.v1.NodePool}
 *
 * @typedef ListNodePoolsResponse
 * @memberof google.container.v1
 * @see [google.container.v1.ListNodePoolsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var ListNodePoolsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * NodePoolAutoscaling contains information required by cluster autoscaler to
 * adjust the size of the node pool to the current cluster usage.
 *
 * @property {boolean} enabled
 *   Is autoscaling enabled for this node pool.
 *
 * @property {number} minNodeCount
 *   Minimum number of nodes in the NodePool. Must be >= 1 and <=
 *   max_node_count.
 *
 * @property {number} maxNodeCount
 *   Maximum number of nodes in the NodePool. Must be >= min_node_count. There
 *   has to enough quota to scale up the cluster.
 *
 * @typedef NodePoolAutoscaling
 * @memberof google.container.v1
 * @see [google.container.v1.NodePoolAutoscaling definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var NodePoolAutoscaling = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetLabelsRequest sets the Google Cloud Platform labels on a Google Container
 * Engine cluster, which will in turn set them for Google Compute Engine
 * resources used by that cluster
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster.
 *
 * @property {Object.<string, string>} resourceLabels
 *   The labels to set for that cluster.
 *
 * @property {string} labelFingerprint
 *   The fingerprint of the previous set of labels for this resource,
 *   used to detect conflicts. The fingerprint is initially generated by
 *   Container Engine and changes after every request to modify or update
 *   labels. You must always provide an up-to-date fingerprint hash when
 *   updating or changing labels. Make a <code>get()</code> request to the
 *   resource to get the latest fingerprint.
 *
 * @typedef SetLabelsRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetLabelsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var SetLabelsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for
 * a cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to update.
 *
 * @property {boolean} enabled
 *   Whether ABAC authorization will be enabled in the cluster.
 *
 * @typedef SetLegacyAbacRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetLegacyAbacRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var SetLegacyAbacRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * StartIPRotationRequest creates a new IP for the cluster and then performs
 * a node upgrade on each node pool to point to the new IP.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster.
 *
 * @typedef StartIPRotationRequest
 * @memberof google.container.v1
 * @see [google.container.v1.StartIPRotationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var StartIPRotationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * CompleteIPRotationRequest moves the cluster master back into single-IP mode.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster.
 *
 * @typedef CompleteIPRotationRequest
 * @memberof google.container.v1
 * @see [google.container.v1.CompleteIPRotationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var CompleteIPRotationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * AcceleratorConfig represents a Hardware Accelerator request.
 *
 * @property {number} acceleratorCount
 *   The number of the accelerator cards exposed to an instance.
 *
 * @property {string} acceleratorType
 *   The accelerator type resource name. List of supported accelerators
 *   [here](https://cloud.google.com/compute/docs/gpus/#Introduction)
 *
 * @typedef AcceleratorConfig
 * @memberof google.container.v1
 * @see [google.container.v1.AcceleratorConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var AcceleratorConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetNetworkPolicyRequest enables/disables network policy for a cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster.
 *
 * @property {Object} networkPolicy
 *   Configuration options for the NetworkPolicy feature.
 *
 *   This object should have the same structure as [NetworkPolicy]{@link google.container.v1.NetworkPolicy}
 *
 * @typedef SetNetworkPolicyRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetNetworkPolicyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var SetNetworkPolicyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetMaintenancePolicyRequest sets the maintenance policy for a cluster.
 *
 * @property {string} projectId
 *   The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   The name of the cluster to update.
 *
 * @property {Object} maintenancePolicy
 *   The maintenance policy to be set for the cluster. An empty field
 *   clears the existing maintenance policy.
 *
 *   This object should have the same structure as [MaintenancePolicy]{@link google.container.v1.MaintenancePolicy}
 *
 * @typedef SetMaintenancePolicyRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetMaintenancePolicyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
var SetMaintenancePolicyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};