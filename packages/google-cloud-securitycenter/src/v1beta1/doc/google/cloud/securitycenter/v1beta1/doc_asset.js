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
 * Cloud Security Command Center's (Cloud SCC) representation of a Google Cloud
 * Platform (GCP) resource.
 *
 * The Asset is a Cloud SCC resource that captures information about a single
 * GCP resource. All modifications to an Asset are only within the context of
 * Cloud SCC and don't affect the referenced GCP resource.
 *
 * @property {string} name
 *   The relative resource name of this asset. See:
 *   https://cloud.google.com/apis/design/resource_names#relative_resource_name
 *   Example:
 *   "organizations/{organization_id}/assets/{asset_id}".
 *
 * @property {Object} securityCenterProperties
 *   Cloud SCC managed properties. These properties are managed by
 *   Cloud SCC and cannot be modified by the user.
 *
 *   This object should have the same structure as [SecurityCenterProperties]{@link google.cloud.securitycenter.v1beta1.SecurityCenterProperties}
 *
 * @property {Object.<string, Object>} resourceProperties
 *   Resource managed properties. These properties are managed and defined by
 *   the GCP resource and cannot be modified by the user.
 *
 * @property {Object} securityMarks
 *   User specified security marks. These marks are entirely managed by the user
 *   and come from the SecurityMarks resource that belongs to the asset.
 *
 *   This object should have the same structure as [SecurityMarks]{@link google.cloud.securitycenter.v1beta1.SecurityMarks}
 *
 * @property {Object} createTime
 *   The time at which the asset was created in Cloud SCC.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   The time at which the asset was last updated, added, or deleted in Cloud
 *   SCC.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef Asset
 * @memberof google.cloud.securitycenter.v1beta1
 * @see [google.cloud.securitycenter.v1beta1.Asset definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1beta1/asset.proto}
 */
const Asset = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Cloud SCC managed properties. These properties are managed by Cloud SCC and
   * cannot be modified by the user.
   *
   * @property {string} resourceName
   *   Immutable. The full resource name of the GCP resource this asset
   *   represents. This field is immutable after create time. See:
   *   https://cloud.google.com/apis/design/resource_names#full_resource_name
   *
   * @property {string} resourceType
   *   The type of the GCP resource. Examples include: APPLICATION,
   *   PROJECT, and ORGANIZATION. This is a case insensitive field defined by
   *   Cloud SCC and/or the producer of the resource and is immutable
   *   after create time.
   *
   * @property {string} resourceParent
   *   The full resource name of the immediate parent of the resource. See:
   *   https://cloud.google.com/apis/design/resource_names#full_resource_name
   *
   * @property {string} resourceProject
   *   The full resource name of the project the resource belongs to. See:
   *   https://cloud.google.com/apis/design/resource_names#full_resource_name
   *
   * @property {string[]} resourceOwners
   *   Owners of the Google Cloud resource.
   *
   * @typedef SecurityCenterProperties
   * @memberof google.cloud.securitycenter.v1beta1
   * @see [google.cloud.securitycenter.v1beta1.Asset.SecurityCenterProperties definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1beta1/asset.proto}
   */
  SecurityCenterProperties: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};