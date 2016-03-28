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

var async = require('async');
var subscriptionSample = require('./subscription');
var createTopicExample = subscriptionSample.createTopicExample;
var deleteTopicExample = subscriptionSample.deleteTopicExample;
var subscribeExample = subscriptionSample.subscribeExample;
var deleteSubscriptionExample = subscriptionSample.deleteSubscriptionExample;
var pubsub = subscriptionSample.pubsub;

// [START get_topic_policy]
/**
 * @param {string} topicName Name of the topic whose policy is to be retrieved.
 * @param {Function} callback Callback function.
 */
function getTopicPolicyExample(topicName, callback) {
  // Grab a reference to an existing topic
  var topic = pubsub.topic(topicName);

  // Retrieve the IAM policy for the topic
  topic.iam.getPolicy(function (err, policy, apiResponse) {
    if (err) {
      return callback(err);
    }

    // Received the policy
    console.log(policy); // { etag: 'ACAB' }
    callback(null, policy, apiResponse);
  });
}
// [END get_topic_policy]

// [START get_subscription_policy]
/**
 * @param {string} subscriptionName Name of the subscription whose policy is to
 * be retrieved.
 * @param {Function} callback Callback function.
 */
function getSubscriptionPolicyExample(subscriptionName, callback) {
  // Grab a reference to an existing subscription
  var subscription = pubsub.subscription(subscriptionName);

  // Retrieve the IAM policy for the subscription
  subscription.iam.getPolicy(function (err, policy, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log(policy); // { etag: 'ACAB' }
    callback(null, policy, apiResponse);
  });
}
// [END get_subscription_policy]

// [START set_topic_policy]
/**
 * @param {string} topicName Name of the topic whose policy is to be updated.
 * @param {Function} callback Callback function.
 */
function setTopicPolicyExample(topicName, callback) {
  // Grab a reference to an existing topic
  var topic = pubsub.topic(topicName);

  // Policy update
  var myPolicy = {
    bindings: [
      {
        role: 'roles/pubsub.publisher',
        members: ['serviceAccount:myotherproject@appspot.gserviceaccount.com']
      }
    ]
  };

  // Retrieve the IAM policy for the provided topic
  topic.iam.setPolicy(myPolicy, function (err, policy, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Updated policy for ' + topicName);
    callback(null, policy, apiResponse);
  });
}
// [END set_topic_policy]

// [START set_subscription_policy]
/**
 * @param {string} subscriptionName Name of the subscription whose policy is to
 * be updated.
 * @param {Function} callback Callback function.
 */
function setSubscriptionPolicyExample(subscriptionName, callback) {
  // Grab a reference to an existing subscription
  var subscription = pubsub.subscription(subscriptionName);

  // Policy update
  var myPolicy = {
    bindings: [
      {
        role: 'roles/pubsub.subscriber',
        members: ['serviceAccount:myotherproject@appspot.gserviceaccount.com']
      }
    ]
  };

  // Retrieve the IAM policy for the provided subscription
  subscription.iam.setPolicy(myPolicy, function (err, policy, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Updated policy for ' + subscriptionName);
    callback(null, policy, apiResponse);
  });
}
// [END set_subscription_policy]

// [START test_topic_permissions]
/**
 * @param {string} topicName Name of the topic whose policy is to be tested.
 * @param {Function} callback Callback function.
 */
function testTopicPermissionsExample(topicName, callback) {
  // Grab a reference to an existing topic
  var topic = pubsub.topic(topicName);

  var tests = [
    'pubsub.topics.attachSubscription',
    'pubsub.topics.publish',
    'pubsub.topics.update'
  ];

  // Retrieve the IAM policy for the provided topic
  topic.iam.testPermissions(tests, function (err, permissions, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Got permissions for ' + topicName);
    callback(null, permissions, apiResponse);
  });
}
// [END test_topic_permissions]

// [START test_subscription_permissions]
/**
 * @param {string} subscriptionName Name of the subscription whose policy is to
 * be tested.
 * @param {Function} callback Callback function.
 */
function testSubscriptionPermissionsExample(subscriptionName, callback) {
  // Grab a reference to an existing subscription
  var subscription = pubsub.subscription(subscriptionName);

  var tests = [
    'pubsub.subscriptions.consume',
    'pubsub.subscriptions.update'
  ];

  // Retrieve the IAM policy for the provided subscription
  subscription.iam.testPermissions(
    tests,
    function (err, permissions, apiResponse) {
      if (err) {
        return callback(err);
      }

      console.log('Got permissions for ' + subscriptionName);
      callback(null, permissions, apiResponse);
    }
  );
}
// [END test_subscription_permissions]

exports.setTopicPolicyExample = setTopicPolicyExample;
exports.setSubscriptionPolicyExample = setSubscriptionPolicyExample;

// Run the examples
exports.main = function (cb) {
  var topicName = 'messageCenter2';
  var subscriptionName = 'newMessages2';
  async.series([
    function (cb) {
      createTopicExample(topicName, cb);
    },
    function (cb) {
      getTopicPolicyExample(topicName, cb);
    },
    function (cb) {
      testTopicPermissionsExample(topicName, cb);
    },
    function (cb) {
      subscribeExample(topicName, subscriptionName, cb);
    },
    function (cb) {
      getSubscriptionPolicyExample(subscriptionName, cb);
    },
    function (cb) {
      testSubscriptionPermissionsExample(subscriptionName, cb);
    },
    function (cb) {
      deleteSubscriptionExample(subscriptionName, cb);
    },
    function (cb) {
      deleteTopicExample(topicName, cb);
    }
  ], cb || console.log);
};

if (module === require.main) {
  exports.main();
}
