// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// sample-metadata
//  title: error sample
//  description: sample show how to handle and process error
//  usage: node error.js

const {Datastore} = require('@google-cloud/datastore');

// [START error]
function main() {
  // Creates a client
  const datastore = new Datastore();

  const query = datastore.createQuery(['Company']).start('badrequest');

  async function runQuery() {
    try {
      const [result] = await datastore.runQuery(query);
      // etc., etc.
      return result;
    } catch (error) {
      // do something with error.
      console.log(error.code); // 3
      //Forward the error to caller
      throw error;
    }
  }

  runQuery().catch(err => {
    console.log(err.message); // "Error parsing protocol message"
  });
  // [END error]
}

main(...process.argv.slice(2));
