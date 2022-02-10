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

/**
 * This application demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Listen For Protobuf Messages
//   description: Listens for messages in protobuf encoding from a subscription.
//   usage: node listenForProtobufMessages.js <proto-filename> <subscription-name> [timeout-in-seconds]

// [START pubsub_subscribe_proto_messages]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';
// const timeout = 60;

// Imports the Google Cloud client library
import {PubSub, Schema, Encodings, Message} from '@google-cloud/pubsub';

// And the protobufjs library
import * as protobuf from 'protobufjs';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function listenForProtobufMessages(
  subscriptionNameOrId: string,
  timeout: number
) {
  // References an existing subscription
  const subscription = pubSubClient.subscription(subscriptionNameOrId);

  // Make an decoder using the protobufjs library.
  //
  // Since we're providing the test message for a specific schema here, we'll
  // also code in the path to a sample proto definition.
  const root = protobuf.loadSync('system-test/fixtures/provinces.proto');
  const Province = root.lookupType('utilities.Province');

  // Create an event handler to handle messages
  let messageCount = 0;
  const messageHandler = async (message: Message) => {
    // "Ack" (acknowledge receipt of) the message
    message.ack();

    // Get the schema metadata from the message.
    const schemaMetadata = Schema.metadataFromMessage(message.attributes);

    let result;
    switch (schemaMetadata.encoding) {
      case Encodings.Binary:
        result = Province.decode(message.data);
        break;
      case Encodings.Json:
        // This doesn't require decoding with the protobuf library,
        // since it's plain JSON. But you can still validate it against
        // your schema.
        result = JSON.parse(message.data.toString());
        console.log(`Validation of JSON: ${Province.verify(result)}`);
        break;
      default:
        console.log(`Unknown schema encoding: ${schemaMetadata.encoding}`);
        break;
    }

    console.log(`Received message ${message.id}:`);
    console.log(`\tData: ${JSON.stringify(result, null, 4)}`);
    console.log(`\tAttributes: ${JSON.stringify(message.attributes, null, 4)}`);
    messageCount += 1;
  };

  // Listen for new messages until timeout is hit
  subscription.on('message', messageHandler);

  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
}
// [END pubsub_subscribe_proto_messages]

function main(
  subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID',
  timeout = 60
) {
  timeout = Number(timeout);

  listenForProtobufMessages(subscriptionNameOrId, timeout).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));
