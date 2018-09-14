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
 * A Google Cloud Redis instance.
 *
 * @property {string} name
 *   Required. Unique name of the resource in this scope including project and
 *   location using the form:
 *       `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
 *
 *   Note: Redis instances are managed and addressed at regional level so
 *   location_id here refers to a GCP region; however, users may choose which
 *   specific zone (or collection of zones for cross-zone instances) an instance
 *   should be provisioned in. Refer to [location_id] and
 *   [alternative_location_id] fields for more details.
 *
 * @property {string} displayName
 *   An arbitrary and optional user-provided name for the instance.
 *
 * @property {Object.<string, string>} labels
 *   Resource labels to represent user provided metadata
 *
 * @property {string} locationId
 *   Optional. The zone where the instance will be provisioned. If not provided,
 *   the service will choose a zone for the instance. For STANDARD_HA tier,
 *   instances will be created across two zones for protection against zonal
 *   failures. If [alternative_location_id] is also provided, it must be
 *   different from [location_id].
 *
 * @property {string} alternativeLocationId
 *   Optional. Only applicable to STANDARD_HA tier which protects the instance
 *   against zonal failures by provisioning it across two zones. If provided, it
 *   must be a different zone from the one provided in [location_id].
 *
 * @property {string} redisVersion
 *   Optional. The version of Redis software.
 *   If not provided, latest supported version will be used. Updating the
 *   version will perform an upgrade/downgrade to the new version. Currently,
 *   the supported values are `REDIS_3_2` for Redis 3.2.
 *
 * @property {string} reservedIpRange
 *   Optional. The CIDR range of internal addresses that are reserved for this
 *   instance. If not provided, the service will choose an unused /29 block,
 *   for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be unique
 *   and non-overlapping with existing subnets in an authorized network.
 *
 * @property {string} host
 *   Output only. Hostname or IP address of the exposed Redis endpoint used by
 *   clients to connect to the service.
 *
 * @property {number} port
 *   Output only. The port number of the exposed Redis endpoint.
 *
 * @property {string} currentLocationId
 *   Output only. The current zone where the Redis endpoint is placed. For Basic
 *   Tier instances, this will always be the same as the [location_id]
 *   provided by the user at creation time. For Standard Tier instances,
 *   this can be either [location_id] or [alternative_location_id] and can
 *   change after a failover event.
 *
 * @property {Object} createTime
 *   Output only. The time the instance was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} state
 *   Output only. The current state of this instance.
 *
 *   The number should be among the values of [State]{@link google.cloud.redis.v1.State}
 *
 * @property {string} statusMessage
 *   Output only. Additional information about the current status of this
 *   instance, if available.
 *
 * @property {Object.<string, string>} redisConfigs
 *   Optional. Redis configuration parameters, according to
 *   http://redis.io/topics/config. Currently, the only supported parameters
 *   are:
 *
 *    *   maxmemory-policy
 *    *   notify-keyspace-events
 *
 * @property {number} tier
 *   Required. The service tier of the instance.
 *
 *   The number should be among the values of [Tier]{@link google.cloud.redis.v1.Tier}
 *
 * @property {number} memorySizeGb
 *   Required. Redis memory size in GiB.
 *
 * @property {string} authorizedNetwork
 *   Optional. The full name of the Google Compute Engine
 *   [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the
 *   instance is connected. If left unspecified, the `default` network
 *   will be used.
 *
 * @typedef Instance
 * @memberof google.cloud.redis.v1
 * @see [google.cloud.redis.v1.Instance definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/redis/v1/cloud_redis.proto}
 */
const Instance = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Represents the different states of a Redis instance.
   *
   * @enum {number}
   * @memberof google.cloud.redis.v1
   */
  State: {

    /**
     * Not set.
     */
    STATE_UNSPECIFIED: 0,

    /**
     * Redis instance is being created.
     */
    CREATING: 1,

    /**
     * Redis instance has been created and is fully usable.
     */
    READY: 2,

    /**
     * Redis instance configuration is being updated. Certain kinds of updates
     * may cause the instance to become unusable while the update is in
     * progress.
     */
    UPDATING: 3,

    /**
     * Redis instance is being deleted.
     */
    DELETING: 4,

    /**
     * Redis instance is being repaired and may be unusable. Details can be
     * found in the `status_message` field.
     */
    REPAIRING: 5,

    /**
     * Maintenance is being performed on this Redis instance.
     */
    MAINTENANCE: 6
  },

  /**
   * Available service tiers to choose from
   *
   * @enum {number}
   * @memberof google.cloud.redis.v1
   */
  Tier: {

    /**
     * Not set.
     */
    TIER_UNSPECIFIED: 0,

    /**
     * BASIC tier: standalone instance
     */
    BASIC: 1,

    /**
     * STANDARD_HA tier: highly available primary/replica instances
     */
    STANDARD_HA: 3
  }
};

/**
 * Request for ListInstances.
 *
 * @property {string} parent
 *   Required. The resource name of the instance location using the form:
 *       `projects/{project_id}/locations/{location_id}`
 *   where `location_id` refers to a GCP region
 *
 * @property {number} pageSize
 *   The maximum number of items to return.
 *
 *   If not specified, a default value of 1000 will be used by the service.
 *   Regardless of the page_size value, the response may include a partial list
 *   and a caller should only rely on response's
 *   next_page_token
 *   to determine if there are more instances left to be queried.
 *
 * @property {string} pageToken
 *   The next_page_token value returned from a previous List request,
 *   if any.
 *
 * @typedef ListInstancesRequest
 * @memberof google.cloud.redis.v1
 * @see [google.cloud.redis.v1.ListInstancesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/redis/v1/cloud_redis.proto}
 */
const ListInstancesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for ListInstances.
 *
 * @property {Object[]} instances
 *   A list of Redis instances in the project in the specified location,
 *   or across all locations.
 *
 *   If the `location_id` in the parent field of the request is "-", all regions
 *   available to the project are queried, and the results aggregated.
 *   If in such an aggregated query a location is unavailable, a dummy Redis
 *   entry is included in the response with the "name" field set to a value of
 *   the form projects/{project_id}/locations/{location_id}/instances/- and the
 *   "status" field set to ERROR and "status_message" field set to "location not
 *   available for ListInstances".
 *
 *   This object should have the same structure as [Instance]{@link google.cloud.redis.v1.Instance}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no more
 *   results in the list.
 *
 * @typedef ListInstancesResponse
 * @memberof google.cloud.redis.v1
 * @see [google.cloud.redis.v1.ListInstancesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/redis/v1/cloud_redis.proto}
 */
const ListInstancesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for GetInstance.
 *
 * @property {string} name
 *   Required. Redis instance resource name using the form:
 *       `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
 *   where `location_id` refers to a GCP region
 *
 * @typedef GetInstanceRequest
 * @memberof google.cloud.redis.v1
 * @see [google.cloud.redis.v1.GetInstanceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/redis/v1/cloud_redis.proto}
 */
const GetInstanceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for CreateInstance.
 *
 * @property {string} parent
 *   Required. The resource name of the instance location using the form:
 *       `projects/{project_id}/locations/{location_id}`
 *   where `location_id` refers to a GCP region
 *
 * @property {string} instanceId
 *   Required. The logical name of the Redis instance in the customer project
 *   with the following restrictions:
 *
 *   * Must contain only lowercase letters, numbers, and hyphens.
 *   * Must start with a letter.
 *   * Must be between 1-40 characters.
 *   * Must end with a number or a letter.
 *   * Must be unique within the customer project / location
 *
 * @property {Object} instance
 *   Required. A Redis [Instance] resource
 *
 *   This object should have the same structure as [Instance]{@link google.cloud.redis.v1.Instance}
 *
 * @typedef CreateInstanceRequest
 * @memberof google.cloud.redis.v1
 * @see [google.cloud.redis.v1.CreateInstanceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/redis/v1/cloud_redis.proto}
 */
const CreateInstanceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for UpdateInstance.
 *
 * @property {Object} updateMask
 *   Required. Mask of fields to update. At least one path must be supplied in
 *   this field. The elements of the repeated paths field may only include these
 *   fields from Instance:
 *
 *    *   `displayName`
 *    *   `labels`
 *    *   `memorySizeGb`
 *    *   `redisConfig`
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @property {Object} instance
 *   Required. Update description.
 *   Only fields specified in update_mask are updated.
 *
 *   This object should have the same structure as [Instance]{@link google.cloud.redis.v1.Instance}
 *
 * @typedef UpdateInstanceRequest
 * @memberof google.cloud.redis.v1
 * @see [google.cloud.redis.v1.UpdateInstanceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/redis/v1/cloud_redis.proto}
 */
const UpdateInstanceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for DeleteInstance.
 *
 * @property {string} name
 *   Required. Redis instance resource name using the form:
 *       `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
 *   where `location_id` refers to a GCP region
 *
 * @typedef DeleteInstanceRequest
 * @memberof google.cloud.redis.v1
 * @see [google.cloud.redis.v1.DeleteInstanceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/redis/v1/cloud_redis.proto}
 */
const DeleteInstanceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents the v1 metadata of the long-running operation.
 *
 * @property {Object} createTime
 *   Creation timestamp.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   End timestamp.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} target
 *   Operation target.
 *
 * @property {string} verb
 *   Operation verb.
 *
 * @property {string} statusDetail
 *   Operation status details.
 *
 * @property {boolean} cancelRequested
 *   Specifies if cancellation was requested for the operaiton.
 *
 * @property {string} apiVersion
 *   API version.
 *
 * @typedef OperationMetadata
 * @memberof google.cloud.redis.v1
 * @see [google.cloud.redis.v1.OperationMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/redis/v1/cloud_redis.proto}
 */
const OperationMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * This location metadata represents additional configuration options for a
 * given location where a Redis instance may be created. All fields are output
 * only. It is returned as content of the
 * `google.cloud.location.Location.metadata` field.
 *
 * @property {Object.<string, Object>} availableZones
 *   Output only. The set of available zones in the location. The map is keyed
 *   by the lowercase ID of each zone, as defined by GCE. These keys can be
 *   specified in `location_id` or `alternative_location_id` fields when
 *   creating a Redis instance.
 *
 * @typedef LocationMetadata
 * @memberof google.cloud.redis.v1
 * @see [google.cloud.redis.v1.LocationMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/redis/v1/cloud_redis.proto}
 */
const LocationMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Defines specific information for a particular zone. Currently empty and
 * reserved for future use only.
 * @typedef ZoneMetadata
 * @memberof google.cloud.redis.v1
 * @see [google.cloud.redis.v1.ZoneMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/redis/v1/cloud_redis.proto}
 */
const ZoneMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};