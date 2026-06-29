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

// Extensions to check for Prettier and ESLint/GTS
const targetExtensions = new Set(['.ts']);

function getGitTarget() {
  const base = process.env.GITHUB_BASE_REF || 'main';

  // Helper to check if a ref exists in git
  const refExists = ref => {
    try {
      execFileSync('git', ['rev-parse', '--verify', ref], {stdio: 'ignore'});
      return true;
    } catch {
      return false;
    }
  };

  if (refExists(base)) {
    return base;
  }
  if (refExists(`origin/${base}`)) {
    return `origin/${base}`;
  }
  return 'HEAD~1';
}

function getChangedFiles() {
  const targetRef = getGitTarget();
  try {
    const output = execFileSync(
      'git',
      ['diff', '--name-only', '--diff-filter=ACMRT', targetRef],
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
      `Error finding changed files against ${targetRef}: ${err.message}`,
    );
  }
}

async function checkPrettierFormatting(filesToCheck) {
  if (filesToCheck.length === 0) {
    return true;
  }

  const configCache = new Map();
  const results = await Promise.all(
    filesToCheck.map(async file => {
      try {
        const fileInfo = await prettier.getFileInfo(file);
        if (fileInfo.ignored) {
          return {file, isFormatted: true};
        }

        const dir = path.dirname(file);
        // Cache Prettier configs by directory to avoid redundant disk I/O
        let config = configCache.get(dir);
        if (!config) {
          config = await prettier.resolveConfig(file);
          configCache.set(dir, config);
        }

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
    return false;
  }

  return true;
}

async function checkEslint(filesToCheck) {
  if (filesToCheck.length === 0) {
    return true;
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
    return true;
  } catch (err) {
    throw new Error(`ESLint execution failed: ${err.message}`);
  }
}

function checkTypeSafety(filesToCheck) {
  if (filesToCheck.length === 0) {
    return true;
  }

  // Map files to their package directories
  const packagesToCheck = new Set();
  for (const file of filesToCheck) {
    const parts = file.split(path.sep);
    // e.g. packages/google-cloud-storage/src/index.ts -> packages/google-cloud-storage
    if (parts[0] === 'packages' && parts.length > 1) {
      const packageDir = path.join(parts[0], parts[1]);
      if (existsSync(path.join(packageDir, 'tsconfig.json'))) {
        packagesToCheck.add(packageDir);
      }
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
        'npx',
        ['tsc', '--noEmit', '--project', path.join(pkg, 'tsconfig.json')],
        {stdio: 'inherit'},
      );
    } catch (err) {
      console.error(`\n[ERROR] TypeScript type check failed in ${pkg}`);
      passed = false;
    }
  }

  return passed;
}

(async () => {
  const changedTsFiles = getChangedFiles();

  // Run Prettier, ESLint, and Type check sequentially
  const prettierPassed = await checkPrettierFormatting(changedTsFiles);
  const eslintPassed = await checkEslint(changedTsFiles);
  const typeSafetyPassed = checkTypeSafety(changedTsFiles);

  if (!prettierPassed || !eslintPassed || !typeSafetyPassed) {
    throw new Error('Linter checks failed.');
  }
})().catch(err => {
  console.error('\nLinter failed:', err.message);
  process.exitCode = 1;
});
