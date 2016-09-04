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

function createTopic (topicName, callback) {
  var pubsub = PubSub();
  var topic = pubsub.topic(topicName);

  // Get the topic if it exists, otherwise create the topic
  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub/topic?method=get
  topic.get({
    autoCreate: true
  }, function (err, topic, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Created topic: %s', topicName);
    return callback(null, topic, apiResponse);
  });
}

function deleteTopic (topicName, callback) {
  var pubsub = PubSub();
  var topic = pubsub.topic(topicName);

  // Delete the topic
  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub/topic?method=delete
  topic.delete(function (err, apiResponse) {
    if (err) {
      return callback(err);
    }

    // Deleted the topic
    console.log('Deleted topic: %s', topicName);
    return callback(null, apiResponse);
  });
}

function publishMessage (topicName, message, callback) {
  var pubsub = PubSub();
  var topic = pubsub.topic(topicName);

  /**
   * Publish a message to the topic, e.g. { "data": "Hello, world!" }. In
   * Node.js, a PubSub message requires a "data" property, which can have a
   * string or an object as its value. An optional "attributes" property can be
   * an object of key/value pairs, where the keys and values are both strings.
   * See https://cloud.google.com/pubsub/reference/rpc/google.pubsub.v1#google.pubsub.v1.PubsubMessage
   *
   * Topic#publish() takes either a single message object or an array of message
   * objects. See https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub/topic?method=publish
   */
  topic.publish(message, function (err, messageIds, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Published %d message(s)!', messageIds.length);
    return callback(null, messageIds, apiResponse);
  });
}

function listTopics (callback) {
  var pubsub = PubSub();

  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/latest/pubsub?method=getTopics
  pubsub.getTopics(function (err, topics) {
    if (err) {
      return callback(err);
    }

    console.log('Found %d topics!', topics.length);
    return callback(null, topics);
  });
}

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
  .command('create <topicName>', 'Creates a new topic.', {}, function (options) {
    program.createTopic(options.topicName, makeHandler(true, 'id'));
  })
  .command('list', 'Lists topics.', {}, function (options) {
    program.listTopics(makeHandler(true, 'id'));
  })
  .command('publish <topicName> <message>', 'Publish a message to the specified topic.', {}, function (options) {
    try {
      options.message = JSON.parse(options.message);
      program.publishMessage(options.topicName, options.message, makeHandler());
    } catch (err) {
      return console.error('"message" must be a valid JSON string!');
    }
  })
  .command('delete <topicName>', 'Deletes the specified topic.', {}, function (options) {
    program.deleteTopic(options.topicName, makeHandler(false));
  })
  .example('node $0 create greetings', 'Creates a new topic named "greetings".')
  .example('node $0 list', 'Lists all topics.')
  .example('node $0 publish greetings \'{"data":"Hello world!"}\'', 'Publishes a message to "greetings".')
  .example('node $0 delete greetings', 'Deletes a topic named "greetings".')
  .wrap(120)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/pubsub/docs');

if (module === require.main) {
  program.main(process.argv.slice(2));
}
