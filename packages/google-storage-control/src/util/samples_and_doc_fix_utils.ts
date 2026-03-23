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

import * as fs from 'fs';
import * as path from 'path';

/**
 * Updates generated samples by replacing storage with storage-control imports and initializations.
 */
export function updateSamples() {
  const dirPath = path.join(
    __dirname,
    '..',
    '..',
    'samples',
    'generated',
    'v2',
  );

  if (!fs.existsSync(dirPath)) {
    return;
  }

  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    if (file.endsWith('.js')) {
      const filePath = path.join(dirPath, file);
      let content = fs.readFileSync(filePath, 'utf8');

      content = content.replace(
        /const\s+\{StorageClient\}\s*=\s*require\('@google-cloud\/storage'\)\.v2;/g,
        "const {StorageControlClient} = require('@google-cloud/storage-control');",
      );

      content = content.replace(
        /const\s+\{StorageControlClient\}\s*=\s*require\('@google-cloud\/storage-control'\)\.v2;/g,
        "const {StorageControlClient} = require('@google-cloud/storage-control');",
      );

      content = content.replace(
        /const\s+storageClient\s*=\s*new\s+StorageClient\(\);/g,
        'const storageControlClient = new StorageControlClient();',
      );

      content = content.replace(
        /(\b|await\s+)storageClient\./g,
        '$1storageControlClient.',
      );

      content = content.replace(
        /const\s+controlClient\s*=\s*new\s+StorageControlClient\(\);/g,
        'const storageControlClient = new StorageControlClient();',
      );

      content = content.replace(
        /(\b|await\s+)controlClient\./g,
        '$1storageControlClient.',
      );

      fs.writeFileSync(filePath, content);
      console.log(`Successfully updated sample: ${filePath}`);
    }
  }
}

/**
 * Appends the @internal tag to the class level documentation headers of generated clients.
 * This ensures that the docs pipeline ignores these classes when generating documentation.
 */
export function fixDocsHeaders() {
  const dirPath = path.join(__dirname, '..', 'v2');
  const files = ['storage_client.ts', 'storage_control_client.ts'];

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    if (!fs.existsSync(filePath)) {
      continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if @internal is already present in the block to prevent duplicate additions
    const replaceRegex = /\* @memberof v2\n \*\/(?!\s*export class)/g;
    
    // We want to target the class documentation block that ends with `* @memberof v2\n */\nexport class `
    // and replace it with `* @memberof v2\n * @internal\n */\nexport class `
    const classDocRegex = /(\* @memberof v2\n) \*\/\nexport class /g;
    
    if (classDocRegex.test(content)) {
      content = content.replace(classDocRegex, '$1 * @internal\n */\nexport class ');
      fs.writeFileSync(filePath, content);
      console.log(`Successfully added @internal to doc header in: ${filePath}`);
    } else {
      console.log(`Did not find the expected doc header format in: ${filePath}`);
    }
  }
}
