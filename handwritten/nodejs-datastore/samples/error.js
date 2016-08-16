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

// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/google-cloud/latest/guides/authentication
var Datastore = require('@google-cloud/datastore');

// Instantiate a datastore client
var datastore = Datastore();

// [START error]
function runQuery (cb) {
  var query = datastore.createQuery(['Company']).start('badrequest');

  datastore.runQuery(query, function (err, entities) {
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
