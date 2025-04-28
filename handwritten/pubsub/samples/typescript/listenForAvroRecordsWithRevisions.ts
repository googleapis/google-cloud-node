// Copyright 2024 Google LLC
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
 * This snippet demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Listen For Avro Records With Revisions
//   description: Listens for records in Avro encoding from a subscription with schema revisions.
//   usage: node listenForAvroRecordsWithRevisions.js <subscription-name-or-id> [timeout-in-seconds]

// [START pubsub_subscribe_avro_records_with_revisions]
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';
// const timeout = 60;

// Imports the Google Cloud client library
import {PubSub, Schema, Encodings, Message} from '@google-cloud/pubsub';

// And the Apache Avro library; this lacks typings, so for
// TypeScript, a few synthetic types were created.
import * as avro from 'avro-js';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

interface ProvinceObject {
  name: string;
  post_abbr: string;
}

async function listenForAvroRecordsWithRevisions(
  subscriptionNameOrId: string,
  timeout: number,
) {
  // References an existing subscription
  const subscription = pubSubClient.subscription(subscriptionNameOrId);

  // Cache decoders for various schema revisions.
  const revisionReaders = new Map<string, avro.Parser>();

  // We need a schema admin service client to retrieve revisions.
  const schemaClient = await pubSubClient.getSchemaClient();

  // Create an event handler to handle messages
  let messageCount = 0;
  const messageHandler = async (message: Message) => {
    // Get the schema metadata from the message.
    const schemaMetadata = Schema.metadataFromMessage(message.attributes);

    let reader: avro.Parser;
    try {
      // Do we already have a decoder for this revision?
      const revision = schemaMetadata.revision!;
      if (revisionReaders.has(revision)) {
        reader = revisionReaders.get(revision)!;
      } else {
        // This is the first time we are seeing this revision. We need to
        // fetch the schema and cache its decoder.
        const [schema] = await schemaClient.getSchema({
          name: `${schemaMetadata.name}@${schemaMetadata.revision}`,
        });
        reader = avro.parse(schema.definition!);
        revisionReaders.set(revision, reader);
      }
    } catch (err: unknown) {
      console.log('Could not get schema', err);
      message.nack();
      return;
    }

    let result: ProvinceObject | undefined;
    switch (schemaMetadata.encoding) {
      case Encodings.Binary:
        result = reader.fromBuffer(message.data);
        break;
      case Encodings.Json:
        result = reader.fromString(message.data.toString());
        break;
      default:
        console.log(`Unknown schema encoding: ${schemaMetadata.encoding}`);
        message.nack();
        return;
    }

    console.log(`Received message ${message.id}:`);
    console.log(`\tData: ${JSON.stringify(result, null, 4)}`);
    console.log(`\tAttributes: ${message.attributes}`);
    console.log(
      `\tProvince ${result?.name} is abbreviated as ${result?.post_abbr}`,
    );
    messageCount += 1;

    // Ack the message.
    message.ack();
  };

  // Listen for new messages until timeout is hit
  subscription.on('message', messageHandler);

  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
}
// [END pubsub_subscribe_avro_records_with_revisions]

function main(
  subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID',
  timeout = 60,
) {
  timeout = Number(timeout);

  listenForAvroRecordsWithRevisions(subscriptionNameOrId, timeout).catch(
    err => {
      console.error(err.message);
      process.exitCode = 1;
    },
  );
}

main(...process.argv.slice(2));
