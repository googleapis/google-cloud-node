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

// [START create_topic]
/**
 * Create a new topic.
 *
 * @param {string} topicName Name for the new topic.
 * @param {Function} callback The callback function.
 */
function createTopic (topicName, callback) {
  if (!topicName) {
    return callback(new Error('"topicName" is required!'));
  }

  var topic = pubsub.topic(topicName);

  // Get the topic if it exists. Create it if it does not exist.
  topic.get({
    autoCreate: true
  }, function (err, topic) {
    if (err) {
      return callback(err);
    }

    // Created the topic
    console.log('Created topic: %s', topicName);
    return callback(null, topic);
  });
}
// [END create_topic]

// [START delete_topic]
/**
 * Delete a topic.
 *
 * @param {string} topicName Name of the topic to delete.
 * @param {Function} callback Callback function.
 */
function deleteTopic (topicName, callback) {
  if (!topicName) {
    return callback(new Error('"topicName" is required!'));
  }

  // Grab a reference to an existing topic
  var topic = pubsub.topic(topicName);

  // Delete the topic
  topic.delete(function (err) {
    if (err) {
      return callback(err);
    }

    // Deleted the topic
    console.log('Deleted topic: %s', topicName);
    return callback(null);
  });
}
// [END delete_topic]

// [START publish]
/**
 * Publish a message to a topic.
 *
 * @param {string} topicName Name of the topic to which to publish.
 * @param {Function} callback Callback function.
 */
function publishMessage (topicName, message, callback) {
  if (!topicName) {
    return callback(new Error('"topicName" is required!'));
  } else if (!message) {
    return callback(new Error('"message" is required!'));
  }
  try {
    message = JSON.parse(message);
  } catch (err) {
    return callback(new Error('"message" must be a valid JSON string!'));
  }

  // Grab a reference to an existing topic
  var topic = pubsub.topic(topicName);

  // Publish a message to the topic
  topic.publish(message, function (err, messageIds) {
    if (err) {
      return callback(err);
    }

    console.log('Published %d messages!', messageIds.length);
    return callback(null, messageIds);
  });
}
// [END publish]

// [START list_topics]
/**
 * List all topics in the current project.
 *
 * @param {Function} callback The callback function.
 */
function listTopics (callback) {
  pubsub.getTopics(function (err, topics) {
    if (err) {
      return callback(err);
    }

    console.log('Found %d topics!', topics.length);
    return callback(null, topics);
  });
}
// [END list_topics]

// [START usage]
function printUsage () {
  console.log('Usage: node topics COMMAND [ARGS...]');
  console.log('\nCommands:\n');
  console.log('\tcreate TOPIC_NAME');
  console.log('\tdelete TOPIC_NAME');
  console.log('\tpublish TOPIC_NAME MESSAGE');
  console.log('\tlist');
  console.log('\nExamples:\n');
  console.log('\tnode topics create my-topic');
  console.log('\tnode topics list');
  console.log('\tnode topics publish my-topic \'{"data":"Hello world!"}\'');
  console.log('\tnode topics delete my-topic');
}
// [END usage]

// The command-line program
var program = {
  create: createTopic,
  delete: deleteTopic,
  publish: publishMessage,
  list: listTopics,
  printUsage: printUsage,

  // Executed when this program is run from the command-line
  main: function (args, cb) {
    var command = args.shift();
    if (command === 'create') {
      this.create(args[0], cb);
    } else if (command === 'delete') {
      this.delete(args[0], cb);
    } else if (command === 'publish') {
      this.publish(args[0], args[1], cb);
    } else if (command === 'list') {
      this.list(cb);
    } else {
      this.printUsage();
    }
  }
};

if (module === require.main) {
  program.main(process.argv.slice(2), console.log);
}

module.exports = program;
