/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as fs from 'fs';
import * as path from 'path';
import {StaticTraceContext} from './TracerHelper';
import {CallSettings} from '../gax';
import {isTracingEnvExplicitlySet} from '../util';

/**
 * Checks whether a given file path belongs to internal Node.js runtime or google-gax implementation.
 */
function isInternalOrGaxFile(fileName: string): boolean {
  if (
    fileName.startsWith('node:') ||
    fileName.includes('internal/modules/') ||
    fileName.includes('internal\\modules\\') ||
    fileName.includes('node_modules/mocha/') ||
    fileName.includes('node_modules\\mocha\\')
  ) {
    return true;
  }

  const normalized = path.normalize(fileName);
  if (
    normalized.includes('/gax/src/') ||
    normalized.includes('\\gax\\src\\') ||
    normalized.includes('/gax/build/src/') ||
    normalized.includes('\\gax\\build\\src\\') ||
    normalized.includes('/google-gax/src/') ||
    normalized.includes('\\google-gax\\src\\') ||
    normalized.includes('/google-gax/build/src/') ||
    normalized.includes('\\google-gax\\build\\src\\')
  ) {
    return true;
  }

  return false;
}

/**
 * Inspects the call stack to identify the first file outside google-gax.
 */
export function getCallerFile(): string | undefined {
  const origPrepareStackTrace = Error.prepareStackTrace;
  try {
    Error.prepareStackTrace = (_, stack) => stack;
    const err = new Error();
    const stack = (err.stack as unknown as NodeJS.CallSite[]) || [];

    for (const frame of stack) {
      if (typeof frame?.getFileName !== 'function') {
        continue;
      }
      let fileName = frame.getFileName();
      if (!fileName) {
        continue;
      }
      if (fileName.startsWith('file://')) {
        try {
          fileName = new URL(fileName).pathname;
        } catch {
          fileName = fileName.replace(/^file:\/\//, '');
        }
      }
      if (isInternalOrGaxFile(fileName)) {
        continue;
      }
      return fileName;
    }
  } catch {
    // If prepareStackTrace fails, fallback to string stack parsing below
  } finally {
    Error.prepareStackTrace = origPrepareStackTrace;
  }

  try {
    const stackString = new Error().stack;
    if (typeof stackString === 'string') {
      const lines = stackString.split('\n');
      for (const line of lines) {
        const match = line.match(/(?:at\s+(?:.*?\s+\()?|@)(.+?):\d+:\d+/);
        if (match && match[1]) {
          let file = match[1];
          if (file.startsWith('file://')) {
            try {
              file = new URL(file).pathname;
            } catch {
              file = file.replace(/^file:\/\//, '');
            }
          }
          if (!isInternalOrGaxFile(file)) {
            return file;
          }
        }
      }
    }
  } catch {
    // Ignore fallback failure
  }

  return undefined;
}

/**
 * Searches upward from a starting directory or file to find the nearest package.json.
 */
export function findPackageJson(
  startFileOrDir: string,
): {filePath: string; pkg: Record<string, unknown>} | undefined {
  try {
    let dir: string;
    try {
      dir = fs.statSync(startFileOrDir).isDirectory()
        ? startFileOrDir
        : path.dirname(startFileOrDir);
    } catch {
      dir = path.dirname(startFileOrDir);
    }

    const root = path.parse(dir).root;

    while (dir && dir !== root) {
      const packageJsonPath = path.join(dir, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        try {
          const content = fs.readFileSync(packageJsonPath, 'utf8');
          const parsed = JSON.parse(content);
          if (parsed && typeof parsed === 'object') {
            return {filePath: packageJsonPath, pkg: parsed};
          }
        } catch {
          // If JSON parse fails, continue traversing upward
        }
      }
      const parent = path.dirname(dir);
      if (parent === dir) {
        break;
      }
      dir = parent;
    }
  } catch {
    return undefined;
  }
  return undefined;
}

/**
 * Normalizes git repository information into an "owner/repo" slug.
 */
export function extractRepo(repository: unknown): string | undefined {
  if (!repository) {
    return undefined;
  }
  const url =
    typeof repository === 'string'
      ? repository
      : typeof repository === 'object' &&
          repository !== null &&
          'url' in repository
        ? String((repository as {url: unknown}).url)
        : undefined;

  if (!url) {
    return undefined;
  }

  const githubMatch = url.match(
    /github\.com[:/]([^/]+)\/([^/.]+?)(?:\.git)?(?:[#?/]|$)/,
  );
  if (githubMatch) {
    return `${githubMatch[1]}/${githubMatch[2]}`;
  }

  if (/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(url)) {
    return url;
  }

  return undefined;
}

/**
 * Derives the GCP client service name from an NPM package name.
 */
export function extractClientServiceFromPackageName(name: string): string {
  const scopedMatch = name.match(/^@[^/]+\/(?:google-cloud-)?(.*)$/);
  if (scopedMatch && scopedMatch[1]) {
    return scopedMatch[1];
  }
  const unscopedMatch = name.match(/^google-cloud-(.*)$/);
  if (unscopedMatch && unscopedMatch[1]) {
    return unscopedMatch[1];
  }
  return name;
}

/**
 * Derives the GCP service name from a protobuf apiName (e.g. google.cloud.redis.v1.CloudRedis).
 */
export function extractServiceFromApiName(apiName: string): string | undefined {
  if (!apiName) {
    return undefined;
  }
  const parts = apiName.split('.');
  const versionIndex = parts.findIndex(p => /^v\d+(?:[a-z\d_]+)?$/i.test(p));
  if (versionIndex > 0) {
    return parts[versionIndex - 1];
  }
  if (parts.length >= 2) {
    const candidate = parts[parts.length - 2];
    if (candidate !== 'google' && candidate !== 'cloud') {
      return candidate;
    }
    const last = parts[parts.length - 1];
    return last[0].toLowerCase() + last.slice(1);
  }
  return undefined;
}

/**
 * Extracts static metadata from a package.json object.
 */
export function extractMetadataFromPackage(
  pkg: Record<string, unknown>,
): StaticTraceContext {
  const metadata: StaticTraceContext = {};

  if (typeof pkg.name === 'string' && pkg.name) {
    metadata.gcpArtifact = pkg.name;
    if (pkg.name !== 'google-gax') {
      metadata.gcpClientService = extractClientServiceFromPackageName(pkg.name);
    }
  }

  if (typeof pkg.version === 'string' && pkg.version) {
    metadata.gcpVersion = pkg.version;
  }

  if (pkg.repository) {
    metadata.gcpRepo = extractRepo(pkg.repository);
  }

  return metadata;
}

/**
 * Extracts static metadata from CallSettings headers or apiName.
 */
export function extractFromSettings(
  settings?: CallSettings,
): StaticTraceContext {
  const result: StaticTraceContext = {};
  if (!settings) {
    return result;
  }

  const headers = (
    settings.otherArgs as {headers?: Record<string, string>} | undefined
  )?.headers;
  const clientHeader = headers?.['x-goog-api-client'];
  if (typeof clientHeader === 'string') {
    const gapicMatch = clientHeader.match(/gapic\/([^\s]+)/);
    if (gapicMatch && gapicMatch[1]) {
      result.gcpVersion = gapicMatch[1];
    }
  }

  if (typeof settings.apiName === 'string' && settings.apiName) {
    const serviceFromApi = extractServiceFromApiName(settings.apiName);
    if (serviceFromApi) {
      result.gcpClientService = serviceFromApi;
    }
  }

  return result;
}

/**
 * Extracts static metadata from process environment variables.
 */
export function extractFromEnvironment(): StaticTraceContext {
  const env: Record<string, string | undefined> =
    typeof process === 'object' && typeof process.env === 'object'
      ? process.env
      : {};

  const result: StaticTraceContext = {};

  const service = env.GOOGLE_SDK_NODE_CLIENT_SERVICE || env.GCP_CLIENT_SERVICE;
  if (service?.trim()) {
    result.gcpClientService = service.trim();
  }

  const version = env.GOOGLE_SDK_NODE_CLIENT_VERSION || env.GCP_CLIENT_VERSION;
  if (version?.trim()) {
    result.gcpVersion = version.trim();
  }

  const repo = env.GOOGLE_SDK_NODE_REPO || env.GCP_REPO;
  if (repo?.trim()) {
    result.gcpRepo = repo.trim();
  }

  const artifact = env.GOOGLE_SDK_NODE_ARTIFACT || env.GCP_ARTIFACT;
  if (artifact?.trim()) {
    result.gcpArtifact = artifact.trim();
  }

  return result;
}

const metadataCache = new Map<string, StaticTraceContext>();

/**
 * Clears the cached static metadata. Used primarily in unit tests.
 */
export function clearMetadataCache(): void {
  metadataCache.clear();
}

/**
 * Resolves static trace context dynamically at runtime by inspecting the executing
 * environment, caller package tree (package.json), and CallSettings.
 *
 * @param {CallSettings} [settings] - Call settings for the RPC invocation.
 * @param {string} [callerFilePath] - Optional explicit path to the caller source file.
 * @returns {StaticTraceContext} The resolved static trace context.
 */
export function resolveStaticTraceContext(
  settings?: CallSettings,
  callerFilePath?: string,
): StaticTraceContext {
  // If GOOGLE_SDK_NODE_ENABLE_TRACING is explicitly set, the client option doesn't matter
  // and the extra protoc param only matters if the environmental variable isn't set.
  const explicit = !isTracingEnvExplicitlySet()
    ? (settings?.otherArgs?.internalTelemetryInfo as
        StaticTraceContext | undefined)
    : undefined;

  if (
    explicit &&
    explicit.gcpClientService &&
    explicit.gcpVersion &&
    explicit.gcpRepo &&
    explicit.gcpArtifact
  ) {
    return explicit;
  }

  const envMeta = extractFromEnvironment();
  const caller = callerFilePath || getCallerFile();
  const cacheKey = caller
    ? path.dirname(caller)
    : settings?.apiName || 'default';

  let cached = metadataCache.get(cacheKey);
  if (!cached) {
    let pkgMeta: StaticTraceContext = {};
    const pkgInfo = caller ? findPackageJson(caller) : undefined;
    if (pkgInfo) {
      pkgMeta = extractMetadataFromPackage(pkgInfo.pkg);
    } else if (
      typeof process === 'object' &&
      typeof process.cwd === 'function'
    ) {
      const cwdPkg = findPackageJson(process.cwd());
      if (cwdPkg) {
        pkgMeta = extractMetadataFromPackage(cwdPkg.pkg);
      }
    }

    cached = {
      gcpClientService: pkgMeta.gcpClientService,
      gcpVersion: pkgMeta.gcpVersion,
      gcpRepo: pkgMeta.gcpRepo || 'googleapis/google-cloud-node',
      gcpArtifact: pkgMeta.gcpArtifact,
    };

    metadataCache.set(cacheKey, cached);
  }

  const settingsMeta = extractFromSettings(settings);

  return {
    gcpClientService:
      explicit?.gcpClientService ??
      envMeta.gcpClientService ??
      cached.gcpClientService ??
      settingsMeta.gcpClientService,
    gcpVersion:
      explicit?.gcpVersion ??
      envMeta.gcpVersion ??
      cached.gcpVersion ??
      settingsMeta.gcpVersion,
    gcpRepo:
      explicit?.gcpRepo ??
      envMeta.gcpRepo ??
      cached.gcpRepo ??
      'googleapis/google-cloud-node',
    gcpArtifact:
      explicit?.gcpArtifact ?? envMeta.gcpArtifact ?? cached.gcpArtifact,
  };
}
