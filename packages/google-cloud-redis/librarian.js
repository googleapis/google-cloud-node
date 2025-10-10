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
 * Recursively finds files that match a given pattern in a directory and its subdirectories.
 * @param {string} dirPath The directory to search.
 * @param {RegExp} filePattern The regex pattern for file names to match.
 * @returns {string[]} An array of matching file paths.
 */
function findMatchingFiles(dirPath, filePattern) {
  let fileList = [];
  const filesAndDirs = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const item of filesAndDirs) {
    const fullPath = path.join(dirPath, item.name);
    if (item.isDirectory()) {
      // Recursively search subdirectories
      fileList = fileList.concat(findMatchingFiles(fullPath, filePattern));
    } else if (item.isFile() && filePattern.test(item.name)) {
      // Check if the file matches the pattern
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const baseDir = path.resolve('packages/google-cloud-redis/src');
const filePattern = /_client\.ts$/;
const files = findMatchingFiles(baseDir, filePattern);

files.forEach(file => {
  replaceInFile(file, /\/compute\/docs\//g, 'https://cloud.google.com/compute/docs/');
});
