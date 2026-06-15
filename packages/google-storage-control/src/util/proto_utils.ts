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

export const filesToUpdate: string[] = [
  'protos/google/storage/v2/storage.proto',
  'protos/protos.d.ts',
  'protos/protos.js',
  'protos/protos.json',
];

export interface Replacement {
  pattern: RegExp;
  replacement: string;
}

export const replacements: Replacement[] = [
  {
    // Rename Object and IObject to StorageObject and IStorageObject (Global, skipped for protos.js)
    pattern: /\b(I)?Object\b/g,
    replacement: '$1StorageObject',
  },
  {
    // Correct articles: "an StorageObject" -> "a StorageObject" (Global, skipped for protos.js)
    pattern: /\b([Aa])n StorageObject\b/g,
    replacement: '$1 StorageObject',
  },
  {
    // Rename namespace-prefixed object/Iobject/Object/IObject references (Safe for all files)
    pattern: /\b((\$root\.)?google\.storage\.v2\.)(I)?[Oo]bject\b/g,
    replacement: '$1$3StorageObject',
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
        // Skip global Object and article replacements for protos.js to avoid corrupting native JS methods
        if (
          filePath.endsWith('protos.js') &&
          (pattern.toString() === '/\\b(I)?Object\\b/g' ||
            pattern.toString() === '/\\b([Aa])n StorageObject\\b/g')
        ) {
          return;
        }
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
