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

import {execFileSync} from 'child_process';
import {existsSync} from 'fs';
import path from 'path';

// Define the base branch to compare against
const baseBranch = process.env.GITHUB_BASE_REF || 'main';

// Extensions to check for Prettier and ESLint/GTS
const targetExtensions = new Set([
  '.ts',
]);

function getChangedFiles() {
  try {
    const output = execFileSync(
      'git',
      ['diff', '--name-only', '--diff-filter=ACMRT', baseBranch],
      {encoding: 'utf8'},
    );
    return output
      .split('\n')
      .map(f => f.trim())
      .filter(f => f.length > 0 && targetExtensions.has(path.extname(f).toLowerCase()) && existsSync(f));
  } catch (err) {
    console.error(
      `Error finding changed files against ${baseBranch}:`,
      err.message,
    );
    process.exit(1);
  }
}

function checkPrettierFormatting(filesToCheck) {
  if (filesToCheck.length === 0) {
    return;
  }

  try {
    // Run prettier check using local prettier binary
    execFileSync(
      'node',
      ['node_modules/prettier/bin/prettier.cjs', '--check', ...filesToCheck],
      {
        stdio: 'inherit',
      },
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
}

function checkEslint(filesToCheck) {
  if (filesToCheck.length === 0) {
    return;
  }

  try {
    // Run eslint check in quiet mode using local eslint binary directly
    execFileSync(
      'node',
      ['node_modules/eslint/bin/eslint.js', '--quiet', ...filesToCheck],
      {
        stdio: 'inherit',
      },
    );
  } catch (err) {
    console.warn(
      '\n[WARNING] ESLint issues were detected in touched files:',
    );
    console.warn(
      'These errors are currently non-blocking while the repository transitions to GTS standards.',
    );
    console.warn(
      `To fix: npx eslint --fix ${filesToCheck.map(f => `"${f}"`).join(' ')}`,
    );
  }
}

const changedTsFiles = getChangedFiles();
checkPrettierFormatting(changedTsFiles);
checkEslint(changedTsFiles);
