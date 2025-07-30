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

import { Dirent } from "fs";
import * as nj from 'nunjucks';

const fs = require('fs/promises'); // For async file system operations
const path = require('path');

const SRC_PATH = 'src/';
const INDEX_PATH = 'index.ts';
const TEMPLATE_FILE_NAME = 'index.ts.njk';

export const POST_PROCESSING_TEMPLATES_PATH = path.resolve(
  __dirname,
  '../../templates/post-processing-templates'
);
// This regex is safe because we are basically just decomposing the code in
// the generator
/*
{% for service in api.services -%}
export {{ '{' + service.name.toPascalCase() + 'Client}' }} from './{{ service.name.toSnakeCase() }}_client';
{% endfor -%}
*/
const regex = /export\s*{\s*(\w+Client)\s*}/g;
export async function extractVersions(currentPath: string) {
  const allItemsInSrc = await fs.readdir(path.join(currentPath, SRC_PATH),{ withFileTypes: true });
  const justVersionDirectories = allItemsInSrc.filter((x: Dirent) => x.isDirectory()).map((x: Dirent) => x.name);
  return justVersionDirectories;
};

export async function extractClients(currentPath: string) {
    const directories = await extractVersions(currentPath);
    let clientsAndVersions: {version: string, clients: string[]}[] = [];
    for (const directory of directories) {
        const indexFile = path.join(currentPath, SRC_PATH, directory, INDEX_PATH);
        if (await fs.stat(indexFile)) {
            const clientsRegexMatch = [...(await fs.readFile(indexFile, 'utf8')).matchAll(regex)];
            clientsAndVersions.push({version: directory, clients: clientsRegexMatch.map((x: any) => x[1])});
        }
    }
    return clientsAndVersions;
}

export async function generateIndexTs(currentLibrary: string, defaultVersion?: string) {

    // Get all the versions
    const versions = await extractVersions(currentLibrary);
    console.log(`All versions in ${currentLibrary}: ${versions}`)

    // Get all the clients in each specific version
    const clientsAndVersions = await extractClients(currentLibrary);
    console.log(`All clients and their versions in ${currentLibrary}: ${JSON.stringify(clientsAndVersions, null, 2)}`)
        
    defaultVersion = defaultVersion || getHighestVersionWithPrecedence(versions);
    // Get the default versions' clients
    const defaultClientAndVersions = clientsAndVersions.find(x => x.version === defaultVersion);
    console.log(`The default version is ${JSON.stringify(defaultClientAndVersions, null, 2)}`)
    
    // Render index.ts
    const variables = {versions, defaultClientAndVersions}

    

    let compiledTemplate: string; // Declare compiledTemplate outside the try block

    try {
        // --- THE CRITICAL FIX: Configure Nunjucks with a FileSystemLoader ---
        // Create a new Nunjucks environment configured to load from the templateDirectory
        const env = new nj.Environment(
            new nj.FileSystemLoader(POST_PROCESSING_TEMPLATES_PATH),
            { autoescape: false } // Disable autoescaping for code generation
        );

        // Now, render using the template's filename, and Nunjucks will find it
        // within the configured templateDirectory.
        compiledTemplate = env.render(TEMPLATE_FILE_NAME, variables); // <-- RENDER BY FILENAME
        console.log('Nunjucks template rendered successfully.');
        // console.log('Compiled Template Output (first 200 chars):', compiledTemplate.substring(0, 200)); // Optional: peek at output
    } catch (nunjucksRenderError) {
        console.error('FATAL ERROR: Nunjucks template rendering failed!');
        console.error(nunjucksRenderError);
        process.exit(1); // Exit with error if rendering fails
    }
    
    const outputPath = path.join(currentLibrary, SRC_PATH, INDEX_PATH);
    console.log(`Generating index.ts in ${outputPath} with the following values: ${JSON.stringify(variables)}`) // Use JSON.stringify for variables
    await fs.writeFile(outputPath, compiledTemplate);
    console.log(`Successfully wrote: ${outputPath}`);
}

function getHighestVersionWithPrecedence(versions: string[]) {
    if (!versions || versions.length === 0) {
        throw new Error ('No versions found in library; cannot generate index.ts');
    }

    // Define the precedence of pre-release types
    const precedence = {
        '': 3,       // Stable (no suffix) is highest precedence
        'beta': 2,
        'alpha': 1,
    };

    let bestVersion = versions[0]; // Stores the "best" version found so far
    let bestMajor = -1;
    let bestPrecedence = -1;
    let bestPreReleaseQualifier = -1; // For e.g., beta1 vs beta2

    for (const version of versions) {
        const match = version.match(/^v(\d+)(alpha|beta(\d*))?$/);

        if (match) {
            const majorVersion = parseInt(match[1], 10);
            const preReleaseType = match[2] ? (match[2].startsWith('beta') ? 'beta' : 'alpha') : '';
            const preReleaseQualifier = match[3] ? parseInt(match[3], 10) : 0; // For beta1, beta2 etc.

            const currentPrecedence = precedence[preReleaseType];

            // Comparison Logic:
            // 1. Higher Precedence (Stable > Beta > Alpha)
            // 2. Higher Major Version
            // 3. Within same pre-release type, higher qualifier (e.g., beta2 > beta1)
            // 4. If everything else is equal, the current one is just as good
            if (
                bestVersion === null || // No best version yet
                currentPrecedence > bestPrecedence || // Current version has higher precedence (e.g., stable over beta)
                (currentPrecedence === bestPrecedence && majorVersion > bestMajor) || // Same precedence, but higher major version
                (currentPrecedence === bestPrecedence && majorVersion === bestMajor && preReleaseQualifier > bestPreReleaseQualifier) // Same precedence & major, but higher qualifier (e.g., beta2 vs beta1)
            ) {
                bestVersion = version;
                bestMajor = majorVersion;
                bestPrecedence = currentPrecedence;
                bestPreReleaseQualifier = preReleaseQualifier;
            }
        }
    }

    return bestVersion;
}