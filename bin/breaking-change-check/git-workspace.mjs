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
import fs from 'node:fs';
import path from 'node:path';
import {promisify} from 'node:util';
import {DEFAULT_REPO_ROOT, toPosix, ts} from './dts-normalizer.mjs';

const execFileAsync = promisify(execFile);

const IGNORED_PATH_SEGMENTS = new Set([
  'node_modules',
  'build',
  'dist',
  'esm',
  'test',
  'tests',
  'system-test',
  'samples',
  'fixtures',
  'test-fixtures',
  'baselines',
  'baselines-esm',
  'generated',
  '.coverage',
  'coverage',
  '.nyc_output',
  'protos',
  'benchmark',
  'benchmarks',
  'owl-bot-staging',
  '.kokoro',
]);

/**
 * Returns true if the file path is a test, sample, build artifact, or non-public source file.
 */
export function isIgnoredSourceFile(filePath) {
  const normalized = filePath.split(/[\\/]/);
  if (normalized.some(seg => IGNORED_PATH_SEGMENTS.has(seg))) {
    return true;
  }
  const base = path.basename(filePath);
  if (
    /\.(test|spec)\.(c|m)?ts$/.test(base) ||
    base === 'gulpfile.ts' ||
    base === 'webpack.config.ts'
  ) {
    return true;
  }
  return false;
}

export function runGit(args, cwd = DEFAULT_REPO_ROOT, options = {}) {
  return execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
    maxBuffer: 50 * 1024 * 1024,
    ...options,
  });
}

function isFatalSpawnError(err) {
  if (!err || typeof err !== 'object') return false;
  return (
    err.code === 'ENOENT' ||
    err.code === 'ENOBUFS' ||
    err.code === 'ENOMEM' ||
    err.code === 'ETIMEDOUT' ||
    err.code === 'EACCES'
  );
}

export function createGitReader(repoRoot) {
  const fileCache = new Map();
  const treeCache = new Map();

  function getFileAtRev(rev, repoRelPath) {
    const normPath = repoRelPath.replace(/\\/g, '/').replace(/^\.\//, '');
    const key = `${rev}:${normPath}`;
    if (fileCache.has(key)) {
      return fileCache.get(key);
    }
    let val;
    try {
      val = runGit(['show', key], repoRoot);
    } catch (err) {
      if (isFatalSpawnError(err)) {
        throw err;
      }
      val = undefined;
    }
    fileCache.set(key, val);
    return val;
  }

  function getSubtreeAtRev(rev, repoRelDir) {
    const normDir = repoRelDir
      .replace(/\\/g, '/')
      .replace(/^\.\//, '')
      .replace(/\/+$/, '');
    const key = `${rev}:${normDir}`;
    if (treeCache.has(key)) {
      return treeCache.get(key);
    }
    const files = new Set();
    const dirs = new Set();
    if (normDir) {
      dirs.add(normDir);
    }
    try {
      const args = ['ls-tree', '-r', '-z', '--name-only', rev];
      if (normDir) {
        args.push('--', normDir);
      }
      const out = runGit(args, repoRoot);
      for (const entry of out.split('\0')) {
        if (!entry) continue;
        files.add(entry);
        let parent = path.posix.dirname(entry);
        while (parent && parent !== '.' && !dirs.has(parent)) {
          dirs.add(parent);
          const next = path.posix.dirname(parent);
          if (next === parent) break;
          parent = next;
        }
      }
    } catch (err) {
      if (isFatalSpawnError(err)) {
        throw err;
      }
    }
    const result = {files, dirs};
    treeCache.set(key, result);
    return result;
  }

  return {getFileAtRev, getSubtreeAtRev};
}

export function parseJsonSafe(text) {
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function extractFlatTargets(val, out = []) {
  if (!val) return out;
  if (typeof val === 'string') {
    out.push(val);
    return out;
  }
  if (Array.isArray(val)) {
    for (const item of val) extractFlatTargets(item, out);
    return out;
  }
  if (typeof val === 'object') {
    if (typeof val.types === 'string') {
      out.push(val.types);
      return out;
    }
    if (val.types && typeof val.types === 'object') {
      extractFlatTargets(val.types, out);
    }
    for (const k of ['import', 'require', 'default', 'node', 'module']) {
      if (val[k]) extractFlatTargets(val[k], out);
    }
  }
  return out;
}

function analyzeExportEntryConditions(val) {
  const lane = {
    importTargets: [],
    requireTargets: [],
    defaultTargets: [],
    allTargets: [],
    supportsImport: false,
    supportsRequire: false,
    blockedImport: false,
    blockedRequire: false,
    sawRuntimeCondition: false,
  };

  const visit = (node, mode) => {
    if (!node) return;
    if (typeof node === 'string') {
      if (mode === 'import') {
        lane.importTargets.push(node);
        if (!lane.blockedImport) lane.supportsImport = true;
        lane.sawRuntimeCondition = true;
      } else if (mode === 'require') {
        lane.requireTargets.push(node);
        if (!lane.blockedRequire) lane.supportsRequire = true;
        lane.sawRuntimeCondition = true;
      } else if (mode === 'types-import') {
        lane.importTargets.push(node);
      } else if (mode === 'types-require') {
        lane.requireTargets.push(node);
      } else if (mode === 'types') {
        lane.defaultTargets.push(node);
      } else {
        lane.defaultTargets.push(node);
        if (!lane.blockedImport) lane.supportsImport = true;
        if (!lane.blockedRequire) lane.supportsRequire = true;
        lane.sawRuntimeCondition = true;
      }
      return;
    }
    if (Array.isArray(node)) {
      for (const item of node) visit(item, mode);
      return;
    }
    if (typeof node === 'object') {
      const hasImport = Object.prototype.hasOwnProperty.call(node, 'import');
      const hasRequire = Object.prototype.hasOwnProperty.call(node, 'require');
      const hasDefault = Object.prototype.hasOwnProperty.call(node, 'default');
      const hasNode = Object.prototype.hasOwnProperty.call(node, 'node');
      const hasModule = Object.prototype.hasOwnProperty.call(node, 'module');
      const hasTypes = Object.prototype.hasOwnProperty.call(node, 'types');
      const isPureTypesObj =
        hasTypes && Object.keys(node).every(k => k === 'types');

      if (hasTypes) {
        if (typeof node.types === 'string') {
          if (mode === 'import' || mode === 'types-import') {
            lane.importTargets.push(node.types);
            if (mode === 'import' && isPureTypesObj && !lane.blockedImport) {
              lane.supportsImport = true;
            }
          } else if (mode === 'require' || mode === 'types-require') {
            lane.requireTargets.push(node.types);
            if (mode === 'require' && isPureTypesObj && !lane.blockedRequire) {
              lane.supportsRequire = true;
            }
          } else {
            lane.defaultTargets.push(node.types);
          }
        } else if (node.types && typeof node.types === 'object') {
          if (node.types.import) visit(node.types.import, 'types-import');
          if (node.types.require) visit(node.types.require, 'types-require');
          if (node.types.default) visit(node.types.default, 'types');
        }
      }
      if (hasImport) {
        lane.sawRuntimeCondition = true;
        if (node.import === null && mode === 'any') lane.blockedImport = true;
        else visit(node.import, 'import');
      }
      if (hasModule && !hasImport) {
        lane.sawRuntimeCondition = true;
        if (node.module === null && mode === 'any') lane.blockedImport = true;
        else visit(node.module, 'import');
      }
      if (hasRequire) {
        lane.sawRuntimeCondition = true;
        if (node.require === null && mode === 'any') lane.blockedRequire = true;
        else visit(node.require, 'require');
      }
      if (hasNode) {
        visit(node.node, mode);
      }
      if (hasDefault) {
        visit(node.default, mode);
      }
    }
  };

  visit(val, 'any');
  if (!lane.sawRuntimeCondition && lane.defaultTargets.length > 0) {
    // Pure `{ types: "./foo.d.ts" }` entry with no JS condition keys
    lane.supportsImport = true;
    lane.supportsRequire = true;
  }
  for (const t of [
    ...lane.importTargets,
    ...lane.requireTargets,
    ...lane.defaultTargets,
  ]) {
    if (!lane.allTargets.includes(t)) {
      lane.allTargets.push(t);
    }
  }
  if (lane.allTargets.length === 0) {
    for (const t of extractFlatTargets(val)) {
      if (!lane.allTargets.includes(t)) lane.allTargets.push(t);
    }
  }
  return lane;
}

export function collectExportsSubpathLanes(exportsField) {
  const map = new Map();
  if (!exportsField) return map;
  if (typeof exportsField === 'string' || Array.isArray(exportsField)) {
    map.set('.', analyzeExportEntryConditions(exportsField));
    return map;
  }
  if (typeof exportsField === 'object') {
    const keys = Object.keys(exportsField);
    const isSubpath = keys.some(k => k === '.' || k.startsWith('./'));
    if (isSubpath) {
      for (const [k, v] of Object.entries(exportsField)) {
        if (k === './package.json') continue;
        if (v === null) continue;
        map.set(k, analyzeExportEntryConditions(v));
      }
    } else {
      map.set('.', analyzeExportEntryConditions(exportsField));
    }
  }
  return map;
}

function getCandidateExtensionsForTarget(target) {
  if (/\.d\.mts$|\.mjs$|\.mts$/.test(target)) {
    return ['.mts', '.d.mts', '.ts', '.d.ts', '.cts', '.d.cts'];
  }
  if (/\.d\.cts$|\.cjs$|\.cts$/.test(target)) {
    return ['.cts', '.d.cts', '.ts', '.d.ts', '.mts', '.d.mts'];
  }
  return ['.ts', '.d.ts', '.mts', '.d.mts', '.cts', '.d.cts'];
}

export function mapTargetToPackageSource(
  pkgDir,
  target,
  parsedTs,
  existsCheck,
) {
  if (
    !target ||
    typeof target !== 'string' ||
    target.endsWith('.json') ||
    target.includes('*')
  ) {
    return null;
  }
  const clean = target.replace(/^\.\//, '');
  if (
    /\.(c|m)?ts$/.test(clean) &&
    !clean.startsWith('build/') &&
    !clean.startsWith('dist/')
  ) {
    const direct = path.resolve(pkgDir, clean);
    if (existsCheck(direct)) return direct;
  }

  const opts = (parsedTs && parsedTs.options) || {};
  const outDir = opts.outDir
    ? path.resolve(pkgDir, opts.outDir)
    : path.join(pkgDir, 'build');
  const rootDir = opts.rootDir ? path.resolve(pkgDir, opts.rootDir) : null;

  const stems = [];
  const absTarget = path.resolve(pkgDir, clean);
  if (absTarget.startsWith(outDir + path.sep)) {
    stems.push(path.relative(outDir, absTarget));
  }
  stems.push(
    clean.replace(/^(build|dist)\/(cjs|esm)\//, ''),
    clean.replace(/^(build|dist)\//, ''),
    clean,
  );

  const candidateRoots = [
    ...(rootDir ? [rootDir] : []),
    pkgDir,
    path.join(pkgDir, 'src'),
    path.join(pkgDir, 'dev'),
    path.join(pkgDir, 'dev', 'src'),
    path.join(pkgDir, 'typescript'),
    path.join(pkgDir, 'typescript', 'src'),
  ];
  const candidateExts = getCandidateExtensionsForTarget(clean);

  for (const stem of stems) {
    const noExt = stem.replace(/\.d\.(c|m)?ts$|\.(c|m)?[jt]s$/, '');
    for (const root of candidateRoots) {
      for (const ext of candidateExts) {
        const cand = path.resolve(root, noExt + ext);
        if (
          cand.startsWith(pkgDir + path.sep) &&
          !isIgnoredSourceFile(path.relative(pkgDir, cand)) &&
          existsCheck(cand)
        ) {
          return cand;
        }
      }
    }
  }
  return null;
}

const SKIP_FILES_SUBDIR = new Set([
  'src',
  'dev',
  'types',
  'typings',
  'typescript',
  'build',
  'dist',
  'esm',
  'cjs',
  'lib',
  'bin',
  'scripts',
  'protos',
  'test',
  'tests',
  'samples',
  'system-test',
  'node_modules',
]);

export function resolvePackageEntrypoints(
  pkgDir,
  pkgJson,
  parsedTs,
  existsCheck,
  readRelFn = null,
) {
  if (!pkgJson || pkgJson.private === true) {
    return {subpaths: new Map(), subdirSubpaths: new Map(), entryFiles: []};
  }
  const subpaths = collectExportsSubpathLanes(pkgJson.exports);
  const subdirSubpaths = new Map();
  const rawTargets = [];

  if (pkgJson.exports) {
    for (const lane of subpaths.values()) {
      rawTargets.push(...lane.allTargets);
    }
  } else {
    const primary =
      pkgJson.types || pkgJson.typings || pkgJson.main || 'src/index.ts';
    rawTargets.push(primary);
    // Support legacy published sub-directory package.json entrypoints (e.g. `"files": ["pipelines"]`
    // where `pipelines/package.json` declares `"typings": "../types/pipelines.d.ts"`).
    if (readRelFn && Array.isArray(pkgJson.files)) {
      for (const fEntry of pkgJson.files) {
        if (typeof fEntry !== 'string') continue;
        const cleanDir = fEntry.replace(/^\.\//, '').replace(/\/+$/, '');
        if (
          !cleanDir ||
          cleanDir.startsWith('!') ||
          cleanDir.includes('*') ||
          cleanDir.includes('/') ||
          cleanDir.includes('.') ||
          SKIP_FILES_SUBDIR.has(cleanDir)
        ) {
          continue;
        }
        const subPj = parseJsonSafe(readRelFn(`${cleanDir}/package.json`));
        if (!subPj) continue;
        const subTarget = subPj.types || subPj.typings || subPj.main;
        if (typeof subTarget === 'string' && subTarget) {
          const joined = path.posix.normalize(
            path.posix.join(cleanDir, subTarget),
          );
          if (!joined.startsWith('..')) {
            rawTargets.push(joined);
            subdirSubpaths.set(`./${cleanDir}`, joined);
          }
        }
      }
    }
  }

  const entryFiles = [];
  const seen = new Set();
  for (const t of rawTargets) {
    const src = mapTargetToPackageSource(pkgDir, t, parsedTs, existsCheck);
    if (src && !seen.has(src)) {
      seen.add(src);
      entryFiles.push(src);
    }
  }
  return {subpaths, subdirSubpaths, entryFiles};
}

export function parsePkgTsconfigAtRev(
  pkgDir,
  relPkgDir,
  absRepoRoot,
  rev,
  reader,
) {
  const defaultParsed = {
    options: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.CommonJS,
      strict: true,
      esModuleInterop: true,
      skipLibCheck: true,
    },
  };
  const {getFileAtRev} = reader;

  const isInsideRepoNonNodeModules = absPath => {
    const resolved = path.resolve(absPath);
    if (resolved.includes(`${path.sep}node_modules${path.sep}`)) return false;
    return (
      resolved === absRepoRoot || resolved.startsWith(absRepoRoot + path.sep)
    );
  };

  const configHost = {
    useCaseSensitiveFileNames: ts.sys.useCaseSensitiveFileNames,
    readDirectory: () => [],
    fileExists(filePath) {
      const resolved = path.resolve(filePath);
      if (rev !== null && isInsideRepoNonNodeModules(resolved)) {
        const repoRel = toPosix(path.relative(absRepoRoot, resolved));
        return getFileAtRev(rev, repoRel) !== undefined;
      }
      return ts.sys.fileExists(resolved);
    },
    readFile(filePath) {
      const resolved = path.resolve(filePath);
      if (rev !== null && isInsideRepoNonNodeModules(resolved)) {
        const repoRel = toPosix(path.relative(absRepoRoot, resolved));
        return getFileAtRev(rev, repoRel);
      }
      return ts.sys.readFile(resolved);
    },
  };

  const configPath = path.join(pkgDir, 'tsconfig.json');
  if (!configHost.fileExists(configPath)) {
    return defaultParsed;
  }
  const cf = ts.readConfigFile(configPath, p => configHost.readFile(p));
  if (!cf.config) {
    return defaultParsed;
  }
  return ts.parseJsonConfigFileContent(cf.config, configHost, pkgDir);
}

function pkgJsonHasPublicTsEntry(rawPjText) {
  const pj = parseJsonSafe(rawPjText);
  if (!pj || pj.private === true) return false;
  if (typeof pj.types === 'string' || typeof pj.typings === 'string') {
    return true;
  }
  if (pj.exports) {
    const s = JSON.stringify(pj.exports);
    if (/\.d\.(c|m)?ts"|"types"|\.(c|m)?ts"/.test(s)) {
      return true;
    }
  }
  return false;
}

function findPackageDir(
  repoRoot,
  repoRelFile,
  getFileAtRev,
  baseRev,
  headRev,
  cache,
) {
  let currentDir = path.resolve(repoRoot, path.dirname(repoRelFile));
  const visited = [];

  const isTsPackageAt = absDir => {
    const relDir = toPosix(path.relative(repoRoot, absDir));
    if (
      /(^|\/)(baselines|baselines-esm|templates|fixtures|test-fixtures)(\/|$)/.test(
        relDir,
      )
    ) {
      return false;
    }
    const pjRel = relDir ? `${relDir}/package.json` : 'package.json';
    const tcRel = relDir ? `${relDir}/tsconfig.json` : 'tsconfig.json';

    const headPj =
      headRev === null
        ? fs.existsSync(path.join(absDir, 'package.json'))
          ? fs.readFileSync(path.join(absDir, 'package.json'), 'utf8')
          : undefined
        : getFileAtRev(headRev, pjRel);
    const headTcExists =
      headRev === null
        ? fs.existsSync(path.join(absDir, 'tsconfig.json'))
        : getFileAtRev(headRev, tcRel) !== undefined;
    if (
      headPj !== undefined &&
      (headTcExists || pkgJsonHasPublicTsEntry(headPj))
    ) {
      return true;
    }

    const basePj = getFileAtRev(baseRev, pjRel);
    const baseTcExists = getFileAtRev(baseRev, tcRel) !== undefined;
    return (
      basePj !== undefined && (baseTcExists || pkgJsonHasPublicTsEntry(basePj))
    );
  };

  while (
    currentDir === repoRoot ||
    currentDir.startsWith(`${repoRoot}${path.sep}`)
  ) {
    if (cache.has(currentDir)) {
      const cached = cache.get(currentDir);
      for (const d of visited) cache.set(d, cached);
      return cached;
    }
    visited.push(currentDir);
    if (currentDir !== repoRoot && isTsPackageAt(currentDir)) {
      for (const d of visited) cache.set(d, currentDir);
      return currentDir;
    }
    const parent = path.dirname(currentDir);
    if (parent === currentDir) break;
    currentDir = parent;
  }
  for (const d of visited) cache.set(d, null);
  return null;
}

/**
 * Resolves the git diff range and base/head revisions to compare.
 */
export function resolveGitDiffRange(isStrict, repoRoot = DEFAULT_REPO_ROOT) {
  if (isStrict) {
    const rawDiffArg = (process.env.GIT_DIFF_ARG || '').trim();
    if (!rawDiffArg) {
      throw new Error(
        'Strict mode is enabled, but GIT_DIFF_ARG environment variable was not provided.',
      );
    }
    const rawArgs = rawDiffArg.split(/\s+/);
    const dashDashIndex = rawArgs.indexOf('--');
    const revArgs =
      dashDashIndex === -1 ? rawArgs : rawArgs.slice(0, dashDashIndex);
    const pathspecArgs =
      dashDashIndex === -1 ? [] : rawArgs.slice(dashDashIndex + 1);
    if (revArgs.length === 0 || revArgs.some(arg => arg.startsWith('-'))) {
      throw new Error(`Invalid git revision argument: ${revArgs.join(' ')}`);
    }
    if (
      revArgs.length === 1 &&
      revArgs[0] !== 'HEAD' &&
      !revArgs[0].includes('..')
    ) {
      revArgs[0] = `${revArgs[0]}...HEAD`;
    }
    return parseRevArgs(revArgs, pathspecArgs, repoRoot);
  }

  const base = (process.env.GITHUB_BASE_REF || '').trim() || 'main';
  const refsToTry = [
    `${base}...HEAD`,
    `upstream/${base}...HEAD`,
    `origin/${base}...HEAD`,
    'FETCH_HEAD...HEAD',
    'HEAD~1...HEAD',
    'HEAD^...HEAD',
    'HEAD',
  ];

  for (const ref of refsToTry) {
    try {
      const parsed = parseRevArgs([ref], [], repoRoot);
      runGit(['rev-parse', '--verify', `${parsed.baseRev}^{commit}`], repoRoot);
      return parsed;
    } catch {
      // Try next fallback.
    }
  }
  throw new Error('Could not resolve a valid git base revision to compare.');
}

function parseRevArgs(
  revArgs,
  pathspecArgs = [],
  repoRoot = DEFAULT_REPO_ROOT,
) {
  if (revArgs.length === 0 || revArgs.some(arg => arg.startsWith('-'))) {
    throw new Error(`Invalid git revision argument: ${revArgs.join(' ')}`);
  }
  if (revArgs.length === 1) {
    const spec = revArgs[0];
    if (spec.includes('...')) {
      const [left, right] = spec.split('...');
      const headRev = right || 'HEAD';
      try {
        const baseRev = runGit(['merge-base', left, headRev], repoRoot).trim();
        return {
          diffRevArgs: [spec],
          baseRev,
          headRev: headRev === 'HEAD' ? null : headRev,
          pathspecArgs,
        };
      } catch {
        // Shallow clone without computed merge-base: fall back to direct two-tree diff.
        return {
          diffRevArgs: [left, headRev],
          baseRev: left,
          headRev: headRev === 'HEAD' ? null : headRev,
          pathspecArgs,
        };
      }
    }
    if (spec.includes('..')) {
      const [left, right] = spec.split('..');
      const headRev = right || 'HEAD';
      return {
        diffRevArgs: [left, headRev],
        baseRev: left,
        headRev: headRev === 'HEAD' ? null : headRev,
        pathspecArgs,
      };
    }
    return {
      diffRevArgs: [spec],
      baseRev: spec,
      headRev: null,
      pathspecArgs,
    };
  }
  return {
    diffRevArgs: revArgs,
    baseRev: revArgs[0],
    headRev: revArgs[1] === 'HEAD' ? null : revArgs[1],
    pathspecArgs,
  };
}

export async function ensurePackageDependencies(repoRoot, packages) {
  if (!fs.existsSync(path.join(repoRoot, 'pnpm-lock.yaml'))) {
    return;
  }
  const missing = Array.from(packages).filter(
    pkg =>
      fs.existsSync(path.join(pkg, 'package.json')) &&
      !fs.existsSync(path.join(pkg, 'node_modules')),
  );
  if (missing.length === 0) return;

  const isWin = process.platform === 'win32';
  const pnpmCmd = isWin ? 'pnpm.cmd' : 'pnpm';
  const workspaceFilterArgs = [];

  for (const pkg of missing) {
    const relPkg = toPosix(path.relative(repoRoot, pkg));
    const selector = relPkg ? `./${relPkg}` : '.';
    workspaceFilterArgs.push('--filter', selector);
  }

  if (workspaceFilterArgs.length > 0) {
    await execFileAsync(
      pnpmCmd,
      [
        'install',
        '--frozen-lockfile',
        '--ignore-scripts',
        '--prefer-offline',
        ...workspaceFilterArgs,
      ],
      {cwd: repoRoot, shell: isWin},
    );
  }
}

function parseDiffNameStatusNullDelimited(diffOutput) {
  const tokens = diffOutput.split('\0');
  const results = [];
  let i = 0;
  while (i < tokens.length) {
    const status = tokens[i++];
    if (!status) continue;
    if (status.startsWith('R') || status.startsWith('C')) {
      const oldPath = tokens[i++] || '';
      const newPath = tokens[i++] || '';
      if (oldPath && newPath) {
        results.push({status: status[0], oldPath, filePath: newPath});
      }
    } else {
      const p = tokens[i++] || '';
      if (p) {
        results.push({status: status[0], oldPath: p, filePath: p});
      }
    }
  }
  return results;
}

const TSCONFIG_NAME_RE = /^tsconfig(\..+)?\.json$/;

export function collectTouchedPackages(
  {
    diffRevArgs,
    baseRev,
    headRev = null,
    pathspecArgs = [],
    repoRoot = DEFAULT_REPO_ROOT,
  },
  gitReader = null,
) {
  const absRepoRoot = path.resolve(repoRoot);
  const reader = gitReader || createGitReader(absRepoRoot);
  const {getFileAtRev} = reader;
  const pkgDirCache = new Map();

  const hasPositivePathspec = pathspecArgs.some(
    p =>
      !p.startsWith(':!') && !p.startsWith(':^') && !p.startsWith(':(exclude)'),
  );
  const gitPathspecs = hasPositivePathspec
    ? pathspecArgs
    : [
        '*.ts',
        '*.mts',
        '*.cts',
        '*package.json',
        '*tsconfig*.json',
        ...pathspecArgs,
      ];

  const diffOutput = runGit(
    ['diff', '--name-status', '-z', ...diffRevArgs, '--', ...gitPathspecs],
    absRepoRoot,
  );

  const rawEntries = parseDiffNameStatusNullDelimited(diffOutput);
  const touchedPackages = new Set();
  const tsExtRe = /\.(c|m)?ts$/;

  for (const item of rawEntries) {
    const candidatePath = item.filePath;
    const baseName = path.basename(candidatePath);
    const oldBaseName = path.basename(item.oldPath);
    const isRelevantConfig =
      baseName === 'package.json' ||
      oldBaseName === 'package.json' ||
      TSCONFIG_NAME_RE.test(baseName) ||
      TSCONFIG_NAME_RE.test(oldBaseName);
    const isRelevantTs =
      (tsExtRe.test(candidatePath) && !isIgnoredSourceFile(candidatePath)) ||
      (tsExtRe.test(item.oldPath) && !isIgnoredSourceFile(item.oldPath));
    if (!isRelevantConfig && !isRelevantTs) continue;

    const pkgDir =
      findPackageDir(
        absRepoRoot,
        candidatePath,
        getFileAtRev,
        baseRev,
        headRev,
        pkgDirCache,
      ) ||
      findPackageDir(
        absRepoRoot,
        item.oldPath,
        getFileAtRev,
        baseRev,
        headRev,
        pkgDirCache,
      );
    if (pkgDir) {
      touchedPackages.add(pkgDir);
    }
  }

  return {absRepoRoot, reader, touchedPackages};
}

function collectWorkspacePackageNames(absRepoRoot) {
  const names = new Set();
  try {
    const out = runGit(
      [
        'ls-files',
        '-z',
        '--',
        'core/**/package.json',
        'handwritten/**/package.json',
      ],
      absRepoRoot,
    );
    for (const rel of out.split('\0')) {
      if (!rel || /\/(test|fixtures|samples|baselines|templates)\//.test(rel)) {
        continue;
      }
      const pj = parseJsonSafe(
        fs.readFileSync(path.join(absRepoRoot, rel), 'utf8'),
      );
      if (pj && typeof pj.name === 'string' && pj.name) {
        names.add(pj.name);
      }
    }
  } catch {
    // Non-git or minimal workspace in tests.
  }
  return names;
}

/**
 * Builds `pnpm --filter <pkgName>^...` arguments to compile workspace dependencies
 * of touched non-private packages in topological order when workspace packages are linked.
 * Also includes any workspace dependency removed since `baseRev` so base type-checking succeeds.
 */
export function buildWorkspaceDepCompileFilterArgs(packages, options = {}) {
  const {absRepoRoot = null, baseRev = null, reader = null} = options || {};
  const filterArgs = [];
  const seenSelectors = new Set();
  let workspaceNames = null;

  const addSelector = sel => {
    if (!seenSelectors.has(sel)) {
      seenSelectors.add(sel);
      filterArgs.push('--filter', sel);
    }
  };

  for (const pkgDir of packages) {
    const pjPath = path.join(pkgDir, 'package.json');
    const headPj = fs.existsSync(pjPath)
      ? parseJsonSafe(fs.readFileSync(pjPath, 'utf8'))
      : null;

    let basePj = null;
    if (absRepoRoot && baseRev && reader) {
      const relPj = toPosix(path.relative(absRepoRoot, pjPath));
      basePj = parseJsonSafe(reader.getFileAtRev(baseRev, relPj));
    }

    const wasPublicInBase = basePj && basePj.private !== true;
    const isPublicInHead = headPj && headPj.private !== true;

    if (isPublicInHead && typeof headPj.name === 'string' && headPj.name) {
      addSelector(`${headPj.name}^...`);
    } else if (
      !wasPublicInBase ||
      !headPj ||
      typeof headPj.name !== 'string' ||
      !headPj.name
    ) {
      if (!wasPublicInBase) continue;
    }

    if (wasPublicInBase && basePj) {
      const headDeps = {
        ...(headPj && headPj.dependencies),
        ...(headPj && headPj.peerDependencies),
        ...(headPj && headPj.optionalDependencies),
      };
      const baseDeps = {
        ...basePj.dependencies,
        ...basePj.peerDependencies,
        ...basePj.optionalDependencies,
      };
      const removedDeps = Object.keys(baseDeps).filter(
        d => !Object.prototype.hasOwnProperty.call(headDeps, d),
      );
      if (removedDeps.length > 0 && absRepoRoot) {
        if (!workspaceNames) {
          workspaceNames = collectWorkspacePackageNames(absRepoRoot);
        }
        for (const dep of removedDeps) {
          if (workspaceNames.has(dep)) {
            addSelector(`${dep}...`);
          }
        }
      }
    }
  }
  return filterArgs;
}

export async function compileTouchedWorkspaceDeps(range) {
  const {absRepoRoot, reader, touchedPackages} = collectTouchedPackages(range);
  if (
    touchedPackages.size === 0 ||
    !fs.existsSync(path.join(absRepoRoot, 'pnpm-lock.yaml'))
  ) {
    console.log(
      'No affected public TypeScript packages require dependency compilation.',
    );
    return;
  }
  const filterArgs = buildWorkspaceDepCompileFilterArgs(touchedPackages, {
    absRepoRoot,
    baseRev: range.baseRev,
    reader,
  });
  if (filterArgs.length === 0) {
    console.log('No public workspace package dependencies to compile.');
    return;
  }
  const isWin = process.platform === 'win32';
  const pnpmCmd = isWin ? 'pnpm.cmd' : 'pnpm';
  console.log(
    `Compiling workspace dependencies for ${filterArgs.length / 2} filter selector(s)...`,
  );
  await execFileAsync(
    pnpmCmd,
    [
      '--config.link-workspace-packages=deep',
      '--config.prefer-workspace-packages=true',
      ...filterArgs,
      '--if-present',
      'run',
      'compile',
    ],
    {cwd: absRepoRoot, shell: isWin, maxBuffer: 50 * 1024 * 1024},
  );
}
