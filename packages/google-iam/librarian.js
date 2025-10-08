// Copyright 2025 Google LLC
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

const fs = require('fs');
const path = require('path');

const protosFilePath = path.join(__dirname, 'protos', 'protos.js');

try {
  if (fs.existsSync(protosFilePath)) {
    let content = fs.readFileSync(protosFilePath, 'utf8');
    const oldLine = 'var $root = $protobuf.roots.iam_protos || ($protobuf.roots.iam_protos = {});';
    const newLine = 'var $root = $protobuf.roots._google_cloud_iam_protos || ($protobuf.roots._google_cloud_iam_protos = {});';
    if (content.includes(oldLine)) {
      content = content.replace(oldLine, newLine);
      fs.writeFileSync(protosFilePath, content, 'utf8');
      console.log('Successfully replaced line in protos/protos.js');
    } else {
      console.log('Line to be replaced not found in protos/protos.js. No changes made.');
    }
  } else {
    console.log('protos/protos.js not found. No changes made.');
  }
} catch (error) {
  console.error('An error occurred:', error);
}
