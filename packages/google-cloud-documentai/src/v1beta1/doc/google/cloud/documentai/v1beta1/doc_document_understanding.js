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
 * Request to batch process documents as an asynchronous operation.
 *
 * @property {Object[]} requests
 *   Required. Individual requests for each document.
 *
 *   This object should have the same structure as [ProcessDocumentRequest]{@link google.cloud.documentai.v1beta1.ProcessDocumentRequest}
 *
 * @property {string} parent
 *   Target project and location to make a call.
 *
 *   Format: `projects/{project-id}/locations/{location-id}`.
 *
 *   If no location is specified, a region will be chosen automatically.
 *
 * @typedef BatchProcessDocumentsRequest
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const BatchProcessDocumentsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to process one document.
 *
 * @property {Object} inputConfig
 *   Required. Information about the input file.
 *
 *   This object should have the same structure as [InputConfig]{@link google.cloud.documentai.v1beta1.InputConfig}
 *
 * @property {Object} outputConfig
 *   Required. The desired output location.
 *
 *   This object should have the same structure as [OutputConfig]{@link google.cloud.documentai.v1beta1.OutputConfig}
 *
 * @property {string} documentType
 *   Specifies a known document type for deeper structure detection. Valid
 *   values are currently "general" and "invoice". If not provided, "general"\
 *   is used as default. If any other value is given, the request is rejected.
 *
 * @property {Object} tableExtractionParams
 *   Controls table extraction behavior. If not specified, the system will
 *   decide reasonable defaults.
 *
 *   This object should have the same structure as [TableExtractionParams]{@link google.cloud.documentai.v1beta1.TableExtractionParams}
 *
 * @property {Object} formExtractionParams
 *   Controls form extraction behavior. If not specified, the system will
 *   decide reasonable defaults.
 *
 *   This object should have the same structure as [FormExtractionParams]{@link google.cloud.documentai.v1beta1.FormExtractionParams}
 *
 * @property {Object} entityExtractionParams
 *   Controls entity extraction behavior. If not specified, the system will
 *   decide reasonable defaults.
 *
 *   This object should have the same structure as [EntityExtractionParams]{@link google.cloud.documentai.v1beta1.EntityExtractionParams}
 *
 * @property {Object} ocrParams
 *   Controls OCR behavior. If not specified, the system will decide reasonable
 *   defaults.
 *
 *   This object should have the same structure as [OcrParams]{@link google.cloud.documentai.v1beta1.OcrParams}
 *
 * @typedef ProcessDocumentRequest
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.ProcessDocumentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const ProcessDocumentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response to an batch document processing request. This is returned in
 * the LRO Operation after the operation is complete.
 *
 * @property {Object[]} responses
 *   Responses for each individual document.
 *
 *   This object should have the same structure as [ProcessDocumentResponse]{@link google.cloud.documentai.v1beta1.ProcessDocumentResponse}
 *
 * @typedef BatchProcessDocumentsResponse
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const BatchProcessDocumentsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response to a single document processing request.
 *
 * @property {Object} inputConfig
 *   Information about the input file. This is the same as the corresponding
 *   input config in the request.
 *
 *   This object should have the same structure as [InputConfig]{@link google.cloud.documentai.v1beta1.InputConfig}
 *
 * @property {Object} outputConfig
 *   The output location of the parsed responses. The responses are written to
 *   this location as JSON-serialized `Document` objects.
 *
 *   This object should have the same structure as [OutputConfig]{@link google.cloud.documentai.v1beta1.OutputConfig}
 *
 * @typedef ProcessDocumentResponse
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.ProcessDocumentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const ProcessDocumentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Parameters to control Optical Character Recognition (OCR) behavior.
 *
 * @property {string[]} languageHints
 *   List of languages to use for OCR. In most cases, an empty value
 *   yields the best results since it enables automatic language detection. For
 *   languages based on the Latin alphabet, setting `language_hints` is not
 *   needed. In rare cases, when the language of the text in the image is known,
 *   setting a hint will help get better results (although it will be a
 *   significant hindrance if the hint is wrong). Document processing returns an
 *   error if one or more of the specified languages is not one of the
 *   supported languages.
 *
 * @typedef OcrParams
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.OcrParams definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const OcrParams = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Parameters to control table extraction behavior.
 *
 * @property {boolean} enabled
 *   Whether to enable table extraction.
 *
 * @property {Object[]} tableBoundHints
 *   Optional. Table bounding box hints that can be provided to complex cases
 *   which our algorithm cannot locate the table(s) in.
 *
 *   This object should have the same structure as [TableBoundHint]{@link google.cloud.documentai.v1beta1.TableBoundHint}
 *
 * @property {string[]} headerHints
 *   Optional. Table header hints. The extraction will bias towards producing
 *   these terms as table headers, which may improve accuracy.
 *
 * @property {string} modelVersion
 *   Model version of the table extraction system. Default is "builtin/stable".
 *   Specify "builtin/latest" for the latest model.
 *
 * @typedef TableExtractionParams
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.TableExtractionParams definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const TableExtractionParams = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A hint for a table bounding box on the page for table parsing.
 *
 * @property {number} pageNumber
 *   Optional. Page number for multi-paged inputs this hint applies to. If not
 *   provided, this hint will apply to all pages by default. This value is
 *   1-based.
 *
 * @property {Object} boundingBox
 *   Bounding box hint for a table on this page. The coordinates must be
 *   normalized to [0,1] and the bounding box must be an axis-aligned rectangle.
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.documentai.v1beta1.BoundingPoly}
 *
 * @typedef TableBoundHint
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.TableBoundHint definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const TableBoundHint = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Parameters to control form extraction behavior.
 *
 * @property {boolean} enabled
 *   Whether to enable form extraction.
 *
 * @property {Object[]} keyValuePairHints
 *   User can provide pairs of (key text, value type) to improve the parsing
 *   result.
 *
 *   For example, if a document has a field called "Date" that holds a date
 *   value and a field called "Amount" that may hold either a currency value
 *   (e.g., "$500.00") or a simple number value (e.g., "20"), you could use the
 *   following hints: [ {"key": "Date", value_types: [ "DATE"]}, {"key":
 *   "Amount", "value_types": [ "PRICE", "NUMBER" ]} ]
 *
 *   If the value type is unknown, but you want to provide hints for the keys,
 *   you can leave the value_types field blank. e.g. {"key": "Date",
 *   "value_types": []}
 *
 *   This object should have the same structure as [KeyValuePairHint]{@link google.cloud.documentai.v1beta1.KeyValuePairHint}
 *
 * @property {string} modelVersion
 *   Model version of the form extraction system. Default is
 *   "builtin/stable". Specify "builtin/latest" for the latest model.
 *
 * @typedef FormExtractionParams
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.FormExtractionParams definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const FormExtractionParams = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * User-provided hint for key value pair.
 *
 * @property {string} key
 *   The key text for the hint.
 *
 * @property {string[]} valueTypes
 *   Type of the value. This is case-insensitive, and could be one of:
 *   ADDRESS, LOCATION, ORGANIZATION, PERSON, PHONE_NUMBER,
 *   ID, NUMBER, EMAIL, PRICE, TERMS, DATE, NAME. Types not in this list will
 *   be ignored.
 *
 * @typedef KeyValuePairHint
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.KeyValuePairHint definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const KeyValuePairHint = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Parameters to control entity extraction behavior.
 *
 * @property {boolean} enabled
 *   Whether to enable entity extraction.
 *
 * @property {string} modelVersion
 *   Model version of the entity extraction. Default is
 *   "builtin/stable". Specify "builtin/latest" for the latest model.
 *
 * @typedef EntityExtractionParams
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.EntityExtractionParams definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const EntityExtractionParams = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The desired input location and metadata.
 *
 * @property {Object} gcsSource
 *   The Google Cloud Storage location to read the input from. This must be a
 *   single file.
 *
 *   This object should have the same structure as [GcsSource]{@link google.cloud.documentai.v1beta1.GcsSource}
 *
 * @property {string} mimeType
 *   Required. Mimetype of the input. Current supported mimetypes are
 *   application/pdf, image/tiff, and image/gif.
 *
 * @typedef InputConfig
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.InputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const InputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The desired output location and metadata.
 *
 * @property {Object} gcsDestination
 *   The Google Cloud Storage location to write the output to.
 *
 *   This object should have the same structure as [GcsDestination]{@link google.cloud.documentai.v1beta1.GcsDestination}
 *
 * @property {number} pagesPerShard
 *   The max number of pages to include into each output Document shard JSON on
 *   Google Cloud Storage.
 *
 *   The valid range is [1, 100]. If not specified, the default value is 20.
 *
 *   For example, for one pdf file with 100 pages, 100 parsed pages will be
 *   produced. If `pages_per_shard` = 20, then 5 Document shard JSON files each
 *   containing 20 parsed pages will be written under the prefix
 *   OutputConfig.gcs_destination.uri and suffix pages-x-to-y.json where
 *   x and y are 1-indexed page numbers.
 *
 *   Example GCS outputs with 157 pages and pages_per_shard = 50:
 *
 *   <prefix>pages-001-to-050.json
 *   <prefix>pages-051-to-100.json
 *   <prefix>pages-101-to-150.json
 *   <prefix>pages-151-to-157.json
 *
 * @typedef OutputConfig
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.OutputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const OutputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The Google Cloud Storage location where the input file will be read from.
 *
 * @property {string} uri
 *
 * @typedef GcsSource
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.GcsSource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const GcsSource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The Google Cloud Storage location where the output file will be written to.
 *
 * @property {string} uri
 *
 * @typedef GcsDestination
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.GcsDestination definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const GcsDestination = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains metadata for the BatchProcessDocuments operation.
 *
 * @property {number} state
 *   The state of the current batch processing.
 *
 *   The number should be among the values of [State]{@link google.cloud.documentai.v1beta1.State}
 *
 * @property {string} stateMessage
 *   A message providing more details about the current state of processing.
 *
 * @property {Object} createTime
 *   The creation time of the operation.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   The last update time of the operation.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef OperationMetadata
 * @memberof google.cloud.documentai.v1beta1
 * @see [google.cloud.documentai.v1beta1.OperationMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/documentai/v1beta1/document_understanding.proto}
 */
const OperationMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @enum {number}
   * @memberof google.cloud.documentai.v1beta1
   */
  State: {

    /**
     * The default value. This value is used if the state is omitted.
     */
    STATE_UNSPECIFIED: 0,

    /**
     * Request is received.
     */
    ACCEPTED: 1,

    /**
     * Request operation is waiting for scheduling.
     */
    WAITING: 2,

    /**
     * Request is being processed.
     */
    RUNNING: 3,

    /**
     * The batch processing completed successfully.
     */
    SUCCEEDED: 4,

    /**
     * The batch processing was cancelled.
     */
    CANCELLED: 5,

    /**
     * The batch processing has failed.
     */
    FAILED: 6
  }
};