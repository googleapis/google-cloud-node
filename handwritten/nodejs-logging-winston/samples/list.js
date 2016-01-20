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

'use strict';

// [START list]
// [START auth]
// You must set these environment variables to run this sample
var projectId = process.env.TEST_PROJECT_ID;
var keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// If you don't set the environment variables, then you can modify this file
// to set the values
projectId = projectId || '<your-project-id>';
keyFilename = keyFilename || '/path/to/keyfile.json';

// [START require]
// Provide projectId and authentication to gcloud
var gcloud = require('gcloud')({
  projectId: projectId,
  keyFilename: keyFilename
});
// [END require]
// [END auth]

// Get a reference to the logging component
var logging = gcloud.logging();

function list(callback) {
  // Retrieve the latest 3 log entries from the authenticated project.
  logging.getEntries({
    pageSize: 3
  }, callback);
}
// [END list]

exports.list = list;

if (module === require.main) {
  console.log('retrieving latest 3 log entries...');
  list(function (err, apiResponse) {
    console.log(err, 'apiResponse:', apiResponse);
  });
}
