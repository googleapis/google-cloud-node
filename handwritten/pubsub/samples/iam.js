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
var utils = require('./subscription');
var createTopic = utils.createTopic;
var subscribe = utils.subscribe;

// [START get_topic_policy]
function getTopicPolicy(topic, callback) {
  // Retrieve the IAM policy for the provided topic
  topic.iam.getPolicy(function (err, policy) {
    if (err) {
      return callback(err);
    }
    console.log(policy); // { etag: 'ACAB' }
    return callback(err, policy);
  });
}
// [END get_topic_policy]

// [START get_subscription_policy]
function getSubscriptionPolicy(subscription, callback) {
  // Retrieve the IAM policy for the provided subscription
  subscription.iam.getPolicy(function (err, policy) {
    if (err) {
      return callback(err);
    }
    console.log(policy); // { etag: 'ACAB' }
    return callback(err, policy);
  });
}
// [END get_subscription_policy]

// [START set_topic_policy]
function setTopicPolicy(topic, callback) {
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
  topic.iam.setPolicy(myPolicy, callback);
}
// [END set_topic_policy]

// [START set_subscription_policy]
function setSubscriptionPolicy(subscription, callback) {
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
  subscription.iam.setPolicy(myPolicy, callback);
}
// [END set_subscription_policy]

// [START test_topic_permissions]
function testTopicPermissions(topic, callback) {
  var tests = [
    'pubsub.topics.attachSubscription',
    'pubsub.topics.publish',
    'pubsub.topics.update'
  ];

  // Retrieve the IAM policy for the provided topic
  topic.iam.testPermissions(tests, callback);
}
// [END test_topic_permissions]

// [START test_subscription_permissions]
function testSubscriptionPermissions(subscription, callback) {
  var tests = [
    'pubsub.subscriptions.consume',
    'pubsub.subscriptions.update'
  ];

  // Retrieve the IAM policy for the provided subscription
  subscription.iam.testPermissions(tests, callback);
}
// [END test_subscription_permissions]

exports.setTopicPolicy = setTopicPolicy;
exports.setSubscriptionPolicy = setSubscriptionPolicy;
exports.runSample = runSample;

function runSample(callback) {
  var _subscription;
  var _topic;
  // Gather responses
  var responses = [];
  async.waterfall([
    function (cb) {
      console.log('create topic...');
      createTopic(cb);
    },
    function (topic, apiResponse, cb) {
      _topic = topic;
      responses.push([topic, apiResponse]);
      console.log('created topic');
      console.log('get topic IAM policy...');
      getTopicPolicy(topic, cb);
    },
    function (policy, cb) {
      responses.push([policy]);
      console.log('got topic policy', policy);
      console.log('testing topic permissions...');
      testTopicPermissions(_topic, cb);
    },
    function (permissions, apiResponse, cb) {
      responses.push([permissions, apiResponse]);
      console.log('tested topic permissions', permissions);
      console.log('create subscription...');
      subscribe(cb);
    },
    function (subscription, apiResponse, cb) {
      _subscription = subscription;
      responses.push([subscription, apiResponse]);
      console.log('created subscription');
      console.log('get subscription IAM policy...');
      getSubscriptionPolicy(subscription, cb);
    },
    function (policy, cb) {
      responses.push([policy]);
      console.log('got subscription policy', policy);
      console.log('testing subscription permissions...');
      testSubscriptionPermissions(_subscription, cb);
    },
    function (permissions, apiResponse, cb) {
      responses.push([permissions, apiResponse]);
      console.log('tested subscription permissions', permissions);
      console.log('deleting subscription...');
      _subscription.delete(cb);
    },
    function (apiResponse, cb) {
      console.log('deleted subscription');
      console.log('deleting topic...');
      _topic.delete(cb);
    }
  ], function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('deleted topic');
    }
    if (typeof callback === 'function') {
      callback(err, responses);
    }
  });
}

if (module === require.main) {
  runSample();
}
