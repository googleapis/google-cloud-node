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

// [START usage]
function printUsage () {
  console.log('Usage: node subscriptions COMMAND [ARGS...]');
  console.log('\nCommands:\n');
  console.log('\tcreate TOPIC_NAME SUBSCRIPTION_NAME');
  console.log('\tdelete SUBSCRIPTION_NAME');
  console.log('\tpull SUBSCRIPTION_NAME');
  console.log('\tlist [TOPIC_NAME]');
  console.log('\nExamples:\n');
  console.log('\tnode subscriptions create my-topic my-subscription');
  console.log('\tnode subscriptions delete my-subscription');
  console.log('\tnode subscriptions pull my-subscription');
  console.log('\tnode subscriptions list');
  console.log('\tnode subscriptions list my-topic');
}
// [END usage]

// The command-line program
var program = {
  create: createSubscription,
  delete: deleteSubscription,
  pull: pullMessages,
  list: listSubscriptions,
  printUsage: printUsage,

  // Executed when this program is run from the command-line
  main: function (args, cb) {
    var command = args.shift();
    if (command === 'create') {
      this.create(args[0], args[1], cb);
    } else if (command === 'delete') {
      this.delete(args[0], cb);
    } else if (command === 'pull') {
      this.pull(args[0], cb);
    } else if (command === 'list') {
      this.list(args[0], cb);
    } else {
      this.printUsage();
    }
  }
};

if (module === require.main) {
  program.main(process.argv.slice(2), console.log);
}

module.exports = program;
