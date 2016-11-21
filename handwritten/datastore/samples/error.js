/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const Datastore = require('@google-cloud/datastore');

// [START error]
function runQuery () {
  // Instantiates a client
  const datastore = Datastore();

  const query = datastore.createQuery(['Company']).start('badrequest');

  return datastore.runQuery(query)
    .then((results) => {
      const entities = results[0];
      console.log('Entities:');
      entities.forEach((entity) => console.log(entity));
      return entities;
    })
    .catch((err) => {
      console.log(err.errors); // [...]
      console.log(err.code); // 400
      console.log(err.message); // "Bad Request"
      console.log(err.response); // {...}

      // Process error

      // For example, treat permission error like no entities were found
      if (err.code === 403) {
        return [];
      }

      // Forward the error to the caller
      return Promise.reject(err);
    });
}
// [END error]

exports.runQuery = runQuery;

if (module === require.main) {
  exports.runQuery();
}
