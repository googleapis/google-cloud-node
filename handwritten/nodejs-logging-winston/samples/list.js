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

// [START list]
// [START auth]
// You must set the GOOGLE_APPLICATION_CREDENTIALS and GCLOUD_PROJECT
// environment variables to run this sample
var projectId = process.env.GCLOUD_PROJECT;

// [START require]
// Initialize gcloud
var gcloud = require('gcloud')({
  projectId: projectId
});
// [END require]
// [END auth]

// Get a reference to the logging component
var logging = gcloud.logging();

/**
 * @param {Object} [options] Configuration options for the request.
 * @param {Function} callback Callback function.
 */
function listExample(options, callback) {
  if (typeof options === 'function') {
    callback = options;
  }

  // Retrieve the latest some log entries from the authenticated project.
  logging.getEntries(options, function (err, entries, nextQuery, apiResponse) {
    if (err) {
      return callback(err);
    }

    // Should have received some log entries
    console.log('Found ' + entries.length + ' entries');
    callback(null, entries, nextQuery, apiResponse);
  });
}
// [END list]

// Run the examples
exports.main = function (options, cb) {
  listExample(options || { pageSize: 1 }, cb || console.log);
};

if (module === require.main) {
  exports.main();
}
