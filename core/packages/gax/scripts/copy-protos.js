// Copyright 2026 Google LLC
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

const {getProtoPath} = require('google-proto-files');
const fs = require('fs');
const path = require('path');

const subdirs = [
  'api',
  'iam/v1',
  'logging/type',
  'monitoring/v3',
  'longrunning',
  'protobuf',
  'rpc',
  'type',
  'cloud/location',
];

const protosDir = path.resolve(__dirname, '..', 'protos', 'google');
fs.mkdirSync(protosDir, {recursive: true});

for (const sub of subdirs) {
  const src = getProtoPath(sub);
  const dest = path.join(protosDir, sub);
  fs.mkdirSync(dest, {recursive: true});
  fs.cpSync(src, dest, {recursive: true});
}
