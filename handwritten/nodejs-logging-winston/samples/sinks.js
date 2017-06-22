/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

function createSink (sinkName, bucketName, filter) {
  // [START logging_create_sink]
  // Imports the Google Cloud client libraries
  const Logging = require('@google-cloud/logging');
  const Storage = require('@google-cloud/storage');

  // Instantiates clients
  const logging = Logging();
  const storage = Storage();

  // The name of the sink, e.g. "my-sink"
  // const sinkName = "my-sink";

  // The destination bucket, e.g. "my-bucket"
  // const bucketName = "my-bucket";

  // An option log filter, e.g. "severity=ERROR"
  // const filter = "severity=ERROR";

  // The destination can be a Cloud Storage bucket, a Cloud Pub/Sub topic,
  // or a BigQuery dataset. In this case, it is a Cloud Storage Bucket.
  // See https://cloud.google.com/logging/docs/api/tasks/exporting-logs for
  // information on the destination format.
  const destination = storage.bucket(bucketName);
  const sink = logging.sink(sinkName);

  /**
   * The filter determines which logs this sink matches and will be exported
   * to the destination. For example a filter of 'severity>=INFO' will send
   * all logs that have a severity of INFO or greater to the destination.
   * See https://cloud.google.com/logging/docs/view/advanced_filters for more
   * filter information.
   */
  const config = {
    destination: destination,
    filter: filter
  };

  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging/latest/logging/sink?method=create
  sink.create(config)
    .then(() => {
      console.log(`Created sink ${sinkName} to ${bucketName}`);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  // [END logging_create_sink]
}

function getSinkMetadata (sinkName) {
  // [START logging_get_sink]
  // Imports the Google Cloud client library
  const Logging = require('@google-cloud/logging');

  // Instantiates a client
  const logging = Logging();

  // The sink to retrieve, e.g. "my-sink"
  // const sinkName = "my-sink";

  const sink = logging.sink(sinkName);

  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging/latest/logging/sink?method=getMetadata
  sink.getMetadata()
    .then((results) => {
      const metadata = results[0];

      console.log(`Name: ${metadata.name}`);
      console.log(`Destination: ${metadata.destination}`);
      console.log(`Filter: ${metadata.filter}`);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  // [END logging_get_sink]
}

function listSinks () {
  // [START logging_list_sinks]
  // Imports the Google Cloud client library
  const Logging = require('@google-cloud/logging');

  // Instantiates a client
  const logging = Logging();

  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging/latest/logging?method=getSinks
  logging.getSinks()
    .then((results) => {
      const sinks = results[0];

      console.log('Sinks:');
      sinks.forEach((sink) => {
        console.log(sink.name);
        console.log(`  Destination: ${sink.metadata.destination}`);
        console.log(`  Filter: ${sink.metadata.filter}`);
      });
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  // [END logging_list_sinks]
}

function updateSink (sinkName, filter) {
  // [START logging_update_sink]
  // Imports the Google Cloud client library
  const Logging = require('@google-cloud/logging');

  // Instantiates a client
  const logging = Logging();

  // The sink to update, e.g. "my-sink"
  // const sinkName = "my-sink";

  // The the filter for the sink, e.g. "severity >= WARNING"
  // const filter = "severity >= WARNING";

  const sink = logging.sink(sinkName);

  /**
   * The filter determines which logs this sink matches and will be exported
   * to the destination. For example a filter of 'severity>=INFO' will send
   * all logs that have a severity of INFO or greater to the destination.
   * See https://cloud.google.com/logging/docs/view/advanced_filters for more
   * filter information.
   */
  const metadata = {
    filter: filter
  };

  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging/latest/logging/sink?method=setMetadata
  sink.setMetadata(metadata)
    .then((results) => {
      console.log(`Sink ${sinkName} updated.`);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  // [END logging_update_sink]
}

function deleteSink (sinkName) {
  // [START logging_update_sink]
  // Imports the Google Cloud client library
  const Logging = require('@google-cloud/logging');

  // Instantiates a client
  const logging = Logging();

  // The sink to delete, e.g. "my-sink"
  // const sinkName = "my-sink";

  const sink = logging.sink(sinkName);

  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging/latest/logging/sink?method=delete
  sink.delete()
    .then((results) => {
      console.log(`Sink ${sinkName} deleted.`);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
  // [END logging_update_sink]
}

// The command-line program
const cli = require(`yargs`)
  .demand(1)
  .command('create <sinkName> <bucketName> [filter]', 'Creates a new sink with the given name to the specified bucket with an optional filter.', {}, (opts) => {
    createSink(opts.sinkName, opts.bucketName, opts.filter);
  })
  .command('get <sinkName>', 'Gets the metadata for the specified sink.', {}, (opts) => {
    getSinkMetadata(opts.sinkName);
  })
  .command('list', 'Lists all sinks.', {}, listSinks)
  .command('update <sinkName> <filter>', 'Updates the filter for the specified sink.', {}, (opts) => {
    updateSink(opts.sinkName, opts.filter);
  })
  .command('delete <sinkName>', 'Deletes the specified sink.', {}, (opts) => {
    deleteSink(opts.sinkName);
  })
  .example('node $0 create export-errors app-error-logs', 'Create a new sink named "export-errors" that exports logs to a bucket named "app-error-logs".')
  .example('node $0 get export-errors', 'Get the metadata for a sink name "export-errors".')
  .example('node $0 list', 'List all sinks.')
  .example('node $0 update export-errors "severity >= WARNING"', 'Update the filter for a sink named "export-errors".')
  .example('node $0 delete export-errors', 'Delete a sink named "export-errors".')
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/logging/docs`)
  .help()
  .strict();

if (module === require.main) {
  cli.parse(process.argv.slice(2));
}
