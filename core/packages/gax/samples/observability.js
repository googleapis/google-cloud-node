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

// [START gax_observability]
'use strict';

// Logging and tracing in Google Cloud Node.js client libraries are completely
// orthogonal: you can enable logging without OpenTelemetry tracing
// (`!tracingEnabled && loggingEnabled`), tracing without logging, or both
// simultaneously. When both are active, failed RPC logs automatically include
// `telemetryTraceId` and `telemetrySpanId` for trace-log correlation.

// [START gax_observability_tracing]
async function enableTracing() {
  // 1. IMPORT OPENTELEMETRY MODULES
  const {NodeTracerProvider} = require('@opentelemetry/sdk-trace-node');
  const {BatchSpanProcessor} = require('@opentelemetry/sdk-trace-base');
  const {
    TraceExporter,
  } = require('@google-cloud/opentelemetry-cloud-trace-exporter');

  // 2. CONFIGURE TRACING: SET UP A TRACER PROVIDER AND EXPORTER
  const cloudTraceExporter = new TraceExporter();
  const spanProcessor = new BatchSpanProcessor(cloudTraceExporter);

  const provider = new NodeTracerProvider({
    spanProcessors: [spanProcessor],
  });
  provider.register();

  // 3. ENABLE TRACING SPANS
  // Set the flag before client libraries or RPC callers initialize, or pass
  // `{enableTelemetryTracing: true}` to an individual client constructor.
  process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';

  // 4. IMPORT CLIENT LIBRARIES AFTER OPENTELEMETRY SETUP
  // Replace with your Google Cloud client library, for example:
  // const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');
  // const client = new SecretManagerServiceClient();
  // await client.listSecrets({parent: 'projects/my-project'});

  // 5. FLUSH SPANS BEFORE PROCESS EXIT
  // Ensures all buffered spans in BatchSpanProcessor are exported to Cloud Trace
  await provider.forceFlush();
  console.log('Tracing initialized successfully.');
}
// [END gax_observability_tracing]

// [START gax_observability_logging]
async function enableLogging() {
  // Telemetry logging does not require OpenTelemetry setup (`!tracingEnabled && loggingEnabled`).
  const util = require('util');
  const {loggingUtils} = require('google-gax');

  // 1. ENABLE TELEMETRY LOGGING
  // In production, prefer `{enableTelemetryLogging: true}` on the client or a
  // service-scoped filter (e.g. `GOOGLE_SDK_NODE_LOGGING=secretmanager`) over
  // `*`, `true`, or `all` so `'auth'` debug logs remain disabled.
  process.env.GOOGLE_SDK_NODE_LOGGING = 'secretmanager';

  // Or enable logging for a specific client without setting an env variable:
  // const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');
  // const client = new SecretManagerServiceClient({enableTelemetryLogging: true});

  // 2. CONFIGURE AN OUTPUT BACKEND (DEFAULT NODEBACKEND OR PLUGGABLE BACKEND)
  // Option A — Default `NodeBackend` (writes formatted log lines to `stderr`):
  // No configuration is needed to use the default backend (`undefined` resets to default).
  loggingUtils.setBackend(undefined);

  // Option B — Built-in structured JSON backend (writes Cloud Logging JSON):
  // loggingUtils.setBackend(loggingUtils.getStructuredBackend());

  // Option C — Pluggable custom backend (e.g. Pino, Winston, Bunyan, or custom filtering):
  const customBackend = {
    setFilters() {
      // Receives filters parsed from `GOOGLE_SDK_NODE_LOGGING`, if needed.
    },
    log(namespace, fields, ...args) {
      // Skip `'auth'` debug logs if only client RPC telemetry logs are desired.
      if (namespace === 'auth') {
        return;
      }
      const entry = {
        namespace,
        severity: fields.severity,
        message: util.format(...args),
        ...(fields.telemetryTraceId
          ? {telemetryTraceId: fields.telemetryTraceId}
          : {}),
        ...(fields.telemetrySpanId
          ? {telemetrySpanId: fields.telemetrySpanId}
          : {}),
        ...(fields.other || {}),
      };
      // Forward `entry` to your preferred logger (Pino, Winston, stdout, etc.):
      console.log(JSON.stringify(entry));
    },
  };
  loggingUtils.setBackend(customBackend);

  // 3. CALL CLIENT LIBRARIES AS USUAL
  // Failed API calls emit structured `WARNING` logs and failed transport
  // attempts emit `DEBUG` logs through the configured backend.
  // await client.listSecrets({parent: 'projects/my-project'});

  console.log('Logging initialized successfully.');
}
// [END gax_observability_logging]

async function main() {
  // Enable logging independently (works with or without OpenTelemetry tracing):
  await enableLogging();

  // Enable OpenTelemetry tracing independently (works with or without logging):
  await enableTracing();
}

main().catch(console.error);
// [END gax_observability]
