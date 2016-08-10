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
// By default, gcloud will authenticate using the service account file specified
// by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use the
// project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/guides/authentication
var gcloud = require('gcloud');

// Instantiate a pubsub client
var pubsub = gcloud.pubsub();
// [END auth]

// [START get_topic_policy]
/**
 * Retrieve a topic's IAM policy.
 *
 * @param {string} topicName The name of the topic.
 * @param {function} callback The callback function.
 */
function getTopicPolicy (topicName, callback) {
  if (!topicName) {
    return callback(new Error('"topicName" is required!'));
  }

  // Grab a reference to an existing topic
  var topic = pubsub.topic(topicName);

  // Retrieve the IAM policy for the topic
  topic.iam.getPolicy(function (err, policy) {
    if (err) {
      return callback(err);
    }

    console.log('Got topic policy:', policy);
    return callback(null, policy);
  });
}
// [END get_topic_policy]

// [START get_subscription_policy]
/**
 * Retrieve a subcription's IAM policy.
 *
 * @param {string} subscriptionName The name of the subscription.
 * @param {function} callback The callback function.
 */
function getSubscriptionPolicy (subscriptionName, callback) {
  if (!subscriptionName) {
    return callback(new Error('"subscriptionName" is required!'));
  }

  // Grab a reference to an existing subscription
  var subscription = pubsub.subscription(subscriptionName);

  // Retrieve the IAM policy for the subscription
  subscription.iam.getPolicy(function (err, policy) {
    if (err) {
      return callback(err);
    }

    console.log('Got subscription policy:', policy);
    return callback(null, policy);
  });
}
// [END get_subscription_policy]

// [START set_topic_policy]
/**
 * Set a topic's IAM policy.
 *
 * @param {string} topicName The name of the topic.
 * @param {function} callback The callback function.
 */
function setTopicPolicy (topicName, callback) {
  if (!topicName) {
    return callback(new Error('"topicName" is required!'));
  }

  // Grab a reference to an existing topic
  var topic = pubsub.topic(topicName);

  // Policy update
  var newPolicy = {
    bindings: [
      {
        role: 'roles/pubsub.publisher',
        members: ['serviceAccount:myotherproject@appspot.gserviceaccount.com']
      }
    ]
  };

  // Set the IAM policy for the specified topic
  topic.iam.setPolicy(newPolicy, function (err, policy) {
    if (err) {
      return callback(err);
    }

    console.log('Updated policy for topic: %s', topicName);
    return callback(null, policy);
  });
}
// [END set_topic_policy]

// [START set_subscription_policy]
/**
 * @param {string} subscriptionName Name of the subscription whose policy is to
 * be updated.
 * @param {function} callback The callback function.
 */
function setSubscriptionPolicy (subscriptionName, callback) {
  if (!subscriptionName) {
    return callback(new Error('"subscriptionName" is required!'));
  }

  // Grab a reference to an existing subscription
  var subscription = pubsub.subscription(subscriptionName);

  // Policy update
  var newPolicy = {
    bindings: [
      {
        role: 'roles/pubsub.subscriber',
        members: ['serviceAccount:myotherproject@appspot.gserviceaccount.com']
      }
    ]
  };

  // Set the IAM policy for the specified subscription
  subscription.iam.setPolicy(newPolicy, function (err, policy) {
    if (err) {
      return callback(err);
    }

    console.log('Updated policy for subscription: %s', subscriptionName);
    return callback(null, policy);
  });
}
// [END set_subscription_policy]

// [START test_topic_permissions]
/**
 * Test a topic's IAM permissions.
 *
 * @param {string} topicName The name of the topic.
 * @param {function} callback The callback function.
 */
function testTopicPermissions (topicName, callback) {
  if (!topicName) {
    return callback(new Error('"topicName" is required!'));
  }

  // Grab a reference to an existing topic
  var topic = pubsub.topic(topicName);

  var permissionsToTest = [
    'pubsub.topics.attachSubscription',
    'pubsub.topics.publish',
    'pubsub.topics.update'
  ];

  // Test the IAM policy for the specified topic
  topic.iam.testPermissions(permissionsToTest, function (err, permissions) {
    if (err) {
      return callback(err);
    }

    console.log('Tested permissions for topic: %s', topicName);
    return callback(null, permissions);
  });
}
// [END test_topic_permissions]

// [START test_subscription_permissions]
/**
 * Test a subcription's IAM permissions.
 *
 * @param {string} subscriptionName The name of the subscription.
 * @param {function} callback The callback function.
 */
function testSubscriptionPermissions (subscriptionName, callback) {
  if (!subscriptionName) {
    return callback(new Error('"subscriptionName" is required!'));
  }

  // Grab a reference to an existing subscription
  var subscription = pubsub.subscription(subscriptionName);

  var permissionsToTest = [
    'pubsub.subscriptions.consume',
    'pubsub.subscriptions.update'
  ];

  // Test the IAM policy for the specified subscription
  subscription.iam.testPermissions(permissionsToTest, function (err, permissions) {
    if (err) {
      return callback(err);
    }

    console.log('Tested permissions for subscription: %s', subscriptionName);
    return callback(null, permissions);
  });
}
// [END test_subscription_permissions]

// [START usage]
function printUsage () {
  console.log('Usage: node iam RESOURCE COMMAND [ARGS...]');
  console.log('\nResources:\n');
  console.log('\ttopics');
  console.log('\tsubscriptions');
  console.log('\nCommands:\n');
  console.log('\tget NAME');
  console.log('\tset NAME');
  console.log('\ttest NAME');
  console.log('\nExamples:\n');
  console.log('\tnode iam topics get my-topic');
  console.log('\tnode iam topics set my-topic');
  console.log('\tnode iam topics test my-topic');
  console.log('\tnode iam subscriptions get my-subscription');
  console.log('\tnode iam subscriptions set my-subscription');
  console.log('\tnode iam subscriptions test my-subscription');
}
// [END usage]

// The command-line program
var program = {
  getTopicPolicy: getTopicPolicy,
  getSubscriptionPolicy: getSubscriptionPolicy,
  setTopicPolicy: setTopicPolicy,
  setSubscriptionPolicy: setSubscriptionPolicy,
  testTopicPermissions: testTopicPermissions,
  testSubscriptionPermissions: testSubscriptionPermissions,
  printUsage: printUsage,

  // Executed when this program is run from the command-line
  main: function (args, cb) {
    var resource = args.shift();
    var command = args.shift();
    if (resource === 'topics') {
      if (command === 'get') {
        this.getTopicPolicy(args[0], cb);
      } else if (command === 'set') {
        this.setTopicPolicy(args[0], cb);
      } else if (command === 'test') {
        this.testTopicPermissions(args[0], cb);
      } else {
        this.printUsage();
      }
    } else if (resource === 'subscriptions') {
      if (command === 'get') {
        this.getSubscriptionPolicy(args[0], cb);
      } else if (command === 'set') {
        this.setSubscriptionPolicy(args[0], cb);
      } else if (command === 'test') {
        this.testSubscriptionPermissions(args[0], cb);
      } else {
        this.printUsage();
      }
    } else {
      this.printUsage();
    }
  }
};

if (module === require.main) {
  program.main(process.argv.slice(2), console.log);
}

module.exports = program;
