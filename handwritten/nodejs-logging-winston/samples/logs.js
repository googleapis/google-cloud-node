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

function writeLogEntry (logName, callback) {
  var logging = Logging();
  var log = logging.log(logName);

  // Modify this resource to match a resource in your project
  // See https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/MonitoredResource
  var resource = {
    // This example targets the "global" resource for simplicity
    type: 'global'
  };

  // A text log entry
  var entry = log.entry(resource, 'Hello, world!');

  // A structured log entry
  var secondEntry = log.entry(resource, {
    name: 'King Arthur',
    quest: 'Find the Holy Grail',
    favorite_color: 'Blue'
  });

  // Save the two log entries. You can write entries one at a time, but it is
  // best to write multiple entires together in a batch.
  log.write([
    entry,
    secondEntry
  ], function (err, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Wrote to %s', logName);
    return callback(null, apiResponse);
  });
}

function writeLogEntryAdvanced (logName, options, callback) {
  var logging = Logging();
  var log = logging.log(logName);

  // Prepare the entry
  var entry = log.entry(options.resource, options.entry);

  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging/latest/logging/log?method=write
  log.write(entry, function (err, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Wrote entry to log: %s', logName);
    return callback(null, apiResponse);
  });
}

function listLogEntries (logName, callback) {
  var logging = Logging();
  var log = logging.log(logName);

  // List the most recent entries for a given log
  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging/latest/logging?method=getEntries
  log.getEntries(function (err, entries) {
    if (err) {
      return callback(err);
    }

    console.log('Found %d entries!', entries.length);
    return callback(null, entries);
  });
}

function listLogEntriesAdvanced (filter, pageSize, orderBy, callback) {
  var logging = Logging();
  var options = {};

  if (filter) {
    // See https://cloud.google.com/logging/docs/view/advanced_filters for more filter information.
    options.filter = filter;
  }
  if (pageSize) {
    options.pageSize = pageSize;
  }
  if (orderBy) {
    options.orderBy = orderBy;
  }

  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging/latest/logging?method=getEntries
  logging.getEntries(options, function (err, entries) {
    if (err) {
      return callback(err);
    }

    console.log('Found %d entries!', entries.length);
    return callback(null, entries);
  });
}

function deleteLog (logName, callback) {
  var logging = Logging();
  var log = logging.log(logName);

  // Deletes a logger and all its entries.
  // Note that a deletion can take several minutes to take effect.
  // See https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging/latest/logging/log?method=delete
  log.delete(function (err, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Deleted log: %s', logName);
    return callback(null, apiResponse);
  });
}

// The command-line program
var cli = require('yargs');
var utils = require('../utils');

var program = module.exports = {
  writeLogEntry: writeLogEntry,
  writeLogEntryAdvanced: writeLogEntryAdvanced,
  listLogEntries: listLogEntries,
  listLogEntriesAdvanced: listLogEntriesAdvanced,
  deleteLog: deleteLog,
  main: function (args) {
    // Run the command-line program
    cli.help().strict().parse(args).argv;
  }
};

cli
  .demand(1)
  .command('list', 'Lists log entries, optionally filtering, limiting, and sorting results.', {
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
    program.listLogEntriesAdvanced(options.filter, options.limit, options.sort, utils.makeHandler());
  })
  .command('write <logName> <resource> <entry>', 'Writes a log entry to the specified log.', {}, function (options) {
    try {
      options.resource = JSON.parse(options.resource);
    } catch (err) {
      return console.error('"resource" must be a valid JSON string!');
    }

    try {
      options.entry = JSON.parse(options.entry);
    } catch (err) {}

    program.writeLogEntryAdvanced(options.logName, utils.pick(options, ['resource', 'entry']), utils.makeHandler(false));
  })
  .command('delete <logName>', 'Deletes the specified Log.', {}, function (options) {
    program.deleteLog(options.logName, utils.makeHandler(false));
  })
  .example('node $0 list', 'List all log entries.')
  .example('node $0 list -f "severity=ERROR" -s "timestamp" -l 2', 'List up to 2 error entries, sorted by timestamp ascending.')
  .example('node $0 list -f \'logName="my-log"\' -l 2', 'List up to 2 log entries from the "my-log" log.')
  .example('node $0 write my-log \'{"type":"gae_app","labels":{"module_id":"default"}}\' \'"Hello World!"\'', 'Write a string log entry.')
  .example('node $0 write my-log \'{"type":"global"}\' \'{"message":"Hello World!"}\'', 'Write a JSON log entry.')
  .example('node $0 delete my-log', 'Delete "my-log".')
  .wrap(120)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/logging/docs');

if (module === require.main) {
  program.main(process.argv.slice(2));
}
