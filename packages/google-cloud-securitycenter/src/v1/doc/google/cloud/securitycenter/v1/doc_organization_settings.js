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
 * User specified settings that are attached to the Cloud Security Command
 * Center (Cloud SCC) organization.
 *
 * @property {string} name
 *   The relative resource name of the settings. See:
 *   https://cloud.google.com/apis/design/resource_names#relative_resource_name
 *   Example:
 *   "organizations/123/organizationSettings".
 *
 * @property {boolean} enableAssetDiscovery
 *   A flag that indicates if Asset Discovery should be enabled. If the flag is
 *   set to `true`, then discovery of assets will occur. If it is set to `false,
 *   all historical assets will remain, but discovery of future assets will not
 *   occur.
 *
 * @property {Object} assetDiscoveryConfig
 *   The configuration used for Asset Discovery runs.
 *
 *   This object should have the same structure as [AssetDiscoveryConfig]{@link google.cloud.securitycenter.v1.AssetDiscoveryConfig}
 *
 * @typedef OrganizationSettings
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.OrganizationSettings definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/organization_settings.proto}
 */
const OrganizationSettings = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The configuration used for Asset Discovery runs.
   *
   * @property {string[]} projectIds
   *   The project ids to use for filtering asset discovery.
   *
   * @property {number} inclusionMode
   *   The mode to use for filtering asset discovery.
   *
   *   The number should be among the values of [InclusionMode]{@link google.cloud.securitycenter.v1.InclusionMode}
   *
   * @typedef AssetDiscoveryConfig
   * @memberof google.cloud.securitycenter.v1
   * @see [google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/organization_settings.proto}
   */
  AssetDiscoveryConfig: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * The mode of inclusion when running Asset Discovery.
     * Asset discovery can be limited by explicitly identifying projects to be
     * included or excluded. If INCLUDE_ONLY is set, then only those projects
     * within the organization and their children are discovered during asset
     * discovery. If EXCLUDE is set, then projects that don't match those
     * projects are discovered during asset discovery. If neither are set, then
     * all projects within the organization are discovered during asset
     * discovery.
     *
     * @enum {number}
     * @memberof google.cloud.securitycenter.v1
     */
    InclusionMode: {

      /**
       * Unspecified. Setting the mode with this value will disable
       * inclusion/exclusion filtering for Asset Discovery.
       */
      INCLUSION_MODE_UNSPECIFIED: 0,

      /**
       * Asset Discovery will capture only the resources within the projects
       * specified. All other resources will be ignored.
       */
      INCLUDE_ONLY: 1,

      /**
       * Asset Discovery will ignore all resources under the projects specified.
       * All other resources will be retrieved.
       */
      EXCLUDE: 2
    }
  }
};