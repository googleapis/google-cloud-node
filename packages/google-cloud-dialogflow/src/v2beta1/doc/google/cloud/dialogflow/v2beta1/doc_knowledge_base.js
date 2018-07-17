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
 * Represents knowledge base resource.
 *
 * @property {string} name
 *   The knowledge base resource name.
 *   The name must be empty when creating a knowledge base.
 *   Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
 *
 * @property {string} displayName
 *   Required. The display name of the knowledge base. The name must be 1024
 *   bytes or less; otherwise, the creation request fails.
 *
 * @typedef KnowledgeBase
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.KnowledgeBase definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/knowledge_base.proto}
 */
var KnowledgeBase = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KnowledgeBases.ListKnowledgeBases.
 *
 * @property {string} parent
 *   Required. The agent to list of knowledge bases for.
 *   Format: `projects/<Project ID>/agent`.
 *
 * @property {number} pageSize
 *   Optional. The maximum number of items to return in a single page. By
 *   default 10 and at most 100.
 *
 * @property {string} pageToken
 *   Optional. The next_page_token value returned from a previous list request.
 *
 * @typedef ListKnowledgeBasesRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.ListKnowledgeBasesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/knowledge_base.proto}
 */
var ListKnowledgeBasesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for KnowledgeBases.ListKnowledgeBases.
 *
 * @property {Object[]} knowledgeBases
 *   The list of knowledge bases.
 *
 *   This object should have the same structure as [KnowledgeBase]{@link google.cloud.dialogflow.v2beta1.KnowledgeBase}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no
 *   more results in the list.
 *
 * @typedef ListKnowledgeBasesResponse
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.ListKnowledgeBasesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/knowledge_base.proto}
 */
var ListKnowledgeBasesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KnowledgeBase.GetDocument.
 *
 * @property {string} name
 *   Required. The name of the knowledge base to retrieve.
 *   Format `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
 *
 * @typedef GetKnowledgeBaseRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.GetKnowledgeBaseRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/knowledge_base.proto}
 */
var GetKnowledgeBaseRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KnowledgeBases.CreateKnowledgeBase.
 *
 * @property {string} parent
 *   Required. The agent to create a knowledge base for.
 *   Format: `projects/<Project ID>/agent`.
 *
 * @property {Object} knowledgeBase
 *   Required. The knowledge base to create.
 *
 *   This object should have the same structure as [KnowledgeBase]{@link google.cloud.dialogflow.v2beta1.KnowledgeBase}
 *
 * @typedef CreateKnowledgeBaseRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.CreateKnowledgeBaseRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/knowledge_base.proto}
 */
var CreateKnowledgeBaseRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for KnowledgeBases.DeleteKnowledgeBase.
 *
 * @property {string} name
 *   Required. The name of the knowledge base to delete.
 *   Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
 *
 * @property {boolean} force
 *   Optional. Force deletes the knowledge base. When set to true, any documents
 *   in the knowledge base are also deleted.
 *
 * @typedef DeleteKnowledgeBaseRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.DeleteKnowledgeBaseRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/knowledge_base.proto}
 */
var DeleteKnowledgeBaseRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};