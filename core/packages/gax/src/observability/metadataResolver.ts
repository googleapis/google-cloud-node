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

import {StaticTraceContext} from './TracerHelper';
import {CallSettings} from '../gax';

export const DEFAULT_GCP_REPO = 'googleapis/google-cloud-node';

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

let fallbackVersion: string | undefined;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  fallbackVersion = require('../../package.json').version;
} catch {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    fallbackVersion = require('../../../package.json').version;
  } catch {
    // Ignore fallback failure
  }
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
    const tokens = clientHeader.trim().split(/\s+/);
    for (const token of tokens) {
      const match = token.match(/^([^/]+(?:\/[^/]+)?)\/([^\s]+)$/);
      if (match) {
        const [, name, ver] = match;
        if (name === 'gapic') {
          result.gcpVersion = ver;
        } else if (name === 'gccl' && !result.gcpVersion) {
          result.gcpVersion = ver;
        } else if (
          !['gl-node', 'gl-web', 'grpc', 'rest', 'gax', 'auth'].includes(name)
        ) {
          result.gcpArtifact = name;
          if (!result.gcpVersion) {
            result.gcpVersion = ver;
          }
        }
      }
    }
  }

  if (typeof settings.apiName === 'string' && settings.apiName) {
    const serviceFromApi = extractServiceFromApiName(settings.apiName);
    if (serviceFromApi) {
      result.gcpClientService = serviceFromApi;
      if (!result.gcpArtifact) {
        result.gcpArtifact =
          serviceFromApi === 'gax'
            ? 'google-gax'
            : `@google-cloud/${serviceFromApi}`;
      }
    }
  }

  if (!result.gcpVersion && fallbackVersion) {
    result.gcpVersion = fallbackVersion;
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
 * Resolves static trace context dynamically at runtime by inspecting CallSettings
 * and standard defaults.
 *
 * @param {CallSettings} [settings] - Call settings for the RPC invocation.
 * @param {string} [_callerFilePath] - Optional explicit path to the caller source file (deprecated).
 * @returns {StaticTraceContext} The resolved static trace context.
 */
export function resolveStaticTraceContext(
  settings?: CallSettings,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _callerFilePath?: string,
): StaticTraceContext {
  const env: Record<string, string | undefined> =
    typeof process === 'object' && typeof process.env === 'object'
      ? process.env
      : {};
  const envTracing = env.GOOGLE_SDK_NODE_ENABLE_TRACING?.trim();
  const isEnvSet = envTracing !== undefined && envTracing !== '';

  // If GOOGLE_SDK_NODE_ENABLE_TRACING is explicitly set, the client option doesn't matter
  // and the extra protoc param only matters if the environmental variable isn't set.
  const explicit = !isEnvSet
    ? (settings?.otherArgs?.internalTelemetryInfo as
        StaticTraceContext | undefined)
    : undefined;

  if (
    explicit &&
    explicit.gcpClientService &&
    explicit.gcpVersion &&
    explicit.gcpArtifact
  ) {
    return {
      ...explicit,
      gcpRepo: DEFAULT_GCP_REPO,
    };
  }

  const cacheKey = settings?.apiName || 'default';

  let cached = metadataCache.get(cacheKey);
  if (!cached) {
    cached = extractFromSettings(settings);
    metadataCache.set(cacheKey, cached);
  }

  return {
    gcpClientService: explicit?.gcpClientService ?? cached.gcpClientService,
    gcpVersion: explicit?.gcpVersion ?? cached.gcpVersion,
    gcpRepo: DEFAULT_GCP_REPO,
    gcpArtifact: explicit?.gcpArtifact ?? cached.gcpArtifact,
  };
}
