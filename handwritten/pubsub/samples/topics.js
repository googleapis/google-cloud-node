/**
 * Copyright 2017, Google, Inc.
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

function listAllTopics() {
  // [START pubsub_list_topics]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  // Lists all topics in the current project
  pubsub
    .getTopics()
    .then(results => {
      const topics = results[0];

      console.log('Topics:');
      topics.forEach(topic => console.log(topic.name));
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_list_topics]
}

function createTopic(topicName) {
  // [START pubsub_create_topic]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const topicName = 'your-topic';

  // Creates a new topic
  pubsub
    .createTopic(topicName)
    .then(results => {
      const topic = results[0];
      console.log(`Topic ${topic.name} created.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_create_topic]
}

function deleteTopic(topicName) {
  // [START pubsub_delete_topic]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const topicName = 'your-topic';

  // Deletes the topic
  pubsub
    .topic(topicName)
    .delete()
    .then(() => {
      console.log(`Topic ${topicName} deleted.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_delete_topic]
}

function publishMessage(topicName, data) {
  // [START pubsub_publish]
  // [START pubsub_quickstart_publisher]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'your-topic';
  // const data = JSON.stringify({ foo: 'bar' });

  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  pubsub
    .topic(topicName)
    .publisher()
    .publish(dataBuffer)
    .then(messageId => {
      console.log(`Message ${messageId} published.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_publish]
  // [END pubsub_quickstart_publisher]
}

function publishMessageWithCustomAttributes(topicName, data) {
  // [START pubsub_publish_custom_attributes]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'your-topic';
  // const data = JSON.stringify({ foo: 'bar' });

  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);
  // Add two custom attributes, origin and username, to the message
  const customAttributes = {
    origin: 'nodejs-sample',
    username: 'gcp',
  };

  pubsub
    .topic(topicName)
    .publisher()
    .publish(dataBuffer, customAttributes)
    .then(messageId => {
      console.log(`Message ${messageId} published.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_publish_custom_attributes]
}

function publishBatchedMessages(topicName, data, maxMessages, maxWaitTime) {
  // [START pubsub_publisher_batch_settings]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'your-topic';
  // const data = JSON.stringify({ foo: 'bar' });
  // const maxMessages = 10;
  // const maxWaitTime = 10000;

  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  pubsub
    .topic(topicName)
    .publisher({
      batching: {
        maxMessages: maxMessages,
        maxMilliseconds: maxWaitTime,
      },
    })
    .publish(dataBuffer)
    .then(results => {
      const messageId = results[0];
      console.log(`Message ${messageId} published.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_publisher_batch_settings]
}

let publishCounterValue = 1;

function getPublishCounterValue() {
  return publishCounterValue;
}

function setPublishCounterValue(value) {
  publishCounterValue = value;
}

function publishOrderedMessage(topicName, data) {
  // [START pubsub_publish_ordered_message]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'your-topic';
  // const data = JSON.stringify({ foo: 'bar' });

  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  const attributes = {
    // Pub/Sub messages are unordered, so assign an order ID and manually order messages
    counterId: `${getPublishCounterValue()}`,
  };

  // Publishes the message
  return pubsub
    .topic(topicName)
    .publisher()
    .publish(dataBuffer, attributes)
    .then(results => {
      const messageId = results;

      // Update the counter value
      setPublishCounterValue(parseInt(attributes.counterId, 10) + 1);

      console.log(`Message ${messageId} published.`);

      return messageId;
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_publish_ordered_message]
}

function getTopicPolicy(topicName) {
  // [START pubsub_get_topic_policy]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const topicName = 'your-topic';

  // Retrieves the IAM policy for the topic
  pubsub
    .topic(topicName)
    .iam.getPolicy()
    .then(results => {
      const policy = results[0];
      console.log(`Policy for topic: %j.`, policy.bindings);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_get_topic_policy]
}

function setTopicPolicy(topicName) {
  // [START pubsub_set_topic_policy]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const topicName = 'your-topic';

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
  pubsub
    .topic(topicName)
    .iam.setPolicy(newPolicy)
    .then(results => {
      const updatedPolicy = results[0];
      console.log(`Updated policy for topic: %j`, updatedPolicy.bindings);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_set_topic_policy]
}

function testTopicPermissions(topicName) {
  // [START pubsub_test_topic_permissions]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const topicName = 'your-topic';

  const permissionsToTest = [
    `pubsub.topics.attachSubscription`,
    `pubsub.topics.publish`,
    `pubsub.topics.update`,
  ];

  // Tests the IAM policy for the specified topic
  pubsub
    .topic(topicName)
    .iam.testPermissions(permissionsToTest)
    .then(results => {
      const permissions = results[0];
      console.log(`Tested permissions for topic: %j`, permissions);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
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
  .example(`node $0 get-policy greetings`)
  .example(`node $0 set-policy greetings`)
  .example(`node $0 test-permissions greetings`)
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/pubsub/docs`);

if (module === require.main) {
  cli.help().strict().argv; // eslint-disable-line
}
