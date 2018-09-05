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

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Temporal asset. In addition to the asset, the temporal asset includes the
 * status of the asset and valid from and to time of it.
 *
 * @property {Object} window
 *   The time window when the asset data and state was observed.
 *
 *   This object should have the same structure as [TimeWindow]{@link google.cloud.asset.v1beta1.TimeWindow}
 *
 * @property {boolean} deleted
 *   If the asset is deleted or not.
 *
 * @property {Object} asset
 *   Asset.
 *
 *   This object should have the same structure as [Asset]{@link google.cloud.asset.v1beta1.Asset}
 *
 * @typedef TemporalAsset
 * @memberof google.cloud.asset.v1beta1
 * @see [google.cloud.asset.v1beta1.TemporalAsset definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1beta1/assets.proto}
 */
var TemporalAsset = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A time window of [start_time, end_time).
 *
 * @property {Object} startTime
 *   Start time of the time window (inclusive).
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   End time of the time window (exclusive).
 *   Current timestamp if not specified.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef TimeWindow
 * @memberof google.cloud.asset.v1beta1
 * @see [google.cloud.asset.v1beta1.TimeWindow definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1beta1/assets.proto}
 */
var TimeWindow = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Cloud asset. This include all Google Cloud Platform resources, as well as
 * IAM policies and other non-GCP assets.
 *
 * @property {string} name
 *   The full name of the asset. See:
 *   https://cloud.google.com/apis/design/resource_names#full_resource_name
 *   Example:
 *   "//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1".
 *
 * @property {string} assetType
 *   Type of the asset. Example: "google.compute.disk".
 *
 * @property {Object} resource
 *   Representation of the resource.
 *
 *   This object should have the same structure as [Resource]{@link google.cloud.asset.v1beta1.Resource}
 *
 * @property {Object} iamPolicy
 *   Representation of the actual IAM policy set on a cloud resource. For each
 *   resource, there must be at most one IAM policy set on it.
 *
 *   This object should have the same structure as [Policy]{@link google.iam.v1.Policy}
 *
 * @typedef Asset
 * @memberof google.cloud.asset.v1beta1
 * @see [google.cloud.asset.v1beta1.Asset definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1beta1/assets.proto}
 */
var Asset = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Representation of a cloud resource.
 *
 * @property {string} version
 *   The API version. Example: "v1".
 *
 * @property {string} discoveryDocumentUri
 *   The URL of the discovery document containing the resource's JSON schema.
 *   Example:
 *   "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest".
 *   It will be left unspecified for resources without a discovery-based API,
 *   such as Cloud Bigtable.
 *
 * @property {string} discoveryName
 *   The JSON schema name listed in the discovery document.
 *   Example: "Project". It will be left unspecified for resources (such as
 *   Cloud Bigtable) without a discovery-based API.
 *
 * @property {string} resourceUrl
 *   The REST URL for accessing the resource. An HTTP GET operation using this
 *   URL returns the resource itself.
 *   Example:
 *   `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123`.
 *   It will be left unspecified for resources without a REST API.
 *
 * @property {string} parent
 *   The full name of the immediate parent of this resource. See:
 *   https://cloud.google.com/apis/design/resource_names#full_resource_name
 *
 *   For GCP assets, it is the parent resource defined in the IAM policy
 *   hierarchy: https://cloud.google.com/iam/docs/overview#policy_hierarchy.
 *   Example: "//cloudresourcemanager.googleapis.com/projects/my_project_123".
 *
 *   For third-party assets, it is up to the users to define.
 *
 * @property {Object} data
 *   The content of the resource, in which some sensitive fields are scrubbed
 *   away and may not be present.
 *
 *   This object should have the same structure as [Struct]{@link google.protobuf.Struct}
 *
 * @typedef Resource
 * @memberof google.cloud.asset.v1beta1
 * @see [google.cloud.asset.v1beta1.Resource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1beta1/assets.proto}
 */
var Resource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};