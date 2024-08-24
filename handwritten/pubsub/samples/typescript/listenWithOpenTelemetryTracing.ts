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

/**
 * This sample demonstrates how to add OpenTelemetry tracing to the
 * Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Subscribe with OpenTelemetry Tracing
//   description: Demonstrates how to enable OpenTelemetry tracing in a subscriber.
//   usage: node listenWithOpenTelemetryTracing.js <subscription-name-or-id>

const OTEL_TIMEOUT = 2;
const SUBSCRIBER_TIMEOUT = 10;

// [START pubsub_subscribe_otel_tracing]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_OR_ID';

// Imports the Google Cloud client library
import {Message, PubSub} from '@google-cloud/pubsub';

// Imports the OpenTelemetry API
import {NodeTracerProvider} from '@opentelemetry/sdk-trace-node';
import {diag, DiagConsoleLogger, DiagLogLevel} from '@opentelemetry/api';
import {SimpleSpanProcessor} from '@opentelemetry/sdk-trace-base';

// To output to the console for testing, use the ConsoleSpanExporter.
// import {ConsoleSpanExporter} from '@opentelemetry/sdk-trace-base';

// To output to Cloud Trace, import the OpenTelemetry bridge library.
import {TraceExporter} from '@google-cloud/opentelemetry-cloud-trace-exporter';

import {Resource} from '@opentelemetry/resources';
import {SEMRESATTRS_SERVICE_NAME} from '@opentelemetry/semantic-conventions';

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
    [SEMRESATTRS_SERVICE_NAME]: 'otel subscriber example',
  }),
});
const processor = new SimpleSpanProcessor(exporter);
provider.addSpanProcessor(processor);
provider.register();

// Creates a client; cache this for further use.
const pubSubClient = new PubSub({enableOpenTelemetryTracing: true});

async function subscriptionListen(subscriptionNameOrId: string) {
  const subscriber = pubSubClient.subscription(subscriptionNameOrId);

  // Message handler for subscriber
  const messageHandler = async (message: Message) => {
    console.log(`Message ${message.id} received.`);
    message.ack();
  };

  // Error handler for subscriber
  const errorHandler = async (error: Error) => {
    console.log('Received error:', error);
  };

  // Listens for new messages from the topic
  subscriber.on('message', messageHandler);
  subscriber.on('error', errorHandler);

  // Ensures that all spans got flushed by the exporter. This function
  // is in service to making sure that any buffered Pub/Sub messages
  // and/or OpenTelemetry spans are properly flushed to the server
  // side. In normal usage, you'd only need to do something like this
  // on process shutdown.
  async function shutdown() {
    await subscriber.close();
    await processor.forceFlush();
    await new Promise(r => setTimeout(r, OTEL_TIMEOUT * 1000));
  }

  // Wait a bit for the subscription to receive messages, then shut down
  // gracefully. This is for the sample only; normally you would not need
  // this delay.
  await new Promise<void>(r =>
    setTimeout(async () => {
      subscriber.removeAllListeners();
      await shutdown();
      r();
    }, SUBSCRIBER_TIMEOUT * 1000)
  );
}
// [END pubsub_subscribe_otel_tracing]

function main(subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID') {
  subscriptionListen(subscriptionNameOrId).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));
