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
  if (!sym) return false;
  if (
    ((sym.checkFlags || (sym.links && sym.links.checkFlags) || 0) & 8) !==
    0
  ) {
    return true; // ts.CheckFlags.Readonly
  }
  const decls = sym.declarations;
  if (!decls || decls.length === 0) return false;
  let sawGetter = false;
  let sawSetter = false;
  let sawProp = false;
  let allPropsReadonly = true;
  for (const d of decls) {
    if (ts.isMappedTypeNode(d) && d.readonlyToken) {
      return d.readonlyToken.kind !== ts.SyntaxKind.MinusToken;
    }
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

function isSymbolWriteonly(sym) {
  const decls = sym && sym.declarations;
  if (!decls || decls.length === 0) return false;
  let sawGetter = false;
  let sawSetter = false;
  let sawProp = false;
  for (const d of decls) {
    if (ts.isGetAccessorDeclaration(d)) {
      const flags = ts.getCombinedModifierFlags(d);
      if (!(flags & ts.ModifierFlags.Private)) sawGetter = true;
    } else if (ts.isSetAccessorDeclaration(d)) {
      const flags = ts.getCombinedModifierFlags(d);
      if (!(flags & ts.ModifierFlags.Private)) sawSetter = true;
    } else if (
      ts.isPropertyDeclaration(d) ||
      ts.isPropertySignature(d) ||
      ts.isParameter(d)
    ) {
      sawProp = true;
    }
  }
  return sawSetter && !sawGetter && !sawProp;
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

  // Plain object literal / mapped / generic reference / interface types (e.g. `GaxiosResponse<any>` or `{ data: any }` -> `{ data: User }`)
  if (
    depth <= 5 &&
    sCallSigs.length === 0 &&
    checker.getSignaturesOfType(source, ts.SignatureKind.Construct).length === 0
  ) {
    const hasRefTypeArgs =
      Boolean(
        source.objectFlags & ts.ObjectFlags.Reference &&
        (checker.getTypeArguments(source) || []).length > 0,
      ) ||
      Boolean(
        target.objectFlags & ts.ObjectFlags.Reference &&
        (checker.getTypeArguments(target) || []).length > 0,
      );
    const shouldCheckProps =
      hasRefTypeArgs ||
      Boolean(
        source.objectFlags &
        (ts.ObjectFlags.Anonymous |
          ts.ObjectFlags.Mapped |
          ts.ObjectFlags.Interface),
      ) ||
      Boolean(
        target.objectFlags &
        (ts.ObjectFlags.Anonymous |
          ts.ObjectFlags.Mapped |
          ts.ObjectFlags.Interface),
      );
    if (shouldCheckProps) {
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

  const registerCandidateSym = rawSym => {
    if (!rawSym) return;
    const resolved = resolveAliased(checker, rawSym);
    if (!resolved || seenSyms.has(resolved)) return;
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
      for (const s of checker.getExportsOfModule(resolved) || []) {
        registerCandidateSym(s);
      }
    }
    const scanTypeRefs = node => {
      if (!node) return;
      if (ts.isTypeReferenceNode(node)) {
        const idNode = ts.isIdentifier(node.typeName)
          ? node.typeName
          : node.typeName.right;
        const refSym = checker.getSymbolAtLocation(idNode);
        if (refSym) registerCandidateSym(refSym);
      } else if (ts.isExpressionWithTypeArguments(node)) {
        const expr = node.expression;
        const idNode = ts.isIdentifier(expr)
          ? expr
          : ts.isPropertyAccessExpression(expr)
            ? expr.name
            : null;
        const refSym = idNode && checker.getSymbolAtLocation(idNode);
        if (refSym) registerCandidateSym(refSym);
      }
      ts.forEachChild(node, scanTypeRefs);
    };
    for (const d of decls) scanTypeRefs(d);
  };

  for (const expSym of rootExports) {
    registerCandidateSym(expSym);
  }

  const varianceBySym = new Map();
  for (const [sym, info] of genericDecls.entries()) {
    varianceBySym.set(
      sym,
      info.tpNames.map(() => ({in: false, out: false})),
    );
  }

  for (let pass = 0; pass < 8; pass++) {
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
        if (ts.isExpressionWithTypeArguments(node)) {
          if (node.typeArguments && node.typeArguments.length > 0) {
            const expr = node.expression;
            const refId = ts.isIdentifier(expr)
              ? expr
              : ts.isPropertyAccessExpression(expr)
                ? expr.name
                : null;
            const refSym = refId && checker.getSymbolAtLocation(refId);
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
        if (ts.isConditionalTypeNode(node)) {
          walkType(node.checkType, 'in');
          walkType(node.checkType, 'out');
          walkType(node.extendsType, 'in');
          walkType(node.extendsType, 'out');
          walkType(node.trueType, pol);
          walkType(node.falseType, pol);
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
            if (
              mFlags & ts.ModifierFlags.Private ||
              (m.name && ts.isPrivateIdentifier(m.name))
            ) {
              continue;
            }
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

  const pendingWorklist = [];
  const queuedWorkKeys = new Set();
  let nextSymId = 1;
  const symIds = new Map();
  const getSymId = sym => {
    let id = symIds.get(sym);
    if (!id) {
      id = nextSymId++;
      symIds.set(sym, id);
    }
    return id;
  };
  const enqueueSymPolarity = (resolved, polarity) => {
    if (!resolved) return;
    if (
      !(
        resolved.flags &
        (ts.SymbolFlags.Interface | ts.SymbolFlags.TypeAlias)
      ) ||
      resolved.flags & ts.SymbolFlags.Class
    ) {
      return;
    }
    const key = `${polarity}::${getSymId(resolved)}`;
    if (!queuedWorkKeys.has(key)) {
      queuedWorkKeys.add(key);
      pendingWorklist.push([resolved, polarity]);
    }
  };

  const recordResolved = (resolved, polarity) => {
    if (!resolved) return;
    const expName = targetSymToExportName.get(resolved);
    if (expName) {
      if (polarity === 'in') inInput.add(expName);
      else inOutput.add(expName);
    }
    enqueueSymPolarity(resolved, polarity);
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
    if (ts.isExpressionWithTypeArguments(node)) {
      const expr = node.expression;
      const idNode = ts.isIdentifier(expr)
        ? expr
        : ts.isPropertyAccessExpression(expr)
          ? expr.name
          : null;
      const sym = idNode ? checker.getSymbolAtLocation(idNode) : undefined;
      const resolvedRef = sym ? resolveAliased(checker, sym) : undefined;
      recordResolved(resolvedRef, polarity);
      if (node.typeArguments && node.typeArguments.length > 0) {
        const refVariances =
          resolvedRef && genericParamVariances.get(resolvedRef);
        for (let i = 0; i < node.typeArguments.length; i++) {
          const arg = node.typeArguments[i];
          const pv = refVariances && refVariances[i];
          if (pv) {
            if (pv.out) visitTypeNode(arg, polarity);
            if (pv.in) visitTypeNode(arg, flipPolarity(polarity));
            if (!pv.in && !pv.out) visitTypeNode(arg, polarity);
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
    if (ts.isConditionalTypeNode(node)) {
      visitTypeNode(node.checkType, 'in');
      visitTypeNode(node.checkType, 'out');
      visitTypeNode(node.extendsType, 'in');
      visitTypeNode(node.extendsType, 'out');
      visitTypeNode(node.trueType, polarity);
      visitTypeNode(node.falseType, polarity);
      return;
    }
    ts.forEachChild(node, child => {
      if (ts.isParameter(child)) {
        visitTypeNode(child.type, flipPolarity(polarity));
      } else if (ts.isMethodSignature(child)) {
        // Interface/type-literal MethodSignatures are always checked via `checkSignatureSetCompatibility`
        // in 'normal' polarity (`checkObjectMembers` line 2802: `if (variance === 'input' && !isMethodDecl)`),
        // so their parameters are always 'in' and return types are always 'out'!
        for (const p of child.parameters) visitTypeNode(p.type, 'in');
        visitTypeNode(child.type, 'out');
      } else if (
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

  const seenClassDecls = new Set();
  const visitClassDeclAndHeritage = clsStmt => {
    if (!clsStmt || seenClassDecls.has(clsStmt)) return;
    seenClassDecls.add(clsStmt);
    if (clsStmt.heritageClauses) {
      for (const hc of clsStmt.heritageClauses) {
        visitTypeNode(hc, 'out');
        for (const expr of hc.types) {
          const baseId = ts.isPropertyAccessExpression(expr.expression)
            ? expr.expression.name
            : expr.expression;
          const baseSym = checker.getSymbolAtLocation(baseId);
          const resolvedBase = baseSym
            ? resolveAliased(checker, baseSym)
            : undefined;
          if (resolvedBase) {
            for (const bd of resolvedBase.declarations || []) {
              if (ts.isClassDeclaration(bd)) {
                visitClassDeclAndHeritage(bd);
              }
            }
          }
        }
      }
    }
    for (const m of clsStmt.members) {
      const mFlags = ts.getCombinedModifierFlags(m);
      if (
        mFlags & ts.ModifierFlags.Private ||
        (m.name && ts.isPrivateIdentifier(m.name))
      ) {
        continue;
      }
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
  };

  const seenModSyms = new Set();
  const visitExportDeclarations = exportsList => {
    for (const expSym of exportsList) {
      const resolved = resolveAliased(checker, expSym);
      if (
        resolved.flags & ts.SymbolFlags.Module &&
        !seenModSyms.has(resolved)
      ) {
        seenModSyms.add(resolved);
        visitExportDeclarations(checker.getExportsOfModule(resolved) || []);
      }
      for (const stmt of resolved.declarations || []) {
        if (ts.isFunctionDeclaration(stmt)) {
          for (const p of stmt.parameters) visitTypeNode(p.type, 'in');
          visitTypeNode(stmt.type, 'out');
        } else if (ts.isVariableDeclaration(stmt)) {
          visitTypeNode(stmt.type, 'out');
        } else if (ts.isClassDeclaration(stmt)) {
          visitClassDeclAndHeritage(stmt);
        } else if (ts.isInterfaceDeclaration(stmt)) {
          for (const m of stmt.members) {
            if (
              ts.isMethodSignature(m) ||
              ts.isCallSignatureDeclaration(m) ||
              ts.isConstructSignatureDeclaration(m)
            ) {
              for (const p of m.parameters) visitTypeNode(p.type, 'in');
              visitTypeNode(m.type, 'out');
            }
          }
        }
      }
    }
  };
  visitExportDeclarations(baseExports);

  // Transitively propagate variance through both exported and unexported interfaces and type aliases
  // (e.g. `query(): Promise<QueryResult>` -> `interface QueryResult { rows: Row[] }` marks `Row` as output).
  while (pendingWorklist.length > 0) {
    const [sym, pol] = pendingWorklist.pop();
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
    if (bVal !== undefined && bVal !== hVal) {
      errors.push(
        `Enum '${exportName}': member '${mName}' value changed (was ${JSON.stringify(bVal)}, now ${hVal === undefined ? 'computed' : JSON.stringify(hVal)}).`,
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

function isHeadPackageFile(filePath, refHeadModFile, refBaseModFile = '') {
  const resolved = path.resolve(filePath);
  if (
    resolved.includes(`${path.sep}node_modules${path.sep}`) ||
    resolved.includes(`${path.sep}__base_pkg__${path.sep}`)
  ) {
    return false;
  }
  const sepBasePkg = `${path.sep}__base_pkg__${path.sep}`;
  if (refBaseModFile && refBaseModFile.includes(sepBasePkg)) {
    const pkgRoot = refBaseModFile.slice(0, refBaseModFile.indexOf(sepBasePkg));
    return resolved === pkgRoot || resolved.startsWith(pkgRoot + path.sep);
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
      refHeadModFile.lastIndexOf(`${path.sep}src${path.sep}`),
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
  if (ts.isVariableDeclaration(bDecl0)) {
    const varDecls = [];
    for (const st of currentStmts) {
      if (!ts.isVariableStatement(st)) continue;
      for (const d of st.declarationList.declarations) {
        if (ts.isIdentifier(d.name) && d.name.text === targetName) {
          varDecls.push(d);
        }
      }
    }
    return varDecls;
  }
  return currentStmts.filter(
    st => st.kind === bDecl0.kind && st.name && st.name.text === targetName,
  );
}

function collectHeadLocalBindingsByName(checker, hRootNode, tpScope) {
  const map = new Map();
  const hSf = hRootNode && hRootNode.getSourceFile();
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
        if (resolved) {
          const fullKey = hSf ? node.typeName.getText(hSf).trim() : idNode.text;
          if (!map.has(fullKey)) {
            map.set(fullKey, resolved);
          }
          if (!map.has(idNode.text)) {
            map.set(idNode.text, resolved);
          }
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
    const hInPkg = isHeadPackageFile(hFile, headModFile, baseModFile);
    // External `node_modules`/stdlib symbols live in the same SourceFiles across `cmpProg`;
    // forbid both shadowing with an in-package type AND swapping aliased external imports (`Readable` -> `Writable`).
    if (!bInPkg) {
      return !hInPkg && baseResolved === hResolved;
    }
    return true;
  };

  const checkResolvedLocalSymbol = (resolved, refName) => {
    if (!resolved) return;
    if (resolved.flags & ts.SymbolFlags.TypeParameter) {
      const tpDecl = resolved.declarations && resolved.declarations[0];
      if (
        tpDecl &&
        tpDecl.getSourceFile() === bSf &&
        tpDecl.pos >= bTypeNode.pos &&
        tpDecl.end <= bTypeNode.end
      ) {
        return;
      }
      sawUnexplainedLocal = true;
      return;
    }
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
          if (visitedSymbols.size === 0) {
            context.unifiedModuleSymbols.add(resolved);
            if (hRes) {
              context.verifiedHeadCounterpartMap.set(resolved, hRes);
            }
          }
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
            const tpMetaOk = bHelperTps.every((bTp, idx) => {
              const hTp = hHelperTps[idx];
              if (Boolean(bTp.constraint) !== Boolean(hTp.constraint)) {
                return false;
              }
              if (
                bTp.constraint &&
                !isAstTypeExplainedByUnifiedExports(
                  checker,
                  bTp.constraint,
                  hTp.constraint,
                  context,
                  subTp,
                  nextVisited,
                  true,
                )
              ) {
                return false;
              }
              if (Boolean(bTp.default) !== Boolean(hTp.default)) {
                return false;
              }
              if (
                bTp.default &&
                !isAstTypeExplainedByUnifiedExports(
                  checker,
                  bTp.default,
                  hTp.default,
                  context,
                  subTp,
                  nextVisited,
                  true,
                )
              ) {
                return false;
              }
              return true;
            });
            const helperOk =
              tpMetaOk &&
              (ts.isTypeAliasDeclaration(bDecl0)
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
                  ));
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
      if (ts.isEnumDeclaration(bDecl0) && bDecl0.name && context.program) {
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
        if (hDecls.length >= 1) {
          const hDecl0 = hDecls[0];
          const hEnumSym =
            hDecl0.symbol || checker.getSymbolAtLocation(hDecl0.name);
          if (hEnumSym) {
            const subErrors = [];
            checkEnumSymbol(
              checker,
              bDecl0.name.text,
              resolved,
              hEnumSym,
              subErrors,
            );
            if (subErrors.length === 0) {
              if (visitedSymbols.size === 0) {
                context.unifiedModuleSymbols.add(resolved);
                if (context.verifiedHeadCounterpartMap) {
                  context.verifiedHeadCounterpartMap.set(resolved, hEnumSym);
                }
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
              ? findMatchingHeadDeclarationsInScope(bDecl0, headQuerySf, fnName)
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
            const hVarDecls = findMatchingHeadDeclarationsInScope(
              bDecl0,
              headQuerySf,
              varName,
            );
            const hVarDecl = hVarDecls[0] || null;
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
          const refKey = bSf ? node.typeName.getText(bSf).trim() : idNode.text;
          checkResolvedLocalSymbol(resolved, refKey);
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

function getNonThisParamNodes(decl) {
  if (!decl || !decl.parameters) return [];
  if (
    decl.parameters.length > 0 &&
    decl.parameters[0].name &&
    ts.isIdentifier(decl.parameters[0].name) &&
    decl.parameters[0].name.text === 'this'
  ) {
    return decl.parameters.slice(1);
  }
  return decl.parameters;
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

  const bOwnTps = bDecl.typeParameters || [];
  const hOwnTps = hDecl.typeParameters || [];
  const sameOwnTpOrder =
    bOwnTps.length <= hOwnTps.length &&
    bOwnTps.every((tp, idx) => tp.name.text === hOwnTps[idx].name.text);
  const tpSet = new Set([
    ...(sameOwnTpOrder ? bOwnTps.map(tp => tp.name.text) : []),
    ...unifiedConstrainedTpNames,
  ]);

  const bParamNodes = getNonThisParamNodes(bDecl);
  const hParamNodes = getNonThisParamNodes(hDecl);
  for (let i = 0; i < baseSig.parameters.length; i++) {
    const bPSym = baseSig.parameters[i];
    const hPSym = headSig.parameters[i];
    if (!bPSym || !hPSym) return false;
    const bPT = checker.getTypeOfSymbolAtLocation(bPSym, bDecl);
    const hPT = checker.getTypeOfSymbolAtLocation(hPSym, hDecl);
    if (isAssignableCompat(checker, bPT, hPT)) continue;
    const bPNode = bParamNodes[i] && bParamNodes[i].type;
    const hPNode = hParamNodes[i] && hParamNodes[i].type;
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
  // including static methods, generic constructors, and generic methods on generic classes where TS uses method bivariance!).
  const bridgedTpCounts = new Set();
  let bridgedAllConstructSigs = false;
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
        const bInstSigs = checker.getSignaturesOfType(res.baseInst, sigKind);
        const hInstSigs = checker.getSignaturesOfType(res.headInst, sigKind);
        if (bInstSigs.length > 0 && hInstSigs.length > 0) {
          const tpSuffix = Number(key.slice(fnBridgeKeyPrefix.length));
          if (sigKind === ts.SignatureKind.Construct) {
            bridgedAllConstructSigs = true;
          } else if (Number.isFinite(tpSuffix) && tpSuffix > 0) {
            bridgedTpCounts.add(tpSuffix);
          } else {
            for (const s of baseSigs) {
              const mtp = getSigArity(checker, s).maxTp;
              if (mtp > 0) bridgedTpCounts.add(mtp);
            }
          }
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
          const bGroupSigs =
            Number.isFinite(tpSuffix) && tpSuffix > 0
              ? baseSigs.filter(s => getSigArity(checker, s).maxTp === tpSuffix)
              : baseSigs;
          const hGroupSigs =
            Number.isFinite(tpSuffix) && tpSuffix > 0
              ? headSigs.filter(s => {
                  const hAr = getSigArity(checker, s);
                  return hAr.minTp <= tpSuffix && hAr.maxTp >= tpSuffix;
                })
              : headSigs;
          for (const bSig of bGroupSigs) {
            const bAr = getSigArity(checker, bSig);
            if (!bAr.tpDecls.some(tp => Boolean(tp.default))) continue;
            if (bGroupSigs.length === 1 && hGroupSigs.length === 1) {
              const hAr = getSigArity(checker, hGroupSigs[0]);
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
            } else {
              const coveredByHead = hGroupSigs.some(hSig => {
                const hAr = getSigArity(checker, hSig);
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
                  if (!hDef) return false;
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
                  if (!defOk) return false;
                }
                return true;
              });
              if (!coveredByHead) {
                errors.push(
                  `${labelPrefix} generic type parameter default was removed or changed incompatibly.`,
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
    if (voidBrokeToPromise) {
      return;
    }
  }
  if (
    bridgedAllConstructSigs ||
    (bridgedTpCounts.size > 0 &&
      baseSigs.every(s => bridgedTpCounts.has(getSigArity(checker, s).maxTp)))
  ) {
    return;
  }

  // Multi-overload generic functions or fallback unbridged generic methods carry signature-level
  // type parameters (`<T>`) that use TS signature unification plus concrete-constituent checks.
  const hasOwnSigTypeParams = baseSigs.some(
    s => getSigArity(checker, s).maxTp > 0,
  );
  const wholeGenericAssignable =
    hasOwnSigTypeParams &&
    !ignoreReturnType &&
    isAssignableCompat(checker, headType, baseType);

  for (let bIdx = 0; bIdx < baseSigs.length; bIdx++) {
    const bSig = baseSigs[bIdx];
    if (uncoveredAritySigs.has(bSig)) continue;
    const bAr = getSigArity(checker, bSig);
    const sigHasTp = bAr.maxTp > 0;
    if (sigHasTp && bridgedTpCounts.has(bAr.maxTp)) continue;
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
      const escaped = tpName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (
        new RegExp(`(?<![A-Za-z0-9_$])${escaped}(?![A-Za-z0-9_$])`).test(str)
      ) {
        return true;
      }
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
  depth = 0,
  allowFallback = true,
) {
  if (depth > 4) return true;
  if (!typeContainsOwnTypeParam(cParamType, ownTpSet, checker)) {
    return isAssignableCompat(checker, cParamType, pParamType);
  }
  const isBareOwnTpCovered = (tpType, targetType) => {
    if (!targetType) return false;
    if (targetType.flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown)) {
      return true;
    }
    if (
      targetType.flags & ts.TypeFlags.TypeParameter &&
      targetType.symbol &&
      tpType.symbol &&
      ownTpSet.has(targetType.symbol.getName()) &&
      targetType.symbol.getName() === tpType.symbol.getName()
    ) {
      return true;
    }
    if (targetType.isUnion && targetType.isUnion()) {
      return targetType.types.some(m => isBareOwnTpCovered(tpType, m));
    }
    const con =
      checker.getBaseConstraintOfType(tpType) || checker.getUnknownType();
    return isAssignableCompat(checker, con, targetType);
  };
  if (
    cParamType.flags & ts.TypeFlags.TypeParameter &&
    cParamType.symbol &&
    ownTpSet.has(cParamType.symbol.getName())
  ) {
    return isBareOwnTpCovered(cParamType, pParamType);
  }
  if (cParamType.isUnion && cParamType.isUnion()) {
    return cParamType.types.every(member =>
      areConcreteUnionConstituentsCovered(
        checker,
        member,
        pParamType,
        ownTpSet,
        depth + 1,
        allowFallback,
      ),
    );
  }
  const cArgs = checker.getTypeArguments(cParamType) || [];
  const pArgs = checker.getTypeArguments(pParamType) || [];
  if (cArgs.length > 0) {
    if (pParamType.isUnion && pParamType.isUnion()) {
      return pParamType.types.some(pm =>
        areConcreteUnionConstituentsCovered(
          checker,
          cParamType,
          pm,
          ownTpSet,
          depth + 1,
          allowFallback,
        ),
      );
    }
    const cName = cParamType.symbol && cParamType.symbol.getName();
    const pName = pParamType.symbol && pParamType.symbol.getName();
    if (
      cArgs.length === pArgs.length &&
      ((cParamType.symbol && cParamType.symbol === pParamType.symbol) ||
        (checker.isTupleType(cParamType) && checker.isTupleType(pParamType)) ||
        shareCovariantContainerGroup(cName, pName))
    ) {
      return cArgs.every((cArg, idx) =>
        areConcreteUnionConstituentsCovered(
          checker,
          cArg,
          pArgs[idx],
          ownTpSet,
          depth + 1,
          allowFallback,
        ),
      );
    }
    return Boolean(
      pParamType.flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown),
    );
  }
  return allowFallback;
}

function hasTpModifier(tp, kind) {
  const mods = (tp && ts.canHaveModifiers(tp) && ts.getModifiers(tp)) || [];
  return mods.some(m => m.kind === kind);
}

function hasTypeFlagInUnion(t, flag) {
  if (!t) return false;
  if (t.flags & flag) return true;
  if (t.isUnion && t.isUnion()) {
    return t.types.some(m => Boolean(m.flags & flag));
  }
  return false;
}

function checkTypePredicateCompat(
  checker,
  consumerSig,
  providerSig,
  context,
  tpScope,
  unifiedConstrainedTpNames,
  polarity = 'normal',
) {
  const cPred = checker.getTypePredicateOfSignature(consumerSig);
  if (!cPred) return true;
  const pPred = checker.getTypePredicateOfSignature(providerSig);
  if (!pPred) return false;

  const cIsAsserts =
    cPred.kind === ts.TypePredicateKind.AssertsIdentifier ||
    cPred.kind === ts.TypePredicateKind.AssertsThis;
  const pIsAsserts =
    pPred.kind === ts.TypePredicateKind.AssertsIdentifier ||
    pPred.kind === ts.TypePredicateKind.AssertsThis;
  const cIsThis =
    cPred.kind === ts.TypePredicateKind.This ||
    cPred.kind === ts.TypePredicateKind.AssertsThis;
  const pIsThis =
    pPred.kind === ts.TypePredicateKind.This ||
    pPred.kind === ts.TypePredicateKind.AssertsThis;

  if (cIsAsserts !== pIsAsserts || cIsThis !== pIsThis) return false;
  if (!cIsThis && cPred.parameterIndex !== pPred.parameterIndex) return false;

  if (cPred.type) {
    if (!pPred.type) return false;
    if (isAssignableCompat(checker, pPred.type, cPred.type)) return true;
    const cDecl = consumerSig.getDeclaration && consumerSig.getDeclaration();
    const pDecl = providerSig.getDeclaration && providerSig.getDeclaration();
    const cPredNode =
      cDecl && cDecl.type && ts.isTypePredicateNode(cDecl.type)
        ? cDecl.type.type
        : null;
    const pPredNode =
      pDecl && pDecl.type && ts.isTypePredicateNode(pDecl.type)
        ? pDecl.type.type
        : null;
    return isAstTypeExplainedByUnifiedExports(
      checker,
      polarity === 'normal' ? cPredNode : pPredNode,
      polarity === 'normal' ? pPredNode : cPredNode,
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
    if (cArity.minArgs < pArity.minArgs || cArity.maxArgs < pArity.maxArgs) {
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
    let cur = ts.isClassLike(d) ? d : d.parent;
    while (cur && !ts.isSourceFile(cur)) {
      if (
        (ts.isInterfaceDeclaration(cur) ||
          (ts.isClassDeclaration(cur) && !isStaticSig)) &&
        cur.typeParameters
      ) {
        if (context && context.currentOwnerBaseSym) {
          const isCurrentOwner =
            (context.currentOwnerBaseSym.declarations || []).includes(cur) ||
            Boolean(
              context.currentOwnerHeadSym &&
              (context.currentOwnerHeadSym.declarations || []).includes(cur),
            );
          if (isCurrentOwner) {
            for (const tp of cur.typeParameters) {
              if (
                !context.ownerUnifiedTpNames ||
                context.ownerUnifiedTpNames.has(tp.name.text)
              ) {
                out.push(tp);
              }
            }
          } else if (context.ownerHeritageUnified) {
            out.push(...cur.typeParameters);
          }
        } else {
          out.push(...cur.typeParameters);
        }
      }
      cur = cur.parent;
    }
    return out;
  };
  const cEnclosingTpDecls = collectEnclosingTpDecls(consumerSig);
  const pEnclosingTpDecls = collectEnclosingTpDecls(providerSig);
  const cTpDeclsFull = [...cArity.tpDecls, ...cEnclosingTpDecls];
  const pTpDeclsFull = [...pArity.tpDecls, ...pEnclosingTpDecls];
  const allSigTpNames = new Set([
    ...cTpDeclsFull.map(tp => tp.name.text),
    ...pTpDeclsFull.map(tp => tp.name.text),
  ]);
  for (let i = 0; i < cArity.tpDecls.length && i < pArity.tpDecls.length; i++) {
    if (
      polarity === 'normal' &&
      hasTpModifier(cArity.tpDecls[i], ts.SyntaxKind.ConstKeyword) &&
      !hasTpModifier(pArity.tpDecls[i], ts.SyntaxKind.ConstKeyword)
    ) {
      return false;
    }
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
  const verifyPositionalTpList = (cList, pList) => {
    if (polarity !== 'normal' || cList.length > pList.length) return;
    let allPositionalMatch = true;
    const candidateTpNames = [];
    for (let i = 0; i < cList.length; i++) {
      const bTp = cList[i];
      const hTp = pList[i];
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
  };
  verifyPositionalTpList(cArity.tpDecls, pArity.tpDecls);
  verifyPositionalTpList(cEnclosingTpDecls, pEnclosingTpDecls);

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
    consumerSig.parameters.length + (cArity.maxArgs === Infinity ? 1 : 0),
    providerSig.parameters.length + (pArity.maxArgs === Infinity ? 1 : 0),
  );
  const paramCheckCount = Math.min(
    polarity === 'normal' ? cArity.maxArgs : pArity.maxArgs,
    maxRestProbe,
  );

  const ownTpSet =
    ownGenericUnifiedByTS || unifiedConstrainedTpNames.size > 0
      ? new Set([
          ...(ownGenericUnifiedByTS
            ? [
                ...cArity.tpDecls.map(tp => tp.name.text),
                ...pArity.tpDecls.map(tp => tp.name.text),
              ]
            : []),
          ...unifiedConstrainedTpNames,
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

    // Check function/callback parameters with properly flipped polarity!
    const nonNullC = checker.getNonNullableType(cParamType);
    const nonNullP = checker.getNonNullableType(pParamType);
    const cCbSigs = checker.getSignaturesOfType(
      nonNullC,
      ts.SignatureKind.Call,
    );
    const pCbSigs = checker.getSignaturesOfType(
      nonNullP,
      ts.SignatureKind.Call,
    );
    const hasCbSigs = cCbSigs.length > 0 && pCbSigs.length > 0;
    const isDirectAssignable = isAssignableCompat(
      checker,
      cParamType,
      pParamType,
    );
    if (isDirectAssignable && !hasCbSigs) {
      continue;
    }

    if (
      ownTpSet.size > 0 &&
      !hasCbSigs &&
      (typeContainsOwnTypeParam(cParamType, ownTpSet, checker) ||
        typeContainsOwnTypeParam(pParamType, ownTpSet, checker)) &&
      areConcreteUnionConstituentsCovered(
        checker,
        cParamType,
        pParamType,
        ownTpSet,
        0,
        ownGenericUnifiedByTS,
      )
    ) {
      continue;
    }

    if (
      hasTypeFlagInUnion(cParamType, ts.TypeFlags.Null) &&
      !hasTypeFlagInUnion(pParamType, ts.TypeFlags.Null)
    ) {
      return false;
    }
    if (
      hasTypeFlagInUnion(cParamType, ts.TypeFlags.Undefined) &&
      !hasTypeFlagInUnion(pParamType, ts.TypeFlags.Undefined)
    ) {
      return false;
    }

    if (hasCbSigs) {
      const nextPolarity = polarity === 'normal' ? 'callback' : 'normal';
      const cbUnifiedByTS =
        isDirectAssignable || isAssignableCompat(checker, nonNullC, nonNullP);
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
                cbUnifiedByTS,
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
                cbUnifiedByTS,
              ),
        ),
      );
      if (cbOk) {
        if (isDirectAssignable) continue;
        const cCustomProps = checker
          .getPropertiesOfType(nonNullC)
          .filter(pr => !isBuiltinFunctionProperty(pr.getName()));
        const pCustomProps = checker
          .getPropertiesOfType(nonNullP)
          .filter(pr => !isBuiltinFunctionProperty(pr.getName()));
        if (cCustomProps.length === 0 && pCustomProps.length === 0) {
          continue;
        }
      }
    }

    // Check if parameter mismatch is solely over already-verified exported types/classes/symbols.
    const cDecl = consumerSig.getDeclaration && consumerSig.getDeclaration();
    const pDecl = providerSig.getDeclaration && providerSig.getDeclaration();
    const sameOwnSigTpOrder =
      cArity.tpDecls.length <= pArity.tpDecls.length &&
      cArity.tpDecls.every(
        (tp, idx) => tp.name.text === pArity.tpDecls[idx].name.text,
      );
    const sigTpScope = new Set([
      ...(sameOwnSigTpOrder ? cArity.tpDecls.map(tp => tp.name.text) : []),
      ...unifiedConstrainedTpNames,
    ]);

    const cParamNodes = getNonThisParamNodes(cDecl);
    const pParamNodes = getNonThisParamNodes(pDecl);
    const cClampedIdx =
      cParamNodes.length > 0 ? Math.min(i, cParamNodes.length - 1) : -1;
    const pClampedIdx =
      pParamNodes.length > 0 ? Math.min(i, pParamNodes.length - 1) : -1;
    const cParamNodeDecl = cClampedIdx >= 0 ? cParamNodes[cClampedIdx] : null;
    const pParamNodeDecl = pClampedIdx >= 0 ? pParamNodes[pClampedIdx] : null;
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
      !checkTypePredicateCompat(
        checker,
        consumerSig,
        providerSig,
        context,
        allSigTpNames,
        unifiedConstrainedTpNames,
        polarity,
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
        ownTpSet.size > 0 &&
        (typeContainsOwnTypeParam(cRet, ownTpSet, checker) ||
          typeContainsOwnTypeParam(pRet, ownTpSet, checker)) &&
        areConcreteUnionConstituentsCovered(
          checker,
          pRet,
          cRet,
          ownTpSet,
          0,
          ownGenericUnifiedByTS,
        )
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
  context,
  variance,
  errors,
  ownerUnifiedTpNames = new Set(),
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
    } else if (bIdx.isReadonly && !hIdx.isReadonly && variance === 'input') {
      errors.push(
        `${ownerLabel}: index signature '[key: ${keyStr}]' removed 'readonly' modifier on input type.`,
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
    if (
      !valOk &&
      context &&
      bIdx.declaration &&
      bIdx.declaration.type &&
      hIdx.declaration &&
      hIdx.declaration.type &&
      isAstTypeExplainedByUnifiedExports(
        checker,
        bIdx.declaration.type,
        hIdx.declaration.type,
        context,
        new Set(),
        new Set(),
        false,
        ownerUnifiedTpNames,
      )
    ) {
      valOk = true;
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
      const bOwnParent =
        bProp.declarations &&
        bProp.declarations[0] &&
        bProp.declarations[0].parent;
      const hOwnParent =
        hProp.declarations &&
        hProp.declarations[0] &&
        hProp.declarations[0].parent;
      const isDirectOnCurrentOwner = Boolean(
        context &&
        context.currentOwnerBaseSym &&
        context.currentOwnerHeadSym &&
        bOwnParent &&
        hOwnParent &&
        (context.currentOwnerBaseSym.declarations || []).includes(bOwnParent) &&
        (context.currentOwnerHeadSym.declarations || []).includes(hOwnParent),
      );
      // Direct own-class members were already checked in checkClassMetaRestrictions; catch inherited demotions cleanly (deduped at end).
      if (!isDirectOnCurrentOwner) {
        if (bVis !== 'private' && rankVisibility(hVis) < rankVisibility(bVis)) {
          errors.push(
            `${ownerLabel}: member '${displayName}' visibility was restricted from '${bVis}' to '${hVis}'.`,
          );
          continue;
        }
        if (bDeclMeta && hDeclMeta) {
          const bHasAccessor =
            bDeclMeta.getterVis !== null || bDeclMeta.setterVis !== null;
          const hHasAccessor =
            hDeclMeta.getterVis !== null || hDeclMeta.setterVis !== null;
          if (bHasAccessor || hHasAccessor) {
            const bReadVis = bHasAccessor ? bDeclMeta.getterVis : bVis;
            const hReadVis = hHasAccessor ? hDeclMeta.getterVis : hVis;
            const bWriteVis = bHasAccessor
              ? bDeclMeta.setterVis
              : bDeclMeta.isReadonly
                ? null
                : bVis;
            const hWriteVis = hHasAccessor
              ? hDeclMeta.setterVis
              : hDeclMeta.isReadonly
                ? null
                : hVis;
            if (
              bReadVis &&
              bReadVis !== 'private' &&
              ((hReadVis &&
                rankVisibility(hReadVis) < rankVisibility(bReadVis)) ||
                (!hReadVis && hWriteVis !== null))
            ) {
              errors.push(
                `${ownerLabel}: getter '${displayName}' visibility was restricted from '${bReadVis}' to '${hReadVis || 'removed'}'.`,
              );
            }
            if (
              bWriteVis &&
              bWriteVis !== 'private' &&
              ((hWriteVis &&
                rankVisibility(hWriteVis) < rankVisibility(bWriteVis)) ||
                (!hWriteVis &&
                  hReadVis !== null &&
                  bDeclMeta.setterVis === 'protected'))
            ) {
              errors.push(
                `${ownerLabel}: setter '${displayName}' visibility was restricted from '${bWriteVis}' to '${hWriteVis || 'removed'}'.`,
              );
            }
          }
          if (!bDeclMeta.isAbstract && hDeclMeta.isAbstract) {
            errors.push(
              `${ownerLabel}: member '${displayName}' was made abstract.`,
            );
          }
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
    const bWriteonly = isSymbolWriteonly(bProp);
    const hWriteonly = isSymbolWriteonly(hProp);
    if (
      !bWriteonly &&
      hWriteonly &&
      (isClassOrValue || variance === 'output')
    ) {
      errors.push(
        `${ownerLabel}: property '${displayName}' became write-only (getter removed).`,
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
    const isInheritedFromAncestor = Boolean(
      bDecl &&
      bDecl.parent &&
      context &&
      context.currentOwnerBaseSym &&
      !(context.currentOwnerBaseSym.declarations || []).includes(bDecl.parent),
    );
    let effectiveMemberTpNames = ownerUnifiedTpNames;
    if (isInheritedFromAncestor && context) {
      if (!context.ownerHeritageUnified) {
        effectiveMemberTpNames = new Set();
      } else {
        const bP = bDecl.parent;
        const hP = hDeclForOrigin && hDeclForOrigin.parent;
        const bPTps = (bP && bP.typeParameters) || [];
        const hPTps = (hP && hP.typeParameters) || [];
        if (
          bPTps.length <= hPTps.length &&
          bPTps.every((tp, idx) => tp.name.text === hPTps[idx].name.text)
        ) {
          effectiveMemberTpNames = new Set([
            ...ownerUnifiedTpNames,
            ...bPTps.map(tp => tp.name.text),
          ]);
        } else {
          effectiveMemberTpNames = new Set();
        }
      }
    }

    if (bCallSigs.length > 0 && (isMethodDecl || hCallSigs.length > 0)) {
      if (variance === 'input' && !isMethodDecl) {
        // Required or optional callback property on input options (`H7`), e.g. `onError: (err: Error) => void`
        const nullishCompatible =
          (!hasTypeFlagInUnion(bPropType, ts.TypeFlags.Null) ||
            hasTypeFlagInUnion(hPropType, ts.TypeFlags.Null)) &&
          (!hasTypeFlagInUnion(bPropType, ts.TypeFlags.Undefined) ||
            hasTypeFlagInUnion(hPropType, ts.TypeFlags.Undefined) ||
            hPropOpt);
        const cbDirectOk = isAssignableCompat(checker, nonNullB, nonNullH);
        const cbCovered =
          nullishCompatible &&
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
                cbDirectOk,
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
            nullishCompatible &&
            isAstTypeExplainedByUnifiedExports(
              checker,
              bDeclNode,
              hDeclNode,
              context,
              new Set(),
              new Set(),
              false,
              effectiveMemberTpNames,
            )
          ) {
            continue;
          }
          errors.push(
            `${ownerLabel}: callback property '${displayName}' became more restrictive ${formatTypePairDiff(checker, bPropType, hPropType)}.`,
          );
        }
      } else {
        const readNullishOk =
          (hasTypeFlagInUnion(bPropType, ts.TypeFlags.Null) ||
            !hasTypeFlagInUnion(hPropType, ts.TypeFlags.Null)) &&
          (hasTypeFlagInUnion(bPropType, ts.TypeFlags.Undefined) ||
            bPropOpt ||
            !hasTypeFlagInUnion(hPropType, ts.TypeFlags.Undefined));
        const writeNullishOk =
          variance !== 'class' ||
          bReadonly ||
          isMethodDecl ||
          ((!hasTypeFlagInUnion(bWriteType, ts.TypeFlags.Null) ||
            hasTypeFlagInUnion(hWriteType, ts.TypeFlags.Null)) &&
            (!hasTypeFlagInUnion(bWriteType, ts.TypeFlags.Undefined) ||
              hasTypeFlagInUnion(hWriteType, ts.TypeFlags.Undefined) ||
              hPropOpt));
        if (!readNullishOk || !writeNullishOk) {
          errors.push(
            `${ownerLabel}: property '${displayName}' became more restrictive ${formatTypePairDiff(checker, bPropType, hPropType)}.`,
          );
          continue;
        }
        const methodPrefix = `${path.resolve(baseSf.fileName)}::method::${ownerLabel}::${displayName}::`;
        const beforeSigErrLen = errors.length;
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
        // Mutable non-method function property on a class/value (`hook: (req: string) => string`)
        // also supports user assignment (`instance.hook = ...`), requiring contravariant write compatibility!
        if (
          errors.length === beforeSigErrLen &&
          variance === 'class' &&
          !bReadonly &&
          !isMethodDecl
        ) {
          const writeDirectOk = isAssignableCompat(checker, nonNullB, nonNullH);
          const writeCovered = bCallSigs.every(bCb =>
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
                writeDirectOk,
              ),
            ),
          );
          if (!writeCovered) {
            const bDeclNode = bDecl && bDecl.type;
            const hDecl =
              hProp.valueDeclaration ||
              (hProp.declarations && hProp.declarations[0]);
            const hDeclNode = hDecl && hDecl.type;
            if (
              !isAstTypeExplainedByUnifiedExports(
                checker,
                bDeclNode,
                hDeclNode,
                context,
                new Set(),
                new Set(),
                false,
                effectiveMemberTpNames,
              )
            ) {
              errors.push(
                `${ownerLabel}: property '${displayName}' became more restrictive ${formatTypePairDiff(checker, bPropType, hPropType)}.`,
              );
            }
          }
        }
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
            effectiveMemberTpNames,
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
    context,
    variance,
    errors,
    ownerUnifiedTpNames,
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
        const bHasAccessor =
          bInfo.getterVis !== null || bInfo.setterVis !== null;
        const hHasAccessor =
          hInfo.getterVis !== null || hInfo.setterVis !== null;
        if (bHasAccessor || hHasAccessor) {
          const bReadVis = bHasAccessor ? bInfo.getterVis : bInfo.visibility;
          const hReadVis = hHasAccessor ? hInfo.getterVis : hInfo.visibility;
          const bWriteVis = bHasAccessor
            ? bInfo.setterVis
            : bInfo.isReadonly
              ? null
              : bInfo.visibility;
          const hWriteVis = hHasAccessor
            ? hInfo.setterVis
            : hInfo.isReadonly
              ? null
              : hInfo.visibility;
          if (
            bReadVis &&
            bReadVis !== 'private' &&
            ((hReadVis &&
              rankVisibility(hReadVis) < rankVisibility(bReadVis)) ||
              (!hReadVis && hWriteVis !== null))
          ) {
            errors.push(
              `Class '${exportName}' getter '${mKey}' visibility was restricted from '${bReadVis}' to '${hReadVis || 'removed'}'.`,
            );
          }
          if (
            bWriteVis &&
            bWriteVis !== 'private' &&
            ((hWriteVis &&
              rankVisibility(hWriteVis) < rankVisibility(bWriteVis)) ||
              (!hWriteVis &&
                hReadVis !== null &&
                bInfo.setterVis === 'protected'))
          ) {
            errors.push(
              `Class '${exportName}' setter '${mKey}' visibility was restricted from '${bWriteVis}' to '${hWriteVis || 'removed'}'.`,
            );
          }
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

function areOwnerHeritageClausesUnified(
  checker,
  baseSym,
  headSym,
  context,
  ownerUnifiedTpNames,
  visited = new Set(),
) {
  if (!baseSym || !headSym || visited.has(baseSym)) return true;
  visited.add(baseSym);

  const collectHeritageExprs = sym => {
    const exprs = [];
    for (const d of sym.declarations || []) {
      if (
        (ts.isClassDeclaration(d) || ts.isInterfaceDeclaration(d)) &&
        d.heritageClauses
      ) {
        for (const hc of d.heritageClauses) {
          if (hc.token === ts.SyntaxKind.ExtendsKeyword) {
            exprs.push(...hc.types);
          }
        }
      }
    }
    return exprs;
  };

  const bExprs = collectHeritageExprs(baseSym);
  const hExprs = collectHeritageExprs(headSym);
  if (bExprs.length === 0 && hExprs.length === 0) return true;
  if (bExprs.length !== hExprs.length) return false;

  for (let i = 0; i < bExprs.length; i++) {
    const bExpr = bExprs[i];
    const hExpr = hExprs[i];
    const bSf = bExpr.getSourceFile();
    const hSf = hExpr.getSourceFile();
    const bHeadText = bExpr.expression.getText(bSf).trim();
    const hHeadText = hExpr.expression.getText(hSf).trim();
    if (bHeadText !== hHeadText) return false;

    const bArgs = bExpr.typeArguments || [];
    const hArgs = hExpr.typeArguments || [];
    if (bArgs.length !== hArgs.length) return false;
    for (let j = 0; j < bArgs.length; j++) {
      if (
        !isAstTypeExplainedByUnifiedExports(
          checker,
          bArgs[j],
          hArgs[j],
          context,
          ownerUnifiedTpNames,
          new Set(),
          true,
          ownerUnifiedTpNames,
        )
      ) {
        return false;
      }
    }

    const bBaseSym = checker.getSymbolAtLocation(
      ts.isPropertyAccessExpression(bExpr.expression)
        ? bExpr.expression.name
        : bExpr.expression,
    );
    const hBaseSym = checker.getSymbolAtLocation(
      ts.isPropertyAccessExpression(hExpr.expression)
        ? hExpr.expression.name
        : hExpr.expression,
    );
    const resB = bBaseSym ? resolveAliased(checker, bBaseSym) : undefined;
    const resH = hBaseSym ? resolveAliased(checker, hBaseSym) : undefined;
    if (resB && resH) {
      const bTpInfo = getTypeParameterDecls(resB);
      const hTpInfo = getTypeParameterDecls(resH);
      const ancTpNames = new Set();
      if (
        bTpInfo.decls.length <= hTpInfo.decls.length &&
        bTpInfo.decls.every(
          (tp, idx) => tp.name.text === hTpInfo.decls[idx].name.text,
        )
      ) {
        for (const tp of bTpInfo.decls) ancTpNames.add(tp.name.text);
      } else if (bTpInfo.decls.length > 0 || hTpInfo.decls.length > 0) {
        return false;
      }
      for (
        let k = bArgs.length;
        k < bTpInfo.decls.length && k < hTpInfo.decls.length;
        k++
      ) {
        const bDef = bTpInfo.decls[k].default;
        const hDef = hTpInfo.decls[k].default;
        if (Boolean(bDef) !== Boolean(hDef)) return false;
        if (
          bDef &&
          !isAstTypeExplainedByUnifiedExports(
            checker,
            bDef,
            hDef,
            context,
            ancTpNames,
            new Set(),
            true,
            ancTpNames,
          )
        ) {
          return false;
        }
      }
      if (
        !areOwnerHeritageClausesUnified(
          checker,
          resB,
          resH,
          context,
          ancTpNames,
          visited,
        )
      ) {
        return false;
      }
    }
  }
  return true;
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
  const positionalOwnerTpNames = new Set();

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
              positionalOwnerTpNames,
            );
        if (!conOk) {
          errors.push(
            `Type '${exportName}' type parameter constraint became more restrictive (was '${bCon ? formatTypeDiagnostic(checker, bCon) : 'unknown'}', now '${formatTypeDiagnostic(checker, hCon)}').`,
          );
          return false;
        }
        if (bTpInfo.decls[i].name.text === hTpInfo.decls[i].name.text) {
          positionalOwnerTpNames.add(bTpInfo.decls[i].name.text);
        }
      }
    }
    // Record positionally identical type parameters (`<T>` vs `<T>`, rejecting `<T, U>` -> `<U, T>` swaps)
    // for both bridged and unbridged generic types/interfaces/classes.
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
        positionalOwnerTpNames.add(tp.name.text);
      }
    } else {
      positionalOwnerTpNames.clear();
    }
    for (let i = 0; i < bTpInfo.decls.length && i < hTpInfo.decls.length; i++) {
      const bTp = bTpInfo.decls[i];
      const hTp = hTpInfo.decls[i];
      const bIn = hasTpModifier(bTp, ts.SyntaxKind.InKeyword);
      const bOut = hasTpModifier(bTp, ts.SyntaxKind.OutKeyword);
      const hIn = hasTpModifier(hTp, ts.SyntaxKind.InKeyword);
      const hOut = hasTpModifier(hTp, ts.SyntaxKind.OutKeyword);
      if (
        (bOut && !hOut) ||
        (bIn && !hIn) ||
        (!bIn &&
          hIn &&
          (bOut ||
            variance !== 'input' ||
            (context.inOutput && context.inOutput.has(exportName)))) ||
        (!bOut &&
          hOut &&
          (bIn ||
            variance !== 'output' ||
            (context.inInput && context.inInput.has(exportName))))
      ) {
        errors.push(
          `Type '${exportName}' type parameter '${bTp.name.text}' variance modifier ('in'/'out') changed incompatibly.`,
        );
        return false;
      }
      if (
        hasTpModifier(bTp, ts.SyntaxKind.ConstKeyword) &&
        !hasTpModifier(hTp, ts.SyntaxKind.ConstKeyword)
      ) {
        errors.push(
          `Type '${exportName}' type parameter '${bTp.name.text}' removed 'const' modifier.`,
        );
        return false;
      }
      const bDef = bTp.default;
      const hDef = hTp.default;
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
          positionalOwnerTpNames,
          new Set(),
          false,
          positionalOwnerTpNames,
        );
      if (!defOk) {
        errors.push(
          `Type '${exportName}' type parameter '${bTpInfo.decls[i].name.text}' default changed incompatibly ${formatTypePairDiff(checker, bDT, hDT)}.`,
        );
        return false;
      }
    }
  }

  const ownerHeritageUnified = areOwnerHeritageClausesUnified(
    checker,
    baseSym,
    headSym,
    context,
    positionalOwnerTpNames,
  );
  const memberContext = {
    ...context,
    currentOwnerBaseSym: baseSym,
    currentOwnerHeadSym: headSym,
    ownerUnifiedTpNames: positionalOwnerTpNames,
    ownerHeritageUnified,
  };

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
        memberContext,
        positionalOwnerTpNames,
      ),
    );
    checkObjectMembers(
      checker,
      `Class '${exportName}'`,
      baseType,
      headType,
      baseSf,
      headSf,
      memberContext,
      errors,
      'class',
      {
        verifiedExternalExtends,
        ownerUnifiedTpNames: positionalOwnerTpNames,
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
      memberContext,
      errors,
    );
  }

  const bAliasDecl =
    !(baseSym.flags & ts.SymbolFlags.Interface) &&
    (baseSym.declarations || []).find(ts.isTypeAliasDeclaration);
  const hAliasDecl =
    !(headSym.flags & ts.SymbolFlags.Interface) &&
    (headSym.declarations || []).find(ts.isTypeAliasDeclaration);

  const baseCallSigs = checker.getSignaturesOfType(
    baseType,
    ts.SignatureKind.Call,
  );
  if (baseCallSigs.length > 0) {
    const usedInInput = Boolean(
      context.inInput && context.inInput.has(exportName),
    );
    const usedInOutput = Boolean(
      context.inOutput && context.inOutput.has(exportName),
    );
    const isFnTypeAlias = Boolean(
      bAliasDecl && ts.isFunctionTypeNode(bAliasDecl.type),
    );
    if (!usedInInput || usedInOutput) {
      checkSignatureSetCompatibility(
        checker,
        `Callable type '${exportName}' signature`,
        baseType,
        headType,
        ts.SignatureKind.Call,
        baseSf,
        headSf,
        memberContext,
        errors,
      );
    }
    if (usedInInput || (isFnTypeAlias && !usedInOutput)) {
      const headCallSigs = checker.getSignaturesOfType(
        headType,
        ts.SignatureKind.Call,
      );
      const cbDirectOk = isAssignableCompat(checker, baseType, headType);
      for (const bSig of baseCallSigs) {
        const covered = headCallSigs.some(hSig =>
          doesHeadSignatureCoverBase(
            checker,
            bSig,
            hSig,
            baseSf,
            headSf,
            memberContext,
            false,
            'callback',
            1,
            cbDirectOk,
          ),
        );
        if (!covered) {
          errors.push(
            `Callable type '${exportName}' signature '${checker.signatureToString(bSig)}' became more restrictive for implementations.`,
          );
        }
      }
    }
  }

  const isTupleOrArray =
    checker.isTupleType(baseType) || checker.isArrayType(baseType);
  const isUnionOrPrimitive = Boolean(
    baseType.flags & (ts.TypeFlags.Union | ts.TypeFlags.Primitive),
  );
  const baseProps = checker.getPropertiesOfType(baseType);
  const baseIndices = checker.getIndexInfosOfType(baseType) || [];

  if (
    bAliasDecl &&
    hAliasDecl &&
    baseCallSigs.length === 0 &&
    baseConstructSigs.length === 0
  ) {
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
          memberContext,
          positionalOwnerTpNames,
          new Set(),
          false,
          positionalOwnerTpNames,
        )
      );
    });
    if (
      defaultsOk &&
      isAstTypeExplainedByUnifiedExports(
        checker,
        bAliasDecl.type,
        hAliasDecl.type,
        memberContext,
        positionalOwnerTpNames,
        new Set(),
        false,
        positionalOwnerTpNames,
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
      memberContext,
      errors,
      variance,
      {ownerUnifiedTpNames: positionalOwnerTpNames},
    );
    if (variance === 'input') {
      const headCallSigs = checker.getSignaturesOfType(
        headType,
        ts.SignatureKind.Call,
      );
      const headConstructSigs = checker.getSignaturesOfType(
        headType,
        ts.SignatureKind.Construct,
      );
      if (baseCallSigs.length === 0 && headCallSigs.length > 0) {
        errors.push(
          `Interface/Type '${exportName}': new required call signature was added.`,
        );
      }
      if (baseConstructSigs.length === 0 && headConstructSigs.length > 0) {
        errors.push(
          `Interface/Type '${exportName}': new required construct signature was added.`,
        );
      }
    }
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
      !(
        resB.flags &
        (ts.SymbolFlags.Class |
          ts.SymbolFlags.Function |
          ts.SymbolFlags.Variable)
      )
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
  const nsContext = {
    ...context,
    inInput,
    inOutput,
  };
  for (const [bSub, fullName, subName] of nsTypeFirst) {
    const resB = resolveAliased(checker, bSub);
    const resH = resolveAliased(checker, hSubMap.get(subName));
    if (
      resB.flags & ts.SymbolFlags.Interface &&
      resH.flags & ts.SymbolFlags.Interface &&
      !(
        resB.flags &
        (ts.SymbolFlags.Class |
          ts.SymbolFlags.Function |
          ts.SymbolFlags.Variable)
      ) &&
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
      nsContext,
      v,
      errors,
      visitedNamespaces,
    );
    const resB = resolveAliased(checker, bSub);
    if (errors.length > before) {
      context.unifiedModuleSymbols.delete(resB);
    } else if (resB.flags & ts.SymbolFlags.Enum) {
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
      nsContext,
      v,
      errors,
      visitedNamespaces,
    );
    if (errors.length === before) {
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
      nsContext,
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

  const bValTpInfo = getTypeParameterDecls(resolvedBaseSym);
  const hValTpInfo = getTypeParameterDecls(resolvedHeadSym);
  const valOwnerTpNames = new Set();
  if (
    bValTpInfo.decls.length <= hValTpInfo.decls.length &&
    bValTpInfo.decls.every(
      (tp, idx) => tp.name.text === hValTpInfo.decls[idx].name.text,
    )
  ) {
    for (const tp of bValTpInfo.decls) valOwnerTpNames.add(tp.name.text);
  }
  const valHeritageUnified = areOwnerHeritageClausesUnified(
    checker,
    resolvedBaseSym,
    resolvedHeadSym,
    context,
    valOwnerTpNames,
  );
  const valContext = {
    ...context,
    currentOwnerBaseSym: resolvedBaseSym,
    currentOwnerHeadSym: resolvedHeadSym,
    ownerUnifiedTpNames: valOwnerTpNames,
    ownerHeritageUnified: valHeritageUnified,
  };

  const baseConstructSigs = checker.getSignaturesOfType(
    baseValType,
    ts.SignatureKind.Construct,
  );
  if (baseConstructSigs.length > 0) {
    const ctorPrefix = `${path.resolve(baseSf.fileName)}::ctor::${exportName}::`;
    checkSignatureSetCompatibility(
      checker,
      `Constructor for '${exportName}'`,
      baseValType,
      headValType,
      ts.SignatureKind.Construct,
      baseSf,
      headSf,
      valContext,
      errors,
      {ignoreReturnType: true, fnBridgeKeyPrefix: ctorPrefix},
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
      valContext,
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

  const bReadonly = isSymbolReadonly(resolvedBaseSym);
  const hReadonly = isSymbolReadonly(resolvedHeadSym);
  if (
    baseConstructSigs.length === 0 &&
    baseCallSigs.length === 0 &&
    !bReadonly &&
    hReadonly
  ) {
    errors.push(`Exported value '${exportName}' was made readonly ('const').`);
  }

  if (
    baseConstructSigs.length > 0 ||
    hasCustomCallableProps ||
    (!isPrimitiveOrLiteral &&
      baseCallSigs.length === 0 &&
      checker.getPropertiesOfType(baseValType).length > 0)
  ) {
    const beforeObjErrs = errors.length;
    checkObjectMembers(
      checker,
      `Value '${exportName}'`,
      baseValType,
      headValType,
      baseSf,
      headSf,
      valContext,
      errors,
      'class',
      {
        skipBuiltinFnProps:
          baseCallSigs.length > 0 && baseConstructSigs.length === 0,
        isStaticClassSide: Boolean(
          resolvedBaseSym.flags & ts.SymbolFlags.Class,
        ),
        ownerUnifiedTpNames: valOwnerTpNames,
      },
    );
    if (
      errors.length === beforeObjErrs &&
      baseConstructSigs.length === 0 &&
      baseCallSigs.length === 0 &&
      !bReadonly &&
      !isAssignableCompat(checker, baseValType, headValType)
    ) {
      const bDecl0 =
        resolvedBaseSym.declarations && resolvedBaseSym.declarations[0];
      const hDecl0 =
        resolvedHeadSym.declarations && resolvedHeadSym.declarations[0];
      const bTNode = bDecl0 && bDecl0.type;
      const hTNode = hDecl0 && hDecl0.type;
      if (
        !isAstTypeExplainedByUnifiedExports(checker, bTNode, hTNode, context)
      ) {
        errors.push(
          `Mutable exported variable '${exportName}' type was narrowed incompatibly ${formatTypePairDiff(checker, baseValType, headValType)}.`,
        );
      }
    }
  } else if (baseConstructSigs.length === 0 && baseCallSigs.length === 0) {
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
    } else if (typePassed) {
      context.unifiedModuleSymbols.add(resolvedBaseSym);
    } else if (context.unifiedModuleSymbols.has(resolvedBaseSym)) {
      // Remove pre-seeded mutually recursive input interface if it actually failed member verification!
      context.unifiedModuleSymbols.delete(resolvedBaseSym);
    }
  }

  if (bHasVal && hHasVal) {
    const valErrBefore = errors.length;
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
    if (
      errors.length > valErrBefore &&
      !(resolvedBaseSym.flags & ts.SymbolFlags.Class)
    ) {
      context.unifiedModuleSymbols.delete(resolvedBaseSym);
    }
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
  if (!baseModSym) return errors;

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
  const headExports = headModSym
    ? [...checker.getExportsOfModule(headModSym)]
    : [];

  const baseEq =
    baseModSym.exports &&
    baseModSym.exports.get(ts.InternalSymbolName.ExportEquals);
  const headEq =
    headModSym &&
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
      !(
        resolvedBase.flags &
        (ts.SymbolFlags.Class |
          ts.SymbolFlags.Function |
          ts.SymbolFlags.Variable)
      )
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
      !(
        resolvedB.flags &
        (ts.SymbolFlags.Class |
          ts.SymbolFlags.Function |
          ts.SymbolFlags.Variable)
      ) &&
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
    inInput,
    inOutput,
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
    if (errors.length > before) {
      unifiedModuleSymbols.delete(resolvedBase);
    } else if (resolvedBase.flags & ts.SymbolFlags.Enum) {
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

  const localDtsFiles = new Map(dtsFiles);
  const parsedDtsCache = new Map();
  const dtsDirs = new Set();
  for (const k of localDtsFiles.keys()) {
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
      return localDtsFiles.has(resolved.slice(0, -4) + '.d.mts');
    }
    if (resolved.endsWith('.cjs')) {
      return localDtsFiles.has(resolved.slice(0, -4) + '.d.cts');
    }
    if (resolved.endsWith('.js')) {
      return localDtsFiles.has(resolved.slice(0, -3) + '.d.ts');
    }
    return false;
  };

  const dtsHost = {
    ...sharedHost,
    realpath(p) {
      const resolved = path.resolve(p);
      if (localDtsFiles.has(resolved)) return resolved;
      return sharedHost.realpath ? sharedHost.realpath(resolved) : resolved;
    },
    directoryExists(dirName) {
      const resolved = path.resolve(dirName);
      if (dtsDirs.has(resolved)) return true;
      return sharedHost.directoryExists(resolved);
    },
    fileExists(fileName) {
      const resolved = path.resolve(fileName);
      if (localDtsFiles.has(resolved)) return true;
      // Hide raw .ts/.mts/.cts/.js/.mjs/.cjs counterparts whenever a normalized .d.ts exists in memory!
      if (
        (/\.(c|m)?ts$/.test(resolved) &&
          !isDeclarationFilePath(resolved) &&
          localDtsFiles.has(toDtsFileName(resolved))) ||
        jsFileMapsToDts(resolved)
      ) {
        return false;
      }
      return sharedHost.fileExists(resolved);
    },
    readFile(fileName) {
      const resolved = path.resolve(fileName);
      if (localDtsFiles.has(resolved)) return localDtsFiles.get(resolved);
      return sharedHost.readFile(resolved);
    },
    getSourceFile(fileName, languageVersion, onError, shouldCreate) {
      const resolved = path.resolve(fileName);
      if (parsedDtsCache.has(resolved)) return parsedDtsCache.get(resolved);
      if (localDtsFiles.has(resolved)) {
        const sf = ts.createSourceFile(
          resolved,
          localDtsFiles.get(resolved),
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
    resolveModuleNameLiterals(
      moduleLiterals,
      containingFile,
      redirectedReference,
      options,
    ) {
      const baseResolved = sharedHost.resolveModuleNameLiterals
        ? sharedHost.resolveModuleNameLiterals.call(
            this,
            moduleLiterals,
            containingFile,
            redirectedReference,
            options,
          )
        : moduleLiterals.map(lit =>
            ts.resolveModuleName(
              lit.text,
              containingFile,
              options,
              this,
              undefined,
              redirectedReference,
            ),
          );
      return baseResolved.map((res, idx) => {
        if (res && res.resolvedModule) return res;
        const spec = moduleLiterals[idx].text;
        if (spec.startsWith('.') || path.isAbsolute(spec)) {
          const absBase = path.isAbsolute(spec)
            ? path.resolve(spec)
            : path.resolve(path.dirname(containingFile), spec);
          const dtsCandidates = [];
          if (absBase.endsWith('.mjs')) {
            const stem = absBase.slice(0, -4);
            dtsCandidates.push([`${stem}.d.mts`, ts.Extension.Dmts]);
            dtsCandidates.push([`${stem}.mts`, ts.Extension.Mts]);
          } else if (absBase.endsWith('.cjs')) {
            const stem = absBase.slice(0, -4);
            dtsCandidates.push([`${stem}.d.cts`, ts.Extension.Dcts]);
            dtsCandidates.push([`${stem}.cts`, ts.Extension.Cts]);
          } else if (absBase.endsWith('.js')) {
            const stem = absBase.slice(0, -3);
            dtsCandidates.push([`${stem}.d.ts`, ts.Extension.Dts]);
            dtsCandidates.push([`${stem}.ts`, ts.Extension.Ts]);
          }
          for (const [candPath, ext] of dtsCandidates) {
            if (localDtsFiles.has(candPath)) {
              return {
                resolvedModule: {
                  resolvedFileName: candPath,
                  extension: ext,
                  isExternalLibraryImport: false,
                },
              };
            }
          }
        }
        return res;
      });
    },
  };

  const rootNames = [];
  for (const pair of dtsPairs) {
    if (localDtsFiles.has(pair.baseDts) && localDtsFiles.has(pair.headDts)) {
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
    const built = buildGenericBridgeSource(
      pairsProbeMeta,
      checker,
      localDtsFiles,
    );
    if (built.taskMap.size > 0) {
      localDtsFiles.set(bridgePath, built.bridgeCode);
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
      {rawMetaByFile, bridgeResults, program: cmpProg, dtsFiles: localDtsFiles},
    );
    pairResults.push({label: pair.label, errors: errs});
  }
  return pairResults;
}
