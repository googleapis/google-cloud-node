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

import { Dirent } from 'fs';
import * as fs from 'fs/promises';
import * as path from 'path';
import { INDEX_PATH } from './generate-index';

const SRC_PATH = 'src';

export interface VersionsAndClients {
  version: string
  clients: string[]
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

interface VersionSpec {
  version: string; // Stores the "best" version found so far
  major: number;
  precedence: number;
  preReleaseQualifier: number; // For e.g., beta1 vs beta2
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
    public defaultVersion?: string = '';
    public defaultVersionAndClients: VersionsAndClients = {version: '', clients: []};

    /**
     * @param isEsm Whether the library supports ES Modules.
     * @param releaseLevel The current stability level of the library.
     * @param defaultVersion The recommended version to use.
     * @param sourcePath The path where the library is read from.
     * @param destinationPath The path where the library is written to.
     */
    constructor(sourcePath: string, destinationPath: string, defaultVersion?: string, isEsm?: boolean) {
        this.isEsm = isEsm ?? false;
        this.srcPath = isEsm ? `esm/${SRC_PATH}` : SRC_PATH;
        this.sourcePath = sourcePath;
        this.destinationPath = destinationPath;
        this.defaultVersion = defaultVersion;
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
     * In a real application, this might fetch data from an API.
     */
    public async getVersions(): Promise<string[]> {
        return this.clientsAndVersions.map(x => x.version);
    }

    /**
     * A getter to provide a list of clients/integrations using this library.
     */
       public async getClientsAndVersions() {
        const clientsAndVersions: VersionsAndClients[] = [];
        const allVersionedLibraries = await getAllTopLevelDirectories(this.sourcePath);
        for (const directory of allVersionedLibraries) {
            const versions = await getAllTopLevelDirectories(path.join(this.sourcePath, directory, this.srcPath));
            // even though this looks nested, it ends up being o(1) since
            // we only have one directory per versioned library (the single
            // version of the library)
            for (const version of versions) {
                const indexFile = path.join(this.sourcePath, directory, this.srcPath, version, INDEX_PATH);
                console.log(indexFile)
                if (await fs.stat(indexFile)) {
                    const fileContent = await fs.readFile(indexFile, 'utf8');
                    const clientsRegexMatch = Array.from(
                        fileContent.matchAll(CLIENT_EXTRACTION_REGEX)
                    );
                    console.log(clientsAndVersions)
                    clientsAndVersions.push({
                        version,
                        clients: Array.from(new Set(clientsRegexMatch.map((x: any) => x[1]))),
                    });
                }
            }
        }
        console.log('clients and versions', clientsAndVersions);
        return clientsAndVersions;
    }

    public getDefaultVersionAndClients() {
        const defaultVersionAndClients = this.clientsAndVersions.find(
            (vc) => vc.version === this.defaultVersion
        );
        if (!defaultVersionAndClients) {
            throw new Error(
            `Default version ${this.defaultVersion} not found in available versions: ${this.versions.join(
                ', '
            )}`
            );
        }
        return defaultVersionAndClients;
    }


    // In case a default version isn't provided, this function should
    // offer a default version
    /**
     * Gets the highest version with precedence from a list of versions.
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

        let currentVersionSpec: VersionSpec = {
            version: versions[0], // Stores the "best" version found so far
            major: -1,
            precedence: -1,
            preReleaseQualifier: -1, // For e.g., beta1 vs beta2
        };

        for (const version of versions) {
            const match = version.match(/^v(\d+)(alpha|beta(\d*))?$/);

            if (match) {
            const majorVersion = parseInt(match[1], 10);
            const preReleaseType = match[2]
                ? match[2].startsWith('beta')
                ? 'beta'
                : 'alpha'
                : '';
            const preReleaseQualifier = match[3] ? parseInt(match[3], 10) : 0; // For beta1, beta2 etc.

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
            }
        }

        return currentVersionSpec.version;
    }
}

// Comparison Logic:
// 1. Higher Precedence (Stable > Beta > Alpha)
// 2. Higher Major Version
// 3. Within same pre-release type, higher qualifier (e.g., beta2 > beta1)
// 4. If everything else is equal, the current one is just as good

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

async function getAllTopLevelDirectories(sourcePath: string): Promise<string[]> {
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
        return allVersionedLibraries.filter((fileOrFolder: Dirent) => fileOrFolder.isDirectory()).map(x => x.name);
}