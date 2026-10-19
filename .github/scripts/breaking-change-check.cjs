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

'use strict';

const {execFileSync} = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const ts = require('typescript');

const IGNORED_SEGMENTS = new Set([
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
  'tools',
]);

/**
 * Returns true if the given repo-relative path should be excluded from
 * public TypeScript API breaking-change checks.
 *
 * @param {string} filePath
 * @returns {boolean}
 */
function isIgnoredSourceFile(filePath) {
  const parts = filePath.split(/[\\/]/).filter(Boolean);
  if (parts[0] === 'packages') return true;
  if (parts.some(seg => IGNORED_SEGMENTS.has(seg))) return true;
  const base = path.basename(filePath);
  return (
    !base.endsWith('.ts') ||
    base.endsWith('.d.ts') ||
    base.endsWith('.test.ts') ||
    base.endsWith('.spec.ts') ||
    base === 'gulpfile.ts' ||
    base === 'webpack.config.ts'
  );
}

const OUTPUT_TYPE_NAME_RE =
  /(?:Response|Result|Output|Reply|Snapshot|Metadata|Receipt|Report|Record|Row|Item|Entry|Event|Diagnostic|Status|State|Info|Error)(?:s|List|Data|Object|Type)?$/;
const INPUT_TYPE_NAME_RE =
  /(?:Options|Opts|Config|Configuration|Request|Params|Parameters|Args|Input|Filter|Query|Settings|Init|Criteria|Callback|Handler)$/;

function isInputNamedType(name) {
  return INPUT_TYPE_NAME_RE.test(name);
}

function isOutputNamedType(name) {
  return OUTPUT_TYPE_NAME_RE.test(name) && !INPUT_TYPE_NAME_RE.test(name);
}

/**
 * Ensures JSDoc `@internal` comments placed on the same line after `{`, `}`, or `;`
 * are on their own line so TypeScript's `stripInternal` compiler option recognizes them.
 *
 * @param {string} src
 * @returns {string}
 */
function normalizeInternalComments(src) {
  return src.replace(
    /([{};])[ \t]*(\/\*\*(?:(?!\*\/)[\s\S])*?@internal\b(?:(?!\*\/)[\s\S])*?\*\/)/g,
    '$1\n$2\n',
  );
}

function isInternalNode(node, sf) {
  return Boolean(
    sf && /@internal\b/.test(sf.text.slice(node.pos, node.getStart(sf))),
  );
}

function getVisibility(node, sf) {
  if (isInternalNode(node, sf)) return 'private';
  if (node.name && ts.isPrivateIdentifier(node.name)) return 'private';
  const mods = ts.canHaveModifiers(node) ? ts.getModifiers(node) : undefined;
  if (!mods) return 'public';
  if (mods.some(m => m.kind === ts.SyntaxKind.PrivateKeyword)) return 'private';
  if (mods.some(m => m.kind === ts.SyntaxKind.ProtectedKeyword)) {
    return 'protected';
  }
  return 'public';
}

function hasModifier(node, kind) {
  const mods = ts.canHaveModifiers(node) ? ts.getModifiers(node) : undefined;
  return Boolean(mods && mods.some(m => m.kind === kind));
}

function getMemberName(member, sf) {
  if (!member.name) return undefined;
  if (
    ts.isIdentifier(member.name) ||
    ts.isStringLiteral(member.name) ||
    ts.isNumericLiteral(member.name)
  ) {
    return member.name.text;
  }
  return member.name.getText(sf);
}

function isValidIdentifier(name) {
  return Boolean(name && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name));
}

function replaceThisInTypeNode(typeNode, selfTypeNode, ctx) {
  const visit = node => {
    if (
      ts.isTypePredicateNode(node) &&
      node.parameterName.kind === ts.SyntaxKind.ThisType
    ) {
      return ts.factory.updateTypePredicateNode(
        node,
        node.assertsModifier,
        node.parameterName,
        node.type ? ts.visitNode(node.type, visit) : undefined,
      );
    }
    if (node.kind === ts.SyntaxKind.ThisType) {
      return selfTypeNode;
    }
    return ts.visitEachChild(node, visit, ctx);
  };
  return ts.visitNode(typeNode, visit);
}

function printNodeWithSelfType(node, sf, selfName, selfTpNames) {
  if (!node) return '';
  const selfTypeNode = ts.factory.createTypeReferenceNode(
    selfName,
    selfTpNames.map(n => ts.factory.createTypeReferenceNode(n, undefined)),
  );
  const res = ts.transform(node, [
    ctx => root => replaceThisInTypeNode(root, selfTypeNode, ctx),
  ]);
  const out = ts
    .createPrinter()
    .printNode(ts.EmitHint.Unspecified, res.transformed[0], sf);
  res.dispose();
  return out;
}

function formatTypeParamWithoutDefault(tp, sf, selfName, selfTpNames) {
  const constraint = tp.constraint
    ? ` extends ${printNodeWithSelfType(tp.constraint, sf, selfName, selfTpNames)}`
    : '';
  return `${tp.name.text}${constraint}`;
}

function collectLocalExportedNames(sf) {
  const exported = new Set();
  for (const stmt of sf.statements) {
    if (isInternalNode(stmt, sf)) continue;
    if (hasModifier(stmt, ts.SyntaxKind.ExportKeyword) && stmt.name) {
      exported.add(stmt.name.text);
    }
    if (
      ts.isExportDeclaration(stmt) &&
      !stmt.moduleSpecifier &&
      stmt.exportClause &&
      ts.isNamedExports(stmt.exportClause)
    ) {
      for (const el of stmt.exportClause.elements) {
        const localName = (el.propertyName || el.name).text;
        exported.add(localName);
      }
    }
  }
  return exported;
}

function buildStructuralEnumLines(stmt, sf, isExported) {
  const eName = stmt.name.text;
  const exp = isExported ? 'export ' : '';
  const unionParts = [];
  const nsLines = [];
  const propLines = [];
  let nextNumericValue = 0;

  for (const m of stmt.members) {
    const mName = getMemberName(m, sf);
    if (!mName) continue;
    let litType = 'number | string';
    if (m.initializer) {
      const initText = m.initializer.getText(sf).trim();
      if (/^-?\d+(?:\.\d+)?$/.test(initText)) {
        litType = initText;
        nextNumericValue = Number(initText) + 1;
      } else if (/^['"`]/.test(initText)) {
        litType = initText;
        nextNumericValue = NaN;
      } else {
        nextNumericValue = NaN;
      }
    } else if (!Number.isNaN(nextNumericValue)) {
      litType = String(nextNumericValue);
      nextNumericValue++;
    }
    unionParts.push(litType);
    const propKey = isValidIdentifier(mName)
      ? mName
      : JSON.stringify(String(mName));
    if (isValidIdentifier(mName)) {
      nsLines.push(`  export type ${mName} = ${litType};`);
    }
    propLines.push(`  readonly ${propKey}: ${litType};`);
  }

  const unionStr = unionParts.length > 0 ? unionParts.join(' | ') : 'never';
  return [
    `${exp}type ${eName} = ${unionStr};`,
    `${exp}declare namespace ${eName} {\n${nsLines.join('\n')}\n}`,
    `${exp}declare const ${eName}: {\n${propLines.join('\n')}\n};`,
  ].join('\n');
}

function typeNodeReferencesAny(typeNode, sf, targetNames) {
  if (!typeNode || targetNames.size === 0) return false;
  let found = false;
  const visit = node => {
    if (found || !node) return;
    if (ts.isTypeReferenceNode(node)) {
      const refName = ts.isIdentifier(node.typeName)
        ? node.typeName.text
        : node.typeName.getText(sf);
      if (targetNames.has(refName)) {
        found = true;
        return;
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(typeNode);
  return found;
}

function collectDtsInfo(sourceText, fileName) {
  const sf = ts.createSourceFile(
    fileName,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
  );
  const localExported = collectLocalExportedNames(sf);
  const classes = new Map();
  const classMeta = new Map();
  const interfaces = new Map();
  const typeParams = new Map();
  const enums = new Map();
  const callableTypes = new Set();
  const directRoles = new Map();
  const typeRefsInDecl = new Map();

  const addRole = (name, role) => {
    if (!directRoles.has(name)) directRoles.set(name, new Set());
    directRoles.get(name).add(role);
  };

  const addDeclRef = (declName, refName) => {
    if (!typeRefsInDecl.has(declName)) typeRefsInDecl.set(declName, new Set());
    typeRefsInDecl.get(declName).add(refName);
  };

  const walkTypeWithPolarity = (typeNode, polarity, enclosingDecl) => {
    if (!typeNode) return;
    const flip = p => (p === 'in' ? 'out' : p === 'out' ? 'in' : null);
    const visit = (node, pol) => {
      if (!node) return;
      if (ts.isTypeReferenceNode(node)) {
        const refName = ts.isIdentifier(node.typeName)
          ? node.typeName.text
          : node.typeName.getText(sf);
        if (pol) addRole(refName, pol);
        if (enclosingDecl) addDeclRef(enclosingDecl, refName);
        if (node.typeArguments) {
          for (const arg of node.typeArguments) visit(arg, pol);
        }
        return;
      }
      if (ts.isFunctionTypeNode(node) || ts.isConstructorTypeNode(node)) {
        for (const p of node.parameters) {
          if (p.type) visit(p.type, flip(pol));
        }
        if (node.type) visit(node.type, pol);
        return;
      }
      if (ts.isTypeLiteralNode(node)) {
        for (const m of node.members) {
          if (
            ts.isCallSignatureDeclaration(m) ||
            ts.isConstructSignatureDeclaration(m) ||
            ts.isMethodSignature(m)
          ) {
            for (const p of m.parameters) {
              if (p.type) visit(p.type, flip(pol));
            }
            if (m.type) visit(m.type, pol);
          } else if (ts.isPropertySignature(m) && m.type) {
            visit(m.type, pol);
          }
        }
        return;
      }
      ts.forEachChild(node, child => visit(child, pol));
    };
    visit(typeNode, polarity);
  };

  const recordTypeParams = (name, tps) => {
    const minArity = tps ? tps.filter(tp => !tp.default).length : 0;
    const maxArity = tps ? tps.length : 0;
    if (!typeParams.has(name)) {
      typeParams.set(name, {minArity, maxArity});
      return;
    }
    const prev = typeParams.get(name);
    if (maxArity > 0) {
      typeParams.set(name, {
        minArity:
          prev.maxArity === 0 ? minArity : Math.min(prev.minArity, minArity),
        maxArity: Math.max(prev.maxArity, maxArity),
      });
    }
  };

  for (const stmt of sf.statements) {
    if (isInternalNode(stmt, sf)) continue;
    const isExported =
      hasModifier(stmt, ts.SyntaxKind.ExportKeyword) ||
      Boolean(stmt.name && localExported.has(stmt.name.text));
    if (ts.isFunctionDeclaration(stmt) && isExported) {
      if (stmt.name) recordTypeParams(stmt.name.text, stmt.typeParameters);
      for (const p of stmt.parameters) {
        if (p.type) walkTypeWithPolarity(p.type, 'in', undefined);
      }
      if (stmt.type) walkTypeWithPolarity(stmt.type, 'out', undefined);
    } else if (ts.isVariableStatement(stmt) && isExported) {
      for (const decl of stmt.declarationList.declarations) {
        if (decl.type) walkTypeWithPolarity(decl.type, 'out', undefined);
      }
    } else if (ts.isEnumDeclaration(stmt) && isExported && stmt.name) {
      const eMap = new Map();
      let nextVal = 0;
      for (const m of stmt.members) {
        const mName = getMemberName(m, sf);
        if (!mName) continue;
        let valText;
        if (m.initializer) {
          valText = m.initializer.getText(sf).trim();
          if (/^-?\d+(?:\.\d+)?$/.test(valText)) {
            nextVal = Number(valText) + 1;
          } else {
            nextVal = NaN;
          }
        } else if (!Number.isNaN(nextVal)) {
          valText = String(nextVal);
          nextVal++;
        }
        eMap.set(mName, valText);
      }
      enums.set(stmt.name.text, eMap);
    } else if (ts.isClassDeclaration(stmt) && isExported && stmt.name) {
      const cName = stmt.name.text;
      recordTypeParams(cName, stmt.typeParameters);
      const isClassAbstract = hasModifier(stmt, ts.SyntaxKind.AbstractKeyword);
      let ctorVisibility = 'public';
      let hasExplicitCtor = false;
      const memberMap = new Map();
      const getters = new Set();
      const setters = new Set();
      for (const m of stmt.members) {
        const vis = getVisibility(m, sf);
        if (ts.isConstructorDeclaration(m)) {
          if (!hasExplicitCtor || vis === 'public') {
            ctorVisibility = vis;
          }
          hasExplicitCtor = true;
          if (vis !== 'private') {
            for (const p of m.parameters) {
              if (p.type) walkTypeWithPolarity(p.type, 'in', undefined);
            }
          }
          continue;
        }
        const mName = getMemberName(m, sf);
        if (!mName) continue;
        const isStatic = hasModifier(m, ts.SyntaxKind.StaticKeyword);
        const isAbstract = hasModifier(m, ts.SyntaxKind.AbstractKeyword);
        const key = `${isStatic ? 'static:' : ''}${mName}`;
        if (ts.isGetAccessorDeclaration(m)) getters.add(key);
        if (ts.isSetAccessorDeclaration(m)) setters.add(key);
        const isReadonly = hasModifier(m, ts.SyntaxKind.ReadonlyKeyword);
        const isOptional = Boolean(m.questionToken);
        const kind = ts.isMethodDeclaration(m) ? 'method' : 'property';
        if (!memberMap.has(key) || vis !== 'private') {
          memberMap.set(key, {
            name: mName,
            key,
            isStatic,
            isAbstract,
            visibility: vis,
            isReadonly,
            isOptional,
            kind,
            hasSetter: setters.has(key),
          });
        } else if (setters.has(key)) {
          memberMap.get(key).hasSetter = true;
        }
        if (vis !== 'private') {
          if (ts.isMethodDeclaration(m) || ts.isSetAccessorDeclaration(m)) {
            for (const p of m.parameters) {
              if (p.type) walkTypeWithPolarity(p.type, 'in', undefined);
            }
          }
          if (
            (ts.isMethodDeclaration(m) ||
              ts.isGetAccessorDeclaration(m) ||
              ts.isPropertyDeclaration(m)) &&
            m.type
          ) {
            walkTypeWithPolarity(m.type, 'out', undefined);
            if (ts.isPropertyDeclaration(m) && !isReadonly) {
              walkTypeWithPolarity(m.type, 'in', undefined);
            }
          }
        }
      }
      for (const [key, info] of memberMap) {
        if (getters.has(key) && !setters.has(key)) {
          info.isReadonly = true;
        }
        if (setters.has(key)) {
          info.hasSetter = true;
        }
      }
      classes.set(cName, memberMap);
      classMeta.set(cName, {
        isAbstract: isClassAbstract,
        ctorVisibility,
        hasExplicitCtor,
      });
    } else if (ts.isInterfaceDeclaration(stmt) && isExported && stmt.name) {
      const iName = stmt.name.text;
      recordTypeParams(iName, stmt.typeParameters);
      if (stmt.heritageClauses) {
        for (const h of stmt.heritageClauses) {
          for (const t of h.types) {
            if (ts.isIdentifier(t.expression)) {
              addDeclRef(iName, t.expression.text);
            }
          }
        }
      }
      const memberMap = new Map();
      let hasCallOrConstruct = false;
      for (const m of stmt.members) {
        if (isInternalNode(m, sf)) continue;
        if (
          ts.isCallSignatureDeclaration(m) ||
          ts.isConstructSignatureDeclaration(m)
        ) {
          hasCallOrConstruct = true;
          for (const p of m.parameters) {
            if (p.type) walkTypeWithPolarity(p.type, 'in', undefined);
          }
          if (m.type) walkTypeWithPolarity(m.type, 'out', undefined);
          continue;
        }
        const mName = getMemberName(m, sf);
        if (!mName) continue;
        const isReadonly = hasModifier(m, ts.SyntaxKind.ReadonlyKeyword);
        const isOptional = Boolean(m.questionToken);
        const kind = ts.isMethodSignature(m) ? 'method' : 'property';
        memberMap.set(mName, {name: mName, isReadonly, isOptional, kind});
        if (ts.isMethodSignature(m)) {
          for (const p of m.parameters) {
            if (p.type) walkTypeWithPolarity(p.type, 'in', undefined);
          }
          if (m.type) walkTypeWithPolarity(m.type, 'out', undefined);
        } else if (ts.isPropertySignature(m) && m.type) {
          walkTypeWithPolarity(m.type, null, iName);
        }
      }
      if (hasCallOrConstruct && memberMap.size === 0) {
        callableTypes.add(iName);
      }
      interfaces.set(iName, memberMap);
    } else if (ts.isTypeAliasDeclaration(stmt) && isExported && stmt.name) {
      const tName = stmt.name.text;
      recordTypeParams(tName, stmt.typeParameters);
      if (
        ts.isFunctionTypeNode(stmt.type) ||
        ts.isConstructorTypeNode(stmt.type)
      ) {
        callableTypes.add(tName);
      } else if (ts.isTypeLiteralNode(stmt.type)) {
        const memberMap = new Map();
        let hasCallOrConstruct = false;
        for (const m of stmt.type.members) {
          if (isInternalNode(m, sf)) continue;
          if (
            ts.isCallSignatureDeclaration(m) ||
            ts.isConstructSignatureDeclaration(m)
          ) {
            hasCallOrConstruct = true;
            continue;
          }
          const mName = getMemberName(m, sf);
          if (!mName) continue;
          const isReadonly = hasModifier(m, ts.SyntaxKind.ReadonlyKeyword);
          const isOptional = Boolean(m.questionToken);
          const kind = ts.isMethodSignature(m) ? 'method' : 'property';
          memberMap.set(mName, {name: mName, isReadonly, isOptional, kind});
        }
        if (hasCallOrConstruct && memberMap.size === 0) {
          callableTypes.add(tName);
        }
        interfaces.set(tName, memberMap);
      }
      walkTypeWithPolarity(stmt.type, null, tName);
    }
  }

  const classNames = new Set(classes.keys());
  return {
    classes,
    classMeta,
    interfaces,
    typeParams,
    enums,
    callableTypes,
    directRoles,
    typeRefsInDecl,
    augmentedText: buildAugmentedDts(sf, localExported, classNames),
  };
}

/**
 * Transforms a `.d.ts` source file by stripping `@internal` and `private`
 * members, normalizing `protected` members and `enum` declarations for
 * structural comparison, and appending synthetic top-level function probes so
 * TypeScript's `TypeChecker` enforces `strictFunctionTypes` contravariance on
 * method/constructor/setter parameters and generic type parameter unification.
 *
 * @param {ts.SourceFile} sf
 * @param {Set<string>} localExported
 * @param {Set<string>} classNames
 * @returns {string}
 */
function buildAugmentedDts(sf, localExported, classNames) {
  const extraLines = [];
  const transformer = ctx => {
    const visit = node => {
      if (ts.isSourceFile(node)) {
        const stmts = node.statements
          .filter(s => !isInternalNode(s, sf) && !ts.isEnumDeclaration(s))
          .map(s => ts.visitNode(s, visit));
        return ts.factory.updateSourceFile(node, stmts);
      }
      if (ts.isModuleBlock(node)) {
        const stmts = node.statements
          .filter(s => !isInternalNode(s, sf))
          .map(s => ts.visitNode(s, visit));
        return ts.factory.updateModuleBlock(node, stmts);
      }
      if (ts.isInterfaceDeclaration(node)) {
        const members = node.members
          .filter(m => !isInternalNode(m, sf))
          .map(m => ts.visitNode(m, visit));
        return ts.factory.updateInterfaceDeclaration(
          node,
          node.modifiers,
          node.name,
          node.typeParameters,
          node.heritageClauses,
          members,
        );
      }
      if (ts.isTypeLiteralNode(node)) {
        const members = node.members
          .filter(m => !isInternalNode(m, sf))
          .map(m => ts.visitNode(m, visit));
        return ts.factory.updateTypeLiteralNode(node, members);
      }
      if (ts.isClassDeclaration(node)) {
        const members = node.members
          .filter(m => getVisibility(m, sf) !== 'private')
          .map(m => {
            const mods = ts.canHaveModifiers(m)
              ? ts.getModifiers(m)
              : undefined;
            if (
              mods &&
              mods.some(mod => mod.kind === ts.SyntaxKind.ProtectedKeyword)
            ) {
              const newMods = mods.filter(
                mod => mod.kind !== ts.SyntaxKind.ProtectedKeyword,
              );
              if (ts.isPropertyDeclaration(m)) {
                return ts.factory.updatePropertyDeclaration(
                  m,
                  newMods,
                  m.name,
                  m.questionToken,
                  m.type,
                  m.initializer,
                );
              }
              if (ts.isMethodDeclaration(m)) {
                return ts.factory.updateMethodDeclaration(
                  m,
                  newMods,
                  m.asteriskToken,
                  m.name,
                  m.questionToken,
                  m.typeParameters,
                  m.parameters,
                  m.type,
                  m.body,
                );
              }
              if (ts.isGetAccessorDeclaration(m)) {
                return ts.factory.updateGetAccessorDeclaration(
                  m,
                  newMods,
                  m.name,
                  m.parameters,
                  m.type,
                  m.body,
                );
              }
              if (ts.isSetAccessorDeclaration(m)) {
                return ts.factory.updateSetAccessorDeclaration(
                  m,
                  newMods,
                  m.name,
                  m.parameters,
                  m.body,
                );
              }
              if (ts.isConstructorDeclaration(m)) {
                return ts.factory.updateConstructorDeclaration(
                  m,
                  newMods,
                  m.parameters,
                  m.body,
                );
              }
            }
            return m;
          });
        return ts.factory.updateClassDeclaration(
          node,
          node.modifiers,
          node.name,
          node.typeParameters,
          node.heritageClauses,
          members,
        );
      }
      return ts.visitEachChild(node, visit, ctx);
    };
    return root => ts.visitNode(root, visit);
  };

  const res = ts.transform(sf, [transformer]);
  let out = ts.createPrinter().printFile(res.transformed[0]);
  res.dispose();

  const emittedFnTpProbes = new Set();

  for (const stmt of sf.statements) {
    if (isInternalNode(stmt, sf)) continue;
    const isExported =
      hasModifier(stmt, ts.SyntaxKind.ExportKeyword) ||
      Boolean(stmt.name && localExported.has(stmt.name.text));
    if (ts.isEnumDeclaration(stmt) && stmt.name) {
      extraLines.push(buildStructuralEnumLines(stmt, sf, isExported));
      continue;
    }
    if (!isExported) continue;
    if (ts.isFunctionDeclaration(stmt) && stmt.name && stmt.typeParameters) {
      const fnName = stmt.name.text;
      const fnTps = stmt.typeParameters;
      const tpNames = fnTps.map(tp => tp.name.text);
      for (let i = 0; i < fnTps.length; i++) {
        const probeKey = `__tp_${fnName}_${i}`;
        if (emittedFnTpProbes.has(probeKey)) continue;
        emittedFnTpProbes.add(probeKey);
        const prefixTps = fnTps
          .map((tp, idx) =>
            idx < i
              ? formatTypeParamWithoutDefault(tp, sf, fnName, tpNames)
              : tp.name.text,
          )
          .join(', ');
        const cText = fnTps[i].constraint
          ? fnTps[i].constraint.getText(sf)
          : 'unknown';
        extraLines.push(
          `export declare function ${probeKey}<${prefixTps}>(__arg: ${cText}): void;`,
        );
      }
    }
    if (
      ts.isInterfaceDeclaration(stmt) ||
      ts.isTypeAliasDeclaration(stmt) ||
      ts.isClassDeclaration(stmt)
    ) {
      if (!stmt.name) continue;
      const name = stmt.name.text;
      const classTps = stmt.typeParameters || [];
      const selfTpNames = classTps.map(tp => tp.name.text);
      const tpDecl =
        classTps.length > 0
          ? '<' +
            classTps
              .map(tp =>
                formatTypeParamWithoutDefault(tp, sf, name, selfTpNames),
              )
              .join(', ') +
            '>'
          : '';
      const tpArgs =
        classTps.length > 0 ? '<' + selfTpNames.join(', ') + '>' : '';
      const selfType = `${name}${tpArgs}`;

      extraLines.push(
        `export declare function __type_in_${name}${tpDecl}(__arg: ${selfType}): void;`,
      );
      extraLines.push(
        `export declare function __type_out_${name}${tpDecl}(): ${selfType};`,
      );
      for (let i = 0; i < classTps.length; i++) {
        const prefixTps = classTps
          .map((tp, idx) =>
            idx < i
              ? formatTypeParamWithoutDefault(tp, sf, name, selfTpNames)
              : tp.name.text,
          )
          .join(', ');
        const cText = classTps[i].constraint
          ? printNodeWithSelfType(classTps[i].constraint, sf, name, selfTpNames)
          : 'unknown';
        extraLines.push(
          `export declare function __tp_${name}_${i}<${prefixTps}>(__arg: ${cText}): void;`,
        );
      }

      const memberNodes =
        ts.isClassDeclaration(stmt) || ts.isInterfaceDeclaration(stmt)
          ? stmt.members
          : ts.isTypeAliasDeclaration(stmt) && ts.isTypeLiteralNode(stmt.type)
            ? stmt.type.members
            : undefined;

      if (memberNodes) {
        let hasExplicitCtor = false;
        let hasPrivateCtor = false;
        const hasExtends = Boolean(
          stmt.heritageClauses &&
          stmt.heritageClauses.some(
            h => h.token === ts.SyntaxKind.ExtendsKeyword,
          ),
        );
        const emittedSetterProbes = new Set();

        for (const m of memberNodes) {
          const vis = getVisibility(m, sf);
          if (ts.isConstructorDeclaration(m)) {
            hasExplicitCtor = true;
            if (vis === 'private') {
              hasPrivateCtor = true;
              continue;
            }
            const params = m.parameters
              .map(p => printNodeWithSelfType(p, sf, name, selfTpNames))
              .join(', ');
            extraLines.push(
              `export declare function __ctor_${name}${tpDecl}(${params}): void;`,
            );
            continue;
          }
          if (vis === 'private') continue;
          const isStatic = hasModifier(m, ts.SyntaxKind.StaticKeyword);
          const activeTpNames = isStatic ? [] : selfTpNames;

          if (
            (ts.isMethodDeclaration(m) || ts.isMethodSignature(m)) &&
            m.name &&
            ts.isIdentifier(m.name) &&
            isValidIdentifier(m.name.text)
          ) {
            const mName = m.name.text;
            const mTps = m.typeParameters || [];
            const mTpNames = new Set(mTps.map(tp => tp.name.text));
            const effClassTps = isStatic
              ? []
              : classTps.filter(tp => !mTpNames.has(tp.name.text));
            const allTps = [...effClassTps, ...mTps];
            const mTpDecl =
              allTps.length > 0
                ? '<' +
                  allTps
                    .map(tp =>
                      formatTypeParamWithoutDefault(
                        tp,
                        sf,
                        name,
                        activeTpNames,
                      ),
                    )
                    .join(', ') +
                  '>'
                : '';
            const paramStrings = m.parameters.map(p =>
              printNodeWithSelfType(p, sf, name, activeTpNames),
            );
            const isThisPred = Boolean(
              m.type &&
              ts.isTypePredicateNode(m.type) &&
              m.type.parameterName.kind === ts.SyntaxKind.ThisType,
            );
            const hasExplicitThisParam =
              m.parameters.length > 0 &&
              ts.isIdentifier(m.parameters[0].name) &&
              m.parameters[0].name.text === 'this';
            if (isThisPred && !hasExplicitThisParam) {
              paramStrings.unshift(
                `this: ${isStatic ? `typeof ${name}` : selfType}`,
              );
            }
            const params = paramStrings.join(', ');
            const ret = m.type
              ? printNodeWithSelfType(m.type, sf, name, activeTpNames)
              : 'any';
            const prefix = isStatic
              ? `__static_${name}_${mName}`
              : `__method_${name}_${mName}`;
            extraLines.push(
              `export declare function ${prefix}${mTpDecl}(${params}): ${ret};`,
            );
          } else if (
            ts.isClassDeclaration(stmt) &&
            ts.isSetAccessorDeclaration(m) &&
            m.name &&
            ts.isIdentifier(m.name) &&
            isValidIdentifier(m.name.text) &&
            m.parameters.length > 0
          ) {
            const mName = m.name.text;
            const propTpDecl = isStatic ? '' : tpDecl;
            const paramText = printNodeWithSelfType(
              m.parameters[0],
              sf,
              name,
              activeTpNames,
            );
            const prefix = isStatic
              ? `__static_set_${name}_${mName}`
              : `__set_${name}_${mName}`;
            emittedSetterProbes.add(prefix);
            extraLines.push(
              `export declare function ${prefix}${propTpDecl}(${paramText}): void;`,
            );
          } else if (
            ts.isClassDeclaration(stmt) &&
            (ts.isPropertyDeclaration(m) || ts.isGetAccessorDeclaration(m)) &&
            (m.type || m.initializer) &&
            m.name &&
            ts.isIdentifier(m.name) &&
            isValidIdentifier(m.name.text)
          ) {
            const mName = m.name.text;
            const propTpDecl = isStatic ? '' : tpDecl;
            const propType = m.type
              ? printNodeWithSelfType(m.type, sf, name, activeTpNames)
              : m.initializer.getText(sf);
            const optSuffix = m.questionToken ? ' | undefined' : '';
            const prefix = isStatic
              ? `__static_prop_${name}_${mName}`
              : `__prop_${name}_${mName}`;
            extraLines.push(
              `export declare function ${prefix}${propTpDecl}(): ${propType}${optSuffix};`,
            );
            const setPrefix = isStatic
              ? `__static_set_${name}_${mName}`
              : `__set_${name}_${mName}`;
            if (
              ts.isPropertyDeclaration(m) &&
              !hasModifier(m, ts.SyntaxKind.ReadonlyKeyword) &&
              m.type &&
              !typeNodeReferencesAny(m.type, sf, classNames) &&
              !emittedSetterProbes.has(setPrefix)
            ) {
              emittedSetterProbes.add(setPrefix);
              extraLines.push(
                `export declare function ${setPrefix}${propTpDecl}(__val: ${propType}${optSuffix}): void;`,
              );
            }
          }
        }
        if (
          ts.isClassDeclaration(stmt) &&
          !hasExplicitCtor &&
          !hasPrivateCtor &&
          !hasExtends
        ) {
          extraLines.push(
            `export declare function __ctor_${name}${tpDecl}(): void;`,
          );
        }
      }
    }
  }

  if (extraLines.length > 0) {
    out += '\n' + extraLines.join('\n') + '\n';
  }
  return out;
}

function resolveAllTypeRoles(infoList) {
  const roles = new Map();
  const refs = new Map();
  for (const info of infoList) {
    for (const [k, set] of info.directRoles) {
      if (!roles.has(k)) roles.set(k, new Set());
      for (const r of set) roles.get(k).add(r);
    }
    for (const [k, set] of info.typeRefsInDecl) {
      if (!refs.has(k)) refs.set(k, new Set());
      for (const r of set) refs.get(k).add(r);
    }
  }
  let changed = true;
  while (changed) {
    changed = false;
    for (const [decl, childSet] of refs) {
      const declRoles = roles.get(decl);
      if (!declRoles) continue;
      for (const child of childSet) {
        if (!roles.has(child)) roles.set(child, new Set());
        const cRoles = roles.get(child);
        for (const r of declRoles) {
          if (!cRoles.has(r)) {
            cRoles.add(r);
            changed = true;
          }
        }
      }
    }
  }
  return roles;
}

function describePropertyBreakages(
  name,
  role,
  p,
  bExp,
  hExp,
  bSf,
  hSf,
  checker,
) {
  const details = [];
  const bDecl = checker.getDeclaredTypeOfSymbol(bExp);
  const hDecl = checker.getDeclaredTypeOfSymbol(hExp);
  if (!bDecl || !hDecl) return details;

  const hasTypeParams = Boolean(
    p.baseInfo.typeParams.get(name)?.maxArity > 0 ||
    (bDecl.typeParameters && bDecl.typeParameters.length > 0) ||
    (bDecl.aliasTypeArguments && bDecl.aliasTypeArguments.length > 0),
  );

  const bProps = new Map(
    checker.getPropertiesOfType(bDecl).map(pr => [pr.getName(), pr]),
  );
  const hProps = new Map(
    checker.getPropertiesOfType(hDecl).map(pr => [pr.getName(), pr]),
  );

  const bIndexInfos = checker.getIndexInfosOfType(bDecl) || [];
  const hIndexInfos = checker.getIndexInfosOfType(hDecl) || [];
  if (bIndexInfos.length > 0 && hIndexInfos.length === 0) {
    details.push(`Index signature was removed from '${name}'.`);
  }

  if (role === 'in') {
    for (const [pName, hProp] of hProps) {
      const hOpt = Boolean(hProp.flags & ts.SymbolFlags.Optional);
      const bProp = bProps.get(pName);
      if (!bProp) {
        if (!hOpt) {
          details.push(
            `Input type '${name}' added required property '${pName}'.`,
          );
        }
        continue;
      }
      const bOpt = Boolean(bProp.flags & ts.SymbolFlags.Optional);
      if (bOpt && !hOpt) {
        details.push(
          `Input type '${name}' optional property '${pName}' was made required.`,
        );
        continue;
      }
      const bPropT = checker.getTypeOfSymbolAtLocation(bProp, bSf);
      const hPropT = checker.getTypeOfSymbolAtLocation(hProp, hSf);
      if (!hasTypeParams && !checker.isTypeAssignableTo(bPropT, hPropT)) {
        details.push(
          `Input type '${name}' property '${pName}' was narrowed from '${checker.typeToString(bPropT)}' to '${checker.typeToString(hPropT)}'.`,
        );
      }
    }
  } else if (role === 'out') {
    for (const [pName, bProp] of bProps) {
      const hProp = hProps.get(pName);
      if (!hProp) continue;
      const bOpt = Boolean(bProp.flags & ts.SymbolFlags.Optional);
      const hOpt = Boolean(hProp.flags & ts.SymbolFlags.Optional);
      if (!bOpt && hOpt) {
        details.push(
          `Return type '${name}' required property '${pName}' was made optional.`,
        );
        continue;
      }
      const bPropT = checker.getTypeOfSymbolAtLocation(bProp, bSf);
      const hPropT = checker.getTypeOfSymbolAtLocation(hProp, hSf);
      if (!hasTypeParams && !checker.isTypeAssignableTo(hPropT, bPropT)) {
        details.push(
          `Return type '${name}' property '${pName}' was widened from '${checker.typeToString(bPropT)}' to '${checker.typeToString(hPropT)}'.`,
        );
      }
    }
  }
  return details;
}

function getDeclarationTextMap(dtsText) {
  const sf = ts.createSourceFile(
    'decl.d.ts',
    dtsText,
    ts.ScriptTarget.Latest,
    true,
  );
  const map = new Map();
  for (const stmt of sf.statements) {
    if (
      (ts.isInterfaceDeclaration(stmt) || ts.isTypeAliasDeclaration(stmt)) &&
      stmt.name
    ) {
      map.set(stmt.name.text, stmt.getText(sf));
    }
  }
  return map;
}

function replaceTypeDeclarationsWithBase(baseDts, headDts, namesToReplace) {
  const baseDeclMap = getDeclarationTextMap(baseDts);
  const headSf = ts.createSourceFile(
    'head.d.ts',
    headDts,
    ts.ScriptTarget.Latest,
    true,
  );
  const replacements = [];
  for (const stmt of headSf.statements) {
    if (
      (ts.isInterfaceDeclaration(stmt) || ts.isTypeAliasDeclaration(stmt)) &&
      stmt.name &&
      namesToReplace.has(stmt.name.text) &&
      baseDeclMap.has(stmt.name.text)
    ) {
      replacements.push({
        start: stmt.getStart(headSf),
        end: stmt.getEnd(),
        text: baseDeclMap.get(stmt.name.text),
      });
    }
  }
  let out = headDts;
  for (let i = replacements.length - 1; i >= 0; i--) {
    const r = replacements[i];
    out = out.slice(0, r.start) + r.text + out.slice(r.end);
  }
  return out;
}

const DEFAULT_SF_CACHE = new Map();

function getEffectiveRoles(name, allRoles) {
  const roles = allRoles.get(name);
  if (roles && roles.size === 1) {
    return roles;
  }
  if (isInputNamedType(name)) {
    return new Set(['in']);
  }
  if (isOutputNamedType(name)) {
    return new Set(['out']);
  }
  if (!roles || roles.size === 0) {
    return new Set(['in']);
  }
  return roles;
}

function stripVirtualSegment(filePath) {
  const resolved = path.resolve(filePath);
  if (
    resolved.endsWith('.d.ts') ||
    resolved.endsWith('.d.mts') ||
    resolved.endsWith('.d.cts') ||
    resolved.endsWith('.json')
  ) {
    return resolved.replace(/[/\\]__(?:base|head)__(?=[/\\]|$)/, '');
  }
  return resolved;
}

function stripVirtualDirSegment(dirPath) {
  return path.resolve(dirPath).replace(/[/\\]__(?:base|head)__(?=[/\\]|$)/, '');
}

/**
 * Compares paired Base (`HEAD^1`) and Head (`HEAD`) `.d.ts` declarations
 * using TypeScript's `TypeChecker` (`isTypeAssignableTo`) with `strictFunctionTypes`.
 *
 * @param {Array<{
 *   reportFile: string,
 *   basePath: string,
 *   headPath: string,
 *   baseDts: string,
 *   headDts: string,
 *   checkExports: boolean
 * }>} pairs
 * @param {ts.CompilerOptions} [compilerOptions]
 * @param {Map<string, ts.SourceFile | undefined>} [sharedSfCache]
 * @returns {Array<{file: string, explanation: string}>}
 */
function compareDeclarationPairs(
  pairs,
  compilerOptions = {},
  sharedSfCache = DEFAULT_SF_CACHE,
) {
  const virtualFiles = new Map();
  const virtualDirs = new Set();
  const rootDir = process.cwd();
  const addVirtual = (filePath, text) => {
    const abs = path.resolve(filePath);
    virtualFiles.set(abs, text);
    let d = path.dirname(abs);
    while (d.length >= rootDir.length) {
      virtualDirs.add(d);
      const p = path.dirname(d);
      if (p === d) break;
      d = p;
    }
  };

  const prepared = [];
  for (const pair of pairs) {
    const baseInfo = collectDtsInfo(pair.baseDts, pair.basePath);
    const headInfo = collectDtsInfo(pair.headDts, pair.headPath);
    addVirtual(pair.basePath, baseInfo.augmentedText);
    addVirtual(pair.headPath, headInfo.augmentedText);
    prepared.push({...pair, baseInfo, headInfo, checkedInputTypes: new Set()});
  }

  const checkOpts = {
    ...compilerOptions,
    strict: true,
    strictFunctionTypes: true,
    strictNullChecks: true,
    target: ts.ScriptTarget.ES2022,
  };
  const host = ts.createCompilerHost(checkOpts);
  const origGetSf = host.getSourceFile.bind(host);
  const tmpRoot = os.tmpdir() + path.sep;
  host.getSourceFile = (f, l) => {
    const abs = path.resolve(f);
    if (virtualFiles.has(abs)) {
      return ts.createSourceFile(abs, virtualFiles.get(abs), l, true);
    }
    const diskAbs = stripVirtualSegment(abs);
    if (!diskAbs.startsWith(tmpRoot) && sharedSfCache.has(diskAbs)) {
      return sharedSfCache.get(diskAbs);
    }
    const sf = origGetSf(diskAbs, l);
    if (!diskAbs.startsWith(tmpRoot)) {
      sharedSfCache.set(diskAbs, sf);
    }
    return sf;
  };
  host.fileExists = f => {
    const abs = path.resolve(f);
    return virtualFiles.has(abs) || ts.sys.fileExists(stripVirtualSegment(abs));
  };
  host.directoryExists = d => {
    const abs = path.resolve(d);
    return (
      virtualDirs.has(abs) ||
      ts.sys.directoryExists(stripVirtualDirSegment(abs))
    );
  };
  host.readFile = f => {
    const abs = path.resolve(f);
    return virtualFiles.has(abs)
      ? virtualFiles.get(abs)
      : ts.sys.readFile(stripVirtualSegment(abs));
  };

  const rootFiles = [];
  for (const p of prepared) {
    rootFiles.push(path.resolve(p.basePath), path.resolve(p.headPath));
  }
  let prog = ts.createProgram(rootFiles, checkOpts, host);
  let checker = prog.getTypeChecker();

  const allRoles = resolveAllTypeRoles(
    prepared.flatMap(p => [p.baseInfo, p.headInfo]),
  );

  const breaking = [];
  const seen = new Set();
  const record = (file, explanation) => {
    const key = `${file}::${explanation}`;
    if (!seen.has(key)) {
      seen.add(key);
      breaking.push({file, explanation});
    }
  };

  const isProbeName = name =>
    name.startsWith('__type_in_') ||
    name.startsWith('__type_out_') ||
    name.startsWith('__tp_') ||
    name.startsWith('__ctor_') ||
    name.startsWith('__method_') ||
    name.startsWith('__static_') ||
    name.startsWith('__prop_') ||
    name.startsWith('__static_prop_') ||
    name.startsWith('__set_') ||
    name.startsWith('__static_set_');

  const checkTypeParamCompatibility = (p, name, checkProbeAssignable) => {
    if (!p.baseInfo.typeParams.has(name) || !p.headInfo.typeParams.has(name)) {
      return;
    }
    const bTp = p.baseInfo.typeParams.get(name);
    const hTp = p.headInfo.typeParams.get(name);
    if (hTp.minArity > bTp.minArity || hTp.maxArity < bTp.maxArity) {
      record(
        p.reportFile,
        `Type parameter arity of '${name}' changed incompatibly (was ${bTp.minArity}..${bTp.maxArity}, now ${hTp.minArity}..${hTp.maxArity}).`,
      );
    }
    const checkCount = Math.min(bTp.maxArity, hTp.maxArity);
    for (let i = 0; i < checkCount; i++) {
      checkProbeAssignable(
        `__tp_${name}_${i}`,
        `Type parameter constraint on '${name}' became more restrictive`,
      );
    }
  };

  const checkInterfaceMembers = (p, name, roles, checkProbeAssignable) => {
    let hadMemberError = false;
    if (p.baseInfo.interfaces.has(name) && p.headInfo.interfaces.has(name)) {
      const bMembers = p.baseInfo.interfaces.get(name);
      const hMembers = p.headInfo.interfaces.get(name);
      for (const [mName, bM] of bMembers) {
        const hM = hMembers.get(mName);
        if (!hM) {
          record(
            p.reportFile,
            `Property or method '${mName}' was removed from '${name}'.`,
          );
          hadMemberError = true;
          continue;
        }
        if (roles.has('in') && bM.isOptional && !hM.isOptional) {
          record(
            p.reportFile,
            `Input type '${name}' optional ${bM.kind} '${mName}' was made required.`,
          );
          hadMemberError = true;
        }
        if (roles.has('out') && !bM.isOptional && hM.isOptional) {
          record(
            p.reportFile,
            `Return type '${name}' required ${bM.kind} '${mName}' was made optional.`,
          );
          hadMemberError = true;
        }
        if (bM.kind === 'method' && isValidIdentifier(mName)) {
          const ok = checkProbeAssignable(
            `__method_${name}_${mName}`,
            `Method '${name}.${mName}' signature changed incompatibly`,
          );
          if (!ok) hadMemberError = true;
        }
      }
    }
    return hadMemberError;
  };

  // Pass 1: Evaluate modified input-only interfaces/type aliases and normalize their
  // declarations in Head before checking classes/functions that echo them.
  let normalizedAnyInput = false;
  for (const p of prepared) {
    if (!p.checkExports || p.baseDts === p.headDts) continue;
    const baseDeclMap = getDeclarationTextMap(p.baseDts);
    const headDeclMap = getDeclarationTextMap(p.headDts);
    const file = p.reportFile;
    const bSf = prog.getSourceFile(path.resolve(p.basePath));
    const hSf = prog.getSourceFile(path.resolve(p.headPath));
    if (!bSf || !hSf) continue;
    const bSym = checker.getSymbolAtLocation(bSf);
    const hSym = checker.getSymbolAtLocation(hSf);
    if (!bSym || !hSym) continue;
    const bExports = new Map(
      checker.getExportsOfModule(bSym).map(s => [s.getName(), s]),
    );
    const hExports = new Map(
      checker.getExportsOfModule(hSym).map(s => [s.getName(), s]),
    );
    const checkProbeAssignable = (probeName, label) => {
      const bProbe = bExports.get(probeName);
      const hProbe = hExports.get(probeName);
      if (!bProbe || !hProbe) return true;
      const bT = checker.getTypeOfSymbolAtLocation(bProbe, bSf);
      const hT = checker.getTypeOfSymbolAtLocation(hProbe, hSf);
      if (!checker.isTypeAssignableTo(hT, bT)) {
        if (label) {
          record(
            file,
            `${label} (${checker.typeToString(bT)} -> ${checker.typeToString(hT)}).`,
          );
        }
        return false;
      }
      return true;
    };

    const inputsToNormalize = new Set();
    for (const [name, bExp] of bExports) {
      if (isProbeName(name)) continue;
      if (bExp.flags & ts.SymbolFlags.Value) continue;
      if (!(bExp.flags & ts.SymbolFlags.Type)) continue;
      if (p.baseInfo.classes.has(name) || p.baseInfo.enums.has(name)) continue;
      if (
        p.baseInfo.callableTypes.has(name) ||
        p.headInfo.callableTypes.has(name)
      ) {
        continue;
      }
      if (
        !baseDeclMap.has(name) ||
        !headDeclMap.has(name) ||
        baseDeclMap.get(name) === headDeclMap.get(name)
      ) {
        continue;
      }
      const hExp = hExports.get(name);
      if (!hExp || !(hExp.flags & ts.SymbolFlags.Type)) continue;
      const roles = getEffectiveRoles(name, allRoles);
      if (!roles.has('in') || roles.has('out')) continue;

      p.checkedInputTypes.add(name);
      checkTypeParamCompatibility(p, name, checkProbeAssignable);
      const hadMemberError = checkInterfaceMembers(
        p,
        name,
        roles,
        checkProbeAssignable,
      );
      const inOk = checkProbeAssignable(`__type_in_${name}`, '');
      const propDetails = describePropertyBreakages(
        name,
        'in',
        p,
        bExp,
        hExp,
        bSf,
        hSf,
        checker,
      );
      if (propDetails.length > 0) {
        for (const d of propDetails) record(file, d);
      } else if (!inOk && !hadMemberError) {
        record(file, `Input type '${name}' became more restrictive.`);
      }
      const outOk = checkProbeAssignable(`__type_out_${name}`, '');
      if (!inOk || !outOk || hadMemberError || propDetails.length > 0) {
        inputsToNormalize.add(name);
      }
    }

    if (inputsToNormalize.size > 0) {
      const normalizedHeadDts = replaceTypeDeclarationsWithBase(
        p.baseDts,
        p.headDts,
        inputsToNormalize,
      );
      if (normalizedHeadDts !== p.headDts) {
        p.headDts = normalizedHeadDts;
        p.headInfo = collectDtsInfo(p.headDts, p.headPath);
        addVirtual(p.headPath, p.headInfo.augmentedText);
        normalizedAnyInput = true;
      }
    }
  }

  if (normalizedAnyInput) {
    prog = ts.createProgram(rootFiles, checkOpts, host, prog);
    checker = prog.getTypeChecker();
  }

  // Pass 2: Check all exports (functions, classes, variables, enums, output/callable types).
  for (const p of prepared) {
    if (!p.checkExports) continue;
    const file = p.reportFile;
    const bSf = prog.getSourceFile(path.resolve(p.basePath));
    const hSf = prog.getSourceFile(path.resolve(p.headPath));
    if (!bSf || !hSf) continue;
    const bSym = checker.getSymbolAtLocation(bSf);
    const hSym = checker.getSymbolAtLocation(hSf);
    if (!bSym) continue;
    const bExports = new Map(
      checker.getExportsOfModule(bSym).map(s => [s.getName(), s]),
    );
    const hExports = hSym
      ? new Map(checker.getExportsOfModule(hSym).map(s => [s.getName(), s]))
      : new Map();

    const checkProbeAssignable = (probeName, label) => {
      const bProbe = bExports.get(probeName);
      const hProbe = hExports.get(probeName);
      if (!bProbe) return true;
      if (!hProbe) {
        if (label) {
          record(file, `${label}.`);
        }
        return false;
      }
      const bT = checker.getTypeOfSymbolAtLocation(bProbe, bSf);
      const hT = checker.getTypeOfSymbolAtLocation(hProbe, hSf);
      if (!checker.isTypeAssignableTo(hT, bT)) {
        if (label) {
          record(
            file,
            `${label} (${checker.typeToString(bT)} -> ${checker.typeToString(hT)}).`,
          );
        }
        return false;
      }
      return true;
    };

    for (const [name, bExp] of bExports) {
      if (isProbeName(name)) continue;
      if (p.checkedInputTypes.has(name)) continue;
      const hExp = hExports.get(name);
      if (!hExp) {
        record(file, `Export '${name}' was removed.`);
        continue;
      }

      const bResolved =
        bExp.flags & ts.SymbolFlags.Alias
          ? checker.getAliasedSymbol(bExp)
          : bExp;
      const hResolved =
        hExp.flags & ts.SymbolFlags.Alias
          ? checker.getAliasedSymbol(hExp)
          : hExp;

      checkTypeParamCompatibility(p, name, checkProbeAssignable);

      if (p.baseInfo.enums.has(name)) {
        const bEnum = p.baseInfo.enums.get(name);
        const hEnum = p.headInfo.enums.get(name);
        if (!hEnum) {
          record(file, `Enum '${name}' was changed to a non-enum declaration.`);
          continue;
        }
        for (const [mName, bInit] of bEnum) {
          if (!hEnum.has(mName)) {
            record(file, `Member '${mName}' was removed from enum '${name}'.`);
          } else if (bInit !== undefined && hEnum.get(mName) !== bInit) {
            record(
              file,
              `Enum member '${name}.${mName}' value changed from ${bInit} to ${hEnum.get(mName)}.`,
            );
          }
        }
        continue;
      }

      if (p.baseInfo.classes.has(name)) {
        if (!p.headInfo.classes.has(name)) {
          record(
            file,
            `Class '${name}' was changed to a non-class declaration.`,
          );
          continue;
        }
        const bMeta = p.baseInfo.classMeta.get(name);
        const hMeta = p.headInfo.classMeta.get(name);
        let hadClassMemberError = false;
        if (bMeta && hMeta) {
          if (!bMeta.isAbstract && hMeta.isAbstract) {
            record(file, `Class '${name}' was made abstract.`);
            hadClassMemberError = true;
          }
          if (
            bMeta.ctorVisibility === 'public' &&
            hMeta.ctorVisibility !== 'public'
          ) {
            record(
              file,
              `Constructor of class '${name}' visibility was restricted from 'public' to '${hMeta.ctorVisibility}'.`,
            );
            hadClassMemberError = true;
          } else if (
            bMeta.ctorVisibility === 'protected' &&
            hMeta.ctorVisibility === 'private'
          ) {
            record(
              file,
              `Constructor of class '${name}' visibility was restricted from 'protected' to 'private'.`,
            );
            hadClassMemberError = true;
          }
        }
        const bMembers = p.baseInfo.classes.get(name);
        const hMembers = p.headInfo.classes.get(name) || new Map();
        for (const [key, bM] of bMembers) {
          if (bM.visibility === 'private') continue;
          const hM = hMembers.get(key);
          if (!hM) {
            record(
              file,
              `Member '${bM.name}' was removed from class '${name}'.`,
            );
            hadClassMemberError = true;
            continue;
          }
          if (bM.visibility === 'public' && hM.visibility !== 'public') {
            record(
              file,
              `Member '${name}.${bM.name}' visibility was restricted from 'public' to '${hM.visibility}'.`,
            );
            hadClassMemberError = true;
            continue;
          }
          if (bM.visibility === 'protected' && hM.visibility === 'private') {
            record(
              file,
              `Member '${name}.${bM.name}' visibility was restricted from 'protected' to 'private'.`,
            );
            hadClassMemberError = true;
            continue;
          }
          if (!bM.isAbstract && hM.isAbstract) {
            record(file, `Member '${name}.${bM.name}' was made abstract.`);
            hadClassMemberError = true;
          }
          if (!bM.isReadonly && hM.isReadonly) {
            record(file, `Member '${name}.${bM.name}' was made readonly.`);
            hadClassMemberError = true;
          }
          if (!bM.isOptional && hM.isOptional) {
            record(file, `Member '${name}.${bM.name}' was made optional.`);
            hadClassMemberError = true;
          }
          if (bM.kind === 'method' && isValidIdentifier(bM.name)) {
            const prefix = bM.isStatic
              ? `__static_${name}_${bM.name}`
              : `__method_${name}_${bM.name}`;
            const ok = checkProbeAssignable(
              prefix,
              `Method '${name}.${bM.name}' signature changed incompatibly`,
            );
            if (!ok) hadClassMemberError = true;
          } else if (bM.kind === 'property' && isValidIdentifier(bM.name)) {
            const propPrefix = bM.isStatic
              ? `__static_prop_${name}_${bM.name}`
              : `__prop_${name}_${bM.name}`;
            const propOk = checkProbeAssignable(
              propPrefix,
              `Property '${name}.${bM.name}' type changed incompatibly`,
            );
            if (!propOk) hadClassMemberError = true;

            const setPrefix = bM.isStatic
              ? `__static_set_${name}_${bM.name}`
              : `__set_${name}_${bM.name}`;
            if (bExports.has(setPrefix)) {
              const setOk = checkProbeAssignable(
                setPrefix,
                `Property or setter '${name}.${bM.name}' write type was narrowed`,
              );
              if (!setOk) hadClassMemberError = true;
            }
          }
        }
        if (
          bMeta?.ctorVisibility !== 'private' &&
          hMeta?.ctorVisibility !== 'private'
        ) {
          const ctorOk = checkProbeAssignable(
            `__ctor_${name}`,
            `Constructor of class '${name}' changed incompatibly`,
          );
          if (!ctorOk) hadClassMemberError = true;
        }
        if (!hadClassMemberError) {
          checkProbeAssignable(
            `__type_out_${name}`,
            `Class '${name}' instance type is not assignable to base type`,
          );
          const bVal = checker.getTypeOfSymbolAtLocation(bExp, bSf);
          const hVal = checker.getTypeOfSymbolAtLocation(hExp, hSf);
          if (!checker.isTypeAssignableTo(hVal, bVal)) {
            record(
              file,
              `Class '${name}' static type is not assignable to base type.`,
            );
          }
        }
        continue;
      }

      if (bResolved.flags & ts.SymbolFlags.Value) {
        if (!(hResolved.flags & ts.SymbolFlags.Value)) {
          record(
            file,
            `Value export '${name}' was replaced by a type-only export.`,
          );
        } else {
          const bVal = checker.getTypeOfSymbolAtLocation(bExp, bSf);
          const hVal = checker.getTypeOfSymbolAtLocation(hExp, hSf);
          if (!checker.isTypeAssignableTo(hVal, bVal)) {
            record(
              file,
              `Export '${name}' signature or type changed incompatibly (${checker.typeToString(bVal)} -> ${checker.typeToString(hVal)}).`,
            );
          }
        }
      }

      if (bResolved.flags & ts.SymbolFlags.Type) {
        if (!(hResolved.flags & ts.SymbolFlags.Type)) {
          record(
            file,
            `Type export '${name}' was replaced by a value-only export.`,
          );
          continue;
        }
        const roles = getEffectiveRoles(name, allRoles);
        const hadMemberError = checkInterfaceMembers(
          p,
          name,
          roles,
          checkProbeAssignable,
        );

        const isCallable =
          p.baseInfo.callableTypes.has(name) ||
          p.headInfo.callableTypes.has(name);
        if (isCallable) {
          checkProbeAssignable(
            `__type_out_${name}`,
            `Callable type '${name}' changed incompatibly`,
          );
          continue;
        }

        if (roles.has('in')) {
          const hasProbe =
            bExports.has(`__type_in_${name}`) &&
            hExports.has(`__type_in_${name}`);
          let inOk = true;
          if (hasProbe) {
            inOk = checkProbeAssignable(`__type_in_${name}`, '');
          } else {
            const bDecl = checker.getDeclaredTypeOfSymbol(bExp);
            const hDecl = checker.getDeclaredTypeOfSymbol(hExp);
            if (bDecl && hDecl) {
              inOk = checker.isTypeAssignableTo(bDecl, hDecl);
            }
          }
          const propDetails = describePropertyBreakages(
            name,
            'in',
            p,
            bExp,
            hExp,
            bSf,
            hSf,
            checker,
          );
          if (propDetails.length > 0) {
            for (const d of propDetails) record(file, d);
          } else if (!inOk && !hadMemberError) {
            record(file, `Input type '${name}' became more restrictive.`);
          }
        }
        if (roles.has('out')) {
          const hasProbe =
            bExports.has(`__type_out_${name}`) &&
            hExports.has(`__type_out_${name}`);
          let outOk = true;
          if (hasProbe) {
            outOk = checkProbeAssignable(`__type_out_${name}`, '');
          } else {
            const bDecl = checker.getDeclaredTypeOfSymbol(bExp);
            const hDecl = checker.getDeclaredTypeOfSymbol(hExp);
            if (bDecl && hDecl) {
              outOk = checker.isTypeAssignableTo(hDecl, bDecl);
            }
          }
          const propDetails = describePropertyBreakages(
            name,
            'out',
            p,
            bExp,
            hExp,
            bSf,
            hSf,
            checker,
          );
          if (propDetails.length > 0) {
            for (const d of propDetails) record(file, d);
          } else if (!outOk && !hadMemberError) {
            record(file, `Return type '${name}' became less restrictive.`);
          }
        }
      }
    }
  }

  return breaking;
}

/**
 * Compiles a package at Base and Head in-memory using its `tsconfig.json`
 * (with `stripInternal: true` and full cross-file type inference) and checks
 * all emitted `.d.ts` declarations for breaking changes.
 *
 * @param {{
 *   pkgDir: string,
 *   repoRoot?: string,
 *   modifiedEntries: Array<{
 *     status: string,
 *     oldRel: string,
 *     newRel: string,
 *     oldAbs: string,
 *     newAbs: string
 *   }>,
 *   baseFileReader: (relPath: string, absPath: string) => string | undefined,
 *   headFileReader: (relPath: string, absPath: string) => string | undefined,
 *   sharedSfCache?: Map<string, ts.SourceFile | undefined>
 * }} options
 * @returns {Array<{file: string, explanation: string}>}
 */
function checkPackageChanges({
  pkgDir,
  repoRoot = process.cwd(),
  modifiedEntries,
  baseFileReader,
  headFileReader,
  sharedSfCache = DEFAULT_SF_CACHE,
}) {
  const tsconfigPath = path.join(pkgDir, 'tsconfig.json');
  const cfgFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
  const parsed = ts.parseJsonConfigFileContent(cfgFile.config, ts.sys, pkgDir);
  const baseSrcFiles = parsed.fileNames.filter(
    f =>
      path.resolve(f).startsWith(pkgDir + path.sep) &&
      !isIgnoredSourceFile(path.relative(repoRoot, f)),
  );
  const fileSet = new Set(baseSrcFiles.map(f => path.resolve(f)));
  for (const e of modifiedEntries) {
    if (e.oldAbs && e.oldAbs.startsWith(pkgDir + path.sep)) {
      fileSet.add(e.oldAbs);
    }
    if (e.newAbs && e.newAbs.startsWith(pkgDir + path.sep)) {
      fileSet.add(e.newAbs);
    }
  }
  const allCandidateFiles = Array.from(fileSet);

  const emitOpts = {
    ...parsed.options,
    rootDir: pkgDir,
    outDir: path.join(pkgDir, 'build'),
    declarationDir: undefined,
    declaration: true,
    emitDeclarationOnly: true,
    noEmit: false,
    noEmitOnError: false,
    stripInternal: true,
    incremental: false,
    composite: false,
  };

  const baseOverrides = new Map();
  const baseDeleted = new Set();
  const headOverrides = new Map();
  const headDeleted = new Set();
  const deletedBreakages = [];

  for (const e of modifiedEntries) {
    if (e.status.startsWith('D')) {
      headDeleted.add(e.oldAbs);
      deletedBreakages.push({
        file: e.oldRel,
        explanation: 'Public source file was deleted.',
      });
      const bTxt = baseFileReader(e.oldRel, e.oldAbs);
      if (bTxt !== undefined) {
        baseOverrides.set(
          e.oldAbs,
          ts.createSourceFile(
            e.oldAbs,
            normalizeInternalComments(bTxt),
            ts.ScriptTarget.Latest,
            true,
          ),
        );
      }
    } else if (e.status.startsWith('A')) {
      baseDeleted.add(e.newAbs);
      const hTxt = headFileReader(e.newRel, e.newAbs);
      if (hTxt !== undefined) {
        headOverrides.set(
          e.newAbs,
          ts.createSourceFile(
            e.newAbs,
            normalizeInternalComments(hTxt),
            ts.ScriptTarget.Latest,
            true,
          ),
        );
      }
    } else if (e.status.startsWith('R')) {
      baseDeleted.add(e.newAbs);
      headDeleted.add(e.oldAbs);
      const bTxt = baseFileReader(e.oldRel, e.oldAbs);
      if (bTxt !== undefined) {
        baseOverrides.set(
          e.oldAbs,
          ts.createSourceFile(
            e.oldAbs,
            normalizeInternalComments(bTxt),
            ts.ScriptTarget.Latest,
            true,
          ),
        );
      }
      const hTxt = headFileReader(e.newRel, e.newAbs);
      if (hTxt !== undefined) {
        headOverrides.set(
          e.newAbs,
          ts.createSourceFile(
            e.newAbs,
            normalizeInternalComments(hTxt),
            ts.ScriptTarget.Latest,
            true,
          ),
        );
      }
    } else {
      const bTxt = baseFileReader(e.oldRel, e.oldAbs);
      if (bTxt !== undefined) {
        baseOverrides.set(
          e.oldAbs,
          ts.createSourceFile(
            e.oldAbs,
            normalizeInternalComments(bTxt),
            ts.ScriptTarget.Latest,
            true,
          ),
        );
      }
      const hTxt = headFileReader(e.newRel, e.newAbs);
      if (hTxt !== undefined) {
        headOverrides.set(
          e.newAbs,
          ts.createSourceFile(
            e.newAbs,
            normalizeInternalComments(hTxt),
            ts.ScriptTarget.Latest,
            true,
          ),
        );
      }
    }
  }

  const tmpRoot = os.tmpdir() + path.sep;
  const getDiskSf = (abs, l) => {
    if (abs.startsWith(tmpRoot)) {
      const raw = ts.sys.readFile(abs);
      if (raw === undefined) return undefined;
      const txt = abs.startsWith(pkgDir + path.sep)
        ? normalizeInternalComments(raw)
        : raw;
      return ts.createSourceFile(abs, txt, l, true);
    }
    if (!sharedSfCache.has(abs)) {
      const raw = ts.sys.readFile(abs);
      const txt =
        raw !== undefined && abs.startsWith(pkgDir + path.sep)
          ? normalizeInternalComments(raw)
          : raw;
      sharedSfCache.set(
        abs,
        txt !== undefined ? ts.createSourceFile(abs, txt, l, true) : undefined,
      );
    }
    return sharedSfCache.get(abs);
  };

  const makeOverlayHost = (overrides, deleted) => {
    const host = ts.createCompilerHost(emitOpts);
    host.getSourceFile = (f, l) => {
      const abs = path.resolve(f);
      if (deleted.has(abs)) return undefined;
      if (overrides.has(abs)) return overrides.get(abs);
      return getDiskSf(abs, l);
    };
    host.fileExists = f => {
      const abs = path.resolve(f);
      if (deleted.has(abs)) return false;
      if (overrides.has(abs)) return true;
      return ts.sys.fileExists(f);
    };
    return host;
  };

  const baseRootFiles = allCandidateFiles.filter(f => !baseDeleted.has(f));
  const headRootFiles = allCandidateFiles.filter(f => !headDeleted.has(f));

  const baseProg = ts.createProgram(
    baseRootFiles,
    emitOpts,
    makeOverlayHost(baseOverrides, baseDeleted),
  );
  const headProg = ts.createProgram(
    headRootFiles,
    emitOpts,
    makeOverlayHost(headOverrides, headDeleted),
    baseProg,
  );

  const baseEmitted = new Map();
  const headEmitted = new Map();
  const buildDir = path.join(pkgDir, 'build');
  baseProg.emit(
    undefined,
    (fileName, text) => {
      if (fileName.endsWith('.d.ts')) {
        baseEmitted.set(path.relative(buildDir, fileName), text);
      }
    },
    undefined,
    true,
  );
  headProg.emit(
    undefined,
    (fileName, text) => {
      if (fileName.endsWith('.d.ts')) {
        headEmitted.set(path.relative(buildDir, fileName), text);
      }
    },
    undefined,
    true,
  );

  const modifiedMap = new Map();
  for (const e of modifiedEntries) {
    if (e.status.startsWith('A') || e.status.startsWith('D')) continue;
    const oldDtsRel = path.relative(pkgDir, e.oldAbs).replace(/\.ts$/, '.d.ts');
    const newDtsRel = path.relative(pkgDir, e.newAbs).replace(/\.ts$/, '.d.ts');
    modifiedMap.set(oldDtsRel, {newDtsRel, reportFile: e.newRel});
  }

  const allDtsRels = new Set([...baseEmitted.keys(), ...headEmitted.keys()]);
  const pairs = [];
  for (const bRel of allDtsRels) {
    const modEntry = modifiedMap.get(bRel);
    const hRel = modEntry ? modEntry.newDtsRel : bRel;
    const baseDts = baseEmitted.get(bRel);
    const headDts = headEmitted.get(hRel);
    if (baseDts === undefined || headDts === undefined) continue;
    const isEntrypoint = bRel === 'src/index.d.ts' || bRel === 'index.d.ts';
    const dtsChanged = baseDts !== headDts;
    const checkExports = Boolean(modEntry || isEntrypoint || dtsChanged);
    const defaultReportFile = path
      .relative(repoRoot, path.join(pkgDir, hRel.replace(/\.d\.ts$/, '.ts')))
      .split(path.sep)
      .join('/');
    pairs.push({
      reportFile: modEntry ? modEntry.reportFile : defaultReportFile,
      basePath: path.join(pkgDir, '__base__', bRel),
      headPath: path.join(pkgDir, '__head__', hRel),
      baseDts,
      headDts,
      checkExports,
    });
  }

  return [
    ...deletedBreakages,
    ...compareDeclarationPairs(pairs, parsed.options, sharedSfCache),
  ];
}

function findPackageDir(filePath, repoRoot = process.cwd()) {
  let dir = path.dirname(path.resolve(repoRoot, filePath));
  const resolvedRoot = path.resolve(repoRoot);
  while (dir === resolvedRoot || dir.startsWith(resolvedRoot + path.sep)) {
    if (
      fs.existsSync(path.join(dir, 'package.json')) &&
      fs.existsSync(path.join(dir, 'tsconfig.json'))
    ) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return undefined;
}

function resolveBaseGitRef(diffRange, repoRoot) {
  if (diffRange.includes('...')) {
    const [left, right] = diffRange.split('...');
    const leftRef = left || 'HEAD^1';
    const rightRef = right || 'HEAD';
    try {
      return execFileSync('git', ['merge-base', leftRef, rightRef], {
        cwd: repoRoot,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'ignore'],
      }).trim();
    } catch {
      return leftRef;
    }
  }
  if (diffRange.includes('..')) {
    return diffRange.split('..')[0] || 'HEAD^1';
  }
  return diffRange || 'HEAD^1';
}

/**
 * Runs the CLI breaking-change check across modified TypeScript files in `diffRange`.
 *
 * @param {string} [diffRange]
 * @param {string} [repoRoot]
 * @returns {Array<{file: string, explanation: string}>}
 */
function runGitDiffCheck(
  diffRange = process.env.GIT_DIFF_ARG?.trim() || 'HEAD^1...HEAD',
  repoRoot = process.cwd(),
) {
  if (diffRange.startsWith('-')) {
    throw new Error(`Invalid git diff range: ${diffRange}`);
  }
  const baseRef = resolveBaseGitRef(diffRange, repoRoot);

  const diffOut = execFileSync(
    'git',
    ['diff', '--name-status', diffRange, '--', '*.ts', ':!packages'],
    {cwd: repoRoot, encoding: 'utf8'},
  );

  const breaking = [];
  const entriesByPkg = new Map();

  for (const rawLine of diffOut.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;
    const [status, oldPath, newPath] = line.split(/\t+/);
    const activePath = status.startsWith('R') ? newPath : oldPath;
    if (!status || !oldPath || !activePath) continue;
    if (
      isIgnoredSourceFile(oldPath) &&
      (!newPath || isIgnoredSourceFile(newPath))
    ) {
      continue;
    }
    const pkgDir = findPackageDir(activePath, repoRoot);
    if (!pkgDir || pkgDir === path.resolve(repoRoot)) {
      if (status.startsWith('D')) {
        breaking.push({
          file: oldPath,
          explanation: 'Public source file was deleted.',
        });
      }
      continue;
    }
    if (!entriesByPkg.has(pkgDir)) entriesByPkg.set(pkgDir, []);
    entriesByPkg.get(pkgDir).push({
      status,
      oldRel: oldPath,
      newRel: activePath,
      oldAbs: path.resolve(repoRoot, oldPath),
      newAbs: path.resolve(repoRoot, activePath),
    });
  }

  for (const [pkgDir, modifiedEntries] of entriesByPkg) {
    const pkgBreakages = checkPackageChanges({
      pkgDir,
      repoRoot,
      modifiedEntries,
      baseFileReader: relPath => {
        try {
          return execFileSync('git', ['show', `${baseRef}:${relPath}`], {
            cwd: repoRoot,
            encoding: 'utf8',
            stdio: ['pipe', 'pipe', 'ignore'],
          });
        } catch {
          return undefined;
        }
      },
      headFileReader: (_relPath, absPath) => {
        try {
          return fs.readFileSync(absPath, 'utf8');
        } catch {
          return undefined;
        }
      },
      sharedSfCache: DEFAULT_SF_CACHE,
    });
    breaking.push(...pkgBreakages);
  }

  return breaking;
}

if (require.main === module) {
  const breaking = runGitDiffCheck();
  if (breaking.length > 0) {
    for (const b of breaking) {
      console.log(
        `::error file=${b.file},title=Breaking Change Detected::${b.explanation}`,
      );
    }
    process.exitCode = 1;
  } else {
    console.log('No breaking changes detected.');
  }
}

module.exports = {
  isIgnoredSourceFile,
  normalizeInternalComments,
  compareDeclarationPairs,
  checkPackageChanges,
  runGitDiffCheck,
};
