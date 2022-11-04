exports['sample transformation correctly transforms TS 1'] = `
// Copyright 2021 Google LLC
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
 * schemas with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: List schemas on a project
//   description: Gets a list of schemas which were previously created in the project.
//   usage: node listSchemas.js

// [START pubsub_list_schemas]

// Imports the Google Cloud client library
const { PubSub } = require("@google-cloud/pubsub");

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function listSchemas() {
  for await (const s of pubSubClient.listSchemas()) {
    console.log(s.name);
  }
  console.log('Listed schemas.');
}
// [END pubsub_list_schemas]

function main() {
  listSchemas().catch((err) => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main();
`

exports['command line option "targets" works with a single sample file 1'] = `
// Copyright 2021 Google LLC
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
 * schemas with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

// sample-metadata:
//   title: List schemas on a project
//   description: Gets a list of schemas which were previously created in the project.
//   usage: node listSchemas.js

// [START pubsub_list_schemas]

// Imports the Google Cloud client library
const { PubSub } = require("@google-cloud/pubsub");

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function listSchemas() {
  for await (const s of pubSubClient.listSchemas()) {
    console.log(s.name);
  }
  console.log('Listed schemas.');
}
// [END pubsub_list_schemas]

function main() {
  listSchemas().catch((err) => {
    console.error(err.message);
    process.exitCode = 1;
  });
}

main();
`

exports['command line option "targets" works with multiple sample files 1'] = [
  "// Copyright 2021 Google LLC\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * This application demonstrates how to perform basic operations on\n * schemas with the Google Cloud Pub/Sub API.\n *\n * For more information, see the README.md under /pubsub and the documentation\n * at https://cloud.google.com/pubsub/docs.\n */\n\n// sample-metadata:\n//   title: Delete a previously created schema\n//   description: Deletes a schema which was previously created in the project.\n//   usage: node deleteSchema.js <schema-name-or-id>\n\n// [START pubsub_delete_schema]\n/**\n * TODO(developer): Uncomment this variable before running the sample.\n */\n// const schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID';\n\n// Imports the Google Cloud client library\nconst { PubSub } = require(\"@google-cloud/pubsub\");\n\n// Creates a client; cache this for further use\nconst pubSubClient = new PubSub();\n\nasync function deleteSchema(schemaNameOrId) {\n  const schema = pubSubClient.schema(schemaNameOrId);\n  const name = await schema.getName();\n  await schema.delete();\n  console.log(`Schema ${name} deleted.`);\n}\n// [END pubsub_delete_schema]\n\nfunction main(schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID') {\n  deleteSchema(schemaNameOrId).catch((err) => {\n    console.error(err.message);\n    process.exitCode = 1;\n  });\n}\n\nmain(...process.argv.slice(2));",
  "// Copyright 2021 Google LLC\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * This application demonstrates how to perform basic operations on\n * schemas with the Google Cloud Pub/Sub API.\n *\n * For more information, see the README.md under /pubsub and the documentation\n * at https://cloud.google.com/pubsub/docs.\n */\n\n// sample-metadata:\n//   title: Get a previously created schema\n//   description: Gets information about a schema which was previously created in the project.\n//   usage: node getSchema.js <schema-name>\n\n// [START pubsub_get_schema]\n/**\n * TODO(developer): Uncomment this variable before running the sample.\n */\n// const schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID';\n\n// Imports the Google Cloud client library\nconst { PubSub } = require(\"@google-cloud/pubsub\");\n\n// Creates a client; cache this for further use\nconst pubSubClient = new PubSub();\n\nasync function getSchema(schemaNameOrId) {\n  const schema = pubSubClient.schema(schemaNameOrId);\n  const info = await schema.get();\n  const fullName = await schema.getName();\n  console.log(`Schema ${fullName} info: ${JSON.stringify(info, null, 4)}.`);\n}\n// [END pubsub_get_schema]\n\nfunction main(schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID') {\n  getSchema(schemaNameOrId).catch((err) => {\n    console.error(err.message);\n    process.exitCode = 1;\n  });\n}\n\nmain(...process.argv.slice(2));"
]

exports['command line option "recursive" causes recursion and only matches samples 1'] = [
  "// Copyright 2019-2021 Google LLC\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * This application demonstrates how to perform basic operations on\n * subscriptions with the Google Cloud Pub/Sub API.\n *\n * For more information, see the README.md under /pubsub and the documentation\n * at https://cloud.google.com/pubsub/docs.\n */\n\n// sample-metadata:\n//   title: Listen For Avro Records\n//   description: Listens for records in Avro encoding from a subscription.\n//   usage: node listenForAvroRecords.js <subscription-name-or-id> [timeout-in-seconds]\n\n// [START pubsub_subscribe_avro_records]\n/**\n * TODO(developer): Uncomment these variables before running the sample.\n */\n// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';\n// const timeout = 60;\n\n// Imports the Google Cloud client library\nconst { PubSub, Schema, Encodings } = require(\"@google-cloud/pubsub\");\n\n// Node FS library, to load definitions\nconst fs = require(\"fs\");\n\n// And the Apache Avro library\nconst avro = require(\"avro-js\");\n\n// Creates a client; cache this for further use\nconst pubSubClient = new PubSub();\n\nfunction listenForAvroRecords(subscriptionNameOrId, timeout) {\n  // References an existing subscription\n  const subscription = pubSubClient.subscription(subscriptionNameOrId);\n\n  // Make an encoder using the official avro-js library.\n  const definition = fs.\n  readFileSync('system-test/fixtures/provinces.avsc').\n  toString();\n  const type = avro.parse(definition);\n\n  // Create an event handler to handle messages\n  let messageCount = 0;\n  const messageHandler = async (message) => {\n    // \"Ack\" (acknowledge receipt of) the message\n    message.ack();\n\n    // Get the schema metadata from the message.\n    const schemaMetadata = Schema.metadataFromMessage(message.attributes);\n\n    let result;\n    switch (schemaMetadata.encoding) {\n      case Encodings.Binary:\n        result = type.fromBuffer(message.data);\n        break;\n      case Encodings.Json:\n        result = type.fromString(message.data.toString());\n        break;\n      default:\n        console.log(`Unknown schema encoding: ${schemaMetadata.encoding}`);\n        break;}\n\n\n    console.log(`Received message ${message.id}:`);\n    console.log(`\\tData: ${JSON.stringify(result, null, 4)}`);\n    console.log(`\\tAttributes: ${message.attributes}`);\n    messageCount += 1;\n  };\n\n  // Listen for new messages until timeout is hit\n  subscription.on('message', messageHandler);\n\n  setTimeout(() => {\n    subscription.removeListener('message', messageHandler);\n    console.log(`${messageCount} message(s) received.`);\n  }, timeout * 1000);\n}\n// [END pubsub_subscribe_avro_records]\n\nfunction main(\nsubscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID',\ntimeout = 60)\n{\n  timeout = Number(timeout);\n\n  try {\n    listenForAvroRecords(subscriptionNameOrId, timeout);\n  } catch (err) {\n    console.error(err.message);\n    process.exitCode = 1;\n  }\n}\n\nmain(...process.argv.slice(2));",
  "// Copyright 2019-2021 Google LLC\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//     https://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * This sample demonstrates how to perform basic operations on topics with\n * the Google Cloud Pub/Sub API.\n *\n * For more information, see the README.md under /pubsub and the documentation\n * at https://cloud.google.com/pubsub/docs.\n */\n\n// sample-metadata:\n//   title: Publish Avro Records to a Topic\n//   description: Publishes a record in Avro to a topic with a schema.\n//   usage: node publishAvroRecords.js <topic-name>\n\n// [START pubsub_publish_avro_records]\n/**\n * TODO(developer): Uncomment this variable before running the sample.\n */\n// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';\n\n// Imports the Google Cloud client library\nconst { PubSub, Encodings } = require(\"@google-cloud/pubsub\");\n\n// And the Apache Avro library\nconst avro = require(\"avro-js\");\nconst fs = require(\"fs\");\n\n// Creates a client; cache this for further use\nconst pubSubClient = new PubSub();\n\n\n\n\n\n\nasync function publishAvroRecords(topicNameOrId) {\n  // Get the topic metadata to learn about its schema encoding.\n  const topic = pubSubClient.topic(topicNameOrId);\n  const [topicMetadata] = await topic.getMetadata();\n  const topicSchemaMetadata = topicMetadata.schemaSettings;\n\n  if (!topicSchemaMetadata) {\n    console.log(`Topic ${topicNameOrId} doesn't seem to have a schema.`);\n    return;\n  }\n  const schemaEncoding = topicSchemaMetadata.encoding;\n\n  // Make an encoder using the official avro-js library.\n  const definition = fs.\n  readFileSync('system-test/fixtures/provinces.avsc').\n  toString();\n  const type = avro.parse(definition);\n\n  // Encode the message.\n  const province = {\n    name: 'Ontario',\n    post_abbr: 'ON'\n  };\n  let dataBuffer;\n  switch (schemaEncoding) {\n    case Encodings.Binary:\n      dataBuffer = type.toBuffer(province);\n      break;\n    case Encodings.Json:\n      dataBuffer = Buffer.from(type.toString(province));\n      break;\n    default:\n      console.log(`Unknown schema encoding: ${schemaEncoding}`);\n      break;}\n\n  if (!dataBuffer) {\n    console.log(`Invalid encoding ${schemaEncoding} on the topic.`);\n    return;\n  }\n\n  const messageId = await topic.publish(dataBuffer);\n  console.log(`Avro record ${messageId} published.`);\n}\n// [END pubsub_publish_avro_records]\n\nfunction main(topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID') {\n  publishAvroRecords(topicNameOrId).catch((err) => {\n    console.error(err.message);\n    process.exitCode = 1;\n  });\n}\n\nmain(...process.argv.slice(2));"
]

exports['sample transformation does not change JS 1'] = [
  {
    "filename": "test.js",
    "contents": "// Copyright 2019-2020 Google LLC\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//     https://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * This sample demonstrates how to perform basic operations on topics with\n * the Google Cloud Pub/Sub API.\n *\n * For more information, see the README.md under /pubsub and the documentation\n * at https://cloud.google.com/pubsub/docs.\n */\n\n'use strict';\n\n// This test fixture sample has been modified to factor out changes that\n// gts fix would reverse anyway.\n\n// sample-metadata:\n//   title: Create Topic\n//   description: Creates a new topic.\n//   usage: node createTopic.js <topic-name-or-id>\n\nasync function main(topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID') {\n  // [START pubsub_create_topic]\n  /**\n   * TODO(developer): Uncomment this variable before running the sample.\n   */\n  // const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';\n\n  // Imports the Google Cloud client library\n  const { PubSub } = require('@google-cloud/pubsub');\n\n  // Creates a client; cache this for further use\n  const pubSubClient = new PubSub();\n\n  async function createTopic() {\n    // Creates a new topic\n    await pubSubClient.createTopic(topicNameOrId);\n    console.log(`Topic ${topicNameOrId} created.`);\n  }\n\n  createTopic();\n  // [END pubsub_create_topic]\n}\n\nmain(...process.argv.slice(2)).catch((e) => {\n  console.error(e);\n  process.exitCode = -1;\n});"
  }
]
