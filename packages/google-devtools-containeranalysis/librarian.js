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
    replaceInFile(containerAnalysisClientFile, /^}/m, grafeasClientMethod);
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

// Add beta version GrafeasClient to export
const indexFile = path.resolve('packages/google-devtools-containeranalysis/src/index.ts');
const searchPattern1 = /const GrafeasClient = v1\.GrafeasClient;\ntype GrafeasClient = v1\.GrafeasClient;/g;
const replacement1 = '\nconst GrafeasClient = v1beta1.GrafeasV1Beta1Client;\n' +
        'type GrafeasClient = v1beta1.GrafeasV1Beta1Client;';
replaceInFile(indexFile, searchPattern1, replacement1);

const v1IndexFile = path.resolve('packages/google-devtools-containeranalysis/src/v1/index.ts');
const searchPattern2 = /export {GrafeasClient} from '\.\/grafeas_client';/g;
const replacement2 = '\n';
replaceInFile(v1IndexFile, searchPattern2, replacement2);
