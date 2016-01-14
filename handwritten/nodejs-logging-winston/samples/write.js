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
var projectId = process.env.TEST_PROJECT_ID;
var keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS;

projectId = projectId || '<your-project-id>';
keyFilename = keyFilename || '/path/to/keyfile.json';

var gcloud = require('gcloud')({
  projectId: projectId,
  keyFilename: keyFilename
});

var logging = gcloud.logging();
// [END setup]

function write(callback) {
  var log = logging.log('myLog');

  // Modify this resource type to match a resource in your project
  // See https://cloud.google.com/logging/docs/api/ref_v2beta1/rest \
  //       /v2beta1/monitoredResourceDescriptors/list 
  var resource = {
    type: 'gae_app',
    labels: {
      module_id: 'default',
      version_id: 'express'
    }
  };

  var entry = log.entry(resource, {
    foo: 'bar'
  });

  var secondEntry = log.entry(resource, {
    beep: 'boop'
  });

  // You can log multiple entries one at a a time, but it is best to write
  // multiple entires together in a batch.
  log.write([
    entry,
    secondEntry
  ], callback);
}
// [END write]

// [START deleteLog]
function deleteLog(callback) {
  var log = logging.log('myLog');

  // Delete the logs
  log.delete(callback);
}
// [END deleteLog]

exports.write = write;
exports.deleteLog = deleteLog;

if (module === require.main) {
  write(function (err, apiResponse) {
    console.log(err, 'apiResponse:', apiResponse);
    if (err) {
      return;
    }
    deleteLog(function (err, apiResponse) {
      console.log(err, 'apiResponse:', apiResponse);
    });
  });
}
