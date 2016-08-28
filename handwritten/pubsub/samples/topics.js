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
// [END all]

// The command-line program
var cli = require('yargs');
var makeHandler = require('../utils').makeHandler;

var program = module.exports = {
  createTopic: createTopic,
  deleteTopic: deleteTopic,
  publishMessage: publishMessage,
  listTopics: listTopics,
  main: function (args) {
    // Run the command-line program
    cli.help().strict().parse(args).argv;
  }
};

cli
  .demand(1)
  .command('create <name>', 'Create a new topic.', {}, function (options) {
    program.createTopic(options.name, makeHandler(true, 'id'));
  })
  .command('list', 'List topics.', {}, function (options) {
    program.listTopics(makeHandler(true, 'id'));
  })
  .command('publish <topic> <message>', 'Publish a message to the specified topic.', {}, function (options) {
    program.publishMessage(options.topic, options.message, makeHandler());
  })
  .command('delete <name>', 'Delete the specified topic.', {}, function (options) {
    program.deleteTopic(options.name, makeHandler(false));
  })
  .example('node $0 create my-topic', 'Create a new topic named "my-topic".')
  .example('node $0 list', 'List topics.')
  .example('node $0 publish my-topic \'{"data":"Hello world!"}\'', 'Publish a message to "my-topic".')
  .example('node $0 delete my-topic', 'Delete a topic named "my-topic".')
  .wrap(80)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/pubsub/docs');

if (module === require.main) {
  program.main(process.argv.slice(2));
}
