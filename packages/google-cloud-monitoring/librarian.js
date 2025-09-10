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

const commonEnvVars = fs.readFileSync(path.resolve('packages/google-cloud-monitoring/.kokoro/common_env_vars.cfg'), 'utf8');

// Append to common.cfg
try {
  fs.appendFileSync(path.resolve('packages/google-cloud-monitoring/.kokoro/common.cfg'), '\n' + commonEnvVars, 'utf8');
  console.log('Successfully appended to .kokoro/common.cfg');
} catch (err) {
  console.error('Error appending to .kokoro/common.cfg:', err);
}

// Function to recursively find files with a specific name and append content
function findAndAppend(dirPath, fileName, content) {
  try {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // Recurse into subdirectories
        findAndAppend(filePath, fileName, content);
      } else if (stat.isFile() && file === fileName) {
        // Process the file if its name matches
        try {
          const data = fs.readFileSync(filePath, 'utf8');
          const result = content + '\n' + data;
          fs.writeFileSync(filePath, result, 'utf8');
          console.log(`Successfully updated: ${filePath}`);
        } catch (err) {
          console.error(`Error processing file ${filePath}:`, err);
        }
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dirPath}:`, err);
  }
}

// Append to all common.cfg files in continuous integration directories
const baseDir = path.resolve('packages/google-cloud-monitoring/.kokoro/continuous');
findAndAppend(baseDir, 'common.cfg', commonEnvVars);
