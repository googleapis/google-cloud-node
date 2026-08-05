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
import {createRequire} from 'module';
import path from 'path';
import {promisify} from 'util';
import {ESLint} from 'eslint';

const require = createRequire(import.meta.url);
const ts = require('typescript');
const execFileAsync = promisify(execFile);
const tsconfigCache = new Map();

// --- Main Runner (Entry Point) ---
async function run() {
  try {
    const isStrict = Boolean(process.argv.includes('--strict'));
    let changedTsFiles;
    if (isStrict) {
      changedTsFiles = getChangedFilesStrict();
    } else {
      changedTsFiles = getChangedFiles();
    }

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

function getChangedFilesStrict() {
  const gitDiffArg = process.env.GIT_DIFF_ARG;

  if (!gitDiffArg) {
    throw new Error(
      'Strict mode is enabled, but GIT_DIFF_ARG environment variable or --git-diff-arg flag was not provided. ' +
      'Please set the GIT_DIFF_ARG environment variable or provide --git-diff-arg <arg>.'
    );
  }

  console.log(`Strict mode enabled. Comparing using GIT_DIFF_ARG: ${gitDiffArg}`);

  const args = gitDiffArg.trim().split(/\s+/);

  try {
    const output = runGit([
      'diff',
      '--name-only',
      '--diff-filter=ACMRT',
      ...args,
      '--',
      '*.ts',
    ]);
    return output
      .split('\n')
      .map(f => f.trim())
      .filter(f => f.length > 0 && existsSync(f));
  } catch (err) {
    if (err.status !== 1) {
      throw new Error(
        `Strict mode error: git diff --quiet ${gitDiffArg} failed with exit code ${err.status}.\n` +
        `Ensure that the git reference '${gitDiffArg}' exists locally and that you have fetched the required commits/branches.\n` +
        `Details: ${String(err.stderr || err.message || '').trim()}`
      );
    }
  }
}

/**
 * Returns a list of changed TypeScript files comparing against target branches/references.
 */
function getChangedFiles() {
  const base = process.env.GITHUB_BASE_REF || 'main';
  const refsToTry = [
    base,
    `upstream/${base}`,
    `origin/${base}`,
    'FETCH_HEAD',
    'HEAD~1',
    'HEAD^',
  ];

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

  // Fallback to checking uncommitted working tree changes against HEAD if all specific refs fail
  try {
    const output = runGit([
      'diff',
      '--name-only',
      '--diff-filter=ACMRT',
      'HEAD',
      '--',
      '*.ts',
    ]);
    return output
      .split('\n')
      .map(f => f.trim())
      .filter(f => f.length > 0 && existsSync(f));
  } catch {
    return [];
  }
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

  // Group files by package directory to set tsconfigRootDir properly for typescript-eslint
  const filesByPkg = new Map();
  for (const file of filesToCheck) {
    const pkgDir = findTsconfigDir(file) || process.cwd();
    if (!filesByPkg.has(pkgDir)) {
      filesByPkg.set(pkgDir, []);
    }
    filesByPkg.get(pkgDir).push(file);
  }

  let hasBlockingErrors = false;

  for (const [pkgDir, files] of filesByPkg.entries()) {
    try {
      const absPkgDir = path.resolve(pkgDir);
      const eslint = new ESLint({
        cwd: absPkgDir,
        resolvePluginsRelativeTo: process.cwd(),
        overrideConfig: {
          parserOptions: {
            tsconfigRootDir: absPkgDir,
          },
        },
      });

      const relativeFiles = files.map(f => path.relative(absPkgDir, path.resolve(f)));
      const results = await eslint.lintFiles(relativeFiles);
      const formatter = await eslint.loadFormatter('stylish');
      const resultText = formatter.format(results);

      if (resultText) {
        console.log(resultText);
      }

      for (const fileResult of results) {
        for (const message of fileResult.messages) {
          if (message.severity === 2) {
            hasBlockingErrors = true;
          }
        }
      }
    } catch (err) {
      console.error(`\n[ERROR] Failed running ESLint in ${pkgDir}:`, err.message);
      hasBlockingErrors = true;
    }
  }

  if (hasBlockingErrors) {
    console.error('\n[ERROR] ESLint violations were detected.');
    return false;
  }

  return true;
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
  const configPath = ts.findConfigFile(dir, ts.sys?.fileExists ?? existsSync);
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
