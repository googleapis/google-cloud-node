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
//   shim (`bin/proxyquire-bun-shim.cjs`) when `--proxyquire-shim` is passed,
//   and loads `mocha/bin/mocha.js` directly in-process so `#!/usr/bin/env node`
//   shebangs never switch back to Node.js.
'use strict';

const {spawnSync} = require('child_process');
const path = require('path');
const fs = require('fs');

const rawArgs = process.argv.slice(2);
const noC8 = rawArgs.includes('--no-c8');

const SHIM_FLAGS = [
  {
    flag: '--proxyquire-shim',
    envIn: 'BUN_PROXYQUIRE_SHIM',
    envOut: 'BUN_ENABLE_PROXYQUIRE_SHIM',
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

const isBunRuntime = typeof Bun !== 'undefined';
const isBunUserAgent = /^bun\//i.test(process.env.npm_config_user_agent || '');
const wantsBunRuntime =
  isBunRuntime ||
  process.env.JS_RUNTIME === 'bun' ||
  (process.env.JS_RUNTIME !== 'node' && isBunUserAgent);

const repoRoot = path.resolve(__dirname, '..');

function findPackageRoot(startPath) {
  let curr = path.resolve(startPath);
  try {
    if (fs.existsSync(curr) && fs.statSync(curr).isFile()) {
      curr = path.dirname(curr);
    }
  } catch {
    curr = path.dirname(curr);
  }
  while (curr.startsWith(repoRoot) && curr !== repoRoot) {
    if (fs.existsSync(path.join(curr, 'package.json'))) {
      return curr;
    }
    const parent = path.dirname(curr);
    if (parent === curr) break;
    curr = parent;
  }
  return null;
}

const targetPkgRoots = [];
for (const a of args) {
  if (!a.startsWith('-')) {
    const clean = a.replace(/^(['"])(.*)\1$/, '$2');
    const nonGlob = clean
      .split(/[/\\]/)
      .filter(s => !/[*?]/.test(s))
      .join(path.sep);
    if (nonGlob) {
      const pkgRoot = findPackageRoot(path.resolve(process.cwd(), nonGlob));
      if (pkgRoot && !targetPkgRoots.includes(pkgRoot)) {
        targetPkgRoots.push(pkgRoot);
      }
    }
  }
}

const searchPaths = [...new Set([...targetPkgRoots, process.cwd(), repoRoot])];

const WORKSPACE_LINK_PACKAGES = [
  {
    name: 'gaxios',
    relDir: 'core/packages/gaxios',
    entryPoint: 'build/cjs/src/index.js',
  },
  {
    name: 'teeny-request',
    relDir: 'core/packages/teeny-request',
    entryPoint: 'build/src/index.js',
  },
];

function linkTargetToWorkspacePackage(
  targetPath,
  workspacePkgDir,
  realWorkspacePkgDir,
  major,
) {
  try {
    fs.lstatSync(targetPath);
  } catch {
    return;
  }
  try {
    if (fs.realpathSync(targetPath) === realWorkspacePkgDir) {
      return;
    }
    if (major) {
      const targetPkgJson = JSON.parse(
        fs.readFileSync(path.join(targetPath, 'package.json'), 'utf8'),
      );
      const targetMajor = String(targetPkgJson.version || '').split('.')[0];
      if (targetMajor && targetMajor !== major) {
        return;
      }
    }
  } catch {
    // Broken symlink or unreadable package.json; proceed to replace it.
  }
  try {
    fs.rmSync(targetPath, {recursive: true, force: true});
    fs.symlinkSync(workspacePkgDir, targetPath, 'junction');
  } catch {
    // Ignore permission or concurrent replacement errors.
  }
}

// Ensures in-repo workspace packages (`gaxios`, `teeny-request`) are linked in
// `node_modules` even when `release-please` bumps their `package.json` version
// ahead of the version recorded in `pnpm-lock.yaml` (which causes `pnpm install
// --config.prefer-workspace-packages=true` to keep the registry tarball).
function ensureWorkspacePackagesLinked(
  rootDir = repoRoot,
  pkgSearchPaths = searchPaths,
) {
  const pnpmDir = path.join(rootDir, 'node_modules', '.pnpm');
  let pnpmEntries = [];
  try {
    pnpmEntries = fs.readdirSync(pnpmDir);
  } catch {
    // Ignore when .pnpm virtual store directory is absent.
  }

  for (const {name, relDir, entryPoint} of WORKSPACE_LINK_PACKAGES) {
    const workspacePkgDir = path.join(rootDir, relDir);
    if (!fs.existsSync(path.join(workspacePkgDir, entryPoint))) {
      continue;
    }
    let realWorkspacePkgDir;
    let major;
    try {
      realWorkspacePkgDir = fs.realpathSync(workspacePkgDir);
      const pkgJson = JSON.parse(
        fs.readFileSync(path.join(workspacePkgDir, 'package.json'), 'utf8'),
      );
      major = String(pkgJson.version || '').split('.')[0];
    } catch {
      continue;
    }

    if (major) {
      const prefix = `${name}@${major}.`;
      for (const entry of pnpmEntries) {
        if (entry.startsWith(prefix)) {
          linkTargetToWorkspacePackage(
            path.join(pnpmDir, entry, 'node_modules', name),
            workspacePkgDir,
            realWorkspacePkgDir,
            major,
          );
        }
      }
    }

    for (const base of pkgSearchPaths) {
      try {
        if (fs.realpathSync(base) === realWorkspacePkgDir) {
          continue;
        }
      } catch {
        continue;
      }
      linkTargetToWorkspacePackage(
        path.join(base, 'node_modules', name),
        workspacePkgDir,
        realWorkspacePkgDir,
        major,
      );
    }
  }
}

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
    /\/\*[\s\S]*?\*\/|\/\/.*$|'(?:\\[\s\S]|[^'\\\r\n])*'|"(?:\\[\s\S]|[^"\\\r\n])*"|`(?:\\[\s\S]|[^`\\])*`|\/(?![/*])(?:\\[\s\S]|\[(?:\\[\s\S]|[^\]\\\r\n])*\]|[^/\\\r\n])+\/[dgimsuvy]*/gm,
    match =>
      match.startsWith('//') || match.startsWith('/*')
        ? ' '
        : match.startsWith('/')
          ? '//'
          : '""',
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

function getRelativeTestStem(filePath, cwd) {
  const rel = path
    .relative(cwd, filePath)
    .split(path.sep)
    .join('/')
    .replace(/^build\/(?:cjs\/|esm\/)?/, '')
    .replace(/^(?:esm|cjs|dev)\//, '');
  return rel.replace(/\.[cm]?[jt]s$/, '');
}

function collectFilesFromDir(dirPath, out = []) {
  let entries;
  try {
    entries = fs
      .readdirSync(dirPath, {withFileTypes: true})
      .sort((a, b) => a.name.localeCompare(b.name));
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
        .sort((a, b) => a.name.localeCompare(b.name))
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
  const onlyStems = [
    ...new Set(onlyFiles.map(f => getRelativeTestStem(f, cwd))),
  ]
    .sort()
    .join('\0');
  const sourceOnlyStems = [
    ...new Set(sourceOnlyFiles.map(f => getRelativeTestStem(f, cwd))),
  ]
    .sort()
    .join('\0');
  const maxSourceOnlyMtime = sourceOnlyFiles.reduce(
    (max, f) => Math.max(max, fs.statSync(f).mtimeMs),
    0,
  );
  const minTargetMtime =
    onlyFiles.length > 0
      ? onlyFiles.reduce(
          (min, f) => Math.min(min, fs.statSync(f).mtimeMs),
          Infinity,
        )
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
      const ua = process.env.npm_config_user_agent || '';
      const pm = /^pnpm\//i.test(ua)
        ? 'pnpm'
        : /^bun\//i.test(ua)
          ? 'bun'
          : 'npm';
      const compileRes = spawnSync(pm, ['run', 'compile'], {
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

function isParallelFlag(arg) {
  return (
    arg === '--parallel' ||
    arg === '-p' ||
    /^--parallel=/.test(arg) ||
    /^-p=/.test(arg)
  );
}

function resolveTestArgs(inputArgs, cwd = process.cwd()) {
  const {optionArgs, positionalArgs} = splitMochaArgs(inputArgs);
  let onlyFiles = findOnlyFiles(positionalArgs, cwd);
  onlyFiles = maybeCompileStaleSourceOnly(positionalArgs, onlyFiles, cwd);
  if (onlyFiles.length === 0) {
    return {args: [...inputArgs], hasOnly: false, onlyFiles: []};
  }
  const filteredOptions = optionArgs.filter(a => !isParallelFlag(a));
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
    const parts = pkgBin.split('/');
    const pnpmPrefix = pkgBin.startsWith('@')
      ? `${parts[0]}+${parts[1]}@`
      : `${parts[0]}@`;
    const pnpmDir = path.join(repoRoot, 'node_modules', '.pnpm');
    try {
      const entry = fs.readdirSync(pnpmDir).find(d => d.startsWith(pnpmPrefix));
      if (entry) {
        const pnpmCandidate = path.join(pnpmDir, entry, 'node_modules', pkgBin);
        if (fs.existsSync(pnpmCandidate)) {
          return pnpmCandidate;
        }
      }
    } catch {
      // Ignore pnpm store scan errors and rethrow original resolution error.
    }
    throw err;
  }
}

if (require.main === module) {
  // Exit 0 if a package has no unit tests (e.g., single-service packages where
  // the service is marked deprecated and no test directory was generated). Every
  // requested compiled test directory and all source test directories must be
  // absent so running `pnpm test` before `pnpm run compile` (or with another
  // non-empty target directory) still runs/fails as expected.
  const normalizedArgs = new Set(
    args.map(a => a.replace(/^\.\//, '').replace(/\/+$/, '')),
  );
  const hasSourceTests = ['test', 'esm/test', 'cjs/test', 'dev/test'].some(
    dir => fs.existsSync(dir),
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

  ensureWorkspacePackagesLinked();

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

    const mochaBin = resolveBin('mocha/bin/mocha.js');
    const mochaArgs = resolvedArgs.filter(a => !isParallelFlag(a));
    if (!mochaArgs.includes('--no-parallel')) {
      mochaArgs.unshift('--no-parallel');
    }

    // Only preload the proxyquire shim when `--proxyquire-shim` is requested.
    if (shimEnvVars.BUN_ENABLE_PROXYQUIRE_SHIM === 'true') {
      const shimPath = path.resolve(__dirname, 'proxyquire-bun-shim.cjs');
      require(shimPath);
      if (!mochaArgs.includes(shimPath)) {
        mochaArgs.unshift('--require', shimPath);
      }
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
  resolveBin,
  ensureWorkspacePackagesLinked,
};
