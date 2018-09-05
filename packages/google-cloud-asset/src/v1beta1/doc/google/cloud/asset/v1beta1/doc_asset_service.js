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
 * Export asset request.
 *
 * @property {string} parent
 *   Required. The relative name of the root asset. Can only be an organization
 *   number (such as "organizations/123"), or a project id (such as
 *   "projects/my-project-id") or a project number (such as "projects/12345").
 *
 * @property {Object} readTime
 *   Timestamp to take an asset snapshot. This can only be set to a timestamp in
 *   the past or of the current time. If not specified, the current time will be
 *   used. Due to delays in resource data collection and indexing, there is a
 *   volatile window during which running the same query may get different
 *   results.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string[]} assetTypes
 *   A list of asset types of which to take a snapshot for. Example:
 *   "google.compute.disk". If specified, only matching assets will be returned.
 *
 * @property {number} contentType
 *   Asset content type. If not specified, no content but the asset name will be
 *   returned.
 *
 *   The number should be among the values of [ContentType]{@link google.cloud.asset.v1beta1.ContentType}
 *
 * @property {Object} outputConfig
 *   Required. Output configuration indicating where the results will be output
 *   to. All results will be in newline delimited JSON format.
 *
 *   This object should have the same structure as [OutputConfig]{@link google.cloud.asset.v1beta1.OutputConfig}
 *
 * @typedef ExportAssetsRequest
 * @memberof google.cloud.asset.v1beta1
 * @see [google.cloud.asset.v1beta1.ExportAssetsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1beta1/asset_service.proto}
 */
var ExportAssetsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The export asset response. This message is returned by the
 * google.longrunning.Operations.GetOperation method in the returned
 * google.longrunning.Operation.response field.
 *
 * @property {Object} readTime
 *   Time the snapshot was taken.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} outputConfig
 *   Output configuration indicating where the results were output to.
 *   All results are in JSON format.
 *
 *   This object should have the same structure as [OutputConfig]{@link google.cloud.asset.v1beta1.OutputConfig}
 *
 * @typedef ExportAssetsResponse
 * @memberof google.cloud.asset.v1beta1
 * @see [google.cloud.asset.v1beta1.ExportAssetsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1beta1/asset_service.proto}
 */
var ExportAssetsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Batch get assets history request.
 *
 * @property {string} parent
 *   Required. The relative name of the root asset. It can only be an
 *   organization number (such as "organizations/123"), or a project id (such as
 *   "projects/my-project-id")"or a project number (such as "projects/12345").
 *
 * @property {string[]} assetNames
 *   A list of the full names of the assets. See:
 *   https://cloud.google.com/apis/design/resource_names#full_resource_name
 *   Example:
 *   "//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1".
 *
 *   The request becomes a no-op if the asset name list is empty, and the max
 *   size of the asset name list is 100 in one request.
 *
 * @property {number} contentType
 *   Required. The content type.
 *
 *   The number should be among the values of [ContentType]{@link google.cloud.asset.v1beta1.ContentType}
 *
 * @property {Object} readTimeWindow
 *   Required. The time window for the asset history. The start time is
 *   required. The returned results contain all temporal assets whose time
 *   window overlap with read_time_window.
 *
 *   This object should have the same structure as [TimeWindow]{@link google.cloud.asset.v1beta1.TimeWindow}
 *
 * @typedef BatchGetAssetsHistoryRequest
 * @memberof google.cloud.asset.v1beta1
 * @see [google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1beta1/asset_service.proto}
 */
var BatchGetAssetsHistoryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Batch get assets history response.
 *
 * @property {Object[]} assets
 *   A list of assets with valid time windows.
 *
 *   This object should have the same structure as [TemporalAsset]{@link google.cloud.asset.v1beta1.TemporalAsset}
 *
 * @typedef BatchGetAssetsHistoryResponse
 * @memberof google.cloud.asset.v1beta1
 * @see [google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1beta1/asset_service.proto}
 */
var BatchGetAssetsHistoryResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Output configuration for export assets destination.
 *
 * @property {Object} gcsDestination
 *   Destination on Google Cloud Storage (GCS).
 *
 *   This object should have the same structure as [GcsDestination]{@link google.cloud.asset.v1beta1.GcsDestination}
 *
 * @typedef OutputConfig
 * @memberof google.cloud.asset.v1beta1
 * @see [google.cloud.asset.v1beta1.OutputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1beta1/asset_service.proto}
 */
var OutputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A Google Cloud Storage (GCS) location.
 *
 * @property {string} uri
 *   The path of the GCS objects. It's the same path that is used by gsutil, for
 *   example: "gs://bucket_name/object_path". See:
 *   https://cloud.google.com/storage/docs/viewing-editing-metadata for more
 *   information.
 *
 * @typedef GcsDestination
 * @memberof google.cloud.asset.v1beta1
 * @see [google.cloud.asset.v1beta1.GcsDestination definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1beta1/asset_service.proto}
 */
var GcsDestination = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Asset content type.
 *
 * @enum {number}
 * @memberof google.cloud.asset.v1beta1
 */
var ContentType = {

  /**
   * Unspecified content type.
   */
  CONTENT_TYPE_UNSPECIFIED: 0,

  /**
   * Resource metadata.
   */
  RESOURCE: 1,

  /**
   * The actual IAM policy set on a resource.
   */
  IAM_POLICY: 2
};