/*!
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

/**
 * This sample demonstrates how to add OpenTelemetry tracing to the
 * Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

'use strict';

// sample-metadata:
//   title: OpenTelemetry Tracing
//   description: Demonstrates how to enable OpenTelemetry tracing in
//     a publisher or subscriber.
//   usage: node openTelemetryTracing.js <topic-name> <subscription-name>

const SUBSCRIBER_TIMEOUT = 10;

function main(
  topicName = 'YOUR_TOPIC_NAME',
  subscriptionName = 'YOUR_SUBSCRIPTION_NAME',
  data = 'Hello, world!'
) {
  // [START opentelemetry_tracing]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const topicName = 'my-topic';
  // const subscriptionName = 'my-subscription';
  // const data = 'Hello, world!";

  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Imports the OpenTelemetry API
  const opentelemetry = require('@opentelemetry/api');

  // Imports the OpenTelemetry span handlers and exporter
  const {
    SimpleSpanProcessor,
    BasicTracerProvider,
    ConsoleSpanExporter,
  } = require('@opentelemetry/tracing');

  // Set up span processing and specify the console as the span exporter
  const provider = new BasicTracerProvider();
  const exporter = new ConsoleSpanExporter();
  provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

  provider.register();
  opentelemetry.trace.setGlobalTracerProvider(provider);

  // OpenTelemetry tracing is an optional feature and can be enabled by setting
  // enableOpenTelemetryTraceing as a publisher or subscriber option
  const enableOpenTelemetryTracing = {
    enableOpenTelemetryTracing: true,
  };

  // Creates a client; cache this for further use
  const pubSubClient = new PubSub();

  async function publishMessage() {
    // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
    const dataBuffer = Buffer.from(data);
    const messageId = await pubSubClient
      .topic(topicName, enableOpenTelemetryTracing)
      .publish(dataBuffer);
    console.log(`Message ${messageId} published.`);
  }

  async function subscriptionListen() {
    // Message handler for subscriber
    const messageHandler = message => {
      console.log(`Message ${message.id} received.`);
      message.ack();
      process.exit(0);
    };

    const errorHandler = error => {
      console.log('Received error:', error);
      process.exit(0);
    };

    // Listens for new messages from the topic
    pubSubClient.subscription(subscriptionName).on('message', messageHandler);
    pubSubClient.subscription(subscriptionName).on('error', errorHandler);

    setTimeout(() => {
      pubSubClient
        .subscription(subscriptionName, enableOpenTelemetryTracing)
        .removeAllListeners();
    }, SUBSCRIBER_TIMEOUT * 1000);
  }

  publishMessage().then(subscriptionListen());
  // [END opentelemetry_tracing]
}

main(...process.argv.slice(2));
