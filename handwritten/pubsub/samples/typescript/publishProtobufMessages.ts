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

/**
 * This sample demonstrates how to perform basic operations on topics with
 * the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: Publish Protobuf Messages to a Topic
//   description: Publishes a message in protobuf form to a topic with a schema.
//   usage: node publishProtobufMessages.js <topic-name-or-id>

// [START pubsub_publish_proto_messages]
/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';

// Imports the Google Cloud client library
import {PubSub, Encodings} from '@google-cloud/pubsub';

// And the protobufjs library
import * as protobuf from 'protobufjs';

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

interface ProvinceObject {
  name: string;
  postAbbr: string;
}

async function publishProtobufMessages(topicNameOrId: string) {
  // Get the topic metadata to learn about its schema.
  const topic = pubSubClient.topic(topicNameOrId);
  const [topicMetadata] = await topic.getMetadata();
  const topicSchemaMetadata = topicMetadata.schemaSettings;

  if (!topicSchemaMetadata) {
    console.log(`Topic ${topicNameOrId} doesn't seem to have a schema.`);
    return;
  }
  const schemaEncoding = topicSchemaMetadata.encoding;

  // Encode the message.
  const province: ProvinceObject = {
    name: 'Ontario',
    postAbbr: 'ON',
  };

  // Make an encoder using the protobufjs library.
  //
  // Since we're providing the test message for a specific schema here, we'll
  // also code in the path to a sample proto definition.
  const root = await protobuf.load('system-test/fixtures/provinces.proto');
  const Province = root.lookupType('utilities.Province');
  const message = Province.create(province);

  let dataBuffer: Buffer | undefined;
  switch (schemaEncoding) {
    case Encodings.Binary:
      dataBuffer = Buffer.from(Province.encode(message).finish());
      break;
    case Encodings.Json:
      dataBuffer = Buffer.from(JSON.stringify(message.toJSON()));
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
  console.log(`Protobuf message ${messageId} published.`);
}
// [END pubsub_publish_proto_messages]

function main(topicName = 'YOUR_TOPIC_NAME') {
  publishProtobufMessages(topicName).catch(err => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main(...process.argv.slice(2));
