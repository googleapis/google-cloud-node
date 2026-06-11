// Copyright 2026 Google LLC
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

const fs = require('fs');
const path = require('path');

/**
 * Replaces all occurrences of a pattern in a file with a specified replacement string.
 * @param {string} filePath The path to the file.
 * @param {RegExp} pattern The regular expression to search for.
 * @param {string} replacement The string to replace the pattern with.
 */
function replaceInFile(filePath, pattern, replacement) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const result = data.replace(pattern, replacement);
    fs.writeFileSync(filePath, result, 'utf8');
    console.log(`Successfully updated: ${filePath}`);
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

/**
 * Finds files in a directory that match a specific extension.
 * @param {string} dirPath The directory to search.
 * @param {string|string[]} extensions The file extension(s) to match (e.g., '.ts' or ['.ts', '.js'] or '*').
 * @param {RegExp} [fileNamePattern] An optional regex to match file names.
 * @returns {string[]} An array of matching file paths.
 */
function findFilesByExtension(dirPath, extensions, fileNamePattern = null) {
  const files = [];
  try {
    const items = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const item of items) {
      if (item.isFile()) {
        const ext = path.extname(item.name);
        const match = Array.isArray(extensions) ? extensions.includes(ext) : (extensions === '*' || ext === extensions);
        if (match) {
          if (!fileNamePattern || fileNamePattern.test(item.name)) {
            files.push(path.join(dirPath, item.name));
          }
        }
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dirPath}:`, err);
  }
  return files;
}

// Fix the URL of grafeas.io
const v1beta1Dir = path.resolve('packages/google-devtools-containeranalysis/src/v1beta1');
const v1beta1Files = findFilesByExtension(v1beta1Dir, '.ts');
v1beta1Files.forEach(file => {
  replaceInFile(file, /(?<!https:\/\/)grafeas\.io/g, 'https://grafeas.io');
});

// Perform surgery inserting the Grafeas client.
const containerAnalysisClientFile = path.resolve('packages/google-devtools-containeranalysis/src/v1/container_analysis_client.ts');
const grafeasClientMethod = `
    /**
    * Returns an instance of a @google-cloud/grafeas client, configured to
    * connect to Google Cloud's Container Analysis API. For documentation
    * on this client, see:
    * <a href="https://googleapis.dev/nodejs/grafeas/latest/index.html">https://googleapis.dev/nodejs/grafeas/latest/index.html</a>
    *
    * @returns {GrafeasClient} - An instance of a Grafeas client.
    *
    */
    getGrafeasClient() {
        return new GrafeasClient(this._opts as {});
    }
    }`;

try {
  const clientContent = fs.readFileSync(containerAnalysisClientFile, 'utf8');
  if (!clientContent.includes('getGrafeasClient()')) {
    replaceInFile(containerAnalysisClientFile, /import type \* as gax from 'google-gax';/g, "import type * as gax from 'google-gax';\nimport {GrafeasClient} from '@google-cloud/grafeas';");
    replaceInFile(containerAnalysisClientFile, /}\s*$/, grafeasClientMethod);
    console.log('Successfully added getGrafeasClient method.');
  } else {
    console.log('getGrafeasClient method already exists, skipping.');
  }
} catch (err) {
  console.error(`Error processing file ${containerAnalysisClientFile}:`, err);
}

// Fix Grafeas client files
const grafeasV1beta1Dir = path.resolve('packages/google-devtools-containeranalysis/src/v1beta1');
const grafeasV1beta1Files = findFilesByExtension(grafeasV1beta1Dir, '*', /^grafeas_v1_beta1_client/);
grafeasV1beta1Files.forEach(file => {
  replaceInFile(file, /google\.devtools\.containeranalysis/g, 'grafeas');
});

const filesToDelete = [
  'packages/google-devtools-containeranalysis/src/v1/grafeas_client.ts',
  'packages/google-devtools-containeranalysis/src/v1/grafeas_client_config.json',
  'packages/google-devtools-containeranalysis/test/gapic_grafeas_v1.ts',
];

filesToDelete.forEach(file => {
  try {
    fs.unlinkSync(path.resolve(file));
    console.log(`Successfully deleted: ${file}`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`File not found, skipping deletion: ${file}`);
    } else {
      console.error(`Error deleting file ${file}:`, err);
    }
  }
});

const v1SamplesDir = path.resolve('packages/google-devtools-containeranalysis/samples/generated/v1');
if (fs.existsSync(v1SamplesDir)) {
  const v1SamplesToDelete = findFilesByExtension(v1SamplesDir, '.js', /^grafeas\./);
  v1SamplesToDelete.forEach(file => {
    try {
      fs.unlinkSync(file);
      console.log(`Successfully deleted sample: ${file}`);
    } catch (err) {
      console.error(`Error deleting sample ${file}:`, err);
    }
  });
}

// Remove GrafeasClient from top-level export
const indexFile = path.resolve('packages/google-devtools-containeranalysis/src/index.ts');
replaceInFile(indexFile, /const GrafeasClient = v1\.GrafeasClient;\s*type GrafeasClient = v1\.GrafeasClient;/g, '');
replaceInFile(indexFile, /,\s*GrafeasClient/g, '');

// Overwrite system-test fixture samples to only use ContainerAnalysisClient
const sampleTsFile = path.resolve('packages/google-devtools-containeranalysis/system-test/fixtures/sample/src/index.ts');
const sampleTsContent = `// Copyright 2026 Google LLC
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
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import {ContainerAnalysisClient} from '@google-cloud/containeranalysis';

// check that the client class type name can be used
function doStuffWithContainerAnalysisClient(client: ContainerAnalysisClient) {
  client.close();
}

function main() {
  // check that the client instance can be created
  const containerAnalysisClient = new ContainerAnalysisClient();
  doStuffWithContainerAnalysisClient(containerAnalysisClient);
}

main();
`;

const sampleJsFile = path.resolve('packages/google-devtools-containeranalysis/system-test/fixtures/sample/src/index.js');
const sampleJsContent = `// Copyright 2026 Google LLC
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
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

/* eslint-disable node/no-missing-require, no-unused-vars */
const containeranalysis = require('@google-cloud/containeranalysis');

function main() {
  const containerAnalysisClient =
    new containeranalysis.ContainerAnalysisClient();
}

main();
`;

fs.writeFileSync(sampleTsFile, sampleTsContent, 'utf8');
fs.writeFileSync(sampleJsFile, sampleJsContent, 'utf8');
console.log('Successfully updated system-test fixture samples.');

const v1IndexFile = path.resolve('packages/google-devtools-containeranalysis/src/v1/index.ts');
const searchPattern2 = /export\s+{\s*GrafeasClient\s*}\s*from\s*'\.\/grafeas_client';/g;
const replacement2 = '\n';
replaceInFile(v1IndexFile, searchPattern2, replacement2);
