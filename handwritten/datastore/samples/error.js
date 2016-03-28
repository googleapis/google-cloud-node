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

var gcloud = require('gcloud');

var dataset = gcloud.datastore.dataset({
  projectId: process.env.GCLOUD_PROJECT
});

// [START error]
function runQuery(cb) {
  var query = dataset.createQuery(['Company']).start('badrequest');

  dataset.runQuery(query, function (err, entities) {
    // Check for an error
    if (err) {
      console.log(err.errors); // [...]
      console.log(err.code); // 400
      console.log(err.message); // "Bad Request"
      console.log(err.response); // {...}

      // Process error

      // For example, treat permission error like no entities were found
      if (err.code === 403) {
        return cb(null, []);
      }

      // Forward the error to the caller
      return cb(err);
    }

    // We're good
    return cb(null, entities);
  });
}
// [END error]

exports.runQuery = runQuery;

if (module === require.main) {
  runQuery(console.log);
}
