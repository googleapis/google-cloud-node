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

const SHIM_FLAGS = [
  {
    flag: '--fetch-shim',
    envIn: 'BUN_FETCH_SHIM',
    envOut: 'BUN_ENABLE_FETCH_SHIM',
  },
  {
    flag: '--bun-plugin-shim',
    envIn: 'BUN_PLUGIN_SHIM',
    envOut: 'BUN_ENABLE_BUN_PLUGIN_SHIM',
  },
  {
    flag: '--gaxios-shim',
    envIn: 'BUN_GAXIOS_SHIM',
    envOut: 'BUN_ENABLE_GAXIOS_SHIM',
  },
  {
    flag: '--proxyquire-shim',
    envIn: 'BUN_PROXYQUIRE_SHIM',
    envOut: 'BUN_ENABLE_PROXYQUIRE_SHIM',
  },
  {
    flag: '--require-shim',
    envIn: 'BUN_REQUIRE_SHIM',
    envOut: 'BUN_ENABLE_REQUIRE_SHIM',
  },
  {
    flag: '--abort-signal-timeout-shim',
    envIn: 'BUN_ABORT_SIGNAL_TIMEOUT_SHIM',
    envOut: 'BUN_ENABLE_ABORT_SIGNAL_TIMEOUT_SHIM',
  },
  {
    flag: '--promise-any-shim',
    envIn: 'BUN_PROMISE_ANY_SHIM',
    envOut: 'BUN_ENABLE_PROMISE_ANY_SHIM',
  },
  {
    flag: '--crypto-verify-shim',
    envIn: 'BUN_CRYPTO_VERIFY_SHIM',
    envOut: 'BUN_ENABLE_CRYPTO_VERIFY_SHIM',
  },
];

const shimFlagSet = new Set(SHIM_FLAGS.map(s => s.flag));
const shimEnvVars = {};
for (const {flag, envIn, envOut} of SHIM_FLAGS) {
  const enabled =
    rawArgs.includes(flag) ||
    process.env[envIn] === 'true' ||
    process.env[envOut] === 'true';
  shimEnvVars[envOut] = enabled ? 'true' : 'false';
}

const args = rawArgs.filter(a => a !== '--no-c8' && !shimFlagSet.has(a));

// Exit 0 if a package has no unit tests (e.g., single-service packages where
// the service is marked deprecated and no test directory was generated). Every
// requested compiled test directory and all source test directories must be
// absent so running `pnpm test` before `pnpm run compile` (or with another
// non-empty target directory) still runs/fails as expected.
const normalizedArgs = new Set(
  args.map(a => a.replace(/^\.\//, '').replace(/\/+$/, '')),
);
const hasSourceTests = ['test', 'esm/test', 'cjs/test'].some(dir =>
  fs.existsSync(dir),
);
const targets = ['build/test', 'build/esm/test', 'build/cjs/test'].filter(t =>
  normalizedArgs.has(t),
);
if (
  !hasSourceTests &&
  targets.length > 0 &&
  targets.every(t => !fs.existsSync(t))
) {
  process.exit(0);
}

const isBunRuntime = typeof Bun !== 'undefined';
const isBunUserAgent = /^bun\//i.test(process.env.npm_config_user_agent || '');
const wantsBunRuntime =
  isBunRuntime ||
  process.env.JS_RUNTIME === 'bun' ||
  (process.env.JS_RUNTIME !== 'node' && isBunUserAgent);

const repoRoot = path.resolve(__dirname, '..');
const searchPaths = [process.cwd(), repoRoot];

const VALUE_FLAGS = new Set([
  '--config',
  '--package',
  '--opt',
  '--grep',
  '-g',
  '--fgrep',
  '-f',
  '--reporter',
  '-R',
  '--reporter-option',
  '--reporter-options',
  '-O',
  '--slow',
  '-s',
  '--timeout',
  '-t',
  '--ui',
  '-u',
  '--require',
  '-r',
  '--file',
  '--ignore',
  '--exclude',
  '--extension',
  '--watch-files',
  '--watch-ignore',
  '--jobs',
  '-j',
  '--node-option',
  '-n',
  '--retries',
  '--global',
  '--globals',
]);

const IGNORED_DIRS = new Set([
  'node_modules',
  '.git',
  'fixtures',
  'testdata',
  'test-fixtures',
]);

const DEFAULT_TEST_DIRS = [
  'build/test',
  'build/cjs/test',
  'build/esm/test',
  'test',
];

const FALLBACK_SOURCE_DIRS = [
  'test',
  'esm/test',
  'system-test',
  'conformance-test',
  'observability-test',
  'dev/test',
  'dev/system-test',
  'dev/conformance',
];

const ONLY_PATTERN = /\b(?:it|describe|context|suite|test|specify)\.only\s*\(/;

function stripCommentsAndStrings(code) {
  return code.replace(
    /\/\*[\s\S]*?\*\/|\/\/.*$|'(?:\\[\s\S]|[^'\\\r\n])*'|"(?:\\[\s\S]|[^"\\\r\n])*"|`(?:\\[\s\S]|[^`\\])*`/gm,
    match => (match.startsWith('//') || match.startsWith('/*') ? ' ' : '""'),
  );
}

function fileHasOnly(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (!ONLY_PATTERN.test(content)) {
      return false;
    }
    return ONLY_PATTERN.test(stripCommentsAndStrings(content));
  } catch {
    return false;
  }
}

function isTestFileName(name) {
  return /\.(?:[cm]?js|[cm]?ts)$/.test(name) && !name.endsWith('.d.ts');
}

function getTestStem(filePath) {
  return path.basename(filePath).replace(/\.[cm]?[jt]s$/, '');
}

function collectFilesFromDir(dirPath, out = []) {
  let entries;
  try {
    entries = fs.readdirSync(dirPath, {withFileTypes: true});
  } catch {
    return out;
  }
  for (const entry of entries) {
    if (IGNORED_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      collectFilesFromDir(fullPath, out);
    } else if (entry.isFile() && isTestFileName(entry.name)) {
      out.push(fullPath);
    }
  }
  return out;
}

function globToRegExp(globPattern) {
  let regexStr = '^';
  for (let i = 0; i < globPattern.length; i++) {
    const ch = globPattern[i];
    if (ch === '*') {
      if (globPattern[i + 1] === '*') {
        if (globPattern[i + 2] === '/') {
          regexStr += '(?:.+/)?';
          i += 2;
        } else {
          regexStr += '.*';
          i += 1;
        }
      } else {
        regexStr += '[^/]*';
      }
    } else if (ch === '?') {
      regexStr += '[^/]';
    } else if (/[.+^${}()|[\]\\]/.test(ch)) {
      regexStr += '\\' + ch;
    } else {
      regexStr += ch;
    }
  }
  regexStr += '$';
  return new RegExp(regexStr);
}

function expandTargetFiles(rawTarget, cwd) {
  const target = rawTarget.replace(/^(['"])(.*)\1$/, '$2');
  const absTarget = path.resolve(cwd, target);
  if (fs.existsSync(absTarget)) {
    const stat = fs.statSync(absTarget);
    if (stat.isFile()) {
      return [absTarget];
    }
    if (stat.isDirectory()) {
      return collectFilesFromDir(absTarget);
    }
  }
  if (/[*?]/.test(target)) {
    const normalized = target.replace(/\\/g, '/');
    const segments = normalized.split('/');
    const firstGlobIdx = segments.findIndex(s => /[*?]/.test(s));
    const baseRel =
      firstGlobIdx > 0 ? segments.slice(0, firstGlobIdx).join('/') : '.';
    const globRemainder = segments.slice(Math.max(0, firstGlobIdx)).join('/');
    const baseDir = path.resolve(cwd, baseRel);
    if (fs.existsSync(baseDir) && fs.statSync(baseDir).isDirectory()) {
      const pattern = globToRegExp(globRemainder);
      if (globRemainder.includes('/') || globRemainder.includes('**')) {
        return collectFilesFromDir(baseDir).filter(filePath => {
          const relPath = path
            .relative(baseDir, filePath)
            .split(path.sep)
            .join('/');
          return pattern.test(relPath);
        });
      }
      return fs
        .readdirSync(baseDir, {withFileTypes: true})
        .filter(
          e => e.isFile() && isTestFileName(e.name) && pattern.test(e.name),
        )
        .map(e => path.join(baseDir, e.name));
    }
  }
  return [];
}

function splitMochaArgs(inputArgs) {
  const optionArgs = [];
  const positionalArgs = [];
  for (let i = 0; i < inputArgs.length; i++) {
    const arg = inputArgs[i];
    if (arg === '--') {
      positionalArgs.push(...inputArgs.slice(i + 1));
      break;
    }
    if (VALUE_FLAGS.has(arg)) {
      optionArgs.push(arg);
      if (i + 1 < inputArgs.length) {
        optionArgs.push(inputArgs[++i]);
      }
    } else if (arg.startsWith('-')) {
      optionArgs.push(arg);
    } else {
      positionalArgs.push(arg);
    }
  }
  return {optionArgs, positionalArgs};
}

function getEffectiveTargets(targets, cwd) {
  if (targets.length > 0) {
    return targets;
  }
  const defaultDir = DEFAULT_TEST_DIRS.find(d =>
    fs.existsSync(path.resolve(cwd, d)),
  );
  return defaultDir ? [defaultDir] : [];
}

function findOnlyFiles(targets, cwd) {
  const effectiveTargets = getEffectiveTargets(targets, cwd);
  const seen = new Set();
  const onlyFiles = [];
  for (const target of effectiveTargets) {
    for (const filePath of expandTargetFiles(target, cwd)) {
      if (seen.has(filePath)) continue;
      seen.add(filePath);
      if (fileHasOnly(filePath)) {
        onlyFiles.push(filePath);
      }
    }
  }
  return onlyFiles;
}

function getCandidateSourceDirs(targets, cwd) {
  const effectiveTargets = getEffectiveTargets(targets, cwd);
  const derived = new Set();
  for (const rawTarget of effectiveTargets) {
    const clean = rawTarget.replace(/^(['"])(.*)\1$/, '$2').replace(/\\/g, '/');
    const nonGlobPrefix = clean
      .split('/')
      .filter(s => !/[*?]/.test(s))
      .join('/');
    const rel = path
      .relative(cwd, path.resolve(cwd, nonGlobPrefix || '.'))
      .split(path.sep)
      .join('/');
    if (/^build\/(?:cjs\/|esm\/)?/.test(rel)) {
      let sub = rel.replace(/^build\/(?:cjs\/|esm\/)?/, '');
      if (/\.[cm]?[jt]s$/.test(sub)) {
        sub = path.posix.dirname(sub);
      }
      if (sub && sub !== '.') {
        derived.add(sub);
        derived.add(path.posix.join('esm', sub));
        derived.add(path.posix.join('dev', sub));
      }
    }
  }
  return derived.size > 0 ? [...derived] : FALLBACK_SOURCE_DIRS;
}

function maybeCompileStaleSourceOnly(targets, onlyFiles, cwd) {
  if (process.env.RUN_TEST_SKIP_COMPILE === 'true') {
    return onlyFiles;
  }
  if (onlyFiles.length > 0 && onlyFiles.every(f => /\.[cm]?ts$/.test(f))) {
    return onlyFiles;
  }
  const sourceDirs = getCandidateSourceDirs(targets, cwd);
  let hasTsFiles = false;
  const sourceOnlyFiles = [];
  for (const dir of sourceDirs) {
    const absDir = path.resolve(cwd, dir);
    if (!fs.existsSync(absDir)) continue;
    for (const filePath of collectFilesFromDir(absDir)) {
      if (/\.[cm]?ts$/.test(filePath)) {
        hasTsFiles = true;
        if (fileHasOnly(filePath)) {
          sourceOnlyFiles.push(filePath);
        }
      }
    }
  }
  if (!hasTsFiles || (sourceOnlyFiles.length === 0 && onlyFiles.length === 0)) {
    return onlyFiles;
  }
  const onlyStems = onlyFiles.map(getTestStem).sort().join('\0');
  const sourceOnlyStems = sourceOnlyFiles.map(getTestStem).sort().join('\0');
  const maxSourceOnlyMtime =
    sourceOnlyFiles.length > 0
      ? Math.max(...sourceOnlyFiles.map(f => fs.statSync(f).mtimeMs))
      : 0;
  const minTargetMtime =
    onlyFiles.length > 0
      ? Math.min(...onlyFiles.map(f => fs.statSync(f).mtimeMs))
      : 0;
  const isInSync =
    onlyStems === sourceOnlyStems &&
    (onlyFiles.length === 0 || minTargetMtime >= maxSourceOnlyMtime);
  if (isInSync) {
    return onlyFiles;
  }
  const pkgJsonPath = path.join(cwd, 'package.json');
  if (!fs.existsSync(pkgJsonPath)) {
    return onlyFiles;
  }
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
    if (pkg.scripts && pkg.scripts.compile) {
      const compileRes = spawnSync('npm', ['run', 'compile'], {
        cwd,
        stdio: 'inherit',
        env: {...process.env, RUN_TEST_SKIP_COMPILE: 'true'},
      });
      if (compileRes.status === 0) {
        return findOnlyFiles(targets, cwd);
      }
    }
  } catch {
    // Ignore compilation fallback errors and proceed with existing files.
  }
  return onlyFiles;
}

function resolveTestArgs(inputArgs, cwd = process.cwd()) {
  const {optionArgs, positionalArgs} = splitMochaArgs(inputArgs);
  let onlyFiles = findOnlyFiles(positionalArgs, cwd);
  onlyFiles = maybeCompileStaleSourceOnly(positionalArgs, onlyFiles, cwd);
  if (onlyFiles.length === 0) {
    return {args: [...inputArgs], hasOnly: false, onlyFiles: []};
  }
  const filteredOptions = optionArgs.filter(
    a => a !== '--parallel' && a !== '-p',
  );
  if (!filteredOptions.includes('--no-parallel')) {
    filteredOptions.push('--no-parallel');
  }
  const relOnlyFiles = onlyFiles.map(f => path.relative(cwd, f) || f);
  return {
    args: [...filteredOptions, ...relOnlyFiles],
    hasOnly: true,
    onlyFiles: relOnlyFiles,
  };
}

function resolveBin(pkgBin) {
  for (const base of searchPaths) {
    const candidate = path.join(base, 'node_modules', pkgBin);
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }
  try {
    return require.resolve(pkgBin, {paths: searchPaths});
  } catch (err) {
    const pkgName = pkgBin.split('/')[0];
    const pnpmDir = path.join(repoRoot, 'node_modules', '.pnpm');
    if (fs.existsSync(pnpmDir)) {
      const entry = fs
        .readdirSync(pnpmDir)
        .find(d => d.startsWith(`${pkgName}@`));
      if (entry) {
        const pnpmCandidate = path.join(pnpmDir, entry, 'node_modules', pkgBin);
        if (fs.existsSync(pnpmCandidate)) {
          return pnpmCandidate;
        }
      }
    }
    throw err;
  }
}

if (require.main === module) {
  // Exit 0 if a package has no unit tests (e.g., single-service packages where
  // the service is marked deprecated and no test directory was generated).
  if (
    (args.includes('build/test') &&
      !fs.existsSync('build/test') &&
      !fs.existsSync('test') &&
      !fs.existsSync('dev/test')) ||
    (args.includes('build/esm/test') &&
      !fs.existsSync('build/esm/test') &&
      !fs.existsSync('esm/test') &&
      !fs.existsSync('test')) ||
    (args.includes('build/cjs/test') &&
      !fs.existsSync('build/cjs/test') &&
      !fs.existsSync('esm/test') &&
      !fs.existsSync('test'))
  ) {
    process.exit(0);
  }

  if (wantsBunRuntime) {
    process.env.MOCHA_PARALLEL = 'false';
    Object.assign(process.env, shimEnvVars);

    // If Bun was requested (via JS_RUNTIME=bun or `bun run test`) but this
    // script was launched via Node.js, re-exec under the `bun` binary.
    if (!isBunRuntime) {
      const res = spawnSync('bun', [__filename, ...rawArgs], {
        stdio: 'inherit',
        env: {
          ...process.env,
          MOCHA_PARALLEL: 'false',
          ...shimEnvVars,
        },
      });
      if (res.error) {
        console.error('[run-test] Failed to launch bun:', res.error.message);
        process.exit(1);
      }
      process.exit(res.status ?? 1);
    }

    const {args: resolvedArgs} = resolveTestArgs(args);

    // Running inside Bun: preload the proxyquire shim and also pass --require
    // so if mocha/bin/mocha.js spawns a child `lib/cli/cli.js` for node flags
    // (--enable-source-maps, --throw-deprecation), the child loads the shim too.
    const shimPath = path.resolve(__dirname, 'proxyquire-bun-shim.cjs');
    require(shimPath);

    const mochaBin = resolveBin('mocha/bin/mocha.js');
    const mochaArgs = resolvedArgs.filter(
      a => a !== '--parallel' && a !== '-p',
    );
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
    // Running inside Node.js: preserve `c8 mocha <args>` behavior, but if any
    // test file contains `.only`, disable parallel mode and run only the
    // exclusive test file(s) so `.only` is respected without throwing
    // "`.only` is not supported in parallel mode".
    const {args: resolvedArgs, hasOnly} = resolveTestArgs(args);
    if (hasOnly) {
      process.env.MOCHA_PARALLEL = 'false';
    }
    const mochaBin = resolveBin('mocha/bin/mocha.js');
    let cmdArgs;
    if (noC8) {
      cmdArgs = [mochaBin, ...resolvedArgs];
    } else {
      const c8Bin = resolveBin('c8/bin/c8.js');
      cmdArgs = [c8Bin, mochaBin, ...resolvedArgs];
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
}

module.exports = {
  stripCommentsAndStrings,
  fileHasOnly,
  findOnlyFiles,
  expandTargetFiles,
  resolveTestArgs,
  splitMochaArgs,
};
