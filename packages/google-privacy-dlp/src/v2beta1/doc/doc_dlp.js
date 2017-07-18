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
 * Configuration description of the scanning process.
 * When used with redactContent only info_types and min_likelihood are currently
 * used.
 *
 * @property {Object[]} infoTypes
 *   Restricts what info_types to look for. The values must correspond to
 *   InfoType values returned by ListInfoTypes or found in documentation.
 *   Empty info_types runs all enabled detectors.
 *
 *   This object should have the same structure as [InfoType]{@link InfoType}
 *
 * @property {number} minLikelihood
 *   Only returns findings equal or above this threshold.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} maxFindings
 *   Limits the number of findings per content item.
 *
 * @property {boolean} includeQuote
 *   When true, a contextual quote from the data that triggered a finding is
 *   included in the response; see Finding.quote.
 *
 * @property {boolean} excludeTypes
 *   When true, excludes type information of the findings.
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.InspectConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var InspectConfig = {
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
 * @class
 * @see [google.privacy.dlp.v2beta1.ContentItem definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var ContentItem = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * All the findings for a single scanned item.
 *
 * @property {Object[]} findings
 *   List of findings for an item.
 *
 *   This object should have the same structure as [Finding]{@link Finding}
 *
 * @property {boolean} findingsTruncated
 *   If true, then this item might have more findings than were returned,
 *   and the findings returned are an arbitrary subset of all findings.
 *   The findings list might be truncated because the input items were too
 *   large, or because the server reached the maximum amount of resources
 *   allowed for a single API call. For best results, divide the input into
 *   smaller batches.
 *
 * @class
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
 *   This object should have the same structure as [InfoType]{@link InfoType}
 *
 * @property {number} likelihood
 *   Estimate of how likely it is that the info_type is correct.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {Object} location
 *   Location of the info found.
 *
 *   This object should have the same structure as [Location]{@link Location}
 *
 * @property {Object} createTime
 *   Timestamp when finding was detected.
 *
 *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
 *
 * @class
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
 *   This object should have the same structure as [Range]{@link Range}
 *
 * @property {Object} codepointRange
 *   Character offsets within a content item, included when content type
 *   is a text. Default charset assumed to be UTF-8.
 *
 *   This object should have the same structure as [Range]{@link Range}
 *
 * @property {Object[]} imageBoxes
 *   Location within an image's pixels.
 *
 *   This object should have the same structure as [ImageLocation]{@link ImageLocation}
 *
 * @property {Object} recordKey
 *   Key of the finding.
 *
 *   This object should have the same structure as [RecordKey]{@link RecordKey}
 *
 * @property {Object} fieldId
 *   Field id of the field containing the finding.
 *
 *   This object should have the same structure as [FieldId]{@link FieldId}
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.Location definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var Location = {
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
 * @class
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
 * @class
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
 *   This object should have the same structure as [InspectConfig]{@link InspectConfig}
 *
 * @property {Object[]} items
 *   The list of items to inspect. Up to 100 are allowed per request.
 *
 *   This object should have the same structure as [ContentItem]{@link ContentItem}
 *
 * @property {Object[]} replaceConfigs
 *   The strings to replace findings text findings with. Must specify at least
 *   one of these or one ImageRedactionConfig if redacting images.
 *
 *   This object should have the same structure as [ReplaceConfig]{@link ReplaceConfig}
 *
 * @property {Object[]} imageRedactionConfigs
 *   The configuration for specifying what content to redact from images.
 *
 *   This object should have the same structure as [ImageRedactionConfig]{@link ImageRedactionConfig}
 *
 * @class
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
   *   This object should have the same structure as [InfoType]{@link InfoType}
   *
   * @property {string} replaceWith
   *   Content replacing sensitive information of given type. Max 256 chars.
   *
   * @class
   * @see [google.privacy.dlp.v2beta1.RedactContentRequest.ReplaceConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
   */
  ReplaceConfig: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Configuration for determing how redaction of images should occur.
   *
   * @property {Object} infoType
   *   Only one per info_type should be provided per request. If not
   *   specified, and redact_all_text is false, the DLP API will redacts all
   *   text that it matches against all info_types that are found, but not
   *   specified in another ImageRedactionConfig.
   *
   *   This object should have the same structure as [InfoType]{@link InfoType}
   *
   * @property {boolean} redactAllText
   *   If true, all text found in the image, regardless if it matches an
   *   info_type, is redacted.
   *
   * @property {Object} redactionColor
   *   The color to use when redacting content from an image. If not specified,
   *   the default is black.
   *
   *   This object should have the same structure as [Color]{@link Color}
   *
   * @class
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
 * @class
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
 *   This object should have the same structure as [ContentItem]{@link ContentItem}
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.RedactContentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var RedactContentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to search for potentially sensitive info in a list of items.
 *
 * @property {Object} inspectConfig
 *   Configuration for the inspector.
 *
 *   This object should have the same structure as [InspectConfig]{@link InspectConfig}
 *
 * @property {Object[]} items
 *   The list of items to inspect. Items in a single request are
 *   considered "related" unless inspect_config.independent_inputs is true.
 *   Up to 100 are allowed per request.
 *
 *   This object should have the same structure as [ContentItem]{@link ContentItem}
 *
 * @class
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
 *   This object should have the same structure as [InspectResult]{@link InspectResult}
 *
 * @class
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
 *   This object should have the same structure as [InspectConfig]{@link InspectConfig}
 *
 * @property {Object} storageConfig
 *   Specification of the data set to process.
 *
 *   This object should have the same structure as [StorageConfig]{@link StorageConfig}
 *
 * @property {Object} outputConfig
 *   Optional location to store findings. The bucket must already exist and
 *   the Google APIs service account for DLP must have write permission to
 *   write to the given bucket.
 *   <p>Results are split over multiple csv files with each file name matching
 *   the pattern "[operation_id]_[count].csv", for example
 *   `3094877188788974909_1.csv`. The `operation_id` matches the
 *   identifier for the Operation, and the `count` is a counter used for
 *   tracking the number of files written. <p>The CSV file(s) contain the
 *   following columns regardless of storage type scanned: <li>id <li>info_type
 *   <li>likelihood <li>byte size of finding <li>quote <li>time_stamp<br/>
 *   <p>For Cloud Storage the next columns are: <li>file_path
 *   <li>start_offset<br/>
 *   <p>For Cloud Datastore the next columns are: <li>project_id
 *   <li>namespace_id <li>path <li>column_name <li>offset
 *
 *   This object should have the same structure as [OutputStorageConfig]{@link OutputStorageConfig}
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.CreateInspectOperationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var CreateInspectOperationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Cloud repository for storing output.
 *
 * @property {Object} storagePath
 *   The path to a Google Cloud Storage location to store output.
 *
 *   This object should have the same structure as [CloudStoragePath]{@link CloudStoragePath}
 *
 * @class
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
 *   This object should have the same structure as [InfoType]{@link InfoType}
 *
 * @property {number} count
 *   Number of findings for this info type.
 *
 * @class
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
 *   This object should have the same structure as [InfoTypeStatistics]{@link InfoTypeStatistics}
 *
 * @property {Object} createTime
 *   The time which this request was started.
 *
 *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
 *
 * @property {Object} requestInspectConfig
 *   The inspect config used to create the Operation.
 *
 *   This object should have the same structure as [InspectConfig]{@link InspectConfig}
 *
 * @property {Object} requestStorageConfig
 *   The storage config used to create the Operation.
 *
 *   This object should have the same structure as [StorageConfig]{@link StorageConfig}
 *
 * @property {Object} requestOutputConfig
 *   Optional location to store findings.
 *
 *   This object should have the same structure as [OutputStorageConfig]{@link OutputStorageConfig}
 *
 * @class
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
 * @class
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
 *   the longrunning operation created by a call to CreateInspectOperation.
 *   Should be in the format of `inspect/results/{id}.
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
 *   <p>Examples:<br/>
 *   <li>info_type=EMAIL_ADDRESS
 *   <li>info_type=PHONE_NUMBER,EMAIL_ADDRESS
 *   <li>likelihood=VERY_LIKELY
 *   <li>likelihood=VERY_LIKELY,LIKELY
 *   <li>info_type=EMAIL_ADDRESS,likelihood=VERY_LIKELY,LIKELY
 *
 * @class
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
 *   This object should have the same structure as [InspectResult]{@link InspectResult}
 *
 * @property {string} nextPageToken
 *   If not empty, indicates that there may be more results that match the
 *   request; this value should be passed in a new `ListInspectFindingsRequest`.
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.ListInspectFindingsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var ListInspectFindingsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Info type description.
 *
 * @property {string} name
 *   Internal name of the info type.
 *
 * @property {string} displayName
 *   Human readable form of the info type name.
 *
 * @property {Object[]} categories
 *   List of categories this info type belongs to.
 *
 *   This object should have the same structure as [CategoryDescription]{@link CategoryDescription}
 *
 * @class
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
 * @class
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
 *   This object should have the same structure as [InfoTypeDescription]{@link InfoTypeDescription}
 *
 * @class
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
 * @class
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
 * @class
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
 *   This object should have the same structure as [CategoryDescription]{@link CategoryDescription}
 *
 * @class
 * @see [google.privacy.dlp.v2beta1.ListRootCategoriesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2beta1/dlp.proto}
 */
var ListRootCategoriesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Categorization of results based on how likely they are to represent a match,
 * based on the number of elements they contain which imply a match.
 *
 * @enum {number}
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