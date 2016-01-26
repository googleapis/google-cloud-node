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

// [START auth]
// You must set the GOOGLE_APPLICATION_CREDENTIALS and GCLOUD_PROJECT
// environment variables to run this sample
var projectId = process.env.GCLOUD_PROJECT;

// [START require]
// Initialize gcloud
var gcloud = require('gcloud')({
  projectId: projectId
});

// Get a reference to the pubsub component
var pubsub = gcloud.pubsub();
// [END auth]

// [START create_topic]
function createTopic(callback) {
  var topicName = 'messageCenter';

  var topic = pubsub.topic(topicName);

  // Get the topic if it exists. Create it if it does not exist.
  topic.get({
    autoCreate: true
  }, callback);
}
// [END create_topic]

// [START publish]
function publish(callback) {
  var topicName = 'messageCenter';

  // Grab a reference to an existing topic
  var topic = pubsub.topic(topicName);

  // Publish a message to the topic
  topic.publish({
    data: 'Hello, world!'
  }, callback);
}
// [END publish]

// [START list_topics]
function getAllTopics(callback) {
  // Grab paginated topics
  pubsub.getTopics(function (err, topics, nextQuery) {
    // Quit on error
    if (err) {
      return callback(err);
    }
    // There is another page of topics
    if (nextQuery) {
      // Grab the remaining pages of topics recursively
      return getAllTopics(function (err, _topics) {
        if (_topics) {
          topics = topics.concat(_topics);
        }
        callback(err, topics);
      });
    }
    // Last page of topics
    return callback(err, topics);
  });
}
// [END list_topics]

// [START get_all_subscriptions]
function getAllSubscriptions(callback) {
  // Grab paginated subscriptions
  pubsub.getSubscriptions(function (err, subscriptions, nextQuery) {
    // Quit on error
    if (err) {
      return callback(err);
    }
    // There is another page of subscriptions
    if (nextQuery) {
      // Grab the remaining pages of subscriptions recursively
      return getAllSubscriptions(function (err, _subscriptions) {
        if (_subscriptions) {
          subscriptions = subscriptions.concat(_subscriptions);
        }
        callback(err, subscriptions);
      });
    }
    // Last page of subscriptions
    return callback(err, subscriptions);
  });
}
// [END get_all_subscriptions]

// [START create_subscription]
function subscribe(callback) {
  var topicName = 'messageCenter';
  var subscriptionName = 'newMessages';

  var options = {
    reuseExisting: true
  };
  pubsub.subscribe(topicName, subscriptionName, options, callback);
}
// [END create_subscription]

// [START handle_message]
function handleMessage(message) {
  console.log('received message: ' + message.data);
}
// [END handle_message]

// [START pull_messages]
function pullMessages(callback) {
  // Create a topic
  createTopic(function (err) {
    if (err) {
      return callback(err);
    }
    // Create a subscription to the topic
    subscribe(function (err, subscription) {
      if (err) {
        return callback(err);
      }
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

        // Acknowledge messages
        subscription.ack(messages.map(function (message) {
          return message.ackId;
        }), function (err) {
          if (err) {
            return callback(err);
          }
          callback(null, messages);
        });
      });
    });
  });
}
// [END pull_messages]

exports.createTopic = createTopic;
exports.subscribe = subscribe;
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
      console.log('create subscription...');
      subscribe(cb);
    },
    function (subscription, apiResponse, cb) {
      _subscription = subscription;
      responses.push([subscription, apiResponse]);
      console.log('created subscription');
      console.log('list all topics...');
      getAllTopics(cb);
    },
    function (topics, cb) {
      responses.push([topics]);
      console.log('got all topics');
      console.log('list all subscriptions...');
      getAllSubscriptions(cb);
    },
    function (subscriptions, cb) {
      responses.push([subscriptions]);
      console.log('got all subscriptions');
      console.log('publishing a message...');
      publish(cb);
    },
    function (messageIds, apiResponse, cb) {
      responses.push([messageIds, apiResponse]);
      console.log('published message');
      console.log('pulling messages...');
      pullMessages(cb);
    },
    function (messages, cb) {
      responses.push([messages]);
      console.log('got messages', messages.map(function (message) {
        return message.data;
      }));
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
