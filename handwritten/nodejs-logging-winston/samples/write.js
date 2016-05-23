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

/* jshint camelcase:false */
'use strict';

var async = require('async');

// [START write]
// [START setup]
// By default, gcloud will authenticate using the service account file specified
// by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use the
// project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/guides/authentication
var gcloud = require('gcloud');

// Get a reference to the logging component
var logging = gcloud.logging();
// [END setup]

/**
 * @param {string} logName Name of the log to write to.
 * @param {Function} callback Callback function.
 */
function writeExample (logName, callback) {
  // Get a reference to an existing log
  var log = logging.log(logName);

  // Modify this resource type to match a resource in your project
  // See https://cloud.google.com/logging/docs/api/ref_v2beta1/rest \
  //       /v2beta1/monitoredResourceDescriptors/list
  var resource = {
    type: 'gae_app',
    // This example targets a "App Engine" resource in the default module with
    // a version_id of "express"
    labels: {
      module_id: 'default',
      version_id: 'express'
    }
  };

  // Create a log entry attached to the specified resource
  var entry = log.entry(resource, {
    foo: 'bar'
  });

  // Create a second log entry attached to the specified resource
  var secondEntry = log.entry(resource, {
    beep: 'boop'
  });

  // Save the two log entries. You can log multiple entries one at a a time, but
  // it is best to write multiple entires together in a batch.
  log.write([
    entry,
    secondEntry
  ], function (err, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Wrote to ' + logName);
    callback(null, apiResponse);
  });
}
// [END write]

// [START deleteLog]
/**
 * @param {string} logName Name of the log to delete.
 * @param {Function} callback Callback function.
 */
function deleteLogExample (logName, callback) {
  // Get a reference to an existing log
  var log = logging.log(logName);

  // Delete the log
  log.delete(function (err, apiResponse) {
    if (err) {
      return callback(err);
    }

    console.log('Deleted ' + logName);
    callback(null, apiResponse);
  });
}
// [END deleteLog]

// Run the examples
exports.main = function (cb) {
  async.series([
    function (cb) {
      writeExample('myLog', cb);
    },
    function (cb) {
      deleteLogExample('myLog', cb);
    }
  ], cb || console.log);
};

if (module === require.main) {
  exports.main();
}
