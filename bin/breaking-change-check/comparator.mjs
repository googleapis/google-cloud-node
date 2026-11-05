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
  collectClassAccessibility,
  findClassMetaForSymbol,
  findDeclaringClassMemberMeta,
  getMemberNameDisplay,
  isDeclarationFilePath,
  rankVisibility,
  toDtsFileName,
  ts,
} from './dts-normalizer.mjs';
import {
  TYPE_SYMBOL_MASK,
  buildGenericBridgeSource,
  collectGenericProbeItemsFromChecker,
  extractBridgeResults,
  getSigArity,
  getTypeParameterDecls,
  hasRuntimeValue,
  hasTypeMeaning,
  isBuiltinFunctionProperty,
  isErrorType,
  resolveAliased,
  shouldSkipInternalProperty,
  unwrapRestElementType,
} from './generic-bridge.mjs';

const MAX_DIAG_TYPE_LEN = 240;

export function formatTypeDiagnostic(checker, type) {
  if (!type) return 'unknown';
  if (isErrorType(type)) return '<unresolved error type>';
  const full = checker.typeToString(
    type,
    undefined,
    ts.TypeFormatFlags.NoTruncation,
  );
  return full.length > MAX_DIAG_TYPE_LEN
    ? `${full.slice(0, MAX_DIAG_TYPE_LEN - 3)}...`
    : full;
}

function summarizeObjectShape(checker, type) {
  const props = checker
    .getPropertiesOfType(type)
    .filter(p => !shouldSkipInternalProperty(p.getName()));
  if (props.length === 0) return null;
  const shown = props.slice(0, 5).map(p => {
    const opt = p.flags & ts.SymbolFlags.Optional ? '?' : '';
    const decl =
      p.valueDeclaration || (p.declarations && p.declarations[0]) || undefined;
    const pt = decl
      ? checker.getTypeOfSymbolAtLocation(p, decl)
      : checker.getDeclaredTypeOfSymbol(p);
    const tStr = checker.typeToString(pt);
    return `${p.getName()}${opt}: ${tStr}`;
  });
  const suffix = props.length > 5 ? '; ...' : '';
  return `{ ${shown.join('; ')}${suffix} }`;
}

function formatTypePairDiff(checker, baseType, headType) {
  let bStr = formatTypeDiagnostic(checker, baseType);
  let hStr = formatTypeDiagnostic(checker, headType);
  if (bStr === hStr) {
    const bShape = summarizeObjectShape(checker, baseType);
    const hShape = summarizeObjectShape(checker, headType);
    if (bShape && hShape && bShape !== hShape) {
      bStr = `${bStr} (${bShape})`;
      hStr = `${hStr} (${hShape})`;
    }
  }
  return `(was '${bStr}', now '${hStr}')`;
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

function getSymbolWriteType(checker, propSym, sf, fallbackReadType) {
  if (typeof checker.getWriteTypeOfSymbol === 'function') {
    try {
      const wt = checker.getWriteTypeOfSymbol(propSym);
      if (wt) return wt;
    } catch {
      // Fall back to setter parameter inspection.
    }
  }
  for (const d of propSym.declarations || []) {
    if (ts.isSetAccessorDeclaration(d) && d.parameters.length > 0) {
      const p = d.parameters[0];
      if (p.type) return checker.getTypeFromTypeNode(p.type);
    }
  }
  return fallbackReadType;
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

function areUniqueSymbolsCompatible(bType, hType) {
  return Boolean(
    bType.flags & ts.TypeFlags.UniqueESSymbol &&
    hType.flags & ts.TypeFlags.UniqueESSymbol &&
    bType.symbol &&
    hType.symbol &&
    bType.symbol.getName() === hType.symbol.getName(),
  );
}

const COVARIANT_GENERIC_CONTAINERS = new Set([
  'Array',
  'ReadonlyArray',
  'Promise',
  'PromiseLike',
  'Set',
  'ReadonlySet',
  'Map',
  'ReadonlyMap',
  'WeakMap',
  'WeakSet',
  'Iterable',
  'Iterator',
  'IterableIterator',
  'AsyncIterable',
  'AsyncIterator',
  'AsyncIterableIterator',
  'Generator',
  'AsyncGenerator',
]);

const SINGLE_ARG_CONTAINER_GROUPS = [
  new Set([
    'Array',
    'ReadonlyArray',
    'Set',
    'ReadonlySet',
    'Iterable',
    'IterableIterator',
  ]),
  new Set(['Promise', 'PromiseLike']),
  new Set(['AsyncIterable', 'AsyncIterableIterator']),
];

function shareCovariantContainerGroup(sName, tName) {
  if (!sName || !tName) return false;
  if (sName === tName && COVARIANT_GENERIC_CONTAINERS.has(sName)) return true;
  return SINGLE_ARG_CONTAINER_GROUPS.some(g => g.has(sName) && g.has(tName));
}

function hasUnsafeAnyAssignment(
  checker,
  source,
  target,
  depth = 0,
  seen = new Set(),
) {
  if (!source || !target || source === target || depth > 5) return false;
  if (isErrorType(source) !== isErrorType(target)) return true;
  if (
    source.flags & ts.TypeFlags.Any &&
    !(target.flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown))
  ) {
    return true;
  }
  if (target.flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown)) return false;
  if (source.flags & ts.TypeFlags.Never) return false;

  if (source.id && target.id) {
    const pairKey = `${source.id}:${target.id}`;
    if (seen.has(pairKey)) return false;
    seen.add(pairKey);
  }

  if (source.isUnion && source.isUnion()) {
    return source.types.some(sMember => {
      if (target.isUnion && target.isUnion()) {
        return !target.types.some(
          tMember =>
            (areUniqueSymbolsCompatible(sMember, tMember) ||
              checker.isTypeAssignableTo(sMember, tMember)) &&
            !hasUnsafeAnyAssignment(checker, sMember, tMember, depth + 1, seen),
        );
      }
      return hasUnsafeAnyAssignment(checker, sMember, target, depth + 1, seen);
    });
  }

  if (target.isUnion && target.isUnion()) {
    return !target.types.some(
      tMember =>
        (areUniqueSymbolsCompatible(source, tMember) ||
          checker.isTypeAssignableTo(source, tMember)) &&
        !hasUnsafeAnyAssignment(checker, source, tMember, depth + 1, seen),
    );
  }

  if (checker.isTupleType(source) && checker.isTupleType(target)) {
    const sArgs = checker.getTypeArguments(source) || [];
    const tArgs = checker.getTypeArguments(target) || [];
    const len = Math.min(sArgs.length, tArgs.length);
    for (let i = 0; i < len; i++) {
      if (
        hasUnsafeAnyAssignment(checker, sArgs[i], tArgs[i], depth + 1, seen)
      ) {
        return true;
      }
    }
    return false;
  }

  const sSymName = source.symbol && source.symbol.getName();
  const tSymName = target.symbol && target.symbol.getName();
  if (shareCovariantContainerGroup(sSymName, tSymName)) {
    const sArgs = checker.getTypeArguments(source) || [];
    const tArgs = checker.getTypeArguments(target) || [];
    const len = Math.min(sArgs.length, tArgs.length);
    for (let i = 0; i < len; i++) {
      if (
        hasUnsafeAnyAssignment(checker, sArgs[i], tArgs[i], depth + 1, seen)
      ) {
        return true;
      }
    }
    return false;
  }

  const tIndices = checker.getIndexInfosOfType(target) || [];
  if (tIndices.length > 0) {
    const sIndices = checker.getIndexInfosOfType(source) || [];
    for (const tIdx of tIndices) {
      const sIdx = sIndices.find(si =>
        checker.isTypeAssignableTo(tIdx.keyType, si.keyType),
      );
      if (
        sIdx &&
        hasUnsafeAnyAssignment(checker, sIdx.type, tIdx.type, depth + 1, seen)
      ) {
        return true;
      }
    }
  }

  const sCallSigs = checker.getSignaturesOfType(source, ts.SignatureKind.Call);
  const tCallSigs = checker.getSignaturesOfType(target, ts.SignatureKind.Call);
  if (sCallSigs.length > 0 && tCallSigs.length > 0) {
    for (const tSig of tCallSigs) {
      if (getSigArity(checker, tSig).maxTp > 0) continue;
      const coveredSafely = sCallSigs.some(sSig => {
        if (getSigArity(checker, sSig).maxTp > 0) return true;
        const sRet = checker.getReturnTypeOfSignature(sSig);
        const tRet = checker.getReturnTypeOfSignature(tSig);
        if (
          !(tRet.flags & ts.TypeFlags.Void) &&
          hasUnsafeAnyAssignment(checker, sRet, tRet, depth + 1, seen)
        ) {
          return false;
        }
        const len = Math.min(sSig.parameters.length, tSig.parameters.length);
        for (let i = 0; i < len; i++) {
          const sP = sSig.parameters[i];
          const tP = tSig.parameters[i];
          const sLoc =
            sP.valueDeclaration ||
            (sP.declarations && sP.declarations[0]) ||
            (sSig.getDeclaration && sSig.getDeclaration());
          const tLoc =
            tP.valueDeclaration ||
            (tP.declarations && tP.declarations[0]) ||
            (tSig.getDeclaration && tSig.getDeclaration());
          if (!sLoc || !tLoc) continue;
          const sPT = checker.getTypeOfSymbolAtLocation(sP, sLoc);
          const tPT = checker.getTypeOfSymbolAtLocation(tP, tLoc);
          // Contravariant parameter direction: target param passes into source param
          if (hasUnsafeAnyAssignment(checker, tPT, sPT, depth + 1, seen)) {
            return false;
          }
        }
        return true;
      });
      if (!coveredSafely) return true;
    }
    return false;
  }

  // Plain object literal / mapped types (e.g. `Record<string, any>` or `{ data: any }` -> `{ data: User }`)
  if (
    depth <= 2 &&
    sCallSigs.length === 0 &&
    checker.getSignaturesOfType(source, ts.SignatureKind.Construct).length === 0
  ) {
    const isAnonOrMapped =
      Boolean(
        source.objectFlags & (ts.ObjectFlags.Anonymous | ts.ObjectFlags.Mapped),
      ) ||
      Boolean(
        target.objectFlags & (ts.ObjectFlags.Anonymous | ts.ObjectFlags.Mapped),
      );
    if (isAnonOrMapped) {
      const tProps = checker.getPropertiesOfType(target);
      if (tProps.length > 0 && tProps.length <= 40) {
        for (const tProp of tProps) {
          const pName = tProp.getName();
          if (shouldSkipInternalProperty(pName) || pName.startsWith('__@')) {
            continue;
          }
          const sProp = checker.getPropertyOfType(source, pName);
          if (!sProp) continue;
          const sLoc =
            sProp.valueDeclaration ||
            (sProp.declarations && sProp.declarations[0]);
          const tLoc =
            tProp.valueDeclaration ||
            (tProp.declarations && tProp.declarations[0]);
          if (!sLoc || !tLoc) continue;
          const sPT = checker.getTypeOfSymbolAtLocation(sProp, sLoc);
          const tPT = checker.getTypeOfSymbolAtLocation(tProp, tLoc);
          if (hasUnsafeAnyAssignment(checker, sPT, tPT, depth + 1, seen)) {
            return true;
          }
        }
      }
    }
  }

  return false;
}

export function isAssignableCompat(checker, source, target) {
  if (source === target) return true;
  if (isErrorType(source) !== isErrorType(target)) return false;
  if (areUniqueSymbolsCompatible(source, target)) return true;
  if (!checker.isTypeAssignableTo(source, target)) return false;
  return !hasUnsafeAnyAssignment(checker, source, target);
}

function flipPolarity(pol) {
  return pol === 'in' ? 'out' : 'in';
}

function computeGenericDeclarationParamVariances(checker, rootExports) {
  const genericDecls = new Map();
  const seenSyms = new Set();

  const collectFromExports = exportsList => {
    for (const expSym of exportsList) {
      const resolved = resolveAliased(checker, expSym);
      if (seenSyms.has(resolved)) continue;
      seenSyms.add(resolved);
      const decls = resolved.declarations || [];
      const tpDecls = decls.find(
        d =>
          (ts.isTypeAliasDeclaration(d) ||
            ts.isInterfaceDeclaration(d) ||
            ts.isClassDeclaration(d)) &&
          d.typeParameters &&
          d.typeParameters.length > 0,
      );
      if (tpDecls) {
        genericDecls.set(resolved, {
          tpNames: tpDecls.typeParameters.map(tp => tp.name.text),
          decls,
        });
      }
      if (resolved.flags & ts.SymbolFlags.Module) {
        collectFromExports(checker.getExportsOfModule(resolved) || []);
      }
    }
  };
  collectFromExports(rootExports);

  const varianceBySym = new Map();
  for (const [sym, info] of genericDecls.entries()) {
    varianceBySym.set(
      sym,
      info.tpNames.map(() => ({in: false, out: false})),
    );
  }

  for (let pass = 0; pass < 4; pass++) {
    let changed = false;
    for (const [sym, info] of genericDecls.entries()) {
      const slots = varianceBySym.get(sym);
      const idxByName = new Map(info.tpNames.map((n, idx) => [n, idx]));

      const markTp = (name, pol) => {
        const idx = idxByName.get(name);
        if (idx === undefined) return;
        if (pol === 'in' && !slots[idx].in) {
          slots[idx].in = true;
          changed = true;
        } else if (pol === 'out' && !slots[idx].out) {
          slots[idx].out = true;
          changed = true;
        }
      };

      const walkType = (node, pol) => {
        if (!node) return;
        if (ts.isTypeReferenceNode(node)) {
          if (ts.isIdentifier(node.typeName)) {
            const txt = node.typeName.text;
            if (idxByName.has(txt)) {
              markTp(txt, pol);
              if (node.typeArguments) {
                for (const a of node.typeArguments) walkType(a, pol);
              }
              return;
            }
          }
          if (node.typeArguments && node.typeArguments.length > 0) {
            const refId = ts.isIdentifier(node.typeName)
              ? node.typeName
              : node.typeName.right;
            const refSym = checker.getSymbolAtLocation(refId);
            const resolvedRef = refSym
              ? resolveAliased(checker, refSym)
              : undefined;
            const refVar = resolvedRef && varianceBySym.get(resolvedRef);
            for (let i = 0; i < node.typeArguments.length; i++) {
              const arg = node.typeArguments[i];
              const pv = refVar && refVar[i];
              if (pv) {
                if (pv.out) walkType(arg, pol);
                if (pv.in) walkType(arg, flipPolarity(pol));
                if (!pv.in && !pv.out) walkType(arg, pol);
              } else {
                walkType(arg, pol);
              }
            }
          }
          return;
        }
        if (ts.isFunctionTypeNode(node) || ts.isConstructorTypeNode(node)) {
          const flipped = flipPolarity(pol);
          for (const p of node.parameters) walkType(p.type, flipped);
          walkType(node.type, pol);
          return;
        }
        ts.forEachChild(node, child => {
          if (ts.isParameter(child)) {
            walkType(child.type, flipPolarity(pol));
          } else if (
            ts.isMethodSignature(child) ||
            ts.isMethodDeclaration(child) ||
            ts.isCallSignatureDeclaration(child) ||
            ts.isConstructSignatureDeclaration(child) ||
            ts.isConstructorDeclaration(child) ||
            ts.isSetAccessorDeclaration(child)
          ) {
            const flipped = flipPolarity(pol);
            for (const p of child.parameters) walkType(p.type, flipped);
            if (child.type) walkType(child.type, pol);
          } else {
            walkType(child, pol);
          }
        });
      };

      for (const d of info.decls) {
        if (ts.isTypeAliasDeclaration(d)) {
          walkType(d.type, 'out');
        } else if (ts.isInterfaceDeclaration(d) || ts.isClassDeclaration(d)) {
          if (d.heritageClauses) {
            for (const hc of d.heritageClauses) walkType(hc, 'out');
          }
          for (const m of d.members) {
            const mFlags = ts.getCombinedModifierFlags(m);
            if (mFlags & ts.ModifierFlags.Private) continue;
            walkType(m, 'out');
          }
        }
      }
    }
    if (!changed) break;
  }

  return varianceBySym;
}

/**
 * Classifies exported interface and type-alias symbols in a module into `'input'` vs `'output'`,
 * taking into account contravariant generic type parameters (e.g. `cb: RequestCallback<Row[]>`
 * flips `'in' x 'in' -> 'out'` so `Row` is soundly recognized as an output type).
 */
export function classifyModuleTypeVariance(
  checker,
  baseExports,
  targetSymToExportName,
) {
  const inInput = new Set();
  const inOutput = new Set();
  if (targetSymToExportName.size === 0) {
    return {inInput, inOutput};
  }

  const genericParamVariances = computeGenericDeclarationParamVariances(
    checker,
    baseExports,
  );

  const resolveTypeNameSym = typeName => {
    const idNode = ts.isIdentifier(typeName) ? typeName : typeName.right;
    const sym = checker.getSymbolAtLocation(idNode);
    return sym ? resolveAliased(checker, sym) : undefined;
  };

  const recordResolved = (resolved, polarity) => {
    if (!resolved) return;
    const expName = targetSymToExportName.get(resolved);
    if (expName) {
      if (polarity === 'in') inInput.add(expName);
      else inOutput.add(expName);
    }
  };

  const visitTypeNode = (node, polarity) => {
    if (!node) return;
    if (ts.isTypeReferenceNode(node)) {
      const resolvedRef = resolveTypeNameSym(node.typeName);
      recordResolved(resolvedRef, polarity);
      if (node.typeArguments && node.typeArguments.length > 0) {
        const refVariances =
          resolvedRef && genericParamVariances.get(resolvedRef);
        const builtinName = resolvedRef && resolvedRef.getName();
        const isContravariantBuiltin =
          builtinName === 'Parameters' ||
          builtinName === 'ConstructorParameters';
        for (let i = 0; i < node.typeArguments.length; i++) {
          const arg = node.typeArguments[i];
          const pv = refVariances && refVariances[i];
          if (pv) {
            if (pv.out) visitTypeNode(arg, polarity);
            if (pv.in) visitTypeNode(arg, flipPolarity(polarity));
            if (!pv.in && !pv.out) visitTypeNode(arg, polarity);
          } else if (isContravariantBuiltin) {
            visitTypeNode(arg, flipPolarity(polarity));
          } else {
            visitTypeNode(arg, polarity);
          }
        }
      }
      return;
    }
    if (ts.isFunctionTypeNode(node) || ts.isConstructorTypeNode(node)) {
      const flipped = flipPolarity(polarity);
      for (const p of node.parameters) {
        visitTypeNode(p.type, flipped);
      }
      visitTypeNode(node.type, polarity);
      return;
    }
    ts.forEachChild(node, child => {
      if (ts.isParameter(child)) {
        visitTypeNode(child.type, flipPolarity(polarity));
      } else if (
        ts.isMethodSignature(child) ||
        ts.isCallSignatureDeclaration(child) ||
        ts.isConstructSignatureDeclaration(child)
      ) {
        const flipped = flipPolarity(polarity);
        for (const p of child.parameters) visitTypeNode(p.type, flipped);
        visitTypeNode(child.type, polarity);
      } else {
        visitTypeNode(child, polarity);
      }
    });
  };

  const visitExportDeclarations = exportsList => {
    for (const expSym of exportsList) {
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
              if (!(mFlags & ts.ModifierFlags.Readonly)) {
                visitTypeNode(m.type, 'in');
              }
            } else if (ts.isGetAccessorDeclaration(m)) {
              visitTypeNode(m.type, 'out');
            } else if (ts.isSetAccessorDeclaration(m)) {
              for (const p of m.parameters) visitTypeNode(p.type, 'in');
            }
          }
        }
      }
    }
  };
  visitExportDeclarations(baseExports);

  // Transitively propagate variance through exported non-generic interfaces and type aliases
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
          if (decl.typeParameters && decl.typeParameters.length > 0) {
            // Generic containers' parameter usages were already propagated per-instantiation above;
            // still propagate any concrete non-type-parameter references inside their body at `pol`.
          }
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

function isHeadPackageFile(filePath, refHeadModFile) {
  const resolved = path.resolve(filePath);
  if (
    resolved.includes(`${path.sep}node_modules${path.sep}`) ||
    resolved.includes(`${path.sep}__base_pkg__${path.sep}`)
  ) {
    return false;
  }
  if (refHeadModFile.includes('__head__')) {
    const root = refHeadModFile.slice(
      0,
      refHeadModFile.indexOf('__head__') + '__head__'.length,
    );
    return resolved === root || resolved.startsWith(root + path.sep);
  }
  if (refHeadModFile.includes(`${path.sep}src${path.sep}`)) {
    const pkgRoot = refHeadModFile.slice(
      0,
      refHeadModFile.indexOf(`${path.sep}src${path.sep}`),
    );
    return resolved === pkgRoot || resolved.startsWith(pkgRoot + path.sep);
  }
  const dir = path.dirname(refHeadModFile);
  return resolved === refHeadModFile || resolved.startsWith(dir + path.sep);
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
    if (
      ts.isImportEqualsDeclaration(st) &&
      ts.isExternalModuleReference(st.moduleReference) &&
      st.moduleReference.expression &&
      ts.isStringLiteral(st.moduleReference.expression) &&
      st.moduleReference.expression.text.startsWith('.')
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

function findMatchingHeadDeclarationsInScope(bDecl0, headHelperSf, targetName) {
  if (!bDecl0 || !headHelperSf || !targetName) return [];
  const nsChain = [];
  let cur = bDecl0.parent;
  while (cur && !ts.isSourceFile(cur)) {
    if (ts.isModuleDeclaration(cur) && cur.name) {
      nsChain.unshift(cur.name.text);
    }
    cur = cur.parent;
  }
  let currentStmts = [...headHelperSf.statements];
  for (const nsName of nsChain) {
    const nextStmts = [];
    for (const st of currentStmts) {
      if (ts.isModuleDeclaration(st) && st.name && st.name.text === nsName) {
        let body = st.body;
        while (body && ts.isModuleDeclaration(body)) {
          if (body.name) break;
          body = body.body;
        }
        if (body && ts.isModuleBlock(body)) {
          nextStmts.push(...body.statements);
        }
      }
    }
    currentStmts = nextStmts;
    if (currentStmts.length === 0) return [];
  }
  return currentStmts.filter(
    st => st.kind === bDecl0.kind && st.name && st.name.text === targetName,
  );
}

function collectHeadLocalBindingsByName(checker, hRootNode, tpScope) {
  const map = new Map();
  const walk = (node, activeTp) => {
    if (!node) return;
    if (
      (ts.isFunctionTypeNode(node) || ts.isConstructorTypeNode(node)) &&
      node.typeParameters &&
      node.typeParameters.length > 0
    ) {
      const ext = new Set(activeTp);
      for (const tp of node.typeParameters) ext.add(tp.name.text);
      ts.forEachChild(node, c => walk(c, ext));
      return;
    }
    if (ts.isMappedTypeNode(node) && node.typeParameter) {
      const ext = new Set(activeTp);
      ext.add(node.typeParameter.name.text);
      ts.forEachChild(node, c => walk(c, ext));
      return;
    }
    if (ts.isTypeReferenceNode(node)) {
      const idNode = ts.isIdentifier(node.typeName)
        ? node.typeName
        : node.typeName.right;
      if (idNode && !activeTp.has(idNode.text)) {
        const sym = checker.getSymbolAtLocation(idNode);
        const resolved = sym ? resolveAliased(checker, sym) : undefined;
        if (resolved && !map.has(idNode.text)) {
          map.set(idNode.text, resolved);
        }
      }
      if (node.typeArguments) {
        for (const a of node.typeArguments) walk(a, activeTp);
      }
      return;
    }
    ts.forEachChild(node, c => walk(c, activeTp));
  };
  walk(hRootNode, tpScope);
  return map;
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
  const headModFile = path.resolve(hSf.fileName);
  const headBindingsByName = collectHeadLocalBindingsByName(
    checker,
    hTypeNode,
    new Set([...localTypeParamNames, ...unifiedTypeParamNames]),
  );

  let sawUnified = false;
  let sawUnexplainedLocal = false;

  // Verify head didn't swap a same-named type import from an incompatible internal file (`M6`)!
  const verifyMatchingHeadBinding = (refName, baseResolved) => {
    const hResolved = headBindingsByName.get(refName);
    if (!hResolved) return true;
    if (isErrorType(checker.getDeclaredTypeOfSymbol(hResolved))) return false;
    if (context.verifiedHeadCounterpartMap) {
      const expectedHead = context.verifiedHeadCounterpartMap.get(baseResolved);
      if (expectedHead) {
        return hResolved === expectedHead;
      }
    }
    const bDecl0 = baseResolved.declarations && baseResolved.declarations[0];
    const hDecl0 = hResolved.declarations && hResolved.declarations[0];
    if (!bDecl0 || !hDecl0) return true;
    const bFile = path.resolve(bDecl0.getSourceFile().fileName);
    const hFile = path.resolve(hDecl0.getSourceFile().fileName);
    const mappedHead = mapBaseFileToHeadFile(bFile);
    if (mappedHead && hFile === mappedHead) {
      const bDeclName = bDecl0.name && bDecl0.name.text;
      const hDeclName = hDecl0.name && hDecl0.name.text;
      return hDecl0.kind === bDecl0.kind && bDeclName === hDeclName;
    }
    const bInPkg = isBasePackageFile(bFile, baseModFile);
    const hInPkg = isHeadPackageFile(hFile, headModFile);
    // External `node_modules`/stdlib symbols live in the same SourceFiles across `cmpProg`;
    // forbid both shadowing with an in-package type AND swapping aliased external imports (`Readable` -> `Writable`).
    if (!bInPkg) {
      return !hInPkg && baseResolved === hResolved;
    }
    return true;
  };

  const checkResolvedLocalSymbol = (resolved, refName) => {
    if (!resolved || resolved.flags & ts.SymbolFlags.TypeParameter) return;
    if (refName && !verifyMatchingHeadBinding(refName, resolved)) {
      sawUnexplainedLocal = true;
      return;
    }
    if (context.unifiedModuleSymbols.has(resolved)) {
      sawUnified = true;
      return;
    }
    const bDecl0 = resolved.declarations && resolved.declarations[0];
    const declFile = bDecl0 && path.resolve(bDecl0.getSourceFile().fileName);
    if (declFile && isBasePackageFile(declFile, baseModFile)) {
      if (isSelfContainedUnchangedSymbol(resolved, declFile, context)) {
        const expectedHeadFile = mapBaseFileToHeadFile(declFile);
        const hRes = refName && headBindingsByName.get(refName);
        const hFile =
          hRes &&
          hRes.declarations &&
          hRes.declarations[0] &&
          path.resolve(hRes.declarations[0].getSourceFile().fileName);
        if (!hFile || hFile === expectedHeadFile) {
          sawUnified = true;
          return;
        }
        sawUnexplainedLocal = true;
        return;
      }
      // Co-inductive cycle guard for mutually recursive type aliases / interfaces / classes
      // (e.g. `UpdateData<T> <-> NestedUpdateFields<T> <-> ChildUpdateFields<K, V>`):
      // `verifyMatchingHeadBinding` already confirmed head resolves to the matching declaration.
      if (visitedSymbols.has(resolved)) {
        sawUnified = true;
        return;
      }
      // Follow unchanged in-package helper type aliases, interfaces, and unexported classes
      if (
        (ts.isTypeAliasDeclaration(bDecl0) ||
          ts.isInterfaceDeclaration(bDecl0)) &&
        resolved.declarations.length === 1 &&
        context.program
      ) {
        const hRes = refName && headBindingsByName.get(refName);
        const headFile =
          hRes && hRes.declarations && hRes.declarations[0]
            ? path.resolve(hRes.declarations[0].getSourceFile().fileName)
            : mapBaseFileToHeadFile(declFile);
        const headHelperSf =
          headFile && context.program.getSourceFile(headFile);
        const targetHeadName =
          hRes &&
          hRes.declarations &&
          hRes.declarations[0] &&
          hRes.declarations[0].name
            ? hRes.declarations[0].name.text
            : bDecl0.name.text;
        const hDecls = findMatchingHeadDeclarationsInScope(
          bDecl0,
          headHelperSf,
          targetHeadName,
        );
        if (hDecls.length === 1) {
          const hDecl0 = hDecls[0];
          const bHelperTps = bDecl0.typeParameters || [];
          const hHelperTps = hDecl0.typeParameters || [];
          const sameHelperTpOrder =
            bHelperTps.length === hHelperTps.length &&
            bHelperTps.every(
              (tp, idx) => tp.name.text === hHelperTps[idx].name.text,
            );
          if (sameHelperTpOrder) {
            const nextVisited = new Set(visitedSymbols);
            nextVisited.add(resolved);
            const subTp = new Set(bHelperTps.map(tp => tp.name.text));
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
              // Only cache globally when no outer co-inductive cycle assumption is still open!
              if (visitedSymbols.size === 0) {
                context.unifiedModuleSymbols.add(resolved);
                if (hRes && context.verifiedHeadCounterpartMap) {
                  context.verifiedHeadCounterpartMap.set(resolved, hRes);
                }
              }
              sawUnified = true;
              return;
            }
          }
        }
      }
      if (
        ts.isClassDeclaration(bDecl0) &&
        bDecl0.name &&
        resolved.declarations.length === 1 &&
        context.program
      ) {
        const hRes = refName && headBindingsByName.get(refName);
        const cacheKey = hRes ? hRes : resolved;
        if (
          context.failedHelperSymbols &&
          context.failedHelperSymbols.has(cacheKey)
        ) {
          sawUnexplainedLocal = true;
          return;
        }
        const headFile =
          hRes && hRes.declarations && hRes.declarations[0]
            ? path.resolve(hRes.declarations[0].getSourceFile().fileName)
            : mapBaseFileToHeadFile(declFile);
        const headHelperSf =
          headFile && context.program.getSourceFile(headFile);
        const hDecls = findMatchingHeadDeclarationsInScope(
          bDecl0,
          headHelperSf,
          bDecl0.name.text,
        );
        if (hDecls.length === 1) {
          const hDecl0 = hDecls[0];
          const hClsSym =
            hDecl0.symbol || checker.getSymbolAtLocation(hDecl0.name);
          if (hClsSym) {
            const subErrors = [];
            const provisionalUnified = new Set(context.unifiedModuleSymbols);
            provisionalUnified.add(resolved);
            const provisionalMap = new Map(
              context.verifiedHeadCounterpartMap || [],
            );
            provisionalMap.set(resolved, hClsSym);
            const subContext = {
              ...context,
              unifiedModuleSymbols: provisionalUnified,
              verifiedHeadCounterpartMap: provisionalMap,
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
              if (context.verifiedHeadCounterpartMap) {
                context.verifiedHeadCounterpartMap.set(resolved, hClsSym);
              }
              sawUnified = true;
              return;
            }
            if (!context.failedHelperSymbols) {
              context.failedHelperSymbols = new Set();
            }
            context.failedHelperSymbols.add(cacheKey);
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
        checkResolvedLocalSymbol(resolved, null);
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
          checkResolvedLocalSymbol(resolved, idNode.text);
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
  // including static methods and generic methods on generic classes where TS uses method bivariance!).
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
      if (
        res.baseInst &&
        res.headInst &&
        !isErrorType(res.baseInst) &&
        !isErrorType(res.headInst)
      ) {
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
          // Also verify type-parameter defaults (explicit bridge instantiates `<T, C>`, skipping defaults!).
          if (baseSigs.length === 1 && headSigs.length === 1) {
            const bAr = getSigArity(checker, baseSigs[0]);
            const hAr = getSigArity(checker, headSigs[0]);
            const allTpNames = new Set([
              ...bAr.tpDecls.map(tp => tp.name.text),
              ...hAr.tpDecls.map(tp => tp.name.text),
            ]);
            for (
              let i = 0;
              i < bAr.tpDecls.length && i < hAr.tpDecls.length;
              i++
            ) {
              const bDef = bAr.tpDecls[i].default;
              const hDef = hAr.tpDecls[i].default;
              if (!bDef) continue;
              if (!hDef) {
                errors.push(
                  `${labelPrefix} generic type parameter '${bAr.tpDecls[i].name.text}' default was removed.`,
                );
                return;
              }
              const bDT = checker.getTypeFromTypeNode(bDef);
              const hDT = checker.getTypeFromTypeNode(hDef);
              const defOk =
                (isAssignableCompat(checker, bDT, hDT) &&
                  isAssignableCompat(checker, hDT, bDT)) ||
                isAstTypeExplainedByUnifiedExports(
                  checker,
                  bDef,
                  hDef,
                  context,
                  allTpNames,
                );
              if (!defOk) {
                errors.push(
                  `${labelPrefix} generic type parameter '${bAr.tpDecls[i].name.text}' default changed incompatibly ${formatTypePairDiff(checker, bDT, hDT)}.`,
                );
                return;
              }
            }
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

  // Multi-overload generic functions or fallback unbridged generic methods carry signature-level
  // type parameters (`<T>`) that use TS signature unification plus concrete-constituent checks.
  const hasOwnSigTypeParams = baseSigs.some(
    s => getSigArity(checker, s).maxTp > 0,
  );
  const wholeGenericAssignable =
    hasOwnSigTypeParams &&
    sigKind === ts.SignatureKind.Call &&
    !ignoreReturnType &&
    isAssignableCompat(checker, headType, baseType);

  for (let bIdx = 0; bIdx < baseSigs.length; bIdx++) {
    const bSig = baseSigs[bIdx];
    if (uncoveredAritySigs.has(bSig)) continue;
    const bAr = getSigArity(checker, bSig);
    const sigHasTp = bAr.maxTp > 0;
    const matchIdx = headSigs.findIndex(hSig =>
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
    if (matchIdx === -1) {
      errors.push(
        `${labelPrefix} '${checker.signatureToString(bSig)}' became more restrictive or was removed.`,
      );
      continue;
    }

    // Overload shadowing check (`M6`): detect inserting or reordering a broader concrete overload
    // earlier in `headSigs` that intercepts all calls to `bSig` with an incompatible return type!
    if (
      sigKind === ts.SignatureKind.Call &&
      !ignoreReturnType &&
      !sigHasTp &&
      matchIdx > 0
    ) {
      const wasAlreadyShadowedInBase = baseSigs
        .slice(0, bIdx)
        .some(
          bEarly =>
            getSigArity(checker, bEarly).maxTp === 0 &&
            doesHeadSignatureCoverBase(
              checker,
              bSig,
              bEarly,
              baseSf,
              baseSf,
              context,
              true,
            ) &&
            !doesHeadSignatureCoverBase(
              checker,
              bSig,
              bEarly,
              baseSf,
              baseSf,
              context,
              false,
            ),
        );
      if (!wasAlreadyShadowedInBase) {
        const shadowingHead = headSigs
          .slice(0, matchIdx)
          .find(
            hEarly =>
              getSigArity(checker, hEarly).maxTp === 0 &&
              doesHeadSignatureCoverBase(
                checker,
                bSig,
                hEarly,
                baseSf,
                headSf,
                context,
                true,
              ),
          );
        if (shadowingHead) {
          errors.push(
            `${labelPrefix} '${checker.signatureToString(bSig)}' is shadowed by earlier overload '${checker.signatureToString(shadowingHead)}' with an incompatible return type.`,
          );
        }
      }
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

function areConcreteUnionConstituentsCovered(
  checker,
  cParamType,
  pParamType,
  ownTpSet,
) {
  if (!(cParamType.isUnion && cParamType.isUnion())) return true;
  for (const member of cParamType.types) {
    if (!typeContainsOwnTypeParam(member, ownTpSet, checker)) {
      if (!isAssignableCompat(checker, member, pParamType)) {
        return false;
      }
    }
  }
  return true;
}

function checkTypePredicateCompat(
  checker,
  baseSig,
  headSig,
  context,
  tpScope,
  unifiedConstrainedTpNames,
) {
  const bPred = checker.getTypePredicateOfSignature(baseSig);
  if (!bPred) return true;
  const hPred = checker.getTypePredicateOfSignature(headSig);
  if (!hPred) return false;

  const bIsAsserts =
    bPred.kind === ts.TypePredicateKind.AssertsIdentifier ||
    bPred.kind === ts.TypePredicateKind.AssertsThis;
  const hIsAsserts =
    hPred.kind === ts.TypePredicateKind.AssertsIdentifier ||
    hPred.kind === ts.TypePredicateKind.AssertsThis;
  const bIsThis =
    bPred.kind === ts.TypePredicateKind.This ||
    bPred.kind === ts.TypePredicateKind.AssertsThis;
  const hIsThis =
    hPred.kind === ts.TypePredicateKind.This ||
    hPred.kind === ts.TypePredicateKind.AssertsThis;

  if (bIsAsserts !== hIsAsserts || bIsThis !== hIsThis) return false;
  if (!bIsThis && bPred.parameterIndex !== hPred.parameterIndex) return false;

  if (bPred.type) {
    if (!hPred.type) return false;
    if (isAssignableCompat(checker, hPred.type, bPred.type)) return true;
    const bDecl = baseSig.getDeclaration && baseSig.getDeclaration();
    const hDecl = headSig.getDeclaration && headSig.getDeclaration();
    const bPredNode =
      bDecl && bDecl.type && ts.isTypePredicateNode(bDecl.type)
        ? bDecl.type.type
        : null;
    const hPredNode =
      hDecl && hDecl.type && ts.isTypePredicateNode(hDecl.type)
        ? hDecl.type.type
        : null;
    return isAstTypeExplainedByUnifiedExports(
      checker,
      bPredNode,
      hPredNode,
      context,
      tpScope,
      new Set(),
      false,
      unifiedConstrainedTpNames,
    );
  }
  return true;
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
    if (consumerSig.parameters.length < pArity.minArgs) {
      return false;
    }
  }

  // Generic method/constructor type parameter constraints: base constraint must satisfy head constraint.
  const unifiedConstrainedTpNames = new Set();
  const collectEnclosingTpDecls = sigObj => {
    const d = sigObj.getDeclaration && sigObj.getDeclaration();
    if (!d) return [];
    const isStaticSig = Boolean(
      ts.getCombinedModifierFlags(d) & ts.ModifierFlags.Static,
    );
    const out = [];
    let cur = d.parent;
    while (cur && !ts.isSourceFile(cur)) {
      if (
        (ts.isInterfaceDeclaration(cur) ||
          (ts.isClassDeclaration(cur) && !isStaticSig)) &&
        cur.typeParameters
      ) {
        out.push(...cur.typeParameters);
      }
      cur = cur.parent;
    }
    return out;
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

  // Track positionally identical type parameters whose constraint and default match in both directions.
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

  // Check explicit `this:` parameter compatibility (`M1`).
  if (providerSig.thisParameter) {
    const pDecl = providerSig.getDeclaration && providerSig.getDeclaration();
    const pThisLoc =
      providerSig.thisParameter.valueDeclaration || pDecl || providerSf;
    const pThisType = checker.getTypeOfSymbolAtLocation(
      providerSig.thisParameter,
      pThisLoc,
    );
    if (
      !(
        pThisType.flags &
        (ts.TypeFlags.Void | ts.TypeFlags.Any | ts.TypeFlags.Unknown)
      )
    ) {
      if (!consumerSig.thisParameter) {
        return false;
      }
      const cDecl = consumerSig.getDeclaration && consumerSig.getDeclaration();
      const cThisLoc =
        consumerSig.thisParameter.valueDeclaration || cDecl || consumerSf;
      const cThisType = checker.getTypeOfSymbolAtLocation(
        consumerSig.thisParameter,
        cThisLoc,
      );
      if (!isAssignableCompat(checker, cThisType, pThisType)) {
        const cThisNode =
          consumerSig.thisParameter.valueDeclaration &&
          consumerSig.thisParameter.valueDeclaration.type;
        const pThisNode =
          providerSig.thisParameter.valueDeclaration &&
          providerSig.thisParameter.valueDeclaration.type;
        const bThisNode = polarity === 'normal' ? cThisNode : pThisNode;
        const hThisNode = polarity === 'normal' ? pThisNode : cThisNode;
        if (
          !isAstTypeExplainedByUnifiedExports(
            checker,
            bThisNode,
            hThisNode,
            context,
            allSigTpNames,
            new Set(),
            false,
            unifiedConstrainedTpNames,
          )
        ) {
          return false;
        }
      }
    }
  }

  const getParamTypeInDts = (sig, idx, sf) => {
    const decl = sig.getDeclaration ? sig.getDeclaration() : sig.declaration;
    const hasRestTail =
      decl &&
      decl.parameters &&
      decl.parameters.length > 0 &&
      Boolean(decl.parameters[decl.parameters.length - 1].dotDotDotToken);
    const fixedCount = hasRestTail
      ? sig.parameters.length - 1
      : sig.parameters.length;

    if (idx < fixedCount) {
      const param = sig.parameters[idx];
      const pDecl =
        param.valueDeclaration || (param.declarations && param.declarations[0]);
      return checker.getTypeOfSymbolAtLocation(param, pDecl || decl || sf);
    }
    if (hasRestTail) {
      const restParamIdx = sig.parameters.length - 1;
      const restSym = sig.parameters[restParamIdx];
      const restDecl = decl.parameters[decl.parameters.length - 1];
      const t = checker.getTypeOfSymbolAtLocation(restSym, restDecl || sf);
      if (checker.isTupleType(t)) {
        const tArgs = checker.getTypeArguments(t) || [];
        const offset = idx - fixedCount;
        if (offset < tArgs.length) return tArgs[offset];
        const targetTuple = t.target || t;
        const flags = targetTuple.elementFlags || [];
        if (
          flags.length > 0 &&
          flags[flags.length - 1] &
            (ts.ElementFlags.Rest | ts.ElementFlags.Variadic)
        ) {
          return unwrapRestElementType(checker, tArgs[tArgs.length - 1]);
        }
        return undefined;
      }
      return unwrapRestElementType(checker, t);
    }
    return undefined;
  };

  const maxRestProbe = Math.max(
    consumerSig.parameters.length,
    providerSig.parameters.length + (pArity.maxArgs === Infinity ? 1 : 0),
  );
  const paramCheckCount =
    polarity === 'normal'
      ? Math.min(cArity.maxArgs, maxRestProbe)
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

    if (
      polarity === 'normal' &&
      i < consumerSig.parameters.length &&
      i < providerSig.parameters.length
    ) {
      const cParamDecl = consumerSig.parameters[i].valueDeclaration;
      const cIsRest = Boolean(
        cParamDecl && ts.isParameter(cParamDecl) && cParamDecl.dotDotDotToken,
      );
      const pParamDecl = providerSig.parameters[i].valueDeclaration;
      const pIsRest = Boolean(
        pParamDecl && ts.isParameter(pParamDecl) && pParamDecl.dotDotDotToken,
      );
      const cOpt =
        cIsRest ||
        Boolean(consumerSig.parameters[i].flags & ts.SymbolFlags.Optional);
      const pOpt =
        pIsRest ||
        Boolean(providerSig.parameters[i].flags & ts.SymbolFlags.Optional);
      if (cOpt && !pOpt) return false;
    }

    if (isAssignableCompat(checker, cParamType, pParamType)) {
      continue;
    }

    if (
      ownGenericUnifiedByTS &&
      (typeContainsOwnTypeParam(cParamType, ownTpSet, checker) ||
        typeContainsOwnTypeParam(pParamType, ownTpSet, checker)) &&
      areConcreteUnionConstituentsCovered(
        checker,
        cParamType,
        pParamType,
        ownTpSet,
      )
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

    const cClampedIdx =
      cDecl && cDecl.parameters ? Math.min(i, cDecl.parameters.length - 1) : -1;
    const pClampedIdx =
      pDecl && pDecl.parameters ? Math.min(i, pDecl.parameters.length - 1) : -1;
    const cParamNodeDecl =
      cClampedIdx >= 0 ? cDecl.parameters[cClampedIdx] : null;
    const pParamNodeDecl =
      pClampedIdx >= 0 ? pDecl.parameters[pClampedIdx] : null;
    const cPNode = cParamNodeDecl && cParamNodeDecl.type;
    const pPNode = pParamNodeDecl && pParamNodeDecl.type;
    const cSlotReachable =
      i < consumerSig.parameters.length ||
      Boolean(cParamNodeDecl && cParamNodeDecl.dotDotDotToken);
    const pSlotReachable =
      i < providerSig.parameters.length ||
      Boolean(pParamNodeDecl && pParamNodeDecl.dotDotDotToken);
    const sameRestShape =
      cClampedIdx === pClampedIdx &&
      Boolean(cParamNodeDecl && cParamNodeDecl.dotDotDotToken) ===
        Boolean(pParamNodeDecl && pParamNodeDecl.dotDotDotToken);
    const bPNode = polarity === 'normal' ? cPNode : pPNode;
    const hPNode = polarity === 'normal' ? pPNode : cPNode;
    if (
      cSlotReachable &&
      pSlotReachable &&
      sameRestShape &&
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

    // Inherited external constructor (e.g. `class M<T> extends Set<Item<T> | null> {}`).
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
    if (
      polarity === 'normal' &&
      !checkTypePredicateCompat(
        checker,
        baseSig,
        headSig,
        context,
        allSigTpNames,
        unifiedConstrainedTpNames,
      )
    ) {
      return false;
    }

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
          typeContainsOwnTypeParam(pRet, ownTpSet, checker)) &&
        areConcreteUnionConstituentsCovered(checker, pRet, cRet, ownTpSet)
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
    let valOk;
    if (variance === 'output') {
      valOk = isAssignableCompat(checker, hIdx.type, bIdx.type);
    } else if (variance === 'class') {
      valOk = bIdx.isReadonly
        ? isAssignableCompat(checker, hIdx.type, bIdx.type)
        : isAssignableCompat(checker, hIdx.type, bIdx.type) &&
          isAssignableCompat(checker, bIdx.type, hIdx.type);
    } else {
      valOk = isAssignableCompat(checker, bIdx.type, hIdx.type);
    }
    if (!valOk) {
      errors.push(
        `${ownerLabel}: index signature '[key: ${keyStr}]' value type became incompatible ${formatTypePairDiff(checker, bIdx.type, hIdx.type)}.`,
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
  const {
    verifiedExternalExtends = false,
    skipBuiltinFnProps = false,
    isStaticClassSide = false,
    ownerUnifiedTpNames = new Set(),
  } = options;
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

  const isClassInstance = ownerLabel.startsWith('Class ');
  const isClassOrValue =
    isClassInstance ||
    ownerLabel.startsWith('Value ') ||
    ownerLabel.startsWith('Namespace ');

  for (const bProp of baseProps) {
    const rawName = bProp.getName();
    if (shouldSkipInternalProperty(rawName)) {
      continue;
    }
    if (skipBuiltinFnProps && isBuiltinFunctionProperty(rawName)) {
      continue;
    }
    const displayName = formatPropDisplayName(bProp);
    baseRawNames.add(rawName);
    if (displayName.startsWith('[')) {
      baseDisplayNames.add(displayName);
    }
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

    // Detect inherited visibility demotion (`public open()` moved to `protected open()` on a base class, `M4`).
    if ((isClassInstance || isStaticClassSide) && context.rawMetaByFile) {
      const bDeclMeta = findDeclaringClassMemberMeta(
        bProp,
        context.rawMetaByFile,
        isStaticClassSide,
      );
      const hDeclMeta = findDeclaringClassMemberMeta(
        hProp,
        context.rawMetaByFile,
        isStaticClassSide,
      );
      const bVis =
        bDeclMeta && bDeclMeta.visibility ? bDeclMeta.visibility : 'public';
      const hVis =
        hDeclMeta && hDeclMeta.visibility ? hDeclMeta.visibility : 'public';
      // Direct own-class members were already checked in checkClassMetaRestrictions; catch cross-class inherited demotions cleanly (deduped at end).
      if (
        bVis === 'public' &&
        rankVisibility(hVis) < rankVisibility('public')
      ) {
        const bOwnParent =
          bProp.declarations &&
          bProp.declarations[0] &&
          bProp.declarations[0].parent;
        const hOwnParent =
          hProp.declarations &&
          hProp.declarations[0] &&
          hProp.declarations[0].parent;
        if (
          !bOwnParent ||
          !hOwnParent ||
          !ts.isClassDeclaration(bOwnParent) ||
          !ts.isClassDeclaration(hOwnParent) ||
          (bOwnParent.name && bOwnParent.name.text) !==
            (hOwnParent.name && hOwnParent.name.text)
        ) {
          errors.push(
            `${ownerLabel}: member '${displayName}' visibility was restricted from 'public' to '${hVis}'.`,
          );
          continue;
        }
      }
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

    const bReadonly = isSymbolReadonly(bProp);
    const hReadonly = isSymbolReadonly(hProp);
    if (!bReadonly && hReadonly) {
      errors.push(
        `${ownerLabel}: property '${displayName}' was made readonly.`,
      );
    }

    const bPropType = checker.getTypeOfSymbolAtLocation(bProp, baseSf);
    const hPropType = checker.getTypeOfSymbolAtLocation(hProp, headSf);
    const bWriteType =
      variance === 'class' && !bReadonly
        ? getSymbolWriteType(checker, bProp, baseSf, bPropType)
        : bPropType;
    const hWriteType =
      variance === 'class' && !hReadonly
        ? getSymbolWriteType(checker, hProp, headSf, hPropType)
        : hPropType;
    if (
      bPropType === hPropType &&
      bWriteType === hWriteType &&
      !isErrorType(bPropType)
    ) {
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
      if (variance === 'input' && !isMethodDecl) {
        // Required or optional callback property on input options (`H7`), e.g. `onError: (err: Error) => void`
        const cbCovered =
          isAssignableCompat(checker, nonNullB, nonNullH) ||
          bCallSigs.every(bCb =>
            hCallSigs.some(hCb =>
              doesHeadSignatureCoverBase(
                checker,
                bCb,
                hCb,
                baseSf,
                headSf,
                context,
                false,
                'callback',
                1,
              ),
            ),
          );
        if (!cbCovered) {
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
              new Set(),
              new Set(),
              false,
              ownerUnifiedTpNames,
            )
          ) {
            continue;
          }
          errors.push(
            `${ownerLabel}: callback property '${displayName}' became more restrictive ${formatTypePairDiff(checker, bPropType, hPropType)}.`,
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
      let propOk;
      if (variance === 'output') {
        propOk = isAssignableCompat(checker, hPropType, bPropType);
      } else if (variance === 'class') {
        // `H1`: readonly class/value properties & get-only accessors are covariant;
        // mutable class/value properties require both covariant read and contravariant write!
        const readOk = isAssignableCompat(checker, hPropType, bPropType);
        const writeOk = bReadonly
          ? true
          : isAssignableCompat(checker, bWriteType, hWriteType);
        propOk = readOk && writeOk;
      } else {
        propOk = isAssignableCompat(checker, bPropType, hPropType);
      }
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
            new Set(),
            new Set(),
            false,
            ownerUnifiedTpNames,
          )
        ) {
          continue;
        }
        errors.push(
          `${ownerLabel}: property '${displayName}' became more restrictive ${formatTypePairDiff(checker, bPropType, hPropType)}.`,
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
      } else {
        if (
          bInfo.getterVis &&
          bInfo.getterVis !== 'private' &&
          hInfo.getterVis &&
          rankVisibility(hInfo.getterVis) < rankVisibility(bInfo.getterVis)
        ) {
          errors.push(
            `Class '${exportName}' getter '${mKey}' visibility was restricted from '${bInfo.getterVis}' to '${hInfo.getterVis}'.`,
          );
        }
        if (
          bInfo.setterVis &&
          bInfo.setterVis !== 'private' &&
          ((hInfo.setterVis &&
            rankVisibility(hInfo.setterVis) <
              rankVisibility(bInfo.setterVis)) ||
            (!hInfo.setterVis &&
              hInfo.getterVis !== null &&
              bInfo.setterVis === 'protected'))
        ) {
          errors.push(
            `Class '${exportName}' setter '${mKey}' visibility was restricted from '${bInfo.setterVis}' to '${hInfo.setterVis || 'removed'}'.`,
          );
        }
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
  const unbridgedPositionalOwnerTpNames = new Set();

  if (bTpInfo.max > 0) {
    const key = `${path.resolve(baseSf.fileName)}::type::${exportName}`;
    const probe = context.bridgeResults && context.bridgeResults.get(key);
    let bridgeVerifiedConstraints = false;
    if (probe) {
      if (probe.constraintErrors.length > 0) {
        errors.push(
          `Type '${exportName}' type parameter constraint became more restrictive: ${probe.constraintErrors[0]}`,
        );
        return false;
      }
      if (
        probe.baseInst &&
        probe.headInst &&
        !isErrorType(probe.baseInst) &&
        !isErrorType(probe.headInst)
      ) {
        baseType = probe.baseInst;
        headType = probe.headInst;
        bridgeVerifiedConstraints = true;
      }
    }
    if (!bridgeVerifiedConstraints) {
      // Fallback constraint verification when bridge was skipped or referenced module-private types
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
              new Set(),
              false,
              unbridgedPositionalOwnerTpNames,
            );
        if (!conOk) {
          errors.push(
            `Type '${exportName}' type parameter constraint became more restrictive (was '${bCon ? formatTypeDiagnostic(checker, bCon) : 'unknown'}', now '${formatTypeDiagnostic(checker, hCon)}').`,
          );
          return false;
        }
        if (bTpInfo.decls[i].name.text === hTpInfo.decls[i].name.text) {
          unbridgedPositionalOwnerTpNames.add(bTpInfo.decls[i].name.text);
        }
      }
      // Record remaining unconstrained positionally identical type parameters (`<T>` vs `<T>`, rejecting `<T, U>` -> `<U, T>` swaps).
      let positionalOrderIntact = bTpInfo.decls.length <= hTpInfo.decls.length;
      if (positionalOrderIntact) {
        for (let i = 0; i < bTpInfo.decls.length; i++) {
          if (
            !hTpInfo.decls[i] ||
            bTpInfo.decls[i].name.text !== hTpInfo.decls[i].name.text
          ) {
            positionalOrderIntact = false;
            break;
          }
        }
      }
      if (positionalOrderIntact) {
        for (const tp of bTpInfo.decls) {
          unbridgedPositionalOwnerTpNames.add(tp.name.text);
        }
      } else {
        unbridgedPositionalOwnerTpNames.clear();
      }
    }
    const allOwnerTpNames = new Set([
      ...bTpInfo.decls.map(tp => tp.name.text),
      ...hTpInfo.decls.map(tp => tp.name.text),
    ]);
    for (let i = 0; i < bTpInfo.decls.length && i < hTpInfo.decls.length; i++) {
      const bDef = bTpInfo.decls[i].default;
      const hDef = hTpInfo.decls[i].default;
      if (!bDef) continue;
      if (!hDef) {
        errors.push(
          `Type '${exportName}' type parameter '${bTpInfo.decls[i].name.text}' default was removed.`,
        );
        return false;
      }
      const bDT = checker.getTypeFromTypeNode(bDef);
      const hDT = checker.getTypeFromTypeNode(hDef);
      const defOk =
        (isAssignableCompat(checker, bDT, hDT) &&
          isAssignableCompat(checker, hDT, bDT)) ||
        isAstTypeExplainedByUnifiedExports(
          checker,
          bDef,
          hDef,
          context,
          allOwnerTpNames,
        );
      if (!defOk) {
        errors.push(
          `Type '${exportName}' type parameter '${bTpInfo.decls[i].name.text}' default changed incompatibly ${formatTypePairDiff(checker, bDT, hDT)}.`,
        );
        return false;
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
      {
        verifiedExternalExtends,
        ownerUnifiedTpNames: unbridgedPositionalOwnerTpNames,
      },
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
          new Set(),
          false,
          unbridgedPositionalOwnerTpNames,
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
        new Set(),
        false,
        unbridgedPositionalOwnerTpNames,
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
      {ownerUnifiedTpNames: unbridgedPositionalOwnerTpNames},
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
      `Public type '${exportName}' became more restrictive ${formatTypePairDiff(checker, baseType, headType)}.`,
    );
  }
  return errors.length === startErrLen;
}

function checkNamespaceSubExports(
  checker,
  exportName,
  resolvedBaseSym,
  resolvedHeadSym,
  baseSf,
  headSf,
  context,
  errors,
  visitedNamespaces,
) {
  if (visitedNamespaces.has(resolvedBaseSym)) return;
  visitedNamespaces.add(resolvedBaseSym);

  const bSubExports = (
    checker.getExportsOfModule(resolvedBaseSym) || []
  ).filter(s => s.getName() !== 'prototype');
  if (bSubExports.length === 0) return;

  const hSubExports =
    resolvedHeadSym.flags & ts.SymbolFlags.Module
      ? checker.getExportsOfModule(resolvedHeadSym) || []
      : [];
  const hSubMap = new Map(hSubExports.map(s => [s.getName(), s]));

  // Classify input vs output variance inside large namespaces too (e.g. `FirebaseFirestore`)!
  const nsTargetSymToExpName = new Map();
  const nsTypeFirst = [];
  const nsAliases = [];
  const nsRest = [];
  const isEnumParent = Boolean(resolvedBaseSym.flags & ts.SymbolFlags.Enum);

  for (const bSub of bSubExports) {
    const subName = bSub.getName();
    if (
      isEnumParent &&
      resolveAliased(checker, bSub).flags & ts.SymbolFlags.EnumMember
    ) {
      continue;
    }
    const fullName = `${exportName}.${subName}`;
    if (!hSubMap.has(subName)) {
      errors.push(
        `Namespace '${exportName}': export '${subName}' was removed.`,
      );
      continue;
    }
    const resB = resolveAliased(checker, bSub);
    const resH = resolveAliased(checker, hSubMap.get(subName));
    if (context.verifiedHeadCounterpartMap) {
      context.verifiedHeadCounterpartMap.set(resB, resH);
    }
    if (
      resB.flags & ts.SymbolFlags.Class &&
      resH.flags & ts.SymbolFlags.Class
    ) {
      context.unifiedModuleSymbols.add(resB);
    }
    if (
      resB.flags &
        (ts.SymbolFlags.Interface |
          ts.SymbolFlags.TypeAlias |
          ts.SymbolFlags.Enum) &&
      !(resB.flags & ts.SymbolFlags.Class)
    ) {
      if (!(resB.flags & ts.SymbolFlags.Enum)) {
        nsTargetSymToExpName.set(resB, fullName);
      }
      if (resB.flags & ts.SymbolFlags.TypeAlias) {
        nsAliases.push([bSub, fullName, subName]);
      } else {
        nsTypeFirst.push([bSub, fullName, subName]);
      }
    } else {
      nsRest.push([bSub, fullName, subName]);
    }
  }

  const {inInput, inOutput} = classifyModuleTypeVariance(
    checker,
    bSubExports,
    nsTargetSymToExpName,
  );
  for (const [bSub, fullName, subName] of nsTypeFirst) {
    const resB = resolveAliased(checker, bSub);
    const resH = resolveAliased(checker, hSubMap.get(subName));
    if (
      resB.flags & ts.SymbolFlags.Interface &&
      resH.flags & ts.SymbolFlags.Interface &&
      !(inOutput.has(fullName) && !inInput.has(fullName))
    ) {
      context.unifiedModuleSymbols.add(resB);
    }
  }

  for (const [bSub, fullName, subName] of nsTypeFirst) {
    const v =
      inOutput.has(fullName) && !inInput.has(fullName) ? 'output' : 'input';
    const before = errors.length;
    compareSingleExportPair(
      checker,
      fullName,
      bSub,
      hSubMap.get(subName),
      baseSf,
      headSf,
      context,
      v,
      errors,
      visitedNamespaces,
    );
    const resB = resolveAliased(checker, bSub);
    if (resB.flags & ts.SymbolFlags.Enum && errors.length === before) {
      context.unifiedModuleSymbols.add(resB);
    }
  }
  for (const [bSub, fullName, subName] of nsAliases) {
    const v =
      inOutput.has(fullName) && !inInput.has(fullName) ? 'output' : 'input';
    const before = errors.length;
    compareSingleExportPair(
      checker,
      fullName,
      bSub,
      hSubMap.get(subName),
      baseSf,
      headSf,
      context,
      v,
      errors,
      visitedNamespaces,
    );
    if (v !== 'output' && errors.length === before) {
      context.unifiedModuleSymbols.add(resolveAliased(checker, bSub));
    }
  }
  for (const [bSub, fullName, subName] of nsRest) {
    compareSingleExportPair(
      checker,
      fullName,
      bSub,
      hSubMap.get(subName),
      baseSf,
      headSf,
      context,
      'input',
      errors,
      visitedNamespaces,
    );
  }
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

  if (
    resolvedBaseSym.flags & ts.SymbolFlags.Module &&
    !(
      resolvedBaseSym.flags &
      (ts.SymbolFlags.Class | ts.SymbolFlags.Function | ts.SymbolFlags.Variable)
    )
  ) {
    checkNamespaceSubExports(
      checker,
      exportName,
      resolvedBaseSym,
      resolvedHeadSym,
      baseSf,
      headSf,
      context,
      errors,
      visitedNamespaces,
    );
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

  // Check static class members, plain object value properties, AND callable expando properties (`H5`: e.g. `teenyRequest.defaults`)!
  const hasCustomCallableProps =
    baseConstructSigs.length === 0 &&
    baseCallSigs.length > 0 &&
    checker
      .getPropertiesOfType(baseValType)
      .some(
        p =>
          !shouldSkipInternalProperty(p.getName()) &&
          !isBuiltinFunctionProperty(p.getName()),
      );

  if (
    baseConstructSigs.length > 0 ||
    hasCustomCallableProps ||
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
      {
        skipBuiltinFnProps:
          baseCallSigs.length > 0 && baseConstructSigs.length === 0,
        isStaticClassSide: Boolean(
          resolvedBaseSym.flags & ts.SymbolFlags.Class,
        ),
      },
    );
  } else if (baseConstructSigs.length === 0 && baseCallSigs.length === 0) {
    const bReadonly = isSymbolReadonly(resolvedBaseSym);
    const hReadonly = isSymbolReadonly(resolvedHeadSym);
    if (!bReadonly && hReadonly) {
      errors.push(
        `Exported value '${exportName}' was made readonly ('const').`,
      );
    }
    const covOk = isAssignableCompat(checker, headValType, baseValType);
    const contraOk = isAssignableCompat(checker, baseValType, headValType);
    if (!covOk && !contraOk) {
      errors.push(
        `Exported value '${exportName}' changed incompatibly ${formatTypePairDiff(checker, baseValType, headValType)}.`,
      );
    } else if (!covOk) {
      errors.push(
        `Exported value '${exportName}' type was widened incompatibly for consumers ${formatTypePairDiff(checker, baseValType, headValType)}.`,
      );
    } else if (!bReadonly && !contraOk) {
      errors.push(
        `Mutable exported variable '${exportName}' type was narrowed incompatibly ${formatTypePairDiff(checker, baseValType, headValType)}.`,
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

  const bIsMergedEntity = Boolean(
    resolvedBaseSym.flags &
    (ts.SymbolFlags.Class |
      ts.SymbolFlags.Function |
      ts.SymbolFlags.Enum |
      ts.SymbolFlags.Variable),
  );
  const bIsPureNamespace =
    Boolean(resolvedBaseSym.flags & ts.SymbolFlags.Module) && !bIsMergedEntity;
  const hIsNamespace = Boolean(resolvedHeadSym.flags & ts.SymbolFlags.Module);

  if (bIsPureNamespace) {
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
    checkNamespaceSubExports(
      checker,
      exportName,
      resolvedBaseSym,
      resolvedHeadSym,
      baseSf,
      headSf,
      context,
      errors,
      visitedNamespaces,
    );
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
    } else if (typePassed && variance !== 'output') {
      context.unifiedModuleSymbols.add(resolvedBaseSym);
    } else if (context.unifiedModuleSymbols.has(resolvedBaseSym)) {
      // Remove pre-seeded mutually recursive input interface if it actually failed member verification!
      context.unifiedModuleSymbols.delete(resolvedBaseSym);
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

  // `H5`: Also verify exported types/interfaces/sub-namespaces inside declarations merged with
  // a `namespace` (`class Foo` + `namespace Foo`, `function fn` + `namespace fn`, `enum E` + `namespace E`)!
  if (resolvedBaseSym.flags & ts.SymbolFlags.Module && bIsMergedEntity) {
    checkNamespaceSubExports(
      checker,
      exportName,
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
  const shouldIncludeExportEq = (eqSym, existingList) => {
    if (!eqSym || existingList.includes(eqSym)) return false;
    if (existingList.length === 0) return true;
    const resolvedEq = resolveAliased(checker, eqSym);
    return Boolean(
      resolvedEq.flags &
      (ts.SymbolFlags.Class |
        ts.SymbolFlags.Function |
        ts.SymbolFlags.Variable |
        ts.SymbolFlags.Enum |
        ts.SymbolFlags.Interface |
        ts.SymbolFlags.TypeAlias),
    );
  };
  if (shouldIncludeExportEq(baseEq, baseExports)) baseExports.push(baseEq);
  if (shouldIncludeExportEq(headEq, headExports)) headExports.push(headEq);

  const headExportMap = new Map(headExports.map(s => [s.getName(), s]));

  // Collect exported interface/type-alias symbols to classify input vs output variance.
  const targetSymToExportName = new Map();
  const typeFirstExports = [];
  const compositeAliasExports = [];
  const valueOnlyOrClassExports = [];
  const verifiedHeadCounterpartMap = new Map();

  for (const baseSym of baseExports) {
    const name = baseSym.getName();
    if (!headExportMap.has(name)) {
      errors.push(`Export '${name}' was removed.`);
      continue;
    }
    const resolvedBase = resolveAliased(checker, baseSym);
    const resolvedHead = resolveAliased(checker, headExportMap.get(name));
    verifiedHeadCounterpartMap.set(resolvedBase, resolvedHead);

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
      if (resolvedBase.flags & ts.SymbolFlags.TypeAlias) {
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
  const seedNestedNamespaceClasses = (bNsSym, hNsSym, seen = new Set()) => {
    if (seen.has(bNsSym)) return;
    seen.add(bNsSym);
    const bSubs = checker.getExportsOfModule(bNsSym) || [];
    const hSubs =
      hNsSym.flags & ts.SymbolFlags.Module
        ? new Map(
            (checker.getExportsOfModule(hNsSym) || []).map(s => [
              s.getName(),
              s,
            ]),
          )
        : new Map();
    for (const bSub of bSubs) {
      const name = bSub.getName();
      if (name === 'prototype' || !hSubs.has(name)) continue;
      const rB = resolveAliased(checker, bSub);
      const rH = resolveAliased(checker, hSubs.get(name));
      verifiedHeadCounterpartMap.set(rB, rH);
      if (rB.flags & ts.SymbolFlags.Class && rH.flags & ts.SymbolFlags.Class) {
        unifiedModuleSymbols.add(rB);
      }
      if (
        rB.flags & ts.SymbolFlags.Module &&
        rH.flags & ts.SymbolFlags.Module
      ) {
        seedNestedNamespaceClasses(rB, rH, seen);
      }
    }
  };
  for (const baseSym of baseExports) {
    const exportName = baseSym.getName();
    const headSym = headExportMap.get(exportName);
    if (!headSym) continue;
    const resolvedB = resolveAliased(checker, baseSym);
    const resolvedH = resolveAliased(checker, headSym);
    if (
      resolvedB.flags & ts.SymbolFlags.Module &&
      resolvedH.flags & ts.SymbolFlags.Module
    ) {
      seedNestedNamespaceClasses(resolvedB, resolvedH);
    }
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
    verifiedHeadCounterpartMap,
  };

  const sharedVisitedNamespaces = new Set();

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
      sharedVisitedNamespaces,
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
      sharedVisitedNamespaces,
    );
    if (variance !== 'output' && errors.length === before) {
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
      sharedVisitedNamespaces,
    );
  }

  return [...new Set(errors)];
}

export function runDtsPairComparisons(
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
  const dtsDirs = new Set();
  for (const k of dtsFiles.keys()) {
    let dir = path.dirname(path.resolve(k));
    while (dir && !dtsDirs.has(dir)) {
      dtsDirs.add(dir);
      const next = path.dirname(dir);
      if (next === dir) break;
      dir = next;
    }
  }

  const jsFileMapsToDts = resolved => {
    if (resolved.endsWith('.mjs')) {
      return dtsFiles.has(resolved.slice(0, -4) + '.d.mts');
    }
    if (resolved.endsWith('.cjs')) {
      return dtsFiles.has(resolved.slice(0, -4) + '.d.cts');
    }
    if (resolved.endsWith('.js')) {
      return dtsFiles.has(resolved.slice(0, -3) + '.d.ts');
    }
    return false;
  };

  const dtsHost = {
    ...sharedHost,
    realpath(p) {
      const resolved = path.resolve(p);
      if (dtsFiles.has(resolved)) return resolved;
      return sharedHost.realpath ? sharedHost.realpath(resolved) : resolved;
    },
    directoryExists(dirName) {
      const resolved = path.resolve(dirName);
      if (dtsDirs.has(resolved)) return true;
      return sharedHost.directoryExists(resolved);
    },
    fileExists(fileName) {
      const resolved = path.resolve(fileName);
      if (dtsFiles.has(resolved)) return true;
      // Hide raw .ts/.mts/.cts/.js/.mjs/.cjs counterparts whenever a normalized .d.ts exists in memory!
      if (
        (/\.(c|m)?ts$/.test(resolved) &&
          !isDeclarationFilePath(resolved) &&
          dtsFiles.has(toDtsFileName(resolved))) ||
        jsFileMapsToDts(resolved)
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

  const pairsProbeMeta = [];
  for (const pair of dtsPairs) {
    const bSf = cmpProg.getSourceFile(pair.baseDts);
    const hSf = cmpProg.getSourceFile(pair.headDts);
    const {genericItems, symToExportName, coExportNames} =
      collectGenericProbeItemsFromChecker(checker, bSf, hSf);
    if (genericItems.length > 0) {
      pairsProbeMeta.push({
        baseDts: pair.baseDts,
        headDts: pair.headDts,
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
      '__bcc_generic_bridge__.mts',
    );
    const built = buildGenericBridgeSource(pairsProbeMeta, checker, dtsFiles);
    if (built.taskMap.size > 0) {
      dtsFiles.set(bridgePath, built.bridgeCode);
      dtsDirs.add(path.dirname(bridgePath));
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
