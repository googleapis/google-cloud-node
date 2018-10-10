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
 * This application demonstrates how to perform basic operations on
 * subscriptions with the Google Cloud Pub/Sub API.
 *
 * For more information, see the README.md under /pubsub and the documentation
 * at https://cloud.google.com/pubsub/docs.
 */

'use strict';

function listSubscriptions() {
  // [START pubsub_list_subscriptions]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  // Lists all subscriptions in the current project
  pubsub
    .getSubscriptions()
    .then(results => {
      const subscriptions = results[0];

      console.log('Subscriptions:');
      subscriptions.forEach(subscription => console.log(subscription.name));
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_list_subscriptions]
}

function listTopicSubscriptions(topicName) {
  // [START pubsub_list_topic_subscriptions]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const topicName = 'my-topic';

  // Lists all subscriptions for the topic
  pubsub
    .topic(topicName)
    .getSubscriptions()
    .then(results => {
      const subscriptions = results[0];

      console.log(`Subscriptions for ${topicName}:`);
      subscriptions.forEach(subscription => console.log(subscription.name));
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_list_topic_subscriptions]
}

function createSubscription(topicName, subscriptionName) {
  // [START pubsub_create_pull_subscription]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'my-topic';
  // const subscriptionName = 'my-sub';

  // Creates a new subscription
  pubsub
    .topic(topicName)
    .createSubscription(subscriptionName)
    .then(results => {
      const subscription = results[0];
      console.log(`Subscription ${subscriptionName} created.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_create_pull_subscription]
}

function createFlowControlledSubscription(
  topicName,
  subscriptionName,
  maxInProgress,
  maxBytes
) {
  // [START pubsub_subscriber_flow_settings]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
  // const topicName = 'my-topic';
  // const subscriptionName = 'my-sub';
  // const maxInProgress = 5;
  // const maxBytes = 10000;

  const topic = pubsub.topic(topicName);

  const options = {
    flowControl: {
      maxBytes: maxBytes,
      maxMessages: maxInProgress,
    },
  };

  const subscription = topic.subscription(subscriptionName, options);

  // Creates a new subscription
  // Note that flow control configurations are not persistent
  subscription
    .get({
      autoCreate: true,
    })
    .then(results => {
      const subscription = results[0];

      console.log(
        `Subscription ${
          subscription.name
        } created with a maximum of ${maxInProgress} unprocessed messages.`
      );
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_subscriber_flow_settings]
}

function createPushSubscription(topicName, subscriptionName) {
  // [START pubsub_create_push_subscription]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

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

  pubsub
    .topic(topicName)
    .createSubscription(subscriptionName, options)
    .then(results => {
      const subscription = results[0];

      console.log(`Subscription ${subscriptionName} created.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_create_push_subscription]
}

function modifyPushConfig(topicName, subscriptionName) {
  // [START pubsub_update_push_configuration]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

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

  pubsub
    .topic(topicName)
    .subscription(subscriptionName)
    .modifyPushConfig(options)
    .then(() => {
      console.log(`Modified push config for subscription ${subscriptionName}.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_update_push_configuration]
}

function deleteSubscription(subscriptionName) {
  // [START pubsub_delete_subscription]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const subscriptionName = 'my-sub';

  // Deletes the subscription
  pubsub
    .subscription(subscriptionName)
    .delete()
    .then(() => {
      console.log(`Subscription ${subscriptionName} deleted.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_delete_subscription]
}

function getSubscription(subscriptionName) {
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const subscriptionName = 'my-sub';

  // Gets the metadata for the subscription
  pubsub
    .subscription(subscriptionName)
    .getMetadata()
    .then(results => {
      const metadata = results[0];

      console.log(`Subscription: ${metadata.name}`);
      console.log(`Topic: ${metadata.topic}`);
      console.log(`Push config: ${metadata.pushConfig.pushEndpoint}`);
      console.log(`Ack deadline: ${metadata.ackDeadlineSeconds}s`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

function listenForMessages(subscriptionName, timeout) {
  // [START pubsub_subscriber_async_pull]
  // [START pubsub_quickstart_subscriber]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

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

function synchronousPull(projectName, subscriptionName) {
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
  const maxMessages = 3;
  const ackDeadlineSeconds = 30;
  const request = {
    subscription: formattedSubscription,
    maxMessages: maxMessages,
  };
  // `messages` is a dict that stores message ack ids as keys, and message
  // data and the processing states (true if done, false if not) as values.
  const messages = {};

  // The worker function takes a message and starts a long-running process.
  function worker(message) {
    const target = Math.floor(Math.random() * 1e5);
    console.log(`Processing "${message.message.data}" for ${target / 1e3}s...`);

    setTimeout(() => {
      console.log(`Finished procesing "${message.message.data}".`);
      // After the message has been processed, set its processing state to true.
      messages[message.ackId][1] = true;
    }, target);
  }

  // The subscriber pulls a specific number of messages.
  client
    .pull(request)
    .then(responses => {
      // The first element of `responses` is a PullResponse object.
      const response = responses[0];

      // Initialize `messages` with message ackId, message data and `false` as
      // processing state. Then, start each message in a worker function.
      response.receivedMessages.forEach(message => {
        messages[message.ackId] = [message.message.data, false];
        worker(message);
      });

      let numProcessed = 0;

      // setInterval() gets run every 10s.
      const interval = setInterval(function() {
        // Every 10s, we do a check on the processing states of the messages.
        Object.keys(messages).forEach(ackId => {
          if (messages[ackId][1]) {
            // If the processing state for a particular message is true,
            // We will ack the message.
            const ackRequest = {
              subscription: formattedSubscription,
              ackIds: [ackId],
            };

            client.acknowledge(ackRequest).catch(err => {
              console.error(err);
            });

            console.log(`Acknowledged: "${messages[ackId][0]}".`);

            // Increment numProcessed by 1.
            numProcessed += 1;

            // Remove this message from `messages`.
            delete messages[ackId];
          } else {
            // If the processing state of a particular message remains false,
            // we will modify its ack deadline.
            const modifyAckRequest = {
              subscription: formattedSubscription,
              ackIds: [ackId],
              ackDeadlineSeconds: ackDeadlineSeconds,
            };

            client.modifyAckDeadline(modifyAckRequest).catch(err => {
              console.error(err);
            });

            console.log(
              `Reset ack deadline for "${
                messages[ackId][0]
              }" for ${ackDeadlineSeconds}s.`
            );
          }

          // If all messages have been processed, we clear out of the interval.
          if (numProcessed === response.receivedMessages.length) {
            clearInterval(interval);
            console.log(`Done.`);
          }
        });
      }, 10000);
    })
    .catch(err => {
      console.error(err);
    });
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

function listenForOrderedMessages(subscriptionName, timeout) {
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

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
  return new Promise(resolve => {
    subscription.on(`message`, messageHandler);
    setTimeout(() => {
      subscription.removeListener(`message`, messageHandler);
      resolve();
    }, timeout * 1000);
  }).then(() => {
    // Pub/Sub messages are unordered, so here we manually order messages by
    // their "counterId" attribute which was set when they were published.
    const outstandingIds = Object.keys(outstandingMessages).map(counterId =>
      parseInt(counterId, 10)
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
  });
}
// [END pubsub_listen_ordered_messages]

function listenForErrors(subscriptionName, timeout) {
  // [START pubsub_subscriber_error_listener]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

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

function getSubscriptionPolicy(subscriptionName) {
  // [START pubsub_get_subscription_policy]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

  // Creates a client
  const pubsub = new PubSub();

  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const subscriptionName = 'my-sub';

  // Retrieves the IAM policy for the subscription
  pubsub
    .subscription(subscriptionName)
    .iam.getPolicy()
    .then(results => {
      const policy = results[0];
      console.log(`Policy for subscription: %j.`, policy.bindings);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_get_subscription_policy]
}

function setSubscriptionPolicy(subscriptionName) {
  // [START pubsub_set_subscription_policy]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

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
  pubsub
    .subscription(subscriptionName)
    .iam.setPolicy(newPolicy)
    .then(results => {
      const updatedPolicy = results[0];
      console.log(
        `Updated policy for subscription: %j`,
        updatedPolicy.bindings
      );
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END pubsub_set_subscription_policy]
}

function testSubscriptionPermissions(subscriptionName) {
  // [START pubsub_test_subscription_permissions]
  // Imports the Google Cloud client library
  const PubSub = require(`@google-cloud/pubsub`);

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
  pubsub
    .subscription(subscriptionName)
    .iam.testPermissions(permissionsToTest)
    .then(results => {
      const permissions = results[0];
      console.log(`Tested permissions for subscription: %j`, permissions);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
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
    `create-flow <topicName> <subscriptionName>`,
    `Creates a new subscription with flow-control limits, which don't persist between subscriptions.`,
    {
      maxInProgress: {
        alias: 'm',
        type: 'number',
        default: 0,
      },
      maxBytes: {
        alias: 'b',
        type: 'number',
        default: 0,
      },
    },
    opts =>
      createFlowControlledSubscription(
        opts.topicName,
        opts.subscriptionName,
        opts.maxInProgress,
        opts.maxBytes
      )
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
  .example(`node $0 create-flow my-topic worker-1 -m 5`)
  .example(`node $0 create-push my-topic worker-1`)
  .example(`node $0 modify-config my-topic worker-1`)
  .example(`node $0 get worker-1`)
  .example(`node $0 listen-messages my-subscription`)
  .example(`node $0 sync-pull my-project my-subscription`)
  .example(`node $0 listen-errors my-subscription`)
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
