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
 * User specified security marks that are attached to the parent Cloud Security
 * Command Center (Cloud SCC) resource. Security marks are scoped within a Cloud
 * SCC organization -- they can be modified and viewed by all users who have
 * proper permissions on the organization.
 *
 * @property {string} name
 *   The relative resource name of the SecurityMarks. See:
 *   https://cloud.google.com/apis/design/resource_names#relative_resource_name
 *   Examples:
 *   "organizations/{organization_id}/assets/{asset_id}/securityMarks"
 *   "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
 *
 * @property {Object.<string, string>} marks
 *   Mutable user specified security marks belonging to the parent resource.
 *   Constraints are as follows:
 *
 *     * Keys and values are treated as case insensitive
 *     * Keys must be between 1 - 256 characters (inclusive)
 *     * Keys must be letters, numbers, underscores, or dashes
 *     * Values have leading and trailing whitespace trimmed, remaining
 *       characters must be between 1 - 4096 characters (inclusive)
 *
 * @typedef SecurityMarks
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.SecurityMarks definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/security_marks.proto}
 */
const SecurityMarks = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};