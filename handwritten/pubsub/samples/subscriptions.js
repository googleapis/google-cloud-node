// Copyright 2019 Google LLC
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
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

'use strict';

async function listSubscriptions() {
  // [START pubsub_list_subscriptions]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  // Lists all subscriptions in the current project
  const [subscriptions] = await pubsub.getSubscriptions();
  console.log('Subscriptions:');
  subscriptions.forEach(subscription => console.log(subscription.name));

  // [END pubsub_list_subscriptions]
}

async function listTopicSubscriptions(topicName) {
  // [START pubsub_list_topic_subscriptions]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const topicName = 'my-topic';

  // Lists all subscriptions for the topic
  const [subscriptions] = await pubsub.topic(topicName).getSubscriptions();
  console.log(`Subscriptions for ${topicName}:`);
  subscriptions.forEach(subscription => console.log(subscription.name));

  // [END pubsub_list_topic_subscriptions]
}

async function createSubscription(topicName, subscriptionName) {
  // [START pubsub_create_pull_subscription]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'my-topic';
  // const subscriptionName = 'my-sub';

  // Creates a new subscription
  await pubsub.topic(topicName).createSubscription(subscriptionName);
  console.log(`Subscription ${subscriptionName} created.`);

  // [END pubsub_create_pull_subscription]
}

async function subscribeWithFlowControlSettings(
  subscriptionName,
  maxInProgress,
  timeout
) {
  // [START pubsub_subscriber_flow_settings]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const subscriptionName = 'my-sub';
  // const maxInProgress = 5;
  // const timeout = 10;

  const subscriberOptions = {
    flowControl: {
      maxMessages: maxInProgress,
    },
  };

  // References an existing subscription.
  // Note that flow control settings are not persistent across subscribers.
  const subscription = pubsub.subscription(subscriptionName, subscriberOptions);

  console.log(
    `Subscriber to subscription ${subscription.name} is ready to receive messages at a controlled volume of ${maxInProgress} messages.`
  );

  const messageHandler = message => {
    console.log(`Received message: ${message.id}`);
    console.log(`\tData: ${message.data}`);
    console.log(`\tAttributes: ${message.attributes}`);

    // "Ack" (acknowledge receipt of) the message
    message.ack();
  };

  subscription.on(`message`, messageHandler);

  setTimeout(() => {
    subscription.close();
  }, timeout * 1000);

  // [END pubsub_subscriber_flow_settings]
}

async function createPushSubscription(topicName, subscriptionName) {
  // [START pubsub_create_push_subscription]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'my-topic';
  // const subscriptionName = 'my-sub';

  const options = {
    pushConfig: {
      // Set to an HTTPS endpoint of your choice. If necessary, register
      // (authorize) the domain on which the server is hosted.
      pushEndpoint: `https://${pubsub.projectId}.appspot.com/push`,
    },
  };

  await pubsub.topic(topicName).createSubscription(subscriptionName, options);
  console.log(`Subscription ${subscriptionName} created.`);

  // [END pubsub_create_push_subscription]
}

async function modifyPushConfig(topicName, subscriptionName) {
  // [START pubsub_update_push_configuration]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const topicName = 'my-topic';
  // const subscriptionName = 'my-sub';

  const options = {
    // Set to an HTTPS endpoint of your choice. If necessary, register
    // (authorize) the domain on which the server is hosted.
    pushEndpoint: `https://${pubsub.projectId}.appspot.com/push`,
  };

  await pubsub
    .topic(topicName)
    .subscription(subscriptionName)
    .modifyPushConfig(options);
  console.log(`Modified push config for subscription ${subscriptionName}.`);

  // [END pubsub_update_push_configuration]
}

async function deleteSubscription(subscriptionName) {
  // [START pubsub_delete_subscription]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const subscriptionName = 'my-sub';

  // Deletes the subscription
  await pubsub.subscription(subscriptionName).delete();
  console.log(`Subscription ${subscriptionName} deleted.`);

  // [END pubsub_delete_subscription]
}

async function getSubscription(subscriptionName) {
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const subscriptionName = 'my-sub';

  // Gets the metadata for the subscription
  const [metadata] = await pubsub.subscription(subscriptionName).getMetadata();
  console.log(`Subscription: ${metadata.name}`);
  console.log(`Topic: ${metadata.topic}`);
  console.log(`Push config: ${metadata.pushConfig.pushEndpoint}`);
  console.log(`Ack deadline: ${metadata.ackDeadlineSeconds}s`);
}

function listenForMessages(subscriptionName, timeout) {
  // [START pubsub_subscriber_async_pull]
  // [START pubsub_quickstart_subscriber]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const subscriptionName = 'my-sub';
  // const timeout = 60;

  // References an existing subscription
  const subscription = pubsub.subscription(subscriptionName);

  // Create an event handler to handle messages
  let messageCount = 0;
  const messageHandler = message => {
    console.log(`Received message ${message.id}:`);
    console.log(`\tData: ${message.data}`);
    console.log(`\tAttributes: ${message.attributes}`);
    messageCount += 1;

    // "Ack" (acknowledge receipt of) the message
    message.ack();
  };

  // Listen for new messages until timeout is hit
  subscription.on(`message`, messageHandler);

  setTimeout(() => {
    subscription.removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
  // [END pubsub_subscriber_async_pull]
  // [END pubsub_quickstart_subscriber]
}

async function synchronousPull(projectName, subscriptionName) {
  // [START pubsub_subscriber_sync_pull]
  // Imports the Google Cloud client library
  const pubsub = require('@google-cloud/pubsub');

  const client = new pubsub.v1.SubscriberClient();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const projectName = 'your-project';
  // const subscriptionName = 'your-subscription';

  const formattedSubscription = client.subscriptionPath(
    projectName,
    subscriptionName
  );
  // The maximum number of messages returned for this request.
  // Pub/Sub may return fewer than the number specified.
  const maxMessages = 1;
  const newAckDeadlineSeconds = 30;
  const request = {
    subscription: formattedSubscription,
    maxMessages: maxMessages,
  };

  let isProcessed = false;

  // The worker function is meant to be non-blocking. It starts a long-
  // running process, such as writing the message to a table, which may
  // take longer than the default 10-sec acknowledge deadline.
  function worker(message) {
    console.log(`Processing "${message.message.data}"...`);

    setTimeout(() => {
      console.log(`Finished procesing "${message.message.data}".`);
      isProcessed = true;
    }, 30000);
  }

  // The subscriber pulls a specified number of messages.
  const [response] = await client.pull(request);
  // Obtain the first message.
  const message = response.receivedMessages[0];
  // Send the message to the worker function.
  worker(message);

  let waiting = true;
  while (waiting) {
    await new Promise(r => setTimeout(r, 10000));
    // If the message has been processed..
    if (isProcessed) {
      const ackRequest = {
        subscription: formattedSubscription,
        ackIds: [message.ackId],
      };

      //..acknowledges the message.
      await client.acknowledge(ackRequest);
      console.log(`Acknowledged: "${message.message.data}".`);
      // Exit after the message is acknowledged.
      waiting = false;
      console.log(`Done.`);
    } else {
      // If the message is not yet processed..
      const modifyAckRequest = {
        subscription: formattedSubscription,
        ackIds: [message.ackId],
        ackDeadlineSeconds: newAckDeadlineSeconds,
      };

      //..reset its ack deadline.
      await client.modifyAckDeadline(modifyAckRequest);

      console.log(
        `Reset ack deadline for "${message.message.data}" for ${newAckDeadlineSeconds}s.`
      );
    }
  }
  // [END pubsub_subscriber_sync_pull]
}

let subscribeCounterValue = 1;

function getSubscribeCounterValue() {
  return subscribeCounterValue;
}

function setSubscribeCounterValue(value) {
  subscribeCounterValue = value;
}

// [START pubsub_listen_ordered_messages]
const outstandingMessages = {};

async function listenForOrderedMessages(subscriptionName, timeout) {
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  // References an existing subscription, e.g. "my-subscription"
  const subscription = pubsub.subscription(subscriptionName);

  // Create an event handler to handle messages
  const messageHandler = function(message) {
    // Buffer the message in an object (for later ordering)
    outstandingMessages[message.attributes.counterId] = message;

    // "Ack" (acknowledge receipt of) the message
    message.ack();
  };

  // Listen for new messages until timeout is hit
  subscription.on(`message`, messageHandler);
  await new Promise(r => setTimeout(r, timeout * 1000));
  subscription.removeListener(`message`, messageHandler);

  // Pub/Sub messages are unordered, so here we manually order messages by
  // their "counterId" attribute which was set when they were published.
  const outstandingIds = Object.keys(outstandingMessages).map(counterId =>
    Number(counterId, 10)
  );
  outstandingIds.sort();

  outstandingIds.forEach(counterId => {
    const counter = getSubscribeCounterValue();
    const message = outstandingMessages[counterId];

    if (counterId < counter) {
      // The message has already been processed
      message.ack();
      delete outstandingMessages[counterId];
    } else if (counterId === counter) {
      // Process the message
      console.log(
        `* %d %j %j`,
        message.id,
        message.data.toString(),
        message.attributes
      );
      setSubscribeCounterValue(counterId + 1);
      message.ack();
      delete outstandingMessages[counterId];
    } else {
      // Have not yet processed the message on which this message is dependent
      return false;
    }
  });
}
// [END pubsub_listen_ordered_messages]

async function listenForErrors(subscriptionName, timeout) {
  // [START pubsub_subscriber_error_listener]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const subscriptionName = 'my-sub';
  // const timeout = 60;

  // References an existing subscription
  const subscription = pubsub.subscription(subscriptionName);

  // Create an event handler to handle messages
  const messageHandler = function(message) {
    // Do something with the message
    console.log(`Message: ${message}`);

    // "Ack" (acknowledge receipt of) the message
    message.ack();
  };

  // Create an event handler to handle errors
  const errorHandler = function(error) {
    // Do something with the error
    console.error(`ERROR: ${error}`);
  };

  // Listen for new messages/errors until timeout is hit
  subscription.on(`message`, messageHandler);
  subscription.on(`error`, errorHandler);

  setTimeout(() => {
    subscription.removeListener(`message`, messageHandler);
    subscription.removeListener(`error`, errorHandler);
  }, timeout * 1000);
  // [END pubsub_subscriber_error_listener]
}

async function getSubscriptionPolicy(subscriptionName) {
  // [START pubsub_get_subscription_policy]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const subscriptionName = 'my-sub';

  // Retrieves the IAM policy for the subscription
  const [policy] = await pubsub.subscription(subscriptionName).iam.getPolicy();
  console.log(`Policy for subscription: ${JSON.stringify(policy.bindings)}.`);

  // [END pubsub_get_subscription_policy]
}

async function setSubscriptionPolicy(subscriptionName) {
  // [START pubsub_set_subscription_policy]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const subscriptionName = 'my-sub';

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

  // Updates the IAM policy for the subscription
  const [updatedPolicy] = await pubsub
    .subscription(subscriptionName)
    .iam.setPolicy(newPolicy);
  console.log(`Updated policy for subscription: %j`, updatedPolicy.bindings);

  // [END pubsub_set_subscription_policy]
}

async function testSubscriptionPermissions(subscriptionName) {
  // [START pubsub_test_subscription_permissions]
  // Imports the Google Cloud client library
  const {PubSub} = require('@google-cloud/pubsub');

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const subscriptionName = 'my-sub';

  const permissionsToTest = [
    `pubsub.subscriptions.consume`,
    `pubsub.subscriptions.update`,
  ];

  // Tests the IAM policy for the specified subscription
  const [permissions] = await pubsub
    .subscription(subscriptionName)
    .iam.testPermissions(permissionsToTest);
  console.log(`Tested permissions for subscription: %j`, permissions);

  // [END pubsub_test_subscription_permissions]
}

module.exports = {listenForOrderedMessages};

const cli = require(`yargs`)
  .demand(1)
  .command(
    `list [topicName]`,
    `Lists all subscriptions in the current project, optionally filtering by a topic.`,
    {},
    opts => {
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
    opts => createSubscription(opts.topicName, opts.subscriptionName)
  )
  .command(
    `create-push <topicName> <subscriptionName>`,
    `Creates a new push subscription.`,
    {},
    opts => createPushSubscription(opts.topicName, opts.subscriptionName)
  )
  .command(
    `modify-config <topicName> <subscriptionName>`,
    `Modifies the configuration of an existing push subscription.`,
    {},
    opts => modifyPushConfig(opts.topicName, opts.subscriptionName)
  )
  .command(`delete <subscriptionName>`, `Deletes a subscription.`, {}, opts =>
    deleteSubscription(opts.subscriptionName)
  )
  .command(
    `get <subscriptionName>`,
    `Gets the metadata for a subscription.`,
    {},
    opts => getSubscription(opts.subscriptionName)
  )
  .command(
    `listen-messages <subscriptionName>`,
    `Listens to messages for a subscription.`,
    {
      timeout: {
        alias: 't',
        type: 'number',
        default: 10,
      },
    },
    opts => listenForMessages(opts.subscriptionName, opts.timeout)
  )
  .command(
    `listen-flow-control <subscriptionName>`,
    `Listen to messages with flow control settings, which are properties of the client/listener instance.`,
    {
      maxInProgress: {
        alias: 'm',
        type: 'number',
        default: 1,
      },
      timeout: {
        alias: 't',
        type: 'number',
        default: 10,
      },
    },
    opts =>
      subscribeWithFlowControlSettings(
        opts.subscriptionName,
        opts.maxInProgress,
        opts.timeout
      )
  )
  .command(
    `sync-pull <projectName> <subscriptionName>`,
    `Receive messages synchronously.`,
    {},
    opts => synchronousPull(opts.projectName, opts.subscriptionName)
  )
  .command(
    `listen-errors <subscriptionName>`,
    `Listens to messages and errors for a subscription.`,
    {
      timeout: {
        alias: 't',
        type: 'number',
        default: 10,
      },
    },
    opts => listenForErrors(opts.subscriptionName, opts.timeout)
  )
  .command(
    `get-policy <subscriptionName>`,
    `Gets the IAM policy for a subscription.`,
    {},
    opts => getSubscriptionPolicy(opts.subscriptionName)
  )
  .command(
    `set-policy <subscriptionName>`,
    `Sets the IAM policy for a subscription.`,
    {},
    opts => setSubscriptionPolicy(opts.subscriptionName)
  )
  .command(
    `test-permissions <subscriptionName>`,
    `Tests the permissions for a subscription.`,
    {},
    opts => testSubscriptionPermissions(opts.subscriptionName)
  )
  .example(`node $0 list`)
  .example(`node $0 list my-topic`)
  .example(`node $0 create my-topic worker-1`)
  .example(`node $0 create-push my-topic worker-1`)
  .example(`node $0 modify-config my-topic worker-1`)
  .example(`node $0 get worker-1`)
  .example(`node $0 listen-messages my-subscription`)
  .example(`node $0 sync-pull my-project my-subscription`)
  .example(`node $0 listen-errors my-subscription`)
  .example(`node $0 listen-flow-control my-subscription -m 5`)
  .example(`node $0 delete worker-1`)
  .example(`node $0 pull worker-1`)
  .example(`node $0 get-policy worker-1`)
  .example(`node $0 set-policy worker-1`)
  .example(`node $0 test-permissions worker-1`)
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/pubsub/docs`);

if (module === require.main) {
  cli.help().strict().argv; // eslint-disable-line
}
