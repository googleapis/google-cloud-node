// Copyright 2019-2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
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
 * This sample demonstrates how to perform basic operations on topics with
 * the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Publish Avro Records to a Topic
//   description: Publishes a record in Avro to a topic with a schema.
//   usage: node publishAvroRecords.js <topic-name>

// [START pubsub_publish_avro_records]
/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';

// Imports the Google Cloud client library
const {PubSub, Encodings} = require('@google-cloud/pubsub');

// And the Apache Avro library
const avro = require('avro-js');
const fs = require('fs');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function publishAvroRecords(topicNameOrId) {
  // Get the topic metadata to learn about its schema encoding.
  const topic = pubSubClient.topic(topicNameOrId);
  const [topicMetadata] = await topic.getMetadata();
  const topicSchemaMetadata = topicMetadata.schemaSettings;

  if (!topicSchemaMetadata) {
    console.log(`Topic ${topicNameOrId} doesn't seem to have a schema.`);
    return;
  }
  const schemaEncoding = topicSchemaMetadata.encoding;

  // Make an encoder using the official avro-js library.
  const definition = fs
    .readFileSync('system-test/fixtures/provinces.avsc')
    .toString();
  const type = avro.parse(definition);

  // Encode the message.
  const province = {
    name: 'Ontario',
    post_abbr: 'ON',
  };
  let dataBuffer;
  switch (schemaEncoding) {
    case Encodings.Binary:
      dataBuffer = type.toBuffer(province);
      break;
    case Encodings.Json:
      dataBuffer = Buffer.from(type.toString(province));
      break;
    default:
      console.log(`Unknown schema encoding: ${schemaEncoding}`);
      break;
  }
  if (!dataBuffer) {
    console.log(`Invalid encoding ${schemaEncoding} on the topic.`);
    return;
  }

  const messageId = await topic.publish(dataBuffer);
  console.log(`Avro record ${messageId} published.`);
}
// [END pubsub_publish_avro_records]

function main(topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID') {
  publishAvroRecords(topicNameOrId).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));
