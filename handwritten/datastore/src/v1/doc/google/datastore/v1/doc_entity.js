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
 * A partition ID identifies a grouping of entities. The grouping is always
 * by project and namespace, however the namespace ID may be empty.
 *
 * A partition ID contains several dimensions:
 * project ID and namespace ID.
 *
 * Partition dimensions:
 *
 * - May be `""`.
 * - Must be valid UTF-8 bytes.
 * - Must have values that match regex `[A-Za-z\d\.\-_]{1,100}`
 * If the value of any dimension matches regex `__.*__`, the partition is
 * reserved/read-only.
 * A reserved/read-only partition ID is forbidden in certain documented
 * contexts.
 *
 * Foreign partition IDs (in which the project ID does
 * not match the context project ID ) are discouraged.
 * Reads and writes of foreign partition IDs may fail if the project is not in an active state.
 *
 * @property {string} projectId
 *   The ID of the project to which the entities belong.
 *
 * @property {string} namespaceId
 *   If not empty, the ID of the namespace to which the entities belong.
 *
 * @typedef PartitionId
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.PartitionId definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/entity.proto}
 */
var PartitionId = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A unique identifier for an entity.
 * If a key's partition ID or any of its path kinds or names are
 * reserved/read-only, the key is reserved/read-only.
 * A reserved/read-only key is forbidden in certain documented contexts.
 *
 * @property {Object} partitionId
 *   Entities are partitioned into subsets, currently identified by a project
 *   ID and namespace ID.
 *   Queries are scoped to a single partition.
 *
 *   This object should have the same structure as [PartitionId]{@link google.datastore.v1.PartitionId}
 *
 * @property {Object[]} path
 *   The entity path.
 *   An entity path consists of one or more elements composed of a kind and a
 *   string or numerical identifier, which identify entities. The first
 *   element identifies a _root entity_, the second element identifies
 *   a _child_ of the root entity, the third element identifies a child of the
 *   second entity, and so forth. The entities identified by all prefixes of
 *   the path are called the element's _ancestors_.
 *
 *   An entity path is always fully complete: *all* of the entity's ancestors
 *   are required to be in the path along with the entity identifier itself.
 *   The only exception is that in some documented cases, the identifier in the
 *   last path element (for the entity) itself may be omitted. For example,
 *   the last path element of the key of `Mutation.insert` may have no
 *   identifier.
 *
 *   A path can never be empty, and a path can have at most 100 elements.
 *
 *   This object should have the same structure as [PathElement]{@link google.datastore.v1.PathElement}
 *
 * @typedef Key
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.Key definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/entity.proto}
 */
var Key = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * A (kind, ID/name) pair used to construct a key path.
   *
   * If either name or ID is set, the element is complete.
   * If neither is set, the element is incomplete.
   *
   * @property {string} kind
   *   The kind of the entity.
   *   A kind matching regex `__.*__` is reserved/read-only.
   *   A kind must not contain more than 1500 bytes when UTF-8 encoded.
   *   Cannot be `""`.
   *
   * @property {number} id
   *   The auto-allocated ID of the entity.
   *   Never equal to zero. Values less than zero are discouraged and may not
   *   be supported in the future.
   *
   * @property {string} name
   *   The name of the entity.
   *   A name matching regex `__.*__` is reserved/read-only.
   *   A name must not be more than 1500 bytes when UTF-8 encoded.
   *   Cannot be `""`.
   *
   * @typedef PathElement
   * @memberof google.datastore.v1
   * @see [google.datastore.v1.Key.PathElement definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/entity.proto}
   */
  PathElement: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * An array value.
 *
 * @property {Object[]} values
 *   Values in the array.
 *   The order of this array may not be preserved if it contains a mix of
 *   indexed and unindexed values.
 *
 *   This object should have the same structure as [Value]{@link google.datastore.v1.Value}
 *
 * @typedef ArrayValue
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.ArrayValue definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/entity.proto}
 */
var ArrayValue = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A message that can hold any of the supported value types and associated
 * metadata.
 *
 * @property {number} nullValue
 *   A null value.
 *
 *   The number should be among the values of [NullValue]{@link google.protobuf.NullValue}
 *
 * @property {boolean} booleanValue
 *   A boolean value.
 *
 * @property {number} integerValue
 *   An integer value.
 *
 * @property {number} doubleValue
 *   A double value.
 *
 * @property {Object} timestampValue
 *   A timestamp value.
 *   When stored in the Datastore, precise only to microseconds;
 *   any additional precision is rounded down.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} keyValue
 *   A key value.
 *
 *   This object should have the same structure as [Key]{@link google.datastore.v1.Key}
 *
 * @property {string} stringValue
 *   A UTF-8 encoded string value.
 *   When `exclude_from_indexes` is false (it is indexed) , may have at most 1500 bytes.
 *   Otherwise, may be set to at least 1,000,000 bytes.
 *
 * @property {string} blobValue
 *   A blob value.
 *   May have at most 1,000,000 bytes.
 *   When `exclude_from_indexes` is false, may have at most 1500 bytes.
 *   In JSON requests, must be base64-encoded.
 *
 * @property {Object} geoPointValue
 *   A geo point value representing a point on the surface of Earth.
 *
 *   This object should have the same structure as [LatLng]{@link google.type.LatLng}
 *
 * @property {Object} entityValue
 *   An entity value.
 *
 *   - May have no key.
 *   - May have a key with an incomplete key path.
 *   - May have a reserved/read-only key.
 *
 *   This object should have the same structure as [Entity]{@link google.datastore.v1.Entity}
 *
 * @property {Object} arrayValue
 *   An array value.
 *   Cannot contain another array value.
 *   A `Value` instance that sets field `array_value` must not set fields
 *   `meaning` or `exclude_from_indexes`.
 *
 *   This object should have the same structure as [ArrayValue]{@link google.datastore.v1.ArrayValue}
 *
 * @property {number} meaning
 *   The `meaning` field should only be populated for backwards compatibility.
 *
 * @property {boolean} excludeFromIndexes
 *   If the value should be excluded from all indexes including those defined
 *   explicitly.
 *
 * @typedef Value
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.Value definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/entity.proto}
 */
var Value = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A Datastore data object.
 *
 * An entity is limited to 1 megabyte when stored. That _roughly_
 * corresponds to a limit of 1 megabyte for the serialized form of this
 * message.
 *
 * @property {Object} key
 *   The entity's key.
 *
 *   An entity must have a key, unless otherwise documented (for example,
 *   an entity in `Value.entity_value` may have no key).
 *   An entity's kind is its key path's last element's kind,
 *   or null if it has no key.
 *
 *   This object should have the same structure as [Key]{@link google.datastore.v1.Key}
 *
 * @property {Object.<string, Object>} properties
 *   The entity's properties.
 *   The map's keys are property names.
 *   A property name matching regex `__.*__` is reserved.
 *   A reserved property name is forbidden in certain documented contexts.
 *   The name must not contain more than 500 characters.
 *   The name cannot be `""`.
 *
 * @typedef Entity
 * @memberof google.datastore.v1
 * @see [google.datastore.v1.Entity definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/datastore/v1/entity.proto}
 */
var Entity = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};