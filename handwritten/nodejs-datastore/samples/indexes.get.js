// Copyright 2020 Google LLC
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

async function main(indexId = 'YOUR_INDEX_ID') {
  // [START datastore_admin_index_get]
  const {Datastore} = require('@google-cloud/datastore');
  const datastore = new Datastore();

  async function getIndex() {
    /**
     * TODO(developer): Uncomment these variables before running the sample.
     */
    // const indexId = 'YOUR_INDEX_ID';

    // Create a reference to the index before performing operations on it.
    const index = datastore.index(indexId);

    // Get the index's metadata, including its state, properties, and more.
    const [metadata] = await index.getMetadata();
    console.log('Properties:', metadata.properties);
  }

  await getIndex();
  // [END datastore_admin_index_get]
}

const args = process.argv.slice(2);
main(...args).catch(console.error);
