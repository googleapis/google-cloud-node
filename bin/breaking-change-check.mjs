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
import {promisify} from 'node:util';

const execFileAsync = promisify(execFile);
const require = createRequire(path.join(process.cwd(), 'package.json'));
const ts = require('typescript');

const REPO_ROOT = path.resolve(process.cwd());

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
    base.endsWith('.test.ts') ||
    base.endsWith('.spec.ts') ||
    base === 'gulpfile.ts' ||
    base === 'webpack.config.ts'
  ) {
    return true;
  }
  return false;
}

function runGit(args, options = {}) {
  return execFileSync('git', args, {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
    maxBuffer: 20 * 1024 * 1024,
    ...options,
  });
}

const gitFileCache = new Map();

function getFileAtRev(rev, repoRelPath) {
  const normPath = repoRelPath.split(path.sep).join('/');
  const key = `${rev}:${normPath}`;
  if (gitFileCache.has(key)) {
    return gitFileCache.get(key);
  }
  let val;
  try {
    val = runGit(['show', key]);
  } catch (err) {
    val = undefined;
  }
  gitFileCache.set(key, val);
  return val;
}

const packageDirCache = new Map();

function findPackageDir(filePath) {
  let currentDir = path.resolve(REPO_ROOT, path.dirname(filePath));
  const visited = [];
  while (
    currentDir === REPO_ROOT ||
    currentDir.startsWith(`${REPO_ROOT}${path.sep}`)
  ) {
    if (packageDirCache.has(currentDir)) {
      const cached = packageDirCache.get(currentDir);
      for (const d of visited) packageDirCache.set(d, cached);
      return cached;
    }
    visited.push(currentDir);
    if (
      fs.existsSync(path.join(currentDir, 'tsconfig.json')) &&
      fs.existsSync(path.join(currentDir, 'package.json'))
    ) {
      for (const d of visited) packageDirCache.set(d, currentDir);
      return currentDir;
    }
    const parent = path.dirname(currentDir);
    if (parent === currentDir) break;
    currentDir = parent;
  }
  for (const d of visited) packageDirCache.set(d, null);
  return null;
}

/**
 * Strips `private` class members and removes the `protected` modifier keyword
 * from class declarations and expressions so that TypeScript's structural type
 * checker can compare classes across base and head SourceFiles without failing
 * nominal private/protected brand identity checks.
 *
 * Class member visibility restrictions (`public` -> `protected`/`private` and
 * `protected` -> `private`) are checked separately via `collectClassAccessibility`
 * on the unmodified AST.
 */
export function stripPrivateMembersFromSourceFile(sf) {
  const transformer = context => {
    const visit = node => {
      if (ts.isClassDeclaration(node) || ts.isClassExpression(node)) {
        const newMembers = [];
        for (const m of node.members) {
          if (m.name && ts.isPrivateIdentifier(m.name)) {
            continue;
          }
          const mods = ts.canHaveModifiers(m) ? ts.getModifiers(m) : undefined;
          if (
            mods &&
            mods.some(mod => mod.kind === ts.SyntaxKind.PrivateKeyword)
          ) {
            continue;
          }
          if (ts.isConstructorDeclaration(m)) {
            const newParams = m.parameters.map(p => {
              const pMods = ts.canHaveModifiers(p)
                ? ts.getModifiers(p)
                : undefined;
              if (!pMods) return p;
              const filtered = pMods.filter(
                mod =>
                  mod.kind !== ts.SyntaxKind.PrivateKeyword &&
                  mod.kind !== ts.SyntaxKind.ProtectedKeyword,
              );
              if (filtered.length === pMods.length) return p;
              const wasProtected = pMods.some(
                mod => mod.kind === ts.SyntaxKind.ProtectedKeyword,
              );
              const finalMods = wasProtected
                ? [
                    ...filtered,
                    ts.factory.createModifier(ts.SyntaxKind.PublicKeyword),
                  ]
                : filtered;
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
            newMembers.push(
              ts.factory.updateConstructorDeclaration(
                m,
                m.modifiers,
                newParams,
                m.body,
              ),
            );
            continue;
          }
          if (
            mods &&
            mods.some(mod => mod.kind === ts.SyntaxKind.ProtectedKeyword)
          ) {
            const filteredMods = mods.filter(
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
        if (ts.isClassDeclaration(node)) {
          return ts.factory.updateClassDeclaration(
            node,
            node.modifiers,
            node.name,
            node.typeParameters,
            node.heritageClauses,
            newMembers,
          );
        }
      }
      return ts.visitEachChild(node, visit, context);
    };
    return root => ts.visitNode(root, visit);
  };
  const res = ts.transform(sf, [transformer]);
  const printer = ts.createPrinter({removeComments: true});
  const printed = printer.printFile(res.transformed[0]);
  res.dispose();
  return ts.createSourceFile(sf.fileName, printed, sf.languageVersion);
}

/**
 * Collects class member visibility ('public' | 'protected' | 'private') from
 * the raw unmodified SourceFile.
 */
export function collectClassAccessibility(sf) {
  const map = new Map();
  if (!sf) return map;
  const visit = node => {
    if (ts.isClassDeclaration(node) && node.name) {
      const className = node.name.text;
      const memberAccess = new Map();
      for (const m of node.members) {
        if (ts.isConstructorDeclaration(m)) {
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
              const pName = p.name.text;
              if (pFlags & ts.ModifierFlags.Private) {
                memberAccess.set(pName, 'private');
              } else if (pFlags & ts.ModifierFlags.Protected) {
                memberAccess.set(pName, 'protected');
              } else {
                memberAccess.set(pName, 'public');
              }
            }
          }
          continue;
        }
        if (!m.name) continue;
        let name;
        if (
          ts.isIdentifier(m.name) ||
          ts.isStringLiteral(m.name) ||
          ts.isNumericLiteral(m.name)
        ) {
          name = m.name.text;
        } else if (ts.isPrivateIdentifier(m.name)) {
          name = m.name.text;
        }
        if (!name) continue;
        const flags = ts.getCombinedModifierFlags(m);
        const isStatic = Boolean(flags & ts.ModifierFlags.Static);
        const key = `${isStatic ? 'static:' : ''}${name}`;
        if (
          ts.isPrivateIdentifier(m.name) ||
          flags & ts.ModifierFlags.Private
        ) {
          memberAccess.set(key, 'private');
        } else if (flags & ts.ModifierFlags.Protected) {
          memberAccess.set(key, 'protected');
        } else {
          memberAccess.set(key, 'public');
        }
      }
      map.set(className, memberAccess);
    }
    ts.forEachChild(node, visit);
  };
  ts.forEachChild(sf, visit);
  return map;
}

function hasRestParam(sig) {
  return Boolean(sig.flags & 1 /* HasRestParameter */);
}

function getMaxArgs(sig) {
  return hasRestParam(sig) ? Infinity : sig.parameters.length;
}

function getParamTypeAt(checker, sig, index, location) {
  if (index < sig.parameters.length) {
    const param = sig.parameters[index];
    const decl =
      param.valueDeclaration || (param.declarations && param.declarations[0]);
    const t = checker.getTypeOfSymbolAtLocation(param, decl || location);
    if (decl && ts.isParameter(decl) && decl.dotDotDotToken) {
      return checker.getElementTypeOfArrayType(t) || t;
    }
    return t;
  }
  if (hasRestParam(sig)) {
    const last = sig.parameters[sig.parameters.length - 1];
    const decl =
      last.valueDeclaration || (last.declarations && last.declarations[0]);
    const t = checker.getTypeOfSymbolAtLocation(last, decl || location);
    return checker.getElementTypeOfArrayType(t) || t;
  }
  return undefined;
}

/**
 * Instantiates `type` by mapping `sources` TypeParameters to `targets` TypeParameters
 * using TypeScript's internal signature return-type instantiation.
 */
function instantiateTypeWithParams(checker, type, sources, targets) {
  if (!sources || !targets || sources.length === 0 || targets.length === 0) {
    return type;
  }
  const len = Math.min(sources.length, targets.length);
  const src = sources.slice(0, len);
  const tgt = targets.slice(0, len);
  const innerSig = checker.createSignature(
    undefined,
    undefined,
    undefined,
    [],
    type,
    undefined,
    0,
    0,
  );
  const outerSig = checker.createSignature(
    undefined,
    undefined,
    undefined,
    [],
    undefined,
    undefined,
    0,
    0,
  );
  outerSig.target = innerSig;
  outerSig.mapper =
    len === 1
      ? {kind: 0, source: src[0], target: tgt[0]}
      : {kind: 1, sources: src, targets: tgt};
  return checker.getReturnTypeOfSignature(outerSig);
}

function getImmediateConstraintOfTypeParam(checker, tp) {
  const decl =
    tp && tp.symbol && tp.symbol.declarations && tp.symbol.declarations[0];
  if (decl && ts.isTypeParameterDeclaration(decl)) {
    return decl.constraint
      ? checker.getTypeFromTypeNode(decl.constraint)
      : undefined;
  }
  return checker.getBaseConstraintOfType(tp);
}

function isTypeAssignableWithGenerics(
  checker,
  sourceType,
  targetType,
  sourceTypeParams,
  targetTypeParams,
) {
  if (sourceType === targetType) return true;
  if (checker.isTypeAssignableTo(sourceType, targetType)) return true;
  if (!sourceTypeParams || sourceTypeParams.length === 0) {
    return false;
  }
  if (!targetTypeParams || targetTypeParams.length < sourceTypeParams.length) {
    return false;
  }
  try {
    const instTarget = instantiateTypeWithParams(
      checker,
      targetType,
      targetTypeParams,
      sourceTypeParams,
    );
    return checker.isTypeAssignableTo(sourceType, instTarget);
  } catch (err) {
    return true;
  }
}

function doesHeadSigCoverBaseSig(
  checker,
  baseSig,
  headSig,
  baseTypeParams = [],
  headTypeParams = [],
  baseSf = undefined,
  headSf = undefined,
  depth = 0,
  ignoreReturnType = false,
) {
  if (baseSig === headSig) return true;
  if (depth > 5) return true;
  if (headSig.minArgumentCount > baseSig.minArgumentCount) return false;
  if (getMaxArgs(headSig) < getMaxArgs(baseSig)) return false;

  const bCombinedTp = [...baseTypeParams, ...(baseSig.typeParameters || [])];
  const hCombinedTp = [...headTypeParams, ...(headSig.typeParameters || [])];

  const sigBaseTp = baseSig.typeParameters || [];
  const sigHeadTp = headSig.typeParameters || [];
  if (sigHeadTp.length < sigBaseTp.length) {
    return false;
  }
  for (let i = 0; i < sigBaseTp.length; i++) {
    const bConstraint = getImmediateConstraintOfTypeParam(
      checker,
      sigBaseTp[i],
    );
    const hConstraint = getImmediateConstraintOfTypeParam(
      checker,
      sigHeadTp[i],
    );
    if (hConstraint) {
      if (!bConstraint) {
        if (
          !checker.isTypeAssignableTo(checker.getUnknownType(), hConstraint)
        ) {
          return false;
        }
      } else if (
        !isTypeAssignableWithGenerics(
          checker,
          bConstraint,
          hConstraint,
          bCombinedTp,
          hCombinedTp,
        )
      ) {
        return false;
      }
    }
  }

  for (let i = 0; i < baseSig.parameters.length; i++) {
    const bParamType = getParamTypeAt(checker, baseSig, i, baseSf);
    const hParamType = getParamTypeAt(checker, headSig, i, headSf);
    if (!bParamType || !hParamType) return false;

    const bParamSym = baseSig.parameters[i];
    const hParamSym =
      i < headSig.parameters.length ? headSig.parameters[i] : undefined;
    if (bParamSym && hParamSym) {
      const bOpt = Boolean(bParamSym.flags & ts.SymbolFlags.Optional);
      const hOpt =
        Boolean(hParamSym.flags & ts.SymbolFlags.Optional) ||
        hasRestParam(headSig);
      if (bOpt && !hOpt) return false;
    }

    const nonNullB = checker.getNonNullableType(bParamType);
    const nonNullH = checker.getNonNullableType(hParamType);
    const bCbSigs = checker.getSignaturesOfType(
      nonNullB,
      ts.SignatureKind.Call,
    );
    const hCbSigs = checker.getSignaturesOfType(
      nonNullH,
      ts.SignatureKind.Call,
    );

    if (bCbSigs.length > 0 && hCbSigs.length > 0) {
      if (
        !isTypeAssignableWithGenerics(
          checker,
          bParamType,
          hParamType,
          bCombinedTp,
          hCombinedTp,
        )
      ) {
        const cbCovered = bCbSigs.every(bCb =>
          hCbSigs.some(hCb =>
            doesHeadSigCoverBaseSig(
              checker,
              bCb,
              hCb,
              bCombinedTp,
              hCombinedTp,
              baseSf,
              headSf,
              depth + 1,
            ),
          ),
        );
        if (!cbCovered) return false;
      }
    } else if (
      !isTypeAssignableWithGenerics(
        checker,
        bParamType,
        hParamType,
        bCombinedTp,
        hCombinedTp,
      )
    ) {
      return false;
    }
  }

  if (!ignoreReturnType) {
    const baseRet = checker.getReturnTypeOfSignature(baseSig);
    const headRet = checker.getReturnTypeOfSignature(headSig);
    if (!(baseRet.flags & (ts.TypeFlags.Void | ts.TypeFlags.Any))) {
      if (headRet.flags & ts.TypeFlags.Void) {
        return false;
      }
      if (
        !isTypeAssignableWithGenerics(
          checker,
          headRet,
          baseRet,
          hCombinedTp,
          bCombinedTp,
        ) &&
        !isTypeAssignableWithGenerics(
          checker,
          baseRet,
          headRet,
          bCombinedTp,
          hCombinedTp,
        )
      ) {
        return false;
      }
    }
  }
  return true;
}

function getTargetType(checker, sym) {
  return checker.getDeclaredTypeOfSymbol(sym);
}

function checkObjectMembers(
  checker,
  ownerLabel,
  baseType,
  headType,
  baseTypeParams,
  headTypeParams,
  baseSf,
  headSf,
  errors,
) {
  const baseProps = checker.getPropertiesOfType(baseType);
  for (const bProp of baseProps) {
    const propName = bProp.getName();
    if (
      propName === 'prototype' ||
      propName.startsWith('#') ||
      propName.startsWith('_#') ||
      propName.startsWith('__@')
    ) {
      continue;
    }
    const hProp = checker.getPropertyOfType(headType, propName);
    if (!hProp) {
      errors.push(
        `${ownerLabel}: property or method '${propName}' was removed.`,
      );
      continue;
    }
    if (bProp === hProp && (!baseTypeParams || baseTypeParams.length === 0)) {
      continue;
    }

    const bPropOpt = Boolean(bProp.flags & ts.SymbolFlags.Optional);
    const hPropOpt = Boolean(hProp.flags & ts.SymbolFlags.Optional);
    if (bPropOpt && !hPropOpt) {
      errors.push(
        `${ownerLabel}: optional property '${propName}' was made required.`,
      );
      continue;
    }

    const bPropType = checker.getTypeOfSymbolAtLocation(bProp, baseSf);
    const hPropType = checker.getTypeOfSymbolAtLocation(hProp, headSf);
    if (
      bPropType === hPropType &&
      (!baseTypeParams || baseTypeParams.length === 0)
    ) {
      continue;
    }

    const bCallSigs = checker.getSignaturesOfType(
      bPropType,
      ts.SignatureKind.Call,
    );
    const hCallSigs = checker.getSignaturesOfType(
      hPropType,
      ts.SignatureKind.Call,
    );

    if (bCallSigs.length > 0) {
      for (const bSig of bCallSigs) {
        const covered = hCallSigs.some(hSig =>
          doesHeadSigCoverBaseSig(
            checker,
            bSig,
            hSig,
            baseTypeParams,
            headTypeParams,
            baseSf,
            headSf,
          ),
        );
        if (!covered) {
          errors.push(
            `${ownerLabel}: method '${propName}${checker.signatureToString(bSig)}' became more restrictive or was removed.`,
          );
        }
      }
    } else {
      if (
        !isTypeAssignableWithGenerics(
          checker,
          bPropType,
          hPropType,
          baseTypeParams,
          headTypeParams,
        )
      ) {
        errors.push(
          `${ownerLabel}: property '${propName}' became more restrictive (was '${checker.typeToString(bPropType)}', now '${checker.typeToString(hPropType)}').`,
        );
      }
    }
  }

  // Check if any new required property was added to an interface or object type alias
  if (!ownerLabel.startsWith('Class ') && !ownerLabel.startsWith('Value ')) {
    const headProps = checker.getPropertiesOfType(headType);
    for (const hProp of headProps) {
      const propName = hProp.getName();
      if (
        propName === 'prototype' ||
        propName.startsWith('#') ||
        propName.startsWith('_#') ||
        propName.startsWith('__@')
      ) {
        continue;
      }
      const hPropOpt = Boolean(hProp.flags & ts.SymbolFlags.Optional);
      if (!hPropOpt && !checker.getPropertyOfType(baseType, propName)) {
        errors.push(
          `${ownerLabel}: new required property '${propName}' was added.`,
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
  errors,
) {
  const baseTypeParams =
    checker.getLocalTypeParametersOfClassOrInterfaceOrTypeAlias(baseSym) || [];
  const headTypeParams =
    checker.getLocalTypeParametersOfClassOrInterfaceOrTypeAlias(headSym) || [];

  const getMinTypeParams = sym => {
    const decl = sym.declarations && sym.declarations[0];
    if (!decl || !decl.typeParameters) return 0;
    return decl.typeParameters.filter(tp => !tp.default).length;
  };
  const baseMinTp = getMinTypeParams(baseSym);
  const headMinTp = getMinTypeParams(headSym);
  if (headMinTp > baseMinTp || headTypeParams.length < baseTypeParams.length) {
    errors.push(
      `Type '${exportName}' type parameter arity became more restrictive (was ${baseMinTp}..${baseTypeParams.length}, now ${headMinTp}..${headTypeParams.length}).`,
    );
    return;
  }

  for (let i = 0; i < baseTypeParams.length; i++) {
    const bConstraint = getImmediateConstraintOfTypeParam(
      checker,
      baseTypeParams[i],
    );
    const hConstraint = getImmediateConstraintOfTypeParam(
      checker,
      headTypeParams[i],
    );
    const tpName = baseTypeParams[i].symbol
      ? baseTypeParams[i].symbol.getName()
      : `T${i}`;
    if (hConstraint) {
      if (!bConstraint) {
        if (
          !checker.isTypeAssignableTo(checker.getUnknownType(), hConstraint)
        ) {
          errors.push(
            `Type '${exportName}' type parameter '${tpName}' added a restrictive constraint '${checker.typeToString(hConstraint)}'.`,
          );
          return;
        }
      } else if (
        !isTypeAssignableWithGenerics(
          checker,
          bConstraint,
          hConstraint,
          baseTypeParams,
          headTypeParams,
        )
      ) {
        errors.push(
          `Type '${exportName}' type parameter '${tpName}' constraint became more restrictive (was '${checker.typeToString(bConstraint)}', now '${checker.typeToString(hConstraint)}').`,
        );
        return;
      }
    }
  }

  const baseType = getTargetType(checker, baseSym);
  const headType = getTargetType(checker, headSym);

  if (baseSym.flags & ts.SymbolFlags.Class) {
    checkObjectMembers(
      checker,
      `Class '${exportName}'`,
      baseType,
      headType,
      baseTypeParams,
      headTypeParams,
      baseSf,
      headSf,
      errors,
    );
    return;
  }

  const baseCallSigs = checker.getSignaturesOfType(
    baseType,
    ts.SignatureKind.Call,
  );
  const headCallSigs = checker.getSignaturesOfType(
    headType,
    ts.SignatureKind.Call,
  );
  if (baseCallSigs.length > 0) {
    for (const bSig of baseCallSigs) {
      const covered = headCallSigs.some(hSig =>
        doesHeadSigCoverBaseSig(
          checker,
          bSig,
          hSig,
          baseTypeParams,
          headTypeParams,
          baseSf,
          headSf,
        ),
      );
      if (!covered) {
        errors.push(
          `Callable type '${exportName}' signature '${checker.signatureToString(bSig)}' became more restrictive or was removed.`,
        );
      }
    }
    return;
  }

  const isTupleOrArray =
    checker.isTupleType(baseType) || checker.isArrayType(baseType);
  const baseProps = checker.getPropertiesOfType(baseType);
  if (
    !isTupleOrArray &&
    baseProps.length > 0 &&
    !(baseType.flags & (ts.TypeFlags.Union | ts.TypeFlags.Primitive))
  ) {
    const prevErrCount = errors.length;
    checkObjectMembers(
      checker,
      `Interface/Type '${exportName}'`,
      baseType,
      headType,
      baseTypeParams,
      headTypeParams,
      baseSf,
      headSf,
      errors,
    );
    if (errors.length > prevErrCount) {
      return;
    }
  }

  if (
    !isTypeAssignableWithGenerics(
      checker,
      baseType,
      headType,
      baseTypeParams,
      headTypeParams,
    )
  ) {
    errors.push(
      `Public type '${exportName}' became more restrictive (previous type is no longer assignable to updated type).`,
    );
  }
}

function checkValueSymbol(
  checker,
  exportName,
  baseSym,
  headSym,
  baseSf,
  headSf,
  errors,
) {
  const baseValType = checker.getTypeOfSymbolAtLocation(baseSym, baseSf);
  const headValType = checker.getTypeOfSymbolAtLocation(headSym, headSf);

  const baseConstructSigs = checker.getSignaturesOfType(
    baseValType,
    ts.SignatureKind.Construct,
  );
  const headConstructSigs = checker.getSignaturesOfType(
    headValType,
    ts.SignatureKind.Construct,
  );
  if (baseConstructSigs.length > 0) {
    for (const bSig of baseConstructSigs) {
      const covered = headConstructSigs.some(hSig =>
        doesHeadSigCoverBaseSig(
          checker,
          bSig,
          hSig,
          [],
          [],
          baseSf,
          headSf,
          0,
          true,
        ),
      );
      if (!covered) {
        errors.push(
          `Constructor for '${exportName}' (${checker.signatureToString(bSig)}) became more restrictive or was removed.`,
        );
      }
    }
  }

  const baseCallSigs = checker.getSignaturesOfType(
    baseValType,
    ts.SignatureKind.Call,
  );
  const headCallSigs = checker.getSignaturesOfType(
    headValType,
    ts.SignatureKind.Call,
  );
  if (baseCallSigs.length > 0) {
    for (const bSig of baseCallSigs) {
      const covered = headCallSigs.some(hSig =>
        doesHeadSigCoverBaseSig(checker, bSig, hSig, [], [], baseSf, headSf),
      );
      if (!covered) {
        errors.push(
          `Function '${exportName}${checker.signatureToString(bSig)}' became more restrictive or was removed.`,
        );
      }
    }
  }

  if (
    baseConstructSigs.length > 0 ||
    (baseCallSigs.length === 0 &&
      checker.getPropertiesOfType(baseValType).length > 0)
  ) {
    checkObjectMembers(
      checker,
      `Value '${exportName}'`,
      baseValType,
      headValType,
      [],
      [],
      baseSf,
      headSf,
      errors,
    );
  } else if (baseConstructSigs.length === 0 && baseCallSigs.length === 0) {
    if (!checker.isTypeAssignableTo(baseValType, headValType)) {
      errors.push(
        `Exported value '${exportName}' became more restrictive (was '${checker.typeToString(baseValType)}', now '${checker.typeToString(headValType)}').`,
      );
    }
  }
}

function collectTopLevelDeclsAndRelativeImports(sf) {
  const decls = new Map();
  const relativeImports = new Set();
  if (!sf) return {decls, relativeImports};
  for (const stmt of sf.statements) {
    if (
      ts.isImportDeclaration(stmt) &&
      ts.isStringLiteral(stmt.moduleSpecifier) &&
      stmt.moduleSpecifier.text.startsWith('.')
    ) {
      const clause = stmt.importClause;
      if (clause) {
        if (clause.name) relativeImports.add(clause.name.text);
        if (clause.namedBindings) {
          if (ts.isNamespaceImport(clause.namedBindings)) {
            relativeImports.add(clause.namedBindings.name.text);
          } else if (ts.isNamedImports(clause.namedBindings)) {
            for (const el of clause.namedBindings.elements) {
              relativeImports.add(el.name.text);
            }
          }
        }
      }
      continue;
    }
    const addDecl = (name, node) => {
      if (!decls.has(name)) decls.set(name, []);
      decls.get(name).push(node);
    };
    if (
      (ts.isFunctionDeclaration(stmt) ||
        ts.isClassDeclaration(stmt) ||
        ts.isInterfaceDeclaration(stmt) ||
        ts.isTypeAliasDeclaration(stmt) ||
        ts.isEnumDeclaration(stmt) ||
        ts.isModuleDeclaration(stmt)) &&
      stmt.name &&
      ts.isIdentifier(stmt.name)
    ) {
      addDecl(stmt.name.text, stmt);
    } else if (ts.isVariableStatement(stmt)) {
      for (const d of stmt.declarationList.declarations) {
        if (ts.isIdentifier(d.name)) {
          addDecl(d.name.text, stmt);
        }
      }
    }
  }
  return {decls, relativeImports};
}

function buildTransitivelyUnchangedSet(baseSf, headSf, rawBaseSf, rawHeadSf) {
  const baseInfo = collectTopLevelDeclsAndRelativeImports(rawBaseSf || baseSf);
  const headInfo = collectTopLevelDeclsAndRelativeImports(rawHeadSf || headSf);
  const memo = new Map();
  const visiting = new Set();

  const isNameUnchanged = name => {
    if (memo.has(name)) return memo.get(name);
    if (visiting.has(name)) return true;
    if (
      baseInfo.relativeImports.has(name) ||
      headInfo.relativeImports.has(name)
    ) {
      memo.set(name, false);
      return false;
    }
    const bNodes = baseInfo.decls.get(name);
    const hNodes = headInfo.decls.get(name);
    if (!bNodes || !hNodes || bNodes.length !== hNodes.length) {
      memo.set(name, false);
      return false;
    }
    const bSrc = rawBaseSf || baseSf;
    const hSrc = rawHeadSf || headSf;
    for (let i = 0; i < bNodes.length; i++) {
      if (bNodes[i].getText(bSrc) !== hNodes[i].getText(hSrc)) {
        memo.set(name, false);
        return false;
      }
    }
    visiting.add(name);
    const referenced = new Set();
    const collectRefs = node => {
      if (ts.isIdentifier(node)) {
        const id = node.text;
        if (
          id !== name &&
          (baseInfo.decls.has(id) ||
            headInfo.decls.has(id) ||
            baseInfo.relativeImports.has(id) ||
            headInfo.relativeImports.has(id))
        ) {
          referenced.add(id);
        }
      }
      ts.forEachChild(node, collectRefs);
    };
    for (const n of bNodes) {
      collectRefs(n);
    }
    let ok = true;
    for (const ref of referenced) {
      if (!isNameUnchanged(ref)) {
        ok = false;
        break;
      }
    }
    visiting.delete(name);
    memo.set(name, ok);
    return ok;
  };

  for (const name of baseInfo.decls.keys()) {
    isNameUnchanged(name);
  }
  return memo;
}

/**
 * Compares all public exports of `baseSf` against `headSf` and returns an array
 * of human-readable breaking change descriptions.
 */
export function compareModules(checker, baseSf, headSf, rawBaseSf, rawHeadSf) {
  const errors = [];
  if (!baseSf || !headSf) return errors;
  const baseModSym = checker.getSymbolAtLocation(baseSf);
  const headModSym = checker.getSymbolAtLocation(headSf);
  if (!baseModSym || !headModSym) return errors;

  const baseClassAccess = collectClassAccessibility(rawBaseSf);
  const headClassAccess = collectClassAccessibility(rawHeadSf);
  const unchangedLocals = buildTransitivelyUnchangedSet(
    baseSf,
    headSf,
    rawBaseSf,
    rawHeadSf,
  );

  const baseExports = [...checker.getExportsOfModule(baseModSym)];
  const headExports = [...checker.getExportsOfModule(headModSym)];

  const baseEq =
    baseModSym.exports &&
    baseModSym.exports.get(ts.InternalSymbolName.ExportEquals);
  const headEq =
    headModSym.exports &&
    headModSym.exports.get(ts.InternalSymbolName.ExportEquals);
  if (baseEq) baseExports.push(baseEq);
  if (headEq) headExports.push(headEq);

  const headExportMap = new Map(headExports.map(s => [s.getName(), s]));

  for (const baseSym of baseExports) {
    const exportName = baseSym.getName();

    const headSym = headExportMap.get(exportName);
    if (!headSym) {
      errors.push(`Export '${exportName}' was removed.`);
      continue;
    }

    if (unchangedLocals.get(exportName) === true) {
      continue;
    }

    if (baseClassAccess.has(exportName) && headClassAccess.has(exportName)) {
      const bMap = baseClassAccess.get(exportName);
      const hMap = headClassAccess.get(exportName);
      for (const [mKey, bVis] of bMap.entries()) {
        if (bVis === 'private') continue;
        const hVis = hMap.get(mKey);
        if (bVis === 'public' && (hVis === 'protected' || hVis === 'private')) {
          errors.push(
            `Class '${exportName}' member '${mKey}' visibility was restricted from 'public' to '${hVis}'.`,
          );
        } else if (bVis === 'protected' && hVis === 'private') {
          errors.push(
            `Class '${exportName}' member '${mKey}' visibility was restricted from 'protected' to 'private'.`,
          );
        }
      }
    }

    const resolvedBaseSym =
      baseSym.flags & ts.SymbolFlags.Alias
        ? checker.getAliasedSymbol(baseSym)
        : baseSym;
    const resolvedHeadSym =
      headSym.flags & ts.SymbolFlags.Alias
        ? checker.getAliasedSymbol(headSym)
        : headSym;

    const hasBaseType = Boolean(
      resolvedBaseSym.flags &
      (ts.SymbolFlags.Type |
        ts.SymbolFlags.Interface |
        ts.SymbolFlags.TypeAlias |
        ts.SymbolFlags.Class |
        ts.SymbolFlags.Enum),
    );
    if (hasBaseType) {
      checkTypeSymbol(
        checker,
        exportName,
        resolvedBaseSym,
        resolvedHeadSym,
        baseSf,
        headSf,
        errors,
      );
    }

    const hasBaseValue = Boolean(
      resolvedBaseSym.flags &
      (ts.SymbolFlags.Value |
        ts.SymbolFlags.Function |
        ts.SymbolFlags.Variable |
        ts.SymbolFlags.Class |
        ts.SymbolFlags.Enum |
        ts.SymbolFlags.ValueModule),
    );
    if (hasBaseValue) {
      checkValueSymbol(
        checker,
        exportName,
        baseSym,
        headSym,
        baseSf,
        headSf,
        errors,
      );
    }
  }

  return errors;
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
  const basePath = path.join(REPO_ROOT, '__virtual__/base.ts');
  const headPath = path.join(REPO_ROOT, '__virtual__/head.ts');
  const defaultHost = ts.createCompilerHost(compilerOptions);
  const virtualFiles = new Map([
    [basePath, baseCode],
    [headPath, headCode],
    ...Object.entries(extraFiles).map(([k, v]) => [path.resolve(k), v]),
  ]);
  const rawMap = new Map();
  const sfCache = new Map();

  const host = {
    ...defaultHost,
    fileExists(fileName) {
      const resolved = path.resolve(fileName);
      if (virtualFiles.has(resolved)) return true;
      return defaultHost.fileExists(fileName);
    },
    readFile(fileName) {
      const resolved = path.resolve(fileName);
      if (virtualFiles.has(resolved)) return virtualFiles.get(resolved);
      return defaultHost.readFile(fileName);
    },
    getSourceFile(fileName, languageVersion, onError, shouldCreate) {
      const resolved = path.resolve(fileName);
      if (sfCache.has(resolved)) return sfCache.get(resolved);
      if (virtualFiles.has(resolved)) {
        const text = virtualFiles.get(resolved);
        const raw = ts.createSourceFile(fileName, text, languageVersion);
        rawMap.set(resolved, raw);
        const stripped = stripPrivateMembersFromSourceFile(raw);
        sfCache.set(resolved, stripped);
        return stripped;
      }
      const sf = defaultHost.getSourceFile(
        fileName,
        languageVersion,
        onError,
        shouldCreate,
      );
      sfCache.set(resolved, sf);
      return sf;
    },
  };

  const prog = ts.createProgram([basePath, headPath], compilerOptions, host);
  const checker = prog.getTypeChecker();
  return compareModules(
    checker,
    prog.getSourceFile(basePath),
    prog.getSourceFile(headPath),
    rawMap.get(basePath),
    rawMap.get(headPath),
  );
}

/**
 * Resolves the git diff range and base/head revisions to compare.
 */
function resolveGitDiffRange(isStrict) {
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
    if (
      revArgs.length === 1 &&
      revArgs[0] !== 'HEAD' &&
      !revArgs[0].includes('..')
    ) {
      revArgs[0] = `${revArgs[0]}...HEAD`;
    }
    return parseRevArgs(revArgs, pathspecArgs);
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
      const parsed = parseRevArgs([ref], []);
      runGit(['rev-parse', '--verify', parsed.baseRev]);
      return parsed;
    } catch (err) {
      // Try next fallback
    }
  }
  throw new Error('Could not resolve a valid git base revision to compare.');
}

function parseRevArgs(revArgs, pathspecArgs = []) {
  if (revArgs.length === 1) {
    const spec = revArgs[0];
    if (spec.includes('...')) {
      const [left, right] = spec.split('...');
      const headRev = right || 'HEAD';
      let baseRev = left;
      try {
        baseRev = runGit(['merge-base', left, headRev]).trim();
      } catch (err) {
        baseRev = left;
      }
      return {
        diffRevArgs: [spec],
        baseRev,
        headRev: headRev === 'HEAD' ? null : headRev,
        pathspecArgs,
      };
    }
    if (spec.includes('..')) {
      const [left, right] = spec.split('..');
      const headRev = right || 'HEAD';
      return {
        diffRevArgs: [spec],
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

async function ensurePackageDependencies(packages) {
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
    const relPkg = path.relative(REPO_ROOT, pkg).split(path.sep).join('/');
    const selector = relPkg ? `./${relPkg}` : '.';
    workspaceFilterArgs.push('--filter', selector);
  }

  if (workspaceFilterArgs.length > 0) {
    await execFileAsync(
      pnpmCmd,
      [
        'install',
        '--ignore-scripts',
        '--prefer-offline',
        ...workspaceFilterArgs,
      ],
      {cwd: REPO_ROOT, shell: isWin},
    );
  }
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
}) {
  const hasPositivePathspec = pathspecArgs.some(
    p =>
      !p.startsWith(':!') && !p.startsWith(':^') && !p.startsWith(':(exclude)'),
  );
  const gitPathspecs = hasPositivePathspec
    ? pathspecArgs
    : ['*.ts', ...pathspecArgs];

  const diffOutput = runGit([
    'diff',
    '--name-status',
    ...diffRevArgs,
    '--',
    ...gitPathspecs,
  ]);

  const changedByPkg = new Map();
  for (const line of diffOutput.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const parts = trimmed.split(/\t+/);
    const status = parts[0];
    const filePath = status.startsWith('R') ? parts[2] : parts[1];
    const oldFilePath = parts[1];
    if (!filePath.endsWith('.ts') || isIgnoredSourceFile(filePath)) continue;
    const pkgDir = findPackageDir(filePath);
    if (!pkgDir) continue;
    if (!changedByPkg.has(pkgDir)) {
      changedByPkg.set(pkgDir, []);
    }
    changedByPkg.get(pkgDir).push({
      status: status[0],
      filePath: path.resolve(REPO_ROOT, filePath),
      oldFilePath: path.resolve(REPO_ROOT, oldFilePath),
      repoRelPath: filePath,
      oldRepoRelPath: oldFilePath,
    });
  }

  if (changedByPkg.size === 0) {
    return [];
  }

  await ensurePackageDependencies(changedByPkg.keys());

  const allErrors = [];

  for (const [pkgDir, entries] of changedByPkg.entries()) {
    const configPath = path.join(pkgDir, 'tsconfig.json');
    const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
    const parsed = ts.parseJsonConfigFileContent(
      configFile.config,
      ts.sys,
      pkgDir,
    );
    const srcDir = path.join(pkgDir, 'src');
    const baseSrcDir = path.join(pkgDir, '__base_src__');

    const headToEntry = new Map();
    for (const e of entries) {
      headToEntry.set(e.filePath, e);
    }

    const headIndex = path.join(srcDir, 'index.ts');
    const hasIndex =
      fs.existsSync(headIndex) ||
      getFileAtRev(
        baseRev,
        path.relative(REPO_ROOT, headIndex).split(path.sep).join('/'),
      ) !== undefined;

    const changedSet = new Set(entries.map(e => e.filePath));
    if (hasIndex) changedSet.add(headIndex);

    const toRealPath = p => {
      const resolved = path.resolve(p);
      if (
        resolved.startsWith(baseSrcDir + path.sep) ||
        resolved === baseSrcDir
      ) {
        return resolved.replace(baseSrcDir, srcDir);
      }
      return resolved;
    };

    const toBasePath = p => {
      const resolved = path.resolve(p);
      if (resolved.startsWith(srcDir + path.sep) || resolved === srcDir) {
        return resolved.replace(srcDir, baseSrcDir);
      }
      return resolved;
    };

    const defaultHost = ts.createCompilerHost(parsed.options);
    const rawMap = new Map();
    const sfCache = new Map();

    const readHeadFile = (real, relToRepo) => {
      if (headRev !== null) {
        return getFileAtRev(headRev, relToRepo);
      }
      return defaultHost.readFile(real);
    };

    const headFileExists = (real, relToRepo) => {
      if (headRev !== null) {
        return getFileAtRev(headRev, relToRepo) !== undefined;
      }
      return defaultHost.fileExists(real);
    };

    const customHost = {
      ...defaultHost,
      realpath: undefined,
      directoryExists(dirName) {
        return defaultHost.directoryExists(toRealPath(dirName));
      },
      fileExists(fileName) {
        const resolved = path.resolve(fileName);
        const isBase =
          resolved.startsWith(baseSrcDir + path.sep) || resolved === baseSrcDir;
        const real = toRealPath(resolved);
        if (changedSet.has(real)) {
          const entry = headToEntry.get(real);
          const relToRepo = path
            .relative(REPO_ROOT, real)
            .split(path.sep)
            .join('/');
          const targetRel = isBase && entry ? entry.oldRepoRelPath : relToRepo;
          return isBase
            ? getFileAtRev(baseRev, targetRel) !== undefined
            : headFileExists(real, targetRel);
        }
        return defaultHost.fileExists(real);
      },
      readFile(fileName) {
        const resolved = path.resolve(fileName);
        const isBase =
          resolved.startsWith(baseSrcDir + path.sep) || resolved === baseSrcDir;
        const real = toRealPath(resolved);
        if (changedSet.has(real)) {
          const entry = headToEntry.get(real);
          const relToRepo = path
            .relative(REPO_ROOT, real)
            .split(path.sep)
            .join('/');
          const targetRel = isBase && entry ? entry.oldRepoRelPath : relToRepo;
          return isBase
            ? getFileAtRev(baseRev, targetRel)
            : readHeadFile(real, targetRel);
        }
        if (headRev !== null && real.startsWith(srcDir + path.sep)) {
          const relToRepo = path
            .relative(REPO_ROOT, real)
            .split(path.sep)
            .join('/');
          const gitText = getFileAtRev(headRev, relToRepo);
          if (gitText !== undefined) return gitText;
        }
        return defaultHost.readFile(real);
      },
      resolveModuleNameLiterals(
        moduleLiterals,
        containingFile,
        redirectedReference,
        options,
      ) {
        const resolvedContaining = path.resolve(containingFile);
        const isFromBase =
          resolvedContaining.startsWith(baseSrcDir + path.sep) ||
          resolvedContaining === baseSrcDir;
        const realContaining = toRealPath(resolvedContaining);

        return moduleLiterals.map(lit => {
          const res = ts.resolveModuleName(
            lit.text,
            realContaining,
            options,
            this,
            undefined,
            redirectedReference,
          );
          if (
            isFromBase &&
            res.resolvedModule &&
            changedSet.has(path.resolve(res.resolvedModule.resolvedFileName))
          ) {
            return {
              resolvedModule: {
                ...res.resolvedModule,
                resolvedFileName: toBasePath(
                  res.resolvedModule.resolvedFileName,
                ),
              },
            };
          }
          return res;
        });
      },
      getSourceFile(
        fileName,
        languageVersion,
        onError,
        shouldCreateNewSourceFile,
      ) {
        const resolved = path.resolve(fileName);
        if (sfCache.has(resolved)) return sfCache.get(resolved);
        if (
          resolved.startsWith(baseSrcDir + path.sep) ||
          resolved.startsWith(srcDir + path.sep)
        ) {
          const text = this.readFile(resolved);
          if (text === undefined) return undefined;
          const raw = ts.createSourceFile(fileName, text, languageVersion);
          rawMap.set(resolved, raw);
          const stripped = stripPrivateMembersFromSourceFile(raw);
          sfCache.set(resolved, stripped);
          return stripped;
        }
        const sf = defaultHost.getSourceFile(
          fileName,
          languageVersion,
          onError,
          shouldCreateNewSourceFile,
        );
        sfCache.set(resolved, sf);
        return sf;
      },
    };

    const rootNames = [];
    const pairsToCompare = [];

    if (
      hasIndex &&
      customHost.fileExists(toBasePath(headIndex)) &&
      customHost.fileExists(headIndex)
    ) {
      rootNames.push(headIndex, toBasePath(headIndex));
      pairsToCompare.push({
        label: path.relative(REPO_ROOT, headIndex).split(path.sep).join('/'),
        base: toBasePath(headIndex),
        head: headIndex,
      });
    }

    for (const e of entries) {
      if (e.filePath === headIndex) continue;
      const baseP = toBasePath(e.filePath);
      const baseExists = customHost.fileExists(baseP);
      const headExists = customHost.fileExists(e.filePath);
      const relLabel = path
        .relative(REPO_ROOT, e.filePath)
        .split(path.sep)
        .join('/');
      if (baseExists && !headExists) {
        allErrors.push(`[${relLabel}] Public source file was deleted.`);
      } else if (baseExists && headExists) {
        rootNames.push(e.filePath, baseP);
        pairsToCompare.push({
          label: relLabel,
          base: baseP,
          head: e.filePath,
        });
      }
    }

    if (rootNames.length === 0) continue;

    const prog = ts.createProgram({
      rootNames,
      options: parsed.options,
      host: customHost,
    });
    const checker = prog.getTypeChecker();

    for (const pair of pairsToCompare) {
      const errs = compareModules(
        checker,
        prog.getSourceFile(pair.base),
        prog.getSourceFile(pair.head),
        rawMap.get(pair.base),
        rawMap.get(pair.head),
      );
      for (const err of errs) {
        allErrors.push(`[${pair.label}] ${err}`);
      }
    }
  }

  return allErrors;
}

async function main() {
  try {
    const isStrict = process.argv.includes('--strict');
    const range = resolveGitDiffRange(isStrict);
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
    for (const err of errors) {
      console.error(`  - ${err}`);
      if (process.env.GITHUB_ACTIONS === 'true') {
        const match = /^\[([^\]]+)\]\s*(.*)$/.exec(err);
        if (match) {
          console.log(
            `::error file=${match[1]},title=Breaking Change Detected::${match[2]}`,
          );
        } else {
          console.log(`::error title=Breaking Change Detected::${err}`);
        }
      }
    }
    if (process.env.GITHUB_STEP_SUMMARY) {
      const summaryLines = [
        '### ⚠️ Breaking Changes Detected in Public TypeScript Interfaces',
        '',
        'This pull request modifies one or more public TypeScript interfaces in a more restrictive way:',
        '',
        ...errors.map(err => `- ${err}`),
        '',
      ];
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

if (
  process.argv[1] &&
  path.basename(process.argv[1]) === 'breaking-change-check.mjs'
) {
  main();
}
