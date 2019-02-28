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
 *   The bytes of the resume file in common format, for example, PDF, TXT.
 *   UTF-8 encoding is required if the resume is text-based, otherwise an error
 *   is thrown.
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
 * @property {Object} options
 *   Optional.
 *
 *   Options that change how the resume parse is performed.
 *
 *   This object should have the same structure as [ParseResumeOptions]{@link google.cloud.talent.v4beta1.ParseResumeOptions}
 *
 * @typedef ParseResumeRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ParseResumeRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/resume_service.proto}
 */
const ParseResumeRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Options that change how the resume parse is performed.
 *
 * @property {boolean} enableOcr
 *   Optional.
 *
 *   Controls whether Optical Character Recognition (OCR) is enabled.
 *
 *   OCR is used to decipher pictorial resumes, or resumes that have some
 *   element of pictorial detail (for example, contact information placed within
 *   an image in a pdf). Note that the API call has a higher latency if OCR is
 *   enabled.
 *
 * @property {boolean} enableFullSkillDetection
 *   Optional.
 *
 *   Controls whether detected skills are included in the parsed profile from
 *   sections of the resume other than just skills sections.
 *
 *   Normally, returned skills are limited to those taken from a resume section
 *   intended to list skills. When enabled, this feature causes detected
 *   skills in other sections to also be included in the returned profile.
 *
 * @typedef ParseResumeOptions
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ParseResumeOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/resume_service.proto}
 */
const ParseResumeOptions = {
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