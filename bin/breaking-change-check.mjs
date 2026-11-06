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
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
  DEFAULT_REPO_ROOT,
  SHARED_TS_LIB_CACHE,
  collectClassAccessibility,
  emitToNormalizedDtsMap,
  realpathSafe,
  stripPrivateMembersFromSourceFile,
  toDtsFileName,
  toPosix,
  ts,
} from './breaking-change-check/dts-normalizer.mjs';
import {
  buildWorkspaceDepCompileFilterArgs,
  collectTouchedPackages,
  compileTouchedWorkspaceDeps,
  ensurePackageDependencies,
  isIgnoredSourceFile,
  mapTargetToPackageSource,
  parseJsonSafe,
  parsePkgTsconfigAtRev,
  resolveGitDiffRange,
  resolvePackageEntrypoints,
} from './breaking-change-check/git-workspace.mjs';
import {
  compareModules,
  runDtsPairComparisons,
} from './breaking-change-check/comparator.mjs';

export {
  buildWorkspaceDepCompileFilterArgs,
  collectClassAccessibility,
  compareModules,
  isIgnoredSourceFile,
  resolveGitDiffRange,
  stripPrivateMembersFromSourceFile,
};

const MAX_GITHUB_ANNOTATIONS = 10;
const MAX_SUMMARY_ITEMS_INLINE = 50;

/**
 * Compares two in-memory TypeScript module strings `baseCode` and `headCode`
 * and returns any breaking changes detected. Useful for unit testing.
 */
export function compareSourceTexts(
  baseCode,
  headCode,
  extraFiles = {},
  options = {},
) {
  const {entryFileName = 'mod.ts', compilerOptions: customOpts = {}} = options;
  const compilerOptions = {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.CommonJS,
    strict: true,
    esModuleInterop: true,
    skipLibCheck: true,
    ...customOpts,
  };
  const virtualRoot = path.join(DEFAULT_REPO_ROOT, '__bcc_virtual__');
  const basePath = path.join(virtualRoot, '__base__', entryFileName);
  const headPath = path.join(virtualRoot, '__head__', entryFileName);
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
        const segs = rel.split(path.sep);
        if (segs[0] === '__base__' || segs[0] === '__head__') {
          const rest = segs.slice(1).join(path.sep);
          if (
            rest === 'node_modules' ||
            rest.startsWith(`node_modules${path.sep}`)
          ) {
            return defaultHost.directoryExists(
              path.join(DEFAULT_REPO_ROOT, rest),
            );
          }
          return false;
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

  const baseDtsCandidate = toDtsFileName(basePath);
  const headDtsCandidate = toDtsFileName(headPath);

  const {dtsFiles, rawMetaByFile} = emitToNormalizedDtsMap(
    [...virtualFiles.keys()],
    abs => virtualFiles.has(abs),
    compilerOptions,
    host,
    {
      baseCompilerOptions: options.baseCompilerOptions || null,
      isBaseFilePredicate: options.baseCompilerOptions
        ? abs => abs.includes(`${path.sep}__base__${path.sep}`)
        : null,
      entrypointDtsTargets: [baseDtsCandidate, headDtsCandidate],
    },
  );

  const baseActual = dtsFiles.has(baseDtsCandidate)
    ? baseDtsCandidate
    : basePath;
  const headActual = dtsFiles.has(headDtsCandidate)
    ? headDtsCandidate
    : headPath;

  const res = runDtsPairComparisons(
    [{label: entryFileName, baseDts: baseActual, headDts: headActual}],
    dtsFiles,
    rawMetaByFile,
    compilerOptions,
    host,
  );
  return res.length > 0 ? res[0].errors : [];
}

function isSegOrPrefix(rel, seg) {
  return rel === seg || rel.startsWith(`${seg}/`);
}

function isExternalOrBuildRel(rel) {
  return (
    isSegOrPrefix(rel, 'node_modules') ||
    isSegOrPrefix(rel, 'build') ||
    isSegOrPrefix(rel, 'dist')
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
    try {
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

      if (!basePkgJson || basePkgJson.private === true) {
        continue;
      }
      if (!headPkgJson) {
        allErrors.push(
          `[${relPkgDir}/package.json] Published package was deleted.`,
        );
        continue;
      }
      if (headPkgJson.private === true) {
        allErrors.push(
          `[${relPkgDir}/package.json] Public package was marked "private": true.`,
        );
        continue;
      }
      if (
        typeof basePkgJson.name === 'string' &&
        typeof headPkgJson.name === 'string' &&
        basePkgJson.name !== headPkgJson.name
      ) {
        allErrors.push(
          `[${relPkgDir}/package.json] Published package was renamed from '${basePkgJson.name}' to '${headPkgJson.name}'.`,
        );
      }

      const basePkgRoot = path.join(pkgDir, '__base_pkg__');
      const baseTsParsed = parsePkgTsconfigAtRev(
        pkgDir,
        relPkgDir,
        absRepoRoot,
        baseRev,
        reader,
        basePkgRoot,
      );
      const headTsParsed = parsePkgTsconfigAtRev(
        pkgDir,
        relPkgDir,
        absRepoRoot,
        headRev,
        reader,
        pkgDir,
      );

      const baseEntryInfo = resolvePackageEntrypoints(
        pkgDir,
        basePkgJson,
        baseTsParsed,
        baseExistsAbs,
        readBaseRel,
      );
      const headEntryInfo = resolvePackageEntrypoints(
        pkgDir,
        headPkgJson,
        headTsParsed,
        headExistsAbs,
        readHeadRel,
      );

      // Check `package.json#exports` subpath removals, deleted `exports` field, and dropped import/require conditions (`H6`).
      if (basePkgJson.exports) {
        if (!headPkgJson.exports) {
          for (const baseSubpath of baseEntryInfo.subpaths.keys()) {
            if (
              baseSubpath !== '.' &&
              !headEntryInfo.subdirSubpaths.has(baseSubpath)
            ) {
              allErrors.push(
                `[${relPkgDir}/package.json] Public subpath export '${baseSubpath}' was removed (package.json#exports was deleted).`,
              );
            }
          }
        } else {
          for (const [baseSubpath, bLane] of baseEntryInfo.subpaths.entries()) {
            const hLane = headEntryInfo.subpaths.get(baseSubpath);
            if (!hLane) {
              allErrors.push(
                `[${relPkgDir}/package.json] Public subpath export '${baseSubpath}' was removed from package.json#exports.`,
              );
              continue;
            }
            if (bLane.supportsRequire && !hLane.supportsRequire) {
              allErrors.push(
                `[${relPkgDir}/package.json] Public subpath export '${baseSubpath}' removed CommonJS ('require') support from package.json#exports.`,
              );
            }
            if (bLane.supportsImport && !hLane.supportsImport) {
              allErrors.push(
                `[${relPkgDir}/package.json] Public subpath export '${baseSubpath}' removed ESM ('import') support from package.json#exports.`,
              );
            }
          }
        }
      } else {
        if (headPkgJson.exports) {
          const hRootLane = headEntryInfo.subpaths.get('.');
          if (!hRootLane) {
            allErrors.push(
              `[${relPkgDir}/package.json] Public subpath export '.' was removed from package.json#exports.`,
            );
          } else {
            if (!hRootLane.supportsRequire) {
              allErrors.push(
                `[${relPkgDir}/package.json] Public subpath export '.' removed CommonJS ('require') support from package.json#exports.`,
              );
            }
            if (!hRootLane.supportsImport) {
              allErrors.push(
                `[${relPkgDir}/package.json] Public subpath export '.' removed ESM ('import') support from package.json#exports.`,
              );
            }
          }
        }
        if (baseEntryInfo.subdirSubpaths.size > 0) {
          for (const subKey of baseEntryInfo.subdirSubpaths.keys()) {
            const retained = headPkgJson.exports
              ? headEntryInfo.subpaths.has(subKey)
              : headEntryInfo.subdirSubpaths.has(subKey);
            if (!retained) {
              allErrors.push(
                `[${relPkgDir}/package.json] Public subdirectory entrypoint '${subKey}' was removed.`,
              );
            } else if (headPkgJson.exports) {
              const hSubLane = headEntryInfo.subpaths.get(subKey);
              if (hSubLane) {
                if (!hSubLane.supportsRequire) {
                  allErrors.push(
                    `[${relPkgDir}/package.json] Public subpath export '${subKey}' removed CommonJS ('require') support from package.json#exports.`,
                  );
                }
                if (!hSubLane.supportsImport) {
                  allErrors.push(
                    `[${relPkgDir}/package.json] Public subpath export '${subKey}' removed ESM ('import') support from package.json#exports.`,
                  );
                }
              }
            }
          }
        }
      }

      if (baseEntryInfo.entryFiles.length === 0) {
        continue;
      }

      const toBasePkgPath = absInPkg =>
        path.join(basePkgRoot, path.relative(pkgDir, absInPkg));
      const fromBasePkgPath = absInBase =>
        path.join(pkgDir, path.relative(basePkgRoot, absInBase));
      const isInsideDir = (child, dir) =>
        child === dir || child.startsWith(dir + path.sep);
      const isBaseVirtual = abs => isInsideDir(abs, basePkgRoot);
      const isInPkgSource = abs => {
        if (isBaseVirtual(abs)) {
          const rel = toPosix(path.relative(basePkgRoot, abs));
          return !isSegOrPrefix(rel, 'node_modules');
        }
        if (isInsideDir(abs, pkgDir)) {
          const rel = toPosix(path.relative(pkgDir, abs));
          return !isExternalOrBuildRel(rel);
        }
        return false;
      };

      const compilerOptions = {
        ...headTsParsed.options,
        skipLibCheck: true,
      };
      const baseCompilerOptions = {
        ...baseTsParsed.options,
        skipLibCheck: true,
      };
      const defaultHost = ts.createCompilerHost(compilerOptions);
      const pkgSfCache = new Map();

      const resolveHostRealpath = p => {
        const resolved = path.resolve(p);
        if (isBaseVirtual(resolved)) {
          const relInBase = toPosix(path.relative(basePkgRoot, resolved));
          if (
            isSegOrPrefix(relInBase, 'node_modules') &&
            defaultHost.realpath
          ) {
            const realCandidate = fromBasePkgPath(resolved);
            try {
              return fs.existsSync(realCandidate)
                ? defaultHost.realpath(realCandidate)
                : realCandidate;
            } catch {
              return realCandidate;
            }
          }
          return resolved;
        }
        if (!defaultHost.realpath) return resolved;
        if (
          headRev !== null &&
          isInsideDir(resolved, pkgDir) &&
          !isExternalOrBuildRel(toPosix(path.relative(pkgDir, resolved)))
        ) {
          return resolved;
        }
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
            if (isSegOrPrefix(relInBase, 'node_modules')) {
              return defaultHost.directoryExists(path.join(pkgDir, relInBase));
            }
            const repoRel = relInBase
              ? toPosix(path.posix.join(relPkgDir, relInBase))
              : relPkgDir;
            return baseTree.dirs.has(repoRel);
          }
          if (headTree !== null && isInsideDir(resolved, pkgDir)) {
            const relInPkg = toPosix(path.relative(pkgDir, resolved));
            if (!isExternalOrBuildRel(relInPkg)) {
              const repoRel = relInPkg
                ? toPosix(path.posix.join(relPkgDir, relInPkg))
                : relPkgDir;
              return headTree.dirs.has(repoRel);
            }
          }
          return defaultHost.directoryExists(resolved);
        },
        fileExists(fileName) {
          const resolved = path.resolve(fileName);
          if (isBaseVirtual(resolved)) {
            const relInBase = toPosix(path.relative(basePkgRoot, resolved));
            if (isSegOrPrefix(relInBase, 'node_modules')) {
              return defaultHost.fileExists(path.join(pkgDir, relInBase));
            }
            const repoRel = toPosix(path.posix.join(relPkgDir, relInBase));
            return baseTree.files.has(repoRel);
          }
          if (headTree !== null && isInsideDir(resolved, pkgDir)) {
            const relInPkg = toPosix(path.relative(pkgDir, resolved));
            if (!isExternalOrBuildRel(relInPkg)) {
              const repoRel = toPosix(path.posix.join(relPkgDir, relInPkg));
              return headTree.files.has(repoRel);
            }
          }
          return defaultHost.fileExists(resolved);
        },
        readFile(fileName) {
          const resolved = path.resolve(fileName);
          if (isBaseVirtual(resolved)) {
            const relInBase = toPosix(path.relative(basePkgRoot, resolved));
            if (isSegOrPrefix(relInBase, 'node_modules')) {
              return defaultHost.readFile(path.join(pkgDir, relInBase));
            }
            const repoRel = toPosix(path.posix.join(relPkgDir, relInBase));
            return getFileAtRev(baseRev, repoRel);
          }
          if (headRev !== null && isInsideDir(resolved, pkgDir)) {
            const relInPkg = toPosix(path.relative(pkgDir, resolved));
            if (!isExternalOrBuildRel(relInPkg)) {
              const repoRel = toPosix(path.posix.join(relPkgDir, relInPkg));
              return getFileAtRev(headRev, repoRel);
            }
          }
          return defaultHost.readFile(resolved);
        },
        resolveModuleNameLiterals(
          moduleLiterals,
          containingFile,
          redirectedReference,
          options,
        ) {
          const isBaseContain = isBaseVirtual(path.resolve(containingFile));
          const effectiveOptions = isBaseContain
            ? {
                ...options,
                module: baseCompilerOptions.module,
                moduleResolution: baseCompilerOptions.moduleResolution,
                baseUrl: baseCompilerOptions.baseUrl,
                paths: baseCompilerOptions.paths,
                pathsBasePath: baseCompilerOptions.pathsBasePath,
                rootDirs: baseCompilerOptions.rootDirs,
              }
            : options;
          return moduleLiterals.map(lit => {
            const res = ts.resolveModuleName(
              lit.text,
              containingFile,
              effectiveOptions,
              this,
              undefined,
              redirectedReference,
            );
            if (res.resolvedModule) {
              let rf = path.resolve(res.resolvedModule.resolvedFileName);
              if (isBaseVirtual(rf)) {
                const rel = toPosix(path.relative(basePkgRoot, rf));
                if (isSegOrPrefix(rel, 'node_modules')) {
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
          let resolved = path.resolve(fileName);
          if (isBaseVirtual(resolved)) {
            const relInBase = toPosix(path.relative(basePkgRoot, resolved));
            if (isSegOrPrefix(relInBase, 'node_modules')) {
              resolved = fromBasePkgPath(resolved);
            }
          }
          if (pkgSfCache.has(resolved)) return pkgSfCache.get(resolved);
          if (isInPkgSource(resolved)) {
            const text = this.readFile(resolved);
            if (text === undefined) return undefined;
            const sf = ts.createSourceFile(
              resolved,
              text,
              languageVersion,
              true,
            );
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
            resolved,
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

      const resolveFirstSource = (targets, parsed, existsFn) =>
        targets
          .map(t => mapTargetToPackageSource(pkgDir, t, parsed, existsFn))
          .find(Boolean) || null;

      const addEntryPair = (entryPairs, bFile, hFile) => {
        if (!bFile) return;
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
      };

      const resolveLaneSources = (lane, parsed, existsFn) => {
        if (!lane) return [];
        const files = [];
        if (lane.supportsImport) {
          files.push(
            resolveFirstSource(
              [...lane.importTargets, ...lane.defaultTargets],
              parsed,
              existsFn,
            ),
          );
        }
        if (lane.supportsRequire) {
          files.push(
            resolveFirstSource(
              [...lane.requireTargets, ...lane.defaultTargets],
              parsed,
              existsFn,
            ),
          );
        }
        if (files.filter(Boolean).length === 0) {
          files.push(
            resolveFirstSource(lane.defaultTargets, parsed, existsFn),
            resolveFirstSource(lane.allTargets, parsed, existsFn),
          );
        }
        return [...new Set(files.filter(Boolean))];
      };

      const entryPairs = [];
      const baseSubpathEntries = [...baseEntryInfo.subpaths.entries()];
      if (basePkgJson.exports && baseSubpathEntries.length > 0) {
        if (!headPkgJson.exports) {
          // `exports` was removed completely: compare base `.` lanes against head fallback entrypoint!
          const rootLane = baseEntryInfo.subpaths.get('.');
          if (rootLane) {
            const uniqueB = resolveLaneSources(
              rootLane,
              baseTsParsed,
              baseExistsAbs,
            );
            for (const bFile of uniqueB) {
              const hFile = headEntryInfo.primaryFile || null;
              addEntryPair(entryPairs, bFile, hFile);
            }
          }
          for (const [subpath, bLane] of baseSubpathEntries) {
            if (subpath !== '.' && headEntryInfo.subdirSubpaths.has(subpath)) {
              const hSubFile =
                headEntryInfo.subdirSourceMap.get(subpath) || null;
              for (const bFile of resolveLaneSources(
                bLane,
                baseTsParsed,
                baseExistsAbs,
              )) {
                addEntryPair(entryPairs, bFile, hSubFile);
              }
            }
          }
        } else {
          for (const [subpath, bLane] of baseSubpathEntries) {
            const hLane = headEntryInfo.subpaths.get(subpath);
            if (!hLane) continue;

            const laneCandidates = [];
            if (bLane.supportsImport && hLane.supportsImport) {
              laneCandidates.push([
                [...bLane.importTargets, ...bLane.defaultTargets],
                [...hLane.importTargets, ...hLane.defaultTargets],
              ]);
            }
            if (bLane.supportsRequire && hLane.supportsRequire) {
              laneCandidates.push([
                [...bLane.requireTargets, ...bLane.defaultTargets],
                [...hLane.requireTargets, ...hLane.defaultTargets],
              ]);
            }
            if (laneCandidates.length === 0) {
              laneCandidates.push([bLane.allTargets, hLane.allTargets]);
            }

            for (const [bTargets, hTargets] of laneCandidates) {
              const bFile = resolveFirstSource(
                bTargets,
                baseTsParsed,
                baseExistsAbs,
              );
              const hFile = resolveFirstSource(
                hTargets,
                headTsParsed,
                headExistsAbs,
              );
              addEntryPair(entryPairs, bFile, hFile);
            }
          }
        }
      } else if (headPkgJson.exports) {
        // Legacy `"main"`/`"types"` migrated to `package.json#exports`
        if (baseEntryInfo.primaryFile) {
          const hRootLane = headEntryInfo.subpaths.get('.');
          if (hRootLane) {
            const hFiles = resolveLaneSources(
              hRootLane,
              headTsParsed,
              headExistsAbs,
            );
            if (hFiles.length === 0) {
              addEntryPair(entryPairs, baseEntryInfo.primaryFile, null);
            } else {
              for (const hFile of hFiles) {
                addEntryPair(entryPairs, baseEntryInfo.primaryFile, hFile);
              }
            }
          }
        }
        for (const [
          subKey,
          bSubFile,
        ] of baseEntryInfo.subdirSourceMap.entries()) {
          const hSubLane = headEntryInfo.subpaths.get(subKey);
          if (hSubLane) {
            const hFiles = resolveLaneSources(
              hSubLane,
              headTsParsed,
              headExistsAbs,
            );
            if (hFiles.length === 0) {
              addEntryPair(entryPairs, bSubFile, null);
            } else {
              for (const hFile of hFiles) {
                addEntryPair(entryPairs, bSubFile, hFile);
              }
            }
          }
        }
      } else {
        if (baseEntryInfo.primaryFile) {
          addEntryPair(
            entryPairs,
            baseEntryInfo.primaryFile,
            headEntryInfo.primaryFile,
          );
        }
        for (const [
          subKey,
          bSubFile,
        ] of baseEntryInfo.subdirSourceMap.entries()) {
          if (headEntryInfo.subdirSubpaths.has(subKey)) {
            addEntryPair(
              entryPairs,
              bSubFile,
              headEntryInfo.subdirSourceMap.get(subKey) || null,
            );
          }
        }
      }

      if (entryPairs.length === 0) continue;

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
      const entrypointDtsTargets = srcRoots.map(s =>
        toDtsFileName(path.resolve(s)),
      );
      const {dtsFiles, rawMetaByFile} = emitToNormalizedDtsMap(
        srcRoots,
        isInPkgSource,
        compilerOptions,
        customHost,
        {
          baseCompilerOptions,
          isBaseFilePredicate: isBaseVirtual,
          entrypointDtsTargets,
          packageName: headPkgJson.name || basePkgJson.name || null,
        },
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
            if (rel.endsWith('.json') || isSegOrPrefix(rel, 'node_modules')) {
              return customHost.fileExists(resolved);
            }
            return false;
          }
          if (isInsideDir(resolved, pkgDir)) {
            const relInPkg = toPosix(path.relative(pkgDir, resolved));
            if (!isExternalOrBuildRel(relInPkg)) {
              if (relInPkg.endsWith('.json')) {
                return customHost.fileExists(resolved);
              }
              return false;
            }
          }
          return defaultHost.fileExists(resolved);
        },
        readFile(f) {
          const resolved = path.resolve(f);
          if (isBaseVirtual(resolved)) {
            const rel = toPosix(path.relative(basePkgRoot, resolved));
            if (rel.endsWith('.json') || isSegOrPrefix(rel, 'node_modules')) {
              return customHost.readFile(resolved);
            }
            return undefined;
          }
          if (isInsideDir(resolved, pkgDir)) {
            const relInPkg = toPosix(path.relative(pkgDir, resolved));
            if (!isExternalOrBuildRel(relInPkg)) {
              if (relInPkg.endsWith('.json')) {
                return customHost.readFile(resolved);
              }
              return undefined;
            }
          }
          return defaultHost.readFile(resolved);
        },
        resolveModuleNameLiterals(lits, containingFile, redir, opts) {
          return customHost.resolveModuleNameLiterals.call(
            this,
            lits,
            containingFile,
            redir,
            opts,
          );
        },
        getSourceFile(fileName, lv, onError, shouldCreate) {
          const resolved = path.resolve(fileName);
          if (isInPkgSource(resolved) && resolved.endsWith('.json')) {
            const text = this.readFile(resolved);
            if (text === undefined) return undefined;
            return ts.createSourceFile(resolved, text, lv, true);
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
    } catch (err) {
      console.warn(
        `Warning: skipping breaking change check for ${relPkgDir} due to unexpected error: ${err.message}`,
      );
    }
  }

  return [...new Set(allErrors)];
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

export function escapeMarkdownSummaryText(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/([`*_[\]])/g, '\\$1')
    .replace(/\r?\n/g, ' ');
}

const MAX_SUMMARY_ITEMS_OVERFLOW = 200;

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
      const cappedOverflow = overflow.slice(0, MAX_SUMMARY_ITEMS_OVERFLOW);
      const summaryLines = [
        '### ⚠️ Breaking Changes Detected in Public TypeScript Interfaces',
        '',
        `Detected **${errors.length}** breaking change(s) in public TypeScript interfaces:`,
        '',
        ...shown.map(err => `- ${escapeMarkdownSummaryText(err)}`),
      ];
      if (cappedOverflow.length > 0) {
        summaryLines.push(
          '',
          `<details><summary>Show ${overflow.length} remaining breaking change(s)</summary>`,
          '',
          ...cappedOverflow.map(err => `- ${escapeMarkdownSummaryText(err)}`),
        );
        if (overflow.length > MAX_SUMMARY_ITEMS_OVERFLOW) {
          summaryLines.push(
            `- ...and ${overflow.length - MAX_SUMMARY_ITEMS_OVERFLOW} more breaking change(s) (see full job logs).`,
          );
        }
        summaryLines.push('', '</details>');
      }
      summaryLines.push('');
      try {
        fs.appendFileSync(
          process.env.GITHUB_STEP_SUMMARY,
          summaryLines.join('\n'),
        );
      } catch {
        // Ignore step summary size/write limits so exit code is preserved.
      }
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
