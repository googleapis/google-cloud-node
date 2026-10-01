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

import {execFileSync, execFile} from 'node:child_process';
import {existsSync} from 'node:fs';
import path from 'node:path';
import {promisify} from 'node:util';
import {ESLint} from 'eslint';

const execFileAsync = promisify(execFile);
const tsconfigCache = new Map();

// --- Main Runner (Entry Point) ---
async function run() {
  try {
    const isStrict = process.argv.includes('--strict');
    const changedTsFiles = isStrict
      ? getChangedFilesStrict()
      : getChangedFiles();

    if (changedTsFiles.length === 0) {
      console.log('No TypeScript files changed. Skipping checks.');
      return;
    }

    const packagesToCheck = getPackageDirs(changedTsFiles);

    // Install missing package dependencies upfront before running linters or type checkers
    await ensurePackageDependencies(packagesToCheck);

    // Run ESLint and Type checks in parallel to optimize CPU utilization
    const [eslintPassed, typeSafetyPassed] = await Promise.all([
      checkEslint(changedTsFiles),
      checkTypeSafety(packagesToCheck),
    ]);

    if (!eslintPassed || !typeSafetyPassed) {
      throw new Error(
        'Linter checks failed. Please fix. To rerun the linter, run: npm run lint',
      );
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
 * Runs `git diff --name-only` for the given revision and pathspec arguments,
 * returning existing changed TypeScript files (excluding test fixtures).
 */
function getGitDiffTsFiles(revArgs, pathspecArgs = []) {
  if (revArgs.length === 0 || revArgs.some(arg => arg.startsWith('-'))) {
    throw new Error(`Invalid git revision argument: ${revArgs.join(' ')}`);
  }
  const output = runGit([
    'diff',
    '--name-only',
    '--diff-filter=ACMRT',
    ...revArgs,
    '--',
    '*.ts',
    ...pathspecArgs,
  ]);
  return output
    .split('\n')
    .map(f => f.trim())
    .filter(f => f.length > 0 && existsSync(f) && !f.includes('/fixtures/'));
}

function getChangedFilesStrict() {
  const rawDiffArg = process.env.GIT_DIFF_ARG?.trim();

  if (!rawDiffArg) {
    throw new Error(
      'Strict mode is enabled, but GIT_DIFF_ARG environment variable was not provided. ' +
        'Please set the GIT_DIFF_ARG environment variable.',
    );
  }

  const rawArgs = rawDiffArg.split(/\s+/);
  const dashDashIndex = rawArgs.indexOf('--');
  const revArgs =
    dashDashIndex === -1 ? rawArgs : rawArgs.slice(0, dashDashIndex);
  const pathspecArgs =
    dashDashIndex === -1 ? [] : rawArgs.slice(dashDashIndex + 1);

  // If a single ref is provided (e.g. "HEAD^1" or "origin/main"), convert to three-dot diff ("ref...HEAD")
  // to compare against the merge-base and avoid listing files modified on the base branch.
  if (
    revArgs.length === 1 &&
    revArgs[0] !== 'HEAD' &&
    !revArgs[0].includes('..')
  ) {
    revArgs[0] = `${revArgs[0]}...HEAD`;
  }

  const formattedDiffArg =
    pathspecArgs.length > 0
      ? `${revArgs.join(' ')} -- ${pathspecArgs.join(' ')}`
      : revArgs.join(' ');

  console.log(
    `Strict mode enabled. Comparing using GIT_DIFF_ARG: ${formattedDiffArg}`,
  );

  try {
    return getGitDiffTsFiles(revArgs, pathspecArgs);
  } catch (err) {
    throw new Error(
      `Strict mode error: git diff ${formattedDiffArg} failed${err.status !== undefined ? ` with exit code ${err.status}` : ''}.\n` +
        `Ensure that the git reference '${revArgs.join(' ')}' exists locally and that you have fetched the required commits/branches.\n` +
        `Details: ${String(err.stderr || err.message || '').trim()}`,
    );
  }
}

/**
 * Returns a list of changed TypeScript files comparing against target branches/references.
 */
function getChangedFiles() {
  const base = process.env.GITHUB_BASE_REF?.trim() || 'main';
  const refsToTry = [
    `${base}...HEAD`,
    `upstream/${base}...HEAD`,
    `origin/${base}...HEAD`,
    'FETCH_HEAD...HEAD',
    'HEAD~1...HEAD',
    'HEAD^...HEAD',
    // Fallback to checking uncommitted working tree changes against HEAD if all specific refs fail
    'HEAD',
  ];

  for (const ref of refsToTry) {
    try {
      return getGitDiffTsFiles([ref]);
    } catch {
      // Continue to the next fallback ref
    }
  }

  return [];
}

// --- ESLint Checker ---

// LINT.IfChange(ignored_path_segments)
const IGNORED_PATH_SEGMENTS = new Set([
  'node_modules',
  'build',
  'dist',
  'system-test',
  'fixtures',
  'test-fixtures',
  'baselines',
  'baselines-esm',
  'generated',
  '.coverage',
  'coverage',
  '.nyc_output',
  'protos',
]);
// LINT.ThenChange(.eslintrc.json:ignorePatterns)

/**
 * Determines whether a file should undergo ESLint checks.
 * Excludes declaration files (*.d.ts), auto-generated artifacts, and test baselines/fixtures.
 */
function shouldLintFile(filePath) {
  if (filePath.endsWith('.d.ts')) {
    return false;
  }
  const segments = filePath.split(/[\\/]/);
  return !segments.some(seg => IGNORED_PATH_SEGMENTS.has(seg));
}

/**
 * Runs ESLint programmatically.
 * Blocks the PR if any rule configured as "error" (severity 2) fails.
 */
async function checkEslint(filesToCheck) {
  // Exclude declaration files (*.d.ts), auto-generated proto/sample files, and fixtures from ESLint
  const filesToProcess = filesToCheck.filter(shouldLintFile);

  if (filesToProcess.length === 0) {
    return true;
  }

  const repoRoot = process.cwd();

  // Group files by package directory to set tsconfigRootDir properly for typescript-eslint
  const filesByPkg = new Map();
  for (const file of filesToProcess) {
    const pkgDir = findTsconfigDir(file) || repoRoot;
    let group = filesByPkg.get(pkgDir);
    if (!group) {
      group = [];
      filesByPkg.set(pkgDir, group);
    }
    group.push(file);
  }

  let hasBlockingErrors = false;

  for (const [pkgDir, files] of filesByPkg) {
    try {
      const eslint = new ESLint({
        cwd: pkgDir,
        resolvePluginsRelativeTo: repoRoot,
        overrideConfig: {
          parserOptions: {
            tsconfigRootDir: pkgDir,
          },
        },
      });

      const relativeFiles = files.map(f =>
        path.relative(pkgDir, path.resolve(f)),
      );
      const results = await eslint.lintFiles(relativeFiles);
      const formatter = await eslint.loadFormatter('stylish');
      const resultText = await formatter.format(results);

      if (resultText) {
        console.log(resultText);
      }

      if (results.some(r => r.errorCount > 0)) {
        hasBlockingErrors = true;
      }
    } catch (err) {
      console.error(
        `\n[ERROR] Failed running ESLint in ${pkgDir}:`,
        err.message,
      );
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
 * Stops at the repository root and caches traversed directories to avoid redundant disk operations.
 */
function findTsconfigDir(filePath) {
  const repoRoot = path.resolve(process.cwd());
  let currentDir = path.resolve(path.dirname(filePath));
  const visited = [];

  while (
    currentDir === repoRoot ||
    currentDir.startsWith(`${repoRoot}${path.sep}`)
  ) {
    if (tsconfigCache.has(currentDir)) {
      const cached = tsconfigCache.get(currentDir);
      for (const dir of visited) {
        tsconfigCache.set(dir, cached);
      }
      return cached;
    }
    visited.push(currentDir);
    if (existsSync(path.join(currentDir, 'tsconfig.json'))) {
      for (const dir of visited) {
        tsconfigCache.set(dir, currentDir);
      }
      return currentDir;
    }
    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) {
      break;
    }
    currentDir = parentDir;
  }

  for (const dir of visited) {
    tsconfigCache.set(dir, null);
  }
  return null;
}

/**
 * Maps a list of changed files to their unique containing package directories.
 */
function getPackageDirs(files) {
  const packages = new Set();
  for (const file of files) {
    const tsconfigDir = findTsconfigDir(file);
    if (tsconfigDir) {
      packages.add(tsconfigDir);
    }
  }
  return packages;
}

/**
 * Ensures all changed packages have node_modules installed before running linting or type checking.
 */
async function ensurePackageDependencies(packages) {
  const isWin = process.platform === 'win32';
  await Promise.all(
    Array.from(packages, async pkg => {
      const packageJsonPath = path.join(pkg, 'package.json');
      const nodeModulesPath = path.join(pkg, 'node_modules');
      if (!existsSync(packageJsonPath) || existsSync(nodeModulesPath)) {
        return;
      }
      console.log(`  Installing dependencies in ${pkg}...`);
      const usePnpm = existsSync(path.join(pkg, 'pnpm-lock.yaml'));
      const cmd = usePnpm
        ? isWin
          ? 'pnpm.cmd'
          : 'pnpm'
        : isWin
          ? 'npm.cmd'
          : 'npm';
      const args = usePnpm
        ? ['install', '--ignore-workspace', '--ignore-scripts']
        : ['install', '--no-audit', '--no-fund', '--ignore-scripts'];
      await execFileAsync(cmd, args, {
        cwd: pkg,
        shell: isWin,
      });
    }),
  );
}

/**
 * Performs concurrent TypeScript type checking for changed packages.
 */
async function checkTypeSafety(packagesToCheck) {
  if (packagesToCheck.size === 0) {
    return true;
  }

  console.log(
    `\nRunning TypeScript type checks for ${packagesToCheck.size} package(s)...`,
  );

  const tscBin = path.resolve('node_modules/typescript/bin/tsc');
  const results = await Promise.all(
    Array.from(packagesToCheck, async pkg => {
      try {
        console.log(`  Type checking ${pkg}...`);
        await execFileAsync(
          process.execPath,
          [tscBin, '--noEmit', '--project', path.join(pkg, 'tsconfig.json')],
          {maxBuffer: 10 * 1024 * 1024},
        );
        return true;
      } catch (err) {
        console.error(`\n[ERROR] TypeScript type check failed in ${pkg}`);
        if (err.stdout) {
          console.error(err.stdout);
        }
        if (err.stderr) {
          console.error(err.stderr);
        }
        return false;
      }
    }),
  );

  return results.every(Boolean);
}

// --- Execution ---
await run();
