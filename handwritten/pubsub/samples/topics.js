/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This application demonstrates how to perform basic operations on topics with
 * the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

'use strict';

const PubSub = require(`@google-cloud/pubsub`);

// [START pubsub_list_topics]
function listTopics () {
  // Instantiates a client
  const pubsub = PubSub();

  // Lists all topics in the current project
  return pubsub.getTopics()
    .then((results) => {
      const topics = results[0];

      console.log('Topics:');
      topics.forEach((topic) => console.log(topic.name));

      return topics;
    });
}
// [END pubsub_list_topics]

// [START pubsub_create_topic]
function createTopic (topicName) {
  // Instantiates a client
  const pubsub = PubSub();

  // Creates a new topic, e.g. "my-new-topic"
  return pubsub.createTopic(topicName)
    .then((results) => {
      const topic = results[0];

      console.log(`Topic ${topic.name} created.`);

      return topic;
    });
}
// [END pubsub_create_topic]

// [START pubsub_delete_topic]
function deleteTopic (topicName) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsub.topic(topicName);

  // Deletes the topic
  return topic.delete()
    .then(() => {
      console.log(`Topic ${topic.name} deleted.`);
    });
}
// [END pubsub_delete_topic]

// [START pubsub_publish_message]
function publishMessage (topicName, data) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsub.topic(topicName);

  // Publishes the message, e.g. "Hello, world!" or { amount: 599.00, status: 'pending' }
  return topic.publish(data)
    .then((results) => {
      const messageIds = results[0];

      console.log(`Message ${messageIds[0]} published.`);

      return messageIds;
    });
}
// [END pubsub_publish_message]

let publishCounterValue = 1;

function getPublishCounterValue () {
  return publishCounterValue;
}

function setPublishCounterValue (value) {
  publishCounterValue = value;
}

// [START pubsub_publish_ordered_message]
function publishOrderedMessage (topicName, data) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsub.topic(topicName);

  const message = {
    data: data,

    // Pub/Sub messages are unordered, so assign an order id to the message to
    // manually order messages
    attributes: {
      counterId: `${getPublishCounterValue()}`
    }
  };

  // Publishes the message, use raw: true to pass a message with attributes
  return topic.publish(message, { raw: true })
    .then((results) => {
      const messageIds = results[0];

      // Update the counter value
      setPublishCounterValue(parseInt(message.attributes.counterId, 10) + 1);

      console.log(`Message ${messageIds[0]} published.`);

      return messageIds;
    });
}
// [END pubsub_publish_ordered_message]

// [START pubsub_get_topic_policy]
function getTopicPolicy (topicName) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsub.topic(topicName);

  // Retrieves the IAM policy for the topic
  return topic.iam.getPolicy()
    .then((results) => {
      const policy = results[0];

      console.log(`Policy for topic: %j.`, policy.bindings);

      return policy;
    });
}
// [END pubsub_get_topic_policy]

// [START pubsub_set_topic_policy]
function setTopicPolicy (topicName) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsub.topic(topicName);

  // The new IAM policy
  const newPolicy = {
    bindings: [
      {
        // Add a group as editors
        role: `roles/pubsub.editor`,
        members: [`group:cloud-logs@google.com`]
      },
      {
        // Add all users as viewers
        role: `roles/pubsub.viewer`,
        members: [`allUsers`]
      }
    ]
  };

  // Updates the IAM policy for the topic
  return topic.iam.setPolicy(newPolicy)
    .then((results) => {
      const updatedPolicy = results[0];

      console.log(`Updated policy for topic: %j`, updatedPolicy.bindings);

      return updatedPolicy;
    });
}
// [END pubsub_set_topic_policy]

// [START pubsub_test_topic_permissions]
function testTopicPermissions (topicName) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsub.topic(topicName);

  const permissionsToTest = [
    `pubsub.topics.attachSubscription`,
    `pubsub.topics.publish`,
    `pubsub.topics.update`
  ];

  // Tests the IAM policy for the specified topic
  return topic.iam.testPermissions(permissionsToTest)
    .then((results) => {
      const permissions = results[0];

      console.log(`Tested permissions for topic: %j`, permissions);

      return permissions;
    });
}
// [END pubsub_test_topic_permissions]

module.exports = { publishOrderedMessage };

const cli = require(`yargs`)
  .demand(1)
  .command(
    `list`,
    `Lists all topics in the current project.`,
    {},
    listTopics
  )
  .command(
    `create <topicName>`,
    `Creates a new topic.`,
    {},
    (opts) => createTopic(opts.topicName)
  )
  .command(
    `delete <topicName>`,
    `Deletes a topic.`,
    {},
    (opts) => deleteTopic(opts.topicName)
  )
  .command(
    `publish <topicName> <message>`,
    `Publishes a message to a topic.`,
    {},
    (opts) => {
      try {
        opts.message = JSON.parse(opts.message);
      } catch (err) {
        // Ignore error
      }
      publishMessage(opts.topicName, opts.message);
    }
  )
  .command(
    `publish-ordered <topicName> <message>`,
    `Publishes an ordered message to a topic.`,
    {},
    (opts) => {
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
    (opts) => getTopicPolicy(opts.topicName)
  )
  .command(
    `set-policy <topicName>`,
    `Sets the IAM policy for a topic.`,
    {},
    (opts) => setTopicPolicy(opts.topicName)
  )
  .command(
    `test-permissions <topicName>`,
    `Tests the permissions for a topic.`,
    {},
    (opts) => testTopicPermissions(opts.topicName)
  )
  .example(`node $0 list`)
  .example(`node $0 create my-topic`)
  .example(`node $0 delete my-topic`)
  .example(`node $0 publish my-topic "Hello, world!"`)
  .example(`node $0 publish my-topic '{"data":"Hello, world!"}'`)
  .example(`node $0 get-policy greetings`)
  .example(`node $0 set-policy greetings`)
  .example(`node $0 test-permissions greetings`)
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/pubsub/docs`);

if (module === require.main) {
  cli.help().strict().argv;
}
