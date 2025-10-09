// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Dirent} from 'fs';
import * as fs from 'fs/promises';
import * as path from 'path';
import {INDEX_PATH} from './generate-index';

export const SRC_PATH = 'src';
export const ESM_SRC_PATH = 'esm/src';

export interface VersionsAndClients {
  version: string;
  clients: string[];
}

// This regex is safe because we are basically just searching for the code in
// the generator
/*
{% for service in api.services -%}
export {{ '{' + service.name.toPascalCase() + 'Client}' }} from './{{ service.name.toSnakeCase() }}_client';
{% endfor -%}
/(?:\w+Client)/g;
/export\s*{\s*(\w+Client)\s*}/g;
*/
const CLIENT_EXTRACTION_REGEX = /export\s*{\s*(\w+Client)\s*}/g;

/**
 * Represents a parsed version of a library, breaking it down into components
 * that can be used for comparison to determine release precedence.
 *
 * @property {string} version - The original version string (e.g., 'v1', 'v2beta1').
 * @property {number} major - The major version number (e.g., the '1' in 'v1').
 * @property {number} precedence - The numerical precedence of the release type, where stable > beta > alpha.
 * @property {number} preReleaseQualifier - The qualifier for pre-releases (e.g., the '2' in 'beta2').
 */
interface VersionSpec {
  version: string;
  major: number;
  precedence: number;
  preReleaseQualifier: number;
}

export interface LibraryConfigOptions {
  sourcePath: string;
  destinationPath: string;
  defaultVersion?: string;
  isEsm?: boolean;
}

/**
 * Represents a library configuration with key details about its release status.
 */
export class LibraryConfig {
  // Properties passed in the constructor
  public isEsm: boolean;
  public versions: string[] = [];
  public clientsAndVersions: VersionsAndClients[] = [];
  public srcPath: string;
  public sourcePath: string;
  public destinationPath: string;
  public defaultVersion = '';
  public defaultVersionAndClients: VersionsAndClients = {
    version: '',
    clients: [],
  };

  /**
   * @param isEsm Whether the library supports ES Modules.
   * @param defaultVersion The recommended version to use.
   * @param sourcePath The path where the library is read from.
   * @param destinationPath The path where the library is written to.
   */
  constructor({
    sourcePath,
    destinationPath,
    defaultVersion,
    isEsm,
  }: LibraryConfigOptions) {
    this.isEsm = isEsm ?? false;
    this.srcPath = isEsm ? ESM_SRC_PATH : SRC_PATH;
    this.sourcePath = sourcePath;
    this.destinationPath = destinationPath;
    this.defaultVersion = defaultVersion ?? '';
  }

  /**
   * Initializes async properties for the LibraryConfig instance.
   * Call this after constructing the object.
   */
  public async initialize(): Promise<void> {
    this.clientsAndVersions = await this.getClientsAndVersions();
    this.versions = await this.getVersions();
    if (!this.defaultVersion) {
      this.defaultVersion = this.getHighestVersionWithPrecedence(this.versions);
    }
    this.defaultVersionAndClients = this.getDefaultVersionAndClients();
  }

  /**
   * A getter to provide a list of all available versions.
   */
  public async getVersions(): Promise<string[]> {
    return this.clientsAndVersions.map(x => x.version);
  }

  /**
   * A getter to provide a list of clients and their corresponding versions.
   */
  public async getClientsAndVersions() {
    const clientsAndVersions: VersionsAndClients[] = [];
    const allVersionedLibraries = await getAllTopLevelDirectories(
      this.sourcePath,
    );
    for (const directory of allVersionedLibraries) {
      try {
        await fs.stat(path.join(this.sourcePath, directory, this.srcPath));
      } catch (err) {
        throw new Error(
          'Unexpected library format. Expected *only* top-level directories containing fully formed libraries for each verison.',
        );
        // If this fails, it means that the library is not
        // in the format we expect. This could happen if we
        // are rerunning the command on a well-formed library
      }
      const versions = await getAllTopLevelDirectories(
        path.join(this.sourcePath, directory, this.srcPath),
      );
      // even though this looks nested, it ends up being o(1) since
      // we only have one directory per versioned library (the single
      // version of the library)
      for (const version of versions) {
        const indexFile = path.join(
          this.sourcePath,
          directory,
          this.srcPath,
          version,
          INDEX_PATH,
        );
        if (await fs.stat(indexFile)) {
          const fileContent = await fs.readFile(indexFile, 'utf8');
          const clientsRegexMatch = Array.from(
            fileContent.matchAll(CLIENT_EXTRACTION_REGEX),
          );
          // ensures we don't have any duplicates in the regex matching
          // creates an array from the set which is what the client type is
          clientsAndVersions.push({
            version,
            clients: Array.from(
              new Set(clientsRegexMatch.map((x: any) => x[1])),
            ),
          });
        }
      }
    }
    console.log('Found the following clients and versions', clientsAndVersions);
    return clientsAndVersions;
  }

  /**
   * A getter to return just the default version's clients.
   */
  public getDefaultVersionAndClients() {
    const defaultVersionAndClients = this.clientsAndVersions.find(
      vc => vc.version === this.defaultVersion,
    );
    if (!defaultVersionAndClients) {
      throw new Error(
        `Default version ${this.defaultVersion} not found in available versions: ${this.versions.join(
          ', ',
        )}`,
      );
    }
    return defaultVersionAndClients;
  }

  /**
   * Gets the highest version with precedence from a list of versions.
   * Used in case we need to determine a default version if not provided.
   * Precedence is defined as: stable > beta > alpha.
   * If two versions have the same precedence, the one with the higher major version is chosen.
   * If two versions have the same precedence and major version, the one with the higher pre-release qualifier is chosen (e.g., beta2 > beta1).
   *
   * @param {string[]} versions - An array of version strings.
   * @returns {string} The highest version with precedence.
   */
  public getHighestVersionWithPrecedence(versions: string[]) {
    if (!versions || versions.length === 0) {
      throw new Error('No versions found in library; cannot generate index.ts');
    }

    // Define the precedence of pre-release types
    const precedence = {
      '': 3, // Stable (no suffix) is highest precedence
      beta: 2,
      alpha: 1,
    };

    // use the "best" version found so far, version[0] as a starting point
    // initialize other values to -1, guaranteed to be overwritten at first comparison
    // all will be updated as we traverse the versions
    let currentVersionSpec: VersionSpec = {
      version: versions[0],
      major: -1,
      precedence: -1,
      preReleaseQualifier: -1, // For e.g., beta1 vs beta2
    };

    for (const version of versions) {
      const match = version.match(/^v(\d+)(p\d+)?((alpha|beta)(\d*)?)?$/);

      if (match) {
        const majorVersion = parseInt(match[1], 10);
        // patch version is not used for sorting, but it is part of the regex
        const preReleaseType = match[3] ? alphaOrBetaPrecedence(match[3]) : ''; // Stable releases have highest precedence
        const preReleaseQualifier = match[5] ? parseInt(match[5], 10) : 0; // For beta1, beta2 etc.

        const currentPrecedence = precedence[preReleaseType];
        const newVersionSpec: VersionSpec = {
          version: version,
          major: majorVersion,
          precedence: currentPrecedence,
          preReleaseQualifier: preReleaseQualifier,
        };

        if (isNewAHighestVersion(currentVersionSpec, newVersionSpec)) {
          currentVersionSpec = newVersionSpec;
        }
      } else {
        throw new Error(`Invalid version format: ${version}`);
      }
    }

    return currentVersionSpec.version;
  }
}

function alphaOrBetaPrecedence(preRelease: string): '' | 'beta' | 'alpha' {
  console.log(preRelease);
  if (preRelease.startsWith('beta')) {
    console.log('beta');
    return 'beta';
  } else if (preRelease.startsWith('alpha')) {
    console.log('alpha');
    return 'alpha';
  } else {
    throw new Error(`Unknown pre-release type: ${preRelease}`);
  }
}

/**
 * Compares two version specifications to determine if the new version has a higher precedence.
 * The comparison follows these rules in order:
 * 1. Higher Precedence (Stable > Beta > Alpha)
 * 2. Higher Major Version (if precedence is the same)
 * 3. Higher pre-release qualifier (e.g., beta2 > beta1, if precedence and major version are the same)
 *
 * @param {VersionSpec} currentVersionSpec - The current highest version found so far.
 * @param {VersionSpec} newVersionSpec - The new version to compare against the current one.
 * @returns {boolean} True if the new version is considered higher, false otherwise.
 */
function isNewAHighestVersion(
  currentVersionSpec: VersionSpec,
  newVersionSpec: VersionSpec,
): boolean {
  // Current version has higher precedence (e.g., stable over beta)
  if (newVersionSpec.precedence > currentVersionSpec.precedence) {
    return true;
  }
  if (
    newVersionSpec.precedence === currentVersionSpec.precedence &&
    newVersionSpec.major > currentVersionSpec.major
  ) {
    return true;
  }
  if (
    newVersionSpec.precedence === currentVersionSpec.precedence &&
    newVersionSpec.major === currentVersionSpec.major &&
    newVersionSpec.preReleaseQualifier > currentVersionSpec.preReleaseQualifier
  ) {
    return true;
  }
  return false;
}

async function getAllTopLevelDirectories(
  sourcePath: string,
): Promise<string[]> {
  let allVersionedLibraries: Dirent[] = [];
  try {
    allVersionedLibraries = await fs.readdir(path.join(sourcePath), {
      withFileTypes: true,
    });
  } catch (err) {
    // If this fails, it means that the library is not
    // in the format we expect. This could happen if we
    // are rerunning the command on a well-formed library
    // or its otherwise unexpected. In this case, fail early
    throw new Error(
      'Unexpected library format. Expected *only* top-level directories containing fully formed libraries for each verison.',
    );
  }
  return allVersionedLibraries
    .filter((fileOrFolder: Dirent) => fileOrFolder.isDirectory())
    .map(x => x.name);
}
