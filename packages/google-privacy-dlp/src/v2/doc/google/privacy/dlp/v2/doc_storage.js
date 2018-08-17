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
 * Type of information detected by the API.
 *
 * @property {string} name
 *   Name of the information type. Either a name of your choosing when
 *   creating a CustomInfoType, or one of the names listed
 *   at https://cloud.google.com/dlp/docs/infotypes-reference when specifying
 *   a built-in type.
 *
 * @typedef InfoType
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.InfoType definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
 */
var InfoType = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A reference to a StoredInfoType to use with scanning.
 *
 * @property {string} name
 *   Resource name of the requested `StoredInfoType`, for example
 *   `organizations/433245324/storedInfoTypes/432452342` or
 *   `projects/project-id/storedInfoTypes/432452342`.
 *
 * @property {Object} createTime
 *   Timestamp indicating when the version of the `StoredInfoType` used for
 *   inspection was created. Output-only field, populated by the system.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef StoredType
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.StoredType definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
 */
var StoredType = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Custom information type provided by the user. Used to find domain-specific
 * sensitive information configurable to the data in question.
 *
 * @property {Object} infoType
 *   All CustomInfoTypes must have a name
 *   that does not conflict with built-in InfoTypes or other CustomInfoTypes.
 *
 *   This object should have the same structure as [InfoType]{@link google.privacy.dlp.v2.InfoType}
 *
 * @property {number} likelihood
 *   Likelihood to return for this CustomInfoType. This base value can be
 *   altered by a detection rule if the finding meets the criteria specified by
 *   the rule. Defaults to `VERY_LIKELY` if not specified.
 *
 *   The number should be among the values of [Likelihood]{@link google.privacy.dlp.v2.Likelihood}
 *
 * @property {Object} dictionary
 *   A list of phrases to detect as a CustomInfoType.
 *
 *   This object should have the same structure as [Dictionary]{@link google.privacy.dlp.v2.Dictionary}
 *
 * @property {Object} regex
 *   Regular expression based CustomInfoType.
 *
 *   This object should have the same structure as [Regex]{@link google.privacy.dlp.v2.Regex}
 *
 * @property {Object} surrogateType
 *   Message for detecting output from deidentification transformations that
 *   support reversing.
 *
 *   This object should have the same structure as [SurrogateType]{@link google.privacy.dlp.v2.SurrogateType}
 *
 * @property {Object} storedType
 *   Load an existing `StoredInfoType` resource for use in
 *   `InspectDataSource`. Not currently supported in `InspectContent`.
 *
 *   This object should have the same structure as [StoredType]{@link google.privacy.dlp.v2.StoredType}
 *
 * @property {Object[]} detectionRules
 *   Set of detection rules to apply to all findings of this CustomInfoType.
 *   Rules are applied in order that they are specified. Not supported for the
 *   `surrogate_type` CustomInfoType.
 *
 *   This object should have the same structure as [DetectionRule]{@link google.privacy.dlp.v2.DetectionRule}
 *
 * @typedef CustomInfoType
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.CustomInfoType definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
 */
var CustomInfoType = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Custom information type based on a dictionary of words or phrases. This can
   * be used to match sensitive information specific to the data, such as a list
   * of employee IDs or job titles.
   *
   * Dictionary words are case-insensitive and all characters other than letters
   * and digits in the unicode [Basic Multilingual
   * Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane)
   * will be replaced with whitespace when scanning for matches, so the
   * dictionary phrase "Sam Johnson" will match all three phrases "sam johnson",
   * "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters
   * surrounding any match must be of a different type than the adjacent
   * characters within the word, so letters must be next to non-letters and
   * digits next to non-digits. For example, the dictionary word "jen" will
   * match the first three letters of the text "jen123" but will return no
   * matches for "jennifer".
   *
   * Dictionary words containing a large number of characters that are not
   * letters or digits may result in unexpected findings because such characters
   * are treated as whitespace. The
   * [limits](https://cloud.google.com/dlp/limits) page contains details about
   * the size limits of dictionaries. For dictionaries that do not fit within
   * these constraints, consider using `LargeCustomDictionaryConfig` in the
   * `StoredInfoType` API.
   *
   * @property {Object} wordList
   *   List of words or phrases to search for.
   *
   *   This object should have the same structure as [WordList]{@link google.privacy.dlp.v2.WordList}
   *
   * @property {Object} cloudStoragePath
   *   Newline-delimited file of words in Cloud Storage. Only a single file
   *   is accepted.
   *
   *   This object should have the same structure as [CloudStoragePath]{@link google.privacy.dlp.v2.CloudStoragePath}
   *
   * @typedef Dictionary
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.CustomInfoType.Dictionary definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
   */
  Dictionary: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * Message defining a list of words or phrases to search for in the data.
     *
     * @property {string[]} words
     *   Words or phrases defining the dictionary. The dictionary must contain
     *   at least one phrase and every phrase must contain at least 2 characters
     *   that are letters or digits. [required]
     *
     * @typedef WordList
     * @memberof google.privacy.dlp.v2
     * @see [google.privacy.dlp.v2.CustomInfoType.Dictionary.WordList definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
     */
    WordList: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    }
  },

  /**
   * Message defining a custom regular expression.
   *
   * @property {string} pattern
   *   Pattern defining the regular expression.
   *
   * @typedef Regex
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.CustomInfoType.Regex definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
   */
  Regex: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Message for detecting output from deidentification transformations
   * such as
   * [`CryptoReplaceFfxFpeConfig`](https://cloud.google.com/dlp/docs/reference/rest/v2/organizations.deidentifyTemplates#cryptoreplaceffxfpeconfig).
   * These types of transformations are
   * those that perform pseudonymization, thereby producing a "surrogate" as
   * output. This should be used in conjunction with a field on the
   * transformation such as `surrogate_info_type`. This CustomInfoType does
   * not support the use of `detection_rules`.
   * @typedef SurrogateType
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.CustomInfoType.SurrogateType definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
   */
  SurrogateType: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Rule for modifying a CustomInfoType to alter behavior under certain
   * circumstances, depending on the specific details of the rule. Not supported
   * for the `surrogate_type` custom info type.
   *
   * @property {Object} hotwordRule
   *   Hotword-based detection rule.
   *
   *   This object should have the same structure as [HotwordRule]{@link google.privacy.dlp.v2.HotwordRule}
   *
   * @typedef DetectionRule
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.CustomInfoType.DetectionRule definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
   */
  DetectionRule: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * Message for specifying a window around a finding to apply a detection
     * rule.
     *
     * @property {number} windowBefore
     *   Number of characters before the finding to consider.
     *
     * @property {number} windowAfter
     *   Number of characters after the finding to consider.
     *
     * @typedef Proximity
     * @memberof google.privacy.dlp.v2
     * @see [google.privacy.dlp.v2.CustomInfoType.DetectionRule.Proximity definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
     */
    Proximity: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Message for specifying an adjustment to the likelihood of a finding as
     * part of a detection rule.
     *
     * @property {number} fixedLikelihood
     *   Set the likelihood of a finding to a fixed value.
     *
     *   The number should be among the values of [Likelihood]{@link google.privacy.dlp.v2.Likelihood}
     *
     * @property {number} relativeLikelihood
     *   Increase or decrease the likelihood by the specified number of
     *   levels. For example, if a finding would be `POSSIBLE` without the
     *   detection rule and `relative_likelihood` is 1, then it is upgraded to
     *   `LIKELY`, while a value of -1 would downgrade it to `UNLIKELY`.
     *   Likelihood may never drop below `VERY_UNLIKELY` or exceed
     *   `VERY_LIKELY`, so applying an adjustment of 1 followed by an
     *   adjustment of -1 when base likelihood is `VERY_LIKELY` will result in
     *   a final likelihood of `LIKELY`.
     *
     * @typedef LikelihoodAdjustment
     * @memberof google.privacy.dlp.v2
     * @see [google.privacy.dlp.v2.CustomInfoType.DetectionRule.LikelihoodAdjustment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
     */
    LikelihoodAdjustment: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * The rule that adjusts the likelihood of findings within a certain
     * proximity of hotwords.
     *
     * @property {Object} hotwordRegex
     *   Regular expression pattern defining what qualifies as a hotword.
     *
     *   This object should have the same structure as [Regex]{@link google.privacy.dlp.v2.Regex}
     *
     * @property {Object} proximity
     *   Proximity of the finding within which the entire hotword must reside.
     *   The total length of the window cannot exceed 1000 characters. Note that
     *   the finding itself will be included in the window, so that hotwords may
     *   be used to match substrings of the finding itself. For example, the
     *   certainty of a phone number regex "\(\d{3}\) \d{3}-\d{4}" could be
     *   adjusted upwards if the area code is known to be the local area code of
     *   a company office using the hotword regex "\(xxx\)", where "xxx"
     *   is the area code in question.
     *
     *   This object should have the same structure as [Proximity]{@link google.privacy.dlp.v2.Proximity}
     *
     * @property {Object} likelihoodAdjustment
     *   Likelihood adjustment to apply to all matching findings.
     *
     *   This object should have the same structure as [LikelihoodAdjustment]{@link google.privacy.dlp.v2.LikelihoodAdjustment}
     *
     * @typedef HotwordRule
     * @memberof google.privacy.dlp.v2
     * @see [google.privacy.dlp.v2.CustomInfoType.DetectionRule.HotwordRule definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
     */
    HotwordRule: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    }
  }
};

/**
 * General identifier of a data field in a storage service.
 *
 * @property {string} name
 *   Name describing the field.
 *
 * @typedef FieldId
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.FieldId definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
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
 * @typedef PartitionId
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.PartitionId definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
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
 * @typedef KindExpression
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.KindExpression definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
 */
var KindExpression = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Options defining a data set within Google Cloud Datastore.
 *
 * @property {Object} partitionId
 *   A partition ID identifies a grouping of entities. The grouping is always
 *   by project and namespace, however the namespace ID may be empty.
 *
 *   This object should have the same structure as [PartitionId]{@link google.privacy.dlp.v2.PartitionId}
 *
 * @property {Object} kind
 *   The kind to process.
 *
 *   This object should have the same structure as [KindExpression]{@link google.privacy.dlp.v2.KindExpression}
 *
 * @typedef DatastoreOptions
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.DatastoreOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
 */
var DatastoreOptions = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Options defining a file or a set of files (path ending with *) within
 * a Google Cloud Storage bucket.
 *
 * @property {Object} fileSet
 *   This object should have the same structure as [FileSet]{@link google.privacy.dlp.v2.FileSet}
 *
 * @property {number} bytesLimitPerFile
 *   Max number of bytes to scan from a file. If a scanned file's size is bigger
 *   than this value then the rest of the bytes are omitted. Only one
 *   of bytes_limit_per_file and bytes_limit_per_file_percent can be specified.
 *
 * @property {number} bytesLimitPerFilePercent
 *   Max percentage of bytes to scan from a file. The rest are omitted. The
 *   number of bytes scanned is rounded down. Must be between 0 and 100,
 *   inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one
 *   of bytes_limit_per_file and bytes_limit_per_file_percent can be specified.
 *
 * @property {number[]} fileTypes
 *   List of file type groups to include in the scan.
 *   If empty, all files are scanned and available data format processors
 *   are applied.
 *
 *   The number should be among the values of [FileType]{@link google.privacy.dlp.v2.FileType}
 *
 * @property {number} sampleMethod
 *   The number should be among the values of [SampleMethod]{@link google.privacy.dlp.v2.SampleMethod}
 *
 * @property {number} filesLimitPercent
 *   Limits the number of files to scan to this percentage of the input FileSet.
 *   Number of files scanned is rounded down. Must be between 0 and 100,
 *   inclusively. Both 0 and 100 means no limit. Defaults to 0.
 *
 * @typedef CloudStorageOptions
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.CloudStorageOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
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
   * @typedef FileSet
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.CloudStorageOptions.FileSet definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
   */
  FileSet: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * How to sample bytes if not all bytes are scanned. Meaningful only when used
   * in conjunction with bytes_limit_per_file. If not specified, scanning would
   * start from the top.
   *
   * @enum {number}
   * @memberof google.privacy.dlp.v2
   */
  SampleMethod: {
    SAMPLE_METHOD_UNSPECIFIED: 0,

    /**
     * Scan from the top (default).
     */
    TOP: 1,

    /**
     * For each file larger than bytes_limit_per_file, randomly pick the offset
     * to start scanning. The scanned bytes are contiguous.
     */
    RANDOM_START: 2
  }
};

/**
 * Message representing a set of files in Cloud Storage.
 *
 * @property {string} url
 *   The url, in the format `gs://<bucket>/<path>`. Trailing wildcard in the
 *   path is allowed.
 *
 * @typedef CloudStorageFileSet
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.CloudStorageFileSet definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
 */
var CloudStorageFileSet = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Message representing a single file or path in Cloud Storage.
 *
 * @property {string} path
 *   A url representing a file or path (no wildcards) in Cloud Storage.
 *   Example: gs://[BUCKET_NAME]/dictionary.txt
 *
 * @typedef CloudStoragePath
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.CloudStoragePath definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
 */
var CloudStoragePath = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Options defining BigQuery table and row identifiers.
 *
 * @property {Object} tableReference
 *   Complete BigQuery table reference.
 *
 *   This object should have the same structure as [BigQueryTable]{@link google.privacy.dlp.v2.BigQueryTable}
 *
 * @property {Object[]} identifyingFields
 *   References to fields uniquely identifying rows within the table.
 *   Nested fields in the format, like `person.birthdate.year`, are allowed.
 *
 *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
 *
 * @property {number} rowsLimit
 *   Max number of rows to scan. If the table has more rows than this value, the
 *   rest of the rows are omitted. If not set, or if set to 0, all rows will be
 *   scanned. Only one of rows_limit and rows_limit_percent can be specified.
 *   Cannot be used in conjunction with TimespanConfig.
 *
 * @property {number} rowsLimitPercent
 *   Max percentage of rows to scan. The rest are omitted. The number of rows
 *   scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and
 *   100 means no limit. Defaults to 0. Only one of rows_limit and
 *   rows_limit_percent can be specified. Cannot be used in conjunction with
 *   TimespanConfig.
 *
 * @property {number} sampleMethod
 *   The number should be among the values of [SampleMethod]{@link google.privacy.dlp.v2.SampleMethod}
 *
 * @typedef BigQueryOptions
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.BigQueryOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
 */
var BigQueryOptions = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * How to sample rows if not all rows are scanned. Meaningful only when used
   * in conjunction with rows_limit. If not specified, scanning would start
   * from the top.
   *
   * @enum {number}
   * @memberof google.privacy.dlp.v2
   */
  SampleMethod: {
    SAMPLE_METHOD_UNSPECIFIED: 0,

    /**
     * Scan from the top (default).
     */
    TOP: 1,

    /**
     * Randomly pick the row to start scanning. The scanned rows are contiguous.
     */
    RANDOM_START: 2
  }
};

/**
 * Shared message indicating Cloud storage type.
 *
 * @property {Object} datastoreOptions
 *   Google Cloud Datastore options specification.
 *
 *   This object should have the same structure as [DatastoreOptions]{@link google.privacy.dlp.v2.DatastoreOptions}
 *
 * @property {Object} cloudStorageOptions
 *   Google Cloud Storage options specification.
 *
 *   This object should have the same structure as [CloudStorageOptions]{@link google.privacy.dlp.v2.CloudStorageOptions}
 *
 * @property {Object} bigQueryOptions
 *   BigQuery options specification.
 *
 *   This object should have the same structure as [BigQueryOptions]{@link google.privacy.dlp.v2.BigQueryOptions}
 *
 * @property {Object} timespanConfig
 *   This object should have the same structure as [TimespanConfig]{@link google.privacy.dlp.v2.TimespanConfig}
 *
 * @typedef StorageConfig
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.StorageConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
 */
var StorageConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Configuration of the timespan of the items to include in scanning.
   * Currently only supported when inspecting Google Cloud Storage and BigQuery.
   *
   * @property {Object} startTime
   *   Exclude files or rows older than this value.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   *
   * @property {Object} endTime
   *   Exclude files or rows newer than this value.
   *   If set to zero, no upper time limit is applied.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   *
   * @property {Object} timestampField
   *   Specification of the field containing the timestamp of scanned items.
   *   Used for data sources like Datastore or BigQuery.
   *   If not specified for BigQuery, table last modification timestamp
   *   is checked against given time span.
   *   The valid data types of the timestamp field are:
   *   for BigQuery - timestamp, date, datetime;
   *   for Datastore - timestamp.
   *   Datastore entity will be scanned if the timestamp property does not exist
   *   or its value is empty or invalid.
   *
   *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
   *
   * @property {boolean} enableAutoPopulationOfTimespanConfig
   *   When the job is started by a JobTrigger we will automatically figure out
   *   a valid start_time to avoid scanning files that have not been modified
   *   since the last time the JobTrigger executed. This will be based on the
   *   time of the execution of the last run of the JobTrigger.
   *
   * @typedef TimespanConfig
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.StorageConfig.TimespanConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
   */
  TimespanConfig: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Row key for identifying a record in BigQuery table.
 *
 * @property {Object} tableReference
 *   Complete BigQuery table reference.
 *
 *   This object should have the same structure as [BigQueryTable]{@link google.privacy.dlp.v2.BigQueryTable}
 *
 * @property {number} rowNumber
 *   Absolute number of the row from the beginning of the table at the time
 *   of scanning.
 *
 * @typedef BigQueryKey
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.BigQueryKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
 */
var BigQueryKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Record key for a finding in Cloud Datastore.
 *
 * @property {Object} entityKey
 *   Datastore entity key.
 *
 *   This object should have the same structure as [Key]{@link google.privacy.dlp.v2.Key}
 *
 * @typedef DatastoreKey
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.DatastoreKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
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
 *   This object should have the same structure as [PartitionId]{@link google.privacy.dlp.v2.PartitionId}
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
 *   This object should have the same structure as [PathElement]{@link google.privacy.dlp.v2.PathElement}
 *
 * @typedef Key
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.Key definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
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
   * @typedef PathElement
   * @memberof google.privacy.dlp.v2
   * @see [google.privacy.dlp.v2.Key.PathElement definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
   */
  PathElement: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Message for a unique key indicating a record that contains a finding.
 *
 * @property {Object} datastoreKey
 *   This object should have the same structure as [DatastoreKey]{@link google.privacy.dlp.v2.DatastoreKey}
 *
 * @property {Object} bigQueryKey
 *   This object should have the same structure as [BigQueryKey]{@link google.privacy.dlp.v2.BigQueryKey}
 *
 * @typedef RecordKey
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.RecordKey definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
 */
var RecordKey = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Message defining the location of a BigQuery table. A table is uniquely
 * identified  by its project_id, dataset_id, and table_name. Within a query
 * a table is often referenced with a string in the format of:
 * `<project_id>:<dataset_id>.<table_id>` or
 * `<project_id>.<dataset_id>.<table_id>`.
 *
 * @property {string} projectId
 *   The Google Cloud Platform project ID of the project containing the table.
 *   If omitted, project ID is inferred from the API call.
 *
 * @property {string} datasetId
 *   Dataset ID of the table.
 *
 * @property {string} tableId
 *   Name of the table.
 *
 * @typedef BigQueryTable
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.BigQueryTable definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
 */
var BigQueryTable = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Message defining a field of a BigQuery table.
 *
 * @property {Object} table
 *   Source table of the field.
 *
 *   This object should have the same structure as [BigQueryTable]{@link google.privacy.dlp.v2.BigQueryTable}
 *
 * @property {Object} field
 *   Designated field in the BigQuery table.
 *
 *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
 *
 * @typedef BigQueryField
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.BigQueryField definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
 */
var BigQueryField = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * An entity in a dataset is a field or set of fields that correspond to a
 * single person. For example, in medical records the `EntityId` might be a
 * patient identifier, or for financial records it might be an account
 * identifier. This message is used when generalizations or analysis must take
 * into account that multiple rows correspond to the same entity.
 *
 * @property {Object} field
 *   Composite key indicating which field contains the entity identifier.
 *
 *   This object should have the same structure as [FieldId]{@link google.privacy.dlp.v2.FieldId}
 *
 * @typedef EntityId
 * @memberof google.privacy.dlp.v2
 * @see [google.privacy.dlp.v2.EntityId definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/storage.proto}
 */
var EntityId = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Categorization of results based on how likely they are to represent a match,
 * based on the number of elements they contain which imply a match.
 *
 * @enum {number}
 * @memberof google.privacy.dlp.v2
 */
var Likelihood = {

  /**
   * Default value; same as POSSIBLE.
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
 * Definitions of file type groups to scan.
 *
 * @enum {number}
 * @memberof google.privacy.dlp.v2
 */
var FileType = {

  /**
   * Includes all files.
   */
  FILE_TYPE_UNSPECIFIED: 0,

  /**
   * Includes all file extensions not covered by text file types.
   */
  BINARY_FILE: 1,

  /**
   * Included file extensions:
   *   asc, brf, c, cc, cpp, csv, cxx, c++, cs, css, dart, eml, go, h, hh, hpp,
   *   hxx, h++, hs, html, htm, shtml, shtm, xhtml, lhs, ini, java, js, json,
   *   ocaml, md, mkd, markdown, m, ml, mli, pl, pm, php, phtml, pht, py, pyw,
   *   rb, rbw, rs, rc, scala, sh, sql, tex, txt, text, tsv, vcard, vcs, wml,
   *   xml, xsl, xsd, yml, yaml.
   */
  TEXT_FILE: 2
};