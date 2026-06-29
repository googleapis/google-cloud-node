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
import {existsSync, readFileSync} from 'fs';
import path from 'path';
import {ESLint} from 'eslint';
import prettier from 'prettier';

// Define the base branch to compare against
const baseBranch = process.env.GITHUB_BASE_REF || 'main';

// Extensions to check for Prettier and ESLint/GTS
const targetExtensions = new Set(['.ts']);

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
      .filter(
        f =>
          f.length > 0 &&
          targetExtensions.has(path.extname(f).toLowerCase()) &&
          existsSync(f),
      );
  } catch (err) {
    throw new Error(
      `Error finding changed files against ${baseBranch}: ${err.message}`,
    );
  }
}

async function checkPrettierFormatting(filesToCheck) {
  if (filesToCheck.length === 0) {
    return;
  }

  const results = await Promise.all(
    filesToCheck.map(async file => {
      try {
        const fileInfo = await prettier.getFileInfo(file);
        if (fileInfo.ignored) {
          return {file, isFormatted: true};
        }

        const config = await prettier.resolveConfig(file);
        const fileContent = readFileSync(file, 'utf8');

        const isFormatted = await prettier.check(fileContent, {
          ...config,
          filepath: file,
        });

        return {file, isFormatted};
      } catch (err) {
        throw new Error(
          `Error checking formatting for ${file}: ${err.message}`,
        );
      }
    }),
  );

  const unformattedFiles = results.filter(r => !r.isFormatted).map(r => r.file);

  if (unformattedFiles.length > 0) {
    console.error(
      '\n[ERROR] Prettier formatting check failed! Please run the following command to format your files:',
    );
    console.error(
      `  npx prettier --write ${unformattedFiles.map(f => `"${f}"`).join(' ')}`,
    );
    throw new Error('Prettier formatting check failed.');
  }
}

async function checkEslint(filesToCheck) {
  if (filesToCheck.length === 0) {
    return;
  }

  try {
    const eslint = new ESLint({
      // Only report errors, suppress warnings
      quiet: true,
    });

    const results = await eslint.lintFiles(filesToCheck);

    // Check if there are any errors in the results
    const hasErrors = results.some(result => result.errorCount > 0);

    if (hasErrors) {
      const formatter = await eslint.loadFormatter('stylish');
      const resultText = formatter.format(results);

      console.warn('\n[WARNING] ESLint issues were detected in touched files:');
      console.warn(resultText);
      console.warn(
        'These errors are currently non-blocking while the repository transitions to GTS standards.',
      );
      console.warn(
        `To fix: npx eslint --fix ${filesToCheck.map(f => `"${f}"`).join(' ')}`,
      );
    }
  } catch (err) {
    console.error('Error running ESLint programmatically:', err);
  }
}

(async () => {
  const changedTsFiles = getChangedFiles();

  // Run Prettier and ESLint concurrently
  await Promise.all([
    checkPrettierFormatting(changedTsFiles),
    checkEslint(changedTsFiles),
  ]);
})().catch(err => {
  console.error('\nLinter failed:', err.message);
  process.exitCode = 1;
});
