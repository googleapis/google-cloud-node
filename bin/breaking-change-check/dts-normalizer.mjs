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

import fs from 'node:fs';
import {createRequire} from 'node:module';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const MODULE_DIR = path.dirname(fileURLToPath(import.meta.url));
export const DEFAULT_REPO_ROOT = path.resolve(MODULE_DIR, '..', '..');
const require = createRequire(path.join(DEFAULT_REPO_ROOT, 'package.json'));
export const ts = require('typescript');

export const SHARED_TS_LIB_CACHE = new Map();

export function realpathSafe(p) {
  try {
    return fs.realpathSync(p);
  } catch {
    return p;
  }
}

export function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

export function isDeclarationFilePath(filePath) {
  return /\.d\.(c|m)?ts$/.test(filePath);
}

export function toDtsFileName(filePath) {
  if (isDeclarationFilePath(filePath)) return filePath;
  if (filePath.endsWith('.mts')) return filePath.slice(0, -4) + '.d.mts';
  if (filePath.endsWith('.cts')) return filePath.slice(0, -4) + '.d.cts';
  return filePath.replace(/\.ts$/, '.d.ts');
}

export function stripDtsExtension(dtsPath) {
  return dtsPath.replace(/\.d\.(c|m)?ts$/, '');
}

export function dtsPathToImportSpec(dtsPath) {
  const posix = toPosix(dtsPath);
  if (posix.endsWith('.d.mts')) return posix.slice(0, -6) + '.mjs';
  if (posix.endsWith('.d.cts')) return posix.slice(0, -6) + '.cjs';
  if (posix.endsWith('.d.ts')) return posix.slice(0, -5) + '.js';
  if (posix.endsWith('.mts')) return posix.slice(0, -4) + '.mjs';
  if (posix.endsWith('.cts')) return posix.slice(0, -4) + '.cjs';
  if (posix.endsWith('.ts')) return posix.slice(0, -3) + '.js';
  return posix;
}

export function isValidIdentifierName(name) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) && name !== 'default';
}

function hasInternalTag(node, sf) {
  const fullStart = node.getFullStart();
  const ranges = ts.getLeadingCommentRanges(sf.text, fullStart);
  if (ranges) {
    for (const r of ranges) {
      const comment = sf.text.slice(r.pos, r.end);
      if (/@internal\b/.test(comment)) {
        return true;
      }
    }
  }
  // Also catch inline block JSDoc on the same line immediately preceding `node`
  // (e.g. `class C { /** @internal */ constructor(); }` or `enum K { A, /** @internal */ B }`),
  // which `ts.getLeadingCommentRanges` omits because there is no preceding newline after `{` or `,`.
  const nodeStart = node.getStart(sf);
  if (nodeStart > fullStart) {
    const trivia = sf.text.slice(fullStart, nodeStart);
    const sameLineTrivia = trivia.slice(trivia.lastIndexOf('\n') + 1);
    if (/\/\*[\s\S]*?@internal\b[\s\S]*?\*\//.test(sameLineTrivia)) {
      return true;
    }
  }
  const tags = ts.getJSDocTags(node);
  return tags.some(t => t.tagName.text === 'internal');
}

function stripExportModifierKeepLocal(node, inAmbientScope) {
  if (!node.name) return undefined;
  const mods = ts.canHaveModifiers(node) ? ts.getModifiers(node) || [] : [];
  const filtered = mods.filter(
    m =>
      m.kind !== ts.SyntaxKind.ExportKeyword &&
      m.kind !== ts.SyntaxKind.DefaultKeyword,
  );
  const needsDeclare =
    !inAmbientScope &&
    (ts.isClassDeclaration(node) ||
      ts.isEnumDeclaration(node) ||
      ts.isModuleDeclaration(node)) &&
    !filtered.some(m => m.kind === ts.SyntaxKind.DeclareKeyword);
  const nextMods = needsDeclare
    ? [ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword), ...filtered]
    : filtered;

  if (ts.isTypeAliasDeclaration(node)) {
    return ts.factory.updateTypeAliasDeclaration(
      node,
      nextMods,
      node.name,
      node.typeParameters,
      node.type,
    );
  }
  if (ts.isInterfaceDeclaration(node)) {
    return ts.factory.updateInterfaceDeclaration(
      node,
      nextMods,
      node.name,
      node.typeParameters,
      node.heritageClauses,
      node.members,
    );
  }
  if (ts.isClassDeclaration(node)) {
    return ts.factory.updateClassDeclaration(
      node,
      nextMods,
      node.name,
      node.typeParameters,
      node.heritageClauses,
      node.members,
    );
  }
  if (ts.isEnumDeclaration(node)) {
    return ts.factory.updateEnumDeclaration(
      node,
      nextMods,
      node.name,
      node.members,
    );
  }
  return undefined;
}

/**
 * Strips `@internal`-annotated declarations, members, constructors, enum members,
 * and export specifiers from a `.d.ts` SourceFile, matching TypeScript's `stripInternal: true`.
 * Exported `@internal` types keep a non-exported local declaration so public signatures
 * referencing them (e.g. `Expression.expressionType: ExpressionType`) still resolve soundly.
 */
export function stripInternalFromDts(sf) {
  if (!sf.text.includes('@internal')) {
    return sf.text;
  }
  let ambientDepth = 0;
  let strippedTopLevelExport = false;
  const transformer = context => {
    const visit = node => {
      if (ts.isConstructorDeclaration(node) && hasInternalTag(node, sf)) {
        const parentCtors =
          node.parent && ts.isClassDeclaration(node.parent)
            ? node.parent.members.filter(ts.isConstructorDeclaration)
            : [node];
        const hasNonInternalCtor = parentCtors.some(
          c => !hasInternalTag(c, sf),
        );
        if (hasNonInternalCtor || parentCtors[0] !== node) {
          return undefined;
        }
        return ts.factory.createConstructorDeclaration(
          [ts.factory.createModifier(ts.SyntaxKind.PrivateKeyword)],
          [],
          undefined,
        );
      }
      if (ts.isEnumMember(node) && hasInternalTag(node, sf)) {
        return undefined;
      }
      if (
        ts.isExportDeclaration(node) &&
        node.exportClause &&
        ts.isNamedExports(node.exportClause)
      ) {
        if (hasInternalTag(node, sf)) {
          if (ambientDepth === 0) strippedTopLevelExport = true;
          return undefined;
        }
        const origSpecs = node.exportClause.elements;
        const keptSpecs = origSpecs.filter(sp => !hasInternalTag(sp, sf));
        if (keptSpecs.length !== origSpecs.length) {
          if (keptSpecs.length === 0) {
            if (ambientDepth === 0) strippedTopLevelExport = true;
            return node.moduleSpecifier
              ? undefined
              : ts.factory.createExportDeclaration(
                  undefined,
                  false,
                  ts.factory.createNamedExports([]),
                  undefined,
                  undefined,
                );
          }
          return ts.factory.updateExportDeclaration(
            node,
            node.modifiers,
            node.isTypeOnly,
            ts.factory.createNamedExports(keptSpecs),
            node.moduleSpecifier,
            node.attributes,
          );
        }
      }
      if (ts.isExportAssignment(node) && hasInternalTag(node, sf)) {
        if (ambientDepth === 0) strippedTopLevelExport = true;
        return undefined;
      }
      if (
        (ts.isTypeAliasDeclaration(node) ||
          ts.isInterfaceDeclaration(node) ||
          ts.isClassDeclaration(node) ||
          ts.isEnumDeclaration(node)) &&
        hasInternalTag(node, sf)
      ) {
        const flags = ts.getCombinedModifierFlags(node);
        if (flags & ts.ModifierFlags.Export || node.name) {
          if (ambientDepth === 0) {
            strippedTopLevelExport = true;
          }
          const visited = ts.visitEachChild(node, visit, context);
          return stripExportModifierKeepLocal(visited, ambientDepth > 0);
        }
        return undefined;
      }
      if (
        (ts.isFunctionDeclaration(node) ||
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
        if (
          ambientDepth === 0 &&
          ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export
        ) {
          strippedTopLevelExport = true;
        }
        return undefined;
      }
      if (ts.isModuleDeclaration(node)) {
        ambientDepth++;
        const updated = ts.visitEachChild(node, visit, context);
        ambientDepth--;
        return updated;
      }
      return ts.visitEachChild(node, visit, context);
    };
    return root => ts.visitNode(root, visit);
  };
  const res = ts.transform(sf, [transformer]);
  const transformedSf = res.transformed[0];
  const hasExplicitExportListOrAssign = transformedSf.statements.some(
    st =>
      ts.isExportAssignment(st) ||
      (ts.isExportDeclaration(st) &&
        !st.moduleSpecifier &&
        st.exportClause &&
        ts.isNamedExports(st.exportClause)),
  );
  const printer = ts.createPrinter({newLine: ts.NewLineKind.LineFeed});
  let printed = printer.printFile(transformedSf);
  res.dispose();
  if (strippedTopLevelExport && !hasExplicitExportListOrAssign) {
    printed += '\nexport {};\n';
  }
  return printed;
}

function getRootIdentifierOfExpr(expr) {
  let cur = expr;
  while (ts.isPropertyAccessExpression(cur)) {
    cur = cur.expression;
  }
  return ts.isIdentifier(cur) ? cur.text : null;
}

function exprToEntityName(expr) {
  if (ts.isIdentifier(expr)) {
    return ts.factory.createIdentifier(expr.text);
  }
  if (ts.isPropertyAccessExpression(expr) && ts.isIdentifier(expr.name)) {
    const left = exprToEntityName(expr.expression);
    if (left) {
      return ts.factory.createQualifiedName(
        left,
        ts.factory.createIdentifier(expr.name.text),
      );
    }
  }
  return null;
}

function collectDeclaredTopLevelNames(statements) {
  const names = new Set();
  for (const st of statements) {
    if (
      (ts.isFunctionDeclaration(st) ||
        ts.isClassDeclaration(st) ||
        ts.isInterfaceDeclaration(st) ||
        ts.isTypeAliasDeclaration(st) ||
        ts.isEnumDeclaration(st) ||
        ts.isModuleDeclaration(st) ||
        ts.isImportEqualsDeclaration(st)) &&
      st.name &&
      ts.isIdentifier(st.name)
    ) {
      names.add(st.name.text);
    } else if (ts.isVariableStatement(st)) {
      for (const d of st.declarationList.declarations) {
        if (ts.isIdentifier(d.name)) names.add(d.name.text);
      }
    } else if (ts.isImportDeclaration(st) && st.importClause) {
      const c = st.importClause;
      if (c.name) names.add(c.name.text);
      if (c.namedBindings) {
        if (ts.isNamespaceImport(c.namedBindings)) {
          names.add(c.namedBindings.name.text);
        } else if (ts.isNamedImports(c.namedBindings)) {
          for (const el of c.namedBindings.elements) {
            names.add(el.name.text);
          }
        }
      }
    }
  }
  return names;
}

function addModifierToAmbientStmt(st, modKind) {
  const existing = ts.canHaveModifiers(st) ? ts.getModifiers(st) || [] : [];
  if (existing.some(m => m.kind === modKind)) return st;
  const mods = [ts.factory.createModifier(modKind), ...existing];
  if (ts.isFunctionDeclaration(st)) {
    return ts.factory.updateFunctionDeclaration(
      st,
      mods,
      st.asteriskToken,
      st.name,
      st.typeParameters,
      st.parameters,
      st.type,
      st.body,
    );
  }
  if (ts.isClassDeclaration(st)) {
    return ts.factory.updateClassDeclaration(
      st,
      mods,
      st.name,
      st.typeParameters,
      st.heritageClauses,
      st.members,
    );
  }
  if (ts.isModuleDeclaration(st)) {
    return ts.factory.updateModuleDeclaration(st, mods, st.name, st.body);
  }
  if (ts.isEnumDeclaration(st)) {
    return ts.factory.updateEnumDeclaration(st, mods, st.name, st.members);
  }
  if (ts.isVariableStatement(st)) {
    return ts.factory.updateVariableStatement(st, mods, st.declarationList);
  }
  if (
    ts.isInterfaceDeclaration(st) &&
    modKind === ts.SyntaxKind.ExportKeyword
  ) {
    return ts.factory.updateInterfaceDeclaration(
      st,
      mods,
      st.name,
      st.typeParameters,
      st.heritageClauses,
      st.members,
    );
  }
  if (
    ts.isTypeAliasDeclaration(st) &&
    modKind === ts.SyntaxKind.ExportKeyword
  ) {
    return ts.factory.updateTypeAliasDeclaration(
      st,
      mods,
      st.name,
      st.typeParameters,
      st.type,
    );
  }
  return st;
}

/**
 * Converts an ambient `declare module '<pkg>' { ... }` entrypoint `.d.ts` file
 * (such as `firestore.d.ts`, `pipelines.d.ts`, or `retry-request/index.d.ts`)
 * into a self-contained external module so `base` and `head` do not globally merge
 * ambient namespaces and `checker.getSymbolAtLocation(sf)` resolves all public exports.
 */
export function unwrapAmbientModuleDts(sf, packageName = null) {
  const hasTopLevelExport = sf.statements.some(
    st =>
      ts.isExportAssignment(st) ||
      ts.isExportDeclaration(st) ||
      Boolean(ts.getCombinedModifierFlags(st) & ts.ModifierFlags.Export),
  );
  if (hasTopLevelExport) {
    return {text: sf.text, unwrapped: false, depSpecifiers: []};
  }

  const ambientModules = sf.statements.filter(
    st =>
      ts.isModuleDeclaration(st) &&
      ts.isStringLiteral(st.name) &&
      st.body &&
      ts.isModuleBlock(st.body),
  );
  if (ambientModules.length === 0) {
    return {text: sf.text, unwrapped: false, depSpecifiers: []};
  }

  const targetMod =
    (packageName &&
      ambientModules.find(
        m =>
          m.name.text === packageName ||
          m.name.text.startsWith(`${packageName}/`),
      )) ||
    ambientModules[ambientModules.length - 1];
  const innerStmts = targetMod.body.statements;
  const hasExplicitExport = innerStmts.some(
    s =>
      ts.isExportAssignment(s) ||
      ts.isExportDeclaration(s) ||
      Boolean(ts.getCombinedModifierFlags(s) & ts.ModifierFlags.Export),
  );

  const liftedStmts = [];
  let neededRootIdent = null;
  for (const s of innerStmts) {
    if (ts.isExportAssignment(s) && s.isExportEquals) {
      const rootId = getRootIdentifierOfExpr(s.expression);
      if (rootId) neededRootIdent = rootId;
      if (ts.isPropertyAccessExpression(s.expression)) {
        const entity = exprToEntityName(s.expression);
        if (entity) {
          const aliasId = ts.factory.createIdentifier('__bcc_ambient_export__');
          liftedStmts.push(
            ts.factory.createImportEqualsDeclaration(
              undefined,
              false,
              aliasId,
              entity,
            ),
            ts.factory.createExportAssignment(undefined, true, aliasId),
          );
          continue;
        }
      }
      liftedStmts.push(s);
      continue;
    }
    if (
      ts.isImportDeclaration(s) ||
      ts.isImportEqualsDeclaration(s) ||
      ts.isExportAssignment(s) ||
      ts.isExportDeclaration(s)
    ) {
      liftedStmts.push(s);
      continue;
    }
    const sFlags = ts.getCombinedModifierFlags(s);
    if (!hasExplicitExport) {
      liftedStmts.push(
        sFlags & ts.ModifierFlags.Export
          ? s
          : addModifierToAmbientStmt(s, ts.SyntaxKind.ExportKeyword),
      );
    } else if (
      !(sFlags & (ts.ModifierFlags.Export | ts.ModifierFlags.Ambient))
    ) {
      liftedStmts.push(
        addModifierToAmbientStmt(s, ts.SyntaxKind.DeclareKeyword),
      );
    } else {
      liftedStmts.push(s);
    }
  }

  if (liftedStmts.length === 0) {
    liftedStmts.push(
      ts.factory.createExportDeclaration(
        undefined,
        false,
        ts.factory.createNamedExports([]),
        undefined,
        undefined,
      ),
    );
  }

  const otherTopStmts = sf.statements.filter(st => st !== targetMod);
  const declaredNames = collectDeclaredTopLevelNames([
    ...otherTopStmts,
    ...innerStmts,
  ]);
  const edits = [];
  const depSpecifiers = [];

  if (neededRootIdent && !declaredNames.has(neededRootIdent)) {
    const sideEffectImp = otherTopStmts.find(
      st =>
        ts.isImportDeclaration(st) &&
        !st.importClause &&
        ts.isStringLiteral(st.moduleSpecifier) &&
        st.moduleSpecifier.text.startsWith('.'),
    );
    if (sideEffectImp) {
      const spec = sideEffectImp.moduleSpecifier.text;
      depSpecifiers.push(spec);
      edits.push({
        start: sideEffectImp.getStart(sf),
        end: sideEffectImp.getEnd(),
        replacement: `import ${neededRootIdent} = require(${JSON.stringify(spec)});`,
      });
    }
  }

  const printer = ts.createPrinter({newLine: ts.NewLineKind.LineFeed});
  const printedLifted = liftedStmts
    .map(st => printer.printNode(ts.EmitHint.Unspecified, st, sf))
    .join('\n');
  edits.push({
    start: targetMod.getStart(sf),
    end: targetMod.getEnd(),
    replacement: printedLifted,
  });

  edits.sort((a, b) => b.start - a.start);
  let out = sf.text;
  for (const e of edits) {
    out = out.slice(0, e.start) + e.replacement + out.slice(e.end);
  }
  return {text: out, unwrapped: true, depSpecifiers};
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
  if (
    !/\b(private|protected)\b/.test(sf.text) &&
    !/#[A-Za-z_$]/.test(sf.text)
  ) {
    return sf;
  }
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

export function getMemberNameDisplay(nameNode, sf) {
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

export function rankVisibility(vis) {
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

  const signatureCtors = [];
  const allCtors = [];

  for (const m of classNode.members) {
    if (ts.isConstructorDeclaration(m)) {
      allCtors.push(m);
      if (!m.body) signatureCtors.push(m);
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

  let ctorVisibility = 'public';
  const activeCtors = signatureCtors.length > 0 ? signatureCtors : allCtors;
  if (activeCtors.length > 0) {
    let best = 'private';
    for (const c of activeCtors) {
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
    if (
      ts.isModuleDeclaration(node) &&
      (ts.isIdentifier(node.name) || ts.isStringLiteral(node.name))
    ) {
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

export function getQualifiedDeclName(decl) {
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
    if (
      ts.isModuleDeclaration(cur) &&
      (ts.isIdentifier(cur.name) || ts.isStringLiteral(cur.name))
    ) {
      parts.unshift(cur.name.text);
    }
    cur = cur.parent;
  }
  return parts.filter(Boolean).join('.');
}

export function findClassMetaForSymbol(sym, rawMetaByFile) {
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

export function findDeclaringClassMemberMeta(
  propSym,
  rawMetaByFile,
  isStatic = false,
) {
  const decls = propSym.declarations || [];
  let bestVis = null;
  let bestInfo = null;
  for (const d of decls) {
    const parent = d.parent;
    if (!parent || !ts.isClassDeclaration(parent)) continue;
    const sf = parent.getSourceFile();
    const fileMeta = rawMetaByFile.get(path.resolve(sf.fileName));
    if (!fileMeta) continue;
    const clsMeta = fileMeta.get(getQualifiedDeclName(parent));
    if (!clsMeta) continue;
    const name = ts.isParameter(d)
      ? ts.isIdentifier(d.name)
        ? d.name.text
        : undefined
      : getMemberNameDisplay(d.name, sf);
    if (!name) continue;
    const key = `${isStatic ? 'static:' : ''}${name}`;
    const info = clsMeta.members.get(key);
    if (info && info.visibility) {
      if (
        bestVis === null ||
        rankVisibility(info.visibility) > rankVisibility(bestVis)
      ) {
        bestVis = info.visibility;
        bestInfo = info;
      }
    }
  }
  return bestInfo;
}

function makeEmitOptions(compilerOptions) {
  return {
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
}

const TSCONFIG_DECL_OPTION_KEYS = [
  'strict',
  'strictNullChecks',
  'exactOptionalPropertyTypes',
  'noImplicitAny',
  'noImplicitThis',
  'useUnknownInCatchVariables',
  'useDefineForClassFields',
  'isolatedDeclarations',
  'resolveJsonModule',
  'module',
  'moduleResolution',
  'esModuleInterop',
  'allowSyntheticDefaultImports',
  'target',
];

const TSCONFIG_DECL_COMPLEX_OPTION_KEYS = [
  'types',
  'typeRoots',
  'lib',
  'paths',
];

function doDeclCompilerOptionsDiffer(optsA, optsB) {
  if (!optsA || !optsB) return false;
  for (const k of TSCONFIG_DECL_OPTION_KEYS) {
    if (optsA[k] !== optsB[k]) return true;
  }
  for (const k of TSCONFIG_DECL_COMPLEX_OPTION_KEYS) {
    if (JSON.stringify(optsA[k] ?? null) !== JSON.stringify(optsB[k] ?? null)) {
      return true;
    }
  }
  const normBaseUrl = u =>
    typeof u === 'string' ? u.replace(`${path.sep}__base_pkg__`, '') : '';
  if (normBaseUrl(optsA.baseUrl) !== normBaseUrl(optsB.baseUrl)) return true;
  const normRootDirs = dirs =>
    Array.isArray(dirs) ? dirs.map(d => normBaseUrl(d)) : null;
  if (
    JSON.stringify(normRootDirs(optsA.rootDirs)) !==
    JSON.stringify(normRootDirs(optsB.rootDirs))
  ) {
    return true;
  }
  return false;
}

function normalizeSinglePassFiles(
  prog,
  emitOptions,
  inPackagePredicate,
  baseHost,
  dtsFiles,
  rawMetaByFile,
  rawDtsTextByPath,
) {
  const targetSourceFiles = prog
    .getSourceFiles()
    .filter(sf => inPackagePredicate(path.resolve(sf.fileName)));

  for (const sf of targetSourceFiles) {
    const absSf = path.resolve(sf.fileName);
    const dtsPath = toDtsFileName(absSf);
    let rawDtsText;

    if (sf.isDeclarationFile) {
      // Keep original text in `rawDtsTextByPath` before `stripInternalFromDts` so `unwrapAmbientModuleDts`
      // sees original `export` modifiers inside `declare module '...'` blocks before stripping `@internal`.
      rawDtsTextByPath.set(dtsPath, sf.text);
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
        const rawText = stripInternalFromDts(sf);
        rawDtsTextByPath.set(fallbackPath, rawText);
        const rawStrippedInternal =
          rawText === sf.text
            ? sf
            : ts.createSourceFile(
                fallbackPath,
                rawText,
                ts.ScriptTarget.ES2022,
                true,
              );
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

    if (!rawDtsTextByPath.has(dtsPath)) {
      rawDtsTextByPath.set(dtsPath, rawDtsText);
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
}

export function emitToNormalizedDtsMap(
  sourceRootFiles,
  inPackagePredicate,
  compilerOptions,
  baseHost,
  extraOptions = {},
) {
  const {
    baseCompilerOptions = null,
    isBaseFilePredicate = null,
    entrypointDtsTargets = null,
    packageName = null,
  } = extraOptions;

  const dtsFiles = new Map();
  const rawMetaByFile = new Map();
  const rawDtsTextByPath = new Map();

  let sourceProg;
  if (
    baseCompilerOptions &&
    isBaseFilePredicate &&
    doDeclCompilerOptionsDiffer(baseCompilerOptions, compilerOptions)
  ) {
    const baseRoots = sourceRootFiles.filter(f =>
      isBaseFilePredicate(path.resolve(f)),
    );
    const headRoots = sourceRootFiles.filter(
      f => !isBaseFilePredicate(path.resolve(f)),
    );
    if (baseRoots.length > 0) {
      const baseEmitOpts = makeEmitOptions(baseCompilerOptions);
      const baseProg = ts.createProgram({
        rootNames: baseRoots,
        options: baseEmitOpts,
        host: baseHost,
      });
      normalizeSinglePassFiles(
        baseProg,
        baseEmitOpts,
        abs => inPackagePredicate(abs) && isBaseFilePredicate(abs),
        baseHost,
        dtsFiles,
        rawMetaByFile,
        rawDtsTextByPath,
      );
      sourceProg = baseProg;
    }
    if (headRoots.length > 0) {
      const headEmitOpts = makeEmitOptions(compilerOptions);
      const headProg = ts.createProgram({
        rootNames: headRoots,
        options: headEmitOpts,
        host: baseHost,
        oldProgram: sourceProg,
      });
      normalizeSinglePassFiles(
        headProg,
        headEmitOpts,
        abs => inPackagePredicate(abs) && !isBaseFilePredicate(abs),
        baseHost,
        dtsFiles,
        rawMetaByFile,
        rawDtsTextByPath,
      );
      sourceProg = headProg;
    }
  } else {
    const emitOptions = makeEmitOptions(compilerOptions);
    sourceProg = ts.createProgram({
      rootNames: sourceRootFiles,
      options: emitOptions,
      host: baseHost,
    });
    normalizeSinglePassFiles(
      sourceProg,
      emitOptions,
      inPackagePredicate,
      baseHost,
      dtsFiles,
      rawMetaByFile,
      rawDtsTextByPath,
    );
  }

  // Unwrap ambient `declare module '...'` entrypoint `.d.ts` files (and any relative
  // side-effect `.d.ts` dependencies they lift into `import Root = require('./dep')`),
  // leaving third-party ambient shim `.d.ts` files (`spannerlib-node.d.ts`, etc.) untouched.
  const candidates = entrypointDtsTargets
    ? [...entrypointDtsTargets]
    : sourceRootFiles.map(f => toDtsFileName(path.resolve(f)));
  const processedAmbient = new Set();
  while (candidates.length > 0) {
    const dtsPath = path.resolve(candidates.pop());
    if (processedAmbient.has(dtsPath)) continue;
    processedAmbient.add(dtsPath);
    const rawText = rawDtsTextByPath.get(dtsPath);
    if (rawText === undefined || !rawText.includes('module')) continue;
    const sf = ts.createSourceFile(
      dtsPath,
      rawText,
      ts.ScriptTarget.ES2022,
      true,
    );
    const {text, unwrapped, depSpecifiers} = unwrapAmbientModuleDts(
      sf,
      packageName,
    );
    if (!unwrapped) continue;
    const unwrappedRawSf = ts.createSourceFile(
      dtsPath,
      text,
      ts.ScriptTarget.ES2022,
      true,
    );
    const strippedInternalText = stripInternalFromDts(unwrappedRawSf);
    const unwrappedSf =
      strippedInternalText === text
        ? unwrappedRawSf
        : ts.createSourceFile(
            dtsPath,
            strippedInternalText,
            ts.ScriptTarget.ES2022,
            true,
          );
    rawMetaByFile.set(dtsPath, collectClassAccessibility(unwrappedSf));
    const stripped = stripPrivateMembersFromSourceFile(unwrappedSf);
    dtsFiles.set(dtsPath, stripped.text);

    for (const spec of depSpecifiers) {
      const baseCandidate = path.resolve(path.dirname(dtsPath), spec);
      for (const ext of ['', '.d.ts', '.d.mts', '.d.cts']) {
        const depPath = baseCandidate + ext;
        if (rawDtsTextByPath.has(depPath)) {
          candidates.push(depPath);
        }
      }
    }
  }

  return {dtsFiles, rawMetaByFile, sourceProg};
}
