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
//   title: Observability (Tracing) with OpenTelemetry using OTLP
//   usage: node observability-traces-otlp.js <PROJECT-ID> <INSTANCE-ID> <DATABASE-ID>

'use strict';

async function main(
  projectId = 'my-project-id',
  instanceId = 'my-instance-id',
  databaseId = 'my-project-id',
) {
  // [START spanner_opentelemetry_traces_otlp_usage]
  const {NodeTracerProvider} = require('@opentelemetry/sdk-trace-node');
  const {
    OTLPTraceExporter,
  } = require('@opentelemetry/exporter-trace-otlp-grpc');
  const {
    BatchSpanProcessor,
    TraceIdRatioBasedSampler,
  } = require('@opentelemetry/sdk-trace-base');
  const {Resource} = require('@opentelemetry/resources');
  const {Spanner} = require('@google-cloud/spanner');

  // Define a Resource with service metadata
  const resource = new Resource({
    'service.name': 'my-service',
    'service.version': '1.0.0',
  });

  // Create an OTLP gRPC trace exporter
  const traceExporter = new OTLPTraceExporter({
    url: 'http://localhost:4317', // Default OTLP gRPC endpoint
  });

  // Create a provider with a custom sampler
  const provider = new NodeTracerProvider({
    sampler: new TraceIdRatioBasedSampler(1.0), // Sample 100% of traces
    resource,
    spanProcessors: [new BatchSpanProcessor(traceExporter)],
  });

  // Uncomment following line to register tracerProvider globally or pass it in Spanner object
  // provider.register();

  // Create the Cloud Spanner Client.
  const spanner = new Spanner({
    projectId: projectId,
    observabilityOptions: {
      tracerProvider: provider,
      enableExtendedTracing: true,
      enableEndToEndTracing: true,
    },
  });

  // [END spanner_opentelemetry_traces_otlp_usage]

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
