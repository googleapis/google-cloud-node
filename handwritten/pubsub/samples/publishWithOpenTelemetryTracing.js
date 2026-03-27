// Copyright 2020-2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// This is a generated sample, using the typeless sample bot. Please
// look for the source TypeScript sample (.ts) for modifications.
'use strict';

/**
 * This sample demonstrates how to add OpenTelemetry tracing to the
 * Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Publish with OpenTelemetry Tracing
//   description: Demonstrates how to enable OpenTelemetry tracing in a publisher.
//   usage: node openTelemetryTracing.js <topic-name-or-id>

const OTEL_TIMEOUT = 2;

// [START pubsub_publish_otel_tracing]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_OR_ID';
// const data = 'Hello, world!";

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Imports the OpenTelemetry API
const {NodeTracerProvider} = require('@opentelemetry/sdk-trace-node');
const {diag, DiagConsoleLogger, DiagLogLevel} = require('@opentelemetry/api');
const {SimpleSpanProcessor} = require('@opentelemetry/sdk-trace-base');

// To output to the console for testing, use the ConsoleSpanExporter.
// import {ConsoleSpanExporter} from '@opentelemetry/sdk-trace-base';

// To output to Cloud Trace, import the OpenTelemetry bridge library.
const {
  TraceExporter,
} = require('@google-cloud/opentelemetry-cloud-trace-exporter');

const {Resource} = require('@opentelemetry/resources');
const {
  SEMRESATTRS_SERVICE_NAME,
} = require('@opentelemetry/semantic-conventions');

// Enable the diagnostic logger for OpenTelemetry
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

// Log spans out to the console, for testing.
// const exporter = new ConsoleSpanExporter();

// Log spans out to Cloud Trace, for production.
const exporter = new TraceExporter();

// Build a tracer provider and a span processor to do
// something with the spans we're generating.
const provider = new NodeTracerProvider({
  resource: new Resource({
    [SEMRESATTRS_SERVICE_NAME]: 'otel publisher example',
  }),
});
const processor = new SimpleSpanProcessor(exporter);
provider.addSpanProcessor(processor);
provider.register();

// Creates a client; cache this for further use.
const pubSubClient = new PubSub({enableOpenTelemetryTracing: true});

async function publishMessage(topicNameOrId, data) {
  // Publishes the message as a string, e.g. "Hello, world!"
  // or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  // Cache topic objects (publishers) and reuse them.
  const publisher = pubSubClient.topic(topicNameOrId);

  const messageId = await publisher.publishMessage({data: dataBuffer});
  console.log(`Message ${messageId} published.`);

  // The rest of the sample is in service to making sure that any
  // buffered Pub/Sub messages and/or OpenTelemetry spans are properly
  // flushed to the server side. In normal usage, you'd only need to do
  // something like this on process shutdown.
  await publisher.flush();
  await processor.forceFlush();
  await new Promise(r => setTimeout(r, OTEL_TIMEOUT * 1000));
}
// [END pubsub_publish_otel_tracing]

function main(topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID', data = 'Hello, world!') {
  publishMessage(topicNameOrId, data).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));
