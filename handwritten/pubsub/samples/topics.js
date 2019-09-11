// Copyright 2019 Google LLC
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
 * This application demonstrates how to perform basic operations on topics with
 * the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

'use strict';

async function listAllTopics() {
  // [START pubsub_list_topics]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  // Lists all topics in the current project
  const [topics] = await pubsub.getTopics();
  console.log('Topics:');
  topics.forEach(topic => console.log(topic.name));
  // [END pubsub_list_topics]
}

async function createTopic(topicName) {
  // [START pubsub_create_topic]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const topicName = 'my-topic';

  // Creates a new topic
  await pubsub.createTopic(topicName);
  console.log(`Topic ${topicName} created.`);

  // [END pubsub_create_topic]
}

async function deleteTopic(topicName) {
  // [START pubsub_delete_topic]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const topicName = 'my-topic';

  // Deletes the topic
  await pubsub.topic(topicName).delete();
  console.log(`Topic ${topicName} deleted.`);

  // [END pubsub_delete_topic]
}

async function publishMessage(topicName, data) {
  // [START pubsub_publish]
  // [START pubsub_quickstart_publisher]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'my-topic';
  // const data = JSON.stringify({ foo: 'bar' });

  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  const messageId = await pubsub.topic(topicName).publish(dataBuffer);
  console.log(`Message ${messageId} published.`);

  // [END pubsub_publish]
  // [END pubsub_quickstart_publisher]
}

async function publishMessageWithCustomAttributes(topicName, data) {
  // [START pubsub_publish_custom_attributes]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'my-topic';
  // const data = JSON.stringify({ foo: 'bar' });

  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);
  // Add two custom attributes, origin and username, to the message
  const customAttributes = {
    origin: 'nodejs-sample',
    username: 'gcp',
  };

  const messageId = await pubsub
    .topic(topicName)
    .publish(dataBuffer, customAttributes);
  console.log(`Message ${messageId} published.`);

  // [END pubsub_publish_custom_attributes]
}

async function publishBatchedMessages(
  topicName,
  data,
  maxMessages,
  maxWaitTime
) {
  // [START pubsub_publisher_batch_settings]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'my-topic';
  // const data = JSON.stringify({ foo: 'bar' });
  // const maxMessages = 10;
  // const maxWaitTime = 10000;

  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  const batchPublisher = pubsub.topic(topicName, {
    batching: {
      maxMessages: maxMessages,
      maxMilliseconds: maxWaitTime,
    },
  });

  for (let i = 0; i < 10; i++) {
    (async () => {
      const messageId = await batchPublisher.publish(dataBuffer);
      console.log(`Message ${messageId} published.`);
    })();
  }
  // [END pubsub_publisher_batch_settings]
}

async function publishWithRetrySettings(projectId, topicName, data) {
  // [START pubsub_publisher_retry_settings]
  // Imports the Google Cloud client library
  const {v1} = require('@google-cloud/pubsub');

  // Creates a publisher client
  const client = new v1.PublisherClient({
    // optional auth parameters
  });

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const projectId = 'my-project-id'
  // const topicName = 'my-topic';
  // const data = JSON.stringify({ foo: 'bar' });

  const formattedTopic = client.topicPath(projectId, topicName);
  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);
  const messagesElement = {
    data: dataBuffer,
  };
  const messages = [messagesElement];
  // Build the request
  const request = {
    topic: formattedTopic,
    messages: messages,
  };

  // Retry settings control how the publisher handles retryable failures
  // Default values are shown
  const retrySettings = {
    retryCodes: [
      10, // 'ABORTED'
      1, // 'CANCELLED',
      4, // 'DEADLINE_EXCEEDED'
      13, // 'INTERNAL'
      8, // 'RESOURCE_EXHAUSTED'
      14, // 'UNAVAILABLE'
      2, // 'UNKNOWN'
    ],
    backoffSettings: {
      initialRetryDelayMillis: 100,
      retryDelayMultiplier: 1.3,
      maxRetryDelayMillis: 60000,
      initialRpcTimeoutMillis: 5000,
      rpcTimeoutMultiplier: 1.0,
      maxRpcTimeoutMillis: 600000,
      totalTimeoutMillis: 600000,
    },
  };

  const [response] = await client.publish(request, {retry: retrySettings});
  console.log(`Message ${response.messageIds} published.`);

  // [END pubsub_publisher_retry_settings]
}

let publishCounterValue = 1;

function getPublishCounterValue() {
  return publishCounterValue;
}

function setPublishCounterValue(value) {
  publishCounterValue = value;
}

async function publishOrderedMessage(topicName, data) {
  // [START pubsub_publish_ordered_message]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'my-topic';
  // const data = JSON.stringify({ foo: 'bar' });

  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  const attributes = {
    // Pub/Sub messages are unordered, so assign an order ID and manually order messages
    counterId: `${getPublishCounterValue()}`,
  };

  // Publishes the message
  const messageId = await pubsub
    .topic(topicName)
    .publish(dataBuffer, attributes);
  // Update the counter value
  setPublishCounterValue(parseInt(attributes.counterId, 10) + 1);
  console.log(`Message ${messageId} published.`);
  return messageId;
  // [END pubsub_publish_ordered_message]
}

async function getTopicPolicy(topicName) {
  // [START pubsub_get_topic_policy]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const topicName = 'my-topic';

  // Retrieves the IAM policy for the topic
  const [policy] = await pubsub.topic(topicName).iam.getPolicy();
  console.log(`Policy for topic: %j.`, policy.bindings);

  // [END pubsub_get_topic_policy]
}

async function setTopicPolicy(topicName) {
  // [START pubsub_set_topic_policy]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const topicName = 'my-topic';

  // The new IAM policy
  const newPolicy = {
    bindings: [
      {
        // Add a group as editors
        role: `roles/pubsub.editor`,
        members: [`group:cloud-logs@google.com`],
      },
      {
        // Add all users as viewers
        role: `roles/pubsub.viewer`,
        members: [`allUsers`],
      },
    ],
  };

  // Updates the IAM policy for the topic
  const [updatedPolicy] = await pubsub
    .topic(topicName)
    .iam.setPolicy(newPolicy);
  console.log(`Updated policy for topic: %j`, updatedPolicy.bindings);

  // [END pubsub_set_topic_policy]
}

async function testTopicPermissions(topicName) {
  // [START pubsub_test_topic_permissions]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const topicName = 'my-topic';

  const permissionsToTest = [
    `pubsub.topics.attachSubscription`,
    `pubsub.topics.publish`,
    `pubsub.topics.update`,
  ];

  // Tests the IAM policy for the specified topic
  const [permissions] = await pubsub
    .topic(topicName)
    .iam.testPermissions(permissionsToTest);
  console.log(`Tested permissions for topic: %j`, permissions);

  // [END pubsub_test_topic_permissions]
}

module.exports = {publishOrderedMessage};

const cli = require(`yargs`)
  .demand(1)
  .command(
    `list`,
    `Lists all topics in the current project.`,
    {},
    listAllTopics
  )
  .command(`create <topicName>`, `Creates a new topic.`, {}, opts =>
    createTopic(opts.topicName)
  )
  .command(`delete <topicName>`, `Deletes a topic.`, {}, opts =>
    deleteTopic(opts.topicName)
  )
  .command(
    `publish <topicName> <message>`,
    `Publishes a message to a topic.`,
    {},
    opts => {
      publishMessage(opts.topicName, opts.message);
    }
  )
  .command(
    `publish-attributes <topicName> <message>`,
    `Publishes a message with custom attributes to a Topic`,
    {},
    opts => {
      publishMessageWithCustomAttributes(opts.topicName, opts.message);
    }
  )
  .command(
    `publish-batch <topicName> <message>`,
    `Publishes messages to a topic using custom batching settings.`,
    {
      maxWaitTime: {
        alias: 'w',
        type: 'number',
        default: 10,
      },
      maxMessages: {
        alias: 'm',
        type: 'number',
        default: 10,
      },
    },
    opts => {
      publishBatchedMessages(
        opts.topicName,
        opts.message,
        opts.maxMessages,
        opts.maxWaitTime
      );
    }
  )
  .command(
    `publish-retry <projectId> <topicName> <message>`,
    `Publishes a message to a topic with retry settings.`,
    {},
    opts => {
      publishWithRetrySettings(opts.projectId, opts.topicName, opts.message);
    }
  )
  .command(
    `publish-ordered <topicName> <message>`,
    `Publishes an ordered message to a topic.`,
    {},
    opts => {
      try {
        opts.message = JSON.parse(opts.message);
      } catch (err) {
        // Ignore error
      }
      publishOrderedMessage(opts.topicName, opts.message);
    }
  )
  .command(
    `get-policy <topicName>`,
    `Gets the IAM policy for a topic.`,
    {},
    opts => getTopicPolicy(opts.topicName)
  )
  .command(
    `set-policy <topicName>`,
    `Sets the IAM policy for a topic.`,
    {},
    opts => setTopicPolicy(opts.topicName)
  )
  .command(
    `test-permissions <topicName>`,
    `Tests the permissions for a topic.`,
    {},
    opts => testTopicPermissions(opts.topicName)
  )
  .example(`node $0 list`)
  .example(`node $0 create my-topic`)
  .example(`node $0 delete my-topic`)
  .example(`node $0 publish my-topic "Hello, world!"`)
  .example(`node $0 publish my-topic '{"data":"Hello, world!"}'`)
  .example(`node $0 publish-attributes my-topic "Hello, world!"`)
  .example(`node $0 publish-ordered my-topic "Hello, world!"`)
  .example(`node $0 publish-batch my-topic "Hello, world!" -w 1000`)
  .example(`node $0 publish-retry my-project my-topic "Hello, world!"`)
  .example(`node $0 get-policy greetings`)
  .example(`node $0 set-policy greetings`)
  .example(`node $0 test-permissions greetings`)
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/pubsub/docs`);

if (module === require.main) {
  cli.help().strict().argv; // eslint-disable-line
}
