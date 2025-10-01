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
import * as nj from 'nunjucks';

const fs = require('fs/promises'); // For async file system operations
const path = require('path');

const SRC_PATH = 'src';
const INDEX_PATH = 'index.ts';
const TEMPLATE_FILE_NAME = 'index.ts.njk';

export interface VersionsAndClients {
  version: string
  clients: string[]
}
export const POST_PROCESSING_TEMPLATES_PATH = path.resolve(
  __dirname,
  '../../templates/post-processing-templates',
);

// This regex is safe because we are basically just searching for the code in
// the generator
/*
{% for service in api.services -%}
export {{ '{' + service.name.toPascalCase() + 'Client}' }} from './{{ service.name.toSnakeCase() }}_client';
{% endfor -%}
*/
const CLIENT_EXTRACTION_REGEX = /export\s*{\s*(\w+Client)\s*}/g;

/**
 * Asynchronously extracts all version directories from a library's `src` folder.
 *
 * This function reads the contents of a specified library's `src` directory and
 * filters the entries to return an array of names for all subdirectories. It
 * throws an error if the directory structure is not as expected.
 *
 * @param {string} currentPath - The path to the library's root directory.
 * @returns {Promise<string[]>} A promise that resolves to an array of version directory names (e.g., ['v1', 'v2beta1']).
 * @throws {Error} Throws an error if the `src` directory does not exist or has an unexpected format.
 */
export async function extractVersions(currentPath: string, srcPath = SRC_PATH) {
  let allItemsInSrc: Dirent[] = [];
  try {
    allItemsInSrc = await fs.readdir(path.join(currentPath, srcPath), {
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
  const justVersionDirectories = allItemsInSrc
    .filter((fileOrFolder: Dirent) => fileOrFolder.isDirectory())
    .map((x: Dirent) => x.name);
  return justVersionDirectories;
}

/**
 * Asynchronously extracts all client names and their corresponding versions from a library.
 *
 * This function first gets a list of version directories. For each version, it reads the
 * `index.ts` file, uses a regular expression to find all exported client classes,
 * and compiles them into a structured array.
 *
 * @param {string} currentPath - The path to the library's root directory.
 * @returns {Promise<{version: string; clients: string[]}[]>} A promise that resolves to an array of objects, each containing a version string and an array of client names.
 */
export async function extractClients(currentPath: string, srcPath = SRC_PATH) {
  const directories = await extractVersions(currentPath, srcPath);
  const clientsAndVersions: VersionsAndClients[] = [];
  for (const directory of directories) {
    const indexFile = path.join(currentPath, srcPath, directory, INDEX_PATH);
    if (await fs.stat(indexFile)) {
      const clientsRegexMatch = [
        ...(await fs.readFile(indexFile, 'utf8')).matchAll(
          CLIENT_EXTRACTION_REGEX,
        ),
      ];
      clientsAndVersions.push({
        version: directory,
        clients: clientsRegexMatch.map((x: any) => x[1]),
      });
    }
  }
  return clientsAndVersions;
}

/**
 * Generates an `index.ts` file for a combined library.
 *
 * This function orchestrates the generation of a new `index.ts` file that re-exports
 * all clients from their versioned subdirectories. It automatically determines
 * the highest-precedence version to set as the default, unless a specific default
 * version is provided.
 *
 * @param {string} currentLibrary - The path to the library's root directory.
 * @param {string} [defaultVersion] - An optional version string to explicitly set as the default.
 * @param {string} [isEsm] - An optional flag whether the library should be generated with ESM syntax
 */
export async function generateIndexTs(
  currentLibrary: string,
  defaultVersion?: string,
  isEsm?: boolean,
) {
  const srcPath = isEsm ? `esm/${SRC_PATH}` : SRC_PATH;
  // Get all the versions
  const versions = await extractVersions(currentLibrary, srcPath);
  console.log(`All versions in ${currentLibrary}: ${versions}`);

  // Get all the clients in each specific version
  const clientsAndVersions = await extractClients(currentLibrary, srcPath);
  console.log(
    `All clients and their versions in ${currentLibrary}: ${JSON.stringify(clientsAndVersions, null, 2)}`,
  );
  defaultVersion = defaultVersion || getHighestVersionWithPrecedence(versions);
  // Get the default versions' clients
  const defaultClientAndVersions = clientsAndVersions.find(
    x => x.version === defaultVersion,
  );
  console.log(
    `The default version is ${JSON.stringify(defaultClientAndVersions, null, 2)}`,
  );

  // Render index.ts
  const variables = {versions, defaultClientAndVersions, isEsm: isEsm ?? false};

  // Create a new Nunjucks environment configured to load from the templateDirectory
  // This is necessary due to occurring in a Bazel environment or locally
  const env = new nj.Environment(
    new nj.FileSystemLoader(POST_PROCESSING_TEMPLATES_PATH),
    {autoescape: false}, // Disable autoescaping for code generation
  );

  const compiledTemplate = env.render(TEMPLATE_FILE_NAME, variables);

  const outputPath = path.join(currentLibrary, srcPath, INDEX_PATH);
  console.log(
    `Generating index.ts in ${outputPath} with the following values: ${JSON.stringify(variables)}`,
  );
  await fs.writeFile(outputPath, compiledTemplate);
  console.log(`Successfully wrote: ${outputPath}`);
}

interface VersionSpec {
  version: string; // Stores the "best" version found so far
  major: number;
  precedence: number;
  preReleaseQualifier: number; // For e.g., beta1 vs beta2
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
export function getHighestVersionWithPrecedence(versions: string[]) {
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
