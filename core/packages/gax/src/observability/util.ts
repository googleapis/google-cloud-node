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

import {CallSettings} from '../gax';
import {extractServiceFromApiName} from './contextUtil';

/**
 * Checks if telemetry tracing is enabled.
 *
 * Tracing is only enabled via the `GOOGLE_SDK_NODE_ENABLE_TRACING` environment
 * variable or when a user passes `enableTelemetryTracing: true` in their client options.
 * If `GOOGLE_SDK_NODE_ENABLE_TRACING` is explicitly set, it takes precedence over
 * the client option.
 *
 * @param settings
 * @returns true if telemetry tracing is enabled, false otherwise
 */
export function checkTracingEnabled(settings?: CallSettings): boolean {
  // `process` is undeclared in browsers and some edge runtimes, where reading
  // it would throw a ReferenceError rather than yield undefined, so it is
  // reached through a `typeof` guard and stands in as an empty environment.
  const env: Record<string, string | undefined> =
    typeof process === 'object' && typeof process.env === 'object'
      ? process.env
      : {};
  const envOptIn = env.GOOGLE_SDK_NODE_ENABLE_TRACING?.trim();

  if (envOptIn !== undefined && envOptIn !== '') {
    const lower = envOptIn.toLowerCase();
    return lower === 'true' || lower === '1';
  }

  return Boolean(
    settings?.enableTelemetryTracing ||
    settings?.otherArgs?.enableTelemetryTracing,
  );
}

/**
 * Matches a `GOOGLE_SDK_NODE_LOGGING` filter string against the logger namespace
 * following `DebugLogBackendBase` / `NodeBackend` semantics in `google-logging-utils`
 * (comma-separated case-insensitive filters with `*` wildcards, plus `'all'`, `'true'`,
 * and `'1'` enabling all namespaces and `'false'` / `'0'` matching none).
 */
function matchesLoggingEnvFilter(envOptIn: string, namespace: string): boolean {
  const lower = envOptIn.toLowerCase();
  if (lower === 'false' || lower === '0') {
    return false;
  }
  if (lower === 'true' || lower === '1' || lower === 'all' || lower === '*') {
    return true;
  }

  for (const rawToken of envOptIn.split(',')) {
    const token = rawToken.trim();
    if (!token) {
      continue;
    }
    const lowerToken = token.toLowerCase();
    if (lowerToken === 'false' || lowerToken === '0') {
      continue;
    }
    if (
      lowerToken === 'true' ||
      lowerToken === '1' ||
      lowerToken === 'all' ||
      lowerToken === '*'
    ) {
      return true;
    }
    const pattern = token
      .replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
      .replace(/\*+/g, '.*');
    if (new RegExp(`^${pattern}$`, 'i').test(namespace)) {
      return true;
    }
  }
  return false;
}

/**
 * Checks if telemetry logging is enabled.
 *
 * Logging is only enabled when `GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING` is enabled
 * AND either a user passes `enableTelemetryLogging: true` in their client options
 * or the `GOOGLE_SDK_NODE_LOGGING` environment variable matches the client service
 * namespace (supporting `'true'`, `'1'`, `'all'`, `'*'`, or comma-separated wildcard
 * filters matching `google-logging-utils`).
 *
 * @param settings
 * @returns true if telemetry logging is enabled, false otherwise
 */
export function checkLoggingEnabled(settings?: CallSettings): boolean {
  const env: Record<string, string | undefined> =
    typeof process === 'object' && typeof process.env === 'object'
      ? process.env
      : {};
  const experimentalOptIn =
    env.GOOGLE_SDK_NODE_EXPERIMENTAL_LOGGING?.trim().toLowerCase();
  if (experimentalOptIn !== 'true' && experimentalOptIn !== '1') {
    return false;
  }

  if (
    settings?.enableTelemetryLogging ||
    settings?.otherArgs?.enableTelemetryLogging
  ) {
    return true;
  }

  const envOptIn = env.GOOGLE_SDK_NODE_LOGGING?.trim();
  if (envOptIn === undefined || envOptIn === '') {
    return false;
  }

  const envService = (
    env.GOOGLE_SDK_NODE_CLIENT_SERVICE || env.GCP_CLIENT_SERVICE
  )?.trim();
  const apiService =
    typeof settings?.apiName === 'string' && settings.apiName
      ? extractServiceFromApiName(settings.apiName)
      : undefined;
  const namespace = envService || apiService || 'google-gax';

  return matchesLoggingEnvFilter(envOptIn, namespace);
}
