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
import * as ts from 'typescript';

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

    // Run ESLint and Type checks in parallel to optimize CPU utilization
    const [eslintPassed, typeSafetyPassed] = await Promise.all([
      checkEslint(changedTsFiles),
      checkTypeSafety(changedTsFiles),
    ]);

    if (!eslintPassed || !typeSafetyPassed) {
      throw new Error('Linter checks failed. Please fix. To rerun the linter, run: npm run lint');
    }
  } catch (err) {
    console.error('\nLinter failed:', err.message);
    // Setting exit code 1 to indicate failure. In the CI pipeline,
    // continue-on-error is used to ensure this does not block PRs.
    process.exitCode = 1;
  }
}

// --- Git Changed Files Logic ---

/**
 * Executes a Git command synchronously.
 */
function runGit(args, options = {}) {
  return execFileSync('git', args, {
    encoding: 'utf8',
    stdio: 'pipe',
    ...options,
  });
}

/**
 * Helper to get modified/added TypeScript files against a given git ref.
 * Uses merge-base when possible to compare against the common ancestor (e.g. when base and branch have both moved).
 */
function getDiffFiles(ref) {
  let diffTarget = ref;
  try {
    const mergeBase = runGit(['merge-base', ref, 'HEAD']).trim();
    if (mergeBase) {
      diffTarget = mergeBase;
    }
  } catch {
    // If merge-base fails (e.g. shallow clone or invalid ref), fall back to using ref directly
  }

  const output = runGit([
    'diff',
    '--name-only',
    '--diff-filter=ACMRT',
    diffTarget,
    '--',
    '*.ts',
  ]);
  return output
    .split('\n')
    .map(f => f.trim())
    .filter(f => f.length > 0 && existsSync(f));
}

/**
 * Returns a list of changed TypeScript files comparing against target branches/references.
 */
function getChangedFiles() {
  const isCI = Boolean(process.env.CI || process.env.GITHUB_ACTIONS || process.env.GITHUB_BASE_REF);

  if (isCI) {
    const baseRef = process.env.GITHUB_BASE_REF;
    if (!baseRef) {
      throw new Error('Running in CI but GITHUB_BASE_REF environment variable is not set.');
    }
    try {
      const files = getDiffFiles(baseRef);
      console.log(`Comparing against base reference: ${baseRef}`);
      return files;
    } catch {
      throw new Error(`Failed to determine changed files against GITHUB_BASE_REF '${baseRef}' in CI.`);
    }
  }

  let currentBranch = '';
  try {
    currentBranch = runGit(['rev-parse', '--abbrev-ref', 'HEAD']).trim();
  } catch {
    // Continue with fallback refs if branch detection fails
  }

  if (currentBranch === 'main') {
    try {
      const files = getDiffFiles('HEAD~1');
      console.log('Comparing against base reference: HEAD~1');
      return files;
    } catch {
      throw new Error("Failed to determine changed files against 'HEAD~1' on main branch.");
    }
  }

  const refsToTry = ['upstream/main', 'origin/main', 'main'];
  for (const ref of refsToTry) {
    try {
      const files = getDiffFiles(ref);
      console.log(`Comparing against base reference: ${ref}`);
      return files;
    } catch {
      // Continue to next ref if this one fails/does not exist
    }
  }

  throw new Error(`Failed to determine changed files. Tried refs: ${refsToTry.join(', ')}`);
}

// --- ESLint Checker ---

/**
 * Runs ESLint programmatically.
 * Blocks the PR if any rule configured as "error" (severity 2) fails.
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
        // message.severity === 2 indicates an error-level rule configuration.
        if (message.severity === 2) {
          hasBlockingErrors = true;
        }
      }
    }

    if (hasBlockingErrors) {
      console.error('\n[ERROR] ESLint violations were detected.');
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
  const dir = path.dirname(filePath);
  if (tsconfigCache.has(dir)) {
    return tsconfigCache.get(dir);
  }
  const configPath = ts.findConfigFile(dir, ts.sys.fileExists);
  const result = configPath ? path.dirname(configPath) : null;
  tsconfigCache.set(dir, result);
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
