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
function listSubscriptions (callback) {
  // Instantiates the client library
  const pubsubClient = PubSub();

  // Lists all subscriptions in the current project
  pubsubClient.getSubscriptions((err, subscriptions) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Subscriptions:`);
    subscriptions.forEach((subscription) => console.log(subscription.name));
    callback();
  });
}
// [END pubsub_list_subscriptions]

// [START pubsub_list_topic_subscriptions]
function listTopicSubscriptions (topicName, callback) {
  // Instantiates the client library
  const pubsubClient = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsubClient.topic(topicName);

  // Lists all subscriptions for the topic
  topic.getSubscriptions((err, subscriptions) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Subscriptions for ${topicName}:`);
    subscriptions.forEach((subscription) => console.log(subscription.name));
    callback();
  });
}
// [END pubsub_list_topic_subscriptions]

// [START pubsub_create_subscription]
function createSubscription (topicName, subscriptionName, callback) {
  // Instantiates the client library
  const pubsubClient = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsubClient.topic(topicName);

  // Creates a new subscription, e.g. "my-new-subscription"
  topic.subscribe(subscriptionName, (err, subscription) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Subscription ${subscription.name} created.`);
    callback();
  });
}
// [END pubsub_create_subscription]

// [START pubsub_create_push_subscription]
function createPushSubscription (topicName, subscriptionName, callback) {
  // Instantiates the client library
  const pubsubClient = PubSub();

  // References an existing topic, e.g. "my-topic"
  const topic = pubsubClient.topic(topicName);

  // Creates a new push subscription, e.g. "my-new-subscription"
  topic.subscribe(subscriptionName, {
    pushConfig: {
      // Set to an HTTPS endpoint of your choice. If necessary, register
      // (authorize) the domain on which the server is hosted.
      pushEndpoint: `https://${pubsubClient.projectId}.appspot.com/push`
    }
  }, (err, subscription) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Subscription ${subscription.name} created.`);
    callback();
  });
}
// [END pubsub_create_push_subscription]

// [START pubsub_delete_subscription]
function deleteSubscription (subscriptionName, callback) {
  // Instantiates the client library
  const pubsubClient = PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsubClient.subscription(subscriptionName);

  // Deletes the subscription
  subscription.delete((err) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Subscription ${subscription.name} deleted.`);
    callback();
  });
}
// [END pubsub_delete_subscription]

// [START pubsub_get_subscription]
function getSubscription (subscriptionName, callback) {
  // Instantiates the client library
  const pubsubClient = PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsubClient.subscription(subscriptionName);

  // Gets the metadata for the subscription
  subscription.getMetadata((err, metadata) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Subscription: ${metadata.name}`);
    console.log(`Topic: ${metadata.topic}`);
    console.log(`Push config: ${metadata.pushConfig.pushEndpoint}`);
    console.log(`Ack deadline: ${metadata.ackDeadlineSeconds}s`);
    callback();
  });
}
// [END pubsub_get_subscription]

// [START pubsub_pull_messages]
function pullMessages (subscriptionName, callback) {
  // Instantiates the client library
  const pubsubClient = PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsubClient.subscription(subscriptionName);

  // Pulls messages. Set returnImmediately to false to block until messages are
  // received.
  subscription.pull({ returnImmediately: true }, (err, messages) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Received ${messages.length} messages.`);

    messages.forEach((message) => {
      console.log(`* %d %j %j`, message.id, message.data, message.attributes);
    });

    // Acknowledges received messages. If you do not acknowledge, Pub/Sub will
    // redeliver the message.
    subscription.ack(messages.map((message) => message.ackId), callback);
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

function pullOrderedMessages (subscriptionName, callback) {
  // Instantiates the client library
  const pubsubClient = PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsubClient.subscription(subscriptionName);

  // Pulls messages. Set returnImmediately to false to block until messages are
  // received.
  subscription.pull({ returnImmediately: true }, (err, messages) => {
    if (err) {
      callback(err);
      return;
    }

    // Pub/Sub messages are unordered, so here we manually order messages by
    // their "counterId" attribute which was set when they were published.
    messages.forEach((message) => {
      outstandingMessages[message.attributes.counterId] = message;
    });

    const outstandingIds = Object.keys(outstandingMessages).map((counterId) => +counterId);
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
    callback();
  });
}
// [END pubsub_pull_ordered_messages]

// [START pubsub_get_subscription_policy]
function getSubscriptionPolicy (subscriptionName, callback) {
  // Instantiates the client library
  const pubsubClient = PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsubClient.subscription(subscriptionName);

  // Retrieves the IAM policy for the subscription
  subscription.iam.getPolicy((err, policy) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Policy for subscription: %j.`, policy.bindings);
    callback();
  });
}
// [END pubsub_get_subscription_policy]

// [START pubsub_set_subscription_policy]
function setSubscriptionPolicy (subscriptionName, callback) {
  // Instantiates the client library
  const pubsubClient = PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsubClient.subscription(subscriptionName);

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
  subscription.iam.setPolicy(newPolicy, (err, updatedPolicy) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Updated policy for subscription: %j`, updatedPolicy.bindings);
    callback();
  });
}
// [END pubsub_set_subscription_policy]

// [START pubsub_test_subscription_permissions]
function testSubscriptionPermissions (subscriptionName, callback) {
  // Instantiates the client library
  const pubsubClient = PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsubClient.subscription(subscriptionName);

  const permissionsToTest = [
    `pubsub.subscriptions.consume`,
    `pubsub.subscriptions.update`
  ];

  // Tests the IAM policy for the specified subscription
  subscription.iam.testPermissions(permissionsToTest, (err, permissions) => {
    if (err) {
      callback(err);
      return;
    }

    console.log(`Tested permissions for subscription: %j`, permissions);
    callback();
  });
}
// [END pubsub_test_subscription_permissions]

// The command-line program
const cli = require(`yargs`);
const makeHandler = require(`../utils`).makeHandler;

const program = module.exports = {
  listSubscriptions: listSubscriptions,
  listTopicSubscriptions: listTopicSubscriptions,
  createSubscription: createSubscription,
  createPushSubscription: createPushSubscription,
  deleteSubscription: deleteSubscription,
  getSubscription: getSubscription,
  pullMessages: pullMessages,
  pullOrderedMessages: pullOrderedMessages,
  getSubscriptionPolicy: getSubscriptionPolicy,
  setSubscriptionPolicy: setSubscriptionPolicy,
  testSubscriptionPermissions: testSubscriptionPermissions,
  main: (args) => {
    // Run the command-line program
    cli.help().strict().parse(args).argv;
  }
};

cli
  .demand(1)
  .command(`list [topicName]`, `Lists all subscriptions in the current project, optionally filtering by a topic.`, {}, (options) => {
    if (options.topicName) {
      program.listTopicSubscriptions(options.topicName, makeHandler(false));
    } else {
      program.listSubscriptions(makeHandler(false));
    }
  })
  .command(`create <topicName> <subscriptionName>`, `Creates a new subscription.`, {}, (options) => {
    program.createSubscription(options.topicName, options.subscriptionName, makeHandler(false));
  })
  .command(`create-push <topicName> <subscriptionName>`, `Creates a new push subscription.`, {}, (options) => {
    program.createPushSubscription(options.topicName, options.subscriptionName, makeHandler(false));
  })
  .command(`delete <subscriptionName>`, `Deletes a subscription.`, {}, (options) => {
    program.deleteSubscription(options.subscriptionName, makeHandler(false));
  })
  .command(`get <subscriptionName>`, `Gets the metadata for a subscription.`, {}, (options) => {
    program.getSubscription(options.subscriptionName, makeHandler(false));
  })
  .command(`pull <subscriptionName>`, `Pulls messages for a subscription.`, {}, (options) => {
    program.pullMessages(options.subscriptionName, makeHandler(false));
  })
  .command(`get-policy <subscriptionName>`, `Gets the IAM policy for a subscription.`, {}, (options) => {
    program.getSubscriptionPolicy(options.subscriptionName, makeHandler(false));
  })
  .command(`set-policy <subscriptionName>`, `Sets the IAM policy for a subscription.`, {}, (options) => {
    program.setSubscriptionPolicy(options.subscriptionName, makeHandler(false));
  })
  .command(`test-permissions <subscriptionName>`, `Tests the permissions for a subscription.`, {}, (options) => {
    program.testSubscriptionPermissions(options.subscriptionName, makeHandler(false));
  })
  .example(`node $0 list`, `Lists all subscriptions in the current project.`)
  .example(`node $0 list greetings`, `Lists all subscriptions for a topic named "greetings".`)
  .example(`node $0 create greetings greetings-worker-1`, `Creates a subscription named "greetings-worker-1" to a topic named "greetings".`)
  .example(`node $0 create-push greetings greetings-worker-1`, `Creates a push subscription named "greetings-worker-1" to a topic named "greetings".`)
  .example(`node $0 get greetings-worker-1`, `Gets the metadata for a subscription named "greetings-worker-1".`)
  .example(`node $0 delete greetings-worker-1`, `Deletes a subscription named "greetings-worker-1".`)
  .example(`node $0 pull greetings-worker-1`, `Pulls messages for a subscription named "greetings-worker-1".`)
  .example(`node $0 get-policy greetings-worker-1`, `Gets the IAM policy for a subscription named "greetings-worker-1".`)
  .example(`node $0 set-policy greetings-worker-1`, `Sets the IAM policy for a subscription named "greetings-worker-1".`)
  .example(`node $0 test-permissions greetings-worker-1`, `Tests the permissions for a subscription named "greetings-worker-1".`)
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/pubsub/docs`);

if (module === require.main) {
  program.main(process.argv.slice(2));
}
