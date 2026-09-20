/*!
 * Copyright 2025 Google LLC. All Rights Reserved.
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

// sample-metadata:
//   title: Observability (Tracing) with OpenTelemetry
//   usage: node observability-traces.js <PROJECT-ID> <INSTANCE-ID> <DATABASE-ID>

'use strict';

async function main(
  projectId = 'my-project-id',
  instanceId = 'my-instance-id',
  databaseId = 'my-project-id',
) {
  // [START spanner_opentelemetry_traces_cloudtrace_usage]

  const {NodeTracerProvider} = require('@opentelemetry/sdk-trace-node');
  const {
    TraceExporter,
  } = require('@google-cloud/opentelemetry-cloud-trace-exporter');
  const {
    BatchSpanProcessor,
    TraceIdRatioBasedSampler,
  } = require('@opentelemetry/sdk-trace-base');
  const {Spanner} = require('@google-cloud/spanner');

  const traceExporter = new TraceExporter();

  // Create a provider with a custom sampler
  const provider = new NodeTracerProvider({
    sampler: new TraceIdRatioBasedSampler(1.0), // Sample 100% of traces
    spanProcessors: [new BatchSpanProcessor(traceExporter)],
  });

  // Uncomment following line to register tracerProvider globally or pass it in Spanner object
  // provider.register();

  // Set global propagator to propogate the trace context for end to end tracing.
  const {propagation} = require('@opentelemetry/api');
  const {W3CTraceContextPropagator} = require('@opentelemetry/core');
  propagation.setGlobalPropagator(new W3CTraceContextPropagator());

  const spanner = new Spanner({
    projectId: projectId,
    observabilityOptions: {
      tracerProvider: provider,
      // Enable extended tracing to allow your SQL statements to be annotated.
      enableExtendedTracing: true,
      // Enable end to end tracing.
      enableEndToEndTracing: true,
    },
  });

  // [END spanner_opentelemetry_traces_cloudtrace_usage]

  // Acquire the database handle.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  try {
    const query = {
      sql: 'SELECT 1',
    };
    const [rows] = await database.run(query);
    console.log(`Query: ${rows.length} found.`);
    rows.forEach(row => console.log(row));
  } finally {
    spanner.close();
  }

  provider.forceFlush();

  // This sleep gives ample time for the trace
  // spans to be exported to Google Cloud Trace.
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 8800);
  });
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
