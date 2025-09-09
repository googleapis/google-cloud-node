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
const glob = require('glob');

const commonEnvVars = fs.readFileSync(path.resolve('packages/google-cloud-monitoring/.kokoro/common_env_vars.cfg'), 'utf8');

// Append to common.cfg
try {
  fs.appendFileSync(path.resolve('packages/google-cloud-monitoring/.kokoro/common.cfg'), '\n' + commonEnvVars, 'utf8');
  console.log('Successfully appended to .kokoro/common.cfg');
} catch (err) {
  console.error('Error appending to .kokoro/common.cfg:', err);
}

// Append to all common.cfg files in continuous integration directories
const commonConfigFiles = glob.sync('packages/google-cloud-monitoring/.kokoro/continuous/**/common.cfg');

commonConfigFiles.forEach(file => {
  try {
    const data = fs.readFileSync(file, 'utf8');
    const result = commonEnvVars + '\n' + data;
    fs.writeFileSync(file, result, 'utf8');
    console.log(`Successfully updated: ${file}`);
  } catch (err) {
    console.error(`Error processing file ${file}:`, err);
  }
});