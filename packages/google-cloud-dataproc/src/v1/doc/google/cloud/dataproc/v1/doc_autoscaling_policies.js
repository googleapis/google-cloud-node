// Copyright 2020 Google LLC
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
 * Describes an autoscaling policy for Dataproc cluster autoscaler.
 *
 * @property {string} id
 *   Required. The policy id.
 *
 *   The id must contain only letters (a-z, A-Z), numbers (0-9),
 *   underscores (_), and hyphens (-). Cannot begin or end with underscore
 *   or hyphen. Must consist of between 3 and 50 characters.
 *
 * @property {string} name
 *   Output only. The "resource name" of the autoscaling policy, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.autoscalingPolicies`, the resource name of the
 *     policy has the following format:
 *     `projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}`
 *
 *   * For `projects.locations.autoscalingPolicies`, the resource name of the
 *     policy has the following format:
 *     `projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}`
 *
 * @property {Object} basicAlgorithm
 *   This object should have the same structure as [BasicAutoscalingAlgorithm]{@link google.cloud.dataproc.v1.BasicAutoscalingAlgorithm}
 *
 * @property {Object} workerConfig
 *   Required. Describes how the autoscaler will operate for primary workers.
 *
 *   This object should have the same structure as [InstanceGroupAutoscalingPolicyConfig]{@link google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig}
 *
 * @property {Object} secondaryWorkerConfig
 *   Optional. Describes how the autoscaler will operate for secondary workers.
 *
 *   This object should have the same structure as [InstanceGroupAutoscalingPolicyConfig]{@link google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig}
 *
 * @typedef AutoscalingPolicy
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.AutoscalingPolicy definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/autoscaling_policies.proto}
 */
const AutoscalingPolicy = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Basic algorithm for autoscaling.
 *
 * @property {Object} yarnConfig
 *   Required. YARN autoscaling configuration.
 *
 *   This object should have the same structure as [BasicYarnAutoscalingConfig]{@link google.cloud.dataproc.v1.BasicYarnAutoscalingConfig}
 *
 * @property {Object} cooldownPeriod
 *   Optional. Duration between scaling events. A scaling period starts after
 *   the update operation from the previous event has completed.
 *
 *   Bounds: [2m, 1d]. Default: 2m.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @typedef BasicAutoscalingAlgorithm
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.BasicAutoscalingAlgorithm definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/autoscaling_policies.proto}
 */
const BasicAutoscalingAlgorithm = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Basic autoscaling configurations for YARN.
 *
 * @property {Object} gracefulDecommissionTimeout
 *   Required. Timeout for YARN graceful decommissioning of Node Managers.
 *   Specifies the duration to wait for jobs to complete before forcefully
 *   removing workers (and potentially interrupting jobs). Only applicable to
 *   downscaling operations.
 *
 *   Bounds: [0s, 1d].
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {number} scaleUpFactor
 *   Required. Fraction of average pending memory in the last cooldown period
 *   for which to add workers. A scale-up factor of 1.0 will result in scaling
 *   up so that there is no pending memory remaining after the update (more
 *   aggressive scaling). A scale-up factor closer to 0 will result in a smaller
 *   magnitude of scaling up (less aggressive scaling).
 *
 *   Bounds: [0.0, 1.0].
 *
 * @property {number} scaleDownFactor
 *   Required. Fraction of average pending memory in the last cooldown period
 *   for which to remove workers. A scale-down factor of 1 will result in
 *   scaling down so that there is no available memory remaining after the
 *   update (more aggressive scaling). A scale-down factor of 0 disables
 *   removing workers, which can be beneficial for autoscaling a single job.
 *
 *   Bounds: [0.0, 1.0].
 *
 * @property {number} scaleUpMinWorkerFraction
 *   Optional. Minimum scale-up threshold as a fraction of total cluster size
 *   before scaling occurs. For example, in a 20-worker cluster, a threshold of
 *   0.1 means the autoscaler must recommend at least a 2-worker scale-up for
 *   the cluster to scale. A threshold of 0 means the autoscaler will scale up
 *   on any recommended change.
 *
 *   Bounds: [0.0, 1.0]. Default: 0.0.
 *
 * @property {number} scaleDownMinWorkerFraction
 *   Optional. Minimum scale-down threshold as a fraction of total cluster size
 *   before scaling occurs. For example, in a 20-worker cluster, a threshold of
 *   0.1 means the autoscaler must recommend at least a 2 worker scale-down for
 *   the cluster to scale. A threshold of 0 means the autoscaler will scale down
 *   on any recommended change.
 *
 *   Bounds: [0.0, 1.0]. Default: 0.0.
 *
 * @typedef BasicYarnAutoscalingConfig
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.BasicYarnAutoscalingConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/autoscaling_policies.proto}
 */
const BasicYarnAutoscalingConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration for the size bounds of an instance group, including its
 * proportional size to other groups.
 *
 * @property {number} minInstances
 *   Optional. Minimum number of instances for this group.
 *
 *   Primary workers - Bounds: [2, max_instances]. Default: 2.
 *   Secondary workers - Bounds: [0, max_instances]. Default: 0.
 *
 * @property {number} maxInstances
 *   Required. Maximum number of instances for this group. Required for primary
 *   workers. Note that by default, clusters will not use secondary workers.
 *   Required for secondary workers if the minimum secondary instances is set.
 *
 *   Primary workers - Bounds: [min_instances, ).
 *   Secondary workers - Bounds: [min_instances, ). Default: 0.
 *
 * @property {number} weight
 *   Optional. Weight for the instance group, which is used to determine the
 *   fraction of total workers in the cluster from this instance group.
 *   For example, if primary workers have weight 2, and secondary workers have
 *   weight 1, the cluster will have approximately 2 primary workers for each
 *   secondary worker.
 *
 *   The cluster may not reach the specified balance if constrained
 *   by min/max bounds or other autoscaling settings. For example, if
 *   `max_instances` for secondary workers is 0, then only primary workers will
 *   be added. The cluster can also be out of balance when created.
 *
 *   If weight is not set on any instance group, the cluster will default to
 *   equal weight for all groups: the cluster will attempt to maintain an equal
 *   number of workers in each group within the configured size bounds for each
 *   group. If weight is set for one group only, the cluster will default to
 *   zero weight on the unset group. For example if weight is set only on
 *   primary workers, the cluster will use primary workers only and no
 *   secondary workers.
 *
 * @typedef InstanceGroupAutoscalingPolicyConfig
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.InstanceGroupAutoscalingPolicyConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/autoscaling_policies.proto}
 */
const InstanceGroupAutoscalingPolicyConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to create an autoscaling policy.
 *
 * @property {string} parent
 *   Required. The "resource name" of the region or location, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.autoscalingPolicies.create`, the resource name
 *     of the region has the following format:
 *     `projects/{project_id}/regions/{region}`
 *
 *   * For `projects.locations.autoscalingPolicies.create`, the resource name
 *     of the location has the following format:
 *     `projects/{project_id}/locations/{location}`
 *
 * @property {Object} policy
 *   The autoscaling policy to create.
 *
 *   This object should have the same structure as [AutoscalingPolicy]{@link google.cloud.dataproc.v1.AutoscalingPolicy}
 *
 * @typedef CreateAutoscalingPolicyRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.CreateAutoscalingPolicyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/autoscaling_policies.proto}
 */
const CreateAutoscalingPolicyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to fetch an autoscaling policy.
 *
 * @property {string} name
 *   Required. The "resource name" of the autoscaling policy, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.autoscalingPolicies.get`, the resource name
 *     of the policy has the following format:
 *     `projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}`
 *
 *   * For `projects.locations.autoscalingPolicies.get`, the resource name
 *     of the policy has the following format:
 *     `projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}`
 *
 * @typedef GetAutoscalingPolicyRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.GetAutoscalingPolicyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/autoscaling_policies.proto}
 */
const GetAutoscalingPolicyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to update an autoscaling policy.
 *
 * @property {Object} policy
 *   Required. The updated autoscaling policy.
 *
 *   This object should have the same structure as [AutoscalingPolicy]{@link google.cloud.dataproc.v1.AutoscalingPolicy}
 *
 * @typedef UpdateAutoscalingPolicyRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.UpdateAutoscalingPolicyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/autoscaling_policies.proto}
 */
const UpdateAutoscalingPolicyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to delete an autoscaling policy.
 *
 * Autoscaling policies in use by one or more clusters will not be deleted.
 *
 * @property {string} name
 *   Required. The "resource name" of the autoscaling policy, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.autoscalingPolicies.delete`, the resource name
 *     of the policy has the following format:
 *     `projects/{project_id}/regions/{region}/autoscalingPolicies/{policy_id}`
 *
 *   * For `projects.locations.autoscalingPolicies.delete`, the resource name
 *     of the policy has the following format:
 *     `projects/{project_id}/locations/{location}/autoscalingPolicies/{policy_id}`
 *
 * @typedef DeleteAutoscalingPolicyRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.DeleteAutoscalingPolicyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/autoscaling_policies.proto}
 */
const DeleteAutoscalingPolicyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to list autoscaling policies in a project.
 *
 * @property {string} parent
 *   Required. The "resource name" of the region or location, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.autoscalingPolicies.list`, the resource name
 *     of the region has the following format:
 *     `projects/{project_id}/regions/{region}`
 *
 *   * For `projects.locations.autoscalingPolicies.list`, the resource name
 *     of the location has the following format:
 *     `projects/{project_id}/locations/{location}`
 *
 * @property {number} pageSize
 *   Optional. The maximum number of results to return in each response.
 *   Must be less than or equal to 1000. Defaults to 100.
 *
 * @property {string} pageToken
 *   Optional. The page token, returned by a previous call, to request the
 *   next page of results.
 *
 * @typedef ListAutoscalingPoliciesRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ListAutoscalingPoliciesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/autoscaling_policies.proto}
 */
const ListAutoscalingPoliciesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A response to a request to list autoscaling policies in a project.
 *
 * @property {Object[]} policies
 *   Output only. Autoscaling policies list.
 *
 *   This object should have the same structure as [AutoscalingPolicy]{@link google.cloud.dataproc.v1.AutoscalingPolicy}
 *
 * @property {string} nextPageToken
 *   Output only. This token is included in the response if there are more
 *   results to fetch.
 *
 * @typedef ListAutoscalingPoliciesResponse
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ListAutoscalingPoliciesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/autoscaling_policies.proto}
 */
const ListAutoscalingPoliciesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};