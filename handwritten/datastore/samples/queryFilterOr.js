// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// sample-metadata:
//   title: Create a union between two filters
//   description: Create a union between two filters (logical OR operator)

async function main() {
  // [START datastore_query_filter_or]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = "your Google Cloud project id";

  // Imports the Cloud Datastore
  const {Datastore, PropertyFilter, or} = require('@google-cloud/datastore');

  async function queryFilterOr() {
    // Instantiate the Datastore
    const datastore = new Datastore();
    const query = datastore
      .createQuery('Task')
      .filter(
        or([
          new PropertyFilter('description', '=', 'Buy milk'),
          new PropertyFilter('description', '=', 'Feed cats'),
        ])
      );

    const [entities] = await datastore.runQuery(query);
    for (const entity of entities) {
      console.log(`Entity found: ${entity['description']}`);
    }
  }

  queryFilterOr();
  // [END datastore_query_filter_or]
}

const args = process.argv.slice(2);
main(...args).catch(console.error);
