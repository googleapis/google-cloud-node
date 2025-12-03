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

import * as fs from 'fs';
import {
  cleanObjectReferences,
  filesToUpdate,
  replacements,
} from './proto_utils';
import {buildOutput} from './uber_client_builder';
import {fixIndexFile, fixV2Index} from './index_fix_utils';

async function main() {
  fixIndexFile('src/index.ts');
  fixV2Index('v2/index.ts');
  cleanObjectReferences(filesToUpdate, replacements);
  const finaloutput = await buildOutput();
  fs.writeFile('../storage_control_client.ts', finaloutput, err => {
    if (err) throw err;
  });
}

main().catch(err => console.error(err));
