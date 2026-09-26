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
async function main() {

  // 1. IMPORT REQUIRED MODULES
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
  // NOTE: registerInstrumentations must be called BEFORE requiring any
  // Google Cloud client libraries so that network modules are properly patched.
  registerInstrumentations({
    instrumentations: [
      new HttpInstrumentation(),
      new GrpcInstrumentation(),
    ],
  });

  // 4. ENABLE T3 TRACING SPANS WITH ENV VARIABLE
  process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';

  // 5. IMPORT CLIENT LIBRARY & MAKE AN API CALL
  // Replace with your Google Cloud client library, for example:
  // const { Storage } = require('@google-cloud/storage');
  // const client = new Storage();
  // await client.getBuckets();

  // 6. FLUSH SPANS BEFORE PROCESS EXIT
  // Ensures all buffered spans in BatchSpanProcessor are exported to Cloud Trace
  await provider.forceFlush();
}

main().catch(console.error);
// [END gax_observability]
