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
 * This represents a particular channel of distribution for a given package.
 * E.g., Debian's jessie-backports dpkg mirror.
 *
 * @property {string} cpeUri
 *   The cpe_uri in [cpe format](https://cpe.mitre.org/specification/)
 *   denoting the package manager version distributing a package.
 *
 * @property {number} architecture
 *   The CPU architecture for which packages in this distribution channel were
 *   built.
 *
 *   The number should be among the values of [Architecture]{@link grafeas.v1beta1.package.Architecture}
 *
 * @property {Object} latestVersion
 *   The latest available version of this package in this distribution
 *   channel.
 *
 *   This object should have the same structure as [Version]{@link grafeas.v1beta1.package.Version}
 *
 * @property {string} maintainer
 *   A freeform string denoting the maintainer of this package.
 *
 * @property {string} url
 *   The distribution channel-specific homepage for this package.
 *
 * @property {string} description
 *   The distribution channel-specific description of this package.
 *
 * @typedef Distribution
 * @memberof grafeas.v1beta1.package
 * @see [grafeas.v1beta1.package.Distribution definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/package/package.proto}
 */
const Distribution = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * An occurrence of a particular package installation found within a system's
 * filesystem. E.g., glibc was found in /var/lib/dpkg/status.
 *
 * @property {string} cpeUri
 *   The cpe_uri in [cpe format](https://cpe.mitre.org/specification/)
 *   denoting the package manager version distributing a package.
 *
 * @property {Object} version
 *   The version installed at this location.
 *
 *   This object should have the same structure as [Version]{@link grafeas.v1beta1.package.Version}
 *
 * @property {string} path
 *   The path from which we gathered that this package/version is installed.
 *
 * @typedef Location
 * @memberof grafeas.v1beta1.package
 * @see [grafeas.v1beta1.package.Location definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/package/package.proto}
 */
const Location = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * This represents a particular package that is distributed over various
 * channels. E.g., glibc (aka libc6) is distributed by many, at various
 * versions.
 *
 * @property {string} name
 *   The name of the package.
 *
 * @property {Object[]} distribution
 *   The various channels by which a package is distributed.
 *
 *   This object should have the same structure as [Distribution]{@link grafeas.v1beta1.package.Distribution}
 *
 * @typedef Package
 * @memberof grafeas.v1beta1.package
 * @see [grafeas.v1beta1.package.Package definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/package/package.proto}
 */
const Package = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Details of a package occurrence.
 *
 * @property {Object} installation
 *   Where the package was installed.
 *
 *   This object should have the same structure as [Installation]{@link grafeas.v1beta1.package.Installation}
 *
 * @typedef Details
 * @memberof grafeas.v1beta1.package
 * @see [grafeas.v1beta1.package.Details definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/package/package.proto}
 */
const Details = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * This represents how a particular software package may be installed on a
 * system.
 *
 * @property {string} name
 *   Output only. The name of the installed package.
 *
 * @property {Object[]} location
 *   All of the places within the filesystem versions of this package
 *   have been found.
 *
 *   This object should have the same structure as [Location]{@link grafeas.v1beta1.package.Location}
 *
 * @typedef Installation
 * @memberof grafeas.v1beta1.package
 * @see [grafeas.v1beta1.package.Installation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/package/package.proto}
 */
const Installation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Version contains structured information about the version of a package.
 *
 * @property {number} epoch
 *   Used to correct mistakes in the version numbering scheme.
 *
 * @property {string} name
 *   The main part of the version name.
 *
 * @property {string} revision
 *   The iteration of the package build from the above version.
 *
 * @property {number} kind
 *   Distinguish between sentinel MIN/MAX versions and normal versions. If
 *   kind is not NORMAL, then the other fields are ignored.
 *
 *   The number should be among the values of [VersionKind]{@link grafeas.v1beta1.package.VersionKind}
 *
 * @typedef Version
 * @memberof grafeas.v1beta1.package
 * @see [grafeas.v1beta1.package.Version definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/package/package.proto}
 */
const Version = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Whether this is an ordinary package version or a sentinel MIN/MAX version.
   *
   * @enum {number}
   * @memberof grafeas.v1beta1.package
   */
  VersionKind: {

    /**
     * Unknown.
     */
    VERSION_KIND_UNSPECIFIED: 0,

    /**
     * A standard package version, defined by the other fields.
     */
    NORMAL: 1,

    /**
     * A special version representing negative infinity, other fields are
     * ignored.
     */
    MINIMUM: 2,

    /**
     * A special version representing positive infinity, other fields are
     * ignored.
     */
    MAXIMUM: 3
  }
};

/**
 * Instruction set architectures supported by various package managers.
 *
 * @enum {number}
 * @memberof grafeas.v1beta1.package
 */
const Architecture = {

  /**
   * Unknown architecture.
   */
  ARCHITECTURE_UNSPECIFIED: 0,

  /**
   * X86 architecture.
   */
  X86: 1,

  /**
   * X64 architecture.
   */
  X64: 2
};