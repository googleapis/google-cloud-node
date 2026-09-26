/**
 * Copyright 2020 Google LLC
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

// 1. INITIALIZE OPENTELEMETRY BEFORE IMPORTING ANY CLIENT LIBRARIES
// In Node.js, instrumentations must patch the networking modules (http, grpc)
// before any Google Cloud client libraries are loaded into the module cache.
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { BatchSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { TraceExporter } = require('@google-cloud/opentelemetry-cloud-trace-exporter');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const { GrpcInstrumentation } = require('@opentelemetry/instrumentation-grpc');

// 2. CONFIGURE TRACING: SET UP A TRACER PROVIDER AND EXPORTER
const cloudTraceExporter = new TraceExporter();
const spanProcessor = new BatchSpanProcessor(cloudTraceExporter);

const provider = new NodeTracerProvider({
  spanProcessors: [spanProcessor],
});
provider.register();

// 3. ENABLE T4 TRACING SPANS USING INSTRUMENTATION LIBRARIES
registerInstrumentations({
  instrumentations: [
    new HttpInstrumentation(),
    new GrpcInstrumentation(),
  ],
});

// 4. ENABLE T3 TRACING SPANS WITH ENV VARIABLE
// Sets the flag before client libraries or RPC callers initialize
process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';

// 5. IMPORT CLIENT LIBRARIES AFTER OPENTELEMETRY SETUP
// Replace with your Google Cloud client library, for example:
// const { Storage } = require('@google-cloud/storage');

async function main() {
  // const client = new Storage();
  // await client.getBuckets();

  // 6. FLUSH SPANS BEFORE PROCESS EXIT
  // Ensures all buffered spans in BatchSpanProcessor are exported to Cloud Trace
  await provider.forceFlush();
  console.log('Tracing initialized successfully.');
}

main().catch(console.error);
// [END gax_observability]
