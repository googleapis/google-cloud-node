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

// Initialize gcloud
var gcloud = require('gcloud')({
  projectId: projectId
});

// Get a reference to the pubsub component
var pubsub = gcloud.pubsub();
// [END auth]

// [START create_topic]
/**
 * @param {string} topicName Name for the new topic.
 * @param {Function} callback Callback function.
 */
function createTopicExample(topicName, callback) {
  var topic = pubsub.topic(topicName);

  // Get the topic if it exists. Create it if it does not exist.
  topic.get({
    autoCreate: true
  }, function (err, topic, apiResponse) {
    if (err) {
      return callback(err);
    }

    // Created the topic
    console.log('Created topic ' + topicName);
    callback(null, topic, apiResponse);
  });
}
// [END create_topic]

// [START delete_topic]
/**
 * @param {string} topicName Name of the topic to delete.
 * @param {Function} callback Callback function.
 */
function deleteTopicExample(topicName, callback) {
  var topic = pubsub.topic(topicName);

  // Delete the topic
  topic.delete(function (err, apiResponse) {
    if (err) {
      return callback(err);
    }

    // Deleted the topic
    console.log('Deleted topic ' + topicName);
    callback(null, apiResponse);
  });
}
// [END delete_topic]

// [START delete_subscription]
/**
 * @param {string} subscriptionName Name of the subscription to delete.
 * @param {Function} callback Callback function.
 */
function deleteSubscriptionExample(subscriptionName, callback) {
  var subscription = pubsub.subscription(subscriptionName);

  // Delete the subscription
  subscription.delete(function (err, apiResponse) {
    if (err) {
      return callback(err);
    }

    // Deleted the subscription
    console.log('Deleted subscription ' + subscriptionName);
    callback(null, apiResponse);
  });
}
// [END delete_subscription]

// [START publish]
/**
 * @param {string} topicName Name of the topic to which to publish.
 * @param {Function} callback Callback function.
 */
function publishExample(topicName, callback) {
  // Grab a reference to an existing topic
  var topic = pubsub.topic(topicName);

  // Publish a message to the topic
  topic.publish({
    data: 'Hello, world!'
  }, function (err, messageIds, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Published ' + messageIds.length + ' messages');
    callback(null, messageIds, apiResponse);
  });
}
// [END publish]

// [START list_topics]
/**
 * @param {string} [pageToken] Page to retrieve.
 * @param {Function} callback Callback function.
 */
function getAllTopicsExample(pageToken, callback) {
  if (typeof pageToken === 'function') {
    callback = pageToken;
    pageToken = undefined;
  }
  var options = {};
  if (pageToken) {
    options.pageToken = pageToken;
  }

  // Grab paginated topics
  pubsub.getTopics(options, function (err, topics, nextQuery) {
    // Quit on error
    if (err) {
      return callback(err);
    }

    // There is another page of topics
    if (nextQuery) {
      // Grab the remaining pages of topics recursively
      return getAllTopicsExample(nextQuery.token, function (err, _topics) {
        if (_topics) {
          topics = topics.concat(_topics);
        }
        callback(null, topics);
      });
    }
    // Last page of topics
    return callback(null, topics);
  });
}
// [END list_topics]

// [START get_all_subscriptions]
/**
 * @param {string} [pageToken] Page to retrieve.
 * @param {Function} callback Callback function.
 */
function getAllSubscriptionsExample(pageToken, callback) {
  if (typeof pageToken === 'function') {
    callback = pageToken;
    pageToken = undefined;
  }
  var options = {};
  if (pageToken) {
    options.pageToken = pageToken;
  }
  // Grab paginated subscriptions
  pubsub.getSubscriptions(
    options,
    function (err, subscriptions, nextQuery) {
      // Quit on error
      if (err) {
        return callback(err);
      }

      // There is another page of subscriptions
      if (nextQuery) {
        // Grab the remaining pages of subscriptions recursively
        return getAllSubscriptionsExample(
          nextQuery.token,
          function (err, _subscriptions) {
            if (_subscriptions) {
              subscriptions = subscriptions.concat(_subscriptions);
            }
            callback(null, subscriptions);
          }
        );
      }
      // Last page of subscriptions
      return callback(null, subscriptions);
    }
  );
}
// [END get_all_subscriptions]

// [START create_subscription]
/**
 * @param {string} topicName Name of the topic for the new subscription.
 * @param {string} subscriptionName Name for the new subscription.
 * @param {Function} callback Callback function.
 */
function subscribeExample(topicName, subscriptionName, callback) {
  var options = {
    reuseExisting: true
  };
  pubsub.subscribe(
    topicName,
    subscriptionName,
    options,
    function (err, subscription, apiResponse) {
      if (err) {
      return callback(err);
    }

      // Got the subscription
      console.log('Subscribed to ' + topicName);
      callback(null, subscription, apiResponse);
    }
  );
}
// [END create_subscription]

// [START handle_message]
function handleMessageExample(message) {
  console.log('received message: ' + message.data);
}
// [END handle_message]

// [START pull_messages]
/**
 *
 */
function pullMessagesExample(topicName, subscriptionName, callback) {
  // Use the "async" library to handle a chain of asynchronous functions
  async.waterfall([
    function (cb) {
      // Create a topic
      createTopicExample(topicName, cb);
    },
    function (topic, apiResponse, cb) {
      // Create a subscription
      subscribeExample(topicName, subscriptionName, cb);
    },
    function (subscription, apiResponse, cb) {
      var options = {
        // Limit the amount of messages pulled.
        maxResults: 100,
        // If set, the system will respond immediately. Otherwise, wait until
        // new messages are available. Returns if timeout is reached.
        returnImmediately: false
      };
      // Pull any messages on the subscription
      subscription.pull(options, cb);
    },
    function (messages, apiResponse, cb) {
      // Do something for each message
      messages.forEach(handleMessageExample);

      // Acknowledge messages
      var subscription = pubsub.subscription(subscriptionName);
      subscription.ack(messages.map(function (message) {
        return message.ackId;
      }), function (err) {
        if (err) {
          return cb(err);
        }
        cb(null, messages);
      });
    }
  ], function (err, messages) {
    if (err) {
      return callback(err);
    }

    console.log('Pulled ' + messages.length + ' messages');
    callback(null, messages);
  });
}
// [END pull_messages]

exports.createTopicExample = createTopicExample;
exports.deleteTopicExample = deleteTopicExample;
exports.subscribeExample = subscribeExample;
exports.deleteSubscriptionExample = deleteSubscriptionExample;
exports.pubsub = pubsub;
exports.main = function (cb) {
  var topicName = 'messageCenter';
  var subscriptionName = 'newMessages';
  async.series([
    function (cb) {
      createTopicExample(topicName, cb);
    },
    function (cb) {
      subscribeExample(topicName, subscriptionName, cb);
    },
    function (cb) {
      getAllTopicsExample(cb);
    },
    function (cb) {
      getAllSubscriptionsExample(cb);
    },
    function (cb) {
      publishExample(topicName, cb);
    },
    function (cb) {
      pullMessagesExample(topicName, subscriptionName, cb);
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
