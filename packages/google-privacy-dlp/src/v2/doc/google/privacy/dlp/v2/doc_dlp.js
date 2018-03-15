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
 * Configuration description of the scanning process.
 * When used with redactContent only info_types and min_likelihood are currently
 * used.
 *
 * @property {Object[]} infoTypes
 *   Restricts what info_types to look for. The values must correspond to
 *   InfoType values returned by ListInfoTypes or found in documentation.
 *   Empty info_types runs all enabled detectors.
 *
 *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2.InfoType}
 *
 * @property {number} minLikelihood
 *   Only returns findings equal or above this threshold. The default is
 *   POSSIBLE.
 *
 *   The number should be among the values of [Likelihood]{@link google.privacy.dlp.v2.Likelihood}
 *
 * @property {Object} limits
 *   This object should have the same structure as [FindingLimits]{@link google.privacy.dlp.v2.FindingLimits}
 *
 * @property {boolean} includeQuote
 *   When true, a contextual quote from the data that triggered a finding is
 *   included in the response; see Finding.quote.
 *
 * @property {boolean} excludeInfoTypes
 *   When true, excludes type information of the findings.
 *
 * @property {Object[]} customInfoTypes
 *   Custom infoTypes provided by the user.
 *
 *   This object should have the same structure as [CustomInfoType]{@link google.privacy.dlp.v2.CustomInfoType}
 *
 * @property {number[]} contentOptions
 *   List of options defining data content to scan.
 *   If empty, text, images, and other content will be included.
 *
 *   The number should be among the values of [ContentOption]{@link google.privacy.dlp.v2.ContentOption}
 *
 * @typedef InspectConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.InspectConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var InspectConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @property {number} maxFindingsPerItem
   *   Max number of findings that will be returned for each item scanned.
   *   When set within `InspectDataSourceRequest`,
   *   the maximum returned is 1000 regardless if this is set higher.
   *   When set within `InspectContentRequest`, this field is ignored.
   *
   * @property {number} maxFindingsPerRequest
   *   Max number of findings that will be returned per request/job.
   *   When set within `InspectContentRequest`, the maximum returned is 1000
   *   regardless if this is set higher.
   *
   * @property {Object[]} maxFindingsPerInfoType
   *   Configuration of findings limit given for specified infoTypes.
   *
   *   This object should have the same structure as [InfoTypeLimit]{@link google.privacy.dlp.v2.InfoTypeLimit}
   *
   * @typedef FindingLimits
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.InspectConfig.FindingLimits definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  FindingLimits: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * Max findings configuration per infoType, per content item or long
     * running DlpJob.
     *
     * @property {Object} infoType
     *   Type of information the findings limit applies to. Only one limit per
     *   info_type should be provided. If InfoTypeLimit does not have an
     *   info_type, the DLP API applies the limit against all info_types that
     *   are found but not specified in another InfoTypeLimit.
     *
     *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2.InfoType}
     *
     * @property {number} maxFindings
     *   Max findings limit for the given infoType.
     *
     * @typedef InfoTypeLimit
     * @memberof google.privacy.dlp.v2
     * @see [google.privacy.dlp.v2.InspectConfig.FindingLimits.InfoTypeLimit definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
     */
    InfoTypeLimit: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    }
  }
};

/**
 * Container for bytes to inspect or redact.
 *
 * @property {number} type
 *   The type of data stored in the bytes string. Default will be TEXT_UTF8.
 *
 *   The number should be among the values of [BytesType]{@link google.privacy.dlp.v2.BytesType}
 *
 * @property {string} data
 *   Content data to inspect or redact.
 *
 * @typedef ByteContentItem
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ByteContentItem definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ByteContentItem = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @enum {number}
   * @memberof google.privacy.dlp.v2
   */
  BytesType: {
    BYTES_TYPE_UNSPECIFIED: 0,
    IMAGE_JPEG: 1,
    IMAGE_BMP: 2,
    IMAGE_PNG: 3,
    IMAGE_SVG: 4,
    TEXT_UTF8: 5
  }
};

/**
 * Container structure for the content to inspect.
 *
 * @property {string} value
 *   String data to inspect or redact.
 *
 * @property {Object} table
 *   Structured content for inspection.
 *
 *   This object should have the same structure as [Table]{@link google.privacy.dlp.v2.Table}
 *
 * @property {Object} byteItem
 *   Content data to inspect or redact. Replaces `type` and `data`.
 *
 *   This object should have the same structure as [ByteContentItem]{@link google.privacy.dlp.v2.ByteContentItem}
 *
 * @typedef ContentItem
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ContentItem definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ContentItem = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Structured content to inspect. Up to 50,000 `Value`s per request allowed.
 *
 * @property {Object[]} headers
 *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
 *
 * @property {Object[]} rows
 *   This object should have the same structure as [Row]{@link google.privacy.dlp.v2.Row}
 *
 * @typedef Table
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.Table definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var Table = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @property {Object[]} values
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
   *
   * @typedef Row
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.Table.Row definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
 *   This object should have the same structure as [Finding]{@link google.privacy.dlp.v2.Finding}
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
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.InspectResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var InspectResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents a piece of potentially sensitive content.
 *
 * @property {string} quote
 *   The content that was found. Even if the content is not textual, it
 *   may be converted to a textual representation here.
 *   Provided if requested by the `InspectConfig` and the finding is
 *   less than or equal to 4096 bytes long. If the finding exceeds 4096 bytes
 *   in length, the quote may be omitted.
 *
 * @property {Object} infoType
 *   The type of content that might have been found.
 *   Provided if requested by the `InspectConfig`.
 *
 *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2.InfoType}
 *
 * @property {number} likelihood
 *   Estimate of how likely it is that the `info_type` is correct.
 *
 *   The number should be among the values of [Likelihood]{@link google.privacy.dlp.v2.Likelihood}
 *
 * @property {Object} location
 *   Where the content was found.
 *
 *   This object should have the same structure as [Location]{@link google.privacy.dlp.v2.Location}
 *
 * @property {Object} createTime
 *   Timestamp when finding was detected.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} quoteInfo
 *   Contains data parsed from quotes. Only populated if include_quote was set
 *   to true and a supported infoType was requested. Currently supported
 *   infoTypes: DATE, DATE_OF_BIRTH and TIME.
 *
 *   This object should have the same structure as [QuoteInfo]{@link google.privacy.dlp.v2.QuoteInfo}
 *
 * @typedef Finding
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.Finding definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var Finding = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Specifies the location of the finding.
 *
 * @property {Object} byteRange
 *   Zero-based byte offsets delimiting the finding.
 *   These are relative to the finding's containing element.
 *   Note that when the content is not textual, this references
 *   the UTF-8 encoded textual representation of the content.
 *   Omitted if content is an image.
 *
 *   This object should have the same structure as [Range]{@link google.privacy.dlp.v2.Range}
 *
 * @property {Object} codepointRange
 *   Unicode character offsets delimiting the finding.
 *   These are relative to the finding's containing element.
 *   Provided when the content is text.
 *
 *   This object should have the same structure as [Range]{@link google.privacy.dlp.v2.Range}
 *
 * @property {Object[]} contentLocations
 *   List of nested objects pointing to the precise location of the finding
 *   within the file or record.
 *
 *   This object should have the same structure as [ContentLocation]{@link google.privacy.dlp.v2.ContentLocation}
 *
 * @typedef Location
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.Location definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var Location = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Findings container location data.
 *
 * @property {string} containerName
 *   Name of the container where the finding is located.
 *   The top level name is the source file name or table name. Nested names
 *   could be absent if the embedded object has no string identifier
 *   (for an example an image contained within a document).
 *
 * @property {Object} recordLocation
 *   Location within a row or record of a database table.
 *
 *   This object should have the same structure as [RecordLocation]{@link google.privacy.dlp.v2.RecordLocation}
 *
 * @property {Object} imageLocation
 *   Location within an image's pixels.
 *
 *   This object should have the same structure as [ImageLocation]{@link google.privacy.dlp.v2.ImageLocation}
 *
 * @property {Object} documentLocation
 *   Location data for document files.
 *
 *   This object should have the same structure as [DocumentLocation]{@link google.privacy.dlp.v2.DocumentLocation}
 *
 * @property {Object} containerTimestamp
 *   Findings container modification timestamp, if applicable.
 *   For Google Cloud Storage contains last file modification timestamp.
 *   For BigQuery table contains last_modified_time property.
 *   For Datastore - not populated.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} containerVersion
 *   Findings container version, if available
 *   ("generation" for Google Cloud Storage).
 *
 * @typedef ContentLocation
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ContentLocation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ContentLocation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Location of a finding within a document.
 *
 * @property {number} fileOffset
 *   Offset of the line, from the beginning of the file, where the finding
 *   is located.
 *
 * @typedef DocumentLocation
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.DocumentLocation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var DocumentLocation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Location of a finding within a row or record.
 *
 * @property {Object} recordKey
 *   Key of the finding.
 *
 *   This object should have the same structure as [RecordKey]{@link google.privacy.dlp.v2.RecordKey}
 *
 * @property {Object} fieldId
 *   Field id of the field containing the finding.
 *
 *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
 *
 * @property {Object} tableLocation
 *   Location within a `ContentItem.Table`.
 *
 *   This object should have the same structure as [TableLocation]{@link google.privacy.dlp.v2.TableLocation}
 *
 * @typedef RecordLocation
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.RecordLocation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var RecordLocation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Location of a finding within a table.
 *
 * @property {number} rowIndex
 *   The zero-based index of the row where the finding is located.
 *
 * @typedef TableLocation
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.TableLocation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.Range definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var Range = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Location of the finding within an image.
 *
 * @property {Object[]} boundingBoxes
 *   Bounding boxes locating the pixels within the image containing the finding.
 *
 *   This object should have the same structure as [BoundingBox]{@link google.privacy.dlp.v2.BoundingBox}
 *
 * @typedef ImageLocation
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ImageLocation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ImageLocation = {
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
 * @typedef BoundingBox
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.BoundingBox definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var BoundingBox = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to search for potentially sensitive info in a list of items
 * and replace it with a default or provided content.
 *
 * @property {string} parent
 *   The parent resource name, for example projects/my-project-id.
 *
 * @property {Object} inspectConfig
 *   Configuration for the inspector.
 *
 *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2.InspectConfig}
 *
 * @property {Object[]} imageRedactionConfigs
 *   The configuration for specifying what content to redact from images.
 *
 *   This object should have the same structure as [ImageRedactionConfig]{@link google.privacy.dlp.v2.ImageRedactionConfig}
 *
 * @property {Object} byteItem
 *   The content must be PNG, JPEG, SVG or BMP.
 *
 *   This object should have the same structure as [ByteContentItem]{@link google.privacy.dlp.v2.ByteContentItem}
 *
 * @typedef RedactImageRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.RedactImageRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var RedactImageRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Configuration for determining how redaction of images should occur.
   *
   * @property {Object} infoType
   *   Only one per info_type should be provided per request. If not
   *   specified, and redact_all_text is false, the DLP API will redact all
   *   text that it matches against all info_types that are found, but not
   *   specified in another ImageRedactionConfig.
   *
   *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2.InfoType}
   *
   * @property {boolean} redactAllText
   *   If true, all text found in the image, regardless whether it matches an
   *   info_type, is redacted.
   *
   * @property {Object} redactionColor
   *   The color to use when redacting content from an image. If not specified,
   *   the default is black.
   *
   *   This object should have the same structure as [Color]{@link google.privacy.dlp.v2.Color}
   *
   * @typedef ImageRedactionConfig
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.RedactImageRequest.ImageRedactionConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.Color definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var Color = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of redacting an image.
 *
 * @property {string} redactedImage
 *   The redacted image. The type will be the same as the original image.
 *
 * @property {string} extractedText
 *   If an image was being inspected and the InspectConfig's include_quote was
 *   set to true, then this field will include all text, if any, that was found
 *   in the image.
 *
 * @typedef RedactImageResponse
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.RedactImageResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var RedactImageResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to de-identify a list of items.
 *
 * @property {string} parent
 *   The parent resource name, for example projects/my-project-id.
 *
 * @property {Object} deidentifyConfig
 *   Configuration for the de-identification of the content item.
 *   Items specified here will override the template referenced by the
 *   deidentify_template_name argument.
 *
 *   This object should have the same structure as [DeidentifyConfig]{@link google.privacy.dlp.v2.DeidentifyConfig}
 *
 * @property {Object} inspectConfig
 *   Configuration for the inspector.
 *   Items specified here will override the template referenced by the
 *   inspect_template_name argument.
 *
 *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2.InspectConfig}
 *
 * @property {Object} item
 *   The item to de-identify. Will be treated as text.
 *
 *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2.ContentItem}
 *
 * @property {string} inspectTemplateName
 *   Optional template to use. Any configuration directly specified in
 *   inspect_config will override those set in the template. Singular fields
 *   that are set in this request will replace their corresponding fields in the
 *   template. Repeated fields are appended. Singular sub-messages and groups
 *   are recursively merged.
 *
 * @property {string} deidentifyTemplateName
 *   Optional template to use. Any configuration directly specified in
 *   deidentify_config will override those set in the template. Singular fields
 *   that are set in this request will replace their corresponding fields in the
 *   template. Repeated fields are appended. Singular sub-messages and groups
 *   are recursively merged.
 *
 * @typedef DeidentifyContentRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.DeidentifyContentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var DeidentifyContentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of de-identifying a ContentItem.
 *
 * @property {Object} item
 *   The de-identified item.
 *
 *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2.ContentItem}
 *
 * @property {Object} overview
 *   An overview of the changes that were made on the `item`.
 *
 *   This object should have the same structure as [TransformationOverview]{@link google.privacy.dlp.v2.TransformationOverview}
 *
 * @typedef DeidentifyContentResponse
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.DeidentifyContentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var DeidentifyContentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to re-identify an item.
 *
 * @property {string} parent
 *   The parent resource name.
 *
 * @property {Object} reidentifyConfig
 *   Configuration for the re-identification of the content item.
 *   This field shares the same proto message type that is used for
 *   de-identification, however its usage here is for the reversal of the
 *   previous de-identification. Re-identification is performed by examining
 *   the transformations used to de-identify the items and executing the
 *   reverse. This requires that only reversible transformations
 *   be provided here. The reversible transformations are:
 *
 *    - `CryptoReplaceFfxFpeConfig`
 *
 *   This object should have the same structure as [DeidentifyConfig]{@link google.privacy.dlp.v2.DeidentifyConfig}
 *
 * @property {Object} inspectConfig
 *   Configuration for the inspector.
 *
 *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2.InspectConfig}
 *
 * @property {Object} item
 *   The item to re-identify. Will be treated as text.
 *
 *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2.ContentItem}
 *
 * @property {string} inspectTemplateName
 *   Optional template to use. Any configuration directly specified in
 *   `inspect_config` will override those set in the template. Singular fields
 *   that are set in this request will replace their corresponding fields in the
 *   template. Repeated fields are appended. Singular sub-messages and groups
 *   are recursively merged.
 *
 * @property {string} reidentifyTemplateName
 *   Optional template to use. References an instance of `DeidentifyTemplate`.
 *   Any configuration directly specified in `reidentify_config` or
 *   `inspect_config` will override those set in the template. Singular fields
 *   that are set in this request will replace their corresponding fields in the
 *   template. Repeated fields are appended. Singular sub-messages and groups
 *   are recursively merged.
 *
 * @typedef ReidentifyContentRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ReidentifyContentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ReidentifyContentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of re-identifying a item.
 *
 * @property {Object} item
 *   The re-identified item.
 *
 *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2.ContentItem}
 *
 * @property {Object} overview
 *   An overview of the changes that were made to the `item`.
 *
 *   This object should have the same structure as [TransformationOverview]{@link google.privacy.dlp.v2.TransformationOverview}
 *
 * @typedef ReidentifyContentResponse
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ReidentifyContentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ReidentifyContentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to search for potentially sensitive info in a ContentItem.
 *
 * @property {string} parent
 *   The parent resource name, for example projects/my-project-id.
 *
 * @property {Object} inspectConfig
 *   Configuration for the inspector. What specified here will override
 *   the template referenced by the inspect_template_name argument.
 *
 *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2.InspectConfig}
 *
 * @property {Object} item
 *   The item to inspect.
 *
 *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2.ContentItem}
 *
 * @property {string} inspectTemplateName
 *   Optional template to use. Any configuration directly specified in
 *   inspect_config will override those set in the template. Singular fields
 *   that are set in this request will replace their corresponding fields in the
 *   template. Repeated fields are appended. Singular sub-messages and groups
 *   are recursively merged.
 *
 * @typedef InspectContentRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.InspectContentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var InspectContentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results of inspecting an item.
 *
 * @property {Object} result
 *   The findings.
 *
 *   This object should have the same structure as [InspectResult]{@link google.privacy.dlp.v2.InspectResult}
 *
 * @typedef InspectContentResponse
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.InspectContentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var InspectContentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Cloud repository for storing output.
 *
 * @property {Object} table
 *   Store findings in an existing table or a new table in an existing
 *   dataset. Each column in an existing table must have the same name, type,
 *   and mode of a field in the `Finding` object. If table_id is not set a new
 *   one will be generated for you with the following format:
 *   dlp_googleapis_yyyy_mm_dd_[dlp_job_id]. Pacific timezone will be used for
 *   generating the date details.
 *
 *   This object should have the same structure as [BigQueryTable]{@link google.privacy.dlp.v2.BigQueryTable}
 *
 * @property {number} outputSchema
 *   Schema used for writing the findings. Columns are derived from the
 *   `Finding` object. If appending to an existing table, any columns from the
 *   predefined schema that are missing will be added. No columns in the
 *   existing table will be deleted.
 *
 *   If unspecified, then all available columns will be used for a new table,
 *   and no changes will be made to an existing table.
 *
 *   The number should be among the values of [OutputSchema]{@link google.privacy.dlp.v2.OutputSchema}
 *
 * @typedef OutputStorageConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.OutputStorageConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var OutputStorageConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Predefined schemas for storing findings.
   *
   * @enum {number}
   * @memberof google.privacy.dlp.v2
   */
  OutputSchema: {
    OUTPUT_SCHEMA_UNSPECIFIED: 0,

    /**
     * Basic schema including only `info_type`, `quote`, `certainty`, and
     * `timestamp`.
     */
    BASIC_COLUMNS: 1,

    /**
     * Schema tailored to findings from scanning Google Cloud Storage.
     */
    GCS_COLUMNS: 2,

    /**
     * Schema tailored to findings from scanning Google Datastore.
     */
    DATASTORE_COLUMNS: 3,

    /**
     * Schema tailored to findings from scanning Google BigQuery.
     */
    BIG_QUERY_COLUMNS: 4,

    /**
     * Schema containing all columns.
     */
    ALL_COLUMNS: 5
  }
};

/**
 * Statistics regarding a specific InfoType.
 *
 * @property {Object} infoType
 *   The type of finding this stat is for.
 *
 *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2.InfoType}
 *
 * @property {number} count
 *   Number of findings for this infoType.
 *
 * @typedef InfoTypeStats
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.InfoTypeStats definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var InfoTypeStats = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The results of an inspect DataSource job.
 *
 * @property {Object} requestedOptions
 *   The configuration used for this job.
 *
 *   This object should have the same structure as [RequestedOptions]{@link google.privacy.dlp.v2.RequestedOptions}
 *
 * @property {Object} result
 *   A summary of the outcome of this inspect job.
 *
 *   This object should have the same structure as [Result]{@link google.privacy.dlp.v2.Result}
 *
 * @typedef InspectDataSourceDetails
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.InspectDataSourceDetails definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var InspectDataSourceDetails = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @property {Object} snapshotInspectTemplate
   *   If run with an inspect template, a snapshot of it's state at the time of
   *   this run.
   *
   *   This object should have the same structure as [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate}
   *
   * @property {Object} jobConfig
   *   This object should have the same structure as [InspectJobConfig]{@link google.privacy.dlp.v2.InspectJobConfig}
   *
   * @typedef RequestedOptions
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.InspectDataSourceDetails.RequestedOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  RequestedOptions: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * @property {number} processedBytes
   *   Total size in bytes that were processed.
   *
   * @property {number} totalEstimatedBytes
   *   Estimate of the number of bytes to process.
   *
   * @property {Object[]} infoTypeStats
   *   Statistics of how many instances of each info type were found during
   *   inspect job.
   *
   *   This object should have the same structure as [InfoTypeStats]{@link google.privacy.dlp.v2.InfoTypeStats}
   *
   * @typedef Result
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.InspectDataSourceDetails.Result definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  Result: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * InfoType description.
 *
 * @property {string} name
 *   Internal name of the infoType.
 *
 * @property {string} displayName
 *   Human readable form of the infoType name.
 *
 * @property {number[]} supportedBy
 *   Which parts of the API supports this InfoType.
 *
 *   The number should be among the values of [InfoTypeSupportedBy]{@link google.privacy.dlp.v2.InfoTypeSupportedBy}
 *
 * @typedef InfoTypeDescription
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.InfoTypeDescription definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var InfoTypeDescription = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the list of infoTypes.
 *
 * @property {string} languageCode
 *   Optional BCP-47 language code for localized infoType friendly
 *   names. If omitted, or if localized strings are not available,
 *   en-US strings will be returned.
 *
 * @property {string} filter
 *   Optional filter to only return infoTypes supported by certain parts of the
 *   API. Defaults to supported_by=INSPECT.
 *
 * @typedef ListInfoTypesRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ListInfoTypesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ListInfoTypesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response to the ListInfoTypes request.
 *
 * @property {Object[]} infoTypes
 *   Set of sensitive infoTypes.
 *
 *   This object should have the same structure as [InfoTypeDescription]{@link google.privacy.dlp.v2.InfoTypeDescription}
 *
 * @typedef ListInfoTypesResponse
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ListInfoTypesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ListInfoTypesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration for a risk analysis job.
 *
 * @property {Object} privacyMetric
 *   Privacy metric to compute.
 *
 *   This object should have the same structure as [PrivacyMetric]{@link google.privacy.dlp.v2.PrivacyMetric}
 *
 * @property {Object} sourceTable
 *   Input dataset to compute metrics over.
 *
 *   This object should have the same structure as [BigQueryTable]{@link google.privacy.dlp.v2.BigQueryTable}
 *
 * @property {Object[]} actions
 *   Actions to execute at the completion of the job. Are executed in the order
 *   provided.
 *
 *   This object should have the same structure as [Action]{@link google.privacy.dlp.v2.Action}
 *
 * @typedef RiskAnalysisJobConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.RiskAnalysisJobConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var RiskAnalysisJobConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Privacy metric to compute for reidentification risk analysis.
 *
 * @property {Object} numericalStatsConfig
 *   This object should have the same structure as [NumericalStatsConfig]{@link google.privacy.dlp.v2.NumericalStatsConfig}
 *
 * @property {Object} categoricalStatsConfig
 *   This object should have the same structure as [CategoricalStatsConfig]{@link google.privacy.dlp.v2.CategoricalStatsConfig}
 *
 * @property {Object} kAnonymityConfig
 *   This object should have the same structure as [KAnonymityConfig]{@link google.privacy.dlp.v2.KAnonymityConfig}
 *
 * @property {Object} lDiversityConfig
 *   This object should have the same structure as [LDiversityConfig]{@link google.privacy.dlp.v2.LDiversityConfig}
 *
 * @property {Object} kMapEstimationConfig
 *   This object should have the same structure as [KMapEstimationConfig]{@link google.privacy.dlp.v2.KMapEstimationConfig}
 *
 * @typedef PrivacyMetric
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.PrivacyMetric definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
   *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
   *
   * @typedef NumericalStatsConfig
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.PrivacyMetric.NumericalStatsConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
   *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
   *
   * @typedef CategoricalStatsConfig
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.PrivacyMetric.CategoricalStatsConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
   *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
   *
   * @typedef KAnonymityConfig
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.PrivacyMetric.KAnonymityConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
   *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
   *
   * @property {Object} sensitiveAttribute
   *   Sensitive field for computing the l-value.
   *
   *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
   *
   * @typedef LDiversityConfig
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.PrivacyMetric.LDiversityConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  LDiversityConfig: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Reidentifiability metric. This corresponds to a risk model similar to what
   * is called "journalist risk" in the literature, except the attack dataset is
   * statistically modeled instead of being perfectly known. This can be done
   * using publicly available data (like the US Census), or using a custom
   * statistical model (indicated as one or several BigQuery tables), or by
   * extrapolating from the distribution of values in the input dataset.
   *
   * @property {Object[]} quasiIds
   *   Fields considered to be quasi-identifiers. No two columns can have the
   *   same tag. [required]
   *
   *   This object should have the same structure as [TaggedField]{@link google.privacy.dlp.v2.TaggedField}
   *
   * @property {string} regionCode
   *   ISO 3166-1 alpha-2 region code to use in the statistical modeling.
   *   Required if no column is tagged with a region-specific InfoType (like
   *   US_ZIP_5) or a region code.
   *
   * @property {Object[]} auxiliaryTables
   *   Several auxiliary tables can be used in the analysis. Each custom_tag
   *   used to tag a quasi-identifiers column must appear in exactly one column
   *   of one auxiliary table.
   *
   *   This object should have the same structure as [AuxiliaryTable]{@link google.privacy.dlp.v2.AuxiliaryTable}
   *
   * @typedef KMapEstimationConfig
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.PrivacyMetric.KMapEstimationConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  KMapEstimationConfig: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * A column with a semantic tag attached.
     *
     * @property {Object} field
     *   Identifies the column. [required]
     *
     *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
     *
     * @property {Object} infoType
     *   A column can be tagged with a InfoType to use the relevant public
     *   dataset as a statistical model of population, if available. We
     *   currently support US ZIP codes, region codes, ages and genders.
     *   To programmatically obtain the list of supported InfoTypes, use
     *   ListInfoTypes with the supported_by=RISK_ANALYSIS filter.
     *
     *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2.InfoType}
     *
     * @property {string} customTag
     *   A column can be tagged with a custom tag. In this case, the user must
     *   indicate an auxiliary table that contains statistical information on
     *   the possible values of this column (below).
     *
     * @property {Object} inferred
     *   If no semantic tag is indicated, we infer the statistical model from
     *   the distribution of values in the input data
     *
     *   This object should have the same structure as [Empty]{@link google.protobuf.Empty}
     *
     * @typedef TaggedField
     * @memberof google.privacy.dlp.v2
     * @see [google.privacy.dlp.v2.PrivacyMetric.KMapEstimationConfig.TaggedField definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
     */
    TaggedField: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * An auxiliary table contains statistical information on the relative
     * frequency of different quasi-identifiers values. It has one or several
     * quasi-identifiers columns, and one column that indicates the relative
     * frequency of each quasi-identifier tuple.
     * If a tuple is present in the data but not in the auxiliary table, the
     * corresponding relative frequency is assumed to be zero (and thus, the
     * tuple is highly reidentifiable).
     *
     * @property {Object} table
     *   Auxiliary table location. [required]
     *
     *   This object should have the same structure as [BigQueryTable]{@link google.privacy.dlp.v2.BigQueryTable}
     *
     * @property {Object[]} quasiIds
     *   Quasi-identifier columns. [required]
     *
     *   This object should have the same structure as [QuasiIdField]{@link google.privacy.dlp.v2.QuasiIdField}
     *
     * @property {Object} relativeFrequency
     *   The relative frequency column must contain a floating-point number
     *   between 0 and 1 (inclusive). Null values are assumed to be zero.
     *   [required]
     *
     *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
     *
     * @typedef AuxiliaryTable
     * @memberof google.privacy.dlp.v2
     * @see [google.privacy.dlp.v2.PrivacyMetric.KMapEstimationConfig.AuxiliaryTable definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
     */
    AuxiliaryTable: {
      // This is for documentation. Actual contents will be loaded by gRPC.

      /**
       * A quasi-identifier column has a custom_tag, used to know which column
       * in the data corresponds to which column in the statistical model.
       *
       * @property {Object} field
       *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
       *
       * @property {string} customTag
       *
       * @typedef QuasiIdField
       * @memberof google.privacy.dlp.v2
       * @see [google.privacy.dlp.v2.PrivacyMetric.KMapEstimationConfig.AuxiliaryTable.QuasiIdField definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
       */
      QuasiIdField: {
        // This is for documentation. Actual contents will be loaded by gRPC.
      }
    }
  }
};

/**
 * Result of a risk analysis operation request.
 *
 * @property {Object} requestedPrivacyMetric
 *   Privacy metric to compute.
 *
 *   This object should have the same structure as [PrivacyMetric]{@link google.privacy.dlp.v2.PrivacyMetric}
 *
 * @property {Object} requestedSourceTable
 *   Input dataset to compute metrics over.
 *
 *   This object should have the same structure as [BigQueryTable]{@link google.privacy.dlp.v2.BigQueryTable}
 *
 * @property {Object} numericalStatsResult
 *   This object should have the same structure as [NumericalStatsResult]{@link google.privacy.dlp.v2.NumericalStatsResult}
 *
 * @property {Object} categoricalStatsResult
 *   This object should have the same structure as [CategoricalStatsResult]{@link google.privacy.dlp.v2.CategoricalStatsResult}
 *
 * @property {Object} kAnonymityResult
 *   This object should have the same structure as [KAnonymityResult]{@link google.privacy.dlp.v2.KAnonymityResult}
 *
 * @property {Object} lDiversityResult
 *   This object should have the same structure as [LDiversityResult]{@link google.privacy.dlp.v2.LDiversityResult}
 *
 * @property {Object} kMapEstimationResult
 *   This object should have the same structure as [KMapEstimationResult]{@link google.privacy.dlp.v2.KMapEstimationResult}
 *
 * @typedef AnalyzeDataSourceRiskDetails
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.AnalyzeDataSourceRiskDetails definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var AnalyzeDataSourceRiskDetails = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Result of the numerical stats computation.
   *
   * @property {Object} minValue
   *   Minimum value appearing in the column.
   *
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
   *
   * @property {Object} maxValue
   *   Maximum value appearing in the column.
   *
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
   *
   * @property {Object[]} quantileValues
   *   List of 99 values that partition the set of field values into 100 equal
   *   sized buckets.
   *
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
   *
   * @typedef NumericalStatsResult
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.AnalyzeDataSourceRiskDetails.NumericalStatsResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
   *   This object should have the same structure as [CategoricalStatsHistogramBucket]{@link google.privacy.dlp.v2.CategoricalStatsHistogramBucket}
   *
   * @typedef CategoricalStatsResult
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.AnalyzeDataSourceRiskDetails.CategoricalStatsResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  CategoricalStatsResult: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * @property {number} valueFrequencyLowerBound
     *   Lower bound on the value frequency of the values in this bucket.
     *
     * @property {number} valueFrequencyUpperBound
     *   Upper bound on the value frequency of the values in this bucket.
     *
     * @property {number} bucketSize
     *   Total number of values in this bucket.
     *
     * @property {Object[]} bucketValues
     *   Sample of value frequencies in this bucket. The total number of
     *   values returned per bucket is capped at 20.
     *
     *   This object should have the same structure as [ValueFrequency]{@link google.privacy.dlp.v2.ValueFrequency}
     *
     * @property {number} bucketValueCount
     *   Total number of distinct values in this bucket.
     *
     * @typedef CategoricalStatsHistogramBucket
     * @memberof google.privacy.dlp.v2
     * @see [google.privacy.dlp.v2.AnalyzeDataSourceRiskDetails.CategoricalStatsResult.CategoricalStatsHistogramBucket definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
   *   This object should have the same structure as [KAnonymityHistogramBucket]{@link google.privacy.dlp.v2.KAnonymityHistogramBucket}
   *
   * @typedef KAnonymityResult
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.AnalyzeDataSourceRiskDetails.KAnonymityResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  KAnonymityResult: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * The set of columns' values that share the same ldiversity value
     *
     * @property {Object[]} quasiIdsValues
     *   Set of values defining the equivalence class. One value per
     *   quasi-identifier column in the original KAnonymity metric message.
     *   The order is always the same as the original request.
     *
     *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
     *
     * @property {number} equivalenceClassSize
     *   Size of the equivalence class, for example number of rows with the
     *   above set of values.
     *
     * @typedef KAnonymityEquivalenceClass
     * @memberof google.privacy.dlp.v2
     * @see [google.privacy.dlp.v2.AnalyzeDataSourceRiskDetails.KAnonymityResult.KAnonymityEquivalenceClass definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
     */
    KAnonymityEquivalenceClass: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * @property {number} equivalenceClassSizeLowerBound
     *   Lower bound on the size of the equivalence classes in this bucket.
     *
     * @property {number} equivalenceClassSizeUpperBound
     *   Upper bound on the size of the equivalence classes in this bucket.
     *
     * @property {number} bucketSize
     *   Total number of equivalence classes in this bucket.
     *
     * @property {Object[]} bucketValues
     *   Sample of equivalence classes in this bucket. The total number of
     *   classes returned per bucket is capped at 20.
     *
     *   This object should have the same structure as [KAnonymityEquivalenceClass]{@link google.privacy.dlp.v2.KAnonymityEquivalenceClass}
     *
     * @property {number} bucketValueCount
     *   Total number of distinct equivalence classes in this bucket.
     *
     * @typedef KAnonymityHistogramBucket
     * @memberof google.privacy.dlp.v2
     * @see [google.privacy.dlp.v2.AnalyzeDataSourceRiskDetails.KAnonymityResult.KAnonymityHistogramBucket definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
   *   This object should have the same structure as [LDiversityHistogramBucket]{@link google.privacy.dlp.v2.LDiversityHistogramBucket}
   *
   * @typedef LDiversityResult
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.AnalyzeDataSourceRiskDetails.LDiversityResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  LDiversityResult: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * The set of columns' values that share the same ldiversity value.
     *
     * @property {Object[]} quasiIdsValues
     *   Quasi-identifier values defining the k-anonymity equivalence
     *   class. The order is always the same as the original request.
     *
     *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
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
     *   This object should have the same structure as [ValueFrequency]{@link google.privacy.dlp.v2.ValueFrequency}
     *
     * @typedef LDiversityEquivalenceClass
     * @memberof google.privacy.dlp.v2
     * @see [google.privacy.dlp.v2.AnalyzeDataSourceRiskDetails.LDiversityResult.LDiversityEquivalenceClass definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
     */
    LDiversityEquivalenceClass: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * @property {number} sensitiveValueFrequencyLowerBound
     *   Lower bound on the sensitive value frequencies of the equivalence
     *   classes in this bucket.
     *
     * @property {number} sensitiveValueFrequencyUpperBound
     *   Upper bound on the sensitive value frequencies of the equivalence
     *   classes in this bucket.
     *
     * @property {number} bucketSize
     *   Total number of equivalence classes in this bucket.
     *
     * @property {Object[]} bucketValues
     *   Sample of equivalence classes in this bucket. The total number of
     *   classes returned per bucket is capped at 20.
     *
     *   This object should have the same structure as [LDiversityEquivalenceClass]{@link google.privacy.dlp.v2.LDiversityEquivalenceClass}
     *
     * @property {number} bucketValueCount
     *   Total number of distinct equivalence classes in this bucket.
     *
     * @typedef LDiversityHistogramBucket
     * @memberof google.privacy.dlp.v2
     * @see [google.privacy.dlp.v2.AnalyzeDataSourceRiskDetails.LDiversityResult.LDiversityHistogramBucket definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
     */
    LDiversityHistogramBucket: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    }
  },

  /**
   * Result of the reidentifiability analysis. Note that these results are an
   * estimation, not exact values.
   *
   * @property {Object[]} kMapEstimationHistogram
   *   The intervals [min_anonymity, max_anonymity] do not overlap. If a value
   *   doesn't correspond to any such interval, the associated frequency is
   *   zero. For example, the following records:
   *     {min_anonymity: 1, max_anonymity: 1, frequency: 17}
   *     {min_anonymity: 2, max_anonymity: 3, frequency: 42}
   *     {min_anonymity: 5, max_anonymity: 10, frequency: 99}
   *   mean that there are no record with an estimated anonymity of 4, 5, or
   *   larger than 10.
   *
   *   This object should have the same structure as [KMapEstimationHistogramBucket]{@link google.privacy.dlp.v2.KMapEstimationHistogramBucket}
   *
   * @typedef KMapEstimationResult
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.AnalyzeDataSourceRiskDetails.KMapEstimationResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  KMapEstimationResult: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * A tuple of values for the quasi-identifier columns.
     *
     * @property {Object[]} quasiIdsValues
     *   The quasi-identifier values.
     *
     *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
     *
     * @property {number} estimatedAnonymity
     *   The estimated anonymity for these quasi-identifier values.
     *
     * @typedef KMapEstimationQuasiIdValues
     * @memberof google.privacy.dlp.v2
     * @see [google.privacy.dlp.v2.AnalyzeDataSourceRiskDetails.KMapEstimationResult.KMapEstimationQuasiIdValues definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
     */
    KMapEstimationQuasiIdValues: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * A KMapEstimationHistogramBucket message with the following values:
     *   min_anonymity: 3
     *   max_anonymity: 5
     *   frequency: 42
     * means that there are 42 records whose quasi-identifier values correspond
     * to 3, 4 or 5 people in the overlying population. An important particular
     * case is when min_anonymity = max_anonymity = 1: the frequency field then
     * corresponds to the number of uniquely identifiable records.
     *
     * @property {number} minAnonymity
     *   Always positive.
     *
     * @property {number} maxAnonymity
     *   Always greater than or equal to min_anonymity.
     *
     * @property {number} bucketSize
     *   Number of records within these anonymity bounds.
     *
     * @property {Object[]} bucketValues
     *   Sample of quasi-identifier tuple values in this bucket. The total
     *   number of classes returned per bucket is capped at 20.
     *
     *   This object should have the same structure as [KMapEstimationQuasiIdValues]{@link google.privacy.dlp.v2.KMapEstimationQuasiIdValues}
     *
     * @property {number} bucketValueCount
     *   Total number of distinct quasi-identifier tuple values in this bucket.
     *
     * @typedef KMapEstimationHistogramBucket
     * @memberof google.privacy.dlp.v2
     * @see [google.privacy.dlp.v2.AnalyzeDataSourceRiskDetails.KMapEstimationResult.KMapEstimationHistogramBucket definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
     */
    KMapEstimationHistogramBucket: {
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
 *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
 *
 * @property {number} count
 *   How many times the value is contained in the field.
 *
 * @typedef ValueFrequency
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ValueFrequency definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ValueFrequency = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Set of primitive values supported by the system.
 * Note that for the purposes of inspection or transformation, the number
 * of bytes considered to comprise a 'Value' is based on its representation
 * as a UTF-8 encoded string. For example, if 'integer_value' is set to
 * 123456789, the number of bytes would be counted as 9, even though an
 * int64 only holds up to 8 bytes of data.
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
 * @property {number} dayOfWeekValue
 *   The number should be among the values of [DayOfWeek]{@link google.type.DayOfWeek}
 *
 * @typedef Value
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.Value definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var Value = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Message for infoType-dependent details parsed from quote.
 *
 * @property {Object} dateTime
 *   This object should have the same structure as [DateTime]{@link google.privacy.dlp.v2.DateTime}
 *
 * @typedef QuoteInfo
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.QuoteInfo definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var QuoteInfo = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Message for a date time object.
 *
 * @property {Object} date
 *   One or more of the following must be set. All fields are optional, but
 *   when set must be valid date or time values.
 *
 *   This object should have the same structure as [Date]{@link google.type.Date}
 *
 * @property {number} dayOfWeek
 *   The number should be among the values of [DayOfWeek]{@link google.type.DayOfWeek}
 *
 * @property {Object} time
 *   This object should have the same structure as [TimeOfDay]{@link google.type.TimeOfDay}
 *
 * @property {Object} timeZone
 *   This object should have the same structure as [TimeZone]{@link google.privacy.dlp.v2.TimeZone}
 *
 * @typedef DateTime
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.DateTime definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var DateTime = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @property {number} offsetMinutes
   *   Set only if the offset can be determined. Positive for time ahead of UTC.
   *   E.g. For "UTC-9", this value is -540.
   *
   * @typedef TimeZone
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.DateTime.TimeZone definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  TimeZone: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * The configuration that controls how the data will change.
 *
 * @property {Object} infoTypeTransformations
 *   Treat the dataset as free-form text and apply the same free text
 *   transformation everywhere.
 *
 *   This object should have the same structure as [InfoTypeTransformations]{@link google.privacy.dlp.v2.InfoTypeTransformations}
 *
 * @property {Object} recordTransformations
 *   Treat the dataset as structured. Transformations can be applied to
 *   specific locations within structured datasets, such as transforming
 *   a column within a table.
 *
 *   This object should have the same structure as [RecordTransformations]{@link google.privacy.dlp.v2.RecordTransformations}
 *
 * @typedef DeidentifyConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.DeidentifyConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var DeidentifyConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A rule for transforming a value.
 *
 * @property {Object} replaceConfig
 *   This object should have the same structure as [ReplaceValueConfig]{@link google.privacy.dlp.v2.ReplaceValueConfig}
 *
 * @property {Object} redactConfig
 *   This object should have the same structure as [RedactConfig]{@link google.privacy.dlp.v2.RedactConfig}
 *
 * @property {Object} characterMaskConfig
 *   This object should have the same structure as [CharacterMaskConfig]{@link google.privacy.dlp.v2.CharacterMaskConfig}
 *
 * @property {Object} cryptoReplaceFfxFpeConfig
 *   This object should have the same structure as [CryptoReplaceFfxFpeConfig]{@link google.privacy.dlp.v2.CryptoReplaceFfxFpeConfig}
 *
 * @property {Object} fixedSizeBucketingConfig
 *   This object should have the same structure as [FixedSizeBucketingConfig]{@link google.privacy.dlp.v2.FixedSizeBucketingConfig}
 *
 * @property {Object} bucketingConfig
 *   This object should have the same structure as [BucketingConfig]{@link google.privacy.dlp.v2.BucketingConfig}
 *
 * @property {Object} replaceWithInfoTypeConfig
 *   This object should have the same structure as [ReplaceWithInfoTypeConfig]{@link google.privacy.dlp.v2.ReplaceWithInfoTypeConfig}
 *
 * @property {Object} timePartConfig
 *   This object should have the same structure as [TimePartConfig]{@link google.privacy.dlp.v2.TimePartConfig}
 *
 * @property {Object} cryptoHashConfig
 *   This object should have the same structure as [CryptoHashConfig]{@link google.privacy.dlp.v2.CryptoHashConfig}
 *
 * @property {Object} dateShiftConfig
 *   This object should have the same structure as [DateShiftConfig]{@link google.privacy.dlp.v2.DateShiftConfig}
 *
 * @typedef PrimitiveTransformation
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.PrimitiveTransformation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var PrimitiveTransformation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a
 * portion of the value.
 *
 * @property {number} partToExtract
 *   The number should be among the values of [TimePart]{@link google.privacy.dlp.v2.TimePart}
 *
 * @typedef TimePartConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.TimePartConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var TimePartConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @enum {number}
   * @memberof google.privacy.dlp.v2
   */
  TimePart: {
    TIME_PART_UNSPECIFIED: 0,

    /**
     * [0-9999]
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
     * [0-23]
     */
    HOUR_OF_DAY: 6
  }
};

/**
 * Pseudonymization method that generates surrogates via cryptographic hashing.
 * Uses SHA-256.
 * The key size must be either 32 or 64 bytes.
 * Outputs a 32 byte digest as an uppercase hex string
 * (for example, 41D1567F7F99F1DC2A5FAB886DEE5BEE).
 * Currently, only string and integer values can be hashed.
 *
 * @property {Object} cryptoKey
 *   The key used by the hash function.
 *
 *   This object should have the same structure as [CryptoKey]{@link google.privacy.dlp.v2.CryptoKey}
 *
 * @typedef CryptoHashConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.CryptoHashConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
 *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
 *
 * @typedef ReplaceValueConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ReplaceValueConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ReplaceValueConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Replace each matching finding with the name of the info_type.
 * @typedef ReplaceWithInfoTypeConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ReplaceWithInfoTypeConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ReplaceWithInfoTypeConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Redact a given value. For example, if used with an `InfoTypeTransformation`
 * transforming PHONE_NUMBER, and input 'My phone number is 206-555-0123', the
 * output would be 'My phone number is '.
 * @typedef RedactConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.RedactConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
 *   The number should be among the values of [CommonCharsToIgnore]{@link google.privacy.dlp.v2.CommonCharsToIgnore}
 *
 * @typedef CharsToIgnore
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.CharsToIgnore definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var CharsToIgnore = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @enum {number}
   * @memberof google.privacy.dlp.v2
   */
  CommonCharsToIgnore: {
    COMMON_CHARS_TO_IGNORE_UNSPECIFIED: 0,

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
 *   This object should have the same structure as [CharsToIgnore]{@link google.privacy.dlp.v2.CharsToIgnore}
 *
 * @typedef CharacterMaskConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.CharacterMaskConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var CharacterMaskConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Buckets values based on fixed size ranges. The
 * Bucketing transformation can provide all of this functionality,
 * but requires more configuration. This message is provided as a convenience to
 * the user for simple bucketing strategies.
 *
 * The transformed value will be a hyphenated string of
 * <lower_bound>-<upper_bound>, i.e if lower_bound = 10 and upper_bound = 20
 * all values that are within this bucket will be replaced with "10-20".
 *
 * This can be used on data of type: double, long.
 *
 * If the bound Value type differs from the type of data
 * being transformed, we will first attempt converting the type of the data to
 * be transformed to match the type of the bound before comparing.
 *
 * @property {Object} lowerBound
 *   Lower bound value of buckets. All values less than `lower_bound` are
 *   grouped together into a single bucket; for example if `lower_bound` = 10,
 *   then all values less than 10 are replaced with the value “-10”. [Required].
 *
 *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
 *
 * @property {Object} upperBound
 *   Upper bound value of buckets. All values greater than upper_bound are
 *   grouped together into a single bucket; for example if `upper_bound` = 89,
 *   then all values greater than 89 are replaced with the value “89+”.
 *   [Required].
 *
 *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
 *
 * @property {number} bucketSize
 *   Size of each bucket (except for minimum and maximum buckets). So if
 *   `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the
 *   following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60,
 *   60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works. [Required].
 *
 * @typedef FixedSizeBucketingConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.FixedSizeBucketingConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
 *   Set of buckets. Ranges must be non-overlapping.
 *
 *   This object should have the same structure as [Bucket]{@link google.privacy.dlp.v2.Bucket}
 *
 * @typedef BucketingConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.BucketingConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var BucketingConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Bucket is represented as a range, along with replacement values.
   *
   * @property {Object} min
   *   Lower bound of the range, inclusive. Type should be the same as max if
   *   used.
   *
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
   *
   * @property {Object} max
   *   Upper bound of the range, exclusive; type must match min.
   *
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
   *
   * @property {Object} replacementValue
   *   Replacement value for this bucket. If not provided
   *   the default behavior will be to hyphenate the min-max range.
   *
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
   *
   * @typedef Bucket
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.BucketingConfig.Bucket definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  Bucket: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Replaces an identifier with a surrogate using FPE with the FFX
 * mode of operation; however when used in the `ReidentifyContent` API method,
 * it serves the opposite function by reversing the surrogate back into
 * the original identifier.
 * The identifier must be encoded as ASCII.
 * For a given crypto key and context, the same identifier will be
 * replaced with the same surrogate.
 * Identifiers must be at least two characters long.
 * In the case that the identifier is the empty string, it will be skipped.
 * See [Pseudonymization](https://cloud.google.com/dlp/docs/pseudonymization) for example usage.
 *
 * @property {Object} cryptoKey
 *   The key used by the encryption algorithm. [required]
 *
 *   This object should have the same structure as [CryptoKey]{@link google.privacy.dlp.v2.CryptoKey}
 *
 * @property {Object} context
 *   The 'tweak', a context may be used for higher security since the same
 *   identifier in two different contexts won't be given the same surrogate. If
 *   the context is not set, a default tweak will be used.
 *
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
 *   - a string is encoded in UTF-8 format followed by a single byte of value
 *    å 2
 *
 *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
 *
 * @property {number} commonAlphabet
 *   The number should be among the values of [FfxCommonNativeAlphabet]{@link google.privacy.dlp.v2.FfxCommonNativeAlphabet}
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
 * @property {Object} surrogateInfoType
 *   The custom infoType to annotate the surrogate with.
 *   This annotation will be applied to the surrogate by prefixing it with
 *   the name of the custom infoType followed by the number of
 *   characters comprising the surrogate. The following scheme defines the
 *   format: info_type_name(surrogate_character_count):surrogate
 *
 *   For example, if the name of custom infoType is 'MY_TOKEN_INFO_TYPE' and
 *   the surrogate is 'abc', the full replacement value
 *   will be: 'MY_TOKEN_INFO_TYPE(3):abc'
 *
 *   This annotation identifies the surrogate when inspecting content using the
 *   custom infoType
 *   [`SurrogateType`](https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#surrogatetype).
 *   This facilitates reversal of the surrogate when it occurs in free text.
 *
 *   In order for inspection to work properly, the name of this infoType must
 *   not occur naturally anywhere in your data; otherwise, inspection may
 *   find a surrogate that does not correspond to an actual identifier.
 *   Therefore, choose your custom infoType name carefully after considering
 *   what your data looks like. One way to select a name that has a high chance
 *   of yielding reliable detection is to include one or more unicode characters
 *   that are highly improbable to exist in your data.
 *   For example, assuming your data is entered from a regular ASCII keyboard,
 *   the symbol with the hex code point 29DD might be used like so:
 *   ⧝MY_TOKEN_TYPE
 *
 *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2.InfoType}
 *
 * @typedef CryptoReplaceFfxFpeConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.CryptoReplaceFfxFpeConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var CryptoReplaceFfxFpeConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * These are commonly used subsets of the alphabet that the FFX mode
   * natively supports. In the algorithm, the alphabet is selected using
   * the "radix". Therefore each corresponds to particular radix.
   *
   * @enum {number}
   * @memberof google.privacy.dlp.v2
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
 *   This object should have the same structure as [TransientCryptoKey]{@link google.privacy.dlp.v2.TransientCryptoKey}
 *
 * @property {Object} unwrapped
 *   This object should have the same structure as [UnwrappedCryptoKey]{@link google.privacy.dlp.v2.UnwrappedCryptoKey}
 *
 * @property {Object} kmsWrapped
 *   This object should have the same structure as [KmsWrappedCryptoKey]{@link google.privacy.dlp.v2.KmsWrappedCryptoKey}
 *
 * @typedef CryptoKey
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.CryptoKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var CryptoKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Use this to have a random data crypto key generated.
 * It will be discarded after the request finishes.
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
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.TransientCryptoKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.UnwrappedCryptoKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.KmsWrappedCryptoKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var KmsWrappedCryptoKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Shifts dates by random number of days, with option to be consistent for the
 * same context.
 *
 * @property {number} upperBoundDays
 *   Range of shift in days. Actual shift will be selected at random within this
 *   range (inclusive ends). Negative means shift to earlier in time. Must not
 *   be more than 365250 days (1000 years) each direction.
 *
 *   For example, 3 means shift date to at most 3 days into the future.
 *   [Required]
 *
 * @property {number} lowerBoundDays
 *   For example, -5 means shift date to at most 5 days back in the past.
 *   [Required]
 *
 * @property {Object} context
 *   Points to the field that contains the context, for example, an entity id.
 *   If set, must also set method. If set, shift will be consistent for the
 *   given context.
 *
 *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
 *
 * @property {Object} cryptoKey
 *   Causes the shift to be computed based on this key and the context. This
 *   results in the same shift for the same context and crypto_key.
 *
 *   This object should have the same structure as [CryptoKey]{@link google.privacy.dlp.v2.CryptoKey}
 *
 * @typedef DateShiftConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.DateShiftConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var DateShiftConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A type of transformation that will scan unstructured text and
 * apply various `PrimitiveTransformation`s to each finding, where the
 * transformation is applied to only values that were identified as a specific
 * info_type.
 *
 * @property {Object[]} transformations
 *   Transformation for each infoType. Cannot specify more than one
 *   for a given infoType. [required]
 *
 *   This object should have the same structure as [InfoTypeTransformation]{@link google.privacy.dlp.v2.InfoTypeTransformation}
 *
 * @typedef InfoTypeTransformations
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.InfoTypeTransformations definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var InfoTypeTransformations = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * A transformation to apply to text that is identified as a specific
   * info_type.
   *
   * @property {Object[]} infoTypes
   *   InfoTypes to apply the transformation to. Empty list will match all
   *   available infoTypes for this transformation.
   *
   *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2.InfoType}
   *
   * @property {Object} primitiveTransformation
   *   Primitive transformation to apply to the infoType. [required]
   *
   *   This object should have the same structure as [PrimitiveTransformation]{@link google.privacy.dlp.v2.PrimitiveTransformation}
   *
   * @typedef InfoTypeTransformation
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.InfoTypeTransformations.InfoTypeTransformation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
 *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
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
 *   This object should have the same structure as [RecordCondition]{@link google.privacy.dlp.v2.RecordCondition}
 *
 * @property {Object} primitiveTransformation
 *   Apply the transformation to the entire field.
 *
 *   This object should have the same structure as [PrimitiveTransformation]{@link google.privacy.dlp.v2.PrimitiveTransformation}
 *
 * @property {Object} infoTypeTransformations
 *   Treat the contents of the field as free text, and selectively
 *   transform content that matches an `InfoType`.
 *
 *   This object should have the same structure as [InfoTypeTransformations]{@link google.privacy.dlp.v2.InfoTypeTransformations}
 *
 * @typedef FieldTransformation
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.FieldTransformation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
 *   This object should have the same structure as [FieldTransformation]{@link google.privacy.dlp.v2.FieldTransformation}
 *
 * @property {Object[]} recordSuppressions
 *   Configuration defining which records get suppressed entirely. Records that
 *   match any suppression rule are omitted from the output [optional].
 *
 *   This object should have the same structure as [RecordSuppression]{@link google.privacy.dlp.v2.RecordSuppression}
 *
 * @typedef RecordTransformations
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.RecordTransformations definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var RecordTransformations = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration to suppress records whose suppression conditions evaluate to
 * true.
 *
 * @property {Object} condition
 *   A condition that when it evaluates to true will result in the record being
 *   evaluated to be suppressed from the transformed content.
 *
 *   This object should have the same structure as [RecordCondition]{@link google.privacy.dlp.v2.RecordCondition}
 *
 * @typedef RecordSuppression
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.RecordSuppression definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var RecordSuppression = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A condition for determining whether a transformation should be applied to
 * a field.
 *
 * @property {Object} expressions
 *   An expression.
 *
 *   This object should have the same structure as [Expressions]{@link google.privacy.dlp.v2.Expressions}
 *
 * @typedef RecordCondition
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.RecordCondition definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
   *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
   *
   * @property {number} operator
   *   Operator used to compare the field or infoType to the value. [required]
   *
   *   The number should be among the values of [RelationalOperator]{@link google.privacy.dlp.v2.RelationalOperator}
   *
   * @property {Object} value
   *   Value to compare against. [Required, except for `EXISTS` tests.]
   *
   *   This object should have the same structure as [Value]{@link google.privacy.dlp.v2.Value}
   *
   * @typedef Condition
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.RecordCondition.Condition definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  Condition: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * A collection of conditions.
   *
   * @property {Object[]} conditions
   *   This object should have the same structure as [Condition]{@link google.privacy.dlp.v2.Condition}
   *
   * @typedef Conditions
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.RecordCondition.Conditions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  Conditions: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * An expression, consisting or an operator and conditions.
   *
   * @property {number} logicalOperator
   *   The operator to apply to the result of conditions. Default and currently
   *   only supported value is `AND`.
   *
   *   The number should be among the values of [LogicalOperator]{@link google.privacy.dlp.v2.LogicalOperator}
   *
   * @property {Object} conditions
   *   This object should have the same structure as [Conditions]{@link google.privacy.dlp.v2.Conditions}
   *
   * @typedef Expressions
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.RecordCondition.Expressions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  Expressions: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * @enum {number}
     * @memberof google.privacy.dlp.v2
     */
    LogicalOperator: {
      LOGICAL_OPERATOR_UNSPECIFIED: 0,
      AND: 1
    }
  }
};

/**
 * Overview of the modifications that occurred.
 *
 * @property {number} transformedBytes
 *   Total size in bytes that were transformed in some way.
 *
 * @property {Object[]} transformationSummaries
 *   Transformations applied to the dataset.
 *
 *   This object should have the same structure as [TransformationSummary]{@link google.privacy.dlp.v2.TransformationSummary}
 *
 * @typedef TransformationOverview
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.TransformationOverview definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var TransformationOverview = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Summary of a single tranformation.
 * Only one of 'transformation', 'field_transformation', or 'record_suppress'
 * will be set.
 *
 * @property {Object} infoType
 *   Set if the transformation was limited to a specific info_type.
 *
 *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2.InfoType}
 *
 * @property {Object} field
 *   Set if the transformation was limited to a specific FieldId.
 *
 *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
 *
 * @property {Object} transformation
 *   The specific transformation these stats apply to.
 *
 *   This object should have the same structure as [PrimitiveTransformation]{@link google.privacy.dlp.v2.PrimitiveTransformation}
 *
 * @property {Object[]} fieldTransformations
 *   The field transformation that was applied.
 *   If multiple field transformations are requested for a single field,
 *   this list will contain all of them; otherwise, only one is supplied.
 *
 *   This object should have the same structure as [FieldTransformation]{@link google.privacy.dlp.v2.FieldTransformation}
 *
 * @property {Object} recordSuppress
 *   The specific suppression option these stats apply to.
 *
 *   This object should have the same structure as [RecordSuppression]{@link google.privacy.dlp.v2.RecordSuppression}
 *
 * @property {Object[]} results
 *   This object should have the same structure as [SummaryResult]{@link google.privacy.dlp.v2.SummaryResult}
 *
 * @property {number} transformedBytes
 *   Total size in bytes that were transformed in some way.
 *
 * @typedef TransformationSummary
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.TransformationSummary definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
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
   *   The number should be among the values of [TransformationResultCode]{@link google.privacy.dlp.v2.TransformationResultCode}
   *
   * @property {string} details
   *   A place for warnings or errors to show up if a transformation didn't
   *   work as expected.
   *
   * @typedef SummaryResult
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.TransformationSummary.SummaryResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  SummaryResult: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Possible outcomes of transformations.
   *
   * @enum {number}
   * @memberof google.privacy.dlp.v2
   */
  TransformationResultCode: {
    TRANSFORMATION_RESULT_CODE_UNSPECIFIED: 0,
    SUCCESS: 1,
    ERROR: 2
  }
};

/**
 * Schedule for triggeredJobs.
 *
 * @property {Object} recurrencePeriodDuration
 *   With this option a job is started a regular periodic basis. For
 *   example: every 10 minutes.
 *
 *   A scheduled start time will be skipped if the previous
 *   execution has not ended when its scheduled time occurs.
 *
 *   This value must be set to a time duration greater than or equal
 *   to 60 minutes and can be no longer than 60 days.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @typedef Schedule
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.Schedule definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var Schedule = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The inspectTemplate contains a configuration (set of types of sensitive data
 * to be detected) to be used anywhere you otherwise would normally specify
 * InspectConfig.
 *
 * @property {string} name
 *   The template name. Output only.
 *
 *   The template will have one of the following formats:
 *   `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR
 *   `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`
 *
 * @property {string} displayName
 *   Display name (max 256 chars).
 *
 * @property {string} description
 *   Short description (max 256 chars).
 *
 * @property {Object} createTime
 *   The creation timestamp of a inspectTemplate, output only field.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   The last update timestamp of a inspectTemplate, output only field.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} inspectConfig
 *   The core content of the template. Configuration of the scanning process.
 *
 *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2.InspectConfig}
 *
 * @typedef InspectTemplate
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.InspectTemplate definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var InspectTemplate = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The DeidentifyTemplates contains instructions on how to deidentify content.
 *
 * @property {string} name
 *   The template name. Output only.
 *
 *   The template will have one of the following formats:
 *   `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR
 *   `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID`
 *
 * @property {string} displayName
 *   Display name (max 256 chars).
 *
 * @property {string} description
 *   Short description (max 256 chars).
 *
 * @property {Object} createTime
 *   The creation timestamp of a inspectTemplate, output only field.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   The last update timestamp of a inspectTemplate, output only field.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} deidentifyConfig
 *   ///////////// // The core content of the template  // ///////////////
 *
 *   This object should have the same structure as [DeidentifyConfig]{@link google.privacy.dlp.v2.DeidentifyConfig}
 *
 * @typedef DeidentifyTemplate
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.DeidentifyTemplate definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var DeidentifyTemplate = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Details information about an error encountered during job execution or
 * the results of an unsuccessful activation of the JobTrigger.
 * Output only field.
 *
 * @property {Object} details
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @property {Object[]} timestamps
 *   The times the error occurred.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef Error
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.Error definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var Error = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains a configuration to make dlp api calls on a repeating basis.
 *
 * @property {string} name
 *   Unique resource name for the triggeredJob, assigned by the service when the
 *   triggeredJob is created, for example
 *   `projects/dlp-test-project/triggeredJobs/53234423`.
 *
 * @property {string} displayName
 *   Display name (max 100 chars)
 *
 * @property {string} description
 *   User provided description (max 256 chars)
 *
 * @property {Object} inspectJob
 *   This object should have the same structure as [InspectJobConfig]{@link google.privacy.dlp.v2.InspectJobConfig}
 *
 * @property {Object[]} triggers
 *   A list of triggers which will be OR'ed together. Only one in the list
 *   needs to trigger for a job to be started. The list may contain only
 *   a single Schedule trigger and must have at least one object.
 *
 *   This object should have the same structure as [Trigger]{@link google.privacy.dlp.v2.Trigger}
 *
 * @property {Object[]} errors
 *   A stream of errors encountered when the trigger was activated. Repeated
 *   errors may result in the JobTrigger automaticaly being paused.
 *   Will return the last 100 errors. Whenever the JobTrigger is modified
 *   this list will be cleared. Output only field.
 *
 *   This object should have the same structure as [Error]{@link google.privacy.dlp.v2.Error}
 *
 * @property {Object} createTime
 *   The creation timestamp of a triggeredJob, output only field.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   The last update timestamp of a triggeredJob, output only field.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} lastRunTime
 *   The timestamp of the last time this trigger executed, output only field.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} status
 *   A status for this trigger. [required]
 *
 *   The number should be among the values of [Status]{@link google.privacy.dlp.v2.Status}
 *
 * @typedef JobTrigger
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.JobTrigger definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var JobTrigger = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * What event needs to occur for a new job to be started.
   *
   * @property {Object} schedule
   *   Create a job on a repeating basis based on the elapse of time.
   *
   *   This object should have the same structure as [Schedule]{@link google.privacy.dlp.v2.Schedule}
   *
   * @typedef Trigger
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.JobTrigger.Trigger definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  Trigger: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Whether the trigger is currently active. If PAUSED or CANCELLED, no jobs
   * will be created with this configuration. The service may automatically
   * pause triggers experiencing frequent errors. To restart a job, set the
   * status to HEALTHY after correcting user errors.
   *
   * @enum {number}
   * @memberof google.privacy.dlp.v2
   */
  Status: {
    STATUS_UNSPECIFIED: 0,

    /**
     * Trigger is healthy.
     */
    HEALTHY: 1,

    /**
     * Trigger is temporarily paused.
     */
    PAUSED: 2,

    /**
     * Trigger is cancelled and can not be resumed.
     */
    CANCELLED: 3
  }
};

/**
 * A task to execute on the completion of a job.
 *
 * @property {Object} saveFindings
 *   Save resulting findings in a provided location.
 *
 *   This object should have the same structure as [SaveFindings]{@link google.privacy.dlp.v2.SaveFindings}
 *
 * @property {Object} pubSub
 *   Publish a notification to a pubsub topic.
 *
 *   This object should have the same structure as [PublishToPubSub]{@link google.privacy.dlp.v2.PublishToPubSub}
 *
 * @typedef Action
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.Action definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var Action = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * If set, the detailed findings will be persisted to the specified
   * OutputStorageConfig. Compatible with: Inspect
   *
   * @property {Object} outputConfig
   *   This object should have the same structure as [OutputStorageConfig]{@link google.privacy.dlp.v2.OutputStorageConfig}
   *
   * @typedef SaveFindings
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.Action.SaveFindings definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  SaveFindings: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Publish the results of a DlpJob to a pub sub channel.
   * Compatible with: Inpect, Risk
   *
   * @property {string} topic
   *   Cloud Pub/Sub topic to send notifications to. The topic must have given
   *   publishing access rights to the DLP API service account executing
   *   the long running DlpJob sending the notifications.
   *   Format is projects/{project}/topics/{topic}.
   *
   * @typedef PublishToPubSub
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.Action.PublishToPubSub definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
   */
  PublishToPubSub: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Request message for CreateInspectTemplate.
 *
 * @property {string} parent
 *   The parent resource name, for example projects/my-project-id or
 *   organizations/my-org-id.
 *
 * @property {Object} inspectTemplate
 *   The InspectTemplate to create.
 *
 *   This object should have the same structure as [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate}
 *
 * @property {string} templateId
 *   The template id can contain uppercase and lowercase letters,
 *   numbers, and hyphens; that is, it must match the regular
 *   expression: `[a-zA-Z\\d-]+`. The maximum length is 100
 *   characters. Can be empty to allow the system to generate one.
 *
 * @typedef CreateInspectTemplateRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.CreateInspectTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var CreateInspectTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for UpdateInspectTemplate.
 *
 * @property {string} name
 *   Resource name of organization and inspectTemplate to be updated, for
 *   example `organizations/433245324/inspectTemplates/432452342` or
 *   projects/project-id/inspectTemplates/432452342.
 *
 * @property {Object} inspectTemplate
 *   New InspectTemplate value.
 *
 *   This object should have the same structure as [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate}
 *
 * @property {Object} updateMask
 *   Mask to control which fields get updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateInspectTemplateRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.UpdateInspectTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var UpdateInspectTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for GetInspectTemplate.
 *
 * @property {string} name
 *   Resource name of the organization and inspectTemplate to be read, for
 *   example `organizations/433245324/inspectTemplates/432452342` or
 *   projects/project-id/inspectTemplates/432452342.
 *
 * @typedef GetInspectTemplateRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.GetInspectTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var GetInspectTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for ListInspectTemplates.
 *
 * @property {string} parent
 *   The parent resource name, for example projects/my-project-id or
 *   organizations/my-org-id.
 *
 * @property {string} pageToken
 *   Optional page token to continue retrieval. Comes from previous call
 *   to `ListInspectTemplates`.
 *
 * @property {number} pageSize
 *   Optional size of the page, can be limited by server. If zero server returns
 *   a page of max size 100.
 *
 * @typedef ListInspectTemplatesRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ListInspectTemplatesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ListInspectTemplatesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for ListInspectTemplates.
 *
 * @property {Object[]} inspectTemplates
 *   List of inspectTemplates, up to page_size in ListInspectTemplatesRequest.
 *
 *   This object should have the same structure as [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate}
 *
 * @property {string} nextPageToken
 *   If the next page is available then the next page token to be used
 *   in following ListInspectTemplates request.
 *
 * @typedef ListInspectTemplatesResponse
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ListInspectTemplatesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ListInspectTemplatesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for DeleteInspectTemplate.
 *
 * @property {string} name
 *   Resource name of the organization and inspectTemplate to be deleted, for
 *   example `organizations/433245324/inspectTemplates/432452342` or
 *   projects/project-id/inspectTemplates/432452342.
 *
 * @typedef DeleteInspectTemplateRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.DeleteInspectTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var DeleteInspectTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for CreateJobTrigger.
 *
 * @property {string} parent
 *   The parent resource name, for example projects/my-project-id.
 *
 * @property {Object} jobTrigger
 *   The JobTrigger to create.
 *
 *   This object should have the same structure as [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger}
 *
 * @property {string} triggerId
 *   The trigger id can contain uppercase and lowercase letters,
 *   numbers, and hyphens; that is, it must match the regular
 *   expression: `[a-zA-Z\\d-]+`. The maximum length is 100
 *   characters. Can be empty to allow the system to generate one.
 *
 * @typedef CreateJobTriggerRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.CreateJobTriggerRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var CreateJobTriggerRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for UpdateJobTrigger.
 *
 * @property {string} name
 *   Resource name of the project and the triggeredJob, for example
 *   `projects/dlp-test-project/jobTriggers/53234423`.
 *
 * @property {Object} jobTrigger
 *   New JobTrigger value.
 *
 *   This object should have the same structure as [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger}
 *
 * @property {Object} updateMask
 *   Mask to control which fields get updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateJobTriggerRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.UpdateJobTriggerRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var UpdateJobTriggerRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for GetJobTrigger.
 *
 * @property {string} name
 *   Resource name of the project and the triggeredJob, for example
 *   `projects/dlp-test-project/jobTriggers/53234423`.
 *
 * @typedef GetJobTriggerRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.GetJobTriggerRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var GetJobTriggerRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for CreateDlpJobRequest. Used to initiate long running
 * jobs such as calculating risk metrics or inspecting Google Cloud
 * Storage.
 *
 * @property {string} parent
 *   The parent resource name, for example projects/my-project-id.
 *
 * @property {Object} inspectJob
 *   This object should have the same structure as [InspectJobConfig]{@link google.privacy.dlp.v2.InspectJobConfig}
 *
 * @property {Object} riskJob
 *   This object should have the same structure as [RiskAnalysisJobConfig]{@link google.privacy.dlp.v2.RiskAnalysisJobConfig}
 *
 * @property {string} jobId
 *   The job id can contain uppercase and lowercase letters,
 *   numbers, and hyphens; that is, it must match the regular
 *   expression: `[a-zA-Z\\d-]+`. The maximum length is 100
 *   characters. Can be empty to allow the system to generate one.
 *
 * @typedef CreateDlpJobRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.CreateDlpJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var CreateDlpJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for ListJobTriggers.
 *
 * @property {string} parent
 *   The parent resource name, for example projects/my-project-id.
 *
 * @property {string} pageToken
 *   Optional page token to continue retrieval. Comes from previous call
 *   to ListJobTriggers. `order_by` and `filter` should not change for
 *   subsequent calls, but can be omitted if token is specified.
 *
 * @property {number} pageSize
 *   Optional size of the page, can be limited by a server.
 *
 * @property {string} orderBy
 *   Optional comma separated list of triggeredJob fields to order by,
 *   followed by 'asc/desc' postfix, i.e.
 *   `"create_time asc,name desc,schedule_mode asc"`. This list is
 *   case-insensitive.
 *
 *   Example: `"name asc,schedule_mode desc, status desc"`
 *
 *   Supported filters keys and values are:
 *
 *   - `create_time`: corresponds to time the triggeredJob was created.
 *   - `update_time`: corresponds to time the triggeredJob was last updated.
 *   - `name`: corresponds to JobTrigger's display name.
 *   - `status`: corresponds to the triggeredJob status.
 *
 * @typedef ListJobTriggersRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ListJobTriggersRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ListJobTriggersRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for ListJobTriggers.
 *
 * @property {Object[]} jobTriggers
 *   List of triggeredJobs, up to page_size in ListJobTriggersRequest.
 *
 *   This object should have the same structure as [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger}
 *
 * @property {string} nextPageToken
 *   If the next page is available then the next page token to be used
 *   in following ListJobTriggers request.
 *
 * @typedef ListJobTriggersResponse
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ListJobTriggersResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ListJobTriggersResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for DeleteJobTrigger.
 *
 * @property {string} name
 *   Resource name of the project and the triggeredJob, for example
 *   `projects/dlp-test-project/jobTriggers/53234423`.
 *
 * @typedef DeleteJobTriggerRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.DeleteJobTriggerRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var DeleteJobTriggerRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {Object} storageConfig
 *   The data to scan.
 *
 *   This object should have the same structure as [StorageConfig]{@link google.privacy.dlp.v2.StorageConfig}
 *
 * @property {Object} inspectConfig
 *   How and what to scan for.
 *
 *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2.InspectConfig}
 *
 * @property {string} inspectTemplateName
 *   If provided, will be used as the default for all values in InspectConfig.
 *   `inspect_config` will be merged into the values persisted as part of the
 *   template.
 *
 * @property {Object[]} actions
 *   Actions to execute at the completion of the job. Are executed in the order
 *   provided.
 *
 *   This object should have the same structure as [Action]{@link google.privacy.dlp.v2.Action}
 *
 * @typedef InspectJobConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.InspectJobConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var InspectJobConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Combines all of the information about a DLP job.
 *
 * @property {string} name
 *   The server-assigned name.
 *
 * @property {number} type
 *   The type of job.
 *
 *   The number should be among the values of [DlpJobType]{@link google.privacy.dlp.v2.DlpJobType}
 *
 * @property {number} state
 *   State of a job.
 *
 *   The number should be among the values of [JobState]{@link google.privacy.dlp.v2.JobState}
 *
 * @property {Object} riskDetails
 *   Results from analyzing risk of a data source.
 *
 *   This object should have the same structure as [AnalyzeDataSourceRiskDetails]{@link google.privacy.dlp.v2.AnalyzeDataSourceRiskDetails}
 *
 * @property {Object} inspectDetails
 *   Results from inspecting a data source.
 *
 *   This object should have the same structure as [InspectDataSourceDetails]{@link google.privacy.dlp.v2.InspectDataSourceDetails}
 *
 * @property {Object} createTime
 *   Time when the job was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} startTime
 *   Time when the job started.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   Time when the job finished.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} jobTriggerName
 *   If created by a job trigger, the resource name of the trigger that
 *   instantiated the job.
 *
 * @property {Object[]} errors
 *   A stream of errors encountered running the job.
 *
 *   This object should have the same structure as [Error]{@link google.privacy.dlp.v2.Error}
 *
 * @typedef DlpJob
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.DlpJob definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var DlpJob = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @enum {number}
   * @memberof google.privacy.dlp.v2
   */
  JobState: {
    JOB_STATE_UNSPECIFIED: 0,

    /**
     * The job has not yet started.
     */
    PENDING: 1,

    /**
     * The job is currently running.
     */
    RUNNING: 2,

    /**
     * The job is no longer running.
     */
    DONE: 3,

    /**
     * The job was canceled before it could complete.
     */
    CANCELED: 4,

    /**
     * The job had an error and did not complete.
     */
    FAILED: 5
  }
};

/**
 * The request message for DlpJobs.GetDlpJob.
 *
 * @property {string} name
 *   The name of the DlpJob resource.
 *
 * @typedef GetDlpJobRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.GetDlpJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var GetDlpJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for listing DLP jobs.
 *
 * @property {string} parent
 *   The parent resource name, for example projects/my-project-id.
 *
 * @property {string} filter
 *   Optional. Allows filtering.
 *
 *   Supported syntax:
 *
 *   * Filter expressions are made up of one or more restrictions.
 *   * Restrictions can be combined by `AND` or `OR` logical operators. A
 *   sequence of restrictions implicitly uses `AND`.
 *   * A restriction has the form of `<field> <operator> <value>`.
 *   * Supported fields/values for inspect jobs:
 *       - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED
 *       - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY
 *       - `trigger_name` - The resource name of the trigger that created job.
 *   * Supported fields for risk analysis jobs:
 *       - `state` - RUNNING|CANCELED|FINISHED|FAILED
 *   * The operator must be `=` or `!=`.
 *
 *   Examples:
 *
 *   * inspected_storage = cloud_storage AND state = done
 *   * inspected_storage = cloud_storage OR inspected_storage = bigquery
 *   * inspected_storage = cloud_storage AND (state = done OR state = canceled)
 *
 *   The length of this field should be no more than 500 characters.
 *
 * @property {number} pageSize
 *   The standard list page size.
 *
 * @property {string} pageToken
 *   The standard list page token.
 *
 * @property {number} type
 *   The type of job. Defaults to `DlpJobType.INSPECT`
 *
 *   The number should be among the values of [DlpJobType]{@link google.privacy.dlp.v2.DlpJobType}
 *
 * @typedef ListDlpJobsRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ListDlpJobsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ListDlpJobsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response message for listing DLP jobs.
 *
 * @property {Object[]} jobs
 *   A list of DlpJobs that matches the specified filter in the request.
 *
 *   This object should have the same structure as [DlpJob]{@link google.privacy.dlp.v2.DlpJob}
 *
 * @property {string} nextPageToken
 *   The standard List next-page token.
 *
 * @typedef ListDlpJobsResponse
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ListDlpJobsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ListDlpJobsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for canceling a DLP job.
 *
 * @property {string} name
 *   The name of the DlpJob resource to be cancelled.
 *
 * @typedef CancelDlpJobRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.CancelDlpJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var CancelDlpJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for deleting a DLP job.
 *
 * @property {string} name
 *   The name of the DlpJob resource to be deleted.
 *
 * @typedef DeleteDlpJobRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.DeleteDlpJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var DeleteDlpJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for CreateDeidentifyTemplate.
 *
 * @property {string} parent
 *   The parent resource name, for example projects/my-project-id or
 *   organizations/my-org-id.
 *
 * @property {Object} deidentifyTemplate
 *   The DeidentifyTemplate to create.
 *
 *   This object should have the same structure as [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate}
 *
 * @property {string} templateId
 *   The template id can contain uppercase and lowercase letters,
 *   numbers, and hyphens; that is, it must match the regular
 *   expression: `[a-zA-Z\\d-]+`. The maximum length is 100
 *   characters. Can be empty to allow the system to generate one.
 *
 * @typedef CreateDeidentifyTemplateRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.CreateDeidentifyTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var CreateDeidentifyTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for UpdateDeidentifyTemplate.
 *
 * @property {string} name
 *   Resource name of organization and deidentify template to be updated, for
 *   example `organizations/433245324/deidentifyTemplates/432452342` or
 *   projects/project-id/deidentifyTemplates/432452342.
 *
 * @property {Object} deidentifyTemplate
 *   New DeidentifyTemplate value.
 *
 *   This object should have the same structure as [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate}
 *
 * @property {Object} updateMask
 *   Mask to control which fields get updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateDeidentifyTemplateRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.UpdateDeidentifyTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var UpdateDeidentifyTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for GetDeidentifyTemplate.
 *
 * @property {string} name
 *   Resource name of the organization and deidentify template to be read, for
 *   example `organizations/433245324/deidentifyTemplates/432452342` or
 *   projects/project-id/deidentifyTemplates/432452342.
 *
 * @typedef GetDeidentifyTemplateRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.GetDeidentifyTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var GetDeidentifyTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for ListDeidentifyTemplates.
 *
 * @property {string} parent
 *   The parent resource name, for example projects/my-project-id or
 *   organizations/my-org-id.
 *
 * @property {string} pageToken
 *   Optional page token to continue retrieval. Comes from previous call
 *   to `ListDeidentifyTemplates`.
 *
 * @property {number} pageSize
 *   Optional size of the page, can be limited by server. If zero server returns
 *   a page of max size 100.
 *
 * @typedef ListDeidentifyTemplatesRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ListDeidentifyTemplatesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ListDeidentifyTemplatesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for ListDeidentifyTemplates.
 *
 * @property {Object[]} deidentifyTemplates
 *   List of deidentify templates, up to page_size in
 *   ListDeidentifyTemplatesRequest.
 *
 *   This object should have the same structure as [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate}
 *
 * @property {string} nextPageToken
 *   If the next page is available then the next page token to be used
 *   in following ListDeidentifyTemplates request.
 *
 * @typedef ListDeidentifyTemplatesResponse
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.ListDeidentifyTemplatesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var ListDeidentifyTemplatesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for DeleteDeidentifyTemplate.
 *
 * @property {string} name
 *   Resource name of the organization and deidentify template to be deleted,
 *   for example `organizations/433245324/deidentifyTemplates/432452342` or
 *   projects/project-id/deidentifyTemplates/432452342.
 *
 * @typedef DeleteDeidentifyTemplateRequest
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.DeleteDeidentifyTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto}
 */
var DeleteDeidentifyTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Options describing which parts of the provided content should be scanned.
 *
 * @enum {number}
 * @memberof google.privacy.dlp.v2
 */
var ContentOption = {

  /**
   * Includes entire content of a file or a data stream.
   */
  CONTENT_UNSPECIFIED: 0,

  /**
   * Text content within the data, excluding any metadata.
   */
  CONTENT_TEXT: 1,

  /**
   * Images found in the data.
   */
  CONTENT_IMAGE: 2
};

/**
 * Parts of the APIs which use certain infoTypes.
 *
 * @enum {number}
 * @memberof google.privacy.dlp.v2
 */
var InfoTypeSupportedBy = {
  ENUM_TYPE_UNSPECIFIED: 0,

  /**
   * Supported by the inspect operations.
   */
  INSPECT: 1,

  /**
   * Supported by the risk analysis operations.
   */
  RISK_ANALYSIS: 2
};

/**
 * Operators available for comparing the value of fields.
 *
 * @enum {number}
 * @memberof google.privacy.dlp.v2
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

/**
 * An enum to represent the various type of DLP jobs.
 *
 * @enum {number}
 * @memberof google.privacy.dlp.v2
 */
var DlpJobType = {
  DLP_JOB_TYPE_UNSPECIFIED: 0,

  /**
   * The job inspected Google Cloud for sensitive data.
   */
  INSPECT_JOB: 1,

  /**
   * The job executed a Risk Analysis computation.
   */
  RISK_ANALYSIS_JOB: 2
};