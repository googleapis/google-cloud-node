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
 * Cloud Security Command Center (Cloud SCC) finding.
 *
 * A finding is a record of assessment data (security, risk, health or privacy)
 * ingested into Cloud SCC for presentation, notification, analysis,
 * policy testing, and enforcement. For example, an XSS vulnerability in an
 * App Engine application is a finding.
 *
 * @property {string} name
 *   The relative resource name of this finding. See:
 *   https://cloud.google.com/apis/design/resource_names#relative_resource_name
 *   Example:
 *   "organizations/123/sources/456/findings/789"
 *
 * @property {string} parent
 *   The relative resource name of the source the finding belongs to. See:
 *   https://cloud.google.com/apis/design/resource_names#relative_resource_name
 *   This field is immutable after creation time.
 *   For example:
 *   "organizations/123/sources/456"
 *
 * @property {string} resourceName
 *   The full resource name of the Google Cloud Platform (GCP) resource this
 *   finding is for. See:
 *   https://cloud.google.com/apis/design/resource_names#full_resource_name
 *   This field is immutable after creation time.
 *
 * @property {number} state
 *   The state of the finding.
 *
 *   The number should be among the values of [State]{@link google.cloud.securitycenter.v1.State}
 *
 * @property {string} category
 *   The additional taxonomy group within findings from a given source.
 *   This field is immutable after creation time.
 *   Example: "XSS_FLASH_INJECTION"
 *
 * @property {string} externalUri
 *   The URI that, if available, points to a web page outside of Cloud SCC
 *   where additional information about the finding can be found. This field is
 *   guaranteed to be either empty or a well formed URL.
 *
 * @property {Object.<string, Object>} sourceProperties
 *   Source specific properties. These properties are managed by the source
 *   that writes the finding. The key names in the source_properties map must be
 *   between 1 and 255 characters, and must start with a letter and contain
 *   alphanumeric characters or underscores only.
 *
 * @property {Object} securityMarks
 *   Output only. User specified security marks. These marks are entirely
 *   managed by the user and come from the SecurityMarks resource that belongs
 *   to the finding.
 *
 *   This object should have the same structure as [SecurityMarks]{@link google.cloud.securitycenter.v1.SecurityMarks}
 *
 * @property {Object} eventTime
 *   The time at which the event took place. For example, if the finding
 *   represents an open firewall it would capture the time the open firewall was
 *   detected.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} createTime
 *   The time at which the finding was created in Cloud SCC.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef Finding
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.Finding definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/finding.proto}
 */
const Finding = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The state of the finding.
   *
   * @enum {number}
   * @memberof google.cloud.securitycenter.v1
   */
  State: {

    /**
     * Unspecified state.
     */
    STATE_UNSPECIFIED: 0,

    /**
     * The finding requires attention and has not been addressed yet.
     */
    ACTIVE: 1,

    /**
     * The finding has been fixed, triaged as a non-issue or otherwise addressed
     * and is no longer active.
     */
    INACTIVE: 2
  }
};