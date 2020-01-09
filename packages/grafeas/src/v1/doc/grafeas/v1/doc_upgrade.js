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
 * An Upgrade Note represents a potential upgrade of a package to a given
 * version. For each package version combination (i.e. bash 4.0, bash 4.1,
 * bash 4.1.2), there will be an Upgrade Note. For Windows, windows_update field
 * represents the information related to the update.
 *
 * @property {string} package
 *   Required for non-Windows OS. The package this Upgrade is for.
 *
 * @property {Object} version
 *   Required for non-Windows OS. The version of the package in machine + human
 *   readable form.
 *
 *   This object should have the same structure as [Version]{@link grafeas.v1.Version}
 *
 * @property {Object[]} distributions
 *   Metadata about the upgrade for each specific operating system.
 *
 *   This object should have the same structure as [UpgradeDistribution]{@link grafeas.v1.UpgradeDistribution}
 *
 * @property {Object} windowsUpdate
 *   Required for Windows OS. Represents the metadata about the Windows update.
 *
 *   This object should have the same structure as [WindowsUpdate]{@link grafeas.v1.WindowsUpdate}
 *
 * @typedef UpgradeNote
 * @memberof grafeas.v1
 * @see [grafeas.v1.UpgradeNote definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/upgrade.proto}
 */
const UpgradeNote = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The Upgrade Distribution represents metadata about the Upgrade for each
 * operating system (CPE). Some distributions have additional metadata around
 * updates, classifying them into various categories and severities.
 *
 * @property {string} cpeUri
 *   Required - The specific operating system this metadata applies to. See
 *   https://cpe.mitre.org/specification/.
 *
 * @property {string} classification
 *   The operating system classification of this Upgrade, as specified by the
 *   upstream operating system upgrade feed. For Windows the classification is
 *   one of the category_ids listed at
 *   https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ff357803(v=vs.85)
 *
 * @property {string} severity
 *   The severity as specified by the upstream operating system.
 *
 * @property {string[]} cve
 *   The cve tied to this Upgrade.
 *
 * @typedef UpgradeDistribution
 * @memberof grafeas.v1
 * @see [grafeas.v1.UpgradeDistribution definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/upgrade.proto}
 */
const UpgradeDistribution = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Windows Update represents the metadata about the update for the Windows
 * operating system. The fields in this message come from the Windows Update API
 * documented at
 * https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.
 *
 * @property {Object} identity
 *   Required - The unique identifier for the update.
 *
 *   This object should have the same structure as [Identity]{@link grafeas.v1.Identity}
 *
 * @property {string} title
 *   The localized title of the update.
 *
 * @property {string} description
 *   The localized description of the update.
 *
 * @property {Object[]} categories
 *   The list of categories to which the update belongs.
 *
 *   This object should have the same structure as [Category]{@link grafeas.v1.Category}
 *
 * @property {string[]} kbArticleIds
 *   The Microsoft Knowledge Base article IDs that are associated with the
 *   update.
 *
 * @property {string} supportUrl
 *   The hyperlink to the support information for the update.
 *
 * @property {Object} lastPublishedTimestamp
 *   The last published timestamp of the update.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef WindowsUpdate
 * @memberof grafeas.v1
 * @see [grafeas.v1.WindowsUpdate definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/upgrade.proto}
 */
const WindowsUpdate = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The unique identifier of the update.
   *
   * @property {string} updateId
   *   The revision independent identifier of the update.
   *
   * @property {number} revision
   *   The revision number of the update.
   *
   * @typedef Identity
   * @memberof grafeas.v1
   * @see [grafeas.v1.WindowsUpdate.Identity definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/upgrade.proto}
   */
  Identity: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * The category to which the update belongs.
   *
   * @property {string} categoryId
   *   The identifier of the category.
   *
   * @property {string} name
   *   The localized name of the category.
   *
   * @typedef Category
   * @memberof grafeas.v1
   * @see [grafeas.v1.WindowsUpdate.Category definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/upgrade.proto}
   */
  Category: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * An Upgrade Occurrence represents that a specific resource_url could install a
 * specific upgrade. This presence is supplied via local sources (i.e. it is
 * present in the mirror and the running system has noticed its availability).
 * For Windows, both distribution and windows_update contain information for the
 * Windows update.
 *
 * @property {string} package
 *   Required for non-Windows OS. The package this Upgrade is for.
 *
 * @property {Object} parsedVersion
 *   Required for non-Windows OS. The version of the package in a machine +
 *   human readable form.
 *
 *   This object should have the same structure as [Version]{@link grafeas.v1.Version}
 *
 * @property {Object} distribution
 *   Metadata about the upgrade for available for the specific operating system
 *   for the resource_url. This allows efficient filtering, as well as
 *   making it easier to use the occurrence.
 *
 *   This object should have the same structure as [UpgradeDistribution]{@link grafeas.v1.UpgradeDistribution}
 *
 * @property {Object} windowsUpdate
 *   Required for Windows OS. Represents the metadata about the Windows update.
 *
 *   This object should have the same structure as [WindowsUpdate]{@link grafeas.v1.WindowsUpdate}
 *
 * @typedef UpgradeOccurrence
 * @memberof grafeas.v1
 * @see [grafeas.v1.UpgradeOccurrence definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/upgrade.proto}
 */
const UpgradeOccurrence = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};