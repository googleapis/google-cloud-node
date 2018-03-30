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
 * A description of a label.
 *
 * @property {string} key
 *   The label key.
 *
 * @property {number} valueType
 *   The type of data that can be assigned to the label.
 *
 *   The number should be among the values of [ValueType]{@link google.api.ValueType}
 *
 * @property {string} description
 *   A human-readable description for the label.
 *
 * @typedef LabelDescriptor
 * @memberof google.api
 * @see [google.api.LabelDescriptor definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/api/label.proto}
 */
var LabelDescriptor = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Value types that can be used as label values.
   *
   * @enum {number}
   * @memberof google.api
   */
  ValueType: {

    /**
     * A variable-length string. This is the default.
     */
    STRING: 0,

    /**
     * Boolean; true or false.
     */
    BOOL: 1,

    /**
     * A 64-bit signed integer.
     */
    INT64: 2
  }
};