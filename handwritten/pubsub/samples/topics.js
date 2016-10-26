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
function listTopics (callback) {
  // Instantiates a client
  const pubsubClient = PubSub();

  // Lists all topics in the current project
  pubsubClient.getTopics((err, topics) => {
    if (err) {
      callback(err);
      return;
    }

    console.log('Topics:');
    topics.forEach((topic) => console.log(topic.name));
    callback();
  });
}
// [END pubsub_list_topics]

// [START pubsub_create_topic]
function createTopic (topicName, callback) {
  // Instantiates a client
  const pubsubClient = PubSub();

  // Creates a new topic, e.g. "my-new-topic"
  pubsubClient.createTopic(topicName, (err, topic) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Topic ${topic.name} created.`);
    callback();
  });
}
// [END pubsub_create_topic]

// [START pubsub_delete_topic]
function deleteTopic (topicName, callback) {
  // Instantiates a client
  const pubsubClient = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsubClient.topic(topicName);

  // Deletes the topic
  topic.delete((err) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Topic ${topic.name} deleted.`);
    callback();
  });
}
// [END pubsub_delete_topic]

// [START pubsub_publish_message]
function publishMessage (topicName, data, callback) {
  // Instantiates a client
  const pubsubClient = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsubClient.topic(topicName);

  /**
   * In Node.js, a PubSub message requires a "data" property, which can have a
   * string or an object as its value. An optional "attributes" property can be
   * an object of key/value pairs, where the keys and values are both strings.
   * See https://cloud.google.com/pubsub/reference/rpc/google.pubsub.v1#google.pubsub.v1.PubsubMessage
   *
   * Topic#publish() takes either a single message object or an array of message
   * objects. See https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub/topic?method=publish
   */
  const message = {
    data: data
  };

  // Publishes the message
  topic.publish(message, (err, messageIds) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Message ${messageIds[0]} published.`);
    callback();
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
function publishOrderedMessage (topicName, data, callback) {
  // Instantiates a client
  const pubsubClient = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsubClient.topic(topicName);

  /**
   * In Node.js, a PubSub message requires a "data" property, which can have a
   * string or an object as its value. An optional "attributes" property can be
   * an object of key/value pairs, where the keys and values are both strings.
   * See https://cloud.google.com/pubsub/reference/rpc/google.pubsub.v1#google.pubsub.v1.PubsubMessage
   *
   * Topic#publish() takes either a single message object or an array of message
   * objects. See https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub/topic?method=publish
   */
  const message = {
    data: data,

    // Pub/Sub messages are unordered, so assign an order id to the message to
    // manually order messages
    attributes: {
      counterId: '' + getPublishCounterValue()
    }
  };

  topic.publish(message, (err, messageIds) => {
    if (err) {
      callback(err);
      return;
    }

    // Update the counter value
    setPublishCounterValue(+message.attributes.counterId + 1);

    console.log(`Message ${messageIds[0]} published.`);
    callback();
  });
}
// [END pubsub_publish_ordered_message]

// [START pubsub_get_topic_policy]
function getTopicPolicy (topicName, callback) {
  // Instantiates a client
  const pubsubClient = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsubClient.topic(topicName);

  // Retrieves the IAM policy for the topic
  topic.iam.getPolicy((err, policy) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Policy for topic: %j.`, policy.bindings);
    callback();
  });
}
// [END pubsub_get_topic_policy]

// [START pubsub_set_topic_policy]
function setTopicPolicy (topicName, callback) {
  // Instantiates a client
  const pubsubClient = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsubClient.topic(topicName);

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
  topic.iam.setPolicy(newPolicy, (err, updatedPolicy) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Updated policy for topic: %j`, updatedPolicy.bindings);
    callback();
  });
}
// [END pubsub_set_topic_policy]

// [START pubsub_test_topic_permissions]
function testTopicPermissions (topicName, callback) {
  // Instantiates a client
  const pubsubClient = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsubClient.topic(topicName);

  const permissionsToTest = [
    `pubsub.topics.attachSubscription`,
    `pubsub.topics.publish`,
    `pubsub.topics.update`
  ];

  // Tests the IAM policy for the specified topic
  topic.iam.testPermissions(permissionsToTest, (err, permissions) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Tested permissions for topic: %j`, permissions);

    callback();
  });
}
// [END pubsub_test_topic_permissions]

// The command-line program
const cli = require(`yargs`);
const noop = require(`../utils`).noop;

const program = module.exports = {
  listTopics: listTopics,
  createTopic: createTopic,
  deleteTopic: deleteTopic,
  publishMessage: publishMessage,
  publishOrderedMessage: publishOrderedMessage,
  getTopicPolicy: getTopicPolicy,
  setTopicPolicy: setTopicPolicy,
  testTopicPermissions: testTopicPermissions,
  main: (args) => {
    // Run the command-line program
    cli.help().strict().parse(args).argv;
  }
};

cli
  .demand(1)
  .command(`list`, `Lists all topics in the current project.`, {}, (options) => {
    program.listTopics(noop);
  })
  .command(`create <topicName>`, `Creates a new topic.`, {}, (options) => {
    program.createTopic(options.topicName, noop);
  })
  .command(`delete <topicName>`, `Deletes a topic.`, {}, (options) => {
    program.deleteTopic(options.topicName, noop);
  })
  .command(`publish <topicName> <message>`, `Publishes a message.`, {}, (options) => {
    try {
      options.message = JSON.parse(options.message);
    } catch (err) {
      // Ignore error
    }
    program.publishMessage(options.topicName, options.message, noop);
  })
  .command(`get-policy <topicName>`, `Gets the IAM policy for a topic.`, {}, (options) => {
    program.getTopicPolicy(options.topicName, noop);
  })
  .command(`set-policy <topicName>`, `Sets the IAM policy for a topic.`, {}, (options) => {
    program.setTopicPolicy(options.topicName, noop);
  })
  .command(`test-permissions <topicName>`, `Tests the permissions for a topic.`, {}, (options) => {
    program.testTopicPermissions(options.topicName, noop);
  })
  .example(`node $0 list`, `Lists all topics in the current project.`)
  .example(`node $0 create greetings`, `Creates a new topic named "greetings".`)
  .example(`node $0 delete greetings`, `Deletes a topic named "greetings".`)
  .example(`node $0 publish greetings "Hello, world!"`, `Publishes a simple message.`)
  .example(`node $0 publish greetings \`{"data":"Hello, world!"}\``, `Publishes a JSON message.`)
  .example(`node $0 get-policy greetings`, `Gets the IAM policy for a topic named "greetings".`)
  .example(`node $0 set-policy greetings`, `Sets the IAM policy for a topic named "greetings".`)
  .example(`node $0 test-permissions greetings`, `Tests the permissions for a topic named "greetings".`)
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/pubsub/docs`);

if (module === require.main) {
  program.main(process.argv.slice(2));
}
