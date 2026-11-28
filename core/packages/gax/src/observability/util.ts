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
 * using the exact `DebugLogBackendBase` / `NodeBackend.setFilters()` algorithm
 * in `google-logging-utils` (literal `'all'` or `'true'` maps to `'*'`, followed by
 * comma-separated case-insensitive patterns with `*` wildcards and no whitespace trimming).
 */
function matchesLoggingEnvFilter(envOptIn: string, namespace: string): boolean {
  if (!envOptIn) {
    return false;
  }
  const totalFilters =
    envOptIn === 'all' || envOptIn === 'true' ? '*' : envOptIn;
  const regexp = totalFilters
    .replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
    .replace(/\*/g, '.*')
    .replace(/,/g, '$|^');
  return new RegExp(`^${regexp}$`, 'i').test(namespace);
}

/**
 * Checks if telemetry logging is enabled.
 *
 * Logging is only enabled when a user explicitly passes
 * `enableTelemetryLogging: true` in their client/call options or, when
 * `enableTelemetryLogging` is unset, the `GOOGLE_SDK_NODE_LOGGING` environment
 * variable matches the client service namespace using `google-logging-utils`
 * filter semantics (`'*'`, exact `'all'` / `'true'`, or comma-separated
 * wildcard patterns). Passing `enableTelemetryLogging: false` suppresses
 * logging for that client/call even when `GOOGLE_SDK_NODE_LOGGING` matches.
 *
 * @param settings
 * @returns true if telemetry logging is enabled, false otherwise
 */
export function checkLoggingEnabled(settings?: CallSettings): boolean {
  if (typeof settings?.enableTelemetryLogging === 'boolean') {
    return settings.enableTelemetryLogging;
  }
  if (settings?.otherArgs?.enableTelemetryLogging === true) {
    return true;
  }

  const env: Record<string, string | undefined> =
    typeof process === 'object' && typeof process.env === 'object'
      ? process.env
      : {};

  const envOptIn = env.GOOGLE_SDK_NODE_LOGGING;
  if (!envOptIn) {
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
