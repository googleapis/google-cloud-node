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

const filePath = 'packages/google-cloud-channel/test/gapic_cloud_channel_reports_service_v1.ts';

try {
  fs.unlinkSync(path.resolve(filePath));
  console.log(`Successfully deleted: ${filePath}`);
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log(`File not found, skipping deletion: ${filePath}`);
  } else {
    console.error(`Error deleting file ${filePath}:`, err);
  }
}