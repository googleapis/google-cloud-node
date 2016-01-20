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

/* jshint camelcase:false */
'use strict';

// [START write]
// [START setup]
// You must set these environment variables to run this sample
var projectId = process.env.TEST_PROJECT_ID;
var keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// If you don't set the environment variables, then you can modify this file
// to set the values
projectId = projectId || '<your-project-id>';
keyFilename = keyFilename || '/path/to/keyfile.json';

// Provide projectId and authentication to gcloud
var gcloud = require('gcloud')({
  projectId: projectId,
  keyFilename: keyFilename
});

// Get a reference to the logging component
var logging = gcloud.logging();
// [END setup]

function write(callback) {
  // Get a reference to an existing log
  var log = logging.log('myLog');

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
  ], callback);
}
// [END write]

// [START deleteLog]
function deleteLog(callback) {
  // Get a reference to an existing log
  var log = logging.log('myLog');

  // Delete the log
  log.delete(callback);
}
// [END deleteLog]

exports.write = write;
exports.deleteLog = deleteLog;

if (module === require.main) {
  console.log('writing 2 log entries...');
  write(function (err, apiResponse) {
    console.log(err, 'apiResponse:', apiResponse);
    if (err) {
      return;
    }
    console.log('success!');
    console.log('deleting the log entries...');
    // If you remove this code, then you can find the two log entries that
    // were written in the log view in the cloud console.
    deleteLog(function (err, apiResponse) {
      console.log(err, 'apiResponse:', apiResponse);
      if (!err) {
        console.log('success!');
      }
    });
  });
}
