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
import * as path from 'path';

export const filesToUpdate: string[] = [
  'protos/google/storage/v2/storage.proto',
];

export interface Replacement {
  pattern: RegExp;
  replacement: string;
}

export const replacements: Replacement[] = [
  {
    pattern: /\bObject\b/g,
    replacement: 'StorageObject',
  },
];

/**
 * Cleans up references to Object in storage protos by replacing the reference with the replacement.
 * This is functionally equivalent to sed -i -E 's,\bObject\b,StorageObject,g' ${filePaths}
 * @param {string[]} filePaths - An array of file paths to update.
 * @param {Replacement[]} replacements - An array of replacement objects.
 */
export function cleanObjectReferences(
  filePaths: string[],
  replacements: Replacement[],
): void {
  filePaths.forEach(filePath => {
    const fullPath = path.join(__dirname, '..', '..', filePath);
    if (fs.existsSync(fullPath)) {
      replacements.forEach(({pattern, replacement}) => {
        try {
          const data = fs.readFileSync(fullPath, 'utf8');
          const result = data.replace(pattern, replacement);
          fs.writeFileSync(fullPath, result, 'utf8');
          console.log(`Successfully updated: ${fullPath}`);
        } catch (err) {
          console.error(`Error processing file ${fullPath}:`, err);
        }
      });
    }
  });
}
