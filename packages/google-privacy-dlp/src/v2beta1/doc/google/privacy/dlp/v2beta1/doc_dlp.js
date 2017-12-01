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
 * Configuration description of the scanning process.
 * When used with redactContent only info_types and min_likelihood are currently
 * used.
 *
 * @property {Object[]} infoTypes
 *   Restricts what info_types to look for. The values must correspond to
 *   InfoType values returned by ListInfoTypes or found in documentation.
 *   Empty info_types runs all enabled detectors.
 *
 *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2beta1.InfoType}
 *
 * @property {number} minLikelihood
 *   Only returns findings equal or above this threshold.
 *
 *   The number should be among the values of [Likelihood]{@link google.privacy.dlp.v2beta1.Likelihood}
 *
 * @property {number} maxFindings
 *   Limits the number of findings per content item or long running operation.
 *
 * @property {boolean} includeQuote
 *   When true, a contextual quote from the data that triggered a finding is
 *   included in the response; see Finding.quote.
 *
 * @property {boolean} excludeTypes
 *   When true, excludes type information of the findings.
 *
 * @property {Object[]} infoTypeLimits
 *   Configuration of findings limit given for specified info types.
 *
 *   This object should have the same structure as [InfoTypeLimit]{@link google.privacy.dlp.v2beta1.InfoTypeLimit}
 *
 * @property {Object[]} customInfoTypes
 *   Custom info types provided by the user.
 *
 *   This object should have the same structure as [CustomInfoType]{@link google.privacy.dlp.v2beta1.CustomInfoType}
 *
 * @typedef InspectConfig
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.InspectConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var InspectConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Max findings configuration per info type, per content item or long running
   * operation.
   *
   * @property {Object} infoType
   *   Type of information the findings limit applies to. Only one limit per
   *   info_type should be provided. If InfoTypeLimit does not have an
   *   info_type, the DLP API applies the limit against all info_types that are
   *   found but not specified in another InfoTypeLimit.
   *
   *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2beta1.InfoType}
   *
   * @property {number} maxFindings
   *   Max findings limit for the given infoType.
   *
   * @typedef InfoTypeLimit
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.InspectConfig.InfoTypeLimit definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  InfoTypeLimit: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Additional configuration for inspect long running operations.
 *
 * @property {number} maxItemFindings
 *   Max number of findings per file, Datastore entity, or database row.
 *
 * @typedef OperationConfig
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.OperationConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var OperationConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Container structure for the content to inspect.
 *
 * @property {string} type
 *   Type of the content, as defined in Content-Type HTTP header.
 *   Supported types are: all "text" types, octet streams, PNG images,
 *   JPEG images.
 *
 * @property {string} data
 *   Content data to inspect or redact.
 *
 * @property {string} value
 *   String data to inspect or redact.
 *
 * @property {Object} table
 *   Structured content for inspection.
 *
 *   This object should have the same structure as [Table]{@link google.privacy.dlp.v2beta1.Table}
 *
 * @typedef ContentItem
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.ContentItem definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var ContentItem = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Structured content to inspect. Up to 50,000 `Value`s per request allowed.
 *
 * @property {Object[]} headers
 *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2beta1.FieldId}
 *
 * @property {Object[]} rows
 *   This object should have the same structure as [Row]{@link google.privacy.dlp.v2beta1.Row}
 *
 * @typedef Table
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.Table definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var Table = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @property {Object[]} values
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2beta1.Value}
   *
   * @typedef Row
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.Table.Row definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  Row: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * All the findings for a single scanned item.
 *
 * @property {Object[]} findings
 *   List of findings for an item.
 *
 *   This object should have the same structure as [Finding]{@link google.privacy.dlp.v2beta1.Finding}
 *
 * @property {boolean} findingsTruncated
 *   If true, then this item might have more findings than were returned,
 *   and the findings returned are an arbitrary subset of all findings.
 *   The findings list might be truncated because the input items were too
 *   large, or because the server reached the maximum amount of resources
 *   allowed for a single API call. For best results, divide the input into
 *   smaller batches.
 *
 * @typedef InspectResult
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.InspectResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var InspectResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Container structure describing a single finding within a string or image.
 *
 * @property {string} quote
 *   The specific string that may be potentially sensitive info.
 *
 * @property {Object} infoType
 *   The specific type of info the string might be.
 *
 *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2beta1.InfoType}
 *
 * @property {number} likelihood
 *   Estimate of how likely it is that the info_type is correct.
 *
 *   The number should be among the values of [Likelihood]{@link google.privacy.dlp.v2beta1.Likelihood}
 *
 * @property {Object} location
 *   Location of the info found.
 *
 *   This object should have the same structure as [Location]{@link google.privacy.dlp.v2beta1.Location}
 *
 * @property {Object} createTime
 *   Timestamp when finding was detected.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef Finding
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.Finding definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var Finding = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Specifies the location of a finding within its source item.
 *
 * @property {Object} byteRange
 *   Zero-based byte offsets within a content item.
 *
 *   This object should have the same structure as [Range]{@link google.privacy.dlp.v2beta1.Range}
 *
 * @property {Object} codepointRange
 *   Character offsets within a content item, included when content type
 *   is a text. Default charset assumed to be UTF-8.
 *
 *   This object should have the same structure as [Range]{@link google.privacy.dlp.v2beta1.Range}
 *
 * @property {Object[]} imageBoxes
 *   Location within an image's pixels.
 *
 *   This object should have the same structure as [ImageLocation]{@link google.privacy.dlp.v2beta1.ImageLocation}
 *
 * @property {Object} recordKey
 *   Key of the finding.
 *
 *   This object should have the same structure as [RecordKey]{@link google.privacy.dlp.v2beta1.RecordKey}
 *
 * @property {Object} fieldId
 *   Field id of the field containing the finding.
 *
 *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2beta1.FieldId}
 *
 * @property {Object} tableLocation
 *   Location within a `ContentItem.Table`.
 *
 *   This object should have the same structure as [TableLocation]{@link google.privacy.dlp.v2beta1.TableLocation}
 *
 * @typedef Location
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.Location definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var Location = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Location of a finding within a `ContentItem.Table`.
 *
 * @property {number} rowIndex
 *   The zero-based index of the row where the finding is located.
 *
 * @typedef TableLocation
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.TableLocation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var TableLocation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Generic half-open interval [start, end)
 *
 * @property {number} start
 *   Index of the first character of the range (inclusive).
 *
 * @property {number} end
 *   Index of the last character of the range (exclusive).
 *
 * @typedef Range
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.Range definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var Range = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Bounding box encompassing detected text within an image.
 *
 * @property {number} top
 *   Top coordinate of the bounding box. (0,0) is upper left.
 *
 * @property {number} left
 *   Left coordinate of the bounding box. (0,0) is upper left.
 *
 * @property {number} width
 *   Width of the bounding box in pixels.
 *
 * @property {number} height
 *   Height of the bounding box in pixels.
 *
 * @typedef ImageLocation
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.ImageLocation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var ImageLocation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to search for potentially sensitive info in a list of items
 * and replace it with a default or provided content.
 *
 * @property {Object} inspectConfig
 *   Configuration for the inspector.
 *
 *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2beta1.InspectConfig}
 *
 * @property {Object[]} items
 *   The list of items to inspect. Up to 100 are allowed per request.
 *
 *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2beta1.ContentItem}
 *
 * @property {Object[]} replaceConfigs
 *   The strings to replace findings text findings with. Must specify at least
 *   one of these or one ImageRedactionConfig if redacting images.
 *
 *   This object should have the same structure as [ReplaceConfig]{@link google.privacy.dlp.v2beta1.ReplaceConfig}
 *
 * @property {Object[]} imageRedactionConfigs
 *   The configuration for specifying what content to redact from images.
 *
 *   This object should have the same structure as [ImageRedactionConfig]{@link google.privacy.dlp.v2beta1.ImageRedactionConfig}
 *
 * @typedef RedactContentRequest
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.RedactContentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var RedactContentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @property {Object} infoType
   *   Type of information to replace. Only one ReplaceConfig per info_type
   *   should be provided. If ReplaceConfig does not have an info_type, the DLP
   *   API matches it against all info_types that are found but not specified in
   *   another ReplaceConfig.
   *
   *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2beta1.InfoType}
   *
   * @property {string} replaceWith
   *   Content replacing sensitive information of given type. Max 256 chars.
   *
   * @typedef ReplaceConfig
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.RedactContentRequest.ReplaceConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  ReplaceConfig: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Configuration for determining how redaction of images should occur.
   *
   * @property {Object} infoType
   *   Only one per info_type should be provided per request. If not
   *   specified, and redact_all_text is false, the DLP API will redact all
   *   text that it matches against all info_types that are found, but not
   *   specified in another ImageRedactionConfig.
   *
   *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2beta1.InfoType}
   *
   * @property {boolean} redactAllText
   *   If true, all text found in the image, regardless whether it matches an
   *   info_type, is redacted.
   *
   * @property {Object} redactionColor
   *   The color to use when redacting content from an image. If not specified,
   *   the default is black.
   *
   *   This object should have the same structure as [Color]{@link google.privacy.dlp.v2beta1.Color}
   *
   * @typedef ImageRedactionConfig
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.RedactContentRequest.ImageRedactionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  ImageRedactionConfig: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Represents a color in the RGB color space.
 *
 * @property {number} red
 *   The amount of red in the color as a value in the interval [0, 1].
 *
 * @property {number} green
 *   The amount of green in the color as a value in the interval [0, 1].
 *
 * @property {number} blue
 *   The amount of blue in the color as a value in the interval [0, 1].
 *
 * @typedef Color
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.Color definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var Color = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of redacting a list of items.
 *
 * @property {Object[]} items
 *   The redacted content.
 *
 *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2beta1.ContentItem}
 *
 * @typedef RedactContentResponse
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.RedactContentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var RedactContentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to de-identify a list of items.
 *
 * @property {Object} deidentifyConfig
 *   Configuration for the de-identification of the list of content items.
 *
 *   This object should have the same structure as [DeidentifyConfig]{@link google.privacy.dlp.v2beta1.DeidentifyConfig}
 *
 * @property {Object} inspectConfig
 *   Configuration for the inspector.
 *
 *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2beta1.InspectConfig}
 *
 * @property {Object[]} items
 *   The list of items to inspect. Up to 100 are allowed per request.
 *   All items will be treated as text/*.
 *
 *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2beta1.ContentItem}
 *
 * @typedef DeidentifyContentRequest
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.DeidentifyContentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var DeidentifyContentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of de-identifying a list of items.
 *
 * @property {Object[]} items
 *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2beta1.ContentItem}
 *
 * @property {Object[]} summaries
 *   A review of the transformations that took place for each item.
 *
 *   This object should have the same structure as [DeidentificationSummary]{@link google.privacy.dlp.v2beta1.DeidentificationSummary}
 *
 * @typedef DeidentifyContentResponse
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.DeidentifyContentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var DeidentifyContentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to search for potentially sensitive info in a list of items.
 *
 * @property {Object} inspectConfig
 *   Configuration for the inspector.
 *
 *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2beta1.InspectConfig}
 *
 * @property {Object[]} items
 *   The list of items to inspect. Items in a single request are
 *   considered "related" unless inspect_config.independent_inputs is true.
 *   Up to 100 are allowed per request.
 *
 *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2beta1.ContentItem}
 *
 * @typedef InspectContentRequest
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.InspectContentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var InspectContentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of inspecting a list of items.
 *
 * @property {Object[]} results
 *   Each content_item from the request has a result in this list, in the
 *   same order as the request.
 *
 *   This object should have the same structure as [InspectResult]{@link google.privacy.dlp.v2beta1.InspectResult}
 *
 * @typedef InspectContentResponse
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.InspectContentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var InspectContentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for scheduling a scan of a data subset from a Google Platform data
 * repository.
 *
 * @property {Object} inspectConfig
 *   Configuration for the inspector.
 *
 *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2beta1.InspectConfig}
 *
 * @property {Object} storageConfig
 *   Specification of the data set to process.
 *
 *   This object should have the same structure as [StorageConfig]{@link google.privacy.dlp.v2beta1.StorageConfig}
 *
 * @property {Object} outputConfig
 *   Optional location to store findings.
 *
 *   This object should have the same structure as [OutputStorageConfig]{@link google.privacy.dlp.v2beta1.OutputStorageConfig}
 *
 * @property {Object} operationConfig
 *   Additional configuration settings for long running operations.
 *
 *   This object should have the same structure as [OperationConfig]{@link google.privacy.dlp.v2beta1.OperationConfig}
 *
 * @typedef CreateInspectOperationRequest
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.CreateInspectOperationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var CreateInspectOperationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Cloud repository for storing output.
 *
 * @property {Object} table
 *   Store findings in a new table in the dataset.
 *
 *   This object should have the same structure as [BigQueryTable]{@link google.privacy.dlp.v2beta1.BigQueryTable}
 *
 * @property {Object} storagePath
 *   The path to a Google Cloud Storage location to store output.
 *   The bucket must already exist and
 *   the Google APIs service account for DLP must have write permission to
 *   write to the given bucket.
 *   Results are split over multiple csv files with each file name matching
 *   the pattern "[operation_id]_[count].csv", for example
 *   `3094877188788974909_1.csv`. The `operation_id` matches the
 *   identifier for the Operation, and the `count` is a counter used for
 *   tracking the number of files written.
 *
 *   The CSV file(s) contain the following columns regardless of storage type
 *   scanned:
 *   - id
 *   - info_type
 *   - likelihood
 *   - byte size of finding
 *   - quote
 *   - timestamp
 *
 *   For Cloud Storage the next columns are:
 *
 *   - file_path
 *   - start_offset
 *
 *   For Cloud Datastore the next columns are:
 *
 *   - project_id
 *   - namespace_id
 *   - path
 *   - column_name
 *   - offset
 *
 *   For BigQuery the next columns are:
 *
 *   - row_number
 *   - project_id
 *   - dataset_id
 *   - table_id
 *
 *   This object should have the same structure as [CloudStoragePath]{@link google.privacy.dlp.v2beta1.CloudStoragePath}
 *
 * @typedef OutputStorageConfig
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.OutputStorageConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var OutputStorageConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Statistics regarding a specific InfoType.
 *
 * @property {Object} infoType
 *   The type of finding this stat is for.
 *
 *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2beta1.InfoType}
 *
 * @property {number} count
 *   Number of findings for this info type.
 *
 * @typedef InfoTypeStatistics
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.InfoTypeStatistics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var InfoTypeStatistics = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Metadata returned within GetOperation for an inspect request.
 *
 * @property {number} processedBytes
 *   Total size in bytes that were processed.
 *
 * @property {number} totalEstimatedBytes
 *   Estimate of the number of bytes to process.
 *
 * @property {Object[]} infoTypeStats
 *   This object should have the same structure as [InfoTypeStatistics]{@link google.privacy.dlp.v2beta1.InfoTypeStatistics}
 *
 * @property {Object} createTime
 *   The time which this request was started.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} requestInspectConfig
 *   The inspect config used to create the Operation.
 *
 *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2beta1.InspectConfig}
 *
 * @property {Object} requestStorageConfig
 *   The storage config used to create the Operation.
 *
 *   This object should have the same structure as [StorageConfig]{@link google.privacy.dlp.v2beta1.StorageConfig}
 *
 * @property {Object} requestOutputConfig
 *   Optional location to store findings.
 *
 *   This object should have the same structure as [OutputStorageConfig]{@link google.privacy.dlp.v2beta1.OutputStorageConfig}
 *
 * @typedef InspectOperationMetadata
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.InspectOperationMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var InspectOperationMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The operational data.
 *
 * @property {string} name
 *   The server-assigned name, which is only unique within the same service that
 *   originally returns it. If you use the default HTTP mapping, the
 *   `name` should have the format of `inspect/results/{id}`.
 *
 * @typedef InspectOperationResult
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.InspectOperationResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var InspectOperationResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the list of results in a given inspect operation.
 *
 * @property {string} name
 *   Identifier of the results set returned as metadata of
 *   the longrunning operation created by a call to InspectDataSource.
 *   Should be in the format of `inspect/results/{id}`.
 *
 * @property {number} pageSize
 *   Maximum number of results to return.
 *   If 0, the implementation selects a reasonable value.
 *
 * @property {string} pageToken
 *   The value returned by the last `ListInspectFindingsResponse`; indicates
 *   that this is a continuation of a prior `ListInspectFindings` call, and that
 *   the system should return the next page of data.
 *
 * @property {string} filter
 *   Restricts findings to items that match. Supports info_type and likelihood.
 *
 *   Examples:
 *
 *   - info_type=EMAIL_ADDRESS
 *   - info_type=PHONE_NUMBER,EMAIL_ADDRESS
 *   - likelihood=VERY_LIKELY
 *   - likelihood=VERY_LIKELY,LIKELY
 *   - info_type=EMAIL_ADDRESS,likelihood=VERY_LIKELY,LIKELY
 *
 * @typedef ListInspectFindingsRequest
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.ListInspectFindingsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var ListInspectFindingsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response to the ListInspectFindings request.
 *
 * @property {Object} result
 *   The results.
 *
 *   This object should have the same structure as [InspectResult]{@link google.privacy.dlp.v2beta1.InspectResult}
 *
 * @property {string} nextPageToken
 *   If not empty, indicates that there may be more results that match the
 *   request; this value should be passed in a new `ListInspectFindingsRequest`.
 *
 * @typedef ListInspectFindingsResponse
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.ListInspectFindingsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var ListInspectFindingsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Description of the information type (infoType).
 *
 * @property {string} name
 *   Internal name of the infoType.
 *
 * @property {string} displayName
 *   Human readable form of the infoType name.
 *
 * @property {Object[]} categories
 *   List of categories this infoType belongs to.
 *
 *   This object should have the same structure as [CategoryDescription]{@link google.privacy.dlp.v2beta1.CategoryDescription}
 *
 * @typedef InfoTypeDescription
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.InfoTypeDescription definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var InfoTypeDescription = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the list of info types belonging to a given category,
 * or all supported info types if no category is specified.
 *
 * @property {string} category
 *   Category name as returned by ListRootCategories.
 *
 * @property {string} languageCode
 *   Optional BCP-47 language code for localized info type friendly
 *   names. If omitted, or if localized strings are not available,
 *   en-US strings will be returned.
 *
 * @typedef ListInfoTypesRequest
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.ListInfoTypesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var ListInfoTypesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response to the ListInfoTypes request.
 *
 * @property {Object[]} infoTypes
 *   Set of sensitive info types belonging to a category.
 *
 *   This object should have the same structure as [InfoTypeDescription]{@link google.privacy.dlp.v2beta1.InfoTypeDescription}
 *
 * @typedef ListInfoTypesResponse
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.ListInfoTypesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var ListInfoTypesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Info Type Category description.
 *
 * @property {string} name
 *   Internal name of the category.
 *
 * @property {string} displayName
 *   Human readable form of the category name.
 *
 * @typedef CategoryDescription
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.CategoryDescription definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var CategoryDescription = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for root categories of Info Types supported by the API.
 * Example values might include "FINANCE", "HEALTH", "FAST", "DEFAULT".
 *
 * @property {string} languageCode
 *   Optional language code for localized friendly category names.
 *   If omitted or if localized strings are not available,
 *   en-US strings will be returned.
 *
 * @typedef ListRootCategoriesRequest
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.ListRootCategoriesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var ListRootCategoriesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for ListRootCategories request.
 *
 * @property {Object[]} categories
 *   List of all into type categories supported by the API.
 *
 *   This object should have the same structure as [CategoryDescription]{@link google.privacy.dlp.v2beta1.CategoryDescription}
 *
 * @typedef ListRootCategoriesResponse
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.ListRootCategoriesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var ListRootCategoriesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for creating a risk analysis operation.
 *
 * @property {Object} privacyMetric
 *   Privacy metric to compute.
 *
 *   This object should have the same structure as [PrivacyMetric]{@link google.privacy.dlp.v2beta1.PrivacyMetric}
 *
 * @property {Object} sourceTable
 *   Input dataset to compute metrics over.
 *
 *   This object should have the same structure as [BigQueryTable]{@link google.privacy.dlp.v2beta1.BigQueryTable}
 *
 * @typedef AnalyzeDataSourceRiskRequest
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.AnalyzeDataSourceRiskRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var AnalyzeDataSourceRiskRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Privacy metric to compute for reidentification risk analysis.
 *
 * @property {Object} numericalStatsConfig
 *   This object should have the same structure as [NumericalStatsConfig]{@link google.privacy.dlp.v2beta1.NumericalStatsConfig}
 *
 * @property {Object} categoricalStatsConfig
 *   This object should have the same structure as [CategoricalStatsConfig]{@link google.privacy.dlp.v2beta1.CategoricalStatsConfig}
 *
 * @property {Object} kAnonymityConfig
 *   This object should have the same structure as [KAnonymityConfig]{@link google.privacy.dlp.v2beta1.KAnonymityConfig}
 *
 * @property {Object} lDiversityConfig
 *   This object should have the same structure as [LDiversityConfig]{@link google.privacy.dlp.v2beta1.LDiversityConfig}
 *
 * @typedef PrivacyMetric
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.PrivacyMetric definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var PrivacyMetric = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Compute numerical stats over an individual column, including
   * min, max, and quantiles.
   *
   * @property {Object} field
   *   Field to compute numerical stats on. Supported types are
   *   integer, float, date, datetime, timestamp, time.
   *
   *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2beta1.FieldId}
   *
   * @typedef NumericalStatsConfig
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.PrivacyMetric.NumericalStatsConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  NumericalStatsConfig: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Compute numerical stats over an individual column, including
   * number of distinct values and value count distribution.
   *
   * @property {Object} field
   *   Field to compute categorical stats on. All column types are
   *   supported except for arrays and structs. However, it may be more
   *   informative to use NumericalStats when the field type is supported,
   *   depending on the data.
   *
   *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2beta1.FieldId}
   *
   * @typedef CategoricalStatsConfig
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.PrivacyMetric.CategoricalStatsConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  CategoricalStatsConfig: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * k-anonymity metric, used for analysis of reidentification risk.
   *
   * @property {Object[]} quasiIds
   *   Set of fields to compute k-anonymity over. When multiple fields are
   *   specified, they are considered a single composite key. Structs and
   *   repeated data types are not supported; however, nested fields are
   *   supported so long as they are not structs themselves or nested within
   *   a repeated field.
   *
   *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2beta1.FieldId}
   *
   * @property {Object} entityId
   *   Optional message indicating that each distinct `EntityId` should not
   *   contribute to the k-anonymity count more than once per equivalence class.
   *
   *   This object should have the same structure as [EntityId]{@link google.privacy.dlp.v2beta1.EntityId}
   *
   * @typedef KAnonymityConfig
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.PrivacyMetric.KAnonymityConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  KAnonymityConfig: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * l-diversity metric, used for analysis of reidentification risk.
   *
   * @property {Object[]} quasiIds
   *   Set of quasi-identifiers indicating how equivalence classes are
   *   defined for the l-diversity computation. When multiple fields are
   *   specified, they are considered a single composite key.
   *
   *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2beta1.FieldId}
   *
   * @property {Object} sensitiveAttribute
   *   Sensitive field for computing the l-value.
   *
   *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2beta1.FieldId}
   *
   * @typedef LDiversityConfig
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.PrivacyMetric.LDiversityConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  LDiversityConfig: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Metadata returned within the
 * [`riskAnalysis.operations.get`](https://cloud.google.com/dlp/docs/reference/rest/v2beta1/riskAnalysis.operations/get)
 * for risk analysis.
 *
 * @property {Object} createTime
 *   The time which this request was started.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} requestedPrivacyMetric
 *   Privacy metric to compute.
 *
 *   This object should have the same structure as [PrivacyMetric]{@link google.privacy.dlp.v2beta1.PrivacyMetric}
 *
 * @property {Object} requestedSourceTable
 *   Input dataset to compute metrics over.
 *
 *   This object should have the same structure as [BigQueryTable]{@link google.privacy.dlp.v2beta1.BigQueryTable}
 *
 * @typedef RiskAnalysisOperationMetadata
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.RiskAnalysisOperationMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var RiskAnalysisOperationMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Result of a risk analysis
 * [`Operation`](https://cloud.google.com/dlp/docs/reference/rest/v2beta1/inspect.operations)
 * request.
 *
 * @property {Object} numericalStatsResult
 *   This object should have the same structure as [NumericalStatsResult]{@link google.privacy.dlp.v2beta1.NumericalStatsResult}
 *
 * @property {Object} categoricalStatsResult
 *   This object should have the same structure as [CategoricalStatsResult]{@link google.privacy.dlp.v2beta1.CategoricalStatsResult}
 *
 * @property {Object} kAnonymityResult
 *   This object should have the same structure as [KAnonymityResult]{@link google.privacy.dlp.v2beta1.KAnonymityResult}
 *
 * @property {Object} lDiversityResult
 *   This object should have the same structure as [LDiversityResult]{@link google.privacy.dlp.v2beta1.LDiversityResult}
 *
 * @typedef RiskAnalysisOperationResult
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.RiskAnalysisOperationResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var RiskAnalysisOperationResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Result of the numerical stats computation.
   *
   * @property {Object} minValue
   *   Minimum value appearing in the column.
   *
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2beta1.Value}
   *
   * @property {Object} maxValue
   *   Maximum value appearing in the column.
   *
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2beta1.Value}
   *
   * @property {Object[]} quantileValues
   *   List of 99 values that partition the set of field values into 100 equal
   *   sized buckets.
   *
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2beta1.Value}
   *
   * @typedef NumericalStatsResult
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.RiskAnalysisOperationResult.NumericalStatsResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  NumericalStatsResult: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Result of the categorical stats computation.
   *
   * @property {Object[]} valueFrequencyHistogramBuckets
   *   Histogram of value frequencies in the column.
   *
   *   This object should have the same structure as [CategoricalStatsHistogramBucket]{@link google.privacy.dlp.v2beta1.CategoricalStatsHistogramBucket}
   *
   * @typedef CategoricalStatsResult
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.RiskAnalysisOperationResult.CategoricalStatsResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  CategoricalStatsResult: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * Histogram bucket of value frequencies in the column.
     *
     * @property {number} valueFrequencyLowerBound
     *   Lower bound on the value frequency of the values in this bucket.
     *
     * @property {number} valueFrequencyUpperBound
     *   Upper bound on the value frequency of the values in this bucket.
     *
     * @property {number} bucketSize
     *   Total number of records in this bucket.
     *
     * @property {Object[]} bucketValues
     *   Sample of value frequencies in this bucket. The total number of
     *   values returned per bucket is capped at 20.
     *
     *   This object should have the same structure as [ValueFrequency]{@link google.privacy.dlp.v2beta1.ValueFrequency}
     *
     * @typedef CategoricalStatsHistogramBucket
     * @memberof google.privacy.dlp.v2beta1
     * @see [google.privacy.dlp.v2beta1.RiskAnalysisOperationResult.CategoricalStatsResult.CategoricalStatsHistogramBucket definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
     */
    CategoricalStatsHistogramBucket: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    }
  },

  /**
   * Result of the k-anonymity computation.
   *
   * @property {Object[]} equivalenceClassHistogramBuckets
   *   Histogram of k-anonymity equivalence classes.
   *
   *   This object should have the same structure as [KAnonymityHistogramBucket]{@link google.privacy.dlp.v2beta1.KAnonymityHistogramBucket}
   *
   * @typedef KAnonymityResult
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.RiskAnalysisOperationResult.KAnonymityResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  KAnonymityResult: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * The set of columns' values that share the same k-anonymity value.
     *
     * @property {Object[]} quasiIdsValues
     *   Set of values defining the equivalence class. One value per
     *   quasi-identifier column in the original KAnonymity metric message.
     *   The order is always the same as the original request.
     *
     *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2beta1.Value}
     *
     * @property {number} equivalenceClassSize
     *   Size of the equivalence class, for example number of rows with the
     *   above set of values.
     *
     * @typedef KAnonymityEquivalenceClass
     * @memberof google.privacy.dlp.v2beta1
     * @see [google.privacy.dlp.v2beta1.RiskAnalysisOperationResult.KAnonymityResult.KAnonymityEquivalenceClass definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
     */
    KAnonymityEquivalenceClass: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Histogram bucket of equivalence class sizes in the table.
     *
     * @property {number} equivalenceClassSizeLowerBound
     *   Lower bound on the size of the equivalence classes in this bucket.
     *
     * @property {number} equivalenceClassSizeUpperBound
     *   Upper bound on the size of the equivalence classes in this bucket.
     *
     * @property {number} bucketSize
     *   Total number of records in this bucket.
     *
     * @property {Object[]} bucketValues
     *   Sample of equivalence classes in this bucket. The total number of
     *   classes returned per bucket is capped at 20.
     *
     *   This object should have the same structure as [KAnonymityEquivalenceClass]{@link google.privacy.dlp.v2beta1.KAnonymityEquivalenceClass}
     *
     * @typedef KAnonymityHistogramBucket
     * @memberof google.privacy.dlp.v2beta1
     * @see [google.privacy.dlp.v2beta1.RiskAnalysisOperationResult.KAnonymityResult.KAnonymityHistogramBucket definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
     */
    KAnonymityHistogramBucket: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    }
  },

  /**
   * Result of the l-diversity computation.
   *
   * @property {Object[]} sensitiveValueFrequencyHistogramBuckets
   *   Histogram of l-diversity equivalence class sensitive value frequencies.
   *
   *   This object should have the same structure as [LDiversityHistogramBucket]{@link google.privacy.dlp.v2beta1.LDiversityHistogramBucket}
   *
   * @typedef LDiversityResult
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.RiskAnalysisOperationResult.LDiversityResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  LDiversityResult: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * The set of columns' values that share the same l-diversity value.
     *
     * @property {Object[]} quasiIdsValues
     *   Quasi-identifier values defining the k-anonymity equivalence
     *   class. The order is always the same as the original request.
     *
     *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2beta1.Value}
     *
     * @property {number} equivalenceClassSize
     *   Size of the k-anonymity equivalence class.
     *
     * @property {number} numDistinctSensitiveValues
     *   Number of distinct sensitive values in this equivalence class.
     *
     * @property {Object[]} topSensitiveValues
     *   Estimated frequencies of top sensitive values.
     *
     *   This object should have the same structure as [ValueFrequency]{@link google.privacy.dlp.v2beta1.ValueFrequency}
     *
     * @typedef LDiversityEquivalenceClass
     * @memberof google.privacy.dlp.v2beta1
     * @see [google.privacy.dlp.v2beta1.RiskAnalysisOperationResult.LDiversityResult.LDiversityEquivalenceClass definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
     */
    LDiversityEquivalenceClass: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Histogram bucket of sensitive value frequencies in the table.
     *
     * @property {number} sensitiveValueFrequencyLowerBound
     *   Lower bound on the sensitive value frequencies of the equivalence
     *   classes in this bucket.
     *
     * @property {number} sensitiveValueFrequencyUpperBound
     *   Upper bound on the sensitive value frequencies of the equivalence
     *   classes in this bucket.
     *
     * @property {number} bucketSize
     *   Total number of records in this bucket.
     *
     * @property {Object[]} bucketValues
     *   Sample of equivalence classes in this bucket. The total number of
     *   classes returned per bucket is capped at 20.
     *
     *   This object should have the same structure as [LDiversityEquivalenceClass]{@link google.privacy.dlp.v2beta1.LDiversityEquivalenceClass}
     *
     * @typedef LDiversityHistogramBucket
     * @memberof google.privacy.dlp.v2beta1
     * @see [google.privacy.dlp.v2beta1.RiskAnalysisOperationResult.LDiversityResult.LDiversityHistogramBucket definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
     */
    LDiversityHistogramBucket: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    }
  }
};

/**
 * A value of a field, including its frequency.
 *
 * @property {Object} value
 *   A value contained in the field in question.
 *
 *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2beta1.Value}
 *
 * @property {number} count
 *   How many times the value is contained in the field.
 *
 * @typedef ValueFrequency
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.ValueFrequency definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var ValueFrequency = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Set of primitive values supported by the system.
 *
 * @property {number} integerValue
 *
 * @property {number} floatValue
 *
 * @property {string} stringValue
 *
 * @property {boolean} booleanValue
 *
 * @property {Object} timestampValue
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} timeValue
 *   This object should have the same structure as [TimeOfDay]{@link google.type.TimeOfDay}
 *
 * @property {Object} dateValue
 *   This object should have the same structure as [Date]{@link google.type.Date}
 *
 * @typedef Value
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.Value definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var Value = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The configuration that controls how the data will change.
 *
 * @property {Object} infoTypeTransformations
 *   Treat the dataset as free-form text and apply the same free text
 *   transformation everywhere.
 *
 *   This object should have the same structure as [InfoTypeTransformations]{@link google.privacy.dlp.v2beta1.InfoTypeTransformations}
 *
 * @property {Object} recordTransformations
 *   Treat the dataset as structured. Transformations can be applied to
 *   specific locations within structured datasets, such as transforming
 *   a column within a table.
 *
 *   This object should have the same structure as [RecordTransformations]{@link google.privacy.dlp.v2beta1.RecordTransformations}
 *
 * @typedef DeidentifyConfig
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.DeidentifyConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var DeidentifyConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A rule for transforming a value.
 *
 * @property {Object} replaceConfig
 *   This object should have the same structure as [ReplaceValueConfig]{@link google.privacy.dlp.v2beta1.ReplaceValueConfig}
 *
 * @property {Object} redactConfig
 *   This object should have the same structure as [RedactConfig]{@link google.privacy.dlp.v2beta1.RedactConfig}
 *
 * @property {Object} characterMaskConfig
 *   This object should have the same structure as [CharacterMaskConfig]{@link google.privacy.dlp.v2beta1.CharacterMaskConfig}
 *
 * @property {Object} cryptoReplaceFfxFpeConfig
 *   This object should have the same structure as [CryptoReplaceFfxFpeConfig]{@link google.privacy.dlp.v2beta1.CryptoReplaceFfxFpeConfig}
 *
 * @property {Object} fixedSizeBucketingConfig
 *   This object should have the same structure as [FixedSizeBucketingConfig]{@link google.privacy.dlp.v2beta1.FixedSizeBucketingConfig}
 *
 * @property {Object} bucketingConfig
 *   This object should have the same structure as [BucketingConfig]{@link google.privacy.dlp.v2beta1.BucketingConfig}
 *
 * @property {Object} replaceWithInfoTypeConfig
 *   This object should have the same structure as [ReplaceWithInfoTypeConfig]{@link google.privacy.dlp.v2beta1.ReplaceWithInfoTypeConfig}
 *
 * @property {Object} timePartConfig
 *   This object should have the same structure as [TimePartConfig]{@link google.privacy.dlp.v2beta1.TimePartConfig}
 *
 * @property {Object} cryptoHashConfig
 *   This object should have the same structure as [CryptoHashConfig]{@link google.privacy.dlp.v2beta1.CryptoHashConfig}
 *
 * @typedef PrimitiveTransformation
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.PrimitiveTransformation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var PrimitiveTransformation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a
 * portion of the value.
 *
 * @property {number} partToExtract
 *   The number should be among the values of [TimePart]{@link google.privacy.dlp.v2beta1.TimePart}
 *
 * @typedef TimePartConfig
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.TimePartConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var TimePartConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @enum {number}
   * @memberof google.privacy.dlp.v2beta1
   */
  TimePart: {
    TIME_PART_UNSPECIFIED: 0,

    /**
     * [000-9999]
     */
    YEAR: 1,

    /**
     * [1-12]
     */
    MONTH: 2,

    /**
     * [1-31]
     */
    DAY_OF_MONTH: 3,

    /**
     * [1-7]
     */
    DAY_OF_WEEK: 4,

    /**
     * [1-52]
     */
    WEEK_OF_YEAR: 5,

    /**
     * [0-24]
     */
    HOUR_OF_DAY: 6
  }
};

/**
 * Pseudonymization method that generates surrogates via cryptographic hashing.
 * Uses SHA-256.
 * Outputs a 32 byte digest as an uppercase hex string
 * (for example, 41D1567F7F99F1DC2A5FAB886DEE5BEE).
 * Currently, only string and integer values can be hashed.
 *
 * @property {Object} cryptoKey
 *   The key used by the hash function.
 *
 *   This object should have the same structure as [CryptoKey]{@link google.privacy.dlp.v2beta1.CryptoKey}
 *
 * @typedef CryptoHashConfig
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.CryptoHashConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var CryptoHashConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Replace each input value with a given `Value`.
 *
 * @property {Object} newValue
 *   Value to replace it with.
 *
 *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2beta1.Value}
 *
 * @typedef ReplaceValueConfig
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.ReplaceValueConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var ReplaceValueConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Replace each matching finding with the name of the info_type.
 * @typedef ReplaceWithInfoTypeConfig
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.ReplaceWithInfoTypeConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var ReplaceWithInfoTypeConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Redact a given value. For example, if used with an `InfoTypeTransformation`
 * transforming PHONE_NUMBER, and input 'My phone number is 206-555-0123', the
 * output would be 'My phone number is '.
 * @typedef RedactConfig
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.RedactConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var RedactConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Characters to skip when doing deidentification of a value. These will be left
 * alone and skipped.
 *
 * @property {string} charactersToSkip
 *
 * @property {number} commonCharactersToIgnore
 *   The number should be among the values of [CharacterGroup]{@link google.privacy.dlp.v2beta1.CharacterGroup}
 *
 * @typedef CharsToIgnore
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.CharsToIgnore definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var CharsToIgnore = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @enum {number}
   * @memberof google.privacy.dlp.v2beta1
   */
  CharacterGroup: {
    CHARACTER_GROUP_UNSPECIFIED: 0,

    /**
     * 0-9
     */
    NUMERIC: 1,

    /**
     * A-Z
     */
    ALPHA_UPPER_CASE: 2,

    /**
     * a-z
     */
    ALPHA_LOWER_CASE: 3,

    /**
     * US Punctuation, one of !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
     */
    PUNCTUATION: 4,

    /**
     * Whitespace character, one of [ \t\n\x0B\f\r]
     */
    WHITESPACE: 5
  }
};

/**
 * Partially mask a string by replacing a given number of characters with a
 * fixed character. Masking can start from the beginning or end of the string.
 * This can be used on data of any type (numbers, longs, and so on) and when
 * de-identifying structured data we'll attempt to preserve the original data's
 * type. (This allows you to take a long like 123 and modify it to a string like
 * **3.
 *
 * @property {string} maskingCharacter
 *   Character to mask the sensitive values&mdash;for example, "*" for an
 *   alphabetic string such as name, or "0" for a numeric string such as ZIP
 *   code or credit card number. String must have length 1. If not supplied, we
 *   will default to "*" for strings, 0 for digits.
 *
 * @property {number} numberToMask
 *   Number of characters to mask. If not set, all matching chars will be
 *   masked. Skipped characters do not count towards this tally.
 *
 * @property {boolean} reverseOrder
 *   Mask characters in reverse order. For example, if `masking_character` is
 *   '0', number_to_mask is 14, and `reverse_order` is false, then
 *   1234-5678-9012-3456 -> 00000000000000-3456
 *   If `masking_character` is '*', `number_to_mask` is 3, and `reverse_order`
 *   is true, then 12345 -> 12***
 *
 * @property {Object[]} charactersToIgnore
 *   When masking a string, items in this list will be skipped when replacing.
 *   For example, if your string is 555-555-5555 and you ask us to skip `-` and
 *   mask 5 chars with * we would produce ***-*55-5555.
 *
 *   This object should have the same structure as [CharsToIgnore]{@link google.privacy.dlp.v2beta1.CharsToIgnore}
 *
 * @typedef CharacterMaskConfig
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.CharacterMaskConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var CharacterMaskConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Buckets values based on fixed size ranges. The
 * Bucketing transformation can provide all of this functionality,
 * but requires more configuration. This message is provided as a convenience to
 * the user for simple bucketing strategies.
 * The resulting value will be a hyphenated string of
 * lower_bound-upper_bound.
 * This can be used on data of type: double, long.
 * If the bound Value type differs from the type of data
 * being transformed, we will first attempt converting the type of the data to
 * be transformed to match the type of the bound before comparing.
 *
 * @property {Object} lowerBound
 *   Lower bound value of buckets. All values less than `lower_bound` are
 *   grouped together into a single bucket; for example if `lower_bound` = 10,
 *   then all values less than 10 are replaced with the value “-10”. [Required].
 *
 *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2beta1.Value}
 *
 * @property {Object} upperBound
 *   Upper bound value of buckets. All values greater than upper_bound are
 *   grouped together into a single bucket; for example if `upper_bound` = 89,
 *   then all values greater than 89 are replaced with the value “89+”.
 *   [Required].
 *
 *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2beta1.Value}
 *
 * @property {number} bucketSize
 *   Size of each bucket (except for minimum and maximum buckets). So if
 *   `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the
 *   following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60,
 *   60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works. [Required].
 *
 * @typedef FixedSizeBucketingConfig
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.FixedSizeBucketingConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var FixedSizeBucketingConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Generalization function that buckets values based on ranges. The ranges and
 * replacement values are dynamically provided by the user for custom behavior,
 * such as 1-30 -> LOW 31-65 -> MEDIUM 66-100 -> HIGH
 * This can be used on
 * data of type: number, long, string, timestamp.
 * If the bound `Value` type differs from the type of data being transformed, we
 * will first attempt converting the type of the data to be transformed to match
 * the type of the bound before comparing.
 *
 * @property {Object[]} buckets
 *   This object should have the same structure as [Bucket]{@link google.privacy.dlp.v2beta1.Bucket}
 *
 * @typedef BucketingConfig
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.BucketingConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var BucketingConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Buckets represented as ranges, along with replacement values. Ranges must
   * be non-overlapping.
   *
   * @property {Object} min
   *   Lower bound of the range, inclusive. Type should be the same as max if
   *   used.
   *
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2beta1.Value}
   *
   * @property {Object} max
   *   Upper bound of the range, exclusive; type must match min.
   *
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2beta1.Value}
   *
   * @property {Object} replacementValue
   *   Replacement value for this bucket. If not provided
   *   the default behavior will be to hyphenate the min-max range.
   *
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2beta1.Value}
   *
   * @typedef Bucket
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.BucketingConfig.Bucket definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  Bucket: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Replaces an identifier with a surrogate using FPE with the FFX
 * mode of operation.
 * The identifier must be representable by the US-ASCII character set.
 * For a given crypto key and context, the same identifier will be
 * replaced with the same surrogate.
 * Identifiers must be at least two characters long.
 * In the case that the identifier is the empty string, it will be skipped.
 *
 * @property {Object} cryptoKey
 *   The key used by the encryption algorithm. [required]
 *
 *   This object should have the same structure as [CryptoKey]{@link google.privacy.dlp.v2beta1.CryptoKey}
 *
 * @property {Object} context
 *   A context may be used for higher security since the same
 *   identifier in two different contexts likely will be given a distinct
 *   surrogate. The principle is that the likeliness is inversely related
 *   to the ratio of the number of distinct identifiers per context over the
 *   number of possible surrogates: As long as this ratio is small, the
 *   likehood is large.
 *
 *   If the context is not set, a default tweak will be used.
 *   If the context is set but:
 *
 *   1. there is no record present when transforming a given value or
 *   1. the field is not present when transforming a given value,
 *
 *   a default tweak will be used.
 *
 *   Note that case (1) is expected when an `InfoTypeTransformation` is
 *   applied to both structured and non-structured `ContentItem`s.
 *   Currently, the referenced field may be of value type integer or string.
 *
 *   The tweak is constructed as a sequence of bytes in big endian byte order
 *   such that:
 *
 *   - a 64 bit integer is encoded followed by a single byte of value 1
 *   - a string is encoded in UTF-8 format followed by a single byte of value 2
 *
 *   This is also known as the 'tweak', as in tweakable encryption.
 *
 *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2beta1.FieldId}
 *
 * @property {number} commonAlphabet
 *   The number should be among the values of [FfxCommonNativeAlphabet]{@link google.privacy.dlp.v2beta1.FfxCommonNativeAlphabet}
 *
 * @property {string} customAlphabet
 *   This is supported by mapping these to the alphanumeric characters
 *   that the FFX mode natively supports. This happens before/after
 *   encryption/decryption.
 *   Each character listed must appear only once.
 *   Number of characters must be in the range [2, 62].
 *   This must be encoded as ASCII.
 *   The order of characters does not matter.
 *
 * @property {number} radix
 *   The native way to select the alphabet. Must be in the range [2, 62].
 *
 * @typedef CryptoReplaceFfxFpeConfig
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.CryptoReplaceFfxFpeConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var CryptoReplaceFfxFpeConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * These are commonly used subsets of the alphabet that the FFX mode
   * natively supports. In the algorithm, the alphabet is selected using
   * the "radix". Therefore each corresponds to particular radix.
   *
   * @enum {number}
   * @memberof google.privacy.dlp.v2beta1
   */
  FfxCommonNativeAlphabet: {
    FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED: 0,

    /**
     * [0-9] (radix of 10)
     */
    NUMERIC: 1,

    /**
     * [0-9A-F] (radix of 16)
     */
    HEXADECIMAL: 2,

    /**
     * [0-9A-Z] (radix of 36)
     */
    UPPER_CASE_ALPHA_NUMERIC: 3,

    /**
     * [0-9A-Za-z] (radix of 62)
     */
    ALPHA_NUMERIC: 4
  }
};

/**
 * This is a data encryption key (DEK) (as opposed to
 * a key encryption key (KEK) stored by KMS).
 * When using KMS to wrap/unwrap DEKs, be sure to set an appropriate
 * IAM policy on the KMS CryptoKey (KEK) to ensure an attacker cannot
 * unwrap the data crypto key.
 *
 * @property {Object} transient
 *   This object should have the same structure as [TransientCryptoKey]{@link google.privacy.dlp.v2beta1.TransientCryptoKey}
 *
 * @property {Object} unwrapped
 *   This object should have the same structure as [UnwrappedCryptoKey]{@link google.privacy.dlp.v2beta1.UnwrappedCryptoKey}
 *
 * @property {Object} kmsWrapped
 *   This object should have the same structure as [KmsWrappedCryptoKey]{@link google.privacy.dlp.v2beta1.KmsWrappedCryptoKey}
 *
 * @typedef CryptoKey
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.CryptoKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var CryptoKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Use this to have a random data crypto key generated.
 * It will be discarded after the operation/request finishes.
 *
 * @property {string} name
 *   Name of the key. [required]
 *   This is an arbitrary string used to differentiate different keys.
 *   A unique key is generated per name: two separate `TransientCryptoKey`
 *   protos share the same generated key if their names are the same.
 *   When the data crypto key is generated, this name is not used in any way
 *   (repeating the api call will result in a different key being generated).
 *
 * @typedef TransientCryptoKey
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.TransientCryptoKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var TransientCryptoKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Using raw keys is prone to security risks due to accidentally
 * leaking the key. Choose another type of key if possible.
 *
 * @property {string} key
 *   The AES 128/192/256 bit key. [required]
 *
 * @typedef UnwrappedCryptoKey
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.UnwrappedCryptoKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var UnwrappedCryptoKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Include to use an existing data crypto key wrapped by KMS.
 * Authorization requires the following IAM permissions when sending a request
 * to perform a crypto transformation using a kms-wrapped crypto key:
 * dlp.kms.encrypt
 *
 * @property {string} wrappedKey
 *   The wrapped data crypto key. [required]
 *
 * @property {string} cryptoKeyName
 *   The resource name of the KMS CryptoKey to use for unwrapping. [required]
 *
 * @typedef KmsWrappedCryptoKey
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.KmsWrappedCryptoKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var KmsWrappedCryptoKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A type of transformation that will scan unstructured text and
 * apply various `PrimitiveTransformation`s to each finding, where the
 * transformation is applied to only values that were identified as a specific
 * info_type.
 *
 * @property {Object[]} transformations
 *   Transformation for each info type. Cannot specify more than one
 *   for a given info type. [required]
 *
 *   This object should have the same structure as [InfoTypeTransformation]{@link google.privacy.dlp.v2beta1.InfoTypeTransformation}
 *
 * @typedef InfoTypeTransformations
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.InfoTypeTransformations definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var InfoTypeTransformations = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * A transformation to apply to text that is identified as a specific
   * info_type.
   *
   * @property {Object[]} infoTypes
   *   Info types to apply the transformation to. Empty list will match all
   *   available info types for this transformation.
   *
   *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2beta1.InfoType}
   *
   * @property {Object} primitiveTransformation
   *   Primitive transformation to apply to the info type. [required]
   *
   *   This object should have the same structure as [PrimitiveTransformation]{@link google.privacy.dlp.v2beta1.PrimitiveTransformation}
   *
   * @typedef InfoTypeTransformation
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.InfoTypeTransformations.InfoTypeTransformation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  InfoTypeTransformation: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * The transformation to apply to the field.
 *
 * @property {Object[]} fields
 *   Input field(s) to apply the transformation to. [required]
 *
 *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2beta1.FieldId}
 *
 * @property {Object} condition
 *   Only apply the transformation if the condition evaluates to true for the
 *   given `RecordCondition`. The conditions are allowed to reference fields
 *   that are not used in the actual transformation. [optional]
 *
 *   Example Use Cases:
 *
 *   - Apply a different bucket transformation to an age column if the zip code
 *   column for the same record is within a specific range.
 *   - Redact a field if the date of birth field is greater than 85.
 *
 *   This object should have the same structure as [RecordCondition]{@link google.privacy.dlp.v2beta1.RecordCondition}
 *
 * @property {Object} primitiveTransformation
 *   Apply the transformation to the entire field.
 *
 *   This object should have the same structure as [PrimitiveTransformation]{@link google.privacy.dlp.v2beta1.PrimitiveTransformation}
 *
 * @property {Object} infoTypeTransformations
 *   Treat the contents of the field as free text, and selectively
 *   transform content that matches an `InfoType`.
 *
 *   This object should have the same structure as [InfoTypeTransformations]{@link google.privacy.dlp.v2beta1.InfoTypeTransformations}
 *
 * @typedef FieldTransformation
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.FieldTransformation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var FieldTransformation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A type of transformation that is applied over structured data such as a
 * table.
 *
 * @property {Object[]} fieldTransformations
 *   Transform the record by applying various field transformations.
 *
 *   This object should have the same structure as [FieldTransformation]{@link google.privacy.dlp.v2beta1.FieldTransformation}
 *
 * @property {Object[]} recordSuppressions
 *   Configuration defining which records get suppressed entirely. Records that
 *   match any suppression rule are omitted from the output [optional].
 *
 *   This object should have the same structure as [RecordSuppression]{@link google.privacy.dlp.v2beta1.RecordSuppression}
 *
 * @typedef RecordTransformations
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.RecordTransformations definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var RecordTransformations = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration to suppress records whose suppression conditions evaluate to
 * true.
 *
 * @property {Object} condition
 *   This object should have the same structure as [RecordCondition]{@link google.privacy.dlp.v2beta1.RecordCondition}
 *
 * @typedef RecordSuppression
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.RecordSuppression definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var RecordSuppression = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A condition for determining whether a transformation should be applied to
 * a field.
 *
 * @property {Object} expressions
 *   This object should have the same structure as [Expressions]{@link google.privacy.dlp.v2beta1.Expressions}
 *
 * @typedef RecordCondition
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.RecordCondition definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var RecordCondition = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The field type of `value` and `field` do not need to match to be
   * considered equal, but not all comparisons are possible.
   *
   * A `value` of type:
   *
   * - `string` can be compared against all other types
   * - `boolean` can only be compared against other booleans
   * - `integer` can be compared against doubles or a string if the string value
   * can be parsed as an integer.
   * - `double` can be compared against integers or a string if the string can
   * be parsed as a double.
   * - `Timestamp` can be compared against strings in RFC 3339 date string
   * format.
   * - `TimeOfDay` can be compared against timestamps and strings in the format
   * of 'HH:mm:ss'.
   *
   * If we fail to compare do to type mismatch, a warning will be given and
   * the condition will evaluate to false.
   *
   * @property {Object} field
   *   Field within the record this condition is evaluated against. [required]
   *
   *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2beta1.FieldId}
   *
   * @property {number} operator
   *   Operator used to compare the field or info type to the value. [required]
   *
   *   The number should be among the values of [RelationalOperator]{@link google.privacy.dlp.v2beta1.RelationalOperator}
   *
   * @property {Object} value
   *   Value to compare against. [Required, except for `EXISTS` tests.]
   *
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2beta1.Value}
   *
   * @typedef Condition
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.RecordCondition.Condition definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  Condition: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * @property {Object[]} conditions
   *   This object should have the same structure as [Condition]{@link google.privacy.dlp.v2beta1.Condition}
   *
   * @typedef Conditions
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.RecordCondition.Conditions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  Conditions: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * A collection of expressions
   *
   * @property {number} logicalOperator
   *   The operator to apply to the result of conditions. Default and currently
   *   only supported value is `AND`.
   *
   *   The number should be among the values of [LogicalOperator]{@link google.privacy.dlp.v2beta1.LogicalOperator}
   *
   * @property {Object} conditions
   *   This object should have the same structure as [Conditions]{@link google.privacy.dlp.v2beta1.Conditions}
   *
   * @typedef Expressions
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.RecordCondition.Expressions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  Expressions: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * @enum {number}
     * @memberof google.privacy.dlp.v2beta1
     */
    LogicalOperator: {
      LOGICAL_OPERATOR_UNSPECIFIED: 0,
      AND: 1
    }
  }
};

/**
 * High level summary of deidentification.
 *
 * @property {number} transformedBytes
 *   Total size in bytes that were transformed in some way.
 *
 * @property {Object[]} transformationSummaries
 *   Transformations applied to the dataset.
 *
 *   This object should have the same structure as [TransformationSummary]{@link google.privacy.dlp.v2beta1.TransformationSummary}
 *
 * @typedef DeidentificationSummary
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.DeidentificationSummary definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var DeidentificationSummary = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Summary of a single tranformation.
 *
 * @property {Object} infoType
 *   Set if the transformation was limited to a specific info_type.
 *
 *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2beta1.InfoType}
 *
 * @property {Object} field
 *   Set if the transformation was limited to a specific FieldId.
 *
 *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2beta1.FieldId}
 *
 * @property {Object} transformation
 *   The specific transformation these stats apply to.
 *
 *   This object should have the same structure as [PrimitiveTransformation]{@link google.privacy.dlp.v2beta1.PrimitiveTransformation}
 *
 * @property {Object[]} fieldTransformations
 *   The field transformation that was applied. This list will contain
 *   multiple only in the case of errors.
 *
 *   This object should have the same structure as [FieldTransformation]{@link google.privacy.dlp.v2beta1.FieldTransformation}
 *
 * @property {Object} recordSuppress
 *   The specific suppression option these stats apply to.
 *
 *   This object should have the same structure as [RecordSuppression]{@link google.privacy.dlp.v2beta1.RecordSuppression}
 *
 * @property {Object[]} results
 *   This object should have the same structure as [SummaryResult]{@link google.privacy.dlp.v2beta1.SummaryResult}
 *
 * @typedef TransformationSummary
 * @memberof google.privacy.dlp.v2beta1
 * @see [google.privacy.dlp.v2beta1.TransformationSummary definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var TransformationSummary = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * A collection that informs the user the number of times a particular
   * `TransformationResultCode` and error details occurred.
   *
   * @property {number} count
   *
   * @property {number} code
   *   The number should be among the values of [TransformationResultCode]{@link google.privacy.dlp.v2beta1.TransformationResultCode}
   *
   * @property {string} details
   *   A place for warnings or errors to show up if a transformation didn't
   *   work as expected.
   *
   * @typedef SummaryResult
   * @memberof google.privacy.dlp.v2beta1
   * @see [google.privacy.dlp.v2beta1.TransformationSummary.SummaryResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  SummaryResult: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Possible outcomes of transformations.
   *
   * @enum {number}
   * @memberof google.privacy.dlp.v2beta1
   */
  TransformationResultCode: {
    TRANSFORMATION_RESULT_CODE_UNSPECIFIED: 0,
    SUCCESS: 1,
    ERROR: 2
  }
};

/**
 * Categorization of results based on how likely they are to represent a match,
 * based on the number of elements they contain which imply a match.
 *
 * @enum {number}
 * @memberof google.privacy.dlp.v2beta1
 */
var Likelihood = {

  /**
   * Default value; information with all likelihoods is included.
   */
  LIKELIHOOD_UNSPECIFIED: 0,

  /**
   * Few matching elements.
   */
  VERY_UNLIKELY: 1,
  UNLIKELY: 2,

  /**
   * Some matching elements.
   */
  POSSIBLE: 3,
  LIKELY: 4,

  /**
   * Many matching elements.
   */
  VERY_LIKELY: 5
};

/**
 * Operators available for comparing the value of fields.
 *
 * @enum {number}
 * @memberof google.privacy.dlp.v2beta1
 */
var RelationalOperator = {
  RELATIONAL_OPERATOR_UNSPECIFIED: 0,

  /**
   * Equal.
   */
  EQUAL_TO: 1,

  /**
   * Not equal to.
   */
  NOT_EQUAL_TO: 2,

  /**
   * Greater than.
   */
  GREATER_THAN: 3,

  /**
   * Less than.
   */
  LESS_THAN: 4,

  /**
   * Greater than or equals.
   */
  GREATER_THAN_OR_EQUALS: 5,

  /**
   * Less than or equals.
   */
  LESS_THAN_OR_EQUALS: 6,

  /**
   * Exists
   */
  EXISTS: 7
};