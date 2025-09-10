// Copyright 2025 Google LLC
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

import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Replaces all occurrences of a pattern in a file with a specified replacement string.
 * @param {string} filePath The path to the file.
 * @param {RegExp} pattern The regular expression to search for.
 * @param {string} replacement The string to replace the pattern with.
 */
function replaceInFile(filePath, pattern, replacement) {
  try {
    const data = readFileSync(filePath, 'utf8');
    const result = data.replace(pattern, replacement);
    writeFileSync(filePath, result, 'utf8');
    console.log(`Successfully updated: ${filePath}`);
  } catch (err) {
    console.error(`Error processing file ${filePath}:`, err);
  }
}

/**
 * Recursively finds files that match a given name in a directory and its subdirectories.
 * @param {string} dirPath The directory to search.
 * @param {string} fileName The name of the file to match.
 * @returns {string[]} An array of matching file paths.
 */
function findFile(dirPath, fileName) {
  let fileList = [];
  const filesAndDirs = readdirSync(dirPath, { withFileTypes: true });

  for (const item of filesAndDirs) {
    const fullPath = join(dirPath, item.name);
    if (item.isDirectory()) {
      // Recurse into subdirectories
      fileList = fileList.concat(findFile(fullPath, fileName));
    } else if (item.isFile() && item.name === fileName) {
      // Check if the file name matches
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const baseDir = resolve(__dirname, 'esm/src');
const targetFile = 'cloud_tasks_client_config.json';
const files = findFile(baseDir, targetFile);

files.forEach(file => {
  replaceInFile(file, /"initial_rpc_timeout_millis": 60000/g, '"initial_rpc_timeout_millis": 20000');
  replaceInFile(file, /"max_rpc_timeout_millis": 60000/g, '"max_rpc_timeout_millis": 20000');
});
