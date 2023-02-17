// Copyright 2019-2021 Google LLC
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
 * This application demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Listen For Avro Records
//   description: Listens for records in Avro encoding from a subscription.
//   usage: node listenForAvroRecords.js <subscription-name-or-id> [timeout-in-seconds]

// [START pubsub_subscribe_avro_records]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';
// const timeout = 60;

// Imports the Google Cloud client library
const {PubSub, Schema, Encodings} = require('@google-cloud/pubsub');

// Node FS library, to load definitions
const fs = require('fs');

// And the Apache Avro library
const avro = require('avro-js');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

function listenForAvroRecords(subscriptionNameOrId, timeout) {
  // References an existing subscription
  const subscription = pubSubClient.subscription(subscriptionNameOrId);

  // Make an encoder using the official avro-js library.
  const definition = fs
    .readFileSync('system-test/fixtures/provinces.avsc')
    .toString();
  const type = avro.parse(definition);

  // Create an event handler to handle messages
  let messageCount = 0;
  const messageHandler = async message => {
    // "Ack" (acknowledge receipt of) the message
    message.ack();

    // Get the schema metadata from the message.
    const schemaMetadata = Schema.metadataFromMessage(message.attributes);

    let result;
    switch (schemaMetadata.encoding) {
      case Encodings.Binary:
        result = type.fromBuffer(message.data);
        break;
      case Encodings.Json:
        result = type.fromString(message.data.toString());
        break;
      default:
        console.log(`Unknown schema encoding: ${schemaMetadata.encoding}`);
        break;
    }

    console.log(`Received message ${message.id}:`);
    console.log(`\tData: ${JSON.stringify(result, null, 4)}`);
    console.log(`\tAttributes: ${message.attributes}`);
    messageCount += 1;
  };

  // Listen for new messages until timeout is hit
  subscription.on('message', messageHandler);

  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
}
// [END pubsub_subscribe_avro_records]

function main(
  subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID',
  timeout = 60
) {
  timeout = Number(timeout);

  try {
    listenForAvroRecords(subscriptionNameOrId, timeout);
  } catch (err) {
    console.error(err.message);
    process.exitCode = 1;
  }
}

main(...process.argv.slice(2));
