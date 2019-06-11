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
 * Indicated the type of data that can be stored in a structured data entity
 * (e.g. a table).
 *
 * @property {Object} listElementType
 *   If type_code == ARRAY,
 *   then `list_element_type` is the type of the elements.
 *
 *   This object should have the same structure as [DataType]{@link google.cloud.automl.v1beta1.DataType}
 *
 * @property {Object} structType
 *   If type_code == STRUCT, then `struct_type`
 *   provides type information for the struct's fields.
 *
 *   This object should have the same structure as [StructType]{@link google.cloud.automl.v1beta1.StructType}
 *
 * @property {string} timeFormat
 *   If type_code == TIMESTAMP
 *   then `time_format` provides the format in which that time field is
 *   expressed. The time_format must either be one of:
 *   * `UNIX_SECONDS`
 *   * `UNIX_MILLISECONDS`
 *   * `UNIX_MICROSECONDS`
 *   * `UNIX_NANOSECONDS`
 *   (for respectively number of seconds, milliseconds, microseconds and
 *   nanoseconds since start of the Unix epoch);
 *   or be written in `strftime` syntax. If time_format is not set, then the
 *   default format as described on the type_code is used.
 *
 * @property {number} typeCode
 *   Required. The TypeCode for this type.
 *
 *   The number should be among the values of [TypeCode]{@link google.cloud.automl.v1beta1.TypeCode}
 *
 * @property {boolean} nullable
 *   If true, this DataType can also be `NULL`. In .CSV files `NULL` value is
 *   expressed as an empty string.
 *
 * @typedef DataType
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.DataType definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_types.proto}
 */
const DataType = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * `StructType` defines the DataType-s of a STRUCT type.
 *
 * @property {Object.<string, Object>} fields
 *   Unordered map of struct field names to their data types.
 *   Fields cannot be added or removed via Update. Their names and
 *   data types are still mutable.
 *
 * @typedef StructType
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.StructType definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_types.proto}
 */
const StructType = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * `TypeCode` is used as a part of
 * DataType.
 *
 * Each legal value of a DataType can be encoded to or decoded from a JSON
 * value, using the encodings listed below, and definitions of which can be
 * found at
 *
 * https:
 * //developers.google.com/protocol-buffers
 * // /docs/reference/google.protobuf#value.
 *
 * @enum {number}
 * @memberof google.cloud.automl.v1beta1
 */
const TypeCode = {

  /**
   * Not specified. Should not be used.
   */
  TYPE_CODE_UNSPECIFIED: 0,

  /**
   * Encoded as `number`, or the strings `"NaN"`, `"Infinity"`, or
   * `"-Infinity"`.
   */
  FLOAT64: 3,

  /**
   * Must be between 0AD and 9999AD. Encoded as `string` according to
   * time_format, or, if
   * that format is not set, then in RFC 3339 `date-time` format, where
   * `time-offset` = `"Z"` (e.g. 1985-04-12T23:20:50.52Z).
   */
  TIMESTAMP: 4,

  /**
   * Encoded as `string`.
   */
  STRING: 6,

  /**
   * Encoded as `list`, where the list elements are represented according to
   *
   * list_element_type.
   */
  ARRAY: 8,

  /**
   * Encoded as `struct`, where field values are represented according to
   * struct_type.
   */
  STRUCT: 9,

  /**
   * Values of this type are not further understood by AutoML,
   * e.g. AutoML is unable to tell the order of values (as it could with
   * FLOAT64), or is unable to say if one value contains another (as it
   * could with STRING).
   * Encoded as `string` (bytes should be base64-encoded, as described in RFC
   * 4648, section 4).
   */
  CATEGORY: 10
};