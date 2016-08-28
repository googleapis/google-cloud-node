// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START auth]
// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/google-cloud/latest/guides/authentication
var PubSub = require('@google-cloud/pubsub');

// Instantiate a pubsub client
var pubsub = PubSub();
// [END auth]

// [START create_subscription]
/**
 * Create a new subscription.
 *
 * @param {string} topicName Name of the topic for the new subscription.
 * @param {string} subscriptionName Name for the new subscription.
 * @param {Function} callback Callback function.
 */
function createSubscription (topicName, subscriptionName, callback) {
  if (!topicName) {
    return callback(new Error('"topicName" is required!'));
  } else if (!subscriptionName) {
    return callback(new Error('"subscriptionName" is required!'));
  }

  var options = {
    reuseExisting: true
  };
  pubsub.subscribe(topicName, subscriptionName, options, function (err, subscription) {
    if (err) {
      return callback(err);
    }

    console.log('Created subscription %s to topic %s', subscriptionName, topicName);
    return callback(null, subscription);
  });
}
// [END create_subscription]

// [START delete_subscription]
/**
 * Delete a subscription.
 *
 * @param {string} subscriptionName Name of the subscription to delete.
 * @param {Function} callback The callback function.
 */
function deleteSubscription (subscriptionName, callback) {
  if (!subscriptionName) {
    return callback(new Error('"subscriptionName" is required!'));
  }

  var subscription = pubsub.subscription(subscriptionName);

  // Delete the subscription
  subscription.delete(function (err) {
    if (err) {
      return callback(err);
    }

    console.log('Deleted subscription: %s', subscriptionName);
    return callback(null);
  });
}
// [END delete_subscription]

// [START get_all_subscriptions]
/**
 * List all subscriptions for the specified topic, or list all subcriptions for
 * all topics.
 *
 * @param {string} [topicName] The name of the topic. If omitted, list all
 * subscriptions.
 * @param {Function} callback The callback function.
 */
function listSubscriptions (topicName, callback) {
  var options = {};
  if (typeof topicName === 'string') {
    // Optionally find subscriptions for a specific topic
    options.topic = pubsub.topic(topicName);
  }
  pubsub.getSubscriptions(options, function (err, subscriptions) {
    if (err) {
      return callback(err);
    }

    console.log('Found %d subscriptions!', subscriptions.length);
    return callback(null, subscriptions);
  });
}
// [END get_all_subscriptions]

// [START handle_message]
function handleMessage (message) {
  console.log('received message: ' + message.data);
}
// [END handle_message]

// [START pull_messages]
/**
 * Pull messages from a topic's subscription.
 *
 * @param {string} subscriptionName The name of the subscription.
 * @param {function} callback The callback function.
 */
function pullMessages (subscriptionName, callback) {
  if (!subscriptionName) {
    return callback(new Error('"subscriptionName" is required!'));
  }

  var subscription = pubsub.subscription(subscriptionName);
  var options = {
    // Limit the amount of messages pulled.
    maxResults: 100,
    // If set, the system will respond immediately. Otherwise, wait until
    // new messages are available. Returns if timeout is reached.
    returnImmediately: false
  };
  // Pull any messages on the subscription
  subscription.pull(options, function (err, messages) {
    if (err) {
      return callback(err);
    }
    // Do something for each message
    messages.forEach(handleMessage);

    console.log('Pulled %d messages!', messages.length);

    // Acknowledge messages
    var subscription = pubsub.subscription(subscriptionName);
    subscription.ack(messages.map(function (message) {
      return message.ackId;
    }), function (err) {
      if (err) {
        return callback(err);
      }

      console.log('Acked %d messages!', messages.length);
      return callback(null, messages);
    });
  });
}
// [END pull_messages]

// The command-line program
var cli = require('yargs');
var makeHandler = require('../utils').makeHandler;

var program = module.exports = {
  createSubscription: createSubscription,
  deleteSubscription: deleteSubscription,
  pullMessages: pullMessages,
  listSubscriptions: listSubscriptions,
  main: function (args) {
    // Run the command-line program
    cli.help().strict().parse(args).argv;
  }
};

cli
  .demand(1)
  .command('create <topic> <name>', 'Create a new subscription.', {}, function (options) {
    program.createSubscription(options.topic, options.name, makeHandler(true, 'id'));
  })
  .command('list [topic]', 'List subscriptions.', {}, function (options) {
    program.listSubscriptions(options.topic, makeHandler(true, 'id'));
  })
  .command('pull <subscription>', 'Pull messages from the specified subscription.', {}, function (options) {
    program.pullMessages(options.subscription, makeHandler(false));
  })
  .command('delete <subscription>', 'Delete the specified subscription.', {}, function (options) {
    program.deleteSubscription(options.subscription, makeHandler(false));
  })
  .example('node $0 create my-topic my-subscription', 'Create a new subscription.')
  .example('node $0 delete my-subscription', 'Delete a subscription.')
  .example('node $0 pull my-subscription', 'Pull messages from "my-subscription".')
  .example('node $0 list', 'List all subscriptions.')
  .example('node $0 list my-topic', 'List subscriptions to topic "my-topic".')
  .wrap(100)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/pubsub/docs');

if (module === require.main) {
  program.main(process.argv.slice(2));
}
