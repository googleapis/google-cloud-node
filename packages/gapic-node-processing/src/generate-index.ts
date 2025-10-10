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

import * as nj from 'nunjucks';
import {VersionsAndClients} from './library';

const fs = require('fs/promises'); // For async file system operations
const path = require('path');
export const INDEX_PATH = 'index.ts';

const TEMPLATE_FILE_NAME = 'index.ts.njk';

export const POST_PROCESSING_TEMPLATES_PATH = path.resolve(
  __dirname,
  '../../templates/post-processing-templates',
);
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
  versions: string[],
  defaultVersionAndClients: VersionsAndClients,
  isEsm: boolean,
  srcPath: string,
) {
  // Render index.ts
  const variables = {versions, defaultVersionAndClients, isEsm};

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
