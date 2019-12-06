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
 * Export asset request.
 *
 * @property {string} parent
 *   Required. The relative name of the root asset. This can only be an
 *   organization number (such as "organizations/123"), a project ID (such as
 *   "projects/my-project-id"), or a project number (such as "projects/12345"),
 *   or a folder number (such as "folders/123").
 *
 * @property {Object} readTime
 *   Timestamp to take an asset snapshot. This can only be set to a timestamp
 *   between 2018-10-02 UTC (inclusive) and the current time. If not specified,
 *   the current time will be used. Due to delays in resource data collection
 *   and indexing, there is a volatile window during which running the same
 *   query may get different results.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string[]} assetTypes
 *   A list of asset types of which to take a snapshot for. For example:
 *   "compute.googleapis.com/Disk". If specified, only matching assets will be
 *   returned. See [Introduction to Cloud Asset
 *   Inventory](https://cloud.google.com/asset-inventory/docs/overview)
 *   for all supported asset types.
 *
 * @property {number} contentType
 *   Asset content type. If not specified, no content but the asset name will be
 *   returned.
 *
 *   The number should be among the values of [ContentType]{@link google.cloud.asset.v1.ContentType}
 *
 * @property {Object} outputConfig
 *   Required. Output configuration indicating where the results will be output
 *   to. All results will be in newline delimited JSON format.
 *
 *   This object should have the same structure as [OutputConfig]{@link google.cloud.asset.v1.OutputConfig}
 *
 * @typedef ExportAssetsRequest
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.ExportAssetsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const ExportAssetsRequest = {
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
 *   This object should have the same structure as [OutputConfig]{@link google.cloud.asset.v1.OutputConfig}
 *
 * @typedef ExportAssetsResponse
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.ExportAssetsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const ExportAssetsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Batch get assets history request.
 *
 * @property {string} parent
 *   Required. The relative name of the root asset. It can only be an
 *   organization number (such as "organizations/123"), a project ID (such as
 *   "projects/my-project-id")", or a project number (such as "projects/12345").
 *
 * @property {string[]} assetNames
 *   A list of the full names of the assets. For example:
 *   `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.
 *   See [Resource
 *   Names](https://cloud.google.com/apis/design/resource_names#full_resource_name)
 *   and [Resource Name
 *   Format](https://cloud.google.com/asset-inventory/docs/resource-name-format)
 *   for more info.
 *
 *   The request becomes a no-op if the asset name list is empty, and the max
 *   size of the asset name list is 100 in one request.
 *
 * @property {number} contentType
 *   Optional. The content type.
 *
 *   The number should be among the values of [ContentType]{@link google.cloud.asset.v1.ContentType}
 *
 * @property {Object} readTimeWindow
 *   Optional. The time window for the asset history. Both start_time and
 *   end_time are optional and if set, it must be after 2018-10-02 UTC. If
 *   end_time is not set, it is default to current timestamp. If start_time is
 *   not set, the snapshot of the assets at end_time will be returned. The
 *   returned results contain all temporal assets whose time window overlap with
 *   read_time_window.
 *
 *   This object should have the same structure as [TimeWindow]{@link google.cloud.asset.v1.TimeWindow}
 *
 * @typedef BatchGetAssetsHistoryRequest
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.BatchGetAssetsHistoryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const BatchGetAssetsHistoryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Batch get assets history response.
 *
 * @property {Object[]} assets
 *   A list of assets with valid time windows.
 *
 *   This object should have the same structure as [TemporalAsset]{@link google.cloud.asset.v1.TemporalAsset}
 *
 * @typedef BatchGetAssetsHistoryResponse
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.BatchGetAssetsHistoryResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const BatchGetAssetsHistoryResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Create asset feed request.
 *
 * @property {string} parent
 *   Required. The name of the project/folder/organization where this feed
 *   should be created in. It can only be an organization number (such as
 *   "organizations/123"), a folder number (such as "folders/123"), a project ID
 *   (such as "projects/my-project-id")", or a project number (such as
 *   "projects/12345").
 *
 * @property {string} feedId
 *   Required. This is the client-assigned asset feed identifier and it needs to
 *   be unique under a specific parent project/folder/organization.
 *
 * @property {Object} feed
 *   Required. The feed details. The field `name` must be empty and it will be generated
 *   in the format of:
 *   projects/project_number/feeds/feed_id
 *   folders/folder_number/feeds/feed_id
 *   organizations/organization_number/feeds/feed_id
 *
 *   This object should have the same structure as [Feed]{@link google.cloud.asset.v1.Feed}
 *
 * @typedef CreateFeedRequest
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.CreateFeedRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const CreateFeedRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Get asset feed request.
 *
 * @property {string} name
 *   Required. The name of the Feed and it must be in the format of:
 *   projects/project_number/feeds/feed_id
 *   folders/folder_number/feeds/feed_id
 *   organizations/organization_number/feeds/feed_id
 *
 * @typedef GetFeedRequest
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.GetFeedRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const GetFeedRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * List asset feeds request.
 *
 * @property {string} parent
 *   Required. The parent project/folder/organization whose feeds are to be
 *   listed. It can only be using project/folder/organization number (such as
 *   "folders/12345")", or a project ID (such as "projects/my-project-id").
 *
 * @typedef ListFeedsRequest
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.ListFeedsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const ListFeedsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {Object[]} feeds
 *   A list of feeds.
 *
 *   This object should have the same structure as [Feed]{@link google.cloud.asset.v1.Feed}
 *
 * @typedef ListFeedsResponse
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.ListFeedsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const ListFeedsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Update asset feed request.
 *
 * @property {Object} feed
 *   Required. The new values of feed details. It must match an existing feed and the
 *   field `name` must be in the format of:
 *   projects/project_number/feeds/feed_id or
 *   folders/folder_number/feeds/feed_id or
 *   organizations/organization_number/feeds/feed_id.
 *
 *   This object should have the same structure as [Feed]{@link google.cloud.asset.v1.Feed}
 *
 * @property {Object} updateMask
 *   Required. Only updates the `feed` fields indicated by this mask.
 *   The field mask must not be empty, and it must not contain fields that
 *   are immutable or only set by the server.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateFeedRequest
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.UpdateFeedRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const UpdateFeedRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {string} name
 *   Required. The name of the feed and it must be in the format of:
 *   projects/project_number/feeds/feed_id
 *   folders/folder_number/feeds/feed_id
 *   organizations/organization_number/feeds/feed_id
 *
 * @typedef DeleteFeedRequest
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.DeleteFeedRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const DeleteFeedRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Output configuration for export assets destination.
 *
 * @property {Object} gcsDestination
 *   Destination on Cloud Storage.
 *
 *   This object should have the same structure as [GcsDestination]{@link google.cloud.asset.v1.GcsDestination}
 *
 * @property {Object} bigqueryDestination
 *   Destination on BigQuery. The output table stores the fields in asset
 *   proto as columns in BigQuery. The resource/iam_policy field is converted
 *   to a record with each field to a column, except metadata to a single JSON
 *   string.
 *
 *   This object should have the same structure as [BigQueryDestination]{@link google.cloud.asset.v1.BigQueryDestination}
 *
 * @typedef OutputConfig
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.OutputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const OutputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A Cloud Storage location.
 *
 * @property {string} uri
 *   The uri of the Cloud Storage object. It's the same uri that is used by
 *   gsutil. For example: "gs://bucket_name/object_name". See [Viewing and
 *   Editing Object
 *   Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata)
 *   for more information.
 *
 * @property {string} uriPrefix
 *   The uri prefix of all generated Cloud Storage objects. For example:
 *   "gs://bucket_name/object_name_prefix". Each object uri is in format:
 *   "gs://bucket_name/object_name_prefix/<asset type>/<shard number> and only
 *   contains assets for that type. <shard number> starts from 0. For example:
 *   "gs://bucket_name/object_name_prefix/compute.googleapis.com/Disk/0" is
 *   the first shard of output objects containing all
 *   compute.googleapis.com/Disk assets. An INVALID_ARGUMENT error will be
 *   returned if file with the same name "gs://bucket_name/object_name_prefix"
 *   already exists.
 *
 * @typedef GcsDestination
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.GcsDestination definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const GcsDestination = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A BigQuery destination.
 *
 * @property {string} dataset
 *   Required. The BigQuery dataset in format
 *   "projects/projectId/datasets/datasetId", to which the snapshot result
 *   should be exported. If this dataset does not exist, the export call returns
 *   an error.
 *
 * @property {string} table
 *   Required. The BigQuery table to which the snapshot result should be
 *   written. If this table does not exist, a new table with the given name
 *   will be created.
 *
 * @property {boolean} force
 *   If the destination table already exists and this flag is `TRUE`, the
 *   table will be overwritten by the contents of assets snapshot. If the flag
 *   is not set and the destination table already exists, the export call
 *   returns an error.
 *
 * @typedef BigQueryDestination
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.BigQueryDestination definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const BigQueryDestination = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A Cloud Pubsub destination.
 *
 * @property {string} topic
 *   The name of the Cloud Pub/Sub topic to publish to.
 *   For example: `projects/PROJECT_ID/topics/TOPIC_ID`.
 *
 * @typedef PubsubDestination
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.PubsubDestination definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const PubsubDestination = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Output configuration for asset feed destination.
 *
 * @property {Object} pubsubDestination
 *   Destination on Cloud Pubsub.
 *
 *   This object should have the same structure as [PubsubDestination]{@link google.cloud.asset.v1.PubsubDestination}
 *
 * @typedef FeedOutputConfig
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.FeedOutputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const FeedOutputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * An asset feed used to export asset updates to a destinations.
 * An asset feed filter controls what updates are exported.
 * The asset feed must be created within a project, organization, or
 * folder. Supported destinations are:
 * Cloud Pub/Sub topics.
 *
 * @property {string} name
 *   Required. The format will be
 *   projects/{project_number}/feeds/{client-assigned_feed_identifier} or
 *   folders/{folder_number}/feeds/{client-assigned_feed_identifier} or
 *   organizations/{organization_number}/feeds/{client-assigned_feed_identifier}
 *
 *   The client-assigned feed identifier must be unique within the parent
 *   project/folder/organization.
 *
 * @property {string[]} assetNames
 *   A list of the full names of the assets to receive updates. You must specify
 *   either or both of asset_names and asset_types. Only asset updates matching
 *   specified asset_names and asset_types are exported to the feed. For
 *   example:
 *   `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.
 *   See [Resource
 *   Names](https://cloud.google.com/apis/design/resource_names#full_resource_name)
 *   for more info.
 *
 * @property {string[]} assetTypes
 *   A list of types of the assets to receive updates. You must specify either
 *   or both of asset_names and asset_types. Only asset updates matching
 *   specified asset_names and asset_types are exported to the feed.
 *   For example:
 *   "compute.googleapis.com/Disk" See [Introduction to Cloud Asset
 *   Inventory](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview)
 *   for all supported asset types.
 *
 * @property {number} contentType
 *   Asset content type. If not specified, no content but the asset name and
 *   type will be returned.
 *
 *   The number should be among the values of [ContentType]{@link google.cloud.asset.v1.ContentType}
 *
 * @property {Object} feedOutputConfig
 *   Required. Feed output configuration defining where the asset updates are
 *   published to.
 *
 *   This object should have the same structure as [FeedOutputConfig]{@link google.cloud.asset.v1.FeedOutputConfig}
 *
 * @typedef Feed
 * @memberof google.cloud.asset.v1
 * @see [google.cloud.asset.v1.Feed definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/asset/v1/asset_service.proto}
 */
const Feed = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Asset content type.
 *
 * @enum {number}
 * @memberof google.cloud.asset.v1
 */
const ContentType = {

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
  IAM_POLICY: 2,

  /**
   * The Cloud Organization Policy set on an asset.
   */
  ORG_POLICY: 4,

  /**
   * The Cloud Access context mananger Policy set on an asset.
   */
  ACCESS_POLICY: 5
};