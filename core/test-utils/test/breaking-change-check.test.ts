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

import * as assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import * as ts from 'typescript';

function resolveRepoRoot(startDir: string): string {
  let curr = path.resolve(startDir);
  for (let depth = 0; depth < 12; depth++) {
    if (fs.existsSync(path.join(curr, 'pnpm-workspace.yaml'))) return curr;
    const parent = path.dirname(curr);
    if (parent === curr) break;
    curr = parent;
  }
  return path.resolve(startDir, '../../../..');
}

const REPO_ROOT = resolveRepoRoot(__dirname);
const MAX_INLINE_ANNOTATIONS = 20;
const MAX_NAMESPACE_DEPTH = 3;
const MAX_MEMBERS_PER_CONTAINER = 500;

const IGNORED_PATH_SEGMENTS = new Set(
  'node_modules build dist esm test tests system-test observability-test browser-test conformance-test samples-test test-common test-destination test-fixtures testproxy mock-server internal-tooling samples fixtures baselines baselines-esm benchmark benchmarks conformance templates backstory __snapshots__ .coverage coverage .nyc_output protos'.split(
    ' ',
  ),
);

const TYPE_PRINT_FLAGS =
  ts.NodeBuilderFlags.NoTruncation |
  ts.NodeBuilderFlags.AllowNodeModulesRelativePaths |
  ts.NodeBuilderFlags.UseTypeOfFunction |
  ts.NodeBuilderFlags.AllowUniqueESSymbolType |
  ts.NodeBuilderFlags.UseStructuralFallback;

export interface PublicPackageInfo {
  name: string;
  dir: string;
  relDir: string;
  entrypoints: string[];
  compilerOptions: ts.CompilerOptions;
}

export interface ConsumerProbe {
  id: number;
  symbolName: string;
  label: string;
  declFile?: string;
  code: string;
}

export interface BreakingFinding {
  file: string;
  symbolName: string;
  label: string;
  diagnosticCode: number;
  message: string;
}

export interface GitDiffCheckOptions {
  repoRoot: string;
  baseRef?: string;
  headRef?: string;
  eventName?: string;
  githubRef?: string;
  stepSummaryPath?: string;
  includeGeneratedPackages?: boolean;
}

export interface GitDiffCheckResult {
  passed: boolean;
  findings: BreakingFinding[];
  annotations: string[];
  summaryMarkdown: string;
}

interface FileOverlay {
  overrides: Map<string, string>;
  deleted: Set<string>;
}

interface VarianceSets {
  inputSymbols: Set<ts.Symbol>;
  outputSymbols: Set<ts.Symbol>;
  exportedAccess: Map<ts.Symbol, string>;
}

let sharedDocumentRegistry = ts.createDocumentRegistry();
const REGISTRY_OPTS: ts.CompilerOptions = {target: ts.ScriptTarget.ES2022};

const toPosix = (p: string): string => p.split(path.sep).join('/');
const normPathCmp = (p: string): string =>
  process.platform === 'win32' ? toPosix(p).toLowerCase() : toPosix(p);
const isValidIdent = (name: string): boolean =>
  /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
const propAccess = (target: string, prop: string): string =>
  isValidIdent(prop)
    ? `${target}.${prop}`
    : `${target}[${JSON.stringify(prop)}]`;
const propKeyCode = (prop: string): string =>
  isValidIdent(prop) ? prop : JSON.stringify(prop);

function hasIgnoredDirSegment(relFile: string): boolean {
  const parts = toPosix(relFile).replace(/^\.\//, '').split('/');
  if (parts[0] === 'ci' || parts[0] === 'bin' || parts[0] === '.github') {
    return true;
  }
  return parts
    .slice(0, -1)
    .some(
      seg =>
        IGNORED_PATH_SEGMENTS.has(seg) ||
        seg.endsWith('-test') ||
        seg.endsWith('-tests') ||
        (seg.startsWith('.') && seg.length > 1),
    );
}

export function isIgnoredSourceFile(relFile: string): boolean {
  const norm = toPosix(relFile).replace(/^\.\//, '');
  return (
    !norm.endsWith('.ts') ||
    /\.(test|spec)\.ts$/.test(norm) ||
    hasIgnoredDirSegment(norm)
  );
}

function nodeHasInternalTrivia(node: ts.Node): boolean {
  if (ts.getJSDocTags(node).some(t => t.tagName.text === 'internal')) {
    return true;
  }
  const sf = node.getSourceFile();
  const trivia = sf
    .getFullText()
    .slice(node.getFullStart(), node.getStart(sf, false));
  return /\/\*\*[\s\S]*?@internal\b(?:(?!\*\/)[\s\S])*\*\/|(?:^|\r?\n)[ \t]*\/\/[^\r\n]*@internal\b[ \t]*\r?\n[ \t]*$/.test(
    trivia,
  );
}

function isDeclarationInternal(decl: ts.Node): boolean {
  return (
    nodeHasInternalTrivia(decl) ||
    (ts.isVariableDeclaration(decl) &&
      Boolean(
        decl.parent?.parent &&
        ts.isVariableStatement(decl.parent.parent) &&
        nodeHasInternalTrivia(decl.parent.parent),
      ))
  );
}

function isSymbolInternal(sym: ts.Symbol): boolean {
  const decls = sym.getDeclarations();
  return Boolean(
    decls && decls.length > 0 && decls.every(isDeclarationInternal),
  );
}

function hasPrivateOrProtectedModifier(sym: ts.Symbol): boolean {
  return (sym.getDeclarations() ?? []).some(
    d =>
      ts.canHaveModifiers(d) &&
      Boolean(
        ts
          .getModifiers(d)
          ?.some(
            m =>
              m.kind === ts.SyntaxKind.PrivateKeyword ||
              m.kind === ts.SyntaxKind.ProtectedKeyword,
          ),
      ),
  );
}

const isNonPublicMember = (sym: ts.Symbol): boolean =>
  sym.name.startsWith('#') ||
  isSymbolInternal(sym) ||
  hasPrivateOrProtectedModifier(sym);

function readOverlayFile(
  absPath: string,
  overlay?: FileOverlay,
): string | undefined {
  const resolved = path.resolve(absPath);
  if (overlay?.overrides.has(resolved)) return overlay.overrides.get(resolved);
  if (overlay?.deleted.has(resolved)) return undefined;
  try {
    if (fs.existsSync(resolved) && fs.statSync(resolved).isFile()) {
      return fs.readFileSync(resolved, 'utf8');
    }
  } catch {
    // Ignore unreadable file
  }
  return undefined;
}

function fileExistsWithOverlay(
  absPath: string,
  overlay?: FileOverlay,
): boolean {
  const resolved = path.resolve(absPath);
  if (overlay?.overrides.has(resolved)) return true;
  if (overlay?.deleted.has(resolved)) return false;
  try {
    return fs.existsSync(resolved) && fs.statSync(resolved).isFile();
  } catch {
    return false;
  }
}

function resolveAliased(checker: ts.TypeChecker, sym: ts.Symbol): ts.Symbol {
  if (sym.flags & ts.SymbolFlags.Alias) {
    try {
      return checker.getAliasedSymbol(sym);
    } catch {
      return sym;
    }
  }
  return sym;
}

function loadPackageCompilerOptions(
  pkgDir: string,
  overlay?: FileOverlay,
): ts.CompilerOptions {
  const tsconfigPath = path.join(pkgDir, 'tsconfig.json');
  let baseOpts: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.CommonJS,
    moduleResolution: ts.ModuleResolutionKind.Node10,
    strict: true,
    esModuleInterop: false,
    allowSyntheticDefaultImports: true,
  };
  const readConfigText = (p: string): string | undefined =>
    readOverlayFile(p, overlay) ?? ts.sys.readFile(p);
  if (fileExistsWithOverlay(tsconfigPath, overlay)) {
    const readRes = ts.readConfigFile(tsconfigPath, readConfigText);
    if (!readRes.error && readRes.config) {
      const parsed = ts.parseJsonConfigFileContent(
        readRes.config,
        {
          ...ts.sys,
          readFile: readConfigText,
          fileExists: p =>
            fileExistsWithOverlay(p, overlay) || ts.sys.fileExists(p),
        },
        pkgDir,
      );
      baseOpts = {...baseOpts, ...parsed.options};
    }
  }
  return {
    ...baseOpts,
    noEmit: true,
    skipLibCheck: true,
    incremental: false,
    composite: false,
    strictNullChecks: true,
    strictFunctionTypes: true,
    stripInternal: true,
    types: baseOpts.types,
  };
}

function collectExportTargets(val: unknown, out: string[]): void {
  if (typeof val === 'string') {
    out.push(val);
  } else if (val && typeof val === 'object') {
    for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
      if (k !== 'package.json' && k !== './package.json' && !k.includes('*')) {
        collectExportTargets(v, out);
      }
    }
  }
}

function mapArtifactToSource(
  pkgDir: string,
  relTarget: string,
  compilerOptions: ts.CompilerOptions,
  fileExists: (absPath: string) => boolean,
): string | undefined {
  const clean = toPosix(relTarget).replace(/^\.\//, '');
  if (!clean || clean === 'package.json' || clean.endsWith('.json')) {
    return undefined;
  }
  const directAbs = path.join(pkgDir, clean);
  if (
    clean.endsWith('.d.ts') &&
    !clean.startsWith('build/') &&
    !clean.startsWith('dist/') &&
    fileExists(directAbs)
  ) {
    return directAbs;
  }
  const rootDir = compilerOptions.rootDir
    ? path.resolve(pkgDir, compilerOptions.rootDir)
    : pkgDir;
  const stripped = clean
    .replace(/^(build|dist)\/(cjs|esm)\//, '')
    .replace(/^(build|dist)\//, '')
    .replace(/(\.d\.ts|\.d\.mts|\.d\.cts|\.mjs|\.cjs|\.js)$/, '.ts');
  return [
    path.join(rootDir, stripped),
    path.join(pkgDir, stripped),
    path.join(pkgDir, 'src', stripped.replace(/^src\//, '')),
  ].find(c => c.endsWith('.ts') && fileExists(c));
}

function readPackageManifest(
  pkgDir: string,
  overlay?: FileOverlay,
): Record<string, unknown> | undefined {
  const raw = readOverlayFile(path.join(pkgDir, 'package.json'), overlay);
  if (!raw) return undefined;
  try {
    return JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return undefined;
  }
}

export function resolvePackageEntrypoints(
  pkgDir: string,
  compilerOptions: ts.CompilerOptions,
  overlay?: FileOverlay,
): string[] {
  const fileExists = (p: string): boolean => fileExistsWithOverlay(p, overlay);
  const pj = readPackageManifest(pkgDir, overlay);
  const rawTargets: string[] = [];
  if (pj) {
    for (const field of ['types', 'typings', 'main']) {
      if (typeof pj[field] === 'string') rawTargets.push(pj[field] as string);
    }
    if (pj.exports) collectExportTargets(pj.exports, rawTargets);
  }
  const found = new Set<string>();
  for (const t of rawTargets) {
    const mapped = mapArtifactToSource(pkgDir, t, compilerOptions, fileExists);
    if (mapped) found.add(path.resolve(mapped));
  }
  for (const fb of [
    'src/index.ts',
    'dev/src/index.ts',
    'typescript/src/index.ts',
    'index.d.ts',
  ]) {
    const abs = path.resolve(pkgDir, fb);
    if (fileExists(abs)) found.add(abs);
  }
  return Array.from(found);
}

export function discoverPublicPackages(
  repoRoot: string,
  options: {includeGeneratedPackages?: boolean} = {},
): PublicPackageInfo[] {
  const groups = ['core', 'core/packages', 'core/dev-packages', 'handwritten'];
  if (options.includeGeneratedPackages) groups.push('packages');
  const ignored = new Set<string>();
  const ignoreJsonPath = path.join(repoRoot, 'ignore.json');
  if (fs.existsSync(ignoreJsonPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(ignoreJsonPath, 'utf8')) as {
        ignored?: string[];
      };
      for (const item of data.ignored ?? []) {
        ignored.add(item.replace(/\/+$/, ''));
      }
    } catch {
      // Ignore malformed ignore.json
    }
  }
  const results: PublicPackageInfo[] = [];
  for (const group of groups) {
    const groupDir = path.join(repoRoot, group);
    if (!fs.existsSync(groupDir)) continue;
    for (const entry of fs.readdirSync(groupDir, {withFileTypes: true})) {
      if (!entry.isDirectory()) continue;
      const pkgDir = path.join(groupDir, entry.name);
      const relDir = toPosix(path.relative(repoRoot, pkgDir));
      const pjPath = path.join(pkgDir, 'package.json');
      if (ignored.has(relDir) || !fs.existsSync(pjPath)) continue;
      const pj = JSON.parse(fs.readFileSync(pjPath, 'utf8')) as {
        name?: string;
        private?: boolean;
      };
      if (pj.private || !pj.name) continue;
      const compilerOptions = loadPackageCompilerOptions(pkgDir);
      const entrypoints = resolvePackageEntrypoints(pkgDir, compilerOptions);
      if (entrypoints.length > 0) {
        results.push({
          name: pj.name,
          dir: pkgDir,
          relDir,
          entrypoints,
          compilerOptions,
        });
      }
    }
  }
  return results.sort((a, b) => a.relDir.localeCompare(b.relDir));
}

function createOverlayProgram(
  pkgDir: string,
  rootFiles: string[],
  compilerOptions: ts.CompilerOptions,
  overlay: FileOverlay,
  virtualFiles: Map<string, string>,
  oldProgram?: ts.Program,
): ts.Program {
  const baseHost = ts.createCompilerHost(compilerOptions, true);
  const resolvePath = (f: string): string => path.resolve(pkgDir, f);
  const fileExists = (fileName: string): boolean => {
    const abs = resolvePath(fileName);
    if (virtualFiles.has(abs) || overlay.overrides.has(abs)) return true;
    if (overlay.deleted.has(abs)) return false;
    return baseHost.fileExists(abs);
  };
  const readFile = (fileName: string): string | undefined => {
    const abs = resolvePath(fileName);
    if (virtualFiles.has(abs)) return virtualFiles.get(abs);
    if (overlay.overrides.has(abs)) return overlay.overrides.get(abs);
    if (overlay.deleted.has(abs)) return undefined;
    return baseHost.readFile(abs);
  };
  const directoryExists = (dirName: string): boolean => {
    const abs = resolvePath(dirName);
    if (baseHost.directoryExists?.(abs)) return true;
    const prefix = `${abs}${path.sep}`;
    for (const k of overlay.overrides.keys()) {
      if (k.startsWith(prefix)) return true;
    }
    for (const k of virtualFiles.keys()) {
      if (k.startsWith(prefix)) return true;
    }
    return false;
  };
  const moduleResolutionCache = ts.createModuleResolutionCache(
    pkgDir,
    f => baseHost.getCanonicalFileName(f),
    compilerOptions,
  );
  const resolutionHost: ts.ModuleResolutionHost = {
    fileExists,
    readFile,
    directoryExists,
    getCurrentDirectory: () => pkgDir,
    realpath: p => {
      const abs = resolvePath(p);
      return overlay.overrides.has(abs) ||
        virtualFiles.has(abs) ||
        !baseHost.realpath
        ? abs
        : baseHost.realpath(abs);
    },
  };
  const pkgPrefixCmp = normPathCmp(pkgDir) + '/';
  const host: ts.CompilerHost = {
    ...baseHost,
    getCurrentDirectory: () => pkgDir,
    fileExists,
    readFile,
    directoryExists,
    getSourceFile(fileName, languageVersionOrOptions) {
      const abs = resolvePath(fileName);
      const vText = virtualFiles.get(abs);
      if (vText !== undefined) {
        return ts.createSourceFile(abs, vText, languageVersionOrOptions, true);
      }
      const oText = overlay.overrides.get(abs);
      if (oText !== undefined) {
        return ts.createSourceFile(abs, oText, languageVersionOrOptions, true);
      }
      if (overlay.deleted.has(abs)) return undefined;
      const text = baseHost.readFile(abs);
      if (text === undefined) return undefined;
      if (
        toPosix(abs).includes('/node_modules/') ||
        !normPathCmp(abs).startsWith(pkgPrefixCmp)
      ) {
        return sharedDocumentRegistry.acquireDocument(
          abs,
          REGISTRY_OPTS,
          ts.ScriptSnapshot.fromString(text),
          ts.version,
        );
      }
      return ts.createSourceFile(abs, text, languageVersionOrOptions, true);
    },
    resolveModuleNameLiterals(literals, containingFile, redirected, options) {
      return literals.map(lit =>
        ts.resolveModuleName(
          lit.text,
          containingFile,
          options,
          resolutionHost,
          moduleResolutionCache,
          redirected,
        ),
      );
    },
    resolveModuleNames(names, containingFile, _reused, redirected, options) {
      return names.map(
        name =>
          ts.resolveModuleName(
            name,
            containingFile,
            options,
            resolutionHost,
            moduleResolutionCache,
            redirected,
          ).resolvedModule,
      );
    },
  };
  const ambientDts: string[] = [];
  for (const sub of ['types', 'src', 'src/types', 'dev/src']) {
    const dir = path.join(pkgDir, sub);
    try {
      if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) continue;
      for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
        const full = path.join(dir, entry.name);
        if (
          entry.isFile() &&
          entry.name.endsWith('.d.ts') &&
          fileExistsWithOverlay(full, overlay)
        ) {
          ambientDts.push(full);
        }
      }
    } catch {
      // Ignore unreadable ambient directories
    }
  }
  return ts.createProgram(
    Array.from(new Set([...ambientDts, ...rootFiles])),
    compilerOptions,
    host,
    oldProgram,
  );
}

interface ResolvedModuleSurface {
  importHeader: string;
  exports: Array<{exportName: string; symbol: ts.Symbol}>;
  moduleSymbol?: ts.Symbol;
  callableSymbol?: ts.Symbol;
}

function formatEntryImportSpec(
  pkgDir: string,
  entryFile: string,
  compilerOptions: ts.CompilerOptions,
): string {
  const rel = './' + toPosix(path.relative(pkgDir, entryFile));
  const resKind = compilerOptions.moduleResolution;
  if (
    (resKind === ts.ModuleResolutionKind.Node16 ||
      resKind === ts.ModuleResolutionKind.NodeNext) &&
    !rel.endsWith('.d.ts') &&
    rel.endsWith('.ts')
  ) {
    return rel.replace(/\.ts$/, '.js');
  }
  return rel.replace(/(\.d\.ts|\.ts)$/, '');
}

function resolveEntrypointSurface(
  checker: ts.TypeChecker,
  pkgDir: string,
  entryFile: string,
  entrySf: ts.SourceFile,
  compilerOptions: ts.CompilerOptions,
): ResolvedModuleSurface {
  const relSpec = formatEntryImportSpec(pkgDir, entryFile, compilerOptions);
  const directModSym = checker.getSymbolAtLocation(entrySf);
  if (directModSym) {
    const exportEq = directModSym.exports?.get(
      ts.InternalSymbolName.ExportEquals,
    );
    const callableSymbol = exportEq
      ? resolveAliased(checker, exportEq)
      : undefined;
    const rawExports = checker.getExportsOfModule(directModSym);
    if (rawExports.length > 0 || callableSymbol) {
      const importHeader = exportEq
        ? `import __Pkg = require(${JSON.stringify(relSpec.replace(/\.js$/, ''))});`
        : `import * as __Pkg from ${JSON.stringify(relSpec)};`;
      return {
        importHeader,
        exports: rawExports
          .filter(s => !isSymbolInternal(s))
          .map(s => ({exportName: s.name, symbol: s})),
        moduleSymbol: directModSym,
        callableSymbol,
      };
    }
  }
  const relRef = './' + toPosix(path.relative(pkgDir, entryFile));
  for (const stmt of entrySf.statements) {
    if (ts.isModuleDeclaration(stmt) && ts.isStringLiteral(stmt.name)) {
      const modSym = checker.getSymbolAtLocation(stmt.name);
      if (!modSym) continue;
      const rawExports = checker.getExportsOfModule(modSym);
      const exportEq = modSym.exports?.get(ts.InternalSymbolName.ExportEquals);
      const callableSymbol = exportEq
        ? resolveAliased(checker, exportEq)
        : undefined;
      let importHeader = `/// <reference path=${JSON.stringify(relRef)} />\nimport __Pkg = require(${JSON.stringify(stmt.name.text)});`;
      if (directModSym && stmt.body && ts.isModuleBlock(stmt.body)) {
        const eqAssign = stmt.body.statements.find(
          (s): s is ts.ExportAssignment =>
            ts.isExportAssignment(s) && Boolean(s.isExportEquals),
        );
        if (
          eqAssign &&
          (ts.isIdentifier(eqAssign.expression) ||
            ts.isPropertyAccessExpression(eqAssign.expression))
        ) {
          importHeader = `import ${JSON.stringify(relSpec)};\nimport __Pkg = ${eqAssign.expression.getText(entrySf)};`;
        }
      }
      return {
        importHeader,
        exports: rawExports
          .filter(s => !isSymbolInternal(s))
          .map(s => ({exportName: s.name, symbol: s})),
        moduleSymbol: modSym,
        callableSymbol,
      };
    }
  }
  return {importHeader: 'export {};', exports: []};
}

function isSymbolDeclaredInPkg(
  sym: ts.Symbol,
  absPkgPrefixCmp: string,
): boolean {
  const decls = sym.getDeclarations();
  return Boolean(
    decls &&
    decls.length > 0 &&
    decls.every(d => {
      const fnCmp = normPathCmp(d.getSourceFile().fileName);
      return (
        fnCmp.startsWith(absPkgPrefixCmp) &&
        !fnCmp.slice(absPkgPrefixCmp.length).startsWith('node_modules/')
      );
    }),
  );
}

const WELL_KNOWN_SYMBOL_EXPRS: ReadonlyArray<readonly [string, string]> = [
  ['__@toStringTag', 'Symbol.toStringTag'],
  ['__@iterator', 'Symbol.iterator'],
  ['__@asyncIterator', 'Symbol.asyncIterator'],
  ['__@dispose', 'Symbol.dispose'],
  ['__@asyncDispose', 'Symbol.asyncDispose'],
  ['__@hasInstance', 'Symbol.hasInstance'],
  ['__@toPrimitive', 'Symbol.toPrimitive'],
];

function resolveSymbolPropExpr(
  checker: ts.TypeChecker,
  prop: ts.Symbol,
  exportedAccess: Map<ts.Symbol, string>,
): {bracketCode: string; keyTypeCode: string} | undefined {
  const esc = String(prop.escapedName);
  for (const [prefix, expr] of WELL_KNOWN_SYMBOL_EXPRS) {
    if (esc === prefix || esc.startsWith(`${prefix}@`)) {
      return {bracketCode: `[${expr}]`, keyTypeCode: `typeof ${expr}`};
    }
  }
  if (!esc.startsWith('__@')) return undefined;
  for (const d of prop.getDeclarations() ?? []) {
    if (
      'name' in d &&
      d.name &&
      ts.isComputedPropertyName(d.name as ts.PropertyName)
    ) {
      const exprType = checker.getTypeAtLocation(
        (d.name as ts.ComputedPropertyName).expression,
      );
      if (exprType.flags & ts.TypeFlags.UniqueESSymbol) {
        const uSym = resolveAliased(
          checker,
          (exprType as ts.UniqueESSymbolType).symbol,
        );
        const access = exportedAccess.get(uSym);
        if (access) {
          return {bracketCode: `[${access}]`, keyTypeCode: `typeof ${access}`};
        }
      }
    }
  }
  return undefined;
}

function collectVarianceRoles(
  checker: ts.TypeChecker,
  pkgDir: string,
  surface: ResolvedModuleSurface,
  entrySf: ts.SourceFile,
): VarianceSets {
  const inputSymbols = new Set<ts.Symbol>();
  const outputSymbols = new Set<ts.Symbol>();
  const exportedAccess = new Map<ts.Symbol, string>();
  const visitedIn = new Set<ts.Type>();
  const visitedOut = new Set<ts.Type>();
  const visitedRegNs = new Set<ts.Symbol>();
  const visitedWalkNs = new Set<ts.Symbol>();
  const allExportedTypes: ts.Symbol[] = [];
  const absPrefixCmp = normPathCmp(pkgDir) + '/';

  const registerExports = (
    items: Array<{exportName: string; symbol: ts.Symbol}>,
    prefix: string,
    depth: number,
  ): void => {
    for (const {exportName, symbol} of items) {
      if (exportName === 'prototype' || !isValidIdent(exportName)) continue;
      const target = resolveAliased(checker, symbol);
      const expr = `${prefix}.${exportName}`;
      if (!exportedAccess.has(target)) exportedAccess.set(target, expr);
      if (target.flags & ts.SymbolFlags.Value) {
        const vt = checker.getTypeOfSymbolAtLocation(target, entrySf);
        if (vt.flags & ts.TypeFlags.UniqueESSymbol) {
          const uSym = resolveAliased(
            checker,
            (vt as ts.UniqueESSymbolType).symbol,
          );
          if (!exportedAccess.has(uSym)) exportedAccess.set(uSym, expr);
        } else if (
          target.flags & ts.SymbolFlags.Class ||
          !(
            target.flags &
            (ts.SymbolFlags.Function |
              ts.SymbolFlags.Enum |
              ts.SymbolFlags.ValueModule |
              ts.SymbolFlags.NamespaceModule)
          )
        ) {
          const props = checker.getPropertiesOfType(vt);
          if (props.length <= 80) {
            for (const p of props) {
              if (
                !isValidIdent(p.name) ||
                p.name === 'prototype' ||
                isNonPublicMember(p)
              ) {
                continue;
              }
              const pt = checker.getTypeOfSymbolAtLocation(
                p,
                p.valueDeclaration ?? p.declarations?.[0] ?? entrySf,
              );
              if (pt.flags & ts.TypeFlags.UniqueESSymbol) {
                const uSym = resolveAliased(
                  checker,
                  (pt as ts.UniqueESSymbolType).symbol,
                );
                if (!exportedAccess.has(uSym)) {
                  exportedAccess.set(uSym, `${expr}.${p.name}`);
                }
              }
            }
          }
        }
      }
      if (
        target.flags & (ts.SymbolFlags.Interface | ts.SymbolFlags.TypeAlias) &&
        !(target.flags & ts.SymbolFlags.Class)
      ) {
        allExportedTypes.push(target);
      }
      if (
        depth < MAX_NAMESPACE_DEPTH &&
        exportName !== 'protos' &&
        target.flags &
          (ts.SymbolFlags.ValueModule | ts.SymbolFlags.NamespaceModule) &&
        !visitedRegNs.has(target)
      ) {
        visitedRegNs.add(target);
        registerExports(
          checker
            .getExportsOfModule(target)
            .filter(c => !isSymbolInternal(c))
            .slice(0, MAX_MEMBERS_PER_CONTAINER)
            .map(c => ({exportName: c.name, symbol: c})),
          expr,
          depth + 1,
        );
      }
    }
  };
  registerExports(surface.exports, '__Pkg', 0);

  const walkType = (
    t: ts.Type,
    mode: 'in' | 'out',
    depth: number,
    recordRoot = true,
  ): void => {
    if (
      depth > 6 ||
      t.flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown | ts.TypeFlags.Never)
    ) {
      return;
    }
    const seen = mode === 'in' ? visitedIn : visitedOut;
    if (recordRoot) {
      if (seen.has(t)) return;
      seen.add(t);
    }
    const bucket = mode === 'in' ? inputSymbols : outputSymbols;
    const aSym = t.aliasSymbol
      ? resolveAliased(checker, t.aliasSymbol)
      : undefined;
    if (recordRoot && aSym) bucket.add(aSym);
    for (const arg of t.aliasTypeArguments ?? []) {
      walkType(arg, mode, depth + 1);
    }
    const sym = t.getSymbol()
      ? resolveAliased(checker, t.getSymbol()!)
      : undefined;
    if (recordRoot && sym) bucket.add(sym);
    if (t.isUnionOrIntersection()) {
      for (const sub of t.types) walkType(sub, mode, depth + 1);
      return;
    }
    for (const arg of checker.getTypeArguments(t as ts.TypeReference)) {
      walkType(arg, mode, depth + 1);
    }
    const walkSigsAt = (sigs: readonly ts.Signature[], m: 'in' | 'out') => {
      const f: 'in' | 'out' = m === 'in' ? 'out' : 'in';
      for (const sig of sigs) {
        for (const p of sig.getParameters()) {
          if (p.name !== 'this') {
            walkType(
              checker.getTypeOfSymbolAtLocation(
                p,
                p.valueDeclaration ?? p.declarations?.[0] ?? entrySf,
              ),
              f,
              depth + 1,
            );
          }
        }
        walkType(checker.getReturnTypeOfSignature(sig), m, depth + 1);
      }
    };
    walkSigsAt([...t.getCallSignatures(), ...t.getConstructSignatures()], mode);

    if (
      depth <= 4 &&
      t.flags & ts.TypeFlags.Object &&
      ((sym && isSymbolDeclaredInPkg(sym, absPrefixCmp)) ||
        (aSym && isSymbolDeclaredInPkg(aSym, absPrefixCmp)))
    ) {
      const props = checker.getPropertiesOfType(t);
      if (props.length <= 80) {
        for (const prop of props) {
          if (prop.name === 'prototype' || isNonPublicMember(prop)) continue;
          const pDecl = prop.valueDeclaration ?? prop.declarations?.[0];
          if (pDecl?.getSourceFile().fileName.includes('node_modules')) {
            continue;
          }
          const pt = checker.getTypeOfSymbolAtLocation(prop, pDecl ?? entrySf);
          const sigs = pt.getCallSignatures();
          if (sigs.length > 0 && !(prop.flags & ts.SymbolFlags.Property)) {
            walkSigsAt(sigs, mode);
          } else {
            walkType(pt, mode, depth + 1);
          }
        }
      }
    }
  };

  const walkSignatures = (sigs: readonly ts.Signature[]): void => {
    for (const sig of sigs) {
      if (sig.declaration && isDeclarationInternal(sig.declaration)) continue;
      for (const p of sig.getParameters()) {
        if (p.name !== 'this') {
          walkType(
            checker.getTypeOfSymbolAtLocation(
              p,
              p.valueDeclaration ?? p.declarations?.[0] ?? entrySf,
            ),
            'in',
            0,
          );
        }
      }
      walkType(checker.getReturnTypeOfSignature(sig), 'out', 0);
    }
  };

  const walkContainerMembers = (
    containerType: ts.Type,
    skipPrototype: boolean,
  ) => {
    for (const prop of checker
      .getPropertiesOfType(containerType)
      .slice(0, MAX_MEMBERS_PER_CONTAINER)) {
      if (
        (skipPrototype && prop.name === 'prototype') ||
        prop.name.startsWith('#') ||
        isSymbolInternal(prop)
      ) {
        continue;
      }
      const decls = prop.getDeclarations() ?? [];
      if (
        (decls.length > 0 &&
          decls.every(d =>
            d.getSourceFile().fileName.includes('node_modules'),
          )) ||
        decls.some(
          d =>
            ts.canHaveModifiers(d) &&
            Boolean(
              ts
                .getModifiers(d)
                ?.some(m => m.kind === ts.SyntaxKind.PrivateKeyword),
            ),
        )
      ) {
        continue;
      }
      const pt = checker.getTypeOfSymbolAtLocation(
        prop,
        prop.valueDeclaration ?? decls[0] ?? entrySf,
      );
      const sigs = pt.getCallSignatures();
      if (sigs.length > 0 && !(prop.flags & ts.SymbolFlags.Property)) {
        walkSignatures(sigs);
      } else {
        walkType(pt, 'out', 0);
        if (!isReadonlyProperty(prop)) walkType(pt, 'in', 0);
      }
    }
  };

  const walkExportedSymbol = (
    sym: ts.Symbol,
    exportName: string,
    depth: number,
  ) => {
    if (
      exportName === 'prototype' ||
      exportName === 'protos' ||
      isSymbolInternal(sym)
    ) {
      return;
    }
    const real = resolveAliased(checker, sym);
    if (isSymbolInternal(real)) return;
    if (real.flags & ts.SymbolFlags.Value) {
      const vt = checker.getTypeOfSymbolAtLocation(real, entrySf);
      walkSignatures(vt.getCallSignatures());
      walkSignatures(vt.getConstructSignatures());
      if (real.flags & ts.SymbolFlags.Class) {
        walkContainerMembers(vt, true);
        walkContainerMembers(checker.getDeclaredTypeOfSymbol(real), false);
      } else if (
        vt.getCallSignatures().length === 0 &&
        vt.getConstructSignatures().length === 0 &&
        !(
          real.flags &
          (ts.SymbolFlags.Enum |
            ts.SymbolFlags.ValueModule |
            ts.SymbolFlags.NamespaceModule)
        )
      ) {
        const symDecl = real.valueDeclaration ?? real.declarations?.[0];
        if (
          symDecl &&
          !symDecl.getSourceFile().fileName.includes('node_modules')
        ) {
          const props = checker.getPropertiesOfType(vt);
          if (props.length > 0 && props.length <= 60) {
            walkContainerMembers(vt, false);
          } else {
            walkType(vt, 'out', 0);
          }
        }
      }
    }
    if (
      depth < MAX_NAMESPACE_DEPTH &&
      real.flags &
        (ts.SymbolFlags.ValueModule | ts.SymbolFlags.NamespaceModule) &&
      !visitedWalkNs.has(real)
    ) {
      visitedWalkNs.add(real);
      for (const child of checker
        .getExportsOfModule(real)
        .slice(0, MAX_MEMBERS_PER_CONTAINER)) {
        walkExportedSymbol(child, child.name, depth + 1);
      }
    }
  };

  if (
    surface.callableSymbol &&
    surface.callableSymbol.flags & ts.SymbolFlags.Value
  ) {
    const vt = checker.getTypeOfSymbolAtLocation(
      surface.callableSymbol,
      entrySf,
    );
    walkSignatures(vt.getCallSignatures());
    walkSignatures(vt.getConstructSignatures());
  }
  for (const {exportName, symbol} of surface.exports) {
    walkExportedSymbol(symbol, exportName, 0);
  }
  for (const tSym of allExportedTypes) {
    if (inputSymbols.has(tSym) || outputSymbols.has(tSym)) continue;
    const aliasDecl = (tSym.getDeclarations() ?? []).find(
      ts.isTypeAliasDeclaration,
    );
    walkType(
      aliasDecl
        ? checker.getTypeFromTypeNode(aliasDecl.type)
        : checker.getDeclaredTypeOfSymbol(tSym),
      'in',
      0,
      false,
    );
  }
  return {inputSymbols, outputSymbols, exportedAccess};
}

interface PrintTypeOptions {
  inAliasRhs?: boolean;
  mode?: 'in' | 'out';
}

type TypePrinterFn = (
  t: ts.Type,
  selfReplacement?: string,
  options?: PrintTypeOptions,
) => string | undefined;

const EXPANDABLE_GLOBAL_GENERICS = new Set(
  'Promise PromiseLike Array ReadonlyArray Iterable AsyncIterable Iterator AsyncIterator IterableIterator AsyncIterableIterator Set ReadonlySet Map ReadonlyMap Record Partial Required Readonly'.split(
    ' ',
  ),
);

function classTypeHasNonPublicMembers(t: ts.Type): boolean {
  return t
    .getProperties()
    .some(p => p.name.startsWith('#') || hasPrivateOrProtectedModifier(p));
}

function createTypePrinter(
  checker: ts.TypeChecker,
  pkgDir: string,
  consumerSf: ts.SourceFile,
  anchor: ts.Node,
  exportedAccess: Map<ts.Symbol, string>,
): TypePrinterFn {
  const printer = ts.createPrinter({removeComments: true});
  const absPrefixCmp = normPathCmp(pkgDir) + '/';
  const expanding = new Set<ts.Type>();
  const exportedBySpecAndName = new Map<string, string>();
  for (const [sym, access] of exportedAccess) {
    for (const d of sym.getDeclarations() ?? []) {
      const fnCmp = normPathCmp(
        toPosix(d.getSourceFile().fileName).replace(/(\.d\.ts|\.ts)$/, ''),
      );
      if (fnCmp.startsWith(absPrefixCmp)) {
        exportedBySpecAndName.set(`${fnCmp}::${sym.name}`, access);
      }
    }
  }

  const makeQualifiedEntity = (dotted: string): ts.EntityName => {
    const parts = dotted.split('.');
    let expr: ts.EntityName = ts.factory.createIdentifier(parts[0]);
    for (let i = 1; i < parts.length; i++) {
      expr = ts.factory.createQualifiedName(expr, parts[i]);
    }
    return expr;
  };

  const getUnexportedPkgSym = (
    rawSym: ts.Symbol | undefined,
  ): ts.Symbol | undefined => {
    if (!rawSym) return undefined;
    const sym = resolveAliased(checker, rawSym);
    return !exportedAccess.has(sym) && isSymbolDeclaredInPkg(sym, absPrefixCmp)
      ? sym
      : undefined;
  };
  const isUnexportedPkgAlias = (t: ts.Type): boolean =>
    Boolean(getUnexportedPkgSym(t.aliasSymbol));
  const isUnexportedPkgInterface = (t: ts.Type): boolean => {
    const sym = getUnexportedPkgSym(t.getSymbol());
    return Boolean(
      sym &&
      sym.flags & ts.SymbolFlags.Interface &&
      !(
        sym.flags &
        (ts.SymbolFlags.Class | ts.SymbolFlags.Enum | ts.SymbolFlags.Value)
      ),
    );
  };
  const isUnexportedPkgAnonymousObject = (t: ts.Type): boolean => {
    const sym = getUnexportedPkgSym(t.getSymbol());
    return Boolean(
      sym &&
      sym.flags & (ts.SymbolFlags.TypeLiteral | ts.SymbolFlags.ObjectLiteral),
    );
  };
  const isExpandableUnexportedPkgClass = (
    t: ts.Type,
    mode: 'in' | 'out',
  ): boolean => {
    const sym = getUnexportedPkgSym(t.getSymbol());
    return Boolean(
      sym &&
      sym.flags & ts.SymbolFlags.Class &&
      t.getConstructSignatures().length === 0 &&
      (mode === 'out' || !classTypeHasNonPublicMembers(t)),
    );
  };

  const containsUnexportedInPkgType = (
    t: ts.Type,
    mode: 'in' | 'out',
    depth = 0,
    seen = new Set<ts.Type>(),
  ): boolean => {
    if (depth > 3 || seen.has(t)) return false;
    seen.add(t);
    if (
      isUnexportedPkgAlias(t) ||
      isUnexportedPkgInterface(t) ||
      isExpandableUnexportedPkgClass(t, mode) ||
      t.aliasTypeArguments?.some(a =>
        containsUnexportedInPkgType(a, mode, depth + 1, seen),
      )
    ) {
      return true;
    }
    if (t.isUnionOrIntersection()) {
      return t.types.some(sub =>
        containsUnexportedInPkgType(sub, mode, depth + 1, seen),
      );
    }
    if (
      checker
        .getTypeArguments(t as ts.TypeReference)
        .some(a => containsUnexportedInPkgType(a, mode, depth + 1, seen))
    ) {
      return true;
    }
    const flip: 'in' | 'out' = mode === 'in' ? 'out' : 'in';
    for (const sig of t.getCallSignatures()) {
      for (const p of sig.getParameters()) {
        if (p.name === 'this') continue;
        const pt = checker.getTypeOfSymbolAtLocation(
          p,
          p.valueDeclaration ?? p.declarations?.[0] ?? anchor,
        );
        if (containsUnexportedInPkgType(pt, flip, depth + 1, seen)) return true;
      }
      if (
        containsUnexportedInPkgType(
          checker.getReturnTypeOfSignature(sig),
          mode,
          depth + 1,
          seen,
        )
      ) {
        return true;
      }
    }
    if (depth <= 3 && isUnexportedPkgAnonymousObject(t)) {
      const props = checker.getPropertiesOfType(t);
      if (props.length <= 50) {
        for (const p of props) {
          if (isNonPublicMember(p)) continue;
          const pt = checker.getTypeOfSymbolAtLocation(
            p,
            p.valueDeclaration ?? p.declarations?.[0] ?? anchor,
          );
          if (containsUnexportedInPkgType(pt, mode, depth + 1, seen)) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const sanitizeTypeNode = (
    root: ts.TypeNode,
    selfReplacement: string | undefined,
    mode: 'in' | 'out',
  ): ts.TypeNode => {
    const visit = (node: ts.Node): ts.Node => {
      if (node.kind === ts.SyntaxKind.ThisType && selfReplacement) {
        return ts.factory.createTypeReferenceNode(selfReplacement);
      }
      if (
        mode === 'out' &&
        ts.isTypeOperatorNode(node) &&
        node.operator === ts.SyntaxKind.UniqueKeyword &&
        node.type.kind === ts.SyntaxKind.SymbolKeyword
      ) {
        return ts.factory.createKeywordTypeNode(ts.SyntaxKind.SymbolKeyword);
      }
      if (
        ts.isImportTypeNode(node) &&
        ts.isLiteralTypeNode(node.argument) &&
        ts.isStringLiteral(node.argument.literal)
      ) {
        const specPosix = toPosix(node.argument.literal.text);
        const specCmp = normPathCmp(specPosix);
        if (
          specCmp.startsWith(absPrefixCmp) &&
          !specCmp.slice(absPrefixCmp.length).startsWith('node_modules/')
        ) {
          const visitedTypeArgs = node.typeArguments?.map(
            ta => ts.visitNode(ta, visit) as ts.TypeNode,
          );
          if (node.qualifier && ts.isIdentifier(node.qualifier)) {
            const pubAccess = exportedBySpecAndName.get(
              `${specCmp}::${node.qualifier.text}`,
            );
            if (pubAccess) {
              const entity = makeQualifiedEntity(pubAccess);
              return node.isTypeOf
                ? ts.factory.createTypeQueryNode(entity, visitedTypeArgs)
                : ts.factory.createTypeReferenceNode(entity, visitedTypeArgs);
            }
          }
          return ts.factory.updateImportTypeNode(
            node,
            ts.factory.createLiteralTypeNode(
              ts.factory.createStringLiteral(
                './' + specPosix.slice(absPrefixCmp.length),
              ),
            ),
            node.attributes,
            node.qualifier,
            visitedTypeArgs,
            node.isTypeOf,
          );
        }
      }
      return ts.visitEachChild(node, visit, undefined);
    };
    return ts.visitNode(root, visit) as ts.TypeNode;
  };

  const renderCallSigTypeString = (
    sig: ts.Signature,
    mode: 'in' | 'out',
    depth: number,
    asArrow: boolean,
  ): string | undefined => {
    const flip: 'in' | 'out' = mode === 'in' ? 'out' : 'in';
    const tpParts: string[] = [];
    for (const tp of sig.getTypeParameters() ?? []) {
      let part = tp.symbol.name;
      const constraint = checker.getBaseConstraintOfType(tp);
      if (constraint) {
        const cStr = printImpl(constraint, undefined, depth + 1, false, flip);
        if (!cStr) return undefined;
        part += ` extends ${cStr}`;
      }
      tpParts.push(part);
    }
    const tpText = tpParts.length > 0 ? `<${tpParts.join(', ')}>` : '';
    const pTexts: string[] = [];
    for (const p of sig.getParameters()) {
      if (p.name === 'this') continue;
      const pDecl = p.valueDeclaration ?? p.declarations?.[0];
      const isRest = Boolean(
        pDecl && ts.isParameter(pDecl) && pDecl.dotDotDotToken,
      );
      const isOpt =
        !isRest &&
        Boolean(
          p.flags & ts.SymbolFlags.Optional ||
          (pDecl &&
            ts.isParameter(pDecl) &&
            (pDecl.questionToken || pDecl.initializer)),
        );
      const pt = checker.getTypeOfSymbolAtLocation(p, pDecl ?? anchor);
      const ptStr = printImpl(pt, undefined, depth + 1, false, flip);
      if (!ptStr) return undefined;
      const pName = `_p${pTexts.length}`;
      pTexts.push(
        isRest
          ? `...${pName}: (${ptStr})`
          : `${pName}${isOpt ? '?' : ''}: ${ptStr}`,
      );
    }
    const retStr = printImpl(
      checker.getReturnTypeOfSignature(sig),
      undefined,
      depth + 1,
      false,
      mode,
    );
    if (!retStr) return undefined;
    return `${tpText}(${pTexts.join(', ')})${asArrow ? ' => ' : ': '}${retStr}`;
  };

  const expandStructuralObject = (
    t: ts.Type,
    mode: 'in' | 'out',
    depth: number,
    isClassInstance: boolean,
  ): string | undefined => {
    const props = checker.getPropertiesOfType(t);
    const maxProps = isClassInstance ? 20 : 45;
    if (
      props.length > maxProps ||
      (depth >= 2 && isClassInstance && props.length > 8)
    ) {
      return undefined;
    }
    for (const p of props) {
      if (p.name.startsWith('#') || hasPrivateOrProtectedModifier(p)) {
        if (isClassInstance && mode === 'out') continue;
        return undefined;
      }
      if (
        String(p.escapedName).startsWith('__@') &&
        !resolveSymbolPropExpr(checker, p, exportedAccess) &&
        mode === 'in'
      ) {
        return undefined;
      }
      if (
        isSymbolInternal(p) &&
        !(p.flags & ts.SymbolFlags.Optional) &&
        mode === 'in'
      ) {
        return undefined;
      }
    }

    expanding.add(t);
    try {
      const entries: string[] = [];
      let totalChars = 0;
      for (const prop of props) {
        if (prop.name === 'prototype' || isNonPublicMember(prop)) continue;
        let keyCode: string;
        if (String(prop.escapedName).startsWith('__@')) {
          const symKey = resolveSymbolPropExpr(checker, prop, exportedAccess);
          if (!symKey) continue;
          keyCode = symKey.bracketCode;
        } else {
          keyCode = propKeyCode(prop.name);
        }
        const pDecl = prop.valueDeclaration ?? prop.declarations?.[0] ?? anchor;
        if (
          isClassInstance &&
          mode === 'out' &&
          pDecl !== anchor &&
          pDecl.getSourceFile().fileName.includes('node_modules')
        ) {
          continue;
        }
        const pt = checker.getTypeOfSymbolAtLocation(prop, pDecl);
        const isOpt = Boolean(prop.flags & ts.SymbolFlags.Optional);
        const sigs = !isOpt ? pt.getCallSignatures() : [];

        if (sigs.length > 0 && !(prop.flags & ts.SymbolFlags.Property)) {
          let entry: string;
          if (sigs.length === 1) {
            const arrow = renderCallSigTypeString(
              sigs[0],
              mode,
              depth + 1,
              true,
            );
            if (!arrow) return undefined;
            entry = `${keyCode}: ${arrow}`;
          } else {
            const sigParts: string[] = [];
            for (const sig of sigs) {
              const s = renderCallSigTypeString(sig, mode, depth + 1, false);
              if (!s) return undefined;
              sigParts.push(s);
            }
            entry = `${keyCode}: { ${sigParts.join('; ')} }`;
          }
          totalChars += entry.length;
          if (totalChars > 4_000) return undefined;
          entries.push(entry);
          continue;
        }
        const ro = isReadonlyProperty(prop, checker);
        const ptStr = printImpl(pt, undefined, depth + 1, false, mode);
        if (!ptStr) return undefined;
        const entry = `${ro ? 'readonly ' : ''}${keyCode}${isOpt ? '?' : ''}: ${ptStr}`;
        totalChars += entry.length;
        if (totalChars > 4_000) return undefined;
        entries.push(entry);
      }

      for (const [kind, label] of [
        [ts.IndexKind.String, 'string'],
        [ts.IndexKind.Number, 'number'],
      ] as const) {
        const idx = checker.getIndexTypeOfType(t, kind);
        if (idx) {
          const idxStr = printImpl(idx, undefined, depth + 1, false, mode);
          if (!idxStr) return undefined;
          entries.push(`[k: ${label}]: ${idxStr}`);
        }
      }
      return `{ ${entries.join('; ')} }`;
    } finally {
      expanding.delete(t);
    }
  };

  const printImpl = (
    t: ts.Type,
    selfReplacement: string | undefined,
    depth: number,
    inAliasRhs: boolean,
    mode: 'in' | 'out',
  ): string | undefined => {
    if (t.flags & ts.TypeFlags.Any) return 'any';
    if (t.flags & ts.TypeFlags.UniqueESSymbol) {
      const uSym = resolveAliased(checker, (t as ts.UniqueESSymbolType).symbol);
      const access = exportedAccess.get(uSym);
      return access
        ? `typeof ${access}`
        : mode === 'out'
          ? 'symbol'
          : undefined;
    }

    const renderArgs = (args: readonly ts.Type[]): string[] | undefined => {
      const out = args.map(a =>
        printImpl(a, selfReplacement, depth + 1, false, mode),
      );
      return out.every((x): x is string => Boolean(x)) ? out : undefined;
    };

    if (!inAliasRhs && t.aliasSymbol) {
      const realAlias = resolveAliased(checker, t.aliasSymbol);
      const aliasAccess = exportedAccess.get(realAlias);
      if (aliasAccess && !(t.flags & ts.TypeFlags.EnumLiteral)) {
        const aArgs = t.aliasTypeArguments ?? [];
        if (aArgs.length === 0) {
          const hasReqParams = (realAlias.getDeclarations() ?? []).some(
            d =>
              ts.isTypeAliasDeclaration(d) &&
              Boolean(d.typeParameters?.some(tp => !tp.default)),
          );
          if (!hasReqParams) return aliasAccess;
        } else if (depth < 4) {
          const rendered = renderArgs(aArgs);
          if (rendered) return `${aliasAccess}<${rendered.join(', ')}>`;
        }
      }
    }

    const unexportedAlias = isUnexportedPkgAlias(t);
    const directSym =
      !t.aliasSymbol || unexportedAlias
        ? t.getSymbol() && resolveAliased(checker, t.getSymbol()!)
        : undefined;

    if (
      directSym &&
      exportedAccess.has(directSym) &&
      !(t.flags & ts.TypeFlags.EnumLiteral)
    ) {
      const access = exportedAccess.get(directSym)!;
      if (directSym.flags & ts.SymbolFlags.Enum) return access;
      const isClass = Boolean(directSym.flags & ts.SymbolFlags.Class);
      if (isClass && t === checker.getTypeOfSymbol(directSym)) {
        return `typeof ${access}`;
      }
      if (
        (isClass && t.getConstructSignatures().length === 0) ||
        (directSym.flags & ts.SymbolFlags.Interface &&
          !(directSym.flags & ts.SymbolFlags.Value))
      ) {
        const decls = isClass
          ? getOwnClassDeclarations(directSym)
          : (directSym.getDeclarations() ?? []).filter(
              ts.isInterfaceDeclaration,
            );
        const explicitCount = decls.reduce(
          (mx, d) => Math.max(mx, d.typeParameters?.length ?? 0),
          0,
        );
        if (explicitCount === 0) return access;
        const explicitArgs = checker
          .getTypeArguments(t as ts.TypeReference)
          .slice(0, explicitCount);
        if (explicitArgs.length > 0 && depth < 4) {
          const rendered = renderArgs(explicitArgs);
          if (rendered) return `${access}<${rendered.join(', ')}>`;
        }
      }
    }

    if (depth < 4 && containsUnexportedInPkgType(t, mode)) {
      if (t.isUnion() && !(t.flags & ts.TypeFlags.Boolean)) {
        const parts: string[] = [];
        let hasTrue = false;
        let hasFalse = false;
        let ok = true;
        for (const sub of t.types) {
          if (sub.flags & ts.TypeFlags.BooleanLiteral) {
            const txt = checker.typeToString(sub);
            if (txt === 'true') hasTrue = true;
            else if (txt === 'false') hasFalse = true;
            else parts.push(txt);
            continue;
          }
          const s = printImpl(sub, selfReplacement, depth, false, mode);
          if (!s) {
            ok = false;
            break;
          }
          parts.push(`(${s})`);
        }
        if (ok) {
          if (hasTrue && hasFalse) parts.push('boolean');
          else if (hasTrue) parts.push('true');
          else if (hasFalse) parts.push('false');
          if (parts.length > 0) return Array.from(new Set(parts)).join(' | ');
        }
      }
      if (t.isIntersection()) {
        const rendered = renderArgs(t.types);
        if (rendered && rendered.length > 0) {
          return Array.from(new Set(rendered.map(s => `(${s})`))).join(' & ');
        }
      }
      if (checker.isTupleType(t)) {
        const tRef = t as ts.TupleTypeReference;
        const elemTypes = checker.getTypeArguments(tRef);
        const elemFlags = tRef.target.elementFlags;
        const rendered = renderArgs(elemTypes);
        if (rendered) {
          const parts = rendered.map((s, i) => {
            const ef = elemFlags[i] ?? ts.ElementFlags.Required;
            return ef & ts.ElementFlags.Rest
              ? `...Array<${s}>`
              : ef & ts.ElementFlags.Optional
                ? `(${s})?`
                : s;
          });
          return `${tRef.target.readonly ? 'readonly ' : ''}[${parts.join(', ')}]`;
        }
      }
      if (checker.isArrayType(t)) {
        const elem = checker.getTypeArguments(t as ts.TypeReference)[0];
        const elemStr = elem
          ? printImpl(elem, selfReplacement, depth + 1, false, mode)
          : undefined;
        if (elemStr) {
          return `${t.getSymbol()?.name === 'ReadonlyArray' ? 'ReadonlyArray' : 'Array'}<${elemStr}>`;
        }
      }
      if (!unexportedAlias) {
        const gSym = t.getSymbol();
        const gArgs = checker.getTypeArguments(t as ts.TypeReference);
        if (
          gSym &&
          gArgs.length > 0 &&
          EXPANDABLE_GLOBAL_GENERICS.has(gSym.name) &&
          !isSymbolDeclaredInPkg(gSym, absPrefixCmp)
        ) {
          const rendered = renderArgs(gArgs);
          if (rendered) return `${gSym.name}<${rendered.join(', ')}>`;
        }
      } else if (
        t.aliasSymbol?.name === 'Record' &&
        (t.aliasTypeArguments?.length ?? 0) === 2
      ) {
        const rendered = renderArgs(t.aliasTypeArguments!);
        if (rendered) return `Record<${rendered.join(', ')}>`;
      }

      const callSigs = t.getCallSignatures();
      if (
        callSigs.length > 0 &&
        t.getConstructSignatures().length === 0 &&
        checker.getPropertiesOfType(t).length === 0
      ) {
        if (callSigs.length === 1) {
          const fnStr = renderCallSigTypeString(callSigs[0], mode, depth, true);
          if (fnStr) return `(${fnStr})`;
        } else {
          const parts = callSigs.map(sig =>
            renderCallSigTypeString(sig, mode, depth, false),
          );
          if (parts.every((x): x is string => Boolean(x))) {
            return `{ ${parts.join('; ')} }`;
          }
        }
      }
    }

    const resolveCycleBackEdge = (u: ts.Type): string | undefined => {
      const tie = mode === 'in' ? 'never' : 'unknown';
      if (expanding.has(u)) return tie;
      if (checker.isArrayType(u)) {
        const elem = checker.getTypeArguments(u as ts.TypeReference)[0];
        if (elem && expanding.has(elem)) {
          return `${u.getSymbol()?.name === 'ReadonlyArray' ? 'ReadonlyArray' : 'Array'}<${tie}>`;
        }
      }
      if (
        u.isUnion() &&
        !(u.flags & ts.TypeFlags.Boolean) &&
        u.types.some(sub => Boolean(resolveCycleBackEdge(sub)))
      ) {
        const parts: string[] = [];
        for (const sub of u.types) {
          const s =
            resolveCycleBackEdge(sub) ??
            printImpl(sub, selfReplacement, depth, false, mode);
          if (!s) return undefined;
          parts.push(`(${s})`);
        }
        return Array.from(new Set(parts)).join(' | ');
      }
      return undefined;
    };
    const cycleTie = resolveCycleBackEdge(t);
    if (cycleTie) return cycleTie;

    const isClassExpand = isExpandableUnexportedPkgClass(t, mode);
    if (
      depth < 4 &&
      !expanding.has(t) &&
      t.getCallSignatures().length === 0 &&
      t.getConstructSignatures().length === 0 &&
      (isClassExpand ||
        isUnexportedPkgInterface(t) ||
        (unexportedAlias && Boolean(t.flags & ts.TypeFlags.Object)) ||
        (isUnexportedPkgAnonymousObject(t) &&
          containsUnexportedInPkgType(t, mode)))
    ) {
      const expanded = expandStructuralObject(t, mode, depth, isClassExpand);
      if (expanded) return expanded;
    }

    const flags =
      inAliasRhs || unexportedAlias
        ? TYPE_PRINT_FLAGS | ts.NodeBuilderFlags.InTypeAlias
        : TYPE_PRINT_FLAGS;
    const rawNode = checker.typeToTypeNode(t, anchor, flags);
    if (!rawNode) return undefined;
    const printed = printer.printNode(
      ts.EmitHint.Unspecified,
      sanitizeTypeNode(rawNode, selfReplacement, mode),
      consumerSf,
    );
    return printed.includes('/*unresolved*/') ? undefined : printed;
  };

  return (
    t: ts.Type,
    selfReplacement?: string,
    options?: PrintTypeOptions,
  ): string | undefined =>
    printImpl(
      t,
      selfReplacement,
      0,
      Boolean(options?.inAliasRhs),
      options?.mode ?? 'in',
    );
}

interface RenderedTypeParams {
  declText: string;
  argsText: string;
  minRequired: number;
  total: number;
  minArgsList: string[];
  fullDefaultArgsList: string[];
  names: Set<string>;
}

function buildRenderedTypeParams(
  specs: ReadonlyArray<{
    name: string;
    constraint?: ts.Type;
    defaultType?: ts.Type;
  }>,
  printType: TypePrinterFn,
  selfReplacement?: string,
): RenderedTypeParams | undefined {
  if (specs.length === 0) {
    return {
      declText: '',
      argsText: '',
      minRequired: 0,
      total: 0,
      minArgsList: [],
      fullDefaultArgsList: [],
      names: new Set(),
    };
  }
  const argNames: string[] = [];
  const constraints: Array<string | undefined> = [];
  const rawDefaults: Array<string | undefined> = [];
  let minRequired = 0;

  for (let i = 0; i < specs.length; i++) {
    const {name, constraint, defaultType} = specs[i];
    argNames.push(name);
    if (constraint) {
      const cStr = printType(constraint, selfReplacement, {mode: 'in'});
      if (!cStr) return undefined;
      constraints.push(cStr);
    } else {
      constraints.push(undefined);
    }
    if (defaultType) {
      const dStr = printType(defaultType, selfReplacement, {mode: 'in'});
      if (!dStr) return undefined;
      rawDefaults.push(dStr);
    } else {
      rawDefaults.push(undefined);
      minRequired = i + 1;
    }
  }

  const declParts = argNames.map((name, i) => {
    let part = name + (constraints[i] ? ` extends ${constraints[i]}` : '');
    if (i >= minRequired && rawDefaults[i] !== undefined) {
      part += ` = ${rawDefaults[i]}`;
    }
    return part;
  });
  const escapeRegex = (s: string): string =>
    s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const resolvedArgs: string[] = [];
  for (let i = 0; i < specs.length; i++) {
    let expr = rawDefaults[i] ?? constraints[i] ?? 'unknown';
    for (let j = 0; j < resolvedArgs.length; j++) {
      const replacement = `(${resolvedArgs[j]})`;
      expr = expr.replace(
        new RegExp(`\\b${escapeRegex(argNames[j])}\\b(?!\\s*[?:])`, 'g'),
        () => replacement,
      );
    }
    resolvedArgs.push(expr);
  }
  return {
    declText: `<${declParts.join(', ')}>`,
    argsText: `<${argNames.join(', ')}>`,
    minRequired,
    total: specs.length,
    minArgsList: resolvedArgs.slice(0, minRequired),
    fullDefaultArgsList: resolvedArgs,
    names: new Set(argNames),
  };
}

function renderTypeParamsFromDecls(
  checker: ts.TypeChecker,
  typeParamDecls: readonly ts.TypeParameterDeclaration[] | undefined,
  printType: TypePrinterFn,
  selfReplacement?: string,
): RenderedTypeParams | undefined {
  return buildRenderedTypeParams(
    (typeParamDecls ?? []).map(tp => ({
      name: tp.name.text,
      constraint: tp.constraint
        ? checker.getTypeFromTypeNode(tp.constraint)
        : undefined,
      defaultType: tp.default
        ? checker.getTypeFromTypeNode(tp.default)
        : undefined,
    })),
    printType,
    selfReplacement,
  );
}

function renderTypeParamsFromSignature(
  checker: ts.TypeChecker,
  sig: ts.Signature,
  printType: TypePrinterFn,
  selfReplacement?: string,
  outerNames?: ReadonlySet<string>,
): RenderedTypeParams | undefined {
  return buildRenderedTypeParams(
    (sig.getTypeParameters() ?? [])
      .filter(tp => !outerNames?.has(tp.symbol.name))
      .map(tp => {
        const tpDecl = tp.symbol.declarations?.find(
          ts.isTypeParameterDeclaration,
        );
        return {
          name: tp.symbol.name,
          constraint: checker.getBaseConstraintOfType(tp),
          defaultType: tpDecl?.default
            ? checker.getDefaultFromTypeParameter(tp)
            : undefined,
        };
      }),
    printType,
    selfReplacement,
  );
}

interface RenderedSignature {
  tParams: RenderedTypeParams;
  paramDecls: string[];
  callArgs: string[];
  minCallArgs: string[];
  hasOptionalOrRest: boolean;
  returnText: string;
}

function renderSignature(
  checker: ts.TypeChecker,
  sig: ts.Signature,
  entrySf: ts.SourceFile,
  printType: TypePrinterFn,
  selfReplacement?: string,
  outerTypeParamNames?: ReadonlySet<string>,
): RenderedSignature | undefined {
  const tParams = renderTypeParamsFromSignature(
    checker,
    sig,
    printType,
    selfReplacement,
    outerTypeParamNames,
  );
  if (!tParams) return undefined;
  const paramDecls: string[] = [];
  const callArgs: string[] = [];
  let minRequiredIndex = 0;
  let hasOptionalOrRest = false;

  for (const p of sig.getParameters()) {
    if (p.name === 'this') continue;
    const pDecl = p.valueDeclaration ?? p.declarations?.[0];
    const isRest = Boolean(
      pDecl && ts.isParameter(pDecl) && pDecl.dotDotDotToken,
    );
    const isOpt =
      !isRest &&
      Boolean(
        p.flags & ts.SymbolFlags.Optional ||
        (pDecl &&
          ts.isParameter(pDecl) &&
          (pDecl.questionToken || pDecl.initializer)),
      );
    const pt = checker.getTypeOfSymbolAtLocation(p, pDecl ?? entrySf);
    const ptStr = printType(pt, selfReplacement, {mode: 'in'});
    if (!ptStr) return undefined;
    const argName = `_a${paramDecls.length}`;
    if (isRest) {
      paramDecls.push(`...${argName}: (${ptStr})`);
      callArgs.push(`...${argName}`);
      if (pt.flags & ts.TypeFlags.TypeParameter) {
        minRequiredIndex = callArgs.length;
      } else {
        hasOptionalOrRest = true;
      }
    } else if (isOpt) {
      paramDecls.push(`${argName}?: ${ptStr}`);
      callArgs.push(argName);
      hasOptionalOrRest = true;
    } else {
      paramDecls.push(`${argName}: ${ptStr}`);
      callArgs.push(argName);
      minRequiredIndex = callArgs.length;
    }
  }
  const returnText = printType(
    checker.getReturnTypeOfSignature(sig),
    selfReplacement,
    {mode: 'out'},
  );
  if (!returnText) return undefined;
  return {
    tParams,
    paramDecls,
    callArgs,
    minCallArgs: callArgs.slice(0, minRequiredIndex),
    hasOptionalOrRest,
    returnText,
  };
}

function getSymbolDeclFile(
  pkgRootOrRepoRoot: string,
  sym: ts.Symbol,
): string | undefined {
  const d = sym.valueDeclaration ?? sym.declarations?.[0];
  const f = d?.getSourceFile().fileName;
  if (!f || f.includes('node_modules')) return undefined;
  const rel = toPosix(path.relative(pkgRootOrRepoRoot, f));
  return rel.startsWith('..') ? undefined : rel;
}

function isReadonlyProperty(
  prop: ts.Symbol,
  checker?: ts.TypeChecker,
): boolean {
  const roFn = (
    checker as unknown as {isReadonlySymbol?: (s: ts.Symbol) => boolean}
  )?.isReadonlySymbol;
  if (typeof roFn === 'function' && roFn.call(checker, prop)) return true;
  if (((prop as {checkFlags?: number}).checkFlags ?? 0) & 8) return true;
  if (
    prop.flags & ts.SymbolFlags.GetAccessor &&
    !(prop.flags & ts.SymbolFlags.SetAccessor)
  ) {
    return true;
  }
  const decls = prop.getDeclarations() ?? [];
  return (
    decls.length === 0 ||
    decls.some(
      d =>
        ts.canHaveModifiers(d) &&
        Boolean(
          ts
            .getModifiers(d)
            ?.some(m => m.kind === ts.SyntaxKind.ReadonlyKeyword),
        ),
    )
  );
}

function isTypeOnlyExportChain(
  checker: ts.TypeChecker,
  sym: ts.Symbol,
): boolean {
  let cur: ts.Symbol | undefined = sym;
  const seen = new Set<ts.Symbol>();
  while (cur && !seen.has(cur)) {
    seen.add(cur);
    const decls = cur.getDeclarations() ?? [];
    if (
      decls.length > 0 &&
      decls.every(d => {
        if (ts.isExportSpecifier(d)) {
          return Boolean(d.isTypeOnly || d.parent.parent.isTypeOnly);
        }
        if (ts.isImportSpecifier(d)) {
          return Boolean(
            d.isTypeOnly ||
            d.parent.parent.phaseModifier === ts.SyntaxKind.TypeKeyword,
          );
        }
        if (ts.isImportClause(d) || ts.isNamespaceImport(d)) {
          return (
            (ts.isImportClause(d) ? d : d.parent).phaseModifier ===
            ts.SyntaxKind.TypeKeyword
          );
        }
        return (
          (ts.isImportEqualsDeclaration(d) && d.isTypeOnly) ||
          (ts.isExportDeclaration(d) && d.isTypeOnly)
        );
      })
    ) {
      return true;
    }
    if (!(cur.flags & ts.SymbolFlags.Alias)) break;
    try {
      const next = checker.getImmediateAliasedSymbol(cur);
      if (!next || next === cur) break;
      cur = next;
    } catch {
      break;
    }
  }
  return false;
}

const getOwnClassDeclarations = (sym: ts.Symbol): ts.ClassDeclaration[] =>
  (sym.getDeclarations() ?? []).filter(ts.isClassDeclaration);

function generateConsumerProbes(
  program: ts.Program,
  pkgDir: string,
  repoRoot: string,
  entryFile: string,
  consumerFile: string,
): {importHeader: string; probes: ConsumerProbe[]} {
  const checker = program.getTypeChecker();
  const entrySf = program.getSourceFile(entryFile);
  const consumerSf = program.getSourceFile(consumerFile);
  if (!entrySf || !consumerSf || consumerSf.statements.length === 0) {
    return {importHeader: 'export {};', probes: []};
  }
  const anchor = consumerSf.statements[consumerSf.statements.length - 1];
  const surface = resolveEntrypointSurface(
    checker,
    pkgDir,
    entryFile,
    entrySf,
    program.getCompilerOptions(),
  );
  const variance = collectVarianceRoles(checker, pkgDir, surface, entrySf);
  const printType = createTypePrinter(
    checker,
    pkgDir,
    consumerSf,
    anchor,
    variance.exportedAccess,
  );

  const probes: ConsumerProbe[] = [];
  const visitedNamespaces = new Set<ts.Symbol>();
  let nextId = 0;

  const addProbe = (
    symbolName: string,
    label: string,
    code: string,
    sym?: ts.Symbol,
  ): void => {
    const id = nextId++;
    probes.push({
      id,
      symbolName,
      label,
      declFile: sym ? getSymbolDeclFile(repoRoot, sym) : undefined,
      code: `function __probe_${id}() {\n${code}\n}`,
    });
  };

  const emitReturnOrVoidCall = (
    callCode: string,
    returnText: string,
    overloadCount: number,
  ): string =>
    returnText === 'void' && overloadCount > 1
      ? `void (${callCode});`
      : `return ${callCode};`;

  const emitWellKnownSymbolChecks = (
    symbolName: string,
    ownerLabel: string,
    selfTypeText: string,
    instType: ts.Type,
    outerTParamsDecl: string,
    sym: ts.Symbol,
  ): void => {
    const wks: Array<[string, string]> = [
      ['__@iterator', 'Symbol.iterator'],
      ['__@asyncIterator', 'Symbol.asyncIterator'],
      ['__@dispose', 'Symbol.dispose'],
      ['__@asyncDispose', 'Symbol.asyncDispose'],
    ];
    for (const [prefix, expr] of wks) {
      const match = instType
        .getProperties()
        .find(
          p =>
            String(p.escapedName) === prefix ||
            String(p.escapedName).startsWith(`${prefix}@`),
        );
      if (match && !isNonPublicMember(match)) {
        addProbe(
          symbolName,
          `${ownerLabel} [${expr}]`,
          `  function _wks${outerTParamsDecl}(_s: ${selfTypeText}) { return _s[${expr}](); }\n  void _wks;`,
          sym,
        );
      }
    }
  };

  const emitSigListProbes = (
    sigs: readonly ts.Signature[],
    symName: string,
    label: string,
    callTarget: string,
    fnName: string,
    sym: ts.Symbol,
    opts?: {
      isCtor?: boolean;
      selfRep?: string;
      outerNames?: ReadonlySet<string>;
      wrapOuter?: {fn: string; tDecl: string; selfParam: string};
      includeDefaultTParamCall?: boolean;
    },
  ): void => {
    for (const sig of sigs) {
      if (sig.declaration && isDeclarationInternal(sig.declaration)) continue;
      const r = renderSignature(
        checker,
        sig,
        entrySf,
        printType,
        opts?.selfRep,
        opts?.outerNames,
      );
      if (!r) continue;
      const pfx = opts?.isCtor ? 'new ' : '';
      const indent = opts?.wrapOuter ? '      ' : '    ';
      const minCall = r.hasOptionalOrRest
        ? `\n${indent}void ${pfx}${callTarget}${r.tParams.argsText}(${r.minCallArgs.join(', ')});`
        : '';
      const defCall =
        opts?.includeDefaultTParamCall &&
        r.tParams.minRequired === 0 &&
        r.tParams.total > 0
          ? `\n${indent}void ${pfx}${callTarget}(${r.callArgs.join(', ')});`
          : '';
      const fullCall = `${pfx}${callTarget}${r.tParams.argsText}(${r.callArgs.join(', ')})`;
      const bodyStmt = opts?.isCtor
        ? `return ${fullCall};`
        : emitReturnOrVoidCall(fullCall, r.returnText, sigs.length);
      const inner = `function ${fnName}${r.tParams.declText}(${r.paramDecls.join(', ')}): ${r.returnText} {${minCall}${defCall}\n${indent}${bodyStmt}\n${opts?.wrapOuter ? '    ' : '  '}}`;
      const code = opts?.wrapOuter
        ? `  function ${opts.wrapOuter.fn}${opts.wrapOuter.tDecl}(${opts.wrapOuter.selfParam}) {\n    ${inner}\n    void ${fnName};\n  }\n  void ${opts.wrapOuter.fn};`
        : `  ${inner}\n  void ${fnName};`;
      addProbe(symName, label, code, sym);
    }
  };

  const resolveMemberExpr = (
    ownerExpr: string,
    prop: ts.Symbol,
  ): {access: string; display: string} | undefined => {
    if (!String(prop.escapedName).startsWith('__@')) {
      return {access: propAccess(ownerExpr, prop.name), display: prop.name};
    }
    const symExpr = resolveSymbolPropExpr(
      checker,
      prop,
      variance.exportedAccess,
    );
    if (!symExpr || symExpr.bracketCode.startsWith('[Symbol.')) {
      return undefined;
    }
    return {
      access: `${ownerExpr}${symExpr.bracketCode}`,
      display: symExpr.bracketCode,
    };
  };

  const emitClassProbes = (
    accessExpr: string,
    typeAccessExpr: string,
    displayName: string,
    realSym: ts.Symbol,
  ): void => {
    const valType = checker.getTypeOfSymbolAtLocation(realSym, entrySf);
    const instType = checker.getDeclaredTypeOfSymbol(realSym);
    const classDecls = getOwnClassDeclarations(realSym);
    const primaryClassDecl = classDecls[0];
    const isAbstract = Boolean(
      primaryClassDecl &&
      ts
        .getModifiers(primaryClassDecl)
        ?.some(m => m.kind === ts.SyntaxKind.AbstractKeyword),
    );
    const ctorDecls = classDecls.flatMap(cd =>
      cd.members.filter(ts.isConstructorDeclaration),
    );
    const nonImplCtors =
      ctorDecls.length > 1 ? ctorDecls.filter(c => !c.body) : ctorDecls;
    const activeCtors = nonImplCtors.length > 0 ? nonImplCtors : ctorDecls;
    const hasPrivateCtor =
      activeCtors.length > 0 &&
      activeCtors.every(c =>
        ts.getModifiers(c)?.some(m => m.kind === ts.SyntaxKind.PrivateKeyword),
      );
    const hasProtectedCtor =
      !hasPrivateCtor &&
      activeCtors.length > 0 &&
      activeCtors.every(c =>
        ts
          .getModifiers(c)
          ?.some(m => m.kind === ts.SyntaxKind.ProtectedKeyword),
      );

    const classTParams = renderTypeParamsFromDecls(
      checker,
      primaryClassDecl?.typeParameters,
      printType,
    );
    if (!classTParams) return;
    const instRef = `${typeAccessExpr}${classTParams.argsText}`;

    if (classTParams.minRequired < classTParams.total) {
      const minArgs =
        classTParams.minRequired > 0
          ? `<${classTParams.minArgsList.join(', ')}>`
          : '';
      const fullArgs = `<${classTParams.fullDefaultArgsList.join(', ')}>`;
      addProbe(
        displayName,
        `Class '${displayName}' default type parameters`,
        `  type _Def = ${typeAccessExpr}${minArgs};\n  type _Exp = ${typeAccessExpr}${fullArgs};\n  const _d: __BccStrictObj<_Exp> = null! as __BccStrictObj<_Def>;\n  void _d;`,
        realSym,
      );
    }

    emitSigListProbes(
      valType.getCallSignatures(),
      displayName,
      `Callable class '${displayName}(...)'`,
      accessExpr,
      '_ccall',
      realSym,
      {selfRep: instRef},
    );
    emitSigListProbes(
      instType.getCallSignatures(),
      displayName,
      `Class '${displayName}' instance call signature`,
      '_self',
      '_c',
      realSym,
      {
        selfRep: instRef,
        outerNames: classTParams.names,
        wrapOuter: {
          fn: '_icall',
          tDecl: classTParams.declText,
          selfParam: `_self: ${instRef}`,
        },
      },
    );
    if (!isAbstract && !hasPrivateCtor && !hasProtectedCtor) {
      emitSigListProbes(
        valType.getConstructSignatures(),
        displayName,
        `Constructor 'new ${displayName}(...)'`,
        accessExpr,
        '_ctor',
        realSym,
        {isCtor: true, selfRep: instRef},
      );
    }

    if (!hasPrivateCtor && primaryClassDecl) {
      if (hasProtectedCtor) {
        for (const protCtor of activeCtors) {
          if (
            isDeclarationInternal(protCtor) ||
            !ts
              .getModifiers(protCtor)
              ?.some(m => m.kind === ts.SyntaxKind.ProtectedKeyword)
          ) {
            continue;
          }
          const sig = checker.getSignatureFromDeclaration(protCtor);
          const r = sig
            ? renderSignature(
                checker,
                sig,
                entrySf,
                printType,
                instRef,
                classTParams.names,
              )
            : undefined;
          if (r) {
            const minSuper = r.hasOptionalOrRest
              ? ` if (Math.random() < 0) { super(${r.minCallArgs.join(', ')}); }`
              : '';
            addProbe(
              displayName,
              `Class '${displayName}' protected constructor`,
              `  abstract class _SubCtor${classTParams.declText} extends ${accessExpr}${classTParams.argsText} {\n    constructor(${r.paramDecls.join(', ')}) { super(${r.callArgs.join(', ')});${minSuper} }\n  }\n  void _SubCtor;`,
              realSym,
            );
          }
        }
      }

      const protectedChecks: string[] = [];
      let protIdx = 0;
      for (const cd of classDecls) {
        for (const member of cd.members) {
          if (
            isDeclarationInternal(member) ||
            !member.name ||
            !ts.isIdentifier(member.name)
          ) {
            continue;
          }
          const mName = member.name.text;
          if (
            ts.isMethodDeclaration(member) &&
            Boolean(member.body) &&
            cd.members.some(
              other =>
                other !== member &&
                ts.isMethodDeclaration(other) &&
                !other.body &&
                Boolean(
                  other.name &&
                  ts.isIdentifier(other.name) &&
                  other.name.text === mName,
                ),
            )
          ) {
            continue;
          }
          const mods = ts.canHaveModifiers(member)
            ? ts.getModifiers(member)
            : undefined;
          if (!mods?.some(m => m.kind === ts.SyntaxKind.ProtectedKeyword)) {
            continue;
          }
          const isStatic = Boolean(
            mods?.some(m => m.kind === ts.SyntaxKind.StaticKeyword),
          );
          const mSym = checker.getSymbolAtLocation(member.name);
          if (!mSym) continue;
          const idx = protIdx++;
          const selfTarget = isStatic ? '_Sub' : 'this';
          const staticKw = isStatic ? 'static ' : '';
          const outerNames = isStatic ? undefined : classTParams.names;
          const selfRep = isStatic ? undefined : instRef;

          if (ts.isMethodDeclaration(member)) {
            const sig = checker.getSignatureFromDeclaration(member);
            const r = sig
              ? renderSignature(
                  checker,
                  sig,
                  entrySf,
                  printType,
                  selfRep,
                  outerNames,
                )
              : undefined;
            if (r) {
              const callStmt = emitReturnOrVoidCall(
                `${selfTarget}.${mName}${r.tParams.argsText}(${r.callArgs.join(', ')})`,
                r.returnText,
                2,
              );
              protectedChecks.push(
                `    ${staticKw}_chk_${idx}_${mName}${r.tParams.declText}(${r.paramDecls.join(', ')}): ${r.returnText} { ${callStmt} }`,
              );
            }
          } else {
            const pt = checker.getTypeOfSymbolAtLocation(mSym, member);
            const ptOut = printType(pt, selfRep, {mode: 'out'});
            const ptIn = printType(pt, selfRep, {mode: 'in'});
            const isAbstractProp = Boolean(
              mods?.some(m => m.kind === ts.SyntaxKind.AbstractKeyword),
            );
            const writeCode =
              !isReadonlyProperty(mSym) && !isAbstractProp && ptIn
                ? `${selfTarget}.${mName} = null! as (${ptIn}); `
                : '';
            if (ptOut) {
              protectedChecks.push(
                `    ${staticKw}_chk_p_${idx}_${mName}(): ${ptOut} { ${writeCode}return ${selfTarget}.${mName}; }`,
              );
            }
          }
        }
      }

      if (protectedChecks.length > 0) {
        const clsTypeArgs = protectedChecks.every(l =>
          l.trimStart().startsWith('static '),
        )
          ? ''
          : classTParams.argsText;
        const clsTypeDecl = clsTypeArgs ? classTParams.declText : '';
        addProbe(
          displayName,
          `Class '${displayName}' subclass / protected contract`,
          `  abstract class _Sub${clsTypeDecl} extends ${accessExpr}${clsTypeArgs} {\n${protectedChecks.join('\n')}\n  }\n  void _Sub;`,
          realSym,
        );
      }

      if (isAbstract) {
        const impls: string[] = [];
        let allRenderable = true;
        for (const prop of checker.getPropertiesOfType(instType)) {
          const absDecl = (prop.getDeclarations() ?? []).find(
            d =>
              ts.canHaveModifiers(d) &&
              Boolean(
                ts
                  .getModifiers(d)
                  ?.some(k => k.kind === ts.SyntaxKind.AbstractKeyword),
              ),
          );
          if (!absDecl) continue;
          if (!isValidIdent(prop.name) || prop.name.startsWith('__@')) {
            allRenderable = false;
            break;
          }
          const pt = checker.getTypeOfSymbolAtLocation(prop, absDecl);
          const isOpt = Boolean(prop.flags & ts.SymbolFlags.Optional);
          const sigs = pt.getCallSignatures();
          if (sigs.length > 0 && !(prop.flags & ts.SymbolFlags.Property)) {
            if (sigs.length > 1) {
              for (const sig of sigs) {
                const r = renderSignature(
                  checker,
                  sig,
                  entrySf,
                  printType,
                  instRef,
                  classTParams.names,
                );
                if (!r) {
                  allRenderable = false;
                  break;
                }
                impls.push(
                  `    ${prop.name}${r.tParams.declText}(${r.paramDecls.join(', ')}): ${r.returnText};`,
                );
              }
              if (!allRenderable) break;
              impls.push(
                `    ${prop.name}(..._a: never[]): any { void _a; return null!; }`,
              );
            } else {
              const r = renderSignature(
                checker,
                sigs[0],
                entrySf,
                printType,
                instRef,
                classTParams.names,
              );
              if (!r) {
                allRenderable = false;
                break;
              }
              impls.push(
                `    ${prop.name}${isOpt ? '?' : ''}${r.tParams.declText}(${r.paramDecls.join(', ')}): ${r.returnText} { void [${r.callArgs.map(a => a.replace(/^\.\.\./, '')).join(', ')}]; return null!; }`,
              );
            }
          } else {
            const ptStr = printType(pt, instRef, {mode: 'out'});
            if (!ptStr) {
              allRenderable = false;
              break;
            }
            const protMod = hasPrivateOrProtectedModifier(prop)
              ? 'protected '
              : '';
            if (prop.flags & ts.SymbolFlags.GetAccessor) {
              impls.push(
                `    ${protMod}get ${prop.name}(): ${ptStr} { return null!; }`,
              );
              if (prop.flags & ts.SymbolFlags.SetAccessor) {
                impls.push(
                  `    ${protMod}set ${prop.name}(_v: ${ptStr}) { void _v; }`,
                );
              }
            } else {
              impls.push(
                `    ${protMod}${prop.name}${isOpt ? '?' : ''}: ${ptStr} = null!;`,
              );
            }
          }
        }
        if (allRenderable) {
          addProbe(
            displayName,
            `Abstract class '${displayName}' concrete implementation contract`,
            `  class _Concrete${classTParams.declText} extends ${accessExpr}${classTParams.argsText} {\n${impls.join('\n')}\n  }\n  void _Concrete;`,
            realSym,
          );
        }
      }

      const heritage = primaryClassDecl.heritageClauses?.find(
        h => h.token === ts.SyntaxKind.ExtendsKeyword,
      );
      if (heritage && heritage.types.length > 0) {
        const superStr = printType(
          checker.getTypeAtLocation(heritage.types[0]),
          instRef,
          {mode: 'out'},
        );
        if (superStr) {
          addProbe(
            displayName,
            `Class '${displayName}' base class contract`,
            `  function _super${classTParams.declText}(_s: ${instRef}): ${superStr} { return _s; }\n  void _super;`,
            realSym,
          );
        }
      }
    }

    for (const sProp of checker
      .getPropertiesOfType(valType)
      .slice(0, MAX_MEMBERS_PER_CONTAINER)) {
      if (sProp.name === 'prototype' || isNonPublicMember(sProp)) continue;
      const sDecls = sProp.getDeclarations() ?? [];
      if (
        sDecls.length > 0 &&
        sDecls.every(d => d.getSourceFile().fileName.includes('node_modules'))
      ) {
        continue;
      }
      const m = resolveMemberExpr(accessExpr, sProp);
      if (!m) continue;
      const pt = checker.getTypeOfSymbolAtLocation(
        sProp,
        sProp.valueDeclaration ?? sDecls[0] ?? entrySf,
      );
      const sigs = pt.getCallSignatures();
      if (sigs.length > 0 && !(sProp.flags & ts.SymbolFlags.Property)) {
        emitSigListProbes(
          sigs,
          displayName,
          `Class '${displayName}' static method '${m.display}'`,
          m.access,
          '_sm',
          sProp,
        );
      } else {
        const ptOut = printType(pt, undefined, {mode: 'out'});
        if (!ptOut) continue;
        const ptIn = !isReadonlyProperty(sProp)
          ? printType(pt, undefined, {mode: 'in'})
          : undefined;
        const writeCheck = ptIn ? `\n  ${m.access} = null! as (${ptIn});` : '';
        addProbe(
          displayName,
          `Class '${displayName}' static property '${m.display}'`,
          `  const _sp: ${ptOut} = ${m.access}; void _sp;${writeCheck}`,
          sProp,
        );
      }
    }

    emitWellKnownSymbolChecks(
      displayName,
      `Class '${displayName}'`,
      instRef,
      instType,
      classTParams.declText,
      realSym,
    );

    let emittedMembers = 0;
    for (const prop of checker.getPropertiesOfType(instType)) {
      if (emittedMembers >= MAX_MEMBERS_PER_CONTAINER) break;
      if (isNonPublicMember(prop)) continue;
      const decls = prop.getDeclarations() ?? [];
      if (
        decls.length > 0 &&
        decls.every(d => d.getSourceFile().fileName.includes('node_modules'))
      ) {
        continue;
      }
      const m = resolveMemberExpr('_self', prop);
      if (!m) continue;
      emittedMembers++;
      const pt = checker.getTypeOfSymbolAtLocation(
        prop,
        prop.valueDeclaration ?? decls[0] ?? entrySf,
      );
      const isOpt = Boolean(prop.flags & ts.SymbolFlags.Optional);
      const sigs = !isOpt ? pt.getCallSignatures() : [];

      if (sigs.length > 0 && !(prop.flags & ts.SymbolFlags.Property)) {
        emitSigListProbes(
          sigs,
          displayName,
          `Class '${displayName}' method '${m.display}'`,
          m.access,
          '_m',
          prop,
          {
            selfRep: instRef,
            outerNames: classTParams.names,
            wrapOuter: {
              fn: '_cls',
              tDecl: classTParams.declText,
              selfParam: `_self: ${instRef}`,
            },
          },
        );
      } else {
        const ptOut = printType(pt, instRef, {mode: 'out'});
        if (!ptOut) continue;
        const ptIn = !isReadonlyProperty(prop, checker)
          ? printType(pt, instRef, {mode: 'in'})
          : undefined;
        const writeStmt = ptIn ? `\n    ${m.access} = null! as (${ptIn});` : '';
        addProbe(
          displayName,
          `Class '${displayName}' property '${m.display}'`,
          `  function _prop${classTParams.declText}(_self: ${instRef}): ${ptOut} {\n    const _rv: ${ptOut} = ${m.access};${writeStmt}\n    return _rv;\n  }\n  void _prop;`,
          prop,
        );
      }
    }
  };

  const emitTypeOrInterfaceProbes = (
    typeAccessExpr: string,
    displayName: string,
    realSym: ts.Symbol,
  ): void => {
    const decls = realSym.getDeclarations() ?? [];
    const ifaceDecls = decls.filter(ts.isInterfaceDeclaration);
    const aliasDecl = decls.find(ts.isTypeAliasDeclaration);
    const classDecls = decls.filter(ts.isClassDeclaration);
    const tParams = renderTypeParamsFromDecls(
      checker,
      ifaceDecls[0]?.typeParameters ??
        aliasDecl?.typeParameters ??
        classDecls[0]?.typeParameters,
      printType,
    );
    if (!tParams) return;

    const targetRef = `${typeAccessExpr}${tParams.argsText}`;
    const isInput = variance.inputSymbols.has(realSym);
    const isOutput = variance.outputSymbols.has(realSym);
    const checkAsInput = isInput || !isOutput;
    const checkAsOutput = isOutput;

    if (tParams.minRequired < tParams.total) {
      const minArgs =
        tParams.minRequired > 0 ? `<${tParams.minArgsList.join(', ')}>` : '';
      const fullArgs = `<${tParams.fullDefaultArgsList.join(', ')}>`;
      const checks: string[] = [];
      if (checkAsInput) {
        checks.push('  const _di: _Def = null! as _Exp; void _di;');
      }
      if (checkAsOutput) {
        checks.push('  const _do: _Exp = null! as _Def; void _do;');
      }
      if (checks.length === 0) {
        checks.push('  const _d: _Def | undefined = undefined; void _d;');
      }
      addProbe(
        displayName,
        `Type '${displayName}' default type parameters`,
        `  type _Def = ${typeAccessExpr}${minArgs};\n  type _Exp = ${typeAccessExpr}${fullArgs};\n${checks.join('\n')}`,
        realSym,
      );
    } else {
      addProbe(
        displayName,
        `Type '${displayName}' export existence`,
        `  function _ex${tParams.declText}(_x: ${targetRef}) { return _x; }\n  void _ex;`,
        realSym,
      );
    }

    const declType =
      aliasDecl && ifaceDecls.length === 0 && classDecls.length === 0
        ? checker.getTypeFromTypeNode(aliasDecl.type)
        : checker.getDeclaredTypeOfSymbol(realSym);

    if (aliasDecl && ifaceDecls.length === 0 && classDecls.length === 0) {
      const callSigs = declType.getCallSignatures();
      const props = checker.getPropertiesOfType(declType);
      if (
        callSigs.length > 0 &&
        !(declType.flags & ts.TypeFlags.UnionOrIntersection) &&
        props.length === 0
      ) {
        emitSigListProbes(
          callSigs,
          displayName,
          `Callable type '${displayName}' call contract`,
          '_fn',
          '_c',
          realSym,
          {
            outerNames: tParams.names,
            wrapOuter: {
              fn: '_outer',
              tDecl: tParams.declText,
              selfParam: `_fn: ${targetRef}`,
            },
          },
        );
        const fnText = printType(declType, undefined, {
          inAliasRhs: true,
          mode: 'in',
        });
        if (fnText) {
          addProbe(
            displayName,
            `Callable type '${displayName}' handler assignability`,
            `  function _impl${tParams.declText}(): ${targetRef} { return null! as (${fnText}); }\n  void _impl;`,
            realSym,
          );
        }
        return;
      }

      const isIntersectionOfObjects =
        declType.isIntersection() &&
        checker.getPropertiesOfType(declType).length > 0 &&
        declType.types.every(sub => Boolean(sub.flags & ts.TypeFlags.Object));
      if (!ts.isTypeLiteralNode(aliasDecl.type) && !isIntersectionOfObjects) {
        if (checkAsInput) {
          const rhsIn = printType(declType, undefined, {
            inAliasRhs: true,
            mode: 'in',
          });
          if (rhsIn) {
            addProbe(
              displayName,
              `Type alias '${displayName}' assignability`,
              `  function _aliasIn${tParams.declText}(): ${targetRef} { return null! as (${rhsIn}); }\n  void _aliasIn;`,
              realSym,
            );
          }
        }
        if (checkAsOutput) {
          const rhsOut = printType(declType, undefined, {
            inAliasRhs: true,
            mode: 'out',
          });
          if (rhsOut) {
            addProbe(
              displayName,
              `Return type alias '${displayName}' assignability`,
              `  function _aliasOut${tParams.declText}(_r: ${targetRef}): ${rhsOut} { return _r; }\n  void _aliasOut;`,
              realSym,
            );
          }
        }
        return;
      }
    }

    const allProps = checker
      .getPropertiesOfType(declType)
      .filter(p => !isNonPublicMember(p));

    emitWellKnownSymbolChecks(
      displayName,
      `Interface '${displayName}'`,
      targetRef,
      declType,
      tParams.declText,
      realSym,
    );

    const ifaceCallSigs = declType.getCallSignatures();
    emitSigListProbes(
      ifaceCallSigs,
      displayName,
      `Interface '${displayName}' call signature`,
      '_fn',
      '_s',
      realSym,
      {
        selfRep: targetRef,
        outerNames: tParams.names,
        wrapOuter: {
          fn: '_ic',
          tDecl: tParams.declText,
          selfParam: `_fn: ${targetRef}`,
        },
      },
    );
    const ifaceCtorSigs = declType.getConstructSignatures();
    emitSigListProbes(
      ifaceCtorSigs,
      displayName,
      `Interface '${displayName}' construct signature`,
      '_ctor',
      '_s',
      realSym,
      {
        isCtor: true,
        selfRep: targetRef,
        outerNames: tParams.names,
        wrapOuter: {
          fn: '_inw',
          tDecl: tParams.declText,
          selfParam: `_ctor: ${targetRef}`,
        },
      },
    );

    const stringIdx = checker.getIndexTypeOfType(declType, ts.IndexKind.String);
    const numberIdx = checker.getIndexTypeOfType(declType, ts.IndexKind.Number);
    const stringIdxStr = stringIdx
      ? printType(stringIdx, targetRef, {mode: 'in'})
      : undefined;
    const numberIdxStr = numberIdx
      ? printType(numberIdx, targetRef, {mode: 'in'})
      : undefined;

    const extendsOrIsClass =
      classDecls.length > 0 ||
      checker
        .getPropertiesOfType(declType)
        .some(
          p => p.name.startsWith('#') || hasPrivateOrProtectedModifier(p),
        ) ||
      ifaceDecls.some(id =>
        id.heritageClauses?.some(
          hc =>
            hc.token === ts.SyntaxKind.ExtendsKeyword &&
            hc.types.some(ht => {
              const bt = checker.getTypeAtLocation(ht);
              const bSym =
                bt.getSymbol() && resolveAliased(checker, bt.getSymbol()!);
              return Boolean(bSym && bSym.flags & ts.SymbolFlags.Class);
            }),
        ),
      );

    const props = allProps.slice(0, MAX_MEMBERS_PER_CONTAINER);
    const shapeEntries: string[] = [];
    const keyParts: string[] = [];
    let allPropsPrintable =
      !extendsOrIsClass && allProps.length <= MAX_MEMBERS_PER_CONTAINER;

    for (const prop of props) {
      let propKeyExpr: string;
      let keyTypeExpr: string;
      let mAccess: string;
      let propIndexTypeCode: string | undefined;
      let propDisplay = prop.name;
      const isWellKnownSym =
        String(prop.escapedName).startsWith('__@') &&
        WELL_KNOWN_SYMBOL_EXPRS.some(
          ([pfx]) =>
            String(prop.escapedName) === pfx ||
            String(prop.escapedName).startsWith(`${pfx}@`),
        );

      if (String(prop.escapedName).startsWith('__@')) {
        const symExpr = resolveSymbolPropExpr(
          checker,
          prop,
          variance.exportedAccess,
        );
        if (!symExpr) {
          if (!(prop.flags & ts.SymbolFlags.Optional)) {
            allPropsPrintable = false;
          }
          continue;
        }
        propKeyExpr = symExpr.bracketCode;
        keyTypeExpr = symExpr.keyTypeCode;
        mAccess = `_s${symExpr.bracketCode}`;
        propIndexTypeCode = `[${symExpr.keyTypeCode}]`;
        propDisplay = symExpr.bracketCode;
      } else {
        propKeyExpr = propKeyCode(prop.name);
        keyTypeExpr = JSON.stringify(prop.name);
        mAccess = propAccess('_s', prop.name);
        propIndexTypeCode = `[${JSON.stringify(prop.name)}]`;
      }

      const pDecl: ts.Node =
        prop.valueDeclaration ?? prop.declarations?.[0] ?? entrySf;
      const pt = checker.getTypeOfSymbolAtLocation(prop, pDecl);
      const isOpt = Boolean(prop.flags & ts.SymbolFlags.Optional);
      const ptIn = printType(pt, targetRef, {mode: 'in'});
      const ptOut = printType(pt, targetRef, {mode: 'out'});
      keyParts.push(keyTypeExpr);

      if (!ptIn) {
        allPropsPrintable = false;
      } else {
        shapeEntries.push(`${propKeyExpr}${isOpt ? '?' : ''}: ${ptIn}`);
      }
      if (isWellKnownSym) continue;

      const sigs = !isOpt ? pt.getCallSignatures() : [];
      const nonNullPt = checker.getNonNullableType(pt);
      const nonNullSigs = nonNullPt.getCallSignatures();

      if (
        checkAsInput &&
        propIndexTypeCode &&
        nonNullSigs.length === 1 &&
        checker.getPropertiesOfType(nonNullPt).length === 0 &&
        Boolean(prop.flags & ts.SymbolFlags.Method) &&
        !(
          pDecl !== entrySf &&
          pDecl.getSourceFile().fileName.includes('node_modules')
        )
      ) {
        const ms = nonNullSigs[0];
        if ((ms.getTypeParameters()?.length ?? 0) === 0) {
          const rCb = renderSignature(
            checker,
            ms,
            entrySf,
            printType,
            targetRef,
            tParams.names,
          );
          if (rCb && !rCb.paramDecls.some(pd => pd.includes('this'))) {
            addProbe(
              displayName,
              `Interface '${displayName}' callback method '${propDisplay}'`,
              `  function _imcb${tParams.declText}() {\n    const _cb: __BccStrictFn<NonNullable<(${targetRef})${propIndexTypeCode}>> = null! as ((${rCb.paramDecls.join(', ')}) => ${rCb.returnText});\n    void _cb;\n  }\n  void _imcb;`,
              prop,
            );
          }
        }
      }

      if (sigs.length > 0 && !(prop.flags & ts.SymbolFlags.Property)) {
        emitSigListProbes(
          sigs,
          displayName,
          `Interface '${displayName}' method '${propDisplay}'`,
          mAccess,
          '_m',
          prop,
          {
            selfRep: targetRef,
            outerNames: tParams.names,
            wrapOuter: {
              fn: '_im',
              tDecl: tParams.declText,
              selfParam: `_s: ${targetRef}`,
            },
          },
        );
      } else {
        const writePart =
          !isReadonlyProperty(prop, checker) && ptIn
            ? `\n    ${mAccess} = null! as (${ptIn});`
            : '';
        const readPart =
          checkAsOutput && ptOut
            ? `\n    const _rv: ${ptOut} = ${mAccess}; void _rv;`
            : '';
        if (writePart || readPart) {
          addProbe(
            displayName,
            `Interface '${displayName}' property '${propDisplay}'`,
            `  function _ip${tParams.declText}(_s: ${targetRef}) {${readPart}${writePart}\n  }\n  void _ip;`,
            prop,
          );
        }
      }
    }

    if (stringIdx) {
      keyParts.push('string');
      if (stringIdxStr) shapeEntries.push(`[k: string]: ${stringIdxStr}`);
      else allPropsPrintable = false;
    }
    if (numberIdx) {
      keyParts.push('number');
      if (numberIdxStr) shapeEntries.push(`[k: number]: ${numberIdxStr}`);
      else allPropsPrintable = false;
    }

    if (
      checkAsInput &&
      allPropsPrintable &&
      ifaceCallSigs.length === 0 &&
      ifaceCtorSigs.length === 0 &&
      !allProps.some(p => hasPrivateOrProtectedModifier(p))
    ) {
      addProbe(
        displayName,
        `Interface '${displayName}' input compatibility`,
        `  function _in${tParams.declText}(): ${targetRef} { return null! as { ${shapeEntries.join('; ')} }; }\n  void _in;`,
        realSym,
      );
    }

    if (keyParts.length > 0) {
      addProbe(
        displayName,
        `Interface '${displayName}' property keys`,
        `  function _keys${tParams.declText}(): keyof (${targetRef}) { return null! as (${keyParts.join(' | ')}); }\n  void _keys;`,
        realSym,
      );
    }
  };

  const emitSymbolProbes = (
    valParent: string,
    typeParent: string,
    exportName: string,
    sym: ts.Symbol,
    displayPrefix: string,
    depth: number,
    containerValType?: ts.Type,
  ): void => {
    if (isSymbolInternal(sym)) return;
    const realSym = resolveAliased(checker, sym);
    if (isSymbolInternal(realSym)) return;
    const displayName = displayPrefix
      ? `${displayPrefix}.${exportName}`
      : exportName;
    const valExpr = propAccess(valParent, exportName);
    const typeExpr = isValidIdent(exportName)
      ? `${typeParent}.${exportName}`
      : undefined;

    const runtimeProp = containerValType
      ? checker.getPropertyOfType(containerValType, exportName)
      : sym;
    const isVal =
      Boolean(realSym.flags & ts.SymbolFlags.Value) &&
      Boolean(runtimeProp) &&
      !isTypeOnlyExportChain(checker, sym) &&
      (!runtimeProp || !isTypeOnlyExportChain(checker, runtimeProp));
    const isEnum = Boolean(realSym.flags & ts.SymbolFlags.Enum) && isVal;
    const isClass = Boolean(realSym.flags & ts.SymbolFlags.Class);
    const isIfaceOrAlias = Boolean(
      realSym.flags & (ts.SymbolFlags.Interface | ts.SymbolFlags.TypeAlias),
    );
    const isNamespace = Boolean(
      realSym.flags &
      (ts.SymbolFlags.ValueModule | ts.SymbolFlags.NamespaceModule),
    );

    if (isVal) {
      addProbe(
        displayName,
        `Value export '${displayName}'`,
        `  const _v: unknown = ${valExpr}; void _v;`,
        realSym,
      );
    }

    if (isEnum && typeExpr && realSym.exports) {
      realSym.exports.forEach(memberSym => {
        if (
          memberSym.name.startsWith('__') ||
          isSymbolInternal(memberSym) ||
          !(memberSym.flags & ts.SymbolFlags.EnumMember)
        ) {
          return;
        }
        const mAccess = propAccess(valExpr, memberSym.name);
        const decl = memberSym.valueDeclaration;
        const constVal =
          decl && ts.isEnumMember(decl)
            ? checker.getConstantValue(decl)
            : undefined;
        const litCheck =
          typeof constVal === 'number' || typeof constVal === 'string'
            ? `\n  const _lit: ${JSON.stringify(constVal)} = ${mAccess}; void _lit;`
            : '';
        addProbe(
          displayName,
          `Enum '${displayName}.${memberSym.name}'`,
          `  const _em: ${typeExpr} = ${mAccess}; void _em;${litCheck}`,
          memberSym,
        );
      });
    }

    if (isClass && isVal && typeExpr) {
      emitClassProbes(valExpr, typeExpr, displayName, realSym);
    } else if (isVal && !isEnum) {
      const vt = checker.getTypeOfSymbolAtLocation(realSym, entrySf);
      const callSigs = vt.getCallSignatures();
      emitSigListProbes(
        callSigs,
        displayName,
        `Function '${displayName}'`,
        valExpr,
        '_fn',
        realSym,
        {includeDefaultTParamCall: true},
      );
      const ctorSigs = vt.getConstructSignatures();
      emitSigListProbes(
        ctorSigs,
        displayName,
        `Constructable '${displayName}'`,
        valExpr,
        '_nw',
        realSym,
        {isCtor: true},
      );

      if (callSigs.length === 0 && ctorSigs.length === 0 && !isNamespace) {
        const props = checker.getPropertiesOfType(vt);
        const symDecl = realSym.valueDeclaration ?? realSym.declarations?.[0];
        const isPlainObj =
          Boolean(vt.flags & ts.TypeFlags.Object) &&
          props.length > 0 &&
          props.length <= 60 &&
          symDecl &&
          !symDecl.getSourceFile().fileName.includes('node_modules');
        if (isPlainObj && depth < MAX_NAMESPACE_DEPTH) {
          for (const prop of props) {
            if (isNonPublicMember(prop)) continue;
            const m = resolveMemberExpr(valExpr, prop);
            if (!m) continue;
            const pt = checker.getTypeOfSymbolAtLocation(
              prop,
              prop.valueDeclaration ?? prop.declarations?.[0] ?? entrySf,
            );
            const pSigs = pt.getCallSignatures();
            if (pSigs.length > 0 && !(prop.flags & ts.SymbolFlags.Optional)) {
              emitSigListProbes(
                pSigs,
                displayName,
                `Value '${displayName}' method '${m.display}'`,
                m.access,
                '_om',
                prop,
              );
            } else {
              const ptOut = printType(pt, undefined, {mode: 'out'});
              if (ptOut) {
                const ptIn = !isReadonlyProperty(prop, checker)
                  ? printType(pt, undefined, {mode: 'in'})
                  : undefined;
                const writeCheck = ptIn
                  ? `\n  ${m.access} = null! as (${ptIn});`
                  : '';
                addProbe(
                  displayName,
                  `Value '${displayName}' property '${m.display}'`,
                  `  const _op: ${ptOut} = ${m.access}; void _op;${writeCheck}`,
                  prop,
                );
              }
            }
          }
        } else {
          const vtStr = printType(vt, undefined, {mode: 'out'});
          if (vtStr) {
            addProbe(
              displayName,
              `Value '${displayName}' type`,
              `  const _vt: ${vtStr} = ${valExpr}; void _vt;`,
              realSym,
            );
          }
        }
      }
    }

    if (
      (isIfaceOrAlias || (isClass && !isVal)) &&
      !(isClass && isVal) &&
      typeExpr
    ) {
      emitTypeOrInterfaceProbes(typeExpr, displayName, realSym);
    }

    if (
      (isNamespace ||
        (Boolean(realSym.flags & ts.SymbolFlags.Enum) &&
          realSym.exports &&
          realSym.exports.size > 0)) &&
      typeExpr &&
      depth < MAX_NAMESPACE_DEPTH &&
      exportName !== 'protos' &&
      !visitedNamespaces.has(realSym)
    ) {
      visitedNamespaces.add(realSym);
      const nsValType = isVal
        ? checker.getTypeOfSymbolAtLocation(realSym, entrySf)
        : undefined;
      const isEnumSym = Boolean(realSym.flags & ts.SymbolFlags.Enum);
      const nsExports = checker
        .getExportsOfModule(realSym)
        .filter(c => !(isEnumSym && c.flags & ts.SymbolFlags.EnumMember))
        .slice(0, MAX_MEMBERS_PER_CONTAINER);
      for (const child of nsExports) {
        emitSymbolProbes(
          valExpr,
          typeExpr,
          child.name,
          child,
          displayName,
          depth + 1,
          nsValType,
        );
      }
    }
  };

  if (
    surface.callableSymbol &&
    surface.callableSymbol.flags & ts.SymbolFlags.Value
  ) {
    const vt = checker.getTypeOfSymbolAtLocation(
      surface.callableSymbol,
      entrySf,
    );
    emitSigListProbes(
      vt.getCallSignatures(),
      'export=',
      "Module 'export =' call signature",
      '__Pkg',
      '_modCall',
      surface.callableSymbol,
    );
    emitSigListProbes(
      vt.getConstructSignatures(),
      'export=',
      "Module 'export =' construct signature",
      '__Pkg',
      '_modNew',
      surface.callableSymbol,
      {isCtor: true},
    );
  }

  const topContainerValType =
    surface.callableSymbol &&
    surface.callableSymbol.flags & ts.SymbolFlags.Value
      ? checker.getTypeOfSymbolAtLocation(surface.callableSymbol, entrySf)
      : surface.moduleSymbol
        ? checker.getTypeOfSymbolAtLocation(surface.moduleSymbol, entrySf)
        : undefined;
  for (const {exportName, symbol} of surface.exports) {
    if (exportName !== 'prototype') {
      emitSymbolProbes(
        '__Pkg',
        '__Pkg',
        exportName,
        symbol,
        '',
        0,
        topContainerValType,
      );
    }
  }

  return {importHeader: surface.importHeader, probes};
}

function buildConsumerSource(
  importHeader: string,
  probes: readonly ConsumerProbe[],
): {
  text: string;
  ranges: Array<{startLine: number; endLine: number; probe: ConsumerProbe}>;
} {
  const lines: string[] = [
    '/* eslint-disable */',
    importHeader,
    'type __BccIfEquals<X, Y, A, B> = (<U>() => U extends X ? 1 : 2) extends (<U>() => U extends Y ? 1 : 2) ? A : B;',
    'type __BccStrictFn<F> = F extends (...a: infer A) => infer R ? (...a: A) => R : F;',
    'type __BccStrictObj<T> = [T] extends [unknown] ? {[K in keyof T]: __BccIfEquals<Pick<T, K>, {-readonly [P in K]: T[P]}, [NonNullable<T[K]>] extends [(...a: never) => unknown] ? __BccStrictFn<T[K]> : {get: __BccStrictFn<T[K]>; set: (v: T[K]) => void}, __BccStrictFn<T[K]>>} : never;',
    'void __Pkg;',
  ];
  const ranges: Array<{
    startLine: number;
    endLine: number;
    probe: ConsumerProbe;
  }> = [];
  for (const probe of probes) {
    const startLine = lines.length + 1;
    lines.push(...probe.code.split('\n'));
    ranges.push({startLine, endLine: lines.length, probe});
  }
  lines.push('export {};');
  return {text: lines.join('\n') + '\n', ranges};
}

function compileConsumerProbes(
  pkgDir: string,
  entryFile: string,
  compilerOptions: ts.CompilerOptions,
  overlay: FileOverlay,
  consumerFile: string,
  importHeader: string,
  probes: readonly ConsumerProbe[],
  oldProgram?: ts.Program,
): {
  program: ts.Program;
  errorsByProbeId: Map<number, ts.Diagnostic[]>;
  headerErrors: ts.Diagnostic[];
} {
  const {text, ranges} = buildConsumerSource(importHeader, probes);
  const program = createOverlayProgram(
    pkgDir,
    [entryFile, consumerFile],
    compilerOptions,
    overlay,
    new Map([[consumerFile, text]]),
    oldProgram,
  );
  const consumerSf = program.getSourceFile(consumerFile);
  const errorsByProbeId = new Map<number, ts.Diagnostic[]>();
  const headerErrors: ts.Diagnostic[] = [];
  if (!consumerSf) return {program, errorsByProbeId, headerErrors};

  for (const d of [
    ...program.getSyntacticDiagnostics(consumerSf),
    ...program.getSemanticDiagnostics(consumerSf),
  ]) {
    if (d.start === undefined) {
      headerErrors.push(d);
      continue;
    }
    const line = consumerSf.getLineAndCharacterOfPosition(d.start).line + 1;
    const hit = ranges.find(r => line >= r.startLine && line <= r.endLine);
    if (hit) {
      const list = errorsByProbeId.get(hit.probe.id) ?? [];
      list.push(d);
      errorsByProbeId.set(hit.probe.id, list);
    } else {
      headerErrors.push(d);
    }
  }
  return {program, errorsByProbeId, headerErrors};
}

export function exercisePackageEntrypoint(
  pkgDir: string,
  repoRoot: string,
  entryFile: string,
  compilerOptions: ts.CompilerOptions,
  baseOverlay: FileOverlay = {overrides: new Map(), deleted: new Set()},
  oldProgram?: ts.Program,
): {
  importHeader: string;
  allProbes: ConsumerProbe[];
  validProbes: ConsumerProbe[];
  baseInvalidCount: number;
  headerErrors: ts.Diagnostic[];
  baseProgram: ts.Program;
} {
  const consumerFile = path.join(pkgDir, '__breaking_change_consumer__.ts');
  const seedProgram = createOverlayProgram(
    pkgDir,
    [entryFile, consumerFile],
    compilerOptions,
    baseOverlay,
    new Map([
      [consumerFile, 'export type __BreakingChangeAnchor = unknown;\n'],
    ]),
    oldProgram,
  );
  const {importHeader, probes} = generateConsumerProbes(
    seedProgram,
    pkgDir,
    repoRoot,
    entryFile,
    consumerFile,
  );
  if (probes.length === 0) {
    return {
      importHeader,
      allProbes: [],
      validProbes: [],
      baseInvalidCount: 0,
      headerErrors: [],
      baseProgram: seedProgram,
    };
  }
  const baseCheck = compileConsumerProbes(
    pkgDir,
    entryFile,
    compilerOptions,
    baseOverlay,
    consumerFile,
    importHeader,
    probes,
    seedProgram,
  );
  const validProbes = probes.filter(p => !baseCheck.errorsByProbeId.has(p.id));
  return {
    importHeader,
    allProbes: probes,
    validProbes,
    baseInvalidCount: probes.length - validProbes.length,
    headerErrors: baseCheck.headerErrors,
    baseProgram: baseCheck.program,
  };
}

export function comparePackageRevisions(
  pkgDir: string,
  repoRoot: string,
  entryFile: string,
  compilerOptions: ts.CompilerOptions,
  baseOverlay: FileOverlay,
  headOverlay: FileOverlay,
  fallbackReportFile: string,
  changedRelFiles?: Set<string>,
  headCompilerOptions?: ts.CompilerOptions,
  headEntryFile?: string,
  oldProgram?: ts.Program,
): BreakingFinding[] {
  const targetHeadEntry = headEntryFile ?? entryFile;
  if (!fileExistsWithOverlay(targetHeadEntry, headOverlay)) {
    return [
      {
        file: fallbackReportFile,
        symbolName: path.basename(entryFile),
        label: `Entrypoint '${toPosix(path.relative(repoRoot, entryFile))}'`,
        diagnosticCode: 2307,
        message: 'Public package entrypoint was deleted.',
      },
    ];
  }
  const base = exercisePackageEntrypoint(
    pkgDir,
    repoRoot,
    entryFile,
    compilerOptions,
    baseOverlay,
    oldProgram,
  );
  if (base.validProbes.length === 0) return [];

  let headImportHeader = base.importHeader;
  if (
    targetHeadEntry !== entryFile ||
    (headCompilerOptions &&
      headCompilerOptions.moduleResolution !== compilerOptions.moduleResolution)
  ) {
    const baseSpec = formatEntryImportSpec(pkgDir, entryFile, compilerOptions);
    const headSpec = formatEntryImportSpec(
      pkgDir,
      targetHeadEntry,
      headCompilerOptions ?? compilerOptions,
    );
    headImportHeader = headImportHeader.replace(
      JSON.stringify(baseSpec),
      JSON.stringify(headSpec),
    );
  }

  const headCheck = compileConsumerProbes(
    pkgDir,
    targetHeadEntry,
    headCompilerOptions ?? compilerOptions,
    headOverlay,
    path.join(pkgDir, '__breaking_change_consumer__.ts'),
    headImportHeader,
    base.validProbes,
    base.baseProgram,
  );

  if (headCheck.headerErrors.length > 0) {
    const first = headCheck.headerErrors[0];
    return [
      {
        file: fallbackReportFile,
        symbolName: 'module',
        label: `Module '${toPosix(path.relative(repoRoot, entryFile))}'`,
        diagnosticCode: first.code,
        message: ts.flattenDiagnosticMessageText(first.messageText, ' '),
      },
    ];
  }

  const findings: BreakingFinding[] = [];
  for (const probe of base.validProbes) {
    const errs = headCheck.errorsByProbeId.get(probe.id);
    if (!errs || errs.length === 0) continue;
    const first = errs[0];
    const reportFile =
      probe.declFile &&
      (!changedRelFiles || changedRelFiles.has(probe.declFile))
        ? probe.declFile
        : fallbackReportFile;
    findings.push({
      file: reportFile,
      symbolName: probe.symbolName,
      label: probe.label,
      diagnosticCode: first.code,
      message: `TS${first.code}: ${ts.flattenDiagnosticMessageText(first.messageText, ' ')}`,
    });
  }
  return findings;
}

let snippetSeedProgram: ts.Program | undefined;

export function compareTypeScriptSnippets(
  baseFiles: Record<string, string>,
  headFiles: Record<string, string>,
  entryRel = 'src/index.ts',
): BreakingFinding[] {
  const virtualRoot = path.join(os.tmpdir(), 'bcc-virtual-pkg');
  const baseOverlay: FileOverlay = {overrides: new Map(), deleted: new Set()};
  const headOverlay: FileOverlay = {overrides: new Map(), deleted: new Set()};
  for (const rel of new Set([
    ...Object.keys(baseFiles),
    ...Object.keys(headFiles),
  ])) {
    const abs = path.resolve(virtualRoot, rel);
    if (rel in baseFiles) baseOverlay.overrides.set(abs, baseFiles[rel]);
    else baseOverlay.deleted.add(abs);
    if (rel in headFiles) headOverlay.overrides.set(abs, headFiles[rel]);
    else headOverlay.deleted.add(abs);
  }
  const needsNodeTypes = [
    ...Object.values(baseFiles),
    ...Object.values(headFiles),
  ].some(src => /\b(?:Buffer|NodeJS|process|node:|events|stream)\b/.test(src));
  const opts: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.CommonJS,
    moduleResolution: ts.ModuleResolutionKind.Node10,
    strict: true,
    strictNullChecks: true,
    strictFunctionTypes: true,
    stripInternal: true,
    noEmit: true,
    skipLibCheck: true,
    typeRoots: [
      path.join(REPO_ROOT, 'core/test-utils/node_modules/@types'),
      path.join(REPO_ROOT, 'node_modules/@types'),
    ].filter(p => fs.existsSync(p)),
    types: needsNodeTypes ? ['node'] : [],
  };
  const entryAbs = path.resolve(virtualRoot, entryRel);
  if (!snippetSeedProgram) {
    snippetSeedProgram = createOverlayProgram(
      virtualRoot,
      [entryAbs],
      opts,
      baseOverlay,
      new Map(),
    );
  }
  return comparePackageRevisions(
    virtualRoot,
    virtualRoot,
    entryAbs,
    opts,
    baseOverlay,
    headOverlay,
    entryRel,
    undefined,
    undefined,
    undefined,
    snippetSeedProgram,
  );
}

const escapeAnnotationData = (v: string): string =>
  v.replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');

const escapeAnnotationProp = (v: string): string =>
  escapeAnnotationData(v).replace(/:/g, '%3A').replace(/,/g, '%2C');

export function formatGitHubAnnotation(
  level: 'error' | 'warning' | 'notice',
  title: string,
  message: string,
  file?: string,
): string {
  const props = [
    ...(file ? [`file=${escapeAnnotationProp(file)}`] : []),
    `title=${escapeAnnotationProp(title)}`,
  ];
  return `::${level} ${props.join(',')}::${escapeAnnotationData(message)}`;
}

const runGit = (repoRoot: string, args: string[]): string =>
  execFileSync('git', args, {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    maxBuffer: 32 * 1024 * 1024,
  });

const tryRevParse = (repoRoot: string, rev: string): string | undefined => {
  try {
    return runGit(repoRoot, [
      'rev-parse',
      '--verify',
      `${rev}^{commit}`,
    ]).trim();
  } catch {
    return undefined;
  }
};

function resolveDiffRange(
  repoRoot: string,
  explicitBase?: string,
  explicitHead?: string,
  eventName?: string,
  githubRef?: string,
): {
  mergeBaseSha: string;
  headSha: string;
  useWorkingTree: boolean;
} {
  const useWorkingTree = !explicitHead;
  const headRef = explicitHead ?? 'HEAD';
  const headSha = tryRevParse(repoRoot, headRef);
  if (!headSha) throw new Error(`Unable to resolve git revision '${headRef}'.`);

  const effectiveEvent = eventName ?? process.env.GITHUB_EVENT_NAME;
  const effectiveGitHubRef = githubRef ?? process.env.GITHUB_REF;
  if (
    !explicitBase &&
    !explicitHead &&
    effectiveEvent === 'pull_request' &&
    Boolean(effectiveGitHubRef?.startsWith('refs/pull/'))
  ) {
    const parts = runGit(repoRoot, ['rev-list', '--parents', '-n', '1', 'HEAD'])
      .trim()
      .split(/\s+/);
    if (parts.length === 3) {
      return {
        mergeBaseSha: parts[1],
        headSha: parts[2],
        useWorkingTree: true,
      };
    }
  }

  for (const cand of explicitBase
    ? [explicitBase]
    : ['upstream/main', 'origin/main', 'main', 'HEAD^1']) {
    const resolved = tryRevParse(repoRoot, cand);
    if (!resolved) continue;
    let mergeBaseSha = resolved;
    try {
      mergeBaseSha = runGit(repoRoot, ['merge-base', resolved, headSha]).trim();
    } catch {
      mergeBaseSha = resolved;
    }
    return {
      mergeBaseSha,
      headSha,
      useWorkingTree,
    };
  }
  throw new Error(
    'Could not resolve base git revision for breaking-change-check.',
  );
}

function findContainingPackageDir(
  repoRoot: string,
  relFile: string,
  knownPkgDirs?: ReadonlySet<string>,
): string | undefined {
  let curr = path.dirname(path.resolve(repoRoot, relFile));
  while (curr.startsWith(`${repoRoot}${path.sep}`) && curr !== repoRoot) {
    if (
      knownPkgDirs?.has(curr) ||
      fs.existsSync(path.join(curr, 'package.json'))
    ) {
      return curr;
    }
    const parent = path.dirname(curr);
    if (parent === curr) break;
    curr = parent;
  }
  return undefined;
}

const tryGitShowFile = (
  repoRoot: string,
  rev: string,
  relPosix: string,
): string | undefined => {
  try {
    return runGit(repoRoot, ['show', `${rev}:${relPosix}`]);
  } catch {
    return undefined;
  }
};

export function runGitDiffBreakingChangeCheck(
  options: GitDiffCheckOptions,
): GitDiffCheckResult {
  const {repoRoot} = options;
  const range = resolveDiffRange(
    repoRoot,
    options.baseRef,
    options.headRef,
    options.eventName,
    options.githubRef,
  );

  const baseSpecs = [
    '*.ts',
    ':(glob)**/package.json',
    'package.json',
    ':(glob)**/tsconfig*.json',
    'tsconfig.json',
  ];
  const pathspecs = options.includeGeneratedPackages
    ? baseSpecs
    : [...baseSpecs, ':!packages'];
  const diffOut = runGit(
    repoRoot,
    range.useWorkingTree
      ? ['diff', '--name-status', '-M', range.mergeBaseSha, '--', ...pathspecs]
      : [
          'diff',
          '--name-status',
          '-M',
          `${range.mergeBaseSha}..${range.headSha}`,
          '--',
          ...pathspecs,
        ],
  );

  interface DiffEntry {
    status: string;
    oldRel: string;
    newRel: string;
  }
  const rawEntries: DiffEntry[] = [];
  const knownPkgDirs = new Set<string>();

  for (const rawLine of diffOut.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;
    const [status = '', p1 = '', p2 = ''] = line.split(/\t+/);
    const oldRel = toPosix(p1);
    const newRel = toPosix(status.startsWith('R') ? p2 : p1);
    rawEntries.push({status, oldRel, newRel});
    for (const r of [oldRel, newRel]) {
      if (
        path.posix.basename(r) === 'package.json' &&
        !hasIgnoredDirSegment(r)
      ) {
        const dir = path.dirname(path.resolve(repoRoot, r));
        if (dir !== repoRoot) knownPkgDirs.add(dir);
      }
    }
  }

  const pkgDiffs = new Map<string, DiffEntry[]>();
  const findings: BreakingFinding[] = [];

  for (const {status, oldRel, newRel} of rawEntries) {
    const activeRel = status.startsWith('D') ? oldRel : newRel;
    if (
      !options.includeGeneratedPackages &&
      activeRel.startsWith('packages/')
    ) {
      continue;
    }
    const isManifestOrConfig =
      path.posix.basename(activeRel) === 'package.json' ||
      /^tsconfig.*\.json$/.test(path.posix.basename(activeRel));
    if (
      !isManifestOrConfig &&
      isIgnoredSourceFile(activeRel) &&
      isIgnoredSourceFile(oldRel)
    ) {
      continue;
    }
    if (isManifestOrConfig && hasIgnoredDirSegment(activeRel)) continue;
    const pkgDir =
      findContainingPackageDir(repoRoot, activeRel, knownPkgDirs) ??
      findContainingPackageDir(repoRoot, oldRel, knownPkgDirs);
    if (!pkgDir) continue;
    const list = pkgDiffs.get(pkgDir) ?? [];
    list.push({status, oldRel, newRel});
    pkgDiffs.set(pkgDir, list);
  }

  if (pkgDiffs.size > 0) ensureWorkspaceTypeDeclarations(repoRoot);

  for (const [pkgDir, entries] of pkgDiffs) {
    const baseOverlay: FileOverlay = {overrides: new Map(), deleted: new Set()};
    const headOverlay: FileOverlay = {overrides: new Map(), deleted: new Set()};
    const changedRelFiles = new Set<string>();
    let fallbackFile = entries[0].newRel || entries[0].oldRel;

    for (const e of entries) {
      if (e.newRel && !e.status.startsWith('D')) {
        changedRelFiles.add(e.newRel);
        fallbackFile = e.newRel;
      }
    }

    for (const e of entries) {
      const oldAbs = path.resolve(repoRoot, e.oldRel);
      const newAbs = path.resolve(repoRoot, e.newRel);

      if (e.status.startsWith('A')) {
        baseOverlay.deleted.add(newAbs);
      } else {
        const baseBlob = tryGitShowFile(repoRoot, range.mergeBaseSha, e.oldRel);
        if (baseBlob !== undefined) baseOverlay.overrides.set(oldAbs, baseBlob);
        else if (e.status.startsWith('D')) baseOverlay.deleted.add(oldAbs);
        if (e.status.startsWith('D')) {
          if (!changedRelFiles.has(e.oldRel)) headOverlay.deleted.add(oldAbs);
        } else if (e.status.startsWith('R') && oldAbs !== newAbs) {
          baseOverlay.deleted.add(newAbs);
          if (!changedRelFiles.has(e.oldRel)) headOverlay.deleted.add(oldAbs);
        }
      }

      if (!range.useWorkingTree && !e.status.startsWith('D')) {
        const headBlob = tryGitShowFile(repoRoot, range.headSha, e.newRel);
        if (headBlob !== undefined) headOverlay.overrides.set(newAbs, headBlob);
        else headOverlay.deleted.add(newAbs);
      }
    }

    const pjAbs = path.join(pkgDir, 'package.json');
    const pjRel = toPosix(path.relative(repoRoot, pjAbs));
    if (!baseOverlay.overrides.has(pjAbs) && !baseOverlay.deleted.has(pjAbs)) {
      const basePj = tryGitShowFile(repoRoot, range.mergeBaseSha, pjRel);
      if (basePj !== undefined) baseOverlay.overrides.set(pjAbs, basePj);
      else if (!range.useWorkingTree) baseOverlay.deleted.add(pjAbs);
    }
    if (
      !range.useWorkingTree &&
      !headOverlay.overrides.has(pjAbs) &&
      !headOverlay.deleted.has(pjAbs)
    ) {
      const headPj = tryGitShowFile(repoRoot, range.headSha, pjRel);
      if (headPj !== undefined) headOverlay.overrides.set(pjAbs, headPj);
      else headOverlay.deleted.add(pjAbs);
    }

    if (
      !fileExistsWithOverlay(pjAbs, baseOverlay) ||
      !fileExistsWithOverlay(pjAbs, headOverlay)
    ) {
      continue;
    }
    const baseManifest = readPackageManifest(pkgDir, baseOverlay);
    if (!baseManifest || baseManifest.private) continue;

    const baseCompilerOpts = loadPackageCompilerOptions(pkgDir, baseOverlay);
    const headCompilerOpts = loadPackageCompilerOptions(pkgDir, headOverlay);
    const baseEntrypoints = resolvePackageEntrypoints(
      pkgDir,
      baseCompilerOpts,
      baseOverlay,
    );
    const headEntrypoints = resolvePackageEntrypoints(
      pkgDir,
      headCompilerOpts,
      headOverlay,
    );

    for (const entryFile of baseEntrypoints) {
      const headEntryFile =
        !fileExistsWithOverlay(entryFile, headOverlay) &&
        baseEntrypoints.length === 1 &&
        headEntrypoints.length === 1
          ? headEntrypoints[0]
          : entryFile;
      findings.push(
        ...comparePackageRevisions(
          pkgDir,
          repoRoot,
          entryFile,
          baseCompilerOpts,
          baseOverlay,
          headOverlay,
          fallbackFile,
          changedRelFiles,
          headCompilerOpts,
          headEntryFile,
        ),
      );
    }
  }

  const seen = new Set<string>();
  const uniqueFindings = findings.filter(f => {
    const key = `${f.file}|${f.label}|${f.message}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const annotations: string[] = [];
  if (uniqueFindings.length > 0) {
    for (const f of uniqueFindings.slice(0, MAX_INLINE_ANNOTATIONS)) {
      annotations.push(
        formatGitHubAnnotation(
          'error',
          'Breaking Change Detected',
          `[${f.label}] ${f.message}`,
          f.file,
        ),
      );
    }
    if (uniqueFindings.length > MAX_INLINE_ANNOTATIONS) {
      annotations.push(
        formatGitHubAnnotation(
          'notice',
          'Additional Breaking Changes',
          `${uniqueFindings.length - MAX_INLINE_ANNOTATIONS} additional breaking declaration changes omitted from inline annotations; see job summary for full list.`,
        ),
      );
    }
  }

  const passed = uniqueFindings.length === 0;
  const summaryLines: string[] = ['## Breaking Change Check Summary', ''];
  if (uniqueFindings.length === 0) {
    summaryLines.push(
      'No breaking public TypeScript interface changes detected.',
    );
  } else {
    summaryLines.push(
      `**Result:** Failed (${uniqueFindings.length} breaking public TypeScript interface change(s) detected).`,
      '',
      '| File | Public Symbol | Compiler Error |',
      '| :--- | :--- | :--- |',
    );
    for (const f of uniqueFindings.slice(0, 100)) {
      const safeMsg = f.message.replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
      summaryLines.push(`| \`${f.file}\` | ${f.label} | ${safeMsg} |`);
    }
    if (uniqueFindings.length > 100) {
      summaryLines.push(
        '',
        `_...and ${uniqueFindings.length - 100} additional breaking change(s) omitted for brevity._`,
      );
    }
  }
  const summaryMarkdown = summaryLines.join('\n') + '\n';
  if (options.stepSummaryPath) {
    fs.appendFileSync(options.stepSummaryPath, summaryMarkdown, 'utf8');
  }
  return {
    passed,
    findings: uniqueFindings,
    annotations,
    summaryMarkdown,
  };
}

// ============================================================================
// Test Suites
// ============================================================================

const checkMode = process.env.BREAKING_CHANGE_CHECK_MODE;
const hasTestRunner = typeof describe === 'function' && checkMode !== 'lib';
const runDiffGateOnly = checkMode === 'diff';

const diffTs = (
  base: string | Record<string, string>,
  head: string | Record<string, string>,
): BreakingFinding[] =>
  compareTypeScriptSnippets(
    typeof base === 'string' ? {'src/index.ts': base} : base,
    typeof head === 'string' ? {'src/index.ts': head} : head,
  );

const expectBreaks = (cases: readonly string[]): void => {
  for (const c of cases) {
    const [b, h] = c.split(' ==> ');
    assert.ok(diffTs(b, h).length > 0, c);
  }
};

const expectPasses = (cases: readonly string[]): void => {
  for (const c of cases) {
    const [b, h] = c.split(' ==> ');
    assert.equal(diffTs(b, h).length, 0, c);
  }
};

function ensureWorkspaceTypeDeclarations(repoRoot: string): void {
  for (const [depRel, dtsRel] of [
    ['core/packages/gaxios', 'build/cjs/src/index.d.ts'],
    ['core/packages/teeny-request', 'build/src/index.d.ts'],
  ]) {
    const depDir = path.join(repoRoot, depRel);
    if (
      fs.existsSync(path.join(depDir, 'package.json')) &&
      !fs.existsSync(path.join(depDir, dtsRel))
    ) {
      execFileSync('npm', ['run', 'compile'], {
        cwd: depDir,
        stdio: 'ignore',
      });
    }
  }
}

if (hasTestRunner && !runDiffGateOnly) {
  describe('codebase public interface compilation harness', () => {
    it('discovers, exercises, and compiles consumer TypeScript code across public packages', () => {
      ensureWorkspaceTypeDeclarations(REPO_ROOT);
      const includeGeneratedPackages =
        process.env.BREAKING_CHANGE_CHECK_ALL_PACKAGES === '1';
      const packages = discoverPublicPackages(REPO_ROOT, {
        includeGeneratedPackages,
      });
      if (!includeGeneratedPackages) {
        const allWithGapic = discoverPublicPackages(REPO_ROOT, {
          includeGeneratedPackages: true,
        });
        const sampleGapic =
          allWithGapic.find(p => p.relDir === 'packages/google-cloud-kms') ??
          allWithGapic.find(p => p.relDir.startsWith('packages/'));
        if (sampleGapic) packages.push(sampleGapic);
      }
      assert.ok(packages.length >= 30);

      let totalEntrypoints = 0;
      let totalCompiledProbes = 0;
      let totalBaseInvalid = 0;
      const packagesWithProbes: string[] = [];

      let pkgProgram: ts.Program | undefined;
      for (const pkg of packages) {
        for (const entryFile of pkg.entrypoints) {
          totalEntrypoints++;
          const res = exercisePackageEntrypoint(
            pkg.dir,
            REPO_ROOT,
            entryFile,
            pkg.compilerOptions,
            undefined,
            pkgProgram,
          );
          pkgProgram = res.baseProgram;
          assert.equal(res.headerErrors.length, 0);
          totalCompiledProbes += res.validProbes.length;
          totalBaseInvalid += res.baseInvalidCount;
          if (res.validProbes.length > 0) packagesWithProbes.push(pkg.name);
        }
      }

      pkgProgram = undefined;
      sharedDocumentRegistry = ts.createDocumentRegistry();

      const invalidRatio =
        totalBaseInvalid / Math.max(1, totalCompiledProbes + totalBaseInvalid);
      assert.ok(totalEntrypoints >= 35);
      assert.ok(totalCompiledProbes >= 28_000);
      assert.ok(invalidRatio < 0.01);
      for (const expectedPkg of [
        '@google-cloud/pubsub',
        '@google-cloud/storage',
        '@google-cloud/firestore',
        '@google-cloud/spanner',
        '@google-cloud/datastore',
        '@google-cloud/common',
        'google-gax',
        'gaxios',
        'retry-request',
      ]) {
        assert.ok(packagesWithProbes.includes(expectedPkg));
      }
    }, 300_000);
  });

  describe('compiler-driven TypeScript breaking-change detection', () => {
    it('detects narrowed interface properties including 2-way, 3-way, and disjoint types while allowing widenings', () => {
      expectBreaks([
        'export interface ClientConfig { port?: string | number; } ==> export interface ClientConfig { port?: number; }',
        'export interface Cfg { mode?: string | number | boolean; } ==> export interface Cfg { mode?: string | number; }',
        'export interface Cfg { port?: string; } ==> export interface Cfg { port?: number; }',
      ]);
      expectPasses([
        'export interface ClientConfig { port?: number; } ==> export interface ClientConfig { port?: string | number; }',
      ]);
    }, 120_000);

    it('detects optional->required, added required, removed optional, mutable->readonly, and removed index signatures', () => {
      expectBreaks([
        'export interface Opts { port?: number; } ==> export interface Opts { port: number; }',
        'export interface Opts { port?: number; } ==> export interface Opts { port?: number; host: string; }',
        'export interface Opts { port?: number; host?: string; } ==> export interface Opts { port?: number; }',
        'export interface Opts { port: number; } ==> export interface Opts { readonly port: number; }',
        'export interface Bag { a: string; [k: string]: unknown; } ==> export interface Bag { a: string; }',
      ]);
      expectPasses([
        'export interface Opts { port: number; } ==> export interface Opts { port?: number; enabled?: boolean; }',
      ]);
    }, 120_000);

    it('detects narrowed function, class method (bypassing TS method bivariance), and constructor parameters', () => {
      expectBreaks([
        'export function connect(port: string | number): void { void port; } ==> export function connect(port: number): void { void port; }',
        'export class Client { connect(port: string | number): void { void port; } } ==> export class Client { connect(port: number): void { void port; } }',
        'export interface Service { send(payload: string | Uint8Array): void; new (port?: string | number): Service; } ==> export interface Service { send(payload: string): void; new (port?: string | number): Service; }',
        'export interface Ctor { new (port?: string | number): object; } ==> export interface Ctor { new (port: number): object; }',
        'export function connect(port?: number): void { void port; } ==> export function connect(port: number): void { void port; }',
        'export function connect(port: number): void { void port; } ==> export function connect(port: number, host: string): void { void port; void host; }',
      ]);
      expectPasses([
        'export function connect(a: string, b?: number): void { void a; void b; } ==> export function connect(a: string, b = 8080): void { void a; void b; }',
      ]);
    }, 120_000);

    it('detects widened return types and weakened response interfaces while allowing new response properties', () => {
      expectBreaks([
        'export function getHost(): string { return "x"; } ==> export function getHost(): string | undefined { return undefined; }',
        'export class Client { getHost(): string { return "x"; } } ==> export class Client { getHost(): string | undefined { return undefined; } }',
        'export interface Row { data: string; }\nexport declare function fetchRow(): Promise<Row>; ==> export interface Row { data?: string; }\nexport declare function fetchRow(): Promise<Row>;',
        'export interface Row { data: string; }\nexport declare function fetchRow(): Promise<Row>; ==> export interface Row { data: string | null; }\nexport declare function fetchRow(): Promise<Row>;',
      ]);
      expectPasses([
        'export class Client { getHost(): string | undefined { return "x"; } } ==> export class Client { getHost(): string { return "x"; } }',
        'export interface Row { data: string; }\nexport declare function fetchRow(): Promise<Row>; ==> export interface Row { data: string; count: number; }\nexport declare function fetchRow(): Promise<Row>;',
      ]);
    }, 120_000);

    it('handles class visibility, private fields, abstract classes, symbols, generics, overloads, enums, renames, and @internal', () => {
      expectBreaks([
        'export class Client { public open(): void {} } ==> export class Client { protected open(): void {} }',
        'export class Client { protected open(): void {} } ==> export class Client { private open(): void {} }',
        'export class Client { run(): void {} } ==> export abstract class Client { run(): void {} }',
        'export class Client { constructor(x?: number) { void x; } } ==> export class Client { protected constructor(x?: number) { void x; } }',
        'export abstract class Base { abstract a(): string; } ==> export abstract class Base { abstract a(): string; abstract b(): number; }',
        'export class Streamer { async *[Symbol.asyncIterator](): AsyncGenerator<string> { yield "a"; } } ==> export class Streamer {}',
        'export function wrap<T extends string | number>(v: T): T { return v; } ==> export function wrap<T extends string>(v: T): T { return v; }',
        'export function parse(x: string): number;\nexport function parse(x: number): number;\nexport function parse(x: string | number): number { return Number(x); } ==> export function parse(x: number): number { return x; }',
        'export enum State { Ready = 0, Closed = 1 } ==> export enum State { Ready = 1, Closed = 2 }',
      ]);
      assert.ok(
        diffTs(
          {
            'src/a.ts': 'export class Foo {}',
            'src/index.ts': 'export {Foo} from "./a";',
          },
          {
            'src/a.ts': 'export class Foo {}',
            'src/index.ts': 'export type {Foo} from "./a";',
          },
        ).length > 0,
      );
      expectPasses([
        'export class Client { private secret = "a"; getPort(): number { return 80; } } ==> export class Client { private other = 42; getPort(): number { return 80; } }',
        'export class Client { protected open(): void {} } ==> export class Client { public open(): void {} }',
        'export const util = { maybeOptionsOrCallback<T = object, C = (err?: Error) => void>(o?: T | C, cb?: C): [T, C] { return [o as T, cb as C]; } }; ==> export const util = { maybeOptionsOrCallback<T = object, C = (err?: Error) => void>(o?: T | C, cb?: C): [T, C] { return [o as T, cb as C]; } };',
        'export function wrap<T extends string>(v: T): T { return v; } ==> export function wrap<T extends string | number>(v: T): T { return v; }',
        'export class G { /** @internal */ baseDir?: string; port?: number; } ==> export class G { port?: number; }',
      ]);
      assert.equal(
        diffTs(
          {
            'src/old.ts': 'export interface Cfg { port?: string | number; }',
            'src/index.ts': 'export {Cfg} from "./old";',
          },
          {
            'src/new.ts': 'export interface Cfg { port?: string | number; }',
            'src/index.ts': 'export {Cfg} from "./new";',
          },
        ).length,
        0,
      );
    }, 120_000);

    it('detects unexported parameter interfaces, generic aliases, getter-only narrowing, default exports, and ignores unused helpers and internal file moves', () => {
      expectBreaks([
        'interface Hidden { port?: string | number; }\nexport function connect(o?: Hidden): void { void o; } ==> interface Hidden { port?: number; }\nexport function connect(o?: Hidden): void { void o; }',
        'export type Box<T> = { value: T; port?: string | number; }; ==> export type Box<T> = { value: T; port?: number; };',
        'export type Result<T> = T | string | number; ==> export type Result<T> = T | number;',
        'export class C { private _p = 1; get p(): number { return this._p; } set p(v: number) { this._p = v; } } ==> export class C { private _p = 1; get p(): number { return this._p; } }',
        'export default class D { run(x: string | number): void { void x; } } ==> export default class D { run(x: number): void { void x; } }',
        'export class Bucket {}\nexport class Storage { static Bucket = Bucket; } ==> export class Bucket {}\nexport class Storage {}',
        'export function run(cb: (err: Error | null, item: string) => void): void { void cb; } ==> export function run(cb: (err: Error | null, item: string | number) => void): void { void cb; }',
        'export const MODE = "strict"; ==> export const MODE: string = "strict";',
        'export interface Base { a?: string; }\nexport interface Sub extends Base { b: number; } ==> export interface Base { a?: string; }\nexport interface Sub { b: number; }',
        'declare function retry(u: string, o?: retry.Opts): void;\ndeclare namespace retry { interface Opts { retries?: number | string; } }\nexport = retry; ==> declare function retry(u: string, o?: retry.Opts): void;\ndeclare namespace retry { interface Opts { retries?: number; } }\nexport = retry;',
      ]);
      assert.ok(
        diffTs(
          {
            'src/h.ts': 'export interface Hidden { port?: string | number; }',
            'src/index.ts':
              'import {Hidden} from "./h";\nexport function connect(o?: Hidden): void { void o; }',
          },
          {
            'src/h.ts': 'export interface Hidden { port?: number; }',
            'src/index.ts':
              'import {Hidden} from "./h";\nexport function connect(o?: Hidden): void { void o; }',
          },
        ).length > 0,
      );
      assert.equal(
        diffTs(
          {
            'src/h.ts':
              'export interface ResolvedHedging { enabled: boolean; max?: string | number; }',
            'src/index.ts': 'export interface HedgingOptions { max?: number; }',
          },
          {
            'src/h.ts': 'export interface ResolvedHedging { max: number; }',
            'src/index.ts':
              'export interface HedgingOptions { enabled?: boolean; max?: number; }',
          },
        ).length,
        0,
      );
      assert.equal(
        diffTs(
          {
            'src/old.ts': 'export interface Cfg { port?: string | number; }',
            'src/index.ts':
              'import {Cfg} from "./old";\nexport {Cfg};\nexport declare function run(c?: Cfg): Promise<Cfg>;',
          },
          {
            'src/new.ts': 'export interface Cfg { port?: string | number; }',
            'src/index.ts':
              'import {Cfg} from "./new";\nexport {Cfg};\nexport declare function run(c?: Cfg): Promise<Cfg>;',
          },
        ).length,
        0,
      );
      expectPasses([
        'export interface Cfg { readonly port: number; } ==> export interface Cfg { port: number; }',
        'export class Svc { constructor(private readonly id: string) {} getId(): string { return this.id; } } ==> export class Svc { constructor(id: string) { void id; } getId(): string { return "x"; } }',
        ' ==> export const A = 1;',
      ]);
      assert.equal(
        isIgnoredSourceFile('handwritten/spanner/observability-test/pool.ts'),
        true,
      );
      assert.equal(
        isIgnoredSourceFile(
          'core/test-utils/test/breaking-change-check.test.ts',
        ),
        true,
      );
      assert.equal(isIgnoredSourceFile('core/test-utils/src/index.ts'), false);
    }, 120_000);

    it('catches unexported aliases/classes/recursive types, nested & namespace output variance, method-shorthand callbacks, generic defaults, merged symbols, and unique symbols', () => {
      expectBreaks([
        'type Opts = { port?: string | number }; export function run(o?: Opts): void { void o; } ==> type Opts = { port?: number }; export function run(o?: Opts): void { void o; }',
        'interface A { a?: string | number } interface B { b?: boolean } export function f(x?: A & B): void { void x; } ==> interface A { a?: number } interface B { b?: boolean } export function f(x?: A & B): void { void x; }',
        'interface Row { id: string } export declare function getRow(): Promise<Row>; ==> interface Row { id?: string } export declare function getRow(): Promise<Row>;',
        'class Count { alias(n: string | number): void { void n; } } export function count(): Count { return new Count(); } ==> class Count { alias(n: number): void { void n; } } export function count(): Count { return new Count(); }',
        'interface FieldType { name: string | number; fields?: FieldType[] } export function q(f: FieldType): void { void f; } ==> interface FieldType { name: number; fields?: FieldType[] } export function q(f: FieldType): void { void f; }',
        'export namespace v1 { export interface Res { ok: boolean } export function run(): Res { return {ok: true}; } } ==> export namespace v1 { export interface Res { ok?: boolean } export function run(): Res { return {}; } }',
        'export interface Stats { count: number } export class C { static stats(): Stats { return {count: 1}; } } ==> export interface Stats { count?: number } export class C { static stats(): Stats { return {}; } }',
        'declare function fn(): fn.Res; declare namespace fn { interface Res { status: number } } export = fn; ==> declare function fn(): fn.Res; declare namespace fn { interface Res { status?: number } } export = fn;',
        'export interface Meta { etag: string } export interface Resp { meta: Meta } export declare function get(): Resp; ==> export interface Meta { etag?: string } export interface Resp { meta: Meta } export declare function get(): Resp;',
        'export interface Opts { onEvent?(e: string): void } export function sub(o: Opts): void { void o; } ==> export interface Opts { onEvent?(e: string | number): void } export function sub(o: Opts): void { void o; }',
        'export interface Plugin { sign(p: string): string } export function reg(p: Plugin): void { void p; } ==> export interface Plugin { sign(p: string | Uint8Array): string } export function reg(p: Plugin): void { void p; }',
        'export class Box<T = string | number> { set(v: T): void { void v; } } ==> export class Box<T = number> { set(v: T): void { void v; } }',
        'export interface Cfg<T = string | number> { value?: T } ==> export interface Cfg<T = number> { value?: T }',
        'export enum Status { OK = 0 } export namespace Status { export function parse(x: string | number): Status { void x; return Status.OK; } } ==> export enum Status { OK = 0 } export namespace Status { export function parse(x: number): Status { void x; return Status.OK; } }',
        'export interface Key { (x: string | number): string } export class Key { id = ""; } ==> export interface Key { (x: number): string } export class Key { id = ""; }',
        'export const SYM = Symbol("k"); export interface E { [SYM]?: string | number } ==> export const SYM = Symbol("k"); export interface E { [SYM]?: number }',
        'export class Base { protected static h(x: string | number): void { void x; } protected retry = 3; } ==> export class Base { protected static h(x: number): void { void x; } protected readonly retry = 3; }',
        'export class C { constructor(); constructor(port: number); constructor(port?: number) { void port; } } ==> export class C { constructor(port: number) { void port; } }',
        'export const DEFAULTS = { retries: 3 }; ==> export const DEFAULTS = { retries: 3 } as const;',
        'export class Box<T = number> { v?: T; } ==> export class Box<T = number | string> { v?: T; }',
        'export class Box<T = number | string> { v?: T; } ==> export class Box<T = number> { v?: T; }',
        'export interface Cfg<T = string | number, U = { T: T; $id?: T }> { v?: U } ==> export interface Cfg<T = number, U = { T: T; $id?: T }> { v?: U }',
      ]);
      assert.equal(
        diffTs(
          {
            'src/old.ts':
              'export class Secret { v = 1; }\nexport interface H { port?: string | number; }',
            'src/index.ts':
              'import {Secret, H} from "./old"; export function make(h?: H): Secret { void h; return new Secret(); }',
          },
          {
            'src/new.ts':
              'export class Secret { v = 1; }\nexport interface H { port?: string | number; }',
            'src/index.ts':
              'import {Secret, H} from "./new"; export function make(h?: H): Secret { void h; return new Secret(); }',
          },
        ).length,
        0,
      );
      expectPasses([
        'export namespace v1 { export interface Meta { a: string } export interface R { m: Meta } export declare function f(): Promise<R>; } ==> export namespace v1 { export interface Meta { a: string; b: number } export interface R { m: Meta; extra: boolean } export declare function f(): Promise<R>; }',
        'export class Sink<T = number> { set(v: T): void { void v; } } ==> export class Sink<T = number | string> { set(v: T): void { void v; } }',
        'export class R<T = number | string> { readonly v?: T; } ==> export class R<T = number> { readonly v?: T; }',
        'export interface Cfg<T = number> { value?: T } export function use(c: Cfg): void { void c; } ==> export interface Cfg<T = number | string> { value?: T } export function use(c: Cfg): void { void c; }',
      ]);

      const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'bcc-git-diff-'));
      try {
        runGit(tmpDir, ['init', '-b', 'main']);
        runGit(tmpDir, ['config', 'user.email', 'test@example.com']);
        runGit(tmpDir, ['config', 'user.name', 'Test User']);
        const pkgDir = path.join(tmpDir, 'handwritten/demo');
        fs.mkdirSync(path.join(pkgDir, 'src'), {recursive: true});
        fs.writeFileSync(
          path.join(pkgDir, 'package.json'),
          JSON.stringify({
            name: '@google-cloud/demo',
            version: '1.0.0',
            main: './build/src/index.js',
            types: './build/src/index.d.ts',
          }),
        );
        const indexTs = path.join(pkgDir, 'src/index.ts');
        fs.writeFileSync(
          path.join(pkgDir, 'src/extra.ts'),
          'export interface ExtraOpts { timeout?: string | number; }\n',
        );
        fs.writeFileSync(
          indexTs,
          'export {ExtraOpts} from "./extra";\nexport class Client { connect(port: string | number): string { return String(port); } }\n',
        );
        runGit(tmpDir, ['add', '-A']);
        runGit(tmpDir, ['commit', '-m', 'feat: initial public interface']);

        runGit(tmpDir, ['checkout', '-b', 'feature']);
        fs.mkdirSync(path.join(pkgDir, 'src/v1'), {recursive: true});
        fs.renameSync(
          path.join(pkgDir, 'src/extra.ts'),
          path.join(pkgDir, 'src/v1/extra.ts'),
        );
        fs.writeFileSync(
          path.join(pkgDir, 'src/extra.ts'),
          'export const INTERNAL_UNUSED = 1;\n',
        );
        fs.renameSync(indexTs, path.join(pkgDir, 'src/v1/index.ts'));
        fs.writeFileSync(
          path.join(pkgDir, 'src/v1/index.ts'),
          'export {ExtraOpts} from "./extra";\nexport class Client { connect(port: string | number | boolean): string { return String(port); } }\n',
        );
        fs.writeFileSync(
          path.join(pkgDir, 'package.json'),
          JSON.stringify({
            name: '@google-cloud/demo',
            version: '1.0.0',
            main: './build/src/v1/index.js',
            types: './build/src/v1/index.d.ts',
          }),
        );
        runGit(tmpDir, ['add', '-A']);
        runGit(tmpDir, ['commit', '-m', 'feat: widen input parameter']);
        const passRes = runGitDiffBreakingChangeCheck({
          repoRoot: tmpDir,
          baseRef: 'main',
        });
        assert.equal(passRes.passed, true);
        assert.equal(passRes.findings.length, 0);

        fs.writeFileSync(
          path.join(pkgDir, 'src/v1/index.ts'),
          'export {ExtraOpts} from "./extra";\nexport class Client { connect(port: number): string | undefined { void port; return undefined; } }\n',
        );
        runGit(tmpDir, ['commit', '-am', 'feat: restrict interface']);
        const failRes = runGitDiffBreakingChangeCheck({
          repoRoot: tmpDir,
          baseRef: 'main',
        });
        assert.equal(failRes.passed, false);
        assert.ok(failRes.findings.length > 0);
        assert.ok(
          failRes.annotations.some(a =>
            a.includes('title=Breaking Change Detected'),
          ),
        );
      } finally {
        fs.rmSync(tmpDir, {recursive: true, force: true});
        snippetSeedProgram = undefined;
        sharedDocumentRegistry = ts.createDocumentRegistry();
      }
    }, 120_000);
  });
}

if (hasTestRunner && runDiffGateOnly) {
  describe('public TypeScript interface breaking-change check', () => {
    it('ensures exported TypeScript types, parameter types, return types, and public symbols do not break existing consumer code against the base branch', () => {
      const result = runGitDiffBreakingChangeCheck({
        repoRoot: REPO_ROOT,
        baseRef: process.env.BREAKING_CHANGE_BASE_REF?.trim() || undefined,
        headRef: process.env.BREAKING_CHANGE_HEAD_REF?.trim() || undefined,
        eventName: process.env.GITHUB_EVENT_NAME?.trim() || undefined,
        stepSummaryPath: process.env.GITHUB_STEP_SUMMARY?.trim() || undefined,
      });

      for (const line of result.annotations) console.log(line);
      console.log(result.summaryMarkdown.trim());

      assert.equal(
        result.passed,
        true,
        `Detected ${result.findings.length} breaking public TypeScript interface change(s) (e.g., narrowed input/parameter types, widened return/output types, added required properties, or removed exports that cause existing consumer TypeScript code to fail compilation):\n\n${result.summaryMarkdown.trim()}`,
      );
    }, 600_000);
  });
}
