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
 * Parse resume request.
 *
 * @property {string} parent
 *   Required.
 *
 *   The resource name of the project.
 *
 *   The format is "projects/{project_id}", for example,
 *   "projects/api-test-project".
 *
 * @property {string} resume
 *   Required.
 *
 *   The bytes of the resume file in common format. Currently the API supports
 *   the following formats:
 *   PDF, TXT, DOC, RTF and DOCX.
 *
 * @property {string} regionCode
 *   Optional.
 *
 *   The region code indicating where the resume is from. Values
 *   are as per the ISO-3166-2 format. For example, US, FR, DE.
 *
 *   This value is optional, but providing this value improves the resume
 *   parsing quality and performance.
 *
 *   An error is thrown if the regionCode is invalid.
 *
 * @property {string} languageCode
 *   Optional.
 *
 *   The language code of contents in the resume.
 *
 *   Language codes must be in BCP-47 format, such as "en-US" or "sr-Latn".
 *   For more information, see
 *   [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47){:
 *   class="external" target="_blank" }.
 *
 * @typedef ParseResumeRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ParseResumeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/resume_service.proto}
 */
const ParseResumeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Parse resume response.
 *
 * @property {Object} profile
 *   The profile parsed from resume.
 *
 *   This object should have the same structure as [Profile]{@link google.cloud.talent.v4beta1.Profile}
 *
 * @property {string} rawText
 *   Raw text from resume.
 *
 * @typedef ParseResumeResponse
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ParseResumeResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/resume_service.proto}
 */
const ParseResumeResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};