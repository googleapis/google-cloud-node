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

// [START listSinks]
function listSinks(callback) {
  // list all sinks in the authenticated project
  logging.getSinks(callback);
}
// [END listSinks]

// [START createSink]
function createSink(callback) {
  // Get a reference to the Cloud Storage component
  var gcs = gcloud.storage();

  // create a new sink in the authenticated project
  //
  // This method only works if you are authenticated as yourself, e.g. using the
  // gcloud SDK.
  logging.createSink('mySink', {
    destination: gcs.bucket('logging-bucket')
  }, callback);
}
// [END createSink]

// [START updateSink]
function updateSink(callback) {
  // Get a reference to the Cloud Storage component
  var gcs = gcloud.storage();
  // Get a reference to an existing sink
  var sink = logging.sink('mySink');

  // update a sink
  //
  // This method only works if you are authenticated as yourself, e.g. using the
  // gcloud SDK.
  sink.setMetadata({
    // change destination to something else
    destination: gcs.bucket('other-logging-bucket')
  }, callback);
}
// [END updateSink]

// [START deleteSink]
function deleteSink(callback) {
  // Get a reference to an existing sink
  var sink = logging.sink('mySink');

  // delete a sink
  //
  // This method only works if you are authenticated as yourself, e.g. using the
  // gcloud SDK.
  sink.delete(callback);
}
// [END deleteSink]

exports.listSinks = listSinks;
exports.createSink = createSink;
exports.updateSink = updateSink;
exports.deleteSink = deleteSink;

if (module === require.main) {
  listSinks(function (err, sinks, apiResponse) {
    console.log(err, 'sinks:', sinks, 'apiResponse:', apiResponse);
    if (err) {
      return;
    }
  });
}
