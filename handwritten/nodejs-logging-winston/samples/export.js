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
// By default, gcloud will authenticate using the service account file specified
// by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use the
// project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/guides/authentication
var gcloud = require('gcloud');

// Get a reference to the logging component
var logging = gcloud.logging();
// [END setup]

// [START listSinks]
/**
 * @param {Function} callback Callback function.
 */
function listSinksExample (callback) {
  // list all sinks in the authenticated project
  logging.getSinks(function (err, sinks) {
    if (err) {
      return callback(err);
    }

    // Should have received all sinks
    console.log('Found ' + sinks.length + ' sinks');
    callback(null, sinks);
  });
}
// [END listSinks]

// [START createSink]
/**
 * @param {string} sinkName Name of the new sink.
 * @param {Object} config Configuration options for the new sink.
 * @param {Function} callback Callback function.
 */
function createSinkExample (sinkName, config, callback) {
  // create a new sink in the authenticated project
  //
  // This method only works if you are authenticated as yourself, e.g. using the
  // gcloud SDK.
  logging.createSink(sinkName, config, function (err, sink, apiResponse) {
    if (err) {
      return callback(err);
    }

    // Should have received newly created sink
    console.log('Created ' + sinkName, sink);
    callback(null, sink, apiResponse);
  });
}
// [END createSink]

// [START updateSink]
/**
 * @param {string} sinkName Name of the sink to update.
 * @param {Object} config New configuration options for the sink.
 * @param {Function} callback Callback function.
 */
function updateSinkExample (sinkName, config, callback) {
  // Get a reference to an existing sink
  var sink = logging.sink(sinkName);

  // update a sink
  //
  // This method only works if you are authenticated as yourself, e.g. using the
  // gcloud SDK.
  sink.setMetadata(config, function (err, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Updated ' + sinkName);
    callback(null, apiResponse);
  });
}
// [END updateSink]

// [START deleteSink]
/**
 * @param {string} sinkName Name of the sink to delete.
 * @param {Function} callback Callback function.
 */
function deleteSinkExample (sinkName, callback) {
  // Get a reference to an existing sink
  var sink = logging.sink(sinkName);

  // delete a sink
  //
  // This method only works if you are authenticated as yourself, e.g. using the
  // gcloud SDK.
  sink.delete(function (err, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Deleted ' + sinkName);
    callback(null, apiResponse);
  });
}
// [END deleteSink]

// Run the examples
exports.main = function (cb) {
  listSinksExample(cb || console.log);
};
exports.createSinkExample = createSinkExample;
exports.updateSinkExample = updateSinkExample;
exports.deleteSinkExample = deleteSinkExample;

if (module === require.main) {
  exports.main();
}
