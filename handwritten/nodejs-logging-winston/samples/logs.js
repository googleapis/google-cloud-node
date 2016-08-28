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

// [START all]
// [START setup]
// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/google-cloud/latest/guides/authentication
var Logging = require('@google-cloud/logging');

// Instantiate a logging client
var logging = Logging();
// [END setup]

// [START list_log_entries]
/**
 * List log entires in the authenticated project.
 *
 * @param {object} [options] Optional. Configuration options.
 * @param {string} [options.filter] Optional. An advanced logs filter. An empty filter matches all log entries.
 * @param {number} [options.limit] Optional. Maximum number of logs to return.
 * @param {string} [options.sort] Optional. Default: "timestamp desc".
 * @param {function} callback The callback function.
 */
function listLogEntries (options, callback) {
  // Configuration to pass to Logging#getEntries
  var config = {};

  if (options.filter) {
    config.filter = options.filter;
  }
  if (options.limit) {
    config.pageSize = options.limit;
  }
  if (options.sort) {
    config.orderBy = options.sort;
  }

  // See https://googlecloudplatform.github.io/gcloud-node/#/docs/logging/latest/logging
  logging.getEntries(config, function (err, entries) {
    if (err) {
      return callback(err);
    }

    console.log('Found %d entries!', entries.length);
    return callback(null, entries);
  });
}
// [END list_log_entries]

// [START write_log_entry]
/**
 * Write a log entry.
 *
 * @param {object} options Configuration options.
 * @param {string} options.name The name of the log to write to.
 * @param {object} options.resource The resource to associate with the log entry.
 * @param {string|object} options.entry The body of the log entry.
 * @param {function} callback The callback function.
 */
function writeLogEntry (options, callback) {
  // Get a reference to an existing log
  var log = logging.log(options.name);

  // Prepare the entry
  var entry = log.entry(options.resource, options.entry);

  // See https://googlecloudplatform.github.io/gcloud-node/#/docs/logging/latest/logging/log
  log.write(entry, function (err) {
    if (err) {
      return callback(err);
    }

    console.log('Wrote entry to log: %s', options.name);
    callback(null);
  });
}
// [END write_log_entry]

// [START delete_log]
/**
 * Delete a log.
 *
 * @param {string} name The name of the log to delete.
 * @param {function} callback The callback function.
 */
function deleteLog (name, callback) {
  // Get a reference to the Log to be deleted
  var log = logging.log(name);

  // Delete the log
  log.delete(function (err) {
    if (err) {
      return callback(err);
    }

    console.log('Deleted log: %s', name);
    callback(null);
  });
}
// [END delete_log]
// [END all]

// The command-line program
var cli = require('yargs');
var utils = require('../utils');

var program = module.exports = {
  listLogEntries: listLogEntries,
  writeLogEntry: writeLogEntry,
  deleteLog: deleteLog,
  main: function (args) {
    // Run the command-line program
    cli.help().strict().parse(args).argv;
  }
};

cli
  .demand(1)
  .command('list', 'List log entries.', {
    filter: {
      alias: 'f',
      type: 'string',
      requiresArg: true,
      description: 'Only log entries matching the filter are written.'
    },
    limit: {
      alias: 'l',
      type: 'number',
      requiresArg: true,
      description: 'Maximum number of results to return.'
    },
    sort: {
      alias: 's',
      type: 'string',
      requiresArg: true,
      description: 'Sort results.'
    }
  }, function (options) {
    program.listLogEntries(utils.pick(options, ['filter', 'limit', 'sort']), utils.makeHandler());
  })
  .command('write <name> <resource> <entry>', 'Write a log entry.', {}, function (options) {
    try {
      options.resource = JSON.parse(options.resource);
    } catch (err) {
      console.error('"resource" must be a valid JSON string!');
    }
    try {
      options.entry = JSON.parse(options.entry);
    } catch (err) {
      return console.error('"entry" must be a valid JSON string!');
    }
    program.writeLogEntry(utils.pick(options, ['name', 'resource', 'entry']), utils.makeHandler());
  })
  .command('delete <name>', 'Delete a Log.', {}, function (options) {
    program.deleteLog(options.name, utils.makeHandler(false));
  })
  .example('node $0 list', 'List all log entries.')
  .example('node $0 list -f "severity = ERROR" -s "timestamp" -l 2', 'List up to 2 error entries, sorted by timestamp ascending.')
  .example('node $0 write my-log \'{"type":"gae_app","labels":{"module_id":"default"}}\' \'{"message":"Hello World!"}\'', 'Write a log entry.')
  .example('node $0 delete my-log', 'Delete "my-log".')
  .wrap(100)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/logging/docs');

if (module === require.main) {
  program.main(process.argv.slice(2));
}
