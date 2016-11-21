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
 * This application demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

'use strict';

const PubSub = require(`@google-cloud/pubsub`);

// [START pubsub_list_subscriptions]
function listSubscriptions () {
  // Instantiates a client
  const pubsub = PubSub();

  // Lists all subscriptions in the current project
  return pubsub.getSubscriptions()
    .then((results) => {
      const subscriptions = results[0];

      console.log('Subscriptions:');
      subscriptions.forEach((subscription) => console.log(subscription.name));

      return subscriptions;
    });
}
// [END pubsub_list_subscriptions]

// [START pubsub_list_topic_subscriptions]
function listTopicSubscriptions (topicName) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsub.topic(topicName);

  // Lists all subscriptions for the topic
  return topic.getSubscriptions()
    .then((results) => {
      const subscriptions = results[0];

      console.log(`Subscriptions for ${topicName}:`);
      subscriptions.forEach((subscription) => console.log(subscription.name));

      return subscriptions;
    });
}
// [END pubsub_list_topic_subscriptions]

// [START pubsub_create_subscription]
function createSubscription (topicName, subscriptionName) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsub.topic(topicName);

  // Creates a new subscription, e.g. "my-new-subscription"
  return topic.subscribe(subscriptionName)
    .then((results) => {
      const subscription = results[0];

      console.log(`Subscription ${subscription.name} created.`);

      return subscription;
    });
}
// [END pubsub_create_subscription]

// [START pubsub_create_push_subscription]
function createPushSubscription (topicName, subscriptionName) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsub.topic(topicName);

  const options = {
    pushConfig: {
      // Set to an HTTPS endpoint of your choice. If necessary, register
      // (authorize) the domain on which the server is hosted.
      pushEndpoint: `https://${pubsub.projectId}.appspot.com/push`
    }
  };

  // Creates a new push subscription, e.g. "my-new-subscription"
  return topic.subscribe(subscriptionName, options)
    .then((results) => {
      const subscription = results[0];

      console.log(`Subscription ${subscription.name} created.`);

      return subscription;
    });
}
// [END pubsub_create_push_subscription]

// [START pubsub_delete_subscription]
function deleteSubscription (subscriptionName) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsub.subscription(subscriptionName);

  // Deletes the subscription
  return subscription.delete()
    .then(() => {
      console.log(`Subscription ${subscription.name} deleted.`);
    });
}
// [END pubsub_delete_subscription]

// [START pubsub_get_subscription]
function getSubscription (subscriptionName) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsub.subscription(subscriptionName);

  // Gets the metadata for the subscription
  return subscription.getMetadata()
    .then((results) => {
      const metadata = results[0];

      console.log(`Subscription: ${metadata.name}`);
      console.log(`Topic: ${metadata.topic}`);
      console.log(`Push config: ${metadata.pushConfig.pushEndpoint}`);
      console.log(`Ack deadline: ${metadata.ackDeadlineSeconds}s`);

      return metadata;
    });
}
// [END pubsub_get_subscription]

// [START pubsub_pull_messages]
function pullMessages (subscriptionName) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsub.subscription(subscriptionName);

  // Pulls messages. Set returnImmediately to false to block until messages are
  // received.
  return subscription.pull()
    .then((results) => {
      const messages = results[0];

      console.log(`Received ${messages.length} messages.`);

      messages.forEach((message) => {
        console.log(`* %d %j %j`, message.id, message.data, message.attributes);
      });

      // Acknowledges received messages. If you do not acknowledge, Pub/Sub will
      // redeliver the message.
      return subscription.ack(messages.map((message) => message.ackId));
    });
}
// [END pubsub_pull_messages]

let subscribeCounterValue = 1;

function getSubscribeCounterValue () {
  return subscribeCounterValue;
}

function setSubscribeCounterValue (value) {
  subscribeCounterValue = value;
}

// [START pubsub_pull_ordered_messages]
const outstandingMessages = {};

function pullOrderedMessages (subscriptionName) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsub.subscription(subscriptionName);

  // Pulls messages. Set returnImmediately to false to block until messages are
  // received.
  return subscription.pull()
    .then((results) => {
      const messages = results[0];

      // Pub/Sub messages are unordered, so here we manually order messages by
      // their "counterId" attribute which was set when they were published.
      messages.forEach((message) => {
        outstandingMessages[message.attributes.counterId] = message;
      });

      const outstandingIds = Object.keys(outstandingMessages).map((counterId) => parseInt(counterId, 10));
      outstandingIds.sort();

      outstandingIds.forEach((counterId) => {
        const counter = getSubscribeCounterValue();
        const message = outstandingMessages[counterId];

        if (counterId < counter) {
          // The message has already been processed
          subscription.ack(message.ackId);
          delete outstandingMessages[counterId];
        } else if (counterId === counter) {
          // Process the message
          console.log(`* %d %j %j`, message.id, message.data, message.attributes);

          setSubscribeCounterValue(counterId + 1);
          subscription.ack(message.ackId);
          delete outstandingMessages[counterId];
        } else {
          // Have not yet processed the message on which this message is dependent
          return false;
        }
      });
    });
}
// [END pubsub_pull_ordered_messages]

// [START pubsub_get_subscription_policy]
function getSubscriptionPolicy (subscriptionName) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsub.subscription(subscriptionName);

  // Retrieves the IAM policy for the subscription
  return subscription.iam.getPolicy()
    .then((results) => {
      const policy = results[0];

      console.log(`Policy for subscription: %j.`, policy.bindings);

      return policy;
    });
}
// [END pubsub_get_subscription_policy]

// [START pubsub_set_subscription_policy]
function setSubscriptionPolicy (subscriptionName) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsub.subscription(subscriptionName);

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

  // Updates the IAM policy for the subscription
  return subscription.iam.setPolicy(newPolicy)
    .then((results) => {
      const updatedPolicy = results[0];

      console.log(`Updated policy for subscription: %j`, updatedPolicy.bindings);

      return updatedPolicy;
    });
}
// [END pubsub_set_subscription_policy]

// [START pubsub_test_subscription_permissions]
function testSubscriptionPermissions (subscriptionName) {
  // Instantiates a client
  const pubsub = PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsub.subscription(subscriptionName);

  const permissionsToTest = [
    `pubsub.subscriptions.consume`,
    `pubsub.subscriptions.update`
  ];

  // Tests the IAM policy for the specified subscription
  subscription.iam.testPermissions(permissionsToTest)
    .then((results) => {
      const permissions = results[0];

      console.log(`Tested permissions for subscription: %j`, permissions);

      return permissions;
    });
}
// [END pubsub_test_subscription_permissions]

module.exports = { pullOrderedMessages };

const cli = require(`yargs`)
  .demand(1)
  .command(
    `list [topicName]`,
    `Lists all subscriptions in the current project, optionally filtering by a topic.`,
    {},
    (opts) => {
      if (opts.topicName) {
        listTopicSubscriptions(opts.topicName);
      } else {
        listSubscriptions();
      }
    }
  )
  .command(
    `create <topicName> <subscriptionName>`,
    `Creates a new subscription.`,
    {},
    (opts) => createSubscription(opts.topicName, opts.subscriptionName)
  )
  .command(
    `create-push <topicName> <subscriptionName>`,
    `Creates a new push subscription.`,
    {},
    (opts) => createPushSubscription(opts.topicName, opts.subscriptionName)
  )
  .command(
    `delete <subscriptionName>`,
    `Deletes a subscription.`,
    {},
    (opts) => deleteSubscription(opts.subscriptionName)
  )
  .command(
    `get <subscriptionName>`,
    `Gets the metadata for a subscription.`,
    {},
    (opts) => getSubscription(opts.subscriptionName)
  )
  .command(
    `pull <subscriptionName>`,
    `Pulls messages for a subscription.`,
    {},
    (opts) => pullMessages(opts.subscriptionName)
  )
  .command(
    `get-policy <subscriptionName>`,
    `Gets the IAM policy for a subscription.`,
    {},
    (opts) => getSubscriptionPolicy(opts.subscriptionName)
  )
  .command(
    `set-policy <subscriptionName>`,
    `Sets the IAM policy for a subscription.`,
    {},
    (opts) => setSubscriptionPolicy(opts.subscriptionName)
  )
  .command(
    `test-permissions <subscriptionName>`,
    `Tests the permissions for a subscription.`,
    {},
    (opts) => testSubscriptionPermissions(opts.subscriptionName)
  )
  .example(`node $0 list`)
  .example(`node $0 list my-topic`)
  .example(`node $0 create my-topic worker-1`)
  .example(`node $0 create-push my-topic worker-1`)
  .example(`node $0 get worker-1`)
  .example(`node $0 delete worker-1`)
  .example(`node $0 pull worker-1`)
  .example(`node $0 get-policy worker-1`)
  .example(`node $0 set-policy worker-1`)
  .example(`node $0 test-permissions worker-1`)
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/pubsub/docs`);

if (module === require.main) {
  cli.help().strict().argv;
}
