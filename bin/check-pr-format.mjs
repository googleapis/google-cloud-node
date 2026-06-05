#!/usr/bin/env node

// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {execSync} from 'child_process';
import {existsSync} from 'fs';
import path from 'path';

// Define the base branch to compare against
const baseBranch = 'main';

// Extensions to check with Prettier
const targetExtensions = new Set([
  '.js',
  '.mjs',
  '.cjs',
  '.ts',
  '.mts',
  '.cts',
  '.json',
  '.md',
  '.yaml',
  '.yml',
]);

function getChangedFiles() {
  try {
    const output = execSync(
      `git diff --name-only --diff-filter=ACMRT ${baseBranch}`,
      {encoding: 'utf8'},
    );
    return output
      .split('\n')
      .map(f => f.trim())
      .filter(f => f.length > 0 && existsSync(f));
  } catch (err) {
    console.error(
      `Error finding changed files against ${baseBranch}:`,
      err.message,
    );
    process.exit(1);
  }
}

const allChangedFiles = getChangedFiles();
const filesToCheck = allChangedFiles.filter(file => {
  const ext = path.extname(file).toLowerCase();
  return targetExtensions.has(ext);
});

if (filesToCheck.length === 0) {
  console.log('No changed files to check for formatting.');
  process.exit(0);
}

console.log(
  `Checking formatting for ${filesToCheck.length} changed file(s) against ${baseBranch}...`,
);
filesToCheck.forEach(f => console.log(`  - ${f}`));

try {
  // Run prettier check using npx prettier
  execSync(
    `npx prettier --check ${filesToCheck.map(f => `"${f}"`).join(' ')}`,
    {
      stdio: 'inherit',
    },
  );
  console.log(
    '\nFormatting check passed! All changed files adhere to the Prettier guidelines.',
  );
} catch (err) {
  console.error(
    '\nFormatting check failed! Please run the following command to format your files:',
  );
  console.error(
    `  npx prettier --write ${filesToCheck.map(f => `"${f}"`).join(' ')}`,
  );
  process.exit(1);
}
