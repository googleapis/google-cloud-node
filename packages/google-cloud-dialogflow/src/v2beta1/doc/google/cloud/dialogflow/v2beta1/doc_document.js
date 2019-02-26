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
 * A document resource.
 *
 * @property {string} name
 *   The document resource name.
 *   The name must be empty when creating a document.
 *   Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base
 *   ID>/documents/<Document ID>`.
 *
 * @property {string} displayName
 *   Required. The display name of the document. The name must be 1024 bytes or
 *   less; otherwise, the creation request fails.
 *
 * @property {string} mimeType
 *   Required. The MIME type of this document.
 *
 * @property {number[]} knowledgeTypes
 *   Required. The knowledge type of document content.
 *
 *   The number should be among the values of [KnowledgeType]{@link google.cloud.dialogflow.v2beta1.KnowledgeType}
 *
 * @property {string} contentUri
 *   The URI where the file content is located.
 *
 *   For documents stored in Google Cloud Storage, these URIs must have
 *   the form `gs://<bucket-name>/<object-name>`.
 *
 *   NOTE: External URLs must correspond to public webpages, i.e., they must
 *   be indexed by Google Search. In particular, URLs for showing documents in
 *   Google Cloud Storage (i.e. the URL in your browser) are not supported.
 *   Instead use the `gs://` format URI described above.
 *
 * @property {string} content
 *   The raw content of the document. This field is only permitted for
 *   EXTRACTIVE_QA and FAQ knowledge types.
 *
 * @typedef Document
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.Document definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/document.proto}
 */
const Document = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The knowledge type of document content.
   *
   * @enum {number}
   * @memberof google.cloud.dialogflow.v2beta1
   */
  KnowledgeType: {

    /**
     * The type is unspecified or arbitrary.
     */
    KNOWLEDGE_TYPE_UNSPECIFIED: 0,

    /**
     * The document content contains question and answer pairs as either HTML or
     * CSV. Typical FAQ HTML formats are parsed accurately, but unusual formats
     * may fail to be parsed.
     *
     * CSV must have questions in the first column and answers in the second,
     * with no header. Because of this explicit format, they are always parsed
     * accurately.
     */
    FAQ: 1,

    /**
     * Documents for which unstructured text is extracted and used for
     * question answering.
     */
    EXTRACTIVE_QA: 2
  }
};

/**
 * Request message for
 * Documents.ListDocuments.
 *
 * @property {string} parent
 *   Required. The knowledge base to list all documents for.
 *   Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
 *
 * @property {number} pageSize
 *   Optional. The maximum number of items to return in a single page. By
 *   default 10 and at most 100.
 *
 * @property {string} pageToken
 *   Optional. The next_page_token value returned from a previous list request.
 *
 * @typedef ListDocumentsRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.ListDocumentsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/document.proto}
 */
const ListDocumentsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for
 * Documents.ListDocuments.
 *
 * @property {Object[]} documents
 *   The list of documents.
 *
 *   This object should have the same structure as [Document]{@link google.cloud.dialogflow.v2beta1.Document}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no
 *   more results in the list.
 *
 * @typedef ListDocumentsResponse
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.ListDocumentsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/document.proto}
 */
const ListDocumentsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * Documents.GetDocument.
 *
 * @property {string} name
 *   Required. The name of the document to retrieve.
 *   Format `projects/<Project ID>/knowledgeBases/<Knowledge Base
 *   ID>/documents/<Document ID>`.
 *
 * @typedef GetDocumentRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.GetDocumentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/document.proto}
 */
const GetDocumentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * Documents.CreateDocument.
 *
 * @property {string} parent
 *   Required. The knoweldge base to create a document for.
 *   Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base ID>`.
 *
 * @property {Object} document
 *   Required. The document to create.
 *
 *   This object should have the same structure as [Document]{@link google.cloud.dialogflow.v2beta1.Document}
 *
 * @typedef CreateDocumentRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.CreateDocumentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/document.proto}
 */
const CreateDocumentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * Documents.DeleteDocument.
 *
 * @property {string} name
 *   The name of the document to delete.
 *   Format: `projects/<Project ID>/knowledgeBases/<Knowledge Base
 *   ID>/documents/<Document ID>`.
 *
 * @typedef DeleteDocumentRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.DeleteDocumentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/document.proto}
 */
const DeleteDocumentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Metadata in google::longrunning::Operation for Knowledge operations.
 *
 * @property {number} state
 *   Required. The current state of this operation.
 *
 *   The number should be among the values of [State]{@link google.cloud.dialogflow.v2beta1.State}
 *
 * @typedef KnowledgeOperationMetadata
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.KnowledgeOperationMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/document.proto}
 */
const KnowledgeOperationMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * States of the operation.
   *
   * @enum {number}
   * @memberof google.cloud.dialogflow.v2beta1
   */
  State: {

    /**
     * State unspecified.
     */
    STATE_UNSPECIFIED: 0,

    /**
     * The operation has been created.
     */
    PENDING: 1,

    /**
     * The operation is currently running.
     */
    RUNNING: 2,

    /**
     * The operation is done, either cancelled or completed.
     */
    DONE: 3
  }
};