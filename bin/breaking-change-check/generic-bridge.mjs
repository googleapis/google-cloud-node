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

import path from 'node:path';
import {
  dtsPathToImportSpec,
  isValidIdentifierName,
  ts,
} from './dts-normalizer.mjs';

export const VALUE_SYMBOL_MASK =
  ts.SymbolFlags.Value |
  ts.SymbolFlags.Function |
  ts.SymbolFlags.Variable |
  ts.SymbolFlags.Class |
  ts.SymbolFlags.Enum |
  ts.SymbolFlags.ValueModule;

export const TYPE_SYMBOL_MASK =
  ts.SymbolFlags.Type |
  ts.SymbolFlags.Interface |
  ts.SymbolFlags.TypeAlias |
  ts.SymbolFlags.Class |
  ts.SymbolFlags.Enum;

export const BUILTIN_FUNCTION_PROPS = new Set([
  'apply',
  'bind',
  'call',
  'caller',
  'arguments',
  'length',
  'name',
  'prototype',
  'toString',
]);

export function isErrorType(type) {
  return Boolean(
    type && type.flags & ts.TypeFlags.Any && type.intrinsicName === 'error',
  );
}

export function isTypeOnlyExportSymbol(sym) {
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

export function resolveAliased(checker, sym) {
  if (sym.flags & ts.SymbolFlags.Alias) {
    try {
      return checker.getAliasedSymbol(sym);
    } catch {
      return sym;
    }
  }
  return sym;
}

export function hasRuntimeValue(sym, resolvedSym) {
  if (isTypeOnlyExportSymbol(sym)) return false;
  return Boolean(resolvedSym.flags & VALUE_SYMBOL_MASK);
}

export function hasTypeMeaning(resolvedSym) {
  return Boolean(resolvedSym.flags & TYPE_SYMBOL_MASK);
}

export function shouldSkipInternalProperty(propName) {
  return (
    propName === 'prototype' ||
    propName.startsWith('#') ||
    propName.startsWith('_#') ||
    propName.startsWith('__@#')
  );
}

export function isBuiltinFunctionProperty(propName) {
  return (
    BUILTIN_FUNCTION_PROPS.has(propName) ||
    propName.startsWith('__@hasInstance')
  );
}

export function unwrapRestElementType(checker, t) {
  if (!t) return t;
  if (checker.isArrayType(t)) {
    const args = checker.getTypeArguments(t);
    if (args && args.length > 0) return args[0];
  }
  if (t.symbol && t.symbol.getName() === 'ReadonlyArray') {
    const args = checker.getTypeArguments(t);
    if (args && args.length > 0) return args[0];
  }
  return t;
}

export function getTypeParameterDecls(sym) {
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

export function getSigArity(checker, sig) {
  const decl = sig.getDeclaration ? sig.getDeclaration() : sig.declaration;
  let minArgs = 0;
  let maxArgs = sig.parameters.length;
  let hasRestTail = false;
  let restMinElem = 0;

  if (decl && decl.parameters && decl.parameters.length > 0) {
    const lastParam = decl.parameters[decl.parameters.length - 1];
    if (lastParam.dotDotDotToken) {
      hasRestTail = true;
      const restTupleType = lastParam.type
        ? checker.getTypeFromTypeNode(lastParam.type)
        : undefined;
      const computeSingleTupleBounds = tup => {
        const tupleTarget = tup.target || tup;
        const elemFlags = tupleTarget.elementFlags || [];
        const unbounded = elemFlags.some(
          f => f & (ts.ElementFlags.Rest | ts.ElementFlags.Variadic),
        );
        let req = 0;
        for (const f of elemFlags) {
          if (f & ts.ElementFlags.Required) req++;
        }
        return {
          min: req,
          max: unbounded ? Infinity : elemFlags.length,
          unbounded,
        };
      };
      if (!restTupleType) {
        maxArgs = Infinity;
      } else if (checker.isTupleType(restTupleType)) {
        const b = computeSingleTupleBounds(restTupleType);
        restMinElem = b.min;
        maxArgs = b.unbounded ? Infinity : sig.parameters.length - 1 + b.max;
      } else if (
        restTupleType.isUnion &&
        restTupleType.isUnion() &&
        restTupleType.types.length > 0 &&
        restTupleType.types.every(m => checker.isTupleType(m))
      ) {
        const bounds = restTupleType.types.map(computeSingleTupleBounds);
        const isUnbounded = bounds.some(b => b.unbounded);
        const maxElem = Math.max(...bounds.map(b => b.max));
        restMinElem = Math.min(...bounds.map(b => b.min));
        maxArgs = isUnbounded ? Infinity : sig.parameters.length - 1 + maxElem;
      } else {
        maxArgs = Infinity;
      }
    }
  }

  let stoppedOptional = false;
  const fixedLimit = hasRestTail
    ? sig.parameters.length - 1
    : sig.parameters.length;
  for (let i = 0; i < fixedLimit; i++) {
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
      stoppedOptional = true;
      break;
    }
    minArgs++;
  }
  if (hasRestTail && !stoppedOptional && restMinElem > 0) {
    minArgs += restMinElem;
  }

  const tpDecls =
    decl && !ts.isClassLike(decl) && decl.typeParameters
      ? [...decl.typeParameters]
      : [];
  const maxTp = tpDecls.length;
  const minTp = tpDecls.filter(tp => !tp.default).length;
  return {minArgs, maxArgs, minTp, maxTp, tpDecls};
}

function getLeftmostEntityIdent(entityName) {
  let cur = entityName;
  const rightParts = [];
  while (ts.isQualifiedName(cur)) {
    rightParts.unshift(cur.right.text);
    cur = cur.left;
  }
  return ts.isIdentifier(cur) ? {root: cur, rightParts} : null;
}

function buildEntityNameFromParts(parts) {
  let cur = ts.factory.createIdentifier(parts[0]);
  for (let i = 1; i < parts.length; i++) {
    cur = ts.factory.createQualifiedName(
      cur,
      ts.factory.createIdentifier(parts[i]),
    );
  }
  return cur;
}

function qualifyBaseConstraintNode(
  constraintNode,
  checker,
  tpNamesSet,
  tpRenameMap,
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
      if (ts.isTypeQueryNode(node)) {
        const parsed = getLeftmostEntityIdent(node.exprName);
        if (parsed) {
          const sym = checker.getSymbolAtLocation(parsed.root);
          const resolved = sym ? resolveAliased(checker, sym) : undefined;
          const declFile =
            resolved &&
            resolved.declarations &&
            resolved.declarations[0] &&
            path.resolve(resolved.declarations[0].getSourceFile().fileName);
          if (declFile && dtsFiles.has(declFile)) {
            unresolvable = true;
            return node;
          }
        }
        return ts.visitEachChild(node, visit, context);
      }
      if (ts.isTypeReferenceNode(node)) {
        const parsed = getLeftmostEntityIdent(node.typeName);
        if (parsed) {
          const rootName = parsed.root.text;
          const newArgs = node.typeArguments
            ? ts.factory.createNodeArray(
                node.typeArguments.map(a => ts.visitNode(a, visit)),
              )
            : undefined;
          if (tpNamesSet.has(rootName)) {
            const renamed = tpRenameMap.get(rootName) || rootName;
            return ts.factory.createTypeReferenceNode(
              buildEntityNameFromParts([renamed, ...parsed.rightParts]),
              newArgs,
            );
          }
          const sym = checker.getSymbolAtLocation(parsed.root);
          const resolved = sym ? resolveAliased(checker, sym) : undefined;
          if (resolved && symToExportName.has(resolved)) {
            const expName = symToExportName.get(resolved);
            if (!coExportNames || coExportNames.has(expName)) {
              return ts.factory.createTypeReferenceNode(
                buildEntityNameFromParts([
                  modAlias,
                  expName,
                  ...parsed.rightParts,
                ]),
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
                  ts.factory.createStringLiteral(dtsPathToImportSpec(declFile)),
                ),
                undefined,
                buildEntityNameFromParts([
                  matchSub.getName(),
                  ...parsed.rightParts,
                ]),
                newArgs,
                false,
              );
            }
            unresolvable = true;
            return node;
          }
          return ts.factory.updateTypeReferenceNode(
            node,
            node.typeName,
            newArgs,
          );
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

export function buildGenericBridgeSource(pairsInfo, checker, dtsFiles) {
  const lines = ['export {};'];
  const taskMap = new Map();
  let modIdx = 0;
  let probeIdx = 0;

  for (const pair of pairsInfo) {
    const bAlias = `__BM${modIdx}`;
    const hAlias = `__HM${modIdx}`;
    modIdx++;
    const bImport = dtsPathToImportSpec(pair.baseDts);
    const hImport = dtsPathToImportSpec(pair.headDts);
    lines.push(`import type * as ${bAlias} from ${JSON.stringify(bImport)};`);
    lines.push(`import type * as ${hAlias} from ${JSON.stringify(hImport)};`);

    const renderTpList = (tpDecls, tpRenameMap = new Map()) => {
      const cTpDeclStrs = [];
      const pTpDeclStrs = [];
      const tpArgNames = [];
      const tpNamesSet = new Set(tpDecls.map(tp => tp.name.text));
      for (const tp of tpDecls) {
        const origName = tp.name.text;
        const name = tpRenameMap.get(origName) || origName;
        tpArgNames.push(name);
        if (tp.constraint) {
          const bText = qualifyBaseConstraintNode(
            tp.constraint,
            checker,
            tpNamesSet,
            tpRenameMap,
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
            tpRenameMap,
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
        cTpDeclStrs,
        pTpDeclStrs,
        tpArgNames,
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
        taskMap.set(item.key, {
          kind: 'alias',
          bAlias,
          hAlias,
          auxNames: [],
          cName,
          pName,
        });
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
        taskMap.set(item.key, {
          kind: 'alias',
          bAlias,
          hAlias,
          auxNames: [bConst, hConst],
          cName,
          pName,
        });
      } else if (
        item.kind === 'method' &&
        item.ownerTpDecls &&
        item.ownerTpDecls.length > 0
      ) {
        // Generic method on a generic class/interface: instantiate both owner and method skolem params!
        const methodTpSet = new Set(item.tpDecls.map(tp => tp.name.text));
        const ownerRename = new Map();
        for (let oi = 0; oi < item.ownerTpDecls.length; oi++) {
          const oName = item.ownerTpDecls[oi].name.text;
          if (methodTpSet.has(oName)) {
            ownerRename.set(oName, `__OT_${id}_${oi}`);
          }
        }
        const ownerRendered = renderTpList(item.ownerTpDecls, ownerRename);
        if (!ownerRendered) continue;
        const combinedRename = new Map(ownerRename);
        const allDecls = [...item.ownerTpDecls, ...item.tpDecls];
        const fullRendered = renderTpList(allDecls, combinedRename);
        if (!fullRendered) continue;
        const methodArgsCode = `<${item.tpDecls.map(tp => tp.name.text).join(', ')}>`;
        const ownerArgsCode = `<${ownerRendered.tpArgNames.join(', ')}>`;
        // For constraint probe `cName`, keep owner params on `b & h` constraints and only test method params against head constraint!
        const cParamsList = [
          ...ownerRendered.pTpDeclStrs,
          ...fullRendered.cTpDeclStrs.slice(item.ownerTpDecls.length),
        ];
        const cName = `__mc_${id}`;
        const pName = `__mp_${id}`;
        const mJson = JSON.stringify(item.methodName);
        lines.push(
          `function ${cName}<${cParamsList.join(', ')}>(__hm: NonNullable<${hAlias}.${item.exportName}${ownerArgsCode}[${mJson}]>) { return __hm${methodArgsCode}; }`,
        );
        lines.push(
          `function ${pName}${fullRendered.pTpParamsCode}(__bm: NonNullable<${bAlias}.${item.exportName}${ownerArgsCode}[${mJson}]>, __hm: NonNullable<${hAlias}.${item.exportName}${ownerArgsCode}[${mJson}]>) { return [__bm${methodArgsCode}, __hm${methodArgsCode}] as const; }`,
        );
        taskMap.set(item.key, {
          kind: 'fnPair',
          bAlias,
          hAlias,
          auxNames: [],
          cName,
          pName,
        });
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
        taskMap.set(item.key, {
          kind: 'alias',
          bAlias,
          hAlias,
          auxNames: [bConst, hConst],
          cName,
          pName,
        });
      }
    }
  }

  return {bridgeCode: lines.join('\n') + '\n', taskMap};
}

function getTpDeclsKey(tpDecls, sf) {
  return tpDecls
    .map(
      tp =>
        `${tp.name.text}:${tp.constraint ? tp.constraint.getText(sf).replace(/\s+/g, ' ').trim() : ''}`,
    )
    .join('|');
}

function collectCompatibleGenericSigGroups(checker, bSigs, hSigs, bSf) {
  if (bSigs.length === 0 || hSigs.length === 0) return [];
  const bArities = bSigs.map(s => getSigArity(checker, s));
  const hArities = hSigs.map(s => getSigArity(checker, s));
  const byTpCount = new Map();
  for (const bAr of bArities) {
    if (bAr.maxTp > 0) {
      const list = byTpCount.get(bAr.maxTp) || [];
      list.push(bAr);
      byTpCount.set(bAr.maxTp, list);
    }
  }
  const groups = [];
  for (const [tpCount, bGroup] of byTpCount.entries()) {
    const firstKey = getTpDeclsKey(bGroup[0].tpDecls, bSf);
    const sameConstraints = bGroup.every(
      g => getTpDeclsKey(g.tpDecls, bSf) === firstKey,
    );
    const hasMatchingHead = hArities.some(
      hAr => hAr.minTp <= tpCount && hAr.maxTp >= tpCount,
    );
    if (sameConstraints && hasMatchingHead) {
      groups.push({tpCount, tpDecls: bGroup[0].tpDecls});
    }
  }
  return groups;
}

function probeObjectGenericMethods(
  checker,
  bObjType,
  hObjType,
  bSf,
  hSf,
  absBSf,
  expName,
  ownerPrefix,
  isStatic,
  ownerTpDecls,
  genericItems,
) {
  for (const prop of checker.getPropertiesOfType(bObjType)) {
    const mName = prop.getName();
    if (!isValidIdentifierName(mName) || shouldSkipInternalProperty(mName)) {
      continue;
    }
    if (isStatic && isBuiltinFunctionProperty(mName)) {
      continue;
    }
    const hProp = checker.getPropertyOfType(hObjType, mName);
    if (!hProp) continue;
    const bMType = checker.getNonNullableType(
      checker.getTypeOfSymbolAtLocation(prop, bSf),
    );
    const hMType = checker.getNonNullableType(
      checker.getTypeOfSymbolAtLocation(hProp, hSf),
    );
    const bSigs = checker.getSignaturesOfType(bMType, ts.SignatureKind.Call);
    const hSigs = checker.getSignaturesOfType(hMType, ts.SignatureKind.Call);
    for (const grp of collectCompatibleGenericSigGroups(
      checker,
      bSigs,
      hSigs,
      bSf,
    )) {
      genericItems.push({
        kind: 'method',
        exportName: expName,
        methodName: mName,
        isStatic,
        ownerTpDecls,
        tpDecls: grp.tpDecls,
        key: `${absBSf}::method::${ownerPrefix}::${mName}::${grp.tpCount}`,
      });
    }
  }
}

export function collectGenericProbeItemsFromChecker(checker, bSf, hSf) {
  const genericItems = [];
  const symToExportName = new Map();
  const coExportNames = new Set();
  if (!bSf || !hSf) return {genericItems, symToExportName, coExportNames};

  const bMod = checker.getSymbolAtLocation(bSf);
  const hMod = checker.getSymbolAtLocation(hSf);
  if (!bMod || !hMod) return {genericItems, symToExportName, coExportNames};

  const hasExportEquals = Boolean(
    (bMod.exports && bMod.exports.has(ts.InternalSymbolName.ExportEquals)) ||
    (hMod.exports && hMod.exports.has(ts.InternalSymbolName.ExportEquals)),
  );
  if (hasExportEquals) {
    // `export =` modules may reject ESM `import type * as` under `esModuleInterop: false`;
    // comparator handles their generics via direct signature/constraint checks.
    return {genericItems, symToExportName, coExportNames};
  }

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

    // 1. Exported generic interfaces, type aliases, and classes (plus generic instance methods)
    if (
      resolvedB.flags & TYPE_SYMBOL_MASK &&
      resolvedH.flags & TYPE_SYMBOL_MASK
    ) {
      const bTp = getTypeParameterDecls(resolvedB);
      const hTp = getTypeParameterDecls(resolvedH);
      const ownerArityCompatible =
        bTp.max === 0
          ? hTp.min === 0
          : hTp.min <= bTp.max && hTp.max >= bTp.max;
      if (bTp.max > 0 && ownerArityCompatible) {
        genericItems.push({
          kind: 'type',
          exportName: expName,
          tpDecls: bTp.decls,
          key: `${absBSf}::type::${expName}`,
        });
        if (
          resolvedB.flags & ts.SymbolFlags.Class &&
          resolvedH.flags & ts.SymbolFlags.Class &&
          hasRuntimeValue(bSym, resolvedB) &&
          hasRuntimeValue(hSym, resolvedH)
        ) {
          genericItems.push({
            kind: 'valueFn',
            exportName: expName,
            tpDecls: bTp.decls,
            key: `${absBSf}::ctor::${expName}::${bTp.max}`,
          });
        }
      }

      if (ownerArityCompatible && !(resolvedB.flags & ts.SymbolFlags.Enum)) {
        const bInstType = checker.getDeclaredTypeOfSymbol(resolvedB);
        const hInstType = checker.getDeclaredTypeOfSymbol(resolvedH);
        const ownerPrefix =
          resolvedB.flags & ts.SymbolFlags.Class
            ? `Class '${expName}'`
            : `Interface/Type '${expName}'`;
        probeObjectGenericMethods(
          checker,
          bInstType,
          hInstType,
          bSf,
          hSf,
          absBSf,
          expName,
          ownerPrefix,
          false,
          bTp.max > 0 ? bTp.decls : null,
          genericItems,
        );
      }
    }

    // 2. Exported generic functions, static generic methods on classes, and generic methods on exported objects
    if (
      hasRuntimeValue(bSym, resolvedB) &&
      hasRuntimeValue(hSym, resolvedH) &&
      !(resolvedB.flags & ts.SymbolFlags.Enum)
    ) {
      const bValT = checker.getTypeOfSymbolAtLocation(bSym, bSf);
      const hValT = checker.getTypeOfSymbolAtLocation(hSym, hSf);
      if (!(resolvedB.flags & ts.SymbolFlags.Class)) {
        const bCallSigs = checker.getSignaturesOfType(
          bValT,
          ts.SignatureKind.Call,
        );
        const hCallSigs = checker.getSignaturesOfType(
          hValT,
          ts.SignatureKind.Call,
        );
        for (const grp of collectCompatibleGenericSigGroups(
          checker,
          bCallSigs,
          hCallSigs,
          bSf,
        )) {
          genericItems.push({
            kind: 'valueFn',
            exportName: expName,
            tpDecls: grp.tpDecls,
            key: `${absBSf}::fn::${expName}::${grp.tpCount}`,
          });
        }
      }
      // Static generic methods on classes + generic methods on exported constant objects / callable expandos
      probeObjectGenericMethods(
        checker,
        bValT,
        hValT,
        bSf,
        hSf,
        absBSf,
        expName,
        `Value '${expName}'`,
        true,
        null,
        genericItems,
      );
    }
  }

  return {genericItems, symToExportName, coExportNames};
}

const EXPECTED_CONSTRAINT_DIAG_CODES = new Set([2344, 2314, 2558, 2635, 2707]);

export function extractBridgeResults(prog, checker, bridgeSf, taskMap) {
  const results = new Map();
  if (!bridgeSf) return results;

  const stmtByName = new Map();
  const brokenImports = new Set();
  const allDiags = [
    ...prog.getSyntacticDiagnostics(bridgeSf),
    ...prog.getSemanticDiagnostics(bridgeSf),
  ];

  const hasDiagInSpan = (start, end, predicate = () => true) =>
    allDiags.some(
      d =>
        typeof d.start === 'number' &&
        d.start >= start &&
        d.start < end &&
        predicate(d),
    );

  for (const stmt of bridgeSf.statements) {
    if (ts.isImportDeclaration(stmt) && stmt.importClause) {
      const nb = stmt.importClause.namedBindings;
      if (nb && ts.isNamespaceImport(nb)) {
        if (hasDiagInSpan(stmt.getStart(bridgeSf), stmt.getEnd())) {
          brokenImports.add(nb.name.text);
        }
      }
    } else if (
      ts.isTypeAliasDeclaration(stmt) ||
      ts.isFunctionDeclaration(stmt)
    ) {
      if (stmt.name) stmtByName.set(stmt.name.text, stmt);
    } else if (ts.isVariableStatement(stmt)) {
      for (const d of stmt.declarationList.declarations) {
        if (ts.isIdentifier(d.name)) {
          stmtByName.set(d.name.text, stmt);
        }
      }
    }
  }

  const constraintDiagsAtSpan = (start, end) =>
    allDiags.filter(
      d =>
        typeof d.start === 'number' &&
        d.start >= start &&
        d.start < end &&
        EXPECTED_CONSTRAINT_DIAG_CODES.has(d.code),
    );

  const hasUnexpectedDiagAtSpan = (start, end) =>
    hasDiagInSpan(start, end, d => !EXPECTED_CONSTRAINT_DIAG_CODES.has(d.code));

  for (const [key, task] of taskMap.entries()) {
    const {kind, bAlias, hAlias, auxNames, cName, pName} = task;
    if (brokenImports.has(bAlias) || brokenImports.has(hAlias)) {
      continue;
    }
    let auxBroken = false;
    for (const aux of auxNames) {
      const auxStmt = stmtByName.get(aux);
      if (
        !auxStmt ||
        hasDiagInSpan(auxStmt.getStart(bridgeSf), auxStmt.getEnd())
      ) {
        auxBroken = true;
        break;
      }
    }
    if (auxBroken) continue;

    const cStmt = stmtByName.get(cName);
    const pStmt = stmtByName.get(pName);
    if (!cStmt || !pStmt) continue;

    if (
      hasUnexpectedDiagAtSpan(cStmt.getStart(bridgeSf), cStmt.getEnd()) ||
      hasUnexpectedDiagAtSpan(pStmt.getStart(bridgeSf), pStmt.getEnd())
    ) {
      continue;
    }

    const matchedDiags = constraintDiagsAtSpan(
      cStmt.getStart(bridgeSf),
      cStmt.getEnd(),
    );

    let baseInst;
    let headInst;
    if (
      kind === 'alias' &&
      ts.isTypeAliasDeclaration(pStmt) &&
      ts.isTupleTypeNode(pStmt.type) &&
      pStmt.type.elements.length === 2
    ) {
      baseInst = checker.getTypeFromTypeNode(pStmt.type.elements[0]);
      headInst = checker.getTypeFromTypeNode(pStmt.type.elements[1]);
    } else if (kind === 'fnPair' && ts.isFunctionDeclaration(pStmt)) {
      const sig = checker.getSignatureFromDeclaration(pStmt);
      const ret = sig && checker.getReturnTypeOfSignature(sig);
      const tupleArgs = ret && checker.getTypeArguments(ret);
      if (tupleArgs && tupleArgs.length === 2) {
        baseInst = tupleArgs[0];
        headInst = tupleArgs[1];
      }
    }

    if (matchedDiags.length === 0) {
      if (
        !baseInst ||
        !headInst ||
        isErrorType(baseInst) ||
        isErrorType(headInst)
      ) {
        continue;
      }
    }

    results.set(key, {
      constraintErrors: matchedDiags.map(d =>
        ts.flattenDiagnosticMessageText(d.messageText, ' '),
      ),
      baseInst: isErrorType(baseInst) ? undefined : baseInst,
      headInst: isErrorType(headInst) ? undefined : headInst,
    });
  }
  return results;
}
