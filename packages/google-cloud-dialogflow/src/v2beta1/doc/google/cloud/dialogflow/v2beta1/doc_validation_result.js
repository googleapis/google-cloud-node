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
 * Represents a single validation error.
 *
 * @property {number} severity
 *   The severity of the error.
 *
 *   The number should be among the values of [Severity]{@link google.cloud.dialogflow.v2beta1.Severity}
 *
 * @property {string[]} entries
 *   The names of the entries that the error is associated with.
 *   Format:
 *
 *   - "projects/<Project ID>/agent", if the error is associated with the entire
 *   agent.
 *   - "projects/<Project ID>/agent/intents/<Intent ID>", if the error is
 *   associated with certain intents.
 *   - "projects/<Project
 *   ID>/agent/intents/<Intent Id>/trainingPhrases/<Training Phrase ID>", if the
 *   error is associated with certain intent training phrases.
 *   - "projects/<Project ID>/agent/intents/<Intent Id>/parameters/<Parameter
 *   ID>", if the error is associated with certain intent parameters.
 *   - "projects/<Project ID>/agent/entities/<Entity ID>", if the error is
 *   associated with certain entities.
 *
 * @property {string} errorMessage
 *   The detailed error messsage.
 *
 * @typedef ValidationError
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.ValidationError definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/validation_result.proto}
 */
const ValidationError = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Represents a level of severity.
   *
   * @enum {number}
   * @memberof google.cloud.dialogflow.v2beta1
   */
  Severity: {

    /**
     * Not specified. This value should never be used.
     */
    SEVERITY_UNSPECIFIED: 0,

    /**
     * The agent doesn't follow Dialogflow best practicies.
     */
    INFO: 1,

    /**
     * The agent may not behave as expected.
     */
    WARNING: 2,

    /**
     * The agent may experience partial failures.
     */
    ERROR: 3,

    /**
     * The agent may completely fail.
     */
    CRITICAL: 4
  }
};

/**
 * Represents the output of agent validation.
 *
 * @property {Object[]} validationErrors
 *   Contains all validation errors.
 *
 *   This object should have the same structure as [ValidationError]{@link google.cloud.dialogflow.v2beta1.ValidationError}
 *
 * @typedef ValidationResult
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.ValidationResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/validation_result.proto}
 */
const ValidationResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};