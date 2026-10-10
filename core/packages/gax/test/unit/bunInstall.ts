/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import assert from 'assert';
import {spawnSync, SpawnSyncReturns} from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import {after, before, Context, describe, it} from 'mocha';

interface MonorepoPackage {
  name: string;
  relDir: string;
  category: 'packages' | 'handwritten' | 'core/packages' | 'core';
  hasMainEntrypoint: boolean;
}

const PACKAGE_CATEGORIES: ReadonlyArray<MonorepoPackage['category']> = [
  'packages',
  'handwritten',
  'core/packages',
  'core',
];

// Packages that cannot be loaded via a bare `require('<pkg>')` without native
// V8 C++ addon compilation (`pprof` in `@google-cloud/profiler`) or because
// they only ship CLI binaries without a `"main"` entrypoint.
const SKIP_BARE_REQUIRE_PACKAGES = new Set<string>([
  '@google-cloud/profiler',
  'gapic-node-processing',
]);

function hasRootExports(exportsField: unknown): boolean {
  if (typeof exportsField === 'string') {
    return exportsField.length > 0;
  }
  if (Array.isArray(exportsField)) {
    return exportsField.length > 0;
  }
  if (typeof exportsField === 'object' && exportsField !== null) {
    const keys = Object.keys(exportsField);
    if (keys.length === 0) {
      return false;
    }
    // Either a conditional exports object (e.g. {"import": ..., "require": ...})
    // or a subpath exports map containing "."
    return !keys.some(k => k.startsWith('.')) || '.' in exportsField;
  }
  return false;
}

function findRepoRoot(startDir: string): string {
  let current = path.resolve(startDir);
  while (!fs.existsSync(path.join(current, '.release-please-manifest.json'))) {
    const parent = path.dirname(current);
    if (parent === current) {
      throw new Error(
        `Could not locate .release-please-manifest.json starting from ${startDir}`,
      );
    }
    current = parent;
  }
  return current;
}

function discoverMonorepoPackages(repoRoot: string): MonorepoPackage[] {
  const manifestPath = path.join(repoRoot, '.release-please-manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')) as Record<
    string,
    string
  >;

  const discovered = new Map<string, MonorepoPackage>();

  for (const category of PACKAGE_CATEGORIES) {
    const categoryDir = path.join(repoRoot, category);
    if (!fs.existsSync(categoryDir)) {
      continue;
    }
    const entries = fs.readdirSync(categoryDir, {withFileTypes: true});
    for (const entry of entries) {
      if (!entry.isDirectory() && !entry.isSymbolicLink()) {
        continue;
      }
      const relDir = path.posix.join(category, entry.name);
      if (!Object.prototype.hasOwnProperty.call(manifest, relDir)) {
        continue;
      }
      // Skip newly scaffolded packages whose initial release (0.0.0) has not
      // yet been published to the npm registry.
      if (manifest[relDir] === '0.0.0') {
        continue;
      }
      const pkgJsonPath = path.join(repoRoot, relDir, 'package.json');
      if (!fs.existsSync(pkgJsonPath)) {
        continue;
      }
      const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8')) as {
        name?: string;
        version?: string;
        private?: boolean;
        main?: string;
        exports?: unknown;
      };
      if (!pkgJson.name || pkgJson.private || pkgJson.version === '0.0.0') {
        continue;
      }
      discovered.set(pkgJson.name, {
        name: pkgJson.name,
        relDir,
        category,
        hasMainEntrypoint: Boolean(
          pkgJson.main || hasRootExports(pkgJson.exports),
        ),
      });
    }
  }

  return Array.from(discovered.values()).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
}

function isBunAvailable(): boolean {
  const result = spawnSync('bun', ['--version'], {
    encoding: 'utf8',
    timeout: 15000,
  });
  return !result.error && result.status === 0;
}

function formatBunResult(result: SpawnSyncReturns<string>): string {
  return [
    `status: ${String(result.status)}`,
    `signal: ${String(result.signal)}`,
    `error: ${result.error ? result.error.message : 'none'}`,
    `stdout: ${result.stdout ?? ''}`,
    `stderr: ${result.stderr ?? ''}`,
  ].join('\n');
}

function runBun(
  args: string[],
  cwd: string,
  cacheDir: string,
  timeoutMs = 240000,
): SpawnSyncReturns<string> {
  return spawnSync('bun', args, {
    cwd,
    encoding: 'utf8',
    timeout: timeoutMs,
    maxBuffer: 50 * 1024 * 1024,
    env: {
      ...process.env,
      NODE_OPTIONS: '',
      BUN_INSTALL_CACHE_DIR: cacheDir,
    },
  });
}

function runBunInstallWithFallback(
  extraArgs: string[],
  cwd: string,
  cacheDir: string,
  allowOfflineFallback: boolean,
): {result: SpawnSyncReturns<string>; diagnostics: string} {
  const baseArgs = [
    'install',
    ...extraArgs,
    '--no-progress',
    '--cache-dir',
    cacheDir,
  ];
  const result = runBun(baseArgs, cwd, cacheDir);
  if (result.status === 0 || process.env.CI || !allowOfflineFallback) {
    return {result, diagnostics: formatBunResult(result)};
  }
  // When running locally inside a network-restricted environment with a
  // pre-populated cache in os.tmpdir(), retry with --offline.
  const offlineResult = runBun([...baseArgs, '--offline'], cwd, cacheDir);
  if (offlineResult.status === 0) {
    return {result: offlineResult, diagnostics: formatBunResult(offlineResult)};
  }
  return {
    result,
    diagnostics: `Online install failed:\n${formatBunResult(result)}\nOffline fallback failed:\n${formatBunResult(offlineResult)}`,
  };
}

describe('bun install package verification', function () {
  this.timeout(600000);

  const repoRoot = findRepoRoot(__dirname);
  const monorepoPackages = discoverMonorepoPackages(repoRoot);

  let bunAvailable = false;
  let tempRootDir = '';
  let sharedCacheDir = '';
  let hasPreexistingCache = false;

  before(() => {
    bunAvailable = isBunAvailable();
    if (!bunAvailable) {
      if (
        process.env.JS_RUNTIME === 'bun' ||
        typeof process.versions.bun === 'string'
      ) {
        assert.fail(
          'Expected bun CLI to be available in PATH when running under the Bun test suite',
        );
      }
      return;
    }
    tempRootDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gcn-bun-install-'));
    const prewarmedCacheDir = path.join(os.tmpdir(), 'bun-cache');
    if (process.env.BUN_INSTALL_CACHE_DIR) {
      sharedCacheDir = process.env.BUN_INSTALL_CACHE_DIR;
      hasPreexistingCache = fs.existsSync(sharedCacheDir);
    } else if (fs.existsSync(prewarmedCacheDir)) {
      sharedCacheDir = prewarmedCacheDir;
      hasPreexistingCache = true;
    } else {
      sharedCacheDir = path.join(tempRootDir, 'cache');
      hasPreexistingCache = false;
    }
  });

  after(() => {
    if (tempRootDir && fs.existsSync(tempRootDir)) {
      fs.rmSync(tempRootDir, {recursive: true, force: true});
    }
  });

  function ensureBunOrSkip(ctx: Context): void {
    if (!bunAvailable) {
      ctx.skip();
    }
  }

  it('discovers all publishable monorepo SDK packages across packages, handwritten, and core', () => {
    assert.ok(
      monorepoPackages.length >= 270,
      `Expected at least 270 publishable monorepo packages, found ${monorepoPackages.length}`,
    );

    const byCategory = new Map<string, number>();
    for (const pkg of monorepoPackages) {
      byCategory.set(pkg.category, (byCategory.get(pkg.category) ?? 0) + 1);
    }

    assert.ok(
      (byCategory.get('packages') ?? 0) >= 240,
      'Expected generated GAPIC packages in packages/*',
    );
    assert.ok(
      (byCategory.get('handwritten') ?? 0) >= 10,
      'Expected handwritten libraries in handwritten/*',
    );
    assert.ok(
      (byCategory.get('core/packages') ?? 0) >= 10,
      'Expected core packages in core/packages/*',
    );
    assert.ok(
      (byCategory.get('core') ?? 0) >= 5,
      'Expected root core libraries in core/*',
    );

    const packageNames = new Set(monorepoPackages.map(pkg => pkg.name));
    for (const expectedPkg of [
      '@google-cloud/bigtable',
      '@google-cloud/storage',
      '@google-cloud/pubsub',
      '@google-cloud/secret-manager',
      'google-gax',
      'google-auth-library',
    ]) {
      assert.ok(
        packageNames.has(expectedPkg),
        `Expected ${expectedPkg} to be discovered in monorepo packages`,
      );
    }
  });

  it('installs @google-cloud/bigtable with default bun install flags and instantiates the client', function () {
    ensureBunOrSkip(this);
    const singlePkgDir = path.join(tempRootDir, 'single-package-demo');
    fs.mkdirSync(singlePkgDir, {recursive: true});
    try {
      fs.writeFileSync(
        path.join(singlePkgDir, 'package.json'),
        JSON.stringify(
          {
            name: 'bigtable-bun-demo',
            version: '1.0.0',
            private: true,
            dependencies: {
              '@google-cloud/bigtable': 'latest',
            },
          },
          null,
          2,
        ),
      );

      const {result: installResult, diagnostics} = runBunInstallWithFallback(
        [],
        singlePkgDir,
        sharedCacheDir,
        hasPreexistingCache,
      );
      assert.strictEqual(
        installResult.status,
        0,
        `bun install failed for @google-cloud/bigtable:\n${diagnostics}`,
      );

      assert.ok(
        fs.existsSync(path.join(singlePkgDir, 'bun.lock')),
        'Expected bun.lock to be generated',
      );
      assert.ok(
        fs.existsSync(
          path.join(
            singlePkgDir,
            'node_modules',
            '@google-cloud',
            'bigtable',
            'package.json',
          ),
        ),
        'Expected @google-cloud/bigtable/package.json in node_modules',
      );

      const verifyScriptPath = path.join(singlePkgDir, 'verify-bigtable.cjs');
      fs.writeFileSync(
        verifyScriptPath,
        [
          "'use strict';",
          "const assert = require('assert');",
          "const {Bigtable} = require('@google-cloud/bigtable');",
          "assert.strictEqual(typeof Bigtable, 'function');",
          "const client = new Bigtable({projectId: 'test-project'});",
          "assert.strictEqual(client.projectId, 'test-project');",
        ].join('\n'),
      );

      const verifyResult = runBun(
        ['run', verifyScriptPath],
        singlePkgDir,
        sharedCacheDir,
        30000,
      );
      assert.strictEqual(
        verifyResult.status,
        0,
        `Failed to load and instantiate @google-cloud/bigtable under Bun:\n${formatBunResult(verifyResult)}`,
      );
    } finally {
      fs.rmSync(singlePkgDir, {recursive: true, force: true});
    }
  });

  it('installs all monorepo SDK packages via bun install and verifies module resolution under Bun', function () {
    ensureBunOrSkip(this);
    const allPackagesDir = path.join(tempRootDir, 'all-packages');
    fs.mkdirSync(allPackagesDir, {recursive: true});

    const dependencies: Record<string, string> = {};
    for (const pkg of monorepoPackages) {
      dependencies[pkg.name] = 'latest';
    }

    fs.writeFileSync(
      path.join(allPackagesDir, 'package.json'),
      JSON.stringify(
        {
          name: 'google-cloud-node-bun-install-verification',
          version: '1.0.0',
          private: true,
          dependencies,
        },
        null,
        2,
      ),
    );

    // Pass --ignore-scripts when installing all 278 packages together because
    // @google-cloud/profiler depends on `pprof`, which is on Bun's default
    // trusted dependencies list and attempts a V8 C++ `node-gyp rebuild`.
    const {result: installResult, diagnostics} = runBunInstallWithFallback(
      ['--ignore-scripts'],
      allPackagesDir,
      sharedCacheDir,
      hasPreexistingCache,
    );
    assert.strictEqual(
      installResult.status,
      0,
      `bun install failed for all ${monorepoPackages.length} monorepo packages:\n${diagnostics}`,
    );

    const lockfilePath = path.join(allPackagesDir, 'bun.lock');
    assert.ok(
      fs.existsSync(lockfilePath),
      'Expected bun.lock to be generated for all-packages install',
    );
    const lockfileContent = fs.readFileSync(lockfilePath, 'utf8');

    for (const pkg of monorepoPackages) {
      assert.ok(
        lockfileContent.includes(`"${pkg.name}"`),
        `Expected ${pkg.name} to be recorded in bun.lock`,
      );
      const installedPkgJsonPath = path.join(
        allPackagesDir,
        'node_modules',
        ...pkg.name.split('/'),
        'package.json',
      );
      assert.ok(
        fs.existsSync(installedPkgJsonPath),
        `Expected ${pkg.name} to be installed at ${installedPkgJsonPath}`,
      );
      const installedPkg = JSON.parse(
        fs.readFileSync(installedPkgJsonPath, 'utf8'),
      ) as {name?: string; version?: string};
      assert.strictEqual(installedPkg.name, pkg.name);
      assert.ok(
        typeof installedPkg.version === 'string' &&
          installedPkg.version.length > 0,
        `Expected valid installed version for ${pkg.name}`,
      );
    }

    const requireablePackages = monorepoPackages
      .filter(
        pkg =>
          pkg.hasMainEntrypoint && !SKIP_BARE_REQUIRE_PACKAGES.has(pkg.name),
      )
      .map(pkg => pkg.name);

    const verifyAllScriptPath = path.join(allPackagesDir, 'verify-all.cjs');
    fs.writeFileSync(
      verifyAllScriptPath,
      [
        "'use strict';",
        "const assert = require('assert');",
        `const allPackages = ${JSON.stringify(monorepoPackages.map(p => p.name))};`,
        `const requireablePackages = ${JSON.stringify(requireablePackages)};`,
        'for (const pkgName of allPackages) {',
        '  try {',
        '    const resolved = require.resolve(`${pkgName}/package.json`);',
        "    assert.strictEqual(typeof resolved, 'string');",
        '  } catch (err) {',
        "    if (!err || err.code !== 'ERR_PACKAGE_PATH_NOT_EXPORTED') {",
        '      throw err;',
        '    }',
        '    const resolvedMain = require.resolve(pkgName);',
        "    assert.strictEqual(typeof resolvedMain, 'string');",
        '  }',
        '}',
        'const failures = [];',
        'for (const pkgName of requireablePackages) {',
        '  try {',
        '    const mod = require(pkgName);',
        '    assert.ok(',
        "      mod !== null && (typeof mod === 'object' || typeof mod === 'function'),",
        '      `Expected ${pkgName} to export an object or function`,',
        '    );',
        '  } catch (err) {',
        '    failures.push(`${pkgName}: ${err && err.message ? err.message : String(err)}`);',
        '  }',
        '}',
        'assert.strictEqual(',
        '  failures.length,',
        '  0,',
        '  `Failed to require ${failures.length} installed packages under Bun:\\n${failures.join("\\n")}`,',
        ');',
        "const {Bigtable} = require('@google-cloud/bigtable');",
        "const {Storage} = require('@google-cloud/storage');",
        "const {PubSub} = require('@google-cloud/pubsub');",
        "const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');",
        "const gax = require('google-gax');",
        "const {GoogleAuth} = require('google-auth-library');",
        "assert.strictEqual(typeof new Bigtable({projectId: 'test-project'}).projectId, 'string');",
        "assert.strictEqual(typeof new Storage({projectId: 'test-project'}).projectId, 'string');",
        "assert.strictEqual(typeof new PubSub({projectId: 'test-project'}).projectId, 'string');",
        "assert.strictEqual(typeof new SecretManagerServiceClient(), 'object');",
        "assert.strictEqual(typeof gax.GrpcClient, 'function');",
        "assert.strictEqual(typeof new GoogleAuth(), 'object');",
      ].join('\n'),
    );

    const verifyAllResult = runBun(
      ['run', verifyAllScriptPath],
      allPackagesDir,
      sharedCacheDir,
      120000,
    );
    assert.strictEqual(
      verifyAllResult.status,
      0,
      `Failed to verify installed packages under Bun:\n${formatBunResult(verifyAllResult)}`,
    );
  });
});
