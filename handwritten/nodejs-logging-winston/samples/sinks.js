// Copyright 2015-2016, Google, Inc.
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
var gcloud = require('google-cloud');

// Instantiate the logging client
var logging = gcloud.logging();
// [END setup]

// [START create_sink]
/**
 * Create a new sink.
 *
 * @param {objects} options Configuration options.
 * @param {string} options.name The name for new sink.
 * @param {string} options.destination Destination for the new sink.
 * @param {string} options.type The type of destination. Choices are:
 *     "bucket", "dataset", or "topic".
 * @param {function} callback The callback function.
 */
function createSink (options, callback) {
  var sink = logging.sink(options.name);
  var config = {};

  // Based on the type of destination, prepare the appropriate object
  if (options.type === 'bucket') {
    config.destination = gcloud.storage().bucket(options.destination);
  } else if (options.type === 'dataset') {
    config.destination = gcloud.bigquery().dataset(options.destination);
  } else if (options.type === 'topic') {
    config.destination = gcloud.pubsub().topic(options.destination);
  }

  // See https://googlecloudplatform.github.io/gcloud-node/#/docs/logging/latest/logging/sink
  sink.create(config, function (err, sink) {
    if (err) {
      return callback(err);
    }

    console.log('Created sink: %s', options.name);
    return callback(null, sink);
  });
}
// [END create_sink]

// [START get_sink_metadata]
/**
 * Get the metatdata for the specified sink.
 *
 * @param {string} name The name of the sink to get.
 * @param {function} callback The callback function.
 */
function getSinkMetadata (name, callback) {
  var sink = logging.sink(name);

  // See https://googlecloudplatform.github.io/gcloud-node/#/docs/logging/latest/logging/sink
  sink.getMetadata(function (err, metadata) {
    if (err) {
      return callback(err);
    }

    console.log('Got metadata for sink: %s', name);
    return callback(null, metadata);
  });
}
// [END get_sink_metadata]

// [START list_sinks]
/**
 * List sinks in the authenticated project.
 *
 * @param {function} callback The callback function.
 */
function listSinks (callback) {
  // See https://googlecloudplatform.github.io/gcloud-node/#/docs/logging/latest/logging
  logging.getSinks(function (err, sinks) {
    if (err) {
      return callback(err);
    }

    console.log('Found %d sink(s)!', sinks.length);
    return callback(null, sinks);
  });
}
// [END list_sinks]

// [START update_sink]
/**
 * Update the metdata for a sink.
 *
 * @param {object} options Configuration options.
 * @param {string} name The name of the sink to update.
 * @param {object} metadata The new metadata for the sink.
 * @param {function} callback The callback function.
 */
function updateSink (options, callback) {
  var sink = logging.sink(options.name);

  // See https://googlecloudplatform.github.io/gcloud-node/#/docs/logging/latest/logging/sink
  sink.setMetadata(options.metadata, function (err) {
    if (err) {
      return callback(err);
    }

    console.log('Updated sink: %s', options.name);
    return callback(null);
  });
}
// [END update_sink]

// [START delete_sink]
/**
 * Delete a sink.
 *
 * @param {string} name The name of the sink to delete.
 * @param {function} callback The callback function.
 */
function deleteSink (name, callback) {
  var sink = logging.sink(name);

  // See https://googlecloudplatform.github.io/gcloud-node/#/docs/logging/latest/logging/sink
  sink.delete(function (err) {
    if (err) {
      return callback(err);
    }

    console.log('Deleted sink: %s', name);
    callback(null);
  });
}
// [END delete_sink]
// [END all]

// The command-line program
var cli = require('yargs');

var program = module.exports = {
  createSink: createSink,
  getSinkMetadata: getSinkMetadata,
  listSinks: listSinks,
  updateSink: updateSink,
  deleteSink: deleteSink,
  main: function (args) {
    // Run the command-line program
    cli.help().strict().parse(args).argv;
  }
};

cli
  .demand(1)
  .command('create <name> <destination>', 'Create a new sink with the given name and destination.', {
    filter: {
      alias: 'f',
      type: 'string',
      requiresArg: true,
      description: 'Optional. Only log entries matching the filter are written.'
    },
    type: {
      alias: 't',
      demand: true,
      type: 'string',
      choices: ['bucket', 'dataset', 'topic'],
      requiresArg: true,
      description: 'The type of destination.'
    }
  }, function (options) {
    program.createSink(options, console.log);
  })
  .command('get <name>', 'Get the metadata for the specified sink.', {}, function (options) {
    program.getSinkMetadata(options.name, console.log);
  })
  .command('list', 'List all sinks in the authenticated project.', {}, function () {
    program.listSinks(console.log);
  })
  .command('update <name> <metadata>', 'Update the metadata for the specified sink.', {}, function (options) {
    try {
      options.metadata = JSON.parse(options.metadata);
    } catch (err) {
      return console.error('"metadata" must be a valid JSON string!');
    }
    program.updateSink(options, console.log);
  })
  .command('delete <name>', 'Delete the specified sink.', {}, function (options) {
    program.deleteSink(options.name, console.log);
  })
  .example('node $0 create my-sink my-bucket --type bucket', 'Create a new sink named "my-sink" that exports logs to a Cloud Storage bucket.')
  .example('node $0 create my-sink my-dataset --type dataset', 'Create a new sink named "my-sink" that exports logs to a BigQuery dataset.')
  .example('node $0 create my-sink my-topic --type topic', 'Create a new sink named "my-sink" that exports logs to a Cloud Pub/Sub topic.')
  .example('node $0 get my-sink', 'Get the metadata for "my-sink".')
  .example('node $0 list', 'List all sinks in the authenticated project.')
  .example('node $0 update my-sink \'{"filter":"severity > ALERT"}\'', 'Update the specified sink.')
  .example('node $0 delete my-sink', 'Delete "my-sink".')
  .wrap(100)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/logging/docs');

if (module === require.main) {
  program.main(process.argv.slice(2));
}
