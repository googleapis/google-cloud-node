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
 * Represents a session entity type.
 *
 * Extends or replaces a developer entity type at the user session level (we
 * refer to the entity types defined at the agent level as "developer entity
 * types").
 *
 * Note: session entity types apply to all queries, regardless of the language.
 *
 * @property {string} name
 *   Required. The unique identifier of this session entity type. Format:
 *   `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type
 *   Display Name>`, or
 *   `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
 *   ID>/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`.
 *   If `Environment ID` is not specified, we assume default 'draft'
 *   environment. If `User ID` is not specified, we assume default '-' user.
 *
 *   `<Entity Type Display Name>` must be the display name of an existing entity
 *   type in the same agent that will be overridden or supplemented.
 *
 * @property {number} entityOverrideMode
 *   Required. Indicates whether the additional data should override or
 *   supplement the developer entity type definition.
 *
 *   The number should be among the values of [EntityOverrideMode]{@link google.cloud.dialogflow.v2beta1.EntityOverrideMode}
 *
 * @property {Object[]} entities
 *   Required. The collection of entities associated with this session entity
 *   type.
 *
 *   This object should have the same structure as [Entity]{@link google.cloud.dialogflow.v2beta1.Entity}
 *
 * @typedef SessionEntityType
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.SessionEntityType definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session_entity_type.proto}
 */
const SessionEntityType = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The types of modifications for a session entity type.
   *
   * @enum {number}
   * @memberof google.cloud.dialogflow.v2beta1
   */
  EntityOverrideMode: {

    /**
     * Not specified. This value should be never used.
     */
    ENTITY_OVERRIDE_MODE_UNSPECIFIED: 0,

    /**
     * The collection of session entities overrides the collection of entities
     * in the corresponding developer entity type.
     */
    ENTITY_OVERRIDE_MODE_OVERRIDE: 1,

    /**
     * The collection of session entities extends the collection of entities in
     * the corresponding developer entity type.
     *
     * Note: Even in this override mode calls to `ListSessionEntityTypes`,
     * `GetSessionEntityType`, `CreateSessionEntityType` and
     * `UpdateSessionEntityType` only return the additional entities added in
     * this session entity type. If you want to get the supplemented list,
     * please call EntityTypes.GetEntityType on the developer entity type
     * and merge.
     */
    ENTITY_OVERRIDE_MODE_SUPPLEMENT: 2
  }
};

/**
 * The request message for SessionEntityTypes.ListSessionEntityTypes.
 *
 * @property {string} parent
 *   Required. The session to list all session entity types from.
 *   Format: `projects/<Project ID>/agent/sessions/<Session ID>` or
 *   `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/
 *   sessions/<Session ID>`.
 *   If `Environment ID` is not specified, we assume default 'draft'
 *   environment. If `User ID` is not specified, we assume default '-' user.
 *
 * @property {number} pageSize
 *   Optional. The maximum number of items to return in a single page. By
 *   default 100 and at most 1000.
 *
 * @property {string} pageToken
 *   Optional. The next_page_token value returned from a previous list request.
 *
 * @typedef ListSessionEntityTypesRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.ListSessionEntityTypesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session_entity_type.proto}
 */
const ListSessionEntityTypesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response message for SessionEntityTypes.ListSessionEntityTypes.
 *
 * @property {Object[]} sessionEntityTypes
 *   The list of session entity types. There will be a maximum number of items
 *   returned based on the page_size field in the request.
 *
 *   This object should have the same structure as [SessionEntityType]{@link google.cloud.dialogflow.v2beta1.SessionEntityType}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no
 *   more results in the list.
 *
 * @typedef ListSessionEntityTypesResponse
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.ListSessionEntityTypesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session_entity_type.proto}
 */
const ListSessionEntityTypesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for SessionEntityTypes.GetSessionEntityType.
 *
 * @property {string} name
 *   Required. The name of the session entity type. Format:
 *   `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type
 *   Display Name>` or `projects/<Project ID>/agent/environments/<Environment
 *   ID>/users/<User ID>/sessions/<Session ID>/entityTypes/<Entity Type Display
 *   Name>`. If `Environment ID` is not specified, we assume default 'draft'
 *   environment. If `User ID` is not specified, we assume default '-' user.
 *
 * @typedef GetSessionEntityTypeRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.GetSessionEntityTypeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session_entity_type.proto}
 */
const GetSessionEntityTypeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for SessionEntityTypes.CreateSessionEntityType.
 *
 * @property {string} parent
 *   Required. The session to create a session entity type for.
 *   Format: `projects/<Project ID>/agent/sessions/<Session ID>` or
 *   `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/
 *   sessions/<Session ID>`. If `Environment ID` is not specified, we assume
 *   default 'draft' environment. If `User ID` is not specified, we assume
 *   default '-' user.
 *
 * @property {Object} sessionEntityType
 *   Required. The session entity type to create.
 *
 *   This object should have the same structure as [SessionEntityType]{@link google.cloud.dialogflow.v2beta1.SessionEntityType}
 *
 * @typedef CreateSessionEntityTypeRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.CreateSessionEntityTypeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session_entity_type.proto}
 */
const CreateSessionEntityTypeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for SessionEntityTypes.UpdateSessionEntityType.
 *
 * @property {Object} sessionEntityType
 *   Required. The entity type to update. Format:
 *   `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type
 *   Display Name>` or `projects/<Project ID>/agent/environments/<Environment
 *   ID>/users/<User ID>/sessions/<Session ID>/entityTypes/<Entity Type Display
 *   Name>`. If `Environment ID` is not specified, we assume default 'draft'
 *   environment. If `User ID` is not specified, we assume default '-' user.
 *
 *   This object should have the same structure as [SessionEntityType]{@link google.cloud.dialogflow.v2beta1.SessionEntityType}
 *
 * @property {Object} updateMask
 *   Optional. The mask to control which fields get updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateSessionEntityTypeRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.UpdateSessionEntityTypeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session_entity_type.proto}
 */
const UpdateSessionEntityTypeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for SessionEntityTypes.DeleteSessionEntityType.
 *
 * @property {string} name
 *   Required. The name of the entity type to delete. Format:
 *   `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type
 *   Display Name>` or `projects/<Project ID>/agent/environments/<Environment
 *   ID>/users/<User ID>/sessions/<Session ID>/entityTypes/<Entity Type Display
 *   Name>`. If `Environment ID` is not specified, we assume default 'draft'
 *   environment. If `User ID` is not specified, we assume default '-' user.
 *
 * @typedef DeleteSessionEntityTypeRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.DeleteSessionEntityTypeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/session_entity_type.proto}
 */
const DeleteSessionEntityTypeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};