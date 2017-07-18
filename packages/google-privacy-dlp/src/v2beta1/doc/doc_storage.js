/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Note: this file is purely for documentation. Any contents are not expected
 * to be loaded as the JS file.
 */

/**
 * Type of information detected by the API.
 *
 * @property {string} name
 *   Name of the information type. For built-in info types, this is provided by
 *   the API call ListInfoTypes. For user-defined info types, this is
 *   provided by the user. All user-defined info types must have unique names,
 *   and cannot conflict with built-in info type names.
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.InfoType definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
 */
var InfoType = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * General identifier of a data field in a storage service.
 *
 * @property {string} columnName
 *   Column name describing the field.
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.FieldId definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
 */
var FieldId = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Datastore partition ID.
 * A partition ID identifies a grouping of entities. The grouping is always
 * by project and namespace, however the namespace ID may be empty.
 *
 * A partition ID contains several dimensions:
 * project ID and namespace ID.
 *
 * @property {string} projectId
 *   The ID of the project to which the entities belong.
 *
 * @property {string} namespaceId
 *   If not empty, the ID of the namespace to which the entities belong.
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.PartitionId definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
 */
var PartitionId = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A representation of a Datastore kind.
 *
 * @property {string} name
 *   The name of the kind.
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.KindExpression definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
 */
var KindExpression = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A reference to a property relative to the Datastore kind expressions.
 *
 * @property {string} name
 *   The name of the property.
 *   If name includes "."s, it may be interpreted as a property name path.
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.PropertyReference definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
 */
var PropertyReference = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A representation of a Datastore property in a projection.
 *
 * @property {Object} property
 *   The property to project.
 *
 *   This object should have the same structure as [PropertyReference]{@link PropertyReference}
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.Projection definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
 */
var Projection = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Options defining a data set within Google Cloud Datastore.
 *
 * @property {Object} partitionId
 *   A partition ID identifies a grouping of entities. The grouping is always
 *   by project and namespace, however the namespace ID may be empty.
 *
 *   This object should have the same structure as [PartitionId]{@link PartitionId}
 *
 * @property {Object} kind
 *   The kind to process.
 *
 *   This object should have the same structure as [KindExpression]{@link KindExpression}
 *
 * @property {Object[]} projection
 *   Properties to scan. If none are specified, all properties will be scanned
 *   by default.
 *
 *   This object should have the same structure as [Projection]{@link Projection}
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.DatastoreOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
 */
var DatastoreOptions = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Options defining a file or a set of files (path ending with *) within
 * a Google Cloud Storage bucket.
 *
 * @property {Object} fileSet
 *   This object should have the same structure as [FileSet]{@link FileSet}
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.CloudStorageOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
 */
var CloudStorageOptions = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Set of files to scan.
   *
   * @property {string} url
   *   The url, in the format `gs://<bucket>/<path>`. Trailing wildcard in the
   *   path is allowed.
   *
   * @class
   * @see [google.privacy.dlp.v2beta1.CloudStorageOptions.FileSet definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
   */
  FileSet: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * A location in Cloud Storage.
 *
 * @property {string} path
 *   The url, in the format of `gs://bucket/<path>`.
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.CloudStoragePath definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
 */
var CloudStoragePath = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Shared message indicating Cloud storage type.
 *
 * @property {Object} datastoreOptions
 *   Google Cloud Datastore options specification.
 *
 *   This object should have the same structure as [DatastoreOptions]{@link DatastoreOptions}
 *
 * @property {Object} cloudStorageOptions
 *   Google Cloud Storage options specification.
 *
 *   This object should have the same structure as [CloudStorageOptions]{@link CloudStorageOptions}
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.StorageConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
 */
var StorageConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Record key for a finding in a Cloud Storage file.
 *
 * @property {string} filePath
 *   Path to the file.
 *
 * @property {number} startOffset
 *   Byte offset of the referenced data in the file.
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.CloudStorageKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
 */
var CloudStorageKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Record key for a finding in Cloud Datastore.
 *
 * @property {Object} entityKey
 *   Datastore entity key.
 *
 *   This object should have the same structure as [Key]{@link Key}
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.DatastoreKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
 */
var DatastoreKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A unique identifier for a Datastore entity.
 * If a key's partition ID or any of its path kinds or names are
 * reserved/read-only, the key is reserved/read-only.
 * A reserved/read-only key is forbidden in certain documented contexts.
 *
 * @property {Object} partitionId
 *   Entities are partitioned into subsets, currently identified by a project
 *   ID and namespace ID.
 *   Queries are scoped to a single partition.
 *
 *   This object should have the same structure as [PartitionId]{@link PartitionId}
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
 *   A path can never be empty, and a path can have at most 100 elements.
 *
 *   This object should have the same structure as [PathElement]{@link PathElement}
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.Key definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
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
   * @class
   * @see [google.privacy.dlp.v2beta1.Key.PathElement definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
   */
  PathElement: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Message for a unique key indicating a record that contains a finding.
 *
 * @property {Object} cloudStorageKey
 *   This object should have the same structure as [CloudStorageKey]{@link CloudStorageKey}
 *
 * @property {Object} datastoreKey
 *   This object should have the same structure as [DatastoreKey]{@link DatastoreKey}
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.RecordKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/storage.proto}
 */
var RecordKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};