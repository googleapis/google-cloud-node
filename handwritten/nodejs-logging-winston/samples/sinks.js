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
// https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/latest/guides/authentication
var Logging = require('@google-cloud/logging');
// [END setup]

// [START create_sink]
var Storage = require('@google-cloud/storage');

function createSink (sinkName, bucketName, filter, callback) {
  var logging = Logging();
  var storage = Storage();

  // The destination can be a Cloud Storage bucket, a Cloud Pub/Sub topic,
  // or a BigQuery dataset. In this case, it is a Cloud Storage Bucket.
  // See https://cloud.google.com/logging/docs/api/tasks/exporting-logs for
  // information on the destination format.
  var destination = storage.bucket(bucketName);
  var sink = logging.sink(sinkName);

  /**
   * The filter determines which logs this sink matches and will be exported
   * to the destination. For example a filter of 'severity>=INFO' will send
   * all logs that have a severity of INFO or greater to the destination.
   * See https://cloud.google.com/logging/docs/view/advanced_filters for more
   * filter information.
   */
  var config = {
    destination: destination,
    filter: filter
  };

  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging/latest/logging/sink?method=create
  sink.create(config, function (err, sink, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Created sink %s to %s', sinkName, bucketName);
    return callback(null, sink, apiResponse);
  });
}
// [END create_sink]

function getSinkMetadata (sinkName, callback) {
  var logging = Logging();
  var sink = logging.sink(sinkName);

  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging/latest/logging/sink?method=getMetadata
  sink.getMetadata(function (err, metadata) {
    if (err) {
      return callback(err);
    }

    console.log('Got metadata for sink: %s', sinkName);
    return callback(null, metadata);
  });
}

function listSinks (callback) {
  var logging = Logging();

  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging/latest/logging?method=getSinks
  logging.getSinks(function (err, sinks) {
    if (err) {
      return callback(err);
    }

    console.log('Found %d sink(s)!', sinks.length);
    return callback(null, sinks);
  });
}

function updateSink (sinkName, filter, callback) {
  var logging = Logging();
  var sink = logging.sink(sinkName);

  /**
   * The filter determines which logs this sink matches and will be exported
   * to the destination. For example a filter of 'severity>=INFO' will send
   * all logs that have a severity of INFO or greater to the destination.
   * See https://cloud.google.com/logging/docs/view/advanced_filters for more
   * filter information.
   */
  var metadata = {
    filter: filter
  };

  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging/latest/logging/sink?method=setMetadata
  sink.setMetadata(metadata, function (err, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Updated sink: %s', sinkName);
    return callback(null, apiResponse);
  });
}

function deleteSink (sinkName, callback) {
  var logging = Logging();
  var sink = logging.sink(sinkName);

  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging/latest/logging/sink?method=delete
  sink.delete(function (err, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Deleted sink: %s', sinkName);
    return callback(null, apiResponse);
  });
}

// The command-line program
var cli = require('yargs');
var utils = require('../utils');

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
  .command('create <sinkName> <bucketName> [filter]', 'Creates a new sink with the given name to the specified bucket with an optional filter.', {}, function (options) {
    program.createSink(options.sinkName, options.bucketName, options.filter, utils.makeHandler(false));
  })
  .command('get <sinkName>', 'Gets the metadata for the specified sink.', {}, function (options) {
    program.getSinkMetadata(options.sinkName, utils.makeHandler());
  })
  .command('list', 'Lists all sinks.', {}, function () {
    program.listSinks(utils.makeHandler(true, 'id'));
  })
  .command('update <sinkName> <filter>', 'Updates the filter for the specified sink.', {}, function (options) {
    program.updateSink(options.sinkName, options.filter, utils.makeHandler(false));
  })
  .command('delete <sinkName>', 'Deletes the specified sink.', {}, function (options) {
    program.deleteSink(options.sinkName, utils.makeHandler(false));
  })
  .example('node $0 create export-errors app-error-logs', 'Create a new sink named "export-errors" that exports logs to a bucket named "app-error-logs".')
  .example('node $0 get export-errors', 'Get the metadata for a sink name "export-errors".')
  .example('node $0 list', 'List all sinks.')
  .example('node $0 update export-errors "severity >= WARNING"', 'Update the filter for a sink named "export-errors".')
  .example('node $0 delete export-errors', 'Delete a sink named "export-errors".')
  .wrap(120)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/logging/docs');

if (module === require.main) {
  program.main(process.argv.slice(2));
}
