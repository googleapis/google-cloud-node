// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
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

// Function to get all top-level directories starting with 'v'
function getVersionDirectories(baseDir) {
  const versions = [];
  try {
    const filesAndDirs = fs.readdirSync(baseDir);
    for (const item of filesAndDirs) {
      const fullPath = path.join(baseDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && item.startsWith('v')) {
        versions.push(fullPath);
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${baseDir}:`, err);
  }
  return versions;
}

const baseDir = path.resolve('packages/google-cloud-speech/src');
const versions = getVersionDirectories(baseDir);

versions.forEach(versionDir => {
  const version = path.basename(versionDir);
  const name = 'speech';

  const clientFile = path.resolve(versionDir, `${name}_client.ts`);
  const testFile = path.resolve(`packages/google-cloud-speech/test/gapic_${name}_${version}.ts`);

  // Rename the generated methods to avoid confusion.
  replaceInFile(clientFile, /( +)streamingRecognize\(/g, '$1_streamingRecognize(');
  replaceInFile(testFile, /client.streamingRecognize\(/g, 'client._streamingRecognize(');

  // Manual helper methods override the streaming API so that it
  // accepts streamingConfig when calling streamingRecognize.
  const appendContent = '\n' +
    "import {ImprovedStreamingClient} from '../helpers';\n" +
    '// eslint-disable-next-line @typescript-eslint/no-empty-interface\n' +
    'export interface SpeechClient extends ImprovedStreamingClient {}\n';

  try {
    // Read the file's current content
    const fileContent = fs.readFileSync(clientFile, 'utf8');
    // Check if the content to be appended already exists
    if (!fileContent.includes(appendContent.trim())) {
      fs.appendFileSync(clientFile, appendContent, 'utf8');
      console.log(`Successfully appended to: ${clientFile}`);
    } else {
      console.log(`Content already exists in: ${clientFile}, skipping append.`);
    }
  } catch (err) {
    console.error(`Error processing file ${clientFile}:`, err);
  }
});
