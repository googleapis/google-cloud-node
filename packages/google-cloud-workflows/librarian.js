// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
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
 * Recursively finds files that match a specific pattern without using glob.
 * @param {string} baseDir The base directory to start the search from.
 * @param {string} filePattern A regular expression pattern to match against file paths.
 * @returns {string[]} An array of file paths that match the pattern.
 */
function findFiles(baseDir, filePattern) {
  const matches = [];
  const patternRegex = new RegExp(filePattern.replace(/\*/g, '[^/]*'), 'i');

  function traverse(dir) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          traverse(fullPath);
        } else if (patternRegex.test(fullPath)) {
          matches.push(fullPath);
        }
      }
    } catch (err) {
      if (err.code !== 'ENOENT') {
        console.error(`Error reading directory ${dir}:`, err);
      }
    }
  }

  traverse(baseDir);
  return matches;
}

const filesToDelete = [
  'src/v1/workflows_client.ts',
  'src/v1/workflows_client_config.json',
  'src/v1/workflows_proto_list.json',
  'src/v1beta/workflows_client.ts',
  'src/v1beta/workflows_client_config.json',
  'src/v1beta/workflows_proto_list.json',
  'test/gapic_workflows_v1.ts',
  'test/gapic_workflows_v1beta.ts',
];

filesToDelete.forEach(file => {
  try {
    const fullPath = path.resolve(__dirname, file);
    fs.unlinkSync(fullPath);
    console.log(`Successfully deleted: ${fullPath}`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`File not found, skipping deletion: ${file}`);
    } else {
      console.error(`Error deleting file ${file}:`, err);
    }
  }
});

const replacements = [
  {
    files: 'packages/google-cloud-workflows/src/index.ts',
    searchPattern: /import \* as v1 from '\.\/v1';/s,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-workflows/src/index.ts',
    searchPattern: /import \* as v1beta from '\.\/v1beta';/s,
    replacement: ''
  },
  {
    files: 'packages/google-cloud-workflows/src/index.ts',
    searchPattern: /export {v1, v1beta, v1, v1beta, ExecutionsClient};/s,
    replacement: 'export {v1, v1beta, ExecutionsClient};'
  },
  {
    files: 'packages/google-cloud-workflows/src/index.ts',
    searchPattern: /export default {v1, v1beta, v1, v1beta, ExecutionsClient};/s,
    replacement: 'export default {v1, v1beta, ExecutionsClient};'
  },
];

replacements.forEach(r => {
  const relativePattern = r.files.replace(/^packages\/google-cloud-workflows\//, '');
  const files = findFiles(__dirname, relativePattern);
  files.forEach(file => {
    replaceInFile(path.resolve(file), r.searchPattern, r.replacement);
  });
});
