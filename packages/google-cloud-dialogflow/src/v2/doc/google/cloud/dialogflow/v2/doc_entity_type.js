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
 * Represents an entity type.
 * Entity types serve as a tool for extracting parameter values from natural
 * language queries.
 *
 * @property {string} name
 *   Required for all methods except `create` (`create` populates the name
 *   automatically.
 *   The unique identifier of the entity type. Format:
 *   `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
 *
 * @property {string} displayName
 *   Required. The name of the entity.
 *
 * @property {number} kind
 *   Required. Indicates the kind of entity type.
 *
 *   The number should be among the values of [Kind]{@link google.cloud.dialogflow.v2.Kind}
 *
 * @property {number} autoExpansionMode
 *   Optional. Indicates whether the entity type can be automatically
 *   expanded.
 *
 *   The number should be among the values of [AutoExpansionMode]{@link google.cloud.dialogflow.v2.AutoExpansionMode}
 *
 * @property {Object[]} entities
 *   Optional. The collection of entities associated with the entity type.
 *
 *   This object should have the same structure as [Entity]{@link google.cloud.dialogflow.v2.Entity}
 *
 * @typedef EntityType
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.EntityType definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
 */
var EntityType = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Optional. Represents an entity.
   *
   * @property {string} value
   *   Required.
   *   For `KIND_MAP` entity types:
   *     A canonical name to be used in place of synonyms.
   *   For `KIND_LIST` entity types:
   *     A string that can contain references to other entity types (with or
   *     without aliases).
   *
   * @property {string[]} synonyms
   *   Required. A collection of synonyms. For `KIND_LIST` entity types this
   *   must contain exactly one synonym equal to `value`.
   *
   * @typedef Entity
   * @memberof google.cloud.dialogflow.v2
   * @see [google.cloud.dialogflow.v2.EntityType.Entity definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
   */
  Entity: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Represents kinds of entities.
   *
   * @enum {number}
   * @memberof google.cloud.dialogflow.v2
   */
  Kind: {

    /**
     * Not specified. This value should be never used.
     */
    KIND_UNSPECIFIED: 0,

    /**
     * Map entity types allow mapping of a group of synonyms to a canonical
     * value.
     */
    KIND_MAP: 1,

    /**
     * List entity types contain a set of entries that do not map to canonical
     * values. However, list entity types can contain references to other entity
     * types (with or without aliases).
     */
    KIND_LIST: 2
  },

  /**
   * Represents different entity type expansion modes. Automated expansion
   * allows an agent to recognize values that have not been explicitly listed in
   * the entity (for example, new kinds of shopping list items).
   *
   * @enum {number}
   * @memberof google.cloud.dialogflow.v2
   */
  AutoExpansionMode: {

    /**
     * Auto expansion disabled for the entity.
     */
    AUTO_EXPANSION_MODE_UNSPECIFIED: 0,

    /**
     * Allows an agent to recognize values that have not been explicitly
     * listed in the entity.
     */
    AUTO_EXPANSION_MODE_DEFAULT: 1
  }
};

/**
 * The request message for EntityTypes.ListEntityTypes.
 *
 * @property {string} parent
 *   Required. The agent to list all entity types from.
 *   Format: `projects/<Project ID>/agent`.
 *
 * @property {string} languageCode
 *   Optional. The language to list entity synonyms for. If not specified,
 *   the agent's default language is used.
 *   [More than a dozen
 *   languages](https://dialogflow.com/docs/reference/language) are supported.
 *   Note: languages must be enabled in the agent, before they can be used.
 *
 * @property {number} pageSize
 *   Optional. The maximum number of items to return in a single page. By
 *   default 100 and at most 1000.
 *
 * @property {string} pageToken
 *   Optional. The next_page_token value returned from a previous list request.
 *
 * @typedef ListEntityTypesRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.ListEntityTypesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
 */
var ListEntityTypesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response message for EntityTypes.ListEntityTypes.
 *
 * @property {Object[]} entityTypes
 *   The list of agent entity types. There will be a maximum number of items
 *   returned based on the page_size field in the request.
 *
 *   This object should have the same structure as [EntityType]{@link google.cloud.dialogflow.v2.EntityType}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no
 *   more results in the list.
 *
 * @typedef ListEntityTypesResponse
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.ListEntityTypesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
 */
var ListEntityTypesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for EntityTypes.GetEntityType.
 *
 * @property {string} name
 *   Required. The name of the entity type.
 *   Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
 *
 * @property {string} languageCode
 *   Optional. The language to retrieve entity synonyms for. If not specified,
 *   the agent's default language is used.
 *   [More than a dozen
 *   languages](https://dialogflow.com/docs/reference/language) are supported.
 *   Note: languages must be enabled in the agent, before they can be used.
 *
 * @typedef GetEntityTypeRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.GetEntityTypeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
 */
var GetEntityTypeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for EntityTypes.CreateEntityType.
 *
 * @property {string} parent
 *   Required. The agent to create a entity type for.
 *   Format: `projects/<Project ID>/agent`.
 *
 * @property {Object} entityType
 *   Required. The entity type to create.
 *
 *   This object should have the same structure as [EntityType]{@link google.cloud.dialogflow.v2.EntityType}
 *
 * @property {string} languageCode
 *   Optional. The language of entity synonyms defined in `entity_type`. If not
 *   specified, the agent's default language is used.
 *   [More than a dozen
 *   languages](https://dialogflow.com/docs/reference/language) are supported.
 *   Note: languages must be enabled in the agent, before they can be used.
 *
 * @typedef CreateEntityTypeRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.CreateEntityTypeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
 */
var CreateEntityTypeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for EntityTypes.UpdateEntityType.
 *
 * @property {Object} entityType
 *   Required. The entity type to update.
 *   Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
 *
 *   This object should have the same structure as [EntityType]{@link google.cloud.dialogflow.v2.EntityType}
 *
 * @property {string} languageCode
 *   Optional. The language of entity synonyms defined in `entity_type`. If not
 *   specified, the agent's default language is used.
 *   [More than a dozen
 *   languages](https://dialogflow.com/docs/reference/language) are supported.
 *   Note: languages must be enabled in the agent, before they can be used.
 *
 * @property {Object} updateMask
 *   Optional. The mask to control which fields get updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateEntityTypeRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.UpdateEntityTypeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
 */
var UpdateEntityTypeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for EntityTypes.DeleteEntityType.
 *
 * @property {string} name
 *   Required. The name of the entity type to delete.
 *   Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
 *
 * @typedef DeleteEntityTypeRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.DeleteEntityTypeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
 */
var DeleteEntityTypeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for EntityTypes.BatchUpdateEntityTypes.
 *
 * @property {string} parent
 *   Required. The name of the agent to update or create entity types in.
 *   Format: `projects/<Project ID>/agent`.
 *
 * @property {string} entityTypeBatchUri
 *   The URI to a Google Cloud Storage file containing entity types to update
 *   or create. The file format can either be a serialized proto (of
 *   EntityBatch type) or a JSON object. Note: The URI must start with
 *   "gs://".
 *
 * @property {Object} entityTypeBatchInline
 *   The collection of entity type to update or create.
 *
 *   This object should have the same structure as [EntityTypeBatch]{@link google.cloud.dialogflow.v2.EntityTypeBatch}
 *
 * @property {string} languageCode
 *   Optional. The language of entity synonyms defined in `entity_types`. If not
 *   specified, the agent's default language is used.
 *   [More than a dozen
 *   languages](https://dialogflow.com/docs/reference/language) are supported.
 *   Note: languages must be enabled in the agent, before they can be used.
 *
 * @property {Object} updateMask
 *   Optional. The mask to control which fields get updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef BatchUpdateEntityTypesRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.BatchUpdateEntityTypesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
 */
var BatchUpdateEntityTypesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response message for EntityTypes.BatchUpdateEntityTypes.
 *
 * @property {Object[]} entityTypes
 *   The collection of updated or created entity types.
 *
 *   This object should have the same structure as [EntityType]{@link google.cloud.dialogflow.v2.EntityType}
 *
 * @typedef BatchUpdateEntityTypesResponse
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.BatchUpdateEntityTypesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
 */
var BatchUpdateEntityTypesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for EntityTypes.BatchDeleteEntityTypes.
 *
 * @property {string} parent
 *   Required. The name of the agent to delete all entities types for. Format:
 *   `projects/<Project ID>/agent`.
 *
 * @property {string[]} entityTypeNames
 *   Required. The names entity types to delete. All names must point to the
 *   same agent as `parent`.
 *
 * @typedef BatchDeleteEntityTypesRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.BatchDeleteEntityTypesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
 */
var BatchDeleteEntityTypesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for EntityTypes.BatchCreateEntities.
 *
 * @property {string} parent
 *   Required. The name of the entity type to create entities in. Format:
 *   `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
 *
 * @property {Object[]} entities
 *   Required. The collection of entities to create.
 *
 *   This object should have the same structure as [Entity]{@link google.cloud.dialogflow.v2.Entity}
 *
 * @property {string} languageCode
 *   Optional. The language of entity synonyms defined in `entities`. If not
 *   specified, the agent's default language is used.
 *   [More than a dozen
 *   languages](https://dialogflow.com/docs/reference/language) are supported.
 *   Note: languages must be enabled in the agent, before they can be used.
 *
 * @typedef BatchCreateEntitiesRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.BatchCreateEntitiesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
 */
var BatchCreateEntitiesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response message for EntityTypes.BatchCreateEntities.
 *
 * @property {string} parent
 *   Required. The name of the entity type to update the entities in. Format:
 *   `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
 *
 * @property {Object[]} entities
 *   Required. The collection of new entities to replace the existing entities.
 *
 *   This object should have the same structure as [Entity]{@link google.cloud.dialogflow.v2.Entity}
 *
 * @property {string} languageCode
 *   Optional. The language of entity synonyms defined in `entities`. If not
 *   specified, the agent's default language is used.
 *   [More than a dozen
 *   languages](https://dialogflow.com/docs/reference/language) are supported.
 *   Note: languages must be enabled in the agent, before they can be used.
 *
 * @property {Object} updateMask
 *   Optional. The mask to control which fields get updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef BatchUpdateEntitiesRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.BatchUpdateEntitiesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
 */
var BatchUpdateEntitiesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for EntityTypes.BatchDeleteEntities.
 *
 * @property {string} parent
 *   Required. The name of the entity type to delete entries for. Format:
 *   `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
 *
 * @property {string[]} entityValues
 *   Required. The canonical `values` of the entities to delete. Note that
 *   these are not fully-qualified names, i.e. they don't start with
 *   `projects/<Project ID>`.
 *
 * @property {string} languageCode
 *   Optional. The language of entity synonyms defined in `entities`. If not
 *   specified, the agent's default language is used.
 *   [More than a dozen
 *   languages](https://dialogflow.com/docs/reference/language) are supported.
 *   Note: languages must be enabled in the agent, before they can be used.
 *
 * @typedef BatchDeleteEntitiesRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.BatchDeleteEntitiesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
 */
var BatchDeleteEntitiesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * This message is a wrapper around a collection of entity types.
 *
 * @property {Object[]} entityTypes
 *   A collection of entity types.
 *
 *   This object should have the same structure as [EntityType]{@link google.cloud.dialogflow.v2.EntityType}
 *
 * @typedef EntityTypeBatch
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.EntityTypeBatch definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/entity_type.proto}
 */
var EntityTypeBatch = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};