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

// [START setup]
// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/google-cloud/latest/guides/authentication
var PubSub = require('@google-cloud/pubsub');
// [END setup]

function createSubscription (topicName, subscriptionName, callback) {
  var pubsub = PubSub();
  var topic = pubsub.topic(topicName);

  // Get the subscription if it exists, otherwise create the subscription
  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub/topic?method=subscribe
  topic.subscribe(subscriptionName, function (err, subscription, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Created subscription %s to topic %s', subscriptionName, topicName);
    return callback(null, subscription, apiResponse);
  });
}

function deleteSubscription (subscriptionName, callback) {
  var pubsub = PubSub();
  var subscription = pubsub.subscription(subscriptionName);

  // Delete the subscription
  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub/subscription?method=delete
  subscription.delete(function (err, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Deleted subscription: %s', subscriptionName);
    return callback(null, apiResponse);
  });
}

function getSubscriptionMetadata (subscriptionName, callback) {
  var pubsub = PubSub();
  var subscription = pubsub.subscription(subscriptionName);

  // Get the metadata for the specified subscription
  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub/subscription?method=getMetadata
  subscription.getMetadata(function (err, metadata) {
    if (err) {
      return callback(err);
    }

    console.log('Got metadata for subscription: %s', subscriptionName);
    return callback(null, metadata);
  });
}

function listSubscriptions (topicName, callback) {
  var pubsub = PubSub();
  var topic = pubsub.topic(topicName);

  // List all subscriptions for the specified topic
  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub/topic?method=getSubscriptions
  topic.getSubscriptions(function (err, subscriptions) {
    if (err) {
      return callback(err);
    }

    console.log('Found %d subscription(s)!', subscriptions.length);
    return callback(null, subscriptions);
  });
}

function listAllSubscriptions (callback) {
  var pubsub = PubSub();

  // List all subscriptions
  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub?method=getSubscriptions
  pubsub.getSubscriptions(function (err, subscriptions) {
    if (err) {
      return callback(err);
    }

    console.log('Found %d subscription(s)!', subscriptions.length);
    return callback(null, subscriptions);
  });
}

function handleMessage (message) {
  console.log('received message: ' + message.data);
}

function pullMessages (subscriptionName, callback) {
  var pubsub = PubSub();
  var subscription = pubsub.subscription(subscriptionName);

  // Pull any messages on the subscription
  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub/subscription?method=pull
  subscription.pull(function (err, messages) {
    if (err) {
      return callback(err);
    }
    // Do something for each message
    messages.forEach(handleMessage);

    console.log('Pulled %d message(s)!', messages.length);

    var ackIds = messages.map(function (message) {
      return message.ackId;
    });

    // Acknowledge messages
    // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub/subscription?method=ack
    subscription.ack(ackIds, function (err, apiResponse) {
      if (err) {
        return callback(err);
      }

      console.log('Acked %d message(s)!', messages.length);
      return callback(null, messages, apiResponse);
    });
  });
}

// The command-line program
var cli = require('yargs');
var makeHandler = require('../utils').makeHandler;

var program = module.exports = {
  createSubscription: createSubscription,
  deleteSubscription: deleteSubscription,
  getSubscriptionMetadata: getSubscriptionMetadata,
  pullMessages: pullMessages,
  listSubscriptions: listSubscriptions,
  listAllSubscriptions: listAllSubscriptions,
  main: function (args) {
    // Run the command-line program
    cli.help().strict().parse(args).argv;
  }
};

cli
  .demand(1)
  .command('create <topicName> <subscriptionName>', 'Creates a new subscription.', {}, function (options) {
    program.createSubscription(options.topicName, options.subscriptionName, makeHandler(true, 'id'));
  })
  .command('list [topicName]', 'Lists subscriptions, optionally filtering by a topic.', {}, function (options) {
    if (options.topicName) {
      program.listSubscriptions(options.topicName, makeHandler(true, 'id'));
    } else {
      program.listAllSubscriptions(makeHandler(true, 'id'));
    }
  })
  .command('get <subscriptionName>', 'Gets the metadata the metadata for the specified subscription.', {}, function (options) {
    program.getSubscriptionMetadata(options.subscriptionName, makeHandler());
  })
  .command('pull <subscriptionName>', 'Pulls messages for the specified subscription.', {}, function (options) {
    program.pullMessages(options.subscriptionName, makeHandler(false));
  })
  .command('delete <subscriptionName>', 'Deletes the specified subscription.', {}, function (options) {
    program.deleteSubscription(options.subscriptionName, makeHandler(false));
  })
  .example('node $0 create greetings greetings-worker-1', 'Creates a subscription named "greetings-worker-1" to a topic named "greetings".')
  .example('node $0 delete greetings-worker-1', 'Deletes a subscription named "greetings-worker-1".')
  .example('node $0 pull greetings-worker-1', 'Pulls messages for a subscription named "greetings-worker-1".')
  .example('node $0 list', 'Lists all subscriptions.')
  .example('node $0 list greetings', 'Lists subscriptions for a topic named "greetings".')
  .wrap(120)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/pubsub/docs');

if (module === require.main) {
  program.main(process.argv.slice(2));
}
