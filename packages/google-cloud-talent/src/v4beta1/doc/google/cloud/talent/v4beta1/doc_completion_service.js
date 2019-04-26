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
 * Input only.
 *
 * Auto-complete parameters.
 *
 * @property {string} parent
 *   Required.
 *
 *   Resource name of tenant the completion is performed within.
 *
 *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
 *   "projects/api-test-project/tenant/foo".
 *
 *   Tenant id is optional and the default tenant is used if unspecified, for
 *   example, "projects/api-test-project".
 *
 * @property {string} query
 *   Required.
 *
 *   The query used to generate suggestions.
 *
 *   The maximum number of allowed characters is 255.
 *
 * @property {string[]} languageCodes
 *   Optional.
 *
 *   The list of languages of the query. This is
 *   the BCP-47 language code, such as "en-US" or "sr-Latn".
 *   For more information, see
 *   [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).
 *
 *   For CompletionType.JOB_TITLE type, only open jobs with the same
 *   language_codes are returned.
 *
 *   For CompletionType.COMPANY_NAME type,
 *   only companies having open jobs with the same language_codes are
 *   returned.
 *
 *   For CompletionType.COMBINED type, only open jobs with the same
 *   language_codes or companies having open jobs with the same
 *   language_codes are returned.
 *
 *   The maximum number of allowed characters is 255.
 *
 * @property {number} pageSize
 *   Required.
 *
 *   Completion result count.
 *
 *   The maximum allowed page size is 10.
 *
 * @property {string} company
 *   Optional.
 *
 *   If provided, restricts completion to specified company.
 *
 *   The format is
 *   "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for
 *   example, "projects/api-test-project/tenants/foo/companies/bar".
 *
 *   Tenant id is optional and the default tenant is used if unspecified, for
 *   example, "projects/api-test-project/companies/bar".
 *
 * @property {number} scope
 *   Optional.
 *
 *   The scope of the completion. The defaults is CompletionScope.PUBLIC.
 *
 *   The number should be among the values of [CompletionScope]{@link google.cloud.talent.v4beta1.CompletionScope}
 *
 * @property {number} type
 *   Optional.
 *
 *   The completion topic. The default is CompletionType.COMBINED.
 *
 *   The number should be among the values of [CompletionType]{@link google.cloud.talent.v4beta1.CompletionType}
 *
 * @typedef CompleteQueryRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.CompleteQueryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/completion_service.proto}
 */
const CompleteQueryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Enum to specify the scope of completion.
   *
   * @enum {number}
   * @memberof google.cloud.talent.v4beta1
   */
  CompletionScope: {

    /**
     * Default value.
     */
    COMPLETION_SCOPE_UNSPECIFIED: 0,

    /**
     * Suggestions are based only on the data provided by the client.
     */
    TENANT: 1,

    /**
     * Suggestions are based on all jobs data in the system that's visible to
     * the client
     */
    PUBLIC: 2
  },

  /**
   * Enum to specify auto-completion topics.
   *
   * @enum {number}
   * @memberof google.cloud.talent.v4beta1
   */
  CompletionType: {

    /**
     * Default value.
     */
    COMPLETION_TYPE_UNSPECIFIED: 0,

    /**
     * Only suggest job titles.
     */
    JOB_TITLE: 1,

    /**
     * Only suggest company names.
     */
    COMPANY_NAME: 2,

    /**
     * Suggest both job titles and company names.
     */
    COMBINED: 3
  }
};

/**
 * Output only.
 *
 * Response of auto-complete query.
 *
 * @property {Object[]} completionResults
 *   Results of the matching job/company candidates.
 *
 *   This object should have the same structure as [CompletionResult]{@link google.cloud.talent.v4beta1.CompletionResult}
 *
 * @property {Object} metadata
 *   Additional information for the API invocation, such as the request
 *   tracking id.
 *
 *   This object should have the same structure as [ResponseMetadata]{@link google.cloud.talent.v4beta1.ResponseMetadata}
 *
 * @typedef CompleteQueryResponse
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.CompleteQueryResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/completion_service.proto}
 */
const CompleteQueryResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Output only.
   *
   * Resource that represents completion results.
   *
   * @property {string} suggestion
   *   The suggestion for the query.
   *
   * @property {number} type
   *   The completion topic.
   *
   *   The number should be among the values of [CompletionType]{@link google.cloud.talent.v4beta1.CompletionType}
   *
   * @property {string} imageUri
   *   The URI of the company image for CompletionType.COMPANY_NAME.
   *
   * @typedef CompletionResult
   * @memberof google.cloud.talent.v4beta1
   * @see [google.cloud.talent.v4beta1.CompleteQueryResponse.CompletionResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/completion_service.proto}
   */
  CompletionResult: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};