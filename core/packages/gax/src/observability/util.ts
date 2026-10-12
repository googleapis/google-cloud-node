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

/**
 * Checks if telemetry tracing is enabled.
 *
 * If `GOOGLE_SDK_NODE_ENABLE_TRACING` is explicitly set, then the client option
 * doesn't matter (only the environment variable determines whether tracing is enabled).
 * The client option is only checked if the environment variable isn't set.
 *
 * Tracing can be enabled purely through environment variables without
 * requiring client libraries to pass generator parameters, as metadata
 * is resolved dynamically at runtime.
 *
 * If the environment variable is not set, tracing requires the client option
 * and the client must have supplied `internalTelemetryInfo` (the extra protoc param).
 *
 * @param settings
 * @returns true if telemetry tracing is enabled, false otherwise
 */
export function checkTelemetryEnabled(settings?: CallSettings): boolean {
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

  const clientOptIn = Boolean(
    settings?.enableTelemetryTracing ||
    settings?.otherArgs?.enableTelemetryTracing,
  );

  return (
    clientOptIn && settings?.otherArgs?.internalTelemetryInfo !== undefined
  );
}
