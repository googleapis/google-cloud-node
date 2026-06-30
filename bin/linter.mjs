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

import {execFileSync, execFile} from 'child_process';
import {existsSync} from 'fs';
import path from 'path';
import {promisify} from 'util';
import {ESLint} from 'eslint';

// --- Globals & Promisified API Wrappers ---
const execFileAsync = promisify(execFile);
const tsconfigCache = new Map();

// --- Main Runner (Entry Point) ---
async function run() {
  try {
    const changedTsFiles = getChangedFiles();

    if (changedTsFiles.length === 0) {
      console.log('No TypeScript files changed. Skipping checks.');
      return;
    }

    // Run ESLint (which now includes Prettier checks) and Type checks
    const eslintPassed = await checkEslint(changedTsFiles);
    const typeSafetyPassed = await checkTypeSafety(changedTsFiles);

    if (!eslintPassed || !typeSafetyPassed) {
      throw new Error('Linter checks failed.');
    }
  } catch (err) {
    console.error('\nLinter failed:', err.message);
    // Setting exit code 1 to indicate failure. In the CI pipeline,
    // a non-zero exit code will cause the check to fail and block the PR.
    // Note: TypeScript (tsc) compile failures and all ESLint errors (severity 2, 
    // including formatting/Prettier) are blocking.
    process.exitCode = 1;
  }
}

// --- Git Changed Files Logic ---

/**
 * Executes a Git command synchronously.
 */
function runGit(args, options = {}) {
  return execFileSync('git', args, {encoding: 'utf8', ...options});
}

/**
 * Returns a list of changed TypeScript files comparing against target branches/references.
 */
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

// --- ESLint Checker ---

/**
 * Runs ESLint programmatically.
 * Blocks the PR if any rule configured as "error" (severity: 2, including Prettier formatting) fails.
 */
async function checkEslint(filesToCheck) {
  if (filesToCheck.length === 0) {
    return true;
  }

  try {
    const eslint = new ESLint();
    const results = await eslint.lintFiles(filesToCheck);
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);

    if (resultText) {
      console.log(resultText);
    }

    let hasBlockingErrors = false;

    for (const fileResult of results) {
      for (const message of fileResult.messages) {
        // message.severity === 2 indicates an error-level rule configuration (including formatting).
        if (message.severity === 2) {
          hasBlockingErrors = true;
        }
      }
    }

    if (hasBlockingErrors) {
      console.error('\n[ERROR] Blocking ESLint violations were detected.');
      console.error('All ESLint errors (including Prettier formatting) are blocking and must be fixed.');
      return false;
    }

    return true;
  } catch (err) {
    console.error('\n[ERROR] Failed running ESLint:', err.message);
    return false;
  }
}

// --- TypeScript Type Checker ---

/**
 * Finds the nearest package directory containing a tsconfig.json by walking up the path.
 * Caches directories to avoid redundant disk operations.
 */
function findTsconfigDir(filePath) {
  let dir = path.dirname(filePath);
  const visited = [];

  while (dir && dir !== '.' && dir !== path.sep) {
    if (tsconfigCache.has(dir)) {
      const cachedVal = tsconfigCache.get(dir);
      for (const v of visited) {
        tsconfigCache.set(v, cachedVal);
      }
      return cachedVal;
    }
    visited.push(dir);
    if (existsSync(path.join(dir, 'tsconfig.json'))) {
      for (const v of visited) {
        tsconfigCache.set(v, dir);
      }
      return dir;
    }
    dir = path.dirname(dir);
  }

  const result = (dir === '.' && existsSync(path.join('.', 'tsconfig.json'))) ? '.' : null;
  for (const v of visited) {
    tsconfigCache.set(v, result);
  }
  return result;
}

/**
 * Performs concurrent TypeScript type checking for changed packages.
 */
async function checkTypeSafety(filesToCheck) {
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

  const checks = Array.from(packagesToCheck).map(async pkg => {
    try {
      console.log(`  Type checking ${pkg}...`);
      await execFileAsync('node', [
        'node_modules/typescript/bin/tsc',
        '--noEmit',
        '--project',
        path.join(pkg, 'tsconfig.json'),
      ]);
      return { pkg, passed: true };
    } catch (err) {
      console.error(`\n[ERROR] TypeScript type check failed in ${pkg}`);
      if (err.stdout) {
        console.error(err.stdout);
      }
      if (err.stderr) {
        console.error(err.stderr);
      }
      return { pkg, passed: false };
    }
  });

  const results = await Promise.all(checks);
  return results.every(r => r.passed);
}

// --- Execution ---
run();
