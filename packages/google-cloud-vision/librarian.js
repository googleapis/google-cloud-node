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

const files = glob.sync('packages/google-cloud-vision/src/*/image_annotator_client.ts');

const appendContent = '\n' +
  "import {FeaturesMethod} from '../helpers';\n" +
  '// eslint-disable-next-line @typescript-eslint/no-empty-interface\n' +
  'export interface ImageAnnotatorClient extends FeaturesMethod {}\n';

files.forEach(file => {
  try {
    fs.appendFileSync(path.resolve(file), appendContent, 'utf8');
    console.log(`Successfully appended to: ${file}`);
  } catch (err) {
    console.error(`Error appending to file ${file}:`, err);
  }
});