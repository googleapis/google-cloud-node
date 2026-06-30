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



function runGit(args, options = {}) {
  return execFileSync('git', args, {encoding: 'utf8', ...options});
}

function getChangedFiles() {
  const base = process.env.GITHUB_BASE_REF || 'main';
  const refsToTry = [`origin/${base}`, base, 'HEAD~1'];

  for (const ref of refsToTry) {
    try {
      const output = runGit([
        'diff',
        '--name-only',
        '--diff-filter=ACMRT',
        ref,
        '--',
        '*.ts',
      ]);
      return output
        .split('\n')
        .map(f => f.trim())
        .filter(f => f.length > 0 && existsSync(f));
    } catch {
      // Continue to the next fallback ref
    }
  }

  throw new Error(
    `Error finding changed files: Tried refs [${refsToTry.join(', ')}] but all failed.`
  );
}

function checkEslint(filesToCheck) {
  if (filesToCheck.length === 0) {
    return;
  }

  try {
    execFileSync(
      'node',
      ['node_modules/eslint/bin/eslint.js', '--quiet', ...filesToCheck],
      {stdio: 'inherit'},
    );
  } catch (err) {
    console.warn('\n[WARNING] ESLint issues were detected in touched files:');
    console.warn(
      'These errors are currently non-blocking while the repository transitions to GTS standards.',
    );
    console.warn(
      `To fix: npx eslint --fix ${filesToCheck.map(f => `"${f}"`).join(' ')}`,
    );
  }
}

function findTsconfigDir(filePath) {
  let dir = path.dirname(filePath);
  while (dir && dir !== '.' && dir !== path.sep) {
    if (existsSync(path.join(dir, 'tsconfig.json'))) {
      return dir;
    }
    dir = path.dirname(dir);
  }
  if (dir === '.' && existsSync(path.join('.', 'tsconfig.json'))) {
    return '.';
  }
  return null;
}

function checkTypeSafety(filesToCheck) {
  if (filesToCheck.length === 0) {
    return true;
  }

  // Map files to their package directories (by walking up to the nearest tsconfig.json)
  const packagesToCheck = new Set();
  for (const file of filesToCheck) {
    const tsconfigDir = findTsconfigDir(file);
    if (tsconfigDir) {
      packagesToCheck.add(tsconfigDir);
    }
  }

  if (packagesToCheck.size === 0) {
    return true;
  }

  console.log(
    `\nRunning TypeScript type checks for ${packagesToCheck.size} package(s)...`,
  );
  let passed = true;

  for (const pkg of packagesToCheck) {
    try {
      console.log(`  Type checking ${pkg}...`);
      execFileSync(
        'node',
        [
          'node_modules/typescript/bin/tsc',
          '--noEmit',
          '--project',
          path.join(pkg, 'tsconfig.json'),
        ],
        {stdio: 'inherit'},
      );
    } catch (err) {
      console.error(`\n[ERROR] TypeScript type check failed in ${pkg}`);
      passed = false;
    }
  }

  return passed;
}

function run() {
  try {
    const changedTsFiles = getChangedFiles();

    if (changedTsFiles.length === 0) {
      console.log('No TypeScript files changed. Skipping checks.');
      return;
    }

    // Run ESLint (which now includes Prettier checks) and Type checks
    checkEslint(changedTsFiles);
    const typeSafetyPassed = checkTypeSafety(changedTsFiles);

    if (!typeSafetyPassed) {
      throw new Error('Linter checks failed.');
    }
  } catch (err) {
    console.error('\nLinter failed:', err.message);
    process.exitCode = 1;
  }
}

run();
