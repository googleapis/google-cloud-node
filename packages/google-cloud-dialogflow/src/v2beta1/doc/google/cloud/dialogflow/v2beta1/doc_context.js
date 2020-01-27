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
 * Represents a context.
 *
 * @property {string} name
 *   Required. The unique identifier of the context. Format:
 *   `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`,
 *   or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
 *   ID>/sessions/<Session ID>/contexts/<Context ID>`.
 *
 *   The `Context ID` is always converted to lowercase, may only contain
 *   characters in a-zA-Z0-9_-% and may be at most 250 bytes long.
 *
 *   If `Environment ID` is not specified, we assume default 'draft'
 *   environment. If `User ID` is not specified, we assume default '-' user.
 *
 *   The following context names are reserved for internal use by Dialogflow.
 *   You should not use these contexts or create contexts with these names:
 *
 *   * `__system_counters__`
 *   * `*_id_dialog_context`
 *   * `*_dialog_params_size`
 *
 * @property {number} lifespanCount
 *   Optional. The number of conversational query requests after which the
 *   context expires. If set to `0` (the default) the context expires
 *   immediately. Contexts expire automatically after 20 minutes if there
 *   are no matching queries.
 *
 * @property {Object} parameters
 *   Optional. The collection of parameters associated with this context.
 *   Refer to [this
 *   doc](https://cloud.google.com/dialogflow/docs/intents-actions-parameters)
 *   for syntax.
 *
 *   This object should have the same structure as [Struct]{@link google.protobuf.Struct}
 *
 * @typedef Context
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.Context definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/context.proto}
 */
const Context = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Contexts.ListContexts.
 *
 * @property {string} parent
 *   Required. The session to list all contexts from.
 *   Format: `projects/<Project ID>/agent/sessions/<Session ID>` or
 *   `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
 *   ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume
 *   default 'draft' environment. If `User ID` is not specified, we assume
 *   default '-' user.
 *
 * @property {number} pageSize
 *   Optional. The maximum number of items to return in a single page. By
 *   default 100 and at most 1000.
 *
 * @property {string} pageToken
 *   Optional. The next_page_token value returned from a previous list request.
 *
 * @typedef ListContextsRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.ListContextsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/context.proto}
 */
const ListContextsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response message for Contexts.ListContexts.
 *
 * @property {Object[]} contexts
 *   The list of contexts. There will be a maximum number of items
 *   returned based on the page_size field in the request.
 *
 *   This object should have the same structure as [Context]{@link google.cloud.dialogflow.v2beta1.Context}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no
 *   more results in the list.
 *
 * @typedef ListContextsResponse
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.ListContextsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/context.proto}
 */
const ListContextsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Contexts.GetContext.
 *
 * @property {string} name
 *   Required. The name of the context. Format:
 *   `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`
 *   or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
 *   ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is
 *   not specified, we assume default 'draft' environment. If `User ID` is not
 *   specified, we assume default '-' user.
 *
 * @typedef GetContextRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.GetContextRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/context.proto}
 */
const GetContextRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Contexts.CreateContext.
 *
 * @property {string} parent
 *   Required. The session to create a context for.
 *   Format: `projects/<Project ID>/agent/sessions/<Session ID>` or
 *   `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
 *   ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume
 *   default 'draft' environment. If `User ID` is not specified, we assume
 *   default '-' user.
 *
 * @property {Object} context
 *   Required. The context to create.
 *
 *   This object should have the same structure as [Context]{@link google.cloud.dialogflow.v2beta1.Context}
 *
 * @typedef CreateContextRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.CreateContextRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/context.proto}
 */
const CreateContextRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Contexts.UpdateContext.
 *
 * @property {Object} context
 *   Required. The context to update.
 *
 *   This object should have the same structure as [Context]{@link google.cloud.dialogflow.v2beta1.Context}
 *
 * @property {Object} updateMask
 *   Optional. The mask to control which fields get updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateContextRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.UpdateContextRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/context.proto}
 */
const UpdateContextRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Contexts.DeleteContext.
 *
 * @property {string} name
 *   Required. The name of the context to delete. Format:
 *   `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`
 *   or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User
 *   ID>/sessions/<Session ID>/contexts/<Context ID>`. If `Environment ID` is
 *   not specified, we assume default 'draft' environment. If `User ID` is not
 *   specified, we assume default '-' user.
 *
 * @typedef DeleteContextRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.DeleteContextRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/context.proto}
 */
const DeleteContextRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Contexts.DeleteAllContexts.
 *
 * @property {string} parent
 *   Required. The name of the session to delete all contexts from. Format:
 *   `projects/<Project ID>/agent/sessions/<Session ID>` or `projects/<Project
 *   ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session
 *   ID>`. If `Environment ID` is not specified we assume default 'draft'
 *   environment. If `User ID` is not specified, we assume default '-' user.
 *
 * @typedef DeleteAllContextsRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.DeleteAllContextsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/context.proto}
 */
const DeleteAllContextsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};