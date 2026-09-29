#!/usr/bin/env node
// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Runtime-agnostic test runner for google-cloud-node packages.
//
// - Under Node.js (`typeof Bun === 'undefined'` and `JS_RUNTIME !== 'bun'`):
//   Executes `c8 mocha <args>` (unless `--no-c8` is passed), preserving V8 code
//   coverage and Mocha worker-thread parallelism (`parallel: true`).
// - Under Bun (`typeof Bun !== 'undefined'` or `JS_RUNTIME === 'bun'`):
//   Skips `c8` (which relies on Node's `NODE_V8_COVERAGE`), disables Mocha
//   worker-thread parallelism (`--no-parallel`), preloads the Bun `proxyquire`
//   shim (`bin/proxyquire-bun-shim.cjs`), and loads `mocha/bin/mocha.js`
//   directly in-process so `#!/usr/bin/env node` shebangs never switch back to
//   Node.js.
'use strict';

const {spawnSync} = require('child_process');
const path = require('path');
const fs = require('fs');

const rawArgs = process.argv.slice(2);
const noC8 = rawArgs.includes('--no-c8');
const args = rawArgs.filter(a => a !== '--no-c8');

const isBunRuntime = typeof Bun !== 'undefined';
const wantsBunRuntime = isBunRuntime || process.env.JS_RUNTIME === 'bun';

const repoRoot = path.resolve(__dirname, '..');
const searchPaths = [process.cwd(), repoRoot];

function resolveBin(pkgBin) {
  for (const base of searchPaths) {
    const candidate = path.join(base, 'node_modules', pkgBin);
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }
  return require.resolve(pkgBin, {paths: searchPaths});
}

if (wantsBunRuntime) {
  process.env.MOCHA_PARALLEL = 'false';

  // If JS_RUNTIME=bun was requested but this script was launched via Node.js
  // (e.g., `pnpm test` without `bun --bun`), re-exec under the `bun` binary.
  if (!isBunRuntime) {
    const res = spawnSync('bun', [__filename, ...rawArgs], {
      stdio: 'inherit',
      env: {...process.env, MOCHA_PARALLEL: 'false'},
    });
    if (res.error) {
      console.error('[run-test] Failed to launch bun:', res.error.message);
      process.exit(1);
    }
    process.exit(res.status ?? 1);
  }

  // Running inside Bun: preload the proxyquire shim and also pass --require
  // so if mocha/bin/mocha.js spawns a child `lib/cli/cli.js` for node flags
  // (--enable-source-maps, --throw-deprecation), the child loads the shim too.
  const shimPath = path.resolve(__dirname, 'proxyquire-bun-shim.cjs');
  require(shimPath);

  const mochaBin = resolveBin('mocha/bin/mocha.js');
  const mochaArgs = [...args];
  if (!mochaArgs.includes('--no-parallel')) {
    mochaArgs.unshift('--no-parallel');
  }
  if (!mochaArgs.includes(shimPath)) {
    mochaArgs.unshift('--require', shimPath);
  }
  if (!mochaArgs.includes('--exit')) {
    mochaArgs.unshift('--exit');
  }

  process.argv = [process.execPath, mochaBin, ...mochaArgs];
  require(mochaBin);
} else {
  // Running inside Node.js: preserve `c8 mocha <args>` behavior.
  const mochaBin = resolveBin('mocha/bin/mocha.js');
  let cmdArgs;
  if (noC8) {
    cmdArgs = [mochaBin, ...args];
  } else {
    const c8Bin = resolveBin('c8/bin/c8.js');
    cmdArgs = [c8Bin, mochaBin, ...args];
  }

  const res = spawnSync(process.execPath, cmdArgs, {
    stdio: 'inherit',
    env: process.env,
  });
  if (res.error) {
    console.error('[run-test] Failed to run tests:', res.error.message);
    process.exit(1);
  }
  process.exit(res.status ?? 1);
}
