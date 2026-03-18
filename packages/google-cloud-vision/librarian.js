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
 * Recursively finds a file with a specific name in a directory and its subdirectories.
 * @param {string} dirPath The directory to search.
 * @param {string} fileName The name of the file to find.
 * @returns {string[]} An array of matching file paths.
 */
function findFileRecursively(dirPath, fileName) {
  let foundFiles = [];
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dirPath, item.name);
    if (item.isDirectory()) {
      foundFiles = foundFiles.concat(findFileRecursively(fullPath, fileName));
    } else if (item.isFile() && item.name === fileName) {
      foundFiles.push(fullPath);
    }
  }
  return foundFiles;
}

const baseDir = path.resolve('packages/google-cloud-vision/src');
const filesToProcess = findFileRecursively(baseDir, 'image_annotator_client.ts');

const appendContent = '\n' +
  "import {FeaturesMethod} from '../helpers';\n" +
  '// eslint-disable-next-line @typescript-eslint/no-empty-interface\n' +
  'export interface ImageAnnotatorClient extends FeaturesMethod {}\n';

filesToProcess.forEach(file => {
  try {
    const fileContent = fs.readFileSync(file, 'utf8');
    if (!fileContent.includes(appendContent.trim())) {
      fs.appendFileSync(file, appendContent, 'utf8');
      console.log(`Successfully appended to: ${file}`);
    } else {
      console.log(`Content already exists in ${file}, skipping.`);
    }
  } catch (err) {
    console.error(`Error processing file ${file}:`, err);
  }
});
