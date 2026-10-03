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

// 3. ENABLE TRACING SPANS WITH ENV VARIABLE
// Sets the flag before client libraries or RPC callers initialize
process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';

// 4. IMPORT CLIENT LIBRARIES AFTER OPENTELEMETRY SETUP
// Replace with your Google Cloud client library, for example:
// const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

async function main() {
  // const client = new SecretManagerServiceClient();
  // await client.listSecrets({parent: 'projects/my-project'});

  // 5. FLUSH SPANS BEFORE PROCESS EXIT
  // Ensures all buffered spans in BatchSpanProcessor are exported to Cloud Trace
  await provider.forceFlush();
  console.log('Tracing initialized successfully.');
}

main().catch(console.error);
// [END gax_observability]
