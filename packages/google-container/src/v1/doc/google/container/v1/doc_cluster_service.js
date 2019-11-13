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
 *   metadata keys for the project or be one of the reserved keys:
 *    "cluster-location"
 *    "cluster-name"
 *    "cluster-uid"
 *    "configure-sh"
 *    "containerd-configure-sh"
 *    "enable-os-login"
 *    "gci-update-strategy"
 *    "gci-ensure-gke-docker"
 *    "instance-template"
 *    "kube-env"
 *    "startup-script"
 *    "user-data"
 *    "disable-address-manager"
 *    "windows-startup-script-ps1"
 *    "common-psm1"
 *    "k8s-node-setup-psm1"
 *    "install-ssh-psm1"
 *    "user-profile-psm1"
 *    "serial-port-logging-enable"
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
 *   The limit for this value is dependent upon the maximum number of
 *   disks available on a machine per zone. See:
 *   https://cloud.google.com/compute/docs/disks/local-ssd
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
 * @property {string} diskType
 *   Type of the disk attached to each node (e.g. 'pd-standard' or 'pd-ssd')
 *
 *   If unspecified, the default disk type is 'pd-standard'
 *
 * @property {string} minCpuPlatform
 *   Minimum CPU platform to be used by this instance. The instance may be
 *   scheduled on the specified or newer CPU platform. Applicable values are the
 *   friendly names of CPU platforms, such as
 *   <code>minCpuPlatform: &quot;Intel Haswell&quot;</code> or
 *   <code>minCpuPlatform: &quot;Intel Sandy Bridge&quot;</code>. For more
 *   information, read [how to specify min CPU
 *   platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
 *
 * @property {Object[]} taints
 *   List of kubernetes taints to be applied to each node.
 *
 *   For more information, including usage and the valid values, see:
 *   https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
 *
 *   This object should have the same structure as [NodeTaint]{@link google.container.v1.NodeTaint}
 *
 * @property {Object} shieldedInstanceConfig
 *   Shielded Instance options.
 *
 *   This object should have the same structure as [ShieldedInstanceConfig]{@link google.container.v1.ShieldedInstanceConfig}
 *
 * @typedef NodeConfig
 * @memberof google.container.v1
 * @see [google.container.v1.NodeConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const NodeConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A set of Shielded Instance options.
 *
 * @property {boolean} enableSecureBoot
 *   Defines whether the instance has Secure Boot enabled.
 *
 *   Secure Boot helps ensure that the system only runs authentic software by
 *   verifying the digital signature of all boot components, and halting the
 *   boot process if signature verification fails.
 *
 * @property {boolean} enableIntegrityMonitoring
 *   Defines whether the instance has integrity monitoring enabled.
 *
 *   Enables monitoring and attestation of the boot integrity of the instance.
 *   The attestation is performed against the integrity policy baseline. This
 *   baseline is initially derived from the implicitly trusted boot image when
 *   the instance is created.
 *
 * @typedef ShieldedInstanceConfig
 * @memberof google.container.v1
 * @see [google.container.v1.ShieldedInstanceConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const ShieldedInstanceConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Kubernetes taint is comprised of three fields: key, value, and effect. Effect
 * can only be one of three types:  NoSchedule, PreferNoSchedule or NoExecute.
 *
 * For more information, including usage and the valid values, see:
 * https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
 *
 * @property {string} key
 *   Key for taint.
 *
 * @property {string} value
 *   Value for taint.
 *
 * @property {number} effect
 *   Effect for taint.
 *
 *   The number should be among the values of [Effect]{@link google.container.v1.Effect}
 *
 * @typedef NodeTaint
 * @memberof google.container.v1
 * @see [google.container.v1.NodeTaint definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const NodeTaint = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Possible values for Effect in taint.
   *
   * @enum {number}
   * @memberof google.container.v1
   */
  Effect: {

    /**
     * Not set
     */
    EFFECT_UNSPECIFIED: 0,

    /**
     * NoSchedule
     */
    NO_SCHEDULE: 1,

    /**
     * PreferNoSchedule
     */
    PREFER_NO_SCHEDULE: 2,

    /**
     * NoExecute
     */
    NO_EXECUTE: 3
  }
};

/**
 * The authentication information for accessing the master endpoint.
 * Authentication can be done using HTTP basic auth or using client
 * certificates.
 *
 * @property {string} username
 *   The username to use for HTTP basic authentication to the master endpoint.
 *   For clusters v1.6.0 and later, basic authentication can be disabled by
 *   leaving username unspecified (or setting it to the empty string).
 *
 * @property {string} password
 *   The password to use for HTTP basic authentication to the master endpoint.
 *   Because the master endpoint is open to the Internet, you should create a
 *   strong password.  If a password is provided for cluster creation, username
 *   must be non-empty.
 *
 * @property {Object} clientCertificateConfig
 *   Configuration for client certificate authentication on the cluster. For
 *   clusters before v1.12, if no configuration is specified, a client
 *   certificate is issued.
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
const MasterAuth = {
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
const ClientCertificateConfig = {
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
 *   This addon is deprecated, and will be disabled in 1.15. It is recommended
 *   to use the Cloud Console to manage and monitor your Kubernetes clusters,
 *   workloads and applications. For more information, see:
 *   https://cloud.google.com/kubernetes-engine/docs/concepts/dashboards
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
 * @property {Object} cloudRunConfig
 *   Configuration for the Cloud Run addon, which allows the user to use a
 *   managed Knative service.
 *
 *   This object should have the same structure as [CloudRunConfig]{@link google.container.v1.CloudRunConfig}
 *
 * @typedef AddonsConfig
 * @memberof google.container.v1
 * @see [google.container.v1.AddonsConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const AddonsConfig = {
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
const HttpLoadBalancing = {
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
const HorizontalPodAutoscaling = {
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
const KubernetesDashboard = {
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
const NetworkPolicyConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration options for private clusters.
 *
 * @property {boolean} enablePrivateNodes
 *   Whether nodes have internal IP addresses only. If enabled, all nodes are
 *   given only RFC 1918 private addresses and communicate with the master via
 *   private networking.
 *
 * @property {boolean} enablePrivateEndpoint
 *   Whether the master's internal IP address is used as the cluster endpoint.
 *
 * @property {string} masterIpv4CidrBlock
 *   The IP range in CIDR notation to use for the hosted master network. This
 *   range will be used for assigning internal IP addresses to the master or
 *   set of masters, as well as the ILB VIP. This range must not overlap with
 *   any other ranges in use within the cluster's network.
 *
 * @property {string} privateEndpoint
 *   Output only. The internal IP address of this cluster's master endpoint.
 *
 * @property {string} publicEndpoint
 *   Output only. The external IP address of this cluster's master endpoint.
 *
 * @typedef PrivateClusterConfig
 * @memberof google.container.v1
 * @see [google.container.v1.PrivateClusterConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const PrivateClusterConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration for returning group information from authenticators.
 *
 * @property {boolean} enabled
 *   Whether this cluster should return group membership lookups
 *   during authentication using a group of security groups.
 *
 * @property {string} securityGroup
 *   The name of the security group-of-groups to be used. Only relevant
 *   if enabled = true.
 *
 * @typedef AuthenticatorGroupsConfig
 * @memberof google.container.v1
 * @see [google.container.v1.AuthenticatorGroupsConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const AuthenticatorGroupsConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration options for the Cloud Run feature.
 *
 * @property {boolean} disabled
 *   Whether Cloud Run addon is enabled for this cluster.
 *
 * @typedef CloudRunConfig
 * @memberof google.container.v1
 * @see [google.container.v1.CloudRunConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const CloudRunConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration options for the master authorized networks feature. Enabled
 * master authorized networks will disallow all external traffic to access
 * Kubernetes master through HTTPS except traffic from the given CIDR blocks,
 * Google Compute Engine Public IPs and Google Prod IPs.
 *
 * @property {boolean} enabled
 *   Whether or not master authorized networks is enabled.
 *
 * @property {Object[]} cidrBlocks
 *   cidr_blocks define up to 50 external networks that could access
 *   Kubernetes master through HTTPS.
 *
 *   This object should have the same structure as [CidrBlock]{@link google.container.v1.CidrBlock}
 *
 * @typedef MasterAuthorizedNetworksConfig
 * @memberof google.container.v1
 * @see [google.container.v1.MasterAuthorizedNetworksConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const MasterAuthorizedNetworksConfig = {
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
const LegacyAbac = {
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
const NetworkPolicy = {
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
 * Configuration for Binary Authorization.
 *
 * @property {boolean} enabled
 *   Enable Binary Authorization for this cluster. If enabled, all container
 *   images will be validated by Binary Authorization.
 *
 * @typedef BinaryAuthorization
 * @memberof google.container.v1
 * @see [google.container.v1.BinaryAuthorization definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const BinaryAuthorization = {
  // This is for documentation. Actual contents will be loaded by gRPC.
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
 * @property {string} tpuIpv4CidrBlock
 *   The IP address range of the Cloud TPUs in this cluster. If unspecified, a
 *   range will be automatically chosen with the default size.
 *
 *   This field is only applicable when `use_ip_aliases` is true.
 *
 *   If unspecified, the range will use the default size.
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
const IPAllocationPolicy = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A Google Kubernetes Engine cluster.
 *
 * @property {string} name
 *   The name of this cluster. The name must be unique within this project
 *   and location (e.g. zone or region), and can be up to 40 characters with
 *   the following restrictions:
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
 *   Compute Engine [resource quota](https://cloud.google.com/compute/docs/resource-quotas)
 *   is sufficient for this number of instances. You must also have available
 *   firewall and routes quota.
 *   For requests, this field should only be used in lieu of a
 *   "node_pool" object, since this configuration (along with the
 *   "node_config") will be used to create a "NodePool" object with an
 *   auto-generated name. Do not use this and a node_pool at the same time.
 *
 *   This field is deprecated, use node_pool.initial_node_count instead.
 *
 * @property {Object} nodeConfig
 *   Parameters used in creating the cluster's nodes.
 *   For requests, this field should only be used in lieu of a
 *   "node_pool" object, since this configuration (along with the
 *   "initial_node_count") will be used to create a "NodePool" object with an
 *   auto-generated name. Do not use this and a node_pool at the same time.
 *   For responses, this field will be populated with the node configuration of
 *   the first node pool. (For configuration of each node pool, see
 *   `node_pool.config`)
 *
 *   If unspecified, the defaults are used.
 *   This field is deprecated, use node_pool.config instead.
 *
 *   This object should have the same structure as [NodeConfig]{@link google.container.v1.NodeConfig}
 *
 * @property {Object} masterAuth
 *   The authentication information for accessing the master endpoint.
 *   If unspecified, the defaults are used:
 *   For clusters before v1.12, if master_auth is unspecified, `username` will
 *   be set to "admin", a random password will be generated, and a client
 *   certificate will be issued.
 *
 *   This object should have the same structure as [MasterAuth]{@link google.container.v1.MasterAuth}
 *
 * @property {string} loggingService
 *   The logging service the cluster should use to write logs.
 *   Currently available options:
 *
 *   * "logging.googleapis.com/kubernetes" - the Google Cloud Logging
 *   service with Kubernetes-native resource model
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
 *   [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes
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
 *   The configuration options for master authorized networks feature.
 *
 *   This object should have the same structure as [MasterAuthorizedNetworksConfig]{@link google.container.v1.MasterAuthorizedNetworksConfig}
 *
 * @property {Object} maintenancePolicy
 *   Configure the maintenance policy for this cluster.
 *
 *   This object should have the same structure as [MaintenancePolicy]{@link google.container.v1.MaintenancePolicy}
 *
 * @property {Object} binaryAuthorization
 *   Configuration for Binary Authorization.
 *
 *   This object should have the same structure as [BinaryAuthorization]{@link google.container.v1.BinaryAuthorization}
 *
 * @property {Object} autoscaling
 *   Cluster-level autoscaling configuration.
 *
 *   This object should have the same structure as [ClusterAutoscaling]{@link google.container.v1.ClusterAutoscaling}
 *
 * @property {Object} networkConfig
 *   Configuration for cluster networking.
 *
 *   This object should have the same structure as [NetworkConfig]{@link google.container.v1.NetworkConfig}
 *
 * @property {Object} defaultMaxPodsConstraint
 *   The default constraint on the maximum number of pods that can be run
 *   simultaneously on a node in the node pool of this cluster. Only honored
 *   if cluster created with IP Alias support.
 *
 *   This object should have the same structure as [MaxPodsConstraint]{@link google.container.v1.MaxPodsConstraint}
 *
 * @property {Object} resourceUsageExportConfig
 *   Configuration for exporting resource usages. Resource usage export is
 *   disabled when this config is unspecified.
 *
 *   This object should have the same structure as [ResourceUsageExportConfig]{@link google.container.v1.ResourceUsageExportConfig}
 *
 * @property {Object} authenticatorGroupsConfig
 *   Configuration controlling RBAC group membership information.
 *
 *   This object should have the same structure as [AuthenticatorGroupsConfig]{@link google.container.v1.AuthenticatorGroupsConfig}
 *
 * @property {Object} privateClusterConfig
 *   Configuration for private cluster.
 *
 *   This object should have the same structure as [PrivateClusterConfig]{@link google.container.v1.PrivateClusterConfig}
 *
 * @property {Object} databaseEncryption
 *   Configuration of etcd encryption.
 *
 *   This object should have the same structure as [DatabaseEncryption]{@link google.container.v1.DatabaseEncryption}
 *
 * @property {Object} verticalPodAutoscaling
 *   Cluster-level Vertical Pod Autoscaling configuration.
 *
 *   This object should have the same structure as [VerticalPodAutoscaling]{@link google.container.v1.VerticalPodAutoscaling}
 *
 * @property {string} selfLink
 *   [Output only] Server-defined URL for the resource.
 *
 * @property {string} zone
 *   [Output only] The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field is deprecated, use location instead.
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
 *   Users may specify either explicit versions offered by
 *   Kubernetes Engine or version aliases, which have the following behavior:
 *
 *   - "latest": picks the highest valid Kubernetes version
 *   - "1.X": picks the highest valid patch+gke.N patch in the 1.X version
 *   - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
 *   - "1.X.Y-gke.N": picks an explicit Kubernetes version
 *   - "","-": picks the default Kubernetes version
 *
 * @property {string} currentMasterVersion
 *   [Output only] The current software version of the master endpoint.
 *
 * @property {string} currentNodeVersion
 *   [Output only] Deprecated, use
 *   [NodePools.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.zones.clusters.nodePools#resource-nodepools)
 *   instead. The current version of the node software components. If they are
 *   currently at multiple versions because they're in the process of being
 *   upgraded, this reflects the minimum version of all nodes.
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
 *   range. This field will only be set when cluster is in route-based network
 *   mode.
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
 *   [Output only]  The number of nodes currently in the cluster. Deprecated.
 *   Call Kubernetes API directly to retrieve node information.
 *
 * @property {string} expireTime
 *   [Output only] The time the cluster will be automatically
 *   deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
 *
 * @property {string} location
 *   [Output only] The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or
 *   [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which
 *   the cluster resides.
 *
 * @property {boolean} enableTpu
 *   Enable the ability to use Cloud TPUs in this cluster.
 *
 * @property {string} tpuIpv4CidrBlock
 *   [Output only] The IP address range of the Cloud TPUs in this cluster, in
 *   [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
 *   notation (e.g. `1.2.3.4/29`).
 *
 * @property {Object[]} conditions
 *   Which conditions caused the current cluster state.
 *
 *   This object should have the same structure as [StatusCondition]{@link google.container.v1.StatusCondition}
 *
 * @typedef Cluster
 * @memberof google.container.v1
 * @see [google.container.v1.Cluster definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const Cluster = {
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
    ERROR: 5,

    /**
     * The DEGRADED state indicates the cluster requires user action to restore
     * full functionality. Details can be found in the `statusMessage` field.
     */
    DEGRADED: 6
  }
};

/**
 * ClusterUpdate describes an update to the cluster. Exactly one update can
 * be applied to a cluster with each request, so at most one field can be
 * provided.
 *
 * @property {string} desiredNodeVersion
 *   The Kubernetes version to change the nodes to (typically an
 *   upgrade).
 *
 *   Users may specify either explicit versions offered by
 *   Kubernetes Engine or version aliases, which have the following behavior:
 *
 *   - "latest": picks the highest valid Kubernetes version
 *   - "1.X": picks the highest valid patch+gke.N patch in the 1.X version
 *   - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
 *   - "1.X.Y-gke.N": picks an explicit Kubernetes version
 *   - "-": picks the Kubernetes master version
 *
 * @property {string} desiredMonitoringService
 *   The monitoring service the cluster should use to write metrics.
 *   Currently available options:
 *
 *   * "monitoring.googleapis.com/kubernetes" - the Google Cloud Monitoring
 *   service with Kubernetes-native resource model
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
 * @property {Object} desiredDatabaseEncryption
 *   Configuration of etcd encryption.
 *
 *   This object should have the same structure as [DatabaseEncryption]{@link google.container.v1.DatabaseEncryption}
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
 *   [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes
 *   should be located. Changing the locations a cluster is in will result
 *   in nodes being either created or removed from the cluster, depending on
 *   whether locations are being added or removed.
 *
 *   This list must always include the cluster's primary zone.
 *
 * @property {Object} desiredMasterAuthorizedNetworksConfig
 *   The desired configuration options for master authorized networks feature.
 *
 *   This object should have the same structure as [MasterAuthorizedNetworksConfig]{@link google.container.v1.MasterAuthorizedNetworksConfig}
 *
 * @property {Object} desiredClusterAutoscaling
 *   Cluster-level autoscaling configuration.
 *
 *   This object should have the same structure as [ClusterAutoscaling]{@link google.container.v1.ClusterAutoscaling}
 *
 * @property {Object} desiredBinaryAuthorization
 *   The desired configuration options for the Binary Authorization feature.
 *
 *   This object should have the same structure as [BinaryAuthorization]{@link google.container.v1.BinaryAuthorization}
 *
 * @property {string} desiredLoggingService
 *   The logging service the cluster should use to write logs.
 *   Currently available options:
 *
 *   * "logging.googleapis.com/kubernetes" - the Google Cloud Logging
 *   service with Kubernetes-native resource model
 *   * "logging.googleapis.com" - the Google Cloud Logging service
 *   * "none" - no logs will be exported from the cluster
 *
 * @property {Object} desiredResourceUsageExportConfig
 *   The desired configuration for exporting resource usage.
 *
 *   This object should have the same structure as [ResourceUsageExportConfig]{@link google.container.v1.ResourceUsageExportConfig}
 *
 * @property {Object} desiredVerticalPodAutoscaling
 *   Cluster-level Vertical Pod Autoscaling configuration.
 *
 *   This object should have the same structure as [VerticalPodAutoscaling]{@link google.container.v1.VerticalPodAutoscaling}
 *
 * @property {Object} desiredIntraNodeVisibilityConfig
 *   The desired config of Intra-node visibility.
 *
 *   This object should have the same structure as [IntraNodeVisibilityConfig]{@link google.container.v1.IntraNodeVisibilityConfig}
 *
 * @property {string} desiredMasterVersion
 *   The Kubernetes version to change the master to.
 *
 *   Users may specify either explicit versions offered by
 *   Kubernetes Engine or version aliases, which have the following behavior:
 *
 *   - "latest": picks the highest valid Kubernetes version
 *   - "1.X": picks the highest valid patch+gke.N patch in the 1.X version
 *   - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
 *   - "1.X.Y-gke.N": picks an explicit Kubernetes version
 *   - "-": picks the default Kubernetes version
 *
 * @typedef ClusterUpdate
 * @memberof google.container.v1
 * @see [google.container.v1.ClusterUpdate definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const ClusterUpdate = {
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
 *   This field is deprecated, use location instead.
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
 * @property {string} location
 *   [Output only] The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or
 *   [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which
 *   the cluster resides.
 *
 * @property {string} startTime
 *   [Output only] The time the operation started, in
 *   [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
 *
 * @property {string} endTime
 *   [Output only] The time the operation completed, in
 *   [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
 *
 * @property {Object[]} clusterConditions
 *   Which conditions caused the current cluster state.
 *
 *   This object should have the same structure as [StatusCondition]{@link google.container.v1.StatusCondition}
 *
 * @property {Object[]} nodepoolConditions
 *   Which conditions caused the current node pool state.
 *
 *   This object should have the same structure as [StatusCondition]{@link google.container.v1.StatusCondition}
 *
 * @typedef Operation
 * @memberof google.container.v1
 * @see [google.container.v1.Operation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const Operation = {
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
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the parent field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the parent field.
 *
 * @property {Object} cluster
 *   Required. A [cluster
 *   resource](https://cloud.google.com/container-engine/reference/rest/v1/projects.zones.clusters)
 *
 *   This object should have the same structure as [Cluster]{@link google.container.v1.Cluster}
 *
 * @property {string} parent
 *   The parent (project and location) where the cluster will be created.
 *   Specified in the format 'projects/* /locations/*'.
 *
 * @typedef CreateClusterRequest
 * @memberof google.container.v1
 * @see [google.container.v1.CreateClusterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const CreateClusterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * GetClusterRequest gets the settings of a cluster.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to retrieve.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} name
 *   The name (project, location, cluster) of the cluster to retrieve.
 *   Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef GetClusterRequest
 * @memberof google.container.v1
 * @see [google.container.v1.GetClusterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const GetClusterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * UpdateClusterRequest updates the settings of a cluster.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to upgrade.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {Object} update
 *   Required. A description of the update.
 *
 *   This object should have the same structure as [ClusterUpdate]{@link google.container.v1.ClusterUpdate}
 *
 * @property {string} name
 *   The name (project, location, cluster) of the cluster to update.
 *   Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef UpdateClusterRequest
 * @memberof google.container.v1
 * @see [google.container.v1.UpdateClusterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const UpdateClusterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * UpdateNodePoolRequests update a node pool's image and/or version.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to upgrade.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} nodePoolId
 *   Required. Deprecated. The name of the node pool to upgrade.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} nodeVersion
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
 *
 * @property {string} imageType
 *   Required. The desired image type for the node pool.
 *
 * @property {string} name
 *   The name (project, location, cluster, node pool) of the node pool to
 *   update. Specified in the format
 *   'projects/* /locations/* /clusters/* /nodePools/*'.
 *
 * @typedef UpdateNodePoolRequest
 * @memberof google.container.v1
 * @see [google.container.v1.UpdateNodePoolRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const UpdateNodePoolRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to upgrade.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} nodePoolId
 *   Required. Deprecated. The name of the node pool to upgrade.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {Object} autoscaling
 *   Required. Autoscaling configuration for the node pool.
 *
 *   This object should have the same structure as [NodePoolAutoscaling]{@link google.container.v1.NodePoolAutoscaling}
 *
 * @property {string} name
 *   The name (project, location, cluster, node pool) of the node pool to set
 *   autoscaler settings. Specified in the format
 *   'projects/* /locations/* /clusters/* /nodePools/*'.
 *
 * @typedef SetNodePoolAutoscalingRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetNodePoolAutoscalingRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const SetNodePoolAutoscalingRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetLoggingServiceRequest sets the logging service of a cluster.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to upgrade.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} loggingService
 *   Required. The logging service the cluster should use to write metrics.
 *   Currently available options:
 *
 *   * "logging.googleapis.com" - the Google Cloud Logging service
 *   * "none" - no metrics will be exported from the cluster
 *
 * @property {string} name
 *   The name (project, location, cluster) of the cluster to set logging.
 *   Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef SetLoggingServiceRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetLoggingServiceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const SetLoggingServiceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetMonitoringServiceRequest sets the monitoring service of a cluster.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to upgrade.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} monitoringService
 *   Required. The monitoring service the cluster should use to write metrics.
 *   Currently available options:
 *
 *   * "monitoring.googleapis.com/kubernetes" - the Google Cloud Monitoring
 *   service with Kubernetes-native resource model
 *   * "monitoring.googleapis.com" - the Google Cloud Monitoring service
 *   * "none" - no metrics will be exported from the cluster
 *
 * @property {string} name
 *   The name (project, location, cluster) of the cluster to set monitoring.
 *   Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef SetMonitoringServiceRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetMonitoringServiceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const SetMonitoringServiceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetAddonsConfigRequest sets the addons associated with the cluster.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to upgrade.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {Object} addonsConfig
 *   Required. The desired configurations for the various addons available to run in the
 *   cluster.
 *
 *   This object should have the same structure as [AddonsConfig]{@link google.container.v1.AddonsConfig}
 *
 * @property {string} name
 *   The name (project, location, cluster) of the cluster to set addons.
 *   Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef SetAddonsConfigRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetAddonsConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const SetAddonsConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetLocationsRequest sets the locations of the cluster.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to upgrade.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string[]} locations
 *   Required. The desired list of Google Compute Engine
 *   [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes
 *   should be located. Changing the locations a cluster is in will result
 *   in nodes being either created or removed from the cluster, depending on
 *   whether locations are being added or removed.
 *
 *   This list must always include the cluster's primary zone.
 *
 * @property {string} name
 *   The name (project, location, cluster) of the cluster to set locations.
 *   Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef SetLocationsRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetLocationsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const SetLocationsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * UpdateMasterRequest updates the master of the cluster.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to upgrade.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} masterVersion
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
 *
 * @property {string} name
 *   The name (project, location, cluster) of the cluster to update.
 *   Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef UpdateMasterRequest
 * @memberof google.container.v1
 * @see [google.container.v1.UpdateMasterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const UpdateMasterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetMasterAuthRequest updates the admin password of a cluster.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to upgrade.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {number} action
 *   Required. The exact form of action to be taken on the master auth.
 *
 *   The number should be among the values of [Action]{@link google.container.v1.Action}
 *
 * @property {Object} update
 *   Required. A description of the update.
 *
 *   This object should have the same structure as [MasterAuth]{@link google.container.v1.MasterAuth}
 *
 * @property {string} name
 *   The name (project, location, cluster) of the cluster to set auth.
 *   Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef SetMasterAuthRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetMasterAuthRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const SetMasterAuthRequest = {
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
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to delete.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} name
 *   The name (project, location, cluster) of the cluster to delete.
 *   Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef DeleteClusterRequest
 * @memberof google.container.v1
 * @see [google.container.v1.DeleteClusterRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const DeleteClusterRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * ListClustersRequest lists clusters.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the parent field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides, or "-" for all zones.
 *   This field has been deprecated and replaced by the parent field.
 *
 * @property {string} parent
 *   The parent (project and location) where the clusters will be listed.
 *   Specified in the format 'projects/* /locations/*'.
 *   Location "-" matches all zones and all regions.
 *
 * @typedef ListClustersRequest
 * @memberof google.container.v1
 * @see [google.container.v1.ListClustersRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const ListClustersRequest = {
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
const ListClustersResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * GetOperationRequest gets a single operation.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} operationId
 *   Required. Deprecated. The server-assigned `name` of the operation.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} name
 *   The name (project, location, operation id) of the operation to get.
 *   Specified in the format 'projects/* /locations/* /operations/*'.
 *
 * @typedef GetOperationRequest
 * @memberof google.container.v1
 * @see [google.container.v1.GetOperationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const GetOperationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * ListOperationsRequest lists operations.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the parent field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for, or `-` for
 *   all zones. This field has been deprecated and replaced by the parent field.
 *
 * @property {string} parent
 *   The parent (project and location) where the operations will be listed.
 *   Specified in the format 'projects/* /locations/*'.
 *   Location "-" matches all zones and all regions.
 *
 * @typedef ListOperationsRequest
 * @memberof google.container.v1
 * @see [google.container.v1.ListOperationsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const ListOperationsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * CancelOperationRequest cancels a single operation.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} operationId
 *   Required. Deprecated. The server-assigned `name` of the operation.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} name
 *   The name (project, location, operation id) of the operation to cancel.
 *   Specified in the format 'projects/* /locations/* /operations/*'.
 *
 * @typedef CancelOperationRequest
 * @memberof google.container.v1
 * @see [google.container.v1.CancelOperationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const CancelOperationRequest = {
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
const ListOperationsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Gets the current Kubernetes Engine service configuration.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) to return operations for.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} name
 *   The name (project and location) of the server config to get,
 *   specified in the format 'projects/* /locations/*'.
 *
 * @typedef GetServerConfigRequest
 * @memberof google.container.v1
 * @see [google.container.v1.GetServerConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const GetServerConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Kubernetes Engine service configuration.
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
const ServerConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * CreateNodePoolRequest creates a node pool for a cluster.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *   This field has been deprecated and replaced by the parent field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the parent field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster.
 *   This field has been deprecated and replaced by the parent field.
 *
 * @property {Object} nodePool
 *   Required. The node pool to create.
 *
 *   This object should have the same structure as [NodePool]{@link google.container.v1.NodePool}
 *
 * @property {string} parent
 *   The parent (project, location, cluster id) where the node pool will be
 *   created. Specified in the format
 *   'projects/* /locations/* /clusters/*'.
 *
 * @typedef CreateNodePoolRequest
 * @memberof google.container.v1
 * @see [google.container.v1.CreateNodePoolRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const CreateNodePoolRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * DeleteNodePoolRequest deletes a node pool for a cluster.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} nodePoolId
 *   Required. Deprecated. The name of the node pool to delete.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} name
 *   The name (project, location, cluster, node pool id) of the node pool to
 *   delete. Specified in the format
 *   'projects/* /locations/* /clusters/* /nodePools/*'.
 *
 * @typedef DeleteNodePoolRequest
 * @memberof google.container.v1
 * @see [google.container.v1.DeleteNodePoolRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const DeleteNodePoolRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * ListNodePoolsRequest lists the node pool(s) for a cluster.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *   This field has been deprecated and replaced by the parent field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the parent field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster.
 *   This field has been deprecated and replaced by the parent field.
 *
 * @property {string} parent
 *   The parent (project, location, cluster id) where the node pools will be
 *   listed. Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef ListNodePoolsRequest
 * @memberof google.container.v1
 * @see [google.container.v1.ListNodePoolsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const ListNodePoolsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * GetNodePoolRequest retrieves a node pool for a cluster.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} nodePoolId
 *   Required. Deprecated. The name of the node pool.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} name
 *   The name (project, location, cluster, node pool id) of the node pool to
 *   get. Specified in the format
 *   'projects/* /locations/* /clusters/* /nodePools/*'.
 *
 * @typedef GetNodePoolRequest
 * @memberof google.container.v1
 * @see [google.container.v1.GetNodePoolRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const GetNodePoolRequest = {
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
 *   Compute Engine [resource quota](https://cloud.google.com/compute/docs/resource-quotas)
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
 * @property {Object} maxPodsConstraint
 *   The constraint on the maximum number of pods that can be run
 *   simultaneously on a node in the node pool.
 *
 *   This object should have the same structure as [MaxPodsConstraint]{@link google.container.v1.MaxPodsConstraint}
 *
 * @property {Object[]} conditions
 *   Which conditions caused the current node pool state.
 *
 *   This object should have the same structure as [StatusCondition]{@link google.container.v1.StatusCondition}
 *
 * @property {number} podIpv4CidrSize
 *   [Output only] The pod CIDR block size per node in this node pool.
 *
 * @typedef NodePool
 * @memberof google.container.v1
 * @see [google.container.v1.NodePool definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const NodePool = {
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
const NodeManagement = {
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
const AutoUpgradeOptions = {
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
 * @property {string} resourceVersion
 *   A hash identifying the version of this policy, so that updates to fields of
 *   the policy won't accidentally undo intermediate changes (and so that users
 *   of the API unaware of some fields won't accidentally remove other fields).
 *   Make a <code>get()</code> request to the cluster to get the current
 *   resource version and include it with requests to set the policy.
 *
 * @typedef MaintenancePolicy
 * @memberof google.container.v1
 * @see [google.container.v1.MaintenancePolicy definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const MaintenancePolicy = {
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
 * @property {Object} recurringWindow
 *   RecurringWindow specifies some number of recurring time periods for
 *   maintenance to occur. The time windows may be overlapping. If no
 *   maintenance windows are set, maintenance can occur at any time.
 *
 *   This object should have the same structure as [RecurringTimeWindow]{@link google.container.v1.RecurringTimeWindow}
 *
 * @property {Object.<string, Object>} maintenanceExclusions
 *   Exceptions to maintenance window. Non-emergency maintenance should not
 *   occur in these windows.
 *
 * @typedef MaintenanceWindow
 * @memberof google.container.v1
 * @see [google.container.v1.MaintenanceWindow definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const MaintenanceWindow = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents an arbitrary window of time.
 *
 * @property {Object} startTime
 *   The time that the window first starts.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   The time that the window ends. The end time should take place after the
 *   start time.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef TimeWindow
 * @memberof google.container.v1
 * @see [google.container.v1.TimeWindow definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const TimeWindow = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents an arbitrary window of time that recurs.
 *
 * @property {Object} window
 *   The window of the first recurrence.
 *
 *   This object should have the same structure as [TimeWindow]{@link google.container.v1.TimeWindow}
 *
 * @property {string} recurrence
 *   An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how
 *   this window reccurs. They go on for the span of time between the start and
 *   end time.
 *
 *   For example, to have something repeat every weekday, you'd use:
 *     <code>FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR</code>
 *   To repeat some window daily (equivalent to the DailyMaintenanceWindow):
 *     <code>FREQ=DAILY</code>
 *   For the first weekend of every month:
 *     <code>FREQ=MONTHLY;BYSETPOS=1;BYDAY=SA,SU</code>
 *   This specifies how frequently the window starts. Eg, if you wanted to have
 *   a 9-5 UTC-4 window every weekday, you'd use something like:
 *   <code>
 *     start time = 2019-01-01T09:00:00-0400
 *     end time = 2019-01-01T17:00:00-0400
 *     recurrence = FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR
 *   </code>
 *   Windows can span multiple days. Eg, to make the window encompass every
 *   weekend from midnight Saturday till the last minute of Sunday UTC:
 *   <code>
 *     start time = 2019-01-05T00:00:00Z
 *     end time = 2019-01-07T23:59:00Z
 *     recurrence = FREQ=WEEKLY;BYDAY=SA
 *   </code>
 *   Note the start and end time's specific dates are largely arbitrary except
 *   to specify duration of the window and when it first starts.
 *   The FREQ values of HOURLY, MINUTELY, and SECONDLY are not supported.
 *
 * @typedef RecurringTimeWindow
 * @memberof google.container.v1
 * @see [google.container.v1.RecurringTimeWindow definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const RecurringTimeWindow = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Time window specified for daily maintenance operations.
 *
 * @property {string} startTime
 *   Time within the maintenance window to start the maintenance operations.
 *   Time format should be in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt)
 *   format "HH:MM", where HH : [00-23] and MM : [00-59] GMT.
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
const DailyMaintenanceWindow = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetNodePoolManagementRequest sets the node management properties of a node
 * pool.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to update.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} nodePoolId
 *   Required. Deprecated. The name of the node pool to update.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {Object} management
 *   Required. NodeManagement configuration for the node pool.
 *
 *   This object should have the same structure as [NodeManagement]{@link google.container.v1.NodeManagement}
 *
 * @property {string} name
 *   The name (project, location, cluster, node pool id) of the node pool to set
 *   management properties. Specified in the format
 *   'projects/* /locations/* /clusters/* /nodePools/*'.
 *
 * @typedef SetNodePoolManagementRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetNodePoolManagementRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const SetNodePoolManagementRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetNodePoolSizeRequest sets the size a node
 * pool.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to update.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} nodePoolId
 *   Required. Deprecated. The name of the node pool to update.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {number} nodeCount
 *   Required. The desired node count for the pool.
 *
 * @property {string} name
 *   The name (project, location, cluster, node pool id) of the node pool to set
 *   size.
 *   Specified in the format 'projects/* /locations/* /clusters/* /nodePools/*'.
 *
 * @typedef SetNodePoolSizeRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetNodePoolSizeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const SetNodePoolSizeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed
 * NodePool upgrade. This will be an no-op if the last upgrade successfully
 * completed.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to rollback.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} nodePoolId
 *   Required. Deprecated. The name of the node pool to rollback.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} name
 *   The name (project, location, cluster, node pool id) of the node poll to
 *   rollback upgrade.
 *   Specified in the format 'projects/* /locations/* /clusters/* /nodePools/*'.
 *
 * @typedef RollbackNodePoolUpgradeRequest
 * @memberof google.container.v1
 * @see [google.container.v1.RollbackNodePoolUpgradeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const RollbackNodePoolUpgradeRequest = {
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
const ListNodePoolsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * ClusterAutoscaling contains global, per-cluster information
 * required by Cluster Autoscaler to automatically adjust
 * the size of the cluster and create/delete
 * node pools based on the current needs.
 *
 * @property {boolean} enableNodeAutoprovisioning
 *   Enables automatic node pool creation and deletion.
 *
 * @property {Object[]} resourceLimits
 *   Contains global constraints regarding minimum and maximum
 *   amount of resources in the cluster.
 *
 *   This object should have the same structure as [ResourceLimit]{@link google.container.v1.ResourceLimit}
 *
 * @property {Object} autoprovisioningNodePoolDefaults
 *   AutoprovisioningNodePoolDefaults contains defaults for a node pool
 *   created by NAP.
 *
 *   This object should have the same structure as [AutoprovisioningNodePoolDefaults]{@link google.container.v1.AutoprovisioningNodePoolDefaults}
 *
 * @property {string[]} autoprovisioningLocations
 *   The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available)
 *   in which the NodePool's nodes can be created by NAP.
 *
 * @typedef ClusterAutoscaling
 * @memberof google.container.v1
 * @see [google.container.v1.ClusterAutoscaling definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const ClusterAutoscaling = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * AutoprovisioningNodePoolDefaults contains defaults for a node pool created
 * by NAP.
 *
 * @property {string[]} oauthScopes
 *   Scopes that are used by NAP when creating node pools. If oauth_scopes are
 *   specified, service_account should be empty.
 *
 * @property {string} serviceAccount
 *   The Google Cloud Platform Service Account to be used by the node VMs. If
 *   service_account is specified, scopes should be empty.
 *
 * @typedef AutoprovisioningNodePoolDefaults
 * @memberof google.container.v1
 * @see [google.container.v1.AutoprovisioningNodePoolDefaults definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const AutoprovisioningNodePoolDefaults = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains information about amount of some resource in the cluster.
 * For memory, value should be in GB.
 *
 * @property {string} resourceType
 *   Resource name "cpu", "memory" or gpu-specific string.
 *
 * @property {number} minimum
 *   Minimum amount of the resource in the cluster.
 *
 * @property {number} maximum
 *   Maximum amount of the resource in the cluster.
 *
 * @typedef ResourceLimit
 * @memberof google.container.v1
 * @see [google.container.v1.ResourceLimit definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const ResourceLimit = {
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
 * @property {boolean} autoprovisioned
 *   Can this node pool be deleted automatically.
 *
 * @typedef NodePoolAutoscaling
 * @memberof google.container.v1
 * @see [google.container.v1.NodePoolAutoscaling definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const NodePoolAutoscaling = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetLabelsRequest sets the Google Cloud Platform labels on a Google Container
 * Engine cluster, which will in turn set them for Google Compute Engine
 * resources used by that cluster
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {Object.<string, string>} resourceLabels
 *   Required. The labels to set for that cluster.
 *
 * @property {string} labelFingerprint
 *   Required. The fingerprint of the previous set of labels for this resource,
 *   used to detect conflicts. The fingerprint is initially generated by
 *   Kubernetes Engine and changes after every request to modify or update
 *   labels. You must always provide an up-to-date fingerprint hash when
 *   updating or changing labels. Make a <code>get()</code> request to the
 *   resource to get the latest fingerprint.
 *
 * @property {string} name
 *   The name (project, location, cluster id) of the cluster to set labels.
 *   Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef SetLabelsRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetLabelsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const SetLabelsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for
 * a cluster.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster to update.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {boolean} enabled
 *   Required. Whether ABAC authorization will be enabled in the cluster.
 *
 * @property {string} name
 *   The name (project, location, cluster id) of the cluster to set legacy abac.
 *   Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef SetLegacyAbacRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetLegacyAbacRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const SetLegacyAbacRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * StartIPRotationRequest creates a new IP for the cluster and then performs
 * a node upgrade on each node pool to point to the new IP.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} name
 *   The name (project, location, cluster id) of the cluster to start IP
 *   rotation. Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @property {boolean} rotateCredentials
 *   Whether to rotate credentials during IP rotation.
 *
 * @typedef StartIPRotationRequest
 * @memberof google.container.v1
 * @see [google.container.v1.StartIPRotationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const StartIPRotationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * CompleteIPRotationRequest moves the cluster master back into single-IP mode.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} name
 *   The name (project, location, cluster id) of the cluster to complete IP
 *   rotation. Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef CompleteIPRotationRequest
 * @memberof google.container.v1
 * @see [google.container.v1.CompleteIPRotationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const CompleteIPRotationRequest = {
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
 *   [here](https://cloud.google.com/compute/docs/gpus)
 *
 * @typedef AcceleratorConfig
 * @memberof google.container.v1
 * @see [google.container.v1.AcceleratorConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const AcceleratorConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetNetworkPolicyRequest enables/disables network policy for a cluster.
 *
 * @property {string} projectId
 *   Required. Deprecated. The Google Developers Console [project ID or project
 *   number](https://developers.google.com/console/help/new/#projectnumber).
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} zone
 *   Required. Deprecated. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {string} clusterId
 *   Required. Deprecated. The name of the cluster.
 *   This field has been deprecated and replaced by the name field.
 *
 * @property {Object} networkPolicy
 *   Required. Configuration options for the NetworkPolicy feature.
 *
 *   This object should have the same structure as [NetworkPolicy]{@link google.container.v1.NetworkPolicy}
 *
 * @property {string} name
 *   The name (project, location, cluster id) of the cluster to set networking
 *   policy. Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef SetNetworkPolicyRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetNetworkPolicyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const SetNetworkPolicyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * SetMaintenancePolicyRequest sets the maintenance policy for a cluster.
 *
 * @property {string} projectId
 *   Required. The Google Developers Console [project ID or project
 *   number](https://support.google.com/cloud/answer/6158840).
 *
 * @property {string} zone
 *   Required. The name of the Google Compute Engine
 *   [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster
 *   resides.
 *
 * @property {string} clusterId
 *   Required. The name of the cluster to update.
 *
 * @property {Object} maintenancePolicy
 *   Required. The maintenance policy to be set for the cluster. An empty field
 *   clears the existing maintenance policy.
 *
 *   This object should have the same structure as [MaintenancePolicy]{@link google.container.v1.MaintenancePolicy}
 *
 * @property {string} name
 *   The name (project, location, cluster id) of the cluster to set maintenance
 *   policy.
 *   Specified in the format 'projects/* /locations/* /clusters/*'.
 *
 * @typedef SetMaintenancePolicyRequest
 * @memberof google.container.v1
 * @see [google.container.v1.SetMaintenancePolicyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const SetMaintenancePolicyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * StatusCondition describes why a cluster or a node pool has a certain status
 * (e.g., ERROR or DEGRADED).
 *
 * @property {number} code
 *   Machine-friendly representation of the condition
 *
 *   The number should be among the values of [Code]{@link google.container.v1.Code}
 *
 * @property {string} message
 *   Human-friendly representation of the condition
 *
 * @typedef StatusCondition
 * @memberof google.container.v1
 * @see [google.container.v1.StatusCondition definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const StatusCondition = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Code for each condition
   *
   * @enum {number}
   * @memberof google.container.v1
   */
  Code: {

    /**
     * UNKNOWN indicates a generic condition.
     */
    UNKNOWN: 0,

    /**
     * GCE_STOCKOUT indicates a Google Compute Engine stockout.
     */
    GCE_STOCKOUT: 1,

    /**
     * GKE_SERVICE_ACCOUNT_DELETED indicates that the user deleted their robot
     * service account.
     */
    GKE_SERVICE_ACCOUNT_DELETED: 2,

    /**
     * Google Compute Engine quota was exceeded.
     */
    GCE_QUOTA_EXCEEDED: 3,

    /**
     * Cluster state was manually changed by an SRE due to a system logic error.
     */
    SET_BY_OPERATOR: 4,

    /**
     * Unable to perform an encrypt operation against the CloudKMS key used for
     * etcd level encryption.
     * More codes TBA
     */
    CLOUD_KMS_KEY_ERROR: 7
  }
};

/**
 * NetworkConfig reports the relative names of network & subnetwork.
 *
 * @property {string} network
 *   Output only. The relative name of the Google Compute Engine
 *   network(/compute/docs/networks-and-firewalls#networks) to which
 *   the cluster is connected.
 *   Example: projects/my-project/global/networks/my-network
 *
 * @property {string} subnetwork
 *   Output only. The relative name of the Google Compute Engine
 *   [subnetwork](https://cloud.google.com/compute/docs/vpc) to which the cluster is connected.
 *   Example: projects/my-project/regions/us-central1/subnetworks/my-subnet
 *
 * @property {boolean} enableIntraNodeVisibility
 *   Whether Intra-node visibility is enabled for this cluster.
 *   This makes same node pod to pod traffic visible for VPC network.
 *
 * @typedef NetworkConfig
 * @memberof google.container.v1
 * @see [google.container.v1.NetworkConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const NetworkConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * IntraNodeVisibilityConfig contains the desired config of the intra-node
 * visibility on this cluster.
 *
 * @property {boolean} enabled
 *   Enables intra node visibility for this cluster.
 *
 * @typedef IntraNodeVisibilityConfig
 * @memberof google.container.v1
 * @see [google.container.v1.IntraNodeVisibilityConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const IntraNodeVisibilityConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Constraints applied to pods.
 *
 * @property {number} maxPodsPerNode
 *   Constraint enforced on the max num of pods per node.
 *
 * @typedef MaxPodsConstraint
 * @memberof google.container.v1
 * @see [google.container.v1.MaxPodsConstraint definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const MaxPodsConstraint = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration of etcd encryption.
 *
 * @property {number} state
 *   Denotes the state of etcd encryption.
 *
 *   The number should be among the values of [State]{@link google.container.v1.State}
 *
 * @property {string} keyName
 *   Name of CloudKMS key to use for the encryption of secrets in etcd.
 *   Ex. projects/my-project/locations/global/keyRings/my-ring/cryptoKeys/my-key
 *
 * @typedef DatabaseEncryption
 * @memberof google.container.v1
 * @see [google.container.v1.DatabaseEncryption definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const DatabaseEncryption = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * State of etcd encryption.
   *
   * @enum {number}
   * @memberof google.container.v1
   */
  State: {

    /**
     * Should never be set
     */
    UNKNOWN: 0,

    /**
     * Secrets in etcd are encrypted.
     */
    ENCRYPTED: 1,

    /**
     * Secrets in etcd are stored in plain text (at etcd level) - this is
     * unrelated to GCE level full disk encryption.
     */
    DECRYPTED: 2
  }
};

/**
 * ListUsableSubnetworksRequest requests the list of usable subnetworks
 * available to a user for creating clusters.
 *
 * @property {string} parent
 *   The parent project where subnetworks are usable.
 *   Specified in the format 'projects/*'.
 *
 * @property {string} filter
 *   Filtering currently only supports equality on the networkProjectId and must
 *   be in the form: "networkProjectId=[PROJECTID]", where `networkProjectId`
 *   is the project which owns the listed subnetworks. This defaults to the
 *   parent project ID.
 *
 * @property {number} pageSize
 *   The max number of results per page that should be returned. If the number
 *   of available results is larger than `page_size`, a `next_page_token` is
 *   returned which can be used to get the next page of results in subsequent
 *   requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 *
 * @property {string} pageToken
 *   Specifies a page token to use. Set this to the nextPageToken returned by
 *   previous list requests to get the next page of results.
 *
 * @typedef ListUsableSubnetworksRequest
 * @memberof google.container.v1
 * @see [google.container.v1.ListUsableSubnetworksRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const ListUsableSubnetworksRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * ListUsableSubnetworksResponse is the response of
 * ListUsableSubnetworksRequest.
 *
 * @property {Object[]} subnetworks
 *   A list of usable subnetworks in the specified network project.
 *
 *   This object should have the same structure as [UsableSubnetwork]{@link google.container.v1.UsableSubnetwork}
 *
 * @property {string} nextPageToken
 *   This token allows you to get the next page of results for list requests.
 *   If the number of results is larger than `page_size`, use the
 *   `next_page_token` as a value for the query parameter `page_token` in the
 *   next request. The value will become empty when there are no more pages.
 *
 * @typedef ListUsableSubnetworksResponse
 * @memberof google.container.v1
 * @see [google.container.v1.ListUsableSubnetworksResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const ListUsableSubnetworksResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Secondary IP range of a usable subnetwork.
 *
 * @property {string} rangeName
 *   The name associated with this subnetwork secondary range, used when adding
 *   an alias IP range to a VM instance.
 *
 * @property {string} ipCidrRange
 *   The range of IP addresses belonging to this subnetwork secondary range.
 *
 * @property {number} status
 *   This field is to determine the status of the secondary range programmably.
 *
 *   The number should be among the values of [Status]{@link google.container.v1.Status}
 *
 * @typedef UsableSubnetworkSecondaryRange
 * @memberof google.container.v1
 * @see [google.container.v1.UsableSubnetworkSecondaryRange definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const UsableSubnetworkSecondaryRange = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Status shows the current usage of a secondary IP range.
   *
   * @enum {number}
   * @memberof google.container.v1
   */
  Status: {

    /**
     * UNKNOWN is the zero value of the Status enum. It's not a valid status.
     */
    UNKNOWN: 0,

    /**
     * UNUSED denotes that this range is unclaimed by any cluster.
     */
    UNUSED: 1,

    /**
     * IN_USE_SERVICE denotes that this range is claimed by a cluster for
     * services. It cannot be used for other clusters.
     */
    IN_USE_SERVICE: 2,

    /**
     * IN_USE_SHAREABLE_POD denotes this range was created by the network admin
     * and is currently claimed by a cluster for pods. It can only be used by
     * other clusters as a pod range.
     */
    IN_USE_SHAREABLE_POD: 3,

    /**
     * IN_USE_MANAGED_POD denotes this range was created by GKE and is claimed
     * for pods. It cannot be used for other clusters.
     */
    IN_USE_MANAGED_POD: 4
  }
};

/**
 * UsableSubnetwork resource returns the subnetwork name, its associated network
 * and the primary CIDR range.
 *
 * @property {string} subnetwork
 *   Subnetwork Name.
 *   Example: projects/my-project/regions/us-central1/subnetworks/my-subnet
 *
 * @property {string} network
 *   Network Name.
 *   Example: projects/my-project/global/networks/my-network
 *
 * @property {string} ipCidrRange
 *   The range of internal addresses that are owned by this subnetwork.
 *
 * @property {Object[]} secondaryIpRanges
 *   Secondary IP ranges.
 *
 *   This object should have the same structure as [UsableSubnetworkSecondaryRange]{@link google.container.v1.UsableSubnetworkSecondaryRange}
 *
 * @property {string} statusMessage
 *   A human readable status message representing the reasons for cases where
 *   the caller cannot use the secondary ranges under the subnet. For example if
 *   the secondary_ip_ranges is empty due to a permission issue, an insufficient
 *   permission message will be given by status_message.
 *
 * @typedef UsableSubnetwork
 * @memberof google.container.v1
 * @see [google.container.v1.UsableSubnetwork definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const UsableSubnetwork = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration for exporting cluster resource usages.
 *
 * @property {Object} bigqueryDestination
 *   Configuration to use BigQuery as usage export destination.
 *
 *   This object should have the same structure as [BigQueryDestination]{@link google.container.v1.BigQueryDestination}
 *
 * @property {boolean} enableNetworkEgressMetering
 *   Whether to enable network egress metering for this cluster. If enabled, a
 *   daemonset will be created in the cluster to meter network egress traffic.
 *
 * @property {Object} consumptionMeteringConfig
 *   Configuration to enable resource consumption metering.
 *
 *   This object should have the same structure as [ConsumptionMeteringConfig]{@link google.container.v1.ConsumptionMeteringConfig}
 *
 * @typedef ResourceUsageExportConfig
 * @memberof google.container.v1
 * @see [google.container.v1.ResourceUsageExportConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const ResourceUsageExportConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Parameters for using BigQuery as the destination of resource usage export.
   *
   * @property {string} datasetId
   *   The ID of a BigQuery Dataset.
   *
   * @typedef BigQueryDestination
   * @memberof google.container.v1
   * @see [google.container.v1.ResourceUsageExportConfig.BigQueryDestination definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
   */
  BigQueryDestination: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Parameters for controlling consumption metering.
   *
   * @property {boolean} enabled
   *   Whether to enable consumption metering for this cluster. If enabled, a
   *   second BigQuery table will be created to hold resource consumption
   *   records.
   *
   * @typedef ConsumptionMeteringConfig
   * @memberof google.container.v1
   * @see [google.container.v1.ResourceUsageExportConfig.ConsumptionMeteringConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
   */
  ConsumptionMeteringConfig: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * VerticalPodAutoscaling contains global, per-cluster information
 * required by Vertical Pod Autoscaler to automatically adjust
 * the resources of pods controlled by it.
 *
 * @property {boolean} enabled
 *   Enables vertical pod autoscaling.
 *
 * @typedef VerticalPodAutoscaling
 * @memberof google.container.v1
 * @see [google.container.v1.VerticalPodAutoscaling definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/container/v1/cluster_service.proto}
 */
const VerticalPodAutoscaling = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};