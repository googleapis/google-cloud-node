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
import {createRequire} from 'node:module';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {promisify} from 'node:util';

const execFileAsync = promisify(execFile);
const MODULE_DIR = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_REPO_ROOT = path.resolve(MODULE_DIR, '..');
const require = createRequire(path.join(DEFAULT_REPO_ROOT, 'package.json'));
const ts = require('typescript');

const MAX_GITHUB_ANNOTATIONS = 10;
const MAX_SUMMARY_ITEMS_INLINE = 50;
const SHARED_TS_LIB_CACHE = new Map();

function realpathSafe(p) {
  try {
    return fs.realpathSync(p);
  } catch {
    return p;
  }
}

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

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function runGit(args, cwd = DEFAULT_REPO_ROOT, options = {}) {
  return execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
    maxBuffer: 20 * 1024 * 1024,
    ...options,
  });
}

function createGitReader(repoRoot) {
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
    } catch {
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
    } catch {
      // Directory did not exist at rev.
    }
    const result = {files, dirs};
    treeCache.set(key, result);
    return result;
  }

  return {getFileAtRev, getSubtreeAtRev};
}

function hasInternalTag(node, sf) {
  const ranges = ts.getLeadingCommentRanges(sf.text, node.getFullStart());
  if (ranges) {
    for (const r of ranges) {
      const comment = sf.text.slice(r.pos, r.end);
      if (/@internal\b/.test(comment)) {
        return true;
      }
    }
  }
  const tags = ts.getJSDocTags(node);
  return tags.some(t => t.tagName.text === 'internal');
}

/**
 * Strips `@internal`-annotated top-level and member declarations from a `.d.ts` SourceFile,
 * matching TypeScript's `stripInternal: true` behavior for pre-written declaration files.
 */
function stripInternalFromDts(sf) {
  if (!sf.text.includes('@internal')) {
    return sf.text;
  }
  const transformer = context => {
    const visit = node => {
      if (
        (ts.isFunctionDeclaration(node) ||
          ts.isClassDeclaration(node) ||
          ts.isInterfaceDeclaration(node) ||
          ts.isTypeAliasDeclaration(node) ||
          ts.isEnumDeclaration(node) ||
          ts.isModuleDeclaration(node) ||
          ts.isVariableStatement(node) ||
          ts.isPropertyDeclaration(node) ||
          ts.isPropertySignature(node) ||
          ts.isMethodDeclaration(node) ||
          ts.isMethodSignature(node) ||
          ts.isGetAccessorDeclaration(node) ||
          ts.isSetAccessorDeclaration(node) ||
          ts.isConstructSignatureDeclaration(node) ||
          ts.isCallSignatureDeclaration(node)) &&
        hasInternalTag(node, sf)
      ) {
        return undefined;
      }
      return ts.visitEachChild(node, visit, context);
    };
    return root => ts.visitNode(root, visit);
  };
  const res = ts.transform(sf, [transformer]);
  const printer = ts.createPrinter({newLine: ts.NewLineKind.LineFeed});
  const printed = printer.printFile(res.transformed[0]);
  res.dispose();
  return printed;
}

function stripPrivateFromClassMembers(members, visit, context) {
  const newMembers = [];
  for (const rawMember of members) {
    const m = ts.visitEachChild(rawMember, visit, context);
    if (m.name && ts.isPrivateIdentifier(m.name)) {
      continue;
    }
    const flags = ts.getCombinedModifierFlags(m);
    if (ts.isConstructorDeclaration(m)) {
      const newParams = m.parameters.map(p => {
        const pMods = ts.canHaveModifiers(p) ? ts.getModifiers(p) : undefined;
        if (!pMods) return p;
        const wasPrivate = pMods.some(
          mod => mod.kind === ts.SyntaxKind.PrivateKeyword,
        );
        const wasProtected = pMods.some(
          mod => mod.kind === ts.SyntaxKind.ProtectedKeyword,
        );
        if (!wasPrivate && !wasProtected) return p;
        if (wasPrivate) {
          const kept = pMods.filter(
            mod =>
              mod.kind !== ts.SyntaxKind.PrivateKeyword &&
              mod.kind !== ts.SyntaxKind.ReadonlyKeyword &&
              mod.kind !== ts.SyntaxKind.OverrideKeyword,
          );
          return ts.factory.updateParameterDeclaration(
            p,
            kept,
            p.dotDotDotToken,
            p.name,
            p.questionToken,
            p.type,
            p.initializer,
          );
        }
        const filtered = pMods.filter(
          mod => mod.kind !== ts.SyntaxKind.ProtectedKeyword,
        );
        const hasPublicOrReadonly = filtered.some(
          mod =>
            mod.kind === ts.SyntaxKind.PublicKeyword ||
            mod.kind === ts.SyntaxKind.ReadonlyKeyword,
        );
        const finalMods = hasPublicOrReadonly
          ? filtered
          : [
              ...filtered,
              ts.factory.createModifier(ts.SyntaxKind.PublicKeyword),
            ];
        return ts.factory.updateParameterDeclaration(
          p,
          finalMods,
          p.dotDotDotToken,
          p.name,
          p.questionToken,
          p.type,
          p.initializer,
        );
      });
      const ctorMods = ts.canHaveModifiers(m) ? ts.getModifiers(m) : undefined;
      const updatedCtorMods =
        ctorMods && flags & ts.ModifierFlags.Protected
          ? ctorMods.filter(mod => mod.kind !== ts.SyntaxKind.ProtectedKeyword)
          : ctorMods;
      newMembers.push(
        ts.factory.updateConstructorDeclaration(
          m,
          updatedCtorMods,
          newParams,
          m.body,
        ),
      );
      continue;
    }
    if (flags & ts.ModifierFlags.Private) {
      continue;
    }
    if (flags & ts.ModifierFlags.Protected) {
      const mods = ts.canHaveModifiers(m) ? ts.getModifiers(m) : [];
      const filteredMods = (mods || []).filter(
        mod => mod.kind !== ts.SyntaxKind.ProtectedKeyword,
      );
      if (ts.isPropertyDeclaration(m)) {
        newMembers.push(
          ts.factory.updatePropertyDeclaration(
            m,
            filteredMods,
            m.name,
            m.questionToken || m.exclamationToken,
            m.type,
            m.initializer,
          ),
        );
        continue;
      }
      if (ts.isMethodDeclaration(m)) {
        newMembers.push(
          ts.factory.updateMethodDeclaration(
            m,
            filteredMods,
            m.asteriskToken,
            m.name,
            m.questionToken,
            m.typeParameters,
            m.parameters,
            m.type,
            m.body,
          ),
        );
        continue;
      }
      if (ts.isGetAccessorDeclaration(m)) {
        newMembers.push(
          ts.factory.updateGetAccessorDeclaration(
            m,
            filteredMods,
            m.name,
            m.parameters,
            m.type,
            m.body,
          ),
        );
        continue;
      }
      if (ts.isSetAccessorDeclaration(m)) {
        newMembers.push(
          ts.factory.updateSetAccessorDeclaration(
            m,
            filteredMods,
            m.name,
            m.parameters,
            m.body,
          ),
        );
        continue;
      }
    }
    newMembers.push(m);
  }
  return newMembers;
}

/**
 * Strips `private` class members and removes the `protected` modifier keyword
 * from class declarations and class expressions so TypeScript's structural type
 * checker can compare classes without nominal private/protected brand failures.
 */
export function stripPrivateMembersFromSourceFile(
  sf,
  onlyClassExpressions = false,
) {
  const transformer = context => {
    const visit = node => {
      if (ts.isClassExpression(node)) {
        const newMembers = stripPrivateFromClassMembers(
          node.members,
          visit,
          context,
        );
        return ts.factory.updateClassExpression(
          node,
          node.modifiers,
          node.name,
          node.typeParameters,
          node.heritageClauses,
          newMembers,
        );
      }
      if (!onlyClassExpressions && ts.isClassDeclaration(node)) {
        const newMembers = stripPrivateFromClassMembers(
          node.members,
          visit,
          context,
        );
        return ts.factory.updateClassDeclaration(
          node,
          node.modifiers,
          node.name,
          node.typeParameters,
          node.heritageClauses,
          newMembers,
        );
      }
      return ts.visitEachChild(node, visit, context);
    };
    return root => ts.visitNode(root, visit);
  };
  const res = ts.transform(sf, [transformer]);
  const printer = ts.createPrinter({newLine: ts.NewLineKind.LineFeed});
  const printed = printer.printFile(res.transformed[0]);
  res.dispose();
  return ts.createSourceFile(sf.fileName, printed, sf.languageVersion, true);
}

function getMemberNameDisplay(nameNode, sf) {
  if (!nameNode) return undefined;
  if (
    ts.isIdentifier(nameNode) ||
    ts.isStringLiteral(nameNode) ||
    ts.isNumericLiteral(nameNode) ||
    ts.isPrivateIdentifier(nameNode)
  ) {
    return nameNode.text;
  }
  if (ts.isComputedPropertyName(nameNode)) {
    return `[${nameNode.expression.getText(sf).trim()}]`;
  }
  return undefined;
}

function rankVisibility(vis) {
  if (vis === 'public') return 2;
  if (vis === 'protected') return 1;
  return 0;
}

function getModifierVisibility(node) {
  if (node.name && ts.isPrivateIdentifier(node.name)) return 'private';
  const flags = ts.getCombinedModifierFlags(node);
  if (flags & ts.ModifierFlags.Private) return 'private';
  if (flags & ts.ModifierFlags.Protected) return 'protected';
  return 'public';
}

function extractSingleClassMeta(classNode, sf) {
  const flags = ts.getCombinedModifierFlags(classNode);
  const isAbstract = Boolean(flags & ts.ModifierFlags.Abstract);
  let ctorVisibility = 'public';
  const members = new Map();

  const recordMember = (key, visibility, extra = {}) => {
    const existing = members.get(key) || {
      visibility: null,
      getterVis: null,
      setterVis: null,
      isAbstract: false,
      isReadonly: false,
      kind: extra.kind || 'member',
    };
    if (extra.isGetter) {
      existing.getterVis =
        existing.getterVis === null ||
        rankVisibility(visibility) > rankVisibility(existing.getterVis)
          ? visibility
          : existing.getterVis;
    } else if (extra.isSetter) {
      existing.setterVis =
        existing.setterVis === null ||
        rankVisibility(visibility) > rankVisibility(existing.setterVis)
          ? visibility
          : existing.setterVis;
    } else {
      existing.visibility =
        existing.visibility === null ||
        rankVisibility(visibility) > rankVisibility(existing.visibility)
          ? visibility
          : existing.visibility;
    }
    if (extra.isAbstract) existing.isAbstract = true;
    if (extra.isReadonly) existing.isReadonly = true;
    members.set(key, existing);
  };

  for (const m of classNode.members) {
    if (ts.isConstructorDeclaration(m)) {
      const cVis = getModifierVisibility(m);
      if (
        !m.body ||
        classNode.members.every(
          x =>
            !ts.isConstructorDeclaration(x) ||
            getModifierVisibility(x) !== 'public',
        )
      ) {
        if (
          rankVisibility(cVis) < rankVisibility(ctorVisibility) &&
          ctorVisibility === 'public'
        ) {
          ctorVisibility = cVis;
        }
      }
      if (cVis === 'public') {
        ctorVisibility = 'public';
      }
      for (const p of m.parameters) {
        const pFlags = ts.getCombinedModifierFlags(p);
        const isParamProp = Boolean(
          pFlags &
          (ts.ModifierFlags.Public |
            ts.ModifierFlags.Protected |
            ts.ModifierFlags.Private |
            ts.ModifierFlags.Readonly),
        );
        if (isParamProp && ts.isIdentifier(p.name)) {
          const vis =
            pFlags & ts.ModifierFlags.Private
              ? 'private'
              : pFlags & ts.ModifierFlags.Protected
                ? 'protected'
                : 'public';
          recordMember(p.name.text, vis, {
            isReadonly: Boolean(pFlags & ts.ModifierFlags.Readonly),
          });
        }
      }
      continue;
    }

    const name = getMemberNameDisplay(m.name, sf);
    if (!name) continue;
    const mFlags = ts.getCombinedModifierFlags(m);
    const isStatic = Boolean(mFlags & ts.ModifierFlags.Static);
    const key = `${isStatic ? 'static:' : ''}${name}`;
    const vis = getModifierVisibility(m);

    if (ts.isGetAccessorDeclaration(m)) {
      recordMember(key, vis, {
        isGetter: true,
        isAbstract: Boolean(mFlags & ts.ModifierFlags.Abstract),
        kind: 'accessor',
      });
    } else if (ts.isSetAccessorDeclaration(m)) {
      recordMember(key, vis, {
        isSetter: true,
        isAbstract: Boolean(mFlags & ts.ModifierFlags.Abstract),
        kind: 'accessor',
      });
    } else {
      recordMember(key, vis, {
        isAbstract: Boolean(mFlags & ts.ModifierFlags.Abstract),
        isReadonly: Boolean(mFlags & ts.ModifierFlags.Readonly),
      });
    }
  }

  const ctors = classNode.members.filter(ts.isConstructorDeclaration);
  if (ctors.length > 0) {
    let best = 'private';
    for (const c of ctors) {
      const v = getModifierVisibility(c);
      if (rankVisibility(v) > rankVisibility(best)) best = v;
    }
    ctorVisibility = best;
  }

  for (const info of members.values()) {
    if (info.getterVis !== null || info.setterVis !== null) {
      if (info.getterVis !== null && info.setterVis !== null) {
        info.visibility =
          rankVisibility(info.getterVis) >= rankVisibility(info.setterVis)
            ? info.getterVis
            : info.setterVis;
        info.isReadonly = info.setterVis === 'private';
      } else if (info.getterVis !== null) {
        info.visibility = info.getterVis;
        info.isReadonly = true;
      } else {
        info.visibility = info.setterVis;
      }
    }
  }

  return {isAbstract, ctorVisibility, members};
}

/**
 * Collects class metadata keyed by namespace-qualified declaration path (and `'default'`
 * for anonymous `export default class`) from an unmodified SourceFile.
 */
export function collectClassAccessibility(sf) {
  const map = new Map();
  if (!sf) return map;
  const scopeStack = [];
  const visit = node => {
    if (ts.isModuleDeclaration(node) && ts.isIdentifier(node.name)) {
      scopeStack.push(node.name.text);
      ts.forEachChild(node, visit);
      scopeStack.pop();
      return;
    }
    if (ts.isClassDeclaration(node)) {
      const flags = ts.getCombinedModifierFlags(node);
      const localName = node.name
        ? node.name.text
        : flags & ts.ModifierFlags.Default
          ? 'default'
          : undefined;
      if (localName) {
        const qualName =
          scopeStack.length > 0
            ? `${scopeStack.join('.')}.${localName}`
            : localName;
        map.set(qualName, extractSingleClassMeta(node, sf));
      }
      return;
    }
    ts.forEachChild(node, visit);
  };
  ts.forEachChild(sf, visit);
  return map;
}

function getQualifiedDeclName(decl) {
  const parts = [];
  if (ts.isClassDeclaration(decl)) {
    const flags = ts.getCombinedModifierFlags(decl);
    parts.unshift(
      decl.name
        ? decl.name.text
        : flags & ts.ModifierFlags.Default
          ? 'default'
          : '',
    );
  }
  let cur = decl.parent;
  while (cur && !ts.isSourceFile(cur)) {
    if (ts.isModuleDeclaration(cur) && ts.isIdentifier(cur.name)) {
      parts.unshift(cur.name.text);
    }
    cur = cur.parent;
  }
  return parts.filter(Boolean).join('.');
}

function findClassMetaForSymbol(sym, rawMetaByFile) {
  const decls = sym.declarations || [];
  for (const d of decls) {
    if (ts.isClassDeclaration(d)) {
      const sf = d.getSourceFile();
      const fileMeta = rawMetaByFile.get(path.resolve(sf.fileName));
      if (!fileMeta) continue;
      const qualName = getQualifiedDeclName(d);
      if (fileMeta.has(qualName)) {
        return fileMeta.get(qualName);
      }
    }
  }
  return undefined;
}

function isTypeOnlyExportSymbol(sym) {
  const decls = sym.declarations;
  if (!decls || decls.length === 0) return false;
  let sawAliasSpecifier = false;
  for (const d of decls) {
    if (ts.isExportSpecifier(d)) {
      sawAliasSpecifier = true;
      const parentDecl = d.parent && d.parent.parent;
      const parentTypeOnly =
        parentDecl && ts.isExportDeclaration(parentDecl)
          ? Boolean(parentDecl.isTypeOnly)
          : false;
      if (!d.isTypeOnly && !parentTypeOnly) {
        return false;
      }
    } else if (ts.isImportSpecifier(d)) {
      sawAliasSpecifier = true;
      const clause = d.parent && d.parent.parent;
      const clauseTypeOnly =
        clause && ts.isImportClause(clause)
          ? Boolean(clause.isTypeOnly)
          : false;
      if (!d.isTypeOnly && !clauseTypeOnly) {
        return false;
      }
    } else if (ts.isImportClause(d) || ts.isNamespaceImport(d)) {
      const clause = ts.isNamespaceImport(d) ? d.parent : d;
      sawAliasSpecifier = true;
      if (!clause || !clause.isTypeOnly) {
        return false;
      }
    } else {
      return false;
    }
  }
  return sawAliasSpecifier;
}

function resolveAliased(checker, sym) {
  if (sym.flags & ts.SymbolFlags.Alias) {
    try {
      return checker.getAliasedSymbol(sym);
    } catch {
      return sym;
    }
  }
  return sym;
}

const VALUE_SYMBOL_MASK =
  ts.SymbolFlags.Value |
  ts.SymbolFlags.Function |
  ts.SymbolFlags.Variable |
  ts.SymbolFlags.Class |
  ts.SymbolFlags.Enum |
  ts.SymbolFlags.ValueModule;

const TYPE_SYMBOL_MASK =
  ts.SymbolFlags.Type |
  ts.SymbolFlags.Interface |
  ts.SymbolFlags.TypeAlias |
  ts.SymbolFlags.Class |
  ts.SymbolFlags.Enum;

function hasRuntimeValue(sym, resolvedSym) {
  if (isTypeOnlyExportSymbol(sym)) return false;
  return Boolean(resolvedSym.flags & VALUE_SYMBOL_MASK);
}

function hasTypeMeaning(resolvedSym) {
  return Boolean(resolvedSym.flags & TYPE_SYMBOL_MASK);
}

function isSymbolReadonly(sym) {
  const decls = sym.declarations;
  if (!decls || decls.length === 0) return false;
  let sawGetter = false;
  let sawSetter = false;
  let sawProp = false;
  let allPropsReadonly = true;
  for (const d of decls) {
    if (ts.isGetAccessorDeclaration(d)) {
      sawGetter = true;
    } else if (ts.isSetAccessorDeclaration(d)) {
      const flags = ts.getCombinedModifierFlags(d);
      if (!(flags & ts.ModifierFlags.Private)) {
        sawSetter = true;
      }
    } else if (
      ts.isPropertyDeclaration(d) ||
      ts.isPropertySignature(d) ||
      ts.isParameter(d)
    ) {
      sawProp = true;
      const flags = ts.getCombinedModifierFlags(d);
      if (!(flags & ts.ModifierFlags.Readonly)) {
        allPropsReadonly = false;
      }
    } else if (ts.isVariableDeclaration(d)) {
      const list = d.parent;
      if (list && ts.isVariableDeclarationList(list)) {
        return Boolean(list.flags & ts.NodeFlags.Const);
      }
    }
  }
  if (sawProp) return allPropsReadonly;
  if (sawGetter && !sawSetter) return true;
  return false;
}

function formatPropDisplayName(propSym) {
  const rawName = propSym.getName();
  if (!rawName.startsWith('__@')) return rawName;
  const decl =
    propSym.valueDeclaration ||
    (propSym.declarations && propSym.declarations[0]);
  if (decl && decl.name && ts.isComputedPropertyName(decl.name)) {
    return `[${decl.name.expression.getText(decl.getSourceFile()).trim()}]`;
  }
  const match = /^__@([^@]+)/.exec(rawName);
  return match ? `[Symbol.${match[1]}]` : rawName;
}

function shouldSkipInternalProperty(propName) {
  return (
    propName === 'prototype' ||
    propName.startsWith('#') ||
    propName.startsWith('_#') ||
    propName.startsWith('__@#')
  );
}

function getTypeParameterDecls(sym) {
  const decls = sym.declarations || [];
  let best = [];
  for (const d of decls) {
    if (
      (ts.isClassDeclaration(d) ||
        ts.isInterfaceDeclaration(d) ||
        ts.isTypeAliasDeclaration(d)) &&
      d.typeParameters &&
      d.typeParameters.length > best.length
    ) {
      best = [...d.typeParameters];
    }
  }
  if (best.length === 0) return {min: 0, max: 0, decls: []};
  let min = best.length;
  for (let i = 0; i < best.length; i++) {
    const hasDefaultInAny = decls.some(
      d =>
        d.typeParameters &&
        d.typeParameters[i] &&
        d.typeParameters[i].default !== undefined,
    );
    if (hasDefaultInAny && i < min) {
      min = i;
    }
  }
  return {min, max: best.length, decls: best};
}

function getSigArity(checker, sig) {
  const decl = sig.getDeclaration ? sig.getDeclaration() : sig.declaration;
  let minArgs = 0;
  let maxArgs = sig.parameters.length;
  let isUnboundedRest = false;

  if (decl && decl.parameters && decl.parameters.length > 0) {
    const lastParam = decl.parameters[decl.parameters.length - 1];
    if (lastParam.dotDotDotToken) {
      const restTupleType = lastParam.type
        ? checker.getTypeFromTypeNode(lastParam.type)
        : undefined;
      if (!restTupleType || !checker.isTupleType(restTupleType)) {
        isUnboundedRest = true;
        maxArgs = Infinity;
      } else {
        const tupleTarget = restTupleType.target || restTupleType;
        const elemFlags = tupleTarget.elementFlags || [];
        if (
          elemFlags.some(
            f => f & (ts.ElementFlags.Rest | ts.ElementFlags.Variadic),
          )
        ) {
          isUnboundedRest = true;
          maxArgs = Infinity;
        } else {
          maxArgs = decl.parameters.length - 1 + elemFlags.length;
        }
      }
    }
  }

  for (let i = 0; i < sig.parameters.length; i++) {
    if (isUnboundedRest && i === sig.parameters.length - 1) {
      break;
    }
    const pSym = sig.parameters[i];
    const pDecl =
      pSym.valueDeclaration || (pSym.declarations && pSym.declarations[0]);
    const isOpt =
      Boolean(pSym.flags & ts.SymbolFlags.Optional) ||
      Boolean(
        pDecl &&
        ts.isParameter(pDecl) &&
        (pDecl.questionToken || pDecl.initializer),
      );
    if (isOpt) {
      break;
    }
    minArgs++;
  }

  const tpDecls = decl && decl.typeParameters ? [...decl.typeParameters] : [];
  const maxTp = tpDecls.length;
  const minTp = tpDecls.filter(tp => !tp.default).length;
  return {minArgs, maxArgs, minTp, maxTp, tpDecls};
}

/**
 * Classifies exported interface and type-alias symbols in a module into `'input'` vs `'output'`.
 * An interface/type alias is treated as `'output'` only when it is referenced in covariant
 * (return / property / getter) positions of exported APIs and never in contravariant parameter positions.
 */
function classifyModuleTypeVariance(
  checker,
  baseExports,
  targetSymToExportName,
) {
  const inInput = new Set();
  const inOutput = new Set();
  if (targetSymToExportName.size === 0) {
    return {inInput, inOutput};
  }

  const recordRef = (idNode, polarity) => {
    const sym = checker.getSymbolAtLocation(idNode);
    if (!sym) return;
    const resolved = resolveAliased(checker, sym);
    const expName = targetSymToExportName.get(resolved);
    if (expName) {
      if (polarity === 'in') inInput.add(expName);
      else inOutput.add(expName);
    }
  };

  const visitTypeNode = (node, polarity) => {
    if (!node) return;
    if (ts.isTypeReferenceNode(node)) {
      if (ts.isIdentifier(node.typeName)) {
        recordRef(node.typeName, polarity);
      } else if (ts.isQualifiedName(node.typeName)) {
        recordRef(node.typeName.right, polarity);
      }
      if (node.typeArguments) {
        for (const arg of node.typeArguments) {
          visitTypeNode(arg, polarity);
        }
      }
      return;
    }
    if (ts.isFunctionTypeNode(node) || ts.isConstructorTypeNode(node)) {
      const flipped = polarity === 'in' ? 'out' : 'in';
      for (const p of node.parameters) {
        visitTypeNode(p.type, flipped);
      }
      visitTypeNode(node.type, polarity);
      return;
    }
    ts.forEachChild(node, child => {
      if (ts.isParameter(child)) {
        const flipped = polarity === 'in' ? 'out' : 'in';
        visitTypeNode(child.type, flipped);
      } else if (
        ts.isMethodSignature(child) ||
        ts.isCallSignatureDeclaration(child)
      ) {
        const flipped = polarity === 'in' ? 'out' : 'in';
        for (const p of child.parameters) visitTypeNode(p.type, flipped);
        visitTypeNode(child.type, polarity);
      } else {
        visitTypeNode(child, polarity);
      }
    });
  };

  for (const expSym of baseExports) {
    const resolved = resolveAliased(checker, expSym);
    for (const stmt of resolved.declarations || []) {
      if (ts.isFunctionDeclaration(stmt)) {
        for (const p of stmt.parameters) visitTypeNode(p.type, 'in');
        visitTypeNode(stmt.type, 'out');
      } else if (ts.isVariableDeclaration(stmt)) {
        visitTypeNode(stmt.type, 'out');
      } else if (ts.isClassDeclaration(stmt)) {
        for (const m of stmt.members) {
          const mFlags = ts.getCombinedModifierFlags(m);
          if (mFlags & ts.ModifierFlags.Private) continue;
          if (ts.isConstructorDeclaration(m)) {
            for (const p of m.parameters) visitTypeNode(p.type, 'in');
          } else if (ts.isMethodDeclaration(m)) {
            for (const p of m.parameters) visitTypeNode(p.type, 'in');
            visitTypeNode(m.type, 'out');
          } else if (ts.isPropertyDeclaration(m)) {
            visitTypeNode(m.type, 'out');
          } else if (ts.isGetAccessorDeclaration(m)) {
            visitTypeNode(m.type, 'out');
          } else if (ts.isSetAccessorDeclaration(m)) {
            for (const p of m.parameters) visitTypeNode(p.type, 'in');
          }
        }
      }
    }
  }

  // Transitively propagate variance through exported interfaces and type aliases
  // (e.g. `query(): Promise<QueryResult>` -> `interface QueryResult { rows: Row[] }` marks `Row` as output).
  const expNameToResolved = new Map();
  for (const [sym, name] of targetSymToExportName.entries()) {
    expNameToResolved.set(name, sym);
  }
  const propagated = new Set();
  let changed = true;
  while (changed) {
    changed = false;
    for (const [name, sym] of expNameToResolved.entries()) {
      const pols = [];
      if (inInput.has(name) && !propagated.has(`in::${name}`)) pols.push('in');
      if (inOutput.has(name) && !propagated.has(`out::${name}`))
        pols.push('out');
      for (const pol of pols) {
        propagated.add(`${pol}::${name}`);
        const prevIn = inInput.size;
        const prevOut = inOutput.size;
        for (const decl of sym.declarations || []) {
          if (ts.isTypeAliasDeclaration(decl)) {
            visitTypeNode(decl.type, pol);
          } else if (ts.isInterfaceDeclaration(decl)) {
            if (decl.heritageClauses) {
              for (const hc of decl.heritageClauses) visitTypeNode(hc, pol);
            }
            for (const m of decl.members) {
              visitTypeNode(m, pol);
            }
          }
        }
        if (inInput.size !== prevIn || inOutput.size !== prevOut) {
          changed = true;
        }
      }
    }
  }

  return {inInput, inOutput};
}

function qualifyBaseConstraintNode(
  constraintNode,
  checker,
  tpNamesSet,
  symToExportName,
  modAlias,
  dtsFiles,
  coExportNames = null,
) {
  let unresolvable = false;
  const printer = ts.createPrinter({newLine: ts.NewLineKind.LineFeed});
  const baseSf = constraintNode.getSourceFile();
  const qualify = context => {
    const visit = node => {
      if (ts.isTypeReferenceNode(node) && ts.isIdentifier(node.typeName)) {
        const id = node.typeName.text;
        if (tpNamesSet.has(id)) {
          return ts.visitEachChild(node, visit, context);
        }
        const sym = checker.getSymbolAtLocation(node.typeName);
        const resolved = sym ? resolveAliased(checker, sym) : undefined;
        const newArgs = node.typeArguments
          ? ts.factory.createNodeArray(
              node.typeArguments.map(a => ts.visitNode(a, visit)),
            )
          : undefined;
        if (resolved && symToExportName.has(resolved)) {
          const expName = symToExportName.get(resolved);
          if (!coExportNames || coExportNames.has(expName)) {
            return ts.factory.createTypeReferenceNode(
              ts.factory.createQualifiedName(
                ts.factory.createIdentifier(modAlias),
                ts.factory.createIdentifier(expName),
              ),
              newArgs,
            );
          }
        }
        const declFile =
          resolved &&
          resolved.declarations &&
          resolved.declarations[0] &&
          path.resolve(resolved.declarations[0].getSourceFile().fileName);
        if (declFile && dtsFiles.has(declFile)) {
          const declModSym = checker.getSymbolAtLocation(
            resolved.declarations[0].getSourceFile(),
          );
          const subExports = declModSym
            ? checker.getExportsOfModule(declModSym)
            : [];
          const matchSub = subExports.find(
            s =>
              resolveAliased(checker, s) === resolved &&
              isValidIdentifierName(s.getName()),
          );
          if (matchSub) {
            return ts.factory.createImportTypeNode(
              ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral(
                  toPosix(stripDtsExtension(declFile)),
                ),
              ),
              undefined,
              ts.factory.createIdentifier(matchSub.getName()),
              newArgs,
              false,
            );
          }
          unresolvable = true;
        }
      }
      return ts.visitEachChild(node, visit, context);
    };
    return n => ts.visitNode(n, visit);
  };
  const res = ts.transform(constraintNode, [qualify]);
  const text = printer.printNode(
    ts.EmitHint.Unspecified,
    res.transformed[0],
    baseSf,
  );
  res.dispose();
  return unresolvable ? null : text;
}

function isValidIdentifierName(name) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) && name !== 'default';
}

function buildGenericBridgeSource(pairsInfo, checker, dtsFiles) {
  const lines = ['export {};'];
  const taskMap = new Map();
  let modIdx = 0;
  let probeIdx = 0;

  for (const pair of pairsInfo) {
    const bAlias = `__BM${modIdx}`;
    const hAlias = `__HM${modIdx}`;
    modIdx++;
    const bImport = toPosix(pair.baseDtsNoExt);
    const hImport = toPosix(pair.headDtsNoExt);
    lines.push(`import * as ${bAlias} from ${JSON.stringify(bImport)};`);
    lines.push(`import * as ${hAlias} from ${JSON.stringify(hImport)};`);

    const renderTpList = tpDecls => {
      const cTpDeclStrs = [];
      const pTpDeclStrs = [];
      const tpArgNames = [];
      const tpNamesSet = new Set(tpDecls.map(tp => tp.name.text));
      for (const tp of tpDecls) {
        const name = tp.name.text;
        tpArgNames.push(name);
        if (tp.constraint) {
          const bText = qualifyBaseConstraintNode(
            tp.constraint,
            checker,
            tpNamesSet,
            pair.symToExportName,
            bAlias,
            dtsFiles,
            null,
          );
          if (bText === null) return null;
          const hText = qualifyBaseConstraintNode(
            tp.constraint,
            checker,
            tpNamesSet,
            pair.symToExportName,
            hAlias,
            dtsFiles,
            pair.coExportNames || null,
          );
          if (hText === null) return null;
          cTpDeclStrs.push(`${name} extends ${hText}`);
          pTpDeclStrs.push(
            hText === bText
              ? `${name} extends ${bText}`
              : `${name} extends (${bText}) & (${hText})`,
          );
        } else {
          cTpDeclStrs.push(name);
          pTpDeclStrs.push(name);
        }
      }
      return {
        cTpParamsCode: `<${cTpDeclStrs.join(', ')}>`,
        pTpParamsCode: `<${pTpDeclStrs.join(', ')}>`,
        tpArgsCode: `<${tpArgNames.join(', ')}>`,
      };
    };

    for (const item of pair.genericItems) {
      const id = probeIdx++;
      if (item.kind === 'type') {
        const rendered = renderTpList(item.tpDecls);
        if (!rendered) continue;
        const cName = `__TC_${id}`;
        const pName = `__TP_${id}`;
        lines.push(
          `type ${cName}${rendered.cTpParamsCode} = ${hAlias}.${item.exportName}${rendered.tpArgsCode};`,
        );
        lines.push(
          `type ${pName}${rendered.pTpParamsCode} = [${bAlias}.${item.exportName}${rendered.tpArgsCode}, ${hAlias}.${item.exportName}${rendered.tpArgsCode}];`,
        );
        taskMap.set(item.key, {cName, pName});
      } else if (item.kind === 'valueFn') {
        const rendered = renderTpList(item.tpDecls);
        if (!rendered) continue;
        const bConst = `__bv_${id}`;
        const hConst = `__hv_${id}`;
        const cName = `__VC_${id}`;
        const pName = `__VP_${id}`;
        lines.push(
          `declare const ${bConst}: typeof ${bAlias}.${item.exportName};`,
        );
        lines.push(
          `declare const ${hConst}: typeof ${hAlias}.${item.exportName};`,
        );
        lines.push(
          `type ${cName}${rendered.cTpParamsCode} = typeof ${hConst}${rendered.tpArgsCode};`,
        );
        lines.push(
          `type ${pName}${rendered.pTpParamsCode} = [typeof ${bConst}${rendered.tpArgsCode}, typeof ${hConst}${rendered.tpArgsCode}];`,
        );
        taskMap.set(item.key, {cName, pName});
      } else if (item.kind === 'method') {
        const rendered = renderTpList(item.tpDecls);
        if (!rendered) continue;
        const bConst = `__bm_${id}`;
        const hConst = `__hm_${id}`;
        const cName = `__MC_${id}`;
        const pName = `__MP_${id}`;
        const bOwner = item.isStatic
          ? `(typeof ${bAlias}.${item.exportName})`
          : `${bAlias}.${item.exportName}`;
        const hOwner = item.isStatic
          ? `(typeof ${hAlias}.${item.exportName})`
          : `${hAlias}.${item.exportName}`;
        lines.push(
          `declare const ${bConst}: NonNullable<${bOwner}[${JSON.stringify(item.methodName)}]>;`,
        );
        lines.push(
          `declare const ${hConst}: NonNullable<${hOwner}[${JSON.stringify(item.methodName)}]>;`,
        );
        lines.push(
          `type ${cName}${rendered.cTpParamsCode} = typeof ${hConst}${rendered.tpArgsCode};`,
        );
        lines.push(
          `type ${pName}${rendered.pTpParamsCode} = [typeof ${bConst}${rendered.tpArgsCode}, typeof ${hConst}${rendered.tpArgsCode}];`,
        );
        taskMap.set(item.key, {cName, pName});
      }
    }
  }

  return {bridgeCode: lines.join('\n') + '\n', taskMap};
}

function collectGenericProbeItemsFromChecker(checker, bSf, hSf) {
  const genericItems = [];
  const symToExportName = new Map();
  const coExportNames = new Set();
  if (!bSf || !hSf) return {genericItems, symToExportName, coExportNames};

  const bMod = checker.getSymbolAtLocation(bSf);
  const hMod = checker.getSymbolAtLocation(hSf);
  if (!bMod || !hMod) return {genericItems, symToExportName, coExportNames};

  const bExports = checker.getExportsOfModule(bMod);
  const hExports = new Map(
    checker.getExportsOfModule(hMod).map(s => [s.getName(), s]),
  );
  const absBSf = path.resolve(bSf.fileName);

  for (const bSym of bExports) {
    const expName = bSym.getName();
    if (!isValidIdentifierName(expName)) continue;
    const resolvedB = resolveAliased(checker, bSym);
    if (resolvedB.flags & TYPE_SYMBOL_MASK && !symToExportName.has(resolvedB)) {
      symToExportName.set(resolvedB, expName);
      const maybeH = hExports.get(expName);
      if (maybeH && resolveAliased(checker, maybeH).flags & TYPE_SYMBOL_MASK) {
        coExportNames.add(expName);
      }
    }

    const hSym = hExports.get(expName);
    if (!hSym) continue;
    const resolvedH = resolveAliased(checker, hSym);

    // 1. Exported generic interfaces, type aliases, and classes (including re-exports from submodules)
    if (
      resolvedB.flags & TYPE_SYMBOL_MASK &&
      resolvedH.flags & TYPE_SYMBOL_MASK
    ) {
      const bTp = getTypeParameterDecls(resolvedB);
      const hTp = getTypeParameterDecls(resolvedH);
      if (bTp.max > 0 && hTp.min <= bTp.max && hTp.max >= bTp.max) {
        genericItems.push({
          kind: 'type',
          exportName: expName,
          tpDecls: bTp.decls,
          key: `${absBSf}::type::${expName}`,
        });
      }

      // Probe generic methods on non-generic exported classes & interfaces
      if (
        bTp.max === 0 &&
        hTp.max === 0 &&
        !(resolvedB.flags & ts.SymbolFlags.Enum)
      ) {
        const bInstType = checker.getDeclaredTypeOfSymbol(resolvedB);
        const hInstType = checker.getDeclaredTypeOfSymbol(resolvedH);
        const ownerPrefix =
          resolvedB.flags & ts.SymbolFlags.Class
            ? `Class '${expName}'`
            : `Interface/Type '${expName}'`;
        for (const prop of checker.getPropertiesOfType(bInstType)) {
          const mName = prop.getName();
          if (
            !isValidIdentifierName(mName) ||
            shouldSkipInternalProperty(mName)
          ) {
            continue;
          }
          const hProp = checker.getPropertyOfType(hInstType, mName);
          if (!hProp) continue;
          const bMType = checker.getNonNullableType(
            checker.getTypeOfSymbolAtLocation(prop, bSf),
          );
          const hMType = checker.getNonNullableType(
            checker.getTypeOfSymbolAtLocation(hProp, hSf),
          );
          const bSigs = checker.getSignaturesOfType(
            bMType,
            ts.SignatureKind.Call,
          );
          const hSigs = checker.getSignaturesOfType(
            hMType,
            ts.SignatureKind.Call,
          );
          if (bSigs.length === 1 && hSigs.length === 1) {
            const bAr = getSigArity(checker, bSigs[0]);
            const hAr = getSigArity(checker, hSigs[0]);
            if (
              bAr.maxTp > 0 &&
              hAr.minTp <= bAr.maxTp &&
              hAr.maxTp >= bAr.maxTp
            ) {
              genericItems.push({
                kind: 'method',
                exportName: expName,
                methodName: mName,
                isStatic: false,
                tpDecls: bAr.tpDecls,
                key: `${absBSf}::method::${ownerPrefix}::${mName}::0`,
              });
            }
          }
        }
      }
    }

    // 2. Exported generic functions / callable values (including re-exports)
    if (
      hasRuntimeValue(bSym, resolvedB) &&
      hasRuntimeValue(hSym, resolvedH) &&
      !(resolvedB.flags & ts.SymbolFlags.Class)
    ) {
      const bValT = checker.getTypeOfSymbolAtLocation(bSym, bSf);
      const hValT = checker.getTypeOfSymbolAtLocation(hSym, hSf);
      const bCallSigs = checker.getSignaturesOfType(
        bValT,
        ts.SignatureKind.Call,
      );
      const hCallSigs = checker.getSignaturesOfType(
        hValT,
        ts.SignatureKind.Call,
      );
      if (bCallSigs.length === 1 && hCallSigs.length === 1) {
        const bAr = getSigArity(checker, bCallSigs[0]);
        const hAr = getSigArity(checker, hCallSigs[0]);
        if (bAr.maxTp > 0 && hAr.minTp <= bAr.maxTp && hAr.maxTp >= bAr.maxTp) {
          genericItems.push({
            kind: 'valueFn',
            exportName: expName,
            tpDecls: bAr.tpDecls,
            key: `${absBSf}::fn::${expName}::0`,
          });
        }
      }
    }
  }

  return {genericItems, symToExportName, coExportNames};
}

function extractBridgeResults(prog, checker, bridgeSf, taskMap) {
  const results = new Map();
  if (!bridgeSf) return results;

  const stmtByName = new Map();
  for (const stmt of bridgeSf.statements) {
    if (ts.isTypeAliasDeclaration(stmt)) {
      stmtByName.set(stmt.name.text, stmt);
    }
  }

  const diags = prog.getSemanticDiagnostics(bridgeSf);
  const diagAtSpan = (start, end) =>
    diags.filter(
      d =>
        typeof d.start === 'number' &&
        d.start >= start &&
        d.start < end &&
        (d.code === 2344 ||
          d.code === 2314 ||
          d.code === 2558 ||
          d.code === 2635),
    );

  for (const [key, {cName, pName}] of taskMap.entries()) {
    const cStmt = stmtByName.get(cName);
    const pStmt = stmtByName.get(pName);
    const matchedDiags = [];
    if (cStmt) {
      matchedDiags.push(
        ...diagAtSpan(cStmt.getStart(bridgeSf), cStmt.getEnd()),
      );
    }
    let baseInst;
    let headInst;
    if (
      pStmt &&
      ts.isTupleTypeNode(pStmt.type) &&
      pStmt.type.elements.length === 2
    ) {
      baseInst = checker.getTypeFromTypeNode(pStmt.type.elements[0]);
      headInst = checker.getTypeFromTypeNode(pStmt.type.elements[1]);
    }
    results.set(key, {
      constraintErrors: matchedDiags.map(d =>
        ts.flattenDiagnosticMessageText(d.messageText, ' '),
      ),
      baseInst,
      headInst,
    });
  }
  return results;
}

function areUniqueSymbolsCompatible(bType, hType) {
  return Boolean(
    bType.flags & ts.TypeFlags.UniqueESSymbol &&
    hType.flags & ts.TypeFlags.UniqueESSymbol &&
    bType.symbol &&
    hType.symbol &&
    bType.symbol.getName() === hType.symbol.getName(),
  );
}

function isAssignableCompat(checker, source, target) {
  if (source === target) return true;
  if (areUniqueSymbolsCompatible(source, target)) return true;
  return checker.isTypeAssignableTo(source, target);
}

function checkEnumSymbol(checker, exportName, baseSym, headSym, errors) {
  if (!(headSym.flags & ts.SymbolFlags.Enum)) {
    errors.push(`Enum '${exportName}' was changed to a non-enum declaration.`);
    return false;
  }
  const collectMembers = sym => {
    const map = new Map();
    for (const d of sym.declarations || []) {
      if (!ts.isEnumDeclaration(d)) continue;
      for (const m of d.members) {
        const name = getMemberNameDisplay(m.name, d.getSourceFile());
        if (!name) continue;
        map.set(name, checker.getConstantValue(m));
      }
    }
    return map;
  };
  const bMembers = collectMembers(baseSym);
  const hMembers = collectMembers(headSym);
  let ok = true;
  for (const [mName, bVal] of bMembers.entries()) {
    if (!hMembers.has(mName)) {
      errors.push(`Enum '${exportName}': member '${mName}' was removed.`);
      ok = false;
      continue;
    }
    const hVal = hMembers.get(mName);
    if (bVal !== undefined && hVal !== undefined && bVal !== hVal) {
      errors.push(
        `Enum '${exportName}': member '${mName}' value changed (was ${JSON.stringify(bVal)}, now ${JSON.stringify(hVal)}).`,
      );
      ok = false;
    }
  }
  return ok;
}

function isBasePackageFile(filePath, refModFile) {
  const resolved = path.resolve(filePath);
  if (resolved.includes(`${path.sep}node_modules${path.sep}`)) return false;
  if (refModFile.includes('__base_pkg__')) {
    const root = refModFile.slice(
      0,
      refModFile.indexOf('__base_pkg__') + '__base_pkg__'.length,
    );
    return resolved === root || resolved.startsWith(root + path.sep);
  }
  if (refModFile.includes('__base__')) {
    const root = refModFile.slice(
      0,
      refModFile.indexOf('__base__') + '__base__'.length,
    );
    return resolved === root || resolved.startsWith(root + path.sep);
  }
  const dir = path.dirname(refModFile);
  return resolved === refModFile || resolved.startsWith(dir + path.sep);
}

function mapBaseFileToHeadFile(baseFilePath) {
  const sepBasePkg = `${path.sep}__base_pkg__${path.sep}`;
  if (baseFilePath.includes(sepBasePkg)) {
    return baseFilePath.replace(sepBasePkg, path.sep);
  }
  const sepBaseVirt = `${path.sep}__base__${path.sep}`;
  if (baseFilePath.includes(sepBaseVirt)) {
    return baseFilePath.replace(sepBaseVirt, `${path.sep}__head__${path.sep}`);
  }
  return null;
}

function hasRelativeModuleSpecifier(sf) {
  for (const st of sf.statements) {
    if (
      (ts.isImportDeclaration(st) || ts.isExportDeclaration(st)) &&
      st.moduleSpecifier &&
      ts.isStringLiteral(st.moduleSpecifier) &&
      st.moduleSpecifier.text.startsWith('.')
    ) {
      return true;
    }
  }
  return false;
}

function isSelfContainedUnchangedSymbol(resolved, declFile, context) {
  if (!context.dtsFiles || !context.program) return false;
  const headFile = mapBaseFileToHeadFile(declFile);
  if (!headFile) return false;
  const bContent = context.dtsFiles.get(declFile);
  const hContent = context.dtsFiles.get(headFile);
  if (bContent === undefined || bContent !== hContent) return false;
  const bSf = context.program.getSourceFile(declFile);
  if (!bSf || hasRelativeModuleSpecifier(bSf)) return false;
  context.unifiedModuleSymbols.add(resolved);
  return true;
}

function isAstTypeExplainedByUnifiedExports(
  checker,
  bTypeNode,
  hTypeNode,
  context,
  localTypeParamNames = new Set(),
  visitedSymbols = new Set(),
  isHelperBody = false,
  unifiedTypeParamNames = new Set(),
) {
  if (!bTypeNode || !hTypeNode) {
    return false;
  }
  const bSf = bTypeNode.getSourceFile();
  const hSf = hTypeNode.getSourceFile();
  const bText = bTypeNode.getText(bSf).replace(/\s+/g, ' ').trim();
  const hText = hTypeNode.getText(hSf).replace(/\s+/g, ' ').trim();
  if (bText !== hText) return false;

  const baseModFile = path.resolve(bSf.fileName);
  let sawUnified = false;
  let sawUnexplainedLocal = false;

  const checkResolvedLocalSymbol = resolved => {
    if (!resolved || resolved.flags & ts.SymbolFlags.TypeParameter) return;
    if (context.unifiedModuleSymbols.has(resolved)) {
      sawUnified = true;
      return;
    }
    const bDecl0 = resolved.declarations && resolved.declarations[0];
    const declFile = bDecl0 && path.resolve(bDecl0.getSourceFile().fileName);
    if (declFile && isBasePackageFile(declFile, baseModFile)) {
      if (isSelfContainedUnchangedSymbol(resolved, declFile, context)) {
        sawUnified = true;
        return;
      }
      // Follow unchanged in-package helper type aliases, interfaces, and unexported classes
      if (
        (ts.isTypeAliasDeclaration(bDecl0) ||
          ts.isInterfaceDeclaration(bDecl0)) &&
        resolved.declarations.length === 1 &&
        !visitedSymbols.has(resolved) &&
        context.program
      ) {
        const headFile = mapBaseFileToHeadFile(declFile);
        const headHelperSf =
          headFile && context.program.getSourceFile(headFile);
        const hDecls = headHelperSf
          ? headHelperSf.statements.filter(
              st =>
                st.kind === bDecl0.kind &&
                st.name &&
                st.name.text === bDecl0.name.text,
            )
          : [];
        if (hDecls.length === 1) {
          const hDecl0 = hDecls[0];
          const nextVisited = new Set(visitedSymbols);
          nextVisited.add(resolved);
          const subTp = new Set(
            (bDecl0.typeParameters || []).map(tp => tp.name.text),
          );
          const helperOk = ts.isTypeAliasDeclaration(bDecl0)
            ? isAstTypeExplainedByUnifiedExports(
                checker,
                bDecl0.type,
                hDecl0.type,
                context,
                subTp,
                nextVisited,
                true,
              )
            : isAstTypeExplainedByUnifiedExports(
                checker,
                bDecl0,
                hDecl0,
                context,
                subTp,
                nextVisited,
                true,
              );
          if (helperOk) {
            context.unifiedModuleSymbols.add(resolved);
            sawUnified = true;
            return;
          }
        }
      }
      if (
        ts.isClassDeclaration(bDecl0) &&
        bDecl0.name &&
        resolved.declarations.length === 1 &&
        !visitedSymbols.has(resolved) &&
        context.program
      ) {
        if (
          context.failedHelperSymbols &&
          context.failedHelperSymbols.has(resolved)
        ) {
          sawUnexplainedLocal = true;
          return;
        }
        const headFile = mapBaseFileToHeadFile(declFile);
        const headHelperSf =
          headFile && context.program.getSourceFile(headFile);
        const hDecls = headHelperSf
          ? headHelperSf.statements.filter(
              st =>
                ts.isClassDeclaration(st) &&
                st.name &&
                st.name.text === bDecl0.name.text,
            )
          : [];
        if (hDecls.length === 1) {
          const hDecl0 = hDecls[0];
          const hClsSym =
            hDecl0.symbol || checker.getSymbolAtLocation(hDecl0.name);
          if (hClsSym) {
            const subErrors = [];
            const provisionalUnified = new Set(context.unifiedModuleSymbols);
            provisionalUnified.add(resolved);
            const subContext = {
              ...context,
              unifiedModuleSymbols: provisionalUnified,
            };
            const bMeta = findClassMetaForSymbol(
              resolved,
              context.rawMetaByFile,
            );
            const hMeta = findClassMetaForSymbol(
              hClsSym,
              context.rawMetaByFile,
            );
            checkClassMetaRestrictions(
              bDecl0.name.text,
              bMeta,
              hMeta,
              subErrors,
            );
            checkTypeSymbol(
              checker,
              bDecl0.name.text,
              resolved,
              hClsSym,
              bDecl0.getSourceFile(),
              hDecl0.getSourceFile(),
              subContext,
              'input',
              subErrors,
            );
            checkValueSymbol(
              checker,
              bDecl0.name.text,
              resolved,
              hClsSym,
              resolved,
              hClsSym,
              bDecl0.getSourceFile(),
              hDecl0.getSourceFile(),
              subContext,
              subErrors,
            );
            if (subErrors.length === 0) {
              context.unifiedModuleSymbols.add(resolved);
              sawUnified = true;
              return;
            }
            if (!context.failedHelperSymbols) {
              context.failedHelperSymbols = new Set();
            }
            context.failedHelperSymbols.add(resolved);
          }
        }
      }
      sawUnexplainedLocal = true;
    }
  };

  const inspectWithTp = (node, activeTpNames) => {
    if (!node || sawUnexplainedLocal) return;
    if (node.kind === ts.SyntaxKind.ThisType) {
      sawUnified = true;
      return;
    }
    if (
      (ts.isFunctionTypeNode(node) || ts.isConstructorTypeNode(node)) &&
      node.typeParameters &&
      node.typeParameters.length > 0
    ) {
      const extTp = new Set(activeTpNames);
      for (const tp of node.typeParameters) extTp.add(tp.name.text);
      ts.forEachChild(node, c => inspectWithTp(c, extTp));
      return;
    }
    if (ts.isMappedTypeNode(node) && node.typeParameter) {
      const extTp = new Set(activeTpNames);
      extTp.add(node.typeParameter.name.text);
      ts.forEachChild(node, c => inspectWithTp(c, extTp));
      return;
    }
    if (ts.isImportTypeNode(node)) {
      if (node.qualifier) {
        const idNode = ts.isIdentifier(node.qualifier)
          ? node.qualifier
          : node.qualifier.right;
        const sym = checker.getSymbolAtLocation(idNode);
        const resolved = sym ? resolveAliased(checker, sym) : undefined;
        checkResolvedLocalSymbol(resolved);
      }
      if (node.typeArguments) {
        for (const a of node.typeArguments) inspectWithTp(a, activeTpNames);
      }
      return;
    }
    if (ts.isTypeQueryNode(node)) {
      const idNode = ts.isIdentifier(node.exprName)
        ? node.exprName
        : ts.isQualifiedName(node.exprName)
          ? node.exprName.right
          : null;
      if (idNode) {
        const sym = checker.getSymbolAtLocation(idNode);
        const resolved = sym ? resolveAliased(checker, sym) : undefined;
        const bDecls = (resolved && resolved.declarations) || [];
        const bDecl0 = bDecls[0];
        const declFile =
          bDecl0 && path.resolve(bDecl0.getSourceFile().fileName);
        if (declFile && isBasePackageFile(declFile, baseModFile)) {
          if (
            visitedSymbols.has(resolved) ||
            (context.unifiedModuleSymbols.has(resolved) &&
              Boolean(resolved.flags & ts.SymbolFlags.Class))
          ) {
            sawUnified = true;
            return;
          }
          const headFile = mapBaseFileToHeadFile(declFile);
          const headQuerySf =
            headFile &&
            context.program &&
            context.program.getSourceFile(headFile);
          if (
            headQuerySf &&
            bDecls.length > 0 &&
            bDecls.every(ts.isFunctionDeclaration)
          ) {
            const fnName = bDecl0.name && bDecl0.name.text;
            const hFnDecls = fnName
              ? headQuerySf.statements.filter(
                  st =>
                    ts.isFunctionDeclaration(st) &&
                    st.name &&
                    st.name.text === fnName,
                )
              : [];
            if (hFnDecls.length === bDecls.length) {
              const nextVis = new Set(visitedSymbols);
              nextVis.add(resolved);
              const allFnMatch = bDecls.every((bd, idx) =>
                isAstTypeExplainedByUnifiedExports(
                  checker,
                  bd,
                  hFnDecls[idx],
                  context,
                  new Set((bd.typeParameters || []).map(tp => tp.name.text)),
                  nextVis,
                  true,
                ),
              );
              if (allFnMatch) {
                sawUnified = true;
                return;
              }
            }
          }
          if (
            headQuerySf &&
            bDecls.length === 1 &&
            ts.isVariableDeclaration(bDecl0) &&
            ts.isIdentifier(bDecl0.name)
          ) {
            const varName = bDecl0.name.text;
            let hVarDecl = null;
            for (const st of headQuerySf.statements) {
              if (!ts.isVariableStatement(st)) continue;
              for (const d of st.declarationList.declarations) {
                if (ts.isIdentifier(d.name) && d.name.text === varName) {
                  hVarDecl = d;
                  break;
                }
              }
              if (hVarDecl) break;
            }
            if (hVarDecl) {
              const bVT = checker.getTypeAtLocation(bDecl0);
              const hVT = checker.getTypeAtLocation(hVarDecl);
              if (areUniqueSymbolsCompatible(bVT, hVT)) {
                context.unifiedModuleSymbols.add(resolved);
                sawUnified = true;
                return;
              }
            }
          }
          sawUnexplainedLocal = true;
          return;
        }
      }
      return;
    }
    if (ts.isTypeReferenceNode(node)) {
      const idNode = ts.isIdentifier(node.typeName)
        ? node.typeName
        : ts.isQualifiedName(node.typeName)
          ? node.typeName.right
          : null;
      if (idNode) {
        if (unifiedTypeParamNames.has(idNode.text)) {
          sawUnified = true;
        } else if (!activeTpNames.has(idNode.text)) {
          const sym = checker.getSymbolAtLocation(idNode);
          const resolved = sym ? resolveAliased(checker, sym) : undefined;
          checkResolvedLocalSymbol(resolved);
        }
      }
      if (node.typeArguments) {
        for (const a of node.typeArguments) inspectWithTp(a, activeTpNames);
      }
      return;
    }
    ts.forEachChild(node, c => inspectWithTp(c, activeTpNames));
  };
  inspectWithTp(bTypeNode, localTypeParamNames);
  return isHelperBody
    ? !sawUnexplainedLocal
    : sawUnified && !sawUnexplainedLocal;
}

function isReturnMismatchExplainedByUnifiedTypes(
  checker,
  baseSig,
  headSig,
  context,
  unifiedConstrainedTpNames = new Set(),
) {
  const bDecl = baseSig.getDeclaration ? baseSig.getDeclaration() : undefined;
  const hDecl = headSig.getDeclaration ? headSig.getDeclaration() : undefined;
  if (!bDecl || !hDecl || !bDecl.type || !hDecl.type) return false;

  const tpSet = new Set((bDecl.typeParameters || []).map(tp => tp.name.text));
  let cur = bDecl.parent;
  while (cur && !ts.isSourceFile(cur)) {
    if (cur.typeParameters) {
      for (const tp of cur.typeParameters) tpSet.add(tp.name.text);
    }
    cur = cur.parent;
  }

  for (let i = 0; i < baseSig.parameters.length; i++) {
    const bPSym = baseSig.parameters[i];
    const hPSym = headSig.parameters[i];
    if (!bPSym || !hPSym) return false;
    const bPT = checker.getTypeOfSymbolAtLocation(bPSym, bDecl);
    const hPT = checker.getTypeOfSymbolAtLocation(hPSym, hDecl);
    if (isAssignableCompat(checker, bPT, hPT)) continue;
    const bPNode =
      bDecl.parameters && bDecl.parameters[i] && bDecl.parameters[i].type;
    const hPNode =
      hDecl.parameters && hDecl.parameters[i] && hDecl.parameters[i].type;
    if (
      !isAstTypeExplainedByUnifiedExports(
        checker,
        bPNode,
        hPNode,
        context,
        tpSet,
        new Set(),
        false,
        unifiedConstrainedTpNames,
      )
    ) {
      return false;
    }
  }

  return isAstTypeExplainedByUnifiedExports(
    checker,
    bDecl.type,
    hDecl.type,
    context,
    tpSet,
    new Set(),
    false,
    unifiedConstrainedTpNames,
  );
}

function checkSignatureSetCompatibility(
  checker,
  labelPrefix,
  baseType,
  headType,
  sigKind,
  baseSf,
  headSf,
  context,
  errors,
  options = {},
) {
  const {ignoreReturnType = false, fnBridgeKeyPrefix = null} = options;
  const baseSigs = checker.getSignaturesOfType(baseType, sigKind);
  if (baseSigs.length === 0) return;
  const headSigs = checker.getSignaturesOfType(headType, sigKind);
  if (headSigs.length === 0) {
    for (const bSig of baseSigs) {
      errors.push(
        `${labelPrefix} '${checker.signatureToString(bSig)}' became more restrictive or was removed.`,
      );
    }
    return;
  }

  // Verify call-site argument count and explicit generic type-argument arity for every overload.
  const uncoveredAritySigs = new Set();
  for (const bSig of baseSigs) {
    const bArity = getSigArity(checker, bSig);
    const hasArityMatch = headSigs.some(hSig => {
      const hArity = getSigArity(checker, hSig);
      if (hArity.minArgs > bArity.minArgs) return false;
      if (hArity.maxArgs < bArity.maxArgs) return false;
      if (bArity.maxTp > 0) {
        if (hArity.minTp > bArity.minTp || hArity.maxTp < bArity.maxTp) {
          return false;
        }
      } else if (hArity.minTp > 0) {
        return false;
      }
      return true;
    });
    if (!hasArityMatch) {
      uncoveredAritySigs.add(bSig);
      errors.push(
        `${labelPrefix} '${checker.signatureToString(bSig)}' parameter or type-parameter arity became more restrictive or was removed.`,
      );
    }
  }

  // Check explicit generic instantiation bridge probes if present (catches <T>(x: T | string) -> <T>(x: T),
  // including class/interface methods where TypeScript's own isTypeAssignableTo uses method bivariance!).
  let bridgeHandledGeneric = false;
  if (fnBridgeKeyPrefix && context.bridgeResults) {
    for (const [key, res] of context.bridgeResults.entries()) {
      if (!key.startsWith(fnBridgeKeyPrefix)) continue;
      if (res.constraintErrors.length > 0) {
        errors.push(
          `${labelPrefix} generic constraint became more restrictive: ${res.constraintErrors[0]}`,
        );
        return;
      }
      if (res.baseInst && res.headInst) {
        const bInstSigs = checker.getSignaturesOfType(
          res.baseInst,
          ts.SignatureKind.Call,
        );
        const hInstSigs = checker.getSignaturesOfType(
          res.headInst,
          ts.SignatureKind.Call,
        );
        if (bInstSigs.length > 0 && hInstSigs.length > 0) {
          bridgeHandledGeneric = true;
          const allInstCovered = bInstSigs.every(bIS =>
            hInstSigs.some(hIS =>
              doesHeadSignatureCoverBase(
                checker,
                bIS,
                hIS,
                baseSf,
                headSf,
                context,
                ignoreReturnType,
              ),
            ),
          );
          if (!allInstCovered) {
            errors.push(
              `${labelPrefix} generic signature became more restrictive.`,
            );
            return;
          }
        } else if (!isAssignableCompat(checker, res.headInst, res.baseInst)) {
          errors.push(
            `${labelPrefix} generic signature became more restrictive.`,
          );
          return;
        }
      }
    }
  }

  // Check void -> Promise<void> explicitly before per-signature contravariant/covariant check.
  // Note: we deliberately do NOT short-circuit on `checker.isTypeAssignableTo(headType, baseType)`
  // because TypeScript exempts method syntax (`foo(x): R`) from `strictFunctionTypes` (bivariant params)!
  if (sigKind === ts.SignatureKind.Call && !ignoreReturnType) {
    let voidBrokeToPromise = false;
    for (const bSig of baseSigs) {
      if (uncoveredAritySigs.has(bSig)) continue;
      const bRet = checker.getReturnTypeOfSignature(bSig);
      if (bRet.flags & ts.TypeFlags.Void) {
        const matchedSyncOrVoid = headSigs.some(hSig => {
          const hRet = checker.getReturnTypeOfSignature(hSig);
          const thenProp = checker.getPropertyOfType(hRet, 'then');
          return !thenProp;
        });
        if (!matchedSyncOrVoid) {
          voidBrokeToPromise = true;
          errors.push(
            `${labelPrefix} '${checker.signatureToString(bSig)}' return type changed from synchronous 'void' to a Promise/thenable.`,
          );
        }
      }
    }
    if (voidBrokeToPromise || bridgeHandledGeneric) {
      return;
    }
  }

  // Multi-overload generic functions or generic methods on generic owners carry signature-level
  // type parameters (`<T>`) that require TypeScript signature unification (`isTypeAssignableTo`)
  // alongside strict concrete-parameter contravariance checking.
  const hasOwnSigTypeParams = baseSigs.some(
    s => getSigArity(checker, s).maxTp > 0,
  );
  const wholeGenericAssignable =
    hasOwnSigTypeParams &&
    sigKind === ts.SignatureKind.Call &&
    !ignoreReturnType &&
    isAssignableCompat(checker, headType, baseType);

  // Per-signature verification (needed for construct signatures ignoring return instance,
  // generic method constraints, unique symbols, and filtering cascading unified return types).
  for (const bSig of baseSigs) {
    if (uncoveredAritySigs.has(bSig)) continue;
    const sigHasTp = getSigArity(checker, bSig).maxTp > 0;
    const covered = headSigs.some(hSig =>
      doesHeadSignatureCoverBase(
        checker,
        bSig,
        hSig,
        baseSf,
        headSf,
        context,
        ignoreReturnType,
        'normal',
        0,
        sigHasTp && wholeGenericAssignable,
      ),
    );
    if (!covered) {
      errors.push(
        `${labelPrefix} '${checker.signatureToString(bSig)}' became more restrictive or was removed.`,
      );
    }
  }
}

function typeContainsOwnTypeParam(type, ownTpNames, checker, seen = new Set()) {
  if (!type || ownTpNames.size === 0 || seen.has(type)) return false;
  seen.add(type);
  if (
    type.flags & ts.TypeFlags.TypeParameter &&
    type.symbol &&
    ownTpNames.has(type.symbol.getName())
  ) {
    return true;
  }
  if (
    type.flags &
    (ts.TypeFlags.Conditional |
      ts.TypeFlags.IndexedAccess |
      ts.TypeFlags.Substitution |
      ts.TypeFlags.Index)
  ) {
    const str = checker.typeToString(type);
    for (const tpName of ownTpNames) {
      if (new RegExp(`\\b${tpName}\\b`).test(str)) return true;
    }
  }
  if (type.isUnionOrIntersection && type.isUnionOrIntersection()) {
    return type.types.some(t =>
      typeContainsOwnTypeParam(t, ownTpNames, checker, seen),
    );
  }
  const args = checker.getTypeArguments(type);
  if (args && args.length > 0) {
    return args.some(a =>
      typeContainsOwnTypeParam(a, ownTpNames, checker, seen),
    );
  }
  const sigs = checker.getSignaturesOfType(type, ts.SignatureKind.Call);
  for (const s of sigs) {
    if (
      typeContainsOwnTypeParam(
        checker.getReturnTypeOfSignature(s),
        ownTpNames,
        checker,
        seen,
      )
    ) {
      return true;
    }
    for (const p of s.parameters) {
      const decl = s.getDeclaration ? s.getDeclaration() : undefined;
      const pDecl = p.valueDeclaration || (p.declarations && p.declarations[0]);
      const loc = pDecl || decl;
      if (
        loc &&
        typeContainsOwnTypeParam(
          checker.getTypeOfSymbolAtLocation(p, loc),
          ownTpNames,
          checker,
          seen,
        )
      ) {
        return true;
      }
    }
  }
  return false;
}

function doesHeadSignatureCoverBase(
  checker,
  baseSig,
  headSig,
  baseSf,
  headSf,
  context,
  ignoreReturnType = false,
  polarity = 'normal',
  depth = 0,
  ownGenericUnifiedByTS = false,
) {
  if (baseSig === headSig) return true;
  if (depth > 6) return true;

  // In 'normal' polarity, headSig must accept every call baseSig accepted.
  // In 'callback' polarity (contravariant flip), baseSig (user's callback) must accept what headSig passes.
  const consumerSig = polarity === 'normal' ? baseSig : headSig;
  const providerSig = polarity === 'normal' ? headSig : baseSig;
  const consumerSf = polarity === 'normal' ? baseSf : headSf;
  const providerSf = polarity === 'normal' ? headSf : baseSf;

  const cArity = getSigArity(checker, consumerSig);
  const pArity = getSigArity(checker, providerSig);

  if (polarity === 'normal') {
    if (pArity.minArgs > cArity.minArgs) return false;
    if (pArity.maxArgs < cArity.maxArgs) return false;
    if (pArity.minTp > cArity.minTp || pArity.maxTp < cArity.maxTp)
      return false;
  } else {
    // A user callback `(a: T, b: U) => R` requires provider (head) to still supply at least as many args
    // unless optional; extra args passed by head can be ignored by a shorter user callback `() => R`.
    if (consumerSig.parameters.length < pArity.minArgs) {
      return false;
    }
  }

  // Generic method/constructor type parameter constraints: base constraint must satisfy head constraint.
  const unifiedConstrainedTpNames = new Set();
  const collectEnclosingTpDecls = sigObj => {
    const d = sigObj.getDeclaration && sigObj.getDeclaration();
    if (
      d &&
      ts.isConstructorDeclaration(d) &&
      d.parent &&
      d.parent.typeParameters
    ) {
      return [...d.parent.typeParameters];
    }
    return [];
  };
  const cTpDeclsFull = [
    ...cArity.tpDecls,
    ...collectEnclosingTpDecls(consumerSig),
  ];
  const pTpDeclsFull = [
    ...pArity.tpDecls,
    ...collectEnclosingTpDecls(providerSig),
  ];
  const allSigTpNames = new Set([
    ...cTpDeclsFull.map(tp => tp.name.text),
    ...pTpDeclsFull.map(tp => tp.name.text),
  ]);
  for (let i = 0; i < cArity.tpDecls.length && i < pArity.tpDecls.length; i++) {
    const bTpType = checker.getTypeAtLocation(cArity.tpDecls[i]);
    const hTpType = checker.getTypeAtLocation(pArity.tpDecls[i]);
    const bCon = checker.getBaseConstraintOfType(bTpType);
    const hCon = checker.getBaseConstraintOfType(hTpType);
    if (hCon) {
      if (!bCon) {
        if (!checker.isTypeAssignableTo(checker.getUnknownType(), hCon)) {
          return false;
        }
      } else if (!isAssignableCompat(checker, bCon, hCon)) {
        const bConNode =
          polarity === 'normal'
            ? cArity.tpDecls[i].constraint
            : pArity.tpDecls[i].constraint;
        const hConNode =
          polarity === 'normal'
            ? pArity.tpDecls[i].constraint
            : cArity.tpDecls[i].constraint;
        if (
          isAstTypeExplainedByUnifiedExports(
            checker,
            bConNode,
            hConNode,
            context,
            allSigTpNames,
            new Set(),
            false,
            unifiedConstrainedTpNames,
          )
        ) {
          unifiedConstrainedTpNames.add(cArity.tpDecls[i].name.text);
        } else {
          return false;
        }
      }
    }
  }

  // Track positionally identical type parameters whose constraint and default match in both directions
  // (e.g. `maybeOptionsOrCallback<T = {}, C = (err?: Error) => void>(a?: T | C, cb?: C): [T, C]`
  // or `class PropertyFilter<T extends string> { constructor(name: T, val: Allowed<T>) }`).
  if (polarity === 'normal' && cTpDeclsFull.length === pTpDeclsFull.length) {
    let allPositionalMatch = true;
    const candidateTpNames = [];
    for (let i = 0; i < cTpDeclsFull.length; i++) {
      const bTp = cTpDeclsFull[i];
      const hTp = pTpDeclsFull[i];
      if (bTp.name.text !== hTp.name.text) {
        allPositionalMatch = false;
        break;
      }
      const conMatch = (() => {
        if (!bTp.constraint && !hTp.constraint) return true;
        if (!bTp.constraint || !hTp.constraint) return false;
        const bCT = checker.getTypeFromTypeNode(bTp.constraint);
        const hCT = checker.getTypeFromTypeNode(hTp.constraint);
        return (
          (isAssignableCompat(checker, bCT, hCT) &&
            isAssignableCompat(checker, hCT, bCT)) ||
          unifiedConstrainedTpNames.has(bTp.name.text) ||
          isAstTypeExplainedByUnifiedExports(
            checker,
            bTp.constraint,
            hTp.constraint,
            context,
            allSigTpNames,
            new Set(),
            false,
            new Set([...unifiedConstrainedTpNames, ...candidateTpNames]),
          )
        );
      })();
      const defMatch = (() => {
        if (!bTp.default && !hTp.default) return true;
        if (!bTp.default || !hTp.default) return false;
        const bDT = checker.getTypeFromTypeNode(bTp.default);
        const hDT = checker.getTypeFromTypeNode(hTp.default);
        return (
          (isAssignableCompat(checker, bDT, hDT) &&
            isAssignableCompat(checker, hDT, bDT)) ||
          isAstTypeExplainedByUnifiedExports(
            checker,
            bTp.default,
            hTp.default,
            context,
            allSigTpNames,
            new Set(),
            false,
            new Set([...unifiedConstrainedTpNames, ...candidateTpNames]),
          )
        );
      })();
      if (!conMatch || !defMatch) {
        allPositionalMatch = false;
        break;
      }
      candidateTpNames.push(bTp.name.text);
    }
    if (allPositionalMatch) {
      for (const n of candidateTpNames) unifiedConstrainedTpNames.add(n);
    }
  }

  const getParamTypeInDts = (sig, idx, sf) => {
    const decl = sig.getDeclaration ? sig.getDeclaration() : sig.declaration;
    if (idx < sig.parameters.length) {
      const param = sig.parameters[idx];
      const pDecl =
        param.valueDeclaration || (param.declarations && param.declarations[0]);
      const t = checker.getTypeOfSymbolAtLocation(param, pDecl || decl || sf);
      if (pDecl && ts.isParameter(pDecl) && pDecl.dotDotDotToken) {
        if (checker.isArrayType(t)) {
          const args = checker.getTypeArguments(t);
          if (args && args.length > 0) return args[0];
        }
      }
      return t;
    }
    if (decl && decl.parameters && decl.parameters.length > 0) {
      const lastDecl = decl.parameters[decl.parameters.length - 1];
      if (lastDecl.dotDotDotToken) {
        const lastSym = sig.parameters[sig.parameters.length - 1];
        const t = checker.getTypeOfSymbolAtLocation(lastSym, lastDecl);
        if (checker.isArrayType(t)) {
          const args = checker.getTypeArguments(t);
          if (args && args.length > 0) return args[0];
        }
        return t;
      }
    }
    return undefined;
  };

  const paramCheckCount =
    polarity === 'normal'
      ? consumerSig.parameters.length
      : Math.min(consumerSig.parameters.length, providerSig.parameters.length);

  const ownTpSet = ownGenericUnifiedByTS
    ? new Set([
        ...cArity.tpDecls.map(tp => tp.name.text),
        ...pArity.tpDecls.map(tp => tp.name.text),
      ])
    : new Set();

  for (let i = 0; i < paramCheckCount; i++) {
    const cParamType = getParamTypeInDts(consumerSig, i, consumerSf);
    const pParamType = getParamTypeInDts(providerSig, i, providerSf);
    if (!cParamType || !pParamType) return false;

    if (polarity === 'normal' && i < providerSig.parameters.length) {
      const cOpt = Boolean(
        consumerSig.parameters[i].flags & ts.SymbolFlags.Optional,
      );
      const pOpt =
        Boolean(providerSig.parameters[i].flags & ts.SymbolFlags.Optional) ||
        pArity.maxArgs === Infinity;
      if (cOpt && !pOpt) return false;
    }

    if (isAssignableCompat(checker, cParamType, pParamType)) {
      continue;
    }

    if (
      ownGenericUnifiedByTS &&
      (typeContainsOwnTypeParam(cParamType, ownTpSet, checker) ||
        typeContainsOwnTypeParam(pParamType, ownTpSet, checker))
    ) {
      continue;
    }

    // Check function/callback parameters with properly flipped polarity!
    const nonNullC = checker.getNonNullableType(cParamType);
    const nonNullP = checker.getNonNullableType(pParamType);
    const cNullish = cParamType.flags !== nonNullC.flags;
    const pNullish = pParamType.flags !== nonNullP.flags;
    if (cNullish && !pNullish) return false;

    const cCbSigs = checker.getSignaturesOfType(
      nonNullC,
      ts.SignatureKind.Call,
    );
    const pCbSigs = checker.getSignaturesOfType(
      nonNullP,
      ts.SignatureKind.Call,
    );
    if (cCbSigs.length > 0 && pCbSigs.length > 0) {
      const nextPolarity = polarity === 'normal' ? 'callback' : 'normal';
      // Flip: in 'normal' polarity, cCb is baseCb and pCb is headCb; pass (baseCb, headCb) with 'callback' polarity.
      const cbOk = cCbSigs.every(cCb =>
        pCbSigs.some(pCb =>
          polarity === 'normal'
            ? doesHeadSignatureCoverBase(
                checker,
                cCb,
                pCb,
                baseSf,
                headSf,
                context,
                false,
                nextPolarity,
                depth + 1,
              )
            : doesHeadSignatureCoverBase(
                checker,
                pCb,
                cCb,
                baseSf,
                headSf,
                context,
                false,
                nextPolarity,
                depth + 1,
              ),
        ),
      );
      if (cbOk) continue;
    }

    // Check if parameter mismatch is solely over already-verified exported types/classes/symbols.
    const cDecl = consumerSig.getDeclaration && consumerSig.getDeclaration();
    const pDecl = providerSig.getDeclaration && providerSig.getDeclaration();
    const sigTpScope = new Set([
      ...cArity.tpDecls.map(tp => tp.name.text),
      ...pArity.tpDecls.map(tp => tp.name.text),
    ]);
    const addEnclosingTp = declNode => {
      let cur = declNode && declNode.parent;
      while (cur && !ts.isSourceFile(cur)) {
        if (cur.typeParameters) {
          for (const tp of cur.typeParameters) sigTpScope.add(tp.name.text);
        }
        cur = cur.parent;
      }
    };
    addEnclosingTp(cDecl);
    addEnclosingTp(pDecl);

    const cPNode =
      cDecl &&
      cDecl.parameters &&
      cDecl.parameters[i] &&
      cDecl.parameters[i].type;
    const pPNode =
      pDecl &&
      pDecl.parameters &&
      pDecl.parameters[i] &&
      pDecl.parameters[i].type;
    const bPNode = polarity === 'normal' ? cPNode : pPNode;
    const hPNode = polarity === 'normal' ? pPNode : cPNode;
    if (
      isAstTypeExplainedByUnifiedExports(
        checker,
        bPNode,
        hPNode,
        context,
        sigTpScope,
        new Set(),
        false,
        unifiedConstrainedTpNames,
      )
    ) {
      continue;
    }

    // Inherited external constructor (e.g. `class M<T> extends Set<Item<T> | null> {}`):
    // both construct signatures share the identical `node_modules` declaration (`cDecl === pDecl`).
    if (
      ignoreReturnType &&
      cDecl &&
      cDecl === pDecl &&
      path
        .resolve(cDecl.getSourceFile().fileName)
        .includes(`${path.sep}node_modules${path.sep}`)
    ) {
      const bRetCls = checker.getReturnTypeOfSignature(baseSig);
      const hRetCls = checker.getReturnTypeOfSignature(headSig);
      const bClsDecl =
        bRetCls.symbol &&
        (bRetCls.symbol.declarations || []).find(ts.isClassDeclaration);
      const hClsDecl =
        hRetCls.symbol &&
        (hRetCls.symbol.declarations || []).find(ts.isClassDeclaration);
      const bExt =
        bClsDecl &&
        bClsDecl.heritageClauses &&
        bClsDecl.heritageClauses.find(
          hc => hc.token === ts.SyntaxKind.ExtendsKeyword,
        );
      const hExt =
        hClsDecl &&
        hClsDecl.heritageClauses &&
        hClsDecl.heritageClauses.find(
          hc => hc.token === ts.SyntaxKind.ExtendsKeyword,
        );
      if (
        bExt &&
        hExt &&
        isAstTypeExplainedByUnifiedExports(
          checker,
          bExt,
          hExt,
          context,
          new Set([
            ...sigTpScope,
            ...(bClsDecl.typeParameters || []).map(tp => tp.name.text),
          ]),
        )
      ) {
        continue;
      }
    }

    return false;
  }

  if (!ignoreReturnType) {
    const cRet = checker.getReturnTypeOfSignature(consumerSig);
    const pRet = checker.getReturnTypeOfSignature(providerSig);
    // Covariant: provider return type must be assignable to consumer return type.
    if (cRet.flags & ts.TypeFlags.Void) {
      if (polarity === 'normal') {
        const thenProp = checker.getPropertyOfType(pRet, 'then');
        if (thenProp) return false;
      }
      return true;
    }
    if (pRet.flags & ts.TypeFlags.Void) {
      return false;
    }
    if (!isAssignableCompat(checker, pRet, cRet)) {
      if (
        ownGenericUnifiedByTS &&
        (typeContainsOwnTypeParam(cRet, ownTpSet, checker) ||
          typeContainsOwnTypeParam(pRet, ownTpSet, checker))
      ) {
        return true;
      }
      if (
        polarity === 'normal' &&
        isReturnMismatchExplainedByUnifiedTypes(
          checker,
          baseSig,
          headSig,
          context,
          unifiedConstrainedTpNames,
        )
      ) {
        return true;
      }
      return false;
    }
  }

  return true;
}

function checkIndexSignatures(
  checker,
  ownerLabel,
  baseType,
  headType,
  variance,
  errors,
) {
  const baseIndices = checker.getIndexInfosOfType(baseType) || [];
  if (baseIndices.length === 0) return;
  const headIndices = checker.getIndexInfosOfType(headType) || [];

  for (const bIdx of baseIndices) {
    const keyStr = checker.typeToString(bIdx.keyType);
    const hIdx = headIndices.find(
      h =>
        checker.isTypeAssignableTo(bIdx.keyType, h.keyType) &&
        checker.isTypeAssignableTo(h.keyType, bIdx.keyType),
    );
    if (!hIdx) {
      errors.push(
        `${ownerLabel}: index signature '[key: ${keyStr}]' was removed.`,
      );
      continue;
    }
    if (!bIdx.isReadonly && hIdx.isReadonly) {
      errors.push(
        `${ownerLabel}: index signature '[key: ${keyStr}]' was made readonly.`,
      );
    }
    const valOk =
      variance === 'output'
        ? isAssignableCompat(checker, hIdx.type, bIdx.type)
        : isAssignableCompat(checker, bIdx.type, hIdx.type);
    if (!valOk) {
      errors.push(
        `${ownerLabel}: index signature '[key: ${keyStr}]' value type became incompatible (was '${checker.typeToString(bIdx.type)}', now '${checker.typeToString(hIdx.type)}').`,
      );
    }
  }
}

function checkObjectMembers(
  checker,
  ownerLabel,
  baseType,
  headType,
  baseSf,
  headSf,
  context,
  errors,
  variance = 'input',
  options = {},
) {
  const {verifiedExternalExtends = false} = options;
  const baseProps = checker.getPropertiesOfType(baseType);
  const headProps = checker.getPropertiesOfType(headType);
  const headByRawName = new Map();
  const headByDisplayName = new Map();
  for (const hp of headProps) {
    headByRawName.set(hp.getName(), hp);
    const disp = formatPropDisplayName(hp);
    if (disp.startsWith('[')) {
      headByDisplayName.set(disp, hp);
    }
  }
  const baseRawNames = new Set();
  const baseDisplayNames = new Set();

  const isClassOrValue =
    ownerLabel.startsWith('Class ') ||
    ownerLabel.startsWith('Value ') ||
    ownerLabel.startsWith('Namespace ');

  for (const bProp of baseProps) {
    const rawName = bProp.getName();
    if (shouldSkipInternalProperty(rawName)) {
      continue;
    }
    const displayName = formatPropDisplayName(bProp);
    baseRawNames.add(rawName);
    if (displayName.startsWith('[')) {
      baseDisplayNames.add(displayName);
    }
    // Note: avoid checker.getPropertyOfType(headType, rawName) for Symbol-keyed properties (`__@...`)
    // because getPropertyOfType re-escapes leading `__` to `___` and misses well-known/unique symbols!
    const hProp =
      headByRawName.get(rawName) ||
      (displayName.startsWith('[')
        ? headByDisplayName.get(displayName)
        : undefined) ||
      (!rawName.startsWith('__@')
        ? checker.getPropertyOfType(headType, rawName)
        : undefined);
    if (!hProp) {
      errors.push(
        `${ownerLabel}: property or method '${displayName}' was removed.`,
      );
      continue;
    }

    const bPropOpt = Boolean(bProp.flags & ts.SymbolFlags.Optional);
    const hPropOpt = Boolean(hProp.flags & ts.SymbolFlags.Optional);
    if (variance === 'output' || isClassOrValue) {
      if (variance === 'output' && !bPropOpt && hPropOpt) {
        errors.push(
          `${ownerLabel}: required output property '${displayName}' was made optional.`,
        );
        continue;
      }
      if (isClassOrValue && bPropOpt && !hPropOpt) {
        // On a class instance that users may implement or configure, check below;
        // making a guaranteed output property optional on a class breaks readers:
      }
      if (bPropOpt && !hPropOpt && isClassOrValue) {
        // Making an optional class property always-present (required) is non-breaking for callers reading it,
        // unless consumers implement the class as an interface; for class methods `foo?()` -> `foo()` is non-breaking,
        // whereas `!bPropOpt && hPropOpt` (`foo()` -> `foo?()`) breaks callers!
      }
      if (isClassOrValue && !bPropOpt && hPropOpt) {
        errors.push(
          `${ownerLabel}: required property or method '${displayName}' was made optional.`,
        );
        continue;
      }
    } else if (bPropOpt && !hPropOpt) {
      errors.push(
        `${ownerLabel}: optional property '${displayName}' was made required.`,
      );
      continue;
    }

    if (!isSymbolReadonly(bProp) && isSymbolReadonly(hProp)) {
      errors.push(
        `${ownerLabel}: property '${displayName}' was made readonly.`,
      );
    }

    const bPropType = checker.getTypeOfSymbolAtLocation(bProp, baseSf);
    const hPropType = checker.getTypeOfSymbolAtLocation(hProp, headSf);
    if (bPropType === hPropType) {
      continue;
    }

    const nonNullB = checker.getNonNullableType(bPropType);
    const nonNullH = checker.getNonNullableType(hPropType);
    const bCallSigs = checker.getSignaturesOfType(
      nonNullB,
      ts.SignatureKind.Call,
    );
    const hCallSigs = checker.getSignaturesOfType(
      nonNullH,
      ts.SignatureKind.Call,
    );

    const bDecl =
      bProp.valueDeclaration || (bProp.declarations && bProp.declarations[0]);
    const hDeclForOrigin =
      hProp.valueDeclaration || (hProp.declarations && hProp.declarations[0]);
    if (
      verifiedExternalExtends &&
      bDecl &&
      bDecl === hDeclForOrigin &&
      path
        .resolve(bDecl.getSourceFile().fileName)
        .includes(`${path.sep}node_modules${path.sep}`)
    ) {
      continue;
    }
    const isMethodDecl = Boolean(
      bDecl && (ts.isMethodDeclaration(bDecl) || ts.isMethodSignature(bDecl)),
    );

    if (bCallSigs.length > 0 && (isMethodDecl || hCallSigs.length > 0)) {
      if (variance === 'input' && !isMethodDecl && bPropOpt) {
        // Optional callback property on input options bag, e.g. `onError?: (err: Error) => void`
        // A caller supplies the function value: bPropType should still be assignable to hPropType.
        if (!isAssignableCompat(checker, nonNullB, nonNullH)) {
          const bDeclNode = bDecl && bDecl.type;
          const hDecl =
            hProp.valueDeclaration ||
            (hProp.declarations && hProp.declarations[0]);
          const hDeclNode = hDecl && hDecl.type;
          if (
            isAstTypeExplainedByUnifiedExports(
              checker,
              bDeclNode,
              hDeclNode,
              context,
            )
          ) {
            continue;
          }
          errors.push(
            `${ownerLabel}: callback property '${displayName}' became more restrictive (was '${checker.typeToString(bPropType)}', now '${checker.typeToString(hPropType)}').`,
          );
        }
      } else {
        const methodPrefix = `${path.resolve(baseSf.fileName)}::method::${ownerLabel}::${displayName}::`;
        checkSignatureSetCompatibility(
          checker,
          `${ownerLabel}: method '${displayName}'`,
          nonNullB,
          nonNullH,
          ts.SignatureKind.Call,
          baseSf,
          headSf,
          context,
          errors,
          {fnBridgeKeyPrefix: methodPrefix},
        );
      }
    } else {
      const propOk =
        variance === 'output'
          ? isAssignableCompat(checker, hPropType, bPropType)
          : isAssignableCompat(checker, bPropType, hPropType);
      if (!propOk) {
        const bDeclNode = bDecl && bDecl.type;
        const hDecl =
          hProp.valueDeclaration ||
          (hProp.declarations && hProp.declarations[0]);
        const hDeclNode = hDecl && hDecl.type;
        if (
          isAstTypeExplainedByUnifiedExports(
            checker,
            bDeclNode,
            hDeclNode,
            context,
          )
        ) {
          continue;
        }
        errors.push(
          `${ownerLabel}: property '${displayName}' became more restrictive (was '${checker.typeToString(bPropType)}', now '${checker.typeToString(hPropType)}').`,
        );
      }
    }
  }

  // Check if any new required property was added to an input interface or input object type alias
  if (!isClassOrValue && variance === 'input') {
    for (const hProp of headProps) {
      const rawName = hProp.getName();
      if (shouldSkipInternalProperty(rawName)) continue;
      const hPropOpt = Boolean(hProp.flags & ts.SymbolFlags.Optional);
      const disp = formatPropDisplayName(hProp);
      const existedInBase =
        baseRawNames.has(rawName) ||
        (disp.startsWith('[') && baseDisplayNames.has(disp)) ||
        (!rawName.startsWith('__@') &&
          Boolean(checker.getPropertyOfType(baseType, rawName)));
      if (!hPropOpt && !existedInBase) {
        errors.push(
          `${ownerLabel}: new required property '${disp}' was added.`,
        );
      }
    }
  }

  checkIndexSignatures(
    checker,
    ownerLabel,
    baseType,
    headType,
    variance,
    errors,
  );
}

function checkClassMetaRestrictions(exportName, bMeta, hMeta, errors) {
  if (!bMeta || !hMeta) return;
  if (!bMeta.isAbstract && hMeta.isAbstract) {
    errors.push(
      `Class '${exportName}' was changed from concrete to 'abstract'.`,
    );
  }
  if (
    rankVisibility(hMeta.ctorVisibility) < rankVisibility(bMeta.ctorVisibility)
  ) {
    errors.push(
      `Class '${exportName}' constructor visibility was restricted from '${bMeta.ctorVisibility}' to '${hMeta.ctorVisibility}'.`,
    );
  }
  for (const [mKey, bInfo] of bMeta.members.entries()) {
    if (bInfo.visibility === 'private') continue;
    const hInfo = hMeta.members.get(mKey);
    if (hInfo) {
      if (rankVisibility(hInfo.visibility) < rankVisibility(bInfo.visibility)) {
        errors.push(
          `Class '${exportName}' member '${mKey}' visibility was restricted from '${bInfo.visibility}' to '${hInfo.visibility}'.`,
        );
      }
      if (!bInfo.isReadonly && hInfo.isReadonly) {
        errors.push(
          `Class '${exportName}' member '${mKey}' was made readonly.`,
        );
      }
      if (!bInfo.isAbstract && hInfo.isAbstract) {
        errors.push(
          `Class '${exportName}' member '${mKey}' was made abstract.`,
        );
      }
    }
  }
  if (bMeta.isAbstract || hMeta.isAbstract) {
    for (const [mKey, hInfo] of hMeta.members.entries()) {
      if (hInfo.isAbstract && !bMeta.members.has(mKey)) {
        errors.push(
          `Abstract class '${exportName}' added a new required abstract member '${mKey}'.`,
        );
      }
    }
  }
}

function checkTypeSymbol(
  checker,
  exportName,
  baseSym,
  headSym,
  baseSf,
  headSf,
  context,
  variance,
  errors,
) {
  if (baseSym.flags & ts.SymbolFlags.Enum) {
    return checkEnumSymbol(checker, exportName, baseSym, headSym, errors);
  }

  const bTpInfo = getTypeParameterDecls(baseSym);
  const hTpInfo = getTypeParameterDecls(headSym);
  if (hTpInfo.min > bTpInfo.min || hTpInfo.max < bTpInfo.max) {
    errors.push(
      `Type '${exportName}' type parameter arity became more restrictive (was ${bTpInfo.min}..${bTpInfo.max}, now ${hTpInfo.min}..${hTpInfo.max}).`,
    );
    return false;
  }

  let baseType = checker.getDeclaredTypeOfSymbol(baseSym);
  let headType = checker.getDeclaredTypeOfSymbol(headSym);

  if (bTpInfo.max > 0) {
    const key = `${path.resolve(baseSf.fileName)}::type::${exportName}`;
    const probe = context.bridgeResults && context.bridgeResults.get(key);
    if (probe) {
      if (probe.constraintErrors.length > 0) {
        errors.push(
          `Type '${exportName}' type parameter constraint became more restrictive: ${probe.constraintErrors[0]}`,
        );
        return false;
      }
      if (probe.baseInst && probe.headInst) {
        baseType = probe.baseInst;
        headType = probe.headInst;
      }
    } else {
      // Fallback constraint verification when a constraint references module-private types
      const allTpNames = new Set([
        ...bTpInfo.decls.map(tp => tp.name.text),
        ...hTpInfo.decls.map(tp => tp.name.text),
      ]);
      for (
        let i = 0;
        i < bTpInfo.decls.length && i < hTpInfo.decls.length;
        i++
      ) {
        const bCon = checker.getBaseConstraintOfType(
          checker.getTypeAtLocation(bTpInfo.decls[i]),
        );
        const hCon = checker.getBaseConstraintOfType(
          checker.getTypeAtLocation(hTpInfo.decls[i]),
        );
        if (!hCon) continue;
        const conOk = !bCon
          ? checker.isTypeAssignableTo(checker.getUnknownType(), hCon)
          : isAssignableCompat(checker, bCon, hCon) ||
            isAstTypeExplainedByUnifiedExports(
              checker,
              bTpInfo.decls[i].constraint,
              hTpInfo.decls[i].constraint,
              context,
              allTpNames,
            );
        if (!conOk) {
          errors.push(
            `Type '${exportName}' type parameter constraint became more restrictive (was '${bCon ? checker.typeToString(bCon) : 'unknown'}', now '${checker.typeToString(hCon)}').`,
          );
          return false;
        }
      }
    }
  }

  const startErrLen = errors.length;

  if (baseSym.flags & ts.SymbolFlags.Class) {
    const bClsDecl = (baseSym.declarations || []).find(ts.isClassDeclaration);
    const hClsDecl = (headSym.declarations || []).find(ts.isClassDeclaration);
    const bExt =
      bClsDecl &&
      bClsDecl.heritageClauses &&
      bClsDecl.heritageClauses.find(
        hc => hc.token === ts.SyntaxKind.ExtendsKeyword,
      );
    const hExt =
      hClsDecl &&
      hClsDecl.heritageClauses &&
      hClsDecl.heritageClauses.find(
        hc => hc.token === ts.SyntaxKind.ExtendsKeyword,
      );
    const verifiedExternalExtends = Boolean(
      bExt &&
      hExt &&
      isAstTypeExplainedByUnifiedExports(
        checker,
        bExt,
        hExt,
        context,
        new Set((bClsDecl.typeParameters || []).map(tp => tp.name.text)),
      ),
    );
    checkObjectMembers(
      checker,
      `Class '${exportName}'`,
      baseType,
      headType,
      baseSf,
      headSf,
      context,
      errors,
      'class',
      {verifiedExternalExtends},
    );
    return errors.length === startErrLen;
  }

  const baseConstructSigs = checker.getSignaturesOfType(
    baseType,
    ts.SignatureKind.Construct,
  );
  if (baseConstructSigs.length > 0) {
    checkSignatureSetCompatibility(
      checker,
      `Constructable type '${exportName}' signature`,
      baseType,
      headType,
      ts.SignatureKind.Construct,
      baseSf,
      headSf,
      context,
      errors,
    );
  }

  const baseCallSigs = checker.getSignaturesOfType(
    baseType,
    ts.SignatureKind.Call,
  );
  if (baseCallSigs.length > 0) {
    checkSignatureSetCompatibility(
      checker,
      `Callable type '${exportName}' signature`,
      baseType,
      headType,
      ts.SignatureKind.Call,
      baseSf,
      headSf,
      context,
      errors,
    );
  }

  const isTupleOrArray =
    checker.isTupleType(baseType) || checker.isArrayType(baseType);
  const isUnionOrPrimitive = Boolean(
    baseType.flags & (ts.TypeFlags.Union | ts.TypeFlags.Primitive),
  );
  const baseProps = checker.getPropertiesOfType(baseType);
  const baseIndices = checker.getIndexInfosOfType(baseType) || [];

  const bAliasDecl =
    !(baseSym.flags & ts.SymbolFlags.Interface) &&
    (baseSym.declarations || []).find(ts.isTypeAliasDeclaration);
  const hAliasDecl =
    !(headSym.flags & ts.SymbolFlags.Interface) &&
    (headSym.declarations || []).find(ts.isTypeAliasDeclaration);
  if (bAliasDecl && hAliasDecl) {
    const aliasTpNames = new Set(
      (bAliasDecl.typeParameters || []).map(tp => tp.name.text),
    );
    const defaultsOk = (bAliasDecl.typeParameters || []).every((btp, idx) => {
      const htp = (hAliasDecl.typeParameters || [])[idx];
      if (!btp.default) return true;
      if (!htp || !htp.default) return false;
      const bDefT = checker.getTypeFromTypeNode(btp.default);
      const hDefT = checker.getTypeFromTypeNode(htp.default);
      return (
        (isAssignableCompat(checker, bDefT, hDefT) &&
          isAssignableCompat(checker, hDefT, bDefT)) ||
        isAstTypeExplainedByUnifiedExports(
          checker,
          btp.default,
          htp.default,
          context,
          aliasTpNames,
        )
      );
    });
    if (
      defaultsOk &&
      isAstTypeExplainedByUnifiedExports(
        checker,
        bAliasDecl.type,
        hAliasDecl.type,
        context,
        aliasTpNames,
      )
    ) {
      return errors.length === startErrLen;
    }
  }

  const isPureInterfacePair = Boolean(
    baseSym.flags & ts.SymbolFlags.Interface &&
    headSym.flags & ts.SymbolFlags.Interface &&
    !(baseSym.flags & ts.SymbolFlags.TypeAlias) &&
    !(headSym.flags & ts.SymbolFlags.TypeAlias),
  );

  if (
    !isTupleOrArray &&
    !isUnionOrPrimitive &&
    (isPureInterfacePair ||
      baseProps.length > 0 ||
      baseIndices.length > 0 ||
      baseCallSigs.length > 0 ||
      baseConstructSigs.length > 0)
  ) {
    checkObjectMembers(
      checker,
      `Interface/Type '${exportName}'`,
      baseType,
      headType,
      baseSf,
      headSf,
      context,
      errors,
      variance,
    );
    if (
      isPureInterfacePair ||
      errors.length > startErrLen ||
      baseCallSigs.length > 0 ||
      baseConstructSigs.length > 0
    ) {
      return errors.length === startErrLen;
    }
  }

  const wholeOk =
    variance === 'output'
      ? isAssignableCompat(checker, headType, baseType)
      : isAssignableCompat(checker, baseType, headType);
  if (!wholeOk) {
    errors.push(
      `Public type '${exportName}' became more restrictive (was '${checker.typeToString(baseType)}', now '${checker.typeToString(headType)}').`,
    );
  }
  return errors.length === startErrLen;
}

function checkValueSymbol(
  checker,
  exportName,
  baseSym,
  headSym,
  resolvedBaseSym,
  resolvedHeadSym,
  baseSf,
  headSf,
  context,
  errors,
  visitedNamespaces = new Set(),
) {
  if (resolvedBaseSym.flags & ts.SymbolFlags.Enum) {
    // Already validated in checkTypeSymbol (checkEnumSymbol).
    if (!(resolvedBaseSym.flags & TYPE_SYMBOL_MASK)) {
      checkEnumSymbol(
        checker,
        exportName,
        resolvedBaseSym,
        resolvedHeadSym,
        errors,
      );
    }
    return;
  }

  // Namespace / module value exports: recursively check exported types, classes, enums, and values!
  if (
    resolvedBaseSym.flags & ts.SymbolFlags.Module &&
    !(resolvedBaseSym.flags & (ts.SymbolFlags.Class | ts.SymbolFlags.Function))
  ) {
    if (visitedNamespaces.has(resolvedBaseSym)) return;
    visitedNamespaces.add(resolvedBaseSym);
    const bSubExports = checker.getExportsOfModule(resolvedBaseSym) || [];
    const hSubExports =
      resolvedHeadSym.flags & ts.SymbolFlags.Module
        ? checker.getExportsOfModule(resolvedHeadSym) || []
        : [];
    const hSubMap = new Map(hSubExports.map(s => [s.getName(), s]));
    for (const bSub of bSubExports) {
      const subName = bSub.getName();
      const fullName = `${exportName}.${subName}`;
      const hSub = hSubMap.get(subName);
      if (!hSub) {
        errors.push(
          `Namespace '${exportName}': export '${subName}' was removed.`,
        );
        continue;
      }
      compareSingleExportPair(
        checker,
        fullName,
        bSub,
        hSub,
        baseSf,
        headSf,
        context,
        'input',
        errors,
        visitedNamespaces,
      );
    }
    return;
  }

  const baseValType = checker.getTypeOfSymbolAtLocation(baseSym, baseSf);
  const headValType = checker.getTypeOfSymbolAtLocation(headSym, headSf);

  if (areUniqueSymbolsCompatible(baseValType, headValType)) {
    return;
  }

  const baseConstructSigs = checker.getSignaturesOfType(
    baseValType,
    ts.SignatureKind.Construct,
  );
  if (baseConstructSigs.length > 0) {
    checkSignatureSetCompatibility(
      checker,
      `Constructor for '${exportName}'`,
      baseValType,
      headValType,
      ts.SignatureKind.Construct,
      baseSf,
      headSf,
      context,
      errors,
      {ignoreReturnType: true},
    );
  }

  const baseCallSigs = checker.getSignaturesOfType(
    baseValType,
    ts.SignatureKind.Call,
  );
  if (baseCallSigs.length > 0) {
    const fnPrefix = `${path.resolve(baseSf.fileName)}::fn::${exportName}::`;
    checkSignatureSetCompatibility(
      checker,
      `Function '${exportName}'`,
      baseValType,
      headValType,
      ts.SignatureKind.Call,
      baseSf,
      headSf,
      context,
      errors,
      {fnBridgeKeyPrefix: fnPrefix},
    );
  }

  const isPrimitiveOrLiteral = Boolean(
    baseValType.flags & (ts.TypeFlags.Primitive | ts.TypeFlags.Union),
  );

  if (
    baseConstructSigs.length > 0 ||
    (!isPrimitiveOrLiteral &&
      baseCallSigs.length === 0 &&
      checker.getPropertiesOfType(baseValType).length > 0)
  ) {
    checkObjectMembers(
      checker,
      `Value '${exportName}'`,
      baseValType,
      headValType,
      baseSf,
      headSf,
      context,
      errors,
      'class',
    );
  } else if (baseConstructSigs.length === 0 && baseCallSigs.length === 0) {
    // Exported constant/variable is read by consumers (covariant, unless widened literal? Wait:
    // `export const A = 1` -> `export const A = 2` breaks `type T = typeof A` / `1` vs `2`!)
    if (
      !isAssignableCompat(checker, headValType, baseValType) &&
      !isAssignableCompat(checker, baseValType, headValType)
    ) {
      errors.push(
        `Exported value '${exportName}' changed incompatibly (was '${checker.typeToString(baseValType)}', now '${checker.typeToString(headValType)}').`,
      );
    } else if (!isAssignableCompat(checker, headValType, baseValType)) {
      errors.push(
        `Exported value '${exportName}' type was widened incompatibly for consumers (was '${checker.typeToString(baseValType)}', now '${checker.typeToString(headValType)}').`,
      );
    }
  }
}

function compareSingleExportPair(
  checker,
  exportName,
  baseSym,
  headSym,
  baseSf,
  headSf,
  context,
  variance,
  errors,
  visitedNamespaces = new Set(),
) {
  const resolvedBaseSym = resolveAliased(checker, baseSym);
  const resolvedHeadSym = resolveAliased(checker, headSym);

  const bHasVal = hasRuntimeValue(baseSym, resolvedBaseSym);
  const hHasVal = hasRuntimeValue(headSym, resolvedHeadSym);
  const bHasType = hasTypeMeaning(resolvedBaseSym);
  const hHasType = hasTypeMeaning(resolvedHeadSym);

  // Fast path: identical external symbol re-exported without type-only downgrade (e.g. from node_modules).
  if (
    resolvedBaseSym === resolvedHeadSym &&
    bHasVal === hHasVal &&
    bHasType === hHasType
  ) {
    return;
  }

  const bIsNamespace =
    Boolean(resolvedBaseSym.flags & ts.SymbolFlags.Module) &&
    !(
      resolvedBaseSym.flags &
      (ts.SymbolFlags.Class | ts.SymbolFlags.Function | ts.SymbolFlags.Enum)
    );
  const hIsNamespace = Boolean(resolvedHeadSym.flags & ts.SymbolFlags.Module);

  if (bIsNamespace) {
    if (bHasVal && !hHasVal) {
      errors.push(
        `Export '${exportName}' had its runtime value removed (e.g., changed to a type-only namespace or export).`,
      );
    }
    if (!hIsNamespace) {
      errors.push(
        `Namespace '${exportName}' was changed to a non-namespace export.`,
      );
      return;
    }
    if (visitedNamespaces.has(resolvedBaseSym)) return;
    visitedNamespaces.add(resolvedBaseSym);
    const bSubExports = checker.getExportsOfModule(resolvedBaseSym) || [];
    const hSubExports = checker.getExportsOfModule(resolvedHeadSym) || [];
    const hSubMap = new Map(hSubExports.map(s => [s.getName(), s]));
    for (const bSub of bSubExports) {
      const subName = bSub.getName();
      const fullName = `${exportName}.${subName}`;
      const hSub = hSubMap.get(subName);
      if (!hSub) {
        errors.push(
          `Namespace '${exportName}': export '${subName}' was removed.`,
        );
        continue;
      }
      compareSingleExportPair(
        checker,
        fullName,
        bSub,
        hSub,
        baseSf,
        headSf,
        context,
        'input',
        errors,
        visitedNamespaces,
      );
    }
    return;
  }

  if (bHasVal && !hHasVal) {
    errors.push(
      `Export '${exportName}' had its runtime value removed (e.g., changed to a type-only export or type declaration).`,
    );
  }
  if (bHasType && !hHasType) {
    errors.push(`Export '${exportName}' lost its public type meaning.`);
  }

  if (
    resolvedBaseSym.flags & ts.SymbolFlags.Class &&
    resolvedHeadSym.flags & ts.SymbolFlags.Class
  ) {
    const bMeta = findClassMetaForSymbol(
      resolvedBaseSym,
      context.rawMetaByFile,
    );
    const hMeta = findClassMetaForSymbol(
      resolvedHeadSym,
      context.rawMetaByFile,
    );
    checkClassMetaRestrictions(exportName, bMeta, hMeta, errors);
  }

  if (bHasType && hHasType) {
    const typePassed = checkTypeSymbol(
      checker,
      exportName,
      resolvedBaseSym,
      resolvedHeadSym,
      baseSf,
      headSf,
      context,
      variance,
      errors,
    );
    if (
      resolvedBaseSym.flags & ts.SymbolFlags.Class &&
      resolvedHeadSym.flags & ts.SymbolFlags.Class
    ) {
      context.unifiedModuleSymbols.add(resolvedBaseSym);
    } else if (typePassed) {
      context.unifiedModuleSymbols.add(resolvedBaseSym);
    }
  }

  if (bHasVal && hHasVal) {
    checkValueSymbol(
      checker,
      exportName,
      baseSym,
      headSym,
      resolvedBaseSym,
      resolvedHeadSym,
      baseSf,
      headSf,
      context,
      errors,
      visitedNamespaces,
    );
  }
}

/**
 * Compares all public exports of `baseSf` against `headSf` and returns an array
 * of human-readable breaking change descriptions.
 */
export function compareModules(
  checker,
  baseSf,
  headSf,
  rawBaseSf,
  rawHeadSf,
  extraContext = {},
) {
  const errors = [];
  if (!baseSf || !headSf) return errors;
  const baseModSym = checker.getSymbolAtLocation(baseSf);
  const headModSym = checker.getSymbolAtLocation(headSf);
  if (!baseModSym || !headModSym) return errors;

  const rawMetaByFile = extraContext.rawMetaByFile || new Map();
  if (rawBaseSf && !rawMetaByFile.has(path.resolve(rawBaseSf.fileName))) {
    rawMetaByFile.set(
      path.resolve(rawBaseSf.fileName),
      collectClassAccessibility(rawBaseSf),
    );
  }
  if (rawHeadSf && !rawMetaByFile.has(path.resolve(rawHeadSf.fileName))) {
    rawMetaByFile.set(
      path.resolve(rawHeadSf.fileName),
      collectClassAccessibility(rawHeadSf),
    );
  }

  const baseExports = [...checker.getExportsOfModule(baseModSym)];
  const headExports = [...checker.getExportsOfModule(headModSym)];

  const baseEq =
    baseModSym.exports &&
    baseModSym.exports.get(ts.InternalSymbolName.ExportEquals);
  const headEq =
    headModSym.exports &&
    headModSym.exports.get(ts.InternalSymbolName.ExportEquals);
  if (baseEq && !baseExports.includes(baseEq)) baseExports.push(baseEq);
  if (headEq && !headExports.includes(headEq)) headExports.push(headEq);

  const headExportMap = new Map(headExports.map(s => [s.getName(), s]));

  // Collect exported interface/type-alias symbols to classify input vs output variance.
  const targetSymToExportName = new Map();
  const typeFirstExports = [];
  const compositeAliasExports = [];
  const valueOnlyOrClassExports = [];

  for (const baseSym of baseExports) {
    const name = baseSym.getName();
    if (!headExportMap.has(name)) {
      errors.push(`Export '${name}' was removed.`);
      continue;
    }
    const resolvedBase = resolveAliased(checker, baseSym);
    if (
      resolvedBase.flags &
        (ts.SymbolFlags.Interface |
          ts.SymbolFlags.TypeAlias |
          ts.SymbolFlags.Enum) &&
      !(resolvedBase.flags & ts.SymbolFlags.Class)
    ) {
      if (!(resolvedBase.flags & ts.SymbolFlags.Enum)) {
        targetSymToExportName.set(resolvedBase, name);
      }
      const isTypeAlias = Boolean(
        resolvedBase.flags & ts.SymbolFlags.TypeAlias,
      );
      if (isTypeAlias) {
        compositeAliasExports.push(baseSym);
      } else {
        typeFirstExports.push(baseSym);
      }
    } else {
      valueOnlyOrClassExports.push(baseSym);
    }
  }

  const {inInput, inOutput} = classifyModuleTypeVariance(
    checker,
    baseExports,
    targetSymToExportName,
  );

  const unifiedModuleSymbols = new Set();
  for (const baseSym of baseExports) {
    const exportName = baseSym.getName();
    const headSym = headExportMap.get(exportName);
    if (!headSym) continue;
    const resolvedB = resolveAliased(checker, baseSym);
    const resolvedH = resolveAliased(checker, headSym);
    if (
      resolvedB.flags & ts.SymbolFlags.Class &&
      resolvedH.flags & ts.SymbolFlags.Class
    ) {
      unifiedModuleSymbols.add(resolvedB);
      continue;
    }
    if (
      resolvedB.flags & ts.SymbolFlags.Interface &&
      resolvedH.flags & ts.SymbolFlags.Interface &&
      !(inOutput.has(exportName) && !inInput.has(exportName))
    ) {
      // Pre-seed mutually recursive input interfaces (`GaxiosOptionsPrepared <-> RetryConfig`);
      // every exported interface is still directly verified member-by-member in Pass 1a below.
      unifiedModuleSymbols.add(resolvedB);
      continue;
    }
    const bVal = checker.getTypeOfSymbolAtLocation(baseSym, baseSf);
    const hVal = checker.getTypeOfSymbolAtLocation(headSym, headSf);
    if (areUniqueSymbolsCompatible(bVal, hVal)) {
      unifiedModuleSymbols.add(resolvedB);
    }
  }

  const context = {
    rawMetaByFile,
    bridgeResults: extraContext.bridgeResults || null,
    program: extraContext.program || null,
    dtsFiles: extraContext.dtsFiles || null,
    unifiedModuleSymbols,
  };

  // Pass 1a: Enums and interfaces (populates `unifiedModuleSymbols` before composite type aliases).
  for (const baseSym of typeFirstExports) {
    const exportName = baseSym.getName();
    const headSym = headExportMap.get(exportName);
    const variance =
      inOutput.has(exportName) && !inInput.has(exportName) ? 'output' : 'input';
    const before = errors.length;
    compareSingleExportPair(
      checker,
      exportName,
      baseSym,
      headSym,
      baseSf,
      headSf,
      context,
      variance,
      errors,
    );
    const resolvedBase = resolveAliased(checker, baseSym);
    if (resolvedBase.flags & ts.SymbolFlags.Enum && errors.length === before) {
      unifiedModuleSymbols.add(resolvedBase);
    }
  }

  // Pass 1b: Type aliases (may compose verified interfaces/classes like RequestCallback<Subscription>).
  for (const baseSym of compositeAliasExports) {
    const exportName = baseSym.getName();
    const headSym = headExportMap.get(exportName);
    const variance =
      inOutput.has(exportName) && !inInput.has(exportName) ? 'output' : 'input';
    const before = errors.length;
    compareSingleExportPair(
      checker,
      exportName,
      baseSym,
      headSym,
      baseSf,
      headSf,
      context,
      variance,
      errors,
    );
    if (errors.length === before) {
      unifiedModuleSymbols.add(resolveAliased(checker, baseSym));
    }
  }

  // Pass 2: Classes, functions, constructors, namespaces, and exported values.
  for (const baseSym of valueOnlyOrClassExports) {
    const exportName = baseSym.getName();
    const headSym = headExportMap.get(exportName);
    compareSingleExportPair(
      checker,
      exportName,
      baseSym,
      headSym,
      baseSf,
      headSf,
      context,
      'input',
      errors,
    );
  }

  return [...new Set(errors)];
}

function isDeclarationFilePath(filePath) {
  return /\.d\.(c|m)?ts$/.test(filePath);
}

function toDtsFileName(filePath) {
  if (isDeclarationFilePath(filePath)) return filePath;
  if (filePath.endsWith('.mts')) return filePath.slice(0, -4) + '.d.mts';
  if (filePath.endsWith('.cts')) return filePath.slice(0, -4) + '.d.cts';
  return filePath.replace(/\.ts$/, '.d.ts');
}

function stripDtsExtension(dtsPath) {
  return dtsPath.replace(/\.d\.(c|m)?ts$/, '');
}

function emitToNormalizedDtsMap(
  sourceRootFiles,
  inPackagePredicate,
  compilerOptions,
  baseHost,
) {
  const emitOptions = {
    ...compilerOptions,
    declaration: true,
    emitDeclarationOnly: true,
    noEmit: false,
    noEmitOnError: false,
    stripInternal: true,
    outDir: undefined,
    rootDir: undefined,
    declarationDir: undefined,
    outFile: undefined,
    composite: undefined,
    incremental: undefined,
    tsBuildInfoFile: undefined,
  };

  const prog = ts.createProgram({
    rootNames: sourceRootFiles,
    options: emitOptions,
    host: baseHost,
  });

  const dtsFiles = new Map();
  const rawMetaByFile = new Map();

  const targetSourceFiles = prog
    .getSourceFiles()
    .filter(sf => inPackagePredicate(path.resolve(sf.fileName)));

  for (const sf of targetSourceFiles) {
    const absSf = path.resolve(sf.fileName);
    const dtsPath = toDtsFileName(absSf);
    let rawDtsText;

    if (sf.isDeclarationFile) {
      rawDtsText = stripInternalFromDts(sf);
    } else {
      let emittedText;
      prog.emit(
        sf,
        (_outName, text) => {
          emittedText = text;
        },
        undefined,
        true,
      );

      // Retry stripping private/protected only on ClassExpressions if TS4094 blocked emit.
      if (emittedText === undefined) {
        const strippedExprSf = stripPrivateMembersFromSourceFile(sf, true);
        const retryHost = {
          ...baseHost,
          getSourceFile(fileName, lv, onError, shouldCreate) {
            if (path.resolve(fileName) === absSf) return strippedExprSf;
            return (
              prog.getSourceFile(fileName) ||
              baseHost.getSourceFile(fileName, lv, onError, shouldCreate)
            );
          },
        };
        const retryProg = ts.createProgram({
          rootNames: [absSf],
          options: emitOptions,
          host: retryHost,
          oldProgram: prog,
        });
        retryProg.emit(
          retryProg.getSourceFile(absSf),
          (_outName, text) => {
            emittedText = text;
          },
          undefined,
          true,
        );
      }

      if (emittedText !== undefined) {
        rawDtsText = emittedText;
      } else {
        // Fallback when declaration emit fails on an unnameable external symbol (e.g. TS4023).
        const fallbackPath = absSf;
        const rawStrippedInternal = sf.text.includes('@internal')
          ? ts.createSourceFile(
              fallbackPath,
              stripInternalFromDts(sf),
              ts.ScriptTarget.ES2022,
              true,
            )
          : sf;
        rawMetaByFile.set(
          fallbackPath,
          collectClassAccessibility(rawStrippedInternal),
        );
        const strippedSf =
          stripPrivateMembersFromSourceFile(rawStrippedInternal);
        dtsFiles.set(fallbackPath, strippedSf.text);
        continue;
      }
    }

    const rawDtsSf = ts.createSourceFile(
      dtsPath,
      rawDtsText,
      ts.ScriptTarget.ES2022,
      true,
    );
    rawMetaByFile.set(dtsPath, collectClassAccessibility(rawDtsSf));
    const strippedDtsSf = stripPrivateMembersFromSourceFile(rawDtsSf);
    dtsFiles.set(dtsPath, strippedDtsSf.text);
  }

  return {dtsFiles, rawMetaByFile, sourceProg: prog};
}

function runDtsPairComparisons(
  dtsPairs,
  dtsFiles,
  rawMetaByFile,
  compilerOptions,
  sharedHost,
) {
  const cmpOptions = {
    ...compilerOptions,
    skipLibCheck: true,
    noEmit: true,
  };

  const parsedDtsCache = new Map();

  const dtsHost = {
    ...sharedHost,
    realpath(p) {
      const resolved = path.resolve(p);
      if (dtsFiles.has(resolved)) return resolved;
      return sharedHost.realpath ? sharedHost.realpath(resolved) : resolved;
    },
    fileExists(fileName) {
      const resolved = path.resolve(fileName);
      if (dtsFiles.has(resolved)) return true;
      // Hide raw .ts/.mts/.cts source files whenever a normalized .d.ts counterpart was emitted,
      // forcing TypeScript module resolution to bind to the normalized declaration surface.
      if (
        /\.(c|m)?ts$/.test(resolved) &&
        !isDeclarationFilePath(resolved) &&
        dtsFiles.has(toDtsFileName(resolved))
      ) {
        return false;
      }
      return sharedHost.fileExists(resolved);
    },
    readFile(fileName) {
      const resolved = path.resolve(fileName);
      if (dtsFiles.has(resolved)) return dtsFiles.get(resolved);
      return sharedHost.readFile(resolved);
    },
    getSourceFile(fileName, languageVersion, onError, shouldCreate) {
      const resolved = path.resolve(fileName);
      if (parsedDtsCache.has(resolved)) return parsedDtsCache.get(resolved);
      if (dtsFiles.has(resolved)) {
        const sf = ts.createSourceFile(
          resolved,
          dtsFiles.get(resolved),
          languageVersion,
          true,
        );
        parsedDtsCache.set(resolved, sf);
        return sf;
      }
      return sharedHost.getSourceFile(
        fileName,
        languageVersion,
        onError,
        shouldCreate,
      );
    },
  };

  const rootNames = [];
  for (const pair of dtsPairs) {
    if (dtsFiles.has(pair.baseDts) && dtsFiles.has(pair.headDts)) {
      rootNames.push(pair.baseDts, pair.headDts);
    }
  }
  if (rootNames.length === 0) return [];

  let cmpProg = ts.createProgram({
    rootNames,
    options: cmpOptions,
    host: dtsHost,
  });
  let checker = cmpProg.getTypeChecker();

  // Discover all generic exports (including re-exported interfaces, type aliases, functions, and methods)
  // and build a single incremental instantiation bridge program reusing `cmpProg` as `oldProgram`.
  const pairsProbeMeta = [];
  for (const pair of dtsPairs) {
    const bSf = cmpProg.getSourceFile(pair.baseDts);
    const hSf = cmpProg.getSourceFile(pair.headDts);
    const {genericItems, symToExportName, coExportNames} =
      collectGenericProbeItemsFromChecker(checker, bSf, hSf);
    if (genericItems.length > 0) {
      pairsProbeMeta.push({
        baseDtsNoExt: stripDtsExtension(pair.baseDts),
        headDtsNoExt: stripDtsExtension(pair.headDts),
        genericItems,
        symToExportName,
        coExportNames,
      });
    }
  }

  let bridgeResults = null;
  if (pairsProbeMeta.length > 0) {
    const bridgePath = path.resolve(
      path.dirname(dtsPairs[0].headDts),
      '__bcc_generic_bridge__.ts',
    );
    const built = buildGenericBridgeSource(pairsProbeMeta, checker, dtsFiles);
    if (built.taskMap.size > 0) {
      dtsFiles.set(bridgePath, built.bridgeCode);
      cmpProg = ts.createProgram({
        rootNames: [...rootNames, bridgePath],
        options: cmpOptions,
        host: dtsHost,
        oldProgram: cmpProg,
      });
      checker = cmpProg.getTypeChecker();
      bridgeResults = extractBridgeResults(
        cmpProg,
        checker,
        cmpProg.getSourceFile(bridgePath),
        built.taskMap,
      );
    }
  }

  const pairResults = [];
  for (const pair of dtsPairs) {
    const errs = compareModules(
      checker,
      cmpProg.getSourceFile(pair.baseDts),
      cmpProg.getSourceFile(pair.headDts),
      null,
      null,
      {rawMetaByFile, bridgeResults, program: cmpProg, dtsFiles},
    );
    pairResults.push({label: pair.label, errors: errs});
  }
  return pairResults;
}

/**
 * Compares two in-memory TypeScript module strings `baseCode` and `headCode`
 * and returns any breaking changes detected. Useful for unit testing.
 */
export function compareSourceTexts(baseCode, headCode, extraFiles = {}) {
  const compilerOptions = {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.CommonJS,
    strict: true,
    esModuleInterop: true,
    skipLibCheck: true,
  };
  const virtualRoot = path.join(DEFAULT_REPO_ROOT, '__bcc_virtual__');
  const basePath = path.join(virtualRoot, '__base__/mod.ts');
  const headPath = path.join(virtualRoot, '__head__/mod.ts');
  const defaultHost = ts.createCompilerHost(compilerOptions);
  const virtualFiles = new Map([
    [basePath, baseCode],
    [headPath, headCode],
    ...Object.entries(extraFiles).map(([k, v]) => [
      path.isAbsolute(k) ? path.resolve(k) : path.resolve(virtualRoot, k),
      v,
    ]),
  ]);
  const host = {
    ...defaultHost,
    realpath: undefined,
    directoryExists(dirName) {
      const resolved = path.resolve(dirName);
      for (const k of virtualFiles.keys()) {
        if (k.startsWith(resolved + path.sep)) return true;
      }
      if (
        resolved.startsWith(virtualRoot + path.sep) ||
        resolved === virtualRoot
      ) {
        const rel = path.relative(virtualRoot, resolved);
        const topSeg = rel.split(path.sep)[0];
        if (topSeg === '__base__' || topSeg === '__head__') {
          const rest = rel.split(path.sep).slice(1).join(path.sep);
          if (rest.startsWith('node_modules')) {
            return defaultHost.directoryExists(
              path.join(DEFAULT_REPO_ROOT, rest),
            );
          }
        }
      }
      return defaultHost.directoryExists(resolved);
    },
    fileExists(fileName) {
      const resolved = path.resolve(fileName);
      if (virtualFiles.has(resolved)) return true;
      return defaultHost.fileExists(resolved);
    },
    readFile(fileName) {
      const resolved = path.resolve(fileName);
      if (virtualFiles.has(resolved)) return virtualFiles.get(resolved);
      return defaultHost.readFile(resolved);
    },
    getSourceFile(fileName, languageVersion, onError, shouldCreate) {
      const resolved = path.resolve(fileName);
      if (virtualFiles.has(resolved)) {
        return ts.createSourceFile(
          resolved,
          virtualFiles.get(resolved),
          languageVersion,
          true,
        );
      }
      if (SHARED_TS_LIB_CACHE.has(resolved)) {
        return SHARED_TS_LIB_CACHE.get(resolved);
      }
      const sf = defaultHost.getSourceFile(
        fileName,
        languageVersion,
        onError,
        shouldCreate,
      );
      if (sf && resolved.includes(`${path.sep}node_modules${path.sep}`)) {
        SHARED_TS_LIB_CACHE.set(resolved, sf);
      }
      return sf;
    },
  };

  const {dtsFiles, rawMetaByFile} = emitToNormalizedDtsMap(
    [...virtualFiles.keys()],
    abs => virtualFiles.has(abs),
    compilerOptions,
    host,
  );

  const baseActual = dtsFiles.has(toDtsFileName(basePath))
    ? toDtsFileName(basePath)
    : basePath;
  const headActual = dtsFiles.has(toDtsFileName(headPath))
    ? toDtsFileName(headPath)
    : headPath;

  const res = runDtsPairComparisons(
    [{label: 'mod.ts', baseDts: baseActual, headDts: headActual}],
    dtsFiles,
    rawMetaByFile,
    compilerOptions,
    host,
  );
  return res.length > 0 ? res[0].errors : [];
}

function collectExportsMap(exportsField) {
  const map = new Map();
  if (!exportsField) return map;
  if (typeof exportsField === 'string' || Array.isArray(exportsField)) {
    map.set('.', extractConditionTargets(exportsField));
    return map;
  }
  if (typeof exportsField === 'object') {
    const keys = Object.keys(exportsField);
    const isSubpath = keys.some(k => k === '.' || k.startsWith('./'));
    if (isSubpath) {
      for (const [k, v] of Object.entries(exportsField)) {
        if (k === './package.json') continue;
        map.set(k, extractConditionTargets(v));
      }
    } else {
      map.set('.', extractConditionTargets(exportsField));
    }
  }
  return map;
}

function extractConditionTargets(val, out = []) {
  if (!val) return out;
  if (typeof val === 'string') {
    out.push(val);
    return out;
  }
  if (Array.isArray(val)) {
    for (const item of val) extractConditionTargets(item, out);
    return out;
  }
  if (typeof val === 'object') {
    if (typeof val.types === 'string') {
      out.push(val.types);
      return out;
    }
    const preferred = val.import || val.require || val.default || val.node;
    if (preferred) extractConditionTargets(preferred, out);
  }
  return out;
}

function mapTargetToPackageSource(pkgDir, target, parsedTs, existsCheck) {
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
    (clean.endsWith('.ts') || clean.endsWith('.d.ts')) &&
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
    clean.replace(/^build\/(cjs|esm)\//, ''),
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

  for (const stem of stems) {
    const noExt = stem.replace(/\.d\.ts$|\.(c|m)?[jt]s$/, '');
    for (const root of candidateRoots) {
      for (const ext of ['.ts', '.d.ts', '.mts', '.cts']) {
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

function resolvePackageEntrypoints(pkgDir, pkgJson, parsedTs, existsCheck) {
  if (!pkgJson || pkgJson.private === true) {
    return {subpaths: new Map(), entryFiles: []};
  }
  const subpaths = collectExportsMap(pkgJson.exports);
  const rawTargets = [];
  if (pkgJson.exports) {
    for (const targets of subpaths.values()) {
      rawTargets.push(...targets);
    }
  } else {
    const primary =
      pkgJson.types || pkgJson.typings || pkgJson.main || 'src/index.ts';
    rawTargets.push(primary);
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
  return {subpaths, entryFiles};
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

  const hasPkgAndTsconfig = absDir => {
    const relDir = toPosix(path.relative(repoRoot, absDir));
    const pjRel = relDir ? `${relDir}/package.json` : 'package.json';
    const tcRel = relDir ? `${relDir}/tsconfig.json` : 'tsconfig.json';
    if (headRev === null) {
      if (
        fs.existsSync(path.join(absDir, 'package.json')) &&
        fs.existsSync(path.join(absDir, 'tsconfig.json'))
      ) {
        return true;
      }
    } else if (
      getFileAtRev(headRev, pjRel) !== undefined &&
      getFileAtRev(headRev, tcRel) !== undefined
    ) {
      return true;
    }
    return (
      getFileAtRev(baseRev, pjRel) !== undefined &&
      getFileAtRev(baseRev, tcRel) !== undefined
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
    if (currentDir !== repoRoot && hasPkgAndTsconfig(currentDir)) {
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

async function ensurePackageDependencies(repoRoot, packages) {
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

function parseJsonSafe(text) {
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function collectTouchedPackages(
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
        '*tsconfig.json',
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
    const isRelevantConfig =
      baseName === 'package.json' || baseName === 'tsconfig.json';
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

/**
 * Builds `pnpm --filter <pkgName>^...` arguments to compile workspace dependencies
 * of touched non-private packages in topological order when workspace packages are linked.
 */
export function buildWorkspaceDepCompileFilterArgs(packages) {
  const filterArgs = [];
  const seenNames = new Set();
  for (const pkgDir of packages) {
    const pjPath = path.join(pkgDir, 'package.json');
    if (!fs.existsSync(pjPath)) continue;
    const pj = parseJsonSafe(fs.readFileSync(pjPath, 'utf8'));
    if (!pj || pj.private === true || typeof pj.name !== 'string' || !pj.name) {
      continue;
    }
    if (!seenNames.has(pj.name)) {
      seenNames.add(pj.name);
      filterArgs.push('--filter', `${pj.name}^...`);
    }
  }
  return filterArgs;
}

async function compileTouchedWorkspaceDeps(range) {
  const {absRepoRoot, touchedPackages} = collectTouchedPackages(range);
  if (
    touchedPackages.size === 0 ||
    !fs.existsSync(path.join(absRepoRoot, 'pnpm-lock.yaml'))
  ) {
    console.log(
      'No affected public TypeScript packages require dependency compilation.',
    );
    return;
  }
  const filterArgs = buildWorkspaceDepCompileFilterArgs(touchedPackages);
  if (filterArgs.length === 0) {
    console.log('No public workspace package dependencies to compile.');
    return;
  }
  const isWin = process.platform === 'win32';
  const pnpmCmd = isWin ? 'pnpm.cmd' : 'pnpm';
  console.log(
    `Compiling workspace dependencies for ${filterArgs.length / 2} touched package(s)...`,
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

/**
 * Checks for breaking public interface changes between `baseRev` and `headRev`
 * (or the working tree when `headRev` is null).
 */
export async function checkBreakingChanges({
  diffRevArgs,
  baseRev,
  headRev = null,
  pathspecArgs = [],
  repoRoot = DEFAULT_REPO_ROOT,
}) {
  const {absRepoRoot, reader, touchedPackages} = collectTouchedPackages({
    diffRevArgs,
    baseRev,
    headRev,
    pathspecArgs,
    repoRoot,
  });
  const {getFileAtRev, getSubtreeAtRev} = reader;

  if (touchedPackages.size === 0) {
    return [];
  }

  await ensurePackageDependencies(absRepoRoot, touchedPackages);

  const allErrors = [];
  const sharedExternalSfCache = new Map();

  for (const pkgDir of touchedPackages) {
    const relPkgDir = toPosix(path.relative(absRepoRoot, pkgDir));
    const baseTree = getSubtreeAtRev(baseRev, relPkgDir);
    const headTree =
      headRev !== null ? getSubtreeAtRev(headRev, relPkgDir) : null;

    const readBaseRel = relInsidePkg => {
      const repoRel = toPosix(
        path.posix.join(relPkgDir, toPosix(relInsidePkg)),
      );
      return getFileAtRev(baseRev, repoRel);
    };
    const baseExistsAbs = absPath => {
      const relInPkg = toPosix(path.relative(pkgDir, absPath));
      if (relInPkg.startsWith('..')) return false;
      const repoRel = toPosix(path.posix.join(relPkgDir, relInPkg));
      return baseTree.files.has(repoRel);
    };
    const readHeadRel = relInsidePkg => {
      if (headRev !== null) {
        const repoRel = toPosix(
          path.posix.join(relPkgDir, toPosix(relInsidePkg)),
        );
        return getFileAtRev(headRev, repoRel);
      }
      const abs = path.join(pkgDir, relInsidePkg);
      return fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : undefined;
    };
    const headExistsAbs = absPath => {
      const relInPkg = toPosix(path.relative(pkgDir, absPath));
      if (relInPkg.startsWith('..')) return false;
      if (headTree !== null) {
        const repoRel = toPosix(path.posix.join(relPkgDir, relInPkg));
        return headTree.files.has(repoRel);
      }
      return fs.existsSync(absPath);
    };

    const basePkgJson = parseJsonSafe(readBaseRel('package.json'));
    const headPkgJson = parseJsonSafe(readHeadRel('package.json'));

    if (!basePkgJson) {
      // Newly added package: nothing in base to break.
      continue;
    }
    if (basePkgJson.private === true) {
      continue;
    }
    if (!headPkgJson) {
      allErrors.push(
        `[${relPkgDir}/package.json] Published package was deleted.`,
      );
      continue;
    }

    const parsePkgTsconfig = rawText => {
      const configPath = path.join(pkgDir, 'tsconfig.json');
      if (rawText) {
        const res = ts.parseConfigFileTextToJson(configPath, rawText);
        if (res.config) {
          return ts.parseJsonConfigFileContent(res.config, ts.sys, pkgDir);
        }
      }
      if (fs.existsSync(configPath)) {
        const cf = ts.readConfigFile(configPath, ts.sys.readFile);
        return ts.parseJsonConfigFileContent(cf.config, ts.sys, pkgDir);
      }
      return {
        options: {
          target: ts.ScriptTarget.ES2022,
          module: ts.ModuleKind.CommonJS,
          strict: true,
          esModuleInterop: true,
          skipLibCheck: true,
        },
      };
    };

    const baseTsParsed = parsePkgTsconfig(readBaseRel('tsconfig.json'));
    const headTsParsed = parsePkgTsconfig(readHeadRel('tsconfig.json'));

    const baseEntryInfo = resolvePackageEntrypoints(
      pkgDir,
      basePkgJson,
      baseTsParsed,
      baseExistsAbs,
    );
    const headEntryInfo = resolvePackageEntrypoints(
      pkgDir,
      headPkgJson,
      headTsParsed,
      headExistsAbs,
    );

    // Check if any public subpath in package.json#exports was removed!
    for (const baseSubpath of baseEntryInfo.subpaths.keys()) {
      if (headPkgJson.exports && !headEntryInfo.subpaths.has(baseSubpath)) {
        allErrors.push(
          `[${relPkgDir}/package.json] Public subpath export '${baseSubpath}' was removed from package.json#exports.`,
        );
      }
    }

    if (baseEntryInfo.entryFiles.length === 0) {
      continue;
    }

    // Virtual prefix `<pkgDir>/__base_pkg__/<relInPkg>` cleanly isolates all in-package
    // directories (`src/`, `dev/src/`, `types/`, `typescript/src/`, root `index.d.ts`),
    // including renamed files and deleted subdirectories, while delegating `node_modules` to `pkgDir`.
    const basePkgRoot = path.join(pkgDir, '__base_pkg__');

    const toBasePkgPath = absInPkg => {
      const rel = path.relative(pkgDir, absInPkg);
      return path.join(basePkgRoot, rel);
    };
    const fromBasePkgPath = absInBase => {
      const rel = path.relative(basePkgRoot, absInBase);
      return path.join(pkgDir, rel);
    };
    const isInsideDir = (child, dir) =>
      child === dir || child.startsWith(dir + path.sep);
    const isBaseVirtual = abs => isInsideDir(abs, basePkgRoot);
    const isInPkgSource = abs => {
      if (isBaseVirtual(abs)) {
        const rel = toPosix(path.relative(basePkgRoot, abs));
        return !rel.startsWith('node_modules/') && rel !== 'node_modules';
      }
      if (isInsideDir(abs, pkgDir)) {
        const rel = toPosix(path.relative(pkgDir, abs));
        return (
          !rel.startsWith('node_modules/') &&
          rel !== 'node_modules' &&
          !rel.startsWith('build/') &&
          !rel.startsWith('dist/')
        );
      }
      return false;
    };

    const compilerOptions = {
      ...headTsParsed.options,
      skipLibCheck: true,
    };
    const defaultHost = ts.createCompilerHost(compilerOptions);
    const pkgSfCache = new Map();

    const resolveHostRealpath = p => {
      const resolved = path.resolve(p);
      if (isBaseVirtual(resolved) || !defaultHost.realpath) return resolved;
      try {
        return fs.existsSync(resolved)
          ? defaultHost.realpath(resolved)
          : resolved;
      } catch {
        return resolved;
      }
    };

    const customHost = {
      ...defaultHost,
      realpath: resolveHostRealpath,
      directoryExists(dirName) {
        const resolved = path.resolve(dirName);
        if (isBaseVirtual(resolved)) {
          const relInBase = toPosix(path.relative(basePkgRoot, resolved));
          if (
            relInBase === 'node_modules' ||
            relInBase.startsWith('node_modules/')
          ) {
            // Return false so Node/TS resolution walks up naturally to `<pkgDir>/node_modules`,
            // sharing identical external modules and `@types/*` symbols between base and head.
            return false;
          }
          const repoRel = relInBase
            ? toPosix(path.posix.join(relPkgDir, relInBase))
            : relPkgDir;
          return baseTree.dirs.has(repoRel);
        }
        if (
          headTree !== null &&
          isInsideDir(resolved, pkgDir) &&
          !toPosix(path.relative(pkgDir, resolved)).startsWith(
            'node_modules',
          ) &&
          !toPosix(path.relative(pkgDir, resolved)).startsWith('build')
        ) {
          const relInPkg = toPosix(path.relative(pkgDir, resolved));
          const repoRel = relInPkg
            ? toPosix(path.posix.join(relPkgDir, relInPkg))
            : relPkgDir;
          if (headTree.dirs.has(repoRel)) return true;
        }
        return defaultHost.directoryExists(resolved);
      },
      fileExists(fileName) {
        const resolved = path.resolve(fileName);
        if (isBaseVirtual(resolved)) {
          const relInBase = toPosix(path.relative(basePkgRoot, resolved));
          if (relInBase.startsWith('node_modules/')) {
            return false;
          }
          const repoRel = toPosix(path.posix.join(relPkgDir, relInBase));
          return baseTree.files.has(repoRel);
        }
        if (
          headTree !== null &&
          isInsideDir(resolved, pkgDir) &&
          !toPosix(path.relative(pkgDir, resolved)).startsWith(
            'node_modules/',
          ) &&
          !toPosix(path.relative(pkgDir, resolved)).startsWith('build/')
        ) {
          const relInPkg = toPosix(path.relative(pkgDir, resolved));
          const repoRel = toPosix(path.posix.join(relPkgDir, relInPkg));
          return headTree.files.has(repoRel);
        }
        return defaultHost.fileExists(resolved);
      },
      readFile(fileName) {
        const resolved = path.resolve(fileName);
        if (isBaseVirtual(resolved)) {
          const relInBase = toPosix(path.relative(basePkgRoot, resolved));
          if (relInBase.startsWith('node_modules/')) {
            return defaultHost.readFile(path.join(pkgDir, relInBase));
          }
          const repoRel = toPosix(path.posix.join(relPkgDir, relInBase));
          return getFileAtRev(baseRev, repoRel);
        }
        if (
          headRev !== null &&
          isInsideDir(resolved, pkgDir) &&
          !toPosix(path.relative(pkgDir, resolved)).startsWith(
            'node_modules/',
          ) &&
          !toPosix(path.relative(pkgDir, resolved)).startsWith('build/')
        ) {
          const relInPkg = toPosix(path.relative(pkgDir, resolved));
          const repoRel = toPosix(path.posix.join(relPkgDir, relInPkg));
          return getFileAtRev(headRev, repoRel);
        }
        return defaultHost.readFile(resolved);
      },
      resolveModuleNameLiterals(
        moduleLiterals,
        containingFile,
        redirectedReference,
        options,
      ) {
        return moduleLiterals.map(lit => {
          const res = ts.resolveModuleName(
            lit.text,
            containingFile,
            options,
            this,
            undefined,
            redirectedReference,
          );
          // Canonicalize `__base_pkg__/node_modules/...` and pnpm symlinked `node_modules/...`
          // to a single realpath so base & head share identical external Symbol/Type instances.
          if (res.resolvedModule) {
            let rf = path.resolve(res.resolvedModule.resolvedFileName);
            if (isBaseVirtual(rf)) {
              const rel = toPosix(path.relative(basePkgRoot, rf));
              if (rel.startsWith('node_modules/')) {
                rf = fromBasePkgPath(rf);
              }
            }
            if (rf.includes(`${path.sep}node_modules${path.sep}`)) {
              const realRf = realpathSafe(rf);
              if (realRf !== res.resolvedModule.resolvedFileName) {
                return {
                  resolvedModule: {
                    ...res.resolvedModule,
                    resolvedFileName: realRf,
                  },
                };
              }
            }
          }
          return res;
        });
      },
      getSourceFile(fileName, languageVersion, onError, shouldCreate) {
        const resolved = path.resolve(fileName);
        if (pkgSfCache.has(resolved)) return pkgSfCache.get(resolved);
        if (isInPkgSource(resolved)) {
          const text = this.readFile(resolved);
          if (text === undefined) return undefined;
          const sf = ts.createSourceFile(resolved, text, languageVersion, true);
          pkgSfCache.set(resolved, sf);
          return sf;
        }
        const isTsStdLib = resolved.includes(
          `${path.sep}node_modules${path.sep}typescript${path.sep}lib${path.sep}`,
        );
        if (isTsStdLib && SHARED_TS_LIB_CACHE.has(resolved)) {
          return SHARED_TS_LIB_CACHE.get(resolved);
        }
        if (sharedExternalSfCache.has(resolved)) {
          return sharedExternalSfCache.get(resolved);
        }
        const sf = defaultHost.getSourceFile(
          fileName,
          languageVersion,
          onError,
          shouldCreate,
        );
        if (isTsStdLib && sf) {
          SHARED_TS_LIB_CACHE.set(resolved, sf);
        }
        sharedExternalSfCache.set(resolved, sf);
        return sf;
      },
    };

    // Match each base public entrypoint to its head counterpart (supporting subpath remaps).
    const entryPairs = [];
    const baseSubpathEntries = [...baseEntryInfo.subpaths.entries()];
    if (basePkgJson.exports && baseSubpathEntries.length > 0) {
      for (const [subpath, bTargets] of baseSubpathEntries) {
        const hTargets = headEntryInfo.subpaths.get(subpath);
        if (!hTargets) continue;
        const bFile = bTargets
          .map(t =>
            mapTargetToPackageSource(pkgDir, t, baseTsParsed, baseExistsAbs),
          )
          .find(Boolean);
        const hFile = hTargets
          .map(t =>
            mapTargetToPackageSource(pkgDir, t, headTsParsed, headExistsAbs),
          )
          .find(Boolean);
        if (!bFile) continue;
        const relLabel = toPosix(path.relative(absRepoRoot, hFile || bFile));
        if (!hFile || !headExistsAbs(hFile)) {
          allErrors.push(
            `[${relLabel}] Public entrypoint source file was deleted.`,
          );
        } else {
          entryPairs.push({
            label: relLabel,
            baseSrc: toBasePkgPath(bFile),
            headSrc: hFile,
          });
        }
      }
    } else {
      for (const bFile of baseEntryInfo.entryFiles) {
        const hFile = headExistsAbs(bFile)
          ? bFile
          : headEntryInfo.entryFiles[0] || bFile;
        const relLabel = toPosix(path.relative(absRepoRoot, hFile));
        if (!headExistsAbs(hFile)) {
          allErrors.push(
            `[${relLabel}] Public entrypoint source file was deleted.`,
          );
        } else {
          entryPairs.push({
            label: relLabel,
            baseSrc: toBasePkgPath(bFile),
            headSrc: hFile,
          });
        }
      }
    }

    if (entryPairs.length === 0) continue;

    // Deduplicate entryPairs when multiple export subpaths/conditions resolve to the same source file pair.
    const uniqueEntryPairs = [];
    const seenPairKeys = new Set();
    for (const p of entryPairs) {
      const k = `${p.baseSrc}::${p.headSrc}`;
      if (!seenPairKeys.has(k)) {
        seenPairKeys.add(k);
        uniqueEntryPairs.push(p);
      }
    }

    const srcRoots = uniqueEntryPairs.flatMap(p => [p.baseSrc, p.headSrc]);
    const {dtsFiles, rawMetaByFile} = emitToNormalizedDtsMap(
      srcRoots,
      isInPkgSource,
      compilerOptions,
      customHost,
    );

    const dtsPairs = uniqueEntryPairs.map(p => ({
      label: p.label,
      baseDts: dtsFiles.has(toDtsFileName(p.baseSrc))
        ? toDtsFileName(p.baseSrc)
        : p.baseSrc,
      headDts: dtsFiles.has(toDtsFileName(p.headSrc))
        ? toDtsFileName(p.headSrc)
        : p.headSrc,
    }));

    const cmpHost = {
      ...defaultHost,
      realpath: resolveHostRealpath,
      directoryExists: d => customHost.directoryExists(d),
      fileExists(f) {
        const resolved = path.resolve(f);
        if (isBaseVirtual(resolved)) {
          const rel = toPosix(path.relative(basePkgRoot, resolved));
          if (rel.endsWith('package.json') || rel.startsWith('node_modules/')) {
            return customHost.fileExists(resolved);
          }
          return false;
        }
        return defaultHost.fileExists(resolved);
      },
      readFile(f) {
        const resolved = path.resolve(f);
        if (isBaseVirtual(resolved)) {
          const rel = toPosix(path.relative(basePkgRoot, resolved));
          if (rel.endsWith('package.json') || rel.startsWith('node_modules/')) {
            return customHost.readFile(resolved);
          }
          return undefined;
        }
        return defaultHost.readFile(resolved);
      },
      resolveModuleNameLiterals(lits, containingFile, redir, opts) {
        return lits.map(lit => {
          const res = ts.resolveModuleName(
            lit.text,
            containingFile,
            opts,
            this,
            undefined,
            redir,
          );
          if (res.resolvedModule) {
            let rf = path.resolve(res.resolvedModule.resolvedFileName);
            if (isBaseVirtual(rf)) {
              const rel = toPosix(path.relative(basePkgRoot, rf));
              if (rel.startsWith('node_modules/')) {
                rf = fromBasePkgPath(rf);
              }
            }
            if (rf.includes(`${path.sep}node_modules${path.sep}`)) {
              const realRf = realpathSafe(rf);
              if (realRf !== res.resolvedModule.resolvedFileName) {
                return {
                  resolvedModule: {
                    ...res.resolvedModule,
                    resolvedFileName: realRf,
                  },
                };
              }
            }
          }
          return res;
        });
      },
      getSourceFile(fileName, lv, onError, shouldCreate) {
        const resolved = path.resolve(fileName);
        const isTsStdLib = resolved.includes(
          `${path.sep}node_modules${path.sep}typescript${path.sep}lib${path.sep}`,
        );
        if (isTsStdLib && SHARED_TS_LIB_CACHE.has(resolved)) {
          return SHARED_TS_LIB_CACHE.get(resolved);
        }
        if (sharedExternalSfCache.has(resolved)) {
          return sharedExternalSfCache.get(resolved);
        }
        const sf = defaultHost.getSourceFile(
          fileName,
          lv,
          onError,
          shouldCreate,
        );
        if (isTsStdLib && sf) {
          SHARED_TS_LIB_CACHE.set(resolved, sf);
        }
        sharedExternalSfCache.set(resolved, sf);
        return sf;
      },
    };

    const results = runDtsPairComparisons(
      dtsPairs,
      dtsFiles,
      rawMetaByFile,
      compilerOptions,
      cmpHost,
    );
    for (const {label, errors} of results) {
      for (const err of errors) {
        allErrors.push(`[${label}] ${err}`);
      }
    }
  }

  return allErrors;
}

export function escapeWorkflowCommandValue(str) {
  return String(str)
    .replace(/%/g, '%25')
    .replace(/\r/g, '%0D')
    .replace(/\n/g, '%0A');
}

export function escapeWorkflowCommandProperty(str) {
  return escapeWorkflowCommandValue(str)
    .replace(/:/g, '%3A')
    .replace(/,/g, '%2C');
}

async function main() {
  try {
    const isStrict = process.argv.includes('--strict');
    const compileDepsOnly = process.argv.includes('--compile-deps-only');
    const range = resolveGitDiffRange(isStrict);
    if (compileDepsOnly) {
      await compileTouchedWorkspaceDeps(range);
      return;
    }
    console.log(
      `Running breaking change check (${range.diffRevArgs.join(' ')})...`,
    );
    const errors = await checkBreakingChanges(range);
    if (errors.length === 0) {
      console.log('No breaking changes detected.');
      return;
    }
    console.error(
      `\nDetected ${errors.length} potential breaking change(s) in public TypeScript interfaces:`,
    );
    for (let i = 0; i < errors.length; i++) {
      const err = errors[i];
      console.error(`  - ${err}`);
      if (process.env.GITHUB_ACTIONS === 'true' && i < MAX_GITHUB_ANNOTATIONS) {
        const match = /^\[([^\]]+)\]\s*([\s\S]*)$/.exec(err);
        if (match) {
          console.log(
            `::error file=${escapeWorkflowCommandProperty(match[1])},title=Breaking Change Detected::${escapeWorkflowCommandValue(match[2])}`,
          );
        } else {
          console.log(
            `::error title=Breaking Change Detected::${escapeWorkflowCommandValue(err)}`,
          );
        }
      }
    }
    if (
      process.env.GITHUB_ACTIONS === 'true' &&
      errors.length > MAX_GITHUB_ANNOTATIONS
    ) {
      console.log(
        `::error title=Additional Breaking Changes::...and ${errors.length - MAX_GITHUB_ANNOTATIONS} additional breaking change(s); see step summary and job logs for the full list.`,
      );
    }
    if (process.env.GITHUB_STEP_SUMMARY) {
      const shown = errors.slice(0, MAX_SUMMARY_ITEMS_INLINE);
      const overflow = errors.slice(MAX_SUMMARY_ITEMS_INLINE);
      const summaryLines = [
        '### ⚠️ Breaking Changes Detected in Public TypeScript Interfaces',
        '',
        `Detected **${errors.length}** breaking change(s) in public TypeScript interfaces:`,
        '',
        ...shown.map(err => `- ${err}`),
      ];
      if (overflow.length > 0) {
        summaryLines.push(
          '',
          `<details><summary>Show ${overflow.length} remaining breaking change(s)</summary>`,
          '',
          ...overflow.map(err => `- ${err}`),
          '',
          '</details>',
        );
      }
      summaryLines.push('');
      fs.appendFileSync(
        process.env.GITHUB_STEP_SUMMARY,
        summaryLines.join('\n'),
      );
    }
    process.exitCode = 1;
  } catch (err) {
    console.error('\nBreaking change check failed:', err.message);
    process.exitCode = 1;
  }
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (invokedPath === fileURLToPath(import.meta.url)) {
  main();
}
